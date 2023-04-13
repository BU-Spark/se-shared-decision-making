import { jsx as i } from "react/jsx-runtime";
import p from "styled-components";
import "react";
import "../RawTable/RawTableContext.js";
import { RawTd as c } from "../RawTable/RawCell.js";
import "../Box/Box.js";
import { Typography as n } from "../Typography/Typography.js";
const d = p.button`
  border: none;
  background: ${({
  theme: r,
  $isSelected: o
}) => o ? r.colors.primary100 : r.colors.neutral0};
  height: ${32 / 16}rem;
  text-align: center;
  width: ${32 / 16}rem;
  border-radius: ${({
  theme: r
}) => r.borderRadius};

  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;

  &:hover {
    background: ${({
  theme: r
}) => r.colors.primary100};
  }

  &:hover > ${n} {
    color: ${({
  theme: r
}) => r.colors.primary600};
  }
`, y = ({
  children: r,
  outsideMonth: o = !1,
  onSelectDay: l,
  isSelected: e = !1,
  ...a
}) => {
  let t = "neutral900";
  return e ? t = "primary600" : o && (t = "neutral600"), i(c, {
    ...a,
    children: i(d, {
      tabIndex: -1,
      onClick: l,
      $isSelected: e,
      type: "button",
      children: i(n, {
        variant: "pi",
        textColor: t,
        fontWeight: e ? "bold" : void 0,
        children: r
      })
    })
  });
};
export {
  y as DatePickerTd
};
