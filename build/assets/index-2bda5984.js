import{s as i,j as r,F as m}from"./vendor-c0388033.js";import{$ as g,g as f,ab as _,h as c,M as u,ad as k,L as x,a3 as d,u as v,W as w,P as S,Q as h,q as I,H as j}from"./index-5a009515.js";import{i as y}from"./is-valid-url-08a91344.js";const C=async e=>(await g.get(`?PDinfo&token=${f()}`)).data,p=_({api:{get:C}}),M=i.div.withConfig({componentId:"sc-19bjbnv-0"})(["width:100%;display:flex;justify-content:space-between;padding:8px 0;box-sizing:border-box;border-radius:var(--brLight);font-size:0.9rem;font-weight:",";span{font-weight:bold;color:",";}"],({bold:e})=>e?600:400,({color:e})=>e),o=({score:e,title:s,bold:t,scoreText:n,color:l})=>r.jsxs(M,{bold:t,color:l??(e>=60?"var(--green)":"var(--red)"),children:[r.jsx("div",{children:s}),r.jsxs("div",{children:[r.jsx("span",{children:e}),n&&r.jsxs("span",{children:[" (",n,")"]})]})]}),P=i.div.withConfig({componentId:"sc-19nk7rm-0"})([""]),L=({data:e})=>{const[s,t,n]=[Number.parseInt((e==null?void 0:e.current_att1)??"0"),Number.parseInt((e==null?void 0:e.current_att2)??"0"),Number.parseInt((e==null?void 0:e.current_att_mid)??"0")],l=Number.parseInt((e==null?void 0:e.last_semestr_balls)??"0");return r.jsxs(P,{children:[r.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за текущий семестр"}),r.jsxs(u,{type:"failure",visible:(e==null?void 0:e.arrear_result)==="не зачтено",title:"Внимание",icon:null,children:["Перенос баллов с прошлого семестра: ",l,". Для закрытия задолженности необходимо в этом семестре набрать дополнительно ",e==null?void 0:e.arrear," баллов."]}),r.jsx(o,{title:"Первая аттестация",score:s,color:"var(--text)"}),r.jsx(o,{title:"Вторая аттестация",score:t,color:"var(--text)"}),r.jsx(o,{title:"Промежуточная аттестация",score:n,color:"var(--text)"})]})},z=i.div.withConfig({componentId:"sc-4hfwok-0"})([""]),N=({data:e})=>r.jsxs(z,{children:[r.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за прошлый семестр"}),r.jsx(o,{title:"Набрано баллов",score:Number.parseInt((e==null?void 0:e.last_semestr_balls)??"0"),scoreText:(e==null?void 0:e.last_semestr_result)??""})]}),X=i.div.withConfig({componentId:"sc-1drw3nr-0"})(["max-width:400px;line-height:1.6rem;"]),q=({data:e})=>{const s=e==null?void 0:e.project_info.split(" ");return r.jsx(X,{children:s==null?void 0:s.map(t=>y(t)?r.jsx("a",{href:t,children:k(t,30)}):t+" ")})},A=({data:e})=>{const s=Number.parseInt((e==null?void 0:e.arrear_balls)??"0"),t=Number.parseInt((e==null?void 0:e.current_semestr_balls)??"0");return r.jsxs("div",{children:[r.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Итог"}),(e==null?void 0:e.arrear)!=="0"&&r.jsx(o,{title:"Баллы в счет погашения долга ",score:s,scoreText:(e==null?void 0:e.arrear_result)??"",color:(e==null?void 0:e.arrear_result)==="зачтено"?"var(--green)":"var(--red)"}),r.jsx(o,{title:"За текущий семестр баллов ",score:t,scoreText:(e==null?void 0:e.current_semestr_result)??""})]})},F=()=>r.jsxs("p",{children:["Дорогие первокурсники! Центр проектной деятельности поздравляет вас с началом занятий. Первое занятие по проектной деятельности состоится онлайн в понедельник, 18.09, начало — в 14:30.",r.jsx("br",{})," Запись трансляции:"," ",r.jsx("a",{href:"https://www.youtube.com/watch?v=cBO1qojfK2o",target:"_blank",rel:"noreferrer",children:"https://www.youtube.com/watch?v=cBO1qojfK2o"}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("a",{href:"https://study.mospolytech.ru/design",target:"_blank",rel:"noreferrer",children:"Описание сфер дизайна"}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("a",{href:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSXXeOtNLltMVN6oPXUoM7_5FjUg26p3GoFhaclhr_ozVMpfLigaEdm4ju9Zlr8f3YFX3RM38eKlCXv/pubhtml?gid=0&single=true",target:"_blank",rel:"noreferrer",children:"Расписание занятий по дисциплине «Введение в проектную деятельность» (1 курс)"}),r.jsx("br",{}),r.jsx("br",{}),"Ожидайте появления информации о проектах первого семестра."]}),G=()=>r.jsxs("p",{children:["Уважаемые студенты!",r.jsx("br",{}),r.jsx("br",{}),"Центр проектной деятельности приглашает вас выбрать проекты, которые вы будете реализовывать в рамках дисциплины «Проектная деятельность» в 2023-2024 учебном году.",r.jsx("br",{}),r.jsx("br",{}),"Порядок действий для выбора проектов:",r.jsx("br",{}),r.jsx("br",{}),"1. Для знакомства с проектами мы создали для вас:",r.jsx("br",{}),"• Сайт-витрину:"," ",r.jsx("a",{href:"http://projects.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:"http://projects.mospolytech.ru/"}),r.jsx("br",{}),"• Телеграм-канал, где вы можете задать вопросы инициаторам проектов, общаться с потенциальными участниками проектов:"," ",r.jsx("a",{href:"https://t.me/cpd_projects",target:"_blank",rel:"noreferrer",children:"https://t.me/cpd_projects"}),r.jsx("br",{}),r.jsx("br",{}),"2. Регистрация на проекты:",r.jsx("br",{}),"10 июля в 14:00 регистрация будет открыта студентам с рейтингом 2**;",r.jsx("br",{}),"12 июля с 14:00 регистрация будет открыта студентам с рейтингом 2** и 1*;",r.jsx("br",{}),"14 июля с 14:00 регистрация будет открыта всем студентам;",r.jsx("br",{}),"16 июля в 23:59 регистрация завершится.",r.jsx("br",{}),r.jsx("br",{}),"Подробная информация:"," ",r.jsx("a",{href:"https://vk.com/wall-78395495_2038",target:"_blank",rel:"noreferrer",children:"https://vk.com/wall-78395495_2038"}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("a",{href:"https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSybcuU7Cv0_IGEg8sP7LD_mxQYu3akGUj_xxKX-5gXtdqcwAeDhtWRM8d4WGqscS3_LIQBWUThqoXk/pubhtml?gid=0&single=true",target:"_blank",rel:"noreferrer",children:"Расписание занятий по проектной деятельности"}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("a",{href:"https://docs.google.com/document/u/1/d/e/2PACX-1vRPlG738Pszk13swt9O1EhABnOdze3M39OoZ8rlkSyNae0fbqm8CFjLx21IPA9gZl6qjVLYdAN1gmEx/pub",target:"_blank",rel:"noreferrer",children:"Регламент начисления баллов"})]}),O=({course:e})=>{if(!e)return null;const s=e==="1";return r.jsx(u,{lineHeight:"1.5rem",fontSize:"0.86rem",type:"info",title:s?"Информация для студентов 1 курса!":"Вниманию студентов 2-4 курсов!",children:s?r.jsx(F,{}):r.jsx(G,{})})},U=i.div.withConfig({componentId:"sc-1kqiekm-0"})(["h3{background:",";background:linear-gradient(to right,"," 0%,"," 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}@media (max-width:1000px){padding:0px;}"],x.blue.main,x.blue.main,x.pink.main),a=i.div.withConfig({componentId:"sc-1kqiekm-1"})(["width:100%;"]),T=()=>{const{data:e,loading:s,error:t}=p.selectors.useData(),{data:{user:n}}=d.useUser(),{open:l}=v(),b=()=>{l(r.jsx(q,{data:e}),"Информация")};return r.jsx(w,{load:()=>p.effects.getFx("1"),loading:s||!1,error:t||null,data:e,children:r.jsx(U,{children:r.jsxs(S,{children:[r.jsx(O,{course:n==null?void 0:n.course}),r.jsxs(a,{children:[r.jsx(h,{fontSize:"0.85rem",children:"Вам назначен проект"}),r.jsx(c,{size:3,align:"left",bottomGap:!0,children:(e==null?void 0:e.project)??"-"}),r.jsxs(h,{children:["Тематика проекта: ",(e==null?void 0:e.project_theme)??"-",r.jsx("br",{}),"Подпроект: ",e!=null&&e.subproject.length?e==null?void 0:e.subproject:"-",r.jsx("br",{}),"Куратор: ",(e==null?void 0:e.curator.length)===0?"-":e==null?void 0:e.curator]}),r.jsx(I,{icon:r.jsx(m,{}),onClick:b,text:"Подробнее",background:"transparent",padding:"12px 0 0 0",height:"30px"}),r.jsx(j,{width:"100%",margin:"16px 0"}),r.jsx(L,{data:e}),(e==null?void 0:e.last_semestr_result)!=="Данные отсутствуют"&&r.jsxs(r.Fragment,{children:[r.jsx(j,{width:"100%",margin:"16px 0"}),r.jsx(N,{data:e})]}),r.jsx(j,{width:"100%",margin:"16px 0"}),r.jsx(A,{data:e})]})]})})})};export{T as default};
