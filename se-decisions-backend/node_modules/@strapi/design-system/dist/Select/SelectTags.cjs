"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("react"),d=require("@strapi/icons"),i=require("prop-types"),f=require("styled-components"),p=require("../Flex/Flex.cjs"),g=require("../Tag/Tag.cjs"),s=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},a=s(c),t=s(i),o=s(f),T=o.default.div`
  margin-bottom: ${({theme:e})=>e.spaces[1]};
`,m=o.default(g.Tag)`
  margin-left: ${({theme:e})=>e.spaces[1]};
  margin-top: ${({theme:e})=>e.spaces[1]};
`,r=({tags:e,onRemoveTag:n,disabled:u})=>a.default.createElement(T,null,a.default.createElement(p.Flex,{wrap:"wrap"},e.map(l=>a.default.createElement(m,{disabled:u,key:`tag-${l.value}`,icon:a.default.createElement(d.Cross,null),onClick:()=>n(l.value),position:"relative",tabIndex:-1,zIndex:1},l.label))));r.defaultProps={disabled:!1,tags:[]};r.propTypes={disabled:t.default.bool,onRemoveTag:t.default.func.isRequired,tags:t.default.arrayOf(t.default.shape({label:t.default.string,value:t.default.oneOfType([t.default.string,t.default.number])}))};exports.SelectTags=r;
