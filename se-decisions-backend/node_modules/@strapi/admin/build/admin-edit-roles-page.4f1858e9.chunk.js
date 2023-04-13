(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[2544],{92034:function(X,F,a){"use strict";a.r(F),a.d(F,{CreatePage:function(){return ve},default:function(){return Oe}});var e=a(32735),y=a(14723),s=a(43383),x=a(27649),k=a(82055),R=a(87933),v=a(41415),S=a(17e3),P=a(72850),M=a(49372),T=a(15335),I=a(5803),C=a(10369),u=a(10508),N=a(29439),Q=a(92802),U=a(33795),fe=a.n(U),A=a(86834),K=a.n(A),me=a(67879),f=a(53038),q=a(8471),z=a(7247),ee=a(67927),ie=a(83983),le=a(24346),Ce=le.Ry().shape({name:le.Z_().required(s.I0.required),description:le.Z_().required(s.I0.required)});const de=q.ZP.div`
  border: 1px solid ${({theme:H})=>H.colors.primary200};
  background: ${({theme:H})=>H.colors.primary100};
  padding: ${({theme:H})=>`${H.spaces[2]} ${H.spaces[4]}`};
  color: ${({theme:H})=>H.colors.primary600};
  border-radius: ${({theme:H})=>H.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,ve=()=>{const H=(0,s.lm)(),{lockApp:re,unlockApp:D}=(0,s.o1)(),{formatMessage:j}=(0,me.Z)(),[_,oe]=(0,e.useState)(!1),{replace:ce}=(0,f.k6)(),te=(0,e.useRef)(),{trackUsage:ue}=(0,s.rS)(),Le=(0,f.$B)("/settings/roles/duplicate/:id"),xe=fe()(Le,"params.id",null),{isLoading:ke,data:he}=(0,ee.U_)(),{permissions:$e,isLoading:Me}=(0,ee.Dq)(xe),Ie=Re=>{re(),oe(!0),ue(xe?"willDuplicateRole":"willCreateNewRole"),Promise.resolve((0,s.WY)("/admin/roles",{method:"POST",body:Re})).then(async Y=>{const{permissionsToSend:w}=te.current.getPermissions();return ue(xe?"didDuplicateRole":"didCreateNewRole"),Y.data.id&&!K()(w)&&await(0,s.WY)(`/admin/roles/${Y.data.id}/permissions`,{method:"PUT",body:{permissions:w}}),Y}).then(Y=>{oe(!1),H({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),ce(`/settings/roles/${Y.data.id}`)}).catch(Y=>{console.error(Y),oe(!1),H({type:"warning",message:{id:"notification.error"}})}).finally(()=>{D()})},Ze=`${j({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,y.Z)(new Date,"PPP")}`;return e.createElement(x.o,null,e.createElement(s.SL,{name:"Roles"}),e.createElement(Q.J9,{initialValues:{name:"",description:Ze},onSubmit:Ie,validationSchema:Ce,validateOnChange:!1},({handleSubmit:Re,values:Y,errors:w,handleReset:ye,handleChange:ae})=>e.createElement(s.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(k.T,{primaryAction:e.createElement(R.k,{gap:2},e.createElement(v.z,{variant:"secondary",onClick:()=>{ye(),te.current.resetForm()},size:"L"},j({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(v.z,{onClick:Re,loading:_,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(s.rU,{startIcon:e.createElement(N.Z,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(S.D,null,e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(P.x,null,e.createElement(P.x,null,e.createElement(M.Z,{fontWeight:"bold"},j({id:"global.details",defaultMessage:"Details"}))),e.createElement(P.x,null,e.createElement(M.Z,{variant:"pi",textColor:"neutral600"},j({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(de,null,j({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(T.r,{gap:4},e.createElement(I.P,{col:6},e.createElement(C.o,{name:"name",error:w.name&&j({id:w.name}),label:j({id:"global.name",defaultMessage:"Name"}),onChange:ae,value:Y.name})),e.createElement(I.P,{col:6},e.createElement(u.g,{label:j({id:"global.description",defaultMessage:"Description"}),name:"description",error:w.description&&j({id:w.description}),onChange:ae},Y.description))))),!ke&&!Me?e.createElement(P.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(z.Z,{isFormDisabled:!1,ref:te,permissions:$e,layout:he})):e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null))))))))};function Oe(){return e.createElement(s.O4,{permissions:ie.Z.settings.roles.create},e.createElement(ve,null))}},7247:function(X,F,a){"use strict";a.d(F,{Z:function(){return _n}});var e=a(32735),y=a(60216),s=a.n(y),x=a(43383),k=a(91215),R=a(39291),v=a(3653),S=a(23973),P=a.n(S),M=a(86834),T=a.n(M),I=a(67879),C=a(72850),u=a(8471),N=a(98978),Q=a.n(N),U=a(15974),fe=a(96441),A=a(87933),K=a(44426),me=a(33795),f=a.n(me),q=a(9086),z=a.n(q),ee=a(67927),ie=a(45112),le=a(41415);const Se=u.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Ce=({onClick:t,className:n,hasConditions:r,variant:o})=>{const{formatMessage:i}=(0,I.Z)();return e.createElement(Se,{hasConditions:r,className:n},e.createElement(le.z,{variant:o,startIcon:e.createElement(ie.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};Ce.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},Ce.propTypes={onClick:s().func.isRequired,className:s().string,hasConditions:s().bool,variant:s().string};var de=(0,u.ZP)(Ce)``,ve=a(85025),Oe=a(55225),H=a(11299),re=a(31600),D=a(49372),j=a(11406),_=a(97889),oe=a(81346),ce=a.n(oe),te=a(23940),ue=a.n(te),Le=a(47328);const xe=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),ke=t=>t.reduce((n,[r,o])=>(n.push({label:ue()(r),children:o.map(i=>({label:i.displayName,value:i.id}))}),n),[]),he=(t,n)=>t.map(([,r])=>r).flat().reduce((r,o)=>({[o.id]:n.includes(o.id),...r}),{}),$e=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:o,name:i,onChange:l,value:d})=>{const{formatMessage:c}=(0,I.Z)(),p=m=>{l(i,he(t,m))};return e.createElement(A.k,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(A.k,{paddingLeft:6,style:{width:180}},e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},c({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(D.Z,{variant:"sigma",title:o,textColor:"primary600",ellipsis:!0},c({id:`Settings.roles.form.permissions.${o.toLowerCase()}`,defaultMessage:o})),e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",c({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(C.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Le.Q,{id:i,customizeContent:m=>`${m.length} currently selected`,onChange:p,value:xe(d),options:ke(t),disabled:n})))};$e.propTypes={arrayOfOptionsGroupedByCategory:s().array.isRequired,isFormDisabled:s().bool.isRequired,isGrey:s().bool.isRequired,label:s().string.isRequired,name:s().string.isRequired,value:s().object.isRequired,onChange:s().func.isRequired};var Me=$e;const Ie=(t,n)=>t.reduce((r,o)=>(r[o.id]=f()(n,o.id,!1),r),{}),Ze=(t,n)=>t.reduce((r,o)=>{const[i,l]=o,d=Ie(l,n);return r[i]=d,r},{});var Y=(t,n,r)=>t.reduce((o,i)=>{const l=f()(n,[...i.pathToConditionsObject,"conditions"],{}),d=Ze(r,l);return o[i.pathToConditionsObject.join("..")]=d,o},{});const w=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:o,onToggle:i})=>{const{formatMessage:l}=(0,I.Z)(),{availableConditions:d,modifiedData:c,onChangeConditions:p}=(0,ee.$_)(),m=(0,e.useMemo)(()=>Object.entries(ce()(d,"category")),[d]),g=t.filter(({isDisplayed:h,hasSomeActionsSelected:Z,hasAllActionsSelected:L})=>h&&(Z||L)),E=(0,e.useMemo)(()=>Y(g,c,m),[g,c,m]),[O,W]=(0,e.useState)(E),$=(h,Z)=>{W((0,_.ZP)(L=>{L[h]||(L[h]={}),L[h].default||(L[h].default={}),L[h].default=Z}))},b=()=>{const h=Object.entries(O).reduce((Z,L)=>{const[B,ne]=L,G=Object.values(ne).reduce((J,V)=>({...J,...V}),{});return Z[B]=G,Z},{});p(h),i()};return e.createElement(ve.P,{labelledBy:"condition-modal-breadcrumbs",onClose:o},e.createElement(Oe.x,null,e.createElement(H.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map(h=>e.createElement(H.$,{key:h},ue()(l({id:h,defaultMessage:h})))))),e.createElement(re.f,null,g.length===0&&e.createElement(D.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,g.map(({actionId:h,label:Z,pathToConditionsObject:L},B)=>{const ne=L.join("..");return e.createElement(Me,{key:h,arrayOfOptionsGroupedByCategory:m,label:Z,isFormDisabled:r,isGrey:B%2===0,name:ne,onChange:$,value:f()(O,ne,{})})}))),e.createElement(j.m,{startActions:e.createElement(le.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(le.z,{onClick:b},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};w.propTypes={actions:s().arrayOf(s().shape({actionId:s().string.isRequired,checkboxName:s().string,hasSomeActionsSelected:s().bool.isRequired,hasAllActionsSelected:s().bool,isDisplayed:s().bool.isRequired,label:s().string})).isRequired,headerBreadCrumbs:s().arrayOf(s().string).isRequired,isFormDisabled:s().bool.isRequired,onClosed:s().func.isRequired,onToggle:s().func.isRequired};var ye=w;const ae=`${120/16}rem`,Be=`${200/16}rem`,Ve=`${53/16}rem`;var Ge=u.ZP.div`
  width: ${ae};
`,ot=(0,u.ZP)(A.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`;const Ue=({children:t,isCollapsable:n,isActive:r,isFormDisabled:o,label:i,onChange:l,onClick:d,checkboxName:c,someChecked:p,value:m})=>{const{formatMessage:g}=(0,I.Z)();return e.createElement(A.k,{alignItems:"center",paddingLeft:6,style:{width:Be,flexShrink:0}},e.createElement(C.x,{paddingRight:2},e.createElement(K.C,{name:c,"aria-label":g({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:o,onValueChange:E=>l({target:{name:c,value:E}}),indeterminate:p,value:m})),e.createElement(ot,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:d,"aria-expanded":r,onKeyDown:({key:E})=>(E==="Enter"||E===" ")&&d(),tabIndex:0,role:"button"}},e.createElement(D.Z,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},ue()(i)),t))};Ue.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ue.propTypes={checkboxName:s().string,children:s().node,label:s().string.isRequired,isCollapsable:s().bool,isFormDisabled:s().bool.isRequired,onChange:s().func,onClick:s().func.isRequired,someChecked:s().bool,value:s().bool,isActive:s().bool.isRequired};var st=(0,e.memo)(Ue),Bt=a(72091),Ft=a.n(Bt),Nt=a(85973),be=a.n(Nt);const rt=t=>be()(t)?Ft()(Object.values(t).map(n=>be()(n)?rt(n):n)):[];var De=rt,Ke=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Pe=t=>{const n=Ke(t),r=De(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const o=r.every(l=>l),i=r.some(l=>l)&&!o;return{hasAllActionsSelected:o,hasSomeActionsSelected:i}},Wt=(t,n,r)=>t.map(({actionId:o,isDisplayed:i,applyToProperties:l,label:d})=>{if(!i)return{actionId:o,hasSomeActionsSelected:!1,isDisplayed:i};const c=[...r.split(".."),o],p=T()(l)?[...c,"properties","enabled"]:c,m=p.join(".."),g=f()(n,[...c,"conditions"],null),E=De(g).some(b=>b);if(T()(l)){const b=f()(n,p,!1);return{actionId:o,checkboxName:m,hasAllActionsSelected:b,hasConditions:E,hasSomeActionsSelected:b,isDisplayed:i,isParentCheckbox:!1,label:d,pathToConditionsObject:c}}const O=f()(n,p,null),{hasAllActionsSelected:W,hasSomeActionsSelected:$}=Pe(O);return{actionId:o,checkboxName:m,hasAllActionsSelected:W,hasConditions:E,hasSomeActionsSelected:$,isDisplayed:i,isParentCheckbox:!0,label:d,pathToConditionsObject:c}}),Vt=a(16899),Fe=(0,u.ZP)(Vt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ne=t=>`
  ${D.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Fe} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`;const ze=(t,n)=>`
  ${at} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${lt} {
    display: flex;
  }
  ${de} {
    display: block;
  }
  &:hover {
   ${Ne(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:o})=>ze(r,o)}
  }
  
`,at=u.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ve};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Ht=u.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${de} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&ze(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>ze(t,n)}
  }
`,it=(0,u.ZP)(A.k)`
  width: ${ae};
  position: relative;
`,lt=(0,u.ZP)(C.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,dt=u.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Gt=(0,u.ZP)(C.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,ct=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:o,label:i,onClickToggle:l,pathToData:d})=>{const[c,p]=(0,e.useState)(!1),{formatMessage:m}=(0,I.Z)(),{modifiedData:g,onChangeParentCheckbox:E,onChangeSimpleCheckbox:O}=(0,ee.$_)(),W=()=>{p(G=>!G)},$=()=>{p(!1)},b=f()(g,d.split(".."),{}),h=(0,e.useMemo)(()=>Object.keys(b).reduce((G,J)=>(G[J]=z()(b[J],"conditions"),G),{}),[b]),{hasAllActionsSelected:Z,hasSomeActionsSelected:L}=Pe(h),B=(0,e.useMemo)(()=>Wt(t,g,d),[t,g,d]),ne=B.some(({hasConditions:G})=>G);return e.createElement(Ht,{isActive:n},e.createElement(at,{isGrey:r},e.createElement(st,{isCollapsable:!0,isFormDisabled:o,label:i,checkboxName:d,onChange:E,onClick:l,someChecked:L,value:Z,isActive:n},e.createElement(lt,{paddingLeft:2},n?e.createElement(U.Z,null):e.createElement(fe.Z,null))),e.createElement(A.k,{style:{flex:1}},B.map(({actionId:G,hasConditions:J,hasAllActionsSelected:V,hasSomeActionsSelected:ge,isDisplayed:je,isParentCheckbox:se,checkboxName:Ee,label:We})=>je?se?e.createElement(it,{key:G,justifyContent:"center",alignItems:"center"},J&&e.createElement(dt,null),e.createElement(K.C,{disabled:o,name:Ee,"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${We} ${i}`}),onValueChange:Te=>{E({target:{name:Ee,value:Te}})},indeterminate:ge,value:V})):e.createElement(it,{key:G,justifyContent:"center",alignItems:"center"},J&&e.createElement(dt,null),e.createElement(K.C,{disabled:o,indeterminate:J,name:Ee,onValueChange:Te=>{O({target:{name:Ee,value:Te}})},value:V})):e.createElement(Ge,{key:G}))),c&&e.createElement(ye,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:B,isFormDisabled:o,onClosed:$,onToggle:W})),e.createElement(Gt,null,e.createElement(de,{onClick:W,hasConditions:ne})))};ct.propTypes={availableActions:s().array.isRequired,isActive:s().bool.isRequired,isGrey:s().bool.isRequired,isFormDisabled:s().bool.isRequired,label:s().string.isRequired,onClickToggle:s().func.isRequired,pathToData:s().string.isRequired};var Ut=ct,Kt=(t,n)=>t.map(r=>{const o=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:o}});const ut=(0,u.ZP)(A.k)`
  width: ${ae};
  flex-shrink: 0;
`,zt=(0,u.ZP)(A.k)`
  width: ${Be};
  height: ${Ve};
  flex-shrink: 0;
`,mt=({headers:t,label:n})=>{const{formatMessage:r}=(0,I.Z)(),o=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(A.k,null,e.createElement(zt,{alignItems:"center",paddingLeft:6},e.createElement(D.Z,{variant:"sigma",textColor:"neutral500"},o)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ut,{justifyContent:"center",key:i.label},e.createElement(D.Z,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ut,{key:i.label})))};mt.propTypes={headers:s().arrayOf(s().shape({label:s().string.isRequired,isActionRelatedToCurrentProperty:s().bool.isRequired})).isRequired,label:s().string.isRequired};var Yt=mt;const Xt=u.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`;var pt=()=>e.createElement(Xt,null,"*"),wt=(t,n)=>t.map(r=>{const o=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:o}});const Jt=(0,u.ZP)(C.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Qt=u.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ye=t=>e.createElement(Jt,null,e.createElement(Qt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Ye.defaultProps={fill:"primary200"},Ye.propTypes={fill:s().string};var qt=(0,e.memo)(Ye);const gt=(0,u.ZP)(A.k)`
  width: ${ae};
  position: relative;
