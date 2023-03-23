"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react/jsx-runtime"),y=require("react"),g=require("@strapi/icons"),j=require("react-router-dom"),m=require("styled-components"),x=require("../Box/Box.cjs"),h=require("../themes/utils.cjs"),c=require("../Typography/Typography.cjs"),_=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function b(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const v=b(y),l=_(m),q=l.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:e})=>e?"none":void 0};
  color: ${({disabled:e,theme:r})=>e?r.colors.neutral600:r.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${c.Typography} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${h.buttonFocusStyle};
`,s=l.default(x.Box)`
  display: flex;
`,L=v.forwardRef(({children:e,href:r,to:t,disabled:n=!1,startIcon:i,endIcon:a,...u},d)=>{const p=r?"_blank":void 0,f=r?"noreferrer noopener":void 0;return o.jsxs(q,{as:t&&!n?j.NavLink:"a",target:p,rel:f,to:n?void 0:t,href:n?"#":r,disabled:n,ref:d,...u,children:[i&&o.jsx(s,{as:"span","aria-hidden":!0,paddingRight:2,children:i}),o.jsx(c.Typography,{children:e}),a&&!r&&o.jsx(s,{as:"span","aria-hidden":!0,paddingLeft:2,children:a}),r&&o.jsx(s,{as:"span","aria-hidden":!0,paddingLeft:2,children:o.jsx(g.ExternalLink,{})})]})});exports.Link=L;
