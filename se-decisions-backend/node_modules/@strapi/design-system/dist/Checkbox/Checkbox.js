import r from "react";
import e from "prop-types";
import s from "styled-components";
import { BaseCheckbox as c } from "../BaseCheckbox/BaseCheckbox.js";
import { Box as f } from "../Box/Box.js";
import { Field as u } from "../Field/Field.js";
import "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import { FieldHint as b } from "../Field/FieldHint.js";
import { FieldError as x } from "../Field/FieldError.js";
import { useField as y } from "../Field/FieldContext.js";
import "../Field/FieldAction.js";
import { Flex as g } from "../Flex/Flex.js";
import { useId as h } from "../hooks/useId.js";
import { Typography as E } from "../Typography/Typography.js";
const T = s(E)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({ disabled: t }) => t ? "not-allowed" : "pointer"};
  }
`, k = (t) => {
  const { id: o } = y();
  return /* @__PURE__ */ r.createElement(c, { id: o, ...t });
}, a = ({ children: t, disabled: o, id: d, hint: l, error: m, ...p }) => {
  const i = h(d);
  let n;
  return m ? n = `${i}-error` : l && (n = `${i}-hint`), /* @__PURE__ */ r.createElement(u, { id: i, hint: l, error: m }, /* @__PURE__ */ r.createElement(g, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ r.createElement(T, { as: "label", textColor: "neutral800", disabled: o }, /* @__PURE__ */ r.createElement(k, { disabled: o, "aria-describedby": n, ...p }), /* @__PURE__ */ r.createElement(f, { paddingLeft: 2 }, t)), /* @__PURE__ */ r.createElement(b, null), /* @__PURE__ */ r.createElement(x, null)));
};
a.defaultProps = {
  disabled: !1,
  id: void 0,
  error: void 0,
  hint: void 0
};
a.propTypes = {
  children: e.node.isRequired,
  disabled: e.bool,
  error: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  id: e.oneOfType([e.string, e.number])
};
export {
  a as Checkbox
};
