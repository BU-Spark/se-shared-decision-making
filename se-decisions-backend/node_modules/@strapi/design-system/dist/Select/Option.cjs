"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("react"),y=require("prop-types"),m=require("styled-components"),x=require("../BaseCheckbox/assets/checkmark.cjs"),l=require("../Box/Box.cjs"),b=require("../Flex/Flex.cjs"),k=require("../Typography/Typography.cjs"),i=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=i(s),t=i(y),u=i(m),R=u.default(l.Box)`
  border: 1px solid
    ${({theme:e,selected:o,indeterminate:a})=>o||a?e.colors.primary600:e.colors.neutral300};
  height: 18px;
  width: 18px;
  background-color: ${({theme:e,selected:o,indeterminate:a})=>o||a?e.colors.primary600:e.colors.neutral0};

  ${({theme:e,indeterminate:o})=>o&&`&::after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

  `}

  ${({selected:e})=>e&&`  
    &::after {
      content: '';
      background: url(${x}) no-repeat no-repeat center center;
      width: 100%;
      height: 100%;
      position: absolute;
    }

  `}
`,T=u.default(l.Box)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  &.is-focused {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,n=({selected:e,indeterminate:o,children:a,value:c,multi:p,isChild:f,startIcon:d,...h})=>{const g=s.useRef(null);return r.default.createElement(T,{as:"li",hasRadius:!0,paddingLeft:f?7:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:g,role:"option","aria-selected":e,background:"neutral0","data-strapi-value":c,...h},r.default.createElement(b.Flex,null,d&&r.default.createElement(l.Box,{paddingRight:2,"aria-hidden":!0},d),p&&r.default.createElement(l.Box,{paddingRight:2,"aria-hidden":!0},r.default.createElement(R,{hasRadius:!0,overflow:"hidden",position:"relative",indeterminate:o,selected:e,zIndex:1})),r.default.createElement(k.Typography,{textColor:e?"primary600":"neutral800",fontWeight:e?"bold":null},a)))};n.defaultProps={isChild:!1,multi:!1,selected:!1,startIcon:void 0,indeterminate:!1};n.propTypes={children:t.default.oneOfType([t.default.string,t.default.number]).isRequired,indeterminate:t.default.bool,isChild:t.default.bool,multi:t.default.bool,selected:t.default.bool,startIcon:t.default.node,value:t.default.oneOfType([t.default.string,t.default.number]).isRequired};n.displayName="Option";exports.Option=n;
