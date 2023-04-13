import e, { useState as f, Children as g } from "react";
import { CarretDown as h } from "@strapi/icons";
import o from "prop-types";
import a from "styled-components";
import { Box as i } from "../../Box/Box.js";
import { Flex as E } from "../../Flex/Flex.js";
import { useId as y } from "../../hooks/useId.js";
import { Typography as b } from "../../Typography/Typography.js";
const k = a(i)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: t }) => t.colors.neutral700};
    }
  }
`, x = a.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`, S = a.div`
  display: flex;
  align-items: center;
  width: ${12 / 16}rem;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, l = ({ label: t, children: p, id: s }) => {
  const [r, m] = f(!0), d = y(s), c = () => {
    m((n) => !n);
  };
  return /* @__PURE__ */ e.createElement(i, null, /* @__PURE__ */ e.createElement(k, { paddingLeft: 7, paddingTop: 2, paddingBottom: 2, paddingRight: 4 }, /* @__PURE__ */ e.createElement(E, { justifyContent: "space-between" }, /* @__PURE__ */ e.createElement(x, { onClick: c, "aria-expanded": r, "aria-controls": d }, /* @__PURE__ */ e.createElement(S, { rotated: r }, /* @__PURE__ */ e.createElement(h, { "aria-hidden": !0 })), /* @__PURE__ */ e.createElement(i, { paddingLeft: 2 }, /* @__PURE__ */ e.createElement(b, { as: "span", fontWeight: "semiBold", textColor: "neutral800" }, t))))), r && /* @__PURE__ */ e.createElement("ul", { id: d }, g.map(p, (n, u) => /* @__PURE__ */ e.createElement("li", { key: u }, n))));
};
l.defaultProps = {
  id: void 0
};
l.propTypes = {
  children: o.node.isRequired,
  id: o.string,
  label: o.string.isRequired
};
export {
  l as SubNavLinkSection
};
