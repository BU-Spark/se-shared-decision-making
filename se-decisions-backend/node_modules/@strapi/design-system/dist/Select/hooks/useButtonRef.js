import { useRef as e, useEffect as n } from "react";
import { DownState as f, UpState as c } from "../constants.js";
const m = (t) => {
  const u = e(null), o = e(null), r = e();
  return t && (r.current = t), n(() => {
    !o.current || t || (r.current === f.Keyboard || r.current === c.Keyboard) && u.current.focus();
  }, [t]), n(() => {
    o.current = !0;
  }, []), u;
};
export {
  m as useButtonRef
};
