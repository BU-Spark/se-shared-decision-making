"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react/jsx-runtime"),j=require("react"),v=require("styled-components"),y=require("../BaseButton/BaseButton.cjs"),B=require("../Flex/Flex.cjs"),m=require("../Tooltip/Tooltip.cjs"),x=require("../VisuallyHidden/VisuallyHidden.cjs"),_=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function R(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const u=R(j),c=_(v),q=u.forwardRef(({label:e,background:r,borderWidth:t,noBorder:o=!1,children:d,icon:f,disabled:l=!1,onClick:a,"aria-label":p,...b},g)=>{const $=h=>{!l&&a&&a(h)},s=n.jsxs(i,{"aria-disabled":l,background:l?"neutral150":r,borderWidth:o?0:t,justifyContent:"center",height:`${2}rem`,width:`${2}rem`,...b,ref:g,onClick:$,children:[n.jsx(x.VisuallyHidden,{as:"span",children:e??p}),u.cloneElement(f||d,{"aria-hidden":!0,focusable:!1})]});return e?n.jsx(m.Tooltip,{label:e,children:s}):s}),i=c.default(y.BaseButton)`
  svg {
    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,O=c.default(B.Flex)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${i} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`;exports.IconButton=q;exports.IconButtonGroup=O;
