import { jsx as e } from "react/jsx-runtime";
import { useMemo as a } from "react";
import { CardContext as i } from "./CardContext.js";
import { Box as l } from "../Box/Box.js";
import { useId as n } from "../hooks/useId.js";
const p = ({
  id: o,
  ...t
}) => {
  const r = n(o), d = a(() => ({
    id: r
  }), [r]);
  return e(i.Provider, {
    value: d,
    children: e(l, {
      id: o,
      tabIndex: 0,
      hasRadius: !0,
      background: "neutral0",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "neutral150",
      shadow: "tableShadow",
      as: "article",
      "aria-labelledby": `${r}-title`,
      ...t
    })
  });
};
export {
  p as Card
};
