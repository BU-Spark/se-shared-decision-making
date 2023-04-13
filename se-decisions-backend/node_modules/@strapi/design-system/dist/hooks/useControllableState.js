import * as r from "react";
import { useCallbackRef as i } from "@radix-ui/react-use-callback-ref";
function R({ prop: n, defaultProp: u, onChange: c = () => {
} }) {
  const [t, e] = m({ defaultProp: u, onChange: c }), o = n !== void 0, l = typeof n == "function" ? n(t) : n, d = o ? l : t, f = i(c), C = r.useCallback((s) => {
    if (o) {
      const a = typeof s == "function" ? s(l) : s;
      a !== l && (f(a), e(s));
    } else
      e(s);
  }, [o, l, e, f]);
  return [d, C];
}
function m({ defaultProp: n, onChange: u }) {
  const c = r.useState(n), [t] = c, e = r.useRef(t), o = i(u);
  return r.useEffect(() => {
    e.current !== t && (o(t), e.current = t);
  }, [t, e, o]), c;
}
export {
  R as useControllableState
};
