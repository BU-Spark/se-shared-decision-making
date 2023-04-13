import r from "react";
import t from "prop-types";
import { Option as m } from "./Option.js";
const o = ({ children: e, label: p, ...a }) => {
  const i = e.map((l) => l.props.value);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    m,
    {
      "data-opt-group": !0,
      "data-opt-group-children": i,
      "aria-label": `${p}, ${e.length} items`,
      ...a
    },
    p
  ), e);
};
o.propTypes = {
  children: t.arrayOf(t.node).isRequired,
  label: t.string.isRequired
};
o.displayName = "OptGroup";
export {
  o as OptGroup
};
