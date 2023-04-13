import s, { forwardRef as m } from "react";
import f from "prop-types";
import p from "styled-components";
import "../Field/Field.js";
import "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import "react/jsx-runtime";
import { useField as $ } from "../Field/FieldContext.js";
import "../Typography/Typography.js";
import "../Field/FieldAction.js";
import { inputFocusStyle as b } from "../themes/utils.js";
const g = p.div`
  border: 1px solid ${({ theme: r, hasError: o }) => o ? r.colors.danger600 : r.colors.neutral200};
  border-radius: ${({ theme: r }) => r.borderRadius};

  padding-left: ${({ theme: r, hasLeftAction: o }) => o ? 0 : r.spaces[4]};
  padding-right: ${({ theme: r, hasRightAction: o }) => o ? 0 : r.spaces[4]};
  padding-top: ${({ theme: r }) => `${r.spaces[3]}`};
  padding-bottom: ${({ theme: r }) => `${r.spaces[3]}`};

  background: ${({ theme: r, disabled: o }) => o ? r.colors.neutral150 : r.colors.neutral0};
  ${b()}
`, y = p.textarea`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: ${14 / 16}rem;
  border: none;
  color: ${({ theme: r, disabled: o }) => o ? r.colors.neutral600 : r.colors.neutral800};
  resize: none;
  background: inherit;

  ::placeholder {
    color: ${({ theme: r }) => r.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`, i = m(({ disabled: r, ...o }, l) => {
  const { id: e, error: n, hint: d, name: c, required: u } = $();
  let t;
  n ? t = `${e}-error` : d && (t = `${e}-hint`);
  const a = Boolean(n);
  return /* @__PURE__ */ s.createElement(g, { hasError: a, disabled: r }, /* @__PURE__ */ s.createElement(
    y,
    {
      id: e,
      name: c,
      ref: l,
      "aria-describedby": t,
      "aria-invalid": a,
      disabled: r,
      hasError: a,
      "aria-required": u,
      ...o
    }
  ));
});
i.displayName = "TextareaInput";
i.defaultProps = {
  disabled: !1
};
i.propTypes = {
  disabled: f.bool
};
export {
  i as TextareaInput
};
