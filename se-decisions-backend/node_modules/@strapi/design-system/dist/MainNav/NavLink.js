import r from "react";
import o from "prop-types";
import { NavLink as g } from "react-router-dom";
import i from "styled-components";
import { useMainNav as f } from "./MainNavContext.js";
import { Badge as h } from "../Badge/Badge.js";
import { Box as v } from "../Box/Box.js";
import { Flex as $ } from "../Flex/Flex.js";
import { Tooltip as b } from "../Tooltip/Tooltip.js";
import { Typography as a } from "../Typography/Typography.js";
const p = i(v)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`, d = i(g)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};

  ${a} {
    color: ${({ theme: e }) => e.colors.neutral600};
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }

  &:hover {
    background: ${({ theme: e }) => e.colors.neutral100};

    ${a} {
      color: ${({ theme: e }) => e.colors.neutral700};
    }

    svg path {
      fill: ${({ theme: e }) => e.colors.neutral600};
    }
  }

  &.active {
    background: ${({ theme: e }) => e.colors.primary100};

    svg path {
      fill: ${({ theme: e }) => e.colors.primary600};
    }

    ${a} {
      color: ${({ theme: e }) => e.colors.primary600};
      font-weight: 500;
    }
  }
`, m = i($)`
  padding: ${({ theme: e }) => `${e.spaces[2]} ${e.spaces[3]}`};
`, u = i(h)`
  ${({ theme: e, condensed: t }) => t && `
	  position: absolute;
    // Values based on visual aspect 
    top: -${e.spaces[3]};
    right:  -${e.spaces[1]};
  `}

  ${a} {
    //find a solution to remove !important
    color: ${({ theme: e }) => e.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme: e }) => e.spaces[6]};
  height: ${({ theme: e }) => e.spaces[5]};
  padding: ${({ theme: e }) => `0 ${e.spaces[2]}`};
  border-radius: ${({ theme: e }) => e.spaces[10]};
  background: ${({ theme: e }) => e.colors.primary600};
`, s = ({ children: e, icon: t, badgeContent: n, badgeAriaLabel: l, ...c }) => f() ? /* @__PURE__ */ r.createElement(b, { position: "right", label: e }, /* @__PURE__ */ r.createElement(d, { ...c }, /* @__PURE__ */ r.createElement(m, { as: "span" }, /* @__PURE__ */ r.createElement(p, { "aria-hidden": !0, paddingRight: 0, as: "span" }, t), n && /* @__PURE__ */ r.createElement(u, { condensed: !0, "aria-label": l }, n)))) : /* @__PURE__ */ r.createElement(d, { ...c }, /* @__PURE__ */ r.createElement(m, { as: "span", justifyContent: "space-between" }, /* @__PURE__ */ r.createElement($, null, /* @__PURE__ */ r.createElement(p, { "aria-hidden": !0, paddingRight: 3, as: "span" }, t), /* @__PURE__ */ r.createElement(a, null, e)), n && /* @__PURE__ */ r.createElement(u, { justifyContent: "center", "aria-label": l }, n)));
s.displayName = "NavLink";
s.defaultProps = {
  badgeContent: void 0,
  badgeAriaLabel: void 0
};
s.propTypes = {
  badgeAriaLabel: o.string,
  badgeContent: o.oneOfType([o.string, o.number]),
  children: o.node.isRequired,
  icon: o.node.isRequired
};
export {
  s as NavLink
};
