import r, { useState as ee, useRef as te, Children as k, cloneElement as A } from "react";
import { Cross as re, CarretDown as oe } from "@strapi/icons";
import e from "prop-types";
import ne from "styled-components";
import { SelectButtonWrapper as ie, IconBox as le, CaretBox as se } from "./components.js";
import { DownState as ae } from "./constants.js";
import { useButtonRef as pe } from "./hooks/useButtonRef.js";
import { SelectButton as ce } from "./SelectButton.js";
import { SelectList as de } from "./SelectList.js";
import { SelectTags as me } from "./SelectTags.js";
import { Box as P } from "../Box/Box.js";
import { Field as fe } from "../Field/Field.js";
import { FieldLabel as ue } from "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import { FieldHint as he } from "../Field/FieldHint.js";
import { FieldError as Ee } from "../Field/FieldError.js";
import "../Field/FieldContext.js";
import "../Field/FieldAction.js";
import { Flex as g } from "../Flex/Flex.js";
import { escapeSelector as _ } from "../helpers/escapeSelector.js";
import { useId as be } from "../hooks/useId.js";
import { Popover as ge } from "../Popover/Popover.js";
import { sizes as ye } from "../themes/sizes.js";
import { Typography as q } from "../Typography/Typography.js";
import { VisuallyHidden as z } from "../VisuallyHidden/VisuallyHidden.js";
const Be = ne(g)`
  width: 100%;
`, G = ({
  label: m,
  labelAction: H,
  id: W,
  children: N,
  customizeContent: f,
  placeholder: y,
  onChange: B,
  value: o,
  hint: I,
  error: d,
  disabled: s,
  clearLabel: C,
  onClear: S,
  onReachEnd: J,
  multi: i,
  required: x,
  selectButtonTitle: K,
  size: Q,
  startIcon: $,
  withTags: u,
  ...U
}) => {
  const n = be(W), [h, E] = ee(void 0), R = pe(h), w = te(null), D = `${n}-label`, b = `${n}-content`, X = typeof d == "string";
  let O;
  if (d ? O = `${n}-error` : I && (O = `${n}-hint`), u && !i)
    throw new Error('The "withTags" props can only be used when the "multi" prop is present');
  const Y = () => {
    E(void 0);
  }, Z = () => {
    s || (S(), R.current.focus());
  }, L = (t) => {
    t.preventDefault(), !s && (t.nativeEvent.which === 3 || t.nativeEvent.button === 2 || E(ae.Mouse));
  }, T = (t, l = !0) => {
    i ? B(o.includes(t) ? o.filter((a) => a !== t) : [...o, t]) : (B(t), l && E(void 0));
  }, F = (t) => {
    B(
      o.includes(t[0]) ? o.filter((l, a, c) => c.indexOf(l) < 0, t) : [...o, ...t]
    );
  };
  let v, M = [];
  const j = (t, l) => {
    const a = `${n}-option-${t.props.value}`, c = i ? o.includes(t.props.value) : t.props.value === o;
    return c && (u ? M.push({ label: t.props.children, value: t.props.value }) : v = t.props.children), A(t, {
      id: _(a),
      onClick: () => T(t.props.value),
      selected: c,
      multi: i,
      isChild: l
    });
  }, V = k.toArray(N).map((t) => {
    if (t.type.displayName === "OptGroup") {
      const l = `${n}-option-${t.props.label}`, a = t.props.children.every((p) => o.includes(p.props.value)), c = !a && t.props.children.some((p) => o.includes(p.props.value));
      return A(t, {
        id: _(l),
        onClick: () => F(t.props.children.map((p) => p.props.value)),
        selected: a,
        indeterminate: c,
        multi: i,
        children: k.toArray(t.props.children).map((p) => j(p, !0)),
        value: t.props.label
      });
    }
    return j(t);
  });
  return /* @__PURE__ */ r.createElement(fe, { hint: I, error: d, id: n, required: x }, /* @__PURE__ */ r.createElement(g, { direction: "column", alignItems: "stretch", gap: m || I || X ? 1 : 0 }, m && /* @__PURE__ */ r.createElement(ue, { action: H }, m), /* @__PURE__ */ r.createElement(ie, { size: Q, hasError: Boolean(d), disabled: s, ref: w }, /* @__PURE__ */ r.createElement(
    ce,
    {
      ref: R,
      labelledBy: `${n} ${D} ${b}`,
      "aria-describedby": O,
      "aria-required": x,
      expanded: Boolean(h),
      onTrigger: E,
      id: n,
      hasError: Boolean(d),
      disabled: s,
      onMouseDown: L,
      value: i ? o.join(",") : o,
      ...U
    }
  ), /* @__PURE__ */ r.createElement(Be, { justifyContent: "space-between" }, /* @__PURE__ */ r.createElement(g, null, $ && /* @__PURE__ */ r.createElement(P, { paddingLeft: 3, "aria-hidden": !0 }, $), u && /* @__PURE__ */ r.createElement(me, { tags: M, onRemoveTag: T, disabled: s }), /* @__PURE__ */ r.createElement(P, { paddingLeft: 4, paddingRight: 4 }, u ? /* @__PURE__ */ r.createElement(r.Fragment, null, !o || o.length === 0 ? /* @__PURE__ */ r.createElement(q, { ellipsis: !0, id: b, textColor: "neutral600" }, y) : null, /* @__PURE__ */ r.createElement(z, { as: "span", id: b }, f ? f(o) : v || y, o.join(", "))) : /* @__PURE__ */ r.createElement(q, { ellipsis: !0, id: b, textColor: o ? "neutral800" : "neutral600" }, f ? f(o) : v || y, i && /* @__PURE__ */ r.createElement(z, { as: "span" }, o.join(", "))))), /* @__PURE__ */ r.createElement(g, null, (i && o && o.length || !i && o) && S && /* @__PURE__ */ r.createElement(
    le,
    {
      as: "button",
      type: "button",
      onClick: Z,
      "aria-label": C,
      "aria-disabled": s,
      title: C
    },
    /* @__PURE__ */ r.createElement(re, null)
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      paddingLeft: 3,
      "aria-hidden": !0,
      as: "button",
      type: "button",
      onMouseDown: L,
      tabIndex: -1,
      disabled: s,
      title: K
    },
    /* @__PURE__ */ r.createElement(oe, null)
  )))), /* @__PURE__ */ r.createElement(he, null), /* @__PURE__ */ r.createElement(Ee, null)), h && /* @__PURE__ */ r.createElement(
    ge,
    {
      source: w,
      spacing: 4,
      fullWidth: !0,
      intersectionId: `select-list-intersection-${n}`,
      onReachEnd: J
    },
    /* @__PURE__ */ r.createElement(
      de,
      {
        selectId: n,
        labelledBy: m ? D : void 0,
        onEscape: Y,
        expanded: h,
        onSelectItem: (t, l) => l ? F(t) : T(t, !1),
        multi: i
      },
      V
    )
  ));
};
G.defaultProps = {
  "aria-label": void 0,
  children: [],
  clearLabel: "Clear",
  customizeContent: void 0,
  disabled: !1,
  id: void 0,
  label: void 0,
  labelAction: void 0,
  multi: !1,
  onChange() {
  },
  onClear: void 0,
  onReachEnd: void 0,
  value: void 0,
  hint: void 0,
  error: void 0,
  placeholder: "Select...",
  required: !1,
  selectButtonTitle: "Carret Down Button",
  size: "M",
  startIcon: void 0,
  withTags: !1
};
G.propTypes = {
  "aria-label": e.string,
  children: e.oneOfType([e.arrayOf(e.node), e.node]),
  clearLabel: e.string,
  customizeContent: e.func,
  disabled: e.bool,
  error: e.oneOfType([e.string, e.bool]),
  hint: e.oneOfType([e.string, e.bool, e.node, e.arrayOf(e.node)]),
  id: e.oneOfType([e.string, e.number]),
  label: e.string,
  labelAction: e.element,
  multi: e.bool,
  onChange: e.func,
  onClear: e.func,
  onReachEnd: e.func,
  placeholder: e.string,
  required: e.bool,
  selectButtonTitle: e.string,
  size: e.oneOf(Object.keys(ye.input)),
  startIcon: e.element,
  value: e.oneOfType([
    e.arrayOf(e.oneOfType([e.string, e.number])),
    e.string,
    e.number
  ]),
  withTags: e.bool
};
export {
  G as Select
};
