"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react/jsx-runtime"),y=require("react"),g=require("@strapi/icons"),c=require("styled-components"),m=require("../Flex/Flex.cjs"),b=require("../themes/utils.cjs"),j=require("../Typography/Typography.cjs"),x=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function h(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const T=h(y),l=x(c),_=c.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,v=l.default.div`
  animation: ${_} 2s infinite linear;
  will-change: transform;
`,q=l.default(m.Flex)`
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }

  ${b.buttonFocusStyle}
`,u=T.forwardRef(({children:e,startIcon:r,endIcon:t,onClick:n,disabled:a=!1,loading:s=!1,...d},p)=>{const f=n&&!a?n:void 0,i=a||s;return o.jsxs(q,{ref:p,"aria-disabled":i,onClick:f,as:"button",type:"button",background:"transparent",gap:2,...d,children:[s?o.jsx(v,{"aria-hidden":!0,children:o.jsx(g.Loader,{})}):r,o.jsx(j.Typography,{variant:"pi",textColor:i?"neutral600":"primary600",children:e}),t]})});u.displayName="TextButton";exports.TextButton=u;
