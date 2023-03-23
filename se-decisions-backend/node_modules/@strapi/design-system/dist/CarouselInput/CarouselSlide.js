import s from "react";
import r from "prop-types";
import p from "styled-components";
import { Flex as a } from "../Flex/Flex.js";
const d = p(a)`
  display: ${({ selected: e }) => e ? "flex" : "none"};
`, o = ({ label: e, children: l, selected: t, ...i }) => /* @__PURE__ */ s.createElement(
  d,
  {
    selected: t,
    role: "group",
    "aria-roledescription": "slide",
    "aria-label": e,
    justifyContent: "center",
    height: "124px",
    ...i
  },
  l
);
o.defaultProps = {
  selected: !1
};
o.propTypes = {
  children: r.node.isRequired,
  label: r.string.isRequired,
  selected: r.bool
};
export {
  o as CarouselSlide
};
