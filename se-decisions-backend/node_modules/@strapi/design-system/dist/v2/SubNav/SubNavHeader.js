import e, { useState as L, useRef as p, useEffect as w } from "react";
import { Search as x } from "@strapi/icons";
import r from "prop-types";
import D from "styled-components";
import { Box as n } from "../../Box/Box.js";
import { Divider as I } from "../../Divider/Divider.js";
import { Flex as K } from "../../Flex/Flex.js";
import { KeyboardKeys as P } from "../../helpers/keyboardKeys.js";
import { useId as k } from "../../hooks/useId.js";
import { usePrevious as O } from "../../hooks/usePrevious.js";
import { IconButton as F } from "../../IconButton/IconButton.js";
import { Searchbar as _ } from "../../Searchbar/Searchbar.js";
import { SearchForm as $ } from "../../Searchbar/SearchForm.js";
import { Typography as j } from "../../Typography/Typography.js";
const d = D(I)`
  width: ${24 / 16}rem;
  background-color: ${({ theme: l }) => l.colors.neutral200};
`, f = ({ as: l, label: u, searchLabel: s, searchable: g, onChange: h, value: b, onClear: E, onSubmit: S, id: y }) => {
  const [o, i] = L(!1), m = O(o), C = k(y), a = p(), c = p();
  w(() => {
    o && a.current && a.current.focus(), m && !o && c.current && c.current.focus();
  }, [o, m]);
  const v = () => {
    i((t) => !t);
  }, B = (t) => {
    E(t), a.current.focus();
  }, T = (t) => {
    t.relatedTarget?.id !== C && i(!1);
  }, R = (t) => {
    t.key === P.ESCAPE && i(!1);
  };
  return o ? /* @__PURE__ */ e.createElement(n, { paddingLeft: 4, paddingTop: 5, paddingBottom: 2, paddingRight: 4 }, /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(
    _,
    {
      name: "searchbar",
      value: b,
      onChange: h,
      placeholder: "e.g: strapi-plugin-abcd",
      onKeyDown: R,
      ref: a,
      onBlur: T,
      onClear: B,
      onSubmit: S,
      clearLabel: "Clear",
      size: "S"
    },
    s
  )), /* @__PURE__ */ e.createElement(n, { paddingLeft: 2, paddingTop: 4 }, /* @__PURE__ */ e.createElement(d, null))) : /* @__PURE__ */ e.createElement(n, { paddingLeft: 6, paddingTop: 6, paddingBottom: 2, paddingRight: 4 }, /* @__PURE__ */ e.createElement(K, { justifyContent: "space-between", alignItems: "flex-start" }, /* @__PURE__ */ e.createElement(j, { variant: "beta", as: l }, u), g && /* @__PURE__ */ e.createElement(F, { ref: c, onClick: v, label: s, icon: /* @__PURE__ */ e.createElement(x, null) })), /* @__PURE__ */ e.createElement(n, { paddingTop: 4 }, /* @__PURE__ */ e.createElement(d, null)));
};
f.defaultProps = {
  as: "h2",
  searchable: !1,
  onChange() {
  },
  onClear() {
  },
  onSubmit() {
  },
  value: "",
  searchLabel: "",
  id: void 0
};
f.propTypes = {
  as: r.string,
  id: r.string,
  label: r.string.isRequired,
  onChange: r.func,
  onClear: r.func,
  onSubmit: r.func,
  searchLabel: r.string,
  searchable: r.bool,
  value: r.string
};
export {
  f as SubNavHeader
};
