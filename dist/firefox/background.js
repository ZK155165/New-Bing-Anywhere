"use strict";
(() => {
  // src/universe/constants.ts
  var BING = "https://www.bing.com/";
  var BAND_MKTS = ["zh-CN", "ru", "ru-ru"];
  var MAIN_VERSION = "113";
  var FULL_VERSION = "113.0.1774.57";
  var ALL_RESOURCE_TYPES = [
    "csp_report",
    "font",
    "image",
    "main_frame",
    "media",
    "object",
    "other",
    "ping",
    "script",
    "stylesheet",
    "sub_frame",
    "webbundle",
    "websocket",
    "webtransport",
    "xmlhttprequest"
  ];

  // scripts/static_rules.ts
  var MODIFY_HEADERS = "modifyHeaders";
  var REDIRECT = "redirect";
  var APPEND = "append";
  var SET = "set";
  var staticRules = [
    {
      action: {
        type: MODIFY_HEADERS,
        requestHeaders: [
          {
            operation: SET,
            header: "sec-ch-ua",
            value: `"Microsoft Edge";v="${MAIN_VERSION}", "Chromium";v="${MAIN_VERSION}", "Not-A.Brand";v="24"`
          },
          // {
          //   operation: SET,
          //   header: 'sec-ch-ua-arch',
          //   value: '"x86"'
          // },
          // {
          //   operation: SET,
          //   header: 'sec-ch-ua-bitness',
          //   value: '"64"'
          // },
          {
            operation: SET,
            header: "sec-ch-ua-full-version",
            value: `"${FULL_VERSION}"`
          },
          {
            operation: SET,
            header: "sec-ch-ua-full-version-list",
            value: `"Microsoft Edge";v="${FULL_VERSION}", "Chromium";v="113.0.5672.127", "Not-A.Brand";v="24.0.0.0"`
          },
          {
            operation: SET,
            header: "sec-ms-gec-version",
            value: `1-${FULL_VERSION}`
          },
          {
            operation: SET,
            header: "User-Agent",
            value: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${MAIN_VERSION}.0.0.0 Safari/537.36 Edg/${FULL_VERSION}`
          }
          // {
          //   operation: SET,
          //   header: 'sec-ms-gec',
          //   value: 'B55DF865827912FB0EDCCEC47284BFB22D3D2D453623DE97B2CCEDDBB57DAD23'
          // }
          // {
          //   operation: REMOVE,
          //   header: 'X-Forwarded-For'
          // }
        ]
      },
      condition: {
        requestDomains: ["bing.com", "www.bing.com", "cn.bing.com"],
        resourceTypes: ALL_RESOURCE_TYPES
      }
    },
    {
      action: {
        type: REDIRECT,
        redirect: {
          regexSubstitution: "\\1setlang=zh-Hans&mkt=zh-HK\\2"
        }
      },
      condition: {
        // https://regex101.com/r/LC68hZ/1
        regexFilter: "(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=zh-CN|cc=cn|cc=zh-cn|cc=zh)(.*)",
        isUrlFilterCaseSensitive: false,
        requestDomains: ["www.bing.com"],
        resourceTypes: ALL_RESOURCE_TYPES
      }
    },
    {
      action: {
        type: REDIRECT,
        redirect: {
          regexSubstitution: "\\1setlang=ru&cc=clean&mkt=en-us\\2"
        }
      },
      condition: {
        // https://regex101.com/r/LC68hZ/1
        regexFilter: "(^https:\\/\\/www\\.bing\\.com\\/(?:search|\\?|account/action).*?)(?:mkt=ru-ru|mkt=ru|cc=ru)(.*)",
        isUrlFilterCaseSensitive: false,
        requestDomains: ["www.bing.com"],
        resourceTypes: ALL_RESOURCE_TYPES
      }
    },
    {
      action: {
        type: REDIRECT,
        redirect: {
          url: `${BING}?setlang=zh-Hans&mkt=zh-HK`
        }
      },
      condition: {
        regexFilter: "\\/\\?(?:new-bing-anywhere|nba|run)",
        isUrlFilterCaseSensitive: false,
        requestDomains: ["www.bing.com"],
        resourceTypes: ALL_RESOURCE_TYPES
      }
    },
    {
      priority: 99,
      action: {
        type: REDIRECT,
        redirect: {
          regexSubstitution: `${BING}\\1`
        }
      },
      condition: {
        // https://cn.bing.com/search?q=fdsafdsafdsafdsafdsafdsafdsafdsaf&cvid=49400b6fae014ff3b23411b541cc7115&aqs=edge..69i57.3974j0j9&FORM=ANAB01&DAF0=1&PC=CNNDDB
        requestDomains: ["cn.bing.com", "bing.com"],
        regexFilter: "^http(?:s)?:\\/\\/(?:cn\\.)?bing\\.com\\/(.*)",
        resourceTypes: ALL_RESOURCE_TYPES
      }
    },
    {
      action: {
        type: MODIFY_HEADERS,
        responseHeaders: [
          {
            header: "Set-Cookie",
            operation: APPEND,
            value: "SNRHOP=I=8; domain=.bing.com; path=/; secure; SameSite=None; HttpOnly;"
          }
        ]
      },
      condition: {
        requestDomains: ["bing.com", "www.bing.com"]
      }
    }
    // {
    //   action: {
    //     type: MODIFY_HEADERS,
    //     responseHeaders: [
    //       {
    //         header: 'Set-Cookie',
    //         operation: REMOVE
    //       }
    //     ]
    //   },
    //   condition: { urlFilter: 'https://www.bing.com/', resourceTypes: ALL_RESOURCE_TYPES }
    // }
  ].map((rule, index) => ({
    id: index + 1,
    ...rule
  }));

  // package.json
  var version = "2.1.0";
  var repository = {
    type: "git",
    url: "https://github.com/haozi/New-Bing-Anywhere"
  };

  // src/universe/utils.ts
  var checkIsSimpleChinese = () => {
    try {
      const lang = chrome.i18n.getUILanguage().toLowerCase();
      return lang === "zh-cn";
    } catch {
      return false;
    }
  };
  var checkIsChinese = () => {
    try {
      const lang = chrome.i18n.getUILanguage().toLowerCase();
      return lang === "zh-cn" || lang === "zh-tw" || lang === "zh-hk" || lang === "zh";
    } catch {
      return false;
    }
  };
  var CONFIG_KEY = "configV1";
  var getConfig = async () => {
    const config = (await chrome.storage.sync.get(CONFIG_KEY))[CONFIG_KEY];
    return {
      showGoogleButtonOnBing: true,
      showBingButtonOnGoogle: true,
      showGuideToGithub: true,
      showChat: true,
      triggerMode: "Always",
      conversationStyle: "Balanced",
      ...config
    };
  };
  var registryListener = (callMethods) => {
    chrome.runtime.onMessage.addListener((req, _sender, sendResponse) => {
      ;
      (async () => {
        try {
          const { method, args } = req;
          const data = await callMethods[method](...args);
          sendResponse({ code: 200, msg: "ok", data });
        } catch (e) {
          const err = e ?? {};
          sendResponse({ code: 500, msg: err.stack ?? err.message ?? e });
        }
      })();
      return true;
    });
  };
  var localCache = (() => {
    const v = "v1";
    return {
      get: async (key) => {
        key = `${v}:${key}`;
        const { data, maxAge, lastModified } = (await chrome.storage.local.get(key))?.[key] ?? {};
        if (Date.now() - lastModified > maxAge * 1e3) {
          chrome.storage.local.remove(key);
          return null;
        }
        return data;
      },
      set: async (key, data, maxAge = Infinity) => {
        key = `${v}:${key}`;
        await chrome.storage.local.set({
          [key]: {
            data,
            lastModified: Date.now(),
            maxAge
          }
        });
      }
    };
  })();
  var userAgent = navigator.userAgent;
  var userAgentData = navigator.userAgentData;
  var isMac = userAgent.includes("Macintosh");
  var isFirefox = userAgent.includes("Firefox");
  var isEdge = userAgent.includes("Edg/");
  var isBrave = userAgentData?.brands.findIndex((item) => item.brand === "Brave") > -1;
  var isChinese = checkIsChinese();
  var isSimpleChinese = checkIsSimpleChinese();
  var isCanary = !!globalThis.__NBA_isCanary;
  var version2 = isCanary ? `0.${version}` : version;
  var genUA = () => {
    let ua = userAgent;
    if (!isEdge) {
      if (isMac) {
        ua = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${MAIN_VERSION}.0.0.0 Safari/537.36 Edg/${FULL_VERSION}`;
      } else {
        ua = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${MAIN_VERSION}.0.0.0 Safari/537.36 Edg/${FULL_VERSION}`;
      }
    }
    return ua;
  };
  var genIssueUrl = async (extra) => {
    const repositoryUrl = repository.url;
    try {
      const config = await getConfig();
      const url = `${repositoryUrl}/issues/new?title=&body=`;
      let finalUrl = url;
      let comment = "Please write your comment ABOVE this line, provide as much detailed information and screenshots as possible.The UA may not necessarily reflect your actual browser and platform, so please make sure to indicate them clearly.";
      if (isChinese) {
        comment = "\u8BF7\u5728\u6B64\u884C\u4E0A\u65B9\u53D1\u8868\u60A8\u7684\u8BA8\u8BBA\u3002\u8BE6\u5C3D\u7684\u63CF\u8FF0\u548C\u622A\u56FE\u6709\u52A9\u4E8E\u6211\u4EEC\u5B9A\u4F4D\u95EE\u9898\uFF0CUA \u4E0D\u4E00\u5B9A\u771F\u5B9E\u53CD\u6620\u60A8\u7684\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\uFF0C\u8BF7\u5907\u6CE8\u6E05\u695A";
      }
      const body = ` 



<!--  ${comment} -->
` + Object.entries({
        Version: `${version2}${isCanary ? " (Canary)" : ""} `,
        UA: navigator.userAgent,
        Lang: chrome.i18n.getUILanguage(),
        AcceptLangs: (await chrome.i18n.getAcceptLanguages()).join(", "),
        config: JSON.stringify(config),
        ...extra
      }).map(([key, val]) => {
        return val ? `${key}: ${val}` : "";
      }).join("\n");
      finalUrl += encodeURIComponent(body.slice(0, 2e3));
      return finalUrl;
    } catch {
      return repositoryUrl;
    }
  };

  // src/background/utils.ts
  var getURL = (url = "", base) => {
    try {
      return new URL(url, base);
    } catch (e) {
      return {
        searchParams: {
          get: () => null
        }
      };
    }
  };
  var getURLSearchParams = (url) => {
    try {
      return new URLSearchParams(url);
    } catch {
      return {
        get: () => null
      };
    }
  };
  var openPage = async (url) => {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const urlObj = getURL(url);
    let tab = tabs.find((tab2) => tab2.url?.startsWith(urlObj.origin));
    if (tab == null) {
      tab = await chrome.tabs.create({ url });
    } else {
      await Promise.all(
        [
          chrome.tabs.move(tab.id, { index: tabs.length - 1 }),
          tab.url !== url && chrome.tabs.update(tab.id, { url }),
          chrome.tabs.update(tab.id, { active: true, url: tab.url !== url ? url : void 0 })
        ].filter(Boolean)
      );
    }
    return tab;
  };
  var setCookie = async (options, cookie = {}) => {
    return await chrome.cookies.set({
      domain: cookie.domain,
      storeId: cookie.storeId,
      path: cookie.path,
      httpOnly: cookie.httpOnly,
      secure: cookie.secure,
      sameSite: cookie.sameSite,
      expirationDate: cookie.expirationDate,
      ...options
    });
  };

  // src/background/context_menus.ts
  var contextMenus = {
    // version: {
    //   title: `🧃 Version: ${version}`,
    //   contexts: ['action'],
    //   onclick: () => {
    //     openPage(`${repositoryUrl}/releases/tag/${version}`)
    //   }
    // },
    openChat: {
      title: "\u{1F4AC} New Bing",
      contexts: ["action"],
      onclick: (_info) => {
        openPage("https://www.bing.com/search?q=Bing+AI&showconv=1");
      }
    },
    openImageCreate: {
      title: "\u{1F5BC}\uFE0F New Bing Image Creator",
      contexts: ["action"],
      onclick: (_info) => {
        openPage("https://www.bing.com/create");
      }
    },
    likeIt: {
      title: "\u2764\uFE0F Like it",
      contexts: ["action"],
      onclick: () => {
        openPage("https://chrome.google.com/webstore/detail/new-bing-anywhere/hceobhjokpdbogjkplmfjeomkeckkngi/reviews");
      }
    },
    reportIssues: {
      title: isChinese ? "\u{1F41B} \u53CD\u9988\u5EFA\u8BAE" : "\u{1F41B} Report issues",
      contexts: ["action"],
      onclick: async (_info) => {
        const url = await genIssueUrl();
        openPage(url);
      }
    }
  };
  var context_menus_default = () => {
    chrome.contextMenus.removeAll(() => {
      for (const [id, menu] of Object.entries(contextMenus)) {
        chrome.contextMenus.create({
          id,
          title: menu.title,
          contexts: menu.contexts
        });
      }
    });
    chrome.contextMenus.onClicked.addListener((info, tab) => {
      const { menuItemId } = info;
      const item = contextMenus[menuItemId];
      if (item?.onclick)
        item.onclick(info, tab);
    });
  };

  // src/background/listeners/_notification.ts
  var MAX_AGE = 1e3 * 60 * 60 * 1;
  var KEY = "notification";
  var FLAG_KEY = "notification:hide";
  var getRemoteNotification = async () => {
    let data;
    try {
      data = await fetch("https://api.github.com/repos/haozi/New-Bing-Anywhere/issues/24").then(async (res) => await res.json());
    } catch {
    }
    return data;
  };
  var getNotification = async () => {
    const { [KEY]: oldData } = await chrome.storage.local.get(KEY);
    if (!oldData || oldData.lastModify && Date.now() - oldData.lastModify > MAX_AGE) {
      await chrome.storage.local.remove(KEY);
      const data = await getRemoteNotification();
      if (data) {
        await chrome.storage.local.set({ [KEY]: { data, lastModify: Date.now() } });
      }
    }
    const { [FLAG_KEY]: flag, [KEY]: newData } = await chrome.storage.local.get([FLAG_KEY, KEY]);
    if (!newData?.data)
      return null;
    if (!(newData.data.title && newData.data.state === "open"))
      return null;
    if (flag === 1 && newData.data.title === oldData.data?.title)
      return null;
    await chrome.storage.local.remove(FLAG_KEY);
    return newData.data;
  };
  var hideNotification = async () => {
    chrome.storage.local.set({ [FLAG_KEY]: 1 });
  };

  // src/background/listeners/index.ts
  var getEnv = async () => {
    return {
      version: version2
    };
  };
  var openUrlInSameTab = async ({ url } = {}) => {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const urlObj = getURL(url);
    let tab = tabs.find((tab2) => tab2.url?.startsWith(urlObj.origin));
    if (tab == null) {
      tab = await chrome.tabs.create({ url });
    } else {
      if (tab.id != null) {
        await Promise.all([chrome.tabs.move(tab.id, { index: tabs.length - 1 }), chrome.tabs.update(tab.id, { active: true })]);
      }
    }
    let newUrl = url;
    let query = "";
    let tabQuery = "";
    const isGoogle = urlObj.hostname === "www.google.com";
    const isBing = urlObj.hostname === "www.bing.com";
    if (isGoogle) {
      query = urlObj.searchParams.get("q") ?? "";
      tabQuery = getURL(tab.url).searchParams.get("q") ?? "";
      getURL(tab.url).searchParams.get("q");
    } else if (isBing) {
      query = urlObj.searchParams.get("q") ?? "";
      tabQuery = getURL(tab.url).searchParams.get("q") ?? "";
    }
    query = query.trim();
    tabQuery = tabQuery.trim();
    if (query && query === tabQuery)
      return;
    if (isGoogle) {
      newUrl = `${urlObj.origin}${urlObj.pathname}?q=${encodeURIComponent(query)}`;
    } else if (isBing) {
      newUrl = `${urlObj.origin}${urlObj.pathname}?q=${encodeURIComponent(query)}`;
    }
    await chrome.tabs.update(tab.id, { url: newUrl });
  };
  var listeners_default = {
    getEnv,
    openUrlInSameTab,
    getNotification,
    hideNotification
  };

  // src/background/cross_platform.ts
  var cross_platform_default = () => {
    context_menus_default();
    registryListener(listeners_default);
    chrome.runtime.onInstalled.addListener((details) => {
      const repositoryUrl = repository.url;
      if (isCanary) {
        openPage(`${repositoryUrl}/tree/canary`);
        return;
      }
      if (details.reason === "install") {
        openPage(repositoryUrl);
      } else if (details.reason === "update") {
        openPage(`${repositoryUrl}/releases/tag/v${version2}`);
      }
    });
    chrome.webRequest.onBeforeRequest.addListener(
      () => {
        chrome.cookies.get(
          {
            name: "_EDGE_S",
            url: BING
          },
          (cookie) => {
            const value = cookie?.value;
            if (!value)
              return;
            const valueObj = getURLSearchParams(value);
            const mkt = valueObj.get("mkt")?.toLowerCase() ?? "";
            if (!BAND_MKTS.map((m) => m.toLowerCase()).includes(mkt))
              return;
            if (mkt === "zh-cn") {
              valueObj.set("mkt", "zh-HK");
              valueObj.set("ui", "zh-hans");
            } else {
              valueObj.delete("mkt");
            }
            setCookie(
              {
                url: BING,
                name: cookie.name,
                value: valueObj.toString()
              },
              cookie
            );
          }
        );
        chrome.cookies.get(
          {
            name: "_RwBf",
            url: BING
          },
          (cookie) => {
            const value = cookie?.value;
            if (!value) {
              setCookie({
                url: BING,
                name: "_RwBf",
                value: "wls=2",
                domain: ".bing.com",
                httpOnly: true
              });
              return;
            }
            const valueObj = getURLSearchParams(value);
            const wls = valueObj.get("wls");
            if (wls !== "2" && wls !== "") {
              valueObj.set("wls", "2");
            }
            setCookie(
              {
                url: BING,
                name: "_RwBf",
                domain: ".bing.com",
                httpOnly: true,
                value: valueObj.toString()
              },
              cookie
            );
          }
        );
      },
      { urls: [BING + "*"], types: ["main_frame"] }
    );
  };

  // src/background/dynamic_rules.ts
  var MODIFY_HEADERS_LIST = {
    // 'X-Forwarded-For': '8.8.8.8',
    "User-Agent": genUA()
  };
  var MODIFY_HEADERS2 = "modifyHeaders";
  var SET2 = "set";
  var dynamicRules = [
    {
      priority: 2001,
      action: {
        type: MODIFY_HEADERS2,
        requestHeaders: Object.entries(MODIFY_HEADERS_LIST).map(([header, value]) => ({
          operation: SET2,
          header,
          value
        }))
      },
      condition: {
        requestDomains: ["bing.com", "www.bing.com", "cn.bing.com"],
        resourceTypes: ALL_RESOURCE_TYPES
      }
    }
  ].filter(Boolean).map((rule, index) => ({
    id: index + 1 + 2e3,
    ...rule
  }));

  // src/background/firefox.ts
  var browser = chrome;
  var rules = [...staticRules, ...dynamicRules];
  var modifyRequestHeadersRules = rules.filter((item) => item.action?.type === "modifyHeaders" && item.action?.requestHeaders?.length);
  var modifyResponseHeadersRules = rules.filter((item) => item.action?.type === "modifyHeaders" && item.action?.responseHeaders?.length);
  cross_platform_default();
  browser.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
      if (!details.requestHeaders)
        return;
      const newHeaders = details.requestHeaders;
      for (const rule of modifyRequestHeadersRules) {
        const urlObj = new URL(details.url);
        if (!rule.condition || (rule.condition?.requestDomains ?? []).includes(urlObj.hostname) || new RegExp(rule.condition?.regexFilter ?? "", rule.condition?.isUrlFilterCaseSensitive ? "i" : void 0).test(urlObj.href) || urlObj.href.includes(rule.condition?.urlFilter ?? "")) {
          for (const requestHeader of rule.action.requestHeaders ?? []) {
            switch (requestHeader.operation) {
              case "set":
                if (!details.requestHeaders.find((header) => header.name === requestHeader.header)) {
                  newHeaders.push({
                    name: requestHeader.header,
                    value: requestHeader.value
                  });
                } else {
                  for (const header of details.requestHeaders) {
                    if (header.name.toLowerCase() === requestHeader.header.toLowerCase()) {
                      header.value = requestHeader.value;
                    }
                  }
                }
                break;
              case "append":
                newHeaders.push({
                  name: requestHeader.header,
                  value: requestHeader.value
                });
                break;
              case "remove":
                {
                  const index = newHeaders.findIndex((item) => item.name.toLowerCase() === requestHeader.header.toLowerCase());
                  index > -1 && newHeaders.splice(index, 1);
                }
                break;
              default:
            }
          }
        }
      }
      return { requestHeaders: newHeaders };
    },
    {
      urls: ["<all_urls>"]
    },
    ["blocking", "requestHeaders"]
  );
  browser.webRequest.onHeadersReceived.addListener(
    (details) => {
      if (!details.responseHeaders)
        return;
      const newHeaders = details.responseHeaders;
      for (const rule of modifyResponseHeadersRules) {
        if (
          // !rule.condition ||
          // rule.condition?.regexFilter
          // ?
          new RegExp(rule.condition?.regexFilter ?? "", rule.condition?.isUrlFilterCaseSensitive ? "i" : void 0).test(details.url)
        ) {
          for (const requestHeader of rule.action.responseHeaders ?? []) {
            switch (requestHeader.operation) {
              case "set":
                for (const header of details.responseHeaders) {
                  if (header.name.toLowerCase() === requestHeader.header.toLowerCase()) {
                    header.value = requestHeader.value;
                  } else {
                    newHeaders.push({
                      name: requestHeader.header,
                      value: requestHeader.value
                    });
                  }
                }
                break;
              case "append":
                newHeaders.push({
                  name: requestHeader.header,
                  value: requestHeader.value
                });
                break;
              default:
            }
          }
        }
      }
      return { responseHeaders: newHeaders };
    },
    {
      urls: ["<all_urls>"]
    },
    ["blocking", "responseHeaders"]
  );
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3VuaXZlcnNlL2NvbnN0YW50cy50cyIsICIuLi8uLi9zY3JpcHRzL3N0YXRpY19ydWxlcy50cyIsICIuLi8uLi9wYWNrYWdlLmpzb24iLCAiLi4vLi4vc3JjL3VuaXZlcnNlL3V0aWxzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2NvbnRleHRfbWVudXMudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL19ub3RpZmljYXRpb24udHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2Nyb3NzX3BsYXRmb3JtLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2R5bmFtaWNfcnVsZXMudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvZmlyZWZveC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IEJJTkcgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vJ1xuZXhwb3J0IGNvbnN0IENOX1JFRElSRUNUX1VSTCA9ICdodHRwczovL2NuLmJpbmcuY29tLydcbmV4cG9ydCBjb25zdCBCQU5EX01LVFMgPSBbJ3poLUNOJywgJ3J1JywgJ3J1LXJ1J11cblxuZXhwb3J0IGNvbnN0IE1BSU5fVkVSU0lPTiA9ICcxMTMnXG5leHBvcnQgY29uc3QgRlVMTF9WRVJTSU9OID0gJzExMy4wLjE3NzQuNTcnXG5cbmV4cG9ydCBjb25zdCBBTExfUkVTT1VSQ0VfVFlQRVMgPSBbXG4gICdjc3BfcmVwb3J0JyxcbiAgJ2ZvbnQnLFxuICAnaW1hZ2UnLFxuICAnbWFpbl9mcmFtZScsXG4gICdtZWRpYScsXG4gICdvYmplY3QnLFxuICAnb3RoZXInLFxuICAncGluZycsXG4gICdzY3JpcHQnLFxuICAnc3R5bGVzaGVldCcsXG4gICdzdWJfZnJhbWUnLFxuICAnd2ViYnVuZGxlJyxcbiAgJ3dlYnNvY2tldCcsXG4gICd3ZWJ0cmFuc3BvcnQnLFxuICAneG1saHR0cHJlcXVlc3QnXG5dIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuUmVzb3VyY2VUeXBlW11cbiIsICJpbXBvcnQgeyBBTExfUkVTT1VSQ0VfVFlQRVMsIEJJTkcsIEZVTExfVkVSU0lPTiwgTUFJTl9WRVJTSU9OIH0gZnJvbSAnLi4vc3JjL3VuaXZlcnNlL2NvbnN0YW50cydcblxuY29uc3QgTU9ESUZZX0hFQURFUlMgPSAnbW9kaWZ5SGVhZGVycycgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5SdWxlQWN0aW9uVHlwZS5NT0RJRllfSEVBREVSU1xuY29uc3QgUkVESVJFQ1QgPSAncmVkaXJlY3QnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuUnVsZUFjdGlvblR5cGUuUkVESVJFQ1RcbmNvbnN0IEFQUEVORCA9ICdhcHBlbmQnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuSGVhZGVyT3BlcmF0aW9uLkFQUEVORFxuLy8gY29uc3QgUkVNT1ZFID0gJ3JlbW92ZScgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5IZWFkZXJPcGVyYXRpb24uUkVNT1ZFXG5jb25zdCBTRVQgPSAnc2V0JyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LkhlYWRlck9wZXJhdGlvbi5TRVRcblxuZXhwb3J0IGNvbnN0IHN0YXRpY1J1bGVzOiBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJ1bGVbXSA9IFtcbiAge1xuICAgIGFjdGlvbjoge1xuICAgICAgdHlwZTogTU9ESUZZX0hFQURFUlMsXG4gICAgICByZXF1ZXN0SGVhZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgb3BlcmF0aW9uOiBTRVQsXG4gICAgICAgICAgaGVhZGVyOiAnc2VjLWNoLXVhJyxcbiAgICAgICAgICB2YWx1ZTogYFwiTWljcm9zb2Z0IEVkZ2VcIjt2PVwiJHtNQUlOX1ZFUlNJT059XCIsIFwiQ2hyb21pdW1cIjt2PVwiJHtNQUlOX1ZFUlNJT059XCIsIFwiTm90LUEuQnJhbmRcIjt2PVwiMjRcImBcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG9wZXJhdGlvbjogU0VULFxuICAgICAgICAvLyAgIGhlYWRlcjogJ3NlYy1jaC11YS1hcmNoJyxcbiAgICAgICAgLy8gICB2YWx1ZTogJ1wieDg2XCInXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgLy8gICBoZWFkZXI6ICdzZWMtY2gtdWEtYml0bmVzcycsXG4gICAgICAgIC8vICAgdmFsdWU6ICdcIjY0XCInXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgICBoZWFkZXI6ICdzZWMtY2gtdWEtZnVsbC12ZXJzaW9uJyxcbiAgICAgICAgICB2YWx1ZTogYFwiJHtGVUxMX1ZFUlNJT059XCJgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgICBoZWFkZXI6ICdzZWMtY2gtdWEtZnVsbC12ZXJzaW9uLWxpc3QnLFxuICAgICAgICAgIHZhbHVlOiBgXCJNaWNyb3NvZnQgRWRnZVwiO3Y9XCIke0ZVTExfVkVSU0lPTn1cIiwgXCJDaHJvbWl1bVwiO3Y9XCIxMTMuMC41NjcyLjEyN1wiLCBcIk5vdC1BLkJyYW5kXCI7dj1cIjI0LjAuMC4wXCJgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgICBoZWFkZXI6ICdzZWMtbXMtZ2VjLXZlcnNpb24nLFxuICAgICAgICAgIHZhbHVlOiBgMS0ke0ZVTExfVkVSU0lPTn1gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgICBoZWFkZXI6ICdVc2VyLUFnZW50JyxcbiAgICAgICAgICB2YWx1ZTogYE1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8ke01BSU5fVkVSU0lPTn0uMC4wLjAgU2FmYXJpLzUzNy4zNiBFZGcvJHtGVUxMX1ZFUlNJT059YFxuICAgICAgICB9XG5cbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG9wZXJhdGlvbjogU0VULFxuICAgICAgICAvLyAgIGhlYWRlcjogJ3NlYy1tcy1nZWMnLFxuICAgICAgICAvLyAgIHZhbHVlOiAnQjU1REY4NjU4Mjc5MTJGQjBFRENDRUM0NzI4NEJGQjIyRDNEMkQ0NTM2MjNERTk3QjJDQ0VEREJCNTdEQUQyMydcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgb3BlcmF0aW9uOiBSRU1PVkUsXG4gICAgICAgIC8vICAgaGVhZGVyOiAnWC1Gb3J3YXJkZWQtRm9yJ1xuICAgICAgICAvLyB9XG4gICAgICBdXG4gICAgfSxcbiAgICBjb25kaXRpb246IHtcbiAgICAgIHJlcXVlc3REb21haW5zOiBbJ2JpbmcuY29tJywgJ3d3dy5iaW5nLmNvbScsICdjbi5iaW5nLmNvbSddLFxuICAgICAgcmVzb3VyY2VUeXBlczogQUxMX1JFU09VUkNFX1RZUEVTXG4gICAgfVxuICB9LFxuICB7XG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBSRURJUkVDVCxcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHJlZ2V4U3Vic3RpdHV0aW9uOiAnXFxcXDFzZXRsYW5nPXpoLUhhbnMmbWt0PXpoLUhLXFxcXDInXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25kaXRpb246IHtcbiAgICAgIC8vIGh0dHBzOi8vcmVnZXgxMDEuY29tL3IvTEM2OGhaLzFcbiAgICAgIHJlZ2V4RmlsdGVyOiAnKF5odHRwczpcXFxcL1xcXFwvd3d3XFxcXC5iaW5nXFxcXC5jb21cXFxcLyg/OnNlYXJjaHxcXFxcP3xhY2NvdW50L2FjdGlvbikuKj8pKD86bWt0PXpoLUNOfGNjPWNufGNjPXpoLWNufGNjPXpoKSguKiknLFxuICAgICAgaXNVcmxGaWx0ZXJDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgIHJlcXVlc3REb21haW5zOiBbJ3d3dy5iaW5nLmNvbSddLFxuICAgICAgcmVzb3VyY2VUeXBlczogQUxMX1JFU09VUkNFX1RZUEVTXG4gICAgfVxuICB9LFxuICB7XG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBSRURJUkVDVCxcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHJlZ2V4U3Vic3RpdHV0aW9uOiAnXFxcXDFzZXRsYW5nPXJ1JmNjPWNsZWFuJm1rdD1lbi11c1xcXFwyJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICAvLyBodHRwczovL3JlZ2V4MTAxLmNvbS9yL0xDNjhoWi8xXG4gICAgICByZWdleEZpbHRlcjogJyheaHR0cHM6XFxcXC9cXFxcL3d3d1xcXFwuYmluZ1xcXFwuY29tXFxcXC8oPzpzZWFyY2h8XFxcXD98YWNjb3VudC9hY3Rpb24pLio/KSg/Om1rdD1ydS1ydXxta3Q9cnV8Y2M9cnUpKC4qKScsXG4gICAgICBpc1VybEZpbHRlckNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgcmVxdWVzdERvbWFpbnM6IFsnd3d3LmJpbmcuY29tJ10sXG4gICAgICByZXNvdXJjZVR5cGVzOiBBTExfUkVTT1VSQ0VfVFlQRVNcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IFJFRElSRUNULFxuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgdXJsOiBgJHtCSU5HfT9zZXRsYW5nPXpoLUhhbnMmbWt0PXpoLUhLYFxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICByZWdleEZpbHRlcjogJ1xcXFwvXFxcXD8oPzpuZXctYmluZy1hbnl3aGVyZXxuYmF8cnVuKScsXG4gICAgICBpc1VybEZpbHRlckNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgcmVxdWVzdERvbWFpbnM6IFsnd3d3LmJpbmcuY29tJ10sXG4gICAgICByZXNvdXJjZVR5cGVzOiBBTExfUkVTT1VSQ0VfVFlQRVNcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwcmlvcml0eTogOTksXG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBSRURJUkVDVCxcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHJlZ2V4U3Vic3RpdHV0aW9uOiBgJHtCSU5HfVxcXFwxYFxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICAvLyBodHRwczovL2NuLmJpbmcuY29tL3NlYXJjaD9xPWZkc2FmZHNhZmRzYWZkc2FmZHNhZmRzYWZkc2FmZHNhZiZjdmlkPTQ5NDAwYjZmYWUwMTRmZjNiMjM0MTFiNTQxY2M3MTE1JmFxcz1lZGdlLi42OWk1Ny4zOTc0ajBqOSZGT1JNPUFOQUIwMSZEQUYwPTEmUEM9Q05ORERCXG4gICAgICByZXF1ZXN0RG9tYWluczogWydjbi5iaW5nLmNvbScsICdiaW5nLmNvbSddLFxuICAgICAgcmVnZXhGaWx0ZXI6ICdeaHR0cCg/OnMpPzpcXFxcL1xcXFwvKD86Y25cXFxcLik/YmluZ1xcXFwuY29tXFxcXC8oLiopJyxcbiAgICAgIHJlc291cmNlVHlwZXM6IEFMTF9SRVNPVVJDRV9UWVBFU1xuICAgIH1cbiAgfSxcbiAge1xuICAgIGFjdGlvbjoge1xuICAgICAgdHlwZTogTU9ESUZZX0hFQURFUlMsXG4gICAgICByZXNwb25zZUhlYWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcjogJ1NldC1Db29raWUnLFxuICAgICAgICAgIG9wZXJhdGlvbjogQVBQRU5ELFxuICAgICAgICAgIHZhbHVlOiAnU05SSE9QPUk9ODsgZG9tYWluPS5iaW5nLmNvbTsgcGF0aD0vOyBzZWN1cmU7IFNhbWVTaXRlPU5vbmU7IEh0dHBPbmx5OydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICByZXF1ZXN0RG9tYWluczogWydiaW5nLmNvbScsICd3d3cuYmluZy5jb20nXVxuICAgIH1cbiAgfVxuICAvLyB7XG4gIC8vICAgYWN0aW9uOiB7XG4gIC8vICAgICB0eXBlOiBNT0RJRllfSEVBREVSUyxcbiAgLy8gICAgIHJlc3BvbnNlSGVhZGVyczogW1xuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgaGVhZGVyOiAnU2V0LUNvb2tpZScsXG4gIC8vICAgICAgICAgb3BlcmF0aW9uOiBSRU1PVkVcbiAgLy8gICAgICAgfVxuICAvLyAgICAgXVxuICAvLyAgIH0sXG4gIC8vICAgY29uZGl0aW9uOiB7IHVybEZpbHRlcjogJ2h0dHBzOi8vd3d3LmJpbmcuY29tLycsIHJlc291cmNlVHlwZXM6IEFMTF9SRVNPVVJDRV9UWVBFUyB9XG4gIC8vIH1cbl0ubWFwKChydWxlLCBpbmRleCkgPT4gKHtcbiAgaWQ6IGluZGV4ICsgMSxcbiAgLi4ucnVsZVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRpY1J1bGVzXG4iLCAie1xuICBcIm5hbWVcIjogXCJuZXctYmluZy1hbnl3aGVyZVwiLFxuICBcInZlcnNpb25cIjogXCIyLjEuMFwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIGlzbid0IGp1c3QgZm9yIEVkZ2UgYW55bW9yZS4gQW55d2hlcmUgeW91IHdhbnRcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9oYW96aS9OZXctQmluZy1Bbnl3aGVyZVwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2hhb3ppL05ldy1CaW5nLUFueXdoZXJlXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiR1BMdjNcIixcbiAgXCJhdXRob3JcIjogXCJoYW96aVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJybSAtcmYgZGlzdCAmJiBta2RpciAtcCBkaXN0ICYmIHBucG0gcnVuIGxpbnQgJiYgcG5wbSBydW4gYnVpbGQ6YnVuZGxlXCIsXG4gICAgXCJidWlsZDpidW5kbGVcIjogXCJOT0RFX0VOVj1wcm9kdWN0aW9uIHZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGJ1aWxkXCIsXG4gICAgXCJjb3B5XCI6IFwicm0gLXJmIGRpc3QgJiYgY3AgLXIgcHVibGljIGRpc3RcIixcbiAgICBcImNvcHk6c29ydWNlXCI6IFwicnN5bmMgLXZocmEgLiBkaXN0L3NvdXJjZSAtLWluY2x1ZGU9JyoqLmdpdGlnbm9yZScgLS1leGNsdWRlPScvLmdpdCcgLS1leGNsdWRlPSdkaXN0JyAgLS1maWx0ZXI9JzotIC5naXRpZ25vcmUnIC0tZGVsZXRlLWFmdGVyXCIsXG4gICAgXCJjb3B5OndhdGNoXCI6IFwicG5wbSBydW4gY29weSAtLSAtLXdhdGNoXCIsXG4gICAgXCJkZXZcIjogXCJwbnBtIHJ1biBsaW50ICYmIHBucG0gcnVuICcvXmRldjouKi8nXCIsXG4gICAgXCJkZXY6YXBwXCI6IFwicG5wbSAtLWZpbHRlciBhcHAgcnVuIGRldlwiLFxuICAgIFwiZGV2OmJ1bmRsZVwiOiBcInZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGRldlwiLFxuICAgIFwibGludFwiOiBcInBucG0gcnVuIHByZXR0aWVyICYmIHBucG0gcnVuICcvXmxpbnQ6LiovJ1wiLFxuICAgIFwibGludDplc2xpbnRcIjogXCJlc2xpbnQgLS1leHQgLmpzLC50cyAuL3NyYyAtLWZpeCAtLWNhY2hlXCIsXG4gICAgXCJsaW50OnN0eWx1c1wiOiBcInN0eWx1cy1zdXByZW1hY3kgZm9ybWF0IC4vc3JjLyoqLyouc3R5bCAgLS1vcHRpb25zIC4vc3R5bHVzLXN1cHJlbWFjeS5qc29uIC0tcmVwbGFjZVwiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGwgJiYgcG5wbSBydW4gYnVpbGRcIixcbiAgICBcInByZXR0aWVyXCI6IFwicHJldHRpZXIgLS1jYWNoZSAtLXdyaXRlIC5cIixcbiAgICBcInByZXR0aWVyOndhdGNoXCI6IFwib25jaGFuZ2UgXFxcIioqLypcXFwiIC0tIHByZXR0aWVyIC0tY2FjaGUgLS13cml0ZSAtLWlnbm9yZS11bmtub3duIC0taWdub3JlLXBhdGggLnByZXR0aWVyaWdub3JlIHt7Y2hhbmdlZH19ID4gL2Rldi9udWxsIDI+JjFcIixcbiAgICBcInRlc3RcIjogXCJwbnBtIHJ1biBsaW50XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL3plcHRvXCI6IFwiXjEuMC4zM1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0eXBlcy9jaHJvbWVcIjogXCJeMC4wLjIzN1wiLFxuICAgIFwiQHR5cGVzL2ZzLWV4dHJhXCI6IFwiXjExLjAuMVwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMy4xXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl41LjYwLjBcIixcbiAgICBcImNvcHktYW5kLXdhdGNoXCI6IFwiXjAuMS42XCIsXG4gICAgXCJlc2J1aWxkXCI6IFwiXjAuMTguNVwiLFxuICAgIFwiZXNidWlsZC1wbHVnaW4tc3ZnclwiOiBcIl4yLjAuMFwiLFxuICAgIFwiZXNidWlsZC1zdHlsZS1wbHVnaW5cIjogXCJeMS42LjJcIixcbiAgICBcImVzbGludFwiOiBcIl44LjQzLjBcIixcbiAgICBcImVzbGludC1jb25maWctc3RhbmRhcmQtd2l0aC10eXBlc2NyaXB0XCI6IFwiXjM1LjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yNy41XCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLW5cIjogXCJeMTYuMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLW5vZGVcIjogXCJeMTEuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByZXR0aWVyXCI6IFwiXjQuMi4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByb21pc2VcIjogXCJeNi4xLjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4zMi4yXCIsXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4xLjFcIixcbiAgICBcImh1c2t5XCI6IFwiXjguMC4zXCIsXG4gICAgXCJtZDUtZmlsZVwiOiBcIl41LjAuMFwiLFxuICAgIFwib25jaGFuZ2VcIjogXCJeNy4xLjBcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjIuOC44XCIsXG4gICAgXCJzb3J0LXBhY2thZ2UtanNvblwiOiBcIl4yLjQuMVwiLFxuICAgIFwic3R5bHVzXCI6IFwiXjAuNTkuMFwiLFxuICAgIFwic3R5bHVzLXN1cHJlbWFjeVwiOiBcIl4yLjE3LjVcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4xLjNcIixcbiAgICBcInZpdGUtbm9kZVwiOiBcIl4wLjMyLjJcIlxuICB9LFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIl4yMC4zLjBcIixcbiAgICBcInBucG1cIjogXCJeOC42LjNcIlxuICB9LFxuICBcImV4dGVuc2lvbi1pMThuXCI6IHtcbiAgICBcImVuXCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiTmV3IEJpbmcgQ2hhdCBjYW4gYmUgdXNlZCBpbiBhbnkgYnJvd3Nlciwgd2l0aCBhbnkgc2VhcmNoIGVuZ2luZSwgYW5kIGluIGFueSBjb3VudHJ5LlwiXG4gICAgfSxcbiAgICBcInpoX0NOXCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiTmV3IEJpbmcgQ2hhdCBjYW4gYmUgdXNlZCBpbiBhbnkgYnJvd3Nlciwgd2l0aCBhbnkgc2VhcmNoIGVuZ2luZSwgYW5kIGluIGFueSBjb3VudHJ5LiBcdTk2OEZcdTY1RjZcdTk2OEZcdTU3MzBcdUZGMENcdTY3MDlcdTZDNDJcdTVGQzVcdTVFOTRcdTMwMDJcIlxuICAgIH0sXG4gICAgXCJ6aF9UV1wiOiB7XG4gICAgICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiLFxuICAgICAgXCJleHRlbnNpb25EZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIENoYXQgY2FuIGJlIHVzZWQgaW4gYW55IGJyb3dzZXIsIHdpdGggYW55IHNlYXJjaCBlbmdpbmUsIGFuZCBpbiBhbnkgY291bnRyeS4gXHU5NkE4XHU2NjQyXHU5NkE4XHU1NzMwXHVGRjBDXHU2NzA5XHU2QzQyXHU1RkM1XHU2MUM5XCJcbiAgICB9LFxuICAgIFwicnVcIjoge1xuICAgICAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIixcbiAgICAgIFwiZXh0ZW5zaW9uRGVzY3JpcHRpb25cIjogXCJcdTA0MjdcdTA0MzBcdTA0NDIgTmV3IEJpbmcgXHUwNDNDXHUwNDNFXHUwNDM2XHUwNDM1XHUwNDQyIFx1MDQzOFx1MDQ0MVx1MDQzRlx1MDQzRVx1MDQzQlx1MDQ0Q1x1MDQzN1x1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0Q1x1MDQ0MVx1MDQ0RiBcdTA0MzIgXHUwNDNCXHUwNDRFXHUwNDMxXHUwNDNFXHUwNDNDIFx1MDQzMVx1MDQ0MFx1MDQzMFx1MDQ0M1x1MDQzN1x1MDQzNVx1MDQ0MFx1MDQzNSwgXHUwNDQxIFx1MDQzQlx1MDQ0RVx1MDQzMVx1MDQ0Qlx1MDQzQyBcdTA0M0ZcdTA0M0VcdTA0MzhcdTA0NDFcdTA0M0FcdTA0M0VcdTA0MzJcdTA0NEJcdTA0M0MgXHUwNDM0XHUwNDMyXHUwNDM4XHUwNDM2XHUwNDNBXHUwNDNFXHUwNDNDIFx1MDQzOCBcdTA0MzIgXHUwNDNCXHUwNDRFXHUwNDMxXHUwNDNFXHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzMFx1MDQzRFx1MDQzNS5cIlxuICAgIH1cbiAgfSxcbiAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIlxufVxuIiwgImltcG9ydCB7IHZlcnNpb24gYXMgcGtnVmVyc2lvbiwgcmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IEZVTExfVkVSU0lPTiwgTUFJTl9WRVJTSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyB0eXBlIEJpbmcgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgY2hlY2tJc0dvb2dsZSA9ICgpID0+IHtcbiAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lLmluY2x1ZGVzKCdnb29nbGUnKVxufVxuZXhwb3J0IGNvbnN0IGxzID0ge1xuICBzZXQ6IGFzeW5jIDxUID0gYW55PihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBLRVkgPSBgTkJBQCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9YFxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoXG4gICAgICAgIHtcbiAgICAgICAgICBbS0VZXTogdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSlcbiAgfSxcbiAgZ2V0OiBhc3luYyA8VCA9IGFueT4oa2V5OiBzdHJpbmcpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+ID0+IHtcbiAgICBjb25zdCBLRVkgPSBgTkJBQCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9YFxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtLRVldLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0W0tFWV0pXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIHJlbW92ZTogYXN5bmMgKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgS0VZID0gYE5CQUAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfWBcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtLRVldKVxuICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsVGFicyA9IGFzeW5jIChxdWVyeUluZm86IGNocm9tZS50YWJzLlF1ZXJ5SW5mbyA9IHsgc3RhdHVzOiAnY29tcGxldGUnIH0pOiBQcm9taXNlPElUYWJbXT4gPT4ge1xuICBjb25zdCBuZXdUYWJzOiBJVGFiW10gPSAoYXdhaXQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlJbmZvKSkgYXMgSVRhYltdXG4gIGNvbnN0IG9sZFRhYnM6IElUYWJbXSA9IHVuaXF1ZSgoYXdhaXQgbHMuZ2V0PElUYWJbXT4oJ2N1cnJlbnRUYWJzJykpISlcbiAgZm9yIChjb25zdCBuZXdUYWIgb2YgbmV3VGFicykge1xuICAgIGZvciAoY29uc3Qgb2xkVGFiIG9mIG9sZFRhYnMpIHtcbiAgICAgIGlmIChvbGRUYWIudXJsICE9IG51bGwgJiYgb2xkVGFiLnVybCA9PT0gbmV3VGFiLnVybCkge1xuICAgICAgICBuZXdUYWIuJGV4dHJhID0gb2xkVGFiLiRleHRyYVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgdGFicyA9IG5ld1RhYnMuY29uY2F0KG9sZFRhYnMpXG4gIHRhYnMgPSB0YWJzLmZpbHRlcigodGFiKSA9PiB7XG4gICAgY29uc3QgdXJsID0gdGFiLnVybCA/PyAnJ1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHVybC5zdGFydHNXaXRoKCdjaHJvbWUtZXh0ZW5zaW9uOi8vJylcbiAgfSlcbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICBpZiAodGFiLnVybCA9PSBudWxsKSByZXR1cm5cbiAgICB0YWIudXJsID0gdGFiLnVybC5yZXBsYWNlKC8jLiokLywgJycpXG4gIH0pXG4gIHRhYnMgPSB1bmlxdWUodGFicywgJ3VybCcpLnNsaWNlKDAsIDUwMDApXG4gIHJldHVybiB0YWJzXG59XG5cbmV4cG9ydCBjb25zdCB1bmlxdWUgPSA8VD4oYXJyOiBUW10sIGtleTogc3RyaW5nID0gJ3VybCcpOiBUW10gPT4ge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKClcbiAgcmV0dXJuIGFyci5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgIGlmIChtYXAuaGFzKGl0ZW1ba2V5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXAuc2V0KGl0ZW1ba2V5XSwgdHJ1ZSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgdHlwZSBJVGFiID0gY2hyb21lLnRhYnMuVGFiICYge1xuICAkZXh0cmE/OiB7XG4gICAgbGFzdE1vZGlmaWVkOiBudW1iZXJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmluZFNhbWVVcmxUYWIgPSBhc3luYyAodXJsPzogc3RyaW5nLCBxdWVyeUluZm86IGNocm9tZS50YWJzLlF1ZXJ5SW5mbyA9IHt9KTogUHJvbWlzZTxjaHJvbWUudGFicy5UYWIgfCBudWxsPiA9PiB7XG4gIGlmICghdXJsKSByZXR1cm4gbnVsbFxuICBjb25zdCBvcGVuZWRUYWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlJbmZvKVxuICByZXR1cm4gKFxuICAgIG9wZW5lZFRhYnMuZmluZCgob3BlbmVkVGFiKSA9PiB7XG4gICAgICBpZiAoIW9wZW5lZFRhYi51cmwpIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChvcGVuZWRUYWIudXJsKSA9PT0gdXJsXG4gICAgfSkgPz8gbnVsbFxuICApXG59XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVVcmwgPSAodXJsOiBzdHJpbmcgPSAnJyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvIy4qJC8sICcnKVxufVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSBhc3luYyAoZGVsYXk6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpXG4gIH0pXG59XG5cbi8qKlxuICogY2hlY2sgaWYgaXMgQ2hpbmVzZVxuICovXG5leHBvcnQgY29uc3QgY2hlY2tJc1NpbXBsZUNoaW5lc2UgPSAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbGFuZyA9IGNocm9tZS5pMThuLmdldFVJTGFuZ3VhZ2UoKS50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIGxhbmcgPT09ICd6aC1jbidcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrSXNDaGluZXNlID0gKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGxhbmcgPSBjaHJvbWUuaTE4bi5nZXRVSUxhbmd1YWdlKCkudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiBsYW5nID09PSAnemgtY24nIHx8IGxhbmcgPT09ICd6aC10dycgfHwgbGFuZyA9PT0gJ3poLWhrJyB8fCBsYW5nID09PSAnemgnXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogY2hlY2sgaWYgaW4gTWFpbmxhbmQgQ2hpbmFcbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ04gPSAoKSA9PiB7XG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBDT05GSUdfS0VZID0gJ2NvbmZpZ1YxJ1xuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICBzaG93R29vZ2xlQnV0dG9uT25CaW5nOiBib29sZWFuXG4gIHNob3dCaW5nQnV0dG9uT25Hb29nbGU6IGJvb2xlYW5cbiAgc2hvd0d1aWRlVG9HaXRodWI6IGJvb2xlYW5cbiAgc2hvd0NoYXQ6IGJvb2xlYW5cbiAgdHJpZ2dlck1vZGU6ICdBbHdheXMnIHwgJ1F1ZXN0aW9ubWFyaycgfCAnTWFudWFsbHknXG4gIGNvbnZlcnNhdGlvblN0eWxlOiBCaW5nLkNvbnZlcnNhdGlvblN0eWxlXG59XG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnID0gYXN5bmMgKCk6IFByb21pc2U8Q29uZmlnPiA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IChhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChDT05GSUdfS0VZKSlbQ09ORklHX0tFWV1cbiAgcmV0dXJuIHtcbiAgICBzaG93R29vZ2xlQnV0dG9uT25CaW5nOiB0cnVlLFxuICAgIHNob3dCaW5nQnV0dG9uT25Hb29nbGU6IHRydWUsXG4gICAgc2hvd0d1aWRlVG9HaXRodWI6IHRydWUsXG4gICAgc2hvd0NoYXQ6IHRydWUsXG4gICAgdHJpZ2dlck1vZGU6ICdBbHdheXMnLFxuICAgIGNvbnZlcnNhdGlvblN0eWxlOiAnQmFsYW5jZWQnLFxuICAgIC4uLmNvbmZpZ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRDb25maWcgPSBhc3luYyAodmFsdWVzOiBQYXJ0aWFsPENvbmZpZz4pID0+IHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKClcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1xuICAgIFtDT05GSUdfS0VZXToge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgLi4udmFsdWVzXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZXNjYXBlSHRtbCA9IChzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gU3RyaW5nKHMpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgJyYjeDJmOycpXG59XG5cbnR5cGUgSU1ldGhvZHMgPSBSZWNvcmQ8c3RyaW5nLCAoLi4uYXJnczogYW55W10pID0+IFByb21pc2U8YW55Pj5cbmV4cG9ydCBjb25zdCByZWdpc3RyeUxpc3RlbmVyID0gKGNhbGxNZXRob2RzOiBJTWV0aG9kcykgPT4ge1xuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcSwgX3NlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgOyhhc3luYyAoKSA9PiB7XG4gICAgICAvLyBpZiBub3QgcmV0dXJuIHRydWUgaW1tZWRpYXRlbHlcdUZGMEN3aWxsIHRocm93IGVycm9yIGBVbmNoZWNrZWQgcnVudGltZS5sYXN0RXJyb3I6IFRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5gXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IG1ldGhvZCwgYXJncyB9ID0gcmVxXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjYWxsTWV0aG9kc1ttZXRob2RdKC4uLmFyZ3MpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGNvZGU6IDIwMCwgbXNnOiAnb2snLCBkYXRhIH0pXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZXJyID0gZSA/PyB7fVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBjb2RlOiA1MDAsIG1zZzogZXJyLnN0YWNrID8/IGVyci5tZXNzYWdlID8/IGUgfSlcbiAgICAgIH1cbiAgICB9KSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNhbGxCYWNrZ3JvdW5kID0gYXN5bmMgPFQgPSBhbnk+KG1ldGhvZDogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogUHJvbWlzZTxUPiA9PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgYXJnczogWy4uLmFyZ3NdXG4gICAgICB9LFxuICAgICAgKHJlcykgPT4ge1xuICAgICAgICBpZiAoIXJlcyB8fCByZXMuY29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgcmVqZWN0KHJlcz8ubXNnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBsb2NhbENhY2hlID0gKCgpID0+IHtcbiAgY29uc3QgdiA9ICd2MSdcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGFzeW5jIDxUID0gYW55PihrZXk6IHN0cmluZyk6IFByb21pc2U8bnVsbCB8IFQ+ID0+IHtcbiAgICAgIGtleSA9IGAke3Z9OiR7a2V5fWBcbiAgICAgIGNvbnN0IHsgZGF0YSwgbWF4QWdlLCBsYXN0TW9kaWZpZWQgfSA9IChhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoa2V5KSk/LltrZXldID8/IHt9XG4gICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RNb2RpZmllZCA+IG1heEFnZSAqIDEwMDApIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSxcblxuICAgIHNldDogYXN5bmMgPFQgPSBvYmplY3Q+KGtleTogc3RyaW5nLCBkYXRhOiBULCBtYXhBZ2U6IG51bWJlciA9IEluZmluaXR5IC8qIFx1NTM1NVx1NEY0RFx1NzlEMiAqLyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAga2V5ID0gYCR7dn06JHtrZXl9YFxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgW2tleV06IHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGxhc3RNb2RpZmllZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBtYXhBZ2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pKClcblxuZXhwb3J0IGNvbnN0IHRvRGF0YVVybCA9IGFzeW5jICh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oYXN5bmMgKHIpID0+IGF3YWl0IHIuYmxvYigpKVxuICAgICAgLnRoZW4oKGJsb2IpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3RcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYilcbiAgICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnRcbmNvbnN0IHVzZXJBZ2VudERhdGEgPSAobmF2aWdhdG9yIGFzIGFueSkudXNlckFnZW50RGF0YVxuXG5leHBvcnQgY29uc3QgaXNNYWMgPSB1c2VyQWdlbnQuaW5jbHVkZXMoJ01hY2ludG9zaCcpXG5leHBvcnQgY29uc3QgaXNGaXJlZm94ID0gdXNlckFnZW50LmluY2x1ZGVzKCdGaXJlZm94JylcbmV4cG9ydCBjb25zdCBpc0VkZ2UgPSB1c2VyQWdlbnQuaW5jbHVkZXMoJ0VkZy8nKVxuZXhwb3J0IGNvbnN0IGlzQnJhdmUgPSB1c2VyQWdlbnREYXRhPy5icmFuZHMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJyYW5kID09PSAnQnJhdmUnKSA+IC0xXG5leHBvcnQgY29uc3QgaXNDaGluZXNlID0gY2hlY2tJc0NoaW5lc2UoKVxuZXhwb3J0IGNvbnN0IGlzU2ltcGxlQ2hpbmVzZSA9IGNoZWNrSXNTaW1wbGVDaGluZXNlKClcbmV4cG9ydCBjb25zdCBpc0NhbmFyeTogYm9vbGVhbiA9ICEhZ2xvYmFsVGhpcy5fX05CQV9pc0NhbmFyeVxuZXhwb3J0IGNvbnN0IHZlcnNpb246IHN0cmluZyA9IGlzQ2FuYXJ5ID8gYDAuJHtwa2dWZXJzaW9ufWAgOiBwa2dWZXJzaW9uXG5cbmV4cG9ydCBjb25zdCBnZW5VQSA9ICgpID0+IHtcbiAgbGV0IHVhID0gdXNlckFnZW50XG4gIGlmICghaXNFZGdlKSB7XG4gICAgaWYgKGlzTWFjKSB7XG4gICAgICB1YSA9IGBNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvJHtNQUlOX1ZFUlNJT059LjAuMC4wIFNhZmFyaS81MzcuMzYgRWRnLyR7RlVMTF9WRVJTSU9OfWBcbiAgICB9IGVsc2Uge1xuICAgICAgdWEgPSBgTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLyR7TUFJTl9WRVJTSU9OfS4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8ke0ZVTExfVkVSU0lPTn1gXG4gICAgfVxuICB9XG4gIHJldHVybiB1YVxufVxuXG5leHBvcnQgY29uc3QgZ2VuSXNzdWVVcmwgPSBhc3luYyAoZXh0cmE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPikgPT4ge1xuICBjb25zdCByZXBvc2l0b3J5VXJsOiBzdHJpbmcgPSByZXBvc2l0b3J5LnVybFxuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGdldENvbmZpZygpXG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSBgJHtyZXBvc2l0b3J5VXJsfS9pc3N1ZXMvbmV3P3RpdGxlPSZib2R5PWBcbiAgICBsZXQgZmluYWxVcmw6IHN0cmluZyA9IHVybFxuICAgIGxldCBjb21tZW50ID1cbiAgICAgICdQbGVhc2Ugd3JpdGUgeW91ciBjb21tZW50IEFCT1ZFIHRoaXMgbGluZSwgcHJvdmlkZSBhcyBtdWNoIGRldGFpbGVkIGluZm9ybWF0aW9uIGFuZCBzY3JlZW5zaG90cyBhcyBwb3NzaWJsZS4nICtcbiAgICAgICdUaGUgVUEgbWF5IG5vdCBuZWNlc3NhcmlseSByZWZsZWN0IHlvdXIgYWN0dWFsIGJyb3dzZXIgYW5kIHBsYXRmb3JtLCBzbyBwbGVhc2UgbWFrZSBzdXJlIHRvIGluZGljYXRlIHRoZW0gY2xlYXJseS4nXG4gICAgaWYgKGlzQ2hpbmVzZSkge1xuICAgICAgY29tbWVudCA9ICdcdThCRjdcdTU3MjhcdTZCNjRcdTg4NENcdTRFMEFcdTY1QjlcdTUzRDFcdTg4NjhcdTYwQThcdTc2ODRcdThCQThcdThCQkFcdTMwMDJcdThCRTZcdTVDM0RcdTc2ODRcdTYzQ0ZcdThGRjBcdTU0OENcdTYyMkFcdTU2RkVcdTY3MDlcdTUyQTlcdTRFOEVcdTYyMTFcdTRFRUNcdTVCOUFcdTRGNERcdTk1RUVcdTk4OThcdUZGMENVQSBcdTRFMERcdTRFMDBcdTVCOUFcdTc3MUZcdTVCOUVcdTUzQ0RcdTY2MjBcdTYwQThcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTU0OENcdTVFNzNcdTUzRjBcdUZGMENcdThCRjdcdTU5MDdcdTZDRThcdTZFMDVcdTY5NUEnXG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9XG4gICAgICAnIFxcblxcblxcblxcbicgK1xuICAgICAgYDwhLS0gICR7Y29tbWVudH0gLS0+XFxuYCArXG4gICAgICBPYmplY3QuZW50cmllczxzdHJpbmc+KHtcbiAgICAgICAgVmVyc2lvbjogYCR7dmVyc2lvbn0ke2lzQ2FuYXJ5ID8gJyAoQ2FuYXJ5KScgOiAnJ30gYCxcbiAgICAgICAgVUE6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgIExhbmc6IGNocm9tZS5pMThuLmdldFVJTGFuZ3VhZ2UoKSxcbiAgICAgICAgQWNjZXB0TGFuZ3M6IChhd2FpdCBjaHJvbWUuaTE4bi5nZXRBY2NlcHRMYW5ndWFnZXMoKSkuam9pbignLCAnKSxcbiAgICAgICAgY29uZmlnOiBKU09OLnN0cmluZ2lmeShjb25maWcpLFxuICAgICAgICAuLi5leHRyYVxuICAgICAgfSlcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWwgPyBgJHtrZXl9OiAke3ZhbH1gIDogJydcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpXG5cbiAgICBmaW5hbFVybCArPSBlbmNvZGVVUklDb21wb25lbnQoYm9keS5zbGljZSgwLCAyMDAwKSlcbiAgICByZXR1cm4gZmluYWxVcmxcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHJlcG9zaXRvcnlVcmxcbiAgfVxufVxuIiwgImltcG9ydCB7IGdldEFsbFRhYnMsIGxzLCB1bmlxdWUgfSBmcm9tICdAQC91dGlscydcblxuZXhwb3J0IGNvbnN0IGR1bXBUYWJzID0gYXN5bmMgKHsgd2luZG93SWQgfSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBBUFBfVVJMID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhcHAvaW5kZXguaHRtbCcpXG5cbiAgY29uc3QgW2N1cnJlbnRUYWJzLCBbY3VycmVudFRhYl1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW2dldEFsbFRhYnMoKSwgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSldKVxuXG4gIGF3YWl0IGxzLnNldCgnY3VycmVudFRhYnMnLCB1bmlxdWUoY3VycmVudFRhYnMsICd1cmwnKSlcblxuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgIHVybDogQVBQX1VSTCxcbiAgICB3aW5kb3dJZFxuICB9KVxuXG4gIGxldCBBcHBUYWIgPSB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLnVybCA9PT0gQVBQX1VSTClcbiAgaWYgKEFwcFRhYiA9PSBudWxsKSB7XG4gICAgQXBwVGFiID0gYXdhaXQgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBBUFBfVVJMIH0pXG4gIH1cblxuICBpZiAoQXBwVGFiLmlkICE9IG51bGwpIHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbY2hyb21lLnRhYnMubW92ZShBcHBUYWIuaWQsIHsgaW5kZXg6IDAgfSksIGNocm9tZS50YWJzLnVwZGF0ZShBcHBUYWIuaWQsIHsgYWN0aXZlOiB0cnVlLCBwaW5uZWQ6IHRydWUgfSldKVxuICB9XG5cbiAgY29uc3Qgb3BlbmVkVGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgd2luZG93SWQgfSlcblxuICBvcGVuZWRUYWJzLmZvckVhY2goYXN5bmMgKHRhYikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGFiLmlkID09IG51bGwpIHJldHVyblxuICAgICAgaWYgKHRhYi51cmwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICBpZiAoWydjaHJvbWU6Ly9uZXd0YWIvJ10uaW5jbHVkZXModGFiLnVybCkpIHtcbiAgICAgICAgYXdhaXQgY2hyb21lLnRhYnMucmVtb3ZlKHRhYi5pZClcbiAgICAgIH1cbiAgICAgIGlmICh0YWIuaWQgPT09IEFwcFRhYj8uaWQpIHJldHVyblxuICAgICAgaWYgKHRhYi5waW5uZWQpIHJldHVyblxuICAgICAgaWYgKHRhYi5hdWRpYmxlID09PSB0cnVlKSByZXR1cm5cbiAgICAgIGlmICh0YWIuaGlnaGxpZ2h0ZWQpIHJldHVyblxuICAgICAgaWYgKHRhYi5hY3RpdmUpIHJldHVyblxuXG4gICAgICBpZiAodGFiLmlkID09PSBjdXJyZW50VGFiLmlkKSByZXR1cm5cblxuICAgICAgYXdhaXQgY2hyb21lLnRhYnMucmVtb3ZlKHRhYi5pZClcbiAgICB9IGNhdGNoIHt9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRVUkwgPSAodXJsOiBzdHJpbmcgPSAnJywgYmFzZT86IHN0cmluZyk6IFVSTCA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBVUkwodXJsLCBiYXNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gY29uc29sZS5lcnJvcihlKVxuICAgIHJldHVybiB7XG4gICAgICBzZWFyY2hQYXJhbXM6IHtcbiAgICAgICAgZ2V0OiAoKSA9PiBudWxsXG4gICAgICB9XG4gICAgfSBhcyBhbnlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VVJMU2VhcmNoUGFyYW1zID0gKHVybDogc3RyaW5nKTogVVJMU2VhcmNoUGFyYW1zID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBnZXQ6ICgpID0+IG51bGxcbiAgICB9IGFzIGFueVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuUGFnZSA9IGFzeW5jICh1cmw6IHN0cmluZyk6IFByb21pc2U8Y2hyb21lLnRhYnMuVGFiPiA9PiB7XG4gIGNvbnN0IHRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUgfSlcblxuICBjb25zdCB1cmxPYmogPSBnZXRVUkwodXJsKVxuICBsZXQgdGFiID0gdGFicy5maW5kKCh0YWIpID0+IHRhYi51cmw/LnN0YXJ0c1dpdGgodXJsT2JqLm9yaWdpbikpXG5cbiAgaWYgKHRhYiA9PSBudWxsKSB7XG4gICAgdGFiID0gYXdhaXQgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsIH0pXG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBbXG4gICAgICAgIGNocm9tZS50YWJzLm1vdmUodGFiLmlkISwgeyBpbmRleDogdGFicy5sZW5ndGggLSAxIH0pLFxuICAgICAgICB0YWIudXJsICE9PSB1cmwgJiYgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCEsIHsgdXJsIH0pLFxuICAgICAgICBjaHJvbWUudGFicy51cGRhdGUodGFiLmlkISwgeyBhY3RpdmU6IHRydWUsIHVybDogdGFiLnVybCAhPT0gdXJsID8gdXJsIDogdW5kZWZpbmVkIH0pXG4gICAgICBdLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuICByZXR1cm4gdGFiXG59XG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBhc3luYyAob3B0aW9uczogY2hyb21lLmNvb2tpZXMuU2V0RGV0YWlscywgY29va2llOiBjaHJvbWUuY29va2llcy5Db29raWUgPSB7fSBhcyBhbnkpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGNocm9tZS5jb29raWVzLnNldCh7XG4gICAgZG9tYWluOiBjb29raWUuZG9tYWluLFxuICAgIHN0b3JlSWQ6IGNvb2tpZS5zdG9yZUlkLFxuICAgIHBhdGg6IGNvb2tpZS5wYXRoLFxuICAgIGh0dHBPbmx5OiBjb29raWUuaHR0cE9ubHksXG4gICAgc2VjdXJlOiBjb29raWUuc2VjdXJlLFxuICAgIHNhbWVTaXRlOiBjb29raWUuc2FtZVNpdGUsXG4gICAgZXhwaXJhdGlvbkRhdGU6IGNvb2tpZS5leHBpcmF0aW9uRGF0ZSxcbiAgICAuLi5vcHRpb25zXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgZ2VuSXNzdWVVcmwsIGlzQ2hpbmVzZSB9IGZyb20gJ0BAL3V0aWxzJ1xuaW1wb3J0IHsgb3BlblBhZ2UgfSBmcm9tICcuL3V0aWxzJ1xuLy8gY29uc3QgcmVwb3NpdG9yeVVybDogc3RyaW5nID0gcmVwb3NpdG9yeS51cmxcblxudHlwZSBDb250ZXh0cyA9IGNocm9tZS5jb250ZXh0TWVudXMuQ29udGV4dFR5cGVbXVxuaW50ZXJmYWNlIElJbml0Q29udGV4dE1lbnUge1xuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRleHRzOiBDb250ZXh0c1xuICBvbmNsaWNrOiAoaW5mbzogY2hyb21lLmNvbnRleHRNZW51cy5PbkNsaWNrRGF0YSwgdGFiOiBjaHJvbWUudGFicy5UYWIgfCB1bmRlZmluZWQpID0+IHZvaWRcbn1cblxuY29uc3QgY29udGV4dE1lbnVzOiBSZWNvcmQ8c3RyaW5nLCBJSW5pdENvbnRleHRNZW51PiA9IHtcbiAgLy8gdmVyc2lvbjoge1xuICAvLyAgIHRpdGxlOiBgXHVEODNFXHVEREMzIFZlcnNpb246ICR7dmVyc2lvbn1gLFxuICAvLyAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAvLyAgIG9uY2xpY2s6ICgpID0+IHtcbiAgLy8gICAgIG9wZW5QYWdlKGAke3JlcG9zaXRvcnlVcmx9L3JlbGVhc2VzL3RhZy8ke3ZlcnNpb259YClcbiAgLy8gICB9XG4gIC8vIH0sXG4gIG9wZW5DaGF0OiB7XG4gICAgdGl0bGU6ICdcdUQ4M0RcdURDQUMgTmV3IEJpbmcnLFxuICAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAgIG9uY2xpY2s6IChfaW5mbykgPT4ge1xuICAgICAgb3BlblBhZ2UoJ2h0dHBzOi8vd3d3LmJpbmcuY29tL3NlYXJjaD9xPUJpbmcrQUkmc2hvd2NvbnY9MScpXG4gICAgfVxuICB9LFxuXG4gIG9wZW5JbWFnZUNyZWF0ZToge1xuICAgIHRpdGxlOiAnXHVEODNEXHVEREJDXHVGRTBGIE5ldyBCaW5nIEltYWdlIENyZWF0b3InLFxuICAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAgIG9uY2xpY2s6IChfaW5mbykgPT4ge1xuICAgICAgb3BlblBhZ2UoJ2h0dHBzOi8vd3d3LmJpbmcuY29tL2NyZWF0ZScpXG4gICAgfVxuICB9LFxuXG4gIGxpa2VJdDoge1xuICAgIHRpdGxlOiAnXHUyNzY0XHVGRTBGIExpa2UgaXQnLFxuICAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgIG9wZW5QYWdlKCdodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9uZXctYmluZy1hbnl3aGVyZS9oY2VvYmhqb2twZGJvZ2prcGxtZmplb21rZWNra25naS9yZXZpZXdzJylcbiAgICB9XG4gIH0sXG5cbiAgcmVwb3J0SXNzdWVzOiB7XG4gICAgdGl0bGU6IGlzQ2hpbmVzZSA/ICdcdUQ4M0RcdURDMUIgXHU1M0NEXHU5OTg4XHU1RUZBXHU4QkFFJyA6ICdcdUQ4M0RcdURDMUIgUmVwb3J0IGlzc3VlcycsXG4gICAgY29udGV4dHM6IFsnYWN0aW9uJ10sXG4gICAgb25jbGljazogYXN5bmMgKF9pbmZvKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBhd2FpdCBnZW5Jc3N1ZVVybCgpXG5cbiAgICAgIG9wZW5QYWdlKHVybClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjaHJvbWUuY29udGV4dE1lbnVzLnJlbW92ZUFsbCgoKSA9PiB7XG4gICAgZm9yIChjb25zdCBbaWQsIG1lbnVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbnRleHRNZW51cykpIHtcbiAgICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlOiBtZW51LnRpdGxlLFxuICAgICAgICBjb250ZXh0czogbWVudS5jb250ZXh0c1xuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKGluZm8sIHRhYikgPT4ge1xuICAgIGNvbnN0IHsgbWVudUl0ZW1JZCB9ID0gaW5mb1xuICAgIGNvbnN0IGl0ZW0gPSBjb250ZXh0TWVudXNbbWVudUl0ZW1JZF1cbiAgICBpZiAoaXRlbT8ub25jbGljaykgaXRlbS5vbmNsaWNrKGluZm8sIHRhYilcbiAgfSlcbn1cbiIsICJjb25zdCBNQVhfQUdFID0gMTAwMCAqIDYwICogNjAgKiAxIC8vIDEgaG91clxuY29uc3QgS0VZID0gJ25vdGlmaWNhdGlvbidcbmNvbnN0IEZMQUdfS0VZID0gJ25vdGlmaWNhdGlvbjpoaWRlJ1xuY29uc3QgZ2V0UmVtb3RlTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZygnZ2V0UmVtb3RlTm90aWZpY2F0aW9uJylcbiAgbGV0IGRhdGFcbiAgdHJ5IHtcbiAgICBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvaGFvemkvTmV3LUJpbmctQW55d2hlcmUvaXNzdWVzLzI0JykudGhlbihhc3luYyAocmVzKSA9PiBhd2FpdCByZXMuanNvbigpKVxuICB9IGNhdGNoIHt9XG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBjb25zdCBnZXROb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgW0tFWV06IG9sZERhdGEgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChLRVkpXG5cbiAgaWYgKCFvbGREYXRhIHx8IChvbGREYXRhLmxhc3RNb2RpZnkgJiYgRGF0ZS5ub3coKSAtIG9sZERhdGEubGFzdE1vZGlmeSA+IE1BWF9BR0UpKSB7XG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKEtFWSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UmVtb3RlTm90aWZpY2F0aW9uKClcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbS0VZXTogeyBkYXRhLCBsYXN0TW9kaWZ5OiBEYXRlLm5vdygpIH0gfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IFtGTEFHX0tFWV06IGZsYWcsIFtLRVldOiBuZXdEYXRhIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW0ZMQUdfS0VZLCBLRVldKVxuXG4gIGlmICghbmV3RGF0YT8uZGF0YSkgcmV0dXJuIG51bGxcbiAgaWYgKCEobmV3RGF0YS5kYXRhLnRpdGxlICYmIG5ld0RhdGEuZGF0YS5zdGF0ZSA9PT0gJ29wZW4nKSkgcmV0dXJuIG51bGxcbiAgaWYgKGZsYWcgPT09IDEgJiYgbmV3RGF0YS5kYXRhLnRpdGxlID09PSBvbGREYXRhLmRhdGE/LnRpdGxlKSByZXR1cm4gbnVsbFxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoRkxBR19LRVkpXG4gIHJldHVybiBuZXdEYXRhLmRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFtGTEFHX0tFWV06IDEgfSlcbn1cbiIsICJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnQEAvdXRpbHMnXG5pbXBvcnQgeyBnZXRVUkwgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbiwgaGlkZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vX25vdGlmaWNhdGlvbidcblxuY29uc3QgZ2V0RW52ID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb25cbiAgfVxufVxuXG5jb25zdCBvcGVuVXJsSW5TYW1lVGFiID0gYXN5bmMgKHsgdXJsIH06IHsgdXJsOiBzdHJpbmcgfSA9IHt9IGFzIGFueSkgPT4ge1xuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlIH0pXG4gIGNvbnN0IHVybE9iaiA9IGdldFVSTCh1cmwpXG4gIGxldCB0YWIgPSB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLnVybD8uc3RhcnRzV2l0aCh1cmxPYmoub3JpZ2luKSlcbiAgaWYgKHRhYiA9PSBudWxsKSB7XG4gICAgdGFiID0gYXdhaXQgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsIH0pXG4gIH0gZWxzZSB7XG4gICAgaWYgKHRhYi5pZCAhPSBudWxsKSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbY2hyb21lLnRhYnMubW92ZSh0YWIuaWQsIHsgaW5kZXg6IHRhYnMubGVuZ3RoIC0gMSB9KSwgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCwgeyBhY3RpdmU6IHRydWUgfSldKVxuICAgIH1cbiAgfVxuXG4gIGxldCBuZXdVcmwgPSB1cmxcbiAgbGV0IHF1ZXJ5ID0gJydcbiAgbGV0IHRhYlF1ZXJ5ID0gJydcbiAgY29uc3QgaXNHb29nbGUgPSB1cmxPYmouaG9zdG5hbWUgPT09ICd3d3cuZ29vZ2xlLmNvbSdcbiAgY29uc3QgaXNCaW5nID0gdXJsT2JqLmhvc3RuYW1lID09PSAnd3d3LmJpbmcuY29tJ1xuICBpZiAoaXNHb29nbGUpIHtcbiAgICBxdWVyeSA9IHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcbiAgICB0YWJRdWVyeSA9IGdldFVSTCh0YWIudXJsKS5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcbiAgICBnZXRVUkwodGFiLnVybCkuc2VhcmNoUGFyYW1zLmdldCgncScpXG4gIH0gZWxzZSBpZiAoaXNCaW5nKSB7XG4gICAgcXVlcnkgPSB1cmxPYmouc2VhcmNoUGFyYW1zLmdldCgncScpID8/ICcnXG4gICAgdGFiUXVlcnkgPSBnZXRVUkwodGFiLnVybCkuc2VhcmNoUGFyYW1zLmdldCgncScpID8/ICcnXG4gIH1cblxuICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKVxuICB0YWJRdWVyeSA9IHRhYlF1ZXJ5LnRyaW0oKVxuXG4gIGlmIChxdWVyeSAmJiBxdWVyeSA9PT0gdGFiUXVlcnkpIHJldHVybiAvLyBcdTRFMERcdTUyMzdcdTY1QjBcdTk4NzVcdTk3NjJcblxuICBpZiAoaXNHb29nbGUpIHtcbiAgICBuZXdVcmwgPSBgJHt1cmxPYmoub3JpZ2lufSR7dXJsT2JqLnBhdGhuYW1lfT9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX1gXG4gIH0gZWxzZSBpZiAoaXNCaW5nKSB7XG4gICAgbmV3VXJsID0gYCR7dXJsT2JqLm9yaWdpbn0ke3VybE9iai5wYXRobmFtZX0/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YFxuICAgIC8vIG5ld1VybCA9IGAke3VybE9iai5vcmlnaW59JHt1cmxPYmoucGF0aG5hbWV9P3E9JHtxdWVyeX0mc2hvd2NvbnY9MWBcbiAgfVxuXG4gIGF3YWl0IGNocm9tZS50YWJzLnVwZGF0ZSh0YWIuaWQhLCB7IHVybDogbmV3VXJsIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0RW52LFxuICBvcGVuVXJsSW5TYW1lVGFiLFxuXG4gIGdldE5vdGlmaWNhdGlvbixcbiAgaGlkZU5vdGlmaWNhdGlvblxufVxuIiwgImltcG9ydCB7IEJBTkRfTUtUUywgQklORyB9IGZyb20gJ0BAL2NvbnN0YW50cydcbmltcG9ydCB7IGlzQ2FuYXJ5LCByZWdpc3RyeUxpc3RlbmVyLCB2ZXJzaW9uIH0gZnJvbSAnQEAvdXRpbHMnXG5cbmltcG9ydCB7IHJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgaW5pdENvbnRleHRNZW51IGZyb20gJy4vY29udGV4dF9tZW51cydcbmltcG9ydCBsaXN0ZW5lcnMgZnJvbSAnLi9saXN0ZW5lcnMnXG5pbXBvcnQgeyBnZXRVUkxTZWFyY2hQYXJhbXMsIG9wZW5QYWdlLCBzZXRDb29raWUgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGluaXRDb250ZXh0TWVudSgpXG4gIHJlZ2lzdHJ5TGlzdGVuZXIobGlzdGVuZXJzKVxuXG4gIGNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgcmVwb3NpdG9yeVVybDogc3RyaW5nID0gcmVwb3NpdG9yeS51cmxcbiAgICAvLyBjb25zdCBkZWJ1Z3VybCA9ICdodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT1FZGdlJTIwJUU0JUI4JThCJUU4JUJEJUJEJnNob3djb252PTEmRk9STT1ocGNvZHgnXG4gICAgLy8gaWYgKGRlYnVndXJsKSB7XG4gICAgLy8gICBvcGVuUGFnZShkZWJ1Z3VybClcbiAgICAvLyAgIHJldHVyblxuICAgIC8vIH1cbiAgICBpZiAoaXNDYW5hcnkpIHtcbiAgICAgIG9wZW5QYWdlKGAke3JlcG9zaXRvcnlVcmx9L3RyZWUvY2FuYXJ5YClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZGV0YWlscy5yZWFzb24gPT09ICdpbnN0YWxsJykge1xuICAgICAgb3BlblBhZ2UocmVwb3NpdG9yeVVybClcbiAgICB9IGVsc2UgaWYgKGRldGFpbHMucmVhc29uID09PSAndXBkYXRlJykge1xuICAgICAgb3BlblBhZ2UoYCR7cmVwb3NpdG9yeVVybH0vcmVsZWFzZXMvdGFnL3Yke3ZlcnNpb259YClcbiAgICB9XG4gIH0pXG5cbiAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuICAgICgpID0+IHtcbiAgICAgIGNocm9tZS5jb29raWVzLmdldChcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdfRURHRV9TJyxcbiAgICAgICAgICB1cmw6IEJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgKGNvb2tpZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29va2llPy52YWx1ZVxuICAgICAgICAgIGlmICghdmFsdWUpIHJldHVyblxuXG4gICAgICAgICAgY29uc3QgdmFsdWVPYmogPSBnZXRVUkxTZWFyY2hQYXJhbXModmFsdWUpXG4gICAgICAgICAgY29uc3QgbWt0ID0gdmFsdWVPYmouZ2V0KCdta3QnKT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuXG4gICAgICAgICAgaWYgKCFCQU5EX01LVFMubWFwKChtKSA9PiBtLnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKG1rdCkpIHJldHVyblxuICAgICAgICAgIGlmIChta3QgPT09ICd6aC1jbicpIHtcbiAgICAgICAgICAgIHZhbHVlT2JqLnNldCgnbWt0JywgJ3poLUhLJylcbiAgICAgICAgICAgIHZhbHVlT2JqLnNldCgndWknLCAnemgtaGFucycpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlT2JqLmRlbGV0ZSgnbWt0JylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRDb29raWUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybDogQklORyxcbiAgICAgICAgICAgICAgbmFtZTogY29va2llLm5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZU9iai50b1N0cmluZygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29va2llXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGNocm9tZS5jb29raWVzLmdldChcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdfUndCZicsXG4gICAgICAgICAgdXJsOiBCSU5HXG4gICAgICAgIH0sXG4gICAgICAgIChjb29raWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvb2tpZT8udmFsdWVcbiAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICBzZXRDb29raWUoe1xuICAgICAgICAgICAgICB1cmw6IEJJTkcsXG4gICAgICAgICAgICAgIG5hbWU6ICdfUndCZicsXG4gICAgICAgICAgICAgIHZhbHVlOiAnd2xzPTInLFxuICAgICAgICAgICAgICBkb21haW46ICcuYmluZy5jb20nLFxuICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbHVlT2JqID0gZ2V0VVJMU2VhcmNoUGFyYW1zKHZhbHVlKVxuICAgICAgICAgIGNvbnN0IHdscyA9IHZhbHVlT2JqLmdldCgnd2xzJylcbiAgICAgICAgICBpZiAod2xzICE9PSAnMicgJiYgd2xzICE9PSAnJykge1xuICAgICAgICAgICAgdmFsdWVPYmouc2V0KCd3bHMnLCAnMicpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsOiBCSU5HLFxuICAgICAgICAgICAgICBuYW1lOiAnX1J3QmYnLFxuICAgICAgICAgICAgICBkb21haW46ICcuYmluZy5jb20nLFxuICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlT2JqLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb29raWVcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9LFxuICAgIHsgdXJsczogW0JJTkcgKyAnKiddLCB0eXBlczogWydtYWluX2ZyYW1lJ10gfVxuICApXG59XG4iLCAiaW1wb3J0IHsgQUxMX1JFU09VUkNFX1RZUEVTIH0gZnJvbSAnQEAvY29uc3RhbnRzJ1xuXG5pbXBvcnQgeyBnZW5VQSB9IGZyb20gJ0BAL3V0aWxzJ1xuXG5jb25zdCBNT0RJRllfSEVBREVSU19MSVNUID0ge1xuICAvLyAnWC1Gb3J3YXJkZWQtRm9yJzogJzguOC44LjgnLFxuICAnVXNlci1BZ2VudCc6IGdlblVBKClcbn1cbmNvbnN0IE1PRElGWV9IRUFERVJTID0gJ21vZGlmeUhlYWRlcnMnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuUnVsZUFjdGlvblR5cGUuTU9ESUZZX0hFQURFUlNcbi8vIGNvbnN0IFJFRElSRUNUID0gJ3JlZGlyZWN0JyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJ1bGVBY3Rpb25UeXBlLlJFRElSRUNUXG4vLyBjb25zdCBBUFBFTkQgPSAnYXBwZW5kJyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LkhlYWRlck9wZXJhdGlvbi5BUFBFTkRcbi8vIGNvbnN0IFJFTU9WRSA9ICdyZW1vdmUnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuSGVhZGVyT3BlcmF0aW9uLlJFTU9WRVxuY29uc3QgU0VUID0gJ3NldCcgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5IZWFkZXJPcGVyYXRpb24uU0VUXG5cbmV4cG9ydCBjb25zdCBkeW5hbWljUnVsZXMgPSBbXG4gIHtcbiAgICBwcmlvcml0eTogMjAwMSxcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IE1PRElGWV9IRUFERVJTLFxuICAgICAgcmVxdWVzdEhlYWRlcnM6IE9iamVjdC5lbnRyaWVzKE1PRElGWV9IRUFERVJTX0xJU1QpLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiAoe1xuICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkpXG4gICAgfSxcbiAgICBjb25kaXRpb246IHtcbiAgICAgIHJlcXVlc3REb21haW5zOiBbJ2JpbmcuY29tJywgJ3d3dy5iaW5nLmNvbScsICdjbi5iaW5nLmNvbSddLFxuICAgICAgcmVzb3VyY2VUeXBlczogQUxMX1JFU09VUkNFX1RZUEVTXG4gICAgfVxuICB9XG5dXG4gIC5maWx0ZXIoQm9vbGVhbilcbiAgLm1hcCgocnVsZSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IGluZGV4ICsgMSArIDIwMDAsXG4gICAgLi4ucnVsZVxuICB9KSkgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5SdWxlW11cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBpZiAoIWR5bmFtaWNSdWxlcy5sZW5ndGgpIHJldHVyblxuXG4gIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuZ2V0RHluYW1pY1J1bGVzKChkUnVsZXMpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygxMTEsIGRSdWxlcylcbiAgICAvLyBjb25zb2xlLmxvZygyMjIsIFsuLi5uZXcgU2V0KFsuLi5ydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGUuaWQpLCAuLi5kUnVsZXMubWFwKChydWxlKSA9PiBydWxlLmlkKV0pXSlcblxuICAgIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QudXBkYXRlRHluYW1pY1J1bGVzKHtcbiAgICAgIHJlbW92ZVJ1bGVJZHM6IFsuLi5uZXcgU2V0KFsuLi5keW5hbWljUnVsZXMubWFwKChydWxlKSA9PiBydWxlLmlkKSwgLi4uZFJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZS5pZCldKV0sXG4gICAgICBhZGRSdWxlczogZHluYW1pY1J1bGVzXG4gICAgfSlcbiAgICAvLyAudGhlbigoKSA9PiB7XG4gICAgLy8gICBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LmdldER5bmFtaWNSdWxlcygoZFJ1bGVzKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKDMzMywgZFJ1bGVzKVxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICB9KVxuXG4gIC8vIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3Qub25SdWxlTWF0Y2hlZERlYnVnLmFkZExpc3RlbmVyKCguLi5hcmdzKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coMTExMSwgLi4uYXJncylcbiAgLy8gfSlcbn1cbiIsICJpbXBvcnQgeyBzdGF0aWNSdWxlcyB9IGZyb20gJy4uLy4uL3NjcmlwdHMvc3RhdGljX3J1bGVzJ1xuaW1wb3J0IGNyb3NzUGxhdGZvcm0gZnJvbSAnLi9jcm9zc19wbGF0Zm9ybSdcbmltcG9ydCB7IGR5bmFtaWNSdWxlcyB9IGZyb20gJy4vZHluYW1pY19ydWxlcydcbmNvbnN0IGJyb3dzZXIgPSBjaHJvbWVcblxuY29uc3QgcnVsZXMgPSBbLi4uc3RhdGljUnVsZXMsIC4uLmR5bmFtaWNSdWxlc11cbmNvbnN0IG1vZGlmeVJlcXVlc3RIZWFkZXJzUnVsZXMgPSBydWxlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYWN0aW9uPy50eXBlID09PSAnbW9kaWZ5SGVhZGVycycgJiYgaXRlbS5hY3Rpb24/LnJlcXVlc3RIZWFkZXJzPy5sZW5ndGgpXG5jb25zdCBtb2RpZnlSZXNwb25zZUhlYWRlcnNSdWxlcyA9IHJ1bGVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hY3Rpb24/LnR5cGUgPT09ICdtb2RpZnlIZWFkZXJzJyAmJiBpdGVtLmFjdGlvbj8ucmVzcG9uc2VIZWFkZXJzPy5sZW5ndGgpXG5cbi8vIGNvbnN0IHJlZGlyZWN0UnVsZXMgPSBydWxlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYWN0aW9uPy50eXBlID09PSAncmVkaXJlY3QnKVxuXG4vLyBjb25zb2xlLmxvZygncnVsZXMnLCBydWxlcy5sZW5ndGgpXG4vLyBjb25zb2xlLmxvZygnbW9kaWZ5UmVxdWVzdEhlYWRlcnNSdWxlcycsIG1vZGlmeVJlcXVlc3RIZWFkZXJzUnVsZXMubGVuZ3RoLCBtb2RpZnlSZXF1ZXN0SGVhZGVyc1J1bGVzKVxuLy8gY29uc29sZS5sb2coJ21vZGlmeVJlc3BvbnNlSGVhZGVyc1J1bGVzJywgbW9kaWZ5UmVzcG9uc2VIZWFkZXJzUnVsZXMubGVuZ3RoLCBtb2RpZnlSZXNwb25zZUhlYWRlcnNSdWxlcylcbi8vIGNvbnNvbGUubG9nKCdyZWRpcmVjdFJ1bGVzJywgcmVkaXJlY3RSdWxlcy5sZW5ndGgsIHJlZGlyZWN0UnVsZXMpXG5cbmNyb3NzUGxhdGZvcm0oKVxuYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlU2VuZEhlYWRlcnMuYWRkTGlzdGVuZXIoXG4gIChkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCFkZXRhaWxzLnJlcXVlc3RIZWFkZXJzKSByZXR1cm5cbiAgICAvLyBjb25zb2xlLmxvZygxMTEsIGRldGFpbHMpXG4gICAgY29uc3QgbmV3SGVhZGVycyA9IGRldGFpbHMucmVxdWVzdEhlYWRlcnNcbiAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgbW9kaWZ5UmVxdWVzdEhlYWRlcnNSdWxlcykge1xuICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTChkZXRhaWxzLnVybClcbiAgICAgIGlmIChcbiAgICAgICAgIXJ1bGUuY29uZGl0aW9uIHx8XG4gICAgICAgIChydWxlLmNvbmRpdGlvbj8ucmVxdWVzdERvbWFpbnMgPz8gW10pLmluY2x1ZGVzKHVybE9iai5ob3N0bmFtZSkgfHxcbiAgICAgICAgbmV3IFJlZ0V4cChydWxlLmNvbmRpdGlvbj8ucmVnZXhGaWx0ZXIgPz8gJycsIHJ1bGUuY29uZGl0aW9uPy5pc1VybEZpbHRlckNhc2VTZW5zaXRpdmUgPyAnaScgOiB1bmRlZmluZWQpLnRlc3QodXJsT2JqLmhyZWYpIHx8XG4gICAgICAgIHVybE9iai5ocmVmLmluY2x1ZGVzKHJ1bGUuY29uZGl0aW9uPy51cmxGaWx0ZXIgPz8gJycpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0SGVhZGVyIG9mIHJ1bGUuYWN0aW9uLnJlcXVlc3RIZWFkZXJzID8/IFtdKSB7XG4gICAgICAgICAgc3dpdGNoIChyZXF1ZXN0SGVhZGVyLm9wZXJhdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2V0JzpcbiAgICAgICAgICAgICAgaWYgKCFkZXRhaWxzLnJlcXVlc3RIZWFkZXJzLmZpbmQoKGhlYWRlcikgPT4gaGVhZGVyLm5hbWUgPT09IHJlcXVlc3RIZWFkZXIuaGVhZGVyKSkge1xuICAgICAgICAgICAgICAgIG5ld0hlYWRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICBuYW1lOiByZXF1ZXN0SGVhZGVyLmhlYWRlcixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXF1ZXN0SGVhZGVyLnZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhlYWRlciBvZiBkZXRhaWxzLnJlcXVlc3RIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdEhlYWRlci5oZWFkZXIudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygxMTEwLCBoZWFkZXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnZhbHVlID0gcmVxdWVzdEhlYWRlci52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhcHBlbmQnOlxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygxMTEsIHJlcXVlc3RIZWFkZXIuaGVhZGVyKVxuICAgICAgICAgICAgICBuZXdIZWFkZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlcXVlc3RIZWFkZXIuaGVhZGVyLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXF1ZXN0SGVhZGVyLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBuZXdIZWFkZXJzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RIZWFkZXIuaGVhZGVyLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgaW5kZXggPiAtMSAmJiBuZXdIZWFkZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyByZXF1ZXN0SGVhZGVyczogbmV3SGVhZGVycyB9XG4gIH0sXG4gIHtcbiAgICB1cmxzOiBbJzxhbGxfdXJscz4nXVxuICB9LFxuICBbJ2Jsb2NraW5nJywgJ3JlcXVlc3RIZWFkZXJzJ11cbilcblxuYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLmFkZExpc3RlbmVyKFxuICAoZGV0YWlscykgPT4ge1xuICAgIGlmICghZGV0YWlscy5yZXNwb25zZUhlYWRlcnMpIHJldHVyblxuICAgIC8vIGNvbnNvbGUubG9nKDIyMiwgZGV0YWlscylcbiAgICBjb25zdCBuZXdIZWFkZXJzID0gZGV0YWlscy5yZXNwb25zZUhlYWRlcnNcblxuICAgIGZvciAoY29uc3QgcnVsZSBvZiBtb2RpZnlSZXNwb25zZUhlYWRlcnNSdWxlcykge1xuICAgICAgLy8gY29uc3QgdXJsT2JqID0gbmV3IFVSTChkZXRhaWxzLnVybClcbiAgICAgIGlmIChcbiAgICAgICAgLy8gIXJ1bGUuY29uZGl0aW9uIHx8XG4gICAgICAgIC8vIHJ1bGUuY29uZGl0aW9uPy5yZWdleEZpbHRlclxuICAgICAgICAvLyA/XG4gICAgICAgIG5ldyBSZWdFeHAocnVsZS5jb25kaXRpb24/LnJlZ2V4RmlsdGVyID8/ICcnLCBydWxlLmNvbmRpdGlvbj8uaXNVcmxGaWx0ZXJDYXNlU2Vuc2l0aXZlID8gJ2knIDogdW5kZWZpbmVkKS50ZXN0KGRldGFpbHMudXJsKVxuICAgICAgICAvLyA6IGZhbHNlIC8vIHVybE9iai5ocmVmLmluY2x1ZGVzKHJ1bGUuY29uZGl0aW9uPy51cmxGaWx0ZXIgPz8gJycpXG4gICAgICAgIC8vIHx8XG4gICAgICAgIC8vIChydWxlLmNvbmRpdGlvbj8ucmVxdWVzdERvbWFpbnMgPz8gW10pLmluY2x1ZGVzKHVybE9iai5ob3N0bmFtZSlcbiAgICAgICkge1xuICAgICAgICAvLyBmb3IgKGNvbnN0IHJ1bGUgb2YgcmVkaXJlY3RSdWxlcykge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFxuICAgICAgICAvLyAgICAgMTExLFxuICAgICAgICAvLyAgICAgcnVsZSxcbiAgICAgICAgLy8gICAgIGRldGFpbHMudXJsLFxuICAgICAgICAvLyAgICAgcnVsZS5jb25kaXRpb24/LnJlZ2V4RmlsdGVyLFxuICAgICAgICAvLyAgICAgbmV3IFJlZ0V4cChydWxlLmNvbmRpdGlvbj8ucmVnZXhGaWx0ZXIgPz8gJycsIHJ1bGUuY29uZGl0aW9uPy5pc1VybEZpbHRlckNhc2VTZW5zaXRpdmUgPyAnaScgOiB1bmRlZmluZWQpLFxuICAgICAgICAvLyAgICAgbmV3IFJlZ0V4cChydWxlLmNvbmRpdGlvbj8ucmVnZXhGaWx0ZXIgPz8gJycsIHJ1bGUuY29uZGl0aW9uPy5pc1VybEZpbHRlckNhc2VTZW5zaXRpdmUgPyAnaScgOiB1bmRlZmluZWQpLnRlc3QoZGV0YWlscy51cmwpXG4gICAgICAgIC8vICAgKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0SGVhZGVyIG9mIHJ1bGUuYWN0aW9uLnJlc3BvbnNlSGVhZGVycyA/PyBbXSkge1xuICAgICAgICAgIHN3aXRjaCAocmVxdWVzdEhlYWRlci5vcGVyYXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3NldCc6XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaGVhZGVyIG9mIGRldGFpbHMucmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RIZWFkZXIuaGVhZGVyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDIyMiwgaGVhZGVyLm5hbWUpXG4gICAgICAgICAgICAgICAgICBoZWFkZXIudmFsdWUgPSByZXF1ZXN0SGVhZGVyLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld0hlYWRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlcXVlc3RIZWFkZXIuaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVxdWVzdEhlYWRlci52YWx1ZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2FwcGVuZCc6XG4gICAgICAgICAgICAgIG5ld0hlYWRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogcmVxdWVzdEhlYWRlci5oZWFkZXIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlcXVlc3RIZWFkZXIudmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHJlc3BvbnNlSGVhZGVyczogbmV3SGVhZGVycyB9XG4gIH0sXG4gIHtcbiAgICB1cmxzOiBbJzxhbGxfdXJscz4nXVxuICB9LFxuICBbJ2Jsb2NraW5nJywgJ3Jlc3BvbnNlSGVhZGVycyddXG4pXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFBTyxNQUFNLE9BQU87QUFFYixNQUFNLFlBQVksQ0FBQyxTQUFTLE1BQU0sT0FBTztBQUV6QyxNQUFNLGVBQWU7QUFDckIsTUFBTSxlQUFlO0FBRXJCLE1BQU0scUJBQXFCO0FBQUEsSUFDaEM7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7OztBQ3JCQSxNQUFNLGlCQUFpQjtBQUN2QixNQUFNLFdBQVc7QUFDakIsTUFBTSxTQUFTO0FBRWYsTUFBTSxNQUFNO0FBRUwsTUFBTSxjQUFtRDtBQUFBLElBQzlEO0FBQUEsTUFDRSxRQUFRO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxVQUNkO0FBQUEsWUFDRSxXQUFXO0FBQUEsWUFDWCxRQUFRO0FBQUEsWUFDUixPQUFPLHVCQUF1QixnQ0FBZ0M7QUFBQSxVQUNoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFXQTtBQUFBLFlBQ0UsV0FBVztBQUFBLFlBQ1gsUUFBUTtBQUFBLFlBQ1IsT0FBTyxJQUFJO0FBQUEsVUFDYjtBQUFBLFVBQ0E7QUFBQSxZQUNF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Q0FBQztBQUFBLGdCQUMxQztBQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFFQSxhQUFPLEVBQUUsZ0JBQWdCLFdBQVc7QUFBQSxJQUN0QztBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU0sQ0FBQyxZQUFZO0FBQUEsSUFDckI7QUFBQSxJQUNBLENBQUMsWUFBWSxnQkFBZ0I7QUFBQSxFQUMvQjtBQUVBLFVBQVEsV0FBVyxrQkFBa0I7QUFBQSxJQUNuQyxDQUFDLFlBQVk7QUFDWCxVQUFJLENBQUMsUUFBUTtBQUFpQjtBQUU5QixZQUFNLGFBQWEsUUFBUTtBQUUzQixpQkFBVyxRQUFRLDRCQUE0QjtBQUU3QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSUUsSUFBSSxPQUFPLEtBQUssV0FBVyxlQUFlLElBQUksS0FBSyxXQUFXLDJCQUEyQixNQUFNLE1BQVMsRUFBRSxLQUFLLFFBQVEsR0FBRztBQUFBLFVBSTFIO0FBWUEscUJBQVcsaUJBQWlCLEtBQUssT0FBTyxtQkFBbUIsQ0FBQyxHQUFHO0FBQzdELG9CQUFRLGNBQWMsV0FBVztBQUFBLGNBQy9CLEtBQUs7QUFDSCwyQkFBVyxVQUFVLFFBQVEsaUJBQWlCO0FBQzVDLHNCQUFJLE9BQU8sS0FBSyxZQUFZLE1BQU0sY0FBYyxPQUFPLFlBQVksR0FBRztBQUVwRSwyQkFBTyxRQUFRLGNBQWM7QUFBQSxrQkFDL0IsT0FBTztBQUNMLCtCQUFXLEtBQUs7QUFBQSxzQkFDZCxNQUFNLGNBQWM7QUFBQSxzQkFDcEIsT0FBTyxjQUFjO0FBQUEsb0JBQ3ZCLENBQUM7QUFBQSxrQkFDSDtBQUFBLGdCQUNGO0FBQ0E7QUFBQSxjQUNGLEtBQUs7QUFDSCwyQkFBVyxLQUFLO0FBQUEsa0JBQ2QsTUFBTSxjQUFjO0FBQUEsa0JBQ3BCLE9BQU8sY0FBYztBQUFBLGdCQUN2QixDQUFDO0FBQ0Q7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUNBLGFBQU8sRUFBRSxpQkFBaUIsV0FBVztBQUFBLElBQ3ZDO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTSxDQUFDLFlBQVk7QUFBQSxJQUNyQjtBQUFBLElBQ0EsQ0FBQyxZQUFZLGlCQUFpQjtBQUFBLEVBQ2hDOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgInRhYiIsICJ2ZXJzaW9uIiwgInRhYiIsICJ2ZXJzaW9uIiwgIk1PRElGWV9IRUFERVJTIiwgIlNFVCJdCn0K
