"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const h=require("react"),m=require("prop-types"),v=require("styled-components"),b=require("./MainNavContext.cjs"),T=require("../../Badge/Badge.cjs"),x=require("../../BaseLink/BaseLink.cjs"),B=require("../../Box/Box.cjs"),$=require("../../Flex/Flex.cjs"),j=require("../../Tooltip/Tooltip.cjs"),o=require("../../Typography/Typography.cjs"),i=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=i(h),a=i(m),s=i(v),p=s.default(B.Box)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`,f=s.default(x.BaseLink)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};

  ${o.Typography} {
    color: ${({theme:e})=>e.colors.neutral600};
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};

    ${o.Typography} {
      color: ${({theme:e})=>e.colors.neutral700};
    }

    svg path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &.active {
    background: ${({theme:e})=>e.colors.primary100};

    svg path {
      fill: ${({theme:e})=>e.colors.primary600};
    }

    ${o.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: 500;
    }
  }
`,g=s.default($.Flex)`
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
`,y=s.default(T.Badge)`
  ${({theme:e,condensed:r})=>r&&`
	  position: absolute;
    // Values based on visual aspect 
    top: -${e.spaces[3]};
    right:  -${e.spaces[1]};
  `}

  ${o.Typography} {
    //find a solution to remove !important
    color: ${({theme:e})=>e.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({theme:e})=>e.spaces[6]};
  height: ${({theme:e})=>e.spaces[5]};
  padding: ${({theme:e})=>`0 ${e.spaces[2]}`};
  border-radius: ${({theme:e})=>e.spaces[10]};
  background: ${({theme:e})=>e.colors.primary600};
`,l=t.default.forwardRef(({children:e,icon:r,badgeContent:n,badgeAriaLabel:c,...d},u)=>b.useMainNav()?t.default.createElement(f,{ref:u,...d},t.default.createElement(j.Tooltip,{position:"right",label:e},t.default.createElement(g,{as:"span",justifyContent:"center"},t.default.createElement(p,{"aria-hidden":!0,paddingRight:0,as:"span"},r),n&&t.default.createElement(y,{condensed:!0,"aria-label":c},n)))):t.default.createElement(f,{ref:u,...d},t.default.createElement(g,{as:"span",justifyContent:"space-between"},t.default.createElement($.Flex,null,t.default.createElement(p,{"aria-hidden":!0,paddingRight:3,as:"span"},r),t.default.createElement(o.Typography,null,e)),n&&t.default.createElement(y,{justifyContent:"center","aria-label":c},n))));l.displayName="NavLink";l.defaultProps={badgeContent:void 0,badgeAriaLabel:void 0};l.propTypes={badgeAriaLabel:a.default.string,badgeContent:a.default.oneOfType([a.default.string,a.default.number]),children:a.default.string.isRequired,icon:a.default.node.isRequired};exports.NavLink=l;
