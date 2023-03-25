import { jsx as i, jsxs as x } from "react/jsx-runtime";
import * as a from "react";
import { useFloating as w, offset as k, shift as y, flip as $, autoUpdate as v } from "@floating-ui/react-dom";
import c from "styled-components";
import { Box as d } from "../Box/Box.js";
import { useIntersection as P } from "../hooks/useIntersection.js";
import { Portal as S } from "../Portal/Portal.js";
const T = ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"], W = c(d)`
  box-shadow: ${({
  theme: t
}) => t.shadows.filterShadow};
  z-index: 4;
  border: 1px solid ${({
  theme: t
}) => t.colors.neutral150};
  background: ${({
  theme: t
}) => t.colors.neutral0};
`, E = ({
  source: t,
  children: e,
  spacing: o = 0,
  fullWidth: r = !1,
  placement: s = "bottom-start",
  centered: n = !1,
  ...l
}) => {
  const [p, u] = a.useState(void 0), {
    x: h,
    y: m,
    reference: f,
    floating: b,
    strategy: g
  } = w({
    strategy: "fixed",
    placement: n ? "bottom" : s,
    middleware: [k({
      mainAxis: o
    }), y(), $()],
    whileElementsMounted: v
  });
  return a.useLayoutEffect(() => {
    f(t.current);
  }, [t, f]), a.useLayoutEffect(() => {
    r && u(t.current.offsetWidth);
  }, [r, t]), i(W, {
    ref: b,
    style: {
      left: h,
      top: m,
      position: g,
      width: p || void 0
    },
    hasRadius: !0,
    background: "neutral0",
    padding: 1,
    ...l,
    children: e
  });
}, R = ({
  children: t,
  intersectionId: e,
  onReachEnd: o,
  ...r
}) => {
  const s = a.useRef(null);
  return P(s, o ?? (() => {
  }), {
    selectorToWatch: `#${e}`,
    skipWhen: !e || !o
  }), x(L, {
    ref: s,
    ...r,
    children: [t, e && o && i(d, {
      id: e,
      width: "100%",
      height: "1px"
    })]
  });
}, L = c(d)`
  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list
  max-height: ${3 * 5}rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({
  theme: t
}) => t.colors.neutral0};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({
  theme: t
}) => t.colors.neutral150};
    border-radius: ${({
  theme: t
}) => t.borderRadius};
    margin-right: 10px;
  }
`, B = ({
  children: t,
  source: e,
  spacing: o,
  fullWidth: r,
  placement: s,
  centered: n,
  ...l
}) => i(S, {
  children: i(E, {
    source: e,
    spacing: o,
    fullWidth: r,
    placement: s,
    centered: n,
    children: i(R, {
      ...l,
      children: t
    })
  })
});
export {
  E as Content,
  T as POPOVER_PLACEMENTS,
  B as Popover,
  R as Scrolling
};
