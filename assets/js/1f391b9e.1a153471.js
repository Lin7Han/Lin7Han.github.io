"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6061],{2234:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(4164),a=t(4084),r=t(7559),s=t(7293),l=t(4848);function c(e){let{className:n}=e;return(0,l.jsx)(s.A,{type:"caution",title:(0,l.jsx)(a.Rc,{}),className:(0,i.A)(n,r.G.common.unlistedBanner),children:(0,l.jsx)(a.Uh,{})})}function o(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.AE,{}),(0,l.jsx)(c,{...e})]})}},1689:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var i=t(4164),a=t(4084),r=t(7559),s=t(7293),l=t(4848);function c(e){let{className:n}=e;return(0,l.jsx)(s.A,{type:"caution",title:(0,l.jsx)(a.Yh,{}),className:(0,i.A)(n,r.G.common.draftBanner),children:(0,l.jsx)(a.TT,{})})}var o=t(2234);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||i.unlisted)&&(0,l.jsx)(o.A,{}),i.draft&&(0,l.jsx)(c,{})]})}},7973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(6540);var i=t(4164),a=t(1213),r=t(7559),s=t(781),l=t(7910),c=t(7763),o=t(1689),d=t(4336);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(4848);function h(e){const{content:n}=e,{metadata:t,assets:h}=n,{title:f,editUrl:x,description:v,frontMatter:g,lastUpdatedBy:p,lastUpdatedAt:A}=t,{keywords:j,wrapperClassName:b,hide_table_of_contents:L}=g,N=h.image??g.image,C=!!(x||A||p);return(0,u.jsx)(a.e3,{className:(0,i.A)(b??r.G.wrapper.mdxPages,r.G.page.mdxPage),children:(0,u.jsxs)(s.A,{children:[(0,u.jsx)(a.be,{title:f,description:v,keywords:j,image:N}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,i.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,i.A)("col",!L&&"col--8"),children:[(0,u.jsx)(o.A,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(l.A,{children:(0,u.jsx)(n,{})})}),C&&(0,u.jsx)(d.A,{className:(0,i.A)("margin-top--sm",r.G.pages.pageFooterEditMetaRow),editUrl:x,lastUpdatedAt:A,lastUpdatedBy:p})]}),!L&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.A,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},5195:(e,n,t)=>{t.d(n,{A:()=>x});var i=t(6540),a=t(6342);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>l(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function o(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=o();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:s}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),o=c(l,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var m=t(8774),u=t(4848);function h(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...h}=e;const x=(0,a.p)(),v=o??x.tableOfContents.minHeadingLevel,g=m??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>s({toc:r(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,i.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[l,c,v,g])),(0,u.jsx)(f,{toc:p,className:t,linkClassName:l,...h})}},7763:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(4164),a=t(5195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=t(4848);const l="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,i.A)(r.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(a.A,{...t,linkClassName:l,linkActiveClassName:c})})}},4084:(e,n,t)=>{t.d(n,{AE:()=>c,Rc:()=>s,TT:()=>d,Uh:()=>l,Yh:()=>o});t(6540);var i=t(1312),a=t(5260),r=t(4848);function s(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(a.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},8354:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var i=t(3384),a=t(1641),r=t(9522),s=t(9754),l=t(4848);var c=t(8936);var o=t(2504);const d={...i.A,ZDivider:function(e){let{text:n}=e;return(0,l.jsx)(a.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)(s.A,{children:n})})},ZEmpty:function(e){let{text:n}=e;return(0,l.jsx)(a.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)(c.A,{description:n})})},ZTextWithTips:function(e){let{title:n,text:t,tips:i,color:s,width:c}=e;n=n||t,s=s||"#00CCEE",c=Number(c||300);const d=(0,l.jsx)("div",{style:{width:c},children:(0,l.jsx)("p",{children:i})});return(0,l.jsx)(a.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)("a",{style:{WebkitTextFillColor:s,cursor:"help"},children:(0,l.jsx)(o.A,{title:n||t,content:d,children:t})})})}}}}]);