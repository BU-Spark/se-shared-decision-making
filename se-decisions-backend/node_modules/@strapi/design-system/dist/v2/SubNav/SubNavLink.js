import r from "react";
import { Dot as g } from "@strapi/icons";
import t from "prop-types";
import i from "styled-components";
import { BaseLink as y } from "../../BaseLink/BaseLink.js";
import { Box as l } from "../../Box/Box.js";
import { Flex as a } from "../../Flex/Flex.js";
import { Typography as p } from "../../Typography/Typography.js";
const $ = i(l)`
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
      ${p} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`, s = i(g)`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme: e, $active: o }) => o ? e.colors.primary600 : e.colors.neutral600};
  }
`, b = i.div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`, n = r.forwardRef(({ children: e, icon: o, withBullet: c, as: m, isSubSectionChild: d, ...u }, f) => /* @__PURE__ */ r.createElement(
  $,
  {
    as: m,
    icon: o,
    background: "neutral100",
    paddingLeft: d ? 9 : 7,
    paddingBottom: 2,
    paddingTop: 2,
    ref: f,
    ...u
  },
  /* @__PURE__ */ r.createElement(a, null, o ? /* @__PURE__ */ r.createElement(b, null, o) : /* @__PURE__ */ r.createElement(s, null), /* @__PURE__ */ r.createElement(l, { paddingLeft: 2 }, /* @__PURE__ */ r.createElement(p, { as: "span" }, e))),
  c && /* @__PURE__ */ r.createElement(l, { as: a, paddingRight: 4 }, /* @__PURE__ */ r.createElement(s, { $active: !0 }))
));
n.displayName = "SubNavLink";
n.defaultProps = {
  as: y,
  icon: null,
  isSubSectionChild: !1,
  withBullet: !1
};
n.propTypes = {
  as: t.elementType,
  children: t.node.isRequired,
  icon: t.element,
  isSubSectionChild: t.bool,
  withBullet: t.bool
};
export {
  n as SubNavLink
};
