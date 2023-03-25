import l, { Children as C, cloneElement as D } from "react";
import i from "prop-types";
import E from "styled-components";
import { DefaultTabsRow as k, SimpleTabBox as w, DefaultTabButton as R, DefaultTabBox as B } from "./components.js";
import { useTabs as K } from "./TabsContext.js";
import { useTabsFocus as P } from "./useTabsFocus.js";
import { KeyboardKeys as T } from "../helpers/keyboardKeys.js";
import { Typography as I } from "../Typography/Typography.js";
const A = E.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, N = ({ children: b, ...p }) => {
  const { id: h, selectedTabIndex: c, selectTabIndex: o, label: m, variant: u, onTabChange: y } = K(), f = P(c, y), a = C.toArray(b).map(
    (t, s) => D(t, {
      id: `${h}-${s}`,
      index: s,
      selectedTabIndex: c,
      onTabClick: () => o(s),
      variant: u
    })
  ), x = (t) => {
    if (!a.every((n) => n.props.disabled))
      switch (t.key) {
        case T.RIGHT: {
          const n = c + 1, e = (r) => a[r].props.disabled ? r === a.length - 1 ? e(0) : e(r + 1) : r, d = e(n >= a.length ? 0 : n);
          o(d);
          break;
        }
        case T.LEFT: {
          const n = c - 1, e = (r) => a[r].props.disabled ? e(r === 0 ? a.length - 1 : r - 1) : r, d = e(n < 0 ? a.length - 1 : n);
          o(d);
          break;
        }
        case T.HOME: {
          const n = a.findIndex((e) => !e.props.disabled);
          o(n);
          break;
        }
        case T.END: {
          const e = a.map((d, r) => ({ isDisabled: d.props.disabled, index: r })).reverse().find(({ isDisabled: d }) => !d);
          e && o(e.index);
          break;
        }
      }
  };
  return u === "simple" ? /* @__PURE__ */ l.createElement("div", { ref: f, role: "tablist", "aria-label": m, onKeyDown: x, ...p }, a) : /* @__PURE__ */ l.createElement(
    k,
    {
      ref: f,
      role: "tablist",
      alignItems: "flex-end",
      "aria-label": m,
      onKeyDown: x,
      ...p
    },
    a
  );
};
N.propTypes = {
  children: i.node.isRequired
};
const v = ({ disabled: b, id: p, children: h, variant: c, hasError: o, index: m, selectedTabIndex: u, onTabClick: y, ...f }) => {
  const a = `${p}-tab`, x = `${p}-tabpanel`, t = m === u, s = () => {
    b || y();
  };
  if (c === "simple") {
    let e;
    return o ? e = "danger600" : t ? e = "primary600" : e = "neutral600", /* @__PURE__ */ l.createElement(
      A,
      {
        id: a,
        role: "tab",
        "aria-controls": t ? x : void 0,
        tabIndex: t ? 0 : -1,
        "aria-selected": t,
        type: "button",
        onClick: s,
        "aria-disabled": b,
        ...f
      },
      /* @__PURE__ */ l.createElement(w, { padding: 4, selected: t, hasError: o }, /* @__PURE__ */ l.createElement(I, { variant: "sigma", textColor: e }, h))
    );
  }
  o && console.warn('The "hasError" prop is only available for the "simple" variant.');
  const n = u - 1 === m;
  return /* @__PURE__ */ l.createElement(
    R,
    {
      id: a,
      role: "tab",
      type: "button",
      "aria-controls": t ? x : void 0,
      tabIndex: t ? 0 : -1,
      "aria-selected": t,
      onClick: s,
      "aria-disabled": b,
      showRightBorder: n,
      ...f
    },
    /* @__PURE__ */ l.createElement(B, { padding: t ? 4 : 3, background: t ? "neutral0" : "neutral100", selected: t }, /* @__PURE__ */ l.createElement(I, { fontWeight: "bold", textColor: t ? "primary700" : "neutral600" }, h))
  );
};
v.defaultProps = {
  disabled: !1,
  hasError: !1,
  id: void 0,
  index: void 0,
  onTabClick: void 0,
  selectedTabIndex: void 0,
  variant: void 0
};
v.propTypes = {
  children: i.node.isRequired,
  disabled: i.bool,
  hasError: i.bool,
  id: i.string,
  index: i.number,
  onTabClick: i.func,
  selectedTabIndex: i.number,
  variant: i.oneOf(["simple"])
};
export {
  v as Tab,
  N as Tabs
};
