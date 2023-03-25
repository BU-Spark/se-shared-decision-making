"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("react/jsx-runtime"),u=require("react"),d=require("styled-components"),t=require("./constants.cjs"),l=require("../Box/Box.cjs"),p=require("../Flex/Flex.cjs"),x=require("../Typography/Typography.cjs"),f=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function g(e){if(e&&e.__esModule)return e;const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(a,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}return a.default=e,Object.freeze(a)}const h=g(u),n=f(d),v=n.default.img`
  border-radius: 50%;
  object-fit: cover;
  display: block;
  position: relative;
`,b=n.default.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  transform: translate(-${(t.previewSize-t.avatarSize)/2}px, -100%);
  margin-top: -${({theme:e})=>e.spaces[1]};
`,y=n.default(l.Box)`
  opacity: 0.4;
`,j=({src:e,alt:a,preview:r})=>{const[o,c]=h.useState(!1),s=Boolean(r&&o);return i.jsxs("span",{children:[s?i.jsx(b,{"aria-hidden":!0,alt:"",width:`${t.previewSize}px`,height:`${t.previewSize}px`,src:r===!0?e:typeof r=="string"?r:""}):null,i.jsxs(l.Box,{zIndex:s?1:void 0,position:"relative",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),width:`${t.avatarSize}px`,height:`${t.avatarSize}px`,children:[s?i.jsx(y,{background:"neutral0",borderRadius:"50%",position:"absolute",width:`${t.avatarSize}px`,height:`${t.avatarSize}px`,zIndex:1}):null,i.jsx(v,{src:e,alt:a,width:`${t.avatarSize}px`,height:`${t.avatarSize}px`})]})]})},S=n.default(p.Flex)`
  span {
    line-height: 0;
  }
`,z=({children:e,background:a="primary600",textColor:r="buttonNeutral0"})=>i.jsx(S,{background:a,borderRadius:"50%",width:`${t.avatarSize}px`,height:`${t.avatarSize}px`,justifyContent:"center",children:i.jsx(x.Typography,{fontSize:0,fontWeight:"bold",textColor:r,textTransform:"uppercase",children:e})});exports.Avatar=j;exports.Initials=z;
