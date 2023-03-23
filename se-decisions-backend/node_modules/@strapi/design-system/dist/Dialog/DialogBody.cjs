"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("react"),r=require("prop-types"),c=require("styled-components"),l=require("../Box/Box.cjs"),i=require("../Flex/Flex.cjs"),d=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},o=d(s),n=d(r),u=d(c),p=u.default(l.Box)`
  svg {
    width: ${({theme:e})=>e.spaces[6]};
    height: ${({theme:e})=>e.spaces[6]};

    path {
      fill: ${({theme:e})=>e.colors.danger600};
    }
  }
`,t=({children:e,icon:a})=>o.default.createElement(l.Box,{paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6},a&&o.default.createElement(p,{paddingBottom:2},o.default.createElement(i.Flex,{justifyContent:"center"},a)),e);t.displayName="DialogBody";t.defaultProps={icon:void 0};t.propTypes={children:n.default.node.isRequired,icon:n.default.node};exports.DialogBody=t;
