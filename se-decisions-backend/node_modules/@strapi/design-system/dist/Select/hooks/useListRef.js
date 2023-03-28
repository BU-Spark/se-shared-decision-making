import { useRef as i, useEffect as c } from "react";
import { UpState as s, DownState as f } from "../constants.js";
import { changeDescendant as l } from "../utils.js";
const y = (r) => {
  const e = i(null);
  return c(() => {
    e.current.focus();
  }, []), c(() => {
    if (!e.current)
      return;
    const n = e.current.querySelector('[aria-selected="true"]'), o = e.current.querySelectorAll('[role="option"]');
    let t;
    n ? t = n : r === s.Keyboard ? t = o[o.length - 1] : r === f.Keyboard && (t = o[0]), t && (r === s.Keyboard || r === f.Keyboard) && l(e.current, t);
  }, []), e;
};
export {
  y as useListRef
};
