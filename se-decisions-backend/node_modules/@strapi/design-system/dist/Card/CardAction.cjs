"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("styled-components"),r=require("../Stack/Stack.cjs"),s=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},a=s(n),o=a.default(r.Stack).attrs({horizontal:!0,spacing:2})`
  position: absolute;
  top: ${({theme:t})=>t.spaces[3]};
  right: ${({position:t,theme:e})=>{if(t==="end")return e.spaces[3]}};
  left: ${({position:t,theme:e})=>{if(t==="start")return e.spaces[3]}};
`;exports.CardAction=o;
