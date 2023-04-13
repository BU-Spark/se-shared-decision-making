import o from "react";
import r from "prop-types";
import t from "styled-components";
import { Box as d } from "../Box/Box.js";
const a = t(d)`
  display: grid;
  grid-template-columns: ${({ hasSideNav: e }) => e ? "auto 1fr" : "1fr"};
`, m = t(d)`
  overflow-x: hidden;
`, i = ({ sideNav: e, children: n }) => /* @__PURE__ */ o.createElement(a, { hasSideNav: Boolean(e) }, e, /* @__PURE__ */ o.createElement(m, { paddingBottom: 10 }, n));
i.defaultProps = {
  sideNav: void 0
};
i.propTypes = {
  children: r.node.isRequired,
  sideNav: r.node
};
export {
  i as Layout
};
