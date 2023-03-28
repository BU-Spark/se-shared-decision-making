import * as e from "react";
import { createPortal as o } from "react-dom";
const a = ({
  children: r
}) => {
  const t = e.useRef(null), [u, n] = e.useState(!1);
  return e.useLayoutEffect(() => (t.current = document.createElement("div"), t.current.setAttribute("data-react-portal", "true"), document.body.appendChild(t.current), n(!0), () => {
    t.current?.remove();
  }), []), !u || !t.current ? null : o(r, t.current);
};
export {
  a as Portal
};
