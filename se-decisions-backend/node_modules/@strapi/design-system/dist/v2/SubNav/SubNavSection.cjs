"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react"),S=require("prop-types"),h=require("styled-components"),v=require("./SubNavSectionLabel.cjs"),x=require("../../Badge/Badge.cjs"),u=require("../../Box/Box.cjs"),y=require("../../Flex/Flex.cjs"),q=require("../../hooks/useId.cjs"),r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=r(n),a=r(S),B=r(h),_=B.default(u.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,s=({collapsable:e,label:c,badgeLabel:l,children:p,id:f})=>{const[i,g]=n.useState(!0),d=q.useId(f),b=()=>{g(o=>!o)};return t.default.createElement(y.Flex,{direction:"column",alignItems:"stretch",gap:1},t.default.createElement(_,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},t.default.createElement(u.Box,{position:"relative",paddingRight:l?6:0},t.default.createElement(v.SubNavSectionLabel,{onClick:b,ariaExpanded:i,ariaControls:d,collapsable:e,label:c}),l&&t.default.createElement(x.Badge,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},l))),(!e||i)&&t.default.createElement("ol",{id:d},n.Children.map(p,(o,m)=>t.default.createElement("li",{key:m},o))))};s.defaultProps={badgeLabel:null,collapsable:!1,id:void 0};s.propTypes={badgeLabel:a.default.string,children:a.default.node.isRequired,collapsable:a.default.bool,id:a.default.string,label:a.default.string.isRequired};exports.SubNavSection=s;
