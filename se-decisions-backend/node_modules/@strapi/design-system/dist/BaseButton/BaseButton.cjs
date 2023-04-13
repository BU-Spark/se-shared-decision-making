"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("react/jsx-runtime"),c=require("react"),i=require("styled-components"),d=require("../Flex/Flex.cjs"),p=require("../themes/utils.cjs"),t=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},f=t(c),b=t(i),s=b.default(d.Flex)`
  svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${p.buttonFocusStyle}
`,r=f.default.forwardRef(({disabled:e,children:a,background:o="neutral0",...u},n)=>l.jsx(s,{ref:n,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:o,borderColor:"neutral200",cursor:"pointer",...u,children:a}));r.displayName="BaseButton";exports.BaseButton=r;exports.BaseButtonWrapper=s;
