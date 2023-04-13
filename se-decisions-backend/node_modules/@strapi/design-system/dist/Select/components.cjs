"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("styled-components"),s=require("../Box/Box.cjs"),i=require("../Flex/Flex.cjs"),r=require("../themes/utils.cjs"),a=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=a(n),d=t.default(i.Flex)`
  position: relative;
  border: 1px solid ${({theme:e,hasError:o})=>o?e.colors.danger600:e.colors.neutral200};
  padding-right: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  min-height: ${r.getThemeSize("input")};

  ${({theme:e,disabled:o})=>o?`
    color: ${e.colors.neutral600};
    background: ${e.colors.neutral150};
  `:void 0}

  ${r.inputFocusStyle()}
`,l=t.default(s.Box)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,u=t.default(l)`
  display: flex;
  background: none;
  border: none;
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};

  svg {
    width: ${6/16}rem;
  }
`;exports.CaretBox=u;exports.IconBox=l;exports.SelectButtonWrapper=d;
