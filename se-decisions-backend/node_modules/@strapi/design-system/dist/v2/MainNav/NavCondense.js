import t from "react";
import { ChevronRight as n, ChevronLeft as i } from "@strapi/icons";
import s from "prop-types";
import a from "styled-components";
import { useMainNav as d } from "./MainNavContext.js";
import { Icon as m } from "../../Icon/Icon.js";
import { VisuallyHidden as l } from "../../VisuallyHidden/VisuallyHidden.js";
const p = a.button`
  background: ${({ theme: e }) => e.colors.neutral0};
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
  border-radius: ${({ theme: e }) => e.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${(9 + 4) / 16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({ theme: e, condensed: r }) => r ? 0 : e.spaces[5]};
  transform: ${({ condensed: e }) => e ? "translateX(50%)" : void 0};
  z-index: 2;
  width: ${18 / 16}rem;
  height: ${25 / 16}rem;

  svg {
    width: ${6 / 16}rem;
    height: ${9 / 16}rem;
  }
`, c = ({ children: e, ...r }) => {
  const o = d();
  return /* @__PURE__ */ t.createElement(p, { as: "button", condensed: o, ...r }, /* @__PURE__ */ t.createElement(m, { as: o ? n : i, "aria-hidden": !0, color: "neutral600" }), /* @__PURE__ */ t.createElement(l, null, e));
};
c.propTypes = {
  children: s.string.isRequired
};
export {
  c as NavCondense
};
