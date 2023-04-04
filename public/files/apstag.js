/*! @amzn/apswebapstaglibrary - apstag - v23.203.336 - 2023-02-03 03:36:58 */
!function (t) {
    var e = {};

    function n(r) {
        var o;
        return (e[r] || (o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        }, t[r].call(o.exports, o, o.exports, n), o.l = !0, o)).exports
    }

    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
            return t[e]
        }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 38)
}([function (t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t) {
        try {
            var e = parseInt(t, 10);
            if (!isNaN(e)) return !(e <= 0) && (100 <= e || 100 * Math.random() <= e)
        } catch (t) {
        }
        return !1
    }

    function i(t, e) {
        var n = parseInt(e, 10), r = [], o = 0;
        if (u(t)) {
            if (isNaN(n) || n < 1) return [t];
            for (var i = t.length; o < i;) {
                var a = o;
                o += n, r.push(t.slice(a, o))
            }
        }
        return r
    }

    function a() {
        return "".concat(Math.round(1e12 * Math.random())).concat(Date.now())
    }

    function c(t) {
        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Array(t), r = 0; r < t; r++) n[r] = e[Math.floor(Math.random() * e.length)];
        return n.join("")
    }

    function s(t) {
        return "object" === r(t) && null !== t
    }

    function u(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function l(t, e) {
        return s(t) && void 0 !== t[e] && "" !== t[e]
    }

    function d(t, e) {
        return -1 !== t.indexOf(e)
    }

    function f(t) {
        var e = new Date;
        return e.setDate(e.getDate() + t), e.toUTCString()
    }

    function b(t) {
        try {
            var e = t.innerWidth || t.document.documentElement.clientWidth || t.document.body.clientWidth,
                n = t.innerHeight || t.document.documentElement.clientHeight || t.document.body.clientHeight;
            return "".concat(e, "x").concat(n)
        } catch (t) {
        }
        return "x"
    }

    function p(t, e) {
        return decodeURIComponent(t).split("?")[0].split("#")[0] === decodeURIComponent(e).split("?")[0].split("#")[0]
    }

    function y(t) {
        var e = Object.keys(t);
        return e.filter((function (e) {
            return t[e]
        })).length === e.length
    }

    n.d(e, "l", (function () {
        return o
    })), n.d(e, "c", (function () {
        return i
    })), n.d(e, "d", (function () {
        return a
    })), n.d(e, "e", (function () {
        return c
    })), n.d(e, "j", (function () {
        return s
    })), n.d(e, "i", (function () {
        return u
    })), n.d(e, "k", (function () {
        return l
    })), n.d(e, "h", (function () {
        return d
    })), n.d(e, "f", (function () {
        return f
    })), n.d(e, "g", (function () {
        return b
    })), n.d(e, "b", (function () {
        return p
    })), n.d(e, "a", (function () {
        return y
    }))
}, function (t, e, n) {
    "use strict";
    n.d(e, "b", (function () {
        return u
    })), n.d(e, "c", (function () {
        return l
    })), n.d(e, "d", (function () {
        return d
    })), n.d(e, "a", (function () {
        return f
    }));
    e = n(0);
    var r = n(3), o = n(2), i = n(8), a = n(9), c = Object(e.l)(10), s = [];

    function u(t, e, n) {
        try {
            (null != n && n.makeVisibleToAllUsers || Object(i.d)("errors")) && console.error(t);
            var u = {
                ts: Date.now(),
                url: encodeURIComponent(Object(a.g)(window)),
                r: encodeURIComponent(Object(a.h)(window)),
                _type: "apsLibraryError",
                e: {et: t.name, el: e, msg: t.message}
            };
            return s.push(u), o.a.dispatch({type: "LOG_ERROR", error: u}), !!c && (Object(r.b)(u), !0)
        } catch (t) {
            console.error(t)
        }
        return !1
    }

    function l(t, e, n, r) {
        return u({
            name: e,
            message: "".concat(t, " was of type '").concat(e, "' instead of '").concat(n, "'")
        }, "TypeError-".concat(t), r)
    }

    function d(t, e) {
        return function () {
            try {
                return t.apply(null, arguments)
            } catch (t) {
                return u(t, e, {makeVisibleToAllUsers: !0}), null
            }
        }
    }

    function f(t) {
        (1 < arguments.length && void 0 !== arguments[1] && arguments[1] || Object(i.d)("errors")) && console.warn(t)
    }

    !0 === Object(i.c)("exposeErrors") && (window.apstagErrors = s)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return p
    }));
    var r, o = n(4), i = (e = n(5), n(0));
    n = n(8);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function (e) {
                u(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function u(t, e, n) {
        return (e = function (t) {
            return t = function (t, e) {
                if ("object" !== a(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 === n) return String(t);
                if ("object" !== a(n = n.call(t, e))) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }(t, "string"), "symbol" === a(t) ? t : String(t)
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function l(t) {
        return function (t) {
            if (Array.isArray(t)) return d(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function (t, e) {
            var n;
            if (t) return "string" == typeof t ? d(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    var f = {
        AAXReqs: [],
        aaxViewabilityEnabled: !1,
        bidConfigs: {},
        bidReqs: {},
        bsPixels: {},
        cfg: {
            v: -1,
            CSM_JS: "//c.amazon-adsystem.com/aax2/csm.js.gz",
            CSM_RTB_COMMUNICATOR_JS: "//c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js",
            DEBUG_APP_HTML: "//c.amazon-adsystem.com/aax2/debugApp.html",
            DEBUG_APP_HTML_V2: "//c.amazon-adsystem.com/aax2/debug_app_v2.html",
            DEFAULT_TIMEOUT: 2e3,
            DTB_PATH: "/e/dtb",
            TEST_PATH_FREQUENCY: 0,
            TEST_BID_ENDPOINT: null,
            TEST_PATH_LATENCY_SAMPLE_RATE: null,
            PIXEL_PATH: "/x/px/",
            LATENCY_SAMPLING_RATE: 1,
            COOKIE_MATCH_DELAY: 0,
            MAX_SLOTS_PER_REQUEST: 1,
            CF_ROUTING_RATE: 100,
            SLOT_RENDER_SAMPLING_RATE: 1,
            FEATURE_SAMPLING_RATE: 1,
            CONFIG_CALL_ENABLED: !1,
            LIB_CONFIG_PATH: "/cdn/prod/config"
        },
        cmpFired: !1,
        config: {pubID: ""},
        displayAdServer: {noBidSlotIDs: [], shouldSampleRender: !1, slotRenderEndedSet: !1},
        errors: [],
        eventLog: [],
        experiments: {},
        gamSlotFetchLog: [],
        gamSlotRenderPixel: {aaxReqOffset: 0, gamSlotFetchLogOffset: 0},
        hosts: {
            DEFAULT_AAX_BID_HOST: "aax.amazon-adsystem.com",
            DEFAULT_AAX_PIXEL_HOST: "aax.amazon-adsystem.com",
            DEFAULT_CXM_HOST: "c.amazon-adsystem.com",
            DEFAULT_BS_HOST: "cxm-bcn.publisher-services.amazon.dev"
        },
        identityState: {},
        libraryLoadCallLatency: 0,
        Q: [],
        slotBids: {},
        targetingKeys: {},
        tcfParseTime: 0,
        outstream: {renderStart: 0, shouldSample: !1},
        consentManagementPlatform: {}
    };

    function b() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f,
            e = 1 < arguments.length ? arguments[1] : void 0;
        return {
            AAXReqs: function (t, e) {
                switch (e.type) {
                    case"RECORD_AAX_REQUEST":
                        return [].concat(l(t), [e.data]);
                    case"RECORD_AAX_REQ_PROP":
                        return t.map((function (t) {
                            return (t = s({}, t)).bidReqID === e.bidReqID && (t[e.key] = e.value), t
                        }));
                    default:
                        return l(t)
                }
            }(t.AAXReqs, e), aaxViewabilityEnabled: function (t, e) {
                return "SET_VIEWABILITY" !== e.type ? t : e.viewability
            }(t.aaxViewabilityEnabled, e), bidConfigs: function (t, e) {
                return "RECORD_ORIGINAL_BID_CONFIG" !== e.type ? s({}, t) : s(s({}, t), {}, u({}, e.bidConfig.bidReqID, e.bidConfig))
            }(t.bidConfigs, e), bidReqs: function (t, e) {
                var n;
                switch (e.type) {
                    case"ADD_CHUNKED_REQUESTS":
                        return s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, {networkReqs: new Array(e.numChunks)})));
                    case"NEW_FETCH_BID_REQUEST":
                        return s(s({}, t), {}, u({}, e.fid, {pto: e.pto, hasCallbackExecuted: !1, networkReqs: []}));
                    case"RECORD_CALLBACK":
                        return s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, {hasCallbackExecuted: !0})));
                    case"RECORD_NETWORK_EXCHANGE":
                        var r = t[e.fid].networkReqs;
                        return r[e.networkID] = s(s({}, r[e.networkID]), {}, (u(n = {}, "".concat(e.exchangeType, "Time"), e.timestamp), u(n, "inFlight", "request" === e.exchangeType), n)), s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, {networkReqs: r})));
                    case"RECORD_TIMEOUT":
                        return s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, {
                            networkReqs: t[e.fid].networkReqs.map((function (t) {
                                return t.inFlight ? s(s({}, t), {}, {timeOut: e.timeOut}) : t
                            }))
                        })));
                    default:
                        return s({}, t)
                }
            }(t.bidReqs, e), bsPixels: function (t, e) {
                return "RECORD_BID_INFO_SENT" !== e.type ? s({}, t) : s(s({}, t), {}, u({}, e.bidInfo.iid, e.bidInfo.state))
            }(t.bsPixels, e), cfg: function (t, e) {
                return "SET_CFG" !== e.type ? s({}, t) : s(s({}, t), e.cfg)
            }(t.cfg, e), cmpFired: function (t, e) {
                return "CMP_FIRED" === e.type || t
            }(t.cmpFired, e), config: function (t, e) {
                return "SET_CONFIG" !== e.type ? s({}, t) : s(s({}, e.config), {}, {
                    gdpr: s({cmpTimeout: e.defaultCmpTimeout}, e.config.gdpr),
                    isSelfServePub: void 0 !== e.config.pubID && 5 <= e.config.pubID.length
                })
            }(t.config, e), displayAdServer: function (t, e) {
                switch (e.type) {
                    case"SLOT_RENDER_ENDED_SET":
                        return s(s({}, t), {}, {slotRenderEndedSet: !0});
                    case"NO_BID_ON_ADSERVER_SLOTS":
                        return s(s({}, t), {}, {noBidSlotIDs: t.noBidSlotIDs.concat(e.slotIDs)});
                    case"REQUESTED_BID_FOR_ADSERVER_SLOTS":
                        return s(s({}, t), {}, {
                            noBidSlotIDs: t.noBidSlotIDs.filter((function (t) {
                                return !Object(i.h)(e.slotIDs, t)
                            }))
                        });
                    case"SHOULD_SAMPLE_SLOT_RENDER":
                        return s(s({}, t), {}, {shouldSampleRender: e.value});
                    default:
                        return s(s({}, t), {}, {noBidSlotIDs: l(t.noBidSlotIDs)})
                }
            }(t.displayAdServer, e), errors: function (t, e) {
                return "LOG_ERROR" !== e.type ? l(t) : [].concat(l(t), [s({}, e.error)])
            }(t.errors, e), eventLog: function (t, e) {
                return "LOG_EVENT" !== e.type ? l(t) : [].concat(l(t), [s({}, e.event)])
            }(t.eventLog, e), experiments: function (t, e) {
                switch (e.type) {
                    case"SHOULD_CHUNK_REQUESTS":
                        return s({chunkRequests: !0 === t.shouldSampleLatency && e.value}, t);
                    case"SHOULD_CF_ROUTE":
                        return s(s({}, t), {}, {shouldCFRoute: e.value});
                    case"SHOULD_SAMPLE_LATENCY":
                        return s(s({}, t), {}, {shouldSampleLatency: e.value});
                    case"SHOULD_SAMPLE_FEATURES":
                        return s(s({}, t), {}, {shouldSampleFeatures: e.value});
                    case"SHOULD_USE_TEST_BID_ENDPOINT":
                        return s(s({}, t), {}, {shouldUseTestBidEndpoint: e.value});
                    default:
                        return s({}, t)
                }
            }(t.experiments, e), gamSlotFetchLog: function (t, e) {
                return "LOG_GAM_EVENT" !== e.type ? l(t) : [].concat(l(t), [s({}, e.event)])
            }(t.gamSlotFetchLog, e), gamSlotRenderPixel: function (t, e) {
                return "UPDATE_RENDER_OFFSETS" !== e.type ? s({}, t) : s(s({}, t), e.offsets)
            }(t.gamSlotRenderPixel, e), hosts: function (t, e) {
                return "SET_HOST" !== e.type ? s({}, t) : s(s({}, t), {}, u({}, e.hostName, e.hostValue))
            }(t.hosts, e), identityState: function (t, e) {
                return "RECORD_IDENTITY_STATE" !== e.type ? t : s(s({}, t), {}, u({}, e.vendor, Object(i.k)(t, e.vendor) ? t[e.vendor] : e.identityState))
            }(t.identityState, e), libraryLoadCallLatency: function (t, e) {
                return "RECORD_LIBRARY_LOAD_CALL_LATENCY" !== e.type ? t : e.latency
            }(t.libraryLoadCallLatency, e), Q: function (t, e) {
                return "SET_Q" !== e.type ? l(t) : l(e.Q)
            }(t.Q, e), slotBids: function (t, e) {
                switch (e.type) {
                    case"BID_STATE_CHANGE":
                        return s(s({}, t), {}, u({}, e.slotID, t[e.slotID].map((function (t) {
                            return t._targetingSetID === e._targetingSetID && (t.bidState = e.bidState, e.bidState === o.c.rendered ? t.timing.renderTime = e.ts : e.bidState === o.c.set && t.timing.setAtTimes.push(e.ts)), t
                        }))));
                    case"UPDATE_BID_INFO_PROP":
                        return void 0 === t[e.slotID] || t[e.slotID].filter((function (t) {
                            return t.matchesBidCacheId(e.iid)
                        })).length < 1 ? s({}, t) : s(s({}, t), {}, u({}, e.slotID, t[e.slotID].map((function (t) {
                            return t.matchesBidCacheId(e.iid) && (t[e.key] = e.value), t
                        }))));
                    case"UPDATE_SLOT_BIDS":
                        return s(s({}, t), e.bids.reduce((function (e, n) {
                            return Object(i.k)(e, n.slotID) ? e[n.slotID] = [].concat(l(e[n.slotID]), [n]) : Object(i.k)(t, n.slotID) ? e[n.slotID] = [].concat(l(t[n.slotID]), [n]) : e[n.slotID] = [n], e
                        }), {}));
                    default:
                        return s({}, t)
                }
            }(t.slotBids, e), targetingKeys: function (t, e) {
                return "UPDATE_SLOT_BIDS" !== e.type ? s({}, t) : s(s({}, t), e.bids.reduce((function (e, n) {
                    return Object(i.k)(t, n.slotID) ? e[n.slotID] = [].concat(l(t[n.slotID]), l((n.bidConfig.targeting || o.i).filter((function (e) {
                        return -1 === t[n.slotID].indexOf(e)
                    })))) : e[n.slotID] = n.bidConfig.targeting || o.i, e
                }), {}))
            }(t.targetingKeys, e), tcfParseTime: function (t, e) {
                return "RECORD_TCF_PARSE_TIME" !== e.type ? t : e.time
            }(t.tcfParseTime, e), outstream: function (t, e) {
                switch (e.type) {
                    case"RECORD_OUTSTREAM_RENDER_START_TIME":
                        return s(s({}, t), {}, {renderStart: e.time});
                    case"OUTSTREAM_SHOULD_SAMPLE":
                        return s(s({}, t), {}, {shouldSample: e.shouldSample});
                    default:
                        return t
                }
            }(t.outstream, e), consentManagementPlatform: function (t, e) {
                switch (e.type) {
                    case"RECORD_CMP_LISTENED_TO":
                        return s(s({}, t), {}, {isListenedTo: e.isListenedTo});
                    case"RECORD_CMP_CONSENT_DATA":
                        return s(s({}, t), {}, {tcData: e.tcData});
                    default:
                        return t
                }
            }(t.consentManagementPlatform, e)
        }
    }

    var p = {
        getState: function () {
            return r
        }, dispatch: function (t) {
            r = b(r, t)
        }
    };
    (p = Object(n.d)("redux") && Object(e.b)() && Object(i.k)(window, "__REDUX_DEVTOOLS_EXTENSION__") ? window.__REDUX_DEVTOOLS_EXTENSION__(b) : p).dispatch({type: "NOOP"})
}, function (t, e, n) {
    "use strict";
    n.d(e, "f", (function () {
        return p
    })), n.d(e, "c", (function () {
        return j
    })), n.d(e, "d", (function () {
        return S
    })), n.d(e, "b", (function () {
        return T
    })), n.d(e, "a", (function () {
        return _
    })), n.d(e, "g", (function () {
        return D
    })), n.d(e, "e", (function () {
        return E
    }));
    var r = n(4), o = n(2), i = n(8), a = n(0), c = n(1), s = n(9), u = n(14), l = n(11), d = [], f = !1, b = [];

    function p(t) {
        var e = new Image;
        return e.src = t, b.push(e), e
    }

    !0 === Object(i.c)("exposePixels") && (window.apstagPixelQueue = d, window.apstagPixelsSent = b);
    var y, m = {
        adServer: [],
        ampAdContext: [],
        appended: [],
        AaxSlotSizes: [],
        bidRender: [],
        bidRenderState: [],
        bidType: [],
        "blockedBidders-fetchBids": [],
        "blockedBidders-init": [],
        ccpa: [],
        cmpVar: [],
        creativeSize: [],
        deals: [],
        fetchBids: [],
        fifFlow: [],
        customFloor: [],
        gdpr: [],
        id: [],
        idRemap: [],
        iframe: [],
        renderFootprint: [],
        resizeIframe: [],
        schain: [],
        simplerGpt: [],
        slots: [],
        slotType: [],
        targeting: [],
        tcfVar: [],
        unusedDeal: [],
        useSafeFrames: [],
        trustToken: [],
        hasLocalStorage: []
    }, g = [], h = !1;

    function O() {
        h && (clearTimeout(y), h = !1), Object(a.c)(g, 5).forEach((function (t) {
            T({_type: "featureUsage", p: t, u: Object(s.g)(window)})
        })), g = []
    }

    function v() {
        h || (h = !0, y = setTimeout(O, 2e3))
    }

    function j(t, e) {
        try {
            return !!o.a.getState().experiments.shouldSampleFeatures && (void 0 !== m[t] && !Object(a.h)(m[t], e) && (m[t].push(e), g.push({
                cat: t,
                feat: e
            }), f && v(), !0))
        } catch (t) {
            return Object(c.b)(t, "sendFeaturePixel"), !1
        }
    }

    function S() {
        try {
            var t, e, n, r = o.a.getState().libraryLoadCallLatency,
                i = Object(u.c)(window, new RegExp("aax2/apstag.js"));
            null === i && 0 === r || (t = Object(u.e)(window, "navigationStart"), e = {
                _type: "libLatency",
                pid: l.b,
                ns: t
            }, null !== i && (e.fs = Object(u.a)(i, "fetchStart"), e.re = Object(u.a)(i, "responseEnd"), null !== (n = Object(u.f)(i))) && (e.c = n ? 1 : 0), 0 !== r && (e.tcc = r), T(e))
        } catch (t) {
            Object(c.b)(t, "sendInitLatencyPixel")
        }
    }

    function w(t) {
        try {
            var e;
            return f ? (e = function () {
                try {
                    var t = o.a.getState(), e = t.cfg.PIXEL_PATH, n = t.hosts.DEFAULT_AAX_PIXEL_HOST,
                        a = Object(i.c)("pixelHost", n);
                    return "".concat(r.s).concat(a).concat(e)
                } catch (t) {
                    return Object(c.b)(t, "buildPixelBaseUrl"), ""
                }
            }(), void 0 === t.bidId ? e += "p/PH/" : e += "".concat(t.bidId, "/"), p(e += function (t) {
                try {
                    t._tl = "aps-tag";
                    var e = o.a.getState(), n = null, i = "";
                    Object(a.k)(e, "config") && Object(a.k)(e.config, "pubID") && "" !== e.config.pubID && (n = e.config.isSelfServePub, i = e.config.pubID), null !== n && (n ? (t.src = r.t, t.pubid = i) : t.src = i), t.lv = r.l;
                    var s = function (t) {
                        try {
                            return t.replace(/\\.{1}/g, "")
                        } catch (t) {
                            return Object(c.b)(t, "escapeJsonForAax"), ""
                        }
                    }(JSON.stringify(t));
                    return encodeURIComponent(s)
                } catch (t) {
                    return Object(c.b)(t, "objectToUrlPath"), ""
                }
            }(t.payload))) : (d.push(t), !1)
        } catch (t) {
            return !1
        }
    }

    function T(t) {
        return w({payload: t})
    }

    function _(t, e) {
        return w({payload: e, bidId: t})
    }

    function D() {
        try {
            f || (f = !0, d.forEach(w), 0 < g.length && v())
        } catch (t) {
            Object(c.b)(t, "sendPixels")
        }
    }

    function E(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
        try {
            return w({payload: {_type: "outstreamRender", bi: e, loc: t, lt: n}})
        } catch (t) {
            return Object(c.b)(t, "outstreamPixel"), !1
        }
    }

    !0 === Object(i.c)("exposePixels") && (window.apstagFeaturePixelQueue = g)
}, function (t, e, n) {
    "use strict";
    n.d(e, "i", (function () {
        return a
    })), n.d(e, "y", (function () {
        return c
    })), n.d(e, "c", (function () {
        return r
    })), n.d(e, "h", (function () {
        return s
    })), n.d(e, "x", (function () {
        return u
    })), n.d(e, "f", (function () {
        return l
    })), n.d(e, "g", (function () {
        return d
    })), n.d(e, "d", (function () {
        return f
    })), n.d(e, "p", (function () {
        return b
    })), n.d(e, "n", (function () {
        return p
    })), n.d(e, "e", (function () {
        return y
    })), n.d(e, "w", (function () {
        return m
    })), n.d(e, "m", (function () {
        return g
    })), n.d(e, "o", (function () {
        return o
    })), n.d(e, "v", (function () {
        return h
    })), n.d(e, "j", (function () {
        return O
    })), n.d(e, "u", (function () {
        return i
    })), n.d(e, "t", (function () {
        return v
    })), n.d(e, "l", (function () {
        return j
    })), n.d(e, "s", (function () {
        return S
    })), n.d(e, "b", (function () {
        return w
    })), n.d(e, "k", (function () {
        return T
    })), n.d(e, "a", (function () {
        return _
    })), n.d(e, "r", (function () {
        return D
    })), n.d(e, "q", (function () {
        return E
    })), n.d(e, "A", (function () {
        return I
    })), n.d(e, "z", (function () {
        return k
    }));
    var r, o, i, a = ["amznbid", "amzniid", "amznsz", "amznp"],
        c = ["amznbid", "amzniid", "amznp", "r_amznbid", "r_amzniid", "r_amznp"],
        s = ((n = r = r || {}).new = "NEW", n.exposed = "EXPOSED", n.set = "SET", n.rendered = "RENDERED", "apstagDebug"),
        u = ["redux", "fake_bids", "verbose", "console", "console_v2", "errors"], l = "apstagDebugHeight",
        d = "apstagDEBUG", f = "apstagCfg", b = 0, p = 0, y = "apstagCxMEnabled", m = "3pmetadata",
        g = "apstagLiveRampTimestamp",
        h = ((e = o = o || {}).amznbid = "testBid", e.amzniid = "testImpression", e.amznp = "testP", e.crid = "testCrid", ["amznbid", "amznp"]),
        O = new Map([["__apsid", "ck"], ["__aps_id_p", "ckp"]]),
        v = ((n = i = i || {}).noRequest = "0", n.bidInFlight = "1", n.noBid = "2", "600"), j = "23.203.336",
        S = "https://", w = "".concat(S, "aax.amazon-adsystem.com/e/dtb/vast?"),
        T = "function" == typeof XMLHttpRequest && void 0 !== (new XMLHttpRequest).withCredentials, _ = "apstagLOADED",
        D = 13, E = 1e4, I = /^1[NY\-]{3}$/,
        k = '<!DOCTYPE html>\n<html>\n  <head>\n    <title>APS Video Ads</title>\n    <script src="https://dcqi4aodgg8tv.cloudfront.net/apsvideoplayersdk/latest/apsvid.js"><\/script>\n  </head>\n  <body>\n    <div id="amazon-ads-container" style="height: 100%; width: 100%; position: absolute;">\n    </div>\n    <script type="text/javascript">\nconst adsContainer = document.querySelector("#amazon-ads-container")\nconst companionContainers =\n  window.AmazonVideoAds.findCompanionDivs($$apstagCompanionContainers$$)\nconst videoPlayerProps = $$videoPlayerProps$$\n\nconst amazonVideoAds = new window.AmazonVideoAds(adsContainer,\n{ ...videoPlayerProps,\n  companions: companionContainers });\nwindow.adsM;\n\nfunction addListeners(adsM, amazonVideoAds) {\n  adsM.addListener(amazonVideoAds.eventNames.AdVideoPlayerEvents.COMPLETED, (e) => {\n    window.top.postMessage({"apsVideoPlayer": true, "event": "completed"}, window.top.location.origin);\n  })\n  adsM.addListener(amazonVideoAds.eventNames.AdVideoPlayerEvents.LOADED, (e) => {\n    window.top.postMessage({"apsVideoPlayer": true, "event": "loaded"}, window.top.location.origin);\n  })\n}\n \nwindow.requestAndPlay = () => {\n  amazonVideoAds.fetchAdsFromUrl("$$apstagVastTag$$")\n    .then(adsManager => {\n      adsM = adsManager;\n \n      adsM.init({\n        fullscreen: true,\n        muted: true,\n        volume: .3,\n        autoplay: false,\n        controls: false,\n        preload: "auto"\n      })\n\n      addListeners(adsM, amazonVideoAds);\n      adsM.startAds(2000, {shouldVideoRemainAfterPlay: true});\n    })\n    .catch(function(err) {\n      console.log("apstag failed to get APS ads manager", err);\n    });\n  }\n \n  requestAndPlay();\n    <\/script>\n  </body>\n</html>'
}, function (t, e, n) {
    "use strict";
    n.d(e, "b", (function () {
        return S
    })), n.d(e, "a", (function () {
        return E
    }));
    var r, o, i, a, c = n(1), s = n(3), u = n(16), l = n(21), d = n(2);

    function f(t) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function b(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {writable: !1}), e && function (t, e) {
            (Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }(t, e)
    }

    function p(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, r = m(t);
            n = e ? (n = m(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === f(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return y(r)
        }
    }

    function y(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function m(t) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function g(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function h(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, j(r.key), r)
        }
    }

    function O(t, e, n) {
        e && h(t.prototype, e), n && h(t, n), Object.defineProperty(t, "prototype", {writable: !1})
    }

    function v(t, e, n) {
        (e = j(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function j(t) {
        return t = function (t, e) {
            if ("object" !== f(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== f(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === f(t) ? t : String(t)
    }

    function S() {
        try {
            var t, e, n, r;
            return !(null == (t = window) || null == (e = t.localStorage) || !e.setItem || null == (n = window) || null == (r = n.localStorage) || !r.removeItem) || (Object(s.c)("hasLocalStorage", "absent"), !1)
        } catch (t) {
            return Object(s.c)("hasLocalStorage", "exception"), !1
        }
    }

    (e = r = r || {}).sessionStorage = "sessionStorage", e.localStorage = "localStorage", (o = o || {}).document = "document", (n = i = i || {}).clear = "clear", n.getItem = "getItem", n.key = "key", n.removeItem = "removeItem", n.setItem = "setItem", n.length = "length", (a = a || {}).cookie = "cookie";
    var w = ["AMZN-NoCookieConsent"], T = function () {
        function t(e, n) {
            g(this, t), v(this, "globalContext", void 0), v(this, "stateContainer", void 0), this.globalContext = e, this.stateContainer = n
        }

        return O(t, [{
            key: "privacyRegulationApplies", value: function () {
                var t = null == (e = l.a.readStoredConsentData(this.stateContainer)) ? void 0 : e.tcString,
                    e = null == e ? void 0 : e.gdprApplies;
                return !!("string" == typeof t && 0 < t.length || null != (t = this.globalContext.apstag) && t.isGDPRRegion || e)
            }
        }, {
            key: "allowedToStoreAndAccessInformationOnDevice", value: function () {
                if (this.privacyRegulationApplies()) {
                    var t;
                    if (!(t = null == (t = l.a.readStoredConsentData(this.stateContainer)) ? void 0 : t.tcString) || "string" != typeof t) return {
                        allowed: !1,
                        failures: ["Invalid tcString: ".concat(t)]
                    };
                    var e = Object(u.c)(t);
                    if (!e) return {allowed: !1, failures: ["Invalid tcString: ".concat(t)]};
                    if ((t = Object(u.b)(e)).length) return {allowed: !1, failures: t}
                }
                return {allowed: !0, failures: []}
            }
        }, {
            key: "ensureStorageUsageIsAllowedOrThrowOnError", value: function (t, e, n) {
                var r = (o = this.allowedToStoreAndAccessInformationOnDevice()).allowed, o = o.failures;
                if (!(r || n && 0 < n.length && 0 <= w.indexOf(n[0]))) throw new Error("Not allowed to store or access information on device: ".concat(o));
                if (!(r = this.globalContext[t])) throw new ReferenceError("Object ".concat(t, " isn't available"));
                if (void 0 === r[e]) throw new ReferenceError("Method ".concat(e, " isn't available"))
            }
        }, {
            key: "executeFunction", value: function (t, e, n, r, o) {
                return e = this.globalContext[e], (n = (r = r || e[n]).apply(e, t)) && null != o && o.isJson ? JSON.parse(n) : n
            }
        }, {
            key: "executeFunctionOrThrowOnError", value: function (t, e, n, r, o) {
                return this.ensureStorageUsageIsAllowedOrThrowOnError(e, n, t), this.executeFunction(t, e, n, r, o)
            }
        }, {
            key: "regulatedMethod", value: function (t, e, n, r) {
                var o = this;
                return function () {
                    try {
                        for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                        return o.executeFunctionOrThrowOnError(a, t, e, n, r)
                    } catch (i) {
                        if (null == r || !r.ignoreFailure) throw Object(c.b)(i, "RegulatedDataContainer-regulatedMethod"), i
                    }
                }
            }
        }]), t
    }(), _ = function () {
        b(e, T);
        var t = p(e);

        function e() {
            var n;
            g(this, e);
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c];
            return v(y(n = t.call.apply(t, [this].concat(i))), "_getItem", (function (t) {
                return n.globalContext.document.cookie.split("; ").reduce((function (e, n) {
                    return (n = n.split("="))[0] === t ? decodeURIComponent(n[1]) : e
                }), "") || null
            })), v(y(n), "_removeItem", (function (t) {
                n._setItem(t, "", 0)
            })), v(y(n), "_setItem", (function (t, e, r) {
                var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "/";
                r = new Date(r);
                if (!n.isValidDate(r)) throw new Error("Invalid expiration date");
                n.globalContext.document.cookie = "".concat(t, "=").concat(e, "; expires=").concat(r.toUTCString(), "; path=").concat(o, ";")
            })), v(y(n), "getItem", (function (t, e) {
                return n.regulatedMethod(o.document, a.cookie, n._getItem, e)(t)
            })), v(y(n), "setItem", (function (t, e, r) {
                var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "/";
                return n.regulatedMethod(o.document, a.cookie, n._setItem, 4 < arguments.length ? arguments[4] : void 0)(t, e, r, i)
            })), v(y(n), "removeItem", (function (t, e) {
                return n.regulatedMethod(o.document, a.cookie, n._removeItem, e)(t)
            })), n
        }

        return O(e, [{
            key: "isValidDate", value: function (t) {
                return t instanceof Date && !isNaN(t)
            }
        }]), e
    }(), D = function () {
        b(e, T);
        var t = p(e);

        function e(n, r, o) {
            var a;
            return g(this, e), v(y(a = t.call(this, n, r)), "storageType", void 0), v(y(a), "clear", (function (t) {
                return a.regulatedMethod(a.storageType, i.clear, null, t)()
            })), v(y(a), "getItem", (function (t, e) {
                return a.regulatedMethod(a.storageType, i.getItem, null, e)(t)
            })), v(y(a), "key", (function (t, e) {
                return a.regulatedMethod(a.storageType, i.key, null, e)(t)
            })), v(y(a), "removeItem", (function (t, e) {
                return a.regulatedMethod(a.storageType, i.removeItem, null, e)(t)
            })), v(y(a), "setItem", (function (t, e, n) {
                return a.regulatedMethod(a.storageType, i.setItem, null, n)(t, e)
            })), a.storageType = o, a
        }

        return O(e, [{
            key: "length", get: function () {
                return this.ensureStorageUsageIsAllowedOrThrowOnError(this.storageType, i.length), this.globalContext[this.storageType].length
            }
        }]), e
    }(), E = function () {
        function t(e) {
            g(this, t), v(this, "globalContext", void 0), v(this, "stateContainer", void 0), this.globalContext = e.globalContext, this.stateContainer = e.stateContainer
        }

        return O(t, [{
            key: "sessionStorage", get: function () {
                try {
                    return new D(this.globalContext, this.stateContainer, r.sessionStorage)
                } catch (t) {
                    throw Object(c.b)(t, "RegulatedDataContainers-sessionStorage"), t
                }
            }
        }, {
            key: "localStorage", get: function () {
                try {
                    return new D(this.globalContext, this.stateContainer, r.localStorage)
                } catch (t) {
                    throw Object(c.b)(t, "RegulatedDataContainers-localStorage"), t
                }
            }
        }, {
            key: "cookie", get: function () {
                try {
                    return new _(this.globalContext, this.stateContainer)
                } catch (t) {
                    throw Object(c.b)(t, "RegulatedDataContainers-cookie"), t
                }
            }
        }, {
            key: "indexedDB", get: function () {
                throw new ReferenceError("Interface isn't yet defined")
            }
        }, {
            key: "allowedToStoreAndAccessInformationOnDevice", value: function () {
                try {
                    return new T(this.globalContext, this.stateContainer).allowedToStoreAndAccessInformationOnDevice().allowed
                } catch (t) {
                    return Object(c.b)(t, "RegulatedDataContainers-allowedToStoreAndAccessInformationOnDevice"), !1
                }
            }
        }], [{
            key: "getDefault", value: function () {
                return new t({globalContext: window, stateContainer: d.a})
            }
        }]), t
    }()
}, function (t, e, n) {
    "use strict";
    var r, o;

    function i(t) {
        return void 0 !== t.amzniid
    }

    function a(t) {
        return void 0 !== t.kvMap
    }

    n.d(e, "a", (function () {
        return r
    })), n.d(e, "b", (function () {
        return o
    })), n.d(e, "d", (function () {
        return i
    })), n.d(e, "c", (function () {
        return a
    })), (n = r = r || {}).DISPLAY = "display", n.VIDEO = "video", n.MULTI_FORMAT = "multi-format", (e = o = o || {}).MANAGED_WEB = "mw", e.SELF_SERVE_WEB = "ssw"
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return x
    })), n.d(e, "b", (function () {
        return U
    }));
    var r = n(19), o = n(0), i = n(1), a = (e = n(17), n(6));

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function u(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(n), !0).forEach((function (e) {
                m(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, g(r.key), r)
        }
    }

    function d() {
        return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = y(t));) ;
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function f(t, e) {
        return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function b(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, r = y(t);
            n = e ? (n = y(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === c(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return p(r)
        }
    }

    function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function m(t, e, n) {
        (e = g(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function g(t) {
        return t = function (t, e) {
            if ("object" !== c(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== c(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === c(t) ? t : String(t)
    }

    var h = function (t) {
        var e = r;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {writable: !1}), t && f(e, t);
        var n = b(r);

        function r(t) {
            var e;
            if (this instanceof r) return e = {
                slotID: t.targetId,
                slotName: Object(o.k)(t, "invCode") ? t.invCode : Object(o.k)(t, "tagId") ? t.tagId : t.targetId
            }, m(p(e = n.call(this, e)), "rawSlot", void 0), e.rawSlot = t, e;
            throw new TypeError("Cannot call a class as a function")
        }

        return e = r, (t = [{
            key: "mediaType", get: function () {
                return a.a.DISPLAY
            }
        }, {
            key: "sizes", get: function () {
                try {
                    return this.rawSlot.sizes
                } catch (t) {
                    return this.reportError(t, "sizes"), []
                }
            }
        }, {
            key: "aaxSlot", get: function () {
                try {
                    var t = u(u({}, d(y(r.prototype), "aaxSlot", this)), {}, {
                        sd: this.slotID,
                        s: this.sizes.filter(o.i).map((function (t) {
                            return t.join("x")
                        }))
                    });
                    return this.slotID !== this.slotName && (t.sn = this.slotName), t
                } catch (t) {
                    return {sd: "", s: [], kv: {}}
                }
            }
        }, {
            key: "reportError", value: function (t, e, n) {
                Object(i.b)(t, "ApnSlot-".concat(e), n)
            }
        }, {
            key: "isValid", value: function () {
                return !(!d(y(r.prototype), "isValid", this).call(this) || 0 === this.sizes.length && (this.reportIsValidMessages(["'sizes' must have at least 1 valid item"], !0), 1))
            }
        }, {
            key: "initKeywords", value: function () {
                try {
                    Object(o.k)(this.rawSlot, "keywords") || (this.rawSlot.keywords = {})
                } catch (t) {
                    this.reportError(t, "initKeywords")
                }
            }
        }, {
            key: "setTargeting", value: function (t, e) {
                try {
                    this.initKeywords(), this.rawSlot.keywords[t] = e
                } catch (t) {
                    this.reportError(t, "setTargeting")
                }
            }
        }, {
            key: "getTargeting", value: function (t) {
                try {
                    return this.initKeywords(), Object(o.k)(this.rawSlot.keywords, t) ? [this.rawSlot.keywords[t]] : []
                } catch (t) {
                    return this.reportError(t, "getTargeting"), []
                }
            }
        }, {
            key: "clearTargeting", value: function (t) {
                try {
                    this.initKeywords(), delete this.rawSlot.keywords[t]
                } catch (t) {
                    this.reportError(t, "clearTargeting")
                }
            }
        }]) && l(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), r
    }(e.a);

    function O(t) {
        return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function v(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, T(r.key), r)
        }
    }

    function j(t, e) {
        return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function S(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function w(t) {
        return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function T(t) {
        return t = function (t, e) {
            if ("object" !== O(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== O(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === O(t) ? t : String(t)
    }

    var _ = function (t) {
        var e = r;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {writable: !1}), t && j(e, t);
        var n = function (t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var n, r = w(t);
                n = e ? (n = w(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
                if (n && ("object" === O(n) || "function" == typeof n)) return n;
                if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                return S(r)
            }
        }(r);

        function r() {
            var t = this, e = r;
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            for (var o, i, a = arguments.length, c = new Array(a), s = 0; s < a; s++) c[s] = arguments[s];
            return e = S(t = n.call.apply(n, [this].concat(c))), i = !0, (o = T(o = "isSupported")) in e ? Object.defineProperty(e, o, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[o] = i, t
        }

        return e = r, (t = [{
            key: "reportError", value: function (t, e) {
                Object(i.b)(t, "AppNexusAdServer-".concat(e))
            }
        }, {
            key: "cmdQueuePush", value: function (t) {
                try {
                    window.apntag.anq.push(t)
                } catch (t) {
                    this.reportError(t, "cmdQueuePush")
                }
            }
        }, {
            key: "setTargeting", value: function (t, e) {
                try {
                    Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "requests") && (Object(o.k)(window.apntag.requests, "keywords") || (window.apntag.requests.keywords = {}), window.apntag.requests.keywords[t] = e)
                } catch (t) {
                    this.reportError(t, "setTargeting")
                }
            }
        }, {
            key: "getTargeting", value: function (t) {
                try {
                    if (!Object(o.k)(window, "apntag") || !Object(o.k)(window.apntag, "requests")) return [];
                    Object(o.k)(window.apntag.requests, "keywords") || (window.apntag.requests.keywords = {});
                    var e = window.apntag.requests.keywords[t];
                    return void 0 === e ? [] : [e]
                } catch (t) {
                    return this.reportError(t, "getTargeting"), []
                }
            }
        }, {
            key: "clearTargeting", value: function (t) {
                try {
                    Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "requests") && Object(o.k)(window.apntag.requests, "keywords") && delete window.apntag.requests.keywords[t]
                } catch (t) {
                    this.reportError(t, "clearTargeting")
                }
            }
        }, {
            key: "hasAdServerObjectLoaded", value: function () {
                try {
                    return Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "loaded") && !0 === window.apntag.loaded
                } catch (t) {
                    return this.reportError(t, "hasAdServerObjectLoaded"), !1
                }
            }
        }, {
            key: "isCommandQueueDefined", value: function () {
                try {
                    return Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "anq")
                } catch (t) {
                    return this.reportError(t, "isCommandQueueDefined"), !1
                }
            }
        }, {
            key: "getSlots", value: function () {
                try {
                    var t = [];
                    return Object(o.k)(window, "apntag") && Object(o.k)(window.apntag, "requests") && Object(o.k)(window.apntag.requests, "tags") && Object(o.j)(window.apntag.requests.tags) && Object.keys(window.apntag.requests.tags).forEach((function (e) {
                        e = window.apntag.requests.tags[e], t.push(new h(e))
                    })), t
                } catch (t) {
                    return this.reportError(t, "getSlots"), []
                }
            }
        }]) && v(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), r
    }(r.a), D = n(28);

    function E(t) {
        return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function I(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, R(r.key), r)
        }
    }

    function k(t, e) {
        return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function A(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function C(t) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function P(t, e, n) {
        (e = R(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function R(t) {
        return t = function (t, e) {
            if ("object" !== E(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== E(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === E(t) ? t : String(t)
    }

    var z = function (t) {
        var e = r;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {writable: !1}), t && k(e, t);
        var n = function (t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var n, r = C(t);
                n = e ? (n = C(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
                if (n && ("object" === E(n) || "function" == typeof n)) return n;
                if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                return A(r)
            }
        }(r);

        function r() {
            var t = this, e = r;
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
            return P(A(t = n.call.apply(n, [this].concat(i))), "isSupported", !0), P(A(t), "needNewBidObject", !0), t
        }

        return e = r, (t = [{
            key: "reportError", value: function (t, e) {
                Object(i.b)(t, "SmartAdServer-".concat(e))
            }
        }, {
            key: "cmdQueuePush", value: function (t) {
                try {
                    window.sas.cmd.push(t)
                } catch (t) {
                    this.reportError(t, "cmdQueuePush")
                }
            }
        }, {
            key: "hasAdServerObjectLoaded", value: function () {
                try {
                    return Object(o.k)(window, "sas") && Object(o.k)(window.sas, "__smartLoaded") && !0 === window.sas.__smartLoaded
                } catch (t) {
                    return this.reportError(t, "hasAdServerObjectLoaded"), !1
                }
            }
        }, {
            key: "isCommandQueueDefined", value: function () {
                try {
                    return Object(o.k)(window, "sas") && Object(o.k)(window.sas, "cmd")
                } catch (t) {
                    return this.reportError(t, "isCommandQueueDefined"), !1
                }
            }
        }]) && I(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), r
    }(r.a), F = n(3), x = new r.a;

    function U(t) {
        try {
            switch (t) {
                case"appnexus":
                    Object(F.c)("adServer", t), x = new _;
                    break;
                case"googletag":
                    Object(F.c)("adServer", t), x = new D.a;
                    break;
                case"sas":
                    Object(F.c)("adServer", t), x = new z;
                    break;
                default:
                    "string" == typeof t ? Object(F.c)("adServer", "invalid-".concat(t)) : Object(F.c)("adServer", "none"), x = new r.a
            }
        } catch (t) {
            Object(i.b)(t, "setDisplayAdServer")
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return d
    })), n.d(e, "b", (function () {
        return g
    })), n.d(e, "d", (function () {
        return _
    })), n.d(e, "c", (function () {
        return E
    })), n.d(e, "e", (function () {
        return k
    }));
    var r = n(2), o = n(5), i = n(0), a = n(4), c = n(10), s = n(3), u = n(1), l = ["getLog", "getState"];

    function d(t, e, n) {
        try {
            switch (Object(i.h)(l, t) && (Object(u.b)(new Error("Debug call made: ".concat(t)), "debugPublicApi-call-".concat(t)), l = l.filter((function (e) {
                return e !== t
            }))), t) {
                case"getLog":
                    return r.a.getState().eventLog;
                case"getState":
                    return r.a.getState();
                case"enable":
                    return D("fake_bids", !0), "DEBUG MODE ENABLED";
                case"disable":
                    return D("fake_bids", !1), "DEBUG MODE DISABLED";
                case"enableConsole":
                    return g(!1, "command"), "Debug console enabled";
                case"enableConsoleV2":
                    return g(!0, "command"), "Debug console v2 enabled";
                case"disableConsole":
                    try {
                        D("console", !1), D("console_v2", !1), null !== f && document.body.removeChild(f), m = !1, Object(o.b)() && o.a.getDefault().localStorage.removeItem(a.f)
                    } catch (e) {
                        Object(u.b)(e, "disableDebugConsole", {makeVisibleToAllUsers: !0})
                    }
                    return "Debug console disabled";
                case"setDebug":
                    return (D(e, n) ? "Set debug mode '" : "Failed to set debug mode '").concat(e, "' to '").concat(n, "'");
                default:
                    return "unknown debug argument"
            }
        } catch (e) {
            return Object(u.b)(e, "debugPublicApi", {makeVisibleToAllUsers: !0}), "error"
        }
    }

    var f, b, p, y, m = !1;

    function g() {
        var t, e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            n = 1 < arguments.length ? arguments[1] : void 0;
        try {
            D(e ? "console_v2" : "console", !0), m || (t = {
                url: e ? r.a.getState().cfg.DEBUG_APP_HTML_V2 : r.a.getState().cfg.DEBUG_APP_HTML,
                onload: h,
                onerror: function () {
                    return Object(u.b)(new Error("Error Loading Debug Console"), "enableDebugConsole-".concat(e ? "v2" : "v1", "-onerror"), {makeVisibleToAllUsers: !0})
                }
            }, Object(c.d)(t), setTimeout((function () {
                try {
                    var t = {_type: "debugLoad", mode: e ? 2 : 1};
                    Object(i.k)(r.a.getState().config, "pubID") && (t.src = r.a.getState().config.pubID), null !== n && (t.method = n), Object(s.b)(t)
                } catch (t) {
                    Object(u.b)(t, "enableDebugConsole-setTimeout", {makeVisibleToAllUsers: !0})
                }
            }), 5e3))
        } catch (t) {
            Object(u.b)(t, "enableDebugConsole", {makeVisibleToAllUsers: !0})
        }
    }

    function h(t) {
        try {
            var e = t.responseText,
                n = (f = document.createElement("div"), b = document.createElement("div"), p = document.createElement("iframe"), 200);
            _("console_v2") && (n = 330), Object(o.b)() && null !== o.a.getDefault().localStorage.getItem(a.f) && (n = parseInt(o.a.getDefault().localStorage.getItem(a.f), 10)), (isNaN(n) || n > window.innerHeight) && (n = 200), f.style.background = "#eaeded", f.style.zIndex = "2147483647", f.style.bottom = "0", f.style.position = "fixed !important", f.style.display = "block !important", f.style.left = "0", f.style.right = "0", f.style.height = "".concat(n, "px"), b.style.cursor = "row-resize", b.style.height = "2px", b.style.position = "absolute", b.style.top = "0", b.style.left = "0", b.style.right = "0", b.style.backgroundColor = "RGBA(0,0,0,0)", f.appendChild(b), p.frameBorder = "0", p.marginHeight = "0", p.marginWidth = "0", p.scrolling = "no", p.id = "apstag-debug-iframe", p.src = "about:blank", p.style.display = "block", p.style.width = "100%", p.style.height = "".concat(n, "px"), f.appendChild(p), document.body.appendChild(f), null !== p.contentDocument && (p.contentDocument.open(), p.contentDocument.write(e), p.contentDocument.close()), b.addEventListener("mousedown", j)
        } catch (t) {
            Object(u.b)(t, "renderDebugConsole", {makeVisibleToAllUsers: !0})
        }
    }

    function O(t) {
        try {
            var e = window.innerHeight - t.clientY;
            return e < 200 && (e = 200), f.style.height = "".concat(e, "px"), p.style.height = "".concat(e, "px"), e
        } catch (t) {
            return Object(u.b)(t, "resizeDebugConsole", {makeVisibleToAllUsers: !0}), 200
        }
    }

    function v(t) {
        try {
            return t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1
        } catch (t) {
            return Object(u.b)(t, "preventEvent", {makeVisibleToAllUsers: !0}), !1
        }
    }

    function j() {
        try {
            void 0 === y && ((y = document.createElement("div")).style.position = "fixed", y.style.left = "0", y.style.right = "0", y.style.top = "0", y.style.bottom = "0", y.style.zIndex = "9999999999"), f.appendChild(y), window.addEventListener("mouseup", w), window.addEventListener("mousemove", S)
        } catch (t) {
            Object(u.b)(t, "resizeBarMouseDownListener", {makeVisibleToAllUsers: !0})
        }
    }

    function S(t) {
        try {
            return O(t), v(t)
        } catch (t) {
            return Object(u.b)(t, "resizeBarMouseMoveListener", {makeVisibleToAllUsers: !0}), !1
        }
    }

    function w(t) {
        try {
            null !== y && f.removeChild(y), window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", w);
            var e = O(t);
            return Object(o.b)() && o.a.getDefault().localStorage.setItem(a.f, "".concat(e)), v(t)
        } catch (t) {
            return Object(u.b)(t, "resizeBarMouseUpListener", {makeVisibleToAllUsers: !0}), !1
        }
    }

    function T() {
        try {
            if (!Object(o.b)()) return [];
            var t = o.a.getDefault().localStorage.getItem(a.h, {ignoreFailure: !0}),
                e = (null === t || "false" === t ? t = "[]" : "true" === t && (t = '["fake_bids"]'), []);
            try {
                e = JSON.parse(t)
            } catch (t) {
            }
            return (e = Object(i.i)(e) ? e : []).filter((function (t) {
                return Object(i.h)(a.x, t)
            }))
        } catch (t) {
            return []
        }
    }

    function _(t) {
        try {
            return Object(i.h)(T(), t)
        } catch (t) {
            return !1
        }
    }

    function D(t, e) {
        try {
            var n;
            if (Object(o.b)() && -1 !== a.x.indexOf(t)) return n = T(), e && -1 === n.indexOf(t) ? n.push(t) : e || (n = n.filter((function (e) {
                return e !== t
            }))), 0 === n.length ? o.a.getDefault().localStorage.removeItem(a.h) : o.a.getDefault().localStorage.setItem(a.h, JSON.stringify(n)), k(), 1
        } catch (e) {
            Object(u.b)(e, "setDebugMode")
        }
    }

    function E(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        try {
            if (Object(i.k)(window, a.g) && Object(i.k)(window[a.g], t)) return window[a.g][t]
        } catch (t) {
            Object(u.b)(t, "getDebugValue")
        }
        return e
    }

    var I = [];

    function k() {
        try {
            T().filter((function (t) {
                return -1 === I.indexOf(t)
            })).forEach((function (t) {
                Object(u.b)(new Error("Debug method enabled: ".concat(t)), "debugPublicApi-enabled-".concat(t), {makeVisibleToAllUsers: !0}), I.push(t)
            }))
        } catch (t) {
            Object(u.b)(t, "pixelDebugModes")
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "c", (function () {
        return d
    })), n.d(e, "j", (function () {
        return f
    })), n.d(e, "g", (function () {
        return b
    })), n.d(e, "h", (function () {
        return p
    })), n.d(e, "d", (function () {
        return y
    })), n.d(e, "e", (function () {
        return m
    })), n.d(e, "f", (function () {
        return g
    })), n.d(e, "i", (function () {
        return O
    })), n.d(e, "b", (function () {
        return v
    })), n.d(e, "a", (function () {
        return j
    })), n.d(e, "k", (function () {
        return S
    }));
    var r = n(8), o = n(0), i = n(5), a = n(1), c = n(4), s = n(2), u = n(3);

    function l(t) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function d(t) {
        try {
            return t.split("_").pop()
        } catch (t) {
            return Object(a.b)(t, "getAmpAmznBidValue"), ""
        }
    }

    function f(t) {
        try {
            return !Object(o.k)(t, "slots")
        } catch (t) {
            return Object(a.b)(t, "isAAXPunt"), !0
        }
    }

    function b(t) {
        try {
            var e, n = Object(r.c)("url");
            if (null !== n) return encodeURIComponent(n);
            try {
                S(t, !1) ? (Object(u.c)("ampAdContext", "getCurrentUrl"), e = null, t.context && (e = t.context.canonicalUrl || t.context.sourceUrl)) : e = t.top.location.href
            } catch (t) {
                e = null
            }
            if (null === e || !e || void 0 === e) {
                e = "";
                try {
                    t.top !== t.self && (e = t.document.referrer)
                } catch (t) {
                }
            }
            return encodeURIComponent(e)
        } catch (t) {
            return Object(a.b)(t, "getCurrentUrl"), ""
        }
    }

    function p(t) {
        try {
            var e, n = "", o = Object(r.c)("url");
            if (null !== o) return encodeURIComponent(o);
            try {
                try {
                    e = (S(t, !1) && (Object(u.c)("ampAdContext", "getReferrerUrl"), t.context) || t.top.document).referrer
                } catch (n) {
                    e = t.document.referrer
                }
                n = encodeURIComponent(e)
            } catch (n) {
            }
            return n
        } catch (n) {
            return Object(a.b)(n, "getReferrerUrl"), ""
        }
    }

    function y() {
        try {
            var t = {cookiesParams: ""};
            return c.j.forEach((function (e, n) {
                (n = i.a.getDefault().cookie.getItem(n)) && (t.cookiesParams += "&".concat(e, "=").concat(n))
            })), t
        } catch (t) {
            return Object(a.b)(t, "getApsFirstPartyCookies"), {cookiesParams: ""}
        }
    }

    function m(t) {
        try {
            var e = s.a.getState().config.blockedBidders,
                n = (Object(o.k)(t, "blockedBidders") && Object(o.i)(t.blockedBidders) && (e = t.blockedBidders), "");
            return Object(o.i)(e) ? JSON.stringify(e) : n
        } catch (t) {
            return Object(a.b)(t, "getBlockedBidders", {makeVisibleToAllUsers: !0}), ""
        }
    }

    function g() {
        try {
            var t;
            return Object(i.b)() ? (t = s.a.getState(), Object(o.k)(t, "cfg") && Object(o.k)(t.cfg, "v") && -1 !== t.cfg.v ? t.cfg.v : null) : c.p
        } catch (t) {
            return Object(a.b)(t, "getCfgVersion"), null
        }
    }

    function h(t) {
        try {
            if (-1 === ["string", "number"].indexOf(l(t))) return !1;
            var e = Math.floor(Number(t));
            if (e > c.n) return e
        } catch (t) {
            Object(a.b)(t, "parseTimeout", {makeVisibleToAllUsers: !0})
        }
        return !1
    }

    function O(t, e) {
        try {
            var n = h(t.timeout);
            return !1 === (n = !1 === n ? h(e.config.bidTimeout) : n) ? h(e.cfg.DEFAULT_TIMEOUT) : n
        } catch (t) {
            return Object(a.b)(t, "getTimeout", {makeVisibleToAllUsers: !0}), 2e3
        }
    }

    function v(t, e) {
        var n, r = !1;

        function o(e) {
            if (!r) try {
                t(e)
            } catch (e) {
                Object(a.b)(e, "executeFunctionOnceWithTimeout-wrappedFunction", {makeVisibleToAllUsers: !0})
            }
            clearTimeout(n), r = !0
        }

        try {
            return n = setTimeout(o, e, !0), o.bind(null, !1)
        } catch (e) {
            return Object(a.b)(e, "executeFunctionOnceWithTimeout", {makeVisibleToAllUsers: !0}), function () {
            }
        }
    }

    function j(t) {
        var e = !1;
        return function (n) {
            if (!e) try {
                t(n)
            } catch (n) {
                Object(a.b)(n, "executeFunctionOnceWithTimeout-wrappedFunction", {makeVisibleToAllUsers: !0})
            }
            e = !0
        }
    }

    function S(t, e) {
        try {
            var n = e ? t.AMP_CONTEXT_DATA : t.context;
            return Boolean(n && Object(o.k)(n, "tagName") && "AMP-AD" === n.tagName)
        } catch (t) {
            return Object(a.b)(t, "isInAmpAd"), !1
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "d", (function () {
        return i
    })), n.d(e, "b", (function () {
        return a
    })), n.d(e, "a", (function () {
        return c
    })), n.d(e, "c", (function () {
        return s
    }));
    var r = n(1);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t) {
        var e, n = t.url, i = t.onload, a = t.onerror, c = t.ontimeout, s = t.withCredentials,
            u = void 0 === (u = t.body) ? null : u, l = void 0 === (e = t.headers) ? null : e,
            d = (t = void 0 === (e = t.trustTokenParameter) ? null : e, new window.XMLHttpRequest);
        try {
            if ("" === n) void 0 !== a && a.call(d, "error"); else {
                d.onload = i.bind(null, d), void 0 !== a && (d.onerror = a), void 0 !== c && (d.ontimeout = c), void 0 !== s && (d.withCredentials = s);
                var f = null !== u ? "POST" : "GET";
                d.open(f, n), null !== l && "object" === o(l) && Object.keys(l).forEach((function (t) {
                    d.setRequestHeader(t, l[t])
                }));
                try {
                    null !== t && "object" === o(t) && window.location === window.parent.location && d.setTrustToken(t)
                } catch (t) {
                    Object(r.b)(t, "setTrustToken")
                }
                d.send(u)
            }
        } catch (t) {
            void 0 !== a && a.call(d, "error"), Object(r.b)(t, "xhrRequest")
        }
    }

    function a(t, e, n, o) {
        try {
            if (void 0 === n && (n = document), void 0 === t) return "function" == typeof e && e(!0), !1;
            var i = n.getElementsByTagName("script")[0] || n.body.firstChild, a = n.createElement("script");
            if (a.type = "text/javascript", a.async = !0, a.src = t, e && c(a, e), c(a, o || function () {
                Object(r.b)(new Error("Error Loading Script Tag"), "loadScriptTag-onerror")
            }, [], "onerror"), null !== i.parentNode) return i.parentNode.insertBefore(a, i), !0
        } catch (t) {
            Object(r.b)(t, "loadScriptTag", {makeVisibleToAllUsers: !0})
        }
        return !1
    }

    function c(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
            o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "onload";
        try {
            return "function" == typeof e && (t[o] = function () {
                e.apply(null, n)
            }, !0)
        } catch (t) {
            return Object(r.b)(t, "addCallbackFunction"), !1
        }
    }

    function s(t) {
        try {
            return encodeURIComponent(JSON.stringify(t))
        } catch (t) {
            return Object(r.b)(t, "objToUrlParam"), ""
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return E
    })), n.d(e, "b", (function () {
        return I
    })), n.d(e, "h", (function () {
        return k
    })), n.d(e, "d", (function () {
        return A
    })), n.d(e, "g", (function () {
        return C
    })), n.d(e, "c", (function () {
        return P
    })), n.d(e, "f", (function () {
        return R
    })), n.d(e, "e", (function () {
        return z
    }));
    var r = n(2), o = n(8), i = n(4), a = n(0), c = n(10), s = n(1), u = n(9), l = n(13), d = n(6), f = n(18), b = n(3),
        p = n(12), y = n(15), m = n(26);

    function g(t) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function h(t) {
        return function (t) {
            if (Array.isArray(t)) return w(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || S(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function O(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function v(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? O(Object(n), !0).forEach((function (e) {
                _(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function j(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var r, o, i, a, c = [], s = !0, u = !1;
                try {
                    if (i = (n = n.call(t)).next, 0 === e) {
                        if (Object(n) !== n) return;
                        s = !1
                    } else for (; !(s = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); s = !0) ;
                } catch (t) {
                    u = !0, o = t
                } finally {
                    try {
                        if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
                    } finally {
                        if (u) throw o
                    }
                }
                return c
            }
        }(t, e) || S(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function S(t, e) {
        var n;
        if (t) return "string" == typeof t ? w(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(t, e) : void 0
    }

    function w(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function T(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, D(r.key), r)
        }
    }

    function _(t, e, n) {
        (e = D(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function D(t) {
        return t = function (t, e) {
            if ("object" !== g(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== g(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === g(t) ? t : String(t)
    }

    var E = function () {
        function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            _(this, "bidConfig", void 0), _(this, "bidState", i.c.new), _(this, "_targetingSetID", void 0), _(this, "timing", {setAtTimes: []}), _(this, "pixelSent", !1), _(this, "useSafeFrames", !1), _(this, "bidReqID", ""), _(this, "host", void 0), _(this, "ev", void 0), _(this, "cfe", void 0), _(this, "isAmp", !1), _(this, "doc", void 0), _(this, "inheritSize", void 0), this.bidConfig = e, this._targetingSetID = Object(a.d)(), r.a.getState().config.useSafeFrames && (this.useSafeFrames = !0), this.useSafeFrames && Object(a.k)(e, "targeting") && e.targeting.push("amznhost"), Object(a.k)(e, "meta") ? Object(a.i)(e.meta) || (this.reportError({
                name: "TypeError",
                message: "'meta' is not an 'array': ".concat(JSON.stringify(e.meta))
            }, "constructor-meta"), e.meta = []) : e.meta = [];
            try {
                var n = "d",
                    o = (this.bidConfig.mediaType !== d.a.VIDEO && "v" !== this.bidConfig.mediaType || (n = "v"), []);
                Object(a.k)(this.bidConfig, "amzndeals") && (Object(b.c)("bidType", "".concat(n, "-amzndeals")), o = this.bidConfig.amzndeals.map((function (t) {
                    return "".concat(t, "amzniid")
                }))), this.bidConfig.targeting.filter((function (t) {
                    return -1 !== t.indexOf("amzniid") && !Object(a.h)(o, t)
                })).forEach((function (t) {
                    return Object(b.c)("bidType", "".concat(n, "-").concat(t))
                })), Object(a.k)(this.bidConfig, "fif") && "1" === this.bidConfig.fif ? Object(b.c)("bidRender", "friendly") : Object(b.c)("bidRender", "unfriendly")
            } catch (e) {
                this.reportError(e, "pixeling")
            }
        }

        var e, n;
        return e = t, (n = [{
            key: "reportError", value: function (t, e, n) {
                Object(s.b)(t, "Bid-".concat(e), n)
            }
        }, {
            key: "mediaType", get: function () {
                var t = "d";
                return this.bidConfig.mediaType !== d.a.VIDEO && "v" !== this.bidConfig.mediaType && "v" !== this.bidConfig.mediaType_sp ? t : d.a.VIDEO
            }
        }, {
            key: "targeting", get: function () {
                var t = this;
                try {
                    return this.bidConfig.targeting.map((function (e) {
                        return "amznhost" === e ? [e, encodeURIComponent(t.host)] : Object(a.k)(t.bidConfig, e) && Object(a.i)(t.bidConfig[e]) ? [e, encodeURIComponent(t.bidConfig[e].join(","))] : Object(a.k)(t.bidConfig, e) ? [e, encodeURIComponent(t.bidConfig[e])] : [e, ""]
                    })).map((function (t) {
                        var e = (t = j(t, 2))[0];
                        t = t[1];
                        return "&".concat(e, "=").concat(t)
                    })).join("")
                } catch (t) {
                    return this.reportError(t, "targeting"), ""
                }
            }
        }, {
            key: "bidObject", get: function () {
                try {
                    var t = {
                        slotID: this.bidConfig.slotID,
                        amzniid: this.bidConfig.amzniid,
                        amznbid: this.bidConfig.amznbid,
                        amznp: this.bidConfig.amznp,
                        amznsz: this.bidConfig.amznsz,
                        size: this.bidConfig.amznsz
                    };
                    return this.mediaType === d.a.VIDEO && (t.mediaType = d.a.VIDEO, t.qsParams = this.targeting, t.encodedQsParams = encodeURIComponent(this.targeting), t.r_amznbid = this.bidConfig.r_amznbid, t.r_amzniid = this.bidConfig.r_amzniid, t.r_amznp = this.bidConfig.r_amznp), this.useSafeFrames && (t.amznhost = this.host), t
                } catch (t) {
                    return this.reportError(t, "bidObject", {makeVisibleToAllUsers: !0}), {
                        slotID: "",
                        amzniid: "error",
                        amznbid: "error",
                        amznp: "error",
                        amznsz: "error",
                        size: "error"
                    }
                }
            }
        }, {
            key: "newBidObject", get: function () {
                var t = this;
                try {
                    var e = {
                        slotID: this.bidConfig.slotID,
                        size: this.bidConfig.amznsz,
                        mediaType: this.mediaType,
                        targeting: {},
                        helpers: {
                            targetingKeys: this.bidConfig.targeting, qsParams: function () {
                                return t.targeting
                            }, encodedQsParams: function () {
                                return encodeURIComponent(t.targeting)
                            }
                        }
                    }, n = ["slotID", "size", "mediaType"];
                    return this.bidConfig.meta.filter((function (t) {
                        return -1 === n.indexOf(t)
                    })).forEach((function (n) {
                        e[n] = t.bidConfig[n]
                    })), this.bidConfig.targeting.forEach((function (n) {
                        e.targeting[n] = "amznhost" === n ? t.host : t.bidConfig[n]
                    })), void 0 !== this.slotID && -1 !== this.slotID.indexOf("_") && (e.sasTargeting = e.helpers.targetingKeys.map((function (n) {
                        return "".concat(n, "_").concat(t.slotID.split("_")[1], "=").concat(e.targeting[n])
                    })).join(";")), e
                } catch (t) {
                    return this.reportError(t, "newBidObject", {makeVisibleToAllUsers: !0}), {
                        slotID: "",
                        size: "",
                        mediaType: "d",
                        targeting: {},
                        helpers: {
                            targetingKeys: [], qsParams: function () {
                                return ""
                            }, encodedQsParams: function () {
                                return ""
                            }
                        }
                    }
                }
            }
        }, {
            key: "slotID", get: function () {
                try {
                    return this.bidConfig.slotID
                } catch (t) {
                    return this.reportError(t, "slotID"), ""
                }
            }
        }, {
            key: "matchesBidCacheId", value: function (t) {
                var e = this;
                try {
                    return this.bidConfig.targeting.reduce((function (n, r) {
                        return n || -1 !== r.indexOf("amzniid") && e.bidConfig[r] === t
                    }), !1)
                } catch (t) {
                    return this.reportError(t, "matchesBidCacheId"), !1
                }
            }
        }]) && T(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }(), I = Object(a.e)(i.r);

    function k(t) {
        var e = "validateSupplyChainObject", n = !1;

        function r(t, r) {
            return Object(s.b)({
                name: "TypeError",
                message: r
            }, "".concat(e, "-").concat(t), {makeVisibleToAllUsers: !0}), !(n = !0)
        }

        try {
            return Object(a.j)(t) ? (Object(a.k)(t, "complete") ? -1 === [1, 0].indexOf(t.complete) && r("schain-complete-type", "The `schain.complete` property must be a `1` or `0`") : r("schain-complete", "The `schain.complete` property must be provided"), Object(a.k)(t, "ver") ? Object(p.b)(t.ver, ["string"]) || r("schain-ver-type", "The `schain.ver` property must be a string") : r("schain-ver", "The `schain.ver` property must be provided"), Object(a.k)(t, "nodes") ? Object(a.i)(t.nodes) ? t.nodes.reduce((function (t, e) {
                return Object(a.j)(e) ? (Object(a.k)(e, "asi") ? Object(p.b)(e.asi, ["string"]) || r("schain-node-asi-type", "All `schain.nodes` items must have an `asi` property of type `string`") : r("schain-node-asi", "All `schain.nodes` items must have an `asi` property"), Object(a.k)(e, "sid") ? Object(p.b)(e.sid, ["string"]) || r("schain-node-sid-type", "All `schain.nodes` items must have an `sid` property of type `string`") : r("schain-node-sid", "All `schain.nodes` items must have an `sid` property"), Object(a.k)(e, "hp") ? -1 === [1, 0].indexOf(e.hp) && r("schain-node-hp-type", "All `schain.nodes` items must have an `hp` property which is `1` or `0`") : r("schain-node-hp", "All `schain.nodes` items must have an `hp` property"), Object(p.b)(e.rid, ["string", "undefined"]) || r("schain-node-rid-type", "If provided, the `rid` property on an `schain.nodes` item must be of type `string`"), Object(p.b)(e.name, ["string", "undefined"]) || r("schain-node-name-type", "If provided, the `name` property on an `schain.nodes` item must be of type `string`"), Object(p.b)(e.domain, ["string", "undefined"]) || r("schain-node-domain-type", "If provided, the `domain` property on an `schain.nodes` item must be of type `string`"), t && !n) : r("schain-node-type", "All `schain.nodes` items must be objects")
            }), !n) : r("schain-nodes-type", "The `schain.nodes` property must be an `Array`") : r("schain-nodes", "The `schain.nodes` property must be provided")) : r("schain", "The `schain` value must be an object")
        } catch (t) {
            return Object(s.b)(t, e, {makeVisibleToAllUsers: !0}), !1
        }
    }

    function A(t, e, n, l) {
        try {
            var p, g = r.a.getState(), O = Object(o.c)("host", g.hosts.DEFAULT_AAX_BID_HOST), j = g.cfg.DTB_PATH,
                S = "bid",
                w = (g.experiments.shouldUseTestBidEndpoint && null !== g.cfg.TEST_BID_ENDPOINT && (S = g.cfg.TEST_BID_ENDPOINT), {
                    src: g.config.pubID,
                    u: Object(u.g)(window),
                    pr: Object(u.h)(window),
                    pid: I,
                    cb: t.bidReqID,
                    ws: Object(a.g)(window),
                    v: i.l,
                    t: e,
                    slots: function (t) {
                        try {
                            return Object(c.c)(t.map((function (t) {
                                var e;
                                if (Object(a.k)(t, "mediaType") && t.mediaType === d.a.VIDEO || t.mediaType === d.a.MULTI_FORMAT) e = t.aaxSlot; else {
                                    if (!(Object(a.k)(t, "sizes") && 0 < t.sizes.length && Object(a.k)(t, "slotID"))) return Object(s.b)({
                                        name: "SlotError",
                                        message: "There was an error with the configuration for this slot: ".concat(JSON.stringify(t.rawSlot))
                                    }, "buildSlotsUrlParam-invalidSlot", {makeVisibleToAllUsers: !0}), {
                                        id: "ERROR",
                                        mt: f.a.VIDEO,
                                        error: !0
                                    };
                                    var n = t.aaxSlot;
                                    Object(a.k)(t, "slotName") && t.slotName !== t.slotID ? (Object(b.c)("idRemap", "y"), n.sd = t.slotID, n.sn = t.slotName) : Object(b.c)("idRemap", "n"), e = n
                                }
                                return e
                            })).filter((function (t) {
                                return !0 !== t.error
                            })))
                        } catch (t) {
                            return Object(s.b)(t, "buildSlotsUrlParam", {makeVisibleToAllUsers: !0}), ""
                        }
                    }(t.validSlots),
                    pj: function (t, e) {
                        try {
                            var n = Object(a.j)(t.config.params) ? t.config.params : {},
                                r = Object(a.j)(e.params) ? e.params : {}, o = Object(m.a)(t), i = v(v(v({}, n), r), o);
                            return 0 === Object.keys(i).length ? "" : Object(c.c)(i)
                        } catch (t) {
                            return Object(s.b)(t, "getBidParams", {makeVisibleToAllUsers: !0}), ""
                        }
                    }(g, t),
                    sg: Object(m.b)(g),
                    cfgv: Object(u.f)(),
                    bb: Object(u.e)(t),
                    schain: function (t) {
                        try {
                            var e;
                            return Object(a.k)(t.config, "schain") ? (e = t.config.schain, encodeURIComponent(["".concat(e.ver, ",").concat(e.complete)].concat(h(e.nodes.map((function (t) {
                                return ["asi", "sid", "hp", "rid", "name", "domain"].map((function (e) {
                                    return Object(a.k)(t, e) ? t[e] : ""
                                })).map((function (t) {
                                    return encodeURIComponent(t)
                                })).map((function (t) {
                                    return t.replace(/\!/g, "%21")
                                })).join(",")
                            })))).join("!"))) : ""
                        } catch (t) {
                            return Object(s.b)(t, "getSupplyChainObject", {makeVisibleToAllUsers: !0}), ""
                        }
                    }(g)
                });
            if ("[]" === w.slots || "" === w.slots) throw new Error("No slots available for bid request");
            r.a.dispatch({
                type: "RECORD_AAX_REQUEST",
                data: {bidConfig: t, bidReqID: t.bidReqID, timeout: e, ws: w.ws, url: w.u, rqTs: Date.now()}
            }), g.experiments.chunkRequests && (p = t.bidReqID.split("-"), r.a.dispatch({
                type: "RECORD_NETWORK_EXCHANGE",
                fid: p[0],
                networkID: parseInt(p[1], 10),
                timestamp: Date.now(),
                exchangeType: "request"
            })), g.config.isSelfServePub && (w.pubid = w.src, w.src = 600);
            var T = Object(u.d)(), _ = Object(o.c)("bidParams"),
                D = (Object(a.j)(_) && (w = v(v({}, w), _)), Object(a.j)(n) && (Object(a.k)(n, "enabled") && (w.gdpre = encodeURIComponent(n.enabled)), Object(a.k)(n, "consent") && (w.gdprc = encodeURIComponent(n.consent)), Object(a.k)(n, "log")) && (w.gdprl = Object(c.c)(n.log)), Object(a.k)(g.config, "useSafeFrames") && g.config.useSafeFrames && (w.sf = "1"), Object(y.b)()),
                E = (D && (Object(b.c)("id", "bidReq-attachToken"), l.ids.at = D), w.vm = l && 0 !== Object.keys(l.ids).length ? Object(c.c)({
                    ids: l.ids,
                    md: l.md
                }) : "", Object.keys(w).filter((function (t) {
                    return Object(a.k)(w, t) && "undefined" !== w[t] && "" !== w[t] && null !== w[t]
                })).map((function (t) {
                    return "".concat(t, "=").concat(w[t])
                })).join("&")),
                k = (T.cookiesParams && (E += T.cookiesParams), "".concat(i.s).concat(O).concat(j, "/").concat(S, "?").concat(E));
            return r.a.dispatch({
                type: "RECORD_AAX_REQ_PROP",
                bidReqID: t.bidReqID,
                key: "urlLength",
                value: k.length
            }), k
        } catch (t) {
            return Object(s.b)(t, "buildBidUrl", {makeVisibleToAllUsers: !0}), ""
        }
    }

    function C(t, e) {
        try {
            return Object(a.k)(t, "config") && Object(a.k)(t.config, "deals") && !0 === t.config.deals || !0 === e.needNewBidObject
        } catch (t) {
            return Object(s.b)(t, "isNewBidObjectRequired"), !1
        }
    }

    function P(t, e, n) {
        try {
            var r = t.map(l.c),
                o = e.slots.filter(Object(l.d)(d.a.DISPLAY, d.a.MULTI_FORMAT)).map(l.c).filter((function (t) {
                    return !Object(a.h)(r, t)
                })), c = n ? i.u.bidInFlight : i.u.noBid;
            return t.concat(o.map((function (t) {
                return new E({
                    size: "0x0",
                    crid: "",
                    slotID: t,
                    mediaType: "d",
                    meta: ["slotID", "mediaType", "size"],
                    amznbid: c,
                    amzniid: "",
                    amznp: c,
                    amznsz: "0x0",
                    targeting: ["amzniid", "amznbid", "amznp", "amznsz"]
                })
            })))
        } catch (e) {
            return Object(s.b)(e, "addStateTrackingBidsToRealBids"), t
        }
    }

    function R(t) {
        try {
            var e;
            return !Object(a.h)(r.a.getState().displayAdServer.noBidSlotIDs, t.slotID) && (e = r.a.getState().AAXReqs.filter((function (e) {
                return e.bidReqID === t.bidReqID
            }))[0], !(Object(a.k)(e, "rqTs") && Date.now() - e.rqTs > 24e4 || Object(a.k)(e, "url") && !Object(a.b)(e.url, Object(u.g)(window)) || t.bidState === i.c.rendered))
        } catch (e) {
            return Object(s.b)(e, "isBidEligible"), !1
        }
    }

    function z(t) {
        try {
            var e = t.map(l.c), n = r.a.getState();
            return Object.keys(n.slotBids).filter((function (t) {
                return Object(a.h)(e, t)
            })).reduce((function (t, e) {
                var o = n.slotBids[e].filter((function (t) {
                    return t.bidState === i.c.new
                })).filter(R);
                return 0 < o.length && (o = o[o.length - 1], r.a.dispatch({
                    type: "BID_STATE_CHANGE",
                    slotID: e,
                    _targetingSetID: o._targetingSetID,
                    bidState: i.c.exposed
                }), t[e] = o), t
            }), {})
        } catch (t) {
            return Object(s.b)(t, "getNewSlotBidsAndExposeForRequestedSlots"), {}
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    })), n.d(e, "b", (function () {
        return c
    }));
    var r = n(1), o = n(0);

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t) {
        try {
            return function (t) {
                try {
                    var e;
                    return !!c(t, ["number", "string"]) && !(isNaN(t) || "number" != typeof t && (e = parseInt(t, 10), isNaN(e)))
                } catch (t) {
                    return Object(r.b)(t, "isNumber"), !0
                }
            }(t) || void 0 === t
        } catch (t) {
            return Object(r.b)(t, "isNumberOrUndefined"), !0
        }
    }

    function c(t, e) {
        try {
            return Object(o.h)(e, i(t))
        } catch (t) {
            return Object(r.b)(t, "isVarOfTypes"), !0
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "b", (function () {
        return i
    })), n.d(e, "a", (function () {
        return a
    })), n.d(e, "d", (function () {
        return c
    })), n.d(e, "c", (function () {
        return s
    }));
    var r = n(1), o = n(0);

    function i(t) {
        var e = [];
        try {
            t.hasAdServerObjectLoaded() && (e = t.getSlots())
        } catch (t) {
            Object(r.b)(t, "getDisplayAdServerSlots")
        }
        return e
    }

    function a(t) {
        try {
            return Object(o.k)(t, "sizes") && Object(o.i)(t.sizes) && 0 !== t.sizes.length
        } catch (t) {
            return Object(r.b)(t, "doesSlotHaveSizes"), !1
        }
    }

    function c() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function (t) {
            try {
                return !t.mediaType || -1 < e.indexOf(t.mediaType)
            } catch (t) {
                return Object(r.b)(t, "isSlotOfType"), !0
            }
        }
    }

    function s(t) {
        try {
            return t.slotID
        } catch (t) {
            return Object(r.b)(t, "getSlotID"), ""
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    })), n.d(e, "c", (function () {
        return o
    })), n.d(e, "b", (function () {
        return i
    })), n.d(e, "e", (function () {
        return a
    })), n.d(e, "f", (function () {
        return c
    })), n.d(e, "d", (function () {
        return s
    }));

    function r(t, e) {
        try {
            return "number" != typeof t[e] ? 0 : Math.round(t[e])
        } catch (t) {
            return 0
        }
    }

    function o(t, e) {
        try {
            var n = i(t, e)[0];
            if (void 0 !== n) return n
        } catch (t) {
        }
        return null
    }

    function i(t, e) {
        try {
            return t.performance.getEntriesByType("resource").filter((function (t) {
                return e.test(t.name)
            }))
        } catch (t) {
            return []
        }
    }

    function a(t, e) {
        try {
            var n = t.performance.timing[e];
            return void 0 === n ? 0 : n
        } catch (t) {
            return 0
        }
    }

    function c(t) {
        try {
            var e;
            return 0 === ["redirectStart", "redirectEnd", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "secureConnectionStart"].reduce((function (e, n) {
                return e + r(t, n)
            }), 0) ? null : (e = r(t, "fetchStart"), ["domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd"].reduce((function (n, o) {
                return n && r(t, o) === e
            }), !0))
        } catch (t) {
            return null
        }
    }

    function s() {
        try {
            var t = window.performance.timeOrigin;
            return void 0 === t ? window.performance.timing.navigationStart : t
        } catch (t) {
            return 0
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "c", (function () {
        return g
    })), n.d(e, "b", (function () {
        return v
    })), n.d(e, "a", (function () {
        return j
    })), n.d(e, "e", (function () {
        return w
    })), n.d(e, "d", (function () {
        return T
    }));
    var r = n(1), o = n(16), i = n(10), a = n(3), c = n(2), s = n(9), u = n(0), l = n(5);

    function d(t) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var f, b = ["email"], p = /@/, y = /^[0-9a-fA-F]{64}$/,
        m = ((e = f = f || {})[e.noConsent = 0] = "noConsent", e[e.token = 1] = "token", "https://tk.amazon-adsystem.com/envelope"),
        g = function (t) {
            return y.test(t || "")
        };

    function h(t) {
        return t === f.noConsent ? "AMZN-NoCookieConsent" : "AMZN-Token"
    }

    function O(t, e, n) {
        t = 0 < arguments.length && void 0 !== t ? t : "", e = 1 < arguments.length && void 0 !== e ? e : 0, n = 2 < arguments.length && void 0 !== n ? n : f.token;
        try {
            var o = new Date(e).toUTCString();
            l.a.getDefault().cookie.setItem(h(n), t, o)
        } catch (t) {
            Object(r.b)(t, "setAmznToken-".concat(n))
        }
    }

    function v() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.token;
        try {
            var e = l.a.getDefault().cookie.getItem(h(t));
            return e || ""
        } catch (e) {
            return Object(r.b)(e, "getAmznToken-".concat(t)), ""
        }
    }

    function j(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "api";
        try {
            if (void 0 !== t && "function" != typeof t) throw new Error("Callback function must be a function, ".concat(d(t), " provided"));
            "function" != typeof t && (t = function () {
            }), O(), O("", 0, f.noConsent), Object(a.c)("id", "d-".concat(e))
        } catch (t) {
            Object(r.b)(t, "deleteIdentity", {makeVisibleToAllUsers: !0})
        }
        t()
    }

    function S(t, e, n, o) {
        try {
            e = Object(s.a)(e);
            var l, d = c.a.getState().config;
            if (!Object(u.k)(d, "pubID")) throw new Error("apstag.init must be called before ID functions");
            var b = {
                url: m, onload: function (t) {
                    try {
                        if (t.readyState === XMLHttpRequest.DONE && 200 === t.status) {
                            if ("string" != typeof (l = JSON.parse(t.responseText)).AIPToken || "number" != typeof l.cookieExpiry) return e(), void Object(r.b)(new Error("Invalid AIPES response"), "callAipes-response");
                            "" === l.AIPToken ? (Object(a.c)("id", "endReqAipes-tokenEmpty"), O("1", l.cookieExpiry, f.noConsent)) : (Object(a.c)("id", "endReqAipes-tokenAvailable"), Object(a.g)(), n && O(l.AIPToken, l.cookieExpiry))
                        } else t.readyState === XMLHttpRequest.DONE && Object(r.b)(new Error("AIPES response code: ".concat(t.status)), "callAipes-onload", {makeVisibleToAllUsers: !0})
                    } catch (t) {
                        Object(r.b)(t, "callAipes-onload", {makeVisibleToAllUsers: !0})
                    }
                    e(n ? null : l)
                }, onerror: function () {
                    Object(r.b)(new Error("AIPES response code: ".concat(this.status)), "callAipes-onerror", {makeVisibleToAllUsers: !0}), e()
                }, ontimeout: function () {
                    Object(r.b)(new Error("AIPES request timeout"), "callAipes-ontimeout", {makeVisibleToAllUsers: !0}), e()
                }, headers: {"Content-Type": "application/json"}, body: function (t, e, n) {
                    try {
                        var o = {publisherId: e.pubID, hashedRecords: t.hashedRecords};
                        return n.enabled ? (o.gdpr = 1, void 0 !== n.consent && (o.gdprConsent = n.consent)) : 0 === n.enabled && (o.gdpr = 0), void 0 !== t.ttl && (o.ttl = t.ttl), JSON.stringify(o)
                    } catch (t) {
                        return Object(r.b)(t, "buildAipesBody", {makeVisibleToAllUsers: !0}), ""
                    }
                }(t, d, o)
            };
            Object(a.c)("id", "startReqAipes"), Object(i.d)(b)
        } catch (t) {
            Object(r.b)(t, "callAipes", {makeVisibleToAllUsers: !0}), e()
        }
    }

    function w(t, e, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "api";
        "function" != typeof e && (e = function () {
        }), "boolean" != typeof n && (n = !0);
        try {
            if (!Object(u.j)(t)) throw new Error("'tokenConfig' must be an object, ".concat("object" === d(t) ? "null" : d(t), " provided"));
            t.optOut ? j(e, "u-oo") : (j((function () {
            }), "u"), Object(a.c)("id", "u-".concat(i)), function (t) {
                try {
                    var e = [];
                    if (!Object(u.k)(t, "gdpr") || Object(u.j)(t.gdpr) && !Object(u.i)(t.gdpr) ? Object(u.k)(t, "gdpr") && (Object(u.k)(t.gdpr, "enabled") && -1 === [!0, !1].indexOf(t.gdpr.enabled) && e.push("`gdpr.enabled` must be a boolean"), Object(u.k)(t.gdpr, "consent")) && "string" != typeof t.gdpr.consent && e.push("'gdpr.consent' must be a valid IAB-formatted string") : e.push("`gdpr` must be an Object"), Object(u.k)(t, "optOut") && -1 === [!0, !1].indexOf(t.optOut) && e.push("'optOut' must be a boolean"), Object(u.k)(t, "hashedRecords") && Object(u.i)(t.hashedRecords) ? 1 !== t.hashedRecords.length ? e.push("'hashedRecords' must contain exactly one item") : t.hashedRecords.forEach((function (t) {
                        Object(u.k)(t, "type") && -1 !== b.indexOf(t.type) || e.push("'type' must be 'email' in item '".concat(JSON.stringify(t), "'")), Object(u.k)(t, "encrypted") && "boolean" != typeof t.encrypted && e.push("'encrypted' must be a boolean in item '".concat(JSON.stringify(t), "'")), Object(u.k)(t, "record") && "string" == typeof t.record ? t.encrypted || y.test(t.record) ? t.encrypted && p.test(t.record) && e.push("'record' must NOT be an un-hashed, un-encrypted email") : e.push("'record' must be a SHA256 hash in item '".concat(JSON.stringify(t), "'")) : e.push("'record' must be a string in item '".concat(JSON.stringify(t), "'"))
                    })) : e.push("'hashedRecords' must be an array"), Object(u.k)(t, "ttl") && ("number" != typeof t.ttl || isNaN(t.ttl) || t.ttl <= 0 || t.ttl % 1 != 0) && e.push("'ttl' must be a positive integer"), !(0 < e.length)) return 1;
                    Object(r.b)({
                        name: "TokenConfigValidationError",
                        message: "There was an issue with the TokenConfig provided ".concat(JSON.stringify(t), ":\n") + e.map((function (t) {
                            return "- ".concat(t)
                        })).join("\n")
                    }, "validateTokenConfig-invalid", {makeVisibleToAllUsers: !0})
                } catch (t) {
                    Object(r.b)(t, "validateTokenConfig", {makeVisibleToAllUsers: !0})
                }
            }(t) ? Object(o.a)(t.gdpr, S.bind(null, t, e, n)) : e())
        } catch (t) {
            Object(r.b)(t, "updateIdentity", {makeVisibleToAllUsers: !0}), e()
        }
    }

    function T(t, e, n) {
        "function" != typeof e && (e = function () {
        }), "boolean" != typeof n && (n = !0);
        try {
            if (!Object(u.j)(t)) throw new Error("'tokenConfig' must be an object, ".concat("object" === d(t) ? "null" : d(t), " provided"));
            t.optOut ? j(e, "r-oo") : "" !== v(f.noConsent) ? e() : "" !== v() ? (e(), Object(a.c)("id", "r-noop")) : w(t, e, n, "r")
        } catch (t) {
            Object(r.b)(t, "renewIdentity", {makeVisibleToAllUsers: !0}), e()
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return f
    })), n.d(e, "c", (function () {
        return g
    })), n.d(e, "b", (function () {
        return h
    })), n.d(e, "d", (function () {
        return O
    }));
    var r = n(1), o = n(3), i = n(0), a = n(2);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function u(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(n), !0).forEach((function (e) {
                var r, o;
                r = t, o = n[e = e], (e = function (t) {
                    return t = function (t, e) {
                        if ("object" !== c(t) || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 === n) return String(t);
                        if ("object" !== c(n = n.call(t, e))) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }(t, "string"), "symbol" === c(t) ? t : String(t)
                }(e)) in r ? Object.defineProperty(r, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[e] = o
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var l = Number.isInteger || function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, d = "__tcfapi";

    function f(t, e) {
        var n, a = !1, s = {log: {status: "no-status"}}, f = 50, b = "global-func-error";

        function p() {
            a || (a = !0, e(u(u({}, s), {}, {log: u({}, s.log)})))
        }

        e = Object(r.d)(e, "GdprCallback");
        try {
            if (!1 === (t = Object(i.j)(t) ? u({}, t) : {}).enabled || 0 === t.enabled ? (s.log.status = "explicit-no-gdpr", s.enabled = 0) : !0 === t.enabled || 1 === t.enabled ? (s.log.status = Object(i.k)(t, "consent") ? "explicit-consent-passed" : "explicit-no-consent-passed", s.enabled = 1, s.consent = t.consent) : Object(i.k)(t, "enabled") && (s.log.status = Object(i.k)(t, "consent") ? "malformed-with-consent" : "malformed-without-consent", s.consent = t.consent, l(t.enabled) ? s.enabled = t.enabled : s.enabled = 1), Object(i.k)(t, "enabled") && (s.log.enabled = t.enabled), Object(i.k)(t, "cmpTimeout") && l(t.cmpTimeout) && (f = t.cmpTimeout, s.log.cmpTimeout = f), void 0 !== s.enabled) return Object(o.c)("gdpr", "pub-api"), Object(i.k)(s, "consent") && "string" != typeof s.consent && (delete s.consent, Object(r.b)(new Error("Invalid consent: must be string, given ".concat(c(s.consent))), "getGdprConfig-pub-consent-invalid", {makeVisibleToAllUsers: !0})), void p()
        } catch (t) {
            Object(r.b)(t, "getGdprConfig-parseConfig", {makeVisibleToAllUsers: !0})
        }
        try {
            Object(i.k)(window, d) && "function" == typeof window[d] ? (n = "tcfv2", Object(o.c)("gdpr", n), setTimeout((function () {
                s.log.status = "".concat(n, "-timeout"), p()
            }), f), b = "".concat(n, "-internal-error"), window[d]("getTCData", 2, (function (t, e) {
                try {
                    if (e && Object(i.j)(t)) {
                        if (s.log.status = "".concat(n, "-success"), Object(i.k)(t, "tcString") ? s.consent = t.tcString : Object(i.k)(t, "consentData") && (s.consent = t.consentData), s.enabled = t.gdprApplies ? 1 : 0, 0 === s.enabled && delete s.consent, s.gdprApplies = t.gdprApplies, Object(i.k)(t, "tcString") && 0 < (t.tcString || "").length) {
                            var o = t.tcString;
                            try {
                                Object(i.k)(window, d) && "function" == typeof window[d] && window[d]("addEventListener", 2, (function (t, e) {
                                    "string" == typeof o && 0 !== o.length && t.tcString !== o && Object(r.b)(new Error("mismatched tcString: " + "".concat(e, " - ").concat(null == (e = t.tcString) ? void 0 : e.length, " - ").concat(o.length) + " - ".concat(t.eventStatus)), "checkMatchingTcf-param-mismatch")
                                }))
                            } catch (t) {
                                Object(r.b)(t, "checkMatchingTcf")
                            }
                        }
                    } else s.log.status = "".concat(n, "-error");
                    p()
                } catch (t) {
                    s.log.status = "func-error", p(), Object(r.b)(t, "cmpCallback-".concat(n), {makeVisibleToAllUsers: !0})
                }
            }))) : (Object(o.c)("gdpr", "no-cmp"), s.log.status = "no-cmp", p())
        } catch (t) {
            s.log.status = b, p(), Object(r.b)(t, "getGdprConfig-".concat(b), {makeVisibleToAllUsers: !0})
        }
    }

    function b(t) {
        for (var e = [], n = -1; 0 <= (n = t.indexOf("1", n + 1));) e.push(n + 1);
        return e
    }

    function p(t) {
        for (var e = [], n = parseInt(m(t, 12), 2), r = 0; r < n; r++) {
            var o = parseInt(m(t, 1), 2), i = parseInt(m(t, 16), 2);
            if (e.push(i), o) for (var a = parseInt(m(t, 16), 2), c = i + 1; c <= a; c++) e.push(c)
        }
        return e
    }

    function y(t) {
        var e = parseInt(m(t, 16), 2);
        return parseInt(m(t, 1), 2) ? p(t) : b(m(t, e))
    }

    function m(t, e) {
        var n = t.bits.substr(t.index, e);
        return t.index += e, n
    }

    function g(t) {
        try {
            var e, n, o;
            return !!t && (!((e = function (t) {
                try {
                    for (var e = (t = (t = t.replace(/-/g, "+")).replace(/_/g, "/")).split(".")[0], n = window.atob(e), o = "", i = 0; i < n.length; i++) o += ("0000000" + n.charCodeAt(i).toString(2)).substr(-8);
                    return o
                } catch (e) {
                    return Object(r.b)(new Error("TCF string conversion failed. (TCF string: ".concat(t, ")")), "TCFToBinary", {makeVisibleToAllUsers: !0}), ""
                }
            }(t)).length < 230) && (o = {
                bits: e,
                index: 0
            }, (n = {}).version = parseInt(m(o, 6), 2), 2 === n.version) && (n.created = parseInt(m(o, 36), 2), n.lastUpdated = parseInt(m(o, 36), 2), n.cmpId = parseInt(m(o, 12), 2), n.cmpVersion = parseInt(m(o, 12), 2), n.consentScreen = parseInt(m(o, 6), 2), n.consentLanguage = String.fromCharCode(parseInt(m(o, 6), 2) + 65) + String.fromCharCode(parseInt(m(o, 6), 2) + 65), n.vendorListVersion = parseInt(m(o, 12), 2), n.tcfPolicyVersion = parseInt(m(o, 6), 2), n.isServiceSpecific = "1" === m(o, 1), n.useNonStandardStacks = "1" === m(o, 1), n.specialFeatureOptIns = b(m(o, 12)), n.purposesConsent = b(m(o, 24)), n.purposesLITransparency = b(m(o, 24)), n.purposeOneTreatment = "1" === m(o, 1), n.publisherCC = String.fromCharCode(parseInt(m(o, 6), 2) + 65) + String.fromCharCode(parseInt(m(o, 6), 2) + 65), n.vendorConsents = y(o), n.vendorLegitimateInterests = y(o), n.publisherRestrictions = function (t) {
                for (var e = parseInt(m(t, 12), 2), n = [], r = 0; r < e; r++) {
                    var o = parseInt(m(t, 6), 2), i = parseInt(m(t, 2), 2);
                    n.push({purposeId: o, restrictionType: i, vendorIds: p(t)})
                }
                return n
            }(o), n))
        } catch (t) {
            return Object(r.b)(t, "parseTCFString", {makeVisibleToAllUsers: !0}), !1
        }
    }

    function h(t) {
        var e = [];
        try {
            var n = Date.now(),
                r = (t || e.push("Invalid tcString: ".concat(t)), 2 !== t.version && e.push("tcString version not supported: ".concat(t.version)), t.useNonStandardStacks && e.push("tcString's useNonStandardStacks should not be true"), t.isServiceSpecific || e.push("tcString needs to be service specific"), t.vendorListVersion < 51 && e.push("tcString is outdated (minimum vendor list version 51)"), t.publisherRestrictions ? t.publisherRestrictions.filter((function (t) {
                    return 1 === t.purposeId && 0 <= t.vendorIds.indexOf(793)
                })) : []);
            if (0 === r.length) v(t) || e.push("Invalid publisher restrictions"); else switch (r[0].restrictionType) {
                case 0:
                case 2:
                    e.push("Invalid publisher restrictions");
                    break;
                default:
                    v(t) || e.push("Invalid publisher restrictions")
            }
            return a.a.dispatch({type: "RECORD_TCF_PARSE_TIME", time: Date.now() - n}), e
        } catch (t) {
            if (e.length) return e;
            throw t
        }
    }

    function O(t, e) {
        if (!t) return !!window.apstag && !window.apstag.isGDPRRegion && !0 !== e;
        if (window.apstag && !window.apstag.isGDPRRegion && !1 === e) return !0;
        if (2 !== t.version) return !1;
        if (t.useNonStandardStacks) return !1;
        if (!t.isServiceSpecific) return !1;
        if (t.vendorListVersion < 51) return !1;
        if (0 === (e = t.publisherRestrictions.filter((function (t) {
            return 1 === t.purposeId && 0 <= t.vendorIds.indexOf(793)
        }))).length) return v(t);
        switch (e[0].restrictionType) {
            case 0:
            case 2:
                return !1;
            default:
                return v(t)
        }
    }

    function v(t) {
        return !(!Object(i.k)(t, "vendorConsents") || !Object(i.k)(t, "purposesConsent")) && 0 <= t.vendorConsents.indexOf(793) && 0 <= t.purposesConsent.indexOf(1)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return d
    }));
    var r = n(0), o = n(1), i = n(6), a = n(3);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, l(r.key), r)
        }
    }

    function u(t, e, n) {
        (e = l(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function l(t) {
        return t = function (t, e) {
            if ("object" !== c(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== c(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === c(t) ? t : String(t)
    }

    var d = function () {
        function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            u(this, "_slotConfig", void 0), u(this, "rawSlot", void 0), this._slotConfig = e, this.rawSlot = e
        }

        var e, n;
        return e = t, (n = [{
            key: "slotID", get: function () {
                return this._slotConfig.slotID
            }
        }, {
            key: "slotName", get: function () {
                return this._slotConfig.slotName
            }
        }, {
            key: "slotParams", get: function () {
                return this._slotConfig.slotParams
            }
        }, {
            key: "companions", get: function () {
                return this._slotConfig.companions
            }
        }, {
            key: "slotConfig", get: function () {
                return {slotID: this.slotID, slotName: this.slotName, sizes: this.sizes}
            }
        }, {
            key: "mediaType", get: function () {
                return i.a.DISPLAY
            }
        }, {
            key: "sizes", get: function () {
                return []
            }
        }, {
            key: "floor", get: function () {
                var t;
                return Object(r.k)(this._slotConfig, "floor") && "USD" === this._slotConfig.floor.currency && this.validateFloorValue(this._slotConfig.floor.value) ? (t = this._slotConfig.floor, Object(a.c)("customFloor", "y")) : Object(a.c)("customFloor", "n"), t
            }
        }, {
            key: "aaxSlotParams", get: function () {
                var t = this;
                try {
                    return Object(r.k)(this, "slotParams") && Object(r.j)(this.slotParams) ? Object.keys(this.slotParams).filter((function (e) {
                        return t.validateSlotParamValue(t.slotParams[e])
                    })).reduce((function (e, n) {
                        return e[n] = t.slotParams[n], e
                    }), {}) : void 0
                } catch (t) {
                    return this.reportError(t, "aaxSlotParams"), this.slotParams
                }
            }
        }, {
            key: "aaxSlot", get: function () {
                Object(a.c)("slotType", this.mediaType);
                var t = {kv: this.aaxSlotParams};
                return this.floor && (t.fc = this.floor.currency, t.fp = this.floor.value), t
            }
        }, {
            key: "isValid", value: function () {
                var t, e, n = [], o = [];
                return void 0 === this.slotID ? n.push("'slotID' must be provided and a string") : "string" != typeof this.slotID && o.push("'slotID' must be a string"), Object(r.k)(this._slotConfig, "floor") && Object(r.j)(this._slotConfig.floor) && (t = (e = this._slotConfig.floor).currency, e = e.value, "USD" !== t && o.push("'floor' currency only supports USD"), this.validateFloorValue(e) || o.push("'floor' value must be a positive integer")), Object(r.k)(this, "companions") && (Object(r.i)(this.companions) ? this.companions.forEach((function (t) {
                    "string" != typeof t && n.push("'companions' contains a non-string item : ".concat(t))
                })) : n.push("'companions' contains non-array")), 0 < n.length ? (this.reportIsValidMessages([].concat(n, o), !0), !1) : (0 < o.length && this.reportIsValidMessages(o, !1), !0)
            }
        }, {
            key: "reportError", value: function (t, e, n) {
                Object(o.b)(t, "Slot-".concat(e), n)
            }
        }, {
            key: "setTargeting", value: function (t, e) {
            }
        }, {
            key: "getTargeting", value: function (t) {
                return []
            }
        }, {
            key: "clearTargeting", value: function (t) {
            }
        }, {
            key: "reportIsValidMessages", value: function (t, e) {
                this.reportError({
                    name: "SlotValidationError",
                    message: this.buildIsValidMessage(t, this._slotConfig)
                }, "validation-".concat(e ? "error" : "warn"), {makeVisibleToAllUsers: !0})
            }
        }, {
            key: "validateSlotParamValue", value: function (t) {
                var e = this;
                try {
                    return Object(r.i)(t) ? 0 < t.length && t.reduce((function (t, n) {
                        return t && e.validateSlotParamValue(n)
                    }), !0) : "string" == typeof t && 0 < t.length
                } catch (t) {
                    return Object(o.b)(t, "validateSlotParamValue"), !1
                }
            }
        }, {
            key: "validateFloorValue", value: function (t) {
                return "number" == typeof t && 0 < t && t % 1 == 0
            }
        }, {
            key: "buildIsValidMessage", value: function (t, e) {
                return "There was an issue with the configuration for this slot: ".concat(JSON.stringify(e), "\n") + t.map((function (t) {
                    return "- ".concat(t)
                })).join("\n")
            }
        }]) && s(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }()
}, function (t, e, n) {
    "use strict";
    var r;
    n.d(e, "a", (function () {
        return r
    })), (n = r = r || {}).DISPLAY = "d", n.VIDEO = "v", n.MULTI_FORMAT = "mf"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, a(r.key), r)
        }
    }

    function i(t, e, n) {
        (e = a(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function a(t) {
        return t = function (t, e) {
            if ("object" !== r(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== r(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === r(t) ? t : String(t)
    }

    n.d(e, "a", (function () {
        return c
    }));
    var c = function () {
        function t() {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            i(this, "isSupported", !1), i(this, "needNewBidObject", !1)
        }

        var e, n;
        return e = t, (n = [{
            key: "cmdQueuePush", value: function (t) {
            }
        }, {
            key: "slotRenderEndedEvent", value: function (t) {
            }
        }, {
            key: "setTargeting", value: function (t, e) {
            }
        }, {
            key: "getTargeting", value: function (t) {
                return []
            }
        }, {
            key: "clearTargeting", value: function (t, e) {
            }
        }, {
            key: "hasAdServerObjectLoaded", value: function () {
                return !1
            }
        }, {
            key: "isCommandQueueDefined", value: function () {
                return !1
            }
        }, {
            key: "getSlots", value: function () {
                return []
            }
        }]) && o(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }()
}, function (t, e, n) {
    "use strict";
    n.d(e, "d", (function () {
        return b
    })), n.d(e, "c", (function () {
        return p
    })), n.d(e, "b", (function () {
        return y
    })), n.d(e, "g", (function () {
        return O
    })), n.d(e, "a", (function () {
        return T
    })), n.d(e, "e", (function () {
        return _
    })), n.d(e, "f", (function () {
        return D
    }));
    var r = n(1), o = n(0), i = n(3), a = n(2), c = n(4), s = n(6);

    function u(t) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
        }
    }

    function d(t) {
        return t = function (t, e) {
            if ("object" !== u(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== u(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === u(t) ? t : String(t)
    }

    var f = function () {
        function t() {
            var e, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, r = this, o = t;
            if (!(r instanceof o)) throw new TypeError("Cannot call a class as a function");
            r = this, o = void 0, (e = d(e = "_rawProps")) in r ? Object.defineProperty(r, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : r[e] = o, this._rawProps = n
        }

        var e, n;
        return e = t, (n = [{
            key: "source", get: function () {
                return "web"
            }
        }, {
            key: "omsdkAccessMode", get: function () {
                return "limited"
            }
        }, {
            key: "publisherType", get: function () {
                var t = a.a.getState().config;
                return t && !0 === t.isSelfServePub ? s.b.SELF_SERVE_WEB : s.b.MANAGED_WEB
            }
        }, {
            key: "publisherUUID", get: function () {
                var t = a.a.getState().config;
                if (t) return t.pubID
            }
        }, {
            key: "integratorVersion", get: function () {
                return c.l
            }
        }, {
            key: "bidId", get: function () {
                var t = this._rawProps.bidId;
                if ("string" == typeof t) return t
            }
        }, {
            key: "dealId", get: function () {
                var t = this._rawProps.dealId;
                if ("string" == typeof t) return t
            }
        }, {
            key: "hostName", get: function () {
                var t = this._rawProps.hostName;
                if ("string" == typeof t) return t
            }
        }, {
            key: "pricePoint", get: function () {
                var t = this._rawProps.pricePoint;
                if ("string" == typeof t) return t
            }
        }, {
            key: "targetingMap", get: function () {
                var t = this._rawProps.targetingMap;
                if ("string" == typeof t) return t
            }
        }, {
            key: "adServerType", get: function () {
                var t = a.a.getState().config;
                if (t) return t.adServer
            }
        }, {
            key: "adServerAdUnitId", get: function () {
                var t = this._rawProps.adServerAdUnitId;
                if ("string" == typeof t) return t
            }
        }, {
            key: "apsAdUnitId", get: function () {
                var t = this._rawProps.apsAdUnitId;
                if ("string" == typeof t) return t
            }
        }, {
            key: "getProperties", value: function () {
                return JSON.stringify({
                    source: this.source,
                    omsdkAccessMode: this.omsdkAccessMode,
                    publisherType: this.publisherType,
                    publisherUUID: this.publisherUUID,
                    integratorVersion: this.integratorVersion,
                    bidId: this.bidId,
                    hostName: this.hostName,
                    dealId: this.dealId,
                    pricePoint: this.pricePoint,
                    targetingMap: this.targetingMap,
                    adServerType: this.adServerType,
                    adServerAdUnitId: this.adServerAdUnitId,
                    apsAdUnitId: this.apsAdUnitId
                })
            }
        }]) && l(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();

    function b(t, e) {
        try {
            if (Object(o.k)(e, "slotID")) {
                var n = e.slotID, i = t.getElementById(n);
                if (i instanceof HTMLDivElement) return i
            }
        } catch (t) {
            Object(r.b)(t, "getVideoDivElement-outstream")
        }
    }

    function p(t, e) {
        try {
            Object(o.k)(t, "bidID") && (e += "b=".concat(t.bidID)), Object(o.k)(t, "pp") && void 0 === t.dealId && (e += "&pp=".concat(t.pp)), e += "&rnd=".concat(Object(o.d)())
        } catch (t) {
            Object(r.b)(t, "constructVastTag")
        }
        return e
    }

    function y(t, e, n, o) {
        try {
            var i = {
                    bidId: null == n ? void 0 : n.bidID,
                    hostName: null == n ? void 0 : n.host,
                    dealId: null == n ? void 0 : n.dealId,
                    pricePoint: null == n ? void 0 : n.pp,
                    apsAdUnitId: null == n ? void 0 : n.slotID
                }, a = {key: "$$videoPlayerProps$$", value: new f(i).getProperties()},
                c = {key: "$$apstagVastTag$$", value: t},
                s = {key: "$$apstagCompanionContainers$$", value: JSON.stringify(o || [])}, u = e;
            return [a, c, s].forEach((function (t) {
                var e = t.key;
                t = t.value;
                u = u.replace(e, t)
            })), u
        } catch (t) {
            return Object(r.b)(t, "constructVastTag"), ""
        }
    }

    var m = {}, g = function (t) {
        return m[t] || (m[t] = {started: !1, completed: !1, loaded: !1, isPaused: !1}), m[t]
    }, h = {root: null, rootMargin: "0px", threshold: .5};

    function O(t, e, n) {
        try {
            var o;
            window.addEventListener("message", (function (t) {
                v(t, n)
            })), window.IntersectionObserver ? (o = new window.IntersectionObserver((function (r) {
                r.forEach((function (r) {
                    .5 < r.intersectionRatio && e.contentWindow && (j(e, t, n), o.disconnect())
                }))
            }), h)).observe(t) : Object(r.b)({
                name: "IntersectionObserver",
                message: "IntersectionObserver not supported "
            }, "startVideoAndHandlePlayback")
        } catch (t) {
            Object(r.b)(t, "startVideoAndHandlePlayback")
        }
    }

    function v(t, e) {
        if (t.origin === window.top.location.origin && !0 === t.data.apsVideoPlayer) switch (t.data.event) {
            case"completed":
                g(e).completed = !0;
                break;
            case"loaded":
                var n;
                g(e).loaded = !0, a.a.getState().outstream.shouldSample && (n = Date.now() - a.a.getState().outstream.renderStart, Object(i.e)("loaded", e, n))
        }
    }

    function j(t, e, n) {
        try {
            null !== t.contentDocument && Object(o.h)(["complete", "interactive"], t.contentDocument.readyState) ? w(t, e, n) : null !== t.contentDocument && "uninitialized" !== t.contentDocument.readyState ? t.contentDocument.addEventListener("DOMContentLoaded", (function () {
                w(t, e, n)
            })) : t.addEventListener("load", (function () {
                w(t, e, n)
            })), setTimeout(w, 1e3, !0)
        } catch (t) {
            Object(r.b)(t, "loadVideoAd")
        }
    }

    function S(t, e, n) {
        try {
            var o;
            window.IntersectionObserver && (o = new window.IntersectionObserver((function (e) {
                e.forEach((function (e) {
                    g(n).completed && o.disconnect(), e.intersectionRatio < .5 && !g(n).isPaused ? t.contentWindow && t.contentWindow.adsM && (t.contentWindow.adsM.pause(), g(n).isPaused = !0) : g(n).isPaused && t.contentWindow && t.contentWindow.adsM && (t.contentWindow.adsM.play(), g(n).isPaused = !1)
                }))
            }), {threshold: .5})).observe(e)
        } catch (e) {
            Object(r.b)(e, "handleAutoPauseAndPlay")
        }
    }

    function w(t, e, n) {
        t.contentWindow && !g(n).started && (g(n).started = !0, function (t, e, n) {
            var r = Number(new Date) + (e || 2e3);
            return n = n || 100, new Promise((function e(o, i) {
                var a = t();
                a ? o(a) : Number(new Date) < r ? setTimeout(e, n, o, i) : i(new Error("apsVideoPlayer timed out"))
            }))
        }((function () {
            return g(n).loaded
        }), 3e4, 100).then((function () {
            t.contentWindow && t.contentWindow.adsM && (t.contentWindow.adsM.play(), S(t, e, n))
        })).catch((function () {
            S(t, e, n), Object(r.b)({
                name: "VideoPlayerTimeout",
                message: "video player took more than 30 seconds to load"
            }, "startAd")
        })))
    }

    function T(t, e) {
        try {
            e && e.appendChild(t)
        } catch (t) {
            Object(r.b)(t, "_appendDivElement")
        }
    }

    function _(t, e) {
        try {
            t.appendChild(e)
        } catch (t) {
            Object(r.b)(t, "_insertVideoIframeInsideDiv")
        }
    }

    function D(t) {
        var e = document.createElement("div");
        return e.style.width = "".concat(t[0], "px"), e.style.height = "".concat(t[1], "px"), e.style.margin = "0 auto", e.id = "apsVideoDiv-".concat(Object(o.d)()), e
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return d
    }));
    var r = n(1);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r)
        }
    }

    function a(t, e, n) {
        return (e = c(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function c(t) {
        return t = function (t, e) {
            if ("object" !== o(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== o(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === o(t) ? t : String(t)
    }

    var s = "__tcfapi", u = "isListenedTo", l = "consentManagementPlatform", d = function () {
        function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            a(this, "store", void 0), a(this, "globalContext", void 0), this.store = e.stateContainer, this.globalContext = e.globalContext
        }

        var e, n, o;
        return e = t, o = [{
            key: "readStoredConsentData", value: function (t) {
                return null == (t = t.getState()[l]) ? void 0 : t.tcData
            }
        }], (n = [{
            key: "isListenerActive", get: function () {
                return this.isListenedTo
            }
        }, {
            key: "isListenedTo", get: function () {
                var t;
                return (null == (t = this.store.getState()[l]) ? void 0 : t[u]) || !1
            }, set: function (t) {
                this.store.dispatch(a({type: "RECORD_CMP_LISTENED_TO"}, u, t))
            }
        }, {
            key: "writeConsentDataToStore", value: function (t) {
                this.store.dispatch(a({type: "RECORD_CMP_CONSENT_DATA"}, "tcData", t))
            }
        }, {
            key: "onConsentDataChange", value: function (t, e, n) {
                try {
                    e ? (this.isListenedTo = !0, t && this.writeConsentDataToStore(t), null != n && n(!0)) : null != n && n(!1)
                } catch (t) {
                    Object(r.b)(t, "attemptConsentDataSync-onConsentDataChange")
                }
            }
        }, {
            key: "syncConsentData", value: function (t) {
                var e = this;
                this.globalContext[s] ? this.globalContext[s]("addEventListener", 2, (function (n, r) {
                    return e.onConsentDataChange(n, r, t)
                })) : null != t && t(!1)
            }
        }, {
            key: "syncConsentDataIfNotSynced", value: function (t) {
                this.isListenedTo ? null != t && t(!0) : this.syncConsentData(t)
            }
        }, {
            key: "attemptConsentDataSync", value: function (t) {
                try {
                    this.syncConsentDataIfNotSynced(t)
                } catch (e) {
                    Object(r.b)(e, "attemptConsentDataSync"), null != t && t(!1)
                }
            }
        }]) && i(e.prototype, n), o && i(e, o), Object.defineProperty(e, "prototype", {writable: !1}), t
    }()
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return l
    }));
    var r = n(0), o = n(1), i = n(3);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, u(r.key), r)
        }
    }

    function s(t, e, n) {
        (e = u(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function u(t) {
        return t = function (t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== a(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === a(t) ? t : String(t)
    }

    var l = function () {
        function t(e) {
            var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], o = this, i = t;
            if (!(o instanceof i)) throw new TypeError("Cannot call a class as a function");
            s(this, "validSizeStringRegex", /^[0-9]+x[0-9]+$/), s(this, "numberStringRegex", /^[0-9]+$/), s(this, "_sizes", void 0), s(this, "_permit1D", !0), s(this, "_allowUndefined", !1), this._sizes = e, this._permit1D = n, this._allowUndefined = r
        }

        var e, n;
        return e = t, (n = [{
            key: "isValid", value: function () {
                return !(void 0 !== this._sizes || !this._allowUndefined) || 0 < this.sizes.length
            }
        }, {
            key: "sizes", get: function () {
                var t = this;
                try {
                    var e = [];
                    if (Object(r.i)(this._sizes)) {
                        this._sizes = this._sizes.filter((function (t) {
                            return "fluid" !== t
                        }));
                        var n = "2d", i = this._sizes;
                        if (i && 0 < i.length && !Object(r.i)(i[0]) && ("string" != typeof i[0] || !this.validSizeStringRegex.test(i[0]))) {
                            if (!this._permit1D) throw new Error("Sizes must be 2d array");
                            n = "1d", i = [i]
                        }
                        e = i.filter((function (e) {
                            return t.isValidSize(n, e)
                        })).map((function (t) {
                            return Object(r.i)(t) ? t : t.split("x").map((function (t) {
                                return parseInt(t, 10)
                            }))
                        }))
                    }
                    return e
                } catch (e) {
                    return Object(o.b)(e, "SizesDelegate-getSizes"), []
                }
            }
        }, {
            key: "aaxSizes", get: function () {
                if (void 0 !== this._sizes || !this._allowUndefined) return this.sizes.filter(r.i).map((function (t) {
                    return t.join("x")
                }))
            }
        }, {
            key: "isValidSize", value: function (t, e) {
                var n = this, a = [];

                function c(t) {
                    t = JSON.stringify(t), -1 === a.indexOf(t) && (a.push(t), Object(o.b)({
                        name: "SizesDelegate-isValidSize-invalid",
                        message: "Invalid Slot Size: ".concat(JSON.stringify(e))
                    }, "SizesDelegate-isValidSize-invalid"))
                }

                try {
                    return "string" == typeof e && this.validSizeStringRegex.test(e) ? (Object(i.c)("AaxSlotSizes", "".concat(t, "-compiled")), !0) : Object(r.i)(e) && 1 !== e.length ? (2 < e.length && c(e), e.slice(0, 2).reduce((function (e, r) {
                        return e && ("number" == typeof r || "string" == typeof r) && !("string" == typeof r && !n.numberStringRegex.test(r) || ("string" == typeof r ? Object(i.c)("AaxSlotSizes", "".concat(t, "-string")) : Object(i.c)("AaxSlotSizes", "".concat(t, "-number")), 0))
                    }), !0)) : (c(e), !1)
                } catch (c) {
                    return Object(o.b)(c, "isValidSize"), !0
                }
            }
        }]) && c(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }()
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return g
    }));
    e = n(17);
    var r = n(0), o = n(1), i = n(6);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function (e) {
                y(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, m(r.key), r)
        }
    }

    function l() {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t));) ;
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function d(t, e) {
        return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, r = p(t);
            n = e ? (n = p(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === a(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return b(r)
        }
    }

    function b(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function y(t, e, n) {
        (e = m(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function m(t) {
        return t = function (t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== a(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === a(t) ? t : String(t)
    }

    var g = function (t) {
        var e = a;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {writable: !1}), t && d(e, t);
        var n = f(a);

        function a(t) {
            var e;
            if (this instanceof a) return y(b(e = n.call(this, {
                slotID: t.getSlotElementId(),
                slotName: t.getAdUnitPath()
            })), "rawSlot", void 0), e.rawSlot = t, e;
            throw new TypeError("Cannot call a class as a function")
        }

        return e = a, (t = [{
            key: "mediaType", get: function () {
                return i.a.DISPLAY
            }
        }, {
            key: "sizes", get: function () {
                try {
                    var t = Object(r.g)(window).split("x").map((function (t) {
                        return Number(t)
                    })), e = this.rawSlot.getSizes(t[0], t[1]);
                    return null === e ? [] : e.filter((function (t) {
                        return "fluid" !== t
                    })).map((function (t) {
                        return [t.getWidth(), t.getHeight()]
                    }))
                } catch (t) {
                    return this.reportError(t, "sizes"), []
                }
            }
        }, {
            key: "aaxSlot", get: function () {
                var t = s(s({}, l(p(a.prototype), "aaxSlot", this)), {}, {
                    sd: this.slotID,
                    s: this.sizes.filter(r.i).map((function (t) {
                        return t.join("x")
                    }))
                });
                return this.slotID !== this.slotName && (t.sn = this.slotName), t
            }
        }, {
            key: "isValid", value: function () {
                return !(!l(p(a.prototype), "isValid", this).call(this) || 0 === this.sizes.length && (this.reportIsValidMessages(["'sizes' must have at least 1 valid item"], !0), 1))
            }
        }, {
            key: "reportError", value: function (t, e, n) {
                Object(o.b)(t, "GptSlot-".concat(e), n)
            }
        }, {
            key: "setTargeting", value: function (t, e) {
                try {
                    this.rawSlot.setTargeting(t, e)
                } catch (t) {
                    this.reportError(t, "setTargeting")
                }
            }
        }, {
            key: "getTargeting", value: function (t) {
                try {
                    return this.rawSlot.getTargeting(t)
                } catch (t) {
                    return this.reportError(t, "getTargeting"), []
                }
            }
        }, {
            key: "clearTargeting", value: function (t) {
                try {
                    this.rawSlot.clearTargeting(t)
                } catch (t) {
                    this.reportError(t, "clearTargeting")
                }
            }
        }]) && u(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), a
    }(e.a)
}, function (t, e, n) {
    "use strict";
    n.d(e, "c", (function () {
        return i
    })), n.d(e, "a", (function () {
        return a
    })), n.d(e, "b", (function () {
        return c
    }));
    var r = n(1), o = n(0);

    function i(t) {
        try {
            return !(!Object(o.k)(t, "$sf") || !Object(o.k)(t.$sf, "ext"))
        } catch (t) {
            return Object(r.b)(t, "isSafeFrame"), !1
        }
    }

    function a(t, e) {
        try {
            var n = e.innerWidth, o = e.innerHeight, i = parseInt(t[0], 10), a = parseInt(t[1], 10), c = i - n,
                s = a - o, u = e.sfAPI || e.$sf.ext;
            !u || n === i && o === a || (u.register(i, a), u.expand({r: c, b: s, push: !0}))
        } catch (t) {
            Object(r.b)(t, "expandSf")
        }
    }

    function c(t) {
        try {
            return 1 === t.innerWidth && 1 === t.innerHeight
        } catch (t) {
            return Object(r.b)(t, "is1x1Creative"), !1
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return g
    })), n.d(e, "c", (function () {
        return v
    })), n.d(e, "e", (function () {
        return j
    })), n.d(e, "d", (function () {
        return S
    })), n.d(e, "b", (function () {
        return D
    }));
    var i = n(10), u = n(1), a = n(32), l = n(4), c = n(2), d = n(5), f = n(0), s = n(3), b = n(16), r = n(33),
        p = n(27);

    function m(t, e) {
        var n, r, o, i, a = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (a) return r = !(n = !0), {
            s: function () {
                a = a.call(t)
            }, n: function () {
                var t = a.next();
                return n = t.done, t
            }, e: function (t) {
                r = !0, o = t
            }, f: function () {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
        };
        if (Array.isArray(t) || (a = y(t)) || e && t && "number" == typeof t.length) return a && (t = a), i = 0, {
            s: e = function () {
            }, n: function () {
                return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
            }, e: function (t) {
                throw t
            }, f: e
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function y(t, e) {
        var n;
        if (t) return "string" == typeof t ? o(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
    }

    function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function g(t) {
        O(t), h(t)
    }

    function h(t) {
        try {
            var e, n = d.a.getDefault().sessionStorage, r = "aps_targeting_comscore", o = n.getItem(r, {isJson: !0});
            n.removeItem(r), o && (e = "vnd_prx_segments", t.setTargeting(e, o[e]))
        } catch (t) {
            Object(u.b)(t, "applyComscoreTargeting")
        }
    }

    function O(t) {
        try {
            var e, n, r, o, i, a = d.a.getDefault().sessionStorage, c = "aps_targeting_ias",
                s = a.getItem(c, {isJson: !0});
            a.removeItem(c), s && (e = s.targeting.slots[t.slotID], Object.keys(e).forEach((function (n) {
                var r = e[n];
                t.setTargeting(n, r)
            })), n = s.targeting, r = n.brandSafety, o = n.fr, i = n.custom, r && Object.keys(r).forEach((function (t) {
                var e = r[t];
                window.googletag.pubads().setTargeting(t, e)
            })), i && Object.keys(i).forEach((function (t) {
                var e = i[t];
                window.googletag.pubads().setTargeting(t, e)
            })), o) && window.googletag.pubads().setTargeting("fr", o)
        } catch (n) {
            Object(u.b)(n, "applyIasTargeting")
        }
    }

    function v() {
        var r = c.a.getState().experiments.shouldSampleLatency, o = Date.now(),
            t = Object(a.a)(window.location, window.top.location);
        if (null !== t) {
            var e = {
                url: t, withCredentials: !0, onload: function t(e) {
                    if (200 === e.status) try {
                        c.a.dispatch({
                            type: "RECORD_LIBRARY_LOAD_CALL_LATENCY",
                            latency: Date.now() - o
                        }), r && setTimeout(s.d, 1e3);
                        var n = JSON.parse(e.response);
                        eval(n["3pvendor"]), Object(b.a)(c.a.getState().config.gdpr, (function (t) {
                            var e;
                            t && (e = Object(b.c)(t.consent), Object(d.b)()) && Object(b.d)(e, t.gdprApplies) && d.a.getDefault().localStorage.setItem(l.e, "1")
                        })), Object(p.b)(n)
                    } catch (t) {
                        Object(u.b)(t, "load3PLibraryConfig-onload"), Object(p.a)(t, "load3PLibraryConfig-onload")
                    }
                }, onerror: function (t) {
                    t = new Error("".concat(t.type, ": ").concat(t.loaded, " bytes transferred")), Object(u.b)(t, "load3PLibraryConfig-onerror"), Object(p.a)(t, "load3PLibraryConfig-onerror")
                }
            };
            try {
                Object(i.d)(e)
            } catch (t) {
                Object(u.b)(t, "load3PLibraryConfig"), Object(p.a)(t, "load3PLibraryConfig")
            }
            r && setTimeout(s.d, 1e3)
        }
    }

    function j() {
        return Object(f.k)(window, "creativeVendorLibraryLoaded") && !0 === window.creativeVendorLibraryLoaded || Object(f.k)(window, "confiant")
    }

    function S() {
        var t = {renderTimes: {}};
        window.addEventListener("message", (function (e) {
            Object(r.a)(t, e)
        }))
    }

    function w(t) {
        if (t) try {
            var e, n = JSON.parse(window.atob(decodeURIComponent(t))), r = {id: n.envelope, newGen: 2},
                o = d.a.getDefault().localStorage;
            return Object(f.k)(n, "timestamp") && (!(e = o.getItem(l.m)) || e < n.timestamp ? (r.newGen = 1, o.setItem(l.m, n.timestamp)) : r.newGen = 0), r
        } catch (e) {
            return {id: decodeURIComponent(t), newGen: 2}
        }
        return !1
    }

    var T = ["_publink", "_publink_srv", "_pbjs_publink"];

    function _() {
        try {
            var t, e = m(T);
            try {
                for (e.s(); !(t = e.n()).done;) {
                    var n, r = t.value, o = d.a.getDefault().cookie.getItem(r, {isJson: !0});
                    if (o) return null != (n = o.publink) && n
                }
            } catch (t) {
                e.e(t)
            } finally {
                e.f()
            }
            return !1
        } catch (t) {
            return !1
        }
    }

    function D() {
        try {
            var t, e, n, r, o, i, a, c, s = {ids: {}};
            return "1" === d.a.getDefault().localStorage.getItem(l.e) && ((t = d.a.getDefault().localStorage.getItem("id5id")) && (s.ids.id5 = JSON.parse(decodeURIComponent(t)).universal_uid), (e = d.a.getDefault().localStorage.getItem("_pubcid")) && (s.ids.pubcommon = e), n = !1, d.a.getDefault().localStorage.getItem("_lr_env") ? n = w(d.a.getDefault().localStorage.getItem("_lr_env")) : d.a.getDefault().cookie.getItem("_lr_env") ? (r = d.a.getDefault().cookie.getItem("_lr_env")) && (n = w(r)) : d.a.getDefault().localStorage.getItem("idl_env") ? n = w(d.a.getDefault().localStorage.getItem("idl_env")) : d.a.getDefault().cookie.getItem("idl_env") && (o = d.a.getDefault().cookie.getItem("idl_env")) && (n = w(o)), n && (s.ids.liveRamp = n.id, Object(f.k)(n, "newGen")) && (s.md = {liveRamp: n.newGen}), (i = d.a.getDefault().localStorage.getItem("hadronId") || d.a.getDefault().localStorage.getItem("auHadronId")) && (s.ids.audigent = i), (a = d.a.getDefault().localStorage.getItem("panoramaId")) && (s.ids.lotame = a), c = _()) && (s.ids.publink = c), s
        } catch (t) {
            Object(u.b)(t, "getIdentityConfig")
        }
        return {ids: {}}
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return d
    })), n.d(e, "b", (function () {
        return f
    })), n.d(e, "c", (function () {
        return b
    }));
    var r = n(1), o = n(10), i = n(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, l(r.key), r)
        }
    }

    function u(t, e, n) {
        (e = l(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function l(t) {
        return t = function (t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== a(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === a(t) ? t : String(t)
    }

    function d(t) {
        try {
            return Object(i.j)(t.config.signals) ? t.config.signals : {}
        } catch (t) {
            return Object(r.b)(t, "getSignals"), {}
        }
    }

    function f(t) {
        try {
            var e = d(t);
            return 0 === Object.keys(e).length ? "" : Object(o.c)(e)
        } catch (t) {
            return Object(r.b)(t, "getSignalsParams"), ""
        }
    }

    function b() {
        var t = window.apscustom || [];
        if (window.apscustom = {push: y, loaded: !0}, Array.isArray(t)) for (; t.length;) y(t.shift())
    }

    var p = new (function () {
        function t() {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            u(this, "ignoreKeys", ["apsCustomSlotname", "apsCustomProgram"]), u(this, "programKey", "apscustom"), u(this, "dataParamPrefix", "apsCustom")
        }

        var e, n;
        return e = t, (n = [{
            key: "init", value: function (t) {
                var e, n, r, o = this;
                t && t.id && (n = document.getElementById(t.id)) && (t._element = n, e = Object.assign({}, n.dataset), n.setAttribute("data-aps-custom-status", "read"), n = e.apsCustomProgram || this.programKey, Object.keys(e).filter((function (t) {
                    return t.indexOf(o.dataParamPrefix) <= -1 || o.ignoreKeys.includes(t)
                })).forEach((function (t) {
                    return delete e[t]
                })), r = {
                    slotID: t.id,
                    slotName: e.apsCustomSlotname || t.id,
                    sizes: [[999, 999]]
                }, this.fetchBidsAndRender(r, t, function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(n), !0).forEach((function (e) {
                            u(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({program: n}, e)))
            }
        }, {
            key: "fetchBidsAndRender", value: function (t, e, n) {
                var r = this;
                t = {slots: [t], params: n};
                e.timeout && (t.timeout = e.timeout), window.apstag.fetchBids(t, (function (t) {
                    return r.renderBids(t, e)
                }))
            }
        }, {
            key: "renderBids", value: function (t, e) {
                t.forEach((function (t) {
                    var n, r = document.createElement("iframe"), o = t.size.split("x"),
                        i = (null == (i = t.targeting) ? void 0 : i.amzniid) || t.amzniid;
                    i && e && (r.style.marginLeft = "0", r.style.marginTop = "0", r.style.height = "".concat(o[1], "px"), r.style.width = "100%", r.setAttribute("scrolling", "no"), r.setAttribute("frameborder", "0"), o = e._element, e.location && (n = document.createElement("div"), null != (t = document.getElementById(t.slotID)) && t.insertAdjacentElement(e.location, n), o = n), null != (t = o) && t.appendChild(r), o = null == r || null == (n = r.contentWindow) ? void 0 : n.document) && (o.open(), o.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><style>html{height:100%}body{height:100%;margin:0;overflow:hidden}</style></head><body><script>window.parent.apstag.renderImp(document, "' + i + '", {"inheritSize": true});<\/script></body></html>'), o.close(), null != (t = e._element)) && t.setAttribute("data-aps-custom-status", "rendered")
                }))
            }
        }]) && s(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }());

    function y(t) {
        t = Object.assign({}, t), p.init(t)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return d
    })), n.d(e, "b", (function () {
        return f
    }));
    var r = n(10), o = n(1), i = n(2), a = n(4), c = n(8);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function l(t) {
        var e = Object(c.c)("bsHost", i.a.getState().hosts.DEFAULT_BS_HOST);
        e = {
            url: "".concat(a.s).concat("prod", ".").concat("us-east-1", ".").concat(e).concat("/v1/recordVendorsLoaded"),
            body: JSON.stringify(t),
            headers: {"Content-Type": "application/json"},
            onload: function () {
            }
        };
        try {
            Object(r.d)(e)
        } catch (t) {
            Object(o.b)(t, "load3PLibraryConfig-VendorLoadedEvent-SendError")
        }
    }

    function d(t, e) {
        try {
            var n = i.a.getState().config, r = n.isSelfServePub ? a.t : n.pubID;
            l([{publisherId: n.pubID, sourceId: r, failure: e, errorName: t.name, errorMessage: t.message}])
        } catch (t) {
            Object(o.b)(t, "load3PLibraryConfig-VendorLoadedEventError-ConstructError")
        }
    }

    function f(t) {
        try {
            l(JSON.parse(t[a.w]).map((function (t) {
                return function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? u(Object(n), !0).forEach((function (e) {
                            var r, o;
                            r = t, o = n[e = e], (e = function (t) {
                                return t = function (t, e) {
                                    if ("object" !== s(t) || null === t) return t;
                                    var n = t[Symbol.toPrimitive];
                                    if (void 0 === n) return String(t);
                                    if ("object" !== s(n = n.call(t, e))) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }(t, "string"), "symbol" === s(t) ? t : String(t)
                            }(e)) in r ? Object.defineProperty(r, e, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[e] = o
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({publisherId: i.a.getState().config.pubID}, t)
            })))
        } catch (t) {
            Object(o.b)(t, "load3PLibraryConfig-VendorLoadedEvent-ConstructError")
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return b
    }));
    var r = n(0), o = (e = n(19), n(1)), i = n(23);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, f(r.key), r)
        }
    }

    function s(t, e) {
        return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function u(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, r = d(t);
            n = e ? (n = d(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === a(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return l(r)
        }
    }

    function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function f(t) {
        return t = function (t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== a(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === a(t) ? t : String(t)
    }

    var b = function (t) {
        var e = a;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {writable: !1}), t && s(e, t);
        var n = u(a);

        function a() {
            var t = this, e = a;
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            for (var r, o, i = arguments.length, c = new Array(i), s = 0; s < i; s++) c[s] = arguments[s];
            return e = l(t = n.call.apply(n, [this].concat(c))), o = !0, (r = f(r = "isSupported")) in e ? Object.defineProperty(e, r, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = o, t
        }

        return e = a, (t = [{
            key: "reportError", value: function (t, e) {
                Object(o.b)(t, "GoogletagAdServer-".concat(e))
            }
        }, {
            key: "cmdQueuePush", value: function (t) {
                try {
                    window.googletag.cmd.push(t)
                } catch (t) {
                    this.reportError(t, "cmdQueuePush")
                }
            }
        }, {
            key: "slotRenderEndedEvent", value: function (t) {
                try {
                    window.googletag.pubads().addEventListener("slotRenderEnded", (function (e) {
                        e = new i.a(e.slot), t(e)
                    }))
                } catch (t) {
                    this.reportError(t, "slotRenderEndedEvent")
                }
            }
        }, {
            key: "setTargeting", value: function (t, e) {
                try {
                    window.googletag.pubads().setTargeting(t, e)
                } catch (t) {
                    this.reportError(t, "setTargeting")
                }
            }
        }, {
            key: "getTargeting", value: function (t) {
                try {
                    return window.googletag.pubads().getTargeting(t) || []
                } catch (t) {
                    return this.reportError(t, "getTargeting"), []
                }
            }
        }, {
            key: "clearTargeting", value: function (t) {
                try {
                    window.googletag.pubads().clearTargeting(t)
                } catch (t) {
                    this.reportError(t, "clearTargeting")
                }
            }
        }, {
            key: "hasAdServerObjectLoaded", value: function () {
                try {
                    return Object(r.k)(window, "googletag") && Object(r.k)(window.googletag, "apiReady") && !0 === window.googletag.apiReady
                } catch (t) {
                    return this.reportError(t, "hasAdServerObjectLoaded"), !1
                }
            }
        }, {
            key: "isCommandQueueDefined", value: function () {
                try {
                    return Object(r.k)(window, "googletag") && Object(r.k)(window.googletag, "cmd")
                } catch (t) {
                    return this.reportError(t, "isCommandQueueDefined"), !1
                }
            }
        }, {
            key: "getSlots", value: function () {
                try {
                    return window.googletag.pubads().getSlots().map((function (t) {
                        return new i.a(t)
                    }))
                } catch (t) {
                    return this.reportError(t, "getSlots"), []
                }
            }
        }]) && c(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), a
    }(e.a)
}, function (t, e, n) {
    "use strict";
    n.d(e, "b", (function () {
        return a
    })), n.d(e, "a", (function () {
        return c
    }));
    var r = n(4), o = n(0), i = n(1);

    function a(t) {
        try {
            return Object(o.k)(t, "debug")
        } catch (t) {
            return Object(i.b)(t, "isApstagLibrary"), !1
        }
    }

    function c(t) {
        try {
            return !!Object(o.k)(t, r.a) && !0 === t[r.a]
        } catch (t) {
            return Object(i.b)(t, "hasApstagJsLoaded"), !1
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return y
    }));
    e = n(17);
    var r = n(22);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? i(Object(n), !0).forEach((function (e) {
                b(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, p(r.key), r)
        }
    }

    function s() {
        return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t));) ;
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, r = f(t);
            n = e ? (n = f(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === o(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return d(r)
        }
    }

    function d(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function b(t, e, n) {
        (e = p(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function p(t) {
        return t = function (t, e) {
            if ("object" !== o(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== o(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === o(t) ? t : String(t)
    }

    var y = function (t) {
        var e = o;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {writable: !1}), t && u(e, t);
        var n = l(o);

        function o(t) {
            if (this instanceof o) return b(d(t = n.call(this, t)), "_sizesDelegate", void 0), t._sizesDelegate = new r.a(t.rawSlot.sizes), t;
            throw new TypeError("Cannot call a class as a function")
        }

        return e = o, (t = [{
            key: "sizes", get: function () {
                return this._sizesDelegate.sizes
            }
        }, {
            key: "aaxSizes", get: function () {
                return this._sizesDelegate.aaxSizes || []
            }
        }, {
            key: "aaxSlot", get: function () {
                var t = {sd: this.slotID, s: this.aaxSizes};
                return this.slotID !== this.slotName && (t.sn = this.slotName), a(a({}, t), s(f(o.prototype), "aaxSlot", this))
            }
        }, {
            key: "isValid", value: function () {
                return !(!s(f(o.prototype), "isValid", this).call(this) || 0 === this.sizes.length && (this.reportIsValidMessages(["'sizes' must have at least 1 valid item"], !0), 1))
            }
        }]) && c(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), o
    }(e.a)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return s
    })), n.d(e, "b", (function () {
        return c
    }));
    var r = n(2), o = n(1), i = n(0), a = n(10);

    function c(t) {
        try {
            var e = r.a.getState().cfg.COOKIE_MATCH_DELAY;
            setTimeout((function () {
                try {
                    if (Object(i.k)(t, "cmp")) {
                        var e = t.cmp;

                        function n(t) {
                            try {
                                var e;
                                r.a.getState().cmpFired || (r.a.dispatch({type: "CMP_FIRED"}), (e = document.createElement("iframe")).style.display = "none", e.src = t, document.body.appendChild(e))
                            } catch (t) {
                                Object(o.b)(t, "_doCookieMatch-ready")
                            }
                        }

                        try {
                            "loading" === document.readyState ? document.addEventListener && document.addEventListener("DOMContentLoaded", (function () {
                                n(e)
                            }), !1) : n(e)
                        } catch (e) {
                            Object(o.b)(e, "_doCookieMatch")
                        }
                    } else Object(i.k)(t, "cmpjs") && Object(a.b)(t.cmpjs)
                } catch (e) {
                    Object(o.b)(e, "_tryCookieMatch-setTimeout")
                }
            }), e)
        } catch (e) {
            Object(o.b)(e, "_tryCookieMatch")
        }
    }

    function s(t, e) {
        var n = e;
        return function () {
            var e = {method: t, args: arguments};
            try {
                e.ts = Date.now(), r.a.dispatch({type: "LOG_EVENT", event: e})
            } catch (e) {
                Object(o.b)(e, "_logEvent")
            }
            return n.apply(void 0, arguments)
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return c
    }));
    var r = n(2), o = n(1), i = n(8), a = n(4);

    function c(t, e) {
        try {
            var n, c = r.a.getState(), s = c.config, u = Object(i.c)("host", c.hosts.DEFAULT_CXM_HOST),
                l = c.cfg.LIB_CONFIG_PATH;
            try {
                if (0 <= ["http:", "https:"].indexOf(t.protocol)) n = t.protocol + "//" + t.hostname; else {
                    if (!(0 <= ["http:", "https:"].indexOf(e.protocol))) return null;
                    n = e.protocol + "//" + e.hostname
                }
            } catch (t) {
                if (t instanceof window.DOMException) return null;
                throw t
            }
            var d, f = {src: s.isSelfServePub ? a.t : s.pubID, u: encodeURIComponent(n)};
            return s.isSelfServePub && (f.pubid = s.pubID), !f.src || isNaN(Number(f.src)) ? null : (d = Object.keys(f).map((function (t) {
                return "".concat(t.trim(), "=").concat(String(f[t]).trim())
            })).join("&"), "".concat(a.s).concat(u).concat(l, "?").concat(d))
        } catch (t) {
            return Object(o.b)(t, "buildLibraryConfigUrl"), null
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return c
    }));
    var r = n(0), o = n(9), i = n(11), a = n(3);

    function c(t, e) {
        var n, c, s, u, l, d;
        Object(r.j)(e.data) ? (Object(r.k)(e.data, "bidInfo") && (Object(r.k)(e.data.bidInfo, "src") ? (n = e.data.bidInfo.src, n = new URL(n).searchParams.get("b")) : Object(r.k)(e.data.bidInfo, "jsonp") && (l = e.data.bidInfo.jsonp, n = JSON.parse(l.substr(17, l.length - 20)).amzniid)), Object(r.k)(e.data, "renderData") && (c = (l = e.data.renderData).id, Object(r.k)(l, "renderStart") || Object(r.k)(l, "renderEnd")) && (d = l.renderStart, l = l.renderEnd, d ? (t.renderTimes[c] = {timeStamp: d}, n && (t.renderTimes[c].bidId = n)) : l && Object(r.k)(t.renderTimes, c) && 0 !== t.renderTimes[c].timeStamp && (d = l - t.renderTimes[c].timeStamp, l = {
            _type: "iframeRender",
            c: "dtb",
            pid: i.b,
            crt: d
        }, (n = t.renderTimes[c].bidId ? t.renderTimes[c].bidId : n) ? Object(a.a)(n, l) : Object(a.b)(l))), Object(r.k)(e.data, "blockData") && (d = e.data.blockData.blockInfo, t = {
            _type: "malwareBlock",
            c: "dtb",
            tpbr: 1,
            pid: i.b,
            info: d
        }, n ? Object(a.a)(n, t) : Object(a.b)(t)), Object(r.k)(e.data, "creativeFormatPixel") && (l = (c = (c = e).data.creativeFormatPixel).vendorId, d = void 0 === (d = c.pixelData) ? {} : d, l) && ("creativeFormatBidPixel" === c.type && (u = {
            _type: "creativeFormatBidPixel",
            cfbp: 1,
            c: "dtb",
            vendorId: l
        }, (s = void 0 === (s = d.bi) ? "" : s) && (u.bi = s), Object(a.b)(u)), "creativeFormatImpressionPixel" === c.type) && (s = d.bi, c = void 0 === (u = d.ii) ? "" : u, u = {
            _type: "creativeFormatImpressionPixel",
            cfip: 1,
            c: "dtb",
            vendorId: l,
            bp: void 0 === (u = d.bp) ? 0 : u,
            bpc: void 0 === (l = d.bpc) ? "USD" : l
        }, (d = void 0 === s ? "" : s) && (u.bi = d), c && (u.ii = c), Object(a.b)(u))) : e.data && "adBlocked" === e.data && (n = {
            _type: "adBlockedPixel",
            c: "dtb",
            pid: i.b,
            abc: 1,
            u: Object(o.g)(window)
        }, Object(a.b)(n))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    var r = n(3), o = n(1);

    function i(t) {
        try {
            !1 !== window.apstag.isGDPRRegion || "function" != typeof document.hasTrustToken ? Object(r.c)("trustToken", "notSupported") : (t.trustTokenParameter = {
                type: "send-redemption-record",
                issuers: ["https://www.amazon.com"],
                refreshPolicy: "none",
                includeTimestampHeader: !0,
                signRequestData: "headers-only",
                additionalSigningData: "additional_signing_data"
            }, Object(r.c)("trustToken", "supported"), document.hasTrustToken("https://www.amazon.com").then((function (t) {
                t && Object(r.c)("trustToken", "present")
            })).catch((function () {
                Object(r.c)("trustToken", "absent")
            })))
        } catch (t) {
            Object(o.b)(t, "trustToken")
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return g
    }));
    e = n(17);
    var r = n(22), o = n(6), i = n(18);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function (e) {
                y(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, m(r.key), r)
        }
    }

    function l() {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t));) ;
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function d(t, e) {
        return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, r = p(t);
            n = e ? (n = p(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
            if (n && ("object" === a(n) || "function" == typeof n)) return n;
            if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
            return b(r)
        }
    }

    function b(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function y(t, e, n) {
        (e = m(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function m(t) {
        return t = function (t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== a(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === a(t) ? t : String(t)
    }

    var g = function (t) {
        var e = a;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {writable: !1}), t && d(e, t);
        var n = f(a);

        function a(t) {
            if (this instanceof a) return y(b(t = n.call(this, t)), "_sizesDelegate", void 0), t._sizesDelegate = new r.a(t.rawSlot.sizes), t;
            throw new TypeError("Cannot call a class as a function")
        }

        return e = a, (t = [{
            key: "mediaType", get: function () {
                return o.a.VIDEO
            }
        }, {
            key: "aaxMediaType", get: function () {
                return i.a.VIDEO
            }
        }, {
            key: "sizes", get: function () {
                return this._sizesDelegate.sizes
            }
        }, {
            key: "aaxSizes", get: function () {
                return this._sizesDelegate.aaxSizes || []
            }
        }, {
            key: "aaxSlot", get: function () {
                var t = s(s({}, l(p(a.prototype), "aaxSlot", this)), {}, {id: this.slotID, mt: this.aaxMediaType});
                return 0 < this.sizes.length && (t.s = this.aaxSizes), t
            }
        }]) && u(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), a
    }(e.a)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return j
    })), (e = r = r || {}).LOCAL_STORAGE = "LOCAL", e.CSS_SELECTOR = "CSS", e.URL = "URL", (o = o || {}).EMAIL = "email";
    var r, o, i = n(1), a = n(15), c = n(5);

    function s(t, e) {
        var n, r, o, i, a = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (a) return r = !(n = !0), {
            s: function () {
                a = a.call(t)
            }, n: function () {
                var t = a.next();
                return n = t.done, t
            }, e: function (t) {
                r = !0, o = t
            }, f: function () {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
        };
        if (Array.isArray(t) || (a = function (t, e) {
            var n;
            if (t) return "string" == typeof t ? u(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
        }(t)) || e && t && "number" == typeof t.length) return a && (t = a), i = 0, {
            s: e = function () {
            }, n: function () {
                return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
            }, e: function (t) {
                throw t
            }, f: e
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function l(t) {
        return t.then((function (t) {
            return Array.from(new Uint8Array(t)).map((function (t) {
                return t.toString(16).padStart(2, "0")
            })).join("")
        })).then((function (t) {
            return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" !== t ? t : ""
        }))
    }

    function d(t, e) {
        return t instanceof window.HTMLInputElement || t instanceof window.HTMLTextAreaElement ? f(t.value, e) ? l(window.crypto.subtle.digest("SHA-256", (new window.TextEncoder).encode(t.value || ""))) : Promise.resolve("") : f(t.innerText, e) ? l(window.crypto.subtle.digest("SHA-256", (new window.TextEncoder).encode(t.innerText || ""))) : Promise.resolve("")
    }

    var f = function (t, e) {
        return "string" == typeof t && (e === o.EMAIL ? /\S+@\S+\.\S+/.test(t) || Object(a.c)(t) : 0 < t.trim().length)
    }, b = function (t, e, n) {
        if (0 === (n = n || window.document.querySelectorAll(t)).length) return new Promise((function (t) {
            return t("")
        }));
        if (1 === n.length) return d(n[0], e);
        var r, o = [], i = s(n);
        try {
            for (i.s(); !(r = i.n()).done;) {
                var a = r.value;
                o.push(d(a, e))
            }
        } catch (t) {
            i.e(t)
        } finally {
            i.f()
        }
        return Promise.all(o).then((function (t) {
            var e, n = null, r = s(t);
            try {
                for (r.s(); !(e = r.n()).done;) {
                    var o = e.value;
                    if ("" !== o) {
                        if (null !== n && ("string" != typeof n || n !== o)) return "";
                        n = o
                    }
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
            return n || ""
        }))
    }, p = n(21), y = n(2);

    function m(t) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function g(t, e) {
        var n, r, o, i, a = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (a) return r = !(n = !0), {
            s: function () {
                a = a.call(t)
            }, n: function () {
                var t = a.next();
                return n = t.done, t
            }, e: function (t) {
                r = !0, o = t
            }, f: function () {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
        };
        if (Array.isArray(t) || (a = function (t, e) {
            var n;
            if (t) return "string" == typeof t ? h(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0
        }(t)) || e && t && "number" == typeof t.length) return a && (t = a), i = 0, {
            s: e = function () {
            }, n: function () {
                return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
            }, e: function (t) {
                throw t
            }, f: e
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function O(t, e, n) {
        (e = function (t) {
            return t = function (t, e) {
                if ("object" !== m(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 === n) return String(t);
                if ("object" !== m(n = n.call(t, e))) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }(t, "string"), "symbol" === m(t) ? t : String(t)
        }(e)) in t ? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}) : t[e] = n
    }

    var v = {called: !1};

    function j(t) {
        if (Promise && TextEncoder && window.crypto && window.crypto.subtle) try {
            var e;
            v.called && !t.overrideLimit ? Object(i.b)(new Error("rr should only be called once per page load"), "retrieveRecords-callLimit") : (v.called = !0, e = 0, function n() {
                !(window.apstag.isGDPRRegion && !new p.a({
                    stateContainer: y.a,
                    globalContext: window
                }).isListenerActive || (c.a.getDefault().allowedToStoreAndAccessInformationOnDevice() ? function () {
                    var t, e, n, o, s, u, l = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        d = 1 < arguments.length ? arguments[1] : void 0,
                        p = (t = l.methods || [], O(e = {}, r.LOCAL_STORAGE, 5), O(e, r.URL, 4), O(e, r.CSS_SELECTOR, 3), n = e, o = {}, t.forEach((function (t) {
                            o[t.method] = (o[t.method] || 0) + 1, t.priority = o[t.method]
                        })), t.sort((function (t, e) {
                            return t.method === e.method ? (t.priority || 0) > (e.priority || 0) ? 1 : -1 : n[t.method] > n[e.method] ? -1 : 1
                        })), []), y = g(l.methods || []);
                    try {
                        var h = function () {
                            var t = u.value, e = t.method, n = t.target, o = t.type, l = "";
                            switch (e) {
                                case r.LOCAL_STORAGE:
                                    l = function (t, e) {
                                        return (t = c.a.getDefault().localStorage.getItem(t, {ignoreFailure: !1})) && f(t, e) ? t : ""
                                    }(n, o);
                                    break;
                                case r.URL:
                                    p.push(function (t) {
                                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window.location.href;
                                        try {
                                            t = t.replace(/[\[\]]/g, "\\$&");
                                            var n = new RegExp("[?&#]" + t + "(=([^&#?]*)|&|#|$)").exec(e);
                                            return Array.isArray(n) && "string" == typeof n[2] && 0 !== decodeURIComponent(n[2].replace(/\+/g, " ")).trim().length && Object(a.c)(decodeURIComponent(n[2].replace(/\+/g, " "))) ? Promise.resolve(decodeURIComponent(n[2].replace(/\+/g, " "))) : new Promise((function (t) {
                                                return t("")
                                            }))
                                        } catch (t) {
                                            return Object(i.b)(t, "retrieveUrl"), Promise.resolve("")
                                        }
                                    }(n).then((function (t) {
                                        return {type: o, value: t}
                                    })));
                                    break;
                                case r.CSS_SELECTOR:
                                    s = t
                            }
                            if (0 < l.length) return d({value: l, type: o}), {v: void 0}
                        };
                        for (y.s(); !(u = y.n()).done;) {
                            var v = h();
                            if ("object" === m(v)) return v.v
                        }
                    } catch (t) {
                        y.e(t)
                    } finally {
                        y.f()
                    }

                    function j() {
                        var t, e, n, r, o, i;
                        s && (!0 === s.isGlobalSubmit || "string" == typeof s.eventTarget && "string" == typeof s.event) && (e = (t = s).eventTarget, n = t.target, r = t.type, o = t.isGlobalSubmit, "string" == typeof (i = o ? "submit" : s.event)) && 0 !== i.length ? window.addEventListener(i, (function t(a) {
                            var c, s, u, l, f, p, y, m, g;
                            s = (a = {
                                e: a,
                                event: i,
                                eventTarget: e,
                                isGlobalSubmit: o,
                                target: n,
                                type: r,
                                onDone: d,
                                listener: t
                            }).e, u = a.eventTarget, l = a.event, f = a.isGlobalSubmit, p = a.target, y = a.type, m = a.onDone, g = a.listener, f || "window" === u || s.target && "function" == typeof s.target.matches && "string" == typeof u && s.target.matches(u) ? (f && s instanceof window.Event && s.target && (c = s.target.querySelectorAll('input[type="email"]')), b(p, y, c).then((function (t) {
                                "function" == typeof g && window.removeEventListener(l, g), m(!(t.length < 1) && {
                                    value: t,
                                    type: y
                                })
                            }))) : m(!1)
                        })) : d(!1)
                    }

                    0 === p.length ? j() : Promise.all(p).then((function (t) {
                        var e, n = g(t);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var r = e.value;
                                if (0 < r.value.length) return void d(r)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        j()
                    }))
                }(t, (function (t) {
                    !1 !== t && Object(a.e)({hashedRecords: [{type: t.type, record: t.value}]})
                })) : Object(i.b)(new Error("GDPR consent not present/valid"), "retrieveRecords"), 0)) || 6400 < e || (setTimeout(n, e), e = 0 === e ? 200 : 2 * e)
            }())
        } catch (t) {
            Object(i.b)(t, "retrieveRecords-retrieve")
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return I
    }));
    e = n(17);
    var r = n(6), o = n(18), i = n(0), a = n(1), c = n(22);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
        }
    }

    function l(t, e, n) {
        (e = d(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function d(t) {
        return t = function (t, e) {
            if ("object" !== s(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== s(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === s(t) ? t : String(t)
    }

    var f = function () {
        function t() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = this, r = t;
            if (!(n instanceof r)) throw new TypeError("Cannot call a class as a function");
            l(this, "_propertyConfig", void 0), l(this, "_sizesDelegate", void 0), this._propertyConfig = e, this._sizesDelegate = new c.a(null == e ? void 0 : e.sizes, !1, !0)
        }

        var e, n;
        return e = t, (n = [{
            key: "sizes", get: function () {
                return this._sizesDelegate.sizes
            }
        }, {
            key: "validSizes", get: function () {
                return this._sizesDelegate.isValid()
            }
        }, {
            key: "propertyConfig", get: function () {
                return this._propertyConfig
            }
        }, {
            key: "aaxPropertyConfig", get: function () {
                var t = {};
                return this.aaxSizes && (t.s = this.aaxSizes), t
            }
        }, {
            key: "aaxSizes", get: function () {
                return this._sizesDelegate.aaxSizes
            }
        }, {
            key: "isValid", value: function () {
                return !Object(i.j)(this.propertyConfig) || Array.isArray(this.propertyConfig) ? (Object(a.b)({
                    name: "MultiFormatSlot-InvalidMultiFormatSlotProperty",
                    message: "multiFormatProperty must be an object"
                }, "MultiFormatSlotProperty-isValid", {makeVisibleToAllUsers: !0}), !1) : !!this.validSizes
            }
        }]) && u(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();

    function b(t) {
        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function p(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, m(r.key), r)
        }
    }

    function y(t, e, n) {
        (e = m(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function m(t) {
        return t = function (t, e) {
            if ("object" !== b(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== b(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === b(t) ? t : String(t)
    }

    var g = function () {
        function t(e) {
            var n = this;
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
            y(this, "_multiFormatProperties", void 0), e && Object(i.j)(e) && !Array.isArray(e) && (this._multiFormatProperties = {}, this.toMultiFormatMediaTypes(e).forEach((function (t) {
                n._multiFormatProperties && (n._multiFormatProperties[t] = new f(e[t]))
            })))
        }

        var e, n;
        return e = t, (n = [{
            key: "convertMultiFormatMediaType", value: function (t) {
                var e;
                return y(e = {}, r.a.VIDEO, o.a.VIDEO), y(e, r.a.DISPLAY, o.a.DISPLAY), e[t]
            }
        }, {
            key: "isMultiFormatMediaType", value: function (t) {
                return Boolean(this.convertMultiFormatMediaType(t))
            }
        }, {
            key: "toMultiFormatMediaTypes", value: function (t) {
                var e = this;
                return Object.keys(t).filter((function (t) {
                    return e.isMultiFormatMediaType(t)
                }))
            }
        }, {
            key: "multiFormatMediaTypes", get: function () {
                return this._multiFormatProperties ? this.toMultiFormatMediaTypes(this._multiFormatProperties) : []
            }
        }, {
            key: "aaxMultiFormatProperties", get: function () {
                var t, e = this;
                return this._multiFormatProperties ? (t = {}, this.multiFormatMediaTypes.forEach((function (n) {
                    var r = e.convertMultiFormatMediaType(n);
                    r && (t[r] = null == (r = e._multiFormatProperties[n]) ? void 0 : r.aaxPropertyConfig)
                })), t) : {}
            }
        }, {
            key: "isValid", value: function () {
                var t = this, e = !0;
                return this._multiFormatProperties ? (this.multiFormatMediaTypes.forEach((function (n) {
                    t._multiFormatProperties[n].isValid() || (e = !1)
                })), e) : (Object(a.b)({
                    name: "MultiFormatSlot-InvalidMultiFormatProperties",
                    message: "multiFormatProperties must be an object"
                }, "MultiFormatProperties-isValid", {makeVisibleToAllUsers: !0}), !1)
            }
        }]) && p(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();

    function h(t) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function O(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function v(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? O(Object(n), !0).forEach((function (e) {
                D(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function j(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, E(r.key), r)
        }
    }

    function S() {
        return (S = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _(t));) ;
                return t
            }(t, e);
            if (r) return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }).apply(this, arguments)
    }

    function w(t, e) {
        return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function T(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function _(t) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function D(t, e, n) {
        (e = E(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function E(t) {
        return t = function (t, e) {
            if ("object" !== h(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== h(n = n.call(t, e))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(t, "string"), "symbol" === h(t) ? t : String(t)
    }

    var I = function (t) {
        var e = i;
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {writable: !1}), t && w(e, t);
        var n = function (t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var n, r = _(t);
                n = e ? (n = _(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this;
                if (n && ("object" === h(n) || "function" == typeof n)) return n;
                if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                return T(r)
            }
        }(i);

        function i(t) {
            var e;
            if (this instanceof i) return D(T(e = n.call(this, t)), "_multiFormatPropertiesDelegate", void 0), e._multiFormatPropertiesDelegate = new g(t.multiFormatProperties), e;
            throw new TypeError("Cannot call a class as a function")
        }

        return e = i, (t = [{
            key: "mediaType", get: function () {
                return r.a.MULTI_FORMAT
            }
        }, {
            key: "aaxMediaType", get: function () {
                return o.a.MULTI_FORMAT
            }
        }, {
            key: "aaxMultiFormatProperties", get: function () {
                return this._multiFormatPropertiesDelegate.aaxMultiFormatProperties
            }
        }, {
            key: "multiFormatPropertiesIsValid", get: function () {
                return this._multiFormatPropertiesDelegate.isValid()
            }
        }, {
            key: "aaxSlot", get: function () {
                return v(v({}, S(_(i.prototype), "aaxSlot", this)), {}, {
                    id: this.slotID,
                    sd: this.slotID,
                    sn: this.slotName || this.slotID,
                    mt: this.aaxMediaType,
                    mfp: this.aaxMultiFormatProperties
                })
            }
        }, {
            key: "isValid", value: function () {
                return S(_(i.prototype), "isValid", this).call(this) && this.multiFormatPropertiesIsValid
            }
        }]) && j(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), i
    }(e.a)
}, function (t, e, n) {
    t.exports = n(39)
}, function (i, t, e) {
    "use strict";
    e.r(t);
    var Pt = e(16), Ct = e(2), Rt = e(9), zt = e(0), xt = e(13), Lt = e(8), Ut = e(4), Bt = e(14), Nt = e(24),
        Vt = e(20), Mt = e(3), Ft = e(1), qt = e(10), Ht = e(28), n = e(29), Gt = e(7), Qt = e(11), Xt = e(6),
        Jt = e(12), Kt = e(25), Wt = e(15), $t = e(34), Yt = e(36), Zt = e(30), te = e(35), ee = e(23), se = e(37),
        ue = e(21), ne = e(5), re = e(31), le = e(26);

    function oe(t) {
        return u(t) || s(t) || c(t) || a()
    }

    function a() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function c(t, e) {
        var n;
        if (t) return "string" == typeof t ? r(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
    }

    function s(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }

    function u(t) {
        if (Array.isArray(t)) return r(t)
    }

    function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function o(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)), r
    }

    function ie(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(n), !0).forEach((function (e) {
                ae(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function ae(t, e, n) {
        (e = l(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n
    }

    function l(t) {
        return "symbol" === ce(t = d(t, "string")) ? t : String(t)
    }

    function d(t, e) {
        if ("object" !== ce(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 === n) return ("string" === e ? String : Number)(t);
        if ("object" !== ce(n = n.call(t, e || "default"))) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }

    function ce(t) {
        return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    try {
        var f = Object(n.b)(window.apstag);
        f ? Object(Ft.b)(new Error("apstag has already loaded - preventing duplicate load"), "apstag-duplicateLoad", {makeVisibleToAllUsers: !0}) : (Object(n.a)(window) && Object(Ft.b)(new Error("apstag was loaded and then destroyed"), "apstag-destroyReload", {makeVisibleToAllUsers: !0}), window.apstagLOADED = !0, function () {
            var b = Object(Bt.e)(window, "navigationStart"),
                p = (Object(zt.l)(1) && Object(Ft.b)(new Error("apstag-".concat(Ut.l, " reference pixel - Used to compute ratios for other errors")), "REFERENCE"), new ue.a({
                    stateContainer: Ct.a,
                    globalContext: window
                })), t = (p.attemptConsentDataSync(), "ls"), n = Object(Lt.d)("console") || function () {
                    try {
                        return -1 !== window.location.href.indexOf("amzn_debug_console=1") && (t = "url", !0)
                    } catch (t) {
                        return !1
                    }
                }(), L = Object(Lt.d)("console_v2") || function () {
                    try {
                        return -1 !== window.location.href.indexOf("amzn_debug_console=2") && (t = "url", !0)
                    } catch (t) {
                        return !1
                    }
                }();

            function U(t) {
                try {
                    return !Ct.a.getState().experiments.chunkRequests || 0 === Ct.a.getState().bidReqs[t.split("-")[0]].networkReqs.filter((function (t) {
                        return t.inFlight
                    })).length
                } catch (t) {
                    return Object(Ft.b)(t, "_isRequestComplete"), 1
                }
            }

            function i(t, e) {
                try {
                    !Ct.a.getState().bidReqs[t].hasCallbackExecuted && U(t) && (Ct.a.dispatch({
                        type: "RECORD_CALLBACK",
                        fid: t
                    }), e())
                } catch (t) {
                    Object(Ft.b)(t, "_checkAndCallCallback")
                }
            }

            function a(t) {
                try {
                    Ct.a.getState().experiments.chunkRequests && Ct.a.dispatch({
                        type: "RECORD_NETWORK_EXCHANGE",
                        fid: t[0],
                        timestamp: Date.now(),
                        exchangeType: "response",
                        networkID: parseInt(t[1], 10)
                    })
                } catch (t) {
                    Object(Ft.b)(t, "_recordResponse")
                }
            }

            function m(t, r, e) {
                var o = e.split("-"), n = {
                    url: t, withCredentials: !0, onload: function t(e) {
                        try {
                            a(o);
                            var n = e.responseText;
                            eval(n), i(o[0], r)
                        } catch (t) {
                            Object(Ft.b)(t, "_xhrBid-onload", {makeVisibleToAllUsers: !0})
                        }
                    }, onerror: function () {
                        try {
                            a(o), i(o[0], r)
                        } catch (t) {
                            Object(Ft.b)(t, "_xhrBid-onerror", {makeVisibleToAllUsers: !0})
                        }
                    }
                };
                Object($t.a)(n);
                try {
                    Object(qt.d)(n)
                } catch (t) {
                    Object(Ft.b)(t, "_xhrBid", {makeVisibleToAllUsers: !0}), a(o), i(o[0], r)
                }
            }

            function B(t) {
                try {
                    var e = new Date;
                    return e.setTime(e.getTime() + 1e3 * t), e.toUTCString()
                } catch (t) {
                    return Object(Ft.b)(t, "_getCookieExpiry"), "Thu, 01 Jan 1970 00:00:00 GMT"
                }
            }

            function N(t) {
                try {
                    Object(zt.k)(t, "cr") && t.cr.forEach((function (t) {
                        var e = -1 !== t.exp ? B(t.exp) : Object(zt.f)(365);
                        ne.a.getDefault().cookie.setItem(t.k, t.v, e)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_setFirstPartyCookies")
                }
            }

            function V(t) {
                try {
                    var e;
                    Object(zt.k)(t, "cb") && (Ct.a.dispatch({
                        type: "RECORD_AAX_REQ_PROP",
                        bidReqID: t.cb,
                        key: "resTs",
                        value: Date.now()
                    }), e = new RegExp("e/dtb/bid.*cb=".concat(t.cb)), Ct.a.dispatch({
                        type: "RECORD_AAX_REQ_PROP",
                        bidReqID: t.cb,
                        key: "perf",
                        value: Object(Bt.c)(window, e)
                    })), Object(zt.k)(t, "cfg") && Ct.a.dispatch({type: "SET_CFG", cfg: t.cfg}), ct(t)
                } catch (t) {
                    Object(Ft.b)(t, "_doOnAaxResponse", {makeVisibleToAllUsers: !0})
                }
            }

            function M(t) {
                try {
                    Object(re.b)(t), N(t), Object(zt.k)(t, "cfg") && ne.a.getDefault().localStorage.setItem(Ut.d, JSON.stringify(t.cfg), {ignoreFailure: !0}), F(t), Object(Rt.j)(t) || Object(Mt.g)()
                } catch (t) {
                    Object(Ft.b)(t, "_doAfterAaxResponse", {makeVisibleToAllUsers: !0})
                }
            }

            function F(t) {
                try {
                    var e;
                    Object(zt.k)(t, "fp") && (e = t.fp, Object(zt.k)(e, "length")) && e.forEach((function (t) {
                        var e = t.d || 0;
                        setTimeout((function () {
                            Object(Mt.f)(t.s)
                        }), e)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "fireAAXPixels")
                }
            }

            function q() {
                try {
                    Ct.a.getState().Q.forEach((function (t) {
                        var e = "init";
                        switch (t[0]) {
                            case"i":
                                e = "init";
                                break;
                            case"f":
                                e = "fetchBids";
                                break;
                            case"di":
                                e = "deleteId";
                                break;
                            case"ri":
                                e = "renewId";
                                break;
                            case"ui":
                                e = "updateId";
                                break;
                            default:
                                return
                        }
                        window.apstag[e].apply(null, t[1])
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_QHandler", {makeVisibleToAllUsers: !0})
                }
            }

            function H(t) {
                try {
                    Object(zt.j)(t) || (Object(Ft.c)("init.config", ce(t), "object"), t = {pubID: "err"}), Object(Jt.b)(t.pubID, ["string", "number"]) ? "number" == typeof t.pubID && (t.pubID = "".concat(t.pubID)) : Object(Ft.c)("init.config.pubID", ce(t.pubID), "string"), Object(Jt.b)(t.adServer, ["undefined", "string"]) || Object(Ft.c)("init.config.adServer", ce(t.adServer), "string"), Object(Jt.a)(t.bidTimeout) || ("string" == typeof t.bidTimeout ? Object(Ft.b)({
                        name: "string-".concat(t.bidTimeout),
                        message: "init.config.bidTimeout was a non-numeric string '".concat(t.bidTimeout, "'")
                    }, "TypeError-init.config.bidTimeout", {makeVisibleToAllUsers: !0}) : Object(Ft.c)("init.config.bidTimeout", ce(t.bidTimeout), "number")), Object(Jt.b)(t.gdpr, ["undefined", "object"]) ? "object" !== ce(t.gdpr) || Object(Jt.a)(t.gdpr.cmpTimeout) || (Object(Jt.b)(t.gdpr.cmpTimeout, ["string", "undefined"]) ? Object(Ft.b)({
                        name: "string-".concat(t.bidTimeout),
                        message: "init.config.gdpr.cmpTimeout was a non-numeric string '".concat(t.gdpr.cmpTimeout, "'")
                    }, "TypeError-init.config.gdpr.cmpTimeout", {makeVisibleToAllUsers: !0}) : Object(Ft.c)("init.config.gdpr.cmpTimeout", ce(t.gdpr.cmpTimeout), "number")) : Object(Ft.c)("init.config.gdpr", ce(t.gdpr), "object"), Object(zt.k)(t, "params") && !Object(zt.j)(t.params) ? Object(Ft.c)("init.config.params", ce(t.params), "object") : Object(zt.k)(t, "params") && Object.keys(t.params).forEach((function (e) {
                        return !(!Object(zt.k)(t, "params") || "string" != typeof t.params[e] && "number" != typeof t.params[e] && (Object(zt.i)(t.params[e]) ? !t.params[e].reduce((function (t, e) {
                            return t && ("string" == typeof e || "number" == typeof e)
                        }), !0) && (Object(Ft.b)({
                            name: "non-string array item",
                            message: "'init.config.params.".concat(e, " contains a non-string item")
                        }, "TypeError-init.config.params.".concat(e), {makeVisibleToAllUsers: !0}), 1) : (Object(Ft.c)("init.config.params.".concat(e), ce(t.params[e]), "string' or 'array"), 1)))
                    })), Object(zt.k)(t, "params") && Object(zt.k)(t.params, "us_privacy") && "string" == typeof t.params.us_privacy && Ut.A.test(t.params.us_privacy) ? Object(Mt.c)("ccpa", "y") : Object(zt.k)(t, "params") && Object(zt.k)(t.params, "us_privacy") ? Object(Mt.c)("ccpa", "i") : Object(Mt.c)("ccpa", "n"), Object(zt.k)(t, "blockedBidders") && !Object(zt.i)(t.blockedBidders) ? Object(Ft.c)("init.config.blockedBidders", ce(t.blockedBidders), "array") : Object(zt.k)(t, "blockedBidders") && Object(zt.i)(t.blockedBidders) && (t.blockedBidders.reduce((function (t, e) {
                        return t && ("string" == typeof e || "number" == typeof e)
                    }), !0) || Object(Ft.b)({
                        name: "non-string array item",
                        message: "'init.config.blockedBidders contains a non-string item"
                    }, "TypeError-init.config.blockedBidders", {makeVisibleToAllUsers: !0})), Object(zt.k)(t, "blockedBidders") ? Object(Mt.c)("blockedBidders-init", "y") : Object(Mt.c)("blockedBidders-init", "n"), Object(Jt.b)(t.simplerGPT, ["undefined", "boolean"]) || Object(Ft.c)("init.config.simplerGPT", ce(t.simplerGPT), "boolean"), t.simplerGPT ? Object(Mt.c)("simplerGpt", "y") : Object(Mt.c)("simplerGpt", "n"), Object(Jt.b)(t.deals, ["undefined", "boolean"]) || Object(Ft.c)("init.config.deals", ce(t.deals), "boolean"), t.deals ? Object(Mt.c)("deals", "y") : Object(Mt.c)("deals", "n"), Object(Jt.b)(t.schain, ["undefined", "object"]) && null !== t.schain ? Object(zt.k)(t, "schain") && !Object(Qt.h)(t.schain) && delete t.schain : (Object(Ft.c)("init.config.schain", ce(t.schain), "object"), delete t.schain), Object(zt.k)(t, "schain") ? Object(Mt.c)("schain", "y") : Object(Mt.c)("schain", "n"), Object(Jt.b)(t.useSafeFrames, ["undefined", "boolean"]) || (Object(Ft.c)("init.config.useSafeFrames", ce(t.useSafeFrames), "boolean"), delete t.useSafeFrames), t.useSafeFrames ? Object(Mt.c)("useSafeFrames", "y") : Object(Mt.c)("useSafeFrames", "n")
                } catch (e) {
                    Object(Ft.b)(e, "_validateAndStoreConfig-validateConfig")
                }
                try {
                    var e = Ct.a.getState().config;
                    Object(zt.k)(e, "pubID") && Object(zt.k)(t, "pubID") && e.pubID !== t.pubID && Object(Ft.b)(new Error("`apstag.init` was called multiple times with different pubIDs (".concat(e.pubID, " then ").concat(t.pubID, ")")), "_validateAndStoreConfig-diffPubId", {makeVisibleToAllUsers: !0}), Ct.a.dispatch({
                        type: "SET_CONFIG",
                        config: t,
                        defaultCmpTimeout: Ct.a.getState().cfg.GDPR_CMP_TIMEOUT
                    })
                } catch (e) {
                    Object(Ft.b)(e, "_validateAndStoreConfig", {makeVisibleToAllUsers: !0})
                }
            }

            function G() {
                return Ct.a.getState().config
            }

            function r(t) {
                try {
                    var e = t.slotID, n = !1;
                    Object(zt.k)(t.bidConfig, "amznbid") && "o_" === t.bidConfig.amznbid.slice(0, 2) && (n = !0), Object(zt.k)(t.bidConfig, "mediaType") && "v" === t.bidConfig.mediaType && !1 === n || (!window.IntersectionObserver && n ? Object(Ft.b)({
                        name: "IntersectionObserver",
                        message: "IntersectionObserver not supported "
                    }, "_safeApplySlotTargeting") : Gt.a.hasAdServerObjectLoaded() ? Gt.a.isCommandQueueDefined() ? Gt.a.hasAdServerObjectLoaded() ? null !== c(e) ? l(t) : Object(Ft.a)("".concat(e, " isn't defined when trying to set amazon bid!")) : Gt.a.cmdQueuePush((function () {
                        r(t)
                    })) : Object(Ft.a)("displayAdServer Object's cmd queue hasn't been defined", !0) : Object(Ft.a)("displayAdServer Object hasn't been defined", !0))
                } catch (t) {
                    Object(Ft.b)(t, "_safeApplySlotTargeting", {makeVisibleToAllUsers: !0})
                }
            }

            function c(t) {
                var e = null;
                try {
                    e = Object(xt.b)(Gt.a).filter((function (e) {
                        return e.slotID === t
                    }))[0] || null
                } catch (e) {
                    Object(Ft.b)(e, "_getAdServerSlot")
                }
                return e
            }

            function o(t) {
                try {
                    var e = Ct.a.getState().targetingKeys[t.slotID];
                    Gt.a.hasAdServerObjectLoaded() && Object(zt.i)(e) && e.forEach((function (e) {
                        return 0 < t.getTargeting(e).length && t.clearTargeting(e)
                    }))
                } catch (e) {
                    Object(Ft.b)(e, "_clearTargetingFromSlot", {makeVisibleToAllUsers: !0})
                }
            }

            function s(t) {
                try {
                    var e;
                    Object(zt.k)(Ct.a.getState().slotBids, t.slotID) && (e = Ct.a.getState().slotBids[t.slotID].filter((function (t) {
                        return t.bidState === Ut.c.set
                    }))[0]) && e.bidState === Ut.c.set && Ct.a.dispatch({
                        type: "BID_STATE_CHANGE",
                        slotID: t.slotID,
                        _targetingSetID: e._targetingSetID,
                        bidState: Ut.c.exposed
                    })
                } catch (t) {
                    Object(Ft.b)(t, "_clearBidSetOnSlot", {makeVisibleToAllUsers: !0})
                }
            }

            function Q(t, e) {
                try {
                    return t.map((function (t) {
                        return Object(zt.h)(e, t)
                    })).filter((function (t) {
                        return t
                    })).length === t.length
                } catch (t) {
                    Object(Ft.b)(t, "_hasAllItemsInArray")
                }
            }

            function u() {
                var t = {};
                try {
                    Object.keys(Ct.a.getState().slotBids).forEach((function (e) {
                        var n = Ct.a.getState().slotBids[e].filter(Qt.f);
                        0 < n.length && (t[e] = n.map((function (t) {
                            var e = Ct.a.getState().AAXReqs.filter((function (e) {
                                return e.bidReqID === t.bidReqID
                            })), n = 0;
                            return 0 < e.length ? n = e[0].rqTs : (e = Ct.a.getState().AAXReqs.map((function (t) {
                                return t.bidReqID
                            })).join(", "), Object(Ft.b)({
                                name: "BidError",
                                message: "Request not found: ".concat(t.bidReqID, " not found in ").concat(e)
                            }, "_getCurrentSlotBids-noRequest")), {rqTs: n, bid: t}
                        })).reduce((function (t, e) {
                            return t.rqTs > e.rqTs ? t : e
                        })).bid)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_getCurrentSlotBids", {makeVisibleToAllUsers: !0})
                }
                return t
            }

            function X(t, e) {
                try {
                    return Object(zt.i)(Ct.a.getState().targetingKeys[t]) ? e ? ["amzniid_sp"] : Ct.a.getState().targetingKeys[t].filter((function (t) {
                        return -1 < t.indexOf("amzniid") && t.indexOf("amzniid_sp") < 0
                    })) : ["amzniid"]
                } catch (t) {
                    return Object(Ft.b)(t, "_getAllBidIdKeys"), []
                }
            }

            function J(t, e) {
                var n, r;
                try {
                    var o = Ct.a.getState().slotBids;
                    Object.keys(o).forEach((function (i) {
                        o[i].forEach((function (o) {
                            X(i, e).forEach((function (e) {
                                o.bidConfig[e] === t && (n = o, "amzniid_sp" === e ? r = "sp" : "amzniid" !== e && (r = e.substr(0, e.indexOf("amzniid"))))
                            }))
                        }))
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_findSlotBidByBidID", {makeVisibleToAllUsers: !0})
                }
                return {slotBid: n, dealId: r}
            }

            function K(t, e, n) {
                var r = "";
                try {
                    e.bidConfig[n + "amzniid"] === t && (r = n.split("_").pop().trim())
                } catch (t) {
                    Object(Ft.b)(t, "_getPMPBidSize")
                }
                return r
            }

            function W(t) {
                try {
                    var e;
                    return void 0 === t.slots ? [] : (e = {}, t.slots.forEach((function (t) {
                        t.mediaType !== Xt.a.VIDEO && "v" !== t.mediaType && "v" !== t.mediaType_sp || (0 <= t.slotID.indexOf("rsv-") && (t = {
                            slotID: t.slotID.substring(4),
                            r_amznbid: t.amznbid,
                            r_amzniid: t.amzniid,
                            r_amznp: t.amznp,
                            mediaType: Xt.a.VIDEO,
                            targeting: ["r_amznbid", "r_amzniid", "r_amznp"],
                            amznsz: t.amznsz,
                            size: t.size,
                            crid: t.crid,
                            meta: t.meta
                        }), !Object(zt.k)(e, t.slotID)) ? e[t.slotID] = new Qt.a(t) : t.targeting.forEach((function (n) {
                            e[t.slotID].bidConfig[n] = t[n], -1 === e[t.slotID].bidConfig.targeting.indexOf(n) && e[t.slotID].bidConfig.targeting.push(n)
                        }))
                    })), Object.keys(e).map((function (t) {
                        return e[t]
                    })))
                } catch (t) {
                    return Object(Ft.b)(t, "_mergeVideoBids"), []
                }
            }

            function $(t) {
                var e = W(t), n = [];
                try {
                    n = e.map((function (e) {
                        return e.bidReqID = t.cb, e.host = t.host, e.ev = t.ev, e.cfe = t.cfe, e
                    }))
                } catch (e) {
                    Object(Ft.b)(e, "_convertAaxResponse")
                }
                return n
            }

            function l(t) {
                try {
                    var e, n, r = t.slotID, o = t._targetingSetID;
                    t.bidState !== Ut.c.set && null !== (e = c(r)) && (s(e), n = t.newBidObject, Object(Kt.a)(e), Object.keys(n.targeting).forEach((function (t) {
                        return e.setTargeting(t, n.targeting[t])
                    })), Ct.a.dispatch({
                        type: "BID_STATE_CHANGE",
                        slotID: r,
                        _targetingSetID: o,
                        bidState: Ut.c.set,
                        ts: Date.now()
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applyTargetingToAdServerSlot", {makeVisibleToAllUsers: !0})
                }
            }

            function Y(t) {
                try {
                    var e = u();
                    t.forEach((function (t) {
                        e[t] && r(e[t])
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applySuppliedSlotBidsToAdServerObject", {makeVisibleToAllUsers: !0})
                }
            }

            function Z() {
                try {
                    var t = u();
                    Object.keys(t).forEach((function (e) {
                        return r(t[e])
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applyAllCurrentSlotBidsTargetingToAdServerObject", {makeVisibleToAllUsers: !0})
                }
            }

            function tt(t) {
                try {
                    t ? (Object(Mt.c)("targeting", "setDisplayBids-list"), Y(t)) : (Object(Mt.c)("targeting", "setDisplayBids-all"), Z()), Ct.a.getState().displayAdServer.slotRenderEndedSet || (Gt.a.cmdQueuePush((function () {
                        try {
                            Gt.a.slotRenderEndedEvent((function (t) {
                                try {
                                    o(t), s(t)
                                } catch (t) {
                                    Object(Ft.b)(t, "_applySlotTargeting-cmdQueue-slotCb", {makeVisibleToAllUsers: !0})
                                }
                            }))
                        } catch (t) {
                            Object(Ft.b)(t, "_applySlotTargeting-cmdQueue", {makeVisibleToAllUsers: !0})
                        }
                    })), Ct.a.dispatch({type: "SLOT_RENDER_ENDED_SET"}))
                } catch (t) {
                    Object(Ft.b)(t, "_applySlotTargeting", {makeVisibleToAllUsers: !0})
                }
            }

            function d(t, e) {
                function n() {
                    if (!o) if (20 <= i++) Object(Ft.b)({
                        name: "LoopError",
                        message: "Too many attempts to append to document.body"
                    }, "_safeDocumentBodyAppendChild-callback-loops", {makeVisibleToAllUsers: !0}); else {
                        try {
                            if (t && t.body && null !== t.body && "function" == typeof t.body.appendChild) return t.body.appendChild(e), r(), void (o = !0)
                        } catch (t) {
                            Object(Ft.b)(t, "_safeDocumentBodyAppendChild-callback")
                        }
                        setTimeout(n, 100)
                    }
                }

                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function () {
                }, o = !1, i = 0;
                try {
                    "complete" === t.readyState || "interactive" === t.readyState ? (Object(Mt.c)("appended", "sync"), n()) : (Object(Mt.c)("appended", "async"), t.addEventListener("DOMContentLoaded", n))
                } catch (t) {
                    Object(Ft.b)(t, "_safeDocumentBodyAppendChild")
                }
            }

            function et(t) {
                try {
                    var e = "".concat(t.host).concat(Ct.a.getState().cfg.DTB_PATH, "/imp"),
                        n = "".concat(t.host).concat(Ct.a.getState().cfg.DTB_PATH, "/adm");
                    return t.cfe || t.isAmp || t.isSf ? n : e
                } catch (t) {
                    return Object(Ft.b)(t, "determineCreativeFetchEndpoint"), ""
                }
            }

            function w(t) {
                try {
                    var e = "?b=".concat(t.bidID, "&rnd=").concat(Object(zt.d)()),
                        n = (Object(zt.k)(t, "pp") && (e += "&pp=".concat(t.pp)), Object(zt.k)(t, "amznp") && (e += "&p=".concat(t.amznp)), Object(zt.k)(t, "crID") && (e += "&crid=".concat(t.crID)), Object(zt.k)(t, "isSharedPMP") && !0 === t.isSharedPMP && (e += "&sp=true"), Object(Kt.e)() && (e += "&ep=%7B%22ce%22%3A%221%22%7D"), et(t));
                    return (t.fif ? "".concat(n, "j") : "".concat(n, "i")).concat(e)
                } catch (t) {
                    return Object(Ft.b)(t, "_creativeURL"), ""
                }
            }

            function f(t) {
                try {
                    var e = t.doc.createElement("iframe");
                    return e.frameBorder = "0", e.marginHeight = "0", e.marginWidth = "0", e.style.marginTop = "0", e.style.marginLeft = "0", e.scrolling = "no", t.inheritSize ? (e.style.width = "100%", e.style.height = "100%") : (e.style.width = "".concat(t.sizes[0], "px"), e.style.height = "".concat(t.sizes[1], "px")), e
                } catch (t) {
                    return Object(Ft.b)(t, "_baseIframe"), window.document.createElement("iframe")
                }
            }

            function nt(t) {
                try {
                    if (Object(zt.k)(t, "bidType")) {
                        var e, n = t.kvMap;
                        switch (t.bidType) {
                            case"sharedPMP":
                                return {
                                    bidID: n.amzniid_sp[0],
                                    pp: n.amznbid_sp[0],
                                    sizes: n.amznsz_sp[0].split("x"),
                                    amznp: n.amznp_sp[0],
                                    inheritSize: t.inheritSize,
                                    isSharedPMP: t.isSharedPMP
                                };
                            case"preferredPMP":
                                if (Object(Xt.c)(t) && Object(zt.k)(t, "amzndeal")) return e = t.amzndeal.split("_").pop().trim(), {
                                    bidID: n["".concat(t.amzndeal, "amzniid")][0],
                                    sizes: P(e)
                                };
                                break;
                            case"openAuction":
                                if (Object(Xt.c)(t)) return {
                                    bidID: n.amzniid[0],
                                    pp: Object(Rt.c)(n.amznbid[0]),
                                    amznp: n.amznp[0],
                                    inheritSize: t.inheritSize,
                                    sizes: n.amznsz[0].split("x")
                                };
                                if (Object(Xt.d)(t)) return {
                                    bidID: t.amzniid,
                                    pp: Object(Rt.c)(t.amznbid),
                                    amznp: t.amznp,
                                    sizes: t.amznsz.split("x")
                                };
                                break;
                            default:
                                Object(Ft.b)({
                                    name: "Invalid AMP Bid Type: ".concat(t.bidType),
                                    message: "No valid AMP bid type"
                                }, "getAmpAdData-invalidBidType")
                        }
                    }
                } catch (t) {
                    Object(Ft.b)(t, "getAmpAdData")
                }
                return {bidID: "ERROR", sizes: []}
            }

            function T(t, e) {
                try {
                    var n, r = null;
                    void 0 !== e && (Object(zt.k)(e, "ampEnv") && e.ampEnv || Object(zt.k)(e, "sfEnv") && e.sfEnv) && (r = e, Object(zt.k)(e, "bidType") && "sharedPMP" === e.bidType ? r.isSharedPMP = !0 : r.isSharedPMP = !1, r.document = t, r.amznhost = r.kvMap.amznhost[0]), A(t) && ((r = t).bidType = "openAuction", r.ampEnv = !0), null === r ? Object(Ft.b)(new Error("Invalid AMP parameters"), "_renderAmpImpression-invalidParams", {makeVisibleToAllUsers: !0}) : "ERROR" !== (n = nt(r)).bidID && (n.doc = r.document, n.host = r.amznhost.replace("http://", "https://"), n.adID = "amznad".concat(Object(zt.d)()), n.isAmp = r.ampEnv, n.isSf = Object(Nt.c)(window), Ct.a.getState().aaxViewabilityEnabled ? R(n, n.doc) : D(n))
                } catch (t) {
                    Object(Ft.b)(t, "_renderAmpImpression")
                }
            }

            function _(t) {
                var e, n = "unknown";

                function r(r) {
                    try {
                        r && (t.hasTimedOut = !0), r && !t.hasRendered && Object(Ft.b)({
                            name: "RenderTimeout",
                            message: "renderAd was called from timeout. fifFlowMethod: ".concat(n)
                        }, "__loadAdIntoFriendlyIframe-renderAd-timeout-isOutstream:".concat(t.isOutstream)), null === e.contentDocument ? Object(Ft.b)({
                            name: "NoDocument",
                            message: "iframe.contentDocument was null inside renderAd. isFromTimeout: ".concat(r, ". fifFlowMethod: ").concat(n)
                        }, "__loadAdIntoFriendlyIframe-renderAd-noDocument-isOutstream:".concat(t.isOutstream), {makeVisibleToAllUsers: !0}) : t.hasRendered && !t.hasTimedOut ? Object(Ft.b)({
                            name: "DupeRender",
                            message: "Render was called twice"
                        }, "__loadAdIntoFriendlyIframe-renderAd-rerender-isOutstream:".concat(t.isOutstream), {makeVisibleToAllUsers: !0}) : t.hasRendered || (t.hasRendered = !0, e.contentDocument.open(), e.contentDocument.write(t.html), e.contentDocument.close())
                    } catch (r) {
                        Object(Ft.b)(r, "__loadAdIntoFriendlyIframe-renderAd-isOutstream:".concat(t.isOutstream))
                    }
                }

                function o() {
                    var o = r.bind(null, !1);
                    try {
                        n = null !== e.contentDocument && Object(zt.h)(["complete", "interactive"], e.contentDocument.readyState) ? (o(), "doc-ready") : null !== e.contentDocument && "uninitialized" !== e.contentDocument.readyState ? (e.contentDocument.addEventListener("DOMContentLoaded", o), "dom-listener") : (e.addEventListener("load", o), "iframe-listener"), Object(Mt.c)("fifFlow", n), setTimeout(r, 1e3, !0)
                    } catch (o) {
                        Object(Ft.b)(o, "_loadAdIntoFriendlyIframe-setAttributes-isOutstream:".concat(t.isOutstream))
                    }
                }

                try {
                    if (Object(Mt.c)("iframe", "friendly"), void 0 === t.html) throw new Error("No HTML available for ad, most likely the creative has expired");
                    if (t = ie({
                        hasRendered: !1,
                        hasTimedOut: !1
                    }, t), (e = f(t)).id = "apstag-f-iframe-".concat(Object(zt.d)()), t.isOutstream) try {
                        var i = Object(Vt.d)(document, t);
                        if (void 0 === i) throw new Error("gpt video div element is undefined");
                        i && i.firstElementChild && i.firstElementChild.style.setProperty("display", "none", "important");
                        var a = Object(Vt.f)(t.sizes);
                        Object(Vt.a)(a, i), Object(Vt.e)(a, e), o(), Object(Vt.g)(a, e, t.bidID)
                    } catch (o) {
                        Object(Ft.b)(o, "_loadAdIntoFriendlyIframe-outstream", {makeVisibleToAllUsers: !0})
                    } else d(t.doc, e, o)
                } catch (o) {
                    Object(Ft.b)(o, "_loadAdIntoFriendlyIframe", {makeVisibleToAllUsers: !0})
                }
            }

            function D(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                    states: {
                        csmLoaded: !1,
                        iframeLoaded: !1,
                        shouldRunViewability: !1
                    }
                }, n = 2 < arguments.length ? arguments[2] : void 0;
                try {
                    Object(Mt.c)("iframe", "unfriendly");
                    var r, o = f(t);
                    o.id = t.adID, o.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"), Object(Lt.d)("fake_bids") ? (r = '<body style="background-color: #FF9900;">'.concat(50 < parseInt(t.sizes[1], 10) ? "<h3>apstag Test Creative</h3>" : "", "<h4>amzniid - ").concat(t.bidID, " | amznbid: ").concat(t.pp, " | size: ").concat(t.sizes.join("x"), "</h4></body>"), o.src = "javascript:'".concat(r, "'")) : o.src = w(t), !(t.isAmp && t.isSf && Object(Nt.b)(window)) && (!t.isSf || t.isAmp || t.inheritSize) || Object(Nt.a)(t.sizes, window), d(t.doc, o), (e.iframe = o).onload = function () {
                        e.states.iframeLoaded = !0, n && n()
                    }
                } catch (t) {
                    Object(Ft.b)(t, "_loadAdIntoUnfriendlyIframe", {makeVisibleToAllUsers: !0})
                }
            }

            function rt(t) {
                var e, n = t.states, r = t.doc, o = t.bidID;
                t = t.iframe;
                try {
                    Object(zt.a)(n) || (n.shouldRunViewability = !1, Object(zt.k)(window, "amzncsm") ? e = window.amzncsm : void 0 !== r && null !== r.defaultView && Object(zt.k)(r.defaultView, "amzncsm") && (e = r.defaultView.amzncsm), void 0 !== r && void 0 !== e && Object(zt.k)(e, "rmD") && (e.host = Object(Lt.c)("host", Ct.a.getState().hosts.DEFAULT_AAX_PIXEL_HOST), e.rmD(t, o, r.defaultView, r, Ct.a.getState().config.pubID)))
                } catch (t) {
                    Object(Ft.b)(t, "_triggerViewability")
                }
            }

            function ot(t, e) {
                return function (n) {
                    try {
                        var r = Object(Qt.e)(e.slots), o = Object.keys(r), i = [], a = (n && (Ct.a.dispatch({
                                type: "RECORD_AAX_REQ_PROP",
                                bidReqID: e.bidReqID,
                                key: "timedOutAt",
                                value: Date.now()
                            }), Ct.a.getState().experiments.chunkRequests) && Ct.a.dispatch({
                                type: "RECORD_TIMEOUT",
                                fid: e.bidReqID,
                                timeOut: Date.now()
                            }), o.forEach((function (t) {
                                Object(zt.k)(r, t) && (t = r[t], Object(Qt.g)(Ct.a.getState(), Gt.a) || Object(zt.k)(t.bidConfig, "amznbid") ? Object(zt.k)(t.bidConfig, "amznp") || (t.bidConfig.amznp = "") : (Object(Mt.c)("unusedDeal", t.mediaType), t.mediaType !== Xt.a.VIDEO && (t.bidConfig.targeting.unshift("amznsz"), t.bidConfig.amznsz = "0x0"), t.bidConfig.targeting.unshift("amzniid", "amznbid", "amznp"), t.bidConfig.amzniid = "", t.bidConfig.amznbid = Ut.u.noBid, t.bidConfig.amznp = Ut.u.noBid), i.push(t))
                            })), Gt.a.isSupported && (i = Object(Qt.c)(i, e, n)), {fromTimeout: n}),
                            c = Object(Qt.g)(Ct.a.getState(), Gt.a);
                        try {
                            t(i.map((function (t) {
                                return c ? t.newBidObject : t.bidObject
                            })), a)
                        } catch (o) {
                            console.error(o)
                        }
                    } catch (o) {
                        Object(Ft.b)(o, "_bidCallbackHandler", {makeVisibleToAllUsers: !0});
                        try {
                            t([], {fromTimeout: n, fromError: !0})
                        } catch (o) {
                            console.error(o)
                        }
                    }
                }
            }

            function it(t, e) {
                try {
                    var n, r;
                    e.inheritSize ? Object(Mt.c)("creativeSize", "inherited") : (r = t.defaultView && t.defaultView.frameElement ? (n = t.defaultView.frameElement, "defaultView") : (n = window.frameElement, "frameElement"), Object(Mt.c)("resizeIframe", r), Object(Mt.c)("creativeSize", "resized"), null !== n ? (n.style.width = "".concat(e.sizes[0], "px"), n.style.height = "".concat(e.sizes[1], "px")) : Object(Ft.b)({
                        name: "FrameNotFound",
                        message: "'win' is 'null'. Method used: ".concat(r)
                    }, "_resizeIframe-win"))
                } catch (t) {
                    Object(Ft.b)(t, "_resizeIframe")
                }
            }

            function e(t) {
                try {
                    return "".concat(t[0], "x").concat(t[1])
                } catch (t) {
                    return Object(Ft.b)(t, "_sizeArrayToSring"), "x"
                }
            }

            function y(t) {
                try {
                    return 1 === t.length ? e(t[0]) : e(t[Math.floor(t.length * Math.random())])
                } catch (t) {
                    return Object(Ft.b)(t, "_pickRandomSizeForMockBid", {makeVisibleToAllUsers: !0}), ""
                }
            }

            function at(t) {
                try {
                    var e, n = Object(Lt.c)("host", Ct.a.getState().hosts.DEFAULT_AAX_BID_HOST),
                        r = Object(Rt.g)(window), o = t.bidReqID, i = Object(zt.g)(window),
                        a = Object(Lt.c)("testBidTimeout", 200);
                    Ct.a.dispatch({
                        type: "RECORD_AAX_REQUEST",
                        data: {bidConfig: t, timeout: a, bidReqID: o, ws: i, url: r, rqTs: Date.now()}
                    }), e = t.slots.map((function (t) {
                        var e = y(t.sizes),
                            n = (e = "testDeal".concat(Object(zt.d)(), "_").concat(e), "testDealIi-".concat(Object(zt.d)())),
                            r = y(t.sizes);
                        ae(r = {
                            slotID: t.slotID,
                            crid: "".concat(Ut.o.crid, "-").concat(Object(zt.d)()),
                            size: r,
                            amzniid: "".concat(Ut.o.amzniid, "-").concat(Object(zt.d)()),
                            amznbid: Ut.o.amznbid,
                            amznp: Ut.o.amznp,
                            amznsz: r,
                            amzniid_sp: "".concat(Ut.o.amzniid, "-").concat(Object(zt.d)()),
                            amznbid_sp: "".concat(Ut.o.amznbid, "SP"),
                            amznp_sp: "".concat(Ut.o.amznp, "SP"),
                            amznsz_sp: y(t.sizes),
                            amzndeals: [e]
                        }, "".concat(e, "amzniid"), n), ae(r, "mediaType", "d"), ae(r, "meta", ["slotID", "mediaType", "size"]), ae(r, "targeting", ["amzniid", "amznbid", "amznp", "amznsz", "amzniid_sp", "amznbid_sp", "amznp_sp", "amznsz_sp", "amzndeal_sp", "amzndeals", "".concat(e, "amzniid")]), n = r;
                        return t.mediaType === Xt.a.VIDEO && (n.mediaType = Xt.a.VIDEO, n.amznbid = "v_".concat(n.amznbid)), n
                    })), setTimeout((function () {
                        window.apstag.bids({slots: e, host: n, status: "ok", cb: o})
                    }), a)
                } catch (t) {
                    Object(Ft.b)(t, "_doMockBid", {makeVisibleToAllUsers: !0})
                }
            }

            function ct(t) {
                try {
                    var e, n, r, o = Ct.a.getState().AAXReqs.filter((function (e) {
                        return e.bidReqID === t.cb
                    }))[0];
                    o && o.bidConfig && o.bidConfig.slots && (e = o.bidConfig.slots.filter(Object(xt.d)(Xt.a.DISPLAY, Xt.a.MULTI_FORMAT)).map((function (t) {
                        return t.slotID
                    })), n = Object(zt.k)(t, "slots") ? t.slots.map((function (t) {
                        return t.slotID
                    })) : [], r = e.filter((function (t) {
                        return !Object(zt.h)(n, t)
                    })), Ct.a.dispatch({
                        type: "NO_BID_ON_ADSERVER_SLOTS",
                        slotIDs: r
                    }), Gt.a.hasAdServerObjectLoaded() ? h() : Gt.a.isCommandQueueDefined() && Gt.a.cmdQueuePush((function () {
                        h()
                    })))
                } catch (e) {
                    Object(Ft.b)(e, "_determineNoBidStateForAdServerObject")
                }
            }

            function st(t) {
                return Object(zt.h)(Ct.a.getState().AAXReqs.filter((function (t) {
                    return !t.resTs
                })).map((function (t) {
                    return t.bidConfig.slots
                })).reduce((function (t, e) {
                    return t.concat(e)
                }), []).map(xt.c), t)
            }

            function g(t) {
                try {
                    var e = t.getTargeting("amznbid");
                    return 0 < e.length && 2 < e[0].length
                } catch (t) {
                    return Object(Ft.b)(t, "_isRealAmznbidTargetingSetOnSlot"), 1
                }
            }

            function h() {
                try {
                    Gt.a.hasAdServerObjectLoaded() && "1" === Gt.a.getTargeting("amznbid")[0] && v(), Object(xt.b)(Gt.a).forEach((function (t) {
                        !Object(zt.h)(Ct.a.getState().displayAdServer.noBidSlotIDs, t.slotID) || st(t.slotID) || g(t) || "2" === t.getTargeting("amznbid")[0] || O("noBid", t)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applyNoBidFromAAXState")
                }
            }

            function O(t, e) {
                Ut.v.forEach((function (n) {
                    return e.setTargeting(n, Ut.u[t])
                }))
            }

            function v() {
                Ut.v.forEach((function (t) {
                    return Gt.a.clearTargeting(t)
                }))
            }

            function ut(t) {
                try {
                    var e = {_type: "dupePixel", dd: Date.now() - t.timing.renderTime};
                    Object(Mt.a)(t.bidConfig.amzniid, e)
                } catch (t) {
                    Object(Ft.b)(t, "_sendDupeBidPixel")
                }
            }

            !function () {
                var t;
                Object(ne.b)() && (t = ne.a.getDefault().localStorage.getItem(Ut.d, {ignoreFailure: !0})) && null !== (t = JSON.parse(t)) && Ct.a.dispatch({
                    type: "SET_CFG",
                    cfg: t
                })
            }(), Object(Kt.d)();
            var lt = 0;

            function j() {
                try {
                    Object(zt.k)(window, "googletag") && Object(zt.k)(window.googletag, "cmd") ? (new Ht.a).cmdQueuePush((function () {
                        try {
                            window.googletag.pubads().addEventListener("slotRequested", (function (t) {
                                try {
                                    var e = t.slot;
                                    Ct.a.dispatch({
                                        type: "LOG_GAM_EVENT",
                                        event: ie(ie({}, new ee.a(e).slotConfig), {}, {
                                            ts: Date.now(),
                                            targeting: e.getTargetingMap()
                                        })
                                    })
                                } catch (t) {
                                    Object(Ft.b)(t, "_initializeSlotRequestedEventListener-cmdQueue-listener")
                                }
                            }))
                        } catch (t) {
                            Object(Ft.b)(t, "_initializeSlotRequestedEventListener-cmdQueue")
                        }
                    })) : ++lt < 5 && setTimeout(j, 100)
                } catch (t) {
                    Object(Ft.b)(t, "_initializeSlotRequestedEventListener")
                }
            }

            function S(t) {
                try {
                    var e = t.AAXReqs.slice(t.gamSlotRenderPixel.aaxReqOffset).reduce((function (t, e) {
                        return t.concat(e.bidConfig.slots)
                    }), []).map((function (t) {
                        return ie(ie({}, t), {}, {type: "a"})
                    })).filter((function (t) {
                        return t.mediaType !== Xt.a.VIDEO
                    })), n = t.gamSlotFetchLog.slice(t.gamSlotRenderPixel.gamSlotFetchLogOffset).map((function (t) {
                        return ie(ie({}, t), {}, {type: "g"})
                    })), r = [].concat(oe(e), oe(n)).reduce((function (t, e) {
                        return void 0 === t[e.slotID] && (t[e.slotID] = {
                            sd: e.slotID,
                            a: {c: 0},
                            g: {c: 0}
                        }), t[e.slotID][e.type].c++, t[e.slotID][e.type].s = e.sizes, t[e.slotID][e.type].sn = e.slotName || "", t
                    }), {});
                    return Object.keys(r).map((function (t) {
                        return r[t]
                    })).filter((function (t) {
                        return 0 !== t.a.c || 0 !== t.g.c
                    }))
                } catch (t) {
                    return Object(Ft.b)(t, "getSlotFetchCounts"), []
                }
            }

            function dt() {
                try {
                    var t = Ct.a.getState(), e = S(t);
                    0 < Object.keys(e).length && (Object(zt.c)(e, 5).forEach((function (e) {
                        e = {
                            slots: e,
                            pid: Qt.b,
                            url: Object(Rt.g)(window).split("?")[0],
                            ws: Object(zt.g)(window),
                            pubid: t.config.pubID,
                            _type: "slotRenders"
                        }, Object(Mt.b)(e)
                    })), Ct.a.dispatch({
                        type: "UPDATE_RENDER_OFFSETS",
                        offsets: {aaxReqOffset: t.AAXReqs.length, gamSlotFetchLogOffset: t.gamSlotFetchLog.length}
                    }))
                } catch (e) {
                    Object(Ft.b)(e, "sendDisplayAdServerRenderPixel")
                }
            }

            function ft() {
                setInterval((function () {
                    dt()
                }), 5e3)
            }

            function E() {
                try {
                    setTimeout((function () {
                        try {
                            var t = I().filter((function (t) {
                                return !Object(zt.k)(Ct.a.getState().bsPixels, t.iid) || t.state !== Ct.a.getState().bsPixels[t.iid]
                            })), e = (t && t.length && 0 < t.length && (t.forEach((function (t) {
                                return Object(Mt.a)(t.iid, pt(t))
                            })), bt(t)), {
                                fetchStart: "a",
                                domainLookupStart: "b",
                                domainLookupEnd: "c",
                                connectStart: "d",
                                secureConnectionStart: "e",
                                connectEnd: "f",
                                requestStart: "g",
                                responseStart: "h",
                                responseEnd: "i"
                            });
                            Object.keys(Ct.a.getState().slotBids).forEach((function (t) {
                                Ct.a.getState().slotBids[t].forEach((function (n) {
                                    var r, o, i;
                                    Object(zt.k)(n.bidConfig, "amzniid") && !n.pixelSent && "object" === ce(r = Ct.a.getState().AAXReqs.filter((function (t) {
                                        return t.bidReqID === n.bidReqID
                                    }))[0]) && null !== r && (o = r.rqTs - Object(Bt.d)(), i = {
                                        pid: Qt.b,
                                        ns: r.bidConfig.validSlots.length,
                                        fid: n.bidReqID,
                                        fbrq: r.rqTs,
                                        _type: "latencyBd"
                                    }, "object" === ce(r.perf) && null !== r.perf && Object.keys(e).forEach((function (t) {
                                        Object(zt.k)(r, "perf") && 0 !== Object(Bt.a)(r.perf, t) && (i[e[t]] = Object(Bt.a)(r.perf, t) - o)
                                    })), i.j = r.resTs - r.rqTs, Object(Mt.a)(n.bidConfig.amzniid, i), Ct.a.dispatch({
                                        type: "UPDATE_BID_INFO_PROP",
                                        slotID: t,
                                        iid: n.bidConfig.amzniid,
                                        key: "pixelSent",
                                        value: !0
                                    }))
                                }))
                            })), E()
                        } catch (t) {
                            Object(Ft.b)(t, "_sendBidsSetOnDFPPixel-timeout")
                        }
                    }), 5e3)
                } catch (t) {
                    Object(Ft.b)(t, "_sendBidsSetOnDFPPixel")
                }
            }

            function bt(t) {
                t.forEach((function (t) {
                    return Ct.a.dispatch({type: "RECORD_BID_INFO_SENT", bidInfo: t})
                }))
            }

            function pt(t) {
                try {
                    var e = mt(t.fid), n = {
                            status: t.state,
                            pubid: Ct.a.getState().config.pubID,
                            _type: "bidSetPixel",
                            toa: Object(zt.k)(e.req, "timedOutAt") ? e.req.timedOutAt : 0,
                            fbrq: e.req.rqTs,
                            pto: e.req.timeout,
                            ns: e.req.bidConfig.validSlots.length,
                            bla: e.req.resTs - e.req.rqTs,
                            reqindex: e.index,
                            fid: t.fid,
                            tbs: 0,
                            c: "dtb"
                        },
                        r = (Ct.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION && (n.eid = Ct.a.getState().experiments.chunkRequests ? 2 : 1, n.fbindex = e.fbIndex, n.fbns = Ct.a.getState().bidConfigs[parseInt(t.fid.split("-")[0], 10)].slots.length), Ct.a.getState().experiments),
                        o = (Object(zt.k)(r, "shouldUseTestBidEndpoint") && (n.tbs = r.shouldUseTestBidEndpoint ? 2 : 1), t.delta && (n.delay = t.delta), e.req.perf);
                    return void 0 !== o && (n.ul = e.req.urlLength, n.es = Object(Bt.a)(o, "encodedBodySize")), 0 < Object.keys(Ct.a.getState().identityState).length && (n.ids = JSON.stringify(Ct.a.getState().identityState)), 0 < Ct.a.getState().tcfParseTime && (n.tpt = Ct.a.getState().tcfParseTime), n
                } catch (t) {
                    return Object(Ft.b)(t, "_mapBidInfoToPixel"), {
                        _type: "bidSetPixel",
                        status: -1,
                        pubid: "",
                        toa: 0,
                        fbrq: 0,
                        pto: 0,
                        ns: 0,
                        bla: 0,
                        reqindex: 0,
                        fid: "",
                        tbs: 0,
                        c: "dtb"
                    }
                }
            }

            function mt(t) {
                var e = Ct.a.getState().AAXReqs.filter((function (e) {
                    return e.bidReqID === t
                }))[0], n = Ct.a.getState().AAXReqs.indexOf(e) + 1;
                return (e = {
                    req: e,
                    index: n,
                    fbIndex: n
                }).index = Ct.a.getState().AAXReqs.indexOf(e.req) + 1, Ct.a.getState().experiments.chunkRequests && (e.fbIndex = Ct.a.getState().AAXReqs.filter((function (t) {
                    return -1 === t.bidReqID.indexOf("-") || "0" === t.bidReqID.split("-")[1]
                })).map((function (t) {
                    return t.bidReqID.split("-")[0]
                })).indexOf(t.split("-")[0]) + 1), e
            }

            function I() {
                try {
                    var t = ht(), e = [];
                    return null !== t && Object.keys(Ct.a.getState().slotBids).forEach((function (n) {
                        Ct.a.getState().slotBids[n][0].bidConfig.mediaType !== Xt.a.VIDEO && Ct.a.getState().slotBids[n].filter((function (t) {
                            return Object(zt.k)(t.bidConfig, "amzniid")
                        })).forEach((function (r) {
                            var o, i, a;
                            null !== t && (o = {
                                state: -1,
                                slotID: n,
                                iid: r.bidConfig.amzniid,
                                fid: r.bidReqID
                            }, a = [], i = [], n in t && (a = t[n].fetchedAt.filter((function (t) {
                                return t.AAXReqInfo && t.AAXReqInfo.bidReqID === r.bidReqID
                            })), i = t[n].targetedAt.filter((function (t) {
                                return t.targeting === r.bidConfig.amzniid
                            }))), 0 < a.length ? 0 < a.length && i.length >= a.length && a.slice(a.length - 1)[0].ts > i.slice(a.length - 1)[0].ts ? 1 === t[n].fetchWithIID.filter((function (t) {
                                return t === r.bidConfig.amzniid
                            })).length ? o.state = 1 : o.state = 4 : Object(zt.h)(t[n].fetchWithIID, r.bidConfig.amzniid) ? o.state = 3 : o.state = 2 : o.state = 0, 1 !== o.state && 2 !== o.state || (a = k(i = Ct.a.getState().AAXReqs.filter((function (t) {
                                return t.bidReqID === r.bidReqID
                            }))[0].resTs, t[n].fetchedAt, 2 === o.state)) && Object(zt.k)(a, "ts") && (o.delta = i - a.ts), e.push(o))
                        }))
                    })), e
                } catch (t) {
                    return Object(Ft.b)(t, "_getBidSetInfo"), []
                }
            }

            function k(t, e, n) {
                var r = e.map((function (e) {
                    return e = t - e.ts, !n && e <= 0 ? -e : n && 0 <= e ? e : null
                }));
                return e[yt(r)]
            }

            function yt(t) {
                for (var e = -1, n = -1, r = 0; r < t.length; r++) null !== t[r] && (-1 === n || t[r] < e) && (e = t[n = r]);
                return n
            }

            function gt(t, e) {
                return Ct.a.getState().AAXReqs.filter((function (t) {
                    return Object(zt.h)(t.bidConfig.slots.map((function (t) {
                        return t.slotID
                    })), e)
                }))[t]
            }

            function ht() {
                try {
                    var t;
                    return Gt.a.hasAdServerObjectLoaded() ? (t = Ct.a.getState().gamSlotFetchLog.reduce((function (t, e) {
                        Object(zt.k)(t, e.slotID) || (t[e.slotID] = {fetchedAt: [], targetedAt: []});
                        var n = t[e.slotID];
                        return n.fetchedAt.push({
                            ts: e.ts,
                            AAXReqInfo: gt(n.fetchedAt.length, e.slotID)
                        }), Object(zt.k)(e.targeting, "amzniid") && 0 < e.targeting.amzniid.length ? n.targetedAt.push({
                            ts: e.ts - 1,
                            targeting: e.targeting.amzniid[0]
                        }) : n.targetedAt.push({ts: e.ts - 1, targeting: ""}), t
                    }), {}), Object.keys(t).forEach((function (e) {
                        var n;
                        Object(zt.k)(t, e) && ((n = t[e]).fetchWithIID = n.fetchedAt.map((function (t) {
                            return (t = k(t.ts, n.targetedAt, !0)) ? t.targeting : 0
                        })), t[e] = n)
                    })), t) : null
                } catch (t) {
                    return Object(Ft.b)(t, "_getDFPSlotFetches"), null
                }
            }

            function Ot() {
                try {
                    Gt.a.hasAdServerObjectLoaded() ? O("noRequest", Gt.a) : Gt.a.isCommandQueueDefined() && Gt.a.cmdQueuePush((function () {
                        O("noRequest", Gt.a)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_applyNoRequestToAAXState")
                }
            }

            function vt(t) {
                try {
                    Ct.a.dispatch({
                        type: "REQUESTED_BID_FOR_ADSERVER_SLOTS",
                        slotIDs: t
                    }), Gt.a.isCommandQueueDefined() && Gt.a.cmdQueuePush((function () {
                        try {
                            var e = Object(xt.b)(Gt.a);
                            "0" === Gt.a.getTargeting("amznbid")[0] && v(), Q(t.filter((function (t) {
                                return void 0 !== t
                            })), e.map((function (t) {
                                return t.slotID
                            }))) ? e.forEach((function (e) {
                                Object(zt.h)(t, e.slotID) && !g(e) && O("bidInFlight", e)
                            })) : Gt.a.cmdQueuePush((function () {
                                try {
                                    O("bidInFlight", Gt.a)
                                } catch (t) {
                                    Object(Ft.b)(t, "_setRequestToAAXInFlightState-cmdQueue-cmdQueue")
                                }
                            }))
                        } catch (e) {
                            Object(Ft.b)(e, "_setRequestToAAXInFlightState-cmdQueue")
                        }
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_setRequestToAAXInFlightState")
                }
            }

            function A(t) {
                try {
                    return Object(zt.k)(t, "type") && !(t instanceof Document) && "amp" === t.type
                } catch (t) {
                    return Object(Ft.b)(t, "_isLegacyAmpCreative"), !1
                }
            }

            function jt(t, e) {
                try {
                    return void 0 !== e && Object(zt.k)(e, "ampEnv") && e.ampEnv || A(t)
                } catch (t) {
                    Object(Ft.b)(t, "_isAmpImpression")
                }
            }

            function P(t) {
                return t.split("x")
            }

            function St(t, e, n) {
                try {
                    Object(Mt.g)()
                } catch (t) {
                    Object(Ft.b)(t, "_renderImp-pixels")
                }
                try {
                    var r = void 0 === n ? "0.0.0" : n.cv;
                    if (jt(t, n) && Object(Rt.k)(window, !0)) A(t) ? Object(Mt.c)("renderFootprint", "amp") : Object(Mt.c)("renderFootprint", "multi-amp-".concat(r)), T(t, n); else if (Object(Nt.c)(window) && void 0 !== n && Object(zt.k)(n, "kvMap") && Object(zt.k)(n.kvMap, "amznhost")) Object(Mt.c)("renderFootprint", "multi-sf-".concat(r)), T(t, n); else {
                        var o = !1,
                            i = ("string" == typeof e && 0 === e.indexOf("sp|") && (e = e.substring(3), o = !0), e || t.amzniid),
                            a = J(i, o), c = a.slotBid, s = a.dealId, u = !1;
                        if (void 0 !== n && Object(zt.k)(n, "bidType") && "outstream" === n.bidType && (u = !0), c) {
                            var l, d, f, b, p, y, m, g, h, O, v, j,
                                S = s && 1 <= s.length ? P("sp" === s ? c.bidConfig.amznsz_sp : K(i, c, s)) : P(c.bidConfig.amznsz);
                            1 === arguments.length ? (Object(Mt.c)("renderFootprint", "JSONp"), _({
                                doc: c.doc,
                                bidID: c.bidConfig.amzniid,
                                sizes: S,
                                html: t.html,
                                inheritSize: c.inheritSize || !1,
                                isOutstream: u
                            })) : (Object(Mt.c)("bidRenderState", c.bidState), l = o ? "sharedpmp" : "open", void 0 !== n ? Object(Mt.c)("renderFootprint", "multi-".concat(l, "-").concat(r)) : Object(Mt.c)("renderFootprint", "standard-".concat(l, "-").concat(r)), c.bidState === Ut.c.rendered && ut(c), Ct.a.dispatch({
                                type: "BID_STATE_CHANGE",
                                slotID: c.slotID,
                                _targetingSetID: c._targetingSetID,
                                bidState: Ut.c.rendered,
                                ts: Date.now()
                            }), d = c.host, f = c.bidConfig.slotID, b = "amznad".concat(Math.round(1e6 * Math.random())), p = {
                                bidID: i,
                                doc: t,
                                slotID: f,
                                pp: C("amznbid", c, s),
                                host: d,
                                adID: b,
                                sizes: S,
                                amznp: C("amznp", c, s),
                                crID: C("crid", c, s),
                                fif: !1,
                                dealId: s,
                                isSharedPMP: o,
                                cfe: c.cfe,
                                isOutstream: u,
                                inheritSize: Object(zt.j)(n) && Object(zt.k)(n, "inheritSize") && !0 === n.inheritSize
                            }, "1" === c.bidConfig.fif && !1 === u ? (p.fif = !0, Ct.a.dispatch({
                                type: "UPDATE_BID_INFO_PROP",
                                slotID: c.slotID,
                                iid: e,
                                key: "doc",
                                value: t
                            }), Ct.a.dispatch({
                                type: "UPDATE_BID_INFO_PROP",
                                slotID: c.slotID,
                                iid: e,
                                key: "inheritSize",
                                value: p.inheritSize
                            }), Object(qt.b)(w(p), (function () {
                            }), document, (function () {
                                return Object(Ft.b)(new Error("Error Loading JSONP Render Callback"), "renderImp-fif-callback-load", {makeVisibleToAllUsers: !0})
                            }))) : u ? (Ct.a.dispatch({
                                type: "OUTSTREAM_SHOULD_SAMPLE",
                                shouldSample: Object(zt.l)(10)
                            }), Ct.a.getState().outstream.shouldSample && (Object(Mt.e)("renderImp", p.bidID), Ct.a.dispatch({
                                type: "RECORD_OUTSTREAM_RENDER_START_TIME",
                                time: Date.now()
                            })), h = Object(Vt.c)(p, Ut.b), v = 1 <= (null == (O = null == (y = Ct.a.getState().bidConfigs[c.bidReqID]) || null == (m = y.slots) ? void 0 : m.filter((function (t) {
                                return (null == t ? void 0 : t.slotID) === (null == p ? void 0 : p.slotID)
                            }))) ? void 0 : O.length) ? null == (g = O[0]) ? void 0 : g.companions : [], j = Object(Vt.b)(h, Ut.z, p, v), p.html = j, _(p)) : Ct.a.getState().aaxViewabilityEnabled ? R(p, t) : D(p), u || it(t, p))
                        } else try {
                            Object(Ft.b)(new Error("Invalid bid ID. '".concat("(bidID value: " + e + ", bID value: " + i + ")", "' tried to render into document ").concat(t instanceof Document ? t.documentURI : "with type " + ce(t))), "_renderImp-invalidId", {makeVisibleToAllUsers: !0})
                        } catch (t) {
                            Object(Ft.b)(t, "_renderImp-invalidId")
                        }
                    }
                } catch (t) {
                    Object(Ft.b)(t, "_renderImp", {makeVisibleToAllUsers: !0})
                }
            }

            function C(t, e, n) {
                try {
                    var r, o = "";
                    return void 0 !== n && 1 <= n.length ? (r = "".concat(t, "_sp"), "sp" === n && Object(zt.k)(e.bidConfig, r) && (o = e.bidConfig[r])) : Object(zt.k)(e.bidConfig, t) && (o = e.bidConfig[t]), o
                } catch (t) {
                    return Object(Ft.b)(t, "_getProperBidInfoValue"), ""
                }
            }

            function R(t, e) {
                try {
                    var n = e.createElement("script"), r = (n.type = "text/javascript", n.async = !0, {
                        doc: e,
                        bidID: t.bidID,
                        states: {csmLoaded: !1, iframeLoaded: !1, shouldRunViewability: !0}
                    }), o = rt.bind(null, r);
                    Object(qt.a)(n, (function () {
                        r.states.csmLoaded = !0, o()
                    }));
                    try {
                        n.addEventListener("error", (function (t) {
                            return Object(Mt.b)({_type: "csm_fail", ts: Date.now(), msg: t.message})
                        }))
                    } catch (t) {
                        Object(Ft.b)(t, "_loadViewabilityAd-csm")
                    }
                    D(t, r, o), n.src = Ct.a.getState().cfg.CSM_JS, d(e, n)
                } catch (t) {
                    Object(Ft.b)(t, "_loadViewabilityAd")
                }
            }

            function z(t) {
                try {
                    V(t), Object(zt.k)(t, "slots") && (Ct.a.dispatch({
                        type: "UPDATE_SLOT_BIDS",
                        bids: $(t)
                    }), Object(zt.k)(t, "ev") && Ct.a.dispatch({
                        type: "SET_VIEWABILITY",
                        viewability: t.ev
                    }), Object(zt.k)(t, "cfn")) && Ct.a.dispatch({
                        type: "SET_CFG",
                        cfg: {CSM_JS: "//" === t.cfn.substring(0, 2) ? t.cfn : "//c.amazon-adsystem.com/".concat(t.cfn)}
                    }), M(t)
                } catch (t) {
                    Object(Ft.b)(t, "_bids", {makeVisibleToAllUsers: !0})
                }
            }

            function wt() {
                return "number" == typeof Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST && 0 < Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST
            }

            function Tt(t, e) {
                try {
                    var n = Object(Kt.b)();
                    Object(Pt.a)(Ct.a.getState().config.gdpr, (function (r) {
                        _t(t, e, r, n)
                    }))
                } catch (t) {
                    Object(Ft.b)(t, "_getConfigsAndFetchBids", {makeVisibleToAllUsers: !0})
                }
            }

            function _t(t, e, n, r) {
                try {
                    p.attemptConsentDataSync(), Object(Jt.b)(e, ["function", "undefined"]) || Object(Ft.c)("fetchBids.callback", ce(e), "function"), "function" != typeof e && (e = function () {
                    }), Object(zt.j)(t) || (Object(Ft.c)("fetchBids.bidConfig", ce(t), "object"), t = {}), Object(Jt.a)(t.timeout) || ("string" == typeof t.timeout ? Object(Ft.b)({
                        name: "string-".concat(t.timeout),
                        message: "fetchBids.bidConfig.timeout was a non-numeric string '".concat(t.timeout, "'")
                    }, "TypeError-fetchBids.bidConfig.timeout", {makeVisibleToAllUsers: !0}) : Object(Ft.c)("fetchBids.bidConfig.timeout", ce(t.timeout), "number")), Object(zt.k)(t, "params") && !Object(zt.j)(t.params) ? Object(Ft.c)("fetchBids.bidConfig.params", ce(t.params), "object") : Object(zt.k)(t, "params") && Object(zt.j)(t.params) && Object.keys(t.params).forEach((function (e) {
                        return !(void 0 === t.params || "string" != typeof t.params[e] && "number" != typeof t.params[e] && (Object(zt.i)(t.params[e]) ? !t.params[e].reduce((function (t, e) {
                            return t && ("string" == typeof e || "number" == typeof e)
                        }), !0) && (Object(Ft.b)({
                            name: "non-string array item",
                            message: "'fetchBids.bidConfig.params.".concat(e, " contains a non-string item")
                        }, "TypeError-fetchBids.bidConfig.params.".concat(e), {makeVisibleToAllUsers: !0}), 1) : (Object(Ft.c)("fetchBids.bidConfig.params.".concat(e), ce(t.params[e]), "string' or 'array"), 1)))
                    })), Object(zt.k)(t, "blockedBidders") && !Object(zt.i)(t.blockedBidders) ? Object(Ft.c)("fetchBids.bidConfig.blockedBidders", ce(t.blockedBidders), "array") : Object(zt.k)(t, "blockedBidders") && Object(zt.i)(t.blockedBidders) && (t.blockedBidders.reduce((function (t, e) {
                        return t && ("string" == typeof e || "number" == typeof e)
                    }), !0) || Object(Ft.b)({
                        name: "non-string array item",
                        message: "'fetchBids.bidConfig.blockedBidders contains a non-string item"
                    }, "TypeError-fetchBids.bidConfig.blockedBidders", {makeVisibleToAllUsers: !0})), Object(zt.k)(t, "blockedBidders") ? Object(Mt.c)("blockedBidders-fetchBids", "y") : Object(Mt.c)("blockedBidders-fetchBids", "n"), Object(zt.k)(t, "slots") && !Object(zt.i)(t.slots) && Object(Ft.c)("fetchBids.bidConfig.slots", ce(t.slots), "array")
                } catch (o) {
                    Object(Ft.b)(o, "_fetchBids-validation", {makeVisibleToAllUsers: !0})
                }
                var o = Ct.a.getState().config.simplerGPT, i = ie(ie({}, t), {}, {
                    bidReqID: "".concat(Ct.a.getState().AAXReqs.length),
                    slots: [],
                    validSlots: [],
                    networkReqs: []
                }), a = !1;
                try {
                    !0 === o && (!Object(zt.k)(t, "slots") || Object(zt.k)(t, "slots") && Object(zt.i)(t.slots) && 0 < t.slots.length && Object(zt.k)(t.slots[0], "getSlotElementId")) ? 0 === Object(xt.b)(Gt.a).length ? (Object(Ft.b)(new Error("fetchBids was called in simplerGPT mode before any slots were defined in GPT"), "_fetchBids-simplerGpt-NoSlots", {makeVisibleToAllUsers: !0}), a = !0, i.slots = []) : (t.slots ? (Object(Mt.c)("slots", "gpt-provided"), i.slots = t.slots.map((function (t) {
                        return new ee.a(t)
                    }))) : (Object(Mt.c)("slots", "gpt-fetch"), i.slots = Object(xt.b)(Gt.a)), i.slots = i.slots.filter(xt.a), 0 === i.slots.length && (Object(Ft.b)(new Error("No GPT slots provided to apstag.fetchBids() had valid sizes"), "_fetchBids-simplerGpt-NoValidSizes", {makeVisibleToAllUsers: !0}), a = !0)) : Object(zt.k)(t, "slots") && Object(zt.i)(t.slots) && (o ? Object(Mt.c)("slots", "gpt-aps") : Object(Mt.c)("slots", "aps"), i.slots = t.slots.map((function (t) {
                        switch (t.mediaType) {
                            case Xt.a.DISPLAY:
                                return new Zt.a(t);
                            case Xt.a.VIDEO:
                                return new te.a(t);
                            case Xt.a.MULTI_FORMAT:
                                return new se.a(t);
                            default:
                                return new Zt.a(t)
                        }
                    }))), i.validSlots = i.slots.filter((function (t) {
                        return t.isValid()
                    }))
                } catch (o) {
                    Object(Ft.b)(o, "_fetchBids-getSlots", {makeVisibleToAllUsers: !0})
                }
                var c = Object(Rt.i)(i, Ct.a.getState());
                try {
                    e = Object(Rt.b)(ot(e, i), c)
                } catch (o) {
                    Object(Ft.b)(o, "_fetchBids-wrapCallback", {makeVisibleToAllUsers: !0})
                }
                try {
                    if (0 === i.validSlots.length) !1 === a && Object(Ft.b)(new Error("No valid slots provided to apstag.fetchBids"), "_fetchBids-noSlots", {makeVisibleToAllUsers: !0}), setTimeout(e.bind(null, []), 10); else {
                        try {
                            var s = 1 === i.slots.length ? "single" : "multi",
                                u = Date.now() - b <= Ut.q ? "onload" : "ondelay",
                                l = Ct.a.getState().AAXReqs.reduce((function (t, e) {
                                    return e.bidConfig.slots.forEach((function (e) {
                                        Object(zt.h)(t, e.slotID) || t.push(e.slotID)
                                    })), t
                                }), []);
                            i.slots.map((function (t) {
                                return t.slotID
                            })).map((function (t) {
                                return Object(zt.h)(l, t)
                            })).map((function (t) {
                                return t ? "refresh" : "initial"
                            })).filter((function (t, e, n) {
                                return n.indexOf(t) === e
                            })).forEach((function (t) {
                                return Object(Mt.c)("fetchBids", "".concat(s, "-").concat(u, "-").concat(t))
                            }))
                        } catch (o) {
                            Object(Ft.b)(o, "_fetchBids-feature")
                        }
                        if (vt(i.slots.filter(Object(xt.d)(Xt.a.DISPLAY, Xt.a.MULTI_FORMAT)).map(xt.c)), Ct.a.dispatch({
                            type: "NEW_FETCH_BID_REQUEST",
                            fid: i.bidReqID,
                            pto: c
                        }), Ct.a.dispatch({
                            type: "RECORD_ORIGINAL_BID_CONFIG",
                            bidConfig: i
                        }), Object(Lt.d)("fake_bids")) at(i); else if (Ut.k) if (Ct.a.dispatch({
                            type: "SHOULD_CHUNK_REQUESTS",
                            value: Object(zt.l)(Ct.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION)
                        }), Ct.a.getState().experiments.chunkRequests && wt()) {
                            for (var d = Dt(i), f = 0; f < d.length; f++) d[f].bidReqID = "".concat(i.bidReqID, "-").concat(f);
                            Ct.a.dispatch({
                                type: "ADD_CHUNKED_REQUESTS",
                                fid: i.bidReqID,
                                numChunks: d.length
                            }), d.forEach((function (t) {
                                m(Object(Qt.d)(t, c, n, r), e, t.bidReqID)
                            }))
                        } else m(Object(Qt.d)(i, c, n, r), e, i.bidReqID); else Object(qt.b)(Object(Qt.d)(i, c, n, r), e)
                    }
                } catch (o) {
                    Object(Ft.b)(o, "_fetchBids", {makeVisibleToAllUsers: !0})
                }
            }

            function Dt(t) {
                try {
                    for (var e = Math.ceil(t.validSlots.length / Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST), n = new Array(e), r = 0; r < e; r++) {
                        var o = r * Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST;
                        n[r] = {slots: t.validSlots.slice(o, o + Ct.a.getState().cfg.MAX_SLOTS_PER_REQUEST)}
                    }
                    return n.map((function (e) {
                        return ie(ie({}, t), e)
                    }))
                } catch (e) {
                    return Object(Ft.b)(e, "chunkConfig", {makeVisibleToAllUsers: !0}), []
                }
            }

            function Et(t) {
                try {
                    Object(zt.k)(Ct.a.getState().config, "adServer") ? Gt.a.isSupported ? (tt(t), h()) : Object(Ft.b)(new Error("apstag.setDisplayBids called with unsupported ad server: ".concat(Ct.a.getState().config.adServer)), "_setDisplayBids-invalidAdServer", {makeVisibleToAllUsers: !0}) : Object(Ft.b)(new Error("apstag.setDisplayBids called without specifying ad server"), "_setDisplayBids-noAdServer", {makeVisibleToAllUsers: !0})
                } catch (t) {
                    Object(Ft.b)(t, "_setDisplayBids", {makeVisibleToAllUsers: !0})
                }
            }

            function x(t, e) {
                var n;
                (null != (n = t.gdpr) && n.consent || null != (n = t.gdpr) && n.enabled) && (n = {
                    tcString: null == (n = t.gdpr) ? void 0 : n.consent,
                    gdprApplies: null == (n = t.gdpr) ? void 0 : n.enabled
                }, p.writeConsentDataToStore(n)), p.attemptConsentDataSync(), H(t), Object(Gt.b)(t.adServer), "function" == typeof e && e()
            }

            function It(t, e) {
                try {
                    x(t), Ot(), Object(le.c)(), Object(Kt.c)()
                } catch (t) {
                    Object(Ft.b)(t, "_init")
                }
                "function" == typeof e && e()
            }

            function kt() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "display", e = Ct.a.getState();
                try {
                    switch (t) {
                        case Xt.a.DISPLAY:
                            return Object(Mt.c)("targeting", "targetingKeys-display"), e.config.useSafeFrames ? [].concat(oe(Ut.i), ["amznhost"]) : Ut.i;
                        case Xt.a.VIDEO:
                            return Object(Mt.c)("targeting", "targetingKeys-video"), e.config.useSafeFrames ? [].concat(oe(Ut.y), ["amznhost"]) : Ut.y;
                        default:
                            if (Object(Qt.g)(Ct.a.getState(), Gt.a)) {
                                if (Object(Mt.c)("targeting", "targetingKeys-newBid"), Object(zt.i)(Ct.a.getState().targetingKeys[t])) return Ct.a.getState().targetingKeys[t]
                            } else Object(Mt.c)("targeting", "targetingKeys-invalid");
                            return []
                    }
                } catch (t) {
                    return Object(Ft.b)(t, "_targetingKeys", {makeVisibleToAllUsers: !0}), []
                }
            }

            function At() {
                try {
                    return Ct.a.getState().AAXReqs.reduce((function (t, e) {
                        return e.bidConfig.slots.reduce((function (t, e) {
                            return t[e.slotID] = e.slotName, t
                        }), t)
                    }), {})
                } catch (t) {
                    return Object(Ft.b)(t, "_getSlotIdToNameMapping", {makeVisibleToAllUsers: !0}), {}
                }
            }

            try {
                Object(zt.k)(window, "apstag") && Object(zt.k)(window.apstag, "_Q") && 0 < window.apstag._Q.length && Ct.a.dispatch({
                    type: "SET_Q",
                    Q: window.apstag._Q
                })
            } catch (t) {
                Object(Ft.b)(t, "apstag-storeQ", {makeVisibleToAllUsers: !0})
            }
            window.apstag = function () {
                var e = {
                    punt: z,
                    init: It,
                    _updateConfig: x,
                    debug: Lt.a,
                    _getSlotIdToNameMapping: At,
                    targetingKeys: kt,
                    fetchBids: Tt,
                    setDisplayBids: Et,
                    renderImp: St,
                    bids: z,
                    deleteId: Wt.a,
                    updateId: Wt.e,
                    renewId: Wt.d,
                    dpa: Wt.a,
                    upa: Wt.e,
                    rpa: Wt.d,
                    thirdPartyData: {},
                    isGDPRRegion: !1,
                    rr: Yt.a,
                    _storeManager: {config: {getConfig: G}}
                };
                return Object.keys(e).forEach((function (t) {
                    "function" == typeof e[t] && (e[t] = Object(re.a)(t, e[t]), e[t] = Object(Ft.d)(e[t], t))
                })), L ? Object(Lt.b)(!0, t) : n && Object(Lt.b)(!1, t), !0 === Object(Lt.c)("exposeApi") && (e._api = {
                    _getBidSetInfo: I,
                    _applyTargetingToGPTSlot: l,
                    dispatch: Ct.a.dispatch,
                    _clearTargetingFromGPTSlot: o,
                    _clearBidSetOnSlot: s,
                    _getCurrentSlotBids: u,
                    _creativeURL: w,
                    getSlotFetchCounts: S,
                    buildBidUrl: Qt.d
                }), e
            }(), function () {
                try {
                    var t, e = (Ct.a.dispatch({
                        type: "SHOULD_SAMPLE_FEATURES",
                        value: Object(zt.l)(Ct.a.getState().cfg.FEATURE_SAMPLING_RATE)
                    }), Ct.a.dispatch({
                        type: "SHOULD_CF_ROUTE",
                        value: Object(zt.l)(Ct.a.getState().cfg.CF_ROUTING_RATE)
                    }), Ct.a.getState().experiments.shouldCFRoute && Ct.a.dispatch({
                        type: "SET_HOST",
                        hostName: "DEFAULT_AAX_BID_HOST",
                        hostValue: "aax-dtb-cf.amazon-adsystem.com"
                    }), Ct.a.dispatch({
                        type: "SHOULD_SAMPLE_LATENCY",
                        value: Object(zt.l)(Ct.a.getState().cfg.LATENCY_SAMPLING_RATE)
                    }), null !== Ct.a.getState().cfg.TEST_BID_ENDPOINT && (t = Object(zt.l)(Ct.a.getState().cfg.TEST_PATH_FREQUENCY), Ct.a.dispatch({
                        type: "SHOULD_USE_TEST_BID_ENDPOINT",
                        value: t
                    }), t) && null !== Ct.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE && Ct.a.dispatch({
                        type: "SHOULD_SAMPLE_LATENCY",
                        value: Object(zt.l)(Ct.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE)
                    }), Ct.a.dispatch({
                        type: "SHOULD_SAMPLE_SLOT_RENDER",
                        value: Object(zt.l)(Ct.a.getState().cfg.SLOT_RENDER_SAMPLING_RATE)
                    }), Ct.a.getState());
                    (e.experiments.shouldSampleLatency || e.displayAdServer.shouldSampleRender) && j(), e.displayAdServer.shouldSampleRender && ft(), e.experiments.shouldSampleLatency && E()
                } catch (t) {
                    Object(Ft.b)(t, "apstag-sampleLatency")
                }
                try {
                    q()
                } catch (t) {
                    Object(Ft.b)(t, "apstag-doLast")
                }
                if (!Object(Rt.k)(window, !0)) try {
                    var n = function (t) {
                        t && "object" !== ce(t) || (t = "Request Timeout or Error"), Object(Ft.b)({
                            message: "csm-rtb-comm-js loading failed",
                            name: t
                        }, "__csm-rtb-comm-js__")
                    };
                    Object(qt.d)({
                        url: Ct.a.getState().cfg.CSM_RTB_COMMUNICATOR_JS, onload: function t(e) {
                            e.readyState === XMLHttpRequest.DONE && 200 === e.status ? eval(e.responseText) : n(JSON.stringify({
                                status: e.statusText,
                                response: e.responseXML
                            }))
                        }, onerror: n, ontimeout: n
                    })
                } catch (t) {
                    Object(Ft.b)(t, "__load-csm-rtb-comm-js__")
                }
                Object(Lt.e)()
            }()
        }())
    } catch (t) {
        Object(Ft.b)(t, "apstag")
    }
}]);
