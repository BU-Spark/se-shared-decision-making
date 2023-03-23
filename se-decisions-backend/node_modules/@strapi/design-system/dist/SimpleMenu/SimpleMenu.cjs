"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react"),M=require("@radix-ui/react-use-callback-ref"),z=require("@strapi/icons"),U=require("prop-types"),H=require("react-router-dom"),G=require("styled-components"),q=require("./utils.cjs"),b=require("../Box/Box.cjs"),j=require("../Button/Button.cjs"),J=require("../Flex/Flex.cjs"),s=require("../helpers/keyboardKeys.cjs"),Q=require("../hooks/useId.cjs"),X=require("../Link/Link.cjs"),w=require("../Popover/Popover.cjs"),T=require("../Typography/Typography.cjs"),B=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},o=B(a),t=B(U),E=B(G),Y=E.default.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${q.getOptionStyle}
`,Z=E.default(H.NavLink)`
  text-decoration: none;
  ${q.getOptionStyle}
`,ee=E.default(X.Link)`
  /* Removing Link hover effect */
  &:hover {
    color: currentColor;
  }

  &:focus-visible {
    /* Removing Link focus-visible after properties and reset to global outline */
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
    &:after {
      content: none;
    }
  }

  ${q.getOptionStyle}
`,te=E.default.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`,ne=E.default(j.Button)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[3]}`};
`,I=({children:e,onClick:h,to:u,isFocused:l,href:c,...x})=>{const d=a.useRef();a.useEffect(()=>{l&&d.current&&d.current.focus()},[l]);const i={tabIndex:l?0:-1,ref:d,role:"menuitem",...x},f=v=>{(v.key===s.KeyboardKeys.SPACE||v.key===s.KeyboardKeys.ENTER)&&h()};return u&&!c?o.default.createElement(Z,{to:u,...i},o.default.createElement(b.Box,{padding:2},o.default.createElement(T.Typography,null,e))):c&&!u?o.default.createElement(ee,{isExternal:!0,href:c,...i},o.default.createElement(b.Box,{padding:2},o.default.createElement(T.Typography,null,e))):o.default.createElement(Y,{onKeyDown:f,onMouseDown:h,type:"button",...i},o.default.createElement(b.Box,{padding:2},o.default.createElement(T.Typography,null,e)))};I.defaultProps={as:void 0,href:void 0,isFocused:!1,onClick(){},to:void 0};I.propTypes={as:t.default.elementType,children:t.default.node.isRequired,href:t.default.string,isFocused:t.default.bool,onClick:t.default.func,to:t.default.string};const g=({label:e,children:h,id:u,as:l,onOpen:c=()=>{},onClose:x=()=>{},size:d,popoverPlacement:i,onReachEnd:f,...v})=>{const p=a.useRef(),K=Q.useId(u),R=a.useRef(!1),[y,m]=a.useState(!1),[P,C]=a.useState(0),k=a.Children.toArray(h),L=d==="S"?ne:j.Button,_=l||L,O=!!f&&typeof f=="function";a.useEffect(()=>{if(["string","number"].includes(typeof e)){const n=k.findIndex(r=>r.props.children===e);n!==-1&&C(n)}},[e]);const S=M.useCallbackRef(c),D=M.useCallbackRef(x);a.useEffect(()=>{R?.current?y?S():D():R.current=!0},[R,D,S,y]),a.useEffect(()=>{o.default.isValidElement(e)&&P===-1&&p.current.focus()},[e,P]);const $=n=>{y&&(n.key===s.KeyboardKeys.ESCAPE&&(n.stopPropagation(),m(!1),p.current.focus()),n.key===s.KeyboardKeys.DOWN&&C(r=>r===k.length-1?0:r+1),n.key===s.KeyboardKeys.UP&&C(r=>r===0?k.length-1:r-1))},F=n=>{(n.key===s.KeyboardKeys.ENTER||n.key===s.KeyboardKeys.SPACE)&&m(r=>!r)},A=n=>{n.preventDefault(),n.currentTarget.contains(n.relatedTarget)||m(!1)},N=n=>{n.preventDefault(),m(r=>!r)},V=()=>{O&&f()},W=k.map((n,r)=>o.default.createElement(J.Flex,{as:"li",key:r,justifyContent:"center",role:"menuitem"},a.cloneElement(n,{onClick(){n.props.onClick(),m(!1),p.current.focus()},isFocused:P===r})));return o.default.createElement("div",{onKeyDown:$},o.default.createElement(_,{label:o.default.isValidElement(e)?null:e,"aria-haspopup":!0,"aria-expanded":y,"aria-controls":K,onKeyDown:F,onMouseDown:N,ref:p,type:"button",variant:"ghost",endIcon:o.default.createElement(te,null,o.default.createElement(z.CarretDown,{"aria-hidden":!0})),...v},e),y&&o.default.createElement(w.Popover,{onBlur:A,placement:i,source:p,onReachEnd:V,intersectionId:O?`popover-${K}`:void 0,spacing:4},o.default.createElement(b.Box,{role:"menu",as:"ul",padding:1,id:K},W)))};g.defaultProps={as:void 0};g.displayName="SimpleMenu";g.defaultProps={id:void 0,onOpen:void 0,onClose:void 0,onReachEnd:void 0,popoverPlacement:"bottom-start",size:"M"};g.propTypes={as:t.default.any,children:t.default.oneOfType([t.default.arrayOf(t.default.node),t.default.node]).isRequired,id:t.default.string,label:t.default.oneOfType([t.default.string,t.default.number,t.default.element]).isRequired,onClose:t.default.func,onOpen:t.default.func,onReachEnd:t.default.func,popoverPlacement:t.default.oneOf(w.POPOVER_PLACEMENTS),size:t.default.oneOf(["S","M"])};exports.MenuItem=I;exports.SimpleMenu=g;
