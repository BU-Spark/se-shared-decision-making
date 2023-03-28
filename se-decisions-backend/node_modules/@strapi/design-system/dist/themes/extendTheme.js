import { lightTheme as h } from "./lightTheme/index.js";
import { isObject as r, mergeDeep as m } from "../helpers/objects.js";
const n = (t) => `
${t}

The following is an example:


import { lightTheme, extendTheme } from '@strapi/design-system';

const myCustomTheme = extendTheme(lightTheme, {
    ${Object.keys(h).map((e) => `${e}: /* put the overrides for the ${e} key */,`).join(`
`)}
})
`, a = (t, e) => {
  if (!r(t)) {
    const o = n("The first argument should be an object and corresponds to the theme you want to extend.");
    throw new Error(o);
  }
  if (!r(e)) {
    const o = n("The second argument should be an object and corresponds to the keys of the theme you want to override.");
    throw new Error(o);
  }
  return m(t ?? {}, e ?? {});
};
export {
  a as extendTheme
};
