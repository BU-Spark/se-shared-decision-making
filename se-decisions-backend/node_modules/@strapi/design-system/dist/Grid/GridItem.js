import o from "react";
import e from "prop-types";
import n from "styled-components";
import { useGrid as a } from "./GridContext.js";
import { Box as l } from "../Box/Box.js";
const u = n.div`
  grid-column: span ${({ col: r }) => r};
  max-width: 100%;

  ${({ theme: r }) => r.mediaQueries.tablet} {
    grid-column: span ${({ s: r }) => r};
  }

  ${({ theme: r }) => r.mediaQueries.mobile} {
    grid-column: span ${({ xs: r }) => r};
  }
`, m = ({ col: r, xs: t, s: i, ...p }) => {
  const { gap: s, gridCols: d } = a();
  return /* @__PURE__ */ o.createElement(u, { gap: s, gridCols: d, col: r, xs: t, s: i }, /* @__PURE__ */ o.createElement(l, { ...p }));
};
m.defaultProps = {
  col: void 0,
  s: void 0,
  xs: void 0
};
m.propTypes = {
  col: e.number,
  s: e.number,
  xs: e.number
};
export {
  m as GridItem
};
