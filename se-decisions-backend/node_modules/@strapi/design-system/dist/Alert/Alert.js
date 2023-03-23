import { jsx as r, jsxs as a } from "react/jsx-runtime";
import { Cross as f, CheckCircle as m, ExclamationMarkCircle as u, Information as x } from "@strapi/icons";
import d from "styled-components";
import { handleBorderColor as C, handleBackgroundColor as $, handleIconColor as l } from "./utils.js";
import { Box as t } from "../Box/Box.js";
import { Flex as b } from "../Flex/Flex.js";
import { buttonFocusStyle as B } from "../themes/utils.js";
import { Typography as s } from "../Typography/Typography.js";
const w = d(t)`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`, k = d(t)`
  border: 1px solid ${C};
  background: ${$};
  box-shadow: ${({
  theme: o
}) => o.shadows.filterShadow};
`, y = d.button`
  border: none;
  background: transparent;
  font-size: ${12 / 16}rem;
  svg path {
    fill: ${({
  theme: o
}) => o.colors.neutral700};
  }
  margin-top: ${({
  theme: o
}) => o.spaces[1]};
  ${B};
`, A = d(t)`
  font-size: ${20 / 16}rem;
  svg path {
    fill: ${l};
  }
`, I = ({
  variant: o,
  ...e
}) => o === "success" ? r(m, {
  ...e
}) : o === "danger" || o === "warning" ? r(u, {
  ...e
}) : r(x, {
  ...e
}), R = d(t)`
  // Checked with the designers, validated
  padding-top: 1px;

  & a > span {
    color: ${l};

    svg path {
      fill: ${l};
    }
  }
`, L = ({
  title: o,
  children: e,
  variant: n = "default",
  onClose: p,
  closeLabel: c,
  titleAs: h = "p",
  action: i,
  ...g
}) => r(k, {
  hasRadius: !0,
  paddingLeft: 5,
  paddingRight: 6,
  paddingTop: 5,
  variant: n,
  ...g,
  children: a(b, {
    alignItems: "flex-start",
    children: [r(A, {
      paddingRight: 3,
      variant: n,
      children: r(I, {
        variant: n,
        "aria-hidden": !0
      })
    }), a(w, {
      role: n === "danger" ? "alert" : "status",
      children: [r(t, {
        paddingBottom: 2,
        paddingRight: 1,
        children: r(s, {
          fontWeight: "bold",
          textColor: "neutral800",
          as: h,
          children: o
        })
      }), r(t, {
        paddingBottom: i ? 2 : 5,
        paddingRight: 2,
        children: r(s, {
          as: "p",
          textColor: "neutral800",
          children: e
        })
      }), i && r(R, {
        paddingBottom: 5,
        variant: n,
        children: i
      })]
    }), r(y, {
      onClick: p,
      "aria-label": c,
      children: r(f, {
        "aria-hidden": !0
      })
    })]
  })
});
export {
  L as Alert
};
