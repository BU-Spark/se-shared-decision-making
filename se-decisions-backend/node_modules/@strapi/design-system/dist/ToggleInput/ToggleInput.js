import r from "react";
import e from "prop-types";
import p from "styled-components";
import { Field as y } from "../Field/Field.js";
import { FieldLabel as T } from "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import { FieldHint as h } from "../Field/FieldHint.js";
import { FieldError as v } from "../Field/FieldError.js";
import "../Field/FieldContext.js";
import "../Field/FieldAction.js";
import { Flex as d } from "../Flex/Flex.js";
import { useId as F } from "../hooks/useId.js";
import { TextButton as I } from "../TextButton/TextButton.js";
import { sizes as k } from "../themes/sizes.js";
import { ToggleCheckbox as C } from "../ToggleCheckbox/ToggleCheckbox.js";
const O = p(y)`
  max-width: 320px;
`, z = p(I)`
  align-self: flex-end;
  margin-left: auto;
`, t = ({
  disabled: o,
  size: s,
  error: c,
  hint: f,
  label: i,
  name: u,
  labelAction: g,
  required: b,
  id: E,
  onClear: l,
  clearLabel: n,
  checked: m,
  ...x
}) => {
  const a = F(E);
  return /* @__PURE__ */ r.createElement(O, { name: u, hint: f, error: c, id: a, required: b }, /* @__PURE__ */ r.createElement(d, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ r.createElement(d, null, /* @__PURE__ */ r.createElement(T, { action: g }, i), n && l && m !== null && !o && /* @__PURE__ */ r.createElement(z, { onClick: l }, n)), /* @__PURE__ */ r.createElement(C, { id: a, size: s, checked: m, disabled: o, ...x }, i), /* @__PURE__ */ r.createElement(h, null), /* @__PURE__ */ r.createElement(v, null)));
};
t.displayName = "ToggleInput";
t.defaultProps = {
  checked: !1,
  clearLabel: void 0,
  disabled: !1,
  error: void 0,
  hint: void 0,
  id: void 0,
  label: "",
  labelAction: void 0,
  name: "",
  onClear: void 0,
  required: !1,
  size: "M"
};
t.propTypes = {
  checked: e.bool,
  clearLabel: e.string,
  disabled: e.bool,
  error: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  id: e.string,
  label: e.string,
  labelAction: e.node,
  name: e.string,
  onClear: e.func,
  required: e.bool,
  size: e.oneOf(Object.keys(k.input))
};
export {
  t as ToggleInput
};
