import{j as l}from"./vendor-cbee1f3c.js";import{bI as n,ci as s}from"./index-1f9cdbd4.js";import{T as d}from"./index-3c353c15.js";const h=()=>{const{data:{schedule:t,externalSchedule:a,view:o},loading:r}=n.useSchedule(),e=r?s.schedule:a??t??s.schedule;return l.jsx(d,{events:e.session.data,startDate:e.session.startDate,endDate:e.session.endDate,view:o,showDates:!1})};export{h as SessionSchedule,h as default};
