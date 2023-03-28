"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react"),s=require("prop-types"),i=require("styled-components"),u=require("../Box/Box.cjs"),t=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},d=t(a),o=t(s),l=t(i),c=l.default(u.Box)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,r=({unsetMargin:e,...n})=>d.default.createElement(c,{...n,as:"hr",unsetMargin:e});r.defaultProps={background:"neutral150",unsetMargin:!0};r.propTypes={background:o.default.string,unsetMargin:o.default.bool};exports.Divider=r;
