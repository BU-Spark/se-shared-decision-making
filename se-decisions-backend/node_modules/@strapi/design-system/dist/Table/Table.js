import r, { useRef as b, useState as g, useEffect as m } from "react";
import l from "prop-types";
import a from "styled-components";
import { Box as n } from "../Box/Box.js";
import { RawTable as w } from "../RawTable/RawTable.js";
const T = a(n)`
  overflow: hidden;
  border: 1px solid ${({ theme: t }) => t.colors.neutral150};
`, x = a(w)`
  width: 100%;
  white-space: nowrap;
`, R = a(n)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: t }) => t === "both" || t === "left" ? "''" : void 0};
    box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
    width: ${({ theme: t }) => t.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: t }) => t === "both" || t === "right" ? "''" : void 0};
    box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
    width: ${({ theme: t }) => t.spaces[2]};
    right: 0;
    top: 0;
  }
`, S = a(n)`
  overflow-x: auto;
`, s = ({ colCount: t, rowCount: d, footer: c, ...f }) => {
  const i = b(null), [h, o] = g(), u = (e) => {
    const p = e.target.scrollWidth - e.target.clientWidth;
    if (e.target.scrollLeft === 0) {
      o("right");
      return;
    }
    if (e.target.scrollLeft === p) {
      o("left");
      return;
    }
    e.target.scrollLeft > 0 && o("both");
  };
  return m(() => {
    i.current.scrollWidth > i.current.clientWidth && o("right");
  }, []), /* @__PURE__ */ r.createElement(T, { shadow: "tableShadow", hasRadius: !0, background: "neutral0" }, /* @__PURE__ */ r.createElement(R, { overflowing: h, position: "relative" }, /* @__PURE__ */ r.createElement(S, { ref: i, onScroll: u, paddingLeft: 6, paddingRight: 6 }, /* @__PURE__ */ r.createElement(x, { colCount: t, rowCount: d, ...f }))), c);
};
s.defaultProps = {
  footer: void 0
};
s.propTypes = {
  colCount: l.number.isRequired,
  footer: l.node,
  rowCount: l.number.isRequired
};
export {
  s as Table
};
