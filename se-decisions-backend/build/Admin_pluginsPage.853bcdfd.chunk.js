"use strict";(self.webpackChunkse_decisions_backend=self.webpackChunkse_decisions_backend||[]).push([[3677],{14928:(M,o,l)=>{l.r(o),l.d(o,{default:()=>P});var e=l(67294),s=l(95489),d=l(15482),u=l(97132),m=l(87751),t=l(28702),p=l(23724);const E=async()=>{const{get:n}=(0,s.getFetchClient)(),{data:a}=await n("/admin/plugins");return a},f=n=>{const a=(0,s.useNotification)();return(0,p.useQuery)("list-enabled-plugins",()=>E(),{onSuccess(){n&&n()},onError(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},h=()=>{const{formatMessage:n}=(0,u.useIntl)(),{notifyStatus:a}=(0,t.useNotifyAT)();(0,s.useFocusWhenNavigate)();const r=n({id:"global.plugins",defaultMessage:"Plugins"}),y=()=>{a(n({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:r}))},{status:g,data:c}=f(y);return g!=="success"&&g!=="error"?e.createElement(t.Layout,null,e.createElement(t.Main,{"aria-busy":!0},e.createElement(s.LoadingIndicatorPage,null))):e.createElement(t.Layout,null,e.createElement(t.Main,null,e.createElement(t.HeaderLayout,{title:r,subtitle:n({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(t.ContentLayout,null,e.createElement(t.Table,{colCount:2,rowCount:c?.plugins?.length??0+1},e.createElement(t.Thead,null,e.createElement(t.Tr,null,e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},n({id:"global.description",defaultMessage:"description"}))))),e.createElement(t.Tbody,null,c.plugins.map(({name:i,displayName:T,description:b})=>e.createElement(t.Tr,{key:i},e.createElement(t.Td,null,e.createElement(t.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},n({id:`global.plugins.${i}`,defaultMessage:T}))),e.createElement(t.Td,null,e.createElement(t.Typography,{textColor:"neutral800"},n({id:`global.plugins.${i}.description`,defaultMessage:b}))))))))))},P=()=>{const{formatMessage:n}=(0,u.useIntl)(),a=n({id:"global.plugins",defaultMessage:"Plugins"});return e.createElement(s.CheckPagePermissions,{permissions:m.Z.marketplace.main},e.createElement(d.Helmet,{title:a}),e.createElement(h,null))}}}]);
