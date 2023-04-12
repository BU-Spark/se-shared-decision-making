"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react/jsx-runtime"),u=require("react"),p=require("styled-components"),h=require("./FieldContext.cjs"),y=require("../Flex/Flex.cjs"),g=require("../helpers/deprecations.cjs"),i=require("../Typography/Typography.cjs"),f=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=f(p),x=g.once(console.warn),F=u.forwardRef(({children:e,action:o,required:n,...l},s)=>{const{id:a,required:c}=h.useField(),d=c||n;return n!==void 0&&x('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),t.jsxs(j,{ref:s,variant:"pi",textColor:"neutral800",htmlFor:a,fontWeight:"bold",as:"label",...l,children:[e,d&&t.jsx(q,{textColor:"danger600",children:"*"}),o&&t.jsx(m,{marginLeft:1,children:o})]})}),j=r.default(i.Typography)`
  display: flex;
  align-items: center;
`,q=r.default(i.Typography)`
  line-height: 0;
`,m=r.default(y.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;exports.FieldLabel=F;
