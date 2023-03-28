import { once as s, PREFIX as o } from "./deprecations.js";
import { useId as r } from "../hooks/useId.js";
const t = s(console.warn), n = (...e) => (t(`${o} useId has moved. Please import it from "@strapi/design-system/hooks/useId"`), r(...e));
export {
  n as useId
};
