"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("styled-components"),i=require("../Box/Box.cjs"),n=require("../Flex/Flex.cjs"),l=require("../themes/utils.cjs"),a=o=>o&&typeof o=="object"&&"default"in o?o:{default:o},t=a(r),s=t.default(n.Flex)`
  position: relative;
  border: 1px solid ${({theme:o,hasError:e})=>e?o.colors.danger600:o.colors.neutral200};
  padding-right: ${({theme:o})=>o.spaces[3]};
  padding-left: ${({theme:o})=>o.spaces[3]};
  border-radius: ${({theme:o})=>o.borderRadius};
  background: ${({theme:o})=>o.colors.neutral0};

  ${({theme:o,$disabled:e})=>e?`
    color: ${o.colors.neutral600};
    background: ${o.colors.neutral150};
  `:void 0}

  ${l.inputFocusStyle()}
`,u=t.default.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`,d=t.default(n.Flex)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`,c=t.default.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40/16}rem;
  border: none;
  flex: 1;
  font-size: ${14/16}rem;
  color: ${({theme:o})=>o.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`,p=t.default(i.Box)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({isSelected:o,theme:e})=>o&&`background: ${e.colors.primary100};`}

  &:hover {
    background: ${({theme:o})=>o.colors.primary100};
  }
`;exports.Input=c;exports.InputContainer=d;exports.MainRow=s;exports.OptionBox=p;exports.ValueContainer=u;
