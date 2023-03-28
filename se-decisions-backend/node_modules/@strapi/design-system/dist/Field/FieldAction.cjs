"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react/jsx-runtime"),n=require("react"),r=require("styled-components"),o=require("../Flex/Flex.cjs"),d=require("../VisuallyHidden/VisuallyHidden.cjs"),a=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},u=a(r),c=u.default(o.Flex)`
  font-size: 1.6rem;
  padding: 0;
`,f=n.forwardRef(({label:e,children:s,...l},i)=>t.jsxs(c,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...l,as:"button",ref:i,children:[t.jsx(d.VisuallyHidden,{as:"span",children:e}),n.cloneElement(s,{"aria-hidden":!0,focusable:!1})]}));exports.FieldAction=f;
