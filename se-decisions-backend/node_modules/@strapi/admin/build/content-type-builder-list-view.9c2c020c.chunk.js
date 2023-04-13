"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[5905],{69073:function(H,R,n){n.r(R),n.d(R,{default:function(){return it}});var e=n(32735),a=n(43383),C=n(19406),p=n(66456),A=n(68625),X=n(29439),G=n(82055),T=n(87933),P=n(41415),z=n(17e3),s=n(72850),J=n(33795),f=n.n(J),m=n(23973),x=n.n(m),h=n(89793),u=n.n(h),$=n(23940),F=n.n($),B=n(67879),Q=n(53038),oe=n(60216),o=n.n(oe),ge=n(56755),fe=n(33827),ye=n(94547),_=n(19786),D=n(49372),Pe=n(73269),he=n(32237),K=n(198),M=n(8471),Z=n(92318),we=n(35331);const Be=(0,M.ZP)(T.k)`
  border-radius: 50%;
  color: ${({theme:t,isActive:r})=>r?t.colors.primary600:t.colors.neutral600};
  height: ${({theme:t})=>t.spaces[8]};
  width: ${({theme:t})=>t.spaces[8]};

  svg {
    height: ${({theme:t})=>t.spaces[5]};
    width: ${({theme:t})=>t.spaces[5]};
  }
`;function ae({isActive:t}){return e.createElement(Be,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",isActive:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}ae.defaultProps={isActive:!1},ae.propTypes={isActive:o().bool};const Ee=(0,M.ZP)(s.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,a.Q1)(8)};

  svg {
    width: ${(0,a.Q1)(10)};
    height: ${(0,a.Q1)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,ke=(0,M.ZP)(T.k)`
  width: ${(0,a.Q1)(140)};
  height: ${(0,a.Q1)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${Ee} {
      display: block;
    }

    ${D.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function re({component:t,dzName:r,index:l,isActive:c,isInDevelopmentMode:g,onClick:i}){const{modifiedData:E,removeComponentFromDynamicZone:k}=(0,K.Z)(),{schema:{displayName:w}}=f()(E,["components",t],{schema:{}}),L=v=>{v.stopPropagation(),k(r,l)};return e.createElement(ke,{as:"button",alignItems:"center",direction:"column",className:c?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:i},e.createElement(ae,{isActive:c}),e.createElement(s.x,{marginTop:1,maxWidth:"100%"},e.createElement(D.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},w)),g&&e.createElement(Ee,{as:"button",onClick:L,type:"button"},e.createElement(we.Z,null)))}re.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},re.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};var Ie=re,ve=M.ZP.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,a.Q1)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,a.Q1)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:r,theme:l})=>r?`background-color: ${l.colors.primary200};`:t?`background-color: ${l.colors.primary200};`:`background: ${l.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function le({customRowComponent:t,component:r,isFromDynamicZone:l,isNestedInDZComponent:c,firstLoopComponentUid:g}){const{modifiedData:i}=(0,K.Z)(),{schema:{attributes:E}}=f()(i,["components",r],{schema:{attributes:[]}});return e.createElement(ve,{isChildOfDynamicZone:l,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(Te,{customRowComponent:t,items:E,targetUid:r,firstLoopComponentUid:g||r,editTarget:"components",isFromDynamicZone:l,isNestedInDZComponent:c,isSub:!0,secondLoopComponentUid:g?r:null})))}le.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},le.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};var be=le;const Oe=(0,M.ZP)(C.Z)`
  width: ${(0,a.Q1)(32)};
  height: ${(0,a.Q1)(32)};
  padding: ${(0,a.Q1)(9)};
  border-radius: ${(0,a.Q1)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Fe=(0,M.ZP)(s.x)`
  height: ${(0,a.Q1)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,We=(0,M.ZP)(T.k)`
  width: 100%;
  overflow-x: auto;
`,Ue=(0,M.ZP)(s.x)`
  padding-top: ${(0,a.Q1)(90)};
`,Se=(0,M.ZP)(T.k)`
  flex-shrink: 0;
  width: ${(0,a.Q1)(140)};
  height: ${(0,a.Q1)(80)};
  justify-content: center;
  align-items: center;
`;function ie({customRowComponent:t,components:r,addComponent:l,name:c,targetUid:g}){const{isInDevelopmentMode:i}=(0,K.Z)(),[E,k]=(0,e.useState)(0),{formatMessage:w}=(0,B.Z)(),L=d=>{E!==d&&k(d)},v=()=>{l(c)};return e.createElement(ve,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Fe,{paddingLeft:8},e.createElement(We,{gap:2},i&&e.createElement("button",{type:"button",onClick:v},e.createElement(Se,{direction:"column",alignItems:"stretch",gap:1},e.createElement(Oe,null),e.createElement(D.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},w({id:(0,Z.Z)("button.component.add"),formatMessage:"Add a component"})))),r.map((d,y)=>e.createElement(Ie,{key:d,dzName:c,index:y,component:d,isActive:E===y,isInDevelopmentMode:i,onClick:()=>L(y)})))),e.createElement(Ue,null,r.map((d,y)=>{const b={customRowComponent:t,component:d};return e.createElement(s.x,{tabId:`${y}`,key:d,style:{display:E===y?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(be,{...b,isFromDynamicZone:!0,targetUid:g,key:d}))))}))))}ie.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},ie.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};var je=ie,Ne=(0,M.ZP)(s.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`;const Ve=(0,M.ZP)(s.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:r})=>t.colors[`${r}600`]};
  }
