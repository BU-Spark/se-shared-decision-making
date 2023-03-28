"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const p=require("react"),c=require("prop-types"),y=require("styled-components"),o=require("../Box/Box.cjs"),f=require("../Typography/Typography.cjs"),r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},a=r(p),t=r(c),d=r(y),g=d.default(o.Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,m=d.default(o.Box)`
  svg {
    height: ${88/16}rem;
  }
`,n=({icon:e,content:l,action:u,hasRadius:s,shadow:i})=>a.default.createElement(g,{padding:11,background:"neutral0",hasRadius:s,shadow:i},a.default.createElement(m,{paddingBottom:6,"aria-hidden":!0},e),a.default.createElement(o.Box,{paddingBottom:4},a.default.createElement(f.Typography,{variant:"delta",as:"p",textColor:"neutral600"},l)),u);n.defaultProps={action:void 0,hasRadius:!0,shadow:"tableShadow"};n.propTypes={action:t.default.node,content:t.default.string.isRequired,hasRadius:t.default.bool,icon:t.default.node.isRequired,shadow:t.default.string};exports.EmptyStateLayout=n;
