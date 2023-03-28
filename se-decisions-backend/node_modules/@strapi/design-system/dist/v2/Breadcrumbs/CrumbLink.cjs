"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react"),a=require("prop-types"),i=require("styled-components"),l=require("../../BaseLink/BaseLink.cjs"),o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},c=o(n),r=o(a),u=o(i),d=u.default(l.BaseLink)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,t=({children:e,...s})=>c.default.createElement(d,{...s},e);t.displayName="CrumbLink";t.defaultProps={to:void 0};t.propTypes={children:r.default.node.isRequired,to:r.default.string};exports.CrumbLink=t;
