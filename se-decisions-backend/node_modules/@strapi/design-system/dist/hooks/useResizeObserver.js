import { useLayoutEffect as f } from "react";
import { useCallbackRef as s } from "@radix-ui/react-use-callback-ref";
const c = (e, i) => {
  const t = s(i);
  f(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};
export {
  c as useResizeObserver
};
