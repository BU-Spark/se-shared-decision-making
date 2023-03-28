import l from "compute-scroll-into-view";
import { KeyboardKeys as r } from "../helpers/keyboardKeys.js";
const t = {
  Close: "Close",
  CloseSelect: "CloseSelect",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  PageDown: "PageDown",
  PageUp: "PageUp",
  Previous: "Previous",
  Select: "Select",
  Space: "Space",
  Type: "Type"
}, f = {
  Close: "Close",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  Previous: "Previous",
  Select: "Select",
  UpLevel: "UpLevel"
};
function d(e = [], n = null, i = []) {
  const o = String(n ?? "").toLowerCase();
  return o ? e.filter((s) => s.props.children.toString().toLowerCase().includes(o) && i.indexOf(s) < 0) : e;
}
function C(e, n) {
  if (!n && e === r.DOWN)
    return t.Open;
  if (e === r.DOWN)
    return t.Next;
  if (e === r.UP)
    return t.Previous;
  if (e === r.HOME)
    return t.First;
  if (e === r.END)
    return t.Last;
  if (e === r.ESCAPE)
    return t.Close;
  if (e === r.ENTER)
    return t.CloseSelect;
  if (e === r.BACKSPACE || e === r.CLEAR || e.length === 1)
    return t.Type;
}
function S(e, n, i) {
  switch (i) {
    case t.First:
      return 0;
    case t.Last:
      return n;
    case t.Previous:
      return Math.max(0, e - 1);
    case t.Next:
      return Math.min(n, e + 1);
    default:
      return e;
  }
}
function P(e) {
  l(e, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: i, top: o, left: s }) => {
    i.scrollTop = o, i.scrollLeft = s;
  });
}
export {
  t as MenuActions,
  f as TreeActions,
  d as filterOptions,
  C as getActionFromKey,
  S as getUpdatedIndex,
  P as maintainScrollVisibility
};
