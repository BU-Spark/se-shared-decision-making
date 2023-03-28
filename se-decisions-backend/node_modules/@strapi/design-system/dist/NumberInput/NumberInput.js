import t, { useRef as g } from "react";
import { NumberParser as S, NumberFormatter as T } from "@internationalized/number";
import { CarretDown as v } from "@strapi/icons";
import r from "prop-types";
import z from "styled-components";
import { Field as B } from "../Field/Field.js";
import { FieldLabel as U } from "../Field/FieldLabel.js";
import { FieldInput as _ } from "../Field/FieldInput.js";
import { FieldHint as j } from "../Field/FieldHint.js";
import { FieldError as H } from "../Field/FieldError.js";
import "../Field/FieldContext.js";
import "../Field/FieldAction.js";
import { Flex as M } from "../Flex/Flex.js";
import { getDefaultLocale as W } from "../helpers/getDefaultLocale.js";
import { KeyboardKeys as N } from "../helpers/keyboardKeys.js";
import { useControllableState as X } from "../hooks/useControllableState.js";
import { useId as Y } from "../hooks/useId.js";
import { Icon as y } from "../Icon/Icon.js";
import { sizes as G } from "../themes/sizes.js";
const h = z.button`
  display: flex;
  height: 1rem;
  align-items: ${({ reverse: n }) => n ? "flex-end" : "flex-start"};
  transform: translateY(${({ reverse: n }) => n ? "-2px" : "2px"});
  cursor: ${({ disabled: n }) => n ? "not-allowed" : void 0};
  svg {
    display: block;
    height: ${4 / 16}rem;
    transform: ${({ reverse: n }) => n ? "rotateX(180deg)" : void 0};
  }
`, J = "", u = t.forwardRef(
  ({
    size: n,
    startAction: w,
    name: E,
    hint: I,
    error: x,
    label: d,
    labelAction: A,
    locale: V,
    id: F,
    onValueChange: D,
    value: C,
    step: i,
    required: k,
    disabled: s,
    ...P
  }, R) => {
    const O = Y(F), p = V || W(), m = g(new S(p, { style: "decimal" })), c = g(new T(p, { maximumFractionDigits: 20 })), [a, $] = X({
      prop(e) {
        const o = String(C);
        return isNaN(o) || o !== e && e !== "" ? e : o;
      },
      defaultProp: J,
      onChange(e) {
        const o = m.current.parse(e);
        D(isNaN(o) ? void 0 : o);
      }
    }), l = (e) => {
      $(String(e));
    }, q = ({ target: { value: e } }) => {
      m.current.isValidPartialNumber(e) && l(e);
    }, f = () => {
      if (!a) {
        l(i);
        return;
      }
      const e = m.current.parse(a), o = isNaN(e) ? i : e + i;
      l(c.current.format(o));
    }, b = () => {
      if (!a) {
        l(-i);
        return;
      }
      const e = m.current.parse(a), o = isNaN(e) ? -i : e - i;
      l(c.current.format(o));
    }, K = (e) => {
      if (!s)
        switch (e.key) {
          case N.DOWN: {
            e.preventDefault(), b();
            break;
          }
          case N.UP: {
            e.preventDefault(), f();
            break;
          }
        }
    }, L = () => {
      if (a) {
        const e = m.current.parse(a), o = isNaN(e) ? "" : c.current.format(e);
        l(o);
      }
    };
    return /* @__PURE__ */ t.createElement(B, { name: E, hint: I, error: x, id: O, required: k }, /* @__PURE__ */ t.createElement(M, { direction: "column", alignItems: "stretch", gap: 1 }, d && /* @__PURE__ */ t.createElement(U, { action: A }, d), /* @__PURE__ */ t.createElement(
      _,
      {
        ref: R,
        startAction: w,
        disabled: s,
        type: "text",
        inputmode: "decimal",
        onChange: q,
        onKeyDown: K,
        onBlur: L,
        value: a,
        size: n,
        endAction: /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(
          h,
          {
            disabled: s,
            "aria-hidden": !0,
            reverse: !0,
            onClick: f,
            tabIndex: -1,
            type: "button",
            "data-testid": "ArrowUp"
          },
          /* @__PURE__ */ t.createElement(y, { as: v, color: "neutral500" })
        ), /* @__PURE__ */ t.createElement(
          h,
          {
            disabled: s,
            "aria-hidden": !0,
            onClick: b,
            tabIndex: -1,
            type: "button",
            "data-testid": "ArrowDown"
          },
          /* @__PURE__ */ t.createElement(y, { as: v, color: "neutral500" })
        )),
        ...P
      }
    ), /* @__PURE__ */ t.createElement(j, null), /* @__PURE__ */ t.createElement(H, null)));
  }
);
u.displayName = "NumberInput";
u.defaultProps = {
  "aria-label": void 0,
  disabled: !1,
  error: void 0,
  hint: void 0,
  id: void 0,
  label: void 0,
  labelAction: void 0,
  locale: void 0,
  required: !1,
  size: "M",
  startAction: void 0,
  step: 1,
  value: void 0
};
u.propTypes = {
  "aria-label": r.string,
  disabled: r.bool,
  error: r.string,
  hint: r.oneOfType([r.string, r.node, r.arrayOf(r.node)]),
  id: r.string,
  label: r.string,
  labelAction: r.element,
  locale: r.string,
  name: r.string.isRequired,
  onValueChange: r.func.isRequired,
  required: r.bool,
  size: r.oneOf(Object.keys(G.input)),
  startAction: r.element,
  step: r.number,
  value: r.number
};
export {
  u as NumberInput
};
