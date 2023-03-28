"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react/jsx-runtime"),q=require("react"),v=require("@strapi/icons"),l=require("styled-components"),d=require("./constants.cjs"),r=require("./utils.cjs"),S=require("../BaseButton/BaseButton.cjs"),T=require("../Box/Box.cjs"),_=require("../Flex/Flex.cjs"),$=require("../Typography/Typography.cjs"),f=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},D=f(q),p=f(l),F=l.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,L=p.default.div`
  animation: ${F} 2s infinite linear;
  will-change: transform;
`,y=p.default(S.BaseButton)`
  height: ${({theme:e,size:n})=>e.sizes.button[n]};

  &[aria-disabled='true'] {
    ${r.getDisabledStyle}

    &:active {
      ${r.getDisabledStyle}
    }
  }

  &:hover {
    ${r.getHoverStyle}
  }

  &:active {
    ${r.getActiveStyle}
  }

  ${r.getVariantStyle}
`,g=D.default.forwardRef(({variant:e=d.DEFAULT,startIcon:n,endIcon:s,disabled:h=!1,children:B,onClick:c,size:u=d.BUTTON_SIZES[0],loading:i=!1,fullWidth:a=!1,...j},x)=>{const o=h||i,b=m=>{!o&&c&&c(m)};return t.jsxs(y,{ref:x,"aria-disabled":o,disabled:o,size:u,variant:e,onClick:b,fullWidth:a,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:a,justifyContent:a?"center":void 0,paddingLeft:4,paddingRight:4,width:a?"100%":void 0,...j,children:[(n||i)&&t.jsx(T.Box,{"aria-hidden":!0,children:i?t.jsx(L,{children:t.jsx(v.Loader,{})}):n}),t.jsx($.Typography,{variant:u==="S"?"pi":void 0,fontWeight:"bold",lineHeight:0,textColor:"buttonNeutral0",children:B}),s&&t.jsx(_.Flex,{"aria-hidden":!0,children:s})]})});g.displayName="Button";exports.Button=g;exports.ButtonWrapper=y;
