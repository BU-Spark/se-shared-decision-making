"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("react/jsx-runtime"),o=require("react"),n=require("styled-components"),i=require("./assets/loader.cjs"),l=require("../VisuallyHidden/VisuallyHidden.cjs"),c=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function d(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}return t.default=e,Object.freeze(t)}const u=d(o),f=c(n),m=n.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,g=f.default.img`
  animation: ${m} 1s infinite linear;
  will-change: transform;
  ${({small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`,y=u.forwardRef(({children:e,small:t=!1,...r},a)=>s.jsxs("div",{role:"alert","aria-live":"assertive",ref:a,...r,children:[s.jsx(l.VisuallyHidden,{children:e}),s.jsx(g,{src:i,"aria-hidden":!0,small:t})]}));exports.Loader=y;
