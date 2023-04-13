"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react/jsx-runtime"),F=require("@strapi/icons"),v=require("styled-components"),B=require("./Accordion.cjs"),I=require("./AccordionContext.cjs"),M=require("./utils.cjs"),s=require("../Flex/Flex.cjs"),R=require("../Icon/Icon.cjs"),z=require("../TextButton/TextButton.cjs"),S=require("../Typography/Typography.cjs"),_=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},m=_(v),D=m.default(z.TextButton)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:e,expanded:t})=>t?e.colors.primary600:e.colors.neutral500};
    }
  }
`,W=m.default(s.Flex)`
  min-height: ${({theme:e,size:t})=>e.sizes.accordions[t]};
  border-radius: ${({theme:e,expanded:t})=>t?`${e.borderRadius} ${e.borderRadius} 0 0`:e.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }
`,L=({title:e,description:t,as:b="span",togglePosition:d="right",action:u,...j})=>{const{onToggle:c,toggle:p,expanded:r,id:l,size:n,variant:T,disabled:i}=I.useAccordion(),$=`accordion-content-${l}`,g=`accordion-label-${l}`,w=`accordion-desc-${l}`,a=n==="M"?6:4,x=n==="M"?a:a-2,C=M.getBackground({expanded:r,disabled:i,variant:T}),q={as:b,fontWeight:n==="S"?"bold":void 0,id:g,textColor:r?"primary600":"neutral700",ellipsis:!0,variant:n==="M"?"delta":void 0},k=r?"primary600":"neutral600",A=r?"primary200":"neutral200",h=n==="M"?`${32/16}rem`:`${24/16}rem`,f=()=>{i||(p&&!c?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),p()):c&&c())},y=o.jsx(s.Flex,{justifyContent:"center",borderRadius:"50%",height:h,width:h,transform:r?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:A,cursor:i?"not-allowed":"pointer",onClick:f,shrink:0,children:o.jsx(R.Icon,{as:F.CarretDown,width:n==="M"?`${11/16}rem`:`${8/16}rem`,color:r?"primary600":"neutral600"})});return o.jsx(W,{paddingBottom:x,paddingLeft:a,paddingRight:a,paddingTop:x,background:C,expanded:r,size:n,justifyContent:"space-between",cursor:i?"not-allowed":"",children:o.jsxs(s.Flex,{gap:3,flex:1,maxWidth:"100%",children:[d==="left"&&y,o.jsx(D,{onClick:f,"aria-disabled":i,"aria-expanded":r,"aria-controls":$,"aria-labelledby":g,"data-strapi-accordion-toggle":!0,expanded:r,type:"button",flex:1,minWidth:0,...j,children:o.jsxs(o.Fragment,{children:[o.jsx(B.AccordionTypography,{...q,children:e}),t&&o.jsx(S.Typography,{as:"p",id:w,textColor:k,children:t})]})}),d==="right"&&o.jsxs(s.Flex,{gap:3,children:[y,u]}),d==="left"&&u]})})};exports.AccordionToggle=L;
