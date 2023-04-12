"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareSchemas = void 0;
const utils = __importStar(require("../../../utils"));
const strategies = {
    // No diffs
    exact(diffs) {
        return diffs;
    },
    // Diffs allowed on specific attributes properties
    strict(diffs) {
        const isIgnorableDiff = ({ path }) => {
            return (path.length === 3 &&
                // Root property must be attributes
                path[0] === 'attributes' &&
                // Need a valid string attribute name
                typeof path[1] === 'string' &&
                // The diff must be on ignorable attribute properties
                ['private', 'required', 'configurable'].includes(path[2]));
        };
        const shouldKeepDiff = (diff) => !isIgnorableDiff(diff);
        return diffs.filter(shouldKeepDiff);
    },
};
const compareSchemas = (a, b, strategy) => {
    const diffs = utils.json.diff(a, b);
    return strategies[strategy](diffs);
};
exports.compareSchemas = compareSchemas;
//# sourceMappingURL=index.js.map