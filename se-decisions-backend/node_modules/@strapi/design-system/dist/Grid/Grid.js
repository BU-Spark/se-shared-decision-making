import * as t from "react";
import o from "prop-types";
import n from "styled-components";
import { GridContext as i } from "./GridContext.js";
import { Box as s } from "../Box/Box.js";
import d from "../helpers/handleResponsiveValues.js";
const f = n(s)`
  display: grid;
  grid-template-columns: repeat(${({ gridCols: r }) => r}, 1fr);
  ${({ theme: r, gap: e }) => d("gap", e, r)}
`, p = ({ gap: r, gridCols: e, ...m }) => {
  const a = t.useMemo(() => ({ gap: r, gridCols: e }), [r, e]);
  return /* @__PURE__ */ t.createElement(i.Provider, { value: a }, /* @__PURE__ */ t.createElement(f, { gap: r, gridCols: e, ...m }));
};
p.defaultProps = {
  gap: 0,
  gridCols: 12
};
p.propTypes = {
  gap: o.oneOfType([o.number, o.arrayOf(o.number)]),
  gridCols: o.number
};
export {
  p as Grid
};
