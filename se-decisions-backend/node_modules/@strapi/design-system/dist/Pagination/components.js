import t from "react";
import { ChevronLeft as b, ChevronRight as y } from "@strapi/icons";
import n from "prop-types";
import { NavLink as P } from "react-router-dom";
import s from "styled-components";
import { usePagination as c } from "./PaginationContext.js";
import { buttonFocusStyle as E } from "../themes/utils.js";
import { Typography as k } from "../Typography/Typography.js";
import { VisuallyHidden as l } from "../VisuallyHidden/VisuallyHidden.js";
const u = s(k)`
  line-height: revert;
`, L = {
  active: !0
}, p = s(P).withConfig({
  shouldForwardProp: (e, r) => !L[e] && r(e)
})`
  padding: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  box-shadow: ${({ active: e, theme: r }) => e ? r.shadows.filterShadow : void 0};
  text-decoration: none;
  display: flex;

  ${E}
`, $ = s(p)`
  color: ${({ theme: e, active: r }) => r ? e.colors.primary700 : e.colors.neutral800};
  background: ${({ theme: e, active: r }) => r ? e.colors.neutral0 : void 0};

  &:hover {
    box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  }
`, m = s(p)`
  font-size: 0.7rem;
  svg path {
    fill: ${(e) => e["aria-disabled"] ? e.theme.colors.neutral300 : e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${(e) => e["aria-disabled"] ? e.theme.colors.neutral300 : e.theme.colors.neutral700};
    }
  }

  ${(e) => e["aria-disabled"] ? `
  pointer-events: none;
    ` : void 0}
`, x = s(p)`
  color: ${({ theme: e }) => e.colors.neutral800};
`, h = ({ children: e, to: r, ...a }) => {
  const { activePage: i } = c(), o = i === 1;
  return /* @__PURE__ */ t.createElement(
    m,
    {
      to: o ? "#" : r,
      "aria-disabled": o,
      tabIndex: o ? -1 : void 0,
      ...a
    },
    /* @__PURE__ */ t.createElement(l, null, e),
    /* @__PURE__ */ t.createElement(b, { "aria-hidden": !0 })
  );
};
h.displayName = "PreviousLink";
const v = ({ children: e, to: r, ...a }) => {
  const { activePage: i, pageCount: o } = c(), d = i === o;
  return /* @__PURE__ */ t.createElement(
    m,
    {
      to: d ? "#" : r,
      "aria-disabled": d,
      tabIndex: d ? -1 : void 0,
      ...a
    },
    /* @__PURE__ */ t.createElement(l, null, e),
    /* @__PURE__ */ t.createElement(y, { "aria-hidden": !0 })
  );
};
v.displayName = "NextLink";
const f = ({ number: e, children: r, ...a }) => {
  const { activePage: i } = c(), o = i === e;
  return /* @__PURE__ */ t.createElement($, { ...a, active: o }, /* @__PURE__ */ t.createElement(l, null, r), /* @__PURE__ */ t.createElement(u, { "aria-hidden": !0, variant: "pi", fontWeight: o ? "bold" : null }, e));
};
f.displayName = "PageLink";
const w = ({ children: e, ...r }) => /* @__PURE__ */ t.createElement(x, { ...r, as: "div" }, /* @__PURE__ */ t.createElement(l, null, e), /* @__PURE__ */ t.createElement(u, { "aria-hidden": !0, variant: "pi" }, "\u2026"));
f.propTypes = {
  children: n.node.isRequired,
  number: n.number.isRequired
};
const g = {
  children: n.node.isRequired,
  to: n.string.isRequired
};
v.propTypes = g;
h.propTypes = g;
w.propTypes = {
  children: n.node.isRequired
};
export {
  w as Dots,
  v as NextLink,
  f as PageLink,
  h as PreviousLink
};
