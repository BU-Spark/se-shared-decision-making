"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react"),n=require("prop-types"),d=require("styled-components"),p=require("../Box/Box.cjs"),f=require("../Tooltip/Tooltip.cjs"),y=require("../Typography/utils.cjs"),r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=r(a),s=r(n),g=r(d),l=g.default(p.Box)`
  height: 100%;
  ${y.ellipsisStyle({ellipsis:!0})}
`,o=e=>{const[u,i]=a.useState(!1),c=()=>{i(!0)};return u?t.default.createElement(f.Tooltip,{description:e.alt??""},t.default.createElement(l,{as:"img",...e})):t.default.createElement(l,{as:"img",...e,onError:c})};o.defaultProps={src:void 0,alt:void 0};o.propTypes={alt:s.default.string,src:s.default.string};exports.CarouselImage=o;
