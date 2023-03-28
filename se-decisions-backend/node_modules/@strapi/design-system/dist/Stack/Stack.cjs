"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("react/jsx-runtime"),d=require("react"),m=require("styled-components"),i=require("../Flex/Flex.cjs"),o=require("../helpers/theme.cjs"),f=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},c=f(m),l={size:!0,spacing:!0},g=c.default(i.Flex).withConfig({shouldForwardProp:(e,t)=>!l[e]&&t(e)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:e,spacing:t})=>o.extractStyleFromTheme(e.spaces,t,void 0)};
  }
`,h=c.default(i.Flex).withConfig({shouldForwardProp:(e,t)=>!l[e]&&t(e)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:e,spacing:t})=>o.extractStyleFromTheme(e.spaces,t,void 0)};
  }
`,u=d.forwardRef(({horizontal:e=!1,spacing:t,size:r,...n},a)=>(r&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),e?s.jsx(h,{ref:a,spacing:t||r,...n}):s.jsx(g,{direction:"column",alignItems:"stretch",ref:a,spacing:t||r,...n})));u.displayName="Stack";exports.Stack=u;
