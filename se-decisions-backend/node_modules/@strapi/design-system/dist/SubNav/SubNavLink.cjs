"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const y=require("react"),g=require("@strapi/icons"),m=require("prop-types"),b=require("react-router-dom"),h=require("styled-components"),a=require("../Box/Box.cjs"),s=require("../Flex/Flex.cjs"),c=require("../Typography/Typography.cjs"),n=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=n(y),r=n(m),i=n(h),x=i.default(a.Box)`
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
`,u=i.default(g.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:o})=>o?e.colors.primary600:e.colors.neutral600};
  }
`,v=i.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,l=({children:e,icon:o,withBullet:d,isSubSectionChild:p,...f})=>t.default.createElement(x,{as:b.NavLink,icon:o,background:"neutral100",paddingLeft:p?9:7,paddingBottom:2,paddingTop:2,...f},t.default.createElement(s.Flex,null,o?t.default.createElement(v,null,o):t.default.createElement(u,null),t.default.createElement(a.Box,{paddingLeft:2},t.default.createElement(c.Typography,{as:"span"},e))),d&&t.default.createElement(a.Box,{as:s.Flex,paddingRight:4},t.default.createElement(u,{$active:!0})));l.displayName="SubNavLink";l.defaultProps={icon:null,isSubSectionChild:!1,withBullet:!1};l.propTypes={children:r.default.node.isRequired,icon:r.default.element,isSubSectionChild:r.default.bool,withBullet:r.default.bool};exports.SubNavLink=l;
