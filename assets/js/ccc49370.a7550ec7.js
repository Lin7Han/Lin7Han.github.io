"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3249],{2907:(e,t,n)=>{n.d(t,{A:()=>P});n(6540);var a=n(4164),s=n(4096),r=n(4848);function i(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var l=n(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,s.e7)(),{permalink:c,title:d}=n,m=i?"h1":"h2";return(0,r.jsx)(m,{className:(0,a.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=n(1312),m=n(5846),u=n(6266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function p(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:n}=(0,s.e7)(),{date:i,readingTime:l}=n,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}var j=n(6913);const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,s.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,r.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?v.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,a.A)(!l&&(o?"col col--12":"col col--6"),l?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(j.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function b(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(f,{}),(0,r.jsx)(A,{})]})}var N=n(440),y=n(7910);function _(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,s.e7)();return(0,r.jsx)("div",{id:i?N.LU:void 0,className:(0,a.A)("markdown",n),children:(0,r.jsx)(y.A,{children:t})})}var L=n(7559),C=n(4336),k=n(2053);function T(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function w(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(T,{})})}function H(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:n,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=n.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,a.A)("row","margin-top--sm",L.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k.A,{tags:n})})}),e&&(0,r.jsx)(C.A,{className:(0,a.A)("margin-top--sm",L.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,a.A)("col",{"col--9":m}),children:(0,r.jsx)(k.A,{tags:n})}),m&&(0,r.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(w,{blogPostTitle:i,to:e.permalink})})]})}function P(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,a.A)(l,n),children:[(0,r.jsx)(b,{}),(0,r.jsx)(_,{children:t}),(0,r.jsx)(H,{})]})}},3858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(6540);var a=n(4164),s=n(1213),r=n(7559),i=n(4096),l=n(8027),o=n(2907),c=n(1312),d=n(9022),m=n(4848);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,i.e7)(),{title:n,description:a,date:r,tags:l,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.be,{title:n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:r}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=n(5260);function x(){const e=(0,i.J_)();return(0,m.jsx)(h.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=n(7763),f=n(1689);function j(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,i.e7)(),{nextItem:r,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:x}=d;return(0,m.jsxs)(l.A,{sidebar:t,toc:!g&&s.length>0?(0,m.jsx)(p.A,{toc:s,minHeadingLevel:h,maxHeadingLevel:x}):void 0,children:[(0,m.jsx)(f.A,{metadata:a}),(0,m.jsx)(o.A,{children:n}),(r||c)&&(0,m.jsx)(u,{nextItem:r,prevItem:c})]})}function v(e){const t=e.content;return(0,m.jsx)(i.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(x,{}),(0,m.jsx)(j,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},2234:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(4084),r=n(7559),i=n(7293),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,r.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},1689:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(4164),s=n(4084),r=n(7559),i=n(7293),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(s.Yh,{}),className:(0,a.A)(t,r.G.common.draftBanner),children:(0,l.jsx)(s.TT,{})})}var c=n(2234);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(o,{})]})}},9022:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164),s=n(8774),r=n(4848);function i(e){const{permalink:t,title:n,subLabel:i,isNext:l}=e;return(0,r.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},5195:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(6540),s=n(6342);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(8774),u=n(4848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const x=(0,s.p)(),p=c??x.tableOfContents.minHeadingLevel,f=m??x.tableOfContents.maxHeadingLevel,j=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>i({toc:r(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:f}}),[l,o,p,f])),(0,u.jsx)(h,{toc:j,className:n,linkClassName:l,...g})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(5195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=n(4848);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,a.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(s.A,{...n,linkClassName:l,linkActiveClassName:o})})}},6133:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=n(4848);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,i.jsxs)(s.A,{href:t,title:o,className:(0,a.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[n,l&&(0,i.jsx)("span",{children:l})]})}},2053:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),s=n(1312),r=n(6133);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(4848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.A,{...e})},e.permalink)))})]})}},4084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>i,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var a=n(1312),s=n(5260),r=n(4848);function i(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},4315:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var a=n(3384),s=n(1641),r=n(9522),i=n(9754),l=n(4848);var o=n(8936);function c(e){return(0,l.jsx)(s.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)(o.A,{description:e.text})})}var d=n(252);var m=n(4016),u=n(4273);function g(e){return(0,l.jsx)(s.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)(m.A,{gap:"4 0",wrap:!0,children:e.tags.map((e=>(0,l.jsx)(u.A,{color:e.color,children:e.text})))})})}function h(e){const t=[{text:"\u5f15\u64ce\u7248\u672c\uff1a"+e.engineVersion,color:"magenta"},{text:"\u66f4\u65b0\u65e5\u671f\uff1a"+e.lastUpdate,color:"blue"},{text:"\u72b6\u6001\uff1a"+e.status,color:"Complete"==e.status?"green":"In Progress"==e.status?"purple":"volcano"}],n=e.requirements?.map((e=>({text:"\u524d\u7f6e\u77e5\u8bc6\uff1a"+e,color:"cyan"}))),a=e.tags?.map((e=>({text:e.text,color:e.color})));return(0,l.jsxs)(l.Fragment,{children:[e.advanced?(0,l.jsx)(g,{tags:[{text:"\u8fdb\u9636\u5185\u5bb9",color:"red"}]}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("div",{style:{height:e.advanced?5:0}}),(0,l.jsx)(g,{tags:t}),(0,l.jsx)("div",{style:{height:5}}),n?.length>0?(0,l.jsx)(g,{tags:n}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("div",{style:{height:n?.length>0?5:0}}),a?.length>0?(0,l.jsx)(g,{tags:a}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("br",{})]})}const x={...a.A,ZDivider:function(e){return(0,l.jsx)(s.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)(i.A,{children:e.text})})},ZEmpty:c,ZTextWithTips:function(e){const{title:t=e.text,text:n,tips:a,color:i="#00CCEE",width:o=300}=e,c=(0,l.jsx)("div",{style:{width:o},children:(0,l.jsx)("p",{children:a})});return(0,l.jsx)(s.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)("a",{style:{WebkitTextFillColor:i,cursor:"help"},children:(0,l.jsx)(d.A,{title:t||n,content:c,children:n})})})},ZDocHeader:h,ZTags:g,ZPlaceholder:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{engineVersion:"5.4",lastUpdate:"\u65e0",status:"Pending"}),(0,l.jsx)(c,{text:"\u6682\u65e0\u5185\u5bb9"})]})}}}}]);