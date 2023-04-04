!function () {
    window.googletag = window.googletag || {};
    var a = window.googletag, e = (a.cmd = a.cmd || [], window.grumi), b = window.WrapperPubKey || e.key,
        t = e && e.cfg, E = e && e.overrides || {}, I = t && t.fromGrumi, j = E.adUnitPath, T = t && t.advs,
        d = t && t.pubIds, c = t && t.exclude, s = {ac038e71: {146082922: !0}},
        _ = ("http" === window.location.protocol.substr(0, 4) ? window.location.protocol : "https:") + "//protect.geoedge.be/api/event",
        J = "//gw.geoedge.be/api/report", A = function () {
            for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++) e[n] = t.substr(Math.floor(16 * Math.random()), 1);
            return e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("")
        }(), u = 4e-4, S = t && t.pbGlobal || "pbjs", W = t && t.blockedByGeoKey || "blocked_by_ge", N = !1,
        m = (!I && ((e = document.createElement("link")).rel = "preload", e.as = "script", e.href = "//rumcdn.geoedge.be/" + b + "/grumi.js", e.onload = function () {
            N = window.performance && window.performance.timeOrigin && (window.performance.now() || !0)
        }, t = document.getElementsByTagName("script")[0]) && t.parentNode.insertBefore(e, t), '<div id="grumi-container"><script type="text/javascript" nonce="!headerNonce!">window.grumi={wver:"1.1.81",wtype:"gpt",key:"${key}",meta:{adup:"%%ADUNIT%%",dest:"%%DEST_URL_ESC%%",w:"%%WIDTH%%",h:"%%HEIGHT%%",li:"%eaid!",adv:"%eadv!",ord:"%ebuy!",cr:"%ecid!",ygIds:"%_ygIds!",aduid:"%epid!",haduid:"%esid!",isAfc:"%_isAfc!",isAmp:"%_isAmp!",isEBDA:"%_isEBDA!",qid:"%qid!",cust_imp:"%cust_imp!",cust1:"%cust1!",cust2:"%cust2!",cust3:"%cust3!",caid:"%caid!",di:"%DEMAND_ID!",dn:"%DEMAND_NAME!",dcid:"%DEMAND_CREATIVE_ID!",pid:"%PUBLISHER_ID!",pn:"%PUBLISHER_NAME!",adElId:"%_adElId!",topUrl:"%%TOPURL%%"},sp:"dfp",cfg:{advs:"%%advs%%"},pbAdId:"%%PATTERN:hb_adid%%",pbAdIdAst:"%%PATTERN:hb_adid_appnexusAst%%",pbBidder:"%%PATTERN:hb_bidder%%",hbPb:"%%PATTERN:hb_pb%%",hbCid:"%_hbcid!",hbAd:"%_hbad!",hbSize:"%%PATTERN:hb_size%%",hbCurrency:"%_hbCurrency!",hbAdomains:"%_hbadomains",site:"%%SITE%%",pimp:"%_pimp%",pl:"%%preloaded%%",isHb:"%_isHb!"};<\/script><template style="display: none;" id="template0"><xmp style="display: none;" id="xmp0">${creative}</xmp></template><script type="text/javascript" nonce="!footerNonce!">!function(n){var e=window.grumi.key,t=window.grumi,o=t&&t.wtype&&"gpt"===t.wtype,i=window.onerror,r=+new Date,a=navigator.userAgent&&navigator.userAgent.match(/(MSIE)|(Trident)|(Edg)/),w=o&&!a;function u(){var n=function(){for(var n,e=document.getElementsByTagName("template"),t=e.length-1;0<=t;t--)if("template0"===e[t].id){n=e[t];break}return n}();return n.content?n.content.getElementById?n.content.getElementById("xmp0"):n.content.childNodes[0]:n.getElementsByTagName("xmp")[0]}function d(){var n=u();return n&&n.innerHTML}function c(n,e){e=e||!1,top.postMessage&&top.postMessage({evType:n||"",key:t.key,adup:t.meta.adup,html:window.grumi?window.grumi.tag:"",el:t.meta.adElId,refresh:e},"*")}var m=!1;function g(n,e){var t,o;!m&&(m=!0,t="",o=a&&"complete"===document.readyState,window.grumi&&(window.grumi.fsRan=!0,t=window.grumi.tag),o||(t=t||d(),w&&window.document.open(),window.document.write(t),window.document.close()),(e=e||!1)||o)&&c(n,o)}function s(n,t){return function(){var e=setTimeout(function(){var n=document.getElementById(r);n&&null===function(n){if(void 0!==n.nextElementSibling)return n.nextElementSibling;for(var e=n.nextSibling;e&&1!==e.nodeType;)e=e.nextSibling;return e}(n)&&t&&t(),clearTimeout(e)},n)}}s(5e3,function(){g()})(),s(2e3,function(){c("slwCl")})(),window.grumi.tag=d(),window.grumi.scriptHost=n,window.grumi.pbGlobal=window.grumi.cfg&&window.grumi.cfg.pbGlobal||"pbjs",window.grumi.onerror=i,window.parent&&window.parent.postMessage&&window.parent.postMessage({iw:!0,key:t.key,adup:t.meta.adup,el:t.meta.adElId},"*"),window.grumiInstance=function(){for(var n=window,e=0;e<10;e++){try{if(n.grumiInstance)return n.grumiInstance}catch(n){}n=n.parent}}()||{q:[]};var p=JSON.parse(JSON.stringify(window.grumi));if(grumiInstance.q.push(function(){grumiInstance.createInstance(window,document,p)}),!grumiInstance.loaded){o=document.createElement("script"),n=(o.type="text/javascript",o.src=n+e+"/grumi.js",o.className="rm",o.id=r,w&&(o.async=!0),"_"+ +new Date);window[n]=function(){g("netErr",!0)},window.grumi.start=+new Date;try{window.document.write(o.outerHTML.replace(\'class="rm"\',\'onerror="\'+n+\'();"\'))}catch(n){g()}}window.onerror=function(n){"function"==typeof i&&i.apply(this,arguments),s(0,g)(),window.onerror=i}}(("http"===window.location.protocol.substr(0,4)?window.location.protocol:"https:")+"//rumcdn.geoedge.be/");<\/script></div>'),
        k = "1.1.81",
        p = (top, self, navigator.userAgent && navigator.userAgent.match(/\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/)),
        q = !p && "async" in document.createElement("script"), l = !1, O = btoa && btoa(Math.random()),
        M = btoa && btoa(Math.random()),
        G = "script-src http://cdn.ampproject.org/ https://cdn.ampproject.org/ https://rumcdn.geoedge.be/ http://rumcdn.geoedge.be/ 'nonce-" + O + "' 'nonce-" + M + "'";

    function g(e) {
        return function () {
            return e
        }
    }

    function C(e) {
        var t, n = [];
        if (Object.keys) return 0 === Object.keys(e).length;
        for (t in e) e.hasOwnProperty(t) && n.push(t);
        return 0 === n.length
    }

    function R(e) {
        return document.getElementById(e.getSlotElementId())
    }

    function f(e) {
        e = R(e);
        return e && e.getElementsByTagName("iframe")[0]
    }

    function w() {
        return a.pubadsReady && a.pubads().getSlots() || []
    }

    function h(e) {
        for (var t = w(), n = 0; n < t.length; n++) if (t[n].getSlotElementId() === e) return t[n]
    }

    function x(e) {
        return e && (e = e.match(/(ca-?[mb-]+pub-\d+)/i)) ? e[0] : null
    }

    function $(e) {
        return e.match(/\/(\d)+,?\d+\//g)[0]
    }

    function V(e, t, n) {
        var o, i = R(e), r = e.getTargetingMap(), a = e.getResponseInformation(),
            d = a && (a.lineItemId || a.sourceAgnosticLineItemId || 0), c = a && (a.advertiserId || 0),
            s = a && (a.campaignId || 0), u = a && (a.creativeId || a.sourceAgnosticCreativeId || 0),
            m = a && (a.yieldGroupIds || 0), p = a && (a.companyIds || 0), l = x(n),
            g = a && a.isBackfill || d + c + s + u === 0 || !!l || 0, f = e.getSlotElementId(), w = e.getAdUnitPath(),
            h = function (e, t) {
                try {
                    if (window[S]) return window[S].getHighestCpmBids(e)[0] || window[S].getHighestCpmBids(t)[0]
                } catch (e) {
                }
                return null
            }(f, w) || {}, y = !I && !C(E) || I && (y = e, $(j) !== $(y.getAdUnitPath())), v = {
                "${key}": b,
                "%%ADUNIT%%": (E = y ? E : {}).adUnitPath || w,
                "%%DEST_URL_ESC%%": E.clickUrl || e.getClickUrl(),
                "%%WIDTH%%": E.width || t.width,
                "%%HEIGHT%%": E.height || t.height,
                "%eaid!": E.lineItemId || d,
                "%eadv!": E.advertiser || m && p || c,
                "%ebuy!": E.campaignId || s,
                "%ecid!": E.creativeId || u,
                "%_ygIds!": m,
                "%_isAfc!": g,
                "%_isAmp!": z(n),
                "%_isEBDA!": !(!m || !p),
                "%qid!": i.getAttribute("data-google-query-id"),
                "%caid!": l || "",
                "!headerNonce!": O,
                "!footerNonce!": M,
                "%_adElId!": E.slotElementId || f,
                "%_hbad!": h.ad && escape(h.ad) || "",
                "%_hbcid!": h.creativeId || "%_hbcid!",
                "%_hbCurrency!": h.currency || "%_hbCurrency!",
                "%_hbadomains": h.meta && h.meta.advertiserDomains || "",
                "%%SITE%%": E.site || location.hostname || "",
                "%%TOPURL%%": E.topUrl || location.href || "",
                "%_pimp%": E.pageViewId || A,
                "%%preloaded%%": N,
                '"%%advs%%"': T && JSON.stringify(T) || "{}"
            };
        for (o in r) v["%%PATTERN:" + o + "%%"] = r[o];
        return a || P(_, "type=noresinfo&w_ver=" + k + "&key=" + b + "&site=" + location.hostname || "na&el=" + e.getSlotElementId()), v
    }

    function K(e, t) {
        var n, o = e;
        for (n in t) o = o.replace(n, g(t[n]));
        return o
    }

    function z(e) {
        return e && -1 < e.indexOf("amp4ads")
    }

    function i(e, t) {
        var n, o, i, r, a;
        return z(t) && -1 < (a = (r = t) && r.indexOf("Content-Security-Policy")) && -1 < r.indexOf("script-src", a) && (t = t.replace("script-src https://cdn.ampproject.org/", G)), !q && -1 < (a = (r = t.toLowerCase()).indexOf("<body")) && (n = r.indexOf(">", a), o = r.indexOf("</body>", n), i = t.substring(n + 1, o), -1 < n) && -1 < o && i ? t.substring(0, n + 1) + e.replace("${creative}", g(i)) + t.substring(o) : e.replace("${creative}", g(t))
    }

    function F(e, t, n, o) {
        return i(o = K(o, V(e, t, n)), n)
    }

    function Q(e) {
        return 1 === e.nodeType && "IFRAME" === e.tagName && e.id && -1 < e.id.indexOf("google_ads_")
    }

    function y(e) {
        return Q(e) && e.src && -1 < e.src.indexOf("container.html") && e.name
    }

    function X(e, t) {
        var n = -1 !== t.indexOf("grumi-container");
        try {
            var o, i, r = {};
            n && ((i = /\b(key:){1}"\s*([a-f0-9\\-]*){1}\s*"/g.exec(t)) && i[0] && (o = i[0].trim().slice(5, i[0].length - 1)), r.innerKey = o || "na", P(_, "type=dwrp&w_ver=" + k + "&key=" + b + "&meta=" + encodeURIComponent(JSON.stringify(r))))
        } catch (e) {
        }
        return c && !C(c) && c[e.getSlotElementId()] || n ? void 0 : (o = (i = e.getResponseInformation()) && i.advertiserId, r = x(t), e = null === o || (n = o, !(!C(s) && s[ie(b)] && !0 === s[ie(b)][n] || T && !C(T) && (!0 === T.exclude ? !0 === T[n] : !0 !== T[n]))), t = null === r || (i = r, !(d && !C(d))) || !0 === d[i.toLowerCase()], e && t)
    }

    var v = HTMLElement && HTMLElement.prototype && HTMLElement.prototype.appendChild;

    function Y(t, e) {
        try {
            var n, o, i = t.name,
                r = (d = /^([^;]+);(\d+);([\s\S]*)$/.exec(d = i), c = parseInt(d[2], 10), s = (u = d[3]).substr(0, c), u = u.substr(c, u.length - 1), {
                    version: d[1],
                    contentLength: c,
                    html: s,
                    confing: u
                });
            X(e, r.html) && (n = F(e, {width: t.width, height: t.height}, r.html, m), o = [(a = {
                version: r.version,
                contentLength: n.length,
                html: n,
                confing: r.confing
            }).version, a.contentLength, a.html + a.confing].join(";"), t.name = o)
        } catch (e) {
            t.name = i
        }
        var a, d, c, s, u
    }

    function o(a) {
        a.appendChild = function (e) {
            var t = h(a.parentNode.id), n = R(t);
            if (t && n && (y(e) && Y(e, t), Q(e)) && !y(e)) {
                v.call(this, e);
                var o = e, i = t;
                try {
                    var r = o.contentWindow.document.write;
                    o.contentWindow.document.write = function (e) {
                        try {
                            var t, n;
                            if (delete o.contentWindow.document.write, X(i, e)) return t = {
                                width: o.width,
                                height: o.height
                            }, n = F(i, t, e, m), r.call(o.contentWindow.document, n)
                        } catch (e) {
                        }
                        return r.call(o.contentWindow.document, e)
                    }
                } catch (e) {
                }
                return e
            }
            return v.call(this, e)
        }
    }

    "function" == typeof v && (HTMLElement.prototype.appendChild = function e(t) {
        if (t.appendChild !== e && (t.appendChild = e), 1 === (n = t).nodeType && "DIV" === n.tagName && n.id && -1 < n.id.indexOf("google_ads_") && !l) try {
            o(t)
        } catch (e) {
        }
        var n;
        return v.call(this, t)
    });
    var r, Z, n = ["slotRequested", "slotResponseReceived", "slotRenderEnded", "slotOnload", "impressionViewable"],
        D = {}, L = {};

    function ee(e) {
        var e = e.split("\x3c!----\x3e"), t = e[0], e = e[1];
        t = t, e = e, document.body.insertAdjacentHTML("beforeend", t), (t = document.createElement("script")).textContent = e, document.body.appendChild(t)
    }

    function te(t) {
        if (Z) return t();
        var n;
        r || (r = !0, n = function (e) {
            ee(e), Z = !0, t()
        }, fetch("//rumcdn.geoedge.be/rbu/popup.html").then(function (e) {
            return e.text()
        }).then(function (e) {
            n(e)
        }))
    }

    function ne(e) {
        function t(e) {
            var t = !(i.rbuc = e);
            e && fetch(J, {method: "POST", mode: "no-cors", body: new URLSearchParams(i)}), n.postMessage({
                key: o,
                rbuResponse: !0,
                closed: t
            }, "*")
        }

        var n, o, i, r = e.data.rbuConfig, a = e.data.showPopup;
        n = e.source, o = e.data.key, i = e.data.rbuReport;
        te(function () {
            a && window.rbuPopUp(r, t, t)
        })
    }

    window.performance && window.performance.timeOrigin && a.cmd.push(function () {
        n.forEach(function (o) {
            a.pubads().addEventListener(o, function (e) {
                var t = window.performance.now(), e = e.slot,
                    e = (slotElement = e.getSlotElementId(), L[slotElement] = L[slotElement] || {}, D[slotElement] = D[slotElement] || []),
                    n = {event: o, time: t};
                e.push(n), Object.keys(L[slotElement]).forEach(function (e) {
                    var t = L[slotElement][e];
                    t.postMessage && t.postMessage({key: b, imp: e, evType: "gptEvent", eventTiming: n}, "*")
                })
            })
        })
    });
    var U = {};

    function oe(e) {
        var t, n = e.data, o = (n.meta = n.meta || {}, n.limit || 0);
        if (n.key === b) {
            if (r = (t = n.el && h(n.el) || n.adup && function (e) {
                for (var t = w(), n = 0, n = 0; n < t.length; n++) if (t[n].getAdUnitPath() === e) return t[n]
            }(n.adup)) && t.getSlotElementId(), n.blocked) {
                if (t.getOutOfPage()) return a.destroySlots([t]);
                var i = U[r] && (U[r] += 1) || (U[r] = 1), r = i <= o;
                n.refresh = r, n.meta.blocksCount = i, r ? a.cmd.push(function () {
                    n.hb && t.clearTargeting(), t.setTargeting(W, i)
                }) : e.source.postMessage({key: b, evType: "fallbackTag", blocksCount: i}, e.origin)
            }
            n.refresh && (p && (l = !0), H("refresh_tag", t, null, n.rate, null, n.meta), setTimeout(a.cmd.push(function () {
                a.pubads().refresh([t])
            }), 400)), "netErr" === n.evType && H("net_err", t, n.html, 1), "slwCl" === n.evType && H("slow_cl", t, n.html, n.rate), "eventsTimelineReq" == n.evType && n.adElId && (L[n.adElId] = L[n.adElId] || {}, L[n.adElId][n.imp] = e.source, e.source.postMessage({
                key: b,
                imp: n.imp,
                evType: "eventsTimelineRes",
                timeline: D[n.adElId],
                timeOrigin: performance.timeOrigin
            }, e.origin)), n.rbuRequest && ne(e), n.iw && (o = n.adup, "number" == typeof (r = B[o]) && clearTimeout(r), B[o] = !0)
        }
    }

    function P(e, t) {
        var n;
        if (navigator.sendBeacon) return n = new Blob([t], {type: "application/x-www-form-urlencoded; charset=UTF-8"}), navigator.sendBeacon(e, n);
        (new Image).src = e + "?" + t
    }

    function ie(e) {
        for (var t = 0, n = e.length; n--;) t = (t = (t += e.charCodeAt(n)) + (t << 10)) ^ t >> 6;
        return (((t = (t += t << 3) ^ t >> 11) + (t << 15) & 4294967295) >>> 0).toString(16)
    }

    function H(e, t, n, o, i, r) {
        n = n || "", o = o || u;
        r = r || (r = n, t = f(n = t) || {width: 0, height: 0}, n = V(n, {
            width: t.width,
            height: t.height
        }, r), t = K(JSON.stringify({
            adup: "%%ADUNIT%%",
            dest: "%%DEST_URL_ESC%%",
            w: "%%WIDTH%%",
            h: "%%HEIGHT%%",
            li: "%eaid!",
            adv: "%eadv!",
            ord: "%ebuy!",
            cr: "%ecid!",
            isAfc: "%_isAfc!",
            isAmp: "%_isAmp!"
        }), n), JSON.parse(t));
        r.stack = i || "", r.ua = navigator.userAgent, r.location = location.href, Math.random() <= o && window.JSON && P(_, "type=" + e + "&w_ver=" + k + "&key=" + b + "&meta=" + encodeURIComponent(JSON.stringify(r)))
    }

    var re, B = {};
    "function" == typeof window.addEventListener && (window.addEventListener("message", oe), window.addEventListener("load", function () {
        var e = setTimeout(function () {
            Math.random() <= u && window.JSON && a.cmd.push(function () {
                for (var e, t = w(), n = 0; n < t.length; n++) {
                    var o = t[n], i = f(o);
                    if (i) {
                        var r = "";
                        if (!y(i)) try {
                            r = i.contentWindow.document.body.innerHTML
                        } catch (e) {
                        }
                        "" === r || (i = function () {
                            H("wraperr", o, r, 1)
                        }, e = (e = o).getAdUnitPath(), !0 !== B[e] && (B[e] = setTimeout(i, 500)))
                    }
                }
            }), clearTimeout(e)
        }, 1e3)
    })), !I && Math.random() <= .001 && (re = +new Date, window.addEventListener) && window.addEventListener("beforeunload", function () {
        var e = +new Date, t = {
            i: A,
            ua: navigator.userAgent || "",
            l: (location.hostname || "") + (location.pathname || ""),
            tos: e - re
        };
        P(_, "type=pimp&w_ver=" + k + "&key=" + b + "&ts=" + e + "&meta=" + encodeURIComponent(JSON.stringify(t)))
    }, !1), Math.random() < 5e-4 && document.currentScript && document.currentScript.src && -1 === document.currentScript.src.indexOf("rumcdn.geoedge.be") && P(_, "type=oldcdn&w_ver=" + k + "&key=" + b + "&meta=" + encodeURIComponent(JSON.stringify({
        loc: location.href,
        src: document.currentScript.src
    })))
}();