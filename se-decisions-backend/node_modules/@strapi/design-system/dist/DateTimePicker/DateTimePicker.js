import { jsx as r, jsxs as D } from "react/jsx-runtime";
import { DatePicker as P } from "../DatePicker/DatePicker.js";
import { Field as V } from "../Field/Field.js";
import { FieldLabel as j } from "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import { FieldHint as q } from "../Field/FieldHint.js";
import { FieldError as v } from "../Field/FieldError.js";
import "../Field/FieldContext.js";
import "../Field/FieldAction.js";
import { Flex as C } from "../Flex/Flex.js";
import { useControllableState as z } from "../hooks/useControllableState.js";
import { useId as B } from "../hooks/useId.js";
import { TimePicker as E } from "../TimePicker/TimePicker.js";
const te = ({
  ariaLabel: s,
  clearLabel: n = "clear",
  disabled: f = !1,
  error: d,
  hint: m,
  id: b,
  label: c,
  labelAction: I,
  onChange: T,
  onClear: g,
  name: $,
  required: p = !1,
  selectButtonTitle: w = "select",
  size: h = "M",
  step: y = 1,
  value: F,
  ...H
}) => {
  const M = A(F), [t, a] = z({
    prop: M,
    onChange: T
  }), i = t ? `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}` : void 0, k = (e) => {
    if (i) {
      const [o, u] = i.split(":");
      e.setHours(parseInt(o, 10)), e.setMinutes(parseInt(u, 10));
    }
    a(e);
  }, x = (e) => {
    const o = t ? new Date(t) : new Date(), [u, N] = e.split(":");
    o.setHours(parseInt(u, 10)), o.setMinutes(parseInt(N, 10)), a(o);
  }, S = () => {
    a(void 0), g && g();
  }, L = () => {
    let e = t ? new Date(t) : new Date();
    e.setHours(0), e.setMinutes(0), a(e);
  }, l = B(b);
  return r(V, {
    name: $,
    role: "group",
    id: l,
    "aria-labelledby": l,
    hint: m,
    error: d,
    required: p,
    children: D(C, {
      direction: "column",
      alignItems: "stretch",
      gap: 1,
      children: [r(j, {
        action: I,
        children: c
      }), D(C, {
        gap: 2,
        children: [r(P, {
          ariaLabel: c || s,
          selectedDate: t,
          selectedDateLabel: (e) => `Date picker, current is ${e}`,
          onChange: k,
          error: typeof d == "string",
          hint: typeof m == "string",
          required: p,
          size: h,
          onClear: S,
          clearLabel: `${n} date`,
          disabled: f,
          id: l,
          ...H
        }), r(E, {
          size: h,
          "aria-label": c || s,
          error: typeof d == "string",
          hint: typeof m == "string",
          value: i,
          onChange: x,
          onClear: i !== void 0 && i !== "0:0:0" ? L : void 0,
          clearLabel: `${n} time`,
          required: p,
          selectButtonTitle: w,
          disabled: f,
          step: y,
          id: l
        })]
      }), r(q, {}), r(v, {})]
    })
  });
}, A = (s) => {
  const n = Date.parse(s);
  if (!Number.isNaN(n))
    return new Date(n);
};
export {
  te as DateTimePicker
};
