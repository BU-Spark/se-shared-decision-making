import e from "react";
import r from "prop-types";
import t from "styled-components";
import { ModalContext as l } from "./ModalContext.js";
import { Box as m } from "../Box/Box.js";
import { DismissibleLayer as p } from "../DismissibleLayer/DismissibleLayer.js";
import { Flex as d } from "../Flex/Flex.js";
import { FocusTrap as s } from "../FocusTrap/FocusTrap.js";
import u from "../hooks/useLockScroll.js";
import { Portal as c } from "../Portal/Portal.js";
const f = t(d)`
  inset: 0;
  background: ${({ theme: o }) => `${o.colors.neutral800}1F`};
`, y = t(m)`
  width: ${830 / 16}rem;
`, g = ({ onClose: o, labelledBy: a, ...i }) => (u(!0), /* @__PURE__ */ e.createElement(c, null, /* @__PURE__ */ e.createElement(l.Provider, { value: o }, /* @__PURE__ */ e.createElement(f, { justifyContent: "center", paddingLeft: 8, paddingRight: 8, position: "fixed", zIndex: 4 }, /* @__PURE__ */ e.createElement(s, null, /* @__PURE__ */ e.createElement(p, { onEscapeKeyDown: o, onPointerDownOutside: o }, /* @__PURE__ */ e.createElement(
  y,
  {
    "aria-labelledby": a,
    onClick: (n) => n.stopPropagation(),
    background: "neutral0",
    hasRadius: !0,
    shadow: "popupShadow",
    role: "dialog",
    "aria-modal": !0,
    ...i
  }
)))))));
g.propTypes = {
  labelledBy: r.string.isRequired,
  onClose: r.func.isRequired
};
export {
  g as ModalLayout
};
