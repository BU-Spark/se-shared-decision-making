"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("react"),w=require("prop-types"),T=require("styled-components"),d=require("../Box/Box.cjs"),x=require("../RawTable/RawTable.cjs"),c=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},a=c(r),n=c(w),l=c(T),y=l.default(d.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,R=l.default(x.RawTable)`
  width: 100%;
  white-space: nowrap;
`,m=l.default(d.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,S=l.default(d.Box)`
  overflow-x: auto;
`,i=({colCount:e,rowCount:u,footer:f,...h})=>{const s=r.useRef(null),[b,o]=r.useState(),p=t=>{const g=t.target.scrollWidth-t.target.clientWidth;if(t.target.scrollLeft===0){o("right");return}if(t.target.scrollLeft===g){o("left");return}t.target.scrollLeft>0&&o("both")};return r.useEffect(()=>{s.current.scrollWidth>s.current.clientWidth&&o("right")},[]),a.default.createElement(y,{shadow:"tableShadow",hasRadius:!0,background:"neutral0"},a.default.createElement(m,{overflowing:b,position:"relative"},a.default.createElement(S,{ref:s,onScroll:p,paddingLeft:6,paddingRight:6},a.default.createElement(R,{colCount:e,rowCount:u,...h}))),f)};i.defaultProps={footer:void 0};i.propTypes={colCount:n.default.number.isRequired,footer:n.default.node,rowCount:n.default.number.isRequired};exports.Table=i;
