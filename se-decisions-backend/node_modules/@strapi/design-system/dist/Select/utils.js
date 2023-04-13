import n from "compute-scroll-into-view";
const d = (e, t) => {
  e.setAttribute("aria-activedescendant", t.getAttribute("id")), e.querySelectorAll('[role="option"]').forEach((c) => c.classList.remove("is-focused")), t.classList.add("is-focused"), n(t, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: c, top: o, left: s }) => {
    c.scrollTop = o, c.scrollLeft = s;
  });
}, l = (e) => {
  const t = e.getAttribute("aria-activedescendant");
  return e.querySelector(`#${t}`);
};
export {
  d as changeDescendant,
  l as getActiveDescendant
};
