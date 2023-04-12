"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("react"),b=require("prop-types"),f=require("styled-components"),l=require("./constants.cjs"),t=require("../helpers/keyboardKeys.cjs"),n=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},K=n(u),o=n(b),h=n(f),S=h.default.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background: transparent;
  border: none;

  // The focus state is moved to the parent thanks to :focus-within
  &:focus {
    outline: none;
  }

  &[data-disabled] {
    cursor: not-allowed;
  }
`,a=u.forwardRef(({labelledBy:e,expanded:c,onTrigger:d,disabled:s,...i},y)=>{const p=r=>{if(!s)switch(r.key){case t.KeyboardKeys.DOWN:case t.KeyboardKeys.SPACE:case t.KeyboardKeys.ENTER:{r.preventDefault(),d(l.DownState.Keyboard);break}case t.KeyboardKeys.UP:{r.preventDefault(),d(l.UpState.Keyboard);break}}};return K.default.createElement(S,{ref:y,role:"combobox","aria-labelledby":e,"aria-haspopup":"listbox","aria-expanded":c,onKeyDown:p,disabled:s,"data-disabled":s?"":void 0,type:"button",...i})});a.displayName="SelectButton";a.defaultProps={expanded:!1,disabled:!1};a.propTypes={disabled:o.default.bool,expanded:o.default.bool,labelledBy:o.default.string.isRequired,onTrigger:o.default.func.isRequired};exports.SelectButton=a;
