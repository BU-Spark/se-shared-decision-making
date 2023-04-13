import t from "react";
import r from "prop-types";
import o from "styled-components";
import { Flex as c } from "../Flex/Flex.js";
import { RawTd as p, RawTh as m } from "../RawTable/RawCell.js";
const l = o(p)`
  vertical-align: middle;
  text-align: left;
  color: ${({ theme: e }) => e.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`, s = o.span`
  svg {
    height: ${4 / 16}rem;
  }
`, n = ({ children: e, action: a, ...i }) => /* @__PURE__ */ t.createElement(l, { as: m, ...i }, /* @__PURE__ */ t.createElement(c, null, e, /* @__PURE__ */ t.createElement(s, null, a)));
n.defaultProps = {
  action: void 0
};
n.propTypes = {
  action: r.node,
  children: r.node.isRequired
};
const T = (e) => /* @__PURE__ */ t.createElement(l, { ...e });
export {
  T as Td,
  n as Th
};
