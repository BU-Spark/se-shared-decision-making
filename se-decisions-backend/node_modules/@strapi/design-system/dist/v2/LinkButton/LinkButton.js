import { jsxs as c, jsx as r } from "react/jsx-runtime";
import h from "react";
import y from "styled-components";
import { BaseButtonWrapper as b } from "../../BaseButton/BaseButton.js";
import { BaseLink as d } from "../../BaseLink/BaseLink.js";
import { getDisabledStyle as p, getHoverStyle as v, getActiveStyle as x, getVariantStyle as S } from "../../Button/utils.js";
import { Flex as l } from "../../Flex/Flex.js";
import { Typography as B } from "../../Typography/Typography.js";
const k = y(b)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${p}
    &:active {
      ${p}
    }
  }

  &:hover {
    ${v}
  }

  &:active {
    ${x}
  }

  ${S}
`, L = h.forwardRef(({
  variant: m = "default",
  startIcon: e,
  endIcon: i,
  disabled: o = !1,
  children: u,
  size: t = "S",
  as: f = d,
  ...s
}, g) => {
  const a = t === "S" ? 2 : "10px", n = 4;
  return c(k, {
    ref: g,
    "aria-disabled": o,
    size: t,
    variant: m,
    background: "buttonPrimary600",
    borderColor: "buttonPrimary600",
    hasRadius: !0,
    gap: 2,
    inline: !0,
    paddingBottom: a,
    paddingLeft: n,
    paddingRight: n,
    paddingTop: a,
    pointerEvents: o ? "none" : void 0,
    ...s,
    as: f || d,
    children: [e && r(l, {
      "aria-hidden": !0,
      children: e
    }), r(B, {
      variant: t === "S" ? "pi" : void 0,
      fontWeight: "bold",
      textColor: "buttonNeutral0",
      children: u
    }), i && r(l, {
      "aria-hidden": !0,
      children: i
    })]
  });
});
L.displayName = "LinkButton";
export {
  L as LinkButton
};
