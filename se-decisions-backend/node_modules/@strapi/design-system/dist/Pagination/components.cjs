"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const L=require("react"),g=require("@strapi/icons"),k=require("prop-types"),q=require("react-router-dom"),T=require("styled-components"),u=require("./PaginationContext.cjs"),x=require("../themes/utils.cjs"),E=require("../Typography/Typography.cjs"),l=require("../VisuallyHidden/VisuallyHidden.cjs"),c=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},a=c(L),o=c(k),s=c(T),v=s.default(E.Typography)`
  line-height: revert;
`,$={active:!0},p=s.default(q.NavLink).withConfig({shouldForwardProp:(e,t)=>!$[e]&&t(e)})`
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
`,_=s.default(p)`
  color: ${({theme:e})=>e.colors.neutral800};
`,f=({children:e,to:t,...i})=>{const{activePage:n}=u.usePagination(),r=n===1;return a.default.createElement(m,{to:r?"#":t,"aria-disabled":r,tabIndex:r?-1:void 0,...i},a.default.createElement(l.VisuallyHidden,null,e),a.default.createElement(g.ChevronLeft,{"aria-hidden":!0}))};f.displayName="PreviousLink";const y=({children:e,to:t,...i})=>{const{activePage:n,pageCount:r}=u.usePagination(),d=n===r;return a.default.createElement(m,{to:d?"#":t,"aria-disabled":d,tabIndex:d?-1:void 0,...i},a.default.createElement(l.VisuallyHidden,null,e),a.default.createElement(g.ChevronRight,{"aria-hidden":!0}))};y.displayName="NextLink";const h=({number:e,children:t,...i})=>{const{activePage:n}=u.usePagination(),r=n===e;return a.default.createElement(R,{...i,active:r},a.default.createElement(l.VisuallyHidden,null,t),a.default.createElement(v,{"aria-hidden":!0,variant:"pi",fontWeight:r?"bold":null},e))};h.displayName="PageLink";const P=({children:e,...t})=>a.default.createElement(_,{...t,as:"div"},a.default.createElement(l.VisuallyHidden,null,e),a.default.createElement(v,{"aria-hidden":!0,variant:"pi"},"\u2026"));h.propTypes={children:o.default.node.isRequired,number:o.default.number.isRequired};const b={children:o.default.node.isRequired,to:o.default.string.isRequired};y.propTypes=b;f.propTypes=b;P.propTypes={children:o.default.node.isRequired};exports.Dots=P;exports.NextLink=y;exports.PageLink=h;exports.PreviousLink=f;
