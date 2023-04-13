import e from "react";
import r from "prop-types";
import { NavLink as i } from "react-router-dom";
import s from "styled-components";
import { useMainNav as u } from "./MainNavContext.js";
import { Box as a } from "../Box/Box.js";
import { Flex as g } from "../Flex/Flex.js";
import { Typography as m } from "../Typography/Typography.js";
import { VisuallyHidden as p } from "../VisuallyHidden/VisuallyHidden.js";
const l = s.div`
  svg,
  img {
    border-radius: ${({ theme: t }) => t.borderRadius};
    object-fit: contain;
    height: ${({ condensed: t }) => t ? `${40 / 16}rem` : `${32 / 16}rem`};
    width: ${({ condensed: t }) => t ? `${40 / 16}rem` : `${32 / 16}rem`};
  }
`, f = s(i)`
  text-decoration: unset;
  color: inherit;
`, c = ({ workplace: t, title: o, icon: d, to: n }) => u() ? /* @__PURE__ */ e.createElement(a, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4 }, /* @__PURE__ */ e.createElement(l, { condensed: !0 }, /* @__PURE__ */ e.createElement(i, { to: n }, d, /* @__PURE__ */ e.createElement(p, null, /* @__PURE__ */ e.createElement("span", null, o), /* @__PURE__ */ e.createElement("span", null, t))))) : /* @__PURE__ */ e.createElement(a, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4 }, /* @__PURE__ */ e.createElement(g, null, /* @__PURE__ */ e.createElement(l, { as: i, to: n, "aria-hidden": !0, tabIndex: -1 }, d), /* @__PURE__ */ e.createElement(a, { paddingLeft: 2 }, /* @__PURE__ */ e.createElement(m, { fontWeight: "bold", textColor: "neutral800", as: "span" }, /* @__PURE__ */ e.createElement(f, { to: n }, o, /* @__PURE__ */ e.createElement(p, { as: "span" }, t))), /* @__PURE__ */ e.createElement(m, { variant: "pi", as: "p", textColor: "neutral600", "aria-hidden": !0 }, t))));
c.defaultProps = {
  to: "/"
};
c.propTypes = {
  icon: r.node.isRequired,
  title: r.string.isRequired,
  to: r.string,
  workplace: r.string.isRequired
};
export {
  c as NavBrand
};
