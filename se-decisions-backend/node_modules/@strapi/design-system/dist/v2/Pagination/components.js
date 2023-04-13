import t from "react";
import { ChevronLeft as b, ChevronRight as y } from "@strapi/icons";
import d from "prop-types";
import s from "styled-components";
import { usePagination as c } from "./PaginationContext.js";
import { BaseLink as P } from "../../BaseLink/BaseLink.js";
import { buttonFocusStyle as E } from "../../themes/utils.js";
import { Typography as k } from "../../Typography/Typography.js";
import { VisuallyHidden as l } from "../../VisuallyHidden/VisuallyHidden.js";
const m = s(k)`
  line-height: revert;
`, w = {
  active: !0
}, p = s(P).withConfig({
  shouldForwardProp: (e, r) => !w[e] && r(e)
})`
  padding: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  box-shadow: ${({ active: e, theme: r }) => e ? r.shadows.filterShadow : void 0};
  text-decoration: none;
  display: flex;

  ${E}
`, L = s(p)`
  color: ${({ theme: e, active: r }) => r ? e.colors.primary700 : e.colors.neutral800};
  background: ${({ theme: e, active: r }) => r ? e.colors.neutral0 : void 0};

  &:hover {
    box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  }
`, u = s(p)`
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
`, $ = s(p)`
  color: ${({ theme: e }) => e.colors.neutral800};
`, h = t.forwardRef(({ children: e, ...r }, a) => {
  const { activePage: i } = c(), o = i === 1;
  return /* @__PURE__ */ t.createElement(u, { ref: a, "aria-disabled": o, tabIndex: o ? -1 : void 0, ...r }, /* @__PURE__ */ t.createElement(l, null, e), /* @__PURE__ */ t.createElement(b, { "aria-hidden": !0 }));
});
h.displayName = "PreviousLink";
const f = t.forwardRef(({ children: e, ...r }, a) => {
  const { activePage: i, pageCount: o } = c(), n = i === o;
  return /* @__PURE__ */ t.createElement(u, { ref: a, "aria-disabled": n, tabIndex: n ? -1 : void 0, ...r }, /* @__PURE__ */ t.createElement(l, null, e), /* @__PURE__ */ t.createElement(y, { "aria-hidden": !0 }));
});
f.displayName = "NextLink";
const v = t.forwardRef(({ number: e, children: r, ...a }, i) => {
  const { activePage: o } = c(), n = o === e;
  return /* @__PURE__ */ t.createElement(L, { ref: i, ...a, active: n }, /* @__PURE__ */ t.createElement(l, null, r), /* @__PURE__ */ t.createElement(m, { "aria-hidden": !0, variant: "pi", fontWeight: n ? "bold" : null }, e));
});
v.displayName = "PageLink";
const x = ({ children: e, ...r }) => /* @__PURE__ */ t.createElement($, { ...r, as: "div" }, /* @__PURE__ */ t.createElement(l, null, e), /* @__PURE__ */ t.createElement(m, { "aria-hidden": !0, variant: "pi" }, "\u2026"));
v.propTypes = {
  children: d.node.isRequired,
  number: d.number.isRequired
};
const g = {
  children: d.node.isRequired
};
f.propTypes = g;
h.propTypes = g;
x.propTypes = {
  children: d.node.isRequired
};
export {
  x as Dots,
  f as NextLink,
  v as PageLink,
  h as PreviousLink
};
