"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPullController = void 0;
const stream_1 = require("stream");
const crypto_1 = require("crypto");
const utils_1 = require("./utils");
const providers_1 = require("../../providers");
const providers_2 = require("../../../errors/providers");
const TRANSFER_KIND = 'pull';
const VALID_TRANSFER_ACTIONS = ['bootstrap', 'close', 'getMetadata', 'getSchemas'];
exports.createPullController = (0, utils_1.handlerControllerFactory)((proto) => ({
    isTransferStarted() {
        return proto.isTransferStarted.call(this) && this.provider !== undefined;
    },
    verifyAuth() {
        return proto.verifyAuth.call(this, TRANSFER_KIND);
    },
    cleanup() {
        proto.cleanup.call(this);
        this.streams = {};
        delete this.provider;
    },
    assertValidTransferAction(action) {
        // Abstract the constant to string[] to allow looser check on the given action
        const validActions = VALID_TRANSFER_ACTIONS;
        if (validActions.includes(action)) {
            return;
        }
        throw new providers_2.ProviderTransferError(`Invalid action provided: "${action}"`, {
            action,
            validActions: Object.keys(VALID_TRANSFER_ACTIONS),
        });
    },
    async onMessage(raw) {
        const msg = JSON.parse(raw.toString());
        if (!(0, utils_1.isDataTransferMessage)(msg)) {
            return;
        }
        if (!msg.uuid) {
            await this.respond(undefined, new Error('Missing uuid in message'));
        }
        const { uuid, type } = msg;
        // Regular command message (init, end, status)
        if (type === 'command') {
            const { command } = msg;
            await this.executeAndRespond(uuid, () => {
                this.assertValidTransferCommand(command);
                // The status command don't have params
                if (command === 'status') {
                    return this.status();
                }
                return this[command](msg.params);
            });
        }
        // Transfer message (the transfer must be init first)
        else if (type === 'transfer') {
            await this.executeAndRespond(uuid, async () => {
                await this.verifyAuth();
                this.assertValidTransfer();
                return this.onTransferMessage(msg);
            });
        }
        // Invalid messages
        else {
            await this.respond(uuid, new Error('Bad Request'));
        }
    },
    async onTransferMessage(msg) {
        const { kind } = msg;
        if (kind === 'action') {
            return this.onTransferAction(msg);
        }
        if (kind === 'step') {
            return this.onTransferStep(msg);
        }
    },
    async onTransferAction(msg) {
        const { action } = msg;
        this.assertValidTransferAction(action);
        return this.provider?.[action]();
    },
    // TODO: Optimize performances (batching, client packets reconstruction, etc...)
    async flush(stage, id) {
        const stream = this.streams?.[stage];
        if (!stream) {
            throw new providers_2.ProviderTransferError(`No available stream found for ${stage}`);
        }
        try {
            for await (const chunk of stream) {
                await this.confirm({ type: 'transfer', data: chunk, ended: false, error: null, id });
            }
            await this.confirm({ type: 'transfer', data: null, ended: true, error: null, id });
        }
        catch (e) {
            await this.confirm({ type: 'transfer', data: null, ended: true, error: e, id });
        }
    },
    async onTransferStep(msg) {
        const { step, action } = msg;
        if (action === 'start') {
            if (this.streams?.[step] instanceof stream_1.Readable) {
                throw new Error('Stream already created, something went wrong');
            }
            const flushUUID = (0, crypto_1.randomUUID)();
            await this.createReadableStreamForStep(step);
            this.flush(step, flushUUID);
            return { ok: true, id: flushUUID };
        }
        if (action === 'end') {
            const stream = this.streams?.[step];
            if (stream?.readableEnded === false) {
                await new Promise((resolve) => {
                    stream?.on('close', resolve).destroy();
                });
            }
            delete this.streams?.[step];
            return { ok: true };
        }
    },
    async createReadableStreamForStep(step) {
        const mapper = {
            entities: () => this.provider?.createEntitiesReadStream(),
            links: () => this.provider?.createLinksReadStream(),
            configuration: () => this.provider?.createConfigurationReadStream(),
            assets: () => {
                const assets = this.provider?.createAssetsReadStream();
                if (!assets) {
                    throw new Error('bad');
                }
                async function* generator(stream) {
                    for await (const chunk of stream) {
                        const { stream: assetStream, ...rest } = chunk;
                        for await (const assetChunk of assetStream) {
                            yield { ...rest, chunk: assetChunk };
                        }
                    }
                }
                return stream_1.Readable.from(generator(assets));
            },
        };
        if (!(step in mapper)) {
            throw new Error('Invalid transfer step, impossible to create a stream');
        }
        if (!this.streams) {
            throw new Error('Invalid transfer state');
        }
        this.streams[step] = await mapper[step]();
    },
    // Commands
    async init() {
        if (this.transferID || this.provider) {
            throw new Error('Transfer already in progress');
        }
        await this.verifyAuth();
        this.transferID = (0, crypto_1.randomUUID)();
        this.startedAt = Date.now();
        this.streams = {};
        this.provider = (0, providers_1.createLocalStrapiSourceProvider)({
            autoDestroy: false,
            getStrapi: () => strapi,
        });
        return { transferID: this.transferID };
    },
    async end(params) {
        await this.verifyAuth();
        if (this.transferID !== params.transferID) {
            throw new providers_2.ProviderTransferError('Bad transfer ID provided');
        }
        this.cleanup();
        return { ok: true };
    },
    async status() {
        const isStarted = this.isTransferStarted();
        if (!isStarted) {
            const startedAt = this.startedAt;
            return {
                active: true,
                kind: TRANSFER_KIND,
                startedAt,
                elapsed: Date.now() - startedAt,
            };
        }
        return { active: false, kind: null, elapsed: null, startedAt: null };
    },
}));
//# sourceMappingURL=pull.js.map