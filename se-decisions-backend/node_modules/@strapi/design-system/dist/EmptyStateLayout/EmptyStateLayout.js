import e from "react";
import t from "prop-types";
import r from "styled-components";
import { Box as o } from "../Box/Box.js";
import { Typography as s } from "../Typography/Typography.js";
const l = r(o)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`, c = r(o)`
  svg {
    height: ${88 / 16}rem;
  }
`, a = ({ icon: n, content: i, action: p, hasRadius: d, shadow: m }) => /* @__PURE__ */ e.createElement(l, { padding: 11, background: "neutral0", hasRadius: d, shadow: m }, /* @__PURE__ */ e.createElement(c, { paddingBottom: 6, "aria-hidden": !0 }, n), /* @__PURE__ */ e.createElement(o, { paddingBottom: 4 }, /* @__PURE__ */ e.createElement(s, { variant: "delta", as: "p", textColor: "neutral600" }, i)), p);
a.defaultProps = {
  action: void 0,
  hasRadius: !0,
  shadow: "tableShadow"
};
a.propTypes = {
  action: t.node,
  content: t.string.isRequired,
  hasRadius: t.bool,
  icon: t.node.isRequired,
  shadow: t.string
};
export {
  a as EmptyStateLayout
};