`,_t=(0,u.ZP)(A.k)`
  height: ${Ve};
`,en=(0,u.ZP)(C.x)`
  padding-left: ${31/16}rem;
`,tn=(0,u.ZP)(C.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,nn=(0,u.ZP)(A.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Fe} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ne(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ne(n)};
`,on=u.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Xe=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:o,propertyActions:i,parentName:l,propertyName:d})=>{const{formatMessage:c}=(0,I.Z)(),{modifiedData:p,onChangeParentCheckbox:m,onChangeSimpleCheckbox:g}=(0,ee.$_)(),[E,O]=(0,e.useState)(null),W=b=>{O(h=>h===b?null:b)},$=(0,e.useMemo)(()=>E?t.find(({value:b})=>b===E):null,[E,t]);return e.createElement(en,null,e.createElement(on,null),t.map(({label:b,value:h,required:Z,children:L},B)=>{const ne=B+1<t.length,G=Array.isArray(L),J=E===h;return e.createElement(tn,{key:h,isVisible:ne},e.createElement(_t,null,e.createElement(qt,{color:"primary200"}),e.createElement(A.k,{style:{flex:1}},e.createElement(nn,{level:r,isActive:J,isCollapsable:G},e.createElement(ot,{alignItems:"center",isCollapsable:G,...G&&{onClick:()=>W(h),"aria-expanded":J,onKeyDown:({key:V})=>(V==="Enter"||V===" ")&&W(h),tabIndex:0,role:"button"},title:b},e.createElement(D.Z,{ellipsis:!0},ue()(b)),Z&&e.createElement(pt,null),e.createElement(Fe,{$isActive:J}))),e.createElement(A.k,{style:{flex:1}},i.map(({actionId:V,label:ge,isActionRelatedToCurrentProperty:je})=>{if(!je)return e.createElement(Ge,{key:V});const se=[...o.split(".."),V,"properties",d,...l.split(".."),h],Ee=f()(p,se,!1);if(!L)return e.createElement(gt,{key:ge,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:n,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${b} ${ge}`}),onValueChange:Ae=>{g({target:{name:se.join(".."),value:Ae}})},value:Ee}));const{hasAllActionsSelected:We,hasSomeActionsSelected:Te}=Pe(Ee);return e.createElement(gt,{key:ge,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{key:ge,disabled:n,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${b} ${ge}`}),onValueChange:Ae=>{m({target:{name:se.join(".."),value:Ae}})},value:We,indeterminate:Te}))})))),$&&J&&e.createElement(C.x,{paddingBottom:2},e.createElement(Xe,{isFormDisabled:n,parentName:`${l}..${h}`,pathToDataFromActionRow:o,propertyActions:i,propertyName:d,recursiveLevel:r+1,childrenForm:$.children})))}))};Xe.propTypes={childrenForm:s().array.isRequired,isFormDisabled:s().bool.isRequired,parentName:s().string.isRequired,pathToDataFromActionRow:s().string.isRequired,propertyActions:s().array.isRequired,propertyName:s().string.isRequired,recursiveLevel:s().number.isRequired};var sn=(0,e.memo)(Xe);const rn=t=>t.reduce((r,o)=>(o.isActionRelatedToCurrentProperty&&r.push(o.actionId),r),[]);var an=(t,n,r,o,i)=>{const d=rn(t).reduce((c,p)=>{const m=[...r.split(".."),p,"properties",o,i],g=f()(n,m,!1);return c[p]=g,c},{});return Pe(d)};const ft=(0,u.ZP)(A.k)`
  width: ${ae};
  position: relative;
`,ln=(0,u.ZP)(A.k)`
  height: ${Ve};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Fe} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ne(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ne(n)};
`,we=({childrenForm:t,label:n,isFormDisabled:r,name:o,required:i,pathToData:l,propertyActions:d,propertyName:c,isOdd:p})=>{const{formatMessage:m}=(0,I.Z)(),[g,E]=(0,e.useState)(null),{modifiedData:O,onChangeCollectionTypeLeftActionRowCheckbox:W,onChangeParentCheckbox:$,onChangeSimpleCheckbox:b}=(0,ee.$_)(),h=g===o,Z=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),L=Z.length>0,B=(0,e.useCallback)(()=>{L&&E(V=>V===o?null:o)},[L,o]),ne=({target:{value:V}})=>{W(l,c,o,V)},{hasAllActionsSelected:G,hasSomeActionsSelected:J}=(0,e.useMemo)(()=>an(d,O,l,c,o),[d,O,l,c,o]);return e.createElement(e.Fragment,null,e.createElement(ln,{alignItems:"center",isCollapsable:L,isActive:h,background:p?"neutral100":"neutral0"},e.createElement(A.k,null,e.createElement(st,{onChange:ne,onClick:B,isCollapsable:L,isFormDisabled:r,label:n,someChecked:J,value:G,isActive:h},i&&e.createElement(pt,null),e.createElement(Fe,{$isActive:h})),e.createElement(A.k,null,d.map(({label:V,isActionRelatedToCurrentProperty:ge,actionId:je})=>{if(!ge)return e.createElement(Ge,{key:V});const se=[...l.split(".."),je,"properties",c,o];if(!L){const Ae=f()(O,se,!1);return e.createElement(ft,{key:je,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:r,name:se.join(".."),"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${V}`}),onValueChange:eo=>{b({target:{name:se.join(".."),value:eo}})},value:Ae}))}const Ee=f()(O,se,{}),{hasAllActionsSelected:We,hasSomeActionsSelected:Te}=Pe(Ee);return e.createElement(ft,{key:V,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:r,name:se.join(".."),onValueChange:Ae=>{$({target:{name:se.join(".."),value:Ae}})},"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${V}`}),value:We,indeterminate:Te}))})))),h&&e.createElement(sn,{childrenForm:Z,isFormDisabled:r,parentName:o,pathToDataFromActionRow:l,propertyName:c,propertyActions:d,recursiveLevel:0}))};we.defaultProps={childrenForm:[],required:!1},we.propTypes={childrenForm:s().array,label:s().string.isRequired,isFormDisabled:s().bool.isRequired,name:s().string.isRequired,pathToData:s().string.isRequired,propertyActions:s().array.isRequired,propertyName:s().string.isRequired,required:s().bool,isOdd:s().bool.isRequired};var dn=(0,e.memo)(we);const cn=u.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,ht=({availableActions:t,childrenForm:n,isFormDisabled:r,label:o,pathToData:i,propertyName:l})=>{const d=(0,e.useMemo)(()=>Kt(t,l),[t,l]);return e.createElement(cn,null,e.createElement(Yt,{label:o,headers:d}),e.createElement(C.x,null,n.map(({children:c,label:p,value:m,required:g},E)=>e.createElement(dn,{childrenForm:c,key:m,label:p,isFormDisabled:r,name:m,required:g,propertyActions:d,pathToData:i,propertyName:l,isOdd:E%2===0}))))};ht.propTypes={childrenForm:s().array.isRequired,availableActions:s().array.isRequired,isFormDisabled:s().bool.isRequired,label:s().string.isRequired,pathToData:s().string.isRequired,propertyName:s().string.isRequired};var un=ht;const mn=u.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,yt=({allActions:t,contentTypeName:n,label:r,index:o,isActive:i,isFormDisabled:l,onClickToggleCollapse:d,pathToData:c,properties:p})=>{const m=(0,e.useCallback)(()=>{d(n)},[n,d]),g=(0,e.useMemo)(()=>wt(t,n),[t,n]);return e.createElement(mn,{isActive:i},e.createElement(Ut,{availableActions:g,isActive:i,isGrey:o%2===0,isFormDisabled:l,label:r,onClickToggle:m,pathToData:c}),i&&p.map(({label:E,value:O,children:W})=>e.createElement(un,{availableActions:g,childrenForm:W,isFormDisabled:l,label:E,pathToData:c,propertyName:O,key:O})))};yt.propTypes={allActions:s().array.isRequired,contentTypeName:s().string.isRequired,index:s().number.isRequired,isActive:s().bool.isRequired,isFormDisabled:s().bool.isRequired,label:s().string.isRequired,onClickToggleCollapse:s().func.isRequired,pathToData:s().string.isRequired,properties:s().array.isRequired};var pn=yt;const Je=({actions:t,isFormDisabled:n,pathToData:r,subjects:o})=>{const[i,l]=(0,e.useState)(null),d=c=>{l(i===c?null:c)};return o.map(({uid:c,label:p,properties:m},g)=>e.createElement(pn,{allActions:t,key:c,contentTypeName:c,label:p,isActive:i===c,isFormDisabled:n,index:g,onClickToggleCollapse:d,pathToData:`${r}..${c}`,properties:m}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:s().array.isRequired,isFormDisabled:s().bool.isRequired,pathToData:s().string.isRequired,subjects:s().arrayOf(s().shape({uid:s().string.isRequired,label:s().string.isRequired,properties:s().array.isRequired}))};var gn=(0,e.memo)(Je),fn=t=>t.filter(({subjects:n})=>n&&n.length);const hn=t=>t.map(({actionId:n})=>n),yn=(t,n)=>t.reduce((r,o)=>(Object.keys(n).forEach(i=>{const l=f()(n,[i,o],{}),d={[i]:Ke(l)};r[o]?r[o]={...r[o],...d}:r[o]=d}),r),{});var Cn=(t,n)=>{const r=hn(t),o=yn(r,n);return Object.keys(o).reduce((l,d)=>(l[d]=Pe(o[d]),l),{})};const vn=(0,u.ZP)(A.k)`
  width: ${ae};
  flex-shrink: 0;
`,Qe=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:o}=(0,I.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,ee.$_)(),d=(0,e.useMemo)(()=>fn(t),[t]),c=(0,e.useMemo)(()=>Cn(d,i[r]),[i,d,r]);return e.createElement(C.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Be}},e.createElement(A.k,{gap:0},d.map(({label:p,actionId:m})=>e.createElement(vn,{direction:"column",alignItems:"center",justifyContent:"center",key:m,gap:3},e.createElement(D.Z,{variant:"sigma",textColor:"neutral500"},o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(K.C,{disabled:n,onValueChange:g=>{l(r,m,g)},name:m,"aria-label":o({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:f()(c,[m,"hasAllActionsSelected"],!1),indeterminate:f()(c,[m,"hasSomeActionsSelected"],!1)})))))};Qe.defaultProps={actions:[]},Qe.propTypes={actions:s().arrayOf(s().shape({label:s().string.isRequired,actionId:s().string.isRequired,subjects:s().array.isRequired})),isFormDisabled:s().bool.isRequired,kind:s().string.isRequired};var En=(0,e.memo)(Qe);const bn=(0,u.ZP)(C.x)`
  overflow-x: auto;
`,Ct=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:o}})=>{const i=Q()([...o],"label");return e.createElement(bn,{background:"neutral0"},e.createElement(En,{actions:r,kind:n,isFormDisabled:t}),e.createElement(gn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};Ct.propTypes={isFormDisabled:s().bool.isRequired,kind:s().string.isRequired,layout:s().shape({actions:s().array,subjects:s().arrayOf(s().shape({uid:s().string.isRequired,label:s().string.isRequired,properties:s().array.isRequired}))}).isRequired};var vt=(0,e.memo)(Ct),xn=a(66694);const Et=({children:t,value:n})=>e.createElement(xn.$l.Provider,{value:n},t);Et.propTypes={children:s().node.isRequired,value:s().exact({availableConditions:s().array.isRequired,modifiedData:s().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:s().func.isRequired,onChangeConditions:s().func.isRequired,onChangeSimpleCheckbox:s().func.isRequired,onChangeParentCheckbox:s().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:s().func.isRequired}).isRequired};var Rn=Et,Pn=a(83828),Tn=a(61762),An=a(89966),bt=a(8284),Sn=a(15335),On=a(5803),$n=(t,n,r)=>t.map(o=>{const i=[...r,o.action,"properties","enabled"],l=f()(n,i,!1),d=f()(n,[...r,o.action,"conditions"],{}),c=De(d).some(p=>p);return{...o,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:c,label:o.displayName,actionId:o.action,pathToConditionsObject:[...r,o.action]}}),Mn=t=>{const n=Object.entries(t).reduce((o,i)=>{const[l,{conditions:d}]=i;return o[l]=d,o},{});return De(n).some(o=>o)};const Dn=u.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,jn=u.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,xt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:o,pathToData:i})=>{const[l,d]=(0,e.useState)(!1),{modifiedData:c,onChangeParentCheckbox:p,onChangeSimpleCheckbox:m}=(0,ee.$_)(),{formatMessage:g}=(0,I.Z)(),E=f()(c,i,{}),O=(0,e.useMemo)(()=>Object.keys(E).reduce((B,ne)=>(B[ne]=Ke(E[ne]),B),{}),[E]),{hasAllActionsSelected:W,hasSomeActionsSelected:$}=Pe(O),b=()=>{d(B=>!B)},h=()=>{d(!1)},Z=$n(o,c,i),L=Mn(f()(c,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(C.x,null,e.createElement(A.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(C.x,{paddingRight:4},e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(Dn,null),e.createElement(C.x,{paddingLeft:4},e.createElement(bt.X,{name:i.join(".."),disabled:n,onValueChange:B=>{p({target:{name:i.join(".."),value:B}})},indeterminate:$,value:W},g({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(A.k,{paddingTop:6,paddingBottom:6},e.createElement(Sn.r,{gap:2,style:{flex:1}},Z.map(({checkboxName:B,value:ne,action:G,displayName:J,hasConditions:V})=>e.createElement(On.P,{col:3,key:G},e.createElement(jn,{disabled:n,hasConditions:V},e.createElement(bt.X,{name:B,disabled:n,onValueChange:ge=>{m({target:{name:B,value:ge}})},value:ne},J))))),e.createElement(de,{hasConditions:L,onClick:b}))),l&&e.createElement(ye,{headerBreadCrumbs:[t,r],actions:Z,isFormDisabled:n,onClosed:h,onToggle:b}))};xt.propTypes={actions:s().array.isRequired,categoryName:s().string.isRequired,isFormDisabled:s().bool.isRequired,subCategoryName:s().string.isRequired,pathToData:s().array.isRequired};var Ln=xt;const qe=({childrenForm:t,kind:n,name:r,isOpen:o,isFormDisabled:i,isWhite:l,onOpenCategory:d,pathToData:c})=>{const{formatMessage:p}=(0,I.Z)(),m=()=>{d(r)},g=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Pn.U,{expanded:o,onToggle:m,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Tn.B,{title:ue()(g),description:`${p({id:"Settings.permissions.category"},{category:g})} ${n==="plugins"?"plugin":n}`}),e.createElement(An.v,null,e.createElement(C.x,{padding:6},t.map(({actions:E,subCategoryName:O,subCategoryId:W})=>e.createElement(Ln,{key:O,actions:E,categoryName:g,isFormDisabled:i,subCategoryName:O,pathToData:[...c,W]})))))};qe.defaultProps={},qe.propTypes={childrenForm:s().array.isRequired,isOpen:s().bool.isRequired,isFormDisabled:s().bool.isRequired,isWhite:s().bool.isRequired,kind:s().string.isRequired,name:s().string.isRequired,onOpenCategory:s().func.isRequired,pathToData:s().array.isRequired};var kn=qe;const Rt=({isFormDisabled:t,kind:n,layout:r})=>{const[o,i]=(0,e.useState)(null),l=d=>{i(d===o?null:d)};return e.createElement(C.x,{padding:6,background:"neutral0"},r.map(({category:d,categoryId:c,childrenForm:p},m)=>e.createElement(kn,{key:d,childrenForm:p,kind:n,isFormDisabled:t,isOpen:o===d,isWhite:m%2===1,name:d,onOpenCategory:l,pathToData:[n,c]})))};Rt.propTypes={isFormDisabled:s().bool.isRequired,kind:s().string.isRequired,layout:s().arrayOf(s().shape({category:s().string.isRequired,categoryId:s().string.isRequired,childrenForm:s().arrayOf(s().shape({actions:s().array.isRequired})).isRequired}).isRequired).isRequired};var Pt=Rt,In=a(86349),Zn=a.n(In),Bn=a(3040),pe=a.n(Bn),Tt=(t,n,r)=>t.find(o=>o.action===n&&o.subject===r);const At=(t,n=[])=>t.reduce((r,o)=>(r[o.id]=n.indexOf(o.id)!==-1,r),{}),St=({children:t},n,r="")=>t.reduce((o,i)=>{if(i.children)return{...o,[i.value]:St(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return o[i.value]=l,o},{}),Fn=(t,n,r)=>t.reduce((o,i)=>{const l=n.properties.find(({value:d})=>d===i);if(l){const d=f()(r,["properties",l.value],[]),c=St(l,d);o.properties[i]=c}return o},{properties:{}}),Nn=(t,n)=>n.reduce((r,o)=>{const i=t.find(({uid:l})=>l===o)||null;return i&&(r[o]=i),r},{});var Ot=({subjects:t},n,r,o=[])=>n.reduce((i,l)=>{const d=l.subjects,c=Nn(t,d);if(T()(c))return i;const p=Object.keys(c).reduce((m,g)=>{const{actionId:E,applyToProperties:O}=l,b=c[g].properties.map(({value:B})=>B).every(B=>(O||[]).indexOf(B)===-1),h=Tt(o,E,g),Z=At(r,f()(h,"conditions",[]));if(T()(O)||b)return pe()(m,[g,E],{properties:{enabled:h!==void 0},conditions:Z}),m;const L=Fn(O,c[g],h);return pe()(m,[g,E],{...L,conditions:Z}),m},{});return Zn()(i,p)},{});const Wn=(t,n,r)=>t.reduce((o,i)=>{const l=Tt(r,i.action,null);return o[i.action]={properties:{enabled:l!==void 0},conditions:At(n,l?.conditions??[])},o},{}),Vn=(t,n,r)=>t.reduce((o,i)=>(o[i.subCategoryId]=Wn(i.actions,n,r),o),{});var $t=(t,n,r=[])=>t.reduce((o,{categoryId:i,childrenForm:l})=>{const d=Vn(l,n,r);return o[i]=d,o},{});const Mt=t=>t.split(" ").join("-");var Dt=(t,n)=>Object.entries(ce()(t,n)).map(([r,o])=>({category:r,categoryId:Mt(r),childrenForm:Object.entries(ce()(o,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Mt(i),actions:l}))})),Hn=(t,n)=>{const{conditions:r,sections:{collectionTypes:o,singleTypes:i,plugins:l,settings:d}}=t,c={collectionTypes:o,singleTypes:i,plugins:Dt(l,"plugin"),settings:Dt(d,"category")},p={collectionTypes:Ot(o,o.actions||[],r,n),singleTypes:Ot(i,i.actions||[],r,n),plugins:$t(c.plugins,r,n),settings:$t(c.settings,r,n)};return{initialData:p,modifiedData:p,layouts:c}},Gn=a(99381),_e=a.n(Gn);const jt=t=>Object.keys(t).reduce((n,r)=>{const o=t[r];if(be()(o)&&!P()(o,"conditions"))return{...n,[r]:jt(o)};if(be()(o)&&P()(o,"conditions")&&!De(z()(o,"conditions")).some(l=>l)){const l=Object.keys(o.conditions).reduce((d,c)=>(d[c]=!1,d),{});return{...n,[r]:{...o,conditions:l}}}return n[r]=o,n},{});var et=jt;const Lt=(t,n)=>Object.keys(t).reduce((r,o)=>{const i=t[o];return o==="conditions"?(r[o]=i,r):be()(i)?{...r,[o]:Lt(i,n)}:(r[o]=n,r)},{});var He=Lt;const Un={initialData:{},modifiedData:{},layouts:{}};var Kn=(t,n)=>(0,_.ZP)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:o,actionId:i,value:l}=n,d=["modifiedData",o];Object.keys(f()(t,d)).forEach(c=>{const p=f()(t,[...d,c,i],void 0);if(p){let m=He(p,l);if(!l&&m.conditions){const g=He(m.conditions,!1);m={...m,conditions:g}}pe()(r,[...d,c,i],m)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:o,propertyName:i,rowName:l,value:d}=n;let c=_e()(t.modifiedData);const p=o.split(".."),m=f()(c,p,{});Object.keys(m).forEach(g=>{if(P()(m[g],`properties.${i}`)){const E=f()(m,[g,"properties",i,l]),O=[...p,g,"properties",i,l];if(!be()(E))pe()(c,O,d);else{const W=He(E,d);pe()(c,O,W)}}}),d||(c=et(c)),pe()(r,"modifiedData",c);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(o=>{const[i,l]=o;pe()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let o=_e()(t.modifiedData);pe()(o,[...n.keys.split("..")],n.value),n.value||(o=et(o)),pe()(r,"modifiedData",o);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:o,value:i}=n,l=[...o.split("..")];let d=_e()(t.modifiedData);const c=f()(d,l,{}),p=He(c,i);pe()(d,l,p),i||(d=et(d)),pe()(r,["modifiedData"],d);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}});const tt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),zn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:tt(r),properties:{}}},Yn=t=>Object.values(t).reduce((n,r)=>{const o=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:d}}]=l;if(!d)return i;const c=zn(l);return i.push(c),i},[]);return[...n,...o]},[]);var kt=t=>Object.values(t).reduce((n,r)=>{const o=Yn(r);return[...n,...o]},[]);const It=(t,n="")=>Object.entries(t).reduce((r,o)=>{const[i,l]=o;return be()(l)?[...r,...It(l,`${n}${i}.`)]:(l&&!be()(l)&&r.push(`${n}${i}`),r)},[]),Xn=(t,n,{conditions:r,properties:o})=>Object.entries(o).reduce((i,l)=>{const[d,c]=l;return i.properties[d]=It(c),i},{action:t,subject:n,conditions:tt(r),properties:{}}),wn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:tt(r)}),Jn=(t,n)=>Object.entries(n).reduce((o,i)=>{const[l,d]=i;if(!De(d).some(m=>m))return o;if(!d?.properties?.enabled){const m=Xn(l,t,d);return[...o,m]}if(!d.properties.enabled)return o;const p=wn(l,t,d);return o.push(p),o},[]);var Zt=t=>Object.entries(t).reduce((r,o)=>{const[i,l]=o,d=Jn(i,l);return[...r,...d]},[]),Qn=t=>{const n=kt(t.plugins),r=kt(t.settings),o=Zt(t.collectionTypes),i=Zt(t.singleTypes);return[...n,...r,...o,...i]},qn=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}];const nt=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},o)=>{const[{initialData:i,layouts:l,modifiedData:d},c]=(0,e.useReducer)(Kn,Un,()=>Hn(t,r)),{formatMessage:p}=(0,I.Z)();(0,e.useImperativeHandle)(o,()=>({getPermissions(){const $=(0,x.e5)(i.collectionTypes,d.collectionTypes),b=(0,x.e5)(i.singleTypes,d.singleTypes),h={...$,...b};let Z;return T()(h)?Z=!1:Z=Object.values(h).some(L=>Object.values(L).some(B=>P()(B,"conditions"))),{permissionsToSend:Qn(d),didUpdateConditions:Z}},resetForm(){c({type:"RESET_FORM"})},setFormAfterSubmit(){c({type:"SET_FORM_AFTER_SUBMIT"})}}));const m=($,b,h,Z)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:$,propertyName:b,rowName:h,value:Z})},g=($,b,h)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:$,actionId:b,value:h})},E=$=>{c({type:"ON_CHANGE_CONDITIONS",conditions:$})},O=(0,e.useCallback)(({target:{name:$,value:b}})=>{c({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:$,value:b})},[]),W=(0,e.useCallback)(({target:{name:$,value:b}})=>{c({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:$,value:b})},[]);return e.createElement(Rn,{value:{availableConditions:t.conditions,modifiedData:d,onChangeConditions:E,onChangeSimpleCheckbox:O,onChangeParentCheckbox:W,onChangeCollectionTypeLeftActionRowCheckbox:m,onChangeCollectionTypeGlobalActionCheckbox:g}},e.createElement(k.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(R.m,null,qn.map($=>e.createElement(R.O,{key:$.id},p({id:$.labelId,defaultMessage:$.defaultMessage})))),e.createElement(v.n,{style:{position:"relative"}},e.createElement(v.x,null,e.createElement(vt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(v.x,null,e.createElement(vt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(v.x,null,e.createElement(Pt,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(v.x,null,e.createElement(Pt,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});nt.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},nt.propTypes={layout:s().object,isFormDisabled:s().bool.isRequired,permissions:s().array};var _n=(0,e.memo)(nt)},33778:function(X,F,a){"use strict";a.r(F),a.d(F,{default:function(){return H}});var e=a(32735),y=a(43383),s=a(53038),x=a(83983),k=a(27649),R=a(82055),v=a(87933),S=a(41415),P=a(17e3),M=a(72850),T=a(92802),I=a(29439),C=a(33795),u=a.n(C),N=a(67879),Q=a(7247),U=a(49372),fe=a(15335),A=a(5803),K=a(10369),me=a(10508),f=a(60216),q=a.n(f);const z=({disabled:re,role:D,values:j,errors:_,onChange:oe,onBlur:ce})=>{const{formatMessage:te}=(0,N.Z)();return e.createElement(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(v.k,{justifyContent:"space-between"},e.createElement(M.x,null,e.createElement(M.x,null,e.createElement(U.Z,{fontWeight:"bold"},D?D.name:te({id:"global.details",defaultMessage:"Details"}))),e.createElement(M.x,null,e.createElement(U.Z,{textColor:"neutral500",variant:"pi"},D?D.description:te({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(S.z,{disabled:!0,variant:"secondary"},te({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:D.usersCount}))),e.createElement(fe.r,{gap:4},e.createElement(A.P,{col:6},e.createElement(K.o,{disabled:re,name:"name",error:_.name&&te({id:_.name}),label:te({id:"global.name",defaultMessage:"Name"}),onChange:oe,onBlur:ce,value:j.name||""})),e.createElement(A.P,{col:6},e.createElement(me.g,{disabled:re,label:te({id:"global.description",defaultMessage:"Description"}),name:"description",error:_.name&&te({id:_.name}),onChange:oe,onBlur:ce},j.description||"")))))};z.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},z.propTypes={disabled:q().bool,errors:q().object.isRequired,onBlur:q().func.isRequired,onChange:q().func.isRequired,role:q().object,values:q().object};var ee=z,ie=a(67927),le=a(24346),Ce=le.Ry().shape({name:le.Z_().required(y.I0.required)}),ve=()=>{const re=(0,y.lm)(),{formatMessage:D}=(0,N.Z)(),{params:{id:j}}=(0,s.$B)("/settings/roles/:id"),[_,oe]=(0,e.useState)(!1),ce=(0,e.useRef)(),{lockApp:te,unlockApp:ue}=(0,y.o1)(),{trackUsage:Le}=(0,y.rS)(),{isLoading:xe,data:ke}=(0,ie.U_)(j),{role:he,permissions:$e,isLoading:Me,onSubmitSucceeded:Ie}=(0,ie.Dq)(j),Ze=async Y=>{try{te(),oe(!0);const{permissionsToSend:w,didUpdateConditions:ye}=ce.current.getPermissions();await(0,y.WY)(`/admin/roles/${j}`,{method:"PUT",body:Y}),he.code!=="strapi-super-admin"&&(await(0,y.WY)(`/admin/roles/${j}/permissions`,{method:"PUT",body:{permissions:w}}),ye&&Le("didUpdateConditions")),ce.current.setFormAfterSubmit(),Ie({name:Y.name,description:Y.description}),re({type:"success",message:{id:"notification.success.saved"}})}catch(w){console.error(w.response);const ye=u()(w,"response.payload.message","An error occured"),ae=u()(w,"response.payload.data.permissions[0]",ye);re({type:"warning",message:ae})}finally{oe(!1),ue()}},Re=he.code==="strapi-super-admin";return e.createElement(k.o,null,e.createElement(y.SL,{name:"Roles"}),e.createElement(T.J9,{enableReinitialize:!0,initialValues:{name:he.name,description:he.description},onSubmit:Ze,validationSchema:Ce,validateOnChange:!1},({handleSubmit:Y,values:w,errors:ye,handleChange:ae,handleBlur:Be})=>e.createElement("form",{onSubmit:Y},e.createElement(R.T,{primaryAction:e.createElement(v.k,{gap:2},e.createElement(S.z,{disabled:he.code==="strapi-super-admin",onClick:Y,loading:_,size:"L"},D({id:"global.save",defaultMessage:"Save"}))),title:D({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:D({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(y.rU,{startIcon:e.createElement(I.Z,null),to:"/settings/roles"},D({id:"global.back",defaultMessage:"Back"}))}),e.createElement(P.D,null,e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(ee,{isLoading:Me,disabled:Re,errors:ye,values:w,onChange:ae,onBlur:Be,role:he}),!xe&&!Me?e.createElement(M.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(Q.Z,{isFormDisabled:Re,permissions:$e,ref:ce,layout:ke})):e.createElement(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(y.dO,null)))))))},H=()=>{const re=(0,e.useMemo)(()=>({read:x.Z.settings.roles.read,update:x.Z.settings.roles.update}),[]),{isLoading:D,allowedActions:{canRead:j,canUpdate:_}}=(0,y.ss)(re);return D?e.createElement(y.dO,null):!j&&!_?e.createElement(s.l_,{to:"/"}):e.createElement(ve,null)}},84802:function(X){function F(a,e,y,s){for(var x=-1,k=a==null?0:a.length;++x<k;){var R=a[x];e(s,R,y(R),a)}return s}X.exports=F},62435:function(X,F,a){var e=a(56671);function y(s,x,k,R){return e(s,function(v,S,P){x(R,v,k(v),P)}),R}X.exports=y},85580:function(X,F,a){var e=a(84802),y=a(62435),s=a(88904),x=a(77236);function k(R,v){return function(S,P){var M=x(S)?e:y,T=v?v():{};return M(S,R,s(P,2),T)}}X.exports=k},72091:function(X,F,a){var e=a(40314),y=1/0;function s(x){var k=x==null?0:x.length;return k?e(x,y):[]}X.exports=s},81346:function(X,F,a){var e=a(40999),y=a(85580),s=Object.prototype,x=s.hasOwnProperty,k=y(function(R,v,S){x.call(R,S)?R[S].push(v):e(R,S,[v])});X.exports=k},83828:function(X,F,a){"use strict";a.d(F,{U:function(){return I},y:function(){return M}});var e=a(74512),y=a(32735),s=a(8471),x=a(91045),k=a(72850),R=a(87933),v=a(74971),S=a(49372);const P=({theme:C,expanded:u,variant:N,disabled:Q,error:U})=>U?`1px solid ${C.colors.danger600} !important`:Q?`1px solid ${C.colors.neutral150}`:u?`1px solid ${C.colors.primary600}`:N==="primary"?`1px solid ${C.colors.neutral0}`:`1px solid ${C.colors.neutral100}`,M=(0,s.ZP)(S.Z)``,T=(0,s.ZP)(k.x)`
  border: ${P};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:C})=>C.colors.primary600};

    ${M} {
      color: ${({theme:C,expanded:u})=>u?void 0:C.colors.primary700};
    }

    ${S.Z} {
      color: ${({theme:C,expanded:u})=>u?void 0:C.colors.primary600};
    }

    & > ${R.k} {
      background: ${({theme:C})=>C.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:C})=>C.colors.primary200};
    }
  }
`,I=({children:C,disabled:u=!1,error:N,expanded:Q=!1,hasErrorMessage:U=!0,id:fe,onToggle:A,toggle:K,size:me="M",variant:f="primary",shadow:q})=>{const z=(0,v.M)(fe),ee=y.useMemo(()=>({expanded:Q,onToggle:A,toggle:K,id:z,size:me,variant:f,disabled:u}),[u,Q,z,A,me,K,f]);return(0,e.jsxs)(x.S.Provider,{value:ee,children:[(0,e.jsx)(T,{"data-strapi-expanded":Q,disabled:u,"aria-disabled":u,expanded:Q,hasRadius:!0,variant:f,error:N,shadow:q,children:C}),N&&U&&(0,e.jsx)(k.x,{paddingTop:1,children:(0,e.jsx)(S.Z,{variant:"pi",textColor:"danger600",children:N})})]})}},89966:function(X,F,a){"use strict";a.d(F,{v:function(){return x}});var e=a(74512),y=a(91045),s=a(72850);const x=({children:k,...R})=>{const{expanded:v,id:S}=(0,y.A)();if(!v)return null;const P=`accordion-content-${S}`,M=`accordion-label-${S}`,T=`accordion-desc-${S}`;return(0,e.jsx)(s.x,{role:"region",id:P,"aria-labelledby":M,"aria-describedby":T,...R,children:k})}},91045:function(X,F,a){"use strict";a.d(F,{A:function(){return s},S:function(){return y}});var e=a(32735);const y=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),s=()=>(0,e.useContext)(y)},61762:function(X,F,a){"use strict";a.d(F,{B:function(){return C}});var e=a(74512),y=a(16899),s=a(8471),x=a(83828),k=a(91045);const R=({expanded:u,disabled:N,variant:Q})=>{let U="neutral100";return u?U="primary100":N?U="neutral150":Q==="primary"&&(U="neutral0"),U};var v=a(87933),S=a(99140),P=a(7563),M=a(49372);const T=(0,s.ZP)(P.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:u,expanded:N})=>N?u.colors.primary600:u.colors.neutral500};
    }
  }
`,I=(0,s.ZP)(v.k)`
  min-height: ${({theme:u,size:N})=>u.sizes.accordions[N]};
  border-radius: ${({theme:u,expanded:N})=>N?`${u.borderRadius} ${u.borderRadius} 0 0`:u.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.primary600};
      }
    }
  }
`,C=({title:u,description:N,as:Q="span",togglePosition:U="right",action:fe,...A})=>{const{onToggle:K,toggle:me,expanded:f,id:q,size:z,variant:ee,disabled:ie}=(0,k.A)(),le=`accordion-content-${q}`,Se=`accordion-label-${q}`,Ce=`accordion-desc-${q}`,de=z==="M"?6:4,ve=z==="M"?de:de-2,Oe=R({expanded:f,disabled:ie,variant:ee}),H={as:Q,fontWeight:z==="S"?"bold":void 0,id:Se,textColor:f?"primary600":"neutral700",ellipsis:!0,variant:z==="M"?"delta":void 0},re=f?"primary600":"neutral600",D=f?"primary200":"neutral200",j=z==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{ie||(me&&!K?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),me()):K&&K())},oe=(0,e.jsx)(v.k,{justifyContent:"center",borderRadius:"50%",height:j,width:j,transform:f?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:D,cursor:ie?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(S.J,{as:y.Z,width:z==="M"?`${11/16}rem`:`${8/16}rem`,color:f?"primary600":"neutral600"})});return(0,e.jsx)(I,{paddingBottom:ve,paddingLeft:de,paddingRight:de,paddingTop:ve,background:Oe,expanded:f,size:z,justifyContent:"space-between",cursor:ie?"not-allowed":"",children:(0,e.jsxs)(v.k,{gap:3,flex:1,maxWidth:"100%",children:[U==="left"&&oe,(0,e.jsx)(T,{onClick:_,"aria-disabled":ie,"aria-expanded":f,"aria-controls":le,"aria-labelledby":Se,"data-strapi-accordion-toggle":!0,expanded:f,type:"button",flex:1,minWidth:0,...A,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.y,{...H,children:u}),N&&(0,e.jsx)(M.Z,{as:"p",id:Ce,textColor:re,children:N})]})}),U==="right"&&(0,e.jsxs)(v.k,{gap:3,children:[oe,fe]}),U==="left"&&fe]})})}},11299:function(X,F,a){"use strict";a.d(F,{$:function(){return P},O:function(){return M}});var e=a(74512),y=a(77277),s=a(8471),x=a(72850),k=a(87933),R=a(49372),v=a(3685);const S=(0,s.ZP)(k.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:T})=>T.colors.neutral500};
    }
  }
  :last-of-type ${x.x} {
    display: none;
  }
  :last-of-type ${R.Z} {
    color: ${({theme:T})=>T.colors.neutral800};
    font-weight: ${({theme:T})=>T.fontWeights.bold};
  }
