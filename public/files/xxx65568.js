"use strict";
!function () {
    var m, f, u, y, w, a, c, b = !1, r = {}, v = function () {
        function e(e, t, r, o, i) {
            if (f = e, a = o, w = r, m = t, u = i) y = u.storage; else if ("ls" === e.storage) try {
                y = new (brandmetrics.getModule(5))(f, m, !1)
            } catch (e) {
                y = void 0
            }
        }

        return e.prototype.isReady = function () {
            return c && c.isInitiated
        }, e.prototype.hasConsent = function () {
            return !0
        }, e.prototype.addEventListener = function (e) {
            "ready" === e.event && this.isReady() ? e.handler({api: this}) : m.on(e)
        }, e.prototype.triggerSurvey = function (o) {
            var a, n = this, s = !1;
            void 0 !== (null == o ? void 0 : o.timeout) && 0 < o.timeout && (a = setTimeout(function () {
                d(!(s = !(b = !1))), m.emit("surveyloaded", {available: !1, showed: !1})
            }, o.timeout));
            var d = function (e, t, r) {
                o && o.callback && o.callback(e, t, r)
            }, u = {
                mid: (o = o || {}).mid,
                bid: o.bid,
                callback: o.callback,
                autoRender: void 0 === o.autoRender || o.autoRender,
                force: void 0 !== o.force && o.force,
                isTest: void 0 !== o.isTest && o.isTest,
                dtName: o.dtName
            }, e = !1, t = [];
            if ("none" !== f.storage && y) {
                var r = y.state(), i = 0, c = 0;
                for (var v in r) if (r.hasOwnProperty(v)) {
                    var l = r[v];
                    if (!0 !== u.isTest && u.mid === l.mid && !0 === l.isAnswered) {
                        e = !0;
                        break
                    }
                    !1 === l.isAnswered && l.nbrOfSurveys < f.survey.max && Date.now() - l.lastSurvey > 1e3 * f.survey.interval * 60 && (i = Math.max(i, l.lastSurvey), Date.now() - l.lastSurvey < 6048e5 && (c += l.nbrOfSurveys), t.push(l))
                }
                (c >= f.survey.maxTot || Date.now() - i < 1e3 * f.survey.intervalTot * 60) && (e = !0)
            }
            if (!0 === e) return clearInterval(a), d(!1), void m.emit("surveyloaded", {available: !1, showed: !1});
            var p = Math.random() <= f.surveyRandomization;
            !b && (u.callback || u.mid || u.isTest || u.force || p) ? (b = !0, w.ExecuteConfigRequest(u.mid || null, u.isTest || !1, u.force, u.dtName, t, function (e) {
                if (!s) {
                    b = !1, clearTimeout(a);
                    var t = !1, r = !1, o = !1;
                    if (void 0 !== e) {
                        o = !0;
                        var i = n.createSurvey(e.surveyConfig);
                        d(!0, e.surveyConfig, i), t = !0, u.autoRender && (i.show(), r = !0)
                    }
                    t || d(!1), m.emit("surveyloaded", {
                        available: o,
                        showed: r,
                        mid: null == e ? void 0 : e.surveyConfig.measurementId
                    })
                }
            })) : p || (clearTimeout(a), m.emit("surveyloaded", {
                available: !1,
                showed: !1
            }), m.emit("surveyloadskipped", u))
        }, e.prototype.createSurvey = function (e) {
            if (void 0 === e || void 0 === e.measurementId || void 0 === e.displayOption) throw new Error("");
            if (a) {
                var t = a(w, e, m, y || (u ? u.storage : void 0));
                return r[e.measurementId] = t
            }
            throw new Error("brandmetrics: This configuration does not support creating surveys.")
        }, e.prototype.addMetadata = function (e) {
            if (void 0 === e || void 0 === e.name || void 0 === e.value || "string" != typeof e.value) throw new Error("Invalid Argument");
            w.upsertParam(e.name, e.value, e.types)
        }, e.prototype.setDoNotTrack = function () {
            var e = localStorage;
            e && (e.setItem("__bmdnt", "true"), e.removeItem("__bm_m"), e.removeItem("__bm_s")), w.postOptout()
        }, e.prototype.triggerExposure = function (e) {
            if (void 0 === u) throw new Error("brandmetrics: triggerExposure only works collection is activated.");
            u.triggerExposure(e)
        }, e.prototype.updateExposure = function (e) {
            if (void 0 === u) throw new Error("brandmetrics: updateExposure only works collection is activated.");
            u.updateExposureProperties(e.exposureId, {active: e.properties, meta: e.adMetadata})
        }, e.prototype.endExposure = function (e) {
            if (void 0 === u) throw new Error("brandmetrics: endExposure only works collection is activated.");
            u.endExposure(e)
        }, e.prototype.collectAds = function (e) {
        }, e.prototype.getState = function () {
            return y ? y.state() : void 0
        }, e.prototype.reinitialize = function () {
            void 0 !== u && u.reinitialize()
        }, e.prototype.addUserIds = function (e) {
            w.ConfigureSingleUsers(e)
        }, e.prototype.getOptions = function () {
            return f
        }, e.prototype.stop = function () {
            void 0 !== u && u.stop(), void 0 !== m && m.stop()
        }, e
    }();
    window.brandmetrics.register({
        id: 0, ctor: function (e, t, r, o, i, a, n) {
            var s = new v(e, t, r, o, i), d = {
                bm: s, collection: u, options: e, utils: t, client: r, callback: function () {
                    n(s), m.emit("ready", {api: s})
                }
            };
            switch (a) {
                case 0:
                    c = new (brandmetrics.getModule(19))(d);
                    break;
                case 1:
                    c = new (brandmetrics.getModule(20))(d);
                    break;
                default:
                    throw new Error("Failed to start brandmetrics, the mode: ".concat(a, " is not defined."))
            }
            c.start()
        }
    })
}();
"use strict";
!function () {
    var s, p, h, m, u, g, i, c, y = function (e, t, n, i, r, a, o, s) {
        var c = this;
        switch (this.measurements = [], this.state = 0, this.start = void 0, this.latest = void 0, this.maxDuration = Number.MAX_VALUE, this.thresholdTimer = void 0, this.active = !1, this.updateProperties = function (e) {
            for (var t = e.active || {}, n = !1, i = 0, r = Object.keys(t); i < r.length; i++) {
                var a = u = r[i];
                if (u in c.props) {
                    var o = t[a];
                    c.props[a] !== o && (c.props[a] = o, n = !0)
                }
            }
            if (n) {
                var s = !0;
                for (var u in c.props) if (!c.props[u]) {
                    s = !1;
                    break
                }
                s ? c.active || (c.thresholdTimer = setTimeout(function () {
                    c.active = !0, c.onPropertyChange(c)
                }, c.threshold)) : (clearTimeout(c.thresholdTimer), c.active = !1), c.onPropertyChange(c)
            }
            e.meta && (c.maxDuration = e.meta.maxDuration || c.maxDuration)
        }, this.age = function () {
            return Date.now() - c.created
        }, this.isActive = function () {
            return c.active
        }, this.created = Date.now(), this.type = e, this.id = t, this.beaconId = i, this.source = n, this.element = o, this.measurements = r, this.onPropertyChange = a, e) {
            case 0:
                this.threshold = 1e3, this.props = {inview: s || !1}, this.active = s || !1;
                break;
            case 1:
                this.threshold = 2e3, this.props = {inview: s || !1, playing: !1};
                break;
            default:
                throw new Error("brandmetrics: Exposure type: ".concat(e, " not supported."))
        }
    }, r = !1, w = [], k = function (e, t) {
        t.measurements.forEach(function (e) {
        })
    }, b = function () {
        clearTimeout(i);
        for (var e = 0, t = w; e < t.length; e++) {
            var n = t[e];
            switch (n.state) {
                case 0:
                    n.isActive() && l(n);
                    break;
                case 1:
                    n.isActive() ? o(n) : x([n], !1);
                    break;
                case 3:
                    n.isActive() && l(n)
            }
        }
        f(), i = setTimeout(b, 1e3)
    }, E = function (t) {
        var e = w.filter(function (e) {
            return e.element && e.element === t
        });
        return 0 < e.length ? e[0] : void 0
    }, a = function (t) {
        var e = w.filter(function (e) {
            return e.beaconId === t
        });
        return 0 < e.length ? e[0] : void 0
    }, d = function (e, n, t, i, r, a, o) {
        var s, u, c, d, l, f, v = o ? E(o) : (c = n, 0 < (d = w.filter(function (e) {
            return e.id === c
        })).length ? d[0] : void 0);
        void 0 !== v && v.id !== n && (x([v], !0), v = void 0), void 0 === v && 0 < i.length && (v = new y(r, n, e, t, i, function (e) {
            b()
        }, o, "always" === (null === (s = p.inview) || void 0 === s ? void 0 : s.type)), w.push(v)), void 0 !== v && (f = 0 === (l = v).state ? 12 : 13, l.measurements.forEach(function (e) {
            m.postEvent(f, e.id, void 0, {pid: l.id})
        }), k(0, l), 0 === a && (v.element && h ? null == h || h.observe(v.element) : "always" !== (null === (u = p.inview) || void 0 === u ? void 0 : u.type) && (v.measurements.forEach(function (e) {
            var t = g.updateExp(e.id, n, 1, 1);
            m.postEvent(10, e.id, t, {pid: n, first: 0 === v.state ? "true" : void 0, noel: "true"})
        }), v.state = 3)))
    }, o = function (e) {
        var t = Date.now(), n = u.getIdleTimeout();
        if (e.start && e.latest && t - e.latest > n + 1) {
            var i = e.latest - e.start;
            e.start = t - i - n
        }
        e.maxDuration && e.start && t - e.start > e.maxDuration ? e.latest = e.start + 1e3 * e.maxDuration : e.latest = t
    }, l = function (e) {
        if (1 !== e.state) {
            for (var t = 0, n = e.measurements; t < n.length; t++) {
                var i = n[t], r = g.updateExp(i.id, e.id, 1, 1);
                m.postEvent(10, i.id, r, {pid: e.id, first: 0 === e.state ? "true" : void 0})
            }
            k("exposure ".concat(3 === e.state ? "reactivated" : "activated"), e), e.start = Date.now() - e.threshold, e.latest = Date.now(), e.state = 1
        }
    }, x = function (e, t) {
        e.forEach(function (n) {
            if (1 === n.state) {
                o(n);
                var i = Math.floor((n.latest - n.start) / 1e3);
                n.measurements.forEach(function (e) {
                    var t = g.updateExp(e.id, n.id, 0, i);
                    m.postEvent(11, e.id, t, {pid: n.id, ts: (i + 1).toString()})
                }), n.state = 3, k("exposure ended (".concat(i, " sec), "), n)
            }
            if (t) {
                n.element && (null == h || h.unObserve(n.element));
                var e = w.indexOf(n);
                -1 !== e && (w.splice(e, 1), k(0, n))
            }
        }), f()
    }, f = function () {
        var n = [];
        w.forEach(function (t) {
            1 === t.state && t.measurements.forEach(function (e) {
                n.push({mid: e.id, uid: t.id, start: t.start, last: t.latest})
            })
        }), g.setSession(n.filter(function (e) {
            return null !== e
        }))
    }, v = function (e) {
        g.clean(p.measurements);
        for (var t = 0, n = e; t < n.length; t++) {
            var i = n[t], r = Math.floor((i.last - i.start) / 1e3), a = g.updateExp(i.mid, i.uid, 0, r);
            m.postEvent(11, i.mid, a, {pid: i.uid, ts: r.toString()})
        }
        g.setSession([])
    }, I = function (e, t, n) {
        n = n ? 2 * n : 100, e.isReady() ? t() : setTimeout(function () {
            return I(e, t, n)
        }, n)
    }, D = function (e, t) {
        for (var n = null, i = 0, r = e; i < r.length; i++) {
            var a = r[i], o = !0;
            for (var s in a) if (a.hasOwnProperty(s)) {
                if ("ntv" === a.source && "urlPattern" === s || "meta" === s) continue;
                if (a[s] != t[s]) {
                    o = !1;
                    break
                }
            }
            if (o) {
                n = a;
                break
            }
        }
        return n
    }, T = function (e) {
        var t;
        if (e instanceof HTMLElement) t = e; else if (e && -1 === e.indexOf("/")) try {
            var n = document.querySelectorAll(u.escapeSelector("#" + e));
            t = 0 < n.length ? n[n.length - 1] : void 0
        } catch (e) {
            t = void 0
        }
        return t
    }, A = function (e) {
        var t, n = T(e.element), i = E(n), r = (t = e.key, p.measurements.filter(function (e) {
            return null != D(e.keys, t)
        }));
        if (r && 0 < r.length) {
            var a = S(e.key, r[0].uks);
            if (0 === e.type && p.hostConfiguration && c && "all" === p.hostConfiguration.collectionAtHost.type) {
                var o = r[0];
                return void c.transmitBeacon(o.id, a)
            }
            d(e.key.source, a, e.id, r, e.type, e.inviewHandling || 0, n)
        } else i && (e.key.source === i.source || 1e3 < i.age()) && x([i], !0)
    }, S = function (t, e) {
        var n;
        if (void 0 === e) switch (t.source) {
            case"apn":
                n = ["creativeId"];
                break;
            case"gpt":
                n = ["creativeId", "lineItemId"];
                break;
            case"pbj":
                n = ["dealId"];
                break;
            case"ntv":
            case"api":
            case"slot":
                n = ["key"];
                break;
            case"instant":
                n = ["pid"];
                break;
            case"gptHb":
            case"gptPb":
                n = ["creativeId", "lineItemId", "dealId"];
                break;
            case"kvl":
                n = ["creativeId", "flightId", "campaignId"];
                break;
            default:
                throw Error("Constructing id's from source: " + t.source + " is not implemented.")
        } else n = e;
        return n.map(function (e) {
            return t[e]
        }).join(":")
    }, P = function (e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var i = n[t], r = E(i.element);
            r && r.updateProperties({active: {inview: 1 === i.state}})
        }
    }, M = function (e) {
        var t, n = brandmetrics.getModule(17), i = brandmetrics.getModule(18), r = brandmetrics.getModule(16),
            a = brandmetrics.getModule(15);
        return (window.omid3p || window.oo) && i ? t = new i(e) : window.mraid && n ? t = new n(e) : window.IntersectionObserver && r ? t = new r(e) : a && (t = new a(e)), t
    }, H = function (e) {
        if (r) switch (e) {
            case 0:
                t();
                break;
            case 1:
                n()
        }
    }, t = function () {
        s.filter(function (e) {
            return e.isReady()
        }).map(function (e) {
            return e.getDisplayedSlots()
        }).forEach(function (e) {
            e.forEach(function (e) {
                return A(e)
            })
        }), s.forEach(function (e) {
            return e.setActive(!0)
        }), b()
    }, n = function () {
        clearTimeout(i), s.forEach(function (e) {
            return e.setActive(!1)
        }), x(w.filter(function () {
            return !0
        }), !1), v(g.getSession())
    }, e = function () {
        function e(e, t, n, i, r) {
            var a;
            this.storage = r, g = r, p = e, m = t, s = i, u = n;
            var o = brandmetrics.getModule(27);
            o && (c = new o), "always" !== (null === (a = e.inview) || void 0 === a ? void 0 : a.type) && (h = M({
                collection: this,
                callback: P,
                utils: n
            })), u.on({
                event: "pagestatus", handler: function (e) {
                    H(e)
                }
            })
        }

        return e.prototype.isInitiated = function () {
            return null != s && null != this.storage
        }, e.prototype.reinitialize = function () {
            n(), t(), s.forEach(function (e) {
                e.slotDisplayed(function (e) {
                    return A(e)
                })
            })
        }, e.prototype.start = function () {
            v(g.getSession()), v(g.getAndRemoveOutdatedSessions());
            for (var e = function (i) {
                I(i, function () {
                    for (var e = 0, t = i.getDisplayedSlots(); e < t.length; e++) {
                        var n = t[e];
                        A(n)
                    }
                    i.slotDisplayed(function (e) {
                        return A(e)
                    })
                })
            }, t = 0, n = s; t < n.length; t++) {
                e(n[t])
            }
            b(), r = !0
        }, e.prototype.stop = function () {
            n()
        }, e.prototype.triggerExposure = function (e) {
            var t, n = e.inviewHandling ? e.inviewHandling : 0;
            e.key ? t = {
                type: 0,
                inviewHandling: n,
                key: {source: "api", key: e.key},
                element: e.element
            } : e.mid && (t = {
                type: e.type || 0,
                inviewHandling: n,
                id: e.exposureId,
                element: e.element,
                key: {source: "instant", mid: e.mid, pid: e.pid || e.mid}
            }, function (t, e) {
                var n = p.measurements.filter(function (e) {
                    return e.id === t
                });
                if (0 < n.length) {
                    var i = n[0];
                    null === D(i.keys, e) && i.keys.push(e)
                } else p.measurements.push({id: t, keys: [e]})
            }(e.mid, t.key)), t && A(t)
        }, e.prototype.updateExposureProperties = function (e, t) {
            var n = a(e);
            n && n.updateProperties(t)
        }, e.prototype.endExposure = function (e) {
            var t;
            "string" == typeof e && (t = a(e)), t || (t = E(T(e))), t && x([t], !0)
        }, e.prototype.triggerListener = function (e) {
            for (var t = 0, n = s; t < n.length; t++) {
                var i = n[t];
                i.getType() === e.type && i.trigger(e.data)
            }
        }, e
    }();
    window.brandmetrics.register({id: 1, ctor: e})
}();
"use strict";
var __spreadArray = this && this.__spreadArray || function (e, t, r) {
    if (r || 2 === arguments.length) for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
    return e.concat(n || Array.prototype.slice.call(t))
};
!function () {
    var t, r, n = 3e4, o = /^#([0-9])/, i = [], e = !0, a = function (t) {
        for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
        i.forEach(function (e) {
            e.event === t && e.handler.apply(e, r)
        })
    }, c = function (e) {
        return !0 === e ? 1 : 2
    }, s = function (e, t, r) {
        e.addEventListener && e.addEventListener(t, r)
    }, d = function (e, t, r) {
        e.removeEventListener && e.removeEventListener(t, r)
    }, u = function () {
        document.hidden ? v() : l()
    }, l = function () {
        e || (a("pagestatus", 0), e = !0), clearTimeout(t), t = setTimeout(v, n)
    }, v = function () {
        e && (a("pagestatus", 1), e = !1)
    }, p = function () {
        var e = window;
        s(e, "load", l), s(e, "touchstart", l), s(e, "keypress", l), s(e, "scroll", l), s(e, "pagehide", v), s(e, "beforeunload", v), s(document, "visibilitychange", u), e.IntersectionObserver && (r = new IntersectionObserver(function () {
            l()
        }, {threshold: .1})).observe(document.documentElement), l()
    }, f = function (e) {
        return Math.abs((e[2] - e[0]) * (e[1] - e[3]))
    }, m = new Array, h = function (e, t, r, n) {
        if (0 < m.length && (null === e || e.isReady())) {
            var o = m.shift();
            try {
                w(e, o, r, n)
            } catch (e) {
                var i = "Error in command: ".concat(o.cmd, ", msg: ").concat(e);
                throw t.postDiagnostics(i), new Error(i)
            }
            h(e, t, r)
        }
    }, w = function (e, t, r, n) {
        if (null !== e && !e.isReady()) throw new Error("Try to execute commands before initiated");
        switch (t.cmd = void 0 === t.cmd ? "" : t.cmd.toLowerCase(), t.cmd) {
            case"_loadsurvey":
                null == e || e.triggerSurvey(t.val);
                break;
            case"_forcesurvey":
                null == e || e.triggerSurvey({mid: t.val.mid, force: !0, dtName: t.val.style});
                break;
            case"_querysurvey":
                if (void 0 === t.val || void 0 === t.val.callback) throw new Error("No callback defined");
                null == e || e.triggerSurvey({autoRender: !1, callback: t.val.callback});
                break;
            case"_addmetadata":
                var o = t.val;
                void 0 === o.value && void 0 !== o.val && (o.value = o.val), null == e || e.addMetadata(o);
                break;
            case"_setdonottrack":
                null == e || e.setDoNotTrack();
                break;
            case"_triggerexposure":
                if (void 0 === t.val) throw new Error("The command _triggerexposure needs a value.");
                null == e || e.triggerExposure(t.val);
                break;
            case"_updateexposure":
                if (void 0 === t.val) throw new Error("The command _updateexposure needs a value.");
                null == e || e.updateExposure(t.val);
                break;
            case"_endexposure":
                if (void 0 === t.val) throw new Error("The command _endexposure needs a value.");
                null == e || e.endExposure(t.val);
                break;
            case"_addeventlistener":
                null !== e ? e.addEventListener(t.val) : r.on(t.val);
                break;
            case"_adduserids":
                void 0 !== t.val && (null == e || e.addUserIds(t.val));
                break;
            case"_reinitialize":
                null == e || e.reinitialize();
                break;
            case"_triggerlistener":
                if (void 0 === t.val) throw new Error("The command _triggerlistener needs a value.");
                null == n || n.triggerListener(t.val);
                break;
            default:
                throw new Error("unknown cmd")
        }
    }, g = function () {
        function e(e) {
            this.guid = function () {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }

                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }, this.escapeSelector = function (e) {
                var t = o.exec(e);
                return t && (e = e.replace(t[0], "#\\3" + t[1] + " ")), e
            }, e.idleTimeout && (n = 1e3 * e.idleTimeout), p()
        }

        return e.prototype.getPageRect = function () {
            var e = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset,
                t = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            return [e, t, e + ("innerWidth" in window ? window.innerWidth : document.body.clientWidth), t + ("innerHeight" in window ? window.innerHeight : document.body.clientHeight)]
        }, e.prototype.getElementRect = function (e) {
            for (var t = 0, r = 0, n = e.offsetWidth, o = e.offsetHeight; null !== e.offsetParent;) t += e.offsetLeft, r += e.offsetTop, e = e.offsetParent;
            return [t, r, t + n, r + o]
        }, e.prototype.rectsIntersect = function (e, t) {
            return e[0] < t[2] && e[2] > t[0] && e[1] < t[3] && e[3] > t[1]
        }, e.prototype.rectsRatio = function (e, t) {
            var r = 0;
            if (this.rectsIntersect(e, t)) {
                var n = Math.max(e[0], t[0]), o = Math.min(e[2], t[2]), i = Math.max(e[1], t[1]),
                    a = Math.min(e[3], t[3]);
                r = f([n, i, o, a]) / f(t)
            }
            return r
        }, e.prototype.inView = function (e) {
            var t = this.getPageRect(), r = this.getElementRect(e), n = f(r) > f(t),
                o = this.inViewByRatio(this.rectsRatio(t, r)),
                i = n ? c(.25 < this.rectsRatio(r, t)) : this.inViewByRatio(this.rectsRatio(r, t));
            return c(1 === o || 1 === i)
        }, e.prototype.inViewByRatio = function (e) {
            return c(.5 <= e)
        }, e.prototype.emit = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            a.apply(void 0, __spreadArray([e], t, !1))
        }, e.prototype.on = function (e) {
            i.push(e)
        }, e.prototype.un = function (e) {
            for (var t = i.length - 1; 0 <= t; t--) {
                var r = i[t];
                r.event === e.event && r.handler === e.handler && i.splice(t, 1)
            }
        }, e.prototype.getIdleTimeout = function () {
            return n
        }, e.prototype.initProcessing = function (r, n, o) {
            var i = this;
            window.brandmetrics.cmd = window.brandmetrics.cmd || window._brandmetrics || [], window._brandmetrics || (window._brandmetrics = window.brandmetrics.cmd), window.brandmetrics.cmd.push = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return m.push.apply(m, e), h(r, n, i, o), Array.prototype.push.apply(this, e)
            }, m.push.apply(m, window.brandmetrics.cmd)
        }, e.prototype.process = function (e, t, r) {
            h(e, t, this, r)
        }, e.prototype.stop = function () {
            var e;
            e = window, d(e, "load", l), d(e, "touchstart", l), d(e, "keypress", l), d(e, "scroll", l), d(e, "pagehide", v), d(e, "beforeunload", v), d(document, "visibilitychange", u), r && r.unobserve(document.documentElement), clearTimeout(t)
        }, e
    }();
    window.brandmetrics.register({id: 2, ctor: g})
}();
"use strict";
var __assign = this && this.__assign || function () {
    return (__assign = Object.assign || function (t) {
        for (var n, e = 1, o = arguments.length; e < o; e++) for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        return t
    }).apply(this, arguments)
}, __spreadArray = this && this.__spreadArray || function (t, n, e) {
    if (e || 2 === arguments.length) for (var o, r = 0, i = n.length; r < i; r++) !o && r in n || (o || (o = Array.prototype.slice.call(n, 0, r)), o[r] = n[r]);
    return t.concat(o || Array.prototype.slice.call(n))
};
!function () {
    var d, a, n, l, s, c, r = {ANSWER: {}, EXPOSURE: {}}, p = function (t, n) {
        var e = [];
        for (var o in n = n || {}, c) if (c.hasOwnProperty(o) && (0 === t.length || 0 <= t.indexOf(o)) || n.hasOwnProperty(o)) {
            var r = c[o], i = n[o] || r.value || (void 0 !== r.func ? r.func() : void 0);
            null != i && "" !== i && e.push("".concat(o, "=").concat(u(i)))
        }
        return e.join("&")
    }, f = function (t) {
        return !(t && n && (!n || -1 === n.indexOf(t)))
    }, v = function (t) {
        var n = [];
        for (var e in r[t]) if (r[t].hasOwnProperty(e)) {
            var o = r[t][e];
            null != o && "" !== o && n.push("".concat(e, "=").concat(u(o)))
        }
        return n.join("&")
    }, u = function (t) {
        return "function" == typeof encodeURIComponent ? encodeURIComponent(t) : window.escape(t)
    }, g = function () {
        if (window.sessionStorage && "Session" === d.logConfiguration.level) {
            var t = "_bm_sessid", n = window.sessionStorage.getItem(t);
            n ? s = n : s && window.sessionStorage.setItem(t, s)
        }
        return s || void 0
    }, m = function (t) {
        if ("file:" === window.location.protocol) return "localhost";
        var n = document.location.ancestorOrigins && 0 < document.location.ancestorOrigins.length ? document.location.ancestorOrigins : [window.document.location.href],
            e = n[n.length - 1], o = document.createElement("a");
        if (o.href = e, t) {
            var r = e.match(/:\/\/(.*)\/.*/);
            return r ? r[1] : e
        }
        return o.host || ""
    }, y = function (t, n) {
        (new Image).src = "".concat(d.baseUrl, "/").concat(t, "?").concat(n)
    }, i = function (t, n, e, o) {
        o = o || {};
        var r = "";
        if (void 0 !== e) {
            for (var i = 0, a = 0, s = e.pixels; a < s.length; a++) {
                i += s[a].exp
            }
            r = "" + i
        }
        var c, u = f(n) ? null == l ? void 0 : l.join(",") : void 0;
        return 10 === t && u && (c = v("EXPOSURE")), p([], {
            siteid: "None" !== d.logConfiguration.level ? d.siteId : void 0,
            test: "true" === o.test ? "true" : void 0,
            forced: "true" === o.forced ? "true" : void 0,
            dtname: o.dtname,
            pid: o.pid,
            eid: t.toString(),
            meta: c,
            ts: o.ts,
            state: r,
            mid: n,
            uid: u,
            first: "true" === o.first ? "true" : void 0,
            noel: "true" === o.noel ? "true" : void 0,
            custom: function (t) {
                if ("None" !== d.logConfiguration.level && d.logConfiguration.customScript && URLSearchParams) try {
                    var n = new Function("event", d.logConfiguration.customScript)(t),
                        e = new URLSearchParams(n).toString();
                    return encodeURIComponent(e)
                } catch (t) {
                    return
                }
            }(t)
        })
    }, h = function (n) {
        a ? a.lookup(function (t) {
            l = t && Array.isArray(t) ? t : t ? [t] : void 0, n()
        }) : n()
    }, t = function () {
        function t(t, n, e) {
            var o, r, i;
            a = e, "Session" === (d = t).logConfiguration.level && (s = n.guid()), "none" !== (null === (o = d.userMode) || void 0 === o ? void 0 : o.type) && this.RestrictSingleUserMesurement(null === (i = null === (r = d.userMode) || void 0 === r ? void 0 : r.conf) || void 0 === i ? void 0 : i.measurements), l = d.userIds, c = {
                siteid: {value: d.siteId},
                toploc: {
                    func: function () {
                        return m(!1)
                    }
                },
                path: {
                    func: function () {
                        return "None" !== d.logConfiguration.level ? m(!0) : void 0
                    }
                },
                test: {value: d.isTest ? "true" : void 0},
                qdata: {},
                mid: {},
                pid: {},
                meta: {},
                state: {},
                ms: {},
                forced: {},
                msg: {},
                eid: {},
                ts: {},
                rt: {},
                rnd: {
                    func: function () {
                        return Math.floor(9999001 * Math.random() + 1e3).toString()
                    }
                },
                adkey: {},
                dtname: {},
                slang: {value: d.language},
                sname: {},
                sit: {},
                uid: {value: l ? l.join(",") : void 0},
                tpl: {},
                first: {},
                noel: {},
                sessid: {
                    func: function () {
                        return g()
                    }
                },
                clientsize: {},
                custom: {},
                wrapper: {}
            }
        }

        return t.prototype.GetBaseUrl = function () {
            return d.baseUrl
        }, t.prototype.GetTemplateUrl = function (t, n, e, o, r) {
            var i = {mid: t, wrapper: d.scriptType.toString()};
            n || r ? (i.dtname = n, i.slang = r) : e && (i.tpl = e), o && (i.clientsize = o);
            var a = p(["siteid", "toploc", "test", "slang"], i);
            return "".concat(d.cdnUrl ? d.cdnUrl : d.baseUrl, "/").concat("s.html", "?").concat(a)
        }, t.prototype.upsertParam = function (n, e, t) {
            t || (t = ["ANSWER"]), t.forEach(function (t) {
                r[t][n] = e
            })
        }, t.prototype.postAd = function (t, n, e, o) {
            var r = p([], {mid: t, adkey: n}), i = new XMLHttpRequest;
            i.open("POST", "".concat(d.baseUrl, "/").concat("ac", "?").concat(r), !0), i.setRequestHeader("Content-Type", "application/json"), i.send(JSON.stringify({
                content: e,
                key: o
            }))
        }, t.prototype.postAnswer = function (o, r, i, a, s, c) {
            h(function () {
                var t = "";
                if (void 0 !== s) {
                    var n = Math.max.apply(Math, __spreadArray(__spreadArray([], s.pixels.map(function (t) {
                        return t.lastexp
                    }), !1), [-1], !1));
                    t = s.uid + ";" + s.nbrOfSurveys + ";" + s.pixels.map(function (t) {
                        return "".concat(t.uid, ",").concat(t.exp, ",").concat(t.time)
                    }).join(";") + ";" + n
                }
                var e = p([], {
                    test: "true" === (c = c || {}).test ? "true" : void 0,
                    pid: c.pid,
                    forced: "true" === c.forced ? "true" : void 0,
                    dtname: c.dtname,
                    mid: o,
                    qdata: r,
                    state: t,
                    meta: v("ANSWER"),
                    sname: "" !== i ? i : void 0,
                    sit: a,
                    uid: f(o) ? null == l ? void 0 : l.join(",") : void 0
                });
                y("a", e)
            })
        }, t.prototype.postDiagnostics = function (t) {
            if (d.logConfiguration.errors) {
                var n = p(["rnd"], {msg: t});
                y("diagnostics", n)
            }
        }, t.prototype.postOptout = function () {
            if (void 0 !== d.siteId) {
                var t = p(["siteid"]);
                y("optout", t)
            }
        }, t.prototype.postEvent = function (n, e, o, r) {
            h(function () {
                var t = i(n, e, o, r);
                y("i", t)
            })
        }, t.prototype.GetRedirectUrl = function (t) {
            var n = p([], {siteid: d.siteId, rt: t});
            return "".concat(d.baseUrl, "/").concat("r", "?").concat(n)
        }, t.prototype.ConfigureDefaultParams = function (t) {
            c = __assign(__assign({}, c), t)
        }, t.prototype.RestrictSingleUserMesurement = function (t) {
            n = t
        }, t.prototype.ConfigureSingleUsers = function (t) {
            l = t
        }, t.prototype.ExecuteConfigRequest = function (e, o, r, i, a, s) {
            void 0 === o && (o = !1), void 0 === r && (r = !1), h(function () {
                var t = function (t, n, e, o, r) {
                    void 0 === n && (n = !1), void 0 === e && (e = !1);
                    var i = "";
                    if (0 < r.length) for (var a = 0, s = r; a < s.length; a++) {
                        var c = s[a];
                        i = i + (c.uid + ";") + c.mid + ";" + c.pixels.map(function (t) {
                            return "".concat(t.uid, ",").concat(t.exp)
                        }).join(";") + "|"
                    }
                    var u = p([], {
                        test: n ? "true" : void 0,
                        forced: e ? "true" : void 0,
                        dtname: o,
                        mid: null === t ? void 0 : t,
                        ms: i,
                        uid: f(t) ? null == l ? void 0 : l.join(",") : void 0,
                        slang: d.language
                    });
                    ret = 
                   console.log("value,", "".concat(d.baseUrl, "/").concat("c.js", "?").concat(u));
                   return "".concat(d.baseUrl, "/").concat("c.js", "?").concat(u);
                    
                }(e, o, r, i, a);
                if ("xhr" === d.dataRequestType) {
                    var n = new XMLHttpRequest;
                    n.overrideMimeType("application/json"), n.open("GET", t + "&json", !0), n.withCredentials = !0, n.onload = function () {
                        var t = "" !== n.responseText ? JSON.parse(n.responseText) : void 0;
                        s(t)
                    }, n.send(null)
                } else !function (t, n) {
                    var e = document.createElement("script");
                    e.type = "text/javascript", e.async = !0, e.src = t, e.onload = n || null;
                    var o = document.getElementsByTagName("script")[0];
                    if (null == o || null == o.parentNode) throw new Error("can't find script tag");
                    o.parentNode.insertBefore(e, o)
                }(t, function () {
                    var t = brandmetrics.getModule(-1);
                    s(t)
                })
            })
        }, t
    }();
    window.brandmetrics.register({id: 3, ctor: t})
}();
"use strict";
var __assign = this && this.__assign || function () {
    return (__assign = Object.assign || function (e) {
        for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
    }).apply(this, arguments)
};
!function () {
    var c, u, l, f, y, i, m, g = "created", w = !1, v = !1, h = [], _ = null,
        o = window.IntersectionObserver ? new IntersectionObserver(function (e) {
            .5 <= e[0].intersectionRatio && void 0 === i ? i = setTimeout(function () {
                if (!w) {
                    var e = y ? y.updateSrv(c.measurementId, !1) : void 0;
                    l.postEvent(2, c.measurementId, e, c.props), w = !0
                }
                i = setTimeout(function () {
                    if (!v) {
                        var e = y ? y.state()[c.measurementId] : void 0;
                        l.postEvent(5, c.measurementId, e, c.props), v = !0
                    }
                }, 4e3)
            }, 1e3) : void 0 !== i && (clearTimeout(i), i = void 0)
        }, {threshold: [0, .5]}) : void 0, r = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        }, a = function (e) {
            try {
                if (void 0 !== e.data.req && "get" === e.data.req && ("created" === g || "completed" !== g && "closed" !== g && ("dfp" === c.displayOption.type || "apn" === c.displayOption.type))) {
                    g = "requested";
                    var t = e.data.slang, n = e.data.dtname, i = e.data.clientsize;
                    (n || t) && (c.props || (c.props = {}), c.props.dtname = n, c.props.slang = t);
                    var o = {
                        key: e.data.key,
                        iframeCss: c.displayOption.iframeCss,
                        selector: c.displayOption.selector,
                        url: l.GetTemplateUrl(c.measurementId, n, c.templateId, i),
                        mid: c.measurementId
                    };
                    return h.push(e.data.key), e.source.postMessage(o, "*"), void (_ = {origin: e.source, key: e.data.key})
                }
                var r = e.data.message || e.data;
                if (!(e.data.origin === l.GetBaseUrl() || "null" === e.origin || e.data.key && -1 !== h.indexOf(e.data.key))) return void ("string" == typeof e.data && -1 < e.data.indexOf(c.measurementId) && l.postDiagnostics("Message origin not expected " + e.origin));
                var s = u.DeserializeXFrameMessage(r, c.measurementId);
                if (null === s) return;
                var a = void 0 === y ? void 0 : y.state()[c.measurementId];
                switch (s.type) {
                    case"rendered":
                        "answered" === g || "closed" === g ? m.close() : "rendered" !== g && (g = "rendered", l.postEvent(1, s.mid, a, c.props), !s.surveyType || "2" !== s.surveyType && "3" !== s.surveyType ? b(m.element()) : S(m.element()), m.resize(s.size), f.emit("surveyrendered", {mid: s.mid}));
                        break;
                    case"resize":
                        m.resize(s.size);
                        break;
                    case"answer":
                        var d = v ? 5 : w ? 1 : 0, p = y ? y.updateSrv(c.measurementId, !0) : void 0;
                        l.postAnswer(s.mid, s.answer, s.surveyName, d, p, c.props), f.emit("surveyanswered", {
                            mid: s.mid,
                            answers: s.answer
                        });
                        break;
                    case"completed":
                        g = "completed", l.postEvent(3, s.mid, a, c.props);
                        break;
                    case"closed":
                        s.timedout || l.postEvent(4, s.mid, a, c.props), m.close(), f.emit("surveyclosed", {mid: s.mid});
                        break;
                    case"redirect":
                        window.location.href = l.GetRedirectUrl(s.target);
                        break;
                    case"updateStyle":
                        m.updateStyle(s.style);
                        break;
                    case"requestClientSize":
                        m.requestClientSize(s.mid);
                        break;
                    case"surveyinview":
                        1 === s.time ? (a = y ? y.updateSrv(c.measurementId, !1) : void 0, l.postEvent(2, s.mid, a, c.props), w = !0) : 1 < s.time && (l.postEvent(5, s.mid, a, c.props), v = !0)
                }
            } catch (e) {
                l.postDiagnostics("Error in handleMessage, " + e)
            }
        }, b = function (e) {
            o && e && !v && o.observe(e)
        }, S = function (t) {
            if (void 0 !== t) {
                var e = "";
                for (var n in r) "" !== t.style.getPropertyValue(n) && (e = r[n]);
                "" !== e && t.addEventListener(e, function () {
                    var e;
                    t.clientWidth < 150 || t.clientHeight < 150 ? (e = t, o && e && (clearTimeout(i), i = void 0, o.unobserve(e))) : b(t)
                }, !1)
            }
        }, t = function () {
            var e, t = c, n = document.createElement("iframe");
            "inject" === t.displayOption.type && t.displayOption.sandboxProps ? n.sandbox.value = t.displayOption.sandboxProps + " allow-scripts" : n.sandbox.value = "allow-scripts", n.setAttribute("data-bmsurvey", ""), n.height = "0", "inject" === c.displayOption.type && (e = c.displayOption.displayTypeName), n.style.cssText = c.displayOption.iframeCss;
            var i = E();
            return n.src = l.GetTemplateUrl(t.measurementId, e, t.templateId, i), n.scrolling = "no", n
        }, s = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, d = function (e, t, n) {
            if (void 0 !== window.apntag && window.apntag.loaded) {
                var i = window.apntag, o = {};
                n ? (o[e] = t, i.setKeywords(n, o)) : i.anq.push(function () {
                    (o = i.requests ? i.requests.keywords : {})[e] = t, i.setPageOpts({keywords: o})
                })
            } else setTimeout(function () {
                d(e, t, n)
            }, 200)
        }, n = function (t) {
            var n = window.apntag;
            n.anq.push(function () {
                var e = n.requests ? n.requests.keywords : {};
                delete e[t], n.setPageOpts({keywords: e})
            })
        }, p = function (t, e) {
            if (void 0 !== window.googletag && window.googletag.apiReady) {
                var n = window.googletag;
                if (t) {
                    var i = n.pubads().getSlots().filter(function (e) {
                        return e.getSlotElementId() === t
                    })[0];
                    i && i.setTargeting(e, "yes")
                } else n.pubads().setTargeting(e, "yes"), n && n.pubads && n.pubads().getTargetingKeys
            } else setTimeout(function () {
                p(t, e)
            }, 200)
        }, T = function (e) {
            window.googletag && window.googletag.apiReady && window.googletag.pubads().clearTargeting(e)
        }, z = function (e, t) {
            void 0 !== window.adhese ? window.adhese.registerRequestParameters(e, t) : setTimeout(function () {
                z(e, t)
            }, 200)
        }, k = function (e) {
            if (void 0 !== window.HZ) {
                var t = window.HZ;
                t.hsc.showBrandLiftSurvey(t.hsc.PARTNER_ID.BRAND_METRICS, e)
            } else setTimeout(function () {
                k(e)
            }, 200)
        }, E = function () {
            var e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            return "".concat(t, ",").concat(e)
        }, O = function () {
            function e(e) {
                var t = this;
                this._dc = e, f.on({
                    event: "surveyanswered", handler: function () {
                        T(t._dc.targetKey || "brandmetrics-survey")
                    }
                })
            }

            return e.prototype.state = function () {
                return g
            }, e.prototype.resize = function (e) {
                _ && _.origin.postMessage({key: _.key, message: "resize|size=" + e}, "*")
            }, e.prototype.element = function () {
            }, e.prototype.close = function () {
                g = "closed"
            }, e.prototype.updateStyle = function () {
            }, e.prototype.requestClientSize = function (e) {
            }, e.prototype.show = function () {
                var e = this._dc.targetKey || "brandmetrics-survey", t = this._dc.adSlot;
                p(t, e)
            }, e
        }(), I = function () {
            function e(e) {
                var t = this;
                this._dc = e, f.on({
                    event: "surveyanswered", handler: function () {
                        n(t._dc.targetKeyword || "brandmetrics-survey")
                    }
                })
            }

            return e.prototype.state = function () {
                return g
            }, e.prototype.resize = function () {
            }, e.prototype.element = function () {
            }, e.prototype.close = function () {
                g = "closed"
            }, e.prototype.updateStyle = function () {
            }, e.prototype.requestClientSize = function (e) {
            }, e.prototype.show = function () {
                var e = this._dc.targetKeyword || "kw", t = this._dc.targetValue || "brandmetrics-survey",
                    n = this._dc.adSlot;
                d(e, t, n)
            }, e
        }(), q = function () {
            function e(e) {
                this._dc = e
            }

            return e.prototype.state = function () {
                return g
            }, e.prototype.resize = function () {
            }, e.prototype.element = function () {
            }, e.prototype.close = function () {
                g = "closed"
            }, e.prototype.updateStyle = function () {
            }, e.prototype.requestClientSize = function (e) {
            }, e.prototype.show = function () {
                this._dc.targetKeyword && this._dc.targetValue && z(this._dc.targetKeyword, this._dc.targetValue)
            }, e
        }(), C = function () {
            function e(e) {
                this._mid = e
            }

            return e.prototype.state = function () {
                return g
            }, e.prototype.resize = function () {
            }, e.prototype.element = function () {
            }, e.prototype.close = function () {
                g = "closed"
            }, e.prototype.updateStyle = function () {
            }, e.prototype.requestClientSize = function (e) {
            }, e.prototype.show = function () {
                this._mid && k(this._mid)
            }, e
        }(), j = function () {
            function e(e, t) {
                var n = this;
                this._defaultKey = "bmSurvey", this._dc = e, this._mid = t, f.on({
                    event: "surveyanswered",
                    handler: function () {
                        var e = n._dc.targetKeyword || n._defaultKey;
                        delete window[e]
                    }
                })
            }

            return e.prototype.state = function () {
                return g
            }, e.prototype.resize = function (e) {
                _ && _.origin.postMessage({key: _.key, message: "resize|size=" + e}, "*")
            }, e.prototype.element = function () {
            }, e.prototype.close = function () {
                g = "closed"
            }, e.prototype.updateStyle = function () {
            }, e.prototype.requestClientSize = function (e) {
            }, e.prototype.show = function () {
                var e = this._dc.targetKeyword || this._defaultKey, t = this._dc.targetValue || this._mid;
                window[e] = t
            }, e
        }(), K = function () {
            function e(e) {
                this._dc = e, this._iframe = t()
            }

            return e.prototype.state = function () {
                return g
            }, e.prototype.resize = function (e) {
                var t = function (e) {
                    var t = null, n = null;
                    if (0 < e.indexOf(",")) {
                        var i = e.split(",");
                        t = i[0], n = i[1]
                    } else t = e;
                    return {height: t, width: n}
                }(e);
                this._iframe.height = t.height + "px", t.width && (this._iframe.width = t.width + "px")
            }, e.prototype.element = function () {
                return this._iframe
            }, e.prototype.close = function () {
                g = "closed", this._iframe.style.display = "none"
            }, e.prototype.updateStyle = function (e) {
                for (var t = 0, n = e.split(";"); t < n.length; t++) {
                    var i = n[t];
                    if ("" !== i.trim()) {
                        var o = i.split(":");
                        this._iframe.style.setProperty(o[0].trim(), o[1].trim())
                    }
                }
            }, e.prototype.requestClientSize = function (e) {
                this._iframe.contentWindow && this._iframe.contentWindow.postMessage("".concat(e, "|clientsize|").concat(E()), "*")
            }, e.prototype.show = function () {
                if ("block" !== this._iframe.style.display) {
                    var e = this._dc.element || function (e) {
                        var t = e.selector;
                        if (!t) throw new Error("No targetElement configured");
                        var n = (!0 === e.onTop ? window.top.document : window.document).querySelectorAll(f.escapeSelector(t));
                        if (n.length <= 0) throw new Error("can't find target element: " + t);
                        if (1 < n.length) for (var i = 0; i <= n.length; i++) if (s(n[i])) return n[i];
                        return n[n.length - 1]
                    }(this._dc);
                    null == e.querySelector("iframe[data-bmsurvey]") && (!function (e, t, n) {
                        var i = t.offsetWidth;
                        e.style.cssText = n.iframeCss.replace("{{targetwidth}}", i.toString());
                        var o = !1;
                        try {
                            "" != ("before" === n.injectType ? "beforebegin" : "after" === n.injectType ? "afterend" : "prepend" === n.injectType ? "afterbegin" : "append" === n.injectType ? "beforeend" : "") && (t.insertAdjacentElement("beforebegin", e), o = !0)
                        } catch (e) {
                        }
                        !1 === o && t.appendChild(e)
                    }(this._iframe, e, this._dc), this._iframe.style.display = "block")
                }
            }, e
        }();
    window.brandmetrics.register({
        id: 4, ctor: function (e, t, n, i) {
            l = e, f = n, y = i, c = t, u = new (brandmetrics.getModule(21));
            var o = c.displayOption;
            if ("vpaid" === o.type) {
                var r = brandmetrics.getModule(25), s = getVPAIDAd().getSlot();
                s && s.ownerDocument && s.ownerDocument.defaultView && s.ownerDocument.defaultView.addEventListener("message", a, !1), m = new r(o, new K(__assign(__assign({}, o), {
                    type: "inject",
                    element: getVPAIDAd().getSlot()
                })), f)
            } else "inject" === c.displayOption.type && !0 === c.displayOption.onTop ? window.top.addEventListener("message", a, !1) : window.addEventListener("message", a, !1), m = "dfp" === o.type ? new O(o) : "apn" === o.type ? new I(o) : "adh" === o.type ? new q(o) : "houzz" === o.type ? new C(c.measurementId) : "js" === o.type ? new j(o, c.measurementId) : "inject" === o.type ? new K(o) : {
                state: function () {
                    return "failed"
                }, resize: function () {
                }, element: function () {
                }, show: function () {
                }, close: function () {
                }, updateStyle: function () {
                }, requestClientSize: function () {
                }
            };
            return m
        }
    })
}();
"use strict";
!function () {
    var s, f, h, i, m = "__bm_m", u = "__bm_s", v = {}, o = !1, y = function (e) {
        if (void 0 === e && (e = !1), o || e) {
            var t = h.getItem(m), r = {};
            try {
                r = null != t ? f.DeserializeMeasurements(t) : {}
            } catch (e) {
                h.removeItem(m)
            }
            v = r
        }
        return v
    }, t = function () {
        return o ? u + "#" + i : u
    }, a = function () {
        function e() {
            this._data = {}, this.length = 0
        }

        return e.prototype.calcLength = function () {
            this.length = Object.keys(this._data).length
        }, e.prototype.getItem = function (e) {
            return this._data.hasOwnProperty(e) ? this._data[e] : null
        }, e.prototype.setItem = function (e, t) {
            var r = this._data[e] = String(t);
            return this.calcLength(), r
        }, e.prototype.removeItem = function (e) {
            var t = delete this._data[e];
            return this.calcLength(), t
        }, e.prototype.clear = function () {
            return this._data = {}, this.calcLength(), this._data
        }, e.prototype.key = function (e) {
            var t = Object.keys(this._data);
            return t.length < e ? t[e] : null
        }, e
    }(), e = function () {
        function e(e, t, r) {
            f = new (brandmetrics.getModule(21)), s = t, o = r;
            var n = "__bm_ls_check";
            try {
                localStorage.setItem(n, n), localStorage.removeItem(n), h = localStorage
            } catch (e) {
                h = new a
            }
            v = y(!0), i = Math.floor(1e6 * Math.random())
        }

        return e.prototype.clean = function (e) {
            var r = {}, n = y(), i = 0, t = function (t) {
                n.hasOwnProperty(t) && (i++, void 0 !== e.filter(function (e) {
                    return e.id === t
                })[0] && (r[t] = n[t]))
            };
            for (var o in n) t(o);
            (0 !== e.length && i - e.length == 1 || (i - e.length) / i <= .2) && (n = r);
            var a = Date.now();
            for (var o in n) if (n.hasOwnProperty(o)) {
                for (var s = n[o], u = Math.max(s.created, s.lastSurvey), l = 0, p = s.pixels; l < p.length; l++) {
                    var c = p[l];
                    u = Math.max(u, c.lastexp)
                }
                var d = a - u;
                d < a && 24192e5 < d && delete n[o]
            }
            v = n, h.setItem(m, f.SerializeMeasurements(n))
        }, e.prototype.state = function () {
            return y()
        }, e.prototype.updateExp = function (e, t, r, n) {
            var i = y(), o = i[e];
            void 0 === o && (o = {
                mid: e,
                uid: s.guid(),
                isAnswered: !1,
                lastSurvey: 0,
                nbrOfSurveys: 0,
                created: Date.now(),
                pixels: []
            }, i[e] = o);
            var a = o.pixels.filter(function (e) {
                return e.uid === t
            })[0];
            return void 0 === a && (a = {
                uid: t,
                exp: 0,
                lastexp: 0,
                time: 0
            }, o.pixels.push(a)), a.exp = a.exp + r, a.time = a.time + n, a.lastexp = Date.now(), h.setItem(m, f.SerializeMeasurements(i)), o
        }, e.prototype.updateSrv = function (t, e) {
            var r = y(), n = r[t];
            void 0 === n && (n = {
                mid: t,
                uid: s.guid(),
                created: Date.now(),
                isAnswered: !1,
                lastSurvey: 0,
                nbrOfSurveys: 0,
                pixels: []
            }, r[t] = n), !0 === e ? n.isAnswered = !0 : (n.lastSurvey = Date.now(), n.nbrOfSurveys = n.nbrOfSurveys + 1), h.setItem(m, f.SerializeMeasurements(r));
            for (var i = function (t) {
                var e = n.pixels.filter(function (e) {
                    return e.uid === t.uid
                })[0];
                void 0 === e && (e = {
                    uid: t.uid,
                    exp: 0,
                    lastexp: 0,
                    time: 0
                }, n.pixels.push(e)), e.lastexp = t.last, e.exp++, e.time += (t.last - t.start) / 1e3
            }, o = 0, a = this.getSession().filter(function (e) {
                return e.mid === t
            }); o < a.length; o++) {
                i(a[o])
            }
            return n
        }, e.prototype.getTemp = function () {
            return []
        }, e.prototype.setTemp = function (e) {
            throw new Error("Method not implemented." + e)
        }, e.prototype.getSession = function () {
            var e = h.getItem(t());
            return null != e ? f.DeserializeSessions(e) : []
        }, e.prototype.setSession = function (e) {
            h.setItem(t(), f.SerializeSessions(e))
        }, e.prototype.getAndRemoveOutdatedSessions = function () {
            var a = [];
            if (o) for (var e = function (e, t) {
                var r = h.key(e);
                if (0 === (null == r ? void 0 : r.indexOf(u + "#"))) {
                    var n = f.DeserializeSessions(h.getItem(r)), i = (new Date).getTime(), o = !0;
                    n.forEach(function (e) {
                        i - e.last < 3e5 && (o = !1)
                    }), o && (a.push.apply(a, n), h.removeItem(r))
                }
            }, t = 0, r = h.length; t < r; t++) e(t);
            return a
        }, e
    }();
    window.brandmetrics.register({id: 5, ctor: e})
}();
"use strict";
!function () {
    var o = {exposedEvent: "slotRenderEnded"}, i = function (t) {
        var e = t, n = t.getResponseInformation(), o = {
            source: "gpt",
            advertiserId: n && n.advertiserId,
            campaignId: n && n.campaignId,
            creativeId: "" + (n && n.creativeId),
            lineItemId: "" + (n && n.lineItemId)
        }, i = {type: 0, key: o, element: e.getSlotElementId()};
        return i
    }, t = function () {
        function t(t) {
            this.active = !0, o = "gpt" === t.type && t.conf ? t.conf : o
        }

        return t.prototype.isReady = function () {
            var t = !(!window.googletag || !window.googletag.apiReady);
            return t
        }, t.prototype.getDisplayedSlots = function () {
            var t = window.googletag.pubads().getSlots().filter(function (t) {
                return t.getResponseInformation()
            }).map(function (t) {
                return i(t)
            });
            return t
        }, t.prototype.slotDisplayed = function (e) {
            var n = this;
            window.googletag.pubads().addEventListener(o.exposedEvent, function (t) {
                n.active && e(i(t.slot))
            })
        }, t.prototype.setActive = function (t) {
            this.active = t
        }, t.prototype.trigger = function (t) {
        }, t.prototype.getType = function () {
            return "gpt"
        }, t
    }();
    window.brandmetrics.register({id: 8, ctor: t})
}();
"use strict";
!function () {
    var e, u, n, i = [], r = function (t) {
        e && e(t)
    }, o = function (o) {
        var t = i.filter(function (t) {
            var e, n, i = (e = t.element, 0 < (n = o.filter(function (t) {
                return t.target === e
            })).length ? n[0] : null);
            if (i) {
                var r = u.inViewByRatio(i.intersectionRatio);
                if (2 === r && i.isIntersecting && i.rootBounds && i.boundingClientRect) i.rootBounds.height * i.rootBounds.width < i.boundingClientRect.height * i.boundingClientRect.width && (r = u.inView(t.element));
                if (t.state !== r) return t.state = r, !0
            }
            return !1
        });
        r(t)
    }, t = function () {
        function t(t) {
            e = t.callback, u = t.utils, n = new IntersectionObserver(o, {threshold: [0, .1, .2, .3, .4, .5]})
        }

        return t.prototype.observe = function (t) {
            if (!this.isWatching(t)) {
                var e = {element: t, state: u.inView(t)};
                i.push(e), n.observe(t), r([e])
            }
        }, t.prototype.unObserve = function (e) {
            i = i.filter(function (t) {
                return t.element !== e
            }), n.unobserve(e)
        }, t.prototype.isWatching = function (e) {
            return 0 < i.filter(function (t) {
                return t.element === e
            }).length
        }, t
    }();
    window.brandmetrics.register({id: 16, ctor: t})
}();
"use strict";
!function () {
    var u, l = function (t, e) {
        var i;
        void 0 === e && (e = !0);
        var n, s, o, r, a = u.options;
        if ("auto" === a.startMode.type || "sessionSubsequent" === a.startMode.type && (n = a.startMode, s = "__bmsessionviews", o = 1, null !== (r = sessionStorage.getItem(s)) && (o = parseInt(r, 10) + 1), sessionStorage.setItem(s, o.toString()), o > n.conf.count)) {
            var c = !function (t) {
                for (var e = window.location.href, i = 0, n = t; i < n.length; i++) {
                    var s = n[i], o = new RegExp(s);
                    if (e.match(o)) return !0
                }
                return !1
            }((null === (i = a.startMode.conf) || void 0 === i ? void 0 : i.excluded) || []);
            if (c && a.startMode.conf && a.startMode.conf.requiredElement) document.querySelector(u.utils.escapeSelector(a.startMode.conf.requiredElement)) || (c = !1, e && setTimeout(function () {
                l(t, !1)
            }, 1e3));
            c ? t.triggerSurvey() : u.utils.emit("surveyloaded", {available: !1, showed: !1})
        }
    }, t = function () {
        function t(t) {
            this.isInitiated = !1, u = t
        }

        return t.prototype.start = function () {
            var t = this, e = u.bm, i = u.collection, n = u.callback;
            if (this.isInitiated) n(); else if (u.utils.initProcessing(e, u.client, i), i) {
                i.start();
                var s = function () {
                    i.isInitiated() ? (t.isInitiated = !0, u.utils.process(e, u.client, i), l(e), n()) : setTimeout(function () {
                        return s()
                    }, 100)
                };
                s()
            } else this.isInitiated = !0, u.utils.process(e, u.client, i), l(e), n()
        }, t
    }();
    window.brandmetrics.register({id: 19, ctor: t})
}();
"use strict";
!function () {
    var e = function () {
        function e() {
        }

        return e.prototype.SerializeMeasurements = function (e) {
            for (var r = "", t = 0, n = 0, s = Object.keys(e); n < s.length; n++) {
                var i = s[n];
                r += 0 !== t ? "¤" : "";
                var a = e[i];
                r += i + "|" + a.isAnswered + "|" + a.lastSurvey + "|" + a.nbrOfSurveys + "|" + a.uid + "|" + a.created;
                for (var u = 0, l = a.pixels; u < l.length; u++) {
                    var o = l[u];
                    r += ";" + o.exp + "|" + o.lastexp + "|" + o.time + "|" + o.uid
                }
                t++
            }
            return r
        }, e.prototype.DeserializeMeasurements = function (e) {
            var i = {};
            if (e && "" !== e) for (var a, r = 0, t = e.split("¤"); r < t.length; r++) {
                t[r].split(";").forEach(function (e, r) {
                    if (e && "" !== e) {
                        var t = e.split("|");
                        if (0 === r) {
                            if (5 !== t.length && 6 !== t.length) throw new Error("The string cannot be deserialized");
                            a = {
                                mid: t[0],
                                isAnswered: (s = t[1], "true" === s.toLowerCase()),
                                lastSurvey: parseInt(t[2], 10),
                                nbrOfSurveys: parseInt(t[3], 10),
                                uid: t[4],
                                created: 6 === t.length ? parseInt(t[5], 10) : Date.now(),
                                pixels: []
                            }, i[a.mid] = a
                        } else {
                            if (4 !== t.length) throw new Error;
                            var n = {
                                exp: parseInt(t[0], 10),
                                lastexp: parseInt(t[1], 10),
                                time: parseInt(t[2], 10),
                                uid: t[3]
                            };
                            a.pixels.push(n)
                        }
                    }
                    var s
                })
            }
            return i
        }, e.prototype.SerializeSessions = function (e) {
            var t = "";
            return e.forEach(function (e, r) {
                t += 0 !== r ? ";" : "", t += e.last + "|" + e.mid + "|" + e.start + "|" + e.uid
            }), t
        }, e.prototype.DeserializeSessions = function (e) {
            var r = [];
            if (e && "" !== e) for (var t = 0, n = e.split(";"); t < n.length; t++) {
                var s = n[t].split("|");
                if (4 !== s.length) throw new Error("The string cannot be deserialized");
                r.push({last: parseInt(s[0], 10), mid: s[1], start: parseInt(s[2], 10), uid: s[3]})
            }
            return r
        }, e.prototype.DeserializeXFrameMessage = function (e, r) {
            if ("string" != typeof e || r && -1 === e.indexOf(r)) return null;
            var t = e.split("|"), n = t[1];
            switch (n) {
                case"closed":
                    return {mid: t[0], type: n, timedout: "true" === t[2]};
                case"completed":
                    return {mid: t[0], type: n};
                case"rendered":
                    var s = t[2], i = s.substring(s.lastIndexOf("=") + 1), a = "";
                    if (3 < t.length) {
                        var u = t[3];
                        a = u.substring(u.lastIndexOf("=") + 1)
                    }
                    return {mid: t[0], type: n, size: i, surveyType: a};
                case"resize":
                    return {mid: t[0], type: n, size: e.substring(e.lastIndexOf("=") + 1)};
                case"answer":
                    var l = function (e, r) {
                        if (e) {
                            for (var t = -1, n = 0; n < e.length; n++) if (e[n].substring(0, r.length) === r) {
                                t = n;
                                break
                            }
                            if (0 <= t) {
                                var s = e[t];
                                return s.substring(s.lastIndexOf("=") + 1)
                            }
                        }
                        return ""
                    }(t, "surveyName");
                    return {mid: t[0], type: n, answer: t[2], surveyName: l};
                case"redirect":
                    return {target: t[2], type: n};
                case"updateStyle":
                    return {mid: t[0], type: n, style: e.substring(e.lastIndexOf("=") + 1)};
                case"requestClientSize":
                    return {mid: t[0], type: n};
                case"surveyinview":
                    return {mid: t[0], type: n, time: parseInt(t[2], 10)};
                default:
                    return null
            }
        }, e
    }();
    window.brandmetrics.register({id: 21, ctor: e})
}();
"use strict";
var __assign = this && this.__assign || function () {
    return (__assign = Object.assign || function (e) {
        for (var t, i = 1, n = arguments.length; i < n; i++) for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
    }).apply(this, arguments)
};
!function () {
    var a, s, o = {}, d = function (e) {
        for (var t = e; t.parent !== window;) t = t.parent;
        for (var i = document.getElementsByTagName("iframe"), n = 0; n < i.length; n++) if (i[n].contentWindow === t) return i[n]
    }, t = function (e) {
        var t = e.data;
        "bm" !== t.system || o[t.id] || function (e, t) {
            switch (o[t.id] = !0, t.type) {
                case"beacon":
                    var i = d(e);
                    a.triggerExposure({inviewHandling: 0, element: i, mid: t.mid, pid: t.pid});
                    var n = {system: "bm", type: "accept", id: t.id};
                    e.postMessage(n, "*");
                    break;
                case"beacon_end":
                    a.endExposure(d(e));
                    break;
                case"query_host":
                    var r = __assign(__assign({}, s), {system: "bm", type: "query_host_reply", id: t.id});
                    e.postMessage(r, "*");
                    break;
                case"verification_beacon":
                    a.triggerExposure({
                        type: 1,
                        inviewHandling: 1,
                        exposureId: t.exposureId.toString(),
                        mid: t.mid,
                        pid: t.pid
                    });
                    break;
                case"verification_beacon_update":
                    a.updateExposureProperties(t.exposureId.toString(), {
                        active: {inview: t.inView, playing: t.playing},
                        meta: {maxDuration: t.duration}
                    });
                    break;
                case"verification_beacon_end":
                    a.endExposure(t.exposureId.toString());
                    break;
                default:
                    throw new Error("brandmetrics: Host does not support message- type: " + t.type)
            }
        }(e.source, t)
    }, e = function (e) {
        a = e.collection, s = e.options.hostConfiguration || {
            surveysAtClient: {type: "none"},
            collectionAtHost: {type: "all"}
        }, window.addEventListener("message", t, !1)
    };
    window.brandmetrics.register({id: 26, ctor: e})
}();
brandmetrics.register({
    id: -2, ctor: {
        storage: "ls",
        listeners: [{"type": "gpt", "conf": null}],
        measurements: [{
            id: "f46007fbd18540fb96bb4409eac2267a",
            keys: [{"source": "gpt", "campaignId": 3143378360}],
        }, {
            id: "e9fec0d83a8c42bf93413271d975a176",
            keys: [{"source": "gpt", "campaignId": 3115858450}],
        }, {
            id: "7e473016ddc2440eabc1b795b8cda18e",
            keys: [{"source": "ntv", "key": "3151457897"}],
        }, {
            id: "61254a6921fc427fa412a6c64ae98bde",
            keys: [{"source": "gpt", "campaignId": 3151457897}],
        }, {
            id: "97a29404d88e46c7aee1689d9cec872c",
            keys: [{"source": "gpt", "campaignId": 3153597792}, {"source": "gpt", "campaignId": 3147848842}],
        }, {
            id: "6778c2f70f8b4f1eb87b927a7f3a159f",
            keys: [{"source": "gpt", "campaignId": 3149975004}],
        }, {
            id: "71bc1b11bc6b471ea2fca798276a9170",
            keys: [{"source": "gpt", "campaignId": 3094538124}],
        }, {
            id: "207f9e6da2194edaadf3f6ddcd22c915",
            keys: [{"source": "gpt", "campaignId": 3144542116}],
        }, {
            id: "cead3183d63443d087d33a2dd377019d",
            keys: [{"source": "gpt", "campaignId": 3144540427}],
        }, {
            id: "7b081dd99f034da4a51b9970d383829c",
            keys: [{"source": "gpt", "campaignId": 3136134711}],
        }, {
            id: "710efe9ce983444e8310b1245cfc7333",
            keys: [{"source": "gpt", "campaignId": 3146890751}],
        }, {
            id: "f60f28cbc8e7426cb63fb589fbcbe996",
            keys: [{"source": "gpt", "campaignId": 3146501001}],
        }, {id: "611993cacf4244888feb41e5fe9cf071", keys: [{"source": "gpt", "campaignId": 3088797305}],}],
        surveyRandomization: 1,
        startMode: {"type": "auto", "conf": null},
    }
});