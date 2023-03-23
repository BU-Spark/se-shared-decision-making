"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react"),D=require("@radix-ui/react-use-callback-ref"),z=require("@strapi/icons"),U=require("prop-types"),H=require("styled-components"),T=require("./utils.cjs"),G=require("../../BaseLink/BaseLink.cjs"),k=require("../../Box/Box.cjs"),M=require("../../Button/Button.cjs"),J=require("../../Flex/Flex.cjs"),u=require("../../helpers/keyboardKeys.cjs"),Q=require("../../hooks/useId.cjs"),j=require("../../Popover/Popover.cjs"),C=require("../../Typography/Typography.cjs"),X=require("../Link/Link.cjs"),q=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},o=q(a),t=q(U),y=q(H),Y=y.default.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${T.getOptionStyle}
`,Z=y.default(G.BaseLink)`
  text-decoration: none;
  ${T.getOptionStyle}
`,ee=y.default(X.Link)`
  &:focus-visible {
    /* Removes Link focus-visible after properties and reset to global outline */
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
    &:after {
      content: none;
    }
  }
  /* Removes Link svg color */
  svg path {
    fill: currentColor;
  }
  ${T.getOptionStyle}
`,te=y.default.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`,ne=y.default(M.Button)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[3]}`};
`,I=({as:e,children:i,onClick:E,isFocused:c,isLink:h,isExternal:b,...x})=>{const d=a.useRef();a.useEffect(()=>{c&&d.current&&d.current.focus()},[c]);const l={tabIndex:c?0:-1,ref:d,role:"menuitem",...x},v=r=>{(r.key===u.KeyboardKeys.SPACE||r.key===u.KeyboardKeys.ENTER)&&E()};return h?o.default.createElement(Z,{as:e,...l},o.default.createElement(k.Box,{padding:2},o.default.createElement(C.Typography,null,i))):b?o.default.createElement(ee,{isExternal:!0,...l},o.default.createElement(k.Box,{padding:2},o.default.createElement(C.Typography,null,i))):o.default.createElement(Y,{onKeyDown:v,onMouseDown:E,type:"button",...l},o.default.createElement(k.Box,{padding:2},o.default.createElement(C.Typography,null,i)))};I.defaultProps={as:void 0,onClick(){},isExternal:!1,isFocused:!1,isLink:!1};I.propTypes={as:t.default.elementType,children:t.default.node.isRequired,isExternal:t.default.bool,isFocused:t.default.bool,isLink:t.default.bool,onClick:t.default.func};const m=({label:e,children:i,id:E,as:c,onOpen:h=()=>{},onClose:b=()=>{},size:x,popoverPlacement:d,onReachEnd:l,...v})=>{const r=a.useRef(),B=Q.useId(E),K=a.useRef(!1),[f,p]=a.useState(!1),[P,R]=a.useState(0),g=a.Children.toArray(i),w=x==="S"?ne:M.Button,_=c||w,O=!!l&&typeof l=="function";a.useEffect(()=>{if(["string","number"].includes(typeof e)){const n=g.findIndex(s=>s.props.children===e);n!==-1&&R(n)}},[e]);const S=D.useCallbackRef(h),L=D.useCallbackRef(b);a.useEffect(()=>{K?.current?f?S():L():K.current=!0},[K,f,S,L]),a.useEffect(()=>{o.default.isValidElement(e)&&P===-1&&r.current.focus()},[e,P]);const $=n=>{f&&(n.key===u.KeyboardKeys.ESCAPE&&(n.stopPropagation(),p(!1),r.current.focus()),n.key===u.KeyboardKeys.DOWN&&R(s=>s===g.length-1?0:s+1),n.key===u.KeyboardKeys.UP&&R(s=>s===0?g.length-1:s-1))},F=n=>{(n.key===u.KeyboardKeys.ENTER||n.key===u.KeyboardKeys.SPACE)&&p(s=>!s)},A=n=>{n.preventDefault(),n.currentTarget.contains(n.relatedTarget)||p(!1)},N=n=>{n.preventDefault(),p(s=>!s)},V=()=>{O&&l()},W=g.map((n,s)=>o.default.createElement(J.Flex,{as:"li",key:s,justifyContent:"center",role:"menuitem"},a.cloneElement(n,{onClick(){n.props.onClick(),p(!1),r.current.focus()},isFocused:P===s})));return o.default.createElement("div",{onKeyDown:$},o.default.createElement(_,{label:o.default.isValidElement(e)?null:e,"aria-haspopup":!0,"aria-expanded":f,"aria-controls":B,onKeyDown:F,onMouseDown:N,ref:r,type:"button",variant:"ghost",endIcon:o.default.createElement(te,null,o.default.createElement(z.CarretDown,{"aria-hidden":!0})),...v},e),f&&o.default.createElement(j.Popover,{onBlur:A,placement:d,source:r,onReachEnd:V,intersectionId:O?`popover-${B}`:void 0,spacing:4},o.default.createElement(k.Box,{role:"menu",as:"ul",padding:1,id:B},W)))};m.defaultProps={as:void 0};m.displayName="SimpleMenu";m.defaultProps={id:void 0,onClose(){},onOpen(){},onReachEnd:void 0,popoverPlacement:"bottom-start",size:"M"};m.propTypes={as:t.default.any,children:t.default.oneOfType([t.default.arrayOf(t.default.node),t.default.node]).isRequired,id:t.default.string,label:t.default.oneOfType([t.default.string,t.default.number,t.default.element]).isRequired,onClose:t.default.func,onOpen:t.default.func,onReachEnd:t.default.func,popoverPlacement:t.default.oneOf(j.POPOVER_PLACEMENTS),size:t.default.oneOf(["S","M"])};exports.MenuItem=I;exports.SimpleMenu=m;
