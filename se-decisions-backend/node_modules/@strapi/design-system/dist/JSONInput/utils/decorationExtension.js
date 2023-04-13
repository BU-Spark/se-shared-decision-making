import { StateEffect as o, StateField as d } from "@codemirror/state";
import { Decoration as i, EditorView as a } from "@codemirror/view";
const n = o.define(), s = o.define(), l = i.mark({
  attributes: { style: "background-color: yellow; color: black" }
}), m = d.define({
  create() {
    return i.none;
  },
  update(r, t) {
    return r = r.map(t.changes), t.effects.forEach((e) => {
      e.is(n) ? r = r.update({
        add: e.value,
        sort: !0
      }) : e.is(s) && (r = r.update({ filter: e.value }));
    }), r;
  },
  provide: (r) => a.decorations.from(r)
});
export {
  n as addMarks,
  s as filterMarks,
  l as lineHighlightMark,
  m as markField
};
