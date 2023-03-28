import t, { useRef as f } from "react";
import o from "prop-types";
import d from "styled-components";
import h from "../BaseCheckbox/assets/checkmark.js";
import { Box as a } from "../Box/Box.js";
import { Flex as g } from "../Flex/Flex.js";
import { Typography as b } from "../Typography/Typography.js";
const y = d(a)`
  border: 1px solid
    ${({ theme: e, selected: r, indeterminate: i }) => r || i ? e.colors.primary600 : e.colors.neutral300};
  height: 18px;
  width: 18px;
  background-color: ${({ theme: e, selected: r, indeterminate: i }) => r || i ? e.colors.primary600 : e.colors.neutral0};

  ${({ theme: e, indeterminate: r }) => r && `&::after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

  `}

  ${({ selected: e }) => e && `  
    &::after {
      content: '';
      background: url(${h}) no-repeat no-repeat center center;
      width: 100%;
      height: 100%;
      position: absolute;
    }

  `}
`, x = d(a)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  &.is-focused {
    background: ${({ theme: e }) => e.colors.primary100};
  }

  &:hover {
    background: ${({ theme: e }) => e.colors.primary100};
  }
`, n = ({ selected: e, indeterminate: r, children: i, value: p, multi: s, isChild: c, startIcon: l, ...u }) => {
  const m = f(null);
  return /* @__PURE__ */ t.createElement(
    x,
    {
      as: "li",
      hasRadius: !0,
      paddingLeft: c ? 7 : 4,
      paddingRight: 4,
      paddingTop: 2,
      paddingBottom: 2,
      ref: m,
      role: "option",
      "aria-selected": e,
      background: "neutral0",
      "data-strapi-value": p,
      ...u
    },
    /* @__PURE__ */ t.createElement(g, null, l && /* @__PURE__ */ t.createElement(a, { paddingRight: 2, "aria-hidden": !0 }, l), s && /* @__PURE__ */ t.createElement(a, { paddingRight: 2, "aria-hidden": !0 }, /* @__PURE__ */ t.createElement(
      y,
      {
        hasRadius: !0,
        overflow: "hidden",
        position: "relative",
        indeterminate: r,
        selected: e,
        zIndex: 1
      }
    )), /* @__PURE__ */ t.createElement(b, { textColor: e ? "primary600" : "neutral800", fontWeight: e ? "bold" : null }, i))
  );
};
n.defaultProps = {
  isChild: !1,
  multi: !1,
  selected: !1,
  startIcon: void 0,
  indeterminate: !1
};
n.propTypes = {
  children: o.oneOfType([o.string, o.number]).isRequired,
  indeterminate: o.bool,
  isChild: o.bool,
  multi: o.bool,
  selected: o.bool,
  startIcon: o.node,
  value: o.oneOfType([o.string, o.number]).isRequired
};
n.displayName = "Option";
export {
  n as Option
};
