import e from "react";
import t from "prop-types";
import r from "styled-components";
import { Box as n } from "../Box/Box.js";
const p = r(n)`
  text-decoration: none;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: ${({ theme: o }) => o.spaces[3]};
    top: ${({ theme: o }) => o.spaces[3]};
  }
`, a = ({ children: o }) => /* @__PURE__ */ e.createElement(
  p,
  {
    as: "a",
    href: "#main-content",
    background: "primary600",
    color: "neutral0",
    padding: 3,
    position: "absolute",
    hasRadius: !0
  },
  o
);
a.propTypes = {
  children: t.node.isRequired
};
export {
  a as SkipToContent
};
