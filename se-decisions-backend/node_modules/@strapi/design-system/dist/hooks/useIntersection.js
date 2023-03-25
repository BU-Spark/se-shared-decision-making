import { useEffect as m } from "react";
import { useCallbackRef as p } from "@radix-ui/react-use-callback-ref";
const E = (t, s, { selectorToWatch: n, skipWhen: r = !1 }) => {
  const e = p(s);
  m(() => {
    if (r)
      return;
    const u = {
      root: t.current,
      rootMargin: "0px"
    }, f = (g) => {
      g.forEach((i) => {
        i.isIntersecting && t.current.scrollHeight > t.current.clientHeight && e(i);
      });
    }, o = new IntersectionObserver(f, u), c = t.current.querySelector(n);
    return c && o.observe(c), () => {
      o.disconnect();
    };
  }, [r, e, n, t]);
};
export {
  E as useIntersection
};
