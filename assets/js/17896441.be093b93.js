"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8401],{2234:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),a=n(4084),i=n(7559),l=n(7293),r=n(4848);function o(e){let{className:t}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(a.Rc,{}),className:(0,s.A)(t,i.G.common.unlistedBanner),children:(0,r.jsx)(a.Uh,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.AE,{}),(0,r.jsx)(o,{...e})]})}},1689:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var s=n(4164),a=n(4084),i=n(7559),l=n(7293),r=n(4848);function o(e){let{className:t}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(a.Yh,{}),className:(0,s.A)(t,i.G.common.draftBanner),children:(0,r.jsx)(a.TT,{})})}var c=n(2234);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||s.unlisted)&&(0,r.jsx)(c.A,{}),s.draft&&(0,r.jsx)(o,{})]})}},1243:(e,t,n)=>{n.d(t,{A:()=>b});n(6540);var s=n(4164),a=n(7559),i=n(6972),l=n(9169),r=n(8774),o=n(1312),c=n(6025),d=n(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(r.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const x={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(r.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function g(e){let{children:t,active:n,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function b(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,x.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(g,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(v,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},833:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var s=n(6540),a=n(1213),i=n(9532),l=n(4848);const r=s.createContext(null);function o(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(r.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(r);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(4581),h=n(7719);function x(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var v=n(1878),g=n(4267),b=n(7559),p=n(2053),j=n(4336);function f(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,r=!!(t||n||s);return i||r?(0,l.jsxs)("footer",{className:(0,u.A)(b.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",b.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(p.A,{tags:a})})}),r&&(0,l.jsx)(j.A,{className:(0,u.A)("margin-top--sm",b.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var A=n(1422),C=n(5195),N=n(1312);const L={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function _(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",L.tocCollapsibleButton,!t&&L.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(N.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const T={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function k(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:r}=(0,A.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(T.tocCollapsible,!i&&T.tocCollapsibleExpanded,n),children:[(0,l.jsx)(_,{collapsed:i,onClick:r}),(0,l.jsx)(A.N,{lazy:!0,className:T.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(C.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const y={tocMobile:"tocMobile_ITEo"};function H(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(k,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(b.G.docs.docTocMobile,y.tocMobile)})}var M=n(7763);function w(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(M.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.G.docs.docTocDesktop})}var E=n(1107),I=n(7910);function B(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(b.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(E.A,{as:"h1",children:n})}),(0,l.jsx)(I.A,{children:t})]})}var V=n(1243),F=n(1689);const O={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function P(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(H,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(w,{})}}(),{metadata:s}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&O.docItemCol),children:[(0,l.jsx)(F.A,{metadata:s}),(0,l.jsx)(v.A,{}),(0,l.jsxs)("div",{className:O.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(V.A,{}),(0,l.jsx)(g.A,{}),n.mobile,(0,l.jsx)(B,{children:t}),(0,l.jsx)(f,{})]}),(0,l.jsx)(x,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function R(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(o,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(P,{children:(0,l.jsx)(n,{})})]})})}},7719:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(1312),a=n(9022),i=n(4848);function l(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(a.A,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(a.A,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164),a=n(1312),i=n(7559),l=n(3025),r=n(4848);function o(e){let{className:t}=e;const n=(0,l.r)();return n.badge?(0,r.jsx)("span",{className:(0,s.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var s=n(4164),a=n(4586),i=n(8774),l=n(1312),r=n(4070),o=n(7559),c=n(3886),d=n(3025),u=n(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function x(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:n,onClick:s,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:l}=(0,r.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:v}=(0,r.HW)(l),g=m??(b=v).docs.find((e=>e.id===b.mainDocId));var b;return(0,u.jsxs)("div",{className:(0,s.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(x,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})})]})}function g(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(v,{className:t,versionMetadata:n}):null}},9022:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(4164),a=n(8774),i=n(4848);function l(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},5195:(e,t,n)=>{n.d(t,{A:()=>v});var s=n(6540),a=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>r(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=o(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(8774),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const x=s.memo(h);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const v=(0,a.p)(),g=c??v.tableOfContents.minHeadingLevel,b=u??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:g,maxHeadingLevel:b});return d((0,s.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:b}}),[r,o,g,b])),(0,m.jsx)(x,{toc:p,className:n,linkClassName:r,...h})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),a=n(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(4848);const r="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.A,{...n,linkClassName:r,linkActiveClassName:o})})}},6133:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4164),a=n(8774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(4848);function r(e){let{permalink:t,label:n,count:r,description:o}=e;return(0,l.jsxs)(a.A,{href:t,title:o,className:(0,s.A)(i.tag,r?i.tagWithCount:i.tagRegular),children:[n,r&&(0,l.jsx)("span",{children:r})]})}},2053:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164),a=n(1312),i=n(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var r=n(4848);function o(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:l.tag,children:(0,r.jsx)(i.A,{...e})},e.permalink)))})]})}},4084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>l,TT:()=>d,Uh:()=>r,Yh:()=>c});n(6540);var s=n(1312),a=n(5260),i=n(4848);function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},4315:(e,t,n)=>{n.d(t,{A:()=>v});n(6540);var s=n(3384),a=n(1641),i=n(9522),l=n(9754),r=n(4848);var o=n(8936);function c(e){return(0,r.jsx)(a.Ay,{theme:{algorithm:i.A.darkAlgorithm},children:(0,r.jsx)(o.A,{description:e.text})})}var d=n(252);var u=n(4016),m=n(4273);function h(e){return(0,r.jsx)(a.Ay,{theme:{algorithm:i.A.darkAlgorithm},children:(0,r.jsx)(u.A,{gap:"4 0",wrap:!0,children:e.tags.map((e=>(0,r.jsx)(m.A,{color:e.color,children:e.text})))})})}function x(e){const t=[{text:"\u5f15\u64ce\u7248\u672c\uff1a"+e.engineVersion,color:"magenta"},{text:"\u66f4\u65b0\u65e5\u671f\uff1a"+e.lastUpdate,color:"blue"},{text:"\u72b6\u6001\uff1a"+e.status,color:"Complete"==e.status?"green":"In Progress"==e.status?"purple":"volcano"}],n=e.requirements?.map((e=>({text:"\u524d\u7f6e\u77e5\u8bc6\uff1a"+e,color:"cyan"}))),s=e.tags?.map((e=>({text:e.text,color:e.color})));return(0,r.jsxs)(r.Fragment,{children:[e.advanced?(0,r.jsx)(h,{tags:[{text:"\u8fdb\u9636\u5185\u5bb9",color:"red"}]}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("div",{style:{height:e.advanced?5:0}}),(0,r.jsx)(h,{tags:t}),(0,r.jsx)("div",{style:{height:5}}),n?.length>0?(0,r.jsx)(h,{tags:n}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("div",{style:{height:n?.length>0?5:0}}),s?.length>0?(0,r.jsx)(h,{tags:s}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("br",{})]})}const v={...s.A,ZDivider:function(e){return(0,r.jsx)(a.Ay,{theme:{algorithm:i.A.darkAlgorithm},children:(0,r.jsx)(l.A,{children:e.text})})},ZEmpty:c,ZTextWithTips:function(e){const{title:t=e.text,text:n,tips:s,color:l="#00CCEE",width:o=300}=e,c=(0,r.jsx)("div",{style:{width:o},children:(0,r.jsx)("p",{children:s})});return(0,r.jsx)(a.Ay,{theme:{algorithm:i.A.darkAlgorithm},children:(0,r.jsx)("a",{style:{WebkitTextFillColor:l,cursor:"help"},children:(0,r.jsx)(d.A,{title:t||n,content:c,children:n})})})},ZDocHeader:x,ZTags:h,ZPlaceholder:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{engineVersion:"5.4",lastUpdate:"\u65e0",status:"Pending"}),(0,r.jsx)(c,{text:"\u6682\u65e0\u5185\u5bb9"})]})}}}}]);