"use strict";
(self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || []).push([[7202], {
    1069: function (e, t, n) {
        n.d(t, {
            IX: function () {
                return v
            }
        });
        var o = n(7719), r = n(7006), c = n(2042), i = n(2058), a = n(431), l = n(8198), s = n(1586);
        const u = "mailto:nytgames@nytimes.com", d = () => {
            try {
                const e = l.JU.cookie.match(/nyt-xwd-hashd=(.+);/);
                return e && "true" === e[1]
            } catch (e) {
                return !1
            }
        }, v = () => {
            const e = (0, a.rI)((0, c.iU)("feedback-link"));
            var t;
            e && (Promise.all([r.E.get(), o.U.get()]).then((e => {
                let [n, o] = e;
                return function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Web Feedback";
                    const o = i.Z.current, a = "".concat(n, " (").concat(o.slice(-6), ")"), {screen: s} = l.p_,
                        v = l.JU.documentElement, m = (new Date).getTimezoneOffset(), g = "Yes", f = "No",
                        h = [l.p_.location.pathname, s.width, s.height, v.clientWidth, v.clientHeight, "UTC".concat(m > 0 ? "" : "+").concat(m / -60), e.id, null !== r.A && void 0 !== r.A && r.A.hasDigi ? g : f, null !== r.A && void 0 !== r.A && r.A.hasXwd ? g : f, d() ? g : f, o];
                    let p = t.feedback;
                    const w = /%s/;
                    let b = 0;
                    for (; b < h.length;) p = p.replace(w, h[b].toString()), b += 1;
                    return u + (0, c.B2)({subject: a, body: p})
                }(n, o, t)
            })).catch((() => u)).then((t => {
                e.setAttribute("href", t)
            })), (() => {
                const e = [...document.querySelectorAll(".".concat((0, c.iU)("footer-tracking")))], t = (0, c.j0)();
                e.forEach((e => {
                    var n, o, r;
                    const c = (null == e || null === (n = e.dataset) || void 0 === n ? void 0 : n.trackLabel) || "",
                        i = null == e || null === (o = e.dataset) || void 0 === o ? void 0 : o.medium,
                        a = null == e || null === (r = e.dataset) || void 0 === r ? void 0 : r.source;
                    c && e.addEventListener("click", (e => {
                        (0, s.ob)({name: t, label: c, useBeacon: !0, context: null, medium: i, source: a})
                    }))
                }))
            })())
        }
    }, 3649: function (e, t, n) {
        n.d(t, {
            ku: function () {
                return l
            }
        });
        var o = n(5489), r = n(7226), c = n(2042), i = n(431), a = n(1586);
        const l = () => {
            (() => {
                const e = [...document.querySelectorAll(".js-nav-tracker")], t = (0, i.rI)((0, c.iU)("nav-profile")),
                    n = [...e, ...t ? [...t.querySelectorAll("a")] : []], o = (0, c.j0)();
                n.forEach((e => {
                    var t;
                    const n = (null == e || null === (t = e.dataset) || void 0 === t ? void 0 : t.trackLabel) || "";
                    n && e.addEventListener("click", (() => {
                        (0, a.ob)({name: o, label: n, useBeacon: !0, context: null})
                    }))
                }))
            })(), (() => {
                const e = (0, i.rI)((0, c.iU)("hybrid-back"));
                e && window.isHybridWebView && window.NativeBridge && (0, i.Oo)(e, "click", (() => {
                    var e;
                    "sudoku" !== (0, c.j0)() && (null === (e = window.NativeBridge) || void 0 === e || e.gamesBackToHub())
                }))
            })(), (() => {
                if (window.isHybridWebView && window.NativeBridge) {
                    const e = document.querySelectorAll(".".concat((0, c.iU)("nav-login"))),
                        t = document.querySelectorAll(".".concat((0, c.iU)("nav-logout"))),
                        n = document.querySelectorAll(".".concat((0, c.iU)("nav-subscribe"))),
                        r = document.querySelectorAll(".".concat((0, c.iU)("nav-account-details"))),
                        a = e => e.forEach((e => {
                            (0, i.cn)(e, "hybrid-hidden")
                        })), l = o => {
                            const c = null == o ? void 0 : o.isUserLoggedIn, i = null == o ? void 0 : o.isSubscribed;
                            c ? a(e) : (a(t), a(r)), i && a(n)
                        };
                    window.NativeBridge.gamesGetUserDetails().then((e => {
                        if (!e.success) throw new Error(e.error);
                        (0, o.Fg)("gamesGetUserDetails", {values: JSON.stringify(e.values)}), l(e.values.gamesGetUserDetails)
                    })).catch((e => {
                        console.error("Getting user details failed", e), a(t), a(r)
                    })), (0, i.Oo)(window, "gamesUserCredentialChanged", (e => {
                        var t, n;
                        l(null == e || null === (t = e.detail) || void 0 === t || null === (n = t.values) || void 0 === n ? void 0 : n.gamesAuthenticateUser)
                    }));
                    const s = (e, t) => {
                        e.forEach((e => {
                            (0, i.Oo)(e, "click", (e => {
                                var n;
                                e.preventDefault(), null === (n = window.NativeBridge) || void 0 === n || n.gamesAuthenticateUser(t).then((e => {
                                    if (!e.success) throw new Error(e.error);
                                    window.dispatchEvent(new CustomEvent("gamesUserCredentialChanged", {detail: e}))
                                }))
                            }))
                        }))
                    };
                    s(n, "subscribe"), s(e, "login")
                }
            })(), (() => {
                const e = [...document.querySelectorAll(".top-sale-banner")];
                e.length > 0 && (0, a.hX)("games_top_bar", "top", "STANDCON_CONV_AA_SALE_GAMES_BANNER_232", ""), e.forEach((e => {
                    e.addEventListener("click", (() => {
                        (0, a.j)("moduleInteraction", {
                            module: {
                                name: "games_top_bar",
                                region: "top",
                                label: "STANDCON_CONV_AA_SALE_GAMES_BANNER_232",
                                context: "",
                                element: {
                                    name: "goto-games_lp",
                                    label: "Save on all of The Times, including Games",
                                    url: "https://www.nytimes.com/subscription/games?campaignId=89RW9"
                                }
                            }
                        })
                    }), !0)
                }))
            })(), setTimeout((() => {
                [...document.querySelectorAll(".js-hub-tracker")].forEach((e => {
                    const t = e.dataset.trackHub, n = e.dataset.trackHubContext || null;
                    e.addEventListener("click", (() => {
                        (0, r.d)(t, n)
                    }), !0)
                }))
            }), 0);
            let e = !1, t = -1;
            const n = (0, i.rI)((0, c.iU)("nav-burger")), l = (0, i.rI)((0, c.iU)("nav-drawer"));
            if (!n || !l) return;
            const s = [...l.querySelectorAll(".pz-nav-drawer__link"), ...l.querySelectorAll(".pz-nav__button")],
                u = s.map((e => {
                    const t = e.textContent;
                    return t && t[0] ? t[0].toUpperCase() : ""
                }));

            function d() {
                e = !0, n && l && ((0, i.cn)(l, "open"), (0, i.cn)(n, "active"), (0, a.ob)({
                    name: (0, c.j0)(),
                    label: "click-nav",
                    context: null
                }), (0, i.P$)(n, "aria-expanded", e.toString()), (0, i.P$)(l, "aria-hidden", (!e).toString()))
            }

            function v() {
                e = !1, n && l && ((0, i.IV)(l, "open"), (0, i.cn)(l, "closing"), setTimeout((() => {
                    (0, i.IV)(l, "closing")
                }), 500), (0, i.IV)(n, "active"), (0, i.P$)(n, "aria-expanded", e.toString()), (0, i.P$)(l, "aria-hidden", (!e).toString()))
            }

            (0, i.Oo)(n, "click", (() => {
                e ? v() : d(), n.blur()
            })), (0, i.Oo)(n, "keydown", (n => {
                const {key: o, keyCode: r} = n;
                if ("Escape" !== o && "Esc" !== o) {
                    if ("Enter" !== o && "Space" !== o && 32 !== r) return "ArrowDown" === o ? (n.preventDefault(), d(), t = 0, void s[t].focus()) : "ArrowUp" === o ? (n.preventDefault(), d(), t = s.length - 1, void s[t].focus()) : void 0;
                    e ? v() : (d(), t = 0, s[t].focus())
                } else v()
            })), (0, i.Oo)(l, "keydown", (e => {
                const {key: o, keyCode: r, shiftKey: c} = e;
                if ("Escape" === o || "Esc" === o) return v(), void n.focus();
                if ("ArrowDown" === o || "ArrowRight" === o || "Tab" === o && !c) return e.preventDefault(), t === s.length - 1 ? t = 0 : t += 1, void s[t].focus();
                if ("ArrowUp" === o || "ArrowLeft" === o || "Tab" === o && c) return e.preventDefault(), 0 === t ? t = s.length - 1 : t -= 1, void s[t].focus();
                if (r >= 65 && r <= 90) {
                    const e = u.findIndex(((e, n) => e === String.fromCharCode(r) && n !== t));
                    e >= 0 && (t = e, s[t].focus())
                }
            })), (0, i.rI)((0, c.iU)("logo-nav")).addEventListener("click", (() => {
                const e = {
                    eventData: {pagetype: "game", trigger: "module", type: "click"},
                    module: {name: "click", context: "", element: {name: window.location.href, label: "games-logo"}}
                };
                (0, a.j)("moduleInteraction", e)
            }))
        }, s = (0, c.iU)("global-nav"), u = (0, c.iU)("mobile-toolbar");
        document.querySelector(".pz-header"), (0, i.rI)(s), (0, i.rI)(u)
    }, 2042: function (e, t, n) {
        n.d(t, {
            B2: function () {
                return v
            }, G7: function () {
                return h
            }, OB: function () {
                return c
            }, Rt: function () {
                return g
            }, iU: function () {
                return u
            }, j0: function () {
                return r
            }, kh: function () {
                return f
            }, vl: function () {
                return p
            }, y5: function () {
                return m
            }, zO: function () {
                return d
            }
        });
        var o = n(8198);
        const r = () => {
                var e, t;
                return ((null === (e = window) || void 0 === e || null === (t = e.location) || void 0 === t ? void 0 : t.pathname) || "").startsWith("/crosswords/game/mini") && (o.p_.pageName = "mini-page"), o.p_.pageName || ""
            }, {env: c} = o.p_, {featureFlags: i = {}} = o.p_, {version: a} = c, l = "pz-version",
            s = a !== o.WL.getItem(l);
        try {
            o.WL.setItem(l, a)
        } catch (e) {
            console.error(e.error)
        }
        const u = e => "js-".concat(e), d = () => Date.now(), v = function (e) {
                const t = [];
                return Object.keys(e).forEach((n => {
                    t.push("".concat((0, o.uL)(n), "=").concat((0, o.uL)(e[n])))
                })), "?".concat(t.join("&"))
            }, m = (e, t, n, o) => {
                const r = [], c = "".concat(n, "-check");
                let i, a, l;
                t && n && s && (t.removeItem(c), t.removeItem(n));
                const u = e => {
                    for (; r.length;) {
                        var t;
                        null === (t = r.shift()) || void 0 === t || t[e ? 1 : 0](e || i)
                    }
                };
                return {
                    get() {
                        return a ? Promise.resolve(i) : new Promise(((e, t) => r.push([e, t])))
                    }, initialize() {
                        return t && n && t.getItem(c) === o && (l = t.getItem(n)), Promise.resolve(l && JSON.parse(l) || e()).then((e => {
                            if (a = !0, i = e, t && o && n && !l) try {
                                t.setItem(c, o), t.setItem(n, JSON.stringify(i))
                            } catch (e) {
                                console.error(e.error)
                            }
                            u()
                        })).catch(u)
                    }
                }
            }, g = (/NYT-S=([^;]+)/.exec(o.JU.cookie || "") || [])[1],
            f = (/nyt-a=([^;]+)/.exec(o.JU.cookie || "") || [])[1],
            h = (/NYT-NO-ADS=([^;]+)/.exec(o.JU.cookie || "") || [])[1], p = (e, t) => {
                const n = t || o.p_.location.href, r = e.replace(/[[\]]/g, "\\$&"),
                    c = new RegExp("[?&]".concat(r, "(=([^&#]*)|&|#|$)")).exec(n);
                return c ? c[2] ? decodeURIComponent(c[2].replace(/\+/g, "")) : "" : null
            }
    }
}]);
//# sourceMappingURL=7202.2f717f166218e3b8bd25.js.map