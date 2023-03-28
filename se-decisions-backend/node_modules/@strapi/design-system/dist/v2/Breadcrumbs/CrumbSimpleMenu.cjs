"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("react"),s=require("@strapi/icons"),a=require("prop-types"),c=require("styled-components"),i=require("../../Button/Button.cjs"),d=require("../SimpleMenu/SimpleMenu.cjs"),u=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},n=u(l),t=u(a),p=u(c),f=p.default(i.Button)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[3]}`};

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,o=({children:e,...r})=>n.default.createElement(d.SimpleMenu,{noBorder:!0,icon:n.default.createElement(s.CarretDown,null),as:f,size:"S",...r},e);o.displayName="CrumbSimpleMenu";o.propTypes={"aria-label":t.default.string.isRequired,children:t.default.oneOfType([t.default.arrayOf(t.default.node),t.default.node]).isRequired};exports.CrumbSimpleMenu=o;
