import{al as e,n as p}from"./index-c953d3bd.js";import{y as n,u as i,S as l,p as u}from"./vendor-9cc634b6.js";const A=()=>e.get(`?getAppRequests&token=${p()}`),g=()=>e.get(`?getAppData&token=${p()}`),d=async t=>{const{data:o}=await e.post("Dismissal.Post",t);return o.result},s={listApplication:null,error:null,dataUserApplication:null},r=n(async()=>{const t=await A();try{return t.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),a=n(async()=>{const t=await g();try{return t.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),c=n(async t=>{const o=await d(t);if(o==="ok")return"ok";throw new Error(o)}),w=i();l({from:c.doneData,to:r});u(s).on(a,t=>({...t,error:null})).on(a.doneData,(t,o)=>({...t,dataUserApplication:o})).on(a.failData,(t,o)=>({...t,error:o.message})).on(r,t=>({...t,error:null})).on(r.doneData,(t,o)=>({...t,listApplication:o})).on(r.failData,(t,o)=>({...t,error:o.message})).on(w,()=>({...s}));const m={getApplicationsFx:r,getUserDataApplicationsFx:a,postApplicationFx:c};export{m as e};
