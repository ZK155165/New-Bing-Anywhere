"use strict";(()=>{var T="https://www.bing.com/",c=["csp_report","font","image","main_frame","media","object","other","ping","script","stylesheet","sub_frame","webbundle","websocket","webtransport","xmlhttprequest"],q="modifyHeaders",p="redirect",O="append",C="set",H=[{id:1,action:{type:q,requestHeaders:[{operation:C,header:"Sec-Ch-Ua",value:'"Chromium";v="112", "Microsoft Edge";v="112", "Not:A-Brand";v="99"'},{operation:C,header:"User-Agent",value:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.34"}]},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:c}},{id:2,action:{type:p,redirect:{regexSubstitution:"\\1setlang=zh-Hans&mkt=zh-HK\\2"}},condition:{regexFilter:"(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=zh-CN|cc=cn|cc=zh-cn|cc=zh)(.*)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:c}},{id:3,action:{type:p,redirect:{regexSubstitution:"\\1setlang=ru&cc=clean&mkt=en-us\\2"}},condition:{regexFilter:"(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=ru-ru|mkt=ru|cc=ru)(.*)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:c}},{id:4,action:{type:p,redirect:{url:`${T}?setlang=zh-Hans&mkt=zh-HK`}},condition:{regexFilter:"\\/\\?(?:new-bing-anywhere|nba|run)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:c}},{id:5,priority:99,action:{type:p,redirect:{regexSubstitution:`${T}\\1`}},condition:{requestDomains:["cn.bing.com","bing.com"],regexFilter:"^http(?:s)?:\\/\\/(?:cn\\.)?bing\\.com\\/(.*)",resourceTypes:c}},{id:6,action:{type:q,responseHeaders:[{header:"Set-Cookie",operation:O,value:"SNRHOP=I=9; domain=.bing.com; path=/; secure; SameSite=None; HttpOnly;"}]},condition:{requestDomains:["bing.com","www.bing.com"]}}];var d="1.6.2";var g={type:"git",url:"https://github.com/haozi/new-bing-anywhere"};var l="https://www.bing.com/";var E=["zh-CN","ru","ru-ru"];var N=()=>{let e=chrome.i18n.getUILanguage().toLowerCase();return e==="zh-cn"||e==="zh-tw"||e==="zh-hk"||e==="zh"};var te=chrome.runtime.getURL("app/index.html"),w=N();var m=(e="",t)=>{try{return new URL(e,t)}catch{return{searchParams:{get:()=>null}}}},b=e=>{try{return new URLSearchParams(e)}catch{return{get:()=>null}}},S=e=>{chrome.runtime.onMessage.addListener((t,n,r)=>((async()=>{try{let{method:s,args:o}=t,a=await e[s](...o);r({code:200,msg:"ok",data:a})}catch(s){let o=s??{};r({code:500,msg:o.stack??o.message??s})}})(),!0))},i=async e=>{let t=await chrome.tabs.query({currentWindow:!0}),n=m(e),r=t.find(s=>s.url?.startsWith(n.origin));return r==null?r=await chrome.tabs.create({url:e}):await Promise.all([chrome.tabs.move(r.id,{index:t.length-1}),r.url!==e&&chrome.tabs.update(r.id,{url:e}),chrome.tabs.update(r.id,{active:!0,url:r.url!==e?e:void 0})].filter(Boolean)),r},k=async()=>{let n=`${g.url}/issues/new?title=&body=`,r="Please write your comment ABOVE this line, provide as much detailed information and screenshots as possible.The UA may not necessarily reflect your actual browser and platform, so please make sure to indicate them clearly.";w&&(r="\u8BF7\u5728\u6B64\u884C\u4E0A\u65B9\u53D1\u8868\u60A8\u7684\u8BA8\u8BBA\u3002\u8BE6\u5C3D\u7684\u63CF\u8FF0\u548C\u622A\u56FE\u6709\u52A9\u4E8E\u6211\u4EEC\u5B9A\u4F4D\u95EE\u9898\uFF0CUA \u4E0D\u4E00\u5B9A\u771F\u5B9E\u53CD\u6620\u60A8\u7684\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\uFF0C\u8BF7\u5907\u6CE8\u6E05\u695A");let s=` 



<!--  ${r} -->
Version: ${d}
UA: ${navigator.userAgent}
Lang: ${chrome.i18n.getUILanguage()}
AcceptLangs: ${(await chrome.i18n.getAcceptLanguages()).join(", ")}`;return n+=encodeURIComponent(s.slice(0,2e3)),n},h=async(e,t={})=>await chrome.cookies.set({domain:t.domain,storeId:t.storeId,path:t.path,httpOnly:t.httpOnly,secure:t.secure,sameSite:t.sameSite,expirationDate:t.expirationDate,...e});var A={openChat:{title:"\u{1F4AC} New Bing",contexts:["action"],onclick:e=>{i("https://www.bing.com/search?q=Bing+AI&showconv=1")}},openImageCreate:{title:"\u{1F5BC}\uFE0F New Bing Image Create",contexts:["action"],onclick:e=>{i("https://www.bing.com/create")}},likeIt:{title:"\u2764\uFE0F Like it",contexts:["action"],onclick:()=>{i("https://chrome.google.com/webstore/detail/new-bing-anywhere/hceobhjokpdbogjkplmfjeomkeckkngi/reviews")}},reportIssues:{title:w?"\u{1F41B} \u53CD\u9988\u5EFA\u8BAE":"\u{1F41B} Report issues",contexts:["action"],onclick:async e=>{let t=await k();i(t)}}},L=()=>{chrome.contextMenus.removeAll(()=>{for(let[e,t]of Object.entries(A))chrome.contextMenus.create({id:e,title:t.title,contexts:t.contexts})}),chrome.contextMenus.onClicked.addListener((e,t)=>{let{menuItemId:n}=e,r=A[n];r?.onclick&&r.onclick(e,t)})};var U=()=>{L(),S({openUrlInSameTab:async({url:e}={})=>{let t=await chrome.tabs.query({currentWindow:!0}),n=m(e),r=t.find(_=>_.url?.startsWith(n.origin));r==null?r=await chrome.tabs.create({url:e}):r.id!=null&&await Promise.all([chrome.tabs.move(r.id,{index:t.length-1}),chrome.tabs.update(r.id,{active:!0})]);let s=e,o="",a="",v=n.hostname==="www.google.com",R=n.hostname==="www.bing.com";v?(o=n.searchParams.get("q")??"",a=m(r.url).searchParams.get("q")??"",m(r.url).searchParams.get("q")):R&&(o=n.searchParams.get("q")??"",a=m(r.url).searchParams.get("q")??""),o=o.trim(),a=a.trim(),!(o&&o===a)&&(v?s=`${n.origin}${n.pathname}?q=${encodeURIComponent(o)}`:R&&(s=`${n.origin}${n.pathname}?q=${encodeURIComponent(o)}`),await chrome.tabs.update(r.id,{url:s}))}}),chrome.runtime.onInstalled.addListener(e=>{let t=g.url;e.reason==="install"?i(t):e.reason==="update"&&i(`${t}/releases/tag/v${d}`)}),chrome.webRequest.onBeforeRequest.addListener(()=>{chrome.cookies.get({name:"_EDGE_S",url:l},e=>{let t=e?.value;if(!t)return;let n=b(t),r=n.get("mkt")?.toLowerCase()??"";E.map(s=>s.toLowerCase()).includes(r)&&(n.delete("mkt"),h({url:l,name:e.name,value:n.toString()},e))}),chrome.cookies.get({name:"_RwBf",url:l},e=>{let t=e?.value;if(!t){h({url:l,name:"_RwBf",value:"wls=2",domain:".bing.com",httpOnly:!0});return}let n=b(t);n.get("wls")!=="2"&&n.set("wls","2"),h({url:l,name:"_RwBf",domain:".bing.com",httpOnly:!0,value:n.toString()},e)})},{urls:[l+"*"],types:["main_frame"]})};var u=navigator.userAgent.trim(),M=u.includes("Macintosh"),$=u.includes("Edg"),z=u.includes("Firefox");$||(M?u+=" Edg/112.0.1722.39":u+=" Edg/112.0.1722.34");z&&(u="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.34");var F={"User-Agent":u},j="modifyHeaders",W="set",P=[{id:2001,priority:2001,action:{type:j,requestHeaders:Object.entries(F).map(([e,t])=>({operation:W,header:e,value:t}))},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:c}}];var B=chrome,f=[...H,...P],y=f.filter(e=>e.action?.type==="modifyHeaders"&&e.action?.requestHeaders?.length),x=f.filter(e=>e.action?.type==="modifyHeaders"&&e.action?.responseHeaders?.length),D=f.filter(e=>e.action?.type==="redirect");console.log("rules",f.length);console.log("modifyRequestHeadersRules",y.length,y);console.log("modifyResponseHeadersRules",x.length,x);console.log("redirectRules",D.length,D);U();B.webRequest.onBeforeSendHeaders.addListener(e=>{if(!e.requestHeaders)return;let t=e.requestHeaders;for(let n of y){let r=new URL(e.url);if(!n.condition||(n.condition?.requestDomains??[]).includes(r.hostname)||new RegExp(n.condition?.regexFilter??"",n.condition?.isUrlFilterCaseSensitive?"i":void 0).test(r.href)||r.href.includes(n.condition?.urlFilter??""))for(let s of n.action.requestHeaders??[])switch(s.operation){case"set":if(!e.requestHeaders.find(o=>o.name===s.header))t.push({name:s.header,value:s.value});else for(let o of e.requestHeaders)o.name.toLowerCase()===s.header.toLowerCase()&&(o.value=s.value);break;case"append":t.push({name:s.header,value:s.value});break;default:}}return{requestHeaders:t}},{urls:["<all_urls>"]},["blocking","requestHeaders"]);B.webRequest.onHeadersReceived.addListener(e=>{if(!e.responseHeaders)return;let t=e.responseHeaders;for(let n of x)if(new RegExp(n.condition?.regexFilter??"",n.condition?.isUrlFilterCaseSensitive?"i":void 0).test(e.url))for(let r of n.action.responseHeaders??[])switch(r.operation){case"set":for(let s of e.responseHeaders)s.name.toLowerCase()===r.header.toLowerCase()?s.value=r.value:t.push({name:r.header,value:r.value});break;case"append":t.push({name:r.header,value:r.value});break;default:}return{responseHeaders:t}},{urls:["<all_urls>"]},["blocking","responseHeaders"]);})();
