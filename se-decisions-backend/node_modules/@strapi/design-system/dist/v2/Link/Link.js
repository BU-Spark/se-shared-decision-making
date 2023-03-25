import r from "react";
import { ExternalLink as c } from "@strapi/icons";
import t from "prop-types";
import s from "styled-components";
import { BaseLink as f } from "../../BaseLink/BaseLink.js";
import { Box as y } from "../../Box/Box.js";
import { buttonFocusStyle as u } from "../../themes/utils.js";
import { Typography as v } from "../../Typography/Typography.js";
const g = s(f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({ disabled: e }) => e ? "none" : void 0};

  svg path {
    fill: ${({ disabled: e, theme: o }) => e ? o.colors.neutral600 : o.colors.primary600};
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  &:hover,
  &:active {
    color: ${({ theme: e }) => e.colors.primary800};
  }

  ${u};
`, a = s(y)`
  display: flex;
`, i = r.forwardRef(({ children: e, href: o, disabled: l, startIcon: p, endIcon: n, ...d }, m) => /* @__PURE__ */ r.createElement(g, { ref: m, href: o, disabled: l, ...d }, p && /* @__PURE__ */ r.createElement(a, { as: "span", "aria-hidden": !0, paddingRight: 2 }, p), /* @__PURE__ */ r.createElement(v, { textColor: l ? "neutral600" : "primary600" }, e), n && /* @__PURE__ */ r.createElement(a, { as: "span", "aria-hidden": !0, paddingLeft: 2 }, n), o && !n && /* @__PURE__ */ r.createElement(a, { as: "span", "aria-hidden": !0, paddingLeft: 2 }, /* @__PURE__ */ r.createElement(c, null))));
i.displayName = "Link";
i.defaultProps = {
  as: void 0,
  href: void 0,
  disabled: !1,
  startIcon: void 0,
  endIcon: void 0
};
i.propTypes = {
  as: t.elementType,
  children: t.node.isRequired,
  disabled: t.bool,
  endIcon: t.element,
  href: t.string,
  startIcon: t.element
};
export {
  i as Link
};
