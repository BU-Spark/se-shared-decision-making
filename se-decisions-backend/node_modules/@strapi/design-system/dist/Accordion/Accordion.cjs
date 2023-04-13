"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("react/jsx-runtime"),m=require("react"),$=require("styled-components"),b=require("./AccordionContext.cjs"),p=require("../Box/Box.cjs"),h=require("../Flex/Flex.cjs"),T=require("../hooks/useId.cjs"),a=require("../Typography/Typography.cjs"),_=r=>r&&typeof r=="object"&&"default"in r?r:{default:r};function q(r){if(r&&r.__esModule)return r;const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const e in r)if(e!=="default"){const t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(o,e,t.get?t:{enumerable:!0,get:()=>r[e]})}}return o.default=r,Object.freeze(o)}const A=q(m),y=_($),v=({theme:r,expanded:o,variant:e,disabled:t,error:n})=>n?`1px solid ${r.colors.danger600} !important`:t?`1px solid ${r.colors.neutral150}`:o?`1px solid ${r.colors.primary600}`:e==="primary"?`1px solid ${r.colors.neutral0}`:`1px solid ${r.colors.neutral100}`,f=y.default(a.Typography)``,B=y.default(p.Box)`
  border: ${v};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:r})=>r.colors.primary600};

    ${f} {
      color: ${({theme:r,expanded:o})=>o?void 0:r.colors.primary700};
    }

    ${a.Typography} {
      color: ${({theme:r,expanded:o})=>o?void 0:r.colors.primary600};
    }

    & > ${h.Flex} {
      background: ${({theme:r})=>r.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:r})=>r.colors.primary200};
    }
  }
`,M=({children:r,disabled:o=!1,error:e,expanded:t=!1,hasErrorMessage:n=!0,id:x,onToggle:i,toggle:d,size:u="M",variant:s="primary",shadow:g})=>{const l=T.useId(x),j=A.useMemo(()=>({expanded:t,onToggle:i,toggle:d,id:l,size:u,variant:s,disabled:o}),[o,t,l,i,u,d,s]);return c.jsxs(b.AccordionContext.Provider,{value:j,children:[c.jsx(B,{"data-strapi-expanded":t,disabled:o,"aria-disabled":o,expanded:t,hasRadius:!0,variant:s,error:e,shadow:g,children:r}),e&&n&&c.jsx(p.Box,{paddingTop:1,children:c.jsx(a.Typography,{variant:"pi",textColor:"danger600",children:e})})]})};exports.Accordion=M;exports.AccordionTypography=f;
