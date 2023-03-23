"use strict";(self.webpackChunkse_decisions_backend=self.webpackChunkse_decisions_backend||[]).push([[5905],{57134:(Oe,J,d)=>{d.r(J),d.d(J,{default:()=>We});var e=d(67294),c=d(95489),b=d(41363),n=d(28702),de=d(27361),C=d.n(de),pe=d(18721),me=d.n(pe),ue=d(18446),Q=d.n(ue),ge=d(11700),Y=d.n(ge),D=d(97132),S=d(49656),fe=d(45697),o=d.n(fe),q=d(26478),F=d(13588),h=d(27821),y=d(5002);const ye=(0,h.default)(n.Flex)`
  border-radius: 50%;
  color: ${({theme:t,isActive:l})=>l?t.colors.primary600:t.colors.neutral600};
  height: ${({theme:t})=>t.spaces[8]};
  width: ${({theme:t})=>t.spaces[8]};

  svg {
    height: ${({theme:t})=>t.spaces[5]};
    width: ${({theme:t})=>t.spaces[5]};
  }
`;function U({isActive:t}){return e.createElement(ye,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",isActive:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}U.defaultProps={isActive:!1},U.propTypes={isActive:o().bool};const _=(0,h.default)(n.Box)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,c.pxToRem)(8)};

  svg {
    width: ${(0,c.pxToRem)(10)};
    height: ${(0,c.pxToRem)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,he=(0,h.default)(n.Flex)`
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
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

    ${_} {
      display: block;
    }

    ${n.Typography} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function W({component:t,dzName:l,index:a,isActive:s,isInDevelopmentMode:p,onClick:r}){const{modifiedData:u,removeComponentFromDynamicZone:x}=(0,F.Z)(),{schema:{displayName:T}}=C()(u,["components",t],{schema:{}}),E=g=>{g.stopPropagation(),x(l,a)};return e.createElement(he,{as:"button",alignItems:"center",direction:"column",className:s?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:r},e.createElement(U,{isActive:s}),e.createElement(n.Box,{marginTop:1,maxWidth:"100%"},e.createElement(n.Typography,{variant:"pi",fontWeight:"bold",ellipsis:!0},T)),p&&e.createElement(_,{as:"button",onClick:E,type:"button"},e.createElement(b.Cross,null)))}W.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},W.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const be=W,ee=h.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,c.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,c.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:l,theme:a})=>l?`background-color: ${a.colors.primary200};`:t?`background-color: ${a.colors.primary200};`:`background: ${a.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function V({customRowComponent:t,component:l,isFromDynamicZone:a,isNestedInDZComponent:s,firstLoopComponentUid:p}){const{modifiedData:r}=(0,F.Z)(),{schema:{attributes:u}}=C()(r,["components",l],{schema:{attributes:[]}});return e.createElement(ee,{isChildOfDynamicZone:a,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(oe,{customRowComponent:t,items:u,targetUid:l,firstLoopComponentUid:p||l,editTarget:"components",isFromDynamicZone:a,isNestedInDZComponent:s,isSub:!0,secondLoopComponentUid:p?l:null})))}V.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},V.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const te=V,Ee=(0,h.default)(b.Plus)`
  width: ${(0,c.pxToRem)(32)};
  height: ${(0,c.pxToRem)(32)};
  padding: ${(0,c.pxToRem)(9)};
  border-radius: ${(0,c.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Te=(0,h.default)(n.Box)`
  height: ${(0,c.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Ce=(0,h.default)(n.Flex)`
  width: 100%;
  overflow-x: auto;
`,xe=(0,h.default)(n.Box)`
  padding-top: ${(0,c.pxToRem)(90)};
`,ve=(0,h.default)(n.Flex)`
  flex-shrink: 0;
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function O({customRowComponent:t,components:l,addComponent:a,name:s,targetUid:p}){const{isInDevelopmentMode:r}=(0,F.Z)(),[u,x]=(0,e.useState)(0),{formatMessage:T}=(0,D.useIntl)(),E=i=>{u!==i&&x(i)},g=()=>{a(s)};return e.createElement(ee,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Te,{paddingLeft:8},e.createElement(Ce,{gap:2},r&&e.createElement("button",{type:"button",onClick:g},e.createElement(ve,{direction:"column",alignItems:"stretch",gap:1},e.createElement(Ee,null),e.createElement(n.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600"},T({id:(0,y.Z)("button.component.add"),formatMessage:"Add a component"})))),l.map((i,m)=>e.createElement(be,{key:i,dzName:s,index:m,component:i,isActive:u===m,isInDevelopmentMode:r,onClick:()=>E(m)})))),e.createElement(xe,null,l.map((i,m)=>{const f={customRowComponent:t,component:i};return e.createElement(n.Box,{tabId:`${m}`,key:i,style:{display:u===m?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(te,{...f,isFromDynamicZone:!0,targetUid:p,key:i}))))}))))}O.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},O.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const $e=O,ke=(0,h.default)(n.Box)`
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
`,Me=(0,h.default)(n.Box)`
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
    fill: ${({theme:t,color:l})=>t.colors[`${l}600`]};
  }
`,we=(0,h.default)(n.Box)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,ne=({children:t,icon:l,color:a,...s})=>e.createElement(we,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...s},e.createElement(n.Flex,null,e.createElement(Me,{color:a,"aria-hidden":!0,background:`${a}200`},l),e.createElement(n.Box,{paddingLeft:3},e.createElement(n.Typography,{variant:"pi",fontWeight:"bold",textColor:`${a}600`},t))));ne.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const Re=ne;function z({addComponentToDZ:t,customRowComponent:l,editTarget:a,firstLoopComponentUid:s,isFromDynamicZone:p,isMain:r,isNestedInDZComponent:u,isSub:x,items:T,secondLoopComponentUid:E,targetUid:g}){const{formatMessage:i}=(0,D.useIntl)(),{trackUsage:m}=(0,c.useTracking)(),{isInDevelopmentMode:f,modifiedData:B,isInContentTypeView:k}=(0,F.Z)(),{onOpenModalAddField:w}=(0,q.Z)(),v=()=>{m("hasClickedCTBAddFieldBanner"),w({forTarget:a,targetUid:g})};return g?T.length===0&&r?e.createElement(n.Table,{colCount:2,rowCount:2},e.createElement(n.Thead,null,e.createElement(n.Tr,null,e.createElement(n.Th,null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement(n.Th,null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},i({id:"global.type",defaultMessage:"Type"}))))),e.createElement(c.EmptyBodyTable,{action:e.createElement(n.Button,{onClick:v,size:"L",startIcon:e.createElement(b.Plus,null),variant:"secondary"},i({id:(0,y.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:k?{id:(0,y.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,y.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(ke,null,e.createElement(n.Box,{paddingLeft:6,paddingRight:r?6:0,...r&&{style:{overflowX:"auto"}}},e.createElement("table",null,r&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},i({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,T.map(M=>{const{type:Z}=M,L=l;return e.createElement(e.Fragment,{key:M.name},e.createElement(L,{...M,isNestedInDZComponent:u,targetUid:g,editTarget:a,firstLoopComponentUid:s,isFromDynamicZone:p,secondLoopComponentUid:E}),Z==="component"&&e.createElement(te,{...M,customRowComponent:l,targetUid:g,isNestedInDZComponent:p,editTarget:a,firstLoopComponentUid:s}),Z==="dynamiczone"&&e.createElement($e,{...M,customRowComponent:l,addComponent:t,targetUid:g}))})))),r&&f&&e.createElement(n.TFooter,{icon:e.createElement(b.Plus,null),onClick:v},i({id:(0,y.Z)(`form.button.add.field.to.${B.contentType?B.contentType.schema.kind:a||"collectionType"}`),defaultMessage:"Add another field"})),x&&f&&e.createElement(Re,{icon:e.createElement(b.Plus,null),onClick:v,color:p?"primary":"neutral"},i({id:(0,y.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(n.Table,{colCount:2,rowCount:2},e.createElement(n.Thead,null,e.createElement(n.Tr,null,e.createElement(n.Th,null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement(n.Th,null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},i({id:"global.type",defaultMessage:"Type"}))))),e.createElement(c.EmptyBodyTable,{colSpan:2,content:{id:(0,y.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}z.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},z.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const oe=z,Be=(0,h.default)(n.Box)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:l})=>t.colors[l]};
    display: block;
  }
`,Ze=h.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:l})=>t.colors[l]};
  }
`,le=t=>e.createElement(Be,null,e.createElement(Ze,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));le.propTypes={color:o().string.isRequired};const De=le,j=({content:t})=>Y()(t);j.defaultProps={content:null},j.propTypes={content:o().string};const Fe=j,Le=(0,h.default)(n.Box)`
  position: relative;
`;var Ie=d(68314);const H=({type:t,customField:l,repeatable:a})=>{const{formatMessage:s}=(0,D.useIntl)();let p=t;return["integer","biginteger","float","decimal"].includes(t)?p="number":["string"].includes(t)&&(p="text"),l?e.createElement(n.Typography,null,s({id:(0,y.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(n.Typography,null,s({id:(0,y.Z)(`attribute.${p}`),defaultMessage:t}),"\xA0",a&&s({id:(0,y.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};H.defaultProps={customField:null,repeatable:!1},H.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const Ae=H;function K({configurable:t,customField:l,editTarget:a,firstLoopComponentUid:s,isFromDynamicZone:p,name:r,onClick:u,relation:x,repeatable:T,secondLoopComponentUid:E,target:g,targetUid:i,type:m}){const{contentTypes:f,isInDevelopmentMode:B,removeAttribute:k}=(0,F.Z)(),{formatMessage:w}=(0,D.useIntl)(),v=m==="relation"&&x.includes("morph"),M=["integer","biginteger","float","decimal"].includes(m)?"number":m,Z=C()(f,[g],{}),L=C()(Z,["schema","displayName"],""),I=C()(Z,"plugin"),G=g?"relation":M,A=()=>{v||t!==!1&&u(a,E||s||i,r,m,l)};let R;return E&&s?R=2:s?R=1:R=0,e.createElement(Le,{as:"tr",...(0,c.onRowClick)({fn:A,condition:B&&t&&!v})},e.createElement("td",{style:{position:"relative"}},R!==0&&e.createElement(De,{color:p?"primary200":"neutral150"}),e.createElement(n.Flex,{paddingLeft:2,gap:4},e.createElement(Ie.Z,{type:G,customField:l}),e.createElement(n.Typography,{fontWeight:"bold"},r))),e.createElement("td",null,g?e.createElement(n.Typography,null,w({id:(0,y.Z)(`modelPage.attribute.${v?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(Fe,{content:L}),"\xA0",I&&`(${w({id:(0,y.Z)("from"),defaultMessage:"from"})}: ${I})`)):e.createElement(Ae,{type:m,customField:l,repeatable:T})),e.createElement("td",null,B?e.createElement(n.Flex,{justifyContent:"flex-end",...c.stopPropagation},t?e.createElement(n.Flex,{gap:1},!v&&e.createElement(n.IconButton,{onClick:A,label:`${w({id:"app.utils.edit",defaultMessage:"Edit"})} ${r}`,noBorder:!0,icon:e.createElement(b.Pencil,null)}),e.createElement(n.IconButton,{onClick:P=>{P.stopPropagation(),k(a,r,E||s||"")},label:`${w({id:"global.delete",defaultMessage:"Delete"})} ${r}`,noBorder:!0,icon:e.createElement(b.Trash,null)})):e.createElement(b.Lock,null)):e.createElement(n.Box,{height:(0,c.pxToRem)(32)})))}K.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},K.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const Pe=(0,e.memo)(K),Ne=t=>{let l;switch(t){case"date":case"datetime":case"time":case"timestamp":l="date";break;case"integer":case"biginteger":case"decimal":case"float":l="number";break;case"string":case"text":l="text";break;case"":l="relation";break;default:l=t}return l},Se={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},X=({disabled:t,isTemporary:l,isInContentTypeView:a,contentTypeKind:s,targetUid:p})=>{const{formatMessage:r}=(0,D.useIntl)(),{push:u}=(0,S.useHistory)(),{collectionTypesConfigurations:x,componentsConfigurations:T,singleTypesConfigurations:E}=Se,g=r({id:"content-type-builder.form.button.configure-view"});let i=x;const m=()=>(l||u(a?`/content-manager/collectionType/${p}/configurations/edit`:`/content-manager/components/${p}/configurations/edit`),!1);return a&&s==="singleType"&&(i=E),a||(i=T),e.createElement(c.CheckPermissions,{permissions:i},e.createElement(n.Button,{startIcon:e.createElement(b.Layer,null),variant:"tertiary",onClick:m,disabled:l||t},g))};X.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},X.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const Ue=(0,e.memo)(X),We=()=>{const{initialData:t,modifiedData:l,isInDevelopmentMode:a,isInContentTypeView:s,submitData:p}=(0,F.Z)(),{formatMessage:r}=(0,D.useIntl)(),{trackUsage:u}=(0,c.useTracking)(),x=(0,S.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:T,onOpenModalAddField:E,onOpenModalEditField:g,onOpenModalEditSchema:i,onOpenModalEditCustomField:m}=(0,q.Z)(),f=s?"contentType":"component",B=[f,"schema","attributes"],k=C()(l,[f,"uid"]),w=C()(l,[f,"isTemporary"],!1),v=C()(l,[f,"schema","kind"],null),M=C()(l,B,[]),Z=me()(t,[f,"plugin"]),L=!Q()(l,t),I=s?"contentType":"component",G=$=>{T({dynamicZoneTarget:$,targetUid:k})},A=async($,ae,re,se,ie)=>{const ce=Ne(se);ie?m({forTarget:$,targetUid:ae,attributeName:re,attributeType:ce,customFieldUid:ie}):g({forTarget:$,targetUid:ae,attributeName:re,attributeType:ce,step:se==="component"?"2":null})};let R=C()(l,[f,"schema","displayName"],"");const P=C()(l,[f,"schema","kind"],""),N=x?.params.currentUID==="create-content-type";!R&&N&&(R=r({id:(0,y.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const Ve=()=>{const $=P||f;$==="collectionType"&&u("willEditNameOfContentType"),$==="singleType"&&u("willEditNameOfSingleType"),i({modalType:f,forTarget:f,targetUid:k,kind:$})};return e.createElement(e.Fragment,null,e.createElement(S.Prompt,{message:r({id:(0,y.Z)("prompt.unsaved")}),when:L}),e.createElement(n.HeaderLayout,{id:"title",primaryAction:a&&e.createElement(n.Flex,{gap:2},!N&&e.createElement(n.Button,{startIcon:e.createElement(b.Plus,null),variant:"secondary",onClick:()=>{E({forTarget:I,targetUid:k})}},r({id:(0,y.Z)("button.attributes.add.another")})),e.createElement(n.Button,{startIcon:e.createElement(b.Check,null),onClick:()=>p(),type:"submit",disabled:Q()(l,t)},r({id:"global.save",defaultMessage:"Save"}))),secondaryAction:a&&!Z&&!N&&e.createElement(n.Button,{startIcon:e.createElement(b.Pencil,null),variant:"tertiary",onClick:Ve},r({id:"app.utils.edit",defaultMessage:"Edit"})),title:Y()(R),subtitle:r({id:(0,y.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(c.Link,{startIcon:e.createElement(b.ArrowLeft,null),to:"/plugins/content-type-builder/"},r({id:"global.back",defaultMessage:"Back"}))}),e.createElement(n.ContentLayout,null,e.createElement(n.Flex,{direction:"column",alignItems:"stretch",gap:4},e.createElement(n.Flex,{justifyContent:"flex-end"},e.createElement(n.Flex,{gap:2},e.createElement(Ue,{key:"link-to-cm-settings-view",targetUid:k,isTemporary:w,isInContentTypeView:s,contentTypeKind:v,disabled:N}))),e.createElement(n.Box,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(oe,{items:M,customRowComponent:$=>e.createElement(Pe,{...$,onClick:A}),addComponentToDZ:G,targetUid:k,editTarget:I,isMain:!0})))))}}}]);
