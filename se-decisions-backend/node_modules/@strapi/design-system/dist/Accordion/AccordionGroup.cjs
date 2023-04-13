"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react/jsx-runtime"),p=require("react"),b=require("styled-components"),d=require("../Box/Box.cjs"),x=require("../Flex/Flex.cjs"),y=require("../KeyboardNavigable/KeyboardNavigable.cjs"),l=require("../Typography/Typography.cjs"),g=r=>r&&typeof r=="object"&&"default"in r?r:{default:r};function f(r){if(r&&r.__esModule)return r;const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const t in r)if(t!=="default"){const a=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>r[t]})}}return e.default=r,Object.freeze(e)}const n=f(p),s=g(b),h=s.default(d.Box)`
  border-bottom: 1px solid ${({theme:r})=>r.colors.neutral200};
  border-right: 1px solid ${({theme:r})=>r.colors.neutral200};
  border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
`,j=s.default(d.Box)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-bottom: 1px solid ${({theme:r})=>r.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-radius: ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius} 0 0;
    & > * {
      border-radius: ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({theme:r})=>r.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({theme:r})=>r.colors.primary600};
  }

  ${({theme:r,footer:e})=>`
    &:not(${e}) {
      & > *:last-of-type {
        border-radius: 0 0 ${r.borderRadius} ${r.borderRadius};
      }
    }
  `}
`,$=s.default(d.Box)`
  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,m=({children:r,footer:e,label:t,labelAction:a,error:i})=>{const c=n.Children.toArray(r).map(u=>n.cloneElement(u,{hasErrorMessage:!1}));return o.jsxs(y.KeyboardNavigable,{attributeName:"data-strapi-accordion-toggle",children:[t&&o.jsxs(x.Flex,{paddingBottom:1,children:[o.jsx(l.Typography,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold",children:t}),a&&o.jsx($,{paddingLeft:1,children:a})]}),o.jsx(j,{footer:e,children:c}),e&&o.jsx(h,{children:e}),i&&o.jsx(d.Box,{paddingTop:1,children:o.jsx(l.Typography,{variant:"pi",textColor:"danger600",children:i})})]})};exports.AccordionGroup=m;
