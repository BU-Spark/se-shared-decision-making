import n from "react";
import e from "prop-types";
import i from "styled-components";
import { Box as a } from "../Box/Box.js";
const p = i(a)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({ unsetMargin: r }) => r ? "margin: 0;" : ""}
`, t = ({ unsetMargin: r, ...o }) => /* @__PURE__ */ n.createElement(p, { ...o, as: "hr", unsetMargin: r });
t.defaultProps = {
  background: "neutral150",
  unsetMargin: !0
};
t.propTypes = {
  background: e.string,
  unsetMargin: e.bool
};
export {
  t as Divider
};
