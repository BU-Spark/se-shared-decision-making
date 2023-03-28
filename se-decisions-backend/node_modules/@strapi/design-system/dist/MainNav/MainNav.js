import o from "react";
import n from "prop-types";
import a from "styled-components";
import { MainNavContext as i } from "./MainNavContext.js";
import { Flex as m } from "../Flex/Flex.js";
const p = a(m)`
  width: ${({ condensed: e }) => e ? "max-content" : `${224 / 16}rem`};
  border-right: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, r = ({ condensed: e, ...t }) => /* @__PURE__ */ o.createElement(i.Provider, { value: e }, /* @__PURE__ */ o.createElement(
  p,
  {
    alignItems: "normal",
    as: "nav",
    background: "neutral0",
    condensed: e,
    direction: "column",
    height: "100vh",
    position: "sticky",
    top: 0,
    zIndex: 2,
    ...t
  }
));
r.defaultProps = {
  condensed: !1
};
r.propTypes = {
  condensed: n.bool
};
export {
  r as MainNav
};
