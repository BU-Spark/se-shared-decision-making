"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const y=require("react"),g=require("prop-types"),m=require("styled-components"),r=require("../Box/Box.cjs"),b=require("../DismissibleLayer/DismissibleLayer.cjs"),q=require("../Flex/Flex.cjs"),h=require("../FocusTrap/FocusTrap.cjs"),x=require("../helpers/setOpacity.cjs"),D=require("../hooks/useId.cjs"),T=require("../hooks/useLockScroll.cjs"),j=require("../Portal/Portal.cjs"),E=require("../Typography/Typography.cjs"),s=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=s(y),a=s(g),l=s(m),P=l.default(r.Box)`
  inset: 0;
  background: ${({theme:e})=>x.setOpacity(e.colors.neutral800,.2)};
`,_=l.default(r.Box)`
  max-width: ${412/16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`,F=l.default(q.Flex)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,o=({onClose:e,title:n,as:c,isOpen:i,id:d,...p})=>{const f=D.useId(d);if(T(i),!i)return null;const u=`${f}-label`;return t.default.createElement(j.Portal,null,t.default.createElement(P,{padding:8,position:"fixed",zIndex:4},t.default.createElement(h.FocusTrap,null,t.default.createElement(b.DismissibleLayer,{onEscapeKeyDown:e,onPointerDownOutside:e},t.default.createElement(_,{"aria-labelledby":u,"aria-modal":!0,background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog"},t.default.createElement(F,{padding:6,justifyContent:"center"},t.default.createElement(E.Typography,{variant:"beta",as:c||"h2",id:u},n)),t.default.createElement(r.Box,{...p}))))))};o.displayName="Dialog";o.defaultProps={as:"h2",id:void 0};o.propTypes={as:a.default.string,id:a.default.oneOfType([a.default.string,a.default.number]),isOpen:a.default.bool.isRequired,onClose:a.default.func.isRequired,title:a.default.string.isRequired};exports.Dialog=o;
