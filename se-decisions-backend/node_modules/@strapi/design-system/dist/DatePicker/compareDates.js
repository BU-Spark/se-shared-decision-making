const r = (e, t) => !e || !t ? !1 : e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
export {
  r as isDateEqual
};
