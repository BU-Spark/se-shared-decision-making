"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("react"),c=require("prop-types"),p=require("styled-components"),m=require("./GridContext.cjs"),f=require("../Box/Box.cjs"),o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},s=o(l),t=o(c),y=o(p),x=y.default.div`
  grid-column: span ${({col:e})=>e};
  max-width: 100%;

  ${({theme:e})=>e.mediaQueries.tablet} {
    grid-column: span ${({s:e})=>e};
  }

  ${({theme:e})=>e.mediaQueries.mobile} {
    grid-column: span ${({xs:e})=>e};
  }
`,r=({col:e,xs:d,s:u,...n})=>{const{gap:a,gridCols:i}=m.useGrid();return s.default.createElement(x,{gap:a,gridCols:i,col:e,xs:d,s:u},s.default.createElement(f.Box,{...n}))};r.defaultProps={col:void 0,s:void 0,xs:void 0};r.propTypes={col:t.default.number,s:t.default.number,xs:t.default.number};exports.GridItem=r;
