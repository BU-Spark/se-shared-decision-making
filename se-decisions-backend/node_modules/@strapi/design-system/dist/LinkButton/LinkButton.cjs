"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react/jsx-runtime"),j=require("react"),h=require("react-router-dom"),m=require("styled-components"),x=require("../BaseButton/BaseButton.cjs"),o=require("../Button/utils.cjs"),l=require("../Flex/Flex.cjs"),v=require("../Typography/Typography.cjs"),B=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function S(e){if(e&&e.__esModule)return e;const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}return n.default=e,Object.freeze(n)}const _=S(j),q=B(m),k=q.default(x.BaseButtonWrapper)`
  &[aria-disabled='true'] {
    ${o.getDisabledStyle}
    &:active {
      ${o.getDisabledStyle}
    }
  }
  &:hover {
    ${o.getHoverStyle}
  }
  &:active {
    ${o.getActiveStyle}
  }
  ${o.getVariantStyle}
`,R=_.forwardRef(({variant:e="default",startIcon:n,endIcon:r,disabled:t=!1,children:p,size:i="S",href:u,to:s,...g},f)=>{const y=u?"_blank":void 0,b=u?"noreferrer noopener":void 0,c=i==="S"?2:"10px",d=4;return a.jsxs(k,{ref:f,"aria-disabled":t,size:i,variant:e,target:y,rel:b,to:t?void 0:s,href:t?"#":u,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:c,paddingLeft:d,paddingRight:d,paddingTop:c,pointerEvents:t?"none":void 0,...g,as:s&&!t?h.NavLink:"a",children:[n&&a.jsx(l.Flex,{"aria-hidden":!0,children:n}),a.jsx(v.Typography,{variant:i==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:p}),r&&a.jsx(l.Flex,{"aria-hidden":!0,children:r})]})});exports.LinkButton=R;
