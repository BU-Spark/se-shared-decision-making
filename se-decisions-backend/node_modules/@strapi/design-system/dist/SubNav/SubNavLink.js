import r from "react";
import { Dot as u } from "@strapi/icons";
import t from "prop-types";
import { NavLink as f } from "react-router-dom";
import i from "styled-components";
import { Box as l } from "../Box/Box.js";
import { Flex as a } from "../Flex/Flex.js";
import { Typography as s } from "../Typography/Typography.js";
const g = i(l)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme: e }) => e.colors.neutral800};
  svg > * {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }

  &.active {
    ${({ theme: e }) => `
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${s} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`, p = i(u)`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme: e, $active: o }) => o ? e.colors.primary600 : e.colors.neutral600};
  }
`, $ = i.div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`, n = ({ children: e, icon: o, withBullet: c, isSubSectionChild: m, ...d }) => /* @__PURE__ */ r.createElement(
  g,
  {
    as: f,
    icon: o,
    background: "neutral100",
    paddingLeft: m ? 9 : 7,
    paddingBottom: 2,
    paddingTop: 2,
    ...d
  },
  /* @__PURE__ */ r.createElement(a, null, o ? /* @__PURE__ */ r.createElement($, null, o) : /* @__PURE__ */ r.createElement(p, null), /* @__PURE__ */ r.createElement(l, { paddingLeft: 2 }, /* @__PURE__ */ r.createElement(s, { as: "span" }, e))),
  c && /* @__PURE__ */ r.createElement(l, { as: a, paddingRight: 4 }, /* @__PURE__ */ r.createElement(p, { $active: !0 }))
);
n.displayName = "SubNavLink";
n.defaultProps = {
  icon: null,
  isSubSectionChild: !1,
  withBullet: !1
};
n.propTypes = {
  children: t.node.isRequired,
  icon: t.element,
  isSubSectionChild: t.bool,
  withBullet: t.bool
};
export {
  n as SubNavLink
};
