"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const f=require("react"),g=require("@strapi/icons"),y=require("prop-types"),b=require("styled-components"),u=require("../../Box/Box.cjs"),x=require("../../Flex/Flex.cjs"),s=require("../../Typography/Typography.cjs"),r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=r(f),a=r(y),i=r(b),d=i.default(x.Flex)`
  border: none;
  padding: 0;
  background: transparent;
`,m=i.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,o=({collapsable:e,label:l,onClick:c,ariaExpanded:n,ariaControls:p})=>e?t.default.createElement(d,{as:"button",onClick:c,"aria-expanded":n,"aria-controls":p,textAlign:"left"},t.default.createElement(u.Box,{paddingRight:1},t.default.createElement(s.Typography,{variant:"sigma",textColor:"neutral600"},l)),e&&t.default.createElement(m,{rotated:n},t.default.createElement(g.CarretDown,{"aria-hidden":!0}))):t.default.createElement(d,null,t.default.createElement(u.Box,{paddingRight:1},t.default.createElement(s.Typography,{variant:"sigma",textColor:"neutral600"},l)));o.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}};o.propTypes={ariaControls:a.default.string,ariaExpanded:a.default.bool,collapsable:a.default.bool,label:a.default.string.isRequired,onClick:a.default.func};exports.SubNavSectionLabel=o;
