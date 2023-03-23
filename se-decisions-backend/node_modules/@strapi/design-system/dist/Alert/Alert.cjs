"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react/jsx-runtime"),a=require("@strapi/icons"),h=require("styled-components"),s=require("./utils.cjs"),o=require("../Box/Box.cjs"),g=require("../Flex/Flex.cjs"),f=require("../themes/utils.cjs"),i=require("../Typography/Typography.cjs"),j=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},l=j(h),y=l.default(o.Box)`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`,B=l.default(o.Box)`
  border: 1px solid ${s.handleBorderColor};
  background: ${s.handleBackgroundColor};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,m=l.default.button`
  border: none;
  background: transparent;
  font-size: ${12/16}rem;
  svg path {
    fill: ${({theme:e})=>e.colors.neutral700};
  }
  margin-top: ${({theme:e})=>e.spaces[1]};
  ${f.buttonFocusStyle};
`,C=l.default(o.Box)`
  font-size: ${20/16}rem;
  svg path {
    fill: ${s.handleIconColor};
  }
`,b=({variant:e,...r})=>e==="success"?t.jsx(a.CheckCircle,{...r}):e==="danger"||e==="warning"?t.jsx(a.ExclamationMarkCircle,{...r}):t.jsx(a.Information,{...r}),$=l.default(o.Box)`
  // Checked with the designers, validated
  padding-top: 1px;

  & a > span {
    color: ${s.handleIconColor};

    svg path {
      fill: ${s.handleIconColor};
    }
  }
`,q=({title:e,children:r,variant:n="default",onClose:c,closeLabel:u,titleAs:x="p",action:d,...p})=>t.jsx(B,{hasRadius:!0,paddingLeft:5,paddingRight:6,paddingTop:5,variant:n,...p,children:t.jsxs(g.Flex,{alignItems:"flex-start",children:[t.jsx(C,{paddingRight:3,variant:n,children:t.jsx(b,{variant:n,"aria-hidden":!0})}),t.jsxs(y,{role:n==="danger"?"alert":"status",children:[t.jsx(o.Box,{paddingBottom:2,paddingRight:1,children:t.jsx(i.Typography,{fontWeight:"bold",textColor:"neutral800",as:x,children:e})}),t.jsx(o.Box,{paddingBottom:d?2:5,paddingRight:2,children:t.jsx(i.Typography,{as:"p",textColor:"neutral800",children:r})}),d&&t.jsx($,{paddingBottom:5,variant:n,children:d})]}),t.jsx(m,{onClick:c,"aria-label":u,children:t.jsx(a.Cross,{"aria-hidden":!0})})]})});exports.Alert=q;
