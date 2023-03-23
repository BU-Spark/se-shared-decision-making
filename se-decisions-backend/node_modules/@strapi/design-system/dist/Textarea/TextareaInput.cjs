"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("react"),b=require("prop-types"),$=require("styled-components");require("../Field/Field.cjs");require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");require("react/jsx-runtime");const g=require("../Field/FieldContext.cjs");require("../Typography/Typography.cjs");require("../Field/FieldAction.cjs");const q=require("../themes/utils.cjs"),s=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},n=s(d),F=s(b),c=s($),T=c.default.div`
  border: 1px solid ${({theme:e,hasError:r})=>r?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};

  padding-left: ${({theme:e,hasLeftAction:r})=>r?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:r})=>r?0:e.spaces[4]};
  padding-top: ${({theme:e})=>`${e.spaces[3]}`};
  padding-bottom: ${({theme:e})=>`${e.spaces[3]}`};

  background: ${({theme:e,disabled:r})=>r?e.colors.neutral150:e.colors.neutral0};
  ${q.inputFocusStyle()}
`,j=c.default.textarea`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: ${14/16}rem;
  border: none;
  color: ${({theme:e,disabled:r})=>r?e.colors.neutral600:e.colors.neutral800};
  resize: none;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,t=d.forwardRef(({disabled:e,...r},u)=>{const{id:o,error:l,hint:p,name:f,required:y}=g.useField();let a;l?a=`${o}-error`:p&&(a=`${o}-hint`);const i=Boolean(l);return n.default.createElement(T,{hasError:i,disabled:e},n.default.createElement(j,{id:o,name:f,ref:u,"aria-describedby":a,"aria-invalid":i,disabled:e,hasError:i,"aria-required":y,...r}))});t.displayName="TextareaInput";t.defaultProps={disabled:!1};t.propTypes={disabled:F.default.bool};exports.TextareaInput=t;
