"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("react"),d=require("prop-types"),c=require("styled-components"),p=require("../Box/Box.cjs"),r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},f=r(i),t=r(d),b=r(c),m=b.default(p.Box)`
  &:before {
    background-color: ${({theme:e})=>e.colors.neutral0};
    border-radius: ${({theme:e})=>e.borderRadius};
    bottom: 0;
    content: '';
    position: absolute;
    top: 0;
    width: ${({value:e})=>`${e}%`};
  }
`,o=({min:e,max:u,value:a,children:l,size:s,...n})=>f.default.createElement(m,{background:"neutral600",hasRadius:!0,"aria-label":l,"aria-valuemax":u,"aria-valuemin":e,"aria-valuenow":a,height:s==="S"?1:2,position:"relative",role:"progressbar",value:a,width:s==="S"?"78px":"102px",...n});o.defaultProps={min:0,max:100,value:0,size:"M"};o.propTypes={children:t.default.node.isRequired,max:t.default.number,min:t.default.number,size:t.default.oneOf(["S","M"]),value:t.default.number};exports.ProgressBar=o;
