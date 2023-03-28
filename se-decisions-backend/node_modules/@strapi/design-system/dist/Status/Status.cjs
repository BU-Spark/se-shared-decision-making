"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const h=require("react"),b=require("prop-types"),m=require("styled-components"),$=require("../Box/Box.cjs"),x=require("../Flex/Flex.cjs"),T=require("../Typography/Typography.cjs"),a=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=a(h),o=a(b),c=a(m),_=c.default.div`
  margin-right: ${({theme:e})=>e.spaces[3]};
  width: ${6/16}rem;
  height: ${6/16}rem;
  border-radius: 50%;
  background: ${({theme:e,backgroundColor:t})=>e.colors[t]};
`,B=c.default($.Box)`
  ${T.Typography} {
    color: ${({theme:e,textColor:t})=>e.colors[t]};
  }
`,s=({variant:e,showBullet:t,size:l,children:n,...p})=>{const i=`${e}100`,g=`${e}200`,f=`${e}600`,y=`${e}600`,u=l==="S"?2:5,d=l==="S"?1:4;return r.default.createElement(B,{borderColor:g,textColor:y,background:i,hasRadius:!0,paddingTop:d,paddingBottom:d,paddingLeft:u,paddingRight:u,...p},t?r.default.createElement(x.Flex,null,r.default.createElement(_,{backgroundColor:f}),n):n)};s.defaultProps={showBullet:!0,size:"M",variant:"primary"};s.propTypes={children:o.default.node.isRequired,showBullet:o.default.bool,size:o.default.oneOf(["S","M"]),variant:o.default.oneOf(["alternative","danger","neutral","primary","secondary","success","warning"])};exports.Status=s;
