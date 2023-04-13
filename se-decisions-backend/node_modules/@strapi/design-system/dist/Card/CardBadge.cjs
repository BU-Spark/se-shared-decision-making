"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react/jsx-runtime"),s=require("styled-components"),d=require("../Badge/Badge.cjs"),r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},a=r(s),n=a.default.div`
  margin-left: auto;
  flex-shrink: 0;
`,o=a.default(d.Badge)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`,i=e=>t.jsx(n,{children:t.jsx(o,{...e})});exports.CardBadge=i;
