"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const g=require("react"),m=require("prop-types"),d=require("react-router-dom"),y=require("styled-components"),x=require("./MainNavContext.cjs"),r=require("../Box/Box.cjs"),h=require("../Flex/Flex.cjs"),s=require("../Typography/Typography.cjs"),c=require("../VisuallyHidden/VisuallyHidden.cjs"),l=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=l(g),a=l(m),f=l(y),p=f.default.div`
  svg,
  img {
    border-radius: ${({theme:e})=>e.borderRadius};
    object-fit: contain;
    height: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
    width: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
  }
`,v=f.default(d.NavLink)`
  text-decoration: unset;
  color: inherit;
`,o=({workplace:e,title:i,icon:u,to:n})=>x.useMainNav()?t.default.createElement(r.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},t.default.createElement(p,{condensed:!0},t.default.createElement(d.NavLink,{to:n},u,t.default.createElement(c.VisuallyHidden,null,t.default.createElement("span",null,i),t.default.createElement("span",null,e))))):t.default.createElement(r.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},t.default.createElement(h.Flex,null,t.default.createElement(p,{as:d.NavLink,to:n,"aria-hidden":!0,tabIndex:-1},u),t.default.createElement(r.Box,{paddingLeft:2},t.default.createElement(s.Typography,{fontWeight:"bold",textColor:"neutral800",as:"span"},t.default.createElement(v,{to:n},i,t.default.createElement(c.VisuallyHidden,{as:"span"},e))),t.default.createElement(s.Typography,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0},e))));o.defaultProps={to:"/"};o.propTypes={icon:a.default.node.isRequired,title:a.default.string.isRequired,to:a.default.string,workplace:a.default.string.isRequired};exports.NavBrand=o;
