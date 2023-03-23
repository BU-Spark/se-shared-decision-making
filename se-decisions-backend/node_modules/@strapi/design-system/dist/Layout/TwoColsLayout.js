import e from "react";
import r from "prop-types";
import { Box as o } from "../Box/Box.js";
import { Grid as m } from "../Grid/Grid.js";
import { GridItem as t } from "../Grid/GridItem.js";
const l = ({ startCol: a, endCol: d }) => /* @__PURE__ */ e.createElement(m, { gap: 4 }, /* @__PURE__ */ e.createElement(t, { col: 9, s: 12 }, /* @__PURE__ */ e.createElement(o, { hasRadius: !0, background: "neutral0", shadow: "tableShadow" }, a)), /* @__PURE__ */ e.createElement(t, { col: 3, s: 12 }, /* @__PURE__ */ e.createElement(o, { hasRadius: !0, background: "neutral0", shadow: "tableShadow" }, d)));
l.propTypes = {
  endCol: r.node.isRequired,
  startCol: r.node.isRequired
};
export {
  l as TwoColsLayout
};
