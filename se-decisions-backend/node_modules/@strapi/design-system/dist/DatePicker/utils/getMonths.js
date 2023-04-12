const o = () => {
  const t = new Intl.DateTimeFormat(void 0, { month: "long" }).format;
  return Array(12).fill(null).map((e, n) => t(new Date(1970, n, 1)));
};
export {
  o as getMonths
};
