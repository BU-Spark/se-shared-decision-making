"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const L=require("react"),g=require("@strapi/icons"),k=require("prop-types"),q=require("styled-components"),u=require("./PaginationContext.cjs"),T=require("../../BaseLink/BaseLink.cjs"),x=require("../../themes/utils.cjs"),E=require("../../Typography/Typography.cjs"),d=require("../../VisuallyHidden/VisuallyHidden.cjs"),c=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},a=c(L),l=c(k),s=c(q),v=s.default(E.Typography)`
  line-height: revert;
`,w={active:!0},p=s.default(T.BaseLink).withConfig({shouldForwardProp:(e,t)=>!w[e]&&t(e)})`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${x.buttonFocusStyle}
`,R=s.default(p)`
  color: ${({theme:e,active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,m=s.default(p)`
  font-size: 0.7rem;
  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`,$=s.default(p)`
  color: ${({theme:e})=>e.colors.neutral800};
`,f=a.default.forwardRef(({children:e,...t},n)=>{const{activePage:i}=u.usePagination(),r=i===1;return a.default.createElement(m,{ref:n,"aria-disabled":r,tabIndex:r?-1:void 0,...t},a.default.createElement(d.VisuallyHidden,null,e),a.default.createElement(g.ChevronLeft,{"aria-hidden":!0}))});f.displayName="PreviousLink";const y=a.default.forwardRef(({children:e,...t},n)=>{const{activePage:i,pageCount:r}=u.usePagination(),o=i===r;return a.default.createElement(m,{ref:n,"aria-disabled":o,tabIndex:o?-1:void 0,...t},a.default.createElement(d.VisuallyHidden,null,e),a.default.createElement(g.ChevronRight,{"aria-hidden":!0}))});y.displayName="NextLink";const h=a.default.forwardRef(({number:e,children:t,...n},i)=>{const{activePage:r}=u.usePagination(),o=r===e;return a.default.createElement(R,{ref:i,...n,active:o},a.default.createElement(d.VisuallyHidden,null,t),a.default.createElement(v,{"aria-hidden":!0,variant:"pi",fontWeight:o?"bold":null},e))});h.displayName="PageLink";const P=({children:e,...t})=>a.default.createElement($,{...t,as:"div"},a.default.createElement(d.VisuallyHidden,null,e),a.default.createElement(v,{"aria-hidden":!0,variant:"pi"},"\u2026"));h.propTypes={children:l.default.node.isRequired,number:l.default.number.isRequired};const b={children:l.default.node.isRequired};y.propTypes=b;f.propTypes=b;P.propTypes={children:l.default.node.isRequired};exports.Dots=P;exports.NextLink=y;exports.PageLink=h;exports.PreviousLink=f;
