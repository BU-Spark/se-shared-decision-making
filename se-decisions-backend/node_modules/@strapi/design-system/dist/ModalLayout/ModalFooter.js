import o from "react";
import t from "prop-types";
import n from "styled-components";
import { Box as i } from "../Box/Box.js";
import { Flex as d } from "../Flex/Flex.js";
const s = n(i)`
  border-radius: 0 0 ${({ theme: e }) => e.borderRadius} ${({ theme: e }) => e.borderRadius};
  border-top: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, r = n(d)`
  & > * + * {
    margin-left: ${({ theme: e }) => e.spaces[2]};
  }
`, a = ({ startActions: e, endActions: p }) => /* @__PURE__ */ o.createElement(s, { paddingTop: 4, paddingBottom: 4, paddingLeft: 5, paddingRight: 5, background: "neutral100" }, /* @__PURE__ */ o.createElement(d, { justifyContent: "space-between" }, /* @__PURE__ */ o.createElement(r, null, e), /* @__PURE__ */ o.createElement(r, null, p)));
a.defaultProps = {
  endActions: void 0,
  startActions: void 0
};
a.propTypes = {
  endActions: t.node,
  startActions: t.node
};
export {
  a as ModalFooter
};
