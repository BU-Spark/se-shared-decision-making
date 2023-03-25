import e from "react";
import r from "prop-types";
import a from "styled-components";
import { Box as n } from "../Box/Box.js";
import { Flex as i } from "../Flex/Flex.js";
const l = a(i)`
  & > * + * {
    margin-left: ${({ theme: t }) => t.spaces[2]};
  }

  margin-left: ${({ pullRight: t }) => t ? "auto" : void 0};
`, m = a(l)`
  flex-shrink: 0;
`, p = ({ startActions: t, endActions: o }) => t || o ? /* @__PURE__ */ e.createElement(n, { paddingLeft: 10, paddingRight: 10 }, /* @__PURE__ */ e.createElement(n, { paddingBottom: 4 }, /* @__PURE__ */ e.createElement(i, { justifyContent: "space-between", alignItems: "flex-start" }, t && /* @__PURE__ */ e.createElement(l, { wrap: "wrap" }, t), o && /* @__PURE__ */ e.createElement(m, { pullRight: !0 }, o)))) : null;
p.defaultProps = {
  endActions: void 0,
  startActions: void 0
};
p.propTypes = {
  endActions: r.node,
  startActions: r.node
};
export {
  p as ActionLayout
};
