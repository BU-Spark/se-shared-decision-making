(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[994],{58153:function(Dp,wr,g){"use strict";g.r(wr),g.d(wr,{App:function(){return da},default:function(){return fp}});var t=g(32735),ua=g(74758),ae=g(53038),h=g(43383),Se=g(27649),Be=g(82055),Fr=g(96709),Q=g(67879),ma=g(98978),Sr=g.n(ma),Qe=g(83983),C=e=>`content-manager.${e}`,We=g(74506),Te=g(60216),n=g.n(Te),Ar=(0,t.createContext)();function Qt({attributes:e,buttonData:r,children:o,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:u,relationsLayout:d,removeField:m,selectedItemName:f,setEditFieldToSelect:p,...y}){return t.createElement(Ar.Provider,{value:{attributes:e,buttonData:r,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:u,relationsLayout:d,removeField:m,selectedItemName:f,setEditFieldToSelect:p,...y}},o)}Qt.defaultProps={attributes:{},buttonData:[],goTo(){},layout:[],metadatas:{},moveItem(){},moveRow(){},onAddData(){},relationsLayout:[],removeField(){},selectedItemName:null,setEditFieldToSelect(){}},Qt.propTypes={attributes:n().object,buttonData:n().array,children:n().node.isRequired,goTo:n().func,layout:n().array,metadatas:n().object,moveItem:n().func,moveRow:n().func,onAddData:n().func,relationsLayout:n().array,removeField:n().func,selectedItemName:n().string,setEditFieldToSelect:n().func};var Or=Qt,Ce={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"},N=g(8471),w=g(87933),G=g(49372),Ae=g(47081),Ke=g(68625),Mt=g(35331),$r=e=>e.length>20?`${e.substring(0,20)}...`:e;const Kt=(0,N.ZP)(w.k)`
  height: ${({theme:e})=>e.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:e})=>e.spaces[3]};
  }
`,Zr=(0,N.ZP)(Kt)`
  padding: 0 ${({theme:e})=>e.spaces[3]};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,pa=(0,N.ZP)(w.k)`
  display: inline-flex;
  max-height: ${32/16}rem;
  opacity: ${({transparent:e})=>e?0:1};
  background-color: ${({theme:e,isSibling:r})=>r?e.colors.neutral100:e.colors.primary100};
  border: 1px solid
    ${({theme:e,isSibling:r})=>r?e.colors.neutral150:e.colors.primary200};

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:e,isSibling:r})=>r?void 0:e.colors.primary600};
    }
  }

  ${G.Z} {
    color: ${({theme:e,isSibling:r})=>r?void 0:e.colors.primary600};
  }

  ${Zr} {
    border-right: 1px solid
      ${({theme:e,isSibling:r})=>r?e.colors.neutral150:e.colors.primary200};
  }
`,Yt=({labelField:e,transparent:r,isSibling:o})=>{const s=$r(e);return t.createElement(pa,{hasRadius:!0,justifyContent:"space-between",transparent:r,isSibling:o},t.createElement(w.k,{gap:3},t.createElement(Zr,{alignItems:"center"},t.createElement(Ae.Z,null)),t.createElement(G.Z,{fontWeight:"bold"},s)),t.createElement(w.k,{paddingLeft:3},t.createElement(Kt,{alignItems:"center"},t.createElement(Ke.Z,null)),t.createElement(Kt,{alignItems:"center"},t.createElement(Mt.Z,null))))};Yt.defaultProps={isSibling:!1,transparent:!1},Yt.propTypes={isSibling:n().bool,labelField:n().string.isRequired,transparent:n().bool};var Xt=Yt,A=g(72850),ge=g(50563),ga=g(16899),we=g(4038);const fa=(0,N.ZP)(A.x)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ha=(0,N.ZP)(A.x)`
  height: ${32/16}rem;
  width: ${32/16}rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${6/16}rem;
    width: ${11/16}rem;
    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }
`,ya=N.ZP.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`,qr=({displayedValue:e})=>t.createElement(fa,{paddingLeft:3,paddingRight:3,paddingTop:3,paddingBottom:3,hasRadius:!0,background:"neutral0",width:(0,h.Q1)(300)},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(ya,{type:"button"},t.createElement(w.k,null,t.createElement(ha,{background:"neutral200"},t.createElement(ga.Z,null)),t.createElement(w.k,{gap:2,paddingLeft:6,maxWidth:(0,h.Q1)(150)},t.createElement(G.Z,{textColor:"neutral700",ellipsis:!0},e)))),t.createElement(A.x,{paddingLeft:3},t.createElement(w.k,null,t.createElement(ge.h,{noBorder:!0},t.createElement(we.Z,null)),t.createElement(A.x,{paddingLeft:2},t.createElement(ge.h,{noBorder:!0},t.createElement(Ae.Z,null)))))));qr.propTypes={displayedValue:n().string.isRequired};var Nr=qr,Jt=g(41234),jr=g(99140),ba=g(99381),Me=g.n(ba),Dt=(e,r,o)=>{if(Array.isArray(e)&&r>=0&&o>=0&&r<=e.length-1&&o<=e.length-1){const s=Me()(e),a=s.splice(r,1);return s.splice(o,0,a[0]),s}return e},Ea=g(59578),Br=g.n(Ea),Wr=e=>{const r=e.type;return r==="relation"?!Br()(e.relationType).includes("morph"):!["json","dynamiczone","richtext","password"].includes(r)&&!!r};const Ca=(e,r)=>{typeof e=="function"?e(r):e!=null&&(e.current=r)},kt=(...e)=>r=>e.forEach(o=>Ca(o,r));var va=g(33795),I=g.n(va);const zr=(e,r)=>Object.keys(e).reduce((o,s)=>{const a=I()(e,[s],{}),{default:l,component:i,type:c,required:u,min:d,repeatable:m}=a;if(l!==void 0&&(o[s]=l),c==="component"){const f=r?.[i]?.attributes??{},p=zr(f,r);if(u===!0&&(o[s]=m===!0?[]:p),d&&m===!0&&u){o[s]=[];for(let y=0;y<d;y+=1)o[s].push(p)}}return c==="dynamiczone"&&u===!0&&(o[s]=[]),o},{});var It=zr,Ra=g(9086),Vr=g.n(Ra),Lt=({layouts:e,metadatas:r,...o})=>{const s=e.list.map(i=>i.name?i.name:i),a=Object.keys(r).reduce((i,c)=>{const u=I()(r,[c],{});let d=u.edit;return d.mainField&&(d={...d,mainField:u.edit.mainField.name}),{...i,[c]:{edit:d,list:Vr()(u.list,["mainField"])}}},{}),l=e.edit.map(i=>i.map(({name:c,size:u})=>({name:c,size:u})));return{...o,layouts:{edit:l,list:s},metadatas:a}};const Ta=(e,r)=>e.map(o=>({...o,subject:r}));var Ur=e=>{const r={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(r).reduce((o,s)=>(o[s]=Ta(r[s],e),o),{})},Ma=g(95919),Hr=g.n(Ma),Gr=e=>e.split(".").filter(r=>Hr()(parseInt(r,10))),_t=e=>{if(e.length===0)return-1;const r=Math.max.apply(Math,e.map(o=>o.__temp_key__??0));return Number.isNaN(r)?-1:r},ce=e=>`/content-manager/${e}`,Da=g(3040),J=g.n(Da),Qr=(e,r,o)=>{const s=c=>r.find(u=>u.uid===c),a=Object.assign({},e),l=e[o].uid,i=s(l);return J()(a,[o],{...e[o],...i}),Object.keys(e.components).forEach(c=>{const u=s(c);J()(a,["components",c],{...e.components[c],...u})}),a},Kr=(e,r,o)=>{const s=(a,l)=>Object.keys(a).reduce((i,c)=>{const u=(0,h.UN)(l,c),d=I()(a,c),m=(0,h.k2)(l,[c,"component"]),f=(0,h.k2)(l,[c,"repeatable"]);return u==="dynamiczone"?(i[c]=d.map(p=>s(p,o[p.__component])),i):u==="component"?(f?i[c]=d&&d.map(p=>s(p,o[m])):i[c]=d&&s(d,o[m]),i):(u!=="password"&&(i[c]=d),i)},{});return s(e,r)};const ze={DRAFT:"draft",PUBLISHED:"published"},en=5,ka=10;var it=g(51968);const Ia=(e,r,{onCancel:o,onDropItem:s,onGrabItem:a,onMoveItem:l})=>{const[i,c]=(0,t.useState)(!1),u=p=>{i&&(p==="UP"?l(r-1,r):p==="DOWN"&&l(r+1,r))},d=()=>{i?(s&&s(r),c(!1)):(a&&a(r),c(!0))},m=()=>{i&&(c(!1),o&&o(r))};return p=>{if(e&&!(p.key==="Tab"&&!i))switch(p.preventDefault(),p.key){case" ":case"Enter":d();break;case"Escape":m();break;case"ArrowDown":case"ArrowRight":u("DOWN");break;case"ArrowUp":case"ArrowLeft":u("UP");break;default:}}},tn=(e,{type:r="STRAPI_DND",index:o,item:s={},onStart:a,onEnd:l,onGrabItem:i,onDropItem:c,onCancel:u,onMoveItem:d,dropSensitivity:m="regular"})=>{const f=(0,t.useRef)(null),[{handlerId:p},y]=(0,We.useDrop)({accept:r,collect(R){return{handlerId:R.getHandlerId()}},hover(R,F){if(!f.current)return;const S=R.index,T=o;if(S!==T){if(m==="regular"){const D=f.current.getBoundingClientRect(),x=(D.bottom-D.top)/2,z=F.getClientOffset().y-D.top;if(S<T&&z<x||S>T&&z>x)return}d(T,S),R.index=T}}}),[{isDragging:b},v,k]=(0,We.useDrag)({type:r,item(){a&&a();const{width:R}=f.current?.getBoundingClientRect()??{};return{index:o,width:R,...s}},end(){l&&l()},canDrag:e,isDragging:s.id?R=>s.id===R.getItem().id:void 0,collect:R=>({isDragging:R.isDragging()})}),E=Ia(e,o,{onGrabItem:i,onDropItem:c,onCancel:u,onMoveItem:d});return[{handlerId:p,isDragging:b,handleKeyDown:E},f,y,v,k]},xt=50,Ye=4,Yr=(0,N.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`,Xr=(0,N.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`,nn=({ariaDescribedBy:e,children:r,displayValue:o,canDrag:s,disabled:a,endAction:l,iconButtonAriaLabel:i,style:c,id:u,index:d,name:m,onCancel:f,onDropItem:p,onGrabItem:y,status:b,updatePositionOfRelation:v,...k})=>{const[{handlerId:E,isDragging:R,handleKeyDown:F},S,T,D,x]=tn(s&&!a,{type:`${Ce.RELATION}_${m}`,index:d,item:{displayedValue:o,status:b,id:u},onGrabItem:y,onDropItem:p,onCancel:f,onMoveItem:v,dropSensitivity:"immediate"}),j=kt(S,D);return(0,t.useEffect)(()=>{x((0,it.rX)())},[x]),t.createElement(A.x,{style:c,as:"li",ref:T,"aria-describedby":e,cursor:s?"all-scroll":"default"},R?t.createElement(La,null):t.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:s?2:4,paddingRight:4,hasRadius:!0,borderSize:1,borderColor:"neutral200",background:a?"neutral150":"neutral0",justifyContent:"space-between",ref:s?j:void 0,"data-handler-id":E,...k},t.createElement(Yr,{gap:1},s?t.createElement(ge.h,{forwardedAs:"div",role:"button",tabIndex:0,"aria-label":i,noBorder:!0,onKeyDown:F,disabled:a},t.createElement(Ae.Z,null)):null,t.createElement(Xr,{justifyContent:"space-between"},r)),l&&t.createElement(A.x,{paddingLeft:4},l)))},La=()=>t.createElement(A.x,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",background:"primary100",height:`calc(100% - ${Ye}px)`});nn.defaultProps={ariaDescribedBy:"",canDrag:!1,displayValue:"",disabled:!1,endAction:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,style:void 0,status:void 0,updatePositionOfRelation:void 0},nn.propTypes={ariaDescribedBy:n().string,canDrag:n().bool,children:n().node.isRequired,displayValue:n().string,disabled:n().bool,endAction:n().node,iconButtonAriaLabel:n().string.isRequired,id:n().number.isRequired,index:n().number.isRequired,name:n().string.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,status:n().string,style:n().shape({height:n().number,left:n().number,position:n().string,right:n().number,width:n().string}),updatePositionOfRelation:n().func};var xa=g(41044),Pa=g(50428),wa=g(87107),Fa=g(28847),Jr=g(7563),Xe=g(3685),Sa=g(67014),Aa=g(47851),Pt=g(63919),_r=g(44647);const rn=({children:e,loadMore:r,search:o,totalNumberOfRelations:s,size:a,...l})=>t.createElement(t.Fragment,null,t.createElement(w.k,{paddingBottom:s>0?3:0,gap:2,justifyContent:"space-between",alignItems:"end",wrap:"wrap"},t.createElement(w.k,{direction:"column",alignItems:"stretch",basis:a<=6?"100%":"70%",gap:1,...l},o),r),e);rn.defaultProps={search:void 0,loadMore:void 0,totalNumberOfRelations:0},rn.propTypes={children:n().node.isRequired,search:n().node,loadMore:n().node,size:n().number.isRequired,totalNumberOfRelations:n().number};const Oa=(0,N.ZP)(A.x)`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({overflowDirection:e})=>e==="top-bottom"||e==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({overflowDirection:e})=>e==="top-bottom"||e==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`,on=({children:e,overflow:r,...o})=>t.createElement(Oa,{overflowDirection:r,...o},e);on.defaultProps={overflow:""},on.propTypes={children:n().node.isRequired,overflow:n().oneOf(["top-bottom","bottom","top",""])};var $a=g(88994);const Za=N.ZP.div`
  flex-shrink: 0;
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  margin-right: ${({theme:e})=>e.spaces[2]};
  background-color: ${({theme:e,isDraft:r})=>e.colors[r?"secondary600":"success600"]};
  border-radius: 50%;
`,eo=e=>{const{formatMessage:r}=(0,Q.Z)(),o=$a.c.Option,{publicationState:s,mainField:a,id:l}=e.data;if(s){const i=s==="draft",c={id:C("components.Select.draft-info-title"),defaultMessage:"State: Draft"},u={id:C("components.Select.publish-info-title"),defaultMessage:"State: Published"},d=r(i?c:u);return t.createElement(o,{...e},t.createElement(w.k,null,t.createElement(Za,{title:d,isDraft:i}),t.createElement(G.Z,{ellipsis:!0},a??l)))}return t.createElement(o,{...e},a??l)};eo.propTypes={isFocused:n().bool.isRequired,data:n().shape({id:n().number.isRequired,isDraft:n().bool,mainField:n().string,publicationState:n().oneOfType([n().string,n().bool])}).isRequired};var le=g(15062),to=e=>e["content-manager_editViewLayoutManager"].currentLayout,Oe=()=>{const e=(0,le.v9)(to),r=(0,t.useCallback)(o=>e?.components?.[o]??{},[e]);return{...e,getComponentLayout:r}},ve=g(84306);const no=(e,r)=>r.find(o=>o.uid===e),qa=(e,r)=>{const o=Na(e,r),s=ro(o.contentType,r),a=ja(o.contentType,o.components);return J()(o,["contentType","layouts","edit"],s),J()(o,["contentType","layouts","list"],a),Object.keys(o.components).forEach(l=>{const i=ro(o.components[l],r);J()(o,["components",l,"layouts","edit"],i)}),o},Na=(e,r)=>{const o=Qr(Me()(e),r,"contentType"),{components:s,contentType:a}=o,l=i=>Object.keys(i.metadatas).reduce((c,u)=>{const d=I()(i,["attributes",u],{});let m=i.metadatas[u];if(d.type==="relation"){const f=no(d.targetModel,r),p=m.edit.mainField,y={name:p,schema:I()(f,["attributes",p])};m={list:{...m.list,mainField:y},edit:{...m.edit,mainField:y}}}return c[u]=m,c},{});return J()(o,["contentType","metadatas"],l(a)),Object.keys(s).forEach(i=>{const c=s[i],u=l(c);J()(o,["components",i,"metadatas"],u)}),o},ro=(e,r)=>e.layouts.edit.reduce((o,s)=>{const a=s.map(l=>{const i=I()(e,["attributes",l.name],{}),c={...l,fieldSchema:i,metadatas:I()(e,["metadatas",l.name,"edit"],{})};if(i.type==="relation"){const d=no(i.targetModel,r).pluginOptions||{};J()(c,"targetModelPluginOptions",d),J()(c,"queryInfos",{shouldDisplayRelationLink:Ba(e,l.name,r)})}return c});return o.push(a),o},[]),ja=(e,r)=>e.layouts.list.reduce((s,a)=>{const l=I()(e,["attributes",a],{}),i=I()(e,["metadatas",a,"list"],{}),c=l.type;if(c==="relation")return s.push({key:`__${a}_key__`,name:a,fieldSchema:l,metadatas:i}),s;if(c==="component"){const u=r[l.component],d=u.settings.mainField,m=u.attributes[d];return s.push({key:`__${a}_key__`,name:a,fieldSchema:l,metadatas:{...i,mainField:{...m,name:d}}}),s}return s.push({key:`__${a}_key__`,name:a,fieldSchema:l,metadatas:i}),s},[]),Ba=(e,r,o)=>{const s=I()(e,["attributes",r,"targetModel"],"");return Wa(o).includes(s)},Wa=e=>e.filter(r=>r.isDisplayed).map(({uid:r})=>r);var oo=qa,wt=g(97889);const za={error:null,isLoading:!0,layout:{},layouts:{}};var Va=(e,r)=>(0,wt.ZP)(e,o=>{switch(r.type){case"GET_DATA":{o.isLoading=!0,o.error=null,o.layout={};break}case"GET_DATA_SUCCEEDED":{const s=r.data.contentType.uid;o.layout=r.data,o.layouts[s]=r.data,o.isLoading=!1;break}case"GET_DATA_ERROR":{o.isLoading=!1,o.error=r.error;break}case"SET_LAYOUT_FROM_STATE":{o.error=null,o.layout=e.layouts[r.uid];break}case"UPDATE_LAYOUT":{const s=e.layout;o.layout={...s,contentType:{uid:s.contentType.uid,...r.newLayout.contentType}},o.layouts[s.contentType.uid]={...s,contentType:{uid:s.contentType.uid,...r.newLayout.contentType}};break}default:return o}}),lt=g(98178),Ua=g(34947);const ct=()=>e=>e["content-manager_app"]||Ua.E,Bp=()=>createSelector(ct(),e=>e),Wp=()=>createSelector(ct(),e=>e.models),Ha=()=>(0,lt.P1)(ct(),e=>({collectionTypeLinks:e.collectionTypeLinks,singleTypeLinks:e.singleTypeLinks})),sn=()=>(0,lt.P1)(ct(),({components:e,models:r})=>({schemas:[...e,...r]}));var zp=null,so=e=>{const[{error:r,isLoading:o,layout:s,layouts:a},l]=(0,t.useReducer)(Va,za),i=(0,t.useMemo)(sn,[]),{schemas:c}=(0,le.v9)(p=>i(p),le.wU),u=(0,t.useRef)(!0),{get:d}=(0,h.kY)(),m=(0,t.useCallback)(async(p,y)=>{if(a[p]){l({type:"SET_LAYOUT_FROM_STATE",uid:p});return}l({type:"GET_DATA"});try{const b=ce(`content-types/${p}/configuration`),{data:{data:v}}=await d(b,{cancelToken:y.token});l({type:"GET_DATA_SUCCEEDED",data:oo(v,c)})}catch(b){if(ve.Z.isCancel(b))return;u.current&&console.error(b),u.current&&l({type:"GET_DATA_ERROR",error:b})}},[a,c,d]);(0,t.useEffect)(()=>()=>{u.current=!1},[]),(0,t.useEffect)(()=>{const y=ve.Z.CancelToken.source();return m(e,y),()=>{y.cancel("Operation canceled by the user.")}},[e,m]);const f=(0,t.useCallback)(p=>{l({type:"UPDATE_LAYOUT",newLayout:oo(p,c)})},[c]);return{error:r,isLoading:o,layout:s,updateLayout:f}},Ga=e=>e["content-manager_app"].collectionTypeLinks,Fe=g(33348),Qa=g(85973),ao=g.n(Qa);const io=(e,r)=>Object.keys(e).reduce((o,s)=>{const a=e[s],l=I()(r,[s],a);return ao()(a)?{...o,[s]:io(a,l)}:(o[s]=l,o)},{});var Ka=(e,r,o)=>{const s=e.find(({to:m})=>m.includes(r));if(!s)return"/";const{to:a,search:l}=s,i=(0,Fe.parse)(l),c=(0,Fe.parse)(o.substring(1)),u=io(i,c);return`${a}?${(0,Fe.stringify)(u,{encode:!1})}`},lo=e=>{const[{rawQuery:r}]=(0,h.Kx)(),o=(0,le.v9)(Ga);return Ka(o,e,r)},Ve=()=>(0,t.useContext)(Ar),co=()=>{const{search:e}=(0,ae.TH)(),r=e?(0,Fe.parse)(e.substring(1)):{};return r.plugins?(0,Fe.stringify)({plugins:r.plugins},{encode:!1}):""},uo=g(89334);const Ya=(e,r,o)=>({type:uo.m,permissions:e,__meta__:{plugins:r,containerName:o}}),Xa=()=>({type:uo.Q}),Ja=e=>e["content-manager_rbacManager"].permissions,_a=e=>e.rbacProvider.collectionTypesRelatedPermissions;var mo=(e,r,o="listView")=>{const s=(0,le.v9)(_a),a=(0,le.v9)(Ja),l=(0,le.I0)(),i=s[r];return(0,t.useEffect)(()=>i?(l(Ya(i,e?e.plugins:null,o)),()=>{l(Xa())}):()=>{},[i,l,e,o]),a};const Xp=(0,t.createContext)();var Jp=null;const _p=()=>useContext(WysiwygContext);var eg=null;const po=e=>{const r=(0,t.useRef)();return(0,t.useEffect)(()=>{r.current=e},[e]),r.current},go=(0,N.ZP)(Pa.r)`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,fo=N.ZP.button`
  svg path {
    fill: ${({theme:e,disabled:r})=>r?e.colors.neutral600:e.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:e,disabled:r})=>!r&&e.colors.neutral600};
  }
`,an=({canReorder:e,description:r,disabled:o,error:s,iconButtonAriaLabel:a,id:l,name:i,numberOfRelationsToDisplay:c,label:u,labelAction:d,labelLoadMore:m,labelDisconnectRelation:f,listAriaDescription:p,liveText:y,loadingMessage:b,onCancel:v,onDropItem:k,onGrabItem:E,noRelationsMessage:R,onRelationConnect:F,onRelationLoadMore:S,onRelationDisconnect:T,onRelationReorder:D,onSearchNextPage:x,onSearch:j,placeholder:z,publicationStateTranslations:Z,required:V,relations:B,searchResults:K,size:W})=>{const[X,q]=(0,t.useState)(null),[ee,M]=(0,t.useState)(""),L=(0,t.useRef)(),Y=(0,t.useRef)(),{data:H}=K,$=B.data,O=$.length??0,U=(0,t.useMemo)(()=>O>c?Math.min(O,c)*(xt+Ye)+xt/2:Math.min(O,c)*(xt+Ye),[O,c]),se=!!m&&B.hasNextPage,P=(0,t.useMemo)(()=>H.flat().filter(Boolean).map(te=>({...te,value:te.id,label:te.mainField})),[H]);(0,t.useEffect)(()=>{if(O<=c)return M("");const te=Ie=>{const xr=Ie.target.parentNode.scrollHeight,je=Ie.target.scrollHeight-Ie.target.scrollTop;return Ie.target.scrollTop===0?M("bottom"):M(je===xr?"top":"top-bottom")},pe=Y?.current;return!B.isLoading&&$.length>0&&pe&&Y.current.addEventListener("scroll",te),()=>{pe&&pe.removeEventListener("scroll",te)}},[B,$,c,O]);const[re,de]=(0,t.useState)(!1),ye=(0,t.useRef)(),at=(0,t.useRef)([]);(0,t.useEffect)(()=>(P.length>0&&at.current.length===0&&de(te=>(te&&(ye.current=setTimeout(()=>{de(!0)},10)),!1)),()=>{at.current=P||[]}),[P]),(0,t.useEffect)(()=>()=>{ye.current&&clearTimeout(ye.current)},[]);const Ct=()=>{de(!1)},vt=()=>{de(!0),j()},Rt=(te,pe)=>{D&&te>=0&&te<$.length&&D(pe,te)},Re=po($.length),ke=(0,t.useRef)(),Tt=()=>{ke.current="loadMore",S()};(0,t.useEffect)(()=>{ke.current==="onChange"&&$.length!==Re?L.current.scrollToItem($.length,"end"):ke.current==="loadMore"&&$.length!==Re&&L.current.scrollToItem(0,"start"),ke.current=void 0},[Re,$]);const Ne=`${i}-item-instructions`;return t.createElement(wa.g,{error:s,name:i,hint:r,id:l,required:V},t.createElement(rn,{totalNumberOfRelations:O,size:W,search:t.createElement(t.Fragment,null,t.createElement(Fa.Q,{action:d},u),t.createElement(h.JV,{menuPosition:"absolute",menuPlacement:"auto",components:{Option:eo},options:P,isDisabled:o,isLoading:K.isLoading,error:s,inputId:l,isSearchable:!0,isClear:!0,loadingMessage:()=>b,onChange:te=>{q(null),F(te),ke.current="onChange"},onInputChange:te=>{q(te),j(te)},onMenuClose:Ct,onMenuOpen:vt,menuIsOpen:re,noOptionsMessage:()=>R,onMenuScrollToBottom:()=>{K.hasNextPage&&x()},placeholder:z,name:i,value:X})),loadMore:se&&t.createElement(Jr.A,{disabled:B.isLoading||B.isFetchingNextPage,onClick:Tt,loading:B.isLoading||B.isFetchingNextPage,startIcon:t.createElement(_r.Z,null)},m)},$.length>0&&t.createElement(on,{overflow:ee},t.createElement(Xe.T,{id:Ne},p),t.createElement(Xe.T,{"aria-live":"assertive"},y),t.createElement(xa.t7,{height:U,ref:L,outerRef:Y,itemCount:O,itemSize:xt+Ye,itemData:{name:i,ariaDescribedBy:Ne,canDrag:e,disabled:o,handleCancel:v,handleDropItem:k,handleGrabItem:E,iconButtonAriaLabel:a,labelDisconnectRelation:f,onRelationDisconnect:T,publicationStateTranslations:Z,relations:$,updatePositionOfRelation:Rt},itemKey:te=>`${$[te].mainField}_${$[te].id}`,innerElementType:"ol"},ln)),(r||s)&&t.createElement(A.x,{paddingTop:2},t.createElement(Sa.J,null),t.createElement(Aa.c,null))))},ei=n().shape({data:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),hasNextPage:n().bool,isFetchingNextPage:n().bool.isRequired,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired}),ti=n().shape({data:n().arrayOf(n().shape({id:n().number.isRequired,href:n().string,mainField:n().oneOfType([n().string,n().number]),publicationState:n().oneOfType([n().string,n().bool])})),hasNextPage:n().bool,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired});an.defaultProps={canReorder:!1,description:void 0,disabled:!1,error:void 0,labelAction:null,labelLoadMore:null,liveText:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,required:!1,relations:{data:[]},searchResults:{data:[]}},an.propTypes={error:n().string,canReorder:n().bool,description:n().string,disabled:n().bool,iconButtonAriaLabel:n().string.isRequired,id:n().string.isRequired,label:n().string.isRequired,labelAction:n().element,labelLoadMore:n().string,labelDisconnectRelation:n().string.isRequired,listAriaDescription:n().string.isRequired,liveText:n().string,loadingMessage:n().string.isRequired,name:n().string.isRequired,noRelationsMessage:n().string.isRequired,numberOfRelationsToDisplay:n().number.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,onRelationConnect:n().func.isRequired,onRelationDisconnect:n().func.isRequired,onRelationLoadMore:n().func.isRequired,onRelationReorder:n().func.isRequired,onSearch:n().func.isRequired,onSearchNextPage:n().func.isRequired,placeholder:n().string.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,required:n().bool,searchResults:ti,size:n().number.isRequired,relations:ei};const ln=({data:e,index:r,style:o})=>{const{ariaDescribedBy:s,canDrag:a,disabled:l,handleCancel:i,handleDropItem:c,handleGrabItem:u,iconButtonAriaLabel:d,name:m,labelDisconnectRelation:f,onRelationDisconnect:p,publicationStateTranslations:y,relations:b,updatePositionOfRelation:v}=e,{publicationState:k,href:E,mainField:R,id:F}=b[r],S=k==="draft"?"secondary":"success";return t.createElement(nn,{ariaDescribedBy:s,canDrag:a,disabled:l,displayValue:String(R??F),iconButtonAriaLabel:d,id:F,index:r,name:m,endAction:t.createElement(fo,{"data-testid":`remove-relation-${F}`,disabled:l,type:"button",onClick:()=>p(b[r]),"aria-label":f},t.createElement(jr.J,{width:"12px",as:Mt.Z})),onCancel:i,onDropItem:c,onGrabItem:u,status:k||void 0,style:{...o,bottom:o.bottom??0+Ye,height:o.height??0-Ye},updatePositionOfRelation:v},t.createElement(A.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},t.createElement(Pt.u,{description:R??`${F}`},E?t.createElement(go,{to:E},R??F):t.createElement(G.Z,{textColor:l?"neutral600":"primary600",ellipsis:!0},R??F))),k&&t.createElement(Jt.q,{variant:S,showBullet:!1,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${S}700`},y[k])))};ln.defaultProps={data:{}},ln.propTypes={data:n().shape({ariaDescribedBy:n().string.isRequired,canDrag:n().bool.isRequired,disabled:n().bool.isRequired,handleCancel:n().func,handleDropItem:n().func,handleGrabItem:n().func,iconButtonAriaLabel:n().string.isRequired,labelDisconnectRelation:n().string.isRequired,name:n().string.isRequired,onRelationDisconnect:n().func.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,relations:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),updatePositionOfRelation:n().func.isRequired}),index:n().number.isRequired,style:n().object.isRequired};var ni=an;const ho=({status:e,displayedValue:r,width:o})=>{const{formatMessage:s}=(0,Q.Z)(),a={[ze.DRAFT]:s({id:C("relation.publicationState.draft"),defaultMessage:"Draft"}),[ze.PUBLISHED]:s({id:C("relation.publicationState.published"),defaultMessage:"Published"})},l=e===ze.DRAFT?"secondary":"success";return t.createElement(A.x,{style:{width:o}},t.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderSize:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between"},t.createElement(Yr,{gap:1},t.createElement(ge.h,{noBorder:!0},t.createElement(Ae.Z,null)),t.createElement(Xr,{maxWidth:"100%",justifyContent:"space-between"},t.createElement(A.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},t.createElement(go,null,t.createElement(G.Z,{textColor:"primary600",ellipsis:!0},r))),e&&t.createElement(Jt.q,{variant:l,showBullet:!1,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${l}700`},a[e])))),t.createElement(A.x,{paddingLeft:4},t.createElement(fo,{type:"button"},t.createElement(jr.J,{width:"12px",as:Mt.Z})))))};ho.propTypes={status:n().string.isRequired,displayedValue:n().string.isRequired,width:n().number.isRequired};const ri={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function oi(e,r,o){if(!e||!r)return{display:"none"};const{x:s,y:a}=o,l=`translate(${s}px, ${a}px)`;return{transform:l,WebkitTransform:l}}var si=()=>{const{itemType:e,isDragging:r,item:o,initialOffset:s,currentOffset:a,mouseOffset:l}=(0,We.useDragLayer)(c=>({item:c.getItem(),itemType:c.getItemType(),initialOffset:c.getInitialSourceClientOffset(),currentOffset:c.getSourceClientOffset(),isDragging:c.isDragging(),mouseOffset:c.getClientOffset()}));if(!r)return null;const[i]=e.split("_");return t.createElement(Or,null,t.createElement("div",{style:ri},t.createElement("div",{style:oi(s,a,l),className:"col-md-2"},[Ce.EDIT_FIELD,Ce.FIELD].includes(e)&&t.createElement(Xt,{labelField:o.labelField}),i===Ce.COMPONENT&&t.createElement(Nr,{displayedValue:o.displayedValue}),i===Ce.DYNAMIC_ZONE&&t.createElement(Nr,{displayedValue:o.displayedValue}),i===Ce.RELATION&&t.createElement(ho,{displayedValue:o.displayedValue,status:o.status,width:o.width}))))},yo=(0,t.createContext)(),ai=g(47533),bo=(0,t.createContext)(),Ft=g(46339),Eo=g(4460);const ii=()=>({type:Eo.c}),li=(e,r)=>({type:Eo.O,layout:e,query:r});var ci=g(8266),$e=g.n(ci),Je=g(17e3),De=g(15335),fe=g(5803),di=g(2669),ui=g(66694),mi=()=>(0,t.useContext)(ui.ux),Co=e=>{const{getAdminInjectedComponents:r}=mi(),[o,s,a]=e.split(".");return r(o,s,a)};const vo=({area:e,...r})=>Co(e).map(s=>t.createElement(s.Component,{key:s.name,...r}));vo.propTypes={area:n().string.isRequired};var St=vo;function pi(e,r){return o=>{const s=r(o.name);return t.createElement(e,{...o,...s})}}var gi=pi;function fi(e){const{addComponentToDynamicZone:r,createActionAllowedFields:o,isCreatingEntry:s,formErrors:a,modifiedData:l,moveComponentField:i,removeComponentFromDynamicZone:c,readActionAllowedFields:u,updateActionAllowedFields:d}=(0,h.Wq)(),m=(0,t.useMemo)(()=>I()(l,[e],[]).map(y=>({componentUid:y.__component,id:y.id??y.__temp_key__})),[l,e]),f=(0,t.useMemo)(()=>(s?o:d).includes(e),[e,s,o,d]),p=(0,t.useMemo)(()=>(s?[]:u).includes(e),[e,s,u]);return{addComponentToDynamicZone:r,formErrors:a,isCreatingEntry:s,isFieldAllowed:f,isFieldReadable:p,moveComponentField:i,removeComponentFromDynamicZone:c,dynamicDisplayedComponents:m}}var hi=fi,cn=g(83828),dn=g(61762),un=g(89966),yi=g(61868),bi=g.n(yi);function Ei(e,r){return o=>{const s=r(o);return t.createElement(e,{...o,...s})}}var Ci=Ei,vi=g(88708),dt=g.n(vi);function Ri({isFromDynamicZone:e,name:r}){const{addNonRepeatableComponentToField:o,createActionAllowedFields:s,isCreatingEntry:a,modifiedData:l,removeComponentFromField:i,readActionAllowedFields:c,updateActionAllowedFields:u,formErrors:d}=(0,h.Wq)(),{contentType:m}=Oe(),f=(0,t.useMemo)(()=>{const R=I()(m,["attributes"],{});return Object.keys(R).filter(S=>I()(R,[S,"type"],"")==="dynamiczone")},[m]),p=(0,t.useMemo)(()=>a?s:u,[a,s,u]),y=I()(l,r,null),b=(0,t.useMemo)(()=>Gr(r),[r]),v=(0,t.useMemo)(()=>e&&a||p.filter(S=>S===b[0]).length>0?!0:p.map(S=>S.split(".")).filter(S=>S.length<b.length?!1:dt()(S,b.length).join(".")===b.join(".")).length>0,[e,a,p,b]),k=(0,t.useMemo)(()=>e||f.includes(b[0])?!0:(a?[]:c).map(S=>S.split(".")).filter(S=>S.length<b.length?!1:dt()(S,b.length).join(".")===b.join(".")).length>0,[e,f,b,a,c]),E=(0,t.useMemo)(()=>a||v?!1:k,[v,k,a]);return{addNonRepeatableComponentToField:o,formErrors:d,hasChildrenAllowedFields:v,hasChildrenReadableFields:k,isCreatingEntry:a,isReadOnly:E,removeComponentFromField:i,componentValue:y}}var Ti=Ri;const Mi=(0,N.ZP)(A.x)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,mn=({intlLabel:e,id:r,labelAction:o,name:s,numberOfEntries:a,showNumberOfEntries:l,required:i})=>{const{formatMessage:c}=(0,Q.Z)(),u=e?.id?c(e):s;return t.createElement(A.x,{paddingBottom:1},t.createElement(w.k,null,t.createElement(G.Z,{textColor:"neutral800",htmlFor:r||s,variant:"pi",fontWeight:"bold",as:"label"},u,l&&t.createElement(t.Fragment,null,"\xA0(",a,")"),i&&t.createElement(G.Z,{textColor:"danger600"},"*")),o&&t.createElement(Mi,{paddingLeft:1},o)))};mn.defaultProps={id:void 0,labelAction:void 0,numberOfEntries:0,required:!1,showNumberOfEntries:!1},mn.propTypes={id:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,numberOfEntries:n().number,required:n().bool,showNumberOfEntries:n().bool};var Di=mn,Ro=g(86308);const ki=N.ZP.span`
  > svg {
    width: ${(0,h.Q1)(24)};
    height: ${(0,h.Q1)(24)};
    > circle {
      fill: ${({theme:e})=>e.colors.primary200};
    }
    > path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,pn=({error:e,isReadOnly:r,onClick:o})=>{const{formatMessage:s}=(0,Q.Z)();return t.createElement(t.Fragment,null,t.createElement(A.x,{as:"button",background:"neutral100",borderColor:e?"danger600":"neutral200",disabled:r,hasRadius:!0,onClick:o,paddingTop:9,paddingBottom:9,type:"button"},t.createElement(w.k,{direction:"column",gap:2},t.createElement(w.k,{justifyContent:"center",style:{cursor:r?"not-allowed":"inherit"}},t.createElement(ki,null,t.createElement(Ro.Z,null))),t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{textColor:"primary600",variant:"pi",fontWeight:"bold"},s({id:C("components.empty-repeatable"),defaultMessage:"No entry yet. Click on the button below to add one."}))))),e?.id&&t.createElement(G.Z,{textColor:"danger600",variant:"pi"},s(e,{...e.values})))};pn.defaultProps={error:void 0,isReadOnly:!1},pn.propTypes={error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),isReadOnly:n().bool,onClick:n().func.isRequired};var To=pn,Ii=g(87702),gn=g.n(Ii),ag=g(27217),Li=g(88591),xi=g.n(Li),fn=g(59845),Pi=g(20871),wi=g.n(Pi),Fi=g(48375),Mo=g.n(Fi),Si=g(31089),Ai=g.n(Si),Oi=g(16043),$i=g.n(Oi),Zi=g(5109),qi=g.n(Zi),Ni=g(47955),ji=g.n(Ni),Bi=g(95706),Wi=g.n(Bi),zi=g(6658),Vi=g.n(zi),Ui=g(36407),Hi=g.n(Ui);(async()=>{await g.e(7347).then(g.bind(g,74194))})();const _e=new(xi())({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(e,r){if(r&&r!=="auto"&&(0,fn.getLanguage)(r))return'<pre class="hljs language-'+_e.utils.escapeHtml(r.toLowerCase())+'"><code>'+(0,fn.highlight)(r,e,!0).value+"</code></pre>";if(r==="auto"){const o=(0,fn.highlightAuto)(e);return'<pre class="hljs language-'+_e.utils.escapeHtml(o.language)+'"><code>'+o.value+"</code></pre>"}return'<pre class="hljs"><code>'+_e.utils.escapeHtml(e)+"</code></pre>"}}).use(wi()).use(Mo(),"warning").use(Mo(),"tip").use(Ai()).use($i()).use(qi()).use(ji()).use(Wi()).use(Vi()).use(Hi());_e.renderer.rules.footnote_ref=(e,r,o,s,a)=>'<sup class="footnote-ref"><span>'+a.rules.footnote_caption(e,r,o,s,a)+"</span></sup>",_e.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">\u21A9\uFE0E</span>';var Gi=_e,Qi=g(13993),Do=g.n(Qi);const Ki={...Do().defaults,allowedTags:!1,allowedAttributes:{"*":["href","align","alt","center","width","height","type","controls","target"],img:["src","alt"],source:["src","type"]}};var Yi=e=>Do()(e,Ki),Xi=N.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
  font-size: ${14/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral0};
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: ${({theme:e})=>e.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({theme:e})=>e.spaces[2]};
    margin-block-end: ${({theme:e})=>e.spaces[2]};
  }

  p {
    margin-bottom: ${({theme:e})=>e.spaces[2]};
  }

  h1 {
    font-size: ${36/16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30/16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24/16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20/16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({theme:e})=>e.spaces[8]};
    margin-bottom: ${({theme:e})=>e.spaces[7]};
    font-size: ${14/16}rem;
    font-weight: 400;
    border-left: 4px solid ${({theme:e})=>e.colors.neutral150};
    font-style: italic;
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({theme:e})=>e.colors.neutral150};

      th {
        padding: ${({theme:e})=>e.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
    }
    th,
    td {
      padding: ${({theme:e})=>e.spaces[4]};
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14/16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({theme:e})=>e.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;const hn=({data:e})=>{const r=(0,t.useMemo)(()=>Yi(Gi.render(e.replaceAll("\\n",`
`)||"")),[e]);return t.createElement(Xi,null,t.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))};hn.defaultProps={data:""},hn.propTypes={data:n().string};var ko=(0,t.memo)(hn);const Ji=N.ZP.div`
  cursor: ${({disabled:e})=>e?"not-allowed !important":"auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({theme:e})=>e.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14/16}rem;
    height: ${({isExpandMode:e})=>e?"100%":"290px"};
    color: ${({theme:e})=>e.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({theme:e})=>`${e.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({theme:e})=>e.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({theme:e})=>e.colors.neutral800} !important;
  }
`;var yn=g(69783);const Ee=(0,N.ZP)(ge.h)`
  padding: ${({theme:e})=>e.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,_i=(0,N.ZP)(Ee)`
  svg {
    width: ${8/16}rem;
    height: ${8/16}rem;
  }
`,Io=(0,N.ZP)(ge.o)`
  margin-left: ${({theme:e})=>e.spaces[4]};
`,Lo=(0,N.ZP)(ge.h)`
  margin: ${({theme:e})=>`0 ${e.spaces[2]}`};
  padding: ${({theme:e})=>e.spaces[2]};

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,el=(0,N.ZP)(ge.o)`
  margin-right: ${({theme:e})=>`${e.spaces[2]}`};
`,tl=N.ZP.div`
  position: relative;
  height: calc(100% - 48px);
`,nl=(0,N.ZP)(yn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`;var At=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,rl=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,ol=/[*+-]\s/;function sl(e){if(e.getOption("disableInput"))return gn().Pass;for(var r=e.listSelections(),o=[],s=0;s<r.length;s++){var a=r[s].head,l=e.getStateAfter(a.line),i=l.list!==!1,c=l.quote!==0,u=e.getLine(a.line),d=At.exec(u),m=/^\s*$/.test(u.slice(0,a.ch));if(!r[s].empty()||!i&&!c||!d||m){e.execCommand("newlineAndIndent");return}if(rl.test(u)){var f=c&&/>\s*$/.test(u),p=!/>\s*$/.test(u);(f||p)&&e.replaceRange("",{line:a.line,ch:0},{line:a.line,ch:a.ch+1}),o[s]=`
`}else{var y=d[1],b=d[5],v=!(ol.test(d[2])||d[2].indexOf(">")>=0),k=v?parseInt(d[3],10)+1+d[4]:d[2].replace("x"," ");o[s]=`
`+y+k+b,v&&al(e,a)}}e.replaceSelections(o)}function al(e,r){var o=r.line,s=0,a=0,l=At.exec(e.getLine(o)),i=l[1];do{s+=1;var c=o+s,u=e.getLine(c),d=At.exec(u);if(d){var m=d[1],f=parseInt(l[3],10)+s-a,p=parseInt(d[3],10),y=p;if(i===m&&!isNaN(p))f===p&&(y=p+1),f>p&&(y=f+1),e.replaceRange(u.replace(At,m+y+d[4]+d[5]),{line:c,ch:0},{line:c,ch:u.length});else{if(i.length>m.length||i.length<m.length&&s===1)return;a+=1}}}while(d)}var il=sl;const bn=({disabled:e,editorRef:r,error:o,isPreviewMode:s,isExpandMode:a,name:l,onChange:i,placeholder:c,textareaRef:u,value:d})=>{const m=(0,t.useRef)(i);return(0,t.useEffect)(()=>{r.current=gn().fromTextArea(u.current,{lineWrapping:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList",Tab:!1,"Shift-Tab":!1},readOnly:!1,smartIndent:!1,placeholder:c,spellcheck:!0,inputStyle:"contenteditable"}),gn().commands.newlineAndIndentContinueMarkdownList=il,r.current.on("change",f=>{m.current({target:{name:l,value:f.getValue(),type:"wysiwyg"}})})},[r,u,l,c]),(0,t.useEffect)(()=>{d&&!r.current.hasFocus()&&r.current.setValue(d)},[r,d]),(0,t.useEffect)(()=>{s||e?r.current.setOption("readOnly","nocursor"):r.current.setOption("readOnly",!1)},[e,s,r]),(0,t.useEffect)(()=>{o?r.current.setOption("screenReaderLabel",o):r.current.setOption("screenReaderLabel","Editor")},[r,o]),t.createElement(tl,null,t.createElement(Ji,{isExpandMode:a,disabled:e||s},t.createElement("textarea",{ref:u})),s&&t.createElement(ko,{data:d}))};bn.defaultProps={disabled:!1,error:void 0,isPreviewMode:!1,isExpandMode:!1,placeholder:"",value:""},bn.propTypes={disabled:n().bool,editorRef:n().shape({current:n().any}).isRequired,error:n().string,isPreviewMode:n().bool,isExpandMode:n().bool,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().string,textareaRef:n().shape({current:n().any}).isRequired,value:n().string};var ll=bn,xe=g(80084),he=g(84967),ue=g(41415),cl=g(4101),xo=g(67563),Po=g(73906),wo=g(49844),Fo=g(99283),So=g(49825),dl=g(83139),ul=g(35635),ml=g(20063),pl=g(80601),gl=g(11417),fl=g(43231),hl=g(65663);const En=({disabled:e,editorRef:r,isExpandMode:o,isPreviewMode:s,onActionClick:a,onToggleMediaLib:l,onTogglePreviewMode:i})=>{const[c,u]=(0,t.useState)(!1),{formatMessage:d}=(0,Q.Z)(),m=d({id:"components.Wysiwyg.selectOptions.title",defaultMessage:"Add a title"}),f=(0,t.useRef)(),p=()=>{u(y=>!y)};return e||s?t.createElement(A.x,{padding:2,background:"neutral100"},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(w.k,null,t.createElement(xe.P,{disabled:!0,id:"selectTitle",placeholder:m,size:"S","aria-label":m},t.createElement(he.W,{value:"h1"},"h1"),t.createElement(he.W,{value:"h2"},"h2"),t.createElement(he.W,{value:"h3"},"h3"),t.createElement(he.W,{value:"h4"},"h4"),t.createElement(he.W,{value:"h5"},"h5"),t.createElement(he.W,{value:"h6"},"h6")),t.createElement(Io,null,t.createElement(Ee,{disabled:!0,id:"Bold",label:"Bold",name:"Bold",icon:t.createElement(Po.Z,null)}),t.createElement(Ee,{disabled:!0,id:"Italic",label:"Italic",name:"Italic",icon:t.createElement(wo.Z,null)}),t.createElement(Ee,{disabled:!0,id:"Underline",label:"Underline",name:"Underline",icon:t.createElement(Fo.Z,null)})),t.createElement(Lo,{disabled:!0,id:"more",label:"More",icon:t.createElement(So.Z,null)})),!o&&t.createElement(ue.z,{onClick:i,variant:"tertiary",id:"preview"},d({id:"components.Wysiwyg.ToggleMode.markdown-mode",defaultMessage:"Markdown mode"})))):t.createElement(A.x,{padding:2,background:"neutral100"},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(w.k,null,t.createElement(xe.P,{id:"selectTitle",placeholder:m,size:"S",onChange:y=>a(y,r)},t.createElement(he.W,{value:"h1"},"h1"),t.createElement(he.W,{value:"h2"},"h2"),t.createElement(he.W,{value:"h3"},"h3"),t.createElement(he.W,{value:"h4"},"h4"),t.createElement(he.W,{value:"h5"},"h5"),t.createElement(he.W,{value:"h6"},"h6")),t.createElement(Io,null,t.createElement(Ee,{onClick:()=>a("Bold",r),id:"Bold",label:"Bold",name:"Bold",icon:t.createElement(Po.Z,null)}),t.createElement(Ee,{onClick:()=>a("Italic",r),id:"Italic",label:"Italic",name:"Italic",icon:t.createElement(wo.Z,null)}),t.createElement(Ee,{onClick:()=>a("Underline",r),id:"Underline",label:"Underline",name:"Underline",icon:t.createElement(Fo.Z,null)})),t.createElement(Lo,{ref:f,onClick:p,id:"more",label:"More",icon:t.createElement(So.Z,null)}),c&&t.createElement(cl.J2,{centered:!0,source:f,spacing:4,id:"popover"},t.createElement(xo.i,{onEscape:p,restoreFocus:!1},t.createElement(w.k,null,t.createElement(el,null,t.createElement(Ee,{onClick:()=>a("Strikethrough",r,p),id:"Strikethrough",label:"Strikethrough",name:"Strikethrough",icon:t.createElement(dl.Z,null)}),t.createElement(Ee,{onClick:()=>a("BulletList",r,p),id:"BulletList",label:"BulletList",name:"BulletList",icon:t.createElement(ul.Z,null)}),t.createElement(Ee,{onClick:()=>a("NumberList",r,p),id:"NumberList",label:"NumberList",name:"NumberList",icon:t.createElement(ml.Z,null)})),t.createElement(ge.o,null,t.createElement(Ee,{onClick:()=>a("Code",r,p),id:"Code",label:"Code",name:"Code",icon:t.createElement(pl.Z,null)}),t.createElement(Ee,{onClick:()=>{p(),l()},id:"Image",label:"Image",name:"Image",icon:t.createElement(gl.Z,null)}),t.createElement(_i,{onClick:()=>a("Link",r,p),id:"Link",label:"Link",name:"Link",icon:t.createElement(fl.Z,null)}),t.createElement(Ee,{onClick:()=>a("Quote",r,p),id:"Quote",label:"Quote",name:"Quote",icon:t.createElement(hl.Z,null)})))))),i&&t.createElement(ue.z,{onClick:i,variant:"tertiary",id:"preview"},d({id:"components.Wysiwyg.ToggleMode.preview-mode",defaultMessage:"Preview mode"}))))};En.defaultProps={isPreviewMode:!1,onActionClick(){},onToggleMediaLib(){},onTogglePreviewMode:void 0},En.propTypes={disabled:n().bool.isRequired,editorRef:n().shape({current:n().any}).isRequired,isExpandMode:n().bool.isRequired,isPreviewMode:n().bool,onActionClick:n().func,onToggleMediaLib:n().func,onTogglePreviewMode:n().func};var yl=En,bl=g(18070);const Cn=({onToggleExpand:e})=>{const{formatMessage:r}=(0,Q.Z)();return t.createElement(A.x,{padding:2,background:"neutral100",hasRadius:!0},t.createElement(w.k,{justifyContent:"flex-end",alignItems:"flex-end"},t.createElement(nl,{id:"expand",onClick:e},t.createElement(G.Z,null,r({id:"components.WysiwygBottomControls.fullscreen",defaultMessage:"Expand"})),t.createElement(bl.Z,null))))};Cn.defaultProps={onToggleExpand(){}},Cn.propTypes={onToggleExpand:n().func};var El=Cn;const vn=({id:e,error:r,name:o,hint:s})=>s.length===0||r?null:t.createElement(G.Z,{as:"p",variant:"pi",id:`${e||o}-hint`,textColor:"neutral600"},s);vn.defaultProps={id:void 0,error:void 0,hint:""},vn.propTypes={hint:n().oneOfType([n().string,n().array]),error:n().string,id:n().string,name:n().string.isRequired};var Cl=vn;const Ao=(e,r)=>{let o;switch(e){case"Strikethrough":o=`~~${r}~~`;break;case"Bold":o=`**${r}**`;break;case"Italic":o=`_${r}_`;break;case"Underline":o=`<u>${r}</u>`;break;case"Code":o=`\`\`\`
${r}
\`\`\``;break;case"Link":o=`[${r}](link)`;break;case"Quote":o=`>${r}`;break;default:o=r}return o},Oo=e=>{let r,o={start:e.length,end:0};switch(e){case"Strikethrough":r=`~~${e}~~`,o.end=2;break;case"Bold":r=`**${e}**`,o.end=2;break;case"Italic":r=`_${e}_`,o.end=1;break;case"alt":r=`[${e}]()`,o.end=3;break;case"Underline":r=`<u>${e}</u>`,o.end=4;break;case"Code":r=`\`\`\`
${e}
\`\`\``,o.end=3;break;case"Link":r=`[${e}](link)`,o.end=7;break;case"Quote":r=`>${e}`,o.end=0;break;default:r=""}return{editedText:r,selection:o}},$o=e=>{let r;switch(e){case"BulletList":r="- ";break;case"NumberList":r="1. ";break;case"h1":r="# ";break;case"h2":r="## ";break;case"h3":r="### ";break;case"h4":r="#### ";break;case"h5":r="##### ";break;case"h6":r="###### ";break;default:return""}return r},Zo=(e,r)=>{const o=e.current.getSelection();let s;if(o){const a=Ao(r,o);e.current.replaceSelection(a),e.current.focus()}else{s=Oo(r),e.current.replaceSelection(s.editedText),e.current.focus();const{line:a,ch:l}=e.current.getCursor(),i=l-s.selection.end,c=l-s.selection.end-s.selection.start;e.current.setSelection({line:a,ch:c},{line:a,ch:i})}},vl=(e,r)=>{const o=e.current.getDoc(),s=r==="BulletList"?"- ":"1. ";if(o.somethingSelected()){const a=o.listSelections();let l=null;e.current.operation(function(){a.forEach(function(i){const c=[i.head.line,i.anchor.line].sort();l==null&&(l=o.getLine(c[0]).startsWith(s));for(let u=c[0];u<=c[1];u++)if(l)o.getLine(u).startsWith(s)&&o.replaceRange("",{line:u,ch:0},{line:u,ch:s.length});else{const d=r==="BulletList"?"- ":`${u+1}. `;o.replaceRange(d,{line:u,ch:0})}})})}else{let{line:a}=o.getCursor();const l=$o(r),i=e.current.getLine(a),c=l+i;e.current.setSelection({line:a,ch:0},{line:a,ch:i.length}),e.current.replaceSelection(c)}e.current.focus()},Rl=(e,r)=>{let{line:o}=e.current.getCursor();const s=$o(r),a=e.current.getLine(o),l=a.replace(/#{1,6}\s/g,"").trim(),i=s+l;e.current.setSelection({line:o,ch:0},{line:o,ch:a.length}),e.current.replaceSelection(i),setTimeout(()=>{const c=e.current.getLine(o).length;e.current.focus(),e.current.setCursor({line:o,ch:c})},0)},Tl=(e,r)=>{let{line:o,ch:s}=e.current.getCursor();r.forEach((a,l)=>{let i=e.current.getLine(o).length;e.current.setCursor({line:o,ch:i}),(l>0||l===0&&s!==0)&&(i=e.current.getLine(o).length,e.current.setCursor({line:o,ch:i}),o++,e.current.replaceSelection(`
`)),a.mime.includes("image")?e.current.replaceSelection(`![${a.alt}](${a.url})`):e.current.replaceSelection(`[${a.alt}](${a.url})`)}),setTimeout(()=>e.current.focus(),0)},Ml=(e,r,o,s,a)=>{const l=Ao(r,a),i=e.current.getRange({line:o+1,ch:0},{line:1/0,ch:1/0});if(e.current.replaceRange("",{line:o+1,ch:0},{line:1/0,ch:1/0}),e.current.replaceSelection(""),e.current.setCursor({line:o,ch:s}),e.current.replaceSelection(`
`),e.current.replaceSelection(l),r==="Code"){let{line:c}=e.current.getCursor();e.current.setCursor({line:c-1,ch:a.length})}e.current.replaceRange(i,{line:o+4,ch:0},{line:1/0,ch:1/0}),e.current.focus()},Dl=(e,r,o,s)=>{const a=Oo(r),l=e.current.getRange({line:o+1,ch:0},{line:1/0,ch:1/0});if(e.current.replaceRange("",{line:o+1,ch:0},{line:1/0,ch:1/0}),e.current.setCursor({line:o,ch:s}),e.current.replaceSelection(`
`),e.current.replaceSelection(a.editedText),r==="Code")o+=2,e.current.setSelection({line:o,ch:0},{line:o,ch:4});else{o+=1;let{ch:i}=e.current.getCursor(),c=i-a.selection.end,u=i-a.selection.end-a.selection.start;e.current.setSelection({line:o,ch:u},{line:o,ch:c})}e.current.replaceRange(l,{line:o+2,ch:0},{line:1/0,ch:1/0}),e.current.focus()},kl=(e,r)=>{const o=e.current.getSelection();let{line:s}=e.current.getCursor(),a=e.current.getLine(s).length;o?Ml(e,r,s,a,o):Dl(e,r,s,a)};var Il=g(71933),Ll=g(74464);const xl=(e,r)=>`${e}${Math.floor(r*255).toString(16).padStart(2,0)}`,Pl=(0,N.ZP)(w.k)`
  background: ${({theme:e})=>xl(e.colors.neutral800,.2)};
`,wl=(0,N.ZP)(A.x)`
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Fl=(0,N.ZP)(yn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};

    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`,Rn=({children:e,isExpandMode:r,error:o,previewContent:s,onCollapse:a})=>{const{formatMessage:l}=(0,Q.Z)();return(0,h.F5)(r),r?t.createElement(Il.h,{role:"dialog","aria-modal":!1},t.createElement(xo.i,{onEscape:a},t.createElement(Pl,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:4,justifyContent:"center",onClick:a},t.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"popupShadow",overflow:"hidden",width:"70%",height:"70%",onClick:i=>i.stopPropagation()},t.createElement(w.k,{height:"100%",alignItems:"flex-start"},t.createElement(wl,{flex:"1",height:"100%"},e),t.createElement(w.k,{alignItems:"start",direction:"column",flex:1,height:"100%",width:"100%"},t.createElement(w.k,{height:(0,h.Q1)(48),background:"neutral100",justifyContent:"flex-end",shrink:0,width:"100%"},t.createElement(Fl,{onClick:a},t.createElement(G.Z,null,l({id:"components.Wysiwyg.collapse",defaultMessage:"Collapse"})),t.createElement(Ll.Z,null))),t.createElement(A.x,{position:"relative",height:"100%",width:"100%"},t.createElement(ko,{data:s})))))))):t.createElement(A.x,{borderColor:o?"danger600":"neutral200",borderStyle:"solid",borderWidth:"1px",hasRadius:!0},e)};Rn.defaultProps={error:void 0,previewContent:""},Rn.propTypes={children:n().node.isRequired,error:n().string,isExpandMode:n().bool.isRequired,previewContent:n().string,onCollapse:n().func.isRequired};const Sl=(0,N.ZP)(A.x)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Al=(0,N.ZP)(G.Z)`
  line-height: 0;
`,Tn=({hint:e,disabled:r,error:o,intlLabel:s,labelAction:a,name:l,onChange:i,placeholder:c,value:u,required:d})=>{const{formatMessage:m}=(0,Q.Z)(),f=(0,t.useRef)(null),p=(0,t.useRef)(null),[y,b]=(0,t.useState)(!1),[v,k]=(0,t.useState)(!1),[E,R]=(0,t.useState)(!1),{components:F}=(0,h.yX)(),S=F["media-library"],T=()=>k(B=>!B),D=()=>b(B=>!B),x=()=>{b(!1),R(B=>!B)},j=(B,K,W)=>{switch(B){case"Link":case"Strikethrough":{Zo(K,B),W();break}case"Code":case"Quote":{kl(K,B),W();break}case"Bold":case"Italic":case"Underline":{Zo(K,B);break}case"BulletList":case"NumberList":{vl(K,B),W();break}case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":{Rl(K,B);break}default:}},z=B=>{const K=B.map(W=>({alt:W.alternativeText||W.name,url:(0,h.CR)(W.url),mime:W.mime}));Tl(p,K),k(!1)},Z=c?m({id:c.id,defaultMessage:c.defaultMessage},{...c.values}):"",V=s.id?m({id:s.id,defaultMessage:s.defaultMessage},{...s.values}):l;return t.createElement(t.Fragment,null,t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(w.k,{gap:1},t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800"},V,d&&t.createElement(Al,{textColor:"danger600"},"*")),a&&t.createElement(Sl,{paddingLeft:1},a)),t.createElement(Rn,{isExpandMode:E,error:o,previewContent:u,onCollapse:x},t.createElement(yl,{isExpandMode:E,editorRef:p,isPreviewMode:y,onActionClick:j,onToggleMediaLib:T,onTogglePreviewMode:E?void 0:D,disabled:r}),t.createElement(ll,{disabled:r,isExpandMode:E,editorRef:p,error:o,isPreviewMode:y,name:l,onChange:i,placeholder:Z,textareaRef:f,value:u}),!E&&t.createElement(El,{onToggleExpand:x})),t.createElement(Cl,{hint:e,name:l,error:o})),o&&t.createElement(A.x,{paddingTop:1},t.createElement(G.Z,{variant:"pi",textColor:"danger600","data-strapi-field-error":!0},o)),v&&t.createElement(S,{onClose:T,onSelectAssets:z}))};Tn.defaultProps={disabled:!1,error:"",labelAction:void 0,placeholder:null,required:!1,value:"",hint:""},Tn.propTypes={hint:n().oneOfType([n().string,n().array]),disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,value:n().string};var Ol=Tn,Mn=g(10369),$l=g(38705),ut=g(69932),Zl=g(27169),qo=(e,r)=>{const[o,s]=(0,t.useState)(e);return(0,t.useEffect)(()=>{const a=setTimeout(()=>{s(e)},r);return()=>{clearTimeout(a)}},[e,r]),o},ql=/^[A-Za-z0-9-_.~]*$/,Nl=g(63642);const jl=(0,N.ZP)(Nl.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,No=(0,N.ZP)(w.k)`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;

    path {
      fill: ${({theme:e,available:r})=>r?e.colors.success600:e.colors.danger600};
    }
  }
`,Bl=N.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Wl=(0,N.ZP)(w.k)`
  animation: ${Bl} 2s infinite linear;
`,Dn=({attribute:e,contentTypeUID:r,hint:o,disabled:s,error:a,intlLabel:l,labelAction:i,name:c,onChange:u,value:d,placeholder:m,required:f})=>{const{modifiedData:p,initialData:y,layout:b}=(0,h.Wq)(),[v,k]=(0,t.useState)(!1),[E,R]=(0,t.useState)(null),F=qo(d,300),S=(0,t.useRef)(),T=(0,h.lm)(),{formatAPIError:D}=(0,h.So)(),x=y[c],{formatMessage:j}=(0,Q.Z)(),z=b?.options?.timestamps??0,Z=!y[z],V=qo(p[e.targetField],300),[B,K]=(0,t.useState)(!1),[W,X]=(0,t.useState)(null),{post:q}=(0,h.kY)(),ee=l.id?j({id:l.id,defaultMessage:l.defaultMessage},{...l.values}):c,M=m?j({id:m.id,defaultMessage:m.defaultMessage},{...m.values}):"";S.current=async(O=!1)=>{k(!0);try{const{data:{data:U}}=await q(ce("uid/generate"),{contentTypeUID:r,field:c,data:p});u({target:{name:c,value:U,type:"text"}},O),k(!1)}catch(U){k(!1),T({type:"warning",message:D(U)})}};const L=async()=>{if(d){k(!0);try{const{data:O}=await q(ce("uid/check-availability"),{contentTypeUID:r,field:c,value:d?d.trim():""});k(!1),R(O)}catch(O){k(!1),T({type:"warning",message:D(O)})}}};(0,t.useEffect)(()=>{!d&&e.required&&S.current(!0)},[e.required,S,d]),(0,t.useEffect)(()=>{F?.trim().match(ql)&&F!==x&&L(),F||R(null)},[x,F]),(0,t.useEffect)(()=>{let O;return E?.isAvailable&&(O=setTimeout(()=>{R(null)},4e3)),()=>{O&&clearTimeout(O)}},[E]),(0,t.useEffect)(()=>{!B&&Z&&V&&p[e.targetField]&&!d&&S.current(!0)},[V,B,Z]);const Y=()=>{X(j({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}))},H=()=>{X(null)},$=O=>{O.target.value&&Z&&K(!0),u(O)};return t.createElement(Mn.o,{disabled:s,error:a,endAction:t.createElement(w.k,{position:"relative",gap:1},E&&!W&&t.createElement(No,{alignItems:"center",gap:1,justifyContent:"flex-end",available:!!E?.isAvailable,"data-not-here-outer":!0,position:"absolute",pointerEvents:"none",right:6,width:"100px"},E?.isAvailable?t.createElement($l.Z,null):t.createElement(ut.Z,null),t.createElement(G.Z,{textColor:E.isAvailable?"success600":"danger600",variant:"pi"},j(E.isAvailable?{id:"content-manager.components.uid.available",defaultMessage:"Available"}:{id:"content-manager.components.uid.unavailable",defaultMessage:"Unavailable"}))),!s&&t.createElement(t.Fragment,null,W&&t.createElement(No,{alignItems:"center",justifyContent:"flex-end",gap:1},t.createElement(G.Z,{textColor:"primary600",variant:"pi"},W)),t.createElement(jl,{onClick:()=>S.current(),label:j({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}),onMouseEnter:Y,onMouseLeave:H},v?t.createElement(Wl,{"data-testid":"loading-wrapper"},t.createElement(Zl.Z,null)):t.createElement(_r.Z,null)))),hint:o,label:ee,labelAction:i,name:c,onChange:$,placeholder:M,value:d||"",required:f})};Dn.propTypes={attribute:n().shape({targetField:n().string,required:n().bool}).isRequired,contentTypeUID:n().string.isRequired,disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,value:n().string,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,hint:n().oneOfType([n().string,n().array])},Dn.defaultProps={disabled:!1,error:void 0,labelAction:void 0,placeholder:void 0,value:"",required:!1,hint:""};var zl=Dn,Vl=g(88423),kn=g.n(Vl),Ue=g(20108);function Ul(e,r){return o=>{const s=r(o);return t.createElement(e,{...o,...s})}}var Hl=Ul;function Gl({componentUid:e,isUserAllowedToEditField:r,isUserAllowedToReadField:o,name:s,queryInfos:a}){const{isCreatingEntry:l,createActionAllowedFields:i,readActionAllowedFields:c,updateActionAllowedFields:u,slug:d,modifiedData:m}=(0,h.Wq)(),f=(0,t.useMemo)(()=>r===!0?!0:(l?i:u).includes(s),[l,i,s,r,u]),p=(0,t.useMemo)(()=>o?!0:(l?[]:c).includes(s),[l,o,s,c]),y=s.split(".");let b;e&&(b=I()(m,y.slice(0,-1))?.id);const v=(0,t.useMemo)(()=>l?null:e?b?ce(`relations/${e}/${b}/${y.at(-1)}`):null:ce(`relations/${d}/${m.id}/${s.split(".").at(-1)}`),[l,e,d,m.id,s,b,y]),k=(0,t.useMemo)(()=>ce(e?`relations/${e}/${s.split(".").at(-1)}`:`relations/${d}/${s.split(".").at(-1)}`),[e,d,s]);return{componentId:b,isComponentRelation:Boolean(e),queryInfos:{...a,endpoints:{search:k,relation:v}},isCreatingEntry:l,isFieldAllowed:f,isFieldReadable:p}}var Ql=Gl;function Kl(e,r){return`${ce(`collectionType/${e}/${r??""}`)}`}const In=(e,{shouldAddLink:r,mainFieldName:o,targetModel:s})=>{const a={...e};return r&&(a.href=Kl(s,a.id)),a.publicationState=!1,a?.publishedAt!==void 0&&(a.publicationState=a.publishedAt?ze.PUBLISHED:ze.DRAFT),a.mainField=a[o],a},Yl=(e,{shouldAddLink:r=!1,mainFieldName:o,targetModel:s}={})=>[...e].map(a=>In(a,{shouldAddLink:r,mainFieldName:o,targetModel:s})),Xl=(e,{mainFieldName:r})=>{const{data:o}=e,{pages:s=[]}=o??{};return{...e,data:s.map(a=>a?.results.map(l=>In(l,{mainFieldName:r}))).filter(Boolean).flat()}},Jl=(e=[],r=[])=>{const o=e.reduce((a,l)=>r.find(i=>i.id===l.id)?a:[...a,l.id],[]),s=r.reduce((a,l)=>e.find(i=>i.id===l.id)?a:[...a,l.id],[]);return[o,s]},_l=e=>{const r=t.useRef(e);return t.useEffect(()=>{r.current=e}),t.useMemo(()=>(...o)=>r.current?.(...o),[])},ec=(e,{relation:r,search:o})=>{const[s,a]=(0,t.useState)({}),[l,i]=(0,t.useState)(0),{get:c}=(0,h.kY)(),u=async({pageParam:T=1})=>{try{const{data:D}=await c(r?.endpoint,{params:{...r.pageParams??{},page:T}});return i(T),D}catch{return null}},d=async({pageParam:T=1})=>{try{const{data:D}=await c(o.endpoint,{params:{...o.pageParams??{},...s,page:T}});return D}catch{return null}},{onLoad:m,normalizeArguments:f={}}=r,p=(0,Ue.useInfiniteQuery)(["relation",...e],u,{cacheTime:0,enabled:r.enabled,getNextPageParam(T){const D=!T?.pagination;if(!(!T||D||T?.pagination.page>=T?.pagination.pageCount))return T.pagination.page+1},select:T=>({...T,pages:T.pages.map(D=>{if(!D)return D;const{data:x,results:j,pagination:z}=D,Z=!!x;let V=[];return Z?V=[x]:j&&(V=[...j].reverse()),{pagination:z,results:V}})})}),{pageGoal:y}=r,{status:b,data:v,fetchNextPage:k,hasNextPage:E}=p;(0,t.useEffect)(()=>{y>l&&E&&b==="success"&&k({pageParam:l+1})},[y,l,k,E,b]);const R=_l(m);(0,t.useEffect)(()=>{if(b==="success"&&v&&v.pages?.at(-1)?.results&&R){const T=Yl(v.pages.at(-1).results,f);R(T)}},[b,R,v]);const F=(0,Ue.useInfiniteQuery)(["relation",...e,"search",JSON.stringify(s)],d,{enabled:Object.keys(s).length>0,getNextPageParam(T){if(!(!T?.pagination||T.pagination.page>=T.pagination.pageCount))return T.pagination.page+1}});return{relations:p,search:F,searchFor:(T,D={})=>{a({...D,_q:T})}}},jo=(e,r)=>o=>{const s=o.split(".");return s.reduce((a,l,i)=>{const c=I()(e,a),u=I()(r,[...s.slice(0,i),l,"__temp_key__"]);if(Array.isArray(c)&&typeof u=="number"){const d=c.findIndex(m=>m.__temp_key__===u);return a.push(d.toString()),a}return a.push(l),a},[])},Ln=({error:e,componentId:r,isComponentRelation:o,editable:s,description:a,intlLabel:l,isCreatingEntry:i,isFieldAllowed:c,isFieldReadable:u,labelAction:d,mainField:m,name:f,queryInfos:{endpoints:p,defaultParams:y,shouldDisplayRelationLink:b},placeholder:v,required:k,relationType:E,size:R,targetModel:F})=>{const[S,T]=(0,t.useState)(""),{formatMessage:D}=(0,Q.Z)(),{slug:x,initialData:j,modifiedData:z,relationConnect:Z,relationDisconnect:V,relationLoad:B,relationReorder:K}=(0,h.Wq)(),W=f.split("."),X=jo(j,z)(f),q=I()(z,f,[]),ee=Math.ceil(I()(j,f,[]).length/en),{relations:M,search:L,searchFor:Y}=ec([x,X.join("."),z.id,y],{relation:{enabled:!!p.relation,endpoint:p.relation,pageGoal:ee,pageParams:{...y,pageSize:en},onLoad(te){B({target:{initialDataPath:["initialData",...X],modifiedDataPath:["modifiedData",...W],value:te}})},normalizeArguments:{mainFieldName:m.name,shouldAddLink:b,targetModel:F}},search:{endpoint:p.search,pageParams:{...y,entityId:i?void 0:o?r:j.id,pageSize:ka}}}),H=(0,t.useMemo)(()=>E.toLowerCase().includes("morph"),[E]),$=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(E),O=(0,t.useMemo)(()=>H?!0:i?!s:!c&&u||!s,[H,i,s,c,u]),U=te=>{const pe=In(te,{mainFieldName:m.name,shouldAddLink:b,targetModel:F});Z({name:f,value:pe,toOneRelation:$})},se=te=>{V({name:f,id:te.id})},P=()=>{M.fetchNextPage()},re=(te="")=>{const[pe,Ie]=Jl(q,I()(j,f));Y(te,{idsToInclude:Ie,idsToOmit:pe})},de=()=>{L.fetchNextPage()},ye=te=>`${te+1} of ${q.length}`,at=(te,pe)=>{const Ie=q[te];T(D({id:C("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:Ie.mainField??Ie.id,position:ye(pe)})),K({name:f,newIndex:pe,oldIndex:te})},Ct=te=>{const pe=q[te];T(D({id:C("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:pe.mainField??pe.id,position:ye(te)}))},vt=te=>{const pe=q[te];T(D({id:C("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:pe.mainField??pe.id,position:ye(te)}))},Rt=te=>{const pe=q[te];T(D({id:C("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:pe.mainField??pe.id}))};if(!c&&i||!i&&!c&&!u)return t.createElement(h.X0,{name:f,intlLabel:l,labelAction:d});const Re=q.length,ke=(I()(j,X)??[]).length,Tt=M.data?.pages[0]?.pagination?.total??0,Ne=!M.data&&Re===ke?Re:Re-ke+Tt;return t.createElement(ni,{error:e,canReorder:!$,description:a,disabled:O,iconButtonAriaLabel:D({id:C("components.RelationInput.icon-button-aria-label"),defaultMessage:"Drag"}),id:f,label:`${D({id:l.id,defaultMessage:l.defaultMessage})} ${Ne>0?`(${Ne})`:""}`,labelAction:d,labelLoadMore:i?null:D({id:C("relation.loadMore"),defaultMessage:"Load More"}),labelDisconnectRelation:D({id:C("relation.disconnect"),defaultMessage:"Remove"}),listAriaDescription:D({id:C("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"}),listHeight:320,liveText:S,loadingMessage:D({id:C("relation.isLoading"),defaultMessage:"Relations are loading"}),name:f,noRelationsMessage:D({id:C("relation.notAvailable"),defaultMessage:"No relations available"}),numberOfRelationsToDisplay:en,onDropItem:vt,onGrabItem:Ct,onCancel:Rt,onRelationConnect:U,onRelationDisconnect:se,onRelationLoadMore:P,onRelationReorder:at,onSearch:te=>re(te),onSearchNextPage:()=>de(),placeholder:D(v||{id:C("relation.add"),defaultMessage:"Add relation"}),publicationStateTranslations:{[ze.DRAFT]:D({id:C("relation.publicationState.draft"),defaultMessage:"Draft"}),[ze.PUBLISHED]:D({id:C("relation.publicationState.published"),defaultMessage:"Published"})},relations:kn()({...M,data:q},"data","hasNextPage","isFetchingNextPage","isLoading","isSuccess"),required:k,searchResults:Xl(L,{mainFieldName:m.name}),size:R})};Ln.defaultProps={componentId:void 0,editable:!0,error:void 0,description:"",labelAction:null,isComponentRelation:!1,isFieldAllowed:!0,placeholder:null,required:!1},Ln.propTypes={componentId:n().number,editable:n().bool,error:n().string,description:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,isCreatingEntry:n().bool.isRequired,isComponentRelation:n().bool,isFieldAllowed:n().bool,isFieldReadable:n().bool.isRequired,mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired}).isRequired,name:n().string.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,relationType:n().string.isRequired,size:n().number.isRequired,targetModel:n().string.isRequired,queryInfos:n().shape({defaultParams:n().shape({locale:n().string}),endpoints:n().shape({relation:n().string,search:n().string.isRequired}).isRequired,shouldDisplayRelationLink:n().bool.isRequired}).isRequired};const tc=(0,t.memo)(Ln);var nc=Hl(tc,Ql);function rc(e,r){return o=>{const s=r(o.keys);return t.createElement(e,{...o,...s})}}var oc=rc,sc=(e,r=!1)=>[{metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},disabled:r,hidden:r},key:"__enum_option_null",value:""},...e.map(o=>({metadatas:{intlLabel:{id:o,defaultMessage:o},hidden:!1,disabled:!1},key:o,value:o}))],ac=(e="")=>{switch(Br()(e)){case"boolean":return"bool";case"biginteger":return"text";case"decimal":case"float":case"integer":return"number";case"date":case"datetime":case"time":return e;case"email":return"email";case"enumeration":return"select";case"password":return"password";case"string":return"text";case"text":return"textarea";case"media":case"file":case"files":return"media";case"json":return"json";case"wysiwyg":case"WYSIWYG":case"richtext":return"wysiwyg";case"uid":return"uid";default:return e||"text"}},ic=e=>{let r;return e==="float"||e==="decimal"?r=.01:r=1,r};function lc(e){const{createActionAllowedFields:r,formErrors:o,isCreatingEntry:s,modifiedData:a,onChange:l,readActionAllowedFields:i,shouldNotRunValidations:c,updateActionAllowedFields:u}=(0,h.Wq)(),d=(0,t.useMemo)(()=>s?r:u,[s,r,u]),m=(0,t.useMemo)(()=>s?[]:i,[s,i]),f=I()(a,e,null);return{allowedFields:d,formErrors:o,isCreatingEntry:s,onChange:l,readableFields:m,shouldNotRunValidations:c,value:f}}var cc=lc,Bo=["type","model","via","collection","default","plugin","enum","regex","pluginOptions"];function xn({allowedFields:e,componentUid:r,fieldSchema:o,formErrors:s,isCreatingEntry:a,keys:l,labelAction:i,metadatas:c,onChange:u,readableFields:d,shouldNotRunValidations:m,queryInfos:f,value:p,size:y,customFieldInputs:b}){const{fields:v}=(0,h.yX)(),{formatMessage:k}=(0,Q.Z)(),{contentType:E}=Oe(),R=(0,t.useMemo)(()=>!I()(c,"editable",!0),[c]),{type:F,customField:S}=o,T=I()(s,[l],null),D=(0,t.useMemo)(()=>Gr(l),[l]),x=(0,t.useMemo)(()=>{const U=Vr()(o,m?[...Bo,"required","minLength"]:Bo),se=o.regex||null;if(se){const P=new RegExp(se);P&&(U.regex=P)}return U},[o,m]),j=(0,t.useMemo)(()=>I()(x,["required"],!1),[x]),z=(0,t.useMemo)(()=>{const U=I()(E,["attributes"],{});return I()(U,[D[0],"type"],null)==="dynamiczone"},[E,D]),Z=(0,t.useMemo)(()=>ac(F),[F]),V=(0,t.useMemo)(()=>F==="media"&&!p?[]:p,[F,p]),B=(0,t.useMemo)(()=>ic(F),[F]),K=(0,t.useMemo)(()=>{const U=D.join(".");if(e.includes(U))return!0;if(z)return e.includes(D[0]);if(D.length>1){const P=dt()(D,D.length-1).join(".");return e.includes(P)}return!1},[e,D,z]),W=(0,t.useMemo)(()=>{const U=D.join(".");if(d.includes(U))return!0;if(z)return d.includes(D[0]);if(D.length>1){const P=dt()(D,D.length-1).join(".");return d.includes(P)}return!1},[d,D,z]),X=(0,t.useMemo)(()=>W||K,[K,W]),q=(0,t.useMemo)(()=>a?R:W&&!K?!0:R,[R,a,K,W]),ee=(0,t.useMemo)(()=>sc(o.enum||[],j),[o,j]),{label:M,description:L,placeholder:Y,visible:H}=c,$=(0,t.useMemo)(()=>{if(!c.step||Z!=="datetime"&&Z!=="time")return B;if(!V)return c.step;let U;return Z==="datetime"?U=parseInt(V.substr(14,2),10):Z==="time"&&(U=parseInt(V.slice(-2),10)),U%c.step===0?c.step:B},[Z,V,c.step,B]);if(H===!1)return null;if(!X)return t.createElement(h.X0,{description:L?{id:L,defaultMessage:L}:null,intlLabel:{id:M,defaultMessage:M},labelAction:i,error:T&&k(T),name:l,required:j});if(F==="relation")return t.createElement(nc,{...c,...o,componentUid:r,description:c.description?k({id:c.description,defaultMessage:c.description}):void 0,intlLabel:{id:c.label,defaultMessage:c.label},labelAction:i,isUserAllowedToEditField:K,isUserAllowedToReadField:W,name:l,placeholder:c.placeholder?{id:c.placeholder,defaultMessage:c.placeholder}:null,queryInfos:f,size:y,value:p,error:T&&k(T)});const O={uid:zl,media:v.media,wysiwyg:Ol,...v,...b};return t.createElement(h.jm,{attribute:o,autoComplete:"new-password",intlLabel:{id:M,defaultMessage:M},isNullable:Z==="bool"&&[null,void 0].includes(o.default),description:L?{id:L,defaultMessage:L}:null,disabled:q,error:T,labelAction:i,contentTypeUID:E.uid,customInputs:O,multiple:o.multiple||!1,name:l,onChange:u,options:ee,placeholder:Y?{id:Y,defaultMessage:Y}:null,required:o.required||!1,step:$,type:S||Z,value:V,withDefaultValue:!1})}xn.defaultProps={componentUid:void 0,formErrors:{},labelAction:void 0,size:void 0,value:null,queryInfos:{},customFieldInputs:{}},xn.propTypes={allowedFields:n().array.isRequired,componentUid:n().string,fieldSchema:n().object.isRequired,formErrors:n().object,keys:n().string.isRequired,isCreatingEntry:n().bool.isRequired,labelAction:n().element,metadatas:n().object.isRequired,onChange:n().func.isRequired,readableFields:n().array.isRequired,size:n().number,shouldNotRunValidations:n().bool.isRequired,value:n().any,queryInfos:n().shape({containsKey:n().string,defaultParams:n().object,endPoint:n().string}),customFieldInputs:n().object};const dc=(0,t.memo)(xn,$e());var Pn=oc(dc,cc);const mt=new Map;var wn=(e=[])=>{const[r,o]=(0,t.useState)(Object.fromEntries(mt)),s=e.filter(u=>!mt.get(u)),[a,l]=(0,t.useState)(()=>!!s.length),i=(0,h.mZ)();(0,t.useEffect)(()=>{const u=m=>{o(m),l(!1)},d=async(m,f)=>{const p=await Promise.all(f);m.forEach((y,b)=>{mt.set(y,p[b].default)}),u(Object.fromEntries(mt))};if(s.length>0){l(!0);const m=s.map(f=>i.get(f).components.Input());m.length>0&&d(s,m)}},[s,i]);const c=(0,t.useCallback)(()=>{mt.clear(),o({})},[]);return{isLazyLoading:a,lazyComponentStore:r,cleanup:c}};const Fn=({componentUid:e,isFromDynamicZone:r,isNested:o,name:s})=>{const{getComponentLayout:a}=Oe(),i=(0,t.useMemo)(()=>a(e),[e,a]).layouts.edit,{lazyComponentStore:c}=wn();return t.createElement(A.x,{background:r?"":"neutral100",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,hasRadius:o,borderColor:o?"neutral200":""},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},i.map((u,d)=>t.createElement(De.r,{gap:4,key:d},u.map(({name:m,size:f,metadatas:p,fieldSchema:y,queryInfos:b})=>{const v=y.type==="component",k=`${s}.${m}`;if(v){const E=y.component;return t.createElement(fe.P,{col:f,s:12,xs:12,key:m},t.createElement(Ot,{componentUid:E,intlLabel:{id:p.label,defaultMessage:p.label},isNested:!0,isRepeatable:y.repeatable,max:y.max,min:y.min,name:k,required:y.required||!1}))}return t.createElement(fe.P,{col:f,key:m,s:12,xs:12},t.createElement(Pn,{componentUid:e,keys:k,fieldSchema:y,metadatas:p,queryInfos:b,size:f,customFieldInputs:c}))})))))};Fn.defaultProps={isFromDynamicZone:!1,isNested:!1},Fn.propTypes={componentUid:n().string.isRequired,isFromDynamicZone:n().bool,isNested:n().bool,name:n().string.isRequired};var uc=Fn,pt=g(19406),mc=g(41119),Wo=g.n(mc);const pc=N.ZP.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`;var gc=()=>t.createElement(pc,{padding:6,background:"primary100"});const fc=(0,N.ZP)(ge.h)`
  background-color: transparent;

  svg {
    path {
      fill: ${({theme:e,expanded:r})=>r?e.colors.primary600:e.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }
`,hc=(0,N.ZP)(w.k)`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({theme:e,expanded:r})=>r?e.colors.primary600:void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`,Sn=({componentFieldName:e,componentUid:r,fields:o,index:s,isOpen:a,isReadOnly:l,mainField:i,moveComponentField:c,onClickToggle:u,toggleCollapses:d,onGrabItem:m,onDropItem:f,onCancel:p})=>{const{modifiedData:y,removeRepeatableField:b,triggerFormValidation:v}=(0,h.Wq)(),k=Wo()(I()(y,[...e.split("."),i],"")),E=(0,t.useRef)(null),{formatMessage:R}=(0,Q.Z)(),[F]=e.split("."),[{handlerId:S,isDragging:T,handleKeyDown:D},x,j,z,Z]=tn(!l,{type:`${Ce.COMPONENT}_${F}`,index:s,item:{displayedValue:k},onMoveItem:c,onStart(){d()},onEnd(){v()},onGrabItem:m,onDropItem:f,onCancel:p});(0,t.useEffect)(()=>{Z((0,it.rX)(),{captureDraggingState:!1})},[Z,s]);const V=kt(E,z),B=kt(x,j),{lazyComponentStore:K}=wn();return t.createElement(A.x,{ref:B},T?t.createElement(gc,null):t.createElement(cn.U,{expanded:a,onToggle:u,id:e,size:"S"},t.createElement(dn.B,{action:l?null:t.createElement(hc,{gap:0,expanded:a},t.createElement(fc,{expanded:a,noBorder:!0,onClick:()=>{b(e),d()},label:R({id:C("containers.Edit.delete"),defaultMessage:"Delete"}),icon:t.createElement(we.Z,null)}),t.createElement(ge.h,{className:"drag-handle",ref:V,forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:W=>W.stopPropagation(),"data-handler-id":S,label:R({id:C("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:D},t.createElement(Ae.Z,null))),title:k,togglePosition:"left"}),t.createElement(un.v,null,t.createElement(w.k,{direction:"column",alignItems:"stretch",background:"neutral100",padding:6,gap:6},o.map((W,X)=>t.createElement(De.r,{gap:4,key:X},W.map(({name:q,fieldSchema:ee,metadatas:M,queryInfos:L,size:Y})=>{const H=ee.type==="component",$=`${e}.${q}`;if(H){const O=ee.component;return t.createElement(fe.P,{col:Y,s:12,xs:12,key:q},t.createElement(Ot,{componentUid:O,intlLabel:{id:M.label,defaultMessage:M.label},isRepeatable:ee.repeatable,isNested:!0,name:$,max:ee.max,min:ee.min,required:ee.required}))}return t.createElement(fe.P,{key:$,col:Y,s:12,xs:12},t.createElement(Pn,{componentUid:r,fieldSchema:ee,keys:$,metadatas:M,queryInfos:L,size:Y,customFieldInputs:K}))})))))))};Sn.defaultProps={componentUid:void 0,fields:[],isReadOnly:!1,isOpen:!1,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0,toggleCollapses(){}},Sn.propTypes={componentFieldName:n().string.isRequired,componentUid:n().string,fields:n().array,index:n().number.isRequired,isOpen:n().bool,isReadOnly:n().bool,mainField:n().string.isRequired,moveComponentField:n().func.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onClickToggle:n().func.isRequired,toggleCollapses:n().func};var yc=(0,t.memo)(Sn),zo=g(861);const bc=(0,N.ZP)(A.x)`
  overflow: hidden;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
`,Ec=(0,N.ZP)(A.x)`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({theme:e})=>e.colors.primary600};
  }
`,An=({children:e,error:r})=>{const{formatMessage:o}=(0,Q.Z)();return t.createElement(zo.k,{attributeName:"data-strapi-accordion-toggle"},e,r&&t.createElement(A.x,{paddingTop:1},t.createElement(G.Z,{variant:"pi",textColor:"danger600"},o({id:r.id,defaultMessage:r.defaultMessage},{...r.values}))))};An.defaultProps={error:void 0},An.propTypes={children:n().node.isRequired,error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object})};function Cc(e,r={}){return Object.keys(r).filter(o=>o.startsWith(e)).map(o=>o.split(".").slice(0,e.split(".").length+1).join("."))}const vc=(0,N.ZP)(Jr.A)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`,On=({componentUid:e,componentValue:r,componentValueLength:o,isReadOnly:s,max:a,min:l,name:i})=>{const{addRepeatableComponentToField:c,formErrors:u,moveComponentField:d}=(0,h.Wq)(),m=(0,h.lm)(),{formatMessage:f}=(0,Q.Z)(),[p,y]=(0,t.useState)(""),[b,v]=(0,t.useState)(""),{getComponentLayout:k,components:E}=Oe(),R=(0,t.useMemo)(()=>k(e),[e,k]),F=(0,t.useMemo)(()=>_t(r||[])+1,[r]),S=Cc(i,u),T=l-o,D=I()(u,i,{id:""}).id.includes("min"),x=()=>{y("")},j=()=>{s||(o<a?(c(i,R,E,D),y(F)):o>=a&&m({type:"info",message:{id:C("components.notification.info.maximum-requirement")}}))},z=(M,L)=>{v(f({id:C("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${i}.${L}`,position:B(M)})),d({name:i,newIndex:M,currentIndex:L})},Z=I()(R,["settings","mainField"],"id"),V=M=>()=>{y(p===M?"":M)},B=M=>`${M+1} of ${o}`,K=M=>{v(f({id:C("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${i}.${M}`}))},W=M=>{v(f({id:C("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${i}.${M}`,position:B(M)}))},X=M=>{v(f({id:C("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${i}.${M}`,position:B(M)}))};let q=u[i];if(D?q={id:C("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",values:{number:T}}:S.some(M=>M.split(".").length>1)&&!D&&(q={id:C("components.RepeatableComponent.error-message"),defaultMessage:"The component(s) contain error(s)"}),o===0)return t.createElement(To,{error:q,isReadOnly:s,onClick:j});const ee=`${i}-item-instructions`;return t.createElement(A.x,{hasRadius:!0},t.createElement(Xe.T,{id:ee},f({id:C("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),t.createElement(Xe.T,{"aria-live":"assertive"},b),t.createElement(An,{error:q,ariaDescribedBy:ee},t.createElement(Ec,{"aria-describedby":ee},r.map(({__temp_key__:M},L)=>t.createElement(yc,{componentFieldName:`${i}.${L}`,componentUid:e,fields:R.layouts.edit,key:M,index:L,isOpen:p===M,isReadOnly:s,mainField:Z,moveComponentField:z,onClickToggle:V(M),toggleCollapses:x,onCancel:K,onDropItem:X,onGrabItem:W}))),t.createElement(bc,null,t.createElement(w.k,{justifyContent:"center",height:"48px",background:"neutral0"},t.createElement(vc,{disabled:s,onClick:j,startIcon:t.createElement(pt.Z,null)},f({id:C("containers.EditView.add.new-entry"),defaultMessage:"Add an entry"}))))))};On.defaultProps={componentValue:null,componentValueLength:0,isReadOnly:!1,max:1/0,min:0},On.propTypes={componentUid:n().string.isRequired,componentValue:n().oneOfType([n().array,n().object]),componentValueLength:n().number,isReadOnly:n().bool,max:n().number,min:n().number,name:n().string.isRequired};var Rc=(0,t.memo)(On);const $n=({addNonRepeatableComponentToField:e,componentUid:r,intlLabel:o,isCreatingEntry:s,isFromDynamicZone:a,isRepeatable:l,isNested:i,labelAction:c,max:u,min:d,name:m,hasChildrenAllowedFields:f,hasChildrenReadableFields:p,isReadOnly:y,componentValue:b,removeComponentFromField:v,required:k})=>{const{formatMessage:E}=(0,Q.Z)(),R=bi()(b),F=b!==null||a,S=!l&&F&&!a&&f,{getComponentLayout:T,components:D}=Oe(),x=(0,t.useMemo)(()=>T(r),[r,T]);if(!f&&s)return t.createElement(h.X0,{labelAction:c,intlLabel:o,name:m});if(!f&&!s&&!p)return t.createElement(h.X0,{labelAction:c,intlLabel:o,name:m});const j=()=>{e(m,x,D)};return t.createElement(A.x,null,t.createElement(w.k,{justifyContent:"space-between"},o&&t.createElement(Di,{intlLabel:o,labelAction:c,name:m,numberOfEntries:R,showNumberOfEntries:l,required:k}),S&&t.createElement(ge.h,{label:E({id:C("components.reset-entry"),defaultMessage:"Reset Entry"}),icon:t.createElement(we.Z,null),noBorder:!0,onClick:()=>{v(m,r)}})),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},!l&&!F&&t.createElement(To,{isReadOnly:y,onClick:j}),!l&&F&&t.createElement(uc,{componentUid:r,isFromDynamicZone:a,isNested:i,name:m}),l&&t.createElement(Rc,{componentValue:b,componentValueLength:R,componentUid:r,isReadOnly:y,max:u,min:d,name:m})))};$n.defaultProps={componentValue:null,hasChildrenAllowedFields:!1,hasChildrenReadableFields:!1,intlLabel:void 0,isFromDynamicZone:!1,isReadOnly:!1,isRepeatable:!1,isNested:!1,labelAction:void 0,max:1/0,min:-1/0,required:!1},$n.propTypes={addNonRepeatableComponentToField:n().func.isRequired,componentUid:n().string.isRequired,componentValue:n().oneOfType([n().object,n().array]),hasChildrenAllowedFields:n().bool,hasChildrenReadableFields:n().bool,isCreatingEntry:n().bool.isRequired,isFromDynamicZone:n().bool,isReadOnly:n().bool,isRepeatable:n().bool,isNested:n().bool,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),labelAction:n().element,max:n().number,min:n().number,name:n().string.isRequired,removeComponentFromField:n().func.isRequired,required:n().bool};const Tc=(0,t.memo)($n,$e());var Ot=Ci(Tc,Ti);const Mc=(0,N.ZP)(w.k)`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`,Dc=(0,N.ZP)(ge.h)`
  background-color: transparent;

  svg path {
    fill: ${({theme:e,expanded:r})=>r?e.colors.primary600:e.colors.neutral600};
  }
`,kc=(0,N.ZP)(A.x)`
  > div:first-child {
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  }
`,Ic=(0,N.ZP)(A.x)`
  border-radius: 0 0 ${({theme:e})=>e.spaces[1]} ${({theme:e})=>e.spaces[1]};
`,Lc=(0,N.ZP)(A.x)`
  width: ${({theme:e})=>e.spaces[2]};
  height: ${({theme:e})=>e.spaces[4]};
`,xc=N.ZP.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`,Pc=(0,N.ZP)(A.x)`
  list-style: none;
  padding: 0;
  margin: 0;
`,Zn=({componentUid:e,formErrors:r,index:o,isFieldAllowed:s,name:a,onRemoveComponentClick:l,onMoveComponent:i,onGrabItem:c,onDropItem:u,onCancel:d})=>{const[m,f]=(0,t.useState)(!0),{formatMessage:p}=(0,Q.Z)(),{getComponentLayout:y}=Oe(),{modifiedData:b}=(0,h.Wq)(),{icon:v,friendlyName:k,mainValue:E}=(0,t.useMemo)(()=>{const W=y(e),{info:{icon:X,displayName:q}}=W,ee=I()(W,["settings","mainField"],"id"),M=I()(b,[a,o,ee])??"",L=ee==="id"?"":String(M).trim(),Y=L.length>0?` - ${L}`:L;return{friendlyName:q,icon:X,mainValue:Y}},[e,y,b,a,o]),R=Object.keys(r).filter(W=>{const X=W.split(".");return`${X[0]}.${X[1]}`==`${a}.${o}`});let F;R.length>0&&(F=p({id:C("components.DynamicZone.error-message"),defaultMessage:"The component contains error(s)"}));const S=()=>{f(W=>!W)},[{handlerId:T,isDragging:D,handleKeyDown:x},j,z,Z,V]=tn(s,{type:`${Ce.DYNAMIC_ZONE}_${a}`,index:o,item:{displayedValue:`${k}${E}`,icon:v},onMoveItem:i,onGrabItem:c,onDropItem:u,onCancel:d});(0,t.useEffect)(()=>{V((0,it.rX)(),{captureDraggingState:!1})},[V,o]);const B=kt(j,z),K=s?t.createElement(Mc,{gap:0,expanded:m},t.createElement(Dc,{noBorder:!0,label:p({id:C("components.DynamicZone.delete-label"),defaultMessage:"Delete {name}"},{name:k}),onClick:l},t.createElement(we.Z,null)),t.createElement(ge.h,{forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:W=>W.stopPropagation(),"data-handler-id":T,ref:Z,label:p({id:C("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:x},t.createElement(Ae.Z,null))):null;return t.createElement(Pc,{as:"li"},t.createElement(w.k,{justifyContent:"center"},t.createElement(Lc,{background:"neutral200"})),t.createElement(kc,{ref:B,hasRadius:!0},D?t.createElement(xc,{padding:6,background:"primary100"}):t.createElement(cn.U,{expanded:m,onToggle:S,size:"S",error:F},t.createElement(dn.B,{action:K,title:`${k}${E}`,togglePosition:"left"}),t.createElement(un.v,null,t.createElement(Ic,{background:"neutral0"},t.createElement(Ot,{componentUid:e,icon:v,name:`${a}.${o}`,isFromDynamicZone:!0}))))))};Zn.defaultProps={formErrors:{},index:0,isFieldAllowed:!0,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0},Zn.propTypes={componentUid:n().string.isRequired,formErrors:n().object,index:n().number,isFieldAllowed:n().bool,name:n().string.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onMoveComponent:n().func.isRequired,onRemoveComponentClick:n().func.isRequired};var wc=Zn;const qn=(0,N.ZP)(Ro.Z)`
  transform: ${({$isOpen:e})=>e?"rotate(45deg)":"rotate(0deg)"};
  > circle {
    fill: ${({theme:e,$hasError:r})=>r?e.colors.danger200:e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e,$hasError:r})=>r?e.colors.danger600:e.colors.neutral600};
  }
`,Fc=(0,N.ZP)(yn.Y)`
  border-radius: 26px;
  border-color: ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-top: ${({theme:e})=>e.spaces[3]};
  padding-right: ${({theme:e})=>e.spaces[4]};
  padding-bottom: ${({theme:e})=>e.spaces[3]};
  padding-left: ${({theme:e})=>e.spaces[4]};

  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};
    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }
  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${qn} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
  &:active {
    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    ${qn} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,Sc=(0,N.ZP)(A.x)`
  height: 100%;
`,Nn=({hasError:e,hasMaxError:r,hasMinError:o,isDisabled:s,isOpen:a,label:l,missingComponentNumber:i,name:c,onClick:u})=>{const{formatMessage:d}=(0,Q.Z)(),m=d({id:C("components.DynamicZone.add-component"),defaultMessage:"Add a component to {componentName}"},{componentName:l||c}),f=d({id:"app.utils.close-label",defaultMessage:"Close"});let p=a?f:m;return r&&!a&&(p=d({id:"components.Input.error.validation.max",defaultMessage:"The value is too high."})),o&&!a&&(p=d({id:C("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"},{number:i})),t.createElement(w.k,{justifyContent:"center"},t.createElement(A.x,{style:{cursor:s?"not-allowed":"pointer"}},t.createElement(Fc,{type:"button",onClick:u,disabled:s,hasError:e},t.createElement(w.k,null,t.createElement(Sc,{"aria-hidden":!0,paddingRight:2},t.createElement(qn,{$isOpen:a,$hasError:e&&!a})),t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:e&&!a?"danger600":"neutral500"},p)))))};Nn.defaultProps={hasError:!1,hasMaxError:!1,hasMinError:!1,isDisabled:!1,isOpen:!1,label:"",missingComponentNumber:0},Nn.propTypes={label:n().string,hasError:n().bool,hasMaxError:n().bool,hasMinError:n().bool,isDisabled:n().bool,isOpen:n().bool,missingComponentNumber:n().number,name:n().string.isRequired,onClick:n().func.isRequired};var Ac=Nn;const Oc=(0,N.ZP)(A.x)`
  border-radius: ${(0,h.Q1)(26)};
`,jn=({label:e,labelAction:r,name:o,numberOfComponents:s,required:a,intlDescription:l})=>{const{formatMessage:i}=(0,Q.Z)(),c=i({id:e||o,defaultMessage:e||o});return t.createElement(w.k,{justifyContent:"center"},t.createElement(A.x,null,t.createElement(Oc,{paddingTop:3,paddingBottom:3,paddingRight:4,paddingLeft:4,background:"neutral0",shadow:"filterShadow",color:"neutral500"},t.createElement(w.k,{direction:"column",justifyContent:"center"},t.createElement(w.k,{maxWidth:(0,h.Q1)(356)},t.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold",ellipsis:!0},c,"\xA0"),t.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold"},"(",s,")"),a&&t.createElement(G.Z,{textColor:"danger600"},"*"),r&&t.createElement(A.x,{paddingLeft:1},r)),l&&t.createElement(A.x,{paddingTop:1,maxWidth:(0,h.Q1)(356)},t.createElement(G.Z,{variant:"pi",textColor:"neutral600",ellipsis:!0},i(l)))))))};jn.defaultProps={intlDescription:void 0,label:"",labelAction:void 0,numberOfComponents:0,required:!1},jn.propTypes={intlDescription:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired}),label:n().string,labelAction:n().element,name:n().string.isRequired,numberOfComponents:n().number,required:n().bool};var $c=jn,Zc=g(81346),Vo=g.n(Zc);const $t=5,Zt=8,qc=(0,N.ZP)(w.k)`
  border-radius: ${({showBackground:e})=>e?"50%":0};
  color: ${({theme:e})=>e.colors.neutral600};
  height: ${({theme:e,size:r})=>e.spaces[r==="S"?$t:Zt]};
  width: ${({theme:e,size:r})=>e.spaces[r==="S"?$t:Zt]};

  svg {
    height: ${({theme:e,size:r})=>e.spaces[r==="S"?$t-2:Zt-3]};
    width: ${({theme:e,size:r})=>e.spaces[r==="S"?$t-2:Zt-3]};
  }
`;function qt({showBackground:e=!0,size:r="M"}){return t.createElement(qc,{alignItems:"center",background:e?"neutral200":null,justifyContent:"center",size:r,showBackground:e},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},t.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}qt.defaultProps={showBackground:!0,size:"M"},qt.propTypes={showBackground:n().bool,size:n().string};const Nc=(0,N.ZP)(A.x)`
  flex-shrink: 0;
  height: ${(0,h.Q1)(84)};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`;function Bn({children:e,onClick:r}){return t.createElement(Nc,{as:"button",type:"button",onClick:r,hasRadius:!0},t.createElement(w.k,{direction:"column",gap:1,alignItems:"center",justifyContent:"center"},t.createElement(qt,null),t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral600"},e)))}Bn.defaultProps={onClick(){}},Bn.propTypes={children:n().node.isRequired,onClick:n().func};const jc=N.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140/16}rem);
  grid-gap: ${({theme:e})=>e.spaces[1]};
`,Wn=({category:e,components:r,variant:o,isOpen:s,onAddComponent:a,onToggle:l})=>{const{formatMessage:i}=(0,Q.Z)(),c=()=>{l(e)};return t.createElement(cn.U,{expanded:s,onToggle:c,size:"S"},t.createElement(dn.B,{variant:o,title:i({id:e,defaultMessage:e}),togglePosition:"left"}),t.createElement(un.v,null,t.createElement(A.x,{paddingTop:4,paddingBottom:4,paddingLeft:3,paddingRight:3},t.createElement(jc,null,r.map(({componentUid:u,info:{displayName:d}})=>t.createElement(Bn,{key:u,onClick:a(u)},i({id:d,defaultMessage:d})))))))};Wn.defaultProps={components:[],isOpen:!1,variant:"primary"},Wn.propTypes={category:n().string.isRequired,components:n().array,isOpen:n().bool,onAddComponent:n().func.isRequired,onToggle:n().func.isRequired,variant:n().oneOf(["primary","secondary"])};var Bc=Wn;const zn=({components:e,isOpen:r,onClickAddComponent:o})=>{const{formatMessage:s}=(0,Q.Z)(),{getComponentLayout:a}=Oe(),[l,i]=(0,t.useState)(""),c=(0,t.useMemo)(()=>{const m=e.map(p=>{const{category:y,info:b}=a(p);return{componentUid:p,category:y,info:b}}),f=Vo()(m,"category");return Object.keys(f).reduce((p,y)=>(p.push({category:y,components:f[y]}),p),[])},[e,a]);(0,t.useEffect)(()=>{r&&c.length>0&&i(c[0].category)},[r,c]);const u=m=>()=>{o(m),i("")},d=m=>{i(f=>f===m?"":m)};return r?t.createElement(A.x,{paddingBottom:6},t.createElement(A.x,{paddingTop:6,paddingBottom:6,paddingLeft:5,paddingRight:5,background:"neutral0",shadow:"tableShadow",borderColor:"neutral150",hasRadius:!0},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral600"},s({id:C("components.DynamicZone.ComponentPicker-label"),defaultMessage:"Pick one component"}))),t.createElement(A.x,{paddingTop:2},t.createElement(zo.k,{attributeName:"data-strapi-accordion-toggle"},c.map(({category:m,components:f},p)=>t.createElement(Bc,{key:m,category:m,components:f,onAddComponent:u,isOpen:m===l,onToggle:d,variant:p%2===1?"primary":"secondary"})))))):null};zn.defaultProps={components:[],isOpen:!1},zn.propTypes={components:n().array,isOpen:n().bool,onClickAddComponent:n().func.isRequired};var Wc=zn;const Vn=({name:e,addComponentToDynamicZone:r,formErrors:o,isCreatingEntry:s,isFieldAllowed:a,isFieldReadable:l,labelAction:i,moveComponentField:c,removeComponentFromDynamicZone:u,dynamicDisplayedComponents:d,fieldSchema:m,metadatas:f})=>{const[p,y]=(0,t.useState)(!1),[b,v]=(0,t.useState)(""),{formatMessage:k}=(0,Q.Z)(),E=(0,h.lm)(),{getComponentLayout:R,components:F}=Oe(),S=d.length,T=f.description?{id:f.description,defaultMessage:f.description}:null,{max:D=1/0,min:x=-1/0}=m,j=(0,t.useMemo)(()=>Object.keys(o).filter($=>$===e).map($=>o[$]),[o,e]),z=x-S,Z=j.length>0,V=j.length>0&&I()(j,[0,"id"],"").includes("min"),B=Z&&I()(j,[0,"id"],"")==="components.Input.error.validation.max",K=$=>{y(!1);const O=R($);r(e,O,F,Z)},W=()=>{S<D?y($=>!$):E({type:"info",message:{id:C("components.notification.info.maximum-requirement")}})},X=($,O)=>{v(k({id:C("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${e}.${O}`,position:q($)})),c({name:e,newIndex:$,currentIndex:O})},q=$=>`${$+1} of ${d.length}`,ee=$=>{v(k({id:C("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${e}.${$}`}))},M=$=>{v(k({id:C("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${e}.${$}`,position:q($)}))},L=$=>{v(k({id:C("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${e}.${$}`,position:q($)}))},Y=($,O)=>()=>{u($,O)};if(!a&&(s||!l&&!s))return t.createElement(h.X0,{description:T,intlLabel:{id:f.label,defaultMessage:f.label},labelAction:i,name:e});const H=`${e}-item-instructions`;return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},S>0&&t.createElement(A.x,null,t.createElement($c,{intlDescription:T,label:f.label,labelAction:i,name:e,numberOfComponents:S,required:m.required||!1}),t.createElement(Xe.T,{id:H},k({id:C("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),t.createElement(Xe.T,{"aria-live":"assertive"},b),t.createElement("ol",{"aria-describedby":H},d.map(({componentUid:$,id:O},U)=>t.createElement(wc,{componentUid:$,formErrors:o,key:`${$}-${O}`,index:U,isFieldAllowed:a,name:e,onMoveComponent:X,onRemoveComponentClick:Y(e,U),onCancel:ee,onDropItem:L,onGrabItem:M})))),t.createElement(Ac,{hasError:Z,hasMaxError:B,hasMinError:V,isDisabled:!a,label:f.label,missingComponentNumber:z,isOpen:p,name:e,onClick:W}),t.createElement(Wc,{isOpen:p,components:m.components??[],onClickAddComponent:K}))};Vn.defaultProps={dynamicDisplayedComponents:[],fieldSchema:{max:1/0,min:-1/0},labelAction:null},Vn.propTypes={addComponentToDynamicZone:n().func.isRequired,dynamicDisplayedComponents:n().arrayOf(n().shape({componentUid:n().string.isRequired,id:n().number.isRequired})),fieldSchema:n().shape({components:n().array.isRequired,max:n().number,min:n().number,required:n().bool}),formErrors:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isFieldAllowed:n().bool.isRequired,isFieldReadable:n().bool.isRequired,labelAction:n().element,metadatas:n().shape({description:n().string,label:n().string}).isRequired,moveComponentField:n().func.isRequired,name:n().string.isRequired,removeComponentFromDynamicZone:n().func.isRequired};const zc=(0,t.memo)(Vn,$e());var Vc=gi(zc,hi),Ze=g(41578);const Nt=()=>({type:Ze.ZA}),Un=e=>({type:Ze.Id,data:e}),Hn=(e,r=!1)=>({type:Ze.TP,rawQuery:e,isSingleType:r}),Uo=()=>({type:Ze.c2}),Ho=(e,r)=>({type:Ze.w7,componentsDataStructure:e,contentTypeDataStructure:r}),ie=e=>({type:Ze.d0,status:e}),qe=e=>({type:Ze.t9,data:e}),Uc=()=>({type:Ze.tE});var Gn=e=>e["content-manager_editViewCrudReducer"];const Qn=({allLayoutData:e,children:r,slug:o,id:s,origin:a})=>{const l=(0,Ue.useQueryClient)(),i=(0,h.lm)(),{setCurrentStep:c}=(0,h.c1)(),{trackUsage:u}=(0,h.rS)(),{push:d,replace:m}=(0,ae.k6)(),[{rawQuery:f}]=(0,h.Kx)(),p=(0,le.I0)(),{componentsDataStructure:y,contentTypeDataStructure:b,data:v,isLoading:k,status:E}=(0,le.v9)(Gn),R=lo(o),{formatAPIError:F}=(0,h.So)(C),S=(0,t.useRef)(!0),T=(0,t.useRef)(u),D=(0,t.useRef)(e),x=(0,h.kY)(),{put:j,post:z,del:Z}=x,V=s===null,B=(0,t.useMemo)(()=>V&&!a?null:ce(`collection-types/${o}/${a||s}`),[o,s,V,a]),K=(0,t.useCallback)(O=>a?(0,h.w6)(O,D.current.contentType,D.current.components):O,[a]),W=(0,t.useCallback)(O=>{const U=Kr(O,D.current.contentType,D.current.components);return(0,h.dU)(U,D.current.contentType,D.current.components)},[]);(0,t.useEffect)(()=>{const O=Object.keys(e.components).reduce((P,re)=>{const de=It(I()(e,["components",re,"attributes"],{}),e.components);return P[re]=(0,h.dU)(de,e.components[re],e.components),P},{}),U=It(e.contentType.attributes,e.components),se=(0,h.dU)(U,e.contentType,e.components);p(Ho(O,se))},[e,p]),(0,t.useEffect)(()=>()=>{p(Uo())},[p]),(0,t.useEffect)(()=>{const U=ve.Z.CancelToken.source(),se=async re=>{p(Nt());try{const{data:de}=await x.get(B,{cancelToken:re.token});p(Un(W(K(de))))}catch(de){if(ve.Z.isCancel(de))return;const ye=I()(de,"response.status",null);if(ye===404){d(R);return}ye===403&&(i({type:"info",message:{id:C("permissions.not-allowed.update")}}),d(R))}},P=async()=>{await p(Nt()),await p(Hn(f))};return S.current?(B?se(U):P(),()=>{U.cancel("Operation canceled by the user.")}):()=>{}},[x,K,W,d,B,p,f,R,i]);const X=(0,t.useCallback)(O=>{i({type:"warning",message:F(O)})},[i,F]),q=(0,t.useCallback)(async O=>{try{T.current("willDeleteEntry",O);const{data:U}=await Z(ce(`collection-types/${o}/${s}`));return i({type:"success",message:{id:C("success.record.delete")}}),T.current("didDeleteEntry",O),Promise.resolve(U)}catch(U){return T.current("didNotDeleteEntry",{error:U,...O}),Promise.reject(U)}},[s,o,i,Z]),ee=(0,t.useCallback)(()=>{m(R)},[R,m]),M=(0,t.useCallback)(async(O,U)=>{const se=`${ce(`collection-types/${o}`)}${f}`;try{p(ie("submit-pending"));const{data:P}=await z(se,O);return T.current("didCreateEntry",U),i({type:"success",message:{id:C("success.record.save")}}),c("contentManager.success"),l.invalidateQueries(["relation"]),p(qe(W(P))),p(ie("resolved")),m(`/content-manager/collectionType/${o}/${P.id}${f}`),Promise.resolve(P)}catch(P){return X(P),T.current("didNotCreateEntry",{error:P,trackerProperty:U}),p(ie("resolved")),Promise.reject(P)}},[W,X,m,o,p,f,i,c,l,z]),L=(0,t.useCallback)(async()=>{try{T.current("willCheckDraftRelations");const O=ce(`collection-types/${o}/${s}/actions/numberOfDraftRelations`);p(ie("draft-relation-check-pending"));const U=await x.get(O);return T.current("didCheckDraftRelations"),p(ie("resolved")),U.data.data}catch(O){return X(O),p(ie("resolved")),Promise.reject(O)}},[X,s,o,p,x]),Y=(0,t.useCallback)(async()=>{try{T.current("willPublishEntry");const O=ce(`collection-types/${o}/${s}/actions/publish`);p(ie("publish-pending"));const{data:U}=await z(O);return T.current("didPublishEntry"),p(qe(W(U))),p(ie("resolved")),i({type:"success",message:{id:C("success.record.publish")}}),Promise.resolve(U)}catch(O){return X(O),p(ie("resolved")),Promise.reject(O)}},[W,X,s,o,p,i,z]),H=(0,t.useCallback)(async(O,U)=>{const se=ce(`collection-types/${o}/${s}`);try{T.current("willEditEntry",U),p(ie("submit-pending"));const{data:P}=await j(se,O);return T.current("didEditEntry",{trackerProperty:U}),i({type:"success",message:{id:C("success.record.save")}}),l.invalidateQueries(["relation"]),p(qe(W(P))),p(ie("resolved")),Promise.resolve(P)}catch(P){return T.current("didNotEditEntry",{error:P,trackerProperty:U}),X(P),p(ie("resolved")),Promise.reject(P)}},[W,X,o,s,p,i,l,j]),$=(0,t.useCallback)(async()=>{const O=ce(`collection-types/${o}/${s}/actions/unpublish`);p(ie("unpublish-pending"));try{T.current("willUnpublishEntry");const{data:U}=await z(O);return T.current("didUnpublishEntry"),i({type:"success",message:{id:C("success.record.unpublish")}}),p(qe(W(U))),p(ie("resolved")),Promise.resolve(U)}catch(U){return p(ie("resolved")),X(U),Promise.reject(U)}},[W,X,s,o,p,i,z]);return r({componentsDataStructure:y,contentTypeDataStructure:b,data:v,isCreatingEntry:V,isLoadingForData:k,onDelete:q,onDeleteSucceeded:ee,onPost:M,onPublish:Y,onDraftRelationCheck:L,onPut:H,onUnpublish:$,status:E,redirectionLink:R})};Qn.defaultProps={id:null,origin:null},Qn.propTypes={allLayoutData:n().exact({components:n().object.isRequired,contentType:n().shape({apiID:n().string.isRequired,attributes:n().object.isRequired,info:n().object.isRequired,isDisplayed:n().bool.isRequired,kind:n().string.isRequired,layouts:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,pluginOptions:n().object,settings:n().object.isRequired,uid:n().string.isRequired}).isRequired}).isRequired,children:n().func.isRequired,id:n().string,origin:n().string,slug:n().string.isRequired};var Hc=(0,t.memo)(Qn,$e()),Gc=g(86834),be=g.n(Gc),Qc=g(89793),gt=g.n(Qc),Kc=g(56236),Yc=g.n(Kc),Xc=g(10268),Go=g.n(Xc),Kn=g(99526),Qo=(e,r,o,s)=>{const a=e.slice();return a.splice(r,1),a.splice(o,0,s),a},Jc=g(77236),_c=g.n(Jc);const ed=({browserState:e,serverState:r},o,s)=>{const a=r,l=e,i=(d,m)=>I()(d,["attributes",m,"type"],""),c=(d,m)=>I()(d,["attributes",...m],""),u=(d,m,f,p)=>Object.keys(d).reduce((y,b)=>{const v=p?`${p}.${b}`:b,k=i(f,b),E=I()(d,b),R=I()(m,b),F=c(f,[b,"component"]),S=c(f,[b,"repeatable"]);let T;switch(k){case"json":T=JSON.parse(E);break;case"time":{T=E,E&&E.split(":").length<3&&(T=`${E}:00`);break}case"media":c(f,[b,"multiple"])===!0?T=E?E.filter(D=>!(D instanceof File)):null:T=I()(E,0)instanceof File?null:I()(E,"id",null);break;case"component":S?T=E&&E.map((D,x)=>u(D,(R??[])[x],s[F],`${v}.${x}`)):T=E&&u(E,R,s[F],v);break;case"relation":{const D=jo(a,l)(v).join(".");let x=I()(a,D,[]);const j=E.reduce((Z,V,B,K)=>{const W=x.find(q=>q.id===V.id),X=K[B+1];if(!W||W.__temp_key__!==V.__temp_key__){const q=X?{before:X.id}:{end:!0};return[...Z,{id:V.id,position:q}]}return Z},[]);T={disconnect:x.reduce((Z,V)=>E.find(B=>B.id===V.id)?Z:[...Z,{id:V.id}],[]),connect:j.reverse()};break}case"dynamiczone":T=E.map((D,x)=>u(D,(R??[])[x],s[D.__component],`${v}.${x}`));break;default:T=td(E,"id")}return y[b]=T,y},{});return u(e,r,o,"")},td=(e,r)=>_c()(e)?e.map(o=>o[r]?o[r]:o):ao()(e)?e[r]:e;var nd=ed,rd=g(51355),od=g.n(rd),sd=g(78746),et=g.n(sd),me=g(24346);function ft(e){return["integer","biginteger","decimal","float","number"].includes(e)}me.kM(me.nK,"defined",function(){return this.test("defined",h.I0.required,e=>e!==void 0)}),me.kM(me.IX,"notEmptyMin",function(e){return this.test("notEmptyMin",h.I0.min,r=>be()(r)?!0:r.length>=e)}),me.kM(me.Z_,"isInferior",function(e,r){return this.test("isInferior",e,function(o){return!o||Number.isNaN(et()(o))?!0:et()(r)>=et()(o)})}),me.kM(me.Z_,"isSuperior",function(e,r){return this.test("isSuperior",e,function(o){return!o||Number.isNaN(et()(o))?!0:et()(o)>=et()(r)})});const ad=e=>I()(e,["attributes"],{}),Yn=(e,{components:r},o={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const s=ad(e);return me.Ry().shape(Object.keys(s).reduce((a,l)=>{const i=s[l];if(i.type!=="relation"&&i.type!=="component"&&i.type!=="dynamiczone"){const c=id(i.type,i,o);a[l]=c}if(i.type==="relation"&&(a[l]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(i.relationType)?me.Ry().nullable():me.IX().nullable()),i.type==="component"){const c=Yn(r[i.component],{components:r},{...o,isFromComponent:!0});if(i.repeatable===!0){const{min:d,max:m,required:f}=i;let p=me.Vo(y=>{let b=me.IX().of(c);return d?f?b=b.min(d,h.I0.min):f!==!0&&be()(y)?b=b.nullable():b=b.min(d,h.I0.min):f&&!o.isDraft&&(b=b.min(1,h.I0.required)),m&&(b=b.max(m,h.I0.max)),b});return a[l]=p,a}const u=me.Vo(d=>d!==void 0?i.required===!0&&!o.isDraft?c.defined():c.nullable():i.required===!0?me.Ry().defined():me.Ry().nullable());return a[l]=u,a}if(i.type==="dynamiczone"){let c=me.IX().of(me.Vo(({__component:m})=>Yn(r[m],{components:r},{...o,isFromComponent:!0})));const{max:u,min:d}=i;d?i.required?c=c.test("min",h.I0.min,m=>o.isCreatingEntry?m&&m.length>=d:m===void 0?!0:m!==null&&m.length>=d).test("required",h.I0.required,m=>o.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null):c=c.notEmptyMin(d):i.required&&!o.isDraft&&(c=c.test("required",h.I0.required,m=>o.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null)),u&&(c=c.max(u,h.I0.max)),a[l]=c}return a},{}))},id=(e,r,o)=>{let s=me.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(e)&&(s=me.Z_()),e==="json"&&(s=me.nK(h.I0.json).test("isJSON",h.I0.json,a=>{if(!a||!a.length)return!0;try{return JSON.parse(a),!0}catch{return!1}}).nullable().test("required",h.I0.required,a=>!(r.required&&(!a||!a.length)))),e==="email"&&(s=s.email(h.I0.email)),["number","integer","float","decimal"].includes(e)&&(s=me.Rx().transform(a=>Hr()(a)?void 0:a).typeError()),e==="biginteger"&&(s=me.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(e)&&(s=me.hT()),Object.keys(r).forEach(a=>{const l=r[a];if(l||!od()(l)&&Number.isInteger(Math.floor(l))||l===0)switch(a){case"required":{o.isDraft||(e==="password"&&o.isCreatingEntry&&(s=s.required(h.I0.required)),e!=="password"&&(o.isCreatingEntry?s=s.required(h.I0.required):s=s.test("required",h.I0.required,i=>i===void 0&&!o.isFromComponent?!0:ft(e)?i===0?!0:!!i:e==="boolean"?i!=null:e==="date"||e==="datetime"?typeof i=="string"?!be()(i):!be()(i?.toString()):!be()(i))));break}case"max":{e==="biginteger"?s=s.isInferior(h.I0.max,l):s=s.max(l,h.I0.max);break}case"maxLength":s=s.max(l,h.I0.maxLength);break;case"min":{e==="biginteger"?s=s.isSuperior(h.I0.min,l):s=s.min(l,h.I0.min);break}case"minLength":{o.isDraft||(s=s.min(l,h.I0.minLength));break}case"regex":s=s.matches(new RegExp(l),{message:h.I0.regex,excludeEmptyString:!r.required});break;case"lowercase":["text","textarea","email","string"].includes(e)&&(s=s.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(e)&&(s=s.strict().uppercase());break;case"positive":ft(e)&&(s=s.positive());break;case"negative":ft(e)&&(s=s.negative());break;default:s=s.nullable()}}),s};var Ko=Yn;const jt=(e,r=()=>!1,o=void 0)=>{const s=(a,l,{ignoreFalseyValues:i=!1,path:c=[],parent:u=l}={})=>Object.entries(l).reduce((d,[m,f])=>{if(i&&(d==null||d[m]===void 0||d[m]===null))return d;if(r(f,{path:[...c,m],parent:u})&&(d[m]=typeof o=="function"?o(d[m],{path:[...c,m],parent:d}):o),f.type==="component"){const p=e[f.component].attributes;!f.repeatable&&d[m]&&typeof d[m]=="object"?d[m]=s(d[m],p,{ignoreFalseyValues:i,path:[...c,m],parent:l[m]}):f.repeatable&&Array.isArray(d[m])&&(d[m]=d[m].map((y,b)=>s(y,p,{ignoreFalseyValues:i,path:[...c,m,b],parent:l[m]})))}else f.type==="dynamiczone"&&Array.isArray(d[m])&&(d[m]=d[m].map((p,y)=>{const b=e[p.__component].attributes;return s(p,b,{ignoreFalseyValues:i,path:[...c,m,y],parent:l[m]})}));return d},{...a});return s},ld={componentsDataStructure:{},contentTypeDataStructure:{},formErrors:{},initialData:{},modifiedData:null,shouldCheckErrors:!1,modifiedDZName:null,publishConfirmation:{show:!1,draftCount:0}};var cd=(e,r)=>(0,wt.ZP)(e,o=>{switch(r.type){case"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD":{const{componentLayoutData:s,allComponents:a}=r,l={...e.componentsDataStructure[s.uid]},c=jt(a,u=>u.type==="relation",[])(l,s.attributes);J()(o,["modifiedData",...r.keys],c);break}case"ADD_COMPONENT_TO_DYNAMIC_ZONE":case"ADD_REPEATABLE_COMPONENT_TO_FIELD":{const{keys:s,allComponents:a,componentLayoutData:l,shouldCheckErrors:i}=r;i&&(o.shouldCheckErrors=!e.shouldCheckErrors),r.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"&&(o.modifiedDZName=s[0]);const c=I()(e,["modifiedData",...s],[]),u=r.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"?{...e.componentsDataStructure[l.uid],__component:l.uid,__temp_key__:_t(c)+1}:{...e.componentsDataStructure[l.uid],__temp_key__:_t(c)+1},m=jt(a,p=>p.type==="relation",[])(u,l.attributes),f=Array.isArray(c)?[...c,m]:[m];J()(o,["modifiedData",...s],f);break}case"LOAD_RELATION":{const{initialDataPath:s,modifiedDataPath:a,value:l}=r,i=I()(e,s),c=I()(e,a),u=i?l.filter(f=>!i.some(p=>p.id===f.id)):l,d=(0,Kn.zJ)(null,c[0]?.__temp_key__,u.length),m=u.map((f,p)=>({...f,__temp_key__:d[p]}));J()(o,s,Go()([...m,...i],"id")),J()(o,a,Go()([...m,...c],"id"));break}case"CONNECT_RELATION":{const s=["modifiedData",...r.keys],{value:a,toOneRelation:l}=r;if(l)J()(o,s,[a]);else{const i=I()(e,s),[c]=(0,Kn.zJ)(i.at(-1)?.__temp_key__,null,1),u=[...i,{...a,__temp_key__:c}];J()(o,s,u)}break}case"DISCONNECT_RELATION":{const s=["modifiedData",...r.keys],{id:a}=r,i=I()(e,[...s]).filter(c=>c.id!==a);J()(o,s,i);break}case"MOVE_COMPONENT_FIELD":case"REORDER_RELATION":{const{oldIndex:s,newIndex:a,keys:l}=r,i=["modifiedData",...l],c=I()(e,[...i]),u=c[s],d=[...c];if(r.type==="REORDER_RELATION"){const[m]=(0,Kn.zJ)(c[a-1]?.__temp_key__,c[a]?.__temp_key__,1);d.splice(s,1),d.splice(a,0,{...u,__temp_key__:m})}else d.splice(s,1),d.splice(a,0,u);J()(o,i,d);break}case"INIT_FORM":{const{initialValues:s,components:a={},attributes:l={},setModifiedDataOnly:i}=r,c=Me()(s),d=jt(a,p=>p.type==="relation",(p,{path:y})=>e.modifiedData?.id===c.id&&I()(e.modifiedData,y)?I()(e.modifiedData,y):[])(c,l),f=jt(a,p=>p.type==="dynamiczone"||p.type==="component"&&!p.repeatable,p=>Array.isArray(p)?p.map((y,b)=>({...y,__temp_key__:b})):{...p,__temp_key__:0})(d,l,{ignoreFalseyValues:!0});i||(o.initialData=f),o.modifiedData=f,o.formErrors={},o.modifiedDZName=null,o.shouldCheckErrors=!1;break}case"MOVE_COMPONENT_UP":case"MOVE_COMPONENT_DOWN":{const{currentIndex:s,dynamicZoneName:a,shouldCheckErrors:l}=r;l&&(o.shouldCheckErrors=!e.shouldCheckErrors);const i=e.modifiedData[a],c=r.type==="MOVE_COMPONENT_UP"?s-1:s+1,u=e.modifiedData[a][s],d=Qo(i,s,c,u);J()(o,["modifiedData",r.dynamicZoneName],d);break}case"MOVE_FIELD":{const s=I()(e,["modifiedData",...r.keys],[]).slice(),a=I()(e,["modifiedData",...r.keys,r.dragIndex]),l=Qo(s,r.dragIndex,r.overIndex,a);J()(o,["modifiedData",...r.keys],l);break}case"ON_CHANGE":{const[s]=r.keys;if(r.shouldSetInitialValue&&J()(o,["initialData",...r.keys],r.value),r.keys.length===2&&I()(e,["modifiedData",s])===null){J()(o,["modifiedData",s],{[r.keys[1]]:r.value});break}J()(o,["modifiedData",...r.keys],r.value);break}case"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE":{r.shouldCheckErrors&&(o.shouldCheckErrors=!e.shouldCheckErrors),o.modifiedData[r.dynamicZoneName].splice(r.index,1);break}case"REMOVE_COMPONENT_FROM_FIELD":{const s=["modifiedData",...r.keys];J()(o,s,null);break}case"REMOVE_PASSWORD_FIELD":{Yc()(o,["modifiedData",...r.keys]);break}case"REMOVE_REPEATABLE_FIELD":{const s=r.keys.length-1,a=["modifiedData",...dt()(r.keys,s)];Object.keys(e.formErrors).length>0&&(o.shouldCheckErrors=!e.shouldCheckErrors);const i=I()(e,a).slice();i.splice(parseInt(r.keys[s],10),1),J()(o,a,i);break}case"SET_DEFAULT_DATA_STRUCTURES":{o.componentsDataStructure=r.componentsDataStructure,o.contentTypeDataStructure=r.contentTypeDataStructure;break}case"SET_FORM_ERRORS":{o.modifiedDZName=null,o.formErrors=r.errors;break}case"TRIGGER_FORM_VALIDATION":{Object.keys(e.formErrors).length>0&&(o.shouldCheckErrors=!e.shouldCheckErrors);break}case"SET_PUBLISH_CONFIRMATION":{o.publishConfirmation={...r.publishConfirmation};break}case"RESET_PUBLISH_CONFIRMATION":{o.publishConfirmation={...e.publishConfirmation,show:!1};break}default:return o}});const Xn=({allLayoutData:e,allowedActions:{canRead:r,canUpdate:o},children:s,componentsDataStructure:a,contentTypeDataStructure:l,createActionAllowedFields:i,from:c,initialValues:u,isCreatingEntry:d,isLoadingForData:m,isSingleType:f,onPost:p,onPublish:y,onDraftRelationCheck:b,onPut:v,onUnpublish:k,readActionAllowedFields:E,redirectToPreviousPage:R,slug:F,status:S,updateActionAllowedFields:T})=>{const[D,x]=(0,t.useReducer)(cd,ld),{formErrors:j,initialData:z,modifiedData:Z,modifiedDZName:V,shouldCheckErrors:B,publishConfirmation:K}=D,{setModifiedDataOnly:W}=(0,le.v9)(Gn),X=(0,le.I0)(),q=(0,h.lm)(),{lockApp:ee,unlockApp:M}=(0,h.o1)(),L=I()(e,["contentType"],{}),Y=(0,t.useMemo)(()=>I()(L,["options","draftAndPublish"],!1),[L]),H=(0,t.useMemo)(()=>Y&&!z.publishedAt,[Y,z.publishedAt]),{trackUsage:$}=(0,h.rS)(),{formatMessage:O}=(0,Q.Z)(),U=(0,t.useRef)($),se=(0,t.useMemo)(()=>m||d?!1:r===!1&&o===!1,[m,d,r,o]);(0,t.useEffect)(()=>{S==="resolved"?M():ee()},[ee,M,S]),(0,t.useEffect)(()=>{m||ke()},[B]),(0,t.useEffect)(()=>{const ne=Object.keys(j);if(ne.length>0){const _=ne[0],oe=document.getElementById(_);oe&&oe.focus()}},[j]),(0,t.useEffect)(()=>{se&&q({type:"info",message:{id:C("permissions.not-allowed.update")}})},[se,q]),(0,t.useEffect)(()=>{x({type:"SET_DEFAULT_DATA_STRUCTURES",componentsDataStructure:a,contentTypeDataStructure:l})},[a,l]);const{components:P}=e,re=po(u);(0,t.useEffect)(()=>{u&&L?.attributes&&!gt()(re,u)&&(x({type:"INIT_FORM",initialValues:u,components:P,attributes:L.attributes,setModifiedDataOnly:W}),W&&X(Uc()))},[u,L,P,W,X,re]);const de=(0,t.useCallback)(ne=>(_,oe,Le,Ge=!1)=>{U.current("didAddComponentToDynamicZone"),x({type:ne,keys:_.split("."),componentLayoutData:oe,allComponents:Le,shouldCheckErrors:Ge})},[]),ye=de("ADD_COMPONENT_TO_DYNAMIC_ZONE"),at=(0,t.useCallback)((ne,_,oe)=>{x({type:"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",keys:ne.split("."),componentLayoutData:_,allComponents:oe})},[]),Ct=(0,t.useCallback)(({name:ne,value:_,toOneRelation:oe})=>{x({type:"CONNECT_RELATION",keys:ne.split("."),value:_,toOneRelation:oe})},[]),vt=(0,t.useCallback)(({target:{initialDataPath:ne,modifiedDataPath:_,value:oe}})=>{x({type:"LOAD_RELATION",modifiedDataPath:_,initialDataPath:ne,value:oe})},[]),Rt=de("ADD_REPEATABLE_COMPONENT_TO_FIELD"),Re=(0,t.useMemo)(()=>{const ne={isCreatingEntry:d,isDraft:H,isFromComponent:!1};return Ko(L,{components:e.components||{}},ne)},[e.components,L,d,H]),ke=(0,t.useCallback)(async(ne={})=>{let _={};const oe=Me()(Z);be()(oe)||J()(oe,ne.path,ne.value);try{await Re.validate(oe,{abortEarly:!1})}catch(Le){_=(0,h.CJ)(Le),V&&(_=Object.keys(_).reduce((Ge,Pr)=>(Pr.split(".")[0]!==V&&(Ge[Pr]=_[Pr]),Ge),{}))}x({type:"SET_FORM_ERRORS",errors:_})},[V,Z,Re]),Tt=(0,t.useCallback)(({target:{name:ne,value:_,type:oe}},Le=!1)=>{let Ge=_;if(["text","textarea","string","email","uid","select","select-one","number"].includes(oe)&&!_&&_!==0&&(Ge=null),oe==="password"&&!_){x({type:"REMOVE_PASSWORD_FIELD",keys:ne.split(".")});return}x({type:"ON_CHANGE",keys:ne.split("."),value:Ge,shouldSetInitialValue:Le})},[]),Ne=(0,t.useCallback)((ne,_)=>nd({browserState:ne,serverState:_},L,e.components),[e.components,L]),te=(0,t.useMemo)(()=>Y?H?{status:"draft"}:{}:{},[Y,H]),pe=(0,t.useCallback)(async ne=>(ne.preventDefault(),x({type:"RESET_PUBLISH_CONFIRMATION"})),[]),Ie=(0,t.useCallback)(async ne=>{ne.preventDefault();let _={};try{await Re.validate(Z,{abortEarly:!1})}catch(oe){_=(0,h.CJ)(oe)}try{if(be()(_)){const oe=Ne(Z,z);d?await p(oe,te):await v(oe,te)}}catch(oe){_={..._,...(0,h.nn)(oe,{getTrad:C})}}x({type:"SET_FORM_ERRORS",errors:_})},[Ne,d,Z,z,p,v,te,Re]),xr=(0,t.useCallback)(async()=>{const ne=Ko(L,{components:I()(e,"components",{})},{isCreatingEntry:d,isDraft:!1,isFromComponent:!1}),_=await b();if(!K.show&&_>0){x({type:"SET_PUBLISH_CONFIRMATION",publishConfirmation:{show:!0,draftCount:_}});return}x({type:"RESET_PUBLISH_CONFIRMATION"});let oe={};try{await ne.validate(Z,{abortEarly:!1})}catch(Le){oe=(0,h.CJ)(Le)}try{be()(oe)&&await y()}catch(Le){oe={...oe,...(0,h.nn)(Le,{getTrad:C})}}x({type:"SET_FORM_ERRORS",errors:oe})},[e,L,d,Z,K.show,y,b]),je=(0,t.useCallback)(ne=>{const _=Object.keys(j).some(Le=>Le.split(".")[0]===ne);return!be()(j)&&_},[j]),hp=(0,t.useCallback)((ne,_)=>{U.current("changeComponentsOrder"),x({type:"MOVE_COMPONENT_DOWN",dynamicZoneName:ne,currentIndex:_,shouldCheckErrors:je(ne)})},[je]),yp=(0,t.useCallback)((ne,_)=>{U.current("changeComponentsOrder"),x({type:"MOVE_COMPONENT_UP",dynamicZoneName:ne,currentIndex:_,shouldCheckErrors:je(ne)})},[je]),bp=(0,t.useCallback)(({name:ne,newIndex:_,currentIndex:oe})=>{x({type:"MOVE_COMPONENT_FIELD",keys:ne.split("."),newIndex:_,oldIndex:oe})},[]),Ep=(0,t.useCallback)(({name:ne,id:_})=>{x({type:"DISCONNECT_RELATION",keys:ne.split("."),id:_})},[]),Cp=(0,t.useCallback)(({name:ne,oldIndex:_,newIndex:oe})=>{x({type:"REORDER_RELATION",keys:ne.split("."),oldIndex:_,newIndex:oe})},[]),vp=(0,t.useCallback)((ne,_)=>{U.current("removeComponentFromDynamicZone"),x({type:"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",dynamicZoneName:ne,index:_,shouldCheckErrors:je(ne)})},[je]),Rp=(0,t.useCallback)((ne,_)=>{x({type:"REMOVE_COMPONENT_FROM_FIELD",keys:ne.split("."),componentUid:_})},[]),Tp=(0,t.useCallback)((ne,_)=>{x({type:"REMOVE_REPEATABLE_FIELD",keys:ne.split("."),componentUid:_})},[]),Mp=(0,t.useCallback)(()=>{x({type:"TRIGGER_FORM_VALIDATION"})},[]);return se?t.createElement(ae.l_,{to:c}):Z?t.createElement(h.W1.Provider,{value:{addComponentToDynamicZone:ye,addNonRepeatableComponentToField:at,addRepeatableComponentToField:Rt,allLayoutData:e,checkFormErrors:ke,createActionAllowedFields:i,formErrors:j,hasDraftAndPublish:Y,initialData:z,isCreatingEntry:d,isSingleType:f,shouldNotRunValidations:H,status:S,layout:L,modifiedData:Z,moveComponentField:bp,moveComponentDown:hp,moveComponentUp:yp,onChange:Tt,onPublish:xr,onUnpublish:k,readActionAllowedFields:E,redirectToPreviousPage:R,removeComponentFromDynamicZone:vp,removeComponentFromField:Rp,removeRepeatableField:Tp,relationConnect:Ct,relationDisconnect:Ep,relationLoad:vt,relationReorder:Cp,slug:F,triggerFormValidation:Mp,updateActionAllowedFields:T,onPublishPromptDismissal:pe,publishConfirmation:K}},m||!d&&!z.id?t.createElement(Se.o,{"aria-busy":"true"},t.createElement(h.dO,null)):t.createElement(t.Fragment,null,t.createElement(ae.NL,{when:!gt()(Z,z),message:O({id:"global.prompt.unsaved"})}),t.createElement("form",{noValidate:!0,onSubmit:Ie},s))):null};Xn.defaultProps={from:"/",initialValues:null,redirectToPreviousPage(){}},Xn.propTypes={allLayoutData:n().object.isRequired,allowedActions:n().object.isRequired,children:n().node.isRequired,componentsDataStructure:n().object.isRequired,contentTypeDataStructure:n().object.isRequired,createActionAllowedFields:n().array.isRequired,from:n().string,initialValues:n().object,isCreatingEntry:n().bool.isRequired,isLoadingForData:n().bool.isRequired,isSingleType:n().bool.isRequired,onPost:n().func.isRequired,onPublish:n().func.isRequired,onDraftRelationCheck:n().func.isRequired,onPut:n().func.isRequired,onUnpublish:n().func.isRequired,readActionAllowedFields:n().array.isRequired,redirectToPreviousPage:n().func,slug:n().string.isRequired,status:n().string.isRequired,updateActionAllowedFields:n().array.isRequired};var dd=Xn,He=e=>ce(`single-types/${e}`),ud=e=>Object.values(e||{}).reduce((r,o)=>Object.assign(r,o),{}),Yo=(e={})=>{const{plugins:r,_q:o,...s}={...e,...ud(e.plugins)};return o&&J()(s,"_q",encodeURIComponent(o)),`${(0,Fe.stringify)(s,{encode:!1,addQueryPrefix:!0})}`};const Xo=({allLayoutData:e,children:r,slug:o})=>{const s=(0,Ue.useQueryClient)(),{trackUsage:a}=(0,h.rS)(),{push:l}=(0,ae.k6)(),{setCurrentStep:i}=(0,h.c1)(),c=(0,t.useRef)(a),[u,d]=(0,t.useState)(!0),[{query:m,rawQuery:f}]=(0,h.Kx)(),p=Yo(m),y=(0,h.lm)(),b=(0,le.I0)(),{formatAPIError:v}=(0,h.So)(C),k=(0,h.kY)(),{post:E,put:R,del:F}=k,{componentsDataStructure:S,contentTypeDataStructure:T,data:D,isLoading:x,status:j}=(0,le.v9)(Gn),z=(0,t.useCallback)(M=>{const L=Kr(M,e.contentType,e.components);return(0,h.dU)(L,e.contentType,e.components)},[e]);(0,t.useEffect)(()=>()=>{b(Uo())},[b]),(0,t.useEffect)(()=>{const M=Object.keys(e.components).reduce((H,$)=>{const O=It(I()(e,["components",$,"attributes"],{}),e.components);return H[$]=(0,h.dU)(O,e.components[$],e.components),H},{}),L=It(e.contentType.attributes,e.components),Y=(0,h.dU)(L,e.contentType,e.components);b(Ho(M,Y))},[e,b]),(0,t.useEffect)(()=>{const L=ve.Z.CancelToken.source();return(async H=>{b(Nt()),d(!0);try{const{data:$}=await k.get(He(`${o}${p}`),{cancelToken:H.token});b(Un(z($))),d(!1)}catch($){if(ve.Z.isCancel($))return;const O=I()($,"response.status",null);O===404&&b(Hn(f,!0)),O===403&&(y({type:"info",message:{id:C("permissions.not-allowed.update")}}),l("/"))}})(L),()=>L.cancel("Operation canceled by the user.")},[k,z,l,o,b,p,f,y]);const Z=(0,t.useCallback)(M=>{y({type:"warning",message:v(M)})},[y,v]),V=(0,t.useCallback)(async M=>{try{c.current("willDeleteEntry",M);const{data:L}=await F(He(`${o}${p}`));return y({type:"success",message:{id:C("success.record.delete")}}),c.current("didDeleteEntry",M),Promise.resolve(L)}catch(L){return c.current("didNotDeleteEntry",{error:L,...M}),Z(L),Promise.reject(L)}},[F,o,Z,y,p]),B=(0,t.useCallback)(()=>{d(!0),b(Hn(f,!0))},[b,f]),K=(0,t.useCallback)(async(M,L)=>{const Y=He(`${o}${f}`);try{b(ie("submit-pending"));const{data:H}=await R(Y,M);return c.current("didCreateEntry",L),y({type:"success",message:{id:C("success.record.save")}}),i("contentManager.success"),s.invalidateQueries(["relation"]),b(qe(z(H))),d(!1),b(ie("resolved")),Promise.resolve(H)}catch(H){return c.current("didNotCreateEntry",{error:H,trackerProperty:L}),Z(H),b(ie("resolved")),Promise.reject(H)}},[R,z,Z,o,b,f,y,i,s]),W=(0,t.useCallback)(async()=>{try{c.current("willCheckDraftRelations");const M=He(`${o}/actions/numberOfDraftRelations`);b(ie("draft-relation-check-pending"));const L=await k.get(M);return c.current("didCheckDraftRelations"),b(ie("resolved")),L.data.data}catch(M){return Z(M),b(ie("resolved")),Promise.reject(M)}},[k,Z,o,b]),X=(0,t.useCallback)(async()=>{try{c.current("willPublishEntry");const M=He(`${o}/actions/publish${p}`);b(ie("publish-pending"));const{data:L}=await E(M);return c.current("didPublishEntry"),y({type:"success",message:{id:C("success.record.publish")}}),b(qe(z(L))),b(ie("resolved")),Promise.resolve(L)}catch(M){return Z(M),b(ie("resolved")),Promise.reject(M)}},[E,z,Z,o,p,b,y]),q=(0,t.useCallback)(async(M,L)=>{const Y=He(`${o}${f}`);try{c.current("willEditEntry",L),b(ie("submit-pending"));const{data:H}=await R(Y,M);return y({type:"success",message:{id:C("success.record.save")}}),c.current("didEditEntry",{trackerProperty:L}),s.invalidateQueries(["relation"]),b(qe(z(H))),b(ie("resolved")),Promise.resolve(H)}catch(H){return Z(H),c.current("didNotEditEntry",{error:H,trackerProperty:L}),b(ie("resolved")),Promise.reject(H)}},[R,z,Z,o,b,f,y,s]),ee=(0,t.useCallback)(async()=>{const M=He(`${o}/actions/unpublish${p}`);b(ie("unpublish-pending"));try{c.current("willUnpublishEntry");const{data:L}=await E(M);c.current("didUnpublishEntry"),y({type:"success",message:{id:C("success.record.unpublish")}}),b(qe(z(L))),b(ie("resolved"))}catch(L){b(ie("resolved")),Z(L)}},[E,z,y,Z,o,b,p]);return r({componentsDataStructure:S,contentTypeDataStructure:T,data:D,isCreatingEntry:u,isLoadingForData:x,onDelete:V,onDeleteSucceeded:B,onPost:K,onDraftRelationCheck:W,onPublish:X,onPut:q,onUnpublish:ee,redirectionLink:"/",status:j})};Xo.propTypes={allLayoutData:n().shape({components:n().object.isRequired,contentType:n().object.isRequired}).isRequired,children:n().func.isRequired,slug:n().string.isRequired};var md=(0,t.memo)(Xo),pd=g(56243);function gd(e,r){return o=>{const s=r();return t.createElement(e,{...o,...s})}}var fd=gd;function hd(){const{initialData:e,hasDraftAndPublish:r}=(0,h.Wq)(),o=e.publishedAt!==void 0&&e.publishedAt!==null;return{hasDraftAndPublish:r,isPublished:o}}var yd=hd;const bd=(0,N.ZP)(pd.Z)`
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  * {
    fill: ${({theme:e,$bulletColor:r})=>e.colors[r]};
  }
`,Jo=({hasDraftAndPublish:e,isPublished:r})=>{const{formatMessage:o}=(0,Q.Z)();if(!e)return null;const s={draft:{textColor:"secondary700",bulletColor:"secondary600",box:{background:"secondary100",borderColor:"secondary200"}},published:{textColor:"success700",bulletColor:"success600",box:{background:"success100",borderColor:"success200"}}},a=r?s.published:s.draft;return t.createElement(A.x,{hasRadius:!0,as:"aside",paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,...a.box},t.createElement(A.x,{as:w.k},t.createElement(bd,{$bulletColor:a.bulletColor}),t.createElement(A.x,{paddingLeft:3},t.createElement(G.Z,{textColor:a.textColor},o({id:C("containers.Edit.information.editing"),defaultMessage:"Editing"}),"\xA0"),t.createElement(G.Z,{fontWeight:"bold",textColor:a.textColor},r&&o({id:C("containers.Edit.information.publishedVersion"),defaultMessage:"published version"}),!r&&o({id:C("containers.Edit.information.draftVersion"),defaultMessage:"draft version"})))))};Jo.propTypes={hasDraftAndPublish:n().bool.isRequired,isPublished:n().bool.isRequired};var Ed=fd(Jo,yd),Jn=g(9026);const _n=60*1e3,er=_n*60,Bt=er*24,_o=Bt*30,es=Bt*365;var Cd=e=>e<_n?{unit:"second",value:-Math.round(e/1e3)}:e<er?{unit:"minute",value:-Math.round(e/_n)}:e<Bt?{unit:"hour",value:-Math.round(e/er)}:e<_o?{unit:"day",value:-Math.round(e/Bt)}:e<es?{unit:"month",value:-Math.round(e/_o)}:{unit:"year",value:-Math.round(e/es)},ts=g(8997);const ht=({label:e,value:r})=>t.createElement(w.k,{justifyContent:"space-between"},t.createElement(G.Z,{as:"dt",fontWeight:"bold",textColor:"neutral600"},e),t.createElement(G.Z,{as:"dd"},r));ht.propTypes={label:n().string.isRequired,value:n().string.isRequired};var vd=()=>{const{formatMessage:e,formatRelativeTime:r}=(0,Q.Z)(),{initialData:o,isCreatingEntry:s}=(0,h.Wq)(),a=(0,t.useRef)(Date.now()),l=(u,d)=>{const{firstname:m,lastname:f,username:p}=o[d]??{},y=m??"",b=f??"",v=p??(0,ts.Pp)(y,b),E=(o[u]?new Date(o[u]).getTime():Date.now())-a.current,{unit:R,value:F}=Cd(-E);return{at:r(F,R,{numeric:"auto"}),by:s?"-":v}},i=l("updatedAt","updatedBy"),c=l("createdAt","createdBy");return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(G.Z,{variant:"sigma",textColor:"neutral600",id:"additional-information"},e({id:C("containers.Edit.information"),defaultMessage:"Information"})),t.createElement(A.x,{paddingBottom:4},t.createElement(Jn.i,null)),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},t.createElement(ht,{label:e({id:C("containers.Edit.information.created"),defaultMessage:"Created"}),value:c.at}),t.createElement(ht,{label:e({id:C("containers.Edit.information.by"),defaultMessage:"By"}),value:c.by})),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},t.createElement(ht,{label:e({id:C("containers.Edit.information.lastUpdate"),defaultMessage:"Last update"}),value:i.at}),t.createElement(ht,{label:e({id:C("containers.Edit.information.by"),defaultMessage:"By"}),value:i.by}))))},tt=g(66456),Wt=g(29439),zt=g(22342),Vt=g(96166),Ut=g(88693);function Rd(e,r){return o=>{const s=r();return t.createElement(e,{...o,...s})}}var Td=Rd;function Md(){const{initialData:e,isCreatingEntry:r,isSingleType:o,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:u,publishConfirmation:d,onPublishPromptDismissal:m}=(0,h.Wq)();return{initialData:e,isCreatingEntry:r,isSingleType:o,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:u,publishConfirmation:d,onPublishPromptDismissal:m}}var Dd=Md;const ns=(0,N.ZP)(w.k)`
  text-align: center;
`,rs=({allowedActions:{canUpdate:e,canCreate:r,canPublish:o},initialData:s,isCreatingEntry:a,isSingleType:l,hasDraftAndPublish:i,layout:c,modifiedData:u,onPublish:d,onUnpublish:m,status:f,publishConfirmation:{show:p,draftCount:y},onPublishPromptDismissal:b})=>{const{goBack:v}=(0,ae.k6)(),[k,E]=(0,t.useState)(!1),{formatMessage:R}=(0,Q.Z)(),F=I()(c,["settings","mainField"],"id"),S=I()(c,["info","displayName"],"NOT FOUND"),T=!gt()(s,u)||a&&!be()(u);let x=R({id:C("containers.Edit.pluginHeader.title.new"),defaultMessage:"Create an entry"});!a&&!l&&(x=s[F]||S),l&&(x=S);let j=null;if(a&&r&&(j=t.createElement(w.k,{gap:2},i&&t.createElement(ue.z,{disabled:!0,startIcon:t.createElement(tt.Z,null),variant:"secondary"},R({id:"app.utils.publish",defaultMessage:"Publish"})),t.createElement(ue.z,{disabled:!T,loading:f==="submit-pending",type:"submit"},R({id:C("containers.Edit.submit"),defaultMessage:"Save"})))),!a&&e){const B=i&&o,K=!be()(s.publishedAt),W=K?f==="unpublish-pending":f==="publish-pending",X=K?{id:"app.utils.unpublish",defaultMessage:"Unpublish"}:{id:"app.utils.publish",defaultMessage:"Publish"},q=K?()=>E(!0):()=>d();j=t.createElement(w.k,null,B&&t.createElement(ue.z,{disabled:T,loading:W,onClick:q,startIcon:t.createElement(tt.Z,null),variant:"secondary"},R(X)),t.createElement(A.x,{paddingLeft:B?2:0},t.createElement(ue.z,{disabled:!T,loading:f==="submit-pending",type:"submit"},R({id:C("containers.Edit.submit"),defaultMessage:"Save"}))))}const z=()=>E(B=>!B),Z=()=>{z(),m()},V=`${R({id:C("api.id"),defaultMessage:"API ID "})} : ${c.apiID}`;return t.createElement(t.Fragment,null,t.createElement(Be.T,{title:x.toString(),primaryAction:j,subtitle:V,navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Wt.Z,null),onClick:B=>{B.preventDefault(),v()},to:"/"},R({id:"global.back",defaultMessage:"Back"}))}),t.createElement(zt.V,{onClose:z,title:"Confirmation",labelledBy:"confirmation",describedBy:"confirm-description",isOpen:k},t.createElement(Vt.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},t.createElement(G.Z,{id:"confirm-description"},R({id:C("popUpWarning.warning.unpublish"),defaultMessage:"Unpublish this content will automatically change it to a draft."},{br:()=>t.createElement("br",null)}))),t.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},t.createElement(G.Z,{id:"confirm-description"},R({id:C("popUpWarning.warning.unpublish-question"),defaultMessage:"Are you sure you want to unpublish it?"}))))),t.createElement(Ut.c,{startAction:t.createElement(ue.z,{onClick:z,variant:"tertiary"},R({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{variant:"danger-light",onClick:Z},R({id:"components.popUpWarning.button.confirm",defaultMessage:"Confirm"}))})),t.createElement(zt.V,{onClose:b,title:R({id:C("popUpWarning.warning.has-draft-relations.title"),defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:p},t.createElement(Vt.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(ns,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},y,R({id:C("popUpwarning.warning.has-draft-relations.message"),defaultMessage:"<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."},{b:B=>t.createElement(G.Z,{fontWeight:"bold"},B),count:y}))),t.createElement(ns,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},R({id:C("popUpWarning.warning.publish-question"),defaultMessage:"Do you still want to publish?"}))))),t.createElement(Ut.c,{startAction:t.createElement(ue.z,{onClick:b,variant:"tertiary"},R({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{variant:"success",onClick:d},R({id:C("popUpwarning.warning.has-draft-relations.button-confirm"),defaultMessage:"Publish"}))})))};rs.propTypes={allowedActions:n().shape({canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canPublish:n().bool.isRequired}).isRequired,initialData:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isSingleType:n().bool.isRequired,status:n().string.isRequired,layout:n().object.isRequired,hasDraftAndPublish:n().bool.isRequired,modifiedData:n().object.isRequired,onPublish:n().func.isRequired,onUnpublish:n().func.isRequired,publishConfirmation:n().shape({show:n().bool.isRequired,draftCount:n().number.isRequired}).isRequired,onPublishPromptDismissal:n().func.isRequired};const kd=(0,t.memo)(rs,$e());var Id=Td(kd,Dd),Ld=e=>{if(!e.layouts)return[];const r=e.layouts.edit,o=e.attributes,s=i=>I()(o,[i,"type"],"");let a=0;const l=[];return r.forEach(i=>{const c=i.some(({name:u})=>s(u)==="dynamiczone");l[a]||(l[a]=[]),c?(a=a===0&&be()(l[0])?0:a+1,l[a]||(l[a]=[]),l[a].push(i),a+=1):l[a].push(i)}),l.filter(i=>i.length>0)},xd=g(91815),Pd=g.n(xd),wd=g(3704),os=g.n(wd),Fd=(e,r)=>{const o=s=>{const a=(0,h.ZT)(e,[{action:`plugin::content-manager.explorer.${s}`,subject:r}]);return Pd()(os()(a,"properties.fields"))};return{createActionAllowedFields:o("create"),readActionAllowedFields:o("read"),updateActionAllowedFields:o("update")}},Sd=e=>{if(!e)return[];const o=[...e.contentType.layouts.edit,...Object.values(e.components).flatMap(a=>a.layouts.edit)].flat().filter(a=>a.fieldSchema.customField).map(a=>a.fieldSchema.customField);return[...new Set(o)]};function Ad(e,r){return o=>{const s=r();return t.createElement(e,{...o,...s})}}var Od=Ad;function $d(){const{hasDraftAndPublish:e,modifiedData:r}=(0,h.Wq)();let o={};return e&&(o=be()(r.publishedAt)?{status:"draft"}:{status:"published"}),{hasDraftAndPublish:e,trackerProperty:o}}var Zd=$d;const ss=({isCreatingEntry:e,onDelete:r,onDeleteSucceeded:o,trackerProperty:s})=>{const[a,l]=(0,t.useState)(!1),[i,c]=(0,t.useState)(!1),{formatMessage:u}=(0,Q.Z)(),{formatAPIError:d}=(0,h.So)(C),m=(0,h.lm)(),f=()=>l(y=>!y),p=async()=>{try{c(!0),await r(s),c(!1),f(),o()}catch(y){c(!1),f(),m({type:"warning",message:d(y)})}};return e?null:t.createElement(t.Fragment,null,t.createElement(ue.z,{onClick:f,size:"S",startIcon:t.createElement(we.Z,null),variant:"danger-light"},u({id:C("containers.Edit.delete-entry"),defaultMessage:"Delete this entry"})),t.createElement(h.QH,{isConfirmButtonLoading:i,isOpen:a,onConfirm:p,onToggleDialog:f}))};ss.propTypes={isCreatingEntry:n().bool.isRequired,onDelete:n().func.isRequired,onDeleteSucceeded:n().func.isRequired,trackerProperty:n().object.isRequired};const qd=(0,t.memo)(ss,$e());var Nd=Od(qd,Zd);const tr=({columns:e,customFieldInputs:r})=>t.createElement(De.r,{gap:4},e.map(({fieldSchema:o,labelAction:s,metadatas:a,name:l,size:i,queryInfos:c})=>{if(o.type==="component"){const{component:d,max:m,min:f,repeatable:p=!1,required:y=!1}=o;return t.createElement(fe.P,{col:i,s:12,xs:12,key:d},t.createElement(Ot,{componentUid:d,labelAction:s,isRepeatable:p,intlLabel:{id:a.label,defaultMessage:a.label},max:m,min:f,name:l,required:y}))}return t.createElement(fe.P,{col:i,key:l,s:12,xs:12},t.createElement(Pn,{size:i,fieldSchema:o,keys:l,labelAction:s,metadatas:a,queryInfos:c,customFieldInputs:r}))}));tr.defaultProps={customFieldInputs:{}},tr.propTypes={columns:n().array.isRequired,customFieldInputs:n().object};var jd=tr;const nr=e=>e["content-manager_editViewLayoutManager"].currentLayout,Bd=(0,lt.P1)(nr,e=>Ld(e?.contentType??{})),Wd=(0,lt.P1)(nr,e=>Sd(e)),as=Qe.Z.contentManager,zd=[{action:"plugin::content-type-builder.read",subject:null}],rr=({allowedActions:e,isSingleType:r,goBack:o,slug:s,id:a,origin:l,userPermissions:i})=>{const{trackUsage:c}=(0,h.rS)(),{formatMessage:u}=(0,Q.Z)(),{layout:d,formattedContentTypeLayout:m,customFieldUids:f}=(0,le.v9)(T=>({layout:nr(T),formattedContentTypeLayout:Bd(T),customFieldUids:Wd(T)})),{isLazyLoading:p,lazyComponentStore:y}=wn(f),{createActionAllowedFields:b,readActionAllowedFields:v,updateActionAllowedFields:k}=Fd(i,s),E=r?as.singleTypesConfigurations:as.collectionTypesConfigurations,R=`/content-manager/${r?"singleType":"collectionType"}/${s}/configurations/edit`,F=r?md:Hc,S=T=>T.every(D=>D.every(x=>x.fieldSchema.type==="dynamiczone"));return p?t.createElement(h.dO,null):t.createElement(F,{allLayoutData:d,slug:s,id:a,origin:l},({componentsDataStructure:T,contentTypeDataStructure:D,data:x,isCreatingEntry:j,isLoadingForData:z,onDelete:Z,onDeleteSucceeded:V,onPost:B,onPublish:K,onDraftRelationCheck:W,onPut:X,onUnpublish:q,redirectionLink:ee,status:M})=>t.createElement(dd,{allowedActions:e,allLayoutData:d,createActionAllowedFields:b,componentsDataStructure:T,contentTypeDataStructure:D,from:ee,initialValues:x,isCreatingEntry:j,isLoadingForData:z,isSingleType:r,onPost:B,onPublish:K,onDraftRelationCheck:W,onPut:X,onUnpublish:q,readActionAllowedFields:v,redirectToPreviousPage:o,slug:s,status:M,updateActionAllowedFields:k},t.createElement(Se.o,{"aria-busy":M!=="resolved"},t.createElement(Id,{allowedActions:e}),t.createElement(Je.D,null,t.createElement(De.r,{gap:4},t.createElement(fe.P,{col:9,s:12},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},m.map((L,Y)=>{if(S(L)){const{0:{0:{name:H,fieldSchema:$,metadatas:O,labelAction:U}}}=L;return t.createElement(A.x,{key:Y},t.createElement(De.r,{gap:4},t.createElement(fe.P,{col:12,s:12,xs:12},t.createElement(Vc,{name:H,fieldSchema:$,labelAction:U,metadatas:O}))))}return t.createElement(A.x,{key:Y,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},L.map((H,$)=>t.createElement(jd,{columns:H,customFieldInputs:y,key:$}))))}))),t.createElement(fe.P,{col:3,s:12},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(Ed,null),t.createElement(A.x,{as:"aside","aria-labelledby":"additional-information",background:"neutral0",borderColor:"neutral150",hasRadius:!0,paddingBottom:4,paddingLeft:4,paddingRight:4,paddingTop:6,shadow:"tableShadow"},t.createElement(vd,null),t.createElement(St,{area:"contentManager.editView.informations"})),t.createElement(A.x,{as:"aside","aria-labelledby":"links"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(St,{area:"contentManager.editView.right-links",slug:s}),s!=="strapi::administrator"&&t.createElement(h.jW,{permissions:zd},t.createElement(h.Qj,{onClick:()=>{c("willEditEditLayout")},size:"S",startIcon:t.createElement(Ke.Z,null),style:{width:"100%"},to:`/plugins/content-type-builder/content-types/${s}`,variant:"secondary"},u({id:C("link-to-ctb"),defaultMessage:"Edit the model"}))),t.createElement(h.jW,{permissions:E},t.createElement(h.Qj,{size:"S",startIcon:t.createElement(di.Z,null),style:{width:"100%"},to:R,variant:"secondary"},u({id:"app.links.configure-view",defaultMessage:"Configure the view"}))),e.canDelete&&t.createElement(Nd,{isCreatingEntry:j,onDelete:Z,onDeleteSucceeded:V}))))))))))};rr.defaultProps={id:null,isSingleType:!1,origin:null,userPermissions:[]},rr.propTypes={allowedActions:n().shape({canRead:n().bool.isRequired,canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canDelete:n().bool.isRequired}).isRequired,id:n().string,isSingleType:n().bool,goBack:n().func.isRequired,origin:n().string,slug:n().string.isRequired,userPermissions:n().array};var Vd=(0,t.memo)(rr);const or=e=>{const r=(0,t.useMemo)(()=>Ur(e.slug),[e.slug]),{isLoading:o,allowedActions:s}=(0,h.ss)(r,e.userPermissions);return o?t.createElement(h.dO,null):t.createElement(Vd,{...e,allowedActions:s})};or.defaultProps={permissions:[]},or.propTypes={permissions:n().array,slug:n().string.isRequired,userPermissions:n().array.isRequired};var Ud=(0,t.memo)(or,$e());const is=({layout:e,...r})=>{const o=(0,le.v9)(to),s=(0,le.I0)(),[{query:a}]=(0,h.Kx)(),{runHookWaterfall:l}=(0,h.j1)(),i=mo(a,r.slug,"editView");return(0,t.useEffect)(()=>{const c=l(Ft.Eo,{layout:e,query:a});return s(li(c.layout,a)),()=>{s(ii())}},[e,s,a,l]),!o||!i?t.createElement(h.dO,null):t.createElement(Ud,{...r,userPermissions:i})};is.propTypes={layout:n().shape({components:n().object.isRequired,contentType:n().shape({uid:n().string.isRequired,settings:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().object.isRequired}).isRequired}).isRequired};var Ht=is,Hd=g(23940),yt=g.n(Hd);const sr=e=>e.reduce((r,o)=>r+o.size,0),Gd=e=>e.reduce((r,o,s)=>{const a={rowId:s,rowContent:o};return r.concat(a)},[]),nt=e=>e.reduce((r,o)=>{let s=[];const a=o.rowContent.reduce((c,u)=>{const d=sr(c);return u.name==="_TEMP_"||(d+u.size<=12?c.push(u):s.push(u)),c},[]),l=r.length===0?0:Math.max.apply(Math,r.map(c=>c.rowId))+1,i=sr(a);if(i<12&&a.push({name:"_TEMP_",size:12-i}),r.push({rowId:l,rowContent:a}),s.length>0){const c=sr(s);c<12&&s.push({name:"_TEMP_",size:12-c}),r.push({rowId:l+1,rowContent:s}),s=[]}return r},[]).filter(r=>r.rowContent.length>0).filter(r=>r.rowContent.length===1?r.rowContent[0].name!=="_TEMP_":!0),Qd=e=>e.reduce((r,o)=>{const s=o.rowContent.filter(a=>a.name!=="_TEMP_");return r.concat([s])},[]),ls=e=>{switch(e){case"boolean":case"date":case"integer":case"float":case"biginteger":case"decimal":case"time":return 4;case"json":case"component":case"richtext":case"dynamiczone":return 12;default:return 6}},Kd=(e,r=[])=>r.reduce((o,{rowContent:s})=>{const a=s.find(l=>l.name===e)?.size??null;return a&&(o=a),o},null),Yd=(e,r,o=[])=>o.map(s=>(s.rowContent=s.rowContent.map(a=>a.name===e?{...a,size:r}:a),s)),ar={fieldForm:{},componentLayouts:{},metaToEdit:"",initialData:{},metaForm:{},modifiedData:{}};var Xd=(e=ar,r)=>(0,wt.ZP)(e,o=>{const s=["modifiedData","layouts","edit"];switch(r.type){case"MOVE_ROW":{const a=I()(e,s,[]),{fromIndex:l,toIndex:i}=r;J()(o,s,Dt(a,l,i));break}case"ON_ADD_FIELD":{const a=Me()(e),l=ls(I()(a,["modifiedData","attributes",r.name,"type"],"")),i=I()(a,s,[]).length,c=[...s,i-1,"rowContent"],u=I()(a,c,[]);let d=I()(a,s,[]);Array.isArray(u)?J()(d,[i>0?i-1:0,"rowContent"],[...u,{name:r.name,size:l}]):J()(d,[i>0?i-1:0,"rowContent"],[{name:r.name,size:l}]);const m=nt(d);J()(o,s,m);break}case"ON_CHANGE":{J()(o,["modifiedData",...r.keys],r.value);break}case"ON_CHANGE_META":{J()(o,["metaForm","metadata",...r.keys],r.value);break}case"ON_CHANGE_SIZE":{J()(o,["metaForm","size"],r.value);break}case"ON_RESET":{o.modifiedData=e.initialData;break}case"REMOVE_FIELD":{const a=I()(e,[...s,r.rowIndex,"rowContent"],[]);let l=Me()(e);if(a.length===1||a.length===2&&I()(a,[1,"name"],"")==="_TEMP_"){const c=I()(e,s,[]);J()(l,s,c.filter((u,d)=>r.rowIndex!==d))}else J()(l,[...s,r.rowIndex,"rowContent"],a.filter((c,u)=>u!==r.fieldIndex));const i=nt(I()(l,s,[]));J()(o,s,i);break}case"REORDER_DIFF_ROW":{const a=I()(e,[...s,r.dragRowIndex,"rowContent"],[]),l=I()(e,[...s,r.hoverRowIndex,"rowContent"],[]),i=I()(e,[...s,r.dragRowIndex,"rowContent",r.dragIndex],{}),c=[...l,i];let u=Me()(e);J()(u,[...s,r.dragRowIndex,"rowContent"],a.filter((m,f)=>r.dragIndex!==f)),J()(u,[...s,r.hoverRowIndex,"rowContent"],Dt(c,c.length-1,r.hoverIndex));const d=nt(I()(u,s,[]));J()(o,s,d);break}case"REORDER_ROW":{const a=Me()(e),l=I()(a,[...s,r.dragRowIndex,"rowContent"],[]);J()(a,[...s,r.dragRowIndex,"rowContent"],Dt(l,r.dragIndex,r.hoverIndex));const i=nt(I()(a,s,[]));J()(o,s,i);break}case"SET_FIELD_TO_EDIT":{o.metaToEdit=r.name,o.metaForm={metadata:I()(e,["modifiedData","metadatas",r.name,"edit"],{}),size:Kd(r.name,e.modifiedData?.layouts?.edit)??ls()};break}case"SUBMIT_META_FORM":{J()(o,["modifiedData","metadatas",e.metaToEdit,"edit"],e.metaForm.metadata);const a=Me()(I()(e,s,[])),l=Yd(e.metaToEdit,e.metaForm.size,a);l.length>0&&J()(o,s,nt(l));break}case"SUBMIT_SUCCEEDED":{o.initialData=e.modifiedData;break}case"UNSET_FIELD_TO_EDIT":{o.metaToEdit="",o.metaForm={};break}default:return o}}),Jd=(e,r,o)=>{let s=Me()(r);return J()(s,["layouts","edit"],nt(Gd(r.layouts.edit))),{...e,initialData:s,modifiedData:s,componentLayouts:o}},Pe=g(34853),cs=g(45112);const ds=({componentUid:e})=>{const{componentLayouts:r}=Ve(),{formatMessage:o}=(0,Q.Z)(),s=I()(r,[e],{}),a=I()(s,["layouts","edit"],[]);return t.createElement(A.x,{padding:3},a.map((l,i)=>t.createElement(De.r,{gap:4,key:i},l.map(c=>t.createElement(fe.P,{key:c.name,col:c.size},t.createElement(A.x,{paddingTop:2},t.createElement(w.k,{alignItems:"center",background:"neutral0",paddingLeft:3,paddingRight:3,height:`${32/16}rem`,hasRadius:!0,borderColor:"neutral200"},t.createElement(G.Z,{textColor:"neutral800"},c.name))))))),t.createElement(A.x,{paddingTop:2},t.createElement(h.rU,{startIcon:t.createElement(cs.Z,null),to:`/content-manager/components/${e}/configurations/edit`},o({id:C("components.FieldItem.linkToComponentLayout"),defaultMessage:"Set the component's layout"}))))};ds.propTypes={componentUid:n().string.isRequired};var _d=ds,rt=g(14911);const eu=(0,N.ZP)(w.k)`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-color: ${e.colors.primary200};

      ${G.Z} {
          color: ${e.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,us=({components:e})=>{const{componentLayouts:r}=Ve();return t.createElement(w.k,{gap:2,overflow:"scroll hidden",padding:3},e.map(o=>t.createElement(eu,{hasRadius:!0,background:"neutral0",justifyContent:"center",alignItems:"center",height:`${84/16}rem`,minWidth:`${140/16}rem`,key:o,padding:2,direction:"column",borderColor:"neutral200",as:rt.rU,to:`/content-manager/components/${o}/configurations/edit`},t.createElement(qt,null),t.createElement(A.x,{paddingTop:1},t.createElement(G.Z,{fontSize:1,textColor:"neutral600",fontWeight:"bold"},r?.[o]?.info?.displayName??"")))))};us.propTypes={components:n().arrayOf(n().string).isRequired};var tu=us;const ms=(0,N.ZP)(ge.h)`
  background-color: transparent;
  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,ir=({attribute:e,onEditField:r,onDeleteField:o,children:s})=>{const{formatMessage:a}=(0,Q.Z)();return t.createElement(A.x,{overflow:"hidden",width:"100%"},t.createElement(w.k,{paddingLeft:3,alignItems:"center",justifyContent:"space-between"},t.createElement(G.Z,{fontWeight:"semiBold",textColor:"neutral800",ellipsis:!0},s),t.createElement(w.k,null,t.createElement(ms,{label:a({id:C("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:s}),onClick:r,icon:t.createElement(Ke.Z,null),noBorder:!0}),t.createElement(ms,{label:a({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:s}),"data-testid":"delete-field",onClick:o,icon:t.createElement(we.Z,null),noBorder:!0}))),e?.type==="component"&&t.createElement(_d,{componentUid:e.component}),e?.type==="dynamiczone"&&t.createElement(tu,{components:e.components}))};ir.defaultProps={attribute:void 0},ir.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),onEditField:n().func.isRequired,onDeleteField:n().func.isRequired,children:n().string.isRequired};var nu=ir;const ru=(0,N.ZP)(w.k)`
  position: relative;
  ${({isFirst:e,isLast:r,hasHorizontalPadding:o})=>e?`
        padding-right: 4px;
      `:r?`
        padding-left: 4px;
      `:o?`
        padding: 0 4px;
      `:""}
  ${({showRightCarret:e,showLeftCarret:r,theme:o})=>e?`
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${o.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:r?`
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${o.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:""};
`,ou=(0,N.ZP)(Ae.Z)`
  height: ${12/16}rem;
  width: ${12/16}rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,su=(0,N.ZP)(w.k)`
  display: ${({dragStart:e})=>e?"none":"flex"};
  opacity: ${({isDragging:e,isFullSize:r,isHidden:o})=>e&&!r?.2:e&&r||o?0:1};
`,au=(0,N.ZP)(w.k)`
  cursor: all-scroll;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,lr=({attribute:e,children:r,index:o,lastIndex:s,moveItem:a,moveRow:l,name:i,onDeleteField:c,onEditField:u,rowIndex:d,size:m})=>{const[f,p]=(0,t.useState)(!1),y=i==="_TEMP_",{setIsDraggingSibling:b}=Ve(),v=m===12,k=(0,t.useRef)(null),E=(0,t.useRef)(null),[{clientOffset:R,isOver:F},S]=(0,We.useDrop)({accept:Ce.EDIT_FIELD,hover(q,ee){if(!E.current||q.size!==12)return;const M=ee.getItem().index,L=o,Y=ee.getItem().rowIndex,H=d;if(M===L&&Y===H)return;const $=E.current.getBoundingClientRect(),O=($.bottom-$.top)/2,se=ee.getClientOffset().y-$.top;Y<H&&se<O||Y>H&&se>O||(l(Y,H),q.rowIndex=H,q.itemIndex=L)},drop(q,ee){if(!E.current)return;const M=ee.getItem().index,L=o,Y=ee.getItem().rowIndex,H=d;if(q.size===12||M===L&&Y===H)return;const $=E.current.getBoundingClientRect();if(Math.abs(ee.getClientOffset().x-$.left)>$.width/1.8){a(M,L+1,Y,H),q.itemIndex=L+1,q.rowIndex=H;return}a(M,L,Y,H),q.itemIndex=L,q.rowIndex=H},collect:q=>({canDrop:q.canDrop(),clientOffset:q.getClientOffset(),isOver:q.isOver(),isOverCurrent:q.isOver({shallow:!0}),itemType:q.getItemType()})}),[{isDragging:T,getItem:D},x,j]=(0,We.useDrag)({type:Ce.EDIT_FIELD,item(){return b(!0),{index:o,labelField:r,rowIndex:d,name:i,size:m}},canDrag(){return i!=="_TEMP_"},collect:q=>({isDragging:q.isDragging(),getItem:q.getItem()}),end(){b(!1)}});(0,t.useEffect)(()=>{j((0,it.rX)(),{captureDraggingState:!0})},[j]);const z={dragRef:x(k),dropRef:S(E)};let Z=!1,V=!1;if(E.current&&R){const q=E.current.getBoundingClientRect();Z=F&&D.size!==12&&Math.abs(R.x-q.left)<q.width/2,V=F&&D.size!==12&&Math.abs(R.x-q.left)>q.width/2,i==="_TEMP_"&&(Z=F&&D.size!==12,V=!1)}const B=()=>e&&v?`${74/16}rem`:`${32/16}rem`,K=o===0&&!v,W=o===s&&!v,X=o!==0&&!v;return t.createElement(fe.P,{col:m},t.createElement(ru,{ref:z.dropRef,showLeftCarret:Z,showRightCarret:V,isFirst:K,isLast:W,hasHorizontalPadding:X,onDrag:()=>{v&&!f&&p(!0)},onDragEnd:()=>{v&&p(!1)}},f&&v&&t.createElement(A.x,{width:"100%",height:"2px",background:"primary600"}),t.createElement(su,{width:v&&f?0:"100%",borderColor:"neutral150",hasRadius:!0,background:"neutral100",minHeight:B(),alignItems:"stretch",isDragging:T,dragStart:f,isFullSize:v,isHidden:y},t.createElement(au,{as:"span",type:"button",ref:z.dragRef,onClick:q=>q.stopPropagation(),alignItems:"center",paddingLeft:3,paddingRight:3,tabIndex:-1},t.createElement(ou,null)),!y&&t.createElement(nu,{attribute:e,onEditField:u,onDeleteField:c},r))))};lr.defaultProps={attribute:void 0},lr.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),children:n().string.isRequired,index:n().number.isRequired,moveItem:n().func.isRequired,moveRow:n().func.isRequired,name:n().string.isRequired,onDeleteField:n().func.isRequired,onEditField:n().func.isRequired,rowIndex:n().number.isRequired,lastIndex:n().number.isRequired,size:n().number.isRequired};var iu=lr;const ps=({rowItem:e,onRemoveField:r,rowId:o,rowIndex:s,index:a,lastIndex:l})=>{const{setEditFieldToSelect:i,attributes:c,modifiedData:u,moveRow:d,moveItem:m}=Ve(),f=I()(c,[e.name],{}),p=I()(u,["metadatas",e.name,"edit","label"],"");return t.createElement(iu,{onEditField:()=>i(e.name),onDeleteField:()=>r(o,a),attribute:f,index:a,lastIndex:l,rowIndex:s,name:e.name,size:e.size,moveRow:d,moveItem:m},p||e.name)};ps.propTypes={index:n().number.isRequired,lastIndex:n().number.isRequired,onRemoveField:n().func.isRequired,rowId:n().number.isRequired,rowIndex:n().number.isRequired,rowItem:n().object.isRequired};var lu=ps;const gs=({row:e,onRemoveField:r,rowIndex:o})=>t.createElement(De.r,null,e.rowContent.map((s,a)=>t.createElement(lu,{key:s.name,rowItem:s,index:a,rowId:e.rowId,onRemoveField:r,rowIndex:o,lastIndex:e.rowContent.length-1})));gs.propTypes={onRemoveField:n().func.isRequired,row:n().object.isRequired,rowIndex:n().number.isRequired};var cu=gs;const du=[{action:"plugin::content-type-builder.read",subject:null}];var uu=()=>{const{trackUsage:e}=(0,h.rS)(),{formatMessage:r}=(0,Q.Z)(),{slug:o,modifiedData:s,isContentTypeView:a}=Ve(),l=a?"content-types":"components",i=`/plugins/content-type-builder/${l==="content-types"?l:"component-categories"}`,c=I()(s,"category",""),u=l==="content-types"?o:`${c}/${o}`,d=()=>{e("willEditEditLayout")};return o==="strapi::administrator"?null:t.createElement(h.jW,{permissions:du},t.createElement(h.Qj,{to:`${i}/${u}`,onClick:d,size:"S",startIcon:t.createElement(Ke.Z,null),variant:"secondary"},r({id:C(`edit-settings-view.link-to-ctb.${l}`),defaultMessage:"Edit the content type"})))};const fs=({editLayout:e,fields:r,onRemoveField:o,onAddField:s})=>{const{formatMessage:a}=(0,Q.Z)();return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(w.k,{justifyContent:"space-between"},t.createElement("div",null,t.createElement(A.x,null,t.createElement(G.Z,{fontWeight:"bold"},a({id:C("containers.ListPage.displayedFields"),defaultMessage:"Displayed fields"}))),t.createElement(A.x,null,t.createElement(G.Z,{variant:"pi",textColor:"neutral600"},a({id:"containers.SettingPage.editSettings.description",defaultMessage:"Drag & drop the fields to build the layout"})))),t.createElement(uu,null)),t.createElement(A.x,{padding:4,hasRadius:!0,borderStyle:"dashed",borderWidth:"1px",borderColor:"neutral300"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.map((l,i)=>t.createElement(cu,{key:l.rowId,row:l,rowIndex:i,onRemoveField:o})),t.createElement(Pe.O,{id:"label",label:a({id:C("containers.SettingPage.add.field"),defaultMessage:"Insert another field"}),as:ue.z,"data-testid":"add-field",fullWidth:!0,startIcon:t.createElement(pt.Z,null),endIcon:null,variant:"secondary",disabled:r.length===0},r.map(l=>t.createElement(Pe.s,{key:l,onClick:()=>s(l)},l))))))};fs.propTypes={editLayout:n().array.isRequired,fields:n().array.isRequired,onAddField:n().func.isRequired,onRemoveField:n().func.isRequired};var mu=fs,hs=g(85025),ys=g(55225),bs=g(31600),Es=g(11406),bt=g(32031),pu=g(73779),Gt=g(88675),gu=g(22348),Cs=g(7184),cr=g(43475),fu=g(82512),dr=g(83218),hu=g(872),yu=g(17757),bu=g(1176),Eu=g(15431);const vs={biginteger:t.createElement(bt.Z,null),boolean:t.createElement(pu.Z,null),date:t.createElement(Gt.Z,null),datetime:t.createElement(Gt.Z,null),decimal:t.createElement(bt.Z,null),email:t.createElement(gu.Z,null),enum:t.createElement(Cs.Z,null),enumeration:t.createElement(Cs.Z,null),file:t.createElement(cr.Z,null),files:t.createElement(cr.Z,null),float:t.createElement(bt.Z,null),integer:t.createElement(bt.Z,null),media:t.createElement(cr.Z,null),number:t.createElement(bt.Z,null),relation:t.createElement(fu.Z,null),string:t.createElement(dr.Z,null),text:t.createElement(dr.Z,null),richtext:t.createElement(dr.Z,null),time:t.createElement(Gt.Z,null),timestamp:t.createElement(Gt.Z,null),json:t.createElement(hu.Z,null),uid:t.createElement(yu.Z,null),component:t.createElement(bu.Z,null),dynamiczone:t.createElement(Eu.Z,null)},ur=({type:e,customFieldUid:r})=>{const o=(0,h.mZ)();let s=vs[e];if(r){const l=o.get(r).icon;l&&(s=t.createElement(A.x,{marginRight:3,width:7,height:6},t.createElement(l,null)))}return vs[e]?s:null};ur.defaultProps={customFieldUid:null},ur.propTypes={type:n().string.isRequired,customFieldUid:n().string};var Rs=ur,Cu=e=>e.reduce((r,o)=>{const s=o?.attributes??{},a=Object.keys(s).filter(l=>!["boolean","component","dynamiczone","json","media","password","relation","text","richtext"].includes(s?.[l]?.type??""));return r[o.uid]=a,r},{}),Ts=e=>{let r;switch(e){case"description":case"label":case"placeholder":r="text";break;case"mainField":r="select";break;case"editable":r="bool";break;default:r=""}const o=C(e==="mainField"?"containers.SettingPage.editSettings.entry.title":`form.Input.${e}`);return{type:r,label:{id:o}}},Et=g(9139);const mr=({type:e,options:r,onChange:o,value:s,name:a,...l})=>{const{formatMessage:i}=(0,Q.Z)();switch(e){case"text":return t.createElement(Mn.o,{onChange:o,value:s,name:a,...l});case"bool":return t.createElement(Et.s,{onChange:c=>{o({target:{name:a,value:c.target.checked}})},checked:s,name:a,onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),...l});case"select":return t.createElement(xe.P,{value:s,name:a,onChange:c=>o({target:{name:a,value:c}}),...l},r.map(c=>t.createElement(he.W,{key:c,value:c},c)));default:return null}};mr.defaultProps={options:void 0},mr.propTypes={type:n().string.isRequired,options:n().arrayOf(n().string),onChange:n().func.isRequired,value:n().oneOfType([n().string,n().bool]).isRequired,name:n().string.isRequired};var vu=mr;const Ru=[[4,"33%"],[6,"50%"],[8,"66%"],[12,"100%"]],Tu=["dynamiczone","component","json","richtext"],Mu=[1,5,10,15,30,60],Du=["datetime","time"],Ms=({onMetaChange:e,onSizeChange:r})=>{const{formatMessage:o}=(0,Q.Z)(),{modifiedData:s,selectedField:a,attributes:l,fieldForm:i}=Ve(),c=(0,t.useMemo)(sn,[]),{schemas:u}=(0,le.v9)(E=>c(E),le.wU),d=(0,t.useMemo)(()=>{if(!a)return[];const E=I()(s,["metadatas",a,"edit"],{});return Object.keys(E).filter(R=>R!=="visible")},[a,s]),m=(0,t.useMemo)(()=>Cu(u),[u]),f=(0,t.useCallback)(E=>{if(E!=="relation"&&E!=="component")return[];const R=E==="component"?"component":"targetModel",F=I()(s,["attributes",a,R],"");return I()(m,[F],[])},[a,m,s]),p=d.map(E=>{const R=I()(l,[a,"type"]);return["component","dynamiczone"].includes(R)&&!["label","description"].includes(E)||R==="component"&&E!=="label"||["media","json","boolean"].includes(R)&&E==="placeholder"||E==="step"?null:t.createElement(fe.P,{col:6,key:E},t.createElement(vu,{type:Ts(E).type,hint:E==="mainField"?o({id:C("containers.SettingPage.editSettings.relation-field.description")}):"",label:o({id:I()(Ts(E),"label.id","app.utils.defaultMessage")}),name:E,onChange:e,value:I()(i,["metadata",E],""),options:f(R)}))}),y=!Tu.includes(l[a].type),b=t.createElement(fe.P,{col:6,key:"size"},t.createElement(xe.P,{value:i?.size,name:"size",onChange:E=>{r({name:a,value:E})},label:o({id:C("containers.SettingPage.editSettings.size.label"),defaultMessage:"Size"})},Ru.map(([E,R])=>t.createElement(he.W,{key:E,value:E},R)))),v=Du.includes(l[a].type),k=t.createElement(fe.P,{col:6,key:"step"},t.createElement(xe.P,{value:I()(i,["metadata","step"],1),name:"step",onChange:E=>e({target:{name:"step",value:E}}),label:o({id:C("containers.SettingPage.editSettings.step.label"),defaultMessage:"Time interval (minutes)"})},Mu.map(E=>t.createElement(he.W,{key:E,value:E},E))));return t.createElement(t.Fragment,null,p,y&&b,v&&k)};Ms.propTypes={onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired};var ku=Ms;const Iu=(0,N.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:e})=>e.spaces[3]};
  }
`,pr=({onToggle:e,onMetaChange:r,onSizeChange:o,onSubmit:s,type:a,customFieldUid:l})=>{const{selectedField:i}=Ve(),{formatMessage:c}=(0,Q.Z)(),u=()=>a==="timestamp"?"date":["decimal","float","integer","biginter"].includes(a)?"number":a;return t.createElement(hs.P,{onClose:e,labelledBy:"title"},t.createElement("form",{onSubmit:s},t.createElement(ys.x,null,t.createElement(Iu,null,t.createElement(Rs,{type:u(),customFieldUid:l}),t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:C("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:yt()(i)})))),t.createElement(bs.f,null,t.createElement(De.r,{gap:4},t.createElement(ku,{onMetaChange:r,onSizeChange:o}))),t.createElement(Es.m,{startActions:t.createElement(ue.z,{onClick:e,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ue.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};pr.defaultProps={customFieldUid:null},pr.propTypes={customFieldUid:n().string,onSubmit:n().func.isRequired,onToggle:n().func.isRequired,onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired,type:n().string.isRequired};var Lu=pr,xu=(e,r,o)=>{const{put:s}=(0,h.tg)();return s(ce(o?`content-types/${r}/configuration`:`components/${r}/configuration`),e)};const gr=({mainLayout:e,components:r,isContentTypeView:o,slug:s,updateLayout:a})=>{const[l,i]=(0,t.useReducer)(Xd,ar,()=>Jd(ar,e,r)),[c,u]=(0,t.useState)(!1),{trackUsage:d}=(0,h.rS)(),m=(0,h.lm)(),{goBack:f}=(0,ae.k6)(),[p,y]=(0,t.useState)(!1),[b,v]=(0,t.useState)(!1),{componentLayouts:k,initialData:E,modifiedData:R,metaToEdit:F,metaForm:S}=l,{formatMessage:T}=(0,Q.Z)(),D=I()(e,["info","displayName"],""),x=I()(R,["attributes"],{}),j=Object.keys(x).filter(P=>{const re=I()(x,[P,"type"],"");return!["dynamiczone","json","text","relation","component","boolean","media","password","richtext","timestamp"].includes(re)&&!!re}),z=I()(R,["layouts","edit"],[]),Z=os()(z,"rowContent"),V=Object.keys(R.attributes).filter(P=>I()(R,["metadatas",P,"edit","visible"],!1)===!0).filter(P=>Z.findIndex(re=>re.name===P)===-1).sort(),B=({target:{name:P,value:re}})=>{i({type:"ON_CHANGE",keys:P.split("."),value:re})},K=()=>{y(P=>!P)},W=()=>{v(P=>!P)},X=({target:{name:P,value:re}})=>{i({type:"ON_CHANGE_META",keys:P.split("."),value:re})},q=({name:P,value:re})=>{i({type:"ON_CHANGE_SIZE",name:P,value:re})},ee=P=>{P.preventDefault(),i({type:"SUBMIT_META_FORM"}),K()},M=P=>{P.preventDefault(),W()},L=(0,Ue.useMutation)(P=>xu(P,s,o),{onSuccess({data:P}){a&&a(P.data),i({type:"SUBMIT_SUCCEEDED"}),W(),d("didEditEditSettings")},onError(){m({type:"warning",message:{id:"notification.error"}})}}),{isLoading:Y}=L,H=()=>{const P=kn()(Me()(R),["layouts","metadatas","settings"]);J()(P,"layouts.edit",Qd(P.layouts.edit)),L.mutate(P)},$=(P,re)=>{i({type:"MOVE_RELATION",fromIndex:P,toIndex:re})},O=(P,re)=>{i({type:"MOVE_FIELD",fromIndex:P,toIndex:re})},U=(P,re,de,ye)=>{i(de===ye?{type:"REORDER_ROW",dragRowIndex:de,dragIndex:P,hoverIndex:re}:{type:"REORDER_DIFF_ROW",dragIndex:P,hoverIndex:re,dragRowIndex:de,hoverRowIndex:ye})},se=(P,re)=>{i({type:"MOVE_ROW",fromIndex:P,toIndex:re})};return t.createElement(Or,{isContentTypeView:o,attributes:x,modifiedData:R,slug:s,componentLayouts:k,selectedField:F,fieldForm:S,onMoveRelation:$,onMoveField:O,moveRow:se,moveItem:U,setEditFieldToSelect:P=>{i({type:"SET_FIELD_TO_EDIT",name:P}),K()},isDraggingSibling:c,setIsDraggingSibling:u},t.createElement(Se.o,null,t.createElement("form",{onSubmit:M},t.createElement(Be.T,{title:T({id:C("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:`Configure the view - ${yt()(D)}`},{name:yt()(D)}),subtitle:T({id:C("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),defaultMessage:"Customize how the edit view will look like."}),navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Wt.Z,null),onClick:P=>{P.preventDefault(),f()},to:"/"},T({id:"global.back",defaultMessage:"Back"})),primaryAction:t.createElement(ue.z,{disabled:gt()(E,R),startIcon:t.createElement(tt.Z,null),type:"submit"},T({id:"global.save",defaultMessage:"Save"}))}),t.createElement(Je.D,null,t.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},T({id:C("containers.SettingPage.settings"),defaultMessage:"Settings"})),t.createElement(De.r,null,t.createElement(fe.P,{col:6,s:12},t.createElement(xe.P,{label:T({id:C("containers.SettingPage.editSettings.entry.title"),defaultMessage:"Entry title"}),hint:T({id:C("containers.SettingPage.editSettings.entry.title.description"),defaultMessage:"Set the display field of your entry"}),onChange:P=>{B({target:{name:"settings.mainField",value:P===""?null:P}})},value:R.settings.mainField},j.map(P=>t.createElement(he.W,{key:P,value:P},P))))),t.createElement(A.x,{paddingTop:2,paddingBottom:2},t.createElement(Jn.i,null)),t.createElement(G.Z,{variant:"delta",as:"h3"},T({id:C("containers.SettingPage.view"),defaultMessage:"View"})),t.createElement(mu,{attributes:x,editLayout:z,fields:V,onAddField:P=>{i({type:"ON_ADD_FIELD",name:P})},onRemoveField:(P,re)=>{i({type:"REMOVE_FIELD",rowIndex:P,fieldIndex:re})}})))),t.createElement(h.QH,{bodyText:{id:C("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:t.createElement(tt.Z,null),isConfirmButtonLoading:Y,isOpen:b,onToggleDialog:W,onConfirm:H,variantRightButton:"success-light"})),p&&t.createElement(Lu,{onSubmit:ee,onToggle:K,onMetaChange:X,onSizeChange:q,type:I()(x,[F,"type"],""),customFieldUid:I()(x,[F,"customField"],"")})))};gr.defaultProps={isContentTypeView:!1,updateLayout:null},gr.propTypes={components:n().object.isRequired,isContentTypeView:n().bool,mainLayout:n().shape({attributes:n().object.isRequired,info:n().object.isRequired,layouts:n().shape({list:n().array.isRequired,edit:n().array.isRequired}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired}).isRequired,slug:n().string.isRequired,updateLayout:n().func};var fr=gr,ot=g(37617);const Pu=()=>({type:ot.ZA}),wu=(e,r)=>({type:ot.Id,pagination:e,data:r}),Fu=()=>({type:ot.MP});function Su(){return{type:ot.c2}}const Au=({components:e,contentType:r})=>{const{layouts:o}=r;return{contentType:r,components:e,displayedHeaders:o.list,type:ot.Zz}},hr=e=>({type:ot.Rp,target:e});var Ds=g(6680),yr=g(94638),ks=g(99223),Ou=g(70664);const $u=()=>e=>e["content-manager_listView"]||Ou.E,Zu=()=>(0,lt.P1)($u(),e=>e),Is=e=>{const{displayedHeaders:r}=e["content-manager_listView"];return r};var qu=Zu,Nu=g(35658),ju=g(94547),br=g(19786),Bu=g(44426),Wu=g(47765),zu=g(69033);const Vu=(0,N.ZP)(w.k)`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`,Ls=({children:e,...r})=>t.createElement(Vu,{justifyContent:"center",alignItems:"center",as:"span",...r},t.createElement(G.Z,{variant:"sigma",textColor:"neutral600"},e));Ls.propTypes={children:n().string.isRequired};var xs=Ls;const Er=({url:e,mime:r,alternativeText:o,name:s,ext:a,formats:l})=>{const i=(0,h.CR)(e);if(r.includes("image")){const d=l?.thumbnail?.url||null,m=(0,h.CR)(d)||i;return t.createElement(zu.q,{src:m,alt:o||s,preview:!0})}const c=(0,h.mD)(a),u=s.length>100?`${s.substring(0,100)}...`:s;return t.createElement(Pt.u,{description:u},t.createElement(xs,null,c))};Er.defaultProps={alternativeText:null,formats:null},Er.propTypes={alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired};var Ps=Er,Uu=g(25898);const ws=({value:e})=>t.createElement(Uu.H,null,e.map((r,o)=>{const s=`${r.id}${o}`;if(o===3){const a=`+${e.length-3}`;return t.createElement(xs,{key:s,preview:!1},a)}return o>3?null:t.createElement(Ps,{key:s,...r})}));ws.propTypes={value:n().arrayOf(n().shape({alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired})).isRequired};var Hu=ws,Fs=g(6518),Gu=g(97405),Qu=g(96315);const Ss=({type:e,value:r})=>{const{formatDate:o,formatTime:s,formatNumber:a}=(0,Q.Z)();let l=r;if(e==="date"&&(l=o((0,Qu.Z)(r),{dateStyle:"full"})),e==="datetime"&&(l=o(r,{dateStyle:"full",timeStyle:"short"})),e==="time"){const[i,c,u]=r.split(":"),d=new Date;d.setHours(i),d.setMinutes(c),d.setSeconds(u),l=s(d,{numeric:"auto",style:"short"})}return["float","decimal"].includes(e)&&(l=a(r,{maximumFractionDigits:20})),["integer","biginteger"].includes(e)&&(l=a(r,{maximumFractionDigits:0})),Wo()(l)};Ss.propTypes={type:n().string.isRequired,value:n().any.isRequired};var st=Ss;const Ku=(0,N.ZP)(G.Z)`
  max-width: 500px;
`,Yu=async(e,r,o)=>{const{data:{results:s,pagination:a}}=await o(e);return r(),{results:s,pagination:a}},As=({fieldSchema:e,metadatas:r,name:o,entityId:s,value:a,contentType:l})=>{const{formatMessage:i}=(0,Q.Z)(),{notifyStatus:c}=(0,yr.G)(),u=(0,t.useMemo)(()=>ce(`relations/${l.uid}/${s}/${o.split(".")[0]}`),[s,o,l]),[d,m]=(0,t.useState)(!1),{get:f}=(0,h.kY)(),p=t.createElement(w.k,{gap:1,wrap:"nowrap"},t.createElement(Fs.C,null,a.count),i({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:a.count})),y=()=>{const k=i({id:C("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"});c(k)},{data:b,status:v}=(0,Ue.useQuery)([e.targetModel,s],()=>Yu(u,y,f),{enabled:d,staleTime:0,select:k=>({...k,results:[...k.results].reverse()})});return t.createElement(A.x,{...h.UW},t.createElement(Pe.O,{label:p,size:"S",onOpen:()=>m(!0),onClose:()=>m(!1)},v!=="success"&&t.createElement(Pe.s,{"aria-disabled":!0},t.createElement(Gu.a,{small:!0},i({id:C("DynamicTable.relation-loading"),defaultMessage:"Relations are loading"}))),v==="success"&&t.createElement(t.Fragment,null,b?.results.map(k=>t.createElement(Pe.s,{key:k.id,"aria-disabled":!0},t.createElement(Ku,{ellipsis:!0},t.createElement(st,{type:r.mainField.schema.type,value:k[r.mainField.name]||k.id})))),b?.pagination.total>10&&t.createElement(Pe.s,{"aria-disabled":!0,"aria-label":i({id:C("DynamicTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"})},t.createElement(G.Z,null,"\u2026")))))};As.propTypes={contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({relation:n().string,targetModel:n().string,type:n().string.isRequired}).isRequired,metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,name:n().string.isRequired,entityId:n().oneOfType([n().string,n().number]).isRequired,value:n().object.isRequired};var Xu=As;const Ju=(0,N.ZP)(G.Z)`
  max-width: 500px;
`,Os=({metadatas:e,value:r})=>t.createElement(Ju,{textColor:"neutral800",ellipsis:!0},t.createElement(st,{type:e.mainField.schema.type,value:r[e.mainField.name]??r.id}));Os.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,value:n().object.isRequired};var _u=Os;const em=(0,N.ZP)(G.Z)`
  max-width: 500px;
`,$s=({value:e,metadatas:r})=>{const{formatMessage:o}=(0,Q.Z)(),{mainField:{type:s,name:a}}=r,l=t.createElement(t.Fragment,null,t.createElement(Fs.C,null,e.length)," ",o({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:e.length}));return t.createElement(A.x,{...h.UW},t.createElement(Pe.O,{label:l,size:"S"},e.map(i=>t.createElement(Pe.s,{key:i.id,"aria-disabled":!0},t.createElement(em,{ellipsis:!0},t.createElement(st,{type:s,value:i[a]||i.id}))))))};$s.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().array.isRequired};var tm=$s;const nm=(0,N.ZP)(G.Z)`
  max-width: 250px;
`,Zs=({value:e,metadatas:r})=>{const{mainField:o}=r,s=e[o.name];return t.createElement(Pt.u,{label:s},t.createElement(nm,{textColor:"neutral800",ellipsis:!0},t.createElement(st,{type:o.type,value:s})))};Zs.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().object.isRequired};var rm=Zs,om=g(80022),qs=g.n(om);function Ns(e){return["oneToOne","manyToOne","oneToOneMorph"].includes(e)}function sm(e,r,o,s){if(e==="component"){const{mainField:{name:a,type:l}}=o;if(s?.repeatable)return r.length>0;const i=r?.[a];return a==="id"&&![void 0,null].includes(i)?!0:ft(l)&&l!=="biginteger"&&a!=="id"?qs()(i):!be()(i)}return e==="relation"?Ns(s.relation)?!be()(r):r?.count>0:ft(e)&&e!=="biginteger"?qs()(r):e==="boolean"?r!==null:!be()(r)}const js=(0,N.ZP)(G.Z)`
  max-width: 300px;
`,Cr=({content:e,fieldSchema:r,metadatas:o,name:s,rowId:a,contentType:l})=>{const{type:i}=r;if(!sm(i,e,o,r))return t.createElement(G.Z,{textColor:"neutral800"},"-");switch(i){case"media":return r.multiple?t.createElement(Hu,{value:e}):t.createElement(Ps,{...e});case"relation":return Ns(r.relation)?t.createElement(_u,{metadatas:o,value:e}):t.createElement(Xu,{fieldSchema:r,metadatas:o,value:e,name:s,entityId:a,contentType:l});case"component":return r.repeatable===!0?t.createElement(tm,{value:e,metadatas:o}):t.createElement(rm,{value:e,metadatas:o});case"string":return t.createElement(Pt.u,{description:e},t.createElement(js,{ellipsis:!0,textColor:"neutral800"},t.createElement(st,{type:i,value:e})));default:return t.createElement(js,{ellipsis:!0,textColor:"neutral800"},t.createElement(st,{type:i,value:e}))}};Cr.defaultProps={content:void 0},Cr.propTypes={content:n().any,contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({component:n().string,multiple:n().bool,type:n().string.isRequired,repeatable:n().bool,relation:n().string}).isRequired,metadatas:n().object.isRequired,name:n().string.isRequired,rowId:n().oneOfType([n().string,n().number]).isRequired};var am=Cr;const vr=({canCreate:e,canDelete:r,contentType:o,headers:s,entriesToDelete:a,onClickDelete:l,onSelectRow:i,withMainAction:c,withBulkActions:u,rows:d})=>{const{push:m,location:{pathname:f}}=(0,ae.k6)(),{formatMessage:p}=(0,Q.Z)(),{trackUsage:y}=(0,h.rS)(),b=co();return t.createElement(Nu.p,null,d.map((v,k)=>{const E=a.findIndex(F=>F===v.id)!==-1,R=p({id:"content-manager.components.DynamicTable.row-line",defaultMessage:"item line {number}"},{number:k});return t.createElement(ju.Tr,{key:v.id,...(0,h.X7)({fn(){y("willEditEntryFromList"),m({pathname:`${f}/${v.id}`,state:{from:f},search:b})},condition:u})},c&&t.createElement(br.Td,{...h.UW},t.createElement(Bu.C,{"aria-label":p({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,ts.Pp)(v.firstname,v.lastname)}),checked:E,onChange:()=>{i({name:v.id,value:!E})}})),s.map(({key:F,cellFormatter:S,name:T,...D})=>t.createElement(br.Td,{key:F},typeof S=="function"?S(v,{key:F,name:T,...D}):t.createElement(am,{content:v[T.split(".")[0]],name:T,contentType:o,...D,rowId:v.id}))),u&&t.createElement(br.Td,null,t.createElement(w.k,{justifyContent:"end",...h.UW},t.createElement(ge.h,{forwardedAs:rt.rU,onClick:()=>{y("willEditEntryFromButton")},to:{pathname:`${f}/${v.id}`,state:{from:f},search:b},label:p({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:R}),noBorder:!0,icon:t.createElement(Ke.Z,null)}),e&&t.createElement(A.x,{paddingLeft:1},t.createElement(ge.h,{forwardedAs:rt.rU,to:{pathname:`${f}/create/clone/${v.id}`,state:{from:f},search:b},label:p({id:"app.component.table.duplicate",defaultMessage:"Duplicate {target}"},{target:R}),noBorder:!0,icon:t.createElement(Wu.Z,null)})),r&&t.createElement(A.x,{paddingLeft:1},t.createElement(ge.h,{onClick:()=>{y("willDeleteEntryFromList"),l(v.id)},label:p({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:R}),noBorder:!0,icon:t.createElement(we.Z,null)})))))}))};vr.defaultProps={canCreate:!1,canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},vr.propTypes={canCreate:n().bool,canDelete:n().bool,contentType:n().shape({uid:n().string.isRequired}).isRequired,entriesToDelete:n().array,headers:n().array.isRequired,onClickDelete:n().func,onSelectRow:n().func,rows:n().array,withBulkActions:n().bool,withMainAction:n().bool};var im=vr;const Bs=({area:e,...r})=>{const o=Co(e);return o?t.createElement("ul",null,o.map(s=>s.Component(r)?t.createElement(A.x,{key:s.name,padding:3,style:{textAlign:"center"}},t.createElement(s.Component,{...r})):null)):null};Bs.propTypes={area:n().string.isRequired};var Ws=Bs;const zs=({isConfirmButtonLoading:e,isOpen:r,onToggleDialog:o,onConfirm:s})=>{const{formatMessage:a}=(0,Q.Z)();return t.createElement(zt.V,{onClose:o,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:r},t.createElement(Vt.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},a({id:C("popUpWarning.bodyMessage.contentType.delete.all"),defaultMessage:"Are you sure you want to delete these entries?"}))),t.createElement(w.k,null,t.createElement(Ws,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),t.createElement(Ut.c,{startAction:t.createElement(ue.z,{onClick:o,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{onClick:s,variant:"danger-light",startIcon:t.createElement(we.Z,null),id:"confirm-delete",loading:e},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};zs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};var lm=zs;const Vs=({isConfirmButtonLoading:e,isOpen:r,onToggleDialog:o,onConfirm:s})=>{const{formatMessage:a}=(0,Q.Z)();return t.createElement(zt.V,{onClose:o,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:r},t.createElement(Vt.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},a({id:"components.popUpWarning.message",defaultMessage:"Are you sure you want to delete this?"}))),t.createElement(w.k,null,t.createElement(Ws,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),t.createElement(Ut.c,{startAction:t.createElement(ue.z,{onClick:o,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{onClick:s,variant:"danger-light",startIcon:t.createElement(we.Z,null),id:"confirm-delete",loading:e},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Vs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};var cm=Vs;const dm=(0,N.ZP)(Jt.q)`
  width: min-content;
`,Rr=({canCreate:e,canDelete:r,contentTypeName:o,action:s,isBulkable:a,isLoading:l,onConfirmDelete:i,onConfirmDeleteAll:c,layout:u,rows:d})=>{const{runHookWaterfall:m}=(0,h.j1)(),f=u.contentType.options.draftAndPublish||!1,{formatMessage:p}=(0,Q.Z)(),y=(0,le.v9)(Is),b=(0,t.useMemo)(()=>{const k=m(Ft.No,{displayedHeaders:y,layout:u}).displayedHeaders.map(E=>{const{metadatas:R}=E;if(E.fieldSchema.type==="relation"){const F=`${E.name}.${E.metadatas.mainField.name}`;return{...E,metadatas:{...R,label:p({id:C(`containers.ListPage.table-headers.${E.name}`),defaultMessage:R.label})},name:F}}return{...E,metadatas:{...R,label:p({id:C(`containers.ListPage.table-headers.${E.name}`),defaultMessage:R.label})}}});return f?[...k,{key:"__published_at_temp_key__",name:"publishedAt",fieldSchema:{type:"custom"},metadatas:{label:p({id:C("containers.ListPage.table-headers.publishedAt"),defaultMessage:"publishedAt"}),searchable:!1,sortable:!0},cellFormatter(E){const R=E.publishedAt,F=R?"success":"secondary";return t.createElement(dm,{showBullet:!1,variant:F,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${F}700`},p({id:C(`containers.List.${R?"published":"draft"}`),defaultMessage:R?"Published":"Draft"})))}}]:k},[m,y,u,f,p]);return t.createElement(h.tM,{components:{ConfirmDialogDelete:cm,ConfirmDialogDeleteAll:lm},contentType:o,action:s,isLoading:l,headers:b,onConfirmDelete:i,onConfirmDeleteAll:c,onOpenDeleteAllModalTrackedEvent:"willBulkDeleteEntries",rows:d,withBulkActions:!0,withMainAction:r&&a},t.createElement(im,{canCreate:e,canDelete:r,contentType:u.contentType,headers:b,rows:d,withBulkActions:!0,withMainAction:r&&a}))};Rr.defaultProps={action:void 0},Rr.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,contentTypeName:n().string.isRequired,action:n().node,isBulkable:n().bool.isRequired,isLoading:n().bool.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,onConfirmDelete:n().func.isRequired,onConfirmDeleteAll:n().func.isRequired,rows:n().array.isRequired};var um=Rr;const mm=["json","component","media","richtext","dynamiczone","password"],pm=["createdAt","updatedAt"];var gm=(e,r)=>{const{allPermissions:o}=(0,h.vn)(),s=(0,h.ZT)(o,[{action:"plugin::content-manager.explorer.read",subject:r}]),a=I()(s,["0","properties","fields"],[]);return Object.keys(I()(e,["attributes"]),{}).filter(c=>{const u=I()(e,["attributes",c],{});return!(!u.type||mm.includes(u.type)||!a.includes(c)&&c!=="id"&&!pm.includes(c))}).sort()},fm=g(5644);const Us=({displayedFilters:e})=>{const[r,o]=(0,t.useState)(!1),{formatMessage:s}=(0,Q.Z)(),a=(0,t.useRef)(),{trackUsage:l}=(0,h.rS)(),i=()=>{r||l("willFilterEntries"),o(c=>!c)};return t.createElement(t.Fragment,null,t.createElement(A.x,{paddingTop:1,paddingBottom:1},t.createElement(ue.z,{variant:"tertiary",ref:a,startIcon:t.createElement(fm.Z,null),onClick:i,size:"S"},s({id:"app.utils.filters",defaultMessage:"Filters"})),r&&t.createElement(h.J5,{displayedFilters:e,isVisible:r,onToggle:i,source:a})),t.createElement(h.W$,{filtersSchema:e}))};Us.propTypes={displayedFilters:n().arrayOf(n().shape({name:n().string.isRequired,metadatas:n().shape({label:n().string}),fieldSchema:n().shape({type:n().string})})).isRequired};var hm=Us;const Hs=({contentType:e,slug:r,metadatas:o})=>{const{formatMessage:s}=(0,Q.Z)(),l=gm(e,r).map(i=>{const c=e.attributes[i],{type:u,enum:d}=c,m={name:"didFilterEntries",properties:{useRelation:u==="relation"}},{mainField:f,label:p}=o[i].list;return{name:i,metadatas:{label:s({id:p,defaultMessage:p})},fieldSchema:{type:u,options:d,mainField:f},trackedEvent:m}});return t.createElement(hm,{displayedFilters:l})};Hs.propTypes={contentType:n().object.isRequired,metadatas:n().object.isRequired,slug:n().string.isRequired};var ym=Hs,bm=e=>Object.keys(e).reduce((o,s)=>{const a=e[s];return Wr(a)&&o.push(s),o},[]).sort();const Gs=({layout:e})=>{const r=(0,le.I0)(),o=(0,le.v9)(Is),{trackUsage:s}=(0,h.rS)(),{formatMessage:a}=(0,Q.Z)(),l=bm(e.contentType.attributes).map(u=>{const d=e.contentType.metadatas[u].list;return{name:u,intlLabel:{id:d.label,defaultMessage:d.label}}}),i=o.map(({name:u})=>u),c=u=>{if(s("didChangeDisplayedFields"),u.length<i.length){const d=i.filter(m=>u.indexOf(m)===-1);r(hr({name:d[0],value:!0}))}else{const d=u.filter(m=>i.indexOf(m)===-1);r(hr({name:d[0],value:!1}))}};return t.createElement(A.x,{paddingTop:1,paddingBottom:1},t.createElement(xe.P,{"aria-label":"change displayed fields",value:i,onChange:c,customizeContent:u=>a({id:C("select.currently.selected"),defaultMessage:"{count} currently selected"},{count:u.length}),multi:!0,size:"S"},l.map(u=>t.createElement(he.W,{key:u.name,value:u.name},a({id:u.intlLabel.id||u.name,defaultMessage:u.intlLabel.defaultMessage||u.name})))))};Gs.propTypes={layout:n().shape({contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired};var Em=(0,t.memo)(Gs);const Tr=({pagination:e})=>t.createElement(A.x,{paddingTop:4},t.createElement(w.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(h.v4,{trackedEvent:"willChangeNumberOfEntriesPerPage"}),t.createElement(h.tU,{pagination:e})));Tr.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Tr.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};var Cm=Tr;const vm=Qe.Z.contentManager,Rm=(0,N.ZP)(A.x)`
  svg {
    path {
      fill: ${({theme:e})=>e.colors.neutral900};
    }
  }
`;function Qs({canCreate:e,canDelete:r,canRead:o,data:s,getData:a,getDataSucceeded:l,isLoading:i,layout:c,pagination:u,slug:d}){const{total:m}=u,{contentType:{metadatas:f,settings:{bulkable:p,filterable:y,searchable:b}}}=c,v=(0,h.lm)(),{trackUsage:k}=(0,h.rS)(),{refetchPermissions:E}=(0,h.vn)(),R=(0,t.useRef)(k),F=(0,t.useRef)(E),{notifyStatus:S}=(0,yr.G)(),{formatAPIError:T}=(0,h.So)(C);(0,h.go)();const[{query:D}]=(0,h.Kx)(),x=Yo(D),j=(0,Fe.stringify)({plugins:D.plugins},{encode:!1}),{pathname:z}=(0,ae.TH)(),{push:Z}=(0,ae.k6)(),{formatMessage:V}=(0,Q.Z)(),B=c.contentType,K=I()(B,"options.draftAndPublish",!1),W=(0,h.kY)(),{post:X,del:q}=W,ee=(0,t.useRef)(""),M=(0,t.useCallback)(async(se,P)=>{a();try{const re=P?{cancelToken:P.token}:null,{data:{results:de,pagination:ye}}=await W.get(se,re);S(V({id:C("utils.data-loaded"),defaultMessage:"{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"},{number:ye.count})),l(ye,de)}catch(re){if(ve.Z.isCancel(re))return;if(I()(re,"response.status",null)===403){await F.current(),v({type:"info",message:{id:C("permissions.not-allowed.update")}}),Z("/");return}v({type:"warning",message:{id:C("error.model.fetch")}})}},[V,a,l,S,Z,v,W]),L=(0,t.useCallback)(async se=>{try{await X(ce(`collection-types/${d}/actions/bulkDelete`),{ids:se});const P=ce(`collection-types/${d}${x}`);M(P),R.current("didBulkDeleteEntries")}catch(P){v({type:"warning",message:T(P)})}},[M,x,d,v,T,X]),Y=(0,t.useCallback)(async se=>{try{await q(ce(`collection-types/${d}/${se}`));const P=ce(`collection-types/${d}${x}`);M(P),v({type:"success",message:{id:C("success.record.delete")}})}catch(P){v({type:"warning",message:T(P)})}},[d,x,M,v,T,q]);(0,t.useEffect)(()=>{const P=ve.Z.CancelToken.source(),re=o,de=ce(`collection-types/${d}${x}`);return re&&de.includes(ee.current)&&M(de,P),()=>{ee.current=d,P.cancel("Operation canceled by the user.")}},[o,a,d,x,l,M]);const H=V({id:C("header.name"),defaultMessage:"Content"}),$=V({id:B.info.displayName,defaultMessage:B.info.displayName||H}),O=o?V({id:C("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:m}):null,U=se=>e?t.createElement(ue.z,{...se,forwardedAs:rt.rU,onClick:()=>{const P=K?{status:"draft"}:{};R.current("willCreateEntry",P)},to:{pathname:`${z}/create`,search:D.plugins?j:""},startIcon:t.createElement(pt.Z,null),style:{textDecoration:"none"}},V({id:C("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})):null;return t.createElement(Se.o,{"aria-busy":i},t.createElement(Be.T,{primaryAction:U(),subtitle:O,title:$,navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Wt.Z,null),to:"/content-manager/"},V({id:"global.back",defaultMessage:"Back"}))}),!o&&t.createElement(ks.Z,{endActions:t.createElement(St,{area:"contentManager.listView.actions"})}),o&&t.createElement(ks.Z,{endActions:t.createElement(t.Fragment,null,t.createElement(St,{area:"contentManager.listView.actions"}),t.createElement(Em,{layout:c}),t.createElement(h.jW,{permissions:vm.collectionTypesConfigurations},t.createElement(Rm,{paddingTop:1,paddingBottom:1},t.createElement(ge.h,{onClick:()=>{k("willEditListLayout")},forwardedAs:rt.rU,to:{pathname:`${d}/configurations/list`,search:j},icon:t.createElement(cs.Z,null),label:V({id:"app.links.configure-view",defaultMessage:"Configure the view"})})))),startActions:t.createElement(t.Fragment,null,b&&t.createElement(h.m,{label:V({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:$}),placeholder:V({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),y&&t.createElement(ym,{contentType:B,slug:d,metadatas:f}))}),t.createElement(Je.D,null,o?t.createElement(t.Fragment,null,t.createElement(um,{canCreate:e,canDelete:r,contentTypeName:$,onConfirmDeleteAll:L,onConfirmDelete:Y,isBulkable:p,isLoading:i,layout:c,rows:s,action:U({variant:"secondary"})}),t.createElement(Cm,{pagination:{pageCount:u?.pageCount||1}})):t.createElement(h.ZF,null)))}Qs.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,canRead:n().bool.isRequired,data:n().array.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,info:n().shape({displayName:n().string.isRequired}).isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,isLoading:n().bool.isRequired,getData:n().func.isRequired,getDataSucceeded:n().func.isRequired,pagination:n().shape({total:n().number.isRequired,pageCount:n().number}).isRequired,slug:n().string.isRequired};const Tm=qu();function Mm(e){return(0,Ds.bindActionCreators)({getData:Pu,getDataSucceeded:wu,onChangeListHeaders:hr,onResetListHeaders:Fu},e)}const Dm=(0,le.$j)(Tm,Mm);var km=(0,Ds.compose)(Dm)((0,t.memo)(Qs,$e()));const Mr=e=>{const r=(0,t.useMemo)(()=>Ur(e.slug),[e.slug]),{isLoading:o,allowedActions:s}=(0,h.ss)(r,e.permissions);return o?t.createElement(h.dO,null):t.createElement(km,{...e,...s})};Mr.defaultProps={permissions:[]},Mr.propTypes={permissions:n().array,slug:n().string.isRequired};var Im=(0,t.memo)(Mr,(e,r)=>{const o=(0,h.e5)(e,r);return Object.keys(o).filter(a=>a!=="state").length>0});const Ks=({layout:e,...r})=>{const o=(0,le.I0)(),{replace:s}=(0,ae.k6)(),[{query:a,rawQuery:l}]=(0,h.Kx)(),i=mo(a,r.slug,"listView"),c=lo(r.slug);return(0,t.useEffect)(()=>{l||s(c)},[l,s,c]),(0,t.useEffect)(()=>{o(Au(e))},[o,e]),(0,t.useEffect)(()=>()=>{o(Su())},[o]),i?t.createElement(Im,{...r,layout:e,permissions:i}):null};Ks.propTypes={layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired,pluginOptions:n().object}).isRequired}).isRequired,slug:n().string.isRequired};var Lm=Ks,xm=(e,r)=>{const{put:o}=(0,h.tg)();return o(ce(`content-types/${r}/configuration`),e)};const Dr=({modifiedData:e,onChange:r,sortOptions:o})=>{const{formatMessage:s}=(0,Q.Z)(),{settings:a,metadatas:l}=e;return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},s({id:C("containers.SettingPage.settings"),defaultMessage:"Settings"})),t.createElement(w.k,{justifyContent:"space-between",gap:4},t.createElement(A.x,{width:"100%"},t.createElement(Et.s,{label:s({id:C("form.Input.search"),defaultMessage:"Enable search"}),onChange:i=>{r({target:{name:"settings.searchable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.searchable",checked:a.searchable})),t.createElement(A.x,{width:"100%"},t.createElement(Et.s,{label:s({id:C("form.Input.filters"),defaultMessage:"Enable filters"}),onChange:i=>{r({target:{name:"settings.filterable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.filterable",checked:a.filterable})),t.createElement(A.x,{width:"100%"},t.createElement(Et.s,{label:s({id:C("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"}),onChange:i=>{r({target:{name:"settings.bulkable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.bulkable",checked:a.bulkable}))),t.createElement(De.r,{gap:4},t.createElement(fe.P,{s:12,col:6},t.createElement(xe.P,{label:s({id:C("form.Input.pageEntries"),defaultMessage:"Entries per page"}),hint:s({id:C("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."}),onChange:i=>r({target:{name:"settings.pageSize",value:i}}),name:"settings.pageSize",value:e.settings.pageSize||""},[10,20,50,100].map(i=>t.createElement(he.W,{key:i,value:i},i)))),t.createElement(fe.P,{s:12,col:3},t.createElement(xe.P,{label:s({id:C("form.Input.defaultSort"),defaultMessage:"Default sort attribute"}),onChange:i=>r({target:{name:"settings.defaultSortBy",value:i}}),name:"settings.defaultSortBy",value:e.settings.defaultSortBy||""},o.map(i=>t.createElement(he.W,{key:i,value:i},l[i].list.label||i)))),t.createElement(fe.P,{s:12,col:3},t.createElement(xe.P,{label:s({id:C("form.Input.sort.order"),defaultMessage:"Default sort order"}),onChange:i=>r({target:{name:"settings.defaultSortOrder",value:i}}),name:"settings.defaultSortOrder",value:e.settings.defaultSortOrder||""},["ASC","DESC"].map(i=>t.createElement(he.W,{key:i,value:i},i))))))};Dr.defaultProps={modifiedData:{},sortOptions:[]},Dr.propTypes={modifiedData:n().object,onChange:n().func.isRequired,sortOptions:n().array};var Pm=Dr;const kr=N.ZP.button`
  display: flex;
  align-items: center;
  height: ${({theme:e})=>e.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:e})=>e.spaces[3]};
  }
`,Ys=(0,N.ZP)(kr)`
  padding: 0 ${({theme:e})=>e.spaces[3]};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,wm=(0,N.ZP)(w.k)`
  max-height: ${32/16}rem;
  cursor: pointer;

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    border-color: ${({theme:e})=>e.colors.primary200};

    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }

    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${Ys} {
      border-right: 1px solid ${({theme:e})=>e.colors.primary200};
    }
  }
`,Fm=(0,N.ZP)(A.x)`
  &:last-child {
    padding-right: ${({theme:e})=>e.spaces[3]};
  }
`,Xs=({index:e,isDraggingSibling:r,labelField:o,onClickEditField:s,onMoveField:a,onRemoveField:l,name:i,setIsDraggingSibling:c})=>{const{formatMessage:u}=(0,Q.Z)(),d=(0,t.useRef)(null),m=(0,t.useRef)(null),[,f]=(0,t.useState)(!1),p=(0,t.useRef)(),y=$r(o),b=()=>{p.current&&p.current.click()},[,v]=(0,We.useDrop)({accept:Ce.FIELD,hover(S,T){if(!m.current)return;const D=S.index,x=e;if(D===x)return;const j=m.current.getBoundingClientRect(),z=(j.right-j.left)/2,V=T.getClientOffset().x-j.left;D>x&&V>z||D<x&&V<z||(a(D,x),S.index=x)}}),[{isDragging:k},E,R]=(0,We.useDrag)({type:Ce.FIELD,item(){return{index:e,labelField:o,name:i}},collect:S=>({isDragging:S.isDragging()}),end(){c(!1)}});(0,t.useEffect)(()=>{R((0,it.rX)(),{captureDraggingState:!1})},[R]),(0,t.useEffect)(()=>{k&&c(!0)},[k,c]),(0,t.useEffect)(()=>{r||f(S=>!S)},[r]);const F={dragRef:E(d),dropRef:v(m)};return t.createElement(Fm,{ref:F?F.dropRef:null},k&&t.createElement(Xt,{transparent:!0,labelField:y}),!k&&r&&t.createElement(Xt,{isSibling:!0,labelField:y}),!k&&!r&&t.createElement(wm,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:b,isDragging:k},t.createElement(w.k,{gap:3},t.createElement(Ys,{as:"span","aria-label":u({id:C("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:o}),onClick:S=>S.stopPropagation(),ref:F.dragRef,type:"button"},t.createElement(Ae.Z,null)),t.createElement(G.Z,{fontWeight:"bold"},y)),t.createElement(w.k,{paddingLeft:3},t.createElement(kr,{ref:p,onClick:S=>{S.stopPropagation(),s(i)},"aria-label":u({id:C("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:o}),type:"button"},t.createElement(Ke.Z,null)),t.createElement(kr,{onClick:l,"data-testid":`delete-${i}`,"aria-label":u({id:C("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:o}),type:"button"},t.createElement(Mt.Z,null)))))};Xs.propTypes={index:n().number.isRequired,isDraggingSibling:n().bool.isRequired,labelField:n().string.isRequired,name:n().string.isRequired,onClickEditField:n().func.isRequired,onMoveField:n().func.isRequired,onRemoveField:n().func.isRequired,setIsDraggingSibling:n().func.isRequired};var Sm=Xs;const Js=(0,N.ZP)(A.x)`
  flex: ${({size:e})=>e};
`,Am=(0,N.ZP)(Js)`
  overflow-x: scroll;
  overflow-y: hidden;
`,Om=(0,N.ZP)(Js)`
  max-width: ${32/16}rem;
`,_s=({displayedFields:e,listRemainingFields:r,metadatas:o,onAddField:s,onClickEditField:a,onMoveField:l,onRemoveField:i})=>{const{formatMessage:c}=(0,Q.Z)(),[u,d]=(0,t.useState)(!1),[m,f]=(0,t.useState)(null),p=(0,t.useRef)();function y(...v){f("add"),s(...v)}function b(...v){f("remove"),i(...v)}return(0,t.useEffect)(()=>{m==="add"&&p?.current&&(p.current.scrollLeft=p.current.scrollWidth)},[e,m]),t.createElement(t.Fragment,null,t.createElement(A.x,{paddingBottom:4},t.createElement(G.Z,{variant:"delta",as:"h2"},c({id:C("containers.SettingPage.view"),defaultMessage:"View"}))),t.createElement(w.k,{paddingTop:4,paddingLeft:4,paddingRight:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0},t.createElement(Am,{size:"1",paddingBottom:4,ref:p},t.createElement(w.k,{gap:3},e.map((v,k)=>t.createElement(Sm,{key:v,index:k,isDraggingSibling:u,onMoveField:l,onClickEditField:a,onRemoveField:E=>b(E,k),name:v,labelField:o[v].list.label||v,setIsDraggingSibling:d})))),t.createElement(Om,{size:"auto",paddingBottom:4},t.createElement(Pe.O,{label:c({id:C("components.FieldSelect.label"),defaultMessage:"Add a field"}),as:ge.h,icon:t.createElement(pt.Z,null),disabled:r.length<=0,"data-testid":"add-field"},r.map(v=>t.createElement(Pe.s,{key:v,onClick:()=>y(v)},o[v].list.label||v))))))};_s.propTypes={displayedFields:Te.PropTypes.array.isRequired,listRemainingFields:Te.PropTypes.array.isRequired,metadatas:Te.PropTypes.objectOf(Te.PropTypes.shape({list:Te.PropTypes.shape({label:Te.PropTypes.string})})).isRequired,onAddField:Te.PropTypes.func.isRequired,onClickEditField:Te.PropTypes.func.isRequired,onMoveField:Te.PropTypes.func.isRequired,onRemoveField:Te.PropTypes.func.isRequired};var $m=_s;const Zm=(0,N.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:e})=>e.spaces[3]};
  }
`,ea=({attributes:e,fieldForm:r,fieldToEdit:o,onCloseModal:s,onChangeEditLabel:a,onSubmit:l,type:i})=>{const{formatMessage:c}=(0,Q.Z)(),u=e[o].relationType;let d=!["media","relation"].includes(i);return["oneWay","oneToOne","manyToOne"].includes(u)&&(d=!0),t.createElement(hs.P,{onClose:s,labelledBy:"title"},t.createElement("form",{onSubmit:l},t.createElement(ys.x,null,t.createElement(Zm,null,t.createElement(Rs,{type:i}),t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:C("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:yt()(o)})))),t.createElement(bs.f,null,t.createElement(De.r,{gap:4},t.createElement(fe.P,{s:12,col:6},t.createElement(Mn.o,{id:"label-input",label:c({id:C("form.Input.label"),defaultMessage:"Label"}),name:"label",onChange:m=>a(m),value:r.label,hint:c({id:C("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"})})),d&&t.createElement(fe.P,{s:12,col:6},t.createElement(Et.s,{"data-testid":"Enable sort on this field",checked:r.sortable,label:c({id:C("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",onChange:m=>a({target:{name:"sortable",value:m.target.checked}}),onLabel:c({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:c({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"})})))),t.createElement(Es.m,{startActions:t.createElement(ue.z,{onClick:s,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ue.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};ea.propTypes={attributes:n().objectOf(n().shape({relationType:n().string})).isRequired,fieldForm:n().shape({label:n().string,sortable:n().bool}).isRequired,fieldToEdit:n().string.isRequired,onChangeEditLabel:n().func.isRequired,onCloseModal:n().func.isRequired,onSubmit:n().func.isRequired,type:n().string.isRequired};var qm=ea,Nm=(e,r)=>({...e,initialData:r,modifiedData:r});const Ir={fieldForm:{},fieldToEdit:"",initialData:{},modifiedData:{}};var jm=(e=Ir,r)=>(0,wt.ZP)(e,o=>{const s=["modifiedData","layouts","list"];switch(r.type){case"ADD_FIELD":{const a=I()(e,s,[]);J()(o,s,[...a,r.item]);break}case"MOVE_FIELD":{const a=I()(e,s,[]),{originalIndex:l,atIndex:i}=r;J()(o,s,Dt(a,l,i));break}case"ON_CHANGE":{J()(o,["modifiedData",...r.keys.split(".")],r.value);break}case"ON_CHANGE_FIELD_METAS":{J()(o,["fieldForm",r.name],r.value);break}case"REMOVE_FIELD":{const a=I()(e,s,[]);J()(o,s,a.filter((l,i)=>r.index!==i));break}case"SET_FIELD_TO_EDIT":{const{fieldToEdit:a}=r;o.fieldToEdit=a,o.fieldForm.label=I()(o,["modifiedData","metadatas",a,"list","label"],""),o.fieldForm.sortable=I()(o,["modifiedData","metadatas",a,"list","sortable"],"");break}case"UNSET_FIELD_TO_EDIT":{o.fieldForm={},o.fieldToEdit="";break}case"SUBMIT_FIELD_FORM":{const a=["modifiedData","metadatas",e.fieldToEdit,"list"];J()(o,[...a,"label"],e.fieldForm.label),J()(o,[...a,"sortable"],e.fieldForm.sortable);break}default:return o}});const Bm=["media","richtext","dynamiczone","relation","component","json"],ta=({layout:e,slug:r})=>{const{formatMessage:o}=(0,Q.Z)(),{trackUsage:s}=(0,h.rS)(),a=co(),l=(0,h.lm)(),{refetchData:i}=(0,t.useContext)(yo),[c,u]=(0,t.useState)(!1),d=()=>u(M=>!M),[m,f]=(0,t.useReducer)(jm,Ir,()=>Nm(Ir,e)),{fieldToEdit:p,fieldForm:y,initialData:b,modifiedData:v}=m,k=!be()(y),{attributes:E}=e,R=v.layouts.list,F=()=>{const{settings:{pageSize:M,defaultSortBy:L,defaultSortOrder:Y},kind:H,uid:$}=b,O=`${L}:${Y}`,U=`${(0,Fe.stringify)({page:1,pageSize:M,sort:O},{encode:!1})}${a?`&${a}`:""}`;return`/content-manager/${H}/${$}?${U}`},S=({target:{name:M,value:L}})=>{f({type:"ON_CHANGE",keys:M,value:M==="settings.pageSize"?parseInt(L,10):L})},T=async()=>{const M=kn()(v,["layouts","settings","metadatas"]);B.mutate(M)},D=M=>{f({type:"ADD_FIELD",item:M})},x=(M,L)=>{M.stopPropagation(),R.length===1?l({type:"info",message:{id:C("notification.info.minimumFields")}}):f({type:"REMOVE_FIELD",index:L})},j=M=>{M.preventDefault(),d(),s("willSaveContentTypeLayout")},z=M=>{f({type:"SET_FIELD_TO_EDIT",fieldToEdit:M})},Z=()=>{f({type:"UNSET_FIELD_TO_EDIT"})},V=M=>{M.preventDefault(),f({type:"SUBMIT_FIELD_FORM"})},B=(0,Ue.useMutation)(M=>xm(M,r),{onSuccess(){s("didEditListSettings"),i()},onError(){l({type:"warning",message:{id:"notification.error"}})}}),{isLoading:K}=B,W=({target:{name:M,value:L}})=>{f({type:"ON_CHANGE_FIELD_METAS",name:M,value:L})},X=Object.entries(E).reduce((M,L)=>{const[Y,H]=L,$=Wr(H),O=R.includes(Y);return $&&!O&&M.push(Y),M},[]).sort(),q=Object.entries(E).reduce((M,L)=>{const[Y,{type:H}]=L;return Bm.includes(H)||M.push(Y),M},[]),ee=(M,L)=>{f({type:"MOVE_FIELD",originalIndex:M,atIndex:L})};return t.createElement(Fr.A,null,t.createElement(Se.o,{"aria-busy":K},t.createElement("form",{onSubmit:j},t.createElement(Be.T,{navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Wt.Z,null),to:F,id:"go-back"},o({id:"global.back",defaultMessage:"Back"})),primaryAction:t.createElement(ue.z,{size:"S",startIcon:t.createElement(tt.Z,null),disabled:gt()(v,b),type:"submit"},o({id:"global.save",defaultMessage:"Save"})),subtitle:o({id:C("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:o({id:C("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:yt()(v.info.displayName)})}),t.createElement(Je.D,null,t.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(Pm,{modifiedData:v,onChange:S,sortOptions:q}),t.createElement(A.x,{paddingTop:6,paddingBottom:6},t.createElement(Jn.i,null)),t.createElement($m,{listRemainingFields:X,displayedFields:R,onAddField:D,onClickEditField:z,onMoveField:ee,onRemoveField:x,metadatas:v.metadatas}))),t.createElement(h.QH,{bodyText:{id:C("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:t.createElement(tt.Z,null),isConfirmButtonLoading:K,isOpen:c,onToggleDialog:d,onConfirm:T,variantRightButton:"success-light"})),k&&t.createElement(qm,{attributes:E,fieldForm:y,fieldToEdit:p,onChangeEditLabel:W,onCloseModal:Z,onSubmit:V,type:I()(E,[p,"type"],"text")})))};ta.propTypes={layout:n().shape({uid:n().string.isRequired,settings:n().shape({bulkable:n().bool,defaultSortBy:n().string,defaultSortOrder:n().string,filterable:n().bool,pageSize:n().number,searchable:n().bool}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().objectOf(n().shape({type:n().string})).isRequired}).isRequired,slug:n().string.isRequired};var Wm=(0,t.memo)(ta),zm=()=>t.createElement(A.x,{padding:8},t.createElement(h.Hn,null));const na=Qe.Z.contentManager,ra=({match:{params:{slug:e},url:r}})=>{const{isLoading:o,layout:s,updateLayout:a}=so(e),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,t.useMemo)(()=>{let m={},f={};return s.contentType&&(m=Lt(s.contentType)),s.components&&(f=Object.keys(s.components).reduce((p,y)=>(p[y]=Lt(s.components[y]),p),{})),{rawContentTypeLayout:m,rawComponentsLayouts:f}},[s]);if((s?.contentType?.uid??null)!==e||o)return t.createElement(h.dO,null);const u=({location:{state:m},history:{goBack:f},match:{params:{id:p,origin:y}}},b)=>t.createElement(b,{slug:e,layout:s,state:m,goBack:f,id:p,origin:y}),d=[{path:"create/clone/:origin",comp:Ht},{path:"create",comp:Ht},{path:":id",comp:Ht},{path:"",comp:Lm}].map(({path:m,comp:f})=>t.createElement(ae.AW,{key:m,path:`${r}/${m}`,render:p=>u(p,f)}));return t.createElement(ai.ErrorBoundary,{FallbackComponent:zm},t.createElement(bo.Provider,{value:s},t.createElement(ae.rs,null,t.createElement(ae.AW,{path:`${r}/configurations/list`},t.createElement(h.O4,{permissions:na.collectionTypesConfigurations},t.createElement(Wm,{layout:l,slug:e,updateLayout:a}))),t.createElement(ae.AW,{path:`${r}/configurations/edit`},t.createElement(h.O4,{permissions:na.collectionTypesConfigurations},t.createElement(fr,{components:i,isContentTypeView:!0,mainLayout:l,slug:e,updateLayout:a}))),d)))};ra.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};var Vm=(0,t.memo)(ra),oa=g(57678);const Um=Qe.Z.contentManager,Hm=()=>{const[{isLoading:e,data:r},o]=(0,t.useReducer)(oa.Z,oa.q),s=(0,t.useMemo)(sn,[]),{schemas:a}=(0,le.v9)(c=>s(c),le.wU),{uid:l}=(0,ae.UO)(),{get:i}=(0,h.kY)();return(0,t.useEffect)(()=>{const u=ve.Z.CancelToken.source();return(async m=>{try{o(Nt());const{data:{data:f}}=await i(ce(`components/${l}/configuration`),{cancelToken:m.token});o(Un(Qr(f,a,"component")))}catch(f){if(ve.Z.isCancel(f))return;console.error(f)}})(u),()=>{u.cancel("Operation canceled by the user.")}},[l,a,i]),e?t.createElement(h.dO,null):t.createElement(h.O4,{permissions:Um.componentsConfigurations},t.createElement(fr,{components:r.components,mainLayout:r.component,slug:l}))};var Gm=(0,t.memo)(Hm),Qm=g(9695),Km=g(54725),Ym=()=>{const{formatMessage:e}=(0,Q.Z)();return(0,h.go)(),t.createElement(Se.o,null,t.createElement(Be.T,{title:e({id:C("header.name"),defaultMessage:"Content"})}),t.createElement(Je.D,null,t.createElement(Qm.x,{action:t.createElement(h.Qj,{variant:"secondary",startIcon:t.createElement(pt.Z,null),to:"/plugins/content-type-builder/content-types/create-content-type"},e({id:"app.components.HomePage.create",defaultMessage:"Create your first Content-type"})),content:e({id:"content-manager.pages.NoContentType.text",defaultMessage:"You don't have any content yet, we recommend you to create your first Content-Type."}),hasRadius:!0,icon:t.createElement(Km.Z,{width:"10rem"}),shadow:"tableShadow"})))},Xm=()=>{const{formatMessage:e}=(0,Q.Z)();return(0,h.go)(),t.createElement(Se.o,null,t.createElement(Be.T,{title:e({id:C("header.name"),defaultMessage:"Content"})}),t.createElement(Je.D,null,t.createElement(h.ZF,null)))};const Jm=Qe.Z.contentManager,sa=({match:{params:{slug:e},url:r}})=>{const{isLoading:o,layout:s,updateLayout:a}=so(e),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,t.useMemo)(()=>{let c={},u={};return s.contentType&&(u=Lt(s.contentType)),s.components&&(c=Object.keys(s.components).reduce((d,m)=>(d[m]=Lt(s.components[m]),d),{})),{rawContentTypeLayout:u,rawComponentsLayouts:c}},[s]);return o?t.createElement(h.dO,null):t.createElement(bo.Provider,{value:s},t.createElement(ae.rs,null,t.createElement(ae.AW,{path:`${r}/configurations/edit`},t.createElement(h.O4,{permissions:Jm.singleTypesConfigurations},t.createElement(fr,{components:i,isContentTypeView:!0,mainLayout:l,slug:e,updateLayout:a}))),t.createElement(ae.AW,{path:r,render:({location:{state:c},history:{goBack:u}})=>t.createElement(Ht,{layout:s,slug:e,isSingleType:!0,state:c,goBack:u})})))};sa.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};var _m=(0,t.memo)(sa),ep=g(90700),tp=g(78090),np=g(77013),rp=g(79318),op=g(66618),sp=g(9347),ap=g(39935),aa=g.n(ap),ia=(e,r)=>r?(0,sp.Z)(e,r.toLowerCase(),{keys:[o=>o.title.toLowerCase()]}):e.sort((o,s)=>{const a=aa()(o.title),l=aa()(s.title);return a<l?-1:a>l?1:0}),ip=()=>{const[e,r]=(0,t.useState)(""),{formatMessage:o}=(0,Q.Z)(),s=(0,t.useMemo)(Ha,[]),{collectionTypeLinks:a,singleTypeLinks:l}=(0,le.v9)(y=>s(y),le.wU),i=y=>y.map(b=>({...b,title:o({id:b.title,defaultMessage:b.title})})),c=i(a),u=i(l),d=[{id:"collectionTypes",title:{id:C("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"},searchable:!0,links:ia(c,e)},{id:"singleTypes",title:{id:C("components.LeftMenu.single-types"),defaultMessage:"Single Types"},searchable:!0,links:ia(u,e)}],m=()=>{r("")},f=({target:{value:y}})=>{r(y)},p=o({id:C("header.name"),defaultMessage:"Content"});return t.createElement(ep.m,{ariaLabel:p},t.createElement(tp.p,{label:p,searchable:!0,value:e,onChange:f,onClear:m,searchLabel:o({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),t.createElement(np.Z,null,d.map(y=>{const b=o({id:y.title.id,defaultMessage:y.title.defaultMessage},y.title.values);return t.createElement(rp.D,{key:y.id,label:b,badgeLabel:y.links.length.toString()},y.links.map(v=>{const k=v.search?`?${v.search}`:"";return t.createElement(op.E,{as:rt.OL,key:v.uid,to:`${v.to}${k}`},v.title)}))})))},Lr=g(92886);const lp=()=>({type:Lr.ZA}),cp=()=>({type:Lr.c2}),dp=(e,r,o,s)=>({type:Lr.ix,data:{authorizedCtLinks:e,authorizedStLinks:r,components:s,contentTypeSchemas:o}}),la=(e,r,o=[])=>e.filter(s=>s.isDisplayed).map(s=>{const a=[{action:"plugin::content-manager.explorer.create",subject:s.uid},{action:"plugin::content-manager.explorer.read",subject:s.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:s.uid}],i=r==="collectionTypes"?a:l,c=o.find(({uid:d})=>d===s.uid);let u=null;if(c){const d={page:1,pageSize:c.settings.pageSize,sort:`${c.settings.defaultSortBy}:${c.settings.defaultSortOrder}`};u=(0,Fe.stringify)(d,{encode:!1})}return{permissions:i,search:u,kind:s.kind,title:s.info.displayName,to:`/content-manager/${s.kind}/${s.uid}`,uid:s.uid,name:s.uid,isDisplayed:s.isDisplayed}});var up=(e,r)=>{const o=Object.entries(Vo()(e,"kind")).map(([l,i])=>({name:l,links:i})),[s,a]=Sr()(o,"name");return{collectionTypesSectionLinks:la(s?.links||[],"collectionTypes",r),singleTypesSectionLinks:la(a?.links??[],"singleTypes")}},ca=(e,r)=>r.map(({permissions:o})=>(0,h.qX)(e,o)),mp=async(e,r,o)=>{const{get:s}=(0,h.tg)();try{const{data:{data:a}}=await s(ce("content-types-settings")),{collectionTypesSectionLinks:l,singleTypesSectionLinks:i}=up(e,a),c=ca(r,l),u=await Promise.all(c),d=l.filter((y,b)=>u[b]),m=ca(r,i),f=await Promise.all(m),p=i.filter((y,b)=>f[b]);return{authorizedCtLinks:d,authorizedStLinks:p}}catch(a){return console.error(a),o({type:"warning",message:{id:"notification.error"}}),{authorizedCtLinks:[],authorizedStLinks:[],contentTypes:[]}}},pp=()=>{const e=(0,le.I0)(),r=(0,h.lm)(),o=(0,le.v9)(ct()),s=(0,t.useRef)(),{allPermissions:a}=(0,h.vn)(),{runHookWaterfall:l}=(0,h.j1)(),c=ve.Z.CancelToken.source(),{notifyStatus:u}=(0,yr.G)(),{formatMessage:d}=(0,Q.Z)(),{get:m}=(0,h.kY)(),f=async()=>{e(lp());try{const[{data:{data:p}},{data:{data:y}}]=await Promise.all(["components","content-types"].map(F=>m(ce(F),{cancelToken:c.token})));u(d({id:C("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}));const{authorizedCtLinks:b,authorizedStLinks:v}=await mp(y,a,r),{ctLinks:k}=l(Ft.LK,{ctLinks:b,models:y}),{stLinks:E}=l(Ft.dV,{stLinks:v,models:y}),R=dp(k,E,y,p);e(R)}catch(p){if(ve.Z.isCancel(p))return;console.error(p),r({type:"warning",message:{id:"notification.error"}})}};return s.current=f,(0,t.useEffect)(()=>(s.current(),()=>{c.cancel("Operation canceled by the user."),e(cp())}),[e,r]),{...o,refetchData:s.current}};const gp=Qe.Z.contentManager,da=()=>{const e=(0,ae.$B)("/content-manager/:kind/:uid"),{status:r,collectionTypeLinks:o,singleTypeLinks:s,models:a,refetchData:l}=pp(),i=Sr()([...o,...s],p=>p.title.toLowerCase()),{pathname:c}=(0,ae.TH)(),{formatMessage:u}=(0,Q.Z)(),{startSection:d}=(0,h.c1)(),m=(0,t.useRef)(d);if((0,t.useEffect)(()=>{m.current&&m.current("contentManager")},[]),r==="loading")return t.createElement(Se.o,{"aria-busy":"true"},t.createElement(Be.T,{title:u({id:C("header.name"),defaultMessage:"Content"})}),t.createElement(h.dO,null));const f=a.filter(({isDisplayed:p})=>p);return i.length===0&&f.length>0&&c!=="/content-manager/403"?t.createElement(ae.l_,{to:"/content-manager/403"}):f.length===0&&c!=="/content-manager/no-content-types"?t.createElement(ae.l_,{to:"/content-manager/no-content-types"}):!e&&i.length>0?t.createElement(ae.l_,{to:`${i[0].to}${i[0].search?`?${i[0].search}`:""}`}):t.createElement(Fr.A,{sideNav:t.createElement(ip,null)},t.createElement(si,null),t.createElement(yo.Provider,{value:{refetchData:l}},t.createElement(ae.rs,null,t.createElement(ae.AW,{path:"/content-manager/components/:uid/configurations/edit"},t.createElement(h.O4,{permissions:gp.componentsConfigurations},t.createElement(Gm,null))),t.createElement(ae.AW,{path:"/content-manager/collectionType/:slug",component:Vm}),t.createElement(ae.AW,{path:"/content-manager/singleType/:slug",component:_m}),t.createElement(ae.AW,{path:"/content-manager/403"},t.createElement(Xm,null)),t.createElement(ae.AW,{path:"/content-manager/no-content-types"},t.createElement(Ym,null)),t.createElement(ae.AW,{path:"",component:h.NotFound}))))};function fp(){const{formatMessage:e}=(0,Q.Z)();return t.createElement(t.Fragment,null,t.createElement(ua.q,{title:e({id:C("plugin.name"),defaultMessage:"Content Manager"})}),t.createElement(da,null))}},57544:function(){},59599:function(){},42310:function(){},33842:function(){},85695:function(){}}]);
