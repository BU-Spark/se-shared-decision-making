import e from "react";
import p from "prop-types";
import { OptGroup as f } from "./OptGroup.js";
import { Option as a } from "./Option.js";
import { Select as n } from "./Select.js";
const c = ({ options: u, ...i }) => /* @__PURE__ */ e.createElement(n, { multi: !0, ...i }, u.map(
  ({ label: t, value: o, children: m }) => m ? /* @__PURE__ */ e.createElement(f, { key: t, label: t }, m?.map((r) => /* @__PURE__ */ e.createElement(a, { key: r.value, value: r.value }, r.label))) : /* @__PURE__ */ e.createElement(a, { key: o, value: o }, t)
));
c.propTypes = {
  options: p.arrayOf(p.object).isRequired
};
export {
  c as MultiSelectNested
};
