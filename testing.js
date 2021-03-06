//Reference this script in your HTML to see testing suite on-page.
var FCC_Global = function(e) {
  var t = {};

  function a(r) {
    if (t[r]) return t[r].exports;
    var n = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(n.exports, n, n.exports, a), n.l = !0, n.exports
  }
  return a.m = e, a.c = t, a.d = function(e, t, r) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, a.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, a.t = function(e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (a.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var n in e) a.d(r, n, function(t) {
        return e[t]
      }.bind(null, n));
    return r
  }, a.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return a.d(t, "a", t), t
  }, a.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, a.p = "", a(a.s = 76)
}([function(e, t, a) {
  e.exports = a(75)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.d3ProjectStackNoAxes = t.d3ProjectStack = t.frontEndLibrariesStack = t.responsiveWebDesignStack = void 0;
  t.responsiveWebDesignStack = "1. You can use HTML, JavaScript, and CSS to complete this project. Plain CSS is recommended because that is what the lessons have covered so far and you should get some practice with plain CSS. You can use Bootstrap or SASS if you choose. Additional technologies (just for example jQuery, React, Angular, or Vue) are not recommended for this project, and using them is at your own risk. Other projects will give you a chance to work with different technology stacks like React. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!";
  t.frontEndLibrariesStack = "1. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!";
  t.d3ProjectStack = "1. You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://github.com/d3/d3/blob/master/API.md#axes-d3-axis. Required (non-virtual) DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.";
  t.d3ProjectStackNoAxes = "1. You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. Required (non-virtual) DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects."
}, function(e, t) {
  /*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t, a) {
    var r = e.__flags || (e.__flags = Object.create(null));
    if (3 !== arguments.length) return r[t];
    r[t] = a
  }
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.testHorizontallyCentered = function(e, t) {
    var a = t.document.getElementById(e).getBoundingClientRect(),
      r = a.left,
      n = t.innerWidth - a.right;
    return Math.abs(r - n) < 20
  }, t.clickButtonsById = function(e) {
    (t = e, t.map(function(e) {
      return document.getElementById(e)
    })).forEach(function(e) {
      e && "function" == typeof e.click && e.click()
    });
    var t
  }, t.hasUniqueColorsCount = function(e, t) {
    for (var a = [], r = 0; r < e.length; r++) {
      var n = e[r].style.fill || e[r].getAttribute("fill");
      if (n && -1 === a.indexOf(n) && a.push(n), a.length >= t) return !0
    }
    return !1
  }
}, function(e, t) {
  e.exports = {
    includeStack: !1,
    showDiff: !0,
    truncateThreshold: 40
  }
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.testToolTip = function(e, t, a) {
    describe("#TooltipTests", function() {
      it('1. I can mouse over an area and see a tooltip with a corresponding\n    id="tooltip" which displays more information about the area ', function() {
        var t, a = i(e.length),
          r = document.getElementById("tooltip");
        return this.timeout(3500), n.assert.isNotNull(document.getElementById("tooltip"), 'There should be an element with id="tooltip"'), h(t = e[a], "mouseover"), h(t, "mousemove"), h(t, "mouseenter"), new Promise(function(e, a) {
          setTimeout(function() {
            o(r) && a(new Error("Tooltip should be visible when mouse is on an area")), h(t, "mouseout"), setTimeout(function() {
              o(r) ? e() : a(new Error("Tooltip should be hidden when mouse is not on an area"))
            }, 2e3)
          }, 500)
        })
      }), it('2. My tooltip should have a "'.concat(t, '" property that\n    corresponds to the "').concat(a, '" of the active area.'), function() {
        var r, s = document.getElementById("tooltip"),
          o = i(e.length);
        n.assert.isNotNull(s.getAttribute(t), 'Could not find property "'.concat(t, '" in tooltip ')), h(r = e[o], "mouseover"), h(r, "mousemove"), h(r, "mouseenter"), n.assert.equal(s.getAttribute(t), r.getAttribute(a), "Tooltip's \"".concat(t, '" property should be equal to the ') + "active area's \"".concat(a, '" property')), h(r, "mouseout")
      })
    })
  };
  var r, n = a(0),
    s = (r = a(6)) && r.__esModule ? r : {
      default: r
    };

  function o(e) {
    return (0, s.default)(e).is(":hidden") || "0" === e.style.opacity || "hidden" === e.style.visibility
  }

  function i(e) {
    return Math.floor(Math.random() * e)
  }

  function h(e, t) {
    var a;
    document.createEvent ? (a = document.createEvent("MouseEvent")).initMouseEvent(t, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null) : a = new MouseEvent(t), e.dispatchEvent(a)
  }
}, function(e, t, a) {
  var r;
  /*!
   * jQuery JavaScript Library v3.3.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2018-01-20T17:24Z
   */
  /*!
   * jQuery JavaScript Library v3.3.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2018-01-20T17:24Z
   */
  ! function(t, a) {
    "use strict";
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? a(t, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return a(e)
    } : a(t)
  }("undefined" != typeof window ? window : this, function(a, n) {
    "use strict";
    var s = [],
      o = a.document,
      i = Object.getPrototypeOf,
      h = s.slice,
      l = s.concat,
      c = s.push,
      u = s.indexOf,
      f = {},
      p = f.toString,
      m = f.hasOwnProperty,
      g = m.toString,
      d = g.call(Object),
      y = {},
      b = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
      },
      C = function(e) {
        return null != e && e === e.window
      },
      O = {
        type: !0,
        src: !0,
        noModule: !0
      };

    function H(e, t, a) {
      var r, n = (t = t || o).createElement("script");
      if (n.text = e, a)
        for (r in O) a[r] && (n[r] = a[r]);
      t.head.appendChild(n).parentNode.removeChild(n)
    }

    function _(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
    }
    var v = function(e, t) {
        return new v.fn.init(e, t)
      },
      w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function A(e) {
      var t = !!e && "length" in e && e.length,
        a = _(e);
      return !b(e) && !C(e) && ("array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    v.fn = v.prototype = {
      jquery: "3.3.1",
      constructor: v,
      length: 0,
      toArray: function() {
        return h.call(this)
      },
      get: function(e) {
        return null == e ? h.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
        var t = v.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function(e) {
        return v.each(this, e)
      },
      map: function(e) {
        return this.pushStack(v.map(this, function(t, a) {
          return e.call(t, a, t)
        }))
      },
      slice: function() {
        return this.pushStack(h.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          a = +e + (e < 0 ? t : 0);
        return this.pushStack(a >= 0 && a < t ? [this[a]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: c,
      sort: s.sort,
      splice: s.splice
    }, v.extend = v.fn.extend = function() {
      var e, t, a, r, n, s, o = arguments[0] || {},
        i = 1,
        h = arguments.length,
        l = !1;
      for ("boolean" == typeof o && (l = o, o = arguments[i] || {}, i++), "object" == typeof o || b(o) || (o = {}), i === h && (o = this, i--); i < h; i++)
        if (null != (e = arguments[i]))
          for (t in e) a = o[t], o !== (r = e[t]) && (l && r && (v.isPlainObject(r) || (n = Array.isArray(r))) ? (n ? (n = !1, s = a && Array.isArray(a) ? a : []) : s = a && v.isPlainObject(a) ? a : {}, o[t] = v.extend(l, s, r)) : void 0 !== r && (o[t] = r));
      return o
    }, v.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, a;
        return !(!e || "[object Object]" !== p.call(e)) && (!(t = i(e)) || "function" == typeof(a = m.call(t, "constructor") && t.constructor) && g.call(a) === d)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function(e) {
        H(e)
      },
      each: function(e, t) {
        var a, r = 0;
        if (A(e))
          for (a = e.length; r < a && !1 !== t.call(e[r], r, e[r]); r++);
        else
          for (r in e)
            if (!1 === t.call(e[r], r, e[r])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(w, "")
      },
      makeArray: function(e, t) {
        var a = t || [];
        return null != e && (A(Object(e)) ? v.merge(a, "string" == typeof e ? [e] : e) : c.call(a, e)), a
      },
      inArray: function(e, t, a) {
        return null == t ? -1 : u.call(t, e, a)
      },
      merge: function(e, t) {
        for (var a = +t.length, r = 0, n = e.length; r < a; r++) e[n++] = t[r];
        return e.length = n, e
      },
      grep: function(e, t, a) {
        for (var r = [], n = 0, s = e.length, o = !a; n < s; n++) !t(e[n], n) !== o && r.push(e[n]);
        return r
      },
      map: function(e, t, a) {
        var r, n, s = 0,
          o = [];
        if (A(e))
          for (r = e.length; s < r; s++) null != (n = t(e[s], s, a)) && o.push(n);
        else
          for (s in e) null != (n = t(e[s], s, a)) && o.push(n);
        return l.apply([], o)
      },
      guid: 1,
      support: y
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = s[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      f["[object " + t + "]"] = t.toLowerCase()
    });
    var T =
      /*!
       * Sizzle CSS Selector Engine v2.3.3
       * https://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2016-08-08
       */
      function(e) {
        var t, a, r, n, s, o, i, h, l, c, u, f, p, m, g, d, y, b, C, O = "sizzle" + 1 * new Date,
          H = e.document,
          _ = 0,
          v = 0,
          w = oe(),
          A = oe(),
          T = oe(),
          x = function(e, t) {
            return e === t && (u = !0), 0
          },
          M = {}.hasOwnProperty,
          N = [],
          S = N.pop,
          k = N.push,
          I = N.push,
          E = N.slice,
          L = function(e, t) {
            for (var a = 0, r = e.length; a < r; a++)
              if (e[a] === t) return a;
            return -1
          },
          B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          P = "[\\x20\\t\\r\\n\\f]",
          D = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          W = "\\[" + P + "*(" + D + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + D + "))|)" + P + "*\\]",
          q = ":(" + D + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
          R = new RegExp(P + "+", "g"),
          j = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
          K = new RegExp("^" + P + "*," + P + "*"),
          G = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
          F = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
          Y = new RegExp(q),
          V = new RegExp("^" + D + "$"),
          X = {
            ID: new RegExp("^#(" + D + ")"),
            CLASS: new RegExp("^\\.(" + D + ")"),
            TAG: new RegExp("^(" + D + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + B + ")$", "i"),
            needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
          },
          U = /^(?:input|select|textarea|button)$/i,
          z = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          Z = /[+~]/,
          Q = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
          ee = function(e, t, a) {
            var r = "0x" + t - 65536;
            return r != r || a ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
          },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ae = function(e, t) {
            return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          re = function() {
            f()
          },
          ne = be(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e)
          }, {
            dir: "parentNode",
            next: "legend"
          });
        try {
          I.apply(N = E.call(H.childNodes), H.childNodes), N[H.childNodes.length].nodeType
        } catch (e) {
          I = {
            apply: N.length ? function(e, t) {
              k.apply(e, E.call(t))
            } : function(e, t) {
              for (var a = e.length, r = 0; e[a++] = t[r++];);
              e.length = a - 1
            }
          }
        }

        function se(e, t, r, n) {
          var s, i, l, c, u, m, y, b = t && t.ownerDocument,
            _ = t ? t.nodeType : 9;
          if (r = r || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return r;
          if (!n && ((t ? t.ownerDocument || t : H) !== p && f(t), t = t || p, g)) {
            if (11 !== _ && (u = $.exec(e)))
              if (s = u[1]) {
                if (9 === _) {
                  if (!(l = t.getElementById(s))) return r;
                  if (l.id === s) return r.push(l), r
                } else if (b && (l = b.getElementById(s)) && C(t, l) && l.id === s) return r.push(l), r
              } else {
                if (u[2]) return I.apply(r, t.getElementsByTagName(e)), r;
                if ((s = u[3]) && a.getElementsByClassName && t.getElementsByClassName) return I.apply(r, t.getElementsByClassName(s)), r
              }
            if (a.qsa && !T[e + " "] && (!d || !d.test(e))) {
              if (1 !== _) b = t, y = e;
              else if ("object" !== t.nodeName.toLowerCase()) {
                for ((c = t.getAttribute("id")) ? c = c.replace(te, ae) : t.setAttribute("id", c = O), i = (m = o(e)).length; i--;) m[i] = "#" + c + " " + ye(m[i]);
                y = m.join(","), b = Z.test(e) && ge(t.parentNode) || t
              }
              if (y) try {
                return I.apply(r, b.querySelectorAll(y)), r
              } catch (e) {} finally {
                c === O && t.removeAttribute("id")
              }
            }
          }
          return h(e.replace(j, "$1"), t, r, n)
        }

        function oe() {
          var e = [];
          return function t(a, n) {
            return e.push(a + " ") > r.cacheLength && delete t[e.shift()], t[a + " "] = n
          }
        }

        function ie(e) {
          return e[O] = !0, e
        }

        function he(e) {
          var t = p.createElement("fieldset");
          try {
            return !!e(t)
          } catch (e) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function le(e, t) {
          for (var a = e.split("|"), n = a.length; n--;) r.attrHandle[a[n]] = t
        }

        function ce(e, t) {
          var a = t && e,
            r = a && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (a)
            for (; a = a.nextSibling;)
              if (a === t) return -1;
          return e ? 1 : -1
        }

        function ue(e) {
          return function(t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e
          }
        }

        function fe(e) {
          return function(t) {
            var a = t.nodeName.toLowerCase();
            return ("input" === a || "button" === a) && t.type === e
          }
        }

        function pe(e) {
          return function(t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ne(t) === e : t.disabled === e : "label" in t && t.disabled === e
          }
        }

        function me(e) {
          return ie(function(t) {
            return t = +t, ie(function(a, r) {
              for (var n, s = e([], a.length, t), o = s.length; o--;) a[n = s[o]] && (a[n] = !(r[n] = a[n]))
            })
          })
        }

        function ge(e) {
          return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in a = se.support = {}, s = se.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
          }, f = se.setDocument = function(e) {
            var t, n, o = e ? e.ownerDocument || e : H;
            return o !== p && 9 === o.nodeType && o.documentElement ? (m = (p = o).documentElement, g = !s(p), H !== p && (n = p.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), a.attributes = he(function(e) {
              return e.className = "i", !e.getAttribute("className")
            }), a.getElementsByTagName = he(function(e) {
              return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
            }), a.getElementsByClassName = J.test(p.getElementsByClassName), a.getById = he(function(e) {
              return m.appendChild(e).id = O, !p.getElementsByName || !p.getElementsByName(O).length
            }), a.getById ? (r.filter.ID = function(e) {
              var t = e.replace(Q, ee);
              return function(e) {
                return e.getAttribute("id") === t
              }
            }, r.find.ID = function(e, t) {
              if (void 0 !== t.getElementById && g) {
                var a = t.getElementById(e);
                return a ? [a] : []
              }
            }) : (r.filter.ID = function(e) {
              var t = e.replace(Q, ee);
              return function(e) {
                var a = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return a && a.value === t
              }
            }, r.find.ID = function(e, t) {
              if (void 0 !== t.getElementById && g) {
                var a, r, n, s = t.getElementById(e);
                if (s) {
                  if ((a = s.getAttributeNode("id")) && a.value === e) return [s];
                  for (n = t.getElementsByName(e), r = 0; s = n[r++];)
                    if ((a = s.getAttributeNode("id")) && a.value === e) return [s]
                }
                return []
              }
            }), r.find.TAG = a.getElementsByTagName ? function(e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : a.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
              var a, r = [],
                n = 0,
                s = t.getElementsByTagName(e);
              if ("*" === e) {
                for (; a = s[n++];) 1 === a.nodeType && r.push(a);
                return r
              }
              return s
            }, r.find.CLASS = a.getElementsByClassName && function(e, t) {
              if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, y = [], d = [], (a.qsa = J.test(p.querySelectorAll)) && (he(function(e) {
              m.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && d.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || d.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + O + "-]").length || d.push("~="), e.querySelectorAll(":checked").length || d.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || d.push(".#.+[+~]")
            }), he(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = p.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && d.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && d.push(":enabled", ":disabled"), m.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            })), (a.matchesSelector = J.test(b = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && he(function(e) {
              a.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), y.push("!=", q)
            }), d = d.length && new RegExp(d.join("|")), y = y.length && new RegExp(y.join("|")), t = J.test(m.compareDocumentPosition), C = t || J.test(m.contains) ? function(e, t) {
              var a = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(a.contains ? a.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
              if (t)
                for (; t = t.parentNode;)
                  if (t === e) return !0;
              return !1
            }, x = t ? function(e, t) {
              if (e === t) return u = !0, 0;
              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !a.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === H && C(H, e) ? -1 : t === p || t.ownerDocument === H && C(H, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
              if (e === t) return u = !0, 0;
              var a, r = 0,
                n = e.parentNode,
                s = t.parentNode,
                o = [e],
                i = [t];
              if (!n || !s) return e === p ? -1 : t === p ? 1 : n ? -1 : s ? 1 : c ? L(c, e) - L(c, t) : 0;
              if (n === s) return ce(e, t);
              for (a = e; a = a.parentNode;) o.unshift(a);
              for (a = t; a = a.parentNode;) i.unshift(a);
              for (; o[r] === i[r];) r++;
              return r ? ce(o[r], i[r]) : o[r] === H ? -1 : i[r] === H ? 1 : 0
            }, p) : p
          }, se.matches = function(e, t) {
            return se(e, null, null, t)
          }, se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && f(e), t = t.replace(F, "='$1']"), a.matchesSelector && g && !T[t + " "] && (!y || !y.test(t)) && (!d || !d.test(t))) try {
              var r = b.call(e, t);
              if (r || a.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return se(t, p, null, [e]).length > 0
          }, se.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && f(e), C(e, t)
          }, se.attr = function(e, t) {
            (e.ownerDocument || e) !== p && f(e);
            var n = r.attrHandle[t.toLowerCase()],
              s = n && M.call(r.attrHandle, t.toLowerCase()) ? n(e, t, !g) : void 0;
            return void 0 !== s ? s : a.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
          }, se.escape = function(e) {
            return (e + "").replace(te, ae)
          }, se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
          }, se.uniqueSort = function(e) {
            var t, r = [],
              n = 0,
              s = 0;
            if (u = !a.detectDuplicates, c = !a.sortStable && e.slice(0), e.sort(x), u) {
              for (; t = e[s++];) t === e[s] && (n = r.push(s));
              for (; n--;) e.splice(r[n], 1)
            }
            return c = null, e
          }, n = se.getText = function(e) {
            var t, a = "",
              r = 0,
              s = e.nodeType;
            if (s) {
              if (1 === s || 9 === s || 11 === s) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) a += n(e)
              } else if (3 === s || 4 === s) return e.nodeValue
            } else
              for (; t = e[r++];) a += n(t);
            return a
          }, (r = se.selectors = {
            cacheLength: 50,
            createPseudo: ie,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0
              },
              " ": {
                dir: "parentNode"
              },
              "+": {
                dir: "previousSibling",
                first: !0
              },
              "~": {
                dir: "previousSibling"
              }
            },
            preFilter: {
              ATTR: function(e) {
                return e[1] = e[1].replace(Q, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function(e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
              },
              PSEUDO: function(e) {
                var t, a = !e[6] && e[2];
                return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : a && Y.test(a) && (t = o(a, !0)) && (t = a.indexOf(")", a.length - t) - a.length) && (e[0] = e[0].slice(0, t), e[2] = a.slice(0, t)), e.slice(0, 3))
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(Q, ee).toLowerCase();
                return "*" === e ? function() {
                  return !0
                } : function(e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
              },
              CLASS: function(e) {
                var t = w[e + " "];
                return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && w(e, function(e) {
                  return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                })
              },
              ATTR: function(e, t, a) {
                return function(r) {
                  var n = se.attr(r, e);
                  return null == n ? "!=" === t : !t || (n += "", "=" === t ? n === a : "!=" === t ? n !== a : "^=" === t ? a && 0 === n.indexOf(a) : "*=" === t ? a && n.indexOf(a) > -1 : "$=" === t ? a && n.slice(-a.length) === a : "~=" === t ? (" " + n.replace(R, " ") + " ").indexOf(a) > -1 : "|=" === t && (n === a || n.slice(0, a.length + 1) === a + "-"))
                }
              },
              CHILD: function(e, t, a, r, n) {
                var s = "nth" !== e.slice(0, 3),
                  o = "last" !== e.slice(-4),
                  i = "of-type" === t;
                return 1 === r && 0 === n ? function(e) {
                  return !!e.parentNode
                } : function(t, a, h) {
                  var l, c, u, f, p, m, g = s !== o ? "nextSibling" : "previousSibling",
                    d = t.parentNode,
                    y = i && t.nodeName.toLowerCase(),
                    b = !h && !i,
                    C = !1;
                  if (d) {
                    if (s) {
                      for (; g;) {
                        for (f = t; f = f[g];)
                          if (i ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                        m = g = "only" === e && !m && "nextSibling"
                      }
                      return !0
                    }
                    if (m = [o ? d.firstChild : d.lastChild], o && b) {
                      for (C = (p = (l = (c = (u = (f = d)[O] || (f[O] = {}))[f.uniqueID] || (u[f.uniqueID] = {}))[e] || [])[0] === _ && l[1]) && l[2], f = p && d.childNodes[p]; f = ++p && f && f[g] || (C = p = 0) || m.pop();)
                        if (1 === f.nodeType && ++C && f === t) {
                          c[e] = [_, p, C];
                          break
                        }
                    } else if (b && (C = p = (l = (c = (u = (f = t)[O] || (f[O] = {}))[f.uniqueID] || (u[f.uniqueID] = {}))[e] || [])[0] === _ && l[1]), !1 === C)
                      for (;
                        (f = ++p && f && f[g] || (C = p = 0) || m.pop()) && ((i ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++C || (b && ((c = (u = f[O] || (f[O] = {}))[f.uniqueID] || (u[f.uniqueID] = {}))[e] = [_, C]), f !== t)););
                    return (C -= n) === r || C % r == 0 && C / r >= 0
                  }
                }
              },
              PSEUDO: function(e, t) {
                var a, n = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                return n[O] ? n(t) : n.length > 1 ? (a = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ie(function(e, a) {
                  for (var r, s = n(e, t), o = s.length; o--;) e[r = L(e, s[o])] = !(a[r] = s[o])
                }) : function(e) {
                  return n(e, 0, a)
                }) : n
              }
            },
            pseudos: {
              not: ie(function(e) {
                var t = [],
                  a = [],
                  r = i(e.replace(j, "$1"));
                return r[O] ? ie(function(e, t, a, n) {
                  for (var s, o = r(e, null, n, []), i = e.length; i--;)(s = o[i]) && (e[i] = !(t[i] = s))
                }) : function(e, n, s) {
                  return t[0] = e, r(t, null, s, a), t[0] = null, !a.pop()
                }
              }),
              has: ie(function(e) {
                return function(t) {
                  return se(e, t).length > 0
                }
              }),
              contains: ie(function(e) {
                return e = e.replace(Q, ee),
                  function(t) {
                    return (t.textContent || t.innerText || n(t)).indexOf(e) > -1
                  }
              }),
              lang: ie(function(e) {
                return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(Q, ee).toLowerCase(),
                  function(t) {
                    var a;
                    do {
                      if (a = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (a = a.toLowerCase()) === e || 0 === a.indexOf(e + "-")
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1
                  }
              }),
              target: function(t) {
                var a = e.location && e.location.hash;
                return a && a.slice(1) === t.id
              },
              root: function(e) {
                return e === m
              },
              focus: function(e) {
                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: pe(!1),
              disabled: pe(!0),
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0
              },
              parent: function(e) {
                return !r.pseudos.empty(e)
              },
              header: function(e) {
                return z.test(e.nodeName)
              },
              input: function(e) {
                return U.test(e.nodeName)
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: me(function() {
                return [0]
              }),
              last: me(function(e, t) {
                return [t - 1]
              }),
              eq: me(function(e, t, a) {
                return [a < 0 ? a + t : a]
              }),
              even: me(function(e, t) {
                for (var a = 0; a < t; a += 2) e.push(a);
                return e
              }),
              odd: me(function(e, t) {
                for (var a = 1; a < t; a += 2) e.push(a);
                return e
              }),
              lt: me(function(e, t, a) {
                for (var r = a < 0 ? a + t : a; --r >= 0;) e.push(r);
                return e
              }),
              gt: me(function(e, t, a) {
                for (var r = a < 0 ? a + t : a; ++r < t;) e.push(r);
                return e
              })
            }
          }).pseudos.nth = r.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) r.pseudos[t] = ue(t);
        for (t in {
            submit: !0,
            reset: !0
          }) r.pseudos[t] = fe(t);

        function de() {}

        function ye(e) {
          for (var t = 0, a = e.length, r = ""; t < a; t++) r += e[t].value;
          return r
        }

        function be(e, t, a) {
          var r = t.dir,
            n = t.next,
            s = n || r,
            o = a && "parentNode" === s,
            i = v++;
          return t.first ? function(t, a, n) {
            for (; t = t[r];)
              if (1 === t.nodeType || o) return e(t, a, n);
            return !1
          } : function(t, a, h) {
            var l, c, u, f = [_, i];
            if (h) {
              for (; t = t[r];)
                if ((1 === t.nodeType || o) && e(t, a, h)) return !0
            } else
              for (; t = t[r];)
                if (1 === t.nodeType || o)
                  if (c = (u = t[O] || (t[O] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), n && n === t.nodeName.toLowerCase()) t = t[r] || t;
                  else {
                    if ((l = c[s]) && l[0] === _ && l[1] === i) return f[2] = l[2];
                    if (c[s] = f, f[2] = e(t, a, h)) return !0
                  } return !1
          }
        }

        function Ce(e) {
          return e.length > 1 ? function(t, a, r) {
            for (var n = e.length; n--;)
              if (!e[n](t, a, r)) return !1;
            return !0
          } : e[0]
        }

        function Oe(e, t, a, r, n) {
          for (var s, o = [], i = 0, h = e.length, l = null != t; i < h; i++)(s = e[i]) && (a && !a(s, r, n) || (o.push(s), l && t.push(i)));
          return o
        }

        function He(e, t, a, r, n, s) {
          return r && !r[O] && (r = He(r)), n && !n[O] && (n = He(n, s)), ie(function(s, o, i, h) {
            var l, c, u, f = [],
              p = [],
              m = o.length,
              g = s || function(e, t, a) {
                for (var r = 0, n = t.length; r < n; r++) se(e, t[r], a);
                return a
              }(t || "*", i.nodeType ? [i] : i, []),
              d = !e || !s && t ? g : Oe(g, f, e, i, h),
              y = a ? n || (s ? e : m || r) ? [] : o : d;
            if (a && a(d, y, i, h), r)
              for (l = Oe(y, p), r(l, [], i, h), c = l.length; c--;)(u = l[c]) && (y[p[c]] = !(d[p[c]] = u));
            if (s) {
              if (n || e) {
                if (n) {
                  for (l = [], c = y.length; c--;)(u = y[c]) && l.push(d[c] = u);
                  n(null, y = [], l, h)
                }
                for (c = y.length; c--;)(u = y[c]) && (l = n ? L(s, u) : f[c]) > -1 && (s[l] = !(o[l] = u))
              }
            } else y = Oe(y === o ? y.splice(m, y.length) : y), n ? n(null, o, y, h) : I.apply(o, y)
          })
        }

        function _e(e) {
          for (var t, a, n, s = e.length, o = r.relative[e[0].type], i = o || r.relative[" "], h = o ? 1 : 0, c = be(function(e) {
              return e === t
            }, i, !0), u = be(function(e) {
              return L(t, e) > -1
            }, i, !0), f = [function(e, a, r) {
              var n = !o && (r || a !== l) || ((t = a).nodeType ? c(e, a, r) : u(e, a, r));
              return t = null, n
            }]; h < s; h++)
            if (a = r.relative[e[h].type]) f = [be(Ce(f), a)];
            else {
              if ((a = r.filter[e[h].type].apply(null, e[h].matches))[O]) {
                for (n = ++h; n < s && !r.relative[e[n].type]; n++);
                return He(h > 1 && Ce(f), h > 1 && ye(e.slice(0, h - 1).concat({
                  value: " " === e[h - 2].type ? "*" : ""
                })).replace(j, "$1"), a, h < n && _e(e.slice(h, n)), n < s && _e(e = e.slice(n)), n < s && ye(e))
              }
              f.push(a)
            }
          return Ce(f)
        }
        return de.prototype = r.filters = r.pseudos, r.setFilters = new de, o = se.tokenize = function(e, t) {
          var a, n, s, o, i, h, l, c = A[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (i = e, h = [], l = r.preFilter; i;) {
            for (o in a && !(n = K.exec(i)) || (n && (i = i.slice(n[0].length) || i), h.push(s = [])), a = !1, (n = G.exec(i)) && (a = n.shift(), s.push({
                value: a,
                type: n[0].replace(j, " ")
              }), i = i.slice(a.length)), r.filter) !(n = X[o].exec(i)) || l[o] && !(n = l[o](n)) || (a = n.shift(), s.push({
              value: a,
              type: o,
              matches: n
            }), i = i.slice(a.length));
            if (!a) break
          }
          return t ? i.length : i ? se.error(e) : A(e, h).slice(0)
        }, i = se.compile = function(e, t) {
          var a, n = [],
            s = [],
            i = T[e + " "];
          if (!i) {
            for (t || (t = o(e)), a = t.length; a--;)(i = _e(t[a]))[O] ? n.push(i) : s.push(i);
            (i = T(e, function(e, t) {
              var a = t.length > 0,
                n = e.length > 0,
                s = function(s, o, i, h, c) {
                  var u, m, d, y = 0,
                    b = "0",
                    C = s && [],
                    O = [],
                    H = l,
                    v = s || n && r.find.TAG("*", c),
                    w = _ += null == H ? 1 : Math.random() || .1,
                    A = v.length;
                  for (c && (l = o === p || o || c); b !== A && null != (u = v[b]); b++) {
                    if (n && u) {
                      for (m = 0, o || u.ownerDocument === p || (f(u), i = !g); d = e[m++];)
                        if (d(u, o || p, i)) {
                          h.push(u);
                          break
                        }
                      c && (_ = w)
                    }
                    a && ((u = !d && u) && y--, s && C.push(u))
                  }
                  if (y += b, a && b !== y) {
                    for (m = 0; d = t[m++];) d(C, O, o, i);
                    if (s) {
                      if (y > 0)
                        for (; b--;) C[b] || O[b] || (O[b] = S.call(h));
                      O = Oe(O)
                    }
                    I.apply(h, O), c && !s && O.length > 0 && y + t.length > 1 && se.uniqueSort(h)
                  }
                  return c && (_ = w, l = H), C
                };
              return a ? ie(s) : s
            }(s, n))).selector = e
          }
          return i
        }, h = se.select = function(e, t, a, n) {
          var s, h, l, c, u, f = "function" == typeof e && e,
            p = !n && o(e = f.selector || e);
          if (a = a || [], 1 === p.length) {
            if ((h = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = h[0]).type && 9 === t.nodeType && g && r.relative[h[1].type]) {
              if (!(t = (r.find.ID(l.matches[0].replace(Q, ee), t) || [])[0])) return a;
              f && (t = t.parentNode), e = e.slice(h.shift().value.length)
            }
            for (s = X.needsContext.test(e) ? 0 : h.length; s-- && (l = h[s], !r.relative[c = l.type]);)
              if ((u = r.find[c]) && (n = u(l.matches[0].replace(Q, ee), Z.test(h[0].type) && ge(t.parentNode) || t))) {
                if (h.splice(s, 1), !(e = n.length && ye(h))) return I.apply(a, n), a;
                break
              }
          }
          return (f || i(e, p))(n, t, !g, a, !t || Z.test(e) && ge(t.parentNode) || t), a
        }, a.sortStable = O.split("").sort(x).join("") === O, a.detectDuplicates = !!u, f(), a.sortDetached = he(function(e) {
          return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }), he(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, a) {
          if (!a) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), a.attributes && he(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, a) {
          if (!a && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), he(function(e) {
          return null == e.getAttribute("disabled")
        }) || le(B, function(e, t, a) {
          var r;
          if (!a) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
      }(a);
    v.find = T, v.expr = T.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = T.uniqueSort, v.text = T.getText, v.isXMLDoc = T.isXML, v.contains = T.contains, v.escapeSelector = T.escape;
    var x = function(e, t, a) {
        for (var r = [], n = void 0 !== a;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (n && v(e).is(a)) break;
            r.push(e)
          }
        return r
      },
      M = function(e, t) {
        for (var a = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && a.push(e);
        return a
      },
      N = v.expr.match.needsContext;

    function S(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, t, a) {
      return b(t) ? v.grep(e, function(e, r) {
        return !!t.call(e, r, e) !== a
      }) : t.nodeType ? v.grep(e, function(e) {
        return e === t !== a
      }) : "string" != typeof t ? v.grep(e, function(e) {
        return u.call(t, e) > -1 !== a
      }) : v.filter(t, e, a)
    }
    v.filter = function(e, t, a) {
      var r = t[0];
      return a && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? v.find.matchesSelector(r, e) ? [r] : [] : v.find.matches(e, v.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, v.fn.extend({
      find: function(e) {
        var t, a, r = this.length,
          n = this;
        if ("string" != typeof e) return this.pushStack(v(e).filter(function() {
          for (t = 0; t < r; t++)
            if (v.contains(n[t], this)) return !0
        }));
        for (a = this.pushStack([]), t = 0; t < r; t++) v.find(e, n[t], a);
        return r > 1 ? v.uniqueSort(a) : a
      },
      filter: function(e) {
        return this.pushStack(I(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(I(this, e || [], !0))
      },
      is: function(e) {
        return !!I(this, "string" == typeof e && N.test(e) ? v(e) : e || [], !1).length
      }
    });
    var E, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function(e, t, a) {
      var r, n;
      if (!e) return this;
      if (a = a || E, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || a).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof v ? t[0] : t, v.merge(this, v.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), k.test(r[1]) && v.isPlainObject(t))
            for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return (n = o.getElementById(r[2])) && (this[0] = n, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== a.ready ? a.ready(e) : e(v) : v.makeArray(e, this)
    }).prototype = v.fn, E = v(o);
    var B = /^(?:parents|prev(?:Until|All))/,
      P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function D(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }
    v.fn.extend({
      has: function(e) {
        var t = v(e, this),
          a = t.length;
        return this.filter(function() {
          for (var e = 0; e < a; e++)
            if (v.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        var a, r = 0,
          n = this.length,
          s = [],
          o = "string" != typeof e && v(e);
        if (!N.test(e))
          for (; r < n; r++)
            for (a = this[r]; a && a !== t; a = a.parentNode)
              if (a.nodeType < 11 && (o ? o.index(a) > -1 : 1 === a.nodeType && v.find.matchesSelector(a, e))) {
                s.push(a);
                break
              }
        return this.pushStack(s.length > 1 ? v.uniqueSort(s) : s)
      },
      index: function(e) {
        return e ? "string" == typeof e ? u.call(v(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), v.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return x(e, "parentNode")
      },
      parentsUntil: function(e, t, a) {
        return x(e, "parentNode", a)
      },
      next: function(e) {
        return D(e, "nextSibling")
      },
      prev: function(e) {
        return D(e, "previousSibling")
      },
      nextAll: function(e) {
        return x(e, "nextSibling")
      },
      prevAll: function(e) {
        return x(e, "previousSibling")
      },
      nextUntil: function(e, t, a) {
        return x(e, "nextSibling", a)
      },
      prevUntil: function(e, t, a) {
        return x(e, "previousSibling", a)
      },
      siblings: function(e) {
        return M((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return M(e.firstChild)
      },
      contents: function(e) {
        return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), v.merge([], e.childNodes))
      }
    }, function(e, t) {
      v.fn[e] = function(a, r) {
        var n = v.map(this, t, a);
        return "Until" !== e.slice(-5) && (r = a), r && "string" == typeof r && (n = v.filter(r, n)), this.length > 1 && (P[e] || v.uniqueSort(n), B.test(e) && n.reverse()), this.pushStack(n)
      }
    });
    var W = /[^\x20\t\r\n\f]+/g;

    function q(e) {
      return e
    }

    function R(e) {
      throw e
    }

    function j(e, t, a, r) {
      var n;
      try {
        e && b(n = e.promise) ? n.call(e).done(t).fail(a) : e && b(n = e.then) ? n.call(e, t, a) : t.apply(void 0, [e].slice(r))
      } catch (e) {
        a.apply(void 0, [e])
      }
    }
    v.Callbacks = function(e) {
      e = "string" == typeof e ? function(e) {
        var t = {};
        return v.each(e.match(W) || [], function(e, a) {
          t[a] = !0
        }), t
      }(e) : v.extend({}, e);
      var t, a, r, n, s = [],
        o = [],
        i = -1,
        h = function() {
          for (n = n || e.once, r = t = !0; o.length; i = -1)
            for (a = o.shift(); ++i < s.length;) !1 === s[i].apply(a[0], a[1]) && e.stopOnFalse && (i = s.length, a = !1);
          e.memory || (a = !1), t = !1, n && (s = a ? [] : "")
        },
        l = {
          add: function() {
            return s && (a && !t && (i = s.length - 1, o.push(a)), function t(a) {
              v.each(a, function(a, r) {
                b(r) ? e.unique && l.has(r) || s.push(r) : r && r.length && "string" !== _(r) && t(r)
              })
            }(arguments), a && !t && h()), this
          },
          remove: function() {
            return v.each(arguments, function(e, t) {
              for (var a;
                (a = v.inArray(t, s, a)) > -1;) s.splice(a, 1), a <= i && i--
            }), this
          },
          has: function(e) {
            return e ? v.inArray(e, s) > -1 : s.length > 0
          },
          empty: function() {
            return s && (s = []), this
          },
          disable: function() {
            return n = o = [], s = a = "", this
          },
          disabled: function() {
            return !s
          },
          lock: function() {
            return n = o = [], a || t || (s = a = ""), this
          },
          locked: function() {
            return !!n
          },
          fireWith: function(e, a) {
            return n || (a = [e, (a = a || []).slice ? a.slice() : a], o.push(a), t || h()), this
          },
          fire: function() {
            return l.fireWith(this, arguments), this
          },
          fired: function() {
            return !!r
          }
        };
      return l
    }, v.extend({
      Deferred: function(e) {
        var t = [
            ["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2],
            ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]
          ],
          r = "pending",
          n = {
            state: function() {
              return r
            },
            always: function() {
              return s.done(arguments).fail(arguments), this
            },
            catch: function(e) {
              return n.then(null, e)
            },
            pipe: function() {
              var e = arguments;
              return v.Deferred(function(a) {
                v.each(t, function(t, r) {
                  var n = b(e[r[4]]) && e[r[4]];
                  s[r[1]](function() {
                    var e = n && n.apply(this, arguments);
                    e && b(e.promise) ? e.promise().progress(a.notify).done(a.resolve).fail(a.reject) : a[r[0] + "With"](this, n ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            then: function(e, r, n) {
              var s = 0;

              function o(e, t, r, n) {
                return function() {
                  var i = this,
                    h = arguments,
                    l = function() {
                      var a, l;
                      if (!(e < s)) {
                        if ((a = r.apply(i, h)) === t.promise()) throw new TypeError("Thenable self-resolution");
                        l = a && ("object" == typeof a || "function" == typeof a) && a.then, b(l) ? n ? l.call(a, o(s, t, q, n), o(s, t, R, n)) : (s++, l.call(a, o(s, t, q, n), o(s, t, R, n), o(s, t, q, t.notifyWith))) : (r !== q && (i = void 0, h = [a]), (n || t.resolveWith)(i, h))
                      }
                    },
                    c = n ? l : function() {
                      try {
                        l()
                      } catch (a) {
                        v.Deferred.exceptionHook && v.Deferred.exceptionHook(a, c.stackTrace), e + 1 >= s && (r !== R && (i = void 0, h = [a]), t.rejectWith(i, h))
                      }
                    };
                  e ? c() : (v.Deferred.getStackHook && (c.stackTrace = v.Deferred.getStackHook()), a.setTimeout(c))
                }
              }
              return v.Deferred(function(a) {
                t[0][3].add(o(0, a, b(n) ? n : q, a.notifyWith)), t[1][3].add(o(0, a, b(e) ? e : q)), t[2][3].add(o(0, a, b(r) ? r : R))
              }).promise()
            },
            promise: function(e) {
              return null != e ? v.extend(e, n) : n
            }
          },
          s = {};
        return v.each(t, function(e, a) {
          var o = a[2],
            i = a[5];
          n[a[1]] = o.add, i && o.add(function() {
            r = i
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(a[3].fire), s[a[0]] = function() {
            return s[a[0] + "With"](this === s ? void 0 : this, arguments), this
          }, s[a[0] + "With"] = o.fireWith
        }), n.promise(s), e && e.call(s, s), s
      },
      when: function(e) {
        var t = arguments.length,
          a = t,
          r = Array(a),
          n = h.call(arguments),
          s = v.Deferred(),
          o = function(e) {
            return function(a) {
              r[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : a, --t || s.resolveWith(r, n)
            }
          };
        if (t <= 1 && (j(e, s.done(o(a)).resolve, s.reject, !t), "pending" === s.state() || b(n[a] && n[a].then))) return s.then();
        for (; a--;) j(n[a], o(a), s.reject);
        return s.promise()
      }
    });
    var K = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function(e, t) {
      a.console && a.console.warn && e && K.test(e.name) && a.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, v.readyException = function(e) {
      a.setTimeout(function() {
        throw e
      })
    };
    var G = v.Deferred();

    function F() {
      o.removeEventListener("DOMContentLoaded", F), a.removeEventListener("load", F), v.ready()
    }
    v.fn.ready = function(e) {
      return G.then(e).catch(function(e) {
        v.readyException(e)
      }), this
    }, v.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== e && --v.readyWait > 0 || G.resolveWith(o, [v]))
      }
    }), v.ready.then = G.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? a.setTimeout(v.ready) : (o.addEventListener("DOMContentLoaded", F), a.addEventListener("load", F));
    var Y = function(e, t, a, r, n, s, o) {
        var i = 0,
          h = e.length,
          l = null == a;
        if ("object" === _(a))
          for (i in n = !0, a) Y(e, t, i, a[i], !0, s, o);
        else if (void 0 !== r && (n = !0, b(r) || (o = !0), l && (o ? (t.call(e, r), t = null) : (l = t, t = function(e, t, a) {
            return l.call(v(e), a)
          })), t))
          for (; i < h; i++) t(e[i], a, o ? r : r.call(e[i], i, t(e[i], a)));
        return n ? e : l ? t.call(e) : h ? t(e[0], a) : s
      },
      V = /^-ms-/,
      X = /-([a-z])/g;

    function U(e, t) {
      return t.toUpperCase()
    }

    function z(e) {
      return e.replace(V, "ms-").replace(X, U)
    }
    var J = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function $() {
      this.expando = v.expando + $.uid++
    }
    $.uid = 1, $.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, a) {
        var r, n = this.cache(e);
        if ("string" == typeof t) n[z(t)] = a;
        else
          for (r in t) n[z(r)] = t[r];
        return n
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
      },
      access: function(e, t, a) {
        return void 0 === t || t && "string" == typeof t && void 0 === a ? this.get(e, t) : (this.set(e, t, a), void 0 !== a ? a : t)
      },
      remove: function(e, t) {
        var a, r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            a = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in r ? [t] : t.match(W) || []).length;
            for (; a--;) delete r[t[a]]
          }(void 0 === t || v.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !v.isEmptyObject(t)
      }
    };
    var Z = new $,
      Q = new $,
      ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      te = /[A-Z]/g;

    function ae(e, t, a) {
      var r;
      if (void 0 === a && 1 === e.nodeType)
        if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(a = e.getAttribute(r))) {
          try {
            a = function(e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
            }(a)
          } catch (e) {}
          Q.set(e, t, a)
        } else a = void 0;
      return a
    }
    v.extend({
      hasData: function(e) {
        return Q.hasData(e) || Z.hasData(e)
      },
      data: function(e, t, a) {
        return Q.access(e, t, a)
      },
      removeData: function(e, t) {
        Q.remove(e, t)
      },
      _data: function(e, t, a) {
        return Z.access(e, t, a)
      },
      _removeData: function(e, t) {
        Z.remove(e, t)
      }
    }), v.fn.extend({
      data: function(e, t) {
        var a, r, n, s = this[0],
          o = s && s.attributes;
        if (void 0 === e) {
          if (this.length && (n = Q.get(s), 1 === s.nodeType && !Z.get(s, "hasDataAttrs"))) {
            for (a = o.length; a--;) o[a] && 0 === (r = o[a].name).indexOf("data-") && (r = z(r.slice(5)), ae(s, r, n[r]));
            Z.set(s, "hasDataAttrs", !0)
          }
          return n
        }
        return "object" == typeof e ? this.each(function() {
          Q.set(this, e)
        }) : Y(this, function(t) {
          var a;
          if (s && void 0 === t) return void 0 !== (a = Q.get(s, e)) ? a : void 0 !== (a = ae(s, e)) ? a : void 0;
          this.each(function() {
            Q.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          Q.remove(this, e)
        })
      }
    }), v.extend({
      queue: function(e, t, a) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), a && (!r || Array.isArray(a) ? r = Z.access(e, t, v.makeArray(a)) : r.push(a)), r || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var a = v.queue(e, t),
          r = a.length,
          n = a.shift(),
          s = v._queueHooks(e, t);
        "inprogress" === n && (n = a.shift(), r--), n && ("fx" === t && a.unshift("inprogress"), delete s.stop, n.call(e, function() {
          v.dequeue(e, t)
        }, s)), !r && s && s.empty.fire()
      },
      _queueHooks: function(e, t) {
        var a = t + "queueHooks";
        return Z.get(e, a) || Z.access(e, a, {
          empty: v.Callbacks("once memory").add(function() {
            Z.remove(e, [t + "queue", a])
          })
        })
      }
    }), v.fn.extend({
      queue: function(e, t) {
        var a = 2;
        return "string" != typeof e && (t = e, e = "fx", a--), arguments.length < a ? v.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var a = v.queue(this, e, t);
          v._queueHooks(this, e), "fx" === e && "inprogress" !== a[0] && v.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          v.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var a, r = 1,
          n = v.Deferred(),
          s = this,
          o = this.length,
          i = function() {
            --r || n.resolveWith(s, [s])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(a = Z.get(s[o], e + "queueHooks")) && a.empty && (r++, a.empty.add(i));
        return i(), n.promise(t)
      }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      se = ["Top", "Right", "Bottom", "Left"],
      oe = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && v.contains(e.ownerDocument, e) && "none" === v.css(e, "display")
      },
      ie = function(e, t, a, r) {
        var n, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        for (s in n = a.apply(e, r || []), t) e.style[s] = o[s];
        return n
      };

    function he(e, t, a, r) {
      var n, s, o = 20,
        i = r ? function() {
          return r.cur()
        } : function() {
          return v.css(e, t, "")
        },
        h = i(),
        l = a && a[3] || (v.cssNumber[t] ? "" : "px"),
        c = (v.cssNumber[t] || "px" !== l && +h) && ne.exec(v.css(e, t));
      if (c && c[3] !== l) {
        for (h /= 2, l = l || c[3], c = +h || 1; o--;) v.style(e, t, c + l), (1 - s) * (1 - (s = i() / h || .5)) <= 0 && (o = 0), c /= s;
        c *= 2, v.style(e, t, c + l), a = a || []
      }
      return a && (c = +c || +h || 0, n = a[1] ? c + (a[1] + 1) * a[2] : +a[2], r && (r.unit = l, r.start = c, r.end = n)), n
    }
    var le = {};

    function ce(e) {
      var t, a = e.ownerDocument,
        r = e.nodeName,
        n = le[r];
      return n || (t = a.body.appendChild(a.createElement(r)), n = v.css(t, "display"), t.parentNode.removeChild(t), "none" === n && (n = "block"), le[r] = n, n)
    }

    function ue(e, t) {
      for (var a, r, n = [], s = 0, o = e.length; s < o; s++)(r = e[s]).style && (a = r.style.display, t ? ("none" === a && (n[s] = Z.get(r, "display") || null, n[s] || (r.style.display = "")), "" === r.style.display && oe(r) && (n[s] = ce(r))) : "none" !== a && (n[s] = "none", Z.set(r, "display", a)));
      for (s = 0; s < o; s++) null != n[s] && (e[s].style.display = n[s]);
      return e
    }
    v.fn.extend({
      show: function() {
        return ue(this, !0)
      },
      hide: function() {
        return ue(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          oe(this) ? v(this).show() : v(this).hide()
        })
      }
    });
    var fe = /^(?:checkbox|radio)$/i,
      pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      me = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function de(e, t) {
      var a;
      return a = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? v.merge([e], a) : a
    }

    function ye(e, t) {
      for (var a = 0, r = e.length; a < r; a++) Z.set(e[a], "globalEval", !t || Z.get(t[a], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var be, Ce, Oe = /<|&#?\w+;/;

    function He(e, t, a, r, n) {
      for (var s, o, i, h, l, c, u = t.createDocumentFragment(), f = [], p = 0, m = e.length; p < m; p++)
        if ((s = e[p]) || 0 === s)
          if ("object" === _(s)) v.merge(f, s.nodeType ? [s] : s);
          else if (Oe.test(s)) {
        for (o = o || u.appendChild(t.createElement("div")), i = (pe.exec(s) || ["", ""])[1].toLowerCase(), h = ge[i] || ge._default, o.innerHTML = h[1] + v.htmlPrefilter(s) + h[2], c = h[0]; c--;) o = o.lastChild;
        v.merge(f, o.childNodes), (o = u.firstChild).textContent = ""
      } else f.push(t.createTextNode(s));
      for (u.textContent = "", p = 0; s = f[p++];)
        if (r && v.inArray(s, r) > -1) n && n.push(s);
        else if (l = v.contains(s.ownerDocument, s), o = de(u.appendChild(s), "script"), l && ye(o), a)
        for (c = 0; s = o[c++];) me.test(s.type || "") && a.push(s);
      return u
    }
    be = o.createDocumentFragment().appendChild(o.createElement("div")), (Ce = o.createElement("input")).setAttribute("type", "radio"), Ce.setAttribute("checked", "checked"), Ce.setAttribute("name", "t"), be.appendChild(Ce), y.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked, be.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue;
    var _e = o.documentElement,
      ve = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ae = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
      return !0
    }

    function xe() {
      return !1
    }

    function Me() {
      try {
        return o.activeElement
      } catch (e) {}
    }

    function Ne(e, t, a, r, n, s) {
      var o, i;
      if ("object" == typeof t) {
        for (i in "string" != typeof a && (r = r || a, a = void 0), t) Ne(e, i, a, r, t[i], s);
        return e
      }
      if (null == r && null == n ? (n = a, r = a = void 0) : null == n && ("string" == typeof a ? (n = r, r = void 0) : (n = r, r = a, a = void 0)), !1 === n) n = xe;
      else if (!n) return e;
      return 1 === s && (o = n, (n = function(e) {
        return v().off(e), o.apply(this, arguments)
      }).guid = o.guid || (o.guid = v.guid++)), e.each(function() {
        v.event.add(this, t, n, r, a)
      })
    }
    v.event = {
      global: {},
      add: function(e, t, a, r, n) {
        var s, o, i, h, l, c, u, f, p, m, g, d = Z.get(e);
        if (d)
          for (a.handler && (a = (s = a).handler, n = s.selector), n && v.find.matchesSelector(_e, n), a.guid || (a.guid = v.guid++), (h = d.events) || (h = d.events = {}), (o = d.handle) || (o = d.handle = function(t) {
              return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
            }), l = (t = (t || "").match(W) || [""]).length; l--;) p = g = (i = Ae.exec(t[l]) || [])[1], m = (i[2] || "").split(".").sort(), p && (u = v.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, u = v.event.special[p] || {}, c = v.extend({
            type: p,
            origType: g,
            data: r,
            handler: a,
            guid: a.guid,
            selector: n,
            needsContext: n && v.expr.match.needsContext.test(n),
            namespace: m.join(".")
          }, s), (f = h[p]) || ((f = h[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, m, o) || e.addEventListener && e.addEventListener(p, o)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = a.guid)), n ? f.splice(f.delegateCount++, 0, c) : f.push(c), v.event.global[p] = !0)
      },
      remove: function(e, t, a, r, n) {
        var s, o, i, h, l, c, u, f, p, m, g, d = Z.hasData(e) && Z.get(e);
        if (d && (h = d.events)) {
          for (l = (t = (t || "").match(W) || [""]).length; l--;)
            if (p = g = (i = Ae.exec(t[l]) || [])[1], m = (i[2] || "").split(".").sort(), p) {
              for (u = v.event.special[p] || {}, f = h[p = (r ? u.delegateType : u.bindType) || p] || [], i = i[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = f.length; s--;) c = f[s], !n && g !== c.origType || a && a.guid !== c.guid || i && !i.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(s, 1), c.selector && f.delegateCount--, u.remove && u.remove.call(e, c));
              o && !f.length && (u.teardown && !1 !== u.teardown.call(e, m, d.handle) || v.removeEvent(e, p, d.handle), delete h[p])
            } else
              for (p in h) v.event.remove(e, p + t[l], a, r, !0);
          v.isEmptyObject(h) && Z.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        var t, a, r, n, s, o, i = v.event.fix(e),
          h = new Array(arguments.length),
          l = (Z.get(this, "events") || {})[i.type] || [],
          c = v.event.special[i.type] || {};
        for (h[0] = i, t = 1; t < arguments.length; t++) h[t] = arguments[t];
        if (i.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, i)) {
          for (o = v.event.handlers.call(this, i, l), t = 0;
            (n = o[t++]) && !i.isPropagationStopped();)
            for (i.currentTarget = n.elem, a = 0;
              (s = n.handlers[a++]) && !i.isImmediatePropagationStopped();) i.rnamespace && !i.rnamespace.test(s.namespace) || (i.handleObj = s, i.data = s.data, void 0 !== (r = ((v.event.special[s.origType] || {}).handle || s.handler).apply(n.elem, h)) && !1 === (i.result = r) && (i.preventDefault(), i.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, i), i.result
        }
      },
      handlers: function(e, t) {
        var a, r, n, s, o, i = [],
          h = t.delegateCount,
          l = e.target;
        if (h && l.nodeType && !("click" === e.type && e.button >= 1))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (s = [], o = {}, a = 0; a < h; a++) void 0 === o[n = (r = t[a]).selector + " "] && (o[n] = r.needsContext ? v(n, this).index(l) > -1 : v.find(n, this, null, [l]).length), o[n] && s.push(r);
              s.length && i.push({
                elem: l,
                handlers: s
              })
            }
        return l = this, h < t.length && i.push({
          elem: l,
          handlers: t.slice(h)
        }), i
      },
      addProp: function(e, t) {
        Object.defineProperty(v.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: b(t) ? function() {
            if (this.originalEvent) return t(this.originalEvent)
          } : function() {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            })
          }
        })
      },
      fix: function(e) {
        return e[v.expando] ? e : new v.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== Me() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === Me() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
          },
          _default: function(e) {
            return S(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, v.removeEvent = function(e, t, a) {
      e.removeEventListener && e.removeEventListener(t, a)
    }, v.Event = function(e, t) {
      if (!(this instanceof v.Event)) return new v.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[v.expando] = !0
    }, v.Event.prototype = {
      constructor: v.Event,
      isDefaultPrevented: xe,
      isPropagationStopped: xe,
      isImmediatePropagationStopped: xe,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, v.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
        var t = e.button;
        return null == e.which && ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, v.event.addProp), v.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      v.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var a, r = e.relatedTarget,
            n = e.handleObj;
          return r && (r === this || v.contains(this, r)) || (e.type = n.origType, a = n.handler.apply(this, arguments), e.type = t), a
        }
      }
    }), v.fn.extend({
      on: function(e, t, a, r) {
        return Ne(this, e, t, a, r)
      },
      one: function(e, t, a, r) {
        return Ne(this, e, t, a, r, 1)
      },
      off: function(e, t, a) {
        var r, n;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, v(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (n in e) this.off(n, t, e[n]);
          return this
        }
        return !1 !== t && "function" != typeof t || (a = t, t = void 0), !1 === a && (a = xe), this.each(function() {
          v.event.remove(this, e, a, t)
        })
      }
    });
    var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      ke = /<script|<style|<link/i,
      Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
      return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && v(e).children("tbody")[0] || e
    }

    function Be(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function De(e, t) {
      var a, r, n, s, o, i, h, l;
      if (1 === t.nodeType) {
        if (Z.hasData(e) && (s = Z.access(e), o = Z.set(t, s), l = s.events))
          for (n in delete o.handle, o.events = {}, l)
            for (a = 0, r = l[n].length; a < r; a++) v.event.add(t, n, l[n][a]);
        Q.hasData(e) && (i = Q.access(e), h = v.extend({}, i), Q.set(t, h))
      }
    }

    function We(e, t, a, r) {
      t = l.apply([], t);
      var n, s, o, i, h, c, u = 0,
        f = e.length,
        p = f - 1,
        m = t[0],
        g = b(m);
      if (g || f > 1 && "string" == typeof m && !y.checkClone && Ie.test(m)) return e.each(function(n) {
        var s = e.eq(n);
        g && (t[0] = m.call(this, n, s.html())), We(s, t, a, r)
      });
      if (f && (s = (n = He(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === n.childNodes.length && (n = s), s || r)) {
        for (i = (o = v.map(de(n, "script"), Be)).length; u < f; u++) h = n, u !== p && (h = v.clone(h, !0, !0), i && v.merge(o, de(h, "script"))), a.call(e[u], h, u);
        if (i)
          for (c = o[o.length - 1].ownerDocument, v.map(o, Pe), u = 0; u < i; u++) h = o[u], me.test(h.type || "") && !Z.access(h, "globalEval") && v.contains(c, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? v._evalUrl && v._evalUrl(h.src) : H(h.textContent.replace(Ee, ""), c, h))
      }
      return e
    }

    function qe(e, t, a) {
      for (var r, n = t ? v.filter(t, e) : e, s = 0; null != (r = n[s]); s++) a || 1 !== r.nodeType || v.cleanData(de(r)), r.parentNode && (a && v.contains(r.ownerDocument, r) && ye(de(r, "script")), r.parentNode.removeChild(r));
      return e
    }
    v.extend({
      htmlPrefilter: function(e) {
        return e.replace(Se, "<$1></$2>")
      },
      clone: function(e, t, a) {
        var r, n, s, o, i, h, l, c = e.cloneNode(!0),
          u = v.contains(e.ownerDocument, e);
        if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e)))
          for (o = de(c), r = 0, n = (s = de(e)).length; r < n; r++) i = s[r], h = o[r], void 0, "input" === (l = h.nodeName.toLowerCase()) && fe.test(i.type) ? h.checked = i.checked : "input" !== l && "textarea" !== l || (h.defaultValue = i.defaultValue);
        if (t)
          if (a)
            for (s = s || de(e), o = o || de(c), r = 0, n = s.length; r < n; r++) De(s[r], o[r]);
          else De(e, c);
        return (o = de(c, "script")).length > 0 && ye(o, !u && de(e, "script")), c
      },
      cleanData: function(e) {
        for (var t, a, r, n = v.event.special, s = 0; void 0 !== (a = e[s]); s++)
          if (J(a)) {
            if (t = a[Z.expando]) {
              if (t.events)
                for (r in t.events) n[r] ? v.event.remove(a, r) : v.removeEvent(a, r, t.handle);
              a[Z.expando] = void 0
            }
            a[Q.expando] && (a[Q.expando] = void 0)
          }
      }
    }), v.fn.extend({
      detach: function(e) {
        return qe(this, e, !0)
      },
      remove: function(e) {
        return qe(this, e)
      },
      text: function(e) {
        return Y(this, function(e) {
          return void 0 === e ? v.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return We(this, arguments, function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
        })
      },
      prepend: function() {
        return We(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return We(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return We(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (v.cleanData(de(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return v.clone(this, e, t)
        })
      },
      html: function(e) {
        return Y(this, function(e) {
          var t = this[0] || {},
            a = 0,
            r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !ke.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = v.htmlPrefilter(e);
            try {
              for (; a < r; a++) 1 === (t = this[a] || {}).nodeType && (v.cleanData(de(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return We(this, arguments, function(t) {
          var a = this.parentNode;
          v.inArray(this, e) < 0 && (v.cleanData(de(this)), a && a.replaceChild(t, this))
        }, e)
      }
    }), v.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      v.fn[e] = function(e) {
        for (var a, r = [], n = v(e), s = n.length - 1, o = 0; o <= s; o++) a = o === s ? this : this.clone(!0), v(n[o])[t](a), c.apply(r, a.get());
        return this.pushStack(r)
      }
    });
    var Re = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      je = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = a), t.getComputedStyle(e)
      },
      Ke = new RegExp(se.join("|"), "i");

    function Ge(e, t, a) {
      var r, n, s, o, i = e.style;
      return (a = a || je(e)) && ("" !== (o = a.getPropertyValue(t) || a[t]) || v.contains(e.ownerDocument, e) || (o = v.style(e, t)), !y.pixelBoxStyles() && Re.test(o) && Ke.test(t) && (r = i.width, n = i.minWidth, s = i.maxWidth, i.minWidth = i.maxWidth = i.width = o, o = a.width, i.width = r, i.minWidth = n, i.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function Fe(e, t) {
      return {
        get: function() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get
        }
      }
    }! function() {
      function e() {
        if (c) {
          l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _e.appendChild(l).appendChild(c);
          var e = a.getComputedStyle(c);
          r = "1%" !== e.top, h = 12 === t(e.marginLeft), c.style.right = "60%", i = 36 === t(e.right), n = 36 === t(e.width), c.style.position = "absolute", s = 36 === c.offsetWidth || "absolute", _e.removeChild(l), c = null
        }
      }

      function t(e) {
        return Math.round(parseFloat(e))
      }
      var r, n, s, i, h, l = o.createElement("div"),
        c = o.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === c.style.backgroundClip, v.extend(y, {
        boxSizingReliable: function() {
          return e(), n
        },
        pixelBoxStyles: function() {
          return e(), i
        },
        pixelPosition: function() {
          return e(), r
        },
        reliableMarginLeft: function() {
          return e(), h
        },
        scrollboxSize: function() {
          return e(), s
        }
      }))
    }();
    var Ye = /^(none|table(?!-c[ea]).+)/,
      Ve = /^--/,
      Xe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Ue = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      ze = ["Webkit", "Moz", "ms"],
      Je = o.createElement("div").style;

    function $e(e) {
      var t = v.cssProps[e];
      return t || (t = v.cssProps[e] = function(e) {
        if (e in Je) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), a = ze.length; a--;)
          if ((e = ze[a] + t) in Je) return e
      }(e) || e), t
    }

    function Ze(e, t, a) {
      var r = ne.exec(t);
      return r ? Math.max(0, r[2] - (a || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, a, r, n, s) {
      var o = "width" === t ? 1 : 0,
        i = 0,
        h = 0;
      if (a === (r ? "border" : "content")) return 0;
      for (; o < 4; o += 2) "margin" === a && (h += v.css(e, a + se[o], !0, n)), r ? ("content" === a && (h -= v.css(e, "padding" + se[o], !0, n)), "margin" !== a && (h -= v.css(e, "border" + se[o] + "Width", !0, n))) : (h += v.css(e, "padding" + se[o], !0, n), "padding" !== a ? h += v.css(e, "border" + se[o] + "Width", !0, n) : i += v.css(e, "border" + se[o] + "Width", !0, n));
      return !r && s >= 0 && (h += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - h - i - .5))), h
    }

    function et(e, t, a) {
      var r = je(e),
        n = Ge(e, t, r),
        s = "border-box" === v.css(e, "boxSizing", !1, r),
        o = s;
      if (Re.test(n)) {
        if (!a) return n;
        n = "auto"
      }
      return o = o && (y.boxSizingReliable() || n === e.style[t]), ("auto" === n || !parseFloat(n) && "inline" === v.css(e, "display", !1, r)) && (n = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (n = parseFloat(n) || 0) + Qe(e, t, a || (s ? "border" : "content"), o, r, n) + "px"
    }

    function tt(e, t, a, r, n) {
      return new tt.prototype.init(e, t, a, r, n)
    }
    v.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var a = Ge(e, "opacity");
              return "" === a ? "1" : a
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(e, t, a, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var n, s, o, i = z(t),
            h = Ve.test(t),
            l = e.style;
          if (h || (t = $e(i)), o = v.cssHooks[t] || v.cssHooks[i], void 0 === a) return o && "get" in o && void 0 !== (n = o.get(e, !1, r)) ? n : l[t];
          "string" === (s = typeof a) && (n = ne.exec(a)) && n[1] && (a = he(e, t, n), s = "number"), null != a && a == a && ("number" === s && (a += n && n[3] || (v.cssNumber[i] ? "" : "px")), y.clearCloneStyle || "" !== a || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (a = o.set(e, a, r)) || (h ? l.setProperty(t, a) : l[t] = a))
        }
      },
      css: function(e, t, a, r) {
        var n, s, o, i = z(t);
        return Ve.test(t) || (t = $e(i)), (o = v.cssHooks[t] || v.cssHooks[i]) && "get" in o && (n = o.get(e, !0, a)), void 0 === n && (n = Ge(e, t, r)), "normal" === n && t in Ue && (n = Ue[t]), "" === a || a ? (s = parseFloat(n), !0 === a || isFinite(s) ? s || 0 : n) : n
      }
    }), v.each(["height", "width"], function(e, t) {
      v.cssHooks[t] = {
        get: function(e, a, r) {
          if (a) return !Ye.test(v.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ie(e, Xe, function() {
            return et(e, t, r)
          })
        },
        set: function(e, a, r) {
          var n, s = je(e),
            o = "border-box" === v.css(e, "boxSizing", !1, s),
            i = r && Qe(e, t, r, o, s);
          return o && y.scrollboxSize() === s.position && (i -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - Qe(e, t, "border", !1, s) - .5)), i && (n = ne.exec(a)) && "px" !== (n[3] || "px") && (e.style[t] = a, a = v.css(e, t)), Ze(0, a, i)
        }
      }
    }), v.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px"
    }), v.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      v.cssHooks[e + t] = {
        expand: function(a) {
          for (var r = 0, n = {}, s = "string" == typeof a ? a.split(" ") : [a]; r < 4; r++) n[e + se[r] + t] = s[r] || s[r - 2] || s[0];
          return n
        }
      }, "margin" !== e && (v.cssHooks[e + t].set = Ze)
    }), v.fn.extend({
      css: function(e, t) {
        return Y(this, function(e, t, a) {
          var r, n, s = {},
            o = 0;
          if (Array.isArray(t)) {
            for (r = je(e), n = t.length; o < n; o++) s[t[o]] = v.css(e, t[o], !1, r);
            return s
          }
          return void 0 !== a ? v.style(e, t, a) : v.css(e, t)
        }, e, t, arguments.length > 1)
      }
    }), v.Tween = tt, tt.prototype = {
      constructor: tt,
      init: function(e, t, a, r, n, s) {
        this.elem = e, this.prop = a, this.easing = n || v.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[a] ? "" : "px")
      },
      cur: function() {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
      },
      run: function(e) {
        var t, a = tt.propHooks[this.prop];
        return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), a && a.set ? a.set(this) : tt.propHooks._default.set(this), this
      }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
          v.fx.step[e.prop] ? v.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[v.cssProps[e.prop]] && !v.cssHooks[e.prop] ? e.elem[e.prop] = e.now : v.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, v.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, v.fx = tt.prototype.init, v.fx.step = {};
    var at, rt, nt = /^(?:toggle|show|hide)$/,
      st = /queueHooks$/;

    function ot() {
      rt && (!1 === o.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(ot) : a.setTimeout(ot, v.fx.interval), v.fx.tick())
    }

    function it() {
      return a.setTimeout(function() {
        at = void 0
      }), at = Date.now()
    }

    function ht(e, t) {
      var a, r = 0,
        n = {
          height: e
        };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) n["margin" + (a = se[r])] = n["padding" + a] = e;
      return t && (n.opacity = n.width = e), n
    }

    function lt(e, t, a) {
      for (var r, n = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), s = 0, o = n.length; s < o; s++)
        if (r = n[s].call(a, t, e)) return r
    }

    function ct(e, t, a) {
      var r, n, s = 0,
        o = ct.prefilters.length,
        i = v.Deferred().always(function() {
          delete h.elem
        }),
        h = function() {
          if (n) return !1;
          for (var t = at || it(), a = Math.max(0, l.startTime + l.duration - t), r = 1 - (a / l.duration || 0), s = 0, o = l.tweens.length; s < o; s++) l.tweens[s].run(r);
          return i.notifyWith(e, [l, r, a]), r < 1 && o ? a : (o || i.notifyWith(e, [l, 1, 0]), i.resolveWith(e, [l]), !1)
        },
        l = i.promise({
          elem: e,
          props: v.extend({}, t),
          opts: v.extend(!0, {
            specialEasing: {},
            easing: v.easing._default
          }, a),
          originalProperties: t,
          originalOptions: a,
          startTime: at || it(),
          duration: a.duration,
          tweens: [],
          createTween: function(t, a) {
            var r = v.Tween(e, l.opts, t, a, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(r), r
          },
          stop: function(t) {
            var a = 0,
              r = t ? l.tweens.length : 0;
            if (n) return this;
            for (n = !0; a < r; a++) l.tweens[a].run(1);
            return t ? (i.notifyWith(e, [l, 1, 0]), i.resolveWith(e, [l, t])) : i.rejectWith(e, [l, t]), this
          }
        }),
        c = l.props;
      for (! function(e, t) {
          var a, r, n, s, o;
          for (a in e)
            if (n = t[r = z(a)], s = e[a], Array.isArray(s) && (n = s[1], s = e[a] = s[0]), a !== r && (e[r] = s, delete e[a]), (o = v.cssHooks[r]) && "expand" in o)
              for (a in s = o.expand(s), delete e[r], s) a in e || (e[a] = s[a], t[a] = n);
            else t[r] = n
        }(c, l.opts.specialEasing); s < o; s++)
        if (r = ct.prefilters[s].call(l, e, c, l.opts)) return b(r.stop) && (v._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
      return v.map(c, lt, l), b(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), v.fx.timer(v.extend(h, {
        elem: e,
        anim: l,
        queue: l.opts.queue
      })), l
    }
    v.Animation = v.extend(ct, {
        tweeners: {
          "*": [function(e, t) {
            var a = this.createTween(e, t);
            return he(a.elem, e, ne.exec(t), a), a
          }]
        },
        tweener: function(e, t) {
          b(e) ? (t = e, e = ["*"]) : e = e.match(W);
          for (var a, r = 0, n = e.length; r < n; r++) a = e[r], ct.tweeners[a] = ct.tweeners[a] || [], ct.tweeners[a].unshift(t)
        },
        prefilters: [function(e, t, a) {
          var r, n, s, o, i, h, l, c, u = "width" in t || "height" in t,
            f = this,
            p = {},
            m = e.style,
            g = e.nodeType && oe(e),
            d = Z.get(e, "fxshow");
          for (r in a.queue || (null == (o = v._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, i = o.empty.fire, o.empty.fire = function() {
              o.unqueued || i()
            }), o.unqueued++, f.always(function() {
              f.always(function() {
                o.unqueued--, v.queue(e, "fx").length || o.empty.fire()
              })
            })), t)
            if (n = t[r], nt.test(n)) {
              if (delete t[r], s = s || "toggle" === n, n === (g ? "hide" : "show")) {
                if ("show" !== n || !d || void 0 === d[r]) continue;
                g = !0
              }
              p[r] = d && d[r] || v.style(e, r)
            }
          if ((h = !v.isEmptyObject(t)) || !v.isEmptyObject(p))
            for (r in u && 1 === e.nodeType && (a.overflow = [m.overflow, m.overflowX, m.overflowY], null == (l = d && d.display) && (l = Z.get(e, "display")), "none" === (c = v.css(e, "display")) && (l ? c = l : (ue([e], !0), l = e.style.display || l, c = v.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === v.css(e, "float") && (h || (f.done(function() {
                m.display = l
              }), null == l && (c = m.display, l = "none" === c ? "" : c)), m.display = "inline-block")), a.overflow && (m.overflow = "hidden", f.always(function() {
                m.overflow = a.overflow[0], m.overflowX = a.overflow[1], m.overflowY = a.overflow[2]
              })), h = !1, p) h || (d ? "hidden" in d && (g = d.hidden) : d = Z.access(e, "fxshow", {
              display: l
            }), s && (d.hidden = !g), g && ue([e], !0), f.done(function() {
              for (r in g || ue([e]), Z.remove(e, "fxshow"), p) v.style(e, r, p[r])
            })), h = lt(g ? d[r] : 0, r, f), r in d || (d[r] = h.start, g && (h.end = h.start, h.start = 0))
        }],
        prefilter: function(e, t) {
          t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
      }), v.speed = function(e, t, a) {
        var r = e && "object" == typeof e ? v.extend({}, e) : {
          complete: a || !a && t || b(e) && e,
          duration: e,
          easing: a && t || t && !b(t) && t
        };
        return v.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in v.fx.speeds ? r.duration = v.fx.speeds[r.duration] : r.duration = v.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
          b(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
      }, v.fn.extend({
        fadeTo: function(e, t, a, r) {
          return this.filter(oe).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, a, r)
        },
        animate: function(e, t, a, r) {
          var n = v.isEmptyObject(e),
            s = v.speed(t, a, r),
            o = function() {
              var t = ct(this, v.extend({}, e), s);
              (n || Z.get(this, "finish")) && t.stop(!0)
            };
          return o.finish = o, n || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, a) {
          var r = function(e) {
            var t = e.stop;
            delete e.stop, t(a)
          };
          return "string" != typeof e && (a = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              n = null != e && e + "queueHooks",
              s = v.timers,
              o = Z.get(this);
            if (n) o[n] && o[n].stop && r(o[n]);
            else
              for (n in o) o[n] && o[n].stop && st.test(n) && r(o[n]);
            for (n = s.length; n--;) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(a), t = !1, s.splice(n, 1));
            !t && a || v.dequeue(this, e)
          })
        },
        finish: function(e) {
          return !1 !== e && (e = e || "fx"), this.each(function() {
            var t, a = Z.get(this),
              r = a[e + "queue"],
              n = a[e + "queueHooks"],
              s = v.timers,
              o = r ? r.length : 0;
            for (a.finish = !0, v.queue(this, e, []), n && n.stop && n.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
            for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete a.finish
          })
        }
      }), v.each(["toggle", "show", "hide"], function(e, t) {
        var a = v.fn[t];
        v.fn[t] = function(e, r, n) {
          return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(ht(t, !0), e, r, n)
        }
      }), v.each({
        slideDown: ht("show"),
        slideUp: ht("hide"),
        slideToggle: ht("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        v.fn[e] = function(e, a, r) {
          return this.animate(t, e, a, r)
        }
      }), v.timers = [], v.fx.tick = function() {
        var e, t = 0,
          a = v.timers;
        for (at = Date.now(); t < a.length; t++)(e = a[t])() || a[t] !== e || a.splice(t--, 1);
        a.length || v.fx.stop(), at = void 0
      }, v.fx.timer = function(e) {
        v.timers.push(e), v.fx.start()
      }, v.fx.interval = 13, v.fx.start = function() {
        rt || (rt = !0, ot())
      }, v.fx.stop = function() {
        rt = null
      }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, v.fn.delay = function(e, t) {
        return e = v.fx && v.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
          var n = a.setTimeout(t, e);
          r.stop = function() {
            a.clearTimeout(n)
          }
        })
      },
      function() {
        var e = o.createElement("input"),
          t = o.createElement("select").appendChild(o.createElement("option"));
        e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = o.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value
      }();
    var ut, ft = v.expr.attrHandle;
    v.fn.extend({
      attr: function(e, t) {
        return Y(this, v.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          v.removeAttr(this, e)
        })
      }
    }), v.extend({
      attr: function(e, t, a) {
        var r, n, s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? v.prop(e, t, a) : (1 === s && v.isXMLDoc(e) || (n = v.attrHooks[t.toLowerCase()] || (v.expr.match.bool.test(t) ? ut : void 0)), void 0 !== a ? null === a ? void v.removeAttr(e, t) : n && "set" in n && void 0 !== (r = n.set(e, a, t)) ? r : (e.setAttribute(t, a + ""), a) : n && "get" in n && null !== (r = n.get(e, t)) ? r : null == (r = v.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!y.radioValue && "radio" === t && S(e, "input")) {
              var a = e.value;
              return e.setAttribute("type", t), a && (e.value = a), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var a, r = 0,
          n = t && t.match(W);
        if (n && 1 === e.nodeType)
          for (; a = n[r++];) e.removeAttribute(a)
      }
    }), ut = {
      set: function(e, t, a) {
        return !1 === t ? v.removeAttr(e, a) : e.setAttribute(a, a), a
      }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var a = ft[t] || v.find.attr;
      ft[t] = function(e, t, r) {
        var n, s, o = t.toLowerCase();
        return r || (s = ft[o], ft[o] = n, n = null != a(e, t, r) ? o : null, ft[o] = s), n
      }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
      mt = /^(?:a|area)$/i;

    function gt(e) {
      return (e.match(W) || []).join(" ")
    }

    function dt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function yt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(W) || []
    }
    v.fn.extend({
      prop: function(e, t) {
        return Y(this, v.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[v.propFix[e] || e]
        })
      }
    }), v.extend({
      prop: function(e, t, a) {
        var r, n, s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return 1 === s && v.isXMLDoc(e) || (t = v.propFix[t] || t, n = v.propHooks[t]), void 0 !== a ? n && "set" in n && void 0 !== (r = n.set(e, a, t)) ? r : e[t] = a : n && "get" in n && null !== (r = n.get(e, t)) ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = v.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : pt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), y.optSelected || (v.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      v.propFix[this.toLowerCase()] = this
    }), v.fn.extend({
      addClass: function(e) {
        var t, a, r, n, s, o, i, h = 0;
        if (b(e)) return this.each(function(t) {
          v(this).addClass(e.call(this, t, dt(this)))
        });
        if ((t = yt(e)).length)
          for (; a = this[h++];)
            if (n = dt(a), r = 1 === a.nodeType && " " + gt(n) + " ") {
              for (o = 0; s = t[o++];) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
              n !== (i = gt(r)) && a.setAttribute("class", i)
            }
        return this
      },
      removeClass: function(e) {
        var t, a, r, n, s, o, i, h = 0;
        if (b(e)) return this.each(function(t) {
          v(this).removeClass(e.call(this, t, dt(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = yt(e)).length)
          for (; a = this[h++];)
            if (n = dt(a), r = 1 === a.nodeType && " " + gt(n) + " ") {
              for (o = 0; s = t[o++];)
                for (; r.indexOf(" " + s + " ") > -1;) r = r.replace(" " + s + " ", " ");
              n !== (i = gt(r)) && a.setAttribute("class", i)
            }
        return this
      },
      toggleClass: function(e, t) {
        var a = typeof e,
          r = "string" === a || Array.isArray(e);
        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each(function(a) {
          v(this).toggleClass(e.call(this, a, dt(this), t), t)
        }) : this.each(function() {
          var t, n, s, o;
          if (r)
            for (n = 0, s = v(this), o = yt(e); t = o[n++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
          else void 0 !== e && "boolean" !== a || ((t = dt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, a, r = 0;
        for (t = " " + e + " "; a = this[r++];)
          if (1 === a.nodeType && (" " + gt(dt(a)) + " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var bt = /\r/g;
    v.fn.extend({
      val: function(e) {
        var t, a, r, n = this[0];
        return arguments.length ? (r = b(e), this.each(function(a) {
          var n;
          1 === this.nodeType && (null == (n = r ? e.call(this, a, v(this).val()) : e) ? n = "" : "number" == typeof n ? n += "" : Array.isArray(n) && (n = v.map(n, function(e) {
            return null == e ? "" : e + ""
          })), (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, n, "value") || (this.value = n))
        })) : n ? (t = v.valHooks[n.type] || v.valHooks[n.nodeName.toLowerCase()]) && "get" in t && void 0 !== (a = t.get(n, "value")) ? a : "string" == typeof(a = n.value) ? a.replace(bt, "") : null == a ? "" : a : void 0
      }
    }), v.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = v.find.attr(e, "value");
            return null != t ? t : gt(v.text(e))
          }
        },
        select: {
          get: function(e) {
            var t, a, r, n = e.options,
              s = e.selectedIndex,
              o = "select-one" === e.type,
              i = o ? null : [],
              h = o ? s + 1 : n.length;
            for (r = s < 0 ? h : o ? s : 0; r < h; r++)
              if (((a = n[r]).selected || r === s) && !a.disabled && (!a.parentNode.disabled || !S(a.parentNode, "optgroup"))) {
                if (t = v(a).val(), o) return t;
                i.push(t)
              }
            return i
          },
          set: function(e, t) {
            for (var a, r, n = e.options, s = v.makeArray(t), o = n.length; o--;)((r = n[o]).selected = v.inArray(v.valHooks.option.get(r), s) > -1) && (a = !0);
            return a || (e.selectedIndex = -1), s
          }
        }
      }
    }), v.each(["radio", "checkbox"], function() {
      v.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return e.checked = v.inArray(v(e).val(), t) > -1
        }
      }, y.checkOn || (v.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    }), y.focusin = "onfocusin" in a;
    var Ct = /^(?:focusinfocus|focusoutblur)$/,
      Ot = function(e) {
        e.stopPropagation()
      };
    v.extend(v.event, {
      trigger: function(e, t, r, n) {
        var s, i, h, l, c, u, f, p, g = [r || o],
          d = m.call(e, "type") ? e.type : e,
          y = m.call(e, "namespace") ? e.namespace.split(".") : [];
        if (i = p = h = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(d + v.event.triggered) && (d.indexOf(".") > -1 && (d = (y = d.split(".")).shift(), y.sort()), c = d.indexOf(":") < 0 && "on" + d, (e = e[v.expando] ? e : new v.Event(d, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : v.makeArray(t, [e]), f = v.event.special[d] || {}, n || !f.trigger || !1 !== f.trigger.apply(r, t))) {
          if (!n && !f.noBubble && !C(r)) {
            for (l = f.delegateType || d, Ct.test(l + d) || (i = i.parentNode); i; i = i.parentNode) g.push(i), h = i;
            h === (r.ownerDocument || o) && g.push(h.defaultView || h.parentWindow || a)
          }
          for (s = 0;
            (i = g[s++]) && !e.isPropagationStopped();) p = i, e.type = s > 1 ? l : f.bindType || d, (u = (Z.get(i, "events") || {})[e.type] && Z.get(i, "handle")) && u.apply(i, t), (u = c && i[c]) && u.apply && J(i) && (e.result = u.apply(i, t), !1 === e.result && e.preventDefault());
          return e.type = d, n || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), t) || !J(r) || c && b(r[d]) && !C(r) && ((h = r[c]) && (r[c] = null), v.event.triggered = d, e.isPropagationStopped() && p.addEventListener(d, Ot), r[d](), e.isPropagationStopped() && p.removeEventListener(d, Ot), v.event.triggered = void 0, h && (r[c] = h)), e.result
        }
      },
      simulate: function(e, t, a) {
        var r = v.extend(new v.Event, a, {
          type: e,
          isSimulated: !0
        });
        v.event.trigger(r, null, t)
      }
    }), v.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          v.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var a = this[0];
        if (a) return v.event.trigger(e, t, a, !0)
      }
    }), y.focusin || v.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var a = function(e) {
        v.event.simulate(t, e.target, v.event.fix(e))
      };
      v.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this,
            n = Z.access(r, t);
          n || r.addEventListener(e, a, !0), Z.access(r, t, (n || 0) + 1)
        },
        teardown: function() {
          var r = this.ownerDocument || this,
            n = Z.access(r, t) - 1;
          n ? Z.access(r, t, n) : (r.removeEventListener(e, a, !0), Z.remove(r, t))
        }
      }
    });
    var Ht = a.location,
      _t = Date.now(),
      vt = /\?/;
    v.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new a.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e), t
    };
    var wt = /\[\]$/,
      At = /\r?\n/g,
      Tt = /^(?:submit|button|image|reset|file)$/i,
      xt = /^(?:input|select|textarea|keygen)/i;

    function Mt(e, t, a, r) {
      var n;
      if (Array.isArray(t)) v.each(t, function(t, n) {
        a || wt.test(e) ? r(e, n) : Mt(e + "[" + ("object" == typeof n && null != n ? t : "") + "]", n, a, r)
      });
      else if (a || "object" !== _(t)) r(e, t);
      else
        for (n in t) Mt(e + "[" + n + "]", t[n], a, r)
    }
    v.param = function(e, t) {
      var a, r = [],
        n = function(e, t) {
          var a = b(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == a ? "" : a)
        };
      if (Array.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
        n(this.name, this.value)
      });
      else
        for (a in e) Mt(a, e[a], t, n);
      return r.join("&")
    }, v.fn.extend({
      serialize: function() {
        return v.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = v.prop(this, "elements");
          return e ? v.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !v(this).is(":disabled") && xt.test(this.nodeName) && !Tt.test(e) && (this.checked || !fe.test(e))
        }).map(function(e, t) {
          var a = v(this).val();
          return null == a ? null : Array.isArray(a) ? v.map(a, function(e) {
            return {
              name: t.name,
              value: e.replace(At, "\r\n")
            }
          }) : {
            name: t.name,
            value: a.replace(At, "\r\n")
          }
        }).get()
      }
    });
    var Nt = /%20/g,
      St = /#.*$/,
      kt = /([?&])_=[^&]*/,
      It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Et = /^(?:GET|HEAD)$/,
      Lt = /^\/\//,
      Bt = {},
      Pt = {},
      Dt = "*/".concat("*"),
      Wt = o.createElement("a");

    function qt(e) {
      return function(t, a) {
        "string" != typeof t && (a = t, t = "*");
        var r, n = 0,
          s = t.toLowerCase().match(W) || [];
        if (b(a))
          for (; r = s[n++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(a)) : (e[r] = e[r] || []).push(a)
      }
    }

    function Rt(e, t, a, r) {
      var n = {},
        s = e === Pt;

      function o(i) {
        var h;
        return n[i] = !0, v.each(e[i] || [], function(e, i) {
          var l = i(t, a, r);
          return "string" != typeof l || s || n[l] ? s ? !(h = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
        }), h
      }
      return o(t.dataTypes[0]) || !n["*"] && o("*")
    }

    function jt(e, t) {
      var a, r, n = v.ajaxSettings.flatOptions || {};
      for (a in t) void 0 !== t[a] && ((n[a] ? e : r || (r = {}))[a] = t[a]);
      return r && v.extend(!0, e, r), e
    }
    Wt.href = Ht.href, v.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ht.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ht.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Dt,
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
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": v.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? jt(jt(e, v.ajaxSettings), t) : jt(v.ajaxSettings, e)
      },
      ajaxPrefilter: qt(Bt),
      ajaxTransport: qt(Pt),
      ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var r, n, s, i, h, l, c, u, f, p, m = v.ajaxSetup({}, t),
          g = m.context || m,
          d = m.context && (g.nodeType || g.jquery) ? v(g) : v.event,
          y = v.Deferred(),
          b = v.Callbacks("once memory"),
          C = m.statusCode || {},
          O = {},
          H = {},
          _ = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (c) {
                if (!i)
                  for (i = {}; t = It.exec(s);) i[t[1].toLowerCase()] = t[2];
                t = i[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return c ? s : null
            },
            setRequestHeader: function(e, t) {
              return null == c && (e = H[e.toLowerCase()] = H[e.toLowerCase()] || e, O[e] = t), this
            },
            overrideMimeType: function(e) {
              return null == c && (m.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (c) w.always(e[w.status]);
                else
                  for (t in e) C[t] = [C[t], e[t]];
              return this
            },
            abort: function(e) {
              var t = e || _;
              return r && r.abort(t), A(0, t), this
            }
          };
        if (y.promise(w), m.url = ((e || m.url || Ht.href) + "").replace(Lt, Ht.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(W) || [""], null == m.crossDomain) {
          l = o.createElement("a");
          try {
            l.href = m.url, l.href = l.href, m.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
          } catch (e) {
            m.crossDomain = !0
          }
        }
        if (m.data && m.processData && "string" != typeof m.data && (m.data = v.param(m.data, m.traditional)), Rt(Bt, m, t, w), c) return w;
        for (f in (u = v.event && m.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Et.test(m.type), n = m.url.replace(St, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Nt, "+")) : (p = m.url.slice(n.length), m.data && (m.processData || "string" == typeof m.data) && (n += (vt.test(n) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (n = n.replace(kt, "$1"), p = (vt.test(n) ? "&" : "?") + "_=" + _t++ + p), m.url = n + p), m.ifModified && (v.lastModified[n] && w.setRequestHeader("If-Modified-Since", v.lastModified[n]), v.etag[n] && w.setRequestHeader("If-None-Match", v.etag[n])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : m.accepts["*"]), m.headers) w.setRequestHeader(f, m.headers[f]);
        if (m.beforeSend && (!1 === m.beforeSend.call(g, w, m) || c)) return w.abort();
        if (_ = "abort", b.add(m.complete), w.done(m.success), w.fail(m.error), r = Rt(Pt, m, t, w)) {
          if (w.readyState = 1, u && d.trigger("ajaxSend", [w, m]), c) return w;
          m.async && m.timeout > 0 && (h = a.setTimeout(function() {
            w.abort("timeout")
          }, m.timeout));
          try {
            c = !1, r.send(O, A)
          } catch (e) {
            if (c) throw e;
            A(-1, e)
          }
        } else A(-1, "No Transport");

        function A(e, t, o, i) {
          var l, f, p, O, H, _ = t;
          c || (c = !0, h && a.clearTimeout(h), r = void 0, s = i || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, o && (O = function(e, t, a) {
            for (var r, n, s, o, i = e.contents, h = e.dataTypes;
              "*" === h[0];) h.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
              for (n in i)
                if (i[n] && i[n].test(r)) {
                  h.unshift(n);
                  break
                }
            if (h[0] in a) s = h[0];
            else {
              for (n in a) {
                if (!h[0] || e.converters[n + " " + h[0]]) {
                  s = n;
                  break
                }
                o || (o = n)
              }
              s = s || o
            }
            if (s) return s !== h[0] && h.unshift(s), a[s]
          }(m, w, o)), O = function(e, t, a, r) {
            var n, s, o, i, h, l = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
            for (s = c.shift(); s;)
              if (e.responseFields[s] && (a[e.responseFields[s]] = t), !h && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), h = s, s = c.shift())
                if ("*" === s) s = h;
                else if ("*" !== h && h !== s) {
              if (!(o = l[h + " " + s] || l["* " + s]))
                for (n in l)
                  if ((i = n.split(" "))[1] === s && (o = l[h + " " + i[0]] || l["* " + i[0]])) {
                    !0 === o ? o = l[n] : !0 !== l[n] && (s = i[0], c.unshift(i[1]));
                    break
                  }
              if (!0 !== o)
                if (o && e.throws) t = o(t);
                else try {
                  t = o(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: o ? e : "No conversion from " + h + " to " + s
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(m, O, w, l), l ? (m.ifModified && ((H = w.getResponseHeader("Last-Modified")) && (v.lastModified[n] = H), (H = w.getResponseHeader("etag")) && (v.etag[n] = H)), 204 === e || "HEAD" === m.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = O.state, f = O.data, l = !(p = O.error))) : (p = _, !e && _ || (_ = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || _) + "", l ? y.resolveWith(g, [f, _, w]) : y.rejectWith(g, [w, _, p]), w.statusCode(C), C = void 0, u && d.trigger(l ? "ajaxSuccess" : "ajaxError", [w, m, l ? f : p]), b.fireWith(g, [w, _]), u && (d.trigger("ajaxComplete", [w, m]), --v.active || v.event.trigger("ajaxStop")))
        }
        return w
      },
      getJSON: function(e, t, a) {
        return v.get(e, t, a, "json")
      },
      getScript: function(e, t) {
        return v.get(e, void 0, t, "script")
      }
    }), v.each(["get", "post"], function(e, t) {
      v[t] = function(e, a, r, n) {
        return b(a) && (n = n || r, r = a, a = void 0), v.ajax(v.extend({
          url: e,
          type: t,
          dataType: n,
          data: a,
          success: r
        }, v.isPlainObject(e) && e))
      }
    }), v._evalUrl = function(e) {
      return v.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }, v.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (b(e) && (e = e.call(this[0])), t = v(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this
      },
      wrapInner: function(e) {
        return b(e) ? this.each(function(t) {
          v(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = v(this),
            a = t.contents();
          a.length ? a.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = b(e);
        return this.each(function(a) {
          v(this).wrapAll(t ? e.call(this, a) : e)
        })
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          v(this).replaceWith(this.childNodes)
        }), this
      }
    }), v.expr.pseudos.hidden = function(e) {
      return !v.expr.pseudos.visible(e)
    }, v.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, v.ajaxSettings.xhr = function() {
      try {
        return new a.XMLHttpRequest
      } catch (e) {}
    };
    var Kt = {
        0: 200,
        1223: 204
      },
      Gt = v.ajaxSettings.xhr();
    y.cors = !!Gt && "withCredentials" in Gt, y.ajax = Gt = !!Gt, v.ajaxTransport(function(e) {
      var t, r;
      if (y.cors || Gt && !e.crossDomain) return {
        send: function(n, s) {
          var o, i = e.xhr();
          if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (o in e.xhrFields) i[o] = e.xhrFields[o];
          for (o in e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) i.setRequestHeader(o, n[o]);
          t = function(e) {
            return function() {
              t && (t = r = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? s(0, "error") : s(i.status, i.statusText) : s(Kt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                binary: i.response
              } : {
                text: i.responseText
              }, i.getAllResponseHeaders()))
            }
          }, i.onload = t(), r = i.onerror = i.ontimeout = t("error"), void 0 !== i.onabort ? i.onabort = r : i.onreadystatechange = function() {
            4 === i.readyState && a.setTimeout(function() {
              t && r()
            })
          }, t = t("abort");
          try {
            i.send(e.hasContent && e.data || null)
          } catch (e) {
            if (t) throw e
          }
        },
        abort: function() {
          t && t()
        }
      }
    }), v.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
    }), v.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return v.globalEval(e), e
        }
      }
    }), v.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), v.ajaxTransport("script", function(e) {
      var t, a;
      if (e.crossDomain) return {
        send: function(r, n) {
          t = v("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", a = function(e) {
            t.remove(), a = null, e && n("error" === e.type ? 404 : 200, e.type)
          }), o.head.appendChild(t[0])
        },
        abort: function() {
          a && a()
        }
      }
    });
    var Ft, Yt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Yt.pop() || v.expando + "_" + _t++;
        return this[e] = !0, e
      }
    }), v.ajaxPrefilter("json jsonp", function(e, t, r) {
      var n, s, o, i = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
      if (i || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, i ? e[i] = e[i].replace(Vt, "$1" + n) : !1 !== e.jsonp && (e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
        return o || v.error(n + " was not called"), o[0]
      }, e.dataTypes[0] = "json", s = a[n], a[n] = function() {
        o = arguments
      }, r.always(function() {
        void 0 === s ? v(a).removeProp(n) : a[n] = s, e[n] && (e.jsonpCallback = t.jsonpCallback, Yt.push(n)), o && b(s) && s(o[0]), o = s = void 0
      }), "script"
    }), y.createHTMLDocument = ((Ft = o.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), v.parseHTML = function(e, t, a) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (a = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, t.head.appendChild(r)) : t = o), n = k.exec(e), s = !a && [], n ? [t.createElement(n[1])] : (n = He([e], t, s), s && s.length && v(s).remove(), v.merge([], n.childNodes)));
      var r, n, s
    }, v.fn.load = function(e, t, a) {
      var r, n, s, o = this,
        i = e.indexOf(" ");
      return i > -1 && (r = gt(e.slice(i)), e = e.slice(0, i)), b(t) ? (a = t, t = void 0) : t && "object" == typeof t && (n = "POST"), o.length > 0 && v.ajax({
        url: e,
        type: n || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        s = arguments, o.html(r ? v("<div>").append(v.parseHTML(e)).find(r) : e)
      }).always(a && function(e, t) {
        o.each(function() {
          a.apply(this, s || [e.responseText, t, e])
        })
      }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      v.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), v.expr.pseudos.animated = function(e) {
      return v.grep(v.timers, function(t) {
        return e === t.elem
      }).length
    }, v.offset = {
      setOffset: function(e, t, a) {
        var r, n, s, o, i, h, l = v.css(e, "position"),
          c = v(e),
          u = {};
        "static" === l && (e.style.position = "relative"), i = c.offset(), s = v.css(e, "top"), h = v.css(e, "left"), ("absolute" === l || "fixed" === l) && (s + h).indexOf("auto") > -1 ? (o = (r = c.position()).top, n = r.left) : (o = parseFloat(s) || 0, n = parseFloat(h) || 0), b(t) && (t = t.call(e, a, v.extend({}, i))), null != t.top && (u.top = t.top - i.top + o), null != t.left && (u.left = t.left - i.left + n), "using" in t ? t.using.call(e, u) : c.css(u)
      }
    }, v.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          v.offset.setOffset(this, e, t)
        });
        var t, a, r = this[0];
        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), a = r.ownerDocument.defaultView, {
          top: t.top + a.pageYOffset,
          left: t.left + a.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function() {
        if (this[0]) {
          var e, t, a, r = this[0],
            n = {
              top: 0,
              left: 0
            };
          if ("fixed" === v.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (t = this.offset(), a = r.ownerDocument, e = r.offsetParent || a.documentElement; e && (e === a.body || e === a.documentElement) && "static" === v.css(e, "position");) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && ((n = v(e).offset()).top += v.css(e, "borderTopWidth", !0), n.left += v.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - n.top - v.css(r, "marginTop", !0),
            left: t.left - n.left - v.css(r, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === v.css(e, "position");) e = e.offsetParent;
          return e || _e
        })
      }
    }), v.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var a = "pageYOffset" === t;
      v.fn[e] = function(r) {
        return Y(this, function(e, r, n) {
          var s;
          if (C(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === n) return s ? s[t] : e[r];
          s ? s.scrollTo(a ? s.pageXOffset : n, a ? n : s.pageYOffset) : e[r] = n
        }, e, r, arguments.length)
      }
    }), v.each(["top", "left"], function(e, t) {
      v.cssHooks[t] = Fe(y.pixelPosition, function(e, a) {
        if (a) return a = Ge(e, t), Re.test(a) ? v(e).position()[t] + "px" : a
      })
    }), v.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      v.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(a, r) {
        v.fn[r] = function(n, s) {
          var o = arguments.length && (a || "boolean" != typeof n),
            i = a || (!0 === n || !0 === s ? "margin" : "border");
          return Y(this, function(t, a, n) {
            var s;
            return C(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === n ? v.css(t, a, i) : v.style(t, a, n, i)
          }, t, o ? n : void 0, o)
        }
      })
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      v.fn[t] = function(e, a) {
        return arguments.length > 0 ? this.on(t, null, e, a) : this.trigger(t)
      }
    }), v.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), v.fn.extend({
      bind: function(e, t, a) {
        return this.on(e, null, t, a)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, a, r) {
        return this.on(t, e, a, r)
      },
      undelegate: function(e, t, a) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", a)
      }
    }), v.proxy = function(e, t) {
      var a, r, n;
      if ("string" == typeof t && (a = e[t], t = e, e = a), b(e)) return r = h.call(arguments, 2), (n = function() {
        return e.apply(t || this, r.concat(h.call(arguments)))
      }).guid = e.guid = e.guid || v.guid++, n
    }, v.holdReady = function(e) {
      e ? v.readyWait++ : v.ready(!0)
    }, v.isArray = Array.isArray, v.parseJSON = JSON.parse, v.nodeName = S, v.isFunction = b, v.isWindow = C, v.camelCase = z, v.type = _, v.now = Date.now, v.isNumeric = function(e) {
      var t = v.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, void 0 === (r = function() {
      return v
    }.apply(t, [])) || (e.exports = r);
    var Xt = a.jQuery,
      Ut = a.$;
    return v.noConflict = function(e) {
      return a.$ === v && (a.$ = Ut), e && a.jQuery === v && (a.jQuery = Xt), v
    }, n || (a.jQuery = a.$ = v), v
  })
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t._getSurroundingTicks = n, t.areShapesAlignedWithTicks = function(e, t, a, s, o, i) {
    if (0 === e.length) return !1;
    var h = 0,
      l = a.match(/c/g) ? a.split("c")[1] : a,
      c = (0, r.getTickValue)(t[t.length - 1], o) > (0, r.getTickValue)(t[0], o),
      u = (0, r.getTickValue)(t[1], o) - (0, r.getTickValue)(t[0], o),
      f = (0, r.getTickPosition)(t[1])[l] - (0, r.getTickPosition)(t[0])[l];
    return e.forEach(function(e) {
      var p = (0, r.getShapePosition)(e, a, i),
        m = (0, r.getShapeValue)(e, s, o),
        g = c ? -1 : t.length,
        d = n(e, m, t, g, u, o, c);
      if (d.length > 0) {
        var y = d[0] ? (0, r.getTickPosition)(d[0])[l] : (0, r.getTickPosition)(d[1])[l] - f,
          b = d[1] ? (0, r.getTickPosition)(d[1])[l] : (0, r.getTickPosition)(d[0])[l] + f,
          C = Math.min(y, b),
          O = Math.max(y, b);
        p >= C - 11 && p <= O + 11 && h++
      }
    }), h === e.length
  };
  var r = a(26);

  function n(e, t, a, n, s, o, i) {
    var h, l = [],
      c = null;
    do {
      h = i ? n + 1 : n - 1;
      var u = a[n] ? (0, r.getTickValue)(a[n], o) : (0, r.getTickValue)(a[h], o) - s,
        f = a[h] ? (0, r.getTickValue)(a[h], o) : (0, r.getTickValue)(a[n], o) + s,
        p = Math.min(u, f),
        m = Math.max(f, u);
      if (t >= p && t < m) {
        var g = a[h] ? a[h] : null;
        l = [a[n] ? a[n] : null, g]
      }
      i ? n++ : n--
    } while (l.length < 2 && (i ? n < a.length : n >= 0));
    return 2 === l.length && (c = l), c
  }
}, function(e, t, a) {
  "use strict";

  function r(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
        return a
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.isTestSuiteRule = t.allCSSRulesAsArray = void 0;
  t.allCSSRulesAsArray = function(e) {
    return [].slice.call(e).reduce(function(e, t) {
      try {
        if (t.cssRules) {
          var a = [].slice.call(t.cssRules);
          e.push.apply(e, r(a))
        }
      } catch (e) {
        if (!(e instanceof DOMException)) throw e
      }
      return e
    }, [])
  };
  t.isTestSuiteRule = function(e) {
    return !(void 0 === e.selectorText || !e.selectorText.includes("fcc_test") && !e.selectorText.includes("mocha"))
  }
}, function(e, t, a) {
  var r, n, s = {},
    o = (r = function() {
      return window && document && document.all && !window.atob
    }, function() {
      return void 0 === n && (n = r.apply(this, arguments)), n
    }),
    i = function(e) {
      var t = {};
      return function(e) {
        return void 0 === t[e] && (t[e] = function(e) {
          return document.querySelector(e)
        }.call(this, e)), t[e]
      }
    }(),
    h = null,
    l = 0,
    c = [],
    u = a(41);

  function f(e, t) {
    for (var a = 0; a < e.length; a++) {
      var r = e[a],
        n = s[r.id];
      if (n) {
        n.refs++;
        for (var o = 0; o < n.parts.length; o++) n.parts[o](r.parts[o]);
        for (; o < r.parts.length; o++) n.parts.push(b(r.parts[o], t))
      } else {
        var i = [];
        for (o = 0; o < r.parts.length; o++) i.push(b(r.parts[o], t));
        s[r.id] = {
          id: r.id,
          refs: 1,
          parts: i
        }
      }
    }
  }

  function p(e, t) {
    for (var a = [], r = {}, n = 0; n < e.length; n++) {
      var s = e[n],
        o = t.base ? s[0] + t.base : s[0],
        i = {
          css: s[1],
          media: s[2],
          sourceMap: s[3]
        };
      r[o] ? r[o].parts.push(i) : a.push(r[o] = {
        id: o,
        parts: [i]
      })
    }
    return a
  }

  function m(e, t) {
    var a = i(e.insertInto);
    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var r = c[c.length - 1];
    if ("top" === e.insertAt) r ? r.nextSibling ? a.insertBefore(t, r.nextSibling) : a.appendChild(t) : a.insertBefore(t, a.firstChild), c.push(t);
    else {
      if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
      a.appendChild(t)
    }
  }

  function g(e) {
    if (null === e.parentNode) return !1;
    e.parentNode.removeChild(e);
    var t = c.indexOf(e);
    t >= 0 && c.splice(t, 1)
  }

  function d(e) {
    var t = document.createElement("style");
    return e.attrs.type = "text/css", y(t, e.attrs), m(e, t), t
  }

  function y(e, t) {
    Object.keys(t).forEach(function(a) {
      e.setAttribute(a, t[a])
    })
  }

  function b(e, t) {
    var a, r, n, s;
    if (t.transform && e.css) {
      if (!(s = t.transform(e.css))) return function() {};
      e.css = s
    }
    if (t.singleton) {
      var o = l++;
      a = h || (h = d(t)), r = H.bind(null, a, o, !1), n = H.bind(null, a, o, !0)
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = function(e) {
      var t = document.createElement("link");
      return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", y(t, e.attrs), m(e, t), t
    }(t), r = function(e, t, a) {
      var r = a.css,
        n = a.sourceMap,
        s = void 0 === t.convertToAbsoluteUrls && n;
      (t.convertToAbsoluteUrls || s) && (r = u(r));
      n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
      var o = new Blob([r], {
          type: "text/css"
        }),
        i = e.href;
      e.href = URL.createObjectURL(o), i && URL.revokeObjectURL(i)
    }.bind(null, a, t), n = function() {
      g(a), a.href && URL.revokeObjectURL(a.href)
    }) : (a = d(t), r = function(e, t) {
      var a = t.css,
        r = t.media;
      r && e.setAttribute("media", r);
      if (e.styleSheet) e.styleSheet.cssText = a;
      else {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(a))
      }
    }.bind(null, a), n = function() {
      g(a)
    });
    return r(e),
      function(t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t)
        } else n()
      }
  }
  e.exports = function(e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
    var a = p(e, t);
    return f(a, t),
      function(e) {
        for (var r = [], n = 0; n < a.length; n++) {
          var o = a[n];
          (i = s[o.id]).refs--, r.push(i)
        }
        e && f(p(e, t), t);
        for (n = 0; n < r.length; n++) {
          var i;
          if (0 === (i = r[n]).refs) {
            for (var h = 0; h < i.parts.length; h++) i.parts[h]();
            delete s[i.id]
          }
        }
      }
  };
  var C, O = (C = [], function(e, t) {
    return C[e] = t, C.filter(Boolean).join("\n")
  });

  function H(e, t, a, r) {
    var n = a ? "" : r.css;
    if (e.styleSheet) e.styleSheet.cssText = O(t, n);
    else {
      var s = document.createTextNode(n),
        o = e.childNodes;
      o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(s, o[t]) : e.appendChild(s)
    }
  }
}, function(e, t) {
  e.exports = function(e) {
    var t = [];
    return t.toString = function() {
      return this.map(function(t) {
        var a = function(e, t) {
          var a = e[1] || "",
            r = e[3];
          if (!r) return a;
          if (t && "function" == typeof btoa) {
            var n = (o = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
              s = r.sources.map(function(e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */"
              });
            return [a].concat(s).concat([n]).join("\n")
          }
          var o;
          return [a].join("\n")
        }(t, e);
        return t[2] ? "@media " + t[2] + "{" + a + "}" : a
      }).join("")
    }, t.i = function(e, a) {
      "string" == typeof e && (e = [
        [null, e, ""]
      ]);
      for (var r = {}, n = 0; n < this.length; n++) {
        var s = this[n][0];
        "number" == typeof s && (r[s] = !0)
      }
      for (n = 0; n < e.length; n++) {
        var o = e[n];
        "number" == typeof o[0] && r[o[0]] || (a && !o[2] ? o[2] = a : a && (o[2] = "(" + o[2] + ") and (" + a + ")"), t.push(o))
      }
    }, t
  }
}, function(e, t, a) {
  var r = a(17),
    n = a(69),
    s = a(68);
  e.exports = function(e, t, a, r) {
    return i({
      showHidden: t,
      seen: [],
      stylize: function(e) {
        return e
      }
    }, e, void 0 === a ? 2 : a)
  };
  var o = function(e) {
    return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
  };

  function i(e, a, m) {
    if (a && "function" == typeof a.inspect && a.inspect !== t.inspect && (!a.constructor || a.constructor.prototype !== a)) {
      var g = a.inspect(m);
      return "string" != typeof g && (g = i(e, g, m)), g
    }
    var d = function(e, t) {
      switch (typeof t) {
        case "undefined":
          return e.stylize("undefined", "undefined");
        case "string":
          var a = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return e.stylize(a, "string");
        case "number":
          return 0 === t && 1 / t == -1 / 0 ? e.stylize("-0", "number") : e.stylize("" + t, "number");
        case "boolean":
          return e.stylize("" + t, "boolean")
      }
      if (null === t) return e.stylize("null", "null")
    }(e, a);
    if (d) return d;
    if (o(a)) {
      if ("outerHTML" in a) return a.outerHTML;
      try {
        if (document.xmlVersion) return (new XMLSerializer).serializeToString(a);
        var y = document.createElementNS("http://www.w3.org/1999/xhtml", "_");
        return y.appendChild(a.cloneNode(!1)), html = y.innerHTML.replace("><", ">" + a.innerHTML + "<"), y.innerHTML = "", html
      } catch (e) {}
    }
    var b = s(a),
      C = e.showHidden ? n(a) : b;
    if (0 === C.length || f(a) && (1 === C.length && "stack" === C[0] || 2 === C.length && "description" === C[0] && "stack" === C[1])) {
      if ("function" == typeof a) {
        var O = (_ = r(a)) ? ": " + _ : "";
        return e.stylize("[Function" + O + "]", "special")
      }
      if (c(a)) return e.stylize(RegExp.prototype.toString.call(a), "regexp");
      if (u(a)) return e.stylize(Date.prototype.toUTCString.call(a), "date");
      if (f(a)) return h(a)
    }
    var H, _, v, w = "",
      A = !1,
      T = ["{", "}"];
    (H = a, (Array.isArray(H) || "object" == typeof H && "[object Array]" === p(H)) && (A = !0, T = ["[", "]"]), "function" == typeof a) && (w = " [Function" + (O = (_ = r(a)) ? ": " + _ : "") + "]");
    return c(a) && (w = " " + RegExp.prototype.toString.call(a)), u(a) && (w = " " + Date.prototype.toUTCString.call(a)), f(a) ? h(a) : 0 !== C.length || A && 0 != a.length ? m < 0 ? c(a) ? e.stylize(RegExp.prototype.toString.call(a), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(a), v = A ? function(e, t, a, r, n) {
      for (var s = [], o = 0, i = t.length; o < i; ++o) Object.prototype.hasOwnProperty.call(t, String(o)) ? s.push(l(e, t, a, r, String(o), !0)) : s.push("");
      return n.forEach(function(n) {
        n.match(/^\d+$/) || s.push(l(e, t, a, r, n, !0))
      }), s
    }(e, a, m, b, C) : C.map(function(t) {
      return l(e, a, m, b, t, A)
    }), e.seen.pop(), function(e, t, a) {
      if (e.reduce(function(e, t) {
          return 0, t.indexOf("\n") >= 0 && 0, e + t.length + 1
        }, 0) > 60) return a[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + a[1];
      return a[0] + t + " " + e.join(", ") + " " + a[1]
    }(v, w, T)) : T[0] + w + T[1]
  }

  function h(e) {
    return "[" + Error.prototype.toString.call(e) + "]"
  }

  function l(e, t, a, r, n, s) {
    var o, h;
    if (t.__lookupGetter__ && (t.__lookupGetter__(n) ? h = t.__lookupSetter__(n) ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : t.__lookupSetter__(n) && (h = e.stylize("[Setter]", "special"))), r.indexOf(n) < 0 && (o = "[" + n + "]"), h || (e.seen.indexOf(t[n]) < 0 ? (h = i(e, t[n], null === a ? null : a - 1)).indexOf("\n") > -1 && (h = s ? h.split("\n").map(function(e) {
        return "  " + e
      }).join("\n").substr(2) : "\n" + h.split("\n").map(function(e) {
        return "   " + e
      }).join("\n")) : h = e.stylize("[Circular]", "special")), void 0 === o) {
      if (s && n.match(/^\d+$/)) return h;
      (o = JSON.stringify("" + n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"))
    }
    return o + ": " + h
  }

  function c(e) {
    return "object" == typeof e && "[object RegExp]" === p(e)
  }

  function u(e) {
    return "object" == typeof e && "[object Date]" === p(e)
  }

  function f(e) {
    return "object" == typeof e && "[object Error]" === p(e)
  }

  function p(e) {
    return Object.prototype.toString.call(e)
  }
}, function(e, t, a) {
  e.exports = a(72)
}, function(e, t, a) {
  /*!
   * Chai - hasProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = a(12),
    n = {
      number: Number,
      string: String
    };
  e.exports = function(e, t) {
    var a = r(t);
    return "null" !== a && "undefined" !== a && (n[a] && "object" != typeof t && (t = new n[a](t)), e in t)
  }
}, function(e, t, a) {
  /*!
   * Chai - getPathInfo utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = a(13);
  /*!
   * ## _getPathValue(parsed, obj)
   *
   * Helper companion function for `.parsePath` that returns
   * the value located at the parsed address.
   *
   *      var value = getPathValue(parsed, obj);
   *
   * @param {Object} parsed definition from `parsePath`.
   * @param {Object} object to search against
   * @param {Number} object to search against
   * @returns {Object|Undefined} value
   * @api private
   */
  function n(e, t, a) {
    for (var r, n = t, s = 0, o = a = void 0 === a ? e.length : a; s < o; s++) {
      var i = e[s];
      n ? (void 0 !== i.p ? n = n[i.p] : void 0 !== i.i && (n = n[i.i]), s == o - 1 && (r = n)) : r = void 0
    }
    return r
  }
  e.exports = function(e, t) {
    var a =
      /*!
       * ## parsePath(path)
       *
       * Helper function used to parse string object
       * paths. Use in conjunction with `_getPathValue`.
       *
       *      var parsed = parsePath('myobject.property.subprop');
       *
       * ### Paths:
       *
       * * Can be as near infinitely deep and nested
       * * Arrays are also valid using the formal `myobject.document[3].property`.
       * * Literal dots and brackets (not delimiter) must be backslash-escaped.
       *
       * @param {String} path
       * @returns {Object} parsed
       * @api private
       */
      function(e) {
        return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map(function(e) {
          var t = /^\[(\d+)\]$/.exec(e);
          return t ? {
            i: parseFloat(t[1])
          } : {
            p: e.replace(/\\([.\[\]])/g, "$1")
          }
        })
      }(e),
      s = a[a.length - 1],
      o = {
        parent: a.length > 1 ? n(a, t, a.length - 1) : t,
        name: s.p || s.i,
        value: n(a, t)
      };
    return o.exists = r(o.name, o.parent), o
  }
}, function(e, t) {
  /*!
   * Chai - transferFlags utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t, a) {
    var r = e.__flags || (e.__flags = Object.create(null));
    for (var n in t.__flags || (t.__flags = Object.create(null)), a = 3 !== arguments.length || a, r)(a || "object" !== n && "ssfi" !== n && "message" != n) && (t.__flags[n] = r[n])
  }
}, function(e, t, a) {
  /*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependancies
   */
  var r = a(11),
    n = a(4);
  e.exports = function(e) {
    var t = r(e),
      a = Object.prototype.toString.call(e);
    if (n.truncateThreshold && t.length >= n.truncateThreshold) {
      if ("[object Function]" === a) return e.name && "" !== e.name ? "[Function: " + e.name + "]" : "[Function]";
      if ("[object Array]" === a) return "[ Array(" + e.length + ") ]";
      if ("[object Object]" === a) {
        var s = Object.keys(e);
        return "{ Object (" + (s.length > 2 ? s.splice(0, 2).join(", ") + ", ..." : s.join(", ")) + ") }"
      }
      return t
    }
    return t
  }
}, function(e, t) {
  /*!
   * Chai - getName utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e) {
    if (e.name) return e.name;
    var t = /^\s?function ([^(]*)\(/.exec(e);
    return t && t[1] ? t[1] : ""
  }
}, function(e, t) {
  /*!
   * Chai - getActual utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t) {
    return t.length > 4 ? t[4] : e._obj
  }
}, function(e, t) {
  /*!
   * assertion-error
   * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
   * MIT Licensed
   */
  /*!
   * Return a function that will copy properties from
   * one object to another excluding any originally
   * listed. Returned function will create a new `{}`.
   *
   * @param {String} excluded properties ...
   * @return {Function}
   */
  function a() {
    var e = [].slice.call(arguments);

    function t(t, a) {
      Object.keys(a).forEach(function(r) {
        ~e.indexOf(r) || (t[r] = a[r])
      })
    }
    return function() {
      for (var e = [].slice.call(arguments), a = 0, r = {}; a < e.length; a++) t(r, e[a]);
      return r
    }
  }

  function r(e, t, n) {
    var s = a("name", "message", "stack", "constructor", "toJSON")(t || {});
    for (var o in this.message = e || "Unspecified AssertionError", this.showDiff = !1, s) this[o] = s[o];
    if (n = n || r, Error.captureStackTrace) Error.captureStackTrace(this, n);
    else try {
      throw new Error
    } catch (e) {
      this.stack = e.stack
    }
  }
  /*!
   * Inherit from Error.prototype
   */
  /*!
   * Primary Exports
   */
  e.exports = r, r.prototype = Object.create(Error.prototype),
    /*!
     * Statically set name
     */
    r.prototype.name = "AssertionError",
    /*!
     * Ensure correct constructor
     */
    r.prototype.constructor = r, r.prototype.toJSON = function(e) {
      var t = a("constructor", "toJSON", "stack")({
        name: this.name
      }, this);
      return !1 !== e && this.stack && (t.stack = this.stack), t
    }
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("#HeatMapTests", function() {
      describe("#Technology Stack", function() {
        it(r.d3ProjectStackNoAxes, function() {
          return !0
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. My heat map should have a title with a corresponding\n      id="title".'), function() {
          o.assert.isNotNull(document.getElementById("title"), 'Could not find an element with id="title" ')
        }), e++, it("".concat(e, '. My heat map should have a description with a corresponding\n      id="description".'), function() {
          o.assert.isNotNull(document.getElementById("description"), 'Could not find an element with id="description" ')
        }), e++, it("".concat(e, '. My heat map should have an x-axis with a corresponding\n      id="x-axis".'), function() {
          o.assert.isNotNull(document.getElementById("x-axis"), 'Could not find an element with id="x-axis" ')
        }), e++, it("".concat(e, '. My heat map should have a y-axis with a corresponding\n      id="y-axis".'), function() {
          o.assert.isNotNull(document.getElementById("y-axis"), 'Could not find an element with id="y-axis" ')
        }), e++, it("".concat(e, '. My heat map should have <rect> elements with a class="cell"\n      that represent the data.'), function() {
          o.assert.isAbove(document.querySelectorAll("rect.cell").length, 0, 'Could not find any <rect> elements with a class="cell" ')
        }), e++, it("".concat(e, ". There should be at least 4 different fill colors used for\n      the cells."), function() {
          var e = document.querySelectorAll("rect.cell");
          o.assert.isTrue((0, n.hasUniqueColorsCount)(e, 4), "There should be four or more fill colors used for the cells ")
        }), e++, it("".concat(e, '. Each cell will have the properties "data-month",\n      "data-year", "data-temp" containing their corresponding month, year, and\n      temperature values.'), function() {
          var e = document.querySelectorAll("rect.cell");
          o.assert.isAbove(e.length, 0, 'Could not find any <rect> elements with a class="cell" '), e.forEach(function(e) {
            o.assert.isNotNull(e.getAttribute("data-month"), 'Could not find property "data-month" in cell '), o.assert.isNotNull(e.getAttribute("data-year"), 'Could not find property "data-year" in cell '), o.assert.isNotNull(e.getAttribute("data-temp"), 'Could not find property "data-temp" in cell ')
          })
        }), e++, it("".concat(e, '. The "data-month", "data-year" of each cell should be\n      within the range of the data.'), function() {
          var e = document.querySelectorAll("rect.cell");
          o.assert.isAbove(e.length, 0, 'Could not find any <rect> elements with a class="cell" '), e.forEach(function(e) {
            var t = e.getAttribute("data-month");
            o.assert.isAtLeast(t, 0, "data-month should be at least 0"), o.assert.isAtMost(t, 11, "data-month should be at most 11")
          }), e.forEach(function(e) {
            var t = e.getAttribute("data-year");
            o.assert.isAtLeast(t, 1753, "data-year should be at least 1753"), o.assert.isAtMost(t, 2015, "data-year should be at most 2015")
          })
        }), e++, it("".concat(e, ". My heat map should have cells that align with the\n      corresponding month on the y-axis."), function() {
          var e = document.querySelector("#y-axis"),
            t = document.querySelectorAll("rect.cell"),
            a = e.querySelectorAll(".tick");
          o.assert.isTrue((0, s.areShapesAlignedWithTicks)(t, a, "y", "data-month", "month", "center"), "month values don't line up with y locations ")
        }), e++, it("".concat(e, ". My heat map should have cells that align with the\n      corresponding year on the x-axis."), function() {
          var e = document.querySelectorAll("rect.cell"),
            t = document.querySelector("#x-axis"),
            a = t.querySelectorAll(".tick");
          o.assert.isTrue((0, s.areShapesAlignedWithTicks)(e, a, "x", "data-year", "year", "center"), "year values don't line up with x locations ")
        }), e++, it("".concat(e, ". My heat map should have multiple tick labels on the y-axis\n      with the full month name."), function() {
          var e = document.querySelectorAll("#y-axis .tick"),
            t = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
          o.assert.isAbove(e.length, 0, "Could not find tick labels on the y axis"), e.forEach(function(e) {
            o.assert.include(t, e.textContent.toLowerCase(), "Y axis labels should contain full month names (example: January)")
          })
        }), e++, it("".concat(e, ". My heat map should have multiple tick labels on the x-axis\n      with the years between 1754 and 2015."), function() {
          var e = document.querySelectorAll("#x-axis .tick");
          o.assert.isAbove(e.length, 0, "Could not find tick labels on the x axis"), e.forEach(function(e) {
            o.assert.isAtLeast(e.textContent, 1754, "X axis labels should contain a year that's at least 1754 "), o.assert.isAtMost(e.textContent, 2015, "X axis labels should contain a year that's at most 2015 ")
          })
        }), e++, it("".concat(e, '. My heat map should have a legend with corresponding\n      id="legend".'), function() {
          o.assert.isNotNull(document.getElementById("legend"), 'Could not find an element with id="legend" ')
        }), e++, it("".concat(e, ". My legend should contain <rect> elements."), function() {
          o.assert.isAbove(document.querySelectorAll("#legend rect").length, 0, "Could not find <rect> elements contained by the legend element ")
        }), e++, it("".concat(e, ". The <rect> elements in the legend should use at least 4 \n      different fill colors"), function() {
          var e = document.querySelectorAll("#legend rect");
          o.assert.isTrue((0, n.hasUniqueColorsCount)(e, 4), "There should be four or more fill colors used for the legend ")
        })
      }), (0, i.testToolTip)(document.querySelectorAll(".cell"), "data-year", "data-year")
    })
  };
  var r = a(1),
    n = a(3),
    s = a(7),
    o = a(0),
    i = a(5)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("Random Quote Machine tests", function() {
      describe("#Technology Stack", function() {
        it(s.frontEndLibrariesStack, function() {
          return !0
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. I can see a wrapper element with a corresponding\n      id="quote-box".'), function() {
          r.assert.isNotNull(document.getElementById("quote-box"))
        }), e++, it("".concat(e, '. Within #quote-box, I can see an element with corresponding\n      id="text".'), function() {
          r.assert.isNotNull(document.getElementById("text"), "#text is not defined "), r.assert.strictEqual(document.querySelectorAll("#quote-box #text").length, 1, "#text is not a child of #quote-box ")
        }), e++, it("".concat(e, '. Within #quote-box, I can see an element with corresponding\n      id="author".'), function() {
          r.assert.isNotNull(document.getElementById("author"), "#author is not defined "), r.assert.strictEqual(document.querySelectorAll("#quote-box #author").length, 1, "#author is not a child of #quote-box ")
        }), e++, it("".concat(e, '. Within #quote-box, I can see a clickable element with\n      corresponding id="new-quote".'), function() {
          r.assert.isNotNull(document.getElementById("new-quote"), "#new-quote is not defined "), r.assert.strictEqual(document.querySelectorAll("#quote-box #new-quote").length, 1, "#new-quote button is not a child of #quote-box ")
        }), e++, it("".concat(e, '. Within #quote-box, I can see a clickable <a> element with\n      corresponding id="tweet-quote".'), function() {
          r.assert.isNotNull(document.getElementById("tweet-quote")), r.assert.strictEqual(document.getElementById("tweet-quote").nodeName, "A", "#tweet-quote element is not an <a> element"), r.assert.strictEqual(document.querySelectorAll("#quote-box #tweet-quote").length, 1, "#tweet-quote element is not a child of #quote-box ")
        }), e++, it("".concat(e, '. On first load, my quote machine displays a random quote in\n      the element with id="text".'), function() {
          return this.timeout(15e3), new Promise(function(e) {
            var t = setInterval(function() {
              var a = document.getElementById("text");
              a.innerText.length > 0 && (console.log("Clearing interval " + t), clearInterval(t), e())
            }, 500)
          })
        }), e++, it("".concat(e, '. On first load, my quote machine displays the random quote\'s\n      author in the element with id="author".'), function() {
          return this.timeout(15e3), new Promise(function(e) {
            var t = setInterval(function() {
              var a = document.getElementById("author");
              a.innerText.length > 0 && (console.log("Clearing interval " + t), clearInterval(t), e())
            }, 500)
          })
        }), e++, it("".concat(e, ". When the #new-quote button is clicked, my quote machine\n      should fetch a new quote and display it in the #text element."), function() {
          var e;
          return this.timeout(15e3), e = document.getElementById("text").innerText, document.getElementById("new-quote").click(), new Promise(function(t) {
            var a = setInterval(function() {
              var r = document.getElementById("text").innerText;
              r !== e && (clearInterval(a), t())
            }, 500)
          })
        }), e++, it("".concat(e, ". My quote machine should fetch the new quote's author when\n      the #new-quote button is clicked and display it in the #author element."), function() {
          var e;
          return this.timeout(15e3), e = document.getElementById("author").innerText, document.getElementById("new-quote").click(), new Promise(function(t) {
            var a = setInterval(function() {
              var r = document.getElementById("author").innerText;
              r !== e && (clearInterval(a), t())
            }, 500)
          })
        }), e++, it("".concat(e, '. I can tweet the current quote by clicking on the\n      #tweet-quote <a> element. This <a> element should include the\n      "twitter.com/intent/tweet" path in it\'s href attribute to tweet the\n      current quote.'), function() {
          r.assert.isOk(document.getElementById("tweet-quote").hasAttribute("href"), "#tweet-quote <a> element must have an href attribute ");
          var e = document.getElementById("tweet-quote").href;
          r.assert.include(e.toLowerCase(), "twitter.com/intent/tweet", "The #tweet-quote element does not utilize the correct twitter intent ")
        })
      }), describe("#Layout", function() {
        var e = 0;
        it("".concat(++e, ". The #quote-box wrapper element should be horizontally\n      centered. Please run tests with browser's zoom level at 100% and page\n      maximized."), function() {
          r.assert.isOk((0, n.testHorizontallyCentered)("quote-box", window))
        })
      })
    })
  };
  var r = a(0),
    n = a(3),
    s = a(1)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("#TreeMapTests", function() {
      describe("#Technology Stack", function() {
        it(s.d3ProjectStack, function() {
          return !0
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. My tree map should have a title with a corresponding\n      id="title"'), function() {
          r.assert.isNotNull(document.getElementById("title"), 'Could not find element with id="title" ')
        }), e++, it("".concat(e, '. My tree map should have a description with a corresponding\n      id="description"'), function() {
          r.assert.isNotNull(document.getElementById("description"), 'Could not find element with id="description" ')
        }), e++, it("".concat(e, '. My tree map should have <rect> elements with a\n      corresponding class="tile" that represent the data'), function() {
          r.assert.isAbove(document.querySelectorAll("rect.tile").length, 0, 'Could not find <rect> elements with class="tile" ')
        }), e++, it("".concat(e, ". There should be at least 2 different fill colors used for\n      the tiles"), function() {
          var e = document.querySelectorAll("rect.tile");
          r.assert.isTrue((0, o.hasUniqueColorsCount)(e, 2), "There should be two or more fill colors used for the tiles")
        }), e++, it("".concat(e, '. Each tile should have the properties "data-name",\n      "data-category",  and "data-value" containing their corresponding name,\n      category, and value'), function() {
          var e = document.querySelectorAll("rect.tile");
          r.assert.isAbove(e.length, 0, 'Could not find any elements with a class="tile"'), e.forEach(function(e) {
            r.assert.isNotNull(e.getAttribute("data-name"), "Could not find property 'data-name' in tile"), r.assert.isNotNull(e.getAttribute("data-category"), "Could not find property 'data-category' in tile"), r.assert.isNotNull(e.getAttribute("data-value"), "Could not find property 'data-value' in tile")
          })
        }), e++, it("".concat(e, ".  The area of each tile should correspond to the data-value\n      amount: tiles with a larger data-value should have a bigger area."), function() {
          var e, t = document.querySelectorAll("rect.tile"),
            a = {};
          r.assert.isAbove(t.length, 0, 'Could not find any <rect> elements with a class="tile"');
          var n = [].slice.call(t);
          for (var s in n.forEach(function(t) {
              e = t.getAttribute("data-category"), a[e] || (a[e] = []), a[e].push(t)
            }), a) Object.prototype.hasOwnProperty.call(a, s) && (e = a[s]).sort(function(e, t) {
            var a = e.getAttribute("data-value"),
              r = t.getAttribute("data-value");
            return a - r
          });
          for (var o in a)
            if (Object.prototype.hasOwnProperty.call(a, o) && a[o].length > 1)
              for (var i = 0; i < a[o].length - 1; i++) {
                var h = +a[o][i].getAttribute("width") * +a[o][i].getAttribute("height"),
                  l = +a[o][i + 1].getAttribute("width") * +a[o][i + 1].getAttribute("height");
                r.assert.isAtMost(h, l, "the relative data-value property does not match tile area")
              }
        }), e++, it("".concat(e, '. My tree map should have a legend with corresponding\n      id="legend"'), function() {
          r.assert.isNotNull(document.getElementById("legend"), 'Could not find element with id="legend" ')
        }), e++, it("".concat(e, '. My legend should have <rect> elements with a\n      corresponding class="legend-item"'), function() {
          r.assert.isAbove(document.querySelectorAll("#legend rect.legend-item").length, 0, 'Could not find <rect> elements with class="legend-item" ')
        }), e++, it("".concat(e, ". The <rect> elements in the legend should use at least 2 \n      different fill colors"), function() {
          var e = document.querySelectorAll("#legend rect.legend-item");
          r.assert.isTrue((0, o.hasUniqueColorsCount)(e, 2), "There should be two or more fill colors used for the legend ")
        })
      }), (0, n.testToolTip)(document.querySelectorAll(".tile"), "data-value", "data-value")
    })
  };
  var r = a(0),
    n = a(5),
    s = a(1),
    o = a(3)
}, function(e) {
  e.exports = [{
    fips: 1001,
    state: "AL",
    area_name: "Autauga County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 1003,
    state: "AL",
    area_name: "Baldwin County",
    bachelorsOrHigher: 28.6
  }, {
    fips: 1005,
    state: "AL",
    area_name: "Barbour County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 1007,
    state: "AL",
    area_name: "Bibb County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 1009,
    state: "AL",
    area_name: "Blount County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 1011,
    state: "AL",
    area_name: "Bullock County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 1013,
    state: "AL",
    area_name: "Butler County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 1015,
    state: "AL",
    area_name: "Calhoun County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 1017,
    state: "AL",
    area_name: "Chambers County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 1019,
    state: "AL",
    area_name: "Cherokee County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 1021,
    state: "AL",
    area_name: "Chilton County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 1023,
    state: "AL",
    area_name: "Choctaw County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 1025,
    state: "AL",
    area_name: "Clarke County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 1027,
    state: "AL",
    area_name: "Clay County",
    bachelorsOrHigher: 8.6
  }, {
    fips: 1029,
    state: "AL",
    area_name: "Cleburne County",
    bachelorsOrHigher: 10.6
  }, {
    fips: 1031,
    state: "AL",
    area_name: "Coffee County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 1033,
    state: "AL",
    area_name: "Colbert County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 1035,
    state: "AL",
    area_name: "Conecuh County",
    bachelorsOrHigher: 8.3
  }, {
    fips: 1037,
    state: "AL",
    area_name: "Coosa County",
    bachelorsOrHigher: 9.1
  }, {
    fips: 1039,
    state: "AL",
    area_name: "Covington County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 1041,
    state: "AL",
    area_name: "Crenshaw County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 1043,
    state: "AL",
    area_name: "Cullman County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 1045,
    state: "AL",
    area_name: "Dale County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 1047,
    state: "AL",
    area_name: "Dallas County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 1049,
    state: "AL",
    area_name: "DeKalb County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 1051,
    state: "AL",
    area_name: "Elmore County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 1053,
    state: "AL",
    area_name: "Escambia County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 1055,
    state: "AL",
    area_name: "Etowah County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 1057,
    state: "AL",
    area_name: "Fayette County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 1059,
    state: "AL",
    area_name: "Franklin County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 1061,
    state: "AL",
    area_name: "Geneva County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 1063,
    state: "AL",
    area_name: "Greene County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 1065,
    state: "AL",
    area_name: "Hale County",
    bachelorsOrHigher: 14
  }, {
    fips: 1067,
    state: "AL",
    area_name: "Henry County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 1069,
    state: "AL",
    area_name: "Houston County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 1071,
    state: "AL",
    area_name: "Jackson County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 1073,
    state: "AL",
    area_name: "Jefferson County",
    bachelorsOrHigher: 30.3
  }, {
    fips: 1075,
    state: "AL",
    area_name: "Lamar County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 1077,
    state: "AL",
    area_name: "Lauderdale County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 1079,
    state: "AL",
    area_name: "Lawrence County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 1081,
    state: "AL",
    area_name: "Lee County",
    bachelorsOrHigher: 33.2
  }, {
    fips: 1083,
    state: "AL",
    area_name: "Limestone County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 1085,
    state: "AL",
    area_name: "Lowndes County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 1087,
    state: "AL",
    area_name: "Macon County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 1089,
    state: "AL",
    area_name: "Madison County",
    bachelorsOrHigher: 38.6
  }, {
    fips: 1091,
    state: "AL",
    area_name: "Marengo County",
    bachelorsOrHigher: 16
  }, {
    fips: 1093,
    state: "AL",
    area_name: "Marion County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 1095,
    state: "AL",
    area_name: "Marshall County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 1097,
    state: "AL",
    area_name: "Mobile County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 1099,
    state: "AL",
    area_name: "Monroe County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 1101,
    state: "AL",
    area_name: "Montgomery County",
    bachelorsOrHigher: 31.3
  }, {
    fips: 1103,
    state: "AL",
    area_name: "Morgan County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 1105,
    state: "AL",
    area_name: "Perry County",
    bachelorsOrHigher: 9.1
  }, {
    fips: 1107,
    state: "AL",
    area_name: "Pickens County",
    bachelorsOrHigher: 9.6
  }, {
    fips: 1109,
    state: "AL",
    area_name: "Pike County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 1111,
    state: "AL",
    area_name: "Randolph County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 1113,
    state: "AL",
    area_name: "Russell County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 1115,
    state: "AL",
    area_name: "St. Clair County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 1117,
    state: "AL",
    area_name: "Shelby County",
    bachelorsOrHigher: 40.2
  }, {
    fips: 1119,
    state: "AL",
    area_name: "Sumter County",
    bachelorsOrHigher: 15
  }, {
    fips: 1121,
    state: "AL",
    area_name: "Talladega County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 1123,
    state: "AL",
    area_name: "Tallapoosa County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 1125,
    state: "AL",
    area_name: "Tuscaloosa County",
    bachelorsOrHigher: 27.7
  }, {
    fips: 1127,
    state: "AL",
    area_name: "Walker County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 1129,
    state: "AL",
    area_name: "Washington County",
    bachelorsOrHigher: 10.3
  }, {
    fips: 1131,
    state: "AL",
    area_name: "Wilcox County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 1133,
    state: "AL",
    area_name: "Winston County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 2013,
    state: "AK",
    area_name: "Aleutians East Borough",
    bachelorsOrHigher: 12.6
  }, {
    fips: 2016,
    state: "AK",
    area_name: "Aleutians West Census Area",
    bachelorsOrHigher: 15.4
  }, {
    fips: 2020,
    state: "AK",
    area_name: "Anchorage Municipality",
    bachelorsOrHigher: 32.9
  }, {
    fips: 2050,
    state: "AK",
    area_name: "Bethel Census Area",
    bachelorsOrHigher: 11.4
  }, {
    fips: 2060,
    state: "AK",
    area_name: "Bristol Bay Borough",
    bachelorsOrHigher: 20.2
  }, {
    fips: 2068,
    state: "AK",
    area_name: "Denali Borough",
    bachelorsOrHigher: 29.5
  }, {
    fips: 2070,
    state: "AK",
    area_name: "Dillingham Census Area",
    bachelorsOrHigher: 16.6
  }, {
    fips: 2090,
    state: "AK",
    area_name: "Fairbanks North Star Borough",
    bachelorsOrHigher: 30.5
  }, {
    fips: 2100,
    state: "AK",
    area_name: "Haines Borough",
    bachelorsOrHigher: 31.3
  }, {
    fips: 2105,
    state: "AK",
    area_name: "Hoonah-Angoon Census Area",
    bachelorsOrHigher: 29.3
  }, {
    fips: 2110,
    state: "AK",
    area_name: "Juneau City and Borough",
    bachelorsOrHigher: 37.8
  }, {
    fips: 2122,
    state: "AK",
    area_name: "Kenai Peninsula Borough",
    bachelorsOrHigher: 23.3
  }, {
    fips: 2130,
    state: "AK",
    area_name: "Ketchikan Gateway Borough",
    bachelorsOrHigher: 24.6
  }, {
    fips: 2150,
    state: "AK",
    area_name: "Kodiak Island Borough",
    bachelorsOrHigher: 21.6
  }, {
    fips: 2164,
    state: "AK",
    area_name: "Lake and Peninsula Borough",
    bachelorsOrHigher: 13.7
  }, {
    fips: 2170,
    state: "AK",
    area_name: "Matanuska-Susitna Borough",
    bachelorsOrHigher: 20.9
  }, {
    fips: 2180,
    state: "AK",
    area_name: "Nome Census Area",
    bachelorsOrHigher: 14.7
  }, {
    fips: 2185,
    state: "AK",
    area_name: "North Slope Borough",
    bachelorsOrHigher: 13.4
  }, {
    fips: 2188,
    state: "AK",
    area_name: "Northwest Arctic Borough",
    bachelorsOrHigher: 12
  }, {
    fips: 2195,
    state: "AK",
    area_name: "Petersburg Census Area",
    bachelorsOrHigher: 25.2
  }, {
    fips: 2198,
    state: "AK",
    area_name: "Prince of Wales-Hyder Census Area",
    bachelorsOrHigher: 16.3
  }, {
    fips: 2220,
    state: "AK",
    area_name: "Sitka City and Borough",
    bachelorsOrHigher: 32.9
  }, {
    fips: 2230,
    state: "AK",
    area_name: "Skagway Municipality",
    bachelorsOrHigher: 34.6
  }, {
    fips: 2240,
    state: "AK",
    area_name: "Southeast Fairbanks Census Area",
    bachelorsOrHigher: 20.7
  }, {
    fips: 2261,
    state: "AK",
    area_name: "Valdez-Cordova Census Area",
    bachelorsOrHigher: 24.1
  }, {
    fips: 2158,
    state: "AK",
    area_name: "Kusilvak Census Area",
    bachelorsOrHigher: 4.5
  }, {
    fips: 2275,
    state: "AK",
    area_name: "Wrangell City and Borough",
    bachelorsOrHigher: 18.7
  }, {
    fips: 2282,
    state: "AK",
    area_name: "Yakutat City and Borough",
    bachelorsOrHigher: 20.3
  }, {
    fips: 2290,
    state: "AK",
    area_name: "Yukon-Koyukuk Census Area",
    bachelorsOrHigher: 10.1
  }, {
    fips: 4001,
    state: "AZ",
    area_name: "Apache County",
    bachelorsOrHigher: 10.1
  }, {
    fips: 4003,
    state: "AZ",
    area_name: "Cochise County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 4005,
    state: "AZ",
    area_name: "Coconino County",
    bachelorsOrHigher: 32.8
  }, {
    fips: 4007,
    state: "AZ",
    area_name: "Gila County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 4009,
    state: "AZ",
    area_name: "Graham County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 4011,
    state: "AZ",
    area_name: "Greenlee County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 4012,
    state: "AZ",
    area_name: "La Paz County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 4013,
    state: "AZ",
    area_name: "Maricopa County",
    bachelorsOrHigher: 30
  }, {
    fips: 4015,
    state: "AZ",
    area_name: "Mohave County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 4017,
    state: "AZ",
    area_name: "Navajo County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 4019,
    state: "AZ",
    area_name: "Pima County",
    bachelorsOrHigher: 30.1
  }, {
    fips: 4021,
    state: "AZ",
    area_name: "Pinal County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 4023,
    state: "AZ",
    area_name: "Santa Cruz County",
    bachelorsOrHigher: 22
  }, {
    fips: 4025,
    state: "AZ",
    area_name: "Yavapai County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 4027,
    state: "AZ",
    area_name: "Yuma County",
    bachelorsOrHigher: 14
  }, {
    fips: 5001,
    state: "AR",
    area_name: "Arkansas County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 5003,
    state: "AR",
    area_name: "Ashley County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 5005,
    state: "AR",
    area_name: "Baxter County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 5007,
    state: "AR",
    area_name: "Benton County",
    bachelorsOrHigher: 29.6
  }, {
    fips: 5009,
    state: "AR",
    area_name: "Boone County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 5011,
    state: "AR",
    area_name: "Bradley County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 5013,
    state: "AR",
    area_name: "Calhoun County",
    bachelorsOrHigher: 10.6
  }, {
    fips: 5015,
    state: "AR",
    area_name: "Carroll County",
    bachelorsOrHigher: 17
  }, {
    fips: 5017,
    state: "AR",
    area_name: "Chicot County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 5019,
    state: "AR",
    area_name: "Clark County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 5021,
    state: "AR",
    area_name: "Clay County",
    bachelorsOrHigher: 9.8
  }, {
    fips: 5023,
    state: "AR",
    area_name: "Cleburne County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 5025,
    state: "AR",
    area_name: "Cleveland County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 5027,
    state: "AR",
    area_name: "Columbia County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 5029,
    state: "AR",
    area_name: "Conway County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 5031,
    state: "AR",
    area_name: "Craighead County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 5033,
    state: "AR",
    area_name: "Crawford County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 5035,
    state: "AR",
    area_name: "Crittenden County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 5037,
    state: "AR",
    area_name: "Cross County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 5039,
    state: "AR",
    area_name: "Dallas County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 5041,
    state: "AR",
    area_name: "Desha County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 5043,
    state: "AR",
    area_name: "Drew County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 5045,
    state: "AR",
    area_name: "Faulkner County",
    bachelorsOrHigher: 27.3
  }, {
    fips: 5047,
    state: "AR",
    area_name: "Franklin County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 5049,
    state: "AR",
    area_name: "Fulton County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 5051,
    state: "AR",
    area_name: "Garland County",
    bachelorsOrHigher: 21
  }, {
    fips: 5053,
    state: "AR",
    area_name: "Grant County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 5055,
    state: "AR",
    area_name: "Greene County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 5057,
    state: "AR",
    area_name: "Hempstead County",
    bachelorsOrHigher: 14
  }, {
    fips: 5059,
    state: "AR",
    area_name: "Hot Spring County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 5061,
    state: "AR",
    area_name: "Howard County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 5063,
    state: "AR",
    area_name: "Independence County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 5065,
    state: "AR",
    area_name: "Izard County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 5067,
    state: "AR",
    area_name: "Jackson County",
    bachelorsOrHigher: 7.9
  }, {
    fips: 5069,
    state: "AR",
    area_name: "Jefferson County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 5071,
    state: "AR",
    area_name: "Johnson County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 5073,
    state: "AR",
    area_name: "Lafayette County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 5075,
    state: "AR",
    area_name: "Lawrence County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 5077,
    state: "AR",
    area_name: "Lee County",
    bachelorsOrHigher: 6.4
  }, {
    fips: 5079,
    state: "AR",
    area_name: "Lincoln County",
    bachelorsOrHigher: 8.5
  }, {
    fips: 5081,
    state: "AR",
    area_name: "Little River County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 5083,
    state: "AR",
    area_name: "Logan County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 5085,
    state: "AR",
    area_name: "Lonoke County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 5087,
    state: "AR",
    area_name: "Madison County",
    bachelorsOrHigher: 9.7
  }, {
    fips: 5089,
    state: "AR",
    area_name: "Marion County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 5091,
    state: "AR",
    area_name: "Miller County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 5093,
    state: "AR",
    area_name: "Mississippi County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 5095,
    state: "AR",
    area_name: "Monroe County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 5097,
    state: "AR",
    area_name: "Montgomery County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 5099,
    state: "AR",
    area_name: "Nevada County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 5101,
    state: "AR",
    area_name: "Newton County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 5103,
    state: "AR",
    area_name: "Ouachita County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 5105,
    state: "AR",
    area_name: "Perry County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 5107,
    state: "AR",
    area_name: "Phillips County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 5109,
    state: "AR",
    area_name: "Pike County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 5111,
    state: "AR",
    area_name: "Poinsett County",
    bachelorsOrHigher: 8
  }, {
    fips: 5113,
    state: "AR",
    area_name: "Polk County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 5115,
    state: "AR",
    area_name: "Pope County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 5117,
    state: "AR",
    area_name: "Prairie County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 5119,
    state: "AR",
    area_name: "Pulaski County",
    bachelorsOrHigher: 32
  }, {
    fips: 5121,
    state: "AR",
    area_name: "Randolph County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 5123,
    state: "AR",
    area_name: "St. Francis County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 5125,
    state: "AR",
    area_name: "Saline County",
    bachelorsOrHigher: 23
  }, {
    fips: 5127,
    state: "AR",
    area_name: "Scott County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 5129,
    state: "AR",
    area_name: "Searcy County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 5131,
    state: "AR",
    area_name: "Sebastian County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 5133,
    state: "AR",
    area_name: "Sevier County",
    bachelorsOrHigher: 8.3
  }, {
    fips: 5135,
    state: "AR",
    area_name: "Sharp County",
    bachelorsOrHigher: 10.6
  }, {
    fips: 5137,
    state: "AR",
    area_name: "Stone County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 5139,
    state: "AR",
    area_name: "Union County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 5141,
    state: "AR",
    area_name: "Van Buren County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 5143,
    state: "AR",
    area_name: "Washington County",
    bachelorsOrHigher: 29.3
  }, {
    fips: 5145,
    state: "AR",
    area_name: "White County",
    bachelorsOrHigher: 19
  }, {
    fips: 5147,
    state: "AR",
    area_name: "Woodruff County",
    bachelorsOrHigher: 9
  }, {
    fips: 5149,
    state: "AR",
    area_name: "Yell County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 6001,
    state: "CA",
    area_name: "Alameda County",
    bachelorsOrHigher: 42.1
  }, {
    fips: 6003,
    state: "CA",
    area_name: "Alpine County",
    bachelorsOrHigher: 30.5
  }, {
    fips: 6005,
    state: "CA",
    area_name: "Amador County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 6007,
    state: "CA",
    area_name: "Butte County",
    bachelorsOrHigher: 25
  }, {
    fips: 6009,
    state: "CA",
    area_name: "Calaveras County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 6011,
    state: "CA",
    area_name: "Colusa County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 6013,
    state: "CA",
    area_name: "Contra Costa County",
    bachelorsOrHigher: 39.4
  }, {
    fips: 6015,
    state: "CA",
    area_name: "Del Norte County",
    bachelorsOrHigher: 16
  }, {
    fips: 6017,
    state: "CA",
    area_name: "El Dorado County",
    bachelorsOrHigher: 32.1
  }, {
    fips: 6019,
    state: "CA",
    area_name: "Fresno County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 6021,
    state: "CA",
    area_name: "Glenn County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 6023,
    state: "CA",
    area_name: "Humboldt County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 6025,
    state: "CA",
    area_name: "Imperial County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 6027,
    state: "CA",
    area_name: "Inyo County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 6029,
    state: "CA",
    area_name: "Kern County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 6031,
    state: "CA",
    area_name: "Kings County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 6033,
    state: "CA",
    area_name: "Lake County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 6035,
    state: "CA",
    area_name: "Lassen County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 6037,
    state: "CA",
    area_name: "Los Angeles County",
    bachelorsOrHigher: 29.9
  }, {
    fips: 6039,
    state: "CA",
    area_name: "Madera County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 6041,
    state: "CA",
    area_name: "Marin County",
    bachelorsOrHigher: 54.8
  }, {
    fips: 6043,
    state: "CA",
    area_name: "Mariposa County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 6045,
    state: "CA",
    area_name: "Mendocino County",
    bachelorsOrHigher: 22.5
  }, {
    fips: 6047,
    state: "CA",
    area_name: "Merced County",
    bachelorsOrHigher: 13
  }, {
    fips: 6049,
    state: "CA",
    area_name: "Modoc County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 6051,
    state: "CA",
    area_name: "Mono County",
    bachelorsOrHigher: 33.3
  }, {
    fips: 6053,
    state: "CA",
    area_name: "Monterey County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 6055,
    state: "CA",
    area_name: "Napa County",
    bachelorsOrHigher: 31.9
  }, {
    fips: 6057,
    state: "CA",
    area_name: "Nevada County",
    bachelorsOrHigher: 32.8
  }, {
    fips: 6059,
    state: "CA",
    area_name: "Orange County",
    bachelorsOrHigher: 37.3
  }, {
    fips: 6061,
    state: "CA",
    area_name: "Placer County",
    bachelorsOrHigher: 35.7
  }, {
    fips: 6063,
    state: "CA",
    area_name: "Plumas County",
    bachelorsOrHigher: 22.7
  }, {
    fips: 6065,
    state: "CA",
    area_name: "Riverside County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 6067,
    state: "CA",
    area_name: "Sacramento County",
    bachelorsOrHigher: 28.2
  }, {
    fips: 6069,
    state: "CA",
    area_name: "San Benito County",
    bachelorsOrHigher: 19
  }, {
    fips: 6071,
    state: "CA",
    area_name: "San Bernardino County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 6073,
    state: "CA",
    area_name: "San Diego County",
    bachelorsOrHigher: 35.1
  }, {
    fips: 6075,
    state: "CA",
    area_name: "San Francisco County",
    bachelorsOrHigher: 52.9
  }, {
    fips: 6077,
    state: "CA",
    area_name: "San Joaquin County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 6079,
    state: "CA",
    area_name: "San Luis Obispo County",
    bachelorsOrHigher: 32.1
  }, {
    fips: 6081,
    state: "CA",
    area_name: "San Mateo County",
    bachelorsOrHigher: 45
  }, {
    fips: 6083,
    state: "CA",
    area_name: "Santa Barbara County",
    bachelorsOrHigher: 31.4
  }, {
    fips: 6085,
    state: "CA",
    area_name: "Santa Clara County",
    bachelorsOrHigher: 47.3
  }, {
    fips: 6087,
    state: "CA",
    area_name: "Santa Cruz County",
    bachelorsOrHigher: 37.5
  }, {
    fips: 6089,
    state: "CA",
    area_name: "Shasta County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 6091,
    state: "CA",
    area_name: "Sierra County",
    bachelorsOrHigher: 19
  }, {
    fips: 6093,
    state: "CA",
    area_name: "Siskiyou County",
    bachelorsOrHigher: 24
  }, {
    fips: 6095,
    state: "CA",
    area_name: "Solano County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 6097,
    state: "CA",
    area_name: "Sonoma County",
    bachelorsOrHigher: 32.6
  }, {
    fips: 6099,
    state: "CA",
    area_name: "Stanislaus County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 6101,
    state: "CA",
    area_name: "Sutter County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 6103,
    state: "CA",
    area_name: "Tehama County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 6105,
    state: "CA",
    area_name: "Trinity County",
    bachelorsOrHigher: 22
  }, {
    fips: 6107,
    state: "CA",
    area_name: "Tulare County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 6109,
    state: "CA",
    area_name: "Tuolumne County",
    bachelorsOrHigher: 19.8
  }, {
    fips: 6111,
    state: "CA",
    area_name: "Ventura County",
    bachelorsOrHigher: 31.6
  }, {
    fips: 6113,
    state: "CA",
    area_name: "Yolo County",
    bachelorsOrHigher: 38.3
  }, {
    fips: 6115,
    state: "CA",
    area_name: "Yuba County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 8001,
    state: "CO",
    area_name: "Adams County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 8003,
    state: "CO",
    area_name: "Alamosa County",
    bachelorsOrHigher: 24.1
  }, {
    fips: 8005,
    state: "CO",
    area_name: "Arapahoe County",
    bachelorsOrHigher: 39.4
  }, {
    fips: 8007,
    state: "CO",
    area_name: "Archuleta County",
    bachelorsOrHigher: 35.3
  }, {
    fips: 8009,
    state: "CO",
    area_name: "Baca County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 8011,
    state: "CO",
    area_name: "Bent County",
    bachelorsOrHigher: 7.5
  }, {
    fips: 8013,
    state: "CO",
    area_name: "Boulder County",
    bachelorsOrHigher: 58.2
  }, {
    fips: 8014,
    state: "CO",
    area_name: "Broomfield County",
    bachelorsOrHigher: 49.5
  }, {
    fips: 8015,
    state: "CO",
    area_name: "Chaffee County",
    bachelorsOrHigher: 34.2
  }, {
    fips: 8017,
    state: "CO",
    area_name: "Cheyenne County",
    bachelorsOrHigher: 21.8
  }, {
    fips: 8019,
    state: "CO",
    area_name: "Clear Creek County",
    bachelorsOrHigher: 40.8
  }, {
    fips: 8021,
    state: "CO",
    area_name: "Conejos County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 8023,
    state: "CO",
    area_name: "Costilla County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 8025,
    state: "CO",
    area_name: "Crowley County",
    bachelorsOrHigher: 10.5
  }, {
    fips: 8027,
    state: "CO",
    area_name: "Custer County",
    bachelorsOrHigher: 34.8
  }, {
    fips: 8029,
    state: "CO",
    area_name: "Delta County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 8031,
    state: "CO",
    area_name: "Denver County",
    bachelorsOrHigher: 43.7
  }, {
    fips: 8033,
    state: "CO",
    area_name: "Dolores County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 8035,
    state: "CO",
    area_name: "Douglas County",
    bachelorsOrHigher: 55.9
  }, {
    fips: 8037,
    state: "CO",
    area_name: "Eagle County",
    bachelorsOrHigher: 47.3
  }, {
    fips: 8039,
    state: "CO",
    area_name: "Elbert County",
    bachelorsOrHigher: 29.5
  }, {
    fips: 8041,
    state: "CO",
    area_name: "El Paso County",
    bachelorsOrHigher: 35.2
  }, {
    fips: 8043,
    state: "CO",
    area_name: "Fremont County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 8045,
    state: "CO",
    area_name: "Garfield County",
    bachelorsOrHigher: 29.3
  }, {
    fips: 8047,
    state: "CO",
    area_name: "Gilpin County",
    bachelorsOrHigher: 29.5
  }, {
    fips: 8049,
    state: "CO",
    area_name: "Grand County",
    bachelorsOrHigher: 36.3
  }, {
    fips: 8051,
    state: "CO",
    area_name: "Gunnison County",
    bachelorsOrHigher: 54.4
  }, {
    fips: 8053,
    state: "CO",
    area_name: "Hinsdale County",
    bachelorsOrHigher: 41.3
  }, {
    fips: 8055,
    state: "CO",
    area_name: "Huerfano County",
    bachelorsOrHigher: 28.9
  }, {
    fips: 8057,
    state: "CO",
    area_name: "Jackson County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 8059,
    state: "CO",
    area_name: "Jefferson County",
    bachelorsOrHigher: 41.1
  }, {
    fips: 8061,
    state: "CO",
    area_name: "Kiowa County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 8063,
    state: "CO",
    area_name: "Kit Carson County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 8065,
    state: "CO",
    area_name: "Lake County",
    bachelorsOrHigher: 30.3
  }, {
    fips: 8067,
    state: "CO",
    area_name: "La Plata County",
    bachelorsOrHigher: 43.4
  }, {
    fips: 8069,
    state: "CO",
    area_name: "Larimer County",
    bachelorsOrHigher: 44.1
  }, {
    fips: 8071,
    state: "CO",
    area_name: "Las Animas County",
    bachelorsOrHigher: 18
  }, {
    fips: 8073,
    state: "CO",
    area_name: "Lincoln County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 8075,
    state: "CO",
    area_name: "Logan County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 8077,
    state: "CO",
    area_name: "Mesa County",
    bachelorsOrHigher: 25.2
  }, {
    fips: 8079,
    state: "CO",
    area_name: "Mineral County",
    bachelorsOrHigher: 39.4
  }, {
    fips: 8081,
    state: "CO",
    area_name: "Moffat County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 8083,
    state: "CO",
    area_name: "Montezuma County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 8085,
    state: "CO",
    area_name: "Montrose County",
    bachelorsOrHigher: 24.6
  }, {
    fips: 8087,
    state: "CO",
    area_name: "Morgan County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 8089,
    state: "CO",
    area_name: "Otero County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 8091,
    state: "CO",
    area_name: "Ouray County",
    bachelorsOrHigher: 50
  }, {
    fips: 8093,
    state: "CO",
    area_name: "Park County",
    bachelorsOrHigher: 31.6
  }, {
    fips: 8095,
    state: "CO",
    area_name: "Phillips County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 8097,
    state: "CO",
    area_name: "Pitkin County",
    bachelorsOrHigher: 56.4
  }, {
    fips: 8099,
    state: "CO",
    area_name: "Prowers County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 8101,
    state: "CO",
    area_name: "Pueblo County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 8103,
    state: "CO",
    area_name: "Rio Blanco County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 8105,
    state: "CO",
    area_name: "Rio Grande County",
    bachelorsOrHigher: 20.9
  }, {
    fips: 8107,
    state: "CO",
    area_name: "Routt County",
    bachelorsOrHigher: 48.7
  }, {
    fips: 8109,
    state: "CO",
    area_name: "Saguache County",
    bachelorsOrHigher: 25.7
  }, {
    fips: 8111,
    state: "CO",
    area_name: "San Juan County",
    bachelorsOrHigher: 27.1
  }, {
    fips: 8113,
    state: "CO",
    area_name: "San Miguel County",
    bachelorsOrHigher: 54.4
  }, {
    fips: 8115,
    state: "CO",
    area_name: "Sedgwick County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 8117,
    state: "CO",
    area_name: "Summit County",
    bachelorsOrHigher: 48.1
  }, {
    fips: 8119,
    state: "CO",
    area_name: "Teller County",
    bachelorsOrHigher: 30.9
  }, {
    fips: 8121,
    state: "CO",
    area_name: "Washington County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 8123,
    state: "CO",
    area_name: "Weld County",
    bachelorsOrHigher: 25.9
  }, {
    fips: 8125,
    state: "CO",
    area_name: "Yuma County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 9001,
    state: "CT",
    area_name: "Fairfield County",
    bachelorsOrHigher: 45.4
  }, {
    fips: 9003,
    state: "CT",
    area_name: "Hartford County",
    bachelorsOrHigher: 35.6
  }, {
    fips: 9005,
    state: "CT",
    area_name: "Litchfield County",
    bachelorsOrHigher: 33.7
  }, {
    fips: 9007,
    state: "CT",
    area_name: "Middlesex County",
    bachelorsOrHigher: 39.7
  }, {
    fips: 9009,
    state: "CT",
    area_name: "New Haven County",
    bachelorsOrHigher: 33.4
  }, {
    fips: 9011,
    state: "CT",
    area_name: "New London County",
    bachelorsOrHigher: 31.5
  }, {
    fips: 9013,
    state: "CT",
    area_name: "Tolland County",
    bachelorsOrHigher: 36.8
  }, {
    fips: 9015,
    state: "CT",
    area_name: "Windham County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 10001,
    state: "DE",
    area_name: "Kent County",
    bachelorsOrHigher: 22.7
  }, {
    fips: 10003,
    state: "DE",
    area_name: "New Castle County",
    bachelorsOrHigher: 34.5
  }, {
    fips: 10005,
    state: "DE",
    area_name: "Sussex County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 11001,
    state: "DC",
    area_name: "District of Columbia",
    bachelorsOrHigher: 53.4
  }, {
    fips: 12001,
    state: "FL",
    area_name: "Alachua County",
    bachelorsOrHigher: 40.8
  }, {
    fips: 12003,
    state: "FL",
    area_name: "Baker County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 12005,
    state: "FL",
    area_name: "Bay County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 12007,
    state: "FL",
    area_name: "Bradford County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 12009,
    state: "FL",
    area_name: "Brevard County",
    bachelorsOrHigher: 26.7
  }, {
    fips: 12011,
    state: "FL",
    area_name: "Broward County",
    bachelorsOrHigher: 30.2
  }, {
    fips: 12013,
    state: "FL",
    area_name: "Calhoun County",
    bachelorsOrHigher: 9.2
  }, {
    fips: 12015,
    state: "FL",
    area_name: "Charlotte County",
    bachelorsOrHigher: 20.9
  }, {
    fips: 12017,
    state: "FL",
    area_name: "Citrus County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 12019,
    state: "FL",
    area_name: "Clay County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 12021,
    state: "FL",
    area_name: "Collier County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 12023,
    state: "FL",
    area_name: "Columbia County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 12027,
    state: "FL",
    area_name: "DeSoto County",
    bachelorsOrHigher: 9.9
  }, {
    fips: 12029,
    state: "FL",
    area_name: "Dixie County",
    bachelorsOrHigher: 7.5
  }, {
    fips: 12031,
    state: "FL",
    area_name: "Duval County",
    bachelorsOrHigher: 26.5
  }, {
    fips: 12033,
    state: "FL",
    area_name: "Escambia County",
    bachelorsOrHigher: 23.9
  }, {
    fips: 12035,
    state: "FL",
    area_name: "Flagler County",
    bachelorsOrHigher: 23.4
  }, {
    fips: 12037,
    state: "FL",
    area_name: "Franklin County",
    bachelorsOrHigher: 16
  }, {
    fips: 12039,
    state: "FL",
    area_name: "Gadsden County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 12041,
    state: "FL",
    area_name: "Gilchrist County",
    bachelorsOrHigher: 11
  }, {
    fips: 12043,
    state: "FL",
    area_name: "Glades County",
    bachelorsOrHigher: 10.3
  }, {
    fips: 12045,
    state: "FL",
    area_name: "Gulf County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 12047,
    state: "FL",
    area_name: "Hamilton County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 12049,
    state: "FL",
    area_name: "Hardee County",
    bachelorsOrHigher: 10
  }, {
    fips: 12051,
    state: "FL",
    area_name: "Hendry County",
    bachelorsOrHigher: 10.6
  }, {
    fips: 12053,
    state: "FL",
    area_name: "Hernando County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 12055,
    state: "FL",
    area_name: "Highlands County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 12057,
    state: "FL",
    area_name: "Hillsborough County",
    bachelorsOrHigher: 29.8
  }, {
    fips: 12059,
    state: "FL",
    area_name: "Holmes County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 12061,
    state: "FL",
    area_name: "Indian River County",
    bachelorsOrHigher: 26.7
  }, {
    fips: 12063,
    state: "FL",
    area_name: "Jackson County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 12065,
    state: "FL",
    area_name: "Jefferson County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 12067,
    state: "FL",
    area_name: "Lafayette County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 12069,
    state: "FL",
    area_name: "Lake County",
    bachelorsOrHigher: 21
  }, {
    fips: 12071,
    state: "FL",
    area_name: "Lee County",
    bachelorsOrHigher: 25.3
  }, {
    fips: 12073,
    state: "FL",
    area_name: "Leon County",
    bachelorsOrHigher: 44.3
  }, {
    fips: 12075,
    state: "FL",
    area_name: "Levy County",
    bachelorsOrHigher: 10.5
  }, {
    fips: 12077,
    state: "FL",
    area_name: "Liberty County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 12079,
    state: "FL",
    area_name: "Madison County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 12081,
    state: "FL",
    area_name: "Manatee County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 12083,
    state: "FL",
    area_name: "Marion County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 12085,
    state: "FL",
    area_name: "Martin County",
    bachelorsOrHigher: 31.2
  }, {
    fips: 12086,
    state: "FL",
    area_name: "Miami-Dade County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 12087,
    state: "FL",
    area_name: "Monroe County",
    bachelorsOrHigher: 29.7
  }, {
    fips: 12089,
    state: "FL",
    area_name: "Nassau County",
    bachelorsOrHigher: 23
  }, {
    fips: 12091,
    state: "FL",
    area_name: "Okaloosa County",
    bachelorsOrHigher: 28.1
  }, {
    fips: 12093,
    state: "FL",
    area_name: "Okeechobee County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 12095,
    state: "FL",
    area_name: "Orange County",
    bachelorsOrHigher: 30.6
  }, {
    fips: 12097,
    state: "FL",
    area_name: "Osceola County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 12099,
    state: "FL",
    area_name: "Palm Beach County",
    bachelorsOrHigher: 32.8
  }, {
    fips: 12101,
    state: "FL",
    area_name: "Pasco County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 12103,
    state: "FL",
    area_name: "Pinellas County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 12105,
    state: "FL",
    area_name: "Polk County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 12107,
    state: "FL",
    area_name: "Putnam County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 12109,
    state: "FL",
    area_name: "St. Johns County",
    bachelorsOrHigher: 41.4
  }, {
    fips: 12111,
    state: "FL",
    area_name: "St. Lucie County",
    bachelorsOrHigher: 19
  }, {
    fips: 12113,
    state: "FL",
    area_name: "Santa Rosa County",
    bachelorsOrHigher: 26.5
  }, {
    fips: 12115,
    state: "FL",
    area_name: "Sarasota County",
    bachelorsOrHigher: 31.1
  }, {
    fips: 12117,
    state: "FL",
    area_name: "Seminole County",
    bachelorsOrHigher: 35
  }, {
    fips: 12119,
    state: "FL",
    area_name: "Sumter County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 12121,
    state: "FL",
    area_name: "Suwannee County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 12123,
    state: "FL",
    area_name: "Taylor County",
    bachelorsOrHigher: 10
  }, {
    fips: 12125,
    state: "FL",
    area_name: "Union County",
    bachelorsOrHigher: 8.6
  }, {
    fips: 12127,
    state: "FL",
    area_name: "Volusia County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 12129,
    state: "FL",
    area_name: "Wakulla County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 12131,
    state: "FL",
    area_name: "Walton County",
    bachelorsOrHigher: 25.1
  }, {
    fips: 12133,
    state: "FL",
    area_name: "Washington County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 13001,
    state: "GA",
    area_name: "Appling County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 13003,
    state: "GA",
    area_name: "Atkinson County",
    bachelorsOrHigher: 7.7
  }, {
    fips: 13005,
    state: "GA",
    area_name: "Bacon County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 13007,
    state: "GA",
    area_name: "Baker County",
    bachelorsOrHigher: 11
  }, {
    fips: 13009,
    state: "GA",
    area_name: "Baldwin County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 13011,
    state: "GA",
    area_name: "Banks County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 13013,
    state: "GA",
    area_name: "Barrow County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 13015,
    state: "GA",
    area_name: "Bartow County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 13017,
    state: "GA",
    area_name: "Ben Hill County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 13019,
    state: "GA",
    area_name: "Berrien County",
    bachelorsOrHigher: 13
  }, {
    fips: 13021,
    state: "GA",
    area_name: "Bibb County",
    bachelorsOrHigher: 23.4
  }, {
    fips: 13023,
    state: "GA",
    area_name: "Bleckley County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 13025,
    state: "GA",
    area_name: "Brantley County",
    bachelorsOrHigher: 6.9
  }, {
    fips: 13027,
    state: "GA",
    area_name: "Brooks County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 13029,
    state: "GA",
    area_name: "Bryan County",
    bachelorsOrHigher: 32.4
  }, {
    fips: 13031,
    state: "GA",
    area_name: "Bulloch County",
    bachelorsOrHigher: 28
  }, {
    fips: 13033,
    state: "GA",
    area_name: "Burke County",
    bachelorsOrHigher: 10
  }, {
    fips: 13035,
    state: "GA",
    area_name: "Butts County",
    bachelorsOrHigher: 9.7
  }, {
    fips: 13037,
    state: "GA",
    area_name: "Calhoun County",
    bachelorsOrHigher: 9.4
  }, {
    fips: 13039,
    state: "GA",
    area_name: "Camden County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 13043,
    state: "GA",
    area_name: "Candler County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 13045,
    state: "GA",
    area_name: "Carroll County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 13047,
    state: "GA",
    area_name: "Catoosa County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 13049,
    state: "GA",
    area_name: "Charlton County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 13051,
    state: "GA",
    area_name: "Chatham County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 13053,
    state: "GA",
    area_name: "Chattahoochee County",
    bachelorsOrHigher: 31.5
  }, {
    fips: 13055,
    state: "GA",
    area_name: "Chattooga County",
    bachelorsOrHigher: 8.5
  }, {
    fips: 13057,
    state: "GA",
    area_name: "Cherokee County",
    bachelorsOrHigher: 34.3
  }, {
    fips: 13059,
    state: "GA",
    area_name: "Clarke County",
    bachelorsOrHigher: 39.3
  }, {
    fips: 13061,
    state: "GA",
    area_name: "Clay County",
    bachelorsOrHigher: 6.9
  }, {
    fips: 13063,
    state: "GA",
    area_name: "Clayton County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 13065,
    state: "GA",
    area_name: "Clinch County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 13067,
    state: "GA",
    area_name: "Cobb County",
    bachelorsOrHigher: 43.8
  }, {
    fips: 13069,
    state: "GA",
    area_name: "Coffee County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 13071,
    state: "GA",
    area_name: "Colquitt County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 13073,
    state: "GA",
    area_name: "Columbia County",
    bachelorsOrHigher: 34.2
  }, {
    fips: 13075,
    state: "GA",
    area_name: "Cook County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 13077,
    state: "GA",
    area_name: "Coweta County",
    bachelorsOrHigher: 26.6
  }, {
    fips: 13079,
    state: "GA",
    area_name: "Crawford County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 13081,
    state: "GA",
    area_name: "Crisp County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 13083,
    state: "GA",
    area_name: "Dade County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 13085,
    state: "GA",
    area_name: "Dawson County",
    bachelorsOrHigher: 26.3
  }, {
    fips: 13087,
    state: "GA",
    area_name: "Decatur County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 13089,
    state: "GA",
    area_name: "DeKalb County",
    bachelorsOrHigher: 40.3
  }, {
    fips: 13091,
    state: "GA",
    area_name: "Dodge County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 13093,
    state: "GA",
    area_name: "Dooly County",
    bachelorsOrHigher: 9
  }, {
    fips: 13095,
    state: "GA",
    area_name: "Dougherty County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 13097,
    state: "GA",
    area_name: "Douglas County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 13099,
    state: "GA",
    area_name: "Early County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 13101,
    state: "GA",
    area_name: "Echols County",
    bachelorsOrHigher: 7.5
  }, {
    fips: 13103,
    state: "GA",
    area_name: "Effingham County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 13105,
    state: "GA",
    area_name: "Elbert County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 13107,
    state: "GA",
    area_name: "Emanuel County",
    bachelorsOrHigher: 10
  }, {
    fips: 13109,
    state: "GA",
    area_name: "Evans County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 13111,
    state: "GA",
    area_name: "Fannin County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 13113,
    state: "GA",
    area_name: "Fayette County",
    bachelorsOrHigher: 43.3
  }, {
    fips: 13115,
    state: "GA",
    area_name: "Floyd County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 13117,
    state: "GA",
    area_name: "Forsyth County",
    bachelorsOrHigher: 44.6
  }, {
    fips: 13119,
    state: "GA",
    area_name: "Franklin County",
    bachelorsOrHigher: 12
  }, {
    fips: 13121,
    state: "GA",
    area_name: "Fulton County",
    bachelorsOrHigher: 48.6
  }, {
    fips: 13123,
    state: "GA",
    area_name: "Gilmer County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 13125,
    state: "GA",
    area_name: "Glascock County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 13127,
    state: "GA",
    area_name: "Glynn County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 13129,
    state: "GA",
    area_name: "Gordon County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 13131,
    state: "GA",
    area_name: "Grady County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 13133,
    state: "GA",
    area_name: "Greene County",
    bachelorsOrHigher: 24.4
  }, {
    fips: 13135,
    state: "GA",
    area_name: "Gwinnett County",
    bachelorsOrHigher: 34.4
  }, {
    fips: 13137,
    state: "GA",
    area_name: "Habersham County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 13139,
    state: "GA",
    area_name: "Hall County",
    bachelorsOrHigher: 22.8
  }, {
    fips: 13141,
    state: "GA",
    area_name: "Hancock County",
    bachelorsOrHigher: 10.6
  }, {
    fips: 13143,
    state: "GA",
    area_name: "Haralson County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 13145,
    state: "GA",
    area_name: "Harris County",
    bachelorsOrHigher: 27.8
  }, {
    fips: 13147,
    state: "GA",
    area_name: "Hart County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 13149,
    state: "GA",
    area_name: "Heard County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 13151,
    state: "GA",
    area_name: "Henry County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 13153,
    state: "GA",
    area_name: "Houston County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 13155,
    state: "GA",
    area_name: "Irwin County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 13157,
    state: "GA",
    area_name: "Jackson County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 13159,
    state: "GA",
    area_name: "Jasper County",
    bachelorsOrHigher: 14
  }, {
    fips: 13161,
    state: "GA",
    area_name: "Jeff Davis County",
    bachelorsOrHigher: 9
  }, {
    fips: 13163,
    state: "GA",
    area_name: "Jefferson County",
    bachelorsOrHigher: 9.2
  }, {
    fips: 13165,
    state: "GA",
    area_name: "Jenkins County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 13167,
    state: "GA",
    area_name: "Johnson County",
    bachelorsOrHigher: 9.6
  }, {
    fips: 13169,
    state: "GA",
    area_name: "Jones County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 13171,
    state: "GA",
    area_name: "Lamar County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 13173,
    state: "GA",
    area_name: "Lanier County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 13175,
    state: "GA",
    area_name: "Laurens County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 13177,
    state: "GA",
    area_name: "Lee County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 13179,
    state: "GA",
    area_name: "Liberty County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 13181,
    state: "GA",
    area_name: "Lincoln County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 13183,
    state: "GA",
    area_name: "Long County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 13185,
    state: "GA",
    area_name: "Lowndes County",
    bachelorsOrHigher: 23
  }, {
    fips: 13187,
    state: "GA",
    area_name: "Lumpkin County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 13189,
    state: "GA",
    area_name: "McDuffie County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 13191,
    state: "GA",
    area_name: "McIntosh County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 13193,
    state: "GA",
    area_name: "Macon County",
    bachelorsOrHigher: 8.7
  }, {
    fips: 13195,
    state: "GA",
    area_name: "Madison County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 13197,
    state: "GA",
    area_name: "Marion County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 13199,
    state: "GA",
    area_name: "Meriwether County",
    bachelorsOrHigher: 9.3
  }, {
    fips: 13201,
    state: "GA",
    area_name: "Miller County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 13205,
    state: "GA",
    area_name: "Mitchell County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 13207,
    state: "GA",
    area_name: "Monroe County",
    bachelorsOrHigher: 19.8
  }, {
    fips: 13209,
    state: "GA",
    area_name: "Montgomery County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 13211,
    state: "GA",
    area_name: "Morgan County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 13213,
    state: "GA",
    area_name: "Murray County",
    bachelorsOrHigher: 8.6
  }, {
    fips: 13215,
    state: "GA",
    area_name: "Muscogee County",
    bachelorsOrHigher: 23.7
  }, {
    fips: 13217,
    state: "GA",
    area_name: "Newton County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 13219,
    state: "GA",
    area_name: "Oconee County",
    bachelorsOrHigher: 44.6
  }, {
    fips: 13221,
    state: "GA",
    area_name: "Oglethorpe County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 13223,
    state: "GA",
    area_name: "Paulding County",
    bachelorsOrHigher: 23.3
  }, {
    fips: 13225,
    state: "GA",
    area_name: "Peach County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 13227,
    state: "GA",
    area_name: "Pickens County",
    bachelorsOrHigher: 23.7
  }, {
    fips: 13229,
    state: "GA",
    area_name: "Pierce County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 13231,
    state: "GA",
    area_name: "Pike County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 13233,
    state: "GA",
    area_name: "Polk County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 13235,
    state: "GA",
    area_name: "Pulaski County",
    bachelorsOrHigher: 11
  }, {
    fips: 13237,
    state: "GA",
    area_name: "Putnam County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 13239,
    state: "GA",
    area_name: "Quitman County",
    bachelorsOrHigher: 7.2
  }, {
    fips: 13241,
    state: "GA",
    area_name: "Rabun County",
    bachelorsOrHigher: 25.8
  }, {
    fips: 13243,
    state: "GA",
    area_name: "Randolph County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 13245,
    state: "GA",
    area_name: "Richmond County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 13247,
    state: "GA",
    area_name: "Rockdale County",
    bachelorsOrHigher: 25.4
  }, {
    fips: 13249,
    state: "GA",
    area_name: "Schley County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 13251,
    state: "GA",
    area_name: "Screven County",
    bachelorsOrHigher: 13
  }, {
    fips: 13253,
    state: "GA",
    area_name: "Seminole County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 13255,
    state: "GA",
    area_name: "Spalding County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 13257,
    state: "GA",
    area_name: "Stephens County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 13259,
    state: "GA",
    area_name: "Stewart County",
    bachelorsOrHigher: 9.7
  }, {
    fips: 13261,
    state: "GA",
    area_name: "Sumter County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 13263,
    state: "GA",
    area_name: "Talbot County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 13265,
    state: "GA",
    area_name: "Taliaferro County",
    bachelorsOrHigher: 8.3
  }, {
    fips: 13267,
    state: "GA",
    area_name: "Tattnall County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 13269,
    state: "GA",
    area_name: "Taylor County",
    bachelorsOrHigher: 10.1
  }, {
    fips: 13271,
    state: "GA",
    area_name: "Telfair County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 13273,
    state: "GA",
    area_name: "Terrell County",
    bachelorsOrHigher: 10.1
  }, {
    fips: 13275,
    state: "GA",
    area_name: "Thomas County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 13277,
    state: "GA",
    area_name: "Tift County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 13279,
    state: "GA",
    area_name: "Toombs County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 13281,
    state: "GA",
    area_name: "Towns County",
    bachelorsOrHigher: 22.2
  }, {
    fips: 13283,
    state: "GA",
    area_name: "Treutlen County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 13285,
    state: "GA",
    area_name: "Troup County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 13287,
    state: "GA",
    area_name: "Turner County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 13289,
    state: "GA",
    area_name: "Twiggs County",
    bachelorsOrHigher: 9.6
  }, {
    fips: 13291,
    state: "GA",
    area_name: "Union County",
    bachelorsOrHigher: 20.6
  }, {
    fips: 13293,
    state: "GA",
    area_name: "Upson County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 13295,
    state: "GA",
    area_name: "Walker County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 13297,
    state: "GA",
    area_name: "Walton County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 13299,
    state: "GA",
    area_name: "Ware County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 13301,
    state: "GA",
    area_name: "Warren County",
    bachelorsOrHigher: 8
  }, {
    fips: 13303,
    state: "GA",
    area_name: "Washington County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 13305,
    state: "GA",
    area_name: "Wayne County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 13307,
    state: "GA",
    area_name: "Webster County",
    bachelorsOrHigher: 6
  }, {
    fips: 13309,
    state: "GA",
    area_name: "Wheeler County",
    bachelorsOrHigher: 8.1
  }, {
    fips: 13311,
    state: "GA",
    area_name: "White County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 13313,
    state: "GA",
    area_name: "Whitfield County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 13315,
    state: "GA",
    area_name: "Wilcox County",
    bachelorsOrHigher: 8.7
  }, {
    fips: 13317,
    state: "GA",
    area_name: "Wilkes County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 13319,
    state: "GA",
    area_name: "Wilkinson County",
    bachelorsOrHigher: 8.2
  }, {
    fips: 13321,
    state: "GA",
    area_name: "Worth County",
    bachelorsOrHigher: 7.8
  }, {
    fips: 15001,
    state: "HI",
    area_name: "Hawaii County",
    bachelorsOrHigher: 25.9
  }, {
    fips: 15003,
    state: "HI",
    area_name: "Honolulu County",
    bachelorsOrHigher: 32.5
  }, {
    fips: 15005,
    state: "HI",
    area_name: "Kalawao County",
    bachelorsOrHigher: 43.3
  }, {
    fips: 15007,
    state: "HI",
    area_name: "Kauai County",
    bachelorsOrHigher: 26.9
  }, {
    fips: 15009,
    state: "HI",
    area_name: "Maui County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 16001,
    state: "ID",
    area_name: "Ada County",
    bachelorsOrHigher: 36.4
  }, {
    fips: 16003,
    state: "ID",
    area_name: "Adams County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 16005,
    state: "ID",
    area_name: "Bannock County",
    bachelorsOrHigher: 27.3
  }, {
    fips: 16007,
    state: "ID",
    area_name: "Bear Lake County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 16009,
    state: "ID",
    area_name: "Benewah County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 16011,
    state: "ID",
    area_name: "Bingham County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 16013,
    state: "ID",
    area_name: "Blaine County",
    bachelorsOrHigher: 44.8
  }, {
    fips: 16015,
    state: "ID",
    area_name: "Boise County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 16017,
    state: "ID",
    area_name: "Bonner County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 16019,
    state: "ID",
    area_name: "Bonneville County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 16021,
    state: "ID",
    area_name: "Boundary County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 16023,
    state: "ID",
    area_name: "Butte County",
    bachelorsOrHigher: 15
  }, {
    fips: 16025,
    state: "ID",
    area_name: "Camas County",
    bachelorsOrHigher: 22
  }, {
    fips: 16027,
    state: "ID",
    area_name: "Canyon County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 16029,
    state: "ID",
    area_name: "Caribou County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 16031,
    state: "ID",
    area_name: "Cassia County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 16033,
    state: "ID",
    area_name: "Clark County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 16035,
    state: "ID",
    area_name: "Clearwater County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 16037,
    state: "ID",
    area_name: "Custer County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 16039,
    state: "ID",
    area_name: "Elmore County",
    bachelorsOrHigher: 17
  }, {
    fips: 16041,
    state: "ID",
    area_name: "Franklin County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 16043,
    state: "ID",
    area_name: "Fremont County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 16045,
    state: "ID",
    area_name: "Gem County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 16047,
    state: "ID",
    area_name: "Gooding County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 16049,
    state: "ID",
    area_name: "Idaho County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 16051,
    state: "ID",
    area_name: "Jefferson County",
    bachelorsOrHigher: 21
  }, {
    fips: 16053,
    state: "ID",
    area_name: "Jerome County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 16055,
    state: "ID",
    area_name: "Kootenai County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 16057,
    state: "ID",
    area_name: "Latah County",
    bachelorsOrHigher: 44
  }, {
    fips: 16059,
    state: "ID",
    area_name: "Lemhi County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 16061,
    state: "ID",
    area_name: "Lewis County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 16063,
    state: "ID",
    area_name: "Lincoln County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 16065,
    state: "ID",
    area_name: "Madison County",
    bachelorsOrHigher: 34.4
  }, {
    fips: 16067,
    state: "ID",
    area_name: "Minidoka County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 16069,
    state: "ID",
    area_name: "Nez Perce County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 16071,
    state: "ID",
    area_name: "Oneida County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 16073,
    state: "ID",
    area_name: "Owyhee County",
    bachelorsOrHigher: 9
  }, {
    fips: 16075,
    state: "ID",
    area_name: "Payette County",
    bachelorsOrHigher: 15
  }, {
    fips: 16077,
    state: "ID",
    area_name: "Power County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 16079,
    state: "ID",
    area_name: "Shoshone County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 16081,
    state: "ID",
    area_name: "Teton County",
    bachelorsOrHigher: 38.2
  }, {
    fips: 16083,
    state: "ID",
    area_name: "Twin Falls County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 16085,
    state: "ID",
    area_name: "Valley County",
    bachelorsOrHigher: 34
  }, {
    fips: 16087,
    state: "ID",
    area_name: "Washington County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 17001,
    state: "IL",
    area_name: "Adams County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 17003,
    state: "IL",
    area_name: "Alexander County",
    bachelorsOrHigher: 7.7
  }, {
    fips: 17005,
    state: "IL",
    area_name: "Bond County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 17007,
    state: "IL",
    area_name: "Boone County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 17009,
    state: "IL",
    area_name: "Brown County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 17011,
    state: "IL",
    area_name: "Bureau County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 17013,
    state: "IL",
    area_name: "Calhoun County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 17015,
    state: "IL",
    area_name: "Carroll County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 17017,
    state: "IL",
    area_name: "Cass County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 17019,
    state: "IL",
    area_name: "Champaign County",
    bachelorsOrHigher: 42.5
  }, {
    fips: 17021,
    state: "IL",
    area_name: "Christian County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 17023,
    state: "IL",
    area_name: "Clark County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 17025,
    state: "IL",
    area_name: "Clay County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 17027,
    state: "IL",
    area_name: "Clinton County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 17029,
    state: "IL",
    area_name: "Coles County",
    bachelorsOrHigher: 24
  }, {
    fips: 17031,
    state: "IL",
    area_name: "Cook County",
    bachelorsOrHigher: 35.3
  }, {
    fips: 17033,
    state: "IL",
    area_name: "Crawford County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 17035,
    state: "IL",
    area_name: "Cumberland County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 17037,
    state: "IL",
    area_name: "DeKalb County",
    bachelorsOrHigher: 29.9
  }, {
    fips: 17039,
    state: "IL",
    area_name: "De Witt County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 17041,
    state: "IL",
    area_name: "Douglas County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 17043,
    state: "IL",
    area_name: "DuPage County",
    bachelorsOrHigher: 46.7
  }, {
    fips: 17045,
    state: "IL",
    area_name: "Edgar County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 17047,
    state: "IL",
    area_name: "Edwards County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 17049,
    state: "IL",
    area_name: "Effingham County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 17051,
    state: "IL",
    area_name: "Fayette County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 17053,
    state: "IL",
    area_name: "Ford County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 17055,
    state: "IL",
    area_name: "Franklin County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 17057,
    state: "IL",
    area_name: "Fulton County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 17059,
    state: "IL",
    area_name: "Gallatin County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 17061,
    state: "IL",
    area_name: "Greene County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 17063,
    state: "IL",
    area_name: "Grundy County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 17065,
    state: "IL",
    area_name: "Hamilton County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 17067,
    state: "IL",
    area_name: "Hancock County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 17069,
    state: "IL",
    area_name: "Hardin County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 17071,
    state: "IL",
    area_name: "Henderson County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 17073,
    state: "IL",
    area_name: "Henry County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 17075,
    state: "IL",
    area_name: "Iroquois County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 17077,
    state: "IL",
    area_name: "Jackson County",
    bachelorsOrHigher: 33.8
  }, {
    fips: 17079,
    state: "IL",
    area_name: "Jasper County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 17081,
    state: "IL",
    area_name: "Jefferson County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 17083,
    state: "IL",
    area_name: "Jersey County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 17085,
    state: "IL",
    area_name: "Jo Daviess County",
    bachelorsOrHigher: 23.5
  }, {
    fips: 17087,
    state: "IL",
    area_name: "Johnson County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 17089,
    state: "IL",
    area_name: "Kane County",
    bachelorsOrHigher: 31.8
  }, {
    fips: 17091,
    state: "IL",
    area_name: "Kankakee County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 17093,
    state: "IL",
    area_name: "Kendall County",
    bachelorsOrHigher: 34.3
  }, {
    fips: 17095,
    state: "IL",
    area_name: "Knox County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 17097,
    state: "IL",
    area_name: "Lake County",
    bachelorsOrHigher: 42.7
  }, {
    fips: 17099,
    state: "IL",
    area_name: "La Salle County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 17101,
    state: "IL",
    area_name: "Lawrence County",
    bachelorsOrHigher: 9.3
  }, {
    fips: 17103,
    state: "IL",
    area_name: "Lee County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 17105,
    state: "IL",
    area_name: "Livingston County",
    bachelorsOrHigher: 16
  }, {
    fips: 17107,
    state: "IL",
    area_name: "Logan County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 17109,
    state: "IL",
    area_name: "McDonough County",
    bachelorsOrHigher: 33.5
  }, {
    fips: 17111,
    state: "IL",
    area_name: "McHenry County",
    bachelorsOrHigher: 32.2
  }, {
    fips: 17113,
    state: "IL",
    area_name: "McLean County",
    bachelorsOrHigher: 43.4
  }, {
    fips: 17115,
    state: "IL",
    area_name: "Macon County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 17117,
    state: "IL",
    area_name: "Macoupin County",
    bachelorsOrHigher: 17
  }, {
    fips: 17119,
    state: "IL",
    area_name: "Madison County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 17121,
    state: "IL",
    area_name: "Marion County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 17123,
    state: "IL",
    area_name: "Marshall County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 17125,
    state: "IL",
    area_name: "Mason County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 17127,
    state: "IL",
    area_name: "Massac County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 17129,
    state: "IL",
    area_name: "Menard County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 17131,
    state: "IL",
    area_name: "Mercer County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 17133,
    state: "IL",
    area_name: "Monroe County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 17135,
    state: "IL",
    area_name: "Montgomery County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 17137,
    state: "IL",
    area_name: "Morgan County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 17139,
    state: "IL",
    area_name: "Moultrie County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 17141,
    state: "IL",
    area_name: "Ogle County",
    bachelorsOrHigher: 20
  }, {
    fips: 17143,
    state: "IL",
    area_name: "Peoria County",
    bachelorsOrHigher: 29.3
  }, {
    fips: 17145,
    state: "IL",
    area_name: "Perry County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 17147,
    state: "IL",
    area_name: "Piatt County",
    bachelorsOrHigher: 26.6
  }, {
    fips: 17149,
    state: "IL",
    area_name: "Pike County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 17151,
    state: "IL",
    area_name: "Pope County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 17153,
    state: "IL",
    area_name: "Pulaski County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 17155,
    state: "IL",
    area_name: "Putnam County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 17157,
    state: "IL",
    area_name: "Randolph County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 17159,
    state: "IL",
    area_name: "Richland County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 17161,
    state: "IL",
    area_name: "Rock Island County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 17163,
    state: "IL",
    area_name: "St. Clair County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 17165,
    state: "IL",
    area_name: "Saline County",
    bachelorsOrHigher: 14
  }, {
    fips: 17167,
    state: "IL",
    area_name: "Sangamon County",
    bachelorsOrHigher: 33
  }, {
    fips: 17169,
    state: "IL",
    area_name: "Schuyler County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 17171,
    state: "IL",
    area_name: "Scott County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 17173,
    state: "IL",
    area_name: "Shelby County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 17175,
    state: "IL",
    area_name: "Stark County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 17177,
    state: "IL",
    area_name: "Stephenson County",
    bachelorsOrHigher: 18
  }, {
    fips: 17179,
    state: "IL",
    area_name: "Tazewell County",
    bachelorsOrHigher: 24.6
  }, {
    fips: 17181,
    state: "IL",
    area_name: "Union County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 17183,
    state: "IL",
    area_name: "Vermilion County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 17185,
    state: "IL",
    area_name: "Wabash County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 17187,
    state: "IL",
    area_name: "Warren County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 17189,
    state: "IL",
    area_name: "Washington County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 17191,
    state: "IL",
    area_name: "Wayne County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 17193,
    state: "IL",
    area_name: "White County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 17195,
    state: "IL",
    area_name: "Whiteside County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 17197,
    state: "IL",
    area_name: "Will County",
    bachelorsOrHigher: 32.6
  }, {
    fips: 17199,
    state: "IL",
    area_name: "Williamson County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 17201,
    state: "IL",
    area_name: "Winnebago County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 17203,
    state: "IL",
    area_name: "Woodford County",
    bachelorsOrHigher: 27.9
  }, {
    fips: 18001,
    state: "IN",
    area_name: "Adams County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 18003,
    state: "IN",
    area_name: "Allen County",
    bachelorsOrHigher: 26.6
  }, {
    fips: 18005,
    state: "IN",
    area_name: "Bartholomew County",
    bachelorsOrHigher: 27.9
  }, {
    fips: 18007,
    state: "IN",
    area_name: "Benton County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 18009,
    state: "IN",
    area_name: "Blackford County",
    bachelorsOrHigher: 10.5
  }, {
    fips: 18011,
    state: "IN",
    area_name: "Boone County",
    bachelorsOrHigher: 42.5
  }, {
    fips: 18013,
    state: "IN",
    area_name: "Brown County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 18015,
    state: "IN",
    area_name: "Carroll County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 18017,
    state: "IN",
    area_name: "Cass County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 18019,
    state: "IN",
    area_name: "Clark County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 18021,
    state: "IN",
    area_name: "Clay County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 18023,
    state: "IN",
    area_name: "Clinton County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 18025,
    state: "IN",
    area_name: "Crawford County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 18027,
    state: "IN",
    area_name: "Daviess County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 18029,
    state: "IN",
    area_name: "Dearborn County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 18031,
    state: "IN",
    area_name: "Decatur County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 18033,
    state: "IN",
    area_name: "DeKalb County",
    bachelorsOrHigher: 17
  }, {
    fips: 18035,
    state: "IN",
    area_name: "Delaware County",
    bachelorsOrHigher: 23.3
  }, {
    fips: 18037,
    state: "IN",
    area_name: "Dubois County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 18039,
    state: "IN",
    area_name: "Elkhart County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 18041,
    state: "IN",
    area_name: "Fayette County",
    bachelorsOrHigher: 10.1
  }, {
    fips: 18043,
    state: "IN",
    area_name: "Floyd County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 18045,
    state: "IN",
    area_name: "Fountain County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 18047,
    state: "IN",
    area_name: "Franklin County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 18049,
    state: "IN",
    area_name: "Fulton County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 18051,
    state: "IN",
    area_name: "Gibson County",
    bachelorsOrHigher: 15
  }, {
    fips: 18053,
    state: "IN",
    area_name: "Grant County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 18055,
    state: "IN",
    area_name: "Greene County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 18057,
    state: "IN",
    area_name: "Hamilton County",
    bachelorsOrHigher: 55.6
  }, {
    fips: 18059,
    state: "IN",
    area_name: "Hancock County",
    bachelorsOrHigher: 26.7
  }, {
    fips: 18061,
    state: "IN",
    area_name: "Harrison County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 18063,
    state: "IN",
    area_name: "Hendricks County",
    bachelorsOrHigher: 32.1
  }, {
    fips: 18065,
    state: "IN",
    area_name: "Henry County",
    bachelorsOrHigher: 15
  }, {
    fips: 18067,
    state: "IN",
    area_name: "Howard County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 18069,
    state: "IN",
    area_name: "Huntington County",
    bachelorsOrHigher: 18
  }, {
    fips: 18071,
    state: "IN",
    area_name: "Jackson County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 18073,
    state: "IN",
    area_name: "Jasper County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 18075,
    state: "IN",
    area_name: "Jay County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 18077,
    state: "IN",
    area_name: "Jefferson County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 18079,
    state: "IN",
    area_name: "Jennings County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 18081,
    state: "IN",
    area_name: "Johnson County",
    bachelorsOrHigher: 27.3
  }, {
    fips: 18083,
    state: "IN",
    area_name: "Knox County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 18085,
    state: "IN",
    area_name: "Kosciusko County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 18087,
    state: "IN",
    area_name: "LaGrange County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 18089,
    state: "IN",
    area_name: "Lake County",
    bachelorsOrHigher: 20
  }, {
    fips: 18091,
    state: "IN",
    area_name: "LaPorte County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 18093,
    state: "IN",
    area_name: "Lawrence County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 18095,
    state: "IN",
    area_name: "Madison County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 18097,
    state: "IN",
    area_name: "Marion County",
    bachelorsOrHigher: 27.7
  }, {
    fips: 18099,
    state: "IN",
    area_name: "Marshall County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 18101,
    state: "IN",
    area_name: "Martin County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 18103,
    state: "IN",
    area_name: "Miami County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 18105,
    state: "IN",
    area_name: "Monroe County",
    bachelorsOrHigher: 44.2
  }, {
    fips: 18107,
    state: "IN",
    area_name: "Montgomery County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 18109,
    state: "IN",
    area_name: "Morgan County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 18111,
    state: "IN",
    area_name: "Newton County",
    bachelorsOrHigher: 9.1
  }, {
    fips: 18113,
    state: "IN",
    area_name: "Noble County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 18115,
    state: "IN",
    area_name: "Ohio County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 18117,
    state: "IN",
    area_name: "Orange County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 18119,
    state: "IN",
    area_name: "Owen County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 18121,
    state: "IN",
    area_name: "Parke County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 18123,
    state: "IN",
    area_name: "Perry County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 18125,
    state: "IN",
    area_name: "Pike County",
    bachelorsOrHigher: 12
  }, {
    fips: 18127,
    state: "IN",
    area_name: "Porter County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 18129,
    state: "IN",
    area_name: "Posey County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 18131,
    state: "IN",
    area_name: "Pulaski County",
    bachelorsOrHigher: 12
  }, {
    fips: 18133,
    state: "IN",
    area_name: "Putnam County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 18135,
    state: "IN",
    area_name: "Randolph County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 18137,
    state: "IN",
    area_name: "Ripley County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 18139,
    state: "IN",
    area_name: "Rush County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 18141,
    state: "IN",
    area_name: "St. Joseph County",
    bachelorsOrHigher: 27.2
  }, {
    fips: 18143,
    state: "IN",
    area_name: "Scott County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 18145,
    state: "IN",
    area_name: "Shelby County",
    bachelorsOrHigher: 15
  }, {
    fips: 18147,
    state: "IN",
    area_name: "Spencer County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 18149,
    state: "IN",
    area_name: "Starke County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 18151,
    state: "IN",
    area_name: "Steuben County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 18153,
    state: "IN",
    area_name: "Sullivan County",
    bachelorsOrHigher: 13
  }, {
    fips: 18155,
    state: "IN",
    area_name: "Switzerland County",
    bachelorsOrHigher: 8.7
  }, {
    fips: 18157,
    state: "IN",
    area_name: "Tippecanoe County",
    bachelorsOrHigher: 35.2
  }, {
    fips: 18159,
    state: "IN",
    area_name: "Tipton County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 18161,
    state: "IN",
    area_name: "Union County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 18163,
    state: "IN",
    area_name: "Vanderburgh County",
    bachelorsOrHigher: 23.5
  }, {
    fips: 18165,
    state: "IN",
    area_name: "Vermillion County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 18167,
    state: "IN",
    area_name: "Vigo County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 18169,
    state: "IN",
    area_name: "Wabash County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 18171,
    state: "IN",
    area_name: "Warren County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 18173,
    state: "IN",
    area_name: "Warrick County",
    bachelorsOrHigher: 26.8
  }, {
    fips: 18175,
    state: "IN",
    area_name: "Washington County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 18177,
    state: "IN",
    area_name: "Wayne County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 18179,
    state: "IN",
    area_name: "Wells County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 18181,
    state: "IN",
    area_name: "White County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 18183,
    state: "IN",
    area_name: "Whitley County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 19001,
    state: "IA",
    area_name: "Adair County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 19003,
    state: "IA",
    area_name: "Adams County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 19005,
    state: "IA",
    area_name: "Allamakee County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 19007,
    state: "IA",
    area_name: "Appanoose County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 19009,
    state: "IA",
    area_name: "Audubon County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 19011,
    state: "IA",
    area_name: "Benton County",
    bachelorsOrHigher: 20
  }, {
    fips: 19013,
    state: "IA",
    area_name: "Black Hawk County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 19015,
    state: "IA",
    area_name: "Boone County",
    bachelorsOrHigher: 22.5
  }, {
    fips: 19017,
    state: "IA",
    area_name: "Bremer County",
    bachelorsOrHigher: 28.2
  }, {
    fips: 19019,
    state: "IA",
    area_name: "Buchanan County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 19021,
    state: "IA",
    area_name: "Buena Vista County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 19023,
    state: "IA",
    area_name: "Butler County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 19025,
    state: "IA",
    area_name: "Calhoun County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 19027,
    state: "IA",
    area_name: "Carroll County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 19029,
    state: "IA",
    area_name: "Cass County",
    bachelorsOrHigher: 20
  }, {
    fips: 19031,
    state: "IA",
    area_name: "Cedar County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 19033,
    state: "IA",
    area_name: "Cerro Gordo County",
    bachelorsOrHigher: 22
  }, {
    fips: 19035,
    state: "IA",
    area_name: "Cherokee County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 19037,
    state: "IA",
    area_name: "Chickasaw County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 19039,
    state: "IA",
    area_name: "Clarke County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 19041,
    state: "IA",
    area_name: "Clay County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 19043,
    state: "IA",
    area_name: "Clayton County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 19045,
    state: "IA",
    area_name: "Clinton County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 19047,
    state: "IA",
    area_name: "Crawford County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 19049,
    state: "IA",
    area_name: "Dallas County",
    bachelorsOrHigher: 43.7
  }, {
    fips: 19051,
    state: "IA",
    area_name: "Davis County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 19053,
    state: "IA",
    area_name: "Decatur County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 19055,
    state: "IA",
    area_name: "Delaware County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 19057,
    state: "IA",
    area_name: "Des Moines County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 19059,
    state: "IA",
    area_name: "Dickinson County",
    bachelorsOrHigher: 25.2
  }, {
    fips: 19061,
    state: "IA",
    area_name: "Dubuque County",
    bachelorsOrHigher: 27.8
  }, {
    fips: 19063,
    state: "IA",
    area_name: "Emmet County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 19065,
    state: "IA",
    area_name: "Fayette County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 19067,
    state: "IA",
    area_name: "Floyd County",
    bachelorsOrHigher: 17
  }, {
    fips: 19069,
    state: "IA",
    area_name: "Franklin County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 19071,
    state: "IA",
    area_name: "Fremont County",
    bachelorsOrHigher: 20.9
  }, {
    fips: 19073,
    state: "IA",
    area_name: "Greene County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 19075,
    state: "IA",
    area_name: "Grundy County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 19077,
    state: "IA",
    area_name: "Guthrie County",
    bachelorsOrHigher: 18
  }, {
    fips: 19079,
    state: "IA",
    area_name: "Hamilton County",
    bachelorsOrHigher: 19
  }, {
    fips: 19081,
    state: "IA",
    area_name: "Hancock County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 19083,
    state: "IA",
    area_name: "Hardin County",
    bachelorsOrHigher: 19
  }, {
    fips: 19085,
    state: "IA",
    area_name: "Harrison County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 19087,
    state: "IA",
    area_name: "Henry County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 19089,
    state: "IA",
    area_name: "Howard County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 19091,
    state: "IA",
    area_name: "Humboldt County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 19093,
    state: "IA",
    area_name: "Ida County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 19095,
    state: "IA",
    area_name: "Iowa County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 19097,
    state: "IA",
    area_name: "Jackson County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 19099,
    state: "IA",
    area_name: "Jasper County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 19101,
    state: "IA",
    area_name: "Jefferson County",
    bachelorsOrHigher: 33
  }, {
    fips: 19103,
    state: "IA",
    area_name: "Johnson County",
    bachelorsOrHigher: 51.7
  }, {
    fips: 19105,
    state: "IA",
    area_name: "Jones County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 19107,
    state: "IA",
    area_name: "Keokuk County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 19109,
    state: "IA",
    area_name: "Kossuth County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 19111,
    state: "IA",
    area_name: "Lee County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 19113,
    state: "IA",
    area_name: "Linn County",
    bachelorsOrHigher: 31.7
  }, {
    fips: 19115,
    state: "IA",
    area_name: "Louisa County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 19117,
    state: "IA",
    area_name: "Lucas County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 19119,
    state: "IA",
    area_name: "Lyon County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 19121,
    state: "IA",
    area_name: "Madison County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 19123,
    state: "IA",
    area_name: "Mahaska County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 19125,
    state: "IA",
    area_name: "Marion County",
    bachelorsOrHigher: 24
  }, {
    fips: 19127,
    state: "IA",
    area_name: "Marshall County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 19129,
    state: "IA",
    area_name: "Mills County",
    bachelorsOrHigher: 24.4
  }, {
    fips: 19131,
    state: "IA",
    area_name: "Mitchell County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 19133,
    state: "IA",
    area_name: "Monona County",
    bachelorsOrHigher: 14
  }, {
    fips: 19135,
    state: "IA",
    area_name: "Monroe County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 19137,
    state: "IA",
    area_name: "Montgomery County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 19139,
    state: "IA",
    area_name: "Muscatine County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 19141,
    state: "IA",
    area_name: "O'Brien County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 19143,
    state: "IA",
    area_name: "Osceola County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 19145,
    state: "IA",
    area_name: "Page County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 19147,
    state: "IA",
    area_name: "Palo Alto County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 19149,
    state: "IA",
    area_name: "Plymouth County",
    bachelorsOrHigher: 20
  }, {
    fips: 19151,
    state: "IA",
    area_name: "Pocahontas County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 19153,
    state: "IA",
    area_name: "Polk County",
    bachelorsOrHigher: 35.4
  }, {
    fips: 19155,
    state: "IA",
    area_name: "Pottawattamie County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 19157,
    state: "IA",
    area_name: "Poweshiek County",
    bachelorsOrHigher: 25.4
  }, {
    fips: 19159,
    state: "IA",
    area_name: "Ringgold County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 19161,
    state: "IA",
    area_name: "Sac County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 19163,
    state: "IA",
    area_name: "Scott County",
    bachelorsOrHigher: 31.9
  }, {
    fips: 19165,
    state: "IA",
    area_name: "Shelby County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 19167,
    state: "IA",
    area_name: "Sioux County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 19169,
    state: "IA",
    area_name: "Story County",
    bachelorsOrHigher: 48.5
  }, {
    fips: 19171,
    state: "IA",
    area_name: "Tama County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 19173,
    state: "IA",
    area_name: "Taylor County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 19175,
    state: "IA",
    area_name: "Union County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 19177,
    state: "IA",
    area_name: "Van Buren County",
    bachelorsOrHigher: 14
  }, {
    fips: 19179,
    state: "IA",
    area_name: "Wapello County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 19181,
    state: "IA",
    area_name: "Warren County",
    bachelorsOrHigher: 28.5
  }, {
    fips: 19183,
    state: "IA",
    area_name: "Washington County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 19185,
    state: "IA",
    area_name: "Wayne County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 19187,
    state: "IA",
    area_name: "Webster County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 19189,
    state: "IA",
    area_name: "Winnebago County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 19191,
    state: "IA",
    area_name: "Winneshiek County",
    bachelorsOrHigher: 26.8
  }, {
    fips: 19193,
    state: "IA",
    area_name: "Woodbury County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 19195,
    state: "IA",
    area_name: "Worth County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 19197,
    state: "IA",
    area_name: "Wright County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 20001,
    state: "KS",
    area_name: "Allen County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 20003,
    state: "KS",
    area_name: "Anderson County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 20005,
    state: "KS",
    area_name: "Atchison County",
    bachelorsOrHigher: 19
  }, {
    fips: 20007,
    state: "KS",
    area_name: "Barber County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 20009,
    state: "KS",
    area_name: "Barton County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 20011,
    state: "KS",
    area_name: "Bourbon County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 20013,
    state: "KS",
    area_name: "Brown County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 20015,
    state: "KS",
    area_name: "Butler County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 20017,
    state: "KS",
    area_name: "Chase County",
    bachelorsOrHigher: 24.7
  }, {
    fips: 20019,
    state: "KS",
    area_name: "Chautauqua County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 20021,
    state: "KS",
    area_name: "Cherokee County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 20023,
    state: "KS",
    area_name: "Cheyenne County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 20025,
    state: "KS",
    area_name: "Clark County",
    bachelorsOrHigher: 30.7
  }, {
    fips: 20027,
    state: "KS",
    area_name: "Clay County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 20029,
    state: "KS",
    area_name: "Cloud County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 20031,
    state: "KS",
    area_name: "Coffey County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 20033,
    state: "KS",
    area_name: "Comanche County",
    bachelorsOrHigher: 26
  }, {
    fips: 20035,
    state: "KS",
    area_name: "Cowley County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 20037,
    state: "KS",
    area_name: "Crawford County",
    bachelorsOrHigher: 28.9
  }, {
    fips: 20039,
    state: "KS",
    area_name: "Decatur County",
    bachelorsOrHigher: 23.3
  }, {
    fips: 20041,
    state: "KS",
    area_name: "Dickinson County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 20043,
    state: "KS",
    area_name: "Doniphan County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 20045,
    state: "KS",
    area_name: "Douglas County",
    bachelorsOrHigher: 49.4
  }, {
    fips: 20047,
    state: "KS",
    area_name: "Edwards County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 20049,
    state: "KS",
    area_name: "Elk County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 20051,
    state: "KS",
    area_name: "Ellis County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 20053,
    state: "KS",
    area_name: "Ellsworth County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 20055,
    state: "KS",
    area_name: "Finney County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 20057,
    state: "KS",
    area_name: "Ford County",
    bachelorsOrHigher: 17
  }, {
    fips: 20059,
    state: "KS",
    area_name: "Franklin County",
    bachelorsOrHigher: 21
  }, {
    fips: 20061,
    state: "KS",
    area_name: "Geary County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 20063,
    state: "KS",
    area_name: "Gove County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 20065,
    state: "KS",
    area_name: "Graham County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 20067,
    state: "KS",
    area_name: "Grant County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 20069,
    state: "KS",
    area_name: "Gray County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 20071,
    state: "KS",
    area_name: "Greeley County",
    bachelorsOrHigher: 20
  }, {
    fips: 20073,
    state: "KS",
    area_name: "Greenwood County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 20075,
    state: "KS",
    area_name: "Hamilton County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 20077,
    state: "KS",
    area_name: "Harper County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 20079,
    state: "KS",
    area_name: "Harvey County",
    bachelorsOrHigher: 25.8
  }, {
    fips: 20081,
    state: "KS",
    area_name: "Haskell County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 20083,
    state: "KS",
    area_name: "Hodgeman County",
    bachelorsOrHigher: 21
  }, {
    fips: 20085,
    state: "KS",
    area_name: "Jackson County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 20087,
    state: "KS",
    area_name: "Jefferson County",
    bachelorsOrHigher: 21
  }, {
    fips: 20089,
    state: "KS",
    area_name: "Jewell County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 20091,
    state: "KS",
    area_name: "Johnson County",
    bachelorsOrHigher: 52.1
  }, {
    fips: 20093,
    state: "KS",
    area_name: "Kearny County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 20095,
    state: "KS",
    area_name: "Kingman County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 20097,
    state: "KS",
    area_name: "Kiowa County",
    bachelorsOrHigher: 22.6
  }, {
    fips: 20099,
    state: "KS",
    area_name: "Labette County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 20101,
    state: "KS",
    area_name: "Lane County",
    bachelorsOrHigher: 24
  }, {
    fips: 20103,
    state: "KS",
    area_name: "Leavenworth County",
    bachelorsOrHigher: 29.8
  }, {
    fips: 20105,
    state: "KS",
    area_name: "Lincoln County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 20107,
    state: "KS",
    area_name: "Linn County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 20109,
    state: "KS",
    area_name: "Logan County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 20111,
    state: "KS",
    area_name: "Lyon County",
    bachelorsOrHigher: 25
  }, {
    fips: 20113,
    state: "KS",
    area_name: "McPherson County",
    bachelorsOrHigher: 26.7
  }, {
    fips: 20115,
    state: "KS",
    area_name: "Marion County",
    bachelorsOrHigher: 22.6
  }, {
    fips: 20117,
    state: "KS",
    area_name: "Marshall County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 20119,
    state: "KS",
    area_name: "Meade County",
    bachelorsOrHigher: 22
  }, {
    fips: 20121,
    state: "KS",
    area_name: "Miami County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 20123,
    state: "KS",
    area_name: "Mitchell County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 20125,
    state: "KS",
    area_name: "Montgomery County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 20127,
    state: "KS",
    area_name: "Morris County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 20129,
    state: "KS",
    area_name: "Morton County",
    bachelorsOrHigher: 17
  }, {
    fips: 20131,
    state: "KS",
    area_name: "Nemaha County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 20133,
    state: "KS",
    area_name: "Neosho County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 20135,
    state: "KS",
    area_name: "Ness County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 20137,
    state: "KS",
    area_name: "Norton County",
    bachelorsOrHigher: 16
  }, {
    fips: 20139,
    state: "KS",
    area_name: "Osage County",
    bachelorsOrHigher: 20.7
  }, {
    fips: 20141,
    state: "KS",
    area_name: "Osborne County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 20143,
    state: "KS",
    area_name: "Ottawa County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 20145,
    state: "KS",
    area_name: "Pawnee County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 20147,
    state: "KS",
    area_name: "Phillips County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 20149,
    state: "KS",
    area_name: "Pottawatomie County",
    bachelorsOrHigher: 32.2
  }, {
    fips: 20151,
    state: "KS",
    area_name: "Pratt County",
    bachelorsOrHigher: 24.4
  }, {
    fips: 20153,
    state: "KS",
    area_name: "Rawlins County",
    bachelorsOrHigher: 23.8
  }, {
    fips: 20155,
    state: "KS",
    area_name: "Reno County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 20157,
    state: "KS",
    area_name: "Republic County",
    bachelorsOrHigher: 21
  }, {
    fips: 20159,
    state: "KS",
    area_name: "Rice County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 20161,
    state: "KS",
    area_name: "Riley County",
    bachelorsOrHigher: 45.5
  }, {
    fips: 20163,
    state: "KS",
    area_name: "Rooks County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 20165,
    state: "KS",
    area_name: "Rush County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 20167,
    state: "KS",
    area_name: "Russell County",
    bachelorsOrHigher: 23.9
  }, {
    fips: 20169,
    state: "KS",
    area_name: "Saline County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 20171,
    state: "KS",
    area_name: "Scott County",
    bachelorsOrHigher: 20
  }, {
    fips: 20173,
    state: "KS",
    area_name: "Sedgwick County",
    bachelorsOrHigher: 29.4
  }, {
    fips: 20175,
    state: "KS",
    area_name: "Seward County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 20177,
    state: "KS",
    area_name: "Shawnee County",
    bachelorsOrHigher: 28.9
  }, {
    fips: 20179,
    state: "KS",
    area_name: "Sheridan County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 20181,
    state: "KS",
    area_name: "Sherman County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 20183,
    state: "KS",
    area_name: "Smith County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 20185,
    state: "KS",
    area_name: "Stafford County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 20187,
    state: "KS",
    area_name: "Stanton County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 20189,
    state: "KS",
    area_name: "Stevens County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 20191,
    state: "KS",
    area_name: "Sumner County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 20193,
    state: "KS",
    area_name: "Thomas County",
    bachelorsOrHigher: 30.5
  }, {
    fips: 20195,
    state: "KS",
    area_name: "Trego County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 20197,
    state: "KS",
    area_name: "Wabaunsee County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 20199,
    state: "KS",
    area_name: "Wallace County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 20201,
    state: "KS",
    area_name: "Washington County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 20203,
    state: "KS",
    area_name: "Wichita County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 20205,
    state: "KS",
    area_name: "Wilson County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 20207,
    state: "KS",
    area_name: "Woodson County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 20209,
    state: "KS",
    area_name: "Wyandotte County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 21001,
    state: "KY",
    area_name: "Adair County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 21003,
    state: "KY",
    area_name: "Allen County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 21005,
    state: "KY",
    area_name: "Anderson County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 21007,
    state: "KY",
    area_name: "Ballard County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 21009,
    state: "KY",
    area_name: "Barren County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 21011,
    state: "KY",
    area_name: "Bath County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 21013,
    state: "KY",
    area_name: "Bell County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 21015,
    state: "KY",
    area_name: "Boone County",
    bachelorsOrHigher: 30.8
  }, {
    fips: 21017,
    state: "KY",
    area_name: "Bourbon County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 21019,
    state: "KY",
    area_name: "Boyd County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 21021,
    state: "KY",
    area_name: "Boyle County",
    bachelorsOrHigher: 22.2
  }, {
    fips: 21023,
    state: "KY",
    area_name: "Bracken County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 21025,
    state: "KY",
    area_name: "Breathitt County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 21027,
    state: "KY",
    area_name: "Breckinridge County",
    bachelorsOrHigher: 9.4
  }, {
    fips: 21029,
    state: "KY",
    area_name: "Bullitt County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 21031,
    state: "KY",
    area_name: "Butler County",
    bachelorsOrHigher: 8.7
  }, {
    fips: 21033,
    state: "KY",
    area_name: "Caldwell County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 21035,
    state: "KY",
    area_name: "Calloway County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 21037,
    state: "KY",
    area_name: "Campbell County",
    bachelorsOrHigher: 28.1
  }, {
    fips: 21039,
    state: "KY",
    area_name: "Carlisle County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 21041,
    state: "KY",
    area_name: "Carroll County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 21043,
    state: "KY",
    area_name: "Carter County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 21045,
    state: "KY",
    area_name: "Casey County",
    bachelorsOrHigher: 9.3
  }, {
    fips: 21047,
    state: "KY",
    area_name: "Christian County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 21049,
    state: "KY",
    area_name: "Clark County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 21051,
    state: "KY",
    area_name: "Clay County",
    bachelorsOrHigher: 9.5
  }, {
    fips: 21053,
    state: "KY",
    area_name: "Clinton County",
    bachelorsOrHigher: 9
  }, {
    fips: 21055,
    state: "KY",
    area_name: "Crittenden County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 21057,
    state: "KY",
    area_name: "Cumberland County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 21059,
    state: "KY",
    area_name: "Daviess County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 21061,
    state: "KY",
    area_name: "Edmonson County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 21063,
    state: "KY",
    area_name: "Elliott County",
    bachelorsOrHigher: 6.4
  }, {
    fips: 21065,
    state: "KY",
    area_name: "Estill County",
    bachelorsOrHigher: 8.4
  }, {
    fips: 21067,
    state: "KY",
    area_name: "Fayette County",
    bachelorsOrHigher: 40.2
  }, {
    fips: 21069,
    state: "KY",
    area_name: "Fleming County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 21071,
    state: "KY",
    area_name: "Floyd County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 21073,
    state: "KY",
    area_name: "Franklin County",
    bachelorsOrHigher: 27.4
  }, {
    fips: 21075,
    state: "KY",
    area_name: "Fulton County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 21077,
    state: "KY",
    area_name: "Gallatin County",
    bachelorsOrHigher: 9.9
  }, {
    fips: 21079,
    state: "KY",
    area_name: "Garrard County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 21081,
    state: "KY",
    area_name: "Grant County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 21083,
    state: "KY",
    area_name: "Graves County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 21085,
    state: "KY",
    area_name: "Grayson County",
    bachelorsOrHigher: 9.1
  }, {
    fips: 21087,
    state: "KY",
    area_name: "Green County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 21089,
    state: "KY",
    area_name: "Greenup County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 21091,
    state: "KY",
    area_name: "Hancock County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 21093,
    state: "KY",
    area_name: "Hardin County",
    bachelorsOrHigher: 22.2
  }, {
    fips: 21095,
    state: "KY",
    area_name: "Harlan County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 21097,
    state: "KY",
    area_name: "Harrison County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 21099,
    state: "KY",
    area_name: "Hart County",
    bachelorsOrHigher: 9.8
  }, {
    fips: 21101,
    state: "KY",
    area_name: "Henderson County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 21103,
    state: "KY",
    area_name: "Henry County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 21105,
    state: "KY",
    area_name: "Hickman County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 21107,
    state: "KY",
    area_name: "Hopkins County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 21109,
    state: "KY",
    area_name: "Jackson County",
    bachelorsOrHigher: 8.6
  }, {
    fips: 21111,
    state: "KY",
    area_name: "Jefferson County",
    bachelorsOrHigher: 30.8
  }, {
    fips: 21113,
    state: "KY",
    area_name: "Jessamine County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 21115,
    state: "KY",
    area_name: "Johnson County",
    bachelorsOrHigher: 10.5
  }, {
    fips: 21117,
    state: "KY",
    area_name: "Kenton County",
    bachelorsOrHigher: 28.9
  }, {
    fips: 21119,
    state: "KY",
    area_name: "Knott County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 21121,
    state: "KY",
    area_name: "Knox County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 21123,
    state: "KY",
    area_name: "Larue County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 21125,
    state: "KY",
    area_name: "Laurel County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 21127,
    state: "KY",
    area_name: "Lawrence County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 21129,
    state: "KY",
    area_name: "Lee County",
    bachelorsOrHigher: 7
  }, {
    fips: 21131,
    state: "KY",
    area_name: "Leslie County",
    bachelorsOrHigher: 8.2
  }, {
    fips: 21133,
    state: "KY",
    area_name: "Letcher County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 21135,
    state: "KY",
    area_name: "Lewis County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 21137,
    state: "KY",
    area_name: "Lincoln County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 21139,
    state: "KY",
    area_name: "Livingston County",
    bachelorsOrHigher: 10
  }, {
    fips: 21141,
    state: "KY",
    area_name: "Logan County",
    bachelorsOrHigher: 13
  }, {
    fips: 21143,
    state: "KY",
    area_name: "Lyon County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 21145,
    state: "KY",
    area_name: "McCracken County",
    bachelorsOrHigher: 22.7
  }, {
    fips: 21147,
    state: "KY",
    area_name: "McCreary County",
    bachelorsOrHigher: 7.5
  }, {
    fips: 21149,
    state: "KY",
    area_name: "McLean County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 21151,
    state: "KY",
    area_name: "Madison County",
    bachelorsOrHigher: 28.6
  }, {
    fips: 21153,
    state: "KY",
    area_name: "Magoffin County",
    bachelorsOrHigher: 8.5
  }, {
    fips: 21155,
    state: "KY",
    area_name: "Marion County",
    bachelorsOrHigher: 13
  }, {
    fips: 21157,
    state: "KY",
    area_name: "Marshall County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 21159,
    state: "KY",
    area_name: "Martin County",
    bachelorsOrHigher: 7.3
  }, {
    fips: 21161,
    state: "KY",
    area_name: "Mason County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 21163,
    state: "KY",
    area_name: "Meade County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 21165,
    state: "KY",
    area_name: "Menifee County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 21167,
    state: "KY",
    area_name: "Mercer County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 21169,
    state: "KY",
    area_name: "Metcalfe County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 21171,
    state: "KY",
    area_name: "Monroe County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 21173,
    state: "KY",
    area_name: "Montgomery County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 21175,
    state: "KY",
    area_name: "Morgan County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 21177,
    state: "KY",
    area_name: "Muhlenberg County",
    bachelorsOrHigher: 9.6
  }, {
    fips: 21179,
    state: "KY",
    area_name: "Nelson County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 21181,
    state: "KY",
    area_name: "Nicholas County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 21183,
    state: "KY",
    area_name: "Ohio County",
    bachelorsOrHigher: 8.2
  }, {
    fips: 21185,
    state: "KY",
    area_name: "Oldham County",
    bachelorsOrHigher: 39.8
  }, {
    fips: 21187,
    state: "KY",
    area_name: "Owen County",
    bachelorsOrHigher: 14
  }, {
    fips: 21189,
    state: "KY",
    area_name: "Owsley County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 21191,
    state: "KY",
    area_name: "Pendleton County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 21193,
    state: "KY",
    area_name: "Perry County",
    bachelorsOrHigher: 13
  }, {
    fips: 21195,
    state: "KY",
    area_name: "Pike County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 21197,
    state: "KY",
    area_name: "Powell County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 21199,
    state: "KY",
    area_name: "Pulaski County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 21201,
    state: "KY",
    area_name: "Robertson County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 21203,
    state: "KY",
    area_name: "Rockcastle County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 21205,
    state: "KY",
    area_name: "Rowan County",
    bachelorsOrHigher: 25.5
  }, {
    fips: 21207,
    state: "KY",
    area_name: "Russell County",
    bachelorsOrHigher: 12
  }, {
    fips: 21209,
    state: "KY",
    area_name: "Scott County",
    bachelorsOrHigher: 28
  }, {
    fips: 21211,
    state: "KY",
    area_name: "Shelby County",
    bachelorsOrHigher: 23.7
  }, {
    fips: 21213,
    state: "KY",
    area_name: "Simpson County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 21215,
    state: "KY",
    area_name: "Spencer County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 21217,
    state: "KY",
    area_name: "Taylor County",
    bachelorsOrHigher: 15
  }, {
    fips: 21219,
    state: "KY",
    area_name: "Todd County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 21221,
    state: "KY",
    area_name: "Trigg County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 21223,
    state: "KY",
    area_name: "Trimble County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 21225,
    state: "KY",
    area_name: "Union County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 21227,
    state: "KY",
    area_name: "Warren County",
    bachelorsOrHigher: 27.3
  }, {
    fips: 21229,
    state: "KY",
    area_name: "Washington County",
    bachelorsOrHigher: 15
  }, {
    fips: 21231,
    state: "KY",
    area_name: "Wayne County",
    bachelorsOrHigher: 10
  }, {
    fips: 21233,
    state: "KY",
    area_name: "Webster County",
    bachelorsOrHigher: 7.9
  }, {
    fips: 21235,
    state: "KY",
    area_name: "Whitley County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 21237,
    state: "KY",
    area_name: "Wolfe County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 21239,
    state: "KY",
    area_name: "Woodford County",
    bachelorsOrHigher: 32.4
  }, {
    fips: 22001,
    state: "LA",
    area_name: "Acadia Parish",
    bachelorsOrHigher: 9.9
  }, {
    fips: 22003,
    state: "LA",
    area_name: "Allen Parish",
    bachelorsOrHigher: 11.5
  }, {
    fips: 22005,
    state: "LA",
    area_name: "Ascension Parish",
    bachelorsOrHigher: 25.8
  }, {
    fips: 22007,
    state: "LA",
    area_name: "Assumption Parish",
    bachelorsOrHigher: 10.7
  }, {
    fips: 22009,
    state: "LA",
    area_name: "Avoyelles Parish",
    bachelorsOrHigher: 9.3
  }, {
    fips: 22011,
    state: "LA",
    area_name: "Beauregard Parish",
    bachelorsOrHigher: 14.9
  }, {
    fips: 22013,
    state: "LA",
    area_name: "Bienville Parish",
    bachelorsOrHigher: 12
  }, {
    fips: 22015,
    state: "LA",
    area_name: "Bossier Parish",
    bachelorsOrHigher: 25.1
  }, {
    fips: 22017,
    state: "LA",
    area_name: "Caddo Parish",
    bachelorsOrHigher: 23.5
  }, {
    fips: 22019,
    state: "LA",
    area_name: "Calcasieu Parish",
    bachelorsOrHigher: 20.3
  }, {
    fips: 22021,
    state: "LA",
    area_name: "Caldwell Parish",
    bachelorsOrHigher: 9.8
  }, {
    fips: 22023,
    state: "LA",
    area_name: "Cameron Parish",
    bachelorsOrHigher: 15.7
  }, {
    fips: 22025,
    state: "LA",
    area_name: "Catahoula Parish",
    bachelorsOrHigher: 11.6
  }, {
    fips: 22027,
    state: "LA",
    area_name: "Claiborne Parish",
    bachelorsOrHigher: 13
  }, {
    fips: 22029,
    state: "LA",
    area_name: "Concordia Parish",
    bachelorsOrHigher: 10.5
  }, {
    fips: 22031,
    state: "LA",
    area_name: "De Soto Parish",
    bachelorsOrHigher: 12
  }, {
    fips: 22033,
    state: "LA",
    area_name: "East Baton Rouge Parish",
    bachelorsOrHigher: 34.1
  }, {
    fips: 22035,
    state: "LA",
    area_name: "East Carroll Parish",
    bachelorsOrHigher: 9.4
  }, {
    fips: 22037,
    state: "LA",
    area_name: "East Feliciana Parish",
    bachelorsOrHigher: 12.9
  }, {
    fips: 22039,
    state: "LA",
    area_name: "Evangeline Parish",
    bachelorsOrHigher: 12.6
  }, {
    fips: 22041,
    state: "LA",
    area_name: "Franklin Parish",
    bachelorsOrHigher: 12
  }, {
    fips: 22043,
    state: "LA",
    area_name: "Grant Parish",
    bachelorsOrHigher: 9.4
  }, {
    fips: 22045,
    state: "LA",
    area_name: "Iberia Parish",
    bachelorsOrHigher: 14.3
  }, {
    fips: 22047,
    state: "LA",
    area_name: "Iberville Parish",
    bachelorsOrHigher: 12.7
  }, {
    fips: 22049,
    state: "LA",
    area_name: "Jackson Parish",
    bachelorsOrHigher: 13.3
  }, {
    fips: 22051,
    state: "LA",
    area_name: "Jefferson Parish",
    bachelorsOrHigher: 23.8
  }, {
    fips: 22053,
    state: "LA",
    area_name: "Jefferson Davis Parish",
    bachelorsOrHigher: 14.3
  }, {
    fips: 22055,
    state: "LA",
    area_name: "Lafayette Parish",
    bachelorsOrHigher: 29
  }, {
    fips: 22057,
    state: "LA",
    area_name: "Lafourche Parish",
    bachelorsOrHigher: 15.1
  }, {
    fips: 22059,
    state: "LA",
    area_name: "La Salle Parish",
    bachelorsOrHigher: 13
  }, {
    fips: 22061,
    state: "LA",
    area_name: "Lincoln Parish",
    bachelorsOrHigher: 34.6
  }, {
    fips: 22063,
    state: "LA",
    area_name: "Livingston Parish",
    bachelorsOrHigher: 17.3
  }, {
    fips: 22065,
    state: "LA",
    area_name: "Madison Parish",
    bachelorsOrHigher: 11.4
  }, {
    fips: 22067,
    state: "LA",
    area_name: "Morehouse Parish",
    bachelorsOrHigher: 13.3
  }, {
    fips: 22069,
    state: "LA",
    area_name: "Natchitoches Parish",
    bachelorsOrHigher: 20.6
  }, {
    fips: 22071,
    state: "LA",
    area_name: "Orleans Parish",
    bachelorsOrHigher: 34.4
  }, {
    fips: 22073,
    state: "LA",
    area_name: "Ouachita Parish",
    bachelorsOrHigher: 22.8
  }, {
    fips: 22075,
    state: "LA",
    area_name: "Plaquemines Parish",
    bachelorsOrHigher: 15.4
  }, {
    fips: 22077,
    state: "LA",
    area_name: "Pointe Coupee Parish",
    bachelorsOrHigher: 12.6
  }, {
    fips: 22079,
    state: "LA",
    area_name: "Rapides Parish",
    bachelorsOrHigher: 18.2
  }, {
    fips: 22081,
    state: "LA",
    area_name: "Red River Parish",
    bachelorsOrHigher: 11.2
  }, {
    fips: 22083,
    state: "LA",
    area_name: "Richland Parish",
    bachelorsOrHigher: 14.7
  }, {
    fips: 22085,
    state: "LA",
    area_name: "Sabine Parish",
    bachelorsOrHigher: 13.8
  }, {
    fips: 22087,
    state: "LA",
    area_name: "St. Bernard Parish",
    bachelorsOrHigher: 12.5
  }, {
    fips: 22089,
    state: "LA",
    area_name: "St. Charles Parish",
    bachelorsOrHigher: 20.1
  }, {
    fips: 22091,
    state: "LA",
    area_name: "St. Helena Parish",
    bachelorsOrHigher: 8.9
  }, {
    fips: 22093,
    state: "LA",
    area_name: "St. James Parish",
    bachelorsOrHigher: 13.4
  }, {
    fips: 22095,
    state: "LA",
    area_name: "St. John the Baptist Parish",
    bachelorsOrHigher: 15.2
  }, {
    fips: 22097,
    state: "LA",
    area_name: "St. Landry Parish",
    bachelorsOrHigher: 13.1
  }, {
    fips: 22099,
    state: "LA",
    area_name: "St. Martin Parish",
    bachelorsOrHigher: 13.9
  }, {
    fips: 22101,
    state: "LA",
    area_name: "St. Mary Parish",
    bachelorsOrHigher: 11.1
  }, {
    fips: 22103,
    state: "LA",
    area_name: "St. Tammany Parish",
    bachelorsOrHigher: 30.4
  }, {
    fips: 22105,
    state: "LA",
    area_name: "Tangipahoa Parish",
    bachelorsOrHigher: 19.3
  }, {
    fips: 22107,
    state: "LA",
    area_name: "Tensas Parish",
    bachelorsOrHigher: 9.8
  }, {
    fips: 22109,
    state: "LA",
    area_name: "Terrebonne Parish",
    bachelorsOrHigher: 12.9
  }, {
    fips: 22111,
    state: "LA",
    area_name: "Union Parish",
    bachelorsOrHigher: 11.6
  }, {
    fips: 22113,
    state: "LA",
    area_name: "Vermilion Parish",
    bachelorsOrHigher: 13
  }, {
    fips: 22115,
    state: "LA",
    area_name: "Vernon Parish",
    bachelorsOrHigher: 18.7
  }, {
    fips: 22117,
    state: "LA",
    area_name: "Washington Parish",
    bachelorsOrHigher: 11
  }, {
    fips: 22119,
    state: "LA",
    area_name: "Webster Parish",
    bachelorsOrHigher: 14.4
  }, {
    fips: 22121,
    state: "LA",
    area_name: "West Baton Rouge Parish",
    bachelorsOrHigher: 18
  }, {
    fips: 22123,
    state: "LA",
    area_name: "West Carroll Parish",
    bachelorsOrHigher: 10.1
  }, {
    fips: 22125,
    state: "LA",
    area_name: "West Feliciana Parish",
    bachelorsOrHigher: 19.1
  }, {
    fips: 22127,
    state: "LA",
    area_name: "Winn Parish",
    bachelorsOrHigher: 12.3
  }, {
    fips: 23001,
    state: "ME",
    area_name: "Androscoggin County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 23003,
    state: "ME",
    area_name: "Aroostook County",
    bachelorsOrHigher: 17
  }, {
    fips: 23005,
    state: "ME",
    area_name: "Cumberland County",
    bachelorsOrHigher: 42
  }, {
    fips: 23007,
    state: "ME",
    area_name: "Franklin County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 23009,
    state: "ME",
    area_name: "Hancock County",
    bachelorsOrHigher: 32.6
  }, {
    fips: 23011,
    state: "ME",
    area_name: "Kennebec County",
    bachelorsOrHigher: 23.9
  }, {
    fips: 23013,
    state: "ME",
    area_name: "Knox County",
    bachelorsOrHigher: 30.7
  }, {
    fips: 23015,
    state: "ME",
    area_name: "Lincoln County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 23017,
    state: "ME",
    area_name: "Oxford County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 23019,
    state: "ME",
    area_name: "Penobscot County",
    bachelorsOrHigher: 24.2
  }, {
    fips: 23021,
    state: "ME",
    area_name: "Piscataquis County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 23023,
    state: "ME",
    area_name: "Sagadahoc County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 23025,
    state: "ME",
    area_name: "Somerset County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 23027,
    state: "ME",
    area_name: "Waldo County",
    bachelorsOrHigher: 29
  }, {
    fips: 23029,
    state: "ME",
    area_name: "Washington County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 23031,
    state: "ME",
    area_name: "York County",
    bachelorsOrHigher: 29.1
  }, {
    fips: 24001,
    state: "MD",
    area_name: "Allegany County",
    bachelorsOrHigher: 17
  }, {
    fips: 24003,
    state: "MD",
    area_name: "Anne Arundel County",
    bachelorsOrHigher: 37.6
  }, {
    fips: 24005,
    state: "MD",
    area_name: "Baltimore County",
    bachelorsOrHigher: 36
  }, {
    fips: 24009,
    state: "MD",
    area_name: "Calvert County",
    bachelorsOrHigher: 29.3
  }, {
    fips: 24011,
    state: "MD",
    area_name: "Caroline County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 24013,
    state: "MD",
    area_name: "Carroll County",
    bachelorsOrHigher: 32.7
  }, {
    fips: 24015,
    state: "MD",
    area_name: "Cecil County",
    bachelorsOrHigher: 21.8
  }, {
    fips: 24017,
    state: "MD",
    area_name: "Charles County",
    bachelorsOrHigher: 26.8
  }, {
    fips: 24019,
    state: "MD",
    area_name: "Dorchester County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 24021,
    state: "MD",
    area_name: "Frederick County",
    bachelorsOrHigher: 38.8
  }, {
    fips: 24023,
    state: "MD",
    area_name: "Garrett County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 24025,
    state: "MD",
    area_name: "Harford County",
    bachelorsOrHigher: 33.4
  }, {
    fips: 24027,
    state: "MD",
    area_name: "Howard County",
    bachelorsOrHigher: 60.4
  }, {
    fips: 24029,
    state: "MD",
    area_name: "Kent County",
    bachelorsOrHigher: 28
  }, {
    fips: 24031,
    state: "MD",
    area_name: "Montgomery County",
    bachelorsOrHigher: 57.4
  }, {
    fips: 24033,
    state: "MD",
    area_name: "Prince George's County",
    bachelorsOrHigher: 30.4
  }, {
    fips: 24035,
    state: "MD",
    area_name: "Queen Anne's County",
    bachelorsOrHigher: 34.1
  }, {
    fips: 24037,
    state: "MD",
    area_name: "St. Mary's County",
    bachelorsOrHigher: 29.8
  }, {
    fips: 24039,
    state: "MD",
    area_name: "Somerset County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 24041,
    state: "MD",
    area_name: "Talbot County",
    bachelorsOrHigher: 33.4
  }, {
    fips: 24043,
    state: "MD",
    area_name: "Washington County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 24045,
    state: "MD",
    area_name: "Wicomico County",
    bachelorsOrHigher: 27.7
  }, {
    fips: 24047,
    state: "MD",
    area_name: "Worcester County",
    bachelorsOrHigher: 28.2
  }, {
    fips: 24510,
    state: "MD",
    area_name: "Baltimore city",
    bachelorsOrHigher: 27.7
  }, {
    fips: 25001,
    state: "MA",
    area_name: "Barnstable County",
    bachelorsOrHigher: 39.9
  }, {
    fips: 25003,
    state: "MA",
    area_name: "Berkshire County",
    bachelorsOrHigher: 31.3
  }, {
    fips: 25005,
    state: "MA",
    area_name: "Bristol County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 25007,
    state: "MA",
    area_name: "Dukes County",
    bachelorsOrHigher: 41.2
  }, {
    fips: 25009,
    state: "MA",
    area_name: "Essex County",
    bachelorsOrHigher: 37.2
  }, {
    fips: 25011,
    state: "MA",
    area_name: "Franklin County",
    bachelorsOrHigher: 34.4
  }, {
    fips: 25013,
    state: "MA",
    area_name: "Hampden County",
    bachelorsOrHigher: 25.4
  }, {
    fips: 25015,
    state: "MA",
    area_name: "Hampshire County",
    bachelorsOrHigher: 43.2
  }, {
    fips: 25017,
    state: "MA",
    area_name: "Middlesex County",
    bachelorsOrHigher: 51.3
  }, {
    fips: 25019,
    state: "MA",
    area_name: "Nantucket County",
    bachelorsOrHigher: 45.7
  }, {
    fips: 25021,
    state: "MA",
    area_name: "Norfolk County",
    bachelorsOrHigher: 49.9
  }, {
    fips: 25023,
    state: "MA",
    area_name: "Plymouth County",
    bachelorsOrHigher: 34
  }, {
    fips: 25025,
    state: "MA",
    area_name: "Suffolk County",
    bachelorsOrHigher: 41
  }, {
    fips: 25027,
    state: "MA",
    area_name: "Worcester County",
    bachelorsOrHigher: 34.1
  }, {
    fips: 26001,
    state: "MI",
    area_name: "Alcona County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 26003,
    state: "MI",
    area_name: "Alger County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 26005,
    state: "MI",
    area_name: "Allegan County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 26007,
    state: "MI",
    area_name: "Alpena County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 26009,
    state: "MI",
    area_name: "Antrim County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 26011,
    state: "MI",
    area_name: "Arenac County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 26013,
    state: "MI",
    area_name: "Baraga County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 26015,
    state: "MI",
    area_name: "Barry County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 26017,
    state: "MI",
    area_name: "Bay County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 26019,
    state: "MI",
    area_name: "Benzie County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 26021,
    state: "MI",
    area_name: "Berrien County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 26023,
    state: "MI",
    area_name: "Branch County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 26025,
    state: "MI",
    area_name: "Calhoun County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 26027,
    state: "MI",
    area_name: "Cass County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 26029,
    state: "MI",
    area_name: "Charlevoix County",
    bachelorsOrHigher: 27.1
  }, {
    fips: 26031,
    state: "MI",
    area_name: "Cheboygan County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 26033,
    state: "MI",
    area_name: "Chippewa County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 26035,
    state: "MI",
    area_name: "Clare County",
    bachelorsOrHigher: 10.5
  }, {
    fips: 26037,
    state: "MI",
    area_name: "Clinton County",
    bachelorsOrHigher: 28.7
  }, {
    fips: 26039,
    state: "MI",
    area_name: "Crawford County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 26041,
    state: "MI",
    area_name: "Delta County",
    bachelorsOrHigher: 18
  }, {
    fips: 26043,
    state: "MI",
    area_name: "Dickinson County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 26045,
    state: "MI",
    area_name: "Eaton County",
    bachelorsOrHigher: 24.2
  }, {
    fips: 26047,
    state: "MI",
    area_name: "Emmet County",
    bachelorsOrHigher: 33.3
  }, {
    fips: 26049,
    state: "MI",
    area_name: "Genesee County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 26051,
    state: "MI",
    area_name: "Gladwin County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 26053,
    state: "MI",
    area_name: "Gogebic County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 26055,
    state: "MI",
    area_name: "Grand Traverse County",
    bachelorsOrHigher: 30.8
  }, {
    fips: 26057,
    state: "MI",
    area_name: "Gratiot County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 26059,
    state: "MI",
    area_name: "Hillsdale County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 26061,
    state: "MI",
    area_name: "Houghton County",
    bachelorsOrHigher: 29.6
  }, {
    fips: 26063,
    state: "MI",
    area_name: "Huron County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 26065,
    state: "MI",
    area_name: "Ingham County",
    bachelorsOrHigher: 36.5
  }, {
    fips: 26067,
    state: "MI",
    area_name: "Ionia County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 26069,
    state: "MI",
    area_name: "Iosco County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 26071,
    state: "MI",
    area_name: "Iron County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 26073,
    state: "MI",
    area_name: "Isabella County",
    bachelorsOrHigher: 26.1
  }, {
    fips: 26075,
    state: "MI",
    area_name: "Jackson County",
    bachelorsOrHigher: 19
  }, {
    fips: 26077,
    state: "MI",
    area_name: "Kalamazoo County",
    bachelorsOrHigher: 34.4
  }, {
    fips: 26079,
    state: "MI",
    area_name: "Kalkaska County",
    bachelorsOrHigher: 13
  }, {
    fips: 26081,
    state: "MI",
    area_name: "Kent County",
    bachelorsOrHigher: 32.6
  }, {
    fips: 26083,
    state: "MI",
    area_name: "Keweenaw County",
    bachelorsOrHigher: 24.6
  }, {
    fips: 26085,
    state: "MI",
    area_name: "Lake County",
    bachelorsOrHigher: 9.2
  }, {
    fips: 26087,
    state: "MI",
    area_name: "Lapeer County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 26089,
    state: "MI",
    area_name: "Leelanau County",
    bachelorsOrHigher: 39.5
  }, {
    fips: 26091,
    state: "MI",
    area_name: "Lenawee County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 26093,
    state: "MI",
    area_name: "Livingston County",
    bachelorsOrHigher: 33
  }, {
    fips: 26095,
    state: "MI",
    area_name: "Luce County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 26097,
    state: "MI",
    area_name: "Mackinac County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 26099,
    state: "MI",
    area_name: "Macomb County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 26101,
    state: "MI",
    area_name: "Manistee County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 26103,
    state: "MI",
    area_name: "Marquette County",
    bachelorsOrHigher: 28.8
  }, {
    fips: 26105,
    state: "MI",
    area_name: "Mason County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 26107,
    state: "MI",
    area_name: "Mecosta County",
    bachelorsOrHigher: 22.2
  }, {
    fips: 26109,
    state: "MI",
    area_name: "Menominee County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 26111,
    state: "MI",
    area_name: "Midland County",
    bachelorsOrHigher: 32
  }, {
    fips: 26113,
    state: "MI",
    area_name: "Missaukee County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 26115,
    state: "MI",
    area_name: "Monroe County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 26117,
    state: "MI",
    area_name: "Montcalm County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 26119,
    state: "MI",
    area_name: "Montmorency County",
    bachelorsOrHigher: 10.3
  }, {
    fips: 26121,
    state: "MI",
    area_name: "Muskegon County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 26123,
    state: "MI",
    area_name: "Newaygo County",
    bachelorsOrHigher: 13
  }, {
    fips: 26125,
    state: "MI",
    area_name: "Oakland County",
    bachelorsOrHigher: 43.7
  }, {
    fips: 26127,
    state: "MI",
    area_name: "Oceana County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 26129,
    state: "MI",
    area_name: "Ogemaw County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 26131,
    state: "MI",
    area_name: "Ontonagon County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 26133,
    state: "MI",
    area_name: "Osceola County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 26135,
    state: "MI",
    area_name: "Oscoda County",
    bachelorsOrHigher: 9.8
  }, {
    fips: 26137,
    state: "MI",
    area_name: "Otsego County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 26139,
    state: "MI",
    area_name: "Ottawa County",
    bachelorsOrHigher: 30.5
  }, {
    fips: 26141,
    state: "MI",
    area_name: "Presque Isle County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 26143,
    state: "MI",
    area_name: "Roscommon County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 26145,
    state: "MI",
    area_name: "Saginaw County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 26147,
    state: "MI",
    area_name: "St. Clair County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 26149,
    state: "MI",
    area_name: "St. Joseph County",
    bachelorsOrHigher: 15
  }, {
    fips: 26151,
    state: "MI",
    area_name: "Sanilac County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 26153,
    state: "MI",
    area_name: "Schoolcraft County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 26155,
    state: "MI",
    area_name: "Shiawassee County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 26157,
    state: "MI",
    area_name: "Tuscola County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 26159,
    state: "MI",
    area_name: "Van Buren County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 26161,
    state: "MI",
    area_name: "Washtenaw County",
    bachelorsOrHigher: 51.8
  }, {
    fips: 26163,
    state: "MI",
    area_name: "Wayne County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 26165,
    state: "MI",
    area_name: "Wexford County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 27001,
    state: "MN",
    area_name: "Aitkin County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 27003,
    state: "MN",
    area_name: "Anoka County",
    bachelorsOrHigher: 27.3
  }, {
    fips: 27005,
    state: "MN",
    area_name: "Becker County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 27007,
    state: "MN",
    area_name: "Beltrami County",
    bachelorsOrHigher: 26.7
  }, {
    fips: 27009,
    state: "MN",
    area_name: "Benton County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 27011,
    state: "MN",
    area_name: "Big Stone County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 27013,
    state: "MN",
    area_name: "Blue Earth County",
    bachelorsOrHigher: 30.4
  }, {
    fips: 27015,
    state: "MN",
    area_name: "Brown County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 27017,
    state: "MN",
    area_name: "Carlton County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 27019,
    state: "MN",
    area_name: "Carver County",
    bachelorsOrHigher: 45
  }, {
    fips: 27021,
    state: "MN",
    area_name: "Cass County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 27023,
    state: "MN",
    area_name: "Chippewa County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 27025,
    state: "MN",
    area_name: "Chisago County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 27027,
    state: "MN",
    area_name: "Clay County",
    bachelorsOrHigher: 30.5
  }, {
    fips: 27029,
    state: "MN",
    area_name: "Clearwater County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 27031,
    state: "MN",
    area_name: "Cook County",
    bachelorsOrHigher: 40.6
  }, {
    fips: 27033,
    state: "MN",
    area_name: "Cottonwood County",
    bachelorsOrHigher: 17
  }, {
    fips: 27035,
    state: "MN",
    area_name: "Crow Wing County",
    bachelorsOrHigher: 23
  }, {
    fips: 27037,
    state: "MN",
    area_name: "Dakota County",
    bachelorsOrHigher: 39.5
  }, {
    fips: 27039,
    state: "MN",
    area_name: "Dodge County",
    bachelorsOrHigher: 24.1
  }, {
    fips: 27041,
    state: "MN",
    area_name: "Douglas County",
    bachelorsOrHigher: 24.2
  }, {
    fips: 27043,
    state: "MN",
    area_name: "Faribault County",
    bachelorsOrHigher: 17
  }, {
    fips: 27045,
    state: "MN",
    area_name: "Fillmore County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 27047,
    state: "MN",
    area_name: "Freeborn County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 27049,
    state: "MN",
    area_name: "Goodhue County",
    bachelorsOrHigher: 23.5
  }, {
    fips: 27051,
    state: "MN",
    area_name: "Grant County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 27053,
    state: "MN",
    area_name: "Hennepin County",
    bachelorsOrHigher: 46.4
  }, {
    fips: 27055,
    state: "MN",
    area_name: "Houston County",
    bachelorsOrHigher: 22
  }, {
    fips: 27057,
    state: "MN",
    area_name: "Hubbard County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 27059,
    state: "MN",
    area_name: "Isanti County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 27061,
    state: "MN",
    area_name: "Itasca County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 27063,
    state: "MN",
    area_name: "Jackson County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 27065,
    state: "MN",
    area_name: "Kanabec County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 27067,
    state: "MN",
    area_name: "Kandiyohi County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 27069,
    state: "MN",
    area_name: "Kittson County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 27071,
    state: "MN",
    area_name: "Koochiching County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 27073,
    state: "MN",
    area_name: "Lac qui Parle County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 27075,
    state: "MN",
    area_name: "Lake County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 27077,
    state: "MN",
    area_name: "Lake of the Woods County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 27079,
    state: "MN",
    area_name: "Le Sueur County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 27081,
    state: "MN",
    area_name: "Lincoln County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 27083,
    state: "MN",
    area_name: "Lyon County",
    bachelorsOrHigher: 27.2
  }, {
    fips: 27085,
    state: "MN",
    area_name: "McLeod County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 27087,
    state: "MN",
    area_name: "Mahnomen County",
    bachelorsOrHigher: 13
  }, {
    fips: 27089,
    state: "MN",
    area_name: "Marshall County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 27091,
    state: "MN",
    area_name: "Martin County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 27093,
    state: "MN",
    area_name: "Meeker County",
    bachelorsOrHigher: 18
  }, {
    fips: 27095,
    state: "MN",
    area_name: "Mille Lacs County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 27097,
    state: "MN",
    area_name: "Morrison County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 27099,
    state: "MN",
    area_name: "Mower County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 27101,
    state: "MN",
    area_name: "Murray County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 27103,
    state: "MN",
    area_name: "Nicollet County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 27105,
    state: "MN",
    area_name: "Nobles County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 27107,
    state: "MN",
    area_name: "Norman County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 27109,
    state: "MN",
    area_name: "Olmsted County",
    bachelorsOrHigher: 40.2
  }, {
    fips: 27111,
    state: "MN",
    area_name: "Otter Tail County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 27113,
    state: "MN",
    area_name: "Pennington County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 27115,
    state: "MN",
    area_name: "Pine County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 27117,
    state: "MN",
    area_name: "Pipestone County",
    bachelorsOrHigher: 18
  }, {
    fips: 27119,
    state: "MN",
    area_name: "Polk County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 27121,
    state: "MN",
    area_name: "Pope County",
    bachelorsOrHigher: 20.6
  }, {
    fips: 27123,
    state: "MN",
    area_name: "Ramsey County",
    bachelorsOrHigher: 39.8
  }, {
    fips: 27125,
    state: "MN",
    area_name: "Red Lake County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 27127,
    state: "MN",
    area_name: "Redwood County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 27129,
    state: "MN",
    area_name: "Renville County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 27131,
    state: "MN",
    area_name: "Rice County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 27133,
    state: "MN",
    area_name: "Rock County",
    bachelorsOrHigher: 18
  }, {
    fips: 27135,
    state: "MN",
    area_name: "Roseau County",
    bachelorsOrHigher: 18
  }, {
    fips: 27137,
    state: "MN",
    area_name: "St. Louis County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 27139,
    state: "MN",
    area_name: "Scott County",
    bachelorsOrHigher: 38.3
  }, {
    fips: 27141,
    state: "MN",
    area_name: "Sherburne County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 27143,
    state: "MN",
    area_name: "Sibley County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 27145,
    state: "MN",
    area_name: "Stearns County",
    bachelorsOrHigher: 25.5
  }, {
    fips: 27147,
    state: "MN",
    area_name: "Steele County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 27149,
    state: "MN",
    area_name: "Stevens County",
    bachelorsOrHigher: 26.3
  }, {
    fips: 27151,
    state: "MN",
    area_name: "Swift County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 27153,
    state: "MN",
    area_name: "Todd County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 27155,
    state: "MN",
    area_name: "Traverse County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 27157,
    state: "MN",
    area_name: "Wabasha County",
    bachelorsOrHigher: 20.7
  }, {
    fips: 27159,
    state: "MN",
    area_name: "Wadena County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 27161,
    state: "MN",
    area_name: "Waseca County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 27163,
    state: "MN",
    area_name: "Washington County",
    bachelorsOrHigher: 41.3
  }, {
    fips: 27165,
    state: "MN",
    area_name: "Watonwan County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 27167,
    state: "MN",
    area_name: "Wilkin County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 27169,
    state: "MN",
    area_name: "Winona County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 27171,
    state: "MN",
    area_name: "Wright County",
    bachelorsOrHigher: 27.4
  }, {
    fips: 27173,
    state: "MN",
    area_name: "Yellow Medicine County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 28001,
    state: "MS",
    area_name: "Adams County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 28003,
    state: "MS",
    area_name: "Alcorn County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 28005,
    state: "MS",
    area_name: "Amite County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 28007,
    state: "MS",
    area_name: "Attala County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 28009,
    state: "MS",
    area_name: "Benton County",
    bachelorsOrHigher: 8.6
  }, {
    fips: 28011,
    state: "MS",
    area_name: "Bolivar County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 28013,
    state: "MS",
    area_name: "Calhoun County",
    bachelorsOrHigher: 10.6
  }, {
    fips: 28015,
    state: "MS",
    area_name: "Carroll County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 28017,
    state: "MS",
    area_name: "Chickasaw County",
    bachelorsOrHigher: 10.5
  }, {
    fips: 28019,
    state: "MS",
    area_name: "Choctaw County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 28021,
    state: "MS",
    area_name: "Claiborne County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 28023,
    state: "MS",
    area_name: "Clarke County",
    bachelorsOrHigher: 12
  }, {
    fips: 28025,
    state: "MS",
    area_name: "Clay County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 28027,
    state: "MS",
    area_name: "Coahoma County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 28029,
    state: "MS",
    area_name: "Copiah County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 28031,
    state: "MS",
    area_name: "Covington County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 28033,
    state: "MS",
    area_name: "DeSoto County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 28035,
    state: "MS",
    area_name: "Forrest County",
    bachelorsOrHigher: 26.8
  }, {
    fips: 28037,
    state: "MS",
    area_name: "Franklin County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 28039,
    state: "MS",
    area_name: "George County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 28041,
    state: "MS",
    area_name: "Greene County",
    bachelorsOrHigher: 8.7
  }, {
    fips: 28043,
    state: "MS",
    area_name: "Grenada County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 28045,
    state: "MS",
    area_name: "Hancock County",
    bachelorsOrHigher: 22.5
  }, {
    fips: 28047,
    state: "MS",
    area_name: "Harrison County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 28049,
    state: "MS",
    area_name: "Hinds County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 28051,
    state: "MS",
    area_name: "Holmes County",
    bachelorsOrHigher: 12
  }, {
    fips: 28053,
    state: "MS",
    area_name: "Humphreys County",
    bachelorsOrHigher: 12
  }, {
    fips: 28055,
    state: "MS",
    area_name: "Issaquena County",
    bachelorsOrHigher: 7.8
  }, {
    fips: 28057,
    state: "MS",
    area_name: "Itawamba County",
    bachelorsOrHigher: 13
  }, {
    fips: 28059,
    state: "MS",
    area_name: "Jackson County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 28061,
    state: "MS",
    area_name: "Jasper County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 28063,
    state: "MS",
    area_name: "Jefferson County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 28065,
    state: "MS",
    area_name: "Jefferson Davis County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 28067,
    state: "MS",
    area_name: "Jones County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 28069,
    state: "MS",
    area_name: "Kemper County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 28071,
    state: "MS",
    area_name: "Lafayette County",
    bachelorsOrHigher: 36.9
  }, {
    fips: 28073,
    state: "MS",
    area_name: "Lamar County",
    bachelorsOrHigher: 34.1
  }, {
    fips: 28075,
    state: "MS",
    area_name: "Lauderdale County",
    bachelorsOrHigher: 19
  }, {
    fips: 28077,
    state: "MS",
    area_name: "Lawrence County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 28079,
    state: "MS",
    area_name: "Leake County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 28081,
    state: "MS",
    area_name: "Lee County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 28083,
    state: "MS",
    area_name: "Leflore County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 28085,
    state: "MS",
    area_name: "Lincoln County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 28087,
    state: "MS",
    area_name: "Lowndes County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 28089,
    state: "MS",
    area_name: "Madison County",
    bachelorsOrHigher: 46.3
  }, {
    fips: 28091,
    state: "MS",
    area_name: "Marion County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 28093,
    state: "MS",
    area_name: "Marshall County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 28095,
    state: "MS",
    area_name: "Monroe County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 28097,
    state: "MS",
    area_name: "Montgomery County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 28099,
    state: "MS",
    area_name: "Neshoba County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 28101,
    state: "MS",
    area_name: "Newton County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 28103,
    state: "MS",
    area_name: "Noxubee County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 28105,
    state: "MS",
    area_name: "Oktibbeha County",
    bachelorsOrHigher: 42.6
  }, {
    fips: 28107,
    state: "MS",
    area_name: "Panola County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 28109,
    state: "MS",
    area_name: "Pearl River County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 28111,
    state: "MS",
    area_name: "Perry County",
    bachelorsOrHigher: 8.4
  }, {
    fips: 28113,
    state: "MS",
    area_name: "Pike County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 28115,
    state: "MS",
    area_name: "Pontotoc County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 28117,
    state: "MS",
    area_name: "Prentiss County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 28119,
    state: "MS",
    area_name: "Quitman County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 28121,
    state: "MS",
    area_name: "Rankin County",
    bachelorsOrHigher: 28.7
  }, {
    fips: 28123,
    state: "MS",
    area_name: "Scott County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 28125,
    state: "MS",
    area_name: "Sharkey County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 28127,
    state: "MS",
    area_name: "Simpson County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 28129,
    state: "MS",
    area_name: "Smith County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 28131,
    state: "MS",
    area_name: "Stone County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 28133,
    state: "MS",
    area_name: "Sunflower County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 28135,
    state: "MS",
    area_name: "Tallahatchie County",
    bachelorsOrHigher: 9.7
  }, {
    fips: 28137,
    state: "MS",
    area_name: "Tate County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 28139,
    state: "MS",
    area_name: "Tippah County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 28141,
    state: "MS",
    area_name: "Tishomingo County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 28143,
    state: "MS",
    area_name: "Tunica County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 28145,
    state: "MS",
    area_name: "Union County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 28147,
    state: "MS",
    area_name: "Walthall County",
    bachelorsOrHigher: 13
  }, {
    fips: 28149,
    state: "MS",
    area_name: "Warren County",
    bachelorsOrHigher: 25.2
  }, {
    fips: 28151,
    state: "MS",
    area_name: "Washington County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 28153,
    state: "MS",
    area_name: "Wayne County",
    bachelorsOrHigher: 10.3
  }, {
    fips: 28155,
    state: "MS",
    area_name: "Webster County",
    bachelorsOrHigher: 19
  }, {
    fips: 28157,
    state: "MS",
    area_name: "Wilkinson County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 28159,
    state: "MS",
    area_name: "Winston County",
    bachelorsOrHigher: 17
  }, {
    fips: 28161,
    state: "MS",
    area_name: "Yalobusha County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 28163,
    state: "MS",
    area_name: "Yazoo County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 29001,
    state: "MO",
    area_name: "Adair County",
    bachelorsOrHigher: 28.6
  }, {
    fips: 29003,
    state: "MO",
    area_name: "Andrew County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 29005,
    state: "MO",
    area_name: "Atchison County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 29007,
    state: "MO",
    area_name: "Audrain County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 29009,
    state: "MO",
    area_name: "Barry County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 29011,
    state: "MO",
    area_name: "Barton County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 29013,
    state: "MO",
    area_name: "Bates County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 29015,
    state: "MO",
    area_name: "Benton County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 29017,
    state: "MO",
    area_name: "Bollinger County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 29019,
    state: "MO",
    area_name: "Boone County",
    bachelorsOrHigher: 47.7
  }, {
    fips: 29021,
    state: "MO",
    area_name: "Buchanan County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 29023,
    state: "MO",
    area_name: "Butler County",
    bachelorsOrHigher: 14
  }, {
    fips: 29025,
    state: "MO",
    area_name: "Caldwell County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 29027,
    state: "MO",
    area_name: "Callaway County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 29029,
    state: "MO",
    area_name: "Camden County",
    bachelorsOrHigher: 22
  }, {
    fips: 29031,
    state: "MO",
    area_name: "Cape Girardeau County",
    bachelorsOrHigher: 28.1
  }, {
    fips: 29033,
    state: "MO",
    area_name: "Carroll County",
    bachelorsOrHigher: 17
  }, {
    fips: 29035,
    state: "MO",
    area_name: "Carter County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 29037,
    state: "MO",
    area_name: "Cass County",
    bachelorsOrHigher: 24
  }, {
    fips: 29039,
    state: "MO",
    area_name: "Cedar County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 29041,
    state: "MO",
    area_name: "Chariton County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 29043,
    state: "MO",
    area_name: "Christian County",
    bachelorsOrHigher: 26.5
  }, {
    fips: 29045,
    state: "MO",
    area_name: "Clark County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 29047,
    state: "MO",
    area_name: "Clay County",
    bachelorsOrHigher: 30.7
  }, {
    fips: 29049,
    state: "MO",
    area_name: "Clinton County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 29051,
    state: "MO",
    area_name: "Cole County",
    bachelorsOrHigher: 30.9
  }, {
    fips: 29053,
    state: "MO",
    area_name: "Cooper County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 29055,
    state: "MO",
    area_name: "Crawford County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 29057,
    state: "MO",
    area_name: "Dade County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 29059,
    state: "MO",
    area_name: "Dallas County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 29061,
    state: "MO",
    area_name: "Daviess County",
    bachelorsOrHigher: 15
  }, {
    fips: 29063,
    state: "MO",
    area_name: "DeKalb County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 29065,
    state: "MO",
    area_name: "Dent County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 29067,
    state: "MO",
    area_name: "Douglas County",
    bachelorsOrHigher: 9.7
  }, {
    fips: 29069,
    state: "MO",
    area_name: "Dunklin County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 29071,
    state: "MO",
    area_name: "Franklin County",
    bachelorsOrHigher: 18
  }, {
    fips: 29073,
    state: "MO",
    area_name: "Gasconade County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 29075,
    state: "MO",
    area_name: "Gentry County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 29077,
    state: "MO",
    area_name: "Greene County",
    bachelorsOrHigher: 28.7
  }, {
    fips: 29079,
    state: "MO",
    area_name: "Grundy County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 29081,
    state: "MO",
    area_name: "Harrison County",
    bachelorsOrHigher: 12
  }, {
    fips: 29083,
    state: "MO",
    area_name: "Henry County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 29085,
    state: "MO",
    area_name: "Hickory County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 29087,
    state: "MO",
    area_name: "Holt County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 29089,
    state: "MO",
    area_name: "Howard County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 29091,
    state: "MO",
    area_name: "Howell County",
    bachelorsOrHigher: 15
  }, {
    fips: 29093,
    state: "MO",
    area_name: "Iron County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 29095,
    state: "MO",
    area_name: "Jackson County",
    bachelorsOrHigher: 28
  }, {
    fips: 29097,
    state: "MO",
    area_name: "Jasper County",
    bachelorsOrHigher: 21
  }, {
    fips: 29099,
    state: "MO",
    area_name: "Jefferson County",
    bachelorsOrHigher: 18
  }, {
    fips: 29101,
    state: "MO",
    area_name: "Johnson County",
    bachelorsOrHigher: 26
  }, {
    fips: 29103,
    state: "MO",
    area_name: "Knox County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 29105,
    state: "MO",
    area_name: "Laclede County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 29107,
    state: "MO",
    area_name: "Lafayette County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 29109,
    state: "MO",
    area_name: "Lawrence County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 29111,
    state: "MO",
    area_name: "Lewis County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 29113,
    state: "MO",
    area_name: "Lincoln County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 29115,
    state: "MO",
    area_name: "Linn County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 29117,
    state: "MO",
    area_name: "Livingston County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 29119,
    state: "MO",
    area_name: "McDonald County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 29121,
    state: "MO",
    area_name: "Macon County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 29123,
    state: "MO",
    area_name: "Madison County",
    bachelorsOrHigher: 9.9
  }, {
    fips: 29125,
    state: "MO",
    area_name: "Maries County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 29127,
    state: "MO",
    area_name: "Marion County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 29129,
    state: "MO",
    area_name: "Mercer County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 29131,
    state: "MO",
    area_name: "Miller County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 29133,
    state: "MO",
    area_name: "Mississippi County",
    bachelorsOrHigher: 10.1
  }, {
    fips: 29135,
    state: "MO",
    area_name: "Moniteau County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 29137,
    state: "MO",
    area_name: "Monroe County",
    bachelorsOrHigher: 14
  }, {
    fips: 29139,
    state: "MO",
    area_name: "Montgomery County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 29141,
    state: "MO",
    area_name: "Morgan County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 29143,
    state: "MO",
    area_name: "New Madrid County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 29145,
    state: "MO",
    area_name: "Newton County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 29147,
    state: "MO",
    area_name: "Nodaway County",
    bachelorsOrHigher: 23.4
  }, {
    fips: 29149,
    state: "MO",
    area_name: "Oregon County",
    bachelorsOrHigher: 9.3
  }, {
    fips: 29151,
    state: "MO",
    area_name: "Osage County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 29153,
    state: "MO",
    area_name: "Ozark County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 29155,
    state: "MO",
    area_name: "Pemiscot County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 29157,
    state: "MO",
    area_name: "Perry County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 29159,
    state: "MO",
    area_name: "Pettis County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 29161,
    state: "MO",
    area_name: "Phelps County",
    bachelorsOrHigher: 28.1
  }, {
    fips: 29163,
    state: "MO",
    area_name: "Pike County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 29165,
    state: "MO",
    area_name: "Platte County",
    bachelorsOrHigher: 39.2
  }, {
    fips: 29167,
    state: "MO",
    area_name: "Polk County",
    bachelorsOrHigher: 17
  }, {
    fips: 29169,
    state: "MO",
    area_name: "Pulaski County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 29171,
    state: "MO",
    area_name: "Putnam County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 29173,
    state: "MO",
    area_name: "Ralls County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 29175,
    state: "MO",
    area_name: "Randolph County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 29177,
    state: "MO",
    area_name: "Ray County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 29179,
    state: "MO",
    area_name: "Reynolds County",
    bachelorsOrHigher: 6.2
  }, {
    fips: 29181,
    state: "MO",
    area_name: "Ripley County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 29183,
    state: "MO",
    area_name: "St. Charles County",
    bachelorsOrHigher: 35.5
  }, {
    fips: 29185,
    state: "MO",
    area_name: "St. Clair County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 29186,
    state: "MO",
    area_name: "Ste. Genevieve County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 29187,
    state: "MO",
    area_name: "St. Francois County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 29189,
    state: "MO",
    area_name: "St. Louis County",
    bachelorsOrHigher: 41.4
  }, {
    fips: 29195,
    state: "MO",
    area_name: "Saline County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 29197,
    state: "MO",
    area_name: "Schuyler County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 29199,
    state: "MO",
    area_name: "Scotland County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 29201,
    state: "MO",
    area_name: "Scott County",
    bachelorsOrHigher: 14
  }, {
    fips: 29203,
    state: "MO",
    area_name: "Shannon County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 29205,
    state: "MO",
    area_name: "Shelby County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 29207,
    state: "MO",
    area_name: "Stoddard County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 29209,
    state: "MO",
    area_name: "Stone County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 29211,
    state: "MO",
    area_name: "Sullivan County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 29213,
    state: "MO",
    area_name: "Taney County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 29215,
    state: "MO",
    area_name: "Texas County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 29217,
    state: "MO",
    area_name: "Vernon County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 29219,
    state: "MO",
    area_name: "Warren County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 29221,
    state: "MO",
    area_name: "Washington County",
    bachelorsOrHigher: 7.8
  }, {
    fips: 29223,
    state: "MO",
    area_name: "Wayne County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 29225,
    state: "MO",
    area_name: "Webster County",
    bachelorsOrHigher: 16
  }, {
    fips: 29227,
    state: "MO",
    area_name: "Worth County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 29229,
    state: "MO",
    area_name: "Wright County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 29510,
    state: "MO",
    area_name: "St. Louis city",
    bachelorsOrHigher: 30.4
  }, {
    fips: 30001,
    state: "MT",
    area_name: "Beaverhead County",
    bachelorsOrHigher: 27.2
  }, {
    fips: 30003,
    state: "MT",
    area_name: "Big Horn County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 30005,
    state: "MT",
    area_name: "Blaine County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 30007,
    state: "MT",
    area_name: "Broadwater County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 30009,
    state: "MT",
    area_name: "Carbon County",
    bachelorsOrHigher: 29.1
  }, {
    fips: 30011,
    state: "MT",
    area_name: "Carter County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 30013,
    state: "MT",
    area_name: "Cascade County",
    bachelorsOrHigher: 25.5
  }, {
    fips: 30015,
    state: "MT",
    area_name: "Chouteau County",
    bachelorsOrHigher: 24.4
  }, {
    fips: 30017,
    state: "MT",
    area_name: "Custer County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 30019,
    state: "MT",
    area_name: "Daniels County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 30021,
    state: "MT",
    area_name: "Dawson County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 30023,
    state: "MT",
    area_name: "Deer Lodge County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 30025,
    state: "MT",
    area_name: "Fallon County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 30027,
    state: "MT",
    area_name: "Fergus County",
    bachelorsOrHigher: 27.6
  }, {
    fips: 30029,
    state: "MT",
    area_name: "Flathead County",
    bachelorsOrHigher: 28.1
  }, {
    fips: 30031,
    state: "MT",
    area_name: "Gallatin County",
    bachelorsOrHigher: 46.7
  }, {
    fips: 30033,
    state: "MT",
    area_name: "Garfield County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 30035,
    state: "MT",
    area_name: "Glacier County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 30037,
    state: "MT",
    area_name: "Golden Valley County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 30039,
    state: "MT",
    area_name: "Granite County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 30041,
    state: "MT",
    area_name: "Hill County",
    bachelorsOrHigher: 23.5
  }, {
    fips: 30043,
    state: "MT",
    area_name: "Jefferson County",
    bachelorsOrHigher: 33.5
  }, {
    fips: 30045,
    state: "MT",
    area_name: "Judith Basin County",
    bachelorsOrHigher: 32.1
  }, {
    fips: 30047,
    state: "MT",
    area_name: "Lake County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 30049,
    state: "MT",
    area_name: "Lewis and Clark County",
    bachelorsOrHigher: 37.6
  }, {
    fips: 30051,
    state: "MT",
    area_name: "Liberty County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 30053,
    state: "MT",
    area_name: "Lincoln County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 30055,
    state: "MT",
    area_name: "McCone County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 30057,
    state: "MT",
    area_name: "Madison County",
    bachelorsOrHigher: 29.4
  }, {
    fips: 30059,
    state: "MT",
    area_name: "Meagher County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 30061,
    state: "MT",
    area_name: "Mineral County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 30063,
    state: "MT",
    area_name: "Missoula County",
    bachelorsOrHigher: 40.2
  }, {
    fips: 30065,
    state: "MT",
    area_name: "Musselshell County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 30067,
    state: "MT",
    area_name: "Park County",
    bachelorsOrHigher: 33.4
  }, {
    fips: 30069,
    state: "MT",
    area_name: "Petroleum County",
    bachelorsOrHigher: 18
  }, {
    fips: 30071,
    state: "MT",
    area_name: "Phillips County",
    bachelorsOrHigher: 19.8
  }, {
    fips: 30073,
    state: "MT",
    area_name: "Pondera County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 30075,
    state: "MT",
    area_name: "Powder River County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 30077,
    state: "MT",
    area_name: "Powell County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 30079,
    state: "MT",
    area_name: "Prairie County",
    bachelorsOrHigher: 14
  }, {
    fips: 30081,
    state: "MT",
    area_name: "Ravalli County",
    bachelorsOrHigher: 24.2
  }, {
    fips: 30083,
    state: "MT",
    area_name: "Richland County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 30085,
    state: "MT",
    area_name: "Roosevelt County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 30087,
    state: "MT",
    area_name: "Rosebud County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 30089,
    state: "MT",
    area_name: "Sanders County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 30091,
    state: "MT",
    area_name: "Sheridan County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 30093,
    state: "MT",
    area_name: "Silver Bow County",
    bachelorsOrHigher: 23.5
  }, {
    fips: 30095,
    state: "MT",
    area_name: "Stillwater County",
    bachelorsOrHigher: 23.5
  }, {
    fips: 30097,
    state: "MT",
    area_name: "Sweet Grass County",
    bachelorsOrHigher: 27.8
  }, {
    fips: 30099,
    state: "MT",
    area_name: "Teton County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 30101,
    state: "MT",
    area_name: "Toole County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 30103,
    state: "MT",
    area_name: "Treasure County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 30105,
    state: "MT",
    area_name: "Valley County",
    bachelorsOrHigher: 17
  }, {
    fips: 30107,
    state: "MT",
    area_name: "Wheatland County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 30109,
    state: "MT",
    area_name: "Wibaux County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 30111,
    state: "MT",
    area_name: "Yellowstone County",
    bachelorsOrHigher: 28.7
  }, {
    fips: 31001,
    state: "NE",
    area_name: "Adams County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 31003,
    state: "NE",
    area_name: "Antelope County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 31005,
    state: "NE",
    area_name: "Arthur County",
    bachelorsOrHigher: 31.6
  }, {
    fips: 31007,
    state: "NE",
    area_name: "Banner County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 31009,
    state: "NE",
    area_name: "Blaine County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 31011,
    state: "NE",
    area_name: "Boone County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 31013,
    state: "NE",
    area_name: "Box Butte County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 31015,
    state: "NE",
    area_name: "Boyd County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 31017,
    state: "NE",
    area_name: "Brown County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 31019,
    state: "NE",
    area_name: "Buffalo County",
    bachelorsOrHigher: 32.8
  }, {
    fips: 31021,
    state: "NE",
    area_name: "Burt County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 31023,
    state: "NE",
    area_name: "Butler County",
    bachelorsOrHigher: 14
  }, {
    fips: 31025,
    state: "NE",
    area_name: "Cass County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 31027,
    state: "NE",
    area_name: "Cedar County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 31029,
    state: "NE",
    area_name: "Chase County",
    bachelorsOrHigher: 19
  }, {
    fips: 31031,
    state: "NE",
    area_name: "Cherry County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 31033,
    state: "NE",
    area_name: "Cheyenne County",
    bachelorsOrHigher: 23.8
  }, {
    fips: 31035,
    state: "NE",
    area_name: "Clay County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 31037,
    state: "NE",
    area_name: "Colfax County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 31039,
    state: "NE",
    area_name: "Cuming County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 31041,
    state: "NE",
    area_name: "Custer County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 31043,
    state: "NE",
    area_name: "Dakota County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 31045,
    state: "NE",
    area_name: "Dawes County",
    bachelorsOrHigher: 39.1
  }, {
    fips: 31047,
    state: "NE",
    area_name: "Dawson County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 31049,
    state: "NE",
    area_name: "Deuel County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 31051,
    state: "NE",
    area_name: "Dixon County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 31053,
    state: "NE",
    area_name: "Dodge County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 31055,
    state: "NE",
    area_name: "Douglas County",
    bachelorsOrHigher: 36.6
  }, {
    fips: 31057,
    state: "NE",
    area_name: "Dundy County",
    bachelorsOrHigher: 21.8
  }, {
    fips: 31059,
    state: "NE",
    area_name: "Fillmore County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 31061,
    state: "NE",
    area_name: "Franklin County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 31063,
    state: "NE",
    area_name: "Frontier County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 31065,
    state: "NE",
    area_name: "Furnas County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 31067,
    state: "NE",
    area_name: "Gage County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 31069,
    state: "NE",
    area_name: "Garden County",
    bachelorsOrHigher: 22
  }, {
    fips: 31071,
    state: "NE",
    area_name: "Garfield County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 31073,
    state: "NE",
    area_name: "Gosper County",
    bachelorsOrHigher: 18
  }, {
    fips: 31075,
    state: "NE",
    area_name: "Grant County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 31077,
    state: "NE",
    area_name: "Greeley County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 31079,
    state: "NE",
    area_name: "Hall County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 31081,
    state: "NE",
    area_name: "Hamilton County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 31083,
    state: "NE",
    area_name: "Harlan County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 31085,
    state: "NE",
    area_name: "Hayes County",
    bachelorsOrHigher: 19
  }, {
    fips: 31087,
    state: "NE",
    area_name: "Hitchcock County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 31089,
    state: "NE",
    area_name: "Holt County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 31091,
    state: "NE",
    area_name: "Hooker County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 31093,
    state: "NE",
    area_name: "Howard County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 31095,
    state: "NE",
    area_name: "Jefferson County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 31097,
    state: "NE",
    area_name: "Johnson County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 31099,
    state: "NE",
    area_name: "Kearney County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 31101,
    state: "NE",
    area_name: "Keith County",
    bachelorsOrHigher: 22
  }, {
    fips: 31103,
    state: "NE",
    area_name: "Keya Paha County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 31105,
    state: "NE",
    area_name: "Kimball County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 31107,
    state: "NE",
    area_name: "Knox County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 31109,
    state: "NE",
    area_name: "Lancaster County",
    bachelorsOrHigher: 36.2
  }, {
    fips: 31111,
    state: "NE",
    area_name: "Lincoln County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 31113,
    state: "NE",
    area_name: "Logan County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 31115,
    state: "NE",
    area_name: "Loup County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 31117,
    state: "NE",
    area_name: "McPherson County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 31119,
    state: "NE",
    area_name: "Madison County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 31121,
    state: "NE",
    area_name: "Merrick County",
    bachelorsOrHigher: 16
  }, {
    fips: 31123,
    state: "NE",
    area_name: "Morrill County",
    bachelorsOrHigher: 17
  }, {
    fips: 31125,
    state: "NE",
    area_name: "Nance County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 31127,
    state: "NE",
    area_name: "Nemaha County",
    bachelorsOrHigher: 27.1
  }, {
    fips: 31129,
    state: "NE",
    area_name: "Nuckolls County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 31131,
    state: "NE",
    area_name: "Otoe County",
    bachelorsOrHigher: 22
  }, {
    fips: 31133,
    state: "NE",
    area_name: "Pawnee County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 31135,
    state: "NE",
    area_name: "Perkins County",
    bachelorsOrHigher: 20.7
  }, {
    fips: 31137,
    state: "NE",
    area_name: "Phelps County",
    bachelorsOrHigher: 23.8
  }, {
    fips: 31139,
    state: "NE",
    area_name: "Pierce County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 31141,
    state: "NE",
    area_name: "Platte County",
    bachelorsOrHigher: 20.6
  }, {
    fips: 31143,
    state: "NE",
    area_name: "Polk County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 31145,
    state: "NE",
    area_name: "Red Willow County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 31147,
    state: "NE",
    area_name: "Richardson County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 31149,
    state: "NE",
    area_name: "Rock County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 31151,
    state: "NE",
    area_name: "Saline County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 31153,
    state: "NE",
    area_name: "Sarpy County",
    bachelorsOrHigher: 36.6
  }, {
    fips: 31155,
    state: "NE",
    area_name: "Saunders County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 31157,
    state: "NE",
    area_name: "Scotts Bluff County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 31159,
    state: "NE",
    area_name: "Seward County",
    bachelorsOrHigher: 26.8
  }, {
    fips: 31161,
    state: "NE",
    area_name: "Sheridan County",
    bachelorsOrHigher: 24.1
  }, {
    fips: 31163,
    state: "NE",
    area_name: "Sherman County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 31165,
    state: "NE",
    area_name: "Sioux County",
    bachelorsOrHigher: 25.1
  }, {
    fips: 31167,
    state: "NE",
    area_name: "Stanton County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 31169,
    state: "NE",
    area_name: "Thayer County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 31171,
    state: "NE",
    area_name: "Thomas County",
    bachelorsOrHigher: 24.2
  }, {
    fips: 31173,
    state: "NE",
    area_name: "Thurston County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 31175,
    state: "NE",
    area_name: "Valley County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 31177,
    state: "NE",
    area_name: "Washington County",
    bachelorsOrHigher: 29.8
  }, {
    fips: 31179,
    state: "NE",
    area_name: "Wayne County",
    bachelorsOrHigher: 36.4
  }, {
    fips: 31181,
    state: "NE",
    area_name: "Webster County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 31183,
    state: "NE",
    area_name: "Wheeler County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 31185,
    state: "NE",
    area_name: "York County",
    bachelorsOrHigher: 24.1
  }, {
    fips: 32001,
    state: "NV",
    area_name: "Churchill County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 32003,
    state: "NV",
    area_name: "Clark County",
    bachelorsOrHigher: 22.2
  }, {
    fips: 32005,
    state: "NV",
    area_name: "Douglas County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 32007,
    state: "NV",
    area_name: "Elko County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 32009,
    state: "NV",
    area_name: "Esmeralda County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 32011,
    state: "NV",
    area_name: "Eureka County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 32013,
    state: "NV",
    area_name: "Humboldt County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 32015,
    state: "NV",
    area_name: "Lander County",
    bachelorsOrHigher: 9.8
  }, {
    fips: 32017,
    state: "NV",
    area_name: "Lincoln County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 32019,
    state: "NV",
    area_name: "Lyon County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 32021,
    state: "NV",
    area_name: "Mineral County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 32023,
    state: "NV",
    area_name: "Nye County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 32027,
    state: "NV",
    area_name: "Pershing County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 32029,
    state: "NV",
    area_name: "Storey County",
    bachelorsOrHigher: 20.7
  }, {
    fips: 32031,
    state: "NV",
    area_name: "Washoe County",
    bachelorsOrHigher: 27.9
  }, {
    fips: 32033,
    state: "NV",
    area_name: "White Pine County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 32510,
    state: "NV",
    area_name: "Carson City",
    bachelorsOrHigher: 20.4
  }, {
    fips: 33001,
    state: "NH",
    area_name: "Belknap County",
    bachelorsOrHigher: 29.2
  }, {
    fips: 33003,
    state: "NH",
    area_name: "Carroll County",
    bachelorsOrHigher: 32.2
  }, {
    fips: 33005,
    state: "NH",
    area_name: "Cheshire County",
    bachelorsOrHigher: 30.8
  }, {
    fips: 33007,
    state: "NH",
    area_name: "Coos County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 33009,
    state: "NH",
    area_name: "Grafton County",
    bachelorsOrHigher: 37.5
  }, {
    fips: 33011,
    state: "NH",
    area_name: "Hillsborough County",
    bachelorsOrHigher: 35.5
  }, {
    fips: 33013,
    state: "NH",
    area_name: "Merrimack County",
    bachelorsOrHigher: 33.7
  }, {
    fips: 33015,
    state: "NH",
    area_name: "Rockingham County",
    bachelorsOrHigher: 38
  }, {
    fips: 33017,
    state: "NH",
    area_name: "Strafford County",
    bachelorsOrHigher: 33.2
  }, {
    fips: 33019,
    state: "NH",
    area_name: "Sullivan County",
    bachelorsOrHigher: 27.4
  }, {
    fips: 34001,
    state: "NJ",
    area_name: "Atlantic County",
    bachelorsOrHigher: 24.4
  }, {
    fips: 34003,
    state: "NJ",
    area_name: "Bergen County",
    bachelorsOrHigher: 46.1
  }, {
    fips: 34005,
    state: "NJ",
    area_name: "Burlington County",
    bachelorsOrHigher: 35.3
  }, {
    fips: 34007,
    state: "NJ",
    area_name: "Camden County",
    bachelorsOrHigher: 29.7
  }, {
    fips: 34009,
    state: "NJ",
    area_name: "Cape May County",
    bachelorsOrHigher: 29.2
  }, {
    fips: 34011,
    state: "NJ",
    area_name: "Cumberland County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 34013,
    state: "NJ",
    area_name: "Essex County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 34015,
    state: "NJ",
    area_name: "Gloucester County",
    bachelorsOrHigher: 28.7
  }, {
    fips: 34017,
    state: "NJ",
    area_name: "Hudson County",
    bachelorsOrHigher: 36.8
  }, {
    fips: 34019,
    state: "NJ",
    area_name: "Hunterdon County",
    bachelorsOrHigher: 48.3
  }, {
    fips: 34021,
    state: "NJ",
    area_name: "Mercer County",
    bachelorsOrHigher: 39.8
  }, {
    fips: 34023,
    state: "NJ",
    area_name: "Middlesex County",
    bachelorsOrHigher: 40.7
  }, {
    fips: 34025,
    state: "NJ",
    area_name: "Monmouth County",
    bachelorsOrHigher: 42
  }, {
    fips: 34027,
    state: "NJ",
    area_name: "Morris County",
    bachelorsOrHigher: 50.6
  }, {
    fips: 34029,
    state: "NJ",
    area_name: "Ocean County",
    bachelorsOrHigher: 26.3
  }, {
    fips: 34031,
    state: "NJ",
    area_name: "Passaic County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 34033,
    state: "NJ",
    area_name: "Salem County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 34035,
    state: "NJ",
    area_name: "Somerset County",
    bachelorsOrHigher: 52
  }, {
    fips: 34037,
    state: "NJ",
    area_name: "Sussex County",
    bachelorsOrHigher: 33.1
  }, {
    fips: 34039,
    state: "NJ",
    area_name: "Union County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 34041,
    state: "NJ",
    area_name: "Warren County",
    bachelorsOrHigher: 29.5
  }, {
    fips: 35001,
    state: "NM",
    area_name: "Bernalillo County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 35003,
    state: "NM",
    area_name: "Catron County",
    bachelorsOrHigher: 20.7
  }, {
    fips: 35005,
    state: "NM",
    area_name: "Chaves County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 35006,
    state: "NM",
    area_name: "Cibola County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 35007,
    state: "NM",
    area_name: "Colfax County",
    bachelorsOrHigher: 20.6
  }, {
    fips: 35009,
    state: "NM",
    area_name: "Curry County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 35011,
    state: "NM",
    area_name: "De Baca County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 35013,
    state: "NM",
    area_name: "Dona Ana County",
    bachelorsOrHigher: 27.4
  }, {
    fips: 35015,
    state: "NM",
    area_name: "Eddy County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 35017,
    state: "NM",
    area_name: "Grant County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 35019,
    state: "NM",
    area_name: "Guadalupe County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 35021,
    state: "NM",
    area_name: "Harding County",
    bachelorsOrHigher: 23.9
  }, {
    fips: 35023,
    state: "NM",
    area_name: "Hidalgo County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 35025,
    state: "NM",
    area_name: "Lea County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 35027,
    state: "NM",
    area_name: "Lincoln County",
    bachelorsOrHigher: 26.1
  }, {
    fips: 35028,
    state: "NM",
    area_name: "Los Alamos County",
    bachelorsOrHigher: 64
  }, {
    fips: 35029,
    state: "NM",
    area_name: "Luna County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 35031,
    state: "NM",
    area_name: "McKinley County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 35033,
    state: "NM",
    area_name: "Mora County",
    bachelorsOrHigher: 8
  }, {
    fips: 35035,
    state: "NM",
    area_name: "Otero County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 35037,
    state: "NM",
    area_name: "Quay County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 35039,
    state: "NM",
    area_name: "Rio Arriba County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 35041,
    state: "NM",
    area_name: "Roosevelt County",
    bachelorsOrHigher: 22.8
  }, {
    fips: 35043,
    state: "NM",
    area_name: "Sandoval County",
    bachelorsOrHigher: 28.6
  }, {
    fips: 35045,
    state: "NM",
    area_name: "San Juan County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 35047,
    state: "NM",
    area_name: "San Miguel County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 35049,
    state: "NM",
    area_name: "Santa Fe County",
    bachelorsOrHigher: 39.9
  }, {
    fips: 35051,
    state: "NM",
    area_name: "Sierra County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 35053,
    state: "NM",
    area_name: "Socorro County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 35055,
    state: "NM",
    area_name: "Taos County",
    bachelorsOrHigher: 28.9
  }, {
    fips: 35057,
    state: "NM",
    area_name: "Torrance County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 35059,
    state: "NM",
    area_name: "Union County",
    bachelorsOrHigher: 19
  }, {
    fips: 35061,
    state: "NM",
    area_name: "Valencia County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 36001,
    state: "NY",
    area_name: "Albany County",
    bachelorsOrHigher: 38.7
  }, {
    fips: 36003,
    state: "NY",
    area_name: "Allegany County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 36005,
    state: "NY",
    area_name: "Bronx County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 36007,
    state: "NY",
    area_name: "Broome County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 36009,
    state: "NY",
    area_name: "Cattaraugus County",
    bachelorsOrHigher: 18
  }, {
    fips: 36011,
    state: "NY",
    area_name: "Cayuga County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 36013,
    state: "NY",
    area_name: "Chautauqua County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 36015,
    state: "NY",
    area_name: "Chemung County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 36017,
    state: "NY",
    area_name: "Chenango County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 36019,
    state: "NY",
    area_name: "Clinton County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 36021,
    state: "NY",
    area_name: "Columbia County",
    bachelorsOrHigher: 28.5
  }, {
    fips: 36023,
    state: "NY",
    area_name: "Cortland County",
    bachelorsOrHigher: 22.7
  }, {
    fips: 36025,
    state: "NY",
    area_name: "Delaware County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 36027,
    state: "NY",
    area_name: "Dutchess County",
    bachelorsOrHigher: 33.4
  }, {
    fips: 36029,
    state: "NY",
    area_name: "Erie County",
    bachelorsOrHigher: 31.2
  }, {
    fips: 36031,
    state: "NY",
    area_name: "Essex County",
    bachelorsOrHigher: 23.8
  }, {
    fips: 36033,
    state: "NY",
    area_name: "Franklin County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 36035,
    state: "NY",
    area_name: "Fulton County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 36037,
    state: "NY",
    area_name: "Genesee County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 36039,
    state: "NY",
    area_name: "Greene County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 36041,
    state: "NY",
    area_name: "Hamilton County",
    bachelorsOrHigher: 23.8
  }, {
    fips: 36043,
    state: "NY",
    area_name: "Herkimer County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 36045,
    state: "NY",
    area_name: "Jefferson County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 36047,
    state: "NY",
    area_name: "Kings County",
    bachelorsOrHigher: 31.6
  }, {
    fips: 36049,
    state: "NY",
    area_name: "Lewis County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 36051,
    state: "NY",
    area_name: "Livingston County",
    bachelorsOrHigher: 23.9
  }, {
    fips: 36053,
    state: "NY",
    area_name: "Madison County",
    bachelorsOrHigher: 27.2
  }, {
    fips: 36055,
    state: "NY",
    area_name: "Monroe County",
    bachelorsOrHigher: 35.9
  }, {
    fips: 36057,
    state: "NY",
    area_name: "Montgomery County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 36059,
    state: "NY",
    area_name: "Nassau County",
    bachelorsOrHigher: 42.3
  }, {
    fips: 36061,
    state: "NY",
    area_name: "New York County",
    bachelorsOrHigher: 59.3
  }, {
    fips: 36063,
    state: "NY",
    area_name: "Niagara County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 36065,
    state: "NY",
    area_name: "Oneida County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 36067,
    state: "NY",
    area_name: "Onondaga County",
    bachelorsOrHigher: 33.5
  }, {
    fips: 36069,
    state: "NY",
    area_name: "Ontario County",
    bachelorsOrHigher: 31.6
  }, {
    fips: 36071,
    state: "NY",
    area_name: "Orange County",
    bachelorsOrHigher: 28.6
  }, {
    fips: 36073,
    state: "NY",
    area_name: "Orleans County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 36075,
    state: "NY",
    area_name: "Oswego County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 36077,
    state: "NY",
    area_name: "Otsego County",
    bachelorsOrHigher: 27.2
  }, {
    fips: 36079,
    state: "NY",
    area_name: "Putnam County",
    bachelorsOrHigher: 38.2
  }, {
    fips: 36081,
    state: "NY",
    area_name: "Queens County",
    bachelorsOrHigher: 30.2
  }, {
    fips: 36083,
    state: "NY",
    area_name: "Rensselaer County",
    bachelorsOrHigher: 28.5
  }, {
    fips: 36085,
    state: "NY",
    area_name: "Richmond County",
    bachelorsOrHigher: 30.6
  }, {
    fips: 36087,
    state: "NY",
    area_name: "Rockland County",
    bachelorsOrHigher: 40.7
  }, {
    fips: 36089,
    state: "NY",
    area_name: "St. Lawrence County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 36091,
    state: "NY",
    area_name: "Saratoga County",
    bachelorsOrHigher: 38
  }, {
    fips: 36093,
    state: "NY",
    area_name: "Schenectady County",
    bachelorsOrHigher: 29.8
  }, {
    fips: 36095,
    state: "NY",
    area_name: "Schoharie County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 36097,
    state: "NY",
    area_name: "Schuyler County",
    bachelorsOrHigher: 18
  }, {
    fips: 36099,
    state: "NY",
    area_name: "Seneca County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 36101,
    state: "NY",
    area_name: "Steuben County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 36103,
    state: "NY",
    area_name: "Suffolk County",
    bachelorsOrHigher: 33.5
  }, {
    fips: 36105,
    state: "NY",
    area_name: "Sullivan County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 36107,
    state: "NY",
    area_name: "Tioga County",
    bachelorsOrHigher: 23.8
  }, {
    fips: 36109,
    state: "NY",
    area_name: "Tompkins County",
    bachelorsOrHigher: 50.3
  }, {
    fips: 36111,
    state: "NY",
    area_name: "Ulster County",
    bachelorsOrHigher: 30.1
  }, {
    fips: 36113,
    state: "NY",
    area_name: "Warren County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 36115,
    state: "NY",
    area_name: "Washington County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 36117,
    state: "NY",
    area_name: "Wayne County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 36119,
    state: "NY",
    area_name: "Westchester County",
    bachelorsOrHigher: 46
  }, {
    fips: 36121,
    state: "NY",
    area_name: "Wyoming County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 36123,
    state: "NY",
    area_name: "Yates County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 37001,
    state: "NC",
    area_name: "Alamance County",
    bachelorsOrHigher: 21
  }, {
    fips: 37003,
    state: "NC",
    area_name: "Alexander County",
    bachelorsOrHigher: 13
  }, {
    fips: 37005,
    state: "NC",
    area_name: "Alleghany County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 37007,
    state: "NC",
    area_name: "Anson County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 37009,
    state: "NC",
    area_name: "Ashe County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 37011,
    state: "NC",
    area_name: "Avery County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 37013,
    state: "NC",
    area_name: "Beaufort County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 37015,
    state: "NC",
    area_name: "Bertie County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 37017,
    state: "NC",
    area_name: "Bladen County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 37019,
    state: "NC",
    area_name: "Brunswick County",
    bachelorsOrHigher: 25.4
  }, {
    fips: 37021,
    state: "NC",
    area_name: "Buncombe County",
    bachelorsOrHigher: 35.1
  }, {
    fips: 37023,
    state: "NC",
    area_name: "Burke County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 37025,
    state: "NC",
    area_name: "Cabarrus County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 37027,
    state: "NC",
    area_name: "Caldwell County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 37029,
    state: "NC",
    area_name: "Camden County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 37031,
    state: "NC",
    area_name: "Carteret County",
    bachelorsOrHigher: 24.2
  }, {
    fips: 37033,
    state: "NC",
    area_name: "Caswell County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 37035,
    state: "NC",
    area_name: "Catawba County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 37037,
    state: "NC",
    area_name: "Chatham County",
    bachelorsOrHigher: 36.2
  }, {
    fips: 37039,
    state: "NC",
    area_name: "Cherokee County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 37041,
    state: "NC",
    area_name: "Chowan County",
    bachelorsOrHigher: 20.9
  }, {
    fips: 37043,
    state: "NC",
    area_name: "Clay County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 37045,
    state: "NC",
    area_name: "Cleveland County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 37047,
    state: "NC",
    area_name: "Columbus County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 37049,
    state: "NC",
    area_name: "Craven County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 37051,
    state: "NC",
    area_name: "Cumberland County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 37053,
    state: "NC",
    area_name: "Currituck County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 37055,
    state: "NC",
    area_name: "Dare County",
    bachelorsOrHigher: 29.4
  }, {
    fips: 37057,
    state: "NC",
    area_name: "Davidson County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 37059,
    state: "NC",
    area_name: "Davie County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 37061,
    state: "NC",
    area_name: "Duplin County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 37063,
    state: "NC",
    area_name: "Durham County",
    bachelorsOrHigher: 45.6
  }, {
    fips: 37065,
    state: "NC",
    area_name: "Edgecombe County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 37067,
    state: "NC",
    area_name: "Forsyth County",
    bachelorsOrHigher: 32.1
  }, {
    fips: 37069,
    state: "NC",
    area_name: "Franklin County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 37071,
    state: "NC",
    area_name: "Gaston County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 37073,
    state: "NC",
    area_name: "Gates County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 37075,
    state: "NC",
    area_name: "Graham County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 37077,
    state: "NC",
    area_name: "Granville County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 37079,
    state: "NC",
    area_name: "Greene County",
    bachelorsOrHigher: 9.7
  }, {
    fips: 37081,
    state: "NC",
    area_name: "Guilford County",
    bachelorsOrHigher: 33.7
  }, {
    fips: 37083,
    state: "NC",
    area_name: "Halifax County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 37085,
    state: "NC",
    area_name: "Harnett County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 37087,
    state: "NC",
    area_name: "Haywood County",
    bachelorsOrHigher: 23.8
  }, {
    fips: 37089,
    state: "NC",
    area_name: "Henderson County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 37091,
    state: "NC",
    area_name: "Hertford County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 37093,
    state: "NC",
    area_name: "Hoke County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 37095,
    state: "NC",
    area_name: "Hyde County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 37097,
    state: "NC",
    area_name: "Iredell County",
    bachelorsOrHigher: 25.1
  }, {
    fips: 37099,
    state: "NC",
    area_name: "Jackson County",
    bachelorsOrHigher: 29.3
  }, {
    fips: 37101,
    state: "NC",
    area_name: "Johnston County",
    bachelorsOrHigher: 20
  }, {
    fips: 37103,
    state: "NC",
    area_name: "Jones County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 37105,
    state: "NC",
    area_name: "Lee County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 37107,
    state: "NC",
    area_name: "Lenoir County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 37109,
    state: "NC",
    area_name: "Lincoln County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 37111,
    state: "NC",
    area_name: "McDowell County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 37113,
    state: "NC",
    area_name: "Macon County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 37115,
    state: "NC",
    area_name: "Madison County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 37117,
    state: "NC",
    area_name: "Martin County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 37119,
    state: "NC",
    area_name: "Mecklenburg County",
    bachelorsOrHigher: 41.5
  }, {
    fips: 37121,
    state: "NC",
    area_name: "Mitchell County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 37123,
    state: "NC",
    area_name: "Montgomery County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 37125,
    state: "NC",
    area_name: "Moore County",
    bachelorsOrHigher: 32
  }, {
    fips: 37127,
    state: "NC",
    area_name: "Nash County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 37129,
    state: "NC",
    area_name: "New Hanover County",
    bachelorsOrHigher: 37.2
  }, {
    fips: 37131,
    state: "NC",
    area_name: "Northampton County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 37133,
    state: "NC",
    area_name: "Onslow County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 37135,
    state: "NC",
    area_name: "Orange County",
    bachelorsOrHigher: 56.2
  }, {
    fips: 37137,
    state: "NC",
    area_name: "Pamlico County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 37139,
    state: "NC",
    area_name: "Pasquotank County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 37141,
    state: "NC",
    area_name: "Pender County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 37143,
    state: "NC",
    area_name: "Perquimans County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 37145,
    state: "NC",
    area_name: "Person County",
    bachelorsOrHigher: 14
  }, {
    fips: 37147,
    state: "NC",
    area_name: "Pitt County",
    bachelorsOrHigher: 28.8
  }, {
    fips: 37149,
    state: "NC",
    area_name: "Polk County",
    bachelorsOrHigher: 30
  }, {
    fips: 37151,
    state: "NC",
    area_name: "Randolph County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 37153,
    state: "NC",
    area_name: "Richmond County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 37155,
    state: "NC",
    area_name: "Robeson County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 37157,
    state: "NC",
    area_name: "Rockingham County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 37159,
    state: "NC",
    area_name: "Rowan County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 37161,
    state: "NC",
    area_name: "Rutherford County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 37163,
    state: "NC",
    area_name: "Sampson County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 37165,
    state: "NC",
    area_name: "Scotland County",
    bachelorsOrHigher: 15
  }, {
    fips: 37167,
    state: "NC",
    area_name: "Stanly County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 37169,
    state: "NC",
    area_name: "Stokes County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 37171,
    state: "NC",
    area_name: "Surry County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 37173,
    state: "NC",
    area_name: "Swain County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 37175,
    state: "NC",
    area_name: "Transylvania County",
    bachelorsOrHigher: 29
  }, {
    fips: 37177,
    state: "NC",
    area_name: "Tyrrell County",
    bachelorsOrHigher: 8
  }, {
    fips: 37179,
    state: "NC",
    area_name: "Union County",
    bachelorsOrHigher: 32.3
  }, {
    fips: 37181,
    state: "NC",
    area_name: "Vance County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 37183,
    state: "NC",
    area_name: "Wake County",
    bachelorsOrHigher: 48.3
  }, {
    fips: 37185,
    state: "NC",
    area_name: "Warren County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 37187,
    state: "NC",
    area_name: "Washington County",
    bachelorsOrHigher: 9.5
  }, {
    fips: 37189,
    state: "NC",
    area_name: "Watauga County",
    bachelorsOrHigher: 38
  }, {
    fips: 37191,
    state: "NC",
    area_name: "Wayne County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 37193,
    state: "NC",
    area_name: "Wilkes County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 37195,
    state: "NC",
    area_name: "Wilson County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 37197,
    state: "NC",
    area_name: "Yadkin County",
    bachelorsOrHigher: 13
  }, {
    fips: 37199,
    state: "NC",
    area_name: "Yancey County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 38001,
    state: "ND",
    area_name: "Adams County",
    bachelorsOrHigher: 23.9
  }, {
    fips: 38003,
    state: "ND",
    area_name: "Barnes County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 38005,
    state: "ND",
    area_name: "Benson County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 38007,
    state: "ND",
    area_name: "Billings County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 38009,
    state: "ND",
    area_name: "Bottineau County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 38011,
    state: "ND",
    area_name: "Bowman County",
    bachelorsOrHigher: 20
  }, {
    fips: 38013,
    state: "ND",
    area_name: "Burke County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 38015,
    state: "ND",
    area_name: "Burleigh County",
    bachelorsOrHigher: 33.4
  }, {
    fips: 38017,
    state: "ND",
    area_name: "Cass County",
    bachelorsOrHigher: 37.4
  }, {
    fips: 38019,
    state: "ND",
    area_name: "Cavalier County",
    bachelorsOrHigher: 19
  }, {
    fips: 38021,
    state: "ND",
    area_name: "Dickey County",
    bachelorsOrHigher: 25
  }, {
    fips: 38023,
    state: "ND",
    area_name: "Divide County",
    bachelorsOrHigher: 23.3
  }, {
    fips: 38025,
    state: "ND",
    area_name: "Dunn County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 38027,
    state: "ND",
    area_name: "Eddy County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 38029,
    state: "ND",
    area_name: "Emmons County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 38031,
    state: "ND",
    area_name: "Foster County",
    bachelorsOrHigher: 20
  }, {
    fips: 38033,
    state: "ND",
    area_name: "Golden Valley County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 38035,
    state: "ND",
    area_name: "Grand Forks County",
    bachelorsOrHigher: 32.6
  }, {
    fips: 38037,
    state: "ND",
    area_name: "Grant County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 38039,
    state: "ND",
    area_name: "Griggs County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 38041,
    state: "ND",
    area_name: "Hettinger County",
    bachelorsOrHigher: 16
  }, {
    fips: 38043,
    state: "ND",
    area_name: "Kidder County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 38045,
    state: "ND",
    area_name: "LaMoure County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 38047,
    state: "ND",
    area_name: "Logan County",
    bachelorsOrHigher: 14
  }, {
    fips: 38049,
    state: "ND",
    area_name: "McHenry County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 38051,
    state: "ND",
    area_name: "McIntosh County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 38053,
    state: "ND",
    area_name: "McKenzie County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 38055,
    state: "ND",
    area_name: "McLean County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 38057,
    state: "ND",
    area_name: "Mercer County",
    bachelorsOrHigher: 19.8
  }, {
    fips: 38059,
    state: "ND",
    area_name: "Morton County",
    bachelorsOrHigher: 25.3
  }, {
    fips: 38061,
    state: "ND",
    area_name: "Mountrail County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 38063,
    state: "ND",
    area_name: "Nelson County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 38065,
    state: "ND",
    area_name: "Oliver County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 38067,
    state: "ND",
    area_name: "Pembina County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 38069,
    state: "ND",
    area_name: "Pierce County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 38071,
    state: "ND",
    area_name: "Ramsey County",
    bachelorsOrHigher: 22.8
  }, {
    fips: 38073,
    state: "ND",
    area_name: "Ransom County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 38075,
    state: "ND",
    area_name: "Renville County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 38077,
    state: "ND",
    area_name: "Richland County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 38079,
    state: "ND",
    area_name: "Rolette County",
    bachelorsOrHigher: 20
  }, {
    fips: 38081,
    state: "ND",
    area_name: "Sargent County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 38083,
    state: "ND",
    area_name: "Sheridan County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 38085,
    state: "ND",
    area_name: "Sioux County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 38087,
    state: "ND",
    area_name: "Slope County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 38089,
    state: "ND",
    area_name: "Stark County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 38091,
    state: "ND",
    area_name: "Steele County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 38093,
    state: "ND",
    area_name: "Stutsman County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 38095,
    state: "ND",
    area_name: "Towner County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 38097,
    state: "ND",
    area_name: "Traill County",
    bachelorsOrHigher: 27.9
  }, {
    fips: 38099,
    state: "ND",
    area_name: "Walsh County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 38101,
    state: "ND",
    area_name: "Ward County",
    bachelorsOrHigher: 25.3
  }, {
    fips: 38103,
    state: "ND",
    area_name: "Wells County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 38105,
    state: "ND",
    area_name: "Williams County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 39001,
    state: "OH",
    area_name: "Adams County",
    bachelorsOrHigher: 9.8
  }, {
    fips: 39003,
    state: "OH",
    area_name: "Allen County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 39005,
    state: "OH",
    area_name: "Ashland County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 39007,
    state: "OH",
    area_name: "Ashtabula County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 39009,
    state: "OH",
    area_name: "Athens County",
    bachelorsOrHigher: 28.8
  }, {
    fips: 39011,
    state: "OH",
    area_name: "Auglaize County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 39013,
    state: "OH",
    area_name: "Belmont County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 39015,
    state: "OH",
    area_name: "Brown County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 39017,
    state: "OH",
    area_name: "Butler County",
    bachelorsOrHigher: 28.1
  }, {
    fips: 39019,
    state: "OH",
    area_name: "Carroll County",
    bachelorsOrHigher: 10.6
  }, {
    fips: 39021,
    state: "OH",
    area_name: "Champaign County",
    bachelorsOrHigher: 16
  }, {
    fips: 39023,
    state: "OH",
    area_name: "Clark County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 39025,
    state: "OH",
    area_name: "Clermont County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 39027,
    state: "OH",
    area_name: "Clinton County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 39029,
    state: "OH",
    area_name: "Columbiana County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 39031,
    state: "OH",
    area_name: "Coshocton County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 39033,
    state: "OH",
    area_name: "Crawford County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 39035,
    state: "OH",
    area_name: "Cuyahoga County",
    bachelorsOrHigher: 30.3
  }, {
    fips: 39037,
    state: "OH",
    area_name: "Darke County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 39039,
    state: "OH",
    area_name: "Defiance County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 39041,
    state: "OH",
    area_name: "Delaware County",
    bachelorsOrHigher: 51.1
  }, {
    fips: 39043,
    state: "OH",
    area_name: "Erie County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 39045,
    state: "OH",
    area_name: "Fairfield County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 39047,
    state: "OH",
    area_name: "Fayette County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 39049,
    state: "OH",
    area_name: "Franklin County",
    bachelorsOrHigher: 36.7
  }, {
    fips: 39051,
    state: "OH",
    area_name: "Fulton County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 39053,
    state: "OH",
    area_name: "Gallia County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 39055,
    state: "OH",
    area_name: "Geauga County",
    bachelorsOrHigher: 36
  }, {
    fips: 39057,
    state: "OH",
    area_name: "Greene County",
    bachelorsOrHigher: 36.9
  }, {
    fips: 39059,
    state: "OH",
    area_name: "Guernsey County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 39061,
    state: "OH",
    area_name: "Hamilton County",
    bachelorsOrHigher: 34.3
  }, {
    fips: 39063,
    state: "OH",
    area_name: "Hancock County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 39065,
    state: "OH",
    area_name: "Hardin County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 39067,
    state: "OH",
    area_name: "Harrison County",
    bachelorsOrHigher: 9.5
  }, {
    fips: 39069,
    state: "OH",
    area_name: "Henry County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 39071,
    state: "OH",
    area_name: "Highland County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 39073,
    state: "OH",
    area_name: "Hocking County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 39075,
    state: "OH",
    area_name: "Holmes County",
    bachelorsOrHigher: 7.8
  }, {
    fips: 39077,
    state: "OH",
    area_name: "Huron County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 39079,
    state: "OH",
    area_name: "Jackson County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 39081,
    state: "OH",
    area_name: "Jefferson County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 39083,
    state: "OH",
    area_name: "Knox County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 39085,
    state: "OH",
    area_name: "Lake County",
    bachelorsOrHigher: 26
  }, {
    fips: 39087,
    state: "OH",
    area_name: "Lawrence County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 39089,
    state: "OH",
    area_name: "Licking County",
    bachelorsOrHigher: 22.6
  }, {
    fips: 39091,
    state: "OH",
    area_name: "Logan County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 39093,
    state: "OH",
    area_name: "Lorain County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 39095,
    state: "OH",
    area_name: "Lucas County",
    bachelorsOrHigher: 24.2
  }, {
    fips: 39097,
    state: "OH",
    area_name: "Madison County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 39099,
    state: "OH",
    area_name: "Mahoning County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 39101,
    state: "OH",
    area_name: "Marion County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 39103,
    state: "OH",
    area_name: "Medina County",
    bachelorsOrHigher: 29.9
  }, {
    fips: 39105,
    state: "OH",
    area_name: "Meigs County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 39107,
    state: "OH",
    area_name: "Mercer County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 39109,
    state: "OH",
    area_name: "Miami County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 39111,
    state: "OH",
    area_name: "Monroe County",
    bachelorsOrHigher: 10.3
  }, {
    fips: 39113,
    state: "OH",
    area_name: "Montgomery County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 39115,
    state: "OH",
    area_name: "Morgan County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 39117,
    state: "OH",
    area_name: "Morrow County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 39119,
    state: "OH",
    area_name: "Muskingum County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 39121,
    state: "OH",
    area_name: "Noble County",
    bachelorsOrHigher: 9.5
  }, {
    fips: 39123,
    state: "OH",
    area_name: "Ottawa County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 39125,
    state: "OH",
    area_name: "Paulding County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 39127,
    state: "OH",
    area_name: "Perry County",
    bachelorsOrHigher: 11
  }, {
    fips: 39129,
    state: "OH",
    area_name: "Pickaway County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 39131,
    state: "OH",
    area_name: "Pike County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 39133,
    state: "OH",
    area_name: "Portage County",
    bachelorsOrHigher: 25.5
  }, {
    fips: 39135,
    state: "OH",
    area_name: "Preble County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 39137,
    state: "OH",
    area_name: "Putnam County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 39139,
    state: "OH",
    area_name: "Richland County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 39141,
    state: "OH",
    area_name: "Ross County",
    bachelorsOrHigher: 15
  }, {
    fips: 39143,
    state: "OH",
    area_name: "Sandusky County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 39145,
    state: "OH",
    area_name: "Scioto County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 39147,
    state: "OH",
    area_name: "Seneca County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 39149,
    state: "OH",
    area_name: "Shelby County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 39151,
    state: "OH",
    area_name: "Stark County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 39153,
    state: "OH",
    area_name: "Summit County",
    bachelorsOrHigher: 29.9
  }, {
    fips: 39155,
    state: "OH",
    area_name: "Trumbull County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 39157,
    state: "OH",
    area_name: "Tuscarawas County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 39159,
    state: "OH",
    area_name: "Union County",
    bachelorsOrHigher: 26
  }, {
    fips: 39161,
    state: "OH",
    area_name: "Van Wert County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 39163,
    state: "OH",
    area_name: "Vinton County",
    bachelorsOrHigher: 8.7
  }, {
    fips: 39165,
    state: "OH",
    area_name: "Warren County",
    bachelorsOrHigher: 38.7
  }, {
    fips: 39167,
    state: "OH",
    area_name: "Washington County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 39169,
    state: "OH",
    area_name: "Wayne County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 39171,
    state: "OH",
    area_name: "Williams County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 39173,
    state: "OH",
    area_name: "Wood County",
    bachelorsOrHigher: 30.8
  }, {
    fips: 39175,
    state: "OH",
    area_name: "Wyandot County",
    bachelorsOrHigher: 13
  }, {
    fips: 40001,
    state: "OK",
    area_name: "Adair County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 40003,
    state: "OK",
    area_name: "Alfalfa County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 40005,
    state: "OK",
    area_name: "Atoka County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 40007,
    state: "OK",
    area_name: "Beaver County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 40009,
    state: "OK",
    area_name: "Beckham County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 40011,
    state: "OK",
    area_name: "Blaine County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 40013,
    state: "OK",
    area_name: "Bryan County",
    bachelorsOrHigher: 20.7
  }, {
    fips: 40015,
    state: "OK",
    area_name: "Caddo County",
    bachelorsOrHigher: 15
  }, {
    fips: 40017,
    state: "OK",
    area_name: "Canadian County",
    bachelorsOrHigher: 25.4
  }, {
    fips: 40019,
    state: "OK",
    area_name: "Carter County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 40021,
    state: "OK",
    area_name: "Cherokee County",
    bachelorsOrHigher: 23.9
  }, {
    fips: 40023,
    state: "OK",
    area_name: "Choctaw County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 40025,
    state: "OK",
    area_name: "Cimarron County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 40027,
    state: "OK",
    area_name: "Cleveland County",
    bachelorsOrHigher: 31
  }, {
    fips: 40029,
    state: "OK",
    area_name: "Coal County",
    bachelorsOrHigher: 13
  }, {
    fips: 40031,
    state: "OK",
    area_name: "Comanche County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 40033,
    state: "OK",
    area_name: "Cotton County",
    bachelorsOrHigher: 16
  }, {
    fips: 40035,
    state: "OK",
    area_name: "Craig County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 40037,
    state: "OK",
    area_name: "Creek County",
    bachelorsOrHigher: 15
  }, {
    fips: 40039,
    state: "OK",
    area_name: "Custer County",
    bachelorsOrHigher: 27.3
  }, {
    fips: 40041,
    state: "OK",
    area_name: "Delaware County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 40043,
    state: "OK",
    area_name: "Dewey County",
    bachelorsOrHigher: 22.6
  }, {
    fips: 40045,
    state: "OK",
    area_name: "Ellis County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 40047,
    state: "OK",
    area_name: "Garfield County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 40049,
    state: "OK",
    area_name: "Garvin County",
    bachelorsOrHigher: 15
  }, {
    fips: 40051,
    state: "OK",
    area_name: "Grady County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 40053,
    state: "OK",
    area_name: "Grant County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 40055,
    state: "OK",
    area_name: "Greer County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 40057,
    state: "OK",
    area_name: "Harmon County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 40059,
    state: "OK",
    area_name: "Harper County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 40061,
    state: "OK",
    area_name: "Haskell County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 40063,
    state: "OK",
    area_name: "Hughes County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 40065,
    state: "OK",
    area_name: "Jackson County",
    bachelorsOrHigher: 19.8
  }, {
    fips: 40067,
    state: "OK",
    area_name: "Jefferson County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 40069,
    state: "OK",
    area_name: "Johnston County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 40071,
    state: "OK",
    area_name: "Kay County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 40073,
    state: "OK",
    area_name: "Kingfisher County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 40075,
    state: "OK",
    area_name: "Kiowa County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 40077,
    state: "OK",
    area_name: "Latimer County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 40079,
    state: "OK",
    area_name: "Le Flore County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 40081,
    state: "OK",
    area_name: "Lincoln County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 40083,
    state: "OK",
    area_name: "Logan County",
    bachelorsOrHigher: 26.5
  }, {
    fips: 40085,
    state: "OK",
    area_name: "Love County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 40087,
    state: "OK",
    area_name: "McClain County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 40089,
    state: "OK",
    area_name: "McCurtain County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 40091,
    state: "OK",
    area_name: "McIntosh County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 40093,
    state: "OK",
    area_name: "Major County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 40095,
    state: "OK",
    area_name: "Marshall County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 40097,
    state: "OK",
    area_name: "Mayes County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 40099,
    state: "OK",
    area_name: "Murray County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 40101,
    state: "OK",
    area_name: "Muskogee County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 40103,
    state: "OK",
    area_name: "Noble County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 40105,
    state: "OK",
    area_name: "Nowata County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 40107,
    state: "OK",
    area_name: "Okfuskee County",
    bachelorsOrHigher: 10.5
  }, {
    fips: 40109,
    state: "OK",
    area_name: "Oklahoma County",
    bachelorsOrHigher: 30.2
  }, {
    fips: 40111,
    state: "OK",
    area_name: "Okmulgee County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 40113,
    state: "OK",
    area_name: "Osage County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 40115,
    state: "OK",
    area_name: "Ottawa County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 40117,
    state: "OK",
    area_name: "Pawnee County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 40119,
    state: "OK",
    area_name: "Payne County",
    bachelorsOrHigher: 36.4
  }, {
    fips: 40121,
    state: "OK",
    area_name: "Pittsburg County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 40123,
    state: "OK",
    area_name: "Pontotoc County",
    bachelorsOrHigher: 27.1
  }, {
    fips: 40125,
    state: "OK",
    area_name: "Pottawatomie County",
    bachelorsOrHigher: 18
  }, {
    fips: 40127,
    state: "OK",
    area_name: "Pushmataha County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 40129,
    state: "OK",
    area_name: "Roger Mills County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 40131,
    state: "OK",
    area_name: "Rogers County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 40133,
    state: "OK",
    area_name: "Seminole County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 40135,
    state: "OK",
    area_name: "Sequoyah County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 40137,
    state: "OK",
    area_name: "Stephens County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 40139,
    state: "OK",
    area_name: "Texas County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 40141,
    state: "OK",
    area_name: "Tillman County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 40143,
    state: "OK",
    area_name: "Tulsa County",
    bachelorsOrHigher: 30
  }, {
    fips: 40145,
    state: "OK",
    area_name: "Wagoner County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 40147,
    state: "OK",
    area_name: "Washington County",
    bachelorsOrHigher: 26.1
  }, {
    fips: 40149,
    state: "OK",
    area_name: "Washita County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 40151,
    state: "OK",
    area_name: "Woods County",
    bachelorsOrHigher: 25.7
  }, {
    fips: 40153,
    state: "OK",
    area_name: "Woodward County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 41001,
    state: "OR",
    area_name: "Baker County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 41003,
    state: "OR",
    area_name: "Benton County",
    bachelorsOrHigher: 51.4
  }, {
    fips: 41005,
    state: "OR",
    area_name: "Clackamas County",
    bachelorsOrHigher: 32
  }, {
    fips: 41007,
    state: "OR",
    area_name: "Clatsop County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 41009,
    state: "OR",
    area_name: "Columbia County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 41011,
    state: "OR",
    area_name: "Coos County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 41013,
    state: "OR",
    area_name: "Crook County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 41015,
    state: "OR",
    area_name: "Curry County",
    bachelorsOrHigher: 22.2
  }, {
    fips: 41017,
    state: "OR",
    area_name: "Deschutes County",
    bachelorsOrHigher: 31.3
  }, {
    fips: 41019,
    state: "OR",
    area_name: "Douglas County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 41021,
    state: "OR",
    area_name: "Gilliam County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 41023,
    state: "OR",
    area_name: "Grant County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 41025,
    state: "OR",
    area_name: "Harney County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 41027,
    state: "OR",
    area_name: "Hood River County",
    bachelorsOrHigher: 32
  }, {
    fips: 41029,
    state: "OR",
    area_name: "Jackson County",
    bachelorsOrHigher: 25.1
  }, {
    fips: 41031,
    state: "OR",
    area_name: "Jefferson County",
    bachelorsOrHigher: 16
  }, {
    fips: 41033,
    state: "OR",
    area_name: "Josephine County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 41035,
    state: "OR",
    area_name: "Klamath County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 41037,
    state: "OR",
    area_name: "Lake County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 41039,
    state: "OR",
    area_name: "Lane County",
    bachelorsOrHigher: 28.2
  }, {
    fips: 41041,
    state: "OR",
    area_name: "Lincoln County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 41043,
    state: "OR",
    area_name: "Linn County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 41045,
    state: "OR",
    area_name: "Malheur County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 41047,
    state: "OR",
    area_name: "Marion County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 41049,
    state: "OR",
    area_name: "Morrow County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 41051,
    state: "OR",
    area_name: "Multnomah County",
    bachelorsOrHigher: 40.3
  }, {
    fips: 41053,
    state: "OR",
    area_name: "Polk County",
    bachelorsOrHigher: 28.9
  }, {
    fips: 41055,
    state: "OR",
    area_name: "Sherman County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 41057,
    state: "OR",
    area_name: "Tillamook County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 41059,
    state: "OR",
    area_name: "Umatilla County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 41061,
    state: "OR",
    area_name: "Union County",
    bachelorsOrHigher: 22.7
  }, {
    fips: 41063,
    state: "OR",
    area_name: "Wallowa County",
    bachelorsOrHigher: 25.1
  }, {
    fips: 41065,
    state: "OR",
    area_name: "Wasco County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 41067,
    state: "OR",
    area_name: "Washington County",
    bachelorsOrHigher: 39.7
  }, {
    fips: 41069,
    state: "OR",
    area_name: "Wheeler County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 41071,
    state: "OR",
    area_name: "Yamhill County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 42001,
    state: "PA",
    area_name: "Adams County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 42003,
    state: "PA",
    area_name: "Allegheny County",
    bachelorsOrHigher: 36.9
  }, {
    fips: 42005,
    state: "PA",
    area_name: "Armstrong County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 42007,
    state: "PA",
    area_name: "Beaver County",
    bachelorsOrHigher: 22.6
  }, {
    fips: 42009,
    state: "PA",
    area_name: "Bedford County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 42011,
    state: "PA",
    area_name: "Berks County",
    bachelorsOrHigher: 22.7
  }, {
    fips: 42013,
    state: "PA",
    area_name: "Blair County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 42015,
    state: "PA",
    area_name: "Bradford County",
    bachelorsOrHigher: 17
  }, {
    fips: 42017,
    state: "PA",
    area_name: "Bucks County",
    bachelorsOrHigher: 36.5
  }, {
    fips: 42019,
    state: "PA",
    area_name: "Butler County",
    bachelorsOrHigher: 31.7
  }, {
    fips: 42021,
    state: "PA",
    area_name: "Cambria County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 42023,
    state: "PA",
    area_name: "Cameron County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 42025,
    state: "PA",
    area_name: "Carbon County",
    bachelorsOrHigher: 15
  }, {
    fips: 42027,
    state: "PA",
    area_name: "Centre County",
    bachelorsOrHigher: 40.4
  }, {
    fips: 42029,
    state: "PA",
    area_name: "Chester County",
    bachelorsOrHigher: 48.8
  }, {
    fips: 42031,
    state: "PA",
    area_name: "Clarion County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 42033,
    state: "PA",
    area_name: "Clearfield County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 42035,
    state: "PA",
    area_name: "Clinton County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 42037,
    state: "PA",
    area_name: "Columbia County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 42039,
    state: "PA",
    area_name: "Crawford County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 42041,
    state: "PA",
    area_name: "Cumberland County",
    bachelorsOrHigher: 32.8
  }, {
    fips: 42043,
    state: "PA",
    area_name: "Dauphin County",
    bachelorsOrHigher: 28.2
  }, {
    fips: 42045,
    state: "PA",
    area_name: "Delaware County",
    bachelorsOrHigher: 35.5
  }, {
    fips: 42047,
    state: "PA",
    area_name: "Elk County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 42049,
    state: "PA",
    area_name: "Erie County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 42051,
    state: "PA",
    area_name: "Fayette County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 42053,
    state: "PA",
    area_name: "Forest County",
    bachelorsOrHigher: 9.2
  }, {
    fips: 42055,
    state: "PA",
    area_name: "Franklin County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 42057,
    state: "PA",
    area_name: "Fulton County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 42059,
    state: "PA",
    area_name: "Greene County",
    bachelorsOrHigher: 17
  }, {
    fips: 42061,
    state: "PA",
    area_name: "Huntingdon County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 42063,
    state: "PA",
    area_name: "Indiana County",
    bachelorsOrHigher: 23.3
  }, {
    fips: 42065,
    state: "PA",
    area_name: "Jefferson County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 42067,
    state: "PA",
    area_name: "Juniata County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 42069,
    state: "PA",
    area_name: "Lackawanna County",
    bachelorsOrHigher: 25.7
  }, {
    fips: 42071,
    state: "PA",
    area_name: "Lancaster County",
    bachelorsOrHigher: 24.7
  }, {
    fips: 42073,
    state: "PA",
    area_name: "Lawrence County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 42075,
    state: "PA",
    area_name: "Lebanon County",
    bachelorsOrHigher: 19.8
  }, {
    fips: 42077,
    state: "PA",
    area_name: "Lehigh County",
    bachelorsOrHigher: 28.1
  }, {
    fips: 42079,
    state: "PA",
    area_name: "Luzerne County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 42081,
    state: "PA",
    area_name: "Lycoming County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 42083,
    state: "PA",
    area_name: "McKean County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 42085,
    state: "PA",
    area_name: "Mercer County",
    bachelorsOrHigher: 20.6
  }, {
    fips: 42087,
    state: "PA",
    area_name: "Mifflin County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 42089,
    state: "PA",
    area_name: "Monroe County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 42091,
    state: "PA",
    area_name: "Montgomery County",
    bachelorsOrHigher: 46.2
  }, {
    fips: 42093,
    state: "PA",
    area_name: "Montour County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 42095,
    state: "PA",
    area_name: "Northampton County",
    bachelorsOrHigher: 27.2
  }, {
    fips: 42097,
    state: "PA",
    area_name: "Northumberland County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 42099,
    state: "PA",
    area_name: "Perry County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 42101,
    state: "PA",
    area_name: "Philadelphia County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 42103,
    state: "PA",
    area_name: "Pike County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 42105,
    state: "PA",
    area_name: "Potter County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 42107,
    state: "PA",
    area_name: "Schuylkill County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 42109,
    state: "PA",
    area_name: "Snyder County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 42111,
    state: "PA",
    area_name: "Somerset County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 42113,
    state: "PA",
    area_name: "Sullivan County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 42115,
    state: "PA",
    area_name: "Susquehanna County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 42117,
    state: "PA",
    area_name: "Tioga County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 42119,
    state: "PA",
    area_name: "Union County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 42121,
    state: "PA",
    area_name: "Venango County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 42123,
    state: "PA",
    area_name: "Warren County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 42125,
    state: "PA",
    area_name: "Washington County",
    bachelorsOrHigher: 26.6
  }, {
    fips: 42127,
    state: "PA",
    area_name: "Wayne County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 42129,
    state: "PA",
    area_name: "Westmoreland County",
    bachelorsOrHigher: 26.2
  }, {
    fips: 42131,
    state: "PA",
    area_name: "Wyoming County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 42133,
    state: "PA",
    area_name: "York County",
    bachelorsOrHigher: 22.5
  }, {
    fips: 44001,
    state: "RI",
    area_name: "Bristol County",
    bachelorsOrHigher: 43.5
  }, {
    fips: 44003,
    state: "RI",
    area_name: "Kent County",
    bachelorsOrHigher: 30.1
  }, {
    fips: 44005,
    state: "RI",
    area_name: "Newport County",
    bachelorsOrHigher: 44.9
  }, {
    fips: 44007,
    state: "RI",
    area_name: "Providence County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 44009,
    state: "RI",
    area_name: "Washington County",
    bachelorsOrHigher: 43.8
  }, {
    fips: 45001,
    state: "SC",
    area_name: "Abbeville County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 45003,
    state: "SC",
    area_name: "Aiken County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 45005,
    state: "SC",
    area_name: "Allendale County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 45007,
    state: "SC",
    area_name: "Anderson County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 45009,
    state: "SC",
    area_name: "Bamberg County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 45011,
    state: "SC",
    area_name: "Barnwell County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 45013,
    state: "SC",
    area_name: "Beaufort County",
    bachelorsOrHigher: 37.4
  }, {
    fips: 45015,
    state: "SC",
    area_name: "Berkeley County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 45017,
    state: "SC",
    area_name: "Calhoun County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 45019,
    state: "SC",
    area_name: "Charleston County",
    bachelorsOrHigher: 40
  }, {
    fips: 45021,
    state: "SC",
    area_name: "Cherokee County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 45023,
    state: "SC",
    area_name: "Chester County",
    bachelorsOrHigher: 13
  }, {
    fips: 45025,
    state: "SC",
    area_name: "Chesterfield County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 45027,
    state: "SC",
    area_name: "Clarendon County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 45029,
    state: "SC",
    area_name: "Colleton County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 45031,
    state: "SC",
    area_name: "Darlington County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 45033,
    state: "SC",
    area_name: "Dillon County",
    bachelorsOrHigher: 8.3
  }, {
    fips: 45035,
    state: "SC",
    area_name: "Dorchester County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 45037,
    state: "SC",
    area_name: "Edgefield County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 45039,
    state: "SC",
    area_name: "Fairfield County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 45041,
    state: "SC",
    area_name: "Florence County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 45043,
    state: "SC",
    area_name: "Georgetown County",
    bachelorsOrHigher: 23.8
  }, {
    fips: 45045,
    state: "SC",
    area_name: "Greenville County",
    bachelorsOrHigher: 31.6
  }, {
    fips: 45047,
    state: "SC",
    area_name: "Greenwood County",
    bachelorsOrHigher: 23
  }, {
    fips: 45049,
    state: "SC",
    area_name: "Hampton County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 45051,
    state: "SC",
    area_name: "Horry County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 45053,
    state: "SC",
    area_name: "Jasper County",
    bachelorsOrHigher: 13
  }, {
    fips: 45055,
    state: "SC",
    area_name: "Kershaw County",
    bachelorsOrHigher: 20
  }, {
    fips: 45057,
    state: "SC",
    area_name: "Lancaster County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 45059,
    state: "SC",
    area_name: "Laurens County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 45061,
    state: "SC",
    area_name: "Lee County",
    bachelorsOrHigher: 9.7
  }, {
    fips: 45063,
    state: "SC",
    area_name: "Lexington County",
    bachelorsOrHigher: 28.7
  }, {
    fips: 45065,
    state: "SC",
    area_name: "McCormick County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 45067,
    state: "SC",
    area_name: "Marion County",
    bachelorsOrHigher: 15
  }, {
    fips: 45069,
    state: "SC",
    area_name: "Marlboro County",
    bachelorsOrHigher: 9
  }, {
    fips: 45071,
    state: "SC",
    area_name: "Newberry County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 45073,
    state: "SC",
    area_name: "Oconee County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 45075,
    state: "SC",
    area_name: "Orangeburg County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 45077,
    state: "SC",
    area_name: "Pickens County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 45079,
    state: "SC",
    area_name: "Richland County",
    bachelorsOrHigher: 36.2
  }, {
    fips: 45081,
    state: "SC",
    area_name: "Saluda County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 45083,
    state: "SC",
    area_name: "Spartanburg County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 45085,
    state: "SC",
    area_name: "Sumter County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 45087,
    state: "SC",
    area_name: "Union County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 45089,
    state: "SC",
    area_name: "Williamsburg County",
    bachelorsOrHigher: 12
  }, {
    fips: 45091,
    state: "SC",
    area_name: "York County",
    bachelorsOrHigher: 28.6
  }, {
    fips: 46003,
    state: "SD",
    area_name: "Aurora County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 46005,
    state: "SD",
    area_name: "Beadle County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 46007,
    state: "SD",
    area_name: "Bennett County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 46009,
    state: "SD",
    area_name: "Bon Homme County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 46011,
    state: "SD",
    area_name: "Brookings County",
    bachelorsOrHigher: 41.4
  }, {
    fips: 46013,
    state: "SD",
    area_name: "Brown County",
    bachelorsOrHigher: 26.9
  }, {
    fips: 46015,
    state: "SD",
    area_name: "Brule County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 46017,
    state: "SD",
    area_name: "Buffalo County",
    bachelorsOrHigher: 8.6
  }, {
    fips: 46019,
    state: "SD",
    area_name: "Butte County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 46021,
    state: "SD",
    area_name: "Campbell County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 46023,
    state: "SD",
    area_name: "Charles Mix County",
    bachelorsOrHigher: 18
  }, {
    fips: 46025,
    state: "SD",
    area_name: "Clark County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 46027,
    state: "SD",
    area_name: "Clay County",
    bachelorsOrHigher: 43.1
  }, {
    fips: 46029,
    state: "SD",
    area_name: "Codington County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 46031,
    state: "SD",
    area_name: "Corson County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 46033,
    state: "SD",
    area_name: "Custer County",
    bachelorsOrHigher: 27.4
  }, {
    fips: 46035,
    state: "SD",
    area_name: "Davison County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 46037,
    state: "SD",
    area_name: "Day County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 46039,
    state: "SD",
    area_name: "Deuel County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 46041,
    state: "SD",
    area_name: "Dewey County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 46043,
    state: "SD",
    area_name: "Douglas County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 46045,
    state: "SD",
    area_name: "Edmunds County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 46047,
    state: "SD",
    area_name: "Fall River County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 46049,
    state: "SD",
    area_name: "Faulk County",
    bachelorsOrHigher: 20.6
  }, {
    fips: 46051,
    state: "SD",
    area_name: "Grant County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 46053,
    state: "SD",
    area_name: "Gregory County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 46055,
    state: "SD",
    area_name: "Haakon County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 46057,
    state: "SD",
    area_name: "Hamlin County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 46059,
    state: "SD",
    area_name: "Hand County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 46061,
    state: "SD",
    area_name: "Hanson County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 46063,
    state: "SD",
    area_name: "Harding County",
    bachelorsOrHigher: 30.5
  }, {
    fips: 46065,
    state: "SD",
    area_name: "Hughes County",
    bachelorsOrHigher: 32.1
  }, {
    fips: 46067,
    state: "SD",
    area_name: "Hutchinson County",
    bachelorsOrHigher: 26.1
  }, {
    fips: 46069,
    state: "SD",
    area_name: "Hyde County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 46071,
    state: "SD",
    area_name: "Jackson County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 46073,
    state: "SD",
    area_name: "Jerauld County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 46075,
    state: "SD",
    area_name: "Jones County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 46077,
    state: "SD",
    area_name: "Kingsbury County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 46079,
    state: "SD",
    area_name: "Lake County",
    bachelorsOrHigher: 28.4
  }, {
    fips: 46081,
    state: "SD",
    area_name: "Lawrence County",
    bachelorsOrHigher: 29.5
  }, {
    fips: 46083,
    state: "SD",
    area_name: "Lincoln County",
    bachelorsOrHigher: 41
  }, {
    fips: 46085,
    state: "SD",
    area_name: "Lyman County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 46087,
    state: "SD",
    area_name: "McCook County",
    bachelorsOrHigher: 22.6
  }, {
    fips: 46089,
    state: "SD",
    area_name: "McPherson County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 46091,
    state: "SD",
    area_name: "Marshall County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 46093,
    state: "SD",
    area_name: "Meade County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 46095,
    state: "SD",
    area_name: "Mellette County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 46097,
    state: "SD",
    area_name: "Miner County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 46099,
    state: "SD",
    area_name: "Minnehaha County",
    bachelorsOrHigher: 29.3
  }, {
    fips: 46101,
    state: "SD",
    area_name: "Moody County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 46103,
    state: "SD",
    area_name: "Pennington County",
    bachelorsOrHigher: 27.9
  }, {
    fips: 46105,
    state: "SD",
    area_name: "Perkins County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 46107,
    state: "SD",
    area_name: "Potter County",
    bachelorsOrHigher: 20
  }, {
    fips: 46109,
    state: "SD",
    area_name: "Roberts County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 46111,
    state: "SD",
    area_name: "Sanborn County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 46102,
    state: "SD",
    area_name: "Oglala Lakota County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 46115,
    state: "SD",
    area_name: "Spink County",
    bachelorsOrHigher: 22
  }, {
    fips: 46117,
    state: "SD",
    area_name: "Stanley County",
    bachelorsOrHigher: 26.8
  }, {
    fips: 46119,
    state: "SD",
    area_name: "Sully County",
    bachelorsOrHigher: 26.3
  }, {
    fips: 46121,
    state: "SD",
    area_name: "Todd County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 46123,
    state: "SD",
    area_name: "Tripp County",
    bachelorsOrHigher: 21.8
  }, {
    fips: 46125,
    state: "SD",
    area_name: "Turner County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 46127,
    state: "SD",
    area_name: "Union County",
    bachelorsOrHigher: 32.7
  }, {
    fips: 46129,
    state: "SD",
    area_name: "Walworth County",
    bachelorsOrHigher: 22.5
  }, {
    fips: 46135,
    state: "SD",
    area_name: "Yankton County",
    bachelorsOrHigher: 26.7
  }, {
    fips: 46137,
    state: "SD",
    area_name: "Ziebach County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 47001,
    state: "TN",
    area_name: "Anderson County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 47003,
    state: "TN",
    area_name: "Bedford County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 47005,
    state: "TN",
    area_name: "Benton County",
    bachelorsOrHigher: 10
  }, {
    fips: 47007,
    state: "TN",
    area_name: "Bledsoe County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 47009,
    state: "TN",
    area_name: "Blount County",
    bachelorsOrHigher: 21.7
  }, {
    fips: 47011,
    state: "TN",
    area_name: "Bradley County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 47013,
    state: "TN",
    area_name: "Campbell County",
    bachelorsOrHigher: 9.5
  }, {
    fips: 47015,
    state: "TN",
    area_name: "Cannon County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 47017,
    state: "TN",
    area_name: "Carroll County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 47019,
    state: "TN",
    area_name: "Carter County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 47021,
    state: "TN",
    area_name: "Cheatham County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 47023,
    state: "TN",
    area_name: "Chester County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 47025,
    state: "TN",
    area_name: "Claiborne County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 47027,
    state: "TN",
    area_name: "Clay County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 47029,
    state: "TN",
    area_name: "Cocke County",
    bachelorsOrHigher: 9.4
  }, {
    fips: 47031,
    state: "TN",
    area_name: "Coffee County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 47033,
    state: "TN",
    area_name: "Crockett County",
    bachelorsOrHigher: 12
  }, {
    fips: 47035,
    state: "TN",
    area_name: "Cumberland County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 47037,
    state: "TN",
    area_name: "Davidson County",
    bachelorsOrHigher: 36.5
  }, {
    fips: 47039,
    state: "TN",
    area_name: "Decatur County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 47041,
    state: "TN",
    area_name: "DeKalb County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 47043,
    state: "TN",
    area_name: "Dickson County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 47045,
    state: "TN",
    area_name: "Dyer County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 47047,
    state: "TN",
    area_name: "Fayette County",
    bachelorsOrHigher: 22.7
  }, {
    fips: 47049,
    state: "TN",
    area_name: "Fentress County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 47051,
    state: "TN",
    area_name: "Franklin County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 47053,
    state: "TN",
    area_name: "Gibson County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 47055,
    state: "TN",
    area_name: "Giles County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 47057,
    state: "TN",
    area_name: "Grainger County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 47059,
    state: "TN",
    area_name: "Greene County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 47061,
    state: "TN",
    area_name: "Grundy County",
    bachelorsOrHigher: 9.7
  }, {
    fips: 47063,
    state: "TN",
    area_name: "Hamblen County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 47065,
    state: "TN",
    area_name: "Hamilton County",
    bachelorsOrHigher: 28.1
  }, {
    fips: 47067,
    state: "TN",
    area_name: "Hancock County",
    bachelorsOrHigher: 10.1
  }, {
    fips: 47069,
    state: "TN",
    area_name: "Hardeman County",
    bachelorsOrHigher: 9.2
  }, {
    fips: 47071,
    state: "TN",
    area_name: "Hardin County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 47073,
    state: "TN",
    area_name: "Hawkins County",
    bachelorsOrHigher: 13
  }, {
    fips: 47075,
    state: "TN",
    area_name: "Haywood County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 47077,
    state: "TN",
    area_name: "Henderson County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 47079,
    state: "TN",
    area_name: "Henry County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 47081,
    state: "TN",
    area_name: "Hickman County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 47083,
    state: "TN",
    area_name: "Houston County",
    bachelorsOrHigher: 11
  }, {
    fips: 47085,
    state: "TN",
    area_name: "Humphreys County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 47087,
    state: "TN",
    area_name: "Jackson County",
    bachelorsOrHigher: 9.5
  }, {
    fips: 47089,
    state: "TN",
    area_name: "Jefferson County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 47091,
    state: "TN",
    area_name: "Johnson County",
    bachelorsOrHigher: 9.3
  }, {
    fips: 47093,
    state: "TN",
    area_name: "Knox County",
    bachelorsOrHigher: 34.5
  }, {
    fips: 47095,
    state: "TN",
    area_name: "Lake County",
    bachelorsOrHigher: 8.2
  }, {
    fips: 47097,
    state: "TN",
    area_name: "Lauderdale County",
    bachelorsOrHigher: 10.1
  }, {
    fips: 47099,
    state: "TN",
    area_name: "Lawrence County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 47101,
    state: "TN",
    area_name: "Lewis County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 47103,
    state: "TN",
    area_name: "Lincoln County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 47105,
    state: "TN",
    area_name: "Loudon County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 47107,
    state: "TN",
    area_name: "McMinn County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 47109,
    state: "TN",
    area_name: "McNairy County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 47111,
    state: "TN",
    area_name: "Macon County",
    bachelorsOrHigher: 9
  }, {
    fips: 47113,
    state: "TN",
    area_name: "Madison County",
    bachelorsOrHigher: 25.1
  }, {
    fips: 47115,
    state: "TN",
    area_name: "Marion County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 47117,
    state: "TN",
    area_name: "Marshall County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 47119,
    state: "TN",
    area_name: "Maury County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 47121,
    state: "TN",
    area_name: "Meigs County",
    bachelorsOrHigher: 7.8
  }, {
    fips: 47123,
    state: "TN",
    area_name: "Monroe County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 47125,
    state: "TN",
    area_name: "Montgomery County",
    bachelorsOrHigher: 24
  }, {
    fips: 47127,
    state: "TN",
    area_name: "Moore County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 47129,
    state: "TN",
    area_name: "Morgan County",
    bachelorsOrHigher: 7.3
  }, {
    fips: 47131,
    state: "TN",
    area_name: "Obion County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 47133,
    state: "TN",
    area_name: "Overton County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 47135,
    state: "TN",
    area_name: "Perry County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 47137,
    state: "TN",
    area_name: "Pickett County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 47139,
    state: "TN",
    area_name: "Polk County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 47141,
    state: "TN",
    area_name: "Putnam County",
    bachelorsOrHigher: 22.8
  }, {
    fips: 47143,
    state: "TN",
    area_name: "Rhea County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 47145,
    state: "TN",
    area_name: "Roane County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 47147,
    state: "TN",
    area_name: "Robertson County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 47149,
    state: "TN",
    area_name: "Rutherford County",
    bachelorsOrHigher: 28.9
  }, {
    fips: 47151,
    state: "TN",
    area_name: "Scott County",
    bachelorsOrHigher: 10.5
  }, {
    fips: 47153,
    state: "TN",
    area_name: "Sequatchie County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 47155,
    state: "TN",
    area_name: "Sevier County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 47157,
    state: "TN",
    area_name: "Shelby County",
    bachelorsOrHigher: 29.8
  }, {
    fips: 47159,
    state: "TN",
    area_name: "Smith County",
    bachelorsOrHigher: 11
  }, {
    fips: 47161,
    state: "TN",
    area_name: "Stewart County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 47163,
    state: "TN",
    area_name: "Sullivan County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 47165,
    state: "TN",
    area_name: "Sumner County",
    bachelorsOrHigher: 24
  }, {
    fips: 47167,
    state: "TN",
    area_name: "Tipton County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 47169,
    state: "TN",
    area_name: "Trousdale County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 47171,
    state: "TN",
    area_name: "Unicoi County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 47173,
    state: "TN",
    area_name: "Union County",
    bachelorsOrHigher: 8.6
  }, {
    fips: 47175,
    state: "TN",
    area_name: "Van Buren County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 47177,
    state: "TN",
    area_name: "Warren County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 47179,
    state: "TN",
    area_name: "Washington County",
    bachelorsOrHigher: 30.8
  }, {
    fips: 47181,
    state: "TN",
    area_name: "Wayne County",
    bachelorsOrHigher: 8.2
  }, {
    fips: 47183,
    state: "TN",
    area_name: "Weakley County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 47185,
    state: "TN",
    area_name: "White County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 47187,
    state: "TN",
    area_name: "Williamson County",
    bachelorsOrHigher: 54.1
  }, {
    fips: 47189,
    state: "TN",
    area_name: "Wilson County",
    bachelorsOrHigher: 26.7
  }, {
    fips: 48001,
    state: "TX",
    area_name: "Anderson County",
    bachelorsOrHigher: 11.3
  }, {
    fips: 48003,
    state: "TX",
    area_name: "Andrews County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 48005,
    state: "TX",
    area_name: "Angelina County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 48007,
    state: "TX",
    area_name: "Aransas County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 48009,
    state: "TX",
    area_name: "Archer County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 48011,
    state: "TX",
    area_name: "Armstrong County",
    bachelorsOrHigher: 24.4
  }, {
    fips: 48013,
    state: "TX",
    area_name: "Atascosa County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 48015,
    state: "TX",
    area_name: "Austin County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 48017,
    state: "TX",
    area_name: "Bailey County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 48019,
    state: "TX",
    area_name: "Bandera County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 48021,
    state: "TX",
    area_name: "Bastrop County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 48023,
    state: "TX",
    area_name: "Baylor County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 48025,
    state: "TX",
    area_name: "Bee County",
    bachelorsOrHigher: 8.9
  }, {
    fips: 48027,
    state: "TX",
    area_name: "Bell County",
    bachelorsOrHigher: 22.2
  }, {
    fips: 48029,
    state: "TX",
    area_name: "Bexar County",
    bachelorsOrHigher: 26.5
  }, {
    fips: 48031,
    state: "TX",
    area_name: "Blanco County",
    bachelorsOrHigher: 27.9
  }, {
    fips: 48033,
    state: "TX",
    area_name: "Borden County",
    bachelorsOrHigher: 33.1
  }, {
    fips: 48035,
    state: "TX",
    area_name: "Bosque County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 48037,
    state: "TX",
    area_name: "Bowie County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 48039,
    state: "TX",
    area_name: "Brazoria County",
    bachelorsOrHigher: 27.9
  }, {
    fips: 48041,
    state: "TX",
    area_name: "Brazos County",
    bachelorsOrHigher: 38.3
  }, {
    fips: 48043,
    state: "TX",
    area_name: "Brewster County",
    bachelorsOrHigher: 36.3
  }, {
    fips: 48045,
    state: "TX",
    area_name: "Briscoe County",
    bachelorsOrHigher: 20.7
  }, {
    fips: 48047,
    state: "TX",
    area_name: "Brooks County",
    bachelorsOrHigher: 11
  }, {
    fips: 48049,
    state: "TX",
    area_name: "Brown County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 48051,
    state: "TX",
    area_name: "Burleson County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 48053,
    state: "TX",
    area_name: "Burnet County",
    bachelorsOrHigher: 23.3
  }, {
    fips: 48055,
    state: "TX",
    area_name: "Caldwell County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 48057,
    state: "TX",
    area_name: "Calhoun County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 48059,
    state: "TX",
    area_name: "Callahan County",
    bachelorsOrHigher: 13.4
  }, {
    fips: 48061,
    state: "TX",
    area_name: "Cameron County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 48063,
    state: "TX",
    area_name: "Camp County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 48065,
    state: "TX",
    area_name: "Carson County",
    bachelorsOrHigher: 22.6
  }, {
    fips: 48067,
    state: "TX",
    area_name: "Cass County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 48069,
    state: "TX",
    area_name: "Castro County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 48071,
    state: "TX",
    area_name: "Chambers County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 48073,
    state: "TX",
    area_name: "Cherokee County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 48075,
    state: "TX",
    area_name: "Childress County",
    bachelorsOrHigher: 20
  }, {
    fips: 48077,
    state: "TX",
    area_name: "Clay County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 48079,
    state: "TX",
    area_name: "Cochran County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 48081,
    state: "TX",
    area_name: "Coke County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 48083,
    state: "TX",
    area_name: "Coleman County",
    bachelorsOrHigher: 14
  }, {
    fips: 48085,
    state: "TX",
    area_name: "Collin County",
    bachelorsOrHigher: 49.4
  }, {
    fips: 48087,
    state: "TX",
    area_name: "Collingsworth County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 48089,
    state: "TX",
    area_name: "Colorado County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 48091,
    state: "TX",
    area_name: "Comal County",
    bachelorsOrHigher: 33.2
  }, {
    fips: 48093,
    state: "TX",
    area_name: "Comanche County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 48095,
    state: "TX",
    area_name: "Concho County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 48097,
    state: "TX",
    area_name: "Cooke County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 48099,
    state: "TX",
    area_name: "Coryell County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 48101,
    state: "TX",
    area_name: "Cottle County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 48103,
    state: "TX",
    area_name: "Crane County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 48105,
    state: "TX",
    area_name: "Crockett County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 48107,
    state: "TX",
    area_name: "Crosby County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 48109,
    state: "TX",
    area_name: "Culberson County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 48111,
    state: "TX",
    area_name: "Dallam County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 48113,
    state: "TX",
    area_name: "Dallas County",
    bachelorsOrHigher: 28.7
  }, {
    fips: 48115,
    state: "TX",
    area_name: "Dawson County",
    bachelorsOrHigher: 10.1
  }, {
    fips: 48117,
    state: "TX",
    area_name: "Deaf Smith County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 48119,
    state: "TX",
    area_name: "Delta County",
    bachelorsOrHigher: 17
  }, {
    fips: 48121,
    state: "TX",
    area_name: "Denton County",
    bachelorsOrHigher: 41
  }, {
    fips: 48123,
    state: "TX",
    area_name: "DeWitt County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 48125,
    state: "TX",
    area_name: "Dickens County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 48127,
    state: "TX",
    area_name: "Dimmit County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 48129,
    state: "TX",
    area_name: "Donley County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 48131,
    state: "TX",
    area_name: "Duval County",
    bachelorsOrHigher: 7
  }, {
    fips: 48133,
    state: "TX",
    area_name: "Eastland County",
    bachelorsOrHigher: 14
  }, {
    fips: 48135,
    state: "TX",
    area_name: "Ector County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 48137,
    state: "TX",
    area_name: "Edwards County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 48139,
    state: "TX",
    area_name: "Ellis County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 48141,
    state: "TX",
    area_name: "El Paso County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 48143,
    state: "TX",
    area_name: "Erath County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 48145,
    state: "TX",
    area_name: "Falls County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 48147,
    state: "TX",
    area_name: "Fannin County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 48149,
    state: "TX",
    area_name: "Fayette County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 48151,
    state: "TX",
    area_name: "Fisher County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 48153,
    state: "TX",
    area_name: "Floyd County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 48155,
    state: "TX",
    area_name: "Foard County",
    bachelorsOrHigher: 20.9
  }, {
    fips: 48157,
    state: "TX",
    area_name: "Fort Bend County",
    bachelorsOrHigher: 42.3
  }, {
    fips: 48159,
    state: "TX",
    area_name: "Franklin County",
    bachelorsOrHigher: 22
  }, {
    fips: 48161,
    state: "TX",
    area_name: "Freestone County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 48163,
    state: "TX",
    area_name: "Frio County",
    bachelorsOrHigher: 7.9
  }, {
    fips: 48165,
    state: "TX",
    area_name: "Gaines County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 48167,
    state: "TX",
    area_name: "Galveston County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 48169,
    state: "TX",
    area_name: "Garza County",
    bachelorsOrHigher: 8.9
  }, {
    fips: 48171,
    state: "TX",
    area_name: "Gillespie County",
    bachelorsOrHigher: 33.3
  }, {
    fips: 48173,
    state: "TX",
    area_name: "Glasscock County",
    bachelorsOrHigher: 24.8
  }, {
    fips: 48175,
    state: "TX",
    area_name: "Goliad County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 48177,
    state: "TX",
    area_name: "Gonzales County",
    bachelorsOrHigher: 14.7
  }, {
    fips: 48179,
    state: "TX",
    area_name: "Gray County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 48181,
    state: "TX",
    area_name: "Grayson County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 48183,
    state: "TX",
    area_name: "Gregg County",
    bachelorsOrHigher: 19.9
  }, {
    fips: 48185,
    state: "TX",
    area_name: "Grimes County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 48187,
    state: "TX",
    area_name: "Guadalupe County",
    bachelorsOrHigher: 25.2
  }, {
    fips: 48189,
    state: "TX",
    area_name: "Hale County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 48191,
    state: "TX",
    area_name: "Hall County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 48193,
    state: "TX",
    area_name: "Hamilton County",
    bachelorsOrHigher: 19
  }, {
    fips: 48195,
    state: "TX",
    area_name: "Hansford County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 48197,
    state: "TX",
    area_name: "Hardeman County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 48199,
    state: "TX",
    area_name: "Hardin County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 48201,
    state: "TX",
    area_name: "Harris County",
    bachelorsOrHigher: 29
  }, {
    fips: 48203,
    state: "TX",
    area_name: "Harrison County",
    bachelorsOrHigher: 18.6
  }, {
    fips: 48205,
    state: "TX",
    area_name: "Hartley County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 48207,
    state: "TX",
    area_name: "Haskell County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 48209,
    state: "TX",
    area_name: "Hays County",
    bachelorsOrHigher: 36.8
  }, {
    fips: 48211,
    state: "TX",
    area_name: "Hemphill County",
    bachelorsOrHigher: 22.2
  }, {
    fips: 48213,
    state: "TX",
    area_name: "Henderson County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 48215,
    state: "TX",
    area_name: "Hidalgo County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 48217,
    state: "TX",
    area_name: "Hill County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 48219,
    state: "TX",
    area_name: "Hockley County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 48221,
    state: "TX",
    area_name: "Hood County",
    bachelorsOrHigher: 24.1
  }, {
    fips: 48223,
    state: "TX",
    area_name: "Hopkins County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 48225,
    state: "TX",
    area_name: "Houston County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 48227,
    state: "TX",
    area_name: "Howard County",
    bachelorsOrHigher: 13
  }, {
    fips: 48229,
    state: "TX",
    area_name: "Hudspeth County",
    bachelorsOrHigher: 8.4
  }, {
    fips: 48231,
    state: "TX",
    area_name: "Hunt County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 48233,
    state: "TX",
    area_name: "Hutchinson County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 48235,
    state: "TX",
    area_name: "Irion County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 48237,
    state: "TX",
    area_name: "Jack County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 48239,
    state: "TX",
    area_name: "Jackson County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 48241,
    state: "TX",
    area_name: "Jasper County",
    bachelorsOrHigher: 10.3
  }, {
    fips: 48243,
    state: "TX",
    area_name: "Jeff Davis County",
    bachelorsOrHigher: 38.4
  }, {
    fips: 48245,
    state: "TX",
    area_name: "Jefferson County",
    bachelorsOrHigher: 18
  }, {
    fips: 48247,
    state: "TX",
    area_name: "Jim Hogg County",
    bachelorsOrHigher: 13
  }, {
    fips: 48249,
    state: "TX",
    area_name: "Jim Wells County",
    bachelorsOrHigher: 10.7
  }, {
    fips: 48251,
    state: "TX",
    area_name: "Johnson County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 48253,
    state: "TX",
    area_name: "Jones County",
    bachelorsOrHigher: 9.3
  }, {
    fips: 48255,
    state: "TX",
    area_name: "Karnes County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 48257,
    state: "TX",
    area_name: "Kaufman County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 48259,
    state: "TX",
    area_name: "Kendall County",
    bachelorsOrHigher: 40.7
  }, {
    fips: 48261,
    state: "TX",
    area_name: "Kenedy County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 48263,
    state: "TX",
    area_name: "Kent County",
    bachelorsOrHigher: 23.3
  }, {
    fips: 48265,
    state: "TX",
    area_name: "Kerr County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 48267,
    state: "TX",
    area_name: "Kimble County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 48269,
    state: "TX",
    area_name: "King County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 48271,
    state: "TX",
    area_name: "Kinney County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 48273,
    state: "TX",
    area_name: "Kleberg County",
    bachelorsOrHigher: 24.4
  }, {
    fips: 48275,
    state: "TX",
    area_name: "Knox County",
    bachelorsOrHigher: 13.2
  }, {
    fips: 48277,
    state: "TX",
    area_name: "Lamar County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 48279,
    state: "TX",
    area_name: "Lamb County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 48281,
    state: "TX",
    area_name: "Lampasas County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 48283,
    state: "TX",
    area_name: "La Salle County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 48285,
    state: "TX",
    area_name: "Lavaca County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 48287,
    state: "TX",
    area_name: "Lee County",
    bachelorsOrHigher: 17
  }, {
    fips: 48289,
    state: "TX",
    area_name: "Leon County",
    bachelorsOrHigher: 17
  }, {
    fips: 48291,
    state: "TX",
    area_name: "Liberty County",
    bachelorsOrHigher: 8.8
  }, {
    fips: 48293,
    state: "TX",
    area_name: "Limestone County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 48295,
    state: "TX",
    area_name: "Lipscomb County",
    bachelorsOrHigher: 21.1
  }, {
    fips: 48297,
    state: "TX",
    area_name: "Live Oak County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 48299,
    state: "TX",
    area_name: "Llano County",
    bachelorsOrHigher: 26.8
  }, {
    fips: 48301,
    state: "TX",
    area_name: "Loving County",
    bachelorsOrHigher: 2.6
  }, {
    fips: 48303,
    state: "TX",
    area_name: "Lubbock County",
    bachelorsOrHigher: 28
  }, {
    fips: 48305,
    state: "TX",
    area_name: "Lynn County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 48307,
    state: "TX",
    area_name: "McCulloch County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 48309,
    state: "TX",
    area_name: "McLennan County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 48311,
    state: "TX",
    area_name: "McMullen County",
    bachelorsOrHigher: 4.4
  }, {
    fips: 48313,
    state: "TX",
    area_name: "Madison County",
    bachelorsOrHigher: 10
  }, {
    fips: 48315,
    state: "TX",
    area_name: "Marion County",
    bachelorsOrHigher: 14.5
  }, {
    fips: 48317,
    state: "TX",
    area_name: "Martin County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 48319,
    state: "TX",
    area_name: "Mason County",
    bachelorsOrHigher: 24.1
  }, {
    fips: 48321,
    state: "TX",
    area_name: "Matagorda County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 48323,
    state: "TX",
    area_name: "Maverick County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 48325,
    state: "TX",
    area_name: "Medina County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 48327,
    state: "TX",
    area_name: "Menard County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 48329,
    state: "TX",
    area_name: "Midland County",
    bachelorsOrHigher: 25
  }, {
    fips: 48331,
    state: "TX",
    area_name: "Milam County",
    bachelorsOrHigher: 16
  }, {
    fips: 48333,
    state: "TX",
    area_name: "Mills County",
    bachelorsOrHigher: 23.9
  }, {
    fips: 48335,
    state: "TX",
    area_name: "Mitchell County",
    bachelorsOrHigher: 9.9
  }, {
    fips: 48337,
    state: "TX",
    area_name: "Montague County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 48339,
    state: "TX",
    area_name: "Montgomery County",
    bachelorsOrHigher: 31.7
  }, {
    fips: 48341,
    state: "TX",
    area_name: "Moore County",
    bachelorsOrHigher: 13
  }, {
    fips: 48343,
    state: "TX",
    area_name: "Morris County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 48345,
    state: "TX",
    area_name: "Motley County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 48347,
    state: "TX",
    area_name: "Nacogdoches County",
    bachelorsOrHigher: 25
  }, {
    fips: 48349,
    state: "TX",
    area_name: "Navarro County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 48351,
    state: "TX",
    area_name: "Newton County",
    bachelorsOrHigher: 6.9
  }, {
    fips: 48353,
    state: "TX",
    area_name: "Nolan County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 48355,
    state: "TX",
    area_name: "Nueces County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 48357,
    state: "TX",
    area_name: "Ochiltree County",
    bachelorsOrHigher: 14
  }, {
    fips: 48359,
    state: "TX",
    area_name: "Oldham County",
    bachelorsOrHigher: 30.3
  }, {
    fips: 48361,
    state: "TX",
    area_name: "Orange County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 48363,
    state: "TX",
    area_name: "Palo Pinto County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 48365,
    state: "TX",
    area_name: "Panola County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 48367,
    state: "TX",
    area_name: "Parker County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 48369,
    state: "TX",
    area_name: "Parmer County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 48371,
    state: "TX",
    area_name: "Pecos County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 48373,
    state: "TX",
    area_name: "Polk County",
    bachelorsOrHigher: 12.1
  }, {
    fips: 48375,
    state: "TX",
    area_name: "Potter County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 48377,
    state: "TX",
    area_name: "Presidio County",
    bachelorsOrHigher: 22
  }, {
    fips: 48379,
    state: "TX",
    area_name: "Rains County",
    bachelorsOrHigher: 11.4
  }, {
    fips: 48381,
    state: "TX",
    area_name: "Randall County",
    bachelorsOrHigher: 30.7
  }, {
    fips: 48383,
    state: "TX",
    area_name: "Reagan County",
    bachelorsOrHigher: 11
  }, {
    fips: 48385,
    state: "TX",
    area_name: "Real County",
    bachelorsOrHigher: 20
  }, {
    fips: 48387,
    state: "TX",
    area_name: "Red River County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 48389,
    state: "TX",
    area_name: "Reeves County",
    bachelorsOrHigher: 10.6
  }, {
    fips: 48391,
    state: "TX",
    area_name: "Refugio County",
    bachelorsOrHigher: 10.3
  }, {
    fips: 48393,
    state: "TX",
    area_name: "Roberts County",
    bachelorsOrHigher: 34.3
  }, {
    fips: 48395,
    state: "TX",
    area_name: "Robertson County",
    bachelorsOrHigher: 17
  }, {
    fips: 48397,
    state: "TX",
    area_name: "Rockwall County",
    bachelorsOrHigher: 36.7
  }, {
    fips: 48399,
    state: "TX",
    area_name: "Runnels County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 48401,
    state: "TX",
    area_name: "Rusk County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 48403,
    state: "TX",
    area_name: "Sabine County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 48405,
    state: "TX",
    area_name: "San Augustine County",
    bachelorsOrHigher: 10
  }, {
    fips: 48407,
    state: "TX",
    area_name: "San Jacinto County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 48409,
    state: "TX",
    area_name: "San Patricio County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 48411,
    state: "TX",
    area_name: "San Saba County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 48413,
    state: "TX",
    area_name: "Schleicher County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 48415,
    state: "TX",
    area_name: "Scurry County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 48417,
    state: "TX",
    area_name: "Shackelford County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 48419,
    state: "TX",
    area_name: "Shelby County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 48421,
    state: "TX",
    area_name: "Sherman County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 48423,
    state: "TX",
    area_name: "Smith County",
    bachelorsOrHigher: 25.2
  }, {
    fips: 48425,
    state: "TX",
    area_name: "Somervell County",
    bachelorsOrHigher: 27
  }, {
    fips: 48427,
    state: "TX",
    area_name: "Starr County",
    bachelorsOrHigher: 9.6
  }, {
    fips: 48429,
    state: "TX",
    area_name: "Stephens County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 48431,
    state: "TX",
    area_name: "Sterling County",
    bachelorsOrHigher: 26.6
  }, {
    fips: 48433,
    state: "TX",
    area_name: "Stonewall County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 48435,
    state: "TX",
    area_name: "Sutton County",
    bachelorsOrHigher: 17.8
  }, {
    fips: 48437,
    state: "TX",
    area_name: "Swisher County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 48439,
    state: "TX",
    area_name: "Tarrant County",
    bachelorsOrHigher: 29.7
  }, {
    fips: 48441,
    state: "TX",
    area_name: "Taylor County",
    bachelorsOrHigher: 24.6
  }, {
    fips: 48443,
    state: "TX",
    area_name: "Terrell County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 48445,
    state: "TX",
    area_name: "Terry County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 48447,
    state: "TX",
    area_name: "Throckmorton County",
    bachelorsOrHigher: 20.7
  }, {
    fips: 48449,
    state: "TX",
    area_name: "Titus County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 48451,
    state: "TX",
    area_name: "Tom Green County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 48453,
    state: "TX",
    area_name: "Travis County",
    bachelorsOrHigher: 45.2
  }, {
    fips: 48455,
    state: "TX",
    area_name: "Trinity County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 48457,
    state: "TX",
    area_name: "Tyler County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 48459,
    state: "TX",
    area_name: "Upshur County",
    bachelorsOrHigher: 14.3
  }, {
    fips: 48461,
    state: "TX",
    area_name: "Upton County",
    bachelorsOrHigher: 11
  }, {
    fips: 48463,
    state: "TX",
    area_name: "Uvalde County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 48465,
    state: "TX",
    area_name: "Val Verde County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 48467,
    state: "TX",
    area_name: "Van Zandt County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 48469,
    state: "TX",
    area_name: "Victoria County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 48471,
    state: "TX",
    area_name: "Walker County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 48473,
    state: "TX",
    area_name: "Waller County",
    bachelorsOrHigher: 18.4
  }, {
    fips: 48475,
    state: "TX",
    area_name: "Ward County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 48477,
    state: "TX",
    area_name: "Washington County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 48479,
    state: "TX",
    area_name: "Webb County",
    bachelorsOrHigher: 17
  }, {
    fips: 48481,
    state: "TX",
    area_name: "Wharton County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 48483,
    state: "TX",
    area_name: "Wheeler County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 48485,
    state: "TX",
    area_name: "Wichita County",
    bachelorsOrHigher: 20.8
  }, {
    fips: 48487,
    state: "TX",
    area_name: "Wilbarger County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 48489,
    state: "TX",
    area_name: "Willacy County",
    bachelorsOrHigher: 9.2
  }, {
    fips: 48491,
    state: "TX",
    area_name: "Williamson County",
    bachelorsOrHigher: 38.6
  }, {
    fips: 48493,
    state: "TX",
    area_name: "Wilson County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 48495,
    state: "TX",
    area_name: "Winkler County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 48497,
    state: "TX",
    area_name: "Wise County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 48499,
    state: "TX",
    area_name: "Wood County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 48501,
    state: "TX",
    area_name: "Yoakum County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 48503,
    state: "TX",
    area_name: "Young County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 48505,
    state: "TX",
    area_name: "Zapata County",
    bachelorsOrHigher: 9.6
  }, {
    fips: 48507,
    state: "TX",
    area_name: "Zavala County",
    bachelorsOrHigher: 8.5
  }, {
    fips: 49001,
    state: "UT",
    area_name: "Beaver County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 49003,
    state: "UT",
    area_name: "Box Elder County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 49005,
    state: "UT",
    area_name: "Cache County",
    bachelorsOrHigher: 35.9
  }, {
    fips: 49007,
    state: "UT",
    area_name: "Carbon County",
    bachelorsOrHigher: 13
  }, {
    fips: 49009,
    state: "UT",
    area_name: "Daggett County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 49011,
    state: "UT",
    area_name: "Davis County",
    bachelorsOrHigher: 34.6
  }, {
    fips: 49013,
    state: "UT",
    area_name: "Duchesne County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 49015,
    state: "UT",
    area_name: "Emery County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 49017,
    state: "UT",
    area_name: "Garfield County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 49019,
    state: "UT",
    area_name: "Grand County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 49021,
    state: "UT",
    area_name: "Iron County",
    bachelorsOrHigher: 27.9
  }, {
    fips: 49023,
    state: "UT",
    area_name: "Juab County",
    bachelorsOrHigher: 16.3
  }, {
    fips: 49025,
    state: "UT",
    area_name: "Kane County",
    bachelorsOrHigher: 25.6
  }, {
    fips: 49027,
    state: "UT",
    area_name: "Millard County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 49029,
    state: "UT",
    area_name: "Morgan County",
    bachelorsOrHigher: 34.5
  }, {
    fips: 49031,
    state: "UT",
    area_name: "Piute County",
    bachelorsOrHigher: 17.4
  }, {
    fips: 49033,
    state: "UT",
    area_name: "Rich County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 49035,
    state: "UT",
    area_name: "Salt Lake County",
    bachelorsOrHigher: 31.3
  }, {
    fips: 49037,
    state: "UT",
    area_name: "San Juan County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 49039,
    state: "UT",
    area_name: "Sanpete County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 49041,
    state: "UT",
    area_name: "Sevier County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 49043,
    state: "UT",
    area_name: "Summit County",
    bachelorsOrHigher: 50.1
  }, {
    fips: 49045,
    state: "UT",
    area_name: "Tooele County",
    bachelorsOrHigher: 20.6
  }, {
    fips: 49047,
    state: "UT",
    area_name: "Uintah County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 49049,
    state: "UT",
    area_name: "Utah County",
    bachelorsOrHigher: 36.9
  }, {
    fips: 49051,
    state: "UT",
    area_name: "Wasatch County",
    bachelorsOrHigher: 34.4
  }, {
    fips: 49053,
    state: "UT",
    area_name: "Washington County",
    bachelorsOrHigher: 27.1
  }, {
    fips: 49055,
    state: "UT",
    area_name: "Wayne County",
    bachelorsOrHigher: 26.5
  }, {
    fips: 49057,
    state: "UT",
    area_name: "Weber County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 50001,
    state: "VT",
    area_name: "Addison County",
    bachelorsOrHigher: 35.4
  }, {
    fips: 50003,
    state: "VT",
    area_name: "Bennington County",
    bachelorsOrHigher: 32
  }, {
    fips: 50005,
    state: "VT",
    area_name: "Caledonia County",
    bachelorsOrHigher: 25.8
  }, {
    fips: 50007,
    state: "VT",
    area_name: "Chittenden County",
    bachelorsOrHigher: 48
  }, {
    fips: 50009,
    state: "VT",
    area_name: "Essex County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 50011,
    state: "VT",
    area_name: "Franklin County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 50013,
    state: "VT",
    area_name: "Grand Isle County",
    bachelorsOrHigher: 32.4
  }, {
    fips: 50015,
    state: "VT",
    area_name: "Lamoille County",
    bachelorsOrHigher: 35.3
  }, {
    fips: 50017,
    state: "VT",
    area_name: "Orange County",
    bachelorsOrHigher: 31.6
  }, {
    fips: 50019,
    state: "VT",
    area_name: "Orleans County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 50021,
    state: "VT",
    area_name: "Rutland County",
    bachelorsOrHigher: 28.8
  }, {
    fips: 50023,
    state: "VT",
    area_name: "Washington County",
    bachelorsOrHigher: 39
  }, {
    fips: 50025,
    state: "VT",
    area_name: "Windham County",
    bachelorsOrHigher: 34.5
  }, {
    fips: 50027,
    state: "VT",
    area_name: "Windsor County",
    bachelorsOrHigher: 34.3
  }, {
    fips: 51001,
    state: "VA",
    area_name: "Accomack County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 51003,
    state: "VA",
    area_name: "Albemarle County",
    bachelorsOrHigher: 52.1
  }, {
    fips: 51005,
    state: "VA",
    area_name: "Alleghany County",
    bachelorsOrHigher: 16.9
  }, {
    fips: 51007,
    state: "VA",
    area_name: "Amelia County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 51009,
    state: "VA",
    area_name: "Amherst County",
    bachelorsOrHigher: 18.3
  }, {
    fips: 51011,
    state: "VA",
    area_name: "Appomattox County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 51013,
    state: "VA",
    area_name: "Arlington County",
    bachelorsOrHigher: 72
  }, {
    fips: 51015,
    state: "VA",
    area_name: "Augusta County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 51017,
    state: "VA",
    area_name: "Bath County",
    bachelorsOrHigher: 19.8
  }, {
    fips: 51019,
    state: "VA",
    area_name: "Bedford County",
    bachelorsOrHigher: 26.3
  }, {
    fips: 51021,
    state: "VA",
    area_name: "Bland County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 51023,
    state: "VA",
    area_name: "Botetourt County",
    bachelorsOrHigher: 25.4
  }, {
    fips: 51025,
    state: "VA",
    area_name: "Brunswick County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 51027,
    state: "VA",
    area_name: "Buchanan County",
    bachelorsOrHigher: 8.6
  }, {
    fips: 51029,
    state: "VA",
    area_name: "Buckingham County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 51031,
    state: "VA",
    area_name: "Campbell County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 51033,
    state: "VA",
    area_name: "Caroline County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 51035,
    state: "VA",
    area_name: "Carroll County",
    bachelorsOrHigher: 13
  }, {
    fips: 51036,
    state: "VA",
    area_name: "Charles City County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 51037,
    state: "VA",
    area_name: "Charlotte County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 51041,
    state: "VA",
    area_name: "Chesterfield County",
    bachelorsOrHigher: 36.6
  }, {
    fips: 51043,
    state: "VA",
    area_name: "Clarke County",
    bachelorsOrHigher: 32.2
  }, {
    fips: 51045,
    state: "VA",
    area_name: "Craig County",
    bachelorsOrHigher: 13.1
  }, {
    fips: 51047,
    state: "VA",
    area_name: "Culpeper County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 51049,
    state: "VA",
    area_name: "Cumberland County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 51051,
    state: "VA",
    area_name: "Dickenson County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 51053,
    state: "VA",
    area_name: "Dinwiddie County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 51057,
    state: "VA",
    area_name: "Essex County",
    bachelorsOrHigher: 13.7
  }, {
    fips: 51059,
    state: "VA",
    area_name: "Fairfax County",
    bachelorsOrHigher: 59.2
  }, {
    fips: 51061,
    state: "VA",
    area_name: "Fauquier County",
    bachelorsOrHigher: 34.3
  }, {
    fips: 51063,
    state: "VA",
    area_name: "Floyd County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 51065,
    state: "VA",
    area_name: "Fluvanna County",
    bachelorsOrHigher: 29.6
  }, {
    fips: 51067,
    state: "VA",
    area_name: "Franklin County",
    bachelorsOrHigher: 19.8
  }, {
    fips: 51069,
    state: "VA",
    area_name: "Frederick County",
    bachelorsOrHigher: 28.2
  }, {
    fips: 51071,
    state: "VA",
    area_name: "Giles County",
    bachelorsOrHigher: 17
  }, {
    fips: 51073,
    state: "VA",
    area_name: "Gloucester County",
    bachelorsOrHigher: 22.9
  }, {
    fips: 51075,
    state: "VA",
    area_name: "Goochland County",
    bachelorsOrHigher: 38.3
  }, {
    fips: 51077,
    state: "VA",
    area_name: "Grayson County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 51079,
    state: "VA",
    area_name: "Greene County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 51081,
    state: "VA",
    area_name: "Greensville County",
    bachelorsOrHigher: 8.5
  }, {
    fips: 51083,
    state: "VA",
    area_name: "Halifax County",
    bachelorsOrHigher: 14.6
  }, {
    fips: 51085,
    state: "VA",
    area_name: "Hanover County",
    bachelorsOrHigher: 36.3
  }, {
    fips: 51087,
    state: "VA",
    area_name: "Henrico County",
    bachelorsOrHigher: 39.7
  }, {
    fips: 51089,
    state: "VA",
    area_name: "Henry County",
    bachelorsOrHigher: 11.5
  }, {
    fips: 51091,
    state: "VA",
    area_name: "Highland County",
    bachelorsOrHigher: 19.4
  }, {
    fips: 51093,
    state: "VA",
    area_name: "Isle of Wight County",
    bachelorsOrHigher: 26.1
  }, {
    fips: 51095,
    state: "VA",
    area_name: "James City County",
    bachelorsOrHigher: 46.1
  }, {
    fips: 51097,
    state: "VA",
    area_name: "King and Queen County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 51099,
    state: "VA",
    area_name: "King George County",
    bachelorsOrHigher: 31.8
  }, {
    fips: 51101,
    state: "VA",
    area_name: "King William County",
    bachelorsOrHigher: 19.1
  }, {
    fips: 51103,
    state: "VA",
    area_name: "Lancaster County",
    bachelorsOrHigher: 28.7
  }, {
    fips: 51105,
    state: "VA",
    area_name: "Lee County",
    bachelorsOrHigher: 11.1
  }, {
    fips: 51107,
    state: "VA",
    area_name: "Loudoun County",
    bachelorsOrHigher: 58
  }, {
    fips: 51109,
    state: "VA",
    area_name: "Louisa County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 51111,
    state: "VA",
    area_name: "Lunenburg County",
    bachelorsOrHigher: 12.5
  }, {
    fips: 51113,
    state: "VA",
    area_name: "Madison County",
    bachelorsOrHigher: 23.1
  }, {
    fips: 51115,
    state: "VA",
    area_name: "Mathews County",
    bachelorsOrHigher: 29
  }, {
    fips: 51117,
    state: "VA",
    area_name: "Mecklenburg County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 51119,
    state: "VA",
    area_name: "Middlesex County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 51121,
    state: "VA",
    area_name: "Montgomery County",
    bachelorsOrHigher: 44.3
  }, {
    fips: 51125,
    state: "VA",
    area_name: "Nelson County",
    bachelorsOrHigher: 29
  }, {
    fips: 51127,
    state: "VA",
    area_name: "New Kent County",
    bachelorsOrHigher: 24.6
  }, {
    fips: 51131,
    state: "VA",
    area_name: "Northampton County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 51133,
    state: "VA",
    area_name: "Northumberland County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 51135,
    state: "VA",
    area_name: "Nottoway County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 51137,
    state: "VA",
    area_name: "Orange County",
    bachelorsOrHigher: 24
  }, {
    fips: 51139,
    state: "VA",
    area_name: "Page County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 51141,
    state: "VA",
    area_name: "Patrick County",
    bachelorsOrHigher: 11.2
  }, {
    fips: 51143,
    state: "VA",
    area_name: "Pittsylvania County",
    bachelorsOrHigher: 14
  }, {
    fips: 51145,
    state: "VA",
    area_name: "Powhatan County",
    bachelorsOrHigher: 28
  }, {
    fips: 51147,
    state: "VA",
    area_name: "Prince Edward County",
    bachelorsOrHigher: 22.4
  }, {
    fips: 51149,
    state: "VA",
    area_name: "Prince George County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 51153,
    state: "VA",
    area_name: "Prince William County",
    bachelorsOrHigher: 38.1
  }, {
    fips: 51155,
    state: "VA",
    area_name: "Pulaski County",
    bachelorsOrHigher: 16.4
  }, {
    fips: 51157,
    state: "VA",
    area_name: "Rappahannock County",
    bachelorsOrHigher: 32
  }, {
    fips: 51159,
    state: "VA",
    area_name: "Richmond County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 51161,
    state: "VA",
    area_name: "Roanoke County",
    bachelorsOrHigher: 34
  }, {
    fips: 51163,
    state: "VA",
    area_name: "Rockbridge County",
    bachelorsOrHigher: 23.5
  }, {
    fips: 51165,
    state: "VA",
    area_name: "Rockingham County",
    bachelorsOrHigher: 23.7
  }, {
    fips: 51167,
    state: "VA",
    area_name: "Russell County",
    bachelorsOrHigher: 11.9
  }, {
    fips: 51169,
    state: "VA",
    area_name: "Scott County",
    bachelorsOrHigher: 11.6
  }, {
    fips: 51171,
    state: "VA",
    area_name: "Shenandoah County",
    bachelorsOrHigher: 19.8
  }, {
    fips: 51173,
    state: "VA",
    area_name: "Smyth County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 51175,
    state: "VA",
    area_name: "Southampton County",
    bachelorsOrHigher: 14.8
  }, {
    fips: 51177,
    state: "VA",
    area_name: "Spotsylvania County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 51179,
    state: "VA",
    area_name: "Stafford County",
    bachelorsOrHigher: 37.1
  }, {
    fips: 51181,
    state: "VA",
    area_name: "Surry County",
    bachelorsOrHigher: 18.8
  }, {
    fips: 51183,
    state: "VA",
    area_name: "Sussex County",
    bachelorsOrHigher: 9
  }, {
    fips: 51185,
    state: "VA",
    area_name: "Tazewell County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 51187,
    state: "VA",
    area_name: "Warren County",
    bachelorsOrHigher: 19.7
  }, {
    fips: 51191,
    state: "VA",
    area_name: "Washington County",
    bachelorsOrHigher: 23.5
  }, {
    fips: 51193,
    state: "VA",
    area_name: "Westmoreland County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 51195,
    state: "VA",
    area_name: "Wise County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 51197,
    state: "VA",
    area_name: "Wythe County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 51199,
    state: "VA",
    area_name: "York County",
    bachelorsOrHigher: 42
  }, {
    fips: 51510,
    state: "VA",
    area_name: "Alexandria city",
    bachelorsOrHigher: 61.5
  }, {
    fips: 51520,
    state: "VA",
    area_name: "Bristol city",
    bachelorsOrHigher: 20.4
  }, {
    fips: 51530,
    state: "VA",
    area_name: "Buena Vista city",
    bachelorsOrHigher: 14
  }, {
    fips: 51540,
    state: "VA",
    area_name: "Charlottesville city",
    bachelorsOrHigher: 49.3
  }, {
    fips: 51550,
    state: "VA",
    area_name: "Chesapeake city",
    bachelorsOrHigher: 29.4
  }, {
    fips: 51570,
    state: "VA",
    area_name: "Colonial Heights city",
    bachelorsOrHigher: 19.6
  }, {
    fips: 51580,
    state: "VA",
    area_name: "Covington city",
    bachelorsOrHigher: 9
  }, {
    fips: 51590,
    state: "VA",
    area_name: "Danville city",
    bachelorsOrHigher: 17.2
  }, {
    fips: 51595,
    state: "VA",
    area_name: "Emporia city",
    bachelorsOrHigher: 15
  }, {
    fips: 51600,
    state: "VA",
    area_name: "Fairfax city",
    bachelorsOrHigher: 53.5
  }, {
    fips: 51610,
    state: "VA",
    area_name: "Falls Church city",
    bachelorsOrHigher: 75.1
  }, {
    fips: 51620,
    state: "VA",
    area_name: "Franklin city",
    bachelorsOrHigher: 19.8
  }, {
    fips: 51630,
    state: "VA",
    area_name: "Fredericksburg city",
    bachelorsOrHigher: 37.7
  }, {
    fips: 51640,
    state: "VA",
    area_name: "Galax city",
    bachelorsOrHigher: 12.4
  }, {
    fips: 51650,
    state: "VA",
    area_name: "Hampton city",
    bachelorsOrHigher: 23.3
  }, {
    fips: 51660,
    state: "VA",
    area_name: "Harrisonburg city",
    bachelorsOrHigher: 35.6
  }, {
    fips: 51670,
    state: "VA",
    area_name: "Hopewell city",
    bachelorsOrHigher: 10.9
  }, {
    fips: 51678,
    state: "VA",
    area_name: "Lexington city",
    bachelorsOrHigher: 44.8
  }, {
    fips: 51680,
    state: "VA",
    area_name: "Lynchburg city",
    bachelorsOrHigher: 32.3
  }, {
    fips: 51683,
    state: "VA",
    area_name: "Manassas city",
    bachelorsOrHigher: 29.1
  }, {
    fips: 51685,
    state: "VA",
    area_name: "Manassas Park city",
    bachelorsOrHigher: 26.3
  }, {
    fips: 51690,
    state: "VA",
    area_name: "Martinsville city",
    bachelorsOrHigher: 16.6
  }, {
    fips: 51700,
    state: "VA",
    area_name: "Newport News city",
    bachelorsOrHigher: 24.1
  }, {
    fips: 51710,
    state: "VA",
    area_name: "Norfolk city",
    bachelorsOrHigher: 25.6
  }, {
    fips: 51720,
    state: "VA",
    area_name: "Norton city",
    bachelorsOrHigher: 20.5
  }, {
    fips: 51730,
    state: "VA",
    area_name: "Petersburg city",
    bachelorsOrHigher: 14.9
  }, {
    fips: 51735,
    state: "VA",
    area_name: "Poquoson city",
    bachelorsOrHigher: 35.8
  }, {
    fips: 51740,
    state: "VA",
    area_name: "Portsmouth city",
    bachelorsOrHigher: 19.5
  }, {
    fips: 51750,
    state: "VA",
    area_name: "Radford city",
    bachelorsOrHigher: 34.9
  }, {
    fips: 51760,
    state: "VA",
    area_name: "Richmond city",
    bachelorsOrHigher: 35.4
  }, {
    fips: 51770,
    state: "VA",
    area_name: "Roanoke city",
    bachelorsOrHigher: 24.1
  }, {
    fips: 51775,
    state: "VA",
    area_name: "Salem city",
    bachelorsOrHigher: 30.7
  }, {
    fips: 51790,
    state: "VA",
    area_name: "Staunton city",
    bachelorsOrHigher: 31.5
  }, {
    fips: 51800,
    state: "VA",
    area_name: "Suffolk city",
    bachelorsOrHigher: 26.1
  }, {
    fips: 51810,
    state: "VA",
    area_name: "Virginia Beach city",
    bachelorsOrHigher: 33.5
  }, {
    fips: 51820,
    state: "VA",
    area_name: "Waynesboro city",
    bachelorsOrHigher: 19
  }, {
    fips: 51830,
    state: "VA",
    area_name: "Williamsburg city",
    bachelorsOrHigher: 48.6
  }, {
    fips: 51840,
    state: "VA",
    area_name: "Winchester city",
    bachelorsOrHigher: 28.1
  }, {
    fips: 53001,
    state: "WA",
    area_name: "Adams County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 53003,
    state: "WA",
    area_name: "Asotin County",
    bachelorsOrHigher: 18.5
  }, {
    fips: 53005,
    state: "WA",
    area_name: "Benton County",
    bachelorsOrHigher: 29.2
  }, {
    fips: 53007,
    state: "WA",
    area_name: "Chelan County",
    bachelorsOrHigher: 24
  }, {
    fips: 53009,
    state: "WA",
    area_name: "Clallam County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 53011,
    state: "WA",
    area_name: "Clark County",
    bachelorsOrHigher: 26.5
  }, {
    fips: 53013,
    state: "WA",
    area_name: "Columbia County",
    bachelorsOrHigher: 20.4
  }, {
    fips: 53015,
    state: "WA",
    area_name: "Cowlitz County",
    bachelorsOrHigher: 15.6
  }, {
    fips: 53017,
    state: "WA",
    area_name: "Douglas County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 53019,
    state: "WA",
    area_name: "Ferry County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 53021,
    state: "WA",
    area_name: "Franklin County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 53023,
    state: "WA",
    area_name: "Garfield County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 53025,
    state: "WA",
    area_name: "Grant County",
    bachelorsOrHigher: 15.5
  }, {
    fips: 53027,
    state: "WA",
    area_name: "Grays Harbor County",
    bachelorsOrHigher: 15
  }, {
    fips: 53029,
    state: "WA",
    area_name: "Island County",
    bachelorsOrHigher: 31.7
  }, {
    fips: 53031,
    state: "WA",
    area_name: "Jefferson County",
    bachelorsOrHigher: 37.3
  }, {
    fips: 53033,
    state: "WA",
    area_name: "King County",
    bachelorsOrHigher: 47.1
  }, {
    fips: 53035,
    state: "WA",
    area_name: "Kitsap County",
    bachelorsOrHigher: 30
  }, {
    fips: 53037,
    state: "WA",
    area_name: "Kittitas County",
    bachelorsOrHigher: 34
  }, {
    fips: 53039,
    state: "WA",
    area_name: "Klickitat County",
    bachelorsOrHigher: 20.6
  }, {
    fips: 53041,
    state: "WA",
    area_name: "Lewis County",
    bachelorsOrHigher: 14.1
  }, {
    fips: 53043,
    state: "WA",
    area_name: "Lincoln County",
    bachelorsOrHigher: 19.3
  }, {
    fips: 53045,
    state: "WA",
    area_name: "Mason County",
    bachelorsOrHigher: 17.9
  }, {
    fips: 53047,
    state: "WA",
    area_name: "Okanogan County",
    bachelorsOrHigher: 17
  }, {
    fips: 53049,
    state: "WA",
    area_name: "Pacific County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 53051,
    state: "WA",
    area_name: "Pend Oreille County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 53053,
    state: "WA",
    area_name: "Pierce County",
    bachelorsOrHigher: 24.2
  }, {
    fips: 53055,
    state: "WA",
    area_name: "San Juan County",
    bachelorsOrHigher: 45.2
  }, {
    fips: 53057,
    state: "WA",
    area_name: "Skagit County",
    bachelorsOrHigher: 24.5
  }, {
    fips: 53059,
    state: "WA",
    area_name: "Skamania County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 53061,
    state: "WA",
    area_name: "Snohomish County",
    bachelorsOrHigher: 29.3
  }, {
    fips: 53063,
    state: "WA",
    area_name: "Spokane County",
    bachelorsOrHigher: 28.6
  }, {
    fips: 53065,
    state: "WA",
    area_name: "Stevens County",
    bachelorsOrHigher: 17.6
  }, {
    fips: 53067,
    state: "WA",
    area_name: "Thurston County",
    bachelorsOrHigher: 32.9
  }, {
    fips: 53069,
    state: "WA",
    area_name: "Wahkiakum County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 53071,
    state: "WA",
    area_name: "Walla Walla County",
    bachelorsOrHigher: 26.5
  }, {
    fips: 53073,
    state: "WA",
    area_name: "Whatcom County",
    bachelorsOrHigher: 32.4
  }, {
    fips: 53075,
    state: "WA",
    area_name: "Whitman County",
    bachelorsOrHigher: 47.8
  }, {
    fips: 53077,
    state: "WA",
    area_name: "Yakima County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 54001,
    state: "WV",
    area_name: "Barbour County",
    bachelorsOrHigher: 12.3
  }, {
    fips: 54003,
    state: "WV",
    area_name: "Berkeley County",
    bachelorsOrHigher: 20.3
  }, {
    fips: 54005,
    state: "WV",
    area_name: "Boone County",
    bachelorsOrHigher: 9.1
  }, {
    fips: 54007,
    state: "WV",
    area_name: "Braxton County",
    bachelorsOrHigher: 10.8
  }, {
    fips: 54009,
    state: "WV",
    area_name: "Brooke County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 54011,
    state: "WV",
    area_name: "Cabell County",
    bachelorsOrHigher: 26.4
  }, {
    fips: 54013,
    state: "WV",
    area_name: "Calhoun County",
    bachelorsOrHigher: 8.9
  }, {
    fips: 54015,
    state: "WV",
    area_name: "Clay County",
    bachelorsOrHigher: 9.4
  }, {
    fips: 54017,
    state: "WV",
    area_name: "Doddridge County",
    bachelorsOrHigher: 12.7
  }, {
    fips: 54019,
    state: "WV",
    area_name: "Fayette County",
    bachelorsOrHigher: 11.8
  }, {
    fips: 54021,
    state: "WV",
    area_name: "Gilmer County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 54023,
    state: "WV",
    area_name: "Grant County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 54025,
    state: "WV",
    area_name: "Greenbrier County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 54027,
    state: "WV",
    area_name: "Hampshire County",
    bachelorsOrHigher: 8.7
  }, {
    fips: 54029,
    state: "WV",
    area_name: "Hancock County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 54031,
    state: "WV",
    area_name: "Hardy County",
    bachelorsOrHigher: 12.2
  }, {
    fips: 54033,
    state: "WV",
    area_name: "Harrison County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 54035,
    state: "WV",
    area_name: "Jackson County",
    bachelorsOrHigher: 16.2
  }, {
    fips: 54037,
    state: "WV",
    area_name: "Jefferson County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 54039,
    state: "WV",
    area_name: "Kanawha County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 54041,
    state: "WV",
    area_name: "Lewis County",
    bachelorsOrHigher: 14.9
  }, {
    fips: 54043,
    state: "WV",
    area_name: "Lincoln County",
    bachelorsOrHigher: 9.1
  }, {
    fips: 54045,
    state: "WV",
    area_name: "Logan County",
    bachelorsOrHigher: 8.5
  }, {
    fips: 54047,
    state: "WV",
    area_name: "McDowell County",
    bachelorsOrHigher: 5.8
  }, {
    fips: 54049,
    state: "WV",
    area_name: "Marion County",
    bachelorsOrHigher: 20.9
  }, {
    fips: 54051,
    state: "WV",
    area_name: "Marshall County",
    bachelorsOrHigher: 15.9
  }, {
    fips: 54053,
    state: "WV",
    area_name: "Mason County",
    bachelorsOrHigher: 10.1
  }, {
    fips: 54055,
    state: "WV",
    area_name: "Mercer County",
    bachelorsOrHigher: 19
  }, {
    fips: 54057,
    state: "WV",
    area_name: "Mineral County",
    bachelorsOrHigher: 12.8
  }, {
    fips: 54059,
    state: "WV",
    area_name: "Mingo County",
    bachelorsOrHigher: 10.5
  }, {
    fips: 54061,
    state: "WV",
    area_name: "Monongalia County",
    bachelorsOrHigher: 38.8
  }, {
    fips: 54063,
    state: "WV",
    area_name: "Monroe County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 54065,
    state: "WV",
    area_name: "Morgan County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 54067,
    state: "WV",
    area_name: "Nicholas County",
    bachelorsOrHigher: 13.6
  }, {
    fips: 54069,
    state: "WV",
    area_name: "Ohio County",
    bachelorsOrHigher: 28.6
  }, {
    fips: 54071,
    state: "WV",
    area_name: "Pendleton County",
    bachelorsOrHigher: 14
  }, {
    fips: 54073,
    state: "WV",
    area_name: "Pleasants County",
    bachelorsOrHigher: 13.3
  }, {
    fips: 54075,
    state: "WV",
    area_name: "Pocahontas County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 54077,
    state: "WV",
    area_name: "Preston County",
    bachelorsOrHigher: 12.9
  }, {
    fips: 54079,
    state: "WV",
    area_name: "Putnam County",
    bachelorsOrHigher: 23.9
  }, {
    fips: 54081,
    state: "WV",
    area_name: "Raleigh County",
    bachelorsOrHigher: 18.2
  }, {
    fips: 54083,
    state: "WV",
    area_name: "Randolph County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 54085,
    state: "WV",
    area_name: "Ritchie County",
    bachelorsOrHigher: 10.4
  }, {
    fips: 54087,
    state: "WV",
    area_name: "Roane County",
    bachelorsOrHigher: 10.3
  }, {
    fips: 54089,
    state: "WV",
    area_name: "Summers County",
    bachelorsOrHigher: 13
  }, {
    fips: 54091,
    state: "WV",
    area_name: "Taylor County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 54093,
    state: "WV",
    area_name: "Tucker County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 54095,
    state: "WV",
    area_name: "Tyler County",
    bachelorsOrHigher: 10
  }, {
    fips: 54097,
    state: "WV",
    area_name: "Upshur County",
    bachelorsOrHigher: 15.8
  }, {
    fips: 54099,
    state: "WV",
    area_name: "Wayne County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 54101,
    state: "WV",
    area_name: "Webster County",
    bachelorsOrHigher: 9.1
  }, {
    fips: 54103,
    state: "WV",
    area_name: "Wetzel County",
    bachelorsOrHigher: 10.2
  }, {
    fips: 54105,
    state: "WV",
    area_name: "Wirt County",
    bachelorsOrHigher: 10.9
  }, {
    fips: 54107,
    state: "WV",
    area_name: "Wood County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 54109,
    state: "WV",
    area_name: "Wyoming County",
    bachelorsOrHigher: 9
  }, {
    fips: 55001,
    state: "WI",
    area_name: "Adams County",
    bachelorsOrHigher: 12.6
  }, {
    fips: 55003,
    state: "WI",
    area_name: "Ashland County",
    bachelorsOrHigher: 22.3
  }, {
    fips: 55005,
    state: "WI",
    area_name: "Barron County",
    bachelorsOrHigher: 16.6
  }, {
    fips: 55007,
    state: "WI",
    area_name: "Bayfield County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 55009,
    state: "WI",
    area_name: "Brown County",
    bachelorsOrHigher: 27.5
  }, {
    fips: 55011,
    state: "WI",
    area_name: "Buffalo County",
    bachelorsOrHigher: 17.7
  }, {
    fips: 55013,
    state: "WI",
    area_name: "Burnett County",
    bachelorsOrHigher: 16.8
  }, {
    fips: 55015,
    state: "WI",
    area_name: "Calumet County",
    bachelorsOrHigher: 28
  }, {
    fips: 55017,
    state: "WI",
    area_name: "Chippewa County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 55019,
    state: "WI",
    area_name: "Clark County",
    bachelorsOrHigher: 11.7
  }, {
    fips: 55021,
    state: "WI",
    area_name: "Columbia County",
    bachelorsOrHigher: 22.2
  }, {
    fips: 55023,
    state: "WI",
    area_name: "Crawford County",
    bachelorsOrHigher: 15.3
  }, {
    fips: 55025,
    state: "WI",
    area_name: "Dane County",
    bachelorsOrHigher: 47.6
  }, {
    fips: 55027,
    state: "WI",
    area_name: "Dodge County",
    bachelorsOrHigher: 15.7
  }, {
    fips: 55029,
    state: "WI",
    area_name: "Door County",
    bachelorsOrHigher: 29.4
  }, {
    fips: 55031,
    state: "WI",
    area_name: "Douglas County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 55033,
    state: "WI",
    area_name: "Dunn County",
    bachelorsOrHigher: 25.3
  }, {
    fips: 55035,
    state: "WI",
    area_name: "Eau Claire County",
    bachelorsOrHigher: 31.1
  }, {
    fips: 55037,
    state: "WI",
    area_name: "Florence County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 55039,
    state: "WI",
    area_name: "Fond du Lac County",
    bachelorsOrHigher: 20.9
  }, {
    fips: 55041,
    state: "WI",
    area_name: "Forest County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 55043,
    state: "WI",
    area_name: "Grant County",
    bachelorsOrHigher: 20.2
  }, {
    fips: 55045,
    state: "WI",
    area_name: "Green County",
    bachelorsOrHigher: 20.9
  }, {
    fips: 55047,
    state: "WI",
    area_name: "Green Lake County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 55049,
    state: "WI",
    area_name: "Iowa County",
    bachelorsOrHigher: 23.2
  }, {
    fips: 55051,
    state: "WI",
    area_name: "Iron County",
    bachelorsOrHigher: 20.6
  }, {
    fips: 55053,
    state: "WI",
    area_name: "Jackson County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 55055,
    state: "WI",
    area_name: "Jefferson County",
    bachelorsOrHigher: 23.3
  }, {
    fips: 55057,
    state: "WI",
    area_name: "Juneau County",
    bachelorsOrHigher: 12.4
  }, {
    fips: 55059,
    state: "WI",
    area_name: "Kenosha County",
    bachelorsOrHigher: 24.3
  }, {
    fips: 55061,
    state: "WI",
    area_name: "Kewaunee County",
    bachelorsOrHigher: 14.4
  }, {
    fips: 55063,
    state: "WI",
    area_name: "La Crosse County",
    bachelorsOrHigher: 30.8
  }, {
    fips: 55065,
    state: "WI",
    area_name: "Lafayette County",
    bachelorsOrHigher: 17.3
  }, {
    fips: 55067,
    state: "WI",
    area_name: "Langlade County",
    bachelorsOrHigher: 13.5
  }, {
    fips: 55069,
    state: "WI",
    area_name: "Lincoln County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 55071,
    state: "WI",
    area_name: "Manitowoc County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 55073,
    state: "WI",
    area_name: "Marathon County",
    bachelorsOrHigher: 23
  }, {
    fips: 55075,
    state: "WI",
    area_name: "Marinette County",
    bachelorsOrHigher: 13.9
  }, {
    fips: 55077,
    state: "WI",
    area_name: "Marquette County",
    bachelorsOrHigher: 13
  }, {
    fips: 55078,
    state: "WI",
    area_name: "Menominee County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 55079,
    state: "WI",
    area_name: "Milwaukee County",
    bachelorsOrHigher: 28.7
  }, {
    fips: 55081,
    state: "WI",
    area_name: "Monroe County",
    bachelorsOrHigher: 17.5
  }, {
    fips: 55083,
    state: "WI",
    area_name: "Oconto County",
    bachelorsOrHigher: 15.4
  }, {
    fips: 55085,
    state: "WI",
    area_name: "Oneida County",
    bachelorsOrHigher: 24.4
  }, {
    fips: 55087,
    state: "WI",
    area_name: "Outagamie County",
    bachelorsOrHigher: 26.9
  }, {
    fips: 55089,
    state: "WI",
    area_name: "Ozaukee County",
    bachelorsOrHigher: 46.4
  }, {
    fips: 55091,
    state: "WI",
    area_name: "Pepin County",
    bachelorsOrHigher: 17.1
  }, {
    fips: 55093,
    state: "WI",
    area_name: "Pierce County",
    bachelorsOrHigher: 26.3
  }, {
    fips: 55095,
    state: "WI",
    area_name: "Polk County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 55097,
    state: "WI",
    area_name: "Portage County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 55099,
    state: "WI",
    area_name: "Price County",
    bachelorsOrHigher: 16.1
  }, {
    fips: 55101,
    state: "WI",
    area_name: "Racine County",
    bachelorsOrHigher: 23.4
  }, {
    fips: 55103,
    state: "WI",
    area_name: "Richland County",
    bachelorsOrHigher: 16.7
  }, {
    fips: 55105,
    state: "WI",
    area_name: "Rock County",
    bachelorsOrHigher: 20
  }, {
    fips: 55107,
    state: "WI",
    area_name: "Rusk County",
    bachelorsOrHigher: 14.2
  }, {
    fips: 55109,
    state: "WI",
    area_name: "St. Croix County",
    bachelorsOrHigher: 32.4
  }, {
    fips: 55111,
    state: "WI",
    area_name: "Sauk County",
    bachelorsOrHigher: 21.9
  }, {
    fips: 55113,
    state: "WI",
    area_name: "Sawyer County",
    bachelorsOrHigher: 22.1
  }, {
    fips: 55115,
    state: "WI",
    area_name: "Shawano County",
    bachelorsOrHigher: 15.1
  }, {
    fips: 55117,
    state: "WI",
    area_name: "Sheboygan County",
    bachelorsOrHigher: 22.5
  }, {
    fips: 55119,
    state: "WI",
    area_name: "Taylor County",
    bachelorsOrHigher: 13.8
  }, {
    fips: 55121,
    state: "WI",
    area_name: "Trempealeau County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 55123,
    state: "WI",
    area_name: "Vernon County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 55125,
    state: "WI",
    area_name: "Vilas County",
    bachelorsOrHigher: 24.9
  }, {
    fips: 55127,
    state: "WI",
    area_name: "Walworth County",
    bachelorsOrHigher: 26.3
  }, {
    fips: 55129,
    state: "WI",
    area_name: "Washburn County",
    bachelorsOrHigher: 20.5
  }, {
    fips: 55131,
    state: "WI",
    area_name: "Washington County",
    bachelorsOrHigher: 27.9
  }, {
    fips: 55133,
    state: "WI",
    area_name: "Waukesha County",
    bachelorsOrHigher: 41
  }, {
    fips: 55135,
    state: "WI",
    area_name: "Waupaca County",
    bachelorsOrHigher: 16.5
  }, {
    fips: 55137,
    state: "WI",
    area_name: "Waushara County",
    bachelorsOrHigher: 15.2
  }, {
    fips: 55139,
    state: "WI",
    area_name: "Winnebago County",
    bachelorsOrHigher: 26.1
  }, {
    fips: 55141,
    state: "WI",
    area_name: "Wood County",
    bachelorsOrHigher: 18.9
  }, {
    fips: 56001,
    state: "WY",
    area_name: "Albany County",
    bachelorsOrHigher: 48.8
  }, {
    fips: 56003,
    state: "WY",
    area_name: "Big Horn County",
    bachelorsOrHigher: 20
  }, {
    fips: 56005,
    state: "WY",
    area_name: "Campbell County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 56007,
    state: "WY",
    area_name: "Carbon County",
    bachelorsOrHigher: 17.2
  }, {
    fips: 56009,
    state: "WY",
    area_name: "Converse County",
    bachelorsOrHigher: 19.6
  }, {
    fips: 56011,
    state: "WY",
    area_name: "Crook County",
    bachelorsOrHigher: 21.6
  }, {
    fips: 56013,
    state: "WY",
    area_name: "Fremont County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 56015,
    state: "WY",
    area_name: "Goshen County",
    bachelorsOrHigher: 21.5
  }, {
    fips: 56017,
    state: "WY",
    area_name: "Hot Springs County",
    bachelorsOrHigher: 19.5
  }, {
    fips: 56019,
    state: "WY",
    area_name: "Johnson County",
    bachelorsOrHigher: 27
  }, {
    fips: 56021,
    state: "WY",
    area_name: "Laramie County",
    bachelorsOrHigher: 26.8
  }, {
    fips: 56023,
    state: "WY",
    area_name: "Lincoln County",
    bachelorsOrHigher: 20.1
  }, {
    fips: 56025,
    state: "WY",
    area_name: "Natrona County",
    bachelorsOrHigher: 21.3
  }, {
    fips: 56027,
    state: "WY",
    area_name: "Niobrara County",
    bachelorsOrHigher: 21.4
  }, {
    fips: 56029,
    state: "WY",
    area_name: "Park County",
    bachelorsOrHigher: 28.3
  }, {
    fips: 56031,
    state: "WY",
    area_name: "Platte County",
    bachelorsOrHigher: 19.2
  }, {
    fips: 56033,
    state: "WY",
    area_name: "Sheridan County",
    bachelorsOrHigher: 28.9
  }, {
    fips: 56035,
    state: "WY",
    area_name: "Sublette County",
    bachelorsOrHigher: 23.6
  }, {
    fips: 56037,
    state: "WY",
    area_name: "Sweetwater County",
    bachelorsOrHigher: 18.1
  }, {
    fips: 56039,
    state: "WY",
    area_name: "Teton County",
    bachelorsOrHigher: 51.9
  }, {
    fips: 56041,
    state: "WY",
    area_name: "Uinta County",
    bachelorsOrHigher: 18.7
  }, {
    fips: 56043,
    state: "WY",
    area_name: "Washakie County",
    bachelorsOrHigher: 21.2
  }, {
    fips: 56045,
    state: "WY",
    area_name: "Weston County",
    bachelorsOrHigher: 16.8
  }]
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("#ChoroplethTests", function() {
      describe("#Technology Stack", function() {
        it(i.d3ProjectStackNoAxes, function() {
          return !0
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. My Choropleth should have a title with a corresponding\n      id="title"'), function() {
          n.assert.isNotNull(document.getElementById("title"), 'Could not find an element with id="title" ')
        }), e++, it("".concat(e, '. My Choropleth should have a description element with a\n      corresponding id="description"'), function() {
          n.assert.isNotNull(document.getElementById("description"), 'Could not find element with id="description" ')
        }), e++, it("".concat(e, '. My Choropleth should have counties with a corresponding\n      class="county" that represent the data'), function() {
          n.assert.isAbove(document.querySelectorAll(".county").length, 0, 'Could not find any elements with class="county" ')
        }), e++, it("".concat(e, ". There should be at least 4 different fill colors used for\n      the counties"), function() {
          var e = document.querySelectorAll(".county");
          n.assert.isTrue((0, h.hasUniqueColorsCount)(e, 4), "There should be at least four fill colors used for the counties ")
        }), e++, it("".concat(e, '. My counties should each have "data-fips" and\n      "data-education" properties containing their corresponding fips and\n      education values'), function() {
          var e = document.querySelectorAll(".county");
          n.assert.isAbove(e.length, 0, 'Could not find any elements with a class="counties" ');
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            n.assert.isNotNull(a.getAttribute("data-fips"), 'Could not find property "data-fips" in county '), n.assert.isNotNull(a.getAttribute("data-education"), 'Could not find property "data-education" in county ')
          }
        }), e++, it("".concat(e, ". My Choropleth should have a county for each provided data\n      point"), function() {
          var e = document.querySelectorAll(".county");
          n.assert.equal(e.length, s.default.length)
        }), e++, it("".concat(e, ". The counties should have data-fips and data-education\n      values that match the sample data"), function() {
          for (var e = document.querySelectorAll(".county"), t = s.default.map(function(e) {
              return e.fips
            }), a = [], r = 0; r < e.length; r++) {
            var o = e[r].getAttribute("data-fips");
            n.assert.equal(a.indexOf(o), -1, "There should be no duplicate fips values "), a.push(+o)
          }
          for (var i = 0; i < s.default.length; i++) n.assert.notEqual(a.indexOf(t[i]), -1, "Choropleth does not contain all fips from sample data "), n.assert.notEqual(t.indexOf(a[i]), -1, "Choropleth contains fips data not found in sample data ");
          for (var h = s.default.reduce(function(e, t) {
              return e[t.fips] = t, e
            }, {}), l = 0; l < e.length; l++) {
            var c = +e[l].getAttribute("data-fips"),
              u = e[l].getAttribute("data-education"),
              f = h[c].bachelorsOrHigher;
            n.assert.equal(u, f, "County fips and education data does not match ")
          }
        }), e++, it("".concat(e, '. My Choropleth should have a legend with a corresponding\n      id="legend"'), function() {
          n.assert.isNotNull(document.getElementById("legend"), 'Could not find element with id="legend" ')
        }), e++, it("".concat(e, ". There should be at least 4 different fill colors used for\n      the legend"), function() {
          var e = document.querySelectorAll("#legend rect");
          n.assert.isTrue((0, h.hasUniqueColorsCount)(e, 4), "There should be at least four fill colors used for the legend ")
        })
      }), (0, o.testToolTip)(document.querySelectorAll(".county"), "data-education", "data-education")
    })
  };
  var r, n = a(0),
    s = (r = a(23)) && r.__esModule ? r : {
      default: r
    },
    o = a(5),
    i = a(1),
    h = a(3)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("#ScatterPlotTests", function() {
      describe("#Technology Stack", function() {
        it(o.d3ProjectStack, function() {
          return !0
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. I can see a title element that has a corresponding\n      id="title".'), function() {
          n.assert.isNotNull(document.getElementById("title"), 'Could not find element with id="title" ')
        }), e++, it("".concat(e, '. I can see an x-axis that has a corresponding id="x-axis".'), function() {
          n.assert.isNotNull(document.getElementById("x-axis"), 'There should be an element with id="x-axis" '), n.assert.isAbove(document.querySelectorAll("g#x-axis").length, 0, "x-axis should be a <g> SVG element ")
        }), e++, it("".concat(e, '. I can see a y-axis that has a corresponding id="y-axis".'), function() {
          n.assert.isNotNull(document.getElementById("y-axis"), 'There should be an element with id="y-axis" '), n.assert.isAbove(document.querySelectorAll("g#y-axis").length, 0, "y-axis should be a <g> SVG element")
        }), e++, it("".concat(e, '. I can see dots, that each have a class of "dot", which\n      represent the data being plotted.'), function() {
          n.assert.isAbove(document.querySelectorAll("circle.dot").length, 0, 'Could not find any <circle> SVG elements with class="dot" ')
        }), e++, it("".concat(e, '. Each dot should have the properties "data-xvalue" and\n      "data-yvalue" containing their corresponding x and y values.'), function() {
          var e = document.getElementsByClassName("dot");
          n.assert.isAbove(e.length, 0, 'there are no elements with the class of "dot" ');
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            n.assert.isNotNull(a.getAttribute("data-xvalue"), 'Could not find property "data-xvalue" in dot '), n.assert.isNotNull(a.getAttribute("data-yvalue"), 'Could not find property "data-yvalue" in dot ')
          }
        }), e++, it("".concat(e, ". The data-xvalue and data-yvalue of each dot should be\n      within the range of the actual data and in the correct data format. For\n      data-xvalue, integers (full years) or Date objects are acceptable for test\n      evaluation. For data-yvalue (minutes), use Date objects. "), function() {
          var e = document.getElementsByClassName("dot"),
            t = [].slice.call(e);
          n.assert.isAbove(t.length, 0, 'there are no elements with the class of "dot" '), t.forEach(function(e) {
            var t = new Date(e.getAttribute("data-xvalue"));
            n.assert.isAtLeast(t.getFullYear(), 1990, "The data-xvalue of a dot is below the range of the actual data "), n.assert.isAtMost(t.getFullYear(), 2020, "The data-xvalue of a dot is above the range of the actual data ");
            var a = new Date(e.getAttribute("data-yvalue"));
            n.assert.isAtLeast(a.getMinutes(), 36, "The minutes data-yvalue of a dot is below the range of the actual\n            minutes data "), n.assert.isAtMost(a.getMinutes(), 40, "The minutes data-yvalue of a dot is above the range of the actual\n            minutes data ")
          })
        }), e++, it("".concat(e, ". The data-xvalue and its corresponding dot should align\n      with the corresponding point/value on the x-axis."), function() {
          var e = document.querySelector("#x-axis"),
            t = document.querySelectorAll(".dot"),
            a = e.querySelectorAll(".tick");
          n.assert.isTrue((0, r.areShapesAlignedWithTicks)(t, a, "cx", "data-xvalue", "year", "center"), "x values don't line up with x locations ")
        }), e++, it("".concat(e, ". The data-yvalue and its corresponding dot should align\n      with the corresponding point/value on the y-axis."), function() {
          var e = document.querySelector("#y-axis"),
            t = document.querySelectorAll(".dot"),
            a = e.querySelectorAll(".tick");
          n.assert.isTrue((0, r.areShapesAlignedWithTicks)(t, a, "cy", "data-yvalue", "minute", "center"), "y values don't line up with y locations ")
        }), e++, it("".concat(e, '. I can see multiple tick labels on the y-axis with "%M:%S"\n      time format.'), function() {
          var e = document.querySelectorAll("#y-axis .tick");
          n.assert.isAbove(e.length, 0, "Could not find tick labels on the y axis "), e.forEach(function(e) {
            n.assert.match(e.textContent, /[0-5][0-9]:[0-5][0-9]/, 'Y-axis tick labels aren\'t in the "%M:%S" d3 time format ')
          })
        }), e++, it("".concat(e, ". I can see multiple tick labels on the x-axis that show the\n      year."), function() {
          var e = document.querySelectorAll("#x-axis .tick");
          n.assert.isAbove(e.length, 0, "Could not find tick labels on the x axis "), e.forEach(function(e) {
            n.assert.match(e.textContent, /[1-2][0-9][0-9][0-9]/, "X-axis tick labels do not show the year ")
          })
        }), e++, it("".concat(e, ". I can see that the range of the x-axis labels are within\n      the range of the actual x-axis data."), function() {
          var e = document.querySelectorAll("#x-axis .tick");
          n.assert.isAbove(e.length, 0, "Could not find tick labels on the x axis "), e.forEach(function(e) {
            n.assert.isAtLeast(e.textContent, 1994, "x axis labels are below the range of the actual data "), n.assert.isAtMost(e.textContent, 2016, "x axis labels are above the range of the actual data ")
          })
        }), e++, it("".concat(e, ". I can see that the range of the y-axis labels are within\n      the range of the actual y-axis data."), function() {
          var e = document.querySelectorAll("#y-axis .tick"),
            t = new Date(0, 0, 0, 0, 36, 0, 0),
            a = new Date(0, 0, 0, 0, 40, 0, 0);
          n.assert.isAbove(e.length, 0, "Could not find tick labels on the y axis "), e.forEach(function(e) {
            var r = e.textContent.split(":"),
              s = r[0],
              o = r[1],
              i = new Date(0, 0, 0, 0, s, o, 0);
            n.assert.isAtLeast(i, t, "y axis labels are below the range of the actual data "), n.assert.isAtMost(i, a, "y axis labels are above the range of the actual data ")
          })
        }), e++, it("".concat(e, '. I can see a legend containing descriptive text that has\n      id="legend".'), function() {
          var e;
          n.assert.isNotNull(document.getElementById("legend"), 'There should be an element with id="legend" '), e = null !== document.querySelector("#legend text") ? document.querySelector("#legend text").innerHTML : document.getElementById("legend").innerText, n.assert.isNotNull(e, "The legend should contain text ")
        })
      }), (0, s.testToolTip)(document.querySelectorAll(".dot"), "data-year", "data-xvalue")
    })
  };
  var r = a(7),
    n = a(0),
    s = a(5),
    o = a(1)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getTickPosition = function(e) {
    var t;
    if (!e.hasAttribute("transform")) throw new Error("Element does not have the required transform attribute.");
    return t = parseFloat(e.getAttribute("transform").split(",")[1].split(")")[0]), {
      x: parseFloat(e.getAttribute("transform").split(",")[0].split("(")[1]),
      y: t
    }
  }, t.getTickValue = function(e, t) {
    var a = e.querySelector("text").innerHTML;
    switch (t) {
      case null:
        break;
      case "minute":
        a = parseInt(a.split(":")[0], 10) + parseInt(a.split(":")[1], 10) / 60;
        break;
      case "month":
        a = r.indexOf(a.toLowerCase());
        break;
      case "thousand":
        a = a.split(",").join("")
    }
    return parseFloat(a)
  }, t.getShapeValue = function(e, t, a) {
    var n;
    switch (a) {
      case null:
        n = e.getAttribute(t);
        break;
      case "year":
        n = new Date(e.getAttribute(t)).getFullYear();
        break;
      case "minute":
        n = new Date(e.getAttribute(t)).getMinutes() + new Date(e.getAttribute(t)).getSeconds() / 60;
        break;
      case "month":
        n = isNaN(parseInt(e.getAttribute(t), 10)) ? r.indexOf(e.getAttribute(t).toLowerCase()) : e.getAttribute(t);
        break;
      default:
        n = e.getAttribute(t)
    }
    return parseFloat(n)
  }, t.getShapePosition = function(e, t, a) {
    var r, n = parseFloat(e.getAttribute(t));
    switch (a) {
      case "topLeft":
        r = 0;
        break;
      case "center":
        var s = t.match(/y/g) ? "height" : "width";
        r = e.getAttribute(s) ? parseFloat(e.getAttribute(s)) / 2 : 0;
        break;
      default:
        r = 0
    }
    return n += r
  };
  var r = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("#BarChartTests", function() {
      describe("#Technology Stack", function() {
        it(h.d3ProjectStack, function() {
          return !0
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. My chart should have a title with a corresponding\n      id="title"'), function() {
          s.assert.isNotNull(document.getElementById("title"), 'Could not find element with id="title" ')
        }), e++, it("".concat(e, '. My Chart should have a <g> element x-axis with a \n      corresponding id="x-axis"'), function() {
          s.assert.isAbove(document.querySelectorAll("g#x-axis").length, 0, 'Could not find a <g> SVG element with id="x-axis" ')
        }), e++, it("".concat(e, '. My Chart should have a <g> element y-axis with a \n      corresponding id="y-axis"'), function() {
          s.assert.isAbove(document.querySelectorAll("g#y-axis").length, 0, 'Could not find a <g> SVG element with id="y-axis" ')
        }), e++, it("".concat(e, '. Both axes should contain multiple tick labels, each with \n      the corresponding class="tick" '), function() {
          s.assert.isAbove((0, i.default)("#x-axis .tick").length, 1, "There are not enough tick labels on the x-axis "), s.assert.isAbove((0, i.default)("#y-axis .tick").length, 1, "There are not enough tick labels on the y-axis ")
        }), e++, it("".concat(e, '. My Chart should have a <rect> element for each data point \n      with a corresponding class="bar" displaying the data'), function() {
          s.assert.isAbove(document.querySelectorAll("rect.bar").length, 0, 'Could not find any <rect> elements with class="bar" '), s.assert.equal(document.querySelectorAll("rect.bar").length, 275, "The number of bars is not equal to the number of data points ")
        }), e++, it("".concat(e, '. Each bar should have the properties "data-date" and\n      "data-gdp" containing date and GDP values'), function() {
          var e = document.querySelectorAll("rect.bar");
          s.assert.isAtLeast(e.length, 1, 'no <rect> elements with the class of "bar" are detected '), e.forEach(function(e) {
            s.assert.isNotNull(e.getAttribute("data-date"), 'Could not find property "data-date" in bar '), s.assert.isNotNull(e.getAttribute("data-gdp"), 'Could not find property "data-gdp" in bar ')
          })
        }), e++, it("".concat(e, '. The bar elements\' "data-date" properties should match the \n      order of the provided data'), function(e) {
          i.default.getJSON("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(t) {
            try {
              var a = document.querySelectorAll("rect.bar");
              s.assert.isAtLeast(a.length, 1, 'no <rect> elements with the class of "bar" are detected '), a.forEach(function(e, a) {
                var r = e.getAttribute("data-date");
                s.assert.equal(r, t.data[a][0], "Bars should have date data in the same order as the provided data ")
              }), e()
            } catch (t) {
              e(t)
            }
          })
        }), e++, it("".concat(e, '. The bar elements\' "data-gdp" properties should match the \n      order of the provided data'), function(e) {
          i.default.getJSON("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(t) {
            try {
              var a = document.querySelectorAll("rect.bar");
              s.assert.isAtLeast(a.length, 1, 'no <rect> elements with the class of "bar" are detected '), a.forEach(function(e, a) {
                var r = e.getAttribute("data-gdp");
                s.assert.equal(r, t.data[a][1], "Bars should have gdp data in the same order as the provided data ")
              }), e()
            } catch (t) {
              e(t)
            }
          })
        }), e++, it("".concat(e, ". Each bar element's height should accurately represent the \n      data's corresponding GDP"), function() {
          var e = document.querySelectorAll("rect.bar"),
            t = parseFloat(e[0].getAttribute("data-gdp")) / parseFloat(e[0].getAttribute("height"));
          e.forEach(function(e) {
            var a = e.getAttribute("data-gdp"),
              r = e.getAttribute("height"),
              n = parseFloat(a) / parseFloat(r);
            s.assert.equal(t.toFixed(3), n.toFixed(3), "The heights of the bars should correspond to the data values ")
          })
        }), e++, it("".concat(e, ". The data-date attribute and its corresponding bar element \n      should align with the corresponding value on the x-axis."), function() {
          var e = document.querySelector("#x-axis"),
            t = document.querySelectorAll(".bar"),
            a = e.querySelectorAll(".tick");
          s.assert.isAbove(t.length, 0, 'there are no <rect> elements with the class of "bar" '), s.assert.isTrue((0, n.areShapesAlignedWithTicks)(t, a, "x", "data-date", "year", "topLeft"), "x values don't line up with x locations ")
        }), e++, it("".concat(e, ". The data-gdp attribute and its corresponding bar element \n      should align with the corresponding value on the y-axis."), function() {
          var e = document.querySelector("#y-axis"),
            t = document.querySelectorAll(".bar"),
            a = e.querySelectorAll(".tick");
          s.assert.isAbove(t.length, 0, 'there are no <rect> elements with the class of "bar" '), s.assert.isTrue((0, n.areShapesAlignedWithTicks)(t, a, "y", "data-gdp", "thousand", "topLeft"), "y values don't line up with y locations ")
        })
      }), (0, o.testToolTip)(document.querySelectorAll(".bar"), "data-date", "data-date")
    })
  };
  var r, n = a(7),
    s = a(0),
    o = a(5),
    i = (r = a(6)) && r.__esModule ? r : {
      default: r
    },
    h = a(1)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var e = function(e) {
        return Array.from(document.getElementsByClassName(e))
      },
      t = function(t) {
        var a = e("main-section").filter(function(e) {
          return "HEADER" === e.firstElementChild.nodeName
        });
        r.assert.strictEqual(a.length, t, "Not all elements with the class 'main-section' have a <header> element as a first element child ")
      };
    describe("Technical Documentation Page tests", function() {
      describe("#Technology Stack", function() {
        it(n.responsiveWebDesignStack, function() {
          return !0
        })
      }), describe("#Content", function() {
        var a = 0;
        a++, it("".concat(a, '. I can see a <main> element with a corresponding\n      id="main-doc", which contains the page\'s main content (technical\n      documentation).'), function() {
          r.assert.isNotNull(document.getElementById("main-doc"), "There is no element with an id of 'main-doc' "), r.assert.strictEqual(document.getElementById("main-doc").nodeName, "MAIN", "The 'main-doc' element should be a <main> ")
        }), a++, it("".concat(a, '. Within the #main-doc ( <main> ) element, I can see several\n      <section> elements, each with a class of "main-section". There should be\n      a minimum of 5.'), function() {
          var t = e("main-section").length,
            a = e("main-section").filter(function(e) {
              return "SECTION" === e.nodeName
            });
          r.assert.isAbove(document.querySelectorAll("#main-doc .main-section").length, 0, "There are no .main-section elements within #main-doc "), r.assert.isAtLeast(document.querySelectorAll("#main-doc .main-section").length, 5, 'There are not at least 5 elements with the class of "main-section" '), r.assert.strictEqual(document.querySelectorAll(".main-section").length, document.querySelectorAll("#main-doc .main-section").length, "All of the page's .main-section elements should be within #main-doc "), r.assert.strictEqual(a.length, t, 'Not all of the elements with the class of "main-section" are <section> elements ')
        }), a++, it("".concat(a, ". The first element within each .main-section should be a\n      <header> element which contains text that describes the topic of that\n      section."), function() {
          var a = e("main-section").length,
            n = e("main-section").filter(function(e) {
              return e.firstElementChild.innerText.length > 0
            });
          r.assert.isAbove(a, 0, 'No elements with the class "main-section" are defined '), t(a), r.assert.strictEqual(n.length, a, 'Not all first-child <header> elements within "main-section" elements contain text ')
        }), a++, it("".concat(a, '. Each <section> element with the class of "main-section"\n      should also have an id that corresponds with the text of each <header>\n      contained within it. Any spaces should be replaced with underscores (e.g.\n      The <section> that contains the header "Javascript and Java" should have a\n      corresponding id="Javascript_and_Java").'), function() {
          var a = e("main-section");
          r.assert.isAbove(a.length, 0, 'No elements with the class "main-section" are defined '), t(a.length);
          var n = a.map(function(e) {
              return r.assert.isAbove(e.firstElementChild.innerText.length, 0, "All headers must contain text "), e.firstElementChild.innerText.trim().replace(/\s/g, "_").toUpperCase()
            }),
            s = a.map(function(e) {
              return r.assert.strictEqual(e.hasAttribute("id"), !0, "Each 'main-section' should have an id attribute "), e.id.toUpperCase()
            }),
            o = n.filter(function(e) {
              return -1 === s.indexOf(e)
            });
          r.assert.strictEqual(o.length, 0, 'Some "main-section" elements are missing the following ids (don\'t forget to replace spaces with underscores!) : ' + o + " ")
        }), a++, it("".concat(a, ". The .main-section elements should contain at least 10 <p>\n      elements total (not each)."), function() {
          r.assert.isAtLeast(document.querySelectorAll(".main-section p").length, 10, "There are not at least 10 <p> elements throughout all of the elements with the class of 'main-section' ")
        }), a++, it("".concat(a, ". The .main-section elements should contain at least 5 <code>\n      elements total (not each)."), function() {
          r.assert.isAtLeast(document.querySelectorAll(".main-section code").length, 5, "There are not at least 5 <code> elements throughout all of the elements with the class of 'main-section' ")
        }), a++, it("".concat(a, ". The .main-section elements should contain at least 5 <li>\n      items total (not each)."), function() {
          r.assert.isAtLeast(document.querySelectorAll(".main-section li").length, 5, "There are not at least 5 <li> elements throughout all of the elements with the class of 'main-section' ")
        }), a++, it("".concat(a, '. I can see a <nav> element with a corresponding\n      id="navbar".'), function() {
          r.assert.isNotNull(document.getElementById("navbar"), "There is no element with the id of 'navbar'."), r.assert.strictEqual(document.getElementById("navbar").nodeName, "NAV", 'The element with the id of "navbar" is not a <nav> element ')
        }), a++, it("".concat(a, ". The navbar element should contain one <header> element\n      which contains text that describes the topic of the technical\n      documentation."), function() {
          r.assert.strictEqual(document.getElementById("navbar").getElementsByTagName("header").length, 1, "The navbar element should contain only one <header> element.")
        }), a++, it("".concat(a, '. Additionally, the navbar should contain link (<a>) elements\n      with the class of "nav-link". There should be one for every element with\n      the class "main-section".'), function() {
          var t = document.querySelectorAll("#main-doc .main-section").length,
            a = document.querySelectorAll("#navbar .nav-link").length,
            n = e("nav-link").filter(function(e) {
              return "A" === e.nodeName
            });
          r.assert.isAbove(a, 0, 'The element with the id of "navbar" does not contain any elements with the class of "nav-link" '), r.assert.strictEqual(a, t, 'There should be one .nav-link for every element with the class of "main-section", and every .nav-link should be within #navbar '), r.assert.strictEqual(n.length, a, 'Not all of the elements with the class of "nav-link" are <a> elements ')
        }), a++, it("".concat(a, ". The <header> element in the navbar must come before any\n      link (<a>) elements in the navbar."), function() {
          var e = document.querySelectorAll("#navbar a.nav-link"),
            t = document.querySelectorAll("#navbar header").item(0),
            a = !0;
          e.forEach(function(e) {
            t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING || (a = !1)
          }), r.assert.strictEqual(a, !0, "The <header> element contained by the navbar must be come before any link (<a>) elements contained by the navbar")
        }), a++, it("".concat(a, '. Each element with the class of "nav-link" should contain\n      text that corresponds to the <header> text within each <section> (e.g. if\n      you have a "Hello world" section/header, your navbar should have an\n      element which contains the text "Hello world").'), function() {
          r.assert.isAbove(e("nav-link").length, 0, 'No elements with the class "nav-link" have been defined ');
          var t = e("main-section").map(function(e) {
              return e.firstElementChild.innerText.trim().toUpperCase()
            }),
            a = e("nav-link").map(function(e) {
              return /[^\n\t\f\r\v]+/.exec(e.innerText)[0].toUpperCase()
            }),
            n = t.filter(function(e) {
              return -1 === a.indexOf(e)
            });
          r.assert.strictEqual(n.length, 0, "Check that these headers have corresponding .nav-link elements and be mindful of case! : " + n + " ")
        }), a++, it("".concat(a, '. When I click on a navbar element, the page should navigate\n      to the corresponding section of the "main-doc" element (e.g. If I click on\n      a "nav-link" element that contains the text "Hello world", the page\n      navigates to a <section> element that has that id and contains the\n      corresponding <header>.'), function() {
          var t = document.getElementsByClassName("nav-link").length;
          r.assert.isAbove(t, 0, 'No elements with the class "nav-link" have been defined ');
          var a = e("nav-link").filter(function(e) {
              return e.hasAttribute("href")
            }),
            n = e("nav-link").map(function(e) {
              return e.getAttribute("href")
            }),
            s = e("main-section").map(function(e) {
              return e.id
            }),
            o = s.filter(function(e) {
              return -1 === n.indexOf("#" + e)
            });
          r.assert.strictEqual(a.length, t, "Every .nav-link does not have an href attribute."), r.assert.strictEqual(o.length, 0, 'Every .nav-link should have an href value that links it to its corresponding .main-section (e.g. href="#Introduction"). Check that these .main-section ids have corresponding href values : ' + o + " ")
        })
      }), describe("#Layout", function() {
        var e = 0;
        e++, it("".concat(e, '. On regular sized devices (laptops, desktops), the element\n      with id="navbar" should be shown on the left side of the screen and should\n      always be visible to the user.'), function() {
          var e = document.documentElement.clientWidth || window.innerWidth,
            t = document.documentElement.clientHeight || window.innerHeight;
          r.assert.isAbove(e, 850, "Please run this test in a larger window (before any media queries) ");
          var a = document.getElementById("navbar");
          r.assert.isBelow(a.getBoundingClientRect().left, e / 2 - a.getBoundingClientRect().width, "Left of bounding rectangle is not correct."), r.assert.isBelow(a.getBoundingClientRect().top, t / 2, "Top of bounding rectangle is not correct."), window.scroll(0, 1e3), r.assert.isBelow(a.getBoundingClientRect().left, e / 2 - a.getBoundingClientRect().width, "After scroll: Left of bounding rectangle is not correct."), r.assert.isBelow(a.getBoundingClientRect().top, t / 2, "After scroll: Top of bounding rectangle is not correct."), window.scroll(0, 0)
        }), e++, it("".concat(e, ". My Technical Documentation page should use at least one\n      media query."), function() {
          var e = (0, s.allCSSRulesAsArray)(document.styleSheets).filter(function(e) {
              return e.type === CSSRule.MEDIA_RULE
            }),
            t = (0, s.allCSSRulesAsArray)(e).filter(function(e) {
              return !(0, s.isTestSuiteRule)(e)
            });
          r.assert.isAbove(t.length, 0, "No media queries detected ")
        })
      })
    })
  };
  var r = a(0),
    n = a(1),
    s = a(8)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("Survey Form tests", function() {
      describe("#Technology Stack", function() {
        it(n.responsiveWebDesignStack, function() {
          r.assert.ok(!0)
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. I can see a title with id="title" in H1 sized text.'), function() {
          var e = document.getElementById("title");
          r.assert.isNotNull(e, 'There should be an element with id="title" '), r.assert.strictEqual(e.tagName, "H1", "#title should be in H1 sized text "), r.assert.isAbove(e.innerText.length, 0, "#title should contain some text ")
        }), e++, it("".concat(e, '. I can see a short explanation with id="description" in P\n      sized text.'), function() {
          var e = document.getElementById("description");
          r.assert.isNotNull(e, 'There should be an element with id="description" '), r.assert.strictEqual(e.tagName, "P", "#description should be in P sized text "), r.assert.isAbove(e.innerText.length, 0, "#description should contain some text ")
        }), e++, it("".concat(e, '. I can see a <form> with id="survey-form".'), function() {
          var e = document.getElementById("survey-form");
          r.assert.isNotNull(e, 'There should be an element with id="survey-form" '), r.assert.strictEqual(e.tagName, "FORM", "#survey-form should be a <form>-element ")
        }), e++, it("".concat(e, '. Inside the form element, I am required to enter my name \n      in a field with id="name". If I do not enter a name I will see an HTML5 \n      validation error.'), function() {
          var e = document.getElementById("name");
          r.assert.isNotNull(e, 'There should be an input text field with id="name" '), r.assert.strictEqual(e.type, "text", 'input field with id="name" should be a text field '), r.assert.isOk(e.required, "Name input field should be required "), r.assert.isAbove(document.querySelectorAll("#survey-form #name").length, 0, 'The field with id="name" is not inside the form element ')
        }), e++, it("".concat(e, '. Inside the form element, I am required to enter an email \n      in a field with id="email". If I do not enter an email I will see an \n      HTML5 validation error.'), function() {
          var e = document.getElementById("email");
          r.assert.isNotNull(e, 'There should be an input text field with id="email" '), r.assert.isOk(e.required, "Email input field should be required "), r.assert.isAbove(document.querySelectorAll("#survey-form #email").length, 0, 'The field with id="email" is not inside the form element ')
        }), e++, it("".concat(e, ". If I enter an email that is not formatted correctly, I will\n      see an HTML5 validation error."), function() {
          var e = document.getElementById("email");
          r.assert.strictEqual(e.type, "email", "Email field should be HTML5 validated ")
        }), e++, it("".concat(e, '. Inside the form, I can enter a number in a field with\n      id="number".'), function() {
          var e = document.getElementById("number");
          r.assert.isNotNull(e, 'There should be an input text field with id="number" '), r.assert.isAbove(document.querySelectorAll("#survey-form #number").length, 0, 'The field with id="number" is not inside the form element ')
        }), e++, it("".concat(e, ". If I enter non-numbers in the number input, I will see an\n      HTML5 validation error."), function() {
          var e = document.getElementById("number");
          r.assert.strictEqual(e.type, "number", "Number field should be HTML5 validated ")
        }), e++, it("".concat(e, ". If I enter numbers outside the range of the number input, I\n      will see an HTML5 validation error.'"), function() {
          var e = document.getElementById("number");
          r.assert.isNotNaN(parseInt(e.min, 10), "Minimum number should be defined "), r.assert.isNotNaN(parseInt(e.max, 10), "Maximum number should be defined ")
        }), e++, it("".concat(e, '. For the name, email, and number input fields inside the\n      form I can see corresponding labels that describe the purpose of each\n      field with the following ids: id="name-label", id="email-label", and\n      id="number-label".'), function() {
          var e = document.getElementById("name-label"),
            t = document.getElementById("email-label"),
            a = document.getElementById("number-label");
          r.assert.isNotNull(e, "#name-label is not defined "), r.assert.strictEqual(e.nodeName, "LABEL", "#name-label should be a <label> element "), r.assert.isAbove(e.innerText.length, 0, "#name-label should contain some text "), r.assert.isNotNull(t, "#email-label is not defined "), r.assert.strictEqual(t.nodeName, "LABEL", "#email-label should be a <label> element "), r.assert.isAbove(t.innerText.length, 0, "#email-label should contain some text "), r.assert.isNotNull(a, "#number-label is not defined "), r.assert.strictEqual(a.nodeName, "LABEL", "#number-label should be a <label> element "), r.assert.isAbove(a.innerText.length, 0, "#number-label should contain some text "), r.assert.isAbove(document.querySelectorAll("#survey-form #name-label").length, 0, 'The label with id="name-label" is not inside the form element '), r.assert.isAbove(document.querySelectorAll("#survey-form #email-label").length, 0, 'The label with id="email-label" is not inside the form element '), r.assert.isAbove(document.querySelectorAll("#survey-form #number-label").length, 0, 'The label with id="number-label" is not inside the form element ')
        }), e++, it("".concat(e, ". For the name, email, and number input fields, I can see\n      placeholder text that gives me a description or instructions for each\n      field.'"), function() {
          r.assert.strictEqual(document.getElementById("name").hasAttribute("placeholder"), !0, "The name input field should have a placeholder attribute "), r.assert.isAbove(document.getElementById("name").placeholder.length, 0, "The name input field's placeholder attribute should have some text for its value"), r.assert.strictEqual(document.getElementById("email").hasAttribute("placeholder"), !0, "The email input field should have a placeholder attribute "), r.assert.isAbove(document.getElementById("email").placeholder.length, 0, "The email input field's placeholder attribute should have some text for its value"), r.assert.strictEqual(document.getElementById("number").hasAttribute("placeholder"), !0, "The number input field should have a placeholder attribute "), r.assert.isAbove(document.getElementById("number").placeholder.length, 0, "The number input field's placeholder attribute should have some text for its value ")
        }), e++, it("".concat(e, '. Inside the form element, I can select an option from a\n      dropdown that has corresponding id="dropdown".\''), function() {
          var e = document.getElementById("dropdown"),
            t = e.tagName,
            a = null,
            n = null;
          "DATALIST" === t && (a = e.previousElementSibling, n = a.getAttribute("list"), r.assert.strictEqual(n, "dropdown", "When using the datalist tag, the accompanying input tag must contain a name attribute matching the datalist id.")), r.assert.isNotNull(e, 'There should be a select field with id="dropdown" '), r.assert.isAtLeast(document.querySelectorAll("#dropdown option:not([disabled])").length, 2, "Select should contain at least 2 selectable options "), r.assert.isAbove(document.querySelectorAll("#survey-form #dropdown").length, 0, 'The select field with id="dropdown" is not inside the form element ')
        }), e++, it("".concat(e, ". Inside the form element, I can select a field from one or\n      more groups of radio buttons. Each group should be grouped using the name\n      attribute."), function() {
          var e, t = [].slice.call(document.querySelectorAll('input[type="radio"]'));
          for (var a in r.assert.isAtLeast(t.length, 2, "There should be at least 2 radio buttons "), r.assert.isAtLeast(document.querySelectorAll('#survey-form input[type="radio"]').length, 2, "There should be at least 2 radio buttons inside the #survey-form "), r.assert.strictEqual(t.length, document.querySelectorAll('input[value][type="radio"]:not([value=""])').length, "All your radio-buttons must have a value attribute "), r.assert.strictEqual(t.length, document.querySelectorAll('input[name][type="radio"]:not([name=""])').length, "All your radio-buttons need a name attribute "), e = t.reduce(function(e, t) {
              return e.hasOwnProperty(t.name) ? e[t.name]++ : e[t.name] = 1, e
            }, {})) Object.prototype.hasOwnProperty.call(e, a) && (console.log(e[a]), r.assert.isAtLeast(e[a], 2, "Every radio-button group should have at least 2 radio buttons "))
        }), e++, it("".concat(e, ". Inside the form element, I can select several fields from a\n      series of checkboxes, each of which must have a value attribute."), function() {
          var e = document.querySelectorAll('#survey-form input[type="checkbox"]');
          r.assert.isAtLeast(e.length, 2, "There should be at least 2 checkboxes inside the form "), r.assert.strictEqual(e.length, document.querySelectorAll('#survey-form input[value][type="checkbox"]:not([value=""]').length, "All your checkboxes must have a value attribute ")
        }), e++, it("".concat(e, ". Inside the form element, I am presented with a <textarea>\n      at the end for additional comments.'"), function() {
          var e = document.getElementsByTagName("textarea");
          r.assert.isAtLeast(e.length, 1, "There should be at least 1 <textarea> "), r.assert.isAbove(document.querySelectorAll("#survey-form textarea").length, 0, "The textarea is not inside the form element ")
        }), e++, it("".concat(e, '. Inside the form element, I am presented with a button with\n      id="submit" to submit all my inputs.'), function() {
          var e = document.getElementById("submit");
          r.assert.isNotNull(e, 'There should be a button with id="submit" '), "INPUT" === e.nodeName && r.assert.strictEqual(e.hasAttribute("type"), !0, "If you are using an <input> element for your button you need to define a type attribute "), r.assert.strictEqual(e.type, "submit", 'Your button\'s type attribute should have a value of "submit" '), r.assert.isAbove(document.querySelectorAll("#survey-form #submit").length, 0, 'The button with id="submit" is not inside the form element ')
        })
      })
    })
  };
  var r = a(0),
    n = a(1)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("#Product Landing Page tests", function() {
      describe("#Technology Stack", function() {
        it(r.responsiveWebDesignStack, function() {
          s.assert.ok(!0)
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. My product landing page should have a <header> element with\n      corresponding id="header".'), function() {
          s.assert.isNotNull(document.getElementById("header"), "#header is not defined ")
        }), e++, it("".concat(e, '. I can see an image within the #header element with a\n      corresponding id="header-img". A company logo would make a good image\n      here. '), function() {
          var e = document.getElementById("header-img");
          s.assert.isNotNull(e, "#header-img is not defined "), s.assert.strictEqual(e.nodeName, "IMG", "#header-img is not an <img> element "), s.assert.strictEqual(document.querySelectorAll("#header #header-img").length, 1, "#header-img is not a child of #header element "), s.assert.strictEqual(e.hasAttribute("src"), !0, "#header-img must have a src attribute "), s.assert.include(e.src, "http", "The src attribute's value should be a url (http...) ")
        }), e++, it("".concat(e, '. Within the <header> element I can see a <nav> element with\n      corresponding id="nav-bar".\''), function() {
          s.assert.isNotNull(document.getElementById("nav-bar"), "#nav-bar is not defined "), s.assert.strictEqual(document.getElementById("nav-bar").nodeName, "NAV", "The #nav-bar element is not a <nav> element "), s.assert.strictEqual(document.querySelectorAll("#header #nav-bar").length, 1, "#nav-bar is not a child of #header ")
        }), e++, it("".concat(e, '. I can see at least three clickable elements inside the nav\n      element, each with the class "nav-link".'), function() {
          s.assert.isAtLeast(document.querySelectorAll("#nav-bar .nav-link").length, 3, 'There are not at least 3 elements with a class of "nav-link" within the #nav-bar element ')
        }), e++, it("".concat(e, ". When I click a .nav-link button in the nav element, I am\n      taken to the corresponding section of the landing page.'"), function() {
          var e = document.querySelectorAll("#nav-bar .nav-link");
          s.assert.isAtLeast(e.length, 1, "The #nav-bar contains no .nav-link"), e.forEach(function(e) {
            s.assert.isNotNull(e), s.assert.strictEqual(e.hasAttribute("href"), !0, "Each .nav-link element should have an href attribute ");
            var t = e.getAttribute("href").slice(1);
            s.assert.isNotNull(document.getElementById(t), 'The .nav-link with href="' + e.getAttribute("href") + '" is not linked to a corresponding element on the page ')
          })
        }), e++, it("".concat(e, '. I can watch an embedded product video with id="video".'), function() {
          var e = document.getElementById("video");
          s.assert.isNotNull(e, "#video is not defined "), (0, s.assert)("VIDEO" === e.nodeName || "IFRAME" === e.nodeName, "#video should be an <iframe> or <video> element ");
          var t = e.children;
          if (t.length > 0) {
            var a = o(e.children).filter(function(e) {
              return "SOURCE" === e.tagName
            })[0];
            void 0 !== a && (e = a)
          }
          s.assert.strictEqual(e.hasAttribute("src"), !0, "#video should have a src attribute ")
        }), e++, it("".concat(e, '. My landing page has a <form> element with a corresponding\n      id="form".\''), function() {
          s.assert.isNotNull(document.getElementById("form"), "#form is not defined "), s.assert.strictEqual(document.getElementById("form").nodeName, "FORM", "#form should be a <form> element ")
        }), e++, it("".concat(e, '. Within the form, there is an <input> field with id="email"\n      where I can enter an email address.'), function() {
          s.assert.isNotNull(document.getElementById("email"), "#email is not defined "), s.assert.strictEqual(document.querySelectorAll("#form #email").length, 1, "#email should be a child of the #form element "), s.assert.strictEqual(document.getElementById("email").nodeName, "INPUT", "#email should be an <input> element ")
        }), e++, it("".concat(e, ". The #email input field should have placeholder text to let\n      the user know what the field is for."), function() {
          var e = document.getElementById("email");
          s.assert.strictEqual(e.hasAttribute("placeholder"), !0, "The #email input field does not have placeholder text "), s.assert.isAbove(e.getAttribute("placeholder").length, 0, "The #email placeholder attribute should have some text ")
        }), e++, it("".concat(e, ". The #email input field uses HTML5 validation to confirm\n      that the entered text is an email address."), function() {
          var e = document.getElementById("email");
          s.assert.strictEqual(e.type, "email", "The #email input element should use HTML5 validation ")
        }), e++, it("".concat(e, '. Within the form, there is a submit <input> with\n      corresponding id="submit".'), function() {
          var e = document.getElementById("submit");
          s.assert.isNotNull(e, "#submit is not defined "), s.assert.strictEqual(document.querySelectorAll("#form #submit").length, 1, "#submit should be a child of the #form element "), s.assert.strictEqual(e.nodeName, "INPUT", "#submit should be an <input> element "), s.assert.strictEqual(e.type, "submit", "The #submit element input type is incorrect ")
        }), e++, it("".concat(e, ". When I click the #submit element, the email is submitted to\n      a static page (use this mock URL:\n      https://www.freecodecamp.com/email-submit) that confirms the email address\n      was entered (and that it posted successfully)."), function() {
          var e = document.getElementById("email"),
            t = document.getElementById("form");
          s.assert.strictEqual(t.hasAttribute("action"), !0, "The #form should have an action attribute "), s.assert.include(t.action, "http", "The action attribute's value should be a url (http...) "), s.assert.strictEqual(e.hasAttribute("name"), !0, "The #email input should have a name attribute "), s.assert.strictEqual(e.name, "email", 'The #email element\'s name attribute should have a value of "email" ')
        })
      }), describe("#Layout", function() {
        var e = 0;
        e++, it("".concat(e, ". The navbar should always be at the top of the viewport."), function() {
          var e = document.getElementById("header"),
            t = e.children,
            a = [e].concat(o(t));

          function r(e) {
            for (var t = Math.abs(e[0].getBoundingClientRect().top), a = 1; a < e.length; a++) {
              var r = Math.abs(e[a].getBoundingClientRect().top);
              r < t && (t = r)
            }
            return t
          }
          s.assert.approximately(r(a), 0, 15, "#header or one of its children should be at the top of the viewport "), window.scroll(0, 500), s.assert.approximately(r(a), 0, 15, "#header or one of its children should be at the top of the viewport even after scrolling "), window.scroll(0, 0)
        }), e++, it("".concat(e, ". My product landing page should have at least one media\n      query."), function() {
          var e = (0, n.allCSSRulesAsArray)(document.styleSheets).filter(function(e) {
              return e.type === CSSRule.MEDIA_RULE
            }),
            t = (0, n.allCSSRulesAsArray)(e).filter(function(e) {
              return !(0, n.isTestSuiteRule)(e)
            });
          s.assert.isAbove(t.length, 0, "No media queries detected ")
        }), e++, it("".concat(e, ". My product landing page should utilize CSS flexbox at least\n      once."), function() {
          var e = (0, n.allCSSRulesAsArray)(document.styleSheets).filter(function(e) {
            return !(0, n.isTestSuiteRule)(e) && (void 0 !== e.style && void 0 !== e.style.display && ("flex" === e.style.display || "inline-flex" === e.style.display))
          });
          s.assert.isAbove(e.length, 0, "We do not detect a display property set to flex or inline-flex anywhere in your CSS ")
        })
      })
    })
  };
  var r = a(1),
    n = a(8),
    s = a(0);

  function o(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
        return a
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("#Portfolio tests", function() {
      describe("#Technology Stack", function() {
        it(r.responsiveWebDesignStack, function() {
          return !0
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. My portfolio should have a Welcome section with an id of\n      "welcome-section".'), function() {
          s.assert.isNotNull(document.getElementById("welcome-section"))
        }), e++, it("".concat(e, ". The welcome section should have an h1 element that contains\n      text."), function() {
          s.assert.isAbove(document.querySelectorAll("#welcome-section h1").length, 0, "Welcome section should contain an h1 element "), s.assert.isAbove(document.querySelectorAll("#welcome-section h1")[0].innerText.length, 0, "h1 element in welcome section should contain your name or camper name ")
        }), e++, it("".concat(e, '. My portfolio should have a projects section with an id of\n      "projects".'), function() {
          s.assert.isNotNull(document.getElementById("projects"))
        }), e++, it("".concat(e, '. The projects section should contain at least one element\n      with a class of "project-tile" to hold a project.'), function() {
          s.assert.isAbove(document.querySelectorAll("#projects .project-tile").length, 0)
        }), e++, it("".concat(e, ". The projects section should contain at least one link to a\n      project."), function() {
          s.assert.isAbove(document.querySelectorAll("#projects a").length, 0)
        }), e++, it("".concat(e, '. My portfolio should have a navbar with an id of "navbar".'), function() {
          var e = document.getElementById("navbar");
          s.assert.isNotNull(e)
        }), e++, it("".concat(e, ". The navbar should contain at least one link that I can\n      click on to navigate to different sections of the page."), function(e) {
          var t = Array.from(document.querySelectorAll("#navbar a"));
          t = t.filter(function(e) {
            return "#" === e.getAttribute("href").substr(0, 1)
          });
          var a, r = 0,
            n = !1,
            o = function() {
              return 0 !== window.scrollY
            },
            i = function() {
              var e = a - window.scrollY;
              return 0 !== e
            },
            h = function a(s) {
              setTimeout(function() {
                s ? (window.scroll(0, 0), e()) : ++r < t.length ? (t[r].click(), a(s)) : n || (n = !0, window.scroll(0, document.body.scrollHeight), setTimeout(function() {
                  return l()
                }, 500))
              }, 500)
            },
            l = function() {
              a = window.scrollY, t[r = 0].click(), h(i)
            };
          this.timeout(1e4);
          var c = Array.from(document.querySelectorAll("#navbar a"));
          c = c.filter(function(e) {
            return "#" === e.getAttribute("href").substr(0, 1)
          }), s.assert.isAbove(c.length, 0, "Navbar should contain a link "), window.scroll(0, 0), t[r].click(), setTimeout(function() {
            return h(o)
          }, 500)
        }), e++, it("".concat(e, '. My portfolio should have a link with an id of\n      "profile-link", which opens my GitHub or FCC profile in a new tab.'), function() {
          var e = document.getElementById("profile-link");
          s.assert.isNotNull(e), s.assert.equal(e.nodeName, "A"), s.assert.strictEqual(e.hasAttribute("target"), !0, "#profile-link should have a target attribute "), s.assert.equal(e.target, "_blank", "Clicking #profile-link should cause a link to open in a new tab ")
        })
      }), describe("#Layout", function() {
        var e = 0;
        e++, it("".concat(e, ". My portfolio should have at least one media query."), function() {
          var e = (0, n.allCSSRulesAsArray)(document.styleSheets).filter(function(e) {
              return e.type === CSSRule.MEDIA_RULE
            }),
            t = (0, n.allCSSRulesAsArray)(e).filter(function(e) {
              return !(0, n.isTestSuiteRule)(e)
            });
          s.assert.isAbove(t.length, 0, "No media queries detected ")
        }), e++, it("".concat(e, ". The height of the welcome section should be equal to the\n      height of the viewport."), function() {
          s.assert.equal(document.getElementById("welcome-section").offsetHeight, window.innerHeight, "The height of #welcome-section is not equal to the height of the viewport ")
        }), e++, it("".concat(e, ". The navbar should always be at the top of the viewport."), function(e) {
          var t = document.getElementById("navbar");
          s.assert.approximately(t.getBoundingClientRect().top, 0, 15, "Navbar's parent should be body and it should be at the top of the viewport "), window.scroll(0, 500), setTimeout(function() {
            s.assert.approximately(t.getBoundingClientRect().top, 0, 15, "Navbar should be at the top of the viewport even after scrolling "), window.scroll(0, 0), e()
          }, 1)
        })
      })
    })
  };
  var r = a(1),
    n = a(8),
    s = a(0)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    function e(e, t) {
      return window.getComputedStyle(e).getPropertyValue(t)
    }
    describe("#Tribute Page tests", function() {
      describe("#Technology Stack", function() {
        it(o.responsiveWebDesignStack, function() {
          n.assert.ok(!0)
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. My tribute page should have an element with corresponding\n      id="main", which contains all other elements.'), function() {
          n.assert.isNotNull(document.getElementById("main")), (0, n.assert)(document.querySelectorAll("#main div, #main a, #main h1, #main img").length, 'element with id="main" must contain other elements')
        }), e++, it("".concat(e, '. I should see an element with corresponding id="title",\n      which contains a string (i.e. text) that describes the subject of the\n      tribute page (e.g. "Dr. Norman Borlaug").'), function() {
          n.assert.isNotNull(document.getElementById("title"));
          var e = document.getElementById("title").innerText;
          n.assert.isAbove(e.length, 0, "Element does not contain any text")
        }), e++, it("".concat(e, '. I should see a <div> element with corresponding\n      id="img-div".'), function() {
          n.assert.isNotNull(document.getElementById("img-div"))
        }), e++, it("".concat(e, '. Within the "img-div" element, I should see an <img> element\n      with a corresponding id="image".'), function() {
          n.assert.isNotNull(document.getElementById("image")), n.assert.strictEqual((0, s.default)("#img-div").find("#image").length, 1, 'Element is not a child of id="img-div" ')
        }), e++, it("".concat(e, '. Within the "img-div" element, I should see an element with\n      a corresponding id="img-caption" that contains textual content describing\n      the image shown in "img-div".'), function() {
          n.assert.isNotNull(document.getElementById("img-caption")), n.assert.strictEqual((0, s.default)("#img-div").find("#img-caption").length, 1, 'Element is not a child of id="img-div" ');
          var e = document.getElementById("img-caption").innerText;
          n.assert.isAbove(e.length, 0, "Element does not have any content ")
        }), e++, it("".concat(e, '. I should see an element with a corresponding\n      id="tribute-info", which contains textual content describing the subject\n      of the tribute page.'), function() {
          n.assert.isNotNull(document.getElementById("tribute-info"));
          var e = document.getElementById("tribute-info").innerText;
          n.assert.isAbove(e.length, 0, "Element does not have any content ")
        }), e++, it("".concat(e, '. I should see an <a> element with a corresponding\n      id="tribute-link", which links to an outside site that contains additional\n      information about the subject of the tribute page. HINT: You must give\n      your element an attribute of target and set it to "_blank" in order for\n      your link to open in a new tab (i.e. target="_blank").'), function() {
          var e = document.getElementById("tribute-link");
          n.assert.isNotNull(e), (0, n.assert)(e.hasAttribute("href"), '<a> element with id="tribute-link" must contain an href attribute '), (0, n.assert)(e.hasAttribute("target"), '<a> element with id="tribute-link" must contain a target attribute '), n.assert.strictEqual(e.getAttribute("target"), "_blank", 'The target attribute should be set to "_blank", in order for thelink to open in a new tab ')
        })
      }), describe("#Layout", function() {
        var t = 0;
        t++, it("".concat(t, ". The <img> element should responsively resize, relative to\n      the width of its parent element, without exceeding its original size."), function() {
          var t, a = document.getElementById("image"),
            r = e(a, "max-width"),
            s = e(a, "display");
          n.assert.notStrictEqual(r, "none", 'Try using the "max-width" style property '), n.assert.equal(s, "block", 'Use the "display" style property with a value of "block" forresponsive images.'), a.setAttribute("style", "display: none !important"), t = e(a, "height"), n.assert.equal(t, "auto", 'Use the "height" style property with a value of "auto" forresponsive images.'), a.style.display = s
        }), t++, it("".concat(t, ". The <img> element should be centered within its parent\n      element."), function() {
          var e = document.getElementById("image"),
            t = document.getElementById("image").parentElement,
            a = e.getBoundingClientRect().left,
            r = e.getBoundingClientRect().right,
            s = t.getBoundingClientRect().left,
            o = t.getBoundingClientRect().right;
          n.assert.approximately(a - s, o - r, 11, "Image is not centered")
        })
      })
    })
  };
  var r, n = a(0),
    s = (r = a(6)) && r.__esModule ? r : {
      default: r
    },
    o = a(1)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var e = "break-decrement",
      t = "session-decrement",
      a = "session-increment",
      o = "reset",
      i = "start_stop",
      h = document.getElementById("timer-label") && document.getElementById("timer-label").innerText;

    function l() {
      (0, n.clickButtonsById)([o])
    }

    function c(e) {
      var t = /^(?:<!--.*-->)?(\d{1,4})\s?(?:<!--.*-->)?\s?(?:[\.:,\/])\s?(?:<!--.*-->)?\s?(?:\d{2}.*)$/g.exec(e);
      return t[1]
    }

    function u(e) {
      var t = /^(?:<!--.*-->)?(?:\d{1,4})\s?(?:<!--.*-->)?\s?(?:[\.:,\/])\s?(?:<!--.*-->)?\s?(\d{2})(?:<!--.*-->)?/g.exec(e);
      return t[1]
    }

    function f(e, t) {
      var a = document.getElementById(e),
        r = new MutationObserver(function(e) {
          e.forEach(function() {
            t()
          })
        });
      return r.observe(a, {
        childList: !0,
        characterData: !0,
        subtree: !0
      }), r
    }
    var p = window.setTimeout,
      m = window.setInterval;

    function g() {
      window.setTimeout = p, window.setInterval = m
    }
    describe("#Pomodoro Clock tests", function() {
      before(function() {
        (0, n.clickButtonsById)([i])
      }), beforeEach(function() {
        l(), window.setTimeout = function(e) {
          return p(e, 30)
        }, window.setInterval = function(e) {
          return m(e, 30)
        }
      }), afterEach(function() {
        g()
      }), after(function() {
        l(), g()
      }), describe("#Technology Stack", function() {
        it(s.frontEndLibrariesStack, function() {
          return !0
        })
      }), describe("#Content", function() {
        var e = 0;
        e++, it("".concat(e, '. I can see an element with id="break-label" that contains a\n      string (e.g. â€œBreak Lengthâ€).'), function() {
          var e = document.getElementById("break-label");
          r.assert.isAbove(e.innerText.length, 0, "Element does not contain a string")
        }), e++, it("".concat(e, '. I can see an element with id="session-label" that contains\n      a string (e.g. "Session Lengthâ€).'), function() {
          var e = document.getElementById("session-label");
          r.assert.isAbove(e.innerText.length, 0, "Element does not contain a string")
        }), e++, it("".concat(e, '. I can see two clickable elements with corresponding IDs:\n      id="break-decrement" and id="session-decrement".'), function() {
          r.assert.isNotNull(document.getElementById("break-decrement")), r.assert.isNotNull(document.getElementById("session-decrement"))
        }), e++, it("".concat(e, '. I can see two clickable elements with corresponding IDs:\n      id="break-increment" and id="session-increment".'), function() {
          r.assert.isNotNull(document.getElementById("break-increment")), r.assert.isNotNull(document.getElementById("session-increment"))
        }), e++, it("".concat(e, '. I can see an element, with corresponding id="break-length",\n      which by default (on load) displays a value of 5.'), function() {
          var e = document.getElementById("break-length");
          r.assert.strictEqual(e.innerHTML, "5", "A value of 5 is not displayed by default")
        }), e++, it("".concat(e, '. I can see an element, with corresponding\n      id="session-length", which by default displays a value of 25.'), function() {
          var e = document.getElementById("session-length");
          r.assert.strictEqual(e.innerHTML, "25", "A value of 25 is not displayed by default")
        }), e++, it("".concat(e, '. I can see an element, with corresponding id="timer-label",\n      that contains a string indicating a session is initialized\n      (e.g. "Session").'), function() {
          var e = document.getElementById("timer-label");
          r.assert.isAbove(e.innerText.length, 0, "Element does not contain a string")
        }), e++, it("".concat(e, '. I can see an element with corresponding id="time-left".\n      NOTE: Paused or running, the value in this field should always be\n      displayed in mm:ss format (i.e. 25:00).'), function() {
          r.assert.isNotNull(document.getElementById("time-left"))
        }), e++, it("".concat(e, '. I can see a clickable element with corresponding\n      id="start_stop".'), function() {
          r.assert.isNotNull(document.getElementById("start_stop"))
        }), e++, it("".concat(e, '. I can see a clickable element with corresponding\n      id="reset".'), function() {
          r.assert.isNotNull(document.getElementById("reset"))
        })
      }), describe("#Timer", function() {
        var s = 0;
        s++, it("".concat(s, '. When I click the element with the id of "reset", any\n      running timer should be stopped, the value within id="break-length" should\n      return to 5, the value within id="session-length" should return to 25, and\n      the element with id="time-left" should reset to it\'s default state.'), function() {
          return this.timeout(5e3), (0, n.clickButtonsById)(Array(60).fill(t)), (0, n.clickButtonsById)(Array(60).fill(e)), (0, n.clickButtonsById)([i]), new Promise(function(e, t) {
            var a = document.getElementById("time-left"),
              r = f("time-left", function() {
                "00:00" === a.innerHTML && (setTimeout(function() {
                  l();
                  var a = document.getElementById("timer-label").innerText,
                    r = u(document.getElementById("time-left").innerHTML);
                  h !== a && t(new Error("Default timer label was not properly reset")), setTimeout(function() {
                    var a = "5" === document.getElementById("break-length").innerHTML,
                      n = "25" === document.getElementById("session-length").innerHTML;
                    if (a && n) {
                      var s = u(document.getElementById("time-left").innerHTML);
                      r === s ? e() : t(new Error("Pomodoro has paused but time continued elapsing"))
                    } else t(new Error("Default values for break length and sessionlength were not properly reset"))
                  }, 1500)
                }, 1500), r.disconnect())
              })
          })
        }), s++, it("".concat(s, '. When I click the element with the id of "break-decrement",\n      the value within id="break-length" decrements by a value of 1, and I can\n      see the updated value.'), function() {
          (0, n.clickButtonsById)([e, e, e, e]), r.assert.strictEqual(document.getElementById("break-length").innerHTML, "1"), l(), (0, n.clickButtonsById)([e]), r.assert.strictEqual(document.getElementById("break-length").innerHTML, "4")
        }), s++, it("".concat(s, '. When I click the element with the id of "break-increment",\n      the value within id="break-length" increments by a value of 1, and I can\n      see the updated value.'), function() {
          (0, n.clickButtonsById)(Array(4).fill("break-increment")), r.assert.strictEqual(document.getElementById("break-length").innerHTML, "9"), l(), (0, n.clickButtonsById)(["break-increment"]), r.assert.strictEqual(document.getElementById("break-length").innerHTML, "6")
        }), s++, it("".concat(s, '. When I click the element with the id of\n      "session-decrement", the value within id="session-length" decrements by a\n      value of 1, and I can see the updated value.'), function() {
          (0, n.clickButtonsById)(Array(4).fill(t)), r.assert.strictEqual(document.getElementById("session-length").innerHTML, "21"), l(), (0, n.clickButtonsById)([t]), r.assert.strictEqual(document.getElementById("session-length").innerHTML, "24")
        }), s++, it("".concat(s, '. When I click the element with the id of\n      "session-increment", the value within id="session-length" increments by a\n      value of 1, and I can see the updated value.'), function() {
          (0, n.clickButtonsById)(Array(4).fill(a)), r.assert.strictEqual(document.getElementById("session-length").innerHTML, "29"), l(), (0, n.clickButtonsById)([a]), r.assert.strictEqual(document.getElementById("session-length").innerHTML, "26")
        }), s++, it("".concat(s, ". I should not be able to set a session or break length to\n      <= 0."), function() {
          (0, n.clickButtonsById)(Array(10).fill(e)), r.assert.strictEqual(document.getElementById("break-length").innerHTML, "1", 'Value in element with id of "break-length" is less than 1.'), l(), (0, n.clickButtonsById)(Array(30).fill(t)), r.assert.strictEqual(document.getElementById("session-length").innerHTML, "1", 'Value in element with id of "session-length" is less than 1.')
        }), s++, it("".concat(s, ". I should not be able to set a session or break length to\n      > 60."), function() {
          (0, n.clickButtonsById)(Array(60).fill("break-increment")), r.assert.strictEqual(document.getElementById("break-length").innerHTML, "60", 'Value in element with id of "break-length" is greater than 60.'), l(), (0, n.clickButtonsById)(Array(40).fill(a)), r.assert.strictEqual(document.getElementById("session-length").innerHTML, "60", 'Value in element with id of "session-length" is greater than 60.')
        }), s++, it("".concat(s, '. When I first click the element with id="start_stop", the\n      timer should begin running from the value currently displayed in\n      id="session-length", even if the value has been incremented or\n      decremented from the original value of 25.'), function() {
          (0, n.clickButtonsById)([i]), r.assert.strictEqual(c(document.getElementById("time-left").innerHTML), document.getElementById("session-length").innerHTML)
        }), s++, it("".concat(s, '. If the timer is running, the element with the id of\n      "time-left" should display the remaining time in mm:ss format\n      (decrementing by a value of 1 and updating the display every 1000ms).'), function() {
          this.timeout(2500), (0, n.clickButtonsById)([i]);
          var e = u(document.getElementById("time-left").innerHTML);
          return new Promise(function(t, a) {
            setTimeout(function() {
              var r = u(document.getElementById("time-left").innerHTML);
              r > e ? t() : a(new Error("Pomodoro has started but time displayed is not changing"))
            }, 1500)
          })
        }), s++, it("".concat(s, '. If the timer is running and I click the element with\n      id="start_stop", the countdown should pause.'), function() {
          this.timeout(4e3), (0, n.clickButtonsById)([i]);
          var e = u(document.getElementById("time-left").innerHTML);
          return new Promise(function(t, a) {
            setTimeout(function() {
              var r = u(document.getElementById("time-left").innerHTML);
              r !== e ? ((0, n.clickButtonsById)([i]), setTimeout(function() {
                var e = u(document.getElementById("time-left").innerHTML);
                r === e ? t() : a(new Error("Pomodoro has paused but time continued elapsing"))
              }, 1500)) : a(new Error("Pomodoro has started but time displayed is not changing"))
            }, 1500)
          })
        }), s++, it("".concat(s, '. If the timer is paused and I click the element with\n      id="start_stop", the countdown should resume running from the point at\n      which it was paused.'), function() {
          this.timeout(5e3), (0, n.clickButtonsById)([i]);
          var e = u(document.getElementById("time-left").innerHTML);
          return new Promise(function(t, a) {
            setTimeout(function() {
              var r = u(document.getElementById("time-left").innerHTML);
              r !== e ? ((0, n.clickButtonsById)([i]), setTimeout(function() {
                var e = u(document.getElementById("time-left").innerHTML);
                r === e ? ((0, n.clickButtonsById)([i]), setTimeout(function() {
                  var r = u(document.getElementById("time-left").innerHTML);
                  e > r ? t() : a(new Error("Pomodoro has resumed but displayed time is not changing"))
                }, 1500)) : a(new Error("Pomodoro has paused but time continued elapsing"))
              }, 1500)) : a(new Error("Pomodoro has started but time displayed is not changing"))
            }, 1500)
          })
        }), s++, it("".concat(s, '. When a session countdown reaches zero (NOTE: timer MUST\n      reach 00:00), and a new countdown begins, the element with the id of\n      "timer-label" should display a string indicating a break has begun.'), function() {
          return this.timeout(5e3), (0, n.clickButtonsById)(Array(60).fill(t)), (0, n.clickButtonsById)([i]), new Promise(function(e, t) {
            var a = document.getElementById("time-left"),
              r = document.getElementById("break-length"),
              n = document.getElementById("timer-label").innerHTML,
              s = !1,
              o = f("time-left", function() {
                if ("00:00" === a.innerHTML) s = !0;
                else if (parseInt(a.innerHTML.slice(0, 2), 10) > 5) t(new Error("Test timed out because Break time didn't start with the correct value: " + (parseInt(c(a.innerHTML), 10) + 1) + " instead of " + r.innerHTML)), o.disconnect();
                else if (s) {
                  var i = document.getElementById("timer-label").innerHTML;
                  i !== n ? e() : t(new Error("Timer has reached zero but didn't switch to Break time")), o.disconnect()
                }
              })
          })
        }), s++, it("".concat(s, '. When a session countdown reaches zero (NOTE: timer MUST\n      reach 00:00), a new break countdown should begin, counting down from the\n      value currently displayed in the id="break-length" element.'), function() {
          return this.timeout(5e3), (0, n.clickButtonsById)(Array(60).fill(t)), (0, n.clickButtonsById)([i]), new Promise(function(e, t) {
            var a = document.getElementById("time-left"),
              r = !1,
              n = document.getElementById("timer-label").innerHTML,
              s = f("time-left", function() {
                var o = document.getElementById("timer-label"),
                  i = document.getElementById("break-length");
                if ("00:00" === a.innerHTML) r = !0;
                else if (parseInt(a.innerHTML.slice(0, 2), 10) > 5) t(new Error("Timer has switched to Break time, but it didn't start with the correct value: " + (parseInt(c(a.innerHTML), 10) + 1) + " instead of " + i.innerHTML)), s.disconnect();
                else if (r) {
                  if (o.innerHTML !== n) {
                    var h = +c(a.innerHTML);
                    h === +i.innerHTML ? e() : (t(new Error("Timer has switched to Break time, but it didn't start with the correct value: " + c(a.innerHTML) + " instead of " + i.innerHTML)), s.disconnect())
                  } else t(new Error("Timer has reached zero but didn't switch to Break time"));
                  s.disconnect()
                }
              })
          })
        }), s++, it("".concat(s, '. When a break countdown reaches zero (NOTE: timer MUST reach\n      00:00), and a new countdown begins, the element with the id of\n      "timer-label" should display a string indicating a session has begun.'), function() {
          return this.timeout(5e3), (0, n.clickButtonsById)(Array(60).fill(t)), (0, n.clickButtonsById)(Array(60).fill(e)), (0, n.clickButtonsById)([i]), new Promise(function(e, t) {
            var a, r = document.getElementById("time-left"),
              n = !1,
              s = !1,
              o = f("time-left", function() {
                if ("00:00" === r.innerHTML) n || s ? (s = !0, n = !1, a = document.getElementById("timer-label").innerHTML) : n = !0;
                else if (s) {
                  var i = document.getElementById("timer-label").innerHTML;
                  i !== a ? e() : t(new Error("Timer has reached zero but didn't switch back to Session time")), o.disconnect()
                }
              })
          })
        }), s++, it("".concat(s, '. When a break countdown reaches zero (NOTE: timer MUST\n      reach 00:00), a new session countdown should begin, counting down from\n      the value currently displayed in the id="session-length" element.'), function() {
          return this.timeout(5e3), (0, n.clickButtonsById)(Array(60).fill(t)), (0, n.clickButtonsById)(Array(60).fill(e)), (0, n.clickButtonsById)([i]), new Promise(function(e, t) {
            var a, r = document.getElementById("time-left"),
              n = !1,
              s = !1,
              o = f("time-left", function() {
                if ("00:00" === r.innerHTML) n || s ? (s = !0, n = !1, a = document.getElementById("timer-label").innerHTML) : n = !0;
                else if (s) {
                  var i = document.getElementById("timer-label"),
                    h = document.getElementById("session-length");
                  if (i.innerHTML !== a) {
                    var l = +c(r.innerHTML);
                    l === +h.innerHTML ? e() : t(new Error("Timer has switched back to Session time, but it didn't start with the correct value: " + c(r.innerHTML) + " instead of " + h.innerHTML))
                  } else t(new Error("Timer has reached zero but didn't switch back to Session time"));
                  o.disconnect()
                }
              })
          })
        })
      }), describe("#Audio", function() {
        var e = 0;
        e++, it("".concat(e, '. When a countdown reaches zero (NOTE: timer MUST reach\n      00:00), a sound indicating that time is up should play. This should\n      utilize an HTML5 <audio> tag and have a corresponding id="beep".'), function() {
          return this.timeout(5e3), (0, n.clickButtonsById)(Array(60).fill(t)), (0, n.clickButtonsById)([i]), new Promise(function(e, t) {
            var a = document.getElementById("time-left"),
              r = document.getElementById("break-length"),
              n = f("time-left", function() {
                parseInt(a.innerHTML.slice(0, 2), 10) > 5 ? t(new Error("Test timed out because Break time didn't start with the correct value: " + (parseInt(c(a.innerHTML), 10) + 1) + " instead of " + r.innerHTML)) : "00:00" === a.innerHTML && (p(function() {
                  var a = document.getElementById("beep");
                  a && !a.paused ? e() : t(new Error('Timer has reached zero but, either there is not audio tag with ID "beep" on the page, or it\'s not playing while it should.'))
                }, 200), n.disconnect())
              })
          })
        }), e++, it("".concat(e, '. The audio element with id="beep" must be 1 second or\n      longer.'), function() {
          r.assert.isAbove(document.getElementById("beep").duration, 1, 'Audio element with id="beep" is not at least 1 second long.')
        }), e++, it("".concat(e, '. The audio element with id of "beep" must stop playing and\n      be rewound to the beginning when the element with the id of "reset" is\n      clicked.'), function() {
          document.getElementById("beep").play(), l(), r.assert.isTrue(document.getElementById("beep").paused, "Audio element was not stopped when reset was clicked."), r.assert.equal(0, document.getElementById("beep").currentTime, "Audio element was not rewound when reset was clicked. HINT: use the currentTime property of the audio element to rewind.")
        })
      })
    })
  };
  var r = a(0),
    n = a(3),
    s = a(1)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var e = "one",
      t = "two",
      a = "three",
      o = "five",
      i = "nine",
      h = "zero",
      l = "multiply",
      c = "subtract",
      u = "divide",
      f = "clear",
      p = "equals",
      m = "decimal";

    function g() {
      document.getElementById("clear") && (0, n.clickButtonsById)([f])
    }
    describe("Calculator tests", function() {
      beforeEach(function() {
        g()
      }), after(function() {
        g()
      }), describe("#Technology Stack", function() {
        it(s.frontEndLibrariesStack, function() {
          return !0
        })
      }), describe("#Tests", function() {
        var s = 0;
        s++, it("".concat(s, '. My calculator should contain a clickable element\n      containing an "=" (equal sign) with a corresponding id="equals"'), function() {
          r.assert.isNotNull(document.getElementById(p)), r.assert.strictEqual(document.getElementById(p).innerHTML, "=", 'The element with id="equal" should have an "=" as its content ')
        }), s++, it("".concat(s, '. My calculator should contain 10 clickable elements\n      containing one number each from 0-9, with the following corresponding\n      IDs: id="zero", id="one", id="two", id="three", id="four", id="five",\n      id="six", id="seven", id="eight", and id="nine"'), function() {
          r.assert.isNotNull(document.getElementById(h), 'id="zero" is not yet defined '), r.assert.isNotNull(document.getElementById(e), 'id="one" is not yet defined '), r.assert.isNotNull(document.getElementById(t), 'id="two" is not yet defined '), r.assert.isNotNull(document.getElementById(a), 'id="three" is not yet defined '), r.assert.isNotNull(document.getElementById("four"), 'id="four" is not yet defined '), r.assert.isNotNull(document.getElementById(o), 'id="five" is not yet defined '), r.assert.isNotNull(document.getElementById("six"), 'id="six" is not yet defined '), r.assert.isNotNull(document.getElementById("seven"), 'id="seven" is not yet defined '), r.assert.isNotNull(document.getElementById("eight"), 'id="eight" is not yet defined '), r.assert.isNotNull(document.getElementById(i), 'id="nine" is not yet defined ')
        }), s++, it("".concat(s, '. My calculator should contain 4 clickable elements each\n      containing one of the 4 primary mathematical operators with the following\n      corresponding IDs: id="add", id="subtract", id="multiply",\n      id="divide"'), function() {
          r.assert.isNotNull(document.getElementById("add"), 'id="add" is not yet defined '), r.assert.isNotNull(document.getElementById(c), 'id="subtract" is not yet defined '), r.assert.isNotNull(document.getElementById(l), 'id="multiply" is not yet defined '), r.assert.isNotNull(document.getElementById(u), 'id="divide" is not yet defined ')
        }), s++, it("".concat(s, '. My calculator should contain a clickable element\n      containing a "." (decimal point) symbol with a corresponding\n      id="decimal"'), function() {
          r.assert.isNotNull(document.getElementById(m), 'id="decimal" is not yet defined '), r.assert.strictEqual(document.getElementById(m).innerHTML, ".", 'The element with id="decimal" should have "." as its content ')
        }), s++, it("".concat(s, '. My calculator should contain a clickable element with an\n      id="clear"'), function() {
          r.assert.isNotNull(document.getElementById(f), 'id="clear" is not yet defined ')
        }), s++, it("".concat(s, '. My calculator should contain an element to display values\n      with a corresponding id="display"'), function() {
          r.assert.isNotNull(document.getElementById("display"), 'id="display" is not yet defined ')
        }), s++, it("".concat(s, '. At any time, pressing the clear button clears the input\n      and output values, and returns the calculator to its initialized state; 0\n      should be shown in the element with the id of "display"'), function() {
          (0, n.clickButtonsById)([o, l, e, "add", o, "add", i, t, p, f]), r.assert.strictEqual(document.getElementById("display").innerHTML, "0", 'Element with with id="display" should show 0 ')
        }), s++, it("".concat(s, '. As I input numbers, I should be able to see my input in\n      the element with the id of "display"'), function() {
          (0, n.clickButtonsById)([e, t, a]), r.assert.strictEqual(document.getElementById("display").innerHTML, "123", 'Numbers do not display correctly within id="display" ')
        }), s++, it("".concat(s, '. In any order, I should be able to add, subtract, multiply\n      and divide a chain of numbers of any length, and when I hit "=", the\n      correct result should be shown in the element with the id of "display"'), function() {
          (0, n.clickButtonsById)([a, "add", o, l, "six", c, t, u, "four", p]), (0, r.assert)("32.5" === document.getElementById("display").innerHTML || "11.5" === document.getElementById("display").innerHTML, "The expression 3 + 5 * 6 - 2 / 4 should produce 32.5 or 11.5 as an\n          answer, depending on the logic your calculator uses\n          (formula vs. immediate execution) "), g(), (0, n.clickButtonsById)([o, c, i, "add", o, p]), (0, r.assert)("1" === document.getElementById("display").innerHTML, "The expression 5 - 9 + 5 should produce a result of 1 ")
        }), s++, it("".concat(s, ". When inputting numbers, my calculator should not allow a\n      number to begin with multiple zeros."), function() {
          (0, n.clickButtonsById)([h, h, h]), r.assert.strictEqual(document.getElementById("display").innerHTML, "0", "An input of 0 0 0 should display 0 ")
        }), s++, it("".concat(s, '. When the decimal element is clicked, a "." should append to\n      the currently displayed value; two "." in one number should not be\n      accepted'), function() {
          (0, n.clickButtonsById)([o, m, m, h]), r.assert.strictEqual(document.getElementById("display").innerHTML, "5.0", 'An input of "5 . . 0" should display 5.0 '), g(), (0, n.clickButtonsById)([o, m, o, m, o]), r.assert.strictEqual(document.getElementById("display").innerHTML, "5.55", 'An input of "5 . 5 . 5" should display 5.55 ')
        }), s++, it("".concat(s, ". I should be able to perform any operation (+, -, *, /) on\n      numbers containing decimal points"), function() {
          (0, n.clickButtonsById)([e, h, m, o, c, o, m, o, p]), r.assert.strictEqual(document.getElementById("display").innerHTML, "5", 'The expression "10.5 - 5.5" should produce an output of "5" '), g(), (0, n.clickButtonsById)([o, l, o, m, o, p]), r.assert.strictEqual(document.getElementById("display").innerHTML, "27.5", 'The expression "5 * 5.5" should produce an output of "27.5" '), g(), (0, n.clickButtonsById)([e, h, m, o, "add", o, m, o, p]), r.assert.strictEqual(document.getElementById("display").innerHTML, "16", 'The expression "10.5 + 5.5" should produce an output of "16" '), g(), (0, n.clickButtonsById)([e, h, u, t, m, o, p]), r.assert.strictEqual(document.getElementById("display").innerHTML, "4", 'The expression "10 / 2.5" should produce an output of "4" ')
        }), s++, it("".concat(s, ". If 2 or more operators are entered consecutively, the\n      operation performed should be the last operator entered"), function() {
          (0, n.clickButtonsById)([o, l, c, "add", o, p]), r.assert.strictEqual(document.getElementById("display").innerHTML, "10", 'The sequence "5 * - + 5" = should produce an output of "10" '), g(), (0, n.clickButtonsById)([o, "add", "add", o, p]), r.assert.strictEqual(document.getElementById("display").innerHTML, "10", 'The sequence "5 + + 5" = should produce an output of "10" ')
        }), s++, it("".concat(s, '. Pressing an operator immediately following "=" should\n      start a new calculation that operates on the result of the previous\n      evaluation'), function() {
          (0, n.clickButtonsById)([o, c, t, p, u, t, p]), r.assert.strictEqual(document.getElementById("display").innerHTML, "1.5", 'The sequence "5 - 2 = / 2 =" should produce an output of "1.5" '), g(), (0, n.clickButtonsById)([o, "add", o, p, "add", a, p]), r.assert.strictEqual(document.getElementById("display").innerHTML, "13", 'The sequence "5 + 3 = + 3 =" should produce an output of "13" ')
        }), s++, it("".concat(s, '. My calculator should have several decimal places of\n      precision when it comes to rounding (note that there is no exact\n      standard, but you should be able to handle calculations like "2 / 7" with\n      reasonable precision to at least 4 decimal places)'), function() {
          (0, n.clickButtonsById)([t, u, "seven", p]), r.assert.isOk(/0?\.2857\d*/.test(document.getElementById("display").innerHTML), 'The expression "2 / 7" should produce an output number with at least 4 decimal places of precision ')
        })
      })
    })
  };
  var r = a(0),
    n = a(3),
    s = a(1)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("Markdown Previewer tests", function() {
      var e, t, a = document.getElementById("editor"),
        s = document.getElementById("preview");

      function o(e) {
        var t = o.d || (o.d = {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: null
        });
        return t.value = e, t
      }

      function i(e) {
        if (a.value = e, s.innerHTML !== marked(e) || a.value !== e) {
          var t = new Event("input", {
            bubbles: !0
          });
          if (Object.defineProperty(a, "value", o(e)), a.dispatchEvent(t), s.innerHTML === marked(e)) return
        }
        var r = new Event("keyup", {
          bubbles: !0
        });
        a.dispatchEvent(r)
      }
      a && (e = a.value), s && (t = s.innerHTML), after(function() {
        delete a.value, a.value = e
      }), describe("#Technology Stack", function() {
        it(n.frontEndLibrariesStack, function() {
          return !0
        })
      }), describe("#Tests", function() {
        var n = 0;
        n++, it("".concat(n, '. I can see a <textarea> element with corresponding\n      id="editor"'), function() {
          r.assert.isNotNull(a, "#editor is not defined "), r.assert.strictEqual(a.nodeName, "TEXTAREA", "#editor should be a <textarea> element ")
        }), n++, it("".concat(n, '. I can see an element with corresponding id="preview"'), function() {
          r.assert.isNotNull(s, "#preview is not defined ")
        }), n++, it("".concat(n, ". When I enter text into the #editor element, the #preview\n      element is updated as I type to display the content of the textarea"), function() {
          i(""), i("a"), r.assert.strictEqual(s.innerText.slice(0, 1), "a", "#preview is not being updated as I type into #editor (should update on every keyup) ")
        }), n++, it("".concat(n, ". When I enter GitHub flavored markdown into the #editor\n      element, the text is rendered as HTML in the #preview element as I type\n      (Hint: You don't need to parse Markdown yourself - you can import the\n      Marked library for this: https://cdnjs.com/libraries/marked)"), function() {
          var e = "The markdown in #editor is not being interpreted correctly and/or rendered into #preview ";
          i(""), r.assert.strictEqual(s.innerHTML, "", "#preview's only children should be those rendered by marked.js "), i("testing"), r.assert.strictEqual(s.innerHTML, "<p>testing</p>\n", e), i(a.value + " and..."), r.assert.strictEqual(s.innerHTML, "<p>testing and...</p>\n", e), i("# h1 \n## h2"), r.assert.strictEqual(s.innerHTML, '<h1 id="h1">h1</h1>\n<h2 id="h2">h2</h2>\n', e), i("**bold**"), r.assert.strictEqual(s.innerHTML, "<p><strong>bold</strong></p>\n", e)
        }), n++, it("".concat(n, ". When my markdown previewer first loads, the default text in\n      the #editor field should contain valid markdown that represents at least\n      one of each of the following elements: a header (H1 size), a sub header\n      (H2 size), a link, inline code, a code block, a list item, a blockquote,\n      an image, and bolded text"), function() {
          var t;
          r.assert.notStrictEqual(e, "undefined", "#editor value is undefined "), r.assert.notStrictEqual(e, "", "#editor does not contain any text "), i(e), t = a.value, r.assert.notStrictEqual(t.search(/#\s.+/), -1, "write some markdown representing an <h1> "), r.assert.notStrictEqual(t.search(/##\s.+/), -1, "write some markdown representing an <h2> "), r.assert.notStrictEqual(t.search(/\[.+\]\(.+\..+\)/), -1, "write some markdown representing an <a> "), r.assert.notStrictEqual(t.search(/`.+`/), -1, "write some markdown representing inline <code> "), r.assert.notStrictEqual(t.search(/```[^]+```/), -1, "write some markdown representing a codeblock, i.e. <pre><code>...</code></pre> "), r.assert.notStrictEqual(t.search(/(?:[-+*]|\d\.)\s[^|\s-*].+/), -1, "write some markdown representing an <li> item "), r.assert.notStrictEqual(t.search(/^>.+/m), -1, "write some markdown representing a <blockquote> "), r.assert.notStrictEqual(t.search(/!\[.*\]\(.+\..+\)/), -1, "write some markdown representing an <image> "), r.assert.notStrictEqual(t.search(/(\*\*|__).+\1/), -1, "write some markdown representing <strong> text ")
        }), n++, it("".concat(n, ". When my markdown previewer first loads, the default\n      markdown in the #editor field should be rendered as HTML in the #preview\n      element"), function() {
          var n, o, h, l, c = a.value;
          i(e), r.assert.notStrictEqual(s.innerHTML, "", "#preview should have inner HTML "), r.assert.strictEqual(s.innerHTML, t, "#editor's  markdown does not render correctly on window load "), r.assert.isAtLeast(document.querySelectorAll("#preview h1").length, 1, "#preview does not contain at least one <h1> "), r.assert.isAtLeast(document.querySelectorAll("#preview h2").length, 1, "#preview does not contain at least one <h2> "), r.assert.isAtLeast(document.querySelectorAll("#preview a").length, 1, "#preview does not contain at least one <a> "), r.assert.isAtLeast(document.querySelectorAll("#preview code").length, 1, "#preview does not contain at least one <code> "), r.assert.isAtLeast(document.querySelectorAll("#preview pre").length, 1, "#preview does not contain at least one <pre> "), r.assert.isAtLeast(document.querySelectorAll("#preview li").length, 1, "#preview does not contain at least one <li> "), r.assert.isAtLeast(document.querySelectorAll("#preview blockquote").length, 1, "#preview does not contain at least one <blockquote> "), r.assert.isAtLeast(document.querySelectorAll("#preview img").length, 1, "#preview does not contain at least one <img> "), r.assert.isAtLeast(document.querySelectorAll("#preview strong").length, 1, "#preview does not contain at least one <strong> ");
          var u = RegExp(/^#\s.*/m),
            f = RegExp(/^##\s.*/m),
            p = RegExp(/.*[\n\r]=+/),
            m = RegExp(/.*[\n\r]--+/);
          n = u.test(c) ? u.exec(c)[0].slice(2) : p.exec(c)[0].split(/[\n\r]/)[0], o = [], document.querySelectorAll("#preview h1").forEach(function(e) {
            e.innerText === n && o.push(e)
          }), r.assert.isAtLeast(o.length, 1, "#preview does not contain the H1 element represented by the markdown in the #editor field with the inner text " + n + " "), h = f.test(c) ? f.exec(c)[0].slice(3) : m.exec(c)[0].split(/[\n\r]/)[0], l = [], document.querySelectorAll("#preview h2").forEach(function(e) {
            e.innerText === h && l.push(e)
          }), r.assert.isAtLeast(l.length, 1, "#preview does not contain the H2 element represented by the markdown in the #editor field with the inner text " + h + " ")
        }), n++, it("".concat(n, ". OPTIONAL BONUS (you do not need to make this test pass):\n      When I click a link rendered by my markdown previewer, the link is opened\n      up in a new tab (HINT: read the Marked.js docs for this one!)"), function() {
          var e = document.querySelectorAll("#preview a"),
            t = document.querySelectorAll('#preview a[target="_blank"]');
          r.assert.isAtLeast(e.length, 1, "There should be at least one link"), r.assert.strictEqual(e.length, t.length, "All Links should target _blank")
        }), n++, it("".concat(n, ". OPTIONAL BONUS (you do not need to make this test pass):\n      My markdown previewer interprets carriage returns and renders them as <br>\n      (line break) elements"), function() {
          var t;
          i("First line.\n           Second line, same paragraph.\n           Third line, same paragraph."), t = (s.innerHTML.match(/<br>/g) || []).length, i(e), r.assert.strictEqual(t, 2, "See the marked.js options for this and other cool features ")
        })
      })
    })
  };
  var r = a(0),
    n = a(1)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    describe("#Drum Machine tests", function() {
      var e = document.querySelectorAll(".drum-pad"),
        t = document.querySelectorAll(".drum-pad .clip");

      function a() {
        var e = a.d || (a.d = {
          enumerable: !1,
          writable: !0,
          configurable: !0
        });
        return e
      }

      function s(e, t, a) {
        var r = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
        r.initEvent && r.initEvent(t, !0, !0), r.keyCode = a, r.which = a, e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent("on" + t, r)
      }

      function o(e) {
        s(e, "mousedown", 0), s(e, "click", 0), s(e, "mouseup", 0)
      }
      describe("#Technology Stack", function() {
        it(n.frontEndLibrariesStack, function() {
          return !0
        })
      }), describe("#Tests", function() {
        var n = 0;
        before(function() {
          t.forEach(function(e) {
            Object.defineProperty(e, "paused", a)
          })
        }), after(function() {
          t.forEach(function(e) {
            e.pause()
          })
        }), n++, it("".concat(n, '. I should be able to see an outer container with a\n      corresponding id="drum-machine" that contains all other elements'), function() {
          r.assert.isNotNull(document.getElementById("drum-machine")), (0, r.assert)(document.querySelectorAll("#drum-machine div, #drum-machine .drum-pad, #drum-machine #display, #drum-machine .clip").length, "The #drum-machine element must contain other elements ")
        }), n++, it("".concat(n, '. Within #drum-machine I can see an element with\n      corresponding id="display".'), function() {
          r.assert.isNotNull(document.getElementById("display"))
        }), n++, it("".concat(n, '. Within #drum-machine I can see 9 clickable "drum pad"\n      elements, each with a class name of "drum-pad", a unique id that describes\n      the audio clip the drum pad will be set up to trigger, and an inner text\n      that corresponds to one of the following keys on the keyboard: Q, W, E, A,\n      S, D, Z, X, C. The drum pads MUST be in this order.'), function() {
          var t = [];
          e.forEach(function(e) {
            t.push(e.innerText.replace(/\s/g, "")), r.assert.strictEqual(e.hasAttribute("id"), !0, "Each .drum-pad element must have an id attribute ")
          }), r.assert.isAtLeast(e.length, 9, 'There should be at least 9 elements with the class "drum-pad" '), r.assert.includeMembers(t, ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"], 'Each .drum-pad\'s inner text should be one of the following letters (all letters must be represented): "Q", "W", "E", "A", "S", "D", "Z", "X", "C" ')
        }), n++, it("".concat(n, '. Within each .drum-pad, there should be an HTML5 <audio>\n      element which has a src attribute pointing to an audio clip, a class name\n      of "clip", and an id corresponding to the inner text of its parent\n      .drum-pad (e.g. id="Q", id="W", id="E" etc.).'), function() {
          r.assert.isAtLeast(t.length, 9, 'Each .drum-pad should have a child element with the class of "clip" '), t.forEach(function(e) {
            r.assert.strictEqual(e.nodeName, "AUDIO", "Each .clip element should be an HTML5 <audio> element "), r.assert.strictEqual(e.hasAttribute("src"), !0, 'Each <audio> element should have a "src" attribute '), r.assert.strictEqual(e.hasAttribute("id"), !0, 'Each <audio> element should have an "id" attribute '), r.assert.strictEqual(e.id, e.parentElement.innerText.replace(/\s/g, ""), "Each <audio> element should have an id equal to its parent .drum-pad's inner-text ")
          })
        }), n++, it("".concat(n, ". When I click on a .drum-pad element, the audio clip\n      contained in its child <audio> element should be triggered."), function() {
          r.assert.isAtLeast(t.length, 9, "Audio elements do not exist "), t.forEach(function(e) {
            o(e.parentElement), r.assert.isNotOk(e.paused, 'The <audio> element with id="' + e.id + '" does not play when the ' + e.id + " .drum-pad is clicked ")
          })
        }), n++, it("".concat(n, '. When I press the trigger key associated with each\n      .drum-pad, the audio clip contained in its child <audio> element should be\n      triggered (e.g. pressing the Q key should trigger the drum pad which\n      contains the string "Q", pressing the W key should trigger the drum pad\n      which contains the string "W", etc.).'), function() {
          this.timeout(900);
          var e = [81, 87, 69, 65, 83, 68, 90, 88, 67];
          return r.assert.isAtLeast(t.length, 9, "Audio elements do not exist "), new Promise(function(a) {
            setTimeout(function() {
              t.forEach(function(t, a) {
                s(t.parentElement, "keydown", e[a]), r.assert.isNotOk(document.getElementById(t.id).paused, "No audio plays when the " + t.id + " key is pressed ")
              }), a()
            }, 800)
          })
        }), n++, it("".concat(n, ". When a .drum-pad is triggered, a string describing the\n      associated audio clip is displayed as the inner text of the #display\n      element (each string must be unique)."), function() {
          this.timeout(900);
          var t = [];
          return new Promise(function(a, r) {
            setTimeout(function() {
              e.forEach(function(e) {
                o(e), t.push(document.getElementById("display").innerText)
              }), 1 === (t = t.filter(function(e, a) {
                return t[0] === t[a]
              })).length ? a() : r(new Error('Each time a drum pad is triggered, a unique string should be displayed in the element with the id "display"'))
            }, 800)
          })
        })
      })
    })
  };
  var r = a(0),
    n = a(1)
}, function(e, t, a) {
  (e.exports = a(10)(!1)).push([e.i, "#fcc_foldout_menu {\n  background-color: rgba(255, 255, 204, 0.9);\n  border: 0px solid #fff;\n  border-radius: 0px 0px 5px 0px;\n  box-shadow: 1px 1px 10px rgba(128, 128, 128, 0.6);\n  font-family: Noto Sans, arial, sans-serif;\n  height: 210px;\n  left: 0;\n  pointer-events: all;\n  position: absolute;\n  top: 0;\n  transition: .5s;\n  width: 320px;\n  z-index: 99997;\n}\n\n#fcc_toggle:checked ~ #fcc_foldout_menu {\n  left: -330px;\n  transition: .5s ease-in-out;\n}\n\n#fcc_toggle:checked ~ #fcc_test_suite_indicator_wrapper {\n  display: none;\n}\n\n#fcc_toggle {\n  height: 24px;\n  width: 25px;\n  position: fixed;\n  top: 7px;\n  left: 20px;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 99999;\n  pointer-events: auto;\n}\n\n#fcc_foldout_toggler {\n  position: absolute;\n  top: 20px;\n  left: 15px;\n  z-index: 99998;\n  pointer-events: auto;\n}\n\n#fcc_foldout_toggler_background {\n  width: 39px;\n  height: 30px;\n  background-color: rgba(255, 255, 204, 0.08);\n  transform-origin: 0% 50%;\n  position: absolute;\n  top: -13px;\n  left: -7px;\n  z-index: -1;\n}\n\n.transform_top {\n  opacity: 1;\n  transform: rotate(45deg) translate(-1px, -1px);\n}\n\n.transform_middle {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n.transform_bottom {\n  opacity: 1;\n  transform: rotate(-45deg);\n}\n\n.fcc_hamburger {\n  position: relative;\n  width: 25px;\n  height: 4px;\n  display: block;\n  background: darkgreen !important;\n  border-radius: 5px !important;\n  transform-origin: 4px 0px;\n  transition: transform 0.4s ease, opacity 0.55s ease;\n  left: unset;\n}\n\n#hamburger_top {\n  position: absolute;\n  top: -7.5px;\n  transform-origin: 0% 50%;\n}\n\n#hamburger_middle {\n  margin-top: 0.5px;\n  margin-bottom: 0.5px;\n}\n\n#hamburger_bottom {\n  position: absolute;\n  bottom: -7.5px;\n  transform-origin: 0 50%;\n}\n\n#fcc_test_suite_indicator_wrapper {\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  left: unset;\n  height: auto;\n}\n\n#fcc_test_suite_indicator {\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  font-size: 12px;\n  background-color: rgba(255, 255, 204, 0.9);\n  color: black;\n  padding: 3px 5px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px rgba(128, 128, 128, 0.6);\n  font-family: Noto Sans, arial, sans-serif;\n}\n", ""])
}, function(e, t, a) {
  var r = a(37);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var n = {
    transform: void 0
  };
  a(9)(r, n);
  r.locals && (e.exports = r.locals)
}, function(e, t, a) {
  (t = e.exports = a(10)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Noto+Sans);", ""]), t.push([e.i, "/* Please note making changes to the styles here might make some of the project\ntests no longer work, or even just give a false positive. Especially if you\nchange a selector name.\nThe project tests generally try to filter out any CSS selectors that\ncontain 'fcc_test', or that contain 'mocha'. So please make sure the\nselectors here use that naming convention.\nSee the following project tests which rely on filtering out the CSS rules\nused here. If you find other project tests that rely on the CSS here,\nplease add them to the list:\n- styleSheetUtils.js\n- product-landing-page-tests.js\n*/\n\n#mocha .test .html-error,#mocha .test pre{\n  float:left;\n  clear:left;\n  word-wrap:break-word;\n}\n#mocha ul,#mocha-stats li{\n  list-style:none;\n}\n\n#mocha h1,#mocha h2{\n  margin:0;\n}\n\ndiv#mocha{\n  font:20px/1.5 \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  margin:60px 50px;\n}\n\n#mocha li {\n  display: list-item;\n}\n\n#mocha li,#mocha ul{\n  margin:0;\n  padding:0;\n}\n#mocha .suite,#mocha .test{\n  margin-left:15px;\n}\n#mocha h1{\n  margin-top:15px;\n  font-size:1em;\n  font-weight:200;\n}\n#mocha h1 a{\n  text-decoration:none;\n  color:inherit;\n}\n#mocha h1 a:hover{\n  text-decoration:underline;\n}\n#mocha .suite .suite h1{\n  margin-top:0;\n  font-size:.8em;\n}\n#mocha .hidden{\n  display:none;\n}\n#mocha h2{\n  font-size:12px;\n  font-weight:400;\n  cursor:pointer;\n}\n#mocha .test{\n  overflow:hidden;\n  background-color: unset;\n}\n#mocha .test.pending:hover h2::after{\n  content:'(pending)';\n  font-family:arial,sans-serif;\n}\n#mocha .test.pass.medium .duration{\n  background:#c09853;\n}\n#mocha .test.pass.slow .duration{\n  background:#b94a48;\n}\n#mocha .test.pass::before{\n  content:'\\2713';\n  font-size:12px;\n  display:block;\n  float:left;\n  margin-right:5px;\n  color:#00d6b2;\n}\n#mocha .test.pass .duration{\n  font-size:9px;\n  margin-left:5px;\n  padding:2px 5px;\n  color:#fff;\n  -webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.2);\n  -moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.2);\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.2);\n  -webkit-border-radius:5px;\n  -moz-border-radius:5px;\n  -ms-border-radius:5px;\n  -o-border-radius:5px;\n  border-radius:5px;\n}\n#mocha .test.pass.fast .duration{\n  display:none;\n}\n#mocha .test.pending{\n  color:#0b97c4;\n}\n#mocha .test.pending::before{\n  content:'\\25E6';\n  color:#0b97c4;\n}\n#mocha .test.fail{\n  color:#c00;\n}\n#mocha .test.fail pre{\n  color:#000;\n}\n#mocha .test.fail::before{\n  content:'\\2716';\n  font-size:12px;\n  display:block;\n  float:left;\n  margin-right:5px;\n  color:#c00;\n}\n#mocha .test pre.error{\n  color:#c00;\n  max-height:300px;\n  overflow:auto;\n}\n#mocha .test .html-error{\n  overflow:auto;\n  color:#000;\n  line-height:1.5;\n  display:block;\n  font:12px/1.5 monaco,monospace;\n  margin:5px;\n  padding:15px;\n  border:1px solid #eee;\n  max-width:85%;\n  max-width:-webkit-calc(100% - 42px);\n  max-width:-moz-calc(100% - 42px);\n  max-width:calc(100% - 42px);\n  max-height:300px;\n  border-bottom-color:#ddd;\n  -webkit-box-shadow:0 1px 3px #eee;\n  -moz-box-shadow:0 1px 3px #eee;\n  box-shadow:0 1px 3px #eee;\n  -webkit-border-radius:3px;\n  -moz-border-radius:3px;\n  border-radius:3px;\n}\n#mocha .test .html-error pre.error{\n  border:none;\n  -webkit-border-radius:0;\n  -moz-border-radius:0;\n  border-radius:0;\n  -webkit-box-shadow:0;\n  -moz-box-shadow:0;\n  box-shadow:0; \n  padding:0; \n  margin:18px 0 0;\n  max-height:none;\n}\n#mocha .test pre{\n  display:block;\n  font:12px/1.5 monaco,monospace;\n  margin:5px;\n  padding:15px;\n  border:1px solid #eee;\n  max-width:85%;\n  max-width:-webkit-calc(100% - 42px);\n  max-width:-moz-calc(100% - 42px);\n  max-width:calc(100% - 42px);\n  border-bottom-color:#ddd;\n  -webkit-box-shadow:0 1px 3px #eee;\n  -moz-box-shadow:0 1px 3px #eee;\n  box-shadow:0 1px 3px #eee;\n  -webkit-border-radius:3px;\n  -moz-border-radius:3px;\n  border-radius:3px;\n}\n#mocha .test h2{\n  position:relative;\n  display: block;\n}\n#mocha .test a.replay{\n  display:none;\n}\n#mocha-report.fail .test.pass,#mocha-report.pass .test.fail,#mocha-report.pending .test.fail,#mocha-report.pending .test.pass{\n  display:none;\n}\n#mocha-report.pending .test.pass.pending{\n  display:block;\n}\n#mocha-error{\n  color:#c00;\n  font-size:1.5em;\n  font-weight:100;\n  letter-spacing:1px;\n}\n#mocha-stats{\n  position:fixed;\n  top:12px;\n  right:10px;\n  font-size:12px;\n  margin:0;\n  color:#888;\n  z-index:1;\n}\n#mocha-stats .progress{\n  float:right;\n  padding-top:0;\n  height:auto;\n  -webkit-box-shadow:none;\n  -moz-box-shadow:none;\n  box-shadow:none;\n  background-color:initial;\n}\n#mocha-stats em{\n  color:#000;\n  font-style: italic;\n  padding: 0;\n  margin: 0;\n}\n#mocha-stats a{\n  text-decoration:none;\n  color:inherit;\n  padding: 0;\n  margin: 0;\n}\n#mocha-stats a:hover{\n  border-bottom:1px solid #eee;\n}\n#mocha-stats li{\n  display:inline-block;\n  margin:0 5px;\n  padding-top:11px;\n  position: unset;\n}\n#mocha-stats canvas{\n  width:40px;\n  height:40px;\n}\n#mocha code .comment{\n  color:#ddd;\n}\n#mocha code .init{\n  color:#2f6fad;\n}\n#mocha code .string{\n  color:#5890ad;\n}\n#mocha code .keyword{\n  color:#8a6343;\n}\n#mocha code .number{\n  color:#2f6fad;\n}\n@media screen and (max-device-width:480px){\n  #mocha{\n    margin:60px 0;\n  }\n  #mocha #stats{\n    position:absolute;\n  }\n}\n\n/* TEST/MESSAGE CENTER CSS */\n\ndiv#fcc_test_message-box {\n  font-size: 20px !important;\n  font-family: Noto Sans, arial, sans-serif !important;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.8) !important;\n  transition: all .5s;\n  z-index: 100000;\n  overflow: auto;\n}\n\n.fcc_test_message-box-hidden {\n  visibility: hidden;\n  opacity: 0;\n  top: -300px;\n}\n\n.fcc_test_message-box-shown {\n  visibility: visible;\n  opacity: 1;\n  top: 0;\n}\n\ndiv.fcc_test_message-box-content {\n  position: relative;\n  color: black !important;\n  background-color: white !important;\n  top: 10vh;\n  width: 80%;\n  margin: 0 auto !important;\n  text-align: initial;\n  border-radius: 10px !important;\n  display: flex;\n  flex-direction: column;\n}\n\n.fcc_test_message-box-header,\n.fcc_test_message-box-footer{\n  position: relative;\n  flex: none;\n  box-sizing: border-box !important;\n  padding: 10px !important;\n  margin: 0;\n}\n\n.fcc_test_message-box-header {\n  border-bottom: 1px solid rgb(229,229,229);\n  height: 60px;\n}\n\n.fcc_test_message-box-header .title {\n  float: left;\n  font-size: 30px !important;\n  line-height: 40px !important;\n  margin-left: 10px !important;\n  padding: 0;\n  height: auto;\n  border: unset;\n}\n\ndiv.fcc_test_message-box-body {\n  flex: 1;\n  position: static;\n  max-width: 100%;\n}\n\n.fcc_test_message-box-footer {\n  border-top: 1px solid rgb(229,229,229);\n  height: 70px;\n}\n\n.fcc_test_message-box-close-btn {\n  float: right;\n  color: black;\n  background-color: white;\n  border: 1px solid rgb(229,229,229);\n  border-radius: 4px;\n  padding: 10px 20px !important;\n  margin-bottom: 10px;\n  transition: all .3s;\n  line-height: 30px;\n  height: auto;\n}\n.fcc_test_message-box-close-btn:hover {\n  color: white;\n  background-color: black;\n}\n\ndiv#mocha {\n  margin: 10px !important;\n  position: static;\n}\n\n#mocha .test pre {\n  background-color: rgb(245, 245, 245) !important;\n}\n\n#mocha-stats {\n  position: absolute;\n  left: unset;\n}\n\n#mocha ul {\n  max-width: initial;\n  margin: initial !important;\n  text-align: initial;\n}\n#mocha * {\n  font-family: Noto Sans, arial, sans-serif !important;\n  border: none !important;\n}\n\ndiv {\n  position: static;\n}\n\n", ""])
}, function(e, t, a) {
  var r = a(39);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var n = {
    transform: void 0
  };
  a(9)(r, n);
  r.locals && (e.exports = r.locals)
}, function(e, t) {
  e.exports = function(e) {
    var t = "undefined" != typeof window && window.location;
    if (!t) throw new Error("fixUrls requires window.location");
    if (!e || "string" != typeof e) return e;
    var a = t.protocol + "//" + t.host,
      r = a + t.pathname.replace(/\/[^\/]*$/, "/");
    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
      var n, s = t.trim().replace(/^"(.*)"$/, function(e, t) {
        return t
      }).replace(/^'(.*)'$/, function(e, t) {
        return t
      });
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(s) ? e : (n = 0 === s.indexOf("//") ? s : 0 === s.indexOf("/") ? a + s : r + s.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
    })
  }
}, function(e, t, a) {
  (e.exports = a(10)(!1)).push([e.i, "#fcc_foldout_menu_inner {\n  height: 0px;\n  position: relative;\n  background-color: transparent;\n}\n\n#fcc_foldout_menu_inner label {\n  border-radius: 0px;\n  box-shadow: none;\n  border: none;\n  color: black;\n  cursor: default;\n  font-size: 15px;\n  height: 20px;\n  left: 20px;\n  margin: 0px;\n  padding: 0px;\n  position: absolute;\n  top: 38px;\n  width: fit-content;\n  z-index: 0;\n}\n\n#fcc_foldout_menu_inner select {\n  background-color: buttonface;\n  border: 1px solid;\n  border-color: rgb(169, 169, 169);\n  border-radius: 0px;\n  box-shadow: none;\n  color: black;\n  display: inherit;\n  font-size: 12px;\n  height: auto;\n  left: 18px;\n  margin: 0px;\n  padding: 0px;\n  position: absolute;\n  top: 61px;\n  width: auto;\n}\n\nbutton.fcc_foldout_buttons {\n  background-color: rgba(128, 128, 128, 0.7);\n  border: none;\n  border-radius: 4px;\n  box-shadow: 1px 1px 4px black;\n  box-sizing: content-box;\n  color: white;\n  cursor: pointer;\n  display: block;\n  font-size: 15px;\n  height: 20px;\n  left: 20px;\n  margin: 0px;\n  padding: 10px;\n  position: absolute;\n  text-align: center;\n  width: 110px;\n  z-index: 0;\n}\n\n#fcc_test_message-box-rerun-button {\n  top: 90px;\n  transition: all .3s;\n}\n\n#fcc_test_message-box-rerun-button:hover {\n  color: white;\n  background-color: black;\n}\n\n#fcc_test_button {\n  top: 140px;\n}\n\nbutton.fcc_test_btn-default {\n  background-color: rgba(128, 128, 128, 0.7);\n}\n\nbutton.fcc_test_btn-executing {\n  background-color: rgba(255, 153, 0, 0.9);\n}\n\nbutton.fcc_test_btn-error {\n  background-color: rgba(255, 0, 0, 0.7);\n}\n\nbutton.fcc_test_btn-success {\n  background-color: rgba(81, 211, 81, 0.9);\n}\n\n#fcc_report-bug {\n  position: absolute;\n  top: 186px;\n  left: 20px;\n  width: 110px;\n  padding: 0 10px;\n  font-size: 12px;\n  text-align: center;\n  height: auto;\n  box-shadow: none;\n}\n\n#fcc_legend_wrapper {\n  position: absolute;\n  top: 95px;\n  left: 160px;\n  width: 125px;\n  vertical-align: top;\n  text-align: left;\n  font-size: 15px;\n  background: none;\n  box-shadow: none;\n  height: auto;\n}\n\n#fcc_legend_wrapper span {\n  height: 15px;\n  margin-top: 6px;\n  font-size: 12px ;\n  color: black;\n  background: none;\n}\n\ndiv.fcc_legend.key {\n  height: 15px;\n  width: 15px;\n  margin: 5px;\n  vertical-align: top;\n  border-radius: 0;\n}\n\ndiv.fcc_legend.key:first-of-type {\n  background-color: rgba(255, 0, 0, 0.7);\n}\n\ndiv.fcc_legend.key:nth-of-type(2) {\n  background-color: rgba(81, 211, 81, 0.9);\n}\n\ndiv.fcc_legend.key:nth-of-type(3) {\n  background-color: rgba(255, 153, 0, 0.9);\n}\n\ndiv.fcc_legend, span.fcc_legend {\n  position: relative;\n  display: inline-block;\n  left: 0px;\n}\n\n/* This acts as sort of CSS reset. The div that will use this class is a \n   wrapper div for the entire test UI. By using this class we ensure that\n   Camper code will be less specific and therefor won't override properties\n   that could change the layout or styling of our test UI.\n*/\ndiv.fcc_test_ui {\n  align-items: normal;  \n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n  color: black;\n  cursor: default;\n  display: block;\n  font-family: Noto Sans, arial, sans-serif;\n  font-size: 100%;\n  font-stretch: normal;\n  font-style: normal;\n  font-variant-caps: normal;\n  font-weight: 400;\n  height: auto;\n  left: 0;\n  letter-spacing: normal;\n  line-height: 1;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  pointer-events: all;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  transform: none;\n  vertical-align: baseline;\n  word-spacing: 0px;  \n}\n\n/* Ensures that all child elements of the test UI wrapper div will have these\n   properties specified so Camper CSS won't override these properties.\n*/\n.fcc_test_ui * {\n  align-items: inherit;  \n  background: inherit;\n  background-color: inherit;\n  border: inherit;\n  border-radius: inherit;\n  box-shadow: inherit;\n  color: inherit;\n  cursor: inherit;\n/*  display: inherit; */\n  font-family: inherit;\n  font-stretch: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-variant-caps: inherit;\n  font-weight: inherit;\n  height: inherit;\n  left: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  margin: inherit;\n  outline: inherit;\n  padding: inherit;\n  pointer-events: inherit;\n  position: inherit;\n  text-align: inherit;\n  transform: inherit;\n  vertical-align: inherit;\n  word-spacing: inherit;  \n}\n", ""])
}, function(e, t, a) {
  var r = a(42);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var n = {
    transform: void 0
  };
  a(9)(r, n);
  r.locals && (e.exports = r.locals)
}, function(e, t) {
  e.exports = '<div id="fcc_test_message-box" class="fcc_test_message-box-hidden"\n  onclick="FCC_Global.FCCclickOutsideToCloseModal(event)">\n  <div class="fcc_test_message-box-content">\n    <div class="fcc_test_message-box-header">\n      <div class="title">Unit tests</div>\n    </div>\n    <div class="fcc_test_message-box-body">\n      <div id="mocha">Run Test Suite to See Unit Tests!</div>\n    </div>\n    <div class="fcc_test_message-box-footer">\n      <div class="fcc_test_message-box-close-btn"\n        onclick="FCC_Global.FCCCloseTestModal()">Close</div>\n    </div>\n  </div>\n</div>'
}, function(e, t) {
  e.exports = '<div id="fcc_foldout_toggler">\n  <span id="hamburger_top" class="fcc_hamburger transform_top"></span>\n  <span id="hamburger_middle" class="fcc_hamburger transform_middle"></span>\n  <span id="hamburger_bottom" class="fcc_hamburger transform_bottom"></span>\n  <span id="fcc_foldout_toggler_background"></span>\n</div>\n<input id="fcc_toggle" onclick="FCC_Global.hamburgerTransform()" type="checkbox"\n  title="CTRL + SHIFT + O">\n<div id="fcc_test_suite_indicator_wrapper"></div>'
}, function(e, t) {
  e.exports = '<div id="fcc_foldout_menu_inner">\n  <label for="test-suite-selector">Select Test Suite: </label>\n  <select name="Test Suite Selector" id="test-suite-selector"\n    onchange="FCC_Global.selectProject(this.value)">\n    <option id="placeholder" value="">- - -</option>\n    <option value="tribute-page">Tribute Page</option>\n    <option value="portfolio">Personal Portfolio</option>\n    <option value="survey-form">Survey Form</option>\n    <option value="product-landing-page">Product Landing Page</option>\n    <option value="technical-docs-page">Technical Documentation Page\n    </option>\n    <option value="random-quote-machine">Random Quote Machine</option>\n    <option value="markdown-previewer">Markdown Previewer</option>\n    <option value="drum-machine">Drum Machine</option>\n    <option value="pomodoro-clock">Pomodoro Clock</option>\n    <option value="javascript-calculator">Javascript Calculator</option>\n    <option value="bar-chart">D3: Bar Chart</option>\n    <option value="scatter-plot">D3: Scatter Plot</option>\n    <option value="heat-map">D3: Heat Map</option>\n    <option value="choropleth">D3: Choropleth</option>\n    <option value="tree-map">D3: Tree Map</option>\n  </select>\n  <button id="fcc_test_message-box-rerun-button" type="button"\n    class="fcc_foldout_buttons" title="CTRL + SHIFT + ENTER"\n    onclick="FCC_Global.FCCRerunTests()">\n    Run Tests\n  </button>\n  <button id="fcc_test_button" type="button"\n    class="fcc_foldout_buttons fcc_test_btn-default"\n    title="CTRL + SHIFT + T" onclick="FCC_Global.FCCOpenTestModal()">\n    Tests\n  </button>\n  <div id="fcc_legend_wrapper">\n    <div class="fcc_legend key"></div>\n    <span class="fcc_legend">Test(s) Failed</span>\n    <div class="fcc_legend key"></div>\n    <span class="fcc_legend">Tests Passed</span>\n    <div class="fcc_legend key"></div>\n    <span class="fcc_legend">Tests Executing</span>\n  </div>\n  <span id="fcc_report-bug"><a\n    href="https://github.com/freeCodeCamp/testable-projects-fcc/issues/new"\n    target="_blank">Report Bug</a>\n  </span>\n</div>\n\n'
}, function(e, t) {
  /*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t) {
    /*!
     * Chai dependencies.
     */
    var a = e.Assertion,
      r = t.flag,
      n = e.assert = function(t, r) {
        new a(null, null, e.assert).assert(t, r, "[ negation message unavailable ]")
      };
    /*!
     * Module export.
     */
    n.fail = function(t, a, r, s) {
        throw r = r || "assert.fail()", new e.AssertionError(r, {
          actual: t,
          expected: a,
          operator: s
        }, n.fail)
      }, n.isOk = function(e, t) {
        new a(e, t).is.ok
      }, n.isNotOk = function(e, t) {
        new a(e, t).is.not.ok
      }, n.equal = function(e, t, s) {
        var o = new a(e, s, n.equal);
        o.assert(t == r(o, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", t, e)
      }, n.notEqual = function(e, t, s) {
        var o = new a(e, s, n.notEqual);
        o.assert(t != r(o, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", t, e)
      }, n.strictEqual = function(e, t, r) {
        new a(e, r).to.equal(t)
      }, n.notStrictEqual = function(e, t, r) {
        new a(e, r).to.not.equal(t)
      }, n.deepEqual = function(e, t, r) {
        new a(e, r).to.eql(t)
      }, n.notDeepEqual = function(e, t, r) {
        new a(e, r).to.not.eql(t)
      }, n.isAbove = function(e, t, r) {
        new a(e, r).to.be.above(t)
      }, n.isAtLeast = function(e, t, r) {
        new a(e, r).to.be.least(t)
      }, n.isBelow = function(e, t, r) {
        new a(e, r).to.be.below(t)
      }, n.isAtMost = function(e, t, r) {
        new a(e, r).to.be.most(t)
      }, n.isTrue = function(e, t) {
        new a(e, t).is.true
      }, n.isNotTrue = function(e, t) {
        new a(e, t).to.not.equal(!0)
      }, n.isFalse = function(e, t) {
        new a(e, t).is.false
      }, n.isNotFalse = function(e, t) {
        new a(e, t).to.not.equal(!1)
      }, n.isNull = function(e, t) {
        new a(e, t).to.equal(null)
      }, n.isNotNull = function(e, t) {
        new a(e, t).to.not.equal(null)
      }, n.isNaN = function(e, t) {
        new a(e, t).to.be.NaN
      }, n.isNotNaN = function(e, t) {
        new a(e, t).not.to.be.NaN
      }, n.isUndefined = function(e, t) {
        new a(e, t).to.equal(void 0)
      }, n.isDefined = function(e, t) {
        new a(e, t).to.not.equal(void 0)
      }, n.isFunction = function(e, t) {
        new a(e, t).to.be.a("function")
      }, n.isNotFunction = function(e, t) {
        new a(e, t).to.not.be.a("function")
      }, n.isObject = function(e, t) {
        new a(e, t).to.be.a("object")
      }, n.isNotObject = function(e, t) {
        new a(e, t).to.not.be.a("object")
      }, n.isArray = function(e, t) {
        new a(e, t).to.be.an("array")
      }, n.isNotArray = function(e, t) {
        new a(e, t).to.not.be.an("array")
      }, n.isString = function(e, t) {
        new a(e, t).to.be.a("string")
      }, n.isNotString = function(e, t) {
        new a(e, t).to.not.be.a("string")
      }, n.isNumber = function(e, t) {
        new a(e, t).to.be.a("number")
      }, n.isNotNumber = function(e, t) {
        new a(e, t).to.not.be.a("number")
      }, n.isBoolean = function(e, t) {
        new a(e, t).to.be.a("boolean")
      }, n.isNotBoolean = function(e, t) {
        new a(e, t).to.not.be.a("boolean")
      }, n.typeOf = function(e, t, r) {
        new a(e, r).to.be.a(t)
      }, n.notTypeOf = function(e, t, r) {
        new a(e, r).to.not.be.a(t)
      }, n.instanceOf = function(e, t, r) {
        new a(e, r).to.be.instanceOf(t)
      }, n.notInstanceOf = function(e, t, r) {
        new a(e, r).to.not.be.instanceOf(t)
      }, n.include = function(e, t, r) {
        new a(e, r, n.include).include(t)
      }, n.notInclude = function(e, t, r) {
        new a(e, r, n.notInclude).not.include(t)
      }, n.match = function(e, t, r) {
        new a(e, r).to.match(t)
      }, n.notMatch = function(e, t, r) {
        new a(e, r).to.not.match(t)
      }, n.property = function(e, t, r) {
        new a(e, r).to.have.property(t)
      }, n.notProperty = function(e, t, r) {
        new a(e, r).to.not.have.property(t)
      }, n.deepProperty = function(e, t, r) {
        new a(e, r).to.have.deep.property(t)
      }, n.notDeepProperty = function(e, t, r) {
        new a(e, r).to.not.have.deep.property(t)
      }, n.propertyVal = function(e, t, r, n) {
        new a(e, n).to.have.property(t, r)
      }, n.propertyNotVal = function(e, t, r, n) {
        new a(e, n).to.not.have.property(t, r)
      }, n.deepPropertyVal = function(e, t, r, n) {
        new a(e, n).to.have.deep.property(t, r)
      }, n.deepPropertyNotVal = function(e, t, r, n) {
        new a(e, n).to.not.have.deep.property(t, r)
      }, n.lengthOf = function(e, t, r) {
        new a(e, r).to.have.length(t)
      }, n.throws = function(e, t, n, s) {
        ("string" == typeof t || t instanceof RegExp) && (n = t, t = null);
        var o = new a(e, s).to.throw(t, n);
        return r(o, "object")
      }, n.doesNotThrow = function(e, t, r) {
        "string" == typeof t && (r = t, t = null), new a(e, r).to.not.Throw(t)
      }, n.operator = function(e, n, s, o) {
        var i;
        switch (n) {
          case "==":
            i = e == s;
            break;
          case "===":
            i = e === s;
            break;
          case ">":
            i = e > s;
            break;
          case ">=":
            i = e >= s;
            break;
          case "<":
            i = e < s;
            break;
          case "<=":
            i = e <= s;
            break;
          case "!=":
            i = e != s;
            break;
          case "!==":
            i = e !== s;
            break;
          default:
            throw new Error('Invalid operator "' + n + '"')
        }
        var h = new a(i, o);
        h.assert(!0 === r(h, "object"), "expected " + t.inspect(e) + " to be " + n + " " + t.inspect(s), "expected " + t.inspect(e) + " to not be " + n + " " + t.inspect(s))
      }, n.closeTo = function(e, t, r, n) {
        new a(e, n).to.be.closeTo(t, r)
      }, n.approximately = function(e, t, r, n) {
        new a(e, n).to.be.approximately(t, r)
      }, n.sameMembers = function(e, t, r) {
        new a(e, r).to.have.same.members(t)
      }, n.sameDeepMembers = function(e, t, r) {
        new a(e, r).to.have.same.deep.members(t)
      }, n.includeMembers = function(e, t, r) {
        new a(e, r).to.include.members(t)
      }, n.includeDeepMembers = function(e, t, r) {
        new a(e, r).to.include.deep.members(t)
      }, n.oneOf = function(e, t, r) {
        new a(e, r).to.be.oneOf(t)
      }, n.changes = function(e, t, r) {
        new a(e).to.change(t, r)
      }, n.doesNotChange = function(e, t, r) {
        new a(e).to.not.change(t, r)
      }, n.increases = function(e, t, r) {
        new a(e).to.increase(t, r)
      }, n.doesNotIncrease = function(e, t, r) {
        new a(e).to.not.increase(t, r)
      }, n.decreases = function(e, t, r) {
        new a(e).to.decrease(t, r)
      }, n.doesNotDecrease = function(e, t, r) {
        new a(e).to.not.decrease(t, r)
      }
      /*!
       * ### .ifError(object)
       *
       * Asserts if value is not a false value, and throws if it is a true value.
       * This is added to allow for chai to be a drop-in replacement for Node's
       * assert class.
       *
       *     var err = new Error('I am a custom error');
       *     assert.ifError(err); // Rethrows err!
       *
       * @name ifError
       * @param {Object} object
       * @namespace Assert
       * @api public
       */
      , n.ifError = function(e) {
        if (e) throw e
      }, n.isExtensible = function(e, t) {
        new a(e, t).to.be.extensible
      }, n.isNotExtensible = function(e, t) {
        new a(e, t).to.not.be.extensible
      }, n.isSealed = function(e, t) {
        new a(e, t).to.be.sealed
      }, n.isNotSealed = function(e, t) {
        new a(e, t).to.not.be.sealed
      }, n.isFrozen = function(e, t) {
        new a(e, t).to.be.frozen
      }, n.isNotFrozen = function(e, t) {
        new a(e, t).to.not.be.frozen
      },
      /*!
       * Aliases.
       */
      function e(t, a) {
        return n[a] = n[t], e
      }("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")
  }
}, function(e, t) {
  /*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t) {
    var a = e.Assertion;

    function r() {
      Object.defineProperty(Object.prototype, "should", {
        set: function(e) {
          Object.defineProperty(this, "should", {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        },
        get: function e() {
          return this instanceof String || this instanceof Number || this instanceof Boolean ? new a(this.valueOf(), null, e) : new a(this, null, e)
        },
        configurable: !0
      });
      var t = {
        fail: function(a, r, n, s) {
          throw n = n || "should.fail()", new e.AssertionError(n, {
            actual: a,
            expected: r,
            operator: s
          }, t.fail)
        },
        equal: function(e, t, r) {
          new a(e, r).to.equal(t)
        },
        Throw: function(e, t, r, n) {
          new a(e, n).to.Throw(t, r)
        },
        exist: function(e, t) {
          new a(e, t).to.exist
        },
        not: {}
      };
      return t.not.equal = function(e, t, r) {
        new a(e, r).to.not.equal(t)
      }, t.not.Throw = function(e, t, r, n) {
        new a(e, n).to.not.Throw(t, r)
      }, t.not.exist = function(e, t) {
        new a(e, t).to.not.exist
      }, t.throw = t.Throw, t.not.throw = t.not.Throw, t
    }
    e.should = r, e.Should = r
  }
}, function(e, t) {
  /*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t) {
    e.expect = function(t, a) {
      return new e.Assertion(t, a)
    }, e.expect.fail = function(t, a, r, n) {
      throw r = r || "expect.fail()", new e.AssertionError(r, {
        actual: t,
        expected: a,
        operator: n
      }, e.expect.fail)
    }
  }
}, function(e, t) {
  /*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t) {
    var a = e.Assertion,
      r = (Object.prototype.toString, t.flag);

    function n(e, a) {
      a && r(this, "message", a), e = e.toLowerCase();
      var n = r(this, "object"),
        s = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
      this.assert(e === t.type(n), "expected #{this} to be " + s + e, "expected #{this} not to be " + s + e)
    }

    function s() {
      r(this, "contains", !0)
    }

    function o(e, n) {
      t.expectTypes(this, ["array", "object", "string"]), n && r(this, "message", n);
      var s = r(this, "object"),
        o = !1;
      if ("array" === t.type(s) && "object" === t.type(e)) {
        for (var i in s)
          if (t.eql(s[i], e)) {
            o = !0;
            break
          }
      } else if ("object" === t.type(e)) {
        if (!r(this, "negate")) {
          for (var h in e) new a(s).property(h, e[h]);
          return
        }
        var l = {};
        for (var h in e) l[h] = s[h];
        o = t.eql(l, e)
      } else o = void 0 != s && ~s.indexOf(e);
      this.assert(o, "expected #{this} to include " + t.inspect(e), "expected #{this} to not include " + t.inspect(e))
    }

    function i() {
      var e = r(this, "object"),
        t = Object.prototype.toString.call(e);
      this.assert("[object Arguments]" === t, "expected #{this} to be arguments but got " + t, "expected #{this} to not be arguments")
    }

    function h(e, t) {
      t && r(this, "message", t);
      var a = r(this, "object");
      if (r(this, "deep")) return this.eql(e);
      this.assert(e === a, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", e, this._obj, !0)
    }

    function l(e, a) {
      a && r(this, "message", a), this.assert(t.eql(e, r(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", e, this._obj, !0)
    }

    function c(e, t) {
      t && r(this, "message", t);
      var n = r(this, "object");
      if (r(this, "doLength")) {
        new a(n, t).to.have.property("length");
        var s = n.length;
        this.assert(s > e, "expected #{this} to have a length above #{exp} but got #{act}", "expected #{this} to not have a length above #{exp}", e, s)
      } else this.assert(n > e, "expected #{this} to be above " + e, "expected #{this} to be at most " + e)
    }

    function u(e, t) {
      t && r(this, "message", t);
      var n = r(this, "object");
      if (r(this, "doLength")) {
        new a(n, t).to.have.property("length");
        var s = n.length;
        this.assert(s >= e, "expected #{this} to have a length at least #{exp} but got #{act}", "expected #{this} to have a length below #{exp}", e, s)
      } else this.assert(n >= e, "expected #{this} to be at least " + e, "expected #{this} to be below " + e)
    }

    function f(e, t) {
      t && r(this, "message", t);
      var n = r(this, "object");
      if (r(this, "doLength")) {
        new a(n, t).to.have.property("length");
        var s = n.length;
        this.assert(s < e, "expected #{this} to have a length below #{exp} but got #{act}", "expected #{this} to not have a length below #{exp}", e, s)
      } else this.assert(n < e, "expected #{this} to be below " + e, "expected #{this} to be at least " + e)
    }

    function p(e, t) {
      t && r(this, "message", t);
      var n = r(this, "object");
      if (r(this, "doLength")) {
        new a(n, t).to.have.property("length");
        var s = n.length;
        this.assert(s <= e, "expected #{this} to have a length at most #{exp} but got #{act}", "expected #{this} to have a length above #{exp}", e, s)
      } else this.assert(n <= e, "expected #{this} to be at most " + e, "expected #{this} to be above " + e)
    }

    function m(e, a) {
      a && r(this, "message", a);
      var n = t.getName(e);
      this.assert(r(this, "object") instanceof e, "expected #{this} to be an instance of " + n, "expected #{this} to not be an instance of " + n)
    }

    function g(e, a) {
      a && r(this, "message", a);
      var n = r(this, "object");
      this.assert(n.hasOwnProperty(e), "expected #{this} to have own property " + t.inspect(e), "expected #{this} to not have own property " + t.inspect(e))
    }

    function d(e, a, n) {
      "string" == typeof a && (n = a, a = null), n && r(this, "message", n);
      var s = r(this, "object"),
        o = Object.getOwnPropertyDescriptor(Object(s), e);
      o && a ? this.assert(t.eql(a, o), "expected the own property descriptor for " + t.inspect(e) + " on #{this} to match " + t.inspect(a) + ", got " + t.inspect(o), "expected the own property descriptor for " + t.inspect(e) + " on #{this} to not match " + t.inspect(a), a, o, !0) : this.assert(o, "expected #{this} to have an own property descriptor for " + t.inspect(e), "expected #{this} to not have an own property descriptor for " + t.inspect(e)), r(this, "object", o)
    }

    function y(e, t) {
      t && r(this, "message", t);
      var n = r(this, "object");
      new a(n, t).to.have.property("length");
      var s = n.length;
      this.assert(s == e, "expected #{this} to have a length of #{exp} but got #{act}", "expected #{this} to not have a length of #{act}", e, s)
    }

    function b(e, t) {
      t && r(this, "message", t);
      var a = r(this, "object");
      this.assert(e.exec(a), "expected #{this} to match " + e, "expected #{this} not to match " + e)
    }

    function C(e) {
      var a, n = r(this, "object"),
        s = !0,
        o = "keys must be given single argument of Array|Object|String, or multiple String arguments";
      switch (t.type(e)) {
        case "array":
          if (arguments.length > 1) throw new Error(o);
          break;
        case "object":
          if (arguments.length > 1) throw new Error(o);
          e = Object.keys(e);
          break;
        default:
          e = Array.prototype.slice.call(arguments)
      }
      if (!e.length) throw new Error("keys required");
      var i = Object.keys(n),
        h = e,
        l = e.length,
        c = r(this, "any"),
        u = r(this, "all");
      (c || u || (u = !0), c) && (s = h.filter(function(e) {
        return ~i.indexOf(e)
      }).length > 0);
      if (u && (s = e.every(function(e) {
          return ~i.indexOf(e)
        }), r(this, "negate") || r(this, "contains") || (s = s && e.length == i.length)), l > 1) {
        var f = (e = e.map(function(e) {
          return t.inspect(e)
        })).pop();
        u && (a = e.join(", ") + ", and " + f), c && (a = e.join(", ") + ", or " + f)
      } else a = t.inspect(e[0]);
      a = (l > 1 ? "keys " : "key ") + a, a = (r(this, "contains") ? "contain " : "have ") + a, this.assert(s, "expected #{this} to " + a, "expected #{this} to not " + a, h.slice(0).sort(), i.sort(), !0)
    }

    function O(e, n, s) {
      s && r(this, "message", s);
      var o = r(this, "object");
      new a(o, s).is.a("function");
      var i = !1,
        h = null,
        l = null,
        c = null;
      0 === arguments.length ? (n = null, e = null) : e && (e instanceof RegExp || "string" == typeof e) ? (n = e, e = null) : e && e instanceof Error ? (h = e, e = null, n = null) : "function" == typeof e ? (!(l = e.prototype.name) || "Error" === l && e !== Error) && (l = e.name || (new e).name) : e = null;
      try {
        o()
      } catch (a) {
        if (h) return this.assert(a === h, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}", h instanceof Error ? h.toString() : h, a instanceof Error ? a.toString() : a), r(this, "object", a), this;
        if (e && (this.assert(a instanceof e, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp} but #{act} was thrown", l, a instanceof Error ? a.toString() : a), !n)) return r(this, "object", a), this;
        var u = "error" === t.type(a) && "message" in a ? a.message : "" + a;
        if (null != u && n && n instanceof RegExp) return this.assert(n.exec(u), "expected #{this} to throw error matching #{exp} but got #{act}", "expected #{this} to throw error not matching #{exp}", n, u), r(this, "object", a), this;
        if (null != u && n && "string" == typeof n) return this.assert(~u.indexOf(n), "expected #{this} to throw error including #{exp} but got #{act}", "expected #{this} to throw error not including #{act}", n, u), r(this, "object", a), this;
        i = !0, c = a
      }
      var f = "",
        p = null !== l ? l : h ? "#{exp}" : "an error";
      i && (f = " but #{act} was thrown"), this.assert(!0 === i, "expected #{this} to throw " + p + f, "expected #{this} to not throw " + p + f, h instanceof Error ? h.toString() : h, c instanceof Error ? c.toString() : c), r(this, "object", c)
    }

    function H(e, a) {
      a && r(this, "message", a);
      var n = r(this, "object"),
        s = r(this, "itself"),
        o = "function" !== t.type(n) || s ? n[e] : n.prototype[e];
      this.assert("function" == typeof o, "expected #{this} to respond to " + t.inspect(e), "expected #{this} to not respond to " + t.inspect(e))
    }

    function _(e, a) {
      a && r(this, "message", a);
      var n = e(r(this, "object"));
      this.assert(n, "expected #{this} to satisfy " + t.objDisplay(e), "expected #{this} to not satisfy" + t.objDisplay(e), !this.negate, n)
    }

    function v(e, n, s) {
      s && r(this, "message", s);
      var o = r(this, "object");
      if (new a(o, s).is.a("number"), "number" !== t.type(e) || "number" !== t.type(n)) throw new Error("the arguments to closeTo or approximately must be numbers");
      this.assert(Math.abs(o - e) <= n, "expected #{this} to be close to " + e + " +/- " + n, "expected #{this} not to be close to " + e + " +/- " + n)
    }

    function w(e, t, a) {
      return e.every(function(e) {
        return a ? t.some(function(t) {
          return a(e, t)
        }) : -1 !== t.indexOf(e)
      })
    }

    function A(e, t, n) {
      n && r(this, "message", n);
      var s = r(this, "object");
      new a(e, n).to.have.property(t), new a(s).is.a("function");
      var o = e[t];
      s(), this.assert(o !== e[t], "expected ." + t + " to change", "expected ." + t + " to not change")
    }

    function T(e, t, n) {
      n && r(this, "message", n);
      var s = r(this, "object");
      new a(e, n).to.have.property(t), new a(s).is.a("function");
      var o = e[t];
      s(), this.assert(e[t] - o > 0, "expected ." + t + " to increase", "expected ." + t + " to not increase")
    }

    function x(e, t, n) {
      n && r(this, "message", n);
      var s = r(this, "object");
      new a(e, n).to.have.property(t), new a(s).is.a("function");
      var o = e[t];
      s(), this.assert(e[t] - o < 0, "expected ." + t + " to decrease", "expected ." + t + " to not decrease")
    }["to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same"].forEach(function(e) {
      a.addProperty(e, function() {
        return this
      })
    }), a.addProperty("not", function() {
      r(this, "negate", !0)
    }), a.addProperty("deep", function() {
      r(this, "deep", !0)
    }), a.addProperty("any", function() {
      r(this, "any", !0), r(this, "all", !1)
    }), a.addProperty("all", function() {
      r(this, "all", !0), r(this, "any", !1)
    }), a.addChainableMethod("an", n), a.addChainableMethod("a", n), a.addChainableMethod("include", o, s), a.addChainableMethod("contain", o, s), a.addChainableMethod("contains", o, s), a.addChainableMethod("includes", o, s), a.addProperty("ok", function() {
      this.assert(r(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy")
    }), a.addProperty("true", function() {
      this.assert(!0 === r(this, "object"), "expected #{this} to be true", "expected #{this} to be false", !this.negate)
    }), a.addProperty("false", function() {
      this.assert(!1 === r(this, "object"), "expected #{this} to be false", "expected #{this} to be true", !!this.negate)
    }), a.addProperty("null", function() {
      this.assert(null === r(this, "object"), "expected #{this} to be null", "expected #{this} not to be null")
    }), a.addProperty("undefined", function() {
      this.assert(void 0 === r(this, "object"), "expected #{this} to be undefined", "expected #{this} not to be undefined")
    }), a.addProperty("NaN", function() {
      this.assert(isNaN(r(this, "object")), "expected #{this} to be NaN", "expected #{this} not to be NaN")
    }), a.addProperty("exist", function() {
      this.assert(null != r(this, "object"), "expected #{this} to exist", "expected #{this} to not exist")
    }), a.addProperty("empty", function() {
      var e = r(this, "object"),
        t = e;
      Array.isArray(e) || "string" == typeof object ? t = e.length : "object" == typeof e && (t = Object.keys(e).length), this.assert(!t, "expected #{this} to be empty", "expected #{this} not to be empty")
    }), a.addProperty("arguments", i), a.addProperty("Arguments", i), a.addMethod("equal", h), a.addMethod("equals", h), a.addMethod("eq", h), a.addMethod("eql", l), a.addMethod("eqls", l), a.addMethod("above", c), a.addMethod("gt", c), a.addMethod("greaterThan", c), a.addMethod("least", u), a.addMethod("gte", u), a.addMethod("below", f), a.addMethod("lt", f), a.addMethod("lessThan", f), a.addMethod("most", p), a.addMethod("lte", p), a.addMethod("within", function(e, t, n) {
      n && r(this, "message", n);
      var s = r(this, "object"),
        o = e + ".." + t;
      if (r(this, "doLength")) {
        new a(s, n).to.have.property("length");
        var i = s.length;
        this.assert(i >= e && i <= t, "expected #{this} to have a length within " + o, "expected #{this} to not have a length within " + o)
      } else this.assert(s >= e && s <= t, "expected #{this} to be within " + o, "expected #{this} to not be within " + o)
    }), a.addMethod("instanceof", m), a.addMethod("instanceOf", m), a.addMethod("property", function(e, a, n) {
      n && r(this, "message", n);
      var s = !!r(this, "deep"),
        o = s ? "deep property " : "property ",
        i = r(this, "negate"),
        h = r(this, "object"),
        l = s ? t.getPathInfo(e, h) : null,
        c = s ? l.exists : t.hasProperty(e, h),
        u = s ? l.value : h[e];
      if (i && arguments.length > 1) {
        if (void 0 === u) throw n = null != n ? n + ": " : "", new Error(n + t.inspect(h) + " has no " + o + t.inspect(e))
      } else this.assert(c, "expected #{this} to have a " + o + t.inspect(e), "expected #{this} to not have " + o + t.inspect(e));
      arguments.length > 1 && this.assert(a === u, "expected #{this} to have a " + o + t.inspect(e) + " of #{exp}, but got #{act}", "expected #{this} to not have a " + o + t.inspect(e) + " of #{act}", a, u), r(this, "object", u)
    }), a.addMethod("ownProperty", g), a.addMethod("haveOwnProperty", g), a.addMethod("ownPropertyDescriptor", d), a.addMethod("haveOwnPropertyDescriptor", d), a.addChainableMethod("length", y, function() {
      r(this, "doLength", !0)
    }), a.addMethod("lengthOf", y), a.addMethod("match", b), a.addMethod("matches", b), a.addMethod("string", function(e, n) {
      n && r(this, "message", n);
      var s = r(this, "object");
      new a(s, n).is.a("string"), this.assert(~s.indexOf(e), "expected #{this} to contain " + t.inspect(e), "expected #{this} to not contain " + t.inspect(e))
    }), a.addMethod("keys", C), a.addMethod("key", C), a.addMethod("throw", O), a.addMethod("throws", O), a.addMethod("Throw", O), a.addMethod("respondTo", H), a.addMethod("respondsTo", H), a.addProperty("itself", function() {
      r(this, "itself", !0)
    }), a.addMethod("satisfy", _), a.addMethod("satisfies", _), a.addMethod("closeTo", v), a.addMethod("approximately", v), a.addMethod("members", function(e, n) {
      n && r(this, "message", n);
      var s = r(this, "object");
      new a(s).to.be.an("array"), new a(e).to.be.an("array");
      var o = r(this, "deep") ? t.eql : void 0;
      if (r(this, "contains")) return this.assert(w(e, s, o), "expected #{this} to be a superset of #{act}", "expected #{this} to not be a superset of #{act}", s, e);
      this.assert(w(s, e, o) && w(e, s, o), "expected #{this} to have the same members as #{act}", "expected #{this} to not have the same members as #{act}", s, e)
    }), a.addMethod("oneOf", function(e, t) {
      t && r(this, "message", t);
      var n = r(this, "object");
      new a(e).to.be.an("array"), this.assert(e.indexOf(n) > -1, "expected #{this} to be one of #{exp}", "expected #{this} to not be one of #{exp}", e, n)
    }), a.addChainableMethod("change", A), a.addChainableMethod("changes", A), a.addChainableMethod("increase", T), a.addChainableMethod("increases", T), a.addChainableMethod("decrease", x), a.addChainableMethod("decreases", x), a.addProperty("extensible", function() {
      var e, t = r(this, "object");
      try {
        e = Object.isExtensible(t)
      } catch (t) {
        if (!(t instanceof TypeError)) throw t;
        e = !1
      }
      this.assert(e, "expected #{this} to be extensible", "expected #{this} to not be extensible")
    }), a.addProperty("sealed", function() {
      var e, t = r(this, "object");
      try {
        e = Object.isSealed(t)
      } catch (t) {
        if (!(t instanceof TypeError)) throw t;
        e = !0
      }
      this.assert(e, "expected #{this} to be sealed", "expected #{this} to not be sealed")
    }), a.addProperty("frozen", function() {
      var e, t = r(this, "object");
      try {
        e = Object.isFrozen(t)
      } catch (t) {
        if (!(t instanceof TypeError)) throw t;
        e = !0
      }
      this.assert(e, "expected #{this} to be frozen", "expected #{this} to not be frozen")
    })
  }
}, function(e, t, a) {
  /*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = a(4);
  e.exports = function(e, t) {
    /*!
     * Module dependencies.
     */
    var a = e.AssertionError,
      n = t.flag;
    /*!
     * Module export.
     */
    /*!
     * Assertion Constructor
     *
     * Creates object for chaining.
     *
     * @api private
     */
    function s(e, t, a) {
      n(this, "ssfi", a || arguments.callee), n(this, "object", e), n(this, "message", t)
    }
    e.Assertion = s, Object.defineProperty(s, "includeStack", {
        get: function() {
          return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), r.includeStack
        },
        set: function(e) {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), r.includeStack = e
        }
      }), Object.defineProperty(s, "showDiff", {
        get: function() {
          return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), r.showDiff
        },
        set: function(e) {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), r.showDiff = e
        }
      }), s.addProperty = function(e, a) {
        t.addProperty(this.prototype, e, a)
      }, s.addMethod = function(e, a) {
        t.addMethod(this.prototype, e, a)
      }, s.addChainableMethod = function(e, a, r) {
        t.addChainableMethod(this.prototype, e, a, r)
      }, s.overwriteProperty = function(e, a) {
        t.overwriteProperty(this.prototype, e, a)
      }, s.overwriteMethod = function(e, a) {
        t.overwriteMethod(this.prototype, e, a)
      }, s.overwriteChainableMethod = function(e, a, r) {
        t.overwriteChainableMethod(this.prototype, e, a, r)
      }, s.prototype.assert = function(e, s, o, i, h, l) {
        var c = t.test(this, arguments);
        if (!0 !== l && (l = !1), !0 !== r.showDiff && (l = !1), !c) {
          s = t.getMessage(this, arguments);
          var u = t.getActual(this, arguments);
          throw new a(s, {
            actual: u,
            expected: i,
            showDiff: l
          }, r.includeStack ? this.assert : n(this, "ssfi"))
        }
      },
      /*!
       * ### ._obj
       *
       * Quick reference to stored `actual` value for plugin developers.
       *
       * @api private
       */
      Object.defineProperty(s.prototype, "_obj", {
        get: function() {
          return n(this, "object")
        },
        set: function(e) {
          n(this, "object", e)
        }
      })
  }
}, function(e, t) {
  /*!
   * Chai - overwriteChainableMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t, a, r) {
    var n = e.__methods[t],
      s = n.chainingBehavior;
    n.chainingBehavior = function() {
      var e = r(s).call(this);
      return void 0 === e ? this : e
    };
    var o = n.method;
    n.method = function() {
      var e = a(o).apply(this, arguments);
      return void 0 === e ? this : e
    }
  }
}, function(e, t, a) {
  /*!
   * Chai - addChainingMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependencies
   */
  var r = a(15),
    n = a(2),
    s = a(4),
    o = "__proto__" in Object,
    i = /^(?:length|name|arguments|caller)$/,
    h = Function.prototype.call,
    l = Function.prototype.apply;
  e.exports = function(e, t, a, c) {
    "function" != typeof c && (c = function() {});
    var u = {
      method: a,
      chainingBehavior: c
    };
    e.__methods || (e.__methods = {}), e.__methods[t] = u, Object.defineProperty(e, t, {
      get: function() {
        u.chainingBehavior.call(this);
        var t = function e() {
          n(this, "ssfi") && !1 === s.includeStack && n(this, "ssfi", e);
          var t = u.method.apply(this, arguments);
          return void 0 === t ? this : t
        };
        if (o) {
          var a = t.__proto__ = Object.create(this);
          a.call = h, a.apply = l
        } else {
          Object.getOwnPropertyNames(e).forEach(function(a) {
            if (!i.test(a)) {
              var r = Object.getOwnPropertyDescriptor(e, a);
              Object.defineProperty(t, a, r)
            }
          })
        }
        return r(this, t), t
      },
      configurable: !0
    })
  }
}, function(e, t) {
  /*!
   * Chai - overwriteMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t, a) {
    var r = e[t],
      n = function() {
        return this
      };
    r && "function" == typeof r && (n = r), e[t] = function() {
      var e = a(n).apply(this, arguments);
      return void 0 === e ? this : e
    }
  }
}, function(e, t) {
  /*!
   * Chai - overwriteProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e, t, a) {
    var r = Object.getOwnPropertyDescriptor(e, t),
      n = function() {};
    r && "function" == typeof r.get && (n = r.get), Object.defineProperty(e, t, {
      get: function() {
        var e = a(n).call(this);
        return void 0 === e ? this : e
      },
      configurable: !0
    })
  }
}, function(e, t, a) {
  /*!
   * Chai - addMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = a(4),
    n = a(2);
  e.exports = function(e, t, a) {
    e[t] = function() {
      n(this, "ssfi") && !1 === r.includeStack && n(this, "ssfi", e[t]);
      var s = a.apply(this, arguments);
      return void 0 === s ? this : s
    }
  }
}, function(e, t, a) {
  /*!
   * Chai - addProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = a(4),
    n = a(2);
  e.exports = function(e, t, a) {
    Object.defineProperty(e, t, {
      get: function e() {
        n(this, "ssfi") && !1 === r.includeStack && n(this, "ssfi", e);
        var t = a.call(this);
        return void 0 === t ? this : t
      },
      configurable: !0
    })
  }
}, function(e, t, a) {
  /*!
   * Chai - getPathValue utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * @see https://github.com/logicalparadox/filtr
   * MIT Licensed
   */
  var r = a(14);
  e.exports = function(e, t) {
    return r(e, t).value
  }
}, function(e, t) {
  var a = {}.toString;
  e.exports = Array.isArray || function(e) {
    return "[object Array]" == a.call(e)
  }
}, function(e, t) {
  t.read = function(e, t, a, r, n) {
    var s, o, i = 8 * n - r - 1,
      h = (1 << i) - 1,
      l = h >> 1,
      c = -7,
      u = a ? n - 1 : 0,
      f = a ? -1 : 1,
      p = e[t + u];
    for (u += f, s = p & (1 << -c) - 1, p >>= -c, c += i; c > 0; s = 256 * s + e[t + u], u += f, c -= 8);
    for (o = s & (1 << -c) - 1, s >>= -c, c += r; c > 0; o = 256 * o + e[t + u], u += f, c -= 8);
    if (0 === s) s = 1 - l;
    else {
      if (s === h) return o ? NaN : 1 / 0 * (p ? -1 : 1);
      o += Math.pow(2, r), s -= l
    }
    return (p ? -1 : 1) * o * Math.pow(2, s - r)
  }, t.write = function(e, t, a, r, n, s) {
    var o, i, h, l = 8 * s - n - 1,
      c = (1 << l) - 1,
      u = c >> 1,
      f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      p = r ? 0 : s - 1,
      m = r ? 1 : -1,
      g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (i = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -o)) < 1 && (o--, h *= 2), (t += o + u >= 1 ? f / h : f * Math.pow(2, 1 - u)) * h >= 2 && (o++, h /= 2), o + u >= c ? (i = 0, o = c) : o + u >= 1 ? (i = (t * h - 1) * Math.pow(2, n), o += u) : (i = t * Math.pow(2, u - 1) * Math.pow(2, n), o = 0)); n >= 8; e[a + p] = 255 & i, p += m, i /= 256, n -= 8);
    for (o = o << n | i, l += n; l > 0; e[a + p] = 255 & o, p += m, o /= 256, l -= 8);
    e[a + p - m] |= 128 * g
  }
}, function(e, t, a) {
  "use strict";
  t.byteLength = function(e) {
    var t = l(e),
      a = t[0],
      r = t[1];
    return 3 * (a + r) / 4 - r
  }, t.toByteArray = function(e) {
    for (var t, a = l(e), r = a[0], o = a[1], i = new s(function(e, t, a) {
        return 3 * (t + a) / 4 - a
      }(0, r, o)), h = 0, c = o > 0 ? r - 4 : r, u = 0; u < c; u += 4) t = n[e.charCodeAt(u)] << 18 | n[e.charCodeAt(u + 1)] << 12 | n[e.charCodeAt(u + 2)] << 6 | n[e.charCodeAt(u + 3)], i[h++] = t >> 16 & 255, i[h++] = t >> 8 & 255, i[h++] = 255 & t;
    2 === o && (t = n[e.charCodeAt(u)] << 2 | n[e.charCodeAt(u + 1)] >> 4, i[h++] = 255 & t);
    1 === o && (t = n[e.charCodeAt(u)] << 10 | n[e.charCodeAt(u + 1)] << 4 | n[e.charCodeAt(u + 2)] >> 2, i[h++] = t >> 8 & 255, i[h++] = 255 & t);
    return i
  }, t.fromByteArray = function(e) {
    for (var t, a = e.length, n = a % 3, s = [], o = 0, i = a - n; o < i; o += 16383) s.push(c(e, o, o + 16383 > i ? i : o + 16383));
    1 === n ? (t = e[a - 1], s.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === n && (t = (e[a - 2] << 8) + e[a - 1], s.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
    return s.join("")
  };
  for (var r = [], n = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, h = o.length; i < h; ++i) r[i] = o[i], n[o.charCodeAt(i)] = i;

  function l(e) {
    var t = e.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var a = e.indexOf("=");
    return -1 === a && (a = t), [a, a === t ? 0 : 4 - a % 4]
  }

  function c(e, t, a) {
    for (var n, s, o = [], i = t; i < a; i += 3) n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]), o.push(r[(s = n) >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
    return o.join("")
  }
  n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
}, function(e, t) {
  var a;
  a = function() {
    return this
  }();
  try {
    a = a || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (a = window)
  }
  e.exports = a
}, function(e, t, a) {
  "use strict";
  (function(e) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    var r = a(61),
      n = a(60),
      s = a(59);

    function o() {
      return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }

    function i(e, t) {
      if (o() < t) throw new RangeError("Invalid typed array length");
      return h.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = h.prototype : (null === e && (e = new h(t)), e.length = t), e
    }

    function h(e, t, a) {
      if (!(h.TYPED_ARRAY_SUPPORT || this instanceof h)) return new h(e, t, a);
      if ("number" == typeof e) {
        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
        return u(this, e)
      }
      return l(this, e, t, a)
    }

    function l(e, t, a, r) {
      if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, a, r) {
        if (t.byteLength, a < 0 || t.byteLength < a) throw new RangeError("'offset' is out of bounds");
        if (t.byteLength < a + (r || 0)) throw new RangeError("'length' is out of bounds");
        t = void 0 === a && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, a) : new Uint8Array(t, a, r);
        h.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = h.prototype : e = f(e, t);
        return e
      }(e, t, a, r) : "string" == typeof t ? function(e, t, a) {
        "string" == typeof a && "" !== a || (a = "utf8");
        if (!h.isEncoding(a)) throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | m(t, a),
          n = (e = i(e, r)).write(t, a);
        n !== r && (e = e.slice(0, n));
        return e
      }(e, t, a) : function(e, t) {
        if (h.isBuffer(t)) {
          var a = 0 | p(t.length);
          return 0 === (e = i(e, a)).length ? e : (t.copy(e, 0, 0, a), e)
        }
        if (t) {
          if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? i(e, 0) : f(e, t);
          if ("Buffer" === t.type && s(t.data)) return f(e, t.data)
        }
        var r;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
      }(e, t)
    }

    function c(e) {
      if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
      if (e < 0) throw new RangeError('"size" argument must not be negative')
    }

    function u(e, t) {
      if (c(t), e = i(e, t < 0 ? 0 : 0 | p(t)), !h.TYPED_ARRAY_SUPPORT)
        for (var a = 0; a < t; ++a) e[a] = 0;
      return e
    }

    function f(e, t) {
      var a = t.length < 0 ? 0 : 0 | p(t.length);
      e = i(e, a);
      for (var r = 0; r < a; r += 1) e[r] = 255 & t[r];
      return e
    }

    function p(e) {
      if (e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
      return 0 | e
    }

    function m(e, t) {
      if (h.isBuffer(e)) return e.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
      "string" != typeof e && (e = "" + e);
      var a = e.length;
      if (0 === a) return 0;
      for (var r = !1;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
        case void 0:
          return R(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * a;
        case "hex":
          return a >>> 1;
        case "base64":
          return j(e).length;
        default:
          if (r) return R(e).length;
          t = ("" + t).toLowerCase(), r = !0
      }
    }

    function g(e, t, a) {
      var r = e[t];
      e[t] = e[a], e[a] = r
    }

    function d(e, t, a, r, n) {
      if (0 === e.length) return -1;
      if ("string" == typeof a ? (r = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, isNaN(a) && (a = n ? 0 : e.length - 1), a < 0 && (a = e.length + a), a >= e.length) {
        if (n) return -1;
        a = e.length - 1
      } else if (a < 0) {
        if (!n) return -1;
        a = 0
      }
      if ("string" == typeof t && (t = h.from(t, r)), h.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, a, r, n);
      if ("number" == typeof t) return t &= 255, h.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, a) : Uint8Array.prototype.lastIndexOf.call(e, t, a) : y(e, [t], a, r, n);
      throw new TypeError("val must be string, number or Buffer")
    }

    function y(e, t, a, r, n) {
      var s, o = 1,
        i = e.length,
        h = t.length;
      if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        o = 2, i /= 2, h /= 2, a /= 2
      }

      function l(e, t) {
        return 1 === o ? e[t] : e.readUInt16BE(t * o)
      }
      if (n) {
        var c = -1;
        for (s = a; s < i; s++)
          if (l(e, s) === l(t, -1 === c ? 0 : s - c)) {
            if (-1 === c && (c = s), s - c + 1 === h) return c * o
          } else -1 !== c && (s -= s - c), c = -1
      } else
        for (a + h > i && (a = i - h), s = a; s >= 0; s--) {
          for (var u = !0, f = 0; f < h; f++)
            if (l(e, s + f) !== l(t, f)) {
              u = !1;
              break
            }
          if (u) return s
        }
      return -1
    }

    function b(e, t, a, r) {
      a = Number(a) || 0;
      var n = e.length - a;
      r ? (r = Number(r)) > n && (r = n) : r = n;
      var s = t.length;
      if (s % 2 != 0) throw new TypeError("Invalid hex string");
      r > s / 2 && (r = s / 2);
      for (var o = 0; o < r; ++o) {
        var i = parseInt(t.substr(2 * o, 2), 16);
        if (isNaN(i)) return o;
        e[a + o] = i
      }
      return o
    }

    function C(e, t, a, r) {
      return K(R(t, e.length - a), e, a, r)
    }

    function O(e, t, a, r) {
      return K(function(e) {
        for (var t = [], a = 0; a < e.length; ++a) t.push(255 & e.charCodeAt(a));
        return t
      }(t), e, a, r)
    }

    function H(e, t, a, r) {
      return O(e, t, a, r)
    }

    function _(e, t, a, r) {
      return K(j(t), e, a, r)
    }

    function v(e, t, a, r) {
      return K(function(e, t) {
        for (var a, r, n, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) a = e.charCodeAt(o), r = a >> 8, n = a % 256, s.push(n), s.push(r);
        return s
      }(t, e.length - a), e, a, r)
    }

    function w(e, t, a) {
      return 0 === t && a === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, a))
    }

    function A(e, t, a) {
      a = Math.min(e.length, a);
      for (var r = [], n = t; n < a;) {
        var s, o, i, h, l = e[n],
          c = null,
          u = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
        if (n + u <= a) switch (u) {
          case 1:
            l < 128 && (c = l);
            break;
          case 2:
            128 == (192 & (s = e[n + 1])) && (h = (31 & l) << 6 | 63 & s) > 127 && (c = h);
            break;
          case 3:
            s = e[n + 1], o = e[n + 2], 128 == (192 & s) && 128 == (192 & o) && (h = (15 & l) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (h < 55296 || h > 57343) && (c = h);
            break;
          case 4:
            s = e[n + 1], o = e[n + 2], i = e[n + 3], 128 == (192 & s) && 128 == (192 & o) && 128 == (192 & i) && (h = (15 & l) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & i) > 65535 && h < 1114112 && (c = h)
        }
        null === c ? (c = 65533, u = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), n += u
      }
      return function(e) {
        var t = e.length;
        if (t <= T) return String.fromCharCode.apply(String, e);
        var a = "",
          r = 0;
        for (; r < t;) a += String.fromCharCode.apply(String, e.slice(r, r += T));
        return a
      }(r)
    }
    t.Buffer = h, t.SlowBuffer = function(e) {
      +e != e && (e = 0);
      return h.alloc(+e)
    }, t.INSPECT_MAX_BYTES = 50, h.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
      try {
        var e = new Uint8Array(1);
        return e.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function() {
            return 42
          }
        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
      } catch (e) {
        return !1
      }
    }(), t.kMaxLength = o(), h.poolSize = 8192, h._augment = function(e) {
      return e.__proto__ = h.prototype, e
    }, h.from = function(e, t, a) {
      return l(null, e, t, a)
    }, h.TYPED_ARRAY_SUPPORT && (h.prototype.__proto__ = Uint8Array.prototype, h.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, {
      value: null,
      configurable: !0
    })), h.alloc = function(e, t, a) {
      return function(e, t, a, r) {
        return c(t), t <= 0 ? i(e, t) : void 0 !== a ? "string" == typeof r ? i(e, t).fill(a, r) : i(e, t).fill(a) : i(e, t)
      }(null, e, t, a)
    }, h.allocUnsafe = function(e) {
      return u(null, e)
    }, h.allocUnsafeSlow = function(e) {
      return u(null, e)
    }, h.isBuffer = function(e) {
      return !(null == e || !e._isBuffer)
    }, h.compare = function(e, t) {
      if (!h.isBuffer(e) || !h.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
      if (e === t) return 0;
      for (var a = e.length, r = t.length, n = 0, s = Math.min(a, r); n < s; ++n)
        if (e[n] !== t[n]) {
          a = e[n], r = t[n];
          break
        }
      return a < r ? -1 : r < a ? 1 : 0
    }, h.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1
      }
    }, h.concat = function(e, t) {
      if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return h.alloc(0);
      var a;
      if (void 0 === t)
        for (t = 0, a = 0; a < e.length; ++a) t += e[a].length;
      var r = h.allocUnsafe(t),
        n = 0;
      for (a = 0; a < e.length; ++a) {
        var o = e[a];
        if (!h.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(r, n), n += o.length
      }
      return r
    }, h.byteLength = m, h.prototype._isBuffer = !0, h.prototype.swap16 = function() {
      var e = this.length;
      if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var t = 0; t < e; t += 2) g(this, t, t + 1);
      return this
    }, h.prototype.swap32 = function() {
      var e = this.length;
      if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
      return this
    }, h.prototype.swap64 = function() {
      var e = this.length;
      if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
      return this
    }, h.prototype.toString = function() {
      var e = 0 | this.length;
      return 0 === e ? "" : 0 === arguments.length ? A(this, 0, e) : function(e, t, a) {
        var r = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
        if ((void 0 === a || a > this.length) && (a = this.length), a <= 0) return "";
        if ((a >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8");;) switch (e) {
          case "hex":
            return N(this, t, a);
          case "utf8":
          case "utf-8":
            return A(this, t, a);
          case "ascii":
            return x(this, t, a);
          case "latin1":
          case "binary":
            return M(this, t, a);
          case "base64":
            return w(this, t, a);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return S(this, t, a);
          default:
            if (r) throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), r = !0
        }
      }.apply(this, arguments)
    }, h.prototype.equals = function(e) {
      if (!h.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      return this === e || 0 === h.compare(this, e)
    }, h.prototype.inspect = function() {
      var e = "",
        a = t.INSPECT_MAX_BYTES;
      return this.length > 0 && (e = this.toString("hex", 0, a).match(/.{2}/g).join(" "), this.length > a && (e += " ... ")), "<Buffer " + e + ">"
    }, h.prototype.compare = function(e, t, a, r, n) {
      if (!h.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === t && (t = 0), void 0 === a && (a = e ? e.length : 0), void 0 === r && (r = 0), void 0 === n && (n = this.length), t < 0 || a > e.length || r < 0 || n > this.length) throw new RangeError("out of range index");
      if (r >= n && t >= a) return 0;
      if (r >= n) return -1;
      if (t >= a) return 1;
      if (t >>>= 0, a >>>= 0, r >>>= 0, n >>>= 0, this === e) return 0;
      for (var s = n - r, o = a - t, i = Math.min(s, o), l = this.slice(r, n), c = e.slice(t, a), u = 0; u < i; ++u)
        if (l[u] !== c[u]) {
          s = l[u], o = c[u];
          break
        }
      return s < o ? -1 : o < s ? 1 : 0
    }, h.prototype.includes = function(e, t, a) {
      return -1 !== this.indexOf(e, t, a)
    }, h.prototype.indexOf = function(e, t, a) {
      return d(this, e, t, a, !0)
    }, h.prototype.lastIndexOf = function(e, t, a) {
      return d(this, e, t, a, !1)
    }, h.prototype.write = function(e, t, a, r) {
      if (void 0 === t) r = "utf8", a = this.length, t = 0;
      else if (void 0 === a && "string" == typeof t) r = t, a = this.length, t = 0;
      else {
        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t |= 0, isFinite(a) ? (a |= 0, void 0 === r && (r = "utf8")) : (r = a, a = void 0)
      }
      var n = this.length - t;
      if ((void 0 === a || a > n) && (a = n), e.length > 0 && (a < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");
      for (var s = !1;;) switch (r) {
        case "hex":
          return b(this, e, t, a);
        case "utf8":
        case "utf-8":
          return C(this, e, t, a);
        case "ascii":
          return O(this, e, t, a);
        case "latin1":
        case "binary":
          return H(this, e, t, a);
        case "base64":
          return _(this, e, t, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return v(this, e, t, a);
        default:
          if (s) throw new TypeError("Unknown encoding: " + r);
          r = ("" + r).toLowerCase(), s = !0
      }
    }, h.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };
    var T = 4096;

    function x(e, t, a) {
      var r = "";
      a = Math.min(e.length, a);
      for (var n = t; n < a; ++n) r += String.fromCharCode(127 & e[n]);
      return r
    }

    function M(e, t, a) {
      var r = "";
      a = Math.min(e.length, a);
      for (var n = t; n < a; ++n) r += String.fromCharCode(e[n]);
      return r
    }

    function N(e, t, a) {
      var r = e.length;
      (!t || t < 0) && (t = 0), (!a || a < 0 || a > r) && (a = r);
      for (var n = "", s = t; s < a; ++s) n += q(e[s]);
      return n
    }

    function S(e, t, a) {
      for (var r = e.slice(t, a), n = "", s = 0; s < r.length; s += 2) n += String.fromCharCode(r[s] + 256 * r[s + 1]);
      return n
    }

    function k(e, t, a) {
      if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > a) throw new RangeError("Trying to access beyond buffer length")
    }

    function I(e, t, a, r, n, s) {
      if (!h.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > n || t < s) throw new RangeError('"value" argument is out of bounds');
      if (a + r > e.length) throw new RangeError("Index out of range")
    }

    function E(e, t, a, r) {
      t < 0 && (t = 65535 + t + 1);
      for (var n = 0, s = Math.min(e.length - a, 2); n < s; ++n) e[a + n] = (t & 255 << 8 * (r ? n : 1 - n)) >>> 8 * (r ? n : 1 - n)
    }

    function L(e, t, a, r) {
      t < 0 && (t = 4294967295 + t + 1);
      for (var n = 0, s = Math.min(e.length - a, 4); n < s; ++n) e[a + n] = t >>> 8 * (r ? n : 3 - n) & 255
    }

    function B(e, t, a, r, n, s) {
      if (a + r > e.length) throw new RangeError("Index out of range");
      if (a < 0) throw new RangeError("Index out of range")
    }

    function P(e, t, a, r, s) {
      return s || B(e, 0, a, 4), n.write(e, t, a, r, 23, 4), a + 4
    }

    function D(e, t, a, r, s) {
      return s || B(e, 0, a, 8), n.write(e, t, a, r, 52, 8), a + 8
    }
    h.prototype.slice = function(e, t) {
      var a, r = this.length;
      if (e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), h.TYPED_ARRAY_SUPPORT)(a = this.subarray(e, t)).__proto__ = h.prototype;
      else {
        var n = t - e;
        a = new h(n, void 0);
        for (var s = 0; s < n; ++s) a[s] = this[s + e]
      }
      return a
    }, h.prototype.readUIntLE = function(e, t, a) {
      e |= 0, t |= 0, a || k(e, t, this.length);
      for (var r = this[e], n = 1, s = 0; ++s < t && (n *= 256);) r += this[e + s] * n;
      return r
    }, h.prototype.readUIntBE = function(e, t, a) {
      e |= 0, t |= 0, a || k(e, t, this.length);
      for (var r = this[e + --t], n = 1; t > 0 && (n *= 256);) r += this[e + --t] * n;
      return r
    }, h.prototype.readUInt8 = function(e, t) {
      return t || k(e, 1, this.length), this[e]
    }, h.prototype.readUInt16LE = function(e, t) {
      return t || k(e, 2, this.length), this[e] | this[e + 1] << 8
    }, h.prototype.readUInt16BE = function(e, t) {
      return t || k(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, h.prototype.readUInt32LE = function(e, t) {
      return t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }, h.prototype.readUInt32BE = function(e, t) {
      return t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, h.prototype.readIntLE = function(e, t, a) {
      e |= 0, t |= 0, a || k(e, t, this.length);
      for (var r = this[e], n = 1, s = 0; ++s < t && (n *= 256);) r += this[e + s] * n;
      return r >= (n *= 128) && (r -= Math.pow(2, 8 * t)), r
    }, h.prototype.readIntBE = function(e, t, a) {
      e |= 0, t |= 0, a || k(e, t, this.length);
      for (var r = t, n = 1, s = this[e + --r]; r > 0 && (n *= 256);) s += this[e + --r] * n;
      return s >= (n *= 128) && (s -= Math.pow(2, 8 * t)), s
    }, h.prototype.readInt8 = function(e, t) {
      return t || k(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    }, h.prototype.readInt16LE = function(e, t) {
      t || k(e, 2, this.length);
      var a = this[e] | this[e + 1] << 8;
      return 32768 & a ? 4294901760 | a : a
    }, h.prototype.readInt16BE = function(e, t) {
      t || k(e, 2, this.length);
      var a = this[e + 1] | this[e] << 8;
      return 32768 & a ? 4294901760 | a : a
    }, h.prototype.readInt32LE = function(e, t) {
      return t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, h.prototype.readInt32BE = function(e, t) {
      return t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, h.prototype.readFloatLE = function(e, t) {
      return t || k(e, 4, this.length), n.read(this, e, !0, 23, 4)
    }, h.prototype.readFloatBE = function(e, t) {
      return t || k(e, 4, this.length), n.read(this, e, !1, 23, 4)
    }, h.prototype.readDoubleLE = function(e, t) {
      return t || k(e, 8, this.length), n.read(this, e, !0, 52, 8)
    }, h.prototype.readDoubleBE = function(e, t) {
      return t || k(e, 8, this.length), n.read(this, e, !1, 52, 8)
    }, h.prototype.writeUIntLE = function(e, t, a, r) {
      (e = +e, t |= 0, a |= 0, r) || I(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
      var n = 1,
        s = 0;
      for (this[t] = 255 & e; ++s < a && (n *= 256);) this[t + s] = e / n & 255;
      return t + a
    }, h.prototype.writeUIntBE = function(e, t, a, r) {
      (e = +e, t |= 0, a |= 0, r) || I(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
      var n = a - 1,
        s = 1;
      for (this[t + n] = 255 & e; --n >= 0 && (s *= 256);) this[t + n] = e / s & 255;
      return t + a
    }, h.prototype.writeUInt8 = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 1, 255, 0), h.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
    }, h.prototype.writeUInt16LE = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : E(this, e, t, !0), t + 2
    }, h.prototype.writeUInt16BE = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : E(this, e, t, !1), t + 2
    }, h.prototype.writeUInt32LE = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : L(this, e, t, !0), t + 4
    }, h.prototype.writeUInt32BE = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
    }, h.prototype.writeIntLE = function(e, t, a, r) {
      if (e = +e, t |= 0, !r) {
        var n = Math.pow(2, 8 * a - 1);
        I(this, e, t, a, n - 1, -n)
      }
      var s = 0,
        o = 1,
        i = 0;
      for (this[t] = 255 & e; ++s < a && (o *= 256);) e < 0 && 0 === i && 0 !== this[t + s - 1] && (i = 1), this[t + s] = (e / o >> 0) - i & 255;
      return t + a
    }, h.prototype.writeIntBE = function(e, t, a, r) {
      if (e = +e, t |= 0, !r) {
        var n = Math.pow(2, 8 * a - 1);
        I(this, e, t, a, n - 1, -n)
      }
      var s = a - 1,
        o = 1,
        i = 0;
      for (this[t + s] = 255 & e; --s >= 0 && (o *= 256);) e < 0 && 0 === i && 0 !== this[t + s + 1] && (i = 1), this[t + s] = (e / o >> 0) - i & 255;
      return t + a
    }, h.prototype.writeInt8 = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 1, 127, -128), h.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
    }, h.prototype.writeInt16LE = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : E(this, e, t, !0), t + 2
    }, h.prototype.writeInt16BE = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : E(this, e, t, !1), t + 2
    }, h.prototype.writeInt32LE = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 4, 2147483647, -2147483648), h.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : L(this, e, t, !0), t + 4
    }, h.prototype.writeInt32BE = function(e, t, a) {
      return e = +e, t |= 0, a || I(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), h.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
    }, h.prototype.writeFloatLE = function(e, t, a) {
      return P(this, e, t, !0, a)
    }, h.prototype.writeFloatBE = function(e, t, a) {
      return P(this, e, t, !1, a)
    }, h.prototype.writeDoubleLE = function(e, t, a) {
      return D(this, e, t, !0, a)
    }, h.prototype.writeDoubleBE = function(e, t, a) {
      return D(this, e, t, !1, a)
    }, h.prototype.copy = function(e, t, a, r) {
      if (a || (a = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < a && (r = a), r === a) return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError("targetStart out of bounds");
      if (a < 0 || a >= this.length) throw new RangeError("sourceStart out of bounds");
      if (r < 0) throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length), e.length - t < r - a && (r = e.length - t + a);
      var n, s = r - a;
      if (this === e && a < t && t < r)
        for (n = s - 1; n >= 0; --n) e[n + t] = this[n + a];
      else if (s < 1e3 || !h.TYPED_ARRAY_SUPPORT)
        for (n = 0; n < s; ++n) e[n + t] = this[n + a];
      else Uint8Array.prototype.set.call(e, this.subarray(a, a + s), t);
      return s
    }, h.prototype.fill = function(e, t, a, r) {
      if ("string" == typeof e) {
        if ("string" == typeof t ? (r = t, t = 0, a = this.length) : "string" == typeof a && (r = a, a = this.length), 1 === e.length) {
          var n = e.charCodeAt(0);
          n < 256 && (e = n)
        }
        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !h.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
      } else "number" == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < a) throw new RangeError("Out of range index");
      if (a <= t) return this;
      var s;
      if (t >>>= 0, a = void 0 === a ? this.length : a >>> 0, e || (e = 0), "number" == typeof e)
        for (s = t; s < a; ++s) this[s] = e;
      else {
        var o = h.isBuffer(e) ? e : R(new h(e, r).toString()),
          i = o.length;
        for (s = 0; s < a - t; ++s) this[s + t] = o[s % i]
      }
      return this
    };
    var W = /[^+\/0-9A-Za-z-_]/g;

    function q(e) {
      return e < 16 ? "0" + e.toString(16) : e.toString(16)
    }

    function R(e, t) {
      var a;
      t = t || 1 / 0;
      for (var r = e.length, n = null, s = [], o = 0; o < r; ++o) {
        if ((a = e.charCodeAt(o)) > 55295 && a < 57344) {
          if (!n) {
            if (a > 56319) {
              (t -= 3) > -1 && s.push(239, 191, 189);
              continue
            }
            if (o + 1 === r) {
              (t -= 3) > -1 && s.push(239, 191, 189);
              continue
            }
            n = a;
            continue
          }
          if (a < 56320) {
            (t -= 3) > -1 && s.push(239, 191, 189), n = a;
            continue
          }
          a = 65536 + (n - 55296 << 10 | a - 56320)
        } else n && (t -= 3) > -1 && s.push(239, 191, 189);
        if (n = null, a < 128) {
          if ((t -= 1) < 0) break;
          s.push(a)
        } else if (a < 2048) {
          if ((t -= 2) < 0) break;
          s.push(a >> 6 | 192, 63 & a | 128)
        } else if (a < 65536) {
          if ((t -= 3) < 0) break;
          s.push(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128)
        } else {
          if (!(a < 1114112)) throw new Error("Invalid code point");
          if ((t -= 4) < 0) break;
          s.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, 63 & a | 128)
        }
      }
      return s
    }

    function j(e) {
      return r.toByteArray(function(e) {
        if ((e = function(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
          }(e).replace(W, "")).length < 2) return "";
        for (; e.length % 4 != 0;) e += "=";
        return e
      }(e))
    }

    function K(e, t, a, r) {
      for (var n = 0; n < r && !(n + a >= t.length || n >= e.length); ++n) t[n + a] = e[n];
      return n
    }
  }).call(this, a(62))
}, function(e, t) {
  /*!
   * type-detect
   * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Primary Exports
   */
  var a = {
    "[object Array]": "array",
    "[object RegExp]": "regexp",
    "[object Function]": "function",
    "[object Arguments]": "arguments",
    "[object Date]": "date"
  };
  /*!
   * Detectable javascript natives
   */
  function r(e) {
    var t = Object.prototype.toString.call(e);
    return a[t] ? a[t] : null === e ? "null" : void 0 === e ? "undefined" : e === Object(e) ? "object" : typeof e
  }

  function n() {
    this.tests = {}
  }(e.exports = r).Library = n, n.prototype.of = r, n.prototype.define = function(e, t) {
    return 1 === arguments.length ? this.tests[e] : (this.tests[e] = t, this)
  }, n.prototype.test = function(e, t) {
    if (t === r(e)) return !0;
    var a = this.tests[t];
    if (a && "regexp" === r(a)) return a.test(e);
    if (a && "function" === r(a)) return a(e);
    throw new ReferenceError('Type test "' + t + '" not defined or invalid.')
  }
}, function(e, t, a) {
  e.exports = a(64)
}, function(e, t, a) {
  /*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependencies
   */
  var r, n = a(65);
  /*!
   * Buffer.isBuffer browser shim
   */
  try {
    r = a(63).Buffer
  } catch (e) {
    (r = {}).isBuffer = function() {
      return !1
    }
  }
  /*!
   * Primary Export
   */
  function s(e, t, a) {
    return !!o(e, t) || ("date" === n(e) ?
      /*!
       * Compare two Date objects by asserting that
       * the time values are equal using `saveValue`.
       *
       * @param {Date} a
       * @param {Date} b
       * @return {Boolean} result
       */
      function(e, t) {
        return "date" === n(t) && o(e.getTime(), t.getTime())
      }
      /*!
       * Compare two regular expressions by converting them
       * to string and checking for `sameValue`.
       *
       * @param {RegExp} a
       * @param {RegExp} b
       * @return {Boolean} result
       */
      (e, t) : "regexp" === n(e) ? function(e, t) {
        return "regexp" === n(t) && o(e.toString(), t.toString())
      }
      /*!
       * Assert deep equality of two `arguments` objects.
       * Unfortunately, these must be sliced to arrays
       * prior to test to ensure no bad behavior.
       *
       * @param {Arguments} a
       * @param {Arguments} b
       * @param {Array} memoize (optional)
       * @return {Boolean} result
       */
      (e, t) : r.isBuffer(e) ?
      /*!
       * Extension to `iterableEqual` specifically
       * for Node.js Buffers.
       *
       * @param {Buffer} a
       * @param {Mixed} b
       * @return {Boolean} result
       */
      function(e, t) {
        return !!r.isBuffer(t) && h(e, t)
      }
      /*!
       * Block for `objectEqual` ensuring non-existing
       * values don't get in.
       *
       * @param {Mixed} object
       * @return {Boolean} result
       */
      (e, t) : "arguments" === n(e) ? function(e, t, a) {
        return "arguments" === n(t) && (e = [].slice.call(e), t = [].slice.call(t), s(e, t, a))
      }
      /*!
       * Get enumerable properties of a given object.
       *
       * @param {Object} a
       * @return {Array} property names
       */
      (e, t, a) : !!
      /*!
       * Compare the types of two given objects and
       * return if they are equal. Note that an Array
       * has a type of `array` (not `object`) and arguments
       * have a type of `arguments` (not `array`/`object`).
       *
       * @param {Mixed} a
       * @param {Mixed} b
       * @return {Boolean} result
       */
      function(e, t) {
        return n(e) === n(t)
      }(e, t) && ("object" !== n(e) && "object" !== n(t) && "array" !== n(e) && "array" !== n(t) ? o(e, t) :
        /*!
         * Recursively check the equality of two objects.
         * Once basic sameness has been established it will
         * defer to `deepEqual` for each enumerable key
         * in the object.
         *
         * @param {Mixed} a
         * @param {Mixed} b
         * @return {Boolean} result
         */
        function(e, t, a) {
          if (!l(e) || !l(t)) return !1;
          if (e.prototype !== t.prototype) return !1;
          var r, n;
          if (a) {
            for (r = 0; r < a.length; r++)
              if (a[r][0] === e && a[r][1] === t || a[r][0] === t && a[r][1] === e) return !0
          } else a = [];
          try {
            var o = i(e),
              c = i(t)
          } catch (e) {
            return !1
          }
          if (o.sort(), c.sort(), !h(o, c)) return !1;
          for (a.push([e, t]), r = o.length - 1; r >= 0; r--)
            if (n = o[r], !s(e[n], t[n], a)) return !1;
          return !0
        }(e, t, a)))
  }
  /*!
   * Strict (egal) equality test. Ensures that NaN always
   * equals NaN and `-0` does not equal `+0`.
   *
   * @param {Mixed} a
   * @param {Mixed} b
   * @return {Boolean} equal match
   */
  function o(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
  }

  function i(e) {
    var t = [];
    for (var a in e) t.push(a);
    return t
  }
  /*!
   * Simple equality for flat iterable objects
   * such as Arrays or Node.js buffers.
   *
   * @param {Iterable} a
   * @param {Iterable} b
   * @return {Boolean} result
   */
  function h(e, t) {
    if (e.length !== t.length) return !1;
    for (var a = 0, r = !0; a < e.length; a++)
      if (e[a] !== t[a]) {
        r = !1;
        break
      }
    return r
  }

  function l(e) {
    return null !== e && void 0 !== e
  }
  e.exports = s
}, function(e, t, a) {
  e.exports = a(66)
}, function(e, t) {
  /*!
   * Chai - getEnumerableProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e) {
    var t = [];
    for (var a in e) t.push(a);
    return t
  }
}, function(e, t) {
  /*!
   * Chai - getProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function(e) {
    var t = Object.getOwnPropertyNames(e);

    function a(e) {
      -1 === t.indexOf(e) && t.push(e)
    }
    for (var r = Object.getPrototypeOf(e); null !== r;) Object.getOwnPropertyNames(r).forEach(a), r = Object.getPrototypeOf(r);
    return t
  }
}, function(e, t, a) {
  /*!
   * Chai - message composition utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependancies
   */
  var r = a(2),
    n = a(18),
    s = (a(11), a(16));
  e.exports = function(e, t) {
    var a = r(e, "negate"),
      o = r(e, "object"),
      i = t[3],
      h = n(e, t),
      l = a ? t[2] : t[1],
      c = r(e, "message");
    return "function" == typeof l && (l = l()), l = (l = l || "").replace(/#\{this\}/g, function() {
      return s(o)
    }).replace(/#\{act\}/g, function() {
      return s(h)
    }).replace(/#\{exp\}/g, function() {
      return s(i)
    }), c ? c + ": " + l : l
  }
}, function(e, t, a) {
  /*!
   * Chai - expectTypes utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = a(19),
    n = a(2),
    s = a(12);
  e.exports = function(e, t) {
    e = n(e, "object");
    (t = t.map(function(e) {
      return e.toLowerCase()
    })).sort();
    var a = t.map(function(e, a) {
      var r = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an" : "a";
      return (t.length > 1 && a === t.length - 1 ? "or " : "") + r + " " + e
    }).join(", ");
    if (!t.some(function(t) {
        return s(e) === t
      })) throw new r("object tested must be " + a + ", but " + s(e) + " given")
  }
}, function(e, t) {
  /*!
   * type-detect
   * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Primary Exports
   */
  var a = /^\[object (.*)\]$/;

  function r(e) {
    var t = Object.prototype.toString.call(e).match(a)[1].toLowerCase();
    return "function" == typeof Promise && e instanceof Promise ? "promise" : null === e ? "null" : void 0 === e ? "undefined" : t
  }

  function n() {
    if (!(this instanceof n)) return new n;
    this.tests = {}
  }(e.exports = r).Library = n, n.prototype.of = r, n.prototype.define = function(e, t) {
    return 1 === arguments.length ? this.tests[e] : (this.tests[e] = t, this)
  }, n.prototype.test = function(e, t) {
    if (t === r(e)) return !0;
    var a = this.tests[t];
    if (a && "regexp" === r(a)) return a.test(e);
    if (a && "function" === r(a)) return a(e);
    throw new ReferenceError('Type test "' + t + '" not defined or invalid.')
  }
}, function(e, t, a) {
  /*!
   * Chai - test utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependancies
   */
  var r = a(2);
  e.exports = function(e, t) {
    var a = r(e, "negate"),
      n = t[0];
    return a ? !n : n
  }
}, function(e, t, a) {
  /*!
   * test utility
   */
  (t = e.exports = {}).test = a(73),
    /*!
     * type utility
     */
    t.type = a(12),
    /*!
     * expectTypes utility
     */
    t.expectTypes = a(71),
    /*!
     * message utility
     */
    t.getMessage = a(70),
    /*!
     * actual utility
     */
    t.getActual = a(18),
    /*!
     * Inspect util
     */
    t.inspect = a(11),
    /*!
     * Object Display util
     */
    t.objDisplay = a(16),
    /*!
     * Flag utility
     */
    t.flag = a(2),
    /*!
     * Flag transferring utility
     */
    t.transferFlags = a(15),
    /*!
     * Deep equal utility
     */
    t.eql = a(67),
    /*!
     * Deep path value
     */
    t.getPathValue = a(58),
    /*!
     * Deep path info
     */
    t.getPathInfo = a(14),
    /*!
     * Check if a property exists
     */
    t.hasProperty = a(13),
    /*!
     * Function name
     */
    t.getName = a(17),
    /*!
     * add Property
     */
    t.addProperty = a(57),
    /*!
     * add Method
     */
    t.addMethod = a(56),
    /*!
     * overwrite Property
     */
    t.overwriteProperty = a(55),
    /*!
     * overwrite Method
     */
    t.overwriteMethod = a(54),
    /*!
     * Add a chainable method
     */
    t.addChainableMethod = a(53),
    /*!
     * Overwrite chainable method
     */
    t.overwriteChainableMethod = a(52)
}, function(e, t, a) {
  /*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = [];
  /*!
   * Chai version
   */
  (t = e.exports = {}).version = "3.5.0",
    /*!
     * Assertion Error
     */
    t.AssertionError = a(19);
  /*!
   * Utils for plugins (not exported)
   */
  var n = a(74);
  t.use = function(e) {
      return ~r.indexOf(e) || (e(this, n), r.push(e)), this
    },
    /*!
     * Utility Functions
     */
    t.util = n;
  /*!
   * Configuration
   */
  var s = a(4);
  t.config = s;
  /*!
   * Primary `Assertion` prototype
   */
  var o = a(51);
  t.use(o);
  /*!
   * Core Assertions
   */
  var i = a(50);
  t.use(i);
  /*!
   * Expect interface
   */
  var h = a(49);
  t.use(h);
  /*!
   * Should interface
   */
  var l = a(48);
  t.use(l);
  /*!
   * Assert interface
   */
  var c = a(47);
  t.use(c)
}, function(e, t, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.selectProject = function(e) {
    localStorage.removeItem("fCC_" + e + "_hide"), localStorage.setItem("project_selector", e);
    var t = e.replace(/-/g, " ").split(" ").map(function(e) {
      return e.charAt(0).toUpperCase() + e.substr(1)
    }).join(" ");
    document.getElementById("fcc_test_suite_indicator_wrapper").innerHTML = "<span id=fcc_test_suite_indicator>FCC Test Suite: " + "".concat(t, "</span>"), localStorage.setItem("projectTitleCase", t)
  }, t.FCCUpdateTestResult = x, t.FCCUpdateTestProgress = M, t.FCCOpenTestModal = N, t.FCCCloseTestModal = S, t.FCCclickOutsideToCloseModal = function(e) {
    "fcc_test_message-box" === e.target.id && S()
  }, t.FCCRerunTests = k, t.FCCResetTests = I, t.alertOnce = L, t.hamburgerTransform = B, t.FCCInitTestRunner = P, t.assert = void 0;
  var r = v(a(6)),
    n = v(a(0)),
    s = v(a(46)),
    o = v(a(45)),
    i = v(a(44)),
    h = (v(a(43)), v(a(40)), v(a(38)), v(a(36))),
    l = v(a(35)),
    c = v(a(34)),
    u = v(a(33)),
    f = v(a(32)),
    p = v(a(31)),
    m = v(a(30)),
    g = v(a(29)),
    d = v(a(28)),
    y = v(a(27)),
    b = v(a(25)),
    C = v(a(24)),
    O = v(a(22)),
    H = v(a(21)),
    _ = v(a(20));

  function v(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var w = n.default.assert;
  t.assert = w;
  var A, T = !1;

  function x(e, t, a) {
    var r = document.getElementById("fcc_test_button");
    r.innerHTML = "Tests ".concat(t, "/").concat(e), a ? r.classList.add("fcc_test_btn-error") : r.classList.add("fcc_test_btn-success")
  }

  function M(e, t) {
    var a = document.getElementById("fcc_test_button");
    a.classList.add("fcc_test_btn-executing"), a.innerHTML = "Testing ".concat(t, "/").concat(e)
  }

  function N() {
    var e = document.getElementById("fcc_test_message-box");
    e.classList.remove("fcc_test_message-box-hidden"), e.classList.add("fcc_test_message-box-shown")
  }

  function S() {
    var e = document.getElementById("fcc_test_message-box");
    e.classList.remove("fcc_test_message-box-shown"), e.classList.add("fcc_test_message-box-hidden")
  }

  function k() {
    var e = document.getElementById("fcc_test_button");
    e.innerHTML = T || localStorage.getItem("project_selector") ? "Testing" : "Load Tests!", e.title = T || localStorage.getItem("project_selector") ? "CTRL + SHIFT + T" : "Select test suite from dropdown above",
      function(e) {
        for (var t = new Array(e.classList.length), a = 0; a < e.classList.length; a++) t[a] = e.classList[a];
        for (var r = 0; r < t.length; r++) e.classList.remove(t[r])
      }(e), e.classList.add("fcc_foldout_buttons"), e.classList.add("fcc_test_btn-default"), P()
  }

  function I(e) {
    e.tests.forEach(function(e) {
      delete e.state, e.timedOut = !1
    }), e.suites.forEach(I)
  }(A = document.createElement("script")).setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/mocha/3.0.2/mocha.min.js"), document.head.appendChild(A), (0, r.default)(document).ready(function() {
    !1 === (!!window.chrome && !!window.chrome.webstore) && L("Intro Alert", "Test suites are currently optimized for Chrome. There are known issues that we are trying to work through to make these suites fully cross-browser compatible, but it is a work in progress. For the best user experience, please use Chrome until these issues are resolved. Thanks and Happy Coding!");
    var e = setInterval(function() {
      return t()
    }, 50);

    function t() {
      try {
        if (mocha) {
          clearInterval(e), mocha.setup("bdd");
          var t = localStorage.getItem("projectTitleCase");
          "undefined" != typeof projectName && (T = projectName);
          var a = document.createElement("div");
          a.className = "fcc_test_ui", a.innerHTML = o.default, document.body.appendChild(a);
          var r = document.createElement("div");
          r.setAttribute("id", "fcc_foldout_menu"), r.innerHTML = s.default, a.appendChild(r);
          var n = document.createElement("div");
          n.className = "fcc_test_ui", n.innerHTML = i.default, document.body.appendChild(n);
          var h = document.getElementById("fcc_toggle"),
            l = document.getElementById("fcc_test_suite_indicator_wrapper"),
            c = document.getElementById("placeholder");
          T || null !== t ? T ? (c.innerHTML = "".concat(localStorage.getItem("example_project")), l.innerHTML = "<span id=fcc_test_suite_indicator>FCC Test Suite: " + "".concat(localStorage.getItem("example_project"), "</span>")) : (c.innerHTML = t, l.innerHTML = "<span id=fcc_test_suite_indicator>FCC Test Suite: " + "".concat(t, "</span>")) : (c.innerHTML = "- - -", l.innerHTML = ""), localStorage.getItem("fCC_" + localStorage.getItem("project_selector") + "_hide") ? (B(), h.checked = !0) : h.checked = !1
        }
      } catch (e) {
        console.warn("mocha not loaded yet")
      }
    }
    t()
  }), (0, r.default)(document).keyup(function(e) {
    27 === (e = e || window.event).keyCode && S()
  });
  var E = [];

  function L(e, t) {
    sessionStorage.getItem(e) || !1 || (alert(t), sessionStorage.setItem(e, !0))
  }

  function B() {
    document.getElementById("hamburger_top").classList.contains("transform_top") ? (document.getElementById("hamburger_top").classList.remove("transform_top"), document.getElementById("hamburger_middle").classList.remove("transform_middle"), document.getElementById("hamburger_bottom").classList.remove("transform_bottom"), localStorage.setItem("fCC_" + localStorage.getItem("project_selector") + "_hide", !0)) : (document.getElementById("hamburger_top").classList.add("transform_top"), document.getElementById("hamburger_middle").classList.add("transform_middle"), document.getElementById("hamburger_bottom").classList.add("transform_bottom"))
  }

  function P() {
    var e = null;
    switch (document.querySelector(".fcc_test_message-box-body #mocha").innerHTML = "", mocha.suite.suites = [], T || null || localStorage.getItem("project_selector")) {
      case "random-quote-machine":
        (0, H.default)();
        break;
      case "javascript-calculator":
        (0, c.default)();
        break;
      case "pomodoro-clock":
        (0, u.default)();
        break;
      case "tribute-page":
        (0, f.default)();
        break;
      case "drum-machine":
        (0, h.default)();
        break;
      case "portfolio":
        (0, p.default)();
        break;
      case "product-landing-page":
        (0, m.default)();
        break;
      case "survey-form":
        (0, g.default)();
        break;
      case "markdown-previewer":
        (0, l.default)();
        break;
      case "technical-docs-page":
        (0, d.default)();
        break;
      case "bar-chart":
        (0, y.default)();
        break;
      case "scatter-plot":
        (0, b.default)();
        break;
      case "choropleth":
        (0, C.default)();
        break;
      case "heat-map":
        (0, _.default)();
        break;
      case "tree-map":
        (0, O.default)()
    }
    var t = 0;
    mocha.suite.eachTest(function() {
      return t++
    });
    var a = 0,
      r = 0,
      n = 0,
      s = function() {
        return r++
      },
      o = function() {
        return n++
      },
      i = function() {
        return M(t, ++a)
      },
      v = function() {
        return x && x(t, r, n)
      };
    e && (I(mocha.suite), e.abort(), e.removeListener("pass", s), e.removeListener("fail", o), e.removeListener("test end", i), e.removeListener("end", v)), (e = mocha.run()).on("pass", s), e.on("fail", o), e.on("test end", i), e.on("end", v)
  }
  onkeydown = onkeyup = function(e) {
    var t = document.getElementById("fcc_test_message-box");
    if (e = e || window.event, E[e.keyCode] = "keydown" === e.type, E[17] && E[16] && E[13]) {
      if ("markdown-previewer" === localStorage.getItem("project_selector")) return void L("alerted", "Run-Test hotkey disabled for this project, please use mouse.");
      k()
    } else E[17] && E[16] && E[84] ? t.classList.contains("fcc_test_message-box-hidden") ? N() : S() : E[17] && E[16] && E[79] && document.getElementById("fcc_toggle").click()
  }, "function" != typeof NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach)
}]);
