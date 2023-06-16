"use strict";(()=>{var i="https://www.bing.com/";var A=["zh-CN","ru","ru-ru"],m="113",l="113.0.1774.57",u=["csp_report","font","image","main_frame","media","object","other","ping","script","stylesheet","sub_frame","webbundle","websocket","webtransport","xmlhttprequest"];var E="modifyHeaders",y="redirect",j="append",h="set",S=[{action:{type:E,requestHeaders:[{operation:h,header:"sec-ch-ua",value:`"Microsoft Edge";v="${m}", "Chromium";v="${m}", "Not-A.Brand";v="24"`},{operation:h,header:"sec-ch-ua-full-version",value:`"${l}"`},{operation:h,header:"sec-ch-ua-full-version-list",value:`"Microsoft Edge";v="${l}", "Chromium";v="113.0.5672.127", "Not-A.Brand";v="24.0.0.0"`},{operation:h,header:"sec-ms-gec-version",value:`1-${l}`},{operation:h,header:"User-Agent",value:`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${m}.0.0.0 Safari/537.36 Edg/${l}`}]},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:u}},{action:{type:y,redirect:{regexSubstitution:"\\1setlang=zh-Hans&mkt=zh-HK\\2"}},condition:{regexFilter:"(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=zh-CN|cc=cn|cc=zh-cn|cc=zh)(.*)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:u}},{action:{type:y,redirect:{regexSubstitution:"\\1setlang=ru&cc=clean&mkt=en-us\\2"}},condition:{regexFilter:"(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=ru-ru|mkt=ru|cc=ru)(.*)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:u}},{action:{type:y,redirect:{url:`${i}?setlang=zh-Hans&mkt=zh-HK`}},condition:{regexFilter:"\\/\\?(?:new-bing-anywhere|nba|run)",isUrlFilterCaseSensitive:!1,requestDomains:["www.bing.com"],resourceTypes:u}},{priority:99,action:{type:y,redirect:{regexSubstitution:`${i}\\1`}},condition:{requestDomains:["cn.bing.com","bing.com"],regexFilter:"^http(?:s)?:\\/\\/(?:cn\\.)?bing\\.com\\/(.*)",resourceTypes:u}},{action:{type:E,responseHeaders:[{header:"Set-Cookie",operation:j,value:"SNRHOP=I=8; domain=.bing.com; path=/; secure; SameSite=None; HttpOnly;"}]},condition:{requestDomains:["bing.com","www.bing.com"]}}].map((e,t)=>({id:t+1,...e}));var T="2.0.2";var b={type:"git",url:"https://github.com/haozi/New-Bing-Anywhere"};var K=()=>{try{return chrome.i18n.getUILanguage().toLowerCase()==="zh-cn"}catch{return!1}},Y=()=>{try{let e=chrome.i18n.getUILanguage().toLowerCase();return e==="zh-cn"||e==="zh-tw"||e==="zh-hk"||e==="zh"}catch{return!1}};var L="configV1",W=async()=>({showGoogleButtonOnBing:!0,showBingButtonOnGoogle:!0,showGuideToGithub:!0,showChat:!0,triggerMode:"Always",conversationStyle:"Balanced",...(await chrome.storage.sync.get(L))[L]});var P=e=>{chrome.runtime.onMessage.addListener((t,r,n)=>((async()=>{try{let{method:o,args:s}=t,a=await e[o](...s);n({code:200,msg:"ok",data:a})}catch(o){let s=o??{};n({code:500,msg:s.stack??s.message??o})}})(),!0))};var de=(()=>{let e="v1";return{get:async t=>{t=`${e}:${t}`;let{data:r,maxAge:n,lastModified:o}=(await chrome.storage.local.get(t))?.[t]??{};return Date.now()-o>n*1e3?(chrome.storage.local.remove(t),null):r},set:async(t,r,n=1/0)=>{t=`${e}:${t}`,await chrome.storage.local.set({[t]:{data:r,lastModified:Date.now(),maxAge:n}})}}})();var x=navigator.userAgent,V=navigator.userAgentData,Q=x.includes("Macintosh"),pe=x.includes("Firefox"),X=x.includes("Edg/"),ge=V?.brands.findIndex(e=>e.brand==="Brave")>-1,N=Y(),he=K(),v=!!globalThis.__NBA_isCanary,f=v?`0.${T}`:T,B=()=>{let e=x;return X||(Q?e=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${m}.0.0.0 Safari/537.36 Edg/${l}`:e=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${m}.0.0.0 Safari/537.36 Edg/${l}`),e},_=async e=>{let t=b.url;try{let r=await W(),o=`${t}/issues/new?title=&body=`,s="Please write your comment ABOVE this line, provide as much detailed information and screenshots as possible.The UA may not necessarily reflect your actual browser and platform, so please make sure to indicate them clearly.";N&&(s="\u8BF7\u5728\u6B64\u884C\u4E0A\u65B9\u53D1\u8868\u60A8\u7684\u8BA8\u8BBA\u3002\u8BE6\u5C3D\u7684\u63CF\u8FF0\u548C\u622A\u56FE\u6709\u52A9\u4E8E\u6211\u4EEC\u5B9A\u4F4D\u95EE\u9898\uFF0CUA \u4E0D\u4E00\u5B9A\u771F\u5B9E\u53CD\u6620\u60A8\u7684\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\uFF0C\u8BF7\u5907\u6CE8\u6E05\u695A");let a=` 



<!--  ${s} -->
`+Object.entries({Version:`${f}${v?" (Canary)":""} `,UA:navigator.userAgent,Lang:chrome.i18n.getUILanguage(),AcceptLangs:(await chrome.i18n.getAcceptLanguages()).join(", "),config:JSON.stringify(r),...e}).map(([w,g])=>g?`${w}: ${g}`:"").join(`
`);return o+=encodeURIComponent(a.slice(0,2e3)),o}catch{return t}};var d=(e="",t)=>{try{return new URL(e,t)}catch{return{searchParams:{get:()=>null}}}},I=e=>{try{return new URLSearchParams(e)}catch{return{get:()=>null}}},c=async e=>{let t=await chrome.tabs.query({currentWindow:!0}),r=d(e),n=t.find(o=>o.url?.startsWith(r.origin));return n==null?n=await chrome.tabs.create({url:e}):await Promise.all([chrome.tabs.move(n.id,{index:t.length-1}),n.url!==e&&chrome.tabs.update(n.id,{url:e}),chrome.tabs.update(n.id,{active:!0,url:n.url!==e?e:void 0})].filter(Boolean)),n},R=async(e,t={})=>await chrome.cookies.set({domain:t.domain,storeId:t.storeId,path:t.path,httpOnly:t.httpOnly,secure:t.secure,sameSite:t.sameSite,expirationDate:t.expirationDate,...e});var U={openChat:{title:"\u{1F4AC} New Bing",contexts:["action"],onclick:e=>{c("https://www.bing.com/search?q=Bing+AI&showconv=1")}},openImageCreate:{title:"\u{1F5BC}\uFE0F New Bing Image Creator",contexts:["action"],onclick:e=>{c("https://www.bing.com/create")}},likeIt:{title:"\u2764\uFE0F Like it",contexts:["action"],onclick:()=>{c("https://chrome.google.com/webstore/detail/new-bing-anywhere/hceobhjokpdbogjkplmfjeomkeckkngi/reviews")}},reportIssues:{title:N?"\u{1F41B} \u53CD\u9988\u5EFA\u8BAE":"\u{1F41B} Report issues",contexts:["action"],onclick:async e=>{let t=await _();c(t)}}},k=()=>{chrome.contextMenus.removeAll(()=>{for(let[e,t]of Object.entries(U))chrome.contextMenus.create({id:e,title:t.title,contexts:t.contexts})}),chrome.contextMenus.onClicked.addListener((e,t)=>{let{menuItemId:r}=e,n=U[r];n?.onclick&&n.onclick(e,t)})};var p="notification",C="notification:hide",J=async()=>{let e;try{e=await fetch("https://api.github.com/repos/haozi/New-Bing-Anywhere/issues/24").then(async t=>await t.json())}catch{}return e},H=async()=>{let{[p]:e}=await chrome.storage.local.get(p);if(!e||e.lastModify&&Date.now()-e.lastModify>36e5){await chrome.storage.local.remove(p);let n=await J();n&&await chrome.storage.local.set({[p]:{data:n,lastModify:Date.now()}})}let{[C]:t,[p]:r}=await chrome.storage.local.get([C,p]);return!r?.data||!(r.data.title&&r.data.state==="open")||t===1&&r.data.title===e.data?.title?null:(await chrome.storage.local.remove(C),r.data)},M=async()=>{chrome.storage.local.set({[C]:1})};var Z=async()=>({version:f}),ee=async({url:e}={})=>{let t=await chrome.tabs.query({currentWindow:!0}),r=d(e),n=t.find(F=>F.url?.startsWith(r.origin));n==null?n=await chrome.tabs.create({url:e}):n.id!=null&&await Promise.all([chrome.tabs.move(n.id,{index:t.length-1}),chrome.tabs.update(n.id,{active:!0})]);let o=e,s="",a="",w=r.hostname==="www.google.com",g=r.hostname==="www.bing.com";w?(s=r.searchParams.get("q")??"",a=d(n.url).searchParams.get("q")??"",d(n.url).searchParams.get("q")):g&&(s=r.searchParams.get("q")??"",a=d(n.url).searchParams.get("q")??""),s=s.trim(),a=a.trim(),!(s&&s===a)&&(w?o=`${r.origin}${r.pathname}?q=${encodeURIComponent(s)}`:g&&(o=`${r.origin}${r.pathname}?q=${encodeURIComponent(s)}`),await chrome.tabs.update(n.id,{url:o}))},D={getEnv:Z,openUrlInSameTab:ee,getNotification:H,hideNotification:M};var O=()=>{k(),P(D),chrome.runtime.onInstalled.addListener(e=>{let t=b.url;if(v){c(`${t}/tree/canary`);return}e.reason==="install"?c(t):e.reason==="update"&&c(`${t}/releases/tag/v${f}`)}),chrome.webRequest.onBeforeRequest.addListener(()=>{chrome.cookies.get({name:"_EDGE_S",url:i},e=>{let t=e?.value;if(!t)return;let r=I(t),n=r.get("mkt")?.toLowerCase()??"";A.map(o=>o.toLowerCase()).includes(n)&&(n==="zh-cn"?(r.set("mkt","zh-HK"),r.set("ui","zh-hans")):r.delete("mkt"),R({url:i,name:e.name,value:r.toString()},e))}),chrome.cookies.get({name:"_RwBf",url:i},e=>{let t=e?.value;if(!t){R({url:i,name:"_RwBf",value:"wls=2",domain:".bing.com",httpOnly:!0});return}let r=I(t),n=r.get("wls");n!=="2"&&n!==""&&r.set("wls","2"),R({url:i,name:"_RwBf",domain:".bing.com",httpOnly:!0,value:r.toString()},e)})},{urls:[i+"*"],types:["main_frame"]})};var te={"User-Agent":B()},ne="modifyHeaders",re="set",$=[{priority:2001,action:{type:ne,requestHeaders:Object.entries(te).map(([e,t])=>({operation:re,header:e,value:t}))},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:u}}].filter(Boolean).map((e,t)=>({id:t+1+2e3,...e}));var z=chrome,G=[...S,...$],oe=G.filter(e=>e.action?.type==="modifyHeaders"&&e.action?.requestHeaders?.length),se=G.filter(e=>e.action?.type==="modifyHeaders"&&e.action?.responseHeaders?.length);O();z.webRequest.onBeforeSendHeaders.addListener(e=>{if(!e.requestHeaders)return;let t=e.requestHeaders;for(let r of oe){let n=new URL(e.url);if(!r.condition||(r.condition?.requestDomains??[]).includes(n.hostname)||new RegExp(r.condition?.regexFilter??"",r.condition?.isUrlFilterCaseSensitive?"i":void 0).test(n.href)||n.href.includes(r.condition?.urlFilter??""))for(let o of r.action.requestHeaders??[])switch(o.operation){case"set":if(!e.requestHeaders.find(s=>s.name===o.header))t.push({name:o.header,value:o.value});else for(let s of e.requestHeaders)s.name.toLowerCase()===o.header.toLowerCase()&&(s.value=o.value);break;case"append":t.push({name:o.header,value:o.value});break;case"remove":{let s=t.findIndex(a=>a.name.toLowerCase()===o.header.toLowerCase());s>-1&&t.splice(s,1)}break;default:}}return{requestHeaders:t}},{urls:["<all_urls>"]},["blocking","requestHeaders"]);z.webRequest.onHeadersReceived.addListener(e=>{if(!e.responseHeaders)return;let t=e.responseHeaders;for(let r of se)if(new RegExp(r.condition?.regexFilter??"",r.condition?.isUrlFilterCaseSensitive?"i":void 0).test(e.url))for(let n of r.action.responseHeaders??[])switch(n.operation){case"set":for(let o of e.responseHeaders)o.name.toLowerCase()===n.header.toLowerCase()?o.value=n.value:t.push({name:n.header,value:n.value});break;case"append":t.push({name:n.header,value:n.value});break;default:}return{responseHeaders:t}},{urls:["<all_urls>"]},["blocking","responseHeaders"]);})();
