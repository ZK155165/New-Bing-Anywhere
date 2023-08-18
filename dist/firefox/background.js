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
            value: `"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"`
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
            value: `"Not.A/Brand";v="8.0.0.0", "Chromium";v="114.0.5735.201", "Microsoft Edge";v="114.0.1823.82"`
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
  var MODIFY_HEADERS2 = "modifyHeaders";
  var REDIRECT2 = "redirect";
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
    },
    isChinese && {
      action: {
        type: REDIRECT2,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3VuaXZlcnNlL2NvbnN0YW50cy50cyIsICIuLi8uLi9zY3JpcHRzL3N0YXRpY19ydWxlcy50cyIsICIuLi8uLi9wYWNrYWdlLmpzb24iLCAiLi4vLi4vc3JjL3VuaXZlcnNlL3V0aWxzL19taXNjLnRzIiwgIi4uLy4uL3NyYy91bml2ZXJzZS91dGlscy9fY29udGV4dE1lbnVzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2NvbnRleHRfbWVudXMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsICIuLi8uLi9zcmMvYmFja2dyb3VuZC9saXN0ZW5lcnMvX2JpbmcudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL19ub3RpZmljYXRpb24udHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2Nyb3NzX3BsYXRmb3JtLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2R5bmFtaWNfcnVsZXMudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvZmlyZWZveC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IEJJTkcgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vJ1xuZXhwb3J0IGNvbnN0IENOX1JFRElSRUNUX1VSTCA9ICdodHRwczovL2NuLmJpbmcuY29tLydcbmV4cG9ydCBjb25zdCBBSVBMVVMgPSAnaHR0cHM6Ly9jaGF0LmFpcGx1cy5sb2wvbG9naW4nXG5leHBvcnQgY29uc3QgQkFORF9NS1RTID0gWyd6aC1DTicsICdydScsICdydS1ydSddXG5cbmV4cG9ydCBjb25zdCBNQUlOX1ZFUlNJT04gPSAnMTE0J1xuZXhwb3J0IGNvbnN0IEZVTExfVkVSU0lPTiA9ICcxMTQuMC4xODIzLjgyJ1xuXG5leHBvcnQgY29uc3QgQUxMX1JFU09VUkNFX1RZUEVTID0gW1xuICAnY3NwX3JlcG9ydCcsXG4gICdmb250JyxcbiAgJ2ltYWdlJyxcbiAgJ21haW5fZnJhbWUnLFxuICAnbWVkaWEnLFxuICAnb2JqZWN0JyxcbiAgJ290aGVyJyxcbiAgJ3BpbmcnLFxuICAnc2NyaXB0JyxcbiAgJ3N0eWxlc2hlZXQnLFxuICAnc3ViX2ZyYW1lJyxcbiAgJ3dlYmJ1bmRsZScsXG4gICd3ZWJzb2NrZXQnLFxuICAnd2VidHJhbnNwb3J0JyxcbiAgJ3htbGh0dHByZXF1ZXN0J1xuXSBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJlc291cmNlVHlwZVtdXG5cbmV4cG9ydCBjb25zdCBHT09HTEVfRE9NQUlOUyA9IFtcbiAgJ2dvb2dsZS5jb20nLFxuXG4gICdnb29nbGUuYWMnLFxuICAnZ29vZ2xlLmFkJyxcbiAgJ2dvb2dsZS5hZScsXG4gICdnb29nbGUuYWwnLFxuICAnZ29vZ2xlLmFtJyxcbiAgJ2dvb2dsZS5hcycsXG4gICdnb29nbGUuYXQnLFxuICAnZ29vZ2xlLmF6JyxcbiAgJ2dvb2dsZS5iYScsXG4gICdnb29nbGUuYmUnLFxuICAnZ29vZ2xlLmJmJyxcbiAgJ2dvb2dsZS5iZycsXG4gICdnb29nbGUuYmknLFxuICAnZ29vZ2xlLmJqJyxcbiAgJ2dvb2dsZS5icycsXG4gICdnb29nbGUuYnQnLFxuICAnZ29vZ2xlLmJ5JyxcbiAgJ2dvb2dsZS5jYScsXG4gICdnb29nbGUuY2F0JyxcbiAgJ2dvb2dsZS5jYycsXG4gICdnb29nbGUuY2QnLFxuICAnZ29vZ2xlLmNmJyxcbiAgJ2dvb2dsZS5jZycsXG4gICdnb29nbGUuY2gnLFxuICAnZ29vZ2xlLmNpJyxcbiAgJ2dvb2dsZS5jbCcsXG4gICdnb29nbGUuY20nLFxuICAnZ29vZ2xlLmNuJyxcbiAgJ2dvb2dsZS5jbycsXG4gICdnb29nbGUuY28uYW8nLFxuICAnZ29vZ2xlLmNvLmJ3JyxcbiAgJ2dvb2dsZS5jby5jaycsXG4gICdnb29nbGUuY28uY3InLFxuICAnZ29vZ2xlLmNvLmlkJyxcbiAgJ2dvb2dsZS5jby5pbCcsXG4gICdnb29nbGUuY28uaW4nLFxuICAnZ29vZ2xlLmNvLmpwJyxcbiAgJ2dvb2dsZS5jby5rZScsXG4gICdnb29nbGUuY28ua3InLFxuICAnZ29vZ2xlLmNvLmxzJyxcbiAgJ2dvb2dsZS5jby5tYScsXG4gICdnb29nbGUuY28ubXonLFxuICAnZ29vZ2xlLmNvLm56JyxcbiAgJ2dvb2dsZS5jby50aCcsXG4gICdnb29nbGUuY28udHonLFxuICAnZ29vZ2xlLmNvLnVnJyxcbiAgJ2dvb2dsZS5jby51aycsXG4gICdnb29nbGUuY28udXonLFxuICAnZ29vZ2xlLmNvLnZlJyxcbiAgJ2dvb2dsZS5jby52aScsXG4gICdnb29nbGUuY28uemEnLFxuICAnZ29vZ2xlLmNvLnptJyxcbiAgJ2dvb2dsZS5jby56dycsXG4gICdnb29nbGUuY29tLmFmJyxcbiAgJ2dvb2dsZS5jb20uYWcnLFxuICAnZ29vZ2xlLmNvbS5haScsXG4gICdnb29nbGUuY29tLmFyJyxcbiAgJ2dvb2dsZS5jb20uYXUnLFxuICAnZ29vZ2xlLmNvbS5iZCcsXG4gICdnb29nbGUuY29tLmJoJyxcbiAgJ2dvb2dsZS5jb20uYm4nLFxuICAnZ29vZ2xlLmNvbS5ibycsXG4gICdnb29nbGUuY29tLmJyJyxcbiAgJ2dvb2dsZS5jb20uYnonLFxuICAnZ29vZ2xlLmNvbS5jbycsXG4gICdnb29nbGUuY29tLmN1JyxcbiAgJ2dvb2dsZS5jb20uY3knLFxuICAnZ29vZ2xlLmNvbS5kbycsXG4gICdnb29nbGUuY29tLmVjJyxcbiAgJ2dvb2dsZS5jb20uZWcnLFxuICAnZ29vZ2xlLmNvbS5ldCcsXG4gICdnb29nbGUuY29tLmZqJyxcbiAgJ2dvb2dsZS5jb20uZ2gnLFxuICAnZ29vZ2xlLmNvbS5naScsXG4gICdnb29nbGUuY29tLmd0JyxcbiAgJ2dvb2dsZS5jb20uaGsnLFxuICAnZ29vZ2xlLmNvbS5qbScsXG4gICdnb29nbGUuY29tLmtoJyxcbiAgJ2dvb2dsZS5jb20ua3cnLFxuICAnZ29vZ2xlLmNvbS5sYicsXG4gICdnb29nbGUuY29tLmxjJyxcbiAgJ2dvb2dsZS5jb20ubHknLFxuICAnZ29vZ2xlLmNvbS5tbScsXG4gICdnb29nbGUuY29tLm10JyxcbiAgJ2dvb2dsZS5jb20ubXgnLFxuICAnZ29vZ2xlLmNvbS5teScsXG4gICdnb29nbGUuY29tLm5hJyxcbiAgJ2dvb2dsZS5jb20ubmYnLFxuICAnZ29vZ2xlLmNvbS5uZycsXG4gICdnb29nbGUuY29tLm5pJyxcbiAgJ2dvb2dsZS5jb20ubnAnLFxuICAnZ29vZ2xlLmNvbS5vbScsXG4gICdnb29nbGUuY29tLnBhJyxcbiAgJ2dvb2dsZS5jb20ucGUnLFxuICAnZ29vZ2xlLmNvbS5wZycsXG4gICdnb29nbGUuY29tLnBoJyxcbiAgJ2dvb2dsZS5jb20ucGsnLFxuICAnZ29vZ2xlLmNvbS5wcicsXG4gICdnb29nbGUuY29tLnB5JyxcbiAgJ2dvb2dsZS5jb20ucWEnLFxuICAnZ29vZ2xlLmNvbS5zYScsXG4gICdnb29nbGUuY29tLnNiJyxcbiAgJ2dvb2dsZS5jb20uc2cnLFxuICAnZ29vZ2xlLmNvbS5zbCcsXG4gICdnb29nbGUuY29tLnN2JyxcbiAgJ2dvb2dsZS5jb20udGonLFxuICAnZ29vZ2xlLmNvbS50cicsXG4gICdnb29nbGUuY29tLnR3JyxcbiAgJ2dvb2dsZS5jb20udWEnLFxuICAnZ29vZ2xlLmNvbS51eScsXG4gICdnb29nbGUuY29tLnZjJyxcbiAgJ2dvb2dsZS5jb20udm4nLFxuICAnZ29vZ2xlLmN2JyxcbiAgJ2dvb2dsZS5jeicsXG4gICdnb29nbGUuZGUnLFxuICAnZ29vZ2xlLmRqJyxcbiAgJ2dvb2dsZS5kaycsXG4gICdnb29nbGUuZG0nLFxuICAnZ29vZ2xlLmR6JyxcbiAgJ2dvb2dsZS5lZScsXG4gICdnb29nbGUuZXMnLFxuICAnZ29vZ2xlLmZpJyxcbiAgJ2dvb2dsZS5mbScsXG4gICdnb29nbGUuZnInLFxuICAnZ29vZ2xlLmdhJyxcbiAgJ2dvb2dsZS5nZScsXG4gICdnb29nbGUuZ2YnLFxuICAnZ29vZ2xlLmdnJyxcbiAgJ2dvb2dsZS5nbCcsXG4gICdnb29nbGUuZ20nLFxuICAnZ29vZ2xlLmdwJyxcbiAgJ2dvb2dsZS5ncicsXG4gICdnb29nbGUuZ3knLFxuICAnZ29vZ2xlLmhuJyxcbiAgJ2dvb2dsZS5ocicsXG4gICdnb29nbGUuaHQnLFxuICAnZ29vZ2xlLmh1JyxcbiAgJ2dvb2dsZS5pZScsXG4gICdnb29nbGUuaW0nLFxuICAnZ29vZ2xlLmlvJyxcbiAgJ2dvb2dsZS5pcScsXG4gICdnb29nbGUuaXMnLFxuICAnZ29vZ2xlLml0JyxcbiAgJ2dvb2dsZS5qZScsXG4gICdnb29nbGUuam8nLFxuICAnZ29vZ2xlLmtnJyxcbiAgJ2dvb2dsZS5raScsXG4gICdnb29nbGUua3onLFxuICAnZ29vZ2xlLmxhJyxcbiAgJ2dvb2dsZS5saScsXG4gICdnb29nbGUubGsnLFxuICAnZ29vZ2xlLmx0JyxcbiAgJ2dvb2dsZS5sdScsXG4gICdnb29nbGUubHYnLFxuICAnZ29vZ2xlLm1kJyxcbiAgJ2dvb2dsZS5tZScsXG4gICdnb29nbGUubWcnLFxuICAnZ29vZ2xlLm1rJyxcbiAgJ2dvb2dsZS5tbCcsXG4gICdnb29nbGUubW4nLFxuICAnZ29vZ2xlLm1zJyxcbiAgJ2dvb2dsZS5tdScsXG4gICdnb29nbGUubXYnLFxuICAnZ29vZ2xlLm13JyxcbiAgJ2dvb2dsZS5uZScsXG4gICdnb29nbGUubmcnLFxuICAnZ29vZ2xlLm5sJyxcbiAgJ2dvb2dsZS5ubycsXG4gICdnb29nbGUubnInLFxuICAnZ29vZ2xlLm51JyxcbiAgJ2dvb2dsZS5wbCcsXG4gICdnb29nbGUucG4nLFxuICAnZ29vZ2xlLnBzJyxcbiAgJ2dvb2dsZS5wdCcsXG4gICdnb29nbGUucm8nLFxuICAnZ29vZ2xlLnJzJyxcbiAgJ2dvb2dsZS5ydScsXG4gICdnb29nbGUucncnLFxuICAnZ29vZ2xlLnNjJyxcbiAgJ2dvb2dsZS5zZScsXG4gICdnb29nbGUuc2gnLFxuICAnZ29vZ2xlLnNpJyxcbiAgJ2dvb2dsZS5zaycsXG4gICdnb29nbGUuc20nLFxuICAnZ29vZ2xlLnNuJyxcbiAgJ2dvb2dsZS5zbycsXG4gICdnb29nbGUuc3InLFxuICAnZ29vZ2xlLnN0JyxcbiAgJ2dvb2dsZS50ZCcsXG4gICdnb29nbGUudGcnLFxuICAnZ29vZ2xlLnRrJyxcbiAgJ2dvb2dsZS50bCcsXG4gICdnb29nbGUudG0nLFxuICAnZ29vZ2xlLnRuJyxcbiAgJ2dvb2dsZS50bycsXG4gICdnb29nbGUudHQnLFxuICAnZ29vZ2xlLnZnJyxcbiAgJ2dvb2dsZS52dScsXG4gICdnb29nbGUud3MnXG5dXG5cbmV4cG9ydCBjb25zdCBZQU5ERVhfRE9NQUlOUyA9IFtcbiAgJ3lhbmRleC5jb20nLFxuICAneWFuZGV4LnJ1JyxcbiAgJ3lhbmRleC5ieScsXG4gICd5YW5kZXgua3onLFxuICAneWFuZGV4LnV6JyxcbiAgJ3lhbmRleC5jb20udHInLFxuICAneWFuZGV4LmZyJyxcbiAgJ3lhbmRleC5heicsXG4gICd5YW5kZXguY29tLmdlJyxcbiAgJ3lhbmRleC5jb20uYW0nLFxuICAneWFuZGV4LmNvLmlsJyxcbiAgJ3lhbmRleC5sdicsXG4gICd5YW5kZXgubHQnLFxuICAneWFuZGV4LmVlJyxcbiAgJ3lhbmRleC5tZCcsXG4gICd5YW5kZXgudG0nLFxuICAneWFuZGV4LnRqJyxcbiAgJ3lhbmRleC5ldSdcbl1cblxuZXhwb3J0IGNvbnN0IE9USEVSUyA9IFsnZHVja2R1Y2tnby5jb20nLCAnd3d3LmJpbmcuY29tJywgJ3d3dy5lY29zaWEub3JnJywgJ3NlYXJjaC5icmF2ZS5jb20nLCAnd3d3LmJhaWR1LmNvbSddXG4iLCAiaW1wb3J0IHsgQUxMX1JFU09VUkNFX1RZUEVTLCBCSU5HLCBGVUxMX1ZFUlNJT04sIE1BSU5fVkVSU0lPTiB9IGZyb20gJy4uL3NyYy91bml2ZXJzZS9jb25zdGFudHMnXG5cbmNvbnN0IE1PRElGWV9IRUFERVJTID0gJ21vZGlmeUhlYWRlcnMnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuUnVsZUFjdGlvblR5cGUuTU9ESUZZX0hFQURFUlNcbmNvbnN0IFJFRElSRUNUID0gJ3JlZGlyZWN0JyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJ1bGVBY3Rpb25UeXBlLlJFRElSRUNUXG5jb25zdCBBUFBFTkQgPSAnYXBwZW5kJyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LkhlYWRlck9wZXJhdGlvbi5BUFBFTkRcbi8vIGNvbnN0IFJFTU9WRSA9ICdyZW1vdmUnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuSGVhZGVyT3BlcmF0aW9uLlJFTU9WRVxuY29uc3QgU0VUID0gJ3NldCcgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5IZWFkZXJPcGVyYXRpb24uU0VUXG5cbmV4cG9ydCBjb25zdCBzdGF0aWNSdWxlczogY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5SdWxlW10gPSBbXG4gIHtcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IE1PRElGWV9IRUFERVJTLFxuICAgICAgcmVxdWVzdEhlYWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG9wZXJhdGlvbjogU0VULFxuICAgICAgICAgIGhlYWRlcjogJ3NlYy1jaC11YScsXG4gICAgICAgICAgdmFsdWU6IGBcIk5vdC5BL0JyYW5kXCI7dj1cIjhcIiwgXCJDaHJvbWl1bVwiO3Y9XCIxMTRcIiwgXCJNaWNyb3NvZnQgRWRnZVwiO3Y9XCIxMTRcImBcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG9wZXJhdGlvbjogU0VULFxuICAgICAgICAvLyAgIGhlYWRlcjogJ3NlYy1jaC11YS1hcmNoJyxcbiAgICAgICAgLy8gICB2YWx1ZTogJ1wieDg2XCInXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgLy8gICBoZWFkZXI6ICdzZWMtY2gtdWEtYml0bmVzcycsXG4gICAgICAgIC8vICAgdmFsdWU6ICdcIjY0XCInXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgICBoZWFkZXI6ICdzZWMtY2gtdWEtZnVsbC12ZXJzaW9uJyxcbiAgICAgICAgICB2YWx1ZTogYFwiJHtGVUxMX1ZFUlNJT059XCJgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgICBoZWFkZXI6ICdzZWMtY2gtdWEtZnVsbC12ZXJzaW9uLWxpc3QnLFxuICAgICAgICAgIHZhbHVlOiBgXCJOb3QuQS9CcmFuZFwiO3Y9XCI4LjAuMC4wXCIsIFwiQ2hyb21pdW1cIjt2PVwiMTE0LjAuNTczNS4yMDFcIiwgXCJNaWNyb3NvZnQgRWRnZVwiO3Y9XCIxMTQuMC4xODIzLjgyXCJgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgICBoZWFkZXI6ICdzZWMtbXMtZ2VjLXZlcnNpb24nLFxuICAgICAgICAgIHZhbHVlOiBgMS0ke0ZVTExfVkVSU0lPTn1gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgICBoZWFkZXI6ICdVc2VyLUFnZW50JyxcbiAgICAgICAgICB2YWx1ZTogYE1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8ke01BSU5fVkVSU0lPTn0uMC4wLjAgU2FmYXJpLzUzNy4zNiBFZGcvJHtGVUxMX1ZFUlNJT059YFxuICAgICAgICB9XG5cbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG9wZXJhdGlvbjogU0VULFxuICAgICAgICAvLyAgIGhlYWRlcjogJ3NlYy1tcy1nZWMnLFxuICAgICAgICAvLyAgIHZhbHVlOiAnQjU1REY4NjU4Mjc5MTJGQjBFRENDRUM0NzI4NEJGQjIyRDNEMkQ0NTM2MjNERTk3QjJDQ0VEREJCNTdEQUQyMydcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgb3BlcmF0aW9uOiBSRU1PVkUsXG4gICAgICAgIC8vICAgaGVhZGVyOiAnWC1Gb3J3YXJkZWQtRm9yJ1xuICAgICAgICAvLyB9XG4gICAgICBdXG4gICAgfSxcbiAgICBjb25kaXRpb246IHtcbiAgICAgIHJlcXVlc3REb21haW5zOiBbJ2JpbmcuY29tJywgJ3d3dy5iaW5nLmNvbScsICdjbi5iaW5nLmNvbSddLFxuICAgICAgcmVzb3VyY2VUeXBlczogQUxMX1JFU09VUkNFX1RZUEVTXG4gICAgfVxuICB9LFxuICB7XG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBSRURJUkVDVCxcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHJlZ2V4U3Vic3RpdHV0aW9uOiAnXFxcXDFzZXRsYW5nPXpoLUhhbnMmbWt0PXpoLUhLXFxcXDInXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25kaXRpb246IHtcbiAgICAgIC8vIGh0dHBzOi8vcmVnZXgxMDEuY29tL3IvTEM2OGhaLzFcbiAgICAgIHJlZ2V4RmlsdGVyOiAnKF5odHRwczpcXFxcL1xcXFwvd3d3XFxcXC5iaW5nXFxcXC5jb21cXFxcLyg/OnNlYXJjaHxcXFxcP3xhY2NvdW50L2FjdGlvbikuKj8pKD86bWt0PXpoLUNOfGNjPWNufGNjPXpoLWNufGNjPXpoKSguKiknLFxuICAgICAgaXNVcmxGaWx0ZXJDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgIHJlcXVlc3REb21haW5zOiBbJ3d3dy5iaW5nLmNvbSddLFxuICAgICAgcmVzb3VyY2VUeXBlczogQUxMX1JFU09VUkNFX1RZUEVTXG4gICAgfVxuICB9LFxuICB7XG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBSRURJUkVDVCxcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHJlZ2V4U3Vic3RpdHV0aW9uOiAnXFxcXDFzZXRsYW5nPXJ1JmNjPWNsZWFuJm1rdD1lbi11c1xcXFwyJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICAvLyBodHRwczovL3JlZ2V4MTAxLmNvbS9yL0xDNjhoWi8xXG4gICAgICByZWdleEZpbHRlcjogJyheaHR0cHM6XFxcXC9cXFxcL3d3d1xcXFwuYmluZ1xcXFwuY29tXFxcXC8oPzpzZWFyY2h8XFxcXD98YWNjb3VudC9hY3Rpb24pLio/KSg/Om1rdD1ydS1ydXxta3Q9cnV8Y2M9cnUpKC4qKScsXG4gICAgICBpc1VybEZpbHRlckNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgcmVxdWVzdERvbWFpbnM6IFsnd3d3LmJpbmcuY29tJ10sXG4gICAgICByZXNvdXJjZVR5cGVzOiBBTExfUkVTT1VSQ0VfVFlQRVNcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IFJFRElSRUNULFxuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgdXJsOiBgJHtCSU5HfT9zZXRsYW5nPXpoLUhhbnMmbWt0PXpoLUhLYFxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICByZWdleEZpbHRlcjogJ1xcXFwvXFxcXD8oPzpuZXctYmluZy1hbnl3aGVyZXxuYmF8cnVuKScsXG4gICAgICBpc1VybEZpbHRlckNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgcmVxdWVzdERvbWFpbnM6IFsnd3d3LmJpbmcuY29tJ10sXG4gICAgICByZXNvdXJjZVR5cGVzOiBBTExfUkVTT1VSQ0VfVFlQRVNcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwcmlvcml0eTogOTksXG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBSRURJUkVDVCxcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHJlZ2V4U3Vic3RpdHV0aW9uOiBgJHtCSU5HfVxcXFwxYFxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICAvLyBodHRwczovL2NuLmJpbmcuY29tL3NlYXJjaD9xPWZkc2FmZHNhZmRzYWZkc2FmZHNhZmRzYWZkc2FmZHNhZiZjdmlkPTQ5NDAwYjZmYWUwMTRmZjNiMjM0MTFiNTQxY2M3MTE1JmFxcz1lZGdlLi42OWk1Ny4zOTc0ajBqOSZGT1JNPUFOQUIwMSZEQUYwPTEmUEM9Q05ORERCXG4gICAgICByZXF1ZXN0RG9tYWluczogWydjbi5iaW5nLmNvbScsICdiaW5nLmNvbSddLFxuICAgICAgcmVnZXhGaWx0ZXI6ICdeaHR0cCg/OnMpPzpcXFxcL1xcXFwvKD86Y25cXFxcLik/YmluZ1xcXFwuY29tXFxcXC8oLiopJyxcbiAgICAgIHJlc291cmNlVHlwZXM6IEFMTF9SRVNPVVJDRV9UWVBFU1xuICAgIH1cbiAgfSxcbiAge1xuICAgIGFjdGlvbjoge1xuICAgICAgdHlwZTogTU9ESUZZX0hFQURFUlMsXG4gICAgICByZXNwb25zZUhlYWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcjogJ1NldC1Db29raWUnLFxuICAgICAgICAgIG9wZXJhdGlvbjogQVBQRU5ELFxuICAgICAgICAgIHZhbHVlOiAnU05SSE9QPUk9ODsgZG9tYWluPS5iaW5nLmNvbTsgcGF0aD0vOyBzZWN1cmU7IFNhbWVTaXRlPU5vbmU7IEh0dHBPbmx5OydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICByZXF1ZXN0RG9tYWluczogWydiaW5nLmNvbScsICd3d3cuYmluZy5jb20nXVxuICAgIH1cbiAgfVxuICAvLyB7XG4gIC8vICAgYWN0aW9uOiB7XG4gIC8vICAgICB0eXBlOiBNT0RJRllfSEVBREVSUyxcbiAgLy8gICAgIHJlc3BvbnNlSGVhZGVyczogW1xuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgaGVhZGVyOiAnU2V0LUNvb2tpZScsXG4gIC8vICAgICAgICAgb3BlcmF0aW9uOiBSRU1PVkVcbiAgLy8gICAgICAgfVxuICAvLyAgICAgXVxuICAvLyAgIH0sXG4gIC8vICAgY29uZGl0aW9uOiB7IHVybEZpbHRlcjogJ2h0dHBzOi8vd3d3LmJpbmcuY29tLycsIHJlc291cmNlVHlwZXM6IEFMTF9SRVNPVVJDRV9UWVBFUyB9XG4gIC8vIH1cbl0ubWFwKChydWxlLCBpbmRleCkgPT4gKHtcbiAgaWQ6IGluZGV4ICsgMSxcbiAgLi4ucnVsZVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRpY1J1bGVzXG4iLCAie1xuICBcIm5hbWVcIjogXCJuZXctYmluZy1hbnl3aGVyZVwiLFxuICBcInZlcnNpb25cIjogXCIyLjMuMFwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIGlzbid0IGp1c3QgZm9yIEVkZ2UgYW55bW9yZS4gQW55d2hlcmUgeW91IHdhbnRcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9oYW96aS9OZXctQmluZy1Bbnl3aGVyZVwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2hhb3ppL05ldy1CaW5nLUFueXdoZXJlXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiR1BMdjNcIixcbiAgXCJhdXRob3JcIjogXCJoYW96aVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJybSAtcmYgZGlzdCAmJiBta2RpciAtcCBkaXN0ICYmIHBucG0gcnVuIGxpbnQgJiYgcG5wbSBydW4gYnVpbGQ6YnVuZGxlXCIsXG4gICAgXCJidWlsZDpidW5kbGVcIjogXCJOT0RFX0VOVj1wcm9kdWN0aW9uIHZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGJ1aWxkXCIsXG4gICAgXCJjb3B5XCI6IFwicm0gLXJmIGRpc3QgJiYgY3AgLXIgcHVibGljIGRpc3RcIixcbiAgICBcImNvcHk6c29ydWNlXCI6IFwicnN5bmMgLXZocmEgLiBkaXN0L3NvdXJjZSAtLWluY2x1ZGU9JyoqLmdpdGlnbm9yZScgLS1leGNsdWRlPScvLmdpdCcgLS1leGNsdWRlPSdkaXN0JyAgLS1maWx0ZXI9JzotIC5naXRpZ25vcmUnIC0tZGVsZXRlLWFmdGVyXCIsXG4gICAgXCJjb3B5OndhdGNoXCI6IFwicG5wbSBydW4gY29weSAtLSAtLXdhdGNoXCIsXG4gICAgXCJkZXZcIjogXCJwbnBtIHJ1biBsaW50ICYmIHBucG0gcnVuICcvXmRldjouKi8nXCIsXG4gICAgXCJkZXY6YXBwXCI6IFwicG5wbSAtLWZpbHRlciBhcHAgcnVuIGRldlwiLFxuICAgIFwiZGV2OmJ1bmRsZVwiOiBcInZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGRldlwiLFxuICAgIFwibGludFwiOiBcInBucG0gcnVuIHByZXR0aWVyICYmIHBucG0gcnVuICcvXmxpbnQ6LiovJ1wiLFxuICAgIFwibGludDplc2xpbnRcIjogXCJlc2xpbnQgLS1leHQgLmpzLC50cyAuL3NyYyAtLWZpeCAtLWNhY2hlXCIsXG4gICAgXCJsaW50OnN0eWx1c1wiOiBcInN0eWx1cy1zdXByZW1hY3kgZm9ybWF0IC4vc3JjLyoqLyouc3R5bCAgLS1vcHRpb25zIC4vc3R5bHVzLXN1cHJlbWFjeS5qc29uIC0tcmVwbGFjZVwiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGwgJiYgcG5wbSBydW4gYnVpbGRcIixcbiAgICBcInByZXR0aWVyXCI6IFwicHJldHRpZXIgLS1jYWNoZSAtLXdyaXRlIC5cIixcbiAgICBcInByZXR0aWVyOndhdGNoXCI6IFwib25jaGFuZ2UgXFxcIioqLypcXFwiIC0tIHByZXR0aWVyIC0tY2FjaGUgLS13cml0ZSAtLWlnbm9yZS11bmtub3duIC0taWdub3JlLXBhdGggLnByZXR0aWVyaWdub3JlIHt7Y2hhbmdlZH19ID4gL2Rldi9udWxsIDI+JjFcIixcbiAgICBcInRlc3RcIjogXCJwbnBtIHJ1biBsaW50XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwianF1ZXJ5XCI6IFwiMy43LjBcIixcbiAgICBcInV1aWRcIjogXCJeOS4wLjBcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdHlwZXMvY2hyb21lXCI6IFwiXjAuMC4yNDJcIixcbiAgICBcIkB0eXBlcy9mcy1leHRyYVwiOiBcIl4xMS4wLjFcIixcbiAgICBcIkB0eXBlcy9qcXVlcnlcIjogXCJeMy41LjE2XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC40LjVcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjYuMi4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjYuMi4wXCIsXG4gICAgXCJjb3B5LWFuZC13YXRjaFwiOiBcIl4wLjEuNlwiLFxuICAgIFwiZXNidWlsZFwiOiBcIl4wLjE4LjE3XCIsXG4gICAgXCJlc2J1aWxkLXBsdWdpbi1zdmdyXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJlc2J1aWxkLXN0eWxlLXBsdWdpblwiOiBcIl4xLjYuMlwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNDUuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl41LjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl43LjMzLjBcIixcbiAgICBcImZzLWV4dHJhXCI6IFwiXjExLjEuMVwiLFxuICAgIFwiaHVza3lcIjogXCJeOC4wLjNcIixcbiAgICBcIm1kNS1maWxlXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJvbmNoYW5nZVwiOiBcIl43LjEuMFwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4wLjBcIixcbiAgICBcInNvcnQtcGFja2FnZS1qc29uXCI6IFwiXjIuNS4xXCIsXG4gICAgXCJzdHlsdXNcIjogXCJeMC41OS4wXCIsXG4gICAgXCJzdHlsdXMtc3VwcmVtYWN5XCI6IFwiXjIuMTcuNVwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjEuNlwiLFxuICAgIFwidml0ZS1ub2RlXCI6IFwiXjAuMzMuMFwiXG4gIH0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiXjIwLjMuMFwiLFxuICAgIFwicG5wbVwiOiBcIl44LjYuM1wiXG4gIH0sXG4gIFwiZXh0ZW5zaW9uLWkxOG5cIjoge1xuICAgIFwiZW5cIjoge1xuICAgICAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIixcbiAgICAgIFwiZXh0ZW5zaW9uRGVzY3JpcHRpb25cIjogXCJOZXcgQmluZyBDaGF0IGNhbiBiZSB1c2VkIGluIGFueSBicm93c2VyLCB3aXRoIGFueSBzZWFyY2ggZW5naW5lLCBhbmQgaW4gYW55IGNvdW50cnkuXCJcbiAgICB9LFxuICAgIFwiemhfQ05cIjoge1xuICAgICAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIixcbiAgICAgIFwiZXh0ZW5zaW9uRGVzY3JpcHRpb25cIjogXCJOZXcgQmluZyBDaGF0IGNhbiBiZSB1c2VkIGluIGFueSBicm93c2VyLCB3aXRoIGFueSBzZWFyY2ggZW5naW5lLCBhbmQgaW4gYW55IGNvdW50cnkuIFx1OTY4Rlx1NjVGNlx1OTY4Rlx1NTczMFx1RkYwQ1x1NjcwOVx1NkM0Mlx1NUZDNVx1NUU5NFx1MzAwMlwiXG4gICAgfSxcbiAgICBcInpoX1RXXCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiTmV3IEJpbmcgQ2hhdCBjYW4gYmUgdXNlZCBpbiBhbnkgYnJvd3Nlciwgd2l0aCBhbnkgc2VhcmNoIGVuZ2luZSwgYW5kIGluIGFueSBjb3VudHJ5LiBcdTk2QThcdTY2NDJcdTk2QThcdTU3MzBcdUZGMENcdTY3MDlcdTZDNDJcdTVGQzVcdTYxQzlcIlxuICAgIH0sXG4gICAgXCJydVwiOiB7XG4gICAgICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiLFxuICAgICAgXCJleHRlbnNpb25EZXNjcmlwdGlvblwiOiBcIlx1MDQyN1x1MDQzMFx1MDQ0MiBOZXcgQmluZyBcdTA0M0NcdTA0M0VcdTA0MzZcdTA0MzVcdTA0NDIgXHUwNDM4XHUwNDQxXHUwNDNGXHUwNDNFXHUwNDNCXHUwNDRDXHUwNDM3XHUwNDNFXHUwNDMyXHUwNDMwXHUwNDQyXHUwNDRDXHUwNDQxXHUwNDRGIFx1MDQzMiBcdTA0M0JcdTA0NEVcdTA0MzFcdTA0M0VcdTA0M0MgXHUwNDMxXHUwNDQwXHUwNDMwXHUwNDQzXHUwNDM3XHUwNDM1XHUwNDQwXHUwNDM1LCBcdTA0NDEgXHUwNDNCXHUwNDRFXHUwNDMxXHUwNDRCXHUwNDNDIFx1MDQzRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQVx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzQyBcdTA0MzRcdTA0MzJcdTA0MzhcdTA0MzZcdTA0M0FcdTA0M0VcdTA0M0MgXHUwNDM4IFx1MDQzMiBcdTA0M0JcdTA0NEVcdTA0MzFcdTA0M0VcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDMwXHUwNDNEXHUwNDM1LlwiXG4gICAgfVxuICB9LFxuICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiXG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgRlVMTF9WRVJTSU9OLCBHT09HTEVfRE9NQUlOUywgTUFJTl9WRVJTSU9OLCBZQU5ERVhfRE9NQUlOUyB9IGZyb20gJ0BAL2NvbnN0YW50cydcbmltcG9ydCB7IHR5cGUgQmluZyB9IGZyb20gJ0BAL3R5cGVzJ1xuaW1wb3J0IHsgdmVyc2lvbiBhcyBwa2dWZXJzaW9uLCByZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgY29uc3QgY2hlY2tJc0dvb2dsZSA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBHT09HTEVfRE9NQUlOUy5pbmNsdWRlcyhob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgJycpKVxufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNCYWlkdSA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBob3N0bmFtZSA9PT0gJ3d3dy5iYWlkdS5jb20nXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc1lhbmRleCA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBZQU5ERVhfRE9NQUlOUy5pbmNsdWRlcyhob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgJycpKVxufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNTbyA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBob3N0bmFtZSA9PT0gJ3d3dy5zby5jb20nXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc0JpbmcgPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaG9zdG5hbWUgPT09ICd3d3cuYmluZy5jb20nXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc0R1Y2tkdWNrZ28gPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaG9zdG5hbWUgPT09ICdkdWNrZHVja2dvLmNvbSdcbn1cbmV4cG9ydCBjb25zdCBjaGVja0lzRWNvc2lhID0gKGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGhvc3RuYW1lID09PSAnd3d3LmVjb3NpYS5vcmcnXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc0JyYXZlID0gKGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGhvc3RuYW1lID09PSAnc2VhcmNoLmJyYXZlLmNvbSdcbn1cbmV4cG9ydCBjb25zdCBjaGVja0lzTmF2ZXIgPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaG9zdG5hbWUgPT09ICdzZWFyY2gubmF2ZXIuY29tJ1xufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNZYWhvbyA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBob3N0bmFtZS5lbmRzV2l0aCgnc2VhcmNoLnlhaG9vLmNvbScpIHx8IGhvc3RuYW1lID09PSAnc2VhcmNoLnlhaG9vLmNvLmpwJ1xufVxuXG5leHBvcnQgY29uc3QgbHMgPSB7XG4gIHNldDogYXN5bmMgPFQgPSBhbnk+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IEtFWSA9IGBOQkFAJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX1gXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChcbiAgICAgICAge1xuICAgICAgICAgIFtLRVldOiB2YWx1ZVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9KVxuICB9LFxuICBnZXQ6IGFzeW5jIDxUID0gYW55PihrZXk6IHN0cmluZyk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4gPT4ge1xuICAgIGNvbnN0IEtFWSA9IGBOQkFAJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX1gXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW0tFWV0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHRbS0VZXSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgcmVtb3ZlOiBhc3luYyAoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBLRVkgPSBgTkJBQCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9YFxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW0tFWV0pXG4gICAgICByZXNvbHZlKHVuZGVmaW5lZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxUYWJzID0gYXN5bmMgKHF1ZXJ5SW5mbzogY2hyb21lLnRhYnMuUXVlcnlJbmZvID0geyBzdGF0dXM6ICdjb21wbGV0ZScgfSk6IFByb21pc2U8SVRhYltdPiA9PiB7XG4gIGNvbnN0IG5ld1RhYnM6IElUYWJbXSA9IChhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeUluZm8pKSBhcyBJVGFiW11cbiAgY29uc3Qgb2xkVGFiczogSVRhYltdID0gdW5pcXVlKChhd2FpdCBscy5nZXQ8SVRhYltdPignY3VycmVudFRhYnMnKSkhKVxuICBmb3IgKGNvbnN0IG5ld1RhYiBvZiBuZXdUYWJzKSB7XG4gICAgZm9yIChjb25zdCBvbGRUYWIgb2Ygb2xkVGFicykge1xuICAgICAgaWYgKG9sZFRhYi51cmwgIT0gbnVsbCAmJiBvbGRUYWIudXJsID09PSBuZXdUYWIudXJsKSB7XG4gICAgICAgIG5ld1RhYi4kZXh0cmEgPSBvbGRUYWIuJGV4dHJhXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCB0YWJzID0gbmV3VGFicy5jb25jYXQob2xkVGFicylcbiAgdGFicyA9IHRhYnMuZmlsdGVyKCh0YWIpID0+IHtcbiAgICBjb25zdCB1cmwgPSB0YWIudXJsID8/ICcnXG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCdodHRwJykgfHwgdXJsLnN0YXJ0c1dpdGgoJ2Nocm9tZS1leHRlbnNpb246Ly8nKVxuICB9KVxuICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIGlmICh0YWIudXJsID09IG51bGwpIHJldHVyblxuICAgIHRhYi51cmwgPSB0YWIudXJsLnJlcGxhY2UoLyMuKiQvLCAnJylcbiAgfSlcbiAgdGFicyA9IHVuaXF1ZSh0YWJzLCAndXJsJykuc2xpY2UoMCwgNTAwMClcbiAgcmV0dXJuIHRhYnNcbn1cblxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IDxUPihhcnI6IFRbXSwga2V5OiBzdHJpbmcgPSAndXJsJyk6IFRbXSA9PiB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKVxuICByZXR1cm4gYXJyLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgaWYgKG1hcC5oYXMoaXRlbVtrZXldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcC5zZXQoaXRlbVtrZXldLCB0cnVlKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCB0eXBlIElUYWIgPSBjaHJvbWUudGFicy5UYWIgJiB7XG4gICRleHRyYT86IHtcbiAgICBsYXN0TW9kaWZpZWQ6IG51bWJlclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmaW5kU2FtZVVybFRhYiA9IGFzeW5jICh1cmw/OiBzdHJpbmcsIHF1ZXJ5SW5mbzogY2hyb21lLnRhYnMuUXVlcnlJbmZvID0ge30pOiBQcm9taXNlPGNocm9tZS50YWJzLlRhYiB8IG51bGw+ID0+IHtcbiAgaWYgKCF1cmwpIHJldHVybiBudWxsXG4gIGNvbnN0IG9wZW5lZFRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeUluZm8pXG4gIHJldHVybiAoXG4gICAgb3BlbmVkVGFicy5maW5kKChvcGVuZWRUYWIpID0+IHtcbiAgICAgIGlmICghb3BlbmVkVGFiLnVybCkgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gbm9ybWFsaXplVXJsKG9wZW5lZFRhYi51cmwpID09PSB1cmxcbiAgICB9KSA/PyBudWxsXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVVybCA9ICh1cmw6IHN0cmluZyA9ICcnKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC8jLiokLywgJycpXG59XG5cbmV4cG9ydCBjb25zdCBzbGVlcCA9IGFzeW5jIChkZWxheTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSlcbiAgfSlcbn1cblxuLyoqXG4gKiBjaGVjayBpZiBpcyBDaGluZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVja0lzU2ltcGxlQ2hpbmVzZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsYW5nID0gY2hyb21lLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gbGFuZyA9PT0gJ3poLWNuJ1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hlY2tJc0NoaW5lc2UgPSAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbGFuZyA9IGNocm9tZS5pMThuLmdldFVJTGFuZ3VhZ2UoKS50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIGxhbmcgPT09ICd6aC1jbicgfHwgbGFuZyA9PT0gJ3poLXR3JyB8fCBsYW5nID09PSAnemgtaGsnIHx8IGxhbmcgPT09ICd6aCdcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBjaGVjayBpZiBpbiBNYWlubGFuZCBDaGluYVxuICovXG5leHBvcnQgY29uc3QgaXNDTiA9ICgpID0+IHtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IENPTkZJR19LRVkgPSAnY29uZmlnVjEnXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XG4gIHNob3dHb29nbGVCdXR0b25PbkJpbmc6IGJvb2xlYW5cbiAgc2hvd0JpbmdCdXR0b25Pbkdvb2dsZTogYm9vbGVhblxuICBzaG93R3VpZGVUb0dpdGh1YjogYm9vbGVhblxuICBzaG93Q2hhdDogYm9vbGVhblxuICBzaG93UmVsZWFzZTogYm9vbGVhblxuICB0cmlnZ2VyTW9kZTogJ0Fsd2F5cycgfCAnUXVlc3Rpb25tYXJrJyB8ICdNYW51YWxseSdcbiAgY29udmVyc2F0aW9uU3R5bGU6IEJpbmcuQ29udmVyc2F0aW9uU3R5bGVcbiAgJ1gtRm9yd2FyZGVkLUZvcic/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBnZXRDb25maWcgPSBhc3luYyAoKTogUHJvbWlzZTxDb25maWc+ID0+IHtcbiAgY29uc3QgY29uZmlnID0gKGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KENPTkZJR19LRVkpKVtDT05GSUdfS0VZXVxuICByZXR1cm4ge1xuICAgIHNob3dHb29nbGVCdXR0b25PbkJpbmc6IHRydWUsXG4gICAgc2hvd0JpbmdCdXR0b25Pbkdvb2dsZTogdHJ1ZSxcbiAgICBzaG93R3VpZGVUb0dpdGh1YjogdHJ1ZSxcbiAgICBzaG93Q2hhdDogZmFsc2UsXG4gICAgc2hvd1JlbGVhc2U6IHRydWUsXG4gICAgdHJpZ2dlck1vZGU6ICdBbHdheXMnLFxuICAgIGNvbnZlcnNhdGlvblN0eWxlOiAnQmFsYW5jZWQnLFxuICAgICdYLUZvcndhcmRlZC1Gb3InOiB1bmRlZmluZWQsXG4gICAgLi4uY29uZmlnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldENvbmZpZyA9IGFzeW5jICh2YWx1ZXM6IFBhcnRpYWw8Q29uZmlnPikgPT4ge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKVxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgW0NPTkZJR19LRVldOiB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICAuLi52YWx1ZXNcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBlc2NhcGVIdG1sID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBTdHJpbmcocylcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1xcLy9nLCAnJiN4MmY7Jylcbn1cblxudHlwZSBJTWV0aG9kcyA9IFJlY29yZDxzdHJpbmcsICguLi5hcmdzOiBhbnlbXSkgPT4gUHJvbWlzZTxhbnk+PlxuZXhwb3J0IGNvbnN0IHJlZ2lzdHJ5TGlzdGVuZXIgPSAoY2FsbE1ldGhvZHM6IElNZXRob2RzKSA9PiB7XG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxLCBfc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gaWYgbm90IHJldHVybiB0cnVlIGltbWVkaWF0ZWx5XHVGRjBDd2lsbCB0aHJvdyBlcnJvciBgVW5jaGVja2VkIHJ1bnRpbWUubGFzdEVycm9yOiBUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuYFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBtZXRob2QsIGFyZ3MgfSA9IHJlcVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbE1ldGhvZHNbbWV0aG9kXSguLi5hcmdzKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBjb2RlOiAyMDAsIG1zZzogJ29rJywgZGF0YSB9KVxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGUgPz8ge31cbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgY29kZTogNTAwLCBtc2c6IGVyci5zdGFjayA/PyBlcnIubWVzc2FnZSA/PyBlIH0pXG4gICAgICB9XG4gICAgfSkoKVxuICAgIHJldHVybiB0cnVlXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjYWxsQmFja2dyb3VuZCA9IGFzeW5jIDxUID0gYW55PihtZXRob2Q6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IFByb21pc2U8VD4gPT4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgICAge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGFyZ3M6IFsuLi5hcmdzXVxuICAgICAgfSxcbiAgICAgIChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMgfHwgcmVzLmNvZGUgIT09IDIwMCkge1xuICAgICAgICAgIHJlamVjdChyZXM/Lm1zZylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbG9jYWxDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4ge1xuICBjb25zdCB2ID0gJ3YxJ1xuICByZXR1cm4ge1xuICAgIGdldDogYXN5bmMgPFQgPSBhbnk+KGtleTogc3RyaW5nKTogUHJvbWlzZTxudWxsIHwgVD4gPT4ge1xuICAgICAga2V5ID0gYCR7dn06JHtrZXl9YFxuICAgICAgY29uc3QgeyBkYXRhLCBtYXhBZ2UsIGxhc3RNb2RpZmllZCB9ID0gKGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChrZXkpKT8uW2tleV0gPz8ge31cbiAgICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdE1vZGlmaWVkID4gbWF4QWdlICogMTAwMCkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoa2V5KVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9LFxuXG4gICAgc2V0OiBhc3luYyA8VCA9IG9iamVjdD4oa2V5OiBzdHJpbmcsIGRhdGE6IFQsIG1heEFnZTogbnVtYmVyID0gSW5maW5pdHkgLyogXHU1MzU1XHU0RjREXHU3OUQyICovKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICBrZXkgPSBgJHt2fToke2tleX1gXG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICBba2V5XToge1xuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpLFxuICAgICAgICAgIG1heEFnZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSkoKVxuXG5leHBvcnQgY29uc3QgdG9EYXRhVXJsID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihhc3luYyAocikgPT4gYXdhaXQgci5ibG9iKCkpXG4gICAgICAudGhlbigoYmxvYikgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIHN0cmluZylcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdFxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKVxuICAgICAgfSlcbiAgfSlcbn1cblxuY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxuY29uc3QgdXNlckFnZW50RGF0YSA9IChuYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnREYXRhXG5cbmV4cG9ydCBjb25zdCBpc01hYyA9IC8qIEBfX1BVUkVfXyAqLyB1c2VyQWdlbnQuaW5jbHVkZXMoJ01hY2ludG9zaCcpXG5leHBvcnQgY29uc3QgaXNGaXJlZm94ID0gLyogQF9fUFVSRV9fICovIHVzZXJBZ2VudC5pbmNsdWRlcygnRmlyZWZveCcpXG5leHBvcnQgY29uc3QgaXNFZGdlID0gLyogQF9fUFVSRV9fICovIHVzZXJBZ2VudC5pbmNsdWRlcygnRWRnLycpXG5leHBvcnQgY29uc3QgaXNCcmF2ZSA9IC8qIEBfX1BVUkVfXyAqLyB1c2VyQWdlbnREYXRhPy5icmFuZHMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJyYW5kID09PSAnQnJhdmUnKSA+IC0xXG5leHBvcnQgY29uc3QgaXNDaGluZXNlID0gLyogQF9fUFVSRV9fICovIGNoZWNrSXNDaGluZXNlKClcbmV4cG9ydCBjb25zdCBpc1NpbXBsZUNoaW5lc2UgPSAvKiBAX19QVVJFX18gKi8gY2hlY2tJc1NpbXBsZUNoaW5lc2UoKVxuZXhwb3J0IGNvbnN0IGlzQ2FuYXJ5OiBib29sZWFuID0gLyogQF9fUFVSRV9fICovICEhZ2xvYmFsVGhpcy5fX05CQV9pc0NhbmFyeVxuZXhwb3J0IGNvbnN0IHZlcnNpb246IHN0cmluZyA9IC8qIEBfX1BVUkVfXyAqLyBpc0NhbmFyeSA/IGAwLiR7cGtnVmVyc2lvbn1gIDogcGtnVmVyc2lvblxuXG5leHBvcnQgY29uc3QgZ2VuVUEgPSAoKSA9PiB7XG4gIGxldCB1YSA9IHVzZXJBZ2VudFxuICBpZiAoIWlzRWRnZSkge1xuICAgIGlmIChpc01hYykge1xuICAgICAgdWEgPSBgTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLyR7TUFJTl9WRVJTSU9OfS4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8ke0ZVTExfVkVSU0lPTn1gXG4gICAgfSBlbHNlIHtcbiAgICAgIHVhID0gYE1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8ke01BSU5fVkVSU0lPTn0uMC4wLjAgU2FmYXJpLzUzNy4zNiBFZGcvJHtGVUxMX1ZFUlNJT059YFxuICAgIH1cbiAgfVxuICByZXR1cm4gdWFcbn1cblxuZXhwb3J0IGNvbnN0IGdlbklzc3VlVXJsID0gYXN5bmMgKGV4dHJhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4pID0+IHtcbiAgY29uc3QgcmVwb3NpdG9yeVVybDogc3RyaW5nID0gcmVwb3NpdG9yeS51cmxcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKVxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gYCR7cmVwb3NpdG9yeVVybH0vaXNzdWVzL25ldz90aXRsZT0mYm9keT1gXG4gICAgbGV0IGZpbmFsVXJsOiBzdHJpbmcgPSB1cmxcbiAgICBsZXQgY29tbWVudCA9XG4gICAgICAnUGxlYXNlIHdyaXRlIHlvdXIgY29tbWVudCBBQk9WRSB0aGlzIGxpbmUsIHByb3ZpZGUgYXMgbXVjaCBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhbmQgc2NyZWVuc2hvdHMgYXMgcG9zc2libGUuJyArXG4gICAgICAnUGxlYXNlIGNvbmZpcm0gdGhhdCB5b3UgaGF2ZSByZWFkIHRoZSAjOCBodHRwczovL2dpdGh1Yi5jb20vaGFvemkvTmV3LUJpbmctQW55d2hlcmUvaXNzdWVzLzguJyArXG4gICAgICAnVGhlIFVBIG1heSBub3QgbmVjZXNzYXJpbHkgcmVmbGVjdCB5b3VyIGFjdHVhbCBicm93c2VyIGFuZCBwbGF0Zm9ybSwgc28gcGxlYXNlIG1ha2Ugc3VyZSB0byBpbmRpY2F0ZSB0aGVtIGNsZWFybHkuJ1xuICAgIGlmIChpc0NoaW5lc2UpIHtcbiAgICAgIGNvbW1lbnQgPVxuICAgICAgICAnXHU4QkY3XHU1NzI4XHU2QjY0XHU4ODRDXHU0RTBBXHU2NUI5XHU1M0QxXHU4ODY4XHU2MEE4XHU3Njg0XHU4QkE4XHU4QkJBXHUzMDAyXHU4QkY3XHU3ODZFXHU4QkE0XHU1REYyXHU3RUNGXHU5NjA1XHU4QkZCXHU0RTg2RkFRKGh0dHBzOi8vZ2l0aHViLmNvbS9oYW96aS9OZXctQmluZy1Bbnl3aGVyZS9pc3N1ZXMvOClcdUZGMENcdThCRTZcdTVDM0RcdTc2ODRcdTYzQ0ZcdThGRjBcdTU0OENcdTYyMkFcdTU2RkVcdTY3MDlcdTUyQTlcdTRFOEVcdTYyMTFcdTRFRUNcdTVCOUFcdTRGNERcdTk1RUVcdTk4OThcdUZGMENcdTYzQ0ZcdThGRjBcdTRFMERcdTZFMDVcdTc2ODRcdTk1RUVcdTk4OThcdTRGMUFcdTg4QUJcdTUxNzNcdTk1RURcdUZGMENVQSBcdTRFMERcdTRFMDBcdTVCOUFcdTc3MUZcdTVCOUVcdTUzQ0RcdTY2MjBcdTYwQThcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTU0OENcdTVFNzNcdTUzRjBcdUZGMENcdThCRjdcdTU5MDdcdTZDRThcdTZFMDVcdTY5NUEnXG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9XG4gICAgICAnIFxcblxcblxcblxcbicgK1xuICAgICAgYDwhLS0gICR7Y29tbWVudH0gLS0+XFxuYCArXG4gICAgICAnPHByZT5cXG4nICtcbiAgICAgIE9iamVjdC5lbnRyaWVzPHN0cmluZz4oe1xuICAgICAgICBWZXJzaW9uOiBgJHt2ZXJzaW9ufSR7aXNDYW5hcnkgPyAnIChDYW5hcnkpJyA6ICcnfSBgLFxuICAgICAgICBVQTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgTGFuZzogY2hyb21lLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLFxuICAgICAgICBBY2NlcHRMYW5nczogKGF3YWl0IGNocm9tZS5pMThuLmdldEFjY2VwdExhbmd1YWdlcygpKS5qb2luKCcsICcpLFxuICAgICAgICBjb25maWc6IEpTT04uc3RyaW5naWZ5KGNvbmZpZyksXG4gICAgICAgIC4uLmV4dHJhXG4gICAgICB9KVxuICAgICAgICAubWFwKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZhbCA/IGAke2tleX06ICR7dmFsfWAgOiAnJ1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignXFxuJykgK1xuICAgICAgJzwvcHJlPidcbiAgICBmaW5hbFVybCArPSBlbmNvZGVVUklDb21wb25lbnQoYm9keS5zbGljZSgwLCAyMDAwKSlcbiAgICByZXR1cm4gZmluYWxVcmxcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHJlcG9zaXRvcnlVcmxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VVJMID0gKHVybDogc3RyaW5nID0gJycsIGJhc2U/OiBzdHJpbmcpOiBVUkwgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCwgYmFzZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZSlcbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoUGFyYW1zOiB7XG4gICAgICAgIGdldDogKCkgPT4gbnVsbFxuICAgICAgfVxuICAgIH0gYXMgYW55XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFVSTFNlYXJjaFBhcmFtcyA9ICh1cmw6IHN0cmluZyk6IFVSTFNlYXJjaFBhcmFtcyA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiAoKSA9PiBudWxsXG4gICAgfSBhcyBhbnlcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3BlblBhZ2UgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPGNocm9tZS50YWJzLlRhYj4gPT4ge1xuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlIH0pXG5cbiAgY29uc3QgdXJsT2JqID0gZ2V0VVJMKHVybClcbiAgbGV0IHRhYiA9IHRhYnMuZmluZCgodGFiKSA9PiB0YWIudXJsPy5zdGFydHNXaXRoKHVybE9iai5vcmlnaW4pKVxuXG4gIGlmICh0YWIgPT0gbnVsbCkge1xuICAgIHRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybCB9KVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgW1xuICAgICAgICBjaHJvbWUudGFicy5tb3ZlKHRhYi5pZCEsIHsgaW5kZXg6IHRhYnMubGVuZ3RoIC0gMSB9KSxcbiAgICAgICAgdGFiLnVybCAhPT0gdXJsICYmIGNocm9tZS50YWJzLnVwZGF0ZSh0YWIuaWQhLCB7IHVybCB9KSxcbiAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCEsIHsgYWN0aXZlOiB0cnVlLCB1cmw6IHRhYi51cmwgIT09IHVybCA/IHVybCA6IHVuZGVmaW5lZCB9KVxuICAgICAgXS5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cbiAgcmV0dXJuIHRhYlxufVxuIiwgImltcG9ydCB7IGdlbklzc3VlVXJsLCBvcGVuUGFnZSB9IGZyb20gJy4vX21pc2MnXG5cbi8vIGNvbnN0IHJlcG9zaXRvcnlVcmw6IHN0cmluZyA9IHJlcG9zaXRvcnkudXJsXG5cbnR5cGUgQ29udGV4dHMgPSBjaHJvbWUuY29udGV4dE1lbnVzLkNvbnRleHRUeXBlW11cbmludGVyZmFjZSBJSW5pdENvbnRleHRNZW51IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZXh0czogQ29udGV4dHNcbiAgb25jbGljazogKGluZm8/OiBjaHJvbWUuY29udGV4dE1lbnVzLk9uQ2xpY2tEYXRhLCB0YWI/OiBjaHJvbWUudGFicy5UYWIgfCB1bmRlZmluZWQpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRleHRNZW51czogUmVjb3JkPHN0cmluZywgSUluaXRDb250ZXh0TWVudT4gPSB7XG4gIC8vIHZlcnNpb246IHtcbiAgLy8gICB0aXRsZTogYFx1RDgzRVx1RERDMyBWZXJzaW9uOiAke3ZlcnNpb259YCxcbiAgLy8gICBjb250ZXh0czogWydhY3Rpb24nXSxcbiAgLy8gICBvbmNsaWNrOiAoKSA9PiB7XG4gIC8vICAgICBvcGVuUGFnZShgJHtyZXBvc2l0b3J5VXJsfS9yZWxlYXNlcy90YWcvJHt2ZXJzaW9ufWApXG4gIC8vICAgfVxuICAvLyB9LFxuICBvcGVuQ2hhdDoge1xuICAgIHRpdGxlOiAnXHVEODNEXHVEQ0FDIE5ldyBCaW5nJyxcbiAgICBjb250ZXh0czogWydhY3Rpb24nXSxcbiAgICBvbmNsaWNrOiAoX2luZm8pID0+IHtcbiAgICAgIG9wZW5QYWdlKCdodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT1CaW5nK0FJJnNob3djb252PTEnKVxuICAgIH1cbiAgfSxcblxuICBvcGVuSW1hZ2VDcmVhdGU6IHtcbiAgICB0aXRsZTogJ1x1RDgzRFx1RERCQ1x1RkUwRiBOZXcgQmluZyBJbWFnZSBDcmVhdG9yJyxcbiAgICBjb250ZXh0czogWydhY3Rpb24nXSxcbiAgICBvbmNsaWNrOiAoX2luZm8pID0+IHtcbiAgICAgIG9wZW5QYWdlKCdodHRwczovL3d3dy5iaW5nLmNvbS9jcmVhdGUnKVxuICAgIH1cbiAgfSxcblxuICBsaWtlSXQ6IHtcbiAgICB0aXRsZTogJ1x1Mjc2NFx1RkUwRiBMaWtlIGl0JyxcbiAgICBjb250ZXh0czogWydhY3Rpb24nXSxcbiAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICBvcGVuUGFnZSgnaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbmV3LWJpbmctYW55d2hlcmUtYmluZy1jaC9oY2VvYmhqb2twZGJvZ2prcGxtZmplb21rZWNra25naS9yZXZpZXdzP2hsPWVuJylcbiAgICB9XG4gIH0sXG5cbiAgcmVwb3J0SXNzdWVzOiB7XG4gICAgdGl0bGU6ICdcdUQ4M0RcdURDMUIgUmVwb3J0IGlzc3VlcycsXG4gICAgY29udGV4dHM6IFsnYWN0aW9uJ10sXG4gICAgb25jbGljazogYXN5bmMgKF9pbmZvKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBhd2FpdCBnZW5Jc3N1ZVVybCgpXG5cbiAgICAgIG9wZW5QYWdlKHVybClcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjb250ZXh0TWVudXMgfSBmcm9tICdAQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjaHJvbWUuY29udGV4dE1lbnVzLnJlbW92ZUFsbCgoKSA9PiB7XG4gICAgZm9yIChjb25zdCBbaWQsIG1lbnVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbnRleHRNZW51cykpIHtcbiAgICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlOiBtZW51LnRpdGxlLFxuICAgICAgICBjb250ZXh0czogbWVudS5jb250ZXh0c1xuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKGluZm8sIHRhYikgPT4ge1xuICAgIGNvbnN0IHsgbWVudUl0ZW1JZCB9ID0gaW5mb1xuICAgIGNvbnN0IGl0ZW0gPSBjb250ZXh0TWVudXNbbWVudUl0ZW1JZF1cbiAgICBpZiAoaXRlbT8ub25jbGljaykgaXRlbS5vbmNsaWNrKGluZm8sIHRhYilcbiAgfSlcbn1cbiIsICIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsICJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwgImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwgImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsICJpbXBvcnQgeyB0eXBlIEJpbmcgfSBmcm9tICdAQC90eXBlcydcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbmV4cG9ydCBjb25zdCBnZXRGcm9tQ29udmVyc2F0aW9uID0gYXN5bmMgKG9wdGlvbnM6IEJpbmcuQ29udmVyc2F0aW9uT3B0aW9ucyk6IFByb21pc2U8QmluZy5Db3JlRGF0YSB8IG51bGw+ID0+IHtcbiAgY29uc3QgQVBJID1cbiAgICAnaHR0cHM6Ly9zeWRuZXkuYmluZy5jb20vc3lkbmV5L0dldENvbnZlcnNhdGlvbj8nICtcbiAgICBgY29udmVyc2F0aW9uSWQ9JHtlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5zZXNzaW9uLmNvbnZlcnNhdGlvbklkKX0mYCArXG4gICAgYHNvdXJjZT0ke2VuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLnNvdXJjZSl9JmAgK1xuICAgIGBwYXJ0aWNpcGFudElkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMucGFydGljaXBhbnRJZCl9JmAgK1xuICAgIGBjb252ZXJzYXRpb25TaWduYXR1cmU9JHtlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5zZXNzaW9uLmNvbnZlcnNhdGlvblNpZ25hdHVyZSl9JmAgK1xuICAgIGB0cmFjZUlkPSR7dXVpZHY0KCl9YFxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChBUEkpLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIHJldHVybiBudWxsXG4gICAgLy8gY29uc3QgeyBtZXNzYWdlIH0gPSBlcnIgYXMgeyBtZXNzYWdlOiBzdHJpbmcgfVxuICAgIC8vIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGdldCBjb252ZXJzYXRpb24gZnJvbSAke0FQSX06ICR7bWVzc2FnZX19YClcbiAgfVxufVxuXG5jb25zdCB3ZWJTb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBXZWJTb2NrZXQgfCBudWxsPiA9IHt9XG5cbmV4cG9ydCBjb25zdCBiaW5nQ2hhdEdldFNvY2tldElkID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IHNvY2tldFVybCA9ICd3c3M6Ly9zeWRuZXkuYmluZy5jb20vc3lkbmV5L0NoYXRIdWInXG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldChzb2NrZXRVcmwpXG4gICAgICBjb25zdCBzb2NrZXRJZCA9IHV1aWR2NCgpXG4gICAgICB3cy5vbm9wZW4gPSAoX2UpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYENvbm5lY3RlZCB0byAke3NvY2tldFVybH1gKVxuICAgICAgICBjb25zdCBoZWxsbyA9IEpTT04uc3RyaW5naWZ5KHsgcHJvdG9jb2w6ICdqc29uJywgdmVyc2lvbjogMSB9KSArICdcXHgxZSdcbiAgICAgICAgd3Muc2VuZChoZWxsbylcbiAgICAgIH1cblxuICAgICAgd3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1dlYlNvY2tldCB3YXMgY2xvc2VkJylcbiAgICAgICAgd2ViU29ja2V0c1tzb2NrZXRJZF0gPSBudWxsXG4gICAgICB9XG4gICAgICB3cy5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFdlYlNvY2tldCBcXGAke3NvY2tldFVybH1cXGAgZGlkIG5vdCBjb25uZWN0IHN1Y2Nlc3NmdWxseS5gKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICByZWplY3QoZSlcbiAgICAgIH1cblxuICAgICAgd3Mub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgbXNnID0gZS5kYXRhXG4gICAgICAgIGlmIChtc2cgPT09ICd7fVxceDFlJykge1xuICAgICAgICAgIHdlYlNvY2tldHNbc29ja2V0SWRdID0gd3NcbiAgICAgICAgICByZXNvbHZlKHNvY2tldElkKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHdzLmNsb3NlKClcbiAgICAgICAgd2ViU29ja2V0c1tzb2NrZXRJZF0gPSBudWxsXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1dlYlNvY2tldCBkaWQgbm90IGNvbm5lY3Qgc3VjY2Vzc2Z1bGx5JykpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KGUpXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYmluZ0NoYXRQaW5nID0gYXN5bmMgKHNvY2tldElkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgd3MgPSB3ZWJTb2NrZXRzW3NvY2tldElkXVxuICAgIGlmICh3cyA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYFdlYlNvY2tldCAke3NvY2tldElkfSBub3QgZm91bmRgKVxuXG4gICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6IDYgfSkgKyAnXFx4MWUnKVxuICAgIHJlc29sdmUobnVsbClcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGJpbmdDaGF0U2VuZCA9IGFzeW5jIChcbiAgc29ja2V0SWQ6IHN0cmluZyxcbiAgbXNnOiBvYmplY3QsXG4gIG9NbWVzc2FnZTogKGRhdGE6IEJpbmcuVHlwZTFEYXRhIHwgQmluZy5UeXBlMkRhdGEpID0+IHZvaWRcbik6IFByb21pc2U8QmluZy5UeXBlMkRhdGE+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgd3MgPSB3ZWJTb2NrZXRzW3NvY2tldElkXVxuICAgIGlmICh3cyA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYFdlYlNvY2tldCAke3NvY2tldElkfSBub3QgZm91bmRgKVxuXG4gICAgd3Mub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IG1zZyA9IGUuZGF0YVxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG1zZy5zcGxpdCgnXFx4MWUnKS5maWx0ZXIoQm9vbGVhbikpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoaXRlbS5yZXBsYWNlQWxsKCdcXG4nLCAnXFxcXG4nKSlcbiAgICAgICAgb01tZXNzYWdlKGRhdGEpXG5cbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gMikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShtc2cpICsgJ1xceDFlJylcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGJpbmdDaGF0Q2xvc2VXZWJTb2NrZXQgPSBhc3luYyAoc29ja2V0SWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCB3cyA9IHdlYlNvY2tldHNbc29ja2V0SWRdXG4gIHdzPy5jbG9zZSgpXG4gIHdlYlNvY2tldHNbc29ja2V0SWRdID0gbnVsbFxufVxuIiwgImNvbnN0IE1BWF9BR0UgPSAxMDAwICogNjAgKiA2MCAqIDEgLy8gMSBob3VyXG5jb25zdCBLRVkgPSAnbm90aWZpY2F0aW9uJ1xuY29uc3QgRkxBR19LRVkgPSAnbm90aWZpY2F0aW9uOmhpZGUnXG5jb25zdCBnZXRSZW1vdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCdnZXRSZW1vdGVOb3RpZmljYXRpb24nKVxuICBsZXQgZGF0YVxuICB0cnkge1xuICAgIGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9oYW96aS9OZXctQmluZy1Bbnl3aGVyZS9pc3N1ZXMvMjQnKS50aGVuKGFzeW5jIChyZXMpID0+IGF3YWl0IHJlcy5qc29uKCkpXG4gIH0gY2F0Y2gge31cbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5vdGlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBbS0VZXTogb2xkRGF0YSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KEtFWSlcblxuICBpZiAoIW9sZERhdGEgfHwgKG9sZERhdGEubGFzdE1vZGlmeSAmJiBEYXRlLm5vdygpIC0gb2xkRGF0YS5sYXN0TW9kaWZ5ID4gTUFYX0FHRSkpIHtcbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoS0VZKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRSZW1vdGVOb3RpZmljYXRpb24oKVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFtLRVldOiB7IGRhdGEsIGxhc3RNb2RpZnk6IERhdGUubm93KCkgfSB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgW0ZMQUdfS0VZXTogZmxhZywgW0tFWV06IG5ld0RhdGEgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbRkxBR19LRVksIEtFWV0pXG5cbiAgaWYgKCFuZXdEYXRhPy5kYXRhKSByZXR1cm4gbnVsbFxuICBpZiAoIShuZXdEYXRhLmRhdGEudGl0bGUgJiYgbmV3RGF0YS5kYXRhLnN0YXRlID09PSAnb3BlbicpKSByZXR1cm4gbnVsbFxuICBpZiAoZmxhZyA9PT0gMSAmJiBuZXdEYXRhLmRhdGEudGl0bGUgPT09IG9sZERhdGEuZGF0YT8udGl0bGUpIHJldHVybiBudWxsXG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShGTEFHX0tFWSlcbiAgcmV0dXJuIG5ld0RhdGEuZGF0YVxufVxuXG5leHBvcnQgY29uc3QgaGlkZU5vdGlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW0ZMQUdfS0VZXTogMSB9KVxufVxuIiwgImltcG9ydCB7IGdldFVSTCwgdmVyc2lvbiB9IGZyb20gJ0BAL3V0aWxzJ1xuaW1wb3J0IHsgYmluZ0NoYXRDbG9zZVdlYlNvY2tldCwgYmluZ0NoYXRQaW5nLCBnZXRGcm9tQ29udmVyc2F0aW9uIGFzIGJpbmdHZXRGcm9tQ29udmVyc2F0aW9uIH0gZnJvbSAnLi9fYmluZydcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbiwgaGlkZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vX25vdGlmaWNhdGlvbidcblxuY29uc3QgZ2V0RW52ID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb25cbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuY29uc3Qgb3BlblVybEluU2FtZVRhYiA9IGFzeW5jICh7IHVybCB9OiB7IHVybDogc3RyaW5nIH0gPSB7fSBhcyBhbnkpID0+IHtcbiAgY29uc3QgdGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSB9KVxuICBjb25zdCB1cmxPYmogPSBnZXRVUkwodXJsKVxuICBsZXQgdGFiID0gdGFicy5maW5kKCh0YWIpID0+IHRhYi51cmw/LnN0YXJ0c1dpdGgodXJsT2JqLm9yaWdpbikpXG4gIGlmICh0YWIgPT0gbnVsbCkge1xuICAgIHRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybCB9KVxuICB9IGVsc2Uge1xuICAgIGlmICh0YWIuaWQgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW2Nocm9tZS50YWJzLm1vdmUodGFiLmlkLCB7IGluZGV4OiB0YWJzLmxlbmd0aCAtIDEgfSksIGNocm9tZS50YWJzLnVwZGF0ZSh0YWIuaWQsIHsgYWN0aXZlOiB0cnVlIH0pXSlcbiAgICB9XG4gIH1cblxuICBsZXQgbmV3VXJsID0gdXJsXG4gIGxldCBxdWVyeSA9ICcnXG4gIGxldCB0YWJRdWVyeSA9ICcnXG4gIGNvbnN0IGlzR29vZ2xlID0gdXJsT2JqLmhvc3RuYW1lID09PSAnd3d3Lmdvb2dsZS5jb20nXG4gIGNvbnN0IGlzQmluZyA9IHVybE9iai5ob3N0bmFtZSA9PT0gJ3d3dy5iaW5nLmNvbSdcbiAgaWYgKGlzR29vZ2xlKSB7XG4gICAgcXVlcnkgPSB1cmxPYmouc2VhcmNoUGFyYW1zLmdldCgncScpID8/ICcnXG4gICAgdGFiUXVlcnkgPSBnZXRVUkwodGFiLnVybCkuc2VhcmNoUGFyYW1zLmdldCgncScpID8/ICcnXG4gICAgZ2V0VVJMKHRhYi51cmwpLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKVxuICB9IGVsc2UgaWYgKGlzQmluZykge1xuICAgIHF1ZXJ5ID0gdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSA/PyAnJ1xuICAgIHRhYlF1ZXJ5ID0gZ2V0VVJMKHRhYi51cmwpLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSA/PyAnJ1xuICB9XG5cbiAgcXVlcnkgPSBxdWVyeS50cmltKClcbiAgdGFiUXVlcnkgPSB0YWJRdWVyeS50cmltKClcblxuICBpZiAocXVlcnkgJiYgcXVlcnkgPT09IHRhYlF1ZXJ5KSByZXR1cm4gLy8gXHU0RTBEXHU1MjM3XHU2NUIwXHU5ODc1XHU5NzYyXG5cbiAgaWYgKGlzR29vZ2xlKSB7XG4gICAgbmV3VXJsID0gYCR7dXJsT2JqLm9yaWdpbn0ke3VybE9iai5wYXRobmFtZX0/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YFxuICB9IGVsc2UgaWYgKGlzQmluZykge1xuICAgIG5ld1VybCA9IGAke3VybE9iai5vcmlnaW59JHt1cmxPYmoucGF0aG5hbWV9P3E9JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnkpfWBcbiAgICAvLyBuZXdVcmwgPSBgJHt1cmxPYmoub3JpZ2lufSR7dXJsT2JqLnBhdGhuYW1lfT9xPSR7cXVlcnl9JnNob3djb252PTFgXG4gIH1cblxuICBhd2FpdCBjaHJvbWUudGFicy51cGRhdGUodGFiLmlkISwgeyB1cmw6IG5ld1VybCB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEVudixcbiAgb3BlblVybEluU2FtZVRhYixcblxuICBnZXROb3RpZmljYXRpb24sXG4gIGhpZGVOb3RpZmljYXRpb24sXG5cbiAgJ2JpbmcuZ2V0RnJvbUNvbnZlcnNhdGlvbic6IGJpbmdHZXRGcm9tQ29udmVyc2F0aW9uLFxuICAnYmluZy5iaW5nQ2hhdFBpbmcnOiBiaW5nQ2hhdFBpbmcsXG4gICdiaW5nLmJpbmdDaGF0Q2xvc2VXZWJTb2NrZXQnOiBiaW5nQ2hhdENsb3NlV2ViU29ja2V0XG59XG4iLCAiaW1wb3J0IHsgZ2V0QWxsVGFicywgbHMsIHVuaXF1ZSB9IGZyb20gJ0BAL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZHVtcFRhYnMgPSBhc3luYyAoeyB3aW5kb3dJZCB9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IEFQUF9VUkwgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2FwcC9pbmRleC5odG1sJylcblxuICBjb25zdCBbY3VycmVudFRhYnMsIFtjdXJyZW50VGFiXV0gPSBhd2FpdCBQcm9taXNlLmFsbChbZ2V0QWxsVGFicygpLCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KV0pXG5cbiAgYXdhaXQgbHMuc2V0KCdjdXJyZW50VGFicycsIHVuaXF1ZShjdXJyZW50VGFicywgJ3VybCcpKVxuXG4gIGNvbnN0IHRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7XG4gICAgdXJsOiBBUFBfVVJMLFxuICAgIHdpbmRvd0lkXG4gIH0pXG5cbiAgbGV0IEFwcFRhYiA9IHRhYnMuZmluZCgodGFiKSA9PiB0YWIudXJsID09PSBBUFBfVVJMKVxuICBpZiAoQXBwVGFiID09IG51bGwpIHtcbiAgICBBcHBUYWIgPSBhd2FpdCBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IEFQUF9VUkwgfSlcbiAgfVxuXG4gIGlmIChBcHBUYWIuaWQgIT0gbnVsbCkge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFtjaHJvbWUudGFicy5tb3ZlKEFwcFRhYi5pZCwgeyBpbmRleDogMCB9KSwgY2hyb21lLnRhYnMudXBkYXRlKEFwcFRhYi5pZCwgeyBhY3RpdmU6IHRydWUsIHBpbm5lZDogdHJ1ZSB9KV0pXG4gIH1cblxuICBjb25zdCBvcGVuZWRUYWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyB3aW5kb3dJZCB9KVxuXG4gIG9wZW5lZFRhYnMuZm9yRWFjaChhc3luYyAodGFiKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0YWIuaWQgPT0gbnVsbCkgcmV0dXJuXG4gICAgICBpZiAodGFiLnVybCA9PSBudWxsKSByZXR1cm5cbiAgICAgIGlmIChbJ2Nocm9tZTovL25ld3RhYi8nXS5pbmNsdWRlcyh0YWIudXJsKSkge1xuICAgICAgICBhd2FpdCBjaHJvbWUudGFicy5yZW1vdmUodGFiLmlkKVxuICAgICAgfVxuICAgICAgaWYgKHRhYi5pZCA9PT0gQXBwVGFiPy5pZCkgcmV0dXJuXG4gICAgICBpZiAodGFiLnBpbm5lZCkgcmV0dXJuXG4gICAgICBpZiAodGFiLmF1ZGlibGUgPT09IHRydWUpIHJldHVyblxuICAgICAgaWYgKHRhYi5oaWdobGlnaHRlZCkgcmV0dXJuXG4gICAgICBpZiAodGFiLmFjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIGlmICh0YWIuaWQgPT09IGN1cnJlbnRUYWIuaWQpIHJldHVyblxuXG4gICAgICBhd2FpdCBjaHJvbWUudGFicy5yZW1vdmUodGFiLmlkKVxuICAgIH0gY2F0Y2gge31cbiAgfSlcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBhc3luYyAob3B0aW9uczogY2hyb21lLmNvb2tpZXMuU2V0RGV0YWlscywgY29va2llOiBjaHJvbWUuY29va2llcy5Db29raWUgPSB7fSBhcyBhbnkpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGNocm9tZS5jb29raWVzLnNldCh7XG4gICAgZG9tYWluOiBjb29raWUuZG9tYWluLFxuICAgIHN0b3JlSWQ6IGNvb2tpZS5zdG9yZUlkLFxuICAgIHBhdGg6IGNvb2tpZS5wYXRoLFxuICAgIGh0dHBPbmx5OiBjb29raWUuaHR0cE9ubHksXG4gICAgc2VjdXJlOiBjb29raWUuc2VjdXJlLFxuICAgIHNhbWVTaXRlOiBjb29raWUuc2FtZVNpdGUsXG4gICAgZXhwaXJhdGlvbkRhdGU6IGNvb2tpZS5leHBpcmF0aW9uRGF0ZSxcbiAgICAuLi5vcHRpb25zXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgQkFORF9NS1RTLCBCSU5HIH0gZnJvbSAnQEAvY29uc3RhbnRzJ1xuaW1wb3J0IHsgZ2V0Q29uZmlnLCBnZXRVUkxTZWFyY2hQYXJhbXMsIGlzQ2FuYXJ5LCBvcGVuUGFnZSwgcmVnaXN0cnlMaXN0ZW5lciwgdmVyc2lvbiB9IGZyb20gJ0BAL3V0aWxzJ1xuaW1wb3J0IHsgcmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCBpbml0Q29udGV4dE1lbnUgZnJvbSAnLi9jb250ZXh0X21lbnVzJ1xuaW1wb3J0IGxpc3RlbmVycyBmcm9tICcuL2xpc3RlbmVycydcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgaW5pdENvbnRleHRNZW51KClcbiAgcmVnaXN0cnlMaXN0ZW5lcihsaXN0ZW5lcnMpXG5cbiAgY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoYXN5bmMgKGRldGFpbHMpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKVxuICAgIGNvbnN0IHJlcG9zaXRvcnlVcmw6IHN0cmluZyA9IHJlcG9zaXRvcnkudXJsXG4gICAgLy8gY29uc3QgZGVidWd1cmwgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9RWRnZSUyMCVFNCVCOCU4QiVFOCVCRCVCRCZzaG93Y29udj0xJkZPUk09aHBjb2R4J1xuICAgIC8vIGlmIChkZWJ1Z3VybCkge1xuICAgIC8vICAgb3BlblBhZ2UoZGVidWd1cmwpXG4gICAgLy8gICByZXR1cm5cbiAgICAvLyB9XG4gICAgaWYgKGlzQ2FuYXJ5KSB7XG4gICAgICBvcGVuUGFnZShgJHtyZXBvc2l0b3J5VXJsfS90cmVlL2NhbmFyeWApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGRldGFpbHMucmVhc29uID09PSAnaW5zdGFsbCcpIHtcbiAgICAgIG9wZW5QYWdlKHJlcG9zaXRvcnlVcmwpXG4gICAgfSBlbHNlIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ3VwZGF0ZScgJiYgY29uZmlnLnNob3dSZWxlYXNlKSB7XG4gICAgICBvcGVuUGFnZShgJHtyZXBvc2l0b3J5VXJsfS9yZWxlYXNlcy90YWcvdiR7dmVyc2lvbn1gKVxuICAgIH1cbiAgfSlcblxuICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4gICAgKCkgPT4ge1xuICAgICAgY2hyb21lLmNvb2tpZXMuZ2V0KFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ19FREdFX1MnLFxuICAgICAgICAgIHVybDogQklOR1xuICAgICAgICB9LFxuICAgICAgICAoY29va2llKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBjb29raWU/LnZhbHVlXG4gICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuXG5cbiAgICAgICAgICBjb25zdCB2YWx1ZU9iaiA9IGdldFVSTFNlYXJjaFBhcmFtcyh2YWx1ZSlcbiAgICAgICAgICBjb25zdCBta3QgPSB2YWx1ZU9iai5nZXQoJ21rdCcpPy50b0xvd2VyQ2FzZSgpID8/ICcnXG5cbiAgICAgICAgICBpZiAoIUJBTkRfTUtUUy5tYXAoKG0pID0+IG0udG9Mb3dlckNhc2UoKSkuaW5jbHVkZXMobWt0KSkgcmV0dXJuXG4gICAgICAgICAgaWYgKG1rdCA9PT0gJ3poLWNuJykge1xuICAgICAgICAgICAgdmFsdWVPYmouc2V0KCdta3QnLCAnemgtSEsnKVxuICAgICAgICAgICAgdmFsdWVPYmouc2V0KCd1aScsICd6aC1oYW5zJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVPYmouZGVsZXRlKCdta3QnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsOiBCSU5HLFxuICAgICAgICAgICAgICBuYW1lOiBjb29raWUubmFtZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlT2JqLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb29raWVcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgY2hyb21lLmNvb2tpZXMuZ2V0KFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ19Sd0JmJyxcbiAgICAgICAgICB1cmw6IEJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgKGNvb2tpZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29va2llPy52YWx1ZVxuICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHNldENvb2tpZSh7XG4gICAgICAgICAgICAgIHVybDogQklORyxcbiAgICAgICAgICAgICAgbmFtZTogJ19Sd0JmJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICd3bHM9MicsXG4gICAgICAgICAgICAgIGRvbWFpbjogJy5iaW5nLmNvbScsXG4gICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsdWVPYmogPSBnZXRVUkxTZWFyY2hQYXJhbXModmFsdWUpXG4gICAgICAgICAgY29uc3Qgd2xzID0gdmFsdWVPYmouZ2V0KCd3bHMnKVxuICAgICAgICAgIGlmICh3bHMgIT09ICcyJyAmJiB3bHMgIT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZU9iai5zZXQoJ3dscycsICcyJylcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0Q29va2llKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmw6IEJJTkcsXG4gICAgICAgICAgICAgIG5hbWU6ICdfUndCZicsXG4gICAgICAgICAgICAgIGRvbWFpbjogJy5iaW5nLmNvbScsXG4gICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVPYmoudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvb2tpZVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBjaHJvbWUuY29va2llcy5nZXQoXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQU5PTicsXG4gICAgICAgICAgdXJsOiBCSU5HXG4gICAgICAgIH0sXG4gICAgICAgIChjb29raWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvb2tpZT8udmFsdWVcbiAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm5cblxuICAgICAgICAgIGNvbnN0IHZhbHVlT2JqID0gZ2V0VVJMU2VhcmNoUGFyYW1zKHZhbHVlKVxuXG4gICAgICAgICAgdmFsdWVPYmouZGVsZXRlKCdBJylcblxuICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsOiBCSU5HLFxuICAgICAgICAgICAgICBuYW1lOiAnQU5PTicsXG4gICAgICAgICAgICAgIGRvbWFpbjogJy5iaW5nLmNvbScsXG4gICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVPYmoudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvb2tpZVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0sXG4gICAgeyB1cmxzOiBbQklORyArICcqJ10sIHR5cGVzOiBbJ21haW5fZnJhbWUnXSB9XG4gIClcbn1cbiIsICJpbXBvcnQgeyBBSVBMVVMsIEFMTF9SRVNPVVJDRV9UWVBFUyB9IGZyb20gJ0BAL2NvbnN0YW50cydcblxuaW1wb3J0IHsgZ2VuVUEsIGlzQ2hpbmVzZSB9IGZyb20gJ0BAL3V0aWxzJ1xuXG5jb25zdCBNT0RJRllfSEVBREVSU19MSVNUID0ge1xuICAvLyAnWC1Gb3J3YXJkZWQtRm9yJzogJzguOC44LjgnLFxuICAnVXNlci1BZ2VudCc6IGdlblVBKClcbn1cbmNvbnN0IE1PRElGWV9IRUFERVJTID0gJ21vZGlmeUhlYWRlcnMnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuUnVsZUFjdGlvblR5cGUuTU9ESUZZX0hFQURFUlNcbmNvbnN0IFJFRElSRUNUID0gJ3JlZGlyZWN0JyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJ1bGVBY3Rpb25UeXBlLlJFRElSRUNUXG4vLyBjb25zdCBBUFBFTkQgPSAnYXBwZW5kJyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LkhlYWRlck9wZXJhdGlvbi5BUFBFTkRcbi8vIGNvbnN0IFJFTU9WRSA9ICdyZW1vdmUnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuSGVhZGVyT3BlcmF0aW9uLlJFTU9WRVxuY29uc3QgU0VUID0gJ3NldCcgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5IZWFkZXJPcGVyYXRpb24uU0VUXG5cbmV4cG9ydCBjb25zdCBkeW5hbWljUnVsZXMgPSBbXG4gIHtcbiAgICBwcmlvcml0eTogMjAwMSxcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IE1PRElGWV9IRUFERVJTLFxuICAgICAgcmVxdWVzdEhlYWRlcnM6IE9iamVjdC5lbnRyaWVzKE1PRElGWV9IRUFERVJTX0xJU1QpLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiAoe1xuICAgICAgICBvcGVyYXRpb246IFNFVCxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkpXG4gICAgfSxcbiAgICBjb25kaXRpb246IHtcbiAgICAgIHJlcXVlc3REb21haW5zOiBbJ2JpbmcuY29tJywgJ3d3dy5iaW5nLmNvbScsICdjbi5iaW5nLmNvbSddLFxuICAgICAgcmVzb3VyY2VUeXBlczogQUxMX1JFU09VUkNFX1RZUEVTXG4gICAgfVxuICB9LFxuICBpc0NoaW5lc2UgJiYge1xuICAgIGFjdGlvbjoge1xuICAgICAgdHlwZTogUkVESVJFQ1QsXG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICB1cmw6IGAke0FJUExVU30/aW52aXRlX2NvZGU9YjkwZTg0YjVgXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25kaXRpb246IHtcbiAgICAgIHJlcXVlc3REb21haW5zOiBbJ2NoYXQuYWlwbHVzLmxvbCddLFxuICAgICAgdXJsRmlsdGVyOiBBSVBMVVMsXG4gICAgICBpc1VybEZpbHRlckNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgcmVzb3VyY2VUeXBlczogQUxMX1JFU09VUkNFX1RZUEVTXG4gICAgfVxuICB9XG5dXG4gIC5maWx0ZXIoQm9vbGVhbilcbiAgLm1hcCgocnVsZSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IGluZGV4ICsgMSArIDIwMDAsXG4gICAgLi4ucnVsZVxuICB9KSkgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5SdWxlW11cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBpZiAoIWR5bmFtaWNSdWxlcy5sZW5ndGgpIHJldHVyblxuXG4gIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuZ2V0RHluYW1pY1J1bGVzKChkUnVsZXMpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygyMjIsIFsuLi5uZXcgU2V0KFsuLi5ydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGUuaWQpLCAuLi5kUnVsZXMubWFwKChydWxlKSA9PiBydWxlLmlkKV0pXSlcblxuICAgIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QudXBkYXRlRHluYW1pY1J1bGVzKHtcbiAgICAgIHJlbW92ZVJ1bGVJZHM6IFsuLi5uZXcgU2V0KFsuLi5keW5hbWljUnVsZXMubWFwKChydWxlKSA9PiBydWxlLmlkKSwgLi4uZFJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZS5pZCldKV0sXG4gICAgICBhZGRSdWxlczogZHluYW1pY1J1bGVzXG4gICAgfSlcbiAgICAvLyAudGhlbigoKSA9PiB7XG4gICAgLy8gICBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LmdldER5bmFtaWNSdWxlcygoZFJ1bGVzKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKDMzMywgZFJ1bGVzKVxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICB9KVxuXG4gIC8vIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3Qub25SdWxlTWF0Y2hlZERlYnVnLmFkZExpc3RlbmVyKCguLi5hcmdzKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coMTExMSwgLi4uYXJncylcbiAgLy8gfSlcbn1cbiIsICJpbXBvcnQgeyBzdGF0aWNSdWxlcyB9IGZyb20gJy4uLy4uL3NjcmlwdHMvc3RhdGljX3J1bGVzJ1xuaW1wb3J0IGNyb3NzUGxhdGZvcm0gZnJvbSAnLi9jcm9zc19wbGF0Zm9ybSdcbmltcG9ydCB7IGR5bmFtaWNSdWxlcyB9IGZyb20gJy4vZHluYW1pY19ydWxlcydcbmNvbnN0IGJyb3dzZXIgPSBjaHJvbWVcblxuY29uc3QgcnVsZXMgPSBbLi4uc3RhdGljUnVsZXMsIC4uLmR5bmFtaWNSdWxlc11cbmNvbnN0IG1vZGlmeVJlcXVlc3RIZWFkZXJzUnVsZXMgPSBydWxlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYWN0aW9uPy50eXBlID09PSAnbW9kaWZ5SGVhZGVycycgJiYgaXRlbS5hY3Rpb24/LnJlcXVlc3RIZWFkZXJzPy5sZW5ndGgpXG5jb25zdCBtb2RpZnlSZXNwb25zZUhlYWRlcnNSdWxlcyA9IHJ1bGVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hY3Rpb24/LnR5cGUgPT09ICdtb2RpZnlIZWFkZXJzJyAmJiBpdGVtLmFjdGlvbj8ucmVzcG9uc2VIZWFkZXJzPy5sZW5ndGgpXG5cbi8vIGNvbnN0IHJlZGlyZWN0UnVsZXMgPSBydWxlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYWN0aW9uPy50eXBlID09PSAncmVkaXJlY3QnKVxuXG4vLyBjb25zb2xlLmxvZygncnVsZXMnLCBydWxlcy5sZW5ndGgpXG4vLyBjb25zb2xlLmxvZygnbW9kaWZ5UmVxdWVzdEhlYWRlcnNSdWxlcycsIG1vZGlmeVJlcXVlc3RIZWFkZXJzUnVsZXMubGVuZ3RoLCBtb2RpZnlSZXF1ZXN0SGVhZGVyc1J1bGVzKVxuLy8gY29uc29sZS5sb2coJ21vZGlmeVJlc3BvbnNlSGVhZGVyc1J1bGVzJywgbW9kaWZ5UmVzcG9uc2VIZWFkZXJzUnVsZXMubGVuZ3RoLCBtb2RpZnlSZXNwb25zZUhlYWRlcnNSdWxlcylcbi8vIGNvbnNvbGUubG9nKCdyZWRpcmVjdFJ1bGVzJywgcmVkaXJlY3RSdWxlcy5sZW5ndGgsIHJlZGlyZWN0UnVsZXMpXG5cbmNyb3NzUGxhdGZvcm0oKVxuYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlU2VuZEhlYWRlcnMuYWRkTGlzdGVuZXIoXG4gIChkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCFkZXRhaWxzLnJlcXVlc3RIZWFkZXJzKSByZXR1cm5cbiAgICAvLyBjb25zb2xlLmxvZygxMTEsIGRldGFpbHMpXG4gICAgY29uc3QgbmV3SGVhZGVycyA9IGRldGFpbHMucmVxdWVzdEhlYWRlcnNcbiAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgbW9kaWZ5UmVxdWVzdEhlYWRlcnNSdWxlcykge1xuICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTChkZXRhaWxzLnVybClcbiAgICAgIGlmIChcbiAgICAgICAgIXJ1bGUuY29uZGl0aW9uIHx8XG4gICAgICAgIChydWxlLmNvbmRpdGlvbj8ucmVxdWVzdERvbWFpbnMgPz8gW10pLmluY2x1ZGVzKHVybE9iai5ob3N0bmFtZSkgfHxcbiAgICAgICAgbmV3IFJlZ0V4cChydWxlLmNvbmRpdGlvbj8ucmVnZXhGaWx0ZXIgPz8gJycsIHJ1bGUuY29uZGl0aW9uPy5pc1VybEZpbHRlckNhc2VTZW5zaXRpdmUgPyAnaScgOiB1bmRlZmluZWQpLnRlc3QodXJsT2JqLmhyZWYpIHx8XG4gICAgICAgIHVybE9iai5ocmVmLmluY2x1ZGVzKHJ1bGUuY29uZGl0aW9uPy51cmxGaWx0ZXIgPz8gJycpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0SGVhZGVyIG9mIHJ1bGUuYWN0aW9uLnJlcXVlc3RIZWFkZXJzID8/IFtdKSB7XG4gICAgICAgICAgc3dpdGNoIChyZXF1ZXN0SGVhZGVyLm9wZXJhdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2V0JzpcbiAgICAgICAgICAgICAgaWYgKCFkZXRhaWxzLnJlcXVlc3RIZWFkZXJzLmZpbmQoKGhlYWRlcikgPT4gaGVhZGVyLm5hbWUgPT09IHJlcXVlc3RIZWFkZXIuaGVhZGVyKSkge1xuICAgICAgICAgICAgICAgIG5ld0hlYWRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICBuYW1lOiByZXF1ZXN0SGVhZGVyLmhlYWRlcixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXF1ZXN0SGVhZGVyLnZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhlYWRlciBvZiBkZXRhaWxzLnJlcXVlc3RIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdEhlYWRlci5oZWFkZXIudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygxMTEwLCBoZWFkZXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnZhbHVlID0gcmVxdWVzdEhlYWRlci52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhcHBlbmQnOlxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygxMTEsIHJlcXVlc3RIZWFkZXIuaGVhZGVyKVxuICAgICAgICAgICAgICBuZXdIZWFkZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlcXVlc3RIZWFkZXIuaGVhZGVyLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXF1ZXN0SGVhZGVyLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBuZXdIZWFkZXJzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RIZWFkZXIuaGVhZGVyLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgaW5kZXggPiAtMSAmJiBuZXdIZWFkZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyByZXF1ZXN0SGVhZGVyczogbmV3SGVhZGVycyB9XG4gIH0sXG4gIHtcbiAgICB1cmxzOiBbJzxhbGxfdXJscz4nXVxuICB9LFxuICBbJ2Jsb2NraW5nJywgJ3JlcXVlc3RIZWFkZXJzJ11cbilcblxuYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLmFkZExpc3RlbmVyKFxuICAoZGV0YWlscykgPT4ge1xuICAgIGlmICghZGV0YWlscy5yZXNwb25zZUhlYWRlcnMpIHJldHVyblxuICAgIC8vIGNvbnNvbGUubG9nKDIyMiwgZGV0YWlscylcbiAgICBjb25zdCBuZXdIZWFkZXJzID0gZGV0YWlscy5yZXNwb25zZUhlYWRlcnNcblxuICAgIGZvciAoY29uc3QgcnVsZSBvZiBtb2RpZnlSZXNwb25zZUhlYWRlcnNSdWxlcykge1xuICAgICAgLy8gY29uc3QgdXJsT2JqID0gbmV3IFVSTChkZXRhaWxzLnVybClcbiAgICAgIGlmIChcbiAgICAgICAgLy8gIXJ1bGUuY29uZGl0aW9uIHx8XG4gICAgICAgIC8vIHJ1bGUuY29uZGl0aW9uPy5yZWdleEZpbHRlclxuICAgICAgICAvLyA/XG4gICAgICAgIG5ldyBSZWdFeHAocnVsZS5jb25kaXRpb24/LnJlZ2V4RmlsdGVyID8/ICcnLCBydWxlLmNvbmRpdGlvbj8uaXNVcmxGaWx0ZXJDYXNlU2Vuc2l0aXZlID8gJ2knIDogdW5kZWZpbmVkKS50ZXN0KGRldGFpbHMudXJsKVxuICAgICAgICAvLyA6IGZhbHNlIC8vIHVybE9iai5ocmVmLmluY2x1ZGVzKHJ1bGUuY29uZGl0aW9uPy51cmxGaWx0ZXIgPz8gJycpXG4gICAgICAgIC8vIHx8XG4gICAgICAgIC8vIChydWxlLmNvbmRpdGlvbj8ucmVxdWVzdERvbWFpbnMgPz8gW10pLmluY2x1ZGVzKHVybE9iai5ob3N0bmFtZSlcbiAgICAgICkge1xuICAgICAgICAvLyBmb3IgKGNvbnN0IHJ1bGUgb2YgcmVkaXJlY3RSdWxlcykge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFxuICAgICAgICAvLyAgICAgMTExLFxuICAgICAgICAvLyAgICAgcnVsZSxcbiAgICAgICAgLy8gICAgIGRldGFpbHMudXJsLFxuICAgICAgICAvLyAgICAgcnVsZS5jb25kaXRpb24/LnJlZ2V4RmlsdGVyLFxuICAgICAgICAvLyAgICAgbmV3IFJlZ0V4cChydWxlLmNvbmRpdGlvbj8ucmVnZXhGaWx0ZXIgPz8gJycsIHJ1bGUuY29uZGl0aW9uPy5pc1VybEZpbHRlckNhc2VTZW5zaXRpdmUgPyAnaScgOiB1bmRlZmluZWQpLFxuICAgICAgICAvLyAgICAgbmV3IFJlZ0V4cChydWxlLmNvbmRpdGlvbj8ucmVnZXhGaWx0ZXIgPz8gJycsIHJ1bGUuY29uZGl0aW9uPy5pc1VybEZpbHRlckNhc2VTZW5zaXRpdmUgPyAnaScgOiB1bmRlZmluZWQpLnRlc3QoZGV0YWlscy51cmwpXG4gICAgICAgIC8vICAgKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0SGVhZGVyIG9mIHJ1bGUuYWN0aW9uLnJlc3BvbnNlSGVhZGVycyA/PyBbXSkge1xuICAgICAgICAgIHN3aXRjaCAocmVxdWVzdEhlYWRlci5vcGVyYXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3NldCc6XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaGVhZGVyIG9mIGRldGFpbHMucmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RIZWFkZXIuaGVhZGVyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDIyMiwgaGVhZGVyLm5hbWUpXG4gICAgICAgICAgICAgICAgICBoZWFkZXIudmFsdWUgPSByZXF1ZXN0SGVhZGVyLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld0hlYWRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlcXVlc3RIZWFkZXIuaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVxdWVzdEhlYWRlci52YWx1ZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2FwcGVuZCc6XG4gICAgICAgICAgICAgIG5ld0hlYWRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogcmVxdWVzdEhlYWRlci5oZWFkZXIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlcXVlc3RIZWFkZXIudmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHJlc3BvbnNlSGVhZGVyczogbmV3SGVhZGVycyB9XG4gIH0sXG4gIHtcbiAgICB1cmxzOiBbJzxhbGxfdXJscz4nXVxuICB9LFxuICBbJ2Jsb2NraW5nJywgJ3Jlc3BvbnNlSGVhZGVycyddXG4pXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFBTyxNQUFNLE9BQU87QUFFYixNQUFNLFNBQVM7QUFDZixNQUFNLFlBQVksQ0FBQyxTQUFTLE1BQU0sT0FBTztBQUV6QyxNQUFNLGVBQWU7QUFDckIsTUFBTSxlQUFlO0FBRXJCLE1BQU0scUJBQXFCO0FBQUEsSUFD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U0FBUyxLQUFLLEtBQUssWUFBWSxNQUFNLGNBQWMsT0FBTyxZQUFZLENBQUM7QUFDM0csMEJBQVEsTUFBTSxXQUFXLE9BQU8sT0FBTyxDQUFDO0FBQUEsZ0JBQzFDO0FBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUVBLGFBQU8sRUFBRSxnQkFBZ0IsV0FBVztBQUFBLElBQ3RDO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTSxDQUFDLFlBQVk7QUFBQSxJQUNyQjtBQUFBLElBQ0EsQ0FBQyxZQUFZLGdCQUFnQjtBQUFBLEVBQy9CO0FBRUEsVUFBUSxXQUFXLGtCQUFrQjtBQUFBLElBQ25DLENBQUMsWUFBWTtBQUNYLFVBQUksQ0FBQyxRQUFRO0FBQWlCO0FBRTlCLFlBQU0sYUFBYSxRQUFRO0FBRTNCLGlCQUFXLFFBQVEsNEJBQTRCO0FBRTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFJRSxJQUFJLE9BQU8sS0FBSyxXQUFXLGVBQWUsSUFBSSxLQUFLLFdBQVcsMkJBQTJCLE1BQU0sTUFBUyxFQUFFLEtBQUssUUFBUSxHQUFHO0FBQUEsVUFJMUg7QUFZQSxxQkFBVyxpQkFBaUIsS0FBSyxPQUFPLG1CQUFtQixDQUFDLEdBQUc7QUFDN0Qsb0JBQVEsY0FBYyxXQUFXO0FBQUEsY0FDL0IsS0FBSztBQUNILDJCQUFXLFVBQVUsUUFBUSxpQkFBaUI7QUFDNUMsc0JBQUksT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLE9BQU8sWUFBWSxHQUFHO0FBRXBFLDJCQUFPLFFBQVEsY0FBYztBQUFBLGtCQUMvQixPQUFPO0FBQ0wsK0JBQVcsS0FBSztBQUFBLHNCQUNkLE1BQU0sY0FBYztBQUFBLHNCQUNwQixPQUFPLGNBQWM7QUFBQSxvQkFDdkIsQ0FBQztBQUFBLGtCQUNIO0FBQUEsZ0JBQ0Y7QUFDQTtBQUFBLGNBQ0YsS0FBSztBQUNILDJCQUFXLEtBQUs7QUFBQSxrQkFDZCxNQUFNLGNBQWM7QUFBQSxrQkFDcEIsT0FBTyxjQUFjO0FBQUEsZ0JBQ3ZCLENBQUM7QUFDRDtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQ0EsYUFBTyxFQUFFLGlCQUFpQixXQUFXO0FBQUEsSUFDdkM7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNLENBQUMsWUFBWTtBQUFBLElBQ3JCO0FBQUEsSUFDQSxDQUFDLFlBQVksaUJBQWlCO0FBQUEsRUFDaEM7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAidGFiIiwgInZlcnNpb24iLCAidGFiIiwgInZlcnNpb24iLCAiTU9ESUZZX0hFQURFUlMiLCAiUkVESVJFQ1QiLCAiU0VUIl0KfQo=
