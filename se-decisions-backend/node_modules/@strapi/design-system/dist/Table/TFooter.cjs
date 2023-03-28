"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("react"),s=require("prop-types"),c=require("styled-components"),r=require("../Box/Box.cjs"),p=require("../Divider/Divider.cjs"),y=require("../Flex/Flex.cjs"),f=require("../Typography/Typography.cjs"),o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=o(u),a=o(s),i=o(c),g=i.default(r.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,m=i.default(r.Box)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,d=({children:e,icon:l,...n})=>t.default.createElement("div",null,t.default.createElement(p.Divider,null),t.default.createElement(m,{as:"button",background:"primary100",padding:5,...n},t.default.createElement(y.Flex,null,t.default.createElement(g,{"aria-hidden":!0,background:"primary200"},l),t.default.createElement(r.Box,{paddingLeft:3},t.default.createElement(f.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600"},e)))));d.propTypes={children:a.default.string.isRequired,icon:a.default.node.isRequired};exports.TFooter=d;
