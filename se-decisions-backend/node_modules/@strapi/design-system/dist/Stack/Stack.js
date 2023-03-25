import { jsx as n } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import a from "styled-components";
import { Flex as s } from "../Flex/Flex.js";
import { extractStyleFromTheme as m } from "../helpers/theme.js";
const c = {
  size: !0,
  spacing: !0
}, f = a(s).withConfig({
  shouldForwardProp: (e, r) => !c[e] && r(e)
})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({
  theme: e,
  spacing: r
}) => m(e.spaces, r, void 0)};
  }
`, g = a(s).withConfig({
  shouldForwardProp: (e, r) => !c[e] && r(e)
})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({
  theme: e,
  spacing: r
}) => m(e.spaces, r, void 0)};
  }
`, l = d(({
  horizontal: e = !1,
  spacing: r,
  size: t,
  ...o
}, i) => (t && console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'), e ? n(g, {
  ref: i,
  spacing: r || t,
  ...o
}) : n(f, {
  direction: "column",
  alignItems: "stretch",
  ref: i,
  spacing: r || t,
  ...o
})));
l.displayName = "Stack";
export {
  l as Stack
};
