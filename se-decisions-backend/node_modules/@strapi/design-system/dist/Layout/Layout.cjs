"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("react"),u=require("prop-types"),c=require("styled-components"),d=require("../Box/Box.cjs"),t=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=t(s),a=t(u),l=t(c),i=l.default(d.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:e})=>e?"auto 1fr":"1fr"};
`,f=l.default(d.Box)`
  overflow-x: hidden;
`,o=({sideNav:e,children:n})=>r.default.createElement(i,{hasSideNav:Boolean(e)},e,r.default.createElement(f,{paddingBottom:10},n));o.defaultProps={sideNav:void 0};o.propTypes={children:a.default.node.isRequired,sideNav:a.default.node};exports.Layout=o;
