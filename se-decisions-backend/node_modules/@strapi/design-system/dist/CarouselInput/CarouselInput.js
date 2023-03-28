import r from "react";
import e from "prop-types";
import { Carousel as R } from "./Carousel.js";
import { Field as E } from "../Field/Field.js";
import { FieldLabel as y } from "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import { FieldHint as F } from "../Field/FieldHint.js";
import { FieldError as L } from "../Field/FieldError.js";
import "../Field/FieldContext.js";
import "../Field/FieldAction.js";
import { Flex as h } from "../Flex/Flex.js";
import { useId as x } from "../hooks/useId.js";
const t = ({
  actions: n,
  children: d,
  error: l,
  hint: s,
  label: i,
  labelAction: m,
  nextLabel: a,
  onNext: u,
  onPrevious: c,
  previousLabel: p,
  required: f,
  secondaryLabel: g,
  selectedSlide: q,
  id: b,
  ...v
}) => {
  const o = x(b);
  return /* @__PURE__ */ r.createElement(E, { hint: s, error: l, id: o, required: f }, /* @__PURE__ */ r.createElement(h, { direction: "column", alignItems: "stretch", gap: 1 }, i && /* @__PURE__ */ r.createElement(y, { action: m }, i), /* @__PURE__ */ r.createElement(
    R,
    {
      actions: n,
      label: i,
      nextLabel: a,
      onNext: u,
      onPrevious: c,
      previousLabel: p,
      secondaryLabel: g,
      selectedSlide: q,
      id: o,
      ...v
    },
    d
  ), /* @__PURE__ */ r.createElement(F, null), /* @__PURE__ */ r.createElement(L, null)));
};
t.defaultProps = {
  actions: void 0,
  error: void 0,
  hint: void 0,
  id: void 0,
  labelAction: void 0,
  required: !1,
  secondaryLabel: void 0
};
t.propTypes = {
  actions: e.node,
  children: e.node.isRequired,
  error: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  id: e.string,
  label: e.string.isRequired,
  labelAction: e.element,
  nextLabel: e.string.isRequired,
  onNext: e.func.isRequired,
  onPrevious: e.func.isRequired,
  previousLabel: e.string.isRequired,
  required: e.bool,
  secondaryLabel: e.string,
  selectedSlide: e.number.isRequired
};
export {
  t as CarouselInput
};
