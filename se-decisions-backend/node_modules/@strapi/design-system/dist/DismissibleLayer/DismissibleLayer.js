import y, { useRef as w, useEffect as a } from "react";
import { useCallbackRef as c } from "@radix-ui/react-use-callback-ref";
import r from "prop-types";
const i = ({ children: d, className: u, onEscapeKeyDown: l, onPointerDownOutside: m }) => {
  const n = w(null), o = c(l), s = c(m);
  return a(() => {
    const e = (t) => {
      t.key === "Escape" && o(t);
    };
    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
  }, [o]), a(() => {
    const e = (t) => {
      const p = n.current.closest("[data-react-portal]"), f = t.target.closest("[data-react-portal]");
      n.current && !n.current.contains(t.target) && p === f && s();
    };
    return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
  }, [s]), /* @__PURE__ */ y.createElement("div", { ref: n, className: u }, d);
};
i.defaultProps = {
  className: void 0
};
i.propTypes = {
  children: r.node.isRequired,
  className: r.string,
  onEscapeKeyDown: r.func.isRequired,
  onPointerDownOutside: r.func.isRequired
};
export {
  i as DismissibleLayer
};
