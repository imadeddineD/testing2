import{j as e,R as b,r as c,a as Ie}from"./index-BvNr3HJm.js";import{i as Q}from"./dubai-DCIya0dz.js";import{t as X,a as Y,f as ee}from"./riyadh-CnM2g66z.js";import{f as te}from"./rome-FKHHkyXF.js";import{C as Pe}from"./CourseCard-D0qpurqb.js";import{B as Se}from"./index-c8NMf_dx.js";import{n as $,u as R,S as ne,o as ae,p as T,P as M,q as U,C as Me,N as _e,m as Te}from"./Navbar-BOJ8smfB.js";import{I as De}from"./index-BwQ2wa2M.js";import"./Ratings-DP1H5Lmh.js";import"./index-D-zax1J9.js";import"./iconBase-Bj8e03S0.js";import"./index-vlhiJd1t.js";import"./logo-DGBvTCOr.js";import"./index-D_UzLgZZ.js";import"./clsx-B-dksMZM.js";const Ee=({result:t})=>e.jsx("div",{className:"pt-[0px] pb-2 flex flex-col gap-[15px] justify-center items-center",children:t.length===0?e.jsx("div",{className:" h-[170vh] flex justify-center pt-[140px] text-[22px] font-semibold",children:"Not Found"}):e.jsx("div",{className:"grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-6 border-0 mt-4",children:t})}),Oe=({query:t,handleInputChange:n})=>e.jsxs("div",{className:"w-[100%] h-[50px] bg-transparent relative mt-12 lg:mx-6 mx-auto border border-gray-500 ",children:[e.jsx("div",{className:"absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-[0px] top-0 bg-transparent rounded-r-[5px] ",children:e.jsx("span",{className:"text-gray-500",children:e.jsx(Se,{size:30,className:" text-black"})})}),e.jsx("input",{value:t,onChange:n,type:"search",placeholder:"Search about your course...",className:"bg-transparent border  rounded-[5px] p-2 w-full h-full outline-none text-black  text-[18px] font-[500]"})]});function ke(t){const n=t+"CollectionProvider",[r,a]=$(n),[s,o]=r(n,{collectionRef:{current:null},itemMap:new Map}),d=m=>{const{scope:g,children:C}=m,h=b.useRef(null),v=b.useRef(new Map).current;return e.jsx(s,{scope:g,itemMap:v,collectionRef:h,children:C})};d.displayName=n;const u=t+"CollectionSlot",l=b.forwardRef((m,g)=>{const{scope:C,children:h}=m,v=o(u,C),p=R(g,v.collectionRef);return e.jsx(ne,{ref:p,children:h})});l.displayName=u;const i=t+"CollectionItemSlot",f="data-radix-collection-item",x=b.forwardRef((m,g)=>{const{scope:C,children:h,...v}=m,p=b.useRef(null),j=R(g,p),A=o(i,C);return b.useEffect(()=>(A.itemMap.set(p,{ref:p,...v}),()=>void A.itemMap.delete(p))),e.jsx(ne,{[f]:"",ref:j,children:h})});x.displayName=i;function N(m){const g=o(t+"CollectionConsumer",m);return b.useCallback(()=>{const h=g.collectionRef.current;if(!h)return[];const v=Array.from(h.querySelectorAll(`[${f}]`));return Array.from(g.itemMap.values()).sort((A,w)=>v.indexOf(A.ref.current)-v.indexOf(w.ref.current))},[g.collectionRef,g.itemMap])}return[{Provider:d,Slot:l,ItemSlot:x},N,a]}function re(t,n,{checkForDefaultPrevented:r=!0}={}){return function(s){if(t==null||t(s),r===!1||!s.defaultPrevented)return n==null?void 0:n(s)}}function B({prop:t,defaultProp:n,onChange:r=()=>{}}){const[a,s]=Le({defaultProp:n,onChange:r}),o=t!==void 0,d=o?t:a,u=ae(r),l=c.useCallback(i=>{if(o){const x=typeof i=="function"?i(t):i;x!==t&&u(x)}else s(i)},[o,t,s,u]);return[d,l]}function Le({defaultProp:t,onChange:n}){const r=c.useState(t),[a]=r,s=c.useRef(a),o=ae(n);return c.useEffect(()=>{s.current!==a&&(o(a),s.current=a)},[a,s,o]),r}function Fe(t,n){return c.useReducer((r,a)=>n[r][a]??r,t)}var se=t=>{const{present:n,children:r}=t,a=$e(n),s=typeof r=="function"?r({present:a.isPresent}):c.Children.only(r),o=R(a.ref,Ue(s));return typeof r=="function"||a.isPresent?c.cloneElement(s,{ref:o}):null};se.displayName="Presence";function $e(t){const[n,r]=c.useState(),a=c.useRef({}),s=c.useRef(t),o=c.useRef("none"),d=t?"mounted":"unmounted",[u,l]=Fe(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const i=_(a.current);o.current=u==="mounted"?i:"none"},[u]),T(()=>{const i=a.current,f=s.current;if(f!==t){const N=o.current,m=_(i);t?l("MOUNT"):m==="none"||(i==null?void 0:i.display)==="none"?l("UNMOUNT"):l(f&&N!==m?"ANIMATION_OUT":"UNMOUNT"),s.current=t}},[t,l]),T(()=>{if(n){let i;const f=n.ownerDocument.defaultView??window,x=m=>{const C=_(a.current).includes(m.animationName);if(m.target===n&&C&&(l("ANIMATION_END"),!s.current)){const h=n.style.animationFillMode;n.style.animationFillMode="forwards",i=f.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=h)})}},N=m=>{m.target===n&&(o.current=_(a.current))};return n.addEventListener("animationstart",N),n.addEventListener("animationcancel",x),n.addEventListener("animationend",x),()=>{f.clearTimeout(i),n.removeEventListener("animationstart",N),n.removeEventListener("animationcancel",x),n.removeEventListener("animationend",x)}}else l("ANIMATION_END")},[n,l]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:c.useCallback(i=>{i&&(a.current=getComputedStyle(i)),r(i)},[])}}function _(t){return(t==null?void 0:t.animationName)||"none"}function Ue(t){var a,s;let n=(a=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:a.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?t.ref:(n=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}var Be=Ie.useId||(()=>{}),Ve=0;function oe(t){const[n,r]=c.useState(Be());return T(()=>{r(a=>a??String(Ve++))},[t]),n?`radix-${n}`:""}var V="Collapsible",[We,ie]=$(V),[ze,W]=We(V),le=c.forwardRef((t,n)=>{const{__scopeCollapsible:r,open:a,defaultOpen:s,disabled:o,onOpenChange:d,...u}=t,[l=!1,i]=B({prop:a,defaultProp:s,onChange:d});return e.jsx(ze,{scope:r,disabled:o,contentId:oe(),open:l,onOpenToggle:c.useCallback(()=>i(f=>!f),[i]),children:e.jsx(M.div,{"data-state":q(l),"data-disabled":o?"":void 0,...u,ref:n})})});le.displayName=V;var ce="CollapsibleTrigger",de=c.forwardRef((t,n)=>{const{__scopeCollapsible:r,...a}=t,s=W(ce,r);return e.jsx(M.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":q(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...a,ref:n,onClick:re(t.onClick,s.onOpenToggle)})});de.displayName=ce;var z="CollapsibleContent",ue=c.forwardRef((t,n)=>{const{forceMount:r,...a}=t,s=W(z,t.__scopeCollapsible);return e.jsx(se,{present:r||s.open,children:({present:o})=>e.jsx(qe,{...a,ref:n,present:o})})});ue.displayName=z;var qe=c.forwardRef((t,n)=>{const{__scopeCollapsible:r,present:a,children:s,...o}=t,d=W(z,r),[u,l]=c.useState(a),i=c.useRef(null),f=R(n,i),x=c.useRef(0),N=x.current,m=c.useRef(0),g=m.current,C=d.open||u,h=c.useRef(C),v=c.useRef(void 0);return c.useEffect(()=>{const p=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(p)},[]),T(()=>{const p=i.current;if(p){v.current=v.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const j=p.getBoundingClientRect();x.current=j.height,m.current=j.width,h.current||(p.style.transitionDuration=v.current.transitionDuration,p.style.animationName=v.current.animationName),l(a)}},[d.open,a]),e.jsx(M.div,{"data-state":q(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!C,...o,ref:f,style:{"--radix-collapsible-content-height":N?`${N}px`:void 0,"--radix-collapsible-content-width":g?`${g}px`:void 0,...t.style},children:C&&s})});function q(t){return t?"open":"closed"}var He=le,Ge=de,Ke=ue,Ze=c.createContext(void 0);function Je(t){const n=c.useContext(Ze);return t||n||"ltr"}var y="Accordion",Qe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[H,Xe,Ye]=ke(y),[E,It]=$(y,[Ye,ie]),G=ie(),me=b.forwardRef((t,n)=>{const{type:r,...a}=t,s=a,o=a;return e.jsx(H.Provider,{scope:t.__scopeAccordion,children:r==="multiple"?e.jsx(at,{...o,ref:n}):e.jsx(nt,{...s,ref:n})})});me.displayName=y;var[pe,et]=E(y),[fe,tt]=E(y,{collapsible:!1}),nt=b.forwardRef((t,n)=>{const{value:r,defaultValue:a,onValueChange:s=()=>{},collapsible:o=!1,...d}=t,[u,l]=B({prop:r,defaultProp:a,onChange:s});return e.jsx(pe,{scope:t.__scopeAccordion,value:u?[u]:[],onItemOpen:l,onItemClose:b.useCallback(()=>o&&l(""),[o,l]),children:e.jsx(fe,{scope:t.__scopeAccordion,collapsible:o,children:e.jsx(xe,{...d,ref:n})})})}),at=b.forwardRef((t,n)=>{const{value:r,defaultValue:a,onValueChange:s=()=>{},...o}=t,[d=[],u]=B({prop:r,defaultProp:a,onChange:s}),l=b.useCallback(f=>u((x=[])=>[...x,f]),[u]),i=b.useCallback(f=>u((x=[])=>x.filter(N=>N!==f)),[u]);return e.jsx(pe,{scope:t.__scopeAccordion,value:d,onItemOpen:l,onItemClose:i,children:e.jsx(fe,{scope:t.__scopeAccordion,collapsible:!0,children:e.jsx(xe,{...o,ref:n})})})}),[rt,O]=E(y),xe=b.forwardRef((t,n)=>{const{__scopeAccordion:r,disabled:a,dir:s,orientation:o="vertical",...d}=t,u=b.useRef(null),l=R(u,n),i=Xe(r),x=Je(s)==="ltr",N=re(t.onKeyDown,m=>{var Z;if(!Qe.includes(m.key))return;const g=m.target,C=i().filter(L=>{var J;return!((J=L.ref.current)!=null&&J.disabled)}),h=C.findIndex(L=>L.ref.current===g),v=C.length;if(h===-1)return;m.preventDefault();let p=h;const j=0,A=v-1,w=()=>{p=h+1,p>A&&(p=j)},k=()=>{p=h-1,p<j&&(p=A)};switch(m.key){case"Home":p=j;break;case"End":p=A;break;case"ArrowRight":o==="horizontal"&&(x?w():k());break;case"ArrowDown":o==="vertical"&&w();break;case"ArrowLeft":o==="horizontal"&&(x?k():w());break;case"ArrowUp":o==="vertical"&&k();break}const Re=p%v;(Z=C[Re].ref.current)==null||Z.focus()});return e.jsx(rt,{scope:r,disabled:a,direction:s,orientation:o,children:e.jsx(H.Slot,{scope:r,children:e.jsx(M.div,{...d,"data-orientation":o,ref:l,onKeyDown:a?void 0:N})})})}),D="AccordionItem",[st,K]=E(D),he=b.forwardRef((t,n)=>{const{__scopeAccordion:r,value:a,...s}=t,o=O(D,r),d=et(D,r),u=G(r),l=oe(),i=a&&d.value.includes(a)||!1,f=o.disabled||t.disabled;return e.jsx(st,{scope:r,open:i,disabled:f,triggerId:l,children:e.jsx(He,{"data-orientation":o.orientation,"data-state":je(i),...u,...s,ref:n,disabled:f,open:i,onOpenChange:x=>{x?d.onItemOpen(a):d.onItemClose(a)}})})});he.displayName=D;var ge="AccordionHeader",ve=b.forwardRef((t,n)=>{const{__scopeAccordion:r,...a}=t,s=O(y,r),o=K(ge,r);return e.jsx(M.h3,{"data-orientation":s.orientation,"data-state":je(o.open),"data-disabled":o.disabled?"":void 0,...a,ref:n})});ve.displayName=ge;var F="AccordionTrigger",be=b.forwardRef((t,n)=>{const{__scopeAccordion:r,...a}=t,s=O(y,r),o=K(F,r),d=tt(F,r),u=G(r);return e.jsx(H.ItemSlot,{scope:r,children:e.jsx(Ge,{"aria-disabled":o.open&&!d.collapsible||void 0,"data-orientation":s.orientation,id:o.triggerId,...u,...a,ref:n})})});be.displayName=F;var Ce="AccordionContent",Ne=b.forwardRef((t,n)=>{const{__scopeAccordion:r,...a}=t,s=O(y,r),o=K(Ce,r),d=G(r);return e.jsx(Ke,{role:"region","aria-labelledby":o.triggerId,"data-orientation":s.orientation,...d,...a,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});Ne.displayName=Ce;function je(t){return t?"open":"closed"}var ot=me,it=he,lt=ve,ye=be,Ae=Ne;const we=ot,I=c.forwardRef(({className:t,...n},r)=>e.jsx(it,{ref:r,className:U("border-b",t),...n}));I.displayName="AccordionItem";const P=c.forwardRef(({className:t,children:n,...r},a)=>e.jsx(lt,{className:"flex",children:e.jsxs(ye,{ref:a,className:U("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",t),...r,children:[n,e.jsx(Me,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));P.displayName=ye.displayName;const S=c.forwardRef(({className:t,children:n,...r},a)=>e.jsx(Ae,{ref:a,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r,children:e.jsx("div",{className:U("pb-4 pt-0",t),children:n})}));S.displayName=Ae.displayName;const ct=({handleChange:t})=>{const n={name:"Field",options:[{value:"Programming",label:"Programming"},{value:"Design",label:"Design"},{value:"Finance",label:"Finance"},{value:"Marketing",label:"Marketing"},{value:"Management",label:"Management"}]},r={name:"Price",options:[{value:40,label:40},{value:45,label:45},{value:50,label:50},{value:65,label:65},{value:70,label:70},{value:75,label:75},{value:80,label:80}]};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"md:w-[20%] sm:w-[28%] sm:block hidden mr-3",children:[e.jsx("div",{className:"text-[18px] font-[700] mt-3 text-[#084cfc]",children:"Filter by"}),e.jsx("div",{children:e.jsx("div",{className:"flex flex-col gap-2 justify-center items-start pt-3",children:e.jsxs(we,{type:"multiple",className:"w-full",children:[e.jsxs(I,{value:"business",children:[e.jsx(P,{className:"py-3",children:e.jsx("span",{className:"font-medium text-gray-600",children:n.name})}),e.jsx(S,{className:"animate-none",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("label",{className:"sidebar-label-container",children:e.jsxs("li",{className:"flex items-center text-gray-800 text-[14px]",children:[e.jsx("input",{name:"field",type:"radio",value:"",onChange:t,id:"business",defaultChecked:!0}),e.jsx("label",{htmlFor:"business",className:"ml-2 text-sm",children:"All"})]})}),n.options.map((a,s)=>e.jsxs("li",{className:"flex items-center",children:[e.jsx("input",{name:"field",type:"radio",value:a.value,onChange:t,id:`business-${s}`}),e.jsx("label",{htmlFor:`business-${s}`,className:"ml-2 text-gray-800 text-[14px]",children:a.label})]},a.value))]})})]}),e.jsxs(I,{value:"it",children:[e.jsx(P,{className:"py-3",children:e.jsx("span",{className:"font-medium text-gray-600",children:r.name})}),e.jsx(S,{className:"animate-none",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("label",{className:"sidebar-label-container",children:e.jsxs("li",{className:"flex items-center text-gray-800 text-[14px]",children:[e.jsx("input",{name:"price",type:"radio",value:"",onChange:t,id:"it",defaultChecked:!0}),e.jsx("label",{htmlFor:"it",className:"ml-2 text-sm",children:"All"})]})}),r.options.map((a,s)=>e.jsxs("li",{className:"flex items-center",children:[e.jsx("input",{name:"price",type:"radio",value:a.value,onChange:t,id:`it-${s}`}),e.jsx("label",{htmlFor:`it-${s}`,className:"ml-2 text-gray-800 text-[14px]",children:a.label})]},a.value))]})})]})]})})})]})})},dt=({handleClick:t,handleChange:n})=>{const[r,a]=c.useState(!1),s=()=>{a(l=>!l)},o=()=>{a(!1)},d={name:"مجال",options:[{value:"برمجة",label:"برمجة"},{value:"تصميم",label:"تصميم"},{value:"مالية",label:"مالية"},{value:"تسويق",label:"تسويق"},{value:"إدارة",label:"إدارة"}]},u={name:"السعر",options:[{value:40,label:40},{value:45,label:45},{value:50,label:50},{value:65,label:65},{value:70,label:70},{value:75,label:75},{value:80,label:80}]};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" sm:flex hidden gap-2 justify-center items-center py-3"}),e.jsxs("div",{onClick:s,className:" sm:hidden mr-2 w-[88px] h-[72px] my-[0px] border-[1px] border-solid border-white flex justify-center items-center gap-2 cursor-pointer",children:[e.jsx("div",{children:e.jsx("svg",{width:"23",height:"14",viewBox:"0 0 23 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M21.625 2.875H1.375C1.07663 2.875 0.790483 2.75647 0.579505 2.5455C0.368526 2.33452 0.25 2.04837 0.25 1.75C0.25 1.45163 0.368526 1.16548 0.579505 0.954505C0.790483 0.743526 1.07663 0.625 1.375 0.625H21.625C21.9234 0.625 22.2095 0.743526 22.4205 0.954505C22.6315 1.16548 22.75 1.45163 22.75 1.75C22.75 2.04837 22.6315 2.33452 22.4205 2.5455C22.2095 2.75647 21.9234 2.875 21.625 2.875ZM17.875 8.125H5.125C4.82663 8.125 4.54048 8.00647 4.3295 7.79549C4.11853 7.58452 4 7.29837 4 7C4 6.70163 4.11853 6.41548 4.3295 6.2045C4.54048 5.99353 4.82663 5.875 5.125 5.875H17.875C18.1734 5.875 18.4595 5.99353 18.6705 6.2045C18.8815 6.41548 19 6.70163 19 7C19 7.29837 18.8815 7.58452 18.6705 7.79549C18.4595 8.00647 18.1734 8.125 17.875 8.125ZM13.375 13.375H9.625C9.32663 13.375 9.04048 13.2565 8.8295 13.0455C8.61853 12.8345 8.5 12.5484 8.5 12.25C8.5 11.9516 8.61853 11.6655 8.8295 11.4545C9.04048 11.2435 9.32663 11.125 9.625 11.125H13.375C13.6734 11.125 13.9595 11.2435 14.1705 11.4545C14.3815 11.6655 14.5 11.9516 14.5 12.25C14.5 12.5484 14.3815 12.8345 14.1705 13.0455C13.9595 13.2565 13.6734 13.375 13.375 13.375Z",fill:"white"})})}),e.jsx("div",{children:"تصفية "})]}),e.jsx("div",{className:r?" absolute w-full h-full top-0 left-0 z-10 back":""}),e.jsxs("div",{className:r?"fixed right-0 bottom-0 h-[88vh] sm:hidden bg-black w-[65%] p-8 ease-in duration-300 z-50 overflow-y-scroll":"fixed right-[-100%] h-[88vh] bottom-0 p-8 ease-in duration-300",children:[e.jsxs("div",{className:" flex justify-between",children:[e.jsx("div",{className:" text-[18px] font-[700] text-white",children:"تصفية حسب"}),e.jsx(De,{onClick:o,size:25})]}),e.jsx("div",{}),e.jsx("div",{className:" ",children:e.jsx("div",{className:" flex flex-col gap-2 justify-center items-start pt-3",children:e.jsxs(we,{type:"multiple",className:"w-full",children:[e.jsxs(I,{value:"business",children:[e.jsx(P,{className:"py-3",children:e.jsx("span",{className:"font-medium text-gray-200",children:d.name})}),e.jsx(S,{className:"animate-none",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("label",{className:"sidebar-label-container",children:e.jsxs("li",{className:"flex items-center text-gray-400 text-[14px]",children:[e.jsx("input",{name:"field",type:"radio",value:"",onChange:n,id:"business",defaultChecked:!0}),e.jsx("label",{htmlFor:"business",className:"ml-2 text-sm",children:"All"})]})}),d.options.map((l,i)=>e.jsxs("li",{className:"flex items-center ",children:[e.jsx("input",{name:"field",type:"radio",value:l.value,onChange:n,id:`business-${i}`}),e.jsx("label",{htmlFor:`business-${i}`,className:"ml-2 text-gray-400 text-[14px]",children:l.label})]},l.value))]})})]}),e.jsxs(I,{value:"it",children:[e.jsx(P,{className:"py-3",children:e.jsx("span",{className:"font-medium text-gray-200",children:u.name})}),e.jsx(S,{className:"animate-none",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("label",{className:"sidebar-label-container",children:e.jsxs("li",{className:"flex items-center text-gray-400 text-[14px]",children:[e.jsx("input",{name:"price",type:"radio",value:"",onChange:n,id:"it",defaultChecked:!0}),e.jsx("label",{htmlFor:"it",className:"ml-2 text-sm",children:"All"})]})}),u.options.map((l,i)=>e.jsxs("li",{className:"flex items-center ",children:[e.jsx("input",{name:"price",type:"radio",value:l.value,onChange:n,id:`it-${i}`}),e.jsx("label",{htmlFor:`it-${i}`,className:"ml-2 text-gray-400 text-[14px]",children:l.label})]},l.value))]})})]})]})})})]})]})},ut=()=>{const t=[{_id:"course1",name:"Introduction to Web Development",thumbnail:{url:Q},ratings:4.5,purchased:120,price:50,estimatedPrice:75,courseData:Array(12).fill("Lecture"),field:"Programming"},{_id:"course2",name:"Mastering ReactJS",thumbnail:{url:X},ratings:4.8,purchased:200,price:70,estimatedPrice:100,courseData:Array(20).fill("Lecture"),field:"Programming"},{_id:"course3",name:"Data Science for Beginners",thumbnail:{url:Y},ratings:4.6,purchased:150,price:60,estimatedPrice:90,courseData:Array(15).fill("Lecture"),field:"Programming"},{_id:"course4",name:"Advanced JavaScript Techniques",thumbnail:{url:ee},ratings:4.9,purchased:250,price:80,estimatedPrice:120,courseData:Array(18).fill("Lecture"),field:"Programming"},{_id:"course5",name:"UI/UX Design Fundamentals",thumbnail:{url:te},ratings:4.7,purchased:180,price:65,estimatedPrice:95,courseData:Array(14).fill("Lecture"),field:"Design"},{_id:"course6",name:"Personal Finance Basics",thumbnail:{url:Q},ratings:4.4,purchased:130,price:40,estimatedPrice:60,courseData:Array(10).fill("Lecture"),field:"Finance"},{_id:"course7",name:"Digital Marketing Strategies",thumbnail:{url:X},ratings:4.6,purchased:170,price:55,estimatedPrice:85,courseData:Array(16).fill("Lecture"),field:"Marketing"},{_id:"course8",name:"Modern Business Management",thumbnail:{url:Y},ratings:4.7,purchased:210,price:75,estimatedPrice:100,courseData:Array(22).fill("Lecture"),field:"Management"},{_id:"course9",name:"Social Media Marketing",thumbnail:{url:ee},ratings:4.8,purchased:190,price:60,estimatedPrice:90,courseData:Array(13).fill("Lecture"),field:"Marketing"},{_id:"course10",name:"Successful Team Management",thumbnail:{url:te},ratings:4.5,purchased:160,price:50,estimatedPrice:80,courseData:Array(17).fill("Lecture"),field:"Management"}],[n,r]=c.useState(null),[a,s]=c.useState(""),o=m=>{s(m.target.value)},d=t.filter(m=>m.name.toLowerCase().indexOf(a.toLowerCase())!==-1),u=m=>{r(m.target.value)},l=m=>{r(m.target.value)};function i(m,g,C){let h=m;return C&&(h=d),g&&(h=h.filter(({field:v,proce:p,name:j})=>v===g||p===g||j===g)),h.map((v,p)=>e.jsx(Pe,{item:v},p))}const f=i(t,n,a);console.log("this is the result"),console.log(f);const[x,N]=c.useState("");return e.jsxs("div",{children:[e.jsx("div",{className:" sm:w-[75%] sm:mr-[25%] w-[90%] mx-auto",children:e.jsx(Oe,{query:a,handleInputChange:o})}),e.jsxs("div",{className:" flex justify-between items-start ml-2 mt-4 min-h-[100vh]",children:[e.jsx(ct,{handleChange:u}),e.jsx("div",{className:" md:w-[78%] sm:w-[70%] w-[100%] ",children:e.jsxs("div",{className:"  mx-auto  relative",children:[e.jsx(dt,{handleClick:l,handleChange:u}),e.jsx(Ee,{result:f})]})})]})]})},Pt=()=>e.jsxs("div",{children:[e.jsx(_e,{}),e.jsx(ut,{}),e.jsx(Te,{})]});export{Pt as default};
