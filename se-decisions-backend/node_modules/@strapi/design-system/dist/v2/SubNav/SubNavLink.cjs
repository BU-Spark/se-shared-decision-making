"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const m=require("react"),b=require("@strapi/icons"),h=require("prop-types"),x=require("styled-components"),B=require("../../BaseLink/BaseLink.cjs"),a=require("../../Box/Box.cjs"),i=require("../../Flex/Flex.cjs"),c=require("../../Typography/Typography.cjs"),n=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=n(m),o=n(h),s=n(x),$=s.default(a.Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${c.Typography} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,u=s.default(b.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:l})=>l?e.colors.primary600:e.colors.neutral600};
  }
`,v=s.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,r=t.default.forwardRef(({children:e,icon:l,withBullet:d,as:p,isSubSectionChild:f,...y},g)=>t.default.createElement($,{as:p,icon:l,background:"neutral100",paddingLeft:f?9:7,paddingBottom:2,paddingTop:2,ref:g,...y},t.default.createElement(i.Flex,null,l?t.default.createElement(v,null,l):t.default.createElement(u,null),t.default.createElement(a.Box,{paddingLeft:2},t.default.createElement(c.Typography,{as:"span"},e))),d&&t.default.createElement(a.Box,{as:i.Flex,paddingRight:4},t.default.createElement(u,{$active:!0}))));r.displayName="SubNavLink";r.defaultProps={as:B.BaseLink,icon:null,isSubSectionChild:!1,withBullet:!1};r.propTypes={as:o.default.elementType,children:o.default.node.isRequired,icon:o.default.element,isSubSectionChild:o.default.bool,withBullet:o.default.bool};exports.SubNavLink=r;
