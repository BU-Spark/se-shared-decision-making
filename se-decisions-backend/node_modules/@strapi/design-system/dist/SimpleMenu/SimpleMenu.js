import t, { useRef as T, useEffect as v, useState as B, Children as z, cloneElement as j } from "react";
import { useCallbackRef as K } from "@radix-ui/react-use-callback-ref";
import { CarretDown as H } from "@strapi/icons";
import e from "prop-types";
import { NavLink as U } from "react-router-dom";
import y from "styled-components";
import { getOptionStyle as b } from "./utils.js";
import { Box as k } from "../Box/Box.js";
import { Button as $ } from "../Button/Button.js";
import { Flex as G } from "../Flex/Flex.js";
import { KeyboardKeys as i } from "../helpers/keyboardKeys.js";
import { useId as J } from "../hooks/useId.js";
import { Link as Q } from "../Link/Link.js";
import { POPOVER_PLACEMENTS as X, Popover as Y } from "../Popover/Popover.js";
import { Typography as O } from "../Typography/Typography.js";
const Z = y.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${b}
`, ee = y(U)`
  text-decoration: none;
  ${b}
`, ne = y(Q)`
  /* Removing Link hover effect */
  &:hover {
    color: currentColor;
  }

  &:focus-visible {
    /* Removing Link focus-visible after properties and reset to global outline */
    outline: 2px solid ${({ theme: o }) => o.colors.primary600};
    outline-offset: 2px;
    &:after {
      content: none;
    }
  }

  ${b}
`, te = y.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`, oe = y($)`
  padding: ${({ theme: o }) => `${o.spaces[1]} ${o.spaces[3]}`};
`, L = ({ children: o, onClick: E, to: s, isFocused: a, href: l, ...P }) => {
  const c = T();
  v(() => {
    a && c.current && c.current.focus();
  }, [a]);
  const p = {
    tabIndex: a ? 0 : -1,
    ref: c,
    role: "menuitem",
    ...P
  }, u = (g) => {
    (g.key === i.SPACE || g.key === i.ENTER) && E();
  };
  return s && !l ? /* @__PURE__ */ t.createElement(ee, { to: s, ...p }, /* @__PURE__ */ t.createElement(k, { padding: 2 }, /* @__PURE__ */ t.createElement(O, null, o))) : l && !s ? /* @__PURE__ */ t.createElement(ne, { isExternal: !0, href: l, ...p }, /* @__PURE__ */ t.createElement(k, { padding: 2 }, /* @__PURE__ */ t.createElement(O, null, o))) : /* @__PURE__ */ t.createElement(Z, { onKeyDown: u, onMouseDown: E, type: "button", ...p }, /* @__PURE__ */ t.createElement(k, { padding: 2 }, /* @__PURE__ */ t.createElement(O, null, o)));
};
L.defaultProps = {
  as: void 0,
  href: void 0,
  isFocused: !1,
  onClick() {
  },
  to: void 0
};
L.propTypes = {
  as: e.elementType,
  children: e.node.isRequired,
  href: e.string,
  isFocused: e.bool,
  onClick: e.func,
  to: e.string
};
const C = ({
  label: o,
  children: E,
  id: s,
  as: a,
  onOpen: l = () => {
  },
  onClose: P = () => {
  },
  size: c,
  popoverPlacement: p,
  onReachEnd: u,
  ...g
}) => {
  const d = T(), R = J(s), x = T(!1), [m, f] = B(!1), [D, I] = B(0), h = z.toArray(E), A = a || (c === "S" ? oe : $), S = !!u && typeof u == "function";
  v(() => {
    if (["string", "number"].includes(typeof o)) {
      const n = h.findIndex((r) => r.props.children === o);
      n !== -1 && I(n);
    }
  }, [o]);
  const w = K(l), M = K(P);
  v(() => {
    x?.current ? m ? w() : M() : x.current = !0;
  }, [x, M, w, m]), v(() => {
    t.isValidElement(o) && D === -1 && d.current.focus();
  }, [o, D]);
  const N = (n) => {
    m && (n.key === i.ESCAPE && (n.stopPropagation(), f(!1), d.current.focus()), n.key === i.DOWN && I((r) => r === h.length - 1 ? 0 : r + 1), n.key === i.UP && I((r) => r === 0 ? h.length - 1 : r - 1));
  }, F = (n) => {
    (n.key === i.ENTER || n.key === i.SPACE) && f((r) => !r);
  }, V = (n) => {
    n.preventDefault(), n.currentTarget.contains(n.relatedTarget) || f(!1);
  }, q = (n) => {
    n.preventDefault(), f((r) => !r);
  }, W = () => {
    S && u();
  }, _ = h.map((n, r) => /* @__PURE__ */ t.createElement(G, { as: "li", key: r, justifyContent: "center", role: "menuitem" }, j(n, {
    onClick() {
      n.props.onClick(), f(!1), d.current.focus();
    },
    isFocused: D === r
  })));
  return /* @__PURE__ */ t.createElement("div", { onKeyDown: N }, /* @__PURE__ */ t.createElement(
    A,
    {
      label: t.isValidElement(o) ? null : o,
      "aria-haspopup": !0,
      "aria-expanded": m,
      "aria-controls": R,
      onKeyDown: F,
      onMouseDown: q,
      ref: d,
      type: "button",
      variant: "ghost",
      endIcon: /* @__PURE__ */ t.createElement(te, null, /* @__PURE__ */ t.createElement(H, { "aria-hidden": !0 })),
      ...g
    },
    o
  ), m && /* @__PURE__ */ t.createElement(
    Y,
    {
      onBlur: V,
      placement: p,
      source: d,
      onReachEnd: W,
      intersectionId: S ? `popover-${R}` : void 0,
      spacing: 4
    },
    /* @__PURE__ */ t.createElement(k, { role: "menu", as: "ul", padding: 1, id: R }, _)
  ));
};
C.defaultProps = {
  as: void 0
};
C.displayName = "SimpleMenu";
C.defaultProps = {
  id: void 0,
  onOpen: void 0,
  onClose: void 0,
  onReachEnd: void 0,
  popoverPlacement: "bottom-start",
  size: "M"
};
C.propTypes = {
  as: e.any,
  children: e.oneOfType([e.arrayOf(e.node), e.node]).isRequired,
  id: e.string,
  label: e.oneOfType([e.string, e.number, e.element]).isRequired,
  onClose: e.func,
  onOpen: e.func,
  onReachEnd: e.func,
  popoverPlacement: e.oneOf(X),
  size: e.oneOf(["S", "M"])
};
export {
  L as MenuItem,
  C as SimpleMenu
};
