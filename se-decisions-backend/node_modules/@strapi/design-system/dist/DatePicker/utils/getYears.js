const E = (n, s) => {
  const t = new Date().getFullYear(), a = n?.getFullYear() ?? t - 200, A = s?.getFullYear() ?? t + 15, r = [];
  for (let e = a; e <= A; e++)
    r.push(e);
  return r;
};
export {
  E as getYears
};
