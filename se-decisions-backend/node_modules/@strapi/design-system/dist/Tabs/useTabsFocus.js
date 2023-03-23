import { useRef as c, useEffect as f } from "react";
import { useCallbackRef as s } from "@radix-ui/react-use-callback-ref";
const i = (t, o) => {
  const e = c(null), r = c(null), u = s(o);
  return f(() => {
    if (!!e.current) {
      if (r.current) {
        const n = e.current.querySelector('[tabindex="0"]');
        n && (n.focus(), u(t));
      }
      r.current || (r.current = !0);
    }
  }, [t, u]), e;
};
export {
  i as useTabsFocus
};
