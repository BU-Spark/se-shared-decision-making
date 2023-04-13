import e from "react";
import r from "prop-types";
import a from "styled-components";
import { BaseRadio as i } from "../BaseRadio/BaseRadio.js";
import { Box as m } from "../Box/Box.js";
import { Typography as p } from "../Typography/Typography.js";
const l = a(p)`
  display: flex;
  align-items: center;
`, n = ({ children: t, ...o }) => /* @__PURE__ */ e.createElement(l, { as: "label", textColor: "neutral800" }, /* @__PURE__ */ e.createElement(i, { ...o }), /* @__PURE__ */ e.createElement(m, { paddingLeft: 2 }, t));
n.propTypes = {
  children: r.node.isRequired,
  value: r.any.isRequired
};
export {
  n as Radio
};
