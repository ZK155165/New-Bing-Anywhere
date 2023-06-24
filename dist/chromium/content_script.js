"use strict";
(() => {
  // package.json
  var version = "2.1.0";
  var extensionName = "New Bing Anywhere (Bing Chat GPT-4)";

  // src/universe/utils.ts
  var checkIsGoogle = () => {
    return location.hostname.includes("google");
  };
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
  var setConfig = async (values) => {
    const config = await getConfig();
    await chrome.storage.sync.set({
      [CONFIG_KEY]: {
        ...config,
        ...values
      }
    });
  };
  var escapeHtml = (s) => {
    return String(s).replace(/&/g, "&amp;").replace(/'/g, "&#39;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2f;");
  };
  var callBackground = async (method, args = []) => {
    return await new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        {
          method,
          args: [...args]
        },
        (res) => {
          if (!res || res.code !== 200) {
            reject(res?.msg);
          } else {
            resolve(res.data);
          }
        }
      );
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

  // src/content_script/utils.ts
  var openUrlInSameTab = async (url) => {
    try {
      return await callBackground("openUrlInSameTab", [{ url }]);
    } catch (e) {
      location.href = url;
    }
  };
  var mutationConfig = { attributes: true, childList: true, subtree: true };
  var $ = (s, parent = document) => parent.querySelector(s);
  var $w = async (domSelector, timeout = 30, parent = document) => {
    return await new Promise((resolve) => {
      const $dom = $(domSelector, parent);
      if ($dom) {
        resolve($dom);
        return;
      }
      const observer = new MutationObserver((_mutationList, observer2) => {
        const $dom2 = $(domSelector, parent);
        if ($dom2) {
          observer2.disconnect();
          resolve($dom2);
        }
      });
      observer.observe(document, mutationConfig);
      setTimeout(() => {
        const $dom2 = $(domSelector, parent);
        observer.disconnect();
        resolve($dom2);
      }, timeout * 1e3);
    });
  };

  // src/content_script/bing-handler.ts
  var bing_handler_default = async ($2) => {
    if (!isEdge) {
      const document2 = window.document;
      const s = document2.createElement("script");
      s.src = chrome.runtime.getURL("inject.js");
      s.onload = s.remove;
      document2.documentElement.appendChild(s);
    }
    $2(() => {
      ;
      (async () => {
        const { showGuideToGithub } = await getConfig();
        if (!showGuideToGithub)
          return;
        const $esatSwitch = $2("#est_switch");
        if ($2.trim($esatSwitch.text()) !== "\u56FD\u5185\u7248\u56FD\u9645\u7248")
          return;
        setTimeout(() => {
          const $a = $2(
            '<a href="https://github.com/haozi/New-Bing-Anywhere/issues/8" title="\u67E5\u770B\u5982\u4F55\u6B63\u786E\u914D\u7F6E\u7F51\u7EDC\u4EE3\u7406" target="_blank" rel="noopener noreferrer nofollow">\u4F9D\u7136\u51FA\u73B0\u56FD\u5185\u7248/\u56FD\u9645\u7248\uFF1F</a>'
          ).css({
            color: "#E89ABE",
            textShadow: "0.5px 0.1px 1px #58070D",
            fontSize: "12px",
            fontWeight: "lighter"
          }).click(() => {
            setConfig({ showGuideToGithub: false });
          });
          $2("#est_switch").append($a).css("width", "auto");
        }, 2e3);
      })();
    });
    if (!location.href.startsWith("https://www.bing.com/search?"))
      return;
    const config = await getConfig();
    $w("#sb_form").then(() => {
      callBackground("getNotification").then((note) => {
        if (!note)
          return;
        const $body = $2(document.body);
        const $div = $2("<div/>").css({
          width: "100%",
          height: 40,
          border: "1px solid #590727",
          background: "#58070d",
          position: "fixed",
          top: 0,
          fontSize: "12px",
          lineHeight: "40px",
          textAlign: "center",
          zIndex: 99999,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block !important"
        });
        const close = () => {
          $div.remove();
          $body.css("padding-top", null);
        };
        const $a2 = $2(
          `<a style="color:#fff; background:url(${chrome.runtime.getURL(
            "images/bing_32x32.png"
          )}) no-repeat left 0; background-size: 12px; padding-left: 20px" href="${note.html_url}" target="_blank" rel="noopener noreferrer nofollow">${note.title}</a>`
        ).on("click", close);
        const $close = $2(
          '<a href="#" style="background:#58070d; color:#fff; cursor:pointer;padding: 0 68px 0 18px;position: absolute;right:0" title="no reminder">\u2715</a>'
        ).on("click", (e) => {
          e.preventDefault();
          confirm("Are you sure never see this notice again?") && callBackground("hideNotification");
          close();
        });
        $div.append($a2).append($close);
        $body.append($div).css("padding-top", 40);
      });
      $2(document.body).on("click", "a.b_logoArea", (e) => {
        const $this = $2(e.currentTarget);
        $this.attr("href", "/").attr("target", "_self");
      });
      if (!config.showGoogleButtonOnBing)
        return;
      const $q = $2("#sb_form_q");
      const searchQuery = $q.val();
      const $a = $2(`
      <a href="https://www.google.com/search?q=${encodeURIComponent(
        escapeHtml(searchQuery)
      )}" target="google" tabindex="10" rel="noopener noreferrer nofollow" title="search with Google">
        <img src="${chrome.runtime.getURL("images/google.png")}" alt="google" style="width: 100%;display: block;">
      </a>`).css({
        position: "absolute",
        left: 0,
        top: 0,
        width: "70px",
        height: "23px",
        display: "inline-block",
        "z-index": 999,
        transition: "all .3s",
        transform: "translate3d(835px, 13px, 0px)",
        "will-change": "transform",
        cursor: "pointer"
      });
      $2("#sb_form").css("position", "relative").prepend($a);
      $a.on("click", async (e) => {
        const $this = $2(e.currentTarget);
        e.preventDefault();
        let val = "";
        if (!val) {
          val = $q.val().trim();
        }
        const url = `https://www.google.com/search?q=${encodeURIComponent(val)}`;
        $this.attr("href", url);
        await openUrlInSameTab(url);
      });
      if (location.search.includes("showconv=1")) {
        $a.css("display", "none");
        setTimeout(() => {
          $a.css("display", "inline-block");
        }, 1200);
      }
      const changeGoogleLinkPosition = () => {
        const $conv = $2("#b-scopeListItem-conv");
        const isNewBingOpen = $conv.hasClass("b_active");
        if (isNewBingOpen) {
          let left = 0;
          if ($conv.offset().left) {
            left = $conv.offset().left + $conv.width() + 30;
          } else {
            left = 350;
          }
          $a.css({
            transform: `translate3d(${left}px, 15px, 0)`
          });
        } else {
          $a.css({
            transform: "translate3d(835px, 15px, 0)"
          });
        }
        if (!isNewBingOpen && $2(".b_searchboxForm").hasClass("as_rsform")) {
          $a.css({
            transform: "translate3d(1155px, 15px, 0)"
          });
        }
      };
      changeGoogleLinkPosition();
      new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
          const target = mutation.target;
          if (!target)
            continue;
          if (target.id === "b-scopeListItem-conv") {
            changeGoogleLinkPosition();
          }
          if (target.classList.contains("b_searchboxForm")) {
            changeGoogleLinkPosition();
          }
        }
      }).observe(document.getElementById("b_header"), mutationConfig);
    });
  };

  // src/content_script/chat-handler.ts
  var isGoogle = checkIsGoogle();
  var chat_handler_default = async ($2, config) => {
    let prompt = "";
    if (isGoogle) {
      prompt = new URLSearchParams(location.search).get("q") ?? "";
    }
    const extra = new URLSearchParams(location.hash.slice(1)).get("new-bing-anywhere") ?? "";
    const qs = {
      prompt: prompt.trim(),
      extra
    };
    const chatIframeUrl = chrome.runtime.getURL(`/app/index.html#/chat/iframe?${new URLSearchParams(qs).toString()}`);
    try {
      const $ifame = $2(`<iframe src="${chatIframeUrl}" scrolling="no" />`);
      $ifame.css({
        // position: 'fixed',
        // right: '0px',
        // zIndex: '999',
        width: "100%",
        border: "none",
        overflow: "hidden",
        boxSizing: "border-box",
        willChange: "height",
        transition: "height .1s cubic-bezier(0, 0, 0, 1.27) 0s",
        borderRadius: "8px"
      });
      window.addEventListener("message", (e) => {
        const { type, data } = e.data;
        if (type !== "nba-resize")
          return;
        const { height } = data;
        $ifame.css({
          // width,
          height
        });
      });
      let $sidebar;
      $sidebar = $2(await $w("#rhs", 1));
      if (!$sidebar.length) {
        $sidebar = $2('<div id="rhs" />').css({
          //  marginBottom: '20px', marginLeft: '30px', height: 'fit-content'
          marginLeft: "var(--rhs-margin)",
          flex: "0 auto",
          width: "var(--rhs-width)",
          position: "relative",
          paddingBottom: "15px",
          transition: "opacity 0.3s"
        });
      }
      const $bestContainer = $2(await $w(".liYKde.g.VjDLd", 0.1));
      if ($bestContainer.length) {
        $bestContainer.prepend($ifame);
      } else {
        $sidebar.prepend($ifame);
      }
      const main = await $w("#center_col");
      $sidebar.insertAfter(main);
      $2(main).after($sidebar);
    } catch {
    }
  };

  // src/content_script/google-handler.ts
  var google_handler_default = async ($2) => {
    const config = await getConfig();
    if (!config.showBingButtonOnGoogle)
      return;
    if (!(location.href.startsWith("https://www.google.com/search?") || location.href.startsWith("https://www.google.com.hk/search?"))) {
      return;
    }
    $w('[action="/search"]').then((form) => {
      if (!form)
        return;
      const $form = $2(form);
      const $q = $form.find('[name="q"]');
      const $submit = $form.find('button[type="submit"]');
      const $a = $2(`
      <a href="https://www.bing.com/search?q=Bing+AI&showconv=1" rel="noopener noreferrer nofollow" target="bing" title="search with New Bing">
        <img src="${chrome.runtime.getURL("images/bing-chat.svg")}" style="display: block; width: 24px;" alt="bing" />
      </a>`).css({
        width: "40px",
        display: "flex",
        position: "relative",
        "z-index": 999,
        cursor: "pointer",
        "justify-content": "center",
        margin: "0 10px 0 -10px"
      });
      $submit.after($a);
      $a.on("click", async (e) => {
        const $this = $2(e.currentTarget);
        e.preventDefault();
        const url = `https://www.bing.com/search?q=${encodeURIComponent($q.val())}&showconv=1`;
        $this.attr("href", url);
        await openUrlInSameTab(url);
      });
    });
  };

  // src/content_script/index.ts
  (async ($2) => {
    const $document = $2(document.documentElement);
    if ($document.find(`meta[name="${extensionName}"]`).length)
      return;
    const $meta = $2(`<meta name="${extensionName}" />`);
    $document.prepend($meta);
    callBackground("getEnv").then((env) => {
      $meta.attr("content", env.version);
    });
    getConfig().then((config) => {
      if (config.showChat) {
        chat_handler_default($2, config);
      }
    });
    if (location.hostname === "www.bing.com") {
      bing_handler_default($2);
    }
    if (location.hostname.startsWith("www.google.")) {
      google_handler_default($2);
    }
  })(window.Zepto);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vcGFja2FnZS5qc29uIiwgIi4uLy4uL3NyYy91bml2ZXJzZS91dGlscy50cyIsICIuLi8uLi9zcmMvY29udGVudF9zY3JpcHQvdXRpbHMudHMiLCAiLi4vLi4vc3JjL2NvbnRlbnRfc2NyaXB0L2JpbmctaGFuZGxlci50cyIsICIuLi8uLi9zcmMvY29udGVudF9zY3JpcHQvY2hhdC1oYW5kbGVyLnRzIiwgIi4uLy4uL3NyYy9jb250ZW50X3NjcmlwdC9nb29nbGUtaGFuZGxlci50cyIsICIuLi8uLi9zcmMvY29udGVudF9zY3JpcHQvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcbiAgXCJuYW1lXCI6IFwibmV3LWJpbmctYW55d2hlcmVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4xLjBcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOZXcgQmluZyBpc24ndCBqdXN0IGZvciBFZGdlIGFueW1vcmUuIEFueXdoZXJlIHlvdSB3YW50XCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaGFvemkvTmV3LUJpbmctQW55d2hlcmVcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9oYW96aS9OZXctQmluZy1Bbnl3aGVyZVwiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIkdQTHYzXCIsXG4gIFwiYXV0aG9yXCI6IFwiaGFvemlcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwicm0gLXJmIGRpc3QgJiYgbWtkaXIgLXAgZGlzdCAmJiBwbnBtIHJ1biBsaW50ICYmIHBucG0gcnVuIGJ1aWxkOmJ1bmRsZVwiLFxuICAgIFwiYnVpbGQ6YnVuZGxlXCI6IFwiTk9ERV9FTlY9cHJvZHVjdGlvbiB2aXRlLW5vZGUgc2NyaXB0cy9idWlsZC50cyAtLSBidWlsZFwiLFxuICAgIFwiY29weVwiOiBcInJtIC1yZiBkaXN0ICYmIGNwIC1yIHB1YmxpYyBkaXN0XCIsXG4gICAgXCJjb3B5OnNvcnVjZVwiOiBcInJzeW5jIC12aHJhIC4gZGlzdC9zb3VyY2UgLS1pbmNsdWRlPScqKi5naXRpZ25vcmUnIC0tZXhjbHVkZT0nLy5naXQnIC0tZXhjbHVkZT0nZGlzdCcgIC0tZmlsdGVyPSc6LSAuZ2l0aWdub3JlJyAtLWRlbGV0ZS1hZnRlclwiLFxuICAgIFwiY29weTp3YXRjaFwiOiBcInBucG0gcnVuIGNvcHkgLS0gLS13YXRjaFwiLFxuICAgIFwiZGV2XCI6IFwicG5wbSBydW4gbGludCAmJiBwbnBtIHJ1biAnL15kZXY6LiovJ1wiLFxuICAgIFwiZGV2OmFwcFwiOiBcInBucG0gLS1maWx0ZXIgYXBwIHJ1biBkZXZcIixcbiAgICBcImRldjpidW5kbGVcIjogXCJ2aXRlLW5vZGUgc2NyaXB0cy9idWlsZC50cyAtLSBkZXZcIixcbiAgICBcImxpbnRcIjogXCJwbnBtIHJ1biBwcmV0dGllciAmJiBwbnBtIHJ1biAnL15saW50Oi4qLydcIixcbiAgICBcImxpbnQ6ZXNsaW50XCI6IFwiZXNsaW50IC0tZXh0IC5qcywudHMgLi9zcmMgLS1maXggLS1jYWNoZVwiLFxuICAgIFwibGludDpzdHlsdXNcIjogXCJzdHlsdXMtc3VwcmVtYWN5IGZvcm1hdCAuL3NyYy8qKi8qLnN0eWwgIC0tb3B0aW9ucyAuL3N0eWx1cy1zdXByZW1hY3kuanNvbiAtLXJlcGxhY2VcIixcbiAgICBcInByZXBhcmVcIjogXCJodXNreSBpbnN0YWxsICYmIHBucG0gcnVuIGJ1aWxkXCIsXG4gICAgXCJwcmV0dGllclwiOiBcInByZXR0aWVyIC0tY2FjaGUgLS13cml0ZSAuXCIsXG4gICAgXCJwcmV0dGllcjp3YXRjaFwiOiBcIm9uY2hhbmdlIFxcXCIqKi8qXFxcIiAtLSBwcmV0dGllciAtLWNhY2hlIC0td3JpdGUgLS1pZ25vcmUtdW5rbm93biAtLWlnbm9yZS1wYXRoIC5wcmV0dGllcmlnbm9yZSB7e2NoYW5nZWR9fSA+IC9kZXYvbnVsbCAyPiYxXCIsXG4gICAgXCJ0ZXN0XCI6IFwicG5wbSBydW4gbGludFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0eXBlcy96ZXB0b1wiOiBcIl4xLjAuMzNcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdHlwZXMvY2hyb21lXCI6IFwiXjAuMC4yMzhcIixcbiAgICBcIkB0eXBlcy9mcy1leHRyYVwiOiBcIl4xMS4wLjFcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjMuMVwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNS42MC4wXCIsXG4gICAgXCJjb3B5LWFuZC13YXRjaFwiOiBcIl4wLjEuNlwiLFxuICAgIFwiZXNidWlsZFwiOiBcIl4wLjE4LjdcIixcbiAgICBcImVzYnVpbGQtcGx1Z2luLXN2Z3JcIjogXCJeMi4wLjBcIixcbiAgICBcImVzYnVpbGQtc3R5bGUtcGx1Z2luXCI6IFwiXjEuNi4yXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC40My4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXN0YW5kYXJkLXdpdGgtdHlwZXNjcmlwdFwiOiBcIl4zNS4wLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjcuNVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1uXCI6IFwiXjE2LjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1ub2RlXCI6IFwiXjExLjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl40LjIuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcm9taXNlXCI6IFwiXjYuMS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzIuMlwiLFxuICAgIFwiZnMtZXh0cmFcIjogXCJeMTEuMS4xXCIsXG4gICAgXCJodXNreVwiOiBcIl44LjAuM1wiLFxuICAgIFwibWQ1LWZpbGVcIjogXCJeNS4wLjBcIixcbiAgICBcIm9uY2hhbmdlXCI6IFwiXjcuMS4wXCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4yLjguOFwiLFxuICAgIFwic29ydC1wYWNrYWdlLWpzb25cIjogXCJeMi40LjFcIixcbiAgICBcInN0eWx1c1wiOiBcIl4wLjU5LjBcIixcbiAgICBcInN0eWx1cy1zdXByZW1hY3lcIjogXCJeMi4xNy41XCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMS4zXCIsXG4gICAgXCJ2aXRlLW5vZGVcIjogXCJeMC4zMi4yXCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCJeMjAuMy4wXCIsXG4gICAgXCJwbnBtXCI6IFwiXjguNi4zXCJcbiAgfSxcbiAgXCJleHRlbnNpb24taTE4blwiOiB7XG4gICAgXCJlblwiOiB7XG4gICAgICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiLFxuICAgICAgXCJleHRlbnNpb25EZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIENoYXQgY2FuIGJlIHVzZWQgaW4gYW55IGJyb3dzZXIsIHdpdGggYW55IHNlYXJjaCBlbmdpbmUsIGFuZCBpbiBhbnkgY291bnRyeS5cIlxuICAgIH0sXG4gICAgXCJ6aF9DTlwiOiB7XG4gICAgICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiLFxuICAgICAgXCJleHRlbnNpb25EZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIENoYXQgY2FuIGJlIHVzZWQgaW4gYW55IGJyb3dzZXIsIHdpdGggYW55IHNlYXJjaCBlbmdpbmUsIGFuZCBpbiBhbnkgY291bnRyeS4gXHU5NjhGXHU2NUY2XHU5NjhGXHU1NzMwXHVGRjBDXHU2NzA5XHU2QzQyXHU1RkM1XHU1RTk0XHUzMDAyXCJcbiAgICB9LFxuICAgIFwiemhfVFdcIjoge1xuICAgICAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIixcbiAgICAgIFwiZXh0ZW5zaW9uRGVzY3JpcHRpb25cIjogXCJOZXcgQmluZyBDaGF0IGNhbiBiZSB1c2VkIGluIGFueSBicm93c2VyLCB3aXRoIGFueSBzZWFyY2ggZW5naW5lLCBhbmQgaW4gYW55IGNvdW50cnkuIFx1OTZBOFx1NjY0Mlx1OTZBOFx1NTczMFx1RkYwQ1x1NjcwOVx1NkM0Mlx1NUZDNVx1NjFDOVwiXG4gICAgfSxcbiAgICBcInJ1XCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiXHUwNDI3XHUwNDMwXHUwNDQyIE5ldyBCaW5nIFx1MDQzQ1x1MDQzRVx1MDQzNlx1MDQzNVx1MDQ0MiBcdTA0MzhcdTA0NDFcdTA0M0ZcdTA0M0VcdTA0M0JcdTA0NENcdTA0MzdcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NENcdTA0NDFcdTA0NEYgXHUwNDMyIFx1MDQzQlx1MDQ0RVx1MDQzMVx1MDQzRVx1MDQzQyBcdTA0MzFcdTA0NDBcdTA0MzBcdTA0NDNcdTA0MzdcdTA0MzVcdTA0NDBcdTA0MzUsIFx1MDQ0MSBcdTA0M0JcdTA0NEVcdTA0MzFcdTA0NEJcdTA0M0MgXHUwNDNGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBXHUwNDNFXHUwNDMyXHUwNDRCXHUwNDNDIFx1MDQzNFx1MDQzMlx1MDQzOFx1MDQzNlx1MDQzQVx1MDQzRVx1MDQzQyBcdTA0MzggXHUwNDMyIFx1MDQzQlx1MDQ0RVx1MDQzMVx1MDQzRVx1MDQzOSBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0MzBcdTA0M0RcdTA0MzUuXCJcbiAgICB9XG4gIH0sXG4gIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCJcbn1cbiIsICJpbXBvcnQgeyB2ZXJzaW9uIGFzIHBrZ1ZlcnNpb24sIHJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyBGVUxMX1ZFUlNJT04sIE1BSU5fVkVSU0lPTiB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdHlwZSBCaW5nIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGNoZWNrSXNHb29nbGUgPSAoKSA9PiB7XG4gIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZS5pbmNsdWRlcygnZ29vZ2xlJylcbn1cbmV4cG9ydCBjb25zdCBscyA9IHtcbiAgc2V0OiBhc3luYyA8VCA9IGFueT4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgS0VZID0gYE5CQUAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfWBcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KFxuICAgICAgICB7XG4gICAgICAgICAgW0tFWV06IHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pXG4gIH0sXG4gIGdldDogYXN5bmMgPFQgPSBhbnk+KGtleTogc3RyaW5nKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiA9PiB7XG4gICAgY29uc3QgS0VZID0gYE5CQUAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfWBcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbS0VZXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3VsdFtLRVldKVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICByZW1vdmU6IGFzeW5jIChrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IEtFWSA9IGBOQkFAJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX1gXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbS0VZXSlcbiAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsbFRhYnMgPSBhc3luYyAocXVlcnlJbmZvOiBjaHJvbWUudGFicy5RdWVyeUluZm8gPSB7IHN0YXR1czogJ2NvbXBsZXRlJyB9KTogUHJvbWlzZTxJVGFiW10+ID0+IHtcbiAgY29uc3QgbmV3VGFiczogSVRhYltdID0gKGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5SW5mbykpIGFzIElUYWJbXVxuICBjb25zdCBvbGRUYWJzOiBJVGFiW10gPSB1bmlxdWUoKGF3YWl0IGxzLmdldDxJVGFiW10+KCdjdXJyZW50VGFicycpKSEpXG4gIGZvciAoY29uc3QgbmV3VGFiIG9mIG5ld1RhYnMpIHtcbiAgICBmb3IgKGNvbnN0IG9sZFRhYiBvZiBvbGRUYWJzKSB7XG4gICAgICBpZiAob2xkVGFiLnVybCAhPSBudWxsICYmIG9sZFRhYi51cmwgPT09IG5ld1RhYi51cmwpIHtcbiAgICAgICAgbmV3VGFiLiRleHRyYSA9IG9sZFRhYi4kZXh0cmFcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGV0IHRhYnMgPSBuZXdUYWJzLmNvbmNhdChvbGRUYWJzKVxuICB0YWJzID0gdGFicy5maWx0ZXIoKHRhYikgPT4ge1xuICAgIGNvbnN0IHVybCA9IHRhYi51cmwgPz8gJydcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCB1cmwuc3RhcnRzV2l0aCgnY2hyb21lLWV4dGVuc2lvbjovLycpXG4gIH0pXG4gIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgaWYgKHRhYi51cmwgPT0gbnVsbCkgcmV0dXJuXG4gICAgdGFiLnVybCA9IHRhYi51cmwucmVwbGFjZSgvIy4qJC8sICcnKVxuICB9KVxuICB0YWJzID0gdW5pcXVlKHRhYnMsICd1cmwnKS5zbGljZSgwLCA1MDAwKVxuICByZXR1cm4gdGFic1xufVxuXG5leHBvcnQgY29uc3QgdW5pcXVlID0gPFQ+KGFycjogVFtdLCBrZXk6IHN0cmluZyA9ICd1cmwnKTogVFtdID0+IHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcCgpXG4gIHJldHVybiBhcnIuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICBpZiAobWFwLmhhcyhpdGVtW2tleV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLnNldChpdGVtW2tleV0sIHRydWUpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IHR5cGUgSVRhYiA9IGNocm9tZS50YWJzLlRhYiAmIHtcbiAgJGV4dHJhPzoge1xuICAgIGxhc3RNb2RpZmllZDogbnVtYmVyXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZpbmRTYW1lVXJsVGFiID0gYXN5bmMgKHVybD86IHN0cmluZywgcXVlcnlJbmZvOiBjaHJvbWUudGFicy5RdWVyeUluZm8gPSB7fSk6IFByb21pc2U8Y2hyb21lLnRhYnMuVGFiIHwgbnVsbD4gPT4ge1xuICBpZiAoIXVybCkgcmV0dXJuIG51bGxcbiAgY29uc3Qgb3BlbmVkVGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5SW5mbylcbiAgcmV0dXJuIChcbiAgICBvcGVuZWRUYWJzLmZpbmQoKG9wZW5lZFRhYikgPT4ge1xuICAgICAgaWYgKCFvcGVuZWRUYWIudXJsKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiBub3JtYWxpemVVcmwob3BlbmVkVGFiLnVybCkgPT09IHVybFxuICAgIH0pID8/IG51bGxcbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplVXJsID0gKHVybDogc3RyaW5nID0gJycpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoLyMuKiQvLCAnJylcbn1cblxuZXhwb3J0IGNvbnN0IHNsZWVwID0gYXN5bmMgKGRlbGF5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KVxuICB9KVxufVxuXG4vKipcbiAqIGNoZWNrIGlmIGlzIENoaW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGNoZWNrSXNTaW1wbGVDaGluZXNlID0gKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGxhbmcgPSBjaHJvbWUuaTE4bi5nZXRVSUxhbmd1YWdlKCkudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiBsYW5nID09PSAnemgtY24nXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0lzQ2hpbmVzZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsYW5nID0gY2hyb21lLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gbGFuZyA9PT0gJ3poLWNuJyB8fCBsYW5nID09PSAnemgtdHcnIHx8IGxhbmcgPT09ICd6aC1oaycgfHwgbGFuZyA9PT0gJ3poJ1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIGNoZWNrIGlmIGluIE1haW5sYW5kIENoaW5hXG4gKi9cbmV4cG9ydCBjb25zdCBpc0NOID0gKCkgPT4ge1xuICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgQ09ORklHX0tFWSA9ICdjb25maWdWMSdcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgc2hvd0dvb2dsZUJ1dHRvbk9uQmluZzogYm9vbGVhblxuICBzaG93QmluZ0J1dHRvbk9uR29vZ2xlOiBib29sZWFuXG4gIHNob3dHdWlkZVRvR2l0aHViOiBib29sZWFuXG4gIHNob3dDaGF0OiBib29sZWFuXG4gIHNob3dSZWxlYXNlOiBib29sZWFuXG4gIHRyaWdnZXJNb2RlOiAnQWx3YXlzJyB8ICdRdWVzdGlvbm1hcmsnIHwgJ01hbnVhbGx5J1xuICBjb252ZXJzYXRpb25TdHlsZTogQmluZy5Db252ZXJzYXRpb25TdHlsZVxufVxuZXhwb3J0IGNvbnN0IGdldENvbmZpZyA9IGFzeW5jICgpOiBQcm9taXNlPENvbmZpZz4gPT4ge1xuICBjb25zdCBjb25maWcgPSAoYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoQ09ORklHX0tFWSkpW0NPTkZJR19LRVldXG4gIHJldHVybiB7XG4gICAgc2hvd0dvb2dsZUJ1dHRvbk9uQmluZzogdHJ1ZSxcbiAgICBzaG93QmluZ0J1dHRvbk9uR29vZ2xlOiB0cnVlLFxuICAgIHNob3dHdWlkZVRvR2l0aHViOiB0cnVlLFxuICAgIHNob3dDaGF0OiB0cnVlLFxuICAgIHNob3dSZWxlYXNlOiB0cnVlLFxuICAgIHRyaWdnZXJNb2RlOiAnQWx3YXlzJyxcbiAgICBjb252ZXJzYXRpb25TdHlsZTogJ0JhbGFuY2VkJyxcbiAgICAuLi5jb25maWdcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Q29uZmlnID0gYXN5bmMgKHZhbHVlczogUGFydGlhbDxDb25maWc+KSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGdldENvbmZpZygpXG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICBbQ09ORklHX0tFWV06IHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIC4uLnZhbHVlc1xuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGVzY2FwZUh0bWwgPSAoczogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIFN0cmluZyhzKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXFwvL2csICcmI3gyZjsnKVxufVxuXG50eXBlIElNZXRob2RzID0gUmVjb3JkPHN0cmluZywgKC4uLmFyZ3M6IGFueVtdKSA9PiBQcm9taXNlPGFueT4+XG5leHBvcnQgY29uc3QgcmVnaXN0cnlMaXN0ZW5lciA9IChjYWxsTWV0aG9kczogSU1ldGhvZHMpID0+IHtcbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXEsIF9zZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIDsoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gaWYgbm90IHJldHVybiB0cnVlIGltbWVkaWF0ZWx5XHVGRjBDd2lsbCB0aHJvdyBlcnJvciBgVW5jaGVja2VkIHJ1bnRpbWUubGFzdEVycm9yOiBUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuYFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBtZXRob2QsIGFyZ3MgfSA9IHJlcVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbE1ldGhvZHNbbWV0aG9kXSguLi5hcmdzKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBjb2RlOiAyMDAsIG1zZzogJ29rJywgZGF0YSB9KVxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGUgPz8ge31cbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgY29kZTogNTAwLCBtc2c6IGVyci5zdGFjayA/PyBlcnIubWVzc2FnZSA/PyBlIH0pXG4gICAgICB9XG4gICAgfSkoKVxuICAgIHJldHVybiB0cnVlXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjYWxsQmFja2dyb3VuZCA9IGFzeW5jIDxUID0gYW55PihtZXRob2Q6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IFByb21pc2U8VD4gPT4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgICAge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGFyZ3M6IFsuLi5hcmdzXVxuICAgICAgfSxcbiAgICAgIChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMgfHwgcmVzLmNvZGUgIT09IDIwMCkge1xuICAgICAgICAgIHJlamVjdChyZXM/Lm1zZylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbG9jYWxDYWNoZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHYgPSAndjEnXG4gIHJldHVybiB7XG4gICAgZ2V0OiBhc3luYyA8VCA9IGFueT4oa2V5OiBzdHJpbmcpOiBQcm9taXNlPG51bGwgfCBUPiA9PiB7XG4gICAgICBrZXkgPSBgJHt2fToke2tleX1gXG4gICAgICBjb25zdCB7IGRhdGEsIG1heEFnZSwgbGFzdE1vZGlmaWVkIH0gPSAoYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KGtleSkpPy5ba2V5XSA/PyB7fVxuICAgICAgaWYgKERhdGUubm93KCkgLSBsYXN0TW9kaWZpZWQgPiBtYXhBZ2UgKiAxMDAwKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXkpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0sXG5cbiAgICBzZXQ6IGFzeW5jIDxUID0gb2JqZWN0PihrZXk6IHN0cmluZywgZGF0YTogVCwgbWF4QWdlOiBudW1iZXIgPSBJbmZpbml0eSAvKiBcdTUzNTVcdTRGNERcdTc5RDIgKi8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIGtleSA9IGAke3Z9OiR7a2V5fWBcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCksXG4gICAgICAgICAgbWF4QWdlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSgpXG5cbmV4cG9ydCBjb25zdCB0b0RhdGFVcmwgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKGFzeW5jIChyKSA9PiBhd2FpdCByLmJsb2IoKSlcbiAgICAgIC50aGVuKChibG9iKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpXG4gICAgICB9KVxuICB9KVxufVxuXG5jb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50XG5jb25zdCB1c2VyQWdlbnREYXRhID0gKG5hdmlnYXRvciBhcyBhbnkpLnVzZXJBZ2VudERhdGFcblxuZXhwb3J0IGNvbnN0IGlzTWFjID0gdXNlckFnZW50LmluY2x1ZGVzKCdNYWNpbnRvc2gnKVxuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9IHVzZXJBZ2VudC5pbmNsdWRlcygnRmlyZWZveCcpXG5leHBvcnQgY29uc3QgaXNFZGdlID0gdXNlckFnZW50LmluY2x1ZGVzKCdFZGcvJylcbmV4cG9ydCBjb25zdCBpc0JyYXZlID0gdXNlckFnZW50RGF0YT8uYnJhbmRzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5icmFuZCA9PT0gJ0JyYXZlJykgPiAtMVxuZXhwb3J0IGNvbnN0IGlzQ2hpbmVzZSA9IGNoZWNrSXNDaGluZXNlKClcbmV4cG9ydCBjb25zdCBpc1NpbXBsZUNoaW5lc2UgPSBjaGVja0lzU2ltcGxlQ2hpbmVzZSgpXG5leHBvcnQgY29uc3QgaXNDYW5hcnk6IGJvb2xlYW4gPSAhIWdsb2JhbFRoaXMuX19OQkFfaXNDYW5hcnlcbmV4cG9ydCBjb25zdCB2ZXJzaW9uOiBzdHJpbmcgPSBpc0NhbmFyeSA/IGAwLiR7cGtnVmVyc2lvbn1gIDogcGtnVmVyc2lvblxuXG5leHBvcnQgY29uc3QgZ2VuVUEgPSAoKSA9PiB7XG4gIGxldCB1YSA9IHVzZXJBZ2VudFxuICBpZiAoIWlzRWRnZSkge1xuICAgIGlmIChpc01hYykge1xuICAgICAgdWEgPSBgTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLyR7TUFJTl9WRVJTSU9OfS4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8ke0ZVTExfVkVSU0lPTn1gXG4gICAgfSBlbHNlIHtcbiAgICAgIHVhID0gYE1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8ke01BSU5fVkVSU0lPTn0uMC4wLjAgU2FmYXJpLzUzNy4zNiBFZGcvJHtGVUxMX1ZFUlNJT059YFxuICAgIH1cbiAgfVxuICByZXR1cm4gdWFcbn1cblxuZXhwb3J0IGNvbnN0IGdlbklzc3VlVXJsID0gYXN5bmMgKGV4dHJhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4pID0+IHtcbiAgY29uc3QgcmVwb3NpdG9yeVVybDogc3RyaW5nID0gcmVwb3NpdG9yeS51cmxcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKVxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gYCR7cmVwb3NpdG9yeVVybH0vaXNzdWVzL25ldz90aXRsZT0mYm9keT1gXG4gICAgbGV0IGZpbmFsVXJsOiBzdHJpbmcgPSB1cmxcbiAgICBsZXQgY29tbWVudCA9XG4gICAgICAnUGxlYXNlIHdyaXRlIHlvdXIgY29tbWVudCBBQk9WRSB0aGlzIGxpbmUsIHByb3ZpZGUgYXMgbXVjaCBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhbmQgc2NyZWVuc2hvdHMgYXMgcG9zc2libGUuJyArXG4gICAgICAnVGhlIFVBIG1heSBub3QgbmVjZXNzYXJpbHkgcmVmbGVjdCB5b3VyIGFjdHVhbCBicm93c2VyIGFuZCBwbGF0Zm9ybSwgc28gcGxlYXNlIG1ha2Ugc3VyZSB0byBpbmRpY2F0ZSB0aGVtIGNsZWFybHkuJ1xuICAgIGlmIChpc0NoaW5lc2UpIHtcbiAgICAgIGNvbW1lbnQgPSAnXHU4QkY3XHU1NzI4XHU2QjY0XHU4ODRDXHU0RTBBXHU2NUI5XHU1M0QxXHU4ODY4XHU2MEE4XHU3Njg0XHU4QkE4XHU4QkJBXHUzMDAyXHU4QkU2XHU1QzNEXHU3Njg0XHU2M0NGXHU4RkYwXHU1NDhDXHU2MjJBXHU1NkZFXHU2NzA5XHU1MkE5XHU0RThFXHU2MjExXHU0RUVDXHU1QjlBXHU0RjREXHU5NUVFXHU5ODk4XHVGRjBDVUEgXHU0RTBEXHU0RTAwXHU1QjlBXHU3NzFGXHU1QjlFXHU1M0NEXHU2NjIwXHU2MEE4XHU3Njg0XHU2RDRGXHU4OUM4XHU1NjY4XHU1NDhDXHU1RTczXHU1M0YwXHVGRjBDXHU4QkY3XHU1OTA3XHU2Q0U4XHU2RTA1XHU2OTVBJ1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPVxuICAgICAgJyBcXG5cXG5cXG5cXG4nICtcbiAgICAgIGA8IS0tICAke2NvbW1lbnR9IC0tPlxcbmAgK1xuICAgICAgT2JqZWN0LmVudHJpZXM8c3RyaW5nPih7XG4gICAgICAgIFZlcnNpb246IGAke3ZlcnNpb259JHtpc0NhbmFyeSA/ICcgKENhbmFyeSknIDogJyd9IGAsXG4gICAgICAgIFVBOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICBMYW5nOiBjaHJvbWUuaTE4bi5nZXRVSUxhbmd1YWdlKCksXG4gICAgICAgIEFjY2VwdExhbmdzOiAoYXdhaXQgY2hyb21lLmkxOG4uZ2V0QWNjZXB0TGFuZ3VhZ2VzKCkpLmpvaW4oJywgJyksXG4gICAgICAgIGNvbmZpZzogSlNPTi5zdHJpbmdpZnkoY29uZmlnKSxcbiAgICAgICAgLi4uZXh0cmFcbiAgICAgIH0pXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICByZXR1cm4gdmFsID8gYCR7a2V5fTogJHt2YWx9YCA6ICcnXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCdcXG4nKVxuXG4gICAgZmluYWxVcmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGJvZHkuc2xpY2UoMCwgMjAwMCkpXG4gICAgcmV0dXJuIGZpbmFsVXJsXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiByZXBvc2l0b3J5VXJsXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjYWxsQmFja2dyb3VuZCB9IGZyb20gJ0BAL3V0aWxzJ1xuXG5leHBvcnQgY29uc3Qgb3BlblVybEluU2FtZVRhYiA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBjYWxsQmFja2dyb3VuZCgnb3BlblVybEluU2FtZVRhYicsIFt7IHVybCB9XSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZSlcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG11dGF0aW9uQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfVxuXG5jb25zdCAkID0gKHMsIHBhcmVudCA9IGRvY3VtZW50KSA9PiBwYXJlbnQucXVlcnlTZWxlY3RvcihzKVxuXG5leHBvcnQgY29uc3QgJHcgPSBhc3luYyAoZG9tU2VsZWN0b3I6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gMzAgLyogc2Vjb25kICovLCBwYXJlbnQgPSBkb2N1bWVudCk6IFByb21pc2U8RWxlbWVudCB8IG51bGw+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgJGRvbSA9ICQoZG9tU2VsZWN0b3IsIHBhcmVudClcbiAgICBpZiAoJGRvbSkge1xuICAgICAgcmVzb2x2ZSgkZG9tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoX211dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcbiAgICAgIGNvbnN0ICRkb20gPSAkKGRvbVNlbGVjdG9yLCBwYXJlbnQpXG4gICAgICBpZiAoJGRvbSkge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgcmVzb2x2ZSgkZG9tKVxuICAgICAgfVxuICAgIH0pXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwgbXV0YXRpb25Db25maWcpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0ICRkb20gPSAkKGRvbVNlbGVjdG9yLCBwYXJlbnQpXG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIHJlc29sdmUoJGRvbSlcbiAgICB9LCB0aW1lb3V0ICogMTAwMClcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBjYWxsQmFja2dyb3VuZCwgZXNjYXBlSHRtbCwgZ2V0Q29uZmlnLCBpc0VkZ2UsIHNldENvbmZpZyB9IGZyb20gJ0BAL3V0aWxzJ1xuaW1wb3J0IHsgJHcsIG11dGF0aW9uQ29uZmlnLCBvcGVuVXJsSW5TYW1lVGFiIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCQ6IFplcHRvU3RhdGljKSA9PiB7XG4gIGlmICghaXNFZGdlKSB7XG4gICAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnRcbiAgICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICBzLnNyYyA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW5qZWN0LmpzJylcbiAgICBzLm9ubG9hZCA9IHMucmVtb3ZlXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHMpXG4gIH1cblxuICAkKCgpID0+IHtcbiAgICA7KGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgc2hvd0d1aWRlVG9HaXRodWIgfSA9IGF3YWl0IGdldENvbmZpZygpXG4gICAgICBpZiAoIXNob3dHdWlkZVRvR2l0aHViKSByZXR1cm5cbiAgICAgIGNvbnN0ICRlc2F0U3dpdGNoID0gJCgnI2VzdF9zd2l0Y2gnKVxuICAgICAgaWYgKCQudHJpbSgkZXNhdFN3aXRjaC50ZXh0KCkpICE9PSAnXHU1NkZEXHU1MTg1XHU3MjQ4XHU1NkZEXHU5NjQ1XHU3MjQ4JykgcmV0dXJuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgJGEgPSAkKFxuICAgICAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hhb3ppL05ldy1CaW5nLUFueXdoZXJlL2lzc3Vlcy84XCIgdGl0bGU9XCJcdTY3RTVcdTc3MEJcdTU5ODJcdTRGNTVcdTZCNjNcdTc4NkVcdTkxNERcdTdGNkVcdTdGNTFcdTdFRENcdTRFRTNcdTc0MDZcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCI+XHU0RjlEXHU3MTM2XHU1MUZBXHU3M0IwXHU1NkZEXHU1MTg1XHU3MjQ4L1x1NTZGRFx1OTY0NVx1NzI0OFx1RkYxRjwvYT4nXG4gICAgICAgIClcbiAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgIGNvbG9yOiAnI0U4OUFCRScsXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiAnMC41cHggMC4xcHggMXB4ICM1ODA3MEQnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNldENvbmZpZyh7IHNob3dHdWlkZVRvR2l0aHViOiBmYWxzZSB9KVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgJCgnI2VzdF9zd2l0Y2gnKS5hcHBlbmQoJGEpLmNzcygnd2lkdGgnLCAnYXV0bycpXG4gICAgICB9LCAyMDAwKVxuICAgIH0pKClcbiAgfSlcblxuICBpZiAoIWxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aCgnaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoPycpKSByZXR1cm5cbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKClcblxuICAkdygnI3NiX2Zvcm0nKS50aGVuKCgpID0+IHtcbiAgICB0eXBlIE5vdGUgPSB7XG4gICAgICBodG1sX3VybDogc3RyaW5nXG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgfSB8IG51bGxcbiAgICBjYWxsQmFja2dyb3VuZCgnZ2V0Tm90aWZpY2F0aW9uJykudGhlbigobm90ZTogTm90ZSkgPT4ge1xuICAgICAgaWYgKCFub3RlKSByZXR1cm5cbiAgICAgIGNvbnN0ICRib2R5ID0gJChkb2N1bWVudC5ib2R5KVxuICAgICAgY29uc3QgJGRpdiA9ICQoJzxkaXYvPicpLmNzcyh7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNTkwNzI3JyxcbiAgICAgICAgYmFja2dyb3VuZDogJyM1ODA3MGQnLFxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHpJbmRleDogOTk5OTksXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jayAhaW1wb3J0YW50J1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgICAkZGl2LnJlbW92ZSgpXG4gICAgICAgICRib2R5LmNzcygncGFkZGluZy10b3AnLCBudWxsKVxuICAgICAgfVxuICAgICAgY29uc3QgJGEgPSAkKFxuICAgICAgICBgPGEgc3R5bGU9XCJjb2xvcjojZmZmOyBiYWNrZ3JvdW5kOnVybCgke2Nocm9tZS5ydW50aW1lLmdldFVSTChcbiAgICAgICAgICAnaW1hZ2VzL2JpbmdfMzJ4MzIucG5nJ1xuICAgICAgICApfSkgbm8tcmVwZWF0IGxlZnQgMDsgYmFja2dyb3VuZC1zaXplOiAxMnB4OyBwYWRkaW5nLWxlZnQ6IDIwcHhcIiBocmVmPVwiJHtcbiAgICAgICAgICBub3RlLmh0bWxfdXJsXG4gICAgICAgIH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCI+JHtub3RlLnRpdGxlfTwvYT5gXG4gICAgICApLm9uKCdjbGljaycsIGNsb3NlKVxuICAgICAgY29uc3QgJGNsb3NlID0gJChcbiAgICAgICAgJzxhIGhyZWY9XCIjXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiM1ODA3MGQ7IGNvbG9yOiNmZmY7IGN1cnNvcjpwb2ludGVyO3BhZGRpbmc6IDAgNjhweCAwIDE4cHg7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OjBcIiB0aXRsZT1cIm5vIHJlbWluZGVyXCI+XHUyNzE1PC9hPidcbiAgICAgICkub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSBuZXZlciBzZWUgdGhpcyBub3RpY2UgYWdhaW4/JykgJiYgY2FsbEJhY2tncm91bmQoJ2hpZGVOb3RpZmljYXRpb24nKVxuICAgICAgICBjbG9zZSgpXG4gICAgICB9KVxuICAgICAgJGRpdi5hcHBlbmQoJGEpLmFwcGVuZCgkY2xvc2UpXG4gICAgICAkYm9keS5hcHBlbmQoJGRpdikuY3NzKCdwYWRkaW5nLXRvcCcsIDQwKVxuICAgIH0pXG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsICdhLmJfbG9nb0FyZWEnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKGUuY3VycmVudFRhcmdldClcbiAgICAgICR0aGlzLmF0dHIoJ2hyZWYnLCAnLycpLmF0dHIoJ3RhcmdldCcsICdfc2VsZicpXG4gICAgfSlcblxuICAgIGlmICghY29uZmlnLnNob3dHb29nbGVCdXR0b25PbkJpbmcpIHJldHVyblxuXG4gICAgY29uc3QgJHEgPSAkKCcjc2JfZm9ybV9xJylcbiAgICBjb25zdCBzZWFyY2hRdWVyeTogc3RyaW5nID0gJHEudmFsKClcblxuICAgIGNvbnN0ICRhID0gJChgXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgZXNjYXBlSHRtbChzZWFyY2hRdWVyeSlcbiAgICAgICl9XCIgdGFyZ2V0PVwiZ29vZ2xlXCIgdGFiaW5kZXg9XCIxMFwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0aXRsZT1cInNlYXJjaCB3aXRoIEdvb2dsZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Y2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvZ29vZ2xlLnBuZycpfVwiIGFsdD1cImdvb2dsZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7ZGlzcGxheTogYmxvY2s7XCI+XG4gICAgICA8L2E+YCkuY3NzKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoOiAnNzBweCcsXG4gICAgICBoZWlnaHQ6ICcyM3B4JyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgJ3otaW5kZXgnOiA5OTksXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIC4zcycsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg4MzVweCwgMTNweCwgMHB4KScsXG4gICAgICAnd2lsbC1jaGFuZ2UnOiAndHJhbnNmb3JtJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfSlcblxuICAgICQoJyNzYl9mb3JtJykuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpLnByZXBlbmQoJGEpXG5cbiAgICAkYS5vbignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKGUuY3VycmVudFRhcmdldClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbGV0IHZhbCA9ICcnXG4gICAgICAvLyBpZiAoJCgnI2Itc2NvcGVMaXN0SXRlbS1jb252JykuaGFzQ2xhc3MoJ2JfYWN0aXZlJykpIHtcbiAgICAgIC8vICAgdmFsID0gKCQoJyNzZWFyY2hib3gnKS52YWwoKSA/PyAnJykudHJpbSgpXG4gICAgICAvLyB9XG4gICAgICBpZiAoIXZhbCkge1xuICAgICAgICB2YWwgPSAkcS52YWwoKS50cmltKClcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbCl9YFxuICAgICAgJHRoaXMuYXR0cignaHJlZicsIHVybClcbiAgICAgIGF3YWl0IG9wZW5VcmxJblNhbWVUYWIodXJsKVxuICAgIH0pXG5cbiAgICBpZiAobG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdzaG93Y29udj0xJykpIHtcbiAgICAgICRhLmNzcygnZGlzcGxheScsICdub25lJylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkYS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcbiAgICAgIH0sIDEyMDApXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlR29vZ2xlTGlua1Bvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgJGNvbnYgPSAkKCcjYi1zY29wZUxpc3RJdGVtLWNvbnYnKVxuICAgICAgY29uc3QgaXNOZXdCaW5nT3BlbiA9ICRjb252Lmhhc0NsYXNzKCdiX2FjdGl2ZScpXG4gICAgICBpZiAoaXNOZXdCaW5nT3Blbikge1xuICAgICAgICBsZXQgbGVmdCA9IDBcbiAgICAgICAgaWYgKCRjb252Lm9mZnNldCgpIS5sZWZ0KSB7XG4gICAgICAgICAgbGVmdCA9ICRjb252Lm9mZnNldCgpIS5sZWZ0ICsgJGNvbnYud2lkdGgoKSEgKyAzMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQgPSAzNTBcbiAgICAgICAgfVxuXG4gICAgICAgICRhLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtsZWZ0fXB4LCAxNXB4LCAwKWBcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRhLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoODM1cHgsIDE1cHgsIDApJ1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmV3QmluZ09wZW4gJiYgJCgnLmJfc2VhcmNoYm94Rm9ybScpLmhhc0NsYXNzKCdhc19yc2Zvcm0nKSkge1xuICAgICAgICAkYS5jc3Moe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDExNTVweCwgMTVweCwgMCknXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlR29vZ2xlTGlua1Bvc2l0aW9uKClcbiAgICBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0XG4gICAgICAgIGlmICghdGFyZ2V0KSBjb250aW51ZVxuICAgICAgICBpZiAoKHRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgPT09ICdiLXNjb3BlTGlzdEl0ZW0tY29udicpIHtcbiAgICAgICAgICBjaGFuZ2VHb29nbGVMaW5rUG9zaXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGlmICgodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2Jfc2VhcmNoYm94Rm9ybScpKSB7XG4gICAgICAgICAgY2hhbmdlR29vZ2xlTGlua1Bvc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JfaGVhZGVyJykhLCBtdXRhdGlvbkNvbmZpZylcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyB0eXBlIENvbmZpZywgY2hlY2tJc0dvb2dsZSB9IGZyb20gJ0BAL3V0aWxzJ1xuaW1wb3J0IHsgJHcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCBpc0dvb2dsZSA9IGNoZWNrSXNHb29nbGUoKVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCQ6IFplcHRvU3RhdGljLCBjb25maWc6IENvbmZpZykgPT4ge1xuICBsZXQgcHJvbXB0ID0gJydcbiAgaWYgKGlzR29vZ2xlKSB7XG4gICAgcHJvbXB0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLmdldCgncScpID8/ICcnXG4gIH1cblxuICBjb25zdCBleHRyYSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uaGFzaC5zbGljZSgxKSkuZ2V0KCduZXctYmluZy1hbnl3aGVyZScpID8/ICcnXG5cbiAgY29uc3QgcXMgPSB7XG4gICAgcHJvbXB0OiBwcm9tcHQudHJpbSgpLFxuICAgIGV4dHJhXG4gIH1cblxuICBjb25zdCBjaGF0SWZyYW1lVXJsID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKGAvYXBwL2luZGV4Lmh0bWwjL2NoYXQvaWZyYW1lPyR7bmV3IFVSTFNlYXJjaFBhcmFtcyhxcykudG9TdHJpbmcoKX1gKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgJGlmYW1lID0gJChgPGlmcmFtZSBzcmM9XCIke2NoYXRJZnJhbWVVcmx9XCIgc2Nyb2xsaW5nPVwibm9cIiAvPmApXG4gICAgJGlmYW1lLmNzcyh7XG4gICAgICAvLyBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIC8vIHJpZ2h0OiAnMHB4JyxcbiAgICAgIC8vIHpJbmRleDogJzk5OScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIHdpbGxDaGFuZ2U6ICdoZWlnaHQnLFxuICAgICAgdHJhbnNpdGlvbjogJ2hlaWdodCAuMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAsIDEuMjcpIDBzJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzhweCdcbiAgICB9KVxuICAgIC8vICRpZmFtZS5wcmVwZW5kVG8oJ2JvZHknKVxuXG4gICAgLy8gY29uc3QgcG9zaXRpb24gPSB7IG1hcmdpbjogJzAgMCAxMHB4JyB9XG4gICAgLy8gY29uc3QgJGlmYW1lID0gJChgPGlmcmFtZSBzcmM9JHtjaHJvbWUucnVudGltZS5nZXRVUkwoJy9hcHAvaW5kZXguaHRtbCMvY2hhdCcpfS8+YCkuY3NzKHtcbiAgICAvLyAgIC4uLnBvc2l0aW9uLFxuICAgIC8vICAgd2lkdGg6ICcxMDAlJyxcbiAgICAvLyAgIGhlaWdodDogJzUwMDAnLFxuICAgIC8vICAgYm9yZGVyOiAnbm9uZScsXG4gICAgLy8gICBvdmVyRmxvdzogJ2hpZGRlbidcbiAgICAvLyB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgdHlwZSwgZGF0YSB9ID0gZS5kYXRhXG4gICAgICBpZiAodHlwZSAhPT0gJ25iYS1yZXNpemUnKSByZXR1cm5cbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBkYXRhXG4gICAgICAkaWZhbWUuY3NzKHtcbiAgICAgICAgLy8gd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgbGV0ICRzaWRlYmFyXG4gICAgJHNpZGViYXIgPSAkKGF3YWl0ICR3KCcjcmhzJywgMSkpXG4gICAgaWYgKCEkc2lkZWJhci5sZW5ndGgpIHtcbiAgICAgICRzaWRlYmFyID0gJCgnPGRpdiBpZD1cInJoc1wiIC8+JykuY3NzKHtcbiAgICAgICAgLy8gIG1hcmdpbkJvdHRvbTogJzIwcHgnLCBtYXJnaW5MZWZ0OiAnMzBweCcsIGhlaWdodDogJ2ZpdC1jb250ZW50J1xuICAgICAgICBtYXJnaW5MZWZ0OiAndmFyKC0tcmhzLW1hcmdpbiknLFxuICAgICAgICBmbGV4OiAnMCBhdXRvJyxcbiAgICAgICAgd2lkdGg6ICd2YXIoLS1yaHMtd2lkdGgpJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBhZGRpbmdCb3R0b206ICcxNXB4JyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4zcydcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0ICRiZXN0Q29udGFpbmVyID0gJChhd2FpdCAkdygnLmxpWUtkZS5nLlZqRExkJywgMC4xKSlcbiAgICBpZiAoJGJlc3RDb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAkYmVzdENvbnRhaW5lci5wcmVwZW5kKCRpZmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgJHNpZGViYXIucHJlcGVuZCgkaWZhbWUpXG4gICAgfVxuICAgIGNvbnN0IG1haW4gPSBhd2FpdCAkdygnI2NlbnRlcl9jb2wnKVxuICAgICRzaWRlYmFyLmluc2VydEFmdGVyKG1haW4pXG4gICAgJChtYWluKS5hZnRlcigkc2lkZWJhcilcbiAgfSBjYXRjaCB7fVxufVxuIiwgImltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJ0BAL3V0aWxzJ1xuaW1wb3J0IHsgJHcsIG9wZW5VcmxJblNhbWVUYWIgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoJDogWmVwdG9TdGF0aWMpID0+IHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKClcblxuICBpZiAoIWNvbmZpZy5zaG93QmluZ0J1dHRvbk9uR29vZ2xlKSByZXR1cm5cbiAgaWYgKCEobG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKCdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD8nKSB8fCBsb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20uaGsvc2VhcmNoPycpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgJHcoJ1thY3Rpb249XCIvc2VhcmNoXCJdJykudGhlbigoZm9ybSkgPT4ge1xuICAgIGlmICghZm9ybSkgcmV0dXJuXG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm0pXG4gICAgY29uc3QgJHEgPSAkZm9ybS5maW5kKCdbbmFtZT1cInFcIl0nKVxuICAgIGNvbnN0ICRzdWJtaXQgPSAkZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpXG5cbiAgICBjb25zdCAkYSA9ICQoYFxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJpbmcuY29tL3NlYXJjaD9xPUJpbmcrQUkmc2hvd2NvbnY9MVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJiaW5nXCIgdGl0bGU9XCJzZWFyY2ggd2l0aCBOZXcgQmluZ1wiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Y2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvYmluZy1jaGF0LnN2ZycpfVwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IHdpZHRoOiAyNHB4O1wiIGFsdD1cImJpbmdcIiAvPlxuICAgICAgPC9hPmApLmNzcyh7XG4gICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAnei1pbmRleCc6IDk5OSxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luOiAnMCAxMHB4IDAgLTEwcHgnXG4gICAgfSlcblxuICAgICRzdWJtaXQuYWZ0ZXIoJGEpXG4gICAgJGEub24oJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudCgkcS52YWwoKSl9JnNob3djb252PTFgXG4gICAgICAkdGhpcy5hdHRyKCdocmVmJywgdXJsKVxuICAgICAgYXdhaXQgb3BlblVybEluU2FtZVRhYih1cmwpXG4gICAgfSlcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBjYWxsQmFja2dyb3VuZCwgZ2V0Q29uZmlnIH0gZnJvbSAnQEAvdXRpbHMnXG5pbXBvcnQgeyBleHRlbnNpb25OYW1lIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xuaW1wb3J0IGJpbmdIYW5kbGVyIGZyb20gJy4vYmluZy1oYW5kbGVyJ1xuaW1wb3J0IGNoYXRIYW5kbGVyIGZyb20gJy4vY2hhdC1oYW5kbGVyJ1xuaW1wb3J0IGdvb2dsZUhhbmRsZXIgZnJvbSAnLi9nb29nbGUtaGFuZGxlcidcbjsoYXN5bmMgKCQpID0+IHtcbiAgY29uc3QgJGRvY3VtZW50ID0gJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gIGlmICgkZG9jdW1lbnQuZmluZChgbWV0YVtuYW1lPVwiJHtleHRlbnNpb25OYW1lfVwiXWApLmxlbmd0aCkgcmV0dXJuXG4gIGNvbnN0ICRtZXRhID0gJChgPG1ldGEgbmFtZT1cIiR7ZXh0ZW5zaW9uTmFtZX1cIiAvPmApXG5cbiAgJGRvY3VtZW50LnByZXBlbmQoJG1ldGEpXG5cbiAgY2FsbEJhY2tncm91bmQoJ2dldEVudicpLnRoZW4oKGVudikgPT4ge1xuICAgICRtZXRhLmF0dHIoJ2NvbnRlbnQnLCBlbnYudmVyc2lvbilcbiAgfSlcblxuICBnZXRDb25maWcoKS50aGVuKChjb25maWcpID0+IHtcbiAgICBpZiAoY29uZmlnLnNob3dDaGF0KSB7XG4gICAgICBjaGF0SGFuZGxlcigkLCBjb25maWcpXG4gICAgfVxuICB9KVxuXG4gIGlmIChsb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ3d3dy5iaW5nLmNvbScpIHtcbiAgICBiaW5nSGFuZGxlcigkKVxuICB9XG5cbiAgaWYgKGxvY2F0aW9uLmhvc3RuYW1lLnN0YXJ0c1dpdGgoJ3d3dy5nb29nbGUuJykpIHtcbiAgICBnb29nbGVIYW5kbGVyKCQpXG4gIH1cbn0pKHdpbmRvdy5aZXB0byBhcyBaZXB0b1N0YXRpYylcbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQUVFLGdCQUFXO0FBZ0ZYLHNCQUFpQjs7O0FDOUVaLE1BQU0sZ0JBQWdCLE1BQU07QUFDakMsV0FBTyxTQUFTLFNBQVMsU0FBUyxRQUFRO0FBQUEsRUFDNUM7QUFrR08sTUFBTSx1QkFBdUIsTUFBTTtBQUN4QyxRQUFJO0FBQ0YsWUFBTSxPQUFPLE9BQU8sS0FBSyxjQUFjLEVBQUUsWUFBWTtBQUNyRCxhQUFPLFNBQVM7QUFBQSxJQUNsQixRQUFFO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBRU8sTUFBTSxpQkFBaUIsTUFBTTtBQUNsQyxRQUFJO0FBQ0YsWUFBTSxPQUFPLE9BQU8sS0FBSyxjQUFjLEVBQUUsWUFBWTtBQUNyRCxhQUFPLFNBQVMsV0FBVyxTQUFTLFdBQVcsU0FBUyxXQUFXLFNBQVM7QUFBQSxJQUM5RSxRQUFFO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBU0EsTUFBTSxhQUFhO0FBVVosTUFBTSxZQUFZLFlBQTZCO0FBQ3BELFVBQU0sVUFBVSxNQUFNLE9BQU8sUUFBUSxLQUFLLElBQUksVUFBVSxHQUFHLFVBQVU7QUFDckUsV0FBTztBQUFBLE1BQ0wsd0JBQXdCO0FBQUEsTUFDeEIsd0JBQXdCO0FBQUEsTUFDeEIsbUJBQW1CO0FBQUEsTUFDbkIsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsbUJBQW1CO0FBQUEsTUFDbkIsR0FBRztBQUFBLElBQ0w7QUFBQSxFQUNGO0FBRU8sTUFBTSxZQUFZLE9BQU8sV0FBNEI7QUFDMUQsVUFBTSxTQUFTLE1BQU0sVUFBVTtBQUMvQixVQUFNLE9BQU8sUUFBUSxLQUFLLElBQUk7QUFBQSxNQUM1QixDQUFDLFVBQVUsR0FBRztBQUFBLFFBQ1osR0FBRztBQUFBLFFBQ0gsR0FBRztBQUFBLE1BQ0w7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBRU8sTUFBTSxhQUFhLENBQUMsTUFBc0I7QUFDL0MsV0FBTyxPQUFPLENBQUMsRUFDWixRQUFRLE1BQU0sT0FBTyxFQUNyQixRQUFRLE1BQU0sT0FBTyxFQUNyQixRQUFRLE1BQU0sUUFBUSxFQUN0QixRQUFRLE1BQU0sTUFBTSxFQUNwQixRQUFRLE1BQU0sTUFBTSxFQUNwQixRQUFRLE9BQU8sUUFBUTtBQUFBLEVBQzVCO0FBb0JPLE1BQU0saUJBQWlCLE9BQWdCLFFBQWdCLE9BQWMsQ0FBQyxNQUFrQjtBQUM3RixXQUFPLE1BQU0sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQzVDLGFBQU8sUUFBUTtBQUFBLFFBQ2I7QUFBQSxVQUNFO0FBQUEsVUFDQSxNQUFNLENBQUMsR0FBRyxJQUFJO0FBQUEsUUFDaEI7QUFBQSxRQUNBLENBQUMsUUFBUTtBQUNQLGNBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxLQUFLO0FBQzVCLG1CQUFPLEtBQUssR0FBRztBQUFBLFVBQ2pCLE9BQU87QUFDTCxvQkFBUSxJQUFJLElBQUk7QUFBQSxVQUNsQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUVPLE1BQU0sY0FBYyxNQUFNO0FBQy9CLFVBQU0sSUFBSTtBQUNWLFdBQU87QUFBQSxNQUNMLEtBQUssT0FBZ0IsUUFBbUM7QUFDdEQsY0FBTSxHQUFHLENBQUMsSUFBSSxHQUFHO0FBQ2pCLGNBQU0sRUFBRSxNQUFNLFFBQVEsYUFBYSxLQUFLLE1BQU0sT0FBTyxRQUFRLE1BQU0sSUFBSSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDeEYsWUFBSSxLQUFLLElBQUksSUFBSSxlQUFlLFNBQVMsS0FBTTtBQUM3QyxpQkFBTyxRQUFRLE1BQU0sT0FBTyxHQUFHO0FBQy9CLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGVBQU87QUFBQSxNQUNUO0FBQUEsTUFFQSxLQUFLLE9BQW1CLEtBQWEsTUFBUyxTQUFpQixhQUFzQztBQUNuRyxjQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUc7QUFDakIsY0FBTSxPQUFPLFFBQVEsTUFBTSxJQUFJO0FBQUEsVUFDN0IsQ0FBQyxHQUFHLEdBQUc7QUFBQSxZQUNMO0FBQUEsWUFDQSxjQUFjLEtBQUssSUFBSTtBQUFBLFlBQ3ZCO0FBQUEsVUFDRjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRixHQUFHO0FBaUJILE1BQU0sWUFBWSxVQUFVO0FBQzVCLE1BQU0sZ0JBQWlCLFVBQWtCO0FBRWxDLE1BQU0sUUFBUSxVQUFVLFNBQVMsV0FBVztBQUM1QyxNQUFNLFlBQVksVUFBVSxTQUFTLFNBQVM7QUFDOUMsTUFBTSxTQUFTLFVBQVUsU0FBUyxNQUFNO0FBQ3hDLE1BQU0sVUFBVSxlQUFlLE9BQU8sVUFBVSxDQUFDLFNBQVMsS0FBSyxVQUFVLE9BQU8sSUFBSTtBQUNwRixNQUFNLFlBQVksZUFBZTtBQUNqQyxNQUFNLGtCQUFrQixxQkFBcUI7QUFDN0MsTUFBTSxXQUFvQixDQUFDLENBQUMsV0FBVztBQUN2QyxNQUFNQSxXQUFrQixXQUFXLEtBQUssT0FBVSxLQUFLOzs7QUNsUXZELE1BQU0sbUJBQW1CLE9BQU8sUUFBZ0I7QUFDckQsUUFBSTtBQUNGLGFBQU8sTUFBTSxlQUFlLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFBQSxJQUMzRCxTQUFTLEdBQVA7QUFFQSxlQUFTLE9BQU87QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFFTyxNQUFNLGlCQUFpQixFQUFFLFlBQVksTUFBTSxXQUFXLE1BQU0sU0FBUyxLQUFLO0FBRWpGLE1BQU0sSUFBSSxDQUFDLEdBQUcsU0FBUyxhQUFhLE9BQU8sY0FBYyxDQUFDO0FBRW5ELE1BQU0sS0FBSyxPQUFPLGFBQXFCLFVBQWtCLElBQWlCLFNBQVMsYUFBc0M7QUFDOUgsV0FBTyxNQUFNLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDcEMsWUFBTSxPQUFPLEVBQUUsYUFBYSxNQUFNO0FBQ2xDLFVBQUksTUFBTTtBQUNSLGdCQUFRLElBQUk7QUFDWjtBQUFBLE1BQ0Y7QUFFQSxZQUFNLFdBQVcsSUFBSSxpQkFBaUIsQ0FBQyxlQUFlQyxjQUFhO0FBQ2pFLGNBQU1DLFFBQU8sRUFBRSxhQUFhLE1BQU07QUFDbEMsWUFBSUEsT0FBTTtBQUNSLFVBQUFELFVBQVMsV0FBVztBQUNwQixrQkFBUUMsS0FBSTtBQUFBLFFBQ2Q7QUFBQSxNQUNGLENBQUM7QUFDRCxlQUFTLFFBQVEsVUFBVSxjQUFjO0FBRXpDLGlCQUFXLE1BQU07QUFDZixjQUFNQSxRQUFPLEVBQUUsYUFBYSxNQUFNO0FBQ2xDLGlCQUFTLFdBQVc7QUFDcEIsZ0JBQVFBLEtBQUk7QUFBQSxNQUNkLEdBQUcsVUFBVSxHQUFJO0FBQUEsSUFDbkIsQ0FBQztBQUFBLEVBQ0g7OztBQ25DQSxNQUFPLHVCQUFRLE9BQU9DLE9BQW1CO0FBQ3ZDLFFBQUksQ0FBQyxRQUFRO0FBQ1gsWUFBTUMsWUFBVyxPQUFPO0FBQ3hCLFlBQU0sSUFBSUEsVUFBUyxjQUFjLFFBQVE7QUFDekMsUUFBRSxNQUFNLE9BQU8sUUFBUSxPQUFPLFdBQVc7QUFDekMsUUFBRSxTQUFTLEVBQUU7QUFDYixNQUFBQSxVQUFTLGdCQUFnQixZQUFZLENBQUM7QUFBQSxJQUN4QztBQUVBLElBQUFELEdBQUUsTUFBTTtBQUNOO0FBQUMsT0FBQyxZQUFZO0FBQ1osY0FBTSxFQUFFLGtCQUFrQixJQUFJLE1BQU0sVUFBVTtBQUM5QyxZQUFJLENBQUM7QUFBbUI7QUFDeEIsY0FBTSxjQUFjQSxHQUFFLGFBQWE7QUFDbkMsWUFBSUEsR0FBRSxLQUFLLFlBQVksS0FBSyxDQUFDLE1BQU07QUFBVTtBQUM3QyxtQkFBVyxNQUFNO0FBQ2YsZ0JBQU0sS0FBS0E7QUFBQSxZQUNUO0FBQUEsVUFDRixFQUNHLElBQUk7QUFBQSxZQUNILE9BQU87QUFBQSxZQUNQLFlBQVk7QUFBQSxZQUNaLFVBQVU7QUFBQSxZQUNWLFlBQVk7QUFBQSxVQUNkLENBQUMsRUFDQSxNQUFNLE1BQU07QUFDWCxzQkFBVSxFQUFFLG1CQUFtQixNQUFNLENBQUM7QUFBQSxVQUN4QyxDQUFDO0FBRUgsVUFBQUEsR0FBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxTQUFTLE1BQU07QUFBQSxRQUNqRCxHQUFHLEdBQUk7QUFBQSxNQUNULEdBQUc7QUFBQSxJQUNMLENBQUM7QUFFRCxRQUFJLENBQUMsU0FBUyxLQUFLLFdBQVcsOEJBQThCO0FBQUc7QUFDL0QsVUFBTSxTQUFTLE1BQU0sVUFBVTtBQUUvQixPQUFHLFVBQVUsRUFBRSxLQUFLLE1BQU07QUFLeEIscUJBQWUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQWU7QUFDckQsWUFBSSxDQUFDO0FBQU07QUFDWCxjQUFNLFFBQVFBLEdBQUUsU0FBUyxJQUFJO0FBQzdCLGNBQU0sT0FBT0EsR0FBRSxRQUFRLEVBQUUsSUFBSTtBQUFBLFVBQzNCLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLFlBQVk7QUFBQSxVQUNaLFVBQVU7QUFBQSxVQUNWLEtBQUs7QUFBQSxVQUNMLFVBQVU7QUFBQSxVQUNWLFlBQVk7QUFBQSxVQUNaLFdBQVc7QUFBQSxVQUNYLFFBQVE7QUFBQSxVQUNSLFlBQVk7QUFBQSxVQUNaLGNBQWM7QUFBQSxVQUNkLFNBQVM7QUFBQSxRQUNYLENBQUM7QUFDRCxjQUFNLFFBQVEsTUFBTTtBQUNsQixlQUFLLE9BQU87QUFDWixnQkFBTSxJQUFJLGVBQWUsSUFBSTtBQUFBLFFBQy9CO0FBQ0EsY0FBTUUsTUFBS0Y7QUFBQSxVQUNULHdDQUF3QyxPQUFPLFFBQVE7QUFBQSxZQUNyRDtBQUFBLFVBQ0YsQ0FBQyx3RUFDQyxLQUFLLFFBQ1Asd0RBQXdELEtBQUssS0FBSztBQUFBLFFBQ3BFLEVBQUUsR0FBRyxTQUFTLEtBQUs7QUFDbkIsY0FBTSxTQUFTQTtBQUFBLFVBQ2I7QUFBQSxRQUNGLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTTtBQUNuQixZQUFFLGVBQWU7QUFDakIsa0JBQVEsMkNBQTJDLEtBQUssZUFBZSxrQkFBa0I7QUFDekYsZ0JBQU07QUFBQSxRQUNSLENBQUM7QUFDRCxhQUFLLE9BQU9FLEdBQUUsRUFBRSxPQUFPLE1BQU07QUFDN0IsY0FBTSxPQUFPLElBQUksRUFBRSxJQUFJLGVBQWUsRUFBRTtBQUFBLE1BQzFDLENBQUM7QUFFRCxNQUFBRixHQUFFLFNBQVMsSUFBSSxFQUFFLEdBQUcsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFNO0FBQ2xELGNBQU0sUUFBUUEsR0FBRSxFQUFFLGFBQWE7QUFDL0IsY0FBTSxLQUFLLFFBQVEsR0FBRyxFQUFFLEtBQUssVUFBVSxPQUFPO0FBQUEsTUFDaEQsQ0FBQztBQUVELFVBQUksQ0FBQyxPQUFPO0FBQXdCO0FBRXBDLFlBQU0sS0FBS0EsR0FBRSxZQUFZO0FBQ3pCLFlBQU0sY0FBc0IsR0FBRyxJQUFJO0FBRW5DLFlBQU0sS0FBS0EsR0FBRTtBQUFBLGlEQUNnQztBQUFBLFFBQ3pDLFdBQVcsV0FBVztBQUFBLE1BQ3hCLENBQUM7QUFBQSxvQkFDYSxPQUFPLFFBQVEsT0FBTyxtQkFBbUIsQ0FBQztBQUFBLFdBQ25ELEVBQUUsSUFBSTtBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsZUFBZTtBQUFBLFFBQ2YsUUFBUTtBQUFBLE1BQ1YsQ0FBQztBQUVELE1BQUFBLEdBQUUsVUFBVSxFQUFFLElBQUksWUFBWSxVQUFVLEVBQUUsUUFBUSxFQUFFO0FBRXBELFNBQUcsR0FBRyxTQUFTLE9BQU8sTUFBTTtBQUMxQixjQUFNLFFBQVFBLEdBQUUsRUFBRSxhQUFhO0FBQy9CLFVBQUUsZUFBZTtBQUNqQixZQUFJLE1BQU07QUFJVixZQUFJLENBQUMsS0FBSztBQUNSLGdCQUFNLEdBQUcsSUFBSSxFQUFFLEtBQUs7QUFBQSxRQUN0QjtBQUNBLGNBQU0sTUFBTSxtQ0FBbUMsbUJBQW1CLEdBQUcsQ0FBQztBQUN0RSxjQUFNLEtBQUssUUFBUSxHQUFHO0FBQ3RCLGNBQU0saUJBQWlCLEdBQUc7QUFBQSxNQUM1QixDQUFDO0FBRUQsVUFBSSxTQUFTLE9BQU8sU0FBUyxZQUFZLEdBQUc7QUFDMUMsV0FBRyxJQUFJLFdBQVcsTUFBTTtBQUN4QixtQkFBVyxNQUFNO0FBQ2YsYUFBRyxJQUFJLFdBQVcsY0FBYztBQUFBLFFBQ2xDLEdBQUcsSUFBSTtBQUFBLE1BQ1Q7QUFFQSxZQUFNLDJCQUEyQixNQUFNO0FBQ3JDLGNBQU0sUUFBUUEsR0FBRSx1QkFBdUI7QUFDdkMsY0FBTSxnQkFBZ0IsTUFBTSxTQUFTLFVBQVU7QUFDL0MsWUFBSSxlQUFlO0FBQ2pCLGNBQUksT0FBTztBQUNYLGNBQUksTUFBTSxPQUFPLEVBQUcsTUFBTTtBQUN4QixtQkFBTyxNQUFNLE9BQU8sRUFBRyxPQUFPLE1BQU0sTUFBTSxJQUFLO0FBQUEsVUFDakQsT0FBTztBQUNMLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGFBQUcsSUFBSTtBQUFBLFlBQ0wsV0FBVyxlQUFlLElBQUk7QUFBQSxVQUNoQyxDQUFDO0FBQUEsUUFDSCxPQUFPO0FBQ0wsYUFBRyxJQUFJO0FBQUEsWUFDTCxXQUFXO0FBQUEsVUFDYixDQUFDO0FBQUEsUUFDSDtBQUVBLFlBQUksQ0FBQyxpQkFBaUJBLEdBQUUsa0JBQWtCLEVBQUUsU0FBUyxXQUFXLEdBQUc7QUFDakUsYUFBRyxJQUFJO0FBQUEsWUFDTCxXQUFXO0FBQUEsVUFDYixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFFQSwrQkFBeUI7QUFDekIsVUFBSSxpQkFBaUIsQ0FBQyxjQUFjLGFBQWE7QUFDL0MsbUJBQVcsWUFBWSxjQUFjO0FBQ25DLGdCQUFNLFNBQVMsU0FBUztBQUN4QixjQUFJLENBQUM7QUFBUTtBQUNiLGNBQUssT0FBdUIsT0FBTyx3QkFBd0I7QUFDekQscUNBQXlCO0FBQUEsVUFDM0I7QUFDQSxjQUFLLE9BQXVCLFVBQVUsU0FBUyxpQkFBaUIsR0FBRztBQUNqRSxxQ0FBeUI7QUFBQSxVQUMzQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUMsRUFBRSxRQUFRLFNBQVMsZUFBZSxVQUFVLEdBQUksY0FBYztBQUFBLElBQ2pFLENBQUM7QUFBQSxFQUNIOzs7QUNoTEEsTUFBTSxXQUFXLGNBQWM7QUFDL0IsTUFBTyx1QkFBUSxPQUFPRyxJQUFnQixXQUFtQjtBQUN2RCxRQUFJLFNBQVM7QUFDYixRQUFJLFVBQVU7QUFDWixlQUFTLElBQUksZ0JBQWdCLFNBQVMsTUFBTSxFQUFFLElBQUksR0FBRyxLQUFLO0FBQUEsSUFDNUQ7QUFFQSxVQUFNLFFBQVEsSUFBSSxnQkFBZ0IsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxtQkFBbUIsS0FBSztBQUV0RixVQUFNLEtBQUs7QUFBQSxNQUNULFFBQVEsT0FBTyxLQUFLO0FBQUEsTUFDcEI7QUFBQSxJQUNGO0FBRUEsVUFBTSxnQkFBZ0IsT0FBTyxRQUFRLE9BQU8sZ0NBQWdDLElBQUksZ0JBQWdCLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRTtBQUVoSCxRQUFJO0FBQ0YsWUFBTSxTQUFTQSxHQUFFLGdCQUFnQixhQUFhLHFCQUFxQjtBQUNuRSxhQUFPLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUlULE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLFdBQVc7QUFBQSxRQUNYLFlBQVk7QUFBQSxRQUNaLFlBQVk7QUFBQSxRQUNaLGNBQWM7QUFBQSxNQUNoQixDQUFDO0FBV0QsYUFBTyxpQkFBaUIsV0FBVyxDQUFDLE1BQU07QUFDeEMsY0FBTSxFQUFFLE1BQU0sS0FBSyxJQUFJLEVBQUU7QUFDekIsWUFBSSxTQUFTO0FBQWM7QUFDM0IsY0FBTSxFQUFFLE9BQU8sSUFBSTtBQUNuQixlQUFPLElBQUk7QUFBQTtBQUFBLFVBRVQ7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNILENBQUM7QUFFRCxVQUFJO0FBQ0osaUJBQVdBLEdBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLFVBQUksQ0FBQyxTQUFTLFFBQVE7QUFDcEIsbUJBQVdBLEdBQUUsa0JBQWtCLEVBQUUsSUFBSTtBQUFBO0FBQUEsVUFFbkMsWUFBWTtBQUFBLFVBQ1osTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFVBQ1YsZUFBZTtBQUFBLFVBQ2YsWUFBWTtBQUFBLFFBQ2QsQ0FBQztBQUFBLE1BQ0g7QUFDQSxZQUFNLGlCQUFpQkEsR0FBRSxNQUFNLEdBQUcsbUJBQW1CLEdBQUcsQ0FBQztBQUN6RCxVQUFJLGVBQWUsUUFBUTtBQUN6Qix1QkFBZSxRQUFRLE1BQU07QUFBQSxNQUMvQixPQUFPO0FBQ0wsaUJBQVMsUUFBUSxNQUFNO0FBQUEsTUFDekI7QUFDQSxZQUFNLE9BQU8sTUFBTSxHQUFHLGFBQWE7QUFDbkMsZUFBUyxZQUFZLElBQUk7QUFDekIsTUFBQUEsR0FBRSxJQUFJLEVBQUUsTUFBTSxRQUFRO0FBQUEsSUFDeEIsUUFBRTtBQUFBLElBQU87QUFBQSxFQUNYOzs7QUN6RUEsTUFBTyx5QkFBUSxPQUFPQyxPQUFtQjtBQUN2QyxVQUFNLFNBQVMsTUFBTSxVQUFVO0FBRS9CLFFBQUksQ0FBQyxPQUFPO0FBQXdCO0FBQ3BDLFFBQUksRUFBRSxTQUFTLEtBQUssV0FBVyxnQ0FBZ0MsS0FBSyxTQUFTLEtBQUssV0FBVyxtQ0FBbUMsSUFBSTtBQUNsSTtBQUFBLElBQ0Y7QUFFQSxPQUFHLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO0FBQ3RDLFVBQUksQ0FBQztBQUFNO0FBQ1gsWUFBTSxRQUFRQSxHQUFFLElBQUk7QUFDcEIsWUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZO0FBQ2xDLFlBQU0sVUFBVSxNQUFNLEtBQUssdUJBQXVCO0FBRWxELFlBQU0sS0FBS0EsR0FBRTtBQUFBO0FBQUEsb0JBRUcsT0FBTyxRQUFRLE9BQU8sc0JBQXNCLENBQUM7QUFBQSxXQUN0RCxFQUFFLElBQUk7QUFBQSxRQUNYLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxRQUNWLFdBQVc7QUFBQSxRQUNYLFFBQVE7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLFFBQ25CLFFBQVE7QUFBQSxNQUNWLENBQUM7QUFFRCxjQUFRLE1BQU0sRUFBRTtBQUNoQixTQUFHLEdBQUcsU0FBUyxPQUFPLE1BQU07QUFDMUIsY0FBTSxRQUFRQSxHQUFFLEVBQUUsYUFBYTtBQUMvQixVQUFFLGVBQWU7QUFDakIsY0FBTSxNQUFNLGlDQUFpQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN6RSxjQUFNLEtBQUssUUFBUSxHQUFHO0FBQ3RCLGNBQU0saUJBQWlCLEdBQUc7QUFBQSxNQUM1QixDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQUEsRUFDSDs7O0FDbENDLEdBQUMsT0FBT0MsT0FBTTtBQUNiLFVBQU0sWUFBWUEsR0FBRSxTQUFTLGVBQWU7QUFDNUMsUUFBSSxVQUFVLEtBQUssY0FBYyxhQUFhLElBQUksRUFBRTtBQUFRO0FBQzVELFVBQU0sUUFBUUEsR0FBRSxlQUFlLGFBQWEsTUFBTTtBQUVsRCxjQUFVLFFBQVEsS0FBSztBQUV2QixtQkFBZSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7QUFDckMsWUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPO0FBQUEsSUFDbkMsQ0FBQztBQUVELGNBQVUsRUFBRSxLQUFLLENBQUMsV0FBVztBQUMzQixVQUFJLE9BQU8sVUFBVTtBQUNuQiw2QkFBWUEsSUFBRyxNQUFNO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFFRCxRQUFJLFNBQVMsYUFBYSxnQkFBZ0I7QUFDeEMsMkJBQVlBLEVBQUM7QUFBQSxJQUNmO0FBRUEsUUFBSSxTQUFTLFNBQVMsV0FBVyxhQUFhLEdBQUc7QUFDL0MsNkJBQWNBLEVBQUM7QUFBQSxJQUNqQjtBQUFBLEVBQ0YsR0FBRyxPQUFPLEtBQW9COyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgIm9ic2VydmVyIiwgIiRkb20iLCAiJCIsICJkb2N1bWVudCIsICIkYSIsICIkIiwgIiQiLCAiJCJdCn0K
