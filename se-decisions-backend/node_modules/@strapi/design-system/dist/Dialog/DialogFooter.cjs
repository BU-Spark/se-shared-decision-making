"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react"),s=require("prop-types"),c=require("styled-components"),d=require("../Box/Box.cjs"),i=require("../Flex/Flex.cjs"),o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=o(a),l=o(s),u=o(c),p=u.default(d.Box)`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`,t=({startAction:e,endAction:n})=>r.default.createElement(p,{padding:4},r.default.createElement(i.Flex,{gap:2},e,n));t.displayName="DialogFooter";t.defaultProps={endAction:void 0,startAction:void 0};t.propTypes={endAction:l.default.node,startAction:l.default.node};exports.DialogFooter=t;
