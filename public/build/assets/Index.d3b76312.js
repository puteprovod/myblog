import{L as c,o as l,c as o,a as t,F as d,g as i,n as x,t as s}from"./app.794b6a3a.js";import{M as p}from"./MainLayout.f7e6323f.js";import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";const g={name:"index",layout:p,props:["accounts"],components:{Link:c},methods:{getColorClass(a){switch(a){case 22:return"bg-green-100 border-green-200";case 23:return"bg-green-100 border-green-200";case 24:return"bg-red-100 border-red-200";case 25:return"bg-indigo-100 border-indigo-200";case 26:return"bg-blue-100 border-blue-200";case 27:return"bg-yellow-100 border-yellow-200"}}}},h={class:"flex flex-col"},_={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},f={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},y={class:"overflow-hidden"},u={class:"min-w-full"},b=t("thead",{class:"border-b"},[t("tr",null,[t("th",{scope:"col",class:"text-sm hidden lg:table-cell font-medium font-bold text-gray-900 px-6 py-4 text-left"}," ## "),t("th",{scope:"col",class:"text-sm font-medium font-bold text-gray-900 px-6 py-4 text-left"}," \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 "),t("th",{scope:"col",class:"text-sm hidden lg:table-cell font-medium font-bold text-gray-900 px-6 py-4 text-left"}," \u0412\u0438\u0434 \u0441\u0447\u0435\u0442\u0430 "),t("th",{scope:"col",class:"text-sm text-center font-medium font-bold text-gray-900 px-6 py-4 text-left"}," \u0411\u0430\u043B\u0430\u043D\u0441 "),t("th",{scope:"col",class:"text-sm font-medium font-bold text-gray-900 px-6 py-4 text-left"}," \u0412\u0430\u043B\u044E\u0442\u0430 "),t("th",{scope:"col",class:"text-sm hidden xl:table-cell text-center font-medium font-bold text-gray-900 px-6 py-4 text-left"}," \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 "),t("th",{scope:"col",class:"text-sm hidden md:table-cell text-center font-medium font-bold text-gray-900 px-6 py-4 text-left"}," \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432 \u20BD ")])],-1),w={class:"text-sm hidden lg:table-cell text-gray-900 w-20 font-light px-4 py-3 whitespace-nowrap"},v=["src"],C={class:"text-sm text-gray-900 font-light px-4 py-3 whitespace-nowrap"},k={class:"px-4 py-3 whitespace-nowrap hidden lg:table-cell text-sm font-medium text-gray-900"},L={class:"text-sm text-gray-900 font-light px-4 py-3 whitespace-nowrap"},B=["value"],F={class:"text-sm text-gray-900 font-light px-4 py-3 whitespace-nowrap"},I={class:"text-sm hidden xl:table-cell text-gray-900 font-light px-4 py-3 whitespace-nowrap"},M={class:"text-sm hidden md:table-cell text-gray-900 font-light px-4 py-3 whitespace-nowrap"};function $(a,z,n,D,E,r){return l(),o("div",h,[t("div",_,[t("div",f,[t("div",y,[t("table",u,[b,t("tbody",null,[(l(!0),o(d,null,i(n.accounts,e=>(l(),o("tr",{class:x(r.getColorClass(e.category_id)+" border-b")},[t("td",w,[t("img",{alt:"image",class:"img-fluid whitespace-nowrap",style:{height:"31px"},src:"/storage/"+e.image},null,8,v)]),t("td",C,s(e.title),1),t("td",k,s(e.category_title),1),t("td",L,[t("input",{class:"rounded-full h-8 w-40 min-w-full text-sm border-gray-400 text-right",name:"value[{{account.id}}]",placeHolder:"value",type:"number",value:e.value},null,8,B)]),t("td",F,s(e.currency_title),1),t("td",I,s(e.comment),1),t("td",M,s(e.cost_formatted)+" \u20BD ",1)],2))),256))])])])])])])}const V=m(g,[["render",$]]);export{V as default};
