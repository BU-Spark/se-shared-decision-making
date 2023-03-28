import i from "styled-components";
import { Box as r } from "../Box/Box.js";
import t from "../helpers/handleResponsiveValues.js";
const n = {
  direction: !0
}, a = i(r).withConfig({
  shouldForwardProp: (e, o) => !n[e] && o(e)
})`
  align-items: ${({
  alignItems: e = "center"
}) => e};
  display: ${({
  inline: e
}) => e ? "inline-flex" : "flex"};
  flex-direction: ${({
  direction: e = "row"
}) => e};
  flex-shrink: ${({
  shrink: e
}) => e};
  flex-wrap: ${({
  wrap: e
}) => e};
  ${({
  gap: e,
  theme: o
}) => t("gap", e, o)};
  justify-content: ${({
  justifyContent: e
}) => e};
`;
export {
  a as Flex
};
