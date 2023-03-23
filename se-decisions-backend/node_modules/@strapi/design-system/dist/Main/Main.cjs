"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react"),i=require("prop-types"),s=require("styled-components"),t=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=t(a),u=t(i),c=t(s),d=c.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,n=({labelledBy:e,...o})=>{const l=e||"main-content-title";return r.default.createElement(d,{"aria-labelledby":l,id:"main-content",tabIndex:-1,...o})};n.defaultProps={labelledBy:void 0};n.propTypes={labelledBy:u.default.string};exports.Main=n;
