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
      showRelease: true,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3VuaXZlcnNlL2NvbnN0YW50cy50cyIsICIuLi8uLi9wYWNrYWdlLmpzb24iLCAiLi4vLi4vc3JjL3VuaXZlcnNlL3V0aWxzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL3V0aWxzLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2NvbnRleHRfbWVudXMudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL19ub3RpZmljYXRpb24udHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvbGlzdGVuZXJzL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2Nyb3NzX3BsYXRmb3JtLnRzIiwgIi4uLy4uL3NyYy9iYWNrZ3JvdW5kL2R5bmFtaWNfcnVsZXMudHMiLCAiLi4vLi4vc3JjL2JhY2tncm91bmQvY2hyb21pdW0udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBCSU5HID0gJ2h0dHBzOi8vd3d3LmJpbmcuY29tLydcbmV4cG9ydCBjb25zdCBDTl9SRURJUkVDVF9VUkwgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbS8nXG5leHBvcnQgY29uc3QgQkFORF9NS1RTID0gWyd6aC1DTicsICdydScsICdydS1ydSddXG5cbmV4cG9ydCBjb25zdCBNQUlOX1ZFUlNJT04gPSAnMTEzJ1xuZXhwb3J0IGNvbnN0IEZVTExfVkVSU0lPTiA9ICcxMTMuMC4xNzc0LjU3J1xuXG5leHBvcnQgY29uc3QgQUxMX1JFU09VUkNFX1RZUEVTID0gW1xuICAnY3NwX3JlcG9ydCcsXG4gICdmb250JyxcbiAgJ2ltYWdlJyxcbiAgJ21haW5fZnJhbWUnLFxuICAnbWVkaWEnLFxuICAnb2JqZWN0JyxcbiAgJ290aGVyJyxcbiAgJ3BpbmcnLFxuICAnc2NyaXB0JyxcbiAgJ3N0eWxlc2hlZXQnLFxuICAnc3ViX2ZyYW1lJyxcbiAgJ3dlYmJ1bmRsZScsXG4gICd3ZWJzb2NrZXQnLFxuICAnd2VidHJhbnNwb3J0JyxcbiAgJ3htbGh0dHByZXF1ZXN0J1xuXSBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJlc291cmNlVHlwZVtdXG4iLCAie1xuICBcIm5hbWVcIjogXCJuZXctYmluZy1hbnl3aGVyZVwiLFxuICBcInZlcnNpb25cIjogXCIyLjEuMFwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIGlzbid0IGp1c3QgZm9yIEVkZ2UgYW55bW9yZS4gQW55d2hlcmUgeW91IHdhbnRcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9oYW96aS9OZXctQmluZy1Bbnl3aGVyZVwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2hhb3ppL05ldy1CaW5nLUFueXdoZXJlXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiR1BMdjNcIixcbiAgXCJhdXRob3JcIjogXCJoYW96aVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJybSAtcmYgZGlzdCAmJiBta2RpciAtcCBkaXN0ICYmIHBucG0gcnVuIGxpbnQgJiYgcG5wbSBydW4gYnVpbGQ6YnVuZGxlXCIsXG4gICAgXCJidWlsZDpidW5kbGVcIjogXCJOT0RFX0VOVj1wcm9kdWN0aW9uIHZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGJ1aWxkXCIsXG4gICAgXCJjb3B5XCI6IFwicm0gLXJmIGRpc3QgJiYgY3AgLXIgcHVibGljIGRpc3RcIixcbiAgICBcImNvcHk6c29ydWNlXCI6IFwicnN5bmMgLXZocmEgLiBkaXN0L3NvdXJjZSAtLWluY2x1ZGU9JyoqLmdpdGlnbm9yZScgLS1leGNsdWRlPScvLmdpdCcgLS1leGNsdWRlPSdkaXN0JyAgLS1maWx0ZXI9JzotIC5naXRpZ25vcmUnIC0tZGVsZXRlLWFmdGVyXCIsXG4gICAgXCJjb3B5OndhdGNoXCI6IFwicG5wbSBydW4gY29weSAtLSAtLXdhdGNoXCIsXG4gICAgXCJkZXZcIjogXCJwbnBtIHJ1biBsaW50ICYmIHBucG0gcnVuICcvXmRldjouKi8nXCIsXG4gICAgXCJkZXY6YXBwXCI6IFwicG5wbSAtLWZpbHRlciBhcHAgcnVuIGRldlwiLFxuICAgIFwiZGV2OmJ1bmRsZVwiOiBcInZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGRldlwiLFxuICAgIFwibGludFwiOiBcInBucG0gcnVuIHByZXR0aWVyICYmIHBucG0gcnVuICcvXmxpbnQ6LiovJ1wiLFxuICAgIFwibGludDplc2xpbnRcIjogXCJlc2xpbnQgLS1leHQgLmpzLC50cyAuL3NyYyAtLWZpeCAtLWNhY2hlXCIsXG4gICAgXCJsaW50OnN0eWx1c1wiOiBcInN0eWx1cy1zdXByZW1hY3kgZm9ybWF0IC4vc3JjLyoqLyouc3R5bCAgLS1vcHRpb25zIC4vc3R5bHVzLXN1cHJlbWFjeS5qc29uIC0tcmVwbGFjZVwiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGwgJiYgcG5wbSBydW4gYnVpbGRcIixcbiAgICBcInByZXR0aWVyXCI6IFwicHJldHRpZXIgLS1jYWNoZSAtLXdyaXRlIC5cIixcbiAgICBcInByZXR0aWVyOndhdGNoXCI6IFwib25jaGFuZ2UgXFxcIioqLypcXFwiIC0tIHByZXR0aWVyIC0tY2FjaGUgLS13cml0ZSAtLWlnbm9yZS11bmtub3duIC0taWdub3JlLXBhdGggLnByZXR0aWVyaWdub3JlIHt7Y2hhbmdlZH19ID4gL2Rldi9udWxsIDI+JjFcIixcbiAgICBcInRlc3RcIjogXCJwbnBtIHJ1biBsaW50XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL3plcHRvXCI6IFwiXjEuMC4zM1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0eXBlcy9jaHJvbWVcIjogXCJeMC4wLjIzN1wiLFxuICAgIFwiQHR5cGVzL2ZzLWV4dHJhXCI6IFwiXjExLjAuMVwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMy4xXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl41LjYwLjBcIixcbiAgICBcImNvcHktYW5kLXdhdGNoXCI6IFwiXjAuMS42XCIsXG4gICAgXCJlc2J1aWxkXCI6IFwiXjAuMTguNlwiLFxuICAgIFwiZXNidWlsZC1wbHVnaW4tc3ZnclwiOiBcIl4yLjAuMFwiLFxuICAgIFwiZXNidWlsZC1zdHlsZS1wbHVnaW5cIjogXCJeMS42LjJcIixcbiAgICBcImVzbGludFwiOiBcIl44LjQzLjBcIixcbiAgICBcImVzbGludC1jb25maWctc3RhbmRhcmQtd2l0aC10eXBlc2NyaXB0XCI6IFwiXjM1LjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yNy41XCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLW5cIjogXCJeMTYuMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLW5vZGVcIjogXCJeMTEuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByZXR0aWVyXCI6IFwiXjQuMi4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByb21pc2VcIjogXCJeNi4xLjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4zMi4yXCIsXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4xLjFcIixcbiAgICBcImh1c2t5XCI6IFwiXjguMC4zXCIsXG4gICAgXCJtZDUtZmlsZVwiOiBcIl41LjAuMFwiLFxuICAgIFwib25jaGFuZ2VcIjogXCJeNy4xLjBcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjIuOC44XCIsXG4gICAgXCJzb3J0LXBhY2thZ2UtanNvblwiOiBcIl4yLjQuMVwiLFxuICAgIFwic3R5bHVzXCI6IFwiXjAuNTkuMFwiLFxuICAgIFwic3R5bHVzLXN1cHJlbWFjeVwiOiBcIl4yLjE3LjVcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4xLjNcIixcbiAgICBcInZpdGUtbm9kZVwiOiBcIl4wLjMyLjJcIlxuICB9LFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIl4yMC4zLjBcIixcbiAgICBcInBucG1cIjogXCJeOC42LjNcIlxuICB9LFxuICBcImV4dGVuc2lvbi1pMThuXCI6IHtcbiAgICBcImVuXCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiTmV3IEJpbmcgQ2hhdCBjYW4gYmUgdXNlZCBpbiBhbnkgYnJvd3Nlciwgd2l0aCBhbnkgc2VhcmNoIGVuZ2luZSwgYW5kIGluIGFueSBjb3VudHJ5LlwiXG4gICAgfSxcbiAgICBcInpoX0NOXCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiTmV3IEJpbmcgQ2hhdCBjYW4gYmUgdXNlZCBpbiBhbnkgYnJvd3Nlciwgd2l0aCBhbnkgc2VhcmNoIGVuZ2luZSwgYW5kIGluIGFueSBjb3VudHJ5LiBcdTk2OEZcdTY1RjZcdTk2OEZcdTU3MzBcdUZGMENcdTY3MDlcdTZDNDJcdTVGQzVcdTVFOTRcdTMwMDJcIlxuICAgIH0sXG4gICAgXCJ6aF9UV1wiOiB7XG4gICAgICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiLFxuICAgICAgXCJleHRlbnNpb25EZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIENoYXQgY2FuIGJlIHVzZWQgaW4gYW55IGJyb3dzZXIsIHdpdGggYW55IHNlYXJjaCBlbmdpbmUsIGFuZCBpbiBhbnkgY291bnRyeS4gXHU5NkE4XHU2NjQyXHU5NkE4XHU1NzMwXHVGRjBDXHU2NzA5XHU2QzQyXHU1RkM1XHU2MUM5XCJcbiAgICB9LFxuICAgIFwicnVcIjoge1xuICAgICAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIixcbiAgICAgIFwiZXh0ZW5zaW9uRGVzY3JpcHRpb25cIjogXCJcdTA0MjdcdTA0MzBcdTA0NDIgTmV3IEJpbmcgXHUwNDNDXHUwNDNFXHUwNDM2XHUwNDM1XHUwNDQyIFx1MDQzOFx1MDQ0MVx1MDQzRlx1MDQzRVx1MDQzQlx1MDQ0Q1x1MDQzN1x1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0Q1x1MDQ0MVx1MDQ0RiBcdTA0MzIgXHUwNDNCXHUwNDRFXHUwNDMxXHUwNDNFXHUwNDNDIFx1MDQzMVx1MDQ0MFx1MDQzMFx1MDQ0M1x1MDQzN1x1MDQzNVx1MDQ0MFx1MDQzNSwgXHUwNDQxIFx1MDQzQlx1MDQ0RVx1MDQzMVx1MDQ0Qlx1MDQzQyBcdTA0M0ZcdTA0M0VcdTA0MzhcdTA0NDFcdTA0M0FcdTA0M0VcdTA0MzJcdTA0NEJcdTA0M0MgXHUwNDM0XHUwNDMyXHUwNDM4XHUwNDM2XHUwNDNBXHUwNDNFXHUwNDNDIFx1MDQzOCBcdTA0MzIgXHUwNDNCXHUwNDRFXHUwNDMxXHUwNDNFXHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzMFx1MDQzRFx1MDQzNS5cIlxuICAgIH1cbiAgfSxcbiAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIlxufVxuIiwgImltcG9ydCB7IHZlcnNpb24gYXMgcGtnVmVyc2lvbiwgcmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IEZVTExfVkVSU0lPTiwgTUFJTl9WRVJTSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyB0eXBlIEJpbmcgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgY2hlY2tJc0dvb2dsZSA9ICgpID0+IHtcbiAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lLmluY2x1ZGVzKCdnb29nbGUnKVxufVxuZXhwb3J0IGNvbnN0IGxzID0ge1xuICBzZXQ6IGFzeW5jIDxUID0gYW55PihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBLRVkgPSBgTkJBQCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9YFxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoXG4gICAgICAgIHtcbiAgICAgICAgICBbS0VZXTogdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSlcbiAgfSxcbiAgZ2V0OiBhc3luYyA8VCA9IGFueT4oa2V5OiBzdHJpbmcpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+ID0+IHtcbiAgICBjb25zdCBLRVkgPSBgTkJBQCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9YFxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtLRVldLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0W0tFWV0pXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIHJlbW92ZTogYXN5bmMgKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgS0VZID0gYE5CQUAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfWBcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtLRVldKVxuICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsVGFicyA9IGFzeW5jIChxdWVyeUluZm86IGNocm9tZS50YWJzLlF1ZXJ5SW5mbyA9IHsgc3RhdHVzOiAnY29tcGxldGUnIH0pOiBQcm9taXNlPElUYWJbXT4gPT4ge1xuICBjb25zdCBuZXdUYWJzOiBJVGFiW10gPSAoYXdhaXQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlJbmZvKSkgYXMgSVRhYltdXG4gIGNvbnN0IG9sZFRhYnM6IElUYWJbXSA9IHVuaXF1ZSgoYXdhaXQgbHMuZ2V0PElUYWJbXT4oJ2N1cnJlbnRUYWJzJykpISlcbiAgZm9yIChjb25zdCBuZXdUYWIgb2YgbmV3VGFicykge1xuICAgIGZvciAoY29uc3Qgb2xkVGFiIG9mIG9sZFRhYnMpIHtcbiAgICAgIGlmIChvbGRUYWIudXJsICE9IG51bGwgJiYgb2xkVGFiLnVybCA9PT0gbmV3VGFiLnVybCkge1xuICAgICAgICBuZXdUYWIuJGV4dHJhID0gb2xkVGFiLiRleHRyYVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgdGFicyA9IG5ld1RhYnMuY29uY2F0KG9sZFRhYnMpXG4gIHRhYnMgPSB0YWJzLmZpbHRlcigodGFiKSA9PiB7XG4gICAgY29uc3QgdXJsID0gdGFiLnVybCA/PyAnJ1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHVybC5zdGFydHNXaXRoKCdjaHJvbWUtZXh0ZW5zaW9uOi8vJylcbiAgfSlcbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICBpZiAodGFiLnVybCA9PSBudWxsKSByZXR1cm5cbiAgICB0YWIudXJsID0gdGFiLnVybC5yZXBsYWNlKC8jLiokLywgJycpXG4gIH0pXG4gIHRhYnMgPSB1bmlxdWUodGFicywgJ3VybCcpLnNsaWNlKDAsIDUwMDApXG4gIHJldHVybiB0YWJzXG59XG5cbmV4cG9ydCBjb25zdCB1bmlxdWUgPSA8VD4oYXJyOiBUW10sIGtleTogc3RyaW5nID0gJ3VybCcpOiBUW10gPT4ge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKClcbiAgcmV0dXJuIGFyci5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgIGlmIChtYXAuaGFzKGl0ZW1ba2V5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXAuc2V0KGl0ZW1ba2V5XSwgdHJ1ZSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgdHlwZSBJVGFiID0gY2hyb21lLnRhYnMuVGFiICYge1xuICAkZXh0cmE/OiB7XG4gICAgbGFzdE1vZGlmaWVkOiBudW1iZXJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmluZFNhbWVVcmxUYWIgPSBhc3luYyAodXJsPzogc3RyaW5nLCBxdWVyeUluZm86IGNocm9tZS50YWJzLlF1ZXJ5SW5mbyA9IHt9KTogUHJvbWlzZTxjaHJvbWUudGFicy5UYWIgfCBudWxsPiA9PiB7XG4gIGlmICghdXJsKSByZXR1cm4gbnVsbFxuICBjb25zdCBvcGVuZWRUYWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlJbmZvKVxuICByZXR1cm4gKFxuICAgIG9wZW5lZFRhYnMuZmluZCgob3BlbmVkVGFiKSA9PiB7XG4gICAgICBpZiAoIW9wZW5lZFRhYi51cmwpIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChvcGVuZWRUYWIudXJsKSA9PT0gdXJsXG4gICAgfSkgPz8gbnVsbFxuICApXG59XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVVcmwgPSAodXJsOiBzdHJpbmcgPSAnJyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvIy4qJC8sICcnKVxufVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSBhc3luYyAoZGVsYXk6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpXG4gIH0pXG59XG5cbi8qKlxuICogY2hlY2sgaWYgaXMgQ2hpbmVzZVxuICovXG5leHBvcnQgY29uc3QgY2hlY2tJc1NpbXBsZUNoaW5lc2UgPSAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbGFuZyA9IGNocm9tZS5pMThuLmdldFVJTGFuZ3VhZ2UoKS50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIGxhbmcgPT09ICd6aC1jbidcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrSXNDaGluZXNlID0gKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGxhbmcgPSBjaHJvbWUuaTE4bi5nZXRVSUxhbmd1YWdlKCkudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiBsYW5nID09PSAnemgtY24nIHx8IGxhbmcgPT09ICd6aC10dycgfHwgbGFuZyA9PT0gJ3poLWhrJyB8fCBsYW5nID09PSAnemgnXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogY2hlY2sgaWYgaW4gTWFpbmxhbmQgQ2hpbmFcbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ04gPSAoKSA9PiB7XG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBDT05GSUdfS0VZID0gJ2NvbmZpZ1YxJ1xuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICBzaG93R29vZ2xlQnV0dG9uT25CaW5nOiBib29sZWFuXG4gIHNob3dCaW5nQnV0dG9uT25Hb29nbGU6IGJvb2xlYW5cbiAgc2hvd0d1aWRlVG9HaXRodWI6IGJvb2xlYW5cbiAgc2hvd0NoYXQ6IGJvb2xlYW5cbiAgc2hvd1JlbGVhc2U6IGJvb2xlYW5cbiAgdHJpZ2dlck1vZGU6ICdBbHdheXMnIHwgJ1F1ZXN0aW9ubWFyaycgfCAnTWFudWFsbHknXG4gIGNvbnZlcnNhdGlvblN0eWxlOiBCaW5nLkNvbnZlcnNhdGlvblN0eWxlXG59XG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnID0gYXN5bmMgKCk6IFByb21pc2U8Q29uZmlnPiA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IChhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChDT05GSUdfS0VZKSlbQ09ORklHX0tFWV1cbiAgcmV0dXJuIHtcbiAgICBzaG93R29vZ2xlQnV0dG9uT25CaW5nOiB0cnVlLFxuICAgIHNob3dCaW5nQnV0dG9uT25Hb29nbGU6IHRydWUsXG4gICAgc2hvd0d1aWRlVG9HaXRodWI6IHRydWUsXG4gICAgc2hvd0NoYXQ6IHRydWUsXG4gICAgc2hvd1JlbGVhc2U6IHRydWUsXG4gICAgdHJpZ2dlck1vZGU6ICdBbHdheXMnLFxuICAgIGNvbnZlcnNhdGlvblN0eWxlOiAnQmFsYW5jZWQnLFxuICAgIC4uLmNvbmZpZ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRDb25maWcgPSBhc3luYyAodmFsdWVzOiBQYXJ0aWFsPENvbmZpZz4pID0+IHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKClcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1xuICAgIFtDT05GSUdfS0VZXToge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgLi4udmFsdWVzXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZXNjYXBlSHRtbCA9IChzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gU3RyaW5nKHMpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgJyYjeDJmOycpXG59XG5cbnR5cGUgSU1ldGhvZHMgPSBSZWNvcmQ8c3RyaW5nLCAoLi4uYXJnczogYW55W10pID0+IFByb21pc2U8YW55Pj5cbmV4cG9ydCBjb25zdCByZWdpc3RyeUxpc3RlbmVyID0gKGNhbGxNZXRob2RzOiBJTWV0aG9kcykgPT4ge1xuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcSwgX3NlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgOyhhc3luYyAoKSA9PiB7XG4gICAgICAvLyBpZiBub3QgcmV0dXJuIHRydWUgaW1tZWRpYXRlbHlcdUZGMEN3aWxsIHRocm93IGVycm9yIGBVbmNoZWNrZWQgcnVudGltZS5sYXN0RXJyb3I6IFRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5gXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IG1ldGhvZCwgYXJncyB9ID0gcmVxXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjYWxsTWV0aG9kc1ttZXRob2RdKC4uLmFyZ3MpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGNvZGU6IDIwMCwgbXNnOiAnb2snLCBkYXRhIH0pXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZXJyID0gZSA/PyB7fVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBjb2RlOiA1MDAsIG1zZzogZXJyLnN0YWNrID8/IGVyci5tZXNzYWdlID8/IGUgfSlcbiAgICAgIH1cbiAgICB9KSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNhbGxCYWNrZ3JvdW5kID0gYXN5bmMgPFQgPSBhbnk+KG1ldGhvZDogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogUHJvbWlzZTxUPiA9PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgYXJnczogWy4uLmFyZ3NdXG4gICAgICB9LFxuICAgICAgKHJlcykgPT4ge1xuICAgICAgICBpZiAoIXJlcyB8fCByZXMuY29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgcmVqZWN0KHJlcz8ubXNnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBsb2NhbENhY2hlID0gKCgpID0+IHtcbiAgY29uc3QgdiA9ICd2MSdcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGFzeW5jIDxUID0gYW55PihrZXk6IHN0cmluZyk6IFByb21pc2U8bnVsbCB8IFQ+ID0+IHtcbiAgICAgIGtleSA9IGAke3Z9OiR7a2V5fWBcbiAgICAgIGNvbnN0IHsgZGF0YSwgbWF4QWdlLCBsYXN0TW9kaWZpZWQgfSA9IChhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoa2V5KSk/LltrZXldID8/IHt9XG4gICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RNb2RpZmllZCA+IG1heEFnZSAqIDEwMDApIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSxcblxuICAgIHNldDogYXN5bmMgPFQgPSBvYmplY3Q+KGtleTogc3RyaW5nLCBkYXRhOiBULCBtYXhBZ2U6IG51bWJlciA9IEluZmluaXR5IC8qIFx1NTM1NVx1NEY0RFx1NzlEMiAqLyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAga2V5ID0gYCR7dn06JHtrZXl9YFxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgW2tleV06IHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGxhc3RNb2RpZmllZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBtYXhBZ2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pKClcblxuZXhwb3J0IGNvbnN0IHRvRGF0YVVybCA9IGFzeW5jICh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oYXN5bmMgKHIpID0+IGF3YWl0IHIuYmxvYigpKVxuICAgICAgLnRoZW4oKGJsb2IpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3RcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYilcbiAgICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnRcbmNvbnN0IHVzZXJBZ2VudERhdGEgPSAobmF2aWdhdG9yIGFzIGFueSkudXNlckFnZW50RGF0YVxuXG5leHBvcnQgY29uc3QgaXNNYWMgPSB1c2VyQWdlbnQuaW5jbHVkZXMoJ01hY2ludG9zaCcpXG5leHBvcnQgY29uc3QgaXNGaXJlZm94ID0gdXNlckFnZW50LmluY2x1ZGVzKCdGaXJlZm94JylcbmV4cG9ydCBjb25zdCBpc0VkZ2UgPSB1c2VyQWdlbnQuaW5jbHVkZXMoJ0VkZy8nKVxuZXhwb3J0IGNvbnN0IGlzQnJhdmUgPSB1c2VyQWdlbnREYXRhPy5icmFuZHMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJyYW5kID09PSAnQnJhdmUnKSA+IC0xXG5leHBvcnQgY29uc3QgaXNDaGluZXNlID0gY2hlY2tJc0NoaW5lc2UoKVxuZXhwb3J0IGNvbnN0IGlzU2ltcGxlQ2hpbmVzZSA9IGNoZWNrSXNTaW1wbGVDaGluZXNlKClcbmV4cG9ydCBjb25zdCBpc0NhbmFyeTogYm9vbGVhbiA9ICEhZ2xvYmFsVGhpcy5fX05CQV9pc0NhbmFyeVxuZXhwb3J0IGNvbnN0IHZlcnNpb246IHN0cmluZyA9IGlzQ2FuYXJ5ID8gYDAuJHtwa2dWZXJzaW9ufWAgOiBwa2dWZXJzaW9uXG5cbmV4cG9ydCBjb25zdCBnZW5VQSA9ICgpID0+IHtcbiAgbGV0IHVhID0gdXNlckFnZW50XG4gIGlmICghaXNFZGdlKSB7XG4gICAgaWYgKGlzTWFjKSB7XG4gICAgICB1YSA9IGBNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvJHtNQUlOX1ZFUlNJT059LjAuMC4wIFNhZmFyaS81MzcuMzYgRWRnLyR7RlVMTF9WRVJTSU9OfWBcbiAgICB9IGVsc2Uge1xuICAgICAgdWEgPSBgTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLyR7TUFJTl9WRVJTSU9OfS4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8ke0ZVTExfVkVSU0lPTn1gXG4gICAgfVxuICB9XG4gIHJldHVybiB1YVxufVxuXG5leHBvcnQgY29uc3QgZ2VuSXNzdWVVcmwgPSBhc3luYyAoZXh0cmE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPikgPT4ge1xuICBjb25zdCByZXBvc2l0b3J5VXJsOiBzdHJpbmcgPSByZXBvc2l0b3J5LnVybFxuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGdldENvbmZpZygpXG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSBgJHtyZXBvc2l0b3J5VXJsfS9pc3N1ZXMvbmV3P3RpdGxlPSZib2R5PWBcbiAgICBsZXQgZmluYWxVcmw6IHN0cmluZyA9IHVybFxuICAgIGxldCBjb21tZW50ID1cbiAgICAgICdQbGVhc2Ugd3JpdGUgeW91ciBjb21tZW50IEFCT1ZFIHRoaXMgbGluZSwgcHJvdmlkZSBhcyBtdWNoIGRldGFpbGVkIGluZm9ybWF0aW9uIGFuZCBzY3JlZW5zaG90cyBhcyBwb3NzaWJsZS4nICtcbiAgICAgICdUaGUgVUEgbWF5IG5vdCBuZWNlc3NhcmlseSByZWZsZWN0IHlvdXIgYWN0dWFsIGJyb3dzZXIgYW5kIHBsYXRmb3JtLCBzbyBwbGVhc2UgbWFrZSBzdXJlIHRvIGluZGljYXRlIHRoZW0gY2xlYXJseS4nXG4gICAgaWYgKGlzQ2hpbmVzZSkge1xuICAgICAgY29tbWVudCA9ICdcdThCRjdcdTU3MjhcdTZCNjRcdTg4NENcdTRFMEFcdTY1QjlcdTUzRDFcdTg4NjhcdTYwQThcdTc2ODRcdThCQThcdThCQkFcdTMwMDJcdThCRTZcdTVDM0RcdTc2ODRcdTYzQ0ZcdThGRjBcdTU0OENcdTYyMkFcdTU2RkVcdTY3MDlcdTUyQTlcdTRFOEVcdTYyMTFcdTRFRUNcdTVCOUFcdTRGNERcdTk1RUVcdTk4OThcdUZGMENVQSBcdTRFMERcdTRFMDBcdTVCOUFcdTc3MUZcdTVCOUVcdTUzQ0RcdTY2MjBcdTYwQThcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTU0OENcdTVFNzNcdTUzRjBcdUZGMENcdThCRjdcdTU5MDdcdTZDRThcdTZFMDVcdTY5NUEnXG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9XG4gICAgICAnIFxcblxcblxcblxcbicgK1xuICAgICAgYDwhLS0gICR7Y29tbWVudH0gLS0+XFxuYCArXG4gICAgICBPYmplY3QuZW50cmllczxzdHJpbmc+KHtcbiAgICAgICAgVmVyc2lvbjogYCR7dmVyc2lvbn0ke2lzQ2FuYXJ5ID8gJyAoQ2FuYXJ5KScgOiAnJ30gYCxcbiAgICAgICAgVUE6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgIExhbmc6IGNocm9tZS5pMThuLmdldFVJTGFuZ3VhZ2UoKSxcbiAgICAgICAgQWNjZXB0TGFuZ3M6IChhd2FpdCBjaHJvbWUuaTE4bi5nZXRBY2NlcHRMYW5ndWFnZXMoKSkuam9pbignLCAnKSxcbiAgICAgICAgY29uZmlnOiBKU09OLnN0cmluZ2lmeShjb25maWcpLFxuICAgICAgICAuLi5leHRyYVxuICAgICAgfSlcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWwgPyBgJHtrZXl9OiAke3ZhbH1gIDogJydcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpXG5cbiAgICBmaW5hbFVybCArPSBlbmNvZGVVUklDb21wb25lbnQoYm9keS5zbGljZSgwLCAyMDAwKSlcbiAgICByZXR1cm4gZmluYWxVcmxcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHJlcG9zaXRvcnlVcmxcbiAgfVxufVxuIiwgImltcG9ydCB7IGdldEFsbFRhYnMsIGxzLCB1bmlxdWUgfSBmcm9tICdAQC91dGlscydcblxuZXhwb3J0IGNvbnN0IGR1bXBUYWJzID0gYXN5bmMgKHsgd2luZG93SWQgfSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBBUFBfVVJMID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhcHAvaW5kZXguaHRtbCcpXG5cbiAgY29uc3QgW2N1cnJlbnRUYWJzLCBbY3VycmVudFRhYl1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW2dldEFsbFRhYnMoKSwgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSldKVxuXG4gIGF3YWl0IGxzLnNldCgnY3VycmVudFRhYnMnLCB1bmlxdWUoY3VycmVudFRhYnMsICd1cmwnKSlcblxuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgIHVybDogQVBQX1VSTCxcbiAgICB3aW5kb3dJZFxuICB9KVxuXG4gIGxldCBBcHBUYWIgPSB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLnVybCA9PT0gQVBQX1VSTClcbiAgaWYgKEFwcFRhYiA9PSBudWxsKSB7XG4gICAgQXBwVGFiID0gYXdhaXQgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBBUFBfVVJMIH0pXG4gIH1cblxuICBpZiAoQXBwVGFiLmlkICE9IG51bGwpIHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbY2hyb21lLnRhYnMubW92ZShBcHBUYWIuaWQsIHsgaW5kZXg6IDAgfSksIGNocm9tZS50YWJzLnVwZGF0ZShBcHBUYWIuaWQsIHsgYWN0aXZlOiB0cnVlLCBwaW5uZWQ6IHRydWUgfSldKVxuICB9XG5cbiAgY29uc3Qgb3BlbmVkVGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgd2luZG93SWQgfSlcblxuICBvcGVuZWRUYWJzLmZvckVhY2goYXN5bmMgKHRhYikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGFiLmlkID09IG51bGwpIHJldHVyblxuICAgICAgaWYgKHRhYi51cmwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICBpZiAoWydjaHJvbWU6Ly9uZXd0YWIvJ10uaW5jbHVkZXModGFiLnVybCkpIHtcbiAgICAgICAgYXdhaXQgY2hyb21lLnRhYnMucmVtb3ZlKHRhYi5pZClcbiAgICAgIH1cbiAgICAgIGlmICh0YWIuaWQgPT09IEFwcFRhYj8uaWQpIHJldHVyblxuICAgICAgaWYgKHRhYi5waW5uZWQpIHJldHVyblxuICAgICAgaWYgKHRhYi5hdWRpYmxlID09PSB0cnVlKSByZXR1cm5cbiAgICAgIGlmICh0YWIuaGlnaGxpZ2h0ZWQpIHJldHVyblxuICAgICAgaWYgKHRhYi5hY3RpdmUpIHJldHVyblxuXG4gICAgICBpZiAodGFiLmlkID09PSBjdXJyZW50VGFiLmlkKSByZXR1cm5cblxuICAgICAgYXdhaXQgY2hyb21lLnRhYnMucmVtb3ZlKHRhYi5pZClcbiAgICB9IGNhdGNoIHt9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRVUkwgPSAodXJsOiBzdHJpbmcgPSAnJywgYmFzZT86IHN0cmluZyk6IFVSTCA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBVUkwodXJsLCBiYXNlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gY29uc29sZS5lcnJvcihlKVxuICAgIHJldHVybiB7XG4gICAgICBzZWFyY2hQYXJhbXM6IHtcbiAgICAgICAgZ2V0OiAoKSA9PiBudWxsXG4gICAgICB9XG4gICAgfSBhcyBhbnlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VVJMU2VhcmNoUGFyYW1zID0gKHVybDogc3RyaW5nKTogVVJMU2VhcmNoUGFyYW1zID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBnZXQ6ICgpID0+IG51bGxcbiAgICB9IGFzIGFueVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuUGFnZSA9IGFzeW5jICh1cmw6IHN0cmluZyk6IFByb21pc2U8Y2hyb21lLnRhYnMuVGFiPiA9PiB7XG4gIGNvbnN0IHRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUgfSlcblxuICBjb25zdCB1cmxPYmogPSBnZXRVUkwodXJsKVxuICBsZXQgdGFiID0gdGFicy5maW5kKCh0YWIpID0+IHRhYi51cmw/LnN0YXJ0c1dpdGgodXJsT2JqLm9yaWdpbikpXG5cbiAgaWYgKHRhYiA9PSBudWxsKSB7XG4gICAgdGFiID0gYXdhaXQgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsIH0pXG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBbXG4gICAgICAgIGNocm9tZS50YWJzLm1vdmUodGFiLmlkISwgeyBpbmRleDogdGFicy5sZW5ndGggLSAxIH0pLFxuICAgICAgICB0YWIudXJsICE9PSB1cmwgJiYgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCEsIHsgdXJsIH0pLFxuICAgICAgICBjaHJvbWUudGFicy51cGRhdGUodGFiLmlkISwgeyBhY3RpdmU6IHRydWUsIHVybDogdGFiLnVybCAhPT0gdXJsID8gdXJsIDogdW5kZWZpbmVkIH0pXG4gICAgICBdLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuICByZXR1cm4gdGFiXG59XG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBhc3luYyAob3B0aW9uczogY2hyb21lLmNvb2tpZXMuU2V0RGV0YWlscywgY29va2llOiBjaHJvbWUuY29va2llcy5Db29raWUgPSB7fSBhcyBhbnkpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGNocm9tZS5jb29raWVzLnNldCh7XG4gICAgZG9tYWluOiBjb29raWUuZG9tYWluLFxuICAgIHN0b3JlSWQ6IGNvb2tpZS5zdG9yZUlkLFxuICAgIHBhdGg6IGNvb2tpZS5wYXRoLFxuICAgIGh0dHBPbmx5OiBjb29raWUuaHR0cE9ubHksXG4gICAgc2VjdXJlOiBjb29raWUuc2VjdXJlLFxuICAgIHNhbWVTaXRlOiBjb29raWUuc2FtZVNpdGUsXG4gICAgZXhwaXJhdGlvbkRhdGU6IGNvb2tpZS5leHBpcmF0aW9uRGF0ZSxcbiAgICAuLi5vcHRpb25zXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgZ2VuSXNzdWVVcmwsIGlzQ2hpbmVzZSB9IGZyb20gJ0BAL3V0aWxzJ1xuaW1wb3J0IHsgb3BlblBhZ2UgfSBmcm9tICcuL3V0aWxzJ1xuLy8gY29uc3QgcmVwb3NpdG9yeVVybDogc3RyaW5nID0gcmVwb3NpdG9yeS51cmxcblxudHlwZSBDb250ZXh0cyA9IGNocm9tZS5jb250ZXh0TWVudXMuQ29udGV4dFR5cGVbXVxuaW50ZXJmYWNlIElJbml0Q29udGV4dE1lbnUge1xuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRleHRzOiBDb250ZXh0c1xuICBvbmNsaWNrOiAoaW5mbzogY2hyb21lLmNvbnRleHRNZW51cy5PbkNsaWNrRGF0YSwgdGFiOiBjaHJvbWUudGFicy5UYWIgfCB1bmRlZmluZWQpID0+IHZvaWRcbn1cblxuY29uc3QgY29udGV4dE1lbnVzOiBSZWNvcmQ8c3RyaW5nLCBJSW5pdENvbnRleHRNZW51PiA9IHtcbiAgLy8gdmVyc2lvbjoge1xuICAvLyAgIHRpdGxlOiBgXHVEODNFXHVEREMzIFZlcnNpb246ICR7dmVyc2lvbn1gLFxuICAvLyAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAvLyAgIG9uY2xpY2s6ICgpID0+IHtcbiAgLy8gICAgIG9wZW5QYWdlKGAke3JlcG9zaXRvcnlVcmx9L3JlbGVhc2VzL3RhZy8ke3ZlcnNpb259YClcbiAgLy8gICB9XG4gIC8vIH0sXG4gIG9wZW5DaGF0OiB7XG4gICAgdGl0bGU6ICdcdUQ4M0RcdURDQUMgTmV3IEJpbmcnLFxuICAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAgIG9uY2xpY2s6IChfaW5mbykgPT4ge1xuICAgICAgb3BlblBhZ2UoJ2h0dHBzOi8vd3d3LmJpbmcuY29tL3NlYXJjaD9xPUJpbmcrQUkmc2hvd2NvbnY9MScpXG4gICAgfVxuICB9LFxuXG4gIG9wZW5JbWFnZUNyZWF0ZToge1xuICAgIHRpdGxlOiAnXHVEODNEXHVEREJDXHVGRTBGIE5ldyBCaW5nIEltYWdlIENyZWF0b3InLFxuICAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAgIG9uY2xpY2s6IChfaW5mbykgPT4ge1xuICAgICAgb3BlblBhZ2UoJ2h0dHBzOi8vd3d3LmJpbmcuY29tL2NyZWF0ZScpXG4gICAgfVxuICB9LFxuXG4gIGxpa2VJdDoge1xuICAgIHRpdGxlOiAnXHUyNzY0XHVGRTBGIExpa2UgaXQnLFxuICAgIGNvbnRleHRzOiBbJ2FjdGlvbiddLFxuICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgIG9wZW5QYWdlKCdodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9uZXctYmluZy1hbnl3aGVyZS9oY2VvYmhqb2twZGJvZ2prcGxtZmplb21rZWNra25naS9yZXZpZXdzJylcbiAgICB9XG4gIH0sXG5cbiAgcmVwb3J0SXNzdWVzOiB7XG4gICAgdGl0bGU6IGlzQ2hpbmVzZSA/ICdcdUQ4M0RcdURDMUIgXHU1M0NEXHU5OTg4XHU1RUZBXHU4QkFFJyA6ICdcdUQ4M0RcdURDMUIgUmVwb3J0IGlzc3VlcycsXG4gICAgY29udGV4dHM6IFsnYWN0aW9uJ10sXG4gICAgb25jbGljazogYXN5bmMgKF9pbmZvKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBhd2FpdCBnZW5Jc3N1ZVVybCgpXG5cbiAgICAgIG9wZW5QYWdlKHVybClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjaHJvbWUuY29udGV4dE1lbnVzLnJlbW92ZUFsbCgoKSA9PiB7XG4gICAgZm9yIChjb25zdCBbaWQsIG1lbnVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbnRleHRNZW51cykpIHtcbiAgICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlOiBtZW51LnRpdGxlLFxuICAgICAgICBjb250ZXh0czogbWVudS5jb250ZXh0c1xuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKGluZm8sIHRhYikgPT4ge1xuICAgIGNvbnN0IHsgbWVudUl0ZW1JZCB9ID0gaW5mb1xuICAgIGNvbnN0IGl0ZW0gPSBjb250ZXh0TWVudXNbbWVudUl0ZW1JZF1cbiAgICBpZiAoaXRlbT8ub25jbGljaykgaXRlbS5vbmNsaWNrKGluZm8sIHRhYilcbiAgfSlcbn1cbiIsICJjb25zdCBNQVhfQUdFID0gMTAwMCAqIDYwICogNjAgKiAxIC8vIDEgaG91clxuY29uc3QgS0VZID0gJ25vdGlmaWNhdGlvbidcbmNvbnN0IEZMQUdfS0VZID0gJ25vdGlmaWNhdGlvbjpoaWRlJ1xuY29uc3QgZ2V0UmVtb3RlTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZygnZ2V0UmVtb3RlTm90aWZpY2F0aW9uJylcbiAgbGV0IGRhdGFcbiAgdHJ5IHtcbiAgICBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvaGFvemkvTmV3LUJpbmctQW55d2hlcmUvaXNzdWVzLzI0JykudGhlbihhc3luYyAocmVzKSA9PiBhd2FpdCByZXMuanNvbigpKVxuICB9IGNhdGNoIHt9XG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBjb25zdCBnZXROb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgW0tFWV06IG9sZERhdGEgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChLRVkpXG5cbiAgaWYgKCFvbGREYXRhIHx8IChvbGREYXRhLmxhc3RNb2RpZnkgJiYgRGF0ZS5ub3coKSAtIG9sZERhdGEubGFzdE1vZGlmeSA+IE1BWF9BR0UpKSB7XG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKEtFWSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UmVtb3RlTm90aWZpY2F0aW9uKClcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbS0VZXTogeyBkYXRhLCBsYXN0TW9kaWZ5OiBEYXRlLm5vdygpIH0gfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IFtGTEFHX0tFWV06IGZsYWcsIFtLRVldOiBuZXdEYXRhIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW0ZMQUdfS0VZLCBLRVldKVxuXG4gIGlmICghbmV3RGF0YT8uZGF0YSkgcmV0dXJuIG51bGxcbiAgaWYgKCEobmV3RGF0YS5kYXRhLnRpdGxlICYmIG5ld0RhdGEuZGF0YS5zdGF0ZSA9PT0gJ29wZW4nKSkgcmV0dXJuIG51bGxcbiAgaWYgKGZsYWcgPT09IDEgJiYgbmV3RGF0YS5kYXRhLnRpdGxlID09PSBvbGREYXRhLmRhdGE/LnRpdGxlKSByZXR1cm4gbnVsbFxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoRkxBR19LRVkpXG4gIHJldHVybiBuZXdEYXRhLmRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFtGTEFHX0tFWV06IDEgfSlcbn1cbiIsICJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnQEAvdXRpbHMnXG5pbXBvcnQgeyBnZXRVUkwgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbiwgaGlkZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vX25vdGlmaWNhdGlvbidcblxuY29uc3QgZ2V0RW52ID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb25cbiAgfVxufVxuXG5jb25zdCBvcGVuVXJsSW5TYW1lVGFiID0gYXN5bmMgKHsgdXJsIH06IHsgdXJsOiBzdHJpbmcgfSA9IHt9IGFzIGFueSkgPT4ge1xuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlIH0pXG4gIGNvbnN0IHVybE9iaiA9IGdldFVSTCh1cmwpXG4gIGxldCB0YWIgPSB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLnVybD8uc3RhcnRzV2l0aCh1cmxPYmoub3JpZ2luKSlcbiAgaWYgKHRhYiA9PSBudWxsKSB7XG4gICAgdGFiID0gYXdhaXQgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsIH0pXG4gIH0gZWxzZSB7XG4gICAgaWYgKHRhYi5pZCAhPSBudWxsKSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbY2hyb21lLnRhYnMubW92ZSh0YWIuaWQsIHsgaW5kZXg6IHRhYnMubGVuZ3RoIC0gMSB9KSwgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCwgeyBhY3RpdmU6IHRydWUgfSldKVxuICAgIH1cbiAgfVxuXG4gIGxldCBuZXdVcmwgPSB1cmxcbiAgbGV0IHF1ZXJ5ID0gJydcbiAgbGV0IHRhYlF1ZXJ5ID0gJydcbiAgY29uc3QgaXNHb29nbGUgPSB1cmxPYmouaG9zdG5hbWUgPT09ICd3d3cuZ29vZ2xlLmNvbSdcbiAgY29uc3QgaXNCaW5nID0gdXJsT2JqLmhvc3RuYW1lID09PSAnd3d3LmJpbmcuY29tJ1xuICBpZiAoaXNHb29nbGUpIHtcbiAgICBxdWVyeSA9IHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcbiAgICB0YWJRdWVyeSA9IGdldFVSTCh0YWIudXJsKS5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcbiAgICBnZXRVUkwodGFiLnVybCkuc2VhcmNoUGFyYW1zLmdldCgncScpXG4gIH0gZWxzZSBpZiAoaXNCaW5nKSB7XG4gICAgcXVlcnkgPSB1cmxPYmouc2VhcmNoUGFyYW1zLmdldCgncScpID8/ICcnXG4gICAgdGFiUXVlcnkgPSBnZXRVUkwodGFiLnVybCkuc2VhcmNoUGFyYW1zLmdldCgncScpID8/ICcnXG4gIH1cblxuICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKVxuICB0YWJRdWVyeSA9IHRhYlF1ZXJ5LnRyaW0oKVxuXG4gIGlmIChxdWVyeSAmJiBxdWVyeSA9PT0gdGFiUXVlcnkpIHJldHVybiAvLyBcdTRFMERcdTUyMzdcdTY1QjBcdTk4NzVcdTk3NjJcblxuICBpZiAoaXNHb29nbGUpIHtcbiAgICBuZXdVcmwgPSBgJHt1cmxPYmoub3JpZ2lufSR7dXJsT2JqLnBhdGhuYW1lfT9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX1gXG4gIH0gZWxzZSBpZiAoaXNCaW5nKSB7XG4gICAgbmV3VXJsID0gYCR7dXJsT2JqLm9yaWdpbn0ke3VybE9iai5wYXRobmFtZX0/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YFxuICAgIC8vIG5ld1VybCA9IGAke3VybE9iai5vcmlnaW59JHt1cmxPYmoucGF0aG5hbWV9P3E9JHtxdWVyeX0mc2hvd2NvbnY9MWBcbiAgfVxuXG4gIGF3YWl0IGNocm9tZS50YWJzLnVwZGF0ZSh0YWIuaWQhLCB7IHVybDogbmV3VXJsIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0RW52LFxuICBvcGVuVXJsSW5TYW1lVGFiLFxuXG4gIGdldE5vdGlmaWNhdGlvbixcbiAgaGlkZU5vdGlmaWNhdGlvblxufVxuIiwgImltcG9ydCB7IEJBTkRfTUtUUywgQklORyB9IGZyb20gJ0BAL2NvbnN0YW50cydcbmltcG9ydCB7IGlzQ2FuYXJ5LCByZWdpc3RyeUxpc3RlbmVyLCB2ZXJzaW9uLCBnZXRDb25maWcgfSBmcm9tICdAQC91dGlscydcblxuaW1wb3J0IHsgcmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCBpbml0Q29udGV4dE1lbnUgZnJvbSAnLi9jb250ZXh0X21lbnVzJ1xuaW1wb3J0IGxpc3RlbmVycyBmcm9tICcuL2xpc3RlbmVycydcbmltcG9ydCB7IGdldFVSTFNlYXJjaFBhcmFtcywgb3BlblBhZ2UsIHNldENvb2tpZSB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgaW5pdENvbnRleHRNZW51KClcbiAgcmVnaXN0cnlMaXN0ZW5lcihsaXN0ZW5lcnMpXG5cbiAgY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoYXN5bmMgKGRldGFpbHMpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKVxuICAgIGNvbnN0IHJlcG9zaXRvcnlVcmw6IHN0cmluZyA9IHJlcG9zaXRvcnkudXJsXG4gICAgLy8gY29uc3QgZGVidWd1cmwgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9RWRnZSUyMCVFNCVCOCU4QiVFOCVCRCVCRCZzaG93Y29udj0xJkZPUk09aHBjb2R4J1xuICAgIC8vIGlmIChkZWJ1Z3VybCkge1xuICAgIC8vICAgb3BlblBhZ2UoZGVidWd1cmwpXG4gICAgLy8gICByZXR1cm5cbiAgICAvLyB9XG4gICAgaWYgKGlzQ2FuYXJ5KSB7XG4gICAgICBvcGVuUGFnZShgJHtyZXBvc2l0b3J5VXJsfS90cmVlL2NhbmFyeWApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGRldGFpbHMucmVhc29uID09PSAnaW5zdGFsbCcpIHtcbiAgICAgIG9wZW5QYWdlKHJlcG9zaXRvcnlVcmwpXG4gICAgfSBlbHNlIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ3VwZGF0ZScgJiYgY29uZmlnLnNob3dSZWxlYXNlKSB7XG4gICAgICBvcGVuUGFnZShgJHtyZXBvc2l0b3J5VXJsfS9yZWxlYXNlcy90YWcvdiR7dmVyc2lvbn1gKVxuICAgIH1cbiAgfSlcblxuICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4gICAgKCkgPT4ge1xuICAgICAgY2hyb21lLmNvb2tpZXMuZ2V0KFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ19FREdFX1MnLFxuICAgICAgICAgIHVybDogQklOR1xuICAgICAgICB9LFxuICAgICAgICAoY29va2llKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBjb29raWU/LnZhbHVlXG4gICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuXG5cbiAgICAgICAgICBjb25zdCB2YWx1ZU9iaiA9IGdldFVSTFNlYXJjaFBhcmFtcyh2YWx1ZSlcbiAgICAgICAgICBjb25zdCBta3QgPSB2YWx1ZU9iai5nZXQoJ21rdCcpPy50b0xvd2VyQ2FzZSgpID8/ICcnXG5cbiAgICAgICAgICBpZiAoIUJBTkRfTUtUUy5tYXAoKG0pID0+IG0udG9Mb3dlckNhc2UoKSkuaW5jbHVkZXMobWt0KSkgcmV0dXJuXG4gICAgICAgICAgaWYgKG1rdCA9PT0gJ3poLWNuJykge1xuICAgICAgICAgICAgdmFsdWVPYmouc2V0KCdta3QnLCAnemgtSEsnKVxuICAgICAgICAgICAgdmFsdWVPYmouc2V0KCd1aScsICd6aC1oYW5zJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVPYmouZGVsZXRlKCdta3QnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsOiBCSU5HLFxuICAgICAgICAgICAgICBuYW1lOiBjb29raWUubmFtZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlT2JqLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb29raWVcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgY2hyb21lLmNvb2tpZXMuZ2V0KFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ19Sd0JmJyxcbiAgICAgICAgICB1cmw6IEJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgKGNvb2tpZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29va2llPy52YWx1ZVxuICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHNldENvb2tpZSh7XG4gICAgICAgICAgICAgIHVybDogQklORyxcbiAgICAgICAgICAgICAgbmFtZTogJ19Sd0JmJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICd3bHM9MicsXG4gICAgICAgICAgICAgIGRvbWFpbjogJy5iaW5nLmNvbScsXG4gICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsdWVPYmogPSBnZXRVUkxTZWFyY2hQYXJhbXModmFsdWUpXG4gICAgICAgICAgY29uc3Qgd2xzID0gdmFsdWVPYmouZ2V0KCd3bHMnKVxuICAgICAgICAgIGlmICh3bHMgIT09ICcyJyAmJiB3bHMgIT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZU9iai5zZXQoJ3dscycsICcyJylcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0Q29va2llKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmw6IEJJTkcsXG4gICAgICAgICAgICAgIG5hbWU6ICdfUndCZicsXG4gICAgICAgICAgICAgIGRvbWFpbjogJy5iaW5nLmNvbScsXG4gICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVPYmoudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvb2tpZVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0sXG4gICAgeyB1cmxzOiBbQklORyArICcqJ10sIHR5cGVzOiBbJ21haW5fZnJhbWUnXSB9XG4gIClcbn1cbiIsICJpbXBvcnQgeyBBTExfUkVTT1VSQ0VfVFlQRVMgfSBmcm9tICdAQC9jb25zdGFudHMnXG5cbmltcG9ydCB7IGdlblVBIH0gZnJvbSAnQEAvdXRpbHMnXG5cbmNvbnN0IE1PRElGWV9IRUFERVJTX0xJU1QgPSB7XG4gIC8vICdYLUZvcndhcmRlZC1Gb3InOiAnOC44LjguOCcsXG4gICdVc2VyLUFnZW50JzogZ2VuVUEoKVxufVxuY29uc3QgTU9ESUZZX0hFQURFUlMgPSAnbW9kaWZ5SGVhZGVycycgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5SdWxlQWN0aW9uVHlwZS5NT0RJRllfSEVBREVSU1xuLy8gY29uc3QgUkVESVJFQ1QgPSAncmVkaXJlY3QnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuUnVsZUFjdGlvblR5cGUuUkVESVJFQ1Rcbi8vIGNvbnN0IEFQUEVORCA9ICdhcHBlbmQnIGFzIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuSGVhZGVyT3BlcmF0aW9uLkFQUEVORFxuLy8gY29uc3QgUkVNT1ZFID0gJ3JlbW92ZScgYXMgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5IZWFkZXJPcGVyYXRpb24uUkVNT1ZFXG5jb25zdCBTRVQgPSAnc2V0JyBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LkhlYWRlck9wZXJhdGlvbi5TRVRcblxuZXhwb3J0IGNvbnN0IGR5bmFtaWNSdWxlcyA9IFtcbiAge1xuICAgIHByaW9yaXR5OiAyMDAxLFxuICAgIGFjdGlvbjoge1xuICAgICAgdHlwZTogTU9ESUZZX0hFQURFUlMsXG4gICAgICByZXF1ZXN0SGVhZGVyczogT2JqZWN0LmVudHJpZXMoTU9ESUZZX0hFQURFUlNfTElTVCkubWFwKChbaGVhZGVyLCB2YWx1ZV0pID0+ICh7XG4gICAgICAgIG9wZXJhdGlvbjogU0VULFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGNvbmRpdGlvbjoge1xuICAgICAgcmVxdWVzdERvbWFpbnM6IFsnYmluZy5jb20nLCAnd3d3LmJpbmcuY29tJywgJ2NuLmJpbmcuY29tJ10sXG4gICAgICByZXNvdXJjZVR5cGVzOiBBTExfUkVTT1VSQ0VfVFlQRVNcbiAgICB9XG4gIH1cbl1cbiAgLmZpbHRlcihCb29sZWFuKVxuICAubWFwKChydWxlLCBpbmRleCkgPT4gKHtcbiAgICBpZDogaW5kZXggKyAxICsgMjAwMCxcbiAgICAuLi5ydWxlXG4gIH0pKSBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJ1bGVbXVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGlmICghZHluYW1pY1J1bGVzLmxlbmd0aCkgcmV0dXJuXG5cbiAgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5nZXREeW5hbWljUnVsZXMoKGRSdWxlcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKDExMSwgZFJ1bGVzKVxuICAgIC8vIGNvbnNvbGUubG9nKDIyMiwgWy4uLm5ldyBTZXQoWy4uLnJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZS5pZCksIC4uLmRSdWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGUuaWQpXSldKVxuXG4gICAgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC51cGRhdGVEeW5hbWljUnVsZXMoe1xuICAgICAgcmVtb3ZlUnVsZUlkczogWy4uLm5ldyBTZXQoWy4uLmR5bmFtaWNSdWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGUuaWQpLCAuLi5kUnVsZXMubWFwKChydWxlKSA9PiBydWxlLmlkKV0pXSxcbiAgICAgIGFkZFJ1bGVzOiBkeW5hbWljUnVsZXNcbiAgICB9KVxuICAgIC8vIC50aGVuKCgpID0+IHtcbiAgICAvLyAgIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuZ2V0RHluYW1pY1J1bGVzKChkUnVsZXMpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coMzMzLCBkUnVsZXMpXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH0pXG5cbiAgLy8gY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5vblJ1bGVNYXRjaGVkRGVidWcuYWRkTGlzdGVuZXIoKC4uLmFyZ3MpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZygxMTExLCAuLi5hcmdzKVxuICAvLyB9KVxufVxuIiwgImltcG9ydCB7IENOX1JFRElSRUNUX1VSTCB9IGZyb20gJ0BAL2NvbnN0YW50cydcbmltcG9ydCBjcm9zc1BsYXRmb3JtIGZyb20gJy4vY3Jvc3NfcGxhdGZvcm0nXG5pbXBvcnQgaW5pdER5bmFtaWNSdWxlcyBmcm9tICcuL2R5bmFtaWNfcnVsZXMnXG5pbXBvcnQgeyBpc1NpbXBsZUNoaW5lc2UgfSBmcm9tICdAQC91dGlscydcblxuY3Jvc3NQbGF0Zm9ybSgpXG5cbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiB7XG4gIGluaXREeW5hbWljUnVsZXMoKVxufSlcblxuaWYgKGlzU2ltcGxlQ2hpbmVzZSkge1xuICBjaHJvbWUucnVudGltZS5zZXRVbmluc3RhbGxVUkwoQ05fUkVESVJFQ1RfVVJMKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQU8sTUFBTSxPQUFPO0FBQ2IsTUFBTSxrQkFBa0I7QUFDeEIsTUFBTSxZQUFZLENBQUMsU0FBUyxNQUFNLE9BQU87QUFFekMsTUFBTSxlQUFlO0FBQ3JCLE1BQU0sZUFBZTtBQUVyQixNQUFNLHFCQUFxQjtBQUFBLElBQ2hDO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGOzs7QUNyQkUsZ0JBQVc7QUFJWCxtQkFBYztBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsS0FBTztBQUFBLEVBQ1Q7OztBQytGSyxNQUFNLHVCQUF1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QUksS0FBSztBQUM5QixnQkFBSSxRQUFRLE9BQU8sUUFBUSxJQUFJO0FBQzdCLHVCQUFTLElBQUksT0FBTyxHQUFHO0FBQUEsWUFDekI7QUFDQTtBQUFBLGNBQ0U7QUFBQSxnQkFDRSxLQUFLO0FBQUEsZ0JBQ0wsTUFBTTtBQUFBLGdCQUNOLFFBQVE7QUFBQSxnQkFDUixVQUFVO0FBQUEsZ0JBQ1YsT0FBTyxTQUFTLFNBQVM7QUFBQSxjQUMzQjtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFO0FBQUEsSUFDOUM7QUFBQSxFQUNGOzs7QUNsR0EsTUFBTSxzQkFBc0I7QUFBQTtBQUFBLElBRTFCLGNBQWMsTUFBTTtBQUFBLEVBQ3RCO0FBQ0EsTUFBTSxpQkFBaUI7QUFJdkIsTUFBTSxNQUFNO0FBRUwsTUFBTSxlQUFlO0FBQUEsSUFDMUI7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLGdCQUFnQixPQUFPLFFBQVEsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLE9BQU87QUFBQSxVQUM1RSxXQUFXO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxRQUNGLEVBQUU7QUFBQSxNQUNKO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxnQkFBZ0IsQ0FBQyxZQUFZLGdCQUFnQixhQUFhO0FBQUEsUUFDMUQsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0YsRUFDRyxPQUFPLE9BQU8sRUFDZCxJQUFJLENBQUMsTUFBTSxXQUFXO0FBQUEsSUFDckIsSUFBSSxRQUFRLElBQUk7QUFBQSxJQUNoQixHQUFHO0FBQUEsRUFDTCxFQUFFO0FBRUosTUFBTyx3QkFBUSxNQUFNO0FBQ25CLFFBQUksQ0FBQyxhQUFhO0FBQVE7QUFFMUIsV0FBTyxzQkFBc0IsZ0JBQWdCLENBQUMsV0FBVztBQUl2RCxhQUFPLHNCQUFzQixtQkFBbUI7QUFBQSxRQUM5QyxlQUFlLENBQUMsR0FBRyxvQkFBSSxJQUFJLENBQUMsR0FBRyxhQUFhLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFBQSxRQUN0RyxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFNSCxDQUFDO0FBQUEsRUFLSDs7O0FDckRBLHlCQUFjO0FBRWQsU0FBTyxRQUFRLFlBQVksWUFBWSxDQUFDLFlBQVk7QUFDbEQsMEJBQWlCO0FBQUEsRUFDbkIsQ0FBQztBQUVELE1BQUksaUJBQWlCO0FBQ25CLFdBQU8sUUFBUSxnQkFBZ0IsZUFBZTtBQUFBLEVBQ2hEOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgInRhYiIsICJ2ZXJzaW9uIiwgInRhYiIsICJ2ZXJzaW9uIl0KfQo=
