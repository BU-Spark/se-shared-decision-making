"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react/jsx-runtime"),F=require("react"),c=require("styled-components"),q=require("./FieldContext.cjs"),l=require("../Box/Box.cjs"),B=require("../Flex/Flex.cjs"),R=require("../themes/utils.cjs"),I=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},p=I(c),u={S:6.5,M:10.5},w=F.forwardRef(({endAction:e,startAction:r,disabled:o=!1,onChange:a,size:g="M",...b},h)=>{const{id:t,error:s,hint:$,name:x,required:j}=q.useField();let i;s?i=`${t}-error`:$&&(i=`${t}-hint`);const d=Boolean(s),y=m=>{!o&&a&&a(m)};return n.jsxs(f,{justifyContent:"space-between",hasError:d,disabled:o,children:[r?n.jsx(l.Box,{paddingLeft:3,paddingRight:2,children:r}):null,n.jsx(_,{id:t,name:x,ref:h,"aria-describedby":i,"aria-invalid":d,"aria-disabled":o,disabled:o,"data-disabled":o?"":void 0,hasLeftAction:Boolean(r),hasRightAction:Boolean(e),onChange:y,"aria-required":j,$size:g,...b}),e?n.jsx(l.Box,{paddingLeft:2,paddingRight:3,children:e}):null]})}),_=p.default.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${u[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:r})=>r?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:r})=>r?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${u[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,f=p.default(B.Flex)`
  border: 1px solid ${({theme:e,hasError:r})=>r?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${R.inputFocusStyle()}

  ${({theme:e,disabled:r})=>r?c.css`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`;exports.FieldInput=w;exports.InputWrapper=f;
