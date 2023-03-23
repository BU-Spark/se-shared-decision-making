"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("react"),d=require("@strapi/icons"),E=require("prop-types"),S=require("styled-components"),x=require("../Field/Field.cjs"),_=require("../Field/FieldLabel.cjs"),a=require("../Field/FieldInput.cjs");require("react/jsx-runtime");require("../Field/FieldContext.cjs");require("../Typography/Typography.cjs");const v=require("../Field/FieldAction.cjs"),o=require("../Flex/Flex.cjs"),$=require("../themes/sizes.cjs"),z=require("../themes/utils.cjs"),C=require("../VisuallyHidden/VisuallyHidden.cjs"),i=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=i(s),l=i(E),n=i(S),I=n.default(o.Flex)`
  font-size: 0.5rem;
  svg path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,p=n.default(o.Flex)`
  font-size: 0.8rem;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,T=n.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${p} {
      svg path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${a.InputWrapper} {
    border: 1px solid transparent;
  }

  ${z.inputFocusStyle(a.InputWrapper)}
`,r=s.forwardRef(({name:e,size:f,children:F,value:u,onClear:y,clearLabel:h,...m},q)=>{const c=s.useRef(null),b=u.length>0,j=R=>{y(R),c.current.focus()},g=q||c;return t.default.createElement(T,null,t.default.createElement(x.Field,{name:e},t.default.createElement(C.VisuallyHidden,null,t.default.createElement(_.FieldLabel,null,F)),t.default.createElement(a.FieldInput,{ref:g,value:u,startAction:t.default.createElement(p,null,t.default.createElement(d.Search,{"aria-hidden":!0})),size:f,endAction:b?t.default.createElement(v.FieldAction,{label:h,onClick:j},t.default.createElement(I,null,t.default.createElement(d.Cross,null))):void 0,...m})))});r.displayName="Searchbar";r.defaultProps={value:"",size:"M"};r.propTypes={children:l.default.node.isRequired,clearLabel:l.default.string.isRequired,name:l.default.string.isRequired,onClear:l.default.func.isRequired,size:l.default.oneOf(Object.keys($.sizes.input)),value:l.default.string};exports.Searchbar=r;
