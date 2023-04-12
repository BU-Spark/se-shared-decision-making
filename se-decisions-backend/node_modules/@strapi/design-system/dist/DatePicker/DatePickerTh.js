import { jsx as e, jsxs as i } from "react/jsx-runtime";
import t from "styled-components";
import { Flex as n } from "../Flex/Flex.js";
import "react";
import "../RawTable/RawTableContext.js";
import { RawTh as a } from "../RawTable/RawCell.js";
import "../Box/Box.js";
import { Typography as m } from "../Typography/Typography.js";
import { VisuallyHidden as p } from "../VisuallyHidden/VisuallyHidden.js";
const s = t(a)`
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;
  border-radius: ${({
  theme: r
}) => r.borderRadius};
  text-transform: capitalize;
`, l = t(n)`
  height: ${24 / 16}rem;
  width: ${32 / 16}rem;
`, y = ({
  children: r,
  ...o
}) => e(s, {
  ...o,
  children: i(l, {
    justifyContent: "center",
    children: [e(m, {
      variant: "pi",
      fontWeight: "bold",
      color: "neutral800",
      "aria-hidden": !0,
      children: r.substr(0, 2)
    }), e(p, {
      children: e("span", {
        children: r
      })
    })]
  })
});
export {
  y as DatePickerTh
};
