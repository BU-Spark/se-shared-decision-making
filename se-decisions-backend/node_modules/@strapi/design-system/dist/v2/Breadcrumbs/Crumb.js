import o from "react";
import t from "prop-types";
import { Box as i } from "../../Box/Box.js";
import { Typography as d } from "../../Typography/Typography.js";
const r = ({ children: p, isCurrent: e, ...a }) => /* @__PURE__ */ o.createElement(i, { paddingLeft: 2, paddingRight: 2, paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ o.createElement(
  d,
  {
    variant: "pi",
    textColor: "neutral800",
    fontWeight: e ? "bold" : "normal",
    "aria-current": e,
    ...a
  },
  p
));
r.displayName = "Crumb";
r.defaultProps = {
  isCurrent: !1
};
r.propTypes = {
  children: t.node.isRequired,
  isCurrent: t.bool
};
export {
  r as Crumb
};
