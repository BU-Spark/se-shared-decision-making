import { isDateEqual as f } from "../compareDates.js";
const D = 7 * 6, w = (e, g) => {
  const i = new Date(e.getFullYear(), e.getMonth(), 1), l = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(), h = new Date(e.getFullYear(), e.getMonth(), 0).getDate(), r = i.getDay(), c = l + r, s = [];
  let a = 0, u = 0, n = 0, o;
  for (let t = 0; t < D; t++)
    t > 6 && t % 7 === 0 && n++, s[n] || (s[n] = []), t < r ? o = {
      date: new Date(e.getFullYear(), e.getMonth() - 1, h - r + t + 1),
      outsideMonth: !0
    } : t < c ? o = { date: new Date(e.getFullYear(), e.getMonth(), t - r + 1) } : o = {
      date: new Date(e.getFullYear(), e.getMonth() + 1, t - r - l + 1),
      outsideMonth: !0
    }, f(g, o.date) && (a = n + 1, u = s[n].length, o.isSelected = !0), s[n].push(o);
  return [s, a, u];
};
export {
  w as generateWeeks
};
