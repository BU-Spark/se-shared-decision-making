"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react/jsx-runtime"),c=require("styled-components"),p=require("../Flex/Flex.cjs"),u=require("../Typography/Typography.cjs"),d=r=>r&&typeof r=="object"&&"default"in r?r:{default:r},i=d(c),g=({children:r,icon:t,disabled:e=!1,onClick:a,...l})=>{const s=n=>{e||!a||a(n)};return o.jsxs(y,{as:"button",background:e?"neutral200":"primary100",color:e?"neutral700":"primary600",paddingLeft:3,paddingRight:3,onClick:s,"aria-disabled":e,disabled:e,borderWidth:"1px",borderStyle:"solid",borderColor:e?"neutral300":"primary200",hasRadius:!0,height:`${32/16}rem`,gap:2,...l,children:[o.jsx(h,{$disabled:e,variant:"pi",fontWeight:"bold",as:"span",children:r}),t]})},y=i.default(p.Flex)`
  & > svg {
    height: ${8/16}rem;
    width: ${8/16}rem;
  }

  & > svg path {
    fill: ${({theme:r,...t})=>t["aria-disabled"]?r.colors.neutral600:r.colors.primary600};
  }
`,h=i.default(u.Typography)`
  color: inherit;
  border-right: 1px solid ${({theme:r,$disabled:t})=>t?r.colors.neutral300:r.colors.primary200};
  padding-right: ${({theme:r})=>r.spaces[2]};
`;exports.Tag=g;
