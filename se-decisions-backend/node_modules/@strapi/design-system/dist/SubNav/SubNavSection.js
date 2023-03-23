import e, { useState as f, Children as h } from "react";
import t from "prop-types";
import b from "styled-components";
import { SubNavSectionLabel as E } from "./SubNavSectionLabel.js";
import { Badge as v } from "../Badge/Badge.js";
import { Box as l } from "../Box/Box.js";
import { Flex as S } from "../Flex/Flex.js";
import { useId as C } from "../hooks/useId.js";
const k = b(l)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral500};
    }
  }
`, p = ({ collapsable: r, label: d, badgeLabel: o, children: s, id: m }) => {
  const [n, c] = f(!0), a = C(m), u = () => {
    c((i) => !i);
  };
  return /* @__PURE__ */ e.createElement(S, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ e.createElement(k, { paddingLeft: 6, paddingTop: 1, paddingBottom: 1, paddingRight: 4 }, /* @__PURE__ */ e.createElement(l, { position: "relative", paddingRight: o ? 6 : 0 }, /* @__PURE__ */ e.createElement(
    E,
    {
      onClick: u,
      ariaExpanded: n,
      ariaControls: a,
      collapsable: r,
      label: d
    }
  ), o && /* @__PURE__ */ e.createElement(
    v,
    {
      backgroundColor: "neutral150",
      textColor: "neutral600",
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)"
    },
    o
  ))), (!r || n) && /* @__PURE__ */ e.createElement("ol", { id: a }, h.map(s, (i, g) => /* @__PURE__ */ e.createElement("li", { key: g }, i))));
};
p.defaultProps = {
  badgeLabel: null,
  children: void 0,
  collapsable: !1,
  id: void 0
};
p.propTypes = {
  badgeLabel: t.string,
  children: t.node,
  collapsable: t.bool,
  id: t.string,
  label: t.string.isRequired
};
export {
  p as SubNavSection
};
