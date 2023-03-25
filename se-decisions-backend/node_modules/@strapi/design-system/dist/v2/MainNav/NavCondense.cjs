"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("react"),s=require("@strapi/icons"),d=require("prop-types"),l=require("styled-components"),c=require("./MainNavContext.cjs"),u=require("../../Icon/Icon.cjs"),p=require("../../VisuallyHidden/VisuallyHidden.cjs"),o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},n=o(i),f=o(d),h=o(l),y=h.default.button`
  background: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${(9+4)/16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({theme:e,condensed:t})=>t?0:e.spaces[5]};
  transform: ${({condensed:e})=>e?"translateX(50%)":void 0};
  z-index: 2;
  width: ${18/16}rem;
  height: ${25/16}rem;

  svg {
    width: ${6/16}rem;
    height: ${9/16}rem;
  }
`,a=({children:e,...t})=>{const r=c.useMainNav();return n.default.createElement(y,{as:"button",condensed:r,...t},n.default.createElement(u.Icon,{as:r?s.ChevronRight:s.ChevronLeft,"aria-hidden":!0,color:"neutral600"}),n.default.createElement(p.VisuallyHidden,null,e))};a.propTypes={children:f.default.string.isRequired};exports.NavCondense=a;
