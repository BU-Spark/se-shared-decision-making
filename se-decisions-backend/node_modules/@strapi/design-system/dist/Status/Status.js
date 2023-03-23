import t from "react";
import e from "prop-types";
import l from "styled-components";
import { Box as f } from "../Box/Box.js";
import { Flex as $ } from "../Flex/Flex.js";
import { Typography as h } from "../Typography/Typography.js";
const b = l.div`
  margin-right: ${({ theme: o }) => o.spaces[3]};
  width: ${6 / 16}rem;
  height: ${6 / 16}rem;
  border-radius: 50%;
  background: ${({ theme: o, backgroundColor: r }) => o.colors[r]};
`, y = l(f)`
  ${h} {
    color: ${({ theme: o, textColor: r }) => o.colors[r]};
  }
`, p = ({ variant: o, showBullet: r, size: n, children: a, ...i }) => {
  const c = `${o}100`, m = `${o}200`, u = `${o}600`, g = `${o}600`, s = n === "S" ? 2 : 5, d = n === "S" ? 1 : 4;
  return /* @__PURE__ */ t.createElement(
    y,
    {
      borderColor: m,
      textColor: g,
      background: c,
      hasRadius: !0,
      paddingTop: d,
      paddingBottom: d,
      paddingLeft: s,
      paddingRight: s,
      ...i
    },
    r ? /* @__PURE__ */ t.createElement($, null, /* @__PURE__ */ t.createElement(b, { backgroundColor: u }), a) : a
  );
};
p.defaultProps = {
  showBullet: !0,
  size: "M",
  variant: "primary"
};
p.propTypes = {
  children: e.node.isRequired,
  showBullet: e.bool,
  size: e.oneOf(["S", "M"]),
  variant: e.oneOf(["alternative", "danger", "neutral", "primary", "secondary", "success", "warning"])
};
export {
  p as Status
};
