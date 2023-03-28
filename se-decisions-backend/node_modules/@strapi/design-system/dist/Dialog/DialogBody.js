import o from "react";
import i from "prop-types";
import n from "styled-components";
import { Box as d } from "../Box/Box.js";
import { Flex as p } from "../Flex/Flex.js";
const a = n(d)`
  svg {
    width: ${({ theme: e }) => e.spaces[6]};
    height: ${({ theme: e }) => e.spaces[6]};

    path {
      fill: ${({ theme: e }) => e.colors.danger600};
    }
  }
`, t = ({ children: e, icon: r }) => /* @__PURE__ */ o.createElement(d, { paddingTop: 8, paddingBottom: 8, paddingLeft: 6, paddingRight: 6 }, r && /* @__PURE__ */ o.createElement(a, { paddingBottom: 2 }, /* @__PURE__ */ o.createElement(p, { justifyContent: "center" }, r)), e);
t.displayName = "DialogBody";
t.defaultProps = {
  icon: void 0
};
t.propTypes = {
  children: i.node.isRequired,
  icon: i.node
};
export {
  t as DialogBody
};
