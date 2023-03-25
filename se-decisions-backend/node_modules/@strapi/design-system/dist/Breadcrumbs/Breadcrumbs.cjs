"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("react/jsx-runtime"),d=require("@strapi/icons"),u=require("styled-components"),t=require("../Box/Box.cjs"),s=require("../Flex/Flex.cjs"),i=require("../Typography/Typography.cjs"),c=require("../VisuallyHidden/VisuallyHidden.cjs"),p=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},y=p(u),h=y.default(s.Flex)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
  :last-of-type ${t.Box} {
    display: none;
  }
  :last-of-type ${i.Typography} {
    color: ${({theme:e})=>e.colors.neutral800};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
  }
`,l=({children:e})=>r.jsxs(h,{inline:!0,as:"li",children:[r.jsx(i.Typography,{variant:"pi",textColor:"neutral600",children:e}),r.jsx(t.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:r.jsx(d.ChevronRight,{})})]});l.displayName="Crumb";const o=({children:e,label:n,...a})=>r.jsxs(s.Flex,{...a,children:[r.jsx(c.VisuallyHidden,{children:n}),r.jsx("ol",{"aria-hidden":!0,children:e})]});o.displayName="Breadcrumbs";exports.Breadcrumbs=o;exports.Crumb=l;
