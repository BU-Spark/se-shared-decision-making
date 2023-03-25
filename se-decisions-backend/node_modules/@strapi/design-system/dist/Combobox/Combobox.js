import o, { useState as y, useRef as C, useEffect as _, useLayoutEffect as xe, Children as j, cloneElement as ye } from "react";
import { Cross as Ie, CarretDown as Oe } from "@strapi/icons";
import e from "prop-types";
import { ComboboxOption as ke } from "./ComboboxOption.js";
import { MainRow as Me, InputContainer as $e, ValueContainer as we, Input as Le } from "./components.js";
import { filterOptions as q, maintainScrollVisibility as De, getActionFromKey as Re, MenuActions as b, getUpdatedIndex as R } from "./utils.js";
import { Box as Be } from "../Box/Box.js";
import { Field as Fe } from "../Field/Field.js";
import { FieldLabel as Se } from "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import { FieldHint as Te } from "../Field/FieldHint.js";
import { FieldError as Ae } from "../Field/FieldError.js";
import "../Field/FieldContext.js";
import "../Field/FieldAction.js";
import { Flex as B } from "../Flex/Flex.js";
import { KeyboardKeys as Pe } from "../helpers/keyboardKeys.js";
import { useId as Ve } from "../hooks/useId.js";
import { Loader as Ke } from "../Loader/Loader.js";
import { Popover as Ne } from "../Popover/Popover.js";
import { IconBox as He, CaretBox as Ue } from "../Select/components.js";
import { Typography as z } from "../Typography/Typography.js";
import { VisuallyHidden as _e } from "../VisuallyHidden/VisuallyHidden.js";
const I = ({
  children: s,
  clearLabel: G,
  creatable: h,
  createMessage: J,
  disabled: c,
  error: O,
  hasMoreItems: Q,
  hint: $,
  id: X,
  label: E,
  labelAction: Y,
  loading: w,
  loadingMessage: Z,
  noOptionsMessage: ee,
  onChange: F,
  onClear: S,
  onCreateOption: te,
  onInputChange: T,
  onLoadMore: oe,
  placeholder: ne,
  required: A,
  value: d,
  ...re
}) => {
  const ae = () => s.find((t) => t.props?.value.toLowerCase() === d.toLowerCase()).props?.children, [i, P] = y(0), [ie, le] = y(null), [l, V] = y(s), [u, se] = y(!1), [r, k] = y(""), v = C(), M = C(!1), x = C(), K = C(), ce = C(), N = C(!0), a = Ve(X), pe = `${a}-label`;
  if (!E && !re["aria-label"])
    throw new Error('The Combobox component needs a "label" or an "aria-label" props');
  _(() => {
    V(q(s, r));
  }, [r, s]), _(() => {
    u && v.current && De(v.current);
  }, [i, u]), xe(() => {
    N.current && (N.current = !1);
  }, [d]);
  const de = u ? `${a}-${i}` : "", H = () => {
    F(null), k("");
  }, fe = (t) => {
    T && T(t);
    const n = x.current.value;
    V(q(s, n)), P(0), le(null), r !== n && k(n), u || f(!0, !1);
  }, ue = (t) => {
    const { key: n } = t, p = h && r ? l.length : l.length - 1, g = Re(n, u);
    switch (d && !r && n === Pe.BACKSPACE && H(), g) {
      case b.Next: {
        if (i === p) {
          m(0);
          break;
        }
        m(R(i, p, g));
        break;
      }
      case b.Previous: {
        if (i === 0) {
          m(p);
          break;
        }
        m(R(i, p, g));
        break;
      }
      case b.Last:
      case b.First: {
        if (i === p) {
          m(0);
          break;
        }
        m(R(i, p, g));
        break;
      }
      case b.CloseSelect:
        t.preventDefault(), L(i);
        break;
      case b.Close:
        t.preventDefault(), f(!1);
        break;
      case b.Open:
        f(!0);
        break;
    }
  }, me = (t) => {
    if (t.preventDefault(), d && !M.current && k(""), M.current) {
      M.current = !1;
      return;
    }
    f(!1, !1);
  }, m = (t) => {
    P(t);
  }, be = (t) => {
    m(t), L(t);
  }, U = () => {
    M.current = !0;
  }, L = (t) => {
    const n = l[t];
    if (k(""), n) {
      F(n.props.value), f(!1);
      return;
    }
    h && (te(r), f(!1));
  }, f = (t, n = !0) => {
    se(t), n && x.current.focus();
  }, ge = j.toArray(l).map((t, n) => {
    const p = i === n;
    return ye(t, {
      id: `${a}-${n}`,
      "aria-selected": ie === n,
      "aria-posinset": n + 1,
      "aria-setsize": j.toArray(l).length,
      ref(g) {
        p && (v.current = g);
      },
      onClick: () => be(n),
      onMouseDown: U,
      isSelected: p
    });
  }), Ce = () => {
    x.current.focus(), S && S(), H();
  }, he = () => {
    x.current.focus(), f(!0);
  }, Ee = () => {
    const t = l.findIndex((n) => n.props?.children === r);
    return r && t === -1;
  }, ve = (t) => {
    t.preventDefault(), f(t, !0);
  };
  let D;
  return O ? D = `${a}-error` : $ && (D = `${a}-hint`), /* @__PURE__ */ o.createElement(Fe, { hint: $, error: O, id: a, required: A }, /* @__PURE__ */ o.createElement(_e, { "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text" }, d), /* @__PURE__ */ o.createElement(B, { direction: "column", alignItems: "stretch", gap: E || $ || O ? 1 : 0 }, E && /* @__PURE__ */ o.createElement(Se, { action: Y }, E), /* @__PURE__ */ o.createElement(Me, { ref: K, $disabled: c, hasError: O }, /* @__PURE__ */ o.createElement($e, { wrap: "wrap" }, !r && d && /* @__PURE__ */ o.createElement(we, { id: `${a}-selected-value` }, /* @__PURE__ */ o.createElement(z, null, ae())), /* @__PURE__ */ o.createElement(
    Le,
    {
      "aria-activedescendant": de,
      "aria-autocomplete": "list",
      "aria-controls": `${a}-listbox`,
      "aria-disabled": c,
      "aria-expanded": u,
      "aria-haspopup": "listbox",
      "aria-describedby": D,
      autoComplete: "off",
      autoCorrect: "off",
      id: a,
      onBlur: c ? void 0 : me,
      onClick: c ? void 0 : ve,
      onInput: c ? void 0 : fe,
      onKeyDown: c ? void 0 : ue,
      placeholder: d ? "" : ne,
      readOnly: c,
      ref: x,
      required: A,
      role: "combobox",
      spellCheck: "off",
      type: "text",
      value: r
    }
  )), /* @__PURE__ */ o.createElement(B, null, (d || r) && /* @__PURE__ */ o.createElement(
    He,
    {
      id: `${a}-clear`,
      "aria-label": G,
      disabled: c,
      paddingLeft: 3,
      as: "button",
      onClick: Ce,
      type: "button"
    },
    /* @__PURE__ */ o.createElement(Ie, null)
  ), /* @__PURE__ */ o.createElement(
    Ue,
    {
      disabled: c,
      paddingLeft: 3,
      "aria-hidden": !0,
      as: "button",
      onClick: he,
      tabIndex: -1,
      type: "button"
    },
    /* @__PURE__ */ o.createElement(Oe, null)
  ))), /* @__PURE__ */ o.createElement(Te, null), /* @__PURE__ */ o.createElement(Ae, null)), u && /* @__PURE__ */ o.createElement(
    Ne,
    {
      id: `${a}-popover`,
      source: K,
      spacing: 4,
      fullWidth: !0,
      intersectionId: `${a}-listbox-popover-intersection`,
      onReachEnd: Q && !w ? oe : void 0
    },
    /* @__PURE__ */ o.createElement(
      "div",
      {
        role: "listbox",
        ref: ce,
        id: `${a}-listbox`,
        "aria-labelledby": E ? pe : void 0
      },
      (Boolean(l.length) || h) && /* @__PURE__ */ o.createElement(o.Fragment, null, ge, Ee() && h && /* @__PURE__ */ o.createElement(
        ke,
        {
          isSelected: i === l.length,
          ref: (t) => {
            i === l.length && (v.current = t);
          },
          onMouseDown: U,
          onClick: () => L(),
          taindex: 0
        },
        J(r)
      )),
      !l.length && !h && !w && /* @__PURE__ */ o.createElement(Be, { paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, ref: v }, /* @__PURE__ */ o.createElement(z, { textColor: "neutral800" }, ee(r))),
      w && /* @__PURE__ */ o.createElement(B, { justifyContent: "center", alignItems: "center", paddingTop: 2, paddingBottom: 2 }, /* @__PURE__ */ o.createElement(Ke, { small: !0 }, Z))
    )
  ));
}, W = (s) => /* @__PURE__ */ o.createElement(I, { ...s, creatable: !0 });
I.defaultProps = {
  "aria-label": void 0,
  clearLabel: "clear",
  creatable: !1,
  createMessage: (s) => `Create "${s}"`,
  disabled: !1,
  error: void 0,
  hasMoreItems: !1,
  hint: void 0,
  id: void 0,
  label: void 0,
  loading: !1,
  loadingMessage: "Loading content...",
  noOptionsMessage: () => "No results found",
  onClear: void 0,
  onCreateOption: void 0,
  onInputChange: void 0,
  onLoadMore: void 0,
  placeholder: "Select or enter a value",
  value: void 0
};
W.defaultProps = I.defaultProps;
I.propTypes = {
  "aria-label": e.string,
  children: e.oneOfType([e.arrayOf(e.node), e.node]),
  clearLabel: e.string,
  creatable: e.bool,
  createMessage: e.func,
  disabled: e.bool,
  error: e.string,
  hasMoreItems: e.bool,
  id: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  label: e.string,
  labelAction: e.element,
  loading: e.bool,
  loadingMessage: e.string,
  noOptionsMessage: e.func,
  onChange: e.func.isRequired,
  onClear: e.func,
  onCreateOption: e.func,
  onInputChange: e.func,
  onLoadMore: e.func,
  placeholder: e.string,
  value: e.string
};
W.propTypes = {
  ...I.propTypes,
  onCreateOption: e.func.isRequired
};
export {
  I as Combobox,
  W as CreatableCombobox
};
