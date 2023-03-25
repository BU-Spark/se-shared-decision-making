"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("react"),u=require("prop-types"),i=require("styled-components"),p=require("../Box/Box.cjs"),f=require("../Flex/Flex.cjs"),o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=o(l),y=o(u),g=o(i),x=g.default(p.Box)`
  flex-grow: 1;
  overflow-y: auto;
`,n=({children:e,spacing:a=4,horizontal:r=!1,...s})=>t.default.createElement(x,{paddingLeft:3,paddingRight:2,paddingTop:3,paddingBottom:8},t.default.createElement(f.Flex,{as:"ul",gap:a,direction:r?"row":"column",alignItems:r?"center":"stretch",...s},l.Children.map(e,(c,d)=>t.default.createElement("li",{key:d},c))));n.propTypes={children:y.default.node.isRequired};exports.NavSections=n;
