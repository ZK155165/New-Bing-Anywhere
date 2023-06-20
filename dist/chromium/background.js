"use strict";
(() => {
  // src/universe/constants.ts
  var BING = "https://www.bing.com/";
  var CN_REDIRECT_URL = "https://cn.bing.com/";
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

  // package.json
  var version = "2.2.0";
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
  var MODIFY_HEADERS = "modifyHeaders";
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
  chrome.runtime.onInstalled.addListener((details) => {
    dynamic_rules_default();
  });
  if (isSimpleChinese) {
    chrome.runtime.setUninstallURL(CN_REDIRECT_URL);
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3VuaXZlcnNlL2NvbnN0YW50cy50cyIsICIuLi8uLi9wYWNrYWdlLmpzb24iLCAiLi4vLi4vc3JjL3VuaXZlcnNlL3V0aWxzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2NvbnRleHRfbWVudXMudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL19ub3RpZmljYXRpb24udHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2Nyb3NzX3BsYXRmb3JtLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2R5bmFtaWNfcnVsZXMudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvY2hyb21pdW0udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBCSU5HID0gJ2h0dHBzOi8vd3d3LmJpbmcuY29tLydcbmV4cG9ydCBjb25zdCBDTl9SRURJUkVDVF9VUkwgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbS8nXG5leHBvcnQgY29uc3QgQkFORF9NS1RTID0gWyd6aC1DTicsICdydScsICdydS1ydSddXG5cbmV4cG9ydCBjb25zdCBNQUlOX1ZFUlNJT04gPSAnMTEzJ1xuZXhwb3J0IGNvbnN0IEZVTExfVkVSU0lPTiA9ICcxMTMuMC4xNzc0LjU3J1xuXG5leHBvcnQgY29uc3QgQUxMX1JFU09VUkNFX1RZUEVTID0gW1xuICAnY3NwX3JlcG9ydCcsXG4gICdmb250JyxcbiAgJ2ltYWdlJyxcbiAgJ21haW5fZnJhbWUnLFxuICAnbWVkaWEnLFxuICAnb2JqZWN0JyxcbiAgJ290aGVyJyxcbiAgJ3BpbmcnLFxuICAnc2NyaXB0JyxcbiAgJ3N0eWxlc2hlZXQnLFxuICAnc3ViX2ZyYW1lJyxcbiAgJ3dlYmJ1bmRsZScsXG4gICd3ZWJzb2NrZXQnLFxuICAnd2VidHJhbnNwb3J0JyxcbiAgJ3htbGh0dHByZXF1ZXN0J1xuXSBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJlc291cmNlVHlwZVtdXG4iLCAie1xuICBcIm5hbWVcIjogXCJuZXctYmluZy1hbnl3aGVyZVwiLFxuICBcInZlcnNpb25cIjogXCIyLjIuMFwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIGlzbid0IGp1c3QgZm9yIEVkZ2UgYW55bW9yZS4gQW55d2hlcmUgeW91IHdhbnRcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9oYW96aS9OZXctQmluZy1Bbnl3aGVyZVwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2hhb3ppL05ldy1CaW5nLUFueXdoZXJlXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiR1BMdjNcIixcbiAgXCJhdXRob3JcIjogXCJoYW96aVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJybSAtcmYgZGlzdCAmJiBta2RpciAtcCBkaXN0ICYmIHBucG0gcnVuIGxpbnQgJiYgcG5wbSBydW4gYnVpbGQ6YnVuZGxlXCIsXG4gICAgXCJidWlsZDpidW5kbGVcIjogXCJOT0RFX0VOVj1wcm9kdWN0aW9uIHZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGJ1aWxkXCIsXG4gICAgXCJjb3B5XCI6IFwicm0gLXJmIGRpc3QgJiYgY3AgLXIgcHVibGljIGRpc3RcIixcbiAgICBcImNvcHk6c29ydWNlXCI6IFwicnN5bmMgLXZocmEgLiBkaXN0L3NvdXJjZSAtLWluY2x1ZGU9JyoqLmdpdGlnbm9yZScgLS1leGNsdWRlPScvLmdpdCcgLS1leGNsdWRlPSdkaXN0JyAgLS1maWx0ZXI9JzotIC5naXRpZ25vcmUnIC0tZGVsZXRlLWFmdGVyXCIsXG4gICAgXCJjb3B5OndhdGNoXCI6IFwicG5wbSBydW4gY29weSAtLSAtLXdhdGNoXCIsXG4gICAgXCJkZXZcIjogXCJwbnBtIHJ1biBsaW50ICYmIHBucG0gcnVuICcvXmRldjouKi8nXCIsXG4gICAgXCJkZXY6YXBwXCI6IFwicG5wbSAtLWZpbHRlciBhcHAgcnVuIGRldlwiLFxuICAgIFwiZGV2OmJ1bmRsZVwiOiBcInZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGRldlwiLFxuICAgIFwibGludFwiOiBcInBucG0gcnVuIHByZXR0aWVyICYmIHBucG0gcnVuICcvXmxpbnQ6LiovJ1wiLFxuICAgIFwibGludDplc2xpbnRcIjogXCJlc2xpbnQgLS1leHQgLmpzLC50cyAuL3NyYyAtLWZpeCAtLWNhY2hlXCIsXG4gICAgXCJsaW50OnN0eWx1c1wiOiBcInN0eWx1cy1zdXByZW1hY3kgZm9ybWF0IC4vc3JjLyoqLyouc3R5bCAgLS1vcHRpb25zIC4vc3R5bHVzLXN1cHJlbWFjeS5qc29uIC0tcmVwbGFjZVwiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGwgJiYgcG5wbSBydW4gYnVpbGRcIixcbiAgICBcInByZXR0aWVyXCI6IFwicHJldHRpZXIgLS1jYWNoZSAtLXdyaXRlIC5cIixcbiAgICBcInByZXR0aWVyOndhdGNoXCI6IFwib25jaGFuZ2UgXFxcIioqLypcXFwiIC0tIHByZXR0aWVyIC0tY2FjaGUgLS13cml0ZSAtLWlnbm9yZS11bmtub3duIC0taWdub3JlLXBhdGggLnByZXR0aWVyaWdub3JlIHt7Y2hhbmdlZH19ID4gL2Rldi9udWxsIDI+JjFcIixcbiAgICBcInRlc3RcIjogXCJwbnBtIHJ1biBsaW50XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL3plcHRvXCI6IFwiXjEuMC4zM1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0eXBlcy9jaHJvbWVcIjogXCJeMC4wLjIzN1wiLFxuICAgIFwiQHR5cGVzL2ZzLWV4dHJhXCI6IFwiXjExLjAuMVwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMy4xXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl41LjU5LjExXCIsXG4gICAgXCJjb3B5LWFuZC13YXRjaFwiOiBcIl4wLjEuNlwiLFxuICAgIFwiZXNidWlsZFwiOiBcIl4wLjE4LjNcIixcbiAgICBcImVzYnVpbGQtcGx1Z2luLXN2Z3JcIjogXCJeMi4wLjBcIixcbiAgICBcImVzYnVpbGQtc3R5bGUtcGx1Z2luXCI6IFwiXjEuNi4yXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC40Mi4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXN0YW5kYXJkLXdpdGgtdHlwZXNjcmlwdFwiOiBcIl4zNS4wLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjcuNVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1uXCI6IFwiXjE2LjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1ub2RlXCI6IFwiXjExLjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl40LjIuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcm9taXNlXCI6IFwiXjYuMS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzIuMlwiLFxuICAgIFwiZnMtZXh0cmFcIjogXCJeMTEuMS4xXCIsXG4gICAgXCJodXNreVwiOiBcIl44LjAuM1wiLFxuICAgIFwibWQ1LWZpbGVcIjogXCJeNS4wLjBcIixcbiAgICBcIm9uY2hhbmdlXCI6IFwiXjcuMS4wXCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4yLjguOFwiLFxuICAgIFwic29ydC1wYWNrYWdlLWpzb25cIjogXCJeMi40LjFcIixcbiAgICBcInN0eWx1c1wiOiBcIl4wLjU5LjBcIixcbiAgICBcInN0eWx1cy1zdXByZW1hY3lcIjogXCJeMi4xNy41XCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMS4zXCIsXG4gICAgXCJ2aXRlLW5vZGVcIjogXCJeMC4zMi4xXCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCJeMjAuMy4wXCIsXG4gICAgXCJwbnBtXCI6IFwiXjguNi4yXCJcbiAgfSxcbiAgXCJleHRlbnNpb24taTE4blwiOiB7XG4gICAgXCJlblwiOiB7XG4gICAgICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiLFxuICAgICAgXCJleHRlbnNpb25EZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIENoYXQgY2FuIGJlIHVzZWQgaW4gYW55IGJyb3dzZXIsIHdpdGggYW55IHNlYXJjaCBlbmdpbmUsIGFuZCBpbiBhbnkgY291bnRyeS5cIlxuICAgIH0sXG4gICAgXCJ6aF9DTlwiOiB7XG4gICAgICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiLFxuICAgICAgXCJleHRlbnNpb25EZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIENoYXQgY2FuIGJlIHVzZWQgaW4gYW55IGJyb3dzZXIsIHdpdGggYW55IHNlYXJjaCBlbmdpbmUsIGFuZCBpbiBhbnkgY291bnRyeS4gXHU5NjhGXHU2NUY2XHU5NjhGXHU1NzMwXHVGRjBDXHU2NzA5XHU2QzQyXHU1RkM1XHU1RTk0XHUzMDAyXCJcbiAgICB9LFxuICAgIFwiemhfVFdcIjoge1xuICAgICAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIixcbiAgICAgIFwiZXh0ZW5zaW9uRGVzY3JpcHRpb25cIjogXCJOZXcgQmluZyBDaGF0IGNhbiBiZSB1c2VkIGluIGFueSBicm93c2VyLCB3aXRoIGFueSBzZWFyY2ggZW5naW5lLCBhbmQgaW4gYW55IGNvdW50cnkuIFx1OTZBOFx1NjY0Mlx1OTZBOFx1NTczMFx1RkYwQ1x1NjcwOVx1NkM0Mlx1NUZDNVx1NjFDOVwiXG4gICAgfSxcbiAgICBcInJ1XCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiXHUwNDI3XHUwNDMwXHUwNDQyIE5ldyBCaW5nIFx1MDQzQ1x1MDQzRVx1MDQzNlx1MDQzNVx1MDQ0MiBcdTA0MzhcdTA0NDFcdTA0M0ZcdTA0M0VcdTA0M0JcdTA0NENcdTA0MzdcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NENcdTA0NDFcdTA0NEYgXHUwNDMyIFx1MDQzQlx1MDQ0RVx1MDQzMVx1MDQzRVx1MDQzQyBcdTA0MzFcdTA0NDBcdTA0MzBcdTA0NDNcdTA0MzdcdTA0MzVcdTA0NDBcdTA0MzUsIFx1MDQ0MSBcdTA0M0JcdTA0NEVcdTA0MzFcdTA0NEJcdTA0M0MgXHUwNDNGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBXHUwNDNFXHUwNDMyXHUwNDRCXHUwNDNDIFx1MDQzNFx1MDQzMlx1MDQzOFx1MDQzNlx1MDQzQVx1MDQzRVx1MDQzQyBcdTA0MzggXHUwNDMyIFx1MDQzQlx1MDQ0RVx1MDQzMVx1MDQzRVx1MDQzOSBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0MzBcdTA0M0RcdTA0MzUuXCJcbiAgICB9XG4gIH0sXG4gIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCJcbn1cbiIsICJpbXBvcnQgeyB2ZXJzaW9uIGFzIHBrZ1ZlcnNpb24sIHJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyBGVUxMX1ZFUlNJT04sIE1BSU5fVkVSU0lPTiB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdHlwZSBCaW5nIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGNoZWNrSXNHb29nbGUgPSAoKSA9PiB7XG4gIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZS5pbmNsdWRlcygnZ29vZ2xlJylcbn1cbmV4cG9ydCBjb25zdCBscyA9IHtcbiAgc2V0OiBhc3luYyA8VCA9IGFueT4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgS0VZID0gYE5CQUAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfWBcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KFxuICAgICAgICB7XG4gICAgICAgICAgW0tFWV06IHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pXG4gIH0sXG4gIGdldDogYXN5bmMgPFQgPSBhbnk+KGtleTogc3RyaW5nKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiA9PiB7XG4gICAgY29uc3QgS0VZID0gYE5CQUAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfWBcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbS0VZXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3VsdFtLRVldKVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICByZW1vdmU6IGFzeW5jIChrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IEtFWSA9IGBOQkFAJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX1gXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbS0VZXSlcbiAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsbFRhYnMgPSBhc3luYyAocXVlcnlJbmZvOiBjaHJvbWUudGFicy5RdWVyeUluZm8gPSB7IHN0YXR1czogJ2NvbXBsZXRlJyB9KTogUHJvbWlzZTxJVGFiW10+ID0+IHtcbiAgY29uc3QgbmV3VGFiczogSVRhYltdID0gKGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5SW5mbykpIGFzIElUYWJbXVxuICBjb25zdCBvbGRUYWJzOiBJVGFiW10gPSB1bmlxdWUoKGF3YWl0IGxzLmdldDxJVGFiW10+KCdjdXJyZW50VGFicycpKSEpXG4gIGZvciAoY29uc3QgbmV3VGFiIG9mIG5ld1RhYnMpIHtcbiAgICBmb3IgKGNvbnN0IG9sZFRhYiBvZiBvbGRUYWJzKSB7XG4gICAgICBpZiAob2xkVGFiLnVybCAhPSBudWxsICYmIG9sZFRhYi51cmwgPT09IG5ld1RhYi51cmwpIHtcbiAgICAgICAgbmV3VGFiLiRleHRyYSA9IG9sZFRhYi4kZXh0cmFcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGV0IHRhYnMgPSBuZXdUYWJzLmNvbmNhdChvbGRUYWJzKVxuICB0YWJzID0gdGFicy5maWx0ZXIoKHRhYikgPT4ge1xuICAgIGNvbnN0IHVybCA9IHRhYi51cmwgPz8gJydcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCB1cmwuc3RhcnRzV2l0aCgnY2hyb21lLWV4dGVuc2lvbjovLycpXG4gIH0pXG4gIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgaWYgKHRhYi51cmwgPT0gbnVsbCkgcmV0dXJuXG4gICAgdGFiLnVybCA9IHRhYi51cmwucmVwbGFjZSgvIy4qJC8sICcnKVxuICB9KVxuICB0YWJzID0gdW5pcXVlKHRhYnMsICd1cmwnKS5zbGljZSgwLCA1MDAwKVxuICByZXR1cm4gdGFic1xufVxuXG5leHBvcnQgY29uc3QgdW5pcXVlID0gPFQ+KGFycjogVFtdLCBrZXk6IHN0cmluZyA9ICd1cmwnKTogVFtdID0+IHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcCgpXG4gIHJldHVybiBhcnIuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICBpZiAobWFwLmhhcyhpdGVtW2tleV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLnNldChpdGVtW2tleV0sIHRydWUpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IHR5cGUgSVRhYiA9IGNocm9tZS50YWJzLlRhYiAmIHtcbiAgJGV4dHJhPzoge1xuICAgIGxhc3RNb2RpZmllZDogbnVtYmVyXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZpbmRTYW1lVXJsVGFiID0gYXN5bmMgKHVybD86IHN0cmluZywgcXVlcnlJbmZvOiBjaHJvbWUudGFicy5RdWVyeUluZm8gPSB7fSk6IFByb21pc2U8Y2hyb21lLnRhYnMuVGFiIHwgbnVsbD4gPT4ge1xuICBpZiAoIXVybCkgcmV0dXJuIG51bGxcbiAgY29uc3Qgb3BlbmVkVGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5SW5mbylcbiAgcmV0dXJuIChcbiAgICBvcGVuZWRUYWJzLmZpbmQoKG9wZW5lZFRhYikgPT4ge1xuICAgICAgaWYgKCFvcGVuZWRUYWIudXJsKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiBub3JtYWxpemVVcmwob3BlbmVkVGFiLnVybCkgPT09IHVybFxuICAgIH0pID8/IG51bGxcbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplVXJsID0gKHVybDogc3RyaW5nID0gJycpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoLyMuKiQvLCAnJylcbn1cblxuZXhwb3J0IGNvbnN0IHNsZWVwID0gYXN5bmMgKGRlbGF5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KVxuICB9KVxufVxuXG4vKipcbiAqIGNoZWNrIGlmIGlzIENoaW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGNoZWNrSXNTaW1wbGVDaGluZXNlID0gKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGxhbmcgPSBjaHJvbWUuaTE4bi5nZXRVSUxhbmd1YWdlKCkudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiBsYW5nID09PSAnemgtY24nXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0lzQ2hpbmVzZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsYW5nID0gY2hyb21lLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gbGFuZyA9PT0gJ3poLWNuJyB8fCBsYW5nID09PSAnemgtdHcnIHx8IGxhbmcgPT09ICd6aC1oaycgfHwgbGFuZyA9PT0gJ3poJ1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIGNoZWNrIGlmIGluIE1haW5sYW5kIENoaW5hXG4gKi9cbmV4cG9ydCBjb25zdCBpc0NOID0gKCkgPT4ge1xuICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgQ09ORklHX0tFWSA9ICdjb25maWdWMSdcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgc2hvd0dvb2dsZUJ1dHRvbk9uQmluZzogYm9vbGVhblxuICBzaG93QmluZ0J1dHRvbk9uR29vZ2xlOiBib29sZWFuXG4gIHNob3dHdWlkZVRvR2l0aHViOiBib29sZWFuXG4gIHNob3dDaGF0OiBib29sZWFuXG4gIHRyaWdnZXJNb2RlOiAnQWx3YXlzJyB8ICdRdWVzdGlvbm1hcmsnIHwgJ01hbnVhbGx5J1xuICBjb252ZXJzYXRpb25TdHlsZTogQmluZy5Db252ZXJzYXRpb25TdHlsZVxufVxuZXhwb3J0IGNvbnN0IGdldENvbmZpZyA9IGFzeW5jICgpOiBQcm9taXNlPENvbmZpZz4gPT4ge1xuICBjb25zdCBjb25maWcgPSAoYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoQ09ORklHX0tFWSkpW0NPTkZJR19LRVldXG4gIHJldHVybiB7XG4gICAgc2hvd0dvb2dsZUJ1dHRvbk9uQmluZzogdHJ1ZSxcbiAgICBzaG93QmluZ0J1dHRvbk9uR29vZ2xlOiB0cnVlLFxuICAgIHNob3dHdWlkZVRvR2l0aHViOiB0cnVlLFxuICAgIHNob3dDaGF0OiB0cnVlLFxuICAgIHRyaWdnZXJNb2RlOiAnQWx3YXlzJyxcbiAgICBjb252ZXJzYXRpb25TdHlsZTogJ0JhbGFuY2VkJyxcbiAgICAuLi5jb25maWdcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Q29uZmlnID0gYXN5bmMgKHZhbHVlczogUGFydGlhbDxDb25maWc+KSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGdldENvbmZpZygpXG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICBbQ09ORklHX0tFWV06IHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIC4uLnZhbHVlc1xuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGVzY2FwZUh0bWwgPSAoczogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIFN0cmluZyhzKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXFwvL2csICcmI3gyZjsnKVxufVxuXG50eXBlIElNZXRob2RzID0gUmVjb3JkPHN0cmluZywgKC4uLmFyZ3M6IGFueVtdKSA9PiBQcm9taXNlPGFueT4+XG5leHBvcnQgY29uc3QgcmVnaXN0cnlMaXN0ZW5lciA9IChjYWxsTWV0aG9kczogSU1ldGhvZHMpID0+IHtcbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXEsIF9zZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIDsoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gaWYgbm90IHJldHVybiB0cnVlIGltbWVkaWF0ZWx5XHVGRjBDd2lsbCB0aHJvdyBlcnJvciBgVW5jaGVja2VkIHJ1bnRpbWUubGFzdEVycm9yOiBUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuYFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBtZXRob2QsIGFyZ3MgfSA9IHJlcVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbE1ldGhvZHNbbWV0aG9kXSguLi5hcmdzKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBjb2RlOiAyMDAsIG1zZzogJ29rJywgZGF0YSB9KVxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGUgPz8ge31cbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgY29kZTogNTAwLCBtc2c6IGVyci5zdGFjayA/PyBlcnIubWVzc2FnZSA/PyBlIH0pXG4gICAgICB9XG4gICAgfSkoKVxuICAgIHJldHVybiB0cnVlXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjYWxsQmFja2dyb3VuZCA9IGFzeW5jIDxUID0gYW55PihtZXRob2Q6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IFByb21pc2U8VD4gPT4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgICAge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGFyZ3M6IFsuLi5hcmdzXVxuICAgICAgfSxcbiAgICAgIChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMgfHwgcmVzLmNvZGUgIT09IDIwMCkge1xuICAgICAgICAgIHJlamVjdChyZXM/Lm1zZylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbG9jYWxDYWNoZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHYgPSAndjEnXG4gIHJldHVybiB7XG4gICAgZ2V0OiBhc3luYyA8VCA9IGFueT4oa2V5OiBzdHJpbmcpOiBQcm9taXNlPG51bGwgfCBUPiA9PiB7XG4gICAgICBrZXkgPSBgJHt2fToke2tleX1gXG4gICAgICBjb25zdCB7IGRhdGEsIG1heEFnZSwgbGFzdE1vZGlmaWVkIH0gPSAoYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSkpPy5ba2V5XSA/PyB7fVxuICAgICAgaWYgKERhdGUubm93KCkgLSBsYXN0TW9kaWZpZWQgPiBtYXhBZ2UgKiAxMDAwKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXkpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0sXG5cbiAgICBzZXQ6IGFzeW5jIDxUID0gb2JqZWN0PihrZXk6IHN0cmluZywgZGF0YTogVCwgbWF4QWdlOiBudW1iZXIgPSBJbmZpbml0eSAvKiBcdTUzNTVcdTRGNERcdTc5RDIgKi8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIGtleSA9IGAke3Z9OiR7a2V5fWBcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCksXG4gICAgICAgICAgbWF4QWdlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSgpXG5cbmV4cG9ydCBjb25zdCB0b0RhdGFVcmwgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKGFzeW5jIChyKSA9PiBhd2FpdCByLmJsb2IoKSlcbiAgICAgIC50aGVuKChibG9iKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpXG4gICAgICB9KVxuICB9KVxufVxuXG5jb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50XG5jb25zdCB1c2VyQWdlbnREYXRhID0gKG5hdmlnYXRvciBhcyBhbnkpLnVzZXJBZ2VudERhdGFcblxuZXhwb3J0IGNvbnN0IGlzTWFjID0gdXNlckFnZW50LmluY2x1ZGVzKCdNYWNpbnRvc2gnKVxuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9IHVzZXJBZ2VudC5pbmNsdWRlcygnRmlyZWZveCcpXG5leHBvcnQgY29uc3QgaXNFZGdlID0gdXNlckFnZW50LmluY2x1ZGVzKCdFZGcvJylcbmV4cG9ydCBjb25zdCBpc0JyYXZlID0gdXNlckFnZW50RGF0YT8uYnJhbmRzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5icmFuZCA9PT0gJ0JyYXZlJykgPiAtMVxuZXhwb3J0IGNvbnN0IGlzQ2hpbmVzZSA9IGNoZWNrSXNDaGluZXNlKClcbmV4cG9ydCBjb25zdCBpc1NpbXBsZUNoaW5lc2UgPSBjaGVja0lzU2ltcGxlQ2hpbmVzZSgpXG5leHBvcnQgY29uc3QgaXNDYW5hcnk6IGJvb2xlYW4gPSAhIWdsb2JhbFRoaXMuX19OQkFfaXNDYW5hcnlcbmV4cG9ydCBjb25zdCB2ZXJzaW9uOiBzdHJpbmcgPSBpc0NhbmFyeSA/IGAwLiR7cGtnVmVyc2lvbn1gIDogcGtnVmVyc2lvblxuXG5leHBvcnQgY29uc3QgZ2VuVUEgPSAoKSA9PiB7XG4gIGxldCB1YSA9IHVzZXJBZ2VudFxuICBpZiAoIWlzRWRnZSkge1xuICAgIGlmIChpc01hYykge1xuICAgICAgdWEgPSBgTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLyR7TUFJTl9WRVJTSU9OfS4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8ke0ZVTExfVkVSU0lPTn1gXG4gICAgfSBlbHNlIHtcbiAgICAgIHVhID0gYE1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8ke01BSU5fVkVSU0lPTn0uMC4wLjAgU2FmYXJpLzUzNy4zNiBFZGcvJHtGVUxMX1ZFUlNJT059YFxuICAgIH1cbiAgfVxuICByZXR1cm4gdWFcbn1cblxuZXhwb3J0IGNvbnN0IGdlbklzc3VlVXJsID0gYXN5bmMgKGV4dHJhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4pID0+IHtcbiAgY29uc3QgcmVwb3NpdG9yeVVybDogc3RyaW5nID0gcmVwb3NpdG9yeS51cmxcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKVxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gYCR7cmVwb3NpdG9yeVVybH0vaXNzdWVzL25ldz90aXRsZT0mYm9keT1gXG4gICAgbGV0IGZpbmFsVXJsOiBzdHJpbmcgPSB1cmxcbiAgICBsZXQgY29tbWVudCA9XG4gICAgICAnUGxlYXNlIHdyaXRlIHlvdXIgY29tbWVudCBBQk9WRSB0aGlzIGxpbmUsIHByb3ZpZGUgYXMgbXVjaCBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhbmQgc2NyZWVuc2hvdHMgYXMgcG9zc2libGUuJyArXG4gICAgICAnVGhlIFVBIG1heSBub3QgbmVjZXNzYXJpbHkgcmVmbGVjdCB5b3VyIGFjdHVhbCBicm93c2VyIGFuZCBwbGF0Zm9ybSwgc28gcGxlYXNlIG1ha2Ugc3VyZSB0byBpbmRpY2F0ZSB0aGVtIGNsZWFybHkuJ1xuICAgIGlmIChpc0NoaW5lc2UpIHtcbiAgICAgIGNvbW1lbnQgPSAnXHU4QkY3XHU1NzI4XHU2QjY0XHU4ODRDXHU0RTBBXHU2NUI5XHU1M0QxXHU4ODY4XHU2MEE4XHU3Njg0XHU4QkE4XHU4QkJBXHUzMDAyXHU4QkU2XHU1QzNEXHU3Njg0XHU2M0NGXHU4RkYwXHU1NDhDXHU2MjJBXHU1NkZFXHU2NzA5XHU1MkE5XHU0RThFXHU2MjExXHU0RUVDXHU1QjlBXHU0RjREXHU5NUVFXHU5ODk4XHVGRjBDVUEgXHU0RTBEXHU0RTAwXHU1QjlBXHU3NzFGXHU1QjlFXHU1M0NEXHU2NjIwXHU2MEE4XHU3Njg0XHU2RDRGXHU4OUM4XHU1NjY4XHU1NDhDXHU1RTczXHU1M0YwXHVGRjBDXHU4QkY3XHU1OTA3XHU2Q0U4XHU2RTA1XHU2OTVBJ1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPVxuICAgICAgJyBcXG5cXG5cXG5cXG4nICtcbiAgICAgIGA8IS0tICAke2NvbW1lbnR9IC0tPlxcbmAgK1xuICAgICAgT2JqZWN0LmVudHJpZXM8c3RyaW5nPih7XG4gICAgICAgIFZlcnNpb246IGAke3ZlcnNpb259JHtpc0NhbmFyeSA/ICcgKENhbmFyeSknIDogJyd9IGAsXG4gICAgICAgIFVBOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICBMYW5nOiBjaHJvbWUuaTE4bi5nZXRVSUxhbmd1YWdlKCksXG4gICAgICAgIEFjY2VwdExhbmdzOiAoYXdhaXQgY2hyb21lLmkxOG4uZ2V0QWNjZXB0TGFuZ3VhZ2VzKCkpLmpvaW4oJywgJyksXG4gICAgICAgIGNvbmZpZzogSlNPTi5zdHJpbmdpZnkoY29uZmlnKSxcbiAgICAgICAgLi4uZXh0cmFcbiAgICAgIH0pXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICByZXR1cm4gdmFsID8gYCR7a2V5fTogJHt2YWx9YCA6ICcnXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCdcXG4nKVxuXG4gICAgZmluYWxVcmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGJvZHkuc2xpY2UoMCwgMjAwMCkpXG4gICAgcmV0dXJuIGZpbmFsVXJsXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiByZXBvc2l0b3J5VXJsXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBnZXRBbGxUYWJzLCBscywgdW5pcXVlIH0gZnJvbSAnQEAvdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBkdW1wVGFicyA9IGFzeW5jICh7IHdpbmRvd0lkIH0pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgQVBQX1VSTCA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXBwL2luZGV4Lmh0bWwnKVxuXG4gIGNvbnN0IFtjdXJyZW50VGFicywgW2N1cnJlbnRUYWJdXSA9IGF3YWl0IFByb21pc2UuYWxsKFtnZXRBbGxUYWJzKCksIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pXSlcblxuICBhd2FpdCBscy5zZXQoJ2N1cnJlbnRUYWJzJywgdW5pcXVlKGN1cnJlbnRUYWJzLCAndXJsJykpXG5cbiAgY29uc3QgdGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHtcbiAgICB1cmw6IEFQUF9VUkwsXG4gICAgd2luZG93SWRcbiAgfSlcblxuICBsZXQgQXBwVGFiID0gdGFicy5maW5kKCh0YWIpID0+IHRhYi51cmwgPT09IEFQUF9VUkwpXG4gIGlmIChBcHBUYWIgPT0gbnVsbCkge1xuICAgIEFwcFRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogQVBQX1VSTCB9KVxuICB9XG5cbiAgaWYgKEFwcFRhYi5pZCAhPSBudWxsKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW2Nocm9tZS50YWJzLm1vdmUoQXBwVGFiLmlkLCB7IGluZGV4OiAwIH0pLCBjaHJvbWUudGFicy51cGRhdGUoQXBwVGFiLmlkLCB7IGFjdGl2ZTogdHJ1ZSwgcGlubmVkOiB0cnVlIH0pXSlcbiAgfVxuXG4gIGNvbnN0IG9wZW5lZFRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IHdpbmRvd0lkIH0pXG5cbiAgb3BlbmVkVGFicy5mb3JFYWNoKGFzeW5jICh0YWIpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRhYi5pZCA9PSBudWxsKSByZXR1cm5cbiAgICAgIGlmICh0YWIudXJsID09IG51bGwpIHJldHVyblxuICAgICAgaWYgKFsnY2hyb21lOi8vbmV3dGFiLyddLmluY2x1ZGVzKHRhYi51cmwpKSB7XG4gICAgICAgIGF3YWl0IGNocm9tZS50YWJzLnJlbW92ZSh0YWIuaWQpXG4gICAgICB9XG4gICAgICBpZiAodGFiLmlkID09PSBBcHBUYWI/LmlkKSByZXR1cm5cbiAgICAgIGlmICh0YWIucGlubmVkKSByZXR1cm5cbiAgICAgIGlmICh0YWIuYXVkaWJsZSA9PT0gdHJ1ZSkgcmV0dXJuXG4gICAgICBpZiAodGFiLmhpZ2hsaWdodGVkKSByZXR1cm5cbiAgICAgIGlmICh0YWIuYWN0aXZlKSByZXR1cm5cblxuICAgICAgaWYgKHRhYi5pZCA9PT0gY3VycmVudFRhYi5pZCkgcmV0dXJuXG5cbiAgICAgIGF3YWl0IGNocm9tZS50YWJzLnJlbW92ZSh0YWIuaWQpXG4gICAgfSBjYXRjaCB7fVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VVJMID0gKHVybDogc3RyaW5nID0gJycsIGJhc2U/OiBzdHJpbmcpOiBVUkwgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCwgYmFzZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZSlcbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoUGFyYW1zOiB7XG4gICAgICAgIGdldDogKCkgPT4gbnVsbFxuICAgICAgfVxuICAgIH0gYXMgYW55XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFVSTFNlYXJjaFBhcmFtcyA9ICh1cmw6IHN0cmluZyk6IFVSTFNlYXJjaFBhcmFtcyA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiAoKSA9PiBudWxsXG4gICAgfSBhcyBhbnlcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3BlblBhZ2UgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPGNocm9tZS50YWJzLlRhYj4gPT4ge1xuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlIH0pXG5cbiAgY29uc3QgdXJsT2JqID0gZ2V0VVJMKHVybClcbiAgbGV0IHRhYiA9IHRhYnMuZmluZCgodGFiKSA9PiB0YWIudXJsPy5zdGFydHNXaXRoKHVybE9iai5vcmlnaW4pKVxuXG4gIGlmICh0YWIgPT0gbnVsbCkge1xuICAgIHRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybCB9KVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgW1xuICAgICAgICBjaHJvbWUudGFicy5tb3ZlKHRhYi5pZCEsIHsgaW5kZXg6IHRhYnMubGVuZ3RoIC0gMSB9KSxcbiAgICAgICAgdGFiLnVybCAhPT0gdXJsICYmIGNocm9tZS50YWJzLnVwZGF0ZSh0YWIuaWQhLCB7IHVybCB9KSxcbiAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCEsIHsgYWN0aXZlOiB0cnVlLCB1cmw6IHRhYi51cmwgIT09IHVybCA/IHVybCA6IHVuZGVmaW5lZCB9KVxuICAgICAgXS5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cbiAgcmV0dXJuIHRhYlxufVxuXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gYXN5bmMgKG9wdGlvbnM6IGNocm9tZS5jb29raWVzLlNldERldGFpbHMsIGNvb2tpZTogY2hyb21lLmNvb2tpZXMuQ29va2llID0ge30gYXMgYW55KSA9PiB7XG4gIHJldHVybiBhd2FpdCBjaHJvbWUuY29va2llcy5zZXQoe1xuICAgIGRvbWFpbjogY29va2llLmRvbWFpbixcbiAgICBzdG9yZUlkOiBjb29raWUuc3RvcmVJZCxcbiAgICBwYXRoOiBjb29raWUucGF0aCxcbiAgICBodHRwT25seTogY29va2llLmh0dHBPbmx5LFxuICAgIHNlY3VyZTogY29va2llLnNlY3VyZSxcbiAgICBzYW1lU2l0ZTogY29va2llLnNhbWVTaXRlLFxuICAgIGV4cGlyYXRpb25EYXRlOiBjb29raWUuZXhwaXJhdGlvbkRhdGUsXG4gICAgLi4ub3B0aW9uc1xuICB9KVxufVxuIiwgImltcG9ydCB7IGdlbklzc3VlVXJsLCBpc0NoaW5lc2UgfSBmcm9tICdAQC91dGlscydcbmltcG9ydCB7IG9wZW5QYWdlIH0gZnJvbSAnLi91dGlscydcbi8vIGNvbnN0IHJlcG9zaXRvcnlVcmw6IHN0cmluZyA9IHJlcG9zaXRvcnkudXJsXG5cbnR5cGUgQ29udGV4dHMgPSBjaHJvbWUuY29udGV4dE1lbnVzLkNvbnRleHRUeXBlW11cbmludGVyZmFjZSBJSW5pdENvbnRleHRNZW51IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZXh0czogQ29udGV4dHNcbiAgb25jbGljazogKGluZm86IGNocm9tZS5jb250ZXh0TWVudXMuT25DbGlja0RhdGEsIHRhYjogY2hyb21lLnRhYnMuVGFiIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG59XG5cbmNvbnN0IGNvbnRleHRNZW51czogUmVjb3JkPHN0cmluZywgSUluaXRDb250ZXh0TWVudT4gPSB7XG4gIC8vIHZlcnNpb246IHtcbiAgLy8gICB0aXRsZTogYFx1RDgzRVx1RERDMyBWZXJzaW9uOiAke3ZlcnNpb259YCxcbiAgLy8gICBjb250ZXh0czogWydhY3Rpb24nXSxcbiAgLy8gICBvbmNsaWNrOiAoKSA9PiB7XG4gIC8vICAgICBvcGVuUGFnZShgJHtyZXBvc2l0b3J5VXJsfS9yZWxlYXNlcy90YWcvJHt2ZXJzaW9ufWApXG4gIC8vICAgfVxuICAvLyB9LFxuICBvcGVuQ2hhdDoge1xuICAgIHRpdGxlOiAnXHVEODNEXHVEQ0FDIE5ldyBCaW5nJyxcbiAgICBjb250ZXh0czogWydhY3Rpb24nXSxcbiAgICBvbmNsaWNrOiAoX2luZm8pID0+IHtcbiAgICAgIG9wZW5QYWdlKCdodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT1CaW5nK0FJJnNob3djb252PTEnKVxuICAgIH1cbiAgfSxcblxuICBvcGVuSW1hZ2VDcmVhdGU6IHtcbiAgICB0aXRsZTogJ1x1RDgzRFx1RERCQ1x1RkUwRiBOZXcgQmluZyBJbWFnZSBDcmVhdG9yJyxcbiAgICBjb250ZXh0czogWydhY3Rpb24nXSxcbiAgICBvbmNsaWNrOiAoX2luZm8pID0+IHtcbiAgICAgIG9wZW5QYWdlKCdodHRwczovL3d3dy5iaW5nLmNvbS9jcmVhdGUnKVxuICAgIH1cbiAgfSxcblxuICBsaWtlSXQ6IHtcbiAgICB0aXRsZTogJ1x1Mjc2NFx1RkUwRiBMaWtlIGl0JyxcbiAgICBjb250ZXh0czogWydhY3Rpb24nXSxcbiAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICBvcGVuUGFnZSgnaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbmV3LWJpbmctYW55d2hlcmUvaGNlb2Joam9rcGRib2dqa3BsbWZqZW9ta2Vja2tuZ2kvcmV2aWV3cycpXG4gICAgfVxuICB9LFxuXG4gIHJlcG9ydElzc3Vlczoge1xuICAgIHRpdGxlOiBpc0NoaW5lc2UgPyAnXHVEODNEXHVEQzFCIFx1NTNDRFx1OTk4OFx1NUVGQVx1OEJBRScgOiAnXHVEODNEXHVEQzFCIFJlcG9ydCBpc3N1ZXMnLFxuICAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAgIG9uY2xpY2s6IGFzeW5jIChfaW5mbykgPT4ge1xuICAgICAgY29uc3QgdXJsID0gYXdhaXQgZ2VuSXNzdWVVcmwoKVxuXG4gICAgICBvcGVuUGFnZSh1cmwpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2hyb21lLmNvbnRleHRNZW51cy5yZW1vdmVBbGwoKCkgPT4ge1xuICAgIGZvciAoY29uc3QgW2lkLCBtZW51XSBvZiBPYmplY3QuZW50cmllcyhjb250ZXh0TWVudXMpKSB7XG4gICAgICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZTogbWVudS50aXRsZSxcbiAgICAgICAgY29udGV4dHM6IG1lbnUuY29udGV4dHNcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKChpbmZvLCB0YWIpID0+IHtcbiAgICBjb25zdCB7IG1lbnVJdGVtSWQgfSA9IGluZm9cbiAgICBjb25zdCBpdGVtID0gY29udGV4dE1lbnVzW21lbnVJdGVtSWRdXG4gICAgaWYgKGl0ZW0/Lm9uY2xpY2spIGl0ZW0ub25jbGljayhpbmZvLCB0YWIpXG4gIH0pXG59XG4iLCAiY29uc3QgTUFYX0FHRSA9IDEwMDAgKiA2MCAqIDYwICogMSAvLyAxIGhvdXJcbmNvbnN0IEtFWSA9ICdub3RpZmljYXRpb24nXG5jb25zdCBGTEFHX0tFWSA9ICdub3RpZmljYXRpb246aGlkZSdcbmNvbnN0IGdldFJlbW90ZU5vdGlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgLy8gY29uc29sZS5sb2coJ2dldFJlbW90ZU5vdGlmaWNhdGlvbicpXG4gIGxldCBkYXRhXG4gIHRyeSB7XG4gICAgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2hhb3ppL05ldy1CaW5nLUFueXdoZXJlL2lzc3Vlcy8yNCcpLnRoZW4oYXN5bmMgKHJlcykgPT4gYXdhaXQgcmVzLmpzb24oKSlcbiAgfSBjYXRjaCB7fVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Tm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IFtLRVldOiBvbGREYXRhIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoS0VZKVxuXG4gIGlmICghb2xkRGF0YSB8fCAob2xkRGF0YS5sYXN0TW9kaWZ5ICYmIERhdGUubm93KCkgLSBvbGREYXRhLmxhc3RNb2RpZnkgPiBNQVhfQUdFKSkge1xuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShLRVkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFJlbW90ZU5vdGlmaWNhdGlvbigpXG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW0tFWV06IHsgZGF0YSwgbGFzdE1vZGlmeTogRGF0ZS5ub3coKSB9IH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgeyBbRkxBR19LRVldOiBmbGFnLCBbS0VZXTogbmV3RGF0YSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtGTEFHX0tFWSwgS0VZXSlcblxuICBpZiAoIW5ld0RhdGE/LmRhdGEpIHJldHVybiBudWxsXG4gIGlmICghKG5ld0RhdGEuZGF0YS50aXRsZSAmJiBuZXdEYXRhLmRhdGEuc3RhdGUgPT09ICdvcGVuJykpIHJldHVybiBudWxsXG4gIGlmIChmbGFnID09PSAxICYmIG5ld0RhdGEuZGF0YS50aXRsZSA9PT0gb2xkRGF0YS5kYXRhPy50aXRsZSkgcmV0dXJuIG51bGxcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKEZMQUdfS0VZKVxuICByZXR1cm4gbmV3RGF0YS5kYXRhXG59XG5cbmV4cG9ydCBjb25zdCBoaWRlTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbRkxBR19LRVldOiAxIH0pXG59XG4iLCAiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJ0BAL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0VVJMIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBnZXROb3RpZmljYXRpb24sIGhpZGVOb3RpZmljYXRpb24gfSBmcm9tICcuL19ub3RpZmljYXRpb24nXG5cbmNvbnN0IGdldEVudiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uXG4gIH1cbn1cblxuY29uc3Qgb3BlblVybEluU2FtZVRhYiA9IGFzeW5jICh7IHVybCB9OiB7IHVybDogc3RyaW5nIH0gPSB7fSBhcyBhbnkpID0+IHtcbiAgY29uc3QgdGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSB9KVxuICBjb25zdCB1cmxPYmogPSBnZXRVUkwodXJsKVxuICBsZXQgdGFiID0gdGFicy5maW5kKCh0YWIpID0+IHRhYi51cmw/LnN0YXJ0c1dpdGgodXJsT2JqLm9yaWdpbikpXG4gIGlmICh0YWIgPT0gbnVsbCkge1xuICAgIHRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybCB9KVxuICB9IGVsc2Uge1xuICAgIGlmICh0YWIuaWQgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW2Nocm9tZS50YWJzLm1vdmUodGFiLmlkLCB7IGluZGV4OiB0YWJzLmxlbmd0aCAtIDEgfSksIGNocm9tZS50YWJzLnVwZGF0ZSh0YWIuaWQsIHsgYWN0aXZlOiB0cnVlIH0pXSlcbiAgICB9XG4gIH1cblxuICBsZXQgbmV3VXJsID0gdXJsXG4gIGxldCBxdWVyeSA9ICcnXG4gIGxldCB0YWJRdWVyeSA9ICcnXG4gIGNvbnN0IGlzR29vZ2xlID0gdXJsT2JqLmhvc3RuYW1lID09PSAnd3d3Lmdvb2dsZS5jb20nXG4gIGNvbnN0IGlzQmluZyA9IHVybE9iai5ob3N0bmFtZSA9PT0gJ3d3dy5iaW5nLmNvbSdcbiAgaWYgKGlzR29vZ2xlKSB7XG4gICAgcXVlcnkgPSB1cmxPYmouc2VhcmNoUGFyYW1zLmdldCgncScpID8/ICcnXG4gICAgdGFiUXVlcnkgPSBnZXRVUkwodGFiLnVybCkuc2VhcmNoUGFyYW1zLmdldCgncScpID8/ICcnXG4gICAgZ2V0VVJMKHRhYi51cmwpLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKVxuICB9IGVsc2UgaWYgKGlzQmluZykge1xuICAgIHF1ZXJ5ID0gdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSA/PyAnJ1xuICAgIHRhYlF1ZXJ5ID0gZ2V0VVJMKHRhYi51cmwpLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSA/PyAnJ1xuICB9XG5cbiAgcXVlcnkgPSBxdWVyeS50cmltKClcbiAgdGFiUXVlcnkgPSB0YWJRdWVyeS50cmltKClcblxuICBpZiAocXVlcnkgJiYgcXVlcnkgPT09IHRhYlF1ZXJ5KSByZXR1cm4gLy8gXHU0RTBEXHU1MjM3XHU2NUIwXHU5ODc1XHU5NzYyXG5cbiAgaWYgKGlzR29vZ2xlKSB7XG4gICAgbmV3VXJsID0gYCR7dXJsT2JqLm9yaWdpbn0ke3VybE9iai5wYXRobmFtZX0/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YFxuICB9IGVsc2UgaWYgKGlzQmluZykge1xuICAgIG5ld1VybCA9IGAke3VybE9iai5vcmlnaW59JHt1cmxPYmoucGF0aG5hbWV9P3E9JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnkpfWBcbiAgICAvLyBuZXdVcmwgPSBgJHt1cmxPYmoub3JpZ2lufSR7dXJsT2JqLnBhdGhuYW1lfT9xPSR7cXVlcnl9JnNob3djb252PTFgXG4gIH1cblxuICBhd2FpdCBjaHJvbWUudGFicy51cGRhdGUodGFiLmlkISwgeyB1cmw6IG5ld1VybCB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEVudixcbiAgb3BlblVybEluU2FtZVRhYixcblxuICBnZXROb3RpZmljYXRpb24sXG4gIGhpZGVOb3RpZmljYXRpb25cbn1cbiIsICJpbXBvcnQgeyBCQU5EX01LVFMsIEJJTkcgfSBmcm9tICdAQC9jb25zdGFudHMnXG5pbXBvcnQgeyBpc0NhbmFyeSwgcmVnaXN0cnlMaXN0ZW5lciwgdmVyc2lvbiB9IGZyb20gJ0BAL3V0aWxzJ1xuXG5pbXBvcnQgeyByZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xuaW1wb3J0IGluaXRDb250ZXh0TWVudSBmcm9tICcuL2NvbnRleHRfbWVudXMnXG5pbXBvcnQgbGlzdGVuZXJzIGZyb20gJy4vbGlzdGVuZXJzJ1xuaW1wb3J0IHsgZ2V0VVJMU2VhcmNoUGFyYW1zLCBvcGVuUGFnZSwgc2V0Q29va2llIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBpbml0Q29udGV4dE1lbnUoKVxuICByZWdpc3RyeUxpc3RlbmVyKGxpc3RlbmVycylcblxuICBjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoZGV0YWlscykgPT4ge1xuICAgIGNvbnN0IHJlcG9zaXRvcnlVcmw6IHN0cmluZyA9IHJlcG9zaXRvcnkudXJsXG4gICAgLy8gY29uc3QgZGVidWd1cmwgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9RWRnZSUyMCVFNCVCOCU4QiVFOCVCRCVCRCZzaG93Y29udj0xJkZPUk09aHBjb2R4J1xuICAgIC8vIGlmIChkZWJ1Z3VybCkge1xuICAgIC8vICAgb3BlblBhZ2UoZGVidWd1cmwpXG4gICAgLy8gICByZXR1cm5cbiAgICAvLyB9XG4gICAgaWYgKGlzQ2FuYXJ5KSB7XG4gICAgICBvcGVuUGFnZShgJHtyZXBvc2l0b3J5VXJsfS90cmVlL2NhbmFyeWApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGRldGFpbHMucmVhc29uID09PSAnaW5zdGFsbCcpIHtcbiAgICAgIG9wZW5QYWdlKHJlcG9zaXRvcnlVcmwpXG4gICAgfSBlbHNlIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIG9wZW5QYWdlKGAke3JlcG9zaXRvcnlVcmx9L3JlbGVhc2VzL3RhZy92JHt2ZXJzaW9ufWApXG4gICAgfVxuICB9KVxuXG4gIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbiAgICAoKSA9PiB7XG4gICAgICBjaHJvbWUuY29va2llcy5nZXQoXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnX0VER0VfUycsXG4gICAgICAgICAgdXJsOiBCSU5HXG4gICAgICAgIH0sXG4gICAgICAgIChjb29raWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvb2tpZT8udmFsdWVcbiAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm5cblxuICAgICAgICAgIGNvbnN0IHZhbHVlT2JqID0gZ2V0VVJMU2VhcmNoUGFyYW1zKHZhbHVlKVxuICAgICAgICAgIGNvbnN0IG1rdCA9IHZhbHVlT2JqLmdldCgnbWt0Jyk/LnRvTG93ZXJDYXNlKCkgPz8gJydcblxuICAgICAgICAgIGlmICghQkFORF9NS1RTLm1hcCgobSkgPT4gbS50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyhta3QpKSByZXR1cm5cbiAgICAgICAgICBpZiAobWt0ID09PSAnemgtY24nKSB7XG4gICAgICAgICAgICB2YWx1ZU9iai5zZXQoJ21rdCcsICd6aC1ISycpXG4gICAgICAgICAgICB2YWx1ZU9iai5zZXQoJ3VpJywgJ3poLWhhbnMnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZU9iai5kZWxldGUoJ21rdCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0Q29va2llKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmw6IEJJTkcsXG4gICAgICAgICAgICAgIG5hbWU6IGNvb2tpZS5uYW1lLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVPYmoudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvb2tpZVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBjaHJvbWUuY29va2llcy5nZXQoXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnX1J3QmYnLFxuICAgICAgICAgIHVybDogQklOR1xuICAgICAgICB9LFxuICAgICAgICAoY29va2llKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBjb29raWU/LnZhbHVlXG4gICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgc2V0Q29va2llKHtcbiAgICAgICAgICAgICAgdXJsOiBCSU5HLFxuICAgICAgICAgICAgICBuYW1lOiAnX1J3QmYnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ3dscz0yJyxcbiAgICAgICAgICAgICAgZG9tYWluOiAnLmJpbmcuY29tJyxcbiAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB2YWx1ZU9iaiA9IGdldFVSTFNlYXJjaFBhcmFtcyh2YWx1ZSlcbiAgICAgICAgICBjb25zdCB3bHMgPSB2YWx1ZU9iai5nZXQoJ3dscycpXG4gICAgICAgICAgaWYgKHdscyAhPT0gJzInICYmIHdscyAhPT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlT2JqLnNldCgnd2xzJywgJzInKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRDb29raWUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybDogQklORyxcbiAgICAgICAgICAgICAgbmFtZTogJ19Sd0JmJyxcbiAgICAgICAgICAgICAgZG9tYWluOiAnLmJpbmcuY29tJyxcbiAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZU9iai50b1N0cmluZygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29va2llXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSxcbiAgICB7IHVybHM6IFtCSU5HICsgJyonXSwgdHlwZXM6IFsnbWFpbl9mcmFtZSddIH1cbiAgKVxufVxuIiwgImltcG9ydCB7IEFMTF9SRVNPVVJDRV9UWVBFUyB9IGZyb20gJ0BAL2NvbnN0YW50cydcblxuaW1wb3J0IHsgZ2VuVUEgfSBmcm9tICdAQC91dGlscydcblxuY29uc3QgTU9ESUZZX0hFQURFUlNfTElTVCA9IHtcbiAgLy8gJ1gtRm9yd2FyZGVkLUZvcic6ICc4LjguOC44JyxcbiAgJ1VzZXItQWdlbnQnOiBnZW5VQSgpXG59XG5jb25zdCBNT0RJRllfSEVBREVSUyA9ICdtb2RpZnlIZWFkZXJzJyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJ1bGVBY3Rpb25UeXBlLk1PRElGWV9IRUFERVJTXG4vLyBjb25zdCBSRURJUkVDVCA9ICdyZWRpcmVjdCcgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5SdWxlQWN0aW9uVHlwZS5SRURJUkVDVFxuLy8gY29uc3QgQVBQRU5EID0gJ2FwcGVuZCcgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5IZWFkZXJPcGVyYXRpb24uQVBQRU5EXG4vLyBjb25zdCBSRU1PVkUgPSAncmVtb3ZlJyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LkhlYWRlck9wZXJhdGlvbi5SRU1PVkVcbmNvbnN0IFNFVCA9ICdzZXQnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuSGVhZGVyT3BlcmF0aW9uLlNFVFxuXG5leHBvcnQgY29uc3QgZHluYW1pY1J1bGVzID0gW1xuICB7XG4gICAgcHJpb3JpdHk6IDIwMDEsXG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBNT0RJRllfSEVBREVSUyxcbiAgICAgIHJlcXVlc3RIZWFkZXJzOiBPYmplY3QuZW50cmllcyhNT0RJRllfSEVBREVSU19MSVNUKS5tYXAoKFtoZWFkZXIsIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgb3BlcmF0aW9uOiBTRVQsXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICByZXF1ZXN0RG9tYWluczogWydiaW5nLmNvbScsICd3d3cuYmluZy5jb20nLCAnY24uYmluZy5jb20nXSxcbiAgICAgIHJlc291cmNlVHlwZXM6IEFMTF9SRVNPVVJDRV9UWVBFU1xuICAgIH1cbiAgfVxuXVxuICAuZmlsdGVyKEJvb2xlYW4pXG4gIC5tYXAoKHJ1bGUsIGluZGV4KSA9PiAoe1xuICAgIGlkOiBpbmRleCArIDEgKyAyMDAwLFxuICAgIC4uLnJ1bGVcbiAgfSkpIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuUnVsZVtdXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgaWYgKCFkeW5hbWljUnVsZXMubGVuZ3RoKSByZXR1cm5cblxuICBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LmdldER5bmFtaWNSdWxlcygoZFJ1bGVzKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coMTExLCBkUnVsZXMpXG4gICAgLy8gY29uc29sZS5sb2coMjIyLCBbLi4ubmV3IFNldChbLi4ucnVsZXMubWFwKChydWxlKSA9PiBydWxlLmlkKSwgLi4uZFJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZS5pZCldKV0pXG5cbiAgICBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LnVwZGF0ZUR5bmFtaWNSdWxlcyh7XG4gICAgICByZW1vdmVSdWxlSWRzOiBbLi4ubmV3IFNldChbLi4uZHluYW1pY1J1bGVzLm1hcCgocnVsZSkgPT4gcnVsZS5pZCksIC4uLmRSdWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGUuaWQpXSldLFxuICAgICAgYWRkUnVsZXM6IGR5bmFtaWNSdWxlc1xuICAgIH0pXG4gICAgLy8gLnRoZW4oKCkgPT4ge1xuICAgIC8vICAgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5nZXREeW5hbWljUnVsZXMoKGRSdWxlcykgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygzMzMsIGRSdWxlcylcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgfSlcblxuICAvLyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0Lm9uUnVsZU1hdGNoZWREZWJ1Zy5hZGRMaXN0ZW5lcigoLi4uYXJncykgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKDExMTEsIC4uLmFyZ3MpXG4gIC8vIH0pXG59XG4iLCAiaW1wb3J0IHsgQ05fUkVESVJFQ1RfVVJMIH0gZnJvbSAnQEAvY29uc3RhbnRzJ1xuaW1wb3J0IGNyb3NzUGxhdGZvcm0gZnJvbSAnLi9jcm9zc19wbGF0Zm9ybSdcbmltcG9ydCBpbml0RHluYW1pY1J1bGVzIGZyb20gJy4vZHluYW1pY19ydWxlcydcbmltcG9ydCB7IGlzU2ltcGxlQ2hpbmVzZSB9IGZyb20gJ0BAL3V0aWxzJ1xuXG5jcm9zc1BsYXRmb3JtKClcblxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKGRldGFpbHMpID0+IHtcbiAgaW5pdER5bmFtaWNSdWxlcygpXG59KVxuXG5pZiAoaXNTaW1wbGVDaGluZXNlKSB7XG4gIGNocm9tZS5ydW50aW1lLnNldFVuaW5zdGFsbFVSTChDTl9SRURJUkVDVF9VUkwpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFBTyxNQUFNLE9BQU87QUFDYixNQUFNLGtCQUFrQjtBQUN4QixNQUFNLFlBQVksQ0FBQyxTQUFTLE1BQU0sT0FBTztBQUV6QyxNQUFNLGVBQWU7QUFDckIsTUFBTSxlQUFlO0FBRXJCLE1BQU0scUJBQXFCO0FBQUEsSUFDaEM7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7OztBQ3JCRSxnQkFBVztBQUlYLG1CQUFjO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixLQUFPO0FBQUEsRUFDVDs7O0FDK0ZLLE1BQU0sdUJBQXVCLE1BQU07QUFDeEMsUUFBSTtBQUNGLFlBQU0sT0FBTyxPQUFPLEtBQUssY0FBYyxFQUFFLFlBQVk7QUFDckQsYUFBTyxTQUFTO0FBQUEsSUFDbEIsUUFBRTtBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUVP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QVMsU0FBUztBQUFBLGNBQzNCO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUU7QUFBQSxJQUM5QztBQUFBLEVBQ0Y7OztBQ2pHQSxNQUFNLHNCQUFzQjtBQUFBO0FBQUEsSUFFMUIsY0FBYyxNQUFNO0FBQUEsRUFDdEI7QUFDQSxNQUFNLGlCQUFpQjtBQUl2QixNQUFNLE1BQU07QUFFTCxNQUFNLGVBQWU7QUFBQSxJQUMxQjtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sZ0JBQWdCLE9BQU8sUUFBUSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssT0FBTztBQUFBLFVBQzVFLFdBQVc7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFFBQ0YsRUFBRTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULGdCQUFnQixDQUFDLFlBQVksZ0JBQWdCLGFBQWE7QUFBQSxRQUMxRCxlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRixFQUNHLE9BQU8sT0FBTyxFQUNkLElBQUksQ0FBQyxNQUFNLFdBQVc7QUFBQSxJQUNyQixJQUFJLFFBQVEsSUFBSTtBQUFBLElBQ2hCLEdBQUc7QUFBQSxFQUNMLEVBQUU7QUFFSixNQUFPLHdCQUFRLE1BQU07QUFDbkIsUUFBSSxDQUFDLGFBQWE7QUFBUTtBQUUxQixXQUFPLHNCQUFzQixnQkFBZ0IsQ0FBQyxXQUFXO0FBSXZELGFBQU8sc0JBQXNCLG1CQUFtQjtBQUFBLFFBQzlDLGVBQWUsQ0FBQyxHQUFHLG9CQUFJLElBQUksQ0FBQyxHQUFHLGFBQWEsSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLEdBQUcsR0FBRyxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUFBLFFBQ3RHLFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQSxJQU1ILENBQUM7QUFBQSxFQUtIOzs7QUNyREEseUJBQWM7QUFFZCxTQUFPLFFBQVEsWUFBWSxZQUFZLENBQUMsWUFBWTtBQUNsRCwwQkFBaUI7QUFBQSxFQUNuQixDQUFDO0FBRUQsTUFBSSxpQkFBaUI7QUFDbkIsV0FBTyxRQUFRLGdCQUFnQixlQUFlO0FBQUEsRUFDaEQ7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAidGFiIiwgInZlcnNpb24iLCAidGFiIiwgInZlcnNpb24iXQp9Cg==
