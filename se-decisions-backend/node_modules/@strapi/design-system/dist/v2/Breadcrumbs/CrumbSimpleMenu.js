import o from "react";
import { CarretDown as i } from "@strapi/icons";
import r from "prop-types";
import p from "styled-components";
import { Button as m } from "../../Button/Button.js";
import { SimpleMenu as a } from "../SimpleMenu/SimpleMenu.js";
const l = p(m)`
  padding: ${({ theme: e }) => `${e.spaces[1]} ${e.spaces[3]}`};

  :hover,
  :focus {
    background-color: ${({ theme: e }) => e.colors.neutral200};
  }
`, t = ({ children: e, ...n }) => /* @__PURE__ */ o.createElement(a, { noBorder: !0, icon: /* @__PURE__ */ o.createElement(i, null), as: l, size: "S", ...n }, e);
t.displayName = "CrumbSimpleMenu";
t.propTypes = {
  "aria-label": r.string.isRequired,
  children: r.oneOfType([r.arrayOf(r.node), r.node]).isRequired
};
export {
  t as CrumbSimpleMenu
};
