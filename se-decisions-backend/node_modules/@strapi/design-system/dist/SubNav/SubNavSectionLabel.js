import e from "react";
import { CarretDown as s } from "@strapi/icons";
import r from "prop-types";
import p from "styled-components";
import { Box as n } from "../Box/Box.js";
import { Flex as u } from "../Flex/Flex.js";
import { Typography as l } from "../Typography/Typography.js";
const i = p(u)`
  border: none;
  padding: 0;
  background: transparent;
`, f = p.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, m = ({ collapsable: t, label: a, onClick: d, ariaExpanded: o, ariaControls: c }) => t ? /* @__PURE__ */ e.createElement(
  i,
  {
    as: "button",
    onClick: d,
    "aria-expanded": o,
    "aria-controls": c,
    textAlign: "left"
  },
  /* @__PURE__ */ e.createElement(n, { paddingRight: 1 }, /* @__PURE__ */ e.createElement(l, { variant: "sigma", textColor: "neutral600" }, a)),
  t && /* @__PURE__ */ e.createElement(f, { rotated: o }, /* @__PURE__ */ e.createElement(s, { "aria-hidden": !0 }))
) : /* @__PURE__ */ e.createElement(i, null, /* @__PURE__ */ e.createElement(n, { paddingRight: 1 }, /* @__PURE__ */ e.createElement(l, { variant: "sigma", textColor: "neutral600" }, a)));
m.defaultProps = {
  ariaControls: null,
  ariaExpanded: null,
  collapsable: !1,
  onClick() {
  }
};
m.propTypes = {
  ariaControls: r.string,
  ariaExpanded: r.bool,
  collapsable: r.bool,
  label: r.string.isRequired,
  onClick: r.func
};
export {
  m as SubNavSectionLabel
};
