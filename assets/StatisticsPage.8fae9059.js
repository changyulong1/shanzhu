import{d as M,T as g,g as x,a as O,c as D,e as C}from"./index.0a90d884.js";import{bE as c,bx as I,bA as _,bF as r,bR as l,by as d,bt as b,bs as f}from"./vendor.c05b4a82.js";import{i as T}from"./echarts.1cef2c9f.js";import"./vant.0f526e14.js";const L="_wrapper_1riph_1",Y="_topItem_1riph_7",B="_sign_1riph_14",F="_bar_wrapper_1riph_26",V="_bar_text_1riph_31",q="_bar_1riph_26",E="_bar_inner_1riph_45",i={wrapper:L,topItem:Y,sign:B,bar_wrapper:F,bar_text:V,bar:q,bar_inner:E},N=c({props:{data:{type:Array}},setup(t,s){const a=I([{tag:{id:1,name:"\u623F\u79DF",sign:"x"},amount:3e3},{tag:{id:2,name:"\u5403\u996D",sign:"x"},amount:1e3},{tag:{id:3,name:"\u5A31\u4E50",sign:"x"},amount:900}]);return _(()=>{const e=a.reduce((o,u)=>o+u.amount,0);return a.map(o=>({...o,percent:Math.round(o.amount/e*100)+"%"}))}),()=>r("div",{class:i.wrapper},[t.data&&t.data.length>0?t.data.map(({tag:e,amount:o,percent:u})=>r("div",{class:i.topItem},[r("div",{class:i.topItem},[r("div",{class:i.sign},[e.sign]),r("div",{class:i.bar_wrapper},[r("div",{class:i.bar_text},[r("span",null,[l(" "),e.name,l(" - "),u,l("% ")]),r("span",null,[l(" \uFFE5"),r(M,{value:o},null),l(" ")])]),r("div",{class:i.bar},[r("div",{class:i.bar_inner,style:{width:`${u}%`}},null)])])])])):r("div",null,[l("\u6CA1\u6709\u6570\u636E")])])}}),P="_wrapper_kkstk_1",G={wrapper:P},R="_wrapper_l54rt_1",U={wrapper:R},W={tooltip:{show:!0,trigger:"axis",formatter:([t])=>{const[s,a]=t.data;return`${new g(new Date(s)).format("YYYY\u5E74MM\u6708DD\u65E5")} \uFFE5${x(a)}`}},grid:[{left:16,top:20,right:16,bottom:20}],xAxis:{type:"time",boundaryGap:["3%","0%"],axisLabel:{formatter:t=>new g(new Date(t)).format("MM-DD")},axisTick:{alignWithLabel:!0}},yAxis:{show:!0,type:"value",splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{show:!1}}},X=c({props:{data:{type:Array,required:!0}},setup(t,s){const a=d();let e;return b(()=>{a.value!==void 0&&(e=T(a.value),e.setOption({...W,series:[{data:t.data,type:"line"}]}))}),f(()=>t.data,()=>{e==null||e.setOption({series:[{data:t.data}]})}),()=>r("div",{ref:a,class:U.wrapper},null)}}),j="_wrapper_1cm6i_1",z={wrapper:j},H={tooltip:{trigger:"item",formatter:t=>{const{name:s,value:a,percent:e}=t;return`${s}: \uFFE5${x(a)} \u5360\u6BD4 ${e}%`}},grid:[{left:0,top:0,right:0,bottom:0}],series:[{type:"pie",radius:"70%",emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},J=c({props:{data:{type:Array}},setup(t,s){const a=d();let e;return b(()=>{a.value!==void 0&&(e=T(a.value),e.setOption(H))}),f(()=>t.data,()=>{e==null||e.setOption({series:[{data:t.data}]})}),()=>r("div",{ref:a,class:z.wrapper},null)}}),K=24*3600*1e3,Q=c({props:{startDate:{type:String,required:!1},endDate:{type:String,required:!1}},setup(t,s){const a=d("expenses"),e=d([]),o=_(()=>{if(!t.startDate||!t.endDate)return[];const p=(new Date(t.endDate).getTime()-new Date(t.startDate).getTime())/K+1;return Array.from({length:p}).map((h,k)=>{const v=new g(t.startDate+"T00:00:00.000+0800").add(k,"day").getTimestamp(),y=e.value[0],A=y&&new Date(y.happen_at+"T00:00:00.000+0800").getTime()===v?e.value.shift().amount:0;return[new Date(v).toISOString(),A]})}),u=async()=>{const n=await D.get("/items/summary",{happen_after:t.startDate,happen_before:t.endDate,kind:a.value,group_by:"happen_at"},{_mock:"itemSummary",_autoLoading:!0});e.value=n.data.groups};b(u),f(()=>a.value,u);const m=d([]),$=_(()=>m.value.map(n=>({name:n.tag.name,value:n.amount}))),S=_(()=>{const n=m.value.reduce((p,h)=>p+h.amount,0);return m.value.map(p=>({...p,percent:Math.round(p.amount/n*100)}))}),w=async()=>{const n=await D.get("/items/summary",{happen_after:t.startDate,happen_before:t.endDate,kind:a.value,group_by:"tag_id"},{_mock:"itemSummary"});m.value=n.data.groups};return b(w),f(()=>a.value,w),()=>r("div",{class:G.wrapper},[r(O,{label:"\u7C7B\u578B",type:"select",options:[{value:"expenses",text:"\u652F\u51FA"},{value:"income",text:"\u6536\u5165"}],modelValue:a.value,"onUpdate:modelValue":n=>a.value=n},null),r(X,{data:o.value},null),r(J,{data:$.value},null),r(N,{data:S.value},null)])}}),rt=c({setup(t,s){return()=>r(C,{rerenderOnSwitchTab:!0,component:Q,hideThisYear:!0},null)}});export{rt as StatisticsPage,rt as default};
