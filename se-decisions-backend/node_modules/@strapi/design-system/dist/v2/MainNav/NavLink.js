import r from "react";
import o from "prop-types";
import i from "styled-components";
import { useMainNav as f } from "./MainNavContext.js";
import { Badge as h } from "../../Badge/Badge.js";
import { BaseLink as y } from "../../BaseLink/BaseLink.js";
import { Box as b } from "../../Box/Box.js";
import { Flex as $ } from "../../Flex/Flex.js";
import { Tooltip as v } from "../../Tooltip/Tooltip.js";
import { Typography as t } from "../../Typography/Typography.js";
const d = i(b)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`, m = i(y)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};

  ${t} {
    color: ${({ theme: e }) => e.colors.neutral600};
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }

  &:hover {
    background: ${({ theme: e }) => e.colors.neutral100};

    ${t} {
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

    ${t} {
      color: ${({ theme: e }) => e.colors.primary600};
      font-weight: 500;
    }
  }
`, u = i($)`
  padding: ${({ theme: e }) => `${e.spaces[2]} ${e.spaces[3]}`};
`, g = i(h)`
  ${({ theme: e, condensed: a }) => a && `
	  position: absolute;
    // Values based on visual aspect 
    top: -${e.spaces[3]};
    right:  -${e.spaces[1]};
  `}

  ${t} {
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
`, s = r.forwardRef(({ children: e, icon: a, badgeContent: n, badgeAriaLabel: l, ...c }, p) => f() ? /* @__PURE__ */ r.createElement(m, { ref: p, ...c }, /* @__PURE__ */ r.createElement(v, { position: "right", label: e }, /* @__PURE__ */ r.createElement(u, { as: "span", justifyContent: "center" }, /* @__PURE__ */ r.createElement(d, { "aria-hidden": !0, paddingRight: 0, as: "span" }, a), n && /* @__PURE__ */ r.createElement(g, { condensed: !0, "aria-label": l }, n)))) : /* @__PURE__ */ r.createElement(m, { ref: p, ...c }, /* @__PURE__ */ r.createElement(u, { as: "span", justifyContent: "space-between" }, /* @__PURE__ */ r.createElement($, null, /* @__PURE__ */ r.createElement(d, { "aria-hidden": !0, paddingRight: 3, as: "span" }, a), /* @__PURE__ */ r.createElement(t, null, e)), n && /* @__PURE__ */ r.createElement(g, { justifyContent: "center", "aria-label": l }, n))));
s.displayName = "NavLink";
s.defaultProps = {
  badgeContent: void 0,
  badgeAriaLabel: void 0
};
s.propTypes = {
  badgeAriaLabel: o.string,
  badgeContent: o.oneOfType([o.string, o.number]),
  children: o.string.isRequired,
  icon: o.node.isRequired
};
export {
  s as NavLink
};
