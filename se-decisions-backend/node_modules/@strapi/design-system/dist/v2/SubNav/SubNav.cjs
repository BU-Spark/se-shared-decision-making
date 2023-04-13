"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("react"),i=require("prop-types"),u=require("styled-components"),d=require("../../Grid/Grid.cjs");require("../../Grid/GridItem.cjs");const t=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},l=t(s),c=t(i),n=t(u),r=`${232/16}rem`,p=n.default(d.Grid)`
  width: ${r};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,o=({ariaLabel:e,...a})=>l.default.createElement(p,{"aria-label":e,as:"nav",...a});o.propTypes={ariaLabel:c.default.string.isRequired};exports.SubNav=o;exports.subNavWidth=r;
