import r from "react";
import e from "prop-types";
import u from "styled-components";
import { TextareaInput as g } from "./TextareaInput.js";
import { Field as v } from "../Field/Field.js";
import { FieldLabel as x } from "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import { FieldHint as E } from "../Field/FieldHint.js";
import { FieldError as T } from "../Field/FieldError.js";
import "../Field/FieldContext.js";
import "../Field/FieldAction.js";
import { Flex as a } from "../Flex/Flex.js";
import { useId as b } from "../hooks/useId.js";
const y = u.div`
  & textarea {
    // TODO: remove when we'll have fonts in the theme
    height: ${80 / 16}rem;
    line-height: ${20 / 16}rem;
  }

  & textarea::placeholder {
    font-weight: 400;
    font-size: ${14 / 16}rem;
    line-height: 1.43;
    color: ${({ theme: t }) => t.colors.neutral500};
    opacity: 1;
  }
`, i = r.forwardRef(
  ({ name: t, hint: l, error: n, label: o, children: m, labelAction: d, id: p, required: c, ...s }, f) => {
    const h = b(p);
    return /* @__PURE__ */ r.createElement(y, null, /* @__PURE__ */ r.createElement(v, { name: t, hint: l, error: n, id: h, required: c }, /* @__PURE__ */ r.createElement(a, { direction: "column", alignItems: "stretch", gap: 1 }, o && /* @__PURE__ */ r.createElement(a, null, /* @__PURE__ */ r.createElement(x, { action: d }, o)), /* @__PURE__ */ r.createElement(g, { ref: f, as: "textarea", value: m, ...s }), /* @__PURE__ */ r.createElement(E, null), /* @__PURE__ */ r.createElement(T, null))));
  }
);
i.displayName = "Textarea";
i.defaultProps = {
  "aria-label": void 0,
  label: void 0,
  labelAction: void 0,
  error: void 0,
  hint: void 0,
  id: void 0,
  children: "",
  required: !1
};
i.propTypes = {
  "aria-label": e.string,
  children: e.string,
  error: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  id: e.string,
  label: e.string,
  labelAction: e.element,
  name: e.string.isRequired,
  required: e.bool
};
export {
  i as Textarea
};
