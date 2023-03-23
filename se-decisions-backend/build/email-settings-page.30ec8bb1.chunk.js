"use strict";(self.webpackChunkse_decisions_backend=self.webpackChunkse_decisions_backend||[]).push([[1495],{30077:(Y,m,i)=>{i.r(m),i.d(m,{default:()=>G});var e=i(67294),g=i(97132),n=i(95489),t=i(28702),I=i(41363),Z=i(45697),d=i.n(Z),C=i(27821),s=i(47560);const F=C.default.a`
  color: ${({theme:l})=>l.colors.primary600};
`,p=({config:l})=>{const{formatMessage:a}=(0,g.useIntl)();return e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:4},e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:1},e.createElement(t.Typography,{variant:"delta",as:"h2"},a({id:(0,s.Z)("Settings.email.plugin.title.config"),defaultMessage:"Configuration"})),e.createElement(t.Typography,null,a({id:(0,s.Z)("Settings.email.plugin.text.configuration"),defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.createElement(F,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},a({id:(0,s.Z)("link"),defaultMessage:"Link"}))}))),e.createElement(t.Grid,{gap:5},e.createElement(t.GridItem,{col:6,s:12},e.createElement(t.TextInput,{name:"shipper-email",label:a({id:(0,s.Z)("Settings.email.plugin.label.defaultFrom"),defaultMessage:"Default sender email"}),placeholder:a({id:(0,s.Z)("Settings.email.plugin.placeholder.defaultFrom"),defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:l.settings.defaultFrom})),e.createElement(t.GridItem,{col:6,s:12},e.createElement(t.TextInput,{name:"response-email",label:a({id:(0,s.Z)("Settings.email.plugin.label.defaultReplyTo"),defaultMessage:"Default response email"}),placeholder:a({id:(0,s.Z)("Settings.email.plugin.placeholder.defaultReplyTo"),defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:l.settings.defaultReplyTo})),e.createElement(t.GridItem,{col:6,s:12},e.createElement(t.Select,{name:"email-provider",label:a({id:(0,s.Z)("Settings.email.plugin.label.provider"),defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:l.provider},e.createElement(t.Option,{value:l.provider},l.provider)))))};p.propTypes={config:d().shape({provider:d().string,settings:d().shape({defaultFrom:d().string,defaultReplyTo:d().string})}).isRequired};const x=p;var f=i(53209);const h=f.Ry().shape({email:f.Z_().email(n.translatedErrors.email).required(n.translatedErrors.required)});var R=i(61321);const A=async()=>{const{get:l}=(0,n.getFetchClient)(),{data:a}=await l("/email/settings");return a.config},L=async l=>{const{post:a}=(0,n.getFetchClient)();await a("/email/test",l)},E=()=>{const{formatMessage:l}=(0,g.useIntl)();return e.createElement(e.Fragment,null,e.createElement(n.SettingsPageTitle,{name:l({id:(0,s.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"})}),e.createElement(t.HeaderLayout,{id:"title",title:l({id:(0,s.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"}),subtitle:l({id:(0,s.Z)("Settings.email.plugin.subTitle"),defaultMessage:"Test the settings for the Email plugin"})}))},k=()=>e.createElement(n.CheckPagePermissions,{permissions:R.Z.settings},e.createElement(B,null)),B=()=>{const l=(0,n.useNotification)(),{formatMessage:a}=(0,g.useIntl)(),{lockApp:P,unlockApp:N}=(0,n.useOverlayBlocker)(),{notifyStatus:y}=(0,t.useNotifyAT)();(0,n.useFocusWhenNavigate)();const[u,D]=(0,e.useState)({}),[H,S]=(0,e.useState)(!1),[v,T]=(0,e.useState)(!1),[r,b]=(0,e.useState)(""),[O,M]=(0,e.useState)(!1),[V,$]=(0,e.useState)({provider:"",settings:{defaultFrom:"",defaultReplyTo:"",testAddress:""}});(0,e.useEffect)(()=>{S(!0),A().then(o=>{y(a({id:(0,s.Z)("Settings.email.plugin.notification.data.loaded"),defaultMessage:"Email settings data has been loaded"})),$(o);const c=o?.settings?.testAddress;c&&b(c)}).catch(()=>l({type:"warning",message:a({id:(0,s.Z)("Settings.email.plugin.notification.config.error"),defaultMessage:"Failed to retrieve the email config"})})).finally(()=>S(!1))},[a,l,y]),(0,e.useEffect)(()=>{u.email&&document.querySelector("#test-address-input").focus()},[u]),(0,e.useEffect)(()=>{h.validate({email:r},{abortEarly:!1}).then(()=>M(!0)).catch(()=>M(!1))},[r]);const j=o=>{b(()=>o.target.value)},W=async o=>{o.preventDefault();try{await h.validate({email:r},{abortEarly:!1}),T(!0),P(),L({to:r}).then(()=>{l({type:"success",message:a({id:(0,s.Z)("Settings.email.plugin.notification.test.success"),defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:r})})}).catch(()=>{l({type:"warning",message:a({id:(0,s.Z)("Settings.email.plugin.notification.test.error"),defaultMessage:"Failed to send a test mail to {to}"},{to:r})})}).finally(()=>{T(!1),N()})}catch(c){D((0,n.getYupInnerErrors)(c))}};return H?e.createElement(t.Main,{labelledBy:"title","aria-busy":"true"},e.createElement(E,null),e.createElement(t.ContentLayout,null,e.createElement(n.LoadingIndicatorPage,null))):e.createElement(t.Main,{labelledBy:"title","aria-busy":v},e.createElement(E,null),e.createElement(t.ContentLayout,null,e.createElement("form",{onSubmit:W},e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:7},e.createElement(t.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(x,{config:V})),e.createElement(t.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:4},e.createElement(t.Typography,{variant:"delta",as:"h2"},a({id:(0,s.Z)("Settings.email.plugin.title.test"),defaultMessage:"Test email delivery"})),e.createElement(t.Grid,{gap:5,alignItems:"end"},e.createElement(t.GridItem,{col:6,s:12},e.createElement(t.TextInput,{id:"test-address-input",name:"test-address",onChange:j,label:a({id:(0,s.Z)("Settings.email.plugin.label.testAddress"),defaultMessage:"Recipient email"}),value:r,error:u.email?.id&&a({id:(0,s.Z)(`${u.email?.id}`),defaultMessage:"This is an invalid email"}),placeholder:a({id:(0,s.Z)("Settings.email.plugin.placeholder.testAddress"),defaultMessage:"ex: developer@example.com"})})),e.createElement(t.GridItem,{col:7,s:12},e.createElement(t.Button,{loading:v,disabled:!O,type:"submit",startIcon:e.createElement(I.Envelop,null)},a({id:(0,s.Z)("Settings.email.plugin.button.test-email"),defaultMessage:"Send test email"}))))))))))},G=k}}]);
