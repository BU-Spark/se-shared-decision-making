"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("styled-components"),a=require("../Box/Box.cjs"),s=require("../Flex/Flex.cjs"),u=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},l=u(d),i=l.default(a.Box)`
  border-bottom: 2px solid
    ${({theme:e,selected:r,hasError:n})=>r?n?e.colors.danger600:e.colors.primary600:"transparent"};
`,o=l.default(a.Box)`
  border-bottom: 1px solid ${({theme:e,selected:r})=>r?e.colors.neutral0:e.colors.neutral150};
`,t=l.default.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${o} {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral150};
  }

  ${o} {
    border-right: ${({theme:e,showRightBorder:r})=>r?`1px solid ${e.colors.neutral150}`:"none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,b=l.default(s.Flex)`
  & > * {
    flex: 1;
  }

  & ${t}:first-of-type ${o} {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 0`};
  }

  & ${t}:last-of-type ${o} {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} 0 0`};
  }

  & ${t}[aria-selected="true"] ${o} {
    border-radius: ${({theme:e})=>`${e.borderRadius} ${e.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`;exports.DefaultTabBox=o;exports.DefaultTabButton=t;exports.DefaultTabsRow=b;exports.SimpleTabBox=i;
