import { isArray as e } from "./arrays.js";
function j(n, s) {
  return typeof n == "string" ? !1 : s in n;
}
function f(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function u(n, ...s) {
  if (!s.length)
    return n;
  const i = s.shift();
  if (i === void 0)
    return n;
  const o = f(n) && f(i), b = e(n) && e(i);
  if (o || b)
    for (const r of Object.keys(i)) {
      const c = f(i[r]), t = e(i[r]);
      c || t ? (n[r] || Object.assign(n, { [r]: c ? {} : [] }), u(n[r], i[r])) : o ? Object.assign(n, { [r]: i[r] }) : n.push(i[r]);
    }
  return u(n, ...s);
}
export {
  j as isKeyOf,
  f as isObject,
  u as mergeDeep
};
