"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const h=require("react"),g=require("prop-types"),q=require("styled-components"),x=require("./TextareaInput.cjs"),y=require("../Field/Field.cjs"),T=require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");const b=require("../Field/FieldHint.cjs"),j=require("../Field/FieldError.cjs");require("../Field/FieldContext.cjs");require("../Field/FieldAction.cjs");const d=require("../Flex/Flex.cjs"),v=require("../hooks/useId.cjs"),a=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},l=a(h),e=a(g),E=a(q),I=E.default.div`
  & textarea {
    // TODO: remove when we'll have fonts in the theme
    height: ${80/16}rem;
    line-height: ${20/16}rem;
  }

  & textarea::placeholder {
    font-weight: 400;
    font-size: ${14/16}rem;
    line-height: 1.43;
    color: ${({theme:t})=>t.colors.neutral500};
    opacity: 1;
  }
`,r=l.default.forwardRef(({name:t,hint:n,error:o,label:i,children:u,labelAction:s,id:c,required:f,...F},p)=>{const m=v.useId(c);return l.default.createElement(I,null,l.default.createElement(y.Field,{name:t,hint:n,error:o,id:m,required:f},l.default.createElement(d.Flex,{direction:"column",alignItems:"stretch",gap:1},i&&l.default.createElement(d.Flex,null,l.default.createElement(T.FieldLabel,{action:s},i)),l.default.createElement(x.TextareaInput,{ref:p,as:"textarea",value:u,...F}),l.default.createElement(b.FieldHint,null),l.default.createElement(j.FieldError,null))))});r.displayName="Textarea";r.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,children:"",required:!1};r.propTypes={"aria-label":e.default.string,children:e.default.string,error:e.default.string,hint:e.default.oneOfType([e.default.string,e.default.node,e.default.arrayOf(e.default.node)]),id:e.default.string,label:e.default.string,labelAction:e.default.element,name:e.default.string.isRequired,required:e.default.bool};exports.Textarea=r;
