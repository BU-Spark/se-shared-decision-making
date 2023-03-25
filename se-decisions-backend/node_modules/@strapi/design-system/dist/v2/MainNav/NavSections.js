import e, { Children as m } from "react";
import a from "prop-types";
import d from "styled-components";
import { Box as l } from "../../Box/Box.js";
import { Flex as c } from "../../Flex/Flex.js";
const s = d(l)`
  flex-grow: 1;
  overflow-y: auto;
`, f = ({ children: t, spacing: o = 4, horizontal: r = !1, ...i }) => /* @__PURE__ */ e.createElement(s, { paddingLeft: 3, paddingRight: 2, paddingTop: 3, paddingBottom: 8 }, /* @__PURE__ */ e.createElement(
  c,
  {
    as: "ul",
    gap: o,
    direction: r ? "row" : "column",
    alignItems: r ? "center" : "stretch",
    ...i
  },
  m.map(t, (n, p) => /* @__PURE__ */ e.createElement("li", { key: p }, n))
));
f.propTypes = {
  children: a.node.isRequired
};
export {
  f as NavSections
};