`,P=({children:T})=>(0,e.jsxs)(S,{inline:!0,as:"li",children:[(0,e.jsx)(R.Z,{variant:"pi",textColor:"neutral600",children:T}),(0,e.jsx)(x.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(y.Z,{})})]});P.displayName="Crumb";const M=({children:T,label:I,...C})=>(0,e.jsxs)(k.k,{...C,children:[(0,e.jsx)(v.T,{children:I}),(0,e.jsx)("ol",{"aria-hidden":!0,children:T})]});M.displayName="Breadcrumbs"},47328:function(X,F,a){"use strict";a.d(F,{Q:function(){return R}});var e=a(32735),y=a(60216),s=a(84967);const x=({children:v,label:S,...P})=>{const M=v.map(T=>T.props.value);return e.createElement(e.Fragment,null,e.createElement(s.W,{"data-opt-group":!0,"data-opt-group-children":M,"aria-label":`${S}, ${v.length} items`,...P},S),v)};x.propTypes={children:y.arrayOf(y.node).isRequired,label:y.string.isRequired},x.displayName="OptGroup";var k=a(80084);const R=({options:v,...S})=>e.createElement(k.P,{multi:!0,...S},v.map(({label:P,value:M,children:T})=>T?e.createElement(x,{key:P,label:P},T?.map(I=>e.createElement(s.W,{key:I.value,value:I.value},I.label))):e.createElement(s.W,{key:M,value:M},P)));R.propTypes={options:y.arrayOf(y.object).isRequired}}}]);
