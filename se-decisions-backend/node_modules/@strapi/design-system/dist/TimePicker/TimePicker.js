import { jsx as i } from "react/jsx-runtime";
import { Clock as $ } from "@strapi/icons";
import g from "styled-components";
import { Flex as M } from "../Flex/Flex.js";
import { useId as b } from "../hooks/useId.js";
import { Select as C } from "../Select/Select.js";
import { Option as I } from "../Select/Option.js";
import "../Select/OptGroup.js";
import "../Select/MultiSelectNested.js";
import "../Select/SelectList.js";
const S = ({
  id: l,
  value: m,
  step: u = 15,
  ...p
}) => {
  const a = b(l), h = 24, o = [];
  let r = 0;
  for (let t = 0; t < h; t++)
    for (r = 0; r < 60; )
      o.push(`${t < 10 ? `0${t}` : t}:${r < 10 ? `0${r}` : r}`), r += u;
  return i(C, {
    id: a,
    placeholder: "--:--",
    value: m ? (() => {
      const [t, c] = m?.split(":") ?? [], d = o.reduce((e, n) => {
        const [s] = n.split(":");
        return Math.abs(s - t) < Math.abs(e - t) ? s : e;
      }, o[0].split(":")[0]), f = o.reduce((e, n) => {
        const s = n.split(":")[1];
        return Math.abs(s - c) < Math.abs(e - c) ? s : e;
      }, o[0].split(":")[1]);
      return `${d}:${f}`;
    })() : null,
    startIcon: i(v, {
      children: i($, {})
    }),
    ...p,
    children: o.map((t) => i(I, {
      value: t,
      children: t
    }, t))
  });
}, v = g(M)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({
  theme: l
}) => l.colors.neutral500};
  }
`;
export {
  S as TimePicker
};
