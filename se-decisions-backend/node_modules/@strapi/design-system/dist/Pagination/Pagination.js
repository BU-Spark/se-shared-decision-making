import * as e from "react";
import r from "prop-types";
import i from "styled-components";
import { PaginationContext as c } from "./PaginationContext.js";
import { Flex as u } from "../Flex/Flex.js";
const d = i.nav``, f = i(u)`
  & > * + * {
    margin-left: ${({ theme: t }) => t.spaces[1]};
  }
`, o = ({ children: t, label: l, activePage: n, pageCount: a }) => {
  const m = e.useMemo(() => ({ activePage: n, pageCount: a }), [n, a]);
  return /* @__PURE__ */ e.createElement(c.Provider, { value: m }, /* @__PURE__ */ e.createElement(d, { "aria-label": l }, /* @__PURE__ */ e.createElement(f, { as: "ul" }, e.Children.map(t, (s, p) => /* @__PURE__ */ e.createElement("li", { key: p }, s)))));
};
o.defaultProps = {
  label: "pagination"
};
o.propTypes = {
  activePage: r.number.isRequired,
  children: r.node.isRequired,
  label: r.string,
  pageCount: r.number.isRequired
};
export {
  o as Pagination
};
