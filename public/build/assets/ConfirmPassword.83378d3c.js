import{u as d,o as l,i as m,w as t,a as o,j as a,H as c,b as e,d as u,n as p,k as f}from"./app.06b438e4.js";import{_,a as w}from"./PrimaryButton.81d5c8e1.js";import{_ as b,a as h,b as x}from"./TextInput.c5d5a014.js";import"./ApplicationLogo.2e636ee4.js";import"./_plugin-vue_export-helper.cdc0426e.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(y){const s=d({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(C,r)=>(l(),m(_,null,{default:t(()=>[o(a(c),{title:"Confirm Password"}),g,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[o(b,{for:"password",value:"Password"}),o(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>a(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(x,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",v,[o(w,{class:p(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[u(" Confirm ")]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{j as default};