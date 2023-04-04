/*! For license information please see 9699.4c224fab126dbc1f18cb.js.LICENSE.txt */
(self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || []).push([[9699], {
    320: function (t, e, n) {
        "use strict";
        e.P = void 0;
        var r = n(9435);
        e.P = function (t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (t && t.NativeBridge) return t.NativeBridge;
            var n = t && t.NativeBridge || {};
            if (void 0 === t) return n;
            t.NYTG = t.NYTG || {}, t.NYTG.currentAsyncID = 0, t.NYTG.storedCallbacks = {};
            var i = (0, r.initialize)(t, n, e), o = i.dispatchNativeBridgeCommandAsync;
            return (n = i.NativeBridge).callNativeBridgeCommand = o, t.NativeBridge = n, n
        }
    }, 2561: function (t, e, n) {
        "use strict";
        var r = n(5656);
        Object.defineProperty(e, "__esModule", {value: !0}), e.RespondWithEvent = void 0, e.resolveRespondWithEvent = function (t) {
            return d.apply(this, arguments)
        };
        var i = r(n(8047)), o = r(n(7240)), a = r(n(7964)), s = r(n(8442)), u = r(n(7474)), c = r(n(1795)),
            p = r(n(3298));
        var f = function (t) {
            (0, a.default)(i, t);
            var e, n, r = (e = i, n = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }(), function () {
                var t, r = (0, u.default)(e);
                if (n) {
                    var i = (0, u.default)(this).constructor;
                    t = Reflect.construct(r, arguments, i)
                } else t = r.apply(this, arguments);
                return (0, s.default)(this, t)
            });

            function i(t, e) {
                var n;
                return (0, p.default)(this, i), (n = r.call(this, t, e)).respondWithPromise = null, n.alreadyResolved = !1, n
            }

            return (0, c.default)(i, [{
                key: "respondWith", value: function (t) {
                    if (null !== this.respondWithPromise) throw new Error("respondWith has already been called on this event.");
                    if (!0 === this.alreadyResolved) throw new Error("You must respond to this event synchronously (you can respond with a Promise)");
                    var e = Promise.resolve(t);
                    this.respondWithPromise = e
                }
            }]), i
        }("undefined" != typeof CustomEvent ? CustomEvent : (0, c.default)((function t() {
            throw(0, p.default)(this, t), new Error("This class is only intended for use on the client")
        })));

        function d() {
            return (d = (0, o.default)(i.default.mark((function t(e) {
                return i.default.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (e.alreadyResolved = !0, !e.respondWithPromise) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return", e.respondWithPromise);
                        case 3:
                            return t.abrupt("return", Promise.resolve(null));
                        case 4:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        e.RespondWithEvent = f
    }, 9435: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.setOnCommandResult = e.isBridgeCommandAvailable = e.initializeNativeToHybridCommands = e.initialize = e.enqueueWebCommandInitialize = e.dispatchNativeBridgeCommand = e.IOS13_COMMAND_PREFIX = e.INITIALIZE_COMMAND = void 0;
        var r = n(2561), i = "__initialize";
        e.INITIALIZE_COMMAND = i;
        var o = "__nyt_native_bridge:";
        e.IOS13_COMMAND_PREFIX = o;
        var a = function (t, e) {
            try {
                if (t === i) return !0;
                var n = e[t];
                return 0 != !!n && !!n.enabled
            } catch (t) {
                return !1
            }
        };
        e.isBridgeCommandAvailable = a;
        var s = function (t, e, n, r) {
            return function (i, o) {
                var a = t.NYTG.currentAsyncID;
                return t.NYTG.currentAsyncID += 1, new Promise((function (s, u) {
                    if (n && !e.isBridgeCommandAvailable(i, r)) throw new Error("[NativeBridge] command ".concat(i, " not supported"));
                    try {
                        if (t.NYTG.storedCallbacks[a]) throw new Error("Callback already stored in position ".concat(a));
                        t.NYTG.storedCallbacks[a] = function (t) {
                            if (!t.success) {
                                var e = new Error(t.error);
                                return e.details = t.error.details, u(e)
                            }
                            return s(t)
                        }
                    } catch (t) {
                        var c = new Error("Something went wrong creating the callback with ID ".concat(a, ". Error: ").concat(JSON.stringify(t)));
                        u(c)
                    }
                    try {
                        var p;
                        t.NYTG.enqueue(JSON.stringify({
                            id: a,
                            type: i,
                            options: o,
                            senderURI: (null === (p = t.asset) || void 0 === p ? void 0 : p.uri) || ""
                        }))
                    } catch (t) {
                        console.log("[NativeBridge]: Caught error while enqueing: ".concat(t))
                    }
                }))
            }
        };
        e.dispatchNativeBridgeCommand = s;
        var u = function (t) {
            t.NYTG.onCommandResult || (t.NYTG.onCommandResult = function (e) {
                var n = t.NYTG.storedCallbacks[e.id];
                n ? (n(e), delete t.NYTG.storedCallbacks[e.id]) : console.log("Callback with ID ".concat(e.id, " not found."))
            })
        };
        e.setOnCommandResult = u;
        var c = function (t, e, n) {
            return function (i, o, a) {
                var s = new r.RespondWithEvent(e + o, {detail: a});
                n.dispatchEvent(s);
                var u = (0, r.resolveRespondWithEvent)(s);
                if (!("onWebCommandResult" in t.NYTG)) return u;
                u.then((function (e) {
                    t.NYTG.onWebCommandResult(JSON.stringify({id: i, success: !0, values: e}))
                })).catch((function (e) {
                    t.NYTG.onWebCommandResult(JSON.stringify({
                        id: i,
                        success: !1,
                        error: e.name,
                        errorDetails: e.message
                    }))
                }))
            }
        };
        e.enqueueWebCommandInitialize = c;
        var p = function (t, e, n) {
            var r, a = "";
            try {
                r = new t.EventTarget
            } catch (e) {
                r = t, a = o
            }
            t.initializeCommandComplete = !1, t.hasShownWarning = !1, e.addEventListener = function (e, n, i) {
                t.initializeCommandComplete && !t.hasShownWarning && (console.warn("You should set NativeBridge addEventListeners immediately on page load or bridge initialization to avoid missing events the native side dispatches immediately"), t.hasShownWarning = !0), r.addEventListener(a + e, n, i)
            }, e.removeEventListener = function (t, e, n) {
                return r.removeEventListener(a + t, e, n)
            };
            var s = c(t, a, r);
            t.NYTG.enqueueWebCommand = function (t) {
                var e = t.id, n = t.type, r = t.options;
                return s(e, n, r)
            }, n(i).then((function () {
                t.initializeCommandComplete = !0
            })).catch((function () {
                console.warn("This environment does not support native->web events")
            }))
        };
        e.initializeNativeToHybridCommands = p, e.initialize = function (t, e, n) {
            var r, i,
                o = null == t || null === (r = t.navigator) || void 0 === r || null === (i = r.native) || void 0 === i ? void 0 : i.bridgeCommands,
                c = s(t, e, n, o);
            return u(t), e.isBridgeCommandAvailable = function (t) {
                return a(t, o)
            }, p(t, e, c), {NativeBridge: e, dispatchNativeBridgeCommandAsync: c}
        }
    }, 3228: function (t, e, n) {
        "use strict";
        n.d(e, {
            Xb: function () {
                return l
            }, Gd: function () {
                return m
            }, cu: function () {
                return h
            }
        });
        var r = n(3940), i = n(4379), o = n(6400), a = n(1182), s = n(6626), u = n(8509),
            c = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, p = n(6972), f = n(8863), d = function () {
                function t(t) {
                    this.errors = 0, this.sid = (0, i.DM)(), this.duration = 0, this.status = "ok", this.init = !0, this.ignoreDuration = !1;
                    var e = (0, o.ph)();
                    this.timestamp = e, this.started = e, t && this.update(t)
                }

                return t.prototype.update = function (t) {
                    if (void 0 === t && (t = {}), t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address), this.did || t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || (0, o.ph)(), t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration), t.sid && (this.sid = 32 === t.sid.length ? t.sid : (0, i.DM)()), void 0 !== t.init && (this.init = t.init), !this.did && t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), this.ignoreDuration) this.duration = void 0; else if ("number" == typeof t.duration) this.duration = t.duration; else {
                        var e = this.timestamp - this.started;
                        this.duration = e >= 0 ? e : 0
                    }
                    t.release && (this.release = t.release), t.environment && (this.environment = t.environment), !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress), !this.userAgent && t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status)
                }, t.prototype.close = function (t) {
                    t ? this.update({status: t}) : "ok" === this.status ? this.update({status: "exited"}) : this.update()
                }, t.prototype.toJSON = function () {
                    return (0, f.Jr)({
                        sid: "" + this.sid,
                        init: this.init,
                        started: new Date(1e3 * this.started).toISOString(),
                        timestamp: new Date(1e3 * this.timestamp).toISOString(),
                        status: this.status,
                        errors: this.errors,
                        did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                        duration: this.duration,
                        attrs: {
                            release: this.release,
                            environment: this.environment,
                            ip_address: this.ipAddress,
                            user_agent: this.userAgent
                        }
                    })
                }, t
            }(), l = function () {
                function t(t, e, n) {
                    void 0 === e && (e = new p.s), void 0 === n && (n = 4), this._version = n, this._stack = [{}], this.getStackTop().scope = e, t && this.bindClient(t)
                }

                return t.prototype.isOlderThan = function (t) {
                    return this._version < t
                }, t.prototype.bindClient = function (t) {
                    this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                }, t.prototype.pushScope = function () {
                    var t = p.s.clone(this.getScope());
                    return this.getStack().push({client: this.getClient(), scope: t}), t
                }, t.prototype.popScope = function () {
                    return !(this.getStack().length <= 1 || !this.getStack().pop())
                }, t.prototype.withScope = function (t) {
                    var e = this.pushScope();
                    try {
                        t(e)
                    } finally {
                        this.popScope()
                    }
                }, t.prototype.getClient = function () {
                    return this.getStackTop().client
                }, t.prototype.getScope = function () {
                    return this.getStackTop().scope
                }, t.prototype.getStack = function () {
                    return this._stack
                }, t.prototype.getStackTop = function () {
                    return this._stack[this._stack.length - 1]
                }, t.prototype.captureException = function (t, e) {
                    var n = this._lastEventId = e && e.event_id ? e.event_id : (0, i.DM)(), o = e;
                    if (!e) {
                        var a = void 0;
                        try {
                            throw new Error("Sentry syntheticException")
                        } catch (t) {
                            a = t
                        }
                        o = {originalException: t, syntheticException: a}
                    }
                    return this._invokeClient("captureException", t, (0, r.pi)((0, r.pi)({}, o), {event_id: n})), n
                }, t.prototype.captureMessage = function (t, e, n) {
                    var o = this._lastEventId = n && n.event_id ? n.event_id : (0, i.DM)(), a = n;
                    if (!n) {
                        var s = void 0;
                        try {
                            throw new Error(t)
                        } catch (t) {
                            s = t
                        }
                        a = {originalException: t, syntheticException: s}
                    }
                    return this._invokeClient("captureMessage", t, e, (0, r.pi)((0, r.pi)({}, a), {event_id: o})), o
                }, t.prototype.captureEvent = function (t, e) {
                    var n = e && e.event_id ? e.event_id : (0, i.DM)();
                    return "transaction" !== t.type && (this._lastEventId = n), this._invokeClient("captureEvent", t, (0, r.pi)((0, r.pi)({}, e), {event_id: n})), n
                }, t.prototype.lastEventId = function () {
                    return this._lastEventId
                }, t.prototype.addBreadcrumb = function (t, e) {
                    var n = this.getStackTop(), i = n.scope, s = n.client;
                    if (i && s) {
                        var u = s.getOptions && s.getOptions() || {}, c = u.beforeBreadcrumb, p = void 0 === c ? null : c,
                            f = u.maxBreadcrumbs, d = void 0 === f ? 100 : f;
                        if (!(d <= 0)) {
                            var l = (0, o.yW)(), h = (0, r.pi)({timestamp: l}, t), v = p ? (0, a.Cf)((function () {
                                return p(h, e)
                            })) : h;
                            null !== v && i.addBreadcrumb(v, d)
                        }
                    }
                }, t.prototype.setUser = function (t) {
                    var e = this.getScope();
                    e && e.setUser(t)
                }, t.prototype.setTags = function (t) {
                    var e = this.getScope();
                    e && e.setTags(t)
                }, t.prototype.setExtras = function (t) {
                    var e = this.getScope();
                    e && e.setExtras(t)
                }, t.prototype.setTag = function (t, e) {
                    var n = this.getScope();
                    n && n.setTag(t, e)
                }, t.prototype.setExtra = function (t, e) {
                    var n = this.getScope();
                    n && n.setExtra(t, e)
                }, t.prototype.setContext = function (t, e) {
                    var n = this.getScope();
                    n && n.setContext(t, e)
                }, t.prototype.configureScope = function (t) {
                    var e = this.getStackTop(), n = e.scope, r = e.client;
                    n && r && t(n)
                }, t.prototype.run = function (t) {
                    var e = v(this);
                    try {
                        t(this)
                    } finally {
                        v(e)
                    }
                }, t.prototype.getIntegration = function (t) {
                    var e = this.getClient();
                    if (!e) return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        return c && a.kg.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                    }
                }, t.prototype.startSpan = function (t) {
                    return this._callExtensionMethod("startSpan", t)
                }, t.prototype.startTransaction = function (t, e) {
                    return this._callExtensionMethod("startTransaction", t, e)
                }, t.prototype.traceHeaders = function () {
                    return this._callExtensionMethod("traceHeaders")
                }, t.prototype.captureSession = function (t) {
                    if (void 0 === t && (t = !1), t) return this.endSession();
                    this._sendSessionUpdate()
                }, t.prototype.endSession = function () {
                    var t = this.getStackTop(), e = t && t.scope, n = e && e.getSession();
                    n && n.close(), this._sendSessionUpdate(), e && e.setSession()
                }, t.prototype.startSession = function (t) {
                    var e = this.getStackTop(), n = e.scope, i = e.client, o = i && i.getOptions() || {}, a = o.release,
                        u = o.environment, c = ((0, s.R)().navigator || {}).userAgent,
                        p = new d((0, r.pi)((0, r.pi)((0, r.pi)({
                            release: a,
                            environment: u
                        }, n && {user: n.getUser()}), c && {userAgent: c}), t));
                    if (n) {
                        var f = n.getSession && n.getSession();
                        f && "ok" === f.status && f.update({status: "exited"}), this.endSession(), n.setSession(p)
                    }
                    return p
                }, t.prototype._sendSessionUpdate = function () {
                    var t = this.getStackTop(), e = t.scope, n = t.client;
                    if (e) {
                        var r = e.getSession && e.getSession();
                        r && n && n.captureSession && n.captureSession(r)
                    }
                }, t.prototype._invokeClient = function (t) {
                    for (var e, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                    var o = this.getStackTop(), a = o.scope, s = o.client;
                    s && s[t] && (e = s)[t].apply(e, (0, r.fl)(n, [a]))
                }, t.prototype._callExtensionMethod = function (t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    var r = h(), i = r.__SENTRY__;
                    if (i && i.extensions && "function" == typeof i.extensions[t]) return i.extensions[t].apply(this, e);
                    c && a.kg.warn("Extension method " + t + " couldn't be found, doing nothing.")
                }, t
            }();

        function h() {
            var t = (0, s.R)();
            return t.__SENTRY__ = t.__SENTRY__ || {extensions: {}, hub: void 0}, t
        }

        function v(t) {
            var e = h(), n = y(e);
            return _(e, t), n
        }

        function m() {
            var t = h();
            return g(t) && !y(t).isOlderThan(4) || _(t, new l), (0, u.KV)() ? function (t) {
                try {
                    var e = h().__SENTRY__, n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                    if (!n) return y(t);
                    if (!g(n) || y(n).isOlderThan(4)) {
                        var r = y(t).getStackTop();
                        _(n, new l(r.client, p.s.clone(r.scope)))
                    }
                    return y(n)
                } catch (e) {
                    return y(t)
                }
            }(t) : y(t)
        }

        function g(t) {
            return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
        }

        function y(t) {
            return (0, s.Y)("hub", (function () {
                return new l
            }), t)
        }

        function _(t, e) {
            return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
        }
    }, 6972: function (t, e, n) {
        "use strict";
        n.d(e, {
            c: function () {
                return p
            }, s: function () {
                return u
            }
        });
        var r = n(3940), i = n(6353), o = n(6400), a = n(2048), s = n(6626), u = function () {
            function t() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
            }

            return t.clone = function (e) {
                var n = new t;
                return e && (n._breadcrumbs = (0, r.fl)(e._breadcrumbs), n._tags = (0, r.pi)({}, e._tags), n._extra = (0, r.pi)({}, e._extra), n._contexts = (0, r.pi)({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = (0, r.fl)(e._eventProcessors), n._requestSession = e._requestSession), n
            }, t.prototype.addScopeListener = function (t) {
                this._scopeListeners.push(t)
            }, t.prototype.addEventProcessor = function (t) {
                return this._eventProcessors.push(t), this
            }, t.prototype.setUser = function (t) {
                return this._user = t || {}, this._session && this._session.update({user: t}), this._notifyScopeListeners(), this
            }, t.prototype.getUser = function () {
                return this._user
            }, t.prototype.getRequestSession = function () {
                return this._requestSession
            }, t.prototype.setRequestSession = function (t) {
                return this._requestSession = t, this
            }, t.prototype.setTags = function (t) {
                return this._tags = (0, r.pi)((0, r.pi)({}, this._tags), t), this._notifyScopeListeners(), this
            }, t.prototype.setTag = function (t, e) {
                var n;
                return this._tags = (0, r.pi)((0, r.pi)({}, this._tags), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
            }, t.prototype.setExtras = function (t) {
                return this._extra = (0, r.pi)((0, r.pi)({}, this._extra), t), this._notifyScopeListeners(), this
            }, t.prototype.setExtra = function (t, e) {
                var n;
                return this._extra = (0, r.pi)((0, r.pi)({}, this._extra), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
            }, t.prototype.setFingerprint = function (t) {
                return this._fingerprint = t, this._notifyScopeListeners(), this
            }, t.prototype.setLevel = function (t) {
                return this._level = t, this._notifyScopeListeners(), this
            }, t.prototype.setTransactionName = function (t) {
                return this._transactionName = t, this._notifyScopeListeners(), this
            }, t.prototype.setTransaction = function (t) {
                return this.setTransactionName(t)
            }, t.prototype.setContext = function (t, e) {
                var n;
                return null === e ? delete this._contexts[t] : this._contexts = (0, r.pi)((0, r.pi)({}, this._contexts), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
            }, t.prototype.setSpan = function (t) {
                return this._span = t, this._notifyScopeListeners(), this
            }, t.prototype.getSpan = function () {
                return this._span
            }, t.prototype.getTransaction = function () {
                var t = this.getSpan();
                return t && t.transaction
            }, t.prototype.setSession = function (t) {
                return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
            }, t.prototype.getSession = function () {
                return this._session
            }, t.prototype.update = function (e) {
                if (!e) return this;
                if ("function" == typeof e) {
                    var n = e(this);
                    return n instanceof t ? n : this
                }
                return e instanceof t ? (this._tags = (0, r.pi)((0, r.pi)({}, this._tags), e._tags), this._extra = (0, r.pi)((0, r.pi)({}, this._extra), e._extra), this._contexts = (0, r.pi)((0, r.pi)({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : (0, i.PO)(e) && (this._tags = (0, r.pi)((0, r.pi)({}, this._tags), e.tags), this._extra = (0, r.pi)((0, r.pi)({}, this._extra), e.extra), this._contexts = (0, r.pi)((0, r.pi)({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
            }, t.prototype.clear = function () {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
            }, t.prototype.addBreadcrumb = function (t, e) {
                var n = "number" == typeof e ? Math.min(e, 100) : 100;
                if (n <= 0) return this;
                var i = (0, r.pi)({timestamp: (0, o.yW)()}, t);
                return this._breadcrumbs = (0, r.fl)(this._breadcrumbs, [i]).slice(-n), this._notifyScopeListeners(), this
            }, t.prototype.clearBreadcrumbs = function () {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }, t.prototype.applyToEvent = function (t, e) {
                if (this._extra && Object.keys(this._extra).length && (t.extra = (0, r.pi)((0, r.pi)({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = (0, r.pi)((0, r.pi)({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = (0, r.pi)((0, r.pi)({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = (0, r.pi)((0, r.pi)({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                    t.contexts = (0, r.pi)({trace: this._span.getTraceContext()}, t.contexts);
                    var n = this._span.transaction && this._span.transaction.name;
                    n && (t.tags = (0, r.pi)({transaction: n}, t.tags))
                }
                return this._applyFingerprint(t), t.breadcrumbs = (0, r.fl)(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = this._sdkProcessingMetadata, this._notifyEventProcessors((0, r.fl)(c(), this._eventProcessors), t, e)
            }, t.prototype.setSDKProcessingMetadata = function (t) {
                return this._sdkProcessingMetadata = (0, r.pi)((0, r.pi)({}, this._sdkProcessingMetadata), t), this
            }, t.prototype._notifyEventProcessors = function (t, e, n, o) {
                var s = this;
                return void 0 === o && (o = 0), new a.cW((function (a, u) {
                    var c = t[o];
                    if (null === e || "function" != typeof c) a(e); else {
                        var p = c((0, r.pi)({}, e), n);
                        (0, i.J8)(p) ? p.then((function (e) {
                            return s._notifyEventProcessors(t, e, n, o + 1).then(a)
                        })).then(null, u) : s._notifyEventProcessors(t, p, n, o + 1).then(a).then(null, u)
                    }
                }))
            }, t.prototype._notifyScopeListeners = function () {
                var t = this;
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function (e) {
                    e(t)
                })), this._notifyingListeners = !1)
            }, t.prototype._applyFingerprint = function (t) {
                t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
            }, t
        }();

        function c() {
            return (0, s.Y)("globalEventProcessors", (function () {
                return []
            }))
        }

        function p(t) {
            c().push(t)
        }
    }, 982: function (t, e, n) {
        "use strict";
        n.d(e, {
            $e: function () {
                return f
            }, Tb: function () {
                return a
            }, YA: function () {
                return c
            }, av: function () {
                return p
            }, n_: function () {
                return s
            }, v: function () {
                return u
            }
        });
        var r = n(3940), i = n(3228);

        function o(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var o = (0, i.Gd)();
            if (o && o[t]) return o[t].apply(o, (0, r.fl)(e));
            throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
        }

        function a(t, e) {
            return o("captureException", t, {
                captureContext: e,
                originalException: t,
                syntheticException: new Error("Sentry syntheticException")
            })
        }

        function s(t) {
            o("addBreadcrumb", t)
        }

        function u(t, e) {
            o("setContext", t, e)
        }

        function c(t, e) {
            o("setTag", t, e)
        }

        function p(t) {
            o("setUser", t)
        }

        function f(t) {
            o("withScope", t)
        }
    }, 8935: function (t, e, n) {
        "use strict";
        n.d(e, {
            S: function () {
                return Se
            }
        });
        var r = "6.19.7", i = n(3940), o = n(1182), a = n(4379), s = n(7291),
            u = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
            c = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], p = function () {
                function t(e) {
                    void 0 === e && (e = {}), this._options = e, this.name = t.id
                }

                return t.prototype.setupOnce = function (e, n) {
                    e((function (e) {
                        var r = n();
                        if (r) {
                            var p = r.getIntegration(t);
                            if (p) {
                                var f = r.getClient(), l = f ? f.getOptions() : {}, h = function (t, e) {
                                    return void 0 === t && (t = {}), void 0 === e && (e = {}), {
                                        allowUrls: (0, i.fl)(t.whitelistUrls || [], t.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
                                        denyUrls: (0, i.fl)(t.blacklistUrls || [], t.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
                                        ignoreErrors: (0, i.fl)(t.ignoreErrors || [], e.ignoreErrors || [], c),
                                        ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                    }
                                }(p._options, l);
                                return function (t, e) {
                                    return e.ignoreInternal && function (t) {
                                        try {
                                            return "SentryError" === t.exception.values[0].type
                                        } catch (t) {
                                        }
                                        return !1
                                    }(t) ? (u && o.kg.warn("Event dropped due to being internal Sentry Error.\nEvent: " + (0, a.jH)(t)), !0) : function (t, e) {
                                        return !(!e || !e.length) && function (t) {
                                            if (t.message) return [t.message];
                                            if (t.exception) try {
                                                var e = t.exception.values && t.exception.values[0] || {}, n = e.type,
                                                    r = void 0 === n ? "" : n, i = e.value, s = void 0 === i ? "" : i;
                                                return ["" + s, r + ": " + s]
                                            } catch (e) {
                                                return u && o.kg.error("Cannot extract message for event " + (0, a.jH)(t)), []
                                            }
                                            return []
                                        }(t).some((function (t) {
                                            return e.some((function (e) {
                                                return (0, s.zC)(t, e)
                                            }))
                                        }))
                                    }(t, e.ignoreErrors) ? (u && o.kg.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + (0, a.jH)(t)), !0) : function (t, e) {
                                        if (!e || !e.length) return !1;
                                        var n = d(t);
                                        return !!n && e.some((function (t) {
                                            return (0, s.zC)(n, t)
                                        }))
                                    }(t, e.denyUrls) ? (u && o.kg.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + (0, a.jH)(t) + ".\nUrl: " + d(t)), !0) : !function (t, e) {
                                        if (!e || !e.length) return !0;
                                        var n = d(t);
                                        return !n || e.some((function (t) {
                                            return (0, s.zC)(n, t)
                                        }))
                                    }(t, e.allowUrls) && (u && o.kg.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + (0, a.jH)(t) + ".\nUrl: " + d(t)), !0)
                                }(e, h) ? null : e
                            }
                        }
                        return e
                    }))
                }, t.id = "InboundFilters", t
            }();

        function f(t) {
            void 0 === t && (t = []);
            for (var e = t.length - 1; e >= 0; e--) {
                var n = t[e];
                if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
            }
            return null
        }

        function d(t) {
            try {
                if (t.stacktrace) return f(t.stacktrace.frames);
                var e;
                try {
                    e = t.exception.values[0].stacktrace.frames
                } catch (t) {
                }
                return e ? f(e) : null
            } catch (e) {
                return u && o.kg.error("Cannot extract url for event " + (0, a.jH)(t)), null
            }
        }

        var l, h = n(8863), v = function () {
                function t() {
                    this.name = t.id
                }

                return t.prototype.setupOnce = function () {
                    l = Function.prototype.toString, Function.prototype.toString = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = (0, h.HK)(this) || this;
                        return l.apply(n, t)
                    }
                }, t.id = "FunctionToString", t
            }(), m = n(3228), g = n(6626), y = n(7390), _ = n(6972),
            b = Object.setPrototypeOf || ({__proto__: []} instanceof Array ? function (t, e) {
                return t.__proto__ = e, t
            } : function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
                return t
            }), x = function (t) {
                function e(e) {
                    var n = this.constructor, r = t.call(this, e) || this;
                    return r.message = e, r.name = n.prototype.constructor.name, b(r, n.prototype), r
                }

                return (0, i.ZT)(e, t), e
            }(Error), S = n(575), T = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

        function w(t, e) {
            void 0 === e && (e = !1);
            var n = t.host, r = t.path, i = t.pass, o = t.port, a = t.projectId;
            return t.protocol + "://" + t.publicKey + (e && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + a
        }

        function E(t) {
            return "user" in t && !("publicKey" in t) && (t.publicKey = t.user), {
                user: t.publicKey || "",
                protocol: t.protocol,
                publicKey: t.publicKey || "",
                pass: t.pass || "",
                host: t.host,
                port: t.port || "",
                path: t.path || "",
                projectId: t.projectId
            }
        }

        function k(t) {
            var e = "string" == typeof t ? function (t) {
                var e = T.exec(t);
                if (!e) throw new x("Invalid Sentry Dsn: " + t);
                var n = (0, i.CR)(e.slice(1), 6), r = n[0], o = n[1], a = n[2], s = void 0 === a ? "" : a, u = n[3],
                    c = n[4], p = void 0 === c ? "" : c, f = "", d = n[5], l = d.split("/");
                if (l.length > 1 && (f = l.slice(0, -1).join("/"), d = l.pop()), d) {
                    var h = d.match(/^\d+/);
                    h && (d = h[0])
                }
                return E({host: u, pass: s, path: f, projectId: d, port: p, protocol: r, publicKey: o})
            }(t) : E(t);
            return function (t) {
                if (S.h) {
                    var e = t.port, n = t.projectId, r = t.protocol;
                    if (["protocol", "publicKey", "host", "projectId"].forEach((function (e) {
                        if (!t[e]) throw new x("Invalid Sentry Dsn: " + e + " missing")
                    })), !n.match(/^\d+$/)) throw new x("Invalid Sentry Dsn: Invalid projectId " + n);
                    if (!function (t) {
                        return "http" === t || "https" === t
                    }(r)) throw new x("Invalid Sentry Dsn: Invalid protocol " + r);
                    if (e && isNaN(parseInt(e, 10))) throw new x("Invalid Sentry Dsn: Invalid port " + e)
                }
            }(e), e
        }

        var O = n(6353), R = n(2048), C = n(6400), I = n(6813);

        function L(t, e, n) {
            void 0 === e && (e = 1 / 0), void 0 === n && (n = 1 / 0);
            try {
                return D("", t, e, n)
            } catch (t) {
                return {ERROR: "**non-serializable** (" + t + ")"}
            }
        }

        function N(t, e, n) {
            void 0 === e && (e = 3), void 0 === n && (n = 102400);
            var r, i = L(t, e);
            return r = i, function (t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(r)) > n ? N(t, e - 1, n) : i
        }

        function D(t, e, r, o, a) {
            var s, u;
            void 0 === r && (r = 1 / 0), void 0 === o && (o = 1 / 0), void 0 === a && (s = "function" == typeof WeakSet, u = s ? new WeakSet : [], a = [function (t) {
                if (s) return !!u.has(t) || (u.add(t), !1);
                for (var e = 0; e < u.length; e++) if (u[e] === t) return !0;
                return u.push(t), !1
            }, function (t) {
                if (s) u.delete(t); else for (var e = 0; e < u.length; e++) if (u[e] === t) {
                    u.splice(e, 1);
                    break
                }
            }]);
            var c = (0, i.CR)(a, 2), p = c[0], f = c[1], d = e;
            if (d && "function" == typeof d.toJSON) try {
                return d.toJSON()
            } catch (t) {
            }
            if (null === e || ["number", "boolean", "string"].includes(typeof e) && !(0, O.i2)(e)) return e;
            var l = function (t, e) {
                try {
                    return "domain" === t && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : void 0 !== n.g && e === n.g ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : (0, O.Cy)(e) ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + (0, I.$P)(e) + "]" : "symbol" == typeof e ? "[" + String(e) + "]" : "bigint" == typeof e ? "[BigInt: " + String(e) + "]" : "[object " + Object.getPrototypeOf(e).constructor.name + "]"
                } catch (t) {
                    return "**non-serializable** (" + t + ")"
                }
            }(t, e);
            if (!l.startsWith("[object ")) return l;
            if (0 === r) return l.replace("object ", "");
            if (p(e)) return "[Circular ~]";
            var v = Array.isArray(e) ? [] : {}, m = 0, g = (0, O.VZ)(e) || (0, O.cO)(e) ? (0, h.Sh)(e) : e;
            for (var y in g) if (Object.prototype.hasOwnProperty.call(g, y)) {
                if (m >= o) {
                    v[y] = "[MaxProperties ~]";
                    break
                }
                var _ = g[y];
                v[y] = D(y, _, r - 1, o, a), m += 1
            }
            return f(e), v
        }

        var P = [];

        function j(t) {
            return t.reduce((function (t, e) {
                return t.every((function (t) {
                    return e.name !== t.name
                })) && t.push(e), t
            }), [])
        }

        var M = "Not capturing exception because it's already been captured.", A = function () {
            function t(t, e) {
                this._integrations = {}, this._numProcessing = 0, this._backend = new t(e), this._options = e, e.dsn && (this._dsn = k(e.dsn))
            }

            return t.prototype.captureException = function (t, e, n) {
                var r = this;
                if (!(0, a.YO)(t)) {
                    var i = e && e.event_id;
                    return this._process(this._getBackend().eventFromException(t, e).then((function (t) {
                        return r._captureEvent(t, e, n)
                    })).then((function (t) {
                        i = t
                    }))), i
                }
                u && o.kg.log(M)
            }, t.prototype.captureMessage = function (t, e, n, r) {
                var i = this, o = n && n.event_id,
                    a = (0, O.pt)(t) ? this._getBackend().eventFromMessage(String(t), e, n) : this._getBackend().eventFromException(t, n);
                return this._process(a.then((function (t) {
                    return i._captureEvent(t, n, r)
                })).then((function (t) {
                    o = t
                }))), o
            }, t.prototype.captureEvent = function (t, e, n) {
                if (!(e && e.originalException && (0, a.YO)(e.originalException))) {
                    var r = e && e.event_id;
                    return this._process(this._captureEvent(t, e, n).then((function (t) {
                        r = t
                    }))), r
                }
                u && o.kg.log(M)
            }, t.prototype.captureSession = function (t) {
                this._isEnabled() ? "string" != typeof t.release ? u && o.kg.warn("Discarded session because of missing or non-string release") : (this._sendSession(t), t.update({init: !1})) : u && o.kg.warn("SDK not enabled, will not capture session.")
            }, t.prototype.getDsn = function () {
                return this._dsn
            }, t.prototype.getOptions = function () {
                return this._options
            }, t.prototype.getTransport = function () {
                return this._getBackend().getTransport()
            }, t.prototype.flush = function (t) {
                var e = this;
                return this._isClientDoneProcessing(t).then((function (n) {
                    return e.getTransport().close(t).then((function (t) {
                        return n && t
                    }))
                }))
            }, t.prototype.close = function (t) {
                var e = this;
                return this.flush(t).then((function (t) {
                    return e.getOptions().enabled = !1, t
                }))
            }, t.prototype.setupIntegrations = function () {
                var t, e;
                this._isEnabled() && !this._integrations.initialized && (this._integrations = (t = this._options, e = {}, function (t) {
                    var e = t.defaultIntegrations && (0, i.fl)(t.defaultIntegrations) || [], n = t.integrations,
                        r = (0, i.fl)(j(e));
                    Array.isArray(n) ? r = (0, i.fl)(r.filter((function (t) {
                        return n.every((function (e) {
                            return e.name !== t.name
                        }))
                    })), j(n)) : "function" == typeof n && (r = n(r), r = Array.isArray(r) ? r : [r]);
                    var o = r.map((function (t) {
                        return t.name
                    })), a = "Debug";
                    return -1 !== o.indexOf(a) && r.push.apply(r, (0, i.fl)(r.splice(o.indexOf(a), 1))), r
                }(t).forEach((function (t) {
                    e[t.name] = t, function (t) {
                        -1 === P.indexOf(t.name) && (t.setupOnce(_.c, m.Gd), P.push(t.name), u && o.kg.log("Integration installed: " + t.name))
                    }(t)
                })), (0, h.xp)(e, "initialized", !0), e))
            }, t.prototype.getIntegration = function (t) {
                try {
                    return this._integrations[t.id] || null
                } catch (e) {
                    return u && o.kg.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                }
            }, t.prototype._updateSessionFromEvent = function (t, e) {
                var n, r, o = !1, a = !1, s = e.exception && e.exception.values;
                if (s) {
                    a = !0;
                    try {
                        for (var u = (0, i.XA)(s), c = u.next(); !c.done; c = u.next()) {
                            var p = c.value.mechanism;
                            if (p && !1 === p.handled) {
                                o = !0;
                                break
                            }
                        }
                    } catch (t) {
                        n = {error: t}
                    } finally {
                        try {
                            c && !c.done && (r = u.return) && r.call(u)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                var f = "ok" === t.status;
                (f && 0 === t.errors || f && o) && (t.update((0, i.pi)((0, i.pi)({}, o && {status: "crashed"}), {errors: t.errors || Number(a || o)})), this.captureSession(t))
            }, t.prototype._sendSession = function (t) {
                this._getBackend().sendSession(t)
            }, t.prototype._isClientDoneProcessing = function (t) {
                var e = this;
                return new R.cW((function (n) {
                    var r = 0, i = setInterval((function () {
                        0 == e._numProcessing ? (clearInterval(i), n(!0)) : (r += 1, t && r >= t && (clearInterval(i), n(!1)))
                    }), 1)
                }))
            }, t.prototype._getBackend = function () {
                return this._backend
            }, t.prototype._isEnabled = function () {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }, t.prototype._prepareEvent = function (t, e, n) {
                var r = this, o = this.getOptions(), s = o.normalizeDepth, u = void 0 === s ? 3 : s,
                    c = o.normalizeMaxBreadth, p = void 0 === c ? 1e3 : c, f = (0, i.pi)((0, i.pi)({}, t), {
                        event_id: t.event_id || (n && n.event_id ? n.event_id : (0, a.DM)()),
                        timestamp: t.timestamp || (0, C.yW)()
                    });
                this._applyClientOptions(f), this._applyIntegrationsMetadata(f);
                var d = e;
                n && n.captureContext && (d = _.s.clone(d).update(n.captureContext));
                var l = (0, R.WD)(f);
                return d && (l = d.applyToEvent(f, n)), l.then((function (t) {
                    return t && (t.sdkProcessingMetadata = (0, i.pi)((0, i.pi)({}, t.sdkProcessingMetadata), {normalizeDepth: L(u) + " (" + typeof u + ")"})), "number" == typeof u && u > 0 ? r._normalizeEvent(t, u, p) : t
                }))
            }, t.prototype._normalizeEvent = function (t, e, n) {
                if (!t) return null;
                var r = (0, i.pi)((0, i.pi)((0, i.pi)((0, i.pi)((0, i.pi)({}, t), t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map((function (t) {
                        return (0, i.pi)((0, i.pi)({}, t), t.data && {data: L(t.data, e, n)})
                    }))
                }), t.user && {user: L(t.user, e, n)}), t.contexts && {contexts: L(t.contexts, e, n)}), t.extra && {extra: L(t.extra, e, n)});
                return t.contexts && t.contexts.trace && (r.contexts.trace = t.contexts.trace), r.sdkProcessingMetadata = (0, i.pi)((0, i.pi)({}, r.sdkProcessingMetadata), {baseClientNormalized: !0}), r
            }, t.prototype._applyClientOptions = function (t) {
                var e = this.getOptions(), n = e.environment, r = e.release, i = e.dist, o = e.maxValueLength,
                    a = void 0 === o ? 250 : o;
                "environment" in t || (t.environment = "environment" in e ? n : "production"), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== i && (t.dist = i), t.message && (t.message = (0, s.$G)(t.message, a));
                var u = t.exception && t.exception.values && t.exception.values[0];
                u && u.value && (u.value = (0, s.$G)(u.value, a));
                var c = t.request;
                c && c.url && (c.url = (0, s.$G)(c.url, a))
            }, t.prototype._applyIntegrationsMetadata = function (t) {
                var e = Object.keys(this._integrations);
                e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = (0, i.fl)(t.sdk.integrations || [], e))
            }, t.prototype._sendEvent = function (t) {
                this._getBackend().sendEvent(t)
            }, t.prototype._captureEvent = function (t, e, n) {
                return this._processEvent(t, e, n).then((function (t) {
                    return t.event_id
                }), (function (t) {
                    u && o.kg.error(t)
                }))
            }, t.prototype._processEvent = function (t, e, n) {
                var r = this, i = this.getOptions(), o = i.beforeSend, a = i.sampleRate, s = this.getTransport();

                function u(t, e) {
                    s.recordLostEvent && s.recordLostEvent(t, e)
                }

                if (!this._isEnabled()) return (0, R.$2)(new x("SDK not enabled, will not capture event."));
                var c = "transaction" === t.type;
                return !c && "number" == typeof a && Math.random() > a ? (u("sample_rate", "event"), (0, R.$2)(new x("Discarding event because it's not included in the random sample (sampling rate = " + a + ")"))) : this._prepareEvent(t, n, e).then((function (n) {
                    if (null === n) throw u("event_processor", t.type || "event"), new x("An event processor returned null, will not send event.");
                    return e && e.data && !0 === e.data.__sentry__ || c || !o ? n : function (t) {
                        var e = "`beforeSend` method has to return `null` or a valid event.";
                        if ((0, O.J8)(t)) return t.then((function (t) {
                            if (!(0, O.PO)(t) && null !== t) throw new x(e);
                            return t
                        }), (function (t) {
                            throw new x("beforeSend rejected with " + t)
                        }));
                        if (!(0, O.PO)(t) && null !== t) throw new x(e);
                        return t
                    }(o(n, e))
                })).then((function (e) {
                    if (null === e) throw u("before_send", t.type || "event"), new x("`beforeSend` returned `null`, will not send event.");
                    var i = n && n.getSession && n.getSession();
                    return !c && i && r._updateSessionFromEvent(i, e), r._sendEvent(e), e
                })).then(null, (function (t) {
                    if (t instanceof x) throw t;
                    throw r.captureException(t, {
                        data: {__sentry__: !0},
                        originalException: t
                    }), new x("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                }))
            }, t.prototype._process = function (t) {
                var e = this;
                this._numProcessing += 1, t.then((function (t) {
                    return e._numProcessing -= 1, t
                }), (function (t) {
                    return e._numProcessing -= 1, t
                }))
            }, t
        }();

        function B(t, e, n) {
            return {initDsn: t, metadata: e || {}, dsn: k(t), tunnel: n}
        }

        function q(t) {
            var e = t.protocol ? t.protocol + ":" : "", n = t.port ? ":" + t.port : "";
            return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
        }

        function H(t, e) {
            return "" + q(t) + t.projectId + "/" + e + "/"
        }

        function G(t) {
            return (0, h._j)({sentry_key: t.publicKey, sentry_version: "7"})
        }

        function W(t) {
            return H(t, "store")
        }

        function Y(t) {
            return W(t) + "?" + G(t)
        }

        function U(t, e) {
            return e || function (t) {
                return H(t, "envelope")
            }(t) + "?" + G(t)
        }

        function z(t, e) {
            return void 0 === e && (e = []), [t, e]
        }

        function F(t) {
            var e = (0, i.CR)(t, 2), n = e[0], r = e[1], o = JSON.stringify(n);
            return r.reduce((function (t, e) {
                var n = (0, i.CR)(e, 2), r = n[0], o = n[1], a = (0, O.pt)(o) ? String(o) : JSON.stringify(o);
                return t + "\n" + JSON.stringify(r) + "\n" + a
            }), o)
        }

        function X(t) {
            if (t.metadata && t.metadata.sdk) {
                var e = t.metadata.sdk;
                return {name: e.name, version: e.version}
            }
        }

        function $(t, e) {
            return e ? (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = (0, i.fl)(t.sdk.integrations || [], e.integrations || []), t.sdk.packages = (0, i.fl)(t.sdk.packages || [], e.packages || []), t) : t
        }

        function J(t, e) {
            var n = X(e), r = "aggregates" in t ? "sessions" : "session";
            return [z((0, i.pi)((0, i.pi)({sent_at: (new Date).toISOString()}, n && {sdk: n}), !!e.tunnel && {dsn: w(e.dsn)}), [[{type: r}, t]]), r]
        }

        !function () {
            function t(t, e, n) {
                void 0 === e && (e = {}), this.dsn = t, this._dsnObject = k(t), this.metadata = e, this._tunnel = n
            }

            t.prototype.getDsn = function () {
                return this._dsnObject
            }, t.prototype.forceEnvelope = function () {
                return !!this._tunnel
            }, t.prototype.getBaseApiEndpoint = function () {
                return q(this._dsnObject)
            }, t.prototype.getStoreEndpoint = function () {
                return W(this._dsnObject)
            }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
                return Y(this._dsnObject)
            }, t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
                return U(this._dsnObject, this._tunnel)
            }
        }();
        var K, V = function () {
            function t() {
            }

            return t.prototype.sendEvent = function (t) {
                return (0, R.WD)({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: "skipped"
                })
            }, t.prototype.close = function (t) {
                return (0, R.WD)(!0)
            }, t
        }(), Z = function () {
            function t(t) {
                this._options = t, this._options.dsn || u && o.kg.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
            }

            return t.prototype.eventFromException = function (t, e) {
                throw new x("Backend has to implement `eventFromException` method")
            }, t.prototype.eventFromMessage = function (t, e, n) {
                throw new x("Backend has to implement `eventFromMessage` method")
            }, t.prototype.sendEvent = function (t) {
                if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                    var e = function (t, e) {
                        var n = X(e), r = t.type || "event",
                            o = (t.sdkProcessingMetadata || {}).transactionSampling || {}, a = o.method, s = o.rate;
                        return $(t, e.metadata.sdk), t.tags = t.tags || {}, t.extra = t.extra || {}, t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized || (t.tags.skippedNormalization = !0, t.extra.normalizeDepth = t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"), delete t.sdkProcessingMetadata, z((0, i.pi)((0, i.pi)({
                            event_id: t.event_id,
                            sent_at: (new Date).toISOString()
                        }, n && {sdk: n}), !!e.tunnel && {dsn: w(e.dsn)}), [[{
                            type: r,
                            sample_rates: [{id: a, rate: s}]
                        }, t]])
                    }(t, B(this._options.dsn, this._options._metadata, this._options.tunnel));
                    this._newTransport.send(e).then(null, (function (t) {
                        u && o.kg.error("Error while sending event:", t)
                    }))
                } else this._transport.sendEvent(t).then(null, (function (t) {
                    u && o.kg.error("Error while sending event:", t)
                }))
            }, t.prototype.sendSession = function (t) {
                if (this._transport.sendSession) if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                    var e = B(this._options.dsn, this._options._metadata, this._options.tunnel),
                        n = (0, i.CR)(J(t, e), 1)[0];
                    this._newTransport.send(n).then(null, (function (t) {
                        u && o.kg.error("Error while sending session:", t)
                    }))
                } else this._transport.sendSession(t).then(null, (function (t) {
                    u && o.kg.error("Error while sending session:", t)
                })); else u && o.kg.warn("Dropping session because custom transport doesn't implement sendSession")
            }, t.prototype.getTransport = function () {
                return this._transport
            }, t.prototype._setupTransport = function () {
                return new V
            }, t
        }();
        !function (t) {
            t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
        }(K || (K = {}));
        var Q = n(1939), tt = "?";

        function et(t, e, n, r) {
            var i = {filename: t, function: e, in_app: !0};
            return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
        }

        var nt = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            rt = /\((\S*)(?::(\d+))(?::(\d+))\)/, it = [30, function (t) {
                var e = nt.exec(t);
                if (e) {
                    if (e[2] && 0 === e[2].indexOf("eval")) {
                        var n = rt.exec(e[2]);
                        n && (e[2] = n[1], e[3] = n[2], e[4] = n[3])
                    }
                    var r = (0, i.CR)(ht(e[1] || tt, e[2]), 2), o = r[0];
                    return et(r[1], o, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                }
            }],
            ot = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
            at = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, st = [50, function (t) {
                var e, n = ot.exec(t);
                if (n) {
                    if (n[3] && n[3].indexOf(" > eval") > -1) {
                        var r = at.exec(n[3]);
                        r && (n[1] = n[1] || "eval", n[3] = r[1], n[4] = r[2], n[5] = "")
                    }
                    var o = n[3], a = n[1] || tt;
                    return a = (e = (0, i.CR)(ht(a, o), 2))[0], et(o = e[1], a, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
                }
            }],
            ut = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            ct = [40, function (t) {
                var e = ut.exec(t);
                return e ? et(e[2], e[1] || tt, +e[3], e[4] ? +e[4] : void 0) : void 0
            }], pt = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, ft = [10, function (t) {
                var e = pt.exec(t);
                return e ? et(e[2], e[3] || tt, +e[1]) : void 0
            }], dt = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
            lt = [20, function (t) {
                var e = dt.exec(t);
                return e ? et(e[5], e[3] || e[4] || tt, +e[1], +e[2]) : void 0
            }], ht = function (t, e) {
                var n = -1 !== t.indexOf("safari-extension"), r = -1 !== t.indexOf("safari-web-extension");
                return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : tt, n ? "safari-extension:" + e : "safari-web-extension:" + e] : [t, e]
            };

        function vt(t) {
            var e = gt(t), n = {type: t && t.name, value: _t(t)};
            return e.length && (n.stacktrace = {frames: e}), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
        }

        function mt(t) {
            return {exception: {values: [vt(t)]}}
        }

        function gt(t) {
            var e = t.stacktrace || t.stack || "", n = function (t) {
                if (t) {
                    if ("number" == typeof t.framesToPop) return t.framesToPop;
                    if (yt.test(t.message)) return 1
                }
                return 0
            }(t);
            try {
                return (0, I.pE)(ft, lt, it, ct, st)(e, n)
            } catch (t) {
            }
            return []
        }

        var yt = /Minified React error #\d+;/i;

        function _t(t) {
            var e = t && t.message;
            return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
        }

        function bt(t, e, n, r) {
            var o;
            if ((0, O.VW)(t) && t.error) return mt(t.error);
            if ((0, O.TX)(t) || (0, O.fm)(t)) {
                var s = t;
                if ("stack" in t) o = mt(t); else {
                    var u = s.name || ((0, O.TX)(s) ? "DOMError" : "DOMException"),
                        c = s.message ? u + ": " + s.message : u;
                    o = xt(c, e, n), (0, a.Db)(o, c)
                }
                return "code" in s && (o.tags = (0, i.pi)((0, i.pi)({}, o.tags), {"DOMException.code": "" + s.code})), o
            }
            return (0, O.VZ)(t) ? mt(t) : (0, O.PO)(t) || (0, O.cO)(t) ? (o = function (t, e, n) {
                var r = {
                    exception: {
                        values: [{
                            type: (0, O.cO)(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                            value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + (0, h.zf)(t)
                        }]
                    }, extra: {__serialized__: N(t)}
                };
                if (e) {
                    var i = gt(e);
                    i.length && (r.stacktrace = {frames: i})
                }
                return r
            }(t, e, r), (0, a.EG)(o, {synthetic: !0}), o) : (o = xt(t, e, n), (0, a.Db)(o, "" + t, void 0), (0, a.EG)(o, {synthetic: !0}), o)
        }

        function xt(t, e, n) {
            var r = {message: t};
            if (n && e) {
                var i = gt(e);
                i.length && (r.stacktrace = {frames: i})
            }
            return r
        }

        function St(t) {
            var e = [];

            function n(t) {
                return e.splice(e.indexOf(t), 1)[0]
            }

            return {
                $: e, add: function (r) {
                    if (!(void 0 === t || e.length < t)) return (0, R.$2)(new x("Not adding Promise due to buffer limit reached."));
                    var i = r();
                    return -1 === e.indexOf(i) && e.push(i), i.then((function () {
                        return n(i)
                    })).then(null, (function () {
                        return n(i).then(null, (function () {
                        }))
                    })), i
                }, drain: function (t) {
                    return new R.cW((function (n, r) {
                        var i = e.length;
                        if (!i) return n(!0);
                        var o = setTimeout((function () {
                            t && t > 0 && n(!1)
                        }), t);
                        e.forEach((function (t) {
                            (0, R.WD)(t).then((function () {
                                --i || (clearTimeout(o), n(!0))
                            }), r)
                        }))
                    }))
                }
            }
        }

        function Tt(t, e) {
            return t[e] || t.all || 0
        }

        function wt(t, e, n) {
            return void 0 === n && (n = Date.now()), Tt(t, e) > n
        }

        function Et(t, e, n) {
            var r, o, a, s;
            void 0 === n && (n = Date.now());
            var u = (0, i.pi)({}, t), c = e["x-sentry-rate-limits"], p = e["retry-after"];
            if (c) try {
                for (var f = (0, i.XA)(c.trim().split(",")), d = f.next(); !d.done; d = f.next()) {
                    var l = d.value.split(":", 2), h = parseInt(l[0], 10), v = 1e3 * (isNaN(h) ? 60 : h);
                    if (l[1]) try {
                        for (var m = (a = void 0, (0, i.XA)(l[1].split(";"))), g = m.next(); !g.done; g = m.next()) u[g.value] = n + v
                    } catch (t) {
                        a = {error: t}
                    } finally {
                        try {
                            g && !g.done && (s = m.return) && s.call(m)
                        } finally {
                            if (a) throw a.error
                        }
                    } else u.all = n + v
                }
            } catch (t) {
                r = {error: t}
            } finally {
                try {
                    d && !d.done && (o = f.return) && o.call(f)
                } finally {
                    if (r) throw r.error
                }
            } else p && (u.all = n + function (t, e) {
                void 0 === e && (e = Date.now());
                var n = parseInt("" + t, 10);
                if (!isNaN(n)) return 1e3 * n;
                var r = Date.parse("" + t);
                return isNaN(r) ? 6e4 : r - e
            }(p, n));
            return u
        }

        function kt(t) {
            return t >= 200 && t < 300 ? "success" : 429 === t ? "rate_limit" : t >= 400 && t < 500 ? "invalid" : t >= 500 ? "failed" : "unknown"
        }

        function Ot(t, e, n) {
            void 0 === n && (n = St(t.bufferSize || 30));
            var r = {};
            return {
                send: function (t) {
                    var o = function (t) {
                        var e = (0, i.CR)(t, 2), n = (0, i.CR)(e[1], 1);
                        return (0, i.CR)(n[0], 1)[0].type
                    }(t), a = "event" === o ? "error" : o, s = {category: a, body: F(t)};
                    return wt(r, a) ? (0, R.$2)({status: "rate_limit", reason: Rt(r, a)}) : n.add((function () {
                        return e(s).then((function (t) {
                            var e = t.body, n = t.headers, i = t.reason, o = kt(t.statusCode);
                            return n && (r = Et(r, n)), "success" === o ? (0, R.WD)({
                                status: o,
                                reason: i
                            }) : (0, R.$2)({
                                status: o,
                                reason: i || e || ("rate_limit" === o ? Rt(r, a) : "Unknown transport error")
                            })
                        }))
                    }))
                }, flush: function (t) {
                    return n.drain(t)
                }
            }
        }

        function Rt(t, e) {
            return "Too many " + e + " requests, backing off until: " + new Date(Tt(t, e)).toISOString()
        }

        var Ct, It = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, Lt = (0, g.R)();

        function Nt() {
            if (Ct) return Ct;
            if ((0, Q.Du)(Lt.fetch)) return Ct = Lt.fetch.bind(Lt);
            var t = Lt.document, e = Lt.fetch;
            if (t && "function" == typeof t.createElement) try {
                var n = t.createElement("iframe");
                n.hidden = !0, t.head.appendChild(n);
                var r = n.contentWindow;
                r && r.fetch && (e = r.fetch), t.head.removeChild(n)
            } catch (t) {
                It && o.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
            }
            return Ct = e.bind(Lt)
        }

        function Dt(t) {
            return "event" === t ? "error" : t
        }

        var Pt = (0, g.R)(), jt = function () {
            function t(t) {
                var e = this;
                this.options = t, this._buffer = St(30), this._rateLimits = {}, this._outcomes = {}, this._api = B(t.dsn, t._metadata, t.tunnel), this.url = Y(this._api.dsn), this.options.sendClientReports && Pt.document && Pt.document.addEventListener("visibilitychange", (function () {
                    "hidden" === Pt.document.visibilityState && e._flushOutcomes()
                }))
            }

            return t.prototype.sendEvent = function (t) {
                return this._sendRequest(function (t, e) {
                    var n, r = X(e), o = t.type || "event", a = "transaction" === o || !!e.tunnel,
                        s = (t.sdkProcessingMetadata || {}).transactionSampling || {}, u = s.method, c = s.rate;
                    $(t, e.metadata.sdk), t.tags = t.tags || {}, t.extra = t.extra || {}, t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized || (t.tags.skippedNormalization = !0, t.extra.normalizeDepth = t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"), delete t.sdkProcessingMetadata;
                    try {
                        n = JSON.stringify(t)
                    } catch (e) {
                        t.tags.JSONStringifyError = !0, t.extra.JSONStringifyError = e;
                        try {
                            n = JSON.stringify(L(t))
                        } catch (t) {
                            var p = t;
                            n = JSON.stringify({
                                message: "JSON.stringify error after renormalization",
                                extra: {message: p.message, stack: p.stack}
                            })
                        }
                    }
                    var f = {body: n, type: o, url: a ? U(e.dsn, e.tunnel) : Y(e.dsn)};
                    if (a) {
                        var d = z((0, i.pi)((0, i.pi)({
                            event_id: t.event_id,
                            sent_at: (new Date).toISOString()
                        }, r && {sdk: r}), !!e.tunnel && {dsn: w(e.dsn)}), [[{
                            type: o,
                            sample_rates: [{id: u, rate: c}]
                        }, f.body]]);
                        f.body = F(d)
                    }
                    return f
                }(t, this._api), t)
            }, t.prototype.sendSession = function (t) {
                return this._sendRequest(function (t, e) {
                    var n = (0, i.CR)(J(t, e), 2), r = n[0], o = n[1];
                    return {body: F(r), type: o, url: U(e.dsn, e.tunnel)}
                }(t, this._api), t)
            }, t.prototype.close = function (t) {
                return this._buffer.drain(t)
            }, t.prototype.recordLostEvent = function (t, e) {
                var n;
                if (this.options.sendClientReports) {
                    var r = Dt(e) + ":" + t;
                    It && o.kg.log("Adding outcome: " + r), this._outcomes[r] = (null != (n = this._outcomes[r]) ? n : 0) + 1
                }
            }, t.prototype._flushOutcomes = function () {
                if (this.options.sendClientReports) {
                    var t = this._outcomes;
                    if (this._outcomes = {}, Object.keys(t).length) {
                        It && o.kg.log("Flushing outcomes:\n" + JSON.stringify(t, null, 2));
                        var e, n, r = U(this._api.dsn, this._api.tunnel), a = (e = Object.keys(t).map((function (e) {
                            var n = (0, i.CR)(e.split(":"), 2), r = n[0];
                            return {reason: n[1], category: r, quantity: t[e]}
                        })), z((n = this._api.tunnel && w(this._api.dsn)) ? {dsn: n} : {}, [[{type: "client_report"}, {
                            timestamp: (0, C.yW)(),
                            discarded_events: e
                        }]]));
                        try {
                            !function (t, e) {
                                if ("[object Navigator]" === Object.prototype.toString.call(Lt && Lt.navigator) && "function" == typeof Lt.navigator.sendBeacon) return Lt.navigator.sendBeacon.bind(Lt.navigator)(t, e);
                                (0, Q.Ak)() && Nt()(t, {
                                    body: e,
                                    method: "POST",
                                    credentials: "omit",
                                    keepalive: !0
                                }).then(null, (function (t) {
                                    console.error(t)
                                }))
                            }(r, F(a))
                        } catch (t) {
                            It && o.kg.error(t)
                        }
                    } else It && o.kg.log("No outcomes to flush")
                }
            }, t.prototype._handleResponse = function (t) {
                var e = t.requestType, n = t.response, r = t.headers, i = t.resolve, a = t.reject, s = kt(n.status);
                this._rateLimits = Et(this._rateLimits, r), this._isRateLimited(e) && It && o.kg.warn("Too many " + e + " requests, backing off until: " + this._disabledUntil(e)), "success" !== s ? a(n) : i({status: s})
            }, t.prototype._disabledUntil = function (t) {
                var e = Dt(t);
                return new Date(Tt(this._rateLimits, e))
            }, t.prototype._isRateLimited = function (t) {
                var e = Dt(t);
                return wt(this._rateLimits, e)
            }, t
        }(), Mt = function (t) {
            function e(e, n) {
                void 0 === n && (n = Nt());
                var r = t.call(this, e) || this;
                return r._fetch = n, r
            }

            return (0, i.ZT)(e, t), e.prototype._sendRequest = function (t, e) {
                var n = this;
                if (this._isRateLimited(t.type)) return this.recordLostEvent("ratelimit_backoff", t.type), Promise.reject({
                    event: e,
                    type: t.type,
                    reason: "Transport for " + t.type + " requests locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                    status: 429
                });
                var r = {body: t.body, method: "POST", referrerPolicy: (0, Q.hv)() ? "origin" : ""};
                return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add((function () {
                    return new R.cW((function (e, i) {
                        n._fetch(t.url, r).then((function (r) {
                            var o = {
                                "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": r.headers.get("Retry-After")
                            };
                            n._handleResponse({requestType: t.type, response: r, headers: o, resolve: e, reject: i})
                        })).catch(i)
                    }))
                })).then(void 0, (function (e) {
                    throw e instanceof x ? n.recordLostEvent("queue_overflow", t.type) : n.recordLostEvent("network_error", t.type), e
                }))
            }, e
        }(jt), At = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return (0, i.ZT)(e, t), e.prototype._sendRequest = function (t, e) {
                var n = this;
                return this._isRateLimited(t.type) ? (this.recordLostEvent("ratelimit_backoff", t.type), Promise.reject({
                    event: e,
                    type: t.type,
                    reason: "Transport for " + t.type + " requests locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                    status: 429
                })) : this._buffer.add((function () {
                    return new R.cW((function (e, r) {
                        var i = new XMLHttpRequest;
                        for (var o in i.onreadystatechange = function () {
                            if (4 === i.readyState) {
                                var o = {
                                    "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": i.getResponseHeader("Retry-After")
                                };
                                n._handleResponse({requestType: t.type, response: i, headers: o, resolve: e, reject: r})
                            }
                        }, i.open("POST", t.url), n.options.headers) Object.prototype.hasOwnProperty.call(n.options.headers, o) && i.setRequestHeader(o, n.options.headers[o]);
                        i.send(t.body)
                    }))
                })).then(void 0, (function (e) {
                    throw e instanceof x ? n.recordLostEvent("queue_overflow", t.type) : n.recordLostEvent("network_error", t.type), e
                }))
            }, e
        }(jt), Bt = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return (0, i.ZT)(e, t), e.prototype.eventFromException = function (t, e) {
                return function (t, e, n) {
                    var r = bt(t, e && e.syntheticException || void 0, n);
                    return (0, a.EG)(r), r.level = K.Error, e && e.event_id && (r.event_id = e.event_id), (0, R.WD)(r)
                }(t, e, this._options.attachStacktrace)
            }, e.prototype.eventFromMessage = function (t, e, n) {
                return void 0 === e && (e = K.Info), function (t, e, n, r) {
                    void 0 === e && (e = K.Info);
                    var i = xt(t, n && n.syntheticException || void 0, r);
                    return i.level = e, n && n.event_id && (i.event_id = n.event_id), (0, R.WD)(i)
                }(t, e, n, this._options.attachStacktrace)
            }, e.prototype._setupTransport = function () {
                if (!this._options.dsn) return t.prototype._setupTransport.call(this);
                var e, n, r = (0, i.pi)((0, i.pi)({}, this._options.transportOptions), {
                    dsn: this._options.dsn,
                    tunnel: this._options.tunnel,
                    sendClientReports: this._options.sendClientReports,
                    _metadata: this._options._metadata
                }), o = B(r.dsn, r._metadata, r.tunnel), a = U(o.dsn, o.tunnel);
                if (this._options.transport) return new this._options.transport(r);
                if ((0, Q.Ak)()) {
                    var s = (0, i.pi)({}, r.fetchParameters);
                    return this._newTransport = (e = {
                        requestOptions: s,
                        url: a
                    }, void 0 === n && (n = Nt()), Ot({bufferSize: e.bufferSize}, (function (t) {
                        var r = (0, i.pi)({body: t.body, method: "POST", referrerPolicy: "origin"}, e.requestOptions);
                        return n(e.url, r).then((function (t) {
                            return t.text().then((function (e) {
                                return {
                                    body: e,
                                    headers: {
                                        "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                        "retry-after": t.headers.get("Retry-After")
                                    },
                                    reason: t.statusText,
                                    statusCode: t.status
                                }
                            }))
                        }))
                    }))), new Mt(r)
                }
                return this._newTransport = function (t) {
                    return Ot({bufferSize: t.bufferSize}, (function (e) {
                        return new R.cW((function (n, r) {
                            var i = new XMLHttpRequest;
                            for (var o in i.onreadystatechange = function () {
                                if (4 === i.readyState) {
                                    var t = {
                                        body: i.response,
                                        headers: {
                                            "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                            "retry-after": i.getResponseHeader("Retry-After")
                                        },
                                        reason: i.statusText,
                                        statusCode: i.status
                                    };
                                    n(t)
                                }
                            }, i.open("POST", t.url), t.headers) Object.prototype.hasOwnProperty.call(t.headers, o) && i.setRequestHeader(o, t.headers[o]);
                            i.send(e.body)
                        }))
                    }))
                }({url: a, headers: r.headers}), new At(r)
            }, e
        }(Z), qt = n(982), Ht = (0, g.R)(), Gt = 0;

        function Wt() {
            return Gt > 0
        }

        function Yt() {
            Gt += 1, setTimeout((function () {
                Gt -= 1
            }))
        }

        function Ut(t, e, n) {
            if (void 0 === e && (e = {}), "function" != typeof t) return t;
            try {
                var r = t.__sentry_wrapped__;
                if (r) return r;
                if ((0, h.HK)(t)) return t
            } catch (e) {
                return t
            }
            var o = function () {
                var r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    var o = r.map((function (t) {
                        return Ut(t, e)
                    }));
                    return t.apply(this, o)
                } catch (t) {
                    throw Yt(), (0, qt.$e)((function (n) {
                        n.addEventProcessor((function (t) {
                            return e.mechanism && ((0, a.Db)(t, void 0, void 0), (0, a.EG)(t, e.mechanism)), t.extra = (0, i.pi)((0, i.pi)({}, t.extra), {arguments: r}), t
                        })), (0, qt.Tb)(t)
                    })), t
                }
            };
            try {
                for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (o[s] = t[s])
            } catch (t) {
            }
            (0, h.$Q)(o, t), (0, h.xp)(t, "__sentry_wrapped__", o);
            try {
                Object.getOwnPropertyDescriptor(o, "name").configurable && Object.defineProperty(o, "name", {
                    get: function () {
                        return t.name
                    }
                })
            } catch (t) {
            }
            return o
        }

        var zt = n(4236), Ft = ["fatal", "error", "warning", "log", "info", "debug", "critical"];
        var Xt = function () {
            function t(e) {
                this.name = t.id, this._options = (0, i.pi)({
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, e)
            }

            return t.prototype.addSentryBreadcrumb = function (t) {
                this._options.sentry && (0, m.Gd)().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: (0, a.jH)(t)
                }, {event: t})
            }, t.prototype.setupOnce = function () {
                var t;
                this._options.console && (0, y.o)("console", $t), this._options.dom && (0, y.o)("dom", (t = this._options.dom, function (e) {
                    var n, r = "object" == typeof t ? t.serializeAttribute : void 0;
                    "string" == typeof r && (r = [r]);
                    try {
                        n = e.event.target ? (0, zt.R)(e.event.target, r) : (0, zt.R)(e.event, r)
                    } catch (t) {
                        n = "<unknown>"
                    }
                    0 !== n.length && (0, m.Gd)().addBreadcrumb({category: "ui." + e.name, message: n}, {
                        event: e.event,
                        name: e.name,
                        global: e.global
                    })
                })), this._options.xhr && (0, y.o)("xhr", Jt), this._options.fetch && (0, y.o)("fetch", Kt), this._options.history && (0, y.o)("history", Vt)
            }, t.id = "Breadcrumbs", t
        }();

        function $t(t) {
            var e, n = {
                category: "console",
                data: {arguments: t.args, logger: "console"},
                level: (e = t.level, "warn" === e ? K.Warning : function (t) {
                    return -1 !== Ft.indexOf(t)
                }(e) ? e : K.Log),
                message: (0, s.nK)(t.args, " ")
            };
            if ("assert" === t.level) {
                if (!1 !== t.args[0]) return;
                n.message = "Assertion failed: " + ((0, s.nK)(t.args.slice(1), " ") || "console.assert"), n.data.arguments = t.args.slice(1)
            }
            (0, m.Gd)().addBreadcrumb(n, {input: t.args, level: t.level})
        }

        function Jt(t) {
            if (t.endTimestamp) {
                if (t.xhr.__sentry_own_request__) return;
                var e = t.xhr.__sentry_xhr__ || {}, n = e.method, r = e.url, i = e.status_code, o = e.body;
                (0, m.Gd)().addBreadcrumb({
                    category: "xhr",
                    data: {method: n, url: r, status_code: i},
                    type: "http"
                }, {xhr: t.xhr, input: o})
            }
        }

        function Kt(t) {
            t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? (0, m.Gd)().addBreadcrumb({
                category: "fetch",
                data: t.fetchData,
                level: K.Error,
                type: "http"
            }, {data: t.error, input: t.args}) : (0, m.Gd)().addBreadcrumb({
                category: "fetch",
                data: (0, i.pi)((0, i.pi)({}, t.fetchData), {status_code: t.response.status}),
                type: "http"
            }, {input: t.args, response: t.response})))
        }

        function Vt(t) {
            var e = (0, g.R)(), n = t.from, r = t.to, i = (0, a.en)(e.location.href), o = (0, a.en)(n),
                s = (0, a.en)(r);
            o.path || (o = i), i.protocol === s.protocol && i.host === s.host && (r = s.relative), i.protocol === o.protocol && i.host === o.host && (n = o.relative), (0, m.Gd)().addBreadcrumb({
                category: "navigation",
                data: {from: n, to: r}
            })
        }

        var Zt = function (t) {
                function e(e) {
                    return void 0 === e && (e = {}), e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{name: "npm:@sentry/browser", version: r}],
                        version: r
                    }, t.call(this, Bt, e) || this
                }

                return (0, i.ZT)(e, t), e.prototype.showReportDialog = function (t) {
                    void 0 === t && (t = {}), (0, g.R)().document && (this._isEnabled() ? function (t) {
                        if (void 0 === t && (t = {}), Ht.document) if (t.eventId) if (t.dsn) {
                            var e = Ht.document.createElement("script");
                            e.async = !0, e.src = function (t, e) {
                                var n = k(t), r = q(n) + "embed/error-page/", i = "dsn=" + w(n);
                                for (var o in e) if ("dsn" !== o) if ("user" === o) {
                                    if (!e.user) continue;
                                    e.user.name && (i += "&name=" + encodeURIComponent(e.user.name)), e.user.email && (i += "&email=" + encodeURIComponent(e.user.email))
                                } else i += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(e[o]);
                                return r + "?" + i
                            }(t.dsn, t), t.onLoad && (e.onload = t.onLoad);
                            var n = Ht.document.head || Ht.document.body;
                            n && n.appendChild(e)
                        } else It && o.kg.error("Missing dsn option in showReportDialog call"); else It && o.kg.error("Missing eventId option in showReportDialog call")
                    }((0, i.pi)((0, i.pi)({}, t), {dsn: t.dsn || this.getDsn()})) : It && o.kg.error("Trying to call showReportDialog with Sentry Client disabled"))
                }, e.prototype._prepareEvent = function (e, n, r) {
                    return e.platform = e.platform || "javascript", t.prototype._prepareEvent.call(this, e, n, r)
                }, e.prototype._sendEvent = function (e) {
                    var n = this.getIntegration(Xt);
                    n && n.addSentryBreadcrumb(e), t.prototype._sendEvent.call(this, e)
                }, e
            }(A),
            Qt = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
            te = function () {
                function t(e) {
                    this.name = t.id, this._options = (0, i.pi)({
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0
                    }, e)
                }

                return t.prototype.setupOnce = function () {
                    var t = (0, g.R)();
                    this._options.setTimeout && (0, h.hl)(t, "setTimeout", ee), this._options.setInterval && (0, h.hl)(t, "setInterval", ee), this._options.requestAnimationFrame && (0, h.hl)(t, "requestAnimationFrame", ne), this._options.XMLHttpRequest && "XMLHttpRequest" in t && (0, h.hl)(XMLHttpRequest.prototype, "send", re);
                    var e = this._options.eventTarget;
                    e && (Array.isArray(e) ? e : Qt).forEach(ie)
                }, t.id = "TryCatch", t
            }();

        function ee(t) {
            return function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                var r = e[0];
                return e[0] = Ut(r, {
                    mechanism: {
                        data: {function: (0, I.$P)(t)},
                        handled: !0,
                        type: "instrument"
                    }
                }), t.apply(this, e)
            }
        }

        function ne(t) {
            return function (e) {
                return t.apply(this, [Ut(e, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: (0, I.$P)(t)
                        }, handled: !0, type: "instrument"
                    }
                })])
            }
        }

        function re(t) {
            return function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                var r = this, i = ["onload", "onerror", "onprogress", "onreadystatechange"];
                return i.forEach((function (t) {
                    t in r && "function" == typeof r[t] && (0, h.hl)(r, t, (function (e) {
                        var n = {
                            mechanism: {
                                data: {function: t, handler: (0, I.$P)(e)},
                                handled: !0,
                                type: "instrument"
                            }
                        }, r = (0, h.HK)(e);
                        return r && (n.mechanism.data.handler = (0, I.$P)(r)), Ut(e, n)
                    }))
                })), t.apply(this, e)
            }
        }

        function ie(t) {
            var e = (0, g.R)(), n = e[t] && e[t].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, h.hl)(n, "addEventListener", (function (e) {
                return function (n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = Ut(r.handleEvent.bind(r), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: (0, I.$P)(r),
                                    target: t
                                }, handled: !0, type: "instrument"
                            }
                        }))
                    } catch (t) {
                    }
                    return e.apply(this, [n, Ut(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: (0, I.$P)(r),
                                target: t
                            }, handled: !0, type: "instrument"
                        }
                    }), i])
                }
            })), (0, h.hl)(n, "removeEventListener", (function (t) {
                return function (e, n, r) {
                    var i = n;
                    try {
                        var o = i && i.__sentry_wrapped__;
                        o && t.call(this, e, o, r)
                    } catch (t) {
                    }
                    return t.call(this, e, i, r)
                }
            })))
        }

        var oe = function () {
            function t(e) {
                this.name = t.id, this._installFunc = {
                    onerror: ae,
                    onunhandledrejection: se
                }, this._options = (0, i.pi)({onerror: !0, onunhandledrejection: !0}, e)
            }

            return t.prototype.setupOnce = function () {
                Error.stackTraceLimit = 50;
                var t, e = this._options;
                for (var n in e) {
                    var r = this._installFunc[n];
                    r && e[n] && (t = n, It && o.kg.log("Global Handler attached: " + t), r(), this._installFunc[n] = void 0)
                }
            }, t.id = "GlobalHandlers", t
        }();

        function ae() {
            (0, y.o)("error", (function (t) {
                var e = (0, i.CR)(pe(), 2), n = e[0], r = e[1];
                if (n.getIntegration(oe)) {
                    var o = t.msg, a = t.url, s = t.line, u = t.column, c = t.error;
                    if (!(Wt() || c && c.__sentry_own_request__)) {
                        var p = void 0 === c && (0, O.HD)(o) ? function (t, e, n, r) {
                            var i = (0, O.VW)(t) ? t.message : t, o = "Error",
                                a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                            return a && (o = a[1], i = a[2]), ue({exception: {values: [{type: o, value: i}]}}, e, n, r)
                        }(o, a, s, u) : ue(bt(c || o, void 0, r, !1), a, s, u);
                        p.level = K.Error, ce(n, c, p, "onerror")
                    }
                }
            }))
        }

        function se() {
            (0, y.o)("unhandledrejection", (function (t) {
                var e = (0, i.CR)(pe(), 2), n = e[0], r = e[1];
                if (n.getIntegration(oe)) {
                    var o = t;
                    try {
                        "reason" in t ? o = t.reason : "detail" in t && "reason" in t.detail && (o = t.detail.reason)
                    } catch (t) {
                    }
                    if (Wt() || o && o.__sentry_own_request__) return !0;
                    var a = (0, O.pt)(o) ? {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: "Non-Error promise rejection captured with value: " + String(o)
                            }]
                        }
                    } : bt(o, void 0, r, !0);
                    a.level = K.Error, ce(n, o, a, "onunhandledrejection")
                }
            }))
        }

        function ue(t, e, n, r) {
            var i = t.exception = t.exception || {}, o = i.values = i.values || [], a = o[0] = o[0] || {},
                s = a.stacktrace = a.stacktrace || {}, u = s.frames = s.frames || [],
                c = isNaN(parseInt(r, 10)) ? void 0 : r, p = isNaN(parseInt(n, 10)) ? void 0 : n,
                f = (0, O.HD)(e) && e.length > 0 ? e : (0, zt.l)();
            return 0 === u.length && u.push({colno: c, filename: f, function: "?", in_app: !0, lineno: p}), t
        }

        function ce(t, e, n, r) {
            (0, a.EG)(n, {handled: !1, type: r}), t.captureEvent(n, {originalException: e})
        }

        function pe() {
            var t = (0, m.Gd)(), e = t.getClient();
            return [t, e && e.getOptions().attachStacktrace]
        }

        var fe = function () {
            function t(e) {
                void 0 === e && (e = {}), this.name = t.id, this._key = e.key || "cause", this._limit = e.limit || 5
            }

            return t.prototype.setupOnce = function () {
                (0, _.c)((function (e, n) {
                    var r = (0, m.Gd)().getIntegration(t);
                    return r ? function (t, e, n, r) {
                        if (!(n.exception && n.exception.values && r && (0, O.V9)(r.originalException, Error))) return n;
                        var o = de(e, r.originalException, t);
                        return n.exception.values = (0, i.fl)(o, n.exception.values), n
                    }(r._key, r._limit, e, n) : e
                }))
            }, t.id = "LinkedErrors", t
        }();

        function de(t, e, n, r) {
            if (void 0 === r && (r = []), !(0, O.V9)(e[n], Error) || r.length + 1 >= t) return r;
            var o = vt(e[n]);
            return de(t, e[n], n, (0, i.fl)([o], r))
        }

        var le = function () {
            function t() {
                this.name = t.id
            }

            return t.prototype.setupOnce = function (e, n) {
                e((function (e) {
                    var r = n().getIntegration(t);
                    if (r) {
                        try {
                            if (function (t, e) {
                                return !!e && (!!function (t, e) {
                                    var n = t.message, r = e.message;
                                    return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!ve(t, e) && !!he(t, e))))
                                }(t, e) || !!function (t, e) {
                                    var n = me(e), r = me(t);
                                    return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!ve(t, e) && !!he(t, e)))
                                }(t, e))
                            }(e, r._previousEvent)) return It && o.kg.warn("Event dropped due to being a duplicate of previously captured event."), null
                        } catch (t) {
                            return r._previousEvent = e
                        }
                        return r._previousEvent = e
                    }
                    return e
                }))
            }, t.id = "Dedupe", t
        }();

        function he(t, e) {
            var n = ge(t), r = ge(e);
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            if (r.length !== n.length) return !1;
            for (var i = 0; i < r.length; i++) {
                var o = r[i], a = n[i];
                if (o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function) return !1
            }
            return !0
        }

        function ve(t, e) {
            var n = t.fingerprint, r = e.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (t) {
                return !1
            }
        }

        function me(t) {
            return t.exception && t.exception.values && t.exception.values[0]
        }

        function ge(t) {
            var e = t.exception;
            if (e) try {
                return e.values[0].stacktrace.frames
            } catch (t) {
                return
            } else if (t.stacktrace) return t.stacktrace.frames
        }

        var ye = (0, g.R)(), _e = function () {
            function t() {
                this.name = t.id
            }

            return t.prototype.setupOnce = function () {
                (0, _.c)((function (e) {
                    if ((0, m.Gd)().getIntegration(t)) {
                        if (!ye.navigator && !ye.location && !ye.document) return e;
                        var n = e.request && e.request.url || ye.location && ye.location.href,
                            r = (ye.document || {}).referrer, o = (ye.navigator || {}).userAgent,
                            a = (0, i.pi)((0, i.pi)((0, i.pi)({}, e.request && e.request.headers), r && {Referer: r}), o && {"User-Agent": o}),
                            s = (0, i.pi)((0, i.pi)({}, n && {url: n}), {headers: a});
                        return (0, i.pi)((0, i.pi)({}, e), {request: s})
                    }
                    return e
                }))
            }, t.id = "UserAgent", t
        }(), be = [new p, new v, new te, new Xt, new oe, new fe, new le, new _e];

        function xe(t) {
            t.startSession({ignoreDuration: !0}), t.captureSession()
        }

        function Se(t) {
            t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                name: "sentry.javascript.react",
                packages: [{name: "npm:@sentry/react", version: r}],
                version: r
            }, function (t) {
                if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = be), void 0 === t.release) {
                    var e = (0, g.R)();
                    e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
                }
                void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0), function (t, e) {
                    !0 === e.debug && (u ? o.kg.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                    var n = (0, m.Gd)(), r = n.getScope();
                    r && r.update(e.initialScope);
                    var i = new t(e);
                    n.bindClient(i)
                }(Zt, t), t.autoSessionTracking && function () {
                    if (void 0 !== (0, g.R)().document) {
                        var t = (0, m.Gd)();
                        t.captureSession && (xe(t), (0, y.o)("history", (function (t) {
                            var e = t.from, n = t.to;
                            void 0 !== e && e !== n && xe((0, m.Gd)())
                        })))
                    } else It && o.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")
                }()
            }(t)
        }
    }, 6285: function (t, e, n) {
        "use strict";
        n.d(e, {
            d: function () {
                return r
            }, x: function () {
                return i
            }
        });
        var r = "finishReason", i = ["heartbeatFailed", "idleTimeout", "documentHidden"]
    }, 7280: function (t, e, n) {
        "use strict";
        n.d(e, {
            h: function () {
                return r
            }
        });
        var r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    }, 4277: function (t, e, n) {
        "use strict";
        n.d(e, {
            ro: function () {
                return y
            }, lb: function () {
                return g
            }
        });
        var r = n(3940), i = n(3228), o = n(1182), a = n(6353), s = n(8509), u = n(7390), c = n(7280), p = n(4510);

        function f() {
            var t = (0, p.x1)();
            if (t) {
                var e = "internal_error";
                c.h && o.kg.log("[Tracing] Transaction: " + e + " -> Global error occured"), t.setStatus(e)
            }
        }

        var d = n(2640), l = n(4923);

        function h() {
            var t = this.getScope();
            if (t) {
                var e = t.getSpan();
                if (e) return {"sentry-trace": e.toTraceparent()}
            }
            return {}
        }

        function v(t, e, n) {
            return (0, p.zu)(e) ? void 0 !== t.sampled ? (t.setMetadata({transactionSampling: {method: "explicitly_set"}}), t) : ("function" == typeof e.tracesSampler ? (i = e.tracesSampler(n), t.setMetadata({
                transactionSampling: {
                    method: "client_sampler",
                    rate: Number(i)
                }
            })) : void 0 !== n.parentSampled ? (i = n.parentSampled, t.setMetadata({transactionSampling: {method: "inheritance"}})) : (i = e.tracesSampleRate, t.setMetadata({
                transactionSampling: {
                    method: "client_rate",
                    rate: Number(i)
                }
            })), r = i, ((0, a.i2)(r) || "number" != typeof r && "boolean" != typeof r ? (c.h && o.kg.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(r) + " of type " + JSON.stringify(typeof r) + "."), 0) : !(r < 0 || r > 1) || (c.h && o.kg.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + r + "."), 0)) ? i ? (t.sampled = Math.random() < i, t.sampled ? (c.h && o.kg.log("[Tracing] starting " + t.op + " transaction - " + t.name), t) : (c.h && o.kg.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(i) + ")"), t)) : (c.h && o.kg.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), t.sampled = !1, t) : (c.h && o.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t)) : (t.sampled = !1, t);
            var r, i
        }

        function m(t, e) {
            var n = this.getClient(), i = n && n.getOptions() || {}, o = new l.Y(t, this);
            return (o = v(o, i, (0, r.pi)({
                parentSampled: t.parentSampled,
                transactionContext: t
            }, e))).sampled && o.initSpanRecorder(i._experiments && i._experiments.maxSpans), o
        }

        function g(t, e, n, i, o) {
            var a = t.getClient(), s = a && a.getOptions() || {}, u = new d.io(e, t, n, i);
            return (u = v(u, s, (0, r.pi)({
                parentSampled: e.parentSampled,
                transactionContext: e
            }, o))).sampled && u.initSpanRecorder(s._experiments && s._experiments.maxSpans), u
        }

        function y() {
            var e;
            (e = (0, i.cu)()).__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}, e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = m), e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = h)), (0, s.KV)() && function () {
                var e = (0, i.cu)();
                if (e.__SENTRY__) {
                    var n = {
                        mongodb: function () {
                            return new ((0, s.l$)(t, "./integrations/node/mongo").Mongo)
                        }, mongoose: function () {
                            return new ((0, s.l$)(t, "./integrations/node/mongo").Mongo)({mongoose: !0})
                        }, mysql: function () {
                            return new ((0, s.l$)(t, "./integrations/node/mysql").Mysql)
                        }, pg: function () {
                            return new ((0, s.l$)(t, "./integrations/node/postgres").Postgres)
                        }
                    }, o = Object.keys(n).filter((function (t) {
                        return !!(0, s.$y)(t)
                    })).map((function (t) {
                        try {
                            return n[t]()
                        } catch (t) {
                            return
                        }
                    })).filter((function (t) {
                        return t
                    }));
                    o.length > 0 && (e.__SENTRY__.integrations = (0, r.fl)(e.__SENTRY__.integrations || [], o))
                }
            }(), (0, u.o)("error", f), (0, u.o)("unhandledrejection", f)
        }

        t = n.hmd(t)
    }, 2640: function (t, e, n) {
        "use strict";
        n.d(e, {
            io: function () {
                return d
            }, nT: function () {
                return p
            }
        });
        var r = n(3940), i = n(6400), o = n(1182), a = n(6285), s = n(7280), u = n(4012), c = n(4923), p = 1e3,
            f = function (t) {
                function e(e, n, r, i) {
                    void 0 === r && (r = "");
                    var o = t.call(this, i) || this;
                    return o._pushActivity = e, o._popActivity = n, o.transactionSpanId = r, o
                }

                return (0, r.ZT)(e, t), e.prototype.add = function (e) {
                    var n = this;
                    e.spanId !== this.transactionSpanId && (e.finish = function (t) {
                        e.endTimestamp = "number" == typeof t ? t : (0, i._I)(), n._popActivity(e.spanId)
                    }, void 0 === e.endTimestamp && this._pushActivity(e.spanId)), t.prototype.add.call(this, e)
                }, e
            }(u.gB), d = function (t) {
                function e(e, n, r, i) {
                    void 0 === r && (r = p), void 0 === i && (i = !1);
                    var a = t.call(this, e, n) || this;
                    return a._idleHub = n, a._idleTimeout = r, a._onScope = i, a.activities = {}, a._heartbeatCounter = 0, a._finished = !1, a._beforeFinishCallbacks = [], n && i && (l(n), s.h && o.kg.log("Setting idle transaction on scope. Span ID: " + a.spanId), n.configureScope((function (t) {
                        return t.setSpan(a)
                    }))), a._initTimeout = setTimeout((function () {
                        a._finished || a.finish()
                    }), a._idleTimeout), a
                }

                return (0, r.ZT)(e, t), e.prototype.finish = function (e) {
                    var n, a, u = this;
                    if (void 0 === e && (e = (0, i._I)()), this._finished = !0, this.activities = {}, this.spanRecorder) {
                        s.h && o.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
                        try {
                            for (var c = (0, r.XA)(this._beforeFinishCallbacks), p = c.next(); !p.done; p = c.next()) (0, p.value)(this, e)
                        } catch (t) {
                            n = {error: t}
                        } finally {
                            try {
                                p && !p.done && (a = c.return) && a.call(c)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        this.spanRecorder.spans = this.spanRecorder.spans.filter((function (t) {
                            if (t.spanId === u.spanId) return !0;
                            t.endTimestamp || (t.endTimestamp = e, t.setStatus("cancelled"), s.h && o.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(t, void 0, 2)));
                            var n = t.startTimestamp < e;
                            return n || s.h && o.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(t, void 0, 2)), n
                        })), s.h && o.kg.log("[Tracing] flushing IdleTransaction")
                    } else s.h && o.kg.log("[Tracing] No active IdleTransaction");
                    return this._onScope && l(this._idleHub), t.prototype.finish.call(this, e)
                }, e.prototype.registerBeforeFinishCallback = function (t) {
                    this._beforeFinishCallbacks.push(t)
                }, e.prototype.initSpanRecorder = function (t) {
                    var e = this;
                    this.spanRecorder || (this.spanRecorder = new f((function (t) {
                        e._finished || e._pushActivity(t)
                    }), (function (t) {
                        e._finished || e._popActivity(t)
                    }), this.spanId, t), s.h && o.kg.log("Starting heartbeat"), this._pingHeartbeat()), this.spanRecorder.add(this)
                }, e.prototype._pushActivity = function (t) {
                    this._initTimeout && (clearTimeout(this._initTimeout), this._initTimeout = void 0), s.h && o.kg.log("[Tracing] pushActivity: " + t), this.activities[t] = !0, s.h && o.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)
                }, e.prototype._popActivity = function (t) {
                    var e = this;
                    if (this.activities[t] && (s.h && o.kg.log("[Tracing] popActivity " + t), delete this.activities[t], s.h && o.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
                        var n = this._idleTimeout, r = (0, i._I)() + n / 1e3;
                        setTimeout((function () {
                            e._finished || (e.setTag(a.d, a.x[1]), e.finish(r))
                        }), n)
                    }
                }, e.prototype._beat = function () {
                    if (!this._finished) {
                        var t = Object.keys(this.activities).join("");
                        t === this._prevHeartbeatString ? this._heartbeatCounter += 1 : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? (s.h && o.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this.setTag(a.d, a.x[0]), this.finish()) : this._pingHeartbeat()
                    }
                }, e.prototype._pingHeartbeat = function () {
                    var t = this;
                    s.h && o.kg.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter), setTimeout((function () {
                        t._beat()
                    }), 5e3)
                }, e
            }(c.Y);

        function l(t) {
            if (t) {
                var e = t.getScope();
                e && e.getTransaction() && e.setSpan(void 0)
            }
        }
    }, 2913: function (t, e, n) {
        "use strict";
        n.d(e, {
            jK: function () {
                return r
            }
        });
        var r = {};
        n.r(r), n.d(r, {
            gE: function () {
                return j
            }
        });
        var i = n(4277), o = n(3940), a = n(1182), s = n(6626), u = n(7280), c = n(2640), p = n(4510),
            f = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"), d = n(6285), l = (0, s.R)(),
            h = n(8509), v = n(6400), m = n(4236), g = function (t, e, n) {
                var r;
                return function (i) {
                    e.value >= 0 && (i || n) && (e.delta = e.value - (r || 0), (e.delta || void 0 === r) && (r = e.value, t(e)))
                }
            }, y = function (t, e) {
                return {
                    name: t,
                    value: null != e ? e : -1,
                    delta: 0,
                    entries: [],
                    id: "v2-" + Date.now() + "-" + (Math.floor(8999999999999 * Math.random()) + 1e12)
                }
            }, _ = function (t, e) {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                        if ("first-input" === t && !("PerformanceEventTiming" in self)) return;
                        var n = new PerformanceObserver((function (t) {
                            return t.getEntries().map(e)
                        }));
                        return n.observe({type: t, buffered: !0}), n
                    }
                } catch (t) {
                }
            }, b = function (t, e) {
                var n = function (r) {
                    "pagehide" !== r.type && "hidden" !== (0, s.R)().document.visibilityState || (t(r), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                };
                addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
            }, x = -1, S = function () {
                return x < 0 && (x = "hidden" === (0, s.R)().document.visibilityState ? 0 : 1 / 0, b((function (t) {
                    var e = t.timeStamp;
                    x = e
                }), !0)), {
                    get firstHiddenTime() {
                        return x
                    }
                }
            }, T = {}, w = (0, s.R)(), E = function () {
                function t(t) {
                    void 0 === t && (t = !1), this._reportAllChanges = t, this._measurements = {}, this._performanceCursor = 0, !(0, h.KV)() && w && w.performance && w.document && (w.performance.mark && w.performance.mark("sentry-tracing-init"), this._trackCLS(), this._trackLCP(), this._trackFID())
                }

                return t.prototype.addPerformanceEntries = function (t) {
                    var e = this;
                    if (w && w.performance && w.performance.getEntries && v.Z1) {
                        u.h && a.kg.log("[Tracing] Adding & adjusting spans using Performance API");
                        var n, r, i = (0, p.XL)(v.Z1);
                        if (w.performance.getEntries().slice(this._performanceCursor).forEach((function (o) {
                            var s = (0, p.XL)(o.startTime), c = (0, p.XL)(o.duration);
                            if (!("navigation" === t.op && i + s < t.startTimestamp)) switch (o.entryType) {
                                case"navigation":
                                    !function (t, e, n) {
                                        ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((function (r) {
                                            k(t, e, r, n)
                                        })), k(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), k(t, e, "fetch", n, "cache", "domainLookupStart"), k(t, e, "domainLookup", n, "DNS"), function (t, e, n) {
                                            O(t, {
                                                op: "browser",
                                                description: "request",
                                                startTimestamp: n + (0, p.XL)(e.requestStart),
                                                endTimestamp: n + (0, p.XL)(e.responseEnd)
                                            }), O(t, {
                                                op: "browser",
                                                description: "response",
                                                startTimestamp: n + (0, p.XL)(e.responseStart),
                                                endTimestamp: n + (0, p.XL)(e.responseEnd)
                                            })
                                        }(t, e, n)
                                    }(t, o, i), n = i + (0, p.XL)(o.responseStart), r = i + (0, p.XL)(o.requestStart);
                                    break;
                                case"mark":
                                case"paint":
                                case"measure":
                                    var f = function (t, e, n, r, i) {
                                        var o = i + n, a = o + r;
                                        return O(t, {
                                            description: e.name,
                                            endTimestamp: a,
                                            op: e.entryType,
                                            startTimestamp: o
                                        }), o
                                    }(t, o, s, c, i), d = S(), l = o.startTime < d.firstHiddenTime;
                                    "first-paint" === o.name && l && (u.h && a.kg.log("[Measurements] Adding FP"), e._measurements.fp = {value: o.startTime}, e._measurements["mark.fp"] = {value: f}), "first-contentful-paint" === o.name && l && (u.h && a.kg.log("[Measurements] Adding FCP"), e._measurements.fcp = {value: o.startTime}, e._measurements["mark.fcp"] = {value: f});
                                    break;
                                case"resource":
                                    var h = o.name.replace(w.location.origin, "");
                                    !function (t, e, n, r, i, o) {
                                        if ("xmlhttprequest" !== e.initiatorType && "fetch" !== e.initiatorType) {
                                            var a = {};
                                            "transferSize" in e && (a["Transfer Size"] = e.transferSize), "encodedBodySize" in e && (a["Encoded Body Size"] = e.encodedBodySize), "decodedBodySize" in e && (a["Decoded Body Size"] = e.decodedBodySize);
                                            var s = o + r;
                                            O(t, {
                                                description: n,
                                                endTimestamp: s + i,
                                                op: e.initiatorType ? "resource." + e.initiatorType : "resource",
                                                startTimestamp: s,
                                                data: a
                                            })
                                        }
                                    }(t, o, h, s, c, i)
                            }
                        })), this._performanceCursor = Math.max(performance.getEntries().length - 1, 0), this._trackNavigator(t), "pageload" === t.op) {
                            var o = (0, p.XL)(v.Z1);
                            "number" == typeof n && (u.h && a.kg.log("[Measurements] Adding TTFB"), this._measurements.ttfb = {value: 1e3 * (n - t.startTimestamp)}, "number" == typeof r && r <= n && (this._measurements["ttfb.requestTime"] = {value: 1e3 * (n - r)})), ["fcp", "fp", "lcp"].forEach((function (n) {
                                if (e._measurements[n] && !(o >= t.startTimestamp)) {
                                    var r = e._measurements[n].value, i = o + (0, p.XL)(r),
                                        s = Math.abs(1e3 * (i - t.startTimestamp)), c = s - r;
                                    u.h && a.kg.log("[Measurements] Normalized " + n + " from " + r + " to " + s + " (" + c + ")"), e._measurements[n].value = s
                                }
                            })), this._measurements["mark.fid"] && this._measurements.fid && O(t, {
                                description: "first input delay",
                                endTimestamp: this._measurements["mark.fid"].value + (0, p.XL)(this._measurements.fid.value),
                                op: "web.vitals",
                                startTimestamp: this._measurements["mark.fid"].value
                            }), "fcp" in this._measurements || delete this._measurements.cls, t.setMeasurements(this._measurements), function (t, e, n) {
                                e && (u.h && a.kg.log("[Measurements] Adding LCP Data"), e.element && t.setTag("lcp.element", (0, m.R)(e.element)), e.id && t.setTag("lcp.id", e.id), e.url && t.setTag("lcp.url", e.url.trim().slice(0, 200)), t.setTag("lcp.size", e.size)), n && n.sources && (u.h && a.kg.log("[Measurements] Adding CLS Data"), n.sources.forEach((function (e, n) {
                                    return t.setTag("cls.source." + (n + 1), (0, m.R)(e.node))
                                })))
                            }(t, this._lcpEntry, this._clsEntry), t.setTag("sentry_reportAllChanges", this._reportAllChanges)
                        }
                    }
                }, t.prototype._trackNavigator = function (t) {
                    var e = w.navigator;
                    if (e) {
                        var n = e.connection;
                        n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), R(n.rtt) && (this._measurements["connection.rtt"] = {value: n.rtt}), R(n.downlink) && (this._measurements["connection.downlink"] = {value: n.downlink})), R(e.deviceMemory) && t.setTag("deviceMemory", String(e.deviceMemory)), R(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                    }
                }, t.prototype._trackCLS = function () {
                    var t, e, n, r, i, o, s, c = this;
                    t = function (t) {
                        var e = t.entries.pop();
                        e && (u.h && a.kg.log("[Measurements] Adding CLS"), c._measurements.cls = {value: t.value}, c._clsEntry = e)
                    }, n = y("CLS", 0), r = 0, i = [], (s = _("layout-shift", o = function (t) {
                        if (t && !t.hadRecentInput) {
                            var o = i[0], a = i[i.length - 1];
                            r && 0 !== i.length && t.startTime - a.startTime < 1e3 && t.startTime - o.startTime < 5e3 ? (r += t.value, i.push(t)) : (r = t.value, i = [t]), r > n.value && (n.value = r, n.entries = i, e && e())
                        }
                    })) && (e = g(t, n, undefined), b((function () {
                        s.takeRecords().map(o), e(!0)
                    })))
                }, t.prototype._trackLCP = function () {
                    var t = this;
                    !function (e, n) {
                        var r, i = S(), o = y("LCP"), s = function (t) {
                            var e = t.startTime;
                            e < i.firstHiddenTime && (o.value = e, o.entries.push(t)), r && r()
                        }, c = _("largest-contentful-paint", s);
                        if (c) {
                            r = g((function (e) {
                                var n = e.entries.pop();
                                if (n) {
                                    var r = (0, p.XL)(v.Z1), i = (0, p.XL)(n.startTime);
                                    u.h && a.kg.log("[Measurements] Adding LCP"), t._measurements.lcp = {value: e.value}, t._measurements["mark.lcp"] = {value: r + i}, t._lcpEntry = n
                                }
                            }), o, n);
                            var f = function () {
                                T[o.id] || (c.takeRecords().map(s), c.disconnect(), T[o.id] = !0, r(!0))
                            };
                            ["keydown", "click"].forEach((function (t) {
                                addEventListener(t, f, {once: !0, capture: !0})
                            })), b(f, !0)
                        }
                    }(0, this._reportAllChanges)
                }, t.prototype._trackFID = function () {
                    var t, e, n, r, i, o, s = this;
                    t = function (t) {
                        var e = t.entries.pop();
                        if (e) {
                            var n = (0, p.XL)(v.Z1), r = (0, p.XL)(e.startTime);
                            u.h && a.kg.log("[Measurements] Adding FID"), s._measurements.fid = {value: t.value}, s._measurements["mark.fid"] = {value: n + r}
                        }
                    }, n = S(), r = y("FID"), (o = _("first-input", i = function (t) {
                        e && t.startTime < n.firstHiddenTime && (r.value = t.processingStart - t.startTime, r.entries.push(t), e(!0))
                    })) && (e = g(t, r, undefined), b((function () {
                        o.takeRecords().map(i), o.disconnect()
                    }), !0))
                }, t
            }();

        function k(t, e, n, r, i, o) {
            var a = o ? e[o] : e[n + "End"], s = e[n + "Start"];
            s && a && O(t, {
                op: "browser",
                description: null != i ? i : n,
                startTimestamp: r + (0, p.XL)(s),
                endTimestamp: r + (0, p.XL)(a)
            })
        }

        function O(t, e) {
            var n = e.startTimestamp, r = (0, o._T)(e, ["startTimestamp"]);
            return n && t.startTimestamp > n && (t.startTimestamp = n), t.startChild((0, o.pi)({startTimestamp: n}, r))
        }

        function R(t) {
            return "number" == typeof t && isFinite(t)
        }

        var C = n(7291), I = n(7390), L = n(6353),
            N = {traceFetch: !0, traceXHR: !0, tracingOrigins: ["localhost", /^\//]};
        var D = (0, s.R)(), P = (0, o.pi)({
            idleTimeout: c.nT,
            markBackgroundTransactions: !0,
            maxTransactionDuration: 600,
            routingInstrumentation: function (t, e, n) {
                if (void 0 === e && (e = !0), void 0 === n && (n = !0), D && D.location) {
                    var r, i = D.location.href;
                    e && (r = t({name: D.location.pathname, op: "pageload"})), n && (0, I.o)("history", (function (e) {
                        var n = e.to, o = e.from;
                        void 0 === o && i && -1 !== i.indexOf(n) ? i = void 0 : o !== n && (i = void 0, r && (u.h && a.kg.log("[Tracing] Finishing current transaction with op: " + r.op), r.finish()), r = t({
                            name: D.location.pathname,
                            op: "navigation"
                        }))
                    }))
                } else u.h && a.kg.warn("Could not initialize routing instrumentation due to invalid location")
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0
        }, N), j = function () {
            function t(e) {
                this.name = t.id, this._configuredIdleTimeout = void 0;
                var n = N.tracingOrigins;
                e && (this._configuredIdleTimeout = e.idleTimeout, e.tracingOrigins && Array.isArray(e.tracingOrigins) && 0 !== e.tracingOrigins.length ? n = e.tracingOrigins : u.h && (this._emitOptionsWarning = !0)), this.options = (0, o.pi)((0, o.pi)((0, o.pi)({}, P), e), {tracingOrigins: n});
                var r = this.options._metricOptions;
                this._metrics = new E(r && r._reportAllChanges)
            }

            return t.prototype.setupOnce = function (t, e) {
                var n = this;
                this._getCurrentHub = e, this._emitOptionsWarning && (u.h && a.kg.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."), u.h && a.kg.warn("[Tracing] We added a reasonable default for you: " + N.tracingOrigins));
                var r = this.options, i = r.routingInstrumentation, s = r.startTransactionOnLocationChange,
                    c = r.startTransactionOnPageLoad, f = r.markBackgroundTransactions, h = r.traceFetch,
                    v = r.traceXHR, m = r.tracingOrigins, g = r.shouldCreateSpanForRequest;
                i((function (t) {
                    return n._createRouteTransaction(t)
                }), c, s), f && (l && l.document ? l.document.addEventListener("visibilitychange", (function () {
                    var t = (0, p.x1)();
                    if (l.document.hidden && t) {
                        u.h && a.kg.log("[Tracing] Transaction: cancelled -> since tab moved to the background, op: " + t.op), t.status || t.setStatus("cancelled"), t.setTag("visibilitychange", "document.hidden"), t.setTag(d.d, d.x[2]), t.finish()
                    }
                })) : u.h && a.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")), function (t) {
                    var e = (0, o.pi)((0, o.pi)({}, N), t), n = e.traceFetch, r = e.traceXHR, i = e.tracingOrigins,
                        a = e.shouldCreateSpanForRequest, s = {}, u = function (t) {
                            if (s[t]) return s[t];
                            var e = i;
                            return s[t] = e.some((function (e) {
                                return (0, C.zC)(t, e)
                            })) && !(0, C.zC)(t, "sentry_key"), s[t]
                        }, c = u;
                    "function" == typeof a && (c = function (t) {
                        return u(t) && a(t)
                    });
                    var f = {};
                    n && (0, I.o)("fetch", (function (t) {
                        !function (t, e, n) {
                            if ((0, p.zu)() && t.fetchData && e(t.fetchData.url)) if (t.endTimestamp) {
                                var r = t.fetchData.__span;
                                if (!r) return;
                                (a = n[r]) && (t.response ? a.setHttpStatus(t.response.status) : t.error && a.setStatus("internal_error"), a.finish(), delete n[r])
                            } else {
                                var i = (0, p.x1)();
                                if (i) {
                                    var a = i.startChild({
                                        data: (0, o.pi)((0, o.pi)({}, t.fetchData), {type: "fetch"}),
                                        description: t.fetchData.method + " " + t.fetchData.url,
                                        op: "http.client"
                                    });
                                    t.fetchData.__span = a.spanId, n[a.spanId] = a;
                                    var s = t.args[0] = t.args[0], u = t.args[1] = t.args[1] || {}, c = u.headers;
                                    (0, L.V9)(s, Request) && (c = s.headers), c ? "function" == typeof c.append ? c.append("sentry-trace", a.toTraceparent()) : c = Array.isArray(c) ? (0, o.fl)(c, [["sentry-trace", a.toTraceparent()]]) : (0, o.pi)((0, o.pi)({}, c), {"sentry-trace": a.toTraceparent()}) : c = {"sentry-trace": a.toTraceparent()}, u.headers = c
                                }
                            }
                        }(t, c, f)
                    })), r && (0, I.o)("xhr", (function (t) {
                        !function (t, e, n) {
                            if (!(!(0, p.zu)() || t.xhr && t.xhr.__sentry_own_request__) && t.xhr && t.xhr.__sentry_xhr__ && e(t.xhr.__sentry_xhr__.url)) {
                                var r = t.xhr.__sentry_xhr__;
                                if (t.endTimestamp) {
                                    var i = t.xhr.__sentry_xhr_span_id__;
                                    if (!i) return;
                                    (s = n[i]) && (s.setHttpStatus(r.status_code), s.finish(), delete n[i])
                                } else {
                                    var a = (0, p.x1)();
                                    if (a) {
                                        var s = a.startChild({
                                            data: (0, o.pi)((0, o.pi)({}, r.data), {
                                                type: "xhr",
                                                method: r.method,
                                                url: r.url
                                            }), description: r.method + " " + r.url, op: "http.client"
                                        });
                                        if (t.xhr.__sentry_xhr_span_id__ = s.spanId, n[t.xhr.__sentry_xhr_span_id__] = s, t.xhr.setRequestHeader) try {
                                            t.xhr.setRequestHeader("sentry-trace", s.toTraceparent())
                                        } catch (t) {
                                        }
                                    }
                                }
                            }
                        }(t, c, f)
                    }))
                }({traceFetch: h, traceXHR: v, tracingOrigins: m, shouldCreateSpanForRequest: g})
            }, t.prototype._createRouteTransaction = function (t) {
                var e = this;
                if (this._getCurrentHub) {
                    var n = this.options, r = n.beforeNavigate, c = n.idleTimeout, d = n.maxTransactionDuration,
                        l = "pageload" === t.op ? function () {
                            var t,
                                e = ("sentry-trace", (t = (0, s.R)().document.querySelector("meta[name=sentry-trace]")) ? t.getAttribute("content") : null);
                            if (e) return function (t) {
                                var e = t.match(f);
                                if (e) {
                                    var n = void 0;
                                    return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1), {
                                        traceId: e[1],
                                        parentSampled: n,
                                        parentSpanId: e[2]
                                    }
                                }
                            }(e)
                        }() : void 0, h = (0, o.pi)((0, o.pi)((0, o.pi)({}, t), l), {trimEnd: !0}),
                        v = "function" == typeof r ? r(h) : h,
                        m = void 0 === v ? (0, o.pi)((0, o.pi)({}, h), {sampled: !1}) : v;
                    !1 === m.sampled && u.h && a.kg.log("[Tracing] Will not send " + m.op + " transaction because of beforeNavigate."), u.h && a.kg.log("[Tracing] Starting " + m.op + " transaction on scope");
                    var g = this._getCurrentHub(), y = (0, s.R)().location, _ = (0, i.lb)(g, m, c, !0, {location: y});
                    return _.registerBeforeFinishCallback((function (t, n) {
                        e._metrics.addPerformanceEntries(t), function (t, e, n) {
                            var r = n - e.startTimestamp;
                            n && (r > t || r < 0) && (e.setStatus("deadline_exceeded"), e.setTag("maxTransactionDurationExceeded", "true"))
                        }((0, p.WB)(d), t, n)
                    })), _.setTag("idleTimeout", this._configuredIdleTimeout), _
                }
                u.h && a.kg.warn("[Tracing] Did not create " + t.op + " transaction because _getCurrentHub is invalid.")
            }, t.id = "BrowserTracing", t
        }();
        (0, i.ro)()
    }, 4012: function (t, e, n) {
        "use strict";
        n.d(e, {
            Dr: function () {
                return u
            }, gB: function () {
                return s
            }
        });
        var r = n(3940), i = n(4379), o = n(6400), a = n(8863), s = function () {
            function t(t) {
                void 0 === t && (t = 1e3), this.spans = [], this._maxlen = t
            }

            return t.prototype.add = function (t) {
                this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
            }, t
        }(), u = function () {
            function t(t) {
                if (this.traceId = (0, i.DM)(), this.spanId = (0, i.DM)().substring(16), this.startTimestamp = (0, o._I)(), this.tags = {}, this.data = {}, !t) return this;
                t.traceId && (this.traceId = t.traceId), t.spanId && (this.spanId = t.spanId), t.parentSpanId && (this.parentSpanId = t.parentSpanId), "sampled" in t && (this.sampled = t.sampled), t.op && (this.op = t.op), t.description && (this.description = t.description), t.data && (this.data = t.data), t.tags && (this.tags = t.tags), t.status && (this.status = t.status), t.startTimestamp && (this.startTimestamp = t.startTimestamp), t.endTimestamp && (this.endTimestamp = t.endTimestamp)
            }

            return t.prototype.child = function (t) {
                return this.startChild(t)
            }, t.prototype.startChild = function (e) {
                var n = new t((0, r.pi)((0, r.pi)({}, e), {
                    parentSpanId: this.spanId,
                    sampled: this.sampled,
                    traceId: this.traceId
                }));
                return n.spanRecorder = this.spanRecorder, n.spanRecorder && n.spanRecorder.add(n), n.transaction = this.transaction, n
            }, t.prototype.setTag = function (t, e) {
                var n;
                return this.tags = (0, r.pi)((0, r.pi)({}, this.tags), ((n = {})[t] = e, n)), this
            }, t.prototype.setData = function (t, e) {
                var n;
                return this.data = (0, r.pi)((0, r.pi)({}, this.data), ((n = {})[t] = e, n)), this
            }, t.prototype.setStatus = function (t) {
                return this.status = t, this
            }, t.prototype.setHttpStatus = function (t) {
                this.setTag("http.status_code", String(t));
                var e = function (t) {
                    if (t < 400 && t >= 100) return "ok";
                    if (t >= 400 && t < 500) switch (t) {
                        case 401:
                            return "unauthenticated";
                        case 403:
                            return "permission_denied";
                        case 404:
                            return "not_found";
                        case 409:
                            return "already_exists";
                        case 413:
                            return "failed_precondition";
                        case 429:
                            return "resource_exhausted";
                        default:
                            return "invalid_argument"
                    }
                    if (t >= 500 && t < 600) switch (t) {
                        case 501:
                            return "unimplemented";
                        case 503:
                            return "unavailable";
                        case 504:
                            return "deadline_exceeded";
                        default:
                            return "internal_error"
                    }
                    return "unknown_error"
                }(t);
                return "unknown_error" !== e && this.setStatus(e), this
            }, t.prototype.isSuccess = function () {
                return "ok" === this.status
            }, t.prototype.finish = function (t) {
                this.endTimestamp = "number" == typeof t ? t : (0, o._I)()
            }, t.prototype.toTraceparent = function () {
                var t = "";
                return void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"), this.traceId + "-" + this.spanId + t
            }, t.prototype.toContext = function () {
                return (0, a.Jr)({
                    data: this.data,
                    description: this.description,
                    endTimestamp: this.endTimestamp,
                    op: this.op,
                    parentSpanId: this.parentSpanId,
                    sampled: this.sampled,
                    spanId: this.spanId,
                    startTimestamp: this.startTimestamp,
                    status: this.status,
                    tags: this.tags,
                    traceId: this.traceId
                })
            }, t.prototype.updateWithContext = function (t) {
                var e, n, r, i, o;
                return this.data = null != (e = t.data) ? e : {}, this.description = t.description, this.endTimestamp = t.endTimestamp, this.op = t.op, this.parentSpanId = t.parentSpanId, this.sampled = t.sampled, this.spanId = null != (n = t.spanId) ? n : this.spanId, this.startTimestamp = null != (r = t.startTimestamp) ? r : this.startTimestamp, this.status = t.status, this.tags = null != (i = t.tags) ? i : {}, this.traceId = null != (o = t.traceId) ? o : this.traceId, this
            }, t.prototype.getTraceContext = function () {
                return (0, a.Jr)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    trace_id: this.traceId
                })
            }, t.prototype.toJSON = function () {
                return (0, a.Jr)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    start_timestamp: this.startTimestamp,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    timestamp: this.endTimestamp,
                    trace_id: this.traceId
                })
            }, t
        }()
    }, 4923: function (t, e, n) {
        "use strict";
        n.d(e, {
            Y: function () {
                return p
            }
        });
        var r = n(3940), i = n(3228), o = n(6353), a = n(1182), s = n(8863), u = n(7280), c = n(4012),
            p = function (t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r._measurements = {}, r._hub = (0, i.Gd)(), (0, o.V9)(n, i.Xb) && (r._hub = n), r.name = e.name || "", r.metadata = e.metadata || {}, r._trimEnd = e.trimEnd, r.transaction = r, r
                }

                return (0, r.ZT)(e, t), e.prototype.setName = function (t) {
                    this.name = t
                }, e.prototype.initSpanRecorder = function (t) {
                    void 0 === t && (t = 1e3), this.spanRecorder || (this.spanRecorder = new c.gB(t)), this.spanRecorder.add(this)
                }, e.prototype.setMeasurements = function (t) {
                    this._measurements = (0, r.pi)({}, t)
                }, e.prototype.setMetadata = function (t) {
                    this.metadata = (0, r.pi)((0, r.pi)({}, this.metadata), t)
                }, e.prototype.finish = function (e) {
                    var n = this;
                    if (void 0 === this.endTimestamp) {
                        if (this.name || (u.h && a.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), t.prototype.finish.call(this, e), !0 === this.sampled) {
                            var r = this.spanRecorder ? this.spanRecorder.spans.filter((function (t) {
                                return t !== n && t.endTimestamp
                            })) : [];
                            this._trimEnd && r.length > 0 && (this.endTimestamp = r.reduce((function (t, e) {
                                return t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t
                            })).endTimestamp);
                            var i = {
                                contexts: {trace: this.getTraceContext()},
                                spans: r,
                                start_timestamp: this.startTimestamp,
                                tags: this.tags,
                                timestamp: this.endTimestamp,
                                transaction: this.name,
                                type: "transaction",
                                sdkProcessingMetadata: this.metadata
                            };
                            return Object.keys(this._measurements).length > 0 && (u.h && a.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), i.measurements = this._measurements), u.h && a.kg.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + "."), this._hub.captureEvent(i)
                        }
                        u.h && a.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
                        var o = this._hub.getClient(), s = o && o.getTransport && o.getTransport();
                        s && s.recordLostEvent && s.recordLostEvent("sample_rate", "transaction")
                    }
                }, e.prototype.toContext = function () {
                    var e = t.prototype.toContext.call(this);
                    return (0, s.Jr)((0, r.pi)((0, r.pi)({}, e), {name: this.name, trimEnd: this._trimEnd}))
                }, e.prototype.updateWithContext = function (e) {
                    var n;
                    return t.prototype.updateWithContext.call(this, e), this.name = null != (n = e.name) ? n : "", this._trimEnd = e.trimEnd, this
                }, e
            }(c.Dr)
    }, 4510: function (t, e, n) {
        "use strict";
        n.d(e, {
            WB: function () {
                return s
            }, XL: function () {
                return a
            }, x1: function () {
                return o
            }, zu: function () {
                return i
            }
        });
        var r = n(3228);

        function i(t) {
            var e = (0, r.Gd)().getClient(), n = t || e && e.getOptions();
            return !!n && ("tracesSampleRate" in n || "tracesSampler" in n)
        }

        function o(t) {
            var e = (t || (0, r.Gd)()).getScope();
            return e && e.getTransaction()
        }

        function a(t) {
            return t / 1e3
        }

        function s(t) {
            return 1e3 * t
        }
    }, 4236: function (t, e, n) {
        "use strict";
        n.d(e, {
            R: function () {
                return o
            }, l: function () {
                return s
            }
        });
        var r = n(6626), i = n(6353);

        function o(t, e) {
            try {
                for (var n = t, r = [], i = 0, o = 0, s = " > ".length, u = void 0; n && i++ < 5 && !("html" === (u = a(n, e)) || i > 1 && o + r.length * s + u.length >= 80);) r.push(u), o += u.length, n = n.parentNode;
                return r.reverse().join(" > ")
            } catch (t) {
                return "<unknown>"
            }
        }

        function a(t, e) {
            var n, r, o, a, s, u = t, c = [];
            if (!u || !u.tagName) return "";
            c.push(u.tagName.toLowerCase());
            var p = e && e.length ? e.filter((function (t) {
                return u.getAttribute(t)
            })).map((function (t) {
                return [t, u.getAttribute(t)]
            })) : null;
            if (p && p.length) p.forEach((function (t) {
                c.push("[" + t[0] + '="' + t[1] + '"]')
            })); else if (u.id && c.push("#" + u.id), (n = u.className) && (0, i.HD)(n)) for (r = n.split(/\s+/), s = 0; s < r.length; s++) c.push("." + r[s]);
            var f = ["type", "name", "title", "alt"];
            for (s = 0; s < f.length; s++) o = f[s], (a = u.getAttribute(o)) && c.push("[" + o + '="' + a + '"]');
            return c.join("")
        }

        function s() {
            var t = (0, r.R)();
            try {
                return t.document.location.href
            } catch (t) {
                return ""
            }
        }
    }, 575: function (t, e, n) {
        "use strict";
        n.d(e, {
            h: function () {
                return r
            }
        });
        var r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    }, 6626: function (t, e, n) {
        "use strict";
        n.d(e, {
            R: function () {
                return o
            }, Y: function () {
                return a
            }
        });
        var r = n(8509), i = {};

        function o() {
            return (0, r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i
        }

        function a(t, e, n) {
            var r = n || o(), i = r.__SENTRY__ = r.__SENTRY__ || {};
            return i[t] || (i[t] = e())
        }
    }, 7390: function (t, e, n) {
        "use strict";
        n.d(e, {
            o: function () {
                return g
            }
        });
        var r, i, o, a = n(3940), s = n(575), u = n(6626), c = n(6353), p = n(1182), f = n(8863), d = n(6813),
            l = n(1939), h = (0, u.R)(), v = {}, m = {};

        function g(t, e) {
            v[t] = v[t] || [], v[t].push(e), function (t) {
                if (!m[t]) switch (m[t] = !0, t) {
                    case"console":
                        "console" in h && p.RU.forEach((function (t) {
                            t in h.console && (0, f.hl)(h.console, t, (function (e) {
                                return function () {
                                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                    y("console", {args: n, level: t}), e && e.apply(h.console, n)
                                }
                            }))
                        }));
                        break;
                    case"dom":
                        !function () {
                            if ("document" in h) {
                                var t = y.bind(null, "dom"), e = x(t, !0);
                                h.document.addEventListener("click", e, !1), h.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((function (e) {
                                    var n = h[e] && h[e].prototype;
                                    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, f.hl)(n, "addEventListener", (function (e) {
                                        return function (n, r, i) {
                                            if ("click" === n || "keypress" == n) try {
                                                var o = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                                    a = o[n] = o[n] || {refCount: 0};
                                                if (!a.handler) {
                                                    var s = x(t);
                                                    a.handler = s, e.call(this, n, s, i)
                                                }
                                                a.refCount += 1
                                            } catch (t) {
                                            }
                                            return e.call(this, n, r, i)
                                        }
                                    })), (0, f.hl)(n, "removeEventListener", (function (t) {
                                        return function (e, n, r) {
                                            if ("click" === e || "keypress" == e) try {
                                                var i = this.__sentry_instrumentation_handlers__ || {}, o = i[e];
                                                o && (o.refCount -= 1, o.refCount <= 0 && (t.call(this, e, o.handler, r), o.handler = void 0, delete i[e]), 0 === Object.keys(i).length && delete this.__sentry_instrumentation_handlers__)
                                            } catch (t) {
                                            }
                                            return t.call(this, e, n, r)
                                        }
                                    })))
                                }))
                            }
                        }();
                        break;
                    case"xhr":
                        !function () {
                            if ("XMLHttpRequest" in h) {
                                var t = XMLHttpRequest.prototype;
                                (0, f.hl)(t, "open", (function (t) {
                                    return function () {
                                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        var r = this, i = e[1], o = r.__sentry_xhr__ = {
                                            method: (0, c.HD)(e[0]) ? e[0].toUpperCase() : e[0],
                                            url: e[1]
                                        };
                                        (0, c.HD)(i) && "POST" === o.method && i.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                                        var a = function () {
                                            if (4 === r.readyState) {
                                                try {
                                                    o.status_code = r.status
                                                } catch (t) {
                                                }
                                                y("xhr", {
                                                    args: e,
                                                    endTimestamp: Date.now(),
                                                    startTimestamp: Date.now(),
                                                    xhr: r
                                                })
                                            }
                                        };
                                        return "onreadystatechange" in r && "function" == typeof r.onreadystatechange ? (0, f.hl)(r, "onreadystatechange", (function (t) {
                                            return function () {
                                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                                return a(), t.apply(r, e)
                                            }
                                        })) : r.addEventListener("readystatechange", a), t.apply(r, e)
                                    }
                                })), (0, f.hl)(t, "send", (function (t) {
                                    return function () {
                                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        return this.__sentry_xhr__ && void 0 !== e[0] && (this.__sentry_xhr__.body = e[0]), y("xhr", {
                                            args: e,
                                            startTimestamp: Date.now(),
                                            xhr: this
                                        }), t.apply(this, e)
                                    }
                                }))
                            }
                        }();
                        break;
                    case"fetch":
                        (0, l.t$)() && (0, f.hl)(h, "fetch", (function (t) {
                            return function () {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                var r = {args: e, fetchData: {method: _(e), url: b(e)}, startTimestamp: Date.now()};
                                return y("fetch", (0, a.pi)({}, r)), t.apply(h, e).then((function (t) {
                                    return y("fetch", (0, a.pi)((0, a.pi)({}, r), {
                                        endTimestamp: Date.now(),
                                        response: t
                                    })), t
                                }), (function (t) {
                                    throw y("fetch", (0, a.pi)((0, a.pi)({}, r), {
                                        endTimestamp: Date.now(),
                                        error: t
                                    })), t
                                }))
                            }
                        }));
                        break;
                    case"history":
                        !function () {
                            if ((0, l.Bf)()) {
                                var t = h.onpopstate;
                                h.onpopstate = function () {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var i = h.location.href, o = r;
                                    if (r = i, y("history", {from: o, to: i}), t) try {
                                        return t.apply(this, e)
                                    } catch (t) {
                                    }
                                }, (0, f.hl)(h.history, "pushState", e), (0, f.hl)(h.history, "replaceState", e)
                            }

                            function e(t) {
                                return function () {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var i = e.length > 2 ? e[2] : void 0;
                                    if (i) {
                                        var o = r, a = String(i);
                                        r = a, y("history", {from: o, to: a})
                                    }
                                    return t.apply(this, e)
                                }
                            }
                        }();
                        break;
                    case"error":
                        S = h.onerror, h.onerror = function (t, e, n, r, i) {
                            return y("error", {
                                column: r,
                                error: i,
                                line: n,
                                msg: t,
                                url: e
                            }), !!S && S.apply(this, arguments)
                        };
                        break;
                    case"unhandledrejection":
                        T = h.onunhandledrejection, h.onunhandledrejection = function (t) {
                            return y("unhandledrejection", t), !T || T.apply(this, arguments)
                        };
                        break;
                    default:
                        s.h && p.kg.warn("unknown instrumentation type:", t)
                }
            }(t)
        }

        function y(t, e) {
            var n, r;
            if (t && v[t]) try {
                for (var i = (0, a.XA)(v[t] || []), o = i.next(); !o.done; o = i.next()) {
                    var u = o.value;
                    try {
                        u(e)
                    } catch (e) {
                        s.h && p.kg.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + (0, d.$P)(u) + "\nError:", e)
                    }
                }
            } catch (t) {
                n = {error: t}
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
        }

        function _(t) {
            return void 0 === t && (t = []), "Request" in h && (0, c.V9)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
        }

        function b(t) {
            return void 0 === t && (t = []), "string" == typeof t[0] ? t[0] : "Request" in h && (0, c.V9)(t[0], Request) ? t[0].url : String(t[0])
        }

        function x(t, e) {
            return void 0 === e && (e = !1), function (n) {
                if (n && o !== n && !function (t) {
                    if ("keypress" !== t.type) return !1;
                    try {
                        var e = t.target;
                        if (!e || !e.tagName) return !0;
                        if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
                    } catch (t) {
                    }
                    return !0
                }(n)) {
                    var r = "keypress" === n.type ? "input" : n.type;
                    (void 0 === i || function (t, e) {
                        if (!t) return !0;
                        if (t.type !== e.type) return !0;
                        try {
                            if (t.target !== e.target) return !0
                        } catch (t) {
                        }
                        return !1
                    }(o, n)) && (t({
                        event: n,
                        name: r,
                        global: e
                    }), o = n), clearTimeout(i), i = h.setTimeout((function () {
                        i = void 0
                    }), 1e3)
                }
            }
        }

        var S = null, T = null
    }, 6353: function (t, e, n) {
        "use strict";
        n.d(e, {
            Cy: function () {
                return m
            }, HD: function () {
                return c
            }, J8: function () {
                return v
            }, Kj: function () {
                return h
            }, PO: function () {
                return f
            }, TX: function () {
                return s
            }, V9: function () {
                return y
            }, VW: function () {
                return a
            }, VZ: function () {
                return i
            }, cO: function () {
                return d
            }, fm: function () {
                return u
            }, i2: function () {
                return g
            }, kK: function () {
                return l
            }, pt: function () {
                return p
            }
        });
        var r = Object.prototype.toString;

        function i(t) {
            switch (r.call(t)) {
                case"[object Error]":
                case"[object Exception]":
                case"[object DOMException]":
                    return !0;
                default:
                    return y(t, Error)
            }
        }

        function o(t, e) {
            return r.call(t) === "[object " + e + "]"
        }

        function a(t) {
            return o(t, "ErrorEvent")
        }

        function s(t) {
            return o(t, "DOMError")
        }

        function u(t) {
            return o(t, "DOMException")
        }

        function c(t) {
            return o(t, "String")
        }

        function p(t) {
            return null === t || "object" != typeof t && "function" != typeof t
        }

        function f(t) {
            return o(t, "Object")
        }

        function d(t) {
            return "undefined" != typeof Event && y(t, Event)
        }

        function l(t) {
            return "undefined" != typeof Element && y(t, Element)
        }

        function h(t) {
            return o(t, "RegExp")
        }

        function v(t) {
            return Boolean(t && t.then && "function" == typeof t.then)
        }

        function m(t) {
            return f(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
        }

        function g(t) {
            return "number" == typeof t && t != t
        }

        function y(t, e) {
            try {
                return t instanceof e
            } catch (t) {
                return !1
            }
        }
    }, 1182: function (t, e, n) {
        "use strict";
        n.d(e, {
            Cf: function () {
                return p
            }, RU: function () {
                return c
            }, kg: function () {
                return r
            }
        });
        var r, i = n(3940), o = n(575), a = n(6626), s = (0, a.R)(), u = "Sentry Logger ",
            c = ["debug", "info", "warn", "error", "log", "assert"];

        function p(t) {
            var e = (0, a.R)();
            if (!("console" in e)) return t();
            var n = e.console, r = {};
            c.forEach((function (t) {
                var i = n[t] && n[t].__sentry_original__;
                t in e.console && i && (r[t] = n[t], n[t] = i)
            }));
            try {
                return t()
            } finally {
                Object.keys(r).forEach((function (t) {
                    n[t] = r[t]
                }))
            }
        }

        function f() {
            var t = !1, e = {
                enable: function () {
                    t = !0
                }, disable: function () {
                    t = !1
                }
            };
            return o.h ? c.forEach((function (n) {
                e[n] = function () {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    t && p((function () {
                        var t;
                        (t = s.console)[n].apply(t, (0, i.fl)([u + "[" + n + "]:"], e))
                    }))
                }
            })) : c.forEach((function (t) {
                e[t] = function () {
                }
            })), e
        }

        r = o.h ? (0, a.Y)("logger", f) : f()
    }, 4379: function (t, e, n) {
        "use strict";
        n.d(e, {
            DM: function () {
                return a
            }, Db: function () {
                return p
            }, EG: function () {
                return f
            }, YO: function () {
                return d
            }, en: function () {
                return s
            }, jH: function () {
                return c
            }
        });
        var r = n(3940), i = n(6626), o = n(8863);

        function a() {
            var t = (0, i.R)(), e = t.crypto || t.msCrypto;
            if (void 0 !== e && e.getRandomValues) {
                var n = new Uint16Array(8);
                e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                var r = function (t) {
                    for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                    return e
                };
                return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
                var e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            }))
        }

        function s(t) {
            if (!t) return {};
            var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e) return {};
            var n = e[6] || "", r = e[8] || "";
            return {host: e[4], path: e[5], protocol: e[2], relative: e[5] + n + r}
        }

        function u(t) {
            return t.exception && t.exception.values ? t.exception.values[0] : void 0
        }

        function c(t) {
            var e = t.message, n = t.event_id;
            if (e) return e;
            var r = u(t);
            return r ? r.type && r.value ? r.type + ": " + r.value : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }

        function p(t, e, n) {
            var r = t.exception = t.exception || {}, i = r.values = r.values || [], o = i[0] = i[0] || {};
            o.value || (o.value = e || ""), o.type || (o.type = n || "Error")
        }

        function f(t, e) {
            var n = u(t);
            if (n) {
                var i = n.mechanism;
                if (n.mechanism = (0, r.pi)((0, r.pi)((0, r.pi)({}, {
                    type: "generic",
                    handled: !0
                }), i), e), e && "data" in e) {
                    var o = (0, r.pi)((0, r.pi)({}, i && i.data), e.data);
                    n.mechanism.data = o
                }
            }
        }

        function d(t) {
            if (t && t.__sentry_captured__) return !0;
            try {
                (0, o.xp)(t, "__sentry_captured__", !0)
            } catch (t) {
            }
            return !1
        }
    }, 8509: function (t, e, n) {
        "use strict";

        function r() {
            return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
        }

        function i(t, e) {
            return t.require(e)
        }

        function o(e) {
            var n;
            try {
                n = i(t, e)
            } catch (t) {
            }
            try {
                var r = i(t, "process").cwd;
                n = i(t, r() + "/node_modules/" + e)
            } catch (t) {
            }
            return n
        }

        n.d(e, {
            l$: function () {
                return i
            }, KV: function () {
                return r
            }, $y: function () {
                return o
            }
        }), t = n.hmd(t)
    }, 8863: function (t, e, n) {
        "use strict";
        n.d(e, {
            $Q: function () {
                return c
            }, HK: function () {
                return p
            }, Jr: function () {
                return m
            }, Sh: function () {
                return d
            }, _j: function () {
                return f
            }, hl: function () {
                return s
            }, xp: function () {
                return u
            }, zf: function () {
                return v
            }
        });
        var r = n(3940), i = n(4236), o = n(6353), a = n(7291);

        function s(t, e, n) {
            if (e in t) {
                var r = t[e], i = n(r);
                if ("function" == typeof i) try {
                    c(i, r)
                } catch (t) {
                }
                t[e] = i
            }
        }

        function u(t, e, n) {
            Object.defineProperty(t, e, {value: n, writable: !0, configurable: !0})
        }

        function c(t, e) {
            var n = e.prototype || {};
            t.prototype = e.prototype = n, u(t, "__sentry_original__", e)
        }

        function p(t) {
            return t.__sentry_original__
        }

        function f(t) {
            return Object.keys(t).map((function (e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            })).join("&")
        }

        function d(t) {
            var e = t;
            if ((0, o.VZ)(t)) e = (0, r.pi)({
                message: t.message,
                name: t.name,
                stack: t.stack
            }, h(t)); else if ((0, o.cO)(t)) {
                var n = t;
                e = (0, r.pi)({
                    type: n.type,
                    target: l(n.target),
                    currentTarget: l(n.currentTarget)
                }, h(n)), "undefined" != typeof CustomEvent && (0, o.V9)(t, CustomEvent) && (e.detail = n.detail)
            }
            return e
        }

        function l(t) {
            try {
                return (0, o.kK)(t) ? (0, i.R)(t) : Object.prototype.toString.call(t)
            } catch (t) {
                return "<unknown>"
            }
        }

        function h(t) {
            var e = {};
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }

        function v(t, e) {
            void 0 === e && (e = 40);
            var n = Object.keys(d(t));
            if (n.sort(), !n.length) return "[object has no keys]";
            if (n[0].length >= e) return (0, a.$G)(n[0], e);
            for (var r = n.length; r > 0; r--) {
                var i = n.slice(0, r).join(", ");
                if (!(i.length > e)) return r === n.length ? i : (0, a.$G)(i, e)
            }
            return ""
        }

        function m(t) {
            var e, n;
            if ((0, o.PO)(t)) {
                var i = {};
                try {
                    for (var a = (0, r.XA)(Object.keys(t)), s = a.next(); !s.done; s = a.next()) {
                        var u = s.value;
                        void 0 !== t[u] && (i[u] = m(t[u]))
                    }
                } catch (t) {
                    e = {error: t}
                } finally {
                    try {
                        s && !s.done && (n = a.return) && n.call(a)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return i
            }
            return Array.isArray(t) ? t.map(m) : t
        }
    }, 6813: function (t, e, n) {
        "use strict";
        n.d(e, {
            $P: function () {
                return s
            }, pE: function () {
                return i
            }
        });
        var r = n(3940);

        function i() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = t.sort((function (t, e) {
                return t[0] - e[0]
            })).map((function (t) {
                return t[1]
            }));
            return function (t, e) {
                var i, a, s, u;
                void 0 === e && (e = 0);
                var c = [];
                try {
                    for (var p = (0, r.XA)(t.split("\n").slice(e)), f = p.next(); !f.done; f = p.next()) {
                        var d = f.value;
                        try {
                            for (var l = (s = void 0, (0, r.XA)(n)), h = l.next(); !h.done; h = l.next()) {
                                var v = (0, h.value)(d);
                                if (v) {
                                    c.push(v);
                                    break
                                }
                            }
                        } catch (t) {
                            s = {error: t}
                        } finally {
                            try {
                                h && !h.done && (u = l.return) && u.call(l)
                            } finally {
                                if (s) throw s.error
                            }
                        }
                    }
                } catch (t) {
                    i = {error: t}
                } finally {
                    try {
                        f && !f.done && (a = p.return) && a.call(p)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o(c)
            }
        }

        function o(t) {
            if (!t.length) return [];
            var e = t, n = e[0].function || "", i = e[e.length - 1].function || "";
            return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)), -1 !== i.indexOf("sentryWrapped") && (e = e.slice(0, -1)), e.slice(0, 50).map((function (t) {
                return (0, r.pi)((0, r.pi)({}, t), {filename: t.filename || e[0].filename, function: t.function || "?"})
            })).reverse()
        }

        var a = "<anonymous>";

        function s(t) {
            try {
                return t && "function" == typeof t && t.name || a
            } catch (t) {
                return a
            }
        }
    }, 7291: function (t, e, n) {
        "use strict";
        n.d(e, {
            $G: function () {
                return i
            }, nK: function () {
                return o
            }, zC: function () {
                return a
            }
        });
        var r = n(6353);

        function i(t, e) {
            return void 0 === e && (e = 0), "string" != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "..."
        }

        function o(t, e) {
            if (!Array.isArray(t)) return "";
            for (var n = [], r = 0; r < t.length; r++) {
                var i = t[r];
                try {
                    n.push(String(i))
                } catch (t) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(e)
        }

        function a(t, e) {
            return !!(0, r.HD)(t) && ((0, r.Kj)(e) ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e))
        }
    }, 1939: function (t, e, n) {
        "use strict";
        n.d(e, {
            Ak: function () {
                return a
            }, Bf: function () {
                return p
            }, Du: function () {
                return s
            }, hv: function () {
                return c
            }, t$: function () {
                return u
            }
        });
        var r = n(575), i = n(6626), o = n(1182);

        function a() {
            if (!("fetch" in (0, i.R)())) return !1;
            try {
                return new Headers, new Request(""), new Response, !0
            } catch (t) {
                return !1
            }
        }

        function s(t) {
            return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        }

        function u() {
            if (!a()) return !1;
            var t = (0, i.R)();
            if (s(t.fetch)) return !0;
            var e = !1, n = t.document;
            if (n && "function" == typeof n.createElement) try {
                var u = n.createElement("iframe");
                u.hidden = !0, n.head.appendChild(u), u.contentWindow && u.contentWindow.fetch && (e = s(u.contentWindow.fetch)), n.head.removeChild(u)
            } catch (t) {
                r.h && o.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
            }
            return e
        }

        function c() {
            if (!a()) return !1;
            try {
                return new Request("_", {referrerPolicy: "origin"}), !0
            } catch (t) {
                return !1
            }
        }

        function p() {
            var t = (0, i.R)(), e = t.chrome, n = e && e.app && e.app.runtime,
                r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
            return !n && r
        }
    }, 2048: function (t, e, n) {
        "use strict";
        n.d(e, {
            $2: function () {
                return o
            }, WD: function () {
                return i
            }, cW: function () {
                return a
            }
        });
        var r = n(6353);

        function i(t) {
            return new a((function (e) {
                e(t)
            }))
        }

        function o(t) {
            return new a((function (e, n) {
                n(t)
            }))
        }

        var a = function () {
            function t(t) {
                var e = this;
                this._state = 0, this._handlers = [], this._resolve = function (t) {
                    e._setResult(1, t)
                }, this._reject = function (t) {
                    e._setResult(2, t)
                }, this._setResult = function (t, n) {
                    0 === e._state && ((0, r.J8)(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()))
                }, this._executeHandlers = function () {
                    if (0 !== e._state) {
                        var t = e._handlers.slice();
                        e._handlers = [], t.forEach((function (t) {
                            t[0] || (1 === e._state && t[1](e._value), 2 === e._state && t[2](e._value), t[0] = !0)
                        }))
                    }
                };
                try {
                    t(this._resolve, this._reject)
                } catch (t) {
                    this._reject(t)
                }
            }

            return t.prototype.then = function (e, n) {
                var r = this;
                return new t((function (t, i) {
                    r._handlers.push([!1, function (n) {
                        if (e) try {
                            t(e(n))
                        } catch (t) {
                            i(t)
                        } else t(n)
                    }, function (e) {
                        if (n) try {
                            t(n(e))
                        } catch (t) {
                            i(t)
                        } else i(e)
                    }]), r._executeHandlers()
                }))
            }, t.prototype.catch = function (t) {
                return this.then((function (t) {
                    return t
                }), t)
            }, t.prototype.finally = function (e) {
                var n = this;
                return new t((function (t, r) {
                    var i, o;
                    return n.then((function (t) {
                        o = !1, i = t, e && e()
                    }), (function (t) {
                        o = !0, i = t, e && e()
                    })).then((function () {
                        o ? r(i) : t(i)
                    }))
                }))
            }, t
        }()
    }, 6400: function (t, e, n) {
        "use strict";
        n.d(e, {
            Z1: function () {
                return f
            }, _I: function () {
                return p
            }, ph: function () {
                return c
            }, yW: function () {
                return u
            }
        });
        var r = n(6626), i = n(8509);
        t = n.hmd(t);
        var o = {
            nowSeconds: function () {
                return Date.now() / 1e3
            }
        }, a = (0, i.KV)() ? function () {
            try {
                return (0, i.l$)(t, "perf_hooks").performance
            } catch (t) {
                return
            }
        }() : function () {
            var t = (0, r.R)().performance;
            if (t && t.now) return {
                now: function () {
                    return t.now()
                }, timeOrigin: Date.now() - t.now()
            }
        }(), s = void 0 === a ? o : {
            nowSeconds: function () {
                return (a.timeOrigin + a.now()) / 1e3
            }
        }, u = o.nowSeconds.bind(o), c = s.nowSeconds.bind(s), p = c, f = function () {
            var t = (0, r.R)().performance;
            if (t && t.now) {
                var e = 36e5, n = t.now(), i = Date.now(), o = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : e,
                    a = o < e, s = t.timing && t.timing.navigationStart,
                    u = "number" == typeof s ? Math.abs(s + n - i) : e;
                return a || u < e ? o <= u ? t.timeOrigin : s : i
            }
        }()
    }, 3940: function (t, e, n) {
        "use strict";
        n.d(e, {
            CR: function () {
                return u
            }, XA: function () {
                return s
            }, ZT: function () {
                return i
            }, _T: function () {
                return a
            }, fl: function () {
                return c
            }, pi: function () {
                return o
            }
        });
        var r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }, r(t, e)
        };

        function i(t, e) {
            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }

        var o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };

        function a(t, e) {
            var n = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
            }
            return n
        }

        function s(t) {
            var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && r >= t.length && (t = void 0), {value: t && t[r++], done: !t}
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function u(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, i, o = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
            } catch (t) {
                i = {error: t}
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return a
        }

        function c() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(u(arguments[e]));
            return t
        }
    }, 1185: function (t) {
        t.exports = function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 7240: function (t) {
        function e(t, e, n, r, i, o, a) {
            try {
                var s = t[o](a), u = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(u) : Promise.resolve(u).then(r, i)
        }

        t.exports = function (t) {
            return function () {
                var n = this, r = arguments;
                return new Promise((function (i, o) {
                    var a = t.apply(n, r);

                    function s(t) {
                        e(a, i, o, s, u, "next", t)
                    }

                    function u(t) {
                        e(a, i, o, s, u, "throw", t)
                    }

                    s(void 0)
                }))
            }
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 3298: function (t) {
        t.exports = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 1795: function (t) {
        function e(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        t.exports = function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), Object.defineProperty(t, "prototype", {writable: !1}), t
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 7474: function (t) {
        function e(n) {
            return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n)
        }

        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 7964: function (t, e, n) {
        var r = n(3903);
        t.exports = function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {writable: !1}), e && r(t, e)
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 5656: function (t) {
        t.exports = function (t) {
            return t && t.__esModule ? t : {default: t}
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 8442: function (t, e, n) {
        var r = n(2125).default, i = n(1185);
        t.exports = function (t, e) {
            if (e && ("object" === r(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return i(t)
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 3333: function (t, e, n) {
        var r = n(2125).default;

        function i() {
            "use strict";
            t.exports = i = function () {
                return e
            }, t.exports.__esModule = !0, t.exports.default = t.exports;
            var e = {}, n = Object.prototype, o = n.hasOwnProperty, a = Object.defineProperty || function (t, e, n) {
                    t[e] = n.value
                }, s = "function" == typeof Symbol ? Symbol : {}, u = s.iterator || "@@iterator",
                c = s.asyncIterator || "@@asyncIterator", p = s.toStringTag || "@@toStringTag";

            function f(t, e, n) {
                return Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e]
            }

            try {
                f({}, "")
            } catch (t) {
                f = function (t, e, n) {
                    return t[e] = n
                }
            }

            function d(t, e, n, r) {
                var i = e && e.prototype instanceof v ? e : v, o = Object.create(i.prototype), s = new R(r || []);
                return a(o, "_invoke", {value: w(t, n, s)}), o
            }

            function l(t, e, n) {
                try {
                    return {type: "normal", arg: t.call(e, n)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            e.wrap = d;
            var h = {};

            function v() {
            }

            function m() {
            }

            function g() {
            }

            var y = {};
            f(y, u, (function () {
                return this
            }));
            var _ = Object.getPrototypeOf, b = _ && _(_(C([])));
            b && b !== n && o.call(b, u) && (y = b);
            var x = g.prototype = v.prototype = Object.create(y);

            function S(t) {
                ["next", "throw", "return"].forEach((function (e) {
                    f(t, e, (function (t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function T(t, e) {
                function n(i, a, s, u) {
                    var c = l(t[i], t, a);
                    if ("throw" !== c.type) {
                        var p = c.arg, f = p.value;
                        return f && "object" == r(f) && o.call(f, "__await") ? e.resolve(f.__await).then((function (t) {
                            n("next", t, s, u)
                        }), (function (t) {
                            n("throw", t, s, u)
                        })) : e.resolve(f).then((function (t) {
                            p.value = t, s(p)
                        }), (function (t) {
                            return n("throw", t, s, u)
                        }))
                    }
                    u(c.arg)
                }

                var i;
                a(this, "_invoke", {
                    value: function (t, r) {
                        function o() {
                            return new e((function (e, i) {
                                n(t, r, e, i)
                            }))
                        }

                        return i = i ? i.then(o, o) : o()
                    }
                })
            }

            function w(t, e, n) {
                var r = "suspendedStart";
                return function (i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return {value: void 0, done: !0}
                    }
                    for (n.method = i, n.arg = o; ;) {
                        var a = n.delegate;
                        if (a) {
                            var s = E(a, n);
                            if (s) {
                                if (s === h) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = l(t, e, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === h) continue;
                            return {value: u.arg, done: n.done}
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                    }
                }
            }

            function E(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, E(t, e), "throw" === e.method)) return h;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return h
                }
                var r = l(n, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, h;
                var i = r.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
            }

            function k(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function O(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function R(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(k, this), this.reset(!0)
            }

            function C(t) {
                if (t) {
                    var e = t[u];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1, r = function e() {
                            for (; ++n < t.length;) if (o.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                        return r.next = r
                    }
                }
                return {next: I}
            }

            function I() {
                return {value: void 0, done: !0}
            }

            return m.prototype = g, a(x, "constructor", {value: g, configurable: !0}), a(g, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = f(g, p, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
            }, e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, f(t, p, "GeneratorFunction")), t.prototype = Object.create(x), t
            }, e.awrap = function (t) {
                return {__await: t}
            }, S(T.prototype), f(T.prototype, c, (function () {
                return this
            })), e.AsyncIterator = T, e.async = function (t, n, r, i, o) {
                void 0 === o && (o = Promise);
                var a = new T(d(t, n, r, i), o);
                return e.isGeneratorFunction(n) ? a : a.next().then((function (t) {
                    return t.done ? t.value : a.next()
                }))
            }, S(x), f(x, p, "Generator"), f(x, u, (function () {
                return this
            })), f(x, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t
                    }
                    return t.done = !0, t
                }
            }, e.values = C, R.prototype = {
                constructor: R, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t) for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    if (this.done) throw t;
                    var e = this;

                    function n(n, r) {
                        return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                    }

                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r], a = i.completion;
                        if ("root" === i.tryLoc) return n("end");
                        if (i.tryLoc <= this.prev) {
                            var s = o.call(i, "catchLoc"), u = o.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                }, complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                }, finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), h
                    }
                }, catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                O(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, e, n) {
                    return this.delegate = {
                        iterator: C(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), h
                }
            }, e
        }

        t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 3903: function (t) {
        function e(n, r) {
            return t.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                return t.__proto__ = e, t
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n, r)
        }

        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 2125: function (t) {
        function e(n) {
            return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n)
        }

        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }, 8047: function (t, e, n) {
        var r = n(3333)();
        t.exports = r;
        try {
            regeneratorRuntime = r
        } catch (t) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
        }
    }, 6633: function (t, e, n) {
        "use strict";
        n.d(e, {
            Fu: function () {
                return N
            }, NO: function () {
                return F
            }, Yn: function () {
                return U
            }, mw: function () {
                return E
            }
        });
        var r, i, o, a, s, u = -1, c = function (t) {
            addEventListener("pageshow", (function (e) {
                e.persisted && (u = e.timeStamp, t(e))
            }), !0)
        }, p = function () {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        }, f = function () {
            var t = p();
            return t && t.activationStart || 0
        }, d = function (t, e) {
            var n = p(), r = "navigate";
            return u >= 0 ? r = "back-forward-cache" : n && (r = document.prerendering || f() > 0 ? "prerender" : document.wasDiscarded ? "restore" : n.type.replace(/_/g, "-")), {
                name: t,
                value: void 0 === e ? -1 : e,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: r
            }
        }, l = function (t, e, n) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    var r = new PerformanceObserver((function (t) {
                        Promise.resolve().then((function () {
                            e(t.getEntries())
                        }))
                    }));
                    return r.observe(Object.assign({type: t, buffered: !0}, n || {})), r
                }
            } catch (t) {
            }
        }, h = function (t, e, n, r) {
            var i, o;
            return function (a) {
                e.value >= 0 && (a || r) && ((o = e.value - (i || 0)) || void 0 === i) && (i = e.value, e.delta = o, e.rating = function (t, e) {
                    return t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good"
                }(e.value, n), t(e))
            }
        }, v = function (t) {
            requestAnimationFrame((function () {
                return requestAnimationFrame((function () {
                    return t()
                }))
            }))
        }, m = function (t) {
            var e = function (e) {
                "pagehide" !== e.type && "hidden" !== document.visibilityState || t(e)
            };
            addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0)
        }, g = function (t) {
            var e = !1;
            return function (n) {
                e || (t(n), e = !0)
            }
        }, y = -1, _ = function () {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        }, b = function (t) {
            "hidden" === document.visibilityState && y > -1 && (y = "visibilitychange" === t.type ? t.timeStamp : 0, S())
        }, x = function () {
            addEventListener("visibilitychange", b, !0), addEventListener("prerenderingchange", b, !0)
        }, S = function () {
            removeEventListener("visibilitychange", b, !0), removeEventListener("prerenderingchange", b, !0)
        }, T = function () {
            return y < 0 && (y = _(), x(), c((function () {
                setTimeout((function () {
                    y = _(), x()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return y
                }
            }
        }, w = function (t) {
            document.prerendering ? addEventListener("prerenderingchange", (function () {
                return t()
            }), !0) : t()
        }, E = function (t, e) {
            e = e || {}, function (t, e) {
                e = e || {}, w((function () {
                    var n, r = [1800, 3e3], i = T(), o = d("FCP"), a = l("paint", (function (t) {
                        t.forEach((function (t) {
                            "first-contentful-paint" === t.name && (a.disconnect(), t.startTime < i.firstHiddenTime && (o.value = Math.max(t.startTime - f(), 0), o.entries.push(t), n(!0)))
                        }))
                    }));
                    a && (n = h(t, o, r, e.reportAllChanges), c((function (i) {
                        o = d("FCP"), n = h(t, o, r, e.reportAllChanges), v((function () {
                            o.value = performance.now() - i.timeStamp, n(!0)
                        }))
                    })))
                }))
            }(g((function () {
                var n, r = [.1, .25], i = d("CLS", 0), o = 0, a = [], s = function (t) {
                    t.forEach((function (t) {
                        if (!t.hadRecentInput) {
                            var e = a[0], n = a[a.length - 1];
                            o && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (o += t.value, a.push(t)) : (o = t.value, a = [t])
                        }
                    })), o > i.value && (i.value = o, i.entries = a, n())
                }, u = l("layout-shift", s);
                u && (n = h(t, i, r, e.reportAllChanges), m((function () {
                    s(u.takeRecords()), n(!0)
                })), c((function () {
                    o = 0, i = d("CLS", 0), n = h(t, i, r, e.reportAllChanges), v((function () {
                        return n()
                    }))
                })), setTimeout(n, 0))
            })))
        }, k = {passive: !0, capture: !0}, O = new Date, R = function (t, e) {
            r || (r = e, i = t, o = new Date, L(removeEventListener), C())
        }, C = function () {
            if (i >= 0 && i < o - O) {
                var t = {
                    entryType: "first-input",
                    name: r.type,
                    target: r.target,
                    cancelable: r.cancelable,
                    startTime: r.timeStamp,
                    processingStart: r.timeStamp + i
                };
                a.forEach((function (e) {
                    e(t)
                })), a = []
            }
        }, I = function (t) {
            if (t.cancelable) {
                var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                "pointerdown" == t.type ? function (t, e) {
                    var n = function () {
                        R(t, e), i()
                    }, r = function () {
                        i()
                    }, i = function () {
                        removeEventListener("pointerup", n, k), removeEventListener("pointercancel", r, k)
                    };
                    addEventListener("pointerup", n, k), addEventListener("pointercancel", r, k)
                }(e, t) : R(e, t)
            }
        }, L = function (t) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function (e) {
                return t(e, I, k)
            }))
        }, N = function (t, e) {
            e = e || {}, w((function () {
                var n, o = [100, 300], s = T(), u = d("FID"), p = function (t) {
                    t.startTime < s.firstHiddenTime && (u.value = t.processingStart - t.startTime, u.entries.push(t), n(!0))
                }, f = function (t) {
                    t.forEach(p)
                }, v = l("first-input", f);
                n = h(t, u, o, e.reportAllChanges), v && m(g((function () {
                    f(v.takeRecords()), v.disconnect()
                }))), v && c((function () {
                    var s;
                    u = d("FID"), n = h(t, u, o, e.reportAllChanges), a = [], i = -1, r = null, L(addEventListener), s = p, a.push(s), C()
                }))
            }))
        }, D = 0, P = 1 / 0, j = 0, M = function (t) {
            t.forEach((function (t) {
                t.interactionId && (P = Math.min(P, t.interactionId), j = Math.max(j, t.interactionId), D = j ? (j - P) / 7 + 1 : 0)
            }))
        }, A = function () {
            return s ? D : performance.interactionCount || 0
        }, B = function () {
            "interactionCount" in performance || s || (s = l("event", M, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        }, q = 0, H = function () {
            return A() - q
        }, G = [], W = {}, Y = function (t) {
            var e = G[G.length - 1], n = W[t.interactionId];
            if (n || G.length < 10 || t.duration > e.latency) {
                if (n) n.entries.push(t), n.latency = Math.max(n.latency, t.duration); else {
                    var r = {id: t.interactionId, latency: t.duration, entries: [t]};
                    W[r.id] = r, G.push(r)
                }
                G.sort((function (t, e) {
                    return e.latency - t.latency
                })), G.splice(10).forEach((function (t) {
                    delete W[t.id]
                }))
            }
        }, U = function (t, e) {
            e = e || {}, w((function () {
                var n = [200, 500];
                B();
                var r, i = d("INP"), o = function (t) {
                    t.forEach((function (t) {
                        t.interactionId && Y(t), "first-input" === t.entryType && !G.some((function (e) {
                            return e.entries.some((function (e) {
                                return t.duration === e.duration && t.startTime === e.startTime
                            }))
                        })) && Y(t)
                    }));
                    var e, n = (e = Math.min(G.length - 1, Math.floor(H() / 50)), G[e]);
                    n && n.latency !== i.value && (i.value = n.latency, i.entries = n.entries, r())
                }, a = l("event", o, {durationThreshold: e.durationThreshold || 40});
                r = h(t, i, n, e.reportAllChanges), a && (a.observe({
                    type: "first-input",
                    buffered: !0
                }), m((function () {
                    o(a.takeRecords()), i.value < 0 && H() > 0 && (i.value = 0, i.entries = []), r(!0)
                })), c((function () {
                    G = [], q = A(), i = d("INP"), r = h(t, i, n, e.reportAllChanges)
                })))
            }))
        }, z = {}, F = function (t, e) {
            e = e || {}, w((function () {
                var n, r = [2500, 4e3], i = T(), o = d("LCP"), a = function (t) {
                    var e = t[t.length - 1];
                    if (e) {
                        var r = Math.max(e.startTime - f(), 0);
                        r < i.firstHiddenTime && (o.value = r, o.entries = [e], n())
                    }
                }, s = l("largest-contentful-paint", a);
                if (s) {
                    n = h(t, o, r, e.reportAllChanges);
                    var u = g((function () {
                        z[o.id] || (a(s.takeRecords()), s.disconnect(), z[o.id] = !0, n(!0))
                    }));
                    ["keydown", "click"].forEach((function (t) {
                        addEventListener(t, u, !0)
                    })), m(u), c((function (i) {
                        o = d("LCP"), n = h(t, o, r, e.reportAllChanges), v((function () {
                            o.value = performance.now() - i.timeStamp, z[o.id] = !0, n(!0)
                        }))
                    }))
                }
            }))
        }
    }
}]);
//# sourceMappingURL=9699.4c224fab126dbc1f18cb.js.map