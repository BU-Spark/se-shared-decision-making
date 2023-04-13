import r, { Children as a } from "react";
import e from "prop-types";
import h from "styled-components";
import { Divider as p } from "./Divider.js";
import { Box as f } from "../../Box/Box.js";
import { Flex as n } from "../../Flex/Flex.js";
const u = h(n)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({ theme: t }) => `calc(-1*${t.spaces[2]})`};
  }
`, o = ({ label: t, children: l, ...s }) => {
  const i = a.toArray(l);
  return /* @__PURE__ */ r.createElement(f, { "aria-label": t, ...s }, /* @__PURE__ */ r.createElement(u, { as: "ol", horizontal: !0 }, a.map(i, (m, d) => {
    const c = i.length > 1 && d + 1 < i.length;
    return /* @__PURE__ */ r.createElement(n, { inline: !0, as: "li" }, m, c && /* @__PURE__ */ r.createElement(p, null));
  })));
};
o.displayName = "Breadcrumbs";
o.propTypes = {
  children: e.oneOfType([e.arrayOf(e.node), e.node]).isRequired,
  label: e.string.isRequired
};
export {
  o as Breadcrumbs
};
