import{j as t}from"./vendor-c0388033.js";import{T as r}from"./index-4ecbe178.js";import{g as i}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a,a as o}from"./get-method-obtaining-fields-561ed2fb.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import{g as s}from"./get-last-year-for-period-e1de6b16.js";import{t as l}from"./index-b07936e6.js";import{A as d}from"./index-93926802.js";import"./send-form-eb97e443.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";import"./create-form-store-3eb7b598.js";const p=e=>({title:"Справка по форме 2-НДФЛ",data:[...i(e),{title:"Период",type:"select",value:null,fieldName:"period",editable:!0,width:"100",required:!0,items:s()},{title:"Количество копий",value:null,fieldName:"number_copies",type:"number",editable:!0,required:!0},...a(),...m("buhg"),...o(),{title:"Текст заявки",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),A=()=>t.jsx(r,{model:l,getForm:p,isSpecialField:!0,formId:d.PERSONA_INCOME_TAX_REFERENCE});export{A as default};
