import t, { forwardRef as a } from "react";
import o from "prop-types";
import { OptionBox as d } from "./components.js";
import { Typography as m } from "../Typography/Typography.js";
const r = a(({ isSelected: e, children: p, ...i }, n) => /* @__PURE__ */ t.createElement(
  d,
  {
    hasRadius: !0,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    role: "option",
    background: "neutral0",
    isSelected: e,
    ref: n,
    ...i
  },
  /* @__PURE__ */ t.createElement(m, { textColor: e ? "primary600" : "neutral800", fontWeight: e ? "bold" : null }, p)
));
r.defaultProps = {
  isSelected: !1
};
r.propTypes = {
  children: o.oneOfType([o.string, o.number]).isRequired,
  isSelected: o.bool
};
r.displayName = "ComboboxOption";
export {
  r as ComboboxOption
};
