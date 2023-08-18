"use strict";
(() => {
  // src/universe/constants.ts
  var BING = "https://www.bing.com/";
  var AIPLUS = "https://chat.aiplus.lol/login";
  var BAND_MKTS = ["zh-CN", "ru", "ru-ru"];
  var MAIN_VERSION = "114";
  var FULL_VERSION = "114.0.1823.82";
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

  // package.json
  var version = "2.3.0";
  var repository = {
    type: "git",
    url: "https://github.com/haozi/New-Bing-Anywhere"
  };

  // src/universe/utils/_misc.ts
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
      showChat: false,
      showRelease: true,
      triggerMode: "Always",
      conversationStyle: "Balanced",
      "X-Forwarded-For": void 0,
      ...config
    };
  };
  var registryListener = (callMethods) => {
    chrome.runtime.onMessage.addListener((req, _sender, sendResponse) => {
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
  var userAgent = navigator.userAgent;
  var userAgentData = navigator.userAgentData;
  var isMac = /* @__PURE__ */ userAgent.includes("Macintosh");
  var isEdge = /* @__PURE__ */ userAgent.includes("Edg/");
  var isBrave = /* @__PURE__ */ userAgentData?.brands.findIndex((item) => item.brand === "Brave") > -1;
  var isChinese = /* @__PURE__ */ checkIsChinese();
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
      let comment = "Please write your comment ABOVE this line, provide as much detailed information and screenshots as possible.Please confirm that you have read the #8 https://github.com/haozi/New-Bing-Anywhere/issues/8.The UA may not necessarily reflect your actual browser and platform, so please make sure to indicate them clearly.";
      if (isChinese) {
        comment = "\u8BF7\u5728\u6B64\u884C\u4E0A\u65B9\u53D1\u8868\u60A8\u7684\u8BA8\u8BBA\u3002\u8BF7\u786E\u8BA4\u5DF2\u7ECF\u9605\u8BFB\u4E86FAQ(https://github.com/haozi/New-Bing-Anywhere/issues/8)\uFF0C\u8BE6\u5C3D\u7684\u63CF\u8FF0\u548C\u622A\u56FE\u6709\u52A9\u4E8E\u6211\u4EEC\u5B9A\u4F4D\u95EE\u9898\uFF0C\u63CF\u8FF0\u4E0D\u6E05\u7684\u95EE\u9898\u4F1A\u88AB\u5173\u95ED\uFF0CUA \u4E0D\u4E00\u5B9A\u771F\u5B9E\u53CD\u6620\u60A8\u7684\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\uFF0C\u8BF7\u5907\u6CE8\u6E05\u695A";
      }
      const body = ` 



<!--  ${comment} -->
<pre>
` + Object.entries({
        Version: `${version2}${isCanary ? " (Canary)" : ""} `,
        UA: navigator.userAgent,
        Lang: chrome.i18n.getUILanguage(),
        AcceptLangs: (await chrome.i18n.getAcceptLanguages()).join(", "),
        config: JSON.stringify(config),
        ...extra
      }).map(([key, val]) => {
        return val ? `${key}: ${val}` : "";
      }).join("\n") + "</pre>";
      finalUrl += encodeURIComponent(body.slice(0, 2e3));
      return finalUrl;
    } catch {
      return repositoryUrl;
    }
  };
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

  // src/universe/utils/_contextMenus.ts
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
        openPage("https://chrome.google.com/webstore/detail/new-bing-anywhere-bing-ch/hceobhjokpdbogjkplmfjeomkeckkngi/reviews?hl=en");
      }
    },
    reportIssues: {
      title: "\u{1F41B} Report issues",
      contexts: ["action"],
      onclick: async (_info) => {
        const url = await genIssueUrl();
        openPage(url);
      }
    }
  };

  // src/background/context_menus.ts
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

  // node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  }

  // node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // src/background/listeners/_bing.ts
  var getFromConversation = async (options) => {
    const API = `https://sydney.bing.com/sydney/GetConversation?conversationId=${encodeURIComponent(options.session.conversationId)}&source=${encodeURIComponent(options.source)}&participantId=${encodeURIComponent(options.participantId)}&conversationSignature=${encodeURIComponent(options.session.conversationSignature)}&traceId=${v4_default()}`;
    try {
      const data = await fetch(API).then((r) => r.json());
      return data;
    } catch (err) {
      return null;
    }
  };
  var webSockets = {};
  var bingChatPing = async (socketId) => {
    return await new Promise((resolve, _reject) => {
      const ws = webSockets[socketId];
      if (ws == null)
        throw new Error(`WebSocket ${socketId} not found`);
      ws.send(JSON.stringify({ type: 6 }) + "");
      resolve(null);
    });
  };
  var bingChatCloseWebSocket = async (socketId) => {
    const ws = webSockets[socketId];
    ws?.close();
    webSockets[socketId] = null;
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
    hideNotification,
    "bing.getFromConversation": getFromConversation,
    "bing.bingChatPing": bingChatPing,
    "bing.bingChatCloseWebSocket": bingChatCloseWebSocket
  };

  // src/background/utils.ts
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

  // src/background/cross_platform.ts
  var cross_platform_default = () => {
    context_menus_default();
    registryListener(listeners_default);
    chrome.runtime.onInstalled.addListener(async (details) => {
      const config = await getConfig();
      const repositoryUrl = repository.url;
      if (isCanary) {
        openPage(`${repositoryUrl}/tree/canary`);
        return;
      }
      if (details.reason === "install") {
        openPage(repositoryUrl);
      } else if (details.reason === "update" && config.showRelease) {
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
        chrome.cookies.get(
          {
            name: "ANON",
            url: BING
          },
          (cookie) => {
            const value = cookie?.value;
            if (!value)
              return;
            const valueObj = getURLSearchParams(value);
            valueObj.delete("A");
            setCookie(
              {
                url: BING,
                name: "ANON",
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
  var MODIFY_HEADERS = "modifyHeaders";
  var REDIRECT = "redirect";
  var SET = "set";
  var dynamicRules = [
    {
      priority: 2001,
      action: {
        type: MODIFY_HEADERS,
        requestHeaders: Object.entries(MODIFY_HEADERS_LIST).map(([header, value]) => ({
          operation: SET,
          header,
          value
        }))
      },
      condition: {
        requestDomains: ["bing.com", "www.bing.com", "cn.bing.com"],
        resourceTypes: ALL_RESOURCE_TYPES
      }
    },
    isChinese && {
      action: {
        type: REDIRECT,
        redirect: {
          url: `${AIPLUS}?invite_code=b90e84b5`
        }
      },
      condition: {
        requestDomains: ["chat.aiplus.lol"],
        urlFilter: AIPLUS,
        isUrlFilterCaseSensitive: false,
        resourceTypes: ALL_RESOURCE_TYPES
      }
    }
  ].filter(Boolean).map((rule, index) => ({
    id: index + 1 + 2e3,
    ...rule
  }));
  var dynamic_rules_default = () => {
    if (!dynamicRules.length)
      return;
    chrome.declarativeNetRequest.getDynamicRules((dRules) => {
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [.../* @__PURE__ */ new Set([...dynamicRules.map((rule) => rule.id), ...dRules.map((rule) => rule.id)])],
        addRules: dynamicRules
      });
    });
  };

  // src/background/chromium.ts
  cross_platform_default();
  chrome.runtime.onInstalled.addListener((_details) => {
    dynamic_rules_default();
  });
  chrome.runtime.setUninstallURL("https://github.com/haozi/New-Bing-Anywhere/blob/main/uninstall.md");
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3VuaXZlcnNlL2NvbnN0YW50cy50cyIsICIuLi8uLi9wYWNrYWdlLmpzb24iLCAiLi4vLi4vc3JjL3VuaXZlcnNlL3V0aWxzL19taXNjLnRzIiwgIi4uLy4uL3NyYy91bml2ZXJzZS91dGlscy9fY29udGV4dE1lbnVzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2NvbnRleHRfbWVudXMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsICIuLi8uLi9zcmMvYmFja2dyb3VuZC9saXN0ZW5lcnMvX2JpbmcudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL19ub3RpZmljYXRpb24udHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2Nyb3NzX3BsYXRmb3JtLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2R5bmFtaWNfcnVsZXMudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvY2hyb21pdW0udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBCSU5HID0gJ2h0dHBzOi8vd3d3LmJpbmcuY29tLydcbmV4cG9ydCBjb25zdCBDTl9SRURJUkVDVF9VUkwgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbS8nXG5leHBvcnQgY29uc3QgQUlQTFVTID0gJ2h0dHBzOi8vY2hhdC5haXBsdXMubG9sL2xvZ2luJ1xuZXhwb3J0IGNvbnN0IEJBTkRfTUtUUyA9IFsnemgtQ04nLCAncnUnLCAncnUtcnUnXVxuXG5leHBvcnQgY29uc3QgTUFJTl9WRVJTSU9OID0gJzExNCdcbmV4cG9ydCBjb25zdCBGVUxMX1ZFUlNJT04gPSAnMTE0LjAuMTgyMy44MidcblxuZXhwb3J0IGNvbnN0IEFMTF9SRVNPVVJDRV9UWVBFUyA9IFtcbiAgJ2NzcF9yZXBvcnQnLFxuICAnZm9udCcsXG4gICdpbWFnZScsXG4gICdtYWluX2ZyYW1lJyxcbiAgJ21lZGlhJyxcbiAgJ29iamVjdCcsXG4gICdvdGhlcicsXG4gICdwaW5nJyxcbiAgJ3NjcmlwdCcsXG4gICdzdHlsZXNoZWV0JyxcbiAgJ3N1Yl9mcmFtZScsXG4gICd3ZWJidW5kbGUnLFxuICAnd2Vic29ja2V0JyxcbiAgJ3dlYnRyYW5zcG9ydCcsXG4gICd4bWxodHRwcmVxdWVzdCdcbl0gYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5SZXNvdXJjZVR5cGVbXVxuXG5leHBvcnQgY29uc3QgR09PR0xFX0RPTUFJTlMgPSBbXG4gICdnb29nbGUuY29tJyxcblxuICAnZ29vZ2xlLmFjJyxcbiAgJ2dvb2dsZS5hZCcsXG4gICdnb29nbGUuYWUnLFxuICAnZ29vZ2xlLmFsJyxcbiAgJ2dvb2dsZS5hbScsXG4gICdnb29nbGUuYXMnLFxuICAnZ29vZ2xlLmF0JyxcbiAgJ2dvb2dsZS5heicsXG4gICdnb29nbGUuYmEnLFxuICAnZ29vZ2xlLmJlJyxcbiAgJ2dvb2dsZS5iZicsXG4gICdnb29nbGUuYmcnLFxuICAnZ29vZ2xlLmJpJyxcbiAgJ2dvb2dsZS5iaicsXG4gICdnb29nbGUuYnMnLFxuICAnZ29vZ2xlLmJ0JyxcbiAgJ2dvb2dsZS5ieScsXG4gICdnb29nbGUuY2EnLFxuICAnZ29vZ2xlLmNhdCcsXG4gICdnb29nbGUuY2MnLFxuICAnZ29vZ2xlLmNkJyxcbiAgJ2dvb2dsZS5jZicsXG4gICdnb29nbGUuY2cnLFxuICAnZ29vZ2xlLmNoJyxcbiAgJ2dvb2dsZS5jaScsXG4gICdnb29nbGUuY2wnLFxuICAnZ29vZ2xlLmNtJyxcbiAgJ2dvb2dsZS5jbicsXG4gICdnb29nbGUuY28nLFxuICAnZ29vZ2xlLmNvLmFvJyxcbiAgJ2dvb2dsZS5jby5idycsXG4gICdnb29nbGUuY28uY2snLFxuICAnZ29vZ2xlLmNvLmNyJyxcbiAgJ2dvb2dsZS5jby5pZCcsXG4gICdnb29nbGUuY28uaWwnLFxuICAnZ29vZ2xlLmNvLmluJyxcbiAgJ2dvb2dsZS5jby5qcCcsXG4gICdnb29nbGUuY28ua2UnLFxuICAnZ29vZ2xlLmNvLmtyJyxcbiAgJ2dvb2dsZS5jby5scycsXG4gICdnb29nbGUuY28ubWEnLFxuICAnZ29vZ2xlLmNvLm16JyxcbiAgJ2dvb2dsZS5jby5ueicsXG4gICdnb29nbGUuY28udGgnLFxuICAnZ29vZ2xlLmNvLnR6JyxcbiAgJ2dvb2dsZS5jby51ZycsXG4gICdnb29nbGUuY28udWsnLFxuICAnZ29vZ2xlLmNvLnV6JyxcbiAgJ2dvb2dsZS5jby52ZScsXG4gICdnb29nbGUuY28udmknLFxuICAnZ29vZ2xlLmNvLnphJyxcbiAgJ2dvb2dsZS5jby56bScsXG4gICdnb29nbGUuY28uencnLFxuICAnZ29vZ2xlLmNvbS5hZicsXG4gICdnb29nbGUuY29tLmFnJyxcbiAgJ2dvb2dsZS5jb20uYWknLFxuICAnZ29vZ2xlLmNvbS5hcicsXG4gICdnb29nbGUuY29tLmF1JyxcbiAgJ2dvb2dsZS5jb20uYmQnLFxuICAnZ29vZ2xlLmNvbS5iaCcsXG4gICdnb29nbGUuY29tLmJuJyxcbiAgJ2dvb2dsZS5jb20uYm8nLFxuICAnZ29vZ2xlLmNvbS5icicsXG4gICdnb29nbGUuY29tLmJ6JyxcbiAgJ2dvb2dsZS5jb20uY28nLFxuICAnZ29vZ2xlLmNvbS5jdScsXG4gICdnb29nbGUuY29tLmN5JyxcbiAgJ2dvb2dsZS5jb20uZG8nLFxuICAnZ29vZ2xlLmNvbS5lYycsXG4gICdnb29nbGUuY29tLmVnJyxcbiAgJ2dvb2dsZS5jb20uZXQnLFxuICAnZ29vZ2xlLmNvbS5maicsXG4gICdnb29nbGUuY29tLmdoJyxcbiAgJ2dvb2dsZS5jb20uZ2knLFxuICAnZ29vZ2xlLmNvbS5ndCcsXG4gICdnb29nbGUuY29tLmhrJyxcbiAgJ2dvb2dsZS5jb20uam0nLFxuICAnZ29vZ2xlLmNvbS5raCcsXG4gICdnb29nbGUuY29tLmt3JyxcbiAgJ2dvb2dsZS5jb20ubGInLFxuICAnZ29vZ2xlLmNvbS5sYycsXG4gICdnb29nbGUuY29tLmx5JyxcbiAgJ2dvb2dsZS5jb20ubW0nLFxuICAnZ29vZ2xlLmNvbS5tdCcsXG4gICdnb29nbGUuY29tLm14JyxcbiAgJ2dvb2dsZS5jb20ubXknLFxuICAnZ29vZ2xlLmNvbS5uYScsXG4gICdnb29nbGUuY29tLm5mJyxcbiAgJ2dvb2dsZS5jb20ubmcnLFxuICAnZ29vZ2xlLmNvbS5uaScsXG4gICdnb29nbGUuY29tLm5wJyxcbiAgJ2dvb2dsZS5jb20ub20nLFxuICAnZ29vZ2xlLmNvbS5wYScsXG4gICdnb29nbGUuY29tLnBlJyxcbiAgJ2dvb2dsZS5jb20ucGcnLFxuICAnZ29vZ2xlLmNvbS5waCcsXG4gICdnb29nbGUuY29tLnBrJyxcbiAgJ2dvb2dsZS5jb20ucHInLFxuICAnZ29vZ2xlLmNvbS5weScsXG4gICdnb29nbGUuY29tLnFhJyxcbiAgJ2dvb2dsZS5jb20uc2EnLFxuICAnZ29vZ2xlLmNvbS5zYicsXG4gICdnb29nbGUuY29tLnNnJyxcbiAgJ2dvb2dsZS5jb20uc2wnLFxuICAnZ29vZ2xlLmNvbS5zdicsXG4gICdnb29nbGUuY29tLnRqJyxcbiAgJ2dvb2dsZS5jb20udHInLFxuICAnZ29vZ2xlLmNvbS50dycsXG4gICdnb29nbGUuY29tLnVhJyxcbiAgJ2dvb2dsZS5jb20udXknLFxuICAnZ29vZ2xlLmNvbS52YycsXG4gICdnb29nbGUuY29tLnZuJyxcbiAgJ2dvb2dsZS5jdicsXG4gICdnb29nbGUuY3onLFxuICAnZ29vZ2xlLmRlJyxcbiAgJ2dvb2dsZS5kaicsXG4gICdnb29nbGUuZGsnLFxuICAnZ29vZ2xlLmRtJyxcbiAgJ2dvb2dsZS5keicsXG4gICdnb29nbGUuZWUnLFxuICAnZ29vZ2xlLmVzJyxcbiAgJ2dvb2dsZS5maScsXG4gICdnb29nbGUuZm0nLFxuICAnZ29vZ2xlLmZyJyxcbiAgJ2dvb2dsZS5nYScsXG4gICdnb29nbGUuZ2UnLFxuICAnZ29vZ2xlLmdmJyxcbiAgJ2dvb2dsZS5nZycsXG4gICdnb29nbGUuZ2wnLFxuICAnZ29vZ2xlLmdtJyxcbiAgJ2dvb2dsZS5ncCcsXG4gICdnb29nbGUuZ3InLFxuICAnZ29vZ2xlLmd5JyxcbiAgJ2dvb2dsZS5obicsXG4gICdnb29nbGUuaHInLFxuICAnZ29vZ2xlLmh0JyxcbiAgJ2dvb2dsZS5odScsXG4gICdnb29nbGUuaWUnLFxuICAnZ29vZ2xlLmltJyxcbiAgJ2dvb2dsZS5pbycsXG4gICdnb29nbGUuaXEnLFxuICAnZ29vZ2xlLmlzJyxcbiAgJ2dvb2dsZS5pdCcsXG4gICdnb29nbGUuamUnLFxuICAnZ29vZ2xlLmpvJyxcbiAgJ2dvb2dsZS5rZycsXG4gICdnb29nbGUua2knLFxuICAnZ29vZ2xlLmt6JyxcbiAgJ2dvb2dsZS5sYScsXG4gICdnb29nbGUubGknLFxuICAnZ29vZ2xlLmxrJyxcbiAgJ2dvb2dsZS5sdCcsXG4gICdnb29nbGUubHUnLFxuICAnZ29vZ2xlLmx2JyxcbiAgJ2dvb2dsZS5tZCcsXG4gICdnb29nbGUubWUnLFxuICAnZ29vZ2xlLm1nJyxcbiAgJ2dvb2dsZS5taycsXG4gICdnb29nbGUubWwnLFxuICAnZ29vZ2xlLm1uJyxcbiAgJ2dvb2dsZS5tcycsXG4gICdnb29nbGUubXUnLFxuICAnZ29vZ2xlLm12JyxcbiAgJ2dvb2dsZS5tdycsXG4gICdnb29nbGUubmUnLFxuICAnZ29vZ2xlLm5nJyxcbiAgJ2dvb2dsZS5ubCcsXG4gICdnb29nbGUubm8nLFxuICAnZ29vZ2xlLm5yJyxcbiAgJ2dvb2dsZS5udScsXG4gICdnb29nbGUucGwnLFxuICAnZ29vZ2xlLnBuJyxcbiAgJ2dvb2dsZS5wcycsXG4gICdnb29nbGUucHQnLFxuICAnZ29vZ2xlLnJvJyxcbiAgJ2dvb2dsZS5ycycsXG4gICdnb29nbGUucnUnLFxuICAnZ29vZ2xlLnJ3JyxcbiAgJ2dvb2dsZS5zYycsXG4gICdnb29nbGUuc2UnLFxuICAnZ29vZ2xlLnNoJyxcbiAgJ2dvb2dsZS5zaScsXG4gICdnb29nbGUuc2snLFxuICAnZ29vZ2xlLnNtJyxcbiAgJ2dvb2dsZS5zbicsXG4gICdnb29nbGUuc28nLFxuICAnZ29vZ2xlLnNyJyxcbiAgJ2dvb2dsZS5zdCcsXG4gICdnb29nbGUudGQnLFxuICAnZ29vZ2xlLnRnJyxcbiAgJ2dvb2dsZS50aycsXG4gICdnb29nbGUudGwnLFxuICAnZ29vZ2xlLnRtJyxcbiAgJ2dvb2dsZS50bicsXG4gICdnb29nbGUudG8nLFxuICAnZ29vZ2xlLnR0JyxcbiAgJ2dvb2dsZS52ZycsXG4gICdnb29nbGUudnUnLFxuICAnZ29vZ2xlLndzJ1xuXVxuXG5leHBvcnQgY29uc3QgWUFOREVYX0RPTUFJTlMgPSBbXG4gICd5YW5kZXguY29tJyxcbiAgJ3lhbmRleC5ydScsXG4gICd5YW5kZXguYnknLFxuICAneWFuZGV4Lmt6JyxcbiAgJ3lhbmRleC51eicsXG4gICd5YW5kZXguY29tLnRyJyxcbiAgJ3lhbmRleC5mcicsXG4gICd5YW5kZXguYXonLFxuICAneWFuZGV4LmNvbS5nZScsXG4gICd5YW5kZXguY29tLmFtJyxcbiAgJ3lhbmRleC5jby5pbCcsXG4gICd5YW5kZXgubHYnLFxuICAneWFuZGV4Lmx0JyxcbiAgJ3lhbmRleC5lZScsXG4gICd5YW5kZXgubWQnLFxuICAneWFuZGV4LnRtJyxcbiAgJ3lhbmRleC50aicsXG4gICd5YW5kZXguZXUnXG5dXG5cbmV4cG9ydCBjb25zdCBPVEhFUlMgPSBbJ2R1Y2tkdWNrZ28uY29tJywgJ3d3dy5iaW5nLmNvbScsICd3d3cuZWNvc2lhLm9yZycsICdzZWFyY2guYnJhdmUuY29tJywgJ3d3dy5iYWlkdS5jb20nXVxuIiwgIntcbiAgXCJuYW1lXCI6IFwibmV3LWJpbmctYW55d2hlcmVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4zLjBcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOZXcgQmluZyBpc24ndCBqdXN0IGZvciBFZGdlIGFueW1vcmUuIEFueXdoZXJlIHlvdSB3YW50XCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaGFvemkvTmV3LUJpbmctQW55d2hlcmVcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9oYW96aS9OZXctQmluZy1Bbnl3aGVyZVwiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIkdQTHYzXCIsXG4gIFwiYXV0aG9yXCI6IFwiaGFvemlcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwicm0gLXJmIGRpc3QgJiYgbWtkaXIgLXAgZGlzdCAmJiBwbnBtIHJ1biBsaW50ICYmIHBucG0gcnVuIGJ1aWxkOmJ1bmRsZVwiLFxuICAgIFwiYnVpbGQ6YnVuZGxlXCI6IFwiTk9ERV9FTlY9cHJvZHVjdGlvbiB2aXRlLW5vZGUgc2NyaXB0cy9idWlsZC50cyAtLSBidWlsZFwiLFxuICAgIFwiY29weVwiOiBcInJtIC1yZiBkaXN0ICYmIGNwIC1yIHB1YmxpYyBkaXN0XCIsXG4gICAgXCJjb3B5OnNvcnVjZVwiOiBcInJzeW5jIC12aHJhIC4gZGlzdC9zb3VyY2UgLS1pbmNsdWRlPScqKi5naXRpZ25vcmUnIC0tZXhjbHVkZT0nLy5naXQnIC0tZXhjbHVkZT0nZGlzdCcgIC0tZmlsdGVyPSc6LSAuZ2l0aWdub3JlJyAtLWRlbGV0ZS1hZnRlclwiLFxuICAgIFwiY29weTp3YXRjaFwiOiBcInBucG0gcnVuIGNvcHkgLS0gLS13YXRjaFwiLFxuICAgIFwiZGV2XCI6IFwicG5wbSBydW4gbGludCAmJiBwbnBtIHJ1biAnL15kZXY6LiovJ1wiLFxuICAgIFwiZGV2OmFwcFwiOiBcInBucG0gLS1maWx0ZXIgYXBwIHJ1biBkZXZcIixcbiAgICBcImRldjpidW5kbGVcIjogXCJ2aXRlLW5vZGUgc2NyaXB0cy9idWlsZC50cyAtLSBkZXZcIixcbiAgICBcImxpbnRcIjogXCJwbnBtIHJ1biBwcmV0dGllciAmJiBwbnBtIHJ1biAnL15saW50Oi4qLydcIixcbiAgICBcImxpbnQ6ZXNsaW50XCI6IFwiZXNsaW50IC0tZXh0IC5qcywudHMgLi9zcmMgLS1maXggLS1jYWNoZVwiLFxuICAgIFwibGludDpzdHlsdXNcIjogXCJzdHlsdXMtc3VwcmVtYWN5IGZvcm1hdCAuL3NyYy8qKi8qLnN0eWwgIC0tb3B0aW9ucyAuL3N0eWx1cy1zdXByZW1hY3kuanNvbiAtLXJlcGxhY2VcIixcbiAgICBcInByZXBhcmVcIjogXCJodXNreSBpbnN0YWxsICYmIHBucG0gcnVuIGJ1aWxkXCIsXG4gICAgXCJwcmV0dGllclwiOiBcInByZXR0aWVyIC0tY2FjaGUgLS13cml0ZSAuXCIsXG4gICAgXCJwcmV0dGllcjp3YXRjaFwiOiBcIm9uY2hhbmdlIFxcXCIqKi8qXFxcIiAtLSBwcmV0dGllciAtLWNhY2hlIC0td3JpdGUgLS1pZ25vcmUtdW5rbm93biAtLWlnbm9yZS1wYXRoIC5wcmV0dGllcmlnbm9yZSB7e2NoYW5nZWR9fSA+IC9kZXYvbnVsbCAyPiYxXCIsXG4gICAgXCJ0ZXN0XCI6IFwicG5wbSBydW4gbGludFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImpxdWVyeVwiOiBcIjMuNy4wXCIsXG4gICAgXCJ1dWlkXCI6IFwiXjkuMC4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL2Nocm9tZVwiOiBcIl4wLjAuMjQyXCIsXG4gICAgXCJAdHlwZXMvZnMtZXh0cmFcIjogXCJeMTEuMC4xXCIsXG4gICAgXCJAdHlwZXMvanF1ZXJ5XCI6IFwiXjMuNS4xNlwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuNC41XCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl42LjIuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl42LjIuMFwiLFxuICAgIFwiY29weS1hbmQtd2F0Y2hcIjogXCJeMC4xLjZcIixcbiAgICBcImVzYnVpbGRcIjogXCJeMC4xOC4xN1wiLFxuICAgIFwiZXNidWlsZC1wbHVnaW4tc3ZnclwiOiBcIl4yLjAuMFwiLFxuICAgIFwiZXNidWlsZC1zdHlsZS1wbHVnaW5cIjogXCJeMS42LjJcIixcbiAgICBcImVzbGludFwiOiBcIl44LjQ1LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcHJldHRpZXJcIjogXCJeNS4wLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4zMy4wXCIsXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4xLjFcIixcbiAgICBcImh1c2t5XCI6IFwiXjguMC4zXCIsXG4gICAgXCJtZDUtZmlsZVwiOiBcIl41LjAuMFwiLFxuICAgIFwib25jaGFuZ2VcIjogXCJeNy4xLjBcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMC4wXCIsXG4gICAgXCJzb3J0LXBhY2thZ2UtanNvblwiOiBcIl4yLjUuMVwiLFxuICAgIFwic3R5bHVzXCI6IFwiXjAuNTkuMFwiLFxuICAgIFwic3R5bHVzLXN1cHJlbWFjeVwiOiBcIl4yLjE3LjVcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4xLjZcIixcbiAgICBcInZpdGUtbm9kZVwiOiBcIl4wLjMzLjBcIlxuICB9LFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIl4yMC4zLjBcIixcbiAgICBcInBucG1cIjogXCJeOC42LjNcIlxuICB9LFxuICBcImV4dGVuc2lvbi1pMThuXCI6IHtcbiAgICBcImVuXCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiTmV3IEJpbmcgQ2hhdCBjYW4gYmUgdXNlZCBpbiBhbnkgYnJvd3Nlciwgd2l0aCBhbnkgc2VhcmNoIGVuZ2luZSwgYW5kIGluIGFueSBjb3VudHJ5LlwiXG4gICAgfSxcbiAgICBcInpoX0NOXCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiTmV3IEJpbmcgQ2hhdCBjYW4gYmUgdXNlZCBpbiBhbnkgYnJvd3Nlciwgd2l0aCBhbnkgc2VhcmNoIGVuZ2luZSwgYW5kIGluIGFueSBjb3VudHJ5LiBcdTk2OEZcdTY1RjZcdTk2OEZcdTU3MzBcdUZGMENcdTY3MDlcdTZDNDJcdTVGQzVcdTVFOTRcdTMwMDJcIlxuICAgIH0sXG4gICAgXCJ6aF9UV1wiOiB7XG4gICAgICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiLFxuICAgICAgXCJleHRlbnNpb25EZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIENoYXQgY2FuIGJlIHVzZWQgaW4gYW55IGJyb3dzZXIsIHdpdGggYW55IHNlYXJjaCBlbmdpbmUsIGFuZCBpbiBhbnkgY291bnRyeS4gXHU5NkE4XHU2NjQyXHU5NkE4XHU1NzMwXHVGRjBDXHU2NzA5XHU2QzQyXHU1RkM1XHU2MUM5XCJcbiAgICB9LFxuICAgIFwicnVcIjoge1xuICAgICAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIixcbiAgICAgIFwiZXh0ZW5zaW9uRGVzY3JpcHRpb25cIjogXCJcdTA0MjdcdTA0MzBcdTA0NDIgTmV3IEJpbmcgXHUwNDNDXHUwNDNFXHUwNDM2XHUwNDM1XHUwNDQyIFx1MDQzOFx1MDQ0MVx1MDQzRlx1MDQzRVx1MDQzQlx1MDQ0Q1x1MDQzN1x1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0Q1x1MDQ0MVx1MDQ0RiBcdTA0MzIgXHUwNDNCXHUwNDRFXHUwNDMxXHUwNDNFXHUwNDNDIFx1MDQzMVx1MDQ0MFx1MDQzMFx1MDQ0M1x1MDQzN1x1MDQzNVx1MDQ0MFx1MDQzNSwgXHUwNDQxIFx1MDQzQlx1MDQ0RVx1MDQzMVx1MDQ0Qlx1MDQzQyBcdTA0M0ZcdTA0M0VcdTA0MzhcdTA0NDFcdTA0M0FcdTA0M0VcdTA0MzJcdTA0NEJcdTA0M0MgXHUwNDM0XHUwNDMyXHUwNDM4XHUwNDM2XHUwNDNBXHUwNDNFXHUwNDNDIFx1MDQzOCBcdTA0MzIgXHUwNDNCXHUwNDRFXHUwNDMxXHUwNDNFXHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzMFx1MDQzRFx1MDQzNS5cIlxuICAgIH1cbiAgfSxcbiAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IEZVTExfVkVSU0lPTiwgR09PR0xFX0RPTUFJTlMsIE1BSU5fVkVSU0lPTiwgWUFOREVYX0RPTUFJTlMgfSBmcm9tICdAQC9jb25zdGFudHMnXG5pbXBvcnQgeyB0eXBlIEJpbmcgfSBmcm9tICdAQC90eXBlcydcbmltcG9ydCB7IHZlcnNpb24gYXMgcGtnVmVyc2lvbiwgcmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGNvbnN0IGNoZWNrSXNHb29nbGUgPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gR09PR0xFX0RPTUFJTlMuaW5jbHVkZXMoaG9zdG5hbWUucmVwbGFjZSgvXnd3d1xcLi8sICcnKSlcbn1cbmV4cG9ydCBjb25zdCBjaGVja0lzQmFpZHUgPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaG9zdG5hbWUgPT09ICd3d3cuYmFpZHUuY29tJ1xufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNZYW5kZXggPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gWUFOREVYX0RPTUFJTlMuaW5jbHVkZXMoaG9zdG5hbWUucmVwbGFjZSgvXnd3d1xcLi8sICcnKSlcbn1cbmV4cG9ydCBjb25zdCBjaGVja0lzU28gPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaG9zdG5hbWUgPT09ICd3d3cuc28uY29tJ1xufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNCaW5nID0gKGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGhvc3RuYW1lID09PSAnd3d3LmJpbmcuY29tJ1xufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNEdWNrZHVja2dvID0gKGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGhvc3RuYW1lID09PSAnZHVja2R1Y2tnby5jb20nXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc0Vjb3NpYSA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBob3N0bmFtZSA9PT0gJ3d3dy5lY29zaWEub3JnJ1xufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNCcmF2ZSA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBob3N0bmFtZSA9PT0gJ3NlYXJjaC5icmF2ZS5jb20nXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc05hdmVyID0gKGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGhvc3RuYW1lID09PSAnc2VhcmNoLm5hdmVyLmNvbSdcbn1cbmV4cG9ydCBjb25zdCBjaGVja0lzWWFob28gPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaG9zdG5hbWUuZW5kc1dpdGgoJ3NlYXJjaC55YWhvby5jb20nKSB8fCBob3N0bmFtZSA9PT0gJ3NlYXJjaC55YWhvby5jby5qcCdcbn1cblxuZXhwb3J0IGNvbnN0IGxzID0ge1xuICBzZXQ6IGFzeW5jIDxUID0gYW55PihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBLRVkgPSBgTkJBQCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9YFxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoXG4gICAgICAgIHtcbiAgICAgICAgICBbS0VZXTogdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSlcbiAgfSxcbiAgZ2V0OiBhc3luYyA8VCA9IGFueT4oa2V5OiBzdHJpbmcpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+ID0+IHtcbiAgICBjb25zdCBLRVkgPSBgTkJBQCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9YFxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtLRVldLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0W0tFWV0pXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIHJlbW92ZTogYXN5bmMgKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgS0VZID0gYE5CQUAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfWBcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtLRVldKVxuICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsVGFicyA9IGFzeW5jIChxdWVyeUluZm86IGNocm9tZS50YWJzLlF1ZXJ5SW5mbyA9IHsgc3RhdHVzOiAnY29tcGxldGUnIH0pOiBQcm9taXNlPElUYWJbXT4gPT4ge1xuICBjb25zdCBuZXdUYWJzOiBJVGFiW10gPSAoYXdhaXQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlJbmZvKSkgYXMgSVRhYltdXG4gIGNvbnN0IG9sZFRhYnM6IElUYWJbXSA9IHVuaXF1ZSgoYXdhaXQgbHMuZ2V0PElUYWJbXT4oJ2N1cnJlbnRUYWJzJykpISlcbiAgZm9yIChjb25zdCBuZXdUYWIgb2YgbmV3VGFicykge1xuICAgIGZvciAoY29uc3Qgb2xkVGFiIG9mIG9sZFRhYnMpIHtcbiAgICAgIGlmIChvbGRUYWIudXJsICE9IG51bGwgJiYgb2xkVGFiLnVybCA9PT0gbmV3VGFiLnVybCkge1xuICAgICAgICBuZXdUYWIuJGV4dHJhID0gb2xkVGFiLiRleHRyYVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgdGFicyA9IG5ld1RhYnMuY29uY2F0KG9sZFRhYnMpXG4gIHRhYnMgPSB0YWJzLmZpbHRlcigodGFiKSA9PiB7XG4gICAgY29uc3QgdXJsID0gdGFiLnVybCA/PyAnJ1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHVybC5zdGFydHNXaXRoKCdjaHJvbWUtZXh0ZW5zaW9uOi8vJylcbiAgfSlcbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICBpZiAodGFiLnVybCA9PSBudWxsKSByZXR1cm5cbiAgICB0YWIudXJsID0gdGFiLnVybC5yZXBsYWNlKC8jLiokLywgJycpXG4gIH0pXG4gIHRhYnMgPSB1bmlxdWUodGFicywgJ3VybCcpLnNsaWNlKDAsIDUwMDApXG4gIHJldHVybiB0YWJzXG59XG5cbmV4cG9ydCBjb25zdCB1bmlxdWUgPSA8VD4oYXJyOiBUW10sIGtleTogc3RyaW5nID0gJ3VybCcpOiBUW10gPT4ge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKClcbiAgcmV0dXJuIGFyci5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgIGlmIChtYXAuaGFzKGl0ZW1ba2V5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXAuc2V0KGl0ZW1ba2V5XSwgdHJ1ZSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgdHlwZSBJVGFiID0gY2hyb21lLnRhYnMuVGFiICYge1xuICAkZXh0cmE/OiB7XG4gICAgbGFzdE1vZGlmaWVkOiBudW1iZXJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmluZFNhbWVVcmxUYWIgPSBhc3luYyAodXJsPzogc3RyaW5nLCBxdWVyeUluZm86IGNocm9tZS50YWJzLlF1ZXJ5SW5mbyA9IHt9KTogUHJvbWlzZTxjaHJvbWUudGFicy5UYWIgfCBudWxsPiA9PiB7XG4gIGlmICghdXJsKSByZXR1cm4gbnVsbFxuICBjb25zdCBvcGVuZWRUYWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlJbmZvKVxuICByZXR1cm4gKFxuICAgIG9wZW5lZFRhYnMuZmluZCgob3BlbmVkVGFiKSA9PiB7XG4gICAgICBpZiAoIW9wZW5lZFRhYi51cmwpIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChvcGVuZWRUYWIudXJsKSA9PT0gdXJsXG4gICAgfSkgPz8gbnVsbFxuICApXG59XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVVcmwgPSAodXJsOiBzdHJpbmcgPSAnJyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvIy4qJC8sICcnKVxufVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSBhc3luYyAoZGVsYXk6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpXG4gIH0pXG59XG5cbi8qKlxuICogY2hlY2sgaWYgaXMgQ2hpbmVzZVxuICovXG5leHBvcnQgY29uc3QgY2hlY2tJc1NpbXBsZUNoaW5lc2UgPSAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbGFuZyA9IGNocm9tZS5pMThuLmdldFVJTGFuZ3VhZ2UoKS50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIGxhbmcgPT09ICd6aC1jbidcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrSXNDaGluZXNlID0gKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGxhbmcgPSBjaHJvbWUuaTE4bi5nZXRVSUxhbmd1YWdlKCkudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiBsYW5nID09PSAnemgtY24nIHx8IGxhbmcgPT09ICd6aC10dycgfHwgbGFuZyA9PT0gJ3poLWhrJyB8fCBsYW5nID09PSAnemgnXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogY2hlY2sgaWYgaW4gTWFpbmxhbmQgQ2hpbmFcbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ04gPSAoKSA9PiB7XG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBDT05GSUdfS0VZID0gJ2NvbmZpZ1YxJ1xuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICBzaG93R29vZ2xlQnV0dG9uT25CaW5nOiBib29sZWFuXG4gIHNob3dCaW5nQnV0dG9uT25Hb29nbGU6IGJvb2xlYW5cbiAgc2hvd0d1aWRlVG9HaXRodWI6IGJvb2xlYW5cbiAgc2hvd0NoYXQ6IGJvb2xlYW5cbiAgc2hvd1JlbGVhc2U6IGJvb2xlYW5cbiAgdHJpZ2dlck1vZGU6ICdBbHdheXMnIHwgJ1F1ZXN0aW9ubWFyaycgfCAnTWFudWFsbHknXG4gIGNvbnZlcnNhdGlvblN0eWxlOiBCaW5nLkNvbnZlcnNhdGlvblN0eWxlXG4gICdYLUZvcndhcmRlZC1Gb3InPzogc3RyaW5nXG59XG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnID0gYXN5bmMgKCk6IFByb21pc2U8Q29uZmlnPiA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IChhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChDT05GSUdfS0VZKSlbQ09ORklHX0tFWV1cbiAgcmV0dXJuIHtcbiAgICBzaG93R29vZ2xlQnV0dG9uT25CaW5nOiB0cnVlLFxuICAgIHNob3dCaW5nQnV0dG9uT25Hb29nbGU6IHRydWUsXG4gICAgc2hvd0d1aWRlVG9HaXRodWI6IHRydWUsXG4gICAgc2hvd0NoYXQ6IGZhbHNlLFxuICAgIHNob3dSZWxlYXNlOiB0cnVlLFxuICAgIHRyaWdnZXJNb2RlOiAnQWx3YXlzJyxcbiAgICBjb252ZXJzYXRpb25TdHlsZTogJ0JhbGFuY2VkJyxcbiAgICAnWC1Gb3J3YXJkZWQtRm9yJzogdW5kZWZpbmVkLFxuICAgIC4uLmNvbmZpZ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRDb25maWcgPSBhc3luYyAodmFsdWVzOiBQYXJ0aWFsPENvbmZpZz4pID0+IHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKClcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1xuICAgIFtDT05GSUdfS0VZXToge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgLi4udmFsdWVzXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZXNjYXBlSHRtbCA9IChzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gU3RyaW5nKHMpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgJyYjeDJmOycpXG59XG5cbnR5cGUgSU1ldGhvZHMgPSBSZWNvcmQ8c3RyaW5nLCAoLi4uYXJnczogYW55W10pID0+IFByb21pc2U8YW55Pj5cbmV4cG9ydCBjb25zdCByZWdpc3RyeUxpc3RlbmVyID0gKGNhbGxNZXRob2RzOiBJTWV0aG9kcykgPT4ge1xuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcSwgX3NlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIC8vIGlmIG5vdCByZXR1cm4gdHJ1ZSBpbW1lZGlhdGVseVx1RkYwQ3dpbGwgdGhyb3cgZXJyb3IgYFVuY2hlY2tlZCBydW50aW1lLmxhc3RFcnJvcjogVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLmBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgbWV0aG9kLCBhcmdzIH0gPSByZXFcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhbGxNZXRob2RzW21ldGhvZF0oLi4uYXJncylcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgY29kZTogMjAwLCBtc2c6ICdvaycsIGRhdGEgfSlcbiAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICBjb25zdCBlcnIgPSBlID8/IHt9XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGNvZGU6IDUwMCwgbXNnOiBlcnIuc3RhY2sgPz8gZXJyLm1lc3NhZ2UgPz8gZSB9KVxuICAgICAgfVxuICAgIH0pKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY2FsbEJhY2tncm91bmQgPSBhc3luYyA8VCA9IGFueT4obWV0aG9kOiBzdHJpbmcsIGFyZ3M6IGFueVtdID0gW10pOiBQcm9taXNlPFQ+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBhcmdzOiBbLi4uYXJnc11cbiAgICAgIH0sXG4gICAgICAocmVzKSA9PiB7XG4gICAgICAgIGlmICghcmVzIHx8IHJlcy5jb2RlICE9PSAyMDApIHtcbiAgICAgICAgICByZWplY3QocmVzPy5tc2cpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGxvY2FsQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gKCgpID0+IHtcbiAgY29uc3QgdiA9ICd2MSdcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGFzeW5jIDxUID0gYW55PihrZXk6IHN0cmluZyk6IFByb21pc2U8bnVsbCB8IFQ+ID0+IHtcbiAgICAgIGtleSA9IGAke3Z9OiR7a2V5fWBcbiAgICAgIGNvbnN0IHsgZGF0YSwgbWF4QWdlLCBsYXN0TW9kaWZpZWQgfSA9IChhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoa2V5KSk/LltrZXldID8/IHt9XG4gICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RNb2RpZmllZCA+IG1heEFnZSAqIDEwMDApIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSxcblxuICAgIHNldDogYXN5bmMgPFQgPSBvYmplY3Q+KGtleTogc3RyaW5nLCBkYXRhOiBULCBtYXhBZ2U6IG51bWJlciA9IEluZmluaXR5IC8qIFx1NTM1NVx1NEY0RFx1NzlEMiAqLyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAga2V5ID0gYCR7dn06JHtrZXl9YFxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgW2tleV06IHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGxhc3RNb2RpZmllZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBtYXhBZ2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pKClcblxuZXhwb3J0IGNvbnN0IHRvRGF0YVVybCA9IGFzeW5jICh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oYXN5bmMgKHIpID0+IGF3YWl0IHIuYmxvYigpKVxuICAgICAgLnRoZW4oKGJsb2IpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3RcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYilcbiAgICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnRcbmNvbnN0IHVzZXJBZ2VudERhdGEgPSAobmF2aWdhdG9yIGFzIGFueSkudXNlckFnZW50RGF0YVxuXG5leHBvcnQgY29uc3QgaXNNYWMgPSAvKiBAX19QVVJFX18gKi8gdXNlckFnZW50LmluY2x1ZGVzKCdNYWNpbnRvc2gnKVxuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9IC8qIEBfX1BVUkVfXyAqLyB1c2VyQWdlbnQuaW5jbHVkZXMoJ0ZpcmVmb3gnKVxuZXhwb3J0IGNvbnN0IGlzRWRnZSA9IC8qIEBfX1BVUkVfXyAqLyB1c2VyQWdlbnQuaW5jbHVkZXMoJ0VkZy8nKVxuZXhwb3J0IGNvbnN0IGlzQnJhdmUgPSAvKiBAX19QVVJFX18gKi8gdXNlckFnZW50RGF0YT8uYnJhbmRzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5icmFuZCA9PT0gJ0JyYXZlJykgPiAtMVxuZXhwb3J0IGNvbnN0IGlzQ2hpbmVzZSA9IC8qIEBfX1BVUkVfXyAqLyBjaGVja0lzQ2hpbmVzZSgpXG5leHBvcnQgY29uc3QgaXNTaW1wbGVDaGluZXNlID0gLyogQF9fUFVSRV9fICovIGNoZWNrSXNTaW1wbGVDaGluZXNlKClcbmV4cG9ydCBjb25zdCBpc0NhbmFyeTogYm9vbGVhbiA9IC8qIEBfX1BVUkVfXyAqLyAhIWdsb2JhbFRoaXMuX19OQkFfaXNDYW5hcnlcbmV4cG9ydCBjb25zdCB2ZXJzaW9uOiBzdHJpbmcgPSAvKiBAX19QVVJFX18gKi8gaXNDYW5hcnkgPyBgMC4ke3BrZ1ZlcnNpb259YCA6IHBrZ1ZlcnNpb25cblxuZXhwb3J0IGNvbnN0IGdlblVBID0gKCkgPT4ge1xuICBsZXQgdWEgPSB1c2VyQWdlbnRcbiAgaWYgKCFpc0VkZ2UpIHtcbiAgICBpZiAoaXNNYWMpIHtcbiAgICAgIHVhID0gYE1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8ke01BSU5fVkVSU0lPTn0uMC4wLjAgU2FmYXJpLzUzNy4zNiBFZGcvJHtGVUxMX1ZFUlNJT059YFxuICAgIH0gZWxzZSB7XG4gICAgICB1YSA9IGBNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvJHtNQUlOX1ZFUlNJT059LjAuMC4wIFNhZmFyaS81MzcuMzYgRWRnLyR7RlVMTF9WRVJTSU9OfWBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVhXG59XG5cbmV4cG9ydCBjb25zdCBnZW5Jc3N1ZVVybCA9IGFzeW5jIChleHRyYT86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+KSA9PiB7XG4gIGNvbnN0IHJlcG9zaXRvcnlVcmw6IHN0cmluZyA9IHJlcG9zaXRvcnkudXJsXG4gIHRyeSB7XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKClcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IGAke3JlcG9zaXRvcnlVcmx9L2lzc3Vlcy9uZXc/dGl0bGU9JmJvZHk9YFxuICAgIGxldCBmaW5hbFVybDogc3RyaW5nID0gdXJsXG4gICAgbGV0IGNvbW1lbnQgPVxuICAgICAgJ1BsZWFzZSB3cml0ZSB5b3VyIGNvbW1lbnQgQUJPVkUgdGhpcyBsaW5lLCBwcm92aWRlIGFzIG11Y2ggZGV0YWlsZWQgaW5mb3JtYXRpb24gYW5kIHNjcmVlbnNob3RzIGFzIHBvc3NpYmxlLicgK1xuICAgICAgJ1BsZWFzZSBjb25maXJtIHRoYXQgeW91IGhhdmUgcmVhZCB0aGUgIzggaHR0cHM6Ly9naXRodWIuY29tL2hhb3ppL05ldy1CaW5nLUFueXdoZXJlL2lzc3Vlcy84LicgK1xuICAgICAgJ1RoZSBVQSBtYXkgbm90IG5lY2Vzc2FyaWx5IHJlZmxlY3QgeW91ciBhY3R1YWwgYnJvd3NlciBhbmQgcGxhdGZvcm0sIHNvIHBsZWFzZSBtYWtlIHN1cmUgdG8gaW5kaWNhdGUgdGhlbSBjbGVhcmx5LidcbiAgICBpZiAoaXNDaGluZXNlKSB7XG4gICAgICBjb21tZW50ID1cbiAgICAgICAgJ1x1OEJGN1x1NTcyOFx1NkI2NFx1ODg0Q1x1NEUwQVx1NjVCOVx1NTNEMVx1ODg2OFx1NjBBOFx1NzY4NFx1OEJBOFx1OEJCQVx1MzAwMlx1OEJGN1x1Nzg2RVx1OEJBNFx1NURGMlx1N0VDRlx1OTYwNVx1OEJGQlx1NEU4NkZBUShodHRwczovL2dpdGh1Yi5jb20vaGFvemkvTmV3LUJpbmctQW55d2hlcmUvaXNzdWVzLzgpXHVGRjBDXHU4QkU2XHU1QzNEXHU3Njg0XHU2M0NGXHU4RkYwXHU1NDhDXHU2MjJBXHU1NkZFXHU2NzA5XHU1MkE5XHU0RThFXHU2MjExXHU0RUVDXHU1QjlBXHU0RjREXHU5NUVFXHU5ODk4XHVGRjBDXHU2M0NGXHU4RkYwXHU0RTBEXHU2RTA1XHU3Njg0XHU5NUVFXHU5ODk4XHU0RjFBXHU4OEFCXHU1MTczXHU5NUVEXHVGRjBDVUEgXHU0RTBEXHU0RTAwXHU1QjlBXHU3NzFGXHU1QjlFXHU1M0NEXHU2NjIwXHU2MEE4XHU3Njg0XHU2RDRGXHU4OUM4XHU1NjY4XHU1NDhDXHU1RTczXHU1M0YwXHVGRjBDXHU4QkY3XHU1OTA3XHU2Q0U4XHU2RTA1XHU2OTVBJ1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPVxuICAgICAgJyBcXG5cXG5cXG5cXG4nICtcbiAgICAgIGA8IS0tICAke2NvbW1lbnR9IC0tPlxcbmAgK1xuICAgICAgJzxwcmU+XFxuJyArXG4gICAgICBPYmplY3QuZW50cmllczxzdHJpbmc+KHtcbiAgICAgICAgVmVyc2lvbjogYCR7dmVyc2lvbn0ke2lzQ2FuYXJ5ID8gJyAoQ2FuYXJ5KScgOiAnJ30gYCxcbiAgICAgICAgVUE6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgIExhbmc6IGNocm9tZS5pMThuLmdldFVJTGFuZ3VhZ2UoKSxcbiAgICAgICAgQWNjZXB0TGFuZ3M6IChhd2FpdCBjaHJvbWUuaTE4bi5nZXRBY2NlcHRMYW5ndWFnZXMoKSkuam9pbignLCAnKSxcbiAgICAgICAgY29uZmlnOiBKU09OLnN0cmluZ2lmeShjb25maWcpLFxuICAgICAgICAuLi5leHRyYVxuICAgICAgfSlcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWwgPyBgJHtrZXl9OiAke3ZhbH1gIDogJydcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpICtcbiAgICAgICc8L3ByZT4nXG4gICAgZmluYWxVcmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGJvZHkuc2xpY2UoMCwgMjAwMCkpXG4gICAgcmV0dXJuIGZpbmFsVXJsXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiByZXBvc2l0b3J5VXJsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFVSTCA9ICh1cmw6IHN0cmluZyA9ICcnLCBiYXNlPzogc3RyaW5nKTogVVJMID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFVSTCh1cmwsIGJhc2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBjb25zb2xlLmVycm9yKGUpXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaFBhcmFtczoge1xuICAgICAgICBnZXQ6ICgpID0+IG51bGxcbiAgICAgIH1cbiAgICB9IGFzIGFueVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRVUkxTZWFyY2hQYXJhbXMgPSAodXJsOiBzdHJpbmcpOiBVUkxTZWFyY2hQYXJhbXMgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldDogKCkgPT4gbnVsbFxuICAgIH0gYXMgYW55XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5QYWdlID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxjaHJvbWUudGFicy5UYWI+ID0+IHtcbiAgY29uc3QgdGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSB9KVxuXG4gIGNvbnN0IHVybE9iaiA9IGdldFVSTCh1cmwpXG4gIGxldCB0YWIgPSB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLnVybD8uc3RhcnRzV2l0aCh1cmxPYmoub3JpZ2luKSlcblxuICBpZiAodGFiID09IG51bGwpIHtcbiAgICB0YWIgPSBhd2FpdCBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmwgfSlcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIFtcbiAgICAgICAgY2hyb21lLnRhYnMubW92ZSh0YWIuaWQhLCB7IGluZGV4OiB0YWJzLmxlbmd0aCAtIDEgfSksXG4gICAgICAgIHRhYi51cmwgIT09IHVybCAmJiBjaHJvbWUudGFicy51cGRhdGUodGFiLmlkISwgeyB1cmwgfSksXG4gICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWIuaWQhLCB7IGFjdGl2ZTogdHJ1ZSwgdXJsOiB0YWIudXJsICE9PSB1cmwgPyB1cmwgOiB1bmRlZmluZWQgfSlcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pXG4gICAgKVxuICB9XG4gIHJldHVybiB0YWJcbn1cbiIsICJpbXBvcnQgeyBnZW5Jc3N1ZVVybCwgb3BlblBhZ2UgfSBmcm9tICcuL19taXNjJ1xuXG4vLyBjb25zdCByZXBvc2l0b3J5VXJsOiBzdHJpbmcgPSByZXBvc2l0b3J5LnVybFxuXG50eXBlIENvbnRleHRzID0gY2hyb21lLmNvbnRleHRNZW51cy5Db250ZXh0VHlwZVtdXG5pbnRlcmZhY2UgSUluaXRDb250ZXh0TWVudSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGV4dHM6IENvbnRleHRzXG4gIG9uY2xpY2s6IChpbmZvPzogY2hyb21lLmNvbnRleHRNZW51cy5PbkNsaWNrRGF0YSwgdGFiPzogY2hyb21lLnRhYnMuVGFiIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0TWVudXM6IFJlY29yZDxzdHJpbmcsIElJbml0Q29udGV4dE1lbnU+ID0ge1xuICAvLyB2ZXJzaW9uOiB7XG4gIC8vICAgdGl0bGU6IGBcdUQ4M0VcdUREQzMgVmVyc2lvbjogJHt2ZXJzaW9ufWAsXG4gIC8vICAgY29udGV4dHM6IFsnYWN0aW9uJ10sXG4gIC8vICAgb25jbGljazogKCkgPT4ge1xuICAvLyAgICAgb3BlblBhZ2UoYCR7cmVwb3NpdG9yeVVybH0vcmVsZWFzZXMvdGFnLyR7dmVyc2lvbn1gKVxuICAvLyAgIH1cbiAgLy8gfSxcbiAgb3BlbkNoYXQ6IHtcbiAgICB0aXRsZTogJ1x1RDgzRFx1RENBQyBOZXcgQmluZycsXG4gICAgY29udGV4dHM6IFsnYWN0aW9uJ10sXG4gICAgb25jbGljazogKF9pbmZvKSA9PiB7XG4gICAgICBvcGVuUGFnZSgnaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9QmluZytBSSZzaG93Y29udj0xJylcbiAgICB9XG4gIH0sXG5cbiAgb3BlbkltYWdlQ3JlYXRlOiB7XG4gICAgdGl0bGU6ICdcdUQ4M0RcdUREQkNcdUZFMEYgTmV3IEJpbmcgSW1hZ2UgQ3JlYXRvcicsXG4gICAgY29udGV4dHM6IFsnYWN0aW9uJ10sXG4gICAgb25jbGljazogKF9pbmZvKSA9PiB7XG4gICAgICBvcGVuUGFnZSgnaHR0cHM6Ly93d3cuYmluZy5jb20vY3JlYXRlJylcbiAgICB9XG4gIH0sXG5cbiAgbGlrZUl0OiB7XG4gICAgdGl0bGU6ICdcdTI3NjRcdUZFMEYgTGlrZSBpdCcsXG4gICAgY29udGV4dHM6IFsnYWN0aW9uJ10sXG4gICAgb25jbGljazogKCkgPT4ge1xuICAgICAgb3BlblBhZ2UoJ2h0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL25ldy1iaW5nLWFueXdoZXJlLWJpbmctY2gvaGNlb2Joam9rcGRib2dqa3BsbWZqZW9ta2Vja2tuZ2kvcmV2aWV3cz9obD1lbicpXG4gICAgfVxuICB9LFxuXG4gIHJlcG9ydElzc3Vlczoge1xuICAgIHRpdGxlOiAnXHVEODNEXHVEQzFCIFJlcG9ydCBpc3N1ZXMnLFxuICAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAgIG9uY2xpY2s6IGFzeW5jIChfaW5mbykgPT4ge1xuICAgICAgY29uc3QgdXJsID0gYXdhaXQgZ2VuSXNzdWVVcmwoKVxuXG4gICAgICBvcGVuUGFnZSh1cmwpXG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgY29udGV4dE1lbnVzIH0gZnJvbSAnQEAvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2hyb21lLmNvbnRleHRNZW51cy5yZW1vdmVBbGwoKCkgPT4ge1xuICAgIGZvciAoY29uc3QgW2lkLCBtZW51XSBvZiBPYmplY3QuZW50cmllcyhjb250ZXh0TWVudXMpKSB7XG4gICAgICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZTogbWVudS50aXRsZSxcbiAgICAgICAgY29udGV4dHM6IG1lbnUuY29udGV4dHNcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKChpbmZvLCB0YWIpID0+IHtcbiAgICBjb25zdCB7IG1lbnVJdGVtSWQgfSA9IGluZm9cbiAgICBjb25zdCBpdGVtID0gY29udGV4dE1lbnVzW21lbnVJdGVtSWRdXG4gICAgaWYgKGl0ZW0/Lm9uY2xpY2spIGl0ZW0ub25jbGljayhpbmZvLCB0YWIpXG4gIH0pXG59XG4iLCAiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCAiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsICJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsICJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCAiaW1wb3J0IHsgdHlwZSBCaW5nIH0gZnJvbSAnQEAvdHlwZXMnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5leHBvcnQgY29uc3QgZ2V0RnJvbUNvbnZlcnNhdGlvbiA9IGFzeW5jIChvcHRpb25zOiBCaW5nLkNvbnZlcnNhdGlvbk9wdGlvbnMpOiBQcm9taXNlPEJpbmcuQ29yZURhdGEgfCBudWxsPiA9PiB7XG4gIGNvbnN0IEFQSSA9XG4gICAgJ2h0dHBzOi8vc3lkbmV5LmJpbmcuY29tL3N5ZG5leS9HZXRDb252ZXJzYXRpb24/JyArXG4gICAgYGNvbnZlcnNhdGlvbklkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuc2Vzc2lvbi5jb252ZXJzYXRpb25JZCl9JmAgK1xuICAgIGBzb3VyY2U9JHtlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5zb3VyY2UpfSZgICtcbiAgICBgcGFydGljaXBhbnRJZD0ke2VuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLnBhcnRpY2lwYW50SWQpfSZgICtcbiAgICBgY29udmVyc2F0aW9uU2lnbmF0dXJlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuc2Vzc2lvbi5jb252ZXJzYXRpb25TaWduYXR1cmUpfSZgICtcbiAgICBgdHJhY2VJZD0ke3V1aWR2NCgpfWBcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goQVBJKS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICByZXR1cm4gZGF0YVxuICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICByZXR1cm4gbnVsbFxuICAgIC8vIGNvbnN0IHsgbWVzc2FnZSB9ID0gZXJyIGFzIHsgbWVzc2FnZTogc3RyaW5nIH1cbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBnZXQgY29udmVyc2F0aW9uIGZyb20gJHtBUEl9OiAke21lc3NhZ2V9fWApXG4gIH1cbn1cblxuY29uc3Qgd2ViU29ja2V0czogUmVjb3JkPHN0cmluZywgV2ViU29ja2V0IHwgbnVsbD4gPSB7fVxuXG5leHBvcnQgY29uc3QgYmluZ0NoYXRHZXRTb2NrZXRJZCA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICBjb25zdCBzb2NrZXRVcmwgPSAnd3NzOi8vc3lkbmV5LmJpbmcuY29tL3N5ZG5leS9DaGF0SHViJ1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoc29ja2V0VXJsKVxuICAgICAgY29uc3Qgc29ja2V0SWQgPSB1dWlkdjQoKVxuICAgICAgd3Mub25vcGVuID0gKF9lKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBDb25uZWN0ZWQgdG8gJHtzb2NrZXRVcmx9YClcbiAgICAgICAgY29uc3QgaGVsbG8gPSBKU09OLnN0cmluZ2lmeSh7IHByb3RvY29sOiAnanNvbicsIHZlcnNpb246IDEgfSkgKyAnXFx4MWUnXG4gICAgICAgIHdzLnNlbmQoaGVsbG8pXG4gICAgICB9XG5cbiAgICAgIHdzLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgd2FzIGNsb3NlZCcpXG4gICAgICAgIHdlYlNvY2tldHNbc29ja2V0SWRdID0gbnVsbFxuICAgICAgfVxuICAgICAgd3Mub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBXZWJTb2NrZXQgXFxgJHtzb2NrZXRVcmx9XFxgIGRpZCBub3QgY29ubmVjdCBzdWNjZXNzZnVsbHkuYCkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9XG5cbiAgICAgIHdzLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1zZyA9IGUuZGF0YVxuICAgICAgICBpZiAobXNnID09PSAne31cXHgxZScpIHtcbiAgICAgICAgICB3ZWJTb2NrZXRzW3NvY2tldElkXSA9IHdzXG4gICAgICAgICAgcmVzb2x2ZShzb2NrZXRJZClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB3cy5jbG9zZSgpXG4gICAgICAgIHdlYlNvY2tldHNbc29ja2V0SWRdID0gbnVsbFxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdXZWJTb2NrZXQgZGlkIG5vdCBjb25uZWN0IHN1Y2Nlc3NmdWxseScpKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGJpbmdDaGF0UGluZyA9IGFzeW5jIChzb2NrZXRJZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgX3JlamVjdCkgPT4ge1xuICAgIGNvbnN0IHdzID0gd2ViU29ja2V0c1tzb2NrZXRJZF1cbiAgICBpZiAod3MgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBXZWJTb2NrZXQgJHtzb2NrZXRJZH0gbm90IGZvdW5kYClcblxuICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiA2IH0pICsgJ1xceDFlJylcbiAgICByZXNvbHZlKG51bGwpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBiaW5nQ2hhdFNlbmQgPSBhc3luYyAoXG4gIHNvY2tldElkOiBzdHJpbmcsXG4gIG1zZzogb2JqZWN0LFxuICBvTW1lc3NhZ2U6IChkYXRhOiBCaW5nLlR5cGUxRGF0YSB8IEJpbmcuVHlwZTJEYXRhKSA9PiB2b2lkXG4pOiBQcm9taXNlPEJpbmcuVHlwZTJEYXRhPiA9PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgX3JlamVjdCkgPT4ge1xuICAgIGNvbnN0IHdzID0gd2ViU29ja2V0c1tzb2NrZXRJZF1cbiAgICBpZiAod3MgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBXZWJTb2NrZXQgJHtzb2NrZXRJZH0gbm90IGZvdW5kYClcblxuICAgIHdzLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICBjb25zdCBtc2cgPSBlLmRhdGFcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBtc2cuc3BsaXQoJ1xceDFlJykuZmlsdGVyKEJvb2xlYW4pKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGl0ZW0ucmVwbGFjZUFsbCgnXFxuJywgJ1xcXFxuJykpXG4gICAgICAgIG9NbWVzc2FnZShkYXRhKVxuXG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IDIpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSArICdcXHgxZScpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBiaW5nQ2hhdENsb3NlV2ViU29ja2V0ID0gYXN5bmMgKHNvY2tldElkOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgd3MgPSB3ZWJTb2NrZXRzW3NvY2tldElkXVxuICB3cz8uY2xvc2UoKVxuICB3ZWJTb2NrZXRzW3NvY2tldElkXSA9IG51bGxcbn1cbiIsICJjb25zdCBNQVhfQUdFID0gMTAwMCAqIDYwICogNjAgKiAxIC8vIDEgaG91clxuY29uc3QgS0VZID0gJ25vdGlmaWNhdGlvbidcbmNvbnN0IEZMQUdfS0VZID0gJ25vdGlmaWNhdGlvbjpoaWRlJ1xuY29uc3QgZ2V0UmVtb3RlTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZygnZ2V0UmVtb3RlTm90aWZpY2F0aW9uJylcbiAgbGV0IGRhdGFcbiAgdHJ5IHtcbiAgICBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvaGFvemkvTmV3LUJpbmctQW55d2hlcmUvaXNzdWVzLzI0JykudGhlbihhc3luYyAocmVzKSA9PiBhd2FpdCByZXMuanNvbigpKVxuICB9IGNhdGNoIHt9XG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBjb25zdCBnZXROb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgW0tFWV06IG9sZERhdGEgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChLRVkpXG5cbiAgaWYgKCFvbGREYXRhIHx8IChvbGREYXRhLmxhc3RNb2RpZnkgJiYgRGF0ZS5ub3coKSAtIG9sZERhdGEubGFzdE1vZGlmeSA+IE1BWF9BR0UpKSB7XG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKEtFWSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UmVtb3RlTm90aWZpY2F0aW9uKClcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbS0VZXTogeyBkYXRhLCBsYXN0TW9kaWZ5OiBEYXRlLm5vdygpIH0gfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IFtGTEFHX0tFWV06IGZsYWcsIFtLRVldOiBuZXdEYXRhIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW0ZMQUdfS0VZLCBLRVldKVxuXG4gIGlmICghbmV3RGF0YT8uZGF0YSkgcmV0dXJuIG51bGxcbiAgaWYgKCEobmV3RGF0YS5kYXRhLnRpdGxlICYmIG5ld0RhdGEuZGF0YS5zdGF0ZSA9PT0gJ29wZW4nKSkgcmV0dXJuIG51bGxcbiAgaWYgKGZsYWcgPT09IDEgJiYgbmV3RGF0YS5kYXRhLnRpdGxlID09PSBvbGREYXRhLmRhdGE/LnRpdGxlKSByZXR1cm4gbnVsbFxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoRkxBR19LRVkpXG4gIHJldHVybiBuZXdEYXRhLmRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFtGTEFHX0tFWV06IDEgfSlcbn1cbiIsICJpbXBvcnQgeyBnZXRVUkwsIHZlcnNpb24gfSBmcm9tICdAQC91dGlscydcbmltcG9ydCB7IGJpbmdDaGF0Q2xvc2VXZWJTb2NrZXQsIGJpbmdDaGF0UGluZywgZ2V0RnJvbUNvbnZlcnNhdGlvbiBhcyBiaW5nR2V0RnJvbUNvbnZlcnNhdGlvbiB9IGZyb20gJy4vX2JpbmcnXG5pbXBvcnQgeyBnZXROb3RpZmljYXRpb24sIGhpZGVOb3RpZmljYXRpb24gfSBmcm9tICcuL19ub3RpZmljYXRpb24nXG5cbmNvbnN0IGdldEVudiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uXG4gIH1cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmNvbnN0IG9wZW5VcmxJblNhbWVUYWIgPSBhc3luYyAoeyB1cmwgfTogeyB1cmw6IHN0cmluZyB9ID0ge30gYXMgYW55KSA9PiB7XG4gIGNvbnN0IHRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUgfSlcbiAgY29uc3QgdXJsT2JqID0gZ2V0VVJMKHVybClcbiAgbGV0IHRhYiA9IHRhYnMuZmluZCgodGFiKSA9PiB0YWIudXJsPy5zdGFydHNXaXRoKHVybE9iai5vcmlnaW4pKVxuICBpZiAodGFiID09IG51bGwpIHtcbiAgICB0YWIgPSBhd2FpdCBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmwgfSlcbiAgfSBlbHNlIHtcbiAgICBpZiAodGFiLmlkICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtjaHJvbWUudGFicy5tb3ZlKHRhYi5pZCwgeyBpbmRleDogdGFicy5sZW5ndGggLSAxIH0pLCBjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IGFjdGl2ZTogdHJ1ZSB9KV0pXG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld1VybCA9IHVybFxuICBsZXQgcXVlcnkgPSAnJ1xuICBsZXQgdGFiUXVlcnkgPSAnJ1xuICBjb25zdCBpc0dvb2dsZSA9IHVybE9iai5ob3N0bmFtZSA9PT0gJ3d3dy5nb29nbGUuY29tJ1xuICBjb25zdCBpc0JpbmcgPSB1cmxPYmouaG9zdG5hbWUgPT09ICd3d3cuYmluZy5jb20nXG4gIGlmIChpc0dvb2dsZSkge1xuICAgIHF1ZXJ5ID0gdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSA/PyAnJ1xuICAgIHRhYlF1ZXJ5ID0gZ2V0VVJMKHRhYi51cmwpLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSA/PyAnJ1xuICAgIGdldFVSTCh0YWIudXJsKS5zZWFyY2hQYXJhbXMuZ2V0KCdxJylcbiAgfSBlbHNlIGlmIChpc0JpbmcpIHtcbiAgICBxdWVyeSA9IHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcbiAgICB0YWJRdWVyeSA9IGdldFVSTCh0YWIudXJsKS5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcbiAgfVxuXG4gIHF1ZXJ5ID0gcXVlcnkudHJpbSgpXG4gIHRhYlF1ZXJ5ID0gdGFiUXVlcnkudHJpbSgpXG5cbiAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5ID09PSB0YWJRdWVyeSkgcmV0dXJuIC8vIFx1NEUwRFx1NTIzN1x1NjVCMFx1OTg3NVx1OTc2MlxuXG4gIGlmIChpc0dvb2dsZSkge1xuICAgIG5ld1VybCA9IGAke3VybE9iai5vcmlnaW59JHt1cmxPYmoucGF0aG5hbWV9P3E9JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnkpfWBcbiAgfSBlbHNlIGlmIChpc0JpbmcpIHtcbiAgICBuZXdVcmwgPSBgJHt1cmxPYmoub3JpZ2lufSR7dXJsT2JqLnBhdGhuYW1lfT9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX1gXG4gICAgLy8gbmV3VXJsID0gYCR7dXJsT2JqLm9yaWdpbn0ke3VybE9iai5wYXRobmFtZX0/cT0ke3F1ZXJ5fSZzaG93Y29udj0xYFxuICB9XG5cbiAgYXdhaXQgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCEsIHsgdXJsOiBuZXdVcmwgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRFbnYsXG4gIG9wZW5VcmxJblNhbWVUYWIsXG5cbiAgZ2V0Tm90aWZpY2F0aW9uLFxuICBoaWRlTm90aWZpY2F0aW9uLFxuXG4gICdiaW5nLmdldEZyb21Db252ZXJzYXRpb24nOiBiaW5nR2V0RnJvbUNvbnZlcnNhdGlvbixcbiAgJ2JpbmcuYmluZ0NoYXRQaW5nJzogYmluZ0NoYXRQaW5nLFxuICAnYmluZy5iaW5nQ2hhdENsb3NlV2ViU29ja2V0JzogYmluZ0NoYXRDbG9zZVdlYlNvY2tldFxufVxuIiwgImltcG9ydCB7IGdldEFsbFRhYnMsIGxzLCB1bmlxdWUgfSBmcm9tICdAQC91dGlscydcblxuZXhwb3J0IGNvbnN0IGR1bXBUYWJzID0gYXN5bmMgKHsgd2luZG93SWQgfSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBBUFBfVVJMID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhcHAvaW5kZXguaHRtbCcpXG5cbiAgY29uc3QgW2N1cnJlbnRUYWJzLCBbY3VycmVudFRhYl1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW2dldEFsbFRhYnMoKSwgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSldKVxuXG4gIGF3YWl0IGxzLnNldCgnY3VycmVudFRhYnMnLCB1bmlxdWUoY3VycmVudFRhYnMsICd1cmwnKSlcblxuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgIHVybDogQVBQX1VSTCxcbiAgICB3aW5kb3dJZFxuICB9KVxuXG4gIGxldCBBcHBUYWIgPSB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLnVybCA9PT0gQVBQX1VSTClcbiAgaWYgKEFwcFRhYiA9PSBudWxsKSB7XG4gICAgQXBwVGFiID0gYXdhaXQgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBBUFBfVVJMIH0pXG4gIH1cblxuICBpZiAoQXBwVGFiLmlkICE9IG51bGwpIHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbY2hyb21lLnRhYnMubW92ZShBcHBUYWIuaWQsIHsgaW5kZXg6IDAgfSksIGNocm9tZS50YWJzLnVwZGF0ZShBcHBUYWIuaWQsIHsgYWN0aXZlOiB0cnVlLCBwaW5uZWQ6IHRydWUgfSldKVxuICB9XG5cbiAgY29uc3Qgb3BlbmVkVGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgd2luZG93SWQgfSlcblxuICBvcGVuZWRUYWJzLmZvckVhY2goYXN5bmMgKHRhYikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGFiLmlkID09IG51bGwpIHJldHVyblxuICAgICAgaWYgKHRhYi51cmwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICBpZiAoWydjaHJvbWU6Ly9uZXd0YWIvJ10uaW5jbHVkZXModGFiLnVybCkpIHtcbiAgICAgICAgYXdhaXQgY2hyb21lLnRhYnMucmVtb3ZlKHRhYi5pZClcbiAgICAgIH1cbiAgICAgIGlmICh0YWIuaWQgPT09IEFwcFRhYj8uaWQpIHJldHVyblxuICAgICAgaWYgKHRhYi5waW5uZWQpIHJldHVyblxuICAgICAgaWYgKHRhYi5hdWRpYmxlID09PSB0cnVlKSByZXR1cm5cbiAgICAgIGlmICh0YWIuaGlnaGxpZ2h0ZWQpIHJldHVyblxuICAgICAgaWYgKHRhYi5hY3RpdmUpIHJldHVyblxuXG4gICAgICBpZiAodGFiLmlkID09PSBjdXJyZW50VGFiLmlkKSByZXR1cm5cblxuICAgICAgYXdhaXQgY2hyb21lLnRhYnMucmVtb3ZlKHRhYi5pZClcbiAgICB9IGNhdGNoIHt9XG4gIH0pXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gYXN5bmMgKG9wdGlvbnM6IGNocm9tZS5jb29raWVzLlNldERldGFpbHMsIGNvb2tpZTogY2hyb21lLmNvb2tpZXMuQ29va2llID0ge30gYXMgYW55KSA9PiB7XG4gIHJldHVybiBhd2FpdCBjaHJvbWUuY29va2llcy5zZXQoe1xuICAgIGRvbWFpbjogY29va2llLmRvbWFpbixcbiAgICBzdG9yZUlkOiBjb29raWUuc3RvcmVJZCxcbiAgICBwYXRoOiBjb29raWUucGF0aCxcbiAgICBodHRwT25seTogY29va2llLmh0dHBPbmx5LFxuICAgIHNlY3VyZTogY29va2llLnNlY3VyZSxcbiAgICBzYW1lU2l0ZTogY29va2llLnNhbWVTaXRlLFxuICAgIGV4cGlyYXRpb25EYXRlOiBjb29raWUuZXhwaXJhdGlvbkRhdGUsXG4gICAgLi4ub3B0aW9uc1xuICB9KVxufVxuIiwgImltcG9ydCB7IEJBTkRfTUtUUywgQklORyB9IGZyb20gJ0BAL2NvbnN0YW50cydcbmltcG9ydCB7IGdldENvbmZpZywgZ2V0VVJMU2VhcmNoUGFyYW1zLCBpc0NhbmFyeSwgb3BlblBhZ2UsIHJlZ2lzdHJ5TGlzdGVuZXIsIHZlcnNpb24gfSBmcm9tICdAQC91dGlscydcbmltcG9ydCB7IHJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgaW5pdENvbnRleHRNZW51IGZyb20gJy4vY29udGV4dF9tZW51cydcbmltcG9ydCBsaXN0ZW5lcnMgZnJvbSAnLi9saXN0ZW5lcnMnXG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGluaXRDb250ZXh0TWVudSgpXG4gIHJlZ2lzdHJ5TGlzdGVuZXIobGlzdGVuZXJzKVxuXG4gIGNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGFzeW5jIChkZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKClcbiAgICBjb25zdCByZXBvc2l0b3J5VXJsOiBzdHJpbmcgPSByZXBvc2l0b3J5LnVybFxuICAgIC8vIGNvbnN0IGRlYnVndXJsID0gJ2h0dHBzOi8vd3d3LmJpbmcuY29tL3NlYXJjaD9xPUVkZ2UlMjAlRTQlQjglOEIlRTglQkQlQkQmc2hvd2NvbnY9MSZGT1JNPWhwY29keCdcbiAgICAvLyBpZiAoZGVidWd1cmwpIHtcbiAgICAvLyAgIG9wZW5QYWdlKGRlYnVndXJsKVxuICAgIC8vICAgcmV0dXJuXG4gICAgLy8gfVxuICAgIGlmIChpc0NhbmFyeSkge1xuICAgICAgb3BlblBhZ2UoYCR7cmVwb3NpdG9yeVVybH0vdHJlZS9jYW5hcnlgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ2luc3RhbGwnKSB7XG4gICAgICBvcGVuUGFnZShyZXBvc2l0b3J5VXJsKVxuICAgIH0gZWxzZSBpZiAoZGV0YWlscy5yZWFzb24gPT09ICd1cGRhdGUnICYmIGNvbmZpZy5zaG93UmVsZWFzZSkge1xuICAgICAgb3BlblBhZ2UoYCR7cmVwb3NpdG9yeVVybH0vcmVsZWFzZXMvdGFnL3Yke3ZlcnNpb259YClcbiAgICB9XG4gIH0pXG5cbiAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuICAgICgpID0+IHtcbiAgICAgIGNocm9tZS5jb29raWVzLmdldChcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdfRURHRV9TJyxcbiAgICAgICAgICB1cmw6IEJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgKGNvb2tpZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29va2llPy52YWx1ZVxuICAgICAgICAgIGlmICghdmFsdWUpIHJldHVyblxuXG4gICAgICAgICAgY29uc3QgdmFsdWVPYmogPSBnZXRVUkxTZWFyY2hQYXJhbXModmFsdWUpXG4gICAgICAgICAgY29uc3QgbWt0ID0gdmFsdWVPYmouZ2V0KCdta3QnKT8udG9Mb3dlckNhc2UoKSA/PyAnJ1xuXG4gICAgICAgICAgaWYgKCFCQU5EX01LVFMubWFwKChtKSA9PiBtLnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKG1rdCkpIHJldHVyblxuICAgICAgICAgIGlmIChta3QgPT09ICd6aC1jbicpIHtcbiAgICAgICAgICAgIHZhbHVlT2JqLnNldCgnbWt0JywgJ3poLUhLJylcbiAgICAgICAgICAgIHZhbHVlT2JqLnNldCgndWknLCAnemgtaGFucycpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlT2JqLmRlbGV0ZSgnbWt0JylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRDb29raWUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybDogQklORyxcbiAgICAgICAgICAgICAgbmFtZTogY29va2llLm5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZU9iai50b1N0cmluZygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29va2llXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGNocm9tZS5jb29raWVzLmdldChcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdfUndCZicsXG4gICAgICAgICAgdXJsOiBCSU5HXG4gICAgICAgIH0sXG4gICAgICAgIChjb29raWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvb2tpZT8udmFsdWVcbiAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICBzZXRDb29raWUoe1xuICAgICAgICAgICAgICB1cmw6IEJJTkcsXG4gICAgICAgICAgICAgIG5hbWU6ICdfUndCZicsXG4gICAgICAgICAgICAgIHZhbHVlOiAnd2xzPTInLFxuICAgICAgICAgICAgICBkb21haW46ICcuYmluZy5jb20nLFxuICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbHVlT2JqID0gZ2V0VVJMU2VhcmNoUGFyYW1zKHZhbHVlKVxuICAgICAgICAgIGNvbnN0IHdscyA9IHZhbHVlT2JqLmdldCgnd2xzJylcbiAgICAgICAgICBpZiAod2xzICE9PSAnMicgJiYgd2xzICE9PSAnJykge1xuICAgICAgICAgICAgdmFsdWVPYmouc2V0KCd3bHMnLCAnMicpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsOiBCSU5HLFxuICAgICAgICAgICAgICBuYW1lOiAnX1J3QmYnLFxuICAgICAgICAgICAgICBkb21haW46ICcuYmluZy5jb20nLFxuICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlT2JqLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb29raWVcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgY2hyb21lLmNvb2tpZXMuZ2V0KFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0FOT04nLFxuICAgICAgICAgIHVybDogQklOR1xuICAgICAgICB9LFxuICAgICAgICAoY29va2llKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBjb29raWU/LnZhbHVlXG4gICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuXG5cbiAgICAgICAgICBjb25zdCB2YWx1ZU9iaiA9IGdldFVSTFNlYXJjaFBhcmFtcyh2YWx1ZSlcblxuICAgICAgICAgIHZhbHVlT2JqLmRlbGV0ZSgnQScpXG5cbiAgICAgICAgICBzZXRDb29raWUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybDogQklORyxcbiAgICAgICAgICAgICAgbmFtZTogJ0FOT04nLFxuICAgICAgICAgICAgICBkb21haW46ICcuYmluZy5jb20nLFxuICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlT2JqLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb29raWVcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9LFxuICAgIHsgdXJsczogW0JJTkcgKyAnKiddLCB0eXBlczogWydtYWluX2ZyYW1lJ10gfVxuICApXG59XG4iLCAiaW1wb3J0IHsgQUlQTFVTLCBBTExfUkVTT1VSQ0VfVFlQRVMgfSBmcm9tICdAQC9jb25zdGFudHMnXG5cbmltcG9ydCB7IGdlblVBLCBpc0NoaW5lc2UgfSBmcm9tICdAQC91dGlscydcblxuY29uc3QgTU9ESUZZX0hFQURFUlNfTElTVCA9IHtcbiAgLy8gJ1gtRm9yd2FyZGVkLUZvcic6ICc4LjguOC44JyxcbiAgJ1VzZXItQWdlbnQnOiBnZW5VQSgpXG59XG5jb25zdCBNT0RJRllfSEVBREVSUyA9ICdtb2RpZnlIZWFkZXJzJyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJ1bGVBY3Rpb25UeXBlLk1PRElGWV9IRUFERVJTXG5jb25zdCBSRURJUkVDVCA9ICdyZWRpcmVjdCcgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5SdWxlQWN0aW9uVHlwZS5SRURJUkVDVFxuLy8gY29uc3QgQVBQRU5EID0gJ2FwcGVuZCcgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5IZWFkZXJPcGVyYXRpb24uQVBQRU5EXG4vLyBjb25zdCBSRU1PVkUgPSAncmVtb3ZlJyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LkhlYWRlck9wZXJhdGlvbi5SRU1PVkVcbmNvbnN0IFNFVCA9ICdzZXQnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuSGVhZGVyT3BlcmF0aW9uLlNFVFxuXG5leHBvcnQgY29uc3QgZHluYW1pY1J1bGVzID0gW1xuICB7XG4gICAgcHJpb3JpdHk6IDIwMDEsXG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBNT0RJRllfSEVBREVSUyxcbiAgICAgIHJlcXVlc3RIZWFkZXJzOiBPYmplY3QuZW50cmllcyhNT0RJRllfSEVBREVSU19MSVNUKS5tYXAoKFtoZWFkZXIsIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgb3BlcmF0aW9uOiBTRVQsXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICByZXF1ZXN0RG9tYWluczogWydiaW5nLmNvbScsICd3d3cuYmluZy5jb20nLCAnY24uYmluZy5jb20nXSxcbiAgICAgIHJlc291cmNlVHlwZXM6IEFMTF9SRVNPVVJDRV9UWVBFU1xuICAgIH1cbiAgfSxcbiAgaXNDaGluZXNlICYmIHtcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IFJFRElSRUNULFxuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgdXJsOiBgJHtBSVBMVVN9P2ludml0ZV9jb2RlPWI5MGU4NGI1YFxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICByZXF1ZXN0RG9tYWluczogWydjaGF0LmFpcGx1cy5sb2wnXSxcbiAgICAgIHVybEZpbHRlcjogQUlQTFVTLFxuICAgICAgaXNVcmxGaWx0ZXJDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgIHJlc291cmNlVHlwZXM6IEFMTF9SRVNPVVJDRV9UWVBFU1xuICAgIH1cbiAgfVxuXVxuICAuZmlsdGVyKEJvb2xlYW4pXG4gIC5tYXAoKHJ1bGUsIGluZGV4KSA9PiAoe1xuICAgIGlkOiBpbmRleCArIDEgKyAyMDAwLFxuICAgIC4uLnJ1bGVcbiAgfSkpIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuUnVsZVtdXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgaWYgKCFkeW5hbWljUnVsZXMubGVuZ3RoKSByZXR1cm5cblxuICBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LmdldER5bmFtaWNSdWxlcygoZFJ1bGVzKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coMjIyLCBbLi4ubmV3IFNldChbLi4ucnVsZXMubWFwKChydWxlKSA9PiBydWxlLmlkKSwgLi4uZFJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZS5pZCldKV0pXG5cbiAgICBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LnVwZGF0ZUR5bmFtaWNSdWxlcyh7XG4gICAgICByZW1vdmVSdWxlSWRzOiBbLi4ubmV3IFNldChbLi4uZHluYW1pY1J1bGVzLm1hcCgocnVsZSkgPT4gcnVsZS5pZCksIC4uLmRSdWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGUuaWQpXSldLFxuICAgICAgYWRkUnVsZXM6IGR5bmFtaWNSdWxlc1xuICAgIH0pXG4gICAgLy8gLnRoZW4oKCkgPT4ge1xuICAgIC8vICAgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5nZXREeW5hbWljUnVsZXMoKGRSdWxlcykgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygzMzMsIGRSdWxlcylcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgfSlcblxuICAvLyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0Lm9uUnVsZU1hdGNoZWREZWJ1Zy5hZGRMaXN0ZW5lcigoLi4uYXJncykgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKDExMTEsIC4uLmFyZ3MpXG4gIC8vIH0pXG59XG4iLCAiaW1wb3J0IGNyb3NzUGxhdGZvcm0gZnJvbSAnLi9jcm9zc19wbGF0Zm9ybSdcbmltcG9ydCBpbml0RHluYW1pY1J1bGVzIGZyb20gJy4vZHluYW1pY19ydWxlcydcblxuY3Jvc3NQbGF0Zm9ybSgpXG5cbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKChfZGV0YWlscykgPT4ge1xuICBpbml0RHluYW1pY1J1bGVzKClcbn0pXG5cbmNocm9tZS5ydW50aW1lLnNldFVuaW5zdGFsbFVSTCgnaHR0cHM6Ly9naXRodWIuY29tL2hhb3ppL05ldy1CaW5nLUFueXdoZXJlL2Jsb2IvbWFpbi91bmluc3RhbGwubWQnKVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQU8sTUFBTSxPQUFPO0FBRWIsTUFBTSxTQUFT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LE1BQU0sV0FBVztBQUdqQixNQUFNLE1BQU07QUFFTCxNQUFNLGVBQWU7QUFBQSxJQUMxQjtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sZ0JBQWdCLE9BQU8sUUFBUSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssT0FBTztBQUFBLFVBQzVFLFdBQVc7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFFBQ0YsRUFBRTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULGdCQUFnQixDQUFDLFlBQVksZ0JBQWdCLGFBQWE7QUFBQSxRQUMxRCxlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUixLQUFLLEdBQUcsTUFBTTtBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1QsZ0JBQWdCLENBQUMsaUJBQWlCO0FBQUEsUUFDbEMsV0FBVztBQUFBLFFBQ1gsMEJBQTBCO0FBQUEsUUFDMUIsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0YsRUFDRyxPQUFPLE9BQU8sRUFDZCxJQUFJLENBQUMsTUFBTSxXQUFXO0FBQUEsSUFDckIsSUFBSSxRQUFRLElBQUk7QUFBQSxJQUNoQixHQUFHO0FBQUEsRUFDTCxFQUFFO0FBRUosTUFBTyx3QkFBUSxNQUFNO0FBQ25CLFFBQUksQ0FBQyxhQUFhO0FBQVE7QUFFMUIsV0FBTyxzQkFBc0IsZ0JBQWdCLENBQUMsV0FBVztBQUd2RCxhQUFPLHNCQUFzQixtQkFBbUI7QUFBQSxRQUM5QyxlQUFlLENBQUMsR0FBRyxvQkFBSSxJQUFJLENBQUMsR0FBRyxhQUFhLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFBQSxRQUN0RyxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFNSCxDQUFDO0FBQUEsRUFLSDs7O0FDcEVBLHlCQUFjO0FBRWQsU0FBTyxRQUFRLFlBQVksWUFBWSxDQUFDLGFBQWE7QUFDbkQsMEJBQWlCO0FBQUEsRUFDbkIsQ0FBQztBQUVELFNBQU8sUUFBUSxnQkFBZ0IsbUVBQW1FOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgInRhYiIsICJ2ZXJzaW9uIiwgInRhYiIsICJ2ZXJzaW9uIl0KfQo=
