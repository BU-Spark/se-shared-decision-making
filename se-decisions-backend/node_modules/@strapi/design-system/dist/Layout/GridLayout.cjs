"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("prop-types"),s=require("styled-components"),t=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},d=t(r),a=t(s),o=a.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:e})=>e.spaces[4]};
`;o.propTypes={children:d.default.node.isRequired};exports.GridLayout=o;
