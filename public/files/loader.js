!function (r) {
    var n = {};

    function o(e) {
        var t;
        return (n[e] || (t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        }, r[e].call(t.exports, t, t.exports, o), t.l = !0, t)).exports
    }

    o.m = r, o.c = n, o.d = function (e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) o.d(r, n, function (e) {
            return t[e]
        }.bind(null, n));
        return r
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 326)
}({
    326: function (e, t, r) {
        const n = (window.iterateSettings || {}).scriptHost || "https://platform.iteratehq.com",
            o = document.getElementsByTagName("script")[0];
        {
            let e = "match.js";
           // e = "match-prod-41c7baf5c4dde6d213c3.js";
            var i = document.createElement("script");
            i.type = "text/javascript", i.async = !0, i.id = "iterate-script", i.src = n + "/" + e, o.parentNode && !document.getElementById(i.id) && o.parentNode.insertBefore(i, o)
        }
    }
});