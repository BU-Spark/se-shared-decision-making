import { jsx as r, jsxs as s } from "react/jsx-runtime";
import { forwardRef as c, useRef as u, useImperativeHandle as h } from "react";
import { Field as I } from "../Field/Field.js";
import { FieldLabel as x } from "../Field/FieldLabel.js";
import { FieldInput as F } from "../Field/FieldInput.js";
import { FieldHint as T } from "../Field/FieldHint.js";
import { FieldError as g } from "../Field/FieldError.js";
import "../Field/FieldContext.js";
import "../Field/FieldAction.js";
import { Flex as w } from "../Flex/Flex.js";
import { useId as R } from "../hooks/useId.js";
const b = c(({
  name: t,
  hint: n,
  error: m,
  label: e,
  labelAction: p,
  id: d,
  required: a,
  ...i
}, l) => {
  const f = R(d), o = u(null);
  if (!e && !i["aria-label"])
    throw new Error('The TextInput component needs a "label" or an "aria-label" props');
  return h(l, () => ({
    inputWrapperRef: o
  })), r("div", {
    ref: o,
    children: r(I, {
      name: t,
      hint: n,
      error: m,
      id: f,
      required: a,
      children: s(w, {
        direction: "column",
        alignItems: "stretch",
        gap: 1,
        children: [e && r(x, {
          action: p,
          children: e
        }), r(F, {
          ...i
        }), r(T, {}), r(g, {})]
      })
    })
  });
});
b.displayName = "TextInput";
export {
  b as TextInput
};
