import r, { useRef as m, Children as T, cloneElement as w } from "react";
import { ChevronLeft as k, ChevronRight as L } from "@strapi/icons";
import e from "prop-types";
import a from "styled-components";
import { Box as i } from "../Box/Box.js";
import { Flex as D } from "../Flex/Flex.js";
import { KeyboardKeys as f } from "../helpers/keyboardKeys.js";
import { Icon as h } from "../Icon/Icon.js";
import { Tooltip as K } from "../Tooltip/Tooltip.js";
import { Typography as F } from "../Typography/Typography.js";
const G = a(i)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`, I = a(i)`
  grid-area: slides;
`, g = a.button`
  grid-area: ${({ area: t }) => t};

  &:focus svg path,
  &:hover svg path {
    fill: ${({ theme: t }) => t.colors.neutral900};
  }
`, y = ({
  actions: t,
  children: b,
  label: v,
  nextLabel: R,
  onNext: l,
  onPrevious: s,
  previousLabel: E,
  secondaryLabel: n,
  selectedSlide: C,
  ...x
}) => {
  const d = m(null), c = m(null), u = T.toArray(b).map(
    (o, A) => w(o, { selected: A === C })
  ), q = (o) => {
    switch (o.key) {
      case f.RIGHT: {
        o.preventDefault(), c.current.focus(), l();
        break;
      }
      case f.LEFT: {
        o.preventDefault(), d.current.focus(), s();
        break;
      }
    }
  }, p = u.length > 1;
  return /* @__PURE__ */ r.createElement(i, { ...x, onKeyDown: q }, /* @__PURE__ */ r.createElement(i, { padding: 2, borderColor: "neutral200", hasRadius: !0, background: "neutral100" }, /* @__PURE__ */ r.createElement(G, { as: "section", "aria-roledescription": "carousel", "aria-label": v, position: "relative" }, p && /* @__PURE__ */ r.createElement(
    g,
    {
      onClick: s,
      area: "startAction",
      ref: d,
      "aria-label": E,
      type: "button"
    },
    /* @__PURE__ */ r.createElement(h, { as: k, "aria-hidden": !0, width: "6px", height: "10px", color: "neutral600" })
  ), p && /* @__PURE__ */ r.createElement(g, { onClick: l, area: "endAction", ref: c, "aria-label": R, type: "button" }, /* @__PURE__ */ r.createElement(h, { as: L, "aria-hidden": !0, width: "6px", height: "10px", color: "neutral600" })), /* @__PURE__ */ r.createElement(I, { "aria-live": "polite", paddingLeft: 2, paddingRight: 2, width: "100%", overflow: "hidden" }, u), t), n && /* @__PURE__ */ r.createElement(i, { paddingTop: 2, paddingLeft: 4, paddingRight: 4 }, /* @__PURE__ */ r.createElement(K, { label: n }, /* @__PURE__ */ r.createElement(D, { justifyContent: "center" }, /* @__PURE__ */ r.createElement(F, { variant: "pi", textColor: "neutral600", ellipsis: !0 }, n))))));
};
y.defaultProps = {
  actions: void 0,
  error: void 0,
  hint: void 0,
  required: !1,
  secondaryLabel: void 0
};
y.propTypes = {
  actions: e.node,
  children: e.node.isRequired,
  error: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  label: e.string.isRequired,
  nextLabel: e.string.isRequired,
  onNext: e.func.isRequired,
  onPrevious: e.func.isRequired,
  previousLabel: e.string.isRequired,
  required: e.bool,
  secondaryLabel: e.string,
  selectedSlide: e.number.isRequired
};
export {
  y as Carousel
};
