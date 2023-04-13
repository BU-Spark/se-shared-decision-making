"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react"),r=require("styled-components"),o=require("../RawTable/RawTr.cjs"),e=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},d=e(a),s=e(r),n=s.default(o.RawTr)`
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:t})=>t.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:t})=>t.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,i=t=>d.default.createElement(n,{...t});exports.Tr=i;
