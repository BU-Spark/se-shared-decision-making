"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const b=require("react"),m=require("prop-types"),g=require("styled-components"),h=require("../Box/Box.cjs"),y=require("../Flex/Flex.cjs"),l=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=l(b),r=l(m),c=l(g),n=c.default.div`
  background: ${({theme:e})=>e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:e})=>e?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:e})=>e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:e})=>e.spaces[1]};
    top: ${({theme:e})=>e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,$=c.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${n} {
    background: ${({theme:e})=>e.colors.success500};
  }

  &[aria-checked='true'] ${n}:before {
    transform: translateX(1rem);
  }
`,a=t.default.forwardRef(({label:e,onChange:i,onLabel:s,offLabel:u,selected:o,visibleLabels:d,...f},p)=>t.default.createElement($,{ref:p,role:"switch","aria-checked":o,"aria-label":e,onClick:i,visibleLabels:d,type:"button",...f},t.default.createElement(y.Flex,null,t.default.createElement(n,null,t.default.createElement("span",null,s),t.default.createElement("span",null,u)),d&&t.default.createElement(h.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:o?"success600":"danger600"},o?s:u))));a.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1};a.propTypes={label:r.default.string.isRequired,offLabel:r.default.string,onChange:r.default.func.isRequired,onLabel:r.default.string,selected:r.default.bool.isRequired,visibleLabels:r.default.bool};a.displayName="Switch";exports.Switch=a;
