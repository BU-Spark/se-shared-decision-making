import e, { Children as c } from "react";
import d from "prop-types";
import { useMainNav as s } from "./MainNavContext.js";
import { Box as p } from "../../Box/Box.js";
import { Divider as u } from "../../Divider/Divider.js";
import { Flex as r } from "../../Flex/Flex.js";
import { Typography as g } from "../../Typography/Typography.js";
import { VisuallyHidden as f } from "../../VisuallyHidden/VisuallyHidden.js";
const E = ({ label: i, children: m, horizontal: t = !1, spacing: o = 2, ...l }) => s() ? /* @__PURE__ */ e.createElement(r, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ e.createElement(p, { paddingTop: 1, paddingBottom: 1, background: "neutral0", hasRadius: !0, as: "span" }, /* @__PURE__ */ e.createElement(u, null), /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement("span", null, i))), /* @__PURE__ */ e.createElement(
  r,
  {
    as: "ul",
    gap: o,
    direction: t ? "row" : "column",
    alignItems: t ? "center" : "stretch",
    ...l
  },
  c.map(m, (n, a) => /* @__PURE__ */ e.createElement("li", { key: a }, n))
)) : /* @__PURE__ */ e.createElement(r, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ e.createElement(p, { paddingTop: 1, paddingBottom: 1, background: "neutral0", paddingRight: 3, paddingLeft: 3, hasRadius: !0, as: "span" }, /* @__PURE__ */ e.createElement(g, { variant: "sigma", textColor: "neutral600" }, i)), /* @__PURE__ */ e.createElement(
  r,
  {
    as: "ul",
    gap: o,
    direction: t ? "row" : "column",
    alignItems: t ? "center" : "stretch",
    ...l
  },
  c.map(m, (n, a) => /* @__PURE__ */ e.createElement("li", { key: a }, n))
));
E.propTypes = {
  children: d.node.isRequired,
  label: d.string.isRequired
};
export {
  E as NavSection
};
