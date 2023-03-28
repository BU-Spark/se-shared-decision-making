import { WebSocket } from 'ws';
import type { client } from '../../../../types/remote/protocol';
interface IDispatcherState {
    transfer?: {
        kind: client.TransferKind;
        id: string;
    };
}
interface IDispatchOptions {
    attachTransfer?: boolean;
}
declare type Dispatch<T> = Omit<T, 'transferID' | 'uuid'>;
declare const createDispatcher: (ws: WebSocket) => {
    readonly transferID: string | undefined;
    readonly transferKind: "push" | "pull" | undefined;
    setTransferProperties: (properties: Exclude<IDispatcherState['transfer'], undefined>) => void;
    dispatch: <U = null>(message: Dispatch<client.Message>, options?: IDispatchOptions) => Promise<U | null>;
    dispatchCommand: <U_1 extends "end" | "init" | "status">(payload: {
        command: U_1;
    } & ([client.GetCommandParams<U_1>] extends [never] ? unknown : {
        params: client.GetCommandParams<U_1>;
    })) => Promise<null>;
    dispatchTransferAction: <T>(action: client.Action['action']) => Promise<T | null>;
    dispatchTransferStep: <T_1, A extends "stream" | "end" | "start" = "stream" | "end" | "start", S extends "entities" | "links" | "configuration" | "assets" = "entities" | "links" | "configuration" | "assets">(payload: {
        step: S;
        action: A;
    } & (A extends "stream" ? {
        data: client.GetTransferPushStreamData<S>;
    } : unknown)) => Promise<T_1 | null>;
};
export { createDispatcher };
