"use strict";
var brandmetrics, __assign = this && this.__assign || function () {
    return (__assign = Object.assign || function (e) {
        for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
    }).apply(this, arguments)
};
!function (l) {
    if (void 0 === l.api) {
        l.api = null;
        var n, r = "unknown";
        l.bootstrap = function (e, t, n) {
            void 0 === n && (n = !1);
            var o = function () {
                window._brandmetrics_initiated && window._brandmetrics_initiated(window.brandmetrics.api), t && t(window.brandmetrics.api)
            };
            "unknown" === r || n ? (r = "strapping", i(e, function (e, t) {
                if (e) u(t, function (e) {
                    window.brandmetrics.api = e, o()
                }); else {
                    window.brandmetrics.api = {
                        hasConsent: function () {
                            return !1
                        }, isReady: function () {
                            return !0
                        }
                    }, o()
                }
            })) : o()
        }, l.register = function (e) {
            o[e.id] = e.ctor, n && n(e)
        }, l.getModule = function (e) {
            return o[e], o[e]
        }, l.defaultOptions = function (e) {
            var t = {
                siteId: "",
                baseUrl: location.protocol + "//" + location.host,
                consentMode: {type: "iab"},
                consentRetryCount: 2,
                isTest: !1,
                logConfiguration: {errors: !1, bundle: !1, level: "None"},
                query: "",
                measurements: [],
                listeners: [],
                storage: "none",
                startMode: {type: "manual"},
                userMode: {type: "none"},
                version: void 0,
                survey: {max: 10, interval: 10, expInt: 10, maxTot: 50, intervalTot: 10},
                adSlot: {},
                inview: {type: "intersectionobserver"},
                surveyRandomization: .5,
                dataRequestType: "script",
                scriptType: 0
            };
            return p(t, e)
        };
        var p = function (e, t) {
            return __assign(__assign({}, e), t)
        }, f = l.defaultOptions({}), o = {}, i = function (e, n) {
            if (!("sandbox" in document.createElement("iframe"))) throw new Error("Sandbox not supported");
            if (f = p(l.defaultOptions({}), e || {}), c()) s(!1, f, n); else {
                var o = 1, r = function () {
                    t(f, function (e, t) {
                        !e && o <= f.consentRetryCount ? (o++, setTimeout(function () {
                            r()
                        }, 3e3)) : n(e, t)
                    })
                };
                r()
            }
        }, t = function (t, n) {
            if ("none" !== t.consentMode.type) {
                var e = void 0;
                switch (t.consentMode.type) {
                    case"iab":
                        e = new (l.getModule(22));
                        break;
                    case"custom":
                        e = new (l.getModule(23))(t.consentMode.conf);
                        break;
                    default:
                        throw new Error("Cannot handle consent type: " + t.consentMode.type)
                }
                e.check(function (e) {
                    e ? a(t, n) : s(!1, t, n)
                })
            } else a(t, n)
        }, a = function (e, t) {
            if (void 0 === window._brandmetrics_consent) s(!0, e, t); else {
                var n = window._brandmetrics_consent();
                s(n, e, t)
            }
        }, s = function (e, t, n) {
            n(e, t)
        }, c = function () {
            try {
                return null !== localStorage.getItem("__bmdnt")
            } catch (e) {
                return !1
            }
        }, u = function (u, d) {
            var e = [];
            window.IntersectionObserver && e.push(16), window.localStorage && e.push(5);
            var t = function () {
                return void 0 !== o[-2] && (n = void 0, function () {
                    var e, t = p(f, l.getModule(-2)), n = "ls" === t.storage && window.localStorage ? 5 : 6,
                        o = new (l.getModule(2))(t), r = new (l.getModule(n))(t, o, !1),
                        i = t.listeners.filter(function (e) {
                            return "api" !== e.type
                        }).map(function (e) {
                            var t = "apn" === e.type ? 10 : "slot" === e.type ? 13 : "gpt" === e.type ? 8 : "pxl" === e.type ? 11 : "pbj" === e.type ? 7 : "ntv" === e.type ? 12 : "gptStrict" === e.type ? 9 : "gptHb" === e.type ? 28 : "gptPb" === e.type ? 30 : "kvl" === e.type ? 29 : -1;
                            return new (l.getModule(t))(e)
                        });
                    switch (t.userMode.type) {
                        case"custom":
                            e = new (l.getModule(24))(r, t.userMode);
                            break;
                        case"internal":
                            e = new (l.getModule(31))(r, t.userMode)
                    }
                    var a = new (l.getModule(3))(t, o, e), s = l.getModule(4),
                        c = "none" !== t.storage || 0 < t.listeners.length ? new (l.getModule(1))(t, a, o, i, r) : void 0;
                    void 0 !== c && new (l.getModule(26))({options: u, collection: c});
                    l.getModule(0)(t, o, a, s, c, 0, function (e) {
                        d(e)
                    })
                }(), !0)
            };
            (n = t)() || (b(u, e), t())
        }, b = function (e, t) {
            var n = document, o = n.location, r = o.ancestorOrigins;
            if (n.body) {
                for (var i = 0, a = 0, s = t; a < s.length; a++) {
                    var c = s[a];
                    i |= Math.pow(2, c)
                }
                var u = o && o.search && -1 !== o.search.indexOf("bm_d"), d = r && 0 < r.length ? r : [o.href],
                    l = d[d.length - 1], p = n.createElement("a");
                p.href = l;
                var f = p.host, g = "?sid=" + e.siteId + "&toploc=" + f;
                u && (g += "&bm_d"), e.query && (g += "&" + e.query), e.version && (g += "&" + e.version), e.logConfiguration.bundle && (g += "&rnd=" + Math.floor(9999001 * Math.random() + 1e3).toString());
                var v = (!u && e.cdnUrl ? e.cdnUrl : e.baseUrl) + "/scripts/bundle/" + i.toString() + ".js" + ("?" !== g ? g : ""),
                    w = document.createElement("script");
                w.setAttribute("type", "text/javascript"), w.setAttribute("async", "true"), w.setAttribute("src", v), document.body.appendChild(w)
            } else n.addEventListener("DOMContentLoaded", function () {
                b(e, t)
            })
        }
    }
}(brandmetrics || (brandmetrics = {}));
"use strict";
!function () {
    var c, t = function () {
        function t(t) {
            c = t
        }

        return t.prototype.check = function (t) {
            c && c.script ? new Function("callback", c.script)(t) : t(!0)
        }, t
    }();
    window.brandmetrics.register({id: 23, ctor: t})
}();
window.brandmetrics.bootstrap({
    baseUrl: "https://collector.brandmetrics.com",
    cdnUrl: "https://cdn.brandmetrics.com",
    siteId: "4486dfe2-780e-4dfa-a60a-2a948887658f",
    consentMode: {"type": "custom", "conf": {"check": false, "script": "callback(true);"}},
    query: "",
    scriptType: 0,
});