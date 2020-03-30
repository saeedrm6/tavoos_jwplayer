var version = '1.4';

function loadcss(cssfile) {
    var t = document.createElement("link");
    t.async = 1;
    t.href = cssfile + "?v=" + version, t.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(t)
}

window.jwplayer = function (s) {
    function t(t) {
        for (var e, r, l = t[0], o = t[1], c = 0, u = []; c < l.length; c++) r = l[c], d[r] && u.push(d[r][0]), d[r] = 0;
        for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (s[e] = o[e]);
        for (p && p(t); u.length;) u.shift()()
    }

    function l(t) {
        if (i[t]) return i[t].exports;
        var e = i[t] = {i: t, l: !1, exports: {}};
        return s[t].call(e.exports, e, e.exports, l), e.l = !0, e.exports
    }

    var i = {}, d = {0: 0};
    l.e = function (r) {
        var t = [], s = d[r];
        if (0 !== s) if (s) t.push(s[2]); else {
            var e = new Promise(function (t, e) {
                s = d[r] = [t, e]
            });
            t.push(s[2] = e);
            var i, p = document.createElement("script");
            p.charset = "utf-8", p.timeout = 55, l.nc && p.setAttribute("nonce", l.nc), p.src = function (e) {
                return window.jwplayer.base + "" + ({
                    1: "jwplayer.controls",
                    2: "jwplayer.core",
                    3: "jwplayer.core.controls",
                    4: "jwplayer.core.controls.html5",
                    5: "jwplayer.core.controls.polyfills",
                    6: "jwplayer.core.controls.polyfills.html5",
                    7: "jwplayer.vr",
                    8: "polyfills.intersection-observer",
                    9: "polyfills.webvtt",
                    10: "provider.airplay",
                    11: "provider.cast",
                    12: "provider.flash",
                    13: "provider.hlsjs",
                    14: "provider.hlsjs-progressive",
                    15: "provider.html5",
                    16: "provider.shaka",
                    17: "related",
                    18: "vttparser",
                }[e] || e) + ".js?ver=1.1"
            }(r), i = function (t) {
                p.onerror = p.onload = null, clearTimeout(a);
                var e = d[r];
                if (0 !== e) {
                    if (e) {
                        var n = t && ("load" === t.type ? "missing" : t.type), i = t && t.target && t.target.src,
                            o = new Error("Loading chunk " + r + " failed.\n(" + n + ": " + i + ")");
                        o.type = n, o.request = i, e[1](o)
                    }
                    d[r] = void 0
                }
            };
            var a = setTimeout(function () {
                i({type: "timeout", target: p})
            }, 55e3);
            p.onerror = p.onload = i, document.head.appendChild(p)
        }
        return Promise.all(t)
    }, l.m = s, l.c = i, l.d = function (a, t, e) {
        l.o(a, t) || Object.defineProperty(a, t, {enumerable: !0, get: e})
    }, l.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, l.t = function (a, i) {
        if (1 & i && (a = l(a)), 8 & i) return a;
        if (4 & i && "object" == typeof a && a && a.__esModule) return a;
        var e = Object.create(null);
        if (l.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: a
        }), 2 & i && "string" != typeof a) for (var n in a) l.d(e, n, function (t) {
            return a[t]
        }.bind(null, n));
        return e
    }, l.n = function (a) {
        var t = a && a.__esModule ? function () {
            return a.default
        } : function () {
            return a
        };
        return l.d(t, "a", t), t
    }, l.o = function (a, t) {
        return Object.prototype.hasOwnProperty.call(a, t)
    }, l.p = "", l.oe = function (e) {
        throw console.error(e), e
    };
    var e = window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || [], n = e.push.bind(e);
    e.push = t, e = e.slice();
    for (var r = 0; r < e.length; r++) t(e[r]);
    var p = n;
    return l(l.s = 69)
}([function (C, t, e) {
    "use strict";
    e.d(t, "j", function () {
        return j
    }), e.d(t, "B", function () {
        return k
    }), e.d(t, "G", function () {
        return P
    }), e.d(t, "m", function () {
        return E
    }), e.d(t, "l", function () {
        return S
    }), e.d(t, "a", function () {
        return T
    }), e.d(t, "b", function () {
        return _
    }), e.d(t, "H", function () {
        return A
    }), e.d(t, "o", function () {
        return F
    }), e.d(t, "I", function () {
        return N
    }), e.d(t, "e", function () {
        return M
    }), e.d(t, "K", function () {
        return R
    }), e.d(t, "n", function () {
        return B
    }), e.d(t, "i", function () {
        return q
    }), e.d(t, "q", function () {
        return z
    }), e.d(t, "c", function () {
        return H
    }), e.d(t, "D", function () {
        return W
    }), e.d(t, "J", function () {
        return K
    }), e.d(t, "r", function () {
        return G
    }), e.d(t, "h", function () {
        return $
    }), e.d(t, "k", function () {
        return ee
    }), e.d(t, "E", function () {
        return te
    }), e.d(t, "x", function () {
        return ne
    }), e.d(t, "u", function () {
        return se
    }), e.d(t, "w", function () {
        return le
    }), e.d(t, "y", function () {
        return de
    }), e.d(t, "t", function () {
        return ce
    }), e.d(t, "v", function () {
        return pe
    }), e.d(t, "s", function () {
        return ue
    }), e.d(t, "z", function () {
        return ge
    }), e.d(t, "p", function () {
        return he
    }), e.d(t, "d", function () {
        return fe
    }), e.d(t, "F", function () {
        return ye
    }), e.d(t, "C", function () {
        return be
    }), e.d(t, "A", function () {
        return ke
    }), e.d(t, "f", function () {
        return we
    });
    var n = e(18), x = {}, i = Array.prototype, r = Object.prototype, o = Function.prototype, a = i.slice, c = i.concat,
        s = r.toString, l = r.hasOwnProperty, u = i.map, d = i.reduce, p = i.forEach, h = i.filter, f = i.every,
        g = i.some, b = i.indexOf, m = Array.isArray, y = Object.keys, v = o.bind, w = window.isFinite,
        j = function (a, t, e) {
            var n, i;
            if (null == a) return a;
            if (p && a.forEach === p) a.forEach(t, e); else if (a.length === +a.length) {
                for (n = 0, i = a.length; n < i; n++) if (t.call(e, a[n], n, a) === x) return
            } else {
                var s = Z(a);
                for (n = 0, i = s.length; n < i; n++) if (t.call(e, a[s[n]], s[n], a) === x) return
            }
            return a
        }, k = function (a, s, e) {
            var n = [];
            return null == a ? n : u && a.map === u ? a.map(s, e) : (j(a, function (a, t, r) {
                n.push(s.call(e, a, t, r))
            }), n)
        }, P = function (a, s, l, c) {
            var r = 2 < arguments.length;
            if (null == a && (a = []), d && a.reduce === d) return c && (s = H(s, c)), r ? a.reduce(s, l) : a.reduce(s);
            if (j(a, function (e, t, a) {
                r ? l = s.call(c, l, e, t, a) : (l = e, r = !0)
            }), !r) throw new TypeError("Reduce of empty array with no initial value");
            return l
        }, E = function (a, s, e) {
            var n;
            return _(a, function (a, t, r) {
                if (s.call(e, a, t, r)) return n = a, !0
            }), n
        }, S = function (a, s, e) {
            var n = [];
            return null == a ? n : h && a.filter === h ? a.filter(s, e) : (j(a, function (a, t, r) {
                s.call(e, a, t, r) && n.push(a)
            }), n)
        }, T = function (a, i, s) {
            i || (i = he);
            var n = !0;
            return null == a ? n : f && a.every === f ? a.every(i, s) : (j(a, function (e, t, a) {
                if (!(n = n && i.call(s, e, t, a))) return x
            }), !!n)
        }, _ = function (a, i, s) {
            i || (i = he);
            var n = !1;
            return null == a ? n : g && a.some === g ? a.some(i, s) : (j(a, function (e, t, a) {
                if (n || (n = i.call(s, e, t, a))) return x
            }), !!n)
        }, A = function (e) {
            return null == e ? 0 : e.length === +e.length ? e.length : Z(e).length
        }, O = function (a, r) {
            var i;
            return function () {
                return 0 < --a && (i = r.apply(this, arguments)), 1 >= a && (r = null), i
            }
        }, L = function (e) {
            return null == e ? he : se(e) ? e : ye(e)
        }, I = function (s) {
            return function (t, e, l) {
                var r = {};
                return e = L(e), j(t, function (n, i) {
                    var o = e.call(l, n, i, t);
                    s(r, o, n)
                }), r
            }
        }, F = I(function (a, t, e) {
            me(a, t) ? a[t].push(e) : a[t] = [e]
        }), D = I(function (a, t, e) {
            a[t] = e
        }), N = function (s, t, e, l) {
            for (var r, d = (e = L(e)).call(l, t), i = 0, c = s.length; i < c;) r = i + c >>> 1, e.call(l, s[r]) < d ? i = r + 1 : c = r;
            return i
        }, M = function (a, n) {
            return null != a && (a.length !== +a.length && (a = J(a)), 0 <= z(a, n))
        }, R = function (a, t) {
            return S(a, be(t))
        }, B = function (a, t) {
            return E(a, be(t))
        }, q = function (n) {
            var r = c.apply(i, a.call(arguments, 1));
            return S(n, function (e) {
                return !M(r, e)
            })
        }, z = function (a, t, e) {
            if (null == a) return -1;
            var n = 0, o = a.length;
            if (e) {
                if ("number" != typeof e) return a[n = N(a, t)] === t ? n : -1;
                n = 0 > e ? Math.max(0, o + e) : e
            }
            if (b && a.indexOf === b) return a.indexOf(t, e);
            for (; n < o; n++) if (a[n] === t) return n;
            return -1
        }, V = function () {
        }, H = function (s, t) {
            var e, l;
            if (v && s.bind === v) return v.apply(s, a.call(arguments, 1));
            if (!se(s)) throw new TypeError;
            return e = a.call(arguments, 2), l = function () {
                if (!(this instanceof l)) return s.apply(t, e.concat(a.call(arguments)));
                V.prototype = s.prototype;
                var n = new V;
                V.prototype = null;
                var r = s.apply(n, e.concat(a.call(arguments)));
                return Object(r) === r ? r : n
            }
        }, Q = function (s) {
            var t = a.call(arguments, 1);
            return function () {
                for (var e = 0, a = t.slice(), r = 0, l = a.length; r < l; r++) me(a[r], "partial") && (a[r] = arguments[e++]);
                for (; e < arguments.length;) a.push(arguments[e++]);
                return s.apply(this, a)
            }
        }, X = Q(O, 2), W = function (a, t) {
            var i = {};
            return t || (t = he), function () {
                var e = t.apply(this, arguments);
                return me(i, e) ? i[e] : i[e] = a.apply(this, arguments)
            }
        }, Y = function (r, t) {
            var e = a.call(arguments, 2);
            return setTimeout(function () {
                return r.apply(null, e)
            }, t)
        }, U = Q(Y, {partial: Q}, 1), K = function (l, t, e) {
            var d, p, g, m = null, h = 0;
            e || (e = {});
            var f = function () {
                h = !1 === e.leading ? 0 : ve(), m = null, g = l.apply(d, p), d = p = null
            };
            return function () {
                h || !1 !== e.leading || (h = ve);
                var a = t - (ve - h);
                return d = this, p = arguments, 0 >= a ? (clearTimeout(m), m = null, h = ve, g = l.apply(d, p), d = p = null) : m || !1 === e.trailing || (m = setTimeout(f, a)), g
            }
        }, Z = function (a) {
            if (!ne(a)) return [];
            if (y) return y(a);
            var t = [];
            for (var e in a) me(a, e) && t.push(e);
            return t
        }, J = function (a) {
            for (var t = Z(a), e = Z.length, n = Array(e), r = 0; r < e; r++) n[r] = a[t[r]];
            return n
        }, G = function (a) {
            for (var t = {}, e = Z(a), n = 0, o = e.length; n < o; n++) t[a[e[n]]] = e[n];
            return t
        }, $ = function (r) {
            return j(a.call(arguments, 1), function (t) {
                if (t) for (var e in t) void 0 === r[e] && (r[e] = t[e])
            }), r
        }, ee = Object.assign || function (r) {
            return j(a.call(arguments, 1), function (t) {
                if (t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e])
            }), r
        }, te = function (r) {
            var t = {}, e = c.apply(i, a.call(arguments, 1));
            return j(e, function (e) {
                e in r && (t[e] = r[e])
            }), t
        }, ae = m || function (e) {
            return "[object Array]" == s.call(e)
        }, ne = function (e) {
            return e === Object(e)
        }, re = [];
    j(["Function", "String", "Number", "Date", "RegExp"], function (a) {
        re[a] = function (t) {
            return s.call(t) == "[object " + a + "]"
        }
    }), re.Function = function (e) {
        return "function" == typeof e
    };
    var ie = re.Date, oe = re.RegExp, se = re.Function, le = re.Number, de = re.String, ce = function (e) {
        return w(e) && !pe(parseFloat(e))
    }, pe = function (e) {
        return le(e) && e != +e
    }, ue = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" == s.call(e)
    }, ge = function (e) {
        return void 0 === e
    }, me = function (a, t) {
        return l.call(a, t)
    }, he = function (e) {
        return e
    }, fe = function (e) {
        return function () {
            return e
        }
    }, ye = function (a) {
        return function (t) {
            return t[a]
        }
    }, be = function (a) {
        return function (t) {
            if (t === a) return !0;
            for (var e in a) if (a[e] !== t[e]) return !1;
            return !0
        }
    }, ve = n.a, ke = function (e) {
        return le(e) && !pe(e)
    }, we = function (a) {
        var t, s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100;
        return function () {
            for (var e = this, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            clearTimeout(t), t = setTimeout(function () {
                a.apply(e, r)
            }, s)
        }
    };
    t.g = {
        after: function (a, n) {
            return function () {
                if (1 > --a) return n.apply(this, arguments)
            }
        },
        all: T,
        any: _,
        before: O,
        bind: H,
        clone: function (e) {
            return ne(e) ? ae(e) ? e.slice() : ee({}, e) : e
        },
        collect: k,
        compact: function (e) {
            return S(e, he)
        },
        constant: fe,
        contains: M,
        debounce: we,
        defaults: $,
        defer: U,
        delay: Y,
        detect: E,
        difference: q,
        each: j,
        every: T,
        extend: ee,
        filter: S,
        find: E,
        findWhere: B,
        foldl: P,
        forEach: j,
        groupBy: F,
        has: me,
        identity: he,
        include: M,
        indexBy: D,
        indexOf: z,
        inject: P,
        invert: G,
        isArray: ae,
        isBoolean: ue,
        isDate: ie,
        isFinite: ce,
        isFunction: se,
        isNaN: pe,
        isNull: function (e) {
            return null === e
        },
        isNumber: le,
        isObject: ne,
        isRegExp: oe,
        isString: de,
        isUndefined: ge,
        isValidNumber: ke,
        keys: Z,
        last: function (r, t, e) {
            if (null != r) return null == t || e ? r[r.length - 1] : a.call(r, Math.max(r.length - t, 0))
        },
        map: k,
        matches: be,
        max: function (a, s, e) {
            if (!s && ae(a) && a[0] === +a[0] && 65535 > a.length) return Math.max.apply(Math, a);
            var n = -1 / 0, l = -1 / 0;
            return j(a, function (r, t, i) {
                var o = s ? s.call(e, r, t, i) : r;
                o > l && (n = r, l = o)
            }), n
        },
        memoize: W,
        now: ve,
        omit: function (o) {
            var t = {}, e = c.apply(i, a.call(arguments, 1));
            for (var n in o) M(e, n) || (t[n] = o[n]);
            return t
        },
        once: X,
        partial: Q,
        pick: te,
        pluck: function (a, t) {
            return k(a, ye(t))
        },
        property: ye,
        propertyOf: function (a) {
            return null == a ? function () {
            } : function (t) {
                return a[t]
            }
        },
        reduce: P,
        reject: function (a, o, e) {
            return S(a, function (a, t, n) {
                return !o.call(e, a, t, n)
            }, e)
        },
        result: function (a, t) {
            if (null != a) {
                var e = a[t];
                return se(e) ? e.call(a) : e
            }
        },
        select: S,
        size: A,
        some: _,
        sortedIndex: N,
        throttle: K,
        where: R,
        without: function (e) {
            return q(e, a.call(arguments, 1))
        }
    }
}, function (y, t, e) {
    "use strict";

    function k(a, t) {
        for (var e, i = 0; i < t.length; i++) e = t[i], e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, e.key, e)
    }

    function i(a, t, e) {
        return e instanceof I && e.code ? e : new I(a, t, e)
    }

    function n(a, t) {
        var e = i("technicalError", t, a);
        return e.code = (a && a.code || 0) + t, e
    }

    function w(a) {
        var t = a.name, e = a.message;
        return "AbortError" === t ? /pause/.test(e) ? 303213 : /load/.test(e) ? 303212 : 303210 : "NotAllowedError" === t ? 303220 : "NotSupportedError" === t ? 303230 : 303200
    }

    e.d(t, "y", function () {
        return r
    }), e.d(t, "x", function () {
        return o
    }), e.d(t, "w", function () {
        return u
    }), e.d(t, "t", function () {
        return a
    }), e.d(t, "u", function () {
        return c
    }), e.d(t, "a", function () {
        return s
    }), e.d(t, "c", function () {
        return l
    }), e.d(t, "v", function () {
        return f
    }), e.d(t, "d", function () {
        return d
    }), e.d(t, "h", function () {
        return p
    }), e.d(t, "e", function () {
        return h
    }), e.d(t, "k", function () {
        return v
    }), e.d(t, "i", function () {
        return g
    }), e.d(t, "j", function () {
        return b
    }), e.d(t, "b", function () {
        return m
    }), e.d(t, "f", function () {
        return P
    }), e.d(t, "g", function () {
        return x
    }), e.d(t, "o", function () {
        return j
    }), e.d(t, "l", function () {
        return E
    }), e.d(t, "m", function () {
        return S
    }), e.d(t, "n", function () {
        return T
    }), e.d(t, "p", function () {
        return _
    }), e.d(t, "q", function () {
        return A
    }), e.d(t, "r", function () {
        return O
    }), e.d(t, "s", function () {
        return I
    }), e.d(t, "A", function () {
        return i
    }), e.d(t, "z", function () {
        return n
    }), e.d(t, "B", function () {
        return w
    });
    var C = e(0), r = 1e5, o = 100001, u = 100002, a = 101e3, c = 102e3, s = 200001, l = 202e3, f = 104e3, d = 203e3,
        p = 203640, h = 204e3, v = 210001, g = 21e4, b = 214e3, m = 306e3, P = 308e3, x = 308640, j = "cantPlayVideo",
        E = "badConnection", S = "cantLoadPlayer", T = "cantPlayInBrowser", _ = "liveStreamDown",
        A = "protectedContent", O = "technicalError", I = function () {
            function a(t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                !function (a, t) {
                    if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), this.code = Object(C.A)(e) ? e : 0, this.sourceError = n, t && (this.key = t)
            }

            var t, r, i;
            return t = a, i = [{
                key: "logMessage", value: function (a) {
                    var t = a % 1e3, e = Math.floor((a - t) / 1e3), n = a;
                    return 400 <= t && 600 > t && (n = "".concat(e, "400-").concat(e, "599")), "JW Player ".concat(299999 < a && 4e5 > a ? "Warning" : "Error", " ").concat(a, ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#").concat(n)
                }
            }], (r = null) && k(t.prototype, r), i && k(t, i), a
        }()
}, function (g, t, e) {
    "use strict";

    function n(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }

    function o(a, r, e) {
        for (a = "" + a, e = e || "0"; a.length < r;) a = e + a;
        return a
    }

    function u(a, t) {
        for (var e = a.attributes, n = 0; n < e.length; n++) if (e[n].name && e[n].name.toLowerCase() === t.toLowerCase()) return e[n].value.toString();
        return ""
    }

    function a(a) {
        if (!a || "rtmp" === a.substr(0, 4)) return "";
        var n = /[(,]format=(m3u8|mpd)-/i.exec(a);
        return n ? n[1] : -1 < (a = a.split("?")[0].split("#")[0]).lastIndexOf(".") ? a.substr(a.lastIndexOf(".") + 1, a.length).toLowerCase() : void 0
    }

    function c(e) {
        return o(0 | e / 3600, 2) + ":" + o((0 | e / 60) % 60, 2) + ":" + o((e % 60).toFixed(3), 6)
    }

    function s(i, t) {
        if (!i) return 0;
        if (Object(h.A)(i)) return i;
        var e = i.replace(",", "."), n = e.slice(-1), o = e.split(":"), l = o.length, a = 0;
        if ("s" === n) a = r(e); else if ("m" === n) a = 60 * r(e); else if ("h" === n) a = 3600 * r(e); else if (1 < l) {
            var d = l - 1;
            4 === l && (t && (a = r(o[d]) / t), d -= 1), a += r(o[d]), a += 60 * r(o[d - 1]), 3 <= l && (a += 3600 * r(o[d - 2]))
        } else a = r(e);
        return Object(h.A)(a) ? a : 0
    }

    function l(a, t, e) {
        if (Object(h.y)(a) && "%" === a.slice(-1)) {
            var n = r(a);
            return t && Object(h.A)(t) && Object(h.A)(n) ? t * n / 100 : null
        }
        return s(a, e)
    }

    function m(a, n) {
        return a.map(function (e) {
            return n + e
        })
    }

    function d(a, n) {
        return a.map(function (e) {
            return e + n
        })
    }

    function p(e) {
        return "string" == typeof e && "%" === e.slice(-1)
    }

    e.d(t, "i", function () {
        return n
    }), e.d(t, "e", function () {
        return o
    }), e.d(t, "j", function () {
        return u
    }), e.d(t, "a", function () {
        return a
    }), e.d(t, "b", function () {
        return c
    }), e.d(t, "g", function () {
        return s
    }), e.d(t, "d", function () {
        return l
    }), e.d(t, "f", function () {
        return m
    }), e.d(t, "h", function () {
        return d
    }), e.d(t, "c", function () {
        return p
    });
    var h = e(0), r = window.parseFloat
}, function (ee, t, e) {
    "use strict";
    e.d(t, "kb", function () {
        return n
    }), e.d(t, "nb", function () {
        return r
    }), e.d(t, "lb", function () {
        return i
    }), e.d(t, "pb", function () {
        return o
    }), e.d(t, "qb", function () {
        return u
    }), e.d(t, "mb", function () {
        return a
    }), e.d(t, "ob", function () {
        return c
    }), e.d(t, "rb", function () {
        return s
    }), e.d(t, "s", function () {
        return l
    }), e.d(t, "u", function () {
        return f
    }), e.d(t, "t", function () {
        return d
    }), e.d(t, "n", function () {
        return p
    }), e.d(t, "q", function () {
        return h
    }), e.d(t, "sb", function () {
        return v
    }), e.d(t, "r", function () {
        return g
    }), e.d(t, "Z", function () {
        return b
    }), e.d(t, "W", function () {
        return m
    }), e.d(t, "v", function () {
        return y
    }), e.d(t, "Y", function () {
        return w
    }), e.d(t, "w", function () {
        return j
    }), e.d(t, "ub", function () {
        return O
    }), e.d(t, "a", function () {
        return k
    }), e.d(t, "b", function () {
        return C
    }), e.d(t, "c", function () {
        return P
    }), e.d(t, "d", function () {
        return x
    }), e.d(t, "e", function () {
        return S
    }), e.d(t, "h", function () {
        return E
    }), e.d(t, "F", function () {
        return T
    }), e.d(t, "hb", function () {
        return A
    }), e.d(t, "Q", function () {
        return _
    }), e.d(t, "C", function () {
        return F
    }), e.d(t, "B", function () {
        return M
    }), e.d(t, "E", function () {
        return I
    }), e.d(t, "p", function () {
        return L
    }), e.d(t, "cb", function () {
        return N
    }), e.d(t, "m", function () {
        return D
    }), e.d(t, "G", function () {
        return R
    }), e.d(t, "H", function () {
        return B
    }), e.d(t, "N", function () {
        return q
    }), e.d(t, "O", function () {
        return V
    }), e.d(t, "R", function () {
        return z
    }), e.d(t, "jb", function () {
        return H
    }), e.d(t, "bb", function () {
        return Q
    }), e.d(t, "D", function () {
        return W
    }), e.d(t, "S", function () {
        return X
    }), e.d(t, "P", function () {
        return U
    }), e.d(t, "T", function () {
        return Y
    }), e.d(t, "V", function () {
        return K
    }), e.d(t, "M", function () {
        return J
    }), e.d(t, "L", function () {
        return Z
    }), e.d(t, "K", function () {
        return $
    }), e.d(t, "I", function () {
        return G
    }), e.d(t, "J", function () {
        return te
    }), e.d(t, "U", function () {
        return ae
    }), e.d(t, "o", function () {
        return ne
    }), e.d(t, "y", function () {
        return re
    }), e.d(t, "ib", function () {
        return ie
    }), e.d(t, "db", function () {
        return oe
    }), e.d(t, "eb", function () {
        return se
    }), e.d(t, "f", function () {
        return le
    }), e.d(t, "g", function () {
        return de
    }), e.d(t, "ab", function () {
        return ce
    }), e.d(t, "A", function () {
        return pe
    }), e.d(t, "l", function () {
        return ue
    }), e.d(t, "k", function () {
        return ge
    }), e.d(t, "fb", function () {
        return me
    }), e.d(t, "gb", function () {
        return he
    }), e.d(t, "tb", function () {
        return fe
    }), e.d(t, "z", function () {
        return ye
    }), e.d(t, "j", function () {
        return be
    }), e.d(t, "X", function () {
        return ve
    }), e.d(t, "i", function () {
        return ke
    }), e.d(t, "x", function () {
        return we
    });
    var n = "buffering", r = "idle", i = "complete", o = "paused", u = "playing", a = "error", c = "loading",
        s = "stalled", l = "drag", f = "dragStart", d = "dragEnd", p = "click", h = "doubleClick", v = "tap",
        g = "doubleTap", b = "over", m = "move", y = "enter", w = "out", j = "error", O = "warning", k = "adClick",
        C = "adPause", P = "adPlay", x = "adSkipped", S = "adTime", E = "autostartNotAllowed", T = "complete",
        A = "ready", _ = "seek", F = "beforePlay", M = "beforeComplete", I = "bufferFull", L = "displayClick",
        N = "playlistComplete", D = "cast", R = "mediaError", B = "firstFrame", q = "playAttempt",
        V = "playAttemptFailed", z = "seeked", H = "setupError", Q = "state", W = "bufferChange", X = "time",
        U = "ratechange", Y = "mediaType", K = "volume", J = "mute", Z = "metadataCueParsed", $ = "meta", G = "levels",
        te = "levelsChanged", ae = "visualQuality", ne = "controls", re = "fullscreen", ie = "resize",
        oe = "playlistItem", se = "playlist", le = "audioTracks", de = "audioTrackChanged", ce = "playbackRateChanged",
        pe = "logoClick", ue = "captionsList", ge = "captionsChanged", me = "providerChanged",
        he = "providerFirstFrame", fe = "userAction", ye = "instreamClick", be = "breakpoint", ve = "fullscreenchange",
        ke = "bandwidthEstimate", we = "float"
}, function (s, t, e) {
    "use strict";

    function n(a) {
        var t = "";
        return a && (a.localName ? t = a.localName : a.baseName && (t = a.baseName)), t
    }

    function i(n) {
        var t = "";
        return n && (n.textContent ? t = Object(a.i)(n.textContent) : n.text && (t = Object(a.i)(n.text))), t
    }

    function o(a, t) {
        return a.childNodes[t]
    }

    function l(e) {
        return e.childNodes ? e.childNodes.length : 0
    }

    e.d(t, "b", function () {
        return n
    }), e.d(t, "d", function () {
        return i
    }), e.d(t, "a", function () {
        return o
    }), e.d(t, "c", function () {
        return l
    });
    var a = e(2)
}, function (l, t, e) {
    "use strict";

    function d(a, t) {
        if (a && a.length > t) return a[t]
    }

    e.r(t);
    var n = e(7), r = e(0);
    e.d(t, "Browser", function () {
        return o
    }), e.d(t, "OS", function () {
        return a
    }), e.d(t, "Features", function () {
        return c
    });
    var i = navigator.userAgent, o = {}, a = {}, c = {};
    Object.defineProperties(o, {
        androidNative: {get: Object(r.D)(n.c), enumerable: !0},
        chrome: {get: Object(r.D)(n.d), enumerable: !0},
        edge: {get: Object(r.D)(n.e), enumerable: !0},
        facebook: {get: Object(r.D)(n.g), enumerable: !0},
        firefox: {get: Object(r.D)(n.f), enumerable: !0},
        ie: {get: Object(r.D)(n.i), enumerable: !0},
        msie: {get: Object(r.D)(n.n), enumerable: !0},
        safari: {get: Object(r.D)(n.q), enumerable: !0},
        version: {
            get: Object(r.D)(function (a, t) {
                var e, s, l, d;
                return a.chrome ? e = -1 === t.indexOf("Chrome") ? t.substring(t.indexOf("CriOS") + 6) : t.substring(t.indexOf("Chrome") + 7) : a.safari ? e = t.substring(t.indexOf("Version") + 8) : a.firefox ? e = t.substring(t.indexOf("Firefox") + 8) : a.edge ? e = t.substring(t.indexOf("Edge") + 5) : a.ie && (-1 === t.indexOf("rv:") ? -1 !== t.indexOf("MSIE") && (e = t.substring(t.indexOf("MSIE") + 5)) : e = t.substring(t.indexOf("rv:") + 3)), e && (-1 !== (d = e.indexOf(";")) && (e = e.substring(0, d)), -1 !== (d = e.indexOf(" ")) && (e = e.substring(0, d)), -1 !== (d = e.indexOf(")")) && (e = e.substring(0, d)), s = parseInt(e, 10), l = parseInt(e.split(".")[1], 10)), {
                    version: e,
                    major: s,
                    minor: l
                }
            }.bind(void 0, o, i)), enumerable: !0
        }
    }), Object.defineProperties(a, {
        android: {get: Object(r.D)(n.b), enumerable: !0},
        iOS: {get: Object(r.D)(n.j), enumerable: !0},
        mobile: {get: Object(r.D)(n.o), enumerable: !0},
        mac: {get: Object(r.D)(n.p), enumerable: !0},
        iPad: {get: Object(r.D)(n.k), enumerable: !0},
        iPhone: {get: Object(r.D)(n.l), enumerable: !0},
        windows: {
            get: Object(r.D)(function () {
                return -1 < i.indexOf("Windows")
            }), enumerable: !0
        },
        version: {
            get: Object(r.D)(function (a, t) {
                var e, i, s;
                if (a.windows) switch (e = d(/Windows(?: NT|)? ([._\d]+)/.exec(t), 1)) {
                    case "6.1":
                        e = "7.0";
                        break;
                    case "6.2":
                        e = "8.0";
                        break;
                    case "6.3":
                        e = "8.1"
                } else a.android ? e = d(/Android ([._\d]+)/.exec(t), 1) : a.iOS ? e = d(/OS ([._\d]+)/.exec(t), 1) : a.mac && (e = d(/Mac OS X (10[._\d]+)/.exec(t), 1));
                if (e) {
                    i = parseInt(e, 10);
                    var l = e.split(/[._]/);
                    l && (s = parseInt(l[1], 10))
                }
                return {version: e, major: i, minor: s}
            }.bind(void 0, a, i)), enumerable: !0
        }
    }), Object.defineProperties(c, {
        flash: {get: Object(r.D)(n.h), enumerable: !0},
        flashVersion: {get: Object(r.D)(n.a), enumerable: !0},
        iframe: {get: Object(r.D)(n.m), enumerable: !0},
        passiveEvents: {
            get: Object(r.D)(function () {
                var a = !1;
                try {
                    var n = Object.defineProperty({}, "passive", {
                        get: function () {
                            return a = !0
                        }
                    });
                    window.addEventListener("testPassive", null, n), window.removeEventListener("testPassive", null, n)
                } catch (e) {
                }
                return a
            }), enumerable: !0
        },
        backgroundLoading: {
            get: Object(r.D)(function () {
                return !(a.iOS || o.safari)
            }), enumerable: !0
        }
    })
}, function (_, t, e) {
    "use strict";

    function L(a, t) {
        return a.classList.contains(t)
    }

    function a(e) {
        return s(e).firstChild
    }

    function n(a, t) {
        w(a), function (a, t) {
            if (t) {
                for (var e = document.createDocumentFragment(), n = s(t).childNodes, r = 0; r < n.length; r++) e.appendChild(n[r].cloneNode(!0));
                a.appendChild(e)
            }
        }(a, t)
    }

    function s(a) {
        A || (A = new DOMParser);
        var t = A.parseFromString(a, "text/html").body;
        l(t);
        for (var e = t.querySelectorAll("*"), n = e.length; n--;) c(e[n]);
        return t
    }

    function l(a) {
        for (var t, i = a.querySelectorAll("script,object,iframe"), e = i.length; e--;) t = i[e], t.parentNode.removeChild(t);
        return a
    }

    function c(a) {
        for (var t, o = a.attributes, e = o.length; e--;) if (t = o[e].name, /^on/.test(t) && a.removeAttribute(t), /href/.test(t)) {
            var s = o[e].value;
            /javascript:|javascript&colon;/.test(s) && a.removeAttribute(t)
        }
        return a
    }

    function d(e) {
        return e + (0 < e.toString().indexOf("%") ? "" : "px")
    }

    function p(e) {
        return Object(O.y)(e.className) ? e.className.split(" ") : []
    }

    function h(a, t) {
        t = Object(i.i)(t), a.className !== t && (a.className = t)
    }

    function f(e) {
        return e.classList ? e.classList : p(e)
    }

    function g(a, t) {
        var e = p(a);
        (Array.isArray(t) ? t : t.split(" ")).forEach(function (a) {
            Object(O.e)(e, a) || e.push(a)
        }), h(a, e.join(" "))
    }

    function b(a, t) {
        var e = p(a), n = Array.isArray(t) ? t : t.split(" ");
        h(a, Object(O.i)(e, n).join(" "))
    }

    function m(a, t, e) {
        var n = a.className || "";
        t.test(n) ? n = n.replace(t, e) : e && (n += " " + e), h(a, n)
    }

    function y(a, t, e) {
        var i = L(a, t);
        (e = Object(O.s)(e) ? e : !i) !== i && (e ? g(a, t) : b(a, t))
    }

    function v(a, t, e) {
        a.setAttribute(t, e)
    }

    function w(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function j(a) {
        var t = document.createElement("link");
        t.rel = "stylesheet", t.href = a, document.getElementsByTagName("head")[0].appendChild(t)
    }

    function k(e) {
        e && w(e)
    }

    function C(a) {
        var t = {left: 0, right: 0, width: 0, height: 0, top: 0, bottom: 0};
        if (!a || !document.body.contains(a)) return t;
        var e = a.getBoundingClientRect(), n = window.pageYOffset, r = window.pageXOffset;
        return e.width || e.height || e.left || e.top ? (t.left = e.left + r, t.right = e.right + r, t.top = e.top + n, t.bottom = e.bottom + n, t.width = e.right - e.left, t.height = e.bottom - e.top, t) : t
    }

    function P(a, t) {
        a.insertBefore(t, a.firstChild)
    }

    function x(e) {
        return e.nextElementSibling
    }

    function S(e) {
        return e.previousElementSibling
    }

    function E(a, t) {
        var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, n = document.createElement("a");
        n.href = a, n.target = t, n = Object(O.k)(n, e), o.Browser.firefox ? n.dispatchEvent(new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window
        })) : n.click()
    }

    function T() {
        var e = window.screen.orientation;
        return !!e && ("landscape-primary" === e.type || "landscape-secondary" === e.type) || 90 === window.orientation || -90 === window.orientation
    }

    e.d(t, "i", function () {
        return L
    }), e.d(t, "e", function () {
        return a
    }), e.d(t, "q", function () {
        return n
    }), e.d(t, "j", function () {
        return s
    }), e.d(t, "s", function () {
        return l
    }), e.d(t, "r", function () {
        return c
    }), e.d(t, "u", function () {
        return d
    }), e.d(t, "d", function () {
        return f
    }), e.d(t, "a", function () {
        return g
    }), e.d(t, "o", function () {
        return b
    }), e.d(t, "p", function () {
        return m
    }), e.d(t, "v", function () {
        return y
    }), e.d(t, "t", function () {
        return v
    }), e.d(t, "h", function () {
        return w
    }), e.d(t, "b", function () {
        return j
    }), e.d(t, "g", function () {
        return k
    }), e.d(t, "c", function () {
        return C
    }), e.d(t, "m", function () {
        return P
    }), e.d(t, "k", function () {
        return x
    }), e.d(t, "n", function () {
        return S
    }), e.d(t, "l", function () {
        return E
    }), e.d(t, "f", function () {
        return T
    });
    var A, O = e(0), i = e(2), o = e(5)
}, function (x, t, e) {
    "use strict";

    function n(e) {
        return null !== C.match(e)
    }

    function i(e) {
        return function () {
            return n(e)
        }
    }

    function o() {
        var e = k();
        return !!(e && 18 <= e)
    }

    function u() {
        return n(/\sEdge\/\d+/i)
    }

    function h() {
        return n(/msie/i)
    }

    function v() {
        return n(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !u() && !n(/UCBrowser/i)
    }

    function g() {
        return u() || a() || h()
    }

    function b() {
        return n(/safari/i) && !n(/(?:Chrome|CriOS|chromium|android|phantom)/i)
    }

    function m() {
        return n(/iP(hone|ad|od)/i) || s
    }

    function y() {
        return (!n(/chrome\/[123456789]/i) || n(/chrome\/18/i) || r()) && w()
    }

    function w() {
        return n(/Android/i) && !n(/Windows Phone/i)
    }

    function P() {
        return m() || w() || n(/Windows Phone/i)
    }

    function j() {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    }

    function k() {
        if (w()) return 0;
        var a, n = navigator.plugins;
        if (n && (a = n["Shockwave Flash"]) && a.description) return parseFloat(a.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
        if (void 0 !== window.ActiveXObject) {
            try {
                if (a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(a.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
            } catch (e) {
                return 0
            }
            return a
        }
        return 0
    }

    e.d(t, "h", function () {
        return o
    }), e.d(t, "f", function () {
        return r
    }), e.d(t, "l", function () {
        return c
    }), e.d(t, "k", function () {
        return l
    }), e.d(t, "p", function () {
        return f
    }), e.d(t, "g", function () {
        return d
    }), e.d(t, "e", function () {
        return u
    }), e.d(t, "n", function () {
        return h
    }), e.d(t, "d", function () {
        return v
    }), e.d(t, "i", function () {
        return g
    }), e.d(t, "q", function () {
        return b
    }), e.d(t, "j", function () {
        return m
    }), e.d(t, "c", function () {
        return y
    }), e.d(t, "b", function () {
        return w
    }), e.d(t, "o", function () {
        return P
    }), e.d(t, "m", function () {
        return j
    }), e.d(t, "a", function () {
        return k
    });
    var C = navigator.userAgent, r = i(/gecko\//i), a = i(/trident\/.+rv:\s*11/i), c = i(/iP(hone|od)/i),
        s = "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints, l = function () {
            return n(/iPad/i) || s
        }, f = function () {
            return n(/Macintosh/i) && !s
        }, d = i(/FBAV/i)
}, function (d, t, e) {
    "use strict";

    function p(e) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function n(e) {
        switch (p(e)) {
            case "string":
                return 0 < e.length;
            case "object":
                return null !== e;
            case "undefined":
                return !1;
            default:
                return !0
        }
    }

    function o() {
        return "https:" === g
    }

    function u() {
        return "file:" === g
    }

    function a(a, t) {
        return 0 === a.indexOf("rtmp:") || "rtmp" === t
    }

    function c(a, t) {
        return "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(a)
    }

    function s(a) {
        if (null === a) return "null";
        var t = p(a);
        return "object" === t && Array.isArray(a) ? "array" : t
    }

    function l(a, t, e) {
        var n = Object.keys(a);
        return Object.keys(t).length >= n.length && n.every(function (n) {
            var r = a[n], i = t[n];
            return r && "object" === p(r) ? i && "object" === p(i) && l(r, i, e) : e(n, a)
        })
    }

    e.r(t), e.d(t, "exists", function () {
        return n
    }), e.d(t, "isHTTPS", function () {
        return o
    }), e.d(t, "isFileProtocol", function () {
        return u
    }), e.d(t, "isRtmp", function () {
        return a
    }), e.d(t, "isYouTube", function () {
        return c
    }), e.d(t, "typeOf", function () {
        return s
    }), e.d(t, "isDeepKeyCompliant", function () {
        return l
    });
    var g = window.location.protocol
}, function (g, t, e) {
    "use strict";

    function m(e) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function y(a, t) {
        for (var e, i = 0; i < t.length; i++) e = t[i], e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, e.key, e)
    }

    function b(r, t, e, n) {
        if (!e) return !0;
        if ("object" === m(e)) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && r[t].apply(r, [i, e[i]].concat(n));
            return !1
        }
        if (h.test(e)) {
            for (var o = e.split(h), s = 0, l = o.length; s < l; s++) r[t].apply(r, [o[s]].concat(n));
            return !1
        }
        return !0
    }

    function i(a, t, e, n) {
        for (var r, s = -1, l = a.length; ++s < l;) if (r = a[s], n) try {
            r.callback.apply(r.context || e, t)
        } catch (e) {
            console.log("Error in \"" + n + "\" event handler:", e)
        } else r.callback.apply(r.context || e, t)
    }

    e.d(t, "a", function () {
        return n
    }), e.d(t, "c", function () {
        return o
    }), e.d(t, "d", function () {
        return a
    }), e.d(t, "b", function () {
        return c
    }), e.d(t, "e", function () {
        return s
    }), e.d(t, "f", function () {
        return l
    });
    var p = [].slice, n = function () {
            function a() {
                !function (a, t) {
                    if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a)
            }

            var t, o, s;
            return t = a, (o = [{
                key: "on", value: function (a, t, e) {
                    if (!b(this, "on", a, [t, e]) || !t) return this;
                    var n = this._events || (this._events = {});
                    return (n[a] || (n[a] = [])).push({callback: t, context: e}), this
                }
            }, {
                key: "once", value: function (a, t, e) {
                    if (!b(this, "once", a, [t, e]) || !t) return this;
                    var s = 0, l = this, n = function e() {
                        s++ || (l.off(a, e), t.apply(this, arguments))
                    };
                    return n._callback = t, this.on(a, n, e)
                }
            }, {
                key: "off", value: function (d, p, e) {
                    if (!this._events || !b(this, "off", d, [p, e])) return this;
                    if (!d && !p && !e) return delete this._events, this;
                    for (var n = d ? [d] : Object.keys(this._events), r = 0, g = n.length; r < g; r++) {
                        d = n[r];
                        var o = this._events[d];
                        if (o) {
                            var u = this._events[d] = [];
                            if (p || e) for (var a, m = 0, h = o.length; m < h; m++) a = o[m], (p && p !== a.callback && p !== a.callback._callback || e && e !== a.context) && u.push(a);
                            u.length || delete this._events[d]
                        }
                    }
                    return this
                }
            }, {
                key: "trigger", value: function (a) {
                    if (!this._events) return this;
                    var t = p.call(arguments, 1);
                    if (!b(this, "trigger", a, t)) return this;
                    var e = this._events[a], n = this._events.all;
                    return e && i(e, t, this), n && i(n, arguments, this), this
                }
            }, {
                key: "triggerSafe", value: function (a) {
                    if (!this._events) return this;
                    var t = p.call(arguments, 1);
                    if (!b(this, "trigger", a, t)) return this;
                    var e = this._events[a], n = this._events.all;
                    return e && i(e, t, this, a), n && i(n, arguments, this, a), this
                }
            }]) && y(t.prototype, o), s && y(t, s), a
        }(), o = n.prototype.on, a = n.prototype.once, c = n.prototype.off, s = n.prototype.trigger,
        l = n.prototype.triggerSafe;
    n.on = o, n.once = a, n.off = c, n.trigger = s;
    var h = /\s+/
}, function (g, t, m) {
    "use strict";

    function e(e) {
        return c || (c = function (l) {
            var t = l.get("controls"), e = y(), s = function (o, t) {
                var e = o.get("playlist");
                if (Array.isArray(e) && e.length) for (var n = Object(r.c)(Object(p.a)(e[0]), o), d = 0; d < n.length; d++) for (var u, g = n[d], c = o.getProviders(), s = 0; s < i.a.length; s++) if (u = i.a[s], c.providerSupports(u, g)) return u.name === t;
                return !1
            }(l, "html5");
            if (t && e && s) return d = m.e(6).then(function () {
                m(37);
                var t = m(22).default;
                return u.a.controls = m(21).default, Object(o.a)(m(51).default), t
            }.bind(null, m)).catch(n(a.t + 105)), h.html5 = d, d;
            var d;
            return t && s ? function () {
                var e = m.e(4).then(function () {
                    var t = m(22).default;
                    return u.a.controls = m(21).default, Object(o.a)(m(51).default), t
                }.bind(null, m)).catch(n(a.t + 104));
                return h.html5 = e, e
            }() : t && e ? m.e(5).then(function () {
                m(37);
                var t = m(22).default;
                return u.a.controls = m(21).default, t
            }.bind(null, m)).catch(n(a.t + 103)) : t ? m.e(3).then(function () {
                var t = m(22).default;
                return u.a.controls = m(21).default, t
            }.bind(null, m)).catch(n(a.t + 102)) : (y() ? m.e(8).then(function () {
                return m(37)
            }.bind(null, m)).catch(n(a.t + 120)) : Promise.resolve()).then(function () {
                return m.e(2).then(function () {
                    return m(22).default
                }.bind(null, m)).catch(n(a.t + 101))
            })
        }(e)), c
    }

    function n(n, t) {
        return function () {
            throw new a.s(a.m, n, t)
        }
    }

    function d(n, t) {
        return function () {
            throw new a.s(null, n, t)
        }
    }

    function y() {
        var e = window.IntersectionObserverEntry;
        return !(e && "IntersectionObserver" in window && "intersectionRatio" in e.prototype)
    }

    m.d(t, "a", function () {
        return h
    }), m.d(t, "d", function () {
        return e
    }), m.d(t, "b", function () {
        return n
    }), m.d(t, "c", function () {
        return d
    });
    var p = m(29), r = m(30), i = m(17), o = m(13), u = m(38), a = m(1), c = null, h = {}
}, function (g, t, e) {
    "use strict";

    function m(e) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function n(o, t, e, l) {
        e = e || "all-players";
        var r = "";
        if ("object" === m(t)) {
            var d = document.createElement("div");
            s(d, t);
            var a = d.style.cssText;
            Object.prototype.hasOwnProperty.call(t, "content") && a && (a = "".concat(a, " content: \"").concat(t.content, "\";")), l && a && (a = a.replace(/;/g, " !important;")), r = "{" + a + "}"
        } else "string" == typeof t && (r = t);
        "" !== r && "{}" !== r ? b.a.style([[o, o + r]], e) : b.a.clear(e, o)
    }

    function s(a, s) {
        if (null != a) {
            void 0 === a.length && (a = [a]);
            var e = {};
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = f(r, s[r]));
            for (var d = 0; d < a.length; d++) {
                var c = a[d], o = void 0;
                if (null != c) for (r in e) Object.prototype.hasOwnProperty.call(e, r) && (o = l(r), c.style[o] !== e[r] && (c.style[o] = e[r]))
            }
        }
    }

    function l(a) {
        a = a.split("-");
        for (var n = 1; n < a.length; n++) a[n] = a[n].charAt(0).toUpperCase() + a[n].slice(1);
        return a.join("")
    }

    function f(a, t) {
        return "" === t || null == t ? "" : "string" == typeof t && isNaN(t) ? /png|gif|jpe?g/i.test(t) && 0 > t.indexOf("url") ? "url(" + t + ")" : t : 0 === t || "z-index" === a || "opacity" === a ? "" + t : /color/i.test(a) ? "#" + Object(y.e)(t.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(t) + "px"
    }

    function d(a, t) {
        s(a, {transform: t, webkitTransform: t, msTransform: t, mozTransform: t, oTransform: t})
    }

    function p(a, s) {
        var e = "rgb", l = void 0 !== s && 100 !== s;
        if (l && (e += "a"), !h) {
            var r = document.createElement("canvas");
            r.height = 1, r.width = 1, h = r.getContext("2d")
        }
        a ? isNaN(parseInt(a, 16)) || (a = "#" + a) : a = "#000000", h.clearRect(0, 0, 1, 1), h.fillStyle = a, h.fillRect(0, 0, 1, 1);
        var i = h.getImageData(0, 0, 1, 1).data;
        return e += "(" + i[0] + ", " + i[1] + ", " + i[2], l && (e += ", " + s / 100), e + ")"
    }

    e.d(t, "a", function () {
        return i
    }), e.d(t, "b", function () {
        return n
    }), e.d(t, "d", function () {
        return s
    }), e.d(t, "e", function () {
        return d
    }), e.d(t, "c", function () {
        return p
    });
    var h, y = e(2), r = e(41), b = e.n(r), i = b.a.clear
}, function (d, t, e) {
    "use strict";

    function n(r, t) {
        if (Object(l.exists)(t) || (t = document.location.href), Object(l.exists)(r)) {
            if (p(r)) return r;
            var d, u = t.substring(0, t.indexOf("://") + 3), i = t.substring(u.length, t.indexOf("/", u.length + 1));
            if (0 === r.indexOf("/")) d = r.split("/"); else {
                var o = t.split("?")[0];
                d = (o = o.substring(u.length + i.length + 1, o.lastIndexOf("/"))).split("/").concat(r.split("/"))
            }
            for (var g = [], c = 0; c < d.length; c++) d[c] && Object(l.exists)(d[c]) && "." !== d[c] && (".." === d[c] ? g.pop() : g.push(d[c]));
            return u + i + "/" + g.join("/")
        }
    }

    function p(e) {
        return /^(?:(?:https?|file):)?\/\//.test(e)
    }

    function o(a) {
        var t = null;
        try {
            (t = new window.DOMParser().parseFromString(a, "text/xml")).querySelector("parsererror") && (t = null)
        } catch (e) {
        }
        return t
    }

    function a(a) {
        if (void 0 === a) return null;
        if ("string" == typeof a && 6 > a.length) {
            var t = a.toLowerCase();
            if ("true" === t) return !0;
            if ("false" === t) return !1;
            if (!Object(g.v)(+a) && !Object(g.v)(parseFloat(a))) return +a
        }
        return a
    }

    function c(e) {
        return "string" == typeof e ? "" === e ? 0 : -1 < e.lastIndexOf("%") ? e : parseInt(e.replace("px", ""), 10) : e
    }

    function s(a, i) {
        if (0 >= a && !i || Object(g.v)(parseInt(a))) return "00:00";
        var e = 0 > a ? "-" : "";
        a = Math.abs(a);
        var n = Math.floor(a / 3600), r = Math.floor((a - 3600 * n) / 60), o = Math.floor(a % 60);
        return e + (n ? n + ":" : "") + (10 > r ? "0" : "") + r + ":" + (10 > o ? "0" : "") + o
    }

    e.r(t), e.d(t, "getAbsolutePath", function () {
        return n
    }), e.d(t, "isAbsolutePath", function () {
        return p
    }), e.d(t, "parseXML", function () {
        return o
    }), e.d(t, "serialize", function () {
        return a
    }), e.d(t, "parseDimension", function () {
        return c
    }), e.d(t, "timeFormat", function () {
        return s
    });
    var l = e(8), g = e(0)
}, function (s, t, e) {
    "use strict";

    function n(n) {
        var t = n.getName().name;
        if (!a.a[t]) {
            if (!Object(o.m)(r.a, Object(o.C)({name: t}))) {
                if (!Object(o.u)(n.supports)) throw new Error("Tried to register a provider with an invalid object");
                r.a.unshift({name: t, supports: n.supports})
            }
            Object(o.h)(n.prototype, i.a), a.a[t] = n
        }
    }

    e.d(t, "a", function () {
        return n
    });
    var a = e(33), r = e(17), i = e(57), o = e(0)
}, function (E, t, e) {
    "use strict";

    function S(a) {
        var t = f(a), e = t.indexOf("_");
        return -1 === e ? t : t.substring(0, e)
    }

    function f(e) {
        return e.toLowerCase().replace("-", "_")
    }

    function n(a) {
        return a ? Object.keys(a).reduce(function (t, e) {
            return t[f(e)] = a[e], t
        }, {}) : {}
    }

    function d(e) {
        if (e) return 3 === e.length ? e : c[S(e)] || e
    }

    function p(e) {
        return s[e] || ""
    }

    function h(a) {
        var t = a.querySelector("html");
        return t ? t.getAttribute("lang") : null
    }

    function g() {
        var e = h(document);
        if (!e && Object(r.m)()) try {
            e = h(window.top.document)
        } catch (e) {
        }
        return e || navigator.language || "en"
    }

    function b(e) {
        return 8207 === e.charCodeAt(0) || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(e)
    }

    function y(e) {
        return 0 <= l.indexOf(S(e))
    }

    function v(a, t, e) {
        return Object(x.k)({}, function (r) {
            var t = r.advertising, e = r.related, n = r.sharing, i = r.abouttext, o = Object(x.k)({}, r.localization);
            t && (o.advertising = o.advertising || {}, w(o.advertising, t, "admessage"), w(o.advertising, t, "cuetext"), w(o.advertising, t, "loadingAd"), w(o.advertising, t, "podmessage"), w(o.advertising, t, "skipmessage"), w(o.advertising, t, "skiptext")), o.related = "string" == typeof o.related ? {heading: o.related} : o.related || {}, e && w(o.related, e, "autoplaymessage"), n && (o.sharing = o.sharing || {}, w(o.sharing, n, "heading"), w(o.sharing, n, "copied")), i && w(o, r, "abouttext");
            var s = o.close || o.nextUpClose;
            return s && (o.close = s), o
        }(a), t[S(e)], t[f(e)])
    }

    function w(a, t, e) {
        var n = a[e] || t[e];
        n && (a[e] = n)
    }

    function j(e) {
        return Object(o.isDeepKeyCompliant)(u.a, e, function (a, t) {
            return "string" == typeof t[a]
        })
    }

    function k(o, s) {
        var e = a[s];
        if (!e) {
            var l = "".concat(o, "translations/").concat(S(s), ".json");
            a[s] = e = new Promise(function (e, d) {
                Object(i.a)({
                    url: l, oncomplete: e, onerror: function (e, t, n, r) {
                        a[s] = null, d(r)
                    }, responseType: "json"
                })
            })
        }
        return e
    }

    function C(a, t) {
        var e = Object(x.k)({}, a, t);
        return P(e, "errors", a, t), P(e, "related", a, t), P(e, "sharing", a, t), P(e, "advertising", a, t), P(e, "shortcuts", a, t), e
    }

    function P(a, t, e, n) {
        a[t] = Object(x.k)({}, e[t], n[t])
    }

    e.d(t, "j", function () {
        return n
    }), e.d(t, "d", function () {
        return d
    }), e.d(t, "b", function () {
        return p
    }), e.d(t, "e", function () {
        return g
    }), e.d(t, "g", function () {
        return b
    }), e.d(t, "h", function () {
        return y
    }), e.d(t, "c", function () {
        return v
    }), e.d(t, "f", function () {
        return j
    }), e.d(t, "i", function () {
        return k
    }), e.d(t, "a", function () {
        return C
    });
    var x = e(0), r = e(7), i = e(28), o = e(8), u = e(40), a = {}, c = {
            zh: "Chinese",
            nl: "Dutch",
            en: "English",
            fr: "French",
            de: "German",
            it: "Italian",
            ja: "Japanese",
            pt: "Portuguese",
            ru: "Russian",
            es: "Spanish",
            el: "Greek",
            fi: "Finnish",
            id: "Indonesian",
            ko: "Korean",
            th: "Thai",
            vi: "Vietnamese"
        }, s = Object(x.r)(c),
        l = ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nl", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"]
}, function (a, t) {
    "use strict";
    t.a = []
}, function (a, t) {
    "use strict";
    t.a = {debug: !1}
}, function (p, t, e) {
    "use strict";

    function g(a) {
        var n = window.MediaSource;
        return Object(r.a)(a, function (e) {
            return !!n && !!n.isTypeSupported && n.isTypeSupported(e)
        })
    }

    function n(a) {
        if (a.drm) return !1;
        var t = -1 < a.file.indexOf(".m3u8"), e = "hls" === a.type || "m3u8" === a.type;
        if (!t && !e) return !1;
        var n = m.Browser.chrome || m.Browser.firefox || m.Browser.edge || m.Browser.ie && 11 === m.Browser.version.major,
            r = m.OS.android && !1 === a.hlsjsdefault, i = m.Browser.safari && !!a.safarihlsjs;
        return g(a.mediaTypes || ["video/mp4;codecs=\"avc1.4d400d,mp4a.40.2\""]) && (n || i) && !r
    }

    var d = e(27), m = e(5), h = e(23), r = e(0), i = e(8), a = e(36),
        o = Object(r.m)(d.a, Object(r.C)({name: "html5"})), s = o.supports;
    o.supports = function (a, t) {
        var e = s.apply(this, arguments);
        if (e && a.drm && "hls" === a.type) {
            var n = Object(h.a)(t), r = n("drm");
            if (r && a.drm.fairplay) {
                var i = window.WebKitMediaKeys;
                return i && i.isTypeSupported && i.isTypeSupported("com.apple.fps.1_0", "video/mp4")
            }
            return r
        }
        return e
    }, d.a.push({
        name: "shaka", supports: function (e) {
            return (!e.drm || Object(a.a)(e.drm)) && window.HTMLVideoElement && window.MediaSource && g(e.mediaTypes) && ("dash" === e.type || "mpd" === e.type || -1 < (e.file || "").indexOf("mpd-time-csf"))
        }
    }), d.a.unshift({
        name: "hlsjs", supports: function (e) {
            return n(e)
        }
    }), d.a.unshift({
        name: "hlsjsProgressive", supports: function (e) {
            return e._hlsjsProgressive && n(e)
        }
    }), d.a.push({
        name: "flash", supports: function (a) {
            if (!m.Features.flash || a.drm) return !1;
            var t = a.type;
            return "hls" === t || "m3u8" === t || !Object(i.isRtmp)(a.file, t) && -1 < ["flv", "f4v", "mov", "m4a", "m4v", "mp4", "aac", "f4a", "mp3", "mpeg", "smil"].indexOf(t)
        }
    }), t.a = d.a
}, function (a, t, e) {
    "use strict";
    e.d(t, "a", function () {
        return n
    });
    var n = Date.now || function () {
        return new Date().getTime()
    }
}, function (a, t, e) {
    "use strict";

    function n(a) {
        var t = 305e3;
        if (!a) return t;
        switch (r(a)) {
            case "jwpsrv":
                t = 305001;
                break;
            case "googima":
                t = 305002;
                break;
            case "vast":
                t = 305003;
                break;
            case "freewheel":
                t = 305004;
                break;
            case "dai":
                t = 305005;
                break;
            case "gapro":
                t = 305006
        }
        return t
    }

    function o(r, t, e) {
        var n = r.name, i = document.createElement("div");
        i.id = e.id + "_" + n, i.className = "jw-plugin jw-reset";
        var o = Object(s.k)({}, t), l = r.getNewInstance(e, o, i);
        return e.addPlugin(n, l), l
    }

    e.d(t, "b", function () {
        return r
    }), e.d(t, "c", function () {
        return n
    }), e.d(t, "a", function () {
        return o
    });
    var s = e(0), r = function (e) {
        return e.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
    }
}, function (s, t, e) {
    "use strict";
    e.r(t), e.d(t, "getScriptPath", function () {
        return r
    }), e.d(t, "repo", function () {
        return i
    }), e.d(t, "versionCheck", function () {
        return o
    }), e.d(t, "loadFrom", function () {
        return a
    });
    var l = e(31), n = e(8), r = function (a) {
        for (var t, o = document.getElementsByTagName("script"), e = 0; e < o.length; e++) if (t = o[e].src, t) {
            var s = t.lastIndexOf("/" + a);
            if (0 <= s) return t.substr(0, s + 1)
        }
        return ""
    }, i = function () {
        var t = Object(n.isFileProtocol)() ? "https:" : "";
        return "".concat(t).concat("//ssl.p.jwpcdn.com/player/v/8.11.10/")
    }, o = function (a) {
        var t = ("0" + a).split(/\W/), e = l.a.split(/\W/), n = parseFloat(t[0]), r = parseFloat(e[0]);
        return !(n > r) && !(n === r && parseFloat("0" + t[1]) > parseFloat(e[1]))
    }, a = function () {
        return i()
    }
}, , , function (a, t, e) {
    "use strict";

    function n(a) {
        var t = {
            setup: ["free", "starter", "business", "premium", "enterprise", "developer", "ads", "unlimited", "trial", "platinum"],
            drm: ["enterprise", "developer", "ads", "unlimited", "trial"],
            ads: ["ads", "unlimited", "trial", "platinum", "enterprise", "developer", "business"],
            jwpsrv: ["free", "starter", "business", "premium", "enterprise", "developer", "ads", "trial", "platinum", "invalid"],
            discovery: ["ads", "enterprise", "developer", "trial", "unlimited"]
        };
        return function (e) {
            return t[e] && -1 < t[e].indexOf(a)
        }
    }

    e.d(t, "a", function () {
        return n
    })
}, function (a, t, e) {
    "use strict";

    function g(a) {
        var t = document.createElement("link");
        return t.type = "text/css", t.rel = "stylesheet", t.href = a, t
    }

    function l(a, t) {
        var e = document.createElement("script");
        return e.type = "text/javascript", e.charset = "utf-8", e.async = !0, e.timeout = t || 45000, e.src = a, e
    }

    var n = e(0), r = e(9), i = e(3), o = {}, s = function (a, t, e) {
        function n(e) {
            c = 2, d.trigger(i.w, e).off()
        }

        function s(e) {
            c = 3, d.trigger(i.lb, e).off()
        }

        var d = this, c = 0;
        this.getStatus = function () {
            return c
        }, this.load = function () {
            var i = o[a];
            return 0 === c ? (i && i.then(s).catch(n), c = 1, i = new Promise(function (d, r) {
                var i = (t ? g : l)(a, e), o = function () {
                    i.onerror = i.onload = null, clearTimeout(c)
                }, p = function (e) {
                    o(), n(e), r(e)
                }, c = setTimeout(function () {
                    p(new Error("Network timeout ".concat(a)))
                }, 45000);
                i.onerror = function () {
                    p(new Error("Failed to load ".concat(a)))
                }, i.onload = function (e) {
                    o(), s(e), d(e)
                };
                var u = document.getElementsByTagName("head")[0] || document.documentElement;
                u.insertBefore(i, u.firstChild)
            }), o[a] = i, i) : i
        }
    };
    Object(n.k)(s.prototype, r.a), t.a = s
}, function (d, t, e) {
    "use strict";

    function g(e) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function n(a, t) {
        var e = a.get("plugins");
        return window.jwplayerPluginJsonp = p, (a.pluginLoader = a.pluginLoader || new i).load(t, f, e, a).then(function (t) {
            if (!a.attributes._destroyed) return delete window.jwplayerPluginJsonp, t
        })
    }

    var m = e(1), r = e(19), i = function () {
        this.load = function (i, s, e, t) {
            return e && "object" === g(e) ? Promise.all(Object.keys(e).filter(function (e) {
                return e
            }).map(function (n) {
                var o = e[n];
                return s.setupPlugin(n).then(function (a) {
                    if (!t.attributes._destroyed) return Object(r.a)(a, o, i)
                }).catch(function (e) {
                    return s.removePlugin(n), e.code ? e : new m.s(null, Object(r.c)(n), e)
                })
            })) : Promise.resolve()
        }
    }, u = e(58), a = e(47), c = {}, s = function () {
    }, l = s.prototype;
    l.setupPlugin = function (n) {
        var t = this.getPlugin(n);
        return t ? (t.url !== n && Object(a.a)("JW Plugin \"".concat(Object(r.b)(n), "\" already loaded from \"").concat(t.url, "\". Ignoring \"").concat(n, ".\"")), t.promise) : this.addPlugin(n).load()
    }, l.addPlugin = function (a) {
        var t = Object(r.b)(a), e = c[t];
        return e || (e = new u.a(a), c[t] = e), e
    }, l.getPlugin = function (e) {
        return c[Object(r.b)(e)]
    }, l.removePlugin = function (e) {
        delete c[Object(r.b)(e)]
    }, l.getPlugins = function () {
        return c
    };
    e.d(t, "b", function () {
        return p
    }), e.d(t, "a", function () {
        return n
    });
    var f = new s, p = function (a, t, e) {
        var n = f.addPlugin(a);
        n.js || n.registerPlugin(a, t, e)
    }
}, function (s, t, e) {
    "use strict";
    e.d(t, "a", function () {
        return l
    });
    var n = e(48), r = e(23), i = e(45), o = e(1), l = 100013;
    t.b = function (a) {
        var d, t, p;
        try {
            var u = Object(n.a)(a || "", Object(i.a)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
            if ("pro" === (d = u[0]) && (d = "premium"), Object(r.a)(d)("setup") || (d = "invalid"), 2 < u.length) {
                t = u[1];
                var s = parseInt(u[2]);
                0 < s && (p = new Date).setTime(s)
            }
        } catch (e) {
            d = "invalid"
        }
        this.edition = function () {
            return window.location.hostname.includes("tavoos.net") ? "unlimited" : d
        }, this.token = function () {
            return t
        }, this.expiration = function () {
            return p
        }, this.duration = function () {
            return p ? p.getTime() - new Date().getTime() : 0
        }, this.error = function () {
            var e;
            return void 0 === a ? e = 100011 : "invalid" !== d && t ? 0 > this.duration() && (e = 100013) : e = 100012, e ? new o.s(o.m, e) : null
        }
    }
}, function (a, t, e) {
    "use strict";

    function n(l) {
        if (!1 === Object(s.a)(l)) return !1;
        if (!i.a.canPlayType) return !1;
        var t = l.file, e = l.type;
        if (Object(r.isRtmp)(t, e)) return !1;
        var n = l.mimeType || o[e];
        if (!n) return !1;
        var d = l.mediaTypes;
        return d && d.length && (n = [n].concat(d.slice()).join("; ")), !!i.a.canPlayType(n)
    }

    e.d(t, "b", function () {
        return n
    });
    var s = e(65), r = e(8), i = e(39), o = {
        aac: "audio/mp4",
        mp4: "video/mp4",
        f4v: "video/mp4",
        m4v: "video/mp4",
        mov: "video/mp4",
        mp3: "audio/mpeg",
        mpeg: "audio/mpeg",
        ogv: "video/ogg",
        ogg: "video/ogg",
        oga: "video/ogg",
        vorbis: "video/ogg",
        webm: "video/webm",
        f4a: "video/aac",
        m3u8: "application/vnd.apple.mpegurl",
        m3u: "application/vnd.apple.mpegurl",
        hls: "application/vnd.apple.mpegurl"
    };
    t.a = [{name: "html5", supports: n}]
}, function (a, t, e) {
    "use strict";

    function s(a, u, e, n) {
        var m;
        a === Object(a) && (a = (n = a).url);
        var f = Object(p.k)({
            xhr: null,
            url: a,
            withCredentials: !1,
            retryWithoutCredentials: !1,
            timeout: 6e4,
            timeoutId: -1,
            oncomplete: u || o,
            onerror: e || o,
            mimeType: n && !n.responseType ? "text/xml" : "",
            requireValidXML: !1,
            responseType: n && n.plainText ? "text" : "",
            useDomParser: !1,
            requestFilter: null
        }, n), y = function (a, r) {
            return function (e, t) {
                var a = e.currentTarget || r.xhr;
                return (clearTimeout(r.timeoutId), r.retryWithoutCredentials && r.xhr.withCredentials) ? (l(a), void s(Object(p.k)({}, r, {
                    xhr: null,
                    withCredentials: !1,
                    retryWithoutCredentials: !1
                }))) : void (!t && 400 <= a.status && 600 > a.status && (t = a.status), d(r, t ? g.o : g.r, t || 6, e))
            }
        }(0, f);
        if ("XMLHttpRequest" in window) {
            if (m = f.xhr = f.xhr || new window.XMLHttpRequest, "function" == typeof f.requestFilter) {
                var b;
                try {
                    b = f.requestFilter({url: a, xhr: m})
                } catch (e) {
                    return y(e, 5), m
                }
                b && "open" in b && "send" in b && (m = f.xhr = b)
            }
            m.onreadystatechange = function (o) {
                return function (t) {
                    var e = t.currentTarget || o.xhr;
                    if (4 === e.readyState) {
                        clearTimeout(o.timeoutId);
                        var n = e.status;
                        if (400 <= n) return void d(o, g.o, 600 > n ? n : 6);
                        if (200 === n) return function (i) {
                            return function (t) {
                                var e = t.currentTarget || i.xhr;
                                if (clearTimeout(i.timeoutId), !i.responseType) {
                                    var n, s = e.responseXML;
                                    if (s) try {
                                        n = s.firstChild
                                    } catch (e) {
                                    }
                                    if (s && n) return c(e, s, i);
                                    if (i.useDomParser && e.responseText && !s && (s = Object(r.parseXML)(e.responseText)) && s.firstChild) return c(e, s, i);
                                    if (i.requireValidXML) return void d(i, g.o, 602)
                                } else if ("json" === i.responseType) return function (a, n) {
                                    if (!a.response || "string" == typeof a.response && "\"" !== a.responseText.substr(1)) try {
                                        a = Object(p.k)({}, a, {response: JSON.parse(a.responseText)})
                                    } catch (e) {
                                        return void d(n, g.o, 611, e)
                                    }
                                    return n.oncomplete(a)
                                }(e, i);
                                i.oncomplete(e)
                            }
                        }(o)(t);
                        0 === n && Object(i.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(o.url) && d(o, g.o, 7)
                    }
                }
            }(f), m.onerror = y, "overrideMimeType" in m ? f.mimeType && m.overrideMimeType(f.mimeType) : f.useDomParser = !0;
            try {
                a = a.replace(/#.*$/, ""), m.open("GET", a, !0)
            } catch (e) {
                return y(e, 3), m
            }
            if (f.responseType) try {
                m.responseType = f.responseType
            } catch (e) {
            }
            f.timeout && (f.timeoutId = setTimeout(function () {
                l(m), d(f, g.r, 1)
            }, f.timeout), m.onabort = function () {
                clearTimeout(f.timeoutId)
            });
            try {
                f.withCredentials && "withCredentials" in m && (m.withCredentials = !0), m.send()
            } catch (e) {
                y(e, 4)
            }
            return m
        }
        d(f, g.r, 2)
    }

    function l(e) {
        e.onload = null, e.onprogress = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()
    }

    function d(a, t, e, n) {
        a.onerror(t, a.url, a.xhr, new g.s(t, e, n))
    }

    function c(a, r, e) {
        var n = r.documentElement;
        return e.requireValidXML && ("parsererror" === n.nodeName || n.getElementsByTagName("parsererror").length) ? void d(e, g.o, 601) : (a.responseXML || (a = Object(p.k)({}, a, {responseXML: r})), e.oncomplete(a))
    }

    e.d(t, "a", function () {
        return s
    });
    var p = e(0), r = e(12), i = e(8), g = e(1), o = function () {
    }
}, function (a, t, e) {
    "use strict";
    var s = e(0), r = e(34), i = function (e) {
        if (e && e.file) return Object(s.k)({}, {kind: "captions", default: !1}, e)
    }, o = Array.isArray;
    t.a = function (l) {
        o((l = l || {}).tracks) || delete l.tracks;
        var d = Object(s.k)({}, {sources: [], tracks: [], minDvrWindow: 120, dvrSeekLimit: 25}, l);
        5 > d.dvrSeekLimit && (d.dvrSeekLimit = 5), d.sources !== Object(d.sources) || o(d.sources) || (d.sources = [Object(r.a)(d.sources)]), o(d.sources) && 0 !== d.sources.length || (l.levels ? d.sources = l.levels : d.sources = [Object(r.a)(l)]);
        for (var e, p = 0; p < d.sources.length; p++) if (e = d.sources[p], e) {
            var u = e.default;
            e.default = !!u && "true" === u.toString(), d.sources[p].label || (d.sources[p].label = p.toString()), d.sources[p] = Object(r.a)(d.sources[p])
        }
        return d.sources = d.sources.filter(function (e) {
            return !!e
        }), o(d.tracks) || (d.tracks = []), o(d.captions) && (d.tracks = d.tracks.concat(d.captions), delete d.captions), d.tracks = d.tracks.map(i).filter(function (e) {
            return !!e
        }), d
    }
}, function (m, t, e) {
    "use strict";

    function y(a, t) {
        return r[a] ? a : r[t] ? t : "metadata"
    }

    function n(a, r, e) {
        var n = Object(b.k)({}, e);
        return delete n.playlist, a.map(function (e) {
            return l(r, e, n)
        }).filter(function (e) {
            return !!e
        })
    }

    function o(e) {
        if (!Array.isArray(e) || 0 === e.length) throw new c.s(c.o, 630)
    }

    function l(r, t, e) {
        var n = r.getProviders(), i = r.get("preload"), o = Object(b.k)({}, t);
        if (o.preload = y(t.preload, i), o.allSources = d(t, r), o.sources = h(o.allSources, n), o.sources.length) return o.file = o.sources[0].file, o.feedData = e, o
    }

    function d(a, t) {
        var o = t.attributes, e = a.sources, n = a.allSources, i = a.preload, l = a.drm,
            d = f(a.withCredentials, o.withCredentials);
        return (n || e).map(function (a) {
            if (a !== Object(a)) return null;
            g(a, o, "androidhls"), g(a, o, "hlsjsdefault"), g(a, o, "safarihlsjs"), g(a, o, "_hlsjsProgressive"), a.preload = y(a.preload, i);
            var t = a.drm || l || o.drm;
            t && (a.drm = t);
            var e = f(a.withCredentials, d);
            return void 0 !== e && (a.withCredentials = e), Object(v.a)(a)
        }).filter(function (e) {
            return !!e
        })
    }

    function h(o, s) {
        s && s.choose || (s = new a.a);
        var t = function (a, t) {
            for (var e = 0; e < a.length; e++) {
                var o = a[e], r = t.choose(o).providerToCheck;
                if (r) return {type: o.type, provider: r}
            }
            return null
        }(o, s);
        if (!t) return [];
        var n = t.provider, r = t.type;
        return o.filter(function (e) {
            return e.type === r && s.providerSupports(n, e)
        })
    }

    function f(a, t) {
        return void 0 === a ? t : a
    }

    function g(a, t, e) {
        e in t && (a[e] = t[e])
    }

    var b = e(0), r = {none: !0, metadata: !0, auto: !0}, i = e(29), v = e(34), a = e(42), c = e(1);
    e.d(t, "b", function () {
        return n
    }), e.d(t, "e", function () {
        return o
    }), e.d(t, "d", function () {
        return l
    }), e.d(t, "c", function () {
        return s
    });
    var s = function (a, t) {
        return h(d(a, t), t.getProviders())
    };
    t.a = function (e) {
        return (Array.isArray(e) ? e : [e]).map(i.a)
    }
}, function (a, t, e) {
    "use strict";
    e.d(t, "a", function () {
        return n
    });
    var n = "8.11.10+commercial_v8-11-10.367.commercial.671069e.hlsjs..hlsjsprogressive..jwplayer.830efe7.dai.45542e3.freewheel.55a1d47.googima.3980c02.vast.8967c9c.analytics.8958e48.gapro.141397a"
}, function (s, t, e) {
    "use strict";

    function l() {
        return i + r.now()
    }

    var a = e(0), n = e(18), r = window.performance || {timing: {}}, i = r.timing.navigationStart || Object(n.a)();
    "now" in r || (r.now = function () {
        return Object(n.a)() - i
    }), t.a = function () {
        var s = {}, t = {}, r = {}, n = {};
        return {
            start: function (t) {
                s[t] = l(), r[t] = r[t] + 1 || 1
            }, end: function (e) {
                if (s[e]) {
                    var a = l() - s[e];
                    delete s[e], t[e] = t[e] + a || a
                }
            }, dump: function () {
                var e = Object(a.k)({}, t);
                for (var i in s) if (Object.prototype.hasOwnProperty.call(s, i)) {
                    var o = l() - s[i];
                    e[i] = e[i] + o || o
                }
                return {counts: Object(a.k)({}, r), sums: e, events: Object(a.k)({}, n)}
            }, tick: function (e) {
                n[e] = l()
            }, clear: function (e) {
                delete n[e]
            }, between: function (a, t) {
                return n[t] && n[a] ? n[t] - n[a] : null
            }
        }
    }
}, function (a, t) {
    "use strict";
    t.a = {}
}, function (a, t, e) {
    "use strict";
    var s = e(0), r = e(8), i = e(2);
    t.a = function (a) {
        if (a && a.file) {
            var o = Object(s.k)({}, {default: !1}, a);
            o.file = Object(i.i)("" + o.file);
            var e = /^[^/]+\/(?:x-)?([^/]+)$/;
            if (e.test(o.type) && (o.mimeType = o.type, o.type = o.type.replace(e, "$1")), Object(r.isYouTube)(o.file) ? o.type = "youtube" : Object(r.isRtmp)(o.file) ? o.type = "rtmp" : o.type || (o.type = Object(i.a)(o.file)), o.type) {
                switch (o.type) {
                    case "m3u8":
                    case "vnd.apple.mpegurl":
                        o.type = "hls";
                        break;
                    case "dash+xml":
                        o.type = "dash";
                        break;
                    case "m4a":
                        o.type = "aac";
                        break;
                    case "smil":
                        o.type = "rtmp"
                }
                return Object.keys(o).forEach(function (e) {
                    "" === o[e] && delete o[e]
                }), o
            }
        }
    }
}, function (y, t, e) {
    "use strict";

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function k(a, t) {
        for (var e, i = 0; i < t.length; i++) e = t[i], e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, e.key, e)
    }

    function s(a, t) {
        return t && ("object" === n(t) || "function" == typeof t) ? t : function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(a)
    }

    function l(a, t, e) {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (a, t, e) {
            var n = function (a, n) {
                for (; !Object.prototype.hasOwnProperty.call(a, n) && null !== (a = C(a));) ;
                return a
            }(a, t);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, t);
                return r.get ? r.get.call(e) : r.value
            }
        })(a, t, e || a)
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function P(a, t) {
        return (P = Object.setPrototypeOf || function (a, t) {
            return a.__proto__ = t, a
        })(a, t)
    }

    function B(e) {
        return e && !(x.test(e) || "object" === n(e))
    }

    function E(y) {
        if (!y.handlers.init) {
            var t = y.el, b = y.passive, e = !!m && {passive: b}, a = function (a) {
                if (Object(u.o)(t, "jw-tab-focus"), !function (e) {
                    return "which" in e ? 3 === e.which : !!("button" in e) && 2 === e.button
                }(a)) {
                    var i = a.target, o = a.type;
                    if (!y.directSelect || i === t) {
                        var s = N(a), l = s.pageX, d = s.pageY;
                        if (y.dragged = !1, y.lastStart = Object(H.a)(), y.startX = l, y.startY = d, F(y, "window"), "pointerdown" === o && a.isPrimary) {
                            if (!b) {
                                var c = a.pointerId;
                                y.pointerId = c, t.setPointerCapture(c)
                            }
                            _(y, "window", "pointermove", n, e), _(y, "window", "pointercancel", r), _(y, "window", "pointerup", r), "BUTTON" === t.tagName && t.focus()
                        } else "mousedown" === o ? (_(y, "window", "mousemove", n, e), _(y, "window", "mouseup", r)) : "touchstart" === o && (_(y, "window", "touchmove", n, e), _(y, "window", "touchcancel", r), _(y, "window", "touchend", r), b || D(a))
                    }
                }
            }, n = function (t) {
                if (y.dragged) L(y, V.s, t); else {
                    var e = N(t), n = e.pageX, r = e.pageY, i = n - y.startX, a = r - y.startY;
                    i * i + a * a > 36 && (L(y, V.u, t), y.dragged = !0, L(y, V.s, t))
                }
                b || "touchmove" !== t.type || D(t)
            }, r = function (e) {
                if (clearTimeout(R), y.el) if (M(y), F(y, "window"), y.dragged) y.dragged = !1, L(y, V.t, e); else if (-1 === e.type.indexOf("cancel") && t.contains(e.target)) {
                    if (Object(H.a)() - y.lastStart > 500) return;
                    var a = "pointerup" === e.type || "pointercancel" === e.type,
                        n = "mouseup" === e.type || a && "mouse" === e.pointerType;
                    !function (a, t, e) {
                        if (a.enableDoubleTap) if (Object(H.a)() - a.lastClick < 300) {
                            var n = e ? V.q : V.r;
                            L(a, n, t), a.lastClick = 0
                        } else a.lastClick = Object(H.a)()
                    }(y, e, n), n ? L(y, V.n, e) : (L(y, V.sb, e), "touchend" !== e.type || m || D(e))
                }
            };
            i ? _(y, "init", "pointerdown", a, e) : (g && _(y, "init", "mousedown", a, e), _(y, "init", "touchstart", a, e)), q || (q = new w(document).on("interaction")), _(y, "init", "blur", function () {
                Object(u.o)(t, "jw-tab-focus")
            }), _(y, "init", "focus", function () {
                q.event && q.event.type === "keydown" && Object(u.a)(t, "jw-tab-focus")
            })
        }
    }

    function T(a) {
        var t = a.ownerDocument || a;
        return t.defaultView || t.parentWindow || window
    }

    function _(s, t, e, n) {
        var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : b, i = s.handlers[t], l = s.options[t];
        if (i || (i = s.handlers[t] = {}, l = s.options[t] = {}), i[e]) throw new Error("".concat(t, " ").concat(e, " already registered"));
        i[e] = n, l[e] = r;
        var d = s.el;
        (t === "window" ? T(d) : d).addEventListener(e, n, r)
    }

    function F(s, t) {
        var e = s.el, n = s.handlers, r = s.options, i = t === "window" ? T(e) : e, o = n[t], l = r[t];
        o && (Object.keys(o).forEach(function (a) {
            var t = l[a];
            "boolean" == typeof t ? i.removeEventListener(a, o[a], t) : i.removeEventListener(a, o[a])
        }), n[t] = null, r[t] = null)
    }

    function M(a) {
        var t = a.el;
        null !== a.pointerId && (t.releasePointerCapture(a.pointerId), a.pointerId = null)
    }

    function I(a, t, e) {
        var n = a.el, r = e.target;
        a.trigger(t, {type: t, sourceEvent: e, currentTarget: n, target: r})
    }

    function L(a, t, e) {
        var n = function (d, t, e) {
            var n, p = t.target, i = t.touches, o = t.changedTouches, u = t.pointerType;
            i || o ? (n = i && i.length ? i[0] : o[0], u = u || "touch") : (n = t, u = u || "mouse");
            var g = n, c = g.pageX, s = g.pageY;
            return {type: d, pointerType: u, pageX: c, pageY: s, sourceEvent: t, currentTarget: e, target: p}
        }(t, e, a.el);
        a.trigger(t, n)
    }

    function N(e) {
        return 0 === e.type.indexOf("touch") ? (e.originalEvent || e).changedTouches[0] : e
    }

    function D(e) {
        e.preventDefault && e.preventDefault()
    }

    e.d(t, "a", function () {
        return w
    }), e.d(t, "b", function () {
        return T
    });
    var R, q, z = e(5), V = e(3), r = e(9), H = e(18), u = e(6), a = "ontouchstart" in window,
        i = "PointerEvent" in window && !z.OS.android, g = !(i || a && z.OS.mobile), o = "keydown",
        m = z.Features.passiveEvents, b = !!m && {passive: !0}, w = function (a) {
            function d(e, t) {
                var a;
                !function (a, t) {
                    if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, d), a = s(this, C(d).call(this));
                var o = !(t = t || {}).preventScrolling;
                return a.directSelect = !!t.directSelect, a.dragged = !1, a.enableDoubleTap = !1, a.el = e, a.handlers = {}, a.options = {}, a.lastClick = 0, a.lastStart = 0, a.passive = o, a.pointerId = null, a.startX = 0, a.startY = 0, a.event = null, a
            }

            var e, t, o;
            return function (a, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                a.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), t && P(a, t)
            }(d, a), e = d, (t = [{
                key: "on", value: function (e, t, a) {
                    return B(e) && (this.handlers[e] || j[e](this)), l(C(d.prototype), "on", this).call(this, e, t, a)
                }
            }, {
                key: "off", value: function (e, t, a) {
                    var n = this;
                    if (B(e)) F(this, e); else if (!e) {
                        var r = this.handlers;
                        Object.keys(r).forEach(function (e) {
                            F(n, e)
                        })
                    }
                    return l(C(d.prototype), "off", this).call(this, e, t, a)
                }
            }, {
                key: "destroy", value: function () {
                    this.off(), i && M(this), this.el = null
                }
            }]) && k(e.prototype, t), o && k(e, o), d
        }(r.a), x = /\s+/, j = {
            drag: function (e) {
                E(e)
            }, dragStart: function (e) {
                E(e)
            }, dragEnd: function (e) {
                E(e)
            }, click: function (e) {
                E(e)
            }, tap: function (e) {
                E(e)
            }, doubleTap: function (e) {
                e.enableDoubleTap = !0, E(e)
            }, doubleClick: function (e) {
                e.enableDoubleTap = !0, E(e)
            }, longPress: function (a) {
                if (z.OS.iOS) {
                    var t = function () {
                        clearTimeout(R)
                    };
                    _(a, "longPress", "touchstart", function (e) {
                        t(), R = setTimeout(function () {
                            L(a, "longPress", e)
                        }, 500)
                    }), _(a, "longPress", "touchmove", t), _(a, "longPress", "touchcancel", t), _(a, "longPress", "touchend", t)
                } else a.el.oncontextmenu = function (t) {
                    return L(a, "longPress", t), !1
                }
            }, focus: function (a) {
                _(a, "focus", "focus", function (t) {
                    I(a, "focus", t)
                })
            }, blur: function (a) {
                _(a, "blur", "blur", function (t) {
                    I(a, "blur", t)
                })
            }, over: function (a) {
                (i || g) && _(a, V.Z, i ? "pointerover" : "mouseover", function (t) {
                    "touch" !== t.pointerType && L(a, V.Z, t)
                })
            }, out: function (a) {
                if (i) {
                    var t = a.el;
                    _(a, V.Y, "pointerout", function (e) {
                        if ("touch" !== e.pointerType && "x" in e) {
                            var n = document.elementFromPoint(e.x, e.y);
                            t.contains(n) || L(a, V.Y, e)
                        }
                    })
                } else g && _(a, V.Y, "mouseout", function (t) {
                    L(a, V.Y, t)
                })
            }, move: function (a) {
                (i || g) && _(a, V.W, i ? "pointermove" : "mousemove", function (t) {
                    "touch" !== t.pointerType && L(a, V.W, t)
                })
            }, enter: function (a) {
                _(a, V.v, o, function (t) {
                    "Enter" !== t.key && 13 !== t.keyCode || (t.stopPropagation(), I(a, V.v, t))
                })
            }, keydown: function (a) {
                _(a, o, o, function (t) {
                    I(a, o, t)
                }, !1)
            }, gesture: function (a) {
                var t = function (t) {
                    return L(a, "gesture", t)
                };
                _(a, "gesture", "click", t), _(a, "gesture", o, t)
            }, interaction: function (a) {
                var t = function (t) {
                    a.event = t
                };
                _(a, "interaction", "mousedown", t, !0), _(a, "interaction", o, t, !0)
            }
        }
}, function (d, t, e) {
    "use strict";

    function n(e) {
        return e.some(function (e) {
            return !!e.drm || e.sources.some(function (e) {
                return !!e.drm
            })
        })
    }

    function c(e) {
        return p || ((navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || window.MSMediaKeys) && Object(g.a)(e)("drm") ? (i.forEach(function (a) {
            var t, i, s = (t = a.keyName, i = [{
                initDataTypes: ["cenc"],
                videoCapabilities: [{contentType: "video/mp4;codecs=\"avc1.4d401e\""}],
                audioCapabilities: [{contentType: "audio/mp4;codecs=\"mp4a.40.2\""}]
            }], navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(t, i) : new Promise(function (e, a) {
                var n;
                try {
                    n = new window.MSMediaKeys(t)
                } catch (e) {
                    return void a(e)
                }
                e(n)
            })).then(function () {
                u[a.configName] = !0
            }).catch(function () {
                u[a.configName] = !1
            });
            o.push(s)
        }), p = Promise.all(o)) : Promise.resolve())
    }

    function s(e) {
        return u[e]
    }

    function l(e) {
        if (p) return Object.keys(e).some(function (e) {
            return s(e)
        })
    }

    e.d(t, "b", function () {
        return n
    }), e.d(t, "d", function () {
        return c
    }), e.d(t, "c", function () {
        return s
    }), e.d(t, "a", function () {
        return l
    });
    var p, g = e(23), i = [{configName: "clearkey", keyName: "org.w3.clearkey"}, {
        configName: "widevine",
        keyName: "com.widevine.alpha"
    }, {configName: "playready", keyName: "com.microsoft.playready"}], o = [], u = {}
}, , function (a, t, s) {
    "use strict";

    function e() {
        return r || (r = s.e(1).then(function () {
            var t = s(21).default;
            return l.controls = t, t
        }.bind(null, s)).catch(function () {
            r = null, Object(n.c)(301130)()
        })), r
    }

    s.d(t, "a", function () {
        return l
    }), s.d(t, "b", function () {
        return e
    });
    var n = s(10), r = null, l = {}
}, function (a, t) {
    "use strict";
    var e = document.createElement("video");
    t.a = e
}, function (a, t) {
    "use strict";
    t.a = {
        advertising: {
            admessage: "\u0627\u062A\u0645\u0627\u0645 \u0646\u0645\u0627\u06CC\u0634 \u062A\u0628\u0644\u06CC\u063A \u062A\u0627 xx \u062B\u0627\u0646\u06CC\u0647 \u062F\u06CC\u06AF\u0631",
            cuetext: "\u062A\u0628\u0644\u06CC\u063A",
            displayHeading: "\u062A\u0628\u0644\u06CC\u063A",
            loadingAd: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062A\u0628\u0644\u06CC\u063A",
            podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
            skipmessage: "\u0631\u062F \u062A\u0628\u0644\u06CC\u063A xx",
            skiptext: "\u0631\u062F \u062A\u0628\u0644\u06CC\u063A"
        },
        airplay: "AirPlay",
        audioTracks: "\u0622\u0647\u0646\u06AF \u0647\u0627\u06CC \u0635\u0648\u062A\u06CC",
        auto: "Auto",
        buffer: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
        cast: "\u06A9\u0631\u0648\u0645 \u06A9\u0633\u062A",
        cc: "\u0632\u06CC\u0631 \u0646\u0648\u06CC\u0633",
        close: "\u0628\u0633\u062A\u0646",
        errors: {
            badConnection: "\u0627\u06CC\u0646 \u0648\u06CC\u062F\u06CC\u0648 \u0646\u0645\u06CC\u062A\u0648\u0627\u0646\u062F \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0645\u0634\u06A9\u0644 \u0627\u062A\u0635\u0627\u0644 \u0627\u06CC\u0646\u062A\u0631\u0646\u062A\u06CC \u0634\u0645\u0627 \u067E\u062E\u0634 \u0634\u0648\u062F.",
            cantLoadPlayer: "\u0628\u0627 \u0639\u0631\u0636 \u067E\u0648\u0632\u0634\u060C \u067E\u062E\u0634 \u06A9\u0646\u0646\u062F\u0647 \u0648\u06CC\u062F\u06CC\u0648\u06CC\u06CC \u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0646\u0634\u062F",
            cantPlayInBrowser: "\u0627\u06CC\u0646 \u0648\u06CC\u062F\u06CC\u0648 \u0631\u0627 \u0646\u0645\u06CC \u062A\u0648\u0627\u0646 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0631\u0648\u0631\u06AF\u0631 \u067E\u062E\u0634 \u06A9\u0631\u062F.",
            cantPlayVideo: "\u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644 \u0648\u06CC\u062F\u0626\u0648\u06CC\u06CC \u0642\u0627\u0628\u0644 \u067E\u062E\u0634 \u0646\u06CC\u0633\u062A",
            errorCode: "\u06A9\u062F \u062E\u0637\u0627",
            liveStreamDown: "\u067E\u062E\u0634 \u0632\u0646\u062F\u0647 \u06CC\u0627 \u0642\u0637\u0639 \u0627\u0633\u062A \u0648 \u06CC\u0627 \u067E\u0627\u06CC\u0627\u0646 \u06CC\u0627\u0641\u062A\u0647 \u0627\u0633\u062A.",
            protectedContent: "\u0645\u0634\u06A9\u0644\u06CC \u062F\u0631 \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u062D\u0627\u0641\u0638\u062A \u0634\u062F\u0647 \u0648\u062C\u0648\u062F \u062F\u0627\u0634\u062A.",
            technicalError: "\u0627\u06CC\u0646 \u0648\u06CC\u062F\u06CC\u0648 \u0631\u0627 \u0646\u0645\u06CC \u062A\u0648\u0627\u0646 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u06CC\u06A9 \u062E\u0637\u0627\u06CC \u0641\u0646\u06CC \u067E\u062E\u0634 \u06A9\u0631\u062F."
        },
        exitFullscreen: "\u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0627\u0644\u062A \u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647",
        fullscreen: "\u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647",
        hd: "\u06A9\u06CC\u0641\u06CC\u062A",
        liveBroadcast: "\u067E\u062E\u0634 \u0632\u0646\u062F\u0647",
        logo: "\u0644\u0648\u06AF\u0648",
        mute: "\u0628\u06CC \u0635\u062F\u0627",
        next: "\u0628\u0639\u062F\u06CC",
        nextUp: "\u0648\u06CC\u062F\u06CC\u0648\u06CC \u0628\u0639\u062F\u06CC",
        notLive: "\u0632\u0646\u062F\u0647 \u0646\u06CC\u0633\u062A",
        off: "\u062E\u0627\u0645\u0648\u0634",
        pause: "\u062A\u0648\u0642\u0641",
        play: "\u067E\u062E\u0634",
        playback: "\u0634\u0631\u0648\u0639 \u0628\u0647 \u067E\u062E\u0634",
        playbackRates: "\u0633\u0631\u0639\u062A \u067E\u062E\u0634",
        player: "\u067E\u062E\u0634 \u06A9\u0646\u0646\u062F\u0647 \u0648\u06CC\u062F\u06CC\u0648",
        poweredBy: "\u0637\u0631\u0627\u062D\u06CC \u0634\u062F\u0647 \u062A\u0648\u0633\u0637",
        prev: "\u0642\u0628\u0644\u06CC",
        related: {
            autoplaymessage: "\u0634\u0631\u0648\u0639 \u067E\u062E\u0634 \u0648\u06CC\u062F\u06CC\u0648\u06CC \u0628\u0639\u062F\u06CC \u062F\u0631 xx \u062B\u0627\u0646\u06CC\u0647 \u062F\u06CC\u06AF\u0631",
            heading: "\u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631"
        },
        replay: "\u0628\u0627\u0632\u067E\u062E\u0634",
        rewind: "\u0627\u0632 10 \u062B\u0627\u0646\u06CC\u0647 \u0642\u0628\u0644",
        settings: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
        sharing: {
            copied: "\u06A9\u067E\u06CC \u0634\u062F",
            email: "\u0627\u06CC\u0645\u06CC\u0644",
            embed: "\u06A9\u062F \u0627\u0645\u0628\u062F",
            heading: "\u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0631\u06CC",
            link: "\u0644\u06CC\u0646\u06A9"
        },
        slider: "\u062C\u0633\u062A\u062C\u0648",
        stop: "\u062A\u0648\u0642\u0641",
        unmute: "\u0648\u0635\u0644 \u0635\u062F\u0627",
        videoInfo: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0627\u06CC\u0646 \u0648\u06CC\u062F\u06CC\u0648",
        volume: "\u0645\u06CC\u0632\u0627\u0646 \u0635\u062F\u0627",
        volumeSlider: "\u0645\u06CC\u0632\u0627\u0646 \u0635\u062F\u0627",
        shortcuts: {
            playPause: "\u067E\u062E\u0634/\u062A\u0648\u0642\u0641",
            volumeToggle: "\u0628\u06CC \u0635\u062F\u0627/\u0628\u0627 \u0635\u062F\u0627",
            fullscreenToggle: "\u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647/\u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0627\u0644\u062A \u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647",
            seekPercent: "\u067E\u0631\u0634 %",
            keyboardShortcuts: "\u0645\u06CC\u0627\u0646\u0628\u0631\u0647\u0627\u06CC \u0635\u0641\u062D\u0647 \u06A9\u0644\u06CC\u062F",
            increaseVolume: "\u0627\u0641\u0632\u0627\u06CC\u0634 \u0635\u062F\u0627",
            decreaseVolume: "\u06A9\u0627\u0647\u0634 \u0635\u062F\u0627",
            seekForward: "\u067E\u0631\u0634 \u0628\u0647 \u062C\u0644\u0648",
            seekBackward: "\u067E\u0631\u0634 \u0628\u0647 \u0639\u0642\u0628",
            spacebar: "SPACE",
            captionsToggle: "\u0632\u06CC\u0631\u0646\u0648\u06CC\u0633 \u0631\u0648\u0634\u0646/\u062E\u0627\u0645\u0648\u0634"
        }
    }
}, function (e) {
    function d(a) {
        var t = document.createElement("style");
        return t.type = "text/css", t.setAttribute("data-jwplayer-id", a), function (e) {
            i().appendChild(e)
        }(t), t
    }

    function p(o, s) {
        var l, p, g, t = m[o];
        t || (t = m[o] = {element: d(o), counter: 0});
        var h = t.counter++;
        return l = t.element, g = function () {
            a(l, h, "")
        }, (p = function (e) {
            a(l, h, e)
        })(s.css), function (e) {
            if (e) {
                if (e.css === s.css && e.media === s.media) return;
                p((s = e).css)
            } else g()
        }
    }

    function a(a, t, e) {
        if (a.styleSheet) a.styleSheet.cssText = u(t, e); else {
            var n = document.createTextNode(e), r = a.childNodes[t];
            r ? a.replaceChild(n, r) : a.appendChild(n)
        }
    }

    var t, c, g = {}, m = {}, i = (t = function () {
        return document.head || document.getElementsByTagName("head")[0]
    }, function () {
        return void 0 === c && (c = t.apply(this, arguments)), c
    });
    e.exports = {
        style: function (a, t) {
            !function (i, t) {
                for (var e = 0; e < t.length; e++) {
                    var s = t[e], r = (g[i] || {})[s.id];
                    if (r) {
                        for (var o = 0; o < r.parts.length; o++) r.parts[o](s.parts[o]);
                        for (; o < s.parts.length; o++) r.parts.push(p(i, s.parts[o]))
                    } else {
                        var l = [];
                        for (o = 0; o < s.parts.length; o++) l.push(p(i, s.parts[o]));
                        g[i] = g[i] || {}, g[i][s.id] = {id: s.id, parts: l}
                    }
                }
            }(t, function (s) {
                for (var t = [], e = {}, n = 0; n < s.length; n++) {
                    var l = s[n], i = l[0], o = l[1], d = l[2], a = {css: o, media: d};
                    e[i] ? e[i].parts.push(a) : t.push(e[i] = {id: i, parts: [a]})
                }
                return t
            }(a))
        }, clear: function (i, t) {
            var e = g[i];
            if (e) {
                if (t) {
                    var n = e[t];
                    if (n) for (var r = 0; r < n.parts.length; r += 1) n.parts[r]();
                    return
                }
                for (var l = Object.keys(e), d = 0; d < l.length; d += 1) for (var p = e[l[d]], c = 0; c < p.parts.length; c += 1) p.parts[c]();
                delete g[i]
            }
        }
    };
    var o, u = (o = [], function (a, t) {
        return o[a] = t, o.filter(Boolean).join("\n")
    })
}, function (d, t, p) {
    "use strict";

    function e(e) {
        this.config = e || {}
    }

    var n = p(0), c = p(17), r = p(13), i = p(33), o = p(10), a = {
        html5: function () {
            return p.e(15).then(function () {
                var t = p(51).default;
                return Object(r.a)(t), t
            }.bind(null, p)).catch(Object(o.b)(152))
        }
    };
    Object(n.k)(e.prototype, {
        load: function (r) {
            var t = a[r], o = function () {
                return Promise.reject(new Error("Failed to load media"))
            };
            return t ? t().then(function () {
                var t = i.a[r];
                return t || o()
            }) : o()
        }, providerSupports: function (a, t) {
            return a.supports(t)
        }, choose: function (a) {
            if (a === Object(a)) for (var t, o = c.a.length, e = 0; e < o; e++) if (t = c.a[e], this.providerSupports(t, a)) return {
                priority: o - e - 1,
                name: t.name,
                type: a.type,
                providerToCheck: t,
                provider: i.a[t.name]
            };
            return {}
        }
    });
    var s, u = e;
    Object(n.k)(a, {
        shaka: function () {
            return p.e(16).then(function () {
                var t = p(161).default;
                return Object(r.a)(t), t
            }.bind(null, p)).catch(Object(o.b)(154))
        }, hlsjs: function () {
            return p.e(13).then(function () {
                var t = p(156).default;
                return t.setEdition && t.setEdition(s), Object(r.a)(t), t
            }.bind(null, p)).catch(Object(o.b)(153))
        }, flash: function () {
            return p.e(12).then(function () {
                var t = p(163).default;
                return Object(r.a)(t), t
            }.bind(null, p)).catch(Object(o.b)(151))
        }, hlsjsProgressive: function () {
            return p.e(14).then(function () {
                var t = p(157).default;
                return t.setEdition(s), Object(r.a)(t), t
            }.bind(null, p)).catch(Object(o.b)(155))
        }
    }), u.prototype.providerSupports = function (a, t) {
        return s = this.config.edition, a.supports(t, s)
    }, t.a = u
}, function (a, t, e) {
    "use strict";

    function n(o, t) {
        var e = t.message, n = t.code, p = d(o.get("id"), e, o.get("localization").errors.errorCode, n),
            a = o.get("width"), c = o.get("height"), s = Object(r.e)(p);
        return Object(i.d)(s, {
            width: 0 < a.toString().indexOf("%") ? a : "".concat(a, "px"),
            height: 0 < c.toString().indexOf("%") ? c : "".concat(c, "px")
        }), s
    }

    var d = function (a, t, e, n) {
        var r = n ? "(".concat(e, ": ").concat(n, ")").replace(/\s+/g, "&nbsp;") : "";
        return "<div id=\"".concat(a, "\" class=\"jw-error jw-reset\">") + "<div class=\"jw-error-msg jw-info-overlay jw-reset\"><style>" + "[id=\"".concat(a, "\"].jw-error{background:#000;overflow:hidden;position:relative}") + "[id=\"".concat(a, "\"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}") + "[id=\"".concat(a, "\"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}") + "</style><div class=\"jw-icon jw-reset\"></div><div class=\"jw-info-container jw-reset\">" + "<div class=\"jw-error-text jw-reset-text\" dir=\"auto\">".concat(t || "", "<span class=\"jw-break jw-reset\"></span>").concat(r, "</div>") + "</div></div></div>"
    }, r = e(6), i = e(11);
    e.d(t, "a", function () {
        return n
    })
}, function (a, t, e) {
    "use strict";

    function n(e) {
        return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e
    }

    function r(a, t) {
        if (-1 === t.toString().indexOf("%")) return 0;
        if ("string" != typeof a || !a) return 0;
        if (/^\d*\.?\d+%$/.test(a)) return a;
        var e = a.indexOf(":");
        if (-1 === e) return 0;
        var n = parseFloat(a.substr(0, e)), r = parseFloat(a.substr(e + 1));
        return 0 >= n || 0 >= r ? 0 : 100 * (r / n) + "%"
    }

    e.d(t, "b", function () {
        return n
    }), e.d(t, "a", function () {
        return r
    })
}, function (a, t, e) {
    "use strict";
    e.d(t, "a", function () {
        return n
    });
    var n = window.atob
}, function (d, t, e) {
    "use strict";

    function p(a) {
        for (var t, r = [], e = 0; e < Object(g.c)(a); e++) t = a.childNodes[e], "jwplayer" === t.prefix && "mediatypes" === Object(g.b)(t).toLowerCase() && r.push(Object(g.d)(t));
        return r
    }

    function n(r) {
        var t = [];
        t.feedData = {};
        for (var e, s = 0; s < Object(g.c)(r); s++) if (e = Object(g.a)(r, s), "channel" === Object(g.b)(e).toLowerCase()) for (var d = 0; d < Object(g.c)(e); d++) {
            var c = Object(g.a)(e, d), p = Object(g.b)(c).toLowerCase();
            "item" === p ? t.push(l(c)) : p && (t.feedData[p] = Object(g.d)(c))
        }
        return t
    }

    function l(s) {
        for (var t = {}, e = 0; e < s.childNodes.length; e++) {
            var l = s.childNodes[e], o = Object(g.b)(l);
            if (o) switch (o.toLowerCase()) {
                case "enclosure":
                    t.file = Object(r.j)(l, "url");
                    break;
                case "title":
                    t.title = Object(g.d)(l);
                    break;
                case "guid":
                    t.mediaid = Object(g.d)(l);
                    break;
                case "pubdate":
                    t.date = Object(g.d)(l);
                    break;
                case "description":
                    t.description = Object(g.d)(l);
                    break;
                case "link":
                    t.link = Object(g.d)(l);
                    break;
                case "category":
                    t.tags ? t.tags += Object(g.d)(l) : t.tags = Object(g.d)(l)
            }
        }
        return new c.a(u(s, i(s, t)))
    }

    var g = e(4), r = e(2), i = function i(t, e) {
        for (var o, m, y, b = [], c = 0; c < Object(g.c)(t); c++) if (y = t.childNodes[c], "media" === y.prefix) {
            if (!Object(g.b)(y)) continue;
            switch (Object(g.b)(y).toLowerCase()) {
                case "content":
                    if (Object(r.j)(y, "duration") && (e.duration = Object(r.g)(Object(r.j)(y, "duration"))), Object(r.j)(y, "url")) {
                        e.sources || (e.sources = []);
                        var v = {
                            file: Object(r.j)(y, "url"),
                            type: Object(r.j)(y, "type"),
                            width: Object(r.j)(y, "width"),
                            label: Object(r.j)(y, "label")
                        }, f = p(y);
                        f.length && (v.mediaTypes = f), e.sources.push(v)
                    }
                    0 < Object(g.c)(y) && (e = i(y, e));
                    break;
                case "title":
                    e.title = Object(g.d)(y);
                    break;
                case "description":
                    e.description = Object(g.d)(y);
                    break;
                case "guid":
                    e.mediaid = Object(g.d)(y);
                    break;
                case "thumbnail":
                    e.image || (e.image = Object(r.j)(y, "url"));
                    break;
                case "group":
                    i(y, e);
                    break;
                case "subtitle":
                    var d = {};
                    d.file = Object(r.j)(y, "url"), d.kind = "captions", 0 < Object(r.j)(y, "lang").length && (d.label = (o = Object(r.j)(y, "lang"), m = void 0, (m = {
                        zh: "Chinese",
                        nl: "Dutch",
                        en: "English",
                        fr: "French",
                        de: "German",
                        it: "Italian",
                        ja: "Japanese",
                        pt: "Portuguese",
                        ru: "Russian",
                        es: "Spanish"
                    })[o] ? m[o] : o)), b.push(d)
            }
        }
        e.hasOwnProperty("tracks") || (e.tracks = []);
        for (var k = 0; k < b.length; k++) e.tracks.push(b[k]);
        return e
    }, m = e(12), u = function (a, t) {
        for (var e, i = "default", n = [], o = [], p = 0; p < a.childNodes.length; p++) {
            if (e = a.childNodes[p], "jwplayer" === e.prefix) {
                var u = Object(g.b)(e);
                "source" === u ? (delete t.sources, n.push({
                    file: Object(r.j)(e, "file"),
                    default: Object(r.j)(e, i),
                    label: Object(r.j)(e, "label"),
                    type: Object(r.j)(e, "type")
                })) : "track" === u ? (delete t.tracks, o.push({
                    file: Object(r.j)(e, "file"),
                    default: Object(r.j)(e, i),
                    kind: Object(r.j)(e, "kind"),
                    label: Object(r.j)(e, "label")
                })) : (t[u] = Object(m.serialize)(Object(g.d)(e)), "file" === u && t.sources && delete t.sources)
            }
            t.file || (t.file = t.link)
        }
        if (n.length) {
            t.sources = [];
            for (var l = 0; l < n.length; l++) 0 < n[l].file.length && (n[l][i] = "true" === n[l][i], n[l].label.length || delete n[l].label, t.sources.push(n[l]))
        }
        if (o.length) {
            t.tracks = [];
            for (var h = 0; h < o.length; h++) 0 < o[h].file.length && (o[h][i] = "true" === o[h][i], o[h].kind = o[h].kind.length ? o[h].kind : "captions", o[h].label.length || delete o[h].label, t.tracks.push(o[h]))
        }
        return t
    }, c = e(29);
    e.d(t, "a", function () {
        return n
    })
}, function (a, t, e) {
    "use strict";
    e.d(t, "a", function () {
        return n
    });
    var n = "function" == typeof console.log ? console.log.bind(console) : function () {
    }
}, function (a, t, e) {
    "use strict";

    function g(a) {
        for (var t = Array(Math.ceil(a.length / 4)), e = 0; e < t.length; e++) t[e] = a.charCodeAt(4 * e) + (a.charCodeAt(4 * e + 1) << 8) + (a.charCodeAt(4 * e + 2) << 16) + (a.charCodeAt(4 * e + 3) << 24);
        return t
    }

    function n(r, m) {
        if (r = r + "", m = m + "", 0 === r.length) return "";
        for (var h, y, b, v = g(Object(i.a)(r)), a = g((h = m, unescape(encodeURIComponent(h))).slice(0, 16)), c = v.length, s = v[c - 1], k = v[0], w = 2654435769 * Math.floor(6 + 52 / c); w;) {
            b = 3 & w >>> 2;
            for (var C = c - 1; 0 <= C; C--) y = ((s = v[0 < C ? C - 1 : c - 1]) >>> 5 ^ k << 2) + (k >>> 3 ^ s << 4) ^ (w ^ k) + (a[3 & C ^ b] ^ s), k = v[C] -= y;
            w -= 2654435769
        }
        return function (a) {
            try {
                return decodeURIComponent(escape(a))
            } catch (t) {
                return a
            }
        }(function (a) {
            for (var t = Array(a.length), e = 0; e < a.length; e++) t[e] = String.fromCharCode(255 & a[e], 255 & a[e] >>> 8, 255 & a[e] >>> 16, 255 & a[e] >>> 24);
            return t.join("")
        }(v).replace(/\0+$/, ""))
    }

    e.d(t, "a", function () {
        return n
    });
    var i = e(45)
}, function (a, t, e) {
    "use strict";
    e.d(t, "b", function () {
        return n
    }), e.d(t, "a", function () {
        return r
    });
    var n = window.requestAnimationFrame || function (e) {
        return setTimeout(e, 17)
    }, r = window.cancelAnimationFrame || clearTimeout
}, function (a, t, e) {
    "use strict";
    e.d(t, "b", function () {
        return n
    }), e.d(t, "a", function () {
        return r
    });
    var n = {
        audioMode: !1,
        flashBlocked: !1,
        item: 0,
        itemMeta: {},
        playbackRate: 1,
        playRejected: !1,
        state: e(3).nb,
        itemReady: !1,
        controlsEnabled: !1
    }, r = {position: 0, duration: 0, buffer: 0, currentTime: 0}
}, , function (a, t, e) {
    "use strict";
    e.d(t, "a", function () {
        return n
    });
    var n = function (a, t, e) {
        return Math.max(Math.min(a, e), t)
    }
}, function (a, t, e) {
    "use strict";

    function n() {
        try {
            var e = window.crypto || window.msCrypto;
            if (e && e.getRandomValues) return e.getRandomValues(new Uint32Array(1))[0].toString(36)
        } catch (e) {
        }
        return Math.random().toString(36).slice(2, 9)
    }

    function i(a) {
        for (var t = ""; t.length < a;) t += n();
        return t.slice(0, a)
    }

    e.d(t, "a", function () {
        return o
    }), e.d(t, "b", function () {
        return i
    });
    var o = 12
}, function (s, t, e) {
    "use strict";

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function l(a, t) {
        for (var e, i = 0; i < t.length; i++) e = t[i], e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, e.key, e)
    }

    function i(a, t) {
        return t && ("object" === n(t) || "function" == typeof t) ? t : function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(a)
    }

    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(a, t) {
        return (d = Object.setPrototypeOf || function (a, t) {
            return a.__proto__ = t, a
        })(a, t)
    }

    e.d(t, "a", function () {
        return p
    });
    var p = function (a) {
        function s() {
            var e;
            return function (a, t) {
                if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (e = i(this, o(s).call(this))).attributes = Object.create(null), e
        }

        var e, t, p;
        return function (a, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            a.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(a, t)
        }(s, a), e = s, (t = [{
            key: "addAttributes", value: function (a) {
                var t = this;
                Object.keys(a).forEach(function (e) {
                    t.add(e, a[e])
                })
            }
        }, {
            key: "add", value: function (a, t) {
                var r = this;
                Object.defineProperty(this, a, {
                    get: function () {
                        return r.attributes[a]
                    }, set: function (t) {
                        return r.set(a, t)
                    }, enumerable: !1
                }), this.attributes[a] = t
            }
        }, {
            key: "get", value: function (e) {
                return this.attributes[e]
            }
        }, {
            key: "set", value: function (a, t) {
                if (this.attributes[a] !== t) {
                    var e = this.attributes[a];
                    this.attributes[a] = t, this.trigger("change:" + a, this, t, e)
                }
            }
        }, {
            key: "clone", value: function () {
                var a = {}, t = this.attributes;
                if (t) for (var e in t) a[e] = t[e];
                return a
            }
        }, {
            key: "change", value: function (a, t, e) {
                this.on("change:" + a, t, e);
                var n = this.get(a);
                return t.call(e, this, n, n), this
            }
        }]) && l(e.prototype, t), p && l(e, p), s
    }(e(9).a)
}, function (a, t, e) {
    "use strict";

    function n(a, t, s) {
        function n() {
            for (; 0 < l.length;) {
                var t = l.shift(), e = t.command, n = t.args;
                (r[e] || a[e]).apply(a, n)
            }
        }

        var l = [], r = {};
        t.forEach(function (i) {
            var e = a[i];
            r[i] = e, a[i] = function () {
                var a = Array.prototype.slice.call(arguments, 0);
                s() ? l.push({command: i, args: a}) : (n(), e && e.apply(this, a))
            }
        }), Object.defineProperty(this, "queue", {
            enumerable: !0, get: function () {
                return l
            }
        }), this.flush = n, this.empty = function () {
            l.length = 0
        }, this.off = function () {
            t.forEach(function (t) {
                var e = r[t];
                e && (a[t] = e, delete r[t])
            })
        }, this.destroy = function () {
            this.off(), this.empty()
        }
    }

    e.d(t, "a", function () {
        return n
    })
}, function (a, t, e) {
    "use strict";
    e.d(t, "c", function () {
        return n
    }), e.d(t, "b", function () {
        return r
    }), e.d(t, "a", function () {
        return i
    });
    var n = 4, r = 2, i = 1
}, function (a, t, e) {
    "use strict";
    var s = e(3), n = function () {
    }, r = function () {
        return !1
    }, i = {name: "default"};
    t.a = {
        supports: r,
        play: n,
        pause: n,
        preload: n,
        load: n,
        stop: n,
        volume: n,
        mute: n,
        seek: n,
        resize: n,
        remove: n,
        destroy: n,
        setVisibility: n,
        setFullscreen: n,
        getFullscreen: r,
        supportsFullscreen: r,
        getContainer: n,
        setContainer: n,
        getName: function () {
            return i
        },
        getQualityLevels: n,
        getCurrentQuality: n,
        setCurrentQuality: n,
        getAudioTracks: n,
        getCurrentAudioTrack: n,
        setCurrentAudioTrack: n,
        getSeekRange: function () {
            return {start: 0, end: this.getDuration()}
        },
        setPlaybackRate: n,
        getPlaybackRate: function () {
            return 1
        },
        getBandwidthEstimate: function () {
            return null
        },
        getLiveLatency: function () {
            return null
        },
        setControls: n,
        attachMedia: n,
        detachMedia: n,
        init: n,
        setState: function (e) {
            this.state = e, this.trigger(s.bb, {newstate: e})
        },
        sendMediaType: function (a) {
            var t = a[0], e = t.type, n = t.mimeType,
                r = "aac" === e || "mp3" === e || "mpeg" === e || n && 0 === n.indexOf("audio/");
            this.trigger(s.T, {mediaType: r ? "audio" : "video"})
        }
    }
}, function (s, t, e) {
    "use strict";
    var n = e(0), r = e(24), i = e(12), o = e(2), l = e(1), a = e(19), c = function (a) {
        if ("string" == typeof a) {
            var i = (a = a.split("?")[0]).indexOf("://");
            if (0 < i) return 0;
            var e = a.indexOf("/"), n = Object(o.a)(a);
            return !(0 > i && 0 > e) || n && isNaN(n) ? 1 : 2
        }
    }, p = function (e) {
        this.url = e, this.promise_ = null
    };
    Object.defineProperties(p.prototype, {
        promise: {
            get: function () {
                return this.promise_ || this.load()
            }, set: function () {
            }
        }
    }), Object(n.k)(p.prototype, {
        load: function () {
            var a = this, t = this.promise_;
            if (!t) {
                if (2 === c(this.url)) t = Promise.resolve(this); else {
                    var o = new r.a(function (e) {
                        switch (c(e)) {
                            case 0:
                                return e;
                            case 1:
                                return Object(i.getAbsolutePath)(e, window.location.href)
                        }
                    }(this.url));
                    this.loader = o, t = o.load().then(function () {
                        return a
                    })
                }
                this.promise_ = t
            }
            return t
        }, registerPlugin: function (a, t, e) {
            this.name = a, this.target = t, this.js = e
        }, getNewInstance: function (o, t, s) {
            var e = this.js;
            if ("function" != typeof e) throw new l.s(null, Object(a.c)(this.url) + 100);
            var n = new e(o, t, s);
            return n.addToPlayer = function () {
                var t = o.getContainer().querySelector(".jw-overlays");
                t && (s.left = t.style.left, s.top = t.style.top, t.appendChild(s), n.displayArea = t)
            }, n.resizeHandler = function () {
                var e = n.displayArea;
                e && n.resize(e.clientWidth, e.clientHeight)
            }, n
        }
    }), t.a = p
}, function (l, t, e) {
    "use strict";
    var p = e(0), n = e(3), r = e(4), i = e(46), o = e(28), a = e(9), d = e(1);
    t.a = function () {
        function s(t) {
            try {
                var e, o = t.responseXML ? t.responseXML.childNodes : null, s = "";
                if (o) {
                    for (var c = 0; c < o.length && 8 === (s = o[c]).nodeType; c++) ;
                    if ("xml" === Object(r.b)(s) && (s = s.nextSibling), "rss" === Object(r.b)(s)) {
                        var g = Object(i.a)(s);
                        e = Object(p.k)({playlist: g}, g.feedData)
                    }
                }
                if (!e) try {
                    var m = JSON.parse(t.responseText);
                    if (Array.isArray(m)) e = {playlist: m}; else {
                        if (!Array.isArray(m.playlist)) throw Error("Playlist is not an array");
                        e = m
                    }
                } catch (e) {
                    throw new d.s(d.o, 621, e)
                }
                u.trigger(n.eb, e)
            } catch (e) {
                l(e)
            }
        }

        function l(t) {
            t.code || (t = new d.s(d.o, 0)), u.trigger(n.w, t)
        }

        var u = Object(p.k)(this, a.a);
        this.load = function (e) {
            Object(o.a)(e, s, function (a, t, e, n) {
                l(n)
            })
        }, this.destroy = function () {
            this.off()
        }
    }
}, function (a, t, e) {
    "use strict";

    function n() {
        for (var r, d = l.c, p = [], e = [], t = 0; t < d; t++) r = o(), p.push(r), e.push(r), s(r);
        var n = e.shift(), c = e.shift(), u = !1;
        return {
            primed: function () {
                return u
            }, prime: function () {
                p.forEach(s), u = !0
            }, played: function () {
                u = !0
            }, getPrimedElement: function () {
                return e.length ? e.shift() : null
            }, getAdElement: function () {
                return n
            }, getTestElement: function () {
                return c
            }, clean: function (e) {
                if (e.src) {
                    e.removeAttribute("src");
                    try {
                        e.load()
                    } catch (e) {
                    }
                }
            }, recycle: function (a) {
                a && !e.some(function (t) {
                    return t === a
                }) && (this.clean(a), e.push(a))
            }, syncVolume: function (e) {
                var a = Math.min(Math.max(0, e / 100), 1);
                p.forEach(function (e) {
                    e.volume = a
                })
            }, syncMute: function (a) {
                p.forEach(function (t) {
                    t.muted = a
                })
            }
        }
    }

    function s(e) {
        e.src || e.load()
    }

    function o(a) {
        var t = document.createElement("video");
        return t.className = "jw-video jw-reset", t.setAttribute("tabindex", "-1"), t.setAttribute("disableRemotePlayback", ""), t.setAttribute("webkit-playsinline", ""), t.setAttribute("playsinline", ""), a && Object.keys(a).forEach(function (e) {
            t.setAttribute(e, a[e])
        }), t
    }

    e.d(t, "b", function () {
        return n
    }), e.d(t, "a", function () {
        return o
    });
    var l = e(56)
}, function (a, t, e) {
    "use strict";

    function n(a, t) {
        return Object(i.k)({}, t, {
            prime: function () {
                a.src || a.load()
            }, getPrimedElement: function () {
                return a
            }, clean: function () {
                t.clean(a)
            }, recycle: function () {
                t.clean(a)
            }
        })
    }

    e.d(t, "a", function () {
        return n
    });
    var i = e(0)
}, function (a, t) {
    "use strict";
    t.a = "hidden" in document ? function () {
        return !document.hidden
    } : "webkitHidden" in document ? function () {
        return !document.webkitHidden
    } : function () {
        return !0
    }
}, function (a, t, e) {
    "use strict";

    function n(e) {
        return (e = e || window.event) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(e.type)
    }

    e.d(t, "a", function () {
        return n
    })
}, function (Y, t, ee) {
    "use strict";

    function te(a, t) {
        var e = a.querySelector(t);
        if (e) return e.getAttribute("content")
    }

    function e(e) {
        return "string" == typeof e && /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(e)
    }

    function n(e) {
        return "https:" + e
    }

    function b(a) {
        var t = "file:" === window.location.protocol ? "https:" : "", e = {
            dai: "/dai.js",
            vast: "/vast.js",
            googima: "/googima.js",
            freewheel: "/freewheel.js",
            gapro: "/gapro.js"
        }[a];
        return e ? window.jwplayer.base + t + e : ""
    }

    function w(a, t, e) {
        t && (a[t.client || b(e)] = t, delete t.client)
    }

    function k(a) {
        var t = a.get("playlist");
        return new Promise(function (s, n) {
            if ("string" != typeof t) {
                var e = a.get("feedData") || {};
                return j(a, t, e), s()
            }
            var r = new x.a;
            r.on(C.eb, function (t) {
                var e = t.playlist;
                delete t.playlist, j(a, e, t), s()
            }), r.on(C.w, function (t) {
                j(a, [], {}), n(Object(S.z)(t, S.u))
            }), r.load(t)
        })
    }

    function j(a, t, e) {
        var n = a.attributes;
        n.playlist = Object(P.a)(t), n.feedData = e
    }

    function O(e) {
        return e.attributes._destroyed
    }

    function I(a) {
        return N(a) ? Promise.resolve() : k(a).then(function () {
            if (a.get("drm") || Object(T.b)(a.get("playlist"))) return Object(T.d)(a.get("edition"))
        }).then(function () {
            return k(s = a).then(function () {
                if (!O(s)) {
                    var e = Object(P.b)(s.get("playlist"), s);
                    s.attributes.playlist = e;
                    try {
                        Object(P.e)(e)
                    } catch (e) {
                        throw e.code += S.u, e
                    }
                    var t = s.getProviders(), a = t.choose(e[0].sources[0]), n = a.provider, r = a.name;
                    return "function" == typeof n ? n : y.a.html5 && "html5" === r ? y.a.html5 : t.load(r).catch(function (e) {
                        throw Object(S.z)(e, S.v)
                    })
                }
            });
            var s
        })
    }

    function F(e) {
        var t = [D(e)];
        return N(e) || t.push(Promise.resolve()), Promise.all(t)
    }

    function D(a) {
        var s = a.attributes, e = s.error;
        if (e && e.code === p.a) {
            var t = s.pid, n = s.ph, r = new p.b(s.key);
            if (0 < n && 4 > n && t && -7776e6 < r.duration()) return new E.a("//content.jwplatform.com/libraries/".concat(t, ".js")).load().then(function () {
                var e = window.jwplayer.defaults.key, t = new p.b(e);
                t.error() || t.token() !== r.token() || (s.key = e, s.edition = t.edition(), s.error = t.error())
            }).catch(function () {
            })
        }
        return Promise.resolve()
    }

    function N(a) {
        var t = a.get("advertising");
        return t && t.outstream
    }

    function M(a, t) {
        this.namespace = a, this.items = t
    }

    function R(a, t) {
        t && t.code && (t.sourceError && console.error(t.sourceError), console.error(S.s.logMessage(t.code)))
    }

    function B(e) {
        e && e.code && console.warn(S.s.logMessage(e.code))
    }

    function U(a, t) {
        if (!document.body.contains(a.currentContainer)) {
            var e = document.getElementById(a.get("id"));
            e && (a.currentContainer = e)
        }
        a.currentContainer.parentElement && a.currentContainer.parentElement.replaceChild(t, a.currentContainer), a.currentContainer = t
    }

    var ae = ee(0), r = ee(55), ne = ee(44), o = ee(20), i = ee(12), a = ee(5), c = ee(40), s = ee(14), u = {
        autoPause: {viewability: !1, pauseAds: !1},
        autostart: !1,
        bandwidthEstimate: null,
        bitrateSelection: null,
        castAvailable: !1,
        controls: !0,
        cues: [],
        defaultPlaybackRate: 1,
        displaydescription: !0,
        displaytitle: !0,
        displayPlaybackLabel: !1,
        enableShortcuts: !0,
        height: 360,
        intl: {},
        language: "en",
        liveTimeout: null,
        localization: c.a,
        mute: !1,
        nextUpDisplay: !0,
        playbackRateControls: !1,
        playbackRates: [.5, 1, 1.25, 1.5, 2],
        renderCaptionsNatively: !1,
        repeat: !1,
        stretching: "uniform",
        volume: 90,
        width: 640
    }, f = function (n, t) {
        var e = Object(ae.k)({}, (window.jwplayer || {}).defaults, t, n);
        !function (a) {
            Object.keys(a).forEach(function (t) {
                "id" !== t && (a[t] = Object(i.serialize)(a[t]))
            })
        }(e);
        var r = e.forceLocalizationDefaults ? u.language : Object(s.e)(), l = Object(s.j)(e.intl);
        e.localization = Object(s.a)(c.a, Object(s.c)(e, l, r));
        var d = Object(ae.k)({}, u, e);
        "." === d.base && (d.base = Object(o.getScriptPath)("jwplayer.js")), d.base = (d.base || Object(o.loadFrom)()).replace(/\/?$/, "/"), ee.p = d.base, d.width = Object(ne.b)(d.width), d.height = Object(ne.b)(d.height), d.aspectratio = Object(ne.a)(d.aspectratio, d.width), d.volume = Object(ae.A)(d.volume) ? Math.min(Math.max(0, d.volume), 100) : u.volume, d.mute = !!d.mute, d.language = r, d.intl = l;
        var p = e.autoPause;
        p && (d.autoPause.viewability = !("viewability" in p) || !!p.viewability);
        var h = d.playbackRateControls;
        if (h) {
            var g = d.playbackRates;
            Array.isArray(h) && (g = h), 0 > (g = g.filter(function (e) {
                return Object(ae.w)(e) && .25 <= e && 4 >= e
            }).map(function (e) {
                return Math.round(100 * e) / 100
            })).indexOf(1) && g.push(1), g.sort(), d.playbackRateControls = !0, d.playbackRates = g
        }
        (!d.playbackRateControls || 0 > d.playbackRates.indexOf(d.defaultPlaybackRate)) && (d.defaultPlaybackRate = 1), d.playbackRate = d.defaultPlaybackRate, d.aspectratio || delete d.aspectratio;
        var f = d.playlist;
        if (f) Array.isArray(f.playlist) && (d.feedData = f, d.playlist = f.playlist); else {
            var m = Object(ae.E)(d, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration"]);
            d.playlist = [m]
        }
        d.qualityLabels = d.qualityLabels || d.hlslabels, delete d.duration;
        var y = d.liveTimeout;
        null !== y && (Object(ae.A)(y) ? 0 !== y && (y = Math.max(30, y)) : y = null, d.liveTimeout = y);
        var v, x, P = parseFloat(d.bandwidthEstimate), k = parseFloat(d.bitrateSelection);
        return d.bandwidthEstimate = Object(ae.A)(P) ? P : (v = d.defaultBandwidthEstimate, x = parseFloat(v), Object(ae.A)(x) ? Math.max(x, 1) : u.bandwidthEstimate), d.bitrateSelection = Object(ae.A)(k) ? k : u.bitrateSelection, d.backgroundLoading = Object(ae.s)(d.backgroundLoading) ? d.backgroundLoading : a.Features.backgroundLoading, d
    }, d = ee(8), p = ee(26), re = ee(23), h = "__CONTEXTUAL__", l = ee(66), g = ee.n(l), m = function (r, t) {
        var y, v = f(r, t), k = v.key || window.jwplayer && window.jwplayer.key, a = new p.b(k), c = a.edition();
        if ("free" === a.edition() && (v = Object(ae.k)({
            skin: {
                active: "#ff0046",
                controlbar: {iconsActive: "#f00", icons: "#fff"},
                timeslider: {progress: "#f00"},
                menus: {textActive: "#f00"}
            }, logo: {position: "control-bar", file: g.a}
        }, u, Object(ae.E)(v, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "width"]))), v.key = k, v.edition = c, v.error = a.error(), v.generateSEOMetadata = v.generateSEOMetadata || !1, "unlimited" === c) {
            var s = Object(o.getScriptPath)("jwplayer.js");
            if (!s) throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
            ee.p = s
        }
        if (v.flashplayer = function (a) {
            var t = a.flashplayer;
            return t || (t = (Object(o.getScriptPath)("jwplayer.js") || a.base) + "jwplayer.flash.swf"), "http:" === window.location.protocol && (t = t.replace(/^https/, "http")), t
        }(v), v.plugins = function (r) {
            var t = Object(ae.k)({}, r.plugins), e = Object(re.a)(r.edition);
            if (e("ads")) {
                var n = Object(ae.k)({}, r.advertising), i = n.client;
                if (i) {
                    var o = b(i) || i;
                    t[o] = n, delete n.client
                }
            }
            if (e("jwpsrv")) {
                var u = r.analytics;
                u !== Object(u) && (u = {}), w(t, u, "jwpsrv")
            }
            w(t, r.ga, "gapro");
            var g = r.related, c = !e("discovery") || g !== Object(g), s = !g || "none" !== g.displayMode, l = g || {},
                m = void 0 === l.oncomplete ? "none" : l.oncomplete, f = l.autoplaytimer;
            !1 === m || r.repeat ? m = "hide" : "none" === m && (f = 0);
            var y = "autoplay" === m && 0 >= f || "none" === m;
            return r.related = Object(ae.k)({}, g, {
                disableRelated: c,
                showButton: s,
                oncomplete: m,
                autoplaytimer: f,
                shouldAutoAdvance: y
            }), t
        }(v), v.ab && (v.ab = function (a) {
            var t = a.ab;
            return t.clone && (t = t.clone()), Object.keys(t.tests).forEach(function (e) {
                t.tests[e].forEach(function (t) {
                    t.addConfig && t.addConfig(a, t.selection)
                })
            }), t
        }(v)), y = v.playlist, Object(ae.y)(y) && -1 < y.indexOf(h) && (v.playlist = function (a, t) {
            var e = (a.querySelector("title") || {}).textContent, n = te(a, "meta[property=\"og:title\"]"),
                r = encodeURIComponent(n || e || ""),
                s = te(a, "meta[property=\"og:description\"]") || te(a, "meta[name=\"description\"]");
            return s && (r += "&page_description=" + encodeURIComponent(s)), t.replace(h, r)
        }(document, v.playlist), v.contextual = !0), Object(d.isFileProtocol)()) {
            var l = v, m = l.playlist, C = l.related;
            e(m) && (v.playlist = n(m)), C && e(C.file) && (C.file = n(C.file))
        }
        return v
    }, y = ee(10), v = ee(25), C = ee(3), x = ee(59), P = ee(30), E = ee(24), S = ee(1), T = ee(36), _ = function (a) {
        var t = a.get("skin") ? a.get("skin").url : void 0;
        return "string" != typeof t || function (a) {
            for (var t = document.styleSheets, e = 0, i = t.length; e < i; e++) if (t[e].href === a) return !0;
            return !1
        }(t) ? Promise.resolve() : new E.a(t, !0).load().catch(function (e) {
            return e
        })
    }, A = function (a) {
        var t = a.attributes, e = t.language, n = t.base, r = t.setupConfig, i = t.intl, o = Object(s.c)(r, i, e);
        return !Object(s.h)(e) || Object(s.f)(o) ? Promise.resolve() : new Promise(function (l) {
            return Object(s.i)(n, e).then(function (e) {
                var n = e.response;
                if (!O(a)) {
                    if (!n) throw new S.s(null, S.g);
                    t.localization = Object(s.a)(n, o), l()
                }
            }).catch(function (e) {
                l(e.code === S.g ? e : Object(S.z)(e, S.f))
            })
        })
    }, L = function (a) {
        var o;
        this.start = function (e) {
            var n = Object(v.a)(a, e), s = Promise.all([Object(y.d)(a), n, I(a), F(a), _(a), A(a)]),
                t = new Promise(function (e, t) {
                    o = setTimeout(function () {
                        t(new S.s(S.m, S.x))
                    }, 6e4);
                    var a = function () {
                        clearTimeout(o), setTimeout(e, 6e4)
                    };
                    s.then(a).catch(a)
                });
            return Promise.race([s, t]).catch(function (a) {
                var t = function () {
                    throw a
                };
                return n.then(t).catch(t)
            }).then(function (e) {
                return function (a) {
                    if (!a || !a.length) return {core: null, warnings: []};
                    var t = a.reduce(function (a, t) {
                        return a.concat(t)
                    }, []).filter(function (e) {
                        return e && e.code
                    });
                    return {core: a[0], warnings: t}
                }(e)
            })
        }, this.destroy = function () {
            clearTimeout(o), a.set("_destroyed", !0), a = null
        }
    }, q = ee(42), z = ee(32), V = ee(16), H = {
        removeItem: function () {
        }
    };
    try {
        H = window.localStorage || H
    } catch (e) {
    }
    Object(ae.k)(M.prototype, {
        getAllItems: function () {
            var a = this;
            return this.items.reduce(function (t, e) {
                var n = H["".concat(a.namespace, ".").concat(e)];
                return n && (t[e] = Object(i.serialize)(n)), t
            }, {})
        }, track: function (a) {
            var t = this;
            this.items.forEach(function (e) {
                a.on("change:".concat(e), function (a, n) {
                    try {
                        H["".concat(t.namespace, ".").concat(e)] = n
                    } catch (e) {
                        V.a.debug && console.error(e)
                    }
                })
            })
        }, clear: function () {
            var a = this;
            this.items.forEach(function (t) {
                H.removeItem("".concat(a.namespace, ".").concat(t))
            })
        }
    });
    var Q = ee(54), W = ee(50), K = ee(9), Z = ee(43), J = ee(60), G = ee(61), $ = ee(35);
    ee(67), ee(68), ee.d(t, "b", function () {
        return U
    });
    var ie = function (e) {
        this._events = {}, this.modelShim = new Q.a, this.modelShim._qoeItem = new z.a, this.mediaShim = {}, this.setup = new L(this.modelShim), this.currentContainer = this.originalContainer = e, this.apiQueue = new r.a(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "setPlaylistItem", "resize", "setCaptions", "setControls"], function () {
            return !0
        })
    };
    Object(ae.k)(ie.prototype, {
        on: K.a.on, once: K.a.once, off: K.a.off, trigger: K.a.trigger, init: function (a, r) {
            var e = this, n = this.modelShim,
                i = new M("jwplayer", ["volume", "mute", "captionLabel", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"]),
                t = i && i.getAllItems();
            n.attributes = n.attributes || {}, Object(ae.k)(this.mediaShim, W.a);
            var o = m(Object(ae.k)({}, a), t);
            o.id = r.id, o.setupConfig = a, Object(ae.k)(n.attributes, o, W.b), n.getProviders = function () {
                return new q.a(o)
            }, n.setProvider = function () {
            };
            var d = Object(J.b)();
            n.get("backgroundLoading") || (d = Object(G.a)(d.getPrimedElement(), d));
            var c = new $.a(Object($.b)(this.originalContainer)).once("gesture", function () {
                d.prime(), e.preload(), c.destroy()
            });
            return n.on("change:errorEvent", R), this.setup.start(r).then(function (o) {
                var t = o.core;
                if (!t) throw Object(S.z)(null, S.w);
                if (e.setup) {
                    e.on(C.ub, B), o.warnings.forEach(function (a) {
                        e.trigger(C.ub, a)
                    });
                    var s = e.modelShim.clone();
                    if (s.error) throw s.error;
                    var a = e.apiQueue.queue.slice(0);
                    e.apiQueue.destroy(), Object(ae.k)(e, t.prototype), e.setup(s, r, e.originalContainer, e._events, a, d);
                    var c = e._model;
                    return n.off("change:errorEvent", R), c.on("change:errorEvent", R), i.track(c), e.updatePlaylist(c.get("playlist"), c.get("feedData")).catch(function (e) {
                        throw Object(S.z)(e, S.u)
                    })
                }
            }).then(function () {
                e.setup && e.playerReady()
            }).catch(function (a) {
                e.setup && function (a, t, e) {
                    Promise.resolve().then(function () {
                        var n = Object(S.A)(S.r, S.y, e), r = a._model || a.modelShim;
                        n.message = n.message || r.get("localization").errors[n.key], delete n.key;
                        var i = r.get("contextual");
                        if (!i) {
                            var o = Object(Z.a)(a, n);
                            Z.a.cloneIcon && o.querySelector(".jw-icon").appendChild(Z.a.cloneIcon("error")), U(a, o)
                        }
                        r.set("errorEvent", n), r.set("state", C.mb), a.trigger(C.jb, n), i && t.remove()
                    })
                }(e, r, a)
            })
        }, playerDestroy: function () {
            this.apiQueue && this.apiQueue.destroy(), this.setup && this.setup.destroy(), this.currentContainer !== this.originalContainer && U(this, this.originalContainer), this.off(), this._events = this._model = this.modelShim = this.apiQueue = this.setup = null
        }, getContainer: function () {
            return this.currentContainer
        }, get: function (e) {
            if (this.modelShim) return e in this.mediaShim ? this.mediaShim[e] : this.modelShim.get(e)
        }, getItemQoe: function () {
            return this.modelShim._qoeItem
        }, getConfig: function () {
            return Object(ae.k)({}, this.modelShim.attributes, this.mediaShim)
        }, getCurrentCaptions: function () {
            return this.get("captionsIndex")
        }, getWidth: function () {
            return this.get("containerWidth")
        }, getHeight: function () {
            return this.get("containerHeight")
        }, getMute: function () {
            return this.get("mute")
        }, getProvider: function () {
            return this.get("provider")
        }, getState: function () {
            return this.get("state")
        }, getAudioTracks: function () {
            return null
        }, getCaptionsList: function () {
            return null
        }, getQualityLevels: function () {
            return null
        }, getVisualQuality: function () {
            return null
        }, getCurrentQuality: function () {
            return -1
        }, getCurrentAudioTrack: function () {
            return -1
        }, getSafeRegion: function () {
            return {x: 0, y: 0, width: 0, height: 0}
        }, isBeforeComplete: function () {
            return !1
        }, isBeforePlay: function () {
            return !1
        }, createInstream: function () {
            return null
        }, skipAd: function () {
        }, attachMedia: function () {
        }, detachMedia: function () {
        }
    }), t.a = ie
}, function (a, t, e) {
    "use strict";

    function n(e) {
        return "hls" === e.type && i.OS.android ? !1 !== e.androidhls && !i.Browser.firefox && 4.4 <= parseFloat(i.OS.version.version) : null
    }

    e.d(t, "a", function () {
        return n
    });
    var i = e(5)
}, function (e) {
    e.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 150 29.3\" class=\"jw-svg-icon jw-svg-icon-watermark\" focusable=\"false\"><path d=\"M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z\"></path><polygon points=\"58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61\"></polygon><path d=\"M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z\"></path><path d=\"M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z\"></path><polygon points=\"113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18\"></polygon><polygon points=\"123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29\"></polygon><path d=\"M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z\"></path><path d=\"M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z\"></path></svg>"
}, function (y, t, e) {
    "use strict";

    function k(a, t) {
        for (var e, i = t.length; i--;) if (e = t[i], a.target === e.getContainer()) {
            e.setIntersection(a);
            break
        }
    }

    function n() {
        u.forEach(function (a) {
            var t = a.model;
            if (!(t.get("audioMode") || !t.get("controls") || .75 > t.get("visibility"))) {
                var e = t.get("state"), n = Object(o.f)();
                !n && "paused" === e && a.api.getFullscreen() ? a.api.setFullscreen(!1) : "playing" === e && a.api.setFullscreen(n)
            }
        })
    }

    function h() {
        u.forEach(function (e) {
            e.model.set("activeTab", Object(v.a)())
        })
    }

    function g(a, t) {
        var e = t.indexOf(a);
        -1 !== e && t.splice(e, 1)
    }

    function b(a) {
        c.forEach(function (t) {
            t(a)
        })
    }

    var m, v = e(62), i = e(5), o = e(6), u = [], a = [], c = [], s = {},
        l = "screen" in window && "orientation" in window.screen, f = i.OS.android && i.Browser.chrome, d = !1;
    document.addEventListener("visibilitychange", h), document.addEventListener("webkitvisibilitychange", h), f && l && window.screen.orientation.addEventListener("change", n), window.addEventListener("beforeunload", function () {
        document.removeEventListener("visibilitychange", h), document.removeEventListener("webkitvisibilitychange", h), window.removeEventListener("scroll", b), f && l && window.screen.orientation.removeEventListener("change", n)
    }), t.a = {
        add: function (e) {
            u.push(e)
        }, remove: function (e) {
            g(e, u)
        }, addScrollHandler: function (e) {
            d || (d = !0, window.addEventListener("scroll", b)), c.push(e)
        }, removeScrollHandler: function (a) {
            var t = c.indexOf(a);
            -1 !== t && c.splice(t, 1)
        }, addWidget: function (e) {
            a.push(e)
        }, removeWidget: function (e) {
            g(e, a)
        }, size: function () {
            return u.length
        }, observe: function (n) {
            var t;
            t = window.IntersectionObserver, m || (m = new t(function (r) {
                if (r && r.length) for (var t, i = r.length; i--;) t = r[i], k(t, u), k(t, a)
            }, {threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]})), s[n.id] || (s[n.id] = !0, m.observe(n))
        }, unobserve: function (e) {
            m && s[e.id] && (delete s[e.id], m.unobserve(e))
        }
    }
}, function (d, t, e) {
    "use strict";

    function p(a, t) {
        for (var e, i = 0; i < t.length; i++) e = t[i], e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, e.key, e)
    }

    function g() {
        Object(a.a)(n), n = Object(a.b)(function () {
            u.forEach(function (a) {
                a.view.updateBounds();
                var t = a.view.model.get("containerWidth");
                a.resized = a.width !== t, a.width = t
            }), u.forEach(function (e) {
                e.contractElement.scrollLeft = 2 * e.width
            }), u.forEach(function (e) {
                Object(o.d)(e.expandChild, {width: e.width + 1}), e.resized && e.view.model.get("visibility") && e.view.updateStyles()
            }), u.forEach(function (e) {
                e.expandElement.scrollLeft = e.width + 1
            }), u.forEach(function (e) {
                e.resized && e.view.checkResized()
            })
        })
    }

    e.d(t, "a", function () {
        return i
    });
    var l = e(0), a = e(49), r = e(6), o = e(11), u = [], n = -1, i = function () {
        function c(t, e, n) {
            !function (a, t) {
                if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, c);
            var i = {display: "block", position: "absolute", top: 0, left: 0}, a = {width: "100%", height: "100%"},
                s = Object(r.e)("<div style=\"opacity:0;visibility:hidden;overflow:hidden;\"><div><div style=\"height:1px;\"></div></div><div class=\"jw-contract-trigger\"></div></div>"),
                m = s.firstChild, d = m.firstChild, p = m.nextSibling;
            Object(o.d)([m, p], Object(l.k)({overflow: "auto"}, i, a)), Object(o.d)(s, Object(l.k)({}, i, a)), this.expandElement = m, this.expandChild = d, this.contractElement = p, this.hiddenElement = s, this.element = t, this.view = e, this.model = n, this.width = 0, this.resized = !1, t.firstChild ? t.insertBefore(s, t.firstChild) : t.appendChild(s), t.addEventListener("scroll", g, !0), u.push(this), g()
        }

        var t, a, s;
        return t = c, (a = [{
            key: "destroy", value: function () {
                if (this.view) {
                    var e = u.indexOf(this);
                    -1 !== e && u.splice(e, 1), this.element.removeEventListener("scroll", g, !0), this.element.removeChild(this.hiddenElement), this.view = this.model = null
                }
            }
        }]) && p(t.prototype, a), s && p(t, s), c
    }()
}, function (p, t, e) {
    "use strict";

    function ee() {
    }

    function o(e) {
        if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(e, this)
    }

    function u(i, s) {
        for (; 3 === i._state;) i = i._value;
        0 === i._state ? i._deferreds.push(s) : (i._handled = !0, o._immediateFn(function () {
            var e = 1 === i._state ? s.onFulfilled : s.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(i._value)
                } catch (e) {
                    return void c(s.promise, e)
                }
                a(s.promise, t)
            } else (1 === i._state ? a : c)(s.promise, i._value)
        }))
    }

    function a(a, t) {
        try {
            if (t === a) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var e = t.then;
                if (t instanceof o) return a._state = 3, a._value = t, void s(a);
                if ("function" == typeof e) return void f((n = e, l = t, function () {
                    n.apply(l, arguments)
                }), a)
            }
            a._state = 1, a._value = t, s(a)
        } catch (t) {
            c(a, t)
        }
        var n, l
    }

    function c(a, t) {
        a._state = 2, a._value = t, s(a)
    }

    function s(a) {
        2 === a._state && 0 === a._deferreds.length && o._immediateFn(function () {
            a._handled || o._unhandledRejectionFn(a._value)
        });
        for (var t = 0, r = a._deferreds.length; t < r; t++) u(a, a._deferreds[t]);
        a._deferreds = null
    }

    function l(a, t, e) {
        this.onFulfilled = "function" == typeof a ? a : null, this.onRejected = "function" == typeof t ? t : null, this.promise = e
    }

    function f(r, i) {
        var e = !1;
        try {
            r(function (n) {
                e || (e = !0, a(i, n))
            }, function (a) {
                e || (e = !0, c(i, a))
            })
        } catch (a) {
            if (e) return;
            e = !0, c(i, a)
        }
    }

    function n(a, t) {
        this.name = a, this.message = t.message || t.toString(), this.error = t
    }

    function d(a, t) {
        var e = new k.a(t);
        return e.on(C.hb, function (t) {
            a._qoe.tick("ready"), t.setupTime = a._qoe.between("setup", "ready")
        }), e.on("all", function (t, e) {
            a.trigger(t, e)
        }), e
    }

    function _(a, t) {
        var e = a.plugins;
        Object.keys(e).forEach(function (a) {
            delete e[a]
        }), t.get("setupConfig") && a.trigger("remove"), a.off(), t.playerDestroy(), t.getContainer().removeAttribute("data-jwplayer-id")
    }

    function z(a) {
        var t = ++B, e = a.id || "player-".concat(t), n = new P.a, r = {}, o = d(this, a);
        n.tick("init"), a.setAttribute("data-jwplayer-id", e), Object.defineProperties(this, {
            id: {
                enumerable: !0,
                get: function () {
                    return e
                }
            }, uniqueId: {
                enumerable: !0, get: function () {
                    return t
                }
            }, plugins: {
                enumerable: !0, get: function () {
                    return r
                }
            }, _qoe: {
                enumerable: !0, get: function () {
                    return n
                }
            }, version: {
                enumerable: !0, get: function () {
                    return w.a
                }
            }, Events: {
                enumerable: !0, get: function () {
                    return x.a
                }
            }, utils: {
                enumerable: !0, get: function () {
                    return R
                }
            }, _: {
                enumerable: !0, get: function () {
                    return oe.g
                }
            }
        }), Object(oe.k)(this, {
            _events: {}, setup: function (t) {
                return n.clear("ready"), n.tick("setup"), _(this, o), (o = d(this, a)).init(t, this), this.on(t.events, null, this)
            }, remove: function () {
                return function (a) {
                    for (var t = h.a.length; t--;) if (h.a[t].uniqueId === a.uniqueId) {
                        h.a.splice(t, 1);
                        break
                    }
                }(this), _(this, o), this
            }, qoe: function () {
                var e = o.getItemQoe();
                return {
                    setupTime: this._qoe.between("setup", "ready"),
                    firstFrame: e.getFirstFrame ? e.getFirstFrame() : null,
                    player: this._qoe.dump(),
                    item: e.dump()
                }
            }, addCues: function (e) {
                return Array.isArray(e) && o.addCues(e), this
            }, getAudioTracks: function () {
                return o.getAudioTracks()
            }, getBuffer: function () {
                return o.get("buffer")
            }, getCaptions: function () {
                return o.get("captions")
            }, getCaptionsList: function () {
                return o.getCaptionsList()
            }, getConfig: function () {
                return o.getConfig()
            }, getContainer: function () {
                return o.getContainer()
            }, getControls: function () {
                return o.get("controls")
            }, getCues: function () {
                return o.get("cues")
            }, getCurrentAudioTrack: function () {
                return o.getCurrentAudioTrack()
            }, getCurrentCaptions: function () {
                return o.getCurrentCaptions()
            }, getCurrentQuality: function () {
                return o.getCurrentQuality()
            }, getCurrentTime: function () {
                return o.get("currentTime")
            }, getDuration: function () {
                return o.get("duration")
            }, getEnvironment: function () {
                return O
            }, getFullscreen: function () {
                return o.get("fullscreen")
            }, getHeight: function () {
                return o.getHeight()
            }, getItemMeta: function () {
                return o.get("itemMeta") || {}
            }, getMute: function () {
                return o.getMute()
            }, getPlaybackRate: function () {
                return o.get("playbackRate")
            }, getPlaylist: function () {
                return o.get("playlist")
            }, getPlaylistIndex: function () {
                return o.get("item")
            }, getPlaylistItem: function (a) {
                if (!R.exists(a)) return o.get("playlistItem");
                var t = this.getPlaylist();
                return t ? t[a] : null
            }, getPosition: function () {
                return o.get("position")
            }, getProvider: function () {
                return o.getProvider()
            }, getQualityLevels: function () {
                return o.getQualityLevels()
            }, getSafeRegion: function () {
                var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                return o.getSafeRegion(e)
            }, getState: function () {
                return o.getState()
            }, getStretching: function () {
                return o.get("stretching")
            }, getViewable: function () {
                return o.get("viewable")
            }, getVisualQuality: function () {
                return o.getVisualQuality()
            }, getVolume: function () {
                return o.get("volume")
            }, getWidth: function () {
                return o.getWidth()
            }, setCaptions: function (e) {
                return o.setCaptions(e), this
            }, setConfig: function (e) {
                return o.setConfig(e), this
            }, setControls: function (e) {
                return o.setControls(e), this
            }, setCurrentAudioTrack: function (e) {
                o.setCurrentAudioTrack(e)
            }, setCurrentCaptions: function (e) {
                o.setCurrentCaptions(e)
            }, setCurrentQuality: function (e) {
                o.setCurrentQuality(e)
            }, setFullscreen: function (e) {
                return o.setFullscreen(e), this
            }, setMute: function (e) {
                return o.setMute(e), this
            }, setPlaybackRate: function (e) {
                return o.setPlaybackRate(e), this
            }, setPlaylistItem: function (a, t) {
                return o.setPlaylistItem(a, t), this
            }, setCues: function (e) {
                return Array.isArray(e) && o.setCues(e), this
            }, setVolume: function (e) {
                return o.setVolume(e), this
            }, load: function (a, t) {
                return o.load(a, t), this
            }, play: function (e) {
                return o.play(e), this
            }, pause: function (e) {
                return o.pause(e), this
            }, playToggle: function (e) {
                switch (this.getState()) {
                    case C.qb:
                    case C.kb:
                        return this.pause(e);
                    default:
                        return this.play(e)
                }
            }, seek: function (a, t) {
                return o.seek(a, t), this
            }, playlistItem: function (a, t) {
                return o.playlistItem(a, t), this
            }, playlistNext: function (e) {
                return o.playlistNext(e), this
            }, playlistPrev: function (e) {
                return o.playlistPrev(e), this
            }, next: function (e) {
                return o.next(e), this
            }, castToggle: function () {
                return o.castToggle(), this
            }, createInstream: function () {
                return o.createInstream()
            }, stop: function () {
                return o.stop(), this
            }, resize: function (a, t) {
                return o.resize(a, t), this
            }, addButton: function (a, t, e, n, r) {
                return o.addButton(a, t, e, n, r), this
            }, removeButton: function (e) {
                return o.removeButton(e), this
            }, attachMedia: function () {
                return o.attachMedia(), this
            }, detachMedia: function () {
                return o.detachMedia(), this
            }, isBeforeComplete: function () {
                return o.isBeforeComplete()
            }, isBeforePlay: function () {
                return o.isBeforePlay()
            }
        })
    }

    function V(a) {
        for (var t = 0; t < h.a.length; t++) if (h.a[t].id === a) return h.a[t];
        return null
    }

    function H(e) {
        Object.defineProperties(e, {
            api: {
                get: function () {
                    return y
                }, set: function () {
                }
            }, version: {
                get: function () {
                    return w.a
                }, set: function () {
                }
            }, debug: {
                get: function () {
                    return j.a.debug
                }, set: function (e) {
                    j.a.debug = !!e
                }
            }
        })
    }

    function X(a) {
        var t = {};
        W(this, a, a, t), W(this, a, z.prototype, t)
    }

    function W(a, t, e, n) {
        var r = Object.keys(e);
        r.forEach(function (i) {
            "function" == typeof e[i] && "Events" !== i ? a[i] = function a(t, e, n, r, i) {
                return function () {
                    var o = Array.prototype.slice.call(arguments), d = o[0],
                        p = e._trackCallQueue || (e._trackCallQueue = []), c = pe.test(n),
                        s = c && o[1] && o[1]._callback, l = i.edition || te(e, i, "edition");
                    if ("free" === l) {
                        if (-1 < ["addButton", "addCues", "detachMedia", "load", "next", "pause", "play", "playlistItem", "playlistNext", "playlistPrev", "playToggle", "resize", "seek", "setCaptions", "setConfig", "setControls", "setCues", "setFullscreen", "setMute", "setPlaybackRate", "setPlaylistItem", "setVolume", "stop"].indexOf(n)) return ae(n), t;
                        if (-1 < ["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"].indexOf(n)) return ae(n), null
                    }
                    if (s || p.push([n, d]), c) return ie(e, p), e[n].apply(t, o);
                    ne(n, o);
                    var u = e[n].apply(e, o);
                    return "remove" === n ? e.off.call(t) : "setup" == n && (e.off.call(t), e.off(d.events, null, e), e.on.call(t, d.events, null, t), e.on("all", function (n, o) {
                        if ("ready" === n) {
                            var l = Object.keys(e).filter(function (a) {
                                return "_" !== a[0] && -1 === r.indexOf(a) && "function" == typeof e[a]
                            }), d = r.concat(l);
                            l.forEach(function (n) {
                                t[n] = a(t, e, n, d, i)
                            })
                        }
                        e.trigger.call(t, n, o), ie(e, p)
                    })), ie(e, p), u === e ? t : u
                }
            }(a, t, i, r, n) : "_events" === i ? a._events = {} : Object.defineProperty(a, i, {
                enumerable: !0,
                get: function () {
                    return e[i]
                }
            })
        })
    }

    function te(a, t, e) {
        var n = a.getConfig()[e];
        return t[e] = n, n
    }

    function ae(e) {
        console.warn("The API method jwplayer().".concat(e, "() is disabled in the free edition of JW Player."))
    }

    function ne(a, t) {
        var e = {reason: Object(ce.a)() ? "interaction" : "external"};
        "play" === a || "pause" === a || "playToggle" === a || "playlistNext" === a || "playlistPrev" === a || "next" === a ? t[0] = e : "seek" === a || "playlistItem" === a ? t[1] = e : void 0
    }

    function re(a, t, e) {
        try {
            var n = function (a, t) {
                return "setup" === a ? !!t : "getSafeRegion" === a || "pauseAd" === a || "setControls" === a || "setFullscreen" === a || "setMute" === a ? !!t === t ? t : void 0 : "setPlaylistItem" === a || "getPlaylistItem" === a ? (0 | t) === t ? t : void 0 : "setPlaybackRate" === a || "setVolume" === a ? +t : "setConfig" === a ? Object.keys(Object(t)).join(",") : "on" === a || "once" === a || "off" === a || "trigger" === a || "getPlugin" === a || "addPlugin" === a || "registerPlugin" === a ? "" + t : null
            }(t, e);
            a.trackExternalAPIUsage(t, n)
        } catch (e) {
            j.a.debug && console.warn(e)
        }
    }

    function ie(a, t) {
        if (t.length) {
            var e = a.getPlugin("jwpsrv");
            e && e.trackExternalAPIUsage && (t.forEach(function (a) {
                re(e, a[0], a[1])
            }), t.length = 0)
        }
    }

    e.r(t);
    var oe = e(0), r = setTimeout;
    o.prototype.catch = function (e) {
        return this.then(null, e)
    }, o.prototype.then = function (a, t) {
        var e = new this.constructor(ee);
        return u(this, new l(a, t, e)), e
    }, o.prototype.finally = function (a) {
        var t = this.constructor;
        return this.then(function (e) {
            return t.resolve(a()).then(function () {
                return e
            })
        }, function (e) {
            return t.resolve(a()).then(function () {
                return t.reject(e)
            })
        })
    }, o.all = function (a) {
        return new o(function (s, e) {
            function n(i, t) {
                try {
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var l = t.then;
                        if ("function" == typeof l) return void l.call(t, function (t) {
                            n(i, t)
                        }, e)
                    }
                    o[i] = t, 0 == --r && s(o)
                } catch (a) {
                    e(a)
                }
            }

            if (!a || void 0 === a.length) throw new TypeError("Promise.all accepts an array");
            var o = Array.prototype.slice.call(a);
            if (0 === o.length) return s([]);
            for (var r = o.length, t = 0; t < o.length; t++) n(t, o[t])
        })
    }, o.resolve = function (a) {
        return a && "object" == typeof a && a.constructor === o ? a : new o(function (t) {
            t(a)
        })
    }, o.reject = function (a) {
        return new o(function (t, e) {
            e(a)
        })
    }, o.race = function (a) {
        return new o(function (t, e) {
            for (var n = 0, o = a.length; n < o; n++) a[n].then(t, e)
        })
    }, o._immediateFn = "function" == typeof setImmediate && function (e) {
        setImmediate(e)
    } || function (e) {
        r(e, 0)
    }, o._unhandledRejectionFn = function (e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    window.Promise || (window.Promise = o);
    var i = e(20), h = e(15), v = e(17), g = e(13), b = {availableProviders: v.a, registerProvider: g.a}, m = e(25);
    b.registerPlugin = function (a, t, e) {
        "jwpsrv" !== a && Object(m.b)(a, t, e)
    };
    var y = b, w = e(31), j = e(16), O = e(5), k = e(64), C = e(3), P = e(32), x = e(9), S = e(8), E = e(12), T = e(2),
        A = e(7), F = e(6), M = e(11), I = e(28), L = e(52), N = e(47), D = e(53), R = Object(oe.k)({}, E, S, i, {
            addClass: F.a,
            hasClass: F.i,
            removeClass: F.o,
            replaceClass: F.p,
            toggleClass: F.v,
            classList: F.d,
            styleDimension: F.u,
            createElement: F.e,
            emptyElement: F.h,
            addStyleSheet: F.b,
            bounds: F.c,
            openLink: F.l,
            replaceInnerHtml: F.q,
            css: M.b,
            clearCss: M.a,
            style: M.d,
            transform: M.e,
            getRgba: M.c,
            ajax: I.a,
            crossdomain: function (a) {
                var t = document.createElement("a"), e = document.createElement("a");
                t.href = location.href;
                try {
                    return e.href = a, e.href = e.href, t.protocol + "//" + t.host != e.protocol + "//" + e.host
                } catch (e) {
                }
                return !0
            },
            tryCatch: function (a, t) {
                var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
                if (j.a.debug) return a.apply(t || this, e);
                try {
                    return a.apply(t || this, e)
                } catch (t) {
                    return new n(a.name, t)
                }
            },
            Error: n,
            Timer: P.a,
            log: N.a,
            genId: D.b,
            between: L.a,
            foreach: function (a, t) {
                for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && t(e, a[e])
            },
            flashVersion: A.a,
            isIframe: A.m,
            indexOf: oe.q,
            trim: T.i,
            pad: T.e,
            extension: T.a,
            hms: T.b,
            seconds: T.g,
            prefix: T.f,
            suffix: T.h,
            noop: function () {
            }
        }), B = 0;
    Object(oe.k)(z.prototype, {
        on: function (a, t, e) {
            return x.c.call(this, a, t, e)
        }, once: function (a, t, e) {
            return x.d.call(this, a, t, e)
        }, off: function (a, t, e) {
            return x.b.call(this, a, t, e)
        }, trigger: function (a, t) {
            return (t = oe.g.isObject(t) ? Object(oe.k)({}, t) : {}).type = a, j.a.debug ? x.e.call(this, a, t) : x.f.call(this, a, t)
        }, getPlugin: function (e) {
            return this.plugins[e]
        }, addPlugin: function (a, t) {
            this.plugins[a] = t, this.on("ready", t.addToPlayer), t.resize && this.on("resize", t.resizeHandler)
        }, registerPlugin: function (a, t, e) {
            Object(m.b)(a, t, e)
        }, getAdBlock: function () {
            return !1
        }, playAd: function () {
        }, pauseAd: function () {
        }, skipAd: function () {
        }
    }), e.p = Object(i.loadFrom)();
    var se = function (a) {
        var t, i;
        if (a ? "string" == typeof a ? (t = V(a)) || (i = document.getElementById(a)) : "number" == typeof a ? t = h.a[a] : a.nodeType && (t = V((i = a).id || i.getAttribute("data-jwplayer-id"))) : t = h.a[0], t) return t;
        if (i) {
            var o = new z(i);
            return h.a.push(o), o
        }
        return {registerPlugin: m.b}
    };
    H(se);
    var Q = se, U = e(35), Y = e(26), K = e(24), J = e(48), Z = e(46), $ = e(39), G = oe.g.extend, le = {};
    le._ = oe.g, le.utils = Object(oe.k)(R, {
        key: Y.b,
        extend: G,
        scriptloader: K.a,
        rssparser: {parse: Z.a},
        tea: J.a,
        UI: U.a
    }), le.utils.css.style = le.utils.style, le.vid = $.a;
    var de = le, ce = e(63), pe = /^(?:on(?:ce)?|off|trigger)$/, ue = window;
    Object(oe.k)(Q, de);
    var ge = function (a) {
        var t = Q(a);
        return t.uniqueId ? t._publicApi || (t._publicApi = new X(t)) : t
    };
    Object(oe.k)(ge, de), H(ge), "function" == typeof ue.define && ue.define.amd && ue.define([], function () {
        return ge
    });
    var me = ge;
    ue.jwplayer && (me = ue.jwplayer), t.default = me
}]).default;
window.jwplayer.key = 'kukmSGInuqM0shRLwJjVLWeWAxLakiKS90Fg2+vhQks=';
function tavoos_init_player(target_id, image = '', source, vast_url = ''){
    var base = document.getElementById('tavoos_jwplayer_main_script').getAttribute("data-TavoosFolder");
    window.jwplayer.base = base;
    var cssfile = "tavoos-player.css";
    loadcss(base + cssfile);
    if (target_id != '') {
        var tavoosplayer = jwplayer(target_id).setup({
            playbackRateControls: !0,
            timeSliderAbove: !0,
            width: '100%',
            mute: !1,
            autostart: ('1' === '1') ? !0 : !1,
            aspectratio: "16:9",
            "playlist": [{"image": image, "sources": source,}],
            skin: {
                active: '#ed145b',
                controlbar: {iconsActive: 'rgb(234, 30, 101)', icons: '#fff'},
                timeslider: {progress: 'rgb(234, 30, 101)', rail: '#ccc'},
            },
            advertising: {
                client: base.toString() + '/vast.js',
                tag: vast_url,
                admessage: 'اتمام نمایش تبلیغ تا xx ثانیه دیگر',
                cuetext: 'تبلیغ',
                skipmessage: 'xx ثانیه',
                skiptext: 'رد کردن تبلیغ',
                requestTimeout: 7000
            },
            "plugins": {
                'vastlink.js': {},
            }
        });
    }

}
