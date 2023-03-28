import r from "react";
import t from "prop-types";
import c from "styled-components";
import { Box as m } from "../Box/Box.js";
import { Flex as f } from "../Flex/Flex.js";
const n = c.div`
  background: ${({ theme: e }) => e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24 / 16}rem;
  width: ${40 / 16}rem;

  & span {
    font-size: ${({ visibleLabels: e }) => e ? "1rem" : 0};
  }

  &:before {
    content: '';
    background: ${({ theme: e }) => e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({ theme: e }) => e.spaces[1]};
    top: ${({ theme: e }) => e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`, b = c.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${n} {
    background: ${({ theme: e }) => e.colors.success500};
  }

  &[aria-checked='true'] ${n}:before {
    transform: translateX(1rem);
  }
`, a = r.forwardRef(
  ({ label: e, onChange: d, onLabel: i, offLabel: s, selected: o, visibleLabels: l, ...u }, p) => /* @__PURE__ */ r.createElement(
    b,
    {
      ref: p,
      role: "switch",
      "aria-checked": o,
      "aria-label": e,
      onClick: d,
      visibleLabels: l,
      type: "button",
      ...u
    },
    /* @__PURE__ */ r.createElement(f, null, /* @__PURE__ */ r.createElement(n, null, /* @__PURE__ */ r.createElement("span", null, i), /* @__PURE__ */ r.createElement("span", null, s)), l && /* @__PURE__ */ r.createElement(m, { as: "span", "aria-hidden": !0, paddingLeft: 2, color: o ? "success600" : "danger600" }, o ? i : s))
  )
);
a.defaultProps = {
  onLabel: "On",
  offLabel: "Off",
  visibleLabels: !1
};
a.propTypes = {
  label: t.string.isRequired,
  offLabel: t.string,
  onChange: t.func.isRequired,
  onLabel: t.string,
  selected: t.bool.isRequired,
  visibleLabels: t.bool
};
a.displayName = "Switch";
export {
  a as Switch
};
