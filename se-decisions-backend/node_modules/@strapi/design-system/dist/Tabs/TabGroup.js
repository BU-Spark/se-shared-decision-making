import * as e from "react";
import t from "prop-types";
import { TabsContext as v } from "./TabsContext.js";
import { useId as x } from "../hooks/useId.js";
const i = e.forwardRef(
  ({ id: f, initialSelectedTabIndex: a, label: n, onTabChange: o, variant: s, ...l }, u) => {
    const p = x(f), c = e.Children.toArray(l.children).find((d) => d.type.displayName === "Tabs");
    let r = a || 0;
    c && a === void 0 && (r = c.props.children.findIndex((d) => !d.props.disabled));
    const [m, b] = e.useState(r === -1 ? 0 : r);
    e.useImperativeHandle(u, () => ({
      _handlers: { setSelectedTabIndex: b }
    }));
    const T = e.useMemo(
      () => ({ id: p, selectedTabIndex: m, selectTabIndex: b, label: n, variant: s, onTabChange: o }),
      [n, o, m, p, s]
    );
    return /* @__PURE__ */ e.createElement(v.Provider, { value: T }, /* @__PURE__ */ e.createElement("div", { ...l }));
  }
);
i.displayName = "TabGroup";
i.defaultProps = {
  id: void 0,
  initialSelectedTabIndex: void 0,
  onTabChange() {
  },
  variant: void 0
};
i.propTypes = {
  children: t.node.isRequired,
  id: t.string,
  initialSelectedTabIndex: t.number,
  label: t.string.isRequired,
  onTabChange: t.func,
  variant: t.oneOf(["simple"])
};
export {
  i as TabGroup
};
