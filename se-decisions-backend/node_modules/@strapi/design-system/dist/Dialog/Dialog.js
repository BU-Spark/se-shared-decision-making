import e from "react";
import o from "prop-types";
import t from "styled-components";
import { Box as a } from "../Box/Box.js";
import { DismissibleLayer as c } from "../DismissibleLayer/DismissibleLayer.js";
import { Flex as f } from "../Flex/Flex.js";
import { FocusTrap as g } from "../FocusTrap/FocusTrap.js";
import { setOpacity as y } from "../helpers/setOpacity.js";
import { useId as b } from "../hooks/useId.js";
import E from "../hooks/useLockScroll.js";
import { Portal as h } from "../Portal/Portal.js";
import { Typography as D } from "../Typography/Typography.js";
const x = t(a)`
  inset: 0;
  background: ${({ theme: r }) => y(r.colors.neutral800, 0.2)};
`, w = t(a)`
  max-width: ${412 / 16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`, R = t(f)`
  border-bottom: 1px solid ${({ theme: r }) => r.colors.neutral150};
`, i = ({ onClose: r, title: m, as: s, isOpen: n, id: d, ...p }) => {
  const u = b(d);
  if (E(n), !n)
    return null;
  const l = `${u}-label`;
  return /* @__PURE__ */ e.createElement(h, null, /* @__PURE__ */ e.createElement(x, { padding: 8, position: "fixed", zIndex: 4 }, /* @__PURE__ */ e.createElement(g, null, /* @__PURE__ */ e.createElement(c, { onEscapeKeyDown: r, onPointerDownOutside: r }, /* @__PURE__ */ e.createElement(
    w,
    {
      "aria-labelledby": l,
      "aria-modal": !0,
      background: "neutral0",
      hasRadius: !0,
      shadow: "popupShadow",
      role: "dialog"
    },
    /* @__PURE__ */ e.createElement(R, { padding: 6, justifyContent: "center" }, /* @__PURE__ */ e.createElement(D, { variant: "beta", as: s || "h2", id: l }, m)),
    /* @__PURE__ */ e.createElement(a, { ...p })
  )))));
};
i.displayName = "Dialog";
i.defaultProps = {
  as: "h2",
  id: void 0
};
i.propTypes = {
  as: o.string,
  id: o.oneOfType([o.string, o.number]),
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  title: o.string.isRequired
};
export {
  i as Dialog
};
