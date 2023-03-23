"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const f=require("react"),y=require("@strapi/icons"),m=require("prop-types"),g=require("styled-components"),h=require("../../BaseLink/BaseLink.cjs"),v=require("../../Box/Box.cjs"),L=require("../../themes/utils.cjs"),k=require("../../Typography/Typography.cjs"),l=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=l(f),a=l(m),u=l(g),q=u.default(h.BaseLink)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg path {
    fill: ${({disabled:e,theme:r})=>e?r.colors.neutral600:r.colors.primary600};
  }

  svg {
    font-size: ${10/16}rem;
  }

  &:hover,
  &:active {
    color: ${({theme:e})=>e.colors.primary800};
  }

  ${L.buttonFocusStyle};
`,s=u.default(v.Box)`
  display: flex;
`,n=t.default.forwardRef(({children:e,href:r,disabled:i,startIcon:d,endIcon:o,...c},p)=>t.default.createElement(q,{ref:p,href:r,disabled:i,...c},d&&t.default.createElement(s,{as:"span","aria-hidden":!0,paddingRight:2},d),t.default.createElement(k.Typography,{textColor:i?"neutral600":"primary600"},e),o&&t.default.createElement(s,{as:"span","aria-hidden":!0,paddingLeft:2},o),r&&!o&&t.default.createElement(s,{as:"span","aria-hidden":!0,paddingLeft:2},t.default.createElement(y.ExternalLink,null))));n.displayName="Link";n.defaultProps={as:void 0,href:void 0,disabled:!1,startIcon:void 0,endIcon:void 0};n.propTypes={as:a.default.elementType,children:a.default.node.isRequired,disabled:a.default.bool,endIcon:a.default.element,href:a.default.string,startIcon:a.default.element};exports.Link=n;
