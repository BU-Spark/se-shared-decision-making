import o from "react";
import { Cross as l } from "@strapi/icons";
import r from "prop-types";
import n from "styled-components";
import { useModal as i } from "./ModalContext.js";
import { Box as p } from "../Box/Box.js";
import { Flex as m } from "../Flex/Flex.js";
import { IconButton as s } from "../IconButton/IconButton.js";
const c = n(p)`
  border-radius: ${({ theme: e }) => e.borderRadius} ${({ theme: e }) => e.borderRadius} 0 0;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, t = ({ children: e, closeLabel: a }) => {
  const d = i();
  return /* @__PURE__ */ o.createElement(c, { paddingTop: 4, paddingBottom: 4, paddingLeft: 5, paddingRight: 5, background: "neutral100" }, /* @__PURE__ */ o.createElement(m, { justifyContent: "space-between" }, e, /* @__PURE__ */ o.createElement(s, { onClick: d, "aria-label": a, icon: /* @__PURE__ */ o.createElement(l, null) })));
};
t.defaultProps = {
  closeLabel: "Close the modal"
};
t.propTypes = {
  children: r.node.isRequired,
  closeLabel: r.string
};
export {
  t as ModalHeader
};
