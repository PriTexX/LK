import{$ as o,g as a,h as s}from"./index-90e61e7c.js";const p=()=>o.get(`?getAppData&token=${a()}`),l=t=>{const e=new FormData;e.set("token",a()),e.set("saveAppData",t.formId);for(const[r,n]of Object.entries(t))e.set(r,n);return o.post(`?saveAppData=${t.formId}`,e,{headers:{"Content-Type":"multipart/form-data"}})},{effects:c,events:f,selectors:m}=s({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:p,post:l}}),u=Object.freeze(Object.defineProperty({__proto__:null,effects:c,events:f,selectors:m},Symbol.toStringTag,{value:"Module"}));export{u as t};