`,ze=(0,M.ZP)(s.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Ce=({children:t,icon:r,color:l,...c})=>e.createElement(ze,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...c},e.createElement(T.k,null,e.createElement(Ve,{color:l,"aria-hidden":!0,background:`${l}200`},r),e.createElement(s.x,{paddingLeft:3},e.createElement(D.Z,{variant:"pi",fontWeight:"bold",textColor:`${l}600`},t))));Ce.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};var Qe=Ce;function se({addComponentToDZ:t,customRowComponent:r,editTarget:l,firstLoopComponentUid:c,isFromDynamicZone:g,isMain:i,isNestedInDZComponent:E,isSub:k,items:w,secondLoopComponentUid:L,targetUid:v}){const{formatMessage:d}=(0,B.Z)(),{trackUsage:y}=(0,a.rS)(),{isInDevelopmentMode:b,modifiedData:N,isInContentTypeView:W}=(0,K.Z)(),{onOpenModalAddField:S}=(0,he.Z)(),I=()=>{y("hasClickedCTBAddFieldBanner"),S({forTarget:l,targetUid:v})};return v?w.length===0&&i?e.createElement(ge.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(ye.Tr,null,e.createElement(_.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement(a.c4,{action:e.createElement(P.z,{onClick:I,size:"L",startIcon:e.createElement(C.Z,null),variant:"secondary"},d({id:(0,Z.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:W?{id:(0,Z.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,Z.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(Ne,null,e.createElement(s.x,{paddingLeft:6,paddingRight:i?6:0,...i&&{style:{overflowX:"auto"}}},e.createElement("table",null,i&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,w.map(U=>{const{type:V}=U,Y=r;return e.createElement(e.Fragment,{key:U.name},e.createElement(Y,{...U,isNestedInDZComponent:E,targetUid:v,editTarget:l,firstLoopComponentUid:c,isFromDynamicZone:g,secondLoopComponentUid:L}),V==="component"&&e.createElement(be,{...U,customRowComponent:r,targetUid:v,isNestedInDZComponent:g,editTarget:l,firstLoopComponentUid:c}),V==="dynamiczone"&&e.createElement(je,{...U,customRowComponent:r,addComponent:t,targetUid:v}))})))),i&&b&&e.createElement(Pe.c,{icon:e.createElement(C.Z,null),onClick:I},d({id:(0,Z.Z)(`form.button.add.field.to.${N.contentType?N.contentType.schema.kind:l||"collectionType"}`),defaultMessage:"Add another field"})),k&&b&&e.createElement(Qe,{icon:e.createElement(C.Z,null),onClick:I,color:g?"primary":"neutral"},d({id:(0,Z.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(ge.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(ye.Tr,null,e.createElement(_.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement(a.c4,{colSpan:2,content:{id:(0,Z.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}se.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},se.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};var Te=se,xe=n(50563),Ke=n(4038),Ze=n(74512);const He=t=>(0,Ze.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,Ze.jsx)("path",{d:"M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z",fill:"#8E8EA9"})}),Xe=He,Ge=(0,M.ZP)(s.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:r})=>t.colors[r]};
    display: block;
  }
`,Je=M.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:r})=>t.colors[r]};
  }
