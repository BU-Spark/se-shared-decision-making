"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const b=require("react/jsx-runtime"),r=require("react"),g=require("styled-components"),y=require("./context.cjs"),t=require("./utils.cjs"),R=require("../hooks/useId.cjs"),d=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},m=d(r),h=d(g),x=h.default.input`
  margin: 0;
  padding: 0;
  background-color: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 50%;
  height: ${({size:e})=>typeof e=="number"?e:t.getRadioSize(e)};
  width: ${({size:e})=>typeof e=="number"?e:t.getRadioSize(e)};
  -webkit-appearance: none;

  &:after {
    border-radius: 50%;
    content: '';
    position: relative;
    z-index: 1;
    display: block;
    height: ${({size:e})=>typeof e=="number"?e:t.getSelectedRadioSize(e)};
    width: ${({size:e})=>typeof e=="number"?e:t.getSelectedRadioSize(e)};
    left: ${t.getSelectedRadioPosition};
    top: ${t.getSelectedRadioPosition};
  }

  &:checked:after {
    background: ${({theme:e})=>e.colors.primary600};
  }

  &:disabled {
    border: 1px solid ${({theme:e})=>e.colors.neutral300};
    background: ${({theme:e})=>e.colors.neutral200};
  }
`,a=m.default.forwardRef(({value:e,disabled:n=!1,...i},c)=>{const s=R.useId(),{onChange:l,selected:u,name:p,size:f}=r.useContext(y.RadioContext),o=u===e;return b.jsx(x,{ref:c,type:"radio",name:p,value:e,tabIndex:o?0:-1,"aria-checked":o,checked:o,disabled:n,id:s,size:f,onChange:l,...i})});a.displayName="Radio";exports.BaseRadio=a;
