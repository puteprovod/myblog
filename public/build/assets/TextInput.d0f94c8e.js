import{l,v as c,o as s,c as a,b as i,t as u,f as d,m,p}from"./app.bb9d068e.js";const _={class:"text-sm text-red-600"},x={__name:"InputError",props:["message"],setup(e){return(t,o)=>l((s(),a("div",null,[i("p",_,u(e.message),1)],512)),[[c,e.message]])}},f={class:"block font-medium text-sm text-gray-700"},g={key:0},v={key:1},y={__name:"InputLabel",props:["value"],setup(e){return(t,o)=>(s(),a("label",f,[e.value?(s(),a("span",g,u(e.value),1)):(s(),a("span",v,[d(t.$slots,"default")]))]))}},h=["value"],k={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(e){const t=m(null);return p(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),(o,n)=>(s(),a("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:n[0]||(n[0]=r=>o.$emit("update:modelValue",r.target.value)),ref_key:"input",ref:t},null,40,h))}};export{y as _,k as a,x as b};