import r from "react";
import o from "prop-types";
import i from "styled-components";
import { Box as t } from "../Box/Box.js";
import { Divider as d } from "../Divider/Divider.js";
import { Flex as m } from "../Flex/Flex.js";
import { Typography as l } from "../Typography/Typography.js";
const p = i(t)`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.primary600};
  }
`, c = i(t)`
  border-radius: 0 0 ${({ theme: e }) => e.borderRadius} ${({ theme: e }) => e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`, s = ({ children: e, icon: n, ...a }) => /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(d, null), /* @__PURE__ */ r.createElement(c, { as: "button", background: "primary100", padding: 5, ...a }, /* @__PURE__ */ r.createElement(m, null, /* @__PURE__ */ r.createElement(p, { "aria-hidden": !0, background: "primary200" }, n), /* @__PURE__ */ r.createElement(t, { paddingLeft: 3 }, /* @__PURE__ */ r.createElement(l, { variant: "pi", fontWeight: "bold", textColor: "primary600" }, e)))));
s.propTypes = {
  children: o.string.isRequired,
  icon: o.node.isRequired
};
export {
  s as TFooter
};
