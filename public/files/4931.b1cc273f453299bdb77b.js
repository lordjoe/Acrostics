(self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || []).push([[4931], {
    9817: function (e, t) {
        "use strict";
        t.Z = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            const n = t.split(",").filter((e => !!e)) || [];
            return Object.entries(e).filter((e => {
                let [t] = e;
                return /dfp/.test(t.toLowerCase())
            })).reduce(((e, t) => {
                let [r, o] = t;
                const i = "".concat(r, "_").concat(o).toLowerCase();
                return n.includes(i) ? e : e.concat(i)
            }), []).concat(n).join("&")
        }
    }, 4194: function (e, t) {
        "use strict";
        const n = (() => {
            const e = Math.ceil(Math.random() * Math.floor(4));
            return "".concat(e)
        })();
        t.Z = n
    }, 2058: function (e, t) {
        "use strict";
        const n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
            const t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }));
        t.Z = {
            get current() {
                return window.nyt_et && window.nyt_et.get_pageview_id ? window.nyt_et.get_pageview_id() : n
            }
        }
    }, 7226: function (e, t, n) {
        "use strict";
        n.d(t, {
            d: function () {
                return i
            }
        });
        var r = n(5489), o = n(8087);
        const i = (c = "hub", function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (o.w_.includes(e)) return (0, r.ob)({name: c, label: "daily-archive", context: t});
            switch (e) {
                case o.SK:
                    return (0, r.ob)({name: c, label: "daily-page", context: t});
                case o.jM:
                    return (0, r.ob)({name: c, label: "mini-page", context: t});
                case o.pi:
                    return (0, r.ob)({name: c, label: "wordplay", context: t});
                case o.v9:
                    return (0, r.ob)({name: c, label: "spelling-bee", context: t});
                case o.l7:
                    return (0, r.ob)({name: c, label: "wordle", context: t});
                case o.sU:
                    return (0, r.ob)({name: c, label: "letter-boxed", context: t});
                case o.B8:
                    return (0, r.ob)({name: c, label: "tiles", context: t});
                case o.K4:
                    return (0, r.ob)({name: c, label: "sudoku", context: t});
                case o.TW:
                    return (0, r.ob)({name: c, label: "vertex", context: t});
                case o.El:
                    return (0, r.ob)({name: c, label: "nav-all-games", context: t});
                case o.Nj:
                    return (0, r.ob)({name: c, label: "stats", context: t});
                case o.k2:
                    return (0, r.ob)({name: c, label: "daily-archive", context: t});
                case o.Wz:
                    return (0, r.ob)({name: c, label: "download-app", context: t});
                case o.yw:
                    return (0, r.ob)({name: c, label: "monthly-bonus", context: t});
                case o.$f:
                    return (0, r.ob)({name: c, label: "variety-puzzles", context: t});
                case o.MQ:
                case o.W9:
                    return (0, r.ob)({name: c, label: "featured-article", context: t});
                default:
                    return null
            }
        });
        var c
    }, 7283: function (e, t, n) {
        !function (e) {
            "use strict";

            function t(e) {
                if (o[e]) return o[e].exports;
                var n = o[e] = {i: e, l: !1, exports: {}};
                return r[e].call(n.exports, n, n.exports, t), n.l = !0, n.exports
            }

            var r, o;
            r = [function (e, t, n) {
                n(1), e.exports = n(58)
            }, function (e, t, n) {
                var r = n(2), o = n(25), i = n(53), c = n(6), a = n(17), u = n(54), s = n(56);
                n = n(36), r({
                    target: "Promise", proto: !0, real: !0, forced: !!i && c((function () {
                        i.prototype.finally.call({
                            then: function () {
                            }
                        }, (function () {
                        }))
                    }))
                }, {
                    finally: function (e) {
                        var t = u(this, a("Promise")), n = "function" == typeof e;
                        return this.then(n ? function (n) {
                            return s(t, e()).then((function () {
                                return n
                            }))
                        } : e, n ? function (n) {
                            return s(t, e()).then((function () {
                                throw n
                            }))
                        } : e)
                    }
                }), o || "function" != typeof i || (o = a("Promise").prototype.finally, i.prototype.finally !== o && n(i.prototype, "finally", o, {unsafe: !0}))
            }, function (t, n, r) {
                var o = r(3), i = r(4).f, c = r(33), a = r(36), u = r(27), s = r(42), f = r(52);
                t.exports = function (t, n) {
                    var r, l, p, d = t.target, g = t.global, v = t.stat,
                        b = g ? o : v ? o[d] || u(d, {}) : (o[d] || {}).prototype;
                    if (b) for (r in n) {
                        if (l = n[r], p = t.noTargetGet ? (p = i(b, r)) && p.value : b[r], !f(g ? r : d + (v ? "." : "#") + r, t.forced) && p !== e) {
                            if (typeof l == typeof p) continue;
                            s(l, p)
                        }
                        (t.sham || p && p.sham) && c(l, "sham", !0), a(b, r, l, t)
                    }
                }
            }, function (e, t) {
                function r(e) {
                    return e && e.Math == Math && e
                }

                e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function () {
                    return this
                }() || Function("return this")()
            }, function (e, t, n) {
                var r = n(5), o = n(7), i = n(8), c = n(9), a = n(13), u = n(28), s = n(31),
                    f = Object.getOwnPropertyDescriptor;
                t.f = r ? f : function (e, t) {
                    if (e = c(e), t = a(t), s) try {
                        return f(e, t)
                    } catch (e) {
                    }
                    if (u(e, t)) return i(!o.f.call(e, t), e[t])
                }
            }, function (e, t, n) {
                n = n(6), e.exports = !n((function () {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function () {
                            return 7
                        }
                    })[1]
                }))
            }, function (e, t) {
                e.exports = function (e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            }, function (e, t, n) {
                var r = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !r.call({1: 2}, 1);
                t.f = i ? function (e) {
                    return !!(e = o(this, e)) && e.enumerable
                } : r
            }, function (e, t) {
                e.exports = function (e, t) {
                    return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
                }
            }, function (e, t, n) {
                var r = n(10), o = n(12);
                e.exports = function (e) {
                    return r(o(e))
                }
            }, function (e, t, n) {
                var r = n(6), o = n(11), i = "".split;
                e.exports = r((function () {
                    return !Object("z").propertyIsEnumerable(0)
                })) ? function (e) {
                    return "String" == o(e) ? i.call(e, "") : Object(e)
                } : Object
            }, function (e, t) {
                var n = {}.toString;
                e.exports = function (e) {
                    return n.call(e).slice(8, -1)
                }
            }, function (t, n) {
                t.exports = function (t) {
                    if (t == e) throw TypeError("Can't call method on " + t);
                    return t
                }
            }, function (e, t, n) {
                var r = n(14), o = n(16);
                e.exports = function (e) {
                    return e = r(e, "string"), o(e) ? e : String(e)
                }
            }, function (t, n, r) {
                var o = r(15), i = r(16), c = r(22), a = r(23)("toPrimitive");
                t.exports = function (t, n) {
                    if (!o(t) || i(t)) return t;
                    var r = t[a];
                    if (r === e) return c(t, n = n === e ? "number" : n);
                    if (n = r.call(t, n = n === e ? "default" : n), !o(n) || i(n)) return n;
                    throw TypeError("Can't convert object to primitive value")
                }
            }, function (e, t) {
                e.exports = function (e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }
            }, function (e, t, n) {
                var r = n(17);
                n = n(18), e.exports = n ? function (e) {
                    return "symbol" == typeof e
                } : function (e) {
                    var t = r("Symbol");
                    return "function" == typeof t && Object(e) instanceof t
                }
            }, function (t, n, r) {
                var o = r(3);
                t.exports = function (t, n) {
                    return arguments.length < 2 ? "function" == typeof (r = o[t]) ? r : e : o[t] && o[t][n];
                    var r
                }
            }, function (e, t, n) {
                n = n(19), e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
            }, function (e, t, n) {
                var r = n(20);
                n = n(6), e.exports = !!Object.getOwnPropertySymbols && !n((function () {
                    var e = Symbol();
                    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
                }))
            }, function (e, t, n) {
                var r, o, i = n(3), c = n(21);
                n = i.process, i = i.Deno, (i = (i = n && n.versions || i && i.version) && i.v8) ? o = (r = i.split("."))[0] < 4 ? 1 : r[0] + r[1] : c && (!(r = c.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = c.match(/Chrome\/(\d+)/)) && (o = r[1]), e.exports = o && +o
            }, function (e, t, n) {
                n = n(17), e.exports = n("navigator", "userAgent") || ""
            }, function (e, t, n) {
                var r = n(15);
                e.exports = function (e, t) {
                    var n, o;
                    if ("string" === t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
                    if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
                    if ("string" !== t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
                    throw TypeError("Can't convert object to primitive value")
                }
            }, function (e, t, n) {
                var r = n(3), o = n(24), i = n(28), c = n(30), a = n(19), u = (n = n(18), o("wks")), s = r.Symbol,
                    f = n ? s : s && s.withoutSetter || c;
                e.exports = function (e) {
                    return i(u, e) && (a || "string" == typeof u[e]) || (a && i(s, e) ? u[e] = s[e] : u[e] = f("Symbol." + e)), u[e]
                }
            }, function (t, n, r) {
                var o = r(25), i = r(26);
                (t.exports = function (t, n) {
                    return i[t] || (i[t] = n !== e ? n : {})
                })("versions", []).push({
                    version: "3.16.2",
                    mode: o ? "pure" : "global",
                    copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
                })
            }, function (e, t) {
                e.exports = !1
            }, function (e, t, n) {
                var r = n(3), o = n(27);
                n = r[n = "__core-js_shared__"] || o(n, {}), e.exports = n
            }, function (e, t, n) {
                var r = n(3);
                e.exports = function (e, t) {
                    try {
                        Object.defineProperty(r, e, {value: t, configurable: !0, writable: !0})
                    } catch (n) {
                        r[e] = t
                    }
                    return t
                }
            }, function (e, t, n) {
                var r = n(29), o = {}.hasOwnProperty;
                e.exports = Object.hasOwn || function (e, t) {
                    return o.call(r(e), t)
                }
            }, function (e, t, n) {
                var r = n(12);
                e.exports = function (e) {
                    return Object(r(e))
                }
            }, function (t, n) {
                var r = 0, o = Math.random();
                t.exports = function (t) {
                    return "Symbol(" + String(t === e ? "" : t) + ")_" + (++r + o).toString(36)
                }
            }, function (e, t, n) {
                var r = n(5), o = n(6), i = n(32);
                e.exports = !r && !o((function () {
                    return 7 != Object.defineProperty(i("div"), "a", {
                        get: function () {
                            return 7
                        }
                    }).a
                }))
            }, function (e, t, n) {
                var r = n(3), o = (n = n(15), r.document), i = n(o) && n(o.createElement);
                e.exports = function (e) {
                    return i ? o.createElement(e) : {}
                }
            }, function (e, t, n) {
                var r = n(5), o = n(34), i = n(8);
                e.exports = r ? function (e, t, n) {
                    return o.f(e, t, i(1, n))
                } : function (e, t, n) {
                    return e[t] = n, e
                }
            }, function (e, t, n) {
                var r = n(5), o = n(31), i = n(35), c = n(13), a = Object.defineProperty;
                t.f = r ? a : function (e, t, n) {
                    if (i(e), t = c(t), i(n), o) try {
                        return a(e, t, n)
                    } catch (e) {
                    }
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                    return "value" in n && (e[t] = n.value), e
                }
            }, function (e, t, n) {
                var r = n(15);
                e.exports = function (e) {
                    if (!r(e)) throw TypeError(String(e) + " is not an object");
                    return e
                }
            }, function (e, t, n) {
                var r = n(3), o = n(33), i = n(28), c = n(27), a = n(37), u = (n = n(38)).get, s = n.enforce,
                    f = String(String).split("String");
                (e.exports = function (e, t, n, a) {
                    var u = !!a && !!a.unsafe, l = !!a && !!a.enumerable, p = !!a && !!a.noTargetGet;
                    "function" == typeof n && ("string" != typeof t || i(n, "name") || o(n, "name", t), (a = s(n)).source || (a.source = f.join("string" == typeof t ? t : ""))), e !== r ? (u ? !p && e[t] && (l = !0) : delete e[t], l ? e[t] = n : o(e, t, n)) : l ? e[t] = n : c(t, n)
                })(Function.prototype, "toString", (function () {
                    return "function" == typeof this && u(this).source || a(this)
                }))
            }, function (e, t, n) {
                n = n(26);
                var r = Function.toString;
                "function" != typeof n.inspectSource && (n.inspectSource = function (e) {
                    return r.call(e)
                }), e.exports = n.inspectSource
            }, function (e, t, n) {
                var r, o, i, c, a, u, s, f, l = n(39), p = n(3), d = n(15), g = n(33), v = n(28), b = n(26), m = n(40),
                    y = (n = n(41), "Object already initialized");
                p = p.WeakMap, s = l || b.state ? (r = b.state || (b.state = new p), o = r.get, i = r.has, c = r.set, a = function (e, t) {
                    if (i.call(r, e)) throw new TypeError(y);
                    return t.facade = e, c.call(r, e, t), t
                }, u = function (e) {
                    return o.call(r, e) || {}
                }, function (e) {
                    return i.call(r, e)
                }) : (n[f = m("state")] = !0, a = function (e, t) {
                    if (v(e, f)) throw new TypeError(y);
                    return t.facade = e, g(e, f, t), t
                }, u = function (e) {
                    return v(e, f) ? e[f] : {}
                }, function (e) {
                    return v(e, f)
                }), e.exports = {
                    set: a, get: u, has: s, enforce: function (e) {
                        return s(e) ? u(e) : a(e, {})
                    }, getterFor: function (e) {
                        return function (t) {
                            var n;
                            if (!d(t) || (n = u(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                            return n
                        }
                    }
                }
            }, function (e, t, n) {
                var r = n(3);
                n = n(37), r = r.WeakMap, e.exports = "function" == typeof r && /native code/.test(n(r))
            }, function (e, t, n) {
                var r = n(24), o = n(30), i = r("keys");
                e.exports = function (e) {
                    return i[e] || (i[e] = o(e))
                }
            }, function (e, t) {
                e.exports = {}
            }, function (e, t, n) {
                var r = n(28), o = n(43), i = n(4), c = n(34);
                e.exports = function (e, t) {
                    for (var n = o(t), a = c.f, u = i.f, s = 0; s < n.length; s++) {
                        var f = n[s];
                        r(e, f) || a(e, f, u(t, f))
                    }
                }
            }, function (e, t, n) {
                var r = n(17), o = n(44), i = n(51), c = n(35);
                e.exports = r("Reflect", "ownKeys") || function (e) {
                    var t = o.f(c(e)), n = i.f;
                    return n ? t.concat(n(e)) : t
                }
            }, function (e, t, n) {
                var r = n(45), o = n(50).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function (e) {
                    return r(e, o)
                }
            }, function (e, t, n) {
                var r = n(28), o = n(9), i = n(46).indexOf, c = n(41);
                e.exports = function (e, t) {
                    var n, a = o(e), u = 0, s = [];
                    for (n in a) !r(c, n) && r(a, n) && s.push(n);
                    for (; t.length > u;) r(a, n = t[u++]) && (~i(s, n) || s.push(n));
                    return s
                }
            }, function (e, t, n) {
                var r = n(9), o = n(47), i = n(49);
                n = function (e) {
                    return function (t, n, c) {
                        var a, u = r(t), s = o(u.length), f = i(c, s);
                        if (e && n != n) {
                            for (; f < s;) if ((a = u[f++]) != a) return !0
                        } else for (; f < s; f++) if ((e || f in u) && u[f] === n) return e || f || 0;
                        return !e && -1
                    }
                }, e.exports = {includes: n(!0), indexOf: n(!1)}
            }, function (e, t, n) {
                var r = n(48), o = Math.min;
                e.exports = function (e) {
                    return 0 < e ? o(r(e), 9007199254740991) : 0
                }
            }, function (e, t) {
                var n = Math.ceil, r = Math.floor;
                e.exports = function (e) {
                    return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
                }
            }, function (e, t, n) {
                var r = n(48), o = Math.max, i = Math.min;
                e.exports = function (e, t) {
                    return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
                }
            }, function (e, t) {
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            }, function (e, t) {
                t.f = Object.getOwnPropertySymbols
            }, function (e, t, n) {
                var r = n(6), o = /#|\.prototype\./, i = (n = function (e, t) {
                    return (e = c[i(e)]) == u || e != a && ("function" == typeof t ? r(t) : !!t)
                }, n.normalize = function (e) {
                    return String(e).replace(o, ".").toLowerCase()
                }), c = n.data = {}, a = n.NATIVE = "N", u = n.POLYFILL = "P";
                e.exports = n
            }, function (e, t, n) {
                n = n(3), e.exports = n.Promise
            }, function (t, n, r) {
                var o = r(35), i = r(55), c = r(23)("species");
                t.exports = function (t, n) {
                    var r;
                    return (t = o(t).constructor) === e || (r = o(t)[c]) == e ? n : i(r)
                }
            }, function (e, t) {
                e.exports = function (e) {
                    if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                    return e
                }
            }, function (e, t, n) {
                var r = n(35), o = n(15), i = n(57);
                e.exports = function (e, t) {
                    return r(e), o(t) && t.constructor === e ? t : ((0, (e = i.f(e)).resolve)(t), e.promise)
                }
            }, function (t, n, r) {
                function o(t) {
                    var n, r;
                    this.promise = new t((function (t, o) {
                        if (n !== e || r !== e) throw TypeError("Bad Promise constructor");
                        n = t, r = o
                    })), this.resolve = i(n), this.reject = i(r)
                }

                var i = r(55);
                t.exports.f = function (e) {
                    return new o(e)
                }
            }, function (e, t, n) {
                var r = n(2), o = n(3);
                n = n(59), r({
                    global: !0,
                    bind: !0,
                    enumerable: !0,
                    forced: !o.setImmediate || !o.clearImmediate
                }, {setImmediate: n.set, clearImmediate: n.clear})
            }, function (t, n, r) {
                var o, i, c = r(3), a = r(6), u = r(60), s = r(61), f = r(32), l = r(62), p = r(63), d = c.setImmediate,
                    g = c.clearImmediate, v = c.process, b = c.MessageChannel, m = c.Dispatch, y = 0, w = {},
                    h = "onreadystatechange";
                try {
                    o = c.location
                } catch (t) {
                }

                function x(e) {
                    return function () {
                        P(e)
                    }
                }

                function O(e) {
                    P(e.data)
                }

                var P = function (e) {
                    var t;
                    w.hasOwnProperty(e) && (t = w[e], delete w[e], t())
                };
                r = function (e) {
                    c.postMessage(String(e), o.protocol + "//" + o.host)
                }, d && g || (d = function (t) {
                    for (var n = [], r = arguments.length, o = 1; o < r;) n.push(arguments[o++]);
                    return w[++y] = function () {
                        ("function" == typeof t ? t : Function(t)).apply(e, n)
                    }, i(y), y
                }, g = function (e) {
                    delete w[e]
                }, p ? i = function (e) {
                    v.nextTick(x(e))
                } : m && m.now ? i = function (e) {
                    m.now(x(e))
                } : b && !l ? (b = (l = new b).port2, l.port1.onmessage = O, i = u(b.postMessage, b, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts && o && "file:" !== o.protocol && !a(r) ? (i = r, c.addEventListener("message", O, !1)) : i = h in f("script") ? function (e) {
                    s.appendChild(f("script"))[h] = function () {
                        s.removeChild(this), P(e)
                    }
                } : function (e) {
                    setTimeout(x(e), 0)
                }), t.exports = {set: d, clear: g}
            }, function (t, n, r) {
                var o = r(55);
                t.exports = function (t, n, r) {
                    if (o(t), n === e) return t;
                    switch (r) {
                        case 0:
                            return function () {
                                return t.call(n)
                            };
                        case 1:
                            return function (e) {
                                return t.call(n, e)
                            };
                        case 2:
                            return function (e, r) {
                                return t.call(n, e, r)
                            };
                        case 3:
                            return function (e, r, o) {
                                return t.call(n, e, r, o)
                            }
                    }
                    return function () {
                        return t.apply(n, arguments)
                    }
                }
            }, function (e, t, n) {
                n = n(17), e.exports = n("document", "documentElement")
            }, function (e, t, n) {
                n = n(21), e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
            }, function (e, t, n) {
                var r = n(11);
                n = n(3), e.exports = "process" == r(n.process)
            }], o = {}, t.m = r, t.c = o, t.d = function (e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: r})
            }, t.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, t.t = function (e, n) {
                if (1 & n && (e = t(e)), 8 & n) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (t.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e) for (var o in e) t.d(r, o, function (t) {
                    return e[t]
                }.bind(null, o));
                return r
            }, t.n = function (e) {
                var n = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 0)
        }()
    }, 2287: function (e, t, n) {
        "use strict";
        n.d(t, {
            F: function () {
                return f
            }
        });
        var r = n(8198), o = n(2042);

        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function (t) {
                    a(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        let u = {};
        const s = e => r.p_.abra.tests[e], f = {
            init: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.p_.abra.config,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0;
                if (!e) return;
                const o = r.p_.Abra(e, t, n);
                r.p_.abra.getVariant = o, r.p_.abra.tests = {}, Object.keys(e).forEach((e => {
                    r.p_.abra.tests[e] = o(e)
                }))
            }, getTests: () => r.p_.abra.tests, getVariant: s, reset: () => {
                u = {}
            }, reportExposure: e => {
                if (void 0 === typeof window) return;
                if (u[e]) return;
                const {data: t, eventName: n} = (e => {
                    const t = {
                        test: e,
                        variant: s(e) || "0",
                        config_ver: s(".ver"),
                        integration: "games-".concat("prod" === o.OB.name ? "prd" : "stg")
                    }, n = {abtest: t}, r = !!window.gamesAppPlatform, i = r ? "ab_expose" : "ab-expose";
                    return {data: c({}, r ? t : n), eventName: i}
                })(e);
                window.isHybridWebView && window.NativeBridge ? window.NativeBridge.sendAnalytic(n, t) : (r.p_.dataLayer = r.p_.dataLayer || [], r.p_.dataLayer.push(c({event: n}, t))), u[e] = !0
            }
        }
    }, 608: function (e, t, n) {
        "use strict";
        n.d(t, {
            Z: function () {
                return a
            }
        });
        const r = "games", o = "crosswords", i = /^wordle$/;
        var c = e => !i.test(e), a = function () {
            let {loadScripts: e} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            e && e({pageType: r, section: o, loadPrebid: c(t)})
        }
    }, 8198: function (e, t, n) {
        "use strict";
        n.d(t, {
            JU: function () {
                return o
            }, Qf: function () {
                return a
            }, WL: function () {
                return c
            }, p_: function () {
                return r
            }, uL: function () {
                return i
            }
        });
        const r = window, o = document, i = encodeURIComponent, c = localStorage, a = sessionStorage
    }, 4395: function (e, t, n) {
        "use strict";
        var r = n(8198), o = n(431);
        t.Z = () => {
            "ontouchstart" in r.p_ || r.p_.DocumentTouch || (0, o.cn)(r.JU.documentElement, "pz-dont-touch")
        }
    }, 3682: function (e, t, n) {
        "use strict";
        n.d(t, {
            _k: function () {
                return a
            }, gc: function () {
                return c
            }, vq: function () {
                return u
            }
        });
        var r = n(1586);
        const o = {
            linkCANotice: "california notices link",
            linkOptOut: "DNSS opt-out link",
            optedOut: "DNSS opted-out indicator link",
            linkLimitInfo: "limit sensitive information link"
        }, i = {}, c = e => {
            const t = e.target, n = t.getAttribute("data-region") || "", i = t.getAttribute("data-track") || "",
                c = t.getAttribute("data-label") || t.textContent;
            (0, r.j)("moduleInteraction", {
                eventData: {pagetype: "game", trigger: "module", type: "click"},
                module: {name: o[i], label: c, region: n}
            })
        }, a = e => {
            const t = e.target.getAttribute("data-region") || "", n = e.target.getAttribute("data-track") || "",
                c = e.target.textContent;
            i["".concat(t, "-").concat(n)] || ((0, r.j)("impression", {
                module: {
                    name: o[n],
                    label: c,
                    region: t
                }
            }), i["".concat(t, "-").concat(n)] = !0)
        }, u = (e, t) => {
            const n = "optOut" === e ? "DNSS opt-out link snackbar message" : "DNSS opted-out indicator link snackbar message";
            (0, r.j)("impression", {module: {name: n, label: t}})
        }
    }, 7719: function (e, t, n) {
        "use strict";
        n.d(t, {
            U: function () {
                return u
            }, q: function () {
                return s
            }
        });
        var r = n(4658), o = n(2042), i = n(8198), c = n(3251);
        const a = i.p_.navigator, u = (0, o.y5)((() => c.B.get("/puzzles/device")), i.WL, "pz-device", a.userAgent),
            s = () => {
                i.p_.isCacheSafe || r.tq || !(/iPad/.test(a.platform) || "MacIntel" === a.platform && a.maxTouchPoints > 1) || (i.JU.cookie = "inferredIpad=true;domain=nytimes.com;", i.p_.location.reload())
            }
    }, 431: function (e, t, n) {
        "use strict";
        n.d(t, {
            IV: function () {
                return i
            }, Oo: function () {
                return u
            }, P$: function () {
                return a
            }, R2: function () {
                return f
            }, cn: function () {
                return o
            }, dS: function () {
                return g
            }, jG: function () {
                return l
            }, og: function () {
                return c
            }, rI: function () {
                return s
            }, y5: function () {
                return p
            }
        });
        var r = n(8198);

        function o(e, t) {
            null !== e && e.classList.add(t)
        }

        function i(e, t) {
            null !== e && e.classList.remove(t)
        }

        function c(e, t) {
            e.classList.toggle(t)
        }

        function a(e, t, n) {
            e.setAttribute(t, n)
        }

        function u(e, t, n, r) {
            e.addEventListener(t, n, r)
        }

        function s(e) {
            return r.JU.getElementById(e)
        }

        function f(e) {
            return r.JU.querySelector(e)
        }

        function l(e, t) {
            e.appendChild(t)
        }

        function p(e, t) {
            (function (e) {
                for (; e.children.length;) e.removeChild(e.children[0])
            })(e), t.forEach((t => {
                l(e, t)
            }))
        }

        function d(e) {
            var t;
            return null === (t = e.currentTarget) || void 0 === t ? void 0 : t.events[e.type](e)
        }

        function g(e, t, n) {
            const o = r.JU.createElement(e);
            return n && l(o, r.JU.createTextNode(n)), Object.keys(t).forEach((e => {
                const n = t[e];
                if ("o" === e[0] && "n" === e[1]) {
                    const t = e.slice(2).toLowerCase();
                    o.events || (o.events = {}), o.events[t] = n, u(o, t, d)
                } else null != n && !1 !== n && o.setAttribute(e, n)
            })), o
        }
    }, 6797: function (e, t, n) {
        "use strict";
        var r = n(8229);
        t.Z = e => {
            (0, r.Z)("No android-specific tasks defined")
        }
    }, 8229: function (e, t) {
        "use strict";
        t.Z = (window.hybridDebug = window.hybridDebug || [], (e, t, n) => {
            window.hybridDebug.length > 30 && window.hybridDebug.pop(), window.hybridDebug.unshift({
                message: e,
                args: t,
                response: n
            })
        })
    }, 3886: function (e, t, n) {
        "use strict";
        n.d(t, {
            ZP: function () {
                return g
            }, m5: function () {
                return s
            }
        });
        var r = n(320), o = n(8229), i = n(9385), c = n(6797), a = n(8345), u = n(3401);
        const s = function () {
            return arguments.length > 0 && void 0 !== arguments[0] || window, (0, u.Og)() || (0, u.Ys)()
        }, f = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
            e.asset = {uri: "fakeAssetUri"}
        }, l = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
                t = arguments.length > 1 ? arguments[1] : void 0;
            e.navigator.native = {bridgeCommands: {}}, t.forEach((t => {
                e.navigator.native.bridgeCommands[t] = {enabled: !0}
            }))
        }, p = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
            const t = (0, r.P)(e, !0), {callNativeBridgeCommand: n} = t;
            return {NativeBridge: t, callNativeBridgeCommand: n}
        }, d = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
                t = arguments.length > 1 ? arguments[1] : void 0;
            f(e), l(e, t);
            const {NativeBridge: n, callNativeBridgeCommand: r} = p(e), c = function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                const c = r(e, ...n);
                return (0, o.Z)("Executing native bridge command: ".concat(e), n, c), c
            }, a = (0, i.N$)(c);
            return t.forEach((e => {
                n[e] = a[e]
            })), n
        };

        function g() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
            const t = d(e, i.yL);
            (0, u.Og)() ? (0, c.Z)(t) : (0, u.Ys)() ? (0, a.Z)(t) : (0, o.Z)("Platform is neither android nor ios", [e.newsreaderAppPlatform, e.gamesAppPlatform]), e.NativeBridge = t
        }
    }, 329: function (e, t, n) {
        "use strict";
        n.d(t, {
            HP: function () {
                return f
            }, ZP: function () {
                return m
            }
        });
        var r = n(6797), o = n(9385), i = n(3401), c = n(8345);

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function (t) {
                    s(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function f() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
            const n = (null == t || null === (e = t.location) || void 0 === e ? void 0 : e.search.toLowerCase()) || "";
            return -1 !== n.indexOf("bridge=mock")
        }

        const l = {
                isUserLoggedIn: !0,
                isSubscribed: !0,
                nytsCookie: "",
                regiID: 131999385,
                email: "mock.email@nytimes.com"
            }, p = {success: !0}, d = u(u({}, p), {}, {values: {gamesAuthenticateUser: u({}, l), aborted: !1}}),
            g = u(u({}, p), {}, {values: {gamesGetUserDetails: u({}, l)}}),
            v = u(u({}, p), {}, {values: {gamesInitializeState: {isReturningFromBackground: !1}}}), b = e => {
                const {NativeBridge: t, callNativeBridgeCommand: n} = {
                    NativeBridge: {},
                    callNativeBridgeCommand: function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        switch (console.log("[NATIVE BRIDGE MOCK]: ".concat(e, " called by web app"), n), e) {
                            case o.m$:
                                return console.log("[NATIVE BRIDGE MOCK]: ".concat(e, " responded with"), v), Promise.resolve(v);
                            case o.OD:
                                return console.log("[NATIVE BRIDGE MOCK]: ".concat(e, " responded with"), g), Promise.resolve(g);
                            case o.kU:
                                return console.log("[NATIVE BRIDGE MOCK]: ".concat(e, " responded with"), d), Promise.resolve(d);
                            default:
                                return console.log("[NATIVE BRIDGE MOCK]: ".concat(e, " responded with"), p), Promise.resolve(p)
                        }
                    }
                }, r = (0, o.N$)(n);
                return e.forEach((e => {
                    t[e] = r[e]
                })), t
            };

        function m() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
            const t = b(o.yL);
            e.hybridConfig = {OS: "Mock OS", AbraConfig: {}, userInfo: u(u({}, l), {}, {agentID: "mock-agent-id"})};
            let n = null;
            t.addEventListener = (e, t, r) => {
                n || (n = new EventTarget), n.addEventListener(e, t, r)
            }, t.removeEventListener = (e, t, r) => {
                n && (n.removeEventListener(e, t, r), n = null)
            }, t.dispatchEvent = e => {
                if (n) {
                    const t = new Event(e);
                    t.respondWith = t => {
                        console.log("[NATIVE BRIDGE MOCK]: ".concat(e, " responded with"), t)
                    }, n.dispatchEvent(t)
                }
            }, (0, i.Og)() ? (0, r.Z)(t) : (0, i.Ys)() ? (0, c.Z)(t) : console.log("[NATIVE BRIDGE MOCK]: Platform is neither android nor ios", e.newsreaderAppPlatform, e.gamesAppPlatform), e.NativeBridge = t
        }
    }, 8345: function (e, t, n) {
        "use strict";
        var r = n(3401);
        t.Z = e => {
            (0, r.mo)() && e.setPullToRefreshEnabled(!1)
        }
    }, 6023: function (e, t, n) {
        "use strict";
        var r = n(8198);
        let o;
        "IntersectionObserver" in r.p_ && "IntersectionObserverEntry" in r.p_ && "intersectionRatio" in r.p_.IntersectionObserverEntry.prototype && ("isIntersecting" in r.p_.IntersectionObserverEntry.prototype || Object.defineProperty(r.p_.IntersectionObserverEntry.prototype, "isIntersecting", {
            get() {
                return this.intersectionRatio > 0
            }
        }), r.p_.__observeInView__ = !0), t.Z = (e, t) => {
            var n;
            window.__observeInView__ && (o || (o = new r.p_.IntersectionObserver((e => {
                e.forEach((e => {
                    var t;
                    e.isIntersecting && (null === (t = e.target.__viewers__) || void 0 === t || t.forEach((t => t(e))))
                }))
            }), {threshold: .4})), e.__viewers__ ? null === (n = e.__viewers__) || void 0 === n || n.push(t) : (e.__viewers__ = [t], o.observe(e)))
        }
    }, 7904: function (e, t, n) {
        "use strict";
        n.d(t, {
            lY: function () {
                return l
            }, ZP: function () {
                return d
            }, Fg: function () {
                return p
            }
        });
        var r = n(8935), o = n(982), i = n(2913), c = n(2042), a = n(7006);
        const u = [/extensions\//i, /^chrome:\/\//i, /safari-extension/, /safari-web-extension/, /moz-extension/, /chrome-extension/, /data:application/, /file:\/\/\//, /127\.0\.0\.1:4001\/isrunning/i, /webappstoolbarba\.texthelp\.com\//i, /metrics\.itunes\.apple\.com\.edgesuite\.net\//i, /translate\.goog/, /googletagservices/, /moatads/, /adtech/, /contextual\.media\.net/, /platform\.iteratehq\.com/, /chartbeat/, /flashtalking/, /doubleverify/, /google-analytics/, /3lift/, /celtra/, /4everproxy/, /hideproxy/, /proxysite/, /us-proxy/, /geoedge/, /grumi-ip/],
            s = new RegExp(["amazon-adsystem", "ads-us", "amp4ads", "pubads", "2mdn", "ampproject", "chartbeat", "gsi", "bk_addPageCtx", "yimg", "BOOMR", "boomerang", "gtm", "google_tag_manager", "scorecardresearch", "safari-extension", "safari-web-extension", "moz-extension", "chrome-extension", "bad req", "No Internet", "No root config found", "webkit-masked-url", "feature toggles accessed before being set"].join("|")),
            f = (e, t) => {
                var n, r;
                const o = null == t ? void 0 : t.originalException;
                if (o && "string" != typeof o) {
                    const {stack: e = ""} = o;
                    if (s.test(e)) return null
                } else if ("string" == typeof o && s.test(o)) return null;
                const i = null == e || null === (n = e.exception) || void 0 === n || null === (r = n.values) || void 0 === r ? void 0 : r[0];
                return null != i && i.value && /Non-Error promise rejection captured with value: (undefined|null)/.test(i.value) ? null : e
            }, l = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e && e.message && o.$e((n => {
                    Object.keys(t).forEach((e => {
                        n.setTag(e, t[e])
                    })), o.Tb(e)
                }))
            }, p = (e, t) => {
                e && t && o.v(e, t)
            };
        var d = e => {
            let {dsn: t, release: n, sampleRate: s, environment: l} = e,
                p = new URL(window.location.href).searchParams.get("sentryOverride"), d = s;
            if ("stg" === l && (p = "1"), p && (d = 1), "prod" === l || p) {
                if (r.S({
                    dsn: t,
                    release: n,
                    sampleRate: d,
                    maxBreadcrumbs: 70,
                    environment: l,
                    beforeSend: f,
                    denyUrls: u,
                    integrations: [new i.jK.gE]
                }), o.av({id: c.kh}), a.A && o.v("userType", a.A), o.v("hybrid", {
                    isHybridWebView: window.isHybridWebView,
                    newsreaderAppPlatform: window.newsreaderAppPlatform,
                    gamesAppPlatform: window.gamesAppPlatform,
                    isPlayTab: window.isPlayTab
                }), window.isHybridWebView && o.YA("hybrid", !0), window.newsreaderAppPlatform || window.gamesAppPlatform) {
                    const e = window.newsreaderAppPlatform ? "newsreader-".concat(window.newsreaderAppPlatform) : "games-".concat(window.gamesAppPlatform);
                    o.YA("app", e)
                }
                window.addEventListener("offline", (() => {
                    o.n_({message: "The user has gone offline", level: "warning"})
                }))
            }
        }
    }, 7006: function (e, t, n) {
        "use strict";
        n.d(t, {
            A: function () {
                return a
            }, E: function () {
                return c
            }
        });
        var r = n(2042), o = n(8198), i = n(3251);
        const c = (0, r.y5)((() => i.B.get("/puzzles/user?bust=".concat((0, r.zO)()))), o.Qf, "pz-user", r.Rt), {userType: a} = o.p_
    }, 3251: function (e, t, n) {
        "use strict";
        n.d(t, {
            B: function () {
                return l
            }
        });
        var r = n(2042);

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function (t) {
                    c(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        const a = "json", u = e => {
            if (e.status < 400) return;
            const t = new Error("bad req");
            return t.status = e.status, t
        }, s = {withCookie: !0, withCredentials: !0, responseType: a}, f = function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const o = i(i({}, s), n), {isSync: c = !1} = o;
            return new Promise(((n, i) => {
                var s;
                if (!(null !== (s = window) && void 0 !== s && s.isHybridWebView || navigator.onLine)) return i(new Error("No internet"));
                const f = new XMLHttpRequest;
                if (f.open(e, t, !c), f.withCredentials = !!o.withCredentials, c || (f.timeout = 5e3), o.withCookie && (o.cookie ? f.setRequestHeader("nyt-s", o.cookie) : f.setRequestHeader("nyt-s", r.Rt)), f.ontimeout = () => {
                    i(new Error("".concat(e, " request to ").concat(t, " timed out")))
                }, f.setRequestHeader("Content-type", o.data ? "application/json" : "application/x-www-form-urlencoded"), o.headers) {
                    const {headers: e} = o;
                    Object.keys(e).forEach((t => {
                        f.setRequestHeader(t, e[t])
                    }))
                }
                f.onload = () => {
                    try {
                        const e = f.responseText;
                        if (e && o.responseType === a) {
                            const t = JSON.parse(e);
                            o.withStatus && (t.status = f.status), n(t)
                        } else n(e)
                    } catch (e) {
                        i(new Error("Something went wrong"))
                    }
                }, f.addEventListener("error", (e => i(u(e)))), f.send(o.data && JSON.stringify(o.data))
            }))
        }, l = {
            get: (e, t) => f("GET", e, t),
            post: (e, t, n) => f("POST", e, i(i({}, n), {}, {data: t})),
            put: (e, t, n) => f("PUT", e, i(i({}, n), {}, {data: t})),
            delete: (e, t) => f("DELETE", e, t),
            request: f
        }
    }, 7422: function (e, t, n) {
        "use strict";
        n(7283), n(4658), n(5489)
    }
}]);
//# sourceMappingURL=4931.b1cc273f453299bdb77b.js.map