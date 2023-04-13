"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("react"),i=require("prop-types"),f=require("styled-components"),n=require("../Box/Box.cjs"),s=require("../Flex/Flex.cjs"),l=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=l(d),r=l(i),c=l(f),u=c.default(s.Flex)`
  & > * + * {
    margin-left: ${({theme:e})=>e.spaces[2]};
  }

  margin-left: ${({pullRight:e})=>e?"auto":void 0};
`,p=c.default(u)`
  flex-shrink: 0;
`,a=({startActions:e,endActions:o})=>e||o?t.default.createElement(n.Box,{paddingLeft:10,paddingRight:10},t.default.createElement(n.Box,{paddingBottom:4},t.default.createElement(s.Flex,{justifyContent:"space-between",alignItems:"flex-start"},e&&t.default.createElement(u,{wrap:"wrap"},e),o&&t.default.createElement(p,{pullRight:!0},o)))):null;a.defaultProps={endActions:void 0,startActions:void 0};a.propTypes={endActions:r.default.node,startActions:r.default.node};exports.ActionLayout=a;
