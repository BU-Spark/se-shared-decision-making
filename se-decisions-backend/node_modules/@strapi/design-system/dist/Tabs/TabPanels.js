import d, { Children as s, cloneElement as c } from "react";
import l from "prop-types";
import { useTabs as b } from "./TabsContext.js";
const m = ({ children: e, ...t }) => {
  const { id: r, selectedTabIndex: a } = b(), p = s.toArray(e).map((o, n) => c(o, { id: `${r}-${n}` })).filter((o, n) => n === a);
  return /* @__PURE__ */ d.createElement("div", { ...t }, p);
};
m.propTypes = {
  children: l.node.isRequired
};
const i = ({ id: e, ...t }) => {
  const r = `${e}-tab`, a = `${e}-tabpanel`;
  return /* @__PURE__ */ d.createElement("div", { id: a, role: "tabpanel", tabIndex: 0, "aria-labelledby": r, ...t });
};
i.defaultProps = {
  id: void 0
};
i.propTypes = {
  id: l.string
};
export {
  i as TabPanel,
  m as TabPanels
};
