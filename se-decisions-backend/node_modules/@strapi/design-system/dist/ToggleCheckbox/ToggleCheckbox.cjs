"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const k=require("react"),R=require("prop-types"),$=require("styled-components"),L=require("../Box/Box.cjs");require("../Field/Field.cjs");require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");require("react/jsx-runtime");const _=require("../Field/FieldContext.cjs"),g=require("../Typography/Typography.cjs");require("../Field/FieldAction.cjs");const E=require("../Flex/Flex.cjs"),z=require("../themes/sizes.cjs"),B=require("../themes/utils.cjs"),S=require("../VisuallyHidden/VisuallyHidden.cjs"),c=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=c(k),o=c(R),i=c($),V=i.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,W=i.default(L.Box)`
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${B.inputFocusStyle()}
`,h=i.default(E.Flex).attrs({hasRadius:!0})`
  background-color: ${({theme:e,checked:n,disabled:a})=>n?a?e.colors.neutral200:e.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:e,checked:n,disabled:a})=>n&&n!==null?a?e.colors.neutral300:e.colors.neutral200:a?e.colors.neutral150:e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
`,H=i.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,u=r.default.forwardRef(({size:e,onLabel:n,offLabel:a,children:x,checked:t,disabled:l,onChange:y,...b},q)=>{const{error:C,hint:j,id:p,name:m,required:F}=_.useField(),f="neutral600";let T=!t&&t!==null?"danger700":f,w=t?"primary600":f;const v=d=>{l||y(d)};let s;return C?s=`${p}-error`:j&&(s=`${p}-hint`),r.default.createElement(V,null,r.default.createElement(S.VisuallyHidden,null,x),r.default.createElement(W,{hasRadius:!0,disabled:l,padding:1,display:"flex",background:l?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},r.default.createElement(h,{size:e,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:t===null?!1:!t,disabled:l},r.default.createElement(g.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:l?"neutral700":T},a)),r.default.createElement(h,{size:e,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:t===null?!1:t,disabled:l},r.default.createElement(g.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:l?"neutral700":w},n)),r.default.createElement(H,{type:"checkbox","aria-disabled":l,"aria-describedby":s,onChange:d=>v(d),name:m,ref:q,"aria-required":F,...b,checked:!(t===null||!t)})))});u.displayName="ToggleCheckbox";u.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"};u.propTypes={checked:o.default.bool,children:o.default.string.isRequired,disabled:o.default.bool,offLabel:o.default.string.isRequired,onChange:o.default.func,onLabel:o.default.string.isRequired,size:o.default.oneOf(Object.keys(z.sizes.input))};exports.ToggleCheckbox=u;
