"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=({theme:o})=>`
    text-align: left;
    width: 100%;
    color: ${o.colors.neutral800};
    border-radius: ${o.borderRadius};
    &:focus {
        background-color: ${o.colors.primary100};
    }
    &:not([aria-disabled]):hover {
        background-color: ${o.colors.primary100};
    }
`;exports.getOptionStyle=r;
