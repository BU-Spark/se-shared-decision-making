import t, { useRef as b, useEffect as E, useState as B, Children as z, cloneElement as j } from "react";
import { useCallbackRef as L } from "@radix-ui/react-use-callback-ref";
import { CarretDown as H } from "@strapi/icons";
import e from "prop-types";
import m from "styled-components";
import { getOptionStyle as T } from "./utils.js";
import { BaseLink as U } from "../../BaseLink/BaseLink.js";
import { Box as g } from "../../Box/Box.js";
import { Button as K } from "../../Button/Button.js";
import { Flex as G } from "../../Flex/Flex.js";
import { KeyboardKeys as a } from "../../helpers/keyboardKeys.js";
import { useId as J } from "../../hooks/useId.js";
import { POPOVER_PLACEMENTS as Q, Popover as X } from "../../Popover/Popover.js";
import { Typography as O } from "../../Typography/Typography.js";
import { Link as Y } from "../Link/Link.js";
const Z = m.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${T}
`, ee = m(U)`
  text-decoration: none;
  ${T}
`, ne = m(Y)`
  &:focus-visible {
    /* Removes Link focus-visible after properties and reset to global outline */
    outline: 2px solid ${({ theme: o }) => o.colors.primary600};
    outline-offset: 2px;
    &:after {
      content: none;
    }
  }
  /* Removes Link svg color */
  svg path {
    fill: currentColor;
  }
  ${T}
`, te = m.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`, oe = m(K)`
  padding: ${({ theme: o }) => `${o.spaces[1]} ${o.spaces[3]}`};
`, $ = ({ as: o, children: l, onClick: d, isFocused: c, isLink: k, isExternal: v, ...C }) => {
  const p = b();
  E(() => {
    c && p.current && p.current.focus();
  }, [c]);
  const i = {
    tabIndex: c ? 0 : -1,
    ref: p,
    role: "menuitem",
    ...C
  }, x = (s) => {
    (s.key === a.SPACE || s.key === a.ENTER) && d();
  };
  return k ? /* @__PURE__ */ t.createElement(ee, { as: o, ...i }, /* @__PURE__ */ t.createElement(g, { padding: 2 }, /* @__PURE__ */ t.createElement(O, null, l))) : v ? /* @__PURE__ */ t.createElement(ne, { isExternal: !0, ...i }, /* @__PURE__ */ t.createElement(g, { padding: 2 }, /* @__PURE__ */ t.createElement(O, null, l))) : /* @__PURE__ */ t.createElement(Z, { onKeyDown: x, onMouseDown: d, type: "button", ...i }, /* @__PURE__ */ t.createElement(g, { padding: 2 }, /* @__PURE__ */ t.createElement(O, null, l)));
};
$.defaultProps = {
  as: void 0,
  onClick() {
  },
  isExternal: !1,
  isFocused: !1,
  isLink: !1
};
$.propTypes = {
  as: e.elementType,
  children: e.node.isRequired,
  isExternal: e.bool,
  isFocused: e.bool,
  isLink: e.bool,
  onClick: e.func
};
const h = ({
  label: o,
  children: l,
  id: d,
  as: c,
  onOpen: k = () => {
  },
  onClose: v = () => {
  },
  size: C,
  popoverPlacement: p,
  onReachEnd: i,
  ...x
}) => {
  const s = b(), P = J(d), R = b(!1), [u, f] = B(!1), [D, I] = B(0), y = z.toArray(l), A = c || (C === "S" ? oe : K), S = !!i && typeof i == "function";
  E(() => {
    if (["string", "number"].includes(typeof o)) {
      const n = y.findIndex((r) => r.props.children === o);
      n !== -1 && I(n);
    }
  }, [o]);
  const w = L(k), M = L(v);
  E(() => {
    R?.current ? u ? w() : M() : R.current = !0;
  }, [R, u, w, M]), E(() => {
    t.isValidElement(o) && D === -1 && s.current.focus();
  }, [o, D]);
  const N = (n) => {
    u && (n.key === a.ESCAPE && (n.stopPropagation(), f(!1), s.current.focus()), n.key === a.DOWN && I((r) => r === y.length - 1 ? 0 : r + 1), n.key === a.UP && I((r) => r === 0 ? y.length - 1 : r - 1));
  }, F = (n) => {
    (n.key === a.ENTER || n.key === a.SPACE) && f((r) => !r);
  }, V = (n) => {
    n.preventDefault(), n.currentTarget.contains(n.relatedTarget) || f(!1);
  }, q = (n) => {
    n.preventDefault(), f((r) => !r);
  }, W = () => {
    S && i();
  }, _ = y.map((n, r) => /* @__PURE__ */ t.createElement(G, { as: "li", key: r, justifyContent: "center", role: "menuitem" }, j(n, {
    onClick() {
      n.props.onClick(), f(!1), s.current.focus();
    },
    isFocused: D === r
  })));
  return /* @__PURE__ */ t.createElement("div", { onKeyDown: N }, /* @__PURE__ */ t.createElement(
    A,
    {
      label: t.isValidElement(o) ? null : o,
      "aria-haspopup": !0,
      "aria-expanded": u,
      "aria-controls": P,
      onKeyDown: F,
      onMouseDown: q,
      ref: s,
      type: "button",
      variant: "ghost",
      endIcon: /* @__PURE__ */ t.createElement(te, null, /* @__PURE__ */ t.createElement(H, { "aria-hidden": !0 })),
      ...x
    },
    o
  ), u && /* @__PURE__ */ t.createElement(
    X,
    {
      onBlur: V,
      placement: p,
      source: s,
      onReachEnd: W,
      intersectionId: S ? `popover-${P}` : void 0,
      spacing: 4
    },
    /* @__PURE__ */ t.createElement(g, { role: "menu", as: "ul", padding: 1, id: P }, _)
  ));
};
h.defaultProps = {
  as: void 0
};
h.displayName = "SimpleMenu";
h.defaultProps = {
  id: void 0,
  onClose() {
  },
  onOpen() {
  },
  onReachEnd: void 0,
  popoverPlacement: "bottom-start",
  size: "M"
};
h.propTypes = {
  as: e.any,
  children: e.oneOfType([e.arrayOf(e.node), e.node]).isRequired,
  id: e.string,
  label: e.oneOfType([e.string, e.number, e.element]).isRequired,
  onClose: e.func,
  onOpen: e.func,
  onReachEnd: e.func,
  popoverPlacement: e.oneOf(Q),
  size: e.oneOf(["S", "M"])
};
export {
  $ as MenuItem,
  h as SimpleMenu
};
