import e from "react";
import r from "prop-types";
import n from "styled-components";
import { Box as p } from "../Box/Box.js";
import { Flex as a } from "../Flex/Flex.js";
const d = n(p)`
  border-top: 1px solid ${({ theme: o }) => o.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`, t = ({ startAction: o, endAction: i }) => /* @__PURE__ */ e.createElement(d, { padding: 4 }, /* @__PURE__ */ e.createElement(a, { gap: 2 }, o, i));
t.displayName = "DialogFooter";
t.defaultProps = {
  endAction: void 0,
  startAction: void 0
};
t.propTypes = {
  endAction: r.node,
  startAction: r.node
};
export {
  t as DialogFooter
};
