"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("react"),i=require("prop-types"),p=require("styled-components"),f=require("../Flex/Flex.cjs"),r=require("../RawTable/RawCell.cjs"),l=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=l(d),o=l(i),n=l(p),c=n.default(r.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:e})=>e.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,T=n.default.span`
  svg {
    height: ${4/16}rem;
  }
`,a=({children:e,action:s,...u})=>t.default.createElement(c,{as:r.RawTh,...u},t.default.createElement(f.Flex,null,e,t.default.createElement(T,null,s)));a.defaultProps={action:void 0};a.propTypes={action:o.default.node,children:o.default.node.isRequired};const y=e=>t.default.createElement(c,{...e});exports.Td=y;exports.Th=a;
