"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/jquery@3.7.0/node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/.pnpm/jquery@3.7.0/node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version3 = "3.7.0", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version3,
          constructor: jQuery,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version3 + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // Retrieve the text value of an array of DOM nodes
          text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i++]) {
                ret += jQuery.text(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              return elem.textContent;
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery.contains = function(a, b) {
          var bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
          // IE doesn't have `contains` on SVG.
          (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push;
        (function() {
          var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push2.apply(
              arr = slice.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: function(target, els) {
                pushNative.apply(target, slice.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice.call(arguments, 1));
              }
            };
          }
          function find(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          push2.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext != context || !support.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = jQuery.escapeSelector(nid);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document3);
            matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert(function(el) {
              documentElement2.appendChild(el).id = jQuery.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
            });
            support.disconnectedMatch = assert(function(el) {
              return matches.call(el, "*");
            });
            support.scope = assert(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else {
                return context.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return jQuery.contains(context, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                splice.call(results, duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
          };
          Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              CHILD: function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    find.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  find.error(match[0]);
                }
                return match;
              },
              PSEUDO: function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr.CHILD.test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        cache = outerCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf.call(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              not: markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector) {
                return function(elem) {
                  return find(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // https://www.w3.org/TR/selectors/#lang-pseudo
              lang: markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  find.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              target: function(elem) {
                var hash = window2.location && window2.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              // Element/input types
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr;
                return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear
                // with elem.type === "text"
                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              // Position-in-collection
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2;
                if (argument < 0) {
                  i2 = argument + length;
                } else if (argument > length) {
                  i2 = length;
                } else {
                  i2 = argument;
                }
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          }
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      if (skip && nodeName(elem, skip)) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        outerCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              find(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                );
                matcher(matcherIn, matcherOut, context, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      push2.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          }
          function select(selector, context, results, seed) {
            var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          }
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          setDocument();
          support.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery.find = find;
          jQuery.expr[":"] = jQuery.expr.pseudos;
          jQuery.unique = jQuery.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.escape = jQuery.escapeSelector;
          find.getText = jQuery.text;
          find.isXML = jQuery.isXMLDoc;
          find.selectors = jQuery.expr;
          find.support = jQuery.support;
          find.uniqueSort = jQuery.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery.contains(self[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery)
            );
          }
          return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to jQuery#find
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(
                            e,
                            process.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getErrorHook) {
                        process.error = jQuery.Deferred.getErrorHook();
                      } else if (jQuery.Deferred.getStackHook) {
                        process.error = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, asyncError) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error.message,
              error.stack,
              asyncError
            );
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event.stopPropagation();
                event.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
              event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event.isSimulated = true;
              handle(nativeEvent);
              if (event.target === event.currentTarget) {
                handle(event);
              }
            } else {
              jQuery.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery.event.fix(nativeEvent)
              );
            }
          }
          jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
          jQuery.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self = jQuery(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self = jQuery(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery.globalEval(text);
              return text;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // src/universe/constants.ts
  var GOOGLE_DOMAINS = [
    "google.com",
    "google.ac",
    "google.ad",
    "google.ae",
    "google.al",
    "google.am",
    "google.as",
    "google.at",
    "google.az",
    "google.ba",
    "google.be",
    "google.bf",
    "google.bg",
    "google.bi",
    "google.bj",
    "google.bs",
    "google.bt",
    "google.by",
    "google.ca",
    "google.cat",
    "google.cc",
    "google.cd",
    "google.cf",
    "google.cg",
    "google.ch",
    "google.ci",
    "google.cl",
    "google.cm",
    "google.cn",
    "google.co",
    "google.co.ao",
    "google.co.bw",
    "google.co.ck",
    "google.co.cr",
    "google.co.id",
    "google.co.il",
    "google.co.in",
    "google.co.jp",
    "google.co.ke",
    "google.co.kr",
    "google.co.ls",
    "google.co.ma",
    "google.co.mz",
    "google.co.nz",
    "google.co.th",
    "google.co.tz",
    "google.co.ug",
    "google.co.uk",
    "google.co.uz",
    "google.co.ve",
    "google.co.vi",
    "google.co.za",
    "google.co.zm",
    "google.co.zw",
    "google.com.af",
    "google.com.ag",
    "google.com.ai",
    "google.com.ar",
    "google.com.au",
    "google.com.bd",
    "google.com.bh",
    "google.com.bn",
    "google.com.bo",
    "google.com.br",
    "google.com.bz",
    "google.com.co",
    "google.com.cu",
    "google.com.cy",
    "google.com.do",
    "google.com.ec",
    "google.com.eg",
    "google.com.et",
    "google.com.fj",
    "google.com.gh",
    "google.com.gi",
    "google.com.gt",
    "google.com.hk",
    "google.com.jm",
    "google.com.kh",
    "google.com.kw",
    "google.com.lb",
    "google.com.lc",
    "google.com.ly",
    "google.com.mm",
    "google.com.mt",
    "google.com.mx",
    "google.com.my",
    "google.com.na",
    "google.com.nf",
    "google.com.ng",
    "google.com.ni",
    "google.com.np",
    "google.com.om",
    "google.com.pa",
    "google.com.pe",
    "google.com.pg",
    "google.com.ph",
    "google.com.pk",
    "google.com.pr",
    "google.com.py",
    "google.com.qa",
    "google.com.sa",
    "google.com.sb",
    "google.com.sg",
    "google.com.sl",
    "google.com.sv",
    "google.com.tj",
    "google.com.tr",
    "google.com.tw",
    "google.com.ua",
    "google.com.uy",
    "google.com.vc",
    "google.com.vn",
    "google.cv",
    "google.cz",
    "google.de",
    "google.dj",
    "google.dk",
    "google.dm",
    "google.dz",
    "google.ee",
    "google.es",
    "google.fi",
    "google.fm",
    "google.fr",
    "google.ga",
    "google.ge",
    "google.gf",
    "google.gg",
    "google.gl",
    "google.gm",
    "google.gp",
    "google.gr",
    "google.gy",
    "google.hn",
    "google.hr",
    "google.ht",
    "google.hu",
    "google.ie",
    "google.im",
    "google.io",
    "google.iq",
    "google.is",
    "google.it",
    "google.je",
    "google.jo",
    "google.kg",
    "google.ki",
    "google.kz",
    "google.la",
    "google.li",
    "google.lk",
    "google.lt",
    "google.lu",
    "google.lv",
    "google.md",
    "google.me",
    "google.mg",
    "google.mk",
    "google.ml",
    "google.mn",
    "google.ms",
    "google.mu",
    "google.mv",
    "google.mw",
    "google.ne",
    "google.ng",
    "google.nl",
    "google.no",
    "google.nr",
    "google.nu",
    "google.pl",
    "google.pn",
    "google.ps",
    "google.pt",
    "google.ro",
    "google.rs",
    "google.ru",
    "google.rw",
    "google.sc",
    "google.se",
    "google.sh",
    "google.si",
    "google.sk",
    "google.sm",
    "google.sn",
    "google.so",
    "google.sr",
    "google.st",
    "google.td",
    "google.tg",
    "google.tk",
    "google.tl",
    "google.tm",
    "google.tn",
    "google.to",
    "google.tt",
    "google.vg",
    "google.vu",
    "google.ws"
  ];
  var YANDEX_DOMAINS = [
    "yandex.com",
    "yandex.ru",
    "yandex.by",
    "yandex.kz",
    "yandex.uz",
    "yandex.com.tr",
    "yandex.fr",
    "yandex.az",
    "yandex.com.ge",
    "yandex.com.am",
    "yandex.co.il",
    "yandex.lv",
    "yandex.lt",
    "yandex.ee",
    "yandex.md",
    "yandex.tm",
    "yandex.tj",
    "yandex.eu"
  ];

  // package.json
  var version = "2.3.0";
  var extensionName = "New Bing Anywhere (Bing Chat GPT-4)";

  // src/universe/utils/_misc.ts
  var checkIsGoogle = (hostname = location.hostname) => {
    return GOOGLE_DOMAINS.includes(hostname.replace(/^www\./, ""));
  };
  var checkIsBaidu = (hostname = location.hostname) => {
    return hostname === "www.baidu.com";
  };
  var checkIsYandex = (hostname = location.hostname) => {
    return YANDEX_DOMAINS.includes(hostname.replace(/^www\./, ""));
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
  var userAgent = navigator.userAgent;
  var userAgentData = navigator.userAgentData;
  var isEdge = /* @__PURE__ */ userAgent.includes("Edg/");
  var isBrave = /* @__PURE__ */ userAgentData?.brands.findIndex((item) => item.brand === "Brave") > -1;
  var isCanary = !!globalThis.__NBA_isCanary;
  var version2 = isCanary ? `0.${version}` : version;

  // src/content_script/index.ts
  var import_jquery4 = __toESM(require_jquery());

  // src/content_script/bing-handler.ts
  var import_jquery = __toESM(require_jquery());

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
  var bing_handler_default = async () => {
    if (!isEdge) {
      const document2 = window.document;
      const s = document2.createElement("script");
      s.src = chrome.runtime.getURL("inject.js");
      s.onload = s.remove;
      document2.documentElement.appendChild(s);
    }
    const isRtl = document.documentElement.dir === "rtl";
    (0, import_jquery.default)(() => {
      (async () => {
        const { showGuideToGithub } = await getConfig();
        if (!showGuideToGithub)
          return;
        const $esatSwitch = (0, import_jquery.default)("#est_switch");
        if (import_jquery.default.trim($esatSwitch.text()) !== "\u56FD\u5185\u7248\u56FD\u9645\u7248")
          return;
        setTimeout(() => {
          const $a = (0, import_jquery.default)(
            '<a href="https://github.com/haozi/New-Bing-Anywhere/issues/8" title="\u67E5\u770B\u5982\u4F55\u6B63\u786E\u914D\u7F6E\u7F51\u7EDC\u4EE3\u7406" target="_blank" rel="noopener noreferrer nofollow">\u4F9D\u7136\u51FA\u73B0\u56FD\u5185\u7248/\u56FD\u9645\u7248\uFF1F</a>'
          ).css({
            color: "#E89ABE",
            textShadow: "0.5px 0.1px 1px #58070D",
            fontSize: "12px",
            fontWeight: "lighter"
          }).click(() => {
            setConfig({ showGuideToGithub: false });
          });
          (0, import_jquery.default)("#est_switch").append($a).css("width", "auto");
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
        const $body = (0, import_jquery.default)(document.body);
        const $div = (0, import_jquery.default)("<div/>").css({
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
          $body.css("padding-top", "");
        };
        const $a2 = (0, import_jquery.default)(
          `<a style="color:#fff; background:url(${chrome.runtime.getURL(
            "images/bing_32x32.png"
          )}) no-repeat left 0; background-size: 12px; padding-inline-start: 20px" href="${note.html_url}" target="_blank" rel="noopener noreferrer nofollow">${note.title}</a>`
        ).on("click", close);
        const $close = (0, import_jquery.default)(
          '<a href="#" style="background:#58070d; color:#fff; cursor:pointer;padding: 0 68px 0 18px;position: absolute;right:0" title="no reminder">\u2715</a>'
        ).on("click", (e) => {
          e.preventDefault();
          confirm("Are you sure never see this notice again?") && callBackground("hideNotification");
          close();
        });
        $div.append($a2).append($close);
        $body.append($div).css("padding-top", 40);
      });
      (0, import_jquery.default)(document.body).on("click", "a.b_logoArea", (e) => {
        const $this = (0, import_jquery.default)(e.currentTarget);
        $this.attr("href", "/").attr("target", "_self");
      });
      if (!config.showGoogleButtonOnBing)
        return;
      const $q = (0, import_jquery.default)("#sb_form_q");
      const searchQuery = $q.val();
      const $a = (0, import_jquery.default)(`
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
        transform: `translate3d(${835 - (isRtl ? 925 : 0)}px, 13px, 0px)`,
        "will-change": "transform",
        cursor: "pointer"
      });
      (0, import_jquery.default)("#sb_form").css("position", "relative").prepend($a);
      $a.on("click", async (e) => {
        const $this = (0, import_jquery.default)(e.currentTarget);
        e.preventDefault();
        let val = "";
        if (!val) {
          val = String($q.val()).trim();
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
        const $conv = (0, import_jquery.default)("#b-scopeListItem-conv");
        const isNewBingOpen = $conv.hasClass("b_active");
        if (isNewBingOpen) {
          let left = 0;
          if ($conv.offset().left) {
            left = $conv.offset().left + $conv.width() + 30;
          } else {
            left = 350;
          }
          $a.css({
            transform: `translate3d(${left - (isRtl ? 925 : 0)}px, 15px, 0)`
          });
        } else {
          $a.css({
            transform: `translate3d(${835 - (isRtl ? 925 : 0)}px, 15px, 0)`
          });
        }
        if (!isNewBingOpen && (0, import_jquery.default)(".b_searchboxForm").hasClass("as_rsform")) {
          $a.css({
            transform: `translate3d(${1155 - (isRtl ? -99999 : 0)}px, 15px, 0)`
          });
        }
      };
      changeGoogleLinkPosition();
      new MutationObserver((mutationList, _observer) => {
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
  var import_jquery2 = __toESM(require_jquery());
  var qsStringify = (qs) => {
    for (const key in qs) {
      if (qs.hasOwnProperty(key)) {
        if (!qs[key]) {
          delete qs[key];
        }
      }
    }
    return new URLSearchParams(qs).toString();
  };
  var chat_handler_default = async (_config) => {
    const isGoogle = checkIsGoogle();
    const isBaidu = checkIsBaidu();
    const isYandex = checkIsYandex();
    if (!(isGoogle || isBaidu || isYandex))
      return;
    let prompt = "";
    let dir = "";
    let darkmode = "";
    const domain = location.hostname;
    if (isGoogle) {
      prompt = new URLSearchParams(location.search).get("q") ?? "";
      dir = document.documentElement.dir;
      darkmode = document.querySelector('meta[name="color-scheme"]')?.content === "dark" ? "dark" : "";
    }
    if (isBaidu) {
      prompt = new URLSearchParams(location.search).get("wd") ?? "";
    }
    if (isYandex) {
      prompt = new URLSearchParams(location.search).get("text") ?? "";
      darkmode = document.cookie.match(/skin\.([sld])/)?.[1] === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "";
    }
    const extra = new URLSearchParams(location.hash.slice(1)).get("new-bing-anywhere") ?? "";
    const qs = {
      prompt: prompt.trim(),
      dir,
      darkmode,
      domain,
      extra
    };
    const chatIframeUrl = chrome.runtime.getURL(`/app/index.html#/chat/iframe?${qsStringify(qs)}`);
    try {
      const $ifame = (0, import_jquery2.default)(`<iframe src="${chatIframeUrl}" scrolling="no" />`);
      $ifame.css({
        display: "block",
        width: "100%",
        border: "none",
        overflow: "hidden",
        boxSizing: "border-box",
        willChange: "height",
        transition: "height .1s cubic-bezier(0, 0, 0, 1.27) 0s",
        borderRadius: "8px",
        marginBottom: "10px",
        visibility: darkmode ? "hidden" : "visible"
      });
      window.addEventListener("message", (e) => {
        const { type, data } = e.data;
        if (type === "nba-ready") {
          $ifame.css("visibility", "visible");
        }
        if (type === "nba-resize") {
          const { height } = data;
          $ifame.css({
            // width,
            height: Math.floor(height) + 1
          });
        }
      });
      if (isGoogle) {
        let $sidebar;
        $sidebar = (0, import_jquery2.default)(await $w("#rhs", 1));
        if (!$sidebar.length) {
          $sidebar = (0, import_jquery2.default)('<div id="rhs" />').css({
            //  marginBottom: '20px', marginLeft: '30px', height: 'fit-content'
            marginInlineStart: "var(--rhs-margin)",
            flex: "0 auto",
            width: "var(--rhs-width)",
            position: "relative",
            paddingBottom: "15px",
            transition: "opacity 0.3s"
          });
        }
        const $bestContainer = (0, import_jquery2.default)(await $w(".liYKde.g.VjDLd", 0.1));
        if ($bestContainer.length) {
          $bestContainer.prepend($ifame);
        } else {
          $sidebar.prepend($ifame);
        }
        const main = await $w("#center_col");
        $sidebar.insertAfter(main);
        (0, import_jquery2.default)(main).after($sidebar);
      }
      if (isBaidu) {
        const $sidebar = (0, import_jquery2.default)(await $w("#content_right"));
        $sidebar.prepend($ifame);
      }
      if (isYandex) {
        const $sidebar = (0, import_jquery2.default)(await $w(".content__right"));
        $sidebar.prepend($ifame);
      }
    } catch {
    }
  };

  // src/content_script/google-handler.ts
  var import_jquery3 = __toESM(require_jquery());
  var google_handler_default = async () => {
    const config = await getConfig();
    if (!config.showBingButtonOnGoogle)
      return;
    if (location.pathname !== "/search")
      return;
    const isRtl = document.documentElement.dir === "rtl";
    $w('[action="/search"]').then((form) => {
      if (!form)
        return;
      const $form = (0, import_jquery3.default)(form);
      const $q = $form.find('[name="q"]');
      const $submit = $form.find('button[type="submit"]');
      const $a = (0, import_jquery3.default)(`
      <a href="https://www.bing.com/search?q=Bing+AI&showconv=1" rel="noopener noreferrer nofollow" target="bing" title="search with New Bing">
        <img src="${chrome.runtime.getURL("images/bing-chat.png")}" style="display: block; width: 20px; height: 20px" alt="bing" />
      </a>`).css({
        width: "40px",
        display: "flex",
        position: "relative",
        "z-index": 900,
        cursor: "pointer",
        "justify-content": "center",
        "align-items": "center",
        margin: "-2px 10px 0 -10px",
        ...isRtl ? {
          marginInlineStart: "-10px",
          marginInlineEnd: "10px"
        } : null
      });
      $submit.after($a);
      $a.on("click", async (e) => {
        const $this = (0, import_jquery3.default)(e.currentTarget);
        e.preventDefault();
        const url = `https://www.bing.com/search?q=${encodeURIComponent($q.val())}&showconv=1`;
        $this.attr("href", url);
        await openUrlInSameTab(url);
      });
    });
  };

  // src/content_script/index.ts
  (async ($6) => {
    const $document = $6(document.documentElement);
    if ($document.find(`meta[name="${extensionName}"]`).length)
      return;
    const $meta = $6(`<meta name="${extensionName}" />`);
    $document.prepend($meta);
    callBackground("getEnv").then((env) => {
      $meta.attr("content", env.version);
    });
    getConfig().then((config) => {
      if (config.showChat) {
        chat_handler_default(config);
      }
    });
    if (location.hostname === "www.bing.com") {
      bing_handler_default();
    }
    if (checkIsGoogle()) {
      google_handler_default();
    }
  })(import_jquery4.default);
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.0
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-05-11T18:29Z
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2pxdWVyeUAzLjcuMC9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIiwgIi4uLy4uL3NyYy91bml2ZXJzZS9jb25zdGFudHMudHMiLCAiLi4vLi4vcGFja2FnZS5qc29uIiwgIi4uLy4uL3NyYy91bml2ZXJzZS91dGlscy9fbWlzYy50cyIsICIuLi8uLi9zcmMvY29udGVudF9zY3JpcHQvaW5kZXgudHMiLCAiLi4vLi4vc3JjL2NvbnRlbnRfc2NyaXB0L2JpbmctaGFuZGxlci50cyIsICIuLi8uLi9zcmMvY29udGVudF9zY3JpcHQvdXRpbHMudHMiLCAiLi4vLi4vc3JjL2NvbnRlbnRfc2NyaXB0L2NoYXQtaGFuZGxlci50cyIsICIuLi8uLi9zcmMvY29udGVudF9zY3JpcHQvZ29vZ2xlLWhhbmRsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICogalF1ZXJ5IEphdmFTY3JpcHQgTGlicmFyeSB2My43LjBcbiAqIGh0dHBzOi8vanF1ZXJ5LmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMjMtMDUtMTFUMTg6MjlaXG4gKi9cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gRm9yIENvbW1vbkpTIGFuZCBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB3aGVyZSBhIHByb3BlciBgd2luZG93YFxuXHRcdC8vIGlzIHByZXNlbnQsIGV4ZWN1dGUgdGhlIGZhY3RvcnkgYW5kIGdldCBqUXVlcnkuXG5cdFx0Ly8gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBoYXZlIGEgYHdpbmRvd2Agd2l0aCBhIGBkb2N1bWVudGBcblx0XHQvLyAoc3VjaCBhcyBOb2RlLmpzKSwgZXhwb3NlIGEgZmFjdG9yeSBhcyBtb2R1bGUuZXhwb3J0cy5cblx0XHQvLyBUaGlzIGFjY2VudHVhdGVzIHRoZSBuZWVkIGZvciB0aGUgY3JlYXRpb24gb2YgYSByZWFsIGB3aW5kb3dgLlxuXHRcdC8vIGUuZy4gdmFyIGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIikod2luZG93KTtcblx0XHQvLyBTZWUgdGlja2V0IHRyYWMtMTQ1NDkgZm9yIG1vcmUgaW5mby5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/XG5cdFx0XHRmYWN0b3J5KCBnbG9iYWwsIHRydWUgKSA6XG5cdFx0XHRmdW5jdGlvbiggdyApIHtcblx0XHRcdFx0aWYgKCAhdy5kb2N1bWVudCApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhY3RvcnkoIHcgKTtcblx0XHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeSggZ2xvYmFsICk7XG5cdH1cblxuLy8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcbn0gKSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCB3aW5kb3csIG5vR2xvYmFsICkge1xuXG4vLyBFZGdlIDw9IDEyIC0gMTMrLCBGaXJlZm94IDw9MTggLSA0NSssIElFIDEwIC0gMTEsIFNhZmFyaSA1LjEgLSA5KywgaU9TIDYgLSA5LjFcbi8vIHRocm93IGV4Y2VwdGlvbnMgd2hlbiBub24tc3RyaWN0IGNvZGUgKGUuZy4sIEFTUC5ORVQgNC41KSBhY2Nlc3NlcyBzdHJpY3QgbW9kZVxuLy8gYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIgKHRyYWMtMTMzMzUpLiBCdXQgYXMgb2YgalF1ZXJ5IDMuMCAoMjAxNiksIHN0cmljdCBtb2RlIHNob3VsZCBiZSBjb21tb25cbi8vIGVub3VnaCB0aGF0IGFsbCBzdWNoIGF0dGVtcHRzIGFyZSBndWFyZGVkIGluIGEgdHJ5IGJsb2NrLlxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhcnIgPSBbXTtcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG52YXIgc2xpY2UgPSBhcnIuc2xpY2U7XG5cbnZhciBmbGF0ID0gYXJyLmZsYXQgPyBmdW5jdGlvbiggYXJyYXkgKSB7XG5cdHJldHVybiBhcnIuZmxhdC5jYWxsKCBhcnJheSApO1xufSA6IGZ1bmN0aW9uKCBhcnJheSApIHtcblx0cmV0dXJuIGFyci5jb25jYXQuYXBwbHkoIFtdLCBhcnJheSApO1xufTtcblxuXG52YXIgcHVzaCA9IGFyci5wdXNoO1xuXG52YXIgaW5kZXhPZiA9IGFyci5pbmRleE9mO1xuXG52YXIgY2xhc3MydHlwZSA9IHt9O1xuXG52YXIgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nO1xuXG52YXIgaGFzT3duID0gY2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGZuVG9TdHJpbmcgPSBoYXNPd24udG9TdHJpbmc7XG5cbnZhciBPYmplY3RGdW5jdGlvblN0cmluZyA9IGZuVG9TdHJpbmcuY2FsbCggT2JqZWN0ICk7XG5cbnZhciBzdXBwb3J0ID0ge307XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9NTcsIEZpcmVmb3ggPD01MlxuXHRcdC8vIEluIHNvbWUgYnJvd3NlcnMsIHR5cGVvZiByZXR1cm5zIFwiZnVuY3Rpb25cIiBmb3IgSFRNTCA8b2JqZWN0PiBlbGVtZW50c1xuXHRcdC8vIChpLmUuLCBgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwib2JqZWN0XCIgKSA9PT0gXCJmdW5jdGlvblwiYCkuXG5cdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byBjbGFzc2lmeSAqYW55KiBET00gbm9kZSBhcyBhIGZ1bmN0aW9uLlxuXHRcdC8vIFN1cHBvcnQ6IFF0V2ViIDw9My44LjUsIFdlYktpdCA8PTUzNC4zNCwgd2todG1sdG9wZGYgdG9vbCA8PTAuMTIuNVxuXHRcdC8vIFBsdXMgZm9yIG9sZCBXZWJLaXQsIHR5cGVvZiByZXR1cm5zIFwiZnVuY3Rpb25cIiBmb3IgSFRNTCBjb2xsZWN0aW9uc1xuXHRcdC8vIChlLmcuLCBgdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpID09PSBcImZ1bmN0aW9uXCJgKS4gKGdoLTQ3NTYpXG5cdFx0cmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygb2JqLm5vZGVUeXBlICE9PSBcIm51bWJlclwiICYmXG5cdFx0XHR0eXBlb2Ygb2JqLml0ZW0gIT09IFwiZnVuY3Rpb25cIjtcblx0fTtcblxuXG52YXIgaXNXaW5kb3cgPSBmdW5jdGlvbiBpc1dpbmRvdyggb2JqICkge1xuXHRcdHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG5cdH07XG5cblxudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG5cblxuXHR2YXIgcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyA9IHtcblx0XHR0eXBlOiB0cnVlLFxuXHRcdHNyYzogdHJ1ZSxcblx0XHRub25jZTogdHJ1ZSxcblx0XHRub01vZHVsZTogdHJ1ZVxuXHR9O1xuXG5cdGZ1bmN0aW9uIERPTUV2YWwoIGNvZGUsIG5vZGUsIGRvYyApIHtcblx0XHRkb2MgPSBkb2MgfHwgZG9jdW1lbnQ7XG5cblx0XHR2YXIgaSwgdmFsLFxuXHRcdFx0c2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoIFwic2NyaXB0XCIgKTtcblxuXHRcdHNjcmlwdC50ZXh0ID0gY29kZTtcblx0XHRpZiAoIG5vZGUgKSB7XG5cdFx0XHRmb3IgKCBpIGluIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA2NCssIEVkZ2UgMTgrXG5cdFx0XHRcdC8vIFNvbWUgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGUgXCJub25jZVwiIHByb3BlcnR5IG9uIHNjcmlwdHMuXG5cdFx0XHRcdC8vIE9uIHRoZSBvdGhlciBoYW5kLCBqdXN0IHVzaW5nIGBnZXRBdHRyaWJ1dGVgIGlzIG5vdCBlbm91Z2ggYXNcblx0XHRcdFx0Ly8gdGhlIGBub25jZWAgYXR0cmlidXRlIGlzIHJlc2V0IHRvIGFuIGVtcHR5IHN0cmluZyB3aGVuZXZlciBpdFxuXHRcdFx0XHQvLyBiZWNvbWVzIGJyb3dzaW5nLWNvbnRleHQgY29ubmVjdGVkLlxuXHRcdFx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy8yMzY5XG5cdFx0XHRcdC8vIFNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNub25jZS1hdHRyaWJ1dGVzXG5cdFx0XHRcdC8vIFRoZSBgbm9kZS5nZXRBdHRyaWJ1dGVgIGNoZWNrIHdhcyBhZGRlZCBmb3IgdGhlIHNha2Ugb2Zcblx0XHRcdFx0Ly8gYGpRdWVyeS5nbG9iYWxFdmFsYCBzbyB0aGF0IGl0IGNhbiBmYWtlIGEgbm9uY2UtY29udGFpbmluZyBub2RlXG5cdFx0XHRcdC8vIHZpYSBhbiBvYmplY3QuXG5cdFx0XHRcdHZhbCA9IG5vZGVbIGkgXSB8fCBub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSggaSApO1xuXHRcdFx0XHRpZiAoIHZhbCApIHtcblx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKCBpLCB2YWwgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRkb2MuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0ICkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggc2NyaXB0ICk7XG5cdH1cblxuXG5mdW5jdGlvbiB0b1R5cGUoIG9iaiApIHtcblx0aWYgKCBvYmogPT0gbnVsbCApIHtcblx0XHRyZXR1cm4gb2JqICsgXCJcIjtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seSAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuXHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgP1xuXHRcdGNsYXNzMnR5cGVbIHRvU3RyaW5nLmNhbGwoIG9iaiApIF0gfHwgXCJvYmplY3RcIiA6XG5cdFx0dHlwZW9mIG9iajtcbn1cbi8qIGdsb2JhbCBTeW1ib2wgKi9cbi8vIERlZmluaW5nIHRoaXMgZ2xvYmFsIGluIC5lc2xpbnRyYy5qc29uIHdvdWxkIGNyZWF0ZSBhIGRhbmdlciBvZiB1c2luZyB0aGUgZ2xvYmFsXG4vLyB1bmd1YXJkZWQgaW4gYW5vdGhlciBwbGFjZSwgaXQgc2VlbXMgc2FmZXIgdG8gZGVmaW5lIGdsb2JhbCBvbmx5IGZvciB0aGlzIG1vZHVsZVxuXG5cblxudmFyIHZlcnNpb24gPSBcIjMuNy4wXCIsXG5cblx0cmh0bWxTdWZmaXggPSAvSFRNTCQvaSxcblxuXHQvLyBEZWZpbmUgYSBsb2NhbCBjb3B5IG9mIGpRdWVyeVxuXHRqUXVlcnkgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cblx0XHQvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcblx0XHQvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxuXHRcdHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoIHNlbGVjdG9yLCBjb250ZXh0ICk7XG5cdH07XG5cbmpRdWVyeS5mbiA9IGpRdWVyeS5wcm90b3R5cGUgPSB7XG5cblx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRqcXVlcnk6IHZlcnNpb24sXG5cblx0Y29uc3RydWN0b3I6IGpRdWVyeSxcblxuXHQvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcblx0bGVuZ3RoOiAwLFxuXG5cdHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdH0sXG5cblx0Ly8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxuXHQvLyBHZXQgdGhlIHdob2xlIG1hdGNoZWQgZWxlbWVudCBzZXQgYXMgYSBjbGVhbiBhcnJheVxuXHRnZXQ6IGZ1bmN0aW9uKCBudW0gKSB7XG5cblx0XHQvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG5cdFx0aWYgKCBudW0gPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXHRcdHJldHVybiBudW0gPCAwID8gdGhpc1sgbnVtICsgdGhpcy5sZW5ndGggXSA6IHRoaXNbIG51bSBdO1xuXHR9LFxuXG5cdC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcblx0Ly8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG5cdFx0Ly8gQnVpbGQgYSBuZXcgalF1ZXJ5IG1hdGNoZWQgZWxlbWVudCBzZXRcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XG5cblx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuXHRlYWNoOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjayApO1xuXHR9LFxuXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCggdGhpcywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCggZWxlbSwgaSwgZWxlbSApO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHNsaWNlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSApO1xuXHR9LFxuXG5cdGZpcnN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggMCApO1xuXHR9LFxuXG5cdGxhc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xuXHR9LFxuXG5cdGV2ZW46IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5LmdyZXAoIHRoaXMsIGZ1bmN0aW9uKCBfZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAoIGkgKyAxICkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdG9kZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkuZ3JlcCggdGhpcywgZnVuY3Rpb24oIF9lbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuIGkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcblx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbIGogXSBdIDogW10gKTtcblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuXHR9LFxuXG5cdC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cblx0Ly8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG5cdHB1c2g6IHB1c2gsXG5cdHNvcnQ6IGFyci5zb3J0LFxuXHRzcGxpY2U6IGFyci5zcGxpY2Vcbn07XG5cbmpRdWVyeS5leHRlbmQgPSBqUXVlcnkuZm4uZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIDAgXSB8fCB7fSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblxuXHRcdC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIGkgXSB8fCB7fTtcblx0XHRpKys7XG5cdH1cblxuXHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICFpc0Z1bmN0aW9uKCB0YXJnZXQgKSApIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdC8vIEV4dGVuZCBqUXVlcnkgaXRzZWxmIGlmIG9ubHkgb25lIGFyZ3VtZW50IGlzIHBhc3NlZFxuXHRpZiAoIGkgPT09IGxlbmd0aCApIHtcblx0XHR0YXJnZXQgPSB0aGlzO1xuXHRcdGktLTtcblx0fVxuXG5cdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmICggKCBvcHRpb25zID0gYXJndW1lbnRzWyBpIF0gKSAhPSBudWxsICkge1xuXG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBPYmplY3QucHJvdG90eXBlIHBvbGx1dGlvblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICggbmFtZSA9PT0gXCJfX3Byb3RvX19cIiB8fCB0YXJnZXQgPT09IGNvcHkgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0aWYgKCBkZWVwICYmIGNvcHkgJiYgKCBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29weSApIHx8XG5cdFx0XHRcdFx0KCBjb3B5SXNBcnJheSA9IEFycmF5LmlzQXJyYXkoIGNvcHkgKSApICkgKSB7XG5cdFx0XHRcdFx0c3JjID0gdGFyZ2V0WyBuYW1lIF07XG5cblx0XHRcdFx0XHQvLyBFbnN1cmUgcHJvcGVyIHR5cGUgZm9yIHRoZSBzb3VyY2UgdmFsdWVcblx0XHRcdFx0XHRpZiAoIGNvcHlJc0FycmF5ICYmICFBcnJheS5pc0FycmF5KCBzcmMgKSApIHtcblx0XHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0fSBlbHNlIGlmICggIWNvcHlJc0FycmF5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggc3JjICkgKSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHt9O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblxuXHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0galF1ZXJ5LmV4dGVuZCggZGVlcCwgY2xvbmUsIGNvcHkgKTtcblxuXHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvcHkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGNvcHk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIFVuaXF1ZSBmb3IgZWFjaCBjb3B5IG9mIGpRdWVyeSBvbiB0aGUgcGFnZVxuXHRleHBhbmRvOiBcImpRdWVyeVwiICsgKCB2ZXJzaW9uICsgTWF0aC5yYW5kb20oKSApLnJlcGxhY2UoIC9cXEQvZywgXCJcIiApLFxuXG5cdC8vIEFzc3VtZSBqUXVlcnkgaXMgcmVhZHkgd2l0aG91dCB0aGUgcmVhZHkgbW9kdWxlXG5cdGlzUmVhZHk6IHRydWUsXG5cblx0ZXJyb3I6IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtc2cgKTtcblx0fSxcblxuXHRub29wOiBmdW5jdGlvbigpIHt9LFxuXG5cdGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0dmFyIHByb3RvLCBDdG9yO1xuXG5cdFx0Ly8gRGV0ZWN0IG9idmlvdXMgbmVnYXRpdmVzXG5cdFx0Ly8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG5cdFx0aWYgKCAhb2JqIHx8IHRvU3RyaW5nLmNhbGwoIG9iaiApICE9PSBcIltvYmplY3QgT2JqZWN0XVwiICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHByb3RvID0gZ2V0UHJvdG8oIG9iaiApO1xuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSAoZS5nLiwgYE9iamVjdC5jcmVhdGUoIG51bGwgKWApIGFyZSBwbGFpblxuXHRcdGlmICggIXByb3RvICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cblx0XHRDdG9yID0gaGFzT3duLmNhbGwoIHByb3RvLCBcImNvbnN0cnVjdG9yXCIgKSAmJiBwcm90by5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBmblRvU3RyaW5nLmNhbGwoIEN0b3IgKSA9PT0gT2JqZWN0RnVuY3Rpb25TdHJpbmc7XG5cdH0sXG5cblx0aXNFbXB0eU9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcblx0XHR2YXIgbmFtZTtcblxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBwcm92aWRlZCBjb250ZXh0OyBmYWxscyBiYWNrIHRvIHRoZSBnbG9iYWwgb25lXG5cdC8vIGlmIG5vdCBzcGVjaWZpZWQuXG5cdGdsb2JhbEV2YWw6IGZ1bmN0aW9uKCBjb2RlLCBvcHRpb25zLCBkb2MgKSB7XG5cdFx0RE9NRXZhbCggY29kZSwgeyBub25jZTogb3B0aW9ucyAmJiBvcHRpb25zLm5vbmNlIH0sIGRvYyApO1xuXHR9LFxuXG5cdGVhY2g6IGZ1bmN0aW9uKCBvYmosIGNhbGxiYWNrICkge1xuXHRcdHZhciBsZW5ndGgsIGkgPSAwO1xuXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggb2JqICkgKSB7XG5cdFx0XHRsZW5ndGggPSBvYmoubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblxuXHQvLyBSZXRyaWV2ZSB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcblx0dGV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIG5vZGUsXG5cdFx0XHRyZXQgPSBcIlwiLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHRpZiAoICFub2RlVHlwZSApIHtcblxuXHRcdFx0Ly8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcblx0XHRcdHdoaWxlICggKCBub2RlID0gZWxlbVsgaSsrIF0gKSApIHtcblxuXHRcdFx0XHQvLyBEbyBub3QgdHJhdmVyc2UgY29tbWVudCBub2Rlc1xuXHRcdFx0XHRyZXQgKz0galF1ZXJ5LnRleHQoIG5vZGUgKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCBub2RlVHlwZSA9PT0gMSB8fCBub2RlVHlwZSA9PT0gOSB8fCBub2RlVHlwZSA9PT0gMTEgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcblx0XHR9IGVsc2UgaWYgKCBub2RlVHlwZSA9PT0gMyB8fCBub2RlVHlwZSA9PT0gNCApIHtcblx0XHRcdHJldHVybiBlbGVtLm5vZGVWYWx1ZTtcblx0XHR9XG5cblx0XHQvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cblx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYWtlQXJyYXk6IGZ1bmN0aW9uKCBhcnIsIHJlc3VsdHMgKSB7XG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRpZiAoIGFyciAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBpc0FycmF5TGlrZSggT2JqZWN0KCBhcnIgKSApICkge1xuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHJldCxcblx0XHRcdFx0XHR0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRcdFsgYXJyIF0gOiBhcnJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guY2FsbCggcmV0LCBhcnIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdGluQXJyYXk6IGZ1bmN0aW9uKCBlbGVtLCBhcnIsIGkgKSB7XG5cdFx0cmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuXHR9LFxuXG5cdGlzWE1MRG9jOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbmFtZXNwYWNlID0gZWxlbSAmJiBlbGVtLm5hbWVzcGFjZVVSSSxcblx0XHRcdGRvY0VsZW0gPSBlbGVtICYmICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHQvLyBBc3N1bWUgSFRNTCB3aGVuIGRvY3VtZW50RWxlbWVudCBkb2Vzbid0IHlldCBleGlzdCwgc3VjaCBhcyBpbnNpZGVcblx0XHQvLyBkb2N1bWVudCBmcmFnbWVudHMuXG5cdFx0cmV0dXJuICFyaHRtbFN1ZmZpeC50ZXN0KCBuYW1lc3BhY2UgfHwgZG9jRWxlbSAmJiBkb2NFbGVtLm5vZGVOYW1lIHx8IFwiSFRNTFwiICk7XG5cdH0sXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0bWVyZ2U6IGZ1bmN0aW9uKCBmaXJzdCwgc2Vjb25kICkge1xuXHRcdHZhciBsZW4gPSArc2Vjb25kLmxlbmd0aCxcblx0XHRcdGogPSAwLFxuXHRcdFx0aSA9IGZpcnN0Lmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaiA8IGxlbjsgaisrICkge1xuXHRcdFx0Zmlyc3RbIGkrKyBdID0gc2Vjb25kWyBqIF07XG5cdFx0fVxuXG5cdFx0Zmlyc3QubGVuZ3RoID0gaTtcblxuXHRcdHJldHVybiBmaXJzdDtcblx0fSxcblxuXHRncmVwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBpbnZlcnQgKSB7XG5cdFx0dmFyIGNhbGxiYWNrSW52ZXJzZSxcblx0XHRcdG1hdGNoZXMgPSBbXSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoLFxuXHRcdFx0Y2FsbGJhY2tFeHBlY3QgPSAhaW52ZXJ0O1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIG9ubHkgc2F2aW5nIHRoZSBpdGVtc1xuXHRcdC8vIHRoYXQgcGFzcyB0aGUgdmFsaWRhdG9yIGZ1bmN0aW9uXG5cdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRjYWxsYmFja0ludmVyc2UgPSAhY2FsbGJhY2soIGVsZW1zWyBpIF0sIGkgKTtcblx0XHRcdGlmICggY2FsbGJhY2tJbnZlcnNlICE9PSBjYWxsYmFja0V4cGVjdCApIHtcblx0XHRcdFx0bWF0Y2hlcy5wdXNoKCBlbGVtc1sgaSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hdGNoZXM7XG5cdH0sXG5cblx0Ly8gYXJnIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG5cdG1hcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgYXJnICkge1xuXHRcdHZhciBsZW5ndGgsIHZhbHVlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRyZXQgPSBbXTtcblxuXHRcdC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCB0cmFuc2xhdGluZyBlYWNoIG9mIHRoZSBpdGVtcyB0byB0aGVpciBuZXcgdmFsdWVzXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggZWxlbXMgKSApIHtcblx0XHRcdGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEdvIHRocm91Z2ggZXZlcnkga2V5IG9uIHRoZSBvYmplY3QsXG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gZWxlbXMgKSB7XG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xuXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0XHRyZXR1cm4gZmxhdCggcmV0ICk7XG5cdH0sXG5cblx0Ly8gQSBnbG9iYWwgR1VJRCBjb3VudGVyIGZvciBvYmplY3RzXG5cdGd1aWQ6IDEsXG5cblx0Ly8galF1ZXJ5LnN1cHBvcnQgaXMgbm90IHVzZWQgaW4gQ29yZSBidXQgb3RoZXIgcHJvamVjdHMgYXR0YWNoIHRoZWlyXG5cdC8vIHByb3BlcnRpZXMgdG8gaXQgc28gaXQgbmVlZHMgdG8gZXhpc3QuXG5cdHN1cHBvcnQ6IHN1cHBvcnRcbn0gKTtcblxuaWYgKCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdGpRdWVyeS5mblsgU3ltYm9sLml0ZXJhdG9yIF0gPSBhcnJbIFN5bWJvbC5pdGVyYXRvciBdO1xufVxuXG4vLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcbmpRdWVyeS5lYWNoKCBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoIFwiIFwiICksXG5cdGZ1bmN0aW9uKCBfaSwgbmFtZSApIHtcblx0XHRjbGFzczJ0eXBlWyBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIgXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0fSApO1xuXG5mdW5jdGlvbiBpc0FycmF5TGlrZSggb2JqICkge1xuXG5cdC8vIFN1cHBvcnQ6IHJlYWwgaU9TIDguMiBvbmx5IChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcblx0Ly8gYGluYCBjaGVjayB1c2VkIHRvIHByZXZlbnQgSklUIGVycm9yIChnaC0yMTQ1KVxuXHQvLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcblx0Ly8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuXHR2YXIgbGVuZ3RoID0gISFvYmogJiYgXCJsZW5ndGhcIiBpbiBvYmogJiYgb2JqLmxlbmd0aCxcblx0XHR0eXBlID0gdG9UeXBlKCBvYmogKTtcblxuXHRpZiAoIGlzRnVuY3Rpb24oIG9iaiApIHx8IGlzV2luZG93KCBvYmogKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fFxuXHRcdHR5cGVvZiBsZW5ndGggPT09IFwibnVtYmVyXCIgJiYgbGVuZ3RoID4gMCAmJiAoIGxlbmd0aCAtIDEgKSBpbiBvYmo7XG59XG5cblxuZnVuY3Rpb24gbm9kZU5hbWUoIGVsZW0sIG5hbWUgKSB7XG5cblx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbn1cbnZhciBwb3AgPSBhcnIucG9wO1xuXG5cbnZhciBzb3J0ID0gYXJyLnNvcnQ7XG5cblxudmFyIHNwbGljZSA9IGFyci5zcGxpY2U7XG5cblxudmFyIHdoaXRlc3BhY2UgPSBcIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCI7XG5cblxudmFyIHJ0cmltQ1NTID0gbmV3IFJlZ0V4cChcblx0XCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiICsgd2hpdGVzcGFjZSArIFwiKyRcIixcblx0XCJnXCJcbik7XG5cblxuXG5cbi8vIE5vdGU6IGFuIGVsZW1lbnQgZG9lcyBub3QgY29udGFpbiBpdHNlbGZcbmpRdWVyeS5jb250YWlucyA9IGZ1bmN0aW9uKCBhLCBiICkge1xuXHR2YXIgYnVwID0gYiAmJiBiLnBhcmVudE5vZGU7XG5cblx0cmV0dXJuIGEgPT09IGJ1cCB8fCAhISggYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoXG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdFx0Ly8gSUUgZG9lc24ndCBoYXZlIGBjb250YWluc2Agb24gU1ZHLlxuXHRcdGEuY29udGFpbnMgP1xuXHRcdFx0YS5jb250YWlucyggYnVwICkgOlxuXHRcdFx0YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBidXAgKSAmIDE2XG5cdCkgKTtcbn07XG5cblxuXG5cbi8vIENTUyBzdHJpbmcvaWRlbnRpZmllciBzZXJpYWxpemF0aW9uXG4vLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI2NvbW1vbi1zZXJpYWxpemluZy1pZGlvbXNcbnZhciByY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFx4ODAtXFx1RkZGRlxcdy1dL2c7XG5cbmZ1bmN0aW9uIGZjc3Nlc2NhcGUoIGNoLCBhc0NvZGVQb2ludCApIHtcblx0aWYgKCBhc0NvZGVQb2ludCApIHtcblxuXHRcdC8vIFUrMDAwMCBOVUxMIGJlY29tZXMgVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUlxuXHRcdGlmICggY2ggPT09IFwiXFwwXCIgKSB7XG5cdFx0XHRyZXR1cm4gXCJcXHVGRkZEXCI7XG5cdFx0fVxuXG5cdFx0Ly8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcblx0XHRyZXR1cm4gY2guc2xpY2UoIDAsIC0xICkgKyBcIlxcXFxcIiArIGNoLmNoYXJDb2RlQXQoIGNoLmxlbmd0aCAtIDEgKS50b1N0cmluZyggMTYgKSArIFwiIFwiO1xuXHR9XG5cblx0Ly8gT3RoZXIgcG90ZW50aWFsbHktc3BlY2lhbCBBU0NJSSBjaGFyYWN0ZXJzIGdldCBiYWNrc2xhc2gtZXNjYXBlZFxuXHRyZXR1cm4gXCJcXFxcXCIgKyBjaDtcbn1cblxualF1ZXJ5LmVzY2FwZVNlbGVjdG9yID0gZnVuY3Rpb24oIHNlbCApIHtcblx0cmV0dXJuICggc2VsICsgXCJcIiApLnJlcGxhY2UoIHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUgKTtcbn07XG5cblxuXG5cbnZhciBwcmVmZXJyZWREb2MgPSBkb2N1bWVudCxcblx0cHVzaE5hdGl2ZSA9IHB1c2g7XG5cbiggZnVuY3Rpb24oKSB7XG5cbnZhciBpLFxuXHRFeHByLFxuXHRvdXRlcm1vc3RDb250ZXh0LFxuXHRzb3J0SW5wdXQsXG5cdGhhc0R1cGxpY2F0ZSxcblx0cHVzaCA9IHB1c2hOYXRpdmUsXG5cblx0Ly8gTG9jYWwgZG9jdW1lbnQgdmFyc1xuXHRkb2N1bWVudCxcblx0ZG9jdW1lbnRFbGVtZW50LFxuXHRkb2N1bWVudElzSFRNTCxcblx0cmJ1Z2d5UVNBLFxuXHRtYXRjaGVzLFxuXG5cdC8vIEluc3RhbmNlLXNwZWNpZmljIGRhdGFcblx0ZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvLFxuXHRkaXJydW5zID0gMCxcblx0ZG9uZSA9IDAsXG5cdGNsYXNzQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHR0b2tlbkNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0Y29tcGlsZXJDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdG5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRzb3J0T3JkZXIgPSBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gMDtcblx0fSxcblxuXHRib29sZWFucyA9IFwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfFwiICtcblx0XHRcImxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixcblxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb25zXG5cblx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jaWRlbnQtdG9rZW4tZGlhZ3JhbVxuXHRpZGVudGlmaWVyID0gXCIoPzpcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XCI/fFxcXFxcXFxcW15cXFxcclxcXFxuXFxcXGZdfFtcXFxcdy1dfFteXFwwLVxcXFx4N2ZdKStcIixcblxuXHQvLyBBdHRyaWJ1dGUgc2VsZWN0b3JzOiBodHRwczovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG5cdGF0dHJpYnV0ZXMgPSBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFwiICsgaWRlbnRpZmllciArIFwiKSg/OlwiICsgd2hpdGVzcGFjZSArXG5cblx0XHQvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuXHRcdFwiKihbKl4kfCF+XT89KVwiICsgd2hpdGVzcGFjZSArXG5cblx0XHQvLyBcIkF0dHJpYnV0ZSB2YWx1ZXMgbXVzdCBiZSBDU1MgaWRlbnRpZmllcnMgW2NhcHR1cmUgNV0gb3Igc3RyaW5ncyBbY2FwdHVyZSAzIG9yIGNhcHR1cmUgNF1cIlxuXHRcdFwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIgKyBpZGVudGlmaWVyICsgXCIpKXwpXCIgK1xuXHRcdHdoaXRlc3BhY2UgKyBcIipcXFxcXVwiLFxuXG5cdHBzZXVkb3MgPSBcIjooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XFxcXCgoXCIgK1xuXG5cdFx0Ly8gVG8gcmVkdWNlIHRoZSBudW1iZXIgb2Ygc2VsZWN0b3JzIG5lZWRpbmcgdG9rZW5pemUgaW4gdGhlIHByZUZpbHRlciwgcHJlZmVyIGFyZ3VtZW50czpcblx0XHQvLyAxLiBxdW90ZWQgKGNhcHR1cmUgMzsgY2FwdHVyZSA0IG9yIGNhcHR1cmUgNSlcblx0XHRcIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiICtcblxuXHRcdC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuXHRcdFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgYXR0cmlidXRlcyArIFwiKSopfFwiICtcblxuXHRcdC8vIDMuIGFueXRoaW5nIGVsc2UgKGNhcHR1cmUgMilcblx0XHRcIi4qXCIgK1xuXHRcdFwiKVxcXFwpfClcIixcblxuXHQvLyBMZWFkaW5nIGFuZCBub24tZXNjYXBlZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBjYXB0dXJpbmcgc29tZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHByZWNlZGluZyB0aGUgbGF0dGVyXG5cdHJ3aGl0ZXNwYWNlID0gbmV3IFJlZ0V4cCggd2hpdGVzcGFjZSArIFwiK1wiLCBcImdcIiApLFxuXG5cdHJjb21tYSA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKixcIiArIHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRybGVhZGluZ0NvbWJpbmF0b3IgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiooWz4rfl18XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgK1xuXHRcdHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRyZGVzY2VuZCA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcInw+XCIgKSxcblxuXHRycHNldWRvID0gbmV3IFJlZ0V4cCggcHNldWRvcyApLFxuXHRyaWRlbnRpZmllciA9IG5ldyBSZWdFeHAoIFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiICksXG5cblx0bWF0Y2hFeHByID0ge1xuXHRcdElEOiBuZXcgUmVnRXhwKCBcIl4jKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0Q0xBU1M6IG5ldyBSZWdFeHAoIFwiXlxcXFwuKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0VEFHOiBuZXcgUmVnRXhwKCBcIl4oXCIgKyBpZGVudGlmaWVyICsgXCJ8WypdKVwiICksXG5cdFx0QVRUUjogbmV3IFJlZ0V4cCggXCJeXCIgKyBhdHRyaWJ1dGVzICksXG5cdFx0UFNFVURPOiBuZXcgUmVnRXhwKCBcIl5cIiArIHBzZXVkb3MgKSxcblx0XHRDSElMRDogbmV3IFJlZ0V4cChcblx0XHRcdFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIiArXG5cdFx0XHRcdHdoaXRlc3BhY2UgKyBcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiICsgd2hpdGVzcGFjZSArIFwiKig/OihbKy1dfClcIiArXG5cdFx0XHRcdHdoaXRlc3BhY2UgKyBcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIgKSxcblx0XHRib29sOiBuZXcgUmVnRXhwKCBcIl4oPzpcIiArIGJvb2xlYW5zICsgXCIpJFwiLCBcImlcIiApLFxuXG5cdFx0Ly8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG5cdFx0Ly8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxuXHRcdG5lZWRzQ29udGV4dDogbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcdFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsIFwiaVwiIClcblx0fSxcblxuXHRyaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmhlYWRlciA9IC9eaFxcZCQvaSxcblxuXHQvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcblx0cnF1aWNrRXhwciA9IC9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLFxuXG5cdHJzaWJsaW5nID0gL1srfl0vLFxuXG5cdC8vIENTUyBlc2NhcGVzXG5cdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjZXNjYXBlZC1jaGFyYWN0ZXJzXG5cdHJ1bmVzY2FwZSA9IG5ldyBSZWdFeHAoIFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIiArIHdoaXRlc3BhY2UgK1xuXHRcdFwiP3xcXFxcXFxcXChbXlxcXFxyXFxcXG5cXFxcZl0pXCIsIFwiZ1wiICksXG5cdGZ1bmVzY2FwZSA9IGZ1bmN0aW9uKCBlc2NhcGUsIG5vbkhleCApIHtcblx0XHR2YXIgaGlnaCA9IFwiMHhcIiArIGVzY2FwZS5zbGljZSggMSApIC0gMHgxMDAwMDtcblxuXHRcdGlmICggbm9uSGV4ICkge1xuXG5cdFx0XHQvLyBTdHJpcCB0aGUgYmFja3NsYXNoIHByZWZpeCBmcm9tIGEgbm9uLWhleCBlc2NhcGUgc2VxdWVuY2Vcblx0XHRcdHJldHVybiBub25IZXg7XG5cdFx0fVxuXG5cdFx0Ly8gUmVwbGFjZSBhIGhleGFkZWNpbWFsIGVzY2FwZSBzZXF1ZW5jZSB3aXRoIHRoZSBlbmNvZGVkIFVuaWNvZGUgY29kZSBwb2ludFxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTErXG5cdFx0Ly8gRm9yIHZhbHVlcyBvdXRzaWRlIHRoZSBCYXNpYyBNdWx0aWxpbmd1YWwgUGxhbmUgKEJNUCksIG1hbnVhbGx5IGNvbnN0cnVjdCBhXG5cdFx0Ly8gc3Vycm9nYXRlIHBhaXJcblx0XHRyZXR1cm4gaGlnaCA8IDAgP1xuXHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCArIDB4MTAwMDAgKSA6XG5cdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDAgKTtcblx0fSxcblxuXHQvLyBVc2VkIGZvciBpZnJhbWVzOyBzZWUgYHNldERvY3VtZW50YC5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxMiAtIDE4K1xuXHQvLyBSZW1vdmluZyB0aGUgZnVuY3Rpb24gd3JhcHBlciBjYXVzZXMgYSBcIlBlcm1pc3Npb24gRGVuaWVkXCJcblx0Ly8gZXJyb3IgaW4gSUUvRWRnZS5cblx0dW5sb2FkSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHNldERvY3VtZW50KCk7XG5cdH0sXG5cblx0aW5EaXNhYmxlZEZpZWxkc2V0ID0gYWRkQ29tYmluYXRvcihcblx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSB0cnVlICYmIG5vZGVOYW1lKCBlbGVtLCBcImZpZWxkc2V0XCIgKTtcblx0XHR9LFxuXHRcdHsgZGlyOiBcInBhcmVudE5vZGVcIiwgbmV4dDogXCJsZWdlbmRcIiB9XG5cdCk7XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBBY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gdGhyb3cgdW5leHBlY3RlZGx5XG4vLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzOTNcbmZ1bmN0aW9uIHNhZmVBY3RpdmVFbGVtZW50KCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR9IGNhdGNoICggZXJyICkgeyB9XG59XG5cbi8vIE9wdGltaXplIGZvciBwdXNoLmFwcGx5KCBfLCBOb2RlTGlzdCApXG50cnkge1xuXHRwdXNoLmFwcGx5KFxuXHRcdCggYXJyID0gc2xpY2UuY2FsbCggcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMgKSApLFxuXHRcdHByZWZlcnJlZERvYy5jaGlsZE5vZGVzXG5cdCk7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMFxuXHQvLyBEZXRlY3Qgc2lsZW50bHkgZmFpbGluZyBwdXNoLmFwcGx5XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0YXJyWyBwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGggXS5ub2RlVHlwZTtcbn0gY2F0Y2ggKCBlICkge1xuXHRwdXNoID0ge1xuXHRcdGFwcGx5OiBmdW5jdGlvbiggdGFyZ2V0LCBlbHMgKSB7XG5cdFx0XHRwdXNoTmF0aXZlLmFwcGx5KCB0YXJnZXQsIHNsaWNlLmNhbGwoIGVscyApICk7XG5cdFx0fSxcblx0XHRjYWxsOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdFx0cHVzaE5hdGl2ZS5hcHBseSggdGFyZ2V0LCBzbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSApO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gZmluZCggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBtLCBpLCBlbGVtLCBuaWQsIG1hdGNoLCBncm91cHMsIG5ld1NlbGVjdG9yLFxuXHRcdG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcblxuXHRcdC8vIG5vZGVUeXBlIGRlZmF1bHRzIHRvIDksIHNpbmNlIGNvbnRleHQgZGVmYXVsdHMgdG8gZG9jdW1lbnRcblx0XHRub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBSZXR1cm4gZWFybHkgZnJvbSBjYWxscyB3aXRoIGludmFsaWQgc2VsZWN0b3Igb3IgY29udGV4dFxuXHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiB8fCAhc2VsZWN0b3IgfHxcblx0XHRub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEgKSB7XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8vIFRyeSB0byBzaG9ydGN1dCBmaW5kIG9wZXJhdGlvbnMgKGFzIG9wcG9zZWQgdG8gZmlsdGVycykgaW4gSFRNTCBkb2N1bWVudHNcblx0aWYgKCAhc2VlZCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHRcdGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuXG5cdFx0aWYgKCBkb2N1bWVudElzSFRNTCApIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHNlbGVjdG9yIGlzIHN1ZmZpY2llbnRseSBzaW1wbGUsIHRyeSB1c2luZyBhIFwiZ2V0KkJ5KlwiIERPTSBtZXRob2Rcblx0XHRcdC8vIChleGNlcHRpbmcgRG9jdW1lbnRGcmFnbWVudCBjb250ZXh0LCB3aGVyZSB0aGUgbWV0aG9kcyBkb24ndCBleGlzdClcblx0XHRcdGlmICggbm9kZVR5cGUgIT09IDExICYmICggbWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICkgKSApIHtcblxuXHRcdFx0XHQvLyBJRCBzZWxlY3RvclxuXHRcdFx0XHRpZiAoICggbSA9IG1hdGNoWyAxIF0gKSApIHtcblxuXHRcdFx0XHRcdC8vIERvY3VtZW50IGNvbnRleHRcblx0XHRcdFx0XHRpZiAoIG5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICkgKSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0XHRpZiAoIGVsZW0uaWQgPT09IG0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHVzaC5jYWxsKCByZXN1bHRzLCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRWxlbWVudCBjb250ZXh0XG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5cdFx0XHRcdFx0XHRpZiAoIG5ld0NvbnRleHQgJiYgKCBlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApICkgJiZcblx0XHRcdFx0XHRcdFx0ZmluZC5jb250YWlucyggY29udGV4dCwgZWxlbSApICYmXG5cdFx0XHRcdFx0XHRcdGVsZW0uaWQgPT09IG0gKSB7XG5cblx0XHRcdFx0XHRcdFx0cHVzaC5jYWxsKCByZXN1bHRzLCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUeXBlIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoIG1hdGNoWyAyIF0gKSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggc2VsZWN0b3IgKSApO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHRcdC8vIENsYXNzIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoICggbSA9IG1hdGNoWyAzIF0gKSAmJiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgKSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBtICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUYWtlIGFkdmFudGFnZSBvZiBxdWVyeVNlbGVjdG9yQWxsXG5cdFx0XHRpZiAoICFub25uYXRpdmVTZWxlY3RvckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF0gJiZcblx0XHRcdFx0KCAhcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdCggc2VsZWN0b3IgKSApICkge1xuXG5cdFx0XHRcdG5ld1NlbGVjdG9yID0gc2VsZWN0b3I7XG5cdFx0XHRcdG5ld0NvbnRleHQgPSBjb250ZXh0O1xuXG5cdFx0XHRcdC8vIHFTQSBjb25zaWRlcnMgZWxlbWVudHMgb3V0c2lkZSBhIHNjb3Bpbmcgcm9vdCB3aGVuIGV2YWx1YXRpbmcgY2hpbGQgb3Jcblx0XHRcdFx0Ly8gZGVzY2VuZGFudCBjb21iaW5hdG9ycywgd2hpY2ggaXMgbm90IHdoYXQgd2Ugd2FudC5cblx0XHRcdFx0Ly8gSW4gc3VjaCBjYXNlcywgd2Ugd29yayBhcm91bmQgdGhlIGJlaGF2aW9yIGJ5IHByZWZpeGluZyBldmVyeSBzZWxlY3RvciBpbiB0aGVcblx0XHRcdFx0Ly8gbGlzdCB3aXRoIGFuIElEIHNlbGVjdG9yIHJlZmVyZW5jaW5nIHRoZSBzY29wZSBjb250ZXh0LlxuXHRcdFx0XHQvLyBUaGUgdGVjaG5pcXVlIGhhcyB0byBiZSB1c2VkIGFzIHdlbGwgd2hlbiBhIGxlYWRpbmcgY29tYmluYXRvciBpcyB1c2VkXG5cdFx0XHRcdC8vIGFzIHN1Y2ggc2VsZWN0b3JzIGFyZSBub3QgcmVjb2duaXplZCBieSBxdWVyeVNlbGVjdG9yQWxsLlxuXHRcdFx0XHQvLyBUaGFua3MgdG8gQW5kcmV3IER1cG9udCBmb3IgdGhpcyB0ZWNobmlxdWUuXG5cdFx0XHRcdGlmICggbm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0XHQoIHJkZXNjZW5kLnRlc3QoIHNlbGVjdG9yICkgfHwgcmxlYWRpbmdDb21iaW5hdG9yLnRlc3QoIHNlbGVjdG9yICkgKSApIHtcblxuXHRcdFx0XHRcdC8vIEV4cGFuZCBjb250ZXh0IGZvciBzaWJsaW5nIHNlbGVjdG9yc1xuXHRcdFx0XHRcdG5ld0NvbnRleHQgPSByc2libGluZy50ZXN0KCBzZWxlY3RvciApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fFxuXHRcdFx0XHRcdFx0Y29udGV4dDtcblxuXHRcdFx0XHRcdC8vIFdlIGNhbiB1c2UgOnNjb3BlIGluc3RlYWQgb2YgdGhlIElEIGhhY2sgaWYgdGhlIGJyb3dzZXJcblx0XHRcdFx0XHQvLyBzdXBwb3J0cyBpdCAmIGlmIHdlJ3JlIG5vdCBjaGFuZ2luZyB0aGUgY29udGV4dC5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuXG5cdFx0XHRcdFx0Ly8gc3RyaWN0LWNvbXBhcmluZyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0XHRcdGlmICggbmV3Q29udGV4dCAhPSBjb250ZXh0IHx8ICFzdXBwb3J0LnNjb3BlICkge1xuXG5cdFx0XHRcdFx0XHQvLyBDYXB0dXJlIHRoZSBjb250ZXh0IElELCBzZXR0aW5nIGl0IGZpcnN0IGlmIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdFx0aWYgKCAoIG5pZCA9IGNvbnRleHQuZ2V0QXR0cmlidXRlKCBcImlkXCIgKSApICkge1xuXHRcdFx0XHRcdFx0XHRuaWQgPSBqUXVlcnkuZXNjYXBlU2VsZWN0b3IoIG5pZCApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29udGV4dC5zZXRBdHRyaWJ1dGUoIFwiaWRcIiwgKCBuaWQgPSBleHBhbmRvICkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmVmaXggZXZlcnkgc2VsZWN0b3IgaW4gdGhlIGxpc3Rcblx0XHRcdFx0XHRncm91cHMgPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHRcdFx0XHRpID0gZ3JvdXBzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGdyb3Vwc1sgaSBdID0gKCBuaWQgPyBcIiNcIiArIG5pZCA6IFwiOnNjb3BlXCIgKSArIFwiIFwiICtcblx0XHRcdFx0XHRcdFx0dG9TZWxlY3RvciggZ3JvdXBzWyBpIF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV3U2VsZWN0b3IgPSBncm91cHMuam9pbiggXCIsXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cyxcblx0XHRcdFx0XHRcdG5ld0NvbnRleHQucXVlcnlTZWxlY3RvckFsbCggbmV3U2VsZWN0b3IgKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdH0gY2F0Y2ggKCBxc2FFcnJvciApIHtcblx0XHRcdFx0XHRub25uYXRpdmVTZWxlY3RvckNhY2hlKCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdGlmICggbmlkID09PSBleHBhbmRvICkge1xuXHRcdFx0XHRcdFx0Y29udGV4dC5yZW1vdmVBdHRyaWJ1dGUoIFwiaWRcIiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFsbCBvdGhlcnNcblx0cmV0dXJuIHNlbGVjdCggc2VsZWN0b3IucmVwbGFjZSggcnRyaW1DU1MsIFwiJDFcIiApLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGtleS12YWx1ZSBjYWNoZXMgb2YgbGltaXRlZCBzaXplXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBvYmplY3QpfSBSZXR1cm5zIHRoZSBPYmplY3QgZGF0YSBhZnRlciBzdG9yaW5nIGl0IG9uIGl0c2VsZiB3aXRoXG4gKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAqXHRkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuXHR2YXIga2V5cyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGNhY2hlKCBrZXksIHZhbHVlICkge1xuXG5cdFx0Ly8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzXG5cdFx0Ly8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9pc3N1ZXMvMTU3KVxuXHRcdGlmICgga2V5cy5wdXNoKCBrZXkgKyBcIiBcIiApID4gRXhwci5jYWNoZUxlbmd0aCApIHtcblxuXHRcdFx0Ly8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXG5cdFx0XHRkZWxldGUgY2FjaGVbIGtleXMuc2hpZnQoKSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gKCBjYWNoZVsga2V5ICsgXCIgXCIgXSA9IHZhbHVlICk7XG5cdH1cblx0cmV0dXJuIGNhY2hlO1xufVxuXG4vKipcbiAqIE1hcmsgYSBmdW5jdGlvbiBmb3Igc3BlY2lhbCB1c2UgYnkgalF1ZXJ5IHNlbGVjdG9yIG1vZHVsZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1hcmtcbiAqL1xuZnVuY3Rpb24gbWFya0Z1bmN0aW9uKCBmbiApIHtcblx0Zm5bIGV4cGFuZG8gXSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHRlc3RpbmcgdXNpbmcgYW4gZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGFzc2VkIHRoZSBjcmVhdGVkIGVsZW1lbnQgYW5kIHJldHVybnMgYSBib29sZWFuIHJlc3VsdFxuICovXG5mdW5jdGlvbiBhc3NlcnQoIGZuICkge1xuXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImZpZWxkc2V0XCIgKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiAhIWZuKCBlbCApO1xuXHR9IGNhdGNoICggZSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cblx0XHQvLyBSZW1vdmUgZnJvbSBpdHMgcGFyZW50IGJ5IGRlZmF1bHRcblx0XHRpZiAoIGVsLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBlbCApO1xuXHRcdH1cblxuXHRcdC8vIHJlbGVhc2UgbWVtb3J5IGluIElFXG5cdFx0ZWwgPSBudWxsO1xuXHR9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBpbnB1dCB0eXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8oIHR5cGUgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGJ1dHRvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvblBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiAoIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSB8fCBub2RlTmFtZSggZWxlbSwgXCJidXR0b25cIiApICkgJiZcblx0XHRcdGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIDplbmFibGVkLzpkaXNhYmxlZFxuICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggZGlzYWJsZWQgKSB7XG5cblx0Ly8gS25vd24gOmRpc2FibGVkIGZhbHNlIHBvc2l0aXZlczogZmllbGRzZXRbZGlzYWJsZWRdID4gbGVnZW5kOm50aC1vZi10eXBlKG4rMikgOmNhbi1kaXNhYmxlXG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE9ubHkgY2VydGFpbiBlbGVtZW50cyBjYW4gbWF0Y2ggOmVuYWJsZWQgb3IgOmRpc2FibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWRpc2FibGVkXG5cdFx0aWYgKCBcImZvcm1cIiBpbiBlbGVtICkge1xuXG5cdFx0XHQvLyBDaGVjayBmb3IgaW5oZXJpdGVkIGRpc2FibGVkbmVzcyBvbiByZWxldmFudCBub24tZGlzYWJsZWQgZWxlbWVudHM6XG5cdFx0XHQvLyAqIGxpc3RlZCBmb3JtLWFzc29jaWF0ZWQgZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBmaWVsZHNldFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtZmUtZGlzYWJsZWRcblx0XHRcdC8vICogb3B0aW9uIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuXHRcdFx0Ly8gQWxsIHN1Y2ggZWxlbWVudHMgaGF2ZSBhIFwiZm9ybVwiIHByb3BlcnR5LlxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5kaXNhYmxlZCA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0Ly8gT3B0aW9uIGVsZW1lbnRzIGRlZmVyIHRvIGEgcGFyZW50IG9wdGdyb3VwIGlmIHByZXNlbnRcblx0XHRcdFx0aWYgKCBcImxhYmVsXCIgaW4gZWxlbSApIHtcblx0XHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5wYXJlbnROb2RlLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDYgLSAxMStcblx0XHRcdFx0Ly8gVXNlIHRoZSBpc0Rpc2FibGVkIHNob3J0Y3V0IHByb3BlcnR5IHRvIGNoZWNrIGZvciBkaXNhYmxlZCBmaWVsZHNldCBhbmNlc3RvcnNcblx0XHRcdFx0cmV0dXJuIGVsZW0uaXNEaXNhYmxlZCA9PT0gZGlzYWJsZWQgfHxcblxuXHRcdFx0XHRcdC8vIFdoZXJlIHRoZXJlIGlzIG5vIGlzRGlzYWJsZWQsIGNoZWNrIG1hbnVhbGx5XG5cdFx0XHRcdFx0ZWxlbS5pc0Rpc2FibGVkICE9PSAhZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdGluRGlzYWJsZWRGaWVsZHNldCggZWxlbSApID09PSBkaXNhYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXG5cdFx0Ly8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuXHRcdC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuXHRcdC8vIGV2ZW4gZXhpc3Qgb24gdGhlbSwgbGV0IGFsb25lIGhhdmUgYSBib29sZWFuIHZhbHVlLlxuXHRcdH0gZWxzZSBpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdH1cblxuXHRcdC8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZuICkge1xuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggYXJndW1lbnQgKSB7XG5cdFx0YXJndW1lbnQgPSArYXJndW1lbnQ7XG5cdFx0cmV0dXJuIG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHR2YXIgaixcblx0XHRcdFx0bWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcblx0XHRcdFx0aSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cblx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggc2VlZFsgKCBqID0gbWF0Y2hJbmRleGVzWyBpIF0gKSBdICkge1xuXHRcdFx0XHRcdHNlZWRbIGogXSA9ICEoIG1hdGNoZXNbIGogXSA9IHNlZWRbIGogXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGEgbm9kZSBmb3IgdmFsaWRpdHkgYXMgYSBqUXVlcnkgc2VsZWN0b3IgY29udGV4dFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdD19IGNvbnRleHRcbiAqIEByZXR1cm5zIHtFbGVtZW50fE9iamVjdHxCb29sZWFufSBUaGUgaW5wdXQgbm9kZSBpZiBhY2NlcHRhYmxlLCBvdGhlcndpc2UgYSBmYWxzeSB2YWx1ZVxuICovXG5mdW5jdGlvbiB0ZXN0Q29udGV4dCggY29udGV4dCApIHtcblx0cmV0dXJuIGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29udGV4dDtcbn1cblxuLyoqXG4gKiBTZXRzIGRvY3VtZW50LXJlbGF0ZWQgdmFyaWFibGVzIG9uY2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IFtub2RlXSBBbiBlbGVtZW50IG9yIGRvY3VtZW50IG9iamVjdCB0byB1c2UgdG8gc2V0IHRoZSBkb2N1bWVudFxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY3VycmVudCBkb2N1bWVudFxuICovXG5mdW5jdGlvbiBzZXREb2N1bWVudCggbm9kZSApIHtcblx0dmFyIHN1YldpbmRvdyxcblx0XHRkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGlmIGRvYyBpcyBpbnZhbGlkIG9yIGFscmVhZHkgc2VsZWN0ZWRcblx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0aWYgKCBkb2MgPT0gZG9jdW1lbnQgfHwgZG9jLm5vZGVUeXBlICE9PSA5IHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50ICkge1xuXHRcdHJldHVybiBkb2N1bWVudDtcblx0fVxuXG5cdC8vIFVwZGF0ZSBnbG9iYWwgdmFyaWFibGVzXG5cdGRvY3VtZW50ID0gZG9jO1xuXHRkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdGRvY3VtZW50SXNIVE1MID0gIWpRdWVyeS5pc1hNTERvYyggZG9jdW1lbnQgKTtcblxuXHQvLyBTdXBwb3J0OiBpT1MgNyBvbmx5LCBJRSA5IC0gMTErXG5cdC8vIE9sZGVyIGJyb3dzZXJzIGRpZG4ndCBzdXBwb3J0IHVucHJlZml4ZWQgYG1hdGNoZXNgLlxuXHRtYXRjaGVzID0gZG9jdW1lbnRFbGVtZW50Lm1hdGNoZXMgfHxcblx0XHRkb2N1bWVudEVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jdW1lbnRFbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTIgLSAxOCtcblx0Ly8gQWNjZXNzaW5nIGlmcmFtZSBkb2N1bWVudHMgYWZ0ZXIgdW5sb2FkIHRocm93cyBcInBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3JzIChzZWUgdHJhYy0xMzkzNilcblx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0aWYgKCBwcmVmZXJyZWREb2MgIT0gZG9jdW1lbnQgJiZcblx0XHQoIHN1YldpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3ICkgJiYgc3ViV2luZG93LnRvcCAhPT0gc3ViV2luZG93ICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxMiAtIDE4K1xuXHRcdHN1YldpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInVubG9hZFwiLCB1bmxvYWRIYW5kbGVyICk7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA8MTBcblx0Ly8gQ2hlY2sgaWYgZ2V0RWxlbWVudEJ5SWQgcmV0dXJucyBlbGVtZW50cyBieSBuYW1lXG5cdC8vIFRoZSBicm9rZW4gZ2V0RWxlbWVudEJ5SWQgbWV0aG9kcyBkb24ndCBwaWNrIHVwIHByb2dyYW1tYXRpY2FsbHktc2V0IG5hbWVzLFxuXHQvLyBzbyB1c2UgYSByb3VuZGFib3V0IGdldEVsZW1lbnRzQnlOYW1lIHRlc3Rcblx0c3VwcG9ydC5nZXRCeUlkID0gYXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKCBlbCApLmlkID0galF1ZXJ5LmV4cGFuZG87XG5cdFx0cmV0dXJuICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSB8fFxuXHRcdFx0IWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCBqUXVlcnkuZXhwYW5kbyApLmxlbmd0aDtcblx0fSApO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDkgb25seVxuXHQvLyBDaGVjayB0byBzZWUgaWYgaXQncyBwb3NzaWJsZSB0byBkbyBtYXRjaGVzU2VsZWN0b3Jcblx0Ly8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZS5cblx0c3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCA9IGFzc2VydCggZnVuY3Rpb24oIGVsICkge1xuXHRcdHJldHVybiBtYXRjaGVzLmNhbGwoIGVsLCBcIipcIiApO1xuXHR9ICk7XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxMiAtIDE4K1xuXHQvLyBJRS9FZGdlIGRvbid0IHN1cHBvcnQgdGhlIDpzY29wZSBwc2V1ZG8tY2xhc3MuXG5cdHN1cHBvcnQuc2NvcGUgPSBhc3NlcnQoIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBcIjpzY29wZVwiICk7XG5cdH0gKTtcblxuXHQvLyBTdXBwb3J0OiBDaHJvbWUgMTA1IC0gMTExIG9ubHksIFNhZmFyaSAxNS40IC0gMTYuMyBvbmx5XG5cdC8vIE1ha2Ugc3VyZSB0aGUgYDpoYXMoKWAgYXJndW1lbnQgaXMgcGFyc2VkIHVuZm9yZ2l2aW5nbHkuXG5cdC8vIFdlIGluY2x1ZGUgYCpgIGluIHRoZSB0ZXN0IHRvIGRldGVjdCBidWdneSBpbXBsZW1lbnRhdGlvbnMgdGhhdCBhcmVcblx0Ly8gX3NlbGVjdGl2ZWx5XyBmb3JnaXZpbmcgKHNwZWNpZmljYWxseSB3aGVuIHRoZSBsaXN0IGluY2x1ZGVzIGF0IGxlYXN0XG5cdC8vIG9uZSB2YWxpZCBzZWxlY3RvcikuXG5cdC8vIE5vdGUgdGhhdCB3ZSB0cmVhdCBjb21wbGV0ZSBsYWNrIG9mIHN1cHBvcnQgZm9yIGA6aGFzKClgIGFzIGlmIGl0IHdlcmVcblx0Ly8gc3BlYy1jb21wbGlhbnQgc3VwcG9ydCwgd2hpY2ggaXMgZmluZSBiZWNhdXNlIHVzZSBvZiBgOmhhcygpYCBpbiBzdWNoXG5cdC8vIGVudmlyb25tZW50cyB3aWxsIGZhaWwgaW4gdGhlIHFTQSBwYXRoIGFuZCBmYWxsIGJhY2sgdG8galF1ZXJ5IHRyYXZlcnNhbFxuXHQvLyBhbnl3YXkuXG5cdHN1cHBvcnQuY3NzSGFzID0gYXNzZXJ0KCBmdW5jdGlvbigpIHtcblx0XHR0cnkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCI6aGFzKCosOmpxZmFrZSlcIiApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9ICk7XG5cblx0Ly8gSUQgZmlsdGVyIGFuZCBmaW5kXG5cdGlmICggc3VwcG9ydC5nZXRCeUlkICkge1xuXHRcdEV4cHIuZmlsdGVyLklEID0gZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggXCJpZFwiICkgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fTtcblx0XHRFeHByLmZpbmQuSUQgPSBmdW5jdGlvbiggaWQsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cdFx0XHRcdHJldHVybiBlbGVtID8gWyBlbGVtIF0gOiBbXTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdEV4cHIuZmlsdGVyLklEID0gIGZ1bmN0aW9uKCBpZCApIHtcblx0XHRcdHZhciBhdHRySWQgPSBpZC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgbm9kZSA9IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZU5vZGUgIT09IFwidW5kZWZpbmVkXCIgJiZcblx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZU5vZGUoIFwiaWRcIiApO1xuXHRcdFx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLnZhbHVlID09PSBhdHRySWQ7XG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA2IC0gNyBvbmx5XG5cdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgaXMgbm90IHJlbGlhYmxlIGFzIGEgZmluZCBzaG9ydGN1dFxuXHRcdEV4cHIuZmluZC5JRCA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRcdHZhciBub2RlLCBpLCBlbGVtcyxcblx0XHRcdFx0XHRlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblxuXHRcdFx0XHRpZiAoIGVsZW0gKSB7XG5cblx0XHRcdFx0XHQvLyBWZXJpZnkgdGhlIGlkIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdG5vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoIFwiaWRcIiApO1xuXHRcdFx0XHRcdGlmICggbm9kZSAmJiBub2RlLnZhbHVlID09PSBpZCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBbIGVsZW0gXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBGYWxsIGJhY2sgb24gZ2V0RWxlbWVudHNCeU5hbWVcblx0XHRcdFx0XHRlbGVtcyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeU5hbWUoIGlkICk7XG5cdFx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoIFwiaWRcIiApO1xuXHRcdFx0XHRcdFx0aWYgKCBub2RlICYmIG5vZGUudmFsdWUgPT09IGlkICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gWyBlbGVtIF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBUYWdcblx0RXhwci5maW5kLlRBRyA9IGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XG5cdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgKTtcblxuXHRcdC8vIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgZG9uJ3QgaGF2ZSBnRUJUTlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCB0YWcgKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gQ2xhc3Ncblx0RXhwci5maW5kLkNMQVNTID0gZnVuY3Rpb24oIGNsYXNzTmFtZSwgY29udGV4dCApIHtcblx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBjbGFzc05hbWUgKTtcblx0XHR9XG5cdH07XG5cblx0LyogUVNBL21hdGNoZXNTZWxlY3RvclxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gUVNBIGFuZCBtYXRjaGVzU2VsZWN0b3Igc3VwcG9ydFxuXG5cdHJidWdneVFTQSA9IFtdO1xuXG5cdC8vIEJ1aWxkIFFTQSByZWdleFxuXHQvLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pXG5cdGFzc2VydCggZnVuY3Rpb24oIGVsICkge1xuXG5cdFx0dmFyIGlucHV0O1xuXG5cdFx0ZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKCBlbCApLmlubmVySFRNTCA9XG5cdFx0XHRcIjxhIGlkPSdcIiArIGV4cGFuZG8gKyBcIicgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT5cIiArXG5cdFx0XHRcIjxzZWxlY3QgaWQ9J1wiICsgZXhwYW5kbyArIFwiLVxcclxcXFwnIGRpc2FibGVkPSdkaXNhYmxlZCc+XCIgK1xuXHRcdFx0XCI8b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiO1xuXG5cdFx0Ly8gU3VwcG9ydDogaU9TIDw9NyAtIDggb25seVxuXHRcdC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHkgaW4gc29tZSBYTUwgZG9jdW1lbnRzXG5cdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJbc2VsZWN0ZWRdXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKig/OnZhbHVlfFwiICsgYm9vbGVhbnMgKyBcIilcIiApO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IGlPUyA8PTcgLSA4IG9ubHlcblx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIltpZH49XCIgKyBleHBhbmRvICsgXCItXVwiICkubGVuZ3RoICkge1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwifj1cIiApO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IGlPUyA4IG9ubHlcblx0XHQvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM2ODUxXG5cdFx0Ly8gSW4tcGFnZSBgc2VsZWN0b3IjaWQgc2libGluZy1jb21iaW5hdG9yIHNlbGVjdG9yYCBmYWlsc1xuXHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiYSNcIiArIGV4cGFuZG8gKyBcIisqXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCIuIy4rWyt+XVwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MTA1KywgRmlyZWZveCA8PTEwNCssIFNhZmFyaSA8PTE1LjQrXG5cdFx0Ly8gSW4gc29tZSBvZiB0aGUgZG9jdW1lbnQga2luZHMsIHRoZXNlIHNlbGVjdG9ycyB3b3VsZG4ndCB3b3JrIG5hdGl2ZWx5LlxuXHRcdC8vIFRoaXMgaXMgcHJvYmFibHkgT0sgYnV0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3ZSB3YW50IHRvIG1haW50YWluXG5cdFx0Ly8gaGFuZGxpbmcgdGhlbSB0aHJvdWdoIGpRdWVyeSB0cmF2ZXJzYWwgaW4galF1ZXJ5IDMueC5cblx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIjpjaGVja2VkXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCI6Y2hlY2tlZFwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogV2luZG93cyA4IE5hdGl2ZSBBcHBzXG5cdFx0Ly8gVGhlIHR5cGUgYW5kIG5hbWUgYXR0cmlidXRlcyBhcmUgcmVzdHJpY3RlZCBkdXJpbmcgLmlubmVySFRNTCBhc3NpZ25tZW50XG5cdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCBcImhpZGRlblwiICk7XG5cdFx0ZWwuYXBwZW5kQ2hpbGQoIGlucHV0ICkuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJEXCIgKTtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0XHQvLyBJRSdzIDpkaXNhYmxlZCBzZWxlY3RvciBkb2VzIG5vdCBwaWNrIHVwIHRoZSBjaGlsZHJlbiBvZiBkaXNhYmxlZCBmaWVsZHNldHNcblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0xMDUrLCBGaXJlZm94IDw9MTA0KywgU2FmYXJpIDw9MTUuNCtcblx0XHQvLyBJbiBzb21lIG9mIHRoZSBkb2N1bWVudCBraW5kcywgdGhlc2Ugc2VsZWN0b3JzIHdvdWxkbid0IHdvcmsgbmF0aXZlbHkuXG5cdFx0Ly8gVGhpcyBpcyBwcm9iYWJseSBPSyBidXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdlIHdhbnQgdG8gbWFpbnRhaW5cblx0XHQvLyBoYW5kbGluZyB0aGVtIHRocm91Z2ggalF1ZXJ5IHRyYXZlcnNhbCBpbiBqUXVlcnkgMy54LlxuXHRcdGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCggZWwgKS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIjpkaXNhYmxlZFwiICkubGVuZ3RoICE9PSAyICkge1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIiApO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNSAtIDE4K1xuXHRcdC8vIElFIDExL0VkZ2UgZG9uJ3QgZmluZCBlbGVtZW50cyBvbiBhIGBbbmFtZT0nJ11gIHF1ZXJ5IGluIHNvbWUgY2FzZXMuXG5cdFx0Ly8gQWRkaW5nIGEgdGVtcG9yYXJ5IGF0dHJpYnV0ZSB0byB0aGUgZG9jdW1lbnQgYmVmb3JlIHRoZSBzZWxlY3Rpb24gd29ya3Ncblx0XHQvLyBhcm91bmQgdGhlIGlzc3VlLlxuXHRcdC8vIEludGVyZXN0aW5nbHksIElFIDEwICYgb2xkZXIgZG9uJ3Qgc2VlbSB0byBoYXZlIHRoZSBpc3N1ZS5cblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwiXCIgKTtcblx0XHRlbC5hcHBlbmRDaGlsZCggaW5wdXQgKTtcblx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIltuYW1lPScnXVwiICkubGVuZ3RoICkge1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIipuYW1lXCIgKyB3aGl0ZXNwYWNlICsgXCIqPVwiICtcblx0XHRcdFx0d2hpdGVzcGFjZSArIFwiKig/OicnfFxcXCJcXFwiKVwiICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0aWYgKCAhc3VwcG9ydC5jc3NIYXMgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgMTA1IC0gMTEwKywgU2FmYXJpIDE1LjQgLSAxNi4zK1xuXHRcdC8vIE91ciByZWd1bGFyIGB0cnktY2F0Y2hgIG1lY2hhbmlzbSBmYWlscyB0byBkZXRlY3QgbmF0aXZlbHktdW5zdXBwb3J0ZWRcblx0XHQvLyBwc2V1ZG8tY2xhc3NlcyBpbnNpZGUgYDpoYXMoKWAgKHN1Y2ggYXMgYDpoYXMoOmNvbnRhaW5zKFwiRm9vXCIpKWApXG5cdFx0Ly8gaW4gYnJvd3NlcnMgdGhhdCBwYXJzZSB0aGUgYDpoYXMoKWAgYXJndW1lbnQgYXMgYSBmb3JnaXZpbmcgc2VsZWN0b3IgbGlzdC5cblx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvc2VsZWN0b3JzLyNyZWxhdGlvbmFsIG5vdyByZXF1aXJlcyB0aGUgYXJndW1lbnRcblx0XHQvLyB0byBiZSBwYXJzZWQgdW5mb3JnaXZpbmdseSwgYnV0IGJyb3dzZXJzIGhhdmUgbm90IHlldCBmdWxseSBhZGp1c3RlZC5cblx0XHRyYnVnZ3lRU0EucHVzaCggXCI6aGFzXCIgKTtcblx0fVxuXG5cdHJidWdneVFTQSA9IHJidWdneVFTQS5sZW5ndGggJiYgbmV3IFJlZ0V4cCggcmJ1Z2d5UVNBLmpvaW4oIFwifFwiICkgKTtcblxuXHQvKiBTb3J0aW5nXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBEb2N1bWVudCBvcmRlciBzb3J0aW5nXG5cdHNvcnRPcmRlciA9IGZ1bmN0aW9uKCBhLCBiICkge1xuXG5cdFx0Ly8gRmxhZyBmb3IgZHVwbGljYXRlIHJlbW92YWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Ly8gU29ydCBvbiBtZXRob2QgZXhpc3RlbmNlIGlmIG9ubHkgb25lIGlucHV0IGhhcyBjb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuXHRcdHZhciBjb21wYXJlID0gIWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gLSAhYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcblx0XHRpZiAoIGNvbXBhcmUgKSB7XG5cdFx0XHRyZXR1cm4gY29tcGFyZTtcblx0XHR9XG5cblx0XHQvLyBDYWxjdWxhdGUgcG9zaXRpb24gaWYgYm90aCBpbnB1dHMgYmVsb25nIHRvIHRoZSBzYW1lIGRvY3VtZW50XG5cdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRjb21wYXJlID0gKCBhLm93bmVyRG9jdW1lbnQgfHwgYSApID09ICggYi5vd25lckRvY3VtZW50IHx8IGIgKSA/XG5cdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBiICkgOlxuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2Uga25vdyB0aGV5IGFyZSBkaXNjb25uZWN0ZWRcblx0XHRcdDE7XG5cblx0XHQvLyBEaXNjb25uZWN0ZWQgbm9kZXNcblx0XHRpZiAoIGNvbXBhcmUgJiAxIHx8XG5cdFx0XHQoICFzdXBwb3J0LnNvcnREZXRhY2hlZCAmJiBiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBhICkgPT09IGNvbXBhcmUgKSApIHtcblxuXHRcdFx0Ly8gQ2hvb3NlIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgcmVsYXRlZCB0byBvdXIgcHJlZmVycmVkIGRvY3VtZW50XG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0aWYgKCBhID09PSBkb2N1bWVudCB8fCBhLm93bmVyRG9jdW1lbnQgPT0gcHJlZmVycmVkRG9jICYmXG5cdFx0XHRcdGZpbmQuY29udGFpbnMoIHByZWZlcnJlZERvYywgYSApICkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRpZiAoIGIgPT09IGRvY3VtZW50IHx8IGIub3duZXJEb2N1bWVudCA9PSBwcmVmZXJyZWREb2MgJiZcblx0XHRcdFx0ZmluZC5jb250YWlucyggcHJlZmVycmVkRG9jLCBiICkgKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWludGFpbiBvcmlnaW5hbCBvcmRlclxuXHRcdFx0cmV0dXJuIHNvcnRJbnB1dCA/XG5cdFx0XHRcdCggaW5kZXhPZi5jYWxsKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YuY2FsbCggc29ydElucHV0LCBiICkgKSA6XG5cdFx0XHRcdDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbXBhcmUgJiA0ID8gLTEgOiAxO1xuXHR9O1xuXG5cdHJldHVybiBkb2N1bWVudDtcbn1cblxuZmluZC5tYXRjaGVzID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1lbnRzICkge1xuXHRyZXR1cm4gZmluZCggZXhwciwgbnVsbCwgbnVsbCwgZWxlbWVudHMgKTtcbn07XG5cbmZpbmQubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24oIGVsZW0sIGV4cHIgKSB7XG5cdHNldERvY3VtZW50KCBlbGVtICk7XG5cblx0aWYgKCBkb2N1bWVudElzSFRNTCAmJlxuXHRcdCFub25uYXRpdmVTZWxlY3RvckNhY2hlWyBleHByICsgXCIgXCIgXSAmJlxuXHRcdCggIXJidWdneVFTQSB8fCAhcmJ1Z2d5UVNBLnRlc3QoIGV4cHIgKSApICkge1xuXG5cdFx0dHJ5IHtcblx0XHRcdHZhciByZXQgPSBtYXRjaGVzLmNhbGwoIGVsZW0sIGV4cHIgKTtcblxuXHRcdFx0Ly8gSUUgOSdzIG1hdGNoZXNTZWxlY3RvciByZXR1cm5zIGZhbHNlIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdFx0aWYgKCByZXQgfHwgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCB8fFxuXG5cdFx0XHRcdFx0Ly8gQXMgd2VsbCwgZGlzY29ubmVjdGVkIG5vZGVzIGFyZSBzYWlkIHRvIGJlIGluIGEgZG9jdW1lbnRcblx0XHRcdFx0XHQvLyBmcmFnbWVudCBpbiBJRSA5XG5cdFx0XHRcdFx0ZWxlbS5kb2N1bWVudCAmJiBlbGVtLmRvY3VtZW50Lm5vZGVUeXBlICE9PSAxMSApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdG5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUoIGV4cHIsIHRydWUgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmluZCggZXhwciwgZG9jdW1lbnQsIG51bGwsIFsgZWxlbSBdICkubGVuZ3RoID4gMDtcbn07XG5cbmZpbmQuY29udGFpbnMgPSBmdW5jdGlvbiggY29udGV4dCwgZWxlbSApIHtcblxuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0aWYgKCAoIGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0ICkgIT0gZG9jdW1lbnQgKSB7XG5cdFx0c2V0RG9jdW1lbnQoIGNvbnRleHQgKTtcblx0fVxuXHRyZXR1cm4galF1ZXJ5LmNvbnRhaW5zKCBjb250ZXh0LCBlbGVtICk7XG59O1xuXG5cbmZpbmQuYXR0ciA9IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXG5cdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuXHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRpZiAoICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKSAhPSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHR9XG5cblx0dmFyIGZuID0gRXhwci5hdHRySGFuZGxlWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSxcblxuXHRcdC8vIERvbid0IGdldCBmb29sZWQgYnkgT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzIChzZWUgdHJhYy0xMzgwNylcblx0XHR2YWwgPSBmbiAmJiBoYXNPd24uY2FsbCggRXhwci5hdHRySGFuZGxlLCBuYW1lLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRmbiggZWxlbSwgbmFtZSwgIWRvY3VtZW50SXNIVE1MICkgOlxuXHRcdFx0dW5kZWZpbmVkO1xuXG5cdGlmICggdmFsICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSApO1xufTtcblxuZmluZC5lcnJvciA9IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdHRocm93IG5ldyBFcnJvciggXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIiArIG1zZyApO1xufTtcblxuLyoqXG4gKiBEb2N1bWVudCBzb3J0aW5nIGFuZCByZW1vdmluZyBkdXBsaWNhdGVzXG4gKiBAcGFyYW0ge0FycmF5TGlrZX0gcmVzdWx0c1xuICovXG5qUXVlcnkudW5pcXVlU29ydCA9IGZ1bmN0aW9uKCByZXN1bHRzICkge1xuXHR2YXIgZWxlbSxcblx0XHRkdXBsaWNhdGVzID0gW10sXG5cdFx0aiA9IDAsXG5cdFx0aSA9IDA7XG5cblx0Ly8gVW5sZXNzIHdlICprbm93KiB3ZSBjYW4gZGV0ZWN0IGR1cGxpY2F0ZXMsIGFzc3VtZSB0aGVpciBwcmVzZW5jZVxuXHQvL1xuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wK1xuXHQvLyBUZXN0aW5nIGZvciBkZXRlY3RpbmcgZHVwbGljYXRlcyBpcyB1bnByZWRpY3RhYmxlIHNvIGluc3RlYWQgYXNzdW1lIHdlIGNhbid0XG5cdC8vIGRlcGVuZCBvbiBkdXBsaWNhdGUgZGV0ZWN0aW9uIGluIGFsbCBicm93c2VycyB3aXRob3V0IGEgc3RhYmxlIHNvcnQuXG5cdGhhc0R1cGxpY2F0ZSA9ICFzdXBwb3J0LnNvcnRTdGFibGU7XG5cdHNvcnRJbnB1dCA9ICFzdXBwb3J0LnNvcnRTdGFibGUgJiYgc2xpY2UuY2FsbCggcmVzdWx0cywgMCApO1xuXHRzb3J0LmNhbGwoIHJlc3VsdHMsIHNvcnRPcmRlciApO1xuXG5cdGlmICggaGFzRHVwbGljYXRlICkge1xuXHRcdHdoaWxlICggKCBlbGVtID0gcmVzdWx0c1sgaSsrIF0gKSApIHtcblx0XHRcdGlmICggZWxlbSA9PT0gcmVzdWx0c1sgaSBdICkge1xuXHRcdFx0XHRqID0gZHVwbGljYXRlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0c3BsaWNlLmNhbGwoIHJlc3VsdHMsIGR1cGxpY2F0ZXNbIGogXSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENsZWFyIGlucHV0IGFmdGVyIHNvcnRpbmcgdG8gcmVsZWFzZSBvYmplY3RzXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9wdWxsLzIyNVxuXHRzb3J0SW5wdXQgPSBudWxsO1xuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxualF1ZXJ5LmZuLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkudW5pcXVlU29ydCggc2xpY2UuYXBwbHkoIHRoaXMgKSApICk7XG59O1xuXG5FeHByID0galF1ZXJ5LmV4cHIgPSB7XG5cblx0Ly8gQ2FuIGJlIGFkanVzdGVkIGJ5IHRoZSB1c2VyXG5cdGNhY2hlTGVuZ3RoOiA1MCxcblxuXHRjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcblxuXHRtYXRjaDogbWF0Y2hFeHByLFxuXG5cdGF0dHJIYW5kbGU6IHt9LFxuXG5cdGZpbmQ6IHt9LFxuXG5cdHJlbGF0aXZlOiB7XG5cdFx0XCI+XCI6IHsgZGlyOiBcInBhcmVudE5vZGVcIiwgZmlyc3Q6IHRydWUgfSxcblx0XHRcIiBcIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiIH0sXG5cdFx0XCIrXCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiflwiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiB9XG5cdH0sXG5cblx0cHJlRmlsdGVyOiB7XG5cdFx0QVRUUjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0bWF0Y2hbIDEgXSA9IG1hdGNoWyAxIF0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0Ly8gTW92ZSB0aGUgZ2l2ZW4gdmFsdWUgdG8gbWF0Y2hbM10gd2hldGhlciBxdW90ZWQgb3IgdW5xdW90ZWRcblx0XHRcdG1hdGNoWyAzIF0gPSAoIG1hdGNoWyAzIF0gfHwgbWF0Y2hbIDQgXSB8fCBtYXRjaFsgNSBdIHx8IFwiXCIgKVxuXHRcdFx0XHQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsgMiBdID09PSBcIn49XCIgKSB7XG5cdFx0XHRcdG1hdGNoWyAzIF0gPSBcIiBcIiArIG1hdGNoWyAzIF0gKyBcIiBcIjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCA0ICk7XG5cdFx0fSxcblxuXHRcdENISUxEOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cblx0XHRcdC8qIG1hdGNoZXMgZnJvbSBtYXRjaEV4cHJbXCJDSElMRFwiXVxuXHRcdFx0XHQxIHR5cGUgKG9ubHl8bnRofC4uLilcblx0XHRcdFx0MiB3aGF0IChjaGlsZHxvZi10eXBlKVxuXHRcdFx0XHQzIGFyZ3VtZW50IChldmVufG9kZHxcXGQqfFxcZCpuKFsrLV1cXGQrKT98Li4uKVxuXHRcdFx0XHQ0IHhuLWNvbXBvbmVudCBvZiB4bit5IGFyZ3VtZW50IChbKy1dP1xcZCpufClcblx0XHRcdFx0NSBzaWduIG9mIHhuLWNvbXBvbmVudFxuXHRcdFx0XHQ2IHggb2YgeG4tY29tcG9uZW50XG5cdFx0XHRcdDcgc2lnbiBvZiB5LWNvbXBvbmVudFxuXHRcdFx0XHQ4IHkgb2YgeS1jb21wb25lbnRcblx0XHRcdCovXG5cdFx0XHRtYXRjaFsgMSBdID0gbWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIG1hdGNoWyAxIF0uc2xpY2UoIDAsIDMgKSA9PT0gXCJudGhcIiApIHtcblxuXHRcdFx0XHQvLyBudGgtKiByZXF1aXJlcyBhcmd1bWVudFxuXHRcdFx0XHRpZiAoICFtYXRjaFsgMyBdICkge1xuXHRcdFx0XHRcdGZpbmQuZXJyb3IoIG1hdGNoWyAwIF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIG51bWVyaWMgeCBhbmQgeSBwYXJhbWV0ZXJzIGZvciBFeHByLmZpbHRlci5DSElMRFxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXG5cdFx0XHRcdG1hdGNoWyA0IF0gPSArKCBtYXRjaFsgNCBdID9cblx0XHRcdFx0XHRtYXRjaFsgNSBdICsgKCBtYXRjaFsgNiBdIHx8IDEgKSA6XG5cdFx0XHRcdFx0MiAqICggbWF0Y2hbIDMgXSA9PT0gXCJldmVuXCIgfHwgbWF0Y2hbIDMgXSA9PT0gXCJvZGRcIiApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG1hdGNoWyA1IF0gPSArKCAoIG1hdGNoWyA3IF0gKyBtYXRjaFsgOCBdICkgfHwgbWF0Y2hbIDMgXSA9PT0gXCJvZGRcIiApO1xuXG5cdFx0XHQvLyBvdGhlciB0eXBlcyBwcm9oaWJpdCBhcmd1bWVudHNcblx0XHRcdH0gZWxzZSBpZiAoIG1hdGNoWyAzIF0gKSB7XG5cdFx0XHRcdGZpbmQuZXJyb3IoIG1hdGNoWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdH0sXG5cblx0XHRQU0VVRE86IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdHZhciBleGNlc3MsXG5cdFx0XHRcdHVucXVvdGVkID0gIW1hdGNoWyA2IF0gJiYgbWF0Y2hbIDIgXTtcblxuXHRcdFx0aWYgKCBtYXRjaEV4cHIuQ0hJTEQudGVzdCggbWF0Y2hbIDAgXSApICkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcblx0XHRcdGlmICggbWF0Y2hbIDMgXSApIHtcblx0XHRcdFx0bWF0Y2hbIDIgXSA9IG1hdGNoWyA0IF0gfHwgbWF0Y2hbIDUgXSB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTdHJpcCBleGNlc3MgY2hhcmFjdGVycyBmcm9tIHVucXVvdGVkIGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggdW5xdW90ZWQgJiYgcnBzZXVkby50ZXN0KCB1bnF1b3RlZCApICYmXG5cblx0XHRcdFx0Ly8gR2V0IGV4Y2VzcyBmcm9tIHRva2VuaXplIChyZWN1cnNpdmVseSlcblx0XHRcdFx0KCBleGNlc3MgPSB0b2tlbml6ZSggdW5xdW90ZWQsIHRydWUgKSApICYmXG5cblx0XHRcdFx0Ly8gYWR2YW5jZSB0byB0aGUgbmV4dCBjbG9zaW5nIHBhcmVudGhlc2lzXG5cdFx0XHRcdCggZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZiggXCIpXCIsIHVucXVvdGVkLmxlbmd0aCAtIGV4Y2VzcyApIC0gdW5xdW90ZWQubGVuZ3RoICkgKSB7XG5cblx0XHRcdFx0Ly8gZXhjZXNzIGlzIGEgbmVnYXRpdmUgaW5kZXhcblx0XHRcdFx0bWF0Y2hbIDAgXSA9IG1hdGNoWyAwIF0uc2xpY2UoIDAsIGV4Y2VzcyApO1xuXHRcdFx0XHRtYXRjaFsgMiBdID0gdW5xdW90ZWQuc2xpY2UoIDAsIGV4Y2VzcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXR1cm4gb25seSBjYXB0dXJlcyBuZWVkZWQgYnkgdGhlIHBzZXVkbyBmaWx0ZXIgbWV0aG9kICh0eXBlIGFuZCBhcmd1bWVudClcblx0XHRcdHJldHVybiBtYXRjaC5zbGljZSggMCwgMyApO1xuXHRcdH1cblx0fSxcblxuXHRmaWx0ZXI6IHtcblxuXHRcdFRBRzogZnVuY3Rpb24oIG5vZGVOYW1lU2VsZWN0b3IgKSB7XG5cdFx0XHR2YXIgZXhwZWN0ZWROb2RlTmFtZSA9IG5vZGVOYW1lU2VsZWN0b3IucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gOlxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRyZXR1cm4gbm9kZU5hbWUoIGVsZW0sIGV4cGVjdGVkTm9kZU5hbWUgKTtcblx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0Q0xBU1M6IGZ1bmN0aW9uKCBjbGFzc05hbWUgKSB7XG5cdFx0XHR2YXIgcGF0dGVybiA9IGNsYXNzQ2FjaGVbIGNsYXNzTmFtZSArIFwiIFwiIF07XG5cblx0XHRcdHJldHVybiBwYXR0ZXJuIHx8XG5cdFx0XHRcdCggcGF0dGVybiA9IG5ldyBSZWdFeHAoIFwiKF58XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyBjbGFzc05hbWUgK1xuXHRcdFx0XHRcdFwiKFwiICsgd2hpdGVzcGFjZSArIFwifCQpXCIgKSApICYmXG5cdFx0XHRcdGNsYXNzQ2FjaGUoIGNsYXNzTmFtZSwgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhdHRlcm4udGVzdChcblx0XHRcdFx0XHRcdHR5cGVvZiBlbGVtLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtLmNsYXNzTmFtZSB8fFxuXHRcdFx0XHRcdFx0XHR0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgIT09IFwidW5kZWZpbmVkXCIgJiZcblx0XHRcdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZSggXCJjbGFzc1wiICkgfHxcblx0XHRcdFx0XHRcdFx0XCJcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0QVRUUjogZnVuY3Rpb24oIG5hbWUsIG9wZXJhdG9yLCBjaGVjayApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IGZpbmQuYXR0ciggZWxlbSwgbmFtZSApO1xuXG5cdFx0XHRcdGlmICggcmVzdWx0ID09IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9wZXJhdG9yID09PSBcIiE9XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCAhb3BlcmF0b3IgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHQgKz0gXCJcIjtcblxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIj1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBjaGVjaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIiE9XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdCAhPT0gY2hlY2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCJePVwiICkge1xuXHRcdFx0XHRcdHJldHVybiBjaGVjayAmJiByZXN1bHQuaW5kZXhPZiggY2hlY2sgKSA9PT0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIio9XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID4gLTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCIkPVwiICkge1xuXHRcdFx0XHRcdHJldHVybiBjaGVjayAmJiByZXN1bHQuc2xpY2UoIC1jaGVjay5sZW5ndGggKSA9PT0gY2hlY2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCJ+PVwiICkge1xuXHRcdFx0XHRcdHJldHVybiAoIFwiIFwiICsgcmVzdWx0LnJlcGxhY2UoIHJ3aGl0ZXNwYWNlLCBcIiBcIiApICsgXCIgXCIgKVxuXHRcdFx0XHRcdFx0LmluZGV4T2YoIGNoZWNrICkgPiAtMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcInw9XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gY2hlY2sgfHwgcmVzdWx0LnNsaWNlKCAwLCBjaGVjay5sZW5ndGggKyAxICkgPT09IGNoZWNrICsgXCItXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRDSElMRDogZnVuY3Rpb24oIHR5cGUsIHdoYXQsIF9hcmd1bWVudCwgZmlyc3QsIGxhc3QgKSB7XG5cdFx0XHR2YXIgc2ltcGxlID0gdHlwZS5zbGljZSggMCwgMyApICE9PSBcIm50aFwiLFxuXHRcdFx0XHRmb3J3YXJkID0gdHlwZS5zbGljZSggLTQgKSAhPT0gXCJsYXN0XCIsXG5cdFx0XHRcdG9mVHlwZSA9IHdoYXQgPT09IFwib2YtdHlwZVwiO1xuXG5cdFx0XHRyZXR1cm4gZmlyc3QgPT09IDEgJiYgbGFzdCA9PT0gMCA/XG5cblx0XHRcdFx0Ly8gU2hvcnRjdXQgZm9yIDpudGgtKihuKVxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRyZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdH0gOlxuXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBfY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBjYWNoZSwgb3V0ZXJDYWNoZSwgbm9kZSwgbm9kZUluZGV4LCBzdGFydCxcblx0XHRcdFx0XHRcdGRpciA9IHNpbXBsZSAhPT0gZm9yd2FyZCA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGUsXG5cdFx0XHRcdFx0XHRuYW1lID0gb2ZUeXBlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdHVzZUNhY2hlID0gIXhtbCAmJiAhb2ZUeXBlLFxuXHRcdFx0XHRcdFx0ZGlmZiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIDooZmlyc3R8bGFzdHxvbmx5KS0oY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0XHRcdGlmICggc2ltcGxlICkge1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIGRpciApIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbTtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoICggbm9kZSA9IG5vZGVbIGRpciBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIG9mVHlwZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGVOYW1lKCBub2RlLCBuYW1lICkgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBSZXZlcnNlIGRpcmVjdGlvbiBmb3IgOm9ubHktKiAoaWYgd2UgaGF2ZW4ndCB5ZXQgZG9uZSBzbylcblx0XHRcdFx0XHRcdFx0XHRzdGFydCA9IGRpciA9IHR5cGUgPT09IFwib25seVwiICYmICFzdGFydCAmJiBcIm5leHRTaWJsaW5nXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHN0YXJ0ID0gWyBmb3J3YXJkID8gcGFyZW50LmZpcnN0Q2hpbGQgOiBwYXJlbnQubGFzdENoaWxkIF07XG5cblx0XHRcdFx0XHRcdC8vIG5vbi14bWwgOm50aC1jaGlsZCguLi4pIHN0b3JlcyBjYWNoZSBkYXRhIG9uIGBwYXJlbnRgXG5cdFx0XHRcdFx0XHRpZiAoIGZvcndhcmQgJiYgdXNlQ2FjaGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU2VlayBgZWxlbWAgZnJvbSBhIHByZXZpb3VzbHktY2FjaGVkIGluZGV4XG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBwYXJlbnRbIGV4cGFuZG8gXSB8fCAoIHBhcmVudFsgZXhwYW5kbyBdID0ge30gKTtcblx0XHRcdFx0XHRcdFx0Y2FjaGUgPSBvdXRlckNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdG5vZGVJbmRleCA9IGNhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbIDEgXTtcblx0XHRcdFx0XHRcdFx0ZGlmZiA9IG5vZGVJbmRleCAmJiBjYWNoZVsgMiBdO1xuXHRcdFx0XHRcdFx0XHRub2RlID0gbm9kZUluZGV4ICYmIHBhcmVudC5jaGlsZE5vZGVzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoICggbm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVsgZGlyIF0gfHxcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIHNlZWtpbmcgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0KCBkaWZmID0gbm9kZUluZGV4ID0gMCApIHx8IHN0YXJ0LnBvcCgpICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBXaGVuIGZvdW5kLCBjYWNoZSBpbmRleGVzIG9uIGBwYXJlbnRgIGFuZCBicmVha1xuXHRcdFx0XHRcdFx0XHRcdGlmICggbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiArK2RpZmYgJiYgbm9kZSA9PT0gZWxlbSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgbm9kZUluZGV4LCBkaWZmIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBVc2UgcHJldmlvdXNseS1jYWNoZWQgZWxlbWVudCBpbmRleCBpZiBhdmFpbGFibGVcblx0XHRcdFx0XHRcdFx0aWYgKCB1c2VDYWNoZSApIHtcblx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gZWxlbVsgZXhwYW5kbyBdIHx8ICggZWxlbVsgZXhwYW5kbyBdID0ge30gKTtcblx0XHRcdFx0XHRcdFx0XHRjYWNoZSA9IG91dGVyQ2FjaGVbIHR5cGUgXSB8fCBbXTtcblx0XHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdFx0ZGlmZiA9IG5vZGVJbmRleDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIHhtbCA6bnRoLWNoaWxkKC4uLilcblx0XHRcdFx0XHRcdFx0Ly8gb3IgOm50aC1sYXN0LWNoaWxkKC4uLikgb3IgOm50aCgtbGFzdCk/LW9mLXR5cGUoLi4uKVxuXHRcdFx0XHRcdFx0XHRpZiAoIGRpZmYgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gVXNlIHRoZSBzYW1lIGxvb3AgYXMgYWJvdmUgdG8gc2VlayBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoICggbm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVsgZGlyIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdCggZGlmZiA9IG5vZGVJbmRleCA9IDAgKSB8fCBzdGFydC5wb3AoKSApICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZU5hbWUoIG5vZGUsIG5hbWUgKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZVR5cGUgPT09IDEgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQrK2RpZmYgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2FjaGUgdGhlIGluZGV4IG9mIGVhY2ggZW5jb3VudGVyZWQgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCggbm9kZVsgZXhwYW5kbyBdID0ge30gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggbm9kZSA9PT0gZWxlbSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJbmNvcnBvcmF0ZSB0aGUgb2Zmc2V0LCB0aGVuIGNoZWNrIGFnYWluc3QgY3ljbGUgc2l6ZVxuXHRcdFx0XHRcdFx0ZGlmZiAtPSBsYXN0O1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8ICggZGlmZiAlIGZpcnN0ID09PSAwICYmIGRpZmYgLyBmaXJzdCA+PSAwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRQU0VVRE86IGZ1bmN0aW9uKCBwc2V1ZG8sIGFyZ3VtZW50ICkge1xuXG5cdFx0XHQvLyBwc2V1ZG8tY2xhc3MgbmFtZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmVcblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI3BzZXVkby1jbGFzc2VzXG5cdFx0XHQvLyBQcmlvcml0aXplIGJ5IGNhc2Ugc2Vuc2l0aXZpdHkgaW4gY2FzZSBjdXN0b20gcHNldWRvcyBhcmUgYWRkZWQgd2l0aCB1cHBlcmNhc2UgbGV0dGVyc1xuXHRcdFx0Ly8gUmVtZW1iZXIgdGhhdCBzZXRGaWx0ZXJzIGluaGVyaXRzIGZyb20gcHNldWRvc1xuXHRcdFx0dmFyIGFyZ3MsXG5cdFx0XHRcdGZuID0gRXhwci5wc2V1ZG9zWyBwc2V1ZG8gXSB8fCBFeHByLnNldEZpbHRlcnNbIHBzZXVkby50b0xvd2VyQ2FzZSgpIF0gfHxcblx0XHRcdFx0XHRmaW5kLmVycm9yKCBcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIgKyBwc2V1ZG8gKTtcblxuXHRcdFx0Ly8gVGhlIHVzZXIgbWF5IHVzZSBjcmVhdGVQc2V1ZG8gdG8gaW5kaWNhdGUgdGhhdFxuXHRcdFx0Ly8gYXJndW1lbnRzIGFyZSBuZWVkZWQgdG8gY3JlYXRlIHRoZSBmaWx0ZXIgZnVuY3Rpb25cblx0XHRcdC8vIGp1c3QgYXMgalF1ZXJ5IGRvZXNcblx0XHRcdGlmICggZm5bIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0cmV0dXJuIGZuKCBhcmd1bWVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBCdXQgbWFpbnRhaW4gc3VwcG9ydCBmb3Igb2xkIHNpZ25hdHVyZXNcblx0XHRcdGlmICggZm4ubGVuZ3RoID4gMSApIHtcblx0XHRcdFx0YXJncyA9IFsgcHNldWRvLCBwc2V1ZG8sIFwiXCIsIGFyZ3VtZW50IF07XG5cdFx0XHRcdHJldHVybiBFeHByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoIHBzZXVkby50b0xvd2VyQ2FzZSgpICkgP1xuXHRcdFx0XHRcdG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHRcdFx0XHR2YXIgaWR4LFxuXHRcdFx0XHRcdFx0XHRtYXRjaGVkID0gZm4oIHNlZWQsIGFyZ3VtZW50ICksXG5cdFx0XHRcdFx0XHRcdGkgPSBtYXRjaGVkLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0XHRpZHggPSBpbmRleE9mLmNhbGwoIHNlZWQsIG1hdGNoZWRbIGkgXSApO1xuXHRcdFx0XHRcdFx0XHRzZWVkWyBpZHggXSA9ICEoIG1hdGNoZXNbIGlkeCBdID0gbWF0Y2hlZFsgaSBdICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApIDpcblx0XHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRcdHJldHVybiBmbiggZWxlbSwgMCwgYXJncyApO1xuXHRcdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbjtcblx0XHR9XG5cdH0sXG5cblx0cHNldWRvczoge1xuXG5cdFx0Ly8gUG90ZW50aWFsbHkgY29tcGxleCBwc2V1ZG9zXG5cdFx0bm90OiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblxuXHRcdFx0Ly8gVHJpbSB0aGUgc2VsZWN0b3IgcGFzc2VkIHRvIGNvbXBpbGVcblx0XHRcdC8vIHRvIGF2b2lkIHRyZWF0aW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nXG5cdFx0XHQvLyBzcGFjZXMgYXMgY29tYmluYXRvcnNcblx0XHRcdHZhciBpbnB1dCA9IFtdLFxuXHRcdFx0XHRyZXN1bHRzID0gW10sXG5cdFx0XHRcdG1hdGNoZXIgPSBjb21waWxlKCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbUNTUywgXCIkMVwiICkgKTtcblxuXHRcdFx0cmV0dXJuIG1hdGNoZXJbIGV4cGFuZG8gXSA/XG5cdFx0XHRcdG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMsIF9jb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQgPSBtYXRjaGVyKCBzZWVkLCBudWxsLCB4bWwsIFtdICksXG5cdFx0XHRcdFx0XHRpID0gc2VlZC5sZW5ndGg7XG5cblx0XHRcdFx0XHQvLyBNYXRjaCBlbGVtZW50cyB1bm1hdGNoZWQgYnkgYG1hdGNoZXJgXG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZWxlbSA9IHVubWF0Y2hlZFsgaSBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdHNlZWRbIGkgXSA9ICEoIG1hdGNoZXNbIGkgXSA9IGVsZW0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBfY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdGlucHV0WyAwIF0gPSBlbGVtO1xuXHRcdFx0XHRcdG1hdGNoZXIoIGlucHV0LCBudWxsLCB4bWwsIHJlc3VsdHMgKTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGtlZXAgdGhlIGVsZW1lbnRcblx0XHRcdFx0XHQvLyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL2lzc3Vlcy8yOTkpXG5cdFx0XHRcdFx0aW5wdXRbIDAgXSA9IG51bGw7XG5cdFx0XHRcdFx0cmV0dXJuICFyZXN1bHRzLnBvcCgpO1xuXHRcdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdGhhczogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBmaW5kKCBzZWxlY3RvciwgZWxlbSApLmxlbmd0aCA+IDA7XG5cdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdGNvbnRhaW5zOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuICggZWxlbS50ZXh0Q29udGVudCB8fCBqUXVlcnkudGV4dCggZWxlbSApICkuaW5kZXhPZiggdGV4dCApID4gLTE7XG5cdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdC8vIFwiV2hldGhlciBhbiBlbGVtZW50IGlzIHJlcHJlc2VudGVkIGJ5IGEgOmxhbmcoKSBzZWxlY3RvclxuXHRcdC8vIGlzIGJhc2VkIHNvbGVseSBvbiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlXG5cdFx0Ly8gYmVpbmcgZXF1YWwgdG8gdGhlIGlkZW50aWZpZXIgQyxcblx0XHQvLyBvciBiZWdpbm5pbmcgd2l0aCB0aGUgaWRlbnRpZmllciBDIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IFwiLVwiLlxuXHRcdC8vIFRoZSBtYXRjaGluZyBvZiBDIGFnYWluc3QgdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZSBpcyBwZXJmb3JtZWQgY2FzZS1pbnNlbnNpdGl2ZWx5LlxuXHRcdC8vIFRoZSBpZGVudGlmaWVyIEMgZG9lcyBub3QgaGF2ZSB0byBiZSBhIHZhbGlkIGxhbmd1YWdlIG5hbWUuXCJcblx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNsYW5nLXBzZXVkb1xuXHRcdGxhbmc6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIGxhbmcgKSB7XG5cblx0XHRcdC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcblx0XHRcdGlmICggIXJpZGVudGlmaWVyLnRlc3QoIGxhbmcgfHwgXCJcIiApICkge1xuXHRcdFx0XHRmaW5kLmVycm9yKCBcInVuc3VwcG9ydGVkIGxhbmc6IFwiICsgbGFuZyApO1xuXHRcdFx0fVxuXHRcdFx0bGFuZyA9IGxhbmcucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgZWxlbUxhbmc7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRpZiAoICggZWxlbUxhbmcgPSBkb2N1bWVudElzSFRNTCA/XG5cdFx0XHRcdFx0XHRlbGVtLmxhbmcgOlxuXHRcdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoIFwieG1sOmxhbmdcIiApIHx8IGVsZW0uZ2V0QXR0cmlidXRlKCBcImxhbmdcIiApICkgKSB7XG5cblx0XHRcdFx0XHRcdGVsZW1MYW5nID0gZWxlbUxhbmcudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKCBsYW5nICsgXCItXCIgKSA9PT0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKCAoIGVsZW0gPSBlbGVtLnBhcmVudE5vZGUgKSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cdFx0fSApLFxuXG5cdFx0Ly8gTWlzY2VsbGFuZW91c1xuXHRcdHRhcmdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHRcdHJldHVybiBoYXNoICYmIGhhc2guc2xpY2UoIDEgKSA9PT0gZWxlbS5pZDtcblx0XHR9LFxuXG5cdFx0cm9vdDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnRFbGVtZW50O1xuXHRcdH0sXG5cblx0XHRmb2N1czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSAmJlxuXHRcdFx0XHRkb2N1bWVudC5oYXNGb2N1cygpICYmXG5cdFx0XHRcdCEhKCBlbGVtLnR5cGUgfHwgZWxlbS5ocmVmIHx8IH5lbGVtLnRhYkluZGV4ICk7XG5cdFx0fSxcblxuXHRcdC8vIEJvb2xlYW4gcHJvcGVydGllc1xuXHRcdGVuYWJsZWQ6IGNyZWF0ZURpc2FibGVkUHNldWRvKCBmYWxzZSApLFxuXHRcdGRpc2FibGVkOiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggdHJ1ZSApLFxuXG5cdFx0Y2hlY2tlZDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8vIEluIENTUzMsIDpjaGVja2VkIHNob3VsZCByZXR1cm4gYm90aCBjaGVja2VkIGFuZCBzZWxlY3RlZCBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG5cdFx0XHRyZXR1cm4gKCBub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgJiYgISFlbGVtLmNoZWNrZWQgKSB8fFxuXHRcdFx0XHQoIG5vZGVOYW1lKCBlbGVtLCBcIm9wdGlvblwiICkgJiYgISFlbGVtLnNlbGVjdGVkICk7XG5cdFx0fSxcblxuXHRcdHNlbGVjdGVkOiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMStcblx0XHRcdC8vIEFjY2Vzc2luZyB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eVxuXHRcdFx0Ly8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHRyZWF0IHRoZSBkZWZhdWx0IG9wdGlvbiBhc1xuXHRcdFx0Ly8gc2VsZWN0ZWQgd2hlbiBpbiBhbiBvcHRncm91cC5cblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0XHRcdGVsZW0ucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbS5zZWxlY3RlZCA9PT0gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0Ly8gQ29udGVudHNcblx0XHRlbXB0eTogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2VtcHR5LXBzZXVkb1xuXHRcdFx0Ly8gOmVtcHR5IGlzIG5lZ2F0ZWQgYnkgZWxlbWVudCAoMSkgb3IgY29udGVudCBub2RlcyAodGV4dDogMzsgY2RhdGE6IDQ7IGVudGl0eSByZWY6IDUpLFxuXHRcdFx0Ly8gICBidXQgbm90IGJ5IG90aGVycyAoY29tbWVudDogODsgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbjogNzsgZXRjLilcblx0XHRcdC8vIG5vZGVUeXBlIDwgNiB3b3JrcyBiZWNhdXNlIGF0dHJpYnV0ZXMgKDIpIGRvIG5vdCBhcHBlYXIgYXMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPCA2ICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdHBhcmVudDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gIUV4cHIucHNldWRvcy5lbXB0eSggZWxlbSApO1xuXHRcdH0sXG5cblx0XHQvLyBFbGVtZW50L2lucHV0IHR5cGVzXG5cdFx0aGVhZGVyOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaGVhZGVyLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0aW5wdXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIHJpbnB1dHMudGVzdCggZWxlbS5ub2RlTmFtZSApO1xuXHRcdH0sXG5cblx0XHRidXR0b246IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSAmJiBlbGVtLnR5cGUgPT09IFwiYnV0dG9uXCIgfHxcblx0XHRcdFx0bm9kZU5hbWUoIGVsZW0sIFwiYnV0dG9uXCIgKTtcblx0XHR9LFxuXG5cdFx0dGV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgYXR0cjtcblx0XHRcdHJldHVybiBub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgJiYgZWxlbS50eXBlID09PSBcInRleHRcIiAmJlxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDwxMCBvbmx5XG5cdFx0XHRcdC8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXJcblx0XHRcdFx0Ly8gd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXG5cdFx0XHRcdCggKCBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICkgKSA9PSBudWxsIHx8XG5cdFx0XHRcdFx0YXR0ci50b0xvd2VyQ2FzZSgpID09PSBcInRleHRcIiApO1xuXHRcdH0sXG5cblx0XHQvLyBQb3NpdGlvbi1pbi1jb2xsZWN0aW9uXG5cdFx0Zmlyc3Q6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIFsgMCBdO1xuXHRcdH0gKSxcblxuXHRcdGxhc3Q6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZ1bmN0aW9uKCBfbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gWyBsZW5ndGggLSAxIF07XG5cdFx0fSApLFxuXG5cdFx0ZXE6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZ1bmN0aW9uKCBfbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0cmV0dXJuIFsgYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudCBdO1xuXHRcdH0gKSxcblxuXHRcdGV2ZW46IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSArPSAyICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9ICksXG5cblx0XHRvZGQ6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHZhciBpID0gMTtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSArPSAyICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9ICksXG5cblx0XHRsdDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHZhciBpO1xuXG5cdFx0XHRpZiAoIGFyZ3VtZW50IDwgMCApIHtcblx0XHRcdFx0aSA9IGFyZ3VtZW50ICsgbGVuZ3RoO1xuXHRcdFx0fSBlbHNlIGlmICggYXJndW1lbnQgPiBsZW5ndGggKSB7XG5cdFx0XHRcdGkgPSBsZW5ndGg7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpID0gYXJndW1lbnQ7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIDsgLS1pID49IDA7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9ICksXG5cblx0XHRndDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHZhciBpID0gYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudDtcblx0XHRcdGZvciAoIDsgKytpIDwgbGVuZ3RoOyApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSApXG5cdH1cbn07XG5cbkV4cHIucHNldWRvcy5udGggPSBFeHByLnBzZXVkb3MuZXE7XG5cbi8vIEFkZCBidXR0b24vaW5wdXQgdHlwZSBwc2V1ZG9zXG5mb3IgKCBpIGluIHsgcmFkaW86IHRydWUsIGNoZWNrYm94OiB0cnVlLCBmaWxlOiB0cnVlLCBwYXNzd29yZDogdHJ1ZSwgaW1hZ2U6IHRydWUgfSApIHtcblx0RXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVJbnB1dFBzZXVkbyggaSApO1xufVxuZm9yICggaSBpbiB7IHN1Ym1pdDogdHJ1ZSwgcmVzZXQ6IHRydWUgfSApIHtcblx0RXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVCdXR0b25Qc2V1ZG8oIGkgKTtcbn1cblxuLy8gRWFzeSBBUEkgZm9yIGNyZWF0aW5nIG5ldyBzZXRGaWx0ZXJzXG5mdW5jdGlvbiBzZXRGaWx0ZXJzKCkge31cbnNldEZpbHRlcnMucHJvdG90eXBlID0gRXhwci5maWx0ZXJzID0gRXhwci5wc2V1ZG9zO1xuRXhwci5zZXRGaWx0ZXJzID0gbmV3IHNldEZpbHRlcnMoKTtcblxuZnVuY3Rpb24gdG9rZW5pemUoIHNlbGVjdG9yLCBwYXJzZU9ubHkgKSB7XG5cdHZhciBtYXRjaGVkLCBtYXRjaCwgdG9rZW5zLCB0eXBlLFxuXHRcdHNvRmFyLCBncm91cHMsIHByZUZpbHRlcnMsXG5cdFx0Y2FjaGVkID0gdG9rZW5DYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdO1xuXG5cdGlmICggY2FjaGVkICkge1xuXHRcdHJldHVybiBwYXJzZU9ubHkgPyAwIDogY2FjaGVkLnNsaWNlKCAwICk7XG5cdH1cblxuXHRzb0ZhciA9IHNlbGVjdG9yO1xuXHRncm91cHMgPSBbXTtcblx0cHJlRmlsdGVycyA9IEV4cHIucHJlRmlsdGVyO1xuXG5cdHdoaWxlICggc29GYXIgKSB7XG5cblx0XHQvLyBDb21tYSBhbmQgZmlyc3QgcnVuXG5cdFx0aWYgKCAhbWF0Y2hlZCB8fCAoIG1hdGNoID0gcmNvbW1hLmV4ZWMoIHNvRmFyICkgKSApIHtcblx0XHRcdGlmICggbWF0Y2ggKSB7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgY29uc3VtZSB0cmFpbGluZyBjb21tYXMgYXMgdmFsaWRcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hbIDAgXS5sZW5ndGggKSB8fCBzb0Zhcjtcblx0XHRcdH1cblx0XHRcdGdyb3Vwcy5wdXNoKCAoIHRva2VucyA9IFtdICkgKTtcblx0XHR9XG5cblx0XHRtYXRjaGVkID0gZmFsc2U7XG5cblx0XHQvLyBDb21iaW5hdG9yc1xuXHRcdGlmICggKCBtYXRjaCA9IHJsZWFkaW5nQ29tYmluYXRvci5leGVjKCBzb0ZhciApICkgKSB7XG5cdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdHRva2Vucy5wdXNoKCB7XG5cdFx0XHRcdHZhbHVlOiBtYXRjaGVkLFxuXG5cdFx0XHRcdC8vIENhc3QgZGVzY2VuZGFudCBjb21iaW5hdG9ycyB0byBzcGFjZVxuXHRcdFx0XHR0eXBlOiBtYXRjaFsgMCBdLnJlcGxhY2UoIHJ0cmltQ1NTLCBcIiBcIiApXG5cdFx0XHR9ICk7XG5cdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdH1cblxuXHRcdC8vIEZpbHRlcnNcblx0XHRmb3IgKCB0eXBlIGluIEV4cHIuZmlsdGVyICkge1xuXHRcdFx0aWYgKCAoIG1hdGNoID0gbWF0Y2hFeHByWyB0eXBlIF0uZXhlYyggc29GYXIgKSApICYmICggIXByZUZpbHRlcnNbIHR5cGUgXSB8fFxuXHRcdFx0XHQoIG1hdGNoID0gcHJlRmlsdGVyc1sgdHlwZSBdKCBtYXRjaCApICkgKSApIHtcblx0XHRcdFx0bWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKCB7XG5cdFx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cdFx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0XHRtYXRjaGVzOiBtYXRjaFxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhbWF0Y2hlZCApIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBpbnZhbGlkIGV4Y2Vzc1xuXHQvLyBpZiB3ZSdyZSBqdXN0IHBhcnNpbmdcblx0Ly8gT3RoZXJ3aXNlLCB0aHJvdyBhbiBlcnJvciBvciByZXR1cm4gdG9rZW5zXG5cdGlmICggcGFyc2VPbmx5ICkge1xuXHRcdHJldHVybiBzb0Zhci5sZW5ndGg7XG5cdH1cblxuXHRyZXR1cm4gc29GYXIgP1xuXHRcdGZpbmQuZXJyb3IoIHNlbGVjdG9yICkgOlxuXG5cdFx0Ly8gQ2FjaGUgdGhlIHRva2Vuc1xuXHRcdHRva2VuQ2FjaGUoIHNlbGVjdG9yLCBncm91cHMgKS5zbGljZSggMCApO1xufVxuXG5mdW5jdGlvbiB0b1NlbGVjdG9yKCB0b2tlbnMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdHNlbGVjdG9yID0gXCJcIjtcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0c2VsZWN0b3IgKz0gdG9rZW5zWyBpIF0udmFsdWU7XG5cdH1cblx0cmV0dXJuIHNlbGVjdG9yO1xufVxuXG5mdW5jdGlvbiBhZGRDb21iaW5hdG9yKCBtYXRjaGVyLCBjb21iaW5hdG9yLCBiYXNlICkge1xuXHR2YXIgZGlyID0gY29tYmluYXRvci5kaXIsXG5cdFx0c2tpcCA9IGNvbWJpbmF0b3IubmV4dCxcblx0XHRrZXkgPSBza2lwIHx8IGRpcixcblx0XHRjaGVja05vbkVsZW1lbnRzID0gYmFzZSAmJiBrZXkgPT09IFwicGFyZW50Tm9kZVwiLFxuXHRcdGRvbmVOYW1lID0gZG9uZSsrO1xuXG5cdHJldHVybiBjb21iaW5hdG9yLmZpcnN0ID9cblxuXHRcdC8vIENoZWNrIGFnYWluc3QgY2xvc2VzdCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudFxuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgKSB7XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzICkge1xuXHRcdFx0XHRcdHJldHVybiBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gOlxuXG5cdFx0Ly8gQ2hlY2sgYWdhaW5zdCBhbGwgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRzXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHZhciBvbGRDYWNoZSwgb3V0ZXJDYWNoZSxcblx0XHRcdFx0bmV3Q2FjaGUgPSBbIGRpcnJ1bnMsIGRvbmVOYW1lIF07XG5cblx0XHRcdC8vIFdlIGNhbid0IHNldCBhcmJpdHJhcnkgZGF0YSBvbiBYTUwgbm9kZXMsIHNvIHRoZXkgZG9uJ3QgYmVuZWZpdCBmcm9tIGNvbWJpbmF0b3IgY2FjaGluZ1xuXHRcdFx0aWYgKCB4bWwgKSB7XG5cdFx0XHRcdHdoaWxlICggKCBlbGVtID0gZWxlbVsgZGlyIF0gKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICkge1xuXHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzICkge1xuXHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IGVsZW1bIGV4cGFuZG8gXSB8fCAoIGVsZW1bIGV4cGFuZG8gXSA9IHt9ICk7XG5cblx0XHRcdFx0XHRcdGlmICggc2tpcCAmJiBub2RlTmFtZSggZWxlbSwgc2tpcCApICkge1xuXHRcdFx0XHRcdFx0XHRlbGVtID0gZWxlbVsgZGlyIF0gfHwgZWxlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoICggb2xkQ2FjaGUgPSBvdXRlckNhY2hlWyBrZXkgXSApICYmXG5cdFx0XHRcdFx0XHRcdG9sZENhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgb2xkQ2FjaGVbIDEgXSA9PT0gZG9uZU5hbWUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQXNzaWduIHRvIG5ld0NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0cmV0dXJuICggbmV3Q2FjaGVbIDIgXSA9IG9sZENhY2hlWyAyIF0gKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUmV1c2UgbmV3Y2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlWyBrZXkgXSA9IG5ld0NhY2hlO1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuXHRcdFx0XHRcdFx0XHRpZiAoICggbmV3Q2FjaGVbIDIgXSA9IG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSB7XG5cdHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID9cblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIGkgPSBtYXRjaGVycy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAhbWF0Y2hlcnNbIGkgXSggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IDpcblx0XHRtYXRjaGVyc1sgMCBdO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBsZUNvbnRleHRzKCBzZWxlY3RvciwgY29udGV4dHMsIHJlc3VsdHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdGZpbmQoIHNlbGVjdG9yLCBjb250ZXh0c1sgaSBdLCByZXN1bHRzICk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGNvbmRlbnNlKCB1bm1hdGNoZWQsIG1hcCwgZmlsdGVyLCBjb250ZXh0LCB4bWwgKSB7XG5cdHZhciBlbGVtLFxuXHRcdG5ld1VubWF0Y2hlZCA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGxlbiA9IHVubWF0Y2hlZC5sZW5ndGgsXG5cdFx0bWFwcGVkID0gbWFwICE9IG51bGw7XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAoIGVsZW0gPSB1bm1hdGNoZWRbIGkgXSApICkge1xuXHRcdFx0aWYgKCAhZmlsdGVyIHx8IGZpbHRlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdG5ld1VubWF0Y2hlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdGlmICggbWFwcGVkICkge1xuXHRcdFx0XHRcdG1hcC5wdXNoKCBpICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbmV3VW5tYXRjaGVkO1xufVxuXG5mdW5jdGlvbiBzZXRNYXRjaGVyKCBwcmVGaWx0ZXIsIHNlbGVjdG9yLCBtYXRjaGVyLCBwb3N0RmlsdGVyLCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKSB7XG5cdGlmICggcG9zdEZpbHRlciAmJiAhcG9zdEZpbHRlclsgZXhwYW5kbyBdICkge1xuXHRcdHBvc3RGaWx0ZXIgPSBzZXRNYXRjaGVyKCBwb3N0RmlsdGVyICk7XG5cdH1cblx0aWYgKCBwb3N0RmluZGVyICYmICFwb3N0RmluZGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0cG9zdEZpbmRlciA9IHNldE1hdGNoZXIoIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3RvciApO1xuXHR9XG5cdHJldHVybiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBzZWVkLCByZXN1bHRzLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0dmFyIHRlbXAsIGksIGVsZW0sIG1hdGNoZXJPdXQsXG5cdFx0XHRwcmVNYXAgPSBbXSxcblx0XHRcdHBvc3RNYXAgPSBbXSxcblx0XHRcdHByZWV4aXN0aW5nID0gcmVzdWx0cy5sZW5ndGgsXG5cblx0XHRcdC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG5cdFx0XHRlbGVtcyA9IHNlZWQgfHxcblx0XHRcdFx0bXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IgfHwgXCIqXCIsXG5cdFx0XHRcdFx0Y29udGV4dC5ub2RlVHlwZSA/IFsgY29udGV4dCBdIDogY29udGV4dCwgW10gKSxcblxuXHRcdFx0Ly8gUHJlZmlsdGVyIHRvIGdldCBtYXRjaGVyIGlucHV0LCBwcmVzZXJ2aW5nIGEgbWFwIGZvciBzZWVkLXJlc3VsdHMgc3luY2hyb25pemF0aW9uXG5cdFx0XHRtYXRjaGVySW4gPSBwcmVGaWx0ZXIgJiYgKCBzZWVkIHx8ICFzZWxlY3RvciApID9cblx0XHRcdFx0Y29uZGVuc2UoIGVsZW1zLCBwcmVNYXAsIHByZUZpbHRlciwgY29udGV4dCwgeG1sICkgOlxuXHRcdFx0XHRlbGVtcztcblxuXHRcdGlmICggbWF0Y2hlciApIHtcblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSBhIHBvc3RGaW5kZXIsIG9yIGZpbHRlcmVkIHNlZWQsIG9yIG5vbi1zZWVkIHBvc3RGaWx0ZXJcblx0XHRcdC8vIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXG5cdFx0XHRtYXRjaGVyT3V0ID0gcG9zdEZpbmRlciB8fCAoIHNlZWQgPyBwcmVGaWx0ZXIgOiBwcmVleGlzdGluZyB8fCBwb3N0RmlsdGVyICkgP1xuXG5cdFx0XHRcdC8vIC4uLmludGVybWVkaWF0ZSBwcm9jZXNzaW5nIGlzIG5lY2Vzc2FyeVxuXHRcdFx0XHRbXSA6XG5cblx0XHRcdFx0Ly8gLi4ub3RoZXJ3aXNlIHVzZSByZXN1bHRzIGRpcmVjdGx5XG5cdFx0XHRcdHJlc3VsdHM7XG5cblx0XHRcdC8vIEZpbmQgcHJpbWFyeSBtYXRjaGVzXG5cdFx0XHRtYXRjaGVyKCBtYXRjaGVySW4sIG1hdGNoZXJPdXQsIGNvbnRleHQsIHhtbCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXRjaGVyT3V0ID0gbWF0Y2hlckluO1xuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHBvc3RGaWx0ZXJcblx0XHRpZiAoIHBvc3RGaWx0ZXIgKSB7XG5cdFx0XHR0ZW1wID0gY29uZGVuc2UoIG1hdGNoZXJPdXQsIHBvc3RNYXAgKTtcblx0XHRcdHBvc3RGaWx0ZXIoIHRlbXAsIFtdLCBjb250ZXh0LCB4bWwgKTtcblxuXHRcdFx0Ly8gVW4tbWF0Y2ggZmFpbGluZyBlbGVtZW50cyBieSBtb3ZpbmcgdGhlbSBiYWNrIHRvIG1hdGNoZXJJblxuXHRcdFx0aSA9IHRlbXAubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggKCBlbGVtID0gdGVtcFsgaSBdICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlck91dFsgcG9zdE1hcFsgaSBdIF0gPSAhKCBtYXRjaGVySW5bIHBvc3RNYXBbIGkgXSBdID0gZWxlbSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0aWYgKCBwb3N0RmluZGVyIHx8IHByZUZpbHRlciApIHtcblx0XHRcdFx0aWYgKCBwb3N0RmluZGVyICkge1xuXG5cdFx0XHRcdFx0Ly8gR2V0IHRoZSBmaW5hbCBtYXRjaGVyT3V0IGJ5IGNvbmRlbnNpbmcgdGhpcyBpbnRlcm1lZGlhdGUgaW50byBwb3N0RmluZGVyIGNvbnRleHRzXG5cdFx0XHRcdFx0dGVtcCA9IFtdO1xuXHRcdFx0XHRcdGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGlmICggKCBlbGVtID0gbWF0Y2hlck91dFsgaSBdICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUmVzdG9yZSBtYXRjaGVySW4gc2luY2UgZWxlbSBpcyBub3QgeWV0IGEgZmluYWwgbWF0Y2hcblx0XHRcdFx0XHRcdFx0dGVtcC5wdXNoKCAoIG1hdGNoZXJJblsgaSBdID0gZWxlbSApICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsICggbWF0Y2hlck91dCA9IFtdICksIHRlbXAsIHhtbCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTW92ZSBtYXRjaGVkIGVsZW1lbnRzIGZyb20gc2VlZCB0byByZXN1bHRzIHRvIGtlZXAgdGhlbSBzeW5jaHJvbml6ZWRcblx0XHRcdFx0aSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRpZiAoICggZWxlbSA9IG1hdGNoZXJPdXRbIGkgXSApICYmXG5cdFx0XHRcdFx0XHQoIHRlbXAgPSBwb3N0RmluZGVyID8gaW5kZXhPZi5jYWxsKCBzZWVkLCBlbGVtICkgOiBwcmVNYXBbIGkgXSApID4gLTEgKSB7XG5cblx0XHRcdFx0XHRcdHNlZWRbIHRlbXAgXSA9ICEoIHJlc3VsdHNbIHRlbXAgXSA9IGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEFkZCBlbGVtZW50cyB0byByZXN1bHRzLCB0aHJvdWdoIHBvc3RGaW5kZXIgaWYgZGVmaW5lZFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXRjaGVyT3V0ID0gY29uZGVuc2UoXG5cdFx0XHRcdG1hdGNoZXJPdXQgPT09IHJlc3VsdHMgP1xuXHRcdFx0XHRcdG1hdGNoZXJPdXQuc3BsaWNlKCBwcmVleGlzdGluZywgbWF0Y2hlck91dC5sZW5ndGggKSA6XG5cdFx0XHRcdFx0bWF0Y2hlck91dFxuXHRcdFx0KTtcblx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgcmVzdWx0cywgbWF0Y2hlck91dCwgeG1sICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBtYXRjaGVyT3V0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMgKSB7XG5cdHZhciBjaGVja0NvbnRleHQsIG1hdGNoZXIsIGosXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlWyB0b2tlbnNbIDAgXS50eXBlIF0sXG5cdFx0aW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlWyBcIiBcIiBdLFxuXHRcdGkgPSBsZWFkaW5nUmVsYXRpdmUgPyAxIDogMCxcblxuXHRcdC8vIFRoZSBmb3VuZGF0aW9uYWwgbWF0Y2hlciBlbnN1cmVzIHRoYXQgZWxlbWVudHMgYXJlIHJlYWNoYWJsZSBmcm9tIHRvcC1sZXZlbCBjb250ZXh0KHMpXG5cdFx0bWF0Y2hDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gY2hlY2tDb250ZXh0O1xuXHRcdH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUgKSxcblx0XHRtYXRjaEFueUNvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBpbmRleE9mLmNhbGwoIGNoZWNrQ29udGV4dCwgZWxlbSApID4gLTE7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoZXJzID0gWyBmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0dmFyIHJldCA9ICggIWxlYWRpbmdSZWxhdGl2ZSAmJiAoIHhtbCB8fCBjb250ZXh0ICE9IG91dGVybW9zdENvbnRleHQgKSApIHx8IChcblx0XHRcdFx0KCBjaGVja0NvbnRleHQgPSBjb250ZXh0ICkubm9kZVR5cGUgP1xuXHRcdFx0XHRcdG1hdGNoQ29udGV4dCggZWxlbSwgY29udGV4dCwgeG1sICkgOlxuXHRcdFx0XHRcdG1hdGNoQW55Q29udGV4dCggZWxlbSwgY29udGV4dCwgeG1sICkgKTtcblxuXHRcdFx0Ly8gQXZvaWQgaGFuZ2luZyBvbnRvIGVsZW1lbnRcblx0XHRcdC8vIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvaXNzdWVzLzI5OSlcblx0XHRcdGNoZWNrQ29udGV4dCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gXTtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoICggbWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1sgaSBdLnR5cGUgXSApICkge1xuXHRcdFx0bWF0Y2hlcnMgPSBbIGFkZENvbWJpbmF0b3IoIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApLCBtYXRjaGVyICkgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlciA9IEV4cHIuZmlsdGVyWyB0b2tlbnNbIGkgXS50eXBlIF0uYXBwbHkoIG51bGwsIHRva2Vuc1sgaSBdLm1hdGNoZXMgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIHNwZWNpYWwgdXBvbiBzZWVpbmcgYSBwb3NpdGlvbmFsIG1hdGNoZXJcblx0XHRcdGlmICggbWF0Y2hlclsgZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuXHRcdFx0XHRqID0gKytpO1xuXHRcdFx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbIHRva2Vuc1sgaiBdLnR5cGUgXSApIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc2V0TWF0Y2hlcihcblx0XHRcdFx0XHRpID4gMSAmJiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSxcblx0XHRcdFx0XHRpID4gMSAmJiB0b1NlbGVjdG9yKFxuXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGUgcHJlY2VkaW5nIHRva2VuIHdhcyBhIGRlc2NlbmRhbnQgY29tYmluYXRvciwgaW5zZXJ0IGFuIGltcGxpY2l0IGFueS1lbGVtZW50IGAqYFxuXHRcdFx0XHRcdFx0dG9rZW5zLnNsaWNlKCAwLCBpIC0gMSApXG5cdFx0XHRcdFx0XHRcdC5jb25jYXQoIHsgdmFsdWU6IHRva2Vuc1sgaSAtIDIgXS50eXBlID09PSBcIiBcIiA/IFwiKlwiIDogXCJcIiB9IClcblx0XHRcdFx0XHQpLnJlcGxhY2UoIHJ0cmltQ1NTLCBcIiQxXCIgKSxcblx0XHRcdFx0XHRtYXRjaGVyLFxuXHRcdFx0XHRcdGkgPCBqICYmIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMuc2xpY2UoIGksIGogKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgbWF0Y2hlckZyb21Ub2tlbnMoICggdG9rZW5zID0gdG9rZW5zLnNsaWNlKCBqICkgKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgdG9TZWxlY3RvciggdG9rZW5zIClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdG1hdGNoZXJzLnB1c2goIG1hdGNoZXIgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApIHtcblx0dmFyIGJ5U2V0ID0gc2V0TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRieUVsZW1lbnQgPSBlbGVtZW50TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRzdXBlck1hdGNoZXIgPSBmdW5jdGlvbiggc2VlZCwgY29udGV4dCwgeG1sLCByZXN1bHRzLCBvdXRlcm1vc3QgKSB7XG5cdFx0XHR2YXIgZWxlbSwgaiwgbWF0Y2hlcixcblx0XHRcdFx0bWF0Y2hlZENvdW50ID0gMCxcblx0XHRcdFx0aSA9IFwiMFwiLFxuXHRcdFx0XHR1bm1hdGNoZWQgPSBzZWVkICYmIFtdLFxuXHRcdFx0XHRzZXRNYXRjaGVkID0gW10sXG5cdFx0XHRcdGNvbnRleHRCYWNrdXAgPSBvdXRlcm1vc3RDb250ZXh0LFxuXG5cdFx0XHRcdC8vIFdlIG11c3QgYWx3YXlzIGhhdmUgZWl0aGVyIHNlZWQgZWxlbWVudHMgb3Igb3V0ZXJtb3N0IGNvbnRleHRcblx0XHRcdFx0ZWxlbXMgPSBzZWVkIHx8IGJ5RWxlbWVudCAmJiBFeHByLmZpbmQuVEFHKCBcIipcIiwgb3V0ZXJtb3N0ICksXG5cblx0XHRcdFx0Ly8gVXNlIGludGVnZXIgZGlycnVucyBpZmYgdGhpcyBpcyB0aGUgb3V0ZXJtb3N0IG1hdGNoZXJcblx0XHRcdFx0ZGlycnVuc1VuaXF1ZSA9ICggZGlycnVucyArPSBjb250ZXh0QmFja3VwID09IG51bGwgPyAxIDogTWF0aC5yYW5kb20oKSB8fCAwLjEgKSxcblx0XHRcdFx0bGVuID0gZWxlbXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dCA9PSBkb2N1bWVudCB8fCBjb250ZXh0IHx8IG91dGVybW9zdDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGVsZW1lbnRzIHBhc3NpbmcgZWxlbWVudE1hdGNoZXJzIGRpcmVjdGx5IHRvIHJlc3VsdHNcblx0XHRcdC8vIFN1cHBvcnQ6IGlPUyA8PTcgLSA5IG9ubHlcblx0XHRcdC8vIFRvbGVyYXRlIE5vZGVMaXN0IHByb3BlcnRpZXMgKElFOiBcImxlbmd0aFwiOyBTYWZhcmk6IDxudW1iZXI+KSBtYXRjaGluZ1xuXHRcdFx0Ly8gZWxlbWVudHMgYnkgaWQuIChzZWUgdHJhYy0xNDE0Milcblx0XHRcdGZvciAoIDsgaSAhPT0gbGVuICYmICggZWxlbSA9IGVsZW1zWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRcdGlmICggYnlFbGVtZW50ICYmIGVsZW0gKSB7XG5cdFx0XHRcdFx0aiA9IDA7XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0XHRcdGlmICggIWNvbnRleHQgJiYgZWxlbS5vd25lckRvY3VtZW50ICE9IGRvY3VtZW50ICkge1xuXHRcdFx0XHRcdFx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblx0XHRcdFx0XHRcdHhtbCA9ICFkb2N1bWVudElzSFRNTDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0d2hpbGUgKCAoIG1hdGNoZXIgPSBlbGVtZW50TWF0Y2hlcnNbIGorKyBdICkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQgfHwgZG9jdW1lbnQsIHhtbCApICkge1xuXHRcdFx0XHRcdFx0XHRwdXNoLmNhbGwoIHJlc3VsdHMsIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHJhY2sgdW5tYXRjaGVkIGVsZW1lbnRzIGZvciBzZXQgZmlsdGVyc1xuXHRcdFx0XHRpZiAoIGJ5U2V0ICkge1xuXG5cdFx0XHRcdFx0Ly8gVGhleSB3aWxsIGhhdmUgZ29uZSB0aHJvdWdoIGFsbCBwb3NzaWJsZSBtYXRjaGVyc1xuXHRcdFx0XHRcdGlmICggKCBlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSApICkge1xuXHRcdFx0XHRcdFx0bWF0Y2hlZENvdW50LS07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTGVuZ3RoZW4gdGhlIGFycmF5IGZvciBldmVyeSBlbGVtZW50LCBtYXRjaGVkIG9yIG5vdFxuXHRcdFx0XHRcdGlmICggc2VlZCApIHtcblx0XHRcdFx0XHRcdHVubWF0Y2hlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGBpYCBpcyBub3cgdGhlIGNvdW50IG9mIGVsZW1lbnRzIHZpc2l0ZWQgYWJvdmUsIGFuZCBhZGRpbmcgaXQgdG8gYG1hdGNoZWRDb3VudGBcblx0XHRcdC8vIG1ha2VzIHRoZSBsYXR0ZXIgbm9ubmVnYXRpdmUuXG5cdFx0XHRtYXRjaGVkQ291bnQgKz0gaTtcblxuXHRcdFx0Ly8gQXBwbHkgc2V0IGZpbHRlcnMgdG8gdW5tYXRjaGVkIGVsZW1lbnRzXG5cdFx0XHQvLyBOT1RFOiBUaGlzIGNhbiBiZSBza2lwcGVkIGlmIHRoZXJlIGFyZSBubyB1bm1hdGNoZWQgZWxlbWVudHMgKGkuZS4sIGBtYXRjaGVkQ291bnRgXG5cdFx0XHQvLyBlcXVhbHMgYGlgKSwgdW5sZXNzIHdlIGRpZG4ndCB2aXNpdCBfYW55XyBlbGVtZW50cyBpbiB0aGUgYWJvdmUgbG9vcCBiZWNhdXNlIHdlIGhhdmVcblx0XHRcdC8vIG5vIGVsZW1lbnQgbWF0Y2hlcnMgYW5kIG5vIHNlZWQuXG5cdFx0XHQvLyBJbmNyZW1lbnRpbmcgYW4gaW5pdGlhbGx5LXN0cmluZyBcIjBcIiBgaWAgYWxsb3dzIGBpYCB0byByZW1haW4gYSBzdHJpbmcgb25seSBpbiB0aGF0XG5cdFx0XHQvLyBjYXNlLCB3aGljaCB3aWxsIHJlc3VsdCBpbiBhIFwiMDBcIiBgbWF0Y2hlZENvdW50YCB0aGF0IGRpZmZlcnMgZnJvbSBgaWAgYnV0IGlzIGFsc29cblx0XHRcdC8vIG51bWVyaWNhbGx5IHplcm8uXG5cdFx0XHRpZiAoIGJ5U2V0ICYmIGkgIT09IG1hdGNoZWRDb3VudCApIHtcblx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdHdoaWxlICggKCBtYXRjaGVyID0gc2V0TWF0Y2hlcnNbIGorKyBdICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlciggdW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggc2VlZCApIHtcblxuXHRcdFx0XHRcdC8vIFJlaW50ZWdyYXRlIGVsZW1lbnQgbWF0Y2hlcyB0byBlbGltaW5hdGUgdGhlIG5lZWQgZm9yIHNvcnRpbmdcblx0XHRcdFx0XHRpZiAoIG1hdGNoZWRDb3VudCA+IDAgKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCAhKCB1bm1hdGNoZWRbIGkgXSB8fCBzZXRNYXRjaGVkWyBpIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRNYXRjaGVkWyBpIF0gPSBwb3AuY2FsbCggcmVzdWx0cyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRGlzY2FyZCBpbmRleCBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gZ2V0IG9ubHkgYWN0dWFsIG1hdGNoZXNcblx0XHRcdFx0XHRzZXRNYXRjaGVkID0gY29uZGVuc2UoIHNldE1hdGNoZWQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCBtYXRjaGVzIHRvIHJlc3VsdHNcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2V0TWF0Y2hlZCApO1xuXG5cdFx0XHRcdC8vIFNlZWRsZXNzIHNldCBtYXRjaGVzIHN1Y2NlZWRpbmcgbXVsdGlwbGUgc3VjY2Vzc2Z1bCBtYXRjaGVycyBzdGlwdWxhdGUgc29ydGluZ1xuXHRcdFx0XHRpZiAoIG91dGVybW9zdCAmJiAhc2VlZCAmJiBzZXRNYXRjaGVkLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHQoIG1hdGNoZWRDb3VudCArIHNldE1hdGNoZXJzLmxlbmd0aCApID4gMSApIHtcblxuXHRcdFx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KCByZXN1bHRzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gT3ZlcnJpZGUgbWFuaXB1bGF0aW9uIG9mIGdsb2JhbHMgYnkgbmVzdGVkIG1hdGNoZXJzXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0QmFja3VwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdW5tYXRjaGVkO1xuXHRcdH07XG5cblx0cmV0dXJuIGJ5U2V0ID9cblx0XHRtYXJrRnVuY3Rpb24oIHN1cGVyTWF0Y2hlciApIDpcblx0XHRzdXBlck1hdGNoZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGUoIHNlbGVjdG9yLCBtYXRjaCAvKiBJbnRlcm5hbCBVc2UgT25seSAqLyApIHtcblx0dmFyIGksXG5cdFx0c2V0TWF0Y2hlcnMgPSBbXSxcblx0XHRlbGVtZW50TWF0Y2hlcnMgPSBbXSxcblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCAhY2FjaGVkICkge1xuXG5cdFx0Ly8gR2VuZXJhdGUgYSBmdW5jdGlvbiBvZiByZWN1cnNpdmUgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2hlY2sgZWFjaCBlbGVtZW50XG5cdFx0aWYgKCAhbWF0Y2ggKSB7XG5cdFx0XHRtYXRjaCA9IHRva2VuaXplKCBzZWxlY3RvciApO1xuXHRcdH1cblx0XHRpID0gbWF0Y2gubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0Y2FjaGVkID0gbWF0Y2hlckZyb21Ub2tlbnMoIG1hdGNoWyBpIF0gKTtcblx0XHRcdGlmICggY2FjaGVkWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdHNldE1hdGNoZXJzLnB1c2goIGNhY2hlZCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudE1hdGNoZXJzLnB1c2goIGNhY2hlZCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhY2hlIHRoZSBjb21waWxlZCBmdW5jdGlvblxuXHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGUoIHNlbGVjdG9yLFxuXHRcdFx0bWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKCBlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzICkgKTtcblxuXHRcdC8vIFNhdmUgc2VsZWN0b3IgYW5kIHRva2VuaXphdGlvblxuXHRcdGNhY2hlZC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXHR9XG5cdHJldHVybiBjYWNoZWQ7XG59XG5cbi8qKlxuICogQSBsb3ctbGV2ZWwgc2VsZWN0aW9uIGZ1bmN0aW9uIHRoYXQgd29ya3Mgd2l0aCBqUXVlcnkncyBjb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yIEEgc2VsZWN0b3Igb3IgYSBwcmUtY29tcGlsZWRcbiAqICBzZWxlY3RvciBmdW5jdGlvbiBidWlsdCB3aXRoIGpRdWVyeSBzZWxlY3RvciBjb21waWxlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHRzXVxuICogQHBhcmFtIHtBcnJheX0gW3NlZWRdIEEgc2V0IG9mIGVsZW1lbnRzIHRvIG1hdGNoIGFnYWluc3RcbiAqL1xuZnVuY3Rpb24gc2VsZWN0KCBzZWxlY3RvciwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApIHtcblx0dmFyIGksIHRva2VucywgdG9rZW4sIHR5cGUsIGZpbmQsXG5cdFx0Y29tcGlsZWQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBzZWxlY3Rvcixcblx0XHRtYXRjaCA9ICFzZWVkICYmIHRva2VuaXplKCAoIHNlbGVjdG9yID0gY29tcGlsZWQuc2VsZWN0b3IgfHwgc2VsZWN0b3IgKSApO1xuXG5cdHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG5cdC8vIFRyeSB0byBtaW5pbWl6ZSBvcGVyYXRpb25zIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNlbGVjdG9yIGluIHRoZSBsaXN0IGFuZCBubyBzZWVkXG5cdC8vICh0aGUgbGF0dGVyIG9mIHdoaWNoIGd1YXJhbnRlZXMgdXMgY29udGV4dClcblx0aWYgKCBtYXRjaC5sZW5ndGggPT09IDEgKSB7XG5cblx0XHQvLyBSZWR1Y2UgY29udGV4dCBpZiB0aGUgbGVhZGluZyBjb21wb3VuZCBzZWxlY3RvciBpcyBhbiBJRFxuXHRcdHRva2VucyA9IG1hdGNoWyAwIF0gPSBtYXRjaFsgMCBdLnNsaWNlKCAwICk7XG5cdFx0aWYgKCB0b2tlbnMubGVuZ3RoID4gMiAmJiAoIHRva2VuID0gdG9rZW5zWyAwIF0gKS50eXBlID09PSBcIklEXCIgJiZcblx0XHRcdFx0Y29udGV4dC5ub2RlVHlwZSA9PT0gOSAmJiBkb2N1bWVudElzSFRNTCAmJiBFeHByLnJlbGF0aXZlWyB0b2tlbnNbIDEgXS50eXBlIF0gKSB7XG5cblx0XHRcdGNvbnRleHQgPSAoIEV4cHIuZmluZC5JRChcblx0XHRcdFx0dG9rZW4ubWF0Y2hlc1sgMCBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICksXG5cdFx0XHRcdGNvbnRleHRcblx0XHRcdCkgfHwgW10gKVsgMCBdO1xuXHRcdFx0aWYgKCAhY29udGV4dCApIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdC8vIFByZWNvbXBpbGVkIG1hdGNoZXJzIHdpbGwgc3RpbGwgdmVyaWZ5IGFuY2VzdHJ5LCBzbyBzdGVwIHVwIGEgbGV2ZWxcblx0XHRcdH0gZWxzZSBpZiAoIGNvbXBpbGVkICkge1xuXHRcdFx0XHRjb250ZXh0ID0gY29udGV4dC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKCB0b2tlbnMuc2hpZnQoKS52YWx1ZS5sZW5ndGggKTtcblx0XHR9XG5cblx0XHQvLyBGZXRjaCBhIHNlZWQgc2V0IGZvciByaWdodC10by1sZWZ0IG1hdGNoaW5nXG5cdFx0aSA9IG1hdGNoRXhwci5uZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSA/IDAgOiB0b2tlbnMubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG9rZW4gPSB0b2tlbnNbIGkgXTtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgd2UgaGl0IGEgY29tYmluYXRvclxuXHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyAoIHR5cGUgPSB0b2tlbi50eXBlICkgXSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICggZmluZCA9IEV4cHIuZmluZFsgdHlwZSBdICkgKSB7XG5cblx0XHRcdFx0Ly8gU2VhcmNoLCBleHBhbmRpbmcgY29udGV4dCBmb3IgbGVhZGluZyBzaWJsaW5nIGNvbWJpbmF0b3JzXG5cdFx0XHRcdGlmICggKCBzZWVkID0gZmluZChcblx0XHRcdFx0XHR0b2tlbi5tYXRjaGVzWyAwIF0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKSxcblx0XHRcdFx0XHRyc2libGluZy50ZXN0KCB0b2tlbnNbIDAgXS50eXBlICkgJiZcblx0XHRcdFx0XHRcdHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fCBjb250ZXh0XG5cdFx0XHRcdCkgKSApIHtcblxuXHRcdFx0XHRcdC8vIElmIHNlZWQgaXMgZW1wdHkgb3Igbm8gdG9rZW5zIHJlbWFpbiwgd2UgY2FuIHJldHVybiBlYXJseVxuXHRcdFx0XHRcdHRva2Vucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IoIHRva2VucyApO1xuXHRcdFx0XHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2VlZCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcblx0Ly8gUHJvdmlkZSBgbWF0Y2hgIHRvIGF2b2lkIHJldG9rZW5pemF0aW9uIGlmIHdlIG1vZGlmaWVkIHRoZSBzZWxlY3RvciBhYm92ZVxuXHQoIGNvbXBpbGVkIHx8IGNvbXBpbGUoIHNlbGVjdG9yLCBtYXRjaCApICkoXG5cdFx0c2VlZCxcblx0XHRjb250ZXh0LFxuXHRcdCFkb2N1bWVudElzSFRNTCxcblx0XHRyZXN1bHRzLFxuXHRcdCFjb250ZXh0IHx8IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0KTtcblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vIE9uZS10aW1lIGFzc2lnbm1lbnRzXG5cbi8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgLSA0LjErXG4vLyBTb3J0IHN0YWJpbGl0eVxuc3VwcG9ydC5zb3J0U3RhYmxlID0gZXhwYW5kby5zcGxpdCggXCJcIiApLnNvcnQoIHNvcnRPcmRlciApLmpvaW4oIFwiXCIgKSA9PT0gZXhwYW5kbztcblxuLy8gSW5pdGlhbGl6ZSBhZ2FpbnN0IHRoZSBkZWZhdWx0IGRvY3VtZW50XG5zZXREb2N1bWVudCgpO1xuXG4vLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIC0gNC4xK1xuLy8gRGV0YWNoZWQgbm9kZXMgY29uZm91bmRpbmdseSBmb2xsb3cgKmVhY2ggb3RoZXIqXG5zdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydCggZnVuY3Rpb24oIGVsICkge1xuXG5cdC8vIFNob3VsZCByZXR1cm4gMSwgYnV0IHJldHVybnMgNCAoZm9sbG93aW5nKVxuXHRyZXR1cm4gZWwuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZmllbGRzZXRcIiApICkgJiAxO1xufSApO1xuXG5qUXVlcnkuZmluZCA9IGZpbmQ7XG5cbi8vIERlcHJlY2F0ZWRcbmpRdWVyeS5leHByWyBcIjpcIiBdID0galF1ZXJ5LmV4cHIucHNldWRvcztcbmpRdWVyeS51bmlxdWUgPSBqUXVlcnkudW5pcXVlU29ydDtcblxuLy8gVGhlc2UgaGF2ZSBhbHdheXMgYmVlbiBwcml2YXRlLCBidXQgdGhleSB1c2VkIHRvIGJlIGRvY3VtZW50ZWRcbi8vIGFzIHBhcnQgb2YgU2l6emxlIHNvIGxldCdzIG1haW50YWluIHRoZW0gaW4gdGhlIDMueCBsaW5lXG4vLyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcHVycG9zZXMuXG5maW5kLmNvbXBpbGUgPSBjb21waWxlO1xuZmluZC5zZWxlY3QgPSBzZWxlY3Q7XG5maW5kLnNldERvY3VtZW50ID0gc2V0RG9jdW1lbnQ7XG5cbmZpbmQuZXNjYXBlID0galF1ZXJ5LmVzY2FwZVNlbGVjdG9yO1xuZmluZC5nZXRUZXh0ID0galF1ZXJ5LnRleHQ7XG5maW5kLmlzWE1MID0galF1ZXJ5LmlzWE1MRG9jO1xuZmluZC5zZWxlY3RvcnMgPSBqUXVlcnkuZXhwcjtcbmZpbmQuc3VwcG9ydCA9IGpRdWVyeS5zdXBwb3J0O1xuZmluZC51bmlxdWVTb3J0ID0galF1ZXJ5LnVuaXF1ZVNvcnQ7XG5cblx0LyogZXNsaW50LWVuYWJsZSAqL1xuXG59ICkoKTtcblxuXG52YXIgZGlyID0gZnVuY3Rpb24oIGVsZW0sIGRpciwgdW50aWwgKSB7XG5cdHZhciBtYXRjaGVkID0gW10sXG5cdFx0dHJ1bmNhdGUgPSB1bnRpbCAhPT0gdW5kZWZpbmVkO1xuXG5cdHdoaWxlICggKCBlbGVtID0gZWxlbVsgZGlyIF0gKSAmJiBlbGVtLm5vZGVUeXBlICE9PSA5ICkge1xuXHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdGlmICggdHJ1bmNhdGUgJiYgalF1ZXJ5KCBlbGVtICkuaXMoIHVudGlsICkgKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0bWF0Y2hlZC5wdXNoKCBlbGVtICk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBtYXRjaGVkO1xufTtcblxuXG52YXIgc2libGluZ3MgPSBmdW5jdGlvbiggbiwgZWxlbSApIHtcblx0dmFyIG1hdGNoZWQgPSBbXTtcblxuXHRmb3IgKCA7IG47IG4gPSBuLm5leHRTaWJsaW5nICkge1xuXHRcdGlmICggbi5ub2RlVHlwZSA9PT0gMSAmJiBuICE9PSBlbGVtICkge1xuXHRcdFx0bWF0Y2hlZC5wdXNoKCBuICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG1hdGNoZWQ7XG59O1xuXG5cbnZhciBybmVlZHNDb250ZXh0ID0galF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O1xuXG52YXIgcnNpbmdsZVRhZyA9ICggL148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2kgKTtcblxuXG5cbi8vIEltcGxlbWVudCB0aGUgaWRlbnRpY2FsIGZ1bmN0aW9uYWxpdHkgZm9yIGZpbHRlciBhbmQgbm90XG5mdW5jdGlvbiB3aW5ub3coIGVsZW1lbnRzLCBxdWFsaWZpZXIsIG5vdCApIHtcblx0aWYgKCBpc0Z1bmN0aW9uKCBxdWFsaWZpZXIgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAhIXF1YWxpZmllci5jYWxsKCBlbGVtLCBpLCBlbGVtICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBTaW5nbGUgZWxlbWVudFxuXHRpZiAoIHF1YWxpZmllci5ub2RlVHlwZSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGVsZW0gPT09IHF1YWxpZmllciApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gQXJyYXlsaWtlIG9mIGVsZW1lbnRzIChqUXVlcnksIGFyZ3VtZW50cywgQXJyYXkpXG5cdGlmICggdHlwZW9mIHF1YWxpZmllciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGluZGV4T2YuY2FsbCggcXVhbGlmaWVyLCBlbGVtICkgPiAtMSApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gRmlsdGVyZWQgZGlyZWN0bHkgZm9yIGJvdGggc2ltcGxlIGFuZCBjb21wbGV4IHNlbGVjdG9yc1xuXHRyZXR1cm4galF1ZXJ5LmZpbHRlciggcXVhbGlmaWVyLCBlbGVtZW50cywgbm90ICk7XG59XG5cbmpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiggZXhwciwgZWxlbXMsIG5vdCApIHtcblx0dmFyIGVsZW0gPSBlbGVtc1sgMCBdO1xuXG5cdGlmICggbm90ICkge1xuXHRcdGV4cHIgPSBcIjpub3QoXCIgKyBleHByICsgXCIpXCI7XG5cdH1cblxuXHRpZiAoIGVsZW1zLmxlbmd0aCA9PT0gMSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGVsZW0sIGV4cHIgKSA/IFsgZWxlbSBdIDogW107XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlcyggZXhwciwgalF1ZXJ5LmdyZXAoIGVsZW1zLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZWxlbS5ub2RlVHlwZSA9PT0gMTtcblx0fSApICk7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGZpbmQ6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgaSwgcmV0LFxuXHRcdFx0bGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRzZWxmID0gdGhpcztcblxuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkoIHNlbGVjdG9yICkuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggc2VsZlsgaSBdLCB0aGlzICkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKSApO1xuXHRcdH1cblxuXHRcdHJldCA9IHRoaXMucHVzaFN0YWNrKCBbXSApO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGpRdWVyeS5maW5kKCBzZWxlY3Rvciwgc2VsZlsgaSBdLCByZXQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGVuID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCByZXQgKSA6IHJldDtcblx0fSxcblx0ZmlsdGVyOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3coIHRoaXMsIHNlbGVjdG9yIHx8IFtdLCBmYWxzZSApICk7XG5cdH0sXG5cdG5vdDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgdHJ1ZSApICk7XG5cdH0sXG5cdGlzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuICEhd2lubm93KFxuXHRcdFx0dGhpcyxcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHBvc2l0aW9uYWwvcmVsYXRpdmUgc2VsZWN0b3IsIGNoZWNrIG1lbWJlcnNoaXAgaW4gdGhlIHJldHVybmVkIHNldFxuXHRcdFx0Ly8gc28gJChcInA6Zmlyc3RcIikuaXMoXCJwOmxhc3RcIikgd29uJ3QgcmV0dXJuIHRydWUgZm9yIGEgZG9jIHdpdGggdHdvIFwicFwiLlxuXHRcdFx0dHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICYmIHJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGpRdWVyeSggc2VsZWN0b3IgKSA6XG5cdFx0XHRcdHNlbGVjdG9yIHx8IFtdLFxuXHRcdFx0ZmFsc2Vcblx0XHQpLmxlbmd0aDtcblx0fVxufSApO1xuXG5cbi8vIEluaXRpYWxpemUgYSBqUXVlcnkgb2JqZWN0XG5cblxuLy8gQSBjZW50cmFsIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBqUXVlcnkoZG9jdW1lbnQpXG52YXIgcm9vdGpRdWVyeSxcblxuXHQvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuXHQvLyBQcmlvcml0aXplICNpZCBvdmVyIDx0YWc+IHRvIGF2b2lkIFhTUyB2aWEgbG9jYXRpb24uaGFzaCAodHJhYy05NTIxKVxuXHQvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAodHJhYy0xMTI5MDogbXVzdCBzdGFydCB3aXRoIDwpXG5cdC8vIFNob3J0Y3V0IHNpbXBsZSAjaWQgY2FzZSBmb3Igc3BlZWRcblx0cnF1aWNrRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvLFxuXG5cdGluaXQgPSBqUXVlcnkuZm4uaW5pdCA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCwgcm9vdCApIHtcblx0XHR2YXIgbWF0Y2gsIGVsZW07XG5cblx0XHQvLyBIQU5ETEU6ICQoXCJcIiksICQobnVsbCksICQodW5kZWZpbmVkKSwgJChmYWxzZSlcblx0XHRpZiAoICFzZWxlY3RvciApIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8vIE1ldGhvZCBpbml0KCkgYWNjZXB0cyBhbiBhbHRlcm5hdGUgcm9vdGpRdWVyeVxuXHRcdC8vIHNvIG1pZ3JhdGUgY2FuIHN1cHBvcnQgalF1ZXJ5LnN1YiAoZ2gtMjEwMSlcblx0XHRyb290ID0gcm9vdCB8fCByb290alF1ZXJ5O1xuXG5cdFx0Ly8gSGFuZGxlIEhUTUwgc3RyaW5nc1xuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0aWYgKCBzZWxlY3RvclsgMCBdID09PSBcIjxcIiAmJlxuXHRcdFx0XHRzZWxlY3Rvclsgc2VsZWN0b3IubGVuZ3RoIC0gMSBdID09PSBcIj5cIiAmJlxuXHRcdFx0XHRzZWxlY3Rvci5sZW5ndGggPj0gMyApIHtcblxuXHRcdFx0XHQvLyBBc3N1bWUgdGhhdCBzdHJpbmdzIHRoYXQgc3RhcnQgYW5kIGVuZCB3aXRoIDw+IGFyZSBIVE1MIGFuZCBza2lwIHRoZSByZWdleCBjaGVja1xuXHRcdFx0XHRtYXRjaCA9IFsgbnVsbCwgc2VsZWN0b3IsIG51bGwgXTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1hdGNoIGh0bWwgb3IgbWFrZSBzdXJlIG5vIGNvbnRleHQgaXMgc3BlY2lmaWVkIGZvciAjaWRcblx0XHRcdGlmICggbWF0Y2ggJiYgKCBtYXRjaFsgMSBdIHx8ICFjb250ZXh0ICkgKSB7XG5cblx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwpIC0+ICQoYXJyYXkpXG5cdFx0XHRcdGlmICggbWF0Y2hbIDEgXSApIHtcblx0XHRcdFx0XHRjb250ZXh0ID0gY29udGV4dCBpbnN0YW5jZW9mIGpRdWVyeSA/IGNvbnRleHRbIDAgXSA6IGNvbnRleHQ7XG5cblx0XHRcdFx0XHQvLyBPcHRpb24gdG8gcnVuIHNjcmlwdHMgaXMgdHJ1ZSBmb3IgYmFjay1jb21wYXRcblx0XHRcdFx0XHQvLyBJbnRlbnRpb25hbGx5IGxldCB0aGUgZXJyb3IgYmUgdGhyb3duIGlmIHBhcnNlSFRNTCBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRcdGpRdWVyeS5tZXJnZSggdGhpcywgalF1ZXJ5LnBhcnNlSFRNTChcblx0XHRcdFx0XHRcdG1hdGNoWyAxIF0sXG5cdFx0XHRcdFx0XHRjb250ZXh0ICYmIGNvbnRleHQubm9kZVR5cGUgPyBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCA6IGRvY3VtZW50LFxuXHRcdFx0XHRcdFx0dHJ1ZVxuXHRcdFx0XHRcdCkgKTtcblxuXHRcdFx0XHRcdC8vIEhBTkRMRTogJChodG1sLCBwcm9wcylcblx0XHRcdFx0XHRpZiAoIHJzaW5nbGVUYWcudGVzdCggbWF0Y2hbIDEgXSApICYmIGpRdWVyeS5pc1BsYWluT2JqZWN0KCBjb250ZXh0ICkgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCBtYXRjaCBpbiBjb250ZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFByb3BlcnRpZXMgb2YgY29udGV4dCBhcmUgY2FsbGVkIGFzIG1ldGhvZHMgaWYgcG9zc2libGVcblx0XHRcdFx0XHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCB0aGlzWyBtYXRjaCBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpc1sgbWF0Y2ggXSggY29udGV4dFsgbWF0Y2ggXSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vIC4uLmFuZCBvdGhlcndpc2Ugc2V0IGFzIGF0dHJpYnV0ZXNcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmF0dHIoIG1hdGNoLCBjb250ZXh0WyBtYXRjaCBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoI2lkKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbWF0Y2hbIDIgXSApO1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJbmplY3QgdGhlIGVsZW1lbnQgZGlyZWN0bHkgaW50byB0aGUgalF1ZXJ5IG9iamVjdFxuXHRcdFx0XHRcdFx0dGhpc1sgMCBdID0gZWxlbTtcblx0XHRcdFx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsICQoLi4uKSlcblx0XHRcdH0gZWxzZSBpZiAoICFjb250ZXh0IHx8IGNvbnRleHQuanF1ZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm4gKCBjb250ZXh0IHx8IHJvb3QgKS5maW5kKCBzZWxlY3RvciApO1xuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgY29udGV4dClcblx0XHRcdC8vICh3aGljaCBpcyBqdXN0IGVxdWl2YWxlbnQgdG86ICQoY29udGV4dCkuZmluZChleHByKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IoIGNvbnRleHQgKS5maW5kKCBzZWxlY3RvciApO1xuXHRcdFx0fVxuXG5cdFx0Ly8gSEFORExFOiAkKERPTUVsZW1lbnQpXG5cdFx0fSBlbHNlIGlmICggc2VsZWN0b3Iubm9kZVR5cGUgKSB7XG5cdFx0XHR0aGlzWyAwIF0gPSBzZWxlY3Rvcjtcblx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0Ly8gSEFORExFOiAkKGZ1bmN0aW9uKVxuXHRcdC8vIFNob3J0Y3V0IGZvciBkb2N1bWVudCByZWFkeVxuXHRcdH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oIHNlbGVjdG9yICkgKSB7XG5cdFx0XHRyZXR1cm4gcm9vdC5yZWFkeSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0cm9vdC5yZWFkeSggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRzZWxlY3RvciggalF1ZXJ5ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoIHNlbGVjdG9yLCB0aGlzICk7XG5cdH07XG5cbi8vIEdpdmUgdGhlIGluaXQgZnVuY3Rpb24gdGhlIGpRdWVyeSBwcm90b3R5cGUgZm9yIGxhdGVyIGluc3RhbnRpYXRpb25cbmluaXQucHJvdG90eXBlID0galF1ZXJ5LmZuO1xuXG4vLyBJbml0aWFsaXplIGNlbnRyYWwgcmVmZXJlbmNlXG5yb290alF1ZXJ5ID0galF1ZXJ5KCBkb2N1bWVudCApO1xuXG5cbnZhciBycGFyZW50c3ByZXYgPSAvXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxcblxuXHQvLyBNZXRob2RzIGd1YXJhbnRlZWQgdG8gcHJvZHVjZSBhIHVuaXF1ZSBzZXQgd2hlbiBzdGFydGluZyBmcm9tIGEgdW5pcXVlIHNldFxuXHRndWFyYW50ZWVkVW5pcXVlID0ge1xuXHRcdGNoaWxkcmVuOiB0cnVlLFxuXHRcdGNvbnRlbnRzOiB0cnVlLFxuXHRcdG5leHQ6IHRydWUsXG5cdFx0cHJldjogdHJ1ZVxuXHR9O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGhhczogZnVuY3Rpb24oIHRhcmdldCApIHtcblx0XHR2YXIgdGFyZ2V0cyA9IGpRdWVyeSggdGFyZ2V0LCB0aGlzICksXG5cdFx0XHRsID0gdGFyZ2V0cy5sZW5ndGg7XG5cblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggdGhpcywgdGFyZ2V0c1sgaSBdICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0Y2xvc2VzdDogZnVuY3Rpb24oIHNlbGVjdG9ycywgY29udGV4dCApIHtcblx0XHR2YXIgY3VyLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRtYXRjaGVkID0gW10sXG5cdFx0XHR0YXJnZXRzID0gdHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBqUXVlcnkoIHNlbGVjdG9ycyApO1xuXG5cdFx0Ly8gUG9zaXRpb25hbCBzZWxlY3RvcnMgbmV2ZXIgbWF0Y2gsIHNpbmNlIHRoZXJlJ3Mgbm8gX3NlbGVjdGlvbl8gY29udGV4dFxuXHRcdGlmICggIXJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3JzICkgKSB7XG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZvciAoIGN1ciA9IHRoaXNbIGkgXTsgY3VyICYmIGN1ciAhPT0gY29udGV4dDsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cblx0XHRcdFx0XHQvLyBBbHdheXMgc2tpcCBkb2N1bWVudCBmcmFnbWVudHNcblx0XHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA8IDExICYmICggdGFyZ2V0cyA/XG5cdFx0XHRcdFx0XHR0YXJnZXRzLmluZGV4KCBjdXIgKSA+IC0xIDpcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcGFzcyBub24tZWxlbWVudHMgdG8galF1ZXJ5I2ZpbmRcblx0XHRcdFx0XHRcdGN1ci5ub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0XHRcdFx0XHRqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGN1ciwgc2VsZWN0b3JzICkgKSApIHtcblxuXHRcdFx0XHRcdFx0bWF0Y2hlZC5wdXNoKCBjdXIgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZC5sZW5ndGggPiAxID8galF1ZXJ5LnVuaXF1ZVNvcnQoIG1hdGNoZWQgKSA6IG1hdGNoZWQgKTtcblx0fSxcblxuXHQvLyBEZXRlcm1pbmUgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgd2l0aGluIHRoZSBzZXRcblx0aW5kZXg6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0Ly8gTm8gYXJndW1lbnQsIHJldHVybiBpbmRleCBpbiBwYXJlbnRcblx0XHRpZiAoICFlbGVtICkge1xuXHRcdFx0cmV0dXJuICggdGhpc1sgMCBdICYmIHRoaXNbIDAgXS5wYXJlbnROb2RlICkgPyB0aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aCA6IC0xO1xuXHRcdH1cblxuXHRcdC8vIEluZGV4IGluIHNlbGVjdG9yXG5cdFx0aWYgKCB0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiBpbmRleE9mLmNhbGwoIGpRdWVyeSggZWxlbSApLCB0aGlzWyAwIF0gKTtcblx0XHR9XG5cblx0XHQvLyBMb2NhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBkZXNpcmVkIGVsZW1lbnRcblx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKCB0aGlzLFxuXG5cdFx0XHQvLyBJZiBpdCByZWNlaXZlcyBhIGpRdWVyeSBvYmplY3QsIHRoZSBmaXJzdCBlbGVtZW50IGlzIHVzZWRcblx0XHRcdGVsZW0uanF1ZXJ5ID8gZWxlbVsgMCBdIDogZWxlbVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkOiBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKFxuXHRcdFx0alF1ZXJ5LnVuaXF1ZVNvcnQoXG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggdGhpcy5nZXQoKSwgalF1ZXJ5KCBzZWxlY3RvciwgY29udGV4dCApIClcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdGFkZEJhY2s6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5hZGQoIHNlbGVjdG9yID09IG51bGwgP1xuXHRcdFx0dGhpcy5wcmV2T2JqZWN0IDogdGhpcy5wcmV2T2JqZWN0LmZpbHRlciggc2VsZWN0b3IgKVxuXHRcdCk7XG5cdH1cbn0gKTtcblxuZnVuY3Rpb24gc2libGluZyggY3VyLCBkaXIgKSB7XG5cdHdoaWxlICggKCBjdXIgPSBjdXJbIGRpciBdICkgJiYgY3VyLm5vZGVUeXBlICE9PSAxICkge31cblx0cmV0dXJuIGN1cjtcbn1cblxualF1ZXJ5LmVhY2goIHtcblx0cGFyZW50OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdHJldHVybiBwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSAxMSA/IHBhcmVudCA6IG51bGw7XG5cdH0sXG5cdHBhcmVudHM6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiICk7XG5cdH0sXG5cdHBhcmVudHNVbnRpbDogZnVuY3Rpb24oIGVsZW0sIF9pLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiwgdW50aWwgKTtcblx0fSxcblx0bmV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIgKTtcblx0fSxcblx0cHJldkFsbDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBfaSwgdW50aWwgKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRwcmV2VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBfaSwgdW50aWwgKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiwgdW50aWwgKTtcblx0fSxcblx0c2libGluZ3M6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5ncyggKCBlbGVtLnBhcmVudE5vZGUgfHwge30gKS5maXJzdENoaWxkLCBlbGVtICk7XG5cdH0sXG5cdGNoaWxkcmVuOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZ3MoIGVsZW0uZmlyc3RDaGlsZCApO1xuXHR9LFxuXHRjb250ZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0aWYgKCBlbGVtLmNvbnRlbnREb2N1bWVudCAhPSBudWxsICYmXG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExK1xuXHRcdFx0Ly8gPG9iamVjdD4gZWxlbWVudHMgd2l0aCBubyBgZGF0YWAgYXR0cmlidXRlIGhhcyBhbiBvYmplY3Rcblx0XHRcdC8vIGBjb250ZW50RG9jdW1lbnRgIHdpdGggYSBgbnVsbGAgcHJvdG90eXBlLlxuXHRcdFx0Z2V0UHJvdG8oIGVsZW0uY29udGVudERvY3VtZW50ICkgKSB7XG5cblx0XHRcdHJldHVybiBlbGVtLmNvbnRlbnREb2N1bWVudDtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seSwgaU9TIDcgb25seSwgQW5kcm9pZCBCcm93c2VyIDw9NC4zIG9ubHlcblx0XHQvLyBUcmVhdCB0aGUgdGVtcGxhdGUgZWxlbWVudCBhcyBhIHJlZ3VsYXIgb25lIGluIGJyb3dzZXJzIHRoYXRcblx0XHQvLyBkb24ndCBzdXBwb3J0IGl0LlxuXHRcdGlmICggbm9kZU5hbWUoIGVsZW0sIFwidGVtcGxhdGVcIiApICkge1xuXHRcdFx0ZWxlbSA9IGVsZW0uY29udGVudCB8fCBlbGVtO1xuXHRcdH1cblxuXHRcdHJldHVybiBqUXVlcnkubWVyZ2UoIFtdLCBlbGVtLmNoaWxkTm9kZXMgKTtcblx0fVxufSwgZnVuY3Rpb24oIG5hbWUsIGZuICkge1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCB1bnRpbCwgc2VsZWN0b3IgKSB7XG5cdFx0dmFyIG1hdGNoZWQgPSBqUXVlcnkubWFwKCB0aGlzLCBmbiwgdW50aWwgKTtcblxuXHRcdGlmICggbmFtZS5zbGljZSggLTUgKSAhPT0gXCJVbnRpbFwiICkge1xuXHRcdFx0c2VsZWN0b3IgPSB1bnRpbDtcblx0XHR9XG5cblx0XHRpZiAoIHNlbGVjdG9yICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG1hdGNoZWQgPSBqUXVlcnkuZmlsdGVyKCBzZWxlY3RvciwgbWF0Y2hlZCApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlc1xuXHRcdFx0aWYgKCAhZ3VhcmFudGVlZFVuaXF1ZVsgbmFtZSBdICkge1xuXHRcdFx0XHRqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXZlcnNlIG9yZGVyIGZvciBwYXJlbnRzKiBhbmQgcHJldi1kZXJpdmF0aXZlc1xuXHRcdFx0aWYgKCBycGFyZW50c3ByZXYudGVzdCggbmFtZSApICkge1xuXHRcdFx0XHRtYXRjaGVkLnJldmVyc2UoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIG1hdGNoZWQgKTtcblx0fTtcbn0gKTtcbnZhciBybm90aHRtbHdoaXRlID0gKCAvW15cXHgyMFxcdFxcclxcblxcZl0rL2cgKTtcblxuXG5cbi8vIENvbnZlcnQgU3RyaW5nLWZvcm1hdHRlZCBvcHRpb25zIGludG8gT2JqZWN0LWZvcm1hdHRlZCBvbmVzXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25zKCBvcHRpb25zICkge1xuXHR2YXIgb2JqZWN0ID0ge307XG5cdGpRdWVyeS5lYWNoKCBvcHRpb25zLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW10sIGZ1bmN0aW9uKCBfLCBmbGFnICkge1xuXHRcdG9iamVjdFsgZmxhZyBdID0gdHJ1ZTtcblx0fSApO1xuXHRyZXR1cm4gb2JqZWN0O1xufVxuXG4vKlxuICogQ3JlYXRlIGEgY2FsbGJhY2sgbGlzdCB1c2luZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gKlxuICpcdG9wdGlvbnM6IGFuIG9wdGlvbmFsIGxpc3Qgb2Ygc3BhY2Utc2VwYXJhdGVkIG9wdGlvbnMgdGhhdCB3aWxsIGNoYW5nZSBob3dcbiAqXHRcdFx0dGhlIGNhbGxiYWNrIGxpc3QgYmVoYXZlcyBvciBhIG1vcmUgdHJhZGl0aW9uYWwgb3B0aW9uIG9iamVjdFxuICpcbiAqIEJ5IGRlZmF1bHQgYSBjYWxsYmFjayBsaXN0IHdpbGwgYWN0IGxpa2UgYW4gZXZlbnQgY2FsbGJhY2sgbGlzdCBhbmQgY2FuIGJlXG4gKiBcImZpcmVkXCIgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogUG9zc2libGUgb3B0aW9uczpcbiAqXG4gKlx0b25jZTpcdFx0XHR3aWxsIGVuc3VyZSB0aGUgY2FsbGJhY2sgbGlzdCBjYW4gb25seSBiZSBmaXJlZCBvbmNlIChsaWtlIGEgRGVmZXJyZWQpXG4gKlxuICpcdG1lbW9yeTpcdFx0XHR3aWxsIGtlZXAgdHJhY2sgb2YgcHJldmlvdXMgdmFsdWVzIGFuZCB3aWxsIGNhbGwgYW55IGNhbGxiYWNrIGFkZGVkXG4gKlx0XHRcdFx0XHRhZnRlciB0aGUgbGlzdCBoYXMgYmVlbiBmaXJlZCByaWdodCBhd2F5IHdpdGggdGhlIGxhdGVzdCBcIm1lbW9yaXplZFwiXG4gKlx0XHRcdFx0XHR2YWx1ZXMgKGxpa2UgYSBEZWZlcnJlZClcbiAqXG4gKlx0dW5pcXVlOlx0XHRcdHdpbGwgZW5zdXJlIGEgY2FsbGJhY2sgY2FuIG9ubHkgYmUgYWRkZWQgb25jZSAobm8gZHVwbGljYXRlIGluIHRoZSBsaXN0KVxuICpcbiAqXHRzdG9wT25GYWxzZTpcdGludGVycnVwdCBjYWxsaW5ncyB3aGVuIGEgY2FsbGJhY2sgcmV0dXJucyBmYWxzZVxuICpcbiAqL1xualF1ZXJ5LkNhbGxiYWNrcyA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG5cdC8vIENvbnZlcnQgb3B0aW9ucyBmcm9tIFN0cmluZy1mb3JtYXR0ZWQgdG8gT2JqZWN0LWZvcm1hdHRlZCBpZiBuZWVkZWRcblx0Ly8gKHdlIGNoZWNrIGluIGNhY2hlIGZpcnN0KVxuXHRvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgP1xuXHRcdGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSA6XG5cdFx0alF1ZXJ5LmV4dGVuZCgge30sIG9wdGlvbnMgKTtcblxuXHR2YXIgLy8gRmxhZyB0byBrbm93IGlmIGxpc3QgaXMgY3VycmVudGx5IGZpcmluZ1xuXHRcdGZpcmluZyxcblxuXHRcdC8vIExhc3QgZmlyZSB2YWx1ZSBmb3Igbm9uLWZvcmdldHRhYmxlIGxpc3RzXG5cdFx0bWVtb3J5LFxuXG5cdFx0Ly8gRmxhZyB0byBrbm93IGlmIGxpc3Qgd2FzIGFscmVhZHkgZmlyZWRcblx0XHRmaXJlZCxcblxuXHRcdC8vIEZsYWcgdG8gcHJldmVudCBmaXJpbmdcblx0XHRsb2NrZWQsXG5cblx0XHQvLyBBY3R1YWwgY2FsbGJhY2sgbGlzdFxuXHRcdGxpc3QgPSBbXSxcblxuXHRcdC8vIFF1ZXVlIG9mIGV4ZWN1dGlvbiBkYXRhIGZvciByZXBlYXRhYmxlIGxpc3RzXG5cdFx0cXVldWUgPSBbXSxcblxuXHRcdC8vIEluZGV4IG9mIGN1cnJlbnRseSBmaXJpbmcgY2FsbGJhY2sgKG1vZGlmaWVkIGJ5IGFkZC9yZW1vdmUgYXMgbmVlZGVkKVxuXHRcdGZpcmluZ0luZGV4ID0gLTEsXG5cblx0XHQvLyBGaXJlIGNhbGxiYWNrc1xuXHRcdGZpcmUgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRW5mb3JjZSBzaW5nbGUtZmlyaW5nXG5cdFx0XHRsb2NrZWQgPSBsb2NrZWQgfHwgb3B0aW9ucy5vbmNlO1xuXG5cdFx0XHQvLyBFeGVjdXRlIGNhbGxiYWNrcyBmb3IgYWxsIHBlbmRpbmcgZXhlY3V0aW9ucyxcblx0XHRcdC8vIHJlc3BlY3RpbmcgZmlyaW5nSW5kZXggb3ZlcnJpZGVzIGFuZCBydW50aW1lIGNoYW5nZXNcblx0XHRcdGZpcmVkID0gZmlyaW5nID0gdHJ1ZTtcblx0XHRcdGZvciAoIDsgcXVldWUubGVuZ3RoOyBmaXJpbmdJbmRleCA9IC0xICkge1xuXHRcdFx0XHRtZW1vcnkgPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdFx0XHR3aGlsZSAoICsrZmlyaW5nSW5kZXggPCBsaXN0Lmxlbmd0aCApIHtcblxuXHRcdFx0XHRcdC8vIFJ1biBjYWxsYmFjayBhbmQgY2hlY2sgZm9yIGVhcmx5IHRlcm1pbmF0aW9uXG5cdFx0XHRcdFx0aWYgKCBsaXN0WyBmaXJpbmdJbmRleCBdLmFwcGx5KCBtZW1vcnlbIDAgXSwgbWVtb3J5WyAxIF0gKSA9PT0gZmFsc2UgJiZcblx0XHRcdFx0XHRcdG9wdGlvbnMuc3RvcE9uRmFsc2UgKSB7XG5cblx0XHRcdFx0XHRcdC8vIEp1bXAgdG8gZW5kIGFuZCBmb3JnZXQgdGhlIGRhdGEgc28gLmFkZCBkb2Vzbid0IHJlLWZpcmVcblx0XHRcdFx0XHRcdGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGg7XG5cdFx0XHRcdFx0XHRtZW1vcnkgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yZ2V0IHRoZSBkYXRhIGlmIHdlJ3JlIGRvbmUgd2l0aCBpdFxuXHRcdFx0aWYgKCAhb3B0aW9ucy5tZW1vcnkgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmaXJpbmcgPSBmYWxzZTtcblxuXHRcdFx0Ly8gQ2xlYW4gdXAgaWYgd2UncmUgZG9uZSBmaXJpbmcgZm9yIGdvb2Rcblx0XHRcdGlmICggbG9ja2VkICkge1xuXG5cdFx0XHRcdC8vIEtlZXAgYW4gZW1wdHkgbGlzdCBpZiB3ZSBoYXZlIGRhdGEgZm9yIGZ1dHVyZSBhZGQgY2FsbHNcblx0XHRcdFx0aWYgKCBtZW1vcnkgKSB7XG5cdFx0XHRcdFx0bGlzdCA9IFtdO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSwgdGhpcyBvYmplY3QgaXMgc3BlbnRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaXN0ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBBY3R1YWwgQ2FsbGJhY2tzIG9iamVjdFxuXHRcdHNlbGYgPSB7XG5cblx0XHRcdC8vIEFkZCBhIGNhbGxiYWNrIG9yIGEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdG8gdGhlIGxpc3Rcblx0XHRcdGFkZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbGlzdCApIHtcblxuXHRcdFx0XHRcdC8vIElmIHdlIGhhdmUgbWVtb3J5IGZyb20gYSBwYXN0IHJ1biwgd2Ugc2hvdWxkIGZpcmUgYWZ0ZXIgYWRkaW5nXG5cdFx0XHRcdFx0aWYgKCBtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRcdGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0cXVldWUucHVzaCggbWVtb3J5ICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0KCBmdW5jdGlvbiBhZGQoIGFyZ3MgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZWFjaCggYXJncywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCBhcmcgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoICFvcHRpb25zLnVuaXF1ZSB8fCAhc2VsZi5oYXMoIGFyZyApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdC5wdXNoKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGFyZyAmJiBhcmcubGVuZ3RoICYmIHRvVHlwZSggYXJnICkgIT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBJbnNwZWN0IHJlY3Vyc2l2ZWx5XG5cdFx0XHRcdFx0XHRcdFx0YWRkKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gKSggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gdGhlIGxpc3Rcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG5cdFx0XHRcdFx0dmFyIGluZGV4O1xuXHRcdFx0XHRcdHdoaWxlICggKCBpbmRleCA9IGpRdWVyeS5pbkFycmF5KCBhcmcsIGxpc3QsIGluZGV4ICkgKSA+IC0xICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHRcdFx0XHRcdC8vIEhhbmRsZSBmaXJpbmcgaW5kZXhlc1xuXHRcdFx0XHRcdFx0aWYgKCBpbmRleCA8PSBmaXJpbmdJbmRleCApIHtcblx0XHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXgtLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDaGVjayBpZiBhIGdpdmVuIGNhbGxiYWNrIGlzIGluIHRoZSBsaXN0LlxuXHRcdFx0Ly8gSWYgbm8gYXJndW1lbnQgaXMgZ2l2ZW4sIHJldHVybiB3aGV0aGVyIG9yIG5vdCBsaXN0IGhhcyBjYWxsYmFja3MgYXR0YWNoZWQuXG5cdFx0XHRoYXM6IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRcdFx0cmV0dXJuIGZuID9cblx0XHRcdFx0XHRqUXVlcnkuaW5BcnJheSggZm4sIGxpc3QgKSA+IC0xIDpcblx0XHRcdFx0XHRsaXN0Lmxlbmd0aCA+IDA7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZW1vdmUgYWxsIGNhbGxiYWNrcyBmcm9tIHRoZSBsaXN0XG5cdFx0XHRlbXB0eTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbGlzdCApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBEaXNhYmxlIC5maXJlIGFuZCAuYWRkXG5cdFx0XHQvLyBBYm9ydCBhbnkgY3VycmVudC9wZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdC8vIENsZWFyIGFsbCBjYWxsYmFja3MgYW5kIHZhbHVlc1xuXHRcdFx0ZGlzYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxvY2tlZCA9IHF1ZXVlID0gW107XG5cdFx0XHRcdGxpc3QgPSBtZW1vcnkgPSBcIlwiO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRkaXNhYmxlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhbGlzdDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmVcblx0XHRcdC8vIEFsc28gZGlzYWJsZSAuYWRkIHVubGVzcyB3ZSBoYXZlIG1lbW9yeSAoc2luY2UgaXQgd291bGQgaGF2ZSBubyBlZmZlY3QpXG5cdFx0XHQvLyBBYm9ydCBhbnkgcGVuZGluZyBleGVjdXRpb25zXG5cdFx0XHRsb2NrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0aWYgKCAhbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0bG9ja2VkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhbG9ja2VkO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGNvbnRleHQgYW5kIGFyZ3VtZW50c1xuXHRcdFx0ZmlyZVdpdGg6IGZ1bmN0aW9uKCBjb250ZXh0LCBhcmdzICkge1xuXHRcdFx0XHRpZiAoICFsb2NrZWQgKSB7XG5cdFx0XHRcdFx0YXJncyA9IGFyZ3MgfHwgW107XG5cdFx0XHRcdFx0YXJncyA9IFsgY29udGV4dCwgYXJncy5zbGljZSA/IGFyZ3Muc2xpY2UoKSA6IGFyZ3MgXTtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBhcmdzICk7XG5cdFx0XHRcdFx0aWYgKCAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENhbGwgYWxsIHRoZSBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzXG5cdFx0XHRmaXJlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5maXJlV2l0aCggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiB0aGUgY2FsbGJhY2tzIGhhdmUgYWxyZWFkeSBiZWVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXG5cdFx0XHRmaXJlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIWZpcmVkO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0cmV0dXJuIHNlbGY7XG59O1xuXG5cbmZ1bmN0aW9uIElkZW50aXR5KCB2ICkge1xuXHRyZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIFRocm93ZXIoIGV4ICkge1xuXHR0aHJvdyBleDtcbn1cblxuZnVuY3Rpb24gYWRvcHRWYWx1ZSggdmFsdWUsIHJlc29sdmUsIHJlamVjdCwgbm9WYWx1ZSApIHtcblx0dmFyIG1ldGhvZDtcblxuXHR0cnkge1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIHByb21pc2UgYXNwZWN0IGZpcnN0IHRvIHByaXZpbGVnZSBzeW5jaHJvbm91cyBiZWhhdmlvclxuXHRcdGlmICggdmFsdWUgJiYgaXNGdW5jdGlvbiggKCBtZXRob2QgPSB2YWx1ZS5wcm9taXNlICkgKSApIHtcblx0XHRcdG1ldGhvZC5jYWxsKCB2YWx1ZSApLmRvbmUoIHJlc29sdmUgKS5mYWlsKCByZWplY3QgKTtcblxuXHRcdC8vIE90aGVyIHRoZW5hYmxlc1xuXHRcdH0gZWxzZSBpZiAoIHZhbHVlICYmIGlzRnVuY3Rpb24oICggbWV0aG9kID0gdmFsdWUudGhlbiApICkgKSB7XG5cdFx0XHRtZXRob2QuY2FsbCggdmFsdWUsIHJlc29sdmUsIHJlamVjdCApO1xuXG5cdFx0Ly8gT3RoZXIgbm9uLXRoZW5hYmxlc1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIENvbnRyb2wgYHJlc29sdmVgIGFyZ3VtZW50cyBieSBsZXR0aW5nIEFycmF5I3NsaWNlIGNhc3QgYm9vbGVhbiBgbm9WYWx1ZWAgdG8gaW50ZWdlcjpcblx0XHRcdC8vICogZmFsc2U6IFsgdmFsdWUgXS5zbGljZSggMCApID0+IHJlc29sdmUoIHZhbHVlIClcblx0XHRcdC8vICogdHJ1ZTogWyB2YWx1ZSBdLnNsaWNlKCAxICkgPT4gcmVzb2x2ZSgpXG5cdFx0XHRyZXNvbHZlLmFwcGx5KCB1bmRlZmluZWQsIFsgdmFsdWUgXS5zbGljZSggbm9WYWx1ZSApICk7XG5cdFx0fVxuXG5cdC8vIEZvciBQcm9taXNlcy9BKywgY29udmVydCBleGNlcHRpb25zIGludG8gcmVqZWN0aW9uc1xuXHQvLyBTaW5jZSBqUXVlcnkud2hlbiBkb2Vzbid0IHVud3JhcCB0aGVuYWJsZXMsIHdlIGNhbiBza2lwIHRoZSBleHRyYSBjaGVja3MgYXBwZWFyaW5nIGluXG5cdC8vIERlZmVycmVkI3RoZW4gdG8gY29uZGl0aW9uYWxseSBzdXBwcmVzcyByZWplY3Rpb24uXG5cdH0gY2F0Y2ggKCB2YWx1ZSApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIG9ubHlcblx0XHQvLyBTdHJpY3QgbW9kZSBmdW5jdGlvbnMgaW52b2tlZCB3aXRob3V0IC5jYWxsLy5hcHBseSBnZXQgZ2xvYmFsLW9iamVjdCBjb250ZXh0XG5cdFx0cmVqZWN0LmFwcGx5KCB1bmRlZmluZWQsIFsgdmFsdWUgXSApO1xuXHR9XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHREZWZlcnJlZDogZnVuY3Rpb24oIGZ1bmMgKSB7XG5cdFx0dmFyIHR1cGxlcyA9IFtcblxuXHRcdFx0XHQvLyBhY3Rpb24sIGFkZCBsaXN0ZW5lciwgY2FsbGJhY2tzLFxuXHRcdFx0XHQvLyAuLi4gLnRoZW4gaGFuZGxlcnMsIGFyZ3VtZW50IGluZGV4LCBbZmluYWwgc3RhdGVdXG5cdFx0XHRcdFsgXCJub3RpZnlcIiwgXCJwcm9ncmVzc1wiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJtZW1vcnlcIiApLCAyIF0sXG5cdFx0XHRcdFsgXCJyZXNvbHZlXCIsIFwiZG9uZVwiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSwgMCwgXCJyZXNvbHZlZFwiIF0sXG5cdFx0XHRcdFsgXCJyZWplY3RcIiwgXCJmYWlsXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLCAxLCBcInJlamVjdGVkXCIgXVxuXHRcdFx0XSxcblx0XHRcdHN0YXRlID0gXCJwZW5kaW5nXCIsXG5cdFx0XHRwcm9taXNlID0ge1xuXHRcdFx0XHRzdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbHdheXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGRlZmVycmVkLmRvbmUoIGFyZ3VtZW50cyApLmZhaWwoIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImNhdGNoXCI6IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZS50aGVuKCBudWxsLCBmbiApO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIEtlZXAgcGlwZSBmb3IgYmFjay1jb21wYXRcblx0XHRcdFx0cGlwZTogZnVuY3Rpb24oIC8qIGZuRG9uZSwgZm5GYWlsLCBmblByb2dyZXNzICovICkge1xuXHRcdFx0XHRcdHZhciBmbnMgPSBhcmd1bWVudHM7XG5cblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5LkRlZmVycmVkKCBmdW5jdGlvbiggbmV3RGVmZXIgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZWFjaCggdHVwbGVzLCBmdW5jdGlvbiggX2ksIHR1cGxlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE1hcCB0dXBsZXMgKHByb2dyZXNzLCBkb25lLCBmYWlsKSB0byBhcmd1bWVudHMgKGRvbmUsIGZhaWwsIHByb2dyZXNzKVxuXHRcdFx0XHRcdFx0XHR2YXIgZm4gPSBpc0Z1bmN0aW9uKCBmbnNbIHR1cGxlWyA0IF0gXSApICYmIGZuc1sgdHVwbGVbIDQgXSBdO1xuXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLnByb2dyZXNzKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLm5vdGlmeSB9KVxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5kb25lKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlc29sdmUgfSlcblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQuZmFpbChmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZWplY3QgfSlcblx0XHRcdFx0XHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAxIF0gXSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJldHVybmVkID0gZm4gJiYgZm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdFx0XHRcdGlmICggcmV0dXJuZWQgJiYgaXNGdW5jdGlvbiggcmV0dXJuZWQucHJvbWlzZSApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQucHJvbWlzZSgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5wcm9ncmVzcyggbmV3RGVmZXIubm90aWZ5IClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmRvbmUoIG5ld0RlZmVyLnJlc29sdmUgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZmFpbCggbmV3RGVmZXIucmVqZWN0ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXShcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm4gPyBbIHJldHVybmVkIF0gOiBhcmd1bWVudHNcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRmbnMgPSBudWxsO1xuXHRcdFx0XHRcdH0gKS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRoZW46IGZ1bmN0aW9uKCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgb25Qcm9ncmVzcyApIHtcblx0XHRcdFx0XHR2YXIgbWF4RGVwdGggPSAwO1xuXHRcdFx0XHRcdGZ1bmN0aW9uIHJlc29sdmUoIGRlcHRoLCBkZWZlcnJlZCwgaGFuZGxlciwgc3BlY2lhbCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBhcmd1bWVudHMsXG5cdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHJldHVybmVkLCB0aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuM1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTlcblx0XHRcdFx0XHRcdFx0XHRcdC8vIElnbm9yZSBkb3VibGUtcmVzb2x1dGlvbiBhdHRlbXB0c1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCA8IG1heERlcHRoICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkID0gaGFuZGxlci5hcHBseSggdGhhdCwgYXJncyApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4xXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC00OFxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCByZXR1cm5lZCA9PT0gZGVmZXJyZWQucHJvbWlzZSgpICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCBcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb25zIDIuMy4zLjEsIDMuNVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTRcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTc1XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXRyaWV2ZSBgdGhlbmAgb25seSBvbmNlXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGVuID0gcmV0dXJuZWQgJiZcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy40XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTY0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgY2hlY2sgb2JqZWN0cyBhbmQgZnVuY3Rpb25zIGZvciB0aGVuYWJpbGl0eVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoIHR5cGVvZiByZXR1cm5lZCA9PT0gXCJvYmplY3RcIiB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGVvZiByZXR1cm5lZCA9PT0gXCJmdW5jdGlvblwiICkgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQudGhlbjtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGEgcmV0dXJuZWQgdGhlbmFibGVcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggaXNGdW5jdGlvbiggdGhlbiApICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFNwZWNpYWwgcHJvY2Vzc29ycyAobm90aWZ5KSBqdXN0IHdhaXQgZm9yIHJlc29sdXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW4uY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBhbHNvIGhvb2sgaW50byBwcm9ncmVzc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIGRpc3JlZ2FyZCBvbGRlciByZXNvbHV0aW9uIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heERlcHRoKys7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYWxsIG90aGVyIHJldHVybmVkIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGhhbmRsZXIgIT09IElkZW50aXR5ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJncyA9IFsgcmV0dXJuZWQgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFByb2Nlc3MgdGhlIHZhbHVlKHMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIERlZmF1bHQgcHJvY2VzcyBpcyByZXNvbHZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggc3BlY2lhbCB8fCBkZWZlcnJlZC5yZXNvbHZlV2l0aCApKCB0aGF0LCBhcmdzICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgbm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGNhdGNoIGFuZCByZWplY3QgZXhjZXB0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MgPSBzcGVjaWFsID9cblx0XHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3cgOlxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayggZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5lcnJvciApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy40LjFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02MVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIElnbm9yZSBwb3N0LXJlc29sdXRpb24gZXhjZXB0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggZGVwdGggKyAxID49IG1heERlcHRoICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggaGFuZGxlciAhPT0gVGhyb3dlciApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJncyA9IFsgZSBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCB0aGF0LCBhcmdzICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4xXG5cdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU3XG5cdFx0XHRcdFx0XHRcdC8vIFJlLXJlc29sdmUgcHJvbWlzZXMgaW1tZWRpYXRlbHkgdG8gZG9kZ2UgZmFsc2UgcmVqZWN0aW9uIGZyb21cblx0XHRcdFx0XHRcdFx0Ly8gc3Vic2VxdWVudCBlcnJvcnNcblx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCApIHtcblx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBDYWxsIGFuIG9wdGlvbmFsIGhvb2sgdG8gcmVjb3JkIHRoZSBlcnJvciwgaW4gY2FzZSBvZiBleGNlcHRpb25cblx0XHRcdFx0XHRcdFx0XHQvLyBzaW5jZSBpdCdzIG90aGVyd2lzZSBsb3N0IHdoZW4gZXhlY3V0aW9uIGdvZXMgYXN5bmNcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5EZWZlcnJlZC5nZXRFcnJvckhvb2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzLmVycm9yID0galF1ZXJ5LkRlZmVycmVkLmdldEVycm9ySG9vaygpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gVGhlIGRlcHJlY2F0ZWQgYWxpYXMgb2YgdGhlIGFib3ZlLiBXaGlsZSB0aGUgbmFtZSBzdWdnZXN0c1xuXHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybmluZyB0aGUgc3RhY2ssIG5vdCBhbiBlcnJvciBpbnN0YW5jZSwgalF1ZXJ5IGp1c3QgcGFzc2VzXG5cdFx0XHRcdFx0XHRcdFx0Ly8gaXQgZGlyZWN0bHkgdG8gYGNvbnNvbGUud2FybmAgc28gYm90aCB3aWxsIHdvcms7IGFuIGluc3RhbmNlXG5cdFx0XHRcdFx0XHRcdFx0Ly8ganVzdCBiZXR0ZXIgY29vcGVyYXRlcyB3aXRoIHNvdXJjZSBtYXBzLlxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGpRdWVyeS5EZWZlcnJlZC5nZXRTdGFja0hvb2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzLmVycm9yID0galF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vaygpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCggcHJvY2VzcyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoIGZ1bmN0aW9uKCBuZXdEZWZlciApIHtcblxuXHRcdFx0XHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRpc0Z1bmN0aW9uKCBvblByb2dyZXNzICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25Qcm9ncmVzcyA6XG5cdFx0XHRcdFx0XHRcdFx0XHRJZGVudGl0eSxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlci5ub3RpZnlXaXRoXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5hZGQoIC4uLiApXG5cdFx0XHRcdFx0XHR0dXBsZXNbIDEgXVsgMyBdLmFkZChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLFxuXHRcdFx0XHRcdFx0XHRcdGlzRnVuY3Rpb24oIG9uRnVsZmlsbGVkICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25GdWxmaWxsZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0SWRlbnRpdHlcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAyIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRpc0Z1bmN0aW9uKCBvblJlamVjdGVkICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25SZWplY3RlZCA6XG5cdFx0XHRcdFx0XHRcdFx0XHRUaHJvd2VyXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSApLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBHZXQgYSBwcm9taXNlIGZvciB0aGlzIGRlZmVycmVkXG5cdFx0XHRcdC8vIElmIG9iaiBpcyBwcm92aWRlZCwgdGhlIHByb21pc2UgYXNwZWN0IGlzIGFkZGVkIHRvIHRoZSBvYmplY3Rcblx0XHRcdFx0cHJvbWlzZTogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRcdFx0XHRyZXR1cm4gb2JqICE9IG51bGwgPyBqUXVlcnkuZXh0ZW5kKCBvYmosIHByb21pc2UgKSA6IHByb21pc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWZlcnJlZCA9IHt9O1xuXG5cdFx0Ly8gQWRkIGxpc3Qtc3BlY2lmaWMgbWV0aG9kc1xuXHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBpLCB0dXBsZSApIHtcblx0XHRcdHZhciBsaXN0ID0gdHVwbGVbIDIgXSxcblx0XHRcdFx0c3RhdGVTdHJpbmcgPSB0dXBsZVsgNSBdO1xuXG5cdFx0XHQvLyBwcm9taXNlLnByb2dyZXNzID0gbGlzdC5hZGRcblx0XHRcdC8vIHByb21pc2UuZG9uZSA9IGxpc3QuYWRkXG5cdFx0XHQvLyBwcm9taXNlLmZhaWwgPSBsaXN0LmFkZFxuXHRcdFx0cHJvbWlzZVsgdHVwbGVbIDEgXSBdID0gbGlzdC5hZGQ7XG5cblx0XHRcdC8vIEhhbmRsZSBzdGF0ZVxuXHRcdFx0aWYgKCBzdGF0ZVN0cmluZyApIHtcblx0XHRcdFx0bGlzdC5hZGQoXG5cdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdC8vIHN0YXRlID0gXCJyZXNvbHZlZFwiIChpLmUuLCBmdWxmaWxsZWQpXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVqZWN0ZWRcIlxuXHRcdFx0XHRcdFx0c3RhdGUgPSBzdGF0ZVN0cmluZztcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfY2FsbGJhY2tzLmRpc2FibGVcblx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfY2FsbGJhY2tzLmRpc2FibGVcblx0XHRcdFx0XHR0dXBsZXNbIDMgLSBpIF1bIDIgXS5kaXNhYmxlLFxuXG5cdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuZGlzYWJsZVxuXHRcdFx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5kaXNhYmxlXG5cdFx0XHRcdFx0dHVwbGVzWyAzIC0gaSBdWyAzIF0uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHByb2dyZXNzX2NhbGxiYWNrcy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDIgXS5sb2NrLFxuXG5cdFx0XHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMubG9ja1xuXHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAzIF0ubG9ja1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBwcm9ncmVzc19oYW5kbGVycy5maXJlXG5cdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuZmlyZVxuXHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuZmlyZVxuXHRcdFx0bGlzdC5hZGQoIHR1cGxlWyAzIF0uZmlyZSApO1xuXG5cdFx0XHQvLyBkZWZlcnJlZC5ub3RpZnkgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQubm90aWZ5V2l0aCguLi4pIH1cblx0XHRcdC8vIGRlZmVycmVkLnJlc29sdmUgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQucmVzb2x2ZVdpdGgoLi4uKSB9XG5cdFx0XHQvLyBkZWZlcnJlZC5yZWplY3QgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQucmVqZWN0V2l0aCguLi4pIH1cblx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdKCB0aGlzID09PSBkZWZlcnJlZCA/IHVuZGVmaW5lZCA6IHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH07XG5cblx0XHRcdC8vIGRlZmVycmVkLm5vdGlmeVdpdGggPSBsaXN0LmZpcmVXaXRoXG5cdFx0XHQvLyBkZWZlcnJlZC5yZXNvbHZlV2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdC8vIGRlZmVycmVkLnJlamVjdFdpdGggPSBsaXN0LmZpcmVXaXRoXG5cdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0gPSBsaXN0LmZpcmVXaXRoO1xuXHRcdH0gKTtcblxuXHRcdC8vIE1ha2UgdGhlIGRlZmVycmVkIGEgcHJvbWlzZVxuXHRcdHByb21pc2UucHJvbWlzZSggZGVmZXJyZWQgKTtcblxuXHRcdC8vIENhbGwgZ2l2ZW4gZnVuYyBpZiBhbnlcblx0XHRpZiAoIGZ1bmMgKSB7XG5cdFx0XHRmdW5jLmNhbGwoIGRlZmVycmVkLCBkZWZlcnJlZCApO1xuXHRcdH1cblxuXHRcdC8vIEFsbCBkb25lIVxuXHRcdHJldHVybiBkZWZlcnJlZDtcblx0fSxcblxuXHQvLyBEZWZlcnJlZCBoZWxwZXJcblx0d2hlbjogZnVuY3Rpb24oIHNpbmdsZVZhbHVlICkge1xuXHRcdHZhclxuXG5cdFx0XHQvLyBjb3VudCBvZiB1bmNvbXBsZXRlZCBzdWJvcmRpbmF0ZXNcblx0XHRcdHJlbWFpbmluZyA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cblx0XHRcdC8vIGNvdW50IG9mIHVucHJvY2Vzc2VkIGFyZ3VtZW50c1xuXHRcdFx0aSA9IHJlbWFpbmluZyxcblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgZnVsZmlsbG1lbnQgZGF0YVxuXHRcdFx0cmVzb2x2ZUNvbnRleHRzID0gQXJyYXkoIGkgKSxcblx0XHRcdHJlc29sdmVWYWx1ZXMgPSBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSxcblxuXHRcdFx0Ly8gdGhlIHByaW1hcnkgRGVmZXJyZWRcblx0XHRcdHByaW1hcnkgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgY2FsbGJhY2sgZmFjdG9yeVxuXHRcdFx0dXBkYXRlRnVuYyA9IGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJlc29sdmVDb250ZXh0c1sgaSBdID0gdGhpcztcblx0XHRcdFx0XHRyZXNvbHZlVmFsdWVzWyBpIF0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKCAhKCAtLXJlbWFpbmluZyApICkge1xuXHRcdFx0XHRcdFx0cHJpbWFyeS5yZXNvbHZlV2l0aCggcmVzb2x2ZUNvbnRleHRzLCByZXNvbHZlVmFsdWVzICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdC8vIFNpbmdsZS0gYW5kIGVtcHR5IGFyZ3VtZW50cyBhcmUgYWRvcHRlZCBsaWtlIFByb21pc2UucmVzb2x2ZVxuXHRcdGlmICggcmVtYWluaW5nIDw9IDEgKSB7XG5cdFx0XHRhZG9wdFZhbHVlKCBzaW5nbGVWYWx1ZSwgcHJpbWFyeS5kb25lKCB1cGRhdGVGdW5jKCBpICkgKS5yZXNvbHZlLCBwcmltYXJ5LnJlamVjdCxcblx0XHRcdFx0IXJlbWFpbmluZyApO1xuXG5cdFx0XHQvLyBVc2UgLnRoZW4oKSB0byB1bndyYXAgc2Vjb25kYXJ5IHRoZW5hYmxlcyAoY2YuIGdoLTMwMDApXG5cdFx0XHRpZiAoIHByaW1hcnkuc3RhdGUoKSA9PT0gXCJwZW5kaW5nXCIgfHxcblx0XHRcdFx0aXNGdW5jdGlvbiggcmVzb2x2ZVZhbHVlc1sgaSBdICYmIHJlc29sdmVWYWx1ZXNbIGkgXS50aGVuICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHByaW1hcnkudGhlbigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE11bHRpcGxlIGFyZ3VtZW50cyBhcmUgYWdncmVnYXRlZCBsaWtlIFByb21pc2UuYWxsIGFycmF5IGVsZW1lbnRzXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRhZG9wdFZhbHVlKCByZXNvbHZlVmFsdWVzWyBpIF0sIHVwZGF0ZUZ1bmMoIGkgKSwgcHJpbWFyeS5yZWplY3QgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJpbWFyeS5wcm9taXNlKCk7XG5cdH1cbn0gKTtcblxuXG4vLyBUaGVzZSB1c3VhbGx5IGluZGljYXRlIGEgcHJvZ3JhbW1lciBtaXN0YWtlIGR1cmluZyBkZXZlbG9wbWVudCxcbi8vIHdhcm4gYWJvdXQgdGhlbSBBU0FQIHJhdGhlciB0aGFuIHN3YWxsb3dpbmcgdGhlbSBieSBkZWZhdWx0LlxudmFyIHJlcnJvck5hbWVzID0gL14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87XG5cbi8vIElmIGBqUXVlcnkuRGVmZXJyZWQuZ2V0RXJyb3JIb29rYCBpcyBkZWZpbmVkLCBgYXN5bmNFcnJvcmAgaXMgYW4gZXJyb3Jcbi8vIGNhcHR1cmVkIGJlZm9yZSB0aGUgYXN5bmMgYmFycmllciB0byBnZXQgdGhlIG9yaWdpbmFsIGVycm9yIGNhdXNlXG4vLyB3aGljaCBtYXkgb3RoZXJ3aXNlIGJlIGhpZGRlbi5cbmpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rID0gZnVuY3Rpb24oIGVycm9yLCBhc3luY0Vycm9yICkge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDggLSA5IG9ubHlcblx0Ly8gQ29uc29sZSBleGlzdHMgd2hlbiBkZXYgdG9vbHMgYXJlIG9wZW4sIHdoaWNoIGNhbiBoYXBwZW4gYXQgYW55IHRpbWVcblx0aWYgKCB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS53YXJuICYmIGVycm9yICYmIHJlcnJvck5hbWVzLnRlc3QoIGVycm9yLm5hbWUgKSApIHtcblx0XHR3aW5kb3cuY29uc29sZS53YXJuKCBcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiICsgZXJyb3IubWVzc2FnZSxcblx0XHRcdGVycm9yLnN0YWNrLCBhc3luY0Vycm9yICk7XG5cdH1cbn07XG5cblxuXG5cbmpRdWVyeS5yZWFkeUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKCBlcnJvciApIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IGVycm9yO1xuXHR9ICk7XG59O1xuXG5cblxuXG4vLyBUaGUgZGVmZXJyZWQgdXNlZCBvbiBET00gcmVhZHlcbnZhciByZWFkeUxpc3QgPSBqUXVlcnkuRGVmZXJyZWQoKTtcblxualF1ZXJ5LmZuLnJlYWR5ID0gZnVuY3Rpb24oIGZuICkge1xuXG5cdHJlYWR5TGlzdFxuXHRcdC50aGVuKCBmbiApXG5cblx0XHQvLyBXcmFwIGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiBpbiBhIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIGxvb2t1cFxuXHRcdC8vIGhhcHBlbnMgYXQgdGhlIHRpbWUgb2YgZXJyb3IgaGFuZGxpbmcgaW5zdGVhZCBvZiBjYWxsYmFja1xuXHRcdC8vIHJlZ2lzdHJhdGlvbi5cblx0XHQuY2F0Y2goIGZ1bmN0aW9uKCBlcnJvciApIHtcblx0XHRcdGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiggZXJyb3IgKTtcblx0XHR9ICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cblx0aXNSZWFkeTogZmFsc2UsXG5cblx0Ly8gQSBjb3VudGVyIHRvIHRyYWNrIGhvdyBtYW55IGl0ZW1zIHRvIHdhaXQgZm9yIGJlZm9yZVxuXHQvLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSB0cmFjLTY3ODFcblx0cmVhZHlXYWl0OiAxLFxuXG5cdC8vIEhhbmRsZSB3aGVuIHRoZSBET00gaXMgcmVhZHlcblx0cmVhZHk6IGZ1bmN0aW9uKCB3YWl0ICkge1xuXG5cdFx0Ly8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuXHRcdGlmICggd2FpdCA9PT0gdHJ1ZSA/IC0talF1ZXJ5LnJlYWR5V2FpdCA6IGpRdWVyeS5pc1JlYWR5ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlbWVtYmVyIHRoYXQgdGhlIERPTSBpcyByZWFkeVxuXHRcdGpRdWVyeS5pc1JlYWR5ID0gdHJ1ZTtcblxuXHRcdC8vIElmIGEgbm9ybWFsIERPTSBSZWFkeSBldmVudCBmaXJlZCwgZGVjcmVtZW50LCBhbmQgd2FpdCBpZiBuZWVkIGJlXG5cdFx0aWYgKCB3YWl0ICE9PSB0cnVlICYmIC0talF1ZXJ5LnJlYWR5V2FpdCA+IDAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxuXHRcdHJlYWR5TGlzdC5yZXNvbHZlV2l0aCggZG9jdW1lbnQsIFsgalF1ZXJ5IF0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkucmVhZHkudGhlbiA9IHJlYWR5TGlzdC50aGVuO1xuXG4vLyBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlciBhbmQgc2VsZiBjbGVhbnVwIG1ldGhvZFxuZnVuY3Rpb24gY29tcGxldGVkKCkge1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkICk7XG5cdGpRdWVyeS5yZWFkeSgpO1xufVxuXG4vLyBDYXRjaCBjYXNlcyB3aGVyZSAkKGRvY3VtZW50KS5yZWFkeSgpIGlzIGNhbGxlZFxuLy8gYWZ0ZXIgdGhlIGJyb3dzZXIgZXZlbnQgaGFzIGFscmVhZHkgb2NjdXJyZWQuXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMCBvbmx5XG4vLyBPbGRlciBJRSBzb21ldGltZXMgc2lnbmFscyBcImludGVyYWN0aXZlXCIgdG9vIHNvb25cbmlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XG5cdCggZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCApICkge1xuXG5cdC8vIEhhbmRsZSBpdCBhc3luY2hyb25vdXNseSB0byBhbGxvdyBzY3JpcHRzIHRoZSBvcHBvcnR1bml0eSB0byBkZWxheSByZWFkeVxuXHR3aW5kb3cuc2V0VGltZW91dCggalF1ZXJ5LnJlYWR5ICk7XG5cbn0gZWxzZSB7XG5cblx0Ly8gVXNlIHRoZSBoYW5keSBldmVudCBjYWxsYmFja1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cblx0Ly8gQSBmYWxsYmFjayB0byB3aW5kb3cub25sb2FkLCB0aGF0IHdpbGwgYWx3YXlzIHdvcmtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQgKTtcbn1cblxuXG5cblxuLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXG4vLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cbnZhciBhY2Nlc3MgPSBmdW5jdGlvbiggZWxlbXMsIGZuLCBrZXksIHZhbHVlLCBjaGFpbmFibGUsIGVtcHR5R2V0LCByYXcgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBlbGVtcy5sZW5ndGgsXG5cdFx0YnVsayA9IGtleSA9PSBudWxsO1xuXG5cdC8vIFNldHMgbWFueSB2YWx1ZXNcblx0aWYgKCB0b1R5cGUoIGtleSApID09PSBcIm9iamVjdFwiICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cdFx0Zm9yICggaSBpbiBrZXkgKSB7XG5cdFx0XHRhY2Nlc3MoIGVsZW1zLCBmbiwgaSwga2V5WyBpIF0sIHRydWUsIGVtcHR5R2V0LCByYXcgKTtcblx0XHR9XG5cblx0Ly8gU2V0cyBvbmUgdmFsdWVcblx0fSBlbHNlIGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRjaGFpbmFibGUgPSB0cnVlO1xuXG5cdFx0aWYgKCAhaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJhdyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBidWxrICkge1xuXG5cdFx0XHQvLyBCdWxrIG9wZXJhdGlvbnMgcnVuIGFnYWluc3QgdGhlIGVudGlyZSBzZXRcblx0XHRcdGlmICggcmF3ICkge1xuXHRcdFx0XHRmbi5jYWxsKCBlbGVtcywgdmFsdWUgKTtcblx0XHRcdFx0Zm4gPSBudWxsO1xuXG5cdFx0XHQvLyAuLi5leGNlcHQgd2hlbiBleGVjdXRpbmcgZnVuY3Rpb24gdmFsdWVzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRidWxrID0gZm47XG5cdFx0XHRcdGZuID0gZnVuY3Rpb24oIGVsZW0sIF9rZXksIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBidWxrLmNhbGwoIGpRdWVyeSggZWxlbSApLCB2YWx1ZSApO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggZm4gKSB7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0Zm4oXG5cdFx0XHRcdFx0ZWxlbXNbIGkgXSwga2V5LCByYXcgP1xuXHRcdFx0XHRcdFx0dmFsdWUgOlxuXHRcdFx0XHRcdFx0dmFsdWUuY2FsbCggZWxlbXNbIGkgXSwgaSwgZm4oIGVsZW1zWyBpIF0sIGtleSApIClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIGNoYWluYWJsZSApIHtcblx0XHRyZXR1cm4gZWxlbXM7XG5cdH1cblxuXHQvLyBHZXRzXG5cdGlmICggYnVsayApIHtcblx0XHRyZXR1cm4gZm4uY2FsbCggZWxlbXMgKTtcblx0fVxuXG5cdHJldHVybiBsZW4gPyBmbiggZWxlbXNbIDAgXSwga2V5ICkgOiBlbXB0eUdldDtcbn07XG5cblxuLy8gTWF0Y2hlcyBkYXNoZWQgc3RyaW5nIGZvciBjYW1lbGl6aW5nXG52YXIgcm1zUHJlZml4ID0gL14tbXMtLyxcblx0cmRhc2hBbHBoYSA9IC8tKFthLXpdKS9nO1xuXG4vLyBVc2VkIGJ5IGNhbWVsQ2FzZSBhcyBjYWxsYmFjayB0byByZXBsYWNlKClcbmZ1bmN0aW9uIGZjYW1lbENhc2UoIF9hbGwsIGxldHRlciApIHtcblx0cmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xufVxuXG4vLyBDb252ZXJ0IGRhc2hlZCB0byBjYW1lbENhc2U7IHVzZWQgYnkgdGhlIGNzcyBhbmQgZGF0YSBtb2R1bGVzXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG4vLyBNaWNyb3NvZnQgZm9yZ290IHRvIGh1bXAgdGhlaXIgdmVuZG9yIHByZWZpeCAodHJhYy05NTcyKVxuZnVuY3Rpb24gY2FtZWxDYXNlKCBzdHJpbmcgKSB7XG5cdHJldHVybiBzdHJpbmcucmVwbGFjZSggcm1zUHJlZml4LCBcIm1zLVwiICkucmVwbGFjZSggcmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSApO1xufVxudmFyIGFjY2VwdERhdGEgPSBmdW5jdGlvbiggb3duZXIgKSB7XG5cblx0Ly8gQWNjZXB0cyBvbmx5OlxuXHQvLyAgLSBOb2RlXG5cdC8vICAgIC0gTm9kZS5FTEVNRU5UX05PREVcblx0Ly8gICAgLSBOb2RlLkRPQ1VNRU5UX05PREVcblx0Ly8gIC0gT2JqZWN0XG5cdC8vICAgIC0gQW55XG5cdHJldHVybiBvd25lci5ub2RlVHlwZSA9PT0gMSB8fCBvd25lci5ub2RlVHlwZSA9PT0gOSB8fCAhKCArb3duZXIubm9kZVR5cGUgKTtcbn07XG5cblxuXG5cbmZ1bmN0aW9uIERhdGEoKSB7XG5cdHRoaXMuZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvICsgRGF0YS51aWQrKztcbn1cblxuRGF0YS51aWQgPSAxO1xuXG5EYXRhLnByb3RvdHlwZSA9IHtcblxuXHRjYWNoZTogZnVuY3Rpb24oIG93bmVyICkge1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIG93bmVyIG9iamVjdCBhbHJlYWR5IGhhcyBhIGNhY2hlXG5cdFx0dmFyIHZhbHVlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0Ly8gSWYgbm90LCBjcmVhdGUgb25lXG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHR2YWx1ZSA9IHt9O1xuXG5cdFx0XHQvLyBXZSBjYW4gYWNjZXB0IGRhdGEgZm9yIG5vbi1lbGVtZW50IG5vZGVzIGluIG1vZGVybiBicm93c2Vycyxcblx0XHRcdC8vIGJ1dCB3ZSBzaG91bGQgbm90LCBzZWUgdHJhYy04MzM1LlxuXHRcdFx0Ly8gQWx3YXlzIHJldHVybiBhbiBlbXB0eSBvYmplY3QuXG5cdFx0XHRpZiAoIGFjY2VwdERhdGEoIG93bmVyICkgKSB7XG5cblx0XHRcdFx0Ly8gSWYgaXQgaXMgYSBub2RlIHVubGlrZWx5IHRvIGJlIHN0cmluZ2lmeS1lZCBvciBsb29wZWQgb3ZlclxuXHRcdFx0XHQvLyB1c2UgcGxhaW4gYXNzaWdubWVudFxuXHRcdFx0XHRpZiAoIG93bmVyLm5vZGVUeXBlICkge1xuXHRcdFx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSA9IHZhbHVlO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBzZWN1cmUgaXQgaW4gYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eVxuXHRcdFx0XHQvLyBjb25maWd1cmFibGUgbXVzdCBiZSB0cnVlIHRvIGFsbG93IHRoZSBwcm9wZXJ0eSB0byBiZVxuXHRcdFx0XHQvLyBkZWxldGVkIHdoZW4gZGF0YSBpcyByZW1vdmVkXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBvd25lciwgdGhpcy5leHBhbmRvLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdHNldDogZnVuY3Rpb24oIG93bmVyLCBkYXRhLCB2YWx1ZSApIHtcblx0XHR2YXIgcHJvcCxcblx0XHRcdGNhY2hlID0gdGhpcy5jYWNoZSggb3duZXIgKTtcblxuXHRcdC8vIEhhbmRsZTogWyBvd25lciwga2V5LCB2YWx1ZSBdIGFyZ3Ncblx0XHQvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGNhY2hlWyBjYW1lbENhc2UoIGRhdGEgKSBdID0gdmFsdWU7XG5cblx0XHQvLyBIYW5kbGU6IFsgb3duZXIsIHsgcHJvcGVydGllcyB9IF0gYXJnc1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIENvcHkgdGhlIHByb3BlcnRpZXMgb25lLWJ5LW9uZSB0byB0aGUgY2FjaGUgb2JqZWN0XG5cdFx0XHRmb3IgKCBwcm9wIGluIGRhdGEgKSB7XG5cdFx0XHRcdGNhY2hlWyBjYW1lbENhc2UoIHByb3AgKSBdID0gZGF0YVsgcHJvcCBdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FjaGU7XG5cdH0sXG5cdGdldDogZnVuY3Rpb24oIG93bmVyLCBrZXkgKSB7XG5cdFx0cmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdHRoaXMuY2FjaGUoIG93bmVyICkgOlxuXG5cdFx0XHQvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG5cdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gJiYgb3duZXJbIHRoaXMuZXhwYW5kbyBdWyBjYW1lbENhc2UoIGtleSApIF07XG5cdH0sXG5cdGFjY2VzczogZnVuY3Rpb24oIG93bmVyLCBrZXksIHZhbHVlICkge1xuXG5cdFx0Ly8gSW4gY2FzZXMgd2hlcmUgZWl0aGVyOlxuXHRcdC8vXG5cdFx0Ly8gICAxLiBObyBrZXkgd2FzIHNwZWNpZmllZFxuXHRcdC8vICAgMi4gQSBzdHJpbmcga2V5IHdhcyBzcGVjaWZpZWQsIGJ1dCBubyB2YWx1ZSBwcm92aWRlZFxuXHRcdC8vXG5cdFx0Ly8gVGFrZSB0aGUgXCJyZWFkXCIgcGF0aCBhbmQgYWxsb3cgdGhlIGdldCBtZXRob2QgdG8gZGV0ZXJtaW5lXG5cdFx0Ly8gd2hpY2ggdmFsdWUgdG8gcmV0dXJuLCByZXNwZWN0aXZlbHkgZWl0aGVyOlxuXHRcdC8vXG5cdFx0Ly8gICAxLiBUaGUgZW50aXJlIGNhY2hlIG9iamVjdFxuXHRcdC8vICAgMi4gVGhlIGRhdGEgc3RvcmVkIGF0IHRoZSBrZXlcblx0XHQvL1xuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0KCAoIGtleSAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICkgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCApICkge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoIG93bmVyLCBrZXkgKTtcblx0XHR9XG5cblx0XHQvLyBXaGVuIHRoZSBrZXkgaXMgbm90IGEgc3RyaW5nLCBvciBib3RoIGEga2V5IGFuZCB2YWx1ZVxuXHRcdC8vIGFyZSBzcGVjaWZpZWQsIHNldCBvciBleHRlbmQgKGV4aXN0aW5nIG9iamVjdHMpIHdpdGggZWl0aGVyOlxuXHRcdC8vXG5cdFx0Ly8gICAxLiBBbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuXHRcdC8vICAgMi4gQSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly9cblx0XHR0aGlzLnNldCggb3duZXIsIGtleSwgdmFsdWUgKTtcblxuXHRcdC8vIFNpbmNlIHRoZSBcInNldFwiIHBhdGggY2FuIGhhdmUgdHdvIHBvc3NpYmxlIGVudHJ5IHBvaW50c1xuXHRcdC8vIHJldHVybiB0aGUgZXhwZWN0ZWQgZGF0YSBiYXNlZCBvbiB3aGljaCBwYXRoIHdhcyB0YWtlblsqXVxuXHRcdHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBrZXk7XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24oIG93bmVyLCBrZXkgKSB7XG5cdFx0dmFyIGksXG5cdFx0XHRjYWNoZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblxuXHRcdGlmICggY2FjaGUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGtleSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0IGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Yga2V5c1xuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBrZXkgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBrZXkgaXMgYW4gYXJyYXkgb2Yga2V5cy4uLlxuXHRcdFx0XHQvLyBXZSBhbHdheXMgc2V0IGNhbWVsQ2FzZSBrZXlzLCBzbyByZW1vdmUgdGhhdC5cblx0XHRcdFx0a2V5ID0ga2V5Lm1hcCggY2FtZWxDYXNlICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRrZXkgPSBjYW1lbENhc2UoIGtleSApO1xuXG5cdFx0XHRcdC8vIElmIGEga2V5IHdpdGggdGhlIHNwYWNlcyBleGlzdHMsIHVzZSBpdC5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBjcmVhdGUgYW4gYXJyYXkgYnkgbWF0Y2hpbmcgbm9uLXdoaXRlc3BhY2Vcblx0XHRcdFx0a2V5ID0ga2V5IGluIGNhY2hlID9cblx0XHRcdFx0XHRbIGtleSBdIDpcblx0XHRcdFx0XHQoIGtleS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdICk7XG5cdFx0XHR9XG5cblx0XHRcdGkgPSBrZXkubGVuZ3RoO1xuXG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0ZGVsZXRlIGNhY2hlWyBrZXlbIGkgXSBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB0aGUgZXhwYW5kbyBpZiB0aGVyZSdzIG5vIG1vcmUgZGF0YVxuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgfHwgalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGNhY2hlICkgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDVcblx0XHRcdC8vIFdlYmtpdCAmIEJsaW5rIHBlcmZvcm1hbmNlIHN1ZmZlcnMgd2hlbiBkZWxldGluZyBwcm9wZXJ0aWVzXG5cdFx0XHQvLyBmcm9tIERPTSBub2Rlcywgc28gc2V0IHRvIHVuZGVmaW5lZCBpbnN0ZWFkXG5cdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNzg2MDcgKGJ1ZyByZXN0cmljdGVkKVxuXHRcdFx0aWYgKCBvd25lci5ub2RlVHlwZSApIHtcblx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVsZXRlIG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGhhc0RhdGE6IGZ1bmN0aW9uKCBvd25lciApIHtcblx0XHR2YXIgY2FjaGUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cdFx0cmV0dXJuIGNhY2hlICE9PSB1bmRlZmluZWQgJiYgIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBjYWNoZSApO1xuXHR9XG59O1xudmFyIGRhdGFQcml2ID0gbmV3IERhdGEoKTtcblxudmFyIGRhdGFVc2VyID0gbmV3IERhdGEoKTtcblxuXG5cbi8vXHRJbXBsZW1lbnRhdGlvbiBTdW1tYXJ5XG4vL1xuLy9cdDEuIEVuZm9yY2UgQVBJIHN1cmZhY2UgYW5kIHNlbWFudGljIGNvbXBhdGliaWxpdHkgd2l0aCAxLjkueCBicmFuY2hcbi8vXHQyLiBJbXByb3ZlIHRoZSBtb2R1bGUncyBtYWludGFpbmFiaWxpdHkgYnkgcmVkdWNpbmcgdGhlIHN0b3JhZ2Vcbi8vXHRcdHBhdGhzIHRvIGEgc2luZ2xlIG1lY2hhbmlzbS5cbi8vXHQzLiBVc2UgdGhlIHNhbWUgc2luZ2xlIG1lY2hhbmlzbSB0byBzdXBwb3J0IFwicHJpdmF0ZVwiIGFuZCBcInVzZXJcIiBkYXRhLlxuLy9cdDQuIF9OZXZlcl8gZXhwb3NlIFwicHJpdmF0ZVwiIGRhdGEgdG8gdXNlciBjb2RlIChUT0RPOiBEcm9wIF9kYXRhLCBfcmVtb3ZlRGF0YSlcbi8vXHQ1LiBBdm9pZCBleHBvc2luZyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIG9uIHVzZXIgb2JqZWN0cyAoZWcuIGV4cGFuZG8gcHJvcGVydGllcylcbi8vXHQ2LiBQcm92aWRlIGEgY2xlYXIgcGF0aCBmb3IgaW1wbGVtZW50YXRpb24gdXBncmFkZSB0byBXZWFrTWFwIGluIDIwMTRcblxudmFyIHJicmFjZSA9IC9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxcblx0cm11bHRpRGFzaCA9IC9bQS1aXS9nO1xuXG5mdW5jdGlvbiBnZXREYXRhKCBkYXRhICkge1xuXHRpZiAoIGRhdGEgPT09IFwidHJ1ZVwiICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKCBkYXRhID09PSBcImZhbHNlXCIgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKCBkYXRhID09PSBcIm51bGxcIiApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIE9ubHkgY29udmVydCB0byBhIG51bWJlciBpZiBpdCBkb2Vzbid0IGNoYW5nZSB0aGUgc3RyaW5nXG5cdGlmICggZGF0YSA9PT0gK2RhdGEgKyBcIlwiICkge1xuXHRcdHJldHVybiArZGF0YTtcblx0fVxuXG5cdGlmICggcmJyYWNlLnRlc3QoIGRhdGEgKSApIHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZSggZGF0YSApO1xuXHR9XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGRhdGFBdHRyKCBlbGVtLCBrZXksIGRhdGEgKSB7XG5cdHZhciBuYW1lO1xuXG5cdC8vIElmIG5vdGhpbmcgd2FzIGZvdW5kIGludGVybmFsbHksIHRyeSB0byBmZXRjaCBhbnlcblx0Ly8gZGF0YSBmcm9tIHRoZSBIVE1MNSBkYXRhLSogYXR0cmlidXRlXG5cdGlmICggZGF0YSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0bmFtZSA9IFwiZGF0YS1cIiArIGtleS5yZXBsYWNlKCBybXVsdGlEYXNoLCBcIi0kJlwiICkudG9Mb3dlckNhc2UoKTtcblx0XHRkYXRhID0gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcblxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkYXRhID0gZ2V0RGF0YSggZGF0YSApO1xuXHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXG5cdFx0XHQvLyBNYWtlIHN1cmUgd2Ugc2V0IHRoZSBkYXRhIHNvIGl0IGlzbid0IGNoYW5nZWQgbGF0ZXJcblx0XHRcdGRhdGFVc2VyLnNldCggZWxlbSwga2V5LCBkYXRhICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBkYXRhO1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGhhc0RhdGE6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkYXRhVXNlci5oYXNEYXRhKCBlbGVtICkgfHwgZGF0YVByaXYuaGFzRGF0YSggZWxlbSApO1xuXHR9LFxuXG5cdGRhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBkYXRhICkge1xuXHRcdHJldHVybiBkYXRhVXNlci5hY2Nlc3MoIGVsZW0sIG5hbWUsIGRhdGEgKTtcblx0fSxcblxuXHRyZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRkYXRhVXNlci5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcblx0fSxcblxuXHQvLyBUT0RPOiBOb3cgdGhhdCBhbGwgY2FsbHMgdG8gX2RhdGEgYW5kIF9yZW1vdmVEYXRhIGhhdmUgYmVlbiByZXBsYWNlZFxuXHQvLyB3aXRoIGRpcmVjdCBjYWxscyB0byBkYXRhUHJpdiBtZXRob2RzLCB0aGVzZSBjYW4gYmUgZGVwcmVjYXRlZC5cblx0X2RhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBkYXRhICkge1xuXHRcdHJldHVybiBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIG5hbWUsIGRhdGEgKTtcblx0fSxcblxuXHRfcmVtb3ZlRGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBuYW1lICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRkYXRhOiBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHR2YXIgaSwgbmFtZSwgZGF0YSxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRhdHRycyA9IGVsZW0gJiYgZWxlbS5hdHRyaWJ1dGVzO1xuXG5cdFx0Ly8gR2V0cyBhbGwgdmFsdWVzXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggdGhpcy5sZW5ndGggKSB7XG5cdFx0XHRcdGRhdGEgPSBkYXRhVXNlci5nZXQoIGVsZW0gKTtcblxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgIWRhdGFQcml2LmdldCggZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiApICkge1xuXHRcdFx0XHRcdGkgPSBhdHRycy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExIG9ubHlcblx0XHRcdFx0XHRcdC8vIFRoZSBhdHRycyBlbGVtZW50cyBjYW4gYmUgbnVsbCAodHJhYy0xNDg5NClcblx0XHRcdFx0XHRcdGlmICggYXR0cnNbIGkgXSApIHtcblx0XHRcdFx0XHRcdFx0bmFtZSA9IGF0dHJzWyBpIF0ubmFtZTtcblx0XHRcdFx0XHRcdFx0aWYgKCBuYW1lLmluZGV4T2YoIFwiZGF0YS1cIiApID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHRcdG5hbWUgPSBjYW1lbENhc2UoIG5hbWUuc2xpY2UoIDUgKSApO1xuXHRcdFx0XHRcdFx0XHRcdGRhdGFBdHRyKCBlbGVtLCBuYW1lLCBkYXRhWyBuYW1lIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9XG5cblx0XHQvLyBTZXRzIG11bHRpcGxlIHZhbHVlc1xuXHRcdGlmICggdHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkYXRhVXNlci5zZXQoIHRoaXMsIGtleSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBkYXRhO1xuXG5cdFx0XHQvLyBUaGUgY2FsbGluZyBqUXVlcnkgb2JqZWN0IChlbGVtZW50IG1hdGNoZXMpIGlzIG5vdCBlbXB0eVxuXHRcdFx0Ly8gKGFuZCB0aGVyZWZvcmUgaGFzIGFuIGVsZW1lbnQgYXBwZWFycyBhdCB0aGlzWyAwIF0pIGFuZCB0aGVcblx0XHRcdC8vIGB2YWx1ZWAgcGFyYW1ldGVyIHdhcyBub3QgdW5kZWZpbmVkLiBBbiBlbXB0eSBqUXVlcnkgb2JqZWN0XG5cdFx0XHQvLyB3aWxsIHJlc3VsdCBpbiBgdW5kZWZpbmVkYCBmb3IgZWxlbSA9IHRoaXNbIDAgXSB3aGljaCB3aWxsXG5cdFx0XHQvLyB0aHJvdyBhbiBleGNlcHRpb24gaWYgYW4gYXR0ZW1wdCB0byByZWFkIGEgZGF0YSBjYWNoZSBpcyBtYWRlLlxuXHRcdFx0aWYgKCBlbGVtICYmIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBnZXQgZGF0YSBmcm9tIHRoZSBjYWNoZVxuXHRcdFx0XHQvLyBUaGUga2V5IHdpbGwgYWx3YXlzIGJlIGNhbWVsQ2FzZWQgaW4gRGF0YVxuXHRcdFx0XHRkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtLCBrZXkgKTtcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIFwiZGlzY292ZXJcIiB0aGUgZGF0YSBpblxuXHRcdFx0XHQvLyBIVE1MNSBjdXN0b20gZGF0YS0qIGF0dHJzXG5cdFx0XHRcdGRhdGEgPSBkYXRhQXR0ciggZWxlbSwga2V5ICk7XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UgdHJpZWQgcmVhbGx5IGhhcmQsIGJ1dCB0aGUgZGF0YSBkb2Vzbid0IGV4aXN0LlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgZGF0YS4uLlxuXHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHQvLyBXZSBhbHdheXMgc3RvcmUgdGhlIGNhbWVsQ2FzZWQga2V5XG5cdFx0XHRcdGRhdGFVc2VyLnNldCggdGhpcywga2V5LCB2YWx1ZSApO1xuXHRcdFx0fSApO1xuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSwgbnVsbCwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBrZXkgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkYXRhVXNlci5yZW1vdmUoIHRoaXMsIGtleSApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5cbmpRdWVyeS5leHRlbmQoIHtcblx0cXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBxdWV1ZTtcblxuXHRcdGlmICggZWxlbSApIHtcblx0XHRcdHR5cGUgPSAoIHR5cGUgfHwgXCJmeFwiICkgKyBcInF1ZXVlXCI7XG5cdFx0XHRxdWV1ZSA9IGRhdGFQcml2LmdldCggZWxlbSwgdHlwZSApO1xuXG5cdFx0XHQvLyBTcGVlZCB1cCBkZXF1ZXVlIGJ5IGdldHRpbmcgb3V0IHF1aWNrbHkgaWYgdGhpcyBpcyBqdXN0IGEgbG9va3VwXG5cdFx0XHRpZiAoIGRhdGEgKSB7XG5cdFx0XHRcdGlmICggIXF1ZXVlIHx8IEFycmF5LmlzQXJyYXkoIGRhdGEgKSApIHtcblx0XHRcdFx0XHRxdWV1ZSA9IGRhdGFQcml2LmFjY2VzcyggZWxlbSwgdHlwZSwgalF1ZXJ5Lm1ha2VBcnJheSggZGF0YSApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cXVldWUucHVzaCggZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcXVldWUgfHwgW107XG5cdFx0fVxuXHR9LFxuXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggZWxlbSwgdHlwZSApLFxuXHRcdFx0c3RhcnRMZW5ndGggPSBxdWV1ZS5sZW5ndGgsXG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCksXG5cdFx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgdHlwZSApLFxuXHRcdFx0bmV4dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggZWxlbSwgdHlwZSApO1xuXHRcdFx0fTtcblxuXHRcdC8vIElmIHRoZSBmeCBxdWV1ZSBpcyBkZXF1ZXVlZCwgYWx3YXlzIHJlbW92ZSB0aGUgcHJvZ3Jlc3Mgc2VudGluZWxcblx0XHRpZiAoIGZuID09PSBcImlucHJvZ3Jlc3NcIiApIHtcblx0XHRcdGZuID0gcXVldWUuc2hpZnQoKTtcblx0XHRcdHN0YXJ0TGVuZ3RoLS07XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblxuXHRcdFx0Ly8gQWRkIGEgcHJvZ3Jlc3Mgc2VudGluZWwgdG8gcHJldmVudCB0aGUgZnggcXVldWUgZnJvbSBiZWluZ1xuXHRcdFx0Ly8gYXV0b21hdGljYWxseSBkZXF1ZXVlZFxuXHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgKSB7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoIFwiaW5wcm9ncmVzc1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENsZWFyIHVwIHRoZSBsYXN0IHF1ZXVlIHN0b3AgZnVuY3Rpb25cblx0XHRcdGRlbGV0ZSBob29rcy5zdG9wO1xuXHRcdFx0Zm4uY2FsbCggZWxlbSwgbmV4dCwgaG9va3MgKTtcblx0XHR9XG5cblx0XHRpZiAoICFzdGFydExlbmd0aCAmJiBob29rcyApIHtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gTm90IHB1YmxpYyAtIGdlbmVyYXRlIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybiB0aGUgY3VycmVudCBvbmVcblx0X3F1ZXVlSG9va3M6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHZhciBrZXkgPSB0eXBlICsgXCJxdWV1ZUhvb2tzXCI7XG5cdFx0cmV0dXJuIGRhdGFQcml2LmdldCggZWxlbSwga2V5ICkgfHwgZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBrZXksIHtcblx0XHRcdGVtcHR5OiBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKS5hZGQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFsgdHlwZSArIFwicXVldWVcIiwga2V5IF0gKTtcblx0XHRcdH0gKVxuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHF1ZXVlOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgc2V0dGVyID0gMjtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRkYXRhID0gdHlwZTtcblx0XHRcdHR5cGUgPSBcImZ4XCI7XG5cdFx0XHRzZXR0ZXItLTtcblx0XHR9XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPCBzZXR0ZXIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnF1ZXVlKCB0aGlzWyAwIF0sIHR5cGUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdHRoaXMgOlxuXHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBkYXRhICk7XG5cblx0XHRcdFx0Ly8gRW5zdXJlIGEgaG9va3MgZm9yIHRoaXMgcXVldWVcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgJiYgcXVldWVbIDAgXSAhPT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHR9LFxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0fSApO1xuXHR9LFxuXHRjbGVhclF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdH0sXG5cblx0Ly8gR2V0IGEgcHJvbWlzZSByZXNvbHZlZCB3aGVuIHF1ZXVlcyBvZiBhIGNlcnRhaW4gdHlwZVxuXHQvLyBhcmUgZW1wdGllZCAoZnggaXMgdGhlIHR5cGUgYnkgZGVmYXVsdClcblx0cHJvbWlzZTogZnVuY3Rpb24oIHR5cGUsIG9iaiApIHtcblx0XHR2YXIgdG1wLFxuXHRcdFx0Y291bnQgPSAxLFxuXHRcdFx0ZGVmZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblx0XHRcdGVsZW1lbnRzID0gdGhpcyxcblx0XHRcdGkgPSB0aGlzLmxlbmd0aCxcblx0XHRcdHJlc29sdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhKCAtLWNvdW50ICkgKSB7XG5cdFx0XHRcdFx0ZGVmZXIucmVzb2x2ZVdpdGgoIGVsZW1lbnRzLCBbIGVsZW1lbnRzIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRvYmogPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR0bXAgPSBkYXRhUHJpdi5nZXQoIGVsZW1lbnRzWyBpIF0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIiApO1xuXHRcdFx0aWYgKCB0bXAgJiYgdG1wLmVtcHR5ICkge1xuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHR0bXAuZW1wdHkuYWRkKCByZXNvbHZlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc29sdmUoKTtcblx0XHRyZXR1cm4gZGVmZXIucHJvbWlzZSggb2JqICk7XG5cdH1cbn0gKTtcbnZhciBwbnVtID0gKCAvWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLyApLnNvdXJjZTtcblxudmFyIHJjc3NOdW0gPSBuZXcgUmVnRXhwKCBcIl4oPzooWystXSk9fCkoXCIgKyBwbnVtICsgXCIpKFthLXolXSopJFwiLCBcImlcIiApO1xuXG5cbnZhciBjc3NFeHBhbmQgPSBbIFwiVG9wXCIsIFwiUmlnaHRcIiwgXCJCb3R0b21cIiwgXCJMZWZ0XCIgXTtcblxudmFyIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cblx0dmFyIGlzQXR0YWNoZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApO1xuXHRcdH0sXG5cdFx0Y29tcG9zZWQgPSB7IGNvbXBvc2VkOiB0cnVlIH07XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxMiAtIDE4KywgaU9TIDEwLjAgLSAxMC4yIG9ubHlcblx0Ly8gQ2hlY2sgYXR0YWNobWVudCBhY3Jvc3Mgc2hhZG93IERPTSBib3VuZGFyaWVzIHdoZW4gcG9zc2libGUgKGdoLTM1MDQpXG5cdC8vIFN1cHBvcnQ6IGlPUyAxMC4wLTEwLjIgb25seVxuXHQvLyBFYXJseSBpT1MgMTAgdmVyc2lvbnMgc3VwcG9ydCBgYXR0YWNoU2hhZG93YCBidXQgbm90IGBnZXRSb290Tm9kZWAsXG5cdC8vIGxlYWRpbmcgdG8gZXJyb3JzLiBXZSBuZWVkIHRvIGNoZWNrIGZvciBgZ2V0Um9vdE5vZGVgLlxuXHRpZiAoIGRvY3VtZW50RWxlbWVudC5nZXRSb290Tm9kZSApIHtcblx0XHRpc0F0dGFjaGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKSB8fFxuXHRcdFx0XHRlbGVtLmdldFJvb3ROb2RlKCBjb21wb3NlZCApID09PSBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cdFx0fTtcblx0fVxudmFyIGlzSGlkZGVuV2l0aGluVHJlZSA9IGZ1bmN0aW9uKCBlbGVtLCBlbCApIHtcblxuXHRcdC8vIGlzSGlkZGVuV2l0aGluVHJlZSBtaWdodCBiZSBjYWxsZWQgZnJvbSBqUXVlcnkjZmlsdGVyIGZ1bmN0aW9uO1xuXHRcdC8vIGluIHRoYXQgY2FzZSwgZWxlbWVudCB3aWxsIGJlIHNlY29uZCBhcmd1bWVudFxuXHRcdGVsZW0gPSBlbCB8fCBlbGVtO1xuXG5cdFx0Ly8gSW5saW5lIHN0eWxlIHRydW1wcyBhbGxcblx0XHRyZXR1cm4gZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fFxuXHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmXG5cblx0XHRcdC8vIE90aGVyd2lzZSwgY2hlY2sgY29tcHV0ZWQgc3R5bGVcblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MyAtIDQ1XG5cdFx0XHQvLyBEaXNjb25uZWN0ZWQgZWxlbWVudHMgY2FuIGhhdmUgY29tcHV0ZWQgZGlzcGxheTogbm9uZSwgc28gZmlyc3QgY29uZmlybSB0aGF0IGVsZW0gaXNcblx0XHRcdC8vIGluIHRoZSBkb2N1bWVudC5cblx0XHRcdGlzQXR0YWNoZWQoIGVsZW0gKSAmJlxuXG5cdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApID09PSBcIm5vbmVcIjtcblx0fTtcblxuXG5cbmZ1bmN0aW9uIGFkanVzdENTUyggZWxlbSwgcHJvcCwgdmFsdWVQYXJ0cywgdHdlZW4gKSB7XG5cdHZhciBhZGp1c3RlZCwgc2NhbGUsXG5cdFx0bWF4SXRlcmF0aW9ucyA9IDIwLFxuXHRcdGN1cnJlbnRWYWx1ZSA9IHR3ZWVuID9cblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdHdlZW4uY3VyKCk7XG5cdFx0XHR9IDpcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5LmNzcyggZWxlbSwgcHJvcCwgXCJcIiApO1xuXHRcdFx0fSxcblx0XHRpbml0aWFsID0gY3VycmVudFZhbHVlKCksXG5cdFx0dW5pdCA9IHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0c1sgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApLFxuXG5cdFx0Ly8gU3RhcnRpbmcgdmFsdWUgY29tcHV0YXRpb24gaXMgcmVxdWlyZWQgZm9yIHBvdGVudGlhbCB1bml0IG1pc21hdGNoZXNcblx0XHRpbml0aWFsSW5Vbml0ID0gZWxlbS5ub2RlVHlwZSAmJlxuXHRcdFx0KCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gfHwgdW5pdCAhPT0gXCJweFwiICYmICtpbml0aWFsICkgJiZcblx0XHRcdHJjc3NOdW0uZXhlYyggalF1ZXJ5LmNzcyggZWxlbSwgcHJvcCApICk7XG5cblx0aWYgKCBpbml0aWFsSW5Vbml0ICYmIGluaXRpYWxJblVuaXRbIDMgXSAhPT0gdW5pdCApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD01NFxuXHRcdC8vIEhhbHZlIHRoZSBpdGVyYXRpb24gdGFyZ2V0IHZhbHVlIHRvIHByZXZlbnQgaW50ZXJmZXJlbmNlIGZyb20gQ1NTIHVwcGVyIGJvdW5kcyAoZ2gtMjE0NClcblx0XHRpbml0aWFsID0gaW5pdGlhbCAvIDI7XG5cblx0XHQvLyBUcnVzdCB1bml0cyByZXBvcnRlZCBieSBqUXVlcnkuY3NzXG5cdFx0dW5pdCA9IHVuaXQgfHwgaW5pdGlhbEluVW5pdFsgMyBdO1xuXG5cdFx0Ly8gSXRlcmF0aXZlbHkgYXBwcm94aW1hdGUgZnJvbSBhIG5vbnplcm8gc3RhcnRpbmcgcG9pbnRcblx0XHRpbml0aWFsSW5Vbml0ID0gK2luaXRpYWwgfHwgMTtcblxuXHRcdHdoaWxlICggbWF4SXRlcmF0aW9ucy0tICkge1xuXG5cdFx0XHQvLyBFdmFsdWF0ZSBhbmQgdXBkYXRlIG91ciBiZXN0IGd1ZXNzIChkb3VibGluZyBndWVzc2VzIHRoYXQgemVybyBvdXQpLlxuXHRcdFx0Ly8gRmluaXNoIGlmIHRoZSBzY2FsZSBlcXVhbHMgb3IgY3Jvc3NlcyAxIChtYWtpbmcgdGhlIG9sZCpuZXcgcHJvZHVjdCBub24tcG9zaXRpdmUpLlxuXHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCApO1xuXHRcdFx0aWYgKCAoIDEgLSBzY2FsZSApICogKCAxIC0gKCBzY2FsZSA9IGN1cnJlbnRWYWx1ZSgpIC8gaW5pdGlhbCB8fCAwLjUgKSApIDw9IDAgKSB7XG5cdFx0XHRcdG1heEl0ZXJhdGlvbnMgPSAwO1xuXHRcdFx0fVxuXHRcdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgLyBzY2FsZTtcblxuXHRcdH1cblxuXHRcdGluaXRpYWxJblVuaXQgPSBpbml0aWFsSW5Vbml0ICogMjtcblx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0ICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgd2UgdXBkYXRlIHRoZSB0d2VlbiBwcm9wZXJ0aWVzIGxhdGVyIG9uXG5cdFx0dmFsdWVQYXJ0cyA9IHZhbHVlUGFydHMgfHwgW107XG5cdH1cblxuXHRpZiAoIHZhbHVlUGFydHMgKSB7XG5cdFx0aW5pdGlhbEluVW5pdCA9ICtpbml0aWFsSW5Vbml0IHx8ICtpbml0aWFsIHx8IDA7XG5cblx0XHQvLyBBcHBseSByZWxhdGl2ZSBvZmZzZXQgKCs9Ly09KSBpZiBzcGVjaWZpZWRcblx0XHRhZGp1c3RlZCA9IHZhbHVlUGFydHNbIDEgXSA/XG5cdFx0XHRpbml0aWFsSW5Vbml0ICsgKCB2YWx1ZVBhcnRzWyAxIF0gKyAxICkgKiB2YWx1ZVBhcnRzWyAyIF0gOlxuXHRcdFx0K3ZhbHVlUGFydHNbIDIgXTtcblx0XHRpZiAoIHR3ZWVuICkge1xuXHRcdFx0dHdlZW4udW5pdCA9IHVuaXQ7XG5cdFx0XHR0d2Vlbi5zdGFydCA9IGluaXRpYWxJblVuaXQ7XG5cdFx0XHR0d2Vlbi5lbmQgPSBhZGp1c3RlZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFkanVzdGVkO1xufVxuXG5cbnZhciBkZWZhdWx0RGlzcGxheU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0RGlzcGxheSggZWxlbSApIHtcblx0dmFyIHRlbXAsXG5cdFx0ZG9jID0gZWxlbS5vd25lckRvY3VtZW50LFxuXHRcdG5vZGVOYW1lID0gZWxlbS5ub2RlTmFtZSxcblx0XHRkaXNwbGF5ID0gZGVmYXVsdERpc3BsYXlNYXBbIG5vZGVOYW1lIF07XG5cblx0aWYgKCBkaXNwbGF5ICkge1xuXHRcdHJldHVybiBkaXNwbGF5O1xuXHR9XG5cblx0dGVtcCA9IGRvYy5ib2R5LmFwcGVuZENoaWxkKCBkb2MuY3JlYXRlRWxlbWVudCggbm9kZU5hbWUgKSApO1xuXHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggdGVtcCwgXCJkaXNwbGF5XCIgKTtcblxuXHR0ZW1wLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHRlbXAgKTtcblxuXHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdGRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdH1cblx0ZGVmYXVsdERpc3BsYXlNYXBbIG5vZGVOYW1lIF0gPSBkaXNwbGF5O1xuXG5cdHJldHVybiBkaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBzaG93SGlkZSggZWxlbWVudHMsIHNob3cgKSB7XG5cdHZhciBkaXNwbGF5LCBlbGVtLFxuXHRcdHZhbHVlcyA9IFtdLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBlbGVtZW50cy5sZW5ndGg7XG5cblx0Ly8gRGV0ZXJtaW5lIG5ldyBkaXNwbGF5IHZhbHVlIGZvciBlbGVtZW50cyB0aGF0IG5lZWQgdG8gY2hhbmdlXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0ZWxlbSA9IGVsZW1lbnRzWyBpbmRleCBdO1xuXHRcdGlmICggIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRkaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5O1xuXHRcdGlmICggc2hvdyApIHtcblxuXHRcdFx0Ly8gU2luY2Ugd2UgZm9yY2UgdmlzaWJpbGl0eSB1cG9uIGNhc2NhZGUtaGlkZGVuIGVsZW1lbnRzLCBhbiBpbW1lZGlhdGUgKGFuZCBzbG93KVxuXHRcdFx0Ly8gY2hlY2sgaXMgcmVxdWlyZWQgaW4gdGhpcyBmaXJzdCBsb29wIHVubGVzcyB3ZSBoYXZlIGEgbm9uZW1wdHkgZGlzcGxheSB2YWx1ZSAoZWl0aGVyXG5cdFx0XHQvLyBpbmxpbmUgb3IgYWJvdXQtdG8tYmUtcmVzdG9yZWQpXG5cdFx0XHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZGlzcGxheVwiICkgfHwgbnVsbDtcblx0XHRcdFx0aWYgKCAhdmFsdWVzWyBpbmRleCBdICkge1xuXHRcdFx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICggZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmIGlzSGlkZGVuV2l0aGluVHJlZSggZWxlbSApICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBnZXREZWZhdWx0RGlzcGxheSggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIGRpc3BsYXkgIT09IFwibm9uZVwiICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBcIm5vbmVcIjtcblxuXHRcdFx0XHQvLyBSZW1lbWJlciB3aGF0IHdlJ3JlIG92ZXJ3cml0aW5nXG5cdFx0XHRcdGRhdGFQcml2LnNldCggZWxlbSwgXCJkaXNwbGF5XCIsIGRpc3BsYXkgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGRpc3BsYXkgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2Vjb25kIGxvb3AgdG8gYXZvaWQgY29uc3RhbnQgcmVmbG93XG5cdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0aWYgKCB2YWx1ZXNbIGluZGV4IF0gIT0gbnVsbCApIHtcblx0XHRcdGVsZW1lbnRzWyBpbmRleCBdLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZXNbIGluZGV4IF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRzO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcywgdHJ1ZSApO1xuXHR9LFxuXHRoaWRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2hvd0hpZGUoIHRoaXMgKTtcblx0fSxcblx0dG9nZ2xlOiBmdW5jdGlvbiggc3RhdGUgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGUgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdFx0cmV0dXJuIHN0YXRlID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggaXNIaWRkZW5XaXRoaW5UcmVlKCB0aGlzICkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcbnZhciByY2hlY2thYmxlVHlwZSA9ICggL14oPzpjaGVja2JveHxyYWRpbykkL2kgKTtcblxudmFyIHJ0YWdOYW1lID0gKCAvPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2kgKTtcblxudmFyIHJzY3JpcHRUeXBlID0gKCAvXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pICk7XG5cblxuXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG5cdFx0ZGl2ID0gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApLFxuXHRcdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seVxuXHQvLyBDaGVjayBzdGF0ZSBsb3N0IGlmIHRoZSBuYW1lIGlzIHNldCAodHJhYy0xMTIxNylcblx0Ly8gU3VwcG9ydDogV2luZG93cyBXZWIgQXBwcyAoV1dBKVxuXHQvLyBgbmFtZWAgYW5kIGB0eXBlYCBtdXN0IHVzZSAuc2V0QXR0cmlidXRlIGZvciBXV0EgKHRyYWMtMTQ5MDEpXG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwicmFkaW9cIiApO1xuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIiApO1xuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcInRcIiApO1xuXG5cdGRpdi5hcHBlbmRDaGlsZCggaW5wdXQgKTtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4xIG9ubHlcblx0Ly8gT2xkZXIgV2ViS2l0IGRvZXNuJ3QgY2xvbmUgY2hlY2tlZCBzdGF0ZSBjb3JyZWN0bHkgaW4gZnJhZ21lbnRzXG5cdHN1cHBvcnQuY2hlY2tDbG9uZSA9IGRpdi5jbG9uZU5vZGUoIHRydWUgKS5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuY2hlY2tlZDtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0Ly8gTWFrZSBzdXJlIHRleHRhcmVhIChhbmQgY2hlY2tib3gpIGRlZmF1bHRWYWx1ZSBpcyBwcm9wZXJseSBjbG9uZWRcblx0ZGl2LmlubmVySFRNTCA9IFwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiO1xuXHRzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkID0gISFkaXYuY2xvbmVOb2RlKCB0cnVlICkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZTtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHQvLyBJRSA8PTkgcmVwbGFjZXMgPG9wdGlvbj4gdGFncyB3aXRoIHRoZWlyIGNvbnRlbnRzIHdoZW4gaW5zZXJ0ZWQgb3V0c2lkZSBvZlxuXHQvLyB0aGUgc2VsZWN0IGVsZW1lbnQuXG5cdGRpdi5pbm5lckhUTUwgPSBcIjxvcHRpb24+PC9vcHRpb24+XCI7XG5cdHN1cHBvcnQub3B0aW9uID0gISFkaXYubGFzdENoaWxkO1xufSApKCk7XG5cblxuLy8gV2UgaGF2ZSB0byBjbG9zZSB0aGVzZSB0YWdzIHRvIHN1cHBvcnQgWEhUTUwgKHRyYWMtMTMyMDApXG52YXIgd3JhcE1hcCA9IHtcblxuXHQvLyBYSFRNTCBwYXJzZXJzIGRvIG5vdCBtYWdpY2FsbHkgaW5zZXJ0IGVsZW1lbnRzIGluIHRoZVxuXHQvLyBzYW1lIHdheSB0aGF0IHRhZyBzb3VwIHBhcnNlcnMgZG8uIFNvIHdlIGNhbm5vdCBzaG9ydGVuXG5cdC8vIHRoaXMgYnkgb21pdHRpbmcgPHRib2R5PiBvciBvdGhlciByZXF1aXJlZCBlbGVtZW50cy5cblx0dGhlYWQ6IFsgMSwgXCI8dGFibGU+XCIsIFwiPC90YWJsZT5cIiBdLFxuXHRjb2w6IFsgMiwgXCI8dGFibGU+PGNvbGdyb3VwPlwiLCBcIjwvY29sZ3JvdXA+PC90YWJsZT5cIiBdLFxuXHR0cjogWyAyLCBcIjx0YWJsZT48dGJvZHk+XCIsIFwiPC90Ym9keT48L3RhYmxlPlwiIF0sXG5cdHRkOiBbIDMsIFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsIFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCIgXSxcblxuXHRfZGVmYXVsdDogWyAwLCBcIlwiLCBcIlwiIF1cbn07XG5cbndyYXBNYXAudGJvZHkgPSB3cmFwTWFwLnRmb290ID0gd3JhcE1hcC5jb2xncm91cCA9IHdyYXBNYXAuY2FwdGlvbiA9IHdyYXBNYXAudGhlYWQ7XG53cmFwTWFwLnRoID0gd3JhcE1hcC50ZDtcblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbmlmICggIXN1cHBvcnQub3B0aW9uICkge1xuXHR3cmFwTWFwLm9wdGdyb3VwID0gd3JhcE1hcC5vcHRpb24gPSBbIDEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiIF07XG59XG5cblxuZnVuY3Rpb24gZ2V0QWxsKCBjb250ZXh0LCB0YWcgKSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHQvLyBVc2UgdHlwZW9mIHRvIGF2b2lkIHplcm8tYXJndW1lbnQgbWV0aG9kIGludm9jYXRpb24gb24gaG9zdCBvYmplY3RzICh0cmFjLTE1MTUxKVxuXHR2YXIgcmV0O1xuXG5cdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0cmV0ID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnIHx8IFwiKlwiICk7XG5cblx0fSBlbHNlIGlmICggdHlwZW9mIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRyZXQgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyB8fCBcIipcIiApO1xuXG5cdH0gZWxzZSB7XG5cdFx0cmV0ID0gW107XG5cdH1cblxuXHRpZiAoIHRhZyA9PT0gdW5kZWZpbmVkIHx8IHRhZyAmJiBub2RlTmFtZSggY29udGV4dCwgdGFnICkgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5tZXJnZSggWyBjb250ZXh0IF0sIHJldCApO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn1cblxuXG4vLyBNYXJrIHNjcmlwdHMgYXMgaGF2aW5nIGFscmVhZHkgYmVlbiBldmFsdWF0ZWRcbmZ1bmN0aW9uIHNldEdsb2JhbEV2YWwoIGVsZW1zLCByZWZFbGVtZW50cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGRhdGFQcml2LnNldChcblx0XHRcdGVsZW1zWyBpIF0sXG5cdFx0XHRcImdsb2JhbEV2YWxcIixcblx0XHRcdCFyZWZFbGVtZW50cyB8fCBkYXRhUHJpdi5nZXQoIHJlZkVsZW1lbnRzWyBpIF0sIFwiZ2xvYmFsRXZhbFwiIClcblx0XHQpO1xuXHR9XG59XG5cblxudmFyIHJodG1sID0gLzx8JiM/XFx3KzsvO1xuXG5mdW5jdGlvbiBidWlsZEZyYWdtZW50KCBlbGVtcywgY29udGV4dCwgc2NyaXB0cywgc2VsZWN0aW9uLCBpZ25vcmVkICkge1xuXHR2YXIgZWxlbSwgdG1wLCB0YWcsIHdyYXAsIGF0dGFjaGVkLCBqLFxuXHRcdGZyYWdtZW50ID0gY29udGV4dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG5cdFx0bm9kZXMgPSBbXSxcblx0XHRpID0gMCxcblx0XHRsID0gZWxlbXMubGVuZ3RoO1xuXG5cdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRlbGVtID0gZWxlbXNbIGkgXTtcblxuXHRcdGlmICggZWxlbSB8fCBlbGVtID09PSAwICkge1xuXG5cdFx0XHQvLyBBZGQgbm9kZXMgZGlyZWN0bHlcblx0XHRcdGlmICggdG9UeXBlKCBlbGVtICkgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBub2RlcywgZWxlbS5ub2RlVHlwZSA/IFsgZWxlbSBdIDogZWxlbSApO1xuXG5cdFx0XHQvLyBDb252ZXJ0IG5vbi1odG1sIGludG8gYSB0ZXh0IG5vZGVcblx0XHRcdH0gZWxzZSBpZiAoICFyaHRtbC50ZXN0KCBlbGVtICkgKSB7XG5cdFx0XHRcdG5vZGVzLnB1c2goIGNvbnRleHQuY3JlYXRlVGV4dE5vZGUoIGVsZW0gKSApO1xuXG5cdFx0XHQvLyBDb252ZXJ0IGh0bWwgaW50byBET00gbm9kZXNcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRtcCA9IHRtcCB8fCBmcmFnbWVudC5hcHBlbmRDaGlsZCggY29udGV4dC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKTtcblxuXHRcdFx0XHQvLyBEZXNlcmlhbGl6ZSBhIHN0YW5kYXJkIHJlcHJlc2VudGF0aW9uXG5cdFx0XHRcdHRhZyA9ICggcnRhZ05hbWUuZXhlYyggZWxlbSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR3cmFwID0gd3JhcE1hcFsgdGFnIF0gfHwgd3JhcE1hcC5fZGVmYXVsdDtcblx0XHRcdFx0dG1wLmlubmVySFRNTCA9IHdyYXBbIDEgXSArIGpRdWVyeS5odG1sUHJlZmlsdGVyKCBlbGVtICkgKyB3cmFwWyAyIF07XG5cblx0XHRcdFx0Ly8gRGVzY2VuZCB0aHJvdWdoIHdyYXBwZXJzIHRvIHRoZSByaWdodCBjb250ZW50XG5cdFx0XHRcdGogPSB3cmFwWyAwIF07XG5cdFx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRcdHRtcCA9IHRtcC5sYXN0Q2hpbGQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCB0bXAuY2hpbGROb2RlcyApO1xuXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHRoZSB0b3AtbGV2ZWwgY29udGFpbmVyXG5cdFx0XHRcdHRtcCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRcdFx0Ly8gRW5zdXJlIHRoZSBjcmVhdGVkIG5vZGVzIGFyZSBvcnBoYW5lZCAodHJhYy0xMjM5Milcblx0XHRcdFx0dG1wLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgd3JhcHBlciBmcm9tIGZyYWdtZW50XG5cdGZyYWdtZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuXHRpID0gMDtcblx0d2hpbGUgKCAoIGVsZW0gPSBub2Rlc1sgaSsrIF0gKSApIHtcblxuXHRcdC8vIFNraXAgZWxlbWVudHMgYWxyZWFkeSBpbiB0aGUgY29udGV4dCBjb2xsZWN0aW9uICh0cmFjLTQwODcpXG5cdFx0aWYgKCBzZWxlY3Rpb24gJiYgalF1ZXJ5LmluQXJyYXkoIGVsZW0sIHNlbGVjdGlvbiApID4gLTEgKSB7XG5cdFx0XHRpZiAoIGlnbm9yZWQgKSB7XG5cdFx0XHRcdGlnbm9yZWQucHVzaCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YXR0YWNoZWQgPSBpc0F0dGFjaGVkKCBlbGVtICk7XG5cblx0XHQvLyBBcHBlbmQgdG8gZnJhZ21lbnRcblx0XHR0bXAgPSBnZXRBbGwoIGZyYWdtZW50LmFwcGVuZENoaWxkKCBlbGVtICksIFwic2NyaXB0XCIgKTtcblxuXHRcdC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3Rvcnlcblx0XHRpZiAoIGF0dGFjaGVkICkge1xuXHRcdFx0c2V0R2xvYmFsRXZhbCggdG1wICk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FwdHVyZSBleGVjdXRhYmxlc1xuXHRcdGlmICggc2NyaXB0cyApIHtcblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoIGVsZW0gPSB0bXBbIGorKyBdICkgKSB7XG5cdFx0XHRcdGlmICggcnNjcmlwdFR5cGUudGVzdCggZWxlbS50eXBlIHx8IFwiXCIgKSApIHtcblx0XHRcdFx0XHRzY3JpcHRzLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmcmFnbWVudDtcbn1cblxuXG52YXIgcnR5cGVuYW1lc3BhY2UgPSAvXihbXi5dKikoPzpcXC4oLispfCkvO1xuXG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gb24oIGVsZW0sIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIG9uZSApIHtcblx0dmFyIG9yaWdGbiwgdHlwZTtcblxuXHQvLyBUeXBlcyBjYW4gYmUgYSBtYXAgb2YgdHlwZXMvaGFuZGxlcnNcblx0aWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHQvLyAoIHR5cGVzLU9iamVjdCwgc2VsZWN0b3IsIGRhdGEgKVxuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLU9iamVjdCwgZGF0YSApXG5cdFx0XHRkYXRhID0gZGF0YSB8fCBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0b24oIGVsZW0sIHR5cGUsIHNlbGVjdG9yLCBkYXRhLCB0eXBlc1sgdHlwZSBdLCBvbmUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsZW07XG5cdH1cblxuXHRpZiAoIGRhdGEgPT0gbnVsbCAmJiBmbiA9PSBudWxsICkge1xuXG5cdFx0Ly8gKCB0eXBlcywgZm4gKVxuXHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0ZGF0YSA9IHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCBmbiA9PSBudWxsICkge1xuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLCBzZWxlY3RvciwgZm4gKVxuXHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyAoIHR5cGVzLCBkYXRhLCBmbiApXG5cdFx0XHRmbiA9IGRhdGE7XG5cdFx0XHRkYXRhID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0Zm4gPSByZXR1cm5GYWxzZTtcblx0fSBlbHNlIGlmICggIWZuICkge1xuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0aWYgKCBvbmUgPT09IDEgKSB7XG5cdFx0b3JpZ0ZuID0gZm47XG5cdFx0Zm4gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vIENhbiB1c2UgYW4gZW1wdHkgc2V0LCBzaW5jZSBldmVudCBjb250YWlucyB0aGUgaW5mb1xuXHRcdFx0alF1ZXJ5KCkub2ZmKCBldmVudCApO1xuXHRcdFx0cmV0dXJuIG9yaWdGbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0fTtcblxuXHRcdC8vIFVzZSBzYW1lIGd1aWQgc28gY2FsbGVyIGNhbiByZW1vdmUgdXNpbmcgb3JpZ0ZuXG5cdFx0Zm4uZ3VpZCA9IG9yaWdGbi5ndWlkIHx8ICggb3JpZ0ZuLmd1aWQgPSBqUXVlcnkuZ3VpZCsrICk7XG5cdH1cblx0cmV0dXJuIGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0alF1ZXJ5LmV2ZW50LmFkZCggdGhpcywgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3RvciApO1xuXHR9ICk7XG59XG5cbi8qXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBtYW5hZ2luZyBldmVudHMgLS0gbm90IHBhcnQgb2YgdGhlIHB1YmxpYyBpbnRlcmZhY2UuXG4gKiBQcm9wcyB0byBEZWFuIEVkd2FyZHMnIGFkZEV2ZW50IGxpYnJhcnkgZm9yIG1hbnkgb2YgdGhlIGlkZWFzLlxuICovXG5qUXVlcnkuZXZlbnQgPSB7XG5cblx0Z2xvYmFsOiB7fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlcywgaGFuZGxlciwgZGF0YSwgc2VsZWN0b3IgKSB7XG5cblx0XHR2YXIgaGFuZGxlT2JqSW4sIGV2ZW50SGFuZGxlLCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHQvLyBPbmx5IGF0dGFjaCBldmVudHMgdG8gb2JqZWN0cyB0aGF0IGFjY2VwdCBkYXRhXG5cdFx0aWYgKCAhYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxuXHRcdGlmICggaGFuZGxlci5oYW5kbGVyICkge1xuXHRcdFx0aGFuZGxlT2JqSW4gPSBoYW5kbGVyO1xuXHRcdFx0aGFuZGxlciA9IGhhbmRsZU9iakluLmhhbmRsZXI7XG5cdFx0XHRzZWxlY3RvciA9IGhhbmRsZU9iakluLnNlbGVjdG9yO1xuXHRcdH1cblxuXHRcdC8vIEVuc3VyZSB0aGF0IGludmFsaWQgc2VsZWN0b3JzIHRocm93IGV4Y2VwdGlvbnMgYXQgYXR0YWNoIHRpbWVcblx0XHQvLyBFdmFsdWF0ZSBhZ2FpbnN0IGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGVsZW0gaXMgYSBub24tZWxlbWVudCBub2RlIChlLmcuLCBkb2N1bWVudClcblx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBkb2N1bWVudEVsZW1lbnQsIHNlbGVjdG9yICk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgdGhlIGhhbmRsZXIgaGFzIGEgdW5pcXVlIElELCB1c2VkIHRvIGZpbmQvcmVtb3ZlIGl0IGxhdGVyXG5cdFx0aWYgKCAhaGFuZGxlci5ndWlkICkge1xuXHRcdFx0aGFuZGxlci5ndWlkID0galF1ZXJ5Lmd1aWQrKztcblx0XHR9XG5cblx0XHQvLyBJbml0IHRoZSBlbGVtZW50J3MgZXZlbnQgc3RydWN0dXJlIGFuZCBtYWluIGhhbmRsZXIsIGlmIHRoaXMgaXMgdGhlIGZpcnN0XG5cdFx0aWYgKCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcblx0XHRcdGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyA9IE9iamVjdC5jcmVhdGUoIG51bGwgKTtcblx0XHR9XG5cdFx0aWYgKCAhKCBldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSApICkge1xuXHRcdFx0ZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgPSBmdW5jdGlvbiggZSApIHtcblxuXHRcdFx0XHQvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuXHRcdFx0XHQvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgIT09IGUudHlwZSA/XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmRpc3BhdGNoLmFwcGx5KCBlbGVtLCBhcmd1bWVudHMgKSA6IHVuZGVmaW5lZDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHQvLyBJZiBzZWxlY3RvciBkZWZpbmVkLCBkZXRlcm1pbmUgc3BlY2lhbCBldmVudCBhcGkgdHlwZSwgb3RoZXJ3aXNlIGdpdmVuIHR5cGVcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNwZWNpYWwgYmFzZWQgb24gbmV3bHkgcmVzZXQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKCB7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdG9yaWdUeXBlOiBvcmlnVHlwZSxcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0aGFuZGxlcjogaGFuZGxlcixcblx0XHRcdFx0Z3VpZDogaGFuZGxlci5ndWlkLFxuXHRcdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXG5cdFx0XHRcdG5lZWRzQ29udGV4dDogc2VsZWN0b3IgJiYgalF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICksXG5cdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApXG5cdFx0XHR9LCBoYW5kbGVPYmpJbiApO1xuXG5cdFx0XHQvLyBJbml0IHRoZSBldmVudCBoYW5kbGVyIHF1ZXVlIGlmIHdlJ3JlIHRoZSBmaXJzdFxuXHRcdFx0aWYgKCAhKCBoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdICkgKSB7XG5cdFx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gPSBbXTtcblx0XHRcdFx0aGFuZGxlcnMuZGVsZWdhdGVDb3VudCA9IDA7XG5cblx0XHRcdFx0Ly8gT25seSB1c2UgYWRkRXZlbnRMaXN0ZW5lciBpZiB0aGUgc3BlY2lhbCBldmVudHMgaGFuZGxlciByZXR1cm5zIGZhbHNlXG5cdFx0XHRcdGlmICggIXNwZWNpYWwuc2V0dXAgfHxcblx0XHRcdFx0XHRzcGVjaWFsLnNldHVwLmNhbGwoIGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGV2ZW50SGFuZGxlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3BlY2lhbC5hZGQgKSB7XG5cdFx0XHRcdHNwZWNpYWwuYWRkLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXG5cdFx0XHRcdGlmICggIWhhbmRsZU9iai5oYW5kbGVyLmd1aWQgKSB7XG5cdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgdG8gdGhlIGVsZW1lbnQncyBoYW5kbGVyIGxpc3QsIGRlbGVnYXRlcyBpbiBmcm9udFxuXHRcdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnRzIGhhdmUgZXZlciBiZWVuIHVzZWQsIGZvciBldmVudCBvcHRpbWl6YXRpb25cblx0XHRcdGpRdWVyeS5ldmVudC5nbG9iYWxbIHR5cGUgXSA9IHRydWU7XG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gRGV0YWNoIGFuIGV2ZW50IG9yIHNldCBvZiBldmVudHMgZnJvbSBhbiBlbGVtZW50XG5cdHJlbW92ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3RvciwgbWFwcGVkVHlwZXMgKSB7XG5cblx0XHR2YXIgaiwgb3JpZ0NvdW50LCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuaGFzRGF0YSggZWxlbSApICYmIGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0aWYgKCAhZWxlbURhdGEgfHwgISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gT25jZSBmb3IgZWFjaCB0eXBlLm5hbWVzcGFjZSBpbiB0eXBlczsgdHlwZSBtYXkgYmUgb21pdHRlZFxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKyB0eXBlc1sgdCBdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gfHwgW107XG5cdFx0XHR0bXAgPSB0bXBbIDIgXSAmJlxuXHRcdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKCBcIlxcXFwuKD86LipcXFxcLnwpXCIgKSArIFwiKFxcXFwufCQpXCIgKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG1hdGNoaW5nIGV2ZW50c1xuXHRcdFx0b3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaiBdO1xuXG5cdFx0XHRcdGlmICggKCBtYXBwZWRUeXBlcyB8fCBvcmlnVHlwZSA9PT0gaGFuZGxlT2JqLm9yaWdUeXBlICkgJiZcblx0XHRcdFx0XHQoICFoYW5kbGVyIHx8IGhhbmRsZXIuZ3VpZCA9PT0gaGFuZGxlT2JqLmd1aWQgKSAmJlxuXHRcdFx0XHRcdCggIXRtcCB8fCB0bXAudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkgJiZcblx0XHRcdFx0XHQoICFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gaGFuZGxlT2JqLnNlbGVjdG9yIHx8XG5cdFx0XHRcdFx0XHRzZWxlY3RvciA9PT0gXCIqKlwiICYmIGhhbmRsZU9iai5zZWxlY3RvciApICkge1xuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZSggaiwgMSApO1xuXG5cdFx0XHRcdFx0aWYgKCBoYW5kbGVPYmouc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggc3BlY2lhbC5yZW1vdmUgKSB7XG5cdFx0XHRcdFx0XHRzcGVjaWFsLnJlbW92ZS5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIGdlbmVyaWMgZXZlbnQgaGFuZGxlciBpZiB3ZSByZW1vdmVkIHNvbWV0aGluZyBhbmQgbm8gbW9yZSBoYW5kbGVycyBleGlzdFxuXHRcdFx0Ly8gKGF2b2lkcyBwb3RlbnRpYWwgZm9yIGVuZGxlc3MgcmVjdXJzaW9uIGR1cmluZyByZW1vdmFsIG9mIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMpXG5cdFx0XHRpZiAoIG9yaWdDb3VudCAmJiAhaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRpZiAoICFzcGVjaWFsLnRlYXJkb3duIHx8XG5cdFx0XHRcdFx0c3BlY2lhbC50ZWFyZG93bi5jYWxsKCBlbGVtLCBuYW1lc3BhY2VzLCBlbGVtRGF0YS5oYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGV2ZW50c1sgdHlwZSBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSBkYXRhIGFuZCB0aGUgZXhwYW5kbyBpZiBpdCdzIG5vIGxvbmdlciB1c2VkXG5cdFx0aWYgKCBqUXVlcnkuaXNFbXB0eU9iamVjdCggZXZlbnRzICkgKSB7XG5cdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiaGFuZGxlIGV2ZW50c1wiICk7XG5cdFx0fVxuXHR9LFxuXG5cdGRpc3BhdGNoOiBmdW5jdGlvbiggbmF0aXZlRXZlbnQgKSB7XG5cblx0XHR2YXIgaSwgaiwgcmV0LCBtYXRjaGVkLCBoYW5kbGVPYmosIGhhbmRsZXJRdWV1ZSxcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkoIGFyZ3VtZW50cy5sZW5ndGggKSxcblxuXHRcdFx0Ly8gTWFrZSBhIHdyaXRhYmxlIGpRdWVyeS5FdmVudCBmcm9tIHRoZSBuYXRpdmUgZXZlbnQgb2JqZWN0XG5cdFx0XHRldmVudCA9IGpRdWVyeS5ldmVudC5maXgoIG5hdGl2ZUV2ZW50ICksXG5cblx0XHRcdGhhbmRsZXJzID0gKFxuXHRcdFx0XHRkYXRhUHJpdi5nZXQoIHRoaXMsIFwiZXZlbnRzXCIgKSB8fCBPYmplY3QuY3JlYXRlKCBudWxsIClcblx0XHRcdClbIGV2ZW50LnR5cGUgXSB8fCBbXSxcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgZXZlbnQudHlwZSBdIHx8IHt9O1xuXG5cdFx0Ly8gVXNlIHRoZSBmaXgtZWQgalF1ZXJ5LkV2ZW50IHJhdGhlciB0aGFuIHRoZSAocmVhZC1vbmx5KSBuYXRpdmUgZXZlbnRcblx0XHRhcmdzWyAwIF0gPSBldmVudDtcblxuXHRcdGZvciAoIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0YXJnc1sgaSBdID0gYXJndW1lbnRzWyBpIF07XG5cdFx0fVxuXG5cdFx0ZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0aGlzO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcHJlRGlzcGF0Y2ggaG9vayBmb3IgdGhlIG1hcHBlZCB0eXBlLCBhbmQgbGV0IGl0IGJhaWwgaWYgZGVzaXJlZFxuXHRcdGlmICggc3BlY2lhbC5wcmVEaXNwYXRjaCAmJiBzcGVjaWFsLnByZURpc3BhdGNoLmNhbGwoIHRoaXMsIGV2ZW50ICkgPT09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIERldGVybWluZSBoYW5kbGVyc1xuXHRcdGhhbmRsZXJRdWV1ZSA9IGpRdWVyeS5ldmVudC5oYW5kbGVycy5jYWxsKCB0aGlzLCBldmVudCwgaGFuZGxlcnMgKTtcblxuXHRcdC8vIFJ1biBkZWxlZ2F0ZXMgZmlyc3Q7IHRoZXkgbWF5IHdhbnQgdG8gc3RvcCBwcm9wYWdhdGlvbiBiZW5lYXRoIHVzXG5cdFx0aSA9IDA7XG5cdFx0d2hpbGUgKCAoIG1hdGNoZWQgPSBoYW5kbGVyUXVldWVbIGkrKyBdICkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0ID0gbWF0Y2hlZC5lbGVtO1xuXG5cdFx0XHRqID0gMDtcblx0XHRcdHdoaWxlICggKCBoYW5kbGVPYmogPSBtYXRjaGVkLmhhbmRsZXJzWyBqKysgXSApICYmXG5cdFx0XHRcdCFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXG5cdFx0XHRcdC8vIElmIHRoZSBldmVudCBpcyBuYW1lc3BhY2VkLCB0aGVuIGVhY2ggaGFuZGxlciBpcyBvbmx5IGludm9rZWQgaWYgaXQgaXNcblx0XHRcdFx0Ly8gc3BlY2lhbGx5IHVuaXZlcnNhbCBvciBpdHMgbmFtZXNwYWNlcyBhcmUgYSBzdXBlcnNldCBvZiB0aGUgZXZlbnQncy5cblx0XHRcdFx0aWYgKCAhZXZlbnQucm5hbWVzcGFjZSB8fCBoYW5kbGVPYmoubmFtZXNwYWNlID09PSBmYWxzZSB8fFxuXHRcdFx0XHRcdGV2ZW50LnJuYW1lc3BhY2UudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkge1xuXG5cdFx0XHRcdFx0ZXZlbnQuaGFuZGxlT2JqID0gaGFuZGxlT2JqO1xuXHRcdFx0XHRcdGV2ZW50LmRhdGEgPSBoYW5kbGVPYmouZGF0YTtcblxuXHRcdFx0XHRcdHJldCA9ICggKCBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgaGFuZGxlT2JqLm9yaWdUeXBlIF0gfHwge30gKS5oYW5kbGUgfHxcblx0XHRcdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyICkuYXBwbHkoIG1hdGNoZWQuZWxlbSwgYXJncyApO1xuXG5cdFx0XHRcdFx0aWYgKCByZXQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdGlmICggKCBldmVudC5yZXN1bHQgPSByZXQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGwgdGhlIHBvc3REaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGVcblx0XHRpZiAoIHNwZWNpYWwucG9zdERpc3BhdGNoICkge1xuXHRcdFx0c3BlY2lhbC5wb3N0RGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQucmVzdWx0O1xuXHR9LFxuXG5cdGhhbmRsZXJzOiBmdW5jdGlvbiggZXZlbnQsIGhhbmRsZXJzICkge1xuXHRcdHZhciBpLCBoYW5kbGVPYmosIHNlbCwgbWF0Y2hlZEhhbmRsZXJzLCBtYXRjaGVkU2VsZWN0b3JzLFxuXHRcdFx0aGFuZGxlclF1ZXVlID0gW10sXG5cdFx0XHRkZWxlZ2F0ZUNvdW50ID0gaGFuZGxlcnMuZGVsZWdhdGVDb3VudCxcblx0XHRcdGN1ciA9IGV2ZW50LnRhcmdldDtcblxuXHRcdC8vIEZpbmQgZGVsZWdhdGUgaGFuZGxlcnNcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05XG5cdFx0XHQvLyBCbGFjay1ob2xlIFNWRyA8dXNlPiBpbnN0YW5jZSB0cmVlcyAodHJhYy0xMzE4MClcblx0XHRcdGN1ci5ub2RlVHlwZSAmJlxuXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDJcblx0XHRcdC8vIFN1cHByZXNzIHNwZWMtdmlvbGF0aW5nIGNsaWNrcyBpbmRpY2F0aW5nIGEgbm9uLXByaW1hcnkgcG9pbnRlciBidXR0b24gKHRyYWMtMzg2MSlcblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50LXR5cGUtY2xpY2tcblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExIG9ubHlcblx0XHRcdC8vIC4uLmJ1dCBub3QgYXJyb3cga2V5IFwiY2xpY2tzXCIgb2YgcmFkaW8gaW5wdXRzLCB3aGljaCBjYW4gaGF2ZSBgYnV0dG9uYCAtMSAoZ2gtMjM0Mylcblx0XHRcdCEoIGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIiAmJiBldmVudC5idXR0b24gPj0gMSApICkge1xuXG5cdFx0XHRmb3IgKCA7IGN1ciAhPT0gdGhpczsgY3VyID0gY3VyLnBhcmVudE5vZGUgfHwgdGhpcyApIHtcblxuXHRcdFx0XHQvLyBEb24ndCBjaGVjayBub24tZWxlbWVudHMgKHRyYWMtMTMyMDgpXG5cdFx0XHRcdC8vIERvbid0IHByb2Nlc3MgY2xpY2tzIG9uIGRpc2FibGVkIGVsZW1lbnRzICh0cmFjLTY5MTEsIHRyYWMtODE2NSwgdHJhYy0xMTM4MiwgdHJhYy0xMTc2NClcblx0XHRcdFx0aWYgKCBjdXIubm9kZVR5cGUgPT09IDEgJiYgISggZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGN1ci5kaXNhYmxlZCA9PT0gdHJ1ZSApICkge1xuXHRcdFx0XHRcdG1hdGNoZWRIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdG1hdGNoZWRTZWxlY3RvcnMgPSB7fTtcblx0XHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGRlbGVnYXRlQ291bnQ7IGkrKyApIHtcblx0XHRcdFx0XHRcdGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBpIF07XG5cblx0XHRcdFx0XHRcdC8vIERvbid0IGNvbmZsaWN0IHdpdGggT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzICh0cmFjLTEzMjAzKVxuXHRcdFx0XHRcdFx0c2VsID0gaGFuZGxlT2JqLnNlbGVjdG9yICsgXCIgXCI7XG5cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gPSBoYW5kbGVPYmoubmVlZHNDb250ZXh0ID9cblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoIHNlbCwgdGhpcyApLmluZGV4KCBjdXIgKSA+IC0xIDpcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZmluZCggc2VsLCB0aGlzLCBudWxsLCBbIGN1ciBdICkubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSApIHtcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzLnB1c2goIGhhbmRsZU9iaiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIG1hdGNoZWRIYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyUXVldWUucHVzaCggeyBlbGVtOiBjdXIsIGhhbmRsZXJzOiBtYXRjaGVkSGFuZGxlcnMgfSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFkZCB0aGUgcmVtYWluaW5nIChkaXJlY3RseS1ib3VuZCkgaGFuZGxlcnNcblx0XHRjdXIgPSB0aGlzO1xuXHRcdGlmICggZGVsZWdhdGVDb3VudCA8IGhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdGhhbmRsZXJRdWV1ZS5wdXNoKCB7IGVsZW06IGN1ciwgaGFuZGxlcnM6IGhhbmRsZXJzLnNsaWNlKCBkZWxlZ2F0ZUNvdW50ICkgfSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBoYW5kbGVyUXVldWU7XG5cdH0sXG5cblx0YWRkUHJvcDogZnVuY3Rpb24oIG5hbWUsIGhvb2sgKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBqUXVlcnkuRXZlbnQucHJvdG90eXBlLCBuYW1lLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXG5cdFx0XHRnZXQ6IGlzRnVuY3Rpb24oIGhvb2sgKSA/XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhvb2soIHRoaXMub3JpZ2luYWxFdmVudCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFsgbmFtZSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgbmFtZSwge1xuXHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGZpeDogZnVuY3Rpb24oIG9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0cmV0dXJuIG9yaWdpbmFsRXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0b3JpZ2luYWxFdmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCBvcmlnaW5hbEV2ZW50ICk7XG5cdH0sXG5cblx0c3BlY2lhbDoge1xuXHRcdGxvYWQ6IHtcblxuXHRcdFx0Ly8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxuXHRcdFx0bm9CdWJibGU6IHRydWVcblx0XHR9LFxuXHRcdGNsaWNrOiB7XG5cblx0XHRcdC8vIFV0aWxpemUgbmF0aXZlIGV2ZW50IHRvIGVuc3VyZSBjb3JyZWN0IHN0YXRlIGZvciBjaGVja2FibGUgaW5wdXRzXG5cdFx0XHRzZXR1cDogZnVuY3Rpb24oIGRhdGEgKSB7XG5cblx0XHRcdFx0Ly8gRm9yIG11dHVhbCBjb21wcmVzc2liaWxpdHkgd2l0aCBfZGVmYXVsdCwgcmVwbGFjZSBgdGhpc2AgYWNjZXNzIHdpdGggYSBsb2NhbCB2YXIuXG5cdFx0XHRcdC8vIGB8fCBkYXRhYCBpcyBkZWFkIGNvZGUgbWVhbnQgb25seSB0byBwcmVzZXJ2ZSB0aGUgdmFyaWFibGUgdGhyb3VnaCBtaW5pZmljYXRpb24uXG5cdFx0XHRcdHZhciBlbCA9IHRoaXMgfHwgZGF0YTtcblxuXHRcdFx0XHQvLyBDbGFpbSB0aGUgZmlyc3QgaGFuZGxlclxuXHRcdFx0XHRpZiAoIHJjaGVja2FibGVUeXBlLnRlc3QoIGVsLnR5cGUgKSAmJlxuXHRcdFx0XHRcdGVsLmNsaWNrICYmIG5vZGVOYW1lKCBlbCwgXCJpbnB1dFwiICkgKSB7XG5cblx0XHRcdFx0XHQvLyBkYXRhUHJpdi5zZXQoIGVsLCBcImNsaWNrXCIsIC4uLiApXG5cdFx0XHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIGVsLCBcImNsaWNrXCIsIHRydWUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJldHVybiBmYWxzZSB0byBhbGxvdyBub3JtYWwgcHJvY2Vzc2luZyBpbiB0aGUgY2FsbGVyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbiggZGF0YSApIHtcblxuXHRcdFx0XHQvLyBGb3IgbXV0dWFsIGNvbXByZXNzaWJpbGl0eSB3aXRoIF9kZWZhdWx0LCByZXBsYWNlIGB0aGlzYCBhY2Nlc3Mgd2l0aCBhIGxvY2FsIHZhci5cblx0XHRcdFx0Ly8gYHx8IGRhdGFgIGlzIGRlYWQgY29kZSBtZWFudCBvbmx5IHRvIHByZXNlcnZlIHRoZSB2YXJpYWJsZSB0aHJvdWdoIG1pbmlmaWNhdGlvbi5cblx0XHRcdFx0dmFyIGVsID0gdGhpcyB8fCBkYXRhO1xuXG5cdFx0XHRcdC8vIEZvcmNlIHNldHVwIGJlZm9yZSB0cmlnZ2VyaW5nIGEgY2xpY2tcblx0XHRcdFx0aWYgKCByY2hlY2thYmxlVHlwZS50ZXN0KCBlbC50eXBlICkgJiZcblx0XHRcdFx0XHRlbC5jbGljayAmJiBub2RlTmFtZSggZWwsIFwiaW5wdXRcIiApICkge1xuXG5cdFx0XHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIGVsLCBcImNsaWNrXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJldHVybiBub24tZmFsc2UgdG8gYWxsb3cgbm9ybWFsIGV2ZW50LXBhdGggcHJvcGFnYXRpb25cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBGb3IgY3Jvc3MtYnJvd3NlciBjb25zaXN0ZW5jeSwgc3VwcHJlc3MgbmF0aXZlIC5jbGljaygpIG9uIGxpbmtzXG5cdFx0XHQvLyBBbHNvIHByZXZlbnQgaXQgaWYgd2UncmUgY3VycmVudGx5IGluc2lkZSBhIGxldmVyYWdlZCBuYXRpdmUtZXZlbnQgc3RhY2tcblx0XHRcdF9kZWZhdWx0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0XHRcdHJldHVybiByY2hlY2thYmxlVHlwZS50ZXN0KCB0YXJnZXQudHlwZSApICYmXG5cdFx0XHRcdFx0dGFyZ2V0LmNsaWNrICYmIG5vZGVOYW1lKCB0YXJnZXQsIFwiaW5wdXRcIiApICYmXG5cdFx0XHRcdFx0ZGF0YVByaXYuZ2V0KCB0YXJnZXQsIFwiY2xpY2tcIiApIHx8XG5cdFx0XHRcdFx0bm9kZU5hbWUoIHRhcmdldCwgXCJhXCIgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0YmVmb3JldW5sb2FkOiB7XG5cdFx0XHRwb3N0RGlzcGF0Y2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDIwK1xuXHRcdFx0XHQvLyBGaXJlZm94IGRvZXNuJ3QgYWxlcnQgaWYgdGhlIHJldHVyblZhbHVlIGZpZWxkIGlzIG5vdCBzZXQuXG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZXZlbnQucmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBFbnN1cmUgdGhlIHByZXNlbmNlIG9mIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgaGFuZGxlcyBtYW51YWxseS10cmlnZ2VyZWRcbi8vIHN5bnRoZXRpYyBldmVudHMgYnkgaW50ZXJydXB0aW5nIHByb2dyZXNzIHVudGlsIHJlaW52b2tlZCBpbiByZXNwb25zZSB0b1xuLy8gKm5hdGl2ZSogZXZlbnRzIHRoYXQgaXQgZmlyZXMgZGlyZWN0bHksIGVuc3VyaW5nIHRoYXQgc3RhdGUgY2hhbmdlcyBoYXZlXG4vLyBhbHJlYWR5IG9jY3VycmVkIGJlZm9yZSBvdGhlciBsaXN0ZW5lcnMgYXJlIGludm9rZWQuXG5mdW5jdGlvbiBsZXZlcmFnZU5hdGl2ZSggZWwsIHR5cGUsIGlzU2V0dXAgKSB7XG5cblx0Ly8gTWlzc2luZyBgaXNTZXR1cGAgaW5kaWNhdGVzIGEgdHJpZ2dlciBjYWxsLCB3aGljaCBtdXN0IGZvcmNlIHNldHVwIHRocm91Z2ggalF1ZXJ5LmV2ZW50LmFkZFxuXHRpZiAoICFpc1NldHVwICkge1xuXHRcdGlmICggZGF0YVByaXYuZ2V0KCBlbCwgdHlwZSApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBlbCwgdHlwZSwgcmV0dXJuVHJ1ZSApO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBSZWdpc3RlciB0aGUgY29udHJvbGxlciBhcyBhIHNwZWNpYWwgdW5pdmVyc2FsIGhhbmRsZXIgZm9yIGFsbCBldmVudCBuYW1lc3BhY2VzXG5cdGRhdGFQcml2LnNldCggZWwsIHR5cGUsIGZhbHNlICk7XG5cdGpRdWVyeS5ldmVudC5hZGQoIGVsLCB0eXBlLCB7XG5cdFx0bmFtZXNwYWNlOiBmYWxzZSxcblx0XHRoYW5kbGVyOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgcmVzdWx0LFxuXHRcdFx0XHRzYXZlZCA9IGRhdGFQcml2LmdldCggdGhpcywgdHlwZSApO1xuXG5cdFx0XHRpZiAoICggZXZlbnQuaXNUcmlnZ2VyICYgMSApICYmIHRoaXNbIHR5cGUgXSApIHtcblxuXHRcdFx0XHQvLyBJbnRlcnJ1cHQgcHJvY2Vzc2luZyBvZiB0aGUgb3V0ZXIgc3ludGhldGljIC50cmlnZ2VyKCllZCBldmVudFxuXHRcdFx0XHRpZiAoICFzYXZlZCApIHtcblxuXHRcdFx0XHRcdC8vIFN0b3JlIGFyZ3VtZW50cyBmb3IgdXNlIHdoZW4gaGFuZGxpbmcgdGhlIGlubmVyIG5hdGl2ZSBldmVudFxuXHRcdFx0XHRcdC8vIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGF0IGxlYXN0IG9uZSBhcmd1bWVudCAoYW4gZXZlbnQgb2JqZWN0KSwgc28gdGhpcyBhcnJheVxuXHRcdFx0XHRcdC8vIHdpbGwgbm90IGJlIGNvbmZ1c2VkIHdpdGggYSBsZWZ0b3ZlciBjYXB0dXJlIG9iamVjdC5cblx0XHRcdFx0XHRzYXZlZCA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgdHlwZSwgc2F2ZWQgKTtcblxuXHRcdFx0XHRcdC8vIFRyaWdnZXIgdGhlIG5hdGl2ZSBldmVudCBhbmQgY2FwdHVyZSBpdHMgcmVzdWx0XG5cdFx0XHRcdFx0dGhpc1sgdHlwZSBdKCk7XG5cdFx0XHRcdFx0cmVzdWx0ID0gZGF0YVByaXYuZ2V0KCB0aGlzLCB0eXBlICk7XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCB0eXBlLCBmYWxzZSApO1xuXG5cdFx0XHRcdFx0aWYgKCBzYXZlZCAhPT0gcmVzdWx0ICkge1xuXG5cdFx0XHRcdFx0XHQvLyBDYW5jZWwgdGhlIG91dGVyIHN5bnRoZXRpYyBldmVudFxuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGlzIGlzIGFuIGlubmVyIHN5bnRoZXRpYyBldmVudCBmb3IgYW4gZXZlbnQgd2l0aCBhIGJ1YmJsaW5nIHN1cnJvZ2F0ZVxuXHRcdFx0XHQvLyAoZm9jdXMgb3IgYmx1ciksIGFzc3VtZSB0aGF0IHRoZSBzdXJyb2dhdGUgYWxyZWFkeSBwcm9wYWdhdGVkIGZyb20gdHJpZ2dlcmluZ1xuXHRcdFx0XHQvLyB0aGUgbmF0aXZlIGV2ZW50IGFuZCBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcgYWdhaW4gaGVyZS5cblx0XHRcdFx0Ly8gVGhpcyB0ZWNobmljYWxseSBnZXRzIHRoZSBvcmRlcmluZyB3cm9uZyB3LnIudC4gdG8gYC50cmlnZ2VyKClgIChpbiB3aGljaCB0aGVcblx0XHRcdFx0Ly8gYnViYmxpbmcgc3Vycm9nYXRlIHByb3BhZ2F0ZXMgKmFmdGVyKiB0aGUgbm9uLWJ1YmJsaW5nIGJhc2UpLCBidXQgdGhhdCBzZWVtc1xuXHRcdFx0XHQvLyBsZXNzIGJhZCB0aGFuIGR1cGxpY2F0aW9uLlxuXHRcdFx0XHR9IGVsc2UgaWYgKCAoIGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge30gKS5kZWxlZ2F0ZVR5cGUgKSB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIG5hdGl2ZSBldmVudCB0cmlnZ2VyZWQgYWJvdmUsIGV2ZXJ5dGhpbmcgaXMgbm93IGluIG9yZGVyXG5cdFx0XHQvLyBGaXJlIGFuIGlubmVyIHN5bnRoZXRpYyBldmVudCB3aXRoIHRoZSBvcmlnaW5hbCBhcmd1bWVudHNcblx0XHRcdH0gZWxzZSBpZiAoIHNhdmVkICkge1xuXG5cdFx0XHRcdC8vIC4uLmFuZCBjYXB0dXJlIHRoZSByZXN1bHRcblx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCB0eXBlLCBqUXVlcnkuZXZlbnQudHJpZ2dlcihcblx0XHRcdFx0XHRzYXZlZFsgMCBdLFxuXHRcdFx0XHRcdHNhdmVkLnNsaWNlKCAxICksXG5cdFx0XHRcdFx0dGhpc1xuXHRcdFx0XHQpICk7XG5cblx0XHRcdFx0Ly8gQWJvcnQgaGFuZGxpbmcgb2YgdGhlIG5hdGl2ZSBldmVudCBieSBhbGwgalF1ZXJ5IGhhbmRsZXJzIHdoaWxlIGFsbG93aW5nXG5cdFx0XHRcdC8vIG5hdGl2ZSBoYW5kbGVycyBvbiB0aGUgc2FtZSBlbGVtZW50IHRvIHJ1bi4gT24gdGFyZ2V0LCB0aGlzIGlzIGFjaGlldmVkXG5cdFx0XHRcdC8vIGJ5IHN0b3BwaW5nIGltbWVkaWF0ZSBwcm9wYWdhdGlvbiBqdXN0IG9uIHRoZSBqUXVlcnkgZXZlbnQuIEhvd2V2ZXIsXG5cdFx0XHRcdC8vIHRoZSBuYXRpdmUgZXZlbnQgaXMgcmUtd3JhcHBlZCBieSBhIGpRdWVyeSBvbmUgb24gZWFjaCBsZXZlbCBvZiB0aGVcblx0XHRcdFx0Ly8gcHJvcGFnYXRpb24gc28gdGhlIG9ubHkgd2F5IHRvIHN0b3AgaXQgZm9yIGpRdWVyeSBpcyB0byBzdG9wIGl0IGZvclxuXHRcdFx0XHQvLyBldmVyeW9uZSB2aWEgbmF0aXZlIGBzdG9wUHJvcGFnYXRpb24oKWAuIFRoaXMgaXMgbm90IGEgcHJvYmxlbSBmb3Jcblx0XHRcdFx0Ly8gZm9jdXMvYmx1ciB3aGljaCBkb24ndCBidWJibGUsIGJ1dCBpdCBkb2VzIGFsc28gc3RvcCBjbGljayBvbiBjaGVja2JveGVzXG5cdFx0XHRcdC8vIGFuZCByYWRpb3MuIFdlIGFjY2VwdCB0aGlzIGxpbWl0YXRpb24uXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59XG5cbmpRdWVyeS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBoYW5kbGUgKSB7XG5cblx0Ly8gVGhpcyBcImlmXCIgaXMgbmVlZGVkIGZvciBwbGFpbiBvYmplY3RzXG5cdGlmICggZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyICkge1xuXHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgaGFuZGxlICk7XG5cdH1cbn07XG5cbmpRdWVyeS5FdmVudCA9IGZ1bmN0aW9uKCBzcmMsIHByb3BzICkge1xuXG5cdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCB0aGUgJ25ldycga2V5d29yZFxuXHRpZiAoICEoIHRoaXMgaW5zdGFuY2VvZiBqUXVlcnkuRXZlbnQgKSApIHtcblx0XHRyZXR1cm4gbmV3IGpRdWVyeS5FdmVudCggc3JjLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gRXZlbnQgb2JqZWN0XG5cdGlmICggc3JjICYmIHNyYy50eXBlICkge1xuXHRcdHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcblx0XHR0aGlzLnR5cGUgPSBzcmMudHlwZTtcblxuXHRcdC8vIEV2ZW50cyBidWJibGluZyB1cCB0aGUgZG9jdW1lbnQgbWF5IGhhdmUgYmVlbiBtYXJrZWQgYXMgcHJldmVudGVkXG5cdFx0Ly8gYnkgYSBoYW5kbGVyIGxvd2VyIGRvd24gdGhlIHRyZWU7IHJlZmxlY3QgdGhlIGNvcnJlY3QgdmFsdWUuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBzcmMuZGVmYXVsdFByZXZlbnRlZCB8fFxuXHRcdFx0XHRzcmMuZGVmYXVsdFByZXZlbnRlZCA9PT0gdW5kZWZpbmVkICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5XG5cdFx0XHRcdHNyYy5yZXR1cm5WYWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0cmV0dXJuVHJ1ZSA6XG5cdFx0XHRyZXR1cm5GYWxzZTtcblxuXHRcdC8vIENyZWF0ZSB0YXJnZXQgcHJvcGVydGllc1xuXHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTYgLSA3IG9ubHlcblx0XHQvLyBUYXJnZXQgc2hvdWxkIG5vdCBiZSBhIHRleHQgbm9kZSAodHJhYy01MDQsIHRyYWMtMTMxNDMpXG5cdFx0dGhpcy50YXJnZXQgPSAoIHNyYy50YXJnZXQgJiYgc3JjLnRhcmdldC5ub2RlVHlwZSA9PT0gMyApID9cblx0XHRcdHNyYy50YXJnZXQucGFyZW50Tm9kZSA6XG5cdFx0XHRzcmMudGFyZ2V0O1xuXG5cdFx0dGhpcy5jdXJyZW50VGFyZ2V0ID0gc3JjLmN1cnJlbnRUYXJnZXQ7XG5cdFx0dGhpcy5yZWxhdGVkVGFyZ2V0ID0gc3JjLnJlbGF0ZWRUYXJnZXQ7XG5cblx0Ly8gRXZlbnQgdHlwZVxuXHR9IGVsc2Uge1xuXHRcdHRoaXMudHlwZSA9IHNyYztcblx0fVxuXG5cdC8vIFB1dCBleHBsaWNpdGx5IHByb3ZpZGVkIHByb3BlcnRpZXMgb250byB0aGUgZXZlbnQgb2JqZWN0XG5cdGlmICggcHJvcHMgKSB7XG5cdFx0alF1ZXJ5LmV4dGVuZCggdGhpcywgcHJvcHMgKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIHRpbWVzdGFtcCBpZiBpbmNvbWluZyBldmVudCBkb2Vzbid0IGhhdmUgb25lXG5cdHRoaXMudGltZVN0YW1wID0gc3JjICYmIHNyYy50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKTtcblxuXHQvLyBNYXJrIGl0IGFzIGZpeGVkXG5cdHRoaXNbIGpRdWVyeS5leHBhbmRvIF0gPSB0cnVlO1xufTtcblxuLy8galF1ZXJ5LkV2ZW50IGlzIGJhc2VkIG9uIERPTTMgRXZlbnRzIGFzIHNwZWNpZmllZCBieSB0aGUgRUNNQVNjcmlwdCBMYW5ndWFnZSBCaW5kaW5nXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAwMy9XRC1ET00tTGV2ZWwtMy1FdmVudHMtMjAwMzAzMzEvZWNtYS1zY3JpcHQtYmluZGluZy5odG1sXG5qUXVlcnkuRXZlbnQucHJvdG90eXBlID0ge1xuXHRjb25zdHJ1Y3RvcjogalF1ZXJ5LkV2ZW50LFxuXHRpc0RlZmF1bHRQcmV2ZW50ZWQ6IHJldHVybkZhbHNlLFxuXHRpc1Byb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cdGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblx0aXNTaW11bGF0ZWQ6IGZhbHNlLFxuXG5cdHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH0sXG5cdHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCApIHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXHR9LFxuXHRzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cbn07XG5cbi8vIEluY2x1ZGVzIGFsbCBjb21tb24gZXZlbnQgcHJvcHMgaW5jbHVkaW5nIEtleUV2ZW50IGFuZCBNb3VzZUV2ZW50IHNwZWNpZmljIHByb3BzXG5qUXVlcnkuZWFjaCgge1xuXHRhbHRLZXk6IHRydWUsXG5cdGJ1YmJsZXM6IHRydWUsXG5cdGNhbmNlbGFibGU6IHRydWUsXG5cdGNoYW5nZWRUb3VjaGVzOiB0cnVlLFxuXHRjdHJsS2V5OiB0cnVlLFxuXHRkZXRhaWw6IHRydWUsXG5cdGV2ZW50UGhhc2U6IHRydWUsXG5cdG1ldGFLZXk6IHRydWUsXG5cdHBhZ2VYOiB0cnVlLFxuXHRwYWdlWTogdHJ1ZSxcblx0c2hpZnRLZXk6IHRydWUsXG5cdHZpZXc6IHRydWUsXG5cdFwiY2hhclwiOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRjaGFyQ29kZTogdHJ1ZSxcblx0a2V5OiB0cnVlLFxuXHRrZXlDb2RlOiB0cnVlLFxuXHRidXR0b246IHRydWUsXG5cdGJ1dHRvbnM6IHRydWUsXG5cdGNsaWVudFg6IHRydWUsXG5cdGNsaWVudFk6IHRydWUsXG5cdG9mZnNldFg6IHRydWUsXG5cdG9mZnNldFk6IHRydWUsXG5cdHBvaW50ZXJJZDogdHJ1ZSxcblx0cG9pbnRlclR5cGU6IHRydWUsXG5cdHNjcmVlblg6IHRydWUsXG5cdHNjcmVlblk6IHRydWUsXG5cdHRhcmdldFRvdWNoZXM6IHRydWUsXG5cdHRvRWxlbWVudDogdHJ1ZSxcblx0dG91Y2hlczogdHJ1ZSxcblx0d2hpY2g6IHRydWVcbn0sIGpRdWVyeS5ldmVudC5hZGRQcm9wICk7XG5cbmpRdWVyeS5lYWNoKCB7IGZvY3VzOiBcImZvY3VzaW5cIiwgYmx1cjogXCJmb2N1c291dFwiIH0sIGZ1bmN0aW9uKCB0eXBlLCBkZWxlZ2F0ZVR5cGUgKSB7XG5cblx0ZnVuY3Rpb24gZm9jdXNNYXBwZWRIYW5kbGVyKCBuYXRpdmVFdmVudCApIHtcblx0XHRpZiAoIGRvY3VtZW50LmRvY3VtZW50TW9kZSApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErXG5cdFx0XHQvLyBBdHRhY2ggYSBzaW5nbGUgZm9jdXNpbi9mb2N1c291dCBoYW5kbGVyIG9uIHRoZSBkb2N1bWVudCB3aGlsZSBzb21lb25lIHdhbnRzXG5cdFx0XHQvLyBmb2N1cy9ibHVyLiBUaGlzIGlzIGJlY2F1c2UgdGhlIGZvcm1lciBhcmUgc3luY2hyb25vdXMgaW4gSUUgd2hpbGUgdGhlIGxhdHRlclxuXHRcdFx0Ly8gYXJlIGFzeW5jLiBJbiBvdGhlciBicm93c2VycywgYWxsIHRob3NlIGhhbmRsZXJzIGFyZSBpbnZva2VkIHN5bmNocm9ub3VzbHkuXG5cblx0XHRcdC8vIGBoYW5kbGVgIGZyb20gcHJpdmF0ZSBkYXRhIHdvdWxkIGFscmVhZHkgd3JhcCB0aGUgZXZlbnQsIGJ1dCB3ZSBuZWVkXG5cdFx0XHQvLyB0byBjaGFuZ2UgdGhlIGB0eXBlYCBoZXJlLlxuXHRcdFx0dmFyIGhhbmRsZSA9IGRhdGFQcml2LmdldCggdGhpcywgXCJoYW5kbGVcIiApLFxuXHRcdFx0XHRldmVudCA9IGpRdWVyeS5ldmVudC5maXgoIG5hdGl2ZUV2ZW50ICk7XG5cdFx0XHRldmVudC50eXBlID0gbmF0aXZlRXZlbnQudHlwZSA9PT0gXCJmb2N1c2luXCIgPyBcImZvY3VzXCIgOiBcImJsdXJcIjtcblx0XHRcdGV2ZW50LmlzU2ltdWxhdGVkID0gdHJ1ZTtcblxuXHRcdFx0Ly8gRmlyc3QsIGhhbmRsZSBmb2N1c2luL2ZvY3Vzb3V0XG5cdFx0XHRoYW5kbGUoIG5hdGl2ZUV2ZW50ICk7XG5cblx0XHRcdC8vIC4uLnRoZW4sIGhhbmRsZSBmb2N1cy9ibHVyXG5cdFx0XHQvL1xuXHRcdFx0Ly8gZm9jdXMvYmx1ciBkb24ndCBidWJibGUgd2hpbGUgZm9jdXNpbi9mb2N1c291dCBkbzsgc2ltdWxhdGUgdGhlIGZvcm1lciBieSBvbmx5XG5cdFx0XHQvLyBpbnZva2luZyB0aGUgaGFuZGxlciBhdCB0aGUgbG93ZXIgbGV2ZWwuXG5cdFx0XHRpZiAoIGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCApIHtcblxuXHRcdFx0XHQvLyBUaGUgc2V0dXAgcGFydCBjYWxscyBgbGV2ZXJhZ2VOYXRpdmVgLCB3aGljaCwgaW4gdHVybiwgY2FsbHNcblx0XHRcdFx0Ly8gYGpRdWVyeS5ldmVudC5hZGRgLCBzbyBldmVudCBoYW5kbGUgd2lsbCBhbHJlYWR5IGhhdmUgYmVlbiBzZXRcblx0XHRcdFx0Ly8gYnkgdGhpcyBwb2ludC5cblx0XHRcdFx0aGFuZGxlKCBldmVudCApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIEZvciBub24tSUUgYnJvd3NlcnMsIGF0dGFjaCBhIHNpbmdsZSBjYXB0dXJpbmcgaGFuZGxlciBvbiB0aGUgZG9jdW1lbnRcblx0XHRcdC8vIHdoaWxlIHNvbWVvbmUgd2FudHMgZm9jdXNpbi9mb2N1c291dC5cblx0XHRcdGpRdWVyeS5ldmVudC5zaW11bGF0ZSggZGVsZWdhdGVUeXBlLCBuYXRpdmVFdmVudC50YXJnZXQsXG5cdFx0XHRcdGpRdWVyeS5ldmVudC5maXgoIG5hdGl2ZUV2ZW50ICkgKTtcblx0XHR9XG5cdH1cblxuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdID0ge1xuXG5cdFx0Ly8gVXRpbGl6ZSBuYXRpdmUgZXZlbnQgaWYgcG9zc2libGUgc28gYmx1ci9mb2N1cyBzZXF1ZW5jZSBpcyBjb3JyZWN0XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgYXR0YWNoZXM7XG5cblx0XHRcdC8vIENsYWltIHRoZSBmaXJzdCBoYW5kbGVyXG5cdFx0XHQvLyBkYXRhUHJpdi5zZXQoIHRoaXMsIFwiZm9jdXNcIiwgLi4uIClcblx0XHRcdC8vIGRhdGFQcml2LnNldCggdGhpcywgXCJibHVyXCIsIC4uLiApXG5cdFx0XHRsZXZlcmFnZU5hdGl2ZSggdGhpcywgdHlwZSwgdHJ1ZSApO1xuXG5cdFx0XHRpZiAoIGRvY3VtZW50LmRvY3VtZW50TW9kZSApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdFx0XHRcdC8vIFdlIHVzZSB0aGUgc2FtZSBuYXRpdmUgaGFuZGxlciBmb3IgZm9jdXNpbiAmIGZvY3VzIChhbmQgZm9jdXNvdXQgJiBibHVyKVxuXHRcdFx0XHQvLyBzbyB3ZSBuZWVkIHRvIGNvb3JkaW5hdGUgc2V0dXAgJiB0ZWFyZG93biBwYXJ0cyBiZXR3ZWVuIHRob3NlIGV2ZW50cy5cblx0XHRcdFx0Ly8gVXNlIGBkZWxlZ2F0ZVR5cGVgIGFzIHRoZSBrZXkgYXMgYHR5cGVgIGlzIGFscmVhZHkgdXNlZCBieSBgbGV2ZXJhZ2VOYXRpdmVgLlxuXHRcdFx0XHRhdHRhY2hlcyA9IGRhdGFQcml2LmdldCggdGhpcywgZGVsZWdhdGVUeXBlICk7XG5cdFx0XHRcdGlmICggIWF0dGFjaGVzICkge1xuXHRcdFx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggZGVsZWdhdGVUeXBlLCBmb2N1c01hcHBlZEhhbmRsZXIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIGRlbGVnYXRlVHlwZSwgKCBhdHRhY2hlcyB8fCAwICkgKyAxICk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFJldHVybiBmYWxzZSB0byBhbGxvdyBub3JtYWwgcHJvY2Vzc2luZyBpbiB0aGUgY2FsbGVyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBGb3JjZSBzZXR1cCBiZWZvcmUgdHJpZ2dlclxuXHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIHRoaXMsIHR5cGUgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIG5vbi1mYWxzZSB0byBhbGxvdyBub3JtYWwgZXZlbnQtcGF0aCBwcm9wYWdhdGlvblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBhdHRhY2hlcztcblxuXHRcdFx0aWYgKCBkb2N1bWVudC5kb2N1bWVudE1vZGUgKSB7XG5cdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuZ2V0KCB0aGlzLCBkZWxlZ2F0ZVR5cGUgKSAtIDE7XG5cdFx0XHRcdGlmICggIWF0dGFjaGVzICkge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggZGVsZWdhdGVUeXBlLCBmb2N1c01hcHBlZEhhbmRsZXIgKTtcblx0XHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIHRoaXMsIGRlbGVnYXRlVHlwZSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgZGVsZWdhdGVUeXBlLCBhdHRhY2hlcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFJldHVybiBmYWxzZSB0byBpbmRpY2F0ZSBzdGFuZGFyZCB0ZWFyZG93biBzaG91bGQgYmUgYXBwbGllZFxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIFN1cHByZXNzIG5hdGl2ZSBmb2N1cyBvciBibHVyIGlmIHdlJ3JlIGN1cnJlbnRseSBpbnNpZGVcblx0XHQvLyBhIGxldmVyYWdlZCBuYXRpdmUtZXZlbnQgc3RhY2tcblx0XHRfZGVmYXVsdDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0cmV0dXJuIGRhdGFQcml2LmdldCggZXZlbnQudGFyZ2V0LCB0eXBlICk7XG5cdFx0fSxcblxuXHRcdGRlbGVnYXRlVHlwZTogZGVsZWdhdGVUeXBlXG5cdH07XG5cblx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQ0XG5cdC8vIEZpcmVmb3ggZG9lc24ndCBoYXZlIGZvY3VzKGluIHwgb3V0KSBldmVudHNcblx0Ly8gUmVsYXRlZCB0aWNrZXQgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02ODc3ODdcblx0Ly9cblx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9NDggLSA0OSwgU2FmYXJpIDw9OS4wIC0gOS4xXG5cdC8vIGZvY3VzKGluIHwgb3V0KSBldmVudHMgZmlyZSBhZnRlciBmb2N1cyAmIGJsdXIgZXZlbnRzLFxuXHQvLyB3aGljaCBpcyBzcGVjIHZpb2xhdGlvbiAtIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnRzLWZvY3VzZXZlbnQtZXZlbnQtb3JkZXJcblx0Ly8gUmVsYXRlZCB0aWNrZXQgLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDk4NTdcblx0Ly9cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExK1xuXHQvLyBUbyBwcmVzZXJ2ZSByZWxhdGl2ZSBmb2N1c2luL2ZvY3VzICYgZm9jdXNvdXQvYmx1ciBldmVudCBvcmRlciBndWFyYW50ZWVkIG9uIHRoZSAzLnggYnJhbmNoLFxuXHQvLyBhdHRhY2ggYSBzaW5nbGUgaGFuZGxlciBmb3IgYm90aCBldmVudHMgaW4gSUUuXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsWyBkZWxlZ2F0ZVR5cGUgXSA9IHtcblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEhhbmRsZTogcmVndWxhciBub2RlcyAodmlhIGB0aGlzLm93bmVyRG9jdW1lbnRgKSwgd2luZG93XG5cdFx0XHQvLyAodmlhIGB0aGlzLmRvY3VtZW50YCkgJiBkb2N1bWVudCAodmlhIGB0aGlzYCkuXG5cdFx0XHR2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQgfHwgdGhpcyxcblx0XHRcdFx0ZGF0YUhvbGRlciA9IGRvY3VtZW50LmRvY3VtZW50TW9kZSA/IHRoaXMgOiBkb2MsXG5cdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuZ2V0KCBkYXRhSG9sZGVyLCBkZWxlZ2F0ZVR5cGUgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExK1xuXHRcdFx0Ly8gV2UgdXNlIHRoZSBzYW1lIG5hdGl2ZSBoYW5kbGVyIGZvciBmb2N1c2luICYgZm9jdXMgKGFuZCBmb2N1c291dCAmIGJsdXIpXG5cdFx0XHQvLyBzbyB3ZSBuZWVkIHRvIGNvb3JkaW5hdGUgc2V0dXAgJiB0ZWFyZG93biBwYXJ0cyBiZXR3ZWVuIHRob3NlIGV2ZW50cy5cblx0XHRcdC8vIFVzZSBgZGVsZWdhdGVUeXBlYCBhcyB0aGUga2V5IGFzIGB0eXBlYCBpcyBhbHJlYWR5IHVzZWQgYnkgYGxldmVyYWdlTmF0aXZlYC5cblx0XHRcdGlmICggIWF0dGFjaGVzICkge1xuXHRcdFx0XHRpZiAoIGRvY3VtZW50LmRvY3VtZW50TW9kZSApIHtcblx0XHRcdFx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoIGRlbGVnYXRlVHlwZSwgZm9jdXNNYXBwZWRIYW5kbGVyICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZG9jLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGZvY3VzTWFwcGVkSGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkYXRhUHJpdi5zZXQoIGRhdGFIb2xkZXIsIGRlbGVnYXRlVHlwZSwgKCBhdHRhY2hlcyB8fCAwICkgKyAxICk7XG5cdFx0fSxcblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQgfHwgdGhpcyxcblx0XHRcdFx0ZGF0YUhvbGRlciA9IGRvY3VtZW50LmRvY3VtZW50TW9kZSA/IHRoaXMgOiBkb2MsXG5cdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuZ2V0KCBkYXRhSG9sZGVyLCBkZWxlZ2F0ZVR5cGUgKSAtIDE7XG5cblx0XHRcdGlmICggIWF0dGFjaGVzICkge1xuXHRcdFx0XHRpZiAoIGRvY3VtZW50LmRvY3VtZW50TW9kZSApIHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGRlbGVnYXRlVHlwZSwgZm9jdXNNYXBwZWRIYW5kbGVyICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGZvY3VzTWFwcGVkSGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZGF0YUhvbGRlciwgZGVsZWdhdGVUeXBlICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkYXRhUHJpdi5zZXQoIGRhdGFIb2xkZXIsIGRlbGVnYXRlVHlwZSwgYXR0YWNoZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59ICk7XG5cbi8vIENyZWF0ZSBtb3VzZWVudGVyL2xlYXZlIGV2ZW50cyB1c2luZyBtb3VzZW92ZXIvb3V0IGFuZCBldmVudC10aW1lIGNoZWNrc1xuLy8gc28gdGhhdCBldmVudCBkZWxlZ2F0aW9uIHdvcmtzIGluIGpRdWVyeS5cbi8vIERvIHRoZSBzYW1lIGZvciBwb2ludGVyZW50ZXIvcG9pbnRlcmxlYXZlIGFuZCBwb2ludGVyb3Zlci9wb2ludGVyb3V0XG4vL1xuLy8gU3VwcG9ydDogU2FmYXJpIDcgb25seVxuLy8gU2FmYXJpIHNlbmRzIG1vdXNlZW50ZXIgdG9vIG9mdGVuOyBzZWU6XG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NzAyNThcbi8vIGZvciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGJ1ZyAoaXQgZXhpc3RlZCBpbiBvbGRlciBDaHJvbWUgdmVyc2lvbnMgYXMgd2VsbCkuXG5qUXVlcnkuZWFjaCgge1xuXHRtb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLFxuXHRtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCIsXG5cdHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxuXHRwb2ludGVybGVhdmU6IFwicG9pbnRlcm91dFwiXG59LCBmdW5jdGlvbiggb3JpZywgZml4ICkge1xuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgb3JpZyBdID0ge1xuXHRcdGRlbGVnYXRlVHlwZTogZml4LFxuXHRcdGJpbmRUeXBlOiBmaXgsXG5cblx0XHRoYW5kbGU6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciByZXQsXG5cdFx0XHRcdHRhcmdldCA9IHRoaXMsXG5cdFx0XHRcdHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0LFxuXHRcdFx0XHRoYW5kbGVPYmogPSBldmVudC5oYW5kbGVPYmo7XG5cblx0XHRcdC8vIEZvciBtb3VzZWVudGVyL2xlYXZlIGNhbGwgdGhlIGhhbmRsZXIgaWYgcmVsYXRlZCBpcyBvdXRzaWRlIHRoZSB0YXJnZXQuXG5cdFx0XHQvLyBOQjogTm8gcmVsYXRlZFRhcmdldCBpZiB0aGUgbW91c2UgbGVmdC9lbnRlcmVkIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0aWYgKCAhcmVsYXRlZCB8fCAoIHJlbGF0ZWQgIT09IHRhcmdldCAmJiAhalF1ZXJ5LmNvbnRhaW5zKCB0YXJnZXQsIHJlbGF0ZWQgKSApICkge1xuXHRcdFx0XHRldmVudC50eXBlID0gaGFuZGxlT2JqLm9yaWdUeXBlO1xuXHRcdFx0XHRyZXQgPSBoYW5kbGVPYmouaGFuZGxlci5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBmaXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0fTtcbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXG5cdG9uOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gb24oIHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKTtcblx0fSxcblx0b25lOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gb24oIHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIDEgKTtcblx0fSxcblx0b2ZmOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBmbiApIHtcblx0XHR2YXIgaGFuZGxlT2JqLCB0eXBlO1xuXHRcdGlmICggdHlwZXMgJiYgdHlwZXMucHJldmVudERlZmF1bHQgJiYgdHlwZXMuaGFuZGxlT2JqICkge1xuXG5cdFx0XHQvLyAoIGV2ZW50ICkgIGRpc3BhdGNoZWQgalF1ZXJ5LkV2ZW50XG5cdFx0XHRoYW5kbGVPYmogPSB0eXBlcy5oYW5kbGVPYmo7XG5cdFx0XHRqUXVlcnkoIHR5cGVzLmRlbGVnYXRlVGFyZ2V0ICkub2ZmKFxuXHRcdFx0XHRoYW5kbGVPYmoubmFtZXNwYWNlID9cblx0XHRcdFx0XHRoYW5kbGVPYmoub3JpZ1R5cGUgKyBcIi5cIiArIGhhbmRsZU9iai5uYW1lc3BhY2UgOlxuXHRcdFx0XHRcdGhhbmRsZU9iai5vcmlnVHlwZSxcblx0XHRcdFx0aGFuZGxlT2JqLnNlbGVjdG9yLFxuXHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlclxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZiAoIHR5cGVvZiB0eXBlcyA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcy1vYmplY3QgWywgc2VsZWN0b3JdIClcblx0XHRcdGZvciAoIHR5cGUgaW4gdHlwZXMgKSB7XG5cdFx0XHRcdHRoaXMub2ZmKCB0eXBlLCBzZWxlY3RvciwgdHlwZXNbIHR5cGUgXSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmICggc2VsZWN0b3IgPT09IGZhbHNlIHx8IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzIFssIGZuXSApXG5cdFx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdFx0Zm4gPSByZXR1cm5GYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCB0aGlzLCB0eXBlcywgZm4sIHNlbGVjdG9yICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cblxudmFyXG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExLCBFZGdlIDEyIC0gMTMgb25seVxuXHQvLyBJbiBJRS9FZGdlIHVzaW5nIHJlZ2V4IGdyb3VwcyBoZXJlIGNhdXNlcyBzZXZlcmUgc2xvd2Rvd25zLlxuXHQvLyBTZWUgaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy8xNzM2NTEyL1xuXHRybm9Jbm5lcmh0bWwgPSAvPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxcblxuXHQvLyBjaGVja2VkPVwiY2hlY2tlZFwiIG9yIGNoZWNrZWRcblx0cmNoZWNrZWQgPSAvY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLFxuXG5cdHJjbGVhblNjcmlwdCA9IC9eXFxzKjwhXFxbQ0RBVEFcXFt8XFxdXFxdPlxccyokL2c7XG5cbi8vIFByZWZlciBhIHRib2R5IG92ZXIgaXRzIHBhcmVudCB0YWJsZSBmb3IgY29udGFpbmluZyBuZXcgcm93c1xuZnVuY3Rpb24gbWFuaXB1bGF0aW9uVGFyZ2V0KCBlbGVtLCBjb250ZW50ICkge1xuXHRpZiAoIG5vZGVOYW1lKCBlbGVtLCBcInRhYmxlXCIgKSAmJlxuXHRcdG5vZGVOYW1lKCBjb250ZW50Lm5vZGVUeXBlICE9PSAxMSA/IGNvbnRlbnQgOiBjb250ZW50LmZpcnN0Q2hpbGQsIFwidHJcIiApICkge1xuXG5cdFx0cmV0dXJuIGpRdWVyeSggZWxlbSApLmNoaWxkcmVuKCBcInRib2R5XCIgKVsgMCBdIHx8IGVsZW07XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuLy8gUmVwbGFjZS9yZXN0b3JlIHRoZSB0eXBlIGF0dHJpYnV0ZSBvZiBzY3JpcHQgZWxlbWVudHMgZm9yIHNhZmUgRE9NIG1hbmlwdWxhdGlvblxuZnVuY3Rpb24gZGlzYWJsZVNjcmlwdCggZWxlbSApIHtcblx0ZWxlbS50eXBlID0gKCBlbGVtLmdldEF0dHJpYnV0ZSggXCJ0eXBlXCIgKSAhPT0gbnVsbCApICsgXCIvXCIgKyBlbGVtLnR5cGU7XG5cdHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gcmVzdG9yZVNjcmlwdCggZWxlbSApIHtcblx0aWYgKCAoIGVsZW0udHlwZSB8fCBcIlwiICkuc2xpY2UoIDAsIDUgKSA9PT0gXCJ0cnVlL1wiICkge1xuXHRcdGVsZW0udHlwZSA9IGVsZW0udHlwZS5zbGljZSggNSApO1xuXHR9IGVsc2Uge1xuXHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCBcInR5cGVcIiApO1xuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGNsb25lQ29weUV2ZW50KCBzcmMsIGRlc3QgKSB7XG5cdHZhciBpLCBsLCB0eXBlLCBwZGF0YU9sZCwgdWRhdGFPbGQsIHVkYXRhQ3VyLCBldmVudHM7XG5cblx0aWYgKCBkZXN0Lm5vZGVUeXBlICE9PSAxICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIDEuIENvcHkgcHJpdmF0ZSBkYXRhOiBldmVudHMsIGhhbmRsZXJzLCBldGMuXG5cdGlmICggZGF0YVByaXYuaGFzRGF0YSggc3JjICkgKSB7XG5cdFx0cGRhdGFPbGQgPSBkYXRhUHJpdi5nZXQoIHNyYyApO1xuXHRcdGV2ZW50cyA9IHBkYXRhT2xkLmV2ZW50cztcblxuXHRcdGlmICggZXZlbnRzICkge1xuXHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBkZXN0LCBcImhhbmRsZSBldmVudHNcIiApO1xuXG5cdFx0XHRmb3IgKCB0eXBlIGluIGV2ZW50cyApIHtcblx0XHRcdFx0Zm9yICggaSA9IDAsIGwgPSBldmVudHNbIHR5cGUgXS5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmFkZCggZGVzdCwgdHlwZSwgZXZlbnRzWyB0eXBlIF1bIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gMi4gQ29weSB1c2VyIGRhdGFcblx0aWYgKCBkYXRhVXNlci5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHR1ZGF0YU9sZCA9IGRhdGFVc2VyLmFjY2Vzcyggc3JjICk7XG5cdFx0dWRhdGFDdXIgPSBqUXVlcnkuZXh0ZW5kKCB7fSwgdWRhdGFPbGQgKTtcblxuXHRcdGRhdGFVc2VyLnNldCggZGVzdCwgdWRhdGFDdXIgKTtcblx0fVxufVxuXG4vLyBGaXggSUUgYnVncywgc2VlIHN1cHBvcnQgdGVzdHNcbmZ1bmN0aW9uIGZpeElucHV0KCBzcmMsIGRlc3QgKSB7XG5cdHZhciBub2RlTmFtZSA9IGRlc3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHQvLyBGYWlscyB0byBwZXJzaXN0IHRoZSBjaGVja2VkIHN0YXRlIG9mIGEgY2xvbmVkIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbi5cblx0aWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmIHJjaGVja2FibGVUeXBlLnRlc3QoIHNyYy50eXBlICkgKSB7XG5cdFx0ZGVzdC5jaGVja2VkID0gc3JjLmNoZWNrZWQ7XG5cblx0Ly8gRmFpbHMgdG8gcmV0dXJuIHRoZSBzZWxlY3RlZCBvcHRpb24gdG8gdGhlIGRlZmF1bHQgc2VsZWN0ZWQgc3RhdGUgd2hlbiBjbG9uaW5nIG9wdGlvbnNcblx0fSBlbHNlIGlmICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiB8fCBub2RlTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiICkge1xuXHRcdGRlc3QuZGVmYXVsdFZhbHVlID0gc3JjLmRlZmF1bHRWYWx1ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBkb21NYW5pcCggY29sbGVjdGlvbiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQgKSB7XG5cblx0Ly8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuXHRhcmdzID0gZmxhdCggYXJncyApO1xuXG5cdHZhciBmcmFnbWVudCwgZmlyc3QsIHNjcmlwdHMsIGhhc1NjcmlwdHMsIG5vZGUsIGRvYyxcblx0XHRpID0gMCxcblx0XHRsID0gY29sbGVjdGlvbi5sZW5ndGgsXG5cdFx0aU5vQ2xvbmUgPSBsIC0gMSxcblx0XHR2YWx1ZSA9IGFyZ3NbIDAgXSxcblx0XHR2YWx1ZUlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKCB2YWx1ZSApO1xuXG5cdC8vIFdlIGNhbid0IGNsb25lTm9kZSBmcmFnbWVudHMgdGhhdCBjb250YWluIGNoZWNrZWQsIGluIFdlYktpdFxuXHRpZiAoIHZhbHVlSXNGdW5jdGlvbiB8fFxuXHRcdFx0KCBsID4gMSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0IXN1cHBvcnQuY2hlY2tDbG9uZSAmJiByY2hlY2tlZC50ZXN0KCB2YWx1ZSApICkgKSB7XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZWFjaCggZnVuY3Rpb24oIGluZGV4ICkge1xuXHRcdFx0dmFyIHNlbGYgPSBjb2xsZWN0aW9uLmVxKCBpbmRleCApO1xuXHRcdFx0aWYgKCB2YWx1ZUlzRnVuY3Rpb24gKSB7XG5cdFx0XHRcdGFyZ3NbIDAgXSA9IHZhbHVlLmNhbGwoIHRoaXMsIGluZGV4LCBzZWxmLmh0bWwoKSApO1xuXHRcdFx0fVxuXHRcdFx0ZG9tTWFuaXAoIHNlbGYsIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBsICkge1xuXHRcdGZyYWdtZW50ID0gYnVpbGRGcmFnbWVudCggYXJncywgY29sbGVjdGlvblsgMCBdLm93bmVyRG9jdW1lbnQsIGZhbHNlLCBjb2xsZWN0aW9uLCBpZ25vcmVkICk7XG5cdFx0Zmlyc3QgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG5cdFx0aWYgKCBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdGZyYWdtZW50ID0gZmlyc3Q7XG5cdFx0fVxuXG5cdFx0Ly8gUmVxdWlyZSBlaXRoZXIgbmV3IGNvbnRlbnQgb3IgYW4gaW50ZXJlc3QgaW4gaWdub3JlZCBlbGVtZW50cyB0byBpbnZva2UgdGhlIGNhbGxiYWNrXG5cdFx0aWYgKCBmaXJzdCB8fCBpZ25vcmVkICkge1xuXHRcdFx0c2NyaXB0cyA9IGpRdWVyeS5tYXAoIGdldEFsbCggZnJhZ21lbnQsIFwic2NyaXB0XCIgKSwgZGlzYWJsZVNjcmlwdCApO1xuXHRcdFx0aGFzU2NyaXB0cyA9IHNjcmlwdHMubGVuZ3RoO1xuXG5cdFx0XHQvLyBVc2UgdGhlIG9yaWdpbmFsIGZyYWdtZW50IGZvciB0aGUgbGFzdCBpdGVtXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIHRoZSBmaXJzdCBiZWNhdXNlIGl0IGNhbiBlbmQgdXBcblx0XHRcdC8vIGJlaW5nIGVtcHRpZWQgaW5jb3JyZWN0bHkgaW4gY2VydGFpbiBzaXR1YXRpb25zICh0cmFjLTgwNzApLlxuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRub2RlID0gZnJhZ21lbnQ7XG5cblx0XHRcdFx0aWYgKCBpICE9PSBpTm9DbG9uZSApIHtcblx0XHRcdFx0XHRub2RlID0galF1ZXJ5LmNsb25lKCBub2RlLCB0cnVlLCB0cnVlICk7XG5cblx0XHRcdFx0XHQvLyBLZWVwIHJlZmVyZW5jZXMgdG8gY2xvbmVkIHNjcmlwdHMgZm9yIGxhdGVyIHJlc3RvcmF0aW9uXG5cdFx0XHRcdFx0aWYgKCBoYXNTY3JpcHRzICkge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0XHRcdGpRdWVyeS5tZXJnZSggc2NyaXB0cywgZ2V0QWxsKCBub2RlLCBcInNjcmlwdFwiICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYWxsYmFjay5jYWxsKCBjb2xsZWN0aW9uWyBpIF0sIG5vZGUsIGkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBoYXNTY3JpcHRzICkge1xuXHRcdFx0XHRkb2MgPSBzY3JpcHRzWyBzY3JpcHRzLmxlbmd0aCAtIDEgXS5vd25lckRvY3VtZW50O1xuXG5cdFx0XHRcdC8vIFJlZW5hYmxlIHNjcmlwdHNcblx0XHRcdFx0alF1ZXJ5Lm1hcCggc2NyaXB0cywgcmVzdG9yZVNjcmlwdCApO1xuXG5cdFx0XHRcdC8vIEV2YWx1YXRlIGV4ZWN1dGFibGUgc2NyaXB0cyBvbiBmaXJzdCBkb2N1bWVudCBpbnNlcnRpb25cblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBoYXNTY3JpcHRzOyBpKysgKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHNjcmlwdHNbIGkgXTtcblx0XHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIG5vZGUudHlwZSB8fCBcIlwiICkgJiZcblx0XHRcdFx0XHRcdCFkYXRhUHJpdi5hY2Nlc3MoIG5vZGUsIFwiZ2xvYmFsRXZhbFwiICkgJiZcblx0XHRcdFx0XHRcdGpRdWVyeS5jb250YWlucyggZG9jLCBub2RlICkgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggbm9kZS5zcmMgJiYgKCBub2RlLnR5cGUgfHwgXCJcIiApLnRvTG93ZXJDYXNlKCkgICE9PSBcIm1vZHVsZVwiICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE9wdGlvbmFsIEFKQVggZGVwZW5kZW5jeSwgYnV0IHdvbid0IHJ1biBzY3JpcHRzIGlmIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5Ll9ldmFsVXJsICYmICFub2RlLm5vTW9kdWxlICkge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5fZXZhbFVybCggbm9kZS5zcmMsIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5vbmNlOiBub2RlLm5vbmNlIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCBcIm5vbmNlXCIgKVxuXHRcdFx0XHRcdFx0XHRcdH0sIGRvYyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFVud3JhcCBhIENEQVRBIHNlY3Rpb24gY29udGFpbmluZyBzY3JpcHQgY29udGVudHMuIFRoaXMgc2hvdWxkbid0IGJlXG5cdFx0XHRcdFx0XHRcdC8vIG5lZWRlZCBhcyBpbiBYTUwgZG9jdW1lbnRzIHRoZXkncmUgYWxyZWFkeSBub3QgdmlzaWJsZSB3aGVuXG5cdFx0XHRcdFx0XHRcdC8vIGluc3BlY3RpbmcgZWxlbWVudCBjb250ZW50cyBhbmQgaW4gSFRNTCBkb2N1bWVudHMgdGhleSBoYXZlIG5vXG5cdFx0XHRcdFx0XHRcdC8vIG1lYW5pbmcgYnV0IHdlJ3JlIHByZXNlcnZpbmcgdGhhdCBsb2dpYyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdFx0XHRcdFx0XHRcdC8vIFRoaXMgd2lsbCBiZSByZW1vdmVkIGNvbXBsZXRlbHkgaW4gNC4wLiBTZWUgZ2gtNDkwNC5cblx0XHRcdFx0XHRcdFx0RE9NRXZhbCggbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKCByY2xlYW5TY3JpcHQsIFwiXCIgKSwgbm9kZSwgZG9jICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSggZWxlbSwgc2VsZWN0b3IsIGtlZXBEYXRhICkge1xuXHR2YXIgbm9kZSxcblx0XHRub2RlcyA9IHNlbGVjdG9yID8galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIGVsZW0gKSA6IGVsZW0sXG5cdFx0aSA9IDA7XG5cblx0Zm9yICggOyAoIG5vZGUgPSBub2Rlc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdGlmICggIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIG5vZGUgKSApO1xuXHRcdH1cblxuXHRcdGlmICggbm9kZS5wYXJlbnROb2RlICkge1xuXHRcdFx0aWYgKCBrZWVwRGF0YSAmJiBpc0F0dGFjaGVkKCBub2RlICkgKSB7XG5cdFx0XHRcdHNldEdsb2JhbEV2YWwoIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHR9XG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRyZXR1cm4gaHRtbDtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdHZhciBpLCBsLCBzcmNFbGVtZW50cywgZGVzdEVsZW1lbnRzLFxuXHRcdFx0Y2xvbmUgPSBlbGVtLmNsb25lTm9kZSggdHJ1ZSApLFxuXHRcdFx0aW5QYWdlID0gaXNBdHRhY2hlZCggZWxlbSApO1xuXG5cdFx0Ly8gRml4IElFIGNsb25pbmcgaXNzdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgZWxlbS5ub2RlVHlwZSA9PT0gMTEgKSAmJlxuXHRcdFx0XHQhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIFdlIGVzY2hldyBqUXVlcnkjZmluZCBoZXJlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zOlxuXHRcdFx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuXHRcdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSApO1xuXHRcdFx0c3JjRWxlbWVudHMgPSBnZXRBbGwoIGVsZW0gKTtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZpeElucHV0KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcblx0XHRpZiAoIGRhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRpZiAoIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0XHRzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbCggZWxlbSApO1xuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGNsb25lQ29weUV2ZW50KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSwgXCJzY3JpcHRcIiApO1xuXHRcdGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCBkZXN0RWxlbWVudHMsICFpblBhZ2UgJiYgZ2V0QWxsKCBlbGVtLCBcInNjcmlwdFwiICkgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcblx0XHRyZXR1cm4gY2xvbmU7XG5cdH0sXG5cblx0Y2xlYW5EYXRhOiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cdFx0dmFyIGRhdGEsIGVsZW0sIHR5cGUsXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWwsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9PSB1bmRlZmluZWQ7IGkrKyApIHtcblx0XHRcdGlmICggYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0XHRpZiAoICggZGF0YSA9IGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSApICkge1xuXHRcdFx0XHRcdGlmICggZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCB0eXBlIGluIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWxbIHR5cGUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZGF0YS5oYW5kbGUgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHQvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblx0XHRcdFx0XHRlbGVtWyBkYXRhVXNlci5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRkZXRhY2g6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiByZW1vdmUoIHRoaXMsIHNlbGVjdG9yICk7XG5cdH0sXG5cblx0dGV4dDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnRleHQoIHRoaXMgKSA6XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdGFwcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdHByZXBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoIGVsZW0sIHRhcmdldC5maXJzdENoaWxkICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGJlZm9yZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0YWZ0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzLm5leHRTaWJsaW5nICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoIGVsZW0gPSB0aGlzWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblx0XHRcdFx0ZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuXHRcdGRlZXBEYXRhQW5kRXZlbnRzID0gZGVlcERhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGRhdGFBbmRFdmVudHMgOiBkZWVwRGF0YUFuZEV2ZW50cztcblxuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNsb25lKCB0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApO1xuXHRcdH0gKTtcblx0fSxcblxuXHRodG1sOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF0gfHwge30sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHRsID0gdGhpcy5sZW5ndGg7XG5cblx0XHRcdGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pbm5lckhUTUw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcblx0XHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCggdmFsdWUgKSAmJlxuXHRcdFx0XHQhd3JhcE1hcFsgKCBydGFnTmFtZS5leGVjKCB2YWx1ZSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpIF0gKSB7XG5cblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuaHRtbFByZWZpbHRlciggdmFsdWUgKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF0gfHwge307XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblx0XHRcdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtID0gMDtcblxuXHRcdFx0XHQvLyBJZiB1c2luZyBpbm5lckhUTUwgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgdXNlIHRoZSBmYWxsYmFjayBtZXRob2Rcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5hcHBlbmQoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRyZXBsYWNlV2l0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlnbm9yZWQgPSBbXTtcblxuXHRcdC8vIE1ha2UgdGhlIGNoYW5nZXMsIHJlcGxhY2luZyBlYWNoIG5vbi1pZ25vcmVkIGNvbnRleHQgZWxlbWVudCB3aXRoIHRoZSBuZXcgY29udGVudFxuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICggalF1ZXJ5LmluQXJyYXkoIHRoaXMsIGlnbm9yZWQgKSA8IDAgKSB7XG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggdGhpcyApICk7XG5cdFx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQoIGVsZW0sIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gRm9yY2UgY2FsbGJhY2sgaW52b2NhdGlvblxuXHRcdH0sIGlnbm9yZWQgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCgge1xuXHRhcHBlbmRUbzogXCJhcHBlbmRcIixcblx0cHJlcGVuZFRvOiBcInByZXBlbmRcIixcblx0aW5zZXJ0QmVmb3JlOiBcImJlZm9yZVwiLFxuXHRpbnNlcnRBZnRlcjogXCJhZnRlclwiLFxuXHRyZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBvcmlnaW5hbCApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGVsZW1zLFxuXHRcdFx0cmV0ID0gW10sXG5cdFx0XHRpbnNlcnQgPSBqUXVlcnkoIHNlbGVjdG9yICksXG5cdFx0XHRsYXN0ID0gaW5zZXJ0Lmxlbmd0aCAtIDEsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgaSA8PSBsYXN0OyBpKysgKSB7XG5cdFx0XHRlbGVtcyA9IGkgPT09IGxhc3QgPyB0aGlzIDogdGhpcy5jbG9uZSggdHJ1ZSApO1xuXHRcdFx0alF1ZXJ5KCBpbnNlcnRbIGkgXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdHB1c2guYXBwbHkoIHJldCwgZWxlbXMuZ2V0KCkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHJldCApO1xuXHR9O1xufSApO1xudmFyIHJudW1ub25weCA9IG5ldyBSZWdFeHAoIFwiXihcIiArIHBudW0gKyBcIikoPyFweClbYS16JV0rJFwiLCBcImlcIiApO1xuXG52YXIgcmN1c3RvbVByb3AgPSAvXi0tLztcblxuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAodHJhYy0xNTA5OCwgdHJhYy0xNDE1MClcblx0XHQvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcblx0XHQvLyBGRiBtZWFud2hpbGUgdGhyb3dzIG9uIGZyYW1lIGVsZW1lbnRzIHRocm91Z2ggXCJkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlXCJcblx0XHR2YXIgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuXHRcdGlmICggIXZpZXcgfHwgIXZpZXcub3BlbmVyICkge1xuXHRcdFx0dmlldyA9IHdpbmRvdztcblx0XHR9XG5cblx0XHRyZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG5cdH07XG5cbnZhciBzd2FwID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrICkge1xuXHR2YXIgcmV0LCBuYW1lLFxuXHRcdG9sZCA9IHt9O1xuXG5cdC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0b2xkWyBuYW1lIF0gPSBlbGVtLnN0eWxlWyBuYW1lIF07XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb3B0aW9uc1sgbmFtZSBdO1xuXHR9XG5cblx0cmV0ID0gY2FsbGJhY2suY2FsbCggZWxlbSApO1xuXG5cdC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb2xkWyBuYW1lIF07XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufTtcblxuXG52YXIgcmJveFN0eWxlID0gbmV3IFJlZ0V4cCggY3NzRXhwYW5kLmpvaW4oIFwifFwiICksIFwiaVwiICk7XG5cblxuXG4oIGZ1bmN0aW9uKCkge1xuXG5cdC8vIEV4ZWN1dGluZyBib3RoIHBpeGVsUG9zaXRpb24gJiBib3hTaXppbmdSZWxpYWJsZSB0ZXN0cyByZXF1aXJlIG9ubHkgb25lIGxheW91dFxuXHQvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuXHRmdW5jdGlvbiBjb21wdXRlU3R5bGVUZXN0cygpIHtcblxuXHRcdC8vIFRoaXMgaXMgYSBzaW5nbGV0b24sIHdlIG5lZWQgdG8gZXhlY3V0ZSBpdCBvbmx5IG9uY2Vcblx0XHRpZiAoICFkaXYgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDtcIiArXG5cdFx0XHRcIm1hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiO1xuXHRcdGRpdi5zdHlsZS5jc3NUZXh0ID1cblx0XHRcdFwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO1wiICtcblx0XHRcdFwibWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDtcIiArXG5cdFx0XHRcIndpZHRoOjYwJTt0b3A6MSVcIjtcblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApLmFwcGVuZENoaWxkKCBkaXYgKTtcblxuXHRcdHZhciBkaXZTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBkaXYgKTtcblx0XHRwaXhlbFBvc2l0aW9uVmFsID0gZGl2U3R5bGUudG9wICE9PSBcIjElXCI7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBGaXJlZm94IDw9MyAtIDQ0XG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0VmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKCBkaXZTdHlsZS5tYXJnaW5MZWZ0ICkgPT09IDEyO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgU2FmYXJpIDw9OS4xIC0gMTAuMSwgaU9TIDw9Ny4wIC0gOS4zXG5cdFx0Ly8gU29tZSBzdHlsZXMgY29tZSBiYWNrIHdpdGggcGVyY2VudGFnZSB2YWx1ZXMsIGV2ZW4gdGhvdWdoIHRoZXkgc2hvdWxkbid0XG5cdFx0ZGl2LnN0eWxlLnJpZ2h0ID0gXCI2MCVcIjtcblx0XHRwaXhlbEJveFN0eWxlc1ZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUucmlnaHQgKSA9PT0gMzY7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHRcdC8vIERldGVjdCBtaXNyZXBvcnRpbmcgb2YgY29udGVudCBkaW1lbnNpb25zIGZvciBib3gtc2l6aW5nOmJvcmRlci1ib3ggZWxlbWVudHNcblx0XHRib3hTaXppbmdSZWxpYWJsZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUud2lkdGggKSA9PT0gMzY7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHQvLyBEZXRlY3Qgb3ZlcmZsb3c6c2Nyb2xsIHNjcmV3aW5lc3MgKGdoLTM2OTkpXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9NjRcblx0XHQvLyBEb24ndCBnZXQgdHJpY2tlZCB3aGVuIHpvb20gYWZmZWN0cyBvZmZzZXRXaWR0aCAoZ2gtNDAyOSlcblx0XHRkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdFx0c2Nyb2xsYm94U2l6ZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2Lm9mZnNldFdpZHRoIC8gMyApID09PSAxMjtcblxuXHRcdGRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCggY29udGFpbmVyICk7XG5cblx0XHQvLyBOdWxsaWZ5IHRoZSBkaXYgc28gaXQgd291bGRuJ3QgYmUgc3RvcmVkIGluIHRoZSBtZW1vcnkgYW5kXG5cdFx0Ly8gaXQgd2lsbCBhbHNvIGJlIGEgc2lnbiB0aGF0IGNoZWNrcyBhbHJlYWR5IHBlcmZvcm1lZFxuXHRcdGRpdiA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiByb3VuZFBpeGVsTWVhc3VyZXMoIG1lYXN1cmUgKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoIHBhcnNlRmxvYXQoIG1lYXN1cmUgKSApO1xuXHR9XG5cblx0dmFyIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLCBzY3JvbGxib3hTaXplVmFsLCBwaXhlbEJveFN0eWxlc1ZhbCxcblx0XHRyZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCwgcmVsaWFibGVNYXJnaW5MZWZ0VmFsLFxuXHRcdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG5cblx0Ly8gRmluaXNoIGVhcmx5IGluIGxpbWl0ZWQgKG5vbi1icm93c2VyKSBlbnZpcm9ubWVudHNcblx0aWYgKCAhZGl2LnN0eWxlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0Ly8gU3R5bGUgb2YgY2xvbmVkIGVsZW1lbnQgYWZmZWN0cyBzb3VyY2UgZWxlbWVudCBjbG9uZWQgKHRyYWMtODkwOClcblx0ZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiO1xuXHRkaXYuY2xvbmVOb2RlKCB0cnVlICkuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcIlwiO1xuXHRzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSA9IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9PT0gXCJjb250ZW50LWJveFwiO1xuXG5cdGpRdWVyeS5leHRlbmQoIHN1cHBvcnQsIHtcblx0XHRib3hTaXppbmdSZWxpYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIGJveFNpemluZ1JlbGlhYmxlVmFsO1xuXHRcdH0sXG5cdFx0cGl4ZWxCb3hTdHlsZXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbEJveFN0eWxlc1ZhbDtcblx0XHR9LFxuXHRcdHBpeGVsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbFBvc2l0aW9uVmFsO1xuXHRcdH0sXG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gcmVsaWFibGVNYXJnaW5MZWZ0VmFsO1xuXHRcdH0sXG5cdFx0c2Nyb2xsYm94U2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHNjcm9sbGJveFNpemVWYWw7XG5cdFx0fSxcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTUgLSAxOCtcblx0XHQvLyBJRS9FZGdlIG1pc3JlcG9ydCBgZ2V0Q29tcHV0ZWRTdHlsZWAgb2YgdGFibGUgcm93cyB3aXRoIHdpZHRoL2hlaWdodFxuXHRcdC8vIHNldCBpbiBDU1Mgd2hpbGUgYG9mZnNldCpgIHByb3BlcnRpZXMgcmVwb3J0IGNvcnJlY3QgdmFsdWVzLlxuXHRcdC8vIEJlaGF2aW9yIGluIElFIDkgaXMgbW9yZSBzdWJ0bGUgdGhhbiBpbiBuZXdlciB2ZXJzaW9ucyAmIGl0IHBhc3Nlc1xuXHRcdC8vIHNvbWUgdmVyc2lvbnMgb2YgdGhpcyB0ZXN0OyBtYWtlIHN1cmUgbm90IHRvIG1ha2UgaXQgcGFzcyB0aGVyZSFcblx0XHQvL1xuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggNzArXG5cdFx0Ly8gT25seSBGaXJlZm94IGluY2x1ZGVzIGJvcmRlciB3aWR0aHNcblx0XHQvLyBpbiBjb21wdXRlZCBkaW1lbnNpb25zLiAoZ2gtNDUyOSlcblx0XHRyZWxpYWJsZVRyRGltZW5zaW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGFibGUsIHRyLCB0ckNoaWxkLCB0clN0eWxlO1xuXHRcdFx0aWYgKCByZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwidGFibGVcIiApO1xuXHRcdFx0XHR0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwidHJcIiApO1xuXHRcdFx0XHR0ckNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuXG5cdFx0XHRcdHRhYmxlLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlXCI7XG5cdFx0XHRcdHRyLnN0eWxlLmNzc1RleHQgPSBcImJvcmRlcjoxcHggc29saWRcIjtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgODYrXG5cdFx0XHRcdC8vIEhlaWdodCBzZXQgdGhyb3VnaCBjc3NUZXh0IGRvZXMgbm90IGdldCBhcHBsaWVkLlxuXHRcdFx0XHQvLyBDb21wdXRlZCBoZWlnaHQgdGhlbiBjb21lcyBiYWNrIGFzIDAuXG5cdFx0XHRcdHRyLnN0eWxlLmhlaWdodCA9IFwiMXB4XCI7XG5cdFx0XHRcdHRyQ2hpbGQuc3R5bGUuaGVpZ2h0ID0gXCI5cHhcIjtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDggQ2hyb21lIDg2K1xuXHRcdFx0XHQvLyBJbiBvdXIgYm9keUJhY2tncm91bmQuaHRtbCBpZnJhbWUsXG5cdFx0XHRcdC8vIGRpc3BsYXkgZm9yIGFsbCBkaXYgZWxlbWVudHMgaXMgc2V0IHRvIFwiaW5saW5lXCIsXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBhIHByb2JsZW0gb25seSBpbiBBbmRyb2lkIDggQ2hyb21lIDg2LlxuXHRcdFx0XHQvLyBFbnN1cmluZyB0aGUgZGl2IGlzIGRpc3BsYXk6IGJsb2NrXG5cdFx0XHRcdC8vIGdldHMgYXJvdW5kIHRoaXMgaXNzdWUuXG5cdFx0XHRcdHRyQ2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdFx0XHRkb2N1bWVudEVsZW1lbnRcblx0XHRcdFx0XHQuYXBwZW5kQ2hpbGQoIHRhYmxlIClcblx0XHRcdFx0XHQuYXBwZW5kQ2hpbGQoIHRyIClcblx0XHRcdFx0XHQuYXBwZW5kQ2hpbGQoIHRyQ2hpbGQgKTtcblxuXHRcdFx0XHR0clN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIHRyICk7XG5cdFx0XHRcdHJlbGlhYmxlVHJEaW1lbnNpb25zVmFsID0gKCBwYXJzZUludCggdHJTdHlsZS5oZWlnaHQsIDEwICkgK1xuXHRcdFx0XHRcdHBhcnNlSW50KCB0clN0eWxlLmJvcmRlclRvcFdpZHRoLCAxMCApICtcblx0XHRcdFx0XHRwYXJzZUludCggdHJTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCwgMTAgKSApID09PSB0ci5vZmZzZXRIZWlnaHQ7XG5cblx0XHRcdFx0ZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKCB0YWJsZSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlbGlhYmxlVHJEaW1lbnNpb25zVmFsO1xuXHRcdH1cblx0fSApO1xufSApKCk7XG5cblxuZnVuY3Rpb24gY3VyQ1NTKCBlbGVtLCBuYW1lLCBjb21wdXRlZCApIHtcblx0dmFyIHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgsIHJldCxcblx0XHRpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KCBuYW1lICksXG5cblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDUxK1xuXHRcdC8vIFJldHJpZXZpbmcgc3R5bGUgYmVmb3JlIGNvbXB1dGVkIHNvbWVob3dcblx0XHQvLyBmaXhlcyBhbiBpc3N1ZSB3aXRoIGdldHRpbmcgd3JvbmcgdmFsdWVzXG5cdFx0Ly8gb24gZGV0YWNoZWQgZWxlbWVudHNcblx0XHRzdHlsZSA9IGVsZW0uc3R5bGU7XG5cblx0Y29tcHV0ZWQgPSBjb21wdXRlZCB8fCBnZXRTdHlsZXMoIGVsZW0gKTtcblxuXHQvLyBnZXRQcm9wZXJ0eVZhbHVlIGlzIG5lZWRlZCBmb3I6XG5cdC8vICAgLmNzcygnZmlsdGVyJykgKElFIDkgb25seSwgdHJhYy0xMjUzNylcblx0Ly8gICAuY3NzKCctLWN1c3RvbVByb3BlcnR5KSAoZ2gtMzE0NClcblx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExK1xuXHRcdC8vIElFIG9ubHkgc3VwcG9ydHMgYFwiZmxvYXRcImAgaW4gYGdldFByb3BlcnR5VmFsdWVgOyBpbiBjb21wdXRlZCBzdHlsZXNcblx0XHQvLyBpdCdzIG9ubHkgYXZhaWxhYmxlIGFzIGBcImNzc0Zsb2F0XCJgLiBXZSBubyBsb25nZXIgbW9kaWZ5IHByb3BlcnRpZXNcblx0XHQvLyBzZW50IHRvIGAuY3NzKClgIGFwYXJ0IGZyb20gY2FtZWxDYXNpbmcsIHNvIHdlIG5lZWQgdG8gY2hlY2sgYm90aC5cblx0XHQvLyBOb3JtYWxseSwgdGhpcyB3b3VsZCBjcmVhdGUgZGlmZmVyZW5jZSBpbiBiZWhhdmlvcjogaWZcblx0XHQvLyBgZ2V0UHJvcGVydHlWYWx1ZWAgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcsIHRoZSB2YWx1ZSByZXR1cm5lZFxuXHRcdC8vIGJ5IGAuY3NzKClgIHdvdWxkIGJlIGB1bmRlZmluZWRgLiBUaGlzIGlzIHVzdWFsbHkgdGhlIGNhc2UgZm9yXG5cdFx0Ly8gZGlzY29ubmVjdGVkIGVsZW1lbnRzLiBIb3dldmVyLCBpbiBJRSBldmVuIGRpc2Nvbm5lY3RlZCBlbGVtZW50c1xuXHRcdC8vIHdpdGggbm8gc3R5bGVzIHJldHVybiBgXCJub25lXCJgIGZvciBgZ2V0UHJvcGVydHlWYWx1ZSggXCJmbG9hdFwiIClgXG5cdFx0cmV0ID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSggbmFtZSApIHx8IGNvbXB1dGVkWyBuYW1lIF07XG5cblx0XHRpZiAoIGlzQ3VzdG9tUHJvcCAmJiByZXQgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggMTA1KywgQ2hyb21lIDw9MTA1K1xuXHRcdFx0Ly8gU3BlYyByZXF1aXJlcyB0cmltbWluZyB3aGl0ZXNwYWNlIGZvciBjdXN0b20gcHJvcGVydGllcyAoZ2gtNDkyNikuXG5cdFx0XHQvLyBGaXJlZm94IG9ubHkgdHJpbXMgbGVhZGluZyB3aGl0ZXNwYWNlLiBDaHJvbWUganVzdCBjb2xsYXBzZXNcblx0XHRcdC8vIGJvdGggbGVhZGluZyAmIHRyYWlsaW5nIHdoaXRlc3BhY2UgdG8gYSBzaW5nbGUgc3BhY2UuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIGB1bmRlZmluZWRgIGlmIGVtcHR5IHN0cmluZyByZXR1cm5lZC5cblx0XHRcdC8vIFRoaXMgY29sbGFwc2VzIGEgbWlzc2luZyBkZWZpbml0aW9uIHdpdGggcHJvcGVydHkgZGVmaW5lZFxuXHRcdFx0Ly8gYW5kIHNldCB0byBhbiBlbXB0eSBzdHJpbmcgYnV0IHRoZXJlJ3Mgbm8gc3RhbmRhcmQgQVBJXG5cdFx0XHQvLyBhbGxvd2luZyB1cyB0byBkaWZmZXJlbnRpYXRlIHRoZW0gd2l0aG91dCBhIHBlcmZvcm1hbmNlIHBlbmFsdHlcblx0XHRcdC8vIGFuZCByZXR1cm5pbmcgYHVuZGVmaW5lZGAgYWxpZ25zIHdpdGggb2xkZXIgalF1ZXJ5LlxuXHRcdFx0Ly9cblx0XHRcdC8vIHJ0cmltQ1NTIHRyZWF0cyBVKzAwMEQgQ0FSUklBR0UgUkVUVVJOIGFuZCBVKzAwMEMgRk9STSBGRUVEXG5cdFx0XHQvLyBhcyB3aGl0ZXNwYWNlIHdoaWxlIENTUyBkb2VzIG5vdCwgYnV0IHRoaXMgaXMgbm90IGEgcHJvYmxlbVxuXHRcdFx0Ly8gYmVjYXVzZSBDU1MgcHJlcHJvY2Vzc2luZyByZXBsYWNlcyB0aGVtIHdpdGggVSswMDBBIExJTkUgRkVFRFxuXHRcdFx0Ly8gKHdoaWNoICppcyogQ1NTIHdoaXRlc3BhY2UpXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNpbnB1dC1wcmVwcm9jZXNzaW5nXG5cdFx0XHRyZXQgPSByZXQucmVwbGFjZSggcnRyaW1DU1MsIFwiJDFcIiApIHx8IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiAoIHJldCA9PT0gXCJcIiAmJiAhaXNBdHRhY2hlZCggZWxlbSApICkge1xuXHRcdFx0cmV0ID0galF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gQSB0cmlidXRlIHRvIHRoZSBcImF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcIlxuXHRcdC8vIEFuZHJvaWQgQnJvd3NlciByZXR1cm5zIHBlcmNlbnRhZ2UgZm9yIHNvbWUgdmFsdWVzLFxuXHRcdC8vIGJ1dCB3aWR0aCBzZWVtcyB0byBiZSByZWxpYWJseSBwaXhlbHMuXG5cdFx0Ly8gVGhpcyBpcyBhZ2FpbnN0IHRoZSBDU1NPTSBkcmFmdCBzcGVjOlxuXHRcdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jcmVzb2x2ZWQtdmFsdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5waXhlbEJveFN0eWxlcygpICYmIHJudW1ub25weC50ZXN0KCByZXQgKSAmJiByYm94U3R5bGUudGVzdCggbmFtZSApICkge1xuXG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG5cdFx0XHR3aWR0aCA9IHN0eWxlLndpZHRoO1xuXHRcdFx0bWluV2lkdGggPSBzdHlsZS5taW5XaWR0aDtcblx0XHRcdG1heFdpZHRoID0gc3R5bGUubWF4V2lkdGg7XG5cblx0XHRcdC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gc3R5bGUubWF4V2lkdGggPSBzdHlsZS53aWR0aCA9IHJldDtcblx0XHRcdHJldCA9IGNvbXB1dGVkLndpZHRoO1xuXG5cdFx0XHQvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG5cdFx0XHRzdHlsZS53aWR0aCA9IHdpZHRoO1xuXHRcdFx0c3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcblx0XHRcdHN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGg7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJldCAhPT0gdW5kZWZpbmVkID9cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0XHQvLyBJRSByZXR1cm5zIHpJbmRleCB2YWx1ZSBhcyBhbiBpbnRlZ2VyLlxuXHRcdHJldCArIFwiXCIgOlxuXHRcdHJldDtcbn1cblxuXG5mdW5jdGlvbiBhZGRHZXRIb29rSWYoIGNvbmRpdGlvbkZuLCBob29rRm4gKSB7XG5cblx0Ly8gRGVmaW5lIHRoZSBob29rLCB3ZSdsbCBjaGVjayBvbiB0aGUgZmlyc3QgcnVuIGlmIGl0J3MgcmVhbGx5IG5lZWRlZC5cblx0cmV0dXJuIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBjb25kaXRpb25GbigpICkge1xuXG5cdFx0XHRcdC8vIEhvb2sgbm90IG5lZWRlZCAob3IgaXQncyBub3QgcG9zc2libGUgdG8gdXNlIGl0IGR1ZVxuXHRcdFx0XHQvLyB0byBtaXNzaW5nIGRlcGVuZGVuY3kpLCByZW1vdmUgaXQuXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmdldDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIb29rIG5lZWRlZDsgcmVkZWZpbmUgaXQgc28gdGhhdCB0aGUgc3VwcG9ydCB0ZXN0IGlzIG5vdCBleGVjdXRlZCBhZ2Fpbi5cblx0XHRcdHJldHVybiAoIHRoaXMuZ2V0ID0gaG9va0ZuICkuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH1cblx0fTtcbn1cblxuXG52YXIgY3NzUHJlZml4ZXMgPSBbIFwiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIiBdLFxuXHRlbXB0eVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLnN0eWxlLFxuXHR2ZW5kb3JQcm9wcyA9IHt9O1xuXG4vLyBSZXR1cm4gYSB2ZW5kb3ItcHJlZml4ZWQgcHJvcGVydHkgb3IgdW5kZWZpbmVkXG5mdW5jdGlvbiB2ZW5kb3JQcm9wTmFtZSggbmFtZSApIHtcblxuXHQvLyBDaGVjayBmb3IgdmVuZG9yIHByZWZpeGVkIG5hbWVzXG5cdHZhciBjYXBOYW1lID0gbmFtZVsgMCBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKCAxICksXG5cdFx0aSA9IGNzc1ByZWZpeGVzLmxlbmd0aDtcblxuXHR3aGlsZSAoIGktLSApIHtcblx0XHRuYW1lID0gY3NzUHJlZml4ZXNbIGkgXSArIGNhcE5hbWU7XG5cdFx0aWYgKCBuYW1lIGluIGVtcHR5U3R5bGUgKSB7XG5cdFx0XHRyZXR1cm4gbmFtZTtcblx0XHR9XG5cdH1cbn1cblxuLy8gUmV0dXJuIGEgcG90ZW50aWFsbHktbWFwcGVkIGpRdWVyeS5jc3NQcm9wcyBvciB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcbmZ1bmN0aW9uIGZpbmFsUHJvcE5hbWUoIG5hbWUgKSB7XG5cdHZhciBmaW5hbCA9IGpRdWVyeS5jc3NQcm9wc1sgbmFtZSBdIHx8IHZlbmRvclByb3BzWyBuYW1lIF07XG5cblx0aWYgKCBmaW5hbCApIHtcblx0XHRyZXR1cm4gZmluYWw7XG5cdH1cblx0aWYgKCBuYW1lIGluIGVtcHR5U3R5bGUgKSB7XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cblx0cmV0dXJuIHZlbmRvclByb3BzWyBuYW1lIF0gPSB2ZW5kb3JQcm9wTmFtZSggbmFtZSApIHx8IG5hbWU7XG59XG5cblxudmFyXG5cblx0Ly8gU3dhcHBhYmxlIGlmIGRpc3BsYXkgaXMgbm9uZSBvciBzdGFydHMgd2l0aCB0YWJsZVxuXHQvLyBleGNlcHQgXCJ0YWJsZVwiLCBcInRhYmxlLWNlbGxcIiwgb3IgXCJ0YWJsZS1jYXB0aW9uXCJcblx0Ly8gU2VlIGhlcmUgZm9yIGRpc3BsYXkgdmFsdWVzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NTUy9kaXNwbGF5XG5cdHJkaXNwbGF5c3dhcCA9IC9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxcblx0Y3NzU2hvdyA9IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiwgZGlzcGxheTogXCJibG9ja1wiIH0sXG5cdGNzc05vcm1hbFRyYW5zZm9ybSA9IHtcblx0XHRsZXR0ZXJTcGFjaW5nOiBcIjBcIixcblx0XHRmb250V2VpZ2h0OiBcIjQwMFwiXG5cdH07XG5cbmZ1bmN0aW9uIHNldFBvc2l0aXZlTnVtYmVyKCBfZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICkge1xuXG5cdC8vIEFueSByZWxhdGl2ZSAoKy8tKSB2YWx1ZXMgaGF2ZSBhbHJlYWR5IGJlZW5cblx0Ly8gbm9ybWFsaXplZCBhdCB0aGlzIHBvaW50XG5cdHZhciBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApO1xuXHRyZXR1cm4gbWF0Y2hlcyA/XG5cblx0XHQvLyBHdWFyZCBhZ2FpbnN0IHVuZGVmaW5lZCBcInN1YnRyYWN0XCIsIGUuZy4sIHdoZW4gdXNlZCBhcyBpbiBjc3NIb29rc1xuXHRcdE1hdGgubWF4KCAwLCBtYXRjaGVzWyAyIF0gLSAoIHN1YnRyYWN0IHx8IDAgKSApICsgKCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgOlxuXHRcdHZhbHVlO1xufVxuXG5mdW5jdGlvbiBib3hNb2RlbEFkanVzdG1lbnQoIGVsZW0sIGRpbWVuc2lvbiwgYm94LCBpc0JvcmRlckJveCwgc3R5bGVzLCBjb21wdXRlZFZhbCApIHtcblx0dmFyIGkgPSBkaW1lbnNpb24gPT09IFwid2lkdGhcIiA/IDEgOiAwLFxuXHRcdGV4dHJhID0gMCxcblx0XHRkZWx0YSA9IDAsXG5cdFx0bWFyZ2luRGVsdGEgPSAwO1xuXG5cdC8vIEFkanVzdG1lbnQgbWF5IG5vdCBiZSBuZWNlc3Nhcnlcblx0aWYgKCBib3ggPT09ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiApIHtcblxuXHRcdC8vIEJvdGggYm94IG1vZGVscyBleGNsdWRlIG1hcmdpblxuXHRcdC8vIENvdW50IG1hcmdpbiBkZWx0YSBzZXBhcmF0ZWx5IHRvIG9ubHkgYWRkIGl0IGFmdGVyIHNjcm9sbCBndXR0ZXIgYWRqdXN0bWVudC5cblx0XHQvLyBUaGlzIGlzIG5lZWRlZCB0byBtYWtlIG5lZ2F0aXZlIG1hcmdpbnMgd29yayB3aXRoIGBvdXRlckhlaWdodCggdHJ1ZSApYCAoZ2gtMzk4MikuXG5cdFx0aWYgKCBib3ggPT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHRtYXJnaW5EZWx0YSArPSBqUXVlcnkuY3NzKCBlbGVtLCBib3ggKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGNvbnRlbnQtYm94LCB3ZSdyZSBzZWVraW5nIFwicGFkZGluZ1wiIG9yIFwiYm9yZGVyXCIgb3IgXCJtYXJnaW5cIlxuXHRcdGlmICggIWlzQm9yZGVyQm94ICkge1xuXG5cdFx0XHQvLyBBZGQgcGFkZGluZ1xuXHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cblx0XHRcdC8vIEZvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCIsIGFkZCBib3JkZXJcblx0XHRcdGlmICggYm94ICE9PSBcInBhZGRpbmdcIiApIHtcblx0XHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblxuXHRcdFx0Ly8gQnV0IHN0aWxsIGtlZXAgdHJhY2sgb2YgaXQgb3RoZXJ3aXNlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRleHRyYSArPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kWyBpIF0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGJvcmRlci1ib3ggKGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyKSwgd2UncmUgc2Vla2luZyBcImNvbnRlbnRcIiBvclxuXHRcdC8vIFwicGFkZGluZ1wiIG9yIFwibWFyZ2luXCJcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBGb3IgXCJjb250ZW50XCIsIHN1YnRyYWN0IHBhZGRpbmdcblx0XHRcdGlmICggYm94ID09PSBcImNvbnRlbnRcIiApIHtcblx0XHRcdFx0ZGVsdGEgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvciBcImNvbnRlbnRcIiBvciBcInBhZGRpbmdcIiwgc3VidHJhY3QgYm9yZGVyXG5cdFx0XHRpZiAoIGJveCAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdFx0ZGVsdGEgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBY2NvdW50IGZvciBwb3NpdGl2ZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyIHdoZW4gcmVxdWVzdGVkIGJ5IHByb3ZpZGluZyBjb21wdXRlZFZhbFxuXHRpZiAoICFpc0JvcmRlckJveCAmJiBjb21wdXRlZFZhbCA+PSAwICkge1xuXG5cdFx0Ly8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIGEgcm91bmRlZCBzdW0gb2YgY29udGVudCwgcGFkZGluZywgc2Nyb2xsIGd1dHRlciwgYW5kIGJvcmRlclxuXHRcdC8vIEFzc3VtaW5nIGludGVnZXIgc2Nyb2xsIGd1dHRlciwgc3VidHJhY3QgdGhlIHJlc3QgYW5kIHJvdW5kIGRvd25cblx0XHRkZWx0YSArPSBNYXRoLm1heCggMCwgTWF0aC5jZWlsKFxuXHRcdFx0ZWxlbVsgXCJvZmZzZXRcIiArIGRpbWVuc2lvblsgMCBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoIDEgKSBdIC1cblx0XHRcdGNvbXB1dGVkVmFsIC1cblx0XHRcdGRlbHRhIC1cblx0XHRcdGV4dHJhIC1cblx0XHRcdDAuNVxuXG5cdFx0Ly8gSWYgb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIHVua25vd24sIHRoZW4gd2UgY2FuJ3QgZGV0ZXJtaW5lIGNvbnRlbnQtYm94IHNjcm9sbCBndXR0ZXJcblx0XHQvLyBVc2UgYW4gZXhwbGljaXQgemVybyB0byBhdm9pZCBOYU4gKGdoLTM5NjQpXG5cdFx0KSApIHx8IDA7XG5cdH1cblxuXHRyZXR1cm4gZGVsdGEgKyBtYXJnaW5EZWx0YTtcbn1cblxuZnVuY3Rpb24gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgZGltZW5zaW9uLCBleHRyYSApIHtcblxuXHQvLyBTdGFydCB3aXRoIGNvbXB1dGVkIHN0eWxlXG5cdHZhciBzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKSxcblxuXHRcdC8vIFRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3csIG9ubHkgZmV0Y2ggYm94U2l6aW5nIGlmIHdlIG5lZWQgaXQgKGdoLTQzMjIpLlxuXHRcdC8vIEZha2UgY29udGVudC1ib3ggdW50aWwgd2Uga25vdyBpdCdzIG5lZWRlZCB0byBrbm93IHRoZSB0cnVlIHZhbHVlLlxuXHRcdGJveFNpemluZ05lZWRlZCA9ICFzdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlKCkgfHwgZXh0cmEsXG5cdFx0aXNCb3JkZXJCb3ggPSBib3hTaXppbmdOZWVkZWQgJiZcblx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0dmFsdWVJc0JvcmRlckJveCA9IGlzQm9yZGVyQm94LFxuXG5cdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBkaW1lbnNpb24sIHN0eWxlcyApLFxuXHRcdG9mZnNldFByb3AgPSBcIm9mZnNldFwiICsgZGltZW5zaW9uWyAwIF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSggMSApO1xuXG5cdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD01NFxuXHQvLyBSZXR1cm4gYSBjb25mb3VuZGluZyBub24tcGl4ZWwgdmFsdWUgb3IgZmVpZ24gaWdub3JhbmNlLCBhcyBhcHByb3ByaWF0ZS5cblx0aWYgKCBybnVtbm9ucHgudGVzdCggdmFsICkgKSB7XG5cdFx0aWYgKCAhZXh0cmEgKSB7XG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH1cblx0XHR2YWwgPSBcImF1dG9cIjtcblx0fVxuXG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcblx0Ly8gVXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3Igd2hlbiBib3ggc2l6aW5nIGlzIHVucmVsaWFibGUuXG5cdC8vIEluIHRob3NlIGNhc2VzLCB0aGUgY29tcHV0ZWQgdmFsdWUgY2FuIGJlIHRydXN0ZWQgdG8gYmUgYm9yZGVyLWJveC5cblx0aWYgKCAoICFzdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlKCkgJiYgaXNCb3JkZXJCb3ggfHxcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDEwIC0gMTErLCBFZGdlIDE1IC0gMTgrXG5cdFx0Ly8gSUUvRWRnZSBtaXNyZXBvcnQgYGdldENvbXB1dGVkU3R5bGVgIG9mIHRhYmxlIHJvd3Mgd2l0aCB3aWR0aC9oZWlnaHRcblx0XHQvLyBzZXQgaW4gQ1NTIHdoaWxlIGBvZmZzZXQqYCBwcm9wZXJ0aWVzIHJlcG9ydCBjb3JyZWN0IHZhbHVlcy5cblx0XHQvLyBJbnRlcmVzdGluZ2x5LCBpbiBzb21lIGNhc2VzIElFIDkgZG9lc24ndCBzdWZmZXIgZnJvbSB0aGlzIGlzc3VlLlxuXHRcdCFzdXBwb3J0LnJlbGlhYmxlVHJEaW1lbnNpb25zKCkgJiYgbm9kZU5hbWUoIGVsZW0sIFwidHJcIiApIHx8XG5cblx0XHQvLyBGYWxsIGJhY2sgdG8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IHdoZW4gdmFsdWUgaXMgXCJhdXRvXCJcblx0XHQvLyBUaGlzIGhhcHBlbnMgZm9yIGlubGluZSBlbGVtZW50cyB3aXRoIG5vIGV4cGxpY2l0IHNldHRpbmcgKGdoLTM1NzEpXG5cdFx0dmFsID09PSBcImF1dG9cIiB8fFxuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMSAtIDQuMyBvbmx5XG5cdFx0Ly8gQWxzbyB1c2Ugb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGZvciBtaXNyZXBvcnRlZCBpbmxpbmUgZGltZW5zaW9ucyAoZ2gtMzYwMilcblx0XHQhcGFyc2VGbG9hdCggdmFsICkgJiYgalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJpbmxpbmVcIiApICYmXG5cblx0XHQvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSAmIGNvbm5lY3RlZFxuXHRcdGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKSB7XG5cblx0XHRpc0JvcmRlckJveCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCI7XG5cblx0XHQvLyBXaGVyZSBhdmFpbGFibGUsIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBhcHByb3hpbWF0ZSBib3JkZXIgYm94IGRpbWVuc2lvbnMuXG5cdFx0Ly8gV2hlcmUgbm90IGF2YWlsYWJsZSAoZS5nLiwgU1ZHKSwgYXNzdW1lIHVucmVsaWFibGUgYm94LXNpemluZyBhbmQgaW50ZXJwcmV0IHRoZVxuXHRcdC8vIHJldHJpZXZlZCB2YWx1ZSBhcyBhIGNvbnRlbnQgYm94IGRpbWVuc2lvbi5cblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gb2Zmc2V0UHJvcCBpbiBlbGVtO1xuXHRcdGlmICggdmFsdWVJc0JvcmRlckJveCApIHtcblx0XHRcdHZhbCA9IGVsZW1bIG9mZnNldFByb3AgXTtcblx0XHR9XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgXCJcIiBhbmQgYXV0b1xuXHR2YWwgPSBwYXJzZUZsb2F0KCB2YWwgKSB8fCAwO1xuXG5cdC8vIEFkanVzdCBmb3IgdGhlIGVsZW1lbnQncyBib3ggbW9kZWxcblx0cmV0dXJuICggdmFsICtcblx0XHRib3hNb2RlbEFkanVzdG1lbnQoXG5cdFx0XHRlbGVtLFxuXHRcdFx0ZGltZW5zaW9uLFxuXHRcdFx0ZXh0cmEgfHwgKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApLFxuXHRcdFx0dmFsdWVJc0JvcmRlckJveCxcblx0XHRcdHN0eWxlcyxcblxuXHRcdFx0Ly8gUHJvdmlkZSB0aGUgY3VycmVudCBjb21wdXRlZCBzaXplIHRvIHJlcXVlc3Qgc2Nyb2xsIGd1dHRlciBjYWxjdWxhdGlvbiAoZ2gtMzU4OSlcblx0XHRcdHZhbFxuXHRcdClcblx0KSArIFwicHhcIjtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIEFkZCBpbiBzdHlsZSBwcm9wZXJ0eSBob29rcyBmb3Igb3ZlcnJpZGluZyB0aGUgZGVmYXVsdFxuXHQvLyBiZWhhdmlvciBvZiBnZXR0aW5nIGFuZCBzZXR0aW5nIGEgc3R5bGUgcHJvcGVydHlcblx0Y3NzSG9va3M6IHtcblx0XHRvcGFjaXR5OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdFx0XHRcdC8vIFdlIHNob3VsZCBhbHdheXMgZ2V0IGEgbnVtYmVyIGJhY2sgZnJvbSBvcGFjaXR5XG5cdFx0XHRcdFx0dmFyIHJldCA9IGN1ckNTUyggZWxlbSwgXCJvcGFjaXR5XCIgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV0ID09PSBcIlwiID8gXCIxXCIgOiByZXQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gRG9uJ3QgYXV0b21hdGljYWxseSBhZGQgXCJweFwiIHRvIHRoZXNlIHBvc3NpYmx5LXVuaXRsZXNzIHByb3BlcnRpZXNcblx0Y3NzTnVtYmVyOiB7XG5cdFx0YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG5cdFx0YXNwZWN0UmF0aW86IHRydWUsXG5cdFx0Ym9yZGVySW1hZ2VTbGljZTogdHJ1ZSxcblx0XHRjb2x1bW5Db3VudDogdHJ1ZSxcblx0XHRmbGV4R3JvdzogdHJ1ZSxcblx0XHRmbGV4U2hyaW5rOiB0cnVlLFxuXHRcdGZvbnRXZWlnaHQ6IHRydWUsXG5cdFx0Z3JpZEFyZWE6IHRydWUsXG5cdFx0Z3JpZENvbHVtbjogdHJ1ZSxcblx0XHRncmlkQ29sdW1uRW5kOiB0cnVlLFxuXHRcdGdyaWRDb2x1bW5TdGFydDogdHJ1ZSxcblx0XHRncmlkUm93OiB0cnVlLFxuXHRcdGdyaWRSb3dFbmQ6IHRydWUsXG5cdFx0Z3JpZFJvd1N0YXJ0OiB0cnVlLFxuXHRcdGxpbmVIZWlnaHQ6IHRydWUsXG5cdFx0b3BhY2l0eTogdHJ1ZSxcblx0XHRvcmRlcjogdHJ1ZSxcblx0XHRvcnBoYW5zOiB0cnVlLFxuXHRcdHNjYWxlOiB0cnVlLFxuXHRcdHdpZG93czogdHJ1ZSxcblx0XHR6SW5kZXg6IHRydWUsXG5cdFx0em9vbTogdHJ1ZSxcblxuXHRcdC8vIFNWRy1yZWxhdGVkXG5cdFx0ZmlsbE9wYWNpdHk6IHRydWUsXG5cdFx0Zmxvb2RPcGFjaXR5OiB0cnVlLFxuXHRcdHN0b3BPcGFjaXR5OiB0cnVlLFxuXHRcdHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG5cdFx0c3Ryb2tlT3BhY2l0eTogdHJ1ZVxuXHR9LFxuXG5cdC8vIEFkZCBpbiBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIHlvdSB3aXNoIHRvIGZpeCBiZWZvcmVcblx0Ly8gc2V0dGluZyBvciBnZXR0aW5nIHRoZSB2YWx1ZVxuXHRjc3NQcm9wczoge30sXG5cblx0Ly8gR2V0IGFuZCBzZXQgdGhlIHN0eWxlIHByb3BlcnR5IG9uIGEgRE9NIE5vZGVcblx0c3R5bGU6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSwgZXh0cmEgKSB7XG5cblx0XHQvLyBEb24ndCBzZXQgc3R5bGVzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRpZiAoICFlbGVtIHx8IGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCB8fCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcblx0XHR2YXIgcmV0LCB0eXBlLCBob29rcyxcblx0XHRcdG9yaWdOYW1lID0gY2FtZWxDYXNlKCBuYW1lICksXG5cdFx0XHRpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KCBuYW1lICksXG5cdFx0XHRzdHlsZSA9IGVsZW0uc3R5bGU7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWUuIFdlIGRvbid0XG5cdFx0Ly8gd2FudCB0byBxdWVyeSB0aGUgdmFsdWUgaWYgaXQgaXMgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG5cdFx0Ly8gc2luY2UgdGhleSBhcmUgdXNlci1kZWZpbmVkLlxuXHRcdGlmICggIWlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdG5hbWUgPSBmaW5hbFByb3BOYW1lKCBvcmlnTmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIEdldHMgaG9vayBmb3IgdGhlIHByZWZpeGVkIHZlcnNpb24sIHRoZW4gdW5wcmVmaXhlZCB2ZXJzaW9uXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSB8fCBqUXVlcnkuY3NzSG9va3NbIG9yaWdOYW1lIF07XG5cblx0XHQvLyBDaGVjayBpZiB3ZSdyZSBzZXR0aW5nIGEgdmFsdWVcblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG5cdFx0XHQvLyBDb252ZXJ0IFwiKz1cIiBvciBcIi09XCIgdG8gcmVsYXRpdmUgbnVtYmVycyAodHJhYy03MzQ1KVxuXHRcdFx0aWYgKCB0eXBlID09PSBcInN0cmluZ1wiICYmICggcmV0ID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiYgcmV0WyAxIF0gKSB7XG5cdFx0XHRcdHZhbHVlID0gYWRqdXN0Q1NTKCBlbGVtLCBuYW1lLCByZXQgKTtcblxuXHRcdFx0XHQvLyBGaXhlcyBidWcgdHJhYy05MjM3XG5cdFx0XHRcdHR5cGUgPSBcIm51bWJlclwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCBudWxsIGFuZCBOYU4gdmFsdWVzIGFyZW4ndCBzZXQgKHRyYWMtNzExNilcblx0XHRcdGlmICggdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSAhPT0gdmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBudW1iZXIgd2FzIHBhc3NlZCBpbiwgYWRkIHRoZSB1bml0IChleGNlcHQgZm9yIGNlcnRhaW4gQ1NTIHByb3BlcnRpZXMpXG5cdFx0XHQvLyBUaGUgaXNDdXN0b21Qcm9wIGNoZWNrIGNhbiBiZSByZW1vdmVkIGluIGpRdWVyeSA0LjAgd2hlbiB3ZSBvbmx5IGF1dG8tYXBwZW5kXG5cdFx0XHQvLyBcInB4XCIgdG8gYSBmZXcgaGFyZGNvZGVkIHZhbHVlcy5cblx0XHRcdGlmICggdHlwZSA9PT0gXCJudW1iZXJcIiAmJiAhaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0XHR2YWx1ZSArPSByZXQgJiYgcmV0WyAzIF0gfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBvcmlnTmFtZSBdID8gXCJcIiA6IFwicHhcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBiYWNrZ3JvdW5kLSogcHJvcHMgYWZmZWN0IG9yaWdpbmFsIGNsb25lJ3MgdmFsdWVzXG5cdFx0XHRpZiAoICFzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSAmJiB2YWx1ZSA9PT0gXCJcIiAmJiBuYW1lLmluZGV4T2YoIFwiYmFja2dyb3VuZFwiICkgPT09IDAgKSB7XG5cdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSBcImluaGVyaXRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCwgdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHNldCB0aGUgc3BlY2lmaWVkIHZhbHVlXG5cdFx0XHRpZiAoICFob29rcyB8fCAhKCBcInNldFwiIGluIGhvb2tzICkgfHxcblx0XHRcdFx0KCB2YWx1ZSA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIGV4dHJhICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGlmICggaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0XHRcdHN0eWxlLnNldFByb3BlcnR5KCBuYW1lLCB2YWx1ZSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIG5vbi1jb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5nZXQoIGVsZW0sIGZhbHNlLCBleHRyYSApICkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdGhlcndpc2UganVzdCBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIHN0eWxlIG9iamVjdFxuXHRcdFx0cmV0dXJuIHN0eWxlWyBuYW1lIF07XG5cdFx0fVxuXHR9LFxuXG5cdGNzczogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGV4dHJhLCBzdHlsZXMgKSB7XG5cdFx0dmFyIHZhbCwgbnVtLCBob29rcyxcblx0XHRcdG9yaWdOYW1lID0gY2FtZWxDYXNlKCBuYW1lICksXG5cdFx0XHRpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KCBuYW1lICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWUuIFdlIGRvbid0XG5cdFx0Ly8gd2FudCB0byBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IGlzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuXHRcdC8vIHNpbmNlIHRoZXkgYXJlIHVzZXItZGVmaW5lZC5cblx0XHRpZiAoICFpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRuYW1lID0gZmluYWxQcm9wTmFtZSggb3JpZ05hbWUgKTtcblx0XHR9XG5cblx0XHQvLyBUcnkgcHJlZml4ZWQgbmFtZSBmb2xsb3dlZCBieSB0aGUgdW5wcmVmaXhlZCBuYW1lXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSB8fCBqUXVlcnkuY3NzSG9va3NbIG9yaWdOYW1lIF07XG5cblx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyApIHtcblx0XHRcdHZhbCA9IGhvb2tzLmdldCggZWxlbSwgdHJ1ZSwgZXh0cmEgKTtcblx0XHR9XG5cblx0XHQvLyBPdGhlcndpc2UsIGlmIGEgd2F5IHRvIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZXhpc3RzLCB1c2UgdGhhdFxuXHRcdGlmICggdmFsID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR2YWwgPSBjdXJDU1MoIGVsZW0sIG5hbWUsIHN0eWxlcyApO1xuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgXCJub3JtYWxcIiB0byBjb21wdXRlZCB2YWx1ZVxuXHRcdGlmICggdmFsID09PSBcIm5vcm1hbFwiICYmIG5hbWUgaW4gY3NzTm9ybWFsVHJhbnNmb3JtICkge1xuXHRcdFx0dmFsID0gY3NzTm9ybWFsVHJhbnNmb3JtWyBuYW1lIF07XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBudW1lcmljIGlmIGZvcmNlZCBvciBhIHF1YWxpZmllciB3YXMgcHJvdmlkZWQgYW5kIHZhbCBsb29rcyBudW1lcmljXG5cdFx0aWYgKCBleHRyYSA9PT0gXCJcIiB8fCBleHRyYSApIHtcblx0XHRcdG51bSA9IHBhcnNlRmxvYXQoIHZhbCApO1xuXHRcdFx0cmV0dXJuIGV4dHJhID09PSB0cnVlIHx8IGlzRmluaXRlKCBudW0gKSA/IG51bSB8fCAwIDogdmFsO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWw7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiIF0sIGZ1bmN0aW9uKCBfaSwgZGltZW5zaW9uICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIGRpbWVuc2lvbiBdID0ge1xuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkLCBleHRyYSApIHtcblx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0Ly8gQ2VydGFpbiBlbGVtZW50cyBjYW4gaGF2ZSBkaW1lbnNpb24gaW5mbyBpZiB3ZSBpbnZpc2libHkgc2hvdyB0aGVtXG5cdFx0XHRcdC8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0XG5cdFx0XHRcdHJldHVybiByZGlzcGxheXN3YXAudGVzdCggalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSApICYmXG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgOCtcblx0XHRcdFx0XHQvLyBUYWJsZSBjb2x1bW5zIGluIFNhZmFyaSBoYXZlIG5vbi16ZXJvIG9mZnNldFdpZHRoICYgemVyb1xuXHRcdFx0XHRcdC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHVubGVzcyBkaXNwbGF5IGlzIGNoYW5nZWQuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0XHRcdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYSBkaXNjb25uZWN0ZWQgbm9kZVxuXHRcdFx0XHRcdC8vIGluIElFIHRocm93cyBhbiBlcnJvci5cblx0XHRcdFx0XHQoICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoIHx8ICFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICkgP1xuXHRcdFx0XHRcdHN3YXAoIGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgKTtcblx0XHRcdFx0XHR9ICkgOlxuXHRcdFx0XHRcdGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIGV4dHJhICkge1xuXHRcdFx0dmFyIG1hdGNoZXMsXG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApLFxuXG5cdFx0XHRcdC8vIE9ubHkgcmVhZCBzdHlsZXMucG9zaXRpb24gaWYgdGhlIHRlc3QgaGFzIGEgY2hhbmNlIHRvIGZhaWxcblx0XHRcdFx0Ly8gdG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdy5cblx0XHRcdFx0c2Nyb2xsYm94U2l6ZUJ1Z2d5ID0gIXN1cHBvcnQuc2Nyb2xsYm94U2l6ZSgpICYmXG5cdFx0XHRcdFx0c3R5bGVzLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIsXG5cblx0XHRcdFx0Ly8gVG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdywgb25seSBmZXRjaCBib3hTaXppbmcgaWYgd2UgbmVlZCBpdCAoZ2gtMzk5MSlcblx0XHRcdFx0Ym94U2l6aW5nTmVlZGVkID0gc2Nyb2xsYm94U2l6ZUJ1Z2d5IHx8IGV4dHJhLFxuXHRcdFx0XHRpc0JvcmRlckJveCA9IGJveFNpemluZ05lZWRlZCAmJlxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0XHRcdHN1YnRyYWN0ID0gZXh0cmEgP1xuXHRcdFx0XHRcdGJveE1vZGVsQWRqdXN0bWVudChcblx0XHRcdFx0XHRcdGVsZW0sXG5cdFx0XHRcdFx0XHRkaW1lbnNpb24sXG5cdFx0XHRcdFx0XHRleHRyYSxcblx0XHRcdFx0XHRcdGlzQm9yZGVyQm94LFxuXHRcdFx0XHRcdFx0c3R5bGVzXG5cdFx0XHRcdFx0KSA6XG5cdFx0XHRcdFx0MDtcblxuXHRcdFx0Ly8gQWNjb3VudCBmb3IgdW5yZWxpYWJsZSBib3JkZXItYm94IGRpbWVuc2lvbnMgYnkgY29tcGFyaW5nIG9mZnNldCogdG8gY29tcHV0ZWQgYW5kXG5cdFx0XHQvLyBmYWtpbmcgYSBjb250ZW50LWJveCB0byBnZXQgYm9yZGVyIGFuZCBwYWRkaW5nIChnaC0zNjk5KVxuXHRcdFx0aWYgKCBpc0JvcmRlckJveCAmJiBzY3JvbGxib3hTaXplQnVnZ3kgKSB7XG5cdFx0XHRcdHN1YnRyYWN0IC09IE1hdGguY2VpbChcblx0XHRcdFx0XHRlbGVtWyBcIm9mZnNldFwiICsgZGltZW5zaW9uWyAwIF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSggMSApIF0gLVxuXHRcdFx0XHRcdHBhcnNlRmxvYXQoIHN0eWxlc1sgZGltZW5zaW9uIF0gKSAtXG5cdFx0XHRcdFx0Ym94TW9kZWxBZGp1c3RtZW50KCBlbGVtLCBkaW1lbnNpb24sIFwiYm9yZGVyXCIsIGZhbHNlLCBzdHlsZXMgKSAtXG5cdFx0XHRcdFx0MC41XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbnZlcnQgdG8gcGl4ZWxzIGlmIHZhbHVlIGFkanVzdG1lbnQgaXMgbmVlZGVkXG5cdFx0XHRpZiAoIHN1YnRyYWN0ICYmICggbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmXG5cdFx0XHRcdCggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApICE9PSBcInB4XCIgKSB7XG5cblx0XHRcdFx0ZWxlbS5zdHlsZVsgZGltZW5zaW9uIF0gPSB2YWx1ZTtcblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuY3NzKCBlbGVtLCBkaW1lbnNpb24gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFBvc2l0aXZlTnVtYmVyKCBlbGVtLCB2YWx1ZSwgc3VidHJhY3QgKTtcblx0XHR9XG5cdH07XG59ICk7XG5cbmpRdWVyeS5jc3NIb29rcy5tYXJnaW5MZWZ0ID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnJlbGlhYmxlTWFyZ2luTGVmdCxcblx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdGlmICggY29tcHV0ZWQgKSB7XG5cdFx0XHRyZXR1cm4gKCBwYXJzZUZsb2F0KCBjdXJDU1MoIGVsZW0sIFwibWFyZ2luTGVmdFwiICkgKSB8fFxuXHRcdFx0XHRlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuXHRcdFx0XHRcdHN3YXAoIGVsZW0sIHsgbWFyZ2luTGVmdDogMCB9LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG5cdFx0XHRcdFx0fSApXG5cdFx0XHQpICsgXCJweFwiO1xuXHRcdH1cblx0fVxuKTtcblxuLy8gVGhlc2UgaG9va3MgYXJlIHVzZWQgYnkgYW5pbWF0ZSB0byBleHBhbmQgcHJvcGVydGllc1xualF1ZXJ5LmVhY2goIHtcblx0bWFyZ2luOiBcIlwiLFxuXHRwYWRkaW5nOiBcIlwiLFxuXHRib3JkZXI6IFwiV2lkdGhcIlxufSwgZnVuY3Rpb24oIHByZWZpeCwgc3VmZml4ICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdID0ge1xuXHRcdGV4cGFuZDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGkgPSAwLFxuXHRcdFx0XHRleHBhbmRlZCA9IHt9LFxuXG5cdFx0XHRcdC8vIEFzc3VtZXMgYSBzaW5nbGUgbnVtYmVyIGlmIG5vdCBhIHN0cmluZ1xuXHRcdFx0XHRwYXJ0cyA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlLnNwbGl0KCBcIiBcIiApIDogWyB2YWx1ZSBdO1xuXG5cdFx0XHRmb3IgKCA7IGkgPCA0OyBpKysgKSB7XG5cdFx0XHRcdGV4cGFuZGVkWyBwcmVmaXggKyBjc3NFeHBhbmRbIGkgXSArIHN1ZmZpeCBdID1cblx0XHRcdFx0XHRwYXJ0c1sgaSBdIHx8IHBhcnRzWyBpIC0gMiBdIHx8IHBhcnRzWyAwIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBleHBhbmRlZDtcblx0XHR9XG5cdH07XG5cblx0aWYgKCBwcmVmaXggIT09IFwibWFyZ2luXCIgKSB7XG5cdFx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXS5zZXQgPSBzZXRQb3NpdGl2ZU51bWJlcjtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGNzczogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdHZhciBzdHlsZXMsIGxlbixcblx0XHRcdFx0bWFwID0ge30sXG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG5hbWUgKSApIHtcblx0XHRcdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICk7XG5cdFx0XHRcdGxlbiA9IG5hbWUubGVuZ3RoO1xuXG5cdFx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRcdG1hcFsgbmFtZVsgaSBdIF0gPSBqUXVlcnkuY3NzKCBlbGVtLCBuYW1lWyBpIF0sIGZhbHNlLCBzdHlsZXMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBtYXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lLCB2YWx1ZSApIDpcblx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgbmFtZSApO1xuXHRcdH0sIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9XG59ICk7XG5cblxuZnVuY3Rpb24gVHdlZW4oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nICkge1xuXHRyZXR1cm4gbmV3IFR3ZWVuLnByb3RvdHlwZS5pbml0KCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApO1xufVxualF1ZXJ5LlR3ZWVuID0gVHdlZW47XG5cblR3ZWVuLnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IFR3ZWVuLFxuXHRpbml0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcsIHVuaXQgKSB7XG5cdFx0dGhpcy5lbGVtID0gZWxlbTtcblx0XHR0aGlzLnByb3AgPSBwcm9wO1xuXHRcdHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8IGpRdWVyeS5lYXNpbmcuX2RlZmF1bHQ7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnN0YXJ0ID0gdGhpcy5ub3cgPSB0aGlzLmN1cigpO1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHRcdHRoaXMudW5pdCA9IHVuaXQgfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gPyBcIlwiIDogXCJweFwiICk7XG5cdH0sXG5cdGN1cjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzWyB0aGlzLnByb3AgXTtcblxuXHRcdHJldHVybiBob29rcyAmJiBob29rcy5nZXQgP1xuXHRcdFx0aG9va3MuZ2V0KCB0aGlzICkgOlxuXHRcdFx0VHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LmdldCggdGhpcyApO1xuXHR9LFxuXHRydW46IGZ1bmN0aW9uKCBwZXJjZW50ICkge1xuXHRcdHZhciBlYXNlZCxcblx0XHRcdGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzWyB0aGlzLnByb3AgXTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmR1cmF0aW9uICkge1xuXHRcdFx0dGhpcy5wb3MgPSBlYXNlZCA9IGpRdWVyeS5lYXNpbmdbIHRoaXMuZWFzaW5nIF0oXG5cdFx0XHRcdHBlcmNlbnQsIHRoaXMub3B0aW9ucy5kdXJhdGlvbiAqIHBlcmNlbnQsIDAsIDEsIHRoaXMub3B0aW9ucy5kdXJhdGlvblxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb3MgPSBlYXNlZCA9IHBlcmNlbnQ7XG5cdFx0fVxuXHRcdHRoaXMubm93ID0gKCB0aGlzLmVuZCAtIHRoaXMuc3RhcnQgKSAqIGVhc2VkICsgdGhpcy5zdGFydDtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnN0ZXAgKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKCB0aGlzLmVsZW0sIHRoaXMubm93LCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBob29rcy5zZXQgKSB7XG5cdFx0XHRob29rcy5zZXQoIHRoaXMgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0VHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LnNldCggdGhpcyApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcblxuVHdlZW4ucHJvdG90eXBlLmluaXQucHJvdG90eXBlID0gVHdlZW4ucHJvdG90eXBlO1xuXG5Ud2Vlbi5wcm9wSG9va3MgPSB7XG5cdF9kZWZhdWx0OiB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXG5cdFx0XHQvLyBVc2UgYSBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudCBkaXJlY3RseSB3aGVuIGl0IGlzIG5vdCBhIERPTSBlbGVtZW50LFxuXHRcdFx0Ly8gb3Igd2hlbiB0aGVyZSBpcyBubyBtYXRjaGluZyBzdHlsZSBwcm9wZXJ0eSB0aGF0IGV4aXN0cy5cblx0XHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAhPT0gMSB8fFxuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gIT0gbnVsbCAmJiB0d2Vlbi5lbGVtLnN0eWxlWyB0d2Vlbi5wcm9wIF0gPT0gbnVsbCApIHtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSAzcmQgcGFyYW1ldGVyIHRvIC5jc3Mgd2lsbCBhdXRvbWF0aWNhbGx5XG5cdFx0XHQvLyBhdHRlbXB0IGEgcGFyc2VGbG9hdCBhbmQgZmFsbGJhY2sgdG8gYSBzdHJpbmcgaWYgdGhlIHBhcnNlIGZhaWxzLlxuXHRcdFx0Ly8gU2ltcGxlIHZhbHVlcyBzdWNoIGFzIFwiMTBweFwiIGFyZSBwYXJzZWQgdG8gRmxvYXQ7XG5cdFx0XHQvLyBjb21wbGV4IHZhbHVlcyBzdWNoIGFzIFwicm90YXRlKDFyYWQpXCIgYXJlIHJldHVybmVkIGFzLWlzLlxuXHRcdFx0cmVzdWx0ID0galF1ZXJ5LmNzcyggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgXCJcIiApO1xuXG5cdFx0XHQvLyBFbXB0eSBzdHJpbmdzLCBudWxsLCB1bmRlZmluZWQgYW5kIFwiYXV0b1wiIGFyZSBjb252ZXJ0ZWQgdG8gMC5cblx0XHRcdHJldHVybiAhcmVzdWx0IHx8IHJlc3VsdCA9PT0gXCJhdXRvXCIgPyAwIDogcmVzdWx0O1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG5cblx0XHRcdC8vIFVzZSBzdGVwIGhvb2sgZm9yIGJhY2sgY29tcGF0LlxuXHRcdFx0Ly8gVXNlIGNzc0hvb2sgaWYgaXRzIHRoZXJlLlxuXHRcdFx0Ly8gVXNlIC5zdHlsZSBpZiBhdmFpbGFibGUgYW5kIHVzZSBwbGFpbiBwcm9wZXJ0aWVzIHdoZXJlIGF2YWlsYWJsZS5cblx0XHRcdGlmICggalF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSApIHtcblx0XHRcdFx0alF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSggdHdlZW4gKTtcblx0XHRcdH0gZWxzZSBpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKFxuXHRcdFx0XHRqUXVlcnkuY3NzSG9va3NbIHR3ZWVuLnByb3AgXSB8fFxuXHRcdFx0XHRcdHR3ZWVuLmVsZW0uc3R5bGVbIGZpbmFsUHJvcE5hbWUoIHR3ZWVuLnByb3AgKSBdICE9IG51bGwgKSApIHtcblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCB0d2Vlbi5ub3cgKyB0d2Vlbi51bml0ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuLy8gUGFuaWMgYmFzZWQgYXBwcm9hY2ggdG8gc2V0dGluZyB0aGluZ3Mgb24gZGlzY29ubmVjdGVkIG5vZGVzXG5Ud2Vlbi5wcm9wSG9va3Muc2Nyb2xsVG9wID0gVHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQgPSB7XG5cdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZWFzaW5nID0ge1xuXHRsaW5lYXI6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiBwO1xuXHR9LFxuXHRzd2luZzogZnVuY3Rpb24oIHAgKSB7XG5cdFx0cmV0dXJuIDAuNSAtIE1hdGguY29zKCBwICogTWF0aC5QSSApIC8gMjtcblx0fSxcblx0X2RlZmF1bHQ6IFwic3dpbmdcIlxufTtcblxualF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XG5cbi8vIEJhY2sgY29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG5qUXVlcnkuZnguc3RlcCA9IHt9O1xuXG5cblxuXG52YXJcblx0ZnhOb3csIGluUHJvZ3Jlc3MsXG5cdHJmeHR5cGVzID0gL14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFxuXHRycnVuID0gL3F1ZXVlSG9va3MkLztcblxuZnVuY3Rpb24gc2NoZWR1bGUoKSB7XG5cdGlmICggaW5Qcm9ncmVzcyApIHtcblx0XHRpZiAoIGRvY3VtZW50LmhpZGRlbiA9PT0gZmFsc2UgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSApIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHNjaGVkdWxlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBzY2hlZHVsZSwgalF1ZXJ5LmZ4LmludGVydmFsICk7XG5cdFx0fVxuXG5cdFx0alF1ZXJ5LmZ4LnRpY2soKTtcblx0fVxufVxuXG4vLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XG5mdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdGZ4Tm93ID0gdW5kZWZpbmVkO1xuXHR9ICk7XG5cdHJldHVybiAoIGZ4Tm93ID0gRGF0ZS5ub3coKSApO1xufVxuXG4vLyBHZW5lcmF0ZSBwYXJhbWV0ZXJzIHRvIGNyZWF0ZSBhIHN0YW5kYXJkIGFuaW1hdGlvblxuZnVuY3Rpb24gZ2VuRngoIHR5cGUsIGluY2x1ZGVXaWR0aCApIHtcblx0dmFyIHdoaWNoLFxuXHRcdGkgPSAwLFxuXHRcdGF0dHJzID0geyBoZWlnaHQ6IHR5cGUgfTtcblxuXHQvLyBJZiB3ZSBpbmNsdWRlIHdpZHRoLCBzdGVwIHZhbHVlIGlzIDEgdG8gZG8gYWxsIGNzc0V4cGFuZCB2YWx1ZXMsXG5cdC8vIG90aGVyd2lzZSBzdGVwIHZhbHVlIGlzIDIgdG8gc2tpcCBvdmVyIExlZnQgYW5kIFJpZ2h0XG5cdGluY2x1ZGVXaWR0aCA9IGluY2x1ZGVXaWR0aCA/IDEgOiAwO1xuXHRmb3IgKCA7IGkgPCA0OyBpICs9IDIgLSBpbmNsdWRlV2lkdGggKSB7XG5cdFx0d2hpY2ggPSBjc3NFeHBhbmRbIGkgXTtcblx0XHRhdHRyc1sgXCJtYXJnaW5cIiArIHdoaWNoIF0gPSBhdHRyc1sgXCJwYWRkaW5nXCIgKyB3aGljaCBdID0gdHlwZTtcblx0fVxuXG5cdGlmICggaW5jbHVkZVdpZHRoICkge1xuXHRcdGF0dHJzLm9wYWNpdHkgPSBhdHRycy53aWR0aCA9IHR5cGU7XG5cdH1cblxuXHRyZXR1cm4gYXR0cnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVR3ZWVuKCB2YWx1ZSwgcHJvcCwgYW5pbWF0aW9uICkge1xuXHR2YXIgdHdlZW4sXG5cdFx0Y29sbGVjdGlvbiA9ICggQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gfHwgW10gKS5jb25jYXQoIEFuaW1hdGlvbi50d2VlbmVyc1sgXCIqXCIgXSApLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRpZiAoICggdHdlZW4gPSBjb2xsZWN0aW9uWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgcHJvcCwgdmFsdWUgKSApICkge1xuXG5cdFx0XHQvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBwcm9wZXJ0eVxuXHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJlZmlsdGVyKCBlbGVtLCBwcm9wcywgb3B0cyApIHtcblx0dmFyIHByb3AsIHZhbHVlLCB0b2dnbGUsIGhvb2tzLCBvbGRmaXJlLCBwcm9wVHdlZW4sIHJlc3RvcmVEaXNwbGF5LCBkaXNwbGF5LFxuXHRcdGlzQm94ID0gXCJ3aWR0aFwiIGluIHByb3BzIHx8IFwiaGVpZ2h0XCIgaW4gcHJvcHMsXG5cdFx0YW5pbSA9IHRoaXMsXG5cdFx0b3JpZyA9IHt9LFxuXHRcdHN0eWxlID0gZWxlbS5zdHlsZSxcblx0XHRoaWRkZW4gPSBlbGVtLm5vZGVUeXBlICYmIGlzSGlkZGVuV2l0aGluVHJlZSggZWxlbSApLFxuXHRcdGRhdGFTaG93ID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcImZ4c2hvd1wiICk7XG5cblx0Ly8gUXVldWUtc2tpcHBpbmcgYW5pbWF0aW9ucyBoaWphY2sgdGhlIGZ4IGhvb2tzXG5cdGlmICggIW9wdHMucXVldWUgKSB7XG5cdFx0aG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoIGVsZW0sIFwiZnhcIiApO1xuXHRcdGlmICggaG9va3MudW5xdWV1ZWQgPT0gbnVsbCApIHtcblx0XHRcdGhvb2tzLnVucXVldWVkID0gMDtcblx0XHRcdG9sZGZpcmUgPSBob29rcy5lbXB0eS5maXJlO1xuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICFob29rcy51bnF1ZXVlZCApIHtcblx0XHRcdFx0XHRvbGRmaXJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdGhvb2tzLnVucXVldWVkKys7XG5cblx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEVuc3VyZSB0aGUgY29tcGxldGUgaGFuZGxlciBpcyBjYWxsZWQgYmVmb3JlIHRoaXMgY29tcGxldGVzXG5cdFx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGhvb2tzLnVucXVldWVkLS07XG5cdFx0XHRcdGlmICggIWpRdWVyeS5xdWV1ZSggZWxlbSwgXCJmeFwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIERldGVjdCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRmb3IgKCBwcm9wIGluIHByb3BzICkge1xuXHRcdHZhbHVlID0gcHJvcHNbIHByb3AgXTtcblx0XHRpZiAoIHJmeHR5cGVzLnRlc3QoIHZhbHVlICkgKSB7XG5cdFx0XHRkZWxldGUgcHJvcHNbIHByb3AgXTtcblx0XHRcdHRvZ2dsZSA9IHRvZ2dsZSB8fCB2YWx1ZSA9PT0gXCJ0b2dnbGVcIjtcblx0XHRcdGlmICggdmFsdWUgPT09ICggaGlkZGVuID8gXCJoaWRlXCIgOiBcInNob3dcIiApICkge1xuXG5cdFx0XHRcdC8vIFByZXRlbmQgdG8gYmUgaGlkZGVuIGlmIHRoaXMgaXMgYSBcInNob3dcIiBhbmRcblx0XHRcdFx0Ly8gdGhlcmUgaXMgc3RpbGwgZGF0YSBmcm9tIGEgc3RvcHBlZCBzaG93L2hpZGVcblx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gXCJzaG93XCIgJiYgZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdGhpZGRlbiA9IHRydWU7XG5cblx0XHRcdFx0Ly8gSWdub3JlIGFsbCBvdGhlciBuby1vcCBzaG93L2hpZGUgZGF0YVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRvcmlnWyBwcm9wIF0gPSBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdIHx8IGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCApO1xuXHRcdH1cblx0fVxuXG5cdC8vIEJhaWwgb3V0IGlmIHRoaXMgaXMgYSBuby1vcCBsaWtlIC5oaWRlKCkuaGlkZSgpXG5cdHByb3BUd2VlbiA9ICFqUXVlcnkuaXNFbXB0eU9iamVjdCggcHJvcHMgKTtcblx0aWYgKCAhcHJvcFR3ZWVuICYmIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBvcmlnICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUmVzdHJpY3QgXCJvdmVyZmxvd1wiIGFuZCBcImRpc3BsYXlcIiBzdHlsZXMgZHVyaW5nIGJveCBhbmltYXRpb25zXG5cdGlmICggaXNCb3ggJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTVcblx0XHQvLyBSZWNvcmQgYWxsIDMgb3ZlcmZsb3cgYXR0cmlidXRlcyBiZWNhdXNlIElFIGRvZXMgbm90IGluZmVyIHRoZSBzaG9ydGhhbmRcblx0XHQvLyBmcm9tIGlkZW50aWNhbGx5LXZhbHVlZCBvdmVyZmxvd1ggYW5kIG92ZXJmbG93WSBhbmQgRWRnZSBqdXN0IG1pcnJvcnNcblx0XHQvLyB0aGUgb3ZlcmZsb3dYIHZhbHVlIHRoZXJlLlxuXHRcdG9wdHMub3ZlcmZsb3cgPSBbIHN0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WSBdO1xuXG5cdFx0Ly8gSWRlbnRpZnkgYSBkaXNwbGF5IHR5cGUsIHByZWZlcnJpbmcgb2xkIHNob3cvaGlkZSBkYXRhIG92ZXIgdGhlIENTUyBjYXNjYWRlXG5cdFx0cmVzdG9yZURpc3BsYXkgPSBkYXRhU2hvdyAmJiBkYXRhU2hvdy5kaXNwbGF5O1xuXHRcdGlmICggcmVzdG9yZURpc3BsYXkgPT0gbnVsbCApIHtcblx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdH1cblx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdFx0aWYgKCByZXN0b3JlRGlzcGxheSApIHtcblx0XHRcdFx0ZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBHZXQgbm9uZW1wdHkgdmFsdWUocykgYnkgdGVtcG9yYXJpbHkgZm9yY2luZyB2aXNpYmlsaXR5XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSwgdHJ1ZSApO1xuXHRcdFx0XHRyZXN0b3JlRGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheSB8fCByZXN0b3JlRGlzcGxheTtcblx0XHRcdFx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFuaW1hdGUgaW5saW5lIGVsZW1lbnRzIGFzIGlubGluZS1ibG9ja1xuXHRcdGlmICggZGlzcGxheSA9PT0gXCJpbmxpbmVcIiB8fCBkaXNwbGF5ID09PSBcImlubGluZS1ibG9ja1wiICYmIHJlc3RvcmVEaXNwbGF5ICE9IG51bGwgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwiZmxvYXRcIiApID09PSBcIm5vbmVcIiApIHtcblxuXHRcdFx0XHQvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBkaXNwbGF5IHZhbHVlIGF0IHRoZSBlbmQgb2YgcHVyZSBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRcdFx0XHRpZiAoICFwcm9wVHdlZW4gKSB7XG5cdFx0XHRcdFx0YW5pbS5kb25lKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHN0eWxlLmRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0aWYgKCByZXN0b3JlRGlzcGxheSA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0ZGlzcGxheSA9IHN0eWxlLmRpc3BsYXk7XG5cdFx0XHRcdFx0XHRyZXN0b3JlRGlzcGxheSA9IGRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJcIiA6IGRpc3BsYXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICggb3B0cy5vdmVyZmxvdyApIHtcblx0XHRzdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0c3R5bGUub3ZlcmZsb3cgPSBvcHRzLm92ZXJmbG93WyAwIF07XG5cdFx0XHRzdHlsZS5vdmVyZmxvd1ggPSBvcHRzLm92ZXJmbG93WyAxIF07XG5cdFx0XHRzdHlsZS5vdmVyZmxvd1kgPSBvcHRzLm92ZXJmbG93WyAyIF07XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gSW1wbGVtZW50IHNob3cvaGlkZSBhbmltYXRpb25zXG5cdHByb3BUd2VlbiA9IGZhbHNlO1xuXHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cblx0XHQvLyBHZW5lcmFsIHNob3cvaGlkZSBzZXR1cCBmb3IgdGhpcyBlbGVtZW50IGFuaW1hdGlvblxuXHRcdGlmICggIXByb3BUd2VlbiApIHtcblx0XHRcdGlmICggZGF0YVNob3cgKSB7XG5cdFx0XHRcdGlmICggXCJoaWRkZW5cIiBpbiBkYXRhU2hvdyApIHtcblx0XHRcdFx0XHRoaWRkZW4gPSBkYXRhU2hvdy5oaWRkZW47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRhdGFTaG93ID0gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBcImZ4c2hvd1wiLCB7IGRpc3BsYXk6IHJlc3RvcmVEaXNwbGF5IH0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RvcmUgaGlkZGVuL3Zpc2libGUgZm9yIHRvZ2dsZSBzbyBgLnN0b3AoKS50b2dnbGUoKWAgXCJyZXZlcnNlc1wiXG5cdFx0XHRpZiAoIHRvZ2dsZSApIHtcblx0XHRcdFx0ZGF0YVNob3cuaGlkZGVuID0gIWhpZGRlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2hvdyBlbGVtZW50cyBiZWZvcmUgYW5pbWF0aW5nIHRoZW1cblx0XHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0sIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cblx0XHRcdGFuaW0uZG9uZSggZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuXHRcdFx0XHQvLyBUaGUgZmluYWwgc3RlcCBvZiBhIFwiaGlkZVwiIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBoaWRpbmcgdGhlIGVsZW1lbnRcblx0XHRcdFx0aWYgKCAhaGlkZGVuICkge1xuXHRcdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJmeHNob3dcIiApO1xuXHRcdFx0XHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBvcmlnWyBwcm9wIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdC8vIFBlci1wcm9wZXJ0eSBzZXR1cFxuXHRcdHByb3BUd2VlbiA9IGNyZWF0ZVR3ZWVuKCBoaWRkZW4gPyBkYXRhU2hvd1sgcHJvcCBdIDogMCwgcHJvcCwgYW5pbSApO1xuXHRcdGlmICggISggcHJvcCBpbiBkYXRhU2hvdyApICkge1xuXHRcdFx0ZGF0YVNob3dbIHByb3AgXSA9IHByb3BUd2Vlbi5zdGFydDtcblx0XHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0XHRwcm9wVHdlZW4uZW5kID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0XHRwcm9wVHdlZW4uc3RhcnQgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBwcm9wRmlsdGVyKCBwcm9wcywgc3BlY2lhbEVhc2luZyApIHtcblx0dmFyIGluZGV4LCBuYW1lLCBlYXNpbmcsIHZhbHVlLCBob29rcztcblxuXHQvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3Ncblx0Zm9yICggaW5kZXggaW4gcHJvcHMgKSB7XG5cdFx0bmFtZSA9IGNhbWVsQ2FzZSggaW5kZXggKTtcblx0XHRlYXNpbmcgPSBzcGVjaWFsRWFzaW5nWyBuYW1lIF07XG5cdFx0dmFsdWUgPSBwcm9wc1sgaW5kZXggXTtcblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRlYXNpbmcgPSB2YWx1ZVsgMSBdO1xuXHRcdFx0dmFsdWUgPSBwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyAwIF07XG5cdFx0fVxuXG5cdFx0aWYgKCBpbmRleCAhPT0gbmFtZSApIHtcblx0XHRcdHByb3BzWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgaW5kZXggXTtcblx0XHR9XG5cblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdO1xuXHRcdGlmICggaG9va3MgJiYgXCJleHBhbmRcIiBpbiBob29rcyApIHtcblx0XHRcdHZhbHVlID0gaG9va3MuZXhwYW5kKCB2YWx1ZSApO1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBuYW1lIF07XG5cblx0XHRcdC8vIE5vdCBxdWl0ZSAkLmV4dGVuZCwgdGhpcyB3b24ndCBvdmVyd3JpdGUgZXhpc3Rpbmcga2V5cy5cblx0XHRcdC8vIFJldXNpbmcgJ2luZGV4JyBiZWNhdXNlIHdlIGhhdmUgdGhlIGNvcnJlY3QgXCJuYW1lXCJcblx0XHRcdGZvciAoIGluZGV4IGluIHZhbHVlICkge1xuXHRcdFx0XHRpZiAoICEoIGluZGV4IGluIHByb3BzICkgKSB7XG5cdFx0XHRcdFx0cHJvcHNbIGluZGV4IF0gPSB2YWx1ZVsgaW5kZXggXTtcblx0XHRcdFx0XHRzcGVjaWFsRWFzaW5nWyBpbmRleCBdID0gZWFzaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNwZWNpYWxFYXNpbmdbIG5hbWUgXSA9IGVhc2luZztcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gQW5pbWF0aW9uKCBlbGVtLCBwcm9wZXJ0aWVzLCBvcHRpb25zICkge1xuXHR2YXIgcmVzdWx0LFxuXHRcdHN0b3BwZWQsXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzLmxlbmd0aCxcblx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIERvbid0IG1hdGNoIGVsZW0gaW4gdGhlIDphbmltYXRlZCBzZWxlY3RvclxuXHRcdFx0ZGVsZXRlIHRpY2suZWxlbTtcblx0XHR9ICksXG5cdFx0dGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBzdG9wcGVkICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgY3VycmVudFRpbWUgPSBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0XHRyZW1haW5pbmcgPSBNYXRoLm1heCggMCwgYW5pbWF0aW9uLnN0YXJ0VGltZSArIGFuaW1hdGlvbi5kdXJhdGlvbiAtIGN1cnJlbnRUaW1lICksXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCAyLjMgb25seVxuXHRcdFx0XHQvLyBBcmNoYWljIGNyYXNoIGJ1ZyB3b24ndCBhbGxvdyB1cyB0byB1c2UgYDEgLSAoIDAuNSB8fCAwIClgICh0cmFjLTEyNDk3KVxuXHRcdFx0XHR0ZW1wID0gcmVtYWluaW5nIC8gYW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAsXG5cdFx0XHRcdHBlcmNlbnQgPSAxIC0gdGVtcCxcblx0XHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0XHRsZW5ndGggPSBhbmltYXRpb24udHdlZW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIHBlcmNlbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZyBdICk7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgbW9yZSB0byBkbywgeWllbGRcblx0XHRcdGlmICggcGVyY2VudCA8IDEgJiYgbGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gcmVtYWluaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIHdhcyBhbiBlbXB0eSBhbmltYXRpb24sIHN5bnRoZXNpemUgYSBmaW5hbCBwcm9ncmVzcyBub3RpZmljYXRpb25cblx0XHRcdGlmICggIWxlbmd0aCApIHtcblx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIDEsIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXNvbHZlIHRoZSBhbmltYXRpb24gYW5kIHJlcG9ydCBpdHMgY29uY2x1c2lvblxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uIF0gKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2UoIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRwcm9wczogalF1ZXJ5LmV4dGVuZCgge30sIHByb3BlcnRpZXMgKSxcblx0XHRcdG9wdHM6IGpRdWVyeS5leHRlbmQoIHRydWUsIHtcblx0XHRcdFx0c3BlY2lhbEVhc2luZzoge30sXG5cdFx0XHRcdGVhc2luZzogalF1ZXJ5LmVhc2luZy5fZGVmYXVsdFxuXHRcdFx0fSwgb3B0aW9ucyApLFxuXHRcdFx0b3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuXHRcdFx0b3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lOiBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0ZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG5cdFx0XHR0d2VlbnM6IFtdLFxuXHRcdFx0Y3JlYXRlVHdlZW46IGZ1bmN0aW9uKCBwcm9wLCBlbmQgKSB7XG5cdFx0XHRcdHZhciB0d2VlbiA9IGpRdWVyeS5Ud2VlbiggZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCxcblx0XHRcdFx0XHRhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nWyBwcm9wIF0gfHwgYW5pbWF0aW9uLm9wdHMuZWFzaW5nICk7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnMucHVzaCggdHdlZW4gKTtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdFx0fSxcblx0XHRcdHN0b3A6IGZ1bmN0aW9uKCBnb3RvRW5kICkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSAwLFxuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXG5cdFx0XHRcdFx0Ly8gb3RoZXJ3aXNlIHdlIHNraXAgdGhpcyBwYXJ0XG5cdFx0XHRcdFx0bGVuZ3RoID0gZ290b0VuZCA/IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoIDogMDtcblx0XHRcdFx0aWYgKCBzdG9wcGVkICkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0XHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCAxICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXNvbHZlIHdoZW4gd2UgcGxheWVkIHRoZSBsYXN0IGZyYW1lOyBvdGhlcndpc2UsIHJlamVjdFxuXHRcdFx0XHRpZiAoIGdvdG9FbmQgKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIDEsIDAgXSApO1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIGdvdG9FbmQgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH0gKSxcblx0XHRwcm9wcyA9IGFuaW1hdGlvbi5wcm9wcztcblxuXHRwcm9wRmlsdGVyKCBwcm9wcywgYW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZyApO1xuXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0cmVzdWx0ID0gQW5pbWF0aW9uLnByZWZpbHRlcnNbIGluZGV4IF0uY2FsbCggYW5pbWF0aW9uLCBlbGVtLCBwcm9wcywgYW5pbWF0aW9uLm9wdHMgKTtcblx0XHRpZiAoIHJlc3VsdCApIHtcblx0XHRcdGlmICggaXNGdW5jdGlvbiggcmVzdWx0LnN0b3AgKSApIHtcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCBhbmltYXRpb24uZWxlbSwgYW5pbWF0aW9uLm9wdHMucXVldWUgKS5zdG9wID1cblx0XHRcdFx0XHRyZXN1bHQuc3RvcC5iaW5kKCByZXN1bHQgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XG5cblx0alF1ZXJ5Lm1hcCggcHJvcHMsIGNyZWF0ZVR3ZWVuLCBhbmltYXRpb24gKTtcblxuXHRpZiAoIGlzRnVuY3Rpb24oIGFuaW1hdGlvbi5vcHRzLnN0YXJ0ICkgKSB7XG5cdFx0YW5pbWF0aW9uLm9wdHMuc3RhcnQuY2FsbCggZWxlbSwgYW5pbWF0aW9uICk7XG5cdH1cblxuXHQvLyBBdHRhY2ggY2FsbGJhY2tzIGZyb20gb3B0aW9uc1xuXHRhbmltYXRpb25cblx0XHQucHJvZ3Jlc3MoIGFuaW1hdGlvbi5vcHRzLnByb2dyZXNzIClcblx0XHQuZG9uZSggYW5pbWF0aW9uLm9wdHMuZG9uZSwgYW5pbWF0aW9uLm9wdHMuY29tcGxldGUgKVxuXHRcdC5mYWlsKCBhbmltYXRpb24ub3B0cy5mYWlsIClcblx0XHQuYWx3YXlzKCBhbmltYXRpb24ub3B0cy5hbHdheXMgKTtcblxuXHRqUXVlcnkuZngudGltZXIoXG5cdFx0alF1ZXJ5LmV4dGVuZCggdGljaywge1xuXHRcdFx0ZWxlbTogZWxlbSxcblx0XHRcdGFuaW06IGFuaW1hdGlvbixcblx0XHRcdHF1ZXVlOiBhbmltYXRpb24ub3B0cy5xdWV1ZVxuXHRcdH0gKVxuXHQpO1xuXG5cdHJldHVybiBhbmltYXRpb247XG59XG5cbmpRdWVyeS5BbmltYXRpb24gPSBqUXVlcnkuZXh0ZW5kKCBBbmltYXRpb24sIHtcblxuXHR0d2VlbmVyczoge1xuXHRcdFwiKlwiOiBbIGZ1bmN0aW9uKCBwcm9wLCB2YWx1ZSApIHtcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuY3JlYXRlVHdlZW4oIHByb3AsIHZhbHVlICk7XG5cdFx0XHRhZGp1c3RDU1MoIHR3ZWVuLmVsZW0sIHByb3AsIHJjc3NOdW0uZXhlYyggdmFsdWUgKSwgdHdlZW4gKTtcblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9IF1cblx0fSxcblxuXHR0d2VlbmVyOiBmdW5jdGlvbiggcHJvcHMsIGNhbGxiYWNrICkge1xuXHRcdGlmICggaXNGdW5jdGlvbiggcHJvcHMgKSApIHtcblx0XHRcdGNhbGxiYWNrID0gcHJvcHM7XG5cdFx0XHRwcm9wcyA9IFsgXCIqXCIgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5tYXRjaCggcm5vdGh0bWx3aGl0ZSApO1xuXHRcdH1cblxuXHRcdHZhciBwcm9wLFxuXHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0bGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdHByb3AgPSBwcm9wc1sgaW5kZXggXTtcblx0XHRcdEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdID0gQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gfHwgW107XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXS51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH1cblx0fSxcblxuXHRwcmVmaWx0ZXJzOiBbIGRlZmF1bHRQcmVmaWx0ZXIgXSxcblxuXHRwcmVmaWx0ZXI6IGZ1bmN0aW9uKCBjYWxsYmFjaywgcHJlcGVuZCApIHtcblx0XHRpZiAoIHByZXBlbmQgKSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy5wdXNoKCBjYWxsYmFjayApO1xuXHRcdH1cblx0fVxufSApO1xuXG5qUXVlcnkuc3BlZWQgPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgZm4gKSB7XG5cdHZhciBvcHQgPSBzcGVlZCAmJiB0eXBlb2Ygc3BlZWQgPT09IFwib2JqZWN0XCIgPyBqUXVlcnkuZXh0ZW5kKCB7fSwgc3BlZWQgKSA6IHtcblx0XHRjb21wbGV0ZTogZm4gfHwgIWZuICYmIGVhc2luZyB8fFxuXHRcdFx0aXNGdW5jdGlvbiggc3BlZWQgKSAmJiBzcGVlZCxcblx0XHRkdXJhdGlvbjogc3BlZWQsXG5cdFx0ZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmICFpc0Z1bmN0aW9uKCBlYXNpbmcgKSAmJiBlYXNpbmdcblx0fTtcblxuXHQvLyBHbyB0byB0aGUgZW5kIHN0YXRlIGlmIGZ4IGFyZSBvZmZcblx0aWYgKCBqUXVlcnkuZngub2ZmICkge1xuXHRcdG9wdC5kdXJhdGlvbiA9IDA7XG5cblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGVvZiBvcHQuZHVyYXRpb24gIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRpZiAoIG9wdC5kdXJhdGlvbiBpbiBqUXVlcnkuZnguc3BlZWRzICkge1xuXHRcdFx0XHRvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzWyBvcHQuZHVyYXRpb24gXTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkcy5fZGVmYXVsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgb3B0LnF1ZXVlIC0gdHJ1ZS91bmRlZmluZWQvbnVsbCAtPiBcImZ4XCJcblx0aWYgKCBvcHQucXVldWUgPT0gbnVsbCB8fCBvcHQucXVldWUgPT09IHRydWUgKSB7XG5cdFx0b3B0LnF1ZXVlID0gXCJmeFwiO1xuXHR9XG5cblx0Ly8gUXVldWVpbmdcblx0b3B0Lm9sZCA9IG9wdC5jb21wbGV0ZTtcblxuXHRvcHQuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIGlzRnVuY3Rpb24oIG9wdC5vbGQgKSApIHtcblx0XHRcdG9wdC5vbGQuY2FsbCggdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggb3B0LnF1ZXVlICkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIG9wdC5xdWV1ZSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gb3B0O1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRmYWRlVG86IGZ1bmN0aW9uKCBzcGVlZCwgdG8sIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cblx0XHQvLyBTaG93IGFueSBoaWRkZW4gZWxlbWVudHMgYWZ0ZXIgc2V0dGluZyBvcGFjaXR5IHRvIDBcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGlzSGlkZGVuV2l0aGluVHJlZSApLmNzcyggXCJvcGFjaXR5XCIsIDAgKS5zaG93KClcblxuXHRcdFx0Ly8gQW5pbWF0ZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkXG5cdFx0XHQuZW5kKCkuYW5pbWF0ZSggeyBvcGFjaXR5OiB0byB9LCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9LFxuXHRhbmltYXRlOiBmdW5jdGlvbiggcHJvcCwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0dmFyIGVtcHR5ID0galF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3AgKSxcblx0XHRcdG9wdGFsbCA9IGpRdWVyeS5zcGVlZCggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSxcblx0XHRcdGRvQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gT3BlcmF0ZSBvbiBhIGNvcHkgb2YgcHJvcCBzbyBwZXItcHJvcGVydHkgZWFzaW5nIHdvbid0IGJlIGxvc3Rcblx0XHRcdFx0dmFyIGFuaW0gPSBBbmltYXRpb24oIHRoaXMsIGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wICksIG9wdGFsbCApO1xuXG5cdFx0XHRcdC8vIEVtcHR5IGFuaW1hdGlvbnMsIG9yIGZpbmlzaGluZyByZXNvbHZlcyBpbW1lZGlhdGVseVxuXHRcdFx0XHRpZiAoIGVtcHR5IHx8IGRhdGFQcml2LmdldCggdGhpcywgXCJmaW5pc2hcIiApICkge1xuXHRcdFx0XHRcdGFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0ZG9BbmltYXRpb24uZmluaXNoID0gZG9BbmltYXRpb247XG5cblx0XHRyZXR1cm4gZW1wdHkgfHwgb3B0YWxsLnF1ZXVlID09PSBmYWxzZSA/XG5cdFx0XHR0aGlzLmVhY2goIGRvQW5pbWF0aW9uICkgOlxuXHRcdFx0dGhpcy5xdWV1ZSggb3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbiApO1xuXHR9LFxuXHRzdG9wOiBmdW5jdGlvbiggdHlwZSwgY2xlYXJRdWV1ZSwgZ290b0VuZCApIHtcblx0XHR2YXIgc3RvcFF1ZXVlID0gZnVuY3Rpb24oIGhvb2tzICkge1xuXHRcdFx0dmFyIHN0b3AgPSBob29rcy5zdG9wO1xuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRzdG9wKCBnb3RvRW5kICk7XG5cdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRnb3RvRW5kID0gY2xlYXJRdWV1ZTtcblx0XHRcdGNsZWFyUXVldWUgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBjbGVhclF1ZXVlICkge1xuXHRcdFx0dGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGVxdWV1ZSA9IHRydWUsXG5cdFx0XHRcdGluZGV4ID0gdHlwZSAhPSBudWxsICYmIHR5cGUgKyBcInF1ZXVlSG9va3NcIixcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApO1xuXG5cdFx0XHRpZiAoIGluZGV4ICkge1xuXHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICkge1xuXHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKCBpbmRleCBpbiBkYXRhICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgJiYgcnJ1bi50ZXN0KCBpbmRleCApICkge1xuXHRcdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiZcblx0XHRcdFx0XHQoIHR5cGUgPT0gbnVsbCB8fCB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSApIHtcblxuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIGdvdG9FbmQgKTtcblx0XHRcdFx0XHRkZXF1ZXVlID0gZmFsc2U7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGFydCB0aGUgbmV4dCBpbiB0aGUgcXVldWUgaWYgdGhlIGxhc3Qgc3RlcCB3YXNuJ3QgZm9yY2VkLlxuXHRcdFx0Ly8gVGltZXJzIGN1cnJlbnRseSB3aWxsIGNhbGwgdGhlaXIgY29tcGxldGUgY2FsbGJhY2tzLCB3aGljaFxuXHRcdFx0Ly8gd2lsbCBkZXF1ZXVlIGJ1dCBvbmx5IGlmIHRoZXkgd2VyZSBnb3RvRW5kLlxuXHRcdFx0aWYgKCBkZXF1ZXVlIHx8ICFnb3RvRW5kICkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblx0ZmluaXNoOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRpZiAoIHR5cGUgIT09IGZhbHNlICkge1xuXHRcdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApLFxuXHRcdFx0XHRxdWV1ZSA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlXCIgXSxcblx0XHRcdFx0aG9va3MgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgXSxcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0bGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwO1xuXG5cdFx0XHQvLyBFbmFibGUgZmluaXNoaW5nIGZsYWcgb24gcHJpdmF0ZSBkYXRhXG5cdFx0XHRkYXRhLmZpbmlzaCA9IHRydWU7XG5cblx0XHRcdC8vIEVtcHR5IHRoZSBxdWV1ZSBmaXJzdFxuXHRcdFx0alF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBbXSApO1xuXG5cdFx0XHRpZiAoIGhvb2tzICYmIGhvb2tzLnN0b3AgKSB7XG5cdFx0XHRcdGhvb2tzLnN0b3AuY2FsbCggdGhpcywgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb29rIGZvciBhbnkgYWN0aXZlIGFuaW1hdGlvbnMsIGFuZCBmaW5pc2ggdGhlbVxuXHRcdFx0Zm9yICggaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOyApIHtcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJiB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSB7XG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFuaW1hdGlvbnMgaW4gdGhlIG9sZCBxdWV1ZSBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGlmICggcXVldWVbIGluZGV4IF0gJiYgcXVldWVbIGluZGV4IF0uZmluaXNoICkge1xuXHRcdFx0XHRcdHF1ZXVlWyBpbmRleCBdLmZpbmlzaC5jYWxsKCB0aGlzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gVHVybiBvZmYgZmluaXNoaW5nIGZsYWdcblx0XHRcdGRlbGV0ZSBkYXRhLmZpbmlzaDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiIF0sIGZ1bmN0aW9uKCBfaSwgbmFtZSApIHtcblx0dmFyIGNzc0ZuID0galF1ZXJ5LmZuWyBuYW1lIF07XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBzcGVlZCA9PSBudWxsIHx8IHR5cGVvZiBzcGVlZCA9PT0gXCJib29sZWFuXCIgP1xuXHRcdFx0Y3NzRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApIDpcblx0XHRcdHRoaXMuYW5pbWF0ZSggZ2VuRngoIG5hbWUsIHRydWUgKSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fTtcbn0gKTtcblxuLy8gR2VuZXJhdGUgc2hvcnRjdXRzIGZvciBjdXN0b20gYW5pbWF0aW9uc1xualF1ZXJ5LmVhY2goIHtcblx0c2xpZGVEb3duOiBnZW5GeCggXCJzaG93XCIgKSxcblx0c2xpZGVVcDogZ2VuRngoIFwiaGlkZVwiICksXG5cdHNsaWRlVG9nZ2xlOiBnZW5GeCggXCJ0b2dnbGVcIiApLFxuXHRmYWRlSW46IHsgb3BhY2l0eTogXCJzaG93XCIgfSxcblx0ZmFkZU91dDogeyBvcGFjaXR5OiBcImhpZGVcIiB9LFxuXHRmYWRlVG9nZ2xlOiB7IG9wYWNpdHk6IFwidG9nZ2xlXCIgfVxufSwgZnVuY3Rpb24oIG5hbWUsIHByb3BzICkge1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gdGhpcy5hbmltYXRlKCBwcm9wcywgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fTtcbn0gKTtcblxualF1ZXJ5LnRpbWVycyA9IFtdO1xualF1ZXJ5LmZ4LnRpY2sgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRpbWVyLFxuXHRcdGkgPSAwLFxuXHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnM7XG5cblx0ZnhOb3cgPSBEYXRlLm5vdygpO1xuXG5cdGZvciAoIDsgaSA8IHRpbWVycy5sZW5ndGg7IGkrKyApIHtcblx0XHR0aW1lciA9IHRpbWVyc1sgaSBdO1xuXG5cdFx0Ly8gUnVuIHRoZSB0aW1lciBhbmQgc2FmZWx5IHJlbW92ZSBpdCB3aGVuIGRvbmUgKGFsbG93aW5nIGZvciBleHRlcm5hbCByZW1vdmFsKVxuXHRcdGlmICggIXRpbWVyKCkgJiYgdGltZXJzWyBpIF0gPT09IHRpbWVyICkge1xuXHRcdFx0dGltZXJzLnNwbGljZSggaS0tLCAxICk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhdGltZXJzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkuZnguc3RvcCgpO1xuXHR9XG5cdGZ4Tm93ID0gdW5kZWZpbmVkO1xufTtcblxualF1ZXJ5LmZ4LnRpbWVyID0gZnVuY3Rpb24oIHRpbWVyICkge1xuXHRqUXVlcnkudGltZXJzLnB1c2goIHRpbWVyICk7XG5cdGpRdWVyeS5meC5zdGFydCgpO1xufTtcblxualF1ZXJ5LmZ4LmludGVydmFsID0gMTM7XG5qUXVlcnkuZnguc3RhcnQgPSBmdW5jdGlvbigpIHtcblx0aWYgKCBpblByb2dyZXNzICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRzY2hlZHVsZSgpO1xufTtcblxualF1ZXJ5LmZ4LnN0b3AgPSBmdW5jdGlvbigpIHtcblx0aW5Qcm9ncmVzcyA9IG51bGw7XG59O1xuXG5qUXVlcnkuZnguc3BlZWRzID0ge1xuXHRzbG93OiA2MDAsXG5cdGZhc3Q6IDIwMCxcblxuXHQvLyBEZWZhdWx0IHNwZWVkXG5cdF9kZWZhdWx0OiA0MDBcbn07XG5cblxuLy8gQmFzZWQgb2ZmIG9mIHRoZSBwbHVnaW4gYnkgQ2xpbnQgSGVsZmVycywgd2l0aCBwZXJtaXNzaW9uLlxualF1ZXJ5LmZuLmRlbGF5ID0gZnVuY3Rpb24oIHRpbWUsIHR5cGUgKSB7XG5cdHRpbWUgPSBqUXVlcnkuZnggPyBqUXVlcnkuZnguc3BlZWRzWyB0aW1lIF0gfHwgdGltZSA6IHRpbWU7XG5cdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSwgZnVuY3Rpb24oIG5leHQsIGhvb2tzICkge1xuXHRcdHZhciB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoIG5leHQsIHRpbWUgKTtcblx0XHRob29rcy5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fTtcblx0fSApO1xufTtcblxuXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKSxcblx0XHRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNlbGVjdFwiICksXG5cdFx0b3B0ID0gc2VsZWN0LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcIm9wdGlvblwiICkgKTtcblxuXHRpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjMgb25seVxuXHQvLyBEZWZhdWx0IHZhbHVlIGZvciBhIGNoZWNrYm94IHNob3VsZCBiZSBcIm9uXCJcblx0c3VwcG9ydC5jaGVja09uID0gaW5wdXQudmFsdWUgIT09IFwiXCI7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIE11c3QgYWNjZXNzIHNlbGVjdGVkSW5kZXggdG8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgc2VsZWN0XG5cdHN1cHBvcnQub3B0U2VsZWN0ZWQgPSBvcHQuc2VsZWN0ZWQ7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIEFuIGlucHV0IGxvc2VzIGl0cyB2YWx1ZSBhZnRlciBiZWNvbWluZyBhIHJhZGlvXG5cdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdGlucHV0LnZhbHVlID0gXCJ0XCI7XG5cdGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG5cdHN1cHBvcnQucmFkaW9WYWx1ZSA9IGlucHV0LnZhbHVlID09PSBcInRcIjtcbn0gKSgpO1xuXG5cbnZhciBib29sSG9vayxcblx0YXR0ckhhbmRsZSA9IGpRdWVyeS5leHByLmF0dHJIYW5kbGU7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YXR0cjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGpRdWVyeS5hdHRyLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fSxcblxuXHRyZW1vdmVBdHRyOiBmdW5jdGlvbiggbmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCB0aGlzLCBuYW1lICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0YXR0cjogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBhdHRyaWJ1dGVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRmFsbGJhY2sgdG8gcHJvcCB3aGVuIGF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWRcblx0XHRpZiAoIHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSA9PT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucHJvcCggZWxlbSwgbmFtZSwgdmFsdWUgKTtcblx0XHR9XG5cblx0XHQvLyBBdHRyaWJ1dGUgaG9va3MgYXJlIGRldGVybWluZWQgYnkgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uXG5cdFx0Ly8gR3JhYiBuZWNlc3NhcnkgaG9vayBpZiBvbmUgaXMgZGVmaW5lZFxuXHRcdGlmICggblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXHRcdFx0aG9va3MgPSBqUXVlcnkuYXR0ckhvb2tzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fFxuXHRcdFx0XHQoIGpRdWVyeS5leHByLm1hdGNoLmJvb2wudGVzdCggbmFtZSApID8gYm9vbEhvb2sgOiB1bmRlZmluZWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSBudWxsICkge1xuXHRcdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCB2YWx1ZSArIFwiXCIgKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKCByZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSApICE9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cblx0XHRyZXQgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHQvLyBOb24tZXhpc3RlbnQgYXR0cmlidXRlcyByZXR1cm4gbnVsbCwgd2Ugbm9ybWFsaXplIHRvIHVuZGVmaW5lZFxuXHRcdHJldHVybiByZXQgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJldDtcblx0fSxcblxuXHRhdHRySG9va3M6IHtcblx0XHR0eXBlOiB7XG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhc3VwcG9ydC5yYWRpb1ZhbHVlICYmIHZhbHVlID09PSBcInJhZGlvXCIgJiZcblx0XHRcdFx0XHRub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgKSB7XG5cdFx0XHRcdFx0dmFyIHZhbCA9IGVsZW0udmFsdWU7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCB2YWx1ZSApO1xuXHRcdFx0XHRcdGlmICggdmFsICkge1xuXHRcdFx0XHRcdFx0ZWxlbS52YWx1ZSA9IHZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHR2YXIgbmFtZSxcblx0XHRcdGkgPSAwLFxuXG5cdFx0XHQvLyBBdHRyaWJ1dGUgbmFtZXMgY2FuIGNvbnRhaW4gbm9uLUhUTUwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzXG5cdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcblx0XHRcdGF0dHJOYW1lcyA9IHZhbHVlICYmIHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICk7XG5cblx0XHRpZiAoIGF0dHJOYW1lcyAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0d2hpbGUgKCAoIG5hbWUgPSBhdHRyTmFtZXNbIGkrKyBdICkgKSB7XG5cdFx0XHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCBuYW1lICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIEhvb2tzIGZvciBib29sZWFuIGF0dHJpYnV0ZXNcbmJvb2xIb29rID0ge1xuXHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgbmFtZSApIHtcblx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIGJvb2xlYW4gYXR0cmlidXRlcyB3aGVuIHNldCB0byBmYWxzZVxuXHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cbn07XG5cbmpRdWVyeS5lYWNoKCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCggL1xcdysvZyApLCBmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cdHZhciBnZXR0ZXIgPSBhdHRySGFuZGxlWyBuYW1lIF0gfHwgalF1ZXJ5LmZpbmQuYXR0cjtcblxuXHRhdHRySGFuZGxlWyBuYW1lIF0gPSBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0dmFyIHJldCwgaGFuZGxlLFxuXHRcdFx0bG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmICggIWlzWE1MICkge1xuXG5cdFx0XHQvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wIGJ5IHRlbXBvcmFyaWx5IHJlbW92aW5nIHRoaXMgZnVuY3Rpb24gZnJvbSB0aGUgZ2V0dGVyXG5cdFx0XHRoYW5kbGUgPSBhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF07XG5cdFx0XHRhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF0gPSByZXQ7XG5cdFx0XHRyZXQgPSBnZXR0ZXIoIGVsZW0sIG5hbWUsIGlzWE1MICkgIT0gbnVsbCA/XG5cdFx0XHRcdGxvd2VyY2FzZU5hbWUgOlxuXHRcdFx0XHRudWxsO1xuXHRcdFx0YXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdID0gaGFuZGxlO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xufSApO1xuXG5cblxuXG52YXIgcmZvY3VzYWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG5cdHJjbGlja2FibGUgPSAvXig/OmF8YXJlYSkkL2k7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGpRdWVyeS5wcm9wLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fSxcblxuXHRyZW1vdmVQcm9wOiBmdW5jdGlvbiggbmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZSB0aGlzWyBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWUgXTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHRwcm9wOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0dmFyIHJldCwgaG9va3MsXG5cdFx0XHRuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHQvLyBEb24ndCBnZXQvc2V0IHByb3BlcnRpZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cdFx0aWYgKCBuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblxuXHRcdFx0Ly8gRml4IG5hbWUgYW5kIGF0dGFjaCBob29rc1xuXHRcdFx0bmFtZSA9IGpRdWVyeS5wcm9wRml4WyBuYW1lIF0gfHwgbmFtZTtcblx0XHRcdGhvb2tzID0galF1ZXJ5LnByb3BIb29rc1sgbmFtZSBdO1xuXHRcdH1cblxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoIGVsZW1bIG5hbWUgXSA9IHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1bIG5hbWUgXTtcblx0fSxcblxuXHRwcm9wSG9va3M6IHtcblx0XHR0YWJJbmRleDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0XHRcdC8vIGVsZW0udGFiSW5kZXggZG9lc24ndCBhbHdheXMgcmV0dXJuIHRoZVxuXHRcdFx0XHQvLyBjb3JyZWN0IHZhbHVlIHdoZW4gaXQgaGFzbid0IGJlZW4gZXhwbGljaXRseSBzZXRcblx0XHRcdFx0Ly8gVXNlIHByb3BlciBhdHRyaWJ1dGUgcmV0cmlldmFsICh0cmFjLTEyMDcyKVxuXHRcdFx0XHR2YXIgdGFiaW5kZXggPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInRhYmluZGV4XCIgKTtcblxuXHRcdFx0XHRpZiAoIHRhYmluZGV4ICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCggdGFiaW5kZXgsIDEwICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cmZvY3VzYWJsZS50ZXN0KCBlbGVtLm5vZGVOYW1lICkgfHxcblx0XHRcdFx0XHRyY2xpY2thYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSAmJlxuXHRcdFx0XHRcdGVsZW0uaHJlZlxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cHJvcEZpeDoge1xuXHRcdFwiZm9yXCI6IFwiaHRtbEZvclwiLFxuXHRcdFwiY2xhc3NcIjogXCJjbGFzc05hbWVcIlxuXHR9XG59ICk7XG5cbi8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuLy8gQWNjZXNzaW5nIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5XG4vLyBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gcmVzcGVjdCBzZXR0aW5nIHNlbGVjdGVkXG4vLyBvbiB0aGUgb3B0aW9uXG4vLyBUaGUgZ2V0dGVyIGVuc3VyZXMgYSBkZWZhdWx0IG9wdGlvbiBpcyBzZWxlY3RlZFxuLy8gd2hlbiBpbiBhbiBvcHRncm91cFxuLy8gZXNsaW50IHJ1bGUgXCJuby11bnVzZWQtZXhwcmVzc2lvbnNcIiBpcyBkaXNhYmxlZCBmb3IgdGhpcyBjb2RlXG4vLyBzaW5jZSBpdCBjb25zaWRlcnMgc3VjaCBhY2Nlc3Npb25zIG5vb3BcbmlmICggIXN1cHBvcnQub3B0U2VsZWN0ZWQgKSB7XG5cdGpRdWVyeS5wcm9wSG9va3Muc2VsZWN0ZWQgPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0LyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRwYXJlbnQuc2VsZWN0ZWRJbmRleDtcblxuXHRcdFx0XHRpZiAoIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmpRdWVyeS5lYWNoKCBbXG5cdFwidGFiSW5kZXhcIixcblx0XCJyZWFkT25seVwiLFxuXHRcIm1heExlbmd0aFwiLFxuXHRcImNlbGxTcGFjaW5nXCIsXG5cdFwiY2VsbFBhZGRpbmdcIixcblx0XCJyb3dTcGFuXCIsXG5cdFwiY29sU3BhblwiLFxuXHRcInVzZU1hcFwiLFxuXHRcImZyYW1lQm9yZGVyXCIsXG5cdFwiY29udGVudEVkaXRhYmxlXCJcbl0sIGZ1bmN0aW9uKCkge1xuXHRqUXVlcnkucHJvcEZpeFsgdGhpcy50b0xvd2VyQ2FzZSgpIF0gPSB0aGlzO1xufSApO1xuXG5cblxuXG5cdC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBIVE1MIHNwZWNcblx0Ly8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS1hc2NpaS13aGl0ZXNwYWNlXG5cdGZ1bmN0aW9uIHN0cmlwQW5kQ29sbGFwc2UoIHZhbHVlICkge1xuXHRcdHZhciB0b2tlbnMgPSB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXHRcdHJldHVybiB0b2tlbnMuam9pbiggXCIgXCIgKTtcblx0fVxuXG5cbmZ1bmN0aW9uIGdldENsYXNzKCBlbGVtICkge1xuXHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiApIHx8IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApIHtcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0fVxuXHRyZXR1cm4gW107XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YWRkQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NOYW1lcywgY3VyLCBjdXJWYWx1ZSwgY2xhc3NOYW1lLCBpLCBmaW5hbFZhbHVlO1xuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFkZENsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRjbGFzc05hbWVzID0gY2xhc3Nlc1RvQXJyYXkoIHZhbHVlICk7XG5cblx0XHRpZiAoIGNsYXNzTmFtZXMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGN1clZhbHVlID0gZ2V0Q2xhc3MoIHRoaXMgKTtcblx0XHRcdFx0Y3VyID0gdGhpcy5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSBdO1xuXHRcdFx0XHRcdFx0aWYgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIiApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0Y3VyICs9IGNsYXNzTmFtZSArIFwiIFwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cdFx0XHRcdFx0ZmluYWxWYWx1ZSA9IHN0cmlwQW5kQ29sbGFwc2UoIGN1ciApO1xuXHRcdFx0XHRcdGlmICggY3VyVmFsdWUgIT09IGZpbmFsVmFsdWUgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSggXCJjbGFzc1wiLCBmaW5hbFZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NOYW1lcywgY3VyLCBjdXJWYWx1ZSwgY2xhc3NOYW1lLCBpLCBmaW5hbFZhbHVlO1xuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZUNsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoICFhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXR0ciggXCJjbGFzc1wiLCBcIlwiICk7XG5cdFx0fVxuXG5cdFx0Y2xhc3NOYW1lcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCBjbGFzc05hbWVzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjdXJWYWx1ZSA9IGdldENsYXNzKCB0aGlzICk7XG5cblx0XHRcdFx0Ly8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcblx0XHRcdFx0Y3VyID0gdGhpcy5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSBdO1xuXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgKmFsbCogaW5zdGFuY2VzXG5cdFx0XHRcdFx0XHR3aGlsZSAoIGN1ci5pbmRleE9mKCBcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiICkgPiAtMSApIHtcblx0XHRcdFx0XHRcdFx0Y3VyID0gY3VyLnJlcGxhY2UoIFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIsIFwiIFwiICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR0b2dnbGVDbGFzczogZnVuY3Rpb24oIHZhbHVlLCBzdGF0ZVZhbCApIHtcblx0XHR2YXIgY2xhc3NOYW1lcywgY2xhc3NOYW1lLCBpLCBzZWxmLFxuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZSxcblx0XHRcdGlzVmFsaWRWYWx1ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheSggdmFsdWUgKTtcblxuXHRcdGlmICggaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyhcblx0XHRcdFx0XHR2YWx1ZS5jYWxsKCB0aGlzLCBpLCBnZXRDbGFzcyggdGhpcyApLCBzdGF0ZVZhbCApLFxuXHRcdFx0XHRcdHN0YXRlVmFsXG5cdFx0XHRcdCk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGVWYWwgPT09IFwiYm9vbGVhblwiICYmIGlzVmFsaWRWYWx1ZSApIHtcblx0XHRcdHJldHVybiBzdGF0ZVZhbCA/IHRoaXMuYWRkQ2xhc3MoIHZhbHVlICkgOiB0aGlzLnJlbW92ZUNsYXNzKCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGNsYXNzTmFtZXMgPSBjbGFzc2VzVG9BcnJheSggdmFsdWUgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBpc1ZhbGlkVmFsdWUgKSB7XG5cblx0XHRcdFx0Ly8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcblx0XHRcdFx0c2VsZiA9IGpRdWVyeSggdGhpcyApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWVzWyBpIF07XG5cblx0XHRcdFx0XHQvLyBDaGVjayBlYWNoIGNsYXNzTmFtZSBnaXZlbiwgc3BhY2Ugc2VwYXJhdGVkIGxpc3Rcblx0XHRcdFx0XHRpZiAoIHNlbGYuaGFzQ2xhc3MoIGNsYXNzTmFtZSApICkge1xuXHRcdFx0XHRcdFx0c2VsZi5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuYWRkQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBUb2dnbGUgd2hvbGUgY2xhc3MgbmFtZVxuXHRcdFx0fSBlbHNlIGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0eXBlID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gZ2V0Q2xhc3MoIHRoaXMgKTtcblx0XHRcdFx0aWYgKCBjbGFzc05hbWUgKSB7XG5cblx0XHRcdFx0XHQvLyBTdG9yZSBjbGFzc05hbWUgaWYgc2V0XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiwgY2xhc3NOYW1lICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBjbGFzcyBuYW1lIG9yIGlmIHdlJ3JlIHBhc3NlZCBgZmFsc2VgLFxuXHRcdFx0XHQvLyB0aGVuIHJlbW92ZSB0aGUgd2hvbGUgY2xhc3NuYW1lIChpZiB0aGVyZSB3YXMgb25lLCB0aGUgYWJvdmUgc2F2ZWQgaXQpLlxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYnJpbmcgYmFjayB3aGF0ZXZlciB3YXMgcHJldmlvdXNseSBzYXZlZCAoaWYgYW55dGhpbmcpLFxuXHRcdFx0XHQvLyBmYWxsaW5nIGJhY2sgdG8gdGhlIGVtcHR5IHN0cmluZyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG5cdFx0XHRcdGlmICggdGhpcy5zZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIixcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSB8fCB2YWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0XHRcdFx0XHRcIlwiIDpcblx0XHRcdFx0XHRcdFx0ZGF0YVByaXYuZ2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiApIHx8IFwiXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGhhc0NsYXNzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSwgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Y2xhc3NOYW1lID0gXCIgXCIgKyBzZWxlY3RvciArIFwiIFwiO1xuXHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0XHQoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggZ2V0Q2xhc3MoIGVsZW0gKSApICsgXCIgXCIgKS5pbmRleE9mKCBjbGFzc05hbWUgKSA+IC0xICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0gKTtcblxuXG5cblxudmFyIHJyZXR1cm4gPSAvXFxyL2c7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0dmFsOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGhvb2tzLCByZXQsIHZhbHVlSXNGdW5jdGlvbixcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF07XG5cblx0XHRpZiAoICFhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgZWxlbS50eXBlIF0gfHxcblx0XHRcdFx0XHRqUXVlcnkudmFsSG9va3NbIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBdO1xuXG5cdFx0XHRcdGlmICggaG9va3MgJiZcblx0XHRcdFx0XHRcImdldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdFx0KCByZXQgPSBob29rcy5nZXQoIGVsZW0sIFwidmFsdWVcIiApICkgIT09IHVuZGVmaW5lZFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0ID0gZWxlbS52YWx1ZTtcblxuXHRcdFx0XHQvLyBIYW5kbGUgbW9zdCBjb21tb24gc3RyaW5nIGNhc2VzXG5cdFx0XHRcdGlmICggdHlwZW9mIHJldCA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmV0LnJlcGxhY2UoIHJyZXR1cm4sIFwiXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB2YWx1ZSBpcyBudWxsL3VuZGVmIG9yIG51bWJlclxuXHRcdFx0XHRyZXR1cm4gcmV0ID09IG51bGwgPyBcIlwiIDogcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFsdWVJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0dmFyIHZhbDtcblxuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlICE9PSAxICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdmFsdWVJc0Z1bmN0aW9uICkge1xuXHRcdFx0XHR2YWwgPSB2YWx1ZS5jYWxsKCB0aGlzLCBpLCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRyZWF0IG51bGwvdW5kZWZpbmVkIGFzIFwiXCI7IGNvbnZlcnQgbnVtYmVycyB0byBzdHJpbmdcblx0XHRcdGlmICggdmFsID09IG51bGwgKSB7XG5cdFx0XHRcdHZhbCA9IFwiXCI7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdHZhbCArPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBBcnJheS5pc0FycmF5KCB2YWwgKSApIHtcblx0XHRcdFx0dmFsID0galF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyB0aGlzLnR5cGUgXSB8fCBqUXVlcnkudmFsSG9va3NbIHRoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBdO1xuXG5cdFx0XHQvLyBJZiBzZXQgcmV0dXJucyB1bmRlZmluZWQsIGZhbGwgYmFjayB0byBub3JtYWwgc2V0dGluZ1xuXHRcdFx0aWYgKCAhaG9va3MgfHwgISggXCJzZXRcIiBpbiBob29rcyApIHx8IGhvb2tzLnNldCggdGhpcywgdmFsLCBcInZhbHVlXCIgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHZhbEhvb2tzOiB7XG5cdFx0b3B0aW9uOiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHRcdHZhciB2YWwgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInZhbHVlXCIgKTtcblx0XHRcdFx0cmV0dXJuIHZhbCAhPSBudWxsID9cblx0XHRcdFx0XHR2YWwgOlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExIG9ubHlcblx0XHRcdFx0XHQvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAodHJhYy0xNDY4NiwgdHJhYy0xNDg1OClcblx0XHRcdFx0XHQvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZVxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS13aGl0ZXNwYWNlXG5cdFx0XHRcdFx0c3RyaXBBbmRDb2xsYXBzZSggalF1ZXJ5LnRleHQoIGVsZW0gKSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c2VsZWN0OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgdmFsdWUsIG9wdGlvbiwgaSxcblx0XHRcdFx0XHRvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuXHRcdFx0XHRcdGluZGV4ID0gZWxlbS5zZWxlY3RlZEluZGV4LFxuXHRcdFx0XHRcdG9uZSA9IGVsZW0udHlwZSA9PT0gXCJzZWxlY3Qtb25lXCIsXG5cdFx0XHRcdFx0dmFsdWVzID0gb25lID8gbnVsbCA6IFtdLFxuXHRcdFx0XHRcdG1heCA9IG9uZSA/IGluZGV4ICsgMSA6IG9wdGlvbnMubGVuZ3RoO1xuXG5cdFx0XHRcdGlmICggaW5kZXggPCAwICkge1xuXHRcdFx0XHRcdGkgPSBtYXg7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpID0gb25lID8gaW5kZXggOiAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgc2VsZWN0ZWQgb3B0aW9uc1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBtYXg7IGkrKyApIHtcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdC8vIElFOC05IGRvZXNuJ3QgdXBkYXRlIHNlbGVjdGVkIGFmdGVyIGZvcm0gcmVzZXQgKHRyYWMtMjU1MSlcblx0XHRcdFx0XHRpZiAoICggb3B0aW9uLnNlbGVjdGVkIHx8IGkgPT09IGluZGV4ICkgJiZcblxuXHRcdFx0XHRcdFx0XHQvLyBEb24ndCByZXR1cm4gb3B0aW9ucyB0aGF0IGFyZSBkaXNhYmxlZCBvciBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG5cdFx0XHRcdFx0XHRcdCFvcHRpb24uZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdFx0KCAhb3B0aW9uLnBhcmVudE5vZGUuZGlzYWJsZWQgfHxcblx0XHRcdFx0XHRcdFx0XHQhbm9kZU5hbWUoIG9wdGlvbi5wYXJlbnROb2RlLCBcIm9wdGdyb3VwXCIgKSApICkge1xuXG5cdFx0XHRcdFx0XHQvLyBHZXQgdGhlIHNwZWNpZmljIHZhbHVlIGZvciB0aGUgb3B0aW9uXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IGpRdWVyeSggb3B0aW9uICkudmFsKCk7XG5cblx0XHRcdFx0XHRcdC8vIFdlIGRvbid0IG5lZWQgYW4gYXJyYXkgZm9yIG9uZSBzZWxlY3RzXG5cdFx0XHRcdFx0XHRpZiAoIG9uZSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBNdWx0aS1TZWxlY3RzIHJldHVybiBhbiBhcnJheVxuXHRcdFx0XHRcdFx0dmFsdWVzLnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0XHR2YXIgb3B0aW9uU2V0LCBvcHRpb24sXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHR2YWx1ZXMgPSBqUXVlcnkubWFrZUFycmF5KCB2YWx1ZSApLFxuXHRcdFx0XHRcdGkgPSBvcHRpb25zLmxlbmd0aDtcblxuXHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XG5cblx0XHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXG5cdFx0XHRcdFx0aWYgKCBvcHRpb24uc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIGpRdWVyeS52YWxIb29rcy5vcHRpb24uZ2V0KCBvcHRpb24gKSwgdmFsdWVzICkgPiAtMVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0b3B0aW9uU2V0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGb3JjZSBicm93c2VycyB0byBiZWhhdmUgY29uc2lzdGVudGx5IHdoZW4gbm9uLW1hdGNoaW5nIHZhbHVlIGlzIHNldFxuXHRcdFx0XHRpZiAoICFvcHRpb25TZXQgKSB7XG5cdFx0XHRcdFx0ZWxlbS5zZWxlY3RlZEluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gUmFkaW9zIGFuZCBjaGVja2JveGVzIGdldHRlci9zZXR0ZXJcbmpRdWVyeS5lYWNoKCBbIFwicmFkaW9cIiwgXCJjaGVja2JveFwiIF0sIGZ1bmN0aW9uKCkge1xuXHRqUXVlcnkudmFsSG9va3NbIHRoaXMgXSA9IHtcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdFx0cmV0dXJuICggZWxlbS5jaGVja2VkID0galF1ZXJ5LmluQXJyYXkoIGpRdWVyeSggZWxlbSApLnZhbCgpLCB2YWx1ZSApID4gLTEgKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGlmICggIXN1cHBvcnQuY2hlY2tPbiApIHtcblx0XHRqUXVlcnkudmFsSG9va3NbIHRoaXMgXS5nZXQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IG51bGwgPyBcIm9uXCIgOiBlbGVtLnZhbHVlO1xuXHRcdH07XG5cdH1cbn0gKTtcblxuXG5cblxuLy8gUmV0dXJuIGpRdWVyeSBmb3IgYXR0cmlidXRlcy1vbmx5IGluY2x1c2lvblxudmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuXG52YXIgbm9uY2UgPSB7IGd1aWQ6IERhdGUubm93KCkgfTtcblxudmFyIHJxdWVyeSA9ICggL1xcPy8gKTtcblxuXG5cbi8vIENyb3NzLWJyb3dzZXIgeG1sIHBhcnNpbmdcbmpRdWVyeS5wYXJzZVhNTCA9IGZ1bmN0aW9uKCBkYXRhICkge1xuXHR2YXIgeG1sLCBwYXJzZXJFcnJvckVsZW07XG5cdGlmICggIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHQvLyBJRSB0aHJvd3Mgb24gcGFyc2VGcm9tU3RyaW5nIHdpdGggaW52YWxpZCBpbnB1dC5cblx0dHJ5IHtcblx0XHR4bWwgPSAoIG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkgKS5wYXJzZUZyb21TdHJpbmcoIGRhdGEsIFwidGV4dC94bWxcIiApO1xuXHR9IGNhdGNoICggZSApIHt9XG5cblx0cGFyc2VyRXJyb3JFbGVtID0geG1sICYmIHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJwYXJzZXJlcnJvclwiIClbIDAgXTtcblx0aWYgKCAheG1sIHx8IHBhcnNlckVycm9yRWxlbSApIHtcblx0XHRqUXVlcnkuZXJyb3IoIFwiSW52YWxpZCBYTUw6IFwiICsgKFxuXHRcdFx0cGFyc2VyRXJyb3JFbGVtID9cblx0XHRcdFx0alF1ZXJ5Lm1hcCggcGFyc2VyRXJyb3JFbGVtLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZWwudGV4dENvbnRlbnQ7XG5cdFx0XHRcdH0gKS5qb2luKCBcIlxcblwiICkgOlxuXHRcdFx0XHRkYXRhXG5cdFx0KSApO1xuXHR9XG5cdHJldHVybiB4bWw7XG59O1xuXG5cbnZhciByZm9jdXNNb3JwaCA9IC9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxcblx0c3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiggZSApIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9O1xuXG5qUXVlcnkuZXh0ZW5kKCBqUXVlcnkuZXZlbnQsIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggZXZlbnQsIGRhdGEsIGVsZW0sIG9ubHlIYW5kbGVycyApIHtcblxuXHRcdHZhciBpLCBjdXIsIHRtcCwgYnViYmxlVHlwZSwgb250eXBlLCBoYW5kbGUsIHNwZWNpYWwsIGxhc3RFbGVtZW50LFxuXHRcdFx0ZXZlbnRQYXRoID0gWyBlbGVtIHx8IGRvY3VtZW50IF0sXG5cdFx0XHR0eXBlID0gaGFzT3duLmNhbGwoIGV2ZW50LCBcInR5cGVcIiApID8gZXZlbnQudHlwZSA6IGV2ZW50LFxuXHRcdFx0bmFtZXNwYWNlcyA9IGhhc093bi5jYWxsKCBldmVudCwgXCJuYW1lc3BhY2VcIiApID8gZXZlbnQubmFtZXNwYWNlLnNwbGl0KCBcIi5cIiApIDogW107XG5cblx0XHRjdXIgPSBsYXN0RWxlbWVudCA9IHRtcCA9IGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50O1xuXG5cdFx0Ly8gRG9uJ3QgZG8gZXZlbnRzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBmb2N1cy9ibHVyIG1vcnBocyB0byBmb2N1c2luL291dDsgZW5zdXJlIHdlJ3JlIG5vdCBmaXJpbmcgdGhlbSByaWdodCBub3dcblx0XHRpZiAoIHJmb2N1c01vcnBoLnRlc3QoIHR5cGUgKyBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlLmluZGV4T2YoIFwiLlwiICkgPiAtMSApIHtcblxuXHRcdFx0Ly8gTmFtZXNwYWNlZCB0cmlnZ2VyOyBjcmVhdGUgYSByZWdleHAgdG8gbWF0Y2ggZXZlbnQgdHlwZSBpbiBoYW5kbGUoKVxuXHRcdFx0bmFtZXNwYWNlcyA9IHR5cGUuc3BsaXQoIFwiLlwiICk7XG5cdFx0XHR0eXBlID0gbmFtZXNwYWNlcy5zaGlmdCgpO1xuXHRcdFx0bmFtZXNwYWNlcy5zb3J0KCk7XG5cdFx0fVxuXHRcdG9udHlwZSA9IHR5cGUuaW5kZXhPZiggXCI6XCIgKSA8IDAgJiYgXCJvblwiICsgdHlwZTtcblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhIGpRdWVyeS5FdmVudCBvYmplY3QsIE9iamVjdCwgb3IganVzdCBhbiBldmVudCB0eXBlIHN0cmluZ1xuXHRcdGV2ZW50ID0gZXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0ZXZlbnQgOlxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCggdHlwZSwgdHlwZW9mIGV2ZW50ID09PSBcIm9iamVjdFwiICYmIGV2ZW50ICk7XG5cblx0XHQvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG5cdFx0ZXZlbnQuaXNUcmlnZ2VyID0gb25seUhhbmRsZXJzID8gMiA6IDM7XG5cdFx0ZXZlbnQubmFtZXNwYWNlID0gbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApO1xuXHRcdGV2ZW50LnJuYW1lc3BhY2UgPSBldmVudC5uYW1lc3BhY2UgP1xuXHRcdFx0bmV3IFJlZ0V4cCggXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbiggXCJcXFxcLig/Oi4qXFxcXC58KVwiICkgKyBcIihcXFxcLnwkKVwiICkgOlxuXHRcdFx0bnVsbDtcblxuXHRcdC8vIENsZWFuIHVwIHRoZSBldmVudCBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZFxuXHRcdGV2ZW50LnJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHRpZiAoICFldmVudC50YXJnZXQgKSB7XG5cdFx0XHRldmVudC50YXJnZXQgPSBlbGVtO1xuXHRcdH1cblxuXHRcdC8vIENsb25lIGFueSBpbmNvbWluZyBkYXRhIGFuZCBwcmVwZW5kIHRoZSBldmVudCwgY3JlYXRpbmcgdGhlIGhhbmRsZXIgYXJnIGxpc3Rcblx0XHRkYXRhID0gZGF0YSA9PSBudWxsID9cblx0XHRcdFsgZXZlbnQgXSA6XG5cdFx0XHRqUXVlcnkubWFrZUFycmF5KCBkYXRhLCBbIGV2ZW50IF0gKTtcblxuXHRcdC8vIEFsbG93IHNwZWNpYWwgZXZlbnRzIHRvIGRyYXcgb3V0c2lkZSB0aGUgbGluZXNcblx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgc3BlY2lhbC50cmlnZ2VyICYmIHNwZWNpYWwudHJpZ2dlci5hcHBseSggZWxlbSwgZGF0YSApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgZXZlbnQgcHJvcGFnYXRpb24gcGF0aCBpbiBhZHZhbmNlLCBwZXIgVzNDIGV2ZW50cyBzcGVjICh0cmFjLTk5NTEpXG5cdFx0Ly8gQnViYmxlIHVwIHRvIGRvY3VtZW50LCB0aGVuIHRvIHdpbmRvdzsgd2F0Y2ggZm9yIGEgZ2xvYmFsIG93bmVyRG9jdW1lbnQgdmFyICh0cmFjLTk3MjQpXG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRidWJibGVUeXBlID0gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgfHwgdHlwZTtcblx0XHRcdGlmICggIXJmb2N1c01vcnBoLnRlc3QoIGJ1YmJsZVR5cGUgKyB0eXBlICkgKSB7XG5cdFx0XHRcdGN1ciA9IGN1ci5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICggOyBjdXI7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggY3VyICk7XG5cdFx0XHRcdHRtcCA9IGN1cjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT25seSBhZGQgd2luZG93IGlmIHdlIGdvdCB0byBkb2N1bWVudCAoZS5nLiwgbm90IHBsYWluIG9iaiBvciBkZXRhY2hlZCBET00pXG5cdFx0XHRpZiAoIHRtcCA9PT0gKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQgKSApIHtcblx0XHRcdFx0ZXZlbnRQYXRoLnB1c2goIHRtcC5kZWZhdWx0VmlldyB8fCB0bXAucGFyZW50V2luZG93IHx8IHdpbmRvdyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZpcmUgaGFuZGxlcnMgb24gdGhlIGV2ZW50IHBhdGhcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggY3VyID0gZXZlbnRQYXRoWyBpKysgXSApICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0bGFzdEVsZW1lbnQgPSBjdXI7XG5cdFx0XHRldmVudC50eXBlID0gaSA+IDEgP1xuXHRcdFx0XHRidWJibGVUeXBlIDpcblx0XHRcdFx0c3BlY2lhbC5iaW5kVHlwZSB8fCB0eXBlO1xuXG5cdFx0XHQvLyBqUXVlcnkgaGFuZGxlclxuXHRcdFx0aGFuZGxlID0gKCBkYXRhUHJpdi5nZXQoIGN1ciwgXCJldmVudHNcIiApIHx8IE9iamVjdC5jcmVhdGUoIG51bGwgKSApWyBldmVudC50eXBlIF0gJiZcblx0XHRcdFx0ZGF0YVByaXYuZ2V0KCBjdXIsIFwiaGFuZGxlXCIgKTtcblx0XHRcdGlmICggaGFuZGxlICkge1xuXHRcdFx0XHRoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBOYXRpdmUgaGFuZGxlclxuXHRcdFx0aGFuZGxlID0gb250eXBlICYmIGN1clsgb250eXBlIF07XG5cdFx0XHRpZiAoIGhhbmRsZSAmJiBoYW5kbGUuYXBwbHkgJiYgYWNjZXB0RGF0YSggY3VyICkgKSB7XG5cdFx0XHRcdGV2ZW50LnJlc3VsdCA9IGhhbmRsZS5hcHBseSggY3VyLCBkYXRhICk7XG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50LnR5cGUgPSB0eXBlO1xuXG5cdFx0Ly8gSWYgbm9ib2R5IHByZXZlbnRlZCB0aGUgZGVmYXVsdCBhY3Rpb24sIGRvIGl0IG5vd1xuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgKSB7XG5cblx0XHRcdGlmICggKCAhc3BlY2lhbC5fZGVmYXVsdCB8fFxuXHRcdFx0XHRzcGVjaWFsLl9kZWZhdWx0LmFwcGx5KCBldmVudFBhdGgucG9wKCksIGRhdGEgKSA9PT0gZmFsc2UgKSAmJlxuXHRcdFx0XHRhY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cblx0XHRcdFx0Ly8gQ2FsbCBhIG5hdGl2ZSBET00gbWV0aG9kIG9uIHRoZSB0YXJnZXQgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBldmVudC5cblx0XHRcdFx0Ly8gRG9uJ3QgZG8gZGVmYXVsdCBhY3Rpb25zIG9uIHdpbmRvdywgdGhhdCdzIHdoZXJlIGdsb2JhbCB2YXJpYWJsZXMgYmUgKHRyYWMtNjE3MClcblx0XHRcdFx0aWYgKCBvbnR5cGUgJiYgaXNGdW5jdGlvbiggZWxlbVsgdHlwZSBdICkgJiYgIWlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdFx0XHQvLyBEb24ndCByZS10cmlnZ2VyIGFuIG9uRk9PIGV2ZW50IHdoZW4gd2UgY2FsbCBpdHMgRk9PKCkgbWV0aG9kXG5cdFx0XHRcdFx0dG1wID0gZWxlbVsgb250eXBlIF07XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmV2ZW50IHJlLXRyaWdnZXJpbmcgb2YgdGhlIHNhbWUgZXZlbnQsIHNpbmNlIHdlIGFscmVhZHkgYnViYmxlZCBpdCBhYm92ZVxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB0eXBlO1xuXG5cdFx0XHRcdFx0aWYgKCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0XHRcdFx0bGFzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2sgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtWyB0eXBlIF0oKTtcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRcdGlmICggdG1wICkge1xuXHRcdFx0XHRcdFx0ZWxlbVsgb250eXBlIF0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHQvLyBQaWdneWJhY2sgb24gYSBkb25vciBldmVudCB0byBzaW11bGF0ZSBhIGRpZmZlcmVudCBvbmVcblx0Ly8gVXNlZCBvbmx5IGZvciBgZm9jdXMoaW4gfCBvdXQpYCBldmVudHNcblx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0eXBlLCBlbGVtLCBldmVudCApIHtcblx0XHR2YXIgZSA9IGpRdWVyeS5leHRlbmQoXG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCksXG5cdFx0XHRldmVudCxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0aXNTaW11bGF0ZWQ6IHRydWVcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIGUsIG51bGwsIGVsZW0gKTtcblx0fVxuXG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCB0aGlzICk7XG5cdFx0fSApO1xuXHR9LFxuXHR0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF07XG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCBlbGVtLCB0cnVlICk7XG5cdFx0fVxuXHR9XG59ICk7XG5cblxudmFyXG5cdHJicmFja2V0ID0gL1xcW1xcXSQvLFxuXHRyQ1JMRiA9IC9cXHI/XFxuL2csXG5cdHJzdWJtaXR0ZXJUeXBlcyA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxcblx0cnN1Ym1pdHRhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO1xuXG5mdW5jdGlvbiBidWlsZFBhcmFtcyggcHJlZml4LCBvYmosIHRyYWRpdGlvbmFsLCBhZGQgKSB7XG5cdHZhciBuYW1lO1xuXG5cdGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgYXJyYXkgaXRlbS5cblx0XHRqUXVlcnkuZWFjaCggb2JqLCBmdW5jdGlvbiggaSwgdiApIHtcblx0XHRcdGlmICggdHJhZGl0aW9uYWwgfHwgcmJyYWNrZXQudGVzdCggcHJlZml4ICkgKSB7XG5cblx0XHRcdFx0Ly8gVHJlYXQgZWFjaCBhcnJheSBpdGVtIGFzIGEgc2NhbGFyLlxuXHRcdFx0XHRhZGQoIHByZWZpeCwgdiApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEl0ZW0gaXMgbm9uLXNjYWxhciAoYXJyYXkgb3Igb2JqZWN0KSwgZW5jb2RlIGl0cyBudW1lcmljIGluZGV4LlxuXHRcdFx0XHRidWlsZFBhcmFtcyhcblx0XHRcdFx0XHRwcmVmaXggKyBcIltcIiArICggdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdiAhPSBudWxsID8gaSA6IFwiXCIgKSArIFwiXVwiLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0dHJhZGl0aW9uYWwsXG5cdFx0XHRcdFx0YWRkXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdH0gZWxzZSBpZiAoICF0cmFkaXRpb25hbCAmJiB0b1R5cGUoIG9iaiApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCArIFwiW1wiICsgbmFtZSArIFwiXVwiLCBvYmpbIG5hbWUgXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHNjYWxhciBpdGVtLlxuXHRcdGFkZCggcHJlZml4LCBvYmogKTtcblx0fVxufVxuXG4vLyBTZXJpYWxpemUgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cyBvciBhIHNldCBvZlxuLy8ga2V5L3ZhbHVlcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG5qUXVlcnkucGFyYW0gPSBmdW5jdGlvbiggYSwgdHJhZGl0aW9uYWwgKSB7XG5cdHZhciBwcmVmaXgsXG5cdFx0cyA9IFtdLFxuXHRcdGFkZCA9IGZ1bmN0aW9uKCBrZXksIHZhbHVlT3JGdW5jdGlvbiApIHtcblxuXHRcdFx0Ly8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCB1c2UgaXRzIHJldHVybiB2YWx1ZVxuXHRcdFx0dmFyIHZhbHVlID0gaXNGdW5jdGlvbiggdmFsdWVPckZ1bmN0aW9uICkgP1xuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb24oKSA6XG5cdFx0XHRcdHZhbHVlT3JGdW5jdGlvbjtcblxuXHRcdFx0c1sgcy5sZW5ndGggXSA9IGVuY29kZVVSSUNvbXBvbmVudCgga2V5ICkgKyBcIj1cIiArXG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudCggdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSApO1xuXHRcdH07XG5cblx0aWYgKCBhID09IG51bGwgKSB7XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblxuXHQvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIGEgKSB8fCAoIGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggYSApICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcblx0XHRqUXVlcnkuZWFjaCggYSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRhZGQoIHRoaXMubmFtZSwgdGhpcy52YWx1ZSApO1xuXHRcdH0gKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcblx0XHQvLyBkaWQgaXQpLCBvdGhlcndpc2UgZW5jb2RlIHBhcmFtcyByZWN1cnNpdmVseS5cblx0XHRmb3IgKCBwcmVmaXggaW4gYSApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXgsIGFbIHByZWZpeCBdLCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSByZXN1bHRpbmcgc2VyaWFsaXphdGlvblxuXHRyZXR1cm4gcy5qb2luKCBcIiZcIiApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRzZXJpYWxpemU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnkucGFyYW0oIHRoaXMuc2VyaWFsaXplQXJyYXkoKSApO1xuXHR9LFxuXHRzZXJpYWxpemVBcnJheTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gQ2FuIGFkZCBwcm9wSG9vayBmb3IgXCJlbGVtZW50c1wiIHRvIGZpbHRlciBvciBhZGQgZm9ybSBlbGVtZW50c1xuXHRcdFx0dmFyIGVsZW1lbnRzID0galF1ZXJ5LnByb3AoIHRoaXMsIFwiZWxlbWVudHNcIiApO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnRzID8galF1ZXJ5Lm1ha2VBcnJheSggZWxlbWVudHMgKSA6IHRoaXM7XG5cdFx0fSApLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcblxuXHRcdFx0Ly8gVXNlIC5pcyggXCI6ZGlzYWJsZWRcIiApIHNvIHRoYXQgZmllbGRzZXRbZGlzYWJsZWRdIHdvcmtzXG5cdFx0XHRyZXR1cm4gdGhpcy5uYW1lICYmICFqUXVlcnkoIHRoaXMgKS5pcyggXCI6ZGlzYWJsZWRcIiApICYmXG5cdFx0XHRcdHJzdWJtaXR0YWJsZS50ZXN0KCB0aGlzLm5vZGVOYW1lICkgJiYgIXJzdWJtaXR0ZXJUeXBlcy50ZXN0KCB0eXBlICkgJiZcblx0XHRcdFx0KCB0aGlzLmNoZWNrZWQgfHwgIXJjaGVja2FibGVUeXBlLnRlc3QoIHR5cGUgKSApO1xuXHRcdH0gKS5tYXAoIGZ1bmN0aW9uKCBfaSwgZWxlbSApIHtcblx0XHRcdHZhciB2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0aWYgKCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdH0gKS5nZXQoKTtcblx0fVxufSApO1xuXG5cbnZhclxuXHRyMjAgPSAvJTIwL2csXG5cdHJoYXNoID0gLyMuKiQvLFxuXHRyYW50aUNhY2hlID0gLyhbPyZdKV89W14mXSovLFxuXHRyaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG5cblx0Ly8gdHJhYy03NjUzLCB0cmFjLTgxMjUsIHRyYWMtODE1MjogbG9jYWwgcHJvdG9jb2wgZGV0ZWN0aW9uXG5cdHJsb2NhbFByb3RvY29sID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXG5cdHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuXHRycHJvdG9jb2wgPSAvXlxcL1xcLy8sXG5cblx0LyogUHJlZmlsdGVyc1xuXHQgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuXHQgKiAyKSBUaGVzZSBhcmUgY2FsbGVkOlxuXHQgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG5cdCAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcblx0ICogMykga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHRwcmVmaWx0ZXJzID0ge30sXG5cblx0LyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuXHQgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHR0cmFuc3BvcnRzID0ge30sXG5cblx0Ly8gQXZvaWQgY29tbWVudC1wcm9sb2cgY2hhciBzZXF1ZW5jZSAodHJhYy0xMDA5OCk7IG11c3QgYXBwZWFzZSBsaW50IGFuZCBldmFkZSBjb21wcmVzc2lvblxuXHRhbGxUeXBlcyA9IFwiKi9cIi5jb25jYXQoIFwiKlwiICksXG5cblx0Ly8gQW5jaG9yIHRhZyBmb3IgcGFyc2luZyB0aGUgZG9jdW1lbnQgb3JpZ2luXG5cdG9yaWdpbkFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG5cbm9yaWdpbkFuY2hvci5ocmVmID0gbG9jYXRpb24uaHJlZjtcblxuLy8gQmFzZSBcImNvbnN0cnVjdG9yXCIgZm9yIGpRdWVyeS5hamF4UHJlZmlsdGVyIGFuZCBqUXVlcnkuYWpheFRyYW5zcG9ydFxuZnVuY3Rpb24gYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUgKSB7XG5cblx0Ly8gZGF0YVR5cGVFeHByZXNzaW9uIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBcIipcIlxuXHRyZXR1cm4gZnVuY3Rpb24oIGRhdGFUeXBlRXhwcmVzc2lvbiwgZnVuYyApIHtcblxuXHRcdGlmICggdHlwZW9mIGRhdGFUeXBlRXhwcmVzc2lvbiAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGZ1bmMgPSBkYXRhVHlwZUV4cHJlc3Npb247XG5cdFx0XHRkYXRhVHlwZUV4cHJlc3Npb24gPSBcIipcIjtcblx0XHR9XG5cblx0XHR2YXIgZGF0YVR5cGUsXG5cdFx0XHRpID0gMCxcblx0XHRcdGRhdGFUeXBlcyA9IGRhdGFUeXBlRXhwcmVzc2lvbi50b0xvd2VyQ2FzZSgpLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIGZ1bmMgKSApIHtcblxuXHRcdFx0Ly8gRm9yIGVhY2ggZGF0YVR5cGUgaW4gdGhlIGRhdGFUeXBlRXhwcmVzc2lvblxuXHRcdFx0d2hpbGUgKCAoIGRhdGFUeXBlID0gZGF0YVR5cGVzWyBpKysgXSApICkge1xuXG5cdFx0XHRcdC8vIFByZXBlbmQgaWYgcmVxdWVzdGVkXG5cdFx0XHRcdGlmICggZGF0YVR5cGVbIDAgXSA9PT0gXCIrXCIgKSB7XG5cdFx0XHRcdFx0ZGF0YVR5cGUgPSBkYXRhVHlwZS5zbGljZSggMSApIHx8IFwiKlwiO1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkudW5zaGlmdCggZnVuYyApO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBhcHBlbmRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQoIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSApLnB1c2goIGZ1bmMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLy8gQmFzZSBpbnNwZWN0aW9uIGZ1bmN0aW9uIGZvciBwcmVmaWx0ZXJzIGFuZCB0cmFuc3BvcnRzXG5mdW5jdGlvbiBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlLCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSICkge1xuXG5cdHZhciBpbnNwZWN0ZWQgPSB7fSxcblx0XHRzZWVraW5nVHJhbnNwb3J0ID0gKCBzdHJ1Y3R1cmUgPT09IHRyYW5zcG9ydHMgKTtcblxuXHRmdW5jdGlvbiBpbnNwZWN0KCBkYXRhVHlwZSApIHtcblx0XHR2YXIgc2VsZWN0ZWQ7XG5cdFx0aW5zcGVjdGVkWyBkYXRhVHlwZSBdID0gdHJ1ZTtcblx0XHRqUXVlcnkuZWFjaCggc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdLCBmdW5jdGlvbiggXywgcHJlZmlsdGVyT3JGYWN0b3J5ICkge1xuXHRcdFx0dmFyIGRhdGFUeXBlT3JUcmFuc3BvcnQgPSBwcmVmaWx0ZXJPckZhY3RvcnkoIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKTtcblx0XHRcdGlmICggdHlwZW9mIGRhdGFUeXBlT3JUcmFuc3BvcnQgPT09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0IXNlZWtpbmdUcmFuc3BvcnQgJiYgIWluc3BlY3RlZFsgZGF0YVR5cGVPclRyYW5zcG9ydCBdICkge1xuXG5cdFx0XHRcdG9wdGlvbnMuZGF0YVR5cGVzLnVuc2hpZnQoIGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdFx0aW5zcGVjdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKCBzZWVraW5nVHJhbnNwb3J0ICkge1xuXHRcdFx0XHRyZXR1cm4gISggc2VsZWN0ZWQgPSBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHRcdHJldHVybiBzZWxlY3RlZDtcblx0fVxuXG5cdHJldHVybiBpbnNwZWN0KCBvcHRpb25zLmRhdGFUeXBlc1sgMCBdICkgfHwgIWluc3BlY3RlZFsgXCIqXCIgXSAmJiBpbnNwZWN0KCBcIipcIiApO1xufVxuXG4vLyBBIHNwZWNpYWwgZXh0ZW5kIGZvciBhamF4IG9wdGlvbnNcbi8vIHRoYXQgdGFrZXMgXCJmbGF0XCIgb3B0aW9ucyAobm90IHRvIGJlIGRlZXAgZXh0ZW5kZWQpXG4vLyBGaXhlcyB0cmFjLTk4ODdcbmZ1bmN0aW9uIGFqYXhFeHRlbmQoIHRhcmdldCwgc3JjICkge1xuXHR2YXIga2V5LCBkZWVwLFxuXHRcdGZsYXRPcHRpb25zID0galF1ZXJ5LmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9ucyB8fCB7fTtcblxuXHRmb3IgKCBrZXkgaW4gc3JjICkge1xuXHRcdGlmICggc3JjWyBrZXkgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0KCBmbGF0T3B0aW9uc1sga2V5IF0gPyB0YXJnZXQgOiAoIGRlZXAgfHwgKCBkZWVwID0ge30gKSApIClbIGtleSBdID0gc3JjWyBrZXkgXTtcblx0XHR9XG5cdH1cblx0aWYgKCBkZWVwICkge1xuXHRcdGpRdWVyeS5leHRlbmQoIHRydWUsIHRhcmdldCwgZGVlcCApO1xuXHR9XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuLyogSGFuZGxlcyByZXNwb25zZXMgdG8gYW4gYWpheCByZXF1ZXN0OlxuICogLSBmaW5kcyB0aGUgcmlnaHQgZGF0YVR5cGUgKG1lZGlhdGVzIGJldHdlZW4gY29udGVudC10eXBlIGFuZCBleHBlY3RlZCBkYXRhVHlwZSlcbiAqIC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuICovXG5mdW5jdGlvbiBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICkge1xuXG5cdHZhciBjdCwgdHlwZSwgZmluYWxEYXRhVHlwZSwgZmlyc3REYXRhVHlwZSxcblx0XHRjb250ZW50cyA9IHMuY29udGVudHMsXG5cdFx0ZGF0YVR5cGVzID0gcy5kYXRhVHlwZXM7XG5cblx0Ly8gUmVtb3ZlIGF1dG8gZGF0YVR5cGUgYW5kIGdldCBjb250ZW50LXR5cGUgaW4gdGhlIHByb2Nlc3Ncblx0d2hpbGUgKCBkYXRhVHlwZXNbIDAgXSA9PT0gXCIqXCIgKSB7XG5cdFx0ZGF0YVR5cGVzLnNoaWZ0KCk7XG5cdFx0aWYgKCBjdCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0Y3QgPSBzLm1pbWVUeXBlIHx8IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKCBcIkNvbnRlbnQtVHlwZVwiICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hlY2sgaWYgd2UncmUgZGVhbGluZyB3aXRoIGEga25vd24gY29udGVudC10eXBlXG5cdGlmICggY3QgKSB7XG5cdFx0Zm9yICggdHlwZSBpbiBjb250ZW50cyApIHtcblx0XHRcdGlmICggY29udGVudHNbIHR5cGUgXSAmJiBjb250ZW50c1sgdHlwZSBdLnRlc3QoIGN0ICkgKSB7XG5cdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCB0eXBlICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGEgcmVzcG9uc2UgZm9yIHRoZSBleHBlY3RlZCBkYXRhVHlwZVxuXHRpZiAoIGRhdGFUeXBlc1sgMCBdIGluIHJlc3BvbnNlcyApIHtcblx0XHRmaW5hbERhdGFUeXBlID0gZGF0YVR5cGVzWyAwIF07XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBUcnkgY29udmVydGlibGUgZGF0YVR5cGVzXG5cdFx0Zm9yICggdHlwZSBpbiByZXNwb25zZXMgKSB7XG5cdFx0XHRpZiAoICFkYXRhVHlwZXNbIDAgXSB8fCBzLmNvbnZlcnRlcnNbIHR5cGUgKyBcIiBcIiArIGRhdGFUeXBlc1sgMCBdIF0gKSB7XG5cdFx0XHRcdGZpbmFsRGF0YVR5cGUgPSB0eXBlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICggIWZpcnN0RGF0YVR5cGUgKSB7XG5cdFx0XHRcdGZpcnN0RGF0YVR5cGUgPSB0eXBlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE9yIGp1c3QgdXNlIGZpcnN0IG9uZVxuXHRcdGZpbmFsRGF0YVR5cGUgPSBmaW5hbERhdGFUeXBlIHx8IGZpcnN0RGF0YVR5cGU7XG5cdH1cblxuXHQvLyBJZiB3ZSBmb3VuZCBhIGRhdGFUeXBlXG5cdC8vIFdlIGFkZCB0aGUgZGF0YVR5cGUgdG8gdGhlIGxpc3QgaWYgbmVlZGVkXG5cdC8vIGFuZCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2Vcblx0aWYgKCBmaW5hbERhdGFUeXBlICkge1xuXHRcdGlmICggZmluYWxEYXRhVHlwZSAhPT0gZGF0YVR5cGVzWyAwIF0gKSB7XG5cdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggZmluYWxEYXRhVHlwZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzcG9uc2VzWyBmaW5hbERhdGFUeXBlIF07XG5cdH1cbn1cblxuLyogQ2hhaW4gY29udmVyc2lvbnMgZ2l2ZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBvcmlnaW5hbCByZXNwb25zZVxuICogQWxzbyBzZXRzIHRoZSByZXNwb25zZVhYWCBmaWVsZHMgb24gdGhlIGpxWEhSIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGFqYXhDb252ZXJ0KCBzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2VzcyApIHtcblx0dmFyIGNvbnYyLCBjdXJyZW50LCBjb252LCB0bXAsIHByZXYsXG5cdFx0Y29udmVydGVycyA9IHt9LFxuXG5cdFx0Ly8gV29yayB3aXRoIGEgY29weSBvZiBkYXRhVHlwZXMgaW4gY2FzZSB3ZSBuZWVkIHRvIG1vZGlmeSBpdCBmb3IgY29udmVyc2lvblxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzLnNsaWNlKCk7XG5cblx0Ly8gQ3JlYXRlIGNvbnZlcnRlcnMgbWFwIHdpdGggbG93ZXJjYXNlZCBrZXlzXG5cdGlmICggZGF0YVR5cGVzWyAxIF0gKSB7XG5cdFx0Zm9yICggY29udiBpbiBzLmNvbnZlcnRlcnMgKSB7XG5cdFx0XHRjb252ZXJ0ZXJzWyBjb252LnRvTG93ZXJDYXNlKCkgXSA9IHMuY29udmVydGVyc1sgY29udiBdO1xuXHRcdH1cblx0fVxuXG5cdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHQvLyBDb252ZXJ0IHRvIGVhY2ggc2VxdWVudGlhbCBkYXRhVHlwZVxuXHR3aGlsZSAoIGN1cnJlbnQgKSB7XG5cblx0XHRpZiAoIHMucmVzcG9uc2VGaWVsZHNbIGN1cnJlbnQgXSApIHtcblx0XHRcdGpxWEhSWyBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gXSA9IHJlc3BvbnNlO1xuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHRoZSBkYXRhRmlsdGVyIGlmIHByb3ZpZGVkXG5cdFx0aWYgKCAhcHJldiAmJiBpc1N1Y2Nlc3MgJiYgcy5kYXRhRmlsdGVyICkge1xuXHRcdFx0cmVzcG9uc2UgPSBzLmRhdGFGaWx0ZXIoIHJlc3BvbnNlLCBzLmRhdGFUeXBlICk7XG5cdFx0fVxuXG5cdFx0cHJldiA9IGN1cnJlbnQ7XG5cdFx0Y3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG5cdFx0aWYgKCBjdXJyZW50ICkge1xuXG5cdFx0XHQvLyBUaGVyZSdzIG9ubHkgd29yayB0byBkbyBpZiBjdXJyZW50IGRhdGFUeXBlIGlzIG5vbi1hdXRvXG5cdFx0XHRpZiAoIGN1cnJlbnQgPT09IFwiKlwiICkge1xuXG5cdFx0XHRcdGN1cnJlbnQgPSBwcmV2O1xuXG5cdFx0XHQvLyBDb252ZXJ0IHJlc3BvbnNlIGlmIHByZXYgZGF0YVR5cGUgaXMgbm9uLWF1dG8gYW5kIGRpZmZlcnMgZnJvbSBjdXJyZW50XG5cdFx0XHR9IGVsc2UgaWYgKCBwcmV2ICE9PSBcIipcIiAmJiBwcmV2ICE9PSBjdXJyZW50ICkge1xuXG5cdFx0XHRcdC8vIFNlZWsgYSBkaXJlY3QgY29udmVydGVyXG5cdFx0XHRcdGNvbnYgPSBjb252ZXJ0ZXJzWyBwcmV2ICsgXCIgXCIgKyBjdXJyZW50IF0gfHwgY29udmVydGVyc1sgXCIqIFwiICsgY3VycmVudCBdO1xuXG5cdFx0XHRcdC8vIElmIG5vbmUgZm91bmQsIHNlZWsgYSBwYWlyXG5cdFx0XHRcdGlmICggIWNvbnYgKSB7XG5cdFx0XHRcdFx0Zm9yICggY29udjIgaW4gY29udmVydGVycyApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgY29udjIgb3V0cHV0cyBjdXJyZW50XG5cdFx0XHRcdFx0XHR0bXAgPSBjb252Mi5zcGxpdCggXCIgXCIgKTtcblx0XHRcdFx0XHRcdGlmICggdG1wWyAxIF0gPT09IGN1cnJlbnQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gSWYgcHJldiBjYW4gYmUgY29udmVydGVkIHRvIGFjY2VwdGVkIGlucHV0XG5cdFx0XHRcdFx0XHRcdGNvbnYgPSBjb252ZXJ0ZXJzWyBwcmV2ICsgXCIgXCIgKyB0bXBbIDAgXSBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0Y29udmVydGVyc1sgXCIqIFwiICsgdG1wWyAwIF0gXTtcblx0XHRcdFx0XHRcdFx0aWYgKCBjb252ICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ29uZGVuc2UgZXF1aXZhbGVuY2UgY29udmVydGVyc1xuXHRcdFx0XHRcdFx0XHRcdGlmICggY29udiA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnYgPSBjb252ZXJ0ZXJzWyBjb252MiBdO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBpbnNlcnQgdGhlIGludGVybWVkaWF0ZSBkYXRhVHlwZVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGNvbnZlcnRlcnNbIGNvbnYyIF0gIT09IHRydWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50ID0gdG1wWyAwIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggdG1wWyAxIF0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBcHBseSBjb252ZXJ0ZXIgKGlmIG5vdCBhbiBlcXVpdmFsZW5jZSlcblx0XHRcdFx0aWYgKCBjb252ICE9PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0Ly8gVW5sZXNzIGVycm9ycyBhcmUgYWxsb3dlZCB0byBidWJibGUsIGNhdGNoIGFuZCByZXR1cm4gdGhlbVxuXHRcdFx0XHRcdGlmICggY29udiAmJiBzLnRocm93cyApIHtcblx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBjb252KCByZXNwb25zZSApO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGU6IFwicGFyc2VyZXJyb3JcIixcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogY29udiA/IGUgOiBcIk5vIGNvbnZlcnNpb24gZnJvbSBcIiArIHByZXYgKyBcIiB0byBcIiArIGN1cnJlbnRcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4geyBzdGF0ZTogXCJzdWNjZXNzXCIsIGRhdGE6IHJlc3BvbnNlIH07XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBDb3VudGVyIGZvciBob2xkaW5nIHRoZSBudW1iZXIgb2YgYWN0aXZlIHF1ZXJpZXNcblx0YWN0aXZlOiAwLFxuXG5cdC8vIExhc3QtTW9kaWZpZWQgaGVhZGVyIGNhY2hlIGZvciBuZXh0IHJlcXVlc3Rcblx0bGFzdE1vZGlmaWVkOiB7fSxcblx0ZXRhZzoge30sXG5cblx0YWpheFNldHRpbmdzOiB7XG5cdFx0dXJsOiBsb2NhdGlvbi5ocmVmLFxuXHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0aXNMb2NhbDogcmxvY2FsUHJvdG9jb2wudGVzdCggbG9jYXRpb24ucHJvdG9jb2wgKSxcblx0XHRnbG9iYWw6IHRydWUsXG5cdFx0cHJvY2Vzc0RhdGE6IHRydWUsXG5cdFx0YXN5bmM6IHRydWUsXG5cdFx0Y29udGVudFR5cGU6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsXG5cblx0XHQvKlxuXHRcdHRpbWVvdXQ6IDAsXG5cdFx0ZGF0YTogbnVsbCxcblx0XHRkYXRhVHlwZTogbnVsbCxcblx0XHR1c2VybmFtZTogbnVsbCxcblx0XHRwYXNzd29yZDogbnVsbCxcblx0XHRjYWNoZTogbnVsbCxcblx0XHR0aHJvd3M6IGZhbHNlLFxuXHRcdHRyYWRpdGlvbmFsOiBmYWxzZSxcblx0XHRoZWFkZXJzOiB7fSxcblx0XHQqL1xuXG5cdFx0YWNjZXB0czoge1xuXHRcdFx0XCIqXCI6IGFsbFR5cGVzLFxuXHRcdFx0dGV4dDogXCJ0ZXh0L3BsYWluXCIsXG5cdFx0XHRodG1sOiBcInRleHQvaHRtbFwiLFxuXHRcdFx0eG1sOiBcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixcblx0XHRcdGpzb246IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJcblx0XHR9LFxuXG5cdFx0Y29udGVudHM6IHtcblx0XHRcdHhtbDogL1xcYnhtbFxcYi8sXG5cdFx0XHRodG1sOiAvXFxiaHRtbC8sXG5cdFx0XHRqc29uOiAvXFxianNvblxcYi9cblx0XHR9LFxuXG5cdFx0cmVzcG9uc2VGaWVsZHM6IHtcblx0XHRcdHhtbDogXCJyZXNwb25zZVhNTFwiLFxuXHRcdFx0dGV4dDogXCJyZXNwb25zZVRleHRcIixcblx0XHRcdGpzb246IFwicmVzcG9uc2VKU09OXCJcblx0XHR9LFxuXG5cdFx0Ly8gRGF0YSBjb252ZXJ0ZXJzXG5cdFx0Ly8gS2V5cyBzZXBhcmF0ZSBzb3VyY2UgKG9yIGNhdGNoYWxsIFwiKlwiKSBhbmQgZGVzdGluYXRpb24gdHlwZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuXHRcdGNvbnZlcnRlcnM6IHtcblxuXHRcdFx0Ly8gQ29udmVydCBhbnl0aGluZyB0byB0ZXh0XG5cdFx0XHRcIiogdGV4dFwiOiBTdHJpbmcsXG5cblx0XHRcdC8vIFRleHQgdG8gaHRtbCAodHJ1ZSA9IG5vIHRyYW5zZm9ybWF0aW9uKVxuXHRcdFx0XCJ0ZXh0IGh0bWxcIjogdHJ1ZSxcblxuXHRcdFx0Ly8gRXZhbHVhdGUgdGV4dCBhcyBhIGpzb24gZXhwcmVzc2lvblxuXHRcdFx0XCJ0ZXh0IGpzb25cIjogSlNPTi5wYXJzZSxcblxuXHRcdFx0Ly8gUGFyc2UgdGV4dCBhcyB4bWxcblx0XHRcdFwidGV4dCB4bWxcIjogalF1ZXJ5LnBhcnNlWE1MXG5cdFx0fSxcblxuXHRcdC8vIEZvciBvcHRpb25zIHRoYXQgc2hvdWxkbid0IGJlIGRlZXAgZXh0ZW5kZWQ6XG5cdFx0Ly8geW91IGNhbiBhZGQgeW91ciBvd24gY3VzdG9tIG9wdGlvbnMgaGVyZSBpZlxuXHRcdC8vIGFuZCB3aGVuIHlvdSBjcmVhdGUgb25lIHRoYXQgc2hvdWxkbid0IGJlXG5cdFx0Ly8gZGVlcCBleHRlbmRlZCAoc2VlIGFqYXhFeHRlbmQpXG5cdFx0ZmxhdE9wdGlvbnM6IHtcblx0XHRcdHVybDogdHJ1ZSxcblx0XHRcdGNvbnRleHQ6IHRydWVcblx0XHR9XG5cdH0sXG5cblx0Ly8gQ3JlYXRlcyBhIGZ1bGwgZmxlZGdlZCBzZXR0aW5ncyBvYmplY3QgaW50byB0YXJnZXRcblx0Ly8gd2l0aCBib3RoIGFqYXhTZXR0aW5ncyBhbmQgc2V0dGluZ3MgZmllbGRzLlxuXHQvLyBJZiB0YXJnZXQgaXMgb21pdHRlZCwgd3JpdGVzIGludG8gYWpheFNldHRpbmdzLlxuXHRhamF4U2V0dXA6IGZ1bmN0aW9uKCB0YXJnZXQsIHNldHRpbmdzICkge1xuXHRcdHJldHVybiBzZXR0aW5ncyA/XG5cblx0XHRcdC8vIEJ1aWxkaW5nIGEgc2V0dGluZ3Mgb2JqZWN0XG5cdFx0XHRhamF4RXh0ZW5kKCBhamF4RXh0ZW5kKCB0YXJnZXQsIGpRdWVyeS5hamF4U2V0dGluZ3MgKSwgc2V0dGluZ3MgKSA6XG5cblx0XHRcdC8vIEV4dGVuZGluZyBhamF4U2V0dGluZ3Ncblx0XHRcdGFqYXhFeHRlbmQoIGpRdWVyeS5hamF4U2V0dGluZ3MsIHRhcmdldCApO1xuXHR9LFxuXG5cdGFqYXhQcmVmaWx0ZXI6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggcHJlZmlsdGVycyApLFxuXHRhamF4VHJhbnNwb3J0OiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHRyYW5zcG9ydHMgKSxcblxuXHQvLyBNYWluIG1ldGhvZFxuXHRhamF4OiBmdW5jdGlvbiggdXJsLCBvcHRpb25zICkge1xuXG5cdFx0Ly8gSWYgdXJsIGlzIGFuIG9iamVjdCwgc2ltdWxhdGUgcHJlLTEuNSBzaWduYXR1cmVcblx0XHRpZiAoIHR5cGVvZiB1cmwgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0XHRvcHRpb25zID0gdXJsO1xuXHRcdFx0dXJsID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIEZvcmNlIG9wdGlvbnMgdG8gYmUgYW4gb2JqZWN0XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHR2YXIgdHJhbnNwb3J0LFxuXG5cdFx0XHQvLyBVUkwgd2l0aG91dCBhbnRpLWNhY2hlIHBhcmFtXG5cdFx0XHRjYWNoZVVSTCxcblxuXHRcdFx0Ly8gUmVzcG9uc2UgaGVhZGVyc1xuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nLFxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzLFxuXG5cdFx0XHQvLyB0aW1lb3V0IGhhbmRsZVxuXHRcdFx0dGltZW91dFRpbWVyLFxuXG5cdFx0XHQvLyBVcmwgY2xlYW51cCB2YXJcblx0XHRcdHVybEFuY2hvcixcblxuXHRcdFx0Ly8gUmVxdWVzdCBzdGF0ZSAoYmVjb21lcyBmYWxzZSB1cG9uIHNlbmQgYW5kIHRydWUgdXBvbiBjb21wbGV0aW9uKVxuXHRcdFx0Y29tcGxldGVkLFxuXG5cdFx0XHQvLyBUbyBrbm93IGlmIGdsb2JhbCBldmVudHMgYXJlIHRvIGJlIGRpc3BhdGNoZWRcblx0XHRcdGZpcmVHbG9iYWxzLFxuXG5cdFx0XHQvLyBMb29wIHZhcmlhYmxlXG5cdFx0XHRpLFxuXG5cdFx0XHQvLyB1bmNhY2hlZCBwYXJ0IG9mIHRoZSB1cmxcblx0XHRcdHVuY2FjaGVkLFxuXG5cdFx0XHQvLyBDcmVhdGUgdGhlIGZpbmFsIG9wdGlvbnMgb2JqZWN0XG5cdFx0XHRzID0galF1ZXJ5LmFqYXhTZXR1cCgge30sIG9wdGlvbnMgKSxcblxuXHRcdFx0Ly8gQ2FsbGJhY2tzIGNvbnRleHRcblx0XHRcdGNhbGxiYWNrQ29udGV4dCA9IHMuY29udGV4dCB8fCBzLFxuXG5cdFx0XHQvLyBDb250ZXh0IGZvciBnbG9iYWwgZXZlbnRzIGlzIGNhbGxiYWNrQ29udGV4dCBpZiBpdCBpcyBhIERPTSBub2RlIG9yIGpRdWVyeSBjb2xsZWN0aW9uXG5cdFx0XHRnbG9iYWxFdmVudENvbnRleHQgPSBzLmNvbnRleHQgJiZcblx0XHRcdFx0KCBjYWxsYmFja0NvbnRleHQubm9kZVR5cGUgfHwgY2FsbGJhY2tDb250ZXh0LmpxdWVyeSApID9cblx0XHRcdFx0alF1ZXJ5KCBjYWxsYmFja0NvbnRleHQgKSA6XG5cdFx0XHRcdGpRdWVyeS5ldmVudCxcblxuXHRcdFx0Ly8gRGVmZXJyZWRzXG5cdFx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZCA9IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0c3RhdHVzQ29kZSA9IHMuc3RhdHVzQ29kZSB8fCB7fSxcblxuXHRcdFx0Ly8gSGVhZGVycyAodGhleSBhcmUgc2VudCBhbGwgYXQgb25jZSlcblx0XHRcdHJlcXVlc3RIZWFkZXJzID0ge30sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG5cblx0XHRcdC8vIERlZmF1bHQgYWJvcnQgbWVzc2FnZVxuXHRcdFx0c3RyQWJvcnQgPSBcImNhbmNlbGVkXCIsXG5cblx0XHRcdC8vIEZha2UgeGhyXG5cdFx0XHRqcVhIUiA9IHtcblx0XHRcdFx0cmVhZHlTdGF0ZTogMCxcblxuXHRcdFx0XHQvLyBCdWlsZHMgaGVhZGVycyBoYXNodGFibGUgaWYgbmVlZGVkXG5cdFx0XHRcdGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdFx0XHRcdHZhciBtYXRjaDtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0XHRcdGlmICggIXJlc3BvbnNlSGVhZGVycyApIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzID0ge307XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKCBtYXRjaCA9IHJoZWFkZXJzLmV4ZWMoIHJlc3BvbnNlSGVhZGVyc1N0cmluZyApICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdID1cblx0XHRcdFx0XHRcdFx0XHRcdCggcmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdIHx8IFtdIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmNvbmNhdCggbWF0Y2hbIDIgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtYXRjaCA9IHJlc3BvbnNlSGVhZGVyc1sga2V5LnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2ggPT0gbnVsbCA/IG51bGwgOiBtYXRjaC5qb2luKCBcIiwgXCIgKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBSYXcgc3RyaW5nXG5cdFx0XHRcdGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbXBsZXRlZCA/IHJlc3BvbnNlSGVhZGVyc1N0cmluZyA6IG51bGw7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FjaGVzIHRoZSBoZWFkZXJcblx0XHRcdFx0c2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gPVxuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fCBuYW1lO1xuXHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBPdmVycmlkZXMgcmVzcG9uc2UgY29udGVudC10eXBlIGhlYWRlclxuXHRcdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0cy5taW1lVHlwZSA9IHR5cGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRcdHN0YXR1c0NvZGU6IGZ1bmN0aW9uKCBtYXAgKSB7XG5cdFx0XHRcdFx0dmFyIGNvZGU7XG5cdFx0XHRcdFx0aWYgKCBtYXAgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBFeGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja3Ncblx0XHRcdFx0XHRcdFx0anFYSFIuYWx3YXlzKCBtYXBbIGpxWEhSLnN0YXR1cyBdICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIExhenktYWRkIHRoZSBuZXcgY2FsbGJhY2tzIGluIGEgd2F5IHRoYXQgcHJlc2VydmVzIG9sZCBvbmVzXG5cdFx0XHRcdFx0XHRcdGZvciAoIGNvZGUgaW4gbWFwICkge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXR1c0NvZGVbIGNvZGUgXSA9IFsgc3RhdHVzQ29kZVsgY29kZSBdLCBtYXBbIGNvZGUgXSBdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhbmNlbCB0aGUgcmVxdWVzdFxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24oIHN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0dmFyIGZpbmFsVGV4dCA9IHN0YXR1c1RleHQgfHwgc3RyQWJvcnQ7XG5cdFx0XHRcdFx0aWYgKCB0cmFuc3BvcnQgKSB7XG5cdFx0XHRcdFx0XHR0cmFuc3BvcnQuYWJvcnQoIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb25lKCAwLCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdC8vIEF0dGFjaCBkZWZlcnJlZHNcblx0XHRkZWZlcnJlZC5wcm9taXNlKCBqcVhIUiApO1xuXG5cdFx0Ly8gQWRkIHByb3RvY29sIGlmIG5vdCBwcm92aWRlZCAocHJlZmlsdGVycyBtaWdodCBleHBlY3QgaXQpXG5cdFx0Ly8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICh0cmFjLTEwMDkzOiBjb25zaXN0ZW5jeSB3aXRoIG9sZCBzaWduYXR1cmUpXG5cdFx0Ly8gV2UgYWxzbyB1c2UgdGhlIHVybCBwYXJhbWV0ZXIgaWYgYXZhaWxhYmxlXG5cdFx0cy51cmwgPSAoICggdXJsIHx8IHMudXJsIHx8IGxvY2F0aW9uLmhyZWYgKSArIFwiXCIgKVxuXHRcdFx0LnJlcGxhY2UoIHJwcm90b2NvbCwgbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKTtcblxuXHRcdC8vIEFsaWFzIG1ldGhvZCBvcHRpb24gdG8gdHlwZSBhcyBwZXIgdGlja2V0IHRyYWMtMTIwMDRcblx0XHRzLnR5cGUgPSBvcHRpb25zLm1ldGhvZCB8fCBvcHRpb25zLnR5cGUgfHwgcy5tZXRob2QgfHwgcy50eXBlO1xuXG5cdFx0Ly8gRXh0cmFjdCBkYXRhVHlwZXMgbGlzdFxuXHRcdHMuZGF0YVR5cGVzID0gKCBzLmRhdGFUeXBlIHx8IFwiKlwiICkudG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXG5cdFx0Ly8gQSBjcm9zcy1kb21haW4gcmVxdWVzdCBpcyBpbiBvcmRlciB3aGVuIHRoZSBvcmlnaW4gZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBvcmlnaW4uXG5cdFx0aWYgKCBzLmNyb3NzRG9tYWluID09IG51bGwgKSB7XG5cdFx0XHR1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSwgRWRnZSAxMiAtIDE1XG5cdFx0XHQvLyBJRSB0aHJvd3MgZXhjZXB0aW9uIG9uIGFjY2Vzc2luZyB0aGUgaHJlZiBwcm9wZXJ0eSBpZiB1cmwgaXMgbWFsZm9ybWVkLFxuXHRcdFx0Ly8gZS5nLiBodHRwOi8vZXhhbXBsZS5jb206ODB4L1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dXJsQW5jaG9yLmhyZWYgPSBzLnVybDtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSBvbmx5XG5cdFx0XHRcdC8vIEFuY2hvcidzIGhvc3QgcHJvcGVydHkgaXNuJ3QgY29ycmVjdGx5IHNldCB3aGVuIHMudXJsIGlzIHJlbGF0aXZlXG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gdXJsQW5jaG9yLmhyZWY7XG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSBvcmlnaW5BbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyBvcmlnaW5BbmNob3IuaG9zdCAhPT1cblx0XHRcdFx0XHR1cmxBbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxBbmNob3IuaG9zdDtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHBhcnNpbmcgdGhlIFVSTCwgYXNzdW1lIGl0IGlzIGNyb3NzRG9tYWluLFxuXHRcdFx0XHQvLyBpdCBjYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIHRyYW5zcG9ydCBpZiBpdCBpcyBpbnZhbGlkXG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuXHRcdGlmICggcy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgdHlwZW9mIHMuZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHMuZGF0YSA9IGpRdWVyeS5wYXJhbSggcy5kYXRhLCBzLnRyYWRpdGlvbmFsICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcHJlZmlsdGVyc1xuXHRcdGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYSBwcmVmaWx0ZXIsIHN0b3AgdGhlcmVcblx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdHJldHVybiBqcVhIUjtcblx0XHR9XG5cblx0XHQvLyBXZSBjYW4gZmlyZSBnbG9iYWwgZXZlbnRzIGFzIG9mIG5vdyBpZiBhc2tlZCB0b1xuXHRcdC8vIERvbid0IGZpcmUgZXZlbnRzIGlmIGpRdWVyeS5ldmVudCBpcyB1bmRlZmluZWQgaW4gYW4gQU1ELXVzYWdlIHNjZW5hcmlvICh0cmFjLTE1MTE4KVxuXHRcdGZpcmVHbG9iYWxzID0galF1ZXJ5LmV2ZW50ICYmIHMuZ2xvYmFsO1xuXG5cdFx0Ly8gV2F0Y2ggZm9yIGEgbmV3IHNldCBvZiByZXF1ZXN0c1xuXHRcdGlmICggZmlyZUdsb2JhbHMgJiYgalF1ZXJ5LmFjdGl2ZSsrID09PSAwICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0YXJ0XCIgKTtcblx0XHR9XG5cblx0XHQvLyBVcHBlcmNhc2UgdGhlIHR5cGVcblx0XHRzLnR5cGUgPSBzLnR5cGUudG9VcHBlckNhc2UoKTtcblxuXHRcdC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5cdFx0cy5oYXNDb250ZW50ID0gIXJub0NvbnRlbnQudGVzdCggcy50eXBlICk7XG5cblx0XHQvLyBTYXZlIHRoZSBVUkwgaW4gY2FzZSB3ZSdyZSB0b3lpbmcgd2l0aCB0aGUgSWYtTW9kaWZpZWQtU2luY2Vcblx0XHQvLyBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIgbGF0ZXIgb25cblx0XHQvLyBSZW1vdmUgaGFzaCB0byBzaW1wbGlmeSB1cmwgbWFuaXB1bGF0aW9uXG5cdFx0Y2FjaGVVUkwgPSBzLnVybC5yZXBsYWNlKCByaGFzaCwgXCJcIiApO1xuXG5cdFx0Ly8gTW9yZSBvcHRpb25zIGhhbmRsaW5nIGZvciByZXF1ZXN0cyB3aXRoIG5vIGNvbnRlbnRcblx0XHRpZiAoICFzLmhhc0NvbnRlbnQgKSB7XG5cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBoYXNoIHNvIHdlIGNhbiBwdXQgaXQgYmFja1xuXHRcdFx0dW5jYWNoZWQgPSBzLnVybC5zbGljZSggY2FjaGVVUkwubGVuZ3RoICk7XG5cblx0XHRcdC8vIElmIGRhdGEgaXMgYXZhaWxhYmxlIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBhcHBlbmQgZGF0YSB0byB1cmxcblx0XHRcdGlmICggcy5kYXRhICYmICggcy5wcm9jZXNzRGF0YSB8fCB0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICkgKSB7XG5cdFx0XHRcdGNhY2hlVVJMICs9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmRhdGE7XG5cblx0XHRcdFx0Ly8gdHJhYy05NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblx0XHRcdFx0ZGVsZXRlIHMuZGF0YTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIG9yIHVwZGF0ZSBhbnRpLWNhY2hlIHBhcmFtIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCBzLmNhY2hlID09PSBmYWxzZSApIHtcblx0XHRcdFx0Y2FjaGVVUkwgPSBjYWNoZVVSTC5yZXBsYWNlKCByYW50aUNhY2hlLCBcIiQxXCIgKTtcblx0XHRcdFx0dW5jYWNoZWQgPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgXCJfPVwiICsgKCBub25jZS5ndWlkKysgKSArXG5cdFx0XHRcdFx0dW5jYWNoZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFB1dCBoYXNoIGFuZCBhbnRpLWNhY2hlIG9uIHRoZSBVUkwgdGhhdCB3aWxsIGJlIHJlcXVlc3RlZCAoZ2gtMTczMilcblx0XHRcdHMudXJsID0gY2FjaGVVUkwgKyB1bmNhY2hlZDtcblxuXHRcdC8vIENoYW5nZSAnJTIwJyB0byAnKycgaWYgdGhpcyBpcyBlbmNvZGVkIGZvcm0gYm9keSBjb250ZW50IChnaC0yNjU4KVxuXHRcdH0gZWxzZSBpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmXG5cdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApLmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCApIHtcblx0XHRcdHMuZGF0YSA9IHMuZGF0YS5yZXBsYWNlKCByMjAsIFwiK1wiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdGlmICggalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Nb2RpZmllZC1TaW5jZVwiLCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU5vbmUtTWF0Y2hcIiwgalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcblx0XHRpZiAoIHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIsIHMuY29udGVudFR5cGUgKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIEFjY2VwdHMgaGVhZGVyIGZvciB0aGUgc2VydmVyLCBkZXBlbmRpbmcgb24gdGhlIGRhdGFUeXBlXG5cdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlcihcblx0XHRcdFwiQWNjZXB0XCIsXG5cdFx0XHRzLmRhdGFUeXBlc1sgMCBdICYmIHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdID9cblx0XHRcdFx0cy5hY2NlcHRzWyBzLmRhdGFUeXBlc1sgMCBdIF0gK1xuXHRcdFx0XHRcdCggcy5kYXRhVHlwZXNbIDAgXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIgKSA6XG5cdFx0XHRcdHMuYWNjZXB0c1sgXCIqXCIgXVxuXHRcdCk7XG5cblx0XHQvLyBDaGVjayBmb3IgaGVhZGVycyBvcHRpb25cblx0XHRmb3IgKCBpIGluIHMuaGVhZGVycyApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIGksIHMuaGVhZGVyc1sgaSBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuXHRcdGlmICggcy5iZWZvcmVTZW5kICYmXG5cdFx0XHQoIHMuYmVmb3JlU2VuZC5jYWxsKCBjYWxsYmFja0NvbnRleHQsIGpxWEhSLCBzICkgPT09IGZhbHNlIHx8IGNvbXBsZXRlZCApICkge1xuXG5cdFx0XHQvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cblx0XHRcdHJldHVybiBqcVhIUi5hYm9ydCgpO1xuXHRcdH1cblxuXHRcdC8vIEFib3J0aW5nIGlzIG5vIGxvbmdlciBhIGNhbmNlbGxhdGlvblxuXHRcdHN0ckFib3J0ID0gXCJhYm9ydFwiO1xuXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja3Mgb24gZGVmZXJyZWRzXG5cdFx0Y29tcGxldGVEZWZlcnJlZC5hZGQoIHMuY29tcGxldGUgKTtcblx0XHRqcVhIUi5kb25lKCBzLnN1Y2Nlc3MgKTtcblx0XHRqcVhIUi5mYWlsKCBzLmVycm9yICk7XG5cblx0XHQvLyBHZXQgdHJhbnNwb3J0XG5cdFx0dHJhbnNwb3J0ID0gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHRyYW5zcG9ydHMsIHMsIG9wdGlvbnMsIGpxWEhSICk7XG5cblx0XHQvLyBJZiBubyB0cmFuc3BvcnQsIHdlIGF1dG8tYWJvcnRcblx0XHRpZiAoICF0cmFuc3BvcnQgKSB7XG5cdFx0XHRkb25lKCAtMSwgXCJObyBUcmFuc3BvcnRcIiApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gMTtcblxuXHRcdFx0Ly8gU2VuZCBnbG9iYWwgZXZlbnRcblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhTZW5kXCIsIFsganFYSFIsIHMgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhamF4U2VuZCwgc3RvcCB0aGVyZVxuXHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdHJldHVybiBqcVhIUjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGltZW91dFxuXHRcdFx0aWYgKCBzLmFzeW5jICYmIHMudGltZW91dCA+IDAgKSB7XG5cdFx0XHRcdHRpbWVvdXRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRqcVhIUi5hYm9ydCggXCJ0aW1lb3V0XCIgKTtcblx0XHRcdFx0fSwgcy50aW1lb3V0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbXBsZXRlZCA9IGZhbHNlO1xuXHRcdFx0XHR0cmFuc3BvcnQuc2VuZCggcmVxdWVzdEhlYWRlcnMsIGRvbmUgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIFJldGhyb3cgcG9zdC1jb21wbGV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb3BhZ2F0ZSBvdGhlcnMgYXMgcmVzdWx0c1xuXHRcdFx0XHRkb25lKCAtMSwgZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGxiYWNrIGZvciB3aGVuIGV2ZXJ5dGhpbmcgaXMgZG9uZVxuXHRcdGZ1bmN0aW9uIGRvbmUoIHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzICkge1xuXHRcdFx0dmFyIGlzU3VjY2Vzcywgc3VjY2VzcywgZXJyb3IsIHJlc3BvbnNlLCBtb2RpZmllZCxcblx0XHRcdFx0c3RhdHVzVGV4dCA9IG5hdGl2ZVN0YXR1c1RleHQ7XG5cblx0XHRcdC8vIElnbm9yZSByZXBlYXQgaW52b2NhdGlvbnNcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdC8vIENsZWFyIHRpbWVvdXQgaWYgaXQgZXhpc3RzXG5cdFx0XHRpZiAoIHRpbWVvdXRUaW1lciApIHtcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dFRpbWVyICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERlcmVmZXJlbmNlIHRyYW5zcG9ydCBmb3IgZWFybHkgZ2FyYmFnZSBjb2xsZWN0aW9uXG5cdFx0XHQvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxuXHRcdFx0dHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcgPSBoZWFkZXJzIHx8IFwiXCI7XG5cblx0XHRcdC8vIFNldCByZWFkeVN0YXRlXG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gc3RhdHVzID4gMCA/IDQgOiAwO1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgc3VjY2Vzc2Z1bFxuXHRcdFx0aXNTdWNjZXNzID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDAgfHwgc3RhdHVzID09PSAzMDQ7XG5cblx0XHRcdC8vIEdldCByZXNwb25zZSBkYXRhXG5cdFx0XHRpZiAoIHJlc3BvbnNlcyApIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVzZSBhIG5vb3AgY29udmVydGVyIGZvciBtaXNzaW5nIHNjcmlwdCBidXQgbm90IGlmIGpzb25wXG5cdFx0XHRpZiAoICFpc1N1Y2Nlc3MgJiZcblx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIFwic2NyaXB0XCIsIHMuZGF0YVR5cGVzICkgPiAtMSAmJlxuXHRcdFx0XHRqUXVlcnkuaW5BcnJheSggXCJqc29uXCIsIHMuZGF0YVR5cGVzICkgPCAwICkge1xuXHRcdFx0XHRzLmNvbnZlcnRlcnNbIFwidGV4dCBzY3JpcHRcIiBdID0gZnVuY3Rpb24oKSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCBubyBtYXR0ZXIgd2hhdCAodGhhdCB3YXkgcmVzcG9uc2VYWFggZmllbGRzIGFyZSBhbHdheXMgc2V0KVxuXHRcdFx0cmVzcG9uc2UgPSBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKTtcblxuXHRcdFx0Ly8gSWYgc3VjY2Vzc2Z1bCwgaGFuZGxlIHR5cGUgY2hhaW5pbmdcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0XHRcdGlmICggcy5pZk1vZGlmaWVkICkge1xuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiTGFzdC1Nb2RpZmllZFwiICk7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJldGFnXCIgKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBubyBjb250ZW50XG5cdFx0XHRcdGlmICggc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIiApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub2NvbnRlbnRcIjtcblxuXHRcdFx0XHQvLyBpZiBub3QgbW9kaWZpZWRcblx0XHRcdFx0fSBlbHNlIGlmICggc3RhdHVzID09PSAzMDQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm90bW9kaWZpZWRcIjtcblxuXHRcdFx0XHQvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XG5cdFx0XHRcdFx0c3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdFx0ZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcblx0XHRcdFx0XHRpc1N1Y2Nlc3MgPSAhZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gRXh0cmFjdCBlcnJvciBmcm9tIHN0YXR1c1RleHQgYW5kIG5vcm1hbGl6ZSBmb3Igbm9uLWFib3J0c1xuXHRcdFx0XHRlcnJvciA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdGlmICggc3RhdHVzIHx8ICFzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcImVycm9yXCI7XG5cdFx0XHRcdFx0aWYgKCBzdGF0dXMgPCAwICkge1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IGRhdGEgZm9yIHRoZSBmYWtlIHhociBvYmplY3Rcblx0XHRcdGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcblx0XHRcdGpxWEhSLnN0YXR1c1RleHQgPSAoIG5hdGl2ZVN0YXR1c1RleHQgfHwgc3RhdHVzVGV4dCApICsgXCJcIjtcblxuXHRcdFx0Ly8gU3VjY2Vzcy9FcnJvclxuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsgc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFIgXSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0LCBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRqcVhIUi5zdGF0dXNDb2RlKCBzdGF0dXNDb2RlICk7XG5cdFx0XHRzdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggaXNTdWNjZXNzID8gXCJhamF4U3VjY2Vzc1wiIDogXCJhamF4RXJyb3JcIixcblx0XHRcdFx0XHRbIGpxWEhSLCBzLCBpc1N1Y2Nlc3MgPyBzdWNjZXNzIDogZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb21wbGV0ZVxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZC5maXJlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0IF0gKTtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheENvbXBsZXRlXCIsIFsganFYSFIsIHMgXSApO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuXHRcdFx0XHRpZiAoICEoIC0talF1ZXJ5LmFjdGl2ZSApICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdG9wXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBqcVhIUjtcblx0fSxcblxuXHRnZXRKU09OOiBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCBkYXRhLCBjYWxsYmFjaywgXCJqc29uXCIgKTtcblx0fSxcblxuXHRnZXRTY3JpcHQ6IGZ1bmN0aW9uKCB1cmwsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImdldFwiLCBcInBvc3RcIiBdLCBmdW5jdGlvbiggX2ksIG1ldGhvZCApIHtcblx0alF1ZXJ5WyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB1cmwsIGRhdGEsIGNhbGxiYWNrLCB0eXBlICkge1xuXG5cdFx0Ly8gU2hpZnQgYXJndW1lbnRzIGlmIGRhdGEgYXJndW1lbnQgd2FzIG9taXR0ZWRcblx0XHRpZiAoIGlzRnVuY3Rpb24oIGRhdGEgKSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xuXHRcdFx0Y2FsbGJhY2sgPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBUaGUgdXJsIGNhbiBiZSBhbiBvcHRpb25zIG9iamVjdCAod2hpY2ggdGhlbiBtdXN0IGhhdmUgLnVybClcblx0XHRyZXR1cm4galF1ZXJ5LmFqYXgoIGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0dHlwZTogbWV0aG9kLFxuXHRcdFx0ZGF0YVR5cGU6IHR5cGUsXG5cdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0c3VjY2VzczogY2FsbGJhY2tcblx0XHR9LCBqUXVlcnkuaXNQbGFpbk9iamVjdCggdXJsICkgJiYgdXJsICkgKTtcblx0fTtcbn0gKTtcblxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzICkge1xuXHR2YXIgaTtcblx0Zm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XG5cdFx0aWYgKCBpLnRvTG93ZXJDYXNlKCkgPT09IFwiY29udGVudC10eXBlXCIgKSB7XG5cdFx0XHRzLmNvbnRlbnRUeXBlID0gcy5oZWFkZXJzWyBpIF0gfHwgXCJcIjtcblx0XHR9XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiggdXJsLCBvcHRpb25zLCBkb2MgKSB7XG5cdHJldHVybiBqUXVlcnkuYWpheCgge1xuXHRcdHVybDogdXJsLFxuXG5cdFx0Ly8gTWFrZSB0aGlzIGV4cGxpY2l0LCBzaW5jZSB1c2VyIGNhbiBvdmVycmlkZSB0aGlzIHRocm91Z2ggYWpheFNldHVwICh0cmFjLTExMjY0KVxuXHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0ZGF0YVR5cGU6IFwic2NyaXB0XCIsXG5cdFx0Y2FjaGU6IHRydWUsXG5cdFx0YXN5bmM6IGZhbHNlLFxuXHRcdGdsb2JhbDogZmFsc2UsXG5cblx0XHQvLyBPbmx5IGV2YWx1YXRlIHRoZSByZXNwb25zZSBpZiBpdCBpcyBzdWNjZXNzZnVsIChnaC00MTI2KVxuXHRcdC8vIGRhdGFGaWx0ZXIgaXMgbm90IGludm9rZWQgZm9yIGZhaWx1cmUgcmVzcG9uc2VzLCBzbyB1c2luZyBpdCBpbnN0ZWFkXG5cdFx0Ly8gb2YgdGhlIGRlZmF1bHQgY29udmVydGVyIGlzIGtsdWRneSBidXQgaXQgd29ya3MuXG5cdFx0Y29udmVydGVyczoge1xuXHRcdFx0XCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbigpIHt9XG5cdFx0fSxcblx0XHRkYXRhRmlsdGVyOiBmdW5jdGlvbiggcmVzcG9uc2UgKSB7XG5cdFx0XHRqUXVlcnkuZ2xvYmFsRXZhbCggcmVzcG9uc2UsIG9wdGlvbnMsIGRvYyApO1xuXHRcdH1cblx0fSApO1xufTtcblxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHdyYXBBbGw6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdHZhciB3cmFwO1xuXG5cdFx0aWYgKCB0aGlzWyAwIF0gKSB7XG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwuY2FsbCggdGhpc1sgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoZSBlbGVtZW50cyB0byB3cmFwIHRoZSB0YXJnZXQgYXJvdW5kXG5cdFx0XHR3cmFwID0galF1ZXJ5KCBodG1sLCB0aGlzWyAwIF0ub3duZXJEb2N1bWVudCApLmVxKCAwICkuY2xvbmUoIHRydWUgKTtcblxuXHRcdFx0aWYgKCB0aGlzWyAwIF0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0d3JhcC5pbnNlcnRCZWZvcmUoIHRoaXNbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHR3cmFwLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gdGhpcztcblxuXHRcdFx0XHR3aGlsZSAoIGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQgKSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZWxlbTtcblx0XHRcdH0gKS5hcHBlbmQoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR3cmFwSW5uZXI6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdGlmICggaXNGdW5jdGlvbiggaHRtbCApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLndyYXBJbm5lciggaHRtbC5jYWxsKCB0aGlzLCBpICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0galF1ZXJ5KCB0aGlzICksXG5cdFx0XHRcdGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpO1xuXG5cdFx0XHRpZiAoIGNvbnRlbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0Y29udGVudHMud3JhcEFsbCggaHRtbCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHR3cmFwOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgaHRtbElzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKCBodG1sICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLndyYXBBbGwoIGh0bWxJc0Z1bmN0aW9uID8gaHRtbC5jYWxsKCB0aGlzLCBpICkgOiBodG1sICk7XG5cdFx0fSApO1xuXHR9LFxuXG5cdHVud3JhcDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHRoaXMucGFyZW50KCBzZWxlY3RvciApLm5vdCggXCJib2R5XCIgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnJlcGxhY2VXaXRoKCB0aGlzLmNoaWxkTm9kZXMgKTtcblx0XHR9ICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmhpZGRlbiA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gIWpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSggZWxlbSApO1xufTtcbmpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gISEoIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApO1xufTtcblxuXG5cblxualF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIgPSBmdW5jdGlvbigpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuXHR9IGNhdGNoICggZSApIHt9XG59O1xuXG52YXIgeGhyU3VjY2Vzc1N0YXR1cyA9IHtcblxuXHRcdC8vIEZpbGUgcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgY29kZSAwLCBhc3N1bWUgMjAwXG5cdFx0MDogMjAwLFxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHQvLyB0cmFjLTE0NTA6IHNvbWV0aW1lcyBJRSByZXR1cm5zIDEyMjMgd2hlbiBpdCBzaG91bGQgYmUgMjA0XG5cdFx0MTIyMzogMjA0XG5cdH0sXG5cdHhoclN1cHBvcnRlZCA9IGpRdWVyeS5hamF4U2V0dGluZ3MueGhyKCk7XG5cbnN1cHBvcnQuY29ycyA9ICEheGhyU3VwcG9ydGVkICYmICggXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHJTdXBwb3J0ZWQgKTtcbnN1cHBvcnQuYWpheCA9IHhoclN1cHBvcnRlZCA9ICEheGhyU3VwcG9ydGVkO1xuXG5qUXVlcnkuYWpheFRyYW5zcG9ydCggZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdHZhciBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaztcblxuXHQvLyBDcm9zcyBkb21haW4gb25seSBhbGxvd2VkIGlmIHN1cHBvcnRlZCB0aHJvdWdoIFhNTEh0dHBSZXF1ZXN0XG5cdGlmICggc3VwcG9ydC5jb3JzIHx8IHhoclN1cHBvcnRlZCAmJiAhb3B0aW9ucy5jcm9zc0RvbWFpbiApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIGhlYWRlcnMsIGNvbXBsZXRlICkge1xuXHRcdFx0XHR2YXIgaSxcblx0XHRcdFx0XHR4aHIgPSBvcHRpb25zLnhocigpO1xuXG5cdFx0XHRcdHhoci5vcGVuKFxuXHRcdFx0XHRcdG9wdGlvbnMudHlwZSxcblx0XHRcdFx0XHRvcHRpb25zLnVybCxcblx0XHRcdFx0XHRvcHRpb25zLmFzeW5jLFxuXHRcdFx0XHRcdG9wdGlvbnMudXNlcm5hbWUsXG5cdFx0XHRcdFx0b3B0aW9ucy5wYXNzd29yZFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdC8vIEFwcGx5IGN1c3RvbSBmaWVsZHMgaWYgcHJvdmlkZWRcblx0XHRcdFx0aWYgKCBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRmb3IgKCBpIGluIG9wdGlvbnMueGhyRmllbGRzICkge1xuXHRcdFx0XHRcdFx0eGhyWyBpIF0gPSBvcHRpb25zLnhockZpZWxkc1sgaSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE92ZXJyaWRlIG1pbWUgdHlwZSBpZiBuZWVkZWRcblx0XHRcdFx0aWYgKCBvcHRpb25zLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlICkge1xuXHRcdFx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKCBvcHRpb25zLm1pbWVUeXBlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBYLVJlcXVlc3RlZC1XaXRoIGhlYWRlclxuXHRcdFx0XHQvLyBGb3IgY3Jvc3MtZG9tYWluIHJlcXVlc3RzLCBzZWVpbmcgYXMgY29uZGl0aW9ucyBmb3IgYSBwcmVmbGlnaHQgYXJlXG5cdFx0XHRcdC8vIGFraW4gdG8gYSBqaWdzYXcgcHV6emxlLCB3ZSBzaW1wbHkgbmV2ZXIgc2V0IGl0IHRvIGJlIHN1cmUuXG5cdFx0XHRcdC8vIChpdCBjYW4gYWx3YXlzIGJlIHNldCBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIG9yIGV2ZW4gdXNpbmcgYWpheFNldHVwKVxuXHRcdFx0XHQvLyBGb3Igc2FtZS1kb21haW4gcmVxdWVzdHMsIHdvbid0IGNoYW5nZSBoZWFkZXIgaWYgYWxyZWFkeSBwcm92aWRlZC5cblx0XHRcdFx0aWYgKCAhb3B0aW9ucy5jcm9zc0RvbWFpbiAmJiAhaGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSApIHtcblx0XHRcdFx0XHRoZWFkZXJzWyBcIlgtUmVxdWVzdGVkLVdpdGhcIiBdID0gXCJYTUxIdHRwUmVxdWVzdFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2V0IGhlYWRlcnNcblx0XHRcdFx0Zm9yICggaSBpbiBoZWFkZXJzICkge1xuXHRcdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCBpLCBoZWFkZXJzWyBpIF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhbGxiYWNrXG5cdFx0XHRcdGNhbGxiYWNrID0gZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBlcnJvckNhbGxiYWNrID0geGhyLm9ubG9hZCA9XG5cdFx0XHRcdFx0XHRcdFx0eGhyLm9uZXJyb3IgPSB4aHIub25hYm9ydCA9IHhoci5vbnRpbWVvdXQgPVxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0eXBlID09PSBcImFib3J0XCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0eGhyLmFib3J0KCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IFwiZXJyb3JcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0Ly8gT24gYSBtYW51YWwgbmF0aXZlIGFib3J0LCBJRTkgdGhyb3dzXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXJyb3JzIG9uIGFueSBwcm9wZXJ0eSBhY2Nlc3MgdGhhdCBpcyBub3QgcmVhZHlTdGF0ZVxuXHRcdFx0XHRcdFx0XHRcdGlmICggdHlwZW9mIHhoci5zdGF0dXMgIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggMCwgXCJlcnJvclwiICk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpbGU6IHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIDA7IHNlZSB0cmFjLTg2MDUsIHRyYWMtMTQyMDdcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1cyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHRcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyU3VjY2Vzc1N0YXR1c1sgeGhyLnN0YXR1cyBdIHx8IHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dCxcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHRcdFx0XHRcdC8vIElFOSBoYXMgbm8gWEhSMiBidXQgdGhyb3dzIG9uIGJpbmFyeSAodHJhYy0xMTQyNilcblx0XHRcdFx0XHRcdFx0XHRcdC8vIEZvciBYSFIyIG5vbi10ZXh0LCBsZXQgdGhlIGNhbGxlciBoYW5kbGUgaXQgKGdoLTI0OTgpXG5cdFx0XHRcdFx0XHRcdFx0XHQoIHhoci5yZXNwb25zZVR5cGUgfHwgXCJ0ZXh0XCIgKSAhPT0gXCJ0ZXh0XCIgIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgeGhyLnJlc3BvbnNlVGV4dCAhPT0gXCJzdHJpbmdcIiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgYmluYXJ5OiB4aHIucmVzcG9uc2UgfSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gTGlzdGVuIHRvIGV2ZW50c1xuXHRcdFx0XHR4aHIub25sb2FkID0gY2FsbGJhY2soKTtcblx0XHRcdFx0ZXJyb3JDYWxsYmFjayA9IHhoci5vbmVycm9yID0geGhyLm9udGltZW91dCA9IGNhbGxiYWNrKCBcImVycm9yXCIgKTtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHRcdFx0Ly8gVXNlIG9ucmVhZHlzdGF0ZWNoYW5nZSB0byByZXBsYWNlIG9uYWJvcnRcblx0XHRcdFx0Ly8gdG8gaGFuZGxlIHVuY2F1Z2h0IGFib3J0c1xuXHRcdFx0XHRpZiAoIHhoci5vbmFib3J0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0eGhyLm9uYWJvcnQgPSBlcnJvckNhbGxiYWNrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgcmVhZHlTdGF0ZSBiZWZvcmUgdGltZW91dCBhcyBpdCBjaGFuZ2VzXG5cdFx0XHRcdFx0XHRpZiAoIHhoci5yZWFkeVN0YXRlID09PSA0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEFsbG93IG9uZXJyb3IgdG8gYmUgY2FsbGVkIGZpcnN0LFxuXHRcdFx0XHRcdFx0XHQvLyBidXQgdGhhdCB3aWxsIG5vdCBoYW5kbGUgYSBuYXRpdmUgYWJvcnRcblx0XHRcdFx0XHRcdFx0Ly8gQWxzbywgc2F2ZSBlcnJvckNhbGxiYWNrIHRvIGEgdmFyaWFibGVcblx0XHRcdFx0XHRcdFx0Ly8gYXMgeGhyLm9uZXJyb3IgY2Fubm90IGJlIGFjY2Vzc2VkXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JDYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgdGhlIGFib3J0IGNhbGxiYWNrXG5cdFx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2soIFwiYWJvcnRcIiApO1xuXG5cdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHQvLyBEbyBzZW5kIHRoZSByZXF1ZXN0ICh0aGlzIG1heSByYWlzZSBhbiBleGNlcHRpb24pXG5cdFx0XHRcdFx0eGhyLnNlbmQoIG9wdGlvbnMuaGFzQ29udGVudCAmJiBvcHRpb25zLmRhdGEgfHwgbnVsbCApO1xuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdC8vIHRyYWMtMTQ2ODM6IE9ubHkgcmV0aHJvdyBpZiB0aGlzIGhhc24ndCBiZWVuIG5vdGlmaWVkIGFzIGFuIGVycm9yIHlldFxuXHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFByZXZlbnQgYXV0by1leGVjdXRpb24gb2Ygc2NyaXB0cyB3aGVuIG5vIGV4cGxpY2l0IGRhdGFUeXBlIHdhcyBwcm92aWRlZCAoU2VlIGdoLTI0MzIpXG5qUXVlcnkuYWpheFByZWZpbHRlciggZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHRzLmNvbnRlbnRzLnNjcmlwdCA9IGZhbHNlO1xuXHR9XG59ICk7XG5cbi8vIEluc3RhbGwgc2NyaXB0IGRhdGFUeXBlXG5qUXVlcnkuYWpheFNldHVwKCB7XG5cdGFjY2VwdHM6IHtcblx0XHRzY3JpcHQ6IFwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBcIiArXG5cdFx0XHRcImFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwiXG5cdH0sXG5cdGNvbnRlbnRzOiB7XG5cdFx0c2NyaXB0OiAvXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi9cblx0fSxcblx0Y29udmVydGVyczoge1xuXHRcdFwidGV4dCBzY3JpcHRcIjogZnVuY3Rpb24oIHRleHQgKSB7XG5cdFx0XHRqUXVlcnkuZ2xvYmFsRXZhbCggdGV4dCApO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIEhhbmRsZSBjYWNoZSdzIHNwZWNpYWwgY2FzZSBhbmQgY3Jvc3NEb21haW5cbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblx0aWYgKCBzLmNhY2hlID09PSB1bmRlZmluZWQgKSB7XG5cdFx0cy5jYWNoZSA9IGZhbHNlO1xuXHR9XG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHRzLnR5cGUgPSBcIkdFVFwiO1xuXHR9XG59ICk7XG5cbi8vIEJpbmQgc2NyaXB0IHRhZyBoYWNrIHRyYW5zcG9ydFxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIFwic2NyaXB0XCIsIGZ1bmN0aW9uKCBzICkge1xuXG5cdC8vIFRoaXMgdHJhbnNwb3J0IG9ubHkgZGVhbHMgd2l0aCBjcm9zcyBkb21haW4gb3IgZm9yY2VkLWJ5LWF0dHJzIHJlcXVlc3RzXG5cdGlmICggcy5jcm9zc0RvbWFpbiB8fCBzLnNjcmlwdEF0dHJzICkge1xuXHRcdHZhciBzY3JpcHQsIGNhbGxiYWNrO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZW5kOiBmdW5jdGlvbiggXywgY29tcGxldGUgKSB7XG5cdFx0XHRcdHNjcmlwdCA9IGpRdWVyeSggXCI8c2NyaXB0PlwiIClcblx0XHRcdFx0XHQuYXR0ciggcy5zY3JpcHRBdHRycyB8fCB7fSApXG5cdFx0XHRcdFx0LnByb3AoIHsgY2hhcnNldDogcy5zY3JpcHRDaGFyc2V0LCBzcmM6IHMudXJsIH0gKVxuXHRcdFx0XHRcdC5vbiggXCJsb2FkIGVycm9yXCIsIGNhbGxiYWNrID0gZnVuY3Rpb24oIGV2dCApIHtcblx0XHRcdFx0XHRcdHNjcmlwdC5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmICggZXZ0ICkge1xuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggZXZ0LnR5cGUgPT09IFwiZXJyb3JcIiA/IDQwNCA6IDIwMCwgZXZ0LnR5cGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0Ly8gVXNlIG5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIHRvIGF2b2lkIG91ciBkb21NYW5pcCBBSkFYIHRyaWNrZXJ5XG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdFsgMCBdICk7XG5cdFx0XHR9LFxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBvbGRDYWxsYmFja3MgPSBbXSxcblx0cmpzb25wID0gLyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztcblxuLy8gRGVmYXVsdCBqc29ucCBzZXR0aW5nc1xualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRqc29ucDogXCJjYWxsYmFja1wiLFxuXHRqc29ucENhbGxiYWNrOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY2FsbGJhY2sgPSBvbGRDYWxsYmFja3MucG9wKCkgfHwgKCBqUXVlcnkuZXhwYW5kbyArIFwiX1wiICsgKCBub25jZS5ndWlkKysgKSApO1xuXHRcdHRoaXNbIGNhbGxiYWNrIF0gPSB0cnVlO1xuXHRcdHJldHVybiBjYWxsYmFjaztcblx0fVxufSApO1xuXG4vLyBEZXRlY3QsIG5vcm1hbGl6ZSBvcHRpb25zIGFuZCBpbnN0YWxsIGNhbGxiYWNrcyBmb3IganNvbnAgcmVxdWVzdHNcbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBcImpzb24ganNvbnBcIiwgZnVuY3Rpb24oIHMsIG9yaWdpbmFsU2V0dGluZ3MsIGpxWEhSICkge1xuXG5cdHZhciBjYWxsYmFja05hbWUsIG92ZXJ3cml0dGVuLCByZXNwb25zZUNvbnRhaW5lcixcblx0XHRqc29uUHJvcCA9IHMuanNvbnAgIT09IGZhbHNlICYmICggcmpzb25wLnRlc3QoIHMudXJsICkgP1xuXHRcdFx0XCJ1cmxcIiA6XG5cdFx0XHR0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdCggcy5jb250ZW50VHlwZSB8fCBcIlwiIClcblx0XHRcdFx0XHQuaW5kZXhPZiggXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiApID09PSAwICYmXG5cdFx0XHRcdHJqc29ucC50ZXN0KCBzLmRhdGEgKSAmJiBcImRhdGFcIlxuXHRcdCk7XG5cblx0Ly8gSGFuZGxlIGlmZiB0aGUgZXhwZWN0ZWQgZGF0YSB0eXBlIGlzIFwianNvbnBcIiBvciB3ZSBoYXZlIGEgcGFyYW1ldGVyIHRvIHNldFxuXHRpZiAoIGpzb25Qcm9wIHx8IHMuZGF0YVR5cGVzWyAwIF0gPT09IFwianNvbnBcIiApIHtcblxuXHRcdC8vIEdldCBjYWxsYmFjayBuYW1lLCByZW1lbWJlcmluZyBwcmVleGlzdGluZyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggaXRcblx0XHRjYWxsYmFja05hbWUgPSBzLmpzb25wQ2FsbGJhY2sgPSBpc0Z1bmN0aW9uKCBzLmpzb25wQ2FsbGJhY2sgKSA/XG5cdFx0XHRzLmpzb25wQ2FsbGJhY2soKSA6XG5cdFx0XHRzLmpzb25wQ2FsbGJhY2s7XG5cblx0XHQvLyBJbnNlcnQgY2FsbGJhY2sgaW50byB1cmwgb3IgZm9ybSBkYXRhXG5cdFx0aWYgKCBqc29uUHJvcCApIHtcblx0XHRcdHNbIGpzb25Qcm9wIF0gPSBzWyBqc29uUHJvcCBdLnJlcGxhY2UoIHJqc29ucCwgXCIkMVwiICsgY2FsbGJhY2tOYW1lICk7XG5cdFx0fSBlbHNlIGlmICggcy5qc29ucCAhPT0gZmFsc2UgKSB7XG5cdFx0XHRzLnVybCArPSAoIHJxdWVyeS50ZXN0KCBzLnVybCApID8gXCImXCIgOiBcIj9cIiApICsgcy5qc29ucCArIFwiPVwiICsgY2FsbGJhY2tOYW1lO1xuXHRcdH1cblxuXHRcdC8vIFVzZSBkYXRhIGNvbnZlcnRlciB0byByZXRyaWV2ZSBqc29uIGFmdGVyIHNjcmlwdCBleGVjdXRpb25cblx0XHRzLmNvbnZlcnRlcnNbIFwic2NyaXB0IGpzb25cIiBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoICFyZXNwb25zZUNvbnRhaW5lciApIHtcblx0XHRcdFx0alF1ZXJ5LmVycm9yKCBjYWxsYmFja05hbWUgKyBcIiB3YXMgbm90IGNhbGxlZFwiICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2VDb250YWluZXJbIDAgXTtcblx0XHR9O1xuXG5cdFx0Ly8gRm9yY2UganNvbiBkYXRhVHlwZVxuXHRcdHMuZGF0YVR5cGVzWyAwIF0gPSBcImpzb25cIjtcblxuXHRcdC8vIEluc3RhbGwgY2FsbGJhY2tcblx0XHRvdmVyd3JpdHRlbiA9IHdpbmRvd1sgY2FsbGJhY2tOYW1lIF07XG5cdFx0d2luZG93WyBjYWxsYmFja05hbWUgXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVzcG9uc2VDb250YWluZXIgPSBhcmd1bWVudHM7XG5cdFx0fTtcblxuXHRcdC8vIENsZWFuLXVwIGZ1bmN0aW9uIChmaXJlcyBhZnRlciBjb252ZXJ0ZXJzKVxuXHRcdGpxWEhSLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIElmIHByZXZpb3VzIHZhbHVlIGRpZG4ndCBleGlzdCAtIHJlbW92ZSBpdFxuXHRcdFx0aWYgKCBvdmVyd3JpdHRlbiA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRqUXVlcnkoIHdpbmRvdyApLnJlbW92ZVByb3AoIGNhbGxiYWNrTmFtZSApO1xuXG5cdFx0XHQvLyBPdGhlcndpc2UgcmVzdG9yZSBwcmVleGlzdGluZyB2YWx1ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93WyBjYWxsYmFja05hbWUgXSA9IG92ZXJ3cml0dGVuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTYXZlIGJhY2sgYXMgZnJlZVxuXHRcdFx0aWYgKCBzWyBjYWxsYmFja05hbWUgXSApIHtcblxuXHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCByZS11c2luZyB0aGUgb3B0aW9ucyBkb2Vzbid0IHNjcmV3IHRoaW5ncyBhcm91bmRcblx0XHRcdFx0cy5qc29ucENhbGxiYWNrID0gb3JpZ2luYWxTZXR0aW5ncy5qc29ucENhbGxiYWNrO1xuXG5cdFx0XHRcdC8vIFNhdmUgdGhlIGNhbGxiYWNrIG5hbWUgZm9yIGZ1dHVyZSB1c2Vcblx0XHRcdFx0b2xkQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrTmFtZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYWxsIGlmIGl0IHdhcyBhIGZ1bmN0aW9uIGFuZCB3ZSBoYXZlIGEgcmVzcG9uc2Vcblx0XHRcdGlmICggcmVzcG9uc2VDb250YWluZXIgJiYgaXNGdW5jdGlvbiggb3ZlcndyaXR0ZW4gKSApIHtcblx0XHRcdFx0b3ZlcndyaXR0ZW4oIHJlc3BvbnNlQ29udGFpbmVyWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzcG9uc2VDb250YWluZXIgPSBvdmVyd3JpdHRlbiA9IHVuZGVmaW5lZDtcblx0XHR9ICk7XG5cblx0XHQvLyBEZWxlZ2F0ZSB0byBzY3JpcHRcblx0XHRyZXR1cm4gXCJzY3JpcHRcIjtcblx0fVxufSApO1xuXG5cblxuXG4vLyBTdXBwb3J0OiBTYWZhcmkgOCBvbmx5XG4vLyBJbiBTYWZhcmkgOCBkb2N1bWVudHMgY3JlYXRlZCB2aWEgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50XG4vLyBjb2xsYXBzZSBzaWJsaW5nIGZvcm1zOiB0aGUgc2Vjb25kIG9uZSBiZWNvbWVzIGEgY2hpbGQgb2YgdGhlIGZpcnN0IG9uZS5cbi8vIEJlY2F1c2Ugb2YgdGhhdCwgdGhpcyBzZWN1cml0eSBtZWFzdXJlIGhhcyB0byBiZSBkaXNhYmxlZCBpbiBTYWZhcmkgOC5cbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzczMzdcbnN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50ID0gKCBmdW5jdGlvbigpIHtcblx0dmFyIGJvZHkgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIFwiXCIgKS5ib2R5O1xuXHRib2R5LmlubmVySFRNTCA9IFwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIjtcblx0cmV0dXJuIGJvZHkuY2hpbGROb2Rlcy5sZW5ndGggPT09IDI7XG59ICkoKTtcblxuXG4vLyBBcmd1bWVudCBcImRhdGFcIiBzaG91bGQgYmUgc3RyaW5nIG9mIGh0bWxcbi8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCxcbi8vIGRlZmF1bHRzIHRvIGRvY3VtZW50XG4vLyBrZWVwU2NyaXB0cyAob3B0aW9uYWwpOiBJZiB0cnVlLCB3aWxsIGluY2x1ZGUgc2NyaXB0cyBwYXNzZWQgaW4gdGhlIGh0bWwgc3RyaW5nXG5qUXVlcnkucGFyc2VIVE1MID0gZnVuY3Rpb24oIGRhdGEsIGNvbnRleHQsIGtlZXBTY3JpcHRzICkge1xuXHRpZiAoIHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRrZWVwU2NyaXB0cyA9IGNvbnRleHQ7XG5cdFx0Y29udGV4dCA9IGZhbHNlO1xuXHR9XG5cblx0dmFyIGJhc2UsIHBhcnNlZCwgc2NyaXB0cztcblxuXHRpZiAoICFjb250ZXh0ICkge1xuXG5cdFx0Ly8gU3RvcCBzY3JpcHRzIG9yIGlubGluZSBldmVudCBoYW5kbGVycyBmcm9tIGJlaW5nIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG5cdFx0Ly8gYnkgdXNpbmcgZG9jdW1lbnQuaW1wbGVtZW50YXRpb25cblx0XHRpZiAoIHN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50ICkge1xuXHRcdFx0Y29udGV4dCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCggXCJcIiApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGJhc2UgaHJlZiBmb3IgdGhlIGNyZWF0ZWQgZG9jdW1lbnRcblx0XHRcdC8vIHNvIGFueSBwYXJzZWQgZWxlbWVudHMgd2l0aCBVUkxzXG5cdFx0XHQvLyBhcmUgYmFzZWQgb24gdGhlIGRvY3VtZW50J3MgVVJMIChnaC0yOTY1KVxuXHRcdFx0YmFzZSA9IGNvbnRleHQuY3JlYXRlRWxlbWVudCggXCJiYXNlXCIgKTtcblx0XHRcdGJhc2UuaHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHRjb250ZXh0LmhlYWQuYXBwZW5kQ2hpbGQoIGJhc2UgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGV4dCA9IGRvY3VtZW50O1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlZCA9IHJzaW5nbGVUYWcuZXhlYyggZGF0YSApO1xuXHRzY3JpcHRzID0gIWtlZXBTY3JpcHRzICYmIFtdO1xuXG5cdC8vIFNpbmdsZSB0YWdcblx0aWYgKCBwYXJzZWQgKSB7XG5cdFx0cmV0dXJuIFsgY29udGV4dC5jcmVhdGVFbGVtZW50KCBwYXJzZWRbIDEgXSApIF07XG5cdH1cblxuXHRwYXJzZWQgPSBidWlsZEZyYWdtZW50KCBbIGRhdGEgXSwgY29udGV4dCwgc2NyaXB0cyApO1xuXG5cdGlmICggc2NyaXB0cyAmJiBzY3JpcHRzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkoIHNjcmlwdHMgKS5yZW1vdmUoKTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkubWVyZ2UoIFtdLCBwYXJzZWQuY2hpbGROb2RlcyApO1xufTtcblxuXG4vKipcbiAqIExvYWQgYSB1cmwgaW50byBhIHBhZ2VcbiAqL1xualF1ZXJ5LmZuLmxvYWQgPSBmdW5jdGlvbiggdXJsLCBwYXJhbXMsIGNhbGxiYWNrICkge1xuXHR2YXIgc2VsZWN0b3IsIHR5cGUsIHJlc3BvbnNlLFxuXHRcdHNlbGYgPSB0aGlzLFxuXHRcdG9mZiA9IHVybC5pbmRleE9mKCBcIiBcIiApO1xuXG5cdGlmICggb2ZmID4gLTEgKSB7XG5cdFx0c2VsZWN0b3IgPSBzdHJpcEFuZENvbGxhcHNlKCB1cmwuc2xpY2UoIG9mZiApICk7XG5cdFx0dXJsID0gdXJsLnNsaWNlKCAwLCBvZmYgKTtcblx0fVxuXG5cdC8vIElmIGl0J3MgYSBmdW5jdGlvblxuXHRpZiAoIGlzRnVuY3Rpb24oIHBhcmFtcyApICkge1xuXG5cdFx0Ly8gV2UgYXNzdW1lIHRoYXQgaXQncyB0aGUgY2FsbGJhY2tcblx0XHRjYWxsYmFjayA9IHBhcmFtcztcblx0XHRwYXJhbXMgPSB1bmRlZmluZWQ7XG5cblx0Ly8gT3RoZXJ3aXNlLCBidWlsZCBhIHBhcmFtIHN0cmluZ1xuXHR9IGVsc2UgaWYgKCBwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHR0eXBlID0gXCJQT1NUXCI7XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIGVsZW1lbnRzIHRvIG1vZGlmeSwgbWFrZSB0aGUgcmVxdWVzdFxuXHRpZiAoIHNlbGYubGVuZ3RoID4gMCApIHtcblx0XHRqUXVlcnkuYWpheCgge1xuXHRcdFx0dXJsOiB1cmwsXG5cblx0XHRcdC8vIElmIFwidHlwZVwiIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCwgdGhlbiBcIkdFVFwiIG1ldGhvZCB3aWxsIGJlIHVzZWQuXG5cdFx0XHQvLyBNYWtlIHZhbHVlIG9mIHRoaXMgZmllbGQgZXhwbGljaXQgc2luY2Vcblx0XHRcdC8vIHVzZXIgY2FuIG92ZXJyaWRlIGl0IHRocm91Z2ggYWpheFNldHVwIG1ldGhvZFxuXHRcdFx0dHlwZTogdHlwZSB8fCBcIkdFVFwiLFxuXHRcdFx0ZGF0YVR5cGU6IFwiaHRtbFwiLFxuXHRcdFx0ZGF0YTogcGFyYW1zXG5cdFx0fSApLmRvbmUoIGZ1bmN0aW9uKCByZXNwb25zZVRleHQgKSB7XG5cblx0XHRcdC8vIFNhdmUgcmVzcG9uc2UgZm9yIHVzZSBpbiBjb21wbGV0ZSBjYWxsYmFja1xuXHRcdFx0cmVzcG9uc2UgPSBhcmd1bWVudHM7XG5cblx0XHRcdHNlbGYuaHRtbCggc2VsZWN0b3IgP1xuXG5cdFx0XHRcdC8vIElmIGEgc2VsZWN0b3Igd2FzIHNwZWNpZmllZCwgbG9jYXRlIHRoZSByaWdodCBlbGVtZW50cyBpbiBhIGR1bW15IGRpdlxuXHRcdFx0XHQvLyBFeGNsdWRlIHNjcmlwdHMgdG8gYXZvaWQgSUUgJ1Blcm1pc3Npb24gRGVuaWVkJyBlcnJvcnNcblx0XHRcdFx0alF1ZXJ5KCBcIjxkaXY+XCIgKS5hcHBlbmQoIGpRdWVyeS5wYXJzZUhUTUwoIHJlc3BvbnNlVGV4dCApICkuZmluZCggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHVzZSB0aGUgZnVsbCByZXN1bHRcblx0XHRcdFx0cmVzcG9uc2VUZXh0ICk7XG5cblx0XHQvLyBJZiB0aGUgcmVxdWVzdCBzdWNjZWVkcywgdGhpcyBmdW5jdGlvbiBnZXRzIFwiZGF0YVwiLCBcInN0YXR1c1wiLCBcImpxWEhSXCJcblx0XHQvLyBidXQgdGhleSBhcmUgaWdub3JlZCBiZWNhdXNlIHJlc3BvbnNlIHdhcyBzZXQgYWJvdmUuXG5cdFx0Ly8gSWYgaXQgZmFpbHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImpxWEhSXCIsIFwic3RhdHVzXCIsIFwiZXJyb3JcIlxuXHRcdH0gKS5hbHdheXMoIGNhbGxiYWNrICYmIGZ1bmN0aW9uKCBqcVhIUiwgc3RhdHVzICkge1xuXHRcdFx0c2VsZi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoIHRoaXMsIHJlc3BvbnNlIHx8IFsganFYSFIucmVzcG9uc2VUZXh0LCBzdGF0dXMsIGpxWEhSIF0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cblxuXG5cbmpRdWVyeS5leHByLnBzZXVkb3MuYW5pbWF0ZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuIGpRdWVyeS5ncmVwKCBqUXVlcnkudGltZXJzLCBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIGVsZW0gPT09IGZuLmVsZW07XG5cdH0gKS5sZW5ndGg7XG59O1xuXG5cblxuXG5qUXVlcnkub2Zmc2V0ID0ge1xuXHRzZXRPZmZzZXQ6IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBpICkge1xuXHRcdHZhciBjdXJQb3NpdGlvbiwgY3VyTGVmdCwgY3VyQ1NTVG9wLCBjdXJUb3AsIGN1ck9mZnNldCwgY3VyQ1NTTGVmdCwgY2FsY3VsYXRlUG9zaXRpb24sXG5cdFx0XHRwb3NpdGlvbiA9IGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApLFxuXHRcdFx0Y3VyRWxlbSA9IGpRdWVyeSggZWxlbSApLFxuXHRcdFx0cHJvcHMgPSB7fTtcblxuXHRcdC8vIFNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cblx0XHRpZiAoIHBvc2l0aW9uID09PSBcInN0YXRpY1wiICkge1xuXHRcdFx0ZWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9XG5cblx0XHRjdXJPZmZzZXQgPSBjdXJFbGVtLm9mZnNldCgpO1xuXHRcdGN1ckNTU1RvcCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwidG9wXCIgKTtcblx0XHRjdXJDU1NMZWZ0ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJsZWZ0XCIgKTtcblx0XHRjYWxjdWxhdGVQb3NpdGlvbiA9ICggcG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiICkgJiZcblx0XHRcdCggY3VyQ1NTVG9wICsgY3VyQ1NTTGVmdCApLmluZGV4T2YoIFwiYXV0b1wiICkgPiAtMTtcblxuXHRcdC8vIE5lZWQgdG8gYmUgYWJsZSB0byBjYWxjdWxhdGUgcG9zaXRpb24gaWYgZWl0aGVyXG5cdFx0Ly8gdG9wIG9yIGxlZnQgaXMgYXV0byBhbmQgcG9zaXRpb24gaXMgZWl0aGVyIGFic29sdXRlIG9yIGZpeGVkXG5cdFx0aWYgKCBjYWxjdWxhdGVQb3NpdGlvbiApIHtcblx0XHRcdGN1clBvc2l0aW9uID0gY3VyRWxlbS5wb3NpdGlvbigpO1xuXHRcdFx0Y3VyVG9wID0gY3VyUG9zaXRpb24udG9wO1xuXHRcdFx0Y3VyTGVmdCA9IGN1clBvc2l0aW9uLmxlZnQ7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VyVG9wID0gcGFyc2VGbG9hdCggY3VyQ1NTVG9wICkgfHwgMDtcblx0XHRcdGN1ckxlZnQgPSBwYXJzZUZsb2F0KCBjdXJDU1NMZWZ0ICkgfHwgMDtcblx0XHR9XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIG9wdGlvbnMgKSApIHtcblxuXHRcdFx0Ly8gVXNlIGpRdWVyeS5leHRlbmQgaGVyZSB0byBhbGxvdyBtb2RpZmljYXRpb24gb2YgY29vcmRpbmF0ZXMgYXJndW1lbnQgKGdoLTE4NDgpXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucy5jYWxsKCBlbGVtLCBpLCBqUXVlcnkuZXh0ZW5kKCB7fSwgY3VyT2Zmc2V0ICkgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdGlvbnMudG9wICE9IG51bGwgKSB7XG5cdFx0XHRwcm9wcy50b3AgPSAoIG9wdGlvbnMudG9wIC0gY3VyT2Zmc2V0LnRvcCApICsgY3VyVG9wO1xuXHRcdH1cblx0XHRpZiAoIG9wdGlvbnMubGVmdCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMubGVmdCA9ICggb3B0aW9ucy5sZWZ0IC0gY3VyT2Zmc2V0LmxlZnQgKSArIGN1ckxlZnQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBcInVzaW5nXCIgaW4gb3B0aW9ucyApIHtcblx0XHRcdG9wdGlvbnMudXNpbmcuY2FsbCggZWxlbSwgcHJvcHMgKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJFbGVtLmNzcyggcHJvcHMgKTtcblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHQvLyBvZmZzZXQoKSByZWxhdGVzIGFuIGVsZW1lbnQncyBib3JkZXIgYm94IHRvIHRoZSBkb2N1bWVudCBvcmlnaW5cblx0b2Zmc2V0OiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHRcdC8vIFByZXNlcnZlIGNoYWluaW5nIGZvciBzZXR0ZXJcblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucyA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0dGhpcyA6XG5cdFx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5Lm9mZnNldC5zZXRPZmZzZXQoIHRoaXMsIG9wdGlvbnMsIGkgKTtcblx0XHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHZhciByZWN0LCB3aW4sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhZWxlbSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gemVyb3MgZm9yIGRpc2Nvbm5lY3RlZCBhbmQgaGlkZGVuIChkaXNwbGF5OiBub25lKSBlbGVtZW50cyAoZ2gtMjMxMClcblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0XHQvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhXG5cdFx0Ly8gZGlzY29ubmVjdGVkIG5vZGUgaW4gSUUgdGhyb3dzIGFuIGVycm9yXG5cdFx0aWYgKCAhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xuXHRcdH1cblxuXHRcdC8vIEdldCBkb2N1bWVudC1yZWxhdGl2ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmlld3BvcnQgc2Nyb2xsIHRvIHZpZXdwb3J0LXJlbGF0aXZlIGdCQ1Jcblx0XHRyZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR3aW4gPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXG5cdFx0XHRsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXRcblx0XHR9O1xuXHR9LFxuXG5cdC8vIHBvc2l0aW9uKCkgcmVsYXRlcyBhbiBlbGVtZW50J3MgbWFyZ2luIGJveCB0byBpdHMgb2Zmc2V0IHBhcmVudCdzIHBhZGRpbmcgYm94XG5cdC8vIFRoaXMgY29ycmVzcG9uZHMgdG8gdGhlIGJlaGF2aW9yIG9mIENTUyBhYnNvbHV0ZSBwb3NpdGlvbmluZ1xuXHRwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhdGhpc1sgMCBdICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBvZmZzZXRQYXJlbnQsIG9mZnNldCwgZG9jLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdHBhcmVudE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cblx0XHQvLyBwb3NpdGlvbjpmaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gdGhlIHZpZXdwb3J0LCB3aGljaCBpdHNlbGYgYWx3YXlzIGhhcyB6ZXJvIG9mZnNldFxuXHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICkgPT09IFwiZml4ZWRcIiApIHtcblxuXHRcdFx0Ly8gQXNzdW1lIHBvc2l0aW9uOmZpeGVkIGltcGxpZXMgYXZhaWxhYmlsaXR5IG9mIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxuXHRcdFx0b2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRvZmZzZXQgPSB0aGlzLm9mZnNldCgpO1xuXG5cdFx0XHQvLyBBY2NvdW50IGZvciB0aGUgKnJlYWwqIG9mZnNldCBwYXJlbnQsIHdoaWNoIGNhbiBiZSB0aGUgZG9jdW1lbnQgb3IgaXRzIHJvb3QgZWxlbWVudFxuXHRcdFx0Ly8gd2hlbiBhIHN0YXRpY2FsbHkgcG9zaXRpb25lZCBlbGVtZW50IGlzIGlkZW50aWZpZWRcblx0XHRcdGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcblx0XHRcdG9mZnNldFBhcmVudCA9IGVsZW0ub2Zmc2V0UGFyZW50IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0XHR3aGlsZSAoIG9mZnNldFBhcmVudCAmJlxuXHRcdFx0XHQoIG9mZnNldFBhcmVudCA9PT0gZG9jLmJvZHkgfHwgb2Zmc2V0UGFyZW50ID09PSBkb2MuZG9jdW1lbnRFbGVtZW50ICkgJiZcblx0XHRcdFx0alF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIgKSA9PT0gXCJzdGF0aWNcIiApIHtcblxuXHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHRcdGlmICggb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gZWxlbSAmJiBvZmZzZXRQYXJlbnQubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gSW5jb3Jwb3JhdGUgYm9yZGVycyBpbnRvIGl0cyBvZmZzZXQsIHNpbmNlIHRoZXkgYXJlIG91dHNpZGUgaXRzIGNvbnRlbnQgb3JpZ2luXG5cdFx0XHRcdHBhcmVudE9mZnNldCA9IGpRdWVyeSggb2Zmc2V0UGFyZW50ICkub2Zmc2V0KCk7XG5cdFx0XHRcdHBhcmVudE9mZnNldC50b3AgKz0galF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcImJvcmRlclRvcFdpZHRoXCIsIHRydWUgKTtcblx0XHRcdFx0cGFyZW50T2Zmc2V0LmxlZnQgKz0galF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcImJvcmRlckxlZnRXaWR0aFwiLCB0cnVlICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IG9mZnNldC50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0galF1ZXJ5LmNzcyggZWxlbSwgXCJtYXJnaW5Ub3BcIiwgdHJ1ZSApLFxuXHRcdFx0bGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luTGVmdFwiLCB0cnVlIClcblx0XHR9O1xuXHR9LFxuXG5cdC8vIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGRvY3VtZW50RWxlbWVudCBpbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuXHQvLyAxKSBGb3IgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWUgd2l0aG91dCBvZmZzZXRQYXJlbnQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuXG5cdC8vICAgIGRvY3VtZW50RWxlbWVudCBvZiB0aGUgcGFyZW50IHdpbmRvd1xuXHQvLyAyKSBGb3IgdGhlIGhpZGRlbiBvciBkZXRhY2hlZCBlbGVtZW50XG5cdC8vIDMpIEZvciBib2R5IG9yIGh0bWwgZWxlbWVudCwgaS5lLiBpbiBjYXNlIG9mIHRoZSBodG1sIG5vZGUgLSBpdCB3aWxsIHJldHVybiBpdHNlbGZcblx0Ly9cblx0Ly8gYnV0IHRob3NlIGV4Y2VwdGlvbnMgd2VyZSBuZXZlciBwcmVzZW50ZWQgYXMgYSByZWFsIGxpZmUgdXNlLWNhc2VzXG5cdC8vIGFuZCBtaWdodCBiZSBjb25zaWRlcmVkIGFzIG1vcmUgcHJlZmVyYWJsZSByZXN1bHRzLlxuXHQvL1xuXHQvLyBUaGlzIGxvZ2ljLCBob3dldmVyLCBpcyBub3QgZ3VhcmFudGVlZCBhbmQgY2FuIGNoYW5nZSBhdCBhbnkgcG9pbnQgaW4gdGhlIGZ1dHVyZVxuXHRvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb2Zmc2V0UGFyZW50ID0gdGhpcy5vZmZzZXRQYXJlbnQ7XG5cblx0XHRcdHdoaWxlICggb2Zmc2V0UGFyZW50ICYmIGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSB7XG5cdFx0XHRcdG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnRFbGVtZW50O1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG4vLyBDcmVhdGUgc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIiwgc2Nyb2xsVG9wOiBcInBhZ2VZT2Zmc2V0XCIgfSwgZnVuY3Rpb24oIG1ldGhvZCwgcHJvcCApIHtcblx0dmFyIHRvcCA9IFwicGFnZVlPZmZzZXRcIiA9PT0gcHJvcDtcblxuXHRqUXVlcnkuZm5bIG1ldGhvZCBdID0gZnVuY3Rpb24oIHZhbCApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbWV0aG9kLCB2YWwgKSB7XG5cblx0XHRcdC8vIENvYWxlc2NlIGRvY3VtZW50cyBhbmQgd2luZG93c1xuXHRcdFx0dmFyIHdpbjtcblx0XHRcdGlmICggaXNXaW5kb3coIGVsZW0gKSApIHtcblx0XHRcdFx0d2luID0gZWxlbTtcblx0XHRcdH0gZWxzZSBpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHdpbiA9IGVsZW0uZGVmYXVsdFZpZXc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdmFsID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiB3aW4gPyB3aW5bIHByb3AgXSA6IGVsZW1bIG1ldGhvZCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHdpbiApIHtcblx0XHRcdFx0d2luLnNjcm9sbFRvKFxuXHRcdFx0XHRcdCF0b3AgPyB2YWwgOiB3aW4ucGFnZVhPZmZzZXQsXG5cdFx0XHRcdFx0dG9wID8gdmFsIDogd2luLnBhZ2VZT2Zmc2V0XG5cdFx0XHRcdCk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1bIG1ldGhvZCBdID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0sIG1ldGhvZCwgdmFsLCBhcmd1bWVudHMubGVuZ3RoICk7XG5cdH07XG59ICk7XG5cbi8vIFN1cHBvcnQ6IFNhZmFyaSA8PTcgLSA5LjEsIENocm9tZSA8PTM3IC0gNDlcbi8vIEFkZCB0aGUgdG9wL2xlZnQgY3NzSG9va3MgdXNpbmcgalF1ZXJ5LmZuLnBvc2l0aW9uXG4vLyBXZWJraXQgYnVnOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkwODRcbi8vIEJsaW5rIGJ1ZzogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTg5MzQ3XG4vLyBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgcGVyY2VudCB3aGVuIHNwZWNpZmllZCBmb3IgdG9wL2xlZnQvYm90dG9tL3JpZ2h0O1xuLy8gcmF0aGVyIHRoYW4gbWFrZSB0aGUgY3NzIG1vZHVsZSBkZXBlbmQgb24gdGhlIG9mZnNldCBtb2R1bGUsIGp1c3QgY2hlY2sgZm9yIGl0IGhlcmVcbmpRdWVyeS5lYWNoKCBbIFwidG9wXCIsIFwibGVmdFwiIF0sIGZ1bmN0aW9uKCBfaSwgcHJvcCApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcm9wIF0gPSBhZGRHZXRIb29rSWYoIHN1cHBvcnQucGl4ZWxQb3NpdGlvbixcblx0XHRmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdFx0XHRjb21wdXRlZCA9IGN1ckNTUyggZWxlbSwgcHJvcCApO1xuXG5cdFx0XHRcdC8vIElmIGN1ckNTUyByZXR1cm5zIHBlcmNlbnRhZ2UsIGZhbGxiYWNrIHRvIG9mZnNldFxuXHRcdFx0XHRyZXR1cm4gcm51bW5vbnB4LnRlc3QoIGNvbXB1dGVkICkgP1xuXHRcdFx0XHRcdGpRdWVyeSggZWxlbSApLnBvc2l0aW9uKClbIHByb3AgXSArIFwicHhcIiA6XG5cdFx0XHRcdFx0Y29tcHV0ZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHQpO1xufSApO1xuXG5cbi8vIENyZWF0ZSBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCwgaGVpZ2h0LCB3aWR0aCwgb3V0ZXJIZWlnaHQgYW5kIG91dGVyV2lkdGggbWV0aG9kc1xualF1ZXJ5LmVhY2goIHsgSGVpZ2h0OiBcImhlaWdodFwiLCBXaWR0aDogXCJ3aWR0aFwiIH0sIGZ1bmN0aW9uKCBuYW1lLCB0eXBlICkge1xuXHRqUXVlcnkuZWFjaCgge1xuXHRcdHBhZGRpbmc6IFwiaW5uZXJcIiArIG5hbWUsXG5cdFx0Y29udGVudDogdHlwZSxcblx0XHRcIlwiOiBcIm91dGVyXCIgKyBuYW1lXG5cdH0sIGZ1bmN0aW9uKCBkZWZhdWx0RXh0cmEsIGZ1bmNOYW1lICkge1xuXG5cdFx0Ly8gTWFyZ2luIGlzIG9ubHkgZm9yIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoXG5cdFx0alF1ZXJ5LmZuWyBmdW5jTmFtZSBdID0gZnVuY3Rpb24oIG1hcmdpbiwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgY2hhaW5hYmxlID0gYXJndW1lbnRzLmxlbmd0aCAmJiAoIGRlZmF1bHRFeHRyYSB8fCB0eXBlb2YgbWFyZ2luICE9PSBcImJvb2xlYW5cIiApLFxuXHRcdFx0XHRleHRyYSA9IGRlZmF1bHRFeHRyYSB8fCAoIG1hcmdpbiA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gdHJ1ZSA/IFwibWFyZ2luXCIgOiBcImJvcmRlclwiICk7XG5cblx0XHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIGRvYztcblxuXHRcdFx0XHRpZiAoIGlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdFx0XHQvLyAkKCB3aW5kb3cgKS5vdXRlcldpZHRoL0hlaWdodCByZXR1cm4gdy9oIGluY2x1ZGluZyBzY3JvbGxiYXJzIChnaC0xNzI5KVxuXHRcdFx0XHRcdHJldHVybiBmdW5jTmFtZS5pbmRleE9mKCBcIm91dGVyXCIgKSA9PT0gMCA/XG5cdFx0XHRcdFx0XHRlbGVtWyBcImlubmVyXCIgKyBuYW1lIF0gOlxuXHRcdFx0XHRcdFx0ZWxlbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbIFwiY2xpZW50XCIgKyBuYW1lIF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBHZXQgZG9jdW1lbnQgd2lkdGggb3IgaGVpZ2h0XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRkb2MgPSBlbGVtLmRvY3VtZW50RWxlbWVudDtcblxuXHRcdFx0XHRcdC8vIEVpdGhlciBzY3JvbGxbV2lkdGgvSGVpZ2h0XSBvciBvZmZzZXRbV2lkdGgvSGVpZ2h0XSBvciBjbGllbnRbV2lkdGgvSGVpZ2h0XSxcblx0XHRcdFx0XHQvLyB3aGljaGV2ZXIgaXMgZ3JlYXRlc3Rcblx0XHRcdFx0XHRyZXR1cm4gTWF0aC5tYXgoXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwic2Nyb2xsXCIgKyBuYW1lIF0sIGRvY1sgXCJzY3JvbGxcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGVsZW0uYm9keVsgXCJvZmZzZXRcIiArIG5hbWUgXSwgZG9jWyBcIm9mZnNldFwiICsgbmFtZSBdLFxuXHRcdFx0XHRcdFx0ZG9jWyBcImNsaWVudFwiICsgbmFtZSBdXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblxuXHRcdFx0XHRcdC8vIEdldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnQsIHJlcXVlc3RpbmcgYnV0IG5vdCBmb3JjaW5nIHBhcnNlRmxvYXRcblx0XHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCB0eXBlLCBleHRyYSApIDpcblxuXHRcdFx0XHRcdC8vIFNldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnRcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHR5cGUsIHZhbHVlLCBleHRyYSApO1xuXHRcdFx0fSwgdHlwZSwgY2hhaW5hYmxlID8gbWFyZ2luIDogdW5kZWZpbmVkLCBjaGFpbmFibGUgKTtcblx0XHR9O1xuXHR9ICk7XG59ICk7XG5cblxualF1ZXJ5LmVhY2goIFtcblx0XCJhamF4U3RhcnRcIixcblx0XCJhamF4U3RvcFwiLFxuXHRcImFqYXhDb21wbGV0ZVwiLFxuXHRcImFqYXhFcnJvclwiLFxuXHRcImFqYXhTdWNjZXNzXCIsXG5cdFwiYWpheFNlbmRcIlxuXSwgZnVuY3Rpb24oIF9pLCB0eXBlICkge1xuXHRqUXVlcnkuZm5bIHR5cGUgXSA9IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZSwgZm4gKTtcblx0fTtcbn0gKTtcblxuXG5cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXG5cdGJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGVzLCBudWxsLCBkYXRhLCBmbiApO1xuXHR9LFxuXHR1bmJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub2ZmKCB0eXBlcywgbnVsbCwgZm4gKTtcblx0fSxcblxuXHRkZWxlZ2F0ZTogZnVuY3Rpb24oIHNlbGVjdG9yLCB0eXBlcywgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5kZWxlZ2F0ZTogZnVuY3Rpb24oIHNlbGVjdG9yLCB0eXBlcywgZm4gKSB7XG5cblx0XHQvLyAoIG5hbWVzcGFjZSApIG9yICggc2VsZWN0b3IsIHR5cGVzIFssIGZuXSApXG5cdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgP1xuXHRcdFx0dGhpcy5vZmYoIHNlbGVjdG9yLCBcIioqXCIgKSA6XG5cdFx0XHR0aGlzLm9mZiggdHlwZXMsIHNlbGVjdG9yIHx8IFwiKipcIiwgZm4gKTtcblx0fSxcblxuXHRob3ZlcjogZnVuY3Rpb24oIGZuT3ZlciwgZm5PdXQgKSB7XG5cdFx0cmV0dXJuIHRoaXMubW91c2VlbnRlciggZm5PdmVyICkubW91c2VsZWF2ZSggZm5PdXQgfHwgZm5PdmVyICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goXG5cdCggXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBcIiArXG5cdFwibW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgXCIgK1xuXHRcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIiApLnNwbGl0KCBcIiBcIiApLFxuXHRmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cblx0XHQvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuXHRcdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIGRhdGEsIGZuICkge1xuXHRcdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAwID9cblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgbnVsbCwgZGF0YSwgZm4gKSA6XG5cdFx0XHRcdHRoaXMudHJpZ2dlciggbmFtZSApO1xuXHRcdH07XG5cdH1cbik7XG5cblxuXG5cbi8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuLy8gTWFrZSBzdXJlIHdlIHRyaW0gQk9NIGFuZCBOQlNQXG4vLyBSZXF1aXJlIHRoYXQgdGhlIFwid2hpdGVzcGFjZSBydW5cIiBzdGFydHMgZnJvbSBhIG5vbi13aGl0ZXNwYWNlXG4vLyB0byBhdm9pZCBPKE5eMikgYmVoYXZpb3Igd2hlbiB0aGUgZW5naW5lIHdvdWxkIHRyeSBtYXRjaGluZyBcIlxccyskXCIgYXQgZWFjaCBzcGFjZSBwb3NpdGlvbi5cbnZhciBydHJpbSA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfChbXlxcc1xcdUZFRkZcXHhBMF0pW1xcc1xcdUZFRkZcXHhBMF0rJC9nO1xuXG4vLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcbi8vIGFyZ3VtZW50cy5cbi8vIGpRdWVyeS5wcm94eSBpcyBkZXByZWNhdGVkIHRvIHByb21vdGUgc3RhbmRhcmRzIChzcGVjaWZpY2FsbHkgRnVuY3Rpb24jYmluZClcbi8vIEhvd2V2ZXIsIGl0IGlzIG5vdCBzbGF0ZWQgZm9yIHJlbW92YWwgYW55IHRpbWUgc29vblxualF1ZXJ5LnByb3h5ID0gZnVuY3Rpb24oIGZuLCBjb250ZXh0ICkge1xuXHR2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdHRtcCA9IGZuWyBjb250ZXh0IF07XG5cdFx0Y29udGV4dCA9IGZuO1xuXHRcdGZuID0gdG1wO1xuXHR9XG5cblx0Ly8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcblx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0aWYgKCAhaXNGdW5jdGlvbiggZm4gKSApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0Ly8gU2ltdWxhdGVkIGJpbmRcblx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMiApO1xuXHRwcm94eSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xuXHR9O1xuXG5cdC8vIFNldCB0aGUgZ3VpZCBvZiB1bmlxdWUgaGFuZGxlciB0byB0aGUgc2FtZSBvZiBvcmlnaW5hbCBoYW5kbGVyLCBzbyBpdCBjYW4gYmUgcmVtb3ZlZFxuXHRwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcblxuXHRyZXR1cm4gcHJveHk7XG59O1xuXG5qUXVlcnkuaG9sZFJlYWR5ID0gZnVuY3Rpb24oIGhvbGQgKSB7XG5cdGlmICggaG9sZCApIHtcblx0XHRqUXVlcnkucmVhZHlXYWl0Kys7XG5cdH0gZWxzZSB7XG5cdFx0alF1ZXJ5LnJlYWR5KCB0cnVlICk7XG5cdH1cbn07XG5qUXVlcnkuaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5qUXVlcnkucGFyc2VKU09OID0gSlNPTi5wYXJzZTtcbmpRdWVyeS5ub2RlTmFtZSA9IG5vZGVOYW1lO1xualF1ZXJ5LmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xualF1ZXJ5LmlzV2luZG93ID0gaXNXaW5kb3c7XG5qUXVlcnkuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xualF1ZXJ5LnR5cGUgPSB0b1R5cGU7XG5cbmpRdWVyeS5ub3cgPSBEYXRlLm5vdztcblxualF1ZXJ5LmlzTnVtZXJpYyA9IGZ1bmN0aW9uKCBvYmogKSB7XG5cblx0Ly8gQXMgb2YgalF1ZXJ5IDMuMCwgaXNOdW1lcmljIGlzIGxpbWl0ZWQgdG9cblx0Ly8gc3RyaW5ncyBhbmQgbnVtYmVycyAocHJpbWl0aXZlcyBvciBvYmplY3RzKVxuXHQvLyB0aGF0IGNhbiBiZSBjb2VyY2VkIHRvIGZpbml0ZSBudW1iZXJzIChnaC0yNjYyKVxuXHR2YXIgdHlwZSA9IGpRdWVyeS50eXBlKCBvYmogKTtcblx0cmV0dXJuICggdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcInN0cmluZ1wiICkgJiZcblxuXHRcdC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChcIlwiKVxuXHRcdC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcblx0XHQvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cblx0XHQhaXNOYU4oIG9iaiAtIHBhcnNlRmxvYXQoIG9iaiApICk7XG59O1xuXG5qUXVlcnkudHJpbSA9IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRyZXR1cm4gdGV4dCA9PSBudWxsID9cblx0XHRcIlwiIDpcblx0XHQoIHRleHQgKyBcIlwiICkucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApO1xufTtcblxuXG5cbi8vIFJlZ2lzdGVyIGFzIGEgbmFtZWQgQU1EIG1vZHVsZSwgc2luY2UgalF1ZXJ5IGNhbiBiZSBjb25jYXRlbmF0ZWQgd2l0aCBvdGhlclxuLy8gZmlsZXMgdGhhdCBtYXkgdXNlIGRlZmluZSwgYnV0IG5vdCB2aWEgYSBwcm9wZXIgY29uY2F0ZW5hdGlvbiBzY3JpcHQgdGhhdFxuLy8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XG4vLyB3YXkgdG8gcmVnaXN0ZXIuIExvd2VyY2FzZSBqcXVlcnkgaXMgdXNlZCBiZWNhdXNlIEFNRCBtb2R1bGUgbmFtZXMgYXJlXG4vLyBkZXJpdmVkIGZyb20gZmlsZSBuYW1lcywgYW5kIGpRdWVyeSBpcyBub3JtYWxseSBkZWxpdmVyZWQgaW4gYSBsb3dlcmNhc2Vcbi8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xuLy8gdG8gY2FsbCBub0NvbmZsaWN0IHRvIGhpZGUgdGhpcyB2ZXJzaW9uIG9mIGpRdWVyeSwgaXQgd2lsbCB3b3JrLlxuXG4vLyBOb3RlIHRoYXQgZm9yIG1heGltdW0gcG9ydGFiaWxpdHksIGxpYnJhcmllcyB0aGF0IGFyZSBub3QgalF1ZXJ5IHNob3VsZFxuLy8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuLy8gQU1EIGxvYWRlciBpcyBwcmVzZW50LiBqUXVlcnkgaXMgYSBzcGVjaWFsIGNhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy93aWtpL1VwZGF0aW5nLWV4aXN0aW5nLWxpYnJhcmllcyN3aWtpLWFub25cblxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblx0ZGVmaW5lKCBcImpxdWVyeVwiLCBbXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGpRdWVyeTtcblx0fSApO1xufVxuXG5cblxuXG52YXJcblxuXHQvLyBNYXAgb3ZlciBqUXVlcnkgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0X2pRdWVyeSA9IHdpbmRvdy5qUXVlcnksXG5cblx0Ly8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0XyQgPSB3aW5kb3cuJDtcblxualF1ZXJ5Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiggZGVlcCApIHtcblx0aWYgKCB3aW5kb3cuJCA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy4kID0gXyQ7XG5cdH1cblxuXHRpZiAoIGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy5qUXVlcnkgPSBfalF1ZXJ5O1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeTtcbn07XG5cbi8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW4gQU1EXG4vLyAodHJhYy03MTAyI2NvbW1lbnQ6MTAsIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L3B1bGwvNTU3KVxuLy8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAodHJhYy0xMzU2NilcbmlmICggdHlwZW9mIG5vR2xvYmFsID09PSBcInVuZGVmaW5lZFwiICkge1xuXHR3aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSBqUXVlcnk7XG59XG5cblxuXG5cbnJldHVybiBqUXVlcnk7XG59ICk7XG4iLCAiZXhwb3J0IGNvbnN0IEJJTkcgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vJ1xuZXhwb3J0IGNvbnN0IENOX1JFRElSRUNUX1VSTCA9ICdodHRwczovL2NuLmJpbmcuY29tLydcbmV4cG9ydCBjb25zdCBBSVBMVVMgPSAnaHR0cHM6Ly9jaGF0LmFpcGx1cy5sb2wvbG9naW4nXG5leHBvcnQgY29uc3QgQkFORF9NS1RTID0gWyd6aC1DTicsICdydScsICdydS1ydSddXG5cbmV4cG9ydCBjb25zdCBNQUlOX1ZFUlNJT04gPSAnMTE0J1xuZXhwb3J0IGNvbnN0IEZVTExfVkVSU0lPTiA9ICcxMTQuMC4xODIzLjgyJ1xuXG5leHBvcnQgY29uc3QgQUxMX1JFU09VUkNFX1RZUEVTID0gW1xuICAnY3NwX3JlcG9ydCcsXG4gICdmb250JyxcbiAgJ2ltYWdlJyxcbiAgJ21haW5fZnJhbWUnLFxuICAnbWVkaWEnLFxuICAnb2JqZWN0JyxcbiAgJ290aGVyJyxcbiAgJ3BpbmcnLFxuICAnc2NyaXB0JyxcbiAgJ3N0eWxlc2hlZXQnLFxuICAnc3ViX2ZyYW1lJyxcbiAgJ3dlYmJ1bmRsZScsXG4gICd3ZWJzb2NrZXQnLFxuICAnd2VidHJhbnNwb3J0JyxcbiAgJ3htbGh0dHByZXF1ZXN0J1xuXSBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJlc291cmNlVHlwZVtdXG5cbmV4cG9ydCBjb25zdCBHT09HTEVfRE9NQUlOUyA9IFtcbiAgJ2dvb2dsZS5jb20nLFxuXG4gICdnb29nbGUuYWMnLFxuICAnZ29vZ2xlLmFkJyxcbiAgJ2dvb2dsZS5hZScsXG4gICdnb29nbGUuYWwnLFxuICAnZ29vZ2xlLmFtJyxcbiAgJ2dvb2dsZS5hcycsXG4gICdnb29nbGUuYXQnLFxuICAnZ29vZ2xlLmF6JyxcbiAgJ2dvb2dsZS5iYScsXG4gICdnb29nbGUuYmUnLFxuICAnZ29vZ2xlLmJmJyxcbiAgJ2dvb2dsZS5iZycsXG4gICdnb29nbGUuYmknLFxuICAnZ29vZ2xlLmJqJyxcbiAgJ2dvb2dsZS5icycsXG4gICdnb29nbGUuYnQnLFxuICAnZ29vZ2xlLmJ5JyxcbiAgJ2dvb2dsZS5jYScsXG4gICdnb29nbGUuY2F0JyxcbiAgJ2dvb2dsZS5jYycsXG4gICdnb29nbGUuY2QnLFxuICAnZ29vZ2xlLmNmJyxcbiAgJ2dvb2dsZS5jZycsXG4gICdnb29nbGUuY2gnLFxuICAnZ29vZ2xlLmNpJyxcbiAgJ2dvb2dsZS5jbCcsXG4gICdnb29nbGUuY20nLFxuICAnZ29vZ2xlLmNuJyxcbiAgJ2dvb2dsZS5jbycsXG4gICdnb29nbGUuY28uYW8nLFxuICAnZ29vZ2xlLmNvLmJ3JyxcbiAgJ2dvb2dsZS5jby5jaycsXG4gICdnb29nbGUuY28uY3InLFxuICAnZ29vZ2xlLmNvLmlkJyxcbiAgJ2dvb2dsZS5jby5pbCcsXG4gICdnb29nbGUuY28uaW4nLFxuICAnZ29vZ2xlLmNvLmpwJyxcbiAgJ2dvb2dsZS5jby5rZScsXG4gICdnb29nbGUuY28ua3InLFxuICAnZ29vZ2xlLmNvLmxzJyxcbiAgJ2dvb2dsZS5jby5tYScsXG4gICdnb29nbGUuY28ubXonLFxuICAnZ29vZ2xlLmNvLm56JyxcbiAgJ2dvb2dsZS5jby50aCcsXG4gICdnb29nbGUuY28udHonLFxuICAnZ29vZ2xlLmNvLnVnJyxcbiAgJ2dvb2dsZS5jby51aycsXG4gICdnb29nbGUuY28udXonLFxuICAnZ29vZ2xlLmNvLnZlJyxcbiAgJ2dvb2dsZS5jby52aScsXG4gICdnb29nbGUuY28uemEnLFxuICAnZ29vZ2xlLmNvLnptJyxcbiAgJ2dvb2dsZS5jby56dycsXG4gICdnb29nbGUuY29tLmFmJyxcbiAgJ2dvb2dsZS5jb20uYWcnLFxuICAnZ29vZ2xlLmNvbS5haScsXG4gICdnb29nbGUuY29tLmFyJyxcbiAgJ2dvb2dsZS5jb20uYXUnLFxuICAnZ29vZ2xlLmNvbS5iZCcsXG4gICdnb29nbGUuY29tLmJoJyxcbiAgJ2dvb2dsZS5jb20uYm4nLFxuICAnZ29vZ2xlLmNvbS5ibycsXG4gICdnb29nbGUuY29tLmJyJyxcbiAgJ2dvb2dsZS5jb20uYnonLFxuICAnZ29vZ2xlLmNvbS5jbycsXG4gICdnb29nbGUuY29tLmN1JyxcbiAgJ2dvb2dsZS5jb20uY3knLFxuICAnZ29vZ2xlLmNvbS5kbycsXG4gICdnb29nbGUuY29tLmVjJyxcbiAgJ2dvb2dsZS5jb20uZWcnLFxuICAnZ29vZ2xlLmNvbS5ldCcsXG4gICdnb29nbGUuY29tLmZqJyxcbiAgJ2dvb2dsZS5jb20uZ2gnLFxuICAnZ29vZ2xlLmNvbS5naScsXG4gICdnb29nbGUuY29tLmd0JyxcbiAgJ2dvb2dsZS5jb20uaGsnLFxuICAnZ29vZ2xlLmNvbS5qbScsXG4gICdnb29nbGUuY29tLmtoJyxcbiAgJ2dvb2dsZS5jb20ua3cnLFxuICAnZ29vZ2xlLmNvbS5sYicsXG4gICdnb29nbGUuY29tLmxjJyxcbiAgJ2dvb2dsZS5jb20ubHknLFxuICAnZ29vZ2xlLmNvbS5tbScsXG4gICdnb29nbGUuY29tLm10JyxcbiAgJ2dvb2dsZS5jb20ubXgnLFxuICAnZ29vZ2xlLmNvbS5teScsXG4gICdnb29nbGUuY29tLm5hJyxcbiAgJ2dvb2dsZS5jb20ubmYnLFxuICAnZ29vZ2xlLmNvbS5uZycsXG4gICdnb29nbGUuY29tLm5pJyxcbiAgJ2dvb2dsZS5jb20ubnAnLFxuICAnZ29vZ2xlLmNvbS5vbScsXG4gICdnb29nbGUuY29tLnBhJyxcbiAgJ2dvb2dsZS5jb20ucGUnLFxuICAnZ29vZ2xlLmNvbS5wZycsXG4gICdnb29nbGUuY29tLnBoJyxcbiAgJ2dvb2dsZS5jb20ucGsnLFxuICAnZ29vZ2xlLmNvbS5wcicsXG4gICdnb29nbGUuY29tLnB5JyxcbiAgJ2dvb2dsZS5jb20ucWEnLFxuICAnZ29vZ2xlLmNvbS5zYScsXG4gICdnb29nbGUuY29tLnNiJyxcbiAgJ2dvb2dsZS5jb20uc2cnLFxuICAnZ29vZ2xlLmNvbS5zbCcsXG4gICdnb29nbGUuY29tLnN2JyxcbiAgJ2dvb2dsZS5jb20udGonLFxuICAnZ29vZ2xlLmNvbS50cicsXG4gICdnb29nbGUuY29tLnR3JyxcbiAgJ2dvb2dsZS5jb20udWEnLFxuICAnZ29vZ2xlLmNvbS51eScsXG4gICdnb29nbGUuY29tLnZjJyxcbiAgJ2dvb2dsZS5jb20udm4nLFxuICAnZ29vZ2xlLmN2JyxcbiAgJ2dvb2dsZS5jeicsXG4gICdnb29nbGUuZGUnLFxuICAnZ29vZ2xlLmRqJyxcbiAgJ2dvb2dsZS5kaycsXG4gICdnb29nbGUuZG0nLFxuICAnZ29vZ2xlLmR6JyxcbiAgJ2dvb2dsZS5lZScsXG4gICdnb29nbGUuZXMnLFxuICAnZ29vZ2xlLmZpJyxcbiAgJ2dvb2dsZS5mbScsXG4gICdnb29nbGUuZnInLFxuICAnZ29vZ2xlLmdhJyxcbiAgJ2dvb2dsZS5nZScsXG4gICdnb29nbGUuZ2YnLFxuICAnZ29vZ2xlLmdnJyxcbiAgJ2dvb2dsZS5nbCcsXG4gICdnb29nbGUuZ20nLFxuICAnZ29vZ2xlLmdwJyxcbiAgJ2dvb2dsZS5ncicsXG4gICdnb29nbGUuZ3knLFxuICAnZ29vZ2xlLmhuJyxcbiAgJ2dvb2dsZS5ocicsXG4gICdnb29nbGUuaHQnLFxuICAnZ29vZ2xlLmh1JyxcbiAgJ2dvb2dsZS5pZScsXG4gICdnb29nbGUuaW0nLFxuICAnZ29vZ2xlLmlvJyxcbiAgJ2dvb2dsZS5pcScsXG4gICdnb29nbGUuaXMnLFxuICAnZ29vZ2xlLml0JyxcbiAgJ2dvb2dsZS5qZScsXG4gICdnb29nbGUuam8nLFxuICAnZ29vZ2xlLmtnJyxcbiAgJ2dvb2dsZS5raScsXG4gICdnb29nbGUua3onLFxuICAnZ29vZ2xlLmxhJyxcbiAgJ2dvb2dsZS5saScsXG4gICdnb29nbGUubGsnLFxuICAnZ29vZ2xlLmx0JyxcbiAgJ2dvb2dsZS5sdScsXG4gICdnb29nbGUubHYnLFxuICAnZ29vZ2xlLm1kJyxcbiAgJ2dvb2dsZS5tZScsXG4gICdnb29nbGUubWcnLFxuICAnZ29vZ2xlLm1rJyxcbiAgJ2dvb2dsZS5tbCcsXG4gICdnb29nbGUubW4nLFxuICAnZ29vZ2xlLm1zJyxcbiAgJ2dvb2dsZS5tdScsXG4gICdnb29nbGUubXYnLFxuICAnZ29vZ2xlLm13JyxcbiAgJ2dvb2dsZS5uZScsXG4gICdnb29nbGUubmcnLFxuICAnZ29vZ2xlLm5sJyxcbiAgJ2dvb2dsZS5ubycsXG4gICdnb29nbGUubnInLFxuICAnZ29vZ2xlLm51JyxcbiAgJ2dvb2dsZS5wbCcsXG4gICdnb29nbGUucG4nLFxuICAnZ29vZ2xlLnBzJyxcbiAgJ2dvb2dsZS5wdCcsXG4gICdnb29nbGUucm8nLFxuICAnZ29vZ2xlLnJzJyxcbiAgJ2dvb2dsZS5ydScsXG4gICdnb29nbGUucncnLFxuICAnZ29vZ2xlLnNjJyxcbiAgJ2dvb2dsZS5zZScsXG4gICdnb29nbGUuc2gnLFxuICAnZ29vZ2xlLnNpJyxcbiAgJ2dvb2dsZS5zaycsXG4gICdnb29nbGUuc20nLFxuICAnZ29vZ2xlLnNuJyxcbiAgJ2dvb2dsZS5zbycsXG4gICdnb29nbGUuc3InLFxuICAnZ29vZ2xlLnN0JyxcbiAgJ2dvb2dsZS50ZCcsXG4gICdnb29nbGUudGcnLFxuICAnZ29vZ2xlLnRrJyxcbiAgJ2dvb2dsZS50bCcsXG4gICdnb29nbGUudG0nLFxuICAnZ29vZ2xlLnRuJyxcbiAgJ2dvb2dsZS50bycsXG4gICdnb29nbGUudHQnLFxuICAnZ29vZ2xlLnZnJyxcbiAgJ2dvb2dsZS52dScsXG4gICdnb29nbGUud3MnXG5dXG5cbmV4cG9ydCBjb25zdCBZQU5ERVhfRE9NQUlOUyA9IFtcbiAgJ3lhbmRleC5jb20nLFxuICAneWFuZGV4LnJ1JyxcbiAgJ3lhbmRleC5ieScsXG4gICd5YW5kZXgua3onLFxuICAneWFuZGV4LnV6JyxcbiAgJ3lhbmRleC5jb20udHInLFxuICAneWFuZGV4LmZyJyxcbiAgJ3lhbmRleC5heicsXG4gICd5YW5kZXguY29tLmdlJyxcbiAgJ3lhbmRleC5jb20uYW0nLFxuICAneWFuZGV4LmNvLmlsJyxcbiAgJ3lhbmRleC5sdicsXG4gICd5YW5kZXgubHQnLFxuICAneWFuZGV4LmVlJyxcbiAgJ3lhbmRleC5tZCcsXG4gICd5YW5kZXgudG0nLFxuICAneWFuZGV4LnRqJyxcbiAgJ3lhbmRleC5ldSdcbl1cblxuZXhwb3J0IGNvbnN0IE9USEVSUyA9IFsnZHVja2R1Y2tnby5jb20nLCAnd3d3LmJpbmcuY29tJywgJ3d3dy5lY29zaWEub3JnJywgJ3NlYXJjaC5icmF2ZS5jb20nLCAnd3d3LmJhaWR1LmNvbSddXG4iLCAie1xuICBcIm5hbWVcIjogXCJuZXctYmluZy1hbnl3aGVyZVwiLFxuICBcInZlcnNpb25cIjogXCIyLjMuMFwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5ldyBCaW5nIGlzbid0IGp1c3QgZm9yIEVkZ2UgYW55bW9yZS4gQW55d2hlcmUgeW91IHdhbnRcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9oYW96aS9OZXctQmluZy1Bbnl3aGVyZVwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2hhb3ppL05ldy1CaW5nLUFueXdoZXJlXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiR1BMdjNcIixcbiAgXCJhdXRob3JcIjogXCJoYW96aVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJybSAtcmYgZGlzdCAmJiBta2RpciAtcCBkaXN0ICYmIHBucG0gcnVuIGxpbnQgJiYgcG5wbSBydW4gYnVpbGQ6YnVuZGxlXCIsXG4gICAgXCJidWlsZDpidW5kbGVcIjogXCJOT0RFX0VOVj1wcm9kdWN0aW9uIHZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGJ1aWxkXCIsXG4gICAgXCJjb3B5XCI6IFwicm0gLXJmIGRpc3QgJiYgY3AgLXIgcHVibGljIGRpc3RcIixcbiAgICBcImNvcHk6c29ydWNlXCI6IFwicnN5bmMgLXZocmEgLiBkaXN0L3NvdXJjZSAtLWluY2x1ZGU9JyoqLmdpdGlnbm9yZScgLS1leGNsdWRlPScvLmdpdCcgLS1leGNsdWRlPSdkaXN0JyAgLS1maWx0ZXI9JzotIC5naXRpZ25vcmUnIC0tZGVsZXRlLWFmdGVyXCIsXG4gICAgXCJjb3B5OndhdGNoXCI6IFwicG5wbSBydW4gY29weSAtLSAtLXdhdGNoXCIsXG4gICAgXCJkZXZcIjogXCJwbnBtIHJ1biBsaW50ICYmIHBucG0gcnVuICcvXmRldjouKi8nXCIsXG4gICAgXCJkZXY6YXBwXCI6IFwicG5wbSAtLWZpbHRlciBhcHAgcnVuIGRldlwiLFxuICAgIFwiZGV2OmJ1bmRsZVwiOiBcInZpdGUtbm9kZSBzY3JpcHRzL2J1aWxkLnRzIC0tIGRldlwiLFxuICAgIFwibGludFwiOiBcInBucG0gcnVuIHByZXR0aWVyICYmIHBucG0gcnVuICcvXmxpbnQ6LiovJ1wiLFxuICAgIFwibGludDplc2xpbnRcIjogXCJlc2xpbnQgLS1leHQgLmpzLC50cyAuL3NyYyAtLWZpeCAtLWNhY2hlXCIsXG4gICAgXCJsaW50OnN0eWx1c1wiOiBcInN0eWx1cy1zdXByZW1hY3kgZm9ybWF0IC4vc3JjLyoqLyouc3R5bCAgLS1vcHRpb25zIC4vc3R5bHVzLXN1cHJlbWFjeS5qc29uIC0tcmVwbGFjZVwiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGwgJiYgcG5wbSBydW4gYnVpbGRcIixcbiAgICBcInByZXR0aWVyXCI6IFwicHJldHRpZXIgLS1jYWNoZSAtLXdyaXRlIC5cIixcbiAgICBcInByZXR0aWVyOndhdGNoXCI6IFwib25jaGFuZ2UgXFxcIioqLypcXFwiIC0tIHByZXR0aWVyIC0tY2FjaGUgLS13cml0ZSAtLWlnbm9yZS11bmtub3duIC0taWdub3JlLXBhdGggLnByZXR0aWVyaWdub3JlIHt7Y2hhbmdlZH19ID4gL2Rldi9udWxsIDI+JjFcIixcbiAgICBcInRlc3RcIjogXCJwbnBtIHJ1biBsaW50XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwianF1ZXJ5XCI6IFwiMy43LjBcIixcbiAgICBcInV1aWRcIjogXCJeOS4wLjBcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdHlwZXMvY2hyb21lXCI6IFwiXjAuMC4yNDJcIixcbiAgICBcIkB0eXBlcy9mcy1leHRyYVwiOiBcIl4xMS4wLjFcIixcbiAgICBcIkB0eXBlcy9qcXVlcnlcIjogXCJeMy41LjE2XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC40LjVcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjYuMi4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjYuMi4wXCIsXG4gICAgXCJjb3B5LWFuZC13YXRjaFwiOiBcIl4wLjEuNlwiLFxuICAgIFwiZXNidWlsZFwiOiBcIl4wLjE4LjE3XCIsXG4gICAgXCJlc2J1aWxkLXBsdWdpbi1zdmdyXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJlc2J1aWxkLXN0eWxlLXBsdWdpblwiOiBcIl4xLjYuMlwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNDUuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl41LjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl43LjMzLjBcIixcbiAgICBcImZzLWV4dHJhXCI6IFwiXjExLjEuMVwiLFxuICAgIFwiaHVza3lcIjogXCJeOC4wLjNcIixcbiAgICBcIm1kNS1maWxlXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJvbmNoYW5nZVwiOiBcIl43LjEuMFwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4wLjBcIixcbiAgICBcInNvcnQtcGFja2FnZS1qc29uXCI6IFwiXjIuNS4xXCIsXG4gICAgXCJzdHlsdXNcIjogXCJeMC41OS4wXCIsXG4gICAgXCJzdHlsdXMtc3VwcmVtYWN5XCI6IFwiXjIuMTcuNVwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjEuNlwiLFxuICAgIFwidml0ZS1ub2RlXCI6IFwiXjAuMzMuMFwiXG4gIH0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiXjIwLjMuMFwiLFxuICAgIFwicG5wbVwiOiBcIl44LjYuM1wiXG4gIH0sXG4gIFwiZXh0ZW5zaW9uLWkxOG5cIjoge1xuICAgIFwiZW5cIjoge1xuICAgICAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIixcbiAgICAgIFwiZXh0ZW5zaW9uRGVzY3JpcHRpb25cIjogXCJOZXcgQmluZyBDaGF0IGNhbiBiZSB1c2VkIGluIGFueSBicm93c2VyLCB3aXRoIGFueSBzZWFyY2ggZW5naW5lLCBhbmQgaW4gYW55IGNvdW50cnkuXCJcbiAgICB9LFxuICAgIFwiemhfQ05cIjoge1xuICAgICAgXCJleHRlbnNpb25OYW1lXCI6IFwiTmV3IEJpbmcgQW55d2hlcmUgKEJpbmcgQ2hhdCBHUFQtNClcIixcbiAgICAgIFwiZXh0ZW5zaW9uRGVzY3JpcHRpb25cIjogXCJOZXcgQmluZyBDaGF0IGNhbiBiZSB1c2VkIGluIGFueSBicm93c2VyLCB3aXRoIGFueSBzZWFyY2ggZW5naW5lLCBhbmQgaW4gYW55IGNvdW50cnkuIFx1OTY4Rlx1NjVGNlx1OTY4Rlx1NTczMFx1RkYwQ1x1NjcwOVx1NkM0Mlx1NUZDNVx1NUU5NFx1MzAwMlwiXG4gICAgfSxcbiAgICBcInpoX1RXXCI6IHtcbiAgICAgIFwiZXh0ZW5zaW9uTmFtZVwiOiBcIk5ldyBCaW5nIEFueXdoZXJlIChCaW5nIENoYXQgR1BULTQpXCIsXG4gICAgICBcImV4dGVuc2lvbkRlc2NyaXB0aW9uXCI6IFwiTmV3IEJpbmcgQ2hhdCBjYW4gYmUgdXNlZCBpbiBhbnkgYnJvd3Nlciwgd2l0aCBhbnkgc2VhcmNoIGVuZ2luZSwgYW5kIGluIGFueSBjb3VudHJ5LiBcdTk2QThcdTY2NDJcdTk2QThcdTU3MzBcdUZGMENcdTY3MDlcdTZDNDJcdTVGQzVcdTYxQzlcIlxuICAgIH0sXG4gICAgXCJydVwiOiB7XG4gICAgICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiLFxuICAgICAgXCJleHRlbnNpb25EZXNjcmlwdGlvblwiOiBcIlx1MDQyN1x1MDQzMFx1MDQ0MiBOZXcgQmluZyBcdTA0M0NcdTA0M0VcdTA0MzZcdTA0MzVcdTA0NDIgXHUwNDM4XHUwNDQxXHUwNDNGXHUwNDNFXHUwNDNCXHUwNDRDXHUwNDM3XHUwNDNFXHUwNDMyXHUwNDMwXHUwNDQyXHUwNDRDXHUwNDQxXHUwNDRGIFx1MDQzMiBcdTA0M0JcdTA0NEVcdTA0MzFcdTA0M0VcdTA0M0MgXHUwNDMxXHUwNDQwXHUwNDMwXHUwNDQzXHUwNDM3XHUwNDM1XHUwNDQwXHUwNDM1LCBcdTA0NDEgXHUwNDNCXHUwNDRFXHUwNDMxXHUwNDRCXHUwNDNDIFx1MDQzRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQVx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzQyBcdTA0MzRcdTA0MzJcdTA0MzhcdTA0MzZcdTA0M0FcdTA0M0VcdTA0M0MgXHUwNDM4IFx1MDQzMiBcdTA0M0JcdTA0NEVcdTA0MzFcdTA0M0VcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDMwXHUwNDNEXHUwNDM1LlwiXG4gICAgfVxuICB9LFxuICBcImV4dGVuc2lvbk5hbWVcIjogXCJOZXcgQmluZyBBbnl3aGVyZSAoQmluZyBDaGF0IEdQVC00KVwiXG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgRlVMTF9WRVJTSU9OLCBHT09HTEVfRE9NQUlOUywgTUFJTl9WRVJTSU9OLCBZQU5ERVhfRE9NQUlOUyB9IGZyb20gJ0BAL2NvbnN0YW50cydcbmltcG9ydCB7IHR5cGUgQmluZyB9IGZyb20gJ0BAL3R5cGVzJ1xuaW1wb3J0IHsgdmVyc2lvbiBhcyBwa2dWZXJzaW9uLCByZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgY29uc3QgY2hlY2tJc0dvb2dsZSA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBHT09HTEVfRE9NQUlOUy5pbmNsdWRlcyhob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgJycpKVxufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNCYWlkdSA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBob3N0bmFtZSA9PT0gJ3d3dy5iYWlkdS5jb20nXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc1lhbmRleCA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBZQU5ERVhfRE9NQUlOUy5pbmNsdWRlcyhob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgJycpKVxufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNTbyA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBob3N0bmFtZSA9PT0gJ3d3dy5zby5jb20nXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc0JpbmcgPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaG9zdG5hbWUgPT09ICd3d3cuYmluZy5jb20nXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc0R1Y2tkdWNrZ28gPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaG9zdG5hbWUgPT09ICdkdWNrZHVja2dvLmNvbSdcbn1cbmV4cG9ydCBjb25zdCBjaGVja0lzRWNvc2lhID0gKGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGhvc3RuYW1lID09PSAnd3d3LmVjb3NpYS5vcmcnXG59XG5leHBvcnQgY29uc3QgY2hlY2tJc0JyYXZlID0gKGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGhvc3RuYW1lID09PSAnc2VhcmNoLmJyYXZlLmNvbSdcbn1cbmV4cG9ydCBjb25zdCBjaGVja0lzTmF2ZXIgPSAoaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaG9zdG5hbWUgPT09ICdzZWFyY2gubmF2ZXIuY29tJ1xufVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNZYWhvbyA9IChob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBob3N0bmFtZS5lbmRzV2l0aCgnc2VhcmNoLnlhaG9vLmNvbScpIHx8IGhvc3RuYW1lID09PSAnc2VhcmNoLnlhaG9vLmNvLmpwJ1xufVxuXG5leHBvcnQgY29uc3QgbHMgPSB7XG4gIHNldDogYXN5bmMgPFQgPSBhbnk+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IEtFWSA9IGBOQkFAJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX1gXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChcbiAgICAgICAge1xuICAgICAgICAgIFtLRVldOiB2YWx1ZVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9KVxuICB9LFxuICBnZXQ6IGFzeW5jIDxUID0gYW55PihrZXk6IHN0cmluZyk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4gPT4ge1xuICAgIGNvbnN0IEtFWSA9IGBOQkFAJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX1gXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW0tFWV0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHRbS0VZXSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgcmVtb3ZlOiBhc3luYyAoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBLRVkgPSBgTkJBQCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9YFxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW0tFWV0pXG4gICAgICByZXNvbHZlKHVuZGVmaW5lZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxUYWJzID0gYXN5bmMgKHF1ZXJ5SW5mbzogY2hyb21lLnRhYnMuUXVlcnlJbmZvID0geyBzdGF0dXM6ICdjb21wbGV0ZScgfSk6IFByb21pc2U8SVRhYltdPiA9PiB7XG4gIGNvbnN0IG5ld1RhYnM6IElUYWJbXSA9IChhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeUluZm8pKSBhcyBJVGFiW11cbiAgY29uc3Qgb2xkVGFiczogSVRhYltdID0gdW5pcXVlKChhd2FpdCBscy5nZXQ8SVRhYltdPignY3VycmVudFRhYnMnKSkhKVxuICBmb3IgKGNvbnN0IG5ld1RhYiBvZiBuZXdUYWJzKSB7XG4gICAgZm9yIChjb25zdCBvbGRUYWIgb2Ygb2xkVGFicykge1xuICAgICAgaWYgKG9sZFRhYi51cmwgIT0gbnVsbCAmJiBvbGRUYWIudXJsID09PSBuZXdUYWIudXJsKSB7XG4gICAgICAgIG5ld1RhYi4kZXh0cmEgPSBvbGRUYWIuJGV4dHJhXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCB0YWJzID0gbmV3VGFicy5jb25jYXQob2xkVGFicylcbiAgdGFicyA9IHRhYnMuZmlsdGVyKCh0YWIpID0+IHtcbiAgICBjb25zdCB1cmwgPSB0YWIudXJsID8/ICcnXG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCdodHRwJykgfHwgdXJsLnN0YXJ0c1dpdGgoJ2Nocm9tZS1leHRlbnNpb246Ly8nKVxuICB9KVxuICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIGlmICh0YWIudXJsID09IG51bGwpIHJldHVyblxuICAgIHRhYi51cmwgPSB0YWIudXJsLnJlcGxhY2UoLyMuKiQvLCAnJylcbiAgfSlcbiAgdGFicyA9IHVuaXF1ZSh0YWJzLCAndXJsJykuc2xpY2UoMCwgNTAwMClcbiAgcmV0dXJuIHRhYnNcbn1cblxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IDxUPihhcnI6IFRbXSwga2V5OiBzdHJpbmcgPSAndXJsJyk6IFRbXSA9PiB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKVxuICByZXR1cm4gYXJyLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgaWYgKG1hcC5oYXMoaXRlbVtrZXldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcC5zZXQoaXRlbVtrZXldLCB0cnVlKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCB0eXBlIElUYWIgPSBjaHJvbWUudGFicy5UYWIgJiB7XG4gICRleHRyYT86IHtcbiAgICBsYXN0TW9kaWZpZWQ6IG51bWJlclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmaW5kU2FtZVVybFRhYiA9IGFzeW5jICh1cmw/OiBzdHJpbmcsIHF1ZXJ5SW5mbzogY2hyb21lLnRhYnMuUXVlcnlJbmZvID0ge30pOiBQcm9taXNlPGNocm9tZS50YWJzLlRhYiB8IG51bGw+ID0+IHtcbiAgaWYgKCF1cmwpIHJldHVybiBudWxsXG4gIGNvbnN0IG9wZW5lZFRhYnMgPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeUluZm8pXG4gIHJldHVybiAoXG4gICAgb3BlbmVkVGFicy5maW5kKChvcGVuZWRUYWIpID0+IHtcbiAgICAgIGlmICghb3BlbmVkVGFiLnVybCkgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gbm9ybWFsaXplVXJsKG9wZW5lZFRhYi51cmwpID09PSB1cmxcbiAgICB9KSA/PyBudWxsXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVVybCA9ICh1cmw6IHN0cmluZyA9ICcnKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC8jLiokLywgJycpXG59XG5cbmV4cG9ydCBjb25zdCBzbGVlcCA9IGFzeW5jIChkZWxheTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSlcbiAgfSlcbn1cblxuLyoqXG4gKiBjaGVjayBpZiBpcyBDaGluZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVja0lzU2ltcGxlQ2hpbmVzZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsYW5nID0gY2hyb21lLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gbGFuZyA9PT0gJ3poLWNuJ1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hlY2tJc0NoaW5lc2UgPSAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbGFuZyA9IGNocm9tZS5pMThuLmdldFVJTGFuZ3VhZ2UoKS50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIGxhbmcgPT09ICd6aC1jbicgfHwgbGFuZyA9PT0gJ3poLXR3JyB8fCBsYW5nID09PSAnemgtaGsnIHx8IGxhbmcgPT09ICd6aCdcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBjaGVjayBpZiBpbiBNYWlubGFuZCBDaGluYVxuICovXG5leHBvcnQgY29uc3QgaXNDTiA9ICgpID0+IHtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IENPTkZJR19LRVkgPSAnY29uZmlnVjEnXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XG4gIHNob3dHb29nbGVCdXR0b25PbkJpbmc6IGJvb2xlYW5cbiAgc2hvd0JpbmdCdXR0b25Pbkdvb2dsZTogYm9vbGVhblxuICBzaG93R3VpZGVUb0dpdGh1YjogYm9vbGVhblxuICBzaG93Q2hhdDogYm9vbGVhblxuICBzaG93UmVsZWFzZTogYm9vbGVhblxuICB0cmlnZ2VyTW9kZTogJ0Fsd2F5cycgfCAnUXVlc3Rpb25tYXJrJyB8ICdNYW51YWxseSdcbiAgY29udmVyc2F0aW9uU3R5bGU6IEJpbmcuQ29udmVyc2F0aW9uU3R5bGVcbiAgJ1gtRm9yd2FyZGVkLUZvcic/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBnZXRDb25maWcgPSBhc3luYyAoKTogUHJvbWlzZTxDb25maWc+ID0+IHtcbiAgY29uc3QgY29uZmlnID0gKGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KENPTkZJR19LRVkpKVtDT05GSUdfS0VZXVxuICByZXR1cm4ge1xuICAgIHNob3dHb29nbGVCdXR0b25PbkJpbmc6IHRydWUsXG4gICAgc2hvd0JpbmdCdXR0b25Pbkdvb2dsZTogdHJ1ZSxcbiAgICBzaG93R3VpZGVUb0dpdGh1YjogdHJ1ZSxcbiAgICBzaG93Q2hhdDogZmFsc2UsXG4gICAgc2hvd1JlbGVhc2U6IHRydWUsXG4gICAgdHJpZ2dlck1vZGU6ICdBbHdheXMnLFxuICAgIGNvbnZlcnNhdGlvblN0eWxlOiAnQmFsYW5jZWQnLFxuICAgICdYLUZvcndhcmRlZC1Gb3InOiB1bmRlZmluZWQsXG4gICAgLi4uY29uZmlnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldENvbmZpZyA9IGFzeW5jICh2YWx1ZXM6IFBhcnRpYWw8Q29uZmlnPikgPT4ge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKVxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgW0NPTkZJR19LRVldOiB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICAuLi52YWx1ZXNcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBlc2NhcGVIdG1sID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBTdHJpbmcocylcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1xcLy9nLCAnJiN4MmY7Jylcbn1cblxudHlwZSBJTWV0aG9kcyA9IFJlY29yZDxzdHJpbmcsICguLi5hcmdzOiBhbnlbXSkgPT4gUHJvbWlzZTxhbnk+PlxuZXhwb3J0IGNvbnN0IHJlZ2lzdHJ5TGlzdGVuZXIgPSAoY2FsbE1ldGhvZHM6IElNZXRob2RzKSA9PiB7XG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxLCBfc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gaWYgbm90IHJldHVybiB0cnVlIGltbWVkaWF0ZWx5XHVGRjBDd2lsbCB0aHJvdyBlcnJvciBgVW5jaGVja2VkIHJ1bnRpbWUubGFzdEVycm9yOiBUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuYFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBtZXRob2QsIGFyZ3MgfSA9IHJlcVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbE1ldGhvZHNbbWV0aG9kXSguLi5hcmdzKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBjb2RlOiAyMDAsIG1zZzogJ29rJywgZGF0YSB9KVxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGUgPz8ge31cbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgY29kZTogNTAwLCBtc2c6IGVyci5zdGFjayA/PyBlcnIubWVzc2FnZSA/PyBlIH0pXG4gICAgICB9XG4gICAgfSkoKVxuICAgIHJldHVybiB0cnVlXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjYWxsQmFja2dyb3VuZCA9IGFzeW5jIDxUID0gYW55PihtZXRob2Q6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IFByb21pc2U8VD4gPT4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgICAge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGFyZ3M6IFsuLi5hcmdzXVxuICAgICAgfSxcbiAgICAgIChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMgfHwgcmVzLmNvZGUgIT09IDIwMCkge1xuICAgICAgICAgIHJlamVjdChyZXM/Lm1zZylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbG9jYWxDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4ge1xuICBjb25zdCB2ID0gJ3YxJ1xuICByZXR1cm4ge1xuICAgIGdldDogYXN5bmMgPFQgPSBhbnk+KGtleTogc3RyaW5nKTogUHJvbWlzZTxudWxsIHwgVD4gPT4ge1xuICAgICAga2V5ID0gYCR7dn06JHtrZXl9YFxuICAgICAgY29uc3QgeyBkYXRhLCBtYXhBZ2UsIGxhc3RNb2RpZmllZCB9ID0gKGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChrZXkpKT8uW2tleV0gPz8ge31cbiAgICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdE1vZGlmaWVkID4gbWF4QWdlICogMTAwMCkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoa2V5KVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9LFxuXG4gICAgc2V0OiBhc3luYyA8VCA9IG9iamVjdD4oa2V5OiBzdHJpbmcsIGRhdGE6IFQsIG1heEFnZTogbnVtYmVyID0gSW5maW5pdHkgLyogXHU1MzU1XHU0RjREXHU3OUQyICovKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICBrZXkgPSBgJHt2fToke2tleX1gXG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICBba2V5XToge1xuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpLFxuICAgICAgICAgIG1heEFnZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSkoKVxuXG5leHBvcnQgY29uc3QgdG9EYXRhVXJsID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihhc3luYyAocikgPT4gYXdhaXQgci5ibG9iKCkpXG4gICAgICAudGhlbigoYmxvYikgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIHN0cmluZylcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdFxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKVxuICAgICAgfSlcbiAgfSlcbn1cblxuY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxuY29uc3QgdXNlckFnZW50RGF0YSA9IChuYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnREYXRhXG5cbmV4cG9ydCBjb25zdCBpc01hYyA9IC8qIEBfX1BVUkVfXyAqLyB1c2VyQWdlbnQuaW5jbHVkZXMoJ01hY2ludG9zaCcpXG5leHBvcnQgY29uc3QgaXNGaXJlZm94ID0gLyogQF9fUFVSRV9fICovIHVzZXJBZ2VudC5pbmNsdWRlcygnRmlyZWZveCcpXG5leHBvcnQgY29uc3QgaXNFZGdlID0gLyogQF9fUFVSRV9fICovIHVzZXJBZ2VudC5pbmNsdWRlcygnRWRnLycpXG5leHBvcnQgY29uc3QgaXNCcmF2ZSA9IC8qIEBfX1BVUkVfXyAqLyB1c2VyQWdlbnREYXRhPy5icmFuZHMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJyYW5kID09PSAnQnJhdmUnKSA+IC0xXG5leHBvcnQgY29uc3QgaXNDaGluZXNlID0gLyogQF9fUFVSRV9fICovIGNoZWNrSXNDaGluZXNlKClcbmV4cG9ydCBjb25zdCBpc1NpbXBsZUNoaW5lc2UgPSAvKiBAX19QVVJFX18gKi8gY2hlY2tJc1NpbXBsZUNoaW5lc2UoKVxuZXhwb3J0IGNvbnN0IGlzQ2FuYXJ5OiBib29sZWFuID0gLyogQF9fUFVSRV9fICovICEhZ2xvYmFsVGhpcy5fX05CQV9pc0NhbmFyeVxuZXhwb3J0IGNvbnN0IHZlcnNpb246IHN0cmluZyA9IC8qIEBfX1BVUkVfXyAqLyBpc0NhbmFyeSA/IGAwLiR7cGtnVmVyc2lvbn1gIDogcGtnVmVyc2lvblxuXG5leHBvcnQgY29uc3QgZ2VuVUEgPSAoKSA9PiB7XG4gIGxldCB1YSA9IHVzZXJBZ2VudFxuICBpZiAoIWlzRWRnZSkge1xuICAgIGlmIChpc01hYykge1xuICAgICAgdWEgPSBgTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLyR7TUFJTl9WRVJTSU9OfS4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8ke0ZVTExfVkVSU0lPTn1gXG4gICAgfSBlbHNlIHtcbiAgICAgIHVhID0gYE1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8ke01BSU5fVkVSU0lPTn0uMC4wLjAgU2FmYXJpLzUzNy4zNiBFZGcvJHtGVUxMX1ZFUlNJT059YFxuICAgIH1cbiAgfVxuICByZXR1cm4gdWFcbn1cblxuZXhwb3J0IGNvbnN0IGdlbklzc3VlVXJsID0gYXN5bmMgKGV4dHJhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4pID0+IHtcbiAgY29uc3QgcmVwb3NpdG9yeVVybDogc3RyaW5nID0gcmVwb3NpdG9yeS51cmxcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKVxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gYCR7cmVwb3NpdG9yeVVybH0vaXNzdWVzL25ldz90aXRsZT0mYm9keT1gXG4gICAgbGV0IGZpbmFsVXJsOiBzdHJpbmcgPSB1cmxcbiAgICBsZXQgY29tbWVudCA9XG4gICAgICAnUGxlYXNlIHdyaXRlIHlvdXIgY29tbWVudCBBQk9WRSB0aGlzIGxpbmUsIHByb3ZpZGUgYXMgbXVjaCBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhbmQgc2NyZWVuc2hvdHMgYXMgcG9zc2libGUuJyArXG4gICAgICAnUGxlYXNlIGNvbmZpcm0gdGhhdCB5b3UgaGF2ZSByZWFkIHRoZSAjOCBodHRwczovL2dpdGh1Yi5jb20vaGFvemkvTmV3LUJpbmctQW55d2hlcmUvaXNzdWVzLzguJyArXG4gICAgICAnVGhlIFVBIG1heSBub3QgbmVjZXNzYXJpbHkgcmVmbGVjdCB5b3VyIGFjdHVhbCBicm93c2VyIGFuZCBwbGF0Zm9ybSwgc28gcGxlYXNlIG1ha2Ugc3VyZSB0byBpbmRpY2F0ZSB0aGVtIGNsZWFybHkuJ1xuICAgIGlmIChpc0NoaW5lc2UpIHtcbiAgICAgIGNvbW1lbnQgPVxuICAgICAgICAnXHU4QkY3XHU1NzI4XHU2QjY0XHU4ODRDXHU0RTBBXHU2NUI5XHU1M0QxXHU4ODY4XHU2MEE4XHU3Njg0XHU4QkE4XHU4QkJBXHUzMDAyXHU4QkY3XHU3ODZFXHU4QkE0XHU1REYyXHU3RUNGXHU5NjA1XHU4QkZCXHU0RTg2RkFRKGh0dHBzOi8vZ2l0aHViLmNvbS9oYW96aS9OZXctQmluZy1Bbnl3aGVyZS9pc3N1ZXMvOClcdUZGMENcdThCRTZcdTVDM0RcdTc2ODRcdTYzQ0ZcdThGRjBcdTU0OENcdTYyMkFcdTU2RkVcdTY3MDlcdTUyQTlcdTRFOEVcdTYyMTFcdTRFRUNcdTVCOUFcdTRGNERcdTk1RUVcdTk4OThcdUZGMENcdTYzQ0ZcdThGRjBcdTRFMERcdTZFMDVcdTc2ODRcdTk1RUVcdTk4OThcdTRGMUFcdTg4QUJcdTUxNzNcdTk1RURcdUZGMENVQSBcdTRFMERcdTRFMDBcdTVCOUFcdTc3MUZcdTVCOUVcdTUzQ0RcdTY2MjBcdTYwQThcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTU0OENcdTVFNzNcdTUzRjBcdUZGMENcdThCRjdcdTU5MDdcdTZDRThcdTZFMDVcdTY5NUEnXG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9XG4gICAgICAnIFxcblxcblxcblxcbicgK1xuICAgICAgYDwhLS0gICR7Y29tbWVudH0gLS0+XFxuYCArXG4gICAgICAnPHByZT5cXG4nICtcbiAgICAgIE9iamVjdC5lbnRyaWVzPHN0cmluZz4oe1xuICAgICAgICBWZXJzaW9uOiBgJHt2ZXJzaW9ufSR7aXNDYW5hcnkgPyAnIChDYW5hcnkpJyA6ICcnfSBgLFxuICAgICAgICBVQTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgTGFuZzogY2hyb21lLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLFxuICAgICAgICBBY2NlcHRMYW5nczogKGF3YWl0IGNocm9tZS5pMThuLmdldEFjY2VwdExhbmd1YWdlcygpKS5qb2luKCcsICcpLFxuICAgICAgICBjb25maWc6IEpTT04uc3RyaW5naWZ5KGNvbmZpZyksXG4gICAgICAgIC4uLmV4dHJhXG4gICAgICB9KVxuICAgICAgICAubWFwKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZhbCA/IGAke2tleX06ICR7dmFsfWAgOiAnJ1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignXFxuJykgK1xuICAgICAgJzwvcHJlPidcbiAgICBmaW5hbFVybCArPSBlbmNvZGVVUklDb21wb25lbnQoYm9keS5zbGljZSgwLCAyMDAwKSlcbiAgICByZXR1cm4gZmluYWxVcmxcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHJlcG9zaXRvcnlVcmxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VVJMID0gKHVybDogc3RyaW5nID0gJycsIGJhc2U/OiBzdHJpbmcpOiBVUkwgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCwgYmFzZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZSlcbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoUGFyYW1zOiB7XG4gICAgICAgIGdldDogKCkgPT4gbnVsbFxuICAgICAgfVxuICAgIH0gYXMgYW55XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFVSTFNlYXJjaFBhcmFtcyA9ICh1cmw6IHN0cmluZyk6IFVSTFNlYXJjaFBhcmFtcyA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiAoKSA9PiBudWxsXG4gICAgfSBhcyBhbnlcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3BlblBhZ2UgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPGNocm9tZS50YWJzLlRhYj4gPT4ge1xuICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlIH0pXG5cbiAgY29uc3QgdXJsT2JqID0gZ2V0VVJMKHVybClcbiAgbGV0IHRhYiA9IHRhYnMuZmluZCgodGFiKSA9PiB0YWIudXJsPy5zdGFydHNXaXRoKHVybE9iai5vcmlnaW4pKVxuXG4gIGlmICh0YWIgPT0gbnVsbCkge1xuICAgIHRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybCB9KVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgW1xuICAgICAgICBjaHJvbWUudGFicy5tb3ZlKHRhYi5pZCEsIHsgaW5kZXg6IHRhYnMubGVuZ3RoIC0gMSB9KSxcbiAgICAgICAgdGFiLnVybCAhPT0gdXJsICYmIGNocm9tZS50YWJzLnVwZGF0ZSh0YWIuaWQhLCB7IHVybCB9KSxcbiAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCEsIHsgYWN0aXZlOiB0cnVlLCB1cmw6IHRhYi51cmwgIT09IHVybCA/IHVybCA6IHVuZGVmaW5lZCB9KVxuICAgICAgXS5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cbiAgcmV0dXJuIHRhYlxufVxuIiwgImltcG9ydCB7IGNhbGxCYWNrZ3JvdW5kLCBjaGVja0lzR29vZ2xlLCBnZXRDb25maWcgfSBmcm9tICdAQC91dGlscydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7IGV4dGVuc2lvbk5hbWUgfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgYmluZ0hhbmRsZXIgZnJvbSAnLi9iaW5nLWhhbmRsZXInXG5pbXBvcnQgY2hhdEhhbmRsZXIgZnJvbSAnLi9jaGF0LWhhbmRsZXInXG5pbXBvcnQgZ29vZ2xlSGFuZGxlciBmcm9tICcuL2dvb2dsZS1oYW5kbGVyJ1xuOyhhc3luYyAoJCkgPT4ge1xuICBjb25zdCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgaWYgKCRkb2N1bWVudC5maW5kKGBtZXRhW25hbWU9XCIke2V4dGVuc2lvbk5hbWV9XCJdYCkubGVuZ3RoKSByZXR1cm5cbiAgY29uc3QgJG1ldGEgPSAkKGA8bWV0YSBuYW1lPVwiJHtleHRlbnNpb25OYW1lfVwiIC8+YClcblxuICAkZG9jdW1lbnQucHJlcGVuZCgkbWV0YSlcblxuICBjYWxsQmFja2dyb3VuZCgnZ2V0RW52JykudGhlbigoZW52KSA9PiB7XG4gICAgJG1ldGEuYXR0cignY29udGVudCcsIGVudi52ZXJzaW9uKVxuICB9KVxuXG4gIGdldENvbmZpZygpLnRoZW4oKGNvbmZpZykgPT4ge1xuICAgIGlmIChjb25maWcuc2hvd0NoYXQpIHtcbiAgICAgIGNoYXRIYW5kbGVyKGNvbmZpZylcbiAgICB9XG4gIH0pXG5cbiAgaWYgKGxvY2F0aW9uLmhvc3RuYW1lID09PSAnd3d3LmJpbmcuY29tJykge1xuICAgIGJpbmdIYW5kbGVyKClcbiAgfVxuXG4gIGlmIChjaGVja0lzR29vZ2xlKCkpIHtcbiAgICBnb29nbGVIYW5kbGVyKClcbiAgfVxufSkoJClcbiIsICJpbXBvcnQgeyBjYWxsQmFja2dyb3VuZCwgZXNjYXBlSHRtbCwgZ2V0Q29uZmlnLCBpc0VkZ2UsIHNldENvbmZpZyB9IGZyb20gJ0BAL3V0aWxzJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IHsgJHcsIG11dGF0aW9uQ29uZmlnLCBvcGVuVXJsSW5TYW1lVGFiIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xuICBpZiAoIWlzRWRnZSkge1xuICAgIGNvbnN0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG4gICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgcy5zcmMgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2luamVjdC5qcycpXG4gICAgcy5vbmxvYWQgPSBzLnJlbW92ZVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzKVxuICB9XG4gIGNvbnN0IGlzUnRsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuICAkKCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBzaG93R3VpZGVUb0dpdGh1YiB9ID0gYXdhaXQgZ2V0Q29uZmlnKClcbiAgICAgIGlmICghc2hvd0d1aWRlVG9HaXRodWIpIHJldHVyblxuICAgICAgY29uc3QgJGVzYXRTd2l0Y2ggPSAkKCcjZXN0X3N3aXRjaCcpXG4gICAgICBpZiAoJC50cmltKCRlc2F0U3dpdGNoLnRleHQoKSkgIT09ICdcdTU2RkRcdTUxODVcdTcyNDhcdTU2RkRcdTk2NDVcdTcyNDgnKSByZXR1cm5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCAkYSA9ICQoXG4gICAgICAgICAgJzxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGFvemkvTmV3LUJpbmctQW55d2hlcmUvaXNzdWVzLzhcIiB0aXRsZT1cIlx1NjdFNVx1NzcwQlx1NTk4Mlx1NEY1NVx1NkI2M1x1Nzg2RVx1OTE0RFx1N0Y2RVx1N0Y1MVx1N0VEQ1x1NEVFM1x1NzQwNlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIj5cdTRGOURcdTcxMzZcdTUxRkFcdTczQjBcdTU2RkRcdTUxODVcdTcyNDgvXHU1NkZEXHU5NjQ1XHU3MjQ4XHVGRjFGPC9hPidcbiAgICAgICAgKVxuICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgY29sb3I6ICcjRTg5QUJFJyxcbiAgICAgICAgICAgIHRleHRTaGFkb3c6ICcwLjVweCAwLjFweCAxcHggIzU4MDcwRCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q29uZmlnKHsgc2hvd0d1aWRlVG9HaXRodWI6IGZhbHNlIH0pXG4gICAgICAgICAgfSlcblxuICAgICAgICAkKCcjZXN0X3N3aXRjaCcpLmFwcGVuZCgkYSkuY3NzKCd3aWR0aCcsICdhdXRvJylcbiAgICAgIH0sIDIwMDApXG4gICAgfSkoKVxuICB9KVxuXG4gIGlmICghbG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKCdodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/JykpIHJldHVyblxuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKVxuXG4gICR3KCcjc2JfZm9ybScpLnRoZW4oKCkgPT4ge1xuICAgIHR5cGUgTm90ZSA9IHtcbiAgICAgIGh0bWxfdXJsOiBzdHJpbmdcbiAgICAgIHRpdGxlOiBzdHJpbmdcbiAgICB9IHwgbnVsbFxuICAgIGNhbGxCYWNrZ3JvdW5kKCdnZXROb3RpZmljYXRpb24nKS50aGVuKChub3RlOiBOb3RlKSA9PiB7XG4gICAgICBpZiAoIW5vdGUpIHJldHVyblxuICAgICAgY29uc3QgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpXG4gICAgICBjb25zdCAkZGl2ID0gJCgnPGRpdi8+JykuY3NzKHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1OTA3MjcnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzU4MDcwZCcsXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgekluZGV4OiA5OTk5OSxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrICFpbXBvcnRhbnQnXG4gICAgICB9KVxuICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICRkaXYucmVtb3ZlKClcbiAgICAgICAgJGJvZHkuY3NzKCdwYWRkaW5nLXRvcCcsICcnKVxuICAgICAgfVxuICAgICAgY29uc3QgJGEgPSAkKFxuICAgICAgICBgPGEgc3R5bGU9XCJjb2xvcjojZmZmOyBiYWNrZ3JvdW5kOnVybCgke2Nocm9tZS5ydW50aW1lLmdldFVSTChcbiAgICAgICAgICAnaW1hZ2VzL2JpbmdfMzJ4MzIucG5nJ1xuICAgICAgICApfSkgbm8tcmVwZWF0IGxlZnQgMDsgYmFja2dyb3VuZC1zaXplOiAxMnB4OyBwYWRkaW5nLWlubGluZS1zdGFydDogMjBweFwiIGhyZWY9XCIke1xuICAgICAgICAgIG5vdGUuaHRtbF91cmxcbiAgICAgICAgfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIj4ke25vdGUudGl0bGV9PC9hPmBcbiAgICAgICkub24oJ2NsaWNrJywgY2xvc2UpXG4gICAgICBjb25zdCAkY2xvc2UgPSAkKFxuICAgICAgICAnPGEgaHJlZj1cIiNcIiBzdHlsZT1cImJhY2tncm91bmQ6IzU4MDcwZDsgY29sb3I6I2ZmZjsgY3Vyc29yOnBvaW50ZXI7cGFkZGluZzogMCA2OHB4IDAgMThweDtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6MFwiIHRpdGxlPVwibm8gcmVtaW5kZXJcIj5cdTI3MTU8L2E+J1xuICAgICAgKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uZmlybSgnQXJlIHlvdSBzdXJlIG5ldmVyIHNlZSB0aGlzIG5vdGljZSBhZ2Fpbj8nKSAmJiBjYWxsQmFja2dyb3VuZCgnaGlkZU5vdGlmaWNhdGlvbicpXG4gICAgICAgIGNsb3NlKClcbiAgICAgIH0pXG4gICAgICAkZGl2LmFwcGVuZCgkYSkuYXBwZW5kKCRjbG9zZSlcbiAgICAgICRib2R5LmFwcGVuZCgkZGl2KS5jc3MoJ3BhZGRpbmctdG9wJywgNDApXG4gICAgfSlcblxuICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2NsaWNrJywgJ2EuYl9sb2dvQXJlYScsIChlKSA9PiB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgJHRoaXMuYXR0cignaHJlZicsICcvJykuYXR0cigndGFyZ2V0JywgJ19zZWxmJylcbiAgICB9KVxuXG4gICAgaWYgKCFjb25maWcuc2hvd0dvb2dsZUJ1dHRvbk9uQmluZykgcmV0dXJuXG5cbiAgICBjb25zdCAkcSA9ICQoJyNzYl9mb3JtX3EnKVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5OiBzdHJpbmcgPSAkcS52YWwoKSBhcyBzdHJpbmdcblxuICAgIGNvbnN0ICRhID0gJChgXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgZXNjYXBlSHRtbChzZWFyY2hRdWVyeSlcbiAgICAgICl9XCIgdGFyZ2V0PVwiZ29vZ2xlXCIgdGFiaW5kZXg9XCIxMFwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0aXRsZT1cInNlYXJjaCB3aXRoIEdvb2dsZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Y2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvZ29vZ2xlLnBuZycpfVwiIGFsdD1cImdvb2dsZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7ZGlzcGxheTogYmxvY2s7XCI+XG4gICAgICA8L2E+YCkuY3NzKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoOiAnNzBweCcsXG4gICAgICBoZWlnaHQ6ICcyM3B4JyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgJ3otaW5kZXgnOiA5OTksXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIC4zcycsXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgkezgzNSAtIChpc1J0bCA/IDkyNSA6IDApfXB4LCAxM3B4LCAwcHgpYCxcbiAgICAgICd3aWxsLWNoYW5nZSc6ICd0cmFuc2Zvcm0nLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9KVxuXG4gICAgJCgnI3NiX2Zvcm0nKS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJykucHJlcGVuZCgkYSlcblxuICAgICRhLm9uKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBsZXQgdmFsID0gJydcbiAgICAgIC8vIGlmICgkKCcjYi1zY29wZUxpc3RJdGVtLWNvbnYnKS5oYXNDbGFzcygnYl9hY3RpdmUnKSkge1xuICAgICAgLy8gICB2YWwgPSAoJCgnI3NlYXJjaGJveCcpLnZhbCgpID8/ICcnKS50cmltKClcbiAgICAgIC8vIH1cbiAgICAgIGlmICghdmFsKSB7XG4gICAgICAgIHZhbCA9IFN0cmluZygkcS52YWwoKSkudHJpbSgpXG4gICAgICB9XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWwpfWBcbiAgICAgICR0aGlzLmF0dHIoJ2hyZWYnLCB1cmwpXG4gICAgICBhd2FpdCBvcGVuVXJsSW5TYW1lVGFiKHVybClcbiAgICB9KVxuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnc2hvd2NvbnY9MScpKSB7XG4gICAgICAkYS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJGEuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpXG4gICAgICB9LCAxMjAwKVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUdvb2dsZUxpbmtQb3NpdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0ICRjb252ID0gJCgnI2Itc2NvcGVMaXN0SXRlbS1jb252JylcbiAgICAgIGNvbnN0IGlzTmV3QmluZ09wZW4gPSAkY29udi5oYXNDbGFzcygnYl9hY3RpdmUnKVxuICAgICAgaWYgKGlzTmV3QmluZ09wZW4pIHtcbiAgICAgICAgbGV0IGxlZnQgPSAwXG4gICAgICAgIGlmICgkY29udi5vZmZzZXQoKSEubGVmdCkge1xuICAgICAgICAgIGxlZnQgPSAkY29udi5vZmZzZXQoKSEubGVmdCArICRjb252LndpZHRoKCkhICsgMzBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0ID0gMzUwXG4gICAgICAgIH1cblxuICAgICAgICAkYS5jc3Moe1xuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7bGVmdCAtIChpc1J0bCA/IDkyNSA6IDApfXB4LCAxNXB4LCAwKWBcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRhLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHs4MzUgLSAoaXNSdGwgPyA5MjUgOiAwKX1weCwgMTVweCwgMClgXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOZXdCaW5nT3BlbiAmJiAkKCcuYl9zZWFyY2hib3hGb3JtJykuaGFzQ2xhc3MoJ2FzX3JzZm9ybScpKSB7XG4gICAgICAgICRhLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHsxMTU1IC0gKGlzUnRsID8gLTk5OTk5IDogMCl9cHgsIDE1cHgsIDApYFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUdvb2dsZUxpbmtQb3NpdGlvbigpXG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgX29ic2VydmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXRcbiAgICAgICAgaWYgKCF0YXJnZXQpIGNvbnRpbnVlXG4gICAgICAgIGlmICgodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCA9PT0gJ2Itc2NvcGVMaXN0SXRlbS1jb252Jykge1xuICAgICAgICAgIGNoYW5nZUdvb2dsZUxpbmtQb3NpdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYl9zZWFyY2hib3hGb3JtJykpIHtcbiAgICAgICAgICBjaGFuZ2VHb29nbGVMaW5rUG9zaXRpb24oKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYl9oZWFkZXInKSEsIG11dGF0aW9uQ29uZmlnKVxuICB9KVxufVxuIiwgImltcG9ydCB7IGNhbGxCYWNrZ3JvdW5kIH0gZnJvbSAnQEAvdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBvcGVuVXJsSW5TYW1lVGFiID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGNhbGxCYWNrZ3JvdW5kKCdvcGVuVXJsSW5TYW1lVGFiJywgW3sgdXJsIH1dKVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gY29uc29sZS5lcnJvcihlKVxuICAgIGxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXV0YXRpb25Db25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9XG5cbmNvbnN0ICQgPSAocywgcGFyZW50ID0gZG9jdW1lbnQpID0+IHBhcmVudC5xdWVyeVNlbGVjdG9yKHMpXG5cbmV4cG9ydCBjb25zdCAkdyA9IGFzeW5jIChkb21TZWxlY3Rvcjogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSAzMCAvKiBzZWNvbmQgKi8sIHBhcmVudCA9IGRvY3VtZW50KTogUHJvbWlzZTxFbGVtZW50PiA9PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0ICRkb20gPSAkKGRvbVNlbGVjdG9yLCBwYXJlbnQpXG4gICAgaWYgKCRkb20pIHtcbiAgICAgIHJlc29sdmUoJGRvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKF9tdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG4gICAgICBjb25zdCAkZG9tID0gJChkb21TZWxlY3RvciwgcGFyZW50KVxuICAgICAgaWYgKCRkb20pIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICAgIHJlc29sdmUoJGRvbSlcbiAgICAgIH1cbiAgICB9KVxuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIG11dGF0aW9uQ29uZmlnKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCAkZG9tID0gJChkb21TZWxlY3RvciwgcGFyZW50KVxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICByZXNvbHZlKCRkb20pXG4gICAgfSwgdGltZW91dCAqIDEwMDApXG4gIH0pXG59XG4iLCAiaW1wb3J0IHtcbiAgY2hlY2tJc0JhaWR1LFxuICBjaGVja0lzR29vZ2xlLFxuICBjaGVja0lzWWFuZGV4LFxuICAvLyBjaGVja0lzQmluZyxcbiAgLy8gY2hlY2tJc0JyYXZlLFxuICAvLyBjaGVja0lzRHVja2R1Y2tnbyxcbiAgLy8gY2hlY2tJc0Vjb3NpYSxcbiAgLy8gY2hlY2tJc05hdmVyLFxuICAvLyBjaGVja0lzU28sXG4gIC8vIGNoZWNrSXNZYWhvbyxcbiAgdHlwZSBDb25maWdcbn0gZnJvbSAnQEAvdXRpbHMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyAkdyB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IHFzU3RyaW5naWZ5ID0gKHFzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIHFzKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmIChxcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoIXFzW2tleV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1keW5hbWljLWRlbGV0ZVxuICAgICAgICBkZWxldGUgcXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyhxcykudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoX2NvbmZpZzogQ29uZmlnKSA9PiB7XG4gIGNvbnN0IGlzR29vZ2xlID0gY2hlY2tJc0dvb2dsZSgpXG4gIGNvbnN0IGlzQmFpZHUgPSBjaGVja0lzQmFpZHUoKVxuICBjb25zdCBpc1lhbmRleCA9IGNoZWNrSXNZYW5kZXgoKVxuICAvLyBjb25zdCBpc0JpbmcgPSBjaGVja0lzQmluZygpXG4gIC8vIGNvbnN0IGlzU28gPSBjaGVja0lzU28oKVxuICAvLyBjb25zdCBpc0R1Y2tkdWNrZ28gPSBjaGVja0lzRHVja2R1Y2tnbygpXG4gIC8vIGNvbnN0IGlzQnJhdmUgPSBjaGVja0lzQnJhdmUoKVxuICAvLyBjb25zdCBpc0Vjb3NpYSA9IGNoZWNrSXNFY29zaWEoKVxuICAvLyBjb25zdCBpc05hdmVyID0gY2hlY2tJc05hdmVyKClcbiAgLy8gY29uc3QgaXNZYWhvbyA9IGNoZWNrSXNZYWhvbygpXG5cbiAgaWYgKCEoKGlzR29vZ2xlIHx8IGlzQmFpZHUgfHwgaXNZYW5kZXgpIC8qIHx8IGlzQmluZyB8fCAgfHwgaXNTbyB8fCBpc0R1Y2tkdWNrZ28gfHwgaXNOYXZlciB8fCBpc0JyYXZlIHx8IGlzWWFob28gKi8pKSByZXR1cm5cblxuICBsZXQgcHJvbXB0ID0gJydcbiAgbGV0IGRpciA9ICcnXG4gIGxldCBkYXJrbW9kZSA9ICcnXG4gIGNvbnN0IGRvbWFpbiA9IGxvY2F0aW9uLmhvc3RuYW1lXG4gIGlmIChpc0dvb2dsZSkge1xuICAgIHByb21wdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKS5nZXQoJ3EnKSA/PyAnJ1xuICAgIGRpciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXJcbiAgICBkYXJrbW9kZSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjb2xvci1zY2hlbWVcIl0nKSBhcyBIVE1MTWV0YUVsZW1lbnQpPy5jb250ZW50ID09PSAnZGFyaycgPyAnZGFyaycgOiAnJ1xuICB9XG4gIC8vIGlmIChpc0JpbmcpIHtcbiAgLy8gICBwcm9tcHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdxJykgPz8gJydcbiAgLy8gICBkaXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyXG4gIC8vICAgYXdhaXQgJHcoJ2JvZHknKVxuICAvLyAgIGRhcmttb2RlID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHlbY2xhc3MqPVwiYl9kYXJrXCJdJykgYXMgSFRNTEJvZHlFbGVtZW50KSA/ICdkYXJrJyA6ICcnXG4gIC8vIH1cbiAgaWYgKGlzQmFpZHUpIHtcbiAgICBwcm9tcHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkuZ2V0KCd3ZCcpID8/ICcnXG4gIH1cbiAgaWYgKGlzWWFuZGV4KSB7XG4gICAgcHJvbXB0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLmdldCgndGV4dCcpID8/ICcnXG4gICAgZGFya21vZGUgPVxuICAgICAgZG9jdW1lbnQuY29va2llLm1hdGNoKC9za2luXFwuKFtzbGRdKS8pPy5bMV0gPT09ICdkYXJrJyB8fCB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMgPyAnZGFyaycgOiAnJ1xuICB9XG4gIC8vIGlmIChpc1NvKSB7XG4gIC8vICAgcHJvbXB0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLmdldCgncScpID8/ICcnXG4gIC8vIH1cbiAgLy8gaWYgKGlzRHVja2R1Y2tnbykge1xuICAvLyAgIHByb21wdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKS5nZXQoJ3EnKSA/PyAnJ1xuICAvLyAgIGRhcmttb2RlID0gZG9jdW1lbnQuY29va2llLmluY2x1ZGVzKCdhZT1kJykgPyAnZGFyaycgOiAnJ1xuICAvLyB9XG4gIC8vIGlmIChpc0JyYXZlKSB7XG4gIC8vICAgcHJvbXB0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLmdldCgncScpID8/ICcnXG4gIC8vICAgZGFya21vZGUgPSBkb2N1bWVudC5jb29raWUuaW5jbHVkZXMoJ3RoZW1lPWRhcmsnKSA/ICdkYXJrJyA6ICcnXG4gIC8vIH1cbiAgLy8gaWYgKGlzRWNvc2lhKSB7XG4gIC8vICAgcHJvbXB0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLmdldCgncScpID8/ICcnXG4gIC8vIH1cbiAgLy8gaWYgKGlzTmF2ZXIpIHtcbiAgLy8gICBwcm9tcHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdxdWVyeScpID8/ICcnXG4gIC8vIH1cbiAgLy8gaWYgKGlzWWFob28pIHtcbiAgLy8gICBwcm9tcHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdwJykgPz8gJydcbiAgLy8gfVxuXG4gIGNvbnN0IGV4dHJhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5oYXNoLnNsaWNlKDEpKS5nZXQoJ25ldy1iaW5nLWFueXdoZXJlJykgPz8gJydcblxuICBjb25zdCBxcyA9IHtcbiAgICBwcm9tcHQ6IHByb21wdC50cmltKCksXG4gICAgZGlyLFxuICAgIGRhcmttb2RlLFxuICAgIGRvbWFpbixcbiAgICBleHRyYVxuICB9XG5cbiAgY29uc3QgY2hhdElmcmFtZVVybCA9IGNocm9tZS5ydW50aW1lLmdldFVSTChgL2FwcC9pbmRleC5odG1sIy9jaGF0L2lmcmFtZT8ke3FzU3RyaW5naWZ5KHFzKX1gKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgJGlmYW1lID0gJChgPGlmcmFtZSBzcmM9XCIke2NoYXRJZnJhbWVVcmx9XCIgc2Nyb2xsaW5nPVwibm9cIiAvPmApXG4gICAgJGlmYW1lLmNzcyh7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICB3aWxsQ2hhbmdlOiAnaGVpZ2h0JyxcbiAgICAgIHRyYW5zaXRpb246ICdoZWlnaHQgLjFzIGN1YmljLWJlemllcigwLCAwLCAwLCAxLjI3KSAwcycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICB2aXNpYmlsaXR5OiBkYXJrbW9kZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgdHlwZSwgZGF0YSB9ID0gZS5kYXRhXG4gICAgICBpZiAodHlwZSA9PT0gJ25iYS1yZWFkeScpIHtcbiAgICAgICAgJGlmYW1lLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnbmJhLXJlc2l6ZScpIHtcbiAgICAgICAgY29uc3QgeyBoZWlnaHQgfSA9IGRhdGFcbiAgICAgICAgJGlmYW1lLmNzcyh7XG4gICAgICAgICAgLy8gd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBNYXRoLmZsb29yKGhlaWdodCkgKyAxXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChpc0dvb2dsZSkge1xuICAgICAgbGV0ICRzaWRlYmFyXG4gICAgICAkc2lkZWJhciA9ICQoYXdhaXQgJHcoJyNyaHMnLCAxKSlcbiAgICAgIGlmICghJHNpZGViYXIubGVuZ3RoKSB7XG4gICAgICAgICRzaWRlYmFyID0gJCgnPGRpdiBpZD1cInJoc1wiIC8+JykuY3NzKHtcbiAgICAgICAgICAvLyAgbWFyZ2luQm90dG9tOiAnMjBweCcsIG1hcmdpbkxlZnQ6ICczMHB4JywgaGVpZ2h0OiAnZml0LWNvbnRlbnQnXG4gICAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6ICd2YXIoLS1yaHMtbWFyZ2luKScsXG4gICAgICAgICAgZmxleDogJzAgYXV0bycsXG4gICAgICAgICAgd2lkdGg6ICd2YXIoLS1yaHMtd2lkdGgpJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMTVweCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4zcydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGNvbnN0ICRiZXN0Q29udGFpbmVyID0gJChhd2FpdCAkdygnLmxpWUtkZS5nLlZqRExkJywgMC4xKSlcbiAgICAgIGlmICgkYmVzdENvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgICAgJGJlc3RDb250YWluZXIucHJlcGVuZCgkaWZhbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc2lkZWJhci5wcmVwZW5kKCRpZmFtZSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1haW4gPSBhd2FpdCAkdygnI2NlbnRlcl9jb2wnKVxuICAgICAgJHNpZGViYXIuaW5zZXJ0QWZ0ZXIobWFpbilcbiAgICAgICQobWFpbikuYWZ0ZXIoJHNpZGViYXIpXG4gICAgfVxuXG4gICAgLy8gaWYgKGlzQmluZykge1xuICAgIC8vICAgY29uc3QgJHNpZGViYXIgPSBhd2FpdCAkdygnI2JfY29udGV4dCcpXG4gICAgLy8gICAkKCc8bGkgY2xhc3M9XCJiX2Fuc1wiIHN0eWxlPVwicGFkZGluZzowO21hcmdpbi1ib3R0b206NXB4XCIgLz4nKS5wcmVwZW5kVG8oJHNpZGViYXIpLmFwcGVuZCgkaWZhbWUpXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzQmFpZHUpIHtcbiAgICAgIGNvbnN0ICRzaWRlYmFyID0gJChhd2FpdCAkdygnI2NvbnRlbnRfcmlnaHQnKSlcbiAgICAgICRzaWRlYmFyLnByZXBlbmQoJGlmYW1lKVxuICAgIH1cblxuICAgIGlmIChpc1lhbmRleCkge1xuICAgICAgY29uc3QgJHNpZGViYXIgPSAkKGF3YWl0ICR3KCcuY29udGVudF9fcmlnaHQnKSlcbiAgICAgICRzaWRlYmFyLnByZXBlbmQoJGlmYW1lKVxuICAgIH1cblxuICAgIC8vIGlmIChpc1NvKSB7XG4gICAgLy8gICBjb25zdCAkc2lkZWJhciA9ICQoYXdhaXQgJHcoJyNzaWRlJykpXG4gICAgLy8gICAkc2lkZWJhci5wcmVwZW5kKCRpZmFtZSlcbiAgICAvLyB9XG5cbiAgICAvLyBpZiAoaXNEdWNrZHVja2dvKSB7XG4gICAgLy8gICBjb25zdCAkc2lkZWJhciA9ICQoYXdhaXQgJHcoJ1tkYXRhLWFyZWE9XCJzaWRlYmFyXCJdJykpXG4gICAgLy8gICAkc2lkZWJhci5wcmVwZW5kKCRpZmFtZSlcbiAgICAvLyB9XG5cbiAgICAvLyBpZiAoaXNOYXZlcikge1xuICAgIC8vICAgY29uc3QgJHNpZGViYXIgPSAkKGF3YWl0ICR3KCcjc3ViX3BhY2snKSlcbiAgICAvLyAgICRzaWRlYmFyLnByZXBlbmQoXG4gICAgLy8gICAgICRpZmFtZS5jc3Moe1xuICAgIC8vICAgICAgIG1hcmdpbjogJzAgMCAxOHB4IDE2cHgnLFxuICAgIC8vICAgICAgICdwYWRkaW5nLWlubGluZS1lbmQnOiAnNDZweCdcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIClcbiAgICAvLyB9XG5cbiAgICAvLyBpZiAoaXNCcmF2ZSkge1xuICAgIC8vICAgY29uc3QgJHNpZGViYXIgPSAkKGF3YWl0ICR3KCcjc2lkZS1yaWdodCcpKVxuICAgIC8vICAgJHNpZGViYXIucHJlcGVuZCgkaWZhbWUpXG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKGlzWWFob28pIHtcbiAgICAvLyAgIGlmIChkb21haW4gPT09ICdzZWFyY2gueWFob28uY28uanAnKSB7XG4gICAgLy8gICAgICQoYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgIGNvbnN0ICRzaWRlYmFyID0gJChhd2FpdCAkdygnI2NvbnRlbnRzX193cmFwIC5Db250ZW50c19faW5uZXJTdWJHcm91cEJvZHknKSlcbiAgICAvLyAgICAgICAkc2lkZWJhci5wcmVwZW5kKCRpZmFtZS5jc3MoeyB3aWR0aDogNDQyLCBtYXJnaW5Cb3R0b206IDEwIH0pKVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgY29uc3QgJHNpZGViYXIgPSAkKGF3YWl0ICR3KCcjcmlnaHQnKSlcbiAgICAvLyAgICAgJHNpZGViYXIucHJlcGVuZCgkaWZhbWUpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9IGNhdGNoIHt9XG59XG4iLCAiaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnQEAvdXRpbHMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyAkdywgb3BlblVybEluU2FtZVRhYiB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKClcbiAgaWYgKCFjb25maWcuc2hvd0JpbmdCdXR0b25Pbkdvb2dsZSkgcmV0dXJuXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZSAhPT0gJy9zZWFyY2gnKSByZXR1cm5cbiAgY29uc3QgaXNSdGwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuICAkdygnW2FjdGlvbj1cIi9zZWFyY2hcIl0nKS50aGVuKChmb3JtKSA9PiB7XG4gICAgaWYgKCFmb3JtKSByZXR1cm5cbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybSlcbiAgICBjb25zdCAkcSA9ICRmb3JtLmZpbmQoJ1tuYW1lPVwicVwiXScpXG4gICAgY29uc3QgJHN1Ym1pdCA9ICRmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJylcblxuICAgIGNvbnN0ICRhID0gJChgXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9QmluZytBSSZzaG93Y29udj0xXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cImJpbmdcIiB0aXRsZT1cInNlYXJjaCB3aXRoIE5ldyBCaW5nXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9iaW5nLWNoYXQucG5nJyl9XCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweFwiIGFsdD1cImJpbmdcIiAvPlxuICAgICAgPC9hPmApLmNzcyh7XG4gICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAnei1pbmRleCc6IDkwMCxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICBtYXJnaW46ICctMnB4IDEwcHggMCAtMTBweCcsXG4gICAgICAuLi4oaXNSdGxcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogJy0xMHB4JyxcbiAgICAgICAgICAgIG1hcmdpbklubGluZUVuZDogJzEwcHgnXG4gICAgICAgICAgfVxuICAgICAgICA6IG51bGwpXG4gICAgfSlcblxuICAgICRzdWJtaXQuYWZ0ZXIoJGEpXG4gICAgJGEub24oJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudCgkcS52YWwoKSl9JnNob3djb252PTFgXG4gICAgICAkdGhpcy5hdHRyKCdocmVmJywgdXJsKVxuICAgICAgYXdhaXQgb3BlblVybEluU2FtZVRhYih1cmwp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LElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFFTyxNQUFNLGlCQUFpQjtBQUFBLElBQzVCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJ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QUNiLFVBQU0sWUFBWUEsR0FBRSxTQUFTLGVBQWU7QUFDNUMsUUFBSSxVQUFVLEtBQUssY0FBYyxhQUFhLElBQUksRUFBRTtBQUFRO0FBQzVELFVBQU0sUUFBUUEsR0FBRSxlQUFlLGFBQWEsTUFBTTtBQUVsRCxjQUFVLFFBQVEsS0FBSztBQUV2QixtQkFBZSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7QUFDckMsWUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPO0FBQUEsSUFDbkMsQ0FBQztBQUVELGNBQVUsRUFBRSxLQUFLLENBQUMsV0FBVztBQUMzQixVQUFJLE9BQU8sVUFBVTtBQUNuQiw2QkFBWSxNQUFNO0FBQUEsTUFDcEI7QUFBQSxJQUNGLENBQUM7QUFFRCxRQUFJLFNBQVMsYUFBYSxnQkFBZ0I7QUFDeEMsMkJBQVk7QUFBQSxJQUNkO0FBRUEsUUFBSSxjQUFjLEdBQUc7QUFDbkIsNkJBQWM7QUFBQSxJQUNoQjtBQUFBLEVBQ0YsR0FBRyxlQUFBQSxPQUFDOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3ciLCAiaXNGdW5jdGlvbiIsICJpc1dpbmRvdyIsICJkb2N1bWVudCIsICJ2ZXJzaW9uIiwgImFyciIsICJwdXNoIiwgImRvY3VtZW50RWxlbWVudCIsICJycXVpY2tFeHByIiwgImkiLCAibWF0Y2hlcyIsICJub2RlIiwgImRpciIsICJmaW5kIiwgImVsZW0iLCAidmFsdWUiLCAiZGVmZXJyZWQiLCAiZGF0YSIsICJub2RlTmFtZSIsICJuYW1lIiwgImluZGV4IiwgImxlbmd0aCIsICJsb2NhdGlvbiIsICJ2YWwiLCAiY29tcGxldGVkIiwgIm1ldGhvZCIsICJ0eXBlIiwgInZlcnNpb24iLCAiaW1wb3J0X2pxdWVyeSIsICJvYnNlcnZlciIsICIkZG9tIiwgImRvY3VtZW50IiwgIiQiLCAiJGEiLCAiaW1wb3J0X2pxdWVyeSIsICIkIiwgImltcG9ydF9qcXVlcnkiLCAiJCIsICIkIl0KfQo=
