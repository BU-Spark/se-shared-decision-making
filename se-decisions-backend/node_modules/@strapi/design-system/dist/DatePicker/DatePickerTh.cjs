"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react/jsx-runtime"),a=require("styled-components"),o=require("../Flex/Flex.cjs");require("react");require("../RawTable/RawTableContext.cjs");const s=require("../RawTable/RawCell.cjs");require("../Box/Box.cjs");const l=require("../Typography/Typography.cjs"),n=require("../VisuallyHidden/VisuallyHidden.cjs"),u=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=u(a),c=r.default(s.RawTh)`
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,d=r.default(o.Flex)`
  height: ${24/16}rem;
  width: ${32/16}rem;
`,h=({children:e,...i})=>t.jsx(c,{...i,children:t.jsxs(d,{justifyContent:"center",children:[t.jsx(l.Typography,{variant:"pi",fontWeight:"bold",color:"neutral800","aria-hidden":!0,children:e.substr(0,2)}),t.jsx(n.VisuallyHidden,{children:t.jsx("span",{children:e})})]})});exports.DatePickerTh=h;
