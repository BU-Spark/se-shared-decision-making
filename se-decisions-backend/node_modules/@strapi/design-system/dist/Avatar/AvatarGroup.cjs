"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("styled-components"),o=require("./constants.cjs"),s=require("../Flex/Flex.cjs"),a=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},l=a(t),r=l.default(s.Flex)`
  & > * + * {
    margin-left: -${o.avatarSize/2}px;
  }
`;exports.AvatarGroup=r;
