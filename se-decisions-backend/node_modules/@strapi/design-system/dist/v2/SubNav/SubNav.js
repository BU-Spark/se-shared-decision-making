import t from "react";
import e from "prop-types";
import i from "styled-components";
import { Grid as a } from "../../Grid/Grid.js";
import "../../Grid/GridItem.js";
const p = `${232 / 16}rem`, s = i(a)`
  width: ${p};
  background: ${({ theme: r }) => r.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme: r }) => r.colors.neutral200};
  z-index: 1;
`, l = ({ ariaLabel: r, ...o }) => /* @__PURE__ */ t.createElement(s, { "aria-label": r, as: "nav", ...o });
l.propTypes = {
  ariaLabel: e.string.isRequired
};
export {
  l as SubNav,
  p as subNavWidth
};
