"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssetsStream = void 0;
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const stream_1 = require("stream");
const IGNORED_FILES = ['.gitkeep'];
/**
 * Generate and consume assets streams in order to stream each file individually
 */
const createAssetsStream = (strapi) => {
    const assetsDirectory = (0, path_1.join)(strapi.dirs.static.public, 'uploads');
    const generator = async function* () {
        const files = await (0, fs_extra_1.readdir)(assetsDirectory);
        const validFiles = files.filter((file) => !IGNORED_FILES.includes(file));
        for (const filename of validFiles) {
            const filepath = (0, path_1.join)(assetsDirectory, filename);
            const stats = await (0, fs_extra_1.stat)(filepath);
            const stream = (0, fs_extra_1.createReadStream)(filepath);
            yield {
                filename,
                filepath,
                stream,
                stats: { size: stats.size },
            };
        }
    };
    return stream_1.Duplex.from(generator());
};
exports.createAssetsStream = createAssetsStream;
//# sourceMappingURL=assets.js.map