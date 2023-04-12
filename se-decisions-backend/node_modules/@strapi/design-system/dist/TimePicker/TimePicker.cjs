"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react/jsx-runtime"),q=require("@strapi/icons"),x=require("styled-components"),f=require("../Flex/Flex.cjs"),g=require("../hooks/useId.cjs"),M=require("../Select/Select.cjs"),b=require("../Select/Option.cjs");require("../Select/OptGroup.cjs");require("../Select/MultiSelectNested.cjs");require("../Select/SelectList.cjs");const $=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},y=$(x),I=({id:t,value:i,step:a=15,...d})=>{const p=g.useId(t),h=24,s=[];let c=0;for(let e=0;e<h;e++)for(c=0;c<60;)s.push(`${e<10?`0${e}`:e}:${c<10?`0${c}`:c}`),c+=a;const j=()=>{const[e,u]=i?.split(":")??[],m=s.reduce((r,o)=>{const[l]=o.split(":");return Math.abs(l-e)<Math.abs(r-e)?l:r},s[0].split(":")[0]),S=s.reduce((r,o)=>{const l=o.split(":")[1];return Math.abs(l-u)<Math.abs(r-u)?l:r},s[0].split(":")[1]);return`${m}:${S}`};return n.jsx(M.Select,{id:p,placeholder:"--:--",value:i?j():null,startIcon:n.jsx(v,{children:n.jsx(q.Clock,{})}),...d,children:s.map(e=>n.jsx(b.Option,{value:e,children:e},e))})},v=y.default(f.Flex)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`;exports.TimePicker=I;
