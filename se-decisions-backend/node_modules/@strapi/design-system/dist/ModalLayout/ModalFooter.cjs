"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("react"),c=require("prop-types"),i=require("styled-components"),p=require("../Box/Box.cjs"),n=require("../Flex/Flex.cjs"),o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=o(u),a=o(c),l=o(i),f=l.default(p.Box)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,d=l.default(n.Flex)`
  & > * + * {
    margin-left: ${({theme:e})=>e.spaces[2]};
  }
`,r=({startActions:e,endActions:s})=>t.default.createElement(f,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100"},t.default.createElement(n.Flex,{justifyContent:"space-between"},t.default.createElement(d,null,e),t.default.createElement(d,null,s)));r.defaultProps={endActions:void 0,startActions:void 0};r.propTypes={endActions:a.default.node,startActions:a.default.node};exports.ModalFooter=r;
