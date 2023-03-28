"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react/jsx-runtime"),w=require("react"),a=require("@floating-ui/react-dom"),y=require("styled-components"),u=require("../Box/Box.cjs"),k=require("../hooks/useIntersection.cjs"),_=require("../Portal/Portal.cjs"),v=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function S(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:()=>e[o]})}}return t.default=e,Object.freeze(t)}const l=S(w),f=v(y),O=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],$=f.default(u.Box)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: 4;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,p=({source:e,children:t,spacing:o=0,fullWidth:r=!1,placement:s="bottom-start",centered:i=!1,...c})=>{const[h,g]=l.useState(void 0),{x:m,y:x,reference:d,floating:j,strategy:P}=a.useFloating({strategy:"fixed",placement:i?"bottom":s,middleware:[a.offset({mainAxis:o}),a.shift(),a.flip()],whileElementsMounted:a.autoUpdate});return l.useLayoutEffect(()=>{d(e.current)},[e,d]),l.useLayoutEffect(()=>{r&&g(e.current.offsetWidth)},[r,e]),n.jsx($,{ref:j,style:{left:m,top:x,position:P,width:h||void 0},hasRadius:!0,background:"neutral0",padding:1,...c,children:t})},b=({children:e,intersectionId:t,onReachEnd:o,...r})=>{const s=l.useRef(null);return k.useIntersection(s,o??(()=>{}),{selectorToWatch:`#${t}`,skipWhen:!t||!o}),n.jsxs(q,{ref:s,...r,children:[e,t&&o&&n.jsx(u.Box,{id:t,width:"100%",height:"1px"})]})},q=f.default(u.Box)`
  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list
  max-height: ${3*5}rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.neutral0};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral150};
    border-radius: ${({theme:e})=>e.borderRadius};
    margin-right: 10px;
  }
`,E=({children:e,source:t,spacing:o,fullWidth:r,placement:s,centered:i,...c})=>n.jsx(_.Portal,{children:n.jsx(p,{source:t,spacing:o,fullWidth:r,placement:s,centered:i,children:n.jsx(b,{...c,children:e})})});exports.Content=p;exports.POPOVER_PLACEMENTS=O;exports.Popover=E;exports.Scrolling=b;
