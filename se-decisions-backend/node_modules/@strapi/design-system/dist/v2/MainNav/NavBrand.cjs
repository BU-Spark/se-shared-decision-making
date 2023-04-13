"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const y=require("react"),m=require("prop-types"),B=require("styled-components"),x=require("./MainNavContext.cjs"),f=require("../../BaseLink/BaseLink.cjs"),d=require("../../Box/Box.cjs"),h=require("../../Flex/Flex.cjs"),u=require("../../Typography/Typography.cjs"),c=require("../../VisuallyHidden/VisuallyHidden.cjs"),r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=r(y),a=r(m),g=r(B),p=g.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};

  svg,
  img {
    height: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
    width: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
  }
`,E=g.default(f.BaseLink)`
  text-decoration: unset;
  color: inherit;
`,n=t.default.forwardRef(({workplace:e,title:l,icon:i,...o},s)=>x.useMainNav()?t.default.createElement(f.BaseLink,{ref:s,...o},t.default.createElement(d.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},t.default.createElement(p,{condensed:!0},i,t.default.createElement(c.VisuallyHidden,null,t.default.createElement("span",null,l),t.default.createElement("span",null,e))))):t.default.createElement(E,{ref:s,...o},t.default.createElement(d.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},t.default.createElement(h.Flex,null,t.default.createElement(p,{"aria-hidden":!0,tabIndex:-1},i),t.default.createElement(d.Box,{paddingLeft:2},t.default.createElement(u.Typography,{fontWeight:"bold",textColor:"neutral800",as:"span"},l,t.default.createElement(c.VisuallyHidden,{as:"span"},e)),t.default.createElement(u.Typography,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0},e))))));n.displayName="NavBrand";n.defaultProps={to:"/"};n.propTypes={icon:a.default.node.isRequired,title:a.default.string.isRequired,to:a.default.string,workplace:a.default.string.isRequired};exports.NavBrand=n;
