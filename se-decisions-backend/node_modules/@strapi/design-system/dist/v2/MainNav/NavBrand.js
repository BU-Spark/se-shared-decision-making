import e from "react";
import r from "prop-types";
import c from "styled-components";
import { useMainNav as g } from "./MainNavContext.js";
import { BaseLink as u } from "../../BaseLink/BaseLink.js";
import { Box as n } from "../../Box/Box.js";
import { Flex as f } from "../../Flex/Flex.js";
import { Typography as p } from "../../Typography/Typography.js";
import { VisuallyHidden as l } from "../../VisuallyHidden/VisuallyHidden.js";
const s = c.div`
  border-radius: ${({ theme: t }) => t.borderRadius};

  svg,
  img {
    height: ${({ condensed: t }) => t ? `${40 / 16}rem` : `${32 / 16}rem`};
    width: ${({ condensed: t }) => t ? `${40 / 16}rem` : `${32 / 16}rem`};
  }
`, E = c(u)`
  text-decoration: unset;
  color: inherit;
`, a = e.forwardRef(({ workplace: t, title: i, icon: o, ...d }, m) => g() ? /* @__PURE__ */ e.createElement(u, { ref: m, ...d }, /* @__PURE__ */ e.createElement(n, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4 }, /* @__PURE__ */ e.createElement(s, { condensed: !0 }, o, /* @__PURE__ */ e.createElement(l, null, /* @__PURE__ */ e.createElement("span", null, i), /* @__PURE__ */ e.createElement("span", null, t))))) : /* @__PURE__ */ e.createElement(E, { ref: m, ...d }, /* @__PURE__ */ e.createElement(n, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4 }, /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(s, { "aria-hidden": !0, tabIndex: -1 }, o), /* @__PURE__ */ e.createElement(n, { paddingLeft: 2 }, /* @__PURE__ */ e.createElement(p, { fontWeight: "bold", textColor: "neutral800", as: "span" }, i, /* @__PURE__ */ e.createElement(l, { as: "span" }, t)), /* @__PURE__ */ e.createElement(p, { variant: "pi", as: "p", textColor: "neutral600", "aria-hidden": !0 }, t))))));
a.displayName = "NavBrand";
a.defaultProps = {
  to: "/"
};
a.propTypes = {
  icon: r.node.isRequired,
  title: r.string.isRequired,
  to: r.string,
  workplace: r.string.isRequired
};
export {
  a as NavBrand
};
