"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("react"),d=require("prop-types"),n=require("styled-components"),u=require("../BaseRadio/BaseRadio.cjs"),c=require("../Box/Box.cjs"),i=require("../Typography/Typography.cjs"),a=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=a(l),o=a(d),p=a(n),y=p.default(i.Typography)`
  display: flex;
  align-items: center;
`,r=({children:e,...s})=>t.default.createElement(y,{as:"label",textColor:"neutral800"},t.default.createElement(u.BaseRadio,{...s}),t.default.createElement(c.Box,{paddingLeft:2},e));r.propTypes={children:o.default.node.isRequired,value:o.default.any.isRequired};exports.Radio=r;
