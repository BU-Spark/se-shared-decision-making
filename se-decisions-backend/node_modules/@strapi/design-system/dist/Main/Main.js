import i from "react";
import l from "prop-types";
import a from "styled-components";
const r = a.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, e = ({ labelledBy: o, ...t }) => {
  const n = o || "main-content-title";
  return /* @__PURE__ */ i.createElement(r, { "aria-labelledby": n, id: "main-content", tabIndex: -1, ...t });
};
e.defaultProps = {
  labelledBy: void 0
};
e.propTypes = {
  labelledBy: l.string
};
export {
  e as Main
};
