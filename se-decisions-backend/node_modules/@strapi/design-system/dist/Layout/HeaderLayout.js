import e, { useRef as h, useState as E, useEffect as v } from "react";
import t from "prop-types";
import R from "styled-components";
import { Box as i } from "../Box/Box.js";
import { Flex as l } from "../Flex/Flex.js";
import { useElementOnScreen as b } from "../hooks/useElementOnScreen.js";
import { useResizeObserver as w } from "../hooks/useResizeObserver.js";
import { Typography as c } from "../Typography/Typography.js";
const L = () => {
  const n = h(null), [o, a] = E(null), [r, d] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return w(r, () => {
    r.current && a(r.current.getBoundingClientRect());
  }), v(() => {
    n.current && a(n.current.getBoundingClientRect());
  }, [n]), {
    containerRef: r,
    isVisible: d,
    baseHeaderLayoutRef: n,
    headerSize: o
  };
}, p = (n) => {
  const { containerRef: o, isVisible: a, baseHeaderLayoutRef: r, headerSize: d } = L();
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { style: { height: d?.height }, ref: o }, a && /* @__PURE__ */ e.createElement(s, { ref: r, ...n })), !a && /* @__PURE__ */ e.createElement(s, { ...n, sticky: !0, width: d?.width }));
};
p.displayName = "HeaderLayout";
const x = R(i)`
  width: ${(n) => n.width}px;
`, s = e.forwardRef(
  ({ navigationAction: n, primaryAction: o, secondaryAction: a, subtitle: r, title: d, sticky: f, width: g, ...u }, y) => {
    const m = typeof r == "string";
    return f ? /* @__PURE__ */ e.createElement(
      x,
      {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        position: "fixed",
        top: 0,
        right: 0,
        background: "neutral0",
        shadow: "tableShadow",
        width: g,
        zIndex: 4,
        "data-strapi-header-sticky": !0
      },
      /* @__PURE__ */ e.createElement(l, { justifyContent: "space-between" }, /* @__PURE__ */ e.createElement(l, null, n && /* @__PURE__ */ e.createElement(i, { paddingRight: 3 }, n), /* @__PURE__ */ e.createElement(i, null, /* @__PURE__ */ e.createElement(c, { variant: "beta", as: "h1", ...u }, d), m ? /* @__PURE__ */ e.createElement(c, { variant: "pi", textColor: "neutral600" }, r) : r), a ? /* @__PURE__ */ e.createElement(i, { paddingLeft: 4 }, a) : null), /* @__PURE__ */ e.createElement(l, null, o ? /* @__PURE__ */ e.createElement(i, { paddingLeft: 2 }, o) : void 0))
    ) : /* @__PURE__ */ e.createElement(
      i,
      {
        ref: y,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 8,
        paddingTop: n ? 6 : 8,
        background: "neutral100",
        "data-strapi-header": !0
      },
      n ? /* @__PURE__ */ e.createElement(i, { paddingBottom: 2 }, n) : null,
      /* @__PURE__ */ e.createElement(l, { justifyContent: "space-between" }, /* @__PURE__ */ e.createElement(l, { minWidth: 0 }, /* @__PURE__ */ e.createElement(c, { as: "h1", variant: "alpha", ...u }, d), a ? /* @__PURE__ */ e.createElement(i, { paddingLeft: 4 }, a) : null), o),
      m ? /* @__PURE__ */ e.createElement(c, { variant: "epsilon", textColor: "neutral600", as: "p" }, r) : r
    );
  }
);
s.displayName = "BaseHeaderLayout";
s.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0,
  sticky: !1,
  width: void 0
};
s.propTypes = {
  navigationAction: t.node,
  primaryAction: t.node,
  secondaryAction: t.node,
  sticky: t.bool,
  subtitle: t.oneOfType([t.string, t.node]),
  title: t.string.isRequired,
  width: t.number
};
p.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0
};
p.propTypes = {
  navigationAction: t.node,
  primaryAction: t.node,
  secondaryAction: t.node,
  subtitle: t.oneOfType([t.string, t.node]),
  title: t.string.isRequired
};
export {
  s as BaseHeaderLayout,
  p as HeaderLayout
};
