import e, { Children as i } from "react";
import a from "prop-types";
import { Box as c } from "../../Box/Box.js";
import { Flex as l } from "../../Flex/Flex.js";
const d = ({ children: t, spacing: o = 2, horizontal: r = !1, ...m }) => /* @__PURE__ */ e.createElement(c, { paddingTop: 2, paddingBottom: 4 }, /* @__PURE__ */ e.createElement(
  l,
  {
    as: "ol",
    gap: o,
    direction: r ? "row" : "column",
    alignItems: r ? "center" : "stretch",
    ...m
  },
  i.map(t, (n, p) => /* @__PURE__ */ e.createElement("li", { key: p }, n))
));
d.propTypes = {
  children: a.node.isRequired
};
export {
  d as SubNavSections
};
