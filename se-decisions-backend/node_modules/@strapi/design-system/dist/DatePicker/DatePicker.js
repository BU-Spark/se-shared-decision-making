import { jsxs as R, jsx as r } from "react/jsx-runtime";
import { useState as y, useRef as W } from "react";
import { Cross as v, Calendar as A } from "@strapi/icons";
import P from "styled-components";
import { DatePickerWrapper as S } from "./components.js";
import { DatePickerCalendar as $ } from "./DatePickerCalendar.js";
import { formatDate as j } from "./utils/formatDate.js";
import "../Field/Field.js";
import "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import "../Field/FieldContext.js";
import "../Typography/Typography.js";
import { FieldAction as E } from "../Field/FieldAction.js";
import { getDefaultLocale as V } from "../helpers/getDefaultLocale.js";
import { TextInput as w } from "../TextInput/TextInput.js";
const X = ({
  ariaLabel: o,
  onClear: i,
  clearLabel: s = "Clear",
  initialDate: u,
  locale: d,
  maxDate: h,
  minDate: C,
  onChange: p,
  selectedDate: a,
  disabled: t = !1,
  ...D
}) => {
  const [c, n] = y(!1), e = W(null), m = d || V(), f = a ? j(a, m) : "", g = () => {
    t || n((l) => !l);
  }, x = () => {
    t || i && (i(), e.current.inputWrapperRef.current.focus());
  }, b = (l) => {
    p && p(l), n(!1);
  }, k = () => {
    n(!1);
  };
  return R(S, {
    bold: c,
    children: [r(w, {
      ref: e,
      onClick: g,
      onChange: () => {
      },
      value: f,
      startAction: r(A, {
        "aria-hidden": !0
      }),
      endAction: i && f ? r(E, {
        label: s,
        onClick: x,
        "aria-disabled": t || void 0,
        children: r(F, {})
      }) : void 0,
      "aria-autocomplete": "none",
      "aria-label": o,
      disabled: t,
      type: "text",
      ...D
    }), e.current && e.current.inputWrapperRef && c && r($, {
      selectedDate: a,
      initialDate: u,
      onChange: b,
      onEscape: k,
      locale: m,
      popoverSource: e.current.inputWrapperRef,
      minDate: C,
      maxDate: h
    })]
  });
}, F = P(v)`
  height: ${11 / 16}rem;
  width: ${11 / 16}rem;

  path {
    fill: ${({
  theme: o
}) => o.colors.neutral600};
  }
`;
export {
  X as DatePicker
};
