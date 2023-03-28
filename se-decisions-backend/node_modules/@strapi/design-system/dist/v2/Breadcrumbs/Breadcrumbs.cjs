"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("react"),h=require("prop-types"),p=require("styled-components"),m=require("./Divider.cjs"),y=require("../../Box/Box.cjs"),s=require("../../Flex/Flex.cjs"),i=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=i(l),t=i(h),b=i(p),g=b.default(s.Flex)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,n=({label:e,children:o,...d})=>{const a=l.Children.toArray(o);return r.default.createElement(y.Box,{"aria-label":e,...d},r.default.createElement(g,{as:"ol",horizontal:!0},l.Children.map(a,(c,u)=>{const f=a.length>1&&u+1<a.length;return r.default.createElement(s.Flex,{inline:!0,as:"li"},c,f&&r.default.createElement(m.Divider,null))})))};n.displayName="Breadcrumbs";n.propTypes={children:t.default.oneOfType([t.default.arrayOf(t.default.node),t.default.node]).isRequired,label:t.default.string.isRequired};exports.Breadcrumbs=n;
