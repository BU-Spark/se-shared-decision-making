import e from "react";
import r from "prop-types";
import m from "styled-components";
import { useMainNav as s } from "./MainNavContext.js";
import { Avatar as c, Initials as f } from "../Avatar/Avatar.js";
import "../Avatar/AvatarGroup.js";
import { Box as n } from "../Box/Box.js";
import { Flex as u } from "../Flex/Flex.js";
import { Typography as g } from "../Typography/Typography.js";
import { VisuallyHidden as v } from "../VisuallyHidden/VisuallyHidden.js";
const y = m(n)`
  border-top: 1px solid ${({ theme: t }) => t.colors.neutral150};
`, o = e.forwardRef(({ src: t, children: i, initials: l, ...p }, d) => {
  const a = s();
  return /* @__PURE__ */ e.createElement(y, { paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, ...p }, /* @__PURE__ */ e.createElement(u, { as: "button", justifyContent: a ? "center" : void 0, ref: d }, t ? /* @__PURE__ */ e.createElement(c, { src: t, alt: "", "aria-hidden": !0 }) : /* @__PURE__ */ e.createElement(f, null, l), a ? /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement("span", null, i)) : /* @__PURE__ */ e.createElement(n, { width: `${130 / 16}rem`, paddingLeft: 2, as: "span" }, /* @__PURE__ */ e.createElement(g, { ellipsis: !0, textColor: "neutral600" }, i))));
});
o.displayName = "NavUser";
o.defaultProps = {
  src: void 0,
  initials: void 0
};
o.propTypes = {
  children: r.node.isRequired,
  initials: r.node,
  src: r.string
};
export {
  o as NavUser
};
