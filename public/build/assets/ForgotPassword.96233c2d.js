import{u as d,o as i,h as u,w as r,b as a,i as s,H as c,c as _,t as f,e as p,a as t,d as w,n as b,j as g}from"./app.794b6a3a.js";import{_ as y}from"./GuestLayout.bf8fa00f.js";import{_ as x,a as h,b as k}from"./TextInput.4575e301.js";import{_ as V}from"./PrimaryButton.c7c1cc80.js";import"./ApplicationLogo.48d2fde2.js";import"./_plugin-vue_export-helper.cdc0426e.js";const v=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},q={__name:"ForgotPassword",props:{status:String},setup(o){const e=d({email:""}),m=()=>{e.post(route("password.email"))};return(F,l)=>(i(),u(y,null,{default:r(()=>[a(s(c),{title:"Forgot Password"}),v,o.status?(i(),_("div",N,f(o.status),1)):p("",!0),t("form",{onSubmit:g(m,["prevent"])},[t("div",null,[a(x,{for:"email",value:"Email"}),a(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(k,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",B,[a(V,{class:b({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{q as default};
