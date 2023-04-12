import u, { forwardRef as b } from "react";
import e from "prop-types";
import c from "styled-components";
import { UpState as f, DownState as m } from "./constants.js";
import { KeyboardKeys as t } from "../helpers/keyboardKeys.js";
const y = c.button`
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
`, r = b(({ labelledBy: s, expanded: d, onTrigger: n, disabled: o, ...l }, i) => {
  const p = (a) => {
    if (!o)
      switch (a.key) {
        case t.DOWN:
        case t.SPACE:
        case t.ENTER: {
          a.preventDefault(), n(m.Keyboard);
          break;
        }
        case t.UP: {
          a.preventDefault(), n(f.Keyboard);
          break;
        }
      }
  };
  return /* @__PURE__ */ u.createElement(
    y,
    {
      ref: i,
      role: "combobox",
      "aria-labelledby": s,
      "aria-haspopup": "listbox",
      "aria-expanded": d,
      onKeyDown: p,
      disabled: o,
      "data-disabled": o ? "" : void 0,
      type: "button",
      ...l
    }
  );
});
r.displayName = "SelectButton";
r.defaultProps = {
  expanded: !1,
  disabled: !1
};
r.propTypes = {
  disabled: e.bool,
  expanded: e.bool,
  labelledBy: e.string.isRequired,
  onTrigger: e.func.isRequired
};
export {
  r as SelectButton
};
