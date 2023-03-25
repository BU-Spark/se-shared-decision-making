"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react/jsx-runtime"),b=require("react"),p=require("styled-components"),f=require("./assets/checkmark-black.cjs"),k=require("./assets/checkmark.cjs"),s=require("./utils.cjs"),h=require("../Box/Box.cjs"),x=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function g(e){if(e&&e.__esModule)return e;const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}return o.default=e,Object.freeze(o)}const l=g(b),m=x(p),y=m.default.input`
  height: ${s.getCheckboxSize};
  min-width: ${s.getCheckboxSize};
  margin: 0;
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:e})=>e.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:e})=>e.colors.primary600};
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${k}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${f}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.neutral200};
    border: 1px solid ${({theme:e})=>e.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:e})=>e.colors.primary600};
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:e})=>e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:e})=>e.colors.neutral200};
      border: 1px solid ${({theme:e})=>e.colors.neutral300};
      &:after {
        background-color: ${({theme:e})=>e.colors.neutral500};
      }
    }
  }
`,i=({indeterminate:e=!1,size:o="M",name:r,value:t=!1,onValueChange:a,...u})=>{const c=l.useRef(null);l.useEffect(()=>{c.current&&e?c.current.indeterminate=e:c.current.indeterminate=!1},[e]);const d=()=>{a&&a(!t)};return n.jsx(h.Box,{children:n.jsx(y,{size:o,checked:t,onChange:d,type:"checkbox",ref:c,name:r,...u})})};i.displayName="BaseCheckbox";exports.BaseCheckbox=i;
