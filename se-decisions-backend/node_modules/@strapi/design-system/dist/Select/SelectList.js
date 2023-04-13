import O from "react";
import r from "prop-types";
import { UpState as f, DownState as b } from "./constants.js";
import { useListRef as S } from "./hooks/useListRef.js";
import { getActiveDescendant as u, changeDescendant as s } from "./utils.js";
import { Flex as v } from "../Flex/Flex.js";
import { KeyboardKeys as i } from "../helpers/keyboardKeys.js";
const m = ({ labelledBy: g, onSelectItem: p, children: y, multi: d, onEscape: a, expanded: A }) => {
  const e = S(A), D = (o) => {
    switch (o.key) {
      case i.ESCAPE: {
        o.stopPropagation(), a();
        break;
      }
      case i.DOWN: {
        o.preventDefault();
        const t = u(e.current);
        if (!t)
          return;
        const n = t.nextSibling;
        if (n)
          s(e.current, n);
        else {
          const c = e.current.querySelectorAll('[role="option"]')[0];
          s(e.current, c);
        }
        break;
      }
      case i.UP: {
        o.preventDefault();
        const t = u(e.current);
        if (!t)
          return;
        const n = t.previousSibling;
        if (n)
          s(e.current, n);
        else {
          const l = e.current.querySelectorAll('[role="option"]'), c = l[l.length - 1];
          s(e.current, c);
        }
        break;
      }
      case i.SPACE:
      case i.ENTER: {
        o.preventDefault();
        const t = u(e.current);
        t.getAttribute("data-opt-group") ? p(
          t.getAttribute("data-opt-group-children").split(","),
          t.getAttribute("data-opt-group")
        ) : p(t.getAttribute("data-strapi-value")), d || a();
        break;
      }
    }
  };
  return /* @__PURE__ */ O.createElement(
    v,
    {
      as: "ul",
      gap: 1,
      direction: "column",
      alignItems: "stretch",
      role: "listbox",
      "aria-labelledby": g,
      tabIndex: -1,
      ref: e,
      onKeyDown: D,
      onBlur: a,
      "aria-multiselectable": d
    },
    y
  );
};
m.defaultProps = {
  labelledBy: void 0,
  multi: !1
};
m.propTypes = {
  children: r.node.isRequired,
  expanded: r.oneOf([f.Keyboard, f.Mouse, b.Keyboard, b.Mouse]).isRequired,
  labelledBy: r.string,
  multi: r.bool,
  onEscape: r.func.isRequired,
  onSelectItem: r.func.isRequired
};
export {
  m as SelectList
};
