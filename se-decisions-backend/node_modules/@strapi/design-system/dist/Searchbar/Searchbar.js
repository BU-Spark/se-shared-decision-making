import r, { forwardRef as y, useRef as $ } from "react";
import { Search as S, Cross as v } from "@strapi/icons";
import t from "prop-types";
import o from "styled-components";
import { Field as C } from "../Field/Field.js";
import { FieldLabel as F } from "../Field/FieldLabel.js";
import { InputWrapper as a, FieldInput as w } from "../Field/FieldInput.js";
import "react/jsx-runtime";
import "../Field/FieldContext.js";
import "../Typography/Typography.js";
import { FieldAction as z } from "../Field/FieldAction.js";
import { Flex as s } from "../Flex/Flex.js";
import { sizes as q } from "../themes/sizes.js";
import { inputFocusStyle as x } from "../themes/utils.js";
import { VisuallyHidden as I } from "../VisuallyHidden/VisuallyHidden.js";
const W = o(s)`
  font-size: 0.5rem;
  svg path {
    fill: ${({ theme: e }) => e.colors.neutral400};
  }
`, m = o(s)`
  font-size: 0.8rem;

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral800};
  }
`, A = o.div`
  border-radius: ${({ theme: e }) => e.borderRadius};
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};

  &:focus-within {
    ${m} {
      svg path {
        fill: ${({ theme: e }) => e.colors.primary600};
      }
    }
  }

  ${a} {
    border: 1px solid transparent;
  }

  ${x(a)}
`, l = y(({ name: e, size: p, children: c, value: i, onClear: u, clearLabel: d, ...f }, h) => {
  const n = $(null), b = i.length > 0, E = (g) => {
    u(g), n.current.focus();
  }, R = h || n;
  return /* @__PURE__ */ r.createElement(A, null, /* @__PURE__ */ r.createElement(C, { name: e }, /* @__PURE__ */ r.createElement(I, null, /* @__PURE__ */ r.createElement(F, null, c)), /* @__PURE__ */ r.createElement(
    w,
    {
      ref: R,
      value: i,
      startAction: /* @__PURE__ */ r.createElement(m, null, /* @__PURE__ */ r.createElement(S, { "aria-hidden": !0 })),
      size: p,
      endAction: b ? /* @__PURE__ */ r.createElement(z, { label: d, onClick: E }, /* @__PURE__ */ r.createElement(W, null, /* @__PURE__ */ r.createElement(v, null))) : void 0,
      ...f
    }
  )));
});
l.displayName = "Searchbar";
l.defaultProps = {
  value: "",
  size: "M"
};
l.propTypes = {
  children: t.node.isRequired,
  clearLabel: t.string.isRequired,
  name: t.string.isRequired,
  onClear: t.func.isRequired,
  size: t.oneOf(Object.keys(q.input)),
  value: t.string
};
export {
  l as Searchbar
};
