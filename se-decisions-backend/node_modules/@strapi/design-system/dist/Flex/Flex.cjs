"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("styled-components"),s=require("../Box/Box.cjs"),l=require("../helpers/handleResponsiveValues.cjs"),n=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},i=n(o),r={direction:!0},a=i.default(s.Box).withConfig({shouldForwardProp:(e,t)=>!r[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>l("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`;exports.Flex=a;
