import { jsxs as h, jsx as t } from "react/jsx-runtime";
import b from "react";
import { Loader as y } from "@strapi/icons";
import s, { keyframes as v } from "styled-components";
import { DEFAULT as B, BUTTON_SIZES as S } from "./constants.js";
import { getDisabledStyle as l, getHoverStyle as $, getActiveStyle as x, getVariantStyle as C } from "./utils.js";
import { BaseButton as k } from "../BaseButton/BaseButton.js";
import { Box as L } from "../Box/Box.js";
import { Flex as T } from "../Flex/Flex.js";
import { Typography as j } from "../Typography/Typography.js";
const w = v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, D = s.div`
  animation: ${w} 2s infinite linear;
  will-change: transform;
`, N = s(k)`
  height: ${({
  theme: i,
  size: e
}) => i.sizes.button[e]};

  &[aria-disabled='true'] {
    ${l}

    &:active {
      ${l}
    }
  }

  &:hover {
    ${$}
  }

  &:active {
    ${x}
  }

  ${C}
`, R = b.forwardRef(({
  variant: i = B,
  startIcon: e,
  endIcon: n,
  disabled: f = !1,
  children: p,
  onClick: d,
  size: m = S[0],
  loading: o = !1,
  fullWidth: r = !1,
  ...c
}, u) => {
  const a = f || o;
  return h(N, {
    ref: u,
    "aria-disabled": a,
    disabled: a,
    size: m,
    variant: i,
    onClick: (g) => {
      !a && d && d(g);
    },
    fullWidth: r,
    alignItems: "center",
    background: "buttonPrimary600",
    borderColor: "buttonPrimary600",
    gap: 2,
    inline: r,
    justifyContent: r ? "center" : void 0,
    paddingLeft: 4,
    paddingRight: 4,
    width: r ? "100%" : void 0,
    ...c,
    children: [(e || o) && t(L, {
      "aria-hidden": !0,
      children: o ? t(D, {
        children: t(y, {})
      }) : e
    }), t(j, {
      variant: m === "S" ? "pi" : void 0,
      fontWeight: "bold",
      lineHeight: 0,
      textColor: "buttonNeutral0",
      children: p
    }), n && t(T, {
      "aria-hidden": !0,
      children: n
    })]
  });
});
R.displayName = "Button";
export {
  R as Button,
  N as ButtonWrapper
};
