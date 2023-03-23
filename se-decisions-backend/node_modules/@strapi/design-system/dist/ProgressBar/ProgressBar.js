import u from "react";
import e from "prop-types";
import m from "styled-components";
import { Box as l } from "../Box/Box.js";
const p = m(l)`
  &:before {
    background-color: ${({ theme: r }) => r.colors.neutral0};
    border-radius: ${({ theme: r }) => r.borderRadius};
    bottom: 0;
    content: '';
    position: absolute;
    top: 0;
    width: ${({ value: r }) => `${r}%`};
  }
`, t = ({ min: r, max: i, value: o, children: s, size: a, ...n }) => /* @__PURE__ */ u.createElement(
  p,
  {
    background: "neutral600",
    hasRadius: !0,
    "aria-label": s,
    "aria-valuemax": i,
    "aria-valuemin": r,
    "aria-valuenow": o,
    height: a === "S" ? 1 : 2,
    position: "relative",
    role: "progressbar",
    value: o,
    width: a === "S" ? "78px" : "102px",
    ...n
  }
);
t.defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  size: "M"
};
t.propTypes = {
  children: e.node.isRequired,
  max: e.number,
  min: e.number,
  size: e.oneOf(["S", "M"]),
  value: e.number
};
export {
  t as ProgressBar
};
