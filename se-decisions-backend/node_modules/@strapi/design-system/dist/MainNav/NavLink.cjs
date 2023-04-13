"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const m=require("react"),$=require("prop-types"),h=require("react-router-dom"),v=require("styled-components"),b=require("./MainNavContext.cjs"),T=require("../Badge/Badge.cjs"),x=require("../Box/Box.cjs"),y=require("../Flex/Flex.cjs"),q=require("../Tooltip/Tooltip.cjs"),o=require("../Typography/Typography.cjs"),i=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=i(m),a=i($),l=i(v),u=l.default(x.Box)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`,p=l.default(h.NavLink)`
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
`,f=l.default(y.Flex)`
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
`,g=l.default(T.Badge)`
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
`,s=({children:e,icon:r,badgeContent:n,badgeAriaLabel:c,...d})=>b.useMainNav()?t.default.createElement(q.Tooltip,{position:"right",label:e},t.default.createElement(p,{...d},t.default.createElement(f,{as:"span"},t.default.createElement(u,{"aria-hidden":!0,paddingRight:0,as:"span"},r),n&&t.default.createElement(g,{condensed:!0,"aria-label":c},n)))):t.default.createElement(p,{...d},t.default.createElement(f,{as:"span",justifyContent:"space-between"},t.default.createElement(y.Flex,null,t.default.createElement(u,{"aria-hidden":!0,paddingRight:3,as:"span"},r),t.default.createElement(o.Typography,null,e)),n&&t.default.createElement(g,{justifyContent:"center","aria-label":c},n)));s.displayName="NavLink";s.defaultProps={badgeContent:void 0,badgeAriaLabel:void 0};s.propTypes={badgeAriaLabel:a.default.string,badgeContent:a.default.oneOfType([a.default.string,a.default.number]),children:a.default.node.isRequired,icon:a.default.node.isRequired};exports.NavLink=s;