`,Me=t=>e.createElement(Ge,null,e.createElement(Je,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Me.propTypes={color:o().string.isRequired};var Ye=Me;const ce=({content:t})=>F()(t);ce.defaultProps={content:null},ce.propTypes={content:o().string};var qe=ce,_e=(0,M.ZP)(s.x)`
  position: relative;
`,et=n(25747);const de=({type:t,customField:r,repeatable:l})=>{const{formatMessage:c}=(0,B.Z)();let g=t;return["integer","biginteger","float","decimal"].includes(t)?g="number":["string"].includes(t)&&(g="text"),r?e.createElement(D.Z,null,c({id:(0,Z.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(D.Z,null,c({id:(0,Z.Z)(`attribute.${g}`),defaultMessage:t}),"\xA0",l&&c({id:(0,Z.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};de.defaultProps={customField:null,repeatable:!1},de.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};var tt=de;function me({configurable:t,customField:r,editTarget:l,firstLoopComponentUid:c,isFromDynamicZone:g,name:i,onClick:E,relation:k,repeatable:w,secondLoopComponentUid:L,target:v,targetUid:d,type:y}){const{contentTypes:b,isInDevelopmentMode:N,removeAttribute:W}=(0,K.Z)(),{formatMessage:S}=(0,B.Z)(),I=y==="relation"&&k.includes("morph"),U=["integer","biginteger","float","decimal"].includes(y)?"number":y,V=f()(b,[v],{}),Y=f()(V,["schema","displayName"],""),q=f()(V,"plugin"),ue=v?"relation":U,ee=()=>{I||t!==!1&&E(l,L||c||d,i,y,r)};let j;return L&&c?j=2:c?j=1:j=0,e.createElement(_e,{as:"tr",...(0,a.X7)({fn:ee,condition:N&&t&&!I})},e.createElement("td",{style:{position:"relative"}},j!==0&&e.createElement(Ye,{color:g?"primary200":"neutral150"}),e.createElement(T.k,{paddingLeft:2,gap:4},e.createElement(et.Z,{type:ue,customField:r}),e.createElement(D.Z,{fontWeight:"bold"},i))),e.createElement("td",null,v?e.createElement(D.Z,null,S({id:(0,Z.Z)(`modelPage.attribute.${I?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(qe,{content:Y}),"\xA0",q&&`(${S({id:(0,Z.Z)("from"),defaultMessage:"from"})}: ${q})`)):e.createElement(tt,{type:y,customField:r,repeatable:w})),e.createElement("td",null,N?e.createElement(T.k,{justifyContent:"flex-end",...a.UW},t?e.createElement(T.k,{gap:1},!I&&e.createElement(xe.h,{onClick:ee,label:`${S({id:"app.utils.edit",defaultMessage:"Edit"})} ${i}`,noBorder:!0,icon:e.createElement(A.Z,null)}),e.createElement(xe.h,{onClick:te=>{te.stopPropagation(),W(l,i,L||c||"")},label:`${S({id:"global.delete",defaultMessage:"Delete"})} ${i}`,noBorder:!0,icon:e.createElement(Ke.Z,null)})):e.createElement(Xe,null)):e.createElement(s.x,{height:(0,a.Q1)(32)})))}me.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},me.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};var nt=(0,e.memo)(me),ot=t=>{let r;switch(t){case"date":case"datetime":case"time":case"timestamp":r="date";break;case"integer":case"biginteger":case"decimal":case"float":r="number";break;case"string":case"text":r="text";break;case"":r="relation";break;default:r=t}return r},at=n(2669);const rt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},pe=({disabled:t,isTemporary:r,isInContentTypeView:l,contentTypeKind:c,targetUid:g})=>{const{formatMessage:i}=(0,B.Z)(),{push:E}=(0,Q.k6)(),{collectionTypesConfigurations:k,componentsConfigurations:w,singleTypesConfigurations:L}=rt,v=i({id:"content-type-builder.form.button.configure-view"});let d=k;const y=()=>(r||E(l?`/content-manager/collectionType/${g}/configurations/edit`:`/content-manager/components/${g}/configurations/edit`),!1);return l&&c==="singleType"&&(d=L),l||(d=w),e.createElement(a.jW,{permissions:d},e.createElement(P.z,{startIcon:e.createElement(at.Z,null),variant:"tertiary",onClick:y,disabled:r||t},v))};pe.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},pe.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};var lt=(0,e.memo)(pe),it=()=>{const{initialData:t,modifiedData:r,isInDevelopmentMode:l,isInContentTypeView:c,submitData:g}=(0,K.Z)(),{formatMessage:i}=(0,B.Z)(),{trackUsage:E}=(0,a.rS)(),k=(0,Q.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:w,onOpenModalAddField:L,onOpenModalEditField:v,onOpenModalEditSchema:d,onOpenModalEditCustomField:y}=(0,he.Z)(),b=c?"contentType":"component",N=[b,"schema","attributes"],W=f()(r,[b,"uid"]),S=f()(r,[b,"isTemporary"],!1),I=f()(r,[b,"schema","kind"],null),U=f()(r,N,[]),V=x()(t,[b,"plugin"]),Y=!u()(r,t),q=c?"contentType":"component",ue=O=>{w({dynamicZoneTarget:O,targetUid:W})},ee=async(O,$e,De,Le,Re)=>{const Ae=ot(Le);Re?y({forTarget:O,targetUid:$e,attributeName:De,attributeType:Ae,customFieldUid:Re}):v({forTarget:O,targetUid:$e,attributeName:De,attributeType:Ae,step:Le==="component"?"2":null})};let j=f()(r,[b,"schema","displayName"],"");const te=f()(r,[b,"schema","kind"],""),ne=k?.params.currentUID==="create-content-type";!j&&ne&&(j=i({id:(0,Z.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const st=()=>{const O=te||b;O==="collectionType"&&E("willEditNameOfContentType"),O==="singleType"&&E("willEditNameOfSingleType"),d({modalType:b,forTarget:b,targetUid:W,kind:O})};return e.createElement(e.Fragment,null,e.createElement(Q.NL,{message:i({id:(0,Z.Z)("prompt.unsaved")}),when:Y}),e.createElement(G.T,{id:"title",primaryAction:l&&e.createElement(T.k,{gap:2},!ne&&e.createElement(P.z,{startIcon:e.createElement(C.Z,null),variant:"secondary",onClick:()=>{L({forTarget:q,targetUid:W})}},i({id:(0,Z.Z)("button.attributes.add.another")})),e.createElement(P.z,{startIcon:e.createElement(p.Z,null),onClick:()=>g(),type:"submit",disabled:u()(r,t)},i({id:"global.save",defaultMessage:"Save"}))),secondaryAction:l&&!V&&!ne&&e.createElement(P.z,{startIcon:e.createElement(A.Z,null),variant:"tertiary",onClick:st},i({id:"app.utils.edit",defaultMessage:"Edit"})),title:F()(j),subtitle:i({id:(0,Z.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(a.rU,{startIcon:e.createElement(X.Z,null),to:"/plugins/content-type-builder/"},i({id:"global.back",defaultMessage:"Back"}))}),e.createElement(z.D,null,e.createElement(T.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(T.k,{justifyContent:"flex-end"},e.createElement(T.k,{gap:2},e.createElement(lt,{key:"link-to-cm-settings-view",targetUid:W,isTemporary:S,isInContentTypeView:c,contentTypeKind:I,disabled:ne}))),e.createElement(s.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(Te,{items:U,customRowComponent:O=>e.createElement(nt,{...O,onClick:ee}),addComponentToDZ:ue,targetUid:W,editTarget:q,isMain:!0})))))}},17e3:function(H,R,n){n.d(R,{D:function(){return p}});var e=n(32735),a=n(60216),C=n(72850);const p=({children:A})=>e.createElement(C.x,{paddingLeft:10,paddingRight:10},A);p.propTypes={children:a.node.isRequired}},82055:function(H,R,n){n.d(R,{T:function(){return s}});var e=n(32735),a=n(60216),C=n(8471),p=n(72850),A=n(87933);const X=m=>{const x=(0,e.useRef)(null),[h,u]=(0,e.useState)(!0),$=([F])=>{u(F.isIntersecting)};return(0,e.useEffect)(()=>{const F=x.current,B=new IntersectionObserver($,m);return F&&B.observe(x.current),()=>{F&&B.disconnect()}},[x,m]),[x,h]};var G=n(63060);const T=(m,x)=>{const h=(0,G.W)(x);(0,e.useLayoutEffect)(()=>{const u=new ResizeObserver(h);return Array.isArray(m)?m.forEach($=>{$.current&&u.observe($.current)}):m.current&&u.observe(m.current),()=>{u.disconnect()}},[m,h])};var P=n(49372);const z=()=>{const m=(0,e.useRef)(null),[x,h]=(0,e.useState)(null),[u,$]=X({root:null,rootMargin:"0px",threshold:0});return T(u,()=>{u.current&&h(u.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{m.current&&h(m.current.getBoundingClientRect())},[m]),{containerRef:u,isVisible:$,baseHeaderLayoutRef:m,headerSize:x}},s=m=>{const{containerRef:x,isVisible:h,baseHeaderLayoutRef:u,headerSize:$}=z();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:$?.height},ref:x},h&&e.createElement(f,{ref:u,...m})),!h&&e.createElement(f,{...m,sticky:!0,width:$?.width}))};s.displayName="HeaderLayout";const J=(0,C.ZP)(p.x)`
  width: ${m=>m.width}px;
`,f=e.forwardRef(({navigationAction:m,primaryAction:x,secondaryAction:h,subtitle:u,title:$,sticky:F,width:B,...Q},oe)=>{const o=typeof u=="string";return F?e.createElement(J,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:B,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(A.k,{justifyContent:"space-between"},e.createElement(A.k,null,m&&e.createElement(p.x,{paddingRight:3},m),e.createElement(p.x,null,e.createElement(P.Z,{variant:"beta",as:"h1",...Q},$),o?e.createElement(P.Z,{variant:"pi",textColor:"neutral600"},u):u),h?e.createElement(p.x,{paddingLeft:4},h):null),e.createElement(A.k,null,x?e.createElement(p.x,{paddingLeft:2},x):void 0))):e.createElement(p.x,{ref:oe,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0},m?e.createElement(p.x,{paddingBottom:2},m):null,e.createElement(A.k,{justifyContent:"space-between"},e.createElement(A.k,{minWidth:0},e.createElement(P.Z,{as:"h1",variant:"alpha",...Q},$),h?e.createElement(p.x,{paddingLeft:4},h):null),x),o?e.createElement(P.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},u):u)});f.displayName="BaseHeaderLayout",f.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},f.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},s.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},s.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},73269:function(H,R,n){n.d(R,{c:function(){return z}});var e=n(32735),a=n(60216),C=n(8471),p=n(72850),A=n(9026),X=n(87933),G=n(49372);const T=(0,C.ZP)(p.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:s})=>s.colors.primary600};
  }
`,P=(0,C.ZP)(p.x)`
  border-radius: 0 0 ${({theme:s})=>s.borderRadius} ${({theme:s})=>s.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,z=({children:s,icon:J,...f})=>e.createElement("div",null,e.createElement(A.i,null),e.createElement(P,{as:"button",background:"primary100",padding:5,...f},e.createElement(X.k,null,e.createElement(T,{"aria-hidden":!0,background:"primary200"},J),e.createElement(p.x,{paddingLeft:3},e.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},s)))));z.propTypes={children:a.string.isRequired,icon:a.node.isRequired}},29439:function(H,R,n){n.d(R,{Z:function(){return C}});var e=n(74512);const a=p=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),C=a},2669:function(H,R,n){n.d(R,{Z:function(){return C}});var e=n(74512);const a=p=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:(0,e.jsx)("path",{d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 0 1-.2.2H5a.2.2 0 0 1-.2-.2V.2ZM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V9.8ZM5 19.2a.2.2 0 0 0-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 0 0 .2-.2v-4.4a.2.2 0 0 0-.2-.2H5Z",fill:"#212134"})}),C=a}}]);
