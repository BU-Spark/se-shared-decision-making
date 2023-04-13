"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react/jsx-runtime"),s=require("styled-components");require("react");require("../RawTable/RawTableContext.cjs");const u=require("../RawTable/RawCell.cjs");require("../Box/Box.cjs");const l=require("../Typography/Typography.cjs"),c=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},d=c(s),p=d.default.button`
  border: none;
  background: ${({theme:e,$isSelected:r})=>r?e.colors.primary100:e.colors.neutral0};
  height: ${32/16}rem;
  text-align: center;
  width: ${32/16}rem;
  border-radius: ${({theme:e})=>e.borderRadius};

  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:hover > ${l.Typography} {
    color: ${({theme:e})=>e.colors.primary600};
  }
`,y=({children:e,outsideMonth:r=!1,onSelectDay:n,isSelected:t=!1,...i})=>{let o="neutral900";return t?o="primary600":r&&(o="neutral600"),a.jsx(u.RawTd,{...i,children:a.jsx(p,{tabIndex:-1,onClick:n,$isSelected:t,type:"button",children:a.jsx(l.Typography,{variant:"pi",textColor:o,fontWeight:t?"bold":void 0,children:e})})})};exports.DatePickerTd=y;
