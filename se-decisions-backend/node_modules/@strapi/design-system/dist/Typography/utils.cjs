"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("./constants.cjs"),n=({ellipsis:t=!1})=>t&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,s=({variant:t=e.OMEGA,theme:i})=>{switch(t){case e.ALPHA:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[5]};
        line-height: ${i.lineHeights[2]};
      `;case e.BETA:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[4]};
        line-height: ${i.lineHeights[1]};
      `;case e.DELTA:return`
        font-weight: ${i.fontWeights.semiBold};
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[2]};
      `;case e.EPSILON:return`
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[6]};
      `;case e.OMEGA:return`
        font-size: ${i.fontSizes[2]};
        line-height: ${i.lineHeights[4]};
      `;case e.PI:return`
        font-size: ${i.fontSizes[1]};
        line-height: ${i.lineHeights[3]};
      `;case e.SIGMA:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[0]};
        line-height: ${i.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${i.fontSizes[2]};
      `}},o=({theme:t,textColor:i})=>t.colors[i||"neutral800"];exports.ellipsisStyle=n;exports.handleColor=o;exports.variantStyle=s;
