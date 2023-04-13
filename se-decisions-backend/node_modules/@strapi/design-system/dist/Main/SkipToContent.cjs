"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react"),s=require("prop-types"),r=require("styled-components"),a=require("../Box/Box.cjs"),t=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},c=t(n),u=t(s),l=t(r),d=l.default(a.Box)`
  text-decoration: none;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`,o=({children:e})=>c.default.createElement(d,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,position:"absolute",hasRadius:!0},e);o.propTypes={children:u.default.node.isRequired};exports.SkipToContent=o;
