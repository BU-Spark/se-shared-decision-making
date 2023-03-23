import { jsx as s } from "react/jsx-runtime";
import i from "react";
import l from "styled-components";
const m = l.a`
  cursor: pointer;
`, p = i.forwardRef(({
  href: o,
  rel: a = "noreferrer noopener",
  target: f = "_self",
  disabled: e = !1,
  isExternal: r = !1,
  ...t
}, n) => s(m, {
  ref: n,
  target: r ? "_blank" : f,
  rel: r ? a : void 0,
  href: e ? "#" : o,
  "aria-disabled": e,
  ...t
}));
p.displayName = "BaseLink";
export {
  p as BaseLink
};
