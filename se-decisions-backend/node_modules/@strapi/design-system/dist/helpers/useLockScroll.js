import { once as e, PREFIX as r } from "./deprecations.js";
import s from "../hooks/useLockScroll.js";
const c = e(console.warn), a = (...o) => (c(`${r} useLockScroll has moved. Please import it from "@strapi/design-system/hooks/useLockScroll"`), s(...o));
export {
  a as default
};
