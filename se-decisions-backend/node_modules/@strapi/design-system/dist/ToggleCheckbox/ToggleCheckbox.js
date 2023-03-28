import t from "react";
import n from "prop-types";
import l from "styled-components";
import { Box as E } from "../Box/Box.js";
import "../Field/Field.js";
import "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import "react/jsx-runtime";
import { useField as T } from "../Field/FieldContext.js";
import { Typography as c } from "../Typography/Typography.js";
import "../Field/FieldAction.js";
import { Flex as L } from "../Flex/Flex.js";
import { sizes as q } from "../themes/sizes.js";
import { inputFocusStyle as z } from "../themes/utils.js";
import { VisuallyHidden as W } from "../VisuallyHidden/VisuallyHidden.js";
const S = l.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`, j = l(E)`
  cursor: ${({ disabled: e }) => e ? "not-allowed" : void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${z()}
`, m = l(L).attrs({
  hasRadius: !0
})`
  background-color: ${({ theme: e, checked: a, disabled: i }) => a ? i ? e.colors.neutral200 : e.colors.neutral0 : "transparent"};
  border: 1px solid
    ${({ theme: e, checked: a, disabled: i }) => a && a !== null ? i ? e.colors.neutral300 : e.colors.neutral200 : i ? e.colors.neutral150 : e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
  padding-bottom: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
`, B = l.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`, s = t.forwardRef(
  ({ size: e, onLabel: a, offLabel: i, children: g, checked: r, disabled: o, onChange: h, ...b }, x) => {
    const { error: y, hint: C, id: d, name: w, required: v } = T(), f = "neutral600";
    let $ = !r && r !== null ? "danger700" : f, k = r ? "primary600" : f;
    const R = (u) => {
      o || h(u);
    };
    let p;
    return y ? p = `${d}-error` : C && (p = `${d}-hint`), /* @__PURE__ */ t.createElement(S, null, /* @__PURE__ */ t.createElement(W, null, g), /* @__PURE__ */ t.createElement(
      j,
      {
        hasRadius: !0,
        disabled: o,
        padding: 1,
        display: "flex",
        background: o ? "neutral150" : "neutral100",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "neutral200"
      },
      /* @__PURE__ */ t.createElement(
        m,
        {
          size: e,
          paddingLeft: 3,
          paddingRight: 3,
          justifyContent: "center",
          alignItems: "center",
          "aria-hidden": !0,
          checked: r === null ? !1 : !r,
          disabled: o
        },
        /* @__PURE__ */ t.createElement(
          c,
          {
            variant: "pi",
            fontWeight: "bold",
            textTransform: "uppercase",
            textColor: o ? "neutral700" : $
          },
          i
        )
      ),
      /* @__PURE__ */ t.createElement(
        m,
        {
          size: e,
          paddingLeft: 3,
          paddingRight: 3,
          justifyContent: "center",
          alignItems: "center",
          "aria-hidden": !0,
          checked: r === null ? !1 : r,
          disabled: o
        },
        /* @__PURE__ */ t.createElement(
          c,
          {
            variant: "pi",
            fontWeight: "bold",
            textTransform: "uppercase",
            textColor: o ? "neutral700" : k
          },
          a
        )
      ),
      /* @__PURE__ */ t.createElement(
        B,
        {
          type: "checkbox",
          "aria-disabled": o,
          "aria-describedby": p,
          onChange: (u) => R(u),
          name: w,
          ref: x,
          "aria-required": v,
          ...b,
          checked: !(r === null || !r)
        }
      )
    ));
  }
);
s.displayName = "ToggleCheckbox";
s.defaultProps = {
  disabled: !1,
  checked: !1,
  onChange: void 0,
  size: "M"
};
s.propTypes = {
  checked: n.bool,
  children: n.string.isRequired,
  disabled: n.bool,
  offLabel: n.string.isRequired,
  onChange: n.func,
  onLabel: n.string.isRequired,
  size: n.oneOf(Object.keys(q.input))
};
export {
  s as ToggleCheckbox
};
