import e, { useState as a } from "react";
import t from "prop-types";
import n from "styled-components";
import { Box as p } from "../Box/Box.js";
import { Tooltip as c } from "../Tooltip/Tooltip.js";
import { ellipsisStyle as f } from "../Typography/utils.js";
const o = n(p)`
  height: 100%;
  ${f({ ellipsis: !0 })}
`, s = (r) => {
  const [i, m] = a(!1), l = () => {
    m(!0);
  };
  return i ? /* @__PURE__ */ e.createElement(c, { description: r.alt ?? "" }, /* @__PURE__ */ e.createElement(o, { as: "img", ...r })) : /* @__PURE__ */ e.createElement(o, { as: "img", ...r, onError: l });
};
s.defaultProps = {
  src: void 0,
  alt: void 0
};
s.propTypes = {
  alt: t.string,
  src: t.string
};
export {
  s as CarouselImage
};
