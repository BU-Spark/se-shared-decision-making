"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react/jsx-runtime"),h=require("react"),x=require("styled-components"),j=require("../../BaseButton/BaseButton.cjs"),d=require("../../BaseLink/BaseLink.cjs"),t=require("../../Button/utils.cjs"),l=require("../../Flex/Flex.cjs"),b=require("../../Typography/Typography.cjs"),c=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},L=c(h),k=c(x),v=k.default(j.BaseButtonWrapper)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${t.getDisabledStyle}
    &:active {
      ${t.getDisabledStyle}
    }
  }

  &:hover {
    ${t.getHoverStyle}
  }

  &:active {
    ${t.getActiveStyle}
  }

  ${t.getVariantStyle}
`,p=L.default.forwardRef(({variant:e="default",startIcon:r,endIcon:i,disabled:o=!1,children:g,size:a="S",as:y=d.BaseLink,...f},B)=>{const s=a==="S"?2:"10px",u=4;return n.jsxs(v,{ref:B,"aria-disabled":o,size:a,variant:e,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:s,paddingLeft:u,paddingRight:u,paddingTop:s,pointerEvents:o?"none":void 0,...f,as:y||d.BaseLink,children:[r&&n.jsx(l.Flex,{"aria-hidden":!0,children:r}),n.jsx(b.Typography,{variant:a==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:g}),i&&n.jsx(l.Flex,{"aria-hidden":!0,children:i})]})});p.displayName="LinkButton";exports.LinkButton=p;
