"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1422],{1671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var r=t(4848),c=t(8453);const l={sidebar_position:1},s="\u5b9e\u4f8b\u5316",i={id:"unreal/uobject/lifecycle/instancing",title:"\u5b9e\u4f8b\u5316",description:"\u521b\u5efa UObject \u662f\u4e00\u4e2a\u5f88\u9891\u7e41\u7684\u64cd\u4f5c\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u53ef\u4ee5\u662f\u5e94\u7528\u5c42\u4e3b\u52a8\u53d1\u8d77\uff0c\u4e5f\u53ef\u4ee5\u662f\u5f15\u64ce\u521d\u59cb\u5316\u3001\u8d44\u6e90\u52a0\u8f7d\u3001\u7f51\u7edc\u540c\u6b65\u7b49\u5e95\u5c42\u884c\u4e3a\u88ab\u52a8\u53d1\u8d77\u3002",source:"@site/docs/unreal/uobject/lifecycle/instancing.mdx",sourceDirName:"unreal/uobject/lifecycle",slug:"/unreal/uobject/lifecycle/instancing",permalink:"/docs/unreal/uobject/lifecycle/instancing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"unrealSidebar",previous:{title:"\u751f\u547d\u5468\u671f",permalink:"/docs/category/\u751f\u547d\u5468\u671f"}},d={},a=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u5148\u9a8c\u6761\u4ef6",id:"\u5148\u9a8c\u6761\u4ef6",level:2},{value:"\u5206\u914d",id:"\u5206\u914d",level:2},{value:"\u5148\u9a8c\u6761\u4ef6",id:"\u5148\u9a8c\u6761\u4ef6-1",level:3},{value:"\u53c2\u6570\u5904\u7406",id:"\u53c2\u6570\u5904\u7406",level:3},{value:"\u67e5\u627e\u5df2\u6709\u5bf9\u8c61",id:"\u67e5\u627e\u5df2\u6709\u5bf9\u8c61",level:3},{value:"\u5206\u914d/\u590d\u7528\u5185\u5b58",id:"\u5206\u914d\u590d\u7528\u5185\u5b58",level:3},{value:"\u540e\u5904\u7406",id:"\u540e\u5904\u7406",level:3},{value:"\u6784\u9020",id:"\u6784\u9020",level:2},{value:"FObjectInitializer",id:"fobjectinitializer",level:3},{value:"\u7c7b\u6784\u9020\u51fd\u6570",id:"\u7c7b\u6784\u9020\u51fd\u6570",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u540e\u5904\u7406",id:"\u540e\u5904\u7406-1",level:2}];function j(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{ZDivider:t,ZEmpty:l}=n;return t||h("ZDivider",!0),l||h("ZEmpty",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5b9e\u4f8b\u5316",children:"\u5b9e\u4f8b\u5316"})}),"\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa ",(0,r.jsx)(n.code,{children:"UObject"})," \u662f\u4e00\u4e2a\u5f88\u9891\u7e41\u7684\u64cd\u4f5c\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u53ef\u4ee5\u662f\u5e94\u7528\u5c42\u4e3b\u52a8\u53d1\u8d77\uff0c\u4e5f\u53ef\u4ee5\u662f\u5f15\u64ce\u521d\u59cb\u5316\u3001\u8d44\u6e90\u52a0\u8f7d\u3001\u7f51\u7edc\u540c\u6b65\u7b49\u5e95\u5c42\u884c\u4e3a\u88ab\u52a8\u53d1\u8d77\u3002\r\n\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.code,{children:"UObject"})," \u7684\u5b9e\u4f8b\u5316\u7531\u5de5\u5382\u51fd\u6570 ",(0,r.jsx)(n.code,{children:"StaticConstructObject_Internal()"})," \u63a5\u7ba1\uff0c\u8fd9\u4e2a\u51fd\u6570\u4f1a\u6267\u884c ",(0,r.jsx)(n.code,{children:"UObject"})," \u5b9e\u4f8b\u5316\u7684\u5fc5\u8981\u64cd\u4f5c\uff0c\u8fd8\u4f1a\u989d\u5916\u505a\u4e00\u4e9b\u68c0\u67e5\u548c\u5e7f\u64ad\u7684\u64cd\u4f5c\u3002\r\n\u5f15\u64ce\u5e95\u5c42\u5728\u8fd0\u884c\u65f6\u521b\u5efa ",(0,r.jsx)(n.code,{children:"UObject"})," \u7684\u65f6\u5019\u5927\u591a\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff0c\u66b4\u9732\u7ed9\u5e94\u7528\u5c42\u7684 ",(0,r.jsx)(n.code,{children:"NewObject<T>()"})," \u6a21\u677f\u5185\u90e8\u5b9e\u9645\u6267\u884c\u7684\u4e5f\u662f\u8fd9\u4e2a\u51fd\u6570\u3002\r\n\u9759\u6001\u521d\u59cb\u5316\u9636\u6bb5\u7531\u4e8e\u4e0d\u80fd\u4fdd\u8bc1 ",(0,r.jsx)(n.code,{children:"CoreUObject"})," \u6a21\u5757\u5df2\u5c31\u7eea\uff0c\u6240\u4ee5\u6709\u7279\u6b8a\u7684\u5b9e\u4f8b\u5316\u6d41\u7a0b\uff0c\u672c\u6587\u4e0d\u5c55\u5f00\u5206\u6790\u8fd9\u79cd\u60c5\u51b5\u3002\r\n\u6b64\u5916\uff0c\u6709\u7684\u6a21\u5757\u4e5f\u4f1a\u9009\u62e9\u624b\u52a8\u6784\u9020 UObject\uff0c\u5982 ",(0,r.jsx)(n.code,{children:"ConvertScalarJsonValueToFPropertyWithContainer()"})," \u4e2d\u5728\u5c06 ",(0,r.jsx)(n.code,{children:"JsonObject"})," \u89e3\u6790\u6210 ",(0,r.jsx)(n.code,{children:"UObject"})," \u65f6\u5c31\u9009\u62e9\u4e86\u624b\u52a8\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u6d4f\u89c8 ",(0,r.jsx)(n.code,{children:"StaticConstructObject_Internal"})," \u7684\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0\uff0c\u6574\u4e2a\u5b9e\u4f8b\u5316\u8fc7\u7a0b\u53ef\u4ee5\u603b\u7ed3\u4e3a",(0,r.jsx)(n.code,{children:"\u5206\u914d"}),"\u3001",(0,r.jsx)(n.code,{children:"\u6784\u9020"}),"\u3001",(0,r.jsx)(n.code,{children:"\u521d\u59cb\u5316"}),"\u4e09\u6b65\u3002\r\n\u4e0b\u9762\u8be6\u7ec6\u5206\u6790 ",(0,r.jsx)(n.code,{children:"StaticConstructObject_Internal"})," \u8fd9\u4e2a\u51fd\u6570\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"StaticConstructObject_Internal"})," \u7684\u53c2\u6570\u7c7b\u578b\u662f ",(0,r.jsx)(n.code,{children:"FStaticConstructObjectParameters"}),"\u3002\r\n",(0,r.jsx)(n.code,{children:"NewObject"})," \u7684\u4e0d\u540c\u91cd\u8f7d\u5c31\u662f\u901a\u8fc7\u7ed9\u8fd9\u4e2a\u53c2\u6570\u4f20\u4e0d\u540c\u7684\u503c\u6765\u63a7\u5236 ",(0,r.jsx)(n.code,{children:"StaticConstructObject_Internal"})," \u7684\u5177\u4f53\u884c\u4e3a\u7684\u3002\r\n\u6d4f\u89c8\u8fd9\u4e2a\u53c2\u6570\u7684\u7c7b\u5b9a\u4e49\u53ef\u4ee5\u53d1\u73b0\uff0c\u5b83\u6709\u5f88\u591a\u4e2a\u53c2\u6570\uff0c\u800c ",(0,r.jsx)(n.code,{children:"NewObject"})," \u53ea\u7528\u5230\u4e86\u5176\u4e2d\u7684\u4e00\u5c0f\u90e8\u5206\uff0c\u8fd9\u8bf4\u660e\u5927\u90e8\u5206\u53c2\u6570\u662f\u4e0d\u9700\u8981\u5e94\u7528\u5c42\u5173\u5fc3\u7684\u3002\r\n\u4f46\u5bf9\u4e8e\u5e93\u548c\u6846\u67b6\u7684\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u8fd9\u90e8\u5206\u53c2\u6570\u53ef\u80fd\u662f\u6709\u610f\u4e49\u7684\uff0c\u56e0\u6b64\u5728\u5fc5\u8981\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u4e5f\u4f1a\u76f4\u63a5\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"StaticConstructObject_Internal"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f ",(0,r.jsx)(n.code,{children:"FStaticConstructObjectParameters"})," \u4e2d\u7684\u6240\u6709\u53c2\u6570\uff1a"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d"}),(0,r.jsx)(n.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u4f5c\u7528"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Class"}),(0,r.jsx)(n.td,{children:"const UClass*"}),(0,r.jsx)(n.td,{children:"\u6307\u5b9a\u5f85\u521b\u5efa\u5bf9\u8c61\u7684\u7c7b\u578b\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Outer"}),(0,r.jsx)(n.td,{children:"UObject*"}),(0,r.jsx)(n.td,{children:"\u6307\u5b9a\u5f85\u521b\u5efa\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Name"}),(0,r.jsx)(n.td,{children:"FName"}),(0,r.jsx)(n.td,{children:"\u6307\u5b9a\u5f85\u521b\u5efa\u5bf9\u8c61\u7684\u5bf9\u8c61\u540d\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SetFlags"}),(0,r.jsx)(n.td,{children:"EObjectFlags"}),(0,r.jsx)(n.td,{children:"\u6307\u5b9a\u5f85\u521b\u5efa\u5bf9\u8c61\u7684\u6807\u7b7e\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"InternalSetFlags"}),(0,r.jsx)(n.td,{children:"EInternalObjectFlags"}),(0,r.jsx)(n.td,{children:"\u6307\u5b9a\u5f85\u521b\u5efa\u5bf9\u8c61\u7684\u5185\u90e8\u6807\u7b7e\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bCopyTransientsFromClassDefaults"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsxs)(n.td,{children:["\u662f\u5426\u4ece ",(0,r.jsx)(n.code,{children:"CDO"})," \u62f7\u8d1d ",(0,r.jsx)(n.code,{children:"Transient"})," \u5c5e\u6027\u800c\u4e0d\u662f\u4ece ",(0,r.jsx)(n.code,{children:"Archetype"})," \u62f7\u8d1d\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bAssumeTemplateIsArchetype"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsxs)(n.td,{children:["Template \u662f\u5426\u4e3a ",(0,r.jsx)(n.code,{children:"Archetype"})," \u800c\u4e0d\u662f ",(0,r.jsx)(n.code,{children:"CDO"}),"\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Template"}),(0,r.jsx)(n.td,{children:"UObject*"}),(0,r.jsx)(n.td,{children:"\u6307\u5b9a\u5f85\u521b\u5efa\u5bf9\u8c61\u7684\u6a21\u677f\uff0c\u7528\u4e8e\u62f7\u8d1d\u9ed8\u8ba4\u503c\u548c\u5b50\u5bf9\u8c61\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"InstanceGraph"}),(0,r.jsx)(n.td,{children:"FObjectInstancingGraph*"}),(0,r.jsx)(n.td,{children:"@TODO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ExternalPackage"}),(0,r.jsx)(n.td,{children:"UPackage*"}),(0,r.jsx)(n.td,{children:"@TODO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PropertyInitCallback"}),(0,r.jsx)(n.td,{children:"TFunction<void()>"}),(0,r.jsx)(n.td,{children:"\u6307\u5b9a\u5f85\u521b\u5efa\u5bf9\u8c61\u5c5e\u6027\u521d\u59cb\u5316\u5b8c\u6210\u540e\u7684\u56de\u8c03\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5148\u9a8c\u6761\u4ef6",children:"\u5148\u9a8c\u6761\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp - StaticConstructObject_Internal()\r\n#if WITH_EDITORONLY_DATA\r\ncheck(InOuter == nullptr || !UE::IsSavingPackage(Params.ExternalPackage ? Params.ExternalPackage : InOuter->GetPackage()));\r\n#endif\r\n\r\ncheck(!InTemplate || InTemplate->IsA(InClass) || (InFlags & RF_ClassDefaultObject));\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u90e8\u5206\u505a\u4e86\u4e24\u6761\u6821\u9a8c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9996\u5148\uff0c\u5728\u7f16\u8f91\u5668\u73af\u5883\u4e0b\uff0c\u9700\u8981\u786e\u4fdd\u5f85\u521b\u5efa\u5bf9\u8c61\u7684 Package \u6ca1\u6709\u5728\u8fdb\u884c\u4fdd\u5b58\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u5176\u6b21\uff0c\u4ee5\u4e0b\u4e09\u4e2a\u6761\u4ef6\u81f3\u5c11\u8981\u6ee1\u8db3\u4e00\u4e2a\uff1a","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Template"})," \u662f ",(0,r.jsx)(n.code,{children:"nullptr"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Template"})," \u662f\u5f85\u521b\u5efa\u5bf9\u8c61\u7c7b\u578b\u7684\u5b50\u7c7b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SetFlags"})," \u5305\u542b ",(0,r.jsx)(n.code,{children:"RF_ClassDefaultObject"}),"\uff0c\u5373\u5f85\u521b\u5efa\u5bf9\u8c61\u662f ",(0,r.jsx)(n.code,{children:"CDO"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u8fd9\u4e09\u4e2a\u6761\u4ef6\u53ef\u4ee5\u77e5\u9053\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CDO"})," \u65e0\u89c6 ",(0,r.jsx)(n.code,{children:"Template"})," \u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Template"})," \u7684\u7c7b\u578b\u4e0d\u8981\u6c42\u7cbe\u786e\u5339\u914d\u5f85\u521b\u5efa\u5bf9\u8c61\u7684\u7c7b\u578b\uff0c\u4f46\u5fc5\u987b\u662f\u5b50\u7c7b\uff0c\u4ee5\u786e\u4fdd ",(0,r.jsx)(n.code,{children:"Template"})," \u5305\u542b\u6240\u6709\u65b0\u5bf9\u8c61\u6240\u9700\u7684\u5c5e\u6027\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Template"})," \u53ef\u4ee5\u4e3a\u7a7a\uff0c\u6b64\u65f6\u5e94\u8be5\u4f1a\u4ece ",(0,r.jsx)(n.code,{children:"CDO"})," \u62f7\u8d1d\u9ed8\u8ba4\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5206\u914d",children:"\u5206\u914d"}),"\n",(0,r.jsxs)(n.p,{children:["\u9a8c\u8bc1\u901a\u8fc7\u540e\uff0c\u4f1a\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"StaticAllocateObject()"})," \u4e3a\u5bf9\u8c61\u5206\u914d\u5185\u5b58\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.h\r\nUObject* StaticAllocateObject(\r\n\tconst UClass*\tInClass,\r\n\tUObject* InOuter,\r\n\tFName\tInName,\r\n\tEObjectFlags InFlags,\r\n\tEInternalObjectFlags InternalSetFlags,\r\n\tbool bCanRecycleSubobjects,\r\n\tbool* bOutRecycledSubobject,\r\n\tUPackage* ExternalPackage);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u51fd\u6570\u4f1a\u6309\u7167\u4f20\u5165\u7684\u7c7b\u578b\u5206\u914d\u4e00\u5757",(0,r.jsx)(n.code,{children:"\u90e8\u5206\u521d\u59cb\u5316\u7684"}),"\u5185\u5b58\u6216\u590d\u7528\u4e00\u5757\u5df2\u5206\u914d\u5185\u5b58\uff0c\u540e\u7eed\u9700\u8981\u5916\u90e8\u5bf9\u8fd9\u5757\u5185\u5b58\u8fdb\u884c\u521d\u59cb\u5316\u3002\r\n\u5728\u5206\u914d\u5185\u5b58\u4e4b\u524d\uff0c\u9700\u8981\u505a\u4e00\u4e9b\u9884\u5904\u7406\u5de5\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5148\u9a8c\u6761\u4ef6-1",children:"\u5148\u9a8c\u6761\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp - StaticAllocateObject()\r\ncheckSlow(InOuter != INVALID_OBJECT);\r\ncheck(!InClass || (InClass->ClassWithin && InClass->ClassConstructor));\r\n#if WITH_EDITOR\r\nif (GIsEditor)\r\n{\r\n\tif (StaticAllocateObjectErrorTests(InClass,InOuter,InName,InFlags))\r\n\t{\r\n\t\treturn NULL;\r\n\t}\r\n}\r\n#endif\r\nconst bool bCreatingCDO = (InFlags & RF_ClassDefaultObject) != 0;\r\nconst bool bCreatingArchetype = (InFlags & RF_ArchetypeObject) != 0;\r\n\r\ncheck(InClass);\r\ncheck(InOuter || (InClass == UPackage::StaticClass() && InName != NAME_None));\r\ncheck(GIsEditor || !FScopedAllowAbstractClassAllocation::IsDisallowedAbstractClass(InClass, InFlags));\r\ncheck(bCreatingCDO || bCreatingArchetype || !InOuter || InOuter->IsA(InClass->ClassWithin));\r\ncheck(!IsGarbageCollectingAndLockingUObjectHashTables());\r\n\r\nif (bCreatingCDO)\r\n{\r\n\tcheck(InClass->GetClass());\r\n\tensureMsg(!GIsDuplicatingClassForReinstancing || InClass->HasAnyClassFlags(CLASS_Native));\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u505a\u4e86\u5f88\u591a\u6821\u9a8c\uff0c\u5176\u4e2d\u6bd4\u8f83\u91cd\u8981\u7684\u6709\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Class"})," \u5fc5\u987b\u662f\u6709\u6548\u7684\u2014\u2014\u975e\u7a7a\uff0c\u6709 ",(0,r.jsx)(n.code,{children:"Within"})," \u548c ",(0,r.jsx)(n.code,{children:"Constructor"}),"\u3002",(0,r.jsx)(n.code,{children:"Native"})," \u7c7b\u7684 ",(0,r.jsx)(n.code,{children:"Within"})," \u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"UCLASS(Within = ...)"})," \u6307\u5b9a\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u5219\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"UObject::StaticClass()"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c ",(0,r.jsx)(n.code,{children:"Outer"})," \u4e3a\u7a7a\uff0c\u5219 ",(0,r.jsx)(n.code,{children:"Class"})," \u5fc5\u987b\u4e3a ",(0,r.jsx)(n.code,{children:"UPackage::StaticClass()"})," \u4e14\u5bf9\u8c61\u540d\u4e0d\u4e3a\u7a7a\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Class"})," \u4e0d\u80fd\u662f\u62bd\u8c61\u7c7b\u3002\u5728\u7f16\u8f91\u5668\u4e0b\u4ec5\u4e3a\u4e00\u6761\u8b66\u544a\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u7f16\u8f91\u5668\u5728\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\u9700\u8981\u653e\u5bbd\u8fd9\u4e2a\u6761\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Outer"})," \u5fc5\u987b\u662f\u5f85\u521b\u5efa\u5bf9\u8c61\u7c7b\u578b\u7684 ",(0,r.jsx)(n.code,{children:"Within"})," \u7c7b\u578b\u7684\u5b50\u7c7b\uff0c\u9664\u975e\u6b63\u5728\u521b\u5efa\u7684\u5bf9\u8c61\u662f ",(0,r.jsx)(n.code,{children:"CDO"})," \u6216 ",(0,r.jsx)(n.code,{children:"Archetype"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u80fd\u6b63\u5728\u8fdb\u884c\u5783\u573e\u56de\u6536\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u6b63\u5728\u521b\u5efa ",(0,r.jsx)(n.code,{children:"CDO"}),"\uff0c\u5219\u9700\u8981\u786e\u4fdd ",(0,r.jsx)(n.code,{children:"Class->ClassPrivate"})," \u6709\u6548\u3002",(0,r.jsx)(n.code,{children:"Native"})," \u7c7b\u9759\u6001\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u786e\u5b9e\u4f1a\u6709\u4e00\u6bb5\u65f6\u95f4 ",(0,r.jsx)(n.code,{children:"ClassPrivate"})," \u4e3a\u7a7a\uff0c\u8fd9\u91cc\u4e0d\u5c55\u5f00\u5206\u6790\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u53c2\u6570\u5904\u7406",children:"\u53c2\u6570\u5904\u7406"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp - StaticAllocateObject()\r\nif (bCreatingCDO)\r\n{\r\n\tInName = InClass->GetDefaultObjectName();\r\n\tInFlags &= ~(RF_NeedPostLoad|RF_NeedPostLoadSubobjects);\r\n}\r\n\r\nif (InName == NAME_None)\r\n{\r\n\tInName = MakeUniqueObjectName(InOuter, InClass);\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u5bf9\u8fb9\u754c\u6761\u4ef6\u505a\u4e86\u4e00\u4e9b\u5904\u7406\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CDO"})," \u7684\u5bf9\u8c61\u540d\u4e0d\u4f7f\u7528\u4f20\u5165\u7684\u540d\u5b57\uff0c\u800c\u662f\u7531\u5b83\u7684\u7c7b\u578b\u51b3\u5b9a\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CDO"})," \u4e0d\u4f1a\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"UObject::PostLoad()"})," \u548c ",(0,r.jsx)(n.code,{children:"UObject::PostLoadSubobjects()"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u672a\u4f20\u5165\u540d\u5b57\uff0c\u5219\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"MakeUniqueObjectName()"})," \u521b\u5efa\u4e00\u4e2a\u552f\u4e00\u540d\u5b57\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u67e5\u627e\u5df2\u6709\u5bf9\u8c61",children:"\u67e5\u627e\u5df2\u6709\u5bf9\u8c61"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp - StaticAllocateObject()\r\nif (InName == NAME_None)\r\n{\r\n\tInName = MakeUniqueObjectName(InOuter, InClass);\r\n}\r\nelse\r\n{\r\n\tObj = StaticFindObjectFastInternal(nullptr, InOuter, InName, true);\r\n\tcheck(!Obj || Obj->GetClass()->IsChildOf(InClass));\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5904\u7406\u540d\u5b57\u53c2\u6570\u7684\u53e6\u4e00\u4e2a\u5206\u652f\u4e2d\uff0c\u5982\u679c\u4f20\u5165\u7684\u540d\u5b57\u4e0d\u4e3a\u7a7a\uff0c\u5219\u5148\u67e5\u8be2\u5185\u5b58\u4e2d\u662f\u5426\u5df2\u6709\u540c\u540d\u5bf9\u8c61\uff0c\u67e5\u8be2\u7ed3\u679c\u5fc5\u987b\u4e3a\u4ee5\u4e0b\u4e24\u8005\u4e4b\u4e00\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5bf9\u8c61\u4e0d\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5bf9\u8c61\u5df2\u5b58\u5728\u5e76\u4e14\u662f\u5f85\u521b\u5efa\u5bf9\u8c61\u7c7b\u578b\u7684\u5b50\u7c7b\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u914d\u590d\u7528\u5185\u5b58",children:"\u5206\u914d/\u590d\u7528\u5185\u5b58"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u6839\u636e\u4e0a\u4e00\u6b65\u7684\u67e5\u8be2\u7ed3\u679c\u5206\u4e3a\u4e24\u6761\u8def\u5f84\uff1a",(0,r.jsx)(n.code,{children:"\u5185\u5b58\u5206\u914d"}),"\u548c",(0,r.jsx)(n.code,{children:"\u5185\u5b58\u590d\u7528"}),"\u3002"]}),"\n",(0,r.jsx)(t,{text:"\u5206\u914d\u5185\u5b58"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp - StaticAllocateObject()\r\nif( Obj == nullptr )\r\n{\t\r\n\tint32 Alignment\t= FMath::Max(4, InClass->GetMinAlignment());\r\n\tObj = (UObject*)GUObjectAllocator.AllocateUObject(TotalSize, Alignment, GIsInitialLoad);\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5185\u5b58\u4e2d\u6ca1\u6709\u540c\u540d\u5bf9\u8c61\uff0c\u5219\u9700\u8981\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"GUObjectAllocator.AllocateUObject()"})," \u65b0\u5206\u914d\u4e00\u5757\u5185\u5b58\u7ed9\u5f85\u521b\u5efa\u5bf9\u8c61\u3002\u800c\u8fd9\u91cc\u53c8\u5206\u4e3a\u4e24\u79cd\u60c5\u51b5\uff1a",(0,r.jsx)(n.code,{children:"Free Store"})," \u548c ",(0,r.jsx)(n.code,{children:"Permanent Object Pool"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectAllocator.cpp - FUObjectAllocator::AllocateUObject()\r\nbAllowPermanent &= PermanentObjectPool != nullptr;\r\nconst bool bPlaceInPerm = bAllowPermanent && (Align(PermanentObjectPoolTail, Alignment) + Size) <= (PermanentObjectPool + PermanentObjectPoolSize);\r\nif (bPlaceInPerm)\r\n{\r\n\tuint8* AlignedPtr = Align(PermanentObjectPoolTail, Alignment);\r\n\tPermanentObjectPoolTail = AlignedPtr + Size;\r\n\tResult = (UObjectBase*)AlignedPtr;\r\n\tif (PermanentObjectPoolExceededTail < PermanentObjectPoolTail)\r\n\t{\r\n\t\tPermanentObjectPoolExceededTail = PermanentObjectPoolTail;\r\n\t}\r\n}\r\nelse\r\n{\r\n\tResult = (UObjectBase*)FMemory::Malloc(Size, Alignment);\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Free Store"})," \u5bf9\u5e94 ",(0,r.jsx)(n.code,{children:"else"})," \u5206\u652f\uff0c\u4f7f\u7528\u5e38\u89c4\u7684 ",(0,r.jsx)(n.code,{children:"FMemory::Malloc()"})," \u5c06\u5185\u5b58\u5206\u914d\u5728\u5806\u5185\u5b58\u4e0a\u7684\u968f\u673a\u4f4d\u7f6e\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Permanent Object Pool"})," \u5bf9\u5e94 ",(0,r.jsx)(n.code,{children:"if"})," \u5206\u652f\uff0c\u4f7f\u7528\u4e00\u5757\u9884\u5148\u5206\u914d\u597d\u7684\u3001\u56fa\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\u6c60\u5206\u914d\u5185\u5b58\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053\uff0c\u4f7f\u7528\u5185\u5b58\u6c60\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GUObjectAllocator.AllocateUObject()"})," \u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3a ",(0,r.jsx)(n.code,{children:"true"}),"\uff0c\u5373\u7528\u6237\u5141\u8bb8\u4f7f\u7528\u5185\u5b58\u6c60\u5206\u914d\u5185\u5b58\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5f15\u64ce\u5f00\u542f\u4e86\u6301\u4e45\u5316\u5bf9\u8c61\u6c60\u7279\u6027 \uff0c\u901a\u8fc7\u5c06 ",(0,r.jsx)(n.code,{children:"[/Script/Engine.GarbageCollectionSettings]"})," \u6bb5\u7684 ",(0,r.jsx)(n.code,{children:"gc.SizeOfPermanentObjectPool"})," \u5b57\u6bb5\u914d\u7f6e\u4e3a\u6b63\u503c\u5f00\u542f\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6c60\u6709\u8db3\u591f\u7684\u5185\u5b58\u8fdb\u884c\u5206\u914d\u3002"}),"\n"]}),"\n",(0,r.jsx)(t,{text:"\u590d\u7528\u5185\u5b58"}),"\n",(0,r.jsx)(l,{text:"TODO"}),"\n",(0,r.jsx)(n.h3,{id:"\u540e\u5904\u7406",children:"\u540e\u5904\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u83b7\u53d6\u5230\u76ee\u6807\u5185\u5b58\u5730\u5740\u540e\uff0c\u9700\u8981\u505a\u4e00\u4e9b\u540e\u5904\u7406\u5de5\u4f5c\u3002"}),"\n",(0,r.jsx)(t,{text:"\u6807\u7b7e\u4f20\u9012\u548c\u57fa\u672c\u521d\u59cb\u5316"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp - StaticAllocateObject()\r\nif ( !bCreatingCDO && InClass->HasAnyClassFlags(CLASS_Transient) && !bCreatingArchetype )\r\n{\r\n\tInFlags |= RF_Transient;\r\n}\r\n\r\nif (!bSubObject)\r\n{\r\n\tFMemory::Memzero((void *)Obj, TotalSize);\r\n\tnew ((void *)Obj) UObjectBase(const_cast<UClass*>(InClass), InFlags|RF_NeedInitialization, InternalSetFlags, InOuter, InName, OldIndex, OldSerialNumber);\r\n}\r\nelse\r\n{\r\n\tObj->SetFlags(InFlags);\r\n\tObj->SetInternalFlags(InternalSetFlags);\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5bf9\u4e8e ",(0,r.jsx)(n.code,{children:"Transient"})," \u7c7b\u578b\uff0c\u5982\u679c\u6b63\u5728\u521b\u5efa\u7684\u5bf9\u8c61\u65e2\u4e0d\u662f ",(0,r.jsx)(n.code,{children:"CDO"})," \u4e5f\u4e0d\u662f ",(0,r.jsx)(n.code,{children:"Archetype"}),"\uff0c\u5219\u5f3a\u5236\u5c06\u5bf9\u8c61\u6807\u8bb0\u4e3a ",(0,r.jsx)(n.code,{children:"Transient"}),"\u3002\r\n\u4e4b\u540e\uff0c\u6839\u636e\u662f\u5426\u662f",(0,r.jsx)(n.code,{children:"\u590d\u7528\u5185\u5b58"}),"\u51b3\u5b9a\u4ee3\u7801\u8def\u5f84\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u662f\u5206\u914d\u7684\u5185\u5b58\uff0c\u5219\u76f4\u63a5\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"UObjectBase"})," \u7684\u7279\u5b9a\u6784\u9020\u51fd\u6570\u586b\u5145 ",(0,r.jsx)(n.code,{children:"ClassPrivate"}),"\u3001",(0,r.jsx)(n.code,{children:"OuterPrivate"}),"\u3001",(0,r.jsx)(n.code,{children:"NamePrivate"}),"\u3001",(0,r.jsx)(n.code,{children:"ObjectFlags"})," \u7b49\u6700\u57fa\u672c\u7684\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u662f\u590d\u7528\u7684\u5185\u5b58\uff0c\u5219\u53ea\u9700\u8981\u66f4\u65b0\u88ab\u590d\u7528\u5bf9\u8c61\u7684\u6807\u7b7e\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u5f97\u5230\u4e24\u6761\u63a8\u8bba\uff1a"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"UObject"})," \u5b9e\u4f8b\u4e0d\u4f1a\u50cf\u6807\u51c6 ",(0,r.jsx)(n.strong,{children:"C++"})," \u5bf9\u8c61\u4e00\u6837\u5904\u4e8e\u5b8c\u5168\u672a\u521d\u59cb\u5316\u7684",(0,r.jsx)(n.strong,{children:"\u968f\u673a"}),"\u72b6\u6001\uff0c\u800c\u662f\u81f3\u5c11\u4f1a\u5904\u4e8e",(0,r.jsx)(n.strong,{children:"\u96f6\u521d\u59cb\u5316"}),"\u72b6\u6001\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"UObject"})," \u5b9e\u4f8b\u7684 ",(0,r.jsx)(n.strong,{children:"UObjectBase"})," \u90e8\u5206\u662f\u5b8c\u5168\u521d\u59cb\u5316\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5728 ",(0,r.jsx)(n.strong,{children:"UObject"})," \u7684\u6784\u9020\u51fd\u6570\u4e2d\u5c31\u53ef\u4ee5\u77e5\u9053 ",(0,r.jsx)(n.strong,{children:"this"})," \u7684\u771f\u5b9e\u7c7b\u578b\u3001\u7236\u5bf9\u8c61\u3001\u5bf9\u8c61\u540d\u7b49\u57fa\u672c\u4fe1\u606f\uff0c\u800c\u4e0d\u9700\u8981\u50cf\u6807\u51c6 ",(0,r.jsx)(n.strong,{children:"C++"})," \u5bf9\u8c61\u4e00\u6837\u5fc5\u987b\u7b49\u5230\u6784\u9020\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u3002"]}),"\n"]})]}),"\n",(0,r.jsx)(t,{text:"\u52a0\u8f7d\u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp - StaticAllocateObject()\r\nif (ExternalPackage)\r\n{\r\n\tObj->SetExternalPackage(ExternalPackage);\r\n}\r\n\r\nif (bWasConstructedOnOldObject)\r\n{\r\n\tObj->SetLinker(Linker, LinkerIndex, false);\r\n\tif (Linker)\r\n\t{\r\n\t\tcheck(Linker->ExportMap[LinkerIndex].Object == NULL);\r\n\t\tLinker->ExportMap[LinkerIndex].Object = Obj;\r\n\t}\r\n}\r\n\r\nif (IsInAsyncLoadingThread())\r\n{\r\n\tFUObjectThreadContext& ThreadContext = FUObjectThreadContext::Get();\r\n\tif (ThreadContext.AsyncPackageLoader)\r\n\t{\r\n\t\tLLM_SCOPE(ELLMTag::AsyncLoading);\r\n\t\tThreadContext.AsyncPackageLoader->NotifyConstructedDuringAsyncLoading(Obj, bSubObject);\r\n\t}\r\n}\r\nelse\r\n{\r\n\tObj->ClearInternalFlags(EInternalObjectFlags::AsyncLoading);\r\n\tif (Obj->HasAnyInternalFlags(EInternalObjectFlags::Async) && IsInGameThread())\r\n\t{\r\n\t\tObj->ClearInternalFlags(EInternalObjectFlags::Async);\r\n\t}\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540e\u8fd8\u8fdb\u884c\u4e86\u4e00\u4e9b\u4e0e\u8d44\u6e90\u52a0\u8f7d\u76f8\u5173\u7684\u5de5\u4f5c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"ExternalPackage"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"Linker"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u6e05\u9664\u5f02\u6b65\u52a0\u8f7d\u76f8\u5173\u7684\u6807\u7b7e\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6784\u9020",children:"\u6784\u9020"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp - StaticConstructObject_Internal()\r\nif (!bRecycledSubobject)\r\n{\t\t\r\n\t(*InClass->ClassConstructor)(FObjectInitializer(Result, Params));\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5206\u914d\u5185\u5b58\u4e4b\u540e\uff0c\u7d27\u63a5\u7740\u8c03\u7528\u4e86\u7c7b\u7684\u6784\u9020\u51fd\u6570\u3002",(0,r.jsx)(n.code,{children:"UObject"})," \u7684\u6784\u9020\u51fd\u6570\u5177\u6709\u7edf\u4e00\u7684\u5f62\u5f0f ",(0,r.jsx)(n.code,{children:"void(const FObjectInitializer&)"}),"\uff0c\u56e0\u6b64\u4e0d\u80fd\u901a\u8fc7\u6784\u9020\u51fd\u6570\u4f20\u9012\u81ea\u5b9a\u4e49\u53c2\u6570\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"fobjectinitializer",children:"FObjectInitializer"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6267\u884c\u6784\u9020\u51fd\u6570\u4e4b\u524d\uff0c\u9996\u5148\u6267\u884c\u7684\u662f\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"FObjectInitializer"})," \u7684\u6784\u9020\u51fd\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp\r\nvoid FObjectInitializer::Construct_Internal()\r\n{\r\n\tFUObjectThreadContext& ThreadContext = FUObjectThreadContext::Get();\r\n\tThreadContext.IsInConstructor++;\r\n\tLastConstructedObject = ThreadContext.ConstructedObject;\r\n\tThreadContext.ConstructedObject = Obj;\r\n\tThreadContext.PushInitializer(this);\r\n\r\n\tif (Obj && GetAllowNativeComponentClassOverrides())\r\n\t{\r\n\t\tObj->GetClass()->SetupObjectInitializer(*this);\r\n\t}\r\n\r\n#if WITH_EDITORONLY_DATA\r\n\tif (GIsEditor && GVerifyUObjectsAreNotFGCObjects && FGCObject::GGCObjectReferencer && \r\n\t\tObj && Obj->HasAnyFlags(RF_ClassDefaultObject) && !Obj->GetClass()->HasAnyClassFlags(CLASS_CompiledFromBlueprint))\r\n\t{\r\n\t\tOnGCObjectCreatedHandle = FGCObject::GGCObjectReferencer->GetGCObjectAddedDelegate().AddRaw(this, &FObjectInitializer::OnGCObjectCreated);\r\n\t}\r\n#endif\r\n}\n"})}),"\n",(0,r.jsx)(l,{text:"TODO"}),"\n",(0,r.jsx)(n.h3,{id:"\u7c7b\u6784\u9020\u51fd\u6570",children:"\u7c7b\u6784\u9020\u51fd\u6570"}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u6267\u884c\u7c7b\u6784\u9020\u51fd\u6570\uff0c",(0,r.jsx)(n.code,{children:"Native"})," \u7c7b\u7684\u6784\u9020\u51fd\u6570\u7531 ",(0,r.jsx)(n.code,{children:"UHT"})," \u81ea\u52a8\u751f\u6210\uff0c\u5185\u90e8\u76f4\u63a5\u8c03\u7528\u8be5\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff1b\u84dd\u56fe\u7c7b\u7684\u6784\u9020\u51fd\u6570\u662f\u5b83\u6700\u8fd1\u7684 ",(0,r.jsx)(n.code,{children:"Native"})," \u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\u3002\r\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u590d\u7528\u7684\u5bf9\u8c61\u4e0d\u4f1a\u8c03\u7528\u6784\u9020\u51fd\u6570\uff0c\u56e0\u4e3a\u5b83\u4eec\u5e76\u6ca1\u6709\u88ab\u6790\u6784\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u8c61\u7684\u521d\u59cb\u5316\u901a\u8fc7\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"FObjectInitializer"})," \u7684\u6790\u6784\u51fd\u6570\u5b9e\u73b0\uff0c\u8fd9\u79cd\u6a21\u5f0f\u770b\u4f3c\u5947\u602a\uff0c\u4f46\u5b9e\u73b0\u4e86\u4e00\u79cd\u7528\u5176\u4ed6\u65b9\u5f0f\u65e0\u6cd5\u5b9e\u73b0\u7684\u63a7\u5236\u6d41\uff1a\u6846\u67b6\u4ee3\u7801\u5728\u7528\u6237\u6784\u9020\u51fd\u6570\u4e4b\u540e\u8fd0\u884c\u3002\r\n\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6784\u9020\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ece\u57fa\u7c7b\u5230\u5b50\u7c7b\uff0c\u800c\u6846\u67b6\u4ee3\u7801\u5904\u4e8e\u57fa\u7c7b\u7684\u4f4d\u7f6e\uff0c\u56e0\u6b64\u4e00\u5b9a\u6bd4\u7528\u6237\u4ee3\u7801\u5148\u6267\u884c\u3002\r\n\u7528\u6b63\u5e38\u7684\u63a7\u5236\u6d41\uff0c\u60f3\u8981\u5728\u7528\u6237\u4ee3\u7801\u4e4b\u540e\u6267\u884c\u4e00\u6bb5\u6846\u67b6\u4ee3\u7801\uff0c\u53ea\u80fd\u5728\u8c03\u7528\u7528\u6237\u4ee3\u7801\u4e4b\u540e\u518d\u624b\u52a8\u8c03\u7528\u6846\u67b6\u4ee3\u7801\u3002\r\n\u8fd9\u79cd\u505a\u6cd5\u7684\u7f3a\u9677\u662f\u9700\u8981\u4eba\u4e3a\u4fdd\u8bc1\u540e\u7eed\u6846\u67b6\u4ee3\u7801\u7684\u8c03\u7528\uff0c\u6709\u8bef\u7528\u98ce\u9669\u3002\u800c\u901a\u8fc7\u53c2\u6570\u7684\u6790\u6784\u51fd\u6570\uff0c\u5219\u53ef\u4ee5\u5b9e\u73b0\u7c7b\u4f3c\u4e8e ",(0,r.jsx)(n.code,{children:"RAII"})," \u7684\u81ea\u52a8\u5316\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u6587\u63d0\u5230\uff0c",(0,r.jsx)(n.code,{children:"UObject"})," \u7684\u6784\u9020\u51fd\u6570\u5177\u6709\u7edf\u4e00\u7684\u5f62\u5f0f\uff0c\u4e0d\u80fd\u4f20\u5165\u81ea\u5b9a\u4e49\u53c2\u6570\u3002\u4f46\u6307\u5b9a\u9ed8\u8ba4\u503c\u662f\u4e00\u4e2a\u521a\u6027\u9700\u6c42\uff0c\u56e0\u6b64\u5b83\u901a\u8fc7\u4ece\u5176\u4ed6",(0,r.jsx)(n.code,{children:"\u539f\u578b"}),"\u5bf9\u8c61\u62f7\u8d1d\u9ed8\u8ba4\u503c\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u6307\u5b9a\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,r.jsx)(l,{text:"TODO"}),"\n",(0,r.jsx)(n.h2,{id:"\u540e\u5904\u7406-1",children:"\u540e\u5904\u7406"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-CPP",children:"// UObjectGlobals.cpp - StaticConstructObject_Internal()\r\nif (GIsEditor && \r\n\t!Result->HasAnyInternalFlags(EInternalObjectFlags::Async | EInternalObjectFlags::AsyncLoading) &&\r\n\tGUndo &&\r\n\t(InFlags & RF_Transactional) && !(InFlags & RF_NeedLoad) && \r\n\t!InClass->IsChildOf(UField::StaticClass())\r\n\t)\r\n{\r\n\tResult->MarkAsGarbage();\r\n\tSaveToTransactionBuffer(Result, false);\r\n\tResult->ClearGarbage();\r\n}\r\n\r\n#if WITH_EDITOR\r\nFCoreUObjectDelegates::OnObjectConstructed.Broadcast(Result);\r\n#endif\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u7f16\u8f91\u5668\u73af\u5883\u4e0b\u521b\u5efa ",(0,r.jsx)(n.code,{children:"UObject"})," \u4e4b\u540e\uff0c\u8fd8\u4f1a\u8fdb\u884c\u4e00\u4e9b",(0,r.jsx)(n.code,{children:"\u7f16\u8f91\u4e8b\u52a1"}),"\u76f8\u5173\u7684\u5904\u7406\u5e76\u5e7f\u64ad\u4e00\u6761 ",(0,r.jsx)(n.code,{children:"FCoreUObjectDelegates::OnObjectConstructed"})," \u6d88\u606f\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const c={},l=r.createContext(c);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);