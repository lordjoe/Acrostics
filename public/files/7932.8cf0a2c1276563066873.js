"use strict";
(self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || []).push([[7932], {
    6303: function (e, o, t) {
        t.d(o, {
            I5: function () {
                return g
            }, YY: function () {
                return h
            }
        });
        var n = t(4658), i = t(4194), r = t(2042), a = t(2058), c = t(7006), s = t(431), d = t(8198), l = t(9817),
            u = t(7249);

        function p(e, o) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                o && (n = n.filter((function (o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function m(e) {
            for (var o = 1; o < arguments.length; o++) {
                var t = null != arguments[o] ? arguments[o] : {};
                o % 2 ? p(Object(t), !0).forEach((function (o) {
                    w(e, o, t[o])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function (o) {
                    Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o))
                }))
            }
            return e
        }

        function w(e, o, t) {
            return o in e ? Object.defineProperty(e, o, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[o] = t, e
        }

        const f = "fluid",
            b = [[990, [f, [728, 90], [970, 90], [970, 250], [1605, 300]]], [750, [f, [728, 90], [1605, 300]]], [440, [f, [300, 250], [300, 420]]], [0, [f, [300, 250]]]];
        d.p_.AdSlot4 = d.p_.AdSlot4 || {
            cmd: [], init: () => null, events: {
                subscribe: () => ({
                    remove: () => {
                    }
                })
            }, refreshAds: () => null
        };
        const v = d.p_.AdSlot4, g = () => (0, u.Z)(v, (0, r.j0)()), h = (e, o) => {
            v.cmd.push((() => {
                if (window.isMobileDevice || "adluce-socrates" === (null === (t = window.purrDirectives) || void 0 === t ? void 0 : t.PURR_AdConfiguration_v3)) return;
                var t;
                const u = n.bf.value, p = u < 2 ? ["small", "medium"][u] : "large", w = (0, r.vl)("ad-keywords"),
                    f = m(m({
                        plat: "web",
                        prop: "nyt",
                        typ: "games",
                        vp: p,
                        sub: null === c.A || void 0 === c.A ? void 0 : c.A.entitlement,
                        page_view_id: a.Z.current
                    }, w ? {adv: w} : {}), {}, {sov: i.Z, abra_dfp: (0, l.Z)(o)});
                v.init({
                    adTargeting: f,
                    adUnitPath: "".concat("29390238/NYT/crosswords", "/").concat(e),
                    sizeMapping: {default: b}
                }), v.events.subscribe({
                    name: "AdRendered", scope: "all", callback: e => {
                        let {slot: o, size: t} = e;
                        const n = d.JU.getElementById(o.getSlotElementId());
                        t && 0 === t[1] ? n && (0, s.cn)(n, "fluid") : n && (0, s.IV)(n, "fluid")
                    }
                })
            }))
        }
    }, 3104: function (e, o, t) {
        var n = t(2042), i = t(6023), r = t(3251), a = t(431), c = t(3682);
        const s = "prod" === n.OB.name ? "https://purr.nytimes.com" : "https://purr.dev.nytimes.com";
        r.B.get("".concat(s, "/v1/purr-cache"), {withCookie: !1});
        const d = (e, o) => '\n  <div class="ccpa-snackbar" role="status" data-region="popup">\n    <div clas="ccpa-snackbar__container">\n      '.concat(o ? '<p class="ccpa-snackbar__header">'.concat(o, "</p>") : "", "\n      ").concat(e ? '<p class="ccpa-snackbar__description">'.concat(e, "</p>") : "", "\n    </div>\n  </div>\n"),
            l = '\n  <div class="ccpa-snackbar error" role="status">\n    <div class="ccpa-snackbar__error">An error occured, please try again.</div>\n  </div>\n';
        o.Z = () => {
            if (window.ccpa) return;
            let e, o, t, u, p, m;
            try {
                e = [...document.getElementsByClassName("ccpa-impression")], o = [...document.getElementsByClassName("ccpa-opt-out")], t = [...document.querySelectorAll(".ccpa-link")], u = [...document.getElementsByClassName("ccpa-user-opted-out")]
            } catch (e) {
                return
            }
            t.forEach((e => {
                e.addEventListener("click", c.gc)
            })), e.forEach((e => {
                (0, i.Z)(e, c._k)
            }));
            const w = e => {
                let o;
                p && clearTimeout(p), o = "error" === e ? document.querySelectorAll(".ccpa-snackbar.error") : document.querySelectorAll(".ccpa-snackbar"), o.forEach((e => {
                    e.remove()
                }))
            }, f = e => {
                e.preventDefault();
                const o = n.Rt ? "Based on your preference, we will not sell or share your information, and you have been opted out of targeted advertising." : "Based on your preference, we will not sell or share your information, and you have been opted out of targeted advertising. If you clear your cookies, your preference will be forgotten.",
                    t = d(o, "");
                document.body.insertAdjacentHTML("beforeend", t), (0, c.vq)("optedOut", o), window.setTimeout(w, 6e3)
            }, b = e => {
                function t(e) {
                    const t = !(e instanceof Error),
                        r = n.Rt ? "Your preference has been saved for this account." : "Your preference has been stored for this browser and device.",
                        a = n.Rt ? "We will not sell or share your information, and you will be opted out of targeted advertising." : "We will not sell or share your information, and you will be opted out of targeted advertising. If you clear your cookies, your preference will be forgotten.",
                        s = t ? d(a, r) : l;
                    document.body.insertAdjacentHTML("beforeend", s), t || ((0, c.vq)("optOut", l), p = window.setTimeout(w, 3e3)), t && (o.forEach((e => {
                        const {className: o, dataset: {region: t}} = e.firstChild;
                        e.innerHTML = '<a href="opted-out-footer" class="'.concat(o, '" data-region="').concat(t, '" data-track="optedOut">We No Longer Sell/Share Your Information</span>'), e.removeEventListener("click", b), (0, i.Z)(e, c._k), e.addEventListener("click", f);
                        const r = n.Rt ? 6e3 : 7e3;
                        p = window.setTimeout(w, r)
                    })), (0, c.vq)("optOut", "".concat(r, " ").concat(a))), m = !1
                }

                e.preventDefault(), m || (m = !0, document.URL.includes("/games/wordle") ? r.B.post("".concat(s, "/v2/preferences"), {ccpa_pref: "opt-out"}, {withCookie: !1}).then(t).catch((e => {
                    console.warn(e)
                })) : r.B.post("".concat(s, "/v1/preferences"), {ccpa_pref: "opt-out"}, {withCookie: !1}).then(t).catch(t))
            };
            o.forEach((e => {
                (0, a.Oo)(e, "click", b)
            })), u.forEach((e => {
                (0, a.Oo)(e, "click", f)
            })), window.ccpa = !0
        }
    }, 3401: function (e, o, t) {
        t.d(o, {
            Og: function () {
                return i
            }, Ys: function () {
                return r
            }, mo: function () {
                return n
            }
        });
        const n = () => "ios" === window.newsreaderAppPlatform,
            i = () => ("android" === window.gamesAppPlatform || "android" === window.newsreaderAppPlatform) && window.isHybridWebView,
            r = () => ("ios" === window.gamesAppPlatform || n()) && window.isHybridWebView
    }, 4658: function (e, o, t) {
        t.d(o, {
            tq: function () {
                return v
            }, bf: function () {
                return g
            }
        });
        const n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const o = e || navigator.userAgent || navigator.vendor || (window.opera ? "opera" : "");
                return /(android|bb\d+|meego).+mobile|android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))
            }, i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator;
                return /iPad/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1
            }, r = () => new URLSearchParams(window.location.search), a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const o = /nyt[-_]?android/i, t = "Reader/";
                return e.includes(t) || o.test(e)
            }, c = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const o = /nyt[-_]?ios/i;
                return o.test(e)
            }, s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const o = r(), t = ["ios", "ipad", "iphone"], n = ["android", "androidtab", "androidphone"],
                    i = o.get("embed") || "", s = o.get("rid") || "", d = e || navigator.userAgent;
                return t.includes(i) || s || c(d) ? "ios" : n.includes(i) || a(d) ? "android" : ""
            }, d = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e.includes("Crosswords/")
            }, l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e.includes("nyt_xwords_ios/")
            }, u = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const o = r(), t = e || navigator.userAgent;
                return l(t) || "games" === o.get("hybrid") || "games-ios" === o.get("embed") ? "ios" : d(t) || "games-android" === o.get("embed") ? "android" : ""
            }, p = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const o = /i(Phone|Pad|Pod)/i;
                return o.test(e) || l(e) || c(e) || i()
            }, m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const o = /android/i;
                return o.test(e) || d(e) || a(e)
            }, w = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const o = r(), t = "playTab", n = e || navigator.userAgent;
                return o.get("entry") === t && "ios" === s(n)
            },
            f = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "msTransitionEnd"].find((e => "on".concat(e.toLowerCase()) in window));

        function b(e) {
            const o = [], t = document.getElementById(e), n = {
                value: null == t ? void 0 : t.offsetWidth, subscribe(e) {
                    return o.push(e), function () {
                        o.splice(o.indexOf(e), 1)
                    }
                }
            };
            return null == t || t.addEventListener(f, (function () {
                const e = null == t ? void 0 : t.offsetWidth;
                var i;
                if (i = e, n.value = i, !o.length) return;
                let r = o.length;
                for (; r > 0;) r -= 1, o[r](e)
            }), !1), n
        }

        !function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            const t = o || navigator.userAgent;
            void 0 === e.newsreaderAppPlatform && (e.newsreaderAppPlatform = s()), void 0 === e.gamesAppPlatform && (e.gamesAppPlatform = u()), void 0 === e.isPlayTab && (e.isPlayTab = w()), void 0 === e.isIOSDevice && (e.isIOSDevice = p(t)), void 0 === e.isAndroidDevice && (e.isAndroidDevice = m(t)), void 0 === e.isMobileDevice && (e.isMobileDevice = n(t) || p(t) || m(t));
            const i = e => !!["wordle", "sudoku"].find((o => e.includes(o)));
            if (void 0 === e.isHybridWebView) {
                const o = e.pageName || "";
                e.isHybridWebView = void 0 !== e.NYTG && i(o) && !!u()
            }
            const a = r();
            "mock" === a.get("bridge") && (e.isHybridWebView = !0)
        }(), (() => {
            if (!window.isCacheSafe) return;
            const e = document.querySelector("body"), o = document.querySelector('[name="viewport"]'), t = [];
            window.isMobileDevice ? (t.push("pz-mobile"), window.isIOSDevice && t.push("pz-mobile-ios"), window.isAndroidDevice && t.push("pz-mobile-android")) : t.push("pz-desktop"), window.isHybridWebView && (t.push("pz-hybrid"), null == o || o.setAttribute("content", "width=device-width, initial-scale=1, minimal-ui, maximum-scale=1, user-scalable=no")), window.gamesAppPlatform ? (t.push("pz-games-app"), t.push("pz-games-app-".concat(window.gamesAppPlatform))) : window.newsreaderAppPlatform ? (t.push("pz-newsreader"), t.push("pz-newsreader-".concat(window.newsreaderAppPlatform)), window.isPlayTab && t.push("pz-play-tab")) : t.push("pz-web"), null == e || e.classList.add(...t)
        })();
        const v = document.body.classList.contains("pz-mobile"), g = (b("ratio-hook"), b("width-hook"))
    }
}]);
//# sourceMappingURL=7932.eaf0a34e23d03ada7d2a.js.map