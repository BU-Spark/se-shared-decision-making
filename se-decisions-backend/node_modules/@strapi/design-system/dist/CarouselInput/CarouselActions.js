import r from "react";
import { Flex as n } from "../Flex/Flex.js";
const m = ({ horizontal: t = !0, spacing: e = 1, ...o }) => /* @__PURE__ */ r.createElement(
  n,
  {
    justifyContent: "center",
    gap: e,
    direction: t ? "row" : "column",
    alignItems: t ? "center" : "stretch",
    position: "absolute",
    width: "100%",
    bottom: 1,
    ...o
  }
);
export {
  m as CarouselActions
};
