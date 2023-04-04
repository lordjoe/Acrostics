"use strict";
(self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || []).push([[2924], {
    2924: function (t, r, e) {
        e.d(r, {
            y: function () {
                return N
            }
        });
        var n = function (t, r) {
            return n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, r) {
                t.__proto__ = r
            } || function (t, r) {
                for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
            }, n(t, r)
        };

        function o(t, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

            function e() {
                this.constructor = t
            }

            n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
        }

        function i(t) {
            var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], n = 0;
            if (e) return e.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && n >= t.length && (t = void 0), {value: t && t[n++], done: !t}
                }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function u(t, r) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e) return t;
            var n, o, i = e.call(t), u = [];
            try {
                for (; (void 0 === r || r-- > 0) && !(n = i.next()).done;) u.push(n.value)
            } catch (t) {
                o = {error: t}
            } finally {
                try {
                    n && !n.done && (e = i.return) && e.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return u
        }

        function c(t, r, e) {
            if (e || 2 === arguments.length) for (var n, o = 0, i = r.length; o < i; o++) !n && o in r || (n || (n = Array.prototype.slice.call(r, 0, o)), n[o] = r[o]);
            return t.concat(n || Array.prototype.slice.call(r))
        }

        function s(t) {
            return "function" == typeof t
        }

        Object.create, Object.create;
        var a, l = ((a = function (t) {
            return function (r) {
                t(this), this.message = r ? r.length + " errors occurred during unsubscription:\n" + r.map((function (t, r) {
                    return r + 1 + ") " + t.toString()
                })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = r
            }
        }((function (t) {
            Error.call(t), t.stack = (new Error).stack
        }))).prototype = Object.create(Error.prototype), a.prototype.constructor = a, a);

        function f(t, r) {
            if (t) {
                var e = t.indexOf(r);
                0 <= e && t.splice(e, 1)
            }
        }

        var p = function () {
            function t(t) {
                this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null
            }

            var r;
            return t.prototype.unsubscribe = function () {
                var t, r, e, n, o;
                if (!this.closed) {
                    this.closed = !0;
                    var a = this._parentage;
                    if (a) if (this._parentage = null, Array.isArray(a)) try {
                        for (var f = i(a), p = f.next(); !p.done; p = f.next()) p.value.remove(this)
                    } catch (r) {
                        t = {error: r}
                    } finally {
                        try {
                            p && !p.done && (r = f.return) && r.call(f)
                        } finally {
                            if (t) throw t.error
                        }
                    } else a.remove(this);
                    var h = this.initialTeardown;
                    if (s(h)) try {
                        h()
                    } catch (t) {
                        o = t instanceof l ? t.errors : [t]
                    }
                    var v = this._finalizers;
                    if (v) {
                        this._finalizers = null;
                        try {
                            for (var d = i(v), b = d.next(); !b.done; b = d.next()) {
                                var _ = b.value;
                                try {
                                    y(_)
                                } catch (t) {
                                    o = null != o ? o : [], t instanceof l ? o = c(c([], u(o)), u(t.errors)) : o.push(t)
                                }
                            }
                        } catch (t) {
                            e = {error: t}
                        } finally {
                            try {
                                b && !b.done && (n = d.return) && n.call(d)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }
                    if (o) throw new l(o)
                }
            }, t.prototype.add = function (r) {
                var e;
                if (r && r !== this) if (this.closed) y(r); else {
                    if (r instanceof t) {
                        if (r.closed || r._hasParent(this)) return;
                        r._addParent(this)
                    }
                    (this._finalizers = null !== (e = this._finalizers) && void 0 !== e ? e : []).push(r)
                }
            }, t.prototype._hasParent = function (t) {
                var r = this._parentage;
                return r === t || Array.isArray(r) && r.includes(t)
            }, t.prototype._addParent = function (t) {
                var r = this._parentage;
                this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t
            }, t.prototype._removeParent = function (t) {
                var r = this._parentage;
                r === t ? this._parentage = null : Array.isArray(r) && f(r, t)
            }, t.prototype.remove = function (r) {
                var e = this._finalizers;
                e && f(e, r), r instanceof t && r._removeParent(this)
            }, t.EMPTY = ((r = new t).closed = !0, r), t
        }();

        function h(t) {
            return t instanceof p || t && "closed" in t && s(t.remove) && s(t.add) && s(t.unsubscribe)
        }

        function y(t) {
            s(t) ? t() : t.unsubscribe()
        }

        p.EMPTY;
        var v = null, d = null, b = void 0, _ = !1, m = !1, w = {
            setTimeout: function (t, r) {
                for (var e = [], n = 2; n < arguments.length; n++) e[n - 2] = arguments[n];
                var o = w.delegate;
                return (null == o ? void 0 : o.setTimeout) ? o.setTimeout.apply(o, c([t, r], u(e))) : setTimeout.apply(void 0, c([t, r], u(e)))
            }, clearTimeout: function (t) {
                var r = w.delegate;
                return ((null == r ? void 0 : r.clearTimeout) || clearTimeout)(t)
            }, delegate: void 0
        };

        function x() {
        }

        var g = S("C", void 0, void 0);

        function S(t, r, e) {
            return {kind: t, value: r, error: e}
        }

        var T = null, O = function (t) {
            function r(r) {
                var e = t.call(this) || this;
                return e.isStopped = !1, r ? (e.destination = r, h(r) && r.add(e)) : e.destination = C, e
            }

            return o(r, t), r.create = function (t, r, e) {
                return new j(t, r, e)
            }, r.prototype.next = function (t) {
                this.isStopped ? z(function (t) {
                    return S("N", t, void 0)
                }(t), this) : this._next(t)
            }, r.prototype.error = function (t) {
                this.isStopped ? z(S("E", void 0, t), this) : (this.isStopped = !0, this._error(t))
            }, r.prototype.complete = function () {
                this.isStopped ? z(g, this) : (this.isStopped = !0, this._complete())
            }, r.prototype.unsubscribe = function () {
                this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null)
            }, r.prototype._next = function (t) {
                this.destination.next(t)
            }, r.prototype._error = function (t) {
                try {
                    this.destination.error(t)
                } finally {
                    this.unsubscribe()
                }
            }, r.prototype._complete = function () {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }, r
        }(p), P = Function.prototype.bind;

        function A(t, r) {
            return P.call(t, r)
        }

        var E = function () {
            function t(t) {
                this.partialObserver = t
            }

            return t.prototype.next = function (t) {
                var r = this.partialObserver;
                if (r.next) try {
                    r.next(t)
                } catch (t) {
                    k(t)
                }
            }, t.prototype.error = function (t) {
                var r = this.partialObserver;
                if (r.error) try {
                    r.error(t)
                } catch (t) {
                    k(t)
                } else k(t)
            }, t.prototype.complete = function () {
                var t = this.partialObserver;
                if (t.complete) try {
                    t.complete()
                } catch (t) {
                    k(t)
                }
            }, t
        }(), j = function (t) {
            function r(r, e, n) {
                var o, i, u = t.call(this) || this;
                return s(r) || !r ? o = {
                    next: null != r ? r : void 0,
                    error: null != e ? e : void 0,
                    complete: null != n ? n : void 0
                } : u && m ? ((i = Object.create(r)).unsubscribe = function () {
                    return u.unsubscribe()
                }, o = {
                    next: r.next && A(r.next, i),
                    error: r.error && A(r.error, i),
                    complete: r.complete && A(r.complete, i)
                }) : o = r, u.destination = new E(o), u
            }

            return o(r, t), r
        }(O);

        function k(t) {
            var r;
            _ ? (r = t, _ && T && (T.errorThrown = !0, T.error = r)) : function (t) {
                w.setTimeout((function () {
                    if (!v) throw t;
                    v(t)
                }))
            }(t)
        }

        function z(t, r) {
            var e = d;
            e && w.setTimeout((function () {
                return e(t, r)
            }))
        }

        var C = {
            closed: !0, next: x, error: function (t) {
                throw t
            }, complete: x
        }, M = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function Y(t) {
            return t
        }

        function F(t) {
            return 0 === t.length ? Y : 1 === t.length ? t[0] : function (r) {
                return t.reduce((function (t, r) {
                    return r(t)
                }), r)
            }
        }

        var N = function () {
            function t(t) {
                t && (this._subscribe = t)
            }

            return t.prototype.lift = function (r) {
                var e = new t;
                return e.source = this, e.operator = r, e
            }, t.prototype.subscribe = function (t, r, e) {
                var n, o = this, i = (n = t) && n instanceof O || function (t) {
                    return t && s(t.next) && s(t.error) && s(t.complete)
                }(n) && h(n) ? t : new j(t, r, e);
                return function (t) {
                    if (_) {
                        var r = !T;
                        if (r && (T = {errorThrown: !1, error: null}), t(), r) {
                            var e = T, n = e.errorThrown, o = e.error;
                            if (T = null, n) throw o
                        }
                    } else t()
                }((function () {
                    var t = o, r = t.operator, e = t.source;
                    i.add(r ? r.call(i, e) : e ? o._subscribe(i) : o._trySubscribe(i))
                })), i
            }, t.prototype._trySubscribe = function (t) {
                try {
                    return this._subscribe(t)
                } catch (r) {
                    t.error(r)
                }
            }, t.prototype.forEach = function (t, r) {
                var e = this;
                return new (r = U(r))((function (r, n) {
                    var o = new j({
                        next: function (r) {
                            try {
                                t(r)
                            } catch (t) {
                                n(t), o.unsubscribe()
                            }
                        }, error: n, complete: r
                    });
                    e.subscribe(o)
                }))
            }, t.prototype._subscribe = function (t) {
                var r;
                return null === (r = this.source) || void 0 === r ? void 0 : r.subscribe(t)
            }, t.prototype[M] = function () {
                return this
            }, t.prototype.pipe = function () {
                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return F(t)(this)
            }, t.prototype.toPromise = function (t) {
                var r = this;
                return new (t = U(t))((function (t, e) {
                    var n;
                    r.subscribe((function (t) {
                        return n = t
                    }), (function (t) {
                        return e(t)
                    }), (function () {
                        return t(n)
                    }))
                }))
            }, t.create = function (r) {
                return new t(r)
            }, t
        }();

        function U(t) {
            var r;
            return null !== (r = null != t ? t : b) && void 0 !== r ? r : Promise
        }
    }
}]);
//# sourceMappingURL=2924.5c44bc34d00fe7d409c3.js.map