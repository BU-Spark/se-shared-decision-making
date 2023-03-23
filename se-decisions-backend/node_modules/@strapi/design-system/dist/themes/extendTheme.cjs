"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("./lightTheme/index.cjs"),r=require("../helpers/objects.cjs"),n=t=>`
${t}

The following is an example:


import { lightTheme, extendTheme } from '@strapi/design-system';

const myCustomTheme = extendTheme(lightTheme, {
    ${Object.keys(s.lightTheme).map(e=>`${e}: /* put the overrides for the ${e} key */,`).join(`
`)}
})
`,h=(t,e)=>{if(!r.isObject(t)){const o=n("The first argument should be an object and corresponds to the theme you want to extend.");throw new Error(o)}if(!r.isObject(e)){const o=n("The second argument should be an object and corresponds to the keys of the theme you want to override.");throw new Error(o)}return r.mergeDeep(t??{},e??{})};exports.extendTheme=h;
