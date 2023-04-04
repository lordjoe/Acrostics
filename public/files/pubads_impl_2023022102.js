(function (_) {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var ba, ea, ha, ia, ja, oa, qa, sa, wa, pa, va, xa, ya, za, Aa, Ca, Fa, Ga, Ha, Ja, Ka, Ma, La, Pa, Qa, Va, Wa, Ya,
        $a, bb, db, gb, ib, ob, sb, vb, yb, zb, Bb, Eb, Gb, Jb, Kb, Hb, Ib, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Ub, Wb, Vb, Xb,
        Yb, Zb, $b, ac, ec, dc, cc, gc, ic, jc, kc, lc, oc, pc, qc, rc, wc, xc, yc, Ac, Dc, Fc, Ec, Ic, Gc, Hc, Jc, Oc,
        Kc, Pc, hc, Qc, Rc, Vc, Xc, Sc, ad, dd, Yc, Zc, hd, id, jd, kd, fd, gd, ld, pd, qd, sd, td, ud, xd, yd, zd, Ed,
        Fd, B, Hd, Id, Kd, Ld, Md, Pd, Rd, Td, he, Zd, je, le, me, ne, pe, te, ue, ve, ye, ze, Ce, Fe, Ge, Oe, Ke, Se,
        Te, af, Xe, We, Ve, cf, lf, mf, nf, Cf, If, Gf, Hf, Nf, Rf, Sf, Uf, Yf, Wf, pg, ug, vg, xg, yg, Cg, Dg, Eg, Ag,
        Bg, Fg, Gg, Ig, Jg, Hg, Ng, Pg, Qg, Rg, Zg, ch, J, hh, vh, zh, Bh, Ch, Eh, Fh, Hh, Jh, Mh, Ph, Rh, Vh, Th, Wh,
        ci, di, ei, fi, Xh, gi, Yh, ii, ki, li, ni, mi, si, qi, ti, Fi, Ii, xi, yi, Ji, Ki, Mi, Ni, Oi, Pi, Ti, Yi, Ui,
        Ri, gj, ej, fj, hj, ij, jj, lj, xj, yj, Aj, Dj, Fj, L, Hj, Ij, Jj, Lj, Nj, Oj, Pj, Sj, Rj, Qj, ak, dk, kk, lk,
        nk, ok, sk, uk, yk, Ek, Gk, Ik, Jk, Kk, Nk, Qk, Sk, Uk, Vk, Xk, Zk, $k, Yk, ra, dl, fl, gl, il, nl, wl, xl, Al,
        pl, Ll, Ml, Ol, Ql, Xl, am, bm, hm, im, jm, km, lm, nm, om, pm, qm, tm, rm, um, vm, wm, xm, ym, zm, Cm, Em, Fm,
        Gm, Jm, Hm, Im, Qm, Xm, $m, Ym, Zm, kn, mn, nn, on, pn, qn, tn, vn, Cn, wn, xn, sn, Fn, Hn, In, Ln, eo, lo, mo,
        oo, uo, xo, yo, zo, Fo, Go, Jo, Ko, Po, Qo, Vo, Wo, Yo, Zo, $o, ap, hp, op, qp, rp, gq, jq, kq, lq, tq, vq, xq,
        Aq, D, Bq, Cq, Dq, Eq, Fq, v, Gq, Hq, Iq, P, Jq, Kq, Lq, Sq, Tq, Uq, kb, mb, nb, Wq, Zq, Xq, Yq, $q, ar, eb, ua,
        la, na, fr, gr, qe;
    ea = function (a) {
        return a ? a.passive && da() ? a : a.capture || !1 : !1
    };
    ha = function (a, b) {
        b = _.fa(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    ia = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ja = function (a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    oa = function (a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.ka(e) ? "o" + (Object.prototype.hasOwnProperty.call(e, la) && e[la] || (e[la] = ++na)) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    qa = function (a, b) {
        a.sort(b || pa)
    };
    sa = function (a) {
        for (var b = ra, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {index: d, value: a[d]};
        var e = b || pa;
        qa(c, function (f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    wa = function (a, b) {
        if (!ua(a) || !ua(b) || a.length != b.length) return !1;
        for (var c = a.length, d = va, e = 0; e < c; e++) if (!d(a[e], b[e])) return !1;
        return !0
    };
    pa = function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    va = function (a, b) {
        return a === b
    };
    xa = function (a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d], f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    ya = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d)) for (var e = 0; e < d.length; e += 8192) for (var f = ya.apply(null, ja(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]); else b.push(d)
        }
        return b
    };
    za = function (a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    Aa = function (a) {
        var b = [], c = 0, d;
        for (d in a) b[c++] = a[d];
        return b
    };
    Ca = function (a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return c
    };
    Fa = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Da.length; f++) c = Da[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Ga = function () {
        var a = _.q.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ha = function (a) {
        return -1 != Ga().indexOf(a)
    };
    Ja = function (a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    Ka = function () {
        return Ha("Firefox") || Ha("FxiOS")
    };
    Ma = function () {
        return Ha("Safari") && !(La() || Ha("Coast") || Ha("Opera") || Ha("Edge") || Ha("Edg/") || Ha("OPR") || Ka() || Ha("Silk") || Ha("Android"))
    };
    La = function () {
        return (Ha("Chrome") || Ha("CriOS")) && !Ha("Edge") || Ha("Silk")
    };
    Pa = function (a) {
        var b = {};
        a.forEach(function (c) {
            b[c[0]] = c[1]
        });
        return function (c) {
            return b[_.t(c, "find").call(c, function (d) {
                return d in b
            })] || ""
        }
    };
    Qa = function () {
        var a = Ga();
        if (Ha("Trident") || Ha("MSIE")) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1]; else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1]) if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1]) if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0"; else b = c[1];
                a = b
            }
            return a
        }
        a = Ja(a);
        b = Pa(a);
        return Ha("Opera") ? b(["Version", "Opera"]) : Ha("Edge") ? b(["Edge"]) : Ha("Edg/") ? b(["Edg"]) : Ha("Silk") ? b(["Silk"]) : La() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };
    _.Ua = function (a) {
        if (a instanceof Ra) a = Sa(a); else {
            b:if (Ta) {
                try {
                    var b = new URL(a)
                } catch (c) {
                    b = "https:";
                    break b
                }
                b = b.protocol
            } else c:{
                b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    b = void 0;
                    break c
                }
                b = b.protocol;
                b = ":" === b || "" === b ? "https:" : b
            }
            a = "javascript:" !== b ? a : void 0
        }
        return a
    };
    Va = function (a) {
        throw Error("unexpected value " + a + "!");
    };
    Wa = function (a) {
        var b, c,
            d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Ya = function (a, b) {
        a.textContent = b instanceof Xa && b.constructor === Xa ? b.j : "type_error:SafeScript";
        Wa(a)
    };
    $a = function (a, b) {
        a.src = Za(b);
        Wa(a)
    };
    bb = function (a, b) {
        a.write(ab(b))
    };
    db = function (a) {
        return new _.cb(function (b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    gb = function (a) {
        for (var b = eb.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return _.fb(c.join(""))
    };
    ib = function (a) {
        var b = window, c = !0;
        c = void 0 === c ? !1 : c;
        new v.Promise(function (d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }

            var g = b.document.createElement("script");
            g.onload = function () {
                f();
                d()
            };
            g.onerror = function () {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            $a(g, a);
            c && "complete" !== b.document.readyState ? _.hb(b, "load", function () {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    ob = function (a) {
        var b, c, d, e, f, g;
        return _.jb(function (h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.Hb, c = void 0, h.D = 2, kb(h, lb(b), 4);
                case 4:
                    c = h.m;
                    mb(h, 3);
                    break;
                case 2:
                    nb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.lc || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.D ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.J,
                        Te: c.bg_hash_basename,
                        Se: c.bg_binary,
                        Lf: a.j + "_" + a.m,
                        lc: d,
                        Hb: a.Hb,
                        Rc: e,
                        cd: f,
                        Qc: g
                    }) : h.return(void 0)
            }
        })
    };
    sb = function (a) {
        var b;
        return _.jb(function (c) {
            if (1 == c.j) return kb(c, ob(a), 2);
            if (b = c.m) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window, f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.Te, g._bgp_ = b.Se, g._li_ = b.Lf, g._jk_ = b.lc, g._st_ = b.Hb, g._rc_ = b.Rc, g._dl_ = b.cd, g._g2_ = b.Qc, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = pb(qb, {basename: d});
                ib(d)
            }
            return c.return(b)
        })
    };
    vb = function (a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (tb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (ub || (ub = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f; else {
                    if (2048 > f) d[c++] = f >> 6 | 192; else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    yb = function (a) {
        if (!wb) return xb(a);
        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
        b += String.fromCharCode.apply(null, a);
        return btoa(b)
    };
    zb = function (a) {
        switch (a) {
            case "-":
                return "+";
            case "_":
                return "/";
            case ".":
                return "=";
            default:
                return ""
        }
    };
    Bb = function (a) {
        return Ab && null != a && a instanceof Uint8Array
    };
    Eb = function (a) {
        if (a !== Db) throw Error("illegal external caller");
    };
    Gb = function (a, b) {
        if (Fb) return a[Fb] |= b;
        if (void 0 !== a.Na) return a.Na |= b;
        Object.defineProperties(a, {Na: {value: b, configurable: !0, writable: !0, enumerable: !1}});
        return b
    };
    Jb = function (a, b) {
        var c = Hb(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Ib(a, c | b));
        return a
    };
    Kb = function (a, b) {
        Fb ? a[Fb] && (a[Fb] &= ~b) : void 0 !== a.Na && (a.Na &= ~b)
    };
    Hb = function (a) {
        var b;
        Fb ? b = a[Fb] : b = a.Na;
        return null == b ? 0 : b
    };
    Ib = function (a, b) {
        Fb ? a[Fb] = b : void 0 !== a.Na ? a.Na = b : Object.defineProperties(a, {
            Na: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    Lb = function (a) {
        Gb(a, 1);
        return a
    };
    Mb = function (a) {
        return !!(Hb(a) & 2)
    };
    Nb = function (a) {
        Gb(a, 18);
        return a
    };
    Ob = function (a) {
        Gb(a, 16);
        return a
    };
    Pb = function (a, b) {
        Ib(b, (a | 0) & -51)
    };
    Qb = function (a, b) {
        Ib(b, (a | 18) & -41)
    };
    Rb = function (a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    Ub = function (a, b, c) {
        if (null != a) if ("string" === typeof a) a = a ? new Sb(a, Db) : Tb(); else if (a.constructor !== Sb) if (Bb(a)) {
            var d;
            c ? d = 0 == a.length ? Tb() : new Sb(a, Db) : d = a.length ? new Sb(new Uint8Array(a), Db) : Tb();
            a = d
        } else {
            if (!b) throw Error();
            a = void 0
        }
        return a
    };
    Wb = function (a) {
        Vb(Hb(a.fa))
    };
    Vb = function (a) {
        if (a & 2) throw Error();
    };
    Xb = function (a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Rb(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    Yb = function (a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number|null|undefined, found " + typeof a + ": " + a);
        return a
    };
    Zb = function (a) {
        return a
    };
    $b = function (a) {
        return a
    };
    ac = function (a) {
        return a
    };
    ec = function (a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.Ed === bc) return a;
        if (!e) return c ? d & 2 ? cc(b) : new b : void 0;
        dc(a, d);
        return new b(a)
    };
    dc = function (a, b) {
        var c = Hb(a), d = c;
        0 === d && (d |= b & 16);
        d |= b & 2;
        d !== c && Ib(a, d)
    };
    cc = function (a) {
        var b = a[fc];
        if (b) return b;
        b = new a;
        Nb(b.fa);
        return a[fc] = b
    };
    gc = function (a, b) {
        a = "" + a;
        b = "" + b;
        return a > b ? 1 : a < b ? -1 : 0
    };
    ic = function (a, b, c, d) {
        a = ec(a, b, !0, d);
        c && (a = hc(a));
        return a
    };
    jc = function (a) {
        return a
    };
    kc = function (a) {
        return a
    };
    lc = function (a) {
        return a
    };
    oc = function (a, b, c, d, e) {
        var f = x(a, b, d);
        Array.isArray(f) || (f = mc);
        var g = Hb(f);
        g & 1 || Lb(f);
        if (e) g & 2 || Nb(f), c & 1 || Object.freeze(f); else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && Kb(f, 16) : (f = Lb(Array.prototype.slice.call(f)), nc(a, b, f, d))
        }
        return f
    };
    pc = function (a, b, c, d) {
        var e = Mb(a.fa), f = oc(a, b, 1, d, e), g = Hb(f);
        if (!(g & 4)) {
            Object.isFrozen(f) && (f = Lb(f.slice()), nc(a, b, f, d));
            for (var h = 0, k = 0; h < f.length; h++) {
                var l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            g |= 5;
            e && (g |= 18);
            Ib(f, g);
            g & 2 && Object.freeze(f)
        }
        !e && (g & 2 || Object.isFrozen(f)) && (f = Array.prototype.slice.call(f), Gb(f, 5), nc(a, b, f, d));
        return f
    };
    qc = function (a) {
        return Ub(a, !0, !0)
    };
    rc = function (a) {
        return Ub(a, !0, !1)
    };
    wc = function (a, b, c) {
        var d = !1;
        if (null == b) {
            if (c) return sc || (sc = new tc(Nb([])));
            b = []
        } else if (b.constructor === tc) {
            if (0 == (b.m & 2) || c) return b;
            b = uc(b)
        } else Array.isArray(b) ? d = Mb(b) : b = [];
        if (c) {
            if (!b.length) return sc || (sc = new tc(Nb([])));
            d || (d = !0, Nb(b))
        } else if (d) for (d = !1, b = Array.prototype.slice.call(b), c = 0; c < b.length; c++) {
            var e = b[c] = Array.prototype.slice.call(b[c]);
            Array.isArray(e[1]) && (e[1] = Nb(e[1]))
        }
        d || (Hb(b) & 32 ? Kb(b, 16) : Hb(a.fa) & 16 && Ob(b));
        d = new tc(b, void 0);
        nc(a, 26, d, !1);
        return d
    };
    _.y = function (a, b, c, d) {
        Wb(a);
        c !== d ? nc(a, b, c) : nc(a, b, void 0, !1);
        return a
    };
    xc = function (a, b, c, d, e) {
        var f = !!(e & 2);
        a.j || (a.j = {});
        var g = a.j[c], h = oc(a, c, 3, void 0, f);
        if (!g) {
            var k = h;
            g = [];
            f = !!(e & 2);
            h = !!(Hb(k) & 2);
            var l = k;
            !f && h && (k = Array.prototype.slice.call(k));
            var n = e | (h ? 2 : 0);
            e = h;
            for (var m = 0; m < k.length; m++) {
                var p = k[m];
                var r = b;
                Array.isArray(p) ? (dc(p, n), p = new r(p)) : p = void 0;
                void 0 !== p && (e = e || !!(2 & Hb(p.fa)), g.push(p))
            }
            a.j[c] = g;
            n = Hb(k);
            b = n | 33;
            b = e ? b & -9 : b | 8;
            n != b && (e = k, Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), Ib(e, b), k = e);
            l !== k && nc(a, c, k);
            (f || d && h) && Nb(g);
            d && Object.freeze(g);
            return g
        }
        f || (f = Object.isFrozen(g), d && !f ? Object.freeze(g) : !d && f && (g = Array.prototype.slice.call(g), a.j[c] = g));
        return g
    };
    yc = function (a, b) {
        return null == a ? b : a
    };
    Ac = function (a, b) {
        zc = b;
        a = new a(b);
        zc = void 0;
        return a
    };
    Dc = function (a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a) if (Array.isArray(a)) {
                    if (0 !== (Hb(a) & 128)) return a = Array.prototype.slice.call(a), Xb(a), a
                } else {
                    if (Bb(a)) return yb(a);
                    if (a instanceof Sb) return Bc(a);
                    if (a instanceof tc) return Cc(a)
                }
        }
        return a
    };
    Fc = function (a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Ec(a, b, c, void 0 !== d); else if (Rb(a)) {
                var e = {}, f;
                for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = Fc(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    };
    Ec = function (a, b, c, d) {
        var e = Hb(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = Fc(a[f], b, c, d);
        c(e, a);
        return a
    };
    Ic = function (a) {
        return Fc(a, Gc, Hc)
    };
    Gc = function (a) {
        return a.Ed === bc ? a.toJSON() : a instanceof tc ? Cc(a, Ic) : Dc(a)
    };
    Hc = function (a, b) {
        a & 128 && Xb(b)
    };
    Jc = function (a, b, c) {
        c = void 0 === c ? Qb : c;
        if (null != a) {
            if (Ab && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Hb(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Ib(a, d | 18), a;
                a = Ec(a, Jc, d & 4 ? Qb : c, !0);
                b = Hb(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.Ed === bc ? a = Kc(a) : a instanceof tc && (b = Nb(uc(a, Jc)), a = new tc(b, a.J, a.D, a.l));
            return a
        }
    };
    Oc = function (a, b, c, d, e, f, g) {
        (a = a.j && a.j[c]) ? (d = Hb(a), d & 2 ? d = a : (f = _.Mc(a, Kc), Qb(d, f), Object.freeze(f), d = f), Nc(b, c, d, e)) : _.z(b, c, Jc(d, f, g), e)
    };
    Kc = function (a) {
        if (Mb(a.fa)) return a;
        a = Pc(a, !0);
        Nb(a.fa);
        return a
    };
    Pc = function (a, b) {
        var c = a.fa, d = Ob([]), e = a.constructor.messageId;
        e && d.push(e);
        e = a.Ha;
        if (e) {
            d.length = c.length;
            _.t(d, "fill").call(d, void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (Hb(c) & 128) && Xb(d);
        b = b || Mb(a.fa) ? Qb : Pb;
        d = Ac(a.constructor, d);
        a.zd && (d.zd = a.zd.slice());
        f = !!(Hb(c) & 16);
        for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++) Oc(a, d, h - a.ob, c[h], !1, f, b);
        if (e) for (var k in e) Oc(a, d, +k, e[k], !0, f, b);
        return d
    };
    hc = function (a) {
        if (!Mb(a.fa)) return a;
        var b = Pc(a, !1);
        b.B = a;
        return b
    };
    Qc = function (a, b) {
        if (Array.isArray(a)) {
            var c = Hb(a), d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Ib(a, c | d)
        }
    };
    Rc = function (a, b) {
        return Dc(b)
    };
    Vc = function (a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.A(Sc(c, a)), b = c.next().value, a = c.next().value, c = b);
        Tc = c >>> 0;
        Uc = a >>> 0
    };
    Xc = function (a) {
        if (16 > a.length) Vc(Number(a)); else if (Wc) a = BigInt(a), Tc = Number(a & BigInt(4294967295)) >>> 0, Uc = Number(a >> BigInt(32) & BigInt(4294967295)); else {
            var b = +("-" === a[0]);
            Uc = Tc = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Uc *= 1E6, Tc = 1E6 * Tc + d, 4294967296 <= Tc && (Uc += Tc / 4294967296 | 0, Tc %= 4294967296);
            b && (b = _.A(Sc(Tc, Uc)), a = b.next().value, b = b.next().value, Tc = a, Uc = b)
        }
    };
    Sc = function (a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    ad = function (a, b, c) {
        if (c) {
            var d = {}, e;
            for (e in c) {
                if (Object.prototype.hasOwnProperty.call(c, e)) {
                    var f = c[e], g = f.Dg;
                    g || (d.Mb = f.Oh || f.Vh.dd, f.Qe ? (d.jd = Yc(f.Qe), g = function (h) {
                        return function (k, l, n) {
                            return h.Mb(k, l, n, h.jd)
                        }
                    }(d)) : f.Mf ? (d.hd = Zc(f.hf.Zd, f.Mf), g = function (h) {
                        return function (k, l, n) {
                            return h.Mb(k, l, n, h.hd)
                        }
                    }(d)) : g = d.Mb, f.Dg = g);
                    g(b, a, f.hf)
                }
                d = {Mb: d.Mb, jd: d.jd, hd: d.hd}
            }
        }
        $c(b, a)
    };
    dd = function (a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
        return Array.isArray(c) && (bd in c || cd in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    };
    Yc = function (a) {
        var b = a[ed];
        if (!b) {
            var c = fd(a);
            b = function (d, e) {
                return gd(d, e, c)
            };
            a[ed] = b
        }
        return b
    };
    Zc = function (a, b) {
        var c = a[ed];
        c || (c = function (d, e) {
            return ad(d, e, b)
        }, a[ed] = c);
        return c
    };
    hd = function (a, b) {
        a.push(b)
    };
    id = function (a, b, c) {
        a.push(b, c.dd)
    };
    jd = function (a, b, c, d) {
        var e = Yc(d), f = fd(d).Zd, g = c.dd;
        a.push(b, function (h, k, l) {
            return g(h, k, l, f, e)
        })
    };
    kd = function (a, b, c, d, e, f) {
        var g = Zc(d, f), h = c.dd;
        a.push(b, function (k, l, n) {
            return h(k, l, n, d, g)
        })
    };
    fd = function (a) {
        var b = a[cd];
        if (b) return b;
        b = a[cd] = [];
        var c = hd, d = id, e = jd, f = kd;
        b.Zd = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) {
            var h = a[g++];
            c(b, h)
        }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = dd(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var l = g++;
                    l = dd(a, l);
                    e(k, c, h, l, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + k);
            }
        }
        bd in a && cd in a && (a.length = 0);
        return b
    };
    gd = function (a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2) (0, c[f + 1])(b, a, c[f]);
        ad(a, b, e ? c[0] : void 0)
    };
    ld = function (a, b) {
        return {Uh: a, dd: b}
    };
    pd = function (a, b, c) {
        b = x(b, c);
        null != b && ("string" === typeof b && md(b), null != b && (nd(a.j, 8 * c), "number" === typeof b ? (a = a.j, Vc(b), od(a, Tc, Uc)) : (c = md(b), od(a.j, c.m, c.j))))
    };
    qd = function (a) {
        return a
    };
    sd = function (a, b) {
        var c = rd;
        rd = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    td = function (a, b, c) {
        sd(a, b, c);
        return a
    };
    ud = function (a, b, c) {
        b = rd;
        rd = void 0;
        if (!a) {
            if (b) throw Error(b());
            if (c && 0 < c.length) throw Error("[" + c.map(String).join(",") + "]");
            throw Error(String(a));
        }
    };
    xd = function (a) {
        return function () {
            var b = new vd;
            gd(this, b, fd(a));
            wd(b, b.j.end());
            for (var c = new Uint8Array(b.m), d = b.D, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.D = [c];
            return c
        }
    };
    yd = function (a) {
        return function (b) {
            if (null == b || "" == b) b = new a; else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Ac(a, Ob(b))
            }
            return b
        }
    };
    zd = function (a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    Ed = function (a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function (f) {
            f = _.A(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.A(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next()) if (h = h.value, d && (h === b || Ad(h, b))) {
                    f = _.A(d);
                    for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                    d.length = 0;
                    c();
                    return
                }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {childList: !0, subtree: !0});
        Bd(function (f) {
            if (!f.parent || !Cd(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++) try {
                if (Dd(g[h]) == f) {
                    Ed(f.parent, g[h], c, d);
                    break
                }
            } catch (k) {
            }
            return !1
        }, !1, !1, a)
    };
    Fd = function (a) {
        a = void 0 === a ? _.q : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {
        }
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    B = function (a) {
        var b = eb.apply(1, arguments);
        if (0 === b.length) return Gd(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Gd(c.join(""))
    };
    Hd = function (a, b) {
        var c = Za(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function (e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Gd(c)
    };
    Id = function (a) {
        return JSON.stringify([a.map(function (b) {
            var c = {};
            return [(c[b.Ee] = b.message.toJSON(), c)]
        })])
    };
    Kd = function (a) {
        a.Ce.apply(a, _.Jd(eb.apply(1, arguments).map(function (b) {
            return {Ee: 2, message: b}
        })))
    };
    Ld = function (a) {
        a.Ce.apply(a, _.Jd(eb.apply(1, arguments).map(function (b) {
            return {Ee: 5, message: b}
        })))
    };
    Md = function (a) {
        a && "function" == typeof a.Ea && a.Ea()
    };
    Pd = function (a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.Nd("IMG", a.document);
        if (c || d) {
            var g = function (h) {
                c && c(h);
                d && ha(a.google_image_requests, f);
                _.Od(f, "load", g);
                _.Od(f, "error", g)
            };
            _.hb(f, "load", g);
            _.hb(f, "error", g)
        }
        e && (f.attributionsrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    Rd = function () {
        var a = Qd;
        return (0, C.xd)(function (b) {
            for (var c in a) if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }, function () {
            return "unknown enum"
        })
    };
    Td = function () {
        var a = Sd;
        return (0, C.xd)(function (b) {
            return b instanceof a
        }, function () {
            var b = a.name;
            b || (b = (b = /function\s+([^\(]+)/m.exec(String(a))) ? b[1] : "(Anonymous)");
            return b
        })
    };
    he = function (a, b) {
        var c;
        a:{
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (g) {
            }
            d = null
        }
        d = null != (c = d) ? c : "";
        try {
            var e = Ud(d);
            if (d) {
                var f = Ud(d);
                Vd(f, Wd(Xd(1), -1));
                Yd(f)
            }
        } catch (g) {
            Zd(d), e = new $d
        }
        if (c = (D = ae(e, be, 1), _.t(D, "find")).call(D, function (g) {
            return ce(g, 1, 0) === b
        })) if (f = de(c, 2), null === f || isNaN(f)) Zd(d); else return f;
        d = ee() ? null : Math.floor(1E3 * fe());
        if (null === d) return null;
        c ? Wd(c, d) : Vd(e, Wd(Xd(b), d));
        return ge(a, Yd(e)) ? d : null
    };
    Zd = function (a) {
        .01 > Math.random() && ie({data: a}, "ls_tamp")
    };
    je = function (a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {payload: b, Md: b.__uspapiReturn.callId}
    };
    le = function (a) {
        a = ke(a.data.__fciReturn);
        return {payload: a, Md: x(a, 1)}
    };
    me = function (a, b) {
        b = void 0 === b ? window : b;
        if (F(a, 5)) try {
            return b.localStorage
        } catch (c) {
        }
        return null
    };
    ne = function (a) {
        return "null" !== a.origin
    };
    pe = function (a, b, c) {
        b = F(b, 5) && ne(c) ? c.document.cookie : null;
        return null === b ? null : (new oe({cookie: b})).get(a) || ""
    };
    _.re = function (a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : qe()
    };
    _.se = function (a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    te = function (a, b) {
        b = void 0 === b ? _.q : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    ue = function (a) {
        a = void 0 === a ? _.q : a;
        var b = Math.min(te("domLoading", a) || Infinity, te("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(te("responseEnd", a), te("navigationStart", a)) : b
    };
    ve = function (a, b, c) {
        return b[a] || c
    };
    ye = function (a) {
        _.we(xe).J(a)
    };
    ze = function (a) {
        return _.we(xe).D(a)
    };
    Ce = function (a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = Ae.j();
        0 === e.j && (e.j = .001 > Math.random() ? 2 : 1);
        2 === e.j && (e = {}, ie(_.t(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(Be(window)), e.em = c, e.lid = b, e.eids = _.we(xe).j().join(), e), d), "esp"))
    };
    _.H = function (a) {
        return _.we(De).j(a.j, a.defaultValue)
    };
    _.Ee = function (a) {
        return _.we(De).m(a.j, a.defaultValue)
    };
    Fe = function (a) {
        return _.we(De).D(a.j, a.defaultValue)
    };
    Ge = function (a) {
        return _.we(De).J(a.j, a.defaultValue)
    };
    Oe = function (a, b, c, d) {
        Ce(18, a);
        try {
            var e = _.re();
            _.Ee(He) && (Ie(b, Number(((0, C.K)(Je(b, 8)) - 1).toFixed(3))), _.z(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function (f) {
                Ce(29, a, null, {delta: String(_.re() - e)});
                if (null == f) return Ce(41, a), Ke(b, 111, d), b;
                null != f && ("string" !== typeof f ? Ce(21, a) : f.length || Ce(20, a));
                Le(_.z(b, 2, f), 10);
                Me().set(b, d) && Ce(27, a);
                return b
            }).catch(function (f) {
                Ke(b, 106, d);
                Ce(28, a, Ne(f));
                return b
            })
        } catch (f) {
            return Ke(b, 107, d), Ce(1, a, Ne(f)), v.Promise.resolve(b)
        }
    };
    Ke = function (a, b, c) {
        var d;
        a.Aa(Pe(null != (d = Qe(a, Re, 10)) ? d : new Re, b));
        Me().set(a, c)
    };
    Se = function () {
        var a = window;
        var b = void 0 === b ? function () {
        } : b;
        return new v.Promise(function (c) {
            var d = function () {
                c(b());
                _.Od(a, "load", d)
            };
            _.hb(a, "load", d)
        })
    };
    Te = function (a) {
        var b = [], c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {
        }
        return b
    };
    af = function (a, b, c, d, e) {
        var f = new Ue, g = Ve(c, b), h = _.t(g, "flatMap").call(g, function (k) {
            return k.D()
        }).map(function (k) {
            return k.D()
        });
        We(f, a, b, h, e);
        Xe(f, g.concat(null != d ? d : []), c, b, a);
        if (!ae(f, Ye, 2).length) return null;
        Ce(50, "");
        return xb(f.D(), 3)
    };
    Xe = function (a, b, c, d, e) {
        if (d && c && b && "function" === typeof c.getUserIdsAsEidBySource) {
            if ("function" === typeof c.getUserIdsAsEids) try {
                for (var f = _.A(c.getUserIdsAsEids()), g = f.next(); !g.done; g = f.next()) {
                    var h = g.value;
                    "string" === typeof h.source && Ce(52, h.source)
                }
            } catch (m) {
                var k;
                Ce(45, "", null == (k = m) ? void 0 : k.message)
            }
            b = _.A(b);
            for (f = b.next(); !f.done; f = b.next()) if (f = f.value, String(bf(f, 1)) === d) for (f = _.A(f.D()), g = f.next(); !g.done; g = f.next()) if (g = g.value.D(), !cf(a, g)) {
                h = null;
                try {
                    var l = k = void 0, n = void 0;
                    h = null == (k = c.getUserIdsAsEidBySource(g)) ? void 0 : null == (l = k.uids) ? void 0 : null == (n = l[0]) ? void 0 : n.id
                } catch (m) {
                    k = void 0, Ce(45, g, null == (k = m) ? void 0 : k.message)
                }
                h ? 300 < h.length ? (k = {}, Ce(12, g, null, (k.sl = String(h.length), k.fp = "1", k))) : (k = df(g), k = _.z(k, 2, h), k = _.z(k, 11, !0), ef(a, 2, Ye, k), k = {}, Ce(19, g, null, (k.fp = "1", k.hs = h ? "1" : "0", k))) : (k = h = void 0, e && (null == (h = Me().get(g, e).mb) ? 0 : null == (k = x(h, 2)) ? 0 : k.length) && Ce(51, g))
            }
        }
    };
    We = function (a, b, c, d, e) {
        if (b) for (var f = _.A(Te(b)), g = f.next(); !g.done; g = f.next()) {
            g = g.value;
            var h = void 0;
            if (null == (h = d) || !_.t(h, "includes").call(h, g)) if (h = Me().get(g, b).mb) {
                var k = ff(h);
                if (2 !== k && 3 !== k) {
                    k = !1;
                    if (c) {
                        var l = void 0, n = null == (l = e) ? void 0 : l.get(c);
                        if (n && !n.has(g) && _.H(gf)) continue;
                        if ((l = /^(\d+)$/.exec(g)) && !(k = _.t(c.split(","), "includes").call(c.split(","), l[1]))) continue
                    }
                    _.z(h, 9, k);
                    l = x(h, 2);
                    _.H(hf) || (k = k ? 1E3 : 300, 0 <= k && l && l.length > k && (k = {}, Ce(12, g, null, (k.sl = String(l.length), k)), Ke(h, 108, b), Le(h, 2)));
                    ef(a, 2, Ye, h);
                    h = {};
                    Ce(19, g, null, (h.hs = l ? "1" : "0", h))
                }
            }
        }
    };
    Ve = function (a, b) {
        if (!b || "function" !== typeof (null == a ? void 0 : a.getUserIdsAsEidBySource)) return [];
        a = [];
        for (var c = _.A(Ge(jf)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = null;
            try {
                e = kf(d)
            } catch (f) {
                d = void 0;
                Ce(44, "UNKNOWN_ID", null == (d = f) ? void 0 : d.message);
                continue
            }
            bf(e, 1) === b && a.push(e)
        }
        return a
    };
    cf = function (a, b) {
        return ae(a, Ye, 2).some(function (c) {
            return x(c, 1) === b && null != x(c, 2)
        })
    };
    lf = function (a, b) {
        var c, d, e;
        return _.jb(function (f) {
            if (1 == f.j) return c = b ? a.filter(function (g) {
                return !g.nb
            }) : a, kb(f, v.Promise.all(c.map(function (g) {
                return g.pb.promise
            })), 2);
            if (3 != f.j) {
                if (a.length === c.length) return f.return(0);
                d = a.filter(function (g) {
                    return g.nb
                });
                e = _.re();
                return kb(f, v.Promise.race([v.Promise.all(d.map(function (g) {
                    return g.pb.promise
                })), new v.Promise(function (g) {
                    return void setTimeout(g, b)
                })]), 3)
            }
            return f.return(_.re() - e)
        })
    };
    mf = function (a) {
        var b = function (c) {
            var d = {};
            Ce(c, (0, C.K)(x(a, 1)), null, (d.tic = String(Math.round((Date.now() - (0, C.K)(x(a, 3))) / 6E4)), d))
        };
        switch (ff(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                break;
            case 2:
                b(26);
                break;
            case 3:
                Ce(9, (0, C.K)(x(a, 1)));
                break;
            case 4:
                b(23)
        }
    };
    nf = function (a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    Cf = function (a, b, c, d) {
        var e, f, g, h, k, l, n, m, p, r, u, w, E, N, G;
        return _.jb(function (R) {
            e = new of;
            f = _.Ee(He);
            g = new pf(a, c, d);
            h = new qf(g.o, c, d);
            k = new rf(g.l, f, d);
            l = new sf(k.l, f, d);
            n = new tf(l.o, f, d);
            m = new qf(n.o, c, d);
            r = p = null;
            _.H(hf) ? (u = new uf(n.l, d), I(e, u), p = u.o, w = new vf(b, u.l, d), I(e, w), I(e, new qf(w.l, c, d)), E = new wf(w.o, w.F, 300, 1E3, d), I(e, E), I(e, new qf(E.l, c, d)), r = function () {
                var T, Q, aa;
                return _.jb(function (ca) {
                    return 1 == ca.j ? (aa = a, kb(ca, E.l.promise, 2)) : ca.return({
                        id: aa,
                        collectorGeneratedData: null != (Q = null == (T = ca.m) ? void 0 : xf(T, 2)) ? Q : null
                    })
                })
            }) : (N = new yf(b, n.l, c, d), I(e, N), p = N.F, r = function () {
                var T;
                return _.jb(function (Q) {
                    return 1 == Q.j ? kb(Q, N.l.promise, 2) : Q.return(null != (T = Q.m) ? T : {
                        id: a,
                        collectorGeneratedData: null
                    })
                })
            });
            G = new zf(b, p, c, d);
            Af(e, [g, h, k, l, n, m, G]);
            Bf(e);
            return R.return(r())
        })
    };
    If = function (a, b, c) {
        b ? Df() === Ef(window) || _.H(Ff) ? Gf(a, "encryptedSignalProviders", c) && Gf(a, "secureSignalProviders", c) || (Ce(38, ""), Hf(a, "encryptedSignalProviders", b, c), Hf(a, "secureSignalProviders", b, c)) : Ce(16, "") : Ce(15, "")
    };
    Gf = function (a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    Hf = function (a, b, c, d) {
        var e, f = new Jf(null != (e = a[b]) ? e : [], c, "secureSignalProviders" === b);
        a[b] = new Kf(f);
        f.addErrorHandler(d)
    };
    Nf = function (a, b) {
        var c = new of, d = new Lf(b);
        a = new Mf(d.A, a, b);
        Af(c, [d, a]);
        Bf(c);
        return c
    };
    Rf = function (a, b, c, d) {
        if (!c) return null;
        var e = b.toString();
        if (Of.has(e)) return null;
        Of.add(e);
        var f = _.Ee(He);
        e = new of;
        a = new pf(a, c, d);
        var g = new qf(a.o, c, d), h = new Pf(a.l, d), k = new rf(h.l, f, d);
        f = new tf(k.l, f, d);
        var l = new qf(f.o, c, d);
        b = new Qf(f.l, b, d);
        c = new qf(b.l, c, d);
        Af(e, [a, g, h, k, f, l, b, c]);
        Bf(e);
        return e
    };
    Sf = function (a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(D = c.allowedFeatures(), _.t(D, "includes")).call(D, a))
    };
    Uf = function (a) {
        _.we(Tf).j(a)
    };
    Yf = function () {
        if (void 0 === b) {
            var a = void 0 === a ? _.q : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        Vf(_.we(xe), a);
        Wf(b);
        Xf(_.we(Tf), b);
        _.we(De).B()
    };
    Wf = function (a) {
        var b = _.we(De);
        b.j = function (c, d) {
            return ve(5, a, function () {
                return !1
            })(c, d, 2)
        };
        b.m = function (c, d) {
            return ve(6, a, function () {
                return 0
            })(c, d, 2)
        };
        b.D = function (c, d) {
            return ve(7, a, function () {
                return ""
            })(c, d, 2)
        };
        b.J = function (c, d) {
            return ve(8, a, function () {
                return []
            })(c, d, 2)
        };
        b.B = function () {
            ve(15, a, function () {
            })(2)
        }
    };
    pg = function (a) {
        var b = void 0 === b ? Zf : b;
        var c = _.t(Object, "assign").call(Object, {}, a), d = a.id, e = a.style;
        a = a.data;
        c = (delete c.id, delete c.style, delete c.data, c);
        if (_.t(Object, "keys").call(Object, c).length) throw Error("Invalid attribute(s): " + _.t(Object, "keys").call(Object, c));
        d = {id: d, style: e ? e : void 0};
        if (a) for (e = _.A(_.t(a, "entries").call(a)), a = e.next(); !a.done; a = e.next()) c = _.A(a.value), a = c.next().value, c = c.next().value, (0, C.re)($f.test(a)), d[a] = c;
        if (!bg.test("div")) throw Error("");
        if ("DIV" in cg) throw Error("");
        e = "";
        if (d) for (f in d) if (Object.prototype.hasOwnProperty.call(d, f)) {
            if (!bg.test(f)) throw Error("");
            c = d[f];
            if (null != c) {
                a = f;
                if (c instanceof dg) c = eg(c); else {
                    if ("style" == a.toLowerCase()) throw Error("");
                    if (/^on/i.test(a)) throw Error("");
                    if (a.toLowerCase() in fg) if (c instanceof gg) c = Za(c).toString(); else if (c instanceof Ra) c = Sa(c); else if ("string" === typeof c) c instanceof Ra || (c = "object" == typeof c && c.Ua ? c.La() : String(c), hg.test(c) ? c = _.fb(c) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(ig) ? _.fb(c) : null)), c = (c || _.jg).La(); else throw Error("");
                }
                c.Ua && (c = c.La());
                a = a + '="' + kg(String(c)) + '"';
                e += " " + a
            }
        }
        var f = "<div" + e;
        null == b ? b = [] : Array.isArray(b) || (b = [b]);
        !0 === lg.div ? f += ">" : (d = mg(b), f += ">" + ab(d).toString() + "</div>");
        return new ng(f, og)
    };
    ug = function (a) {
        qg();
        var b = rg.googleToken[5] || 0;
        a && (0 != b || sg[3] >= qe() ? tg.Ud(a) : (tg.Mc().push(a), tg.ue()));
        sg[3] >= qe() && sg[2] >= qe() || tg.ue()
    };
    vg = function (a) {
        a = _.Mc(a.split(/\s+/), function (b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {value: parseFloat(b[1]), type: b[2]} : {value: 0, type: "px"}
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    xg = function (a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.wg(a, function (b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        oa(a);
        qa(a, function (b, c) {
            return b - c
        });
        return a
    };
    yg = function (a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
        }
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0}
    };
    Cg = function (a, b, c, d) {
        var e = new _.zg, f = "", g = function (k) {
            try {
                var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (_.Od(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
            } catch (n) {
            }
        }, h = Ag(a);
        return h ? (_.hb(a, "message", g), f = c(h), e.promise) : (c = Bg(a)) ? (f = String(Math.floor(2147483647 * fe())), _.hb(a, "message", g), b(c, f), e.promise) : null
    };
    Dg = function (a) {
        return Cg(a, function (b, c) {
            var d, e;
            return void (null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function (b) {
            return b.getQueryInfo()
        }, function (b) {
            return b.signal
        })
    };
    Eg = function (a) {
        return !!Ag(a) || !!Bg(a)
    };
    Ag = function (a) {
        var b;
        if ("function" === typeof (null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    Bg = function (a) {
        var b, c, d, e, f, g;
        if ("function" === typeof (null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof (null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Fg = function (a) {
        var b, c;
        return null != (c = (D = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function (d) {
            return a[d]
        }), _.t(D, "find")).call(D, function (d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Gg = function (a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {cmd: []});
                var e, f = null != (e = b.googletag.queryIds) ? e : [];
                f.push(c);
                500 < f.length && f.shift();
                b.googletag.queryIds = f
            }
        } catch (g) {
        }
    };
    Ig = function (a, b, c) {
        c = void 0 === c ? null : c;
        b = _.A(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a, f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x, k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = Hg(g, e, f, d))) a:{
                    d = void 0 === d ? null : d;
                    h = e.document;
                    for (g = g.offsetParent; g && g !== h.body; g = g.offsetParent) if (k = Hg(g, e, f, d)) {
                        h = k;
                        break a
                    }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    };
    Jg = function (a, b, c, d, e) {
        for (var f = [], g = 0; g < e; g++) for (var h = 0; h < b; h++) {
            var k = f, l = b - 1, n = e - 1;
            k.push.call(k, {x: (0 === l ? 0 : h / l) * a, y: c + (0 === n ? 0 : g / n) * (d - c)})
        }
        return f
    };
    Hg = function (a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== Kg(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= _.Lg(_.Mg, a).width && 1 >= _.Lg(_.Mg, a).height ? !0 : !1;
        if (d) {
            var f, g;
            d.j("ach_evt", {
                tn: a.tagName,
                id: null != (f = a.getAttribute("id")) ? f : "",
                cls: null != (g = a.getAttribute("class")) ? g : "",
                ign: String(e),
                pw: b.innerWidth,
                ph: b.innerHeight,
                x: c.x,
                y: c.y
            }, !0, 1)
        }
        return e ? null : a
    };
    Ng = function (a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.wg(b, function (d) {
            return c - d < 1E3 * a
        })
    };
    Pg = function (a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {
            }
            if (!Array.isArray(d) || _.Og(d, function (e) {
                return !_.t(Number, "isInteger").call(Number, e)
            })) return a.removeItem("__lsv__"), [];
            d = Ng(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    Qg = function (a, b) {
        .001 > fe() && ie({c: a, s: b}, "gpt_whirs")
    };
    Rg = function (a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    _.Ug = function (a) {
        _.we(Sg).j = !0;
        return Tg[a]
    };
    Zg = function (a) {
        var b = new Vg;
        b = _.y(b, 1, Date.now(), 0);
        b = _.y(b, 2, a.pvsid, 0);
        b = _.y(b, 3, a.Ga, "");
        var c = _.we(xe).j();
        b = Wg(b, 4, c);
        b = _.y(b, 5, a.Kf, 0);
        a = _.y(b, 12, a.bf, "");
        var d;
        if (b = null == (d = v.globalThis.performance) ? void 0 : d.memory) {
            d = new Xg;
            try {
                _.y(d, 1, b.jsHeapSizeLimit, 0)
            } catch (e) {
            }
            try {
                _.y(d, 2, b.totalJSHeapSize, 0)
            } catch (e) {
            }
            try {
                _.y(d, 3, b.usedJSHeapSize, 0)
            } catch (e) {
            }
        } else d = void 0;
        d && _.Yg(a, 10, d);
        return a
    };
    ch = function (a) {
        var b = ue();
        if (a.qc) {
            var c = a.xb;
            a = Zg(a);
            var d = new $g;
            b = _.y(d, 2, b, 0);
            b = ah(a, 6, bh, b);
            Ld(c, b)
        }
    };
    J = function (a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function () {
            var e = eb.apply(0, arguments), f = _.dh(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.qc && a.jg) {
                    var h = a.xb, k = Zg(a);
                    var l = _.y(k, 5, a.Jf, 0);
                    var n = new eh;
                    var m = _.y(n, 1, b, 0);
                    var p = _.y(m, 2, g, 0);
                    var r = ah(l, 9, bh, p);
                    Ld(h, r)
                }
            } catch (u) {
            }
            return f
        }
    };
    _.dh = function (a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function () {
            var e = eb.apply(0, arguments), f = void 0, g = !1, h = null, k = _.we(fh);
            try {
                var l = _.H(gh);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (n) {
                try {
                    if (g) hh.call(this, a, 110, n); else if (hh.call(this, a, b, n), !d) throw n;
                } catch (m) {
                    if ((e = h) && ih && jh() && (ih.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_start"), ih.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_end")), !g && !d) throw n;
                }
            }
            return f
        }
    };
    _.kh = function (a, b, c, d) {
        return _.dh(a, b, c, void 0 === d ? !1 : d)()
    };
    hh = function (a, b, c) {
        if (a.Be) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new lh, e = new mh;
            try {
                var f = Be(window);
                _.y(e, 1, f, 0)
            } catch (p) {
            }
            try {
                var g = _.we(xe).j();
                Wg(e, 2, g)
            } catch (p) {
            }
            try {
                _.y(e, 3, window.document.URL, "")
            } catch (p) {
            }
            f = _.Yg(d, 2, e);
            g = new nh;
            b = _.y(g, 1, b, 0);
            try {
                var h = oh(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.y(b, 2, h, "")
            } catch (p) {
            }
            try {
                var k = oh(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.y(b, 3, k, "")
            } catch (p) {
            }
            try {
                var l = oh(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.ph(b, 4, l.split(/\n\s*/))
            } catch (p) {
            }
            h = _.Yg(f, 1, b);
            k = new qh;
            try {
                _.y(k, 1, a.ib || a.Ga, "")
            } catch (p) {
            }
            try {
                var n = rh();
                _.y(k, 2, n, 0)
            } catch (p) {
            }
            try {
                var m = [].concat(_.Jd(_.t(sh, "keys").call(sh)));
                _.ph(k, 3, m)
            } catch (p) {
            }
            ah(h, 4, th, k);
            _.y(h, 5, a.ae, 0);
            Kd(a.xb, h)
        }
    };
    vh = function (a, b) {
        var c, d;
        return null != (d = null == (c = _.t(a, "find").call(a, function (e) {
            e = (0, C.K)(Qe(e, uh, 1));
            return x(e, 1) <= x(b, 1) && x(e, 2) <= x(b, 2)
        })) ? void 0 : ae(c, uh, 2)) ? d : null
    };
    zh = function (a, b, c) {
        return "number" === typeof b && "number" === typeof c && ae(a, wh, 6).length ? vh(ae(a, wh, 6), xh(yh(new uh, b), c)) : ae(a, uh, 5)
    };
    Bh = function (a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Ah(!1, b), c = zh(a, b.width, b.height));
        null != c || (c = zh(a));
        return null == c ? [] : c.map(function (d) {
            return F(d, 3) ? "fluid" : [(0, C.ra)(x(d, 1)), (0, C.ra)(x(d, 2))]
        })
    };
    Ch = function (a) {
        var b = [], c = !1;
        a = _.A(Bh(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Eh = function (a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(x(a, 1)), c.push(Ch(a)), c.push(x(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? Dh(c.join(":")).toString() : "0"
    };
    Fh = function (a) {
        return 0 !== a && 1 !== a
    };
    Hh = function (a, b) {
        var c;
        return !(null != (c = Gh(b, 22)) ? !c : !F(a, 15))
    };
    Jh = function (a) {
        var b = a.document;
        return Ih(a) ? b.URL : b.referrer
    };
    Mh = function (a) {
        try {
            return Kh(a, window.top)
        } catch (b) {
            return new _.Lh(-12245933, -12245933)
        }
    };
    Ph = function (a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Lg(Nh, a), a = new _.Oh(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Rh = function (a, b) {
        for (var c = {}, d = _.A(_.t(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = Pc(b[e], !1), g = _.we(Qh), h = g.j.get(e);
            null == h ? h = ++_.we(fh).D : g.j.delete(e);
            _.z(f, 20, h);
            c[e] = f
        }
        return {U: Pc(a, !1), V: c}
    };
    Vh = function () {
        switch (_.Ee(Sh)) {
            case 1:
                return Th();
            case 2:
                return "9901b501132b9fabe59d89fcfe6bb421";
            default:
                return Uh()
        }
    };
    Th = function () {
        for (var a = "", b = _.A(Wh()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Wh = function () {
        var a;
        if ("function" === typeof (null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof (null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    ci = function (a, b, c, d) {
        var e = Xh(b, a) || Yh(b, a);
        if (!e) return null;
        var f = Mh(e), g = e === Yh(b, a), h = Zh(function () {
            var p = g ? Yh(b, a) : e;
            return p && $h(p, window)
        }), k = function (p) {
            var r;
            return null == (r = h()) ? void 0 : r.getPropertyValue(p)
        };
        c = Bh(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var n;
            f.y += Math.round(Math.min(null != (n = ai(k("padding-top"))) ? n : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var m;
                f.x += Math.round(Math.min(null != (m = ai(k("padding-left"))) ? m : 0, d))
            }
        }
        return f && bi(e) ? f : new _.Lh(-12245933, -12245933)
    };
    di = function (a, b, c, d) {
        var e = Yh(a, c), f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = ci(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    ei = function (a) {
        return "google_ads_iframe_" + a.toString()
    };
    fi = function (a) {
        return ei(a) + "__container__"
    };
    Xh = function (a, b) {
        var c;
        return (null == (c = Yh(a, b)) ? void 0 : c.querySelector('[id="' + fi(a) + '"]')) || null
    };
    gi = function (a, b) {
        var c, d;
        return null != (d = null == (c = Xh(a, b)) ? void 0 : c.querySelector('iframe[id="' + ei(a) + '"]')) ? d : null
    };
    Yh = function (a, b) {
        b = void 0 === b ? document : b;
        return hi().D.get(a) || b.getElementById(a.getDomId())
    };
    ii = function (a) {
        return Math.round(Number(ai(a)))
    };
    ki = function (a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.ji(a, c), a = a.parentElement
    };
    li = function (a, b, c, d, e) {
        _.ji(a, {"margin-left": "0px", "margin-right": "0px"});
        var f = {}, g = "rtl" === d.direction, h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function () {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function (k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.ji(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.ji(a, f)), !0) : !1
    };
    ni = function (a, b, c, d, e, f, g, h, k) {
        var l = Ch(d);
        _.q.setTimeout(_.dh(a, 459, function () {
            return void mi(a, b, c, e, f, g, l, h, k)
        }), 500)
    };
    mi = function (a, b, c, d, e, f, g, h, k) {
        if (_.q.IntersectionObserver) {
            var l = null, n, m = null != (n = gi(c, b)) ? n : Yh(c, b);
            n = _.dh(a, 459, function (p) {
                if (p = p && p[0]) {
                    var r = p.boundingClientRect, u = window.innerWidth, w = Math.round(r.left),
                        E = Math.round(r.right), N = 0 > w + 2, G = 0 < E - (u + 2);
                    if (p.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / e || N || G) oi(h, function (R) {
                        if (N || G) {
                            var T = new pi;
                            T.set(8);
                            qi(m) && T.set(10);
                            T = ri(T)
                        } else T = si(b, c);
                        var Q = ti(c, m, f), aa = Q.Df;
                        Q = Q.Ef;
                        ui(R, a);
                        K(R, "qid", k);
                        K(R, "iu", c.getAdUnitPath());
                        K(R, "e", String(T));
                        N && K(R, "ofl", String(w));
                        G && K(R, "ofr", String(E - u));
                        K(R, "ret", e + "x" + f);
                        K(R, "req", g);
                        K(R, "bm", String(d));
                        K(R, "efh", Number(aa));
                        K(R, "stk", Number(Q));
                        K(R, "ifi", vi(window))
                    }, _.Ee(wi)), l && l.unobserve((0, C.K)(m))
                }
            });
            m && (l = new _.q.IntersectionObserver(n, {threshold: [1]}), (0, C.K)(l).observe(m))
        }
    };
    si = function (a, b) {
        var c = gi(b, a) || Yh(b, a), d = new pi;
        try {
            var e = c.getBoundingClientRect(), f = e.left, g = e.top, h = e.width, k = e.height, l = Yh(b, a),
                n = (0, C.K)($h(l, window));
            if ("hidden" === n.visibility || "none" === n.display) return ri(d);
            var m = ii(n.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var p = a.elementsFromPoint(f + m + 2, g + m);
            var r = a.elementsFromPoint(b - m - 2, g + m);
            var u = a.elementsFromPoint(b - m - 2, k - m);
            var w = a.elementsFromPoint(f + m + 2, k - m);
            var E = a.elementsFromPoint(b / 2, k - m)
        } catch (G) {
            return d.set(1), ri(d)
        }
        if (!(p && p.length && r && r.length && u && u.length && w && w.length && E && E.length)) return d.set(7), ri(d);
        a = function (G, R) {
            for (var T = !1, Q = 0; Q < G.length; Q++) {
                var aa = G[Q];
                if (T) {
                    var ca = $h(aa, window);
                    if ("hidden" !== ca.visibility && !xi(aa) && !N(c, aa)) {
                        d.set(R);
                        "absolute" === ca.position && d.set(11);
                        break
                    }
                } else c === aa && (T = !0)
            }
        };
        yi(c) && d.set(9);
        var N = function (G, R) {
            return Ci(G, R) || Ci(R, G)
        };
        f = p[0];
        c === f || N(c, f) || xi(f) || d.set(2);
        f = r[0];
        c === f || N(c, f) || xi(f) || d.set(3);
        f = u[0];
        c === f || N(c, f) || xi(f) || d.set(4);
        f = w[0];
        c === f || N(c, f) || xi(f) || d.set(5);
        if (xi(c)) return ri(d);
        a(p, 12);
        a(r, 13);
        a(u, 14);
        a(w, 15);
        a(E, 6);
        return ri(d)
    };
    qi = function (a) {
        var b = !1, c = !1;
        return Di(a, function (d) {
            c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
            return (b = b || "flex" === d.display) && c
        })
    };
    ti = function (a, b, c) {
        var d = (a = Yh(a)) && $h(a, window), e = d ? "absolute" !== d.position : !0, f = !1, g = a && a.parentElement,
            h = !1;
        Ei(b, function (k) {
            var l = k.style;
            if (e) if (h || (h = k === g)) e = Fi(k, _.q, -1, -1); else {
                l = l && l.height;
                var n = (l && _.t(l, "endsWith").call(l, "px") ? ii(l) : 0) >= c;
                !l || n || "string" === typeof l && _.t(Gi, "includes").call(Gi, l) || (e = !1)
            }
            f || (k = $h(k, _.q), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {Df: e, Ef: f}
    };
    Fi = function (a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.t(Gi, "includes").call(Gi, e.height) || (null == e ? 0 : e.maxHeight) && !_.t(Hi, "includes").call(Hi, e.maxHeight) || Ii(a, b.document, function (f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.t(Gi, "includes").call(Gi, g) || !!f && !_.t(Hi, "includes").call(Hi, f)
        }, c, d) ? !1 : !0
    };
    Ii = function (a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g], l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (R) {
                    if (15 == R.code) throw R.styleSheet = k, R;
                }
                h = l
            } catch (R) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length) for (l = 0; l < Math.min(h.length, e); ++l) try {
                var n = h[l], m, p = c;
                if (!(m = f.call(a, n.selectorText) && p(n))) a:{
                    var r = void 0;
                    p = a;
                    var u = c, w = e, E = null != (r = n.cssRules) ? r : [];
                    for (r = 0; r < Math.min(E.length, w); r++) {
                        var N = E[r], G = u;
                        if (f.call(p, N.selectorText) && G(N)) {
                            m = !0;
                            break a
                        }
                    }
                    m = !1
                }
                if (m) return !0
            } catch (R) {
            }
        }
        return !1
    };
    xi = function (a) {
        return Di(a, function (b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    yi = function (a) {
        return Di(a, function (b) {
            var c;
            return (D = ["left", "right"], _.t(D, "includes")).call(D, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Ji = function (a) {
        return "number" === typeof a || "string" === typeof a
    };
    Ki = function (a, b) {
        /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = Gd(b), a.src = Za(b).toString())
    };
    Mi = function (a, b, c) {
        c = void 0 === c ? Li : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {value: !0}), "complete" === a.document.readyState ? c(a, b) : _.hb(a, "load", function () {
            return void c(a, b)
        }))
    };
    Ni = function (a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {
        }
        return null
    };
    Oi = function (a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Pi = function (a) {
        if (a === a.top || Cd(a.top)) return v.Promise.resolve({status: 4});
        var b = Ni(a);
        if (!b) return v.Promise.resolve({status: 2});
        if (a.parent === a.top && Oi(a.document.referrer)) return v.Promise.resolve({status: 3});
        var c = new _.zg;
        a = new MessageChannel;
        a.port1.onmessage = function (d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({Hc: d.data.topUrl, status: d.data.topUrl ? 0 : 1})
        };
        b.postMessage({msgType: "__goog_top_url_req"}, "*", [a.port2]);
        return c.promise
    };
    Ti = function (a) {
        var b = void 0 === b ? Qi : b;
        var c = Ri(a);
        return c.messageChannelSendRequestFn ? v.Promise.resolve(c.messageChannelSendRequestFn) : new v.Promise(function (d) {
            function e(k) {
                return h.j(k).then(function (l) {
                    return l.data
                })
            }

            var f = _.Nd("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            f.src = Za(b).toString();
            var g = (new URL(b.toString())).origin,
                h = Si({destination: a, Pc: f, origin: g, Ka: "goog:gRpYw:doubleclick"});
            h.j("goog:topics:frame:handshake:ack").then(function (k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    Yi = function (a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        var f = Ui(d), g = f.Dc, h = f.Cc;
        b = Ri(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(function (k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && wa(k, g))); else if (Rd()(k)) l || (l = k !== g); else return k = Error(JSON.stringify(k)), hh(c.context, 989, k), 7;
            if (l && d) try {
                var n = new Vi;
                var m = _.z(n, 2, _.re());
                k instanceof Uint8Array ? Wi(m, 1, Xi, Ub(k, !1, !1)) : Wi(m, 3, Xi, k);
                d.setItem("goog:cached:topics", Yd(m))
            } catch (p) {
            }
            return k
        }), b.getTopicsPromise = (0, C.ra)(a));
        return g && !h ? v.Promise.resolve(g) : b.getTopicsPromise
    };
    Ui = function (a) {
        if (!a) return {Dc: null, Cc: !0};
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {Dc: null, Cc: !0};
            var c = Zi(b), d = $i(c, Xi);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f = aj(c, Xi, 1), g = x(c, f), h = Ub(g, !0, !!(Hb(c.fa) & 18));
                    null != h && h !== g && nc(c, f, h);
                    var k = null == h ? Tb() : h;
                    var l = bj(k);
                    e = l ? new Uint8Array(l) : cj || (cj = new Uint8Array(0));
                    break;
                case 3:
                    e = ce(c, aj(c, Xi, 3), 0);
                    break;
                default:
                    Va(d)
            }
            var n = dj(c, 2) + 6048E5 < _.re();
            return {Dc: e, Cc: n}
        } catch (m) {
            return {Dc: null, Cc: !0}
        }
    };
    Ri = function (a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    gj = function (a) {
        if (La()) {
            var b = a.document.documentElement.lang;
            ej(a) ? fj(Be(a), !0, "", b) : (new MutationObserver(function (c, d) {
                ej(a) && (fj(Be(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {attributeFilter: ["class"]})
        }
    };
    ej = function (a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    fj = function (a, b, c, d) {
        ie({ptt: "17", pvsid: "" + a, ibatl: String(b), pl: c, nl: d}, "translate-event")
    };
    hj = function (a) {
        var b = "";
        Bd(function (c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    ij = function (a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    };
    jj = function (a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    };
    lj = function () {
        var a = window;
        if (!jj(a)) return null;
        var b = ij(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(kj).then(function (c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    };
    xj = function (a) {
        var b;
        return mj(nj(oj(pj(qj(rj(sj(tj(uj(new vj, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function (c) {
            var d = new wj;
            d = _.z(d, 1, c.brand);
            return _.z(d, 2, c.version)
        })) || []), a.wow64 || !1)
    };
    yj = function () {
        var a, b;
        return null != (b = null == (a = lj()) ? void 0 : a.then(function (c) {
            return xj(c)
        })) ? b : null
    };
    Aj = function (a) {
        a = (Cd(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!zj(a, function (b, c) {
            return !/^inabox/i.test(c)
        })
    };
    Dj = function (a, b) {
        var c = Bj.get(a);
        c || (b = c = b(), Cj.set(b, a), Bj.set(a, b));
        return c
    };
    Fj = function (a, b) {
        return (0, C.ra)(Dj(b, function () {
            return new Ej(a, b)
        }))
    };
    L = function (a) {
        return function () {
            return new Gj(a, [].concat(_.Jd(eb.apply(0, arguments))))
        }
    };
    Hj = function (a) {
        return "[" + a.map(function (b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Hj(b) : String(b)
        }).join(", ") + "]"
    };
    Ij = function (a, b) {
        b = Hj(b);
        b = b.substring(1, b.length - 1);
        return new Gj(96, [a, b])
    };
    Jj = function (a) {
        return (D = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable".split(" "), _.t(D, "includes")).call(D, a) ? a : null
    };
    Lj = function (a, b, c) {
        return Dj(c, function () {
            return new Kj(a, b, c)
        })
    };
    Nj = function (a, b, c) {
        return Dj(c, function () {
            return new Mj(a, b, c)
        })
    };
    Oj = function () {
        var a;
        return null != (a = _.q.googletag) ? a : _.q.googletag = {cmd: []}
    };
    Pj = function () {
        var a = Oj();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    Sj = function (a) {
        var b = window;
        "complete" === _.q.document.readyState ? _.kh(a, 94, function () {
            Oj()._pubconsole_disable_ || null !== Qj(b) && Rj(a, b)
        }) : _.hb(_.q, "load", _.dh(a, 94, function () {
            Oj()._pubconsole_disable_ || null !== Qj(b) && Rj(a, b)
        }))
    };
    Rj = function (a, b) {
        b = void 0 === b ? _.q : b;
        if (!Tj) {
            var c = new Uj("gpt_pubconsole_loaded");
            ui(c, a);
            K(c, "param", String(Qj(b)));
            K(c, "api", String(Vj));
            Wj(c);
            Xj(b.document, Yj);
            Tj = !0
        }
    };
    Qj = function (a) {
        var b = Jh(a), c;
        return null != (c = (D = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.t(D, "find")).call(D, function (d) {
            return null !== Zj(b, d)
        })) ? c : null
    };
    ak = function () {
        Oj()._pubconsole_disable_ = !0
    };
    dk = function () {
        bk && ((0, C.K)(Oj().console).openConsole(ck), ck = void 0, bk = !1)
    };
    kk = function (a, b, c, d, e) {
        if ("string" !== typeof c || ek(c)) M(e, Ij("Slot.setTargeting", [c, d]), a); else {
            var f = [];
            Array.isArray(d) ? f = d : ua(d) ? f = _.t(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (D = fk(b), _.t(D, "find")).call(D, function (g) {
                return x(g, 1) === c
            })) ? gk(d, f) : (d = gk(hk(new ik, c), f), ef(b, 9, ik, d));
            e.info(jk(c, f.join(), (0, C.K)(b.getAdUnitPath())), a)
        }
    };
    lk = function (a, b, c, d) {
        if (null != c && "object" === typeof c) for (var e = _.A(_.t(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, kk(a, b, f, c[f], d); else d.error(Ij("Slot.updateTargetingFromMap", [c]), a)
    };
    nk = function (a, b, c) {
        return Dj(c, function () {
            return new mk(a, b, c, c.j)
        })
    };
    ok = function (a) {
        return _.t(Object, "assign").call(Object, {}, a, _.t(Object, "fromEntries").call(Object, _.t(Object, "entries").call(Object, a).map(function (b) {
            b = _.A(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    sk = function () {
        var a = {}, b = ok(pk);
        a.OutOfPageFormat = b;
        b = ok(qk);
        a.TrafficSource = b;
        b = ok(rk);
        a.Taxonomy = b;
        return a
    };
    uk = function () {
        for (var a = Fe(tk) || "0-0-0", b = a.split("-").map(function (e) {
            return Number(e)
        }), c = ["1", "0", "40"].map(function (e) {
            return Number(e)
        }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    yk = function () {
        if (vk) return vk;
        for (var a = Ge(wk), b = [], c = 0; c < a.length; c += 2) xk(a[c], a[c + 1], b);
        return vk = b.join("&")
    };
    Ek = function (a, b) {
        if (!b || !_.ka(b)) return null;
        var c = !1, d = new zk;
        _.Ak(b, function (e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? _.z(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? _.z(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? _.z(d, 3, b.sandbox) : c = g = !0;
                    break;
                case "useUniqueDomain":
                    Bk();
                    return;
                default:
                    g = !0
            }
            g && a.error(Ck("setSafeFrameConfig", Dk(b), f, Dk(e)))
        });
        return c ? null : d
    };
    Gk = function (a) {
        var b = new zk;
        a = _.A(a);
        for (var c = a.next(); !c.done; c = a.next()) if (c = c.value) Fk(c, 1) && _.z(b, 1, F(c, 1)), Fk(c, 2) && _.z(b, 2, F(c, 2)), Fk(c, 3) && _.z(b, 3, F(c, 3)), Fk(c, 4) && _.z(b, 4, F(c, 4));
        return b
    };
    Ik = function () {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = Hk.exec(null != (b = null == (a = _.Ug(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    Jk = function (a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    Kk = function (a, b) {
        var c = b.j;
        return a.map(function (d) {
            return _.t(c, "find").call(c, function (e) {
                return e.j === d
            })
        }).filter(Td())
    };
    Nk = function (a, b) {
        b = _.H(Lk) ? b : _.we(Mk);
        var c = [];
        a = _.A(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            b.J = d;
            var e = ze(9);
            1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
        }
        return c
    };
    Qk = function (a, b, c, d, e, f) {
        var g = Ok(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Ya;
        if (!f || !g) return M(b, Ij("PubAdsService.definePassback", [d, e])), null;
        _.z(g, 17, !0);
        c.slotAdded(f, g);
        return {qe: nk(a, b, new Pk(a, f, c)), Ya: g}
    };
    Sk = function (a, b, c, d, e) {
        return Dj(c, function () {
            return new Rk(a, b, c, d, e)
        })
    };
    Uk = function (a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Tk) : "fluid" === a
    };
    Vk = function (a) {
        return Array.isArray(a) && 2 === a.length && Tk(a[0]) && Tk(a[1])
    };
    Xk = function (a) {
        return Array.isArray(a) ? xh(yh(new uh, (0, C.ra)(a[0])), (0, C.ra)(a[1])) : Wk()
    };
    Zk = function (a) {
        var b = [];
        if (Yk(a)) b.push(Xk((0, C.K)(a))); else if (Array.isArray(a)) {
            a = _.A(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Yk(c) ? b.push(Xk((0, C.K)(c))) : wa(c, ["fluid"]) && b.push(Wk())
        }
        return b
    };
    $k = function (a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return Zk(a)
    };
    Yk = function (a) {
        return _.H(al) ? Array.isArray(a) && 2 === a.length ? a.every(bl) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    ra = function (a, b) {
        a:{
            b = (0, C.ra)(b[0]);
            a = (0, C.ra)(a[0]);
            for (var c = pa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = pa(b.length, a.length)
        }
        return b
    };
    dl = function (a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new cl("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!Vk(b)) throw new cl("Size must be an array of two non-negative integers");
        b = xh(yh(new uh, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = []; else if (a = Zk(a[1]), 0 === a.length) throw new cl("At least one slot size must be present");
        var c = new wh;
        b = _.Yg(c, 1, b);
        return Nc(b, 2, a)
    };
    fl = function (a, b, c) {
        return Dj(c, function () {
            return new el(a, b, c)
        })
    };
    gl = function (a) {
        var b = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
        return 3 !== (null == b ? void 0 : b.length) ? a : "/" + b[1] + b[2]
    };
    il = function (a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(_.H(hl) ? gl(a) : a)) ? c : null == b ? void 0 : b.get(Dh(a))) ? d : 0
    };
    nl = function (a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = {};
            f = _.A(e);
            for (g = f.next(); !g.done; a = {zc: a.zc}, g = f.next()) {
                e = g.value;
                g = e.code;
                var h = e.bids;
                e = void 0;
                if (g && null != (e = h) && e.length && (g = il(g, b), a.zc = g / 1E6, !(0 >= g))) {
                    var k = void 0;
                    e = {};
                    h = _.A(null != (k = h) ? k : []);
                    for (k = h.next(); !k.done; e = {
                        Qa: e.Qa,
                        fd: e.fd
                    }, k = h.next()) k = k.value, e.fd = "function" === typeof k.getFloor ? k.getFloor : void 0, e.Qa = jl(kl(ll(new ml, 4), g), c), k.getFloor = function (l, n) {
                        return function (m) {
                            4 === ce(l.Qa, 1, 0) && ll(l.Qa, 1);
                            var p, r = null == (p = l.fd) ? void 0 : p.apply(this, [m]);
                            m = c ? r || {} : {currency: "USD", floor: n.zc};
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === ce(l.Qa, 1, 0) && (m = kl(ll(l.Qa, 6), 1E6 * r.floor), _.z(m, 3, r.currency)), r) : (r.floor || 0) > n.zc ? (1 === ce(l.Qa, 1, 0) && kl(ll(l.Qa, 5), 1E6 * r.floor), r) : m : m
                        }
                    }(e, a), d.set(k.getFloor, e.Qa)
                }
            }
        }
    };
    wl = function (a, b, c, d, e) {
        var f, g,
            h = null == (f = e.getBidResponsesForAdUnitCode) ? void 0 : null == (g = f.call(e, b.getDomId())) ? void 0 : g.bids,
            k;
        if (null == (k = h) || !k.length) {
            var l;
            h = (null == (l = (0, C.K)(e.getBidResponsesForAdUnitCode)(b.getAdUnitPath())) ? void 0 : l.bids) || []
        }
        f = h.filter(function (n) {
            return n.auctionId !== c && d.some(function (m) {
                return (D = ol(m, 2), _.t(D, "includes")).call(D, n.adId)
            })
        });
        f = _.A(f);
        for (g = f.next(); !g.done; g = f.next()) g = g.value, k = h = void 0, l = pl(g, d, null == (h = e.adUnits) ? void 0 : null == (k = _.t(h, "find").call(h, function (n) {
            n = n.code;
            return n === b.getAdUnitPath() || n === b.getDomId()
        })) ? void 0 : k.mediaTypes), h = ql(a, rl(_.z(sl(tl(new ul, g.bidder), 1), 6, !0), l)), "number" === typeof g.timeToRespond && vl(h, g.timeToRespond)
    };
    xl = function (a, b, c) {
        null != x(a, 3) || (c === b.getAdUnitPath() ? _.z(a, 3, 1) : c === b.getDomId() && _.z(a, 3, 2))
    };
    Al = function (a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function () {
            return null
        });
        1 !== (null == f ? void 0 : ce(f, 1, 0)) && _.Yg(b, 5, f);
        yl(a, ml, 5) || (f ? 1 === ce(f, 1, 0) ? zl(a, f) : zl(a, kl(ll(jl(new ml, e), 1), il(c, d))) : zl(a, ll(jl(new ml, e), il(c, d) ? 2 : 3)))
    };
    pl = function (a, b, c) {
        var d = a.cpm, e = a.originalCpm, f = a.currency, g = a.originalCurrency, h = a.dealId, k = a.adserverTargeting,
            l = a.bidder, n = a.adUnitCode, m = a.adId, p = a.mediaType, r = a.height;
        a = a.width;
        var u = new Bl;
        "number" === typeof d && (_.z(u, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === dj(u, 2) || _.z(u, 8, d)));
        "string" === typeof f && _.z(u, 3, f);
        "string" === typeof h && Cl(u, Dl(h));
        if ("object" === typeof k) for (b = _.t(Object, "fromEntries").call(Object, b.map(function (N) {
            return [x(N, 1), ol(N, 2)]
        })), f = _.A(["", "_" + l]), h = f.next(); !h.done; h = f.next()) {
            h = h.value;
            d = [];
            e = _.A(_.t(Object, "entries").call(Object, k));
            for (g = e.next(); !g.done; g = e.next()) {
                g = _.A(g.value);
                var w = g.next().value;
                g = g.next().value;
                w = (w + h).slice(0, 20);
                var E = void 0;
                if (null != (E = b[w]) && E.length) if (b[w][0] === String(g)) d.push(w); else {
                    d = [];
                    break
                }
            }
            El(u, ol(u, 4).concat(d))
        }
        switch (p || "banner") {
            case "banner":
                _.z(u, 5, 1);
                break;
            case "native":
                _.z(u, 5, 2);
                oi("hbyg_nat", function (N) {
                    K(N, "pub_url", document.URL);
                    K(N, "b", l);
                    K(N, "auc", null != n ? n : "");
                    K(N, "hmt", Number(!!c));
                    var G;
                    K(N, "hat", Number(!!(null == c ? 0 : null == (G = c.native) ? 0 : G.adTemplate)))
                }, _.Ee(Hl));
                break;
            case "video":
                _.z(u, 5, 3)
        }
        "number" === typeof r && "number" === typeof a && Il(u, Jl(Kl(a), r));
        "string" === typeof m && _.z(u, 1, m);
        return u
    };
    Ll = function (a, b) {
        var c = new v.Map, d = function (k) {
            var l = c.get(k);
            l || (l = {}, c.set(k, l));
            return l
        }, e = [];
        a = _.A(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args, h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.Jd(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.A(g.bids);
                    for (h = g.next(); !h.done; h = g.next()) if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).eg = f)
            }
        }
        d = new v.Map;
        a = _.A(_.t(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.A(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.eg, g && h && d.set(f, {
            latency: h - g,
            ie: !1
        });
        e = _.A(e);
        for (a = e.next(); !a.done; a = e.next()) if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.ie = !0;
        return d
    };
    Ml = function (a, b) {
        var c = a.que, d = function () {
            var e;
            null == a || null == (e = a.requestBids) || e.before.call(b, function (f, g) {
                return Oj().pbjs_hooks.push({context: b, nextFunction: f, requestBidsConfig: g})
            }, 0)
        };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d) : null == c || c.unshift(d)
    };
    Ol = function (a, b) {
        return (0, C.ra)(Dj(b, function () {
            return new Nl(a, b)
        }))
    };
    Ql = function (a, b, c, d) {
        for (var e = _.A(_.t(Object, "entries").call(Object, Pl)), f = e.next(); !f.done; f = e.next()) {
            var g = _.A(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && M(a, g(c, d))
        }
    };
    Xl = function (a, b, c) {
        c = void 0 === c ? null : c;
        b = (void 0 === b ? 0 : b) ? 604800 : -1;
        if (!(0 < b) || c && F(c, 5)) {
            var d = 0;
            try {
                d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (g) {
                d |= 32
            }
            c = c ? me(c) : null;
            var e = 0;
            try {
                e |= Rl(a, 2500);
                if (_.H(Sl)) {
                    var f = _.Tl(a).clientHeight;
                    e |= f ? 320 > f ? 2097152 : 0 : 1073741824
                }
                e |= Ul(a);
                0 < b && !_.Vl(_.Wl(c, b)) && (e |= 134217728)
            } catch (g) {
                e |= 32
            }
            a = d | e
        } else a = 4194304;
        return a
    };
    am = function (a, b, c, d, e, f) {
        d = Yl(d);
        if (5 !== d) return !1;
        var g = Xl(e, !Zl(c), f);
        if (g &= -134217729) oi("gpt_int_ns", function (h) {
            K(h, "nsr", g);
            ui(h, a)
        }, _.Ee($l)), Ql(b, g, d, c.getAdUnitPath());
        return !!g
    };
    bm = function (a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            case 6:
                return 42
        }
    };
    hm = function (a, b) {
        a = bm(a);
        if (!a) return null;
        var c = 0;
        if (11 !== a) {
            c |= _.q != _.q.top ? 512 : 0;
            var d = _.cm(_.q);
            d = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && d.adCount ? 1 == a || 2 == a ? !(!d.adCount[1] && !d.adCount[2]) : (d = d.adCount[a]) ? 1 <= d : !1 : !1;
            d && (c |= 64);
            if (c) return c
        }
        if (2 === a || 1 === a) {
            d = {Ca: _.q, me: dm, Ve: b ? a : void 0};
            0 === (0, _.em)() && (d.me = 3E3, d.Of = 650);
            b = d.Ca;
            var e = d.Of, f = d.me, g = d.Ve, h = d.Wa, k = d.Jh;
            d = 0;
            try {
                d |= b != b.top ? 512 : 0;
                var l = Math.min(b.screen.width || 0, b.screen.height || 0);
                d |= l ? 320 > l ? 8192 : 0 : 2048;
                var n;
                if (n = b.navigator) {
                    var m = b.navigator.userAgent;
                    n = /Android 2/.test(m) || /iPhone OS [34]_/.test(m) || /Windows Phone (?:OS )?[67]/.test(m) || /MSIE.*Windows NT/.test(m) || /Windows NT.*Trident/.test(m)
                }
                d |= n ? 1048576 : 0;
                d = e ? d | (b.innerHeight >= e ? 0 : 1024) : d | (_.fm(b) ? 0 : 8);
                d |= Rl(b, f);
                d |= Ul(b)
            } catch (p) {
                d |= 32
            }
            switch (g) {
                case 2:
                    l = h;
                    l = void 0 === l ? null : l;
                    n = Jg(b.innerWidth, 3, 0, Math.min(Math.round(b.innerWidth / 320 * 50), gm) + 15, 3);
                    null != Ig(b, n, void 0 === l ? null : l) && (d |= 16777216);
                    break;
                case 1:
                    l = h, l = void 0 === l ? null : l, n = b.innerWidth, m = b.innerHeight, e = Math.min(Math.round(b.innerWidth / 320 * 50), gm) + 15, f = Jg(n, 3, m - e, m, 3), 25 < e && f.push({
                        x: n - 25,
                        y: m - 25
                    }), null != Ig(b, f, void 0 === l ? null : l) && (d |= 16777216)
            }
            k && (h = void 0 === h ? null : h, h = void 0 === h ? null : h, k = b.innerHeight, k = Jg(b.innerWidth, 10, k - 45, k, 10), k = null != Ig(b, k, h));
            k && (d |= 16777216);
            c |= d
        } else 8 === a ? c |= Xl(_.q) : 11 !== a && 42 !== a && (c |= 32);
        c || (b = _.cm(_.q), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return c
    };
    im = function (a, b) {
        for (var c = new pi, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return ri(c)
    };
    jm = function (a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.ac ? "" : c.ac;
        c = void 0 === c.sa ? "," : c.sa;
        var e = !1;
        a = a.map(function (f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    km = function (a, b, c, d) {
        var e = _.Nd("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    lm = function (a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    nm = function (a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !mm(b, c, d))) {
                    a:{
                        do {
                            var g = $h(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);
                        h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    om = function (a) {
        if (61440 >= a.length) return {url: a, Vd: 0};
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {url: b, Vd: a.length - b.length + 8}
    };
    pm = function (a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    qm = function (a, b) {
        b = void 0 === b ? window : b;
        return !!pm(a, b)
    };
    tm = function (a, b) {
        var c = b.V;
        return jm(a, function (d) {
            return rm(c[d.getDomId()]).join("&")
        }, sm)
    };
    rm = function (a) {
        a = um(a);
        var b = [];
        _.Ak(a, function (c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    um = function (a) {
        for (var b = {}, c = _.A(fk(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[(0, C.K)(x(d, 1))] = ol(d, 2);
        a = ol(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    vm = function (a) {
        var b = !1, c = ae(a, ik, 2).map(function (d) {
            var e = (0, C.K)(x(d, 1));
            b = "excl_cat" === e;
            d = ol(d, 2);
            return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
        });
        a = ol(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    wm = function (a) {
        var b, c;
        return null != (c = null == (b = _.t(a, "find").call(a, function (d) {
            return "page_url" === x(d, 1)
        })) ? void 0 : ol(b, 2)[0]) ? c : null
    };
    xm = function (a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")), c = a.indexOf("&", b);
        -1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    ym = function (a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Bd(function () {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    zm = function (a, b) {
        var c = b.V;
        return !!wm(b.U.ta()) || a.some(function (d) {
            return null !== wm(c[d.getDomId()].ta())
        })
    };
    Cm = function (a, b, c) {
        var d = null;
        try {
            var e = Am(b.top.document, b.top).y;
            d = a.map(function (f) {
                var g = c.U, h = c.V[f.getDomId()], k;
                f = null == (k = di(f, h, b.document, Hh(g, h))) ? void 0 : k.y;
                k = Ah(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++Bm
            })
        } catch (f) {
        }
        return d
    };
    Em = function () {
        var a = void 0 === a ? window : a;
        Dm = _.re(a)
    };
    Fm = function (a, b) {
        var c;
        return !(null != (c = Gh(a, 11)) ? !c : !F(b, 10))
    };
    Gm = function (a, b, c, d) {
        if (a = Yh(a, b)) {
            var e;
            if (c = null != (e = Gh(c, 24)) ? e : F(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.q.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Jm = function (a, b, c, d) {
        var e = d.Gc, f = d.adUnitPath;
        d = void 0 === d.Ia ? !1 : d.Ia;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Hm(e)) ? Im(a, b, f, c, {
            fb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            Ia: d
        }) : (b.error(Ij("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    Hm = function (a) {
        return !!zj(pk, function (b) {
            return b === a
        }) || 6 === a
    };
    Im = function (a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {fb: e.fb, format: f, Ia: e.Ia});
        a = b.slotId;
        b = b.Ya;
        a && b && (_.z(b, 15, f), _.Km(a, function () {
            var g = window, h = bm((0, C.K)(f));
            if (h) {
                g = _.cm(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    Qm = function (a, b, c, d, e, f, g) {
        var h = new of, k = new Lm(a, d);
        I(h, k);
        f = new Mm(a, e, f);
        I(h, f);
        f = new Nm(a, b, e, g, k.eb);
        I(h, f);
        b = new Om(a, b, c, e, d, g, k.eb);
        I(h, b);
        a = new Pm(a, k.eb, b.l, f.l);
        I(h, a);
        Bf(h);
        return {eb: a.A, qa: h}
    };
    Xm = function (a, b, c) {
        var d = window, e = new of;
        d = _.H(Rm) ? new Sm(d) : new Tm(d);
        _.Um(e, d);
        c = new Vm(a, d, c);
        I(e, c);
        a = new Wm(a, d, b, c.Cb);
        I(e, a);
        Bf(e);
        return {Cb: c.Cb, ee: a.l, qa: e}
    };
    $m = function (a) {
        return Ym(a) && Zm(a)
    };
    Ym = function (a) {
        var b, c = null == (b = window.top) ? void 0 : b.location.href;
        if (!c) return !1;
        var d = Dh(c), e;
        return null == (e = ae(a, an, 1)) ? void 0 : e.some(function (f) {
            switch ($i(f, bn)) {
                case 1:
                    f = (0, C.K)(cn(f, dn, 1, bn));
                    if (null != x(f, 1) && null != x(f, 2)) {
                        var g = (0, C.K)(de(f, 1));
                        f = 0 >= g || g > c.length ? !1 : (0, C.K)(de(f, 2)) === Dh(c.substring(0, g))
                    } else f = !1;
                    return f;
                case 2:
                    return (0, C.K)(de(f, aj(f, bn, 2))) === d;
                default:
                    return !1
            }
        })
    };
    Zm = function (a) {
        var b;
        return null == (b = en(a, 2, !1)) ? void 0 : b.some(function (c) {
            switch (c) {
                case 0:
                    return !1;
                case 1:
                    return !0;
                case 2:
                    return 0 === (0, _.em)();
                case 4:
                    return 2 === (0, _.em)();
                case 3:
                    return 1 === (0, _.em)();
                default:
                    return !1
            }
        })
    };
    kn = function (a, b, c, d, e) {
        var f = [];
        c = _.A(ae(c, fn, 3));
        for (var g = c.next(); !g.done; g = c.next()) if (g = g.value, null != x(g, 1) && null != x(g, 2) && null != x(g, 3) && null != x(g, 4)) {
            var h = a.querySelector(bf(g, 1)), k = void 0;
            if (null != (k = h) && k.parentElement) {
                k = g.getAdUnitPath();
                var l = "gpt_opp_" + k;
                if (!a.getElementById(l)) {
                    var n = a.createElement("div");
                    n.id = l;
                    h.insertAdjacentElement("beforebegin", n);
                    if (g = b.defineSlot(k, [g.getWidth(), g.getHeight()], l)) g.addService(b.pubads()), h = gn(hi(), g.getSlotElementId()), e && (k = void 0, null == (k = h) || hn(k, e)), f.push(g)
                }
            }
        }
        f.length && jn(a, function () {
            for (var m = _.A(f), p = m.next(); !p.done; p = m.next()) b.display(p.value);
            F(d, 4) && b.pubads().refresh(f)
        })
    };
    mn = function (a, b, c, d, e, f, g) {
        var h = document, k = c.getAdUnitPath();
        c = ln.get(ce(c, 2, 0));
        if (k && c) {
            var l, n = null == (l = Jm(a, g, f, {Gc: c, adUnitPath: k, Ia: !0})) ? void 0 : l.j;
            n && (a = gn(hi(), n.getSlotElementId()), d && (null == a || hn(a, d)), b.cmd.push(function () {
                n.addService(b.pubads())
            }), jn(h, function () {
                b.display(n);
                F(e, 4) && b.pubads().refresh([n])
            }))
        }
    };
    nn = function (a) {
        switch (Number(a)) {
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            case 6:
                return "Shoppit";
            default:
                return "Out-of-page creative"
        }
    };
    on = function (a, b, c, d) {
        M(a, Ck("googletag.setConfig.commerce", Dk(b), c, Dk(d)))
    };
    pn = function (a) {
        return "string" === typeof a && 0 < a.length && 5E3 > a.length
    };
    qn = function (a) {
        if (!Array.isArray(a) || 0 === a.length) return !1;
        var b = a.length - 1;
        return a.every(function (c) {
            if ("string" !== typeof c || 0 === c.length) return !1;
            b += c.length;
            return 5E3 < b ? !1 : !0
        })
    };
    tn = function (a, b, c) {
        if ("object" === typeof a && null !== a && _.t(Object, "keys").call(Object, (0, C.K)(a)).some(function (d) {
            return (D = _.t(Object, "values").call(Object, rn), _.t(D, "includes")).call(D, Number(d))
        })) return !0;
        sn("taxonomies", a, b, c);
        return !1
    };
    vn = function (a, b) {
        var c = ae(b, un, 1).filter(function (d) {
            return ce(d, 1, 0) !== a
        });
        Nc(b, 1, c)
    };
    Cn = function (a, b, c, d) {
        if (void 0 !== _.t(b, "values")) if (null === _.t(b, "values")) vn(a, c); else if (wn(_.t(b, "values"), d, b) && (b = xn(a, _.t(b, "values"), d, b), b.length)) {
            var e = (D = ae(c, un, 1), _.t(D, "find")).call(D, function (f) {
                return ce(f, 1, 0) === a
            });
            e ? yn(e, b) : zn(c, yn(An(new un, a), b));
            d.info(Bn(Dk(b), Dk(a)))
        }
    };
    wn = function (a, b, c) {
        if (Array.isArray(a)) return !0;
        sn("taxonomyData.values", a, b, c);
        return !1
    };
    xn = function (a, b, c, d) {
        var e = [], f = [], g = !1;
        b = _.A(b);
        for (var h = b.next(); !h.done; h = b.next()) h = h.value, 5 <= e.length && (g = !0), "string" !== typeof h ? f.push(h) : g || h in e || e.push(h);
        0 < f.length && sn("taxonomyData.values", f, c, d);
        g && M(c, Dn(Dk(a), Dk(5)));
        return e
    };
    sn = function (a, b, c, d) {
        M(c, Ck("googletag.setConfig.pps", Dk(d), a, Dk(b)))
    };
    Fn = function (a) {
        En = a
    };
    Hn = function () {
        for (var a = _.A(_.t(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value, d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), Ya(c, new Xa(b.textContent, Gn)), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    In = function (a, b) {
        b = _.A(_.t(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.A(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    Ln = function (a, b, c) {
        var d = [];
        c = [].concat(_.Jd(c.aa)).slice();
        if (b) {
            if (!Array.isArray(b)) return M(a, Ij("googletag.destroySlots", [b])), !1;
            oa(b);
            d = c.filter(function (e) {
                return _.t(b, "includes").call(b, e.j)
            })
        } else d = c;
        if (!d.length) return !1;
        Jn(d);
        Kn(d);
        return !0
    };
    eo = function (a, b, c, d, e, f, g, h) {
        var k = Oj(), l, n, m = J(a, 74, function (r, u, w) {
            return e.defineSlot(a, b, r, u, w)
        }), p = {};
        m = (p._loaded_ = !0, p.cmd = [], p._vars_ = k._vars_, p.evalScripts = function () {
            try {
                Hn()
            } catch (w) {
                hh(a, 297, w);
                var r, u;
                null == (r = window.console) || null == (u = r.error) || u.call(r, w)
            }
        }, p.display = J(a, 95, function (r) {
            void Mn(c, r, e)
        }), p.defineOutOfPageSlot = J(a, 73, function (r, u) {
            return (r = Jm(a, b, e, {Gc: u, adUnitPath: r})) ? r.j : null
        }), p.getVersion = J(a, 946, function () {
            return a.tb ? String(a.tb) : a.Ga
        }), p.pubads = J(a, 947, function () {
            return Sk(a, b, c, e, h)
        }), p.companionAds = J(a, 816, function () {
            null != l || (l = new Nn(b, c, f, h));
            return Lj(a, b, l)
        }), p.content = J(a, 817, function () {
            null != n || (n = new On(b, g));
            return Nj(a, b, n)
        }), p.setAdIframeTitle = J(a, 729, Fn), p.getEventLog = J(a, 945, function () {
            return new Pn(a, b)
        }), p.sizeMapping = J(a, 90, function () {
            return new Qn(a, b)
        }), p.enableServices = J(a, 91, function () {
            for (var r = _.A(Rn), u = r.next(); !u.done; u = r.next()) u = u.value, u.B && b.info(Sn()), Tn(u)
        }), p.destroySlots = J(a, 75, function (r) {
            return Ln(b, r, e)
        }), p.enums = sk(), p.defineSlot = m, p.defineUnit = m, p.getWindowsThatCanCommunicateWithHostpageLibrary = J(a, 955, _.H(Un) ? function (r) {
            return Vn(_.we(Wn), r).map(function (u) {
                var w;
                return null == (w = gi(u, document)) ? void 0 : w.contentWindow
            }).filter(function (u) {
                return !!u
            })
        } : function (r) {
            return Xn(r)
        }), p.disablePublisherConsole = J(a, 93, ak), p.onPubConsoleJsLoad = J(a, 731, dk), p.openConsole = J(a, 732, function (r) {
            Vj = !0;
            var u;
            (null == (u = Oj()) ? 0 : u.console) ? (0, C.K)(Oj().console).openConsole(r) : (r && (ck = r), bk = !0, Rj(a))
        }), p.setConfig = J(a, 1034, function (r) {
            if (_.ka(r)) {
                var u = r.commerce, w = r.pps;
                if (null === u) Le(Yn(d, Zn, 33), 1); else if (void 0 !== u) if (r = Yn(d, Zn, 33), _.ka(u)) {
                    var E = u.query, N = u.categories, G = u.productIds, R = u.filter, T = Pc($n(r, ao, 1), !1);
                    null === E ? Le(T, 1) : pn(E) ? _.z(T, 1, E) : void 0 !== E && on(b, u, "query", E);
                    null === N ? _.z(T, 2, mc) : qn(N) ? _.ph(T, 2, N) : void 0 !== N && on(b, u, "categories", N);
                    null === G ? _.z(T, 3, mc) : qn(G) ? _.ph(T, 3, G) : void 0 !== G && on(b, u, "productIds", G);
                    null === R ? Le(T, 4) : pn(R) ? _.z(T, 4, R) : void 0 !== R && on(b, u, "filter", R);
                    null != x(T, 1) || ol(T, 2).length ? _.Yg(r, 1, T) : M(b, bo())
                } else M(b, Ij("googletag.setConfig.commerce", [u]));
                if (null === w) Le(Yn(d, Zn, 33), 2); else if (void 0 !== w && (u = Yn(Yn(d, Zn, 33), co, 2), "object" === typeof w && (0, C.K)(w).hasOwnProperty("taxonomies") ? r = !0 : (M(b, Ij("googletag.setConfig.pps", [w])), r = !1), r)) if (r = w.taxonomies, void 0 === r) sn("taxonomies", r, b, w); else if (null === r) Nc(u, 1); else if (tn(r, b, w)) for (w = _.A(_.t(Object, "entries").call(Object, r)), E = w.next(); !E.done; E = w.next()) {
                    E = _.A(E.value);
                    var Q = E.next().value;
                    E = E.next().value;
                    N = u;
                    G = b;
                    T = r;
                    if (void 0 === Q || null === Q) sn("taxonomy", Q, G, T); else {
                        R = Number(Q);
                        var aa = R, ca = G, ma = T;
                        (D = _.t(Object, "values").call(Object, rk), _.t(D, "includes")).call(D, Number(aa)) ? Q = !0 : (sn("taxonomy", Q, ca, ma), Q = !1);
                        Q && void 0 !== E && (null === E ? vn(R, N) : (Q = G, "object" === typeof E && (0, C.K)(E).hasOwnProperty("values") ? T = !0 : (sn("taxonomyData", E, Q, T), T = !1), T && Cn(R, E, N, G)))
                    }
                }
            } else M(b, Ij("googletag.setConfig", [r]))
        }), p.apiReady = !0, p);
        In(k, m)
    };
    lo = function (a) {
        var b = window, c = new of, d = new fo(a, b);
        I(c, d);
        var e = new go(a, b);
        I(c, e);
        _.H(ho) && I(c, new io(a, b));
        if (_.H(jo)) {
            a = new ko(a);
            I(c, a);
            var f = a.A
        }
        Bf(c);
        return {Ab: d.A, qb: e.l, vc: f}
    };
    mo = function (a) {
        var b = function () {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.t(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    oo = function (a, b) {
        var c = _.Ee(no);
        Math.random() <= c && ie(b, a)
    };
    uo = function (a, b, c) {
        var d = {};
        if (!c) return b.error(po("missing data-rendering attribute")), d;
        try {
            var e = qo(ro(c))
        } catch (k) {
        }
        var f;
        (null == (f = e) ? 0 : yl(f, so, 1)) ? (b = new to, b = _.y(b, 4, 1, 0), b = _.y(b, 2, 7, 0), a = _.y(b, 3, a.ib || a.Ga, ""), b = Qe(e, so, 1), a = _.Yg(a, 5, b), a = _.y(a, 6, !0, !1), d.lg = a) : b.error(po("invalid data-rendering attribute"));
        var g;
        d.dg = null == (g = e) ? void 0 : bf(g, 2);
        var h;
        d.od = null == (h = e) ? void 0 : bf(h, 3);
        return d
    };
    xo = function (a, b) {
        var c, d, e, f, g, h, k, l, n, m;
        return _.jb(function (p) {
            c = Zj(b, "ai");
            if (!c || 0 === c.length) return p.return(v.Promise.resolve(b));
            d = vo();
            if (null == (e = d) ? 0 : e.gmaSdk) {
                if (f = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c)) return p.return(v.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(f) + "&")))
            } else if (null == (g = d) ? 0 : null == (h = g.webkit) ? 0 : null == (k = h.messageHandlers) ? 0 : k.getGmaClickSignals) return l = new _.zg, n = l.resolve, m = l.promise, wo(d.webkit.messageHandlers.getGmaClickSignals, {click_string: c}, function (r) {
                n(b.replace("?", "?" + r + "&"))
            }, function () {
                n(b)
            }, function (r, u) {
                return _.dh(a, r, u)
            }), p.return(m);
            return p.return(v.Promise.resolve(b))
        })
    };
    yo = function (a, b, c, d) {
        var e, f, g;
        return _.jb(function (h) {
            e = b.getBoundingClientRect();
            f = {};
            var k = d.replace;
            var l = (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f);
            var n = [];
            for (m in l) xk(m, l[m], n);
            l = n.join("&");
            if (l) {
                n = -1;
                0 > n && (n = 0);
                var m = -1;
                if (0 > m || m > n) {
                    m = n;
                    var p = ""
                } else p = "".substring(m + 1, n);
                n = ["".slice(0, m), p, "".slice(n)];
                m = n[1];
                n[1] = l ? m ? m + "&" + l : l : m;
                l = n[0] + (n[1] ? "?" + n[1] : "") + n[2]
            } else l = "";
            g = k.call(d, "?", l + "&");
            return h.return(xo(a, g))
        })
    };
    zo = function (a, b, c) {
        var d;
        if (null == c ? 0 : null == (d = c.gmaSdk) ? 0 : d.getViewSignals) {
            if (c = c.gmaSdk.getViewSignals()) return c = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + c + "$2"), v.Promise.resolve(c)
        } else {
            var e, f;
            if (null == c ? 0 : null == (e = c.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals) {
                d = new _.zg;
                var g = d.resolve;
                d = d.promise;
                wo(c.webkit.messageHandlers.getGmaViewSignals, {}, function (h) {
                    g(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + h + "$2"))
                }, function () {
                    g(b)
                }, function (h, k) {
                    return _.dh(a, h, k)
                });
                return d
            }
        }
        return v.Promise.resolve(b)
    };
    Fo = function (a, b) {
        var c = window;
        var d = void 0 === d ? sb : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = vo(), g;
            null == (g = f ? new Ao(function (k, l) {
                return _.dh(a, k, l)
            }, function () {
            }) : void 0) || Bo(g);
            var h = mo(c);
            e = function () {
                return h.apply(this, arguments) || this
            };
            _.O(e, h);
            e.prototype.connectedCallback = function () {
                var k = uo(a, b, this.dataset.rendering), l = k.lg, n = k.dg;
                k = k.od;
                l && d(Co(window, l));
                n && zo(a, n, f).then(function (m) {
                    return void Do(m)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.od = k, this.addEventListener("click", this.j)) : M(b, Eo(k)))
            };
            e.prototype.j = function (k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && yo(a, this, k, this.od).then(function (n) {
                    return void Do(n)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    Go = function (a) {
        var b = {};
        a = _.A(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[x(c, 1)] = x(c, 2);
        return b
    };
    Jo = function (a, b, c) {
        return new Ho(c, a, Io, function (d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {
            }
            return null
        })
    };
    Ko = function (a) {
        .001 > fe() && ie({c: "sd", s: String(a)}, "gpt_whirs")
    };
    Po = function (a, b, c, d) {
        d = d.sg;
        var e = b.kind;
        switch (e) {
            case 0:
                return new (d ? Lo : Mo)(a, b, c);
            case 1:
                return new No(a, b, c);
            case 2:
                return new Oo(a, b, c);
            default:
                Va(e)
        }
    };
    Qo = function (a) {
        if (!Cd(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    Vo = function (a, b, c, d) {
        var e = Yh(a, document);
        e && Gg(e, window, d, !0);
        Ro(_.we(fh), "5", (0, C.K)(x(c.V[a.getDomId()], 20)));
        a.dispatchEvent(So, 801, {Xd: null, isBackfill: !1});
        if (_.To(b, a) && !gi(a, document)) {
            b = c.U;
            c = c.V[a.getDomId()];
            var f;
            (null != (f = Gh(c, 10)) ? f : F(b, 11)) && Gm(a, document, c, b)
        }
        a.dispatchEvent(Uo, 825, {isEmpty: !0})
    };
    Wo = function (a, b) {
        var c = _.Nd("DIV");
        c.id = a;
        c.textContent = b;
        _.ji(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    Yo = function (a) {
        var b = {threshold: [0, .3, .5, .75, 1]};
        return window.IntersectionObserver ? new IntersectionObserver(a, b) : new Xo(a, b)
    };
    Zo = function (a) {
        return null != x(a, 1) ? null != Je(a, 3) && 0 !== (0, _.em)() ? (0, C.ra)(x(a, 1)) * (0, C.ra)(Je(a, 3)) : x(a, 1) : null
    };
    $o = function (a, b) {
        return "undefined" === typeof IntersectionObserver ? new Xo(b, {rootMargin: a + "%"}) : new IntersectionObserver(b, {rootMargin: a + "%"})
    };
    ap = function (a, b) {
        b.topLevelSellerSignals.resolve(a.sellerSignals);
        var c;
        if (a = null == (c = a.componentAuctions) ? void 0 : _.t(c, "find").call(c, function (e) {
            return "https://pubads.g.doubleclick.net" === e.seller
        })) {
            b.auctionSignals.resolve(a.auctionSignals);
            b.j.resolve(a.sellerSignals);
            b.perBuyerSignals.resolve(a.perBuyerSignals);
            var d;
            b.perBuyerTimeouts.resolve(null != (d = a.perBuyerTimeouts) ? d : {})
        } else b.auctionSignals.resolve(void 0), b.j.resolve(void 0), b.perBuyerSignals.resolve({}), b.perBuyerTimeouts.resolve({})
    };
    hp = function (a) {
        var b = a.Fe, c = a.We;
        a = void 0 === a.Pd ? !1 : a.Pd;
        for (var d = {}, e = _.A(ae(b, bp, 7)), f = e.next(); !f.done; f = e.next()) f = f.value, d[bf(f, 1)] = JSON.parse(bf(f, 2));
        if (e = Qe(b, cp, 6)) d["https://googleads.g.doubleclick.net"] = e.toJSON(), d["https://td.doubleclick.net"] = e.toJSON();
        e = {};
        f = _.A(ae(b, dp, 11));
        for (var g = f.next(); !g.done; g = f.next()) g = g.value, e[bf(g, 1)] = de(g, 2);
        g = {};
        ep(b, 18) && (g["https://googleads.g.doubleclick.net"] = ep(b, 18), g["https://td.doubleclick.net"] = ep(b, 18));
        var h;
        f = {
            seller: a ? bf(b, 1).split("/td/")[0] : "https://pubads.g.doubleclick.net",
            decisionLogicUrl: bf(b, 1),
            trustedScoringSignalsUrl: bf(b, 2),
            interestGroupBuyers: ol(b, 3),
            sellerExperimentGroupId: ep(b, 17),
            auctionSignals: JSON.parse(bf(b, 4) || "{}"),
            sellerSignals: (null == (h = Qe(b, fp, 5)) ? void 0 : h.toJSON()) || [],
            sellerTimeout: de(b, 15) || 50,
            perBuyerExperimentGroupIds: g,
            perBuyerSignals: d,
            perBuyerTimeouts: e
        };
        h = new fp;
        "0" !== yc(x($n($n(b, fp, 5), gp, 5), 2), "0") && (d = new gp, e = yc(x($n($n(b, fp, 5), gp, 5), 2), "0"), Wb(d), null != e && 0 !== +e ? nc(d, 2, e) : nc(d, 2, void 0, !1), _.Yg(h, 5, d));
        return {
            seller: a ? bf(b, 1).split("/td/")[0] : "https://pubads.g.doubleclick.net",
            decisionLogicUrl: bf(b, 1),
            sellerExperimentGroupId: ep(b, 17),
            sellerSignals: h.toJSON(),
            sellerTimeout: de(b, 15) || 50,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            componentAuctions: [f].concat(_.Jd(null != c ? c : []))
        }
    };
    op = function (a, b) {
        var c, d, e, f, g, h, k, l, n, m, p, r;
        return _.jb(function (u) {
            if (1 == u.j) return _.t(a, "startsWith").call(a, "urn:") && ip.deprecatedURNToURL && ip.deprecatedReplaceInURN ? kb(u, ip.deprecatedURNToURL(a), 2) : u.return();
            c = u.m;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(jp)) ? f : []).forEach(function (w) {
                d[w] = e
            });
            g = b.fe || "";
            (null != (h = c.match(kp)) ? h : []).forEach(function (w) {
                d[w] = g
            });
            k = b.Sd || "";
            (null != (l = c.match(lp)) ? l : []).forEach(function (w) {
                d[w] = k
            });
            n = b.Ne || "";
            (null != (m = c.match(mp)) ? m : []).forEach(function (w) {
                d[w] = n
            });
            p = b.Ke || "";
            (null != (r = c.match(np)) ? r : []).forEach(function (w) {
                d[w] = p
            });
            return kb(u, ip.deprecatedReplaceInURN(a, d), 0)
        })
    };
    qp = function (a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner", e = pp(c, 18), f = pp(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = bf(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        pp(c, 4) && (d += "&is_plog=1");
        (e = bf(c, 11)) && (d += "&ecrs=" + e);
        (null == c ? 0 : pp(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        Do(d)
    };
    rp = function () {
        return new v.Promise(function (a) {
            setTimeout(function () {
                a(null)
            }, 0)
        })
    };
    gq = function (a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, w, E, N) {
        var G = new of, R = Ah(!0, window), T = h.U, Q = h.V[d.getDomId()], aa = new sp(a, window);
        I(G, aa);
        var ca = k.vf, ma = k.Bg, Ba = k.mf, Na = k.ce, Ea = k.Pe, ta = k.Af, Oa = k.tg, Ia = k.pf, rb = k.jf,
            Lc = k.Bc, vc = k.ug, Ze = k.zf, $e = k.If, at = k.pg, ag = k.yg, zi = k.zg, Fl = k.wf, Ai = k.df,
            Bi = k.Da, Gl = k.Ge, uC = k.Cg;
        k = k.Gb;
        .01 > Math.random() && (w = new tp(a, uC, (null != N ? N : w).Pa, Oa, Na), I(G, w));
        N = new up;
        N.G(m);
        w = new vp(a, window.top, N);
        I(G, w);
        l = new wp(a, console, l, w.A);
        I(G, l);
        l = new xp(a, Yl(Q), R.height, rb, ca);
        I(G, l);
        ca = new yp(a, d, Yh(d, n), d.getDomId(), fi(d), n, Yl(Q), g, e);
        I(G, ca);
        Bi = new zp(a, Bi, Ea, ta, Oa);
        I(G, Bi);
        Oa = new Ap(a, T, Q, Ea, Oa);
        I(G, Oa);
        ag = new Bp(a, Qe(T, Cp, 5), ag);
        I(G, ag);
        ma = new Dp(a, d.getAdUnitPath(), Q, R.width, e, Lc, ma, l.A, Bi.A, ca.A);
        I(G, ma);
        Lc = new Ep(a, Q, Gl);
        I(G, Lc);
        e = new Fp(a, g, m, e, Gl, Lc.A, ma.Da, ma.L, ca.A, p);
        I(G, e);
        if (f || _.H(Gp)) {
            var Cb = new Hp(a, d, h, g, Na, e.o);
            I(G, Cb);
            E = new Ip(a, E, e.o);
            I(G, E);
            Cb = new Jp(a, Cb.l, E.A);
            I(G, Cb);
            Cb = Cb.A
        }
        E = new Kp(a, d, T, Q, Yl(Q), n, g, ca.A, Oa.A, e.l, Ba, Cb);
        I(G, E);
        f = new Lp(a, E.A);
        I(G, f);
        m = new Mp(a, d, R, g, f.A, ag.l, Cb);
        I(G, m);
        f = new Np(a, window, ca.A);
        I(G, f);
        zi = new Op(a, m.A, E.A, zi, ag.l, void 0, Cb);
        I(G, zi);
        R = new Pp(a, n, d, Q, R, Ba, ca.A, E.A, e.l, ma.Bc, f.A, Na, Cb);
        I(G, R);
        vc = new Qp(a, T, Q, e.Da, Oa.A, vc);
        I(G, vc);
        Ai = new Rp(a, window, Ai, aa.A, Cb);
        I(G, Ai);
        f = new Sp(a, Yl(Q), n);
        I(G, f);
        m = new Tp(a, window);
        I(G, m);
        u = new Up(a, u, Yl(Q), rb, Ia, Cb);
        I(G, u);
        $e = new Vp(a, $e, Cb);
        I(G, $e);
        ta = new Wp(a, d, g, h, r, window, e.Da, Oa.A, zi.A, ca.A, E.A, e.l, Na, Ba, vc.A, ta, Ze, at, R.A, Ai.A, f.A, u.A, Gl, m.A, Cb);
        I(G, ta);
        Ze = new Xp(a, window, d, ta.o, N);
        I(G, Ze);
        rb = new Yp(a, g, Yl(Q), d, window, rb, ta.l, ca.A, u.A);
        I(G, rb);
        h = new Zp(a, d, Yl(Q), (0, C.K)(h.Lb), Ia, ta.l, ca.A, w.A, u.A, Na);
        I(G, h);
        Q = new $p(a, d, Yl(Q), r, window, ta.l, ca.A);
        I(G, Q);
        n = new aq(a, d, ta.l, n, r);
        I(G, n);
        g = new bq(a, cq(g, d), window.top, ta.l, aa.A);
        I(G, g);
        d = new dq(a, d, Ba, Ea, at, ta.l, E.A, ta.C);
        I(G, d);
        Fl = new eq(a, window, Fl, ta.l, E.A, ca.A);
        I(G, Fl);
        I(G, new fq(a, Oj(), T, b, c, k));
        return G
    };
    jq = function () {
        if (Ma()) {
            var a = Qa();
            var b = 0;
            a = hq(String(a)).split(".");
            for (var c = hq("11").split("."), d = Math.max(a.length, c.length), e = 0; 0 == b && e < d; e++) {
                var f = a[e] || "", g = c[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    b = iq(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || iq(0 == f[2].length, 0 == g[2].length) || iq(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == b)
            }
            b = 0 <= b
        } else b = Ja(Ga()), Pa(b), b = Ka() ? (b = b[2]) && b[1] || "" : "", "" === b ? b = NaN : (b = b.split("."), b = 0 === b.length ? NaN : Number(b[0])), b = 65 <= b;
        return b
    };
    kq = function (a, b) {
        return window.IntersectionObserver ? new IntersectionObserver(a, {rootMargin: b}) : new Xo(a, {rootMargin: b})
    };
    lq = function (a) {
        function b(f) {
            var g = f;
            return function () {
                var h = eb.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.Jd(h))
                }
            }
        }

        var c = null, d = 0, e = 0;
        return function () {
            var f, g, h, k;
            return _.jb(function (l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.zg, g = b(f.resolve), h = ++e, kb(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function () {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.Km(a, function () {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    tq = function () {
        var a = new mq;
        var b = (new nq).setCorrelator(Be(_.q));
        var c = _.we(xe).j().join();
        b = _.y(b, 5, c, "");
        b = _.y(b, 2, 1, 0);
        a = _.Yg(a, 1, b);
        b = new oq;
        c = _.H(pq);
        b = _.y(b, 7, c, !1);
        c = _.H(qq);
        b = _.y(b, 8, c, !1);
        c = _.H(rq);
        b = _.y(b, 9, c, !1);
        b = _.y(b, 10, !0, !1);
        c = _.H(sq);
        b = _.y(b, 13, c, !1);
        b = _.y(b, 16, !0, !1);
        a = _.Yg(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    vq = function () {
        var a = uq, b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (ie({v: a}, "gpt_inv_ver"), "1") : a
    };
    xq = function (a) {
        var b = wq() || ee() ? 1 : fe(), c = .001 > b;
        c ? ((null != a ? a : _.we(Mk)).l = !0, ye(31067358)) : .002 > b && ye(31067357);
        ze(23);
        return {qc: c, Kf: 1E3, jg: 1E-4 > b, Jf: 1E4, Be: c, ae: 1E3}
    };
    Aq = function (a) {
        var b = vq();
        var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
        var d = Be(window), e = window.document.URL, f = _.Ee(yq);
        return _.t(Object, "assign").call(Object, {}, a, {Ga: b, ib: "", tb: c, pvsid: d, xb: new zq(f), bf: e})
    };
    Bq = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    };
    Cq = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    Dq = function (a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    Eq = Dq(this);
    Fq = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    v = {};
    Gq = {};
    _.t = function (a, b) {
        var c = Gq[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    Hq = function (a, b, c) {
        if (b) a:{
            var d = a.split(".");
            a = 1 === d.length;
            var e = d[0], f;
            !a && e in v ? f = v : f = Eq;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];
            c = Fq && "es6" === c ? f[d] : null;
            b = b(c);
            null != b && (a ? Cq(v, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === Gq[d] && (a = 1E9 * Math.random() >>> 0, Gq[d] = Fq ? Eq.Symbol(d) : "$jscp$" + a + "$" + d), Cq(f, Gq[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    Hq("Symbol", function (a) {
        if (a) return a;
        var b = function (f, g) {
            this.j = f;
            Cq(this, "description", {configurable: !0, writable: !0, value: g})
        };
        b.prototype.toString = function () {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", d = 0, e = function (f) {
            if (this instanceof e) throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++, f)
        };
        return e
    }, "es6");
    Hq("Symbol.iterator", function (a) {
        if (a) return a;
        a = (0, v.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = Eq[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && Cq(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return Iq(Bq(this))
                }
            })
        }
        return a
    }, "es6");
    Iq = function (a) {
        a = {next: a};
        a[_.t(v.Symbol, "iterator")] = function () {
            return this
        };
        return a
    };
    P = function (a) {
        return a.raw = a
    };
    Jq = function (a, b) {
        a.raw = b;
        return a
    };
    _.A = function (a) {
        var b = "undefined" != typeof v.Symbol && _.t(v.Symbol, "iterator") && a[_.t(v.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {next: Bq(a)};
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.Jd = function (a) {
        if (!(a instanceof Array)) {
            a = _.A(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    Kq = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Lq = Fq && "function" == typeof _.t(Object, "assign") ? _.t(Object, "assign") : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Kq(d, e) && (a[e] = d[e])
        }
        return a
    };
    Hq("Object.assign", function (a) {
        return a || Lq
    }, "es6");
    var Mq = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    }, Nq = function () {
        function a() {
            function c() {
            }

            new c;
            _.t(v.Reflect, "construct").call(v.Reflect, c, [], function () {
            });
            return new c instanceof c
        }

        if (Fq && "undefined" != typeof v.Reflect && _.t(v.Reflect, "construct")) {
            if (a()) return _.t(v.Reflect, "construct");
            var b = _.t(v.Reflect, "construct");
            return function (c, d, e) {
                c = b(c, d);
                e && _.t(v.Reflect, "setPrototypeOf").call(v.Reflect, c, e.prototype);
                return c
            }
        }
        return function (c, d, e) {
            void 0 === e && (e = c);
            e = Mq(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }(), Oq;
    if (Fq && "function" == typeof _.t(Object, "setPrototypeOf")) Oq = _.t(Object, "setPrototypeOf"); else {
        var Pq;
        a:{
            var Qq = {a: !0}, Rq = {};
            try {
                Rq.__proto__ = Qq;
                Pq = Rq.a;
                break a
            } catch (a) {
            }
            Pq = !1
        }
        Oq = Pq ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    Sq = Oq;
    _.O = function (a, b) {
        a.prototype = Mq(b.prototype);
        a.prototype.constructor = a;
        if (Sq) Sq(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.Zh = b.prototype
    };
    Tq = function () {
        this.l = !1;
        this.J = null;
        this.m = void 0;
        this.j = 1;
        this.M = this.D = 0;
        this.B = null
    };
    Uq = function (a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    Tq.prototype.H = function (a) {
        this.m = a
    };
    var Vq = function (a, b) {
        a.B = {de: b, Cf: !0};
        a.j = a.D || a.M
    };
    Tq.prototype.return = function (a) {
        this.B = {return: a};
        this.j = this.M
    };
    kb = function (a, b, c) {
        a.j = c;
        return {value: b}
    };
    mb = function (a, b) {
        a.j = b;
        a.D = 0
    };
    nb = function (a) {
        a.D = 0;
        var b = a.B.de;
        a.B = null;
        return b
    };
    Wq = function (a) {
        this.j = new Tq;
        this.m = a
    };
    Zq = function (a, b) {
        Uq(a.j);
        var c = a.j.J;
        if (c) return Xq(a, "return" in c ? c["return"] : function (d) {
            return {value: d, done: !0}
        }, b, a.j.return);
        a.j.return(b);
        return Yq(a)
    };
    Xq = function (a, b, c, d) {
        try {
            var e = b.call(a.j.J, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.J = null, Vq(a.j, g), Yq(a)
        }
        a.j.J = null;
        d.call(a.j, f);
        return Yq(a)
    };
    Yq = function (a) {
        for (; a.j.j;) try {
            var b = a.m(a.j);
            if (b) return a.j.l = !1, {value: b.value, done: !1}
        } catch (c) {
            a.j.m = void 0, Vq(a.j, c)
        }
        a.j.l = !1;
        if (a.j.B) {
            b = a.j.B;
            a.j.B = null;
            if (b.Cf) throw b.de;
            return {value: b.return, done: !0}
        }
        return {value: void 0, done: !0}
    };
    $q = function (a) {
        this.next = function (b) {
            Uq(a.j);
            a.j.J ? b = Xq(a, a.j.J.next, b, a.j.H) : (a.j.H(b), b = Yq(a));
            return b
        };
        this.throw = function (b) {
            Uq(a.j);
            a.j.J ? b = Xq(a, a.j.J["throw"], b, a.j.H) : (Vq(a.j, b), b = Yq(a));
            return b
        };
        this.return = function (b) {
            return Zq(a, b)
        };
        this[_.t(v.Symbol, "iterator")] = function () {
            return this
        }
    };
    ar = function (a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }

        return new v.Promise(function (d, e) {
            function f(g) {
                g.done ? d(g.value) : v.Promise.resolve(g.value).then(b, c).then(f, e)
            }

            f(a.next())
        })
    };
    _.jb = function (a) {
        return ar(new $q(new Wq(a)))
    };
    eb = function () {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    Hq("Reflect", function (a) {
        return a ? a : {}
    }, "es6");
    Hq("Reflect.construct", function () {
        return Nq
    }, "es6");
    Hq("Reflect.setPrototypeOf", function (a) {
        return a ? a : Sq ? function (b, c) {
            try {
                return Sq(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    Hq("Promise", function (a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function (h) {
                h(g)
            })
        }

        if (a) return a;
        b.prototype.m = function (g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.D(function () {
                    h.B()
                })
            }
            this.j.push(g)
        };
        var d = Eq.setTimeout;
        b.prototype.D = function (g) {
            d(g, 0)
        };
        b.prototype.B = function () {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.J(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.J = function (g) {
            this.D(function () {
                throw g;
            })
        };
        var e = function (g) {
            this.m = 0;
            this.D = void 0;
            this.j = [];
            this.H = !1;
            var h = this.J();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.J = function () {
            function g(l) {
                return function (n) {
                    k || (k = !0, l.call(h, n))
                }
            }

            var h = this, k = !1;
            return {resolve: g(this.F), reject: g(this.B)}
        };
        e.prototype.F = function (g) {
            if (g === this) this.B(new TypeError("A Promise cannot resolve to itself")); else if (g instanceof e) this.L(g); else {
                a:switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.ua(g) : this.l(g)
            }
        };
        e.prototype.ua = function (g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.B(k);
                return
            }
            "function" == typeof h ? this.O(h, g) : this.l(g)
        };
        e.prototype.B = function (g) {
            this.M(2, g)
        };
        e.prototype.l = function (g) {
            this.M(1, g)
        };
        e.prototype.M = function (g, h) {
            if (0 != this.m) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
            this.m = g;
            this.D = h;
            2 === this.m && this.T();
            this.o()
        };
        e.prototype.T = function () {
            var g = this;
            d(function () {
                if (g.C()) {
                    var h = Eq.console;
                    "undefined" !== typeof h && h.error(g.D)
                }
            }, 1)
        };
        e.prototype.C = function () {
            if (this.H) return !1;
            var g = Eq.CustomEvent, h = Eq.Event, k = Eq.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {cancelable: !0}) : "function" === typeof h ? g = new h("unhandledrejection", {cancelable: !0}) : (g = Eq.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.D;
            return k(g)
        };
        e.prototype.o = function () {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.m(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.L = function (g) {
            var h = this.J();
            g.Ec(h.resolve, h.reject)
        };
        e.prototype.O = function (g, h) {
            var k = this.J();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function (g, h) {
            function k(p, r) {
                return "function" == typeof p ? function (u) {
                    try {
                        l(p(u))
                    } catch (w) {
                        n(w)
                    }
                } : r
            }

            var l, n, m = new e(function (p, r) {
                l = p;
                n = r
            });
            this.Ec(k(g, l), k(h, n));
            return m
        };
        e.prototype.catch = function (g) {
            return this.then(void 0, g)
        };
        e.prototype.Ec = function (g, h) {
            function k() {
                switch (l.m) {
                    case 1:
                        g(l.D);
                        break;
                    case 2:
                        h(l.D);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.m);
                }
            }

            var l = this;
            null == this.j ? f.m(k) : this.j.push(k);
            this.H = !0
        };
        e.resolve = c;
        e.reject = function (g) {
            return new e(function (h, k) {
                k(g)
            })
        };
        e.race = function (g) {
            return new e(function (h, k) {
                for (var l = _.A(g), n = l.next(); !n.done; n = l.next()) c(n.value).Ec(h, k)
            })
        };
        e.all = function (g) {
            var h = _.A(g), k = h.next();
            return k.done ? c([]) : new e(function (l, n) {
                function m(u) {
                    return function (w) {
                        p[u] = w;
                        r--;
                        0 == r && l(p)
                    }
                }

                var p = [], r = 0;
                do p.push(void 0), r++, c(k.value).Ec(m(p.length - 1), n), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    Hq("Object.setPrototypeOf", function (a) {
        return a || Sq
    }, "es6");
    Hq("WeakMap", function (a) {
        function b() {
        }

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }

        if (function () {
            if (!a || !Object.seal) return !1;
            try {
                var g = Object.seal({}), h = Object.seal({}), k = new a([[g, 2], [h, 3]]);
                if (2 != k.get(g) || 3 != k.get(h)) return !1;
                k.delete(g);
                k.set(h, 4);
                return !k.has(g) && 4 == k.get(h)
            } catch (l) {
                return !1
            }
        }()) return a;
        var d = "$jscomp_hidden_" + Math.random(), e = 0, f = function (g) {
            this.j = (e += Math.random() + 1).toString();
            if (g) {
                g = _.A(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        };
        f.prototype.set = function (g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!Kq(g, d)) {
                var k = new b;
                Cq(g, d, {value: k})
            }
            if (!Kq(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function (g) {
            return c(g) && Kq(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function (g) {
            return c(g) && Kq(g, d) && Kq(g[d], this.j)
        };
        f.prototype.delete = function (g) {
            return c(g) && Kq(g, d) && Kq(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    Hq("Map", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({x: 4}), k = new a(_.A([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({x: 4}) || k.set({x: 4}, "t") != k || 2 != k.size) return !1;
                var l = _.t(k, "entries").call(k), n = l.next();
                if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                n = l.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
            } catch (m) {
                return !1
            }
        }()) return a;
        var b = new v.WeakMap, c = function (h) {
            this.m = {};
            this.j = f();
            this.size = 0;
            if (h) {
                h = _.A(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        };
        c.prototype.set = function (h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.m[l.id] = []);
            l.pa ? l.pa.value = k : (l.pa = {
                next: this.j,
                Xa: this.j.Xa,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.pa), this.j.Xa.next = l.pa, this.j.Xa = l.pa, this.size++);
            return this
        };
        c.prototype.delete = function (h) {
            h = d(this, h);
            return h.pa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.m[h.id], h.pa.Xa.next = h.pa.next, h.pa.next.Xa = h.pa.Xa, h.pa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function () {
            this.m = {};
            this.j = this.j.Xa = f();
            this.size = 0
        };
        c.prototype.has = function (h) {
            return !!d(this, h).pa
        };
        c.prototype.get = function (h) {
            return (h = d(this, h).pa) && h.value
        };
        c.prototype.entries = function () {
            return e(this, function (h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function () {
            return e(this, function (h) {
                return h.key
            })
        };
        c.prototype.values = function () {
            return e(this, function (h) {
                return h.value
            })
        };
        c.prototype.forEach = function (h, k) {
            for (var l = _.t(this, "entries").call(this), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[_.t(v.Symbol, "iterator")] = _.t(c.prototype, "entries");
        var d = function (h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
            var n = h.m[l];
            if (n && Kq(h.m, l)) for (h = 0; h < n.length; h++) {
                var m = n[h];
                if (k !== k && m.key !== m.key || k === m.key) return {id: l, list: n, index: h, pa: m}
            }
            return {id: l, list: n, index: -1, pa: void 0}
        }, e = function (h, k) {
            var l = h.j;
            return Iq(function () {
                if (l) {
                    for (; l.head != h.j;) l = l.Xa;
                    for (; l.next != l.head;) return l = l.next, {done: !1, value: k(l)};
                    l = null
                }
                return {done: !0, value: void 0}
            })
        }, f = function () {
            var h = {};
            return h.Xa = h.next = h.head = h
        }, g = 0;
        return c
    }, "es6");
    var br = function (a, b) {
        a instanceof String && (a += "");
        var c = 0, d = !1, e = {
            next: function () {
                if (!d && c < a.length) {
                    var f = c++;
                    return {value: b(f, a[f]), done: !1}
                }
                d = !0;
                return {done: !0, value: void 0}
            }
        };
        e[_.t(v.Symbol, "iterator")] = function () {
            return e
        };
        return e
    };
    Hq("Array.prototype.entries", function (a) {
        return a ? a : function () {
            return br(this, function (b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Hq("Array.prototype.keys", function (a) {
        return a ? a : function () {
            return br(this, function (b) {
                return b
            })
        }
    }, "es6");
    var cr = function (a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Hq("String.prototype.endsWith", function (a) {
        return a ? a : function (b, c) {
            var d = cr(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;) if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var dr = function (a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {i: e, He: f}
        }
        return {i: -1, He: void 0}
    };
    Hq("Array.prototype.find", function (a) {
        return a ? a : function (b, c) {
            return dr(this, b, c).He
        }
    }, "es6");
    Hq("Number.isFinite", function (a) {
        return a ? a : function (b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    Hq("Number.isInteger", function (a) {
        return a ? a : function (b) {
            return _.t(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Hq("Array.from", function (a) {
        return a ? a : function (b, c, d) {
            c = null != c ? c : function (h) {
                return h
            };
            var e = [], f = "undefined" != typeof v.Symbol && _.t(v.Symbol, "iterator") && b[_.t(v.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    Hq("Array.prototype.values", function (a) {
        return a ? a : function () {
            return br(this, function (b, c) {
                return c
            })
        }
    }, "es8");
    Hq("Array.prototype.fill", function (a) {
        return a ? a : function (b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    }, "es6");
    var er = function (a) {
        return a ? a : _.t(Array.prototype, "fill")
    };
    Hq("Int8Array.prototype.fill", er, "es6");
    Hq("Uint8Array.prototype.fill", er, "es6");
    Hq("Uint8ClampedArray.prototype.fill", er, "es6");
    Hq("Int16Array.prototype.fill", er, "es6");
    Hq("Uint16Array.prototype.fill", er, "es6");
    Hq("Int32Array.prototype.fill", er, "es6");
    Hq("Uint32Array.prototype.fill", er, "es6");
    Hq("Float32Array.prototype.fill", er, "es6");
    Hq("Float64Array.prototype.fill", er, "es6");
    Hq("Set", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({x: 4}), d = new a(_.A([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({x: 4}) != d || 2 != d.size) return !1;
                var e = _.t(d, "entries").call(d), f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }()) return a;
        var b = function (c) {
            this.j = new v.Map;
            if (c) {
                c = _.A(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function (c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function (c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function () {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function (c) {
            return this.j.has(c)
        };
        b.prototype.entries = function () {
            return _.t(this.j, "entries").call(this.j)
        };
        b.prototype.values = function () {
            return _.t(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.t(b.prototype, "values");
        b.prototype[_.t(v.Symbol, "iterator")] = _.t(b.prototype, "values");
        b.prototype.forEach = function (c, d) {
            var e = this;
            this.j.forEach(function (f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    Hq("Object.entries", function (a) {
        return a ? a : function (b) {
            var c = [], d;
            for (d in b) Kq(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Hq("String.prototype.startsWith", function (a) {
        return a ? a : function (b, c) {
            var d = cr(this, b, "startsWith"), e = d.length, f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;) if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    Hq("globalThis", function (a) {
        return a || Eq
    }, "es_2020");
    Hq("Array.prototype.flatMap", function (a) {
        return a ? a : function (b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function (e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    Hq("Object.is", function (a) {
        return a ? a : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Hq("Array.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    Hq("String.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            return -1 !== cr(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    Hq("AggregateError", function (a) {
        if (a) return a;
        a = function (b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.O(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    Hq("Promise.any", function (a) {
        return a ? a : function (b) {
            b = b instanceof Array ? b : _.t(Array, "from").call(Array, b);
            return v.Promise.all(b.map(function (c) {
                return v.Promise.resolve(c).then(function (d) {
                    throw d;
                }, function (d) {
                    return d
                })
            })).then(function (c) {
                throw new v.AggregateError(c, "All promises were rejected");
            }, function (c) {
                return c
            })
        }
    }, "es_2021");
    Hq("Object.values", function (a) {
        return a ? a : function (b) {
            var c = [], d;
            for (d in b) Kq(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Hq("Object.fromEntries", function (a) {
        return a ? a : function (b) {
            var c = {};
            if (!(_.t(v.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.t(v.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    Hq("Array.prototype.findIndex", function (a) {
        return a ? a : function (b, c) {
            return dr(this, b, c).i
        }
    }, "es6");
    Hq("Array.prototype.flat", function (a) {
        return a ? a : function (b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function (d) {
                Array.isArray(d) && 0 < b ? (d = _.t(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    Hq("Promise.prototype.finally", function (a) {
        return a ? a : function (b) {
            return this.then(function (c) {
                return v.Promise.resolve(b()).then(function () {
                    return c
                })
            }, function (c) {
                return v.Promise.resolve(b()).then(function () {
                    throw c;
                })
            })
        }
    }, "es9");
    Hq("String.raw", function (a) {
        return a ? a : function (b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    _.q = this || self;
    ua = function (a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ka = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    la = "closure_uid_" + (1E9 * Math.random() >>> 0);
    na = 0;
    fr = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    gr = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    };
    _.hr = function (a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.hr = fr : _.hr = gr;
        return _.hr.apply(null, arguments)
    };
    _.ir = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    qe = function () {
        return Date.now()
    };
    var jr;
    var dg = function (a, b) {
        this.j = a === kr && b || "";
        this.m = lr
    };
    dg.prototype.Ua = !0;
    dg.prototype.La = function () {
        return this.j
    };
    var eg = function (a) {
        return a instanceof dg && a.constructor === dg && a.m === lr ? a.j : "type_error:Const"
    }, mr = function (a) {
        return new dg(kr, a)
    }, lr = {}, kr = {};
    var qb = mr("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var nr, or, Zh, qr;
    nr = function () {
        return !0
    };
    or = function (a) {
        return function () {
            return !a.apply(this, arguments)
        }
    };
    Zh = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.pr = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    qr = function (a, b, c) {
        var d = 0, e = !1, f = [], g = function () {
            d = 0;
            e && (e = !1, h())
        }, h = function () {
            d = _.q.setTimeout(g, b);
            var k = f;
            f = [];
            a.apply(c, k)
        };
        return function (k) {
            f = arguments;
            d ? e = !0 : h()
        }
    };
    var rr, da;
    rr = {passive: !0};
    da = Zh(function () {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
            _.q.addEventListener("test", null, b)
        } catch (c) {
        }
        return a
    });
    _.hb = function (a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ea(d)), !0) : !1
    };
    _.Od = function (a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ea(d)), !0) : !1
    };
    var tr;
    _.fa = function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.sr = function (a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.wg = function (a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.Mc = function (a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    tr = function (a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.Og = function (a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var lg = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Gn = {}, Xa = function (a, b) {
        this.j = b === Gn ? a : "";
        this.Ua = !0
    };
    Xa.prototype.toString = function () {
        return this.j.toString()
    };
    Xa.prototype.La = function () {
        return this.j.toString()
    };
    var gg = function (a, b) {
        this.j = b === ur ? a : ""
    };
    gg.prototype.toString = function () {
        return this.j + ""
    };
    gg.prototype.Ua = !0;
    gg.prototype.La = function () {
        return this.j.toString()
    };
    var Za = function (a) {
            return a instanceof gg && a.constructor === gg ? a.j : "type_error:TrustedResourceUrl"
        }, pb = function (a, b) {
            var c = eg(a);
            if (!vr.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(wr, function (d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof dg ? eg(d) : encodeURIComponent(String(d))
            });
            return Gd(a)
        }, wr = /%{(\w+)}/g,
        vr = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        xr = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, ur = {}, Gd = function (a) {
            return new gg(a, ur)
        }, yr = function (a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c) if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
            return b
        };
    var zr = function (a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }, ek = function (a) {
        return /^[\s\xa0]*$/.test(a)
    }, hq = function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }, kg = function (a) {
        if (!Ar.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(Br, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Cr, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Dr, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Er, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Fr, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Gr, "&#0;"));
        return a
    }, Br = /&/g, Cr = /</g, Dr = />/g, Er = /"/g, Fr = /'/g, Gr = /\x00/g, Ar = /[\x00&<>"']/, iq = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ra = function (a, b) {
        this.j = b === Hr ? a : ""
    }, Jr, Hr;
    Ra.prototype.toString = function () {
        return this.j.toString()
    };
    Ra.prototype.Ua = !0;
    Ra.prototype.La = function () {
        return this.j.toString()
    };
    var Sa = function (a) {
        return a instanceof Ra && a.constructor === Ra ? a.j : "type_error:SafeUrl"
    }, ig = /^data:(.*);base64,[a-z0-9+\/]+=*$/i, hg = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Ir;
    try {
        new URL("s://g"), Ir = !0
    } catch (a) {
        Ir = !1
    }
    Jr = Ir;
    Hr = {};
    _.fb = function (a) {
        return new Ra(a, Hr)
    };
    _.jg = _.fb("about:invalid#zClosurez");
    var og = {}, ng = function (a, b) {
        this.j = b === og ? a : "";
        this.Ua = !0
    };
    ng.prototype.La = function () {
        return this.j.toString()
    };
    ng.prototype.toString = function () {
        return this.j.toString()
    };
    var ab = function (a) {
            return a instanceof ng && a.constructor === ng ? a.j : "type_error:SafeHtml"
        }, Kr = function (a) {
            return a instanceof ng ? a : new ng(kg("object" == typeof a && a.Ua ? a.La() : String(a)), og)
        }, Lr = function (a) {
            var b = Kr(Zf), c = [], d = function (e) {
                Array.isArray(e) ? e.forEach(d) : (e = Kr(e), c.push(ab(e).toString()))
            };
            a.forEach(d);
            return new ng(c.join(ab(b).toString()), og)
        }, mg = function (a) {
            return Lr(Array.prototype.slice.call(arguments))
        }, bg = /^[a-zA-Z0-9-]+$/,
        fg = {action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0}, cg = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        }, Zf = new ng(_.q.trustedTypes && _.q.trustedTypes.emptyHTML || "", og);
    var Mr;
    try {
        new URL("s://g"), Mr = !0
    } catch (a) {
        Mr = !1
    }
    var Ta = Mr;
    var Nr = {
        ah: 0,
        Wg: 1,
        Xg: 2,
        0: "HTML_FORMATTED_CONTENT",
        1: "EMBEDDED_INTERNAL_CONTENT",
        2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
    }, Or = function (a, b) {
        b = Error.call(this, a + " cannot be used with intent " + Nr[b]);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.type = a;
        this.name = "TypeCannotBeUsedWithIntentError"
    };
    _.O(Or, Error);
    _.cb = function (a) {
        this.Ff = a
    };
    _.Pr = [db("data"), db("http"), db("https"), db("mailto"), db("ftp"), new _.cb(function (a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var lb = function (a) {
        return new v.Promise(function (b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function () {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var ub, tb = "undefined" !== typeof TextEncoder;
    var Qr = function (a) {
        Qr[" "](a);
        return a
    };
    Qr[" "] = function () {
    };
    var Rr = function (a, b) {
        try {
            return Qr(a[b]), !0
        } catch (c) {
        }
        return !1
    };
    var Sr, Ur, Vr, Wr, Xr, Yr;
    Sr = Ha("Opera");
    _.Tr = Ha("Trident") || Ha("MSIE");
    Ur = Ha("Edge");
    Vr = Ha("Gecko") && !(-1 != Ga().toLowerCase().indexOf("webkit") && !Ha("Edge")) && !(Ha("Trident") || Ha("MSIE")) && !Ha("Edge");
    Wr = -1 != Ga().toLowerCase().indexOf("webkit") && !Ha("Edge");
    Xr = function () {
        var a = _.q.document;
        return a ? a.documentMode : void 0
    };
    a:{
        var Zr = "", $r = function () {
            var a = Ga();
            if (Vr) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Ur) return /Edge\/([\d\.]+)/.exec(a);
            if (_.Tr) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Wr) return /WebKit\/(\S+)/.exec(a);
            if (Sr) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        $r && (Zr = $r ? $r[1] : "");
        if (_.Tr) {
            var as = Xr();
            if (null != as && as > parseFloat(Zr)) {
                Yr = String(as);
                break a
            }
        }
        Yr = Zr
    }
    var bs = Yr, cs;
    if (_.q.document && _.Tr) {
        var ds = Xr();
        cs = ds ? ds : parseInt(bs, 10) || void 0
    } else cs = void 0;
    var es = cs;
    !Ha("Android") || La();
    La();
    Ma();
    var fs = {}, gs = null, hs = Vr || Wr || "function" == typeof _.q.btoa, xb = function (a, b) {
        void 0 === b && (b = 0);
        is();
        b = fs[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e], h = a[e + 1], k = a[e + 2], l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }, js = function (a, b) {
        if (hs && !b) a = _.q.btoa(a); else {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                255 < f && (c[d++] = f & 255, f >>= 8);
                c[d++] = f
            }
            a = xb(c, b)
        }
        return a
    }, ro = function (a) {
        var b = "";
        ks(a, function (c) {
            b += String.fromCharCode(c)
        });
        return b
    }, ls = function (a) {
        var b = a.length, c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c), e = 0;
        ks(a, function (f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }, ks = function (a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++), n = gs[l];
                if (null != n) return n;
                if (!ek(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }

        is();
        for (var d = 0; ;) {
            var e = c(-1), f = c(0), g = c(64), h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }, is = function () {
        if (!gs) {
            gs = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                fs[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === gs[f] && (gs[f] = e)
                }
            }
        }
    };
    var Ab = "undefined" !== typeof Uint8Array, wb = !_.Tr && "function" === typeof _.q.btoa, ms = RegExp("[-_.]", "g"),
        cj, Db = {};
    var ns, Sb = function (a, b) {
        Eb(b);
        this.wc = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }, Tb = function () {
        return ns || (ns = new Sb(null, Db))
    }, Bc = function (a) {
        var b = a.wc;
        return null == b ? "" : "string" === typeof b ? b : a.wc = yb(b)
    };
    Sb.prototype.isEmpty = function () {
        return null == this.wc
    };
    var bj = function (a) {
        Eb(Db);
        var b = a.wc;
        if (null != b && !Bb(b)) if ("string" === typeof b) if (wb) {
            ms.test(b) && (b = b.replace(ms, zb));
            b = atob(b);
            for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
            b = c
        } else b = ls(b); else b = null;
        return null == b ? b : a.wc = b
    };
    var Fb = "function" === typeof v.Symbol && "symbol" === typeof (0, v.Symbol)() ? (0, v.Symbol)() : void 0;
    var bc = {}, os, mc, ps = [];
    Ib(ps, 23);
    mc = Object.freeze(ps);
    var qs = function (a) {
        this.he = 0;
        this.Td = a
    };
    qs.prototype.next = function () {
        return this.he < this.Td.length ? {done: !1, value: this.Td[this.he++]} : {done: !0, value: void 0}
    };
    qs.prototype[_.t(v.Symbol, "iterator")] = function () {
        return this
    };
    var fc = (0, v.Symbol)();
    var tc = function (a, b, c, d) {
        d = void 0 === d ? kc : d;
        c = Hb(a);
        c |= 32;
        Ib(a, c);
        this.m = c;
        this.D = (this.J = b) ? ic : jc;
        this.l = d;
        this.j = b = new v.Map;
        for (d = 0; d < a.length; d++) c = a[d], b.set(c[0], c[1]);
        this.size = b.size
    }, rs = function (a) {
        if (a.m & 2) throw Error("Cannot mutate an immutable Map");
    }, Cc = function (a, b) {
        b = void 0 === b ? lc : b;
        for (var c = ss(a), d = 0; d < c.length; d++) {
            var e = c[d], f = a.j.get(c[d]);
            c[d] = [b(e), b(f)]
        }
        return c
    }, uc = function (a, b) {
        b = void 0 === b ? lc : b;
        var c = [];
        a = _.t(a.j, "entries").call(a.j);
        for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
        return c
    };
    ba = tc.prototype;
    ba.clear = function () {
        rs(this);
        this.j.clear();
        this.size = 0
    };
    ba.delete = function (a) {
        rs(this);
        return this.j.delete(a) ? (this.size = this.j.size, !0) : !1
    };
    ba.entries = function () {
        for (var a = ss(this), b = 0; b < a.length; b++) {
            var c = a[b];
            a[b] = [c, this.get(c)]
        }
        return new qs(a)
    };
    ba.keys = function () {
        var a = ss(this);
        return new qs(a)
    };
    ba.values = function () {
        for (var a = ss(this), b = 0; b < a.length; b++) a[b] = this.get(a[b]);
        return new qs(a)
    };
    ba.forEach = function (a, b) {
        for (var c = ss(this), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, this.get(e), e, this)
        }
    };
    ba.set = function (a, b) {
        rs(this);
        var c = this.j;
        if (null == b) return c.delete(a), this;
        c.set(a, this.D(b, this.J, this.B, this.m));
        this.size = c.size;
        return this
    };
    ba.get = function (a) {
        var b = this.j;
        if (b.has(a)) {
            var c = b.get(a), d = this.m, e = this.J;
            e && Array.isArray(c) && d & 16 && Ob(c);
            d = this.D(c, e, this.B, d);
            d !== c && b.set(a, d);
            return d
        }
    };
    ba.has = function (a) {
        return this.j.has(a)
    };
    var ss = function (a) {
        return _.t(Array, "from").call(Array, _.t(a.j, "keys").call(a.j)).sort(gc)
    };
    tc.prototype[_.t(v.Symbol, "iterator")] = function () {
        return _.t(this, "entries").call(this)
    };
    var ts, x, nc, Fk, yl, en, Je, F, sc, Wg, Le, vs, Wi, aj, $i, Yn, us, $n, Qe, ae, ah, Nc, ws, ef, de, ep, dj, xs,
        ys, As, ol, bf, pp, ce, Bs, cn, Gh, xf, Cs;
    ts = function (a) {
        var b = a.m + a.ob;
        return a.Ha || (a.Ha = a.fa[b] = {})
    };
    x = function (a, b, c) {
        return -1 === b ? null : b >= a.m ? a.Ha ? a.Ha[b] : void 0 : c && a.Ha && (c = a.Ha[b], null != c) ? c : a.fa[b + a.ob]
    };
    _.z = function (a, b, c, d) {
        Wb(a);
        return nc(a, b, c, d)
    };
    nc = function (a, b, c, d) {
        a.B && (a.B = void 0);
        if (b >= a.m || d) return ts(a)[b] = c, a;
        a.fa[b + a.ob] = c;
        (c = a.Ha) && b in c && delete c[b];
        return a
    };
    Fk = function (a, b) {
        return null != x(a, b, !1)
    };
    yl = function (a, b, c) {
        return void 0 !== us(a, b, c, !1)
    };
    en = function (a, b, c) {
        return oc(a, b, 0, void 0 === c ? !1 : c, Mb(a.fa))
    };
    Je = function (a, b) {
        var c = x(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && nc(a, b, d);
        return d
    };
    F = function (a, b) {
        a = x(a, b);
        return null == a ? a : !!a
    };
    Wg = function (a, b, c) {
        c = null == c ? mc : Jb(c, 1);
        return _.z(a, b, c)
    };
    _.ph = function (a, b, c) {
        if (null == c) a = _.z(a, b, mc); else {
            var d = Hb(c);
            if (!(d & 4)) {
                if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
                for (var e = 0; e < c.length; e++) c[e] = c[e];
                Ib(c, d | 5)
            }
            a = _.z(a, b, c)
        }
        return a
    };
    Le = function (a, b) {
        return _.z(a, b, void 0, !1)
    };
    vs = function (a, b, c) {
        Wb(a);
        oc(a, b, 2, !1, !1).push(c);
        return a
    };
    Wi = function (a, b, c, d) {
        Wb(a);
        (c = $i(a, c)) && c !== b && null != d && nc(a, c, void 0, !1);
        return nc(a, b, d)
    };
    aj = function (a, b, c) {
        return $i(a, b) === c ? c : -1
    };
    $i = function (a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != x(a, e) && (0 !== c && nc(a, c, void 0, !1), c = e)
        }
        return c
    };
    Yn = function (a, b, c) {
        var d = Hb(a.fa);
        Vb(d);
        var e = x(a, c);
        b = hc(ec(e, b, !0, d));
        e !== b && nc(a, c, b);
        return b
    };
    us = function (a, b, c, d) {
        var e = x(a, c, d);
        b = ec(e, b, !1, Hb(a.fa));
        b !== e && null != b && nc(a, c, b, d);
        return b
    };
    $n = function (a, b, c) {
        return (a = us(a, b, c, !1)) ? a : cc(b)
    };
    Qe = function (a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = us(a, b, c, d);
        if (null == b) return b;
        if (!Mb(a.fa)) {
            var e = hc(b);
            e !== b && (b = e, nc(a, c, b, d))
        }
        return b
    };
    ae = function (a, b, c) {
        var d = Hb(a.fa), e = !!(d & 2);
        b = xc(a, b, c, e, d);
        a = oc(a, c, 3, void 0, e);
        if (!(e || Hb(a) & 8)) {
            for (e = 0; e < b.length; e++) c = b[e], d = hc(c), c !== d && (b[e] = d, a[e] = d.fa);
            Gb(a, 8)
        }
        return b
    };
    _.Yg = function (a, b, c) {
        Wb(a);
        null == c && (c = void 0);
        return nc(a, b, c)
    };
    ah = function (a, b, c, d) {
        Wb(a);
        null == d && (d = void 0);
        return Wi(a, b, c, d)
    };
    Nc = function (a, b, c, d) {
        Wb(a);
        var e = null == c ? mc : Lb([]);
        if (null != c) {
            for (var f = !!c.length, g = 0; g < c.length; g++) {
                var h = c[g];
                f = f && !Mb(h.fa);
                e[g] = h.fa
            }
            e = Jb(e, (f ? 8 : 0) | 1);
            a.j || (a.j = {});
            a.j[b] = c
        } else a.j && (a.j[b] = void 0);
        return nc(a, b, e, d)
    };
    ws = function (a, b, c, d) {
        var e = Hb(a.fa);
        Vb(e);
        e = xc(a, c, b, !1, e);
        c = null != d ? d : new c;
        a = oc(a, b, 2, void 0, !1);
        e.push(c);
        a.push(c.fa);
        Mb(c.fa) && Kb(a, 8);
        return c
    };
    ef = function (a, b, c, d) {
        ws(a, b, c, d);
        return a
    };
    de = function (a, b) {
        return yc(x(a, b), 0)
    };
    ep = function (a, b) {
        return yc(x(a, b), 0)
    };
    dj = function (a, b, c) {
        return yc(x(a, b), void 0 === c ? 0 : c)
    };
    xs = function (a) {
        a = x(a, 7);
        return null == a ? void 0 : a
    };
    ys = function () {
        var a = hi().j;
        return x(a, 26)
    };
    As = function (a) {
        var b = zs;
        var c = void 0 === c ? 0 : c;
        return dj(a, aj(a, b, 3), c)
    };
    ol = function (a, b) {
        return pc(a, b, ac, !1)
    };
    bf = function (a, b) {
        return yc(x(a, b), "")
    };
    pp = function (a, b, c) {
        return yc(F(a, b), void 0 === c ? !1 : c)
    };
    ce = function (a, b, c) {
        return yc(x(a, b), void 0 === c ? 0 : c)
    };
    Bs = function (a, b) {
        return bf(a, aj(a, b, 2))
    };
    cn = function (a, b, c, d) {
        return Qe(a, b, aj(a, d, c))
    };
    Gh = function (a, b) {
        a = F(a, b);
        return null == a ? void 0 : a
    };
    xf = function (a, b) {
        a = x(a, b);
        return null == a ? void 0 : a
    };
    Cs = function (a, b) {
        a = x(a, b);
        return null == a ? void 0 : a
    };
    var zc;
    _.S = function (a, b, c, d) {
        null == a && (a = zc);
        zc = void 0;
        var e = this.constructor.messageId;
        if (null == a) {
            a = e ? [e] : [];
            var f = 48;
            var g = !0;
            d && (f |= 128);
            Ib(a, f)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (e && e !== a[0]) throw Error();
            f = Gb(a, 0) | 32;
            g = 0 !== (16 & f);
            if (d) {
                if (!(f & 128) && 0 < a.length) {
                    var h = a[a.length - 1];
                    if (Rb(h) && "g" in h) {
                        f |= 128;
                        delete h.g;
                        var k = !0, l;
                        for (l in h) {
                            k = !1;
                            break
                        }
                        k && a.pop()
                    } else throw Error();
                }
            } else if (128 & f) throw Error();
            Ib(a, f)
        }
        this.ob = e ? 0 : -1;
        this.j = void 0;
        this.fa = a;
        a:{
            f = this.fa.length;
            e = f - 1;
            if (f && (f = this.fa[e], Rb(f))) {
                this.Ha = f;
                this.m = e - this.ob;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, e + 1 - this.ob), this.Ha = void 0) : this.m = Number.MAX_VALUE
        }
        if (!d && this.Ha && "g" in this.Ha) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = g && !0;
            d = this.m;
            var n;
            for (g = 0; g < c.length; g++) e = c[g], e < d ? (e += this.ob, (f = a[e]) ? Qc(f, b) : a[e] = mc) : (n || (n = ts(this)), (f = n[e]) ? Qc(f, b) : n[e] = mc)
        }
    };
    _.S.prototype.toJSON = function () {
        var a = this.fa;
        return os ? a : Ec(a, Gc, Hc)
    };
    var Yd = function (a) {
        os = !0;
        try {
            return JSON.stringify(a.toJSON(), Rc)
        } finally {
            os = !1
        }
    };
    _.S.prototype.Ed = bc;
    var Tc = 0, Uc = 0, Wc = "function" === typeof BigInt;
    var Ds = function (a, b) {
        this.m = a >>> 0;
        this.j = b >>> 0
    }, Fs = function (a) {
        if (!a) return Es || (Es = new Ds(0, 0));
        if (!/^\d+$/.test(a)) return null;
        Xc(a);
        return new Ds(Tc, Uc)
    }, Es, Gs = function (a, b) {
        this.m = a >>> 0;
        this.j = b >>> 0
    }, md = function (a) {
        if (!a) return Hs || (Hs = new Gs(0, 0));
        if (!/^-?\d+$/.test(a)) return null;
        Xc(a);
        return new Gs(Tc, Uc)
    }, Hs;
    var Is = function () {
        this.j = []
    };
    Is.prototype.length = function () {
        return this.j.length
    };
    Is.prototype.end = function () {
        var a = this.j;
        this.j = [];
        return a
    };
    var od = function (a, b, c) {
        for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.j.push(b)
    }, nd = function (a, b) {
        for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
        a.j.push(b)
    }, Js = function (a, b) {
        if (0 <= b) nd(a, b); else {
            for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
            a.j.push(1)
        }
    };
    var vd = function () {
        this.D = [];
        this.m = 0;
        this.j = new Is
    }, wd = function (a, b) {
        0 !== b.length && (a.D.push(b), a.m += b.length)
    }, Ks = function (a, b) {
        nd(a.j, 8 * b + 2);
        b = a.j.end();
        wd(a, b);
        b.push(a.m);
        return b
    }, Ls = function (a, b) {
        var c = b.pop();
        for (c = a.m + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.m++;
        b.push(c);
        a.m++
    }, $c = function (a, b) {
        if (b = b.zd) {
            wd(a, a.j.end());
            for (var c = 0; c < b.length; c++) wd(a, bj(b[c]) || cj || (cj = new Uint8Array(0)))
        }
    }, Ms = function (a, b, c) {
        nd(a.j, 8 * b + 2);
        nd(a.j, c.length);
        wd(a, a.j.end());
        wd(a, c)
    };
    var ed = (0, v.Symbol)(), cd = (0, v.Symbol)(), bd = (0, v.Symbol)(), Ns = ld(function (a, b, c) {
        if (5 !== a.j()) return !1;
        _.z(b, c, a.l());
        return !0
    }, function (a, b, c) {
        b = Je(b, c);
        if (null != b) {
            nd(a.j, 8 * c + 5);
            a = a.j;
            var d = +b;
            0 === d ? 0 < 1 / d ? Tc = Uc = 0 : (Uc = 0, Tc = 2147483648) : isNaN(d) ? (Uc = 0, Tc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? (Uc = 0, Tc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), Uc = 0, Tc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, Uc = 0, Tc = (c | b + 127 << 23 | d & 8388607) >>> 0));
            c = Tc;
            a.j.push(c >>> 0 & 255);
            a.j.push(c >>> 8 & 255);
            a.j.push(c >>> 16 & 255);
            a.j.push(c >>> 24 & 255)
        }
    }), Os = ld(function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.o());
        return !0
    }, pd), Ps = ld(function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.M());
        return !0
    }, pd), Qs = ld(function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.C());
        return !0
    }, function (a, b, c) {
        b = x(b, c);
        null != b && ("string" === typeof b && Fs(b), null != b && (nd(a.j, 8 * c), "number" === typeof b ? (a = a.j, Vc(b), od(a, Tc, Uc)) : (c = Fs(b), od(a.j, c.m, c.j))))
    }), Rs = ld(function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.H());
        return !0
    }, function (a, b, c) {
        b = x(b, c);
        null != b && null != b && (nd(a.j, 8 * c), Js(a.j, b))
    }), Ss = ld(function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.J());
        return !0
    }, function (a, b, c) {
        b = F(b, c);
        null != b && (nd(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
    }), Ts = ld(function (a, b, c) {
        if (2 !== a.j()) return !1;
        _.z(b, c, a.D());
        return !0
    }, function (a, b, c) {
        b = x(b, c);
        null != b && Ms(a, c, vb(b))
    }), Us = ld(function (a, b, c) {
        if (2 !== a.j()) return !1;
        vs(b, c, a.D());
        return !0
    }, function (a, b, c) {
        b = ol(b, c);
        if (null != b) for (var d = 0; d < b.length; d++) {
            var e = b[d];
            null != e && Ms(a, c, vb(e))
        }
    }), Vs = ld(function (a, b, c, d, e) {
        if (2 !== a.j()) return !1;
        a.m(Yn(b, d, c), e);
        return !0
    }, function (a, b, c, d, e) {
        b = Qe(b, d, c);
        null != b && (c = Ks(a, c), e(b, a), Ls(a, c))
    }), Ws = ld(function (a, b, c, d, e) {
        if (2 !== a.j()) return !1;
        a.m(ws(b, c, d), e);
        return !0
    }, function (a, b, c, d, e) {
        b = ae(b, d, c);
        if (null != b) for (d = 0; d < b.length; d++) {
            var f = Ks(a, c);
            e(b[d], a);
            Ls(a, f)
        }
    }), Xs = ld(function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.B());
        return !0
    }, function (a, b, c) {
        b = x(b, c);
        null != b && (b = parseInt(b, 10), nd(a.j, 8 * c), Js(a.j, b))
    });
    var C = {
        Lh: function () {
            return ""
        }
    };
    C.xd = qd;
    var Ys = qd(function (a) {
        return null !== a && void 0 !== a
    }, "exists");
    C.assert = function () {
    };
    C.ra = function (a) {
        return a
    };
    var rd = void 0;
    C.Ph = sd;
    C.Rh = td;
    C.Hh = function () {
    };
    C.Ih = function (a) {
        return a
    };
    C.re = ud;
    C.Th = function (a, b) {
        ud(a, b);
        return a
    };
    C.Gh = function () {
    };
    C.K = function (a) {
        return a
    };
    C.Qh = function (a, b) {
        sd(a, Ys, b)
    };
    C.Sh = function (a, b) {
        return td(a, Ys, b)
    };
    C.Kh = function (a, b) {
        return a(b)
    };
    C.Mh = function (a) {
        ud(!rd);
        rd = function () {
            var b = "function" === typeof a ? a() : a;
            rd = void 0;
            return b
        }
    };
    var so = function (a) {
        _.S.call(this, a)
    };
    _.O(so, _.S);
    var to = function (a) {
        _.S.call(this, a)
    };
    _.O(to, _.S);
    var Zs = function (a) {
        this.j = a.m;
        this.m = a.D;
        this.J = a.J;
        this.lc = a.lc;
        this.I = a.I;
        this.Hb = a.Hb;
        this.Rc = a.Rc;
        this.cd = a.cd;
        this.Qc = a.Qc;
        this.D = a.j
    }, $s = function (a, b, c) {
        this.m = a;
        this.D = b;
        this.J = c;
        this.I = window;
        this.Hb = "env";
        this.Rc = "n";
        this.cd = "0";
        this.Qc = "1";
        this.j = !0
    };
    $s.prototype.build = function () {
        return new Zs(this)
    };
    var Co = function (a, b) {
        var c = void 0 === pp(b, 6) ? !0 : pp(b, 6), d, e;
        a:switch (ce(b, 4, 0)) {
            case 1:
                var f = "pt";
                break a;
            case 2:
                f = "cr";
                break a;
            default:
                f = ""
        }
        f = new $s(zd(ce(b, 2, 0)), bf(b, 3), f);
        b = null != (e = null == (d = Qe(b, so, 5)) ? void 0 : bf(d, 1)) ? e : "";
        f.lc = b;
        f.j = c;
        f.I = a;
        return f.build()
    };
    var bt = function (a) {
        _.S.call(this, a)
    };
    _.O(bt, _.S);
    bt.prototype.getId = function () {
        return bf(this, 1)
    };
    var Dl = function (a) {
        var b = new bt;
        return _.z(b, 1, a)
    }, ct = [bt, 1, Ts];
    var dt = function (a) {
        _.S.call(this, a)
    };
    _.O(dt, _.S);
    dt.prototype.getWidth = function () {
        return de(this, 1)
    };
    var Kl = function (a) {
        var b = new dt;
        return _.z(b, 1, a)
    };
    dt.prototype.getHeight = function () {
        return de(this, 2)
    };
    var Jl = function (a, b) {
        return _.z(a, 2, b)
    }, et = [dt, 1, Rs, 2, Rs];
    var ft = function (a) {
        _.S.call(this, a)
    };
    _.O(ft, _.S);
    var gt = [ft, 1, Ps, 2, Ss];
    var Bl = function (a) {
        _.S.call(this, a, -1, ht)
    };
    _.O(Bl, _.S);
    var El = function (a, b) {
        _.ph(a, 4, b)
    }, Cl = function (a, b) {
        _.Yg(a, 6, b)
    }, Il = function (a, b) {
        _.Yg(a, 7, b)
    }, ht = [4], it = [Bl, 1, Ts, 2, Ps, 8, Ps, 3, Ts, 4, Us, 5, Xs, 6, Vs, ct, 7, Vs, et, 9, Vs, gt];
    var ml = function (a) {
        _.S.call(this, a)
    };
    _.O(ml, _.S);
    var ll = function (a, b) {
        return _.z(a, 1, b)
    }, jl = function (a, b) {
        return _.z(a, 4, b)
    }, kl = function (a, b) {
        return _.z(a, 2, b)
    }, jt = [ml, 1, Xs, 4, Ss, 2, Rs, 3, Ts];
    var ul = function (a) {
        _.S.call(this, a, -1, kt)
    };
    _.O(ul, _.S);
    var tl = function (a, b) {
        return _.z(a, 1, b)
    }, vl = function (a, b) {
        _.z(a, 2, b)
    }, rl = function (a, b) {
        return ef(a, 3, Bl, b)
    }, sl = function (a, b) {
        return _.z(a, 4, b)
    };
    ul.prototype.ge = function () {
        return ce(this, 7, 0)
    };
    var kt = [3], lt = [ul, 1, Ts, 2, Ps, 3, Ws, it, 4, Xs, 5, Vs, jt, 6, Ss, 7, Xs];
    var mt = function (a) {
        _.S.call(this, a)
    };
    _.O(mt, _.S);
    var nt = [mt, 1, Xs, 2, Ss];
    var pt = function (a) {
        _.S.call(this, a, -1, ot)
    };
    _.O(pt, _.S);
    var ql = function (a, b) {
        return ws(a, 2, ul, b)
    }, zl = function (a, b) {
        _.Yg(a, 5, b)
    }, ot = [2], qt = [pt, 1, Xs, 6, Ts, 2, Ws, lt, 3, Xs, 4, Ts, 5, Vs, jt, 9, Vs, nt, 7, Ss, 8, Rs];
    var st = function (a) {
        _.S.call(this, a, -1, rt)
    };
    _.O(st, _.S);
    var tt = function (a) {
        var b = new pt;
        b = _.z(b, 1, 1);
        return ws(a, 1, pt, b)
    }, rt = [1];
    st.prototype.D = xd([st, 1, Ws, qt]);
    var ut = function (a) {
        _.S.call(this, a)
    };
    _.O(ut, _.S);
    var zs = [2, 3];
    var wt = function (a) {
        _.S.call(this, a, -1, vt)
    };
    _.O(wt, _.S);
    var vt = [1];
    var yt = function (a) {
        _.S.call(this, a, -1, xt)
    };
    _.O(yt, _.S);
    var xt = [1];
    var zt = function (a) {
        _.S.call(this, a)
    };
    _.O(zt, _.S);
    zt.prototype.D = function () {
        return bf(this, 1)
    };
    zt.prototype.J = function () {
        return Bs(this, At)
    };
    var At = [2, 3];
    var Ct = function (a) {
        _.S.call(this, a, -1, Bt)
    };
    _.O(Ct, _.S);
    Ct.prototype.D = function () {
        return ae(this, zt, 2)
    };
    var kf = yd(Ct), Bt = [2];
    var Et = function (a) {
        _.S.call(this, a, -1, Dt)
    };
    _.O(Et, _.S);
    var Dt = [4];
    var Ft = function (a) {
        _.S.call(this, a)
    };
    _.O(Ft, _.S);
    var Ht = function (a) {
        _.S.call(this, a, -1, Gt)
    };
    _.O(Ht, _.S);
    Ht.prototype.Nc = function () {
        return $n(this, Ft, 2)
    };
    var Gt = [1];
    var It = function (a) {
        _.S.call(this, a)
    };
    _.O(It, _.S);
    var Kt = function (a) {
        _.S.call(this, a, -1, Jt)
    };
    _.O(Kt, _.S);
    var Jt = [1];
    var Lt = function (a) {
        _.S.call(this, a)
    };
    _.O(Lt, _.S);
    var Mt = [Lt, 1, Xs, 2, Ps];
    var Nt = function (a) {
        _.S.call(this, a)
    };
    _.O(Nt, _.S);
    var Ot = [Nt, 1, Os];
    var Pt = function (a) {
        _.S.call(this, a)
    };
    _.O(Pt, _.S);
    Pt.prototype.getEscapedQemQueryId = function () {
        return bf(this, 1)
    };
    var Qt = [Pt, 1, Ts, 2, Vs, Ot, 3, Vs, Mt];
    var Rt = function (a) {
        _.S.call(this, a)
    };
    _.O(Rt, _.S);
    Rt.prototype.getAdUnitPath = function () {
        return bf(this, 1)
    };
    var dn = function (a) {
        _.S.call(this, a)
    };
    _.O(dn, _.S);
    var an = function (a) {
        _.S.call(this, a)
    };
    _.O(an, _.S);
    var bn = [1, 2];
    var Tt = function (a) {
        _.S.call(this, a, -1, St)
    };
    _.O(Tt, _.S);
    var St = [1, 2];
    var fn = function (a) {
        _.S.call(this, a)
    };
    _.O(fn, _.S);
    fn.prototype.getAdUnitPath = function () {
        return bf(this, 2)
    };
    fn.prototype.getWidth = function () {
        return de(this, 3)
    };
    fn.prototype.getHeight = function () {
        return de(this, 4)
    };
    var Vt = function (a) {
        _.S.call(this, a, -1, Ut)
    };
    _.O(Vt, _.S);
    var Ut = [3];
    var Wt = function (a) {
        _.S.call(this, a)
    };
    _.O(Wt, _.S);
    Wt.prototype.getAdUnitPath = function () {
        return bf(this, 3)
    };
    var Xt = function (a) {
        _.S.call(this, a)
    };
    _.O(Xt, _.S);
    var Yt = [5, 6, 7, 8, 9];
    var $t = function (a) {
        _.S.call(this, a, -1, Zt)
    };
    _.O($t, _.S);
    var Zt = [4, 5, 6];
    var au = function (a) {
        _.S.call(this, a)
    };
    _.O(au, _.S);
    au.prototype.hc = function () {
        return null != x(this, 2)
    };
    var cu = function (a) {
        _.S.call(this, a, -1, bu)
    };
    _.O(cu, _.S);
    var bu = [13];
    var eu = function (a) {
        _.S.call(this, a, -1, du)
    };
    _.O(eu, _.S);
    var du = [13];
    var Re = function (a) {
        _.S.call(this, a)
    };
    _.O(Re, _.S);
    var Pe = function (a, b) {
        return _.z(a, 1, b)
    }, fu = [Re, 1, Xs];
    var Ye = function (a) {
        _.S.call(this, a)
    };
    _.O(Ye, _.S);
    var df = function (a) {
        var b = new Ye;
        return _.z(b, 1, a)
    }, Ie = function (a, b) {
        return _.z(a, 8, Yb(b))
    };
    Ye.prototype.Aa = function (a) {
        return _.Yg(this, 10, a)
    };
    var gu = yd(Ye), hu = [Ye, 1, Ts, 2, Ts, 3, Ps, 7, Ps, 8, Ns, 4, Rs, 5, Rs, 6, Rs, 9, Ss, 11, Ss, 10, Vs, fu];
    var iu = function (a) {
        _.S.call(this, a)
    };
    _.O(iu, _.S);
    var ju = [iu, 4, Xs, 5, Ts];
    var ku = function (a) {
        _.S.call(this, a)
    };
    _.O(ku, _.S);
    var lu = [ku, 1, Qs, 2, Qs, 3, Qs];
    var mu = function (a) {
        _.S.call(this, a)
    };
    _.O(mu, _.S);
    mu.prototype.Aa = function (a) {
        return _.Yg(this, 7, a)
    };
    var nu = [mu, 5, Ts, 4, Ts, 2, Vs, lu, 3, Vs, lu, 6, Ss, 7, Vs, ju, 8, Ps];
    var Ue = function (a) {
        _.S.call(this, a, -1, ou)
    };
    _.O(Ue, _.S);
    var ou = [1, 2];
    Ue.prototype.D = xd([Ue, 1, Ws, nu, 2, Ws, hu]);
    var pu = function (a) {
        _.S.call(this, a)
    };
    _.O(pu, _.S);
    pu.prototype.D = function () {
        return bf(this, 1)
    };
    pu.prototype.J = function () {
        return Bs(this, qu)
    };
    var qu = [2, 3];
    var su = function (a) {
        _.S.call(this, a, -1, ru)
    };
    _.O(su, _.S);
    su.prototype.D = function () {
        return ae(this, pu, 1)
    };
    var ru = [1];
    var tu = function (a) {
        _.S.call(this, a)
    };
    _.O(tu, _.S);
    tu.prototype.hc = function () {
        return null != x(this, 1)
    };
    tu.prototype.getVersion = function () {
        return x(this, 5)
    };
    var uu = function (a) {
        _.S.call(this, a)
    };
    _.O(uu, _.S);
    var vu = function (a) {
        _.S.call(this, a)
    };
    _.O(vu, _.S);
    var wu = function (a) {
        _.S.call(this, a)
    };
    _.O(wu, _.S);
    var cp = function (a) {
        _.S.call(this, a, -1, xu)
    };
    _.O(cp, _.S);
    cp.prototype.getEscapedQemQueryId = function () {
        return bf(this, 4)
    };
    var xu = [2];
    var bp = function (a) {
        _.S.call(this, a)
    };
    _.O(bp, _.S);
    var dp = function (a) {
        _.S.call(this, a)
    };
    _.O(dp, _.S);
    var gp = function (a) {
        _.S.call(this, a)
    };
    _.O(gp, _.S);
    var fp = function (a) {
        _.S.call(this, a)
    };
    _.O(fp, _.S);
    fp.prototype.getEscapedQemQueryId = function () {
        return bf(this, 2)
    };
    var zu = function (a) {
        _.S.call(this, a, -1, yu)
    };
    _.O(zu, _.S);
    zu.prototype.getWidth = function () {
        return de(this, 9)
    };
    zu.prototype.getHeight = function () {
        return de(this, 10)
    };
    var yu = [3, 7, 11];
    var Bu = function (a) {
        _.S.call(this, a, -1, Au)
    };
    _.O(Bu, _.S);
    Bu.prototype.getHeight = function () {
        return x(this, 6)
    };
    Bu.prototype.getWidth = function () {
        return x(this, 7)
    };
    Bu.prototype.getEscapedQemQueryId = function () {
        return x(this, 34)
    };
    var Au = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63], Cu = [39, 48];
    var Du = function (a) {
        _.S.call(this, a)
    };
    _.O(Du, _.S);
    var qo = yd(Du);
    var Fu = function (a) {
        _.S.call(this, a, -1, Eu)
    };
    _.O(Fu, _.S);
    var Gu = yd(Fu), Eu = [1, 2, 3];
    var Hu = window;
    var oq = function (a) {
        _.S.call(this, a, -1, Iu)
    };
    _.O(oq, _.S);
    var Iu = [15];
    var nq = function (a) {
        _.S.call(this, a)
    };
    _.O(nq, _.S);
    nq.prototype.getCorrelator = function () {
        return dj(this, 1)
    };
    nq.prototype.setCorrelator = function (a) {
        return _.y(this, 1, a, 0)
    };
    var mq = function (a) {
        _.S.call(this, a)
    };
    _.O(mq, _.S);
    var Ju = _.Tr || Wr;
    var Ku = /^[\w+/_-]+[=]{0,2}$/, Lu = function () {
        var a = _.q.document;
        return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ku.test(a) ? a : "" : ""
    };
    _.Lh = function (a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Lh.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Lh.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Lh.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Oh = function (a, b) {
        this.width = a;
        this.height = b
    };
    ba = _.Oh.prototype;
    ba.aspectRatio = function () {
        return this.width / this.height
    };
    ba.isEmpty = function () {
        return !(this.width * this.height)
    };
    ba.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ba.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ba.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Mu, Nu, Ou, Qu;
    Mu = function (a) {
        return a = kg(a)
    };
    Nu = function () {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ qe()).toString(36)
    };
    Ou = 2147483648 * Math.random() | 0;
    _.Pu = function (a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase()
        })
    };
    Qu = function (a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Tu, Vu, Uu, Yu, $u, Ad, Dd, Ru;
    Tu = function (a) {
        return a ? new Ru(_.Su(a)) : jr || (jr = new Ru)
    };
    Vu = function (a, b) {
        za(b, function (c, d) {
            c && "object" == typeof c && c.Ua && (c = c.La());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Uu.hasOwnProperty(d) ? a.setAttribute(Uu[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    Uu = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.Xu = function (a) {
        a = a.document;
        a = _.Wu(a) ? a.documentElement : a.body;
        return new _.Oh(a.clientWidth, a.clientHeight)
    };
    Yu = function (a) {
        return a.scrollingElement ? a.scrollingElement : !Wr && _.Wu(a) ? a.documentElement : a.body || a.documentElement
    };
    _.Zu = function (a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    $u = function (a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }

        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ua(f) || _.ka(f) && 0 < f.nodeType) d(f); else {
                a:{
                    if (f && "number" == typeof f.length) {
                        if (_.ka(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.sr(g ? ia(f) : f, d)
            }
        }
    };
    _.Wu = function (a) {
        return "CSS1Compat" == a.compatMode
    };
    _.av = function (a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.bv = function (a) {
        var b;
        if (Ju && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ka(b) && 1 == b.nodeType ? b : null
    };
    Ad = function (a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [], e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++) if (g != d[h][b]) return f;
            f = g
        }
        return f
    };
    _.Su = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    Dd = function (a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.Zu(a.contentDocument) : null)
        } catch (b) {
        }
        return null
    };
    Ru = function (a) {
        this.j = a || _.q.document || document
    };
    ba = Ru.prototype;
    ba.getElementsByTagName = function (a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    ba.createElement = function (a) {
        var b = this.j;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    ba.createTextNode = function (a) {
        return this.j.createTextNode(String(a))
    };
    ba.append = function (a, b) {
        $u(_.Su(a), a, arguments)
    };
    ba.Je = _.av;
    var cv = function () {
        return Ha("iPad") || Ha("Android") && !Ha("Mobile") || Ha("Silk")
    };
    var ev, xk, fv, Zj;
    _.dv = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    ev = function (a) {
        return a ? decodeURI(a) : a
    };
    xk = function (a, b, c) {
        if (Array.isArray(b)) for (var d = 0; d < b.length; d++) xk(a, String(b[d]), c); else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    fv = /#|$/;
    Zj = function (a, b) {
        var c = a.search(fv);
        a:{
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f) if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    var Cd, Bd, Df, gv, Ef, Xj, $h, fe, zj, Dh, ee, ge, wq, iv, jv, ai, kv, lv, mv, nv, ov, pv, qv, rv, sv, Ci, Ei, Di,
        tv, uv, wv, xv, yv, zv, Av, Be, Bv, jn, bl, Tk, Dk, Cv;
    Cd = function (a) {
        try {
            return !!a && null != a.location.href && Rr(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Bd = function (a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.q : d;
        c = (void 0 === c ? 0 : c) ? gv(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Cd(c) || !a(c));) c = gv(c)
    };
    Df = function () {
        var a = window;
        Bd(function (b) {
            a = b;
            return !1
        });
        return a
    };
    gv = function (a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {
        }
        return null
    };
    Ef = function (a) {
        return Cd(a.top) ? a.top : null
    };
    Xj = function (a, b) {
        var c = _.Nd("SCRIPT", a);
        $a(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    $h = function (a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    fe = function () {
        if (!v.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            v.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Ak = function (a, b) {
        if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.hv = function (a) {
        var b = [];
        _.Ak(a, function (c) {
            b.push(c)
        });
        return b
    };
    zj = function (a, b) {
        return Ca(a, function (c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    Dh = function (a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    ee = Zh(function () {
        return _.Og(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], iv) || 1E-4 > Math.random()
    });
    ge = function (a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {
        }
        return null
    };
    wq = Zh(function () {
        return iv("MSIE")
    });
    iv = function (a) {
        return -1 != Ga().indexOf(a)
    };
    jv = /^([0-9.]+)px$/;
    ai = function (a) {
        return (a = jv.exec(a)) ? +a[1] : null
    };
    kv = function () {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {
        }
        return !0
    };
    lv = function (a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {
        }
        return ""
    };
    mv = {
        Ig: "allow-forms",
        Jg: "allow-modals",
        Kg: "allow-orientation-lock",
        Lg: "allow-pointer-lock",
        Mg: "allow-popups",
        Ng: "allow-popups-to-escape-sandbox",
        Og: "allow-presentation",
        Pg: "allow-same-origin",
        Qg: "allow-scripts",
        Rg: "allow-top-navigation",
        Sg: "allow-top-navigation-by-user-activation"
    };
    nv = Zh(function () {
        return _.hv(mv)
    });
    ov = function (a) {
        var b = nv();
        return a.length ? _.wg(b, function (c) {
            return !(0 <= _.fa(a, c))
        }) : b
    };
    pv = function () {
        var a = _.Nd("IFRAME"), b = {};
        _.sr(nv(), function (c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    qv = function (a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    rv = function (a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = gv(a))) break
        }
        return null
    };
    sv = function (a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document, c = b.head, d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Nd("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {
        }
        return null
    };
    _.em = Zh(function () {
        return !cv() && (Ha("iPod") || Ha("iPhone") || Ha("Android") || Ha("IEMobile")) ? 2 : cv() ? 1 : 0
    });
    Ci = function (a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.ji = function (a, b) {
        _.Ak(b, function (c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    Ei = function (a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    Di = function (a, b) {
        for (var c = 100; a && c--;) {
            var d = $h(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    tv = function (a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.Mc(a, parseFloat)
    };
    uv = {};
    _.vv = (uv["http://googleads.g.doubleclick.net"] = !0, uv["http://pagead2.googlesyndication.com"] = !0, uv["https://googleads.g.doubleclick.net"] = !0, uv["https://pagead2.googlesyndication.com"] = !0, uv);
    wv = function (a) {
        _.q.console && _.q.console.warn && _.q.console.warn(a)
    };
    xv = [];
    yv = function () {
        var a = xv;
        xv = [];
        a = _.A(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {
            }
        }
    };
    zv = function (a) {
        return a.replace(/\\(n|r|\\)/g, function (b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    Av = function () {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    Be = function (a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {value: Av(), configurable: !1})
        } catch (b) {
        }
        return Number(a.goog_pvsid) || -1
    };
    Bv = function (a, b) {
        Ed(_.Zu(_.Su(a)), a, b)
    };
    jn = function (a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (xv.push(b), 1 == xv.length && (v.Promise ? v.Promise.resolve().then(yv) : window.setImmediate ? setImmediate(yv) : setTimeout(yv, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    bl = function (a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Tk = function (a) {
        return 0 === a || bl(a)
    };
    Dk = function (a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {
        }
        return b || String(a)
    };
    _.Nd = function (a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    Cv = function (a) {
        for (var b = a; a && a != a.parent;) a = a.parent, Cd(a) && (b = a);
        return b
    };
    _.Dv = function (a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.Dv.prototype.getWidth = function () {
        return this.right - this.left
    };
    _.Dv.prototype.getHeight = function () {
        return this.bottom - this.top
    };
    _.Ev = function (a) {
        return new _.Dv(a.top, a.right, a.bottom, a.left)
    };
    _.Dv.prototype.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.Dv.prototype.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.Dv.prototype.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Fv = function (a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }, Gv = function (a) {
        return new _.Dv(a.top, a.left + a.width, a.top + a.height, a.left)
    }, Hv = function (a, b) {
        var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Fv(c, e, d - c, a - e)
        }
        return null
    };
    Fv.prototype.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Fv.prototype.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Fv.prototype.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Iv = function (a) {
        return (a = void 0 === a ? Fd() : a) ? Cd(a.master) ? a.master : null : null
    };
    var Lv, Kg, Nh, Nv, Ov, Kh;
    _.Kv = function (a, b, c) {
        if ("string" === typeof b) (b = _.Jv(a, b)) && (a.style[b] = c); else for (var d in b) {
            c = a;
            var e = b[d], f = _.Jv(c, d);
            f && (c.style[f] = e)
        }
    };
    Lv = {};
    _.Jv = function (a, b) {
        var c = Lv[b];
        if (!c) {
            var d = _.Pu(b);
            c = d;
            void 0 === a.style[d] && (d = (Wr ? "Webkit" : Vr ? "Moz" : _.Tr ? "ms" : null) + Qu(d), void 0 !== a.style[d] && (c = d));
            Lv[b] = c
        }
        return c
    };
    _.Mv = function (a, b) {
        var c = _.Su(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    Kg = function (a, b) {
        return _.Mv(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Nh = function (a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
    };
    Nv = function (a) {
        if (_.Tr && !(8 <= Number(es))) return a.offsetParent;
        var b = _.Su(a), c = Kg(a, "position"), d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode) if (11 == a.nodeType && a.host && (a = a.host), c = Kg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    Ov = function (a) {
        var b = _.Su(a), c = new _.Lh(0, 0);
        var d = b ? _.Su(b) : document;
        d = !_.Tr || 9 <= Number(es) || _.Wu(Tu(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Nh(a);
        d = Tu(b).j;
        b = Yu(d);
        d = d.parentWindow || d.defaultView;
        b = _.Tr && d.pageYOffset != b.scrollTop ? new _.Lh(b.scrollLeft, b.scrollTop) : new _.Lh(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Kh = function (a, b) {
        var c = new _.Lh(0, 0), d = _.Zu(_.Su(a));
        if (!Rr(d, "parent")) return c;
        do {
            var e = d == b ? Ov(a) : _.Pv(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.Pv = function (a) {
        a = Nh(a);
        return new _.Lh(a.left, a.top)
    };
    _.Qv = function (a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Lg = function (a, b) {
        if ("none" != Kg(b, "display")) return a(b);
        var c = b.style, d = c.display, e = c.visibility, f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Mg = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight, d = Wr && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Nh(a), new _.Oh(a.right - a.left, a.bottom - a.top)) : new _.Oh(b, c)
    };
    var vi = function (a) {
        a = Iv(Fd(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var Rv = function (a, b) {
        if (v.globalThis.fetch) v.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function () {
        }); else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var Sv = function (a) {
        _.S.call(this, a)
    };
    _.O(Sv, _.S);
    var Tv = function (a) {
        _.S.call(this, a)
    };
    _.O(Tv, _.S);
    var eh = function (a) {
        _.S.call(this, a)
    };
    _.O(eh, _.S);
    var $g = function (a) {
        _.S.call(this, a)
    };
    _.O($g, _.S);
    var Xg = function (a) {
        _.S.call(this, a)
    };
    _.O(Xg, _.S);
    var Uv = function (a) {
        _.S.call(this, a)
    };
    _.O(Uv, _.S);
    var Vg = function (a) {
        _.S.call(this, a, -1, Vv)
    };
    _.O(Vg, _.S);
    Vg.prototype.getTagSessionCorrelator = function () {
        return dj(this, 2)
    };
    var Vv = [4], bh = [6, 7, 8, 9, 11];
    var qh = function (a) {
        _.S.call(this, a, -1, Wv)
    };
    _.O(qh, _.S);
    var Wv = [3];
    var nh = function (a) {
        _.S.call(this, a, -1, Xv)
    };
    _.O(nh, _.S);
    var Xv = [4, 5];
    var mh = function (a) {
        _.S.call(this, a, -1, Yv)
    };
    _.O(mh, _.S);
    mh.prototype.getTagSessionCorrelator = function () {
        return dj(this, 1)
    };
    var Yv = [2];
    var lh = function (a) {
        _.S.call(this, a)
    };
    _.O(lh, _.S);
    var th = [4];
    _.U = function () {
        this.J = this.J;
        this.ua = this.ua
    };
    _.U.prototype.J = !1;
    _.U.prototype.Ea = function () {
        this.J || (this.J = !0, this.D())
    };
    _.Um = function (a, b) {
        _.Km(a, _.ir(Md, b))
    };
    _.Km = function (a, b) {
        a.J ? b() : (a.ua || (a.ua = []), a.ua.push(b))
    };
    _.U.prototype.D = function () {
        if (this.ua) for (; this.ua.length;) this.ua.shift()()
    };
    var Zv = function (a, b, c, d, e) {
        this.l = a;
        this.B = b;
        this.H = c;
        this.D = d;
        this.J = e;
        this.j = [];
        this.m = null
    }, $v = function (a) {
        null !== a.m && (clearTimeout(a.m), a.m = null);
        if (a.j.length) {
            var b = Id(a.j);
            a.B(a.l + "?e=1", b);
            a.j = []
        }
    };
    Zv.prototype.Ce = function () {
        var a = eb.apply(0, arguments), b = this;
        this.J && 65536 <= Id(this.j.concat(a)).length && $v(this);
        this.j.push.apply(this.j, _.Jd(a));
        this.j.length >= this.D && $v(this);
        this.j.length && null === this.m && (this.m = setTimeout(function () {
            $v(b)
        }, this.H))
    };
    var zq = function (a, b, c) {
        Zv.call(this, "https://pagead2.googlesyndication.com/pagead/ping", Rv, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!v.globalThis.fetch)
    };
    _.O(zq, Zv);
    var V = function (a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? !1 : b
    }, aw = function (a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? 0 : b
    }, bw = function (a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? "" : b
    }, cw = function (a) {
        var b = void 0 === b ? [] : b;
        this.j = a;
        this.defaultValue = b
    };
    var dw, ew, fw, wi, gw, Hl, hw, iw, jw, hl, kw, lw, mw, nw, ow, pw, Un, qw, rw, sw, tw, uw, vw, ww, xw, yw, zw, Aw,
        no, Bw, Cw, Dw, Gp, Ew, Fw, Gw, Hw, jo, Lk, Jw, Kw, $l, Lw, Mw, Nw, gh, Ow, Pw, Qw, Rw, Sw, Tw, Uw, Vw, Ww, Xw,
        Yw, wk, tk, Zw, $w, Sh, ax, bx, cx, al, dx, yq, ex, fx, gx, hx, ix, jx, kx, Ff, lx, mx, nx, ox, px, qx, He, rx,
        sx, jf, gf, tx, hf, ux, vx, qq, rq, Sl, sq, pq, wx, xx, ho, yx, Rm, zx, Bx, Cx;
    dw = new V(1122, !0);
    ew = new bw(3);
    fw = new cw(481);
    wi = new aw(7, .1);
    gw = new V(212);
    Hl = new aw(474069761);
    hw = new V(490560535);
    iw = new aw(455645877);
    jw = new aw(462420536);
    hl = new V(476475256);
    kw = new aw(448338836, .01);
    lw = new aw(427198696);
    mw = new aw(438663674);
    nw = new V(509922597);
    ow = new V(23);
    pw = new V(369430);
    Un = new V(508245849);
    qw = new V(477812799);
    rw = new V(492519751);
    sw = new aw(408380992, .01);
    tw = new aw(377289019, 1E4);
    uw = new aw(488);
    vw = new aw(529, 20);
    ww = new bw(10);
    xw = new V(489217043);
    yw = new V(495013820);
    zw = new aw(428094087);
    Aw = new V(492198798, !0);
    no = new aw(447000223, .01);
    Bw = new V(360245597, !0);
    Cw = new aw(494, 1E4);
    Dw = new V(505725833, !0);
    Gp = new V(485209195);
    Ew = new V(499996722);
    Fw = new V(471855283);
    Gw = new V(220);
    Hw = new V(200);
    jo = new V(494337909);
    Lk = new V(486179632, !0);
    _.Iw = new V(503331120);
    Jw = new V(501943234, !0);
    Kw = new V(504138873, !0);
    $l = new aw(492, .01);
    Lw = new aw(363650251);
    Mw = new aw(474872234);
    Nw = new V(83);
    gh = new V(85);
    Ow = new V(437061931);
    Pw = new cw(466086960);
    Qw = new V(45388169);
    Rw = new aw(398776877, 6E4);
    Sw = new aw(374201269, 6E4);
    Tw = new aw(371364213, 6E4);
    Uw = new aw(376149757, .0025);
    Vw = new V(453275889);
    Ww = new V(377936516, !0);
    Xw = new V(495689921, !0);
    Yw = new aw(24);
    wk = new cw(1);
    tk = new bw(2, "1-0-40");
    Zw = new V(441529989);
    $w = new V(437308144);
    Sh = new aw(504377075);
    ax = new cw(489);
    bx = new V(392065905);
    cx = new aw(360245595, 500);
    al = new V(45397804);
    dx = new V(424117738);
    yq = new aw(397316938, 1E3);
    ex = new V(440148282, !0);
    fx = new V(399705355);
    gx = new V(508672391);
    hx = new V(502572081);
    ix = new V(501);
    jx = new V(439828594);
    kx = new V(483962503);
    Ff = new V(1930);
    lx = new aw(494575051);
    mx = new cw(489560439);
    nx = new cw(505762507);
    ox = new V(501917474);
    px = new V(453);
    qx = new V(454);
    He = new aw(360261971);
    rx = new aw(1921, 72);
    sx = new aw(1920, 12);
    jf = new cw(471270390);
    gf = new V(474633725);
    tx = new V(476437529);
    hf = new V(478009624);
    ux = new V(506738118);
    vx = new V(506738119);
    qq = new V(77);
    rq = new V(78);
    Sl = new V(309);
    sq = new V(80);
    pq = new V(76);
    wx = new V(84);
    xx = new V(1958);
    ho = new V(1973);
    yx = new V(188);
    Rm = new V(1975);
    zx = new V(1974);
    _.Ax = new aw(1972);
    Bx = new V(485990406);
    Cx = new V(501411886, !0);
    var Dx = function (a, b, c, d, e, f) {
        try {
            var g = a.j, h = _.Nd("SCRIPT", g);
            h.async = !0;
            $a(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function () {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function () {
                0 < c ? Dx(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    }, Ex = function (a, b, c, d) {
        c = void 0 === c ? function () {
        } : c;
        d = void 0 === d ? function () {
        } : d;
        Dx(Tu(a), b, 0, !1, c, d)
    };
    Aa({nh: 0, mh: 1, jh: 2, eh: 3, kh: 4, fh: 5, lh: 6, hh: 7, ih: 8, bh: 9, gh: 10}).map(function (a) {
        return Number(a)
    });
    Aa({qh: 0, rh: 1, oh: 2}).map(function (a) {
        return Number(a)
    });
    var Fx = function (a) {
        var b = a.document, c = function () {
            if (!a.frames.googlefcPresent) if (b.body) {
                var d = _.Nd("IFRAME", b);
                d.style.display = "none";
                d.style.width = "0px";
                d.style.height = "0px";
                d.style.border = "none";
                d.style.zIndex = "-1000";
                d.style.left = "-1000px";
                d.style.top = "-1000px";
                d.name = "googlefcPresent";
                b.body.appendChild(d)
            } else a.setTimeout(c, 5)
        };
        c()
    };
    var ie, Do;
    _.Gx = function (a, b, c, d, e) {
        Pd(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
    };
    ie = function (a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.Ak(a, function (e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        Do(d, c)
    };
    Do = function (a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        var d = void 0 === d ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }, d && (b.mode = "cors", b.headers = {"Attribution-Reporting-Eligible": "event-source"}), c.fetch(a, b)) : _.Gx(c, a, void 0, b, d)
    };
    var Hx = function (a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }, Ix = function (a, b) {
        b = void 0 === b ? {} : b;
        _.U.call(this);
        this.m = a;
        this.j = null;
        this.l = {};
        this.o = 0;
        var c;
        this.M = null != (c = b.tc) ? c : 500;
        var d;
        this.H = null != (d = b.Re) ? d : !1;
        this.B = null
    };
    _.O(Ix, _.U);
    Ix.prototype.D = function () {
        this.l = {};
        this.B && (_.Od(this.m, "message", this.B), delete this.B);
        delete this.l;
        delete this.m;
        delete this.j;
        _.U.prototype.D.call(this)
    };
    var Kx = function (a) {
        return "function" === typeof a.m.__tcfapi || null != Jx(a)
    };
    Ix.prototype.addEventListener = function (a) {
        var b = this, c = {internalBlockOnErrors: this.H}, d = _.pr(function () {
            return a(c)
        }), e = 0;
        -1 !== this.M && (e = setTimeout(function () {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.M));
        var f = function (g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Hx(c), c.internalBlockOnErrors = b.H, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Lx(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Ix.prototype.removeEventListener = function (a) {
        a && a.listenerId && Lx(this, "removeEventListener", null, a.listenerId)
    };
    var Mx = function (a, b) {
        var c = void 0 === c ? "755" : c;
        a:{
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (void 0 !== d) {
                    d = d[void 0 === c ? "755" : c];
                    break a
                }
            }
            d = void 0
        }
        if (0 === d) return !1;
        a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }, Lx = function (a, b, c, d) {
        c || (c = function () {
        });
        if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d); else if (Jx(a)) {
            Nx(a);
            var e = ++a.o;
            a.l[e] = c;
            a.j && (c = {}, a.j.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }, Jx = function (a) {
        if (a.j) return a.j;
        a.j = rv(a.m, "__tcfapiLocator");
        return a.j
    }, Nx = function (a) {
        a.B || (a.B = function (b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.l[c.callId](c.returnValue, c.success)
            } catch (d) {
            }
        }, _.hb(a.m, "message", a.B))
    }, Ox = function (a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Hx(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (ie({e: String(a.internalErrorState)}, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }, Px = function (a, b) {
        return !1 === a.gdprApplies ? !0 : b.every(function (c) {
            return Mx(a, c)
        })
    };
    var Qx = function (a, b, c) {
        this.j = a;
        this.D = b;
        this.m = void 0 === c ? function () {
        } : c
    }, Rx = function (a, b, c) {
        return new Qx(a, b, c)
    };
    Qx.prototype.start = function () {
        if (this.j === this.j.top) try {
            Fx(this.j), Sx(this)
        } catch (a) {
        }
    };
    var Sx = function (a) {
        var b = pb(mr("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {id: a.D, ers: 3});
        Ex(a.j, b, function () {
            a.m(!0)
        }, function () {
            a.m(!1)
        })
    };
    var Tx = v.Promise;
    var Ux = function (a) {
        this.D = a
    };
    Ux.prototype.m = function (a, b, c) {
        this.D.then(function (d) {
            d.m(a, b, c)
        })
    };
    Ux.prototype.j = function (a, b) {
        return this.D.then(function (c) {
            return c.j(a, b)
        })
    };
    var Vx = function (a) {
        this.data = a
    };
    var Wx = function (a) {
        this.D = a
    };
    Wx.prototype.m = function (a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        Xx(d.port1, b);
        this.D.postMessage(a, [d.port2].concat(c))
    };
    Wx.prototype.j = function (a, b) {
        var c = this;
        return new Tx(function (d) {
            c.m(a, d, b)
        })
    };
    var Yx = function (a, b) {
        Xx(a, b);
        return new Wx(a)
    }, Xx = function (a, b) {
        b && (a.onmessage = function (c) {
            b(new Vx(c.data, Yx(c.ports[0])))
        })
    };
    var Si = function (a) {
        var b = a.Pc, c = void 0 === a.Ka ? "ZNWN1d" : a.Ka, d = void 0 === a.onMessage ? void 0 : a.onMessage,
            e = void 0 === a.Zc ? void 0 : a.Zc;
        return Zx({
            destination: a.destination, ge: function () {
                return b.contentWindow
            }, Sf: $x(a.origin), Ka: c, onMessage: d, Zc: e
        })
    }, Zx = function (a) {
        var b = a.destination, c = a.ge, d = a.Sf, e = void 0 === a.Rd ? void 0 : a.Rd, f = a.Ka,
            g = void 0 === a.onMessage ? void 0 : a.onMessage, h = void 0 === a.Zc ? void 0 : a.Zc,
            k = Object.create(null);
        d.forEach(function (l) {
            k[l] = !0
        });
        return new Ux(new Tx(function (l, n) {
            var m = function (p) {
                p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", m, !1), e && p.data.t !== e ? n(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(Yx(p.ports[0], g)), h && h(p)))
            };
            b.addEventListener("message", m, !1)
        }))
    }, $x = function (a) {
        a = "string" === typeof a ? [a] : a;
        var b = Object.create(null);
        a.forEach(function (c) {
            if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return a
    };
    var oh = (0, C.xd)(function (a) {
        return "string" === typeof a
    }, "string");
    var ay = navigator, by = function (a) {
            var b = 1, c;
            if (void 0 != a && "" != a) for (b = 0, c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
            return b
        }, cy = function (a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return by(a.toLowerCase())
        }, dy = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        ey = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"), fy = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Ih = function (a) {
        return !!a && a.top == a
    }, gy = function (a, b, c) {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (Ih(a)) return !1;
        var d = a.document, e = d.documentElement;
        if (b && c) {
            var f = 1, g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };
    var hy = function (a) {
        a = void 0 === a ? window : a;
        return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
    };
    var pi = function () {
        this.j = [];
        this.m = -1
    };
    pi.prototype.set = function (a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.t(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.m = -1)
    };
    pi.prototype.get = function (a) {
        return !!this.j[a]
    };
    var ri = function (a) {
        -1 === a.m && (a.m = tr(a.j, function (b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.m
    };
    var be = function (a) {
        _.S.call(this, a)
    };
    _.O(be, _.S);
    var Xd = function (a) {
        var b = new be;
        return _.y(b, 1, a, 0)
    }, Wd = function (a, b) {
        return _.y(a, 2, b, 0)
    };
    var $d = function (a) {
        _.S.call(this, a, -1, iy)
    };
    _.O($d, _.S);
    var Vd = function (a, b) {
        ef(a, 1, be, b)
    }, Ud = yd($d), iy = [1];
    var jy = function (a, b, c, d) {
        _.U.call(this);
        this.T = b;
        this.F = c;
        this.C = d;
        this.o = new v.Map;
        this.L = 0;
        this.l = new v.Map;
        this.M = new v.Map;
        this.H = new v.Map;
        this.B = void 0;
        this.m = a
    };
    _.O(jy, _.U);
    jy.prototype.D = function () {
        delete this.j;
        this.o.clear();
        this.l.clear();
        this.M.clear();
        this.H.clear();
        this.B && (_.Od((0, C.K)(this.m), "message", this.B), delete this.B);
        delete this.m;
        delete this.C;
        _.U.prototype.D.call(this)
    };
    var ky = function (a) {
        if (a.j) return a.j;
        a.F && a.F((0, C.K)(a.m)) ? a.j = a.m : a.j = rv((0, C.K)(a.m), a.T);
        var b;
        return null != (b = a.j) ? b : null
    }, my = function (a, b) {
        if (ky(a)) if (a.j === a.m) {
            var c = a.o.get("getDataWithCallback");
            c && c((0, C.K)(a.j), b)
        } else if ((c = a.l.get("getDataWithCallback")) && c.Cd) {
            ly(a);
            var d = ++a.L;
            a.M.set(d, c.ne);
            a.H.set(d, c.ke(b));
            a.j.postMessage(c.Cd(b, d), "*")
        }
    }, ly = function (a) {
        a.B || (a.B = function (b) {
            try {
                var c = a.C ? a.C(b) : void 0;
                if (c) {
                    var d = c.Md, e = a.M.get(d);
                    if (e) {
                        a.M.delete(d);
                        var f = a.H.get(c.Md);
                        a.H.delete(d);
                        e(f, c.payload)
                    }
                }
            } catch (g) {
            }
        }, _.hb((0, C.K)(a.m), "message", a.B))
    };
    var ny = function (a, b) {
        (0, C.K)(a.__uspapi)("getUSPData", 1, function (c, d) {
            b.Vb({Xb: null != c ? c : void 0, be: d ? void 0 : 2})
        })
    }, oy = {
        ke: function (a) {
            return a.Vb
        }, Cd: function (a, b) {
            a = {};
            return a.__uspapiCall = {callId: b, command: "getUSPData", version: 1}, a
        }, ne: function (a, b) {
            b = b.__uspapiReturn;
            var c;
            a({Xb: null != (c = b.returnValue) ? c : void 0, be: b.success ? void 0 : 2})
        }
    }, py = function (a) {
        _.U.call(this);
        this.caller = new jy(a, "__uspapiLocator", function (b) {
            return "function" === typeof b.__uspapi
        }, je);
        this.caller.o.set("getDataWithCallback", ny);
        this.caller.l.set("getDataWithCallback", oy)
    };
    _.O(py, _.U);
    py.prototype.D = function () {
        this.caller.Ea();
        _.U.prototype.D.call(this)
    };
    py.prototype.l = function () {
        return !!ky(this.caller)
    };
    py.prototype.M = function (a) {
        var b = {};
        if (this.l()) {
            var c = _.pr(function () {
                a(b)
            });
            my(this.caller, {
                Vb: function (d) {
                    d.be || (b = (0, C.K)(d.Xb));
                    c()
                }
            });
            setTimeout(c, 500)
        } else a(b)
    };
    var ry = function (a) {
        _.S.call(this, a, -1, qy)
    };
    _.O(ry, _.S);
    var qy = [1, 2];
    var sy = function (a) {
        _.S.call(this, a)
    };
    _.O(sy, _.S);
    var ke = yd(sy);
    var ty = function (a, b) {
        a = a.googlefc || (a.googlefc = {});
        a.__fci = a.__fci || [];
        a.__fci.push(b.command, function (c) {
            c = ke(c);
            b.Vb({Xb: c})
        })
    }, uy = {
        ke: function (a) {
            return a.Vb
        }, Cd: function (a, b) {
            var c = {};
            return c.__fciCall = {callId: b, command: a.command}, c
        }, ne: function (a, b) {
            a({Xb: b})
        }
    }, Sm = function (a) {
        _.U.call(this);
        this.j = null;
        this.B = !1;
        this.caller = new jy(a, "googlefcPresent", void 0, le);
        this.caller.o.set("getDataWithCallback", ty);
        this.caller.l.set("getDataWithCallback", uy)
    };
    _.O(Sm, _.U);
    Sm.prototype.D = function () {
        this.caller.Ea();
        _.U.prototype.D.call(this)
    };
    Sm.prototype.m = function () {
        this.B || (this.j = ky(this.caller), this.B = !0);
        return !!this.j
    };
    Sm.prototype.o = function (a) {
        var b = this;
        return new v.Promise(function (c) {
            b.m() && my(b.caller, {
                command: a, Vb: function (d) {
                    c((0, C.K)(d.Xb))
                }
            })
        })
    };
    var oe = function (a) {
        this.j = a || {cookie: ""}
    }, xy = function () {
        var a = vy;
        if (!_.q.navigator.cookieEnabled) return !1;
        if (!a.isEmpty()) return !0;
        a.set("TESTCOOKIESENABLED", "1", {Dd: 60});
        if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
        wy(a, "TESTCOOKIESENABLED");
        return !0
    };
    oe.prototype.set = function (a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Wh;
            d = c.hg || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Dd
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    oe.prototype.get = function (a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = hq(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var wy = function (a, b, c, d) {
        a.get(b);
        a.set(b, "", {Dd: 0, path: c, domain: d})
    };
    oe.prototype.isEmpty = function () {
        return !this.j.cookie
    };
    oe.prototype.clear = function () {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = hq(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) wy(this, b[a])
    };
    var vy = new oe("undefined" == typeof document ? null : document);
    var yy = null, zy = function () {
        if (null === yy) {
            yy = "";
            try {
                var a = "";
                try {
                    a = _.q.top.location.hash
                } catch (c) {
                    a = _.q.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    yy = b ? b[1] : ""
                }
            } catch (c) {
            }
        }
        return yy
    };
    var Ay = function (a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e;
        this.taskId = void 0
    };
    var ih = _.q.performance, By = !!(ih && ih.mark && ih.measure && ih.clearMarks), jh = Zh(function () {
        var a;
        if (a = By) a = zy(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    }), Cy = function (a, b) {
        this.m = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.j = jh() || (null != c ? c : Math.random() < a)
    }, Dy = function (a, b, c, d, e, f) {
        a.j && (b = new Ay(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.m.length || a.m.push(b))
    };
    Cy.prototype.start = function (a, b) {
        if (!this.j) return null;
        a = new Ay(a, b, _.se() || _.re());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        ih && jh() && ih.mark(b);
        return a
    };
    Cy.prototype.end = function (a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.se() || _.re()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            ih && jh() && ih.mark(b);
            !this.j || 2048 < this.m.length || this.m.push(a)
        }
    };
    var Ro = function (a, b, c) {
        var d = _.se();
        d && Dy(a, b, 9, d, 0, c)
    };
    var cl = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, cl.prototype)
    };
    _.O(cl, Error);
    cl.prototype.name = "PublisherInputError";
    var Ey = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, Ey.prototype)
    };
    _.O(Ey, Error);
    Ey.prototype.name = "ServerError";
    var Fy = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, Fy.prototype)
    };
    _.O(Fy, Error);
    Fy.prototype.name = "NetworkError";
    _.we = function (a) {
        var b = "sb";
        if (a.sb && a.hasOwnProperty(b)) return a.sb;
        b = new a;
        return a.sb = b
    };
    var xe = function () {
    };
    xe.prototype.m = function () {
    };
    xe.prototype.J = function () {
    };
    xe.prototype.D = function () {
        return []
    };
    xe.prototype.j = function () {
        return []
    };
    var Vf = function (a, b) {
        a.m = ve(1, b, function () {
        });
        a.D = function (c) {
            return ve(2, b, function () {
                return []
            })(c, 2)
        };
        a.j = function () {
            return ve(3, b, function () {
                return []
            })(2)
        };
        a.J = function (c) {
            ve(16, b, function () {
            })(c, 2)
        }
    };
    var Gy = function () {
    };
    Gy.j = function () {
        throw Error("Must be overridden");
    };
    var Ae = function () {
        this.j = 0
    };
    _.O(Ae, Gy);
    Ae.sb = void 0;
    Ae.j = function () {
        return Ae.sb ? Ae.sb : Ae.sb = new Ae
    };
    var De = function () {
        var a = {};
        this.j = function (b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function (b, c) {
            return null != a[b] ? a[b] : c
        };
        this.D = function (b, c) {
            return null != a[b] ? a[b] : c
        };
        this.J = function (b, c) {
            return null != a[b] ? a[b] : c
        };
        this.B = function () {
        }
    };
    var Hy = function () {
        this.cache = {}
    }, Me = function () {
        Iy || (Jy = _.Ee(sx), Ky = _.Ee(rx), Iy = new Hy);
        return Iy
    }, Ly = function (a) {
        if (void 0 !== a) for (var b = _.A(_.t(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next()) if (c = c.value, _.t(c, "startsWith").call(c, "_GESPSK")) try {
            a.removeItem(c)
        } catch (d) {
        }
        Iy = new Hy
    }, ff = function (a) {
        var b = x(a, 3);
        if (!b) return 3;
        if (void 0 === x(a, 2)) return 4;
        a = Date.now();
        return a > b + 36E5 * Ky ? 2 : a > b + 36E5 * Jy ? 1 : 0
    };
    Hy.prototype.get = function (a, b) {
        if (this.cache[a]) return {mb: this.cache[a], success: !0};
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Ce(6, a, null == (d = g) ? void 0 : d.message);
            return {mb: null, success: !1}
        }
        if (!c) return {mb: null, success: !0};
        try {
            var e = gu(c);
            this.cache[a] = e;
            return {mb: e, success: !0}
        } catch (g) {
            var f;
            Ce(5, a, null == (f = g) ? void 0 : f.message);
            return {mb: null, success: !1}
        }
    };
    Hy.prototype.set = function (a, b) {
        var c = (0, C.K)(x(a, 1)), d = "_GESPSK-" + c;
        _.z(a, 3, Date.now());
        try {
            b.setItem(d, Yd(a))
        } catch (f) {
            var e;
            Ce(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var Iy = null, Jy = 24, Ky = 72;
    var Ne = function (a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var My = function (a) {
        _.U.call(this);
        this.l = a;
        this.j = [];
        this.m = [];
        this.B = []
    };
    _.O(My, _.U);
    var Oy = function (a, b, c) {
        a.m.push({nb: void 0 === c ? !1 : c, pb: b});
        _.H(Fw) && Ny(b, a.l)
    };
    My.prototype.D = function () {
        this.j.length = 0;
        this.B.length = 0;
        if (_.H(Fw)) for (var a = _.A(this.m), b = a.next(); !b.done; b = a.next()) b.value.pb.nd();
        this.m.length = 0;
        _.U.prototype.D.call(this)
    };
    _.zg = function () {
        var a = this;
        this.promise = new v.Promise(function (b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var Py = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, Py.prototype);
        this.name = "InputError"
    };
    _.O(Py, Error);
    var Qy = function () {
        this.Oa = !1
    }, Ry = function () {
        Qy.apply(this, arguments);
        this.j = [];
        this.Fb = new _.zg
    };
    _.O(Ry, Qy);
    var Ty = function (a, b) {
        a.Oa || (a.Oa = !0, a.vb = b, a.Fb.resolve(b), _.H(Fw) && Sy(a))
    }, Uy = function (a, b) {
        a.Oa = !0;
        a.Jd = b;
        a.Fb.reject(b);
        _.H(Fw) && Sy(a)
    }, Sy = function (a) {
        for (var b = _.A(a.j), c = b.next(); !c.done; c = b.next()) c = c.value, c(a.vb);
        a.j.length = 0
    };
    Ry.prototype.nd = function () {
        this.j.length = 0
    };
    var Ny = function (a, b) {
        _.H(Fw) && a.j.push(b)
    };
    Eq.Object.defineProperties(Ry.prototype, {
        promise: {
            configurable: !0, enumerable: !0, get: function () {
                return this.Fb.promise
            }
        }, yb: {
            configurable: !0, enumerable: !0, get: function () {
                return this.Oa
            }
        }, error: {
            configurable: !0, enumerable: !0, get: function () {
                return this.Jd
            }
        }
    });
    var up = function () {
        Ry.apply(this, arguments)
    };
    _.O(up, Ry);
    up.prototype.G = function (a) {
        Ty(this, a)
    };
    var Vy = function (a, b) {
        Ty(a, null != b ? b : null)
    }, Wy = function (a) {
        Ty(a, null)
    }, Xy = function (a, b) {
        b.then(function (c) {
            a.G(c)
        })
    };
    up.prototype.Aa = function (a) {
        this.Oa || (this.Oa = !0, this.vb = null, this.Jd = a, this.Fb.reject(a), _.H(Fw) && Sy(this))
    };
    var Yy = function (a) {
        this.Oa = !1;
        this.jb = a
    };
    _.O(Yy, Qy);
    Yy.prototype.yb = function () {
        return this.jb.Oa
    };
    Yy.prototype.hc = function () {
        return null != this.jb.vb
    };
    Eq.Object.defineProperties(Yy.prototype, {
        error: {
            configurable: !0, enumerable: !0, get: function () {
                return this.jb.Jd
            }
        }
    });
    var Zy = function (a) {
        Yy.call(this, a);
        this.jb = a
    };
    _.O(Zy, Yy);
    Eq.Object.defineProperties(Zy.prototype, {
        value: {
            configurable: !0, enumerable: !0, get: function () {
                return (0, C.K)(this.jb.vb)
            }
        }
    });
    var $y = function (a) {
        Yy.call(this, a);
        this.jb = a
    };
    _.O($y, Yy);
    Eq.Object.defineProperties($y.prototype, {
        value: {
            configurable: !0, enumerable: !0, get: function () {
                var a;
                return null != (a = this.jb.vb) ? a : null
            }
        }
    });
    var az = function () {
        Yy.apply(this, arguments)
    };
    _.O(az, Yy);
    Eq.Object.defineProperties(az.prototype, {
        value: {
            configurable: !0, enumerable: !0, get: function () {
                var a;
                return null != (a = this.jb.vb) ? a : null
            }
        }
    });
    var bz = function () {
        Ry.apply(this, arguments)
    };
    _.O(bz, Ry);
    bz.prototype.notify = function () {
        Ty(this, null)
    };
    var cz = function (a, b) {
        b.then(function () {
            a.notify()
        })
    }, dz = function (a, b) {
        b = void 0 === b ? !1 : b;
        Ry.call(this);
        var c = this;
        this.D = a;
        this.m = 0;
        if (_.H(Fw)) {
            a = {};
            for (var d = _.A(this.D), e = d.next(); !e.done; a = {Pb: a.Pb}, e = d.next()) a.Pb = e.value, Ny(a.Pb, function (f) {
                return function (g) {
                    c.m += 1;
                    f.Pb.error ? Uy(c, f.Pb.error) : b || null !== g ? Ty(c, null != g ? g : null) : c.m === c.D.length && Ty(c, null)
                }
            }(a))
        } else _.t(v.Promise, "any").call(v.Promise, a.map(function (f) {
            return f.promise.then(function (g) {
                if (b || null != g) return g;
                throw g;
            })
        })).then(function (f) {
            c.Oa = !0;
            c.vb = f;
            c.Fb.resolve(f)
        }, function () {
            c.Oa = !0;
            c.Fb.resolve(null)
        })
    };
    _.O(dz, Ry);
    var fz = function (a, b) {
        _.U.call(this);
        var c = this;
        this.id = a;
        this.tc = b;
        this.la = this.ia = this.ha = this.M = !1;
        this.za = -1;
        this.B = new My(function () {
            ez(c)
        });
        _.Um(this, this.B)
    };
    _.O(fz, _.U);
    fz.prototype.start = function () {
        var a = this, b, c;
        return _.jb(function (d) {
            switch (d.j) {
                case 1:
                    if (a.M) return d.return();
                    a.M = !0;
                    d.D = 2;
                    b = a;
                    return kb(d, lf(a.B.m, a.tc), 4);
                case 4:
                    b.za = d.m;
                    if (a.J) {
                        d.j = 5;
                        break
                    }
                    for (var e = 0, f = _.A(a.B.B), g = f.next(); !g.done; g = f.next()) {
                        if (!g.value.hc()) throw Error("missing input: " + a.id + "/" + e);
                        ++e
                    }
                    return kb(d, a.j(), 5);
                case 5:
                    mb(d, 0);
                    break;
                case 2:
                    c = nb(d);
                    if (a.J) return d.return();
                    c instanceof Py ? a.H(c) : c instanceof Error && (a.T(c), a.m(c));
                    d.j = 0
            }
        })
    };
    var ez = function (a) {
        if (!a.M && a.ha) try {
            var b = a.B.m, c = a.tc ? b.filter(function (g) {
                return !g.nb
            }) : b, d = b.filter(function (g) {
                return g.nb
            }), e, f = null == (e = _.t(b, "find").call(b, function (g) {
                return void 0 !== g.pb.error
            })) ? void 0 : e.pb.error;
            if (f) throw a.M = !0, f;
            if (!c.some(function (g) {
                return !g.pb.yb
            })) {
                if (d.length && (a.ia || (a.ia = !0, setTimeout(function () {
                    a.la = !0;
                    ez(a)
                }, a.tc)), d.some(function (g) {
                    return !g.pb.yb
                }) && !a.la)) return;
                a.M = !0;
                a.j()
            }
        } catch (g) {
            a.J || (g instanceof Py ? a.H(g) : g instanceof Error && (a.T(g), a.m(g)))
        }
    }, W = function (a) {
        var b = new up;
        a.B.j.push(b);
        return b
    }, gz = function (a) {
        var b = new bz;
        a.B.j.push(b);
        return b
    }, X = function (a, b) {
        Oy(a.B, b);
        b = new Zy(b);
        a.B.B.push(b);
        return b
    }, Y = function (a, b) {
        Oy(a.B, b);
        return new $y(b)
    }, hz = function (a, b) {
        Oy(a.B, b, !0);
        return new $y(b)
    }, iz = function (a, b) {
        Oy(a.B, b)
    }, jz = function (a, b) {
        b = new dz(b);
        Oy(a.B, b);
        b = new Zy(b);
        a.B.B.push(b);
        return b
    };
    fz.prototype.H = function () {
    };
    fz.prototype.m = function (a) {
        if (this.B.j.length) {
            a = new Py(a.message);
            for (var b = _.A(this.B.j), c = b.next(); !c.done; c = b.next()) c = c.value, c.yb || Uy(c, a)
        }
    };
    var kz = function (a, b) {
        fz.call(this, a);
        this.id = a;
        this.C = b
    };
    _.O(kz, fz);
    kz.prototype.T = function (a) {
        this.C(this.id, a)
    };
    var qf = function (a, b, c) {
        kz.call(this, 1041, c);
        this.storage = b;
        this.l = X(this, a)
    };
    _.O(qf, kz);
    qf.prototype.j = function () {
        var a = this.l.value;
        Me().set(a, this.storage) && null != x(a, 2) && Ce(27, (0, C.K)(x(a, 1)))
    };
    var uf = function (a, b) {
        kz.call(this, 1048, b);
        this.l = W(this);
        this.o = W(this);
        this.F = X(this, a)
    };
    _.O(uf, kz);
    uf.prototype.j = function () {
        var a = this.F.value, b = function (c) {
            var d = {};
            Ce(c, (0, C.K)(x(a, 1)), null, (d.tic = String(Math.round((Date.now() - (0, C.K)(x(a, 3))) / 6E4)), d))
        };
        switch (ff(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.o.G(a);
                break;
            case 2:
                b(26);
                this.l.G(a);
                break;
            case 3:
                Ce(9, (0, C.K)(x(a, 1)));
                this.l.G(a);
                break;
            case 4:
                b(23), this.l.G(a)
        }
    };
    var Mf = function (a, b, c) {
        kz.call(this, 1049, c);
        this.storage = b;
        iz(this, a)
    };
    _.O(Mf, kz);
    Mf.prototype.j = function () {
        for (var a = _.A(Te(this.storage)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Me().get(b, this.storage).mb;
            if (c) {
                var d = ff(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = Me();
                    c = (0, C.K)(x(c, 1));
                    try {
                        this.storage.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        Ce(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    Ce(40, b)
                }
            }
        }
    };
    var yf = function (a, b, c, d) {
        kz.call(this, 658, d);
        this.collectorFunction = a;
        this.storage = c;
        this.l = W(this);
        this.F = W(this);
        this.o = Y(this, b)
    };
    _.O(yf, kz);
    yf.prototype.j = function () {
        var a = this;
        if (this.o.value) {
            var b = function (f) {
                a.l.G({id: (0, C.K)(x(f, 1)), collectorGeneratedData: x(f, 2)})
            }, c = this.o.value, d = (0, C.K)(x(c, 1)), e = ff(c);
            mf(c);
            switch (e) {
                case 0:
                    b(c);
                    break;
                case 1:
                    b(c);
                    this.F.G(c);
                    break;
                case 3:
                case 2:
                case 4:
                    _.z(c, 2, null), Oe(d, c, this.collectorFunction, this.storage).then(b)
            }
        } else Wy(this.l)
    };
    var pf = function (a, b, c) {
        kz.call(this, 1027, c);
        this.Fc = a;
        this.storage = b;
        this.l = W(this);
        this.o = W(this)
    };
    _.O(pf, kz);
    pf.prototype.j = function () {
        var a = Me().get(this.Fc, this.storage).mb;
        a || (a = Ie(df(this.Fc), _.Ee(He) || null), a = _.z(a, 3, Date.now()), this.o.G(a.Aa(Pe(new Re, 100))));
        this.l.G(a)
    };
    var sf = function (a, b, c) {
        kz.call(this, 1029, c);
        this.l = b;
        this.o = W(this);
        this.F = X(this, a)
    };
    _.O(sf, kz);
    sf.prototype.j = function () {
        var a = this.F.value, b = Date.now();
        if (this.l) {
            var c = (0, C.K)(Je(a, 8)), d, e = null != (d = xs(a)) ? d : b;
            c < this.l && Ie(a, Math.min(c + Number((this.l * (b / 1E3 / 60 - e) / 60).toFixed(3)), this.l))
        }
        this.o.G(a)
    };
    var vf = function (a, b, c) {
        kz.call(this, 1047, c);
        this.collectorFunction = a;
        this.o = W(this);
        this.l = W(this);
        this.F = W(this);
        this.L = X(this, b)
    };
    _.O(vf, kz);
    vf.prototype.j = function () {
        var a = this, b = this.L.value, c = (0, C.K)(x(b, 1));
        Ce(18, c);
        try {
            var d = _.re();
            this.collectorFunction().then(function (e) {
                Ce(29, c, null, {delta: String(_.re() - d)});
                a.o.G(_.z(b, 2, e));
                Vy(a.F, e)
            }).catch(function (e) {
                Ce(28, c, nf(e));
                a.l.G(b.Aa(Pe(new Re, 106)))
            })
        } catch (e) {
            Ce(1, c, nf(e)), this.l.G(b.Aa(Pe(new Re, 107)))
        }
    };
    var tf = function (a, b, c) {
        kz.call(this, 1030, c);
        this.F = b;
        this.l = W(this);
        this.o = W(this);
        this.L = X(this, a)
    };
    _.O(tf, kz);
    tf.prototype.j = function () {
        var a = this.L.value, b, c = null != (b = Je(a, 8)) ? b : 0, d;
        b = null != (d = xs(a)) ? d : Date.now();
        1 > c && this.F ? (d = {}, Ce(22, (0, C.K)(x(a, 1)), null, (d.t = String(b), d.cr = String(c), d.cs = String(ff(a)), d)), this.o.G(a.Aa(Pe(new Re, 104)))) : this.l.G(a)
    };
    var zf = function (a, b, c, d) {
        kz.call(this, 662, d);
        this.l = a;
        this.storage = c;
        this.o = X(this, b)
    };
    _.O(zf, kz);
    zf.prototype.j = function () {
        var a = this;
        Se().then(function () {
            var b = (0, C.K)(a.o.value);
            Oe((0, C.K)(x(b, 1)), b, a.l, a.storage)
        })
    };
    var rf = function (a, b, c) {
        kz.call(this, 1028, c);
        this.o = b;
        this.l = W(this);
        this.F = X(this, a)
    };
    _.O(rf, kz);
    rf.prototype.j = function () {
        var a = this.F.value, b = (0, C.K)(x(a, 1));
        this.o && (null == Je(a, 8) && (Ce(33, b), Ie(a, this.o)), null == x(a, 7) && (Ce(34, b), _.z(a, 7, Math.round(Date.now() / 1E3 / 60))));
        null != x(a, 3) || Ce(35, b);
        this.l.G(a)
    };
    var wf = function (a, b, c, d, e) {
        kz.call(this, 1050, e);
        this.L = c;
        this.F = d;
        this.l = W(this);
        this.o = X(this, a);
        this.O = Y(this, b)
    };
    _.O(wf, kz);
    wf.prototype.j = function () {
        var a = this.o.value, b = (0, C.K)(x(a, 1)), c = this.O.value;
        if (null == c) Ce(41, b), a.Aa(Pe(new Re, 111)); else if ("string" === typeof c) if (!c.length) Ce(20, b); else {
            if (c.length > (/^(\d+)$/.test(b) ? this.F : this.L)) {
                var d = {};
                Ce(12, b, null, (d.sl = String(c.length), d));
                b = a.Aa(Pe(new Re, 108));
                Le(b, 2)
            }
        } else Ce(21, b);
        this.l.G(a)
    };
    var of = function () {
        _.U.apply(this, arguments);
        this.j = []
    };
    _.O(of, _.U);
    var I = function (a, b) {
        _.Um(a, b);
        a.j.push(b)
    }, Af = function (a, b) {
        b = _.A(b);
        for (var c = b.next(); !c.done; c = b.next()) I(a, c.value)
    }, Bf = function (a) {
        a = _.A(a.j);
        for (var b = a.next(); !b.done; b = a.next()) b = b.value, _.H(Fw) ? (b.ha = !0, ez(b)) : b.start()
    };
    of.prototype.D = function () {
        _.U.prototype.D.call(this);
        this.j.length = 0
    };
    var lz = function (a, b, c, d) {
        kz.call(this, 1059, d);
        this.o = b;
        this.storage = c;
        this.l = W(this);
        this.F = X(this, a)
    };
    _.O(lz, kz);
    lz.prototype.j = function () {
        var a = this.F.value, b = a.id, c = a.collectorFunction, d;
        a = (0, C.K)(null != (d = a.networkCode) ? d : b);
        b = {};
        Ce(42, a, null, (b.ea = String(Number(this.o)), b));
        Xy(this.l, Cf(a, c, this.storage, this.C))
    };
    var mz = function (a, b) {
        kz.call(this, 1057, b);
        this.l = a;
        this.o = W(this);
        this.F = W(this)
    };
    _.O(mz, kz);
    mz.prototype.j = function () {
        if (this.l) if ("object" !== typeof this.l) Ce(46, "UNKNOWN_COLLECTOR_ID"), nz(this, "UNKNOWN_COLLECTOR_ID", 112); else {
            var a = this.l.id, b = this.l.networkCode;
            a && b && (delete this.l.id, Ce(47, a + ";" + b));
            a = null != b ? b : a;
            "string" !== typeof a ? (b = {}, Ce(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), nz(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (Ce(14, a), nz(this, a, 105)) : (D = Ge(nx), _.t(D, "includes")).call(D, a) ? (Ce(22, a), nz(this, a, 104)) : this.F.G(this.l)
        } else Ce(39, "UNKNOWN_COLLECTOR_ID"), nz(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var nz = function (a, b, c) {
        a.o.G(df(b).Aa(Pe(new Re, c)))
    };
    var Jf = function (a, b, c) {
        var d = void 0 === d ? document : d;
        this.storage = b;
        this.B = c;
        this.Y = d;
        this.J = [];
        this.D = [];
        this.m = [];
        this.j = 0;
        a = _.A(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    ba = Jf.prototype;
    ba.push = function (a) {
        a = new mz(a, this.kd);
        var b = new qf(a.o, this.storage, this.kd), c = new lz(a.F, this.B, this.storage, this.kd), d = new of;
        Af(d, [a, b, c]);
        Bf(d);
        a = c.l.promise;
        this.J.push(a);
        b = _.A(this.D);
        for (c = b.next(); !c.done; c = b.next()) a.then(c.value)
    };
    ba.addOnSignalResolveCallback = function (a) {
        this.D.push(a);
        for (var b = _.A(this.J), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    ba.addErrorHandler = function (a) {
        this.m.push(a)
    };
    ba.clearAllCache = function () {
        var a = this, b = this.Y.currentScript instanceof HTMLScriptElement ? this.Y.currentScript.src : "";
        if (1 === this.j) {
            var c = {};
            Ce(49, "", null, (c.url = b, c))
        } else c = String(Dh(null != b ? b : "")), (D = Ge(mx), _.t(D, "includes")).call(D, c) ? (c = {}, Ce(48, "", null, (c.url = b, c))) : (Ly(this.storage), this.j = 1, setTimeout(function () {
            a.j = 0
        }, 1E3 * _.Ee(lx)), c = {}, Ce(43, "", null, (c.url = b, c)))
    };
    ba.kd = function (a, b) {
        for (var c = _.A(this.m), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var Kf = function (a) {
        this.push = function (b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function (b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function (b) {
            a.addErrorHandler(b)
        };
        this.clearAllCache = function () {
            a.clearAllCache()
        }
    };
    var Pf = function (a, b) {
        kz.call(this, 1036, b);
        this.l = W(this);
        this.o = X(this, a)
    };
    _.O(Pf, kz);
    Pf.prototype.j = function () {
        var a = this.o.value;
        0 !== ff(a) && this.l.G(a)
    };
    var Qf = function (a, b, c) {
        kz.call(this, 1035, c);
        this.o = b;
        this.l = W(this);
        this.F = X(this, a)
    };
    _.O(Qf, kz);
    Qf.prototype.j = function () {
        var a = this, b = this.F.value, c = (0, C.K)(x(b, 1)), d = this.o.toString(), e = {};
        Ce(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        $a(f, this.o);
        var g = function () {
            var h = {};
            Ce(31, (0, C.K)(c), null, (h.url = d, h));
            a.l.G(b.Aa(Pe(new Re, 109)));
            _.Od(f, "error", g)
        };
        document.head.appendChild(f);
        _.hb(f, "error", g)
    };
    var Lf = function (a) {
        kz.call(this, 1046, a);
        this.A = gz(this)
    };
    _.O(Lf, kz);
    Lf.prototype.j = function () {
        var a = this;
        Se().then(function () {
            return a.A.notify()
        })
    };
    var Of = new v.Set;
    var oz = 0, pz = Gd(eg(mr("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Tf = function () {
        this.j = function () {
        }
    }, Xf = function (a, b) {
        a.j = ve(14, b, function () {
        })
    };
    var Ah = function (a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return (void 0 === c ? 0 : c) ? (new _.Oh(b.innerWidth, b.innerHeight)).round() : _.Xu(b || window).round()
        } catch (d) {
            return new _.Oh(-12245933, -12245933)
        }
    }, qz = function (a) {
        return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    }, Am = function (a, b) {
        b = void 0 === b ? _.q : b;
        a = a.scrollingElement || qz(a);
        return new _.Lh(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }, bi = function (a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var rz = function (a) {
        _.S.call(this, a)
    };
    _.O(rz, _.S);
    var sz = function (a, b) {
        this.j = a;
        this.D = void 0 === b ? !1 : b;
        this.m = 0
    }, uz = function (a, b) {
        if (0 === a.m) {
            if (tz(a, "__gads", b)) b = !0; else {
                var c = a.j;
                F(b, 5) && ne(c) && (new oe(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === pe("GoogleAdServingTest", b, a.j)) {
                    var d = a.j;
                    F(b, 5) && ne(d) && wy(new oe(d.document), "GoogleAdServingTest")
                }
                b = c
            }
            a.m = b ? 2 : 1
        }
        return 2 === a.m
    }, tz = function (a, b, c) {
        return c ? pe(b, c, a.j) : null
    }, vz = function (a, b, c, d) {
        if (d) {
            var e = x(c, 2) - Date.now() / 1E3;
            e = {Dd: a.D ? Math.max(e, 0) : e, path: x(c, 3), domain: x(c, 4), hg: !1};
            a = a.j;
            F(d, 5) && ne(a) && (new oe(a.document)).set(b, x(c, 1), e)
        }
    }, wz = function (a, b, c) {
        if (c && pe(b, c, a.j)) {
            var d = a.j.location.hostname;
            if ("localhost" === d) d = ["localhost"]; else if (d = d.split("."), 2 > d.length) d = []; else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.A(d);
            for (e = d.next(); !e.done; e = d.next()) f = a.j, F(c, 5) && ne(f) && wy(new oe(f.document), b, "/", e.value)
        }
    };
    var xz = {}, yz = (xz[3] = Gd(eg(mr("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), xz);
    ({})[3] = Gd(eg(mr("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var zz = function (a) {
        this.j = a;
        this.m = Nu()
    }, Az = function (a) {
        var b = {};
        _.sr(a, function (c) {
            b[c.j] = c.m
        });
        return b
    };
    var Bz = P(["https://adservice.google.com/adsid/integrator.", ""]),
        Cz = P(["https://adservice.google.ad/adsid/integrator.", ""]),
        Dz = P(["https://adservice.google.ae/adsid/integrator.", ""]),
        Ez = P(["https://adservice.google.com.af/adsid/integrator.", ""]),
        Fz = P(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        Gz = P(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        Hz = P(["https://adservice.google.al/adsid/integrator.", ""]),
        Iz = P(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        Jz = P(["https://adservice.google.com.ar/adsid/integrator.", ""]),
        Kz = P(["https://adservice.google.as/adsid/integrator.", ""]),
        Lz = P(["https://adservice.google.at/adsid/integrator.", ""]),
        Mz = P(["https://adservice.google.com.au/adsid/integrator.", ""]),
        Nz = P(["https://adservice.google.az/adsid/integrator.", ""]),
        Oz = P(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        Pz = P(["https://adservice.google.be/adsid/integrator.", ""]),
        Qz = P(["https://adservice.google.bf/adsid/integrator.", ""]),
        Rz = P(["https://adservice.google.bg/adsid/integrator.", ""]),
        Sz = P(["https://adservice.google.com.bh/adsid/integrator.", ""]),
        Tz = P(["https://adservice.google.bi/adsid/integrator.", ""]),
        Uz = P(["https://adservice.google.bj/adsid/integrator.", ""]),
        Vz = P(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        Wz = P(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        Xz = P(["https://adservice.google.com.br/adsid/integrator.", ""]),
        Yz = P(["https://adservice.google.bs/adsid/integrator.", ""]),
        Zz = P(["https://adservice.google.bt/adsid/integrator.", ""]),
        $z = P(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        aA = P(["https://adservice.google.com.bz/adsid/integrator.", ""]),
        bA = P(["https://adservice.google.ca/adsid/integrator.", ""]),
        cA = P(["https://adservice.google.cd/adsid/integrator.", ""]),
        dA = P(["https://adservice.google.cf/adsid/integrator.", ""]),
        eA = P(["https://adservice.google.cg/adsid/integrator.", ""]),
        fA = P(["https://adservice.google.ch/adsid/integrator.", ""]),
        gA = P(["https://adservice.google.ci/adsid/integrator.", ""]),
        hA = P(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        iA = P(["https://adservice.google.cl/adsid/integrator.", ""]),
        jA = P(["https://adservice.google.cm/adsid/integrator.", ""]),
        kA = P(["https://adservice.google.com.co/adsid/integrator.", ""]),
        lA = P(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        mA = P(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        nA = P(["https://adservice.google.cv/adsid/integrator.", ""]),
        oA = P(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        pA = P(["https://adservice.google.cz/adsid/integrator.", ""]),
        qA = P(["https://adservice.google.de/adsid/integrator.", ""]),
        rA = P(["https://adservice.google.dj/adsid/integrator.", ""]),
        sA = P(["https://adservice.google.dk/adsid/integrator.", ""]),
        tA = P(["https://adservice.google.dm/adsid/integrator.", ""]),
        uA = P(["https://adservice.google.dz/adsid/integrator.", ""]),
        vA = P(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        wA = P(["https://adservice.google.ee/adsid/integrator.", ""]),
        xA = P(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        yA = P(["https://adservice.google.es/adsid/integrator.", ""]),
        zA = P(["https://adservice.google.com.et/adsid/integrator.", ""]),
        AA = P(["https://adservice.google.fi/adsid/integrator.", ""]),
        BA = P(["https://adservice.google.com.fj/adsid/integrator.", ""]),
        CA = P(["https://adservice.google.fm/adsid/integrator.", ""]),
        DA = P(["https://adservice.google.fr/adsid/integrator.", ""]),
        EA = P(["https://adservice.google.ga/adsid/integrator.", ""]),
        FA = P(["https://adservice.google.ge/adsid/integrator.", ""]),
        GA = P(["https://adservice.google.gg/adsid/integrator.", ""]),
        HA = P(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        IA = P(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        JA = P(["https://adservice.google.gl/adsid/integrator.", ""]),
        KA = P(["https://adservice.google.gm/adsid/integrator.", ""]),
        LA = P(["https://adservice.google.gr/adsid/integrator.", ""]),
        MA = P(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        NA = P(["https://adservice.google.gy/adsid/integrator.", ""]),
        OA = P(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        PA = P(["https://adservice.google.hn/adsid/integrator.", ""]),
        QA = P(["https://adservice.google.hr/adsid/integrator.", ""]),
        RA = P(["https://adservice.google.ht/adsid/integrator.", ""]),
        SA = P(["https://adservice.google.hu/adsid/integrator.", ""]),
        TA = P(["https://adservice.google.co.id/adsid/integrator.", ""]),
        UA = P(["https://adservice.google.ie/adsid/integrator.", ""]),
        VA = P(["https://adservice.google.co.il/adsid/integrator.", ""]),
        WA = P(["https://adservice.google.im/adsid/integrator.", ""]),
        XA = P(["https://adservice.google.co.in/adsid/integrator.", ""]),
        YA = P(["https://adservice.google.iq/adsid/integrator.", ""]),
        ZA = P(["https://adservice.google.is/adsid/integrator.", ""]),
        $A = P(["https://adservice.google.it/adsid/integrator.", ""]),
        aB = P(["https://adservice.google.je/adsid/integrator.", ""]),
        bB = P(["https://adservice.google.com.jm/adsid/integrator.", ""]),
        cB = P(["https://adservice.google.jo/adsid/integrator.", ""]),
        dB = P(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        eB = P(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        fB = P(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        gB = P(["https://adservice.google.ki/adsid/integrator.", ""]),
        hB = P(["https://adservice.google.kg/adsid/integrator.", ""]),
        iB = P(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        jB = P(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        kB = P(["https://adservice.google.kz/adsid/integrator.", ""]),
        lB = P(["https://adservice.google.la/adsid/integrator.", ""]),
        mB = P(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        nB = P(["https://adservice.google.li/adsid/integrator.", ""]),
        oB = P(["https://adservice.google.lk/adsid/integrator.", ""]),
        pB = P(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        qB = P(["https://adservice.google.lt/adsid/integrator.", ""]),
        rB = P(["https://adservice.google.lu/adsid/integrator.", ""]),
        sB = P(["https://adservice.google.lv/adsid/integrator.", ""]),
        tB = P(["https://adservice.google.com.ly/adsid/integrator.", ""]),
        uB = P(["https://adservice.google.md/adsid/integrator.", ""]),
        vB = P(["https://adservice.google.me/adsid/integrator.", ""]),
        wB = P(["https://adservice.google.mg/adsid/integrator.", ""]),
        xB = P(["https://adservice.google.mk/adsid/integrator.", ""]),
        yB = P(["https://adservice.google.ml/adsid/integrator.", ""]),
        zB = P(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        AB = P(["https://adservice.google.mn/adsid/integrator.", ""]),
        BB = P(["https://adservice.google.ms/adsid/integrator.", ""]),
        CB = P(["https://adservice.google.com.mt/adsid/integrator.", ""]),
        DB = P(["https://adservice.google.mu/adsid/integrator.", ""]),
        EB = P(["https://adservice.google.mv/adsid/integrator.", ""]),
        FB = P(["https://adservice.google.mw/adsid/integrator.", ""]),
        GB = P(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        HB = P(["https://adservice.google.com.my/adsid/integrator.", ""]),
        IB = P(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        JB = P(["https://adservice.google.com.na/adsid/integrator.", ""]),
        KB = P(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        LB = P(["https://adservice.google.com.ni/adsid/integrator.", ""]),
        MB = P(["https://adservice.google.ne/adsid/integrator.", ""]),
        NB = P(["https://adservice.google.nl/adsid/integrator.", ""]),
        OB = P(["https://adservice.google.no/adsid/integrator.", ""]),
        PB = P(["https://adservice.google.com.np/adsid/integrator.", ""]),
        QB = P(["https://adservice.google.nr/adsid/integrator.", ""]),
        RB = P(["https://adservice.google.nu/adsid/integrator.", ""]),
        SB = P(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        TB = P(["https://adservice.google.com.om/adsid/integrator.", ""]),
        UB = P(["https://adservice.google.com.pa/adsid/integrator.", ""]),
        VB = P(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        WB = P(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        XB = P(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        YB = P(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        ZB = P(["https://adservice.google.pl/adsid/integrator.", ""]),
        $B = P(["https://adservice.google.pn/adsid/integrator.", ""]),
        aC = P(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        bC = P(["https://adservice.google.ps/adsid/integrator.", ""]),
        cC = P(["https://adservice.google.pt/adsid/integrator.", ""]),
        dC = P(["https://adservice.google.com.py/adsid/integrator.", ""]),
        eC = P(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        fC = P(["https://adservice.google.ro/adsid/integrator.", ""]),
        gC = P(["https://adservice.google.rw/adsid/integrator.", ""]),
        hC = P(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        iC = P(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        jC = P(["https://adservice.google.sc/adsid/integrator.", ""]),
        kC = P(["https://adservice.google.se/adsid/integrator.", ""]),
        lC = P(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        mC = P(["https://adservice.google.sh/adsid/integrator.", ""]),
        nC = P(["https://adservice.google.si/adsid/integrator.", ""]),
        oC = P(["https://adservice.google.sk/adsid/integrator.", ""]),
        pC = P(["https://adservice.google.sn/adsid/integrator.", ""]),
        qC = P(["https://adservice.google.so/adsid/integrator.", ""]),
        rC = P(["https://adservice.google.sm/adsid/integrator.", ""]),
        sC = P(["https://adservice.google.sr/adsid/integrator.", ""]),
        tC = P(["https://adservice.google.st/adsid/integrator.", ""]),
        vC = P(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        wC = P(["https://adservice.google.td/adsid/integrator.", ""]),
        xC = P(["https://adservice.google.tg/adsid/integrator.", ""]),
        yC = P(["https://adservice.google.co.th/adsid/integrator.", ""]),
        zC = P(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        AC = P(["https://adservice.google.tl/adsid/integrator.", ""]),
        BC = P(["https://adservice.google.tm/adsid/integrator.", ""]),
        CC = P(["https://adservice.google.tn/adsid/integrator.", ""]),
        DC = P(["https://adservice.google.to/adsid/integrator.", ""]),
        EC = P(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        FC = P(["https://adservice.google.tt/adsid/integrator.", ""]),
        GC = P(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        HC = P(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        IC = P(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        JC = P(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        KC = P(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        LC = P(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        MC = P(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        NC = P(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        OC = P(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        PC = P(["https://adservice.google.vg/adsid/integrator.", ""]),
        QC = P(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        RC = P(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        SC = P(["https://adservice.google.vu/adsid/integrator.", ""]),
        TC = P(["https://adservice.google.ws/adsid/integrator.", ""]),
        UC = P(["https://adservice.google.rs/adsid/integrator.", ""]),
        VC = P(["https://adservice.google.co.za/adsid/integrator.", ""]),
        WC = P(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        XC = P(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        YC = P(["https://adservice.google.cat/adsid/integrator.", ""]), ZC = new v.Map([[".google.com", function (a) {
            return B(Bz, a)
        }], [".google.ad", function (a) {
            return B(Cz, a)
        }], [".google.ae", function (a) {
            return B(Dz, a)
        }], [".google.com.af", function (a) {
            return B(Ez, a)
        }], [".google.com.ag", function (a) {
            return B(Fz, a)
        }], [".google.com.ai", function (a) {
            return B(Gz, a)
        }], [".google.al", function (a) {
            return B(Hz, a)
        }], [".google.co.ao", function (a) {
            return B(Iz, a)
        }], [".google.com.ar", function (a) {
            return B(Jz, a)
        }], [".google.as", function (a) {
            return B(Kz, a)
        }], [".google.at", function (a) {
            return B(Lz, a)
        }], [".google.com.au", function (a) {
            return B(Mz, a)
        }], [".google.az", function (a) {
            return B(Nz, a)
        }], [".google.com.bd", function (a) {
            return B(Oz, a)
        }], [".google.be", function (a) {
            return B(Pz, a)
        }], [".google.bf", function (a) {
            return B(Qz, a)
        }], [".google.bg", function (a) {
            return B(Rz, a)
        }], [".google.com.bh", function (a) {
            return B(Sz, a)
        }], [".google.bi", function (a) {
            return B(Tz, a)
        }], [".google.bj", function (a) {
            return B(Uz, a)
        }], [".google.com.bn", function (a) {
            return B(Vz, a)
        }], [".google.com.bo", function (a) {
            return B(Wz, a)
        }], [".google.com.br", function (a) {
            return B(Xz, a)
        }], [".google.bs", function (a) {
            return B(Yz, a)
        }], [".google.bt", function (a) {
            return B(Zz, a)
        }], [".google.co.bw", function (a) {
            return B($z, a)
        }], [".google.com.bz", function (a) {
            return B(aA, a)
        }], [".google.ca", function (a) {
            return B(bA, a)
        }], [".google.cd", function (a) {
            return B(cA, a)
        }], [".google.cf", function (a) {
            return B(dA, a)
        }], [".google.cg", function (a) {
            return B(eA, a)
        }], [".google.ch", function (a) {
            return B(fA, a)
        }], [".google.ci", function (a) {
            return B(gA, a)
        }], [".google.co.ck", function (a) {
            return B(hA, a)
        }], [".google.cl", function (a) {
            return B(iA, a)
        }], [".google.cm", function (a) {
            return B(jA, a)
        }], [".google.com.co", function (a) {
            return B(kA, a)
        }], [".google.co.cr", function (a) {
            return B(lA, a)
        }], [".google.com.cu", function (a) {
            return B(mA, a)
        }], [".google.cv", function (a) {
            return B(nA, a)
        }], [".google.com.cy", function (a) {
            return B(oA, a)
        }], [".google.cz", function (a) {
            return B(pA, a)
        }], [".google.de", function (a) {
            return B(qA, a)
        }], [".google.dj", function (a) {
            return B(rA, a)
        }], [".google.dk", function (a) {
            return B(sA, a)
        }], [".google.dm", function (a) {
            return B(tA, a)
        }], [".google.dz", function (a) {
            return B(uA, a)
        }], [".google.com.ec", function (a) {
            return B(vA, a)
        }], [".google.ee", function (a) {
            return B(wA, a)
        }], [".google.com.eg", function (a) {
            return B(xA, a)
        }], [".google.es", function (a) {
            return B(yA, a)
        }], [".google.com.et", function (a) {
            return B(zA, a)
        }], [".google.fi", function (a) {
            return B(AA, a)
        }], [".google.com.fj", function (a) {
            return B(BA, a)
        }], [".google.fm", function (a) {
            return B(CA, a)
        }], [".google.fr", function (a) {
            return B(DA, a)
        }], [".google.ga", function (a) {
            return B(EA, a)
        }], [".google.ge", function (a) {
            return B(FA, a)
        }], [".google.gg", function (a) {
            return B(GA, a)
        }], [".google.com.gh", function (a) {
            return B(HA, a)
        }], [".google.com.gi", function (a) {
            return B(IA, a)
        }], [".google.gl", function (a) {
            return B(JA, a)
        }], [".google.gm", function (a) {
            return B(KA, a)
        }], [".google.gr", function (a) {
            return B(LA, a)
        }], [".google.com.gt", function (a) {
            return B(MA, a)
        }], [".google.gy", function (a) {
            return B(NA, a)
        }], [".google.com.hk", function (a) {
            return B(OA, a)
        }], [".google.hn", function (a) {
            return B(PA, a)
        }], [".google.hr", function (a) {
            return B(QA, a)
        }], [".google.ht", function (a) {
            return B(RA, a)
        }], [".google.hu", function (a) {
            return B(SA, a)
        }], [".google.co.id", function (a) {
            return B(TA, a)
        }], [".google.ie", function (a) {
            return B(UA, a)
        }], [".google.co.il", function (a) {
            return B(VA, a)
        }], [".google.im", function (a) {
            return B(WA, a)
        }], [".google.co.in", function (a) {
            return B(XA, a)
        }], [".google.iq", function (a) {
            return B(YA, a)
        }], [".google.is", function (a) {
            return B(ZA, a)
        }], [".google.it", function (a) {
            return B($A, a)
        }], [".google.je", function (a) {
            return B(aB, a)
        }], [".google.com.jm", function (a) {
            return B(bB, a)
        }], [".google.jo", function (a) {
            return B(cB, a)
        }], [".google.co.jp", function (a) {
            return B(dB, a)
        }], [".google.co.ke", function (a) {
            return B(eB, a)
        }], [".google.com.kh", function (a) {
            return B(fB, a)
        }], [".google.ki", function (a) {
            return B(gB, a)
        }], [".google.kg", function (a) {
            return B(hB, a)
        }], [".google.co.kr", function (a) {
            return B(iB, a)
        }], [".google.com.kw", function (a) {
            return B(jB, a)
        }], [".google.kz", function (a) {
            return B(kB, a)
        }], [".google.la", function (a) {
            return B(lB, a)
        }], [".google.com.lb", function (a) {
            return B(mB, a)
        }], [".google.li", function (a) {
            return B(nB, a)
        }], [".google.lk", function (a) {
            return B(oB, a)
        }], [".google.co.ls", function (a) {
            return B(pB, a)
        }], [".google.lt", function (a) {
            return B(qB, a)
        }], [".google.lu", function (a) {
            return B(rB, a)
        }], [".google.lv", function (a) {
            return B(sB, a)
        }], [".google.com.ly", function (a) {
            return B(tB, a)
        }], [".google.md", function (a) {
            return B(uB, a)
        }], [".google.me", function (a) {
            return B(vB, a)
        }], [".google.mg", function (a) {
            return B(wB, a)
        }], [".google.mk", function (a) {
            return B(xB, a)
        }], [".google.ml", function (a) {
            return B(yB, a)
        }], [".google.com.mm", function (a) {
            return B(zB, a)
        }], [".google.mn", function (a) {
            return B(AB, a)
        }], [".google.ms", function (a) {
            return B(BB, a)
        }], [".google.com.mt", function (a) {
            return B(CB, a)
        }], [".google.mu", function (a) {
            return B(DB, a)
        }], [".google.mv", function (a) {
            return B(EB, a)
        }], [".google.mw", function (a) {
            return B(FB, a)
        }], [".google.com.mx", function (a) {
            return B(GB, a)
        }], [".google.com.my", function (a) {
            return B(HB, a)
        }], [".google.co.mz", function (a) {
            return B(IB, a)
        }], [".google.com.na", function (a) {
            return B(JB, a)
        }], [".google.com.ng", function (a) {
            return B(KB, a)
        }], [".google.com.ni", function (a) {
            return B(LB, a)
        }], [".google.ne", function (a) {
            return B(MB, a)
        }], [".google.nl", function (a) {
            return B(NB, a)
        }], [".google.no", function (a) {
            return B(OB, a)
        }], [".google.com.np", function (a) {
            return B(PB, a)
        }], [".google.nr", function (a) {
            return B(QB, a)
        }], [".google.nu", function (a) {
            return B(RB, a)
        }], [".google.co.nz", function (a) {
            return B(SB, a)
        }], [".google.com.om", function (a) {
            return B(TB, a)
        }], [".google.com.pa", function (a) {
            return B(UB, a)
        }], [".google.com.pe", function (a) {
            return B(VB, a)
        }], [".google.com.pg", function (a) {
            return B(WB, a)
        }], [".google.com.ph", function (a) {
            return B(XB, a)
        }], [".google.com.pk", function (a) {
            return B(YB, a)
        }], [".google.pl", function (a) {
            return B(ZB, a)
        }], [".google.pn", function (a) {
            return B($B, a)
        }], [".google.com.pr", function (a) {
            return B(aC, a)
        }], [".google.ps", function (a) {
            return B(bC, a)
        }], [".google.pt", function (a) {
            return B(cC, a)
        }], [".google.com.py", function (a) {
            return B(dC, a)
        }], [".google.com.qa", function (a) {
            return B(eC, a)
        }], [".google.ro", function (a) {
            return B(fC, a)
        }], [".google.rw", function (a) {
            return B(gC, a)
        }], [".google.com.sa", function (a) {
            return B(hC, a)
        }], [".google.com.sb", function (a) {
            return B(iC, a)
        }], [".google.sc", function (a) {
            return B(jC, a)
        }], [".google.se", function (a) {
            return B(kC, a)
        }], [".google.com.sg", function (a) {
            return B(lC, a)
        }], [".google.sh", function (a) {
            return B(mC, a)
        }], [".google.si", function (a) {
            return B(nC, a)
        }], [".google.sk", function (a) {
            return B(oC, a)
        }], [".google.sn", function (a) {
            return B(pC, a)
        }], [".google.so", function (a) {
            return B(qC, a)
        }], [".google.sm", function (a) {
            return B(rC, a)
        }], [".google.sr", function (a) {
            return B(sC, a)
        }], [".google.st", function (a) {
            return B(tC, a)
        }], [".google.com.sv", function (a) {
            return B(vC, a)
        }], [".google.td", function (a) {
            return B(wC, a)
        }], [".google.tg", function (a) {
            return B(xC, a)
        }], [".google.co.th", function (a) {
            return B(yC, a)
        }], [".google.com.tj", function (a) {
            return B(zC, a)
        }], [".google.tl", function (a) {
            return B(AC, a)
        }], [".google.tm", function (a) {
            return B(BC, a)
        }], [".google.tn", function (a) {
            return B(CC, a)
        }], [".google.to", function (a) {
            return B(DC, a)
        }], [".google.com.tr", function (a) {
            return B(EC, a)
        }], [".google.tt", function (a) {
            return B(FC, a)
        }], [".google.com.tw", function (a) {
            return B(GC, a)
        }], [".google.co.tz", function (a) {
            return B(HC, a)
        }], [".google.com.ua", function (a) {
            return B(IC, a)
        }], [".google.co.ug", function (a) {
            return B(JC, a)
        }], [".google.co.uk", function (a) {
            return B(KC, a)
        }], [".google.com.uy", function (a) {
            return B(LC, a)
        }], [".google.co.uz", function (a) {
            return B(MC, a)
        }], [".google.com.vc", function (a) {
            return B(NC, a)
        }], [".google.co.ve", function (a) {
            return B(OC, a)
        }], [".google.vg", function (a) {
            return B(PC, a)
        }], [".google.co.vi", function (a) {
            return B(QC, a)
        }], [".google.com.vn", function (a) {
            return B(RC, a)
        }], [".google.vu", function (a) {
            return B(SC, a)
        }], [".google.ws", function (a) {
            return B(TC, a)
        }], [".google.rs", function (a) {
            return B(UC, a)
        }], [".google.co.za", function (a) {
            return B(VC, a)
        }], [".google.co.zm", function (a) {
            return B(WC, a)
        }], [".google.co.zw", function (a) {
            return B(XC, a)
        }], [".google.cat", function (a) {
            return B(YC, a)
        }]].map(function (a) {
            var b = _.A(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));
    var $C = function (a, b, c) {
        var d = _.Nd("LINK", a);
        try {
            d.rel = "preload";
            if (b instanceof gg) var e = Za(b).toString(); else {
                if (b instanceof Ra) var f = Sa(b); else {
                    if (b instanceof Ra) var g = b; else {
                        b = "object" == typeof b && b.Ua ? b.La() : String(b);
                        b:{
                            var h = b;
                            if (Jr) {
                                try {
                                    var k = new URL(h)
                                } catch (p) {
                                    var l = "https:";
                                    break b
                                }
                                l = k.protocol
                            } else c:{
                                var n = document.createElement("a");
                                try {
                                    n.href = h
                                } catch (p) {
                                    l = void 0;
                                    break c
                                }
                                var m = n.protocol;
                                l = ":" === m || "" === m ? "https:" : m
                            }
                        }
                        "javascript:" === l && (b = "about:invalid#zClosurez");
                        g = _.fb(b)
                    }
                    f = Sa(g)
                }
                e = f
            }
            d.href = e
        } catch (p) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (p) {
        }
    };
    var $f = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var rg = _.q, aD = function (a) {
        var b = new v.Map([["domain", _.q.location.hostname]]);
        sg[3] >= qe() && b.set("adsid", sg[1]);
        return Hd(ZC.get(a).js, b)
    }, sg, bD, qg = function () {
        rg = _.q;
        sg = rg.googleToken = rg.googleToken || {};
        var a = qe();
        sg[1] && sg[3] > a && 0 < sg[2] || (sg[1] = "", sg[2] = -1, sg[3] = -1, sg[4] = "", sg[6] = "");
        bD = rg.googleIMState = rg.googleIMState || {};
        ZC.has(bD[1]) || (bD[1] = ".google.com");
        Array.isArray(bD[5]) || (bD[5] = []);
        "boolean" !== typeof bD[6] && (bD[6] = !1);
        Array.isArray(bD[7]) || (bD[7] = []);
        "number" !== typeof bD[8] && (bD[8] = 0)
    }, cD = function (a) {
        qg();
        ZC.has(a) && (bD[1] = a)
    }, tg = {
        ud: function () {
            return 0 < bD[8]
        }, Zf: function () {
            bD[8]++
        }, bg: function () {
            0 < bD[8] && bD[8]--
        }, cg: function () {
            bD[8] = 0
        }, Yh: function () {
            return !1
        }, Mc: function () {
            return bD[5]
        }, Ud: function (a) {
            try {
                a()
            } catch (b) {
                _.q.setTimeout(function () {
                    throw b;
                }, 0)
            }
        }, ue: function () {
            if (!tg.ud()) {
                var a = _.q.document, b = function (e) {
                    e = aD(e);
                    a:{
                        try {
                            var f = Lu();
                            break a
                        } catch (g) {
                        }
                        f = void 0
                    }
                    $C(a, e.toString(), f);
                    f = _.Nd("SCRIPT", a);
                    f.type = "text/javascript";
                    f.onerror = function () {
                        return _.q.processGoogleToken({}, 2)
                    };
                    $a(f, e);
                    try {
                        (a.head || a.body || a.documentElement).appendChild(f), tg.Zf()
                    } catch (g) {
                    }
                }, c = bD[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                _.q.setTimeout(function () {
                    return _.q.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    }, dD = function (a) {
        _.q.processGoogleToken = _.q.processGoogleToken || function (b, c) {
            var d = b;
            d = void 0 === d ? {} : d;
            c = void 0 === c ? 0 : c;
            b = d.newToken || "";
            var e = "NT" == b, f = parseInt(d.freshLifetimeSecs || "", 10), g = parseInt(d.validLifetimeSecs || "", 10),
                h = d["1p_jar"] || "";
            d = d.pucrd || "";
            qg();
            1 == c ? tg.cg() : tg.bg();
            var k = rg.googleToken = rg.googleToken || {},
                l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
            e = e && !tg.ud() && (!(sg[3] >= qe()) || "NT" == sg[1]);
            var n = !(sg[3] >= qe()) && 0 != c;
            if (l || e || n) e = qe(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.Gx(_.q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, qg();
            if (l || !tg.ud()) {
                c = tg.Mc();
                for (b = 0; b < c.length; b++) tg.Ud(c[b]);
                c.length = 0
            }
        };
        ug(a)
    };
    var Xo = function (a, b) {
        b = void 0 === b ? {} : b;
        this.root = b.root ? b.root : null;
        this.H = b.rootMargin ? vg(b.rootMargin) : [{value: 0, type: "px"}, {value: 0, type: "px"}, {
            value: 0,
            type: "px"
        }, {value: 0, type: "px"}];
        this.rootMargin = _.Mc(this.H, function (c) {
            return "" + c.value + c.type
        }).join(" ");
        this.o = xg(b.threshold);
        this.M = a;
        this.j = [];
        this.J = [];
        this.B = !1;
        this.m = null;
        this.D = qr(this.l, 100, this)
    }, eD = function (a) {
        if (a.root) var b = yg(a.root); else {
            var c = _.Xu(window);
            b = {top: 0, right: c.width, bottom: c.height, left: 0, width: c.width, height: c.height}
        }
        a = _.Mc(a.H, function (d, e) {
            return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
        });
        return {
            top: b.top - a[0],
            right: b.right + a[1],
            bottom: b.bottom + a[2],
            left: b.left - a[3],
            width: b.width + a[1] + a[3],
            height: b.height + a[0] + a[2]
        }
    }, fD = function (a, b, c) {
        if (!b || b.isIntersecting != c.isIntersecting) return !0;
        var d = b.intersectionRatio, e = c.intersectionRatio;
        return d == e ? !1 : _.Og(a.o, function (f) {
            return f < d != f < e
        })
    };
    Xo.prototype.l = function () {
        var a = this, b = eD(this);
        _.sr(this.j, function (c) {
            var d = c.target, e = yg(d), f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right), k = Math.min(b.bottom, e.bottom), l = Math.max(b.left, e.left),
                n = h - l, m = k - g;
            g = 0 <= n && 0 <= m ? {top: g, right: h, bottom: k, left: l, width: n, height: m} : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0},
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            fD(a, c.pa, d) && a.J.push(d);
            c.pa = d
        });
        this.J.length && this.M(gD(this), this)
    };
    Xo.prototype.observe = function (a) {
        _.Og(this.j, function (b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            pa: null
        }), this.l(), this.B || (this.B = !0, _.hb(_.q, "scroll", this.D), _.hb(_.q, "resize", this.D), _.q.MutationObserver && !this.m && (this.m = new MutationObserver(this.D), this.m.observe(_.q.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    Xo.prototype.unobserve = function (a) {
        this.j = _.wg(this.j, function (b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    Xo.prototype.disconnect = function () {
        this.B = !1;
        this.j.length = 0;
        _.Od(_.q, "scroll", this.D);
        _.Od(_.q, "resize", this.D);
        this.m && (this.m.disconnect(), this.m = null)
    };
    var gD = function (a) {
        var b = [].concat(_.Jd(a.J));
        a.J.length = 0;
        return b
    };
    var hD = function (a, b, c, d, e, f) {
        _.U.call(this);
        this.Ka = a;
        this.status = 1;
        this.B = b;
        this.m = c;
        this.T = d;
        this.kc = !!e;
        this.l = Math.random();
        this.H = {};
        this.j = null;
        this.o = (0, _.hr)(this.F, this);
        this.M = f
    };
    _.O(hD, _.U);
    hD.prototype.F = function (a) {
        if (!("*" !== this.m && a.origin !== this.m || !this.kc && a.source != this.B)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {
            }
            if (_.ka(b) && (a = b.i, b.c === this.Ka && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, iD(this), this.j && (this.j(), this.j = null)
                } catch (c) {
                }
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ka(b)) && this.H.hasOwnProperty(a)) this.H[a](b)
            }
        }
    };
    var iD = function (a) {
        var b = {};
        b.c = a.Ka;
        b.i = a.l;
        a.M && (b.e = a.M);
        a.B.postMessage(JSON.stringify(b), a.m)
    };
    hD.prototype.C = function () {
        if (1 === this.status) {
            try {
                this.B.postMessage && iD(this)
            } catch (a) {
            }
            window.setTimeout((0, _.hr)(this.C, this), 50)
        }
    };
    hD.prototype.connect = function (a) {
        a && (this.j = a);
        _.hb(window, "message", this.o);
        this.T && this.C()
    };
    var jD = function (a, b, c) {
        a.H[b] = c
    }, kD = function (a, b, c) {
        var d = {};
        d.c = a.Ka;
        d.i = a.l;
        d.s = b;
        d.p = c;
        try {
            a.B.postMessage(JSON.stringify(d), a.m)
        } catch (e) {
        }
    };
    hD.prototype.D = function () {
        this.status = 3;
        _.Od(window, "message", this.o);
        _.U.prototype.D.call(this)
    };
    var lD = new v.Map([["navigate", 1], ["reload", 2], ["back_forward", 3], ["prerender", 4]]),
        mD = new v.Map([[0, 1], [1, 2], [2, 3]]);
    var nD = function (a) {
        _.S.call(this, a)
    };
    _.O(nD, _.S);
    var oD = yd(nD);
    var pD = function (a) {
        _.S.call(this, a)
    };
    _.O(pD, _.S);
    var qD = function (a) {
        _.S.call(this, a)
    };
    _.O(qD, _.S);
    var rD = function (a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }, sD = function (a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }, tD = function (a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    }, uD = function (a, b) {
        if (3 == rD(b)) return !1;
        a();
        return !0
    }, vD = function (a, b) {
        if (!uD(a, b)) {
            var c = !1, d = sD(b), e = function () {
                !c && uD(a, b) && (c = !0, _.Od(b, d, e))
            };
            d && _.hb(b, d, e)
        }
    };
    var Ao = function (a, b) {
        this.j = a;
        this.D = b;
        this.m = {}
    }, Bo = function (a) {
        vo() && (document.addEventListener("touchstart", function (b) {
            a.j(902, function () {
                a.m[b.touches[0].identifier] = Date.now()
            })()
        }, rr), document.addEventListener("touchend", function (b) {
            a.j(902, function () {
                var c = b.changedTouches[0], d = c.clientX, e = c.clientY, f = c.force;
                c = a.m[c.identifier];
                if (void 0 !== c) try {
                    var g = vo(), h = {x: d, y: e, duration_ms: Date.now() - c};
                    if (null == g ? 0 : g.gmaSdk) g.gmaSdk.reportTouchEvent(JSON.stringify(_.t(Object, "assign").call(Object, {}, h, {
                        type: 1,
                        force: f
                    }))); else {
                        var k, l, n;
                        null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (n = l.reportGmaTouchEvent) || n.postMessage(h)
                    }
                } catch (m) {
                    a.D("paw_sigs", {msg: "reportTouchError", err: m instanceof Error ? m.message : "nonError"})
                }
            })()
        }, rr))
    }, wo = function (a, b, c, d, e) {
        var f = 200, g = oo;
        b = void 0 === b ? {} : b;
        c = void 0 === c ? function () {
        } : c;
        d = void 0 === d ? function () {
        } : d;
        f = void 0 === f ? 200 : f;
        var h = String(Math.floor(2147483647 * fe())), k = 0, l = function (n) {
            try {
                var m = "object" === typeof n.data ? n.data : JSON.parse(n.data);
                h === m.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), m.signal ? c(m.signal) : m.error && d(m.error))
            } catch (p) {
                g("paw_sigs", {
                    msg: "postmessageError",
                    err: p instanceof Error ? p.message : "nonError",
                    data: null == n.data ? "null" : 500 < n.data.length ? n.data.substring(0, 500) : n.data
                })
            }
        };
        window.addEventListener("message", function (n) {
            e(903, function () {
                l(n)
            })()
        });
        a.postMessage(_.t(Object, "assign").call(Object, {}, {paw_id: h}, b));
        k = window.setTimeout(function () {
            window.removeEventListener("message", l);
            d("PAW GMA postmessage timed out.")
        }, f)
    }, vo = function () {
        var a = window, b, c;
        if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
        try {
            var d = window.parent, e, f;
            if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
        } catch (g) {
        }
        return null
    };
    var xD = function (a) {
        _.S.call(this, a, -1, wD)
    };
    _.O(xD, _.S);
    var wD = [1], yD = [xD, 1, Ws, Qt];
    var AD = function (a) {
        _.S.call(this, a, -1, zD)
    };
    _.O(AD, _.S);
    var zD = [1, 2];
    AD.prototype.D = xd([AD, 1, Ws, Qt, 2, Ws, yD]);
    var CD, BD;
    CD = function () {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new BD;
        this.sideRailProcessedFixedElements = new v.Set;
        this.sideRailAvailableSpace = new v.Map
    };
    _.cm = function (a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new v.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new v.Map)) : a.google_reactive_ads_global_state = new CD;
        return a.google_reactive_ads_global_state
    };
    BD = function () {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var FD;
    _.DD = function (a) {
        this.j = _.cm(a).floatingAdsStacking
    };
    _.ED = function (a) {
        a = _.hv(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    FD = function (a) {
        var b = _.ED(a);
        _.sr(a.j.maxZIndexListeners, function (c) {
            return c(b)
        })
    };
    _.GD = function (a) {
        this.m = a;
        this.j = null
    };
    _.HD = function (a) {
        if (null == a.j) {
            var b = a.m, c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483646;
            FD(b);
            a.j = c
        }
    };
    _.ID = function (a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            FD(b);
            a.j = null
        }
    };
    var dm, Rl, Ul;
    dm = 728 * 1.38;
    _.fm = function (a) {
        return a.innerHeight >= a.innerWidth
    };
    _.JD = function (a) {
        var b = _.Tl(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Rl = function (a, b) {
        return (a = _.Tl(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Ul = function (a) {
        return (a = _.JD(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Tl = function (a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.KD = function (a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var gm = 90 * 1.38;
    var LD;
    _.MD = function (a, b) {
        if (!a.body) return null;
        var c = new LD;
        c.apply(a, b);
        return function () {
            _.Kv(a.body, {filter: c.j, webkitFilter: c.j, overflow: c.D, position: c.J, top: c.B});
            b.scrollTo(0, c.m)
        }
    };
    LD = function () {
        this.j = this.B = this.J = this.D = null;
        this.m = 0
    };
    LD.prototype.apply = function (a, b) {
        this.D = a.body.style.overflow;
        this.J = a.body.style.position;
        this.B = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = _.KD(b);
        _.Kv(a.body, "top", -this.m + "px")
    };
    _.Wl = function (a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : Pg(a, b)
    };
    _.Vl = function (a) {
        return !!a && 1 > a.length
    };
    var ND = function (a) {
        _.U.call(this);
        this.j = a;
        this.m = null;
        this.H = {};
        this.o = 0;
        this.B = null
    };
    _.O(ND, _.U);
    ND.prototype.D = function () {
        this.B && _.Od(this.j, "message", this.B);
        _.U.prototype.D.call(this)
    };
    ND.prototype.l = function () {
        var a;
        return "function" === typeof (null == (a = this.j) ? void 0 : a.__uspapi) || null != OD(this)
    };
    ND.prototype.M = function (a) {
        var b = {};
        if (this.l()) {
            var c = _.pr(function () {
                return a(b)
            });
            PD(this, function (d, e) {
                e && (b = d);
                c()
            });
            setTimeout(c, 500)
        } else a(b)
    };
    var PD = function (a, b) {
        var c;
        "function" === typeof (null == (c = a.j) ? void 0 : c.__uspapi) ? (a = a.j.__uspapi, a("getUSPData", 1, b)) : OD(a) && (QD(a), c = ++a.o, a.H[c] = b, a.m && (b = {}, a.m.postMessage((b.__uspapiCall = {
            command: "getUSPData",
            version: 1,
            callId: c
        }, b), "*")))
    }, OD = function (a) {
        if (a.m) return a.m;
        a.m = rv(a.j, "__uspapiLocator");
        return a.m
    }, QD = function (a) {
        a.B || (a.B = function (b) {
            try {
                var c = {};
                "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                var d = c.__uspapiReturn;
                var e;
                null == (e = a.H) || e[d.callId](d.returnValue, d.success)
            } catch (f) {
            }
        }, _.hb(a.j, "message", a.B))
    };
    var Tm = function (a) {
        _.U.call(this);
        this.l = a;
        this.B = this.j = null;
        this.M = {};
        this.C = 0;
        this.H = !1
    };
    _.O(Tm, _.U);
    Tm.prototype.m = function () {
        if (!this.H) {
            if (!this.j) {
                var a = rv(this.l, "googlefcPresent");
                this.j = a ? a : null
            }
            this.H = !0
        }
        return !!this.j
    };
    Tm.prototype.o = function (a) {
        var b = this;
        return new v.Promise(function (c) {
            if (b.m()) if (b.j === b.l) {
                var d = b.j.googlefc || (b.j.googlefc = {});
                d.__fci = d.__fci || [];
                d.__fci.push(a, function (f) {
                    c(ke(f))
                })
            } else {
                RD(b);
                d = b.C++;
                b.M[d] = c;
                var e = {};
                (0, C.K)(b.j).postMessage((e.__fciCall = {command: a, callId: d}, e), "*")
            }
        })
    };
    var RD = function (a) {
        a.B || (a.B = function (b) {
            try {
                var c = ke(b.data.__fciReturn);
                (0, a.M[x(c, 1)])(c)
            } catch (d) {
            }
        }, _.hb(a.l, "message", a.B))
    };
    var SD = {},
        Tg = (SD[23] = .001, SD[253] = !1, SD[246] = [], SD[150] = "", SD[221] = /^true$/.test("false"), SD[36] = /^true$/.test("false"), SD[172] = null, SD[260] = void 0, SD[251] = null, SD),
        Sg = function () {
            this.j = !1
        };
    var Uj = function (a) {
        var b = void 0 === b ? Be(_.q) : b;
        this.id = a;
        this.m = Math.random() < (_.H(_.Iw) ? .001 : _.Ug(23));
        this.j = {pvsid: String(b)}
    }, TD = function (a) {
        a = Rg(a);
        var b;
        sh.set(a, (null != (b = sh.get(a)) ? b : 0) + 1)
    }, rh = function () {
        return [].concat(_.Jd(_.t(sh, "values").call(sh))).reduce(function (a, b) {
            return a + b
        }, 0)
    }, K = function (a, b, c) {
        "string" !== typeof c && (c = String(c));
        /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
    }, Wj = function (a) {
        var b = 1;
        b = void 0 === b ? null : b;
        if (UD()) b = !0; else {
            var c = a.m;
            b && 0 <= b && (c = Math.random() < b);
            b = c && !!a.id
        }
        b && _.Gx(window, VD(a) || "", void 0, _.H(Ow))
    }, VD = function (a) {
        var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
        _.Ak(a.j, function (c, d) {
            c && (b += "&" + d + "=" + encodeURIComponent(c))
        });
        return b
    }, WD = function (a) {
        var b = [].concat(_.Jd(_.t(sh, "keys").call(sh)));
        b = b.map(function (c) {
            return c.replace(/,/g, "\\,")
        });
        3 >= b.length ? K(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), K(a, "nw_id", b.join()))
    }, ui = function (a, b) {
        K(a, "vrg", String(b.tb || b.Ga));
        WD(a);
        K(a, "nslots", rh().toString());
        b = _.we(xe).j();
        b.length && K(a, "eid", b.join());
        K(a, "pub_url", document.URL)
    }, oi = function (a, b, c) {
        c = void 0 === c ? _.H(_.Iw) ? .001 : _.Ug(23) : c;
        if (void 0 === c || 0 > c || 1 < c) c = _.H(_.Iw) ? .001 : _.Ug(23);
        Math.random() < c && (a = new Uj(a), b(a), Wj(a))
    }, sh = new v.Map, UD = Zh(function () {
        return !!lv(_.q.location.href)
    });
    var fh = function () {
        Cy.call(this, _.H(gh) || _.H(wx) ? 1 : 0, _.q);
        this.D = 0;
        var a = _.H(gh) || _.H(wx);
        _.q.google_measure_js_timing = a || _.q.google_measure_js_timing
    };
    _.O(fh, Cy);
    _.XD = function (a) {
        this.context = a
    };
    var YD = {}, ZD = (YD.companion_ads = "companionAds", YD.content = "content", YD.publisher_ads = "pubads", YD);
    var uh = function (a) {
        _.S.call(this, a)
    };
    _.O(uh, _.S);
    uh.prototype.getWidth = function () {
        return x(this, 1)
    };
    var yh = function (a, b) {
        return _.z(a, 1, b)
    };
    uh.prototype.getHeight = function () {
        return x(this, 2)
    };
    var xh = function (a, b) {
        return _.z(a, 2, b)
    }, Wk = function () {
        var a = new uh;
        return _.z(a, 3, !0)
    };
    var ik = function (a) {
        _.S.call(this, a, -1, $D)
    };
    _.O(ik, _.S);
    var hk = function (a, b) {
        return _.z(a, 1, b)
    }, gk = function (a, b) {
        return _.ph(a, 2, b)
    }, aE = function (a, b) {
        return vs(a, 2, b)
    }, $D = [2];
    var Cp = function (a) {
        _.S.call(this, a)
    };
    _.O(Cp, _.S);
    var bE = function (a, b) {
        return _.z(a, 3, Yb(b))
    };
    var un = function (a) {
        _.S.call(this, a, -1, cE)
    };
    _.O(un, _.S);
    var An = function (a, b) {
        return _.z(a, 1, b)
    }, yn = function (a, b) {
        return _.ph(a, 2, b)
    }, cE = [2];
    var co = function (a) {
        _.S.call(this, a, -1, dE)
    };
    _.O(co, _.S);
    var zn = function (a, b) {
        ef(a, 1, un, b)
    }, dE = [1];
    var ao = function (a) {
        _.S.call(this, a, -1, eE)
    };
    _.O(ao, _.S);
    var eE = [2, 3];
    var Zn = function (a) {
        _.S.call(this, a)
    };
    _.O(Zn, _.S);
    var fE = function (a) {
        _.S.call(this, a)
    };
    _.O(fE, _.S);
    fE.prototype.setTagForChildDirectedTreatment = function (a) {
        return _.z(this, 5, a)
    };
    fE.prototype.clearTagForChildDirectedTreatment = function () {
        return Le(this, 5)
    };
    fE.prototype.setTagForUnderAgeOfConsent = function (a) {
        return _.z(this, 6, a)
    };
    var zk = function (a) {
        _.S.call(this, a)
    };
    _.O(zk, _.S);
    var hE = function (a) {
        _.S.call(this, a, -1, gE)
    };
    _.O(hE, _.S);
    hE.prototype.ta = function () {
        return ae(this, ik, 14)
    };
    hE.prototype.Ta = function () {
        return Qe(this, zk, 18)
    };
    var iE = function (a) {
        return Qe(a, fE, 25)
    };
    hE.prototype.getCorrelator = function () {
        return x(this, 26)
    };
    hE.prototype.setCorrelator = function (a) {
        return _.z(this, 26, a)
    };
    hE.prototype.Nc = function () {
        return $n(this, Zn, 33)
    };
    var gE = [2, 3, 14];
    var Qh = function () {
        this.j = new v.Map
    };
    var jE = function () {
        this.m = {};
        this.j = new hE;
        this.D = new v.Map;
        this.j.setCorrelator(Av());
        _.Ug(36) && _.z(this.j, 15, !0)
    }, kE = function (a) {
        var b = hi(), c = a.getDomId();
        if (c && !b.m.hasOwnProperty(c)) {
            var d = _.we(Qh), e = ++_.we(fh).D;
            d.j.set(c, e);
            _.z(a, 20, e);
            b.m[c] = a
        }
    }, gn = function (a, b) {
        return a.m[b]
    }, hi = function () {
        return _.we(jE)
    };
    var Uh = Zh(Th);
    var Gi = ["auto", "inherit", "100%"], Hi = Gi.concat(["none"]);
    var mm = function (a, b, c) {
        if (!a) return !0;
        var d = !0;
        Ei(a, function (e) {
            return d = Fi(e, b, 10, 10)
        }, c);
        return d
    };
    var lE = function (a, b, c, d, e, f) {
        this.D = _.Ev(a);
        this.m = _.Ev(b);
        this.J = c;
        this.j = _.Ev(d);
        this.B = e;
        this.l = f
    }, mE = function (a) {
        return JSON.stringify({
            windowCoords_t: a.D.top,
            windowCoords_r: a.D.right,
            windowCoords_b: a.D.bottom,
            windowCoords_l: a.D.left,
            frameCoords_t: a.m.top,
            frameCoords_r: a.m.right,
            frameCoords_b: a.m.bottom,
            frameCoords_l: a.m.left,
            styleZIndex: a.J,
            allowedExpansion_t: a.j.top,
            allowedExpansion_r: a.j.right,
            allowedExpansion_b: a.j.bottom,
            allowedExpansion_l: a.j.left,
            xInView: a.B,
            yInView: a.l
        })
    }, nE = function (a) {
        var b = window, c = b.screenX || b.screenLeft || 0, d = b.screenY || b.screenTop || 0;
        b = new _.Dv(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
        c = Ov(a);
        d = _.Lg(_.Mg, a);
        var e = new Fv(c.x, c.y, d.width, d.height);
        c = Gv(e);
        d = String(Kg(a, "zIndex"));
        var f = new _.Dv(0, Infinity, Infinity, 0);
        for (var g = Tu(a), h = g.j.body, k = g.j.documentElement, l = Yu(g.j); a = Nv(a);) if (!(_.Tr && 0 == a.clientWidth || Wr && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != Kg(a, "overflow")) {
            var n = Ov(a), m = new _.Lh(a.clientLeft, a.clientTop);
            n.x += m.x;
            n.y += m.y;
            f.top = Math.max(f.top, n.y);
            f.right = Math.min(f.right, n.x + a.clientWidth);
            f.bottom = Math.min(f.bottom, n.y + a.clientHeight);
            f.left = Math.max(f.left, n.x)
        }
        a = l.scrollLeft;
        l = l.scrollTop;
        f.left = Math.max(f.left, a);
        f.top = Math.max(f.top, l);
        g = g.j;
        g = _.Xu(g.parentWindow || g.defaultView || window);
        f.right = Math.min(f.right, a + g.width);
        f.bottom = Math.min(f.bottom, l + g.height);
        l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new Fv(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? Hv(e, f) : null;
        g = a = 0;
        l && !(new _.Oh(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
        l = new _.Dv(0, 0, 0, 0);
        if (h = f) (e = Hv(e, f)) ? (k = Gv(f), n = Gv(e), h = n.right != k.left && k.right != n.left, k = n.bottom != k.top && k.bottom != n.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
        h && (l = new _.Dv(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
        return new lE(b, c, d, l, a, g)
    };
    var oE = function (a) {
        this.J = a;
        this.B = null;
        this.C = this.status = 0;
        this.m = null;
        this.Ka = "sfchannel" + a
    };
    var pE = function (a) {
        this.j = a
    };
    var qE = function (a, b) {
        this.Jc = a;
        this.Kc = b;
        this.m = this.j = !1
    };
    var rE = function (a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.m = a;
        this.D = b;
        this.J = c;
        this.permissions = d;
        this.metadata = e;
        this.B = f;
        this.kc = g;
        this.hostpageLibraryTokens = h;
        this.j = ""
    };
    var sE = function (a, b) {
        this.m = a;
        this.J = b
    };
    sE.prototype.j = function (a) {
        this.J && a && (a.sentinel = this.J);
        return JSON.stringify(a)
    };
    var tE = function (a, b, c) {
        sE.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.O(tE, sE);
    tE.prototype.j = function () {
        return sE.prototype.j.call(this, {uid: this.m, version: this.version})
    };
    var uE = function (a, b, c, d) {
        sE.call(this, a, void 0 === d ? "" : d);
        this.B = b;
        this.D = c
    };
    _.O(uE, sE);
    uE.prototype.j = function () {
        return sE.prototype.j.call(this, {uid: this.m, initialWidth: this.B, initialHeight: this.D})
    };
    var vE = function (a, b, c) {
        sE.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.O(vE, sE);
    vE.prototype.j = function () {
        return sE.prototype.j.call(this, {uid: this.m, description: this.description})
    };
    var wE = function (a, b, c, d) {
        sE.call(this, a, void 0 === d ? "" : d);
        this.D = b;
        this.push = c
    };
    _.O(wE, sE);
    wE.prototype.j = function () {
        return sE.prototype.j.call(this, {
            uid: this.m,
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        })
    };
    var xE = function (a, b) {
        sE.call(this, a, void 0 === b ? "" : b)
    };
    _.O(xE, sE);
    xE.prototype.j = function () {
        return sE.prototype.j.call(this, {uid: this.m})
    };
    var yE = function (a, b, c) {
        sE.call(this, a, void 0 === c ? "" : c);
        this.B = b
    };
    _.O(yE, sE);
    yE.prototype.j = function () {
        var a = {uid: this.m, newGeometry: mE(this.B)};
        return sE.prototype.j.call(this, a)
    };
    var zE = function (a, b, c, d, e, f) {
        yE.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.D = d;
        this.push = e
    };
    _.O(zE, yE);
    zE.prototype.j = function () {
        var a = {
            uid: this.m,
            success: this.success,
            newGeometry: mE(this.B),
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        };
        this.J && (a.sentinel = this.J);
        return JSON.stringify(a)
    };
    var AE = function (a, b, c, d) {
        sE.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.O(AE, sE);
    AE.prototype.j = function () {
        return sE.prototype.j.call(this, {uid: this.m, width: this.width, height: this.height})
    };
    var BE = function (a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Bd(function () {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var CE = function () {
        this.j = []
    }, EE = function (a, b, c, d, e) {
        a.j.push(new DE(b, c, d, e))
    }, FE = function (a) {
        for (var b = a.j.length - 1; 0 <= b; b--) {
            var c = a.j[b];
            c.m ? (c.D.style.removeProperty(c.j), c.D.style.setProperty(c.j, String(c.J), c.B)) : c.D.style[c.j] = c.J
        }
        a.j.length = 0
    }, DE = function (a, b, c, d) {
        this.D = a;
        this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.J = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
        this.B = this.m ? a.style.getPropertyPriority(this.j) : void 0;
        this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
    };
    var GE = function (a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }, HE = function () {
        var a = window, b = _.se(a);
        b && GE({label: "2", type: 9, value: b}, a)
    }, IE = function (a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = window, f = "undefined" !== typeof queueMicrotask;
        return function () {
            d && f && queueMicrotask(function () {
                e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                e.google_rum_task_id_counter += 1
            });
            var g = _.se(), h = 3;
            try {
                var k = b.apply(this, arguments)
            } catch (l) {
                h = 13;
                if (!c) throw l;
                c(a, l)
            } finally {
                e.google_measure_js_timing && g && GE(_.t(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: g,
                    duration: (_.se() || 0) - g,
                    type: h
                }, d && f && {taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1}), e)
            }
            return k
        }
    };
    var NE = function (a) {
        oE.call(this, a.uniqueId);
        var b = this;
        this.H = a.Nh;
        this.o = 1 === a.size;
        this.R = new qE(a.permissions.Jc && !this.o, a.permissions.Kc && !this.o);
        this.l = a.Ld;
        var c;
        this.ja = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.da = "file:" == c ? "*" : c + "//" + d;
        this.ka = !!a.kc;
        c = "//" + a.ye + (_.H($w) ? ".safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
        this.L = a.ye ? c : "//tpc.googlesyndication.com";
        this.ba = a.Pc ? "*" : "https:" + this.L;
        this.W = !!a.cf;
        this.ia = JE(a);
        this.D = new CE;
        KE(this, a.Ld, a.size);
        this.B = this.ha = nE(a.Ld);
        this.T = a.gg || "1-0-40";
        var e;
        this.la = null != (e = a.Ue) ? e : "";
        LE(this, a);
        this.ua = IE(412, function () {
            return ME(b)
        }, a.Fa);
        this.F = -1;
        this.M = 0;
        var f = IE(415, function () {
            b.j && (b.j.name = "", a.oe && a.oe(), _.Od(b.j, "load", f))
        }, a.Fa);
        _.hb(this.j, "load", f);
        this.yd = IE(413, this.yd, a.Fa);
        this.Nd = IE(417, this.Nd, a.Fa);
        this.Od = IE(419, this.Od, a.Fa);
        this.qd = IE(411, this.qd, a.Fa);
        this.pd = IE(409, this.pd, a.Fa);
        this.O = IE(410, this.O, a.Fa);
        this.Gd = IE(416, this.Gd, a.Fa);
        this.m = new hD(this.Ka, this.j.contentWindow, this.ba, !1);
        jD(this.m, "init_done", (0, _.hr)(this.yd, this));
        jD(this.m, "register_done", (0, _.hr)(this.Nd, this));
        jD(this.m, "report_error", (0, _.hr)(this.Od, this));
        jD(this.m, "expand_request", (0, _.hr)(this.qd, this));
        jD(this.m, "collapse_request", (0, _.hr)(this.pd, this));
        jD(this.m, "creative_geometry_update", (0, _.hr)(this.O, this));
        this.m.connect((0, _.hr)(this.Gd, this))
    };
    _.O(NE, oE);
    var KE = function (a, b, c) {
        a.o ? (b.style.width = _.Qv("100%", !0), b.style.height = _.Qv("auto", !0)) : (b.style.width = _.Qv(c.width, !0), b.style.height = _.Qv(c.height, !0))
    }, LE = function (a, b) {
        var c = b.Pc, d = b.content, e = b.ic, f = b.size, g = void 0 === b.jc ? "3rd party ad content" : b.jc,
            h = b.Lc;
        b = b.ld;
        var k = {shared: {sf_ver: a.T, ck_on: xy() ? 1 : 0, flash_ver: "0"}};
        d = c ? "" : null != d ? d : "";
        d = a.T + ";" + d.length + ";" + d;
        k = new rE(a.J, a.da, a.ha, a.R, new pE(k), a.o, a.ka, a.ja);
        var l = {};
        l.uid = k.m;
        l.hostPeerName = k.D;
        l.initialGeometry = mE(k.J);
        var n = k.permissions;
        n = JSON.stringify({expandByOverlay: n.Jc, expandByPush: n.Kc, readCookie: n.j, writeCookie: n.m});
        l = (l.permissions = n, l.metadata = JSON.stringify(k.metadata.j), l.reportCreativeGeometry = k.B, l.isDifferentSourceWindow = k.kc, l.goog_safeframe_hlt = Az(k.hostpageLibraryTokens), l);
        k.j && (l.sentinel = k.j);
        k = JSON.stringify(l);
        d += k;
        a.W && f instanceof _.Oh && (k = _.Zu(_.Su(a.l)), l = _.Zu(_.Su(a.l)).location.protocol + a.L, oz || Xj(k.document, pz), oz++, k.google_eas_queue = k.google_eas_queue || [], k.google_eas_queue.push({
            a: e,
            b: l,
            c: f.width,
            d: f.height,
            e: "sf-gdn-exp-" + oz,
            f: void 0,
            g: void 0,
            h: void 0,
            i: void 0
        }));
        k = f.width;
        f = f.height;
        a.o && (f = k = 0);
        l = {};
        e = (l.id = e, l.title = g, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(f), l["data-is-safeframe"] = "true", l);
        void 0 === c && (g = _.Zu(_.Su(a.l)), f = a.la, d = a.L, (k = f) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.T + "/html/container.html" + k), (k = BE(g)) && (d += (f ? "&" : "?") + "n=" + k), f = "https:" + d, d = [], a.W && (k = lv(g.location.href), g = d.push, k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.J, "&p=", encodeURIComponent(_.q.document.location.protocol), "//", encodeURIComponent(_.q.document.location.host)].join(""), g.call(d, k)), d.length && (f += "#" + d.join("&")), e.src = f);
        null !== a.ia && (e.sandbox = a.ia);
        h && (e.allow = h);
        b && (e.credentialless = "true");
        e.role = "region";
        e["aria-label"] = "Advertisement";
        e.tabIndex = "0";
        c ? (a.j = c, Vu(a.j, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Fa(c, e), h = _.Nd("IFRAME"), Vu(h, c), a.j = h);
        a.o && (a.j.style.minWidth = "100%");
        a.l.appendChild(a.j)
    };
    ba = NE.prototype;
    ba.Gd = function () {
        _.hb(window, "resize", this.ua);
        _.hb(window, "scroll", this.ua)
    };
    ba.yd = function (a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Ji(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new tE(b.uid, b.version, b.sentinel);
            if (this.J !== c.m || this.T !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.H) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    ba.Nd = function (a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Ji(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.J !== (new uE(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).m) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    ba.Od = function (a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Ji(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new vE(b.uid, b.description, b.sentinel);
            if (this.J !== c.m) throw Error("Wrong source container");
            var d;
            null == (d = this.H) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.H) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    ba.qd = function (a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Ji(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new wE(b.uid, new _.Dv(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.J !== c.m) throw Error("Wrong source container");
            if (!(0 <= c.D.top && 0 <= c.D.left && 0 <= c.D.bottom && 0 <= c.D.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.R.Kc || !c.push && this.R.Jc) {
                var e = c.D, f = c.push, g = this.B = nE(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f) for (var h = this.j.parentNode; h && h.style; h = h.parentNode) EE(this.D, h, "overflowX", "visible", "important"), EE(this.D, h, "overflowY", "visible", "important");
                    var k = Gv(new Fv(0, 0, this.B.m.getWidth(), this.B.m.getHeight()));
                    _.ka(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    EE(this.D, this.l, "position", "relative");
                    EE(this.D, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        EE(this.D, this.l, "width", l + "px");
                        var n = k.getHeight();
                        EE(this.D, this.l, "height", n + "px")
                    } else EE(this.D, this.j, "zIndex", "10000");
                    var m = k.getWidth();
                    EE(this.D, this.j, "width", m + "px");
                    var p = k.getHeight();
                    EE(this.D, this.j, "height", p + "px");
                    EE(this.D, this.j, "left", k.left + "px");
                    EE(this.D, this.j, "top", k.top + "px");
                    this.C = 2;
                    this.B = nE(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            kD(this.m, "expand_response", (new zE(this.J, a, this.B, c.D, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (u) {
            var r;
            null == (r = this.H) || r.error("Invalid EXPAND_REQUEST message. Reason: " + u.message)
        }
    };
    ba.pd = function (a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.C) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Ji(b.uid)) throw Error("Cannot parse JSON message");
            if (this.J !== (new xE(b.uid, b.sentinel)).m) throw Error("Wrong source container");
            FE(this.D);
            this.C = 0;
            this.j && (this.B = nE(this.j));
            kD(this.m, "collapse_response", (new yE(this.J, this.B)).j())
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var ME = function (a) {
        if (1 == a.status || 2 == a.status) switch (a.M) {
            case 0:
                OE(a);
                a.F = window.setTimeout((0, _.hr)(a.Z, a), 1E3);
                a.M = 1;
                break;
            case 1:
                a.M = 2;
                break;
            case 2:
                a.M = 2
        }
    };
    NE.prototype.O = function (a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Ji(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new AE(b.uid, b.width, b.height, b.sentinel);
            if (this.J !== c.m) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.o) d !== this.j.height && (this.j.height = d, ME(this)); else {
                var e;
                null == (e = this.H) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.H) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    NE.prototype.Z = function () {
        if (1 == this.status || 2 == this.status) switch (this.M) {
            case 1:
                this.M = 0;
                break;
            case 2:
                OE(this), this.F = window.setTimeout((0, _.hr)(this.Z, this), 1E3), this.M = 1
        }
    };
    var OE = function (a) {
            a.B = nE(a.j);
            kD(a.m, "geometry_update", (new yE(a.J, a.B)).j())
        }, JE = function (a) {
            var b = null;
            a.Ae && (b = a.Ae);
            return null == b ? null : b.join(" ")
        }, PE = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        QE = ["allow-top-navigation"], RE = ["allow-same-origin"], SE = ov([].concat(_.Jd(PE), _.Jd(QE)));
    ov([].concat(_.Jd(PE), _.Jd(RE)));
    ov([].concat(_.Jd(PE), _.Jd(QE), _.Jd(RE)));
    var TE = P(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]), UE = {
        Gf: function (a) {
            if ("string" !== typeof a.version) throw new TypeError("version is not a string");
            if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
            if ("string" !== typeof a.rc) throw new TypeError("subdomain is not a string");
            if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.rc)) throw new RangeError("Invalid subdomain: " + a.rc);
            return a.rg ? Gd("https://" + a.rc + ".safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : Gd("https://" + a.rc + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
        }, Xh: function (a) {
            return B(TE, a)
        }
    };
    var Li = function (a, b) {
        try {
            sb(Co(a, b))
        } catch (c) {
        }
    };
    var VE = function (a) {
        _.S.call(this, a)
    };
    _.O(VE, _.S);
    VE.prototype.D = xd([VE, 4, Ps, 2, Ps, 1, Ps, 3, Ps, 5, Ss]);
    var WE = [.05, .1, .2, .5], XE = [0, .5, 1], YE = function (a) {
        a = Ef(a);
        if (!a) return -1;
        try {
            var b = qz(a.document);
            var c = new _.Oh(b.clientWidth, b.clientHeight)
        } catch (d) {
            c = new _.Oh(-12245933, -12245933)
        }
        return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
    }, ZE = function (a, b) {
        return 0 >= a || 0 >= b ? [] : _.Mc(WE, function (c) {
            return Math.min(a / b * c, 1)
        })
    }, aF = function (a) {
        this.B = a.I;
        this.D = a.fb;
        this.H = a.zb;
        this.m = null;
        this.J = a.Fa;
        this.j = $E(this);
        this.l = a.kg || !1
    };
    aF.prototype.getSlotId = function () {
        return this.m
    };
    var cF = function (a, b) {
        if (a.j) {
            if (null != a.m) {
                try {
                    bF(a, Math.round(performance.now()), 0, 0, 0, !1)
                } catch (c) {
                    a.J && a.J(c)
                }
                a.j && a.j.unobserve(a.D)
            }
            a.m = b;
            a.j.observe(a.D)
        }
    }, $E = function (a) {
        var b = a.D.offsetWidth * a.D.offsetHeight, c = YE(a.B);
        b = [].concat(_.Jd(XE), _.Jd(ZE(c, b)));
        oa(b);
        return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function (d) {
            return dF(a, d)
        }, {threshold: b}) : new Xo(function (d) {
            return dF(a, d)
        }, {threshold: b})
    }, dF = function (a, b) {
        try {
            var c = YE(a.B);
            _.sr(b, function (d) {
                a.l && bF(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
            })
        } catch (d) {
            a.J && a.J(d)
        }
    }, bF = function (a, b, c, d, e, f) {
        if (null == a.m) throw Error("Not Attached.");
        var g = new VE;
        c = _.z(g, 1, c);
        d = _.z(c, 2, d);
        e = _.z(d, 3, e);
        b = _.z(e, 4, b);
        f = _.z(b, 5, f);
        f = xb(f.D(), 4);
        Dy(a.H, "1", 10, f, void 0, a.m)
    };
    var eF = function (a, b) {
        this.j = a;
        this.m = b
    }, fF = function (a) {
        if (a.j.frames.google_ads_top_frame) return !0;
        var b = sv(a.j);
        b = b && b.contentWindow;
        if (!b) return !1;
        b.addEventListener("message", function (c) {
            var d = c.ports;
            "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                msgType: "__goog_top_url_resp",
                topUrl: a.m
            })
        }, !1);
        return !0
    };
    var Vi = function (a) {
        _.S.call(this, a)
    };
    _.O(Vi, _.S);
    var Zi = yd(Vi), Xi = [1, 3];
    var Qd = {Dh: 0, Ah: 1, yh: 2, zh: 3, Ch: 5, Bh: 7};
    var gF = P(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]), Qi = B(gF);
    var wj = function (a) {
        _.S.call(this, a)
    };
    _.O(wj, _.S);
    wj.prototype.getVersion = function () {
        return bf(this, 2)
    };
    var vj = function (a) {
        _.S.call(this, a, -1, hF)
    };
    _.O(vj, _.S);
    var pj = function (a, b) {
        return _.z(a, 2, b)
    }, uj = function (a, b) {
        return _.z(a, 3, b)
    }, rj = function (a, b) {
        return _.z(a, 4, b)
    }, oj = function (a, b) {
        return _.z(a, 5, b)
    }, tj = function (a, b) {
        return _.z(a, 9, b)
    }, nj = function (a, b) {
        return Nc(a, 10, b)
    }, mj = function (a, b) {
        return _.z(a, 11, b)
    }, qj = function (a, b) {
        return _.z(a, 1, b)
    }, sj = function (a, b) {
        return _.z(a, 7, b)
    }, hF = [10, 6];
    var kj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    var iF = function () {
        this.id = "goog_" + Ou++
    }, jF = function (a) {
        _.U.call(this);
        this.context = a;
        this.m = new v.Map
    };
    _.O(jF, _.U);
    jF.prototype.D = function () {
        _.U.prototype.D.call(this);
        this.m.clear()
    };
    var lF = function (a, b, c) {
        if (a.J) return function () {
        };
        var d = "string" === typeof b ? b : b.id, e, f,
            g = null != (f = null == (e = a.m.get(d)) ? void 0 : e.add(c)) ? f : new v.Set([c]);
        a.m.set(d, g);
        return function () {
            return void kF(a, b, c)
        }
    }, mF = function (a, b, c) {
        c = void 0 === c ? function () {
            return !0
        } : c;
        return new v.Promise(function (d) {
            var e = lF(a, b, function (f) {
                c(f) && (e(), d(f))
            })
        })
    }, kF = function (a, b, c) {
        var d;
        return !(null == (d = a.m.get("string" === typeof b ? b : b.id)) || !d.delete(c))
    };
    jF.prototype.dispatchEvent = function (a, b, c) {
        var d = this, e, f, g, h, k, l, n, m;
        return _.jb(function (p) {
            e = "string" === typeof a ? a : a.id;
            f = d.m.get(e);
            if (null == (g = f) || !g.size) return p.return();
            h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                detail: c,
                bubbles: !0,
                cancelable: !0
            }) : function () {
                var r = document.createEvent("CustomEvent");
                r.initCustomEvent(e, !0, !0, c);
                return r
            }();
            k = [];
            l = {};
            n = _.A(f);
            for (m = n.next(); !m.done; l = {xc: l.xc}, m = n.next()) l.xc = m.value, k.push(new v.Promise(function (r) {
                return function (u) {
                    return _.jb(function (w) {
                        if (1 == w.j) return kb(w, 0, 2);
                        _.kh(d.context, b, function () {
                            d.m.has(e) && f.has(r.xc) && r.xc(h)
                        }, !0);
                        u();
                        w.j = 0
                    })
                }
            }(l)));
            return kb(p, v.Promise.all(k), 0)
        })
    };
    var nF = new iF, oF = new iF, So = new iF, pF = new iF, Uo = new iF, qF = new iF, rF = new iF, Io = new iF,
        sF = new iF, tF = new iF;
    var uF = function () {
        this.data = void 0;
        this.status = 0;
        this.j = []
    };
    uF.prototype.Mc = function () {
        return this.j
    };
    uF.prototype.nd = function () {
        this.j = []
    };
    var vF, zF, CF, cq, DF, EF, yF, xF, wF, FF;
    vF = function () {
        this.j = new v.Map;
        this.B = 0;
        this.m = new v.Map;
        this.Hc = null;
        this.J = this.D = this.M = this.l = 0;
        this.H = new uF
    };
    zF = function (a, b) {
        a.j.get(b) || (a.j.set(b, {wb: !0, Kd: "", Bb: "", we: 0, je: 0, Hd: [], Id: [], rb: !1}), _.Km(b, function () {
            a.j.delete(b);
            wF(a, b)
        }), lF(b, oF, function (c) {
            c = c.detail;
            var d = (0, C.K)(a.j.get(b));
            d.Kd = x(c, 33) || "";
            d.rb = !0;
            xF(a, b, function () {
                return void (d.Kd = "")
            });
            yF(a, b, function () {
                return void (d.rb = !1)
            })
        }))
    };
    _.To = function (a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.wb) ? d : !1
    };
    _.AF = function (a, b) {
        if (a = a.j.get(b)) a.wb = !1
    };
    _.BF = function (a, b) {
        if (a = a.j.get(b)) a.wb = !0
    };
    CF = function (a, b) {
        if (!b.length) return [];
        var c = Rg(b[0].getAdUnitPath());
        b.every(function (g) {
            return Rg(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.A(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.A(e.value);
            e = f.next().value;
            (f = f.next().value.Kd) && Rg(e.getAdUnitPath()) === c && !_.t(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    cq = function (a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.Bb) ? d : ""
    };
    DF = function (a, b) {
        return (a = a.j.get(b)) ? a.we - 1 : 0
    };
    EF = function (a, b) {
        var c = (0, C.K)(a.m.get(b)) - 1;
        0 === c ? a.m.delete(b) : a.m.set(b, c);
        return c
    };
    yF = function (a, b, c) {
        (a = a.j.get(b)) && a.Hd.push(c)
    };
    xF = function (a, b, c) {
        (a = a.j.get(b)) && a.Id.push(c)
    };
    wF = function (a, b) {
        if (a = a.j.get(b)) for (b = a.Id.slice(), a.Id.length = 0, a = _.A(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    FF = function (a, b) {
        if (a = a.j.get(b)) for (b = a.Hd.slice(), a.Hd.length = 0, a = _.A(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    vF.prototype.rb = function (a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.rb) ? c : !1
    };
    var GF = function (a, b, c) {
        if (a = a.j.get(b)) a.ve = c
    }, HF = function (a, b) {
        if (a = a.j.get(b)) {
            var c;
            null == (c = a.ve) || c.Ea();
            delete a.ve
        }
    };
    var IF = function () {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var Z = function (a, b, c) {
        fz.call(this, b, c);
        this.context = a
    };
    _.O(Z, fz);
    Z.prototype.T = function (a) {
        hh(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var JF = function (a, b, c, d, e) {
        var f = null, g = _.dh(a.context, b, e);
        _.hb(c, d, g) && (f = function () {
            return _.Od(c, d, g)
        }, _.Km(a, f));
        return f
    };
    var KF = /(<head(\s+[^>]*)?>)/i, zp = function (a, b, c, d, e) {
        Z.call(this, a, 665);
        this.A = W(this);
        this.l = X(this, b);
        this.C = Y(this, c);
        this.F = X(this, d);
        this.o = X(this, e)
    };
    _.O(zp, Z);
    zp.prototype.j = function () {
        var a;
        0 === this.l.value.kind && null != (a = this.C.value) && x(a, 1) ? (a = this.l.value.Ma, this.o.value || Ka() || (a = a.replace(KF, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.F.value && !this.o.value && (a = a.replace(KF, '$1<meta name="referrer" content="origin">')), this.A.G({
            kind: 0,
            Ma: a
        })) : this.A.G(this.l.value)
    };
    var dq = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.C = Y(this, c);
        this.l = Y(this, d);
        iz(this, e);
        this.F = X(this, f);
        this.o = X(this, g);
        this.O = X(this, h);
        this.L = mF(b, sF)
    };
    _.O(dq, Z);
    dq.prototype.j = function () {
        var a = this, b, c, d;
        return _.jb(function (e) {
            if (1 == e.j) {
                var f = !a.O.value;
                if (null == a.l.value || "height" !== a.C.value || f) return e.return();
                b = a.F.value;
                c = a.o.value;
                LF(c, !1);
                _.Kv(c, "min-width", "100%");
                _.Kv(b, "min-width", "100%");
                return kb(e, a.L, 2)
            }
            if (a.J) return e.return();
            d = b.contentDocument;
            if (!d) return e.return();
            f = d.body.offsetWidth;
            b.setAttribute("height", String(d.body.offsetHeight));
            b.setAttribute("width", String(f));
            LF(c, !0);
            e.j = 0
        })
    };
    var LF = function (a, b) {
        _.Kv(a, "visibility", b ? "visible" : "hidden")
    };
    var Cj = new v.Map, Bj = new v.Map;
    var Ej = function (a, b) {
        this.push = J(a, 76, b.push.bind(b))
    };
    var Gj = function (a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    Gj.prototype.getMessageId = function () {
        return this.messageId
    };
    Gj.prototype.getMessageArgs = function () {
        return this.messageArgs
    };
    var MF = L(2), NF = L(3), OF = L(4), PF = L(5), QF = L(6), RF = L(12), SF = L(14), TF = L(16), UF = L(19),
        VF = L(20), WF = L(23), XF = L(26), YF = L(28), ZF = L(149), $F = L(30), aG = L(31), bG = L(34), cG = L(35),
        dG = L(36), Sn = L(38), eG = L(40), fG = L(48), gG = L(50), hG = L(60), iG = L(63), jG = L(64), kG = L(66),
        lG = L(68), mG = L(69), nG = L(70), oG = L(71), pG = L(78), qG = L(80), rG = L(82), sG = L(84), tG = L(85),
        uG = L(87), jk = L(88), vG = L(92), wG = L(93), xG = L(99), yG = L(103), zG = L(104), AG = L(105), BG = L(106),
        CG = L(107), DG = L(108), EG = L(113), FG = L(114), GG = L(115), HG = L(117), IG = L(118), JG = L(119),
        Ck = L(121), KG = L(122), LG = L(123), po = L(125), MG = L(126), NG = L(127), OG = L(144), Bn = L(129),
        Dn = L(132), PG = L(134), QG = L(135), RG = L(136), SG = L(137), TG = L(138), UG = L(139), VG = L(140),
        Eo = L(142), WG = L(143), XG = L(145), YG = L(147), bo = L(148);
    var ZG = function (a, b, c) {
        var d = this;
        this.addEventListener = J(a, 86, function (e, f) {
            if ("function" !== typeof f) return M(b, Ij("Service.addEventListener", [e, f])), d;
            var g = Jj(e);
            if (!g) return M(b, wG(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = J(a, 904, function (e, f) {
            var g = Jj(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : M(b, Ij("Service.removeEventListener", [e, f]))
        });
        this.getSlots = J(a, 573, function () {
            return c.j.map(function (e) {
                return (0, C.K)(e.j)
            })
        });
        this.getSlotIdMap = J(a, 574, function () {
            for (var e = {}, f = _.A(c.j), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.getName = J(a, 575, function () {
            return c.getName()
        })
    };
    var Kj = function (a, b, c) {
        ZG.call(this, a, b, c);
        this.notifyUnfilledSlots = J(a, 69, function (d) {
            c.wb && $G(c, aH(c, d))
        });
        this.refreshAllSlots = J(a, 60, function () {
            c.wb && $G(c)
        });
        this.setVideoSession = J(a, 61, function (d, e, f) {
            c.T = e;
            c.L = f;
            "number" === typeof d && (e = hi().j, _.z(e, 29, d))
        });
        this.getDisplayAdsCorrelator = J(a, 62, function (d) {
            return bH(c, d)
        });
        this.getVideoStreamCorrelator = J(a, 63, function () {
            var d = hi().j;
            d = x(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = J(a, 64, function (d) {
            var e = _.t(c.j, "find").call(c.j, function (f) {
                return f.j === d
            });
            return !!e && cH(c, e)
        });
        this.onImplementationLoaded = J(a, 65, function () {
            c.m.info(fG("GPT CompanionAds"))
        });
        this.slotRenderEnded = J(a, 67, function (d, e, f) {
            var g = _.t(c.j, "find").call(c.j, function (h) {
                return h.j === d
            });
            return g && dH(c, g, e, f)
        });
        this.setRefreshUnfilledSlots = J(a, 59, function (d) {
            return c.setRefreshUnfilledSlots(d)
        })
    };
    _.O(Kj, ZG);
    var Mj = function (a, b, c) {
        ZG.call(this, a, b, c);
        this.setContent = J(a, 72, function (d) {
            var e = _.t(c.j, "find").call(c.j, function (f) {
                return f.j === d
            });
            M(b, OG(), e)
        })
    };
    _.O(Mj, ZG);
    var eH = P(["https://console.googletagservices.com/pubconsole/loader.js"]), Yj = B(eH), ck, bk = !1, Tj = !1,
        Vj = !1;
    var Pn = function (a, b) {
        this.getAllEvents = J(a, 563, function () {
            return Tj ? fH(b).slice() : []
        });
        this.getEventsBySlot = J(a, 565, function (c) {
            return Tj ? gH(b, c).slice() : []
        });
        this.getEventsByLevel = J(a, 566, function (c) {
            return Tj ? hH(b, c).slice() : []
        })
    };
    var mk = function (a, b, c, d) {
        var e = this, f = c.getSlotId(), g = hi().j, h = (0, C.K)(gn(hi(), f.getDomId()));
        this.set = J(a, 83, function (k, l) {
            "page_url" === k && l && (k = [gk(hk(new ik, k), [String(l)])], Nc(h, 3, k));
            return e
        });
        this.get = J(a, 84, function (k) {
            if ("page_url" !== k) return null;
            var l, n;
            return null != (n = null == (l = (D = (0, C.K)(h.ta()), _.t(D, "find")).call(D, function (m) {
                return x(m, 1) === k
            })) ? void 0 : ol(l, 2)[0]) ? n : null
        });
        this.setClickUrl = J(a, 79, function (k) {
            "string" === typeof k ? h.setClickUrl(k) : M(b, Ij("Slot.setClickUrl", [k]), f);
            return e
        });
        this.setTargeting = J(a, 81, function (k, l) {
            kk(f, h, k, l, b);
            return e
        });
        this.updateTargetingFromMap = J(a, 85, function (k) {
            lk(f, h, k, b);
            return e
        });
        this.display = J(a, 78, function () {
            iH(d, f, Rh(g, hi().m))
        });
        this.setTagForChildDirectedTreatment = J(a, 80, function (k) {
            if (0 === k || 1 === k) {
                var l = iE(g) || new fE;
                l.setTagForChildDirectedTreatment(k);
                _.Yg(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = J(a, 567, function (k) {
            "boolean" === typeof k ? _.z(h, 12, k) : M(b, Ij("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = J(a, 448, function (k) {
            if (0 === k || 1 === k) {
                var l = iE(g) || new fE;
                l.setTagForUnderAgeOfConsent(k);
                _.Yg(g, 25, l)
            }
            return e
        })
    };
    var Nl = function (a, b) {
        this.push = J(a, 932, function (c) {
            b.push(c)
        })
    };
    var rn = {xh: 0, uh: 1, vh: 2, wh: 3};
    var pk = {REWARDED: 4, TOP_ANCHOR: 2, BOTTOM_ANCHOR: 3, INTERSTITIAL: 5},
        rk = {IAB_AUDIENCE_1_1: 1, IAB_CONTENT_2_1: 2, IAB_CONTENT_2_2: 3}, qk = {PURCHASED: 1, ORGANIC: 2};
    var Mk = function (a) {
        var b = this;
        a = void 0 === a ? hi().j : a;
        this.J = "";
        this.j = this.storage = null;
        this.B = this.l = this.D = !1;
        this.m = function () {
            return !1
        };
        var c = {}, d = {}, e = {};
        this.H = (e[3] = (c[13] = function () {
            return eb.apply(0, arguments).some(function (f) {
                return 0 == b.J.lastIndexOf(f, 0)
            })
        }, c[12] = function () {
            return !!F(a, 6)
        }, c[15] = function (f) {
            return b.m(f)
        }, c[48] = function () {
            return !!b.storage
        }, c[51] = function () {
            return b.D
        }, c[66] = function () {
            try {
                return !!HTMLScriptElement.supports("webbundle")
            } catch (f) {
                return !1
            }
        }, c[67] = function () {
            return b.l
        }, c[68] = function () {
            return b.B
        }, c), e[4] = (d[8] = function (f) {
            var g;
            return null != (g = he(b.storage, Number(f))) ? g : void 0
        }, d[10] = function (f) {
            return b.j ? Dh(f + b.j) % 1E3 : void 0
        }, d), e[5] = {}, e)
    }, jH = function (a, b) {
        b && !a.j && (a.j = _.t(b.split(":"), "find").call(b.split(":"), function (c) {
            return 0 === c.indexOf("ID=")
        }) || null)
    };
    var Pk = function (a, b, c) {
        jF.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.O(Pk, jF);
    Pk.prototype.getSlotId = function () {
        return this.slotId
    };
    var kH = "", vk = null, Bk = _.pr(function () {
        var a, b;
        null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
    });
    var Sd = function (a, b, c, d) {
        jF.call(this, a);
        this.adUnitPath = b;
        this.fb = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.O(Sd, jF);
    ba = Sd.prototype;
    ba.getId = function () {
        return this.id
    };
    ba.getAdUnitPath = function () {
        return this.adUnitPath
    };
    ba.getName = function () {
        return this.adUnitPath
    };
    ba.toString = function () {
        return this.getId()
    };
    ba.getDomId = function () {
        return this.fb
    };
    var lH = function (a, b) {
        a.j = b
    };
    var Hk = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var mH = _.pr(function () {
        return void wv("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
    }), nH = _.pr(function () {
        return void wv("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
    }), oH = _.pr(function () {
        return void wv("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
    }), pH = function () {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function () {
                mH();
                return !0
            }, set: function () {
                mH()
            }, configurable: !0
        })
    }, Rk = function (a, b, c, d, e) {
        ZG.call(this, a, b, c);
        var f = this, g = hi().j, h = hi().m, k = !1;
        this.setTargeting = J(a, 1, function (l, n) {
            var m = null;
            "string" === typeof n ? m = [n] : Array.isArray(n) ? m = n : ua(n) && (m = _.t(Array, "from").call(Array, n));
            var p = "string" === typeof l && !ek(l);
            m = m && ya(m);
            var r, u = null != (r = null == m ? void 0 : m.every(function (w) {
                return "string" === typeof w
            })) ? r : !1;
            if (!p || !u) return M(b, Ij("PubAdsService.setTargeting", [l, n])), f;
            n = m;
            p = (D = ae(g, ik, 2), _.t(D, "find")).call(D, function (w) {
                return x(w, 1) === l
            });
            if ("gpt-beta" === l) {
                if (c.B) return M(b, BG(n.join())), f;
                if (p) return M(b, CG(n.join())), f;
                n = Nk(n, e)
            }
            p ? gk(p, n) : (p = gk(hk(new ik, l), n), ef(g, 2, ik, p));
            b.info(jk(l, n.join(), c.getName()));
            return f
        });
        this.clearTargeting = J(a, 2, function (l) {
            if (void 0 === l) return Nc(g, 2), b.info(zG(c.getName())), f;
            if ("gpt-beta" === l) return M(b, DG(l)), f;
            var n = ae(g, ik, 2), m = _.t(n, "findIndex").call(n, function (p) {
                return x(p, 1) === l
            });
            if (0 > m) return M(b, sG(l, c.getName())), f;
            n.splice(m, 1);
            Nc(g, 2, n);
            b.info(rG(l, c.getName()));
            return f
        });
        this.getTargeting = J(a, 38, function (l) {
            if ("string" !== typeof l) return M(b, Ij("PubAdsService.getTargeting", [l])), [];
            var n = (D = ae(g, ik, 2), _.t(D, "find")).call(D, function (m) {
                return x(m, 1) === l
            });
            return n ? ol(n, 2).slice() : []
        });
        this.getTargetingKeys = J(a, 39, function () {
            return ae(g, ik, 2).map(function (l) {
                return (0, C.K)(x(l, 1))
            })
        });
        this.setCategoryExclusion = J(a, 3, function (l) {
            if ("string" !== typeof l || ek(l)) return M(b, Ij("PubAdsService.setCategoryExclusion", [l])), f;
            (D = ol(g, 3), _.t(D, "includes")).call(D, l) || vs(g, 3, l);
            b.info(tG(l));
            return f
        });
        this.clearCategoryExclusions = J(a, 4, function () {
            _.z(g, 3, mc);
            b.info(uG());
            return f
        });
        this.disableInitialLoad = J(a, 5, function () {
            _.z(g, 4, !0);
            k || (k = !0, pH())
        });
        this.enableSingleRequest = J(a, 6, function () {
            if (c.B && !F(g, 6)) return M(b, hG("PubAdsService.enableSingleRequest")), !1;
            b.info(iG("single request"));
            _.z(g, 6, !0);
            return !0
        });
        this.enableAsyncRendering = J(a, 7, function () {
            return !0
        });
        this.enableSyncRendering = J(a, 8, function () {
            wv("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
            return !1
        });
        this.enableLazyLoad = J(a, 485, function (l) {
            var n = new Cp;
            n = _.z(n, 1, 800);
            n = _.z(n, 2, 400);
            n = bE(n, 3);
            if (_.ka(l)) {
                var m = l.fetchMarginPercent;
                "number" === typeof m && (0 <= m ? _.z(n, 1, m) : -1 === m && Le(n, 1));
                m = l.renderMarginPercent;
                "number" === typeof m && (0 <= m ? _.z(n, 2, m) : -1 === m && Le(n, 2));
                l = l.mobileScaling;
                "number" === typeof l && (0 < l ? bE(n, l) : -1 === l && bE(n, 1))
            }
            _.Yg(g, 5, n)
        });
        this.setCentering = J(a, 9, function (l) {
            l = !!l;
            b.info(jG("centering", String(l)));
            _.z(g, 15, l)
        });
        this.definePassback = J(a, 10, function (l, n) {
            return (l = Qk(a, b, c, l, n, d)) && l.qe
        });
        this.refresh = J(a, 11, function () {
            var l = eb.apply(0, arguments), n = _.A(l), m = n.next().value;
            n = n.next().value;
            n = void 0 === n ? {} : n;
            m && !Array.isArray(m) || !_.ka(n) || n.changeCorrelator && "boolean" !== typeof n.changeCorrelator ? M(b, Ij("PubAdsService.refresh", l)) : (n && !1 === n.changeCorrelator || g.setCorrelator(Av()), m = m ? Kk(m, c) : c.j, c.refresh(Rh(g, h), m) || M(b, Ij("PubAdsService.refresh", l)))
        });
        this.enableVideoAds = J(a, 12, function () {
            _.z(g, 21, !0);
            qH(c, g)
        });
        this.setVideoContent = J(a, 13, function (l, n) {
            var m = _.z(g, 21, !0);
            l = _.z(m, 22, String(null != l ? l : ""));
            _.z(l, 23, String(null != n ? n : ""));
            qH(c, g)
        });
        this.collapseEmptyDivs = J(a, 14, function (l) {
            l = void 0 === l ? !1 : l;
            _.z(g, 11, !0);
            l = !!l;
            _.z(g, 10, l);
            b.info(pG(String(l)));
            return !!F(g, 11)
        });
        this.clear = J(a, 15, function (l) {
            if (Array.isArray(l)) return rH(c, g, h, Kk(l, c));
            if (void 0 === l) return rH(c, g, h, c.j);
            M(b, Ij("PubAdsService.clear", [l]));
            return !1
        });
        this.setLocation = J(a, 16, function (l) {
            if ("string" !== typeof l) return M(b, Ij("PubAdsService.setLocation", [l])), f;
            _.z(g, 8, l);
            return f
        });
        this.setCookieOptions = J(a, 17, function () {
            nH();
            return f
        });
        this.setTagForChildDirectedTreatment = J(a, 18, function (l) {
            oH();
            if (1 !== l && 0 !== l) return M(b, KG("PubadsService.setTagForChildDirectedTreatment", Dk(l), "0,1")), f;
            var n = iE(g) || new fE;
            n.setTagForChildDirectedTreatment(l);
            _.Yg(g, 25, n);
            return f
        });
        this.clearTagForChildDirectedTreatment = J(a, 19, function () {
            oH();
            var l = iE(g);
            if (!l) return f;
            l.clearTagForChildDirectedTreatment();
            _.Yg(g, 25, l);
            return f
        });
        this.setPublisherProvidedId = J(a, 20, function (l) {
            l = String(l);
            b.info(jG("PPID", l));
            _.z(g, 16, l);
            return f
        });
        this.set = J(a, 21, function (l, n) {
            if ("string" !== typeof l || !l.length || void 0 === IF()[l] || "string" !== typeof n) return M(b, Ij("PubAdsService.set", [l, n])), f;
            var m = (D = g.ta(), _.t(D, "find")).call(D, function (p) {
                return x(p, 1) === l
            });
            m ? gk(m, [n]) : (m = aE(hk(new ik, l), n), ef(g, 14, ik, m));
            b.info(dG(l, String(n), c.getName()));
            return f
        });
        this.get = J(a, 22, function (l) {
            if ("string" !== typeof l) return M(b, Ij("PubAdsService.get", [l])), null;
            var n = (D = g.ta(), _.t(D, "find")).call(D, function (m) {
                return x(m, 1) === l
            });
            return (n = n && ol(n, 2)) ? n[0] : null
        });
        this.getAttributeKeys = J(a, 23, function () {
            return g.ta().map(function (l) {
                return (0, C.K)(x(l, 1))
            })
        });
        this.display = J(a, 24, function (l, n, m, p) {
            return void c.display(l, n, d, m, p)
        });
        this.updateCorrelator = J(a, 25, function () {
            wv(Jk("update"));
            M(b, GG());
            g.setCorrelator(Av());
            return f
        });
        this.defineOutOfPagePassback = J(a, 35, function (l) {
            l = Qk(a, b, c, l, [1, 1], d);
            if (!l) return null;
            _.z(l.Ya, 15, 1);
            return l.qe
        });
        this.setForceSafeFrame = J(a, 36, function (l) {
            if ("boolean" !== typeof l) return M(b, Ij("PubAdsService.setForceSafeFrame", [Dk(l)])), f;
            _.z(g, 13, l);
            return f
        });
        this.setSafeFrameConfig = J(a, 37, function (l) {
            var n = Ek(b, l);
            if (!n) return M(b, Ij("PubAdsService.setSafeFrameConfig", [l])), f;
            _.Yg(g, 18, n);
            return f
        });
        this.setRequestNonPersonalizedAds = J(a, 445, function (l) {
            oH();
            if (0 !== l && 1 !== l) return M(b, KG("PubAdsService.setRequestNonPersonalizedAds", Dk(l), "0,1")), f;
            var n = iE(g) || new fE;
            _.z(n, 8, !!l);
            _.Yg(g, 25, n);
            return f
        });
        this.setTagForUnderAgeOfConsent = J(a, 447, function (l) {
            l = void 0 === l ? 2 : l;
            oH();
            if (2 !== l && 0 !== l && 1 !== l) return M(b, KG("PubadsService.setTagForUnderAgeOfConsent", Dk(l), "2,0,1")), f;
            var n = iE(g) || new fE;
            n.setTagForUnderAgeOfConsent(l);
            _.Yg(g, 25, n);
            return f
        });
        this.getCorrelator = J(a, 27, function () {
            return String(x(g, 26))
        });
        this.getTagSessionCorrelator = J(a, 631, function () {
            return Be(_.q)
        });
        this.getVideoContent = J(a, 30, function () {
            return sH(c, g)
        });
        this.getVersion = J(a, 568, function () {
            return a.tb ? String(a.tb) : a.Ga
        });
        this.forceExperiment = J(a, 569, function (l) {
            return void c.forceExperiment(l)
        });
        this.setCorrelator = J(a, 28, function (l) {
            wv(Jk("set"));
            M(b, FG());
            if (Ih(window)) return f;
            if (!bl(l)) return M(b, Ij("PubadsService.setCorrelator", [Dk(l)])), f;
            l = g.setCorrelator(l);
            _.z(l, 27, !0);
            return f
        });
        this.markAsAmp = J(a, 570, function () {
            window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
        });
        this.isSRA = J(a, 571, function () {
            return !!F(g, 6)
        });
        this.setImaContent = J(a, 328, function (l, n) {
            if (null != x(g, 22)) {
                var m = _.z(g, 21, !0);
                l = _.z(m, 22, String(null != l ? l : ""));
                _.z(l, 23, String(null != n ? n : ""));
                qH(c, g)
            } else _.z(g, 21, !0), qH(c, g), "string" === typeof l && _.z(g, 19, l), "string" === typeof n && _.z(g, 20, n)
        });
        this.getImaContent = J(a, 329, function () {
            return null != x(g, 22) ? sH(c, g) : c.B ? {vid: x(g, 19) || "", cmsid: x(g, 20) || ""} : null
        });
        this.isInitialLoadDisabled = J(a, 572, function () {
            return !!F(g, 4)
        });
        this.setPrivacySettings = J(a, 648, function (l) {
            if (!_.ka(l)) return M(b, Ij("PubAdsService.setPrivacySettings", [l])), f;
            var n = l.restrictDataProcessing, m = l.childDirectedTreatment, p = l.underAgeOfConsent, r = l.limitedAds,
                u = l.nonPersonalizedAds, w = l.userOptedOutOfPersonalization, E = l.trafficSource, N,
                G = null != (N = iE(g)) ? N : new fE;
            "boolean" === typeof u ? _.z(G, 8, u) : void 0 !== u && M(b, Ck("PubAdsService.setPrivacySettings", Dk(l), "nonPersonalizedAds", Dk(u)));
            "boolean" === typeof w ? _.z(G, 13, w) : void 0 !== w && M(b, Ck("PubAdsService.setPrivacySettings", Dk(l), "userOptedOutOfPersonalization", Dk(w)));
            "boolean" === typeof n ? _.z(G, 1, n) : void 0 !== n && M(b, Ck("PubAdsService.setPrivacySettings", Dk(l), "restrictDataProcessing", Dk(n)));
            "boolean" === typeof r ? (n = Ik(), r && !F(G, 9) && a.qc && (u = a.xb, w = Zg(a), N = new Uv, N = _.y(N, 1, !0, !1), N = _.y(N, 2, n, !1), w = ah(w, 11, bh, N), Ld(u, w)), n ? _.z(G, 9, r) : r && M(b, YG())) : void 0 !== r && M(b, Ck("PubAdsService.setPrivacySettings", Dk(l), "limitedAds", Dk(r)));
            void 0 !== p && (null === p ? G.setTagForUnderAgeOfConsent(2) : !1 === p ? G.setTagForUnderAgeOfConsent(0) : !0 === p ? G.setTagForUnderAgeOfConsent(1) : M(b, Ck("PubAdsService.setPrivacySettings", Dk(l), "underAgeOfConsent", Dk(p))));
            void 0 !== m && (null === m ? G.clearTagForChildDirectedTreatment() : !1 === m ? G.setTagForChildDirectedTreatment(0) : !0 === m ? G.setTagForChildDirectedTreatment(1) : M(b, Ck("PubAdsService.setPrivacySettings", Dk(l), "childDirectedTreatment", Dk(m))));
            void 0 !== E && (null === E ? Le(G, 10) : (D = _.t(Object, "values").call(Object, qk), _.t(D, "includes")).call(D, E) ? _.z(G, 10, E) : M(b, Ck("PubAdsService.setPrivacySettings", Dk(l), "trafficSource", Dk(E))));
            _.Yg(g, 25, G);
            return f
        })
    };
    _.O(Rk, ZG);
    var Qn = function (a, b) {
        var c = this, d = [], e = [];
        this.addSize = _.dh(a, 88, function (f, g) {
            var h;
            if (h = Vk(f)) h = Uk(g) || Array.isArray(g) && g.every(Uk);
            h ? d.push([f, g]) : (e.push([f, g]), M(b, Ij("SizeMappingBuilder.addSize", [f, g])));
            return c
        });
        this.build = _.dh(a, 89, function () {
            if (e.length) return M(b, bG(Dk(e))), null;
            sa(d);
            return d
        })
    };
    var tH = function (a, b) {
        this.getId = J(a, 593, function () {
            return b.getId()
        });
        this.getAdUnitPath = J(a, 594, function () {
            return b.getAdUnitPath()
        });
        this.getName = J(a, 595, function () {
            return b.getName()
        });
        this.toString = J(a, 596, function () {
            return b.toString()
        });
        this.getDomId = J(a, 597, function () {
            return b.getDomId()
        })
    };
    var wh = function (a) {
        _.S.call(this, a, -1, uH)
    };
    _.O(wh, _.S);
    var uH = [2];
    var wH = function (a) {
        _.S.call(this, a, -1, vH)
    };
    _.O(wH, _.S);
    wH.prototype.getAdUnitPath = function () {
        return x(this, 1)
    };
    wH.prototype.getDomId = function () {
        return x(this, 2)
    };
    var xH = function (a, b) {
        _.z(a, 2, b)
    };
    wH.prototype.ta = function () {
        return ae(this, ik, 3)
    };
    var yH = function (a, b) {
        Nc(a, 5, b)
    };
    wH.prototype.getClickUrl = function () {
        return x(this, 7)
    };
    wH.prototype.setClickUrl = function (a) {
        return _.z(this, 7, a)
    };
    var fk = function (a) {
        return ae(a, ik, 9)
    };
    wH.prototype.Ta = function () {
        return Qe(this, zk, 13)
    };
    var Yl = function (a) {
        return ce(a, 15, 0)
    }, hn = function (a, b) {
        ef(a, 27, Pt, b)
    }, zH = function (a) {
        a = wc(a, x(a, 26), Mb(a.fa));
        return null == a ? a : a
    }, vH = [3, 4, 5, 6, 8, 9, 27];
    var AH = function () {
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
        this.isBackfill = !1;
        this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
    }, BH = function (a, b) {
        a.advertiserId = b
    }, CH = function (a, b) {
        a.campaignId = b
    }, DH = function (a, b) {
        a.yieldGroupIds = b
    }, EH = function (a, b) {
        a.companyIds = b
    };
    var FH = function (a, b) {
        this.width = a;
        this.height = b
    };
    FH.prototype.getWidth = function () {
        return this.width
    };
    FH.prototype.getHeight = function () {
        return this.height
    };
    var el = function (a, b, c) {
        var d = this, e = (0, C.K)(gn(hi(), c.getDomId())), f = "", g = null, h = function () {
            return ""
        }, k = "", l = !1;
        _.Km(c, function () {
            e = new wH;
            f = "";
            g = null;
            h = function () {
                return ""
            };
            k = ""
        });
        lF(c, So, function (m) {
            var p = m.detail;
            m = p.Xd;
            p = p.isBackfill;
            m && (f = m, l = p)
        });
        this.set = J(a, 40, function (m, p) {
            if ("string" !== typeof m || "string" !== typeof p || void 0 === IF()[m]) return M(b, Ij("Slot.set", [m, p]), c), d;
            var r = (D = e.ta(), _.t(D, "find")).call(D, function (u) {
                return x(u, 1) === m
            });
            r ? gk(r, [p]) : (r = hk(new ik, m), aE(r, p), ef(e, 3, ik, r));
            return d
        });
        this.get = J(a, 41, function (m) {
            if ("string" !== typeof m) return M(b, Ij("Slot.get", [m]), c), null;
            var p = (D = e.ta(), _.t(D, "find")).call(D, function (r) {
                return x(r, 1) === m
            });
            return (p = p && ol(p, 2)) ? p[0] : null
        });
        this.getAttributeKeys = J(a, 42, function () {
            return e.ta().map(function (m) {
                return (0, C.K)(x(m, 1))
            })
        });
        this.addService = J(a, 43, function (m) {
            m = Cj.get(m);
            if (!m) return M(b, Ij("Slot.addService", [m]), c), d;
            var p = m.getName();
            if ((D = ol(e, 4), _.t(D, "includes")).call(D, p)) return b.info(RF(p, c.toString()), c), d;
            m.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = J(a, 44, function (m) {
            try {
                var p = e;
                if (!Array.isArray(m)) throw new cl("Size mapping must be an array");
                var r = m.map(dl);
                Nc(p, 6, r)
            } catch (u) {
                m = u, hh(a, 44, m), wv("Incorrect usage of googletag.Slot defineSizeMapping: " + m.message)
            }
            return d
        });
        this.setClickUrl = J(a, 45, function (m) {
            if ("string" !== typeof m) return M(b, Ij("Slot.setClickUrl", [m]), c), d;
            e.setClickUrl(m);
            return d
        });
        this.setCategoryExclusion = J(a, 46, function (m) {
            "string" !== typeof m || ek(m) ? M(b, Ij("Slot.setCategoryExclusion", [m]), c) : ((D = ol(e, 8), _.t(D, "includes")).call(D, m) || vs(e, 8, m), b.info(SF(m), c));
            return d
        });
        this.clearCategoryExclusions = J(a, 47, function () {
            _.z(e, 8, mc);
            b.info(TF(), c);
            return d
        });
        this.getCategoryExclusions = J(a, 48, function () {
            return ol(e, 8).slice()
        });
        this.setTargeting = J(a, 49, function (m, p) {
            kk(c, e, m, p, b);
            return d
        });
        this.updateTargetingFromMap = J(a, 649, function (m) {
            lk(c, e, m, b);
            return d
        });
        this.clearTargeting = J(a, 50, function (m) {
            if (void 0 === m) return Nc(e, 9), b.info(UF(c.getAdUnitPath()), c), d;
            var p = fk(e), r = _.t(p, "findIndex").call(p, function (u) {
                return x(u, 1) === m
            });
            if (0 > r) return M(b, sG(m, c.getAdUnitPath()), c), d;
            p.splice(r, 1);
            Nc(e, 9, p);
            b.info(yG(m, c.getAdUnitPath()), c);
            return d
        });
        this.getTargeting = J(a, 51, function (m) {
            if ("string" !== typeof m) return M(b, Ij("Slot.getTargeting", [m]), c), [];
            var p = (D = fk(e), _.t(D, "find")).call(D, function (r) {
                return x(r, 1) === m
            });
            return p ? ol(p, 2).slice() : []
        });
        this.getTargetingKeys = J(a, 52, function () {
            return fk(e).map(function (m) {
                return (0, C.K)(x(m, 1))
            })
        });
        this.setCollapseEmptyDiv = J(a, 53, function (m, p) {
            p = void 0 === p ? !1 : p;
            if ("boolean" !== typeof m || "boolean" !== typeof p) return M(b, Ij("Slot.setCollapseEmptyDiv", [m, p]), c), d;
            _.z(e, 10, m);
            _.z(e, 11, m && p);
            p && !m && M(b, VF(c.toString()), c);
            return d
        });
        this.getAdUnitPath = J(a, 54, function () {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = J(a, 598, function () {
            return c.getDomId()
        });
        this.setForceSafeFrame = J(a, 55, function (m) {
            if ("boolean" !== typeof m) return M(b, Ij("Slot.setForceSafeFrame", [String(m)]), c), d;
            _.z(e, 12, m);
            return d
        });
        this.setSafeFrameConfig = J(a, 56, function (m) {
            var p = Ek(b, m);
            if (!p) return b.error(Ij("Slot.setSafeFrameConfig", [m]), c), d;
            _.Yg(e, 13, p);
            return d
        });
        lF(c, oF, function (m) {
            m = m.detail;
            if (F(m, 8)) g = null; else {
                g = new AH;
                var p = !!F(m, 9);
                g.isBackfill = p;
                var r = pc(m, 15, Zb), u = pc(m, 16, Zb);
                r.length && u.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = u[0], p || (g.creativeId = r[0], g.lineItemId = u[0], (p = pc(m, 22, Zb)) && p.length && (g.creativeTemplateId = p[0])));
                pc(m, 17, Zb).length && BH(g, pc(m, 17, Zb)[0]);
                pc(m, 18, Zb).length && CH(g, pc(m, 18, Zb)[0]);
                pc(m, 19, Zb).length && DH(g, pc(m, 19, Zb));
                pc(m, 20, Zb).length && EH(g, pc(m, 20, Zb));
                m = pc(m, 45, Hb(m.fa) & 18 ? qc : rc).map(function (w) {
                    return Bc(w)
                });
                m.length && (g.encryptedTroubleshootingInfo = m[0])
            }
        });
        this.getResponseInformation = J(a, 355, function () {
            return g
        });
        this.getName = J(a, 170, function () {
            b.error(WG());
            return c.getAdUnitPath()
        });
        var n = new tH(a, c);
        this.getSlotId = J(a, 579, function () {
            return n
        });
        this.getServices = J(a, 580, function () {
            return ol(e, 4).map(function (m) {
                var p = ZD[m];
                if (p) {
                    var r, u, w;
                    m = null != (w = null == (u = (r = Oj())[p]) ? void 0 : u.call(r)) ? w : null
                } else m = null;
                return m
            })
        });
        this.getSizes = J(a, 581, function (m, p) {
            var r, u;
            return null != (u = null == (r = zh(e, m, p)) ? void 0 : r.map(function (w) {
                return F(w, 3) ? "fluid" : new FH(w.getWidth(), w.getHeight())
            })) ? u : null
        });
        this.getClickUrl = J(a, 582, function () {
            var m;
            return null != (m = e.getClickUrl()) ? m : ""
        });
        this.getTargetingMap = J(a, 583, function () {
            for (var m = {}, p = _.A(fk(e)), r = p.next(); !r.done; r = p.next()) r = r.value, x(r, 1) && (m[x(r, 1)] = ol(r, 2));
            return m
        });
        this.getOutOfPage = J(a, 584, function (m) {
            return "number" === typeof m ? Yl(e) === m : 0 !== Yl(e)
        });
        this.getCollapseEmptyDiv = J(a, 585, function () {
            return Fk(e, 10) ? F(e, 10) : null
        });
        this.getDivStartsCollapsed = J(a, 586, function () {
            return Fk(e, 11) ? F(e, 11) : null
        });
        lF(c, pF, function (m) {
            h = m.detail.Xe
        });
        this.getContentUrl = J(a, 587, function () {
            return h()
        });
        this.getFirstLook = J(a, 588, function () {
            wv("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        lF(c, oF, function (m) {
            var p;
            k = null != (p = m.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = J(a, 591, function () {
            return k
        });
        this.getHtml = J(a, 592, function () {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = J(a, 1022, function (m) {
            var p = zH(e);
            if (void 0 !== m.componentAuction) {
                m = _.A(m.componentAuction);
                for (var r = m.next(); !r.done; r = m.next()) {
                    var u = r.value;
                    r = u.configKey;
                    u = u.auctionConfig;
                    "string" !== typeof r || ek(r) || (null === u ? p.delete(r) : u && p.set(r, JSON.stringify(u)))
                }
            }
        })
    };
    var GH = function (a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.o = b;
        this.l = c;
        this.C = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.A = new bz
    };
    _.O(GH, Z);
    GH.prototype.j = function () {
        nl(this.pbjs, this.o, this.l, this.C, this.requestBidsConfig);
        this.A.notify()
    };
    var HH = function (a, b, c) {
        Z.call(this, a, 937, _.Ee(Rw));
        this.window = c;
        this.Ja = W(this);
        this.l = W(this);
        this.C = W(this);
        this.o = W(this);
        this.Ra = W(this);
        this.Za = W(this);
        this.F = hz(this, b)
    };
    _.O(HH, Z);
    HH.prototype.j = function () {
        if (this.window.top !== this.window) IH(this); else {
            var a = this.F.value;
            if (a) {
                var b = {}, c;
                if (null == (c = Qe(a, Ft, 2)) ? 0 : pp(c, 2)) b["*"] = {mc: !0};
                c = new v.Set;
                for (var d = _.A(ae(a, Et, 1)), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    for (var f = _.A([bf(e, 2), bf(e, 1)].filter(function (r) {
                        return !!r
                    })), g = f.next(); !g.done; g = f.next()) b[g.value] = {mc: pp(e, 3)};
                    e = _.A(en(e, 4));
                    for (f = e.next(); !f.done; f = e.next()) c.add(f.value)
                }
                this.Ja.G(b);
                this.l.G([].concat(_.Jd(c)));
                var h, k;
                b = null == (h = Qe(a, Ft, 2)) ? void 0 : null == (k = Qe(h, yt, 1)) ? void 0 : ae(k, wt, 1);
                Vy(this.C, (null == b ? 0 : b.length) ? b : null);
                var l;
                this.Ra.G(!(null == (l = Qe(a, Ft, 2)) || !pp(l, 4)));
                var n;
                this.Za.G(!(null == (n = Qe(a, Ft, 2)) || !pp(n, 5)));
                var m, p;
                a = null == (m = Qe(a, Ft, 2)) ? void 0 : null == (p = Qe(m, yt, 3)) ? void 0 : ae(p, wt, 1);
                Vy(this.o, (null == a ? 0 : a.length) ? a : null)
            } else IH(this)
        }
    };
    var IH = function (a) {
        a.Ja.G({});
        a.l.G([]);
        Wy(a.C);
        a.Ra.G(!1);
        a.Za.G(!1);
        Wy(a.o)
    };
    HH.prototype.H = function (a) {
        this.m(a)
    };
    HH.prototype.m = function () {
        IH(this)
    };
    var JH = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/, KH = function (a, b, c, d, e, f, g, h, k, l, n, m) {
        Z.call(this, a, 920);
        this.O = b;
        this.V = c;
        this.ub = d;
        this.F = W(this);
        this.L = W(this);
        this.l = W(this);
        this.o = W(this);
        this.R = [];
        this.C = new v.Map;
        this.ka = X(this, e);
        this.da = new az(f);
        this.W = X(this, g);
        this.ba = Y(this, h);
        this.Z = X(this, k);
        this.oa = X(this, l);
        this.ma = Y(this, n);
        m && (this.ja = Y(this, m))
    };
    _.O(KH, Z);
    KH.prototype.j = function () {
        if (LH(this)) {
            var a = this.da.value;
            if (a && a.libLoaded) if ("function" !== typeof a.getEvents) this.O.error(MG()), MH(this); else {
                var b = NH(this, a);
                a = b.rf;
                b = b.sf;
                a ? (this.l.G(a), Vy(this.o, b), this.F.G(this.C), this.L.G(this.R)) : MH(this)
            } else MH(this)
        } else MH(this)
    };
    KH.prototype.H = function (a) {
        this.m(a)
    };
    KH.prototype.m = function (a) {
        this.O.error(NG(a.message));
        MH(this)
    };
    var MH = function (a) {
        a.l.G([]);
        Wy(a.o);
        Wy(a.F);
        Wy(a.L)
    }, NH = function (a, b) {
        var c = (0, C.K)(b.getEvents)(), d = c.filter(function (g) {
            var h = g.args;
            return "auctionEnd" === g.eventType && h.auctionId
        }), e = !1, f = a.ka.value.map(function (g) {
            var h = new st, k = function (Ea) {
                return Ea === g.getDomId() || Ea === g.getAdUnitPath()
            }, l, n = null != (l = OH.get(g)) ? l : 0, m;
            l = null != (m = d.filter(function (Ea) {
                var ta, Oa, Ia;
                return Number(null == (ta = Ea.args) ? void 0 : ta.timestamp) > n && (null == (Oa = Ea.args) ? void 0 : null == (Ia = Oa.adUnitCodes) ? void 0 : _.t(Ia, "find").call(Ia, k))
            })) ? m : [];
            if (!l.length) return a.R.push(g), [g, h];
            var p;
            m = null == (p = l.reduce(function (Ea, ta) {
                return Number(ta.args.timestamp) > Number(Ea.args.timestamp) ? ta : Ea
            })) ? void 0 : p.args;
            if (!m) return [g, h];
            var r = void 0 === m.bidderRequests ? [] : m.bidderRequests;
            p = void 0 === m.bidsReceived ? [] : m.bidsReceived;
            var u = m.auctionId;
            m = m.timestamp;
            if (!u || null == m || !r.length) return [g, h];
            OH.has(g) || _.Km(g, function () {
                return OH.delete(g)
            });
            OH.set(g, m);
            m = tt(h);
            Math.random() < _.Ee(lw) && b.version && JH.test(b.version) && _.z(m, 6, b.version);
            _.Yg(m, 9, a.ma.value);
            l = Zh(function () {
                return Ll(c, u)
            });
            var w = fk(a.V[g.getDomId()]), E = {};
            r = _.A(r);
            for (var N = r.next(); !N.done; E = {ed: E.ed, gd: E.gd}, N = r.next()) {
                var G = N.value;
                E.ed = G.bidderCode;
                var R = G.bids;
                N = G.timeout;
                E.gd = G.src;
                G = G.auctionStart;
                var T = {};
                R = _.A(R);
                for (var Q = R.next(); !Q.done; T = {Nb: T.Nb}, Q = R.next()) {
                    var aa = Q.value;
                    T.Nb = aa.bidId;
                    var ca = aa.transactionId;
                    Q = aa.adUnitCode;
                    var ma = aa.getFloor;
                    aa = aa.mediaTypes;
                    if (T.Nb && k(Q)) {
                        e = !0;
                        xl(m, g, Q);
                        ca && (null != x(m, 4) || _.z(m, 4, ca), a.C.has(ca) || a.C.set(ca, G));
                        null != x(m, 8) || _.z(m, 8, N);
                        var Ba = _.t(p, "find").call(p, function (Ea) {
                            return function (ta) {
                                return ta.requestId === Ea.Nb
                            }
                        }(T));
                        ca = ql(m, function (Ea) {
                            return function () {
                                var ta = tl(new ul, Ea.ed);
                                switch (Ea.gd) {
                                    case "client":
                                        _.z(ta, 7, 1);
                                        break;
                                    case "s2s":
                                        _.z(ta, 7, 2)
                                }
                                return ta
                            }
                        }(E)());
                        Al(m, ca, Q, a.ba.value, a.Z.value, a.oa.value, ma);
                        Ba ? (sl(ca, 1), "number" === typeof Ba.timeToRespond && vl(ca, Ba.timeToRespond), Q = pl(Ba, w, aa), rl(ca, Q)) : (Q = l().get(T.Nb)) && !Q.ie ? vl(sl(ca, 2), Math.round(Q.latency)) : vl(sl(ca, 3), N)
                    }
                }
            }
            var Na;
            (null == (Na = b.getConfig) ? 0 : Na.call(b).useBidCache) && wl(m, g, u, w, b);
            return [g, h]
        });
        return {
            rf: e ? f.map(function (g) {
                return g[1]
            }) : [], sf: e ? new v.Map(f) : null
        }
    }, LH = function (a) {
        var b = a.W.value, c, d;
        return !(null == (c = a.ja) || !c.value) || !(null == (d = b["*"]) || !d.mc) || a.ub.split(",").some(function (e) {
            var f;
            return !(null == (f = b[e]) || !f.mc)
        })
    }, OH = new v.Map;
    var PH, QH = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 1019);
        this.V = g;
        this.l = new az(b);
        this.C = new az(c);
        this.F = new az(d);
        this.o = Y(this, e);
        this.L = Y(this, f)
    };
    _.O(QH, Z);
    QH.prototype.j = function () {
        RH(this);
        SH(this)
    };
    var SH = function (a) {
        if (!(Math.random() >= _.Ee(jw))) {
            var b = (a.L.value || []).filter(function (k) {
                return fk(a.V[k.getDomId()]).some(function (l) {
                    return "hb_pb" === x(l, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, g,
                    h = (null == (c = a.l.value) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Jd(new v.Set(null == (e = a.l.value) ? void 0 : e.adUnits.map(function (k) {
                        return k.code
                    })))) : _.t(Object, "keys").call(Object, (null == (f = a.l.value) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                c = new Uj("haux");
                K(c, "ius", b.map(function (k) {
                    return k.getAdUnitPath()
                }).join("~"));
                K(c, "dids", b.map(function (k) {
                    return k.getDomId()
                }).join("~"));
                K(c, "paucs", h.join("~"));
                ui(c, a.context);
                Wj(c)
            }
        }
    }, RH = function (a) {
        oi("ppc_hrc", function (b) {
            var c;
            null != PH || (PH = (0, C.ra)(null == (c = (D = window.google_js_reporting_queue = window.google_js_reporting_queue || [], _.t(D, "find")).call(D, function (g) {
                return "1" === g.label
            })) ? void 0 : c.value));
            var d = te("navigationStart", window);
            PH && K(b, "lt", PH);
            var e;
            K(b, "tids", [].concat(_.Jd((null == (e = a.o.value) ? void 0 : _.t(e, "keys").call(e)) || [])).join());
            var f;
            K(b, "asts", [].concat(_.Jd((null == (f = a.o.value) ? void 0 : _.t(f, "values").call(f)) || [])).map(function (g) {
                return g - d
            }).join());
            a.C.value ? K(b, "ht", a.C.value - d) : a.F.value && K(b, "ht", 0);
            ui(b, a.context)
        }, a.o.value ? _.Ee(iw) : 0)
    };
    var tp = function (a, b, c, d, e) {
        Z.call(this, a, 982);
        this.l = Y(this, b);
        this.C = new az(c);
        this.F = X(this, d);
        this.o = X(this, e)
    };
    _.O(tp, Z);
    tp.prototype.j = function () {
        var a = this, b = this.C.value;
        if (this.l.value && null != b && b.onEvent) for (var c = {}, d = _.A(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), e = d.next(); !e.done; c = {
            Ob: c.Ob,
            yc: c.yc
        }, e = d.next()) c.Ob = e.value, c.yc = function (f) {
            return function (g) {
                if (a.l.value === g.adId) {
                    var h = new Uj("hbm_brt");
                    ui(h, a.context);
                    K(h, "et", f.Ob);
                    K(h, "sf", a.F.value);
                    K(h, "qqid", a.o.value);
                    var k, l, n;
                    K(h, "bc", String(null != (n = null != (l = g.bidderCode) ? l : null == (k = g.bid) ? void 0 : k.bidder) ? n : ""));
                    Wj(h)
                }
            }
        }(c), b.onEvent(c.Ob, c.yc), _.Km(this, function (f) {
            return function () {
                return void _.kh(a.context, a.id, function () {
                    var g;
                    return void (null == (g = b.offEvent) ? void 0 : g.call(b, f.Ob, f.yc))
                }, !0)
            }
        }(c))
    };
    tp.prototype.m = function () {
    };
    var TH = function (a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        iz(this, b);
        iz(this, c)
    };
    _.O(TH, Z);
    TH.prototype.j = function () {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var UH = function (a, b, c, d, e, f) {
        Z.call(this, a, 981);
        this.pbjs = b;
        this.l = c;
        this.o = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.A = new bz
    };
    _.O(UH, Z);
    UH.prototype.j = function () {
        var a, b, c = null != (b = null == (a = this.l) ? void 0 : a.get("*")) ? b : _.Ee(mw);
        if (c) this.nb(c); else {
            var d, e, f, g;
            a = null != (g = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? g : [];
            d = _.A(a);
            for (e = d.next(); !e.done; e = d.next()) if (e = e.value.code) c = b = a = g = void 0, f = null != (g = null != (a = null == (c = this.l) ? void 0 : c.get(_.H(hl) ? gl(e) : e)) ? a : null == (b = this.l) ? void 0 : b.get(Dh(e))) ? g : 0, this.nb(f)
        }
        this.A.notify()
    };
    UH.prototype.nb = function (a) {
        var b;
        null != (b = this.o) && _.z(b, 2, this.C);
        if (a) {
            var c;
            null != (c = this.o) && _.z(c, 1, 1);
            if (!this.C) {
                this.requestBidsConfig.timeout = a;
                var d, e, f;
                b = _.A(null != (f = null == (e = (d = this.pbjs).getConfig) ? void 0 : e.call(d).s2sConfig) ? f : []);
                for (d = b.next(); !d.done; d = b.next()) d.value.timeout = a;
                var g, h;
                null == (h = (g = this.pbjs).setConfig) || h.call(g, {bidderTimeout: a})
            }
        }
    };
    var VH = function (a, b, c, d, e, f, g, h) {
        _.U.call(this);
        this.j = a;
        this.B = b;
        this.m = c;
        this.l = d;
        this.M = e;
        this.H = f;
        this.o = g;
        this.pbjs = h
    };
    _.O(VH, _.U);
    VH.prototype.push = function (a) {
        var b = a.context, c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new of;
            _.Um(this, d);
            var e = new UH(this.j, this.pbjs, this.M, this.H, this.o, a),
                f = new GH(this.j, this.B, this.m, this.l, this.pbjs, a);
            I(d, e);
            I(d, f);
            I(d, new TH(this.j, f.A, e.A, c, b, a));
            Bf(d)
        }
    };
    var WH = function (a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 951);
        this.I = window;
        this.Db = W(this);
        this.Eb = W(this);
        this.F = X(this, b);
        this.o = Y(this, d);
        this.C = X(this, e);
        this.O = X(this, f);
        this.l = Y(this, g);
        this.R = Y(this, h);
        this.L = X(this, k);
        iz(this, c)
    };
    _.O(WH, Z);
    WH.prototype.j = function () {
        var a = !!Oj().pbjs_hooks;
        this.Eb.G(a);
        Vy(this.Db, a ? null : _.re());
        var b, c = null == (b = this.o.value) ? void 0 : b.size, d;
        b = (null == (d = this.l.value) ? void 0 : d.size) || _.Ee(mw);
        d = this.F.value;
        var e, f = null != (e = Oj().pbjs_hooks) ? e : [];
        e = new VH(this.context, this.o.value, this.C.value, this.O.value, this.l.value, this.R.value, this.L.value, d);
        _.Um(this, e);
        f = _.A(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) Oj().pbjs_hooks = Ol(this.context, e);
        !c && !b || a || Ml(d, this.I)
    };
    var XH = {},
        Pl = (XH[64] = PG, XH[134217728] = QG, XH[32768] = RG, XH[536870912] = SG, XH[8] = TG, XH[512] = UG, XH[1048576] = VG, XH[4194304] = XG, XH);
    var Zl = function (a) {
        return "22639388115" === Rg(a.getAdUnitPath())
    };
    var YH = null;
    var sm = {sa: "|"};
    var Bm = 0, ZH = new _.Lh(-9, -9);
    var Dm = 0;
    var $H = new v.Set([function (a, b) {
        var c = a.ca.P.U;
        b.set("pvsid", {value: a.ga.context.pvsid}).set("correlator", {value: x(c, 26)})
    }, function (a, b) {
        a = a.Ie;
        var c = a.Ub;
        "wbn" === a.nc && b.set("wbsu", {value: c})
    }, function (a, b) {
        var c = a.ca.P.U, d = a.Qf;
        a = d.Oe;
        var e = d.Yf;
        d = d.Hf;
        _.H(Hw) || (c = 0 === ce(c, 24, 0), b.set("adsid", {value: c ? a : null}).set("pucrd", {value: c ? e : null}).set("jar", {value: d}))
    }, function (a, b) {
        var c = a.ca.P.U, d = a.xg;
        a = d.Kb;
        d = d.Jb;
        var e = F(c, 21);
        b = b.set("hxva", {value: e ? 1 : null}).set("cmsid", {value: e ? x(c, 23) : null}).set("vid", {value: e ? x(c, 22) : null}).set("pod", {value: d}).set("ppos", {value: a});
        c = x(c, 29);
        b.set.call(b, "scor", {value: null == c ? void 0 : c})
    }, function (a, b) {
        var c = a.ca, d = c.aa, e = c.P.V;
        c = a.Wf;
        var f = c.uf, g = c.nf;
        b.set("eid", {value: a.ga.td}).set("debug_experiment_id", {value: zy().split(",")}).set("expflags", {value: _.Ug(253) ? Fe(ww) || null : null}).set("pied", {
            value: function () {
                var h = new AD, k = !1, l = !1;
                f && (k = !0, ef(h, 1, Pt, f));
                var n = d.map(function (p) {
                    var r = new xD, u;
                    p = null == (u = e[p.getDomId()]) ? void 0 : ae(u, Pt, 27);
                    if (null == p || !p.length) return r;
                    l = k = !0;
                    u = _.A(p);
                    for (p = u.next(); !p.done; p = u.next()) ef(r, 1, Pt, p.value);
                    return r
                });
                l && Nc(h, 2, n);
                n = _.A(g);
                for (var m = n.next(); !m.done; m = n.next()) ef(h, 1, Pt, m.value), k = !0;
                return k ? xb(h.D(), 3) : null
            }()
        })
    }, function (a, b) {
        var c = a.ga, d = c.context;
        c = c.Ba;
        b.set("output", {value: a.Ie.nc}).set("gdfp_req", {value: 1}).set("vrg", {value: d.tb ? String(d.tb) : d.Ga}).set("ptt", {value: 17}).set("impl", {value: c ? "fifs" : "fif"})
    }, function (a, b) {
        a = a.ca.P.U;
        b.set("co", {value: 0 !== ce(a, 24, 0) ? ce(a, 24, 0) : null, options: {xa: !0}})
    }, function (a, b) {
        var c = a.ga.X;
        a = iE(a.ca.P.U) || new fE;
        var d = ce(a, 6, 2);
        b.set("rdp", {value: F(a, 1) ? "1" : null}).set("ltd", {value: F(a, 9) ? "1" : null}).set("gdpr_consent", {value: xf(c, 2)}).set("gdpr", {
            value: Fk(c, 3) ? F(c, 3) ? "1" : "0" : null,
            options: {xa: !0}
        }).set("addtl_consent", {value: xf(c, 4)}).set("tcfe", {value: Cs(c, 7)}).set("us_privacy", {value: xf(c, 1)}).set("npa", {value: F(c, 6) || F(a, 8) ? 1 : null}).set("puo", {value: _.H(Vw) && F(a, 13) ? 1 : null}).set("tfua", {
            value: 2 !== d ? d : null,
            options: {xa: !0}
        }).set("tfcd", {
            value: null != x(a, 5) ? x(a, 5) : null,
            options: {xa: !0}
        }).set("trt", {
            value: null != x(a, 10) ? x(a, 10) : null,
            options: {xa: !0}
        }).set("tad", {value: Fk(c, 8) ? F(c, 8) ? "1" : "0" : null, options: {xa: !0}})
    }, function (a, b) {
        var c = a.ca, d = c.P, e = c.aa, f = c.Bd;
        a = a.ga;
        var g = a.I, h = a.N, k = a.Ba;
        a = {sa: "~"};
        var l = e.map(function (m) {
            return d.V[m.getDomId()]
        }), n = [];
        c = e.map(function (m) {
            return m.getAdUnitPath().replace(/,/g, ":").split("/").map(function (p) {
                if (!p) return "";
                var r = _.t(n, "findIndex").call(n, function (u) {
                    return u === p
                });
                return 0 <= r ? r : n.push(p) - 1
            }).join("/")
        });
        b.set("iu_parts", {value: n}).set("enc_prev_ius", {value: c}).set("prev_iu_szs", {
            value: l.map(function (m) {
                return Ch(m)
            })
        }).set("fluid", {
            value: function () {
                var m = !1, p = l.map(function (r) {
                    r = (D = Bh(r), _.t(D, "includes")).call(D, "fluid");
                    m || (m = r);
                    return r ? "height" : "0"
                });
                return m ? p : null
            }()
        }).set("ifi", {
            value: function () {
                var m = vi(g);
                if (!f) {
                    m += 1;
                    var p = g, r = e.length;
                    r = void 0 === r ? 1 : r;
                    p = Iv(Fd(p)) || p;
                    p.google_unique_id = (p.google_unique_id || 0) + r
                }
                return m
            }()
        }).set("adks", {
            value: e.map(function (m) {
                if (k) {
                    var p = d.V[m.getDomId()];
                    p = Eh(p);
                    if (m = h.j.get(m)) m.Bb = p;
                    return p
                }
                p = d.U;
                var r = d.V[m.getDomId()], u;
                if (!(u = cq(h, m))) {
                    p = Eh(r, F(p, 6) || F(r, 17) ? null : Yh(m));
                    if (m = h.j.get(m)) m.Bb = p;
                    u = p
                }
                return u
            })
        }).set("didk", {
            value: _.H(bx) ? jm(e, function (m) {
                return Dh(m.getDomId())
            }, a) : null, options: a
        })
    }, function (a, b) {
        var c = a.ca;
        a = c.aa;
        c = c.P;
        var d = c.U, e = c.V;
        b.set("sfv", {value: kH ? kH : kH = uk()}).set("fsfs", {
            value: jm(a, function (f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : Gh(f, 12)) ? g : F(d, 13))
            }, {ac: 0}), options: {sa: ","}
        }).set("fsbs", {
            value: jm(a, function (f) {
                f = e[f.getDomId()].Ta();
                var g = d.Ta(), h;
                return (null != (h = null == f ? void 0 : Gh(f, 3)) ? h : null == g ? 0 : F(g, 3)) ? 1 : 0
            }, {ac: 0})
        })
    }, function (a, b) {
        var c = a.ga, d = c.N, e = c.I;
        c = a.ca;
        a = c.aa;
        var f = c.Bd;
        c = {sa: "~"};
        b.set("ris", {
            value: jm(a, function (g) {
                var h, k;
                g = null != (k = null == (h = d.j.get(g)) ? void 0 : h.je) ? k : 0;
                h = _.se(e);
                return g && h ? Math.round(Math.min((h - g) / 1E3, 1800)) : null
            }, c), options: c
        }).set("rcs", {
            value: jm(a, function (g) {
                if (!f) {
                    var h = void 0 === h ? _.q : h;
                    var k = d.j.get(g);
                    k && (k.je = _.se(h) || 0, k.we++)
                }
                return DF(d, g)
            }, {ac: 0})
        })
    }, function (a, b) {
        var c = a.ca;
        a = a.ga.Ba;
        c = c.P.V[c.aa[0].getDomId()];
        b.set("click", {value: !a && c.getClickUrl() ? x(c, 7) : null})
    }, function (a, b, c) {
        var d = a.ca, e = d.aa, f = d.P.V;
        a = a.ga;
        var g = a.X, h = a.I;
        c = void 0 === c ? function (k, l) {
            return me(k, l)
        } : c;
        a = e.map(function (k) {
            return f[k.getDomId()]
        });
        b.set("ists", {
            value: im(a, function (k) {
                return 0 !== Yl(k)
            }) || null
        }).set("fas", {
            value: jm(a, function (k) {
                return bm(Yl(k))
            }, {ac: 0})
        }).set("itsi", {
            value: e.some(function (k) {
                var l;
                return !Zl(k) && 5 === (null == (l = f[k.getDomId()]) ? void 0 : Yl(l))
            }) ? function () {
                var k = c(g, h);
                if (!k) return 1;
                var l;
                k = Math.max.apply(Math, _.Jd(null != (l = _.Wl((0, C.K)(k), 604800)) ? l : []));
                return isFinite(k) ? Math.floor(Math.max((Date.now() - k) / 6E4, 1)) : null
            }() : null
        })
    }, function (a, b) {
        a = a.ca;
        var c = a.P.V;
        a = a.aa.map(function (d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: im(a, function (d) {
                return 4 === Yl(d)
            }) || null
        })
    }, function (a, b) {
        var c = a.ca, d = c.P, e = c.P.U, f = c.aa;
        c = c.lb;
        var g = a.ga;
        a = g.isSecureContext;
        g = g.I;
        b = b.set("prev_scp", {value: tm(f, d)});
        var h = b.set, k = d.U, l = d.V, n = new pi;
        n.set(0, 1 !== c);
        l = l[f[0].getDomId()];
        n.set(1, !!F(l, 17));
        n.set(2, zm(f, d));
        n.set(3, F(k, 27) || !1);
        n.set(4, 3 === c);
        d = ri(n);
        h.call(b, "eri", {value: d}).set("cust_params", {
            value: vm(e),
            options: {sa: "&"}
        }).set("ppid", {
            value: 1 !== ce(e, 24, 0) && null != x(e, 16) ? x(e, 16) : null,
            options: {xa: !0}
        }).set("gct", {value: pm("google_preview", g)}).set("sc", {value: a ? 1 : 0, options: {xa: !0}})
    }, function (a, b) {
        var c = a.ga, d = c.I, e = c.X;
        c = c.va;
        a = a.ca.P.U;
        var f = wm(a.ta());
        if (0 === ce(a, 24, 0)) {
            var g = tz(c, "__gads", e);
            a = "1" === tz(c, "__gpi_opt_out", e) ? "1" : null;
            b = b.set("cookie", {
                value: g,
                options: {xa: !0}
            }).set("cookie_enabled", {value: !g && uz(c, e) ? "1" : null});
            g = d.document;
            var h = g.domain;
            d = b.set.call(b, "cdm", {value: (f || Jh(d)) === g.URL ? "" : h});
            f = d.set;
            e = (e = tz(c, "__gpi", e)) && !_.t(e, "includes").call(e, "&") ? e : null;
            f.call(d, "gpic", {value: e}).set("gpico", {value: a}).set("pdopt", {value: a})
        }
    }, function (a, b) {
        a = a.ga.I;
        b.set("arp", {value: Aj(a) ? 1 : null}).set("abxe", {value: Cd(a.top) || qv(a.IntersectionObserver) ? 1 : null})
    }, function (a, b) {
        var c = a.ga.I;
        a = wm(a.ca.P.U.ta());
        b.set("dt", {value: (new Date).getTime()});
        if (!a) {
            try {
                var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
            } catch (e) {
                d = null
            }
            b.set("lmt", {value: d})
        }
        d = Dm;
        c = ue(c);
        0 < c && d >= c && b.set("dlt", {value: c}).set("idt", {value: d - c})
    }, function (a, b) {
        var c = a.ca, d = c.P, e = c.aa, f = c.P;
        c = f.U;
        f = f.V;
        var g = a.ga;
        a = g.I;
        var h = g.Ba;
        g = Ah(!0, a);
        for (var k = a.document, l = [], n = [], m = _.A(e), p = m.next(); !p.done; p = m.next()) {
            p = p.value;
            var r = f[p.getDomId()];
            p = di(p, r, k, Hh(c, r));
            r = void 0;
            var u = h ? null != (r = p) ? r : ZH : p;
            u && (l.push(Math.round(u.x)), n.push(Math.round(u.y)))
        }
        g && (d.Lb = g);
        c = Ih(a) ? null : Ah(!1, a);
        try {
            var w = a.top;
            var E = Am(w.document, w)
        } catch (N) {
            E = new _.Lh(-12245933, -12245933)
        }
        b.set("adxs", {value: l}).set("adys", {value: n}).set("biw", {value: g ? g.width : null}).set("bih", {value: g ? g.height : null}).set("isw", {value: g ? null == c ? void 0 : c.width : null}).set("ish", {value: g ? null == c ? void 0 : c.height : null}).set("scr_x", {
            value: Math.round(E.x),
            options: {xa: !0}
        }).set("scr_y", {value: Math.round(E.y), options: {xa: !0}}).set("btvi", {
            value: Cm(e, a, d),
            options: {xa: !0, sa: "|"}
        })
    }, function (a, b) {
        var c = a.ga.N;
        b.set("ucis", {
            value: a.ca.aa.map(function (d) {
                d = (0, C.K)(c.j.get(d));
                null != d.uc || (d.uc = window === window.top ? (++c.M).toString(36) : Nu());
                return d.uc
            }), options: {sa: "|"}
        }).set("oid", {value: 2})
    }, function (a, b) {
        a = a.ca;
        var c = a.aa, d = a.P, e = d.V;
        a = new v.Map;
        d = _.A(d.U.ta());
        for (var f = d.next(); !f.done; f = d.next()) {
            var g = f.value;
            a.set((0, C.K)(x(g, 1)), [ol(g, 2)[0]])
        }
        for (d = 0; d < c.length; d++) if (g = e[c[d].getDomId()]) for (g = _.A(g.ta()), f = g.next(); !f.done; f = g.next()) {
            var h = f.value;
            f = (0, C.K)(x(h, 1));
            var k = a.get(f) || [];
            h = ol(h, 2)[0];
            1 === c.length ? k[0] = h : h !== k[0] && (k[d + 1] = h);
            a.set(f, k)
        }
        c = [];
        e = _.A(_.t(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) g = d.value, d = IF()[g], g = a.get(g), d && g && (1 < g.length ? (g = g.map(function (l) {
            return encodeURIComponent(l || "")
        }).join(), c.push(d + "," + g)) : 1 === g.length && "url" !== d && b.set(d, {value: g[0]}));
        c.length && b.set("sps", {value: c, options: {sa: "|"}})
    }, function (a, b) {
        var c = a.ca.P.U, d = a.ga;
        a = d.I;
        var e = d.vg;
        d = d.Va;
        e = e ? Yd(e) : _.Ug(251);
        var f, g, h, k, l, n, m;
        var p = a;
        p = void 0 === p ? Hu : p;
        try {
            var r = p.history.length
        } catch (rb) {
            r = 0
        }
        b = b.set("u_his", {value: r}).set("u_h", {value: null == (f = a.screen) ? void 0 : f.height}).set("u_w", {value: null == (g = a.screen) ? void 0 : g.width}).set("u_ah", {value: null == (h = a.screen) ? void 0 : h.availHeight}).set("u_aw", {value: null == (k = a.screen) ? void 0 : k.availWidth}).set("u_cd", {value: null == (l = a.screen) ? void 0 : l.colorDepth});
        f = b.set;
        g = a;
        g = void 0 === g ? _.q : g;
        g = g.devicePixelRatio;
        f = f.call(b, "u_sd", {value: "number" === typeof g ? +g.toFixed(3) : null}).set("u_tz", {value: -(new Date).getTimezoneOffset()});
        g = f.set;
        try {
            var u, w, E, N,
                G = null != (N = null == (u = a.external) ? void 0 : null == (w = u.getHostEnvironmentValue) ? void 0 : null == (E = w.bind(a.external)) ? void 0 : E("os-mode")) ? N : "",
                R, T = Number(null == (R = JSON.parse(G)) ? void 0 : R["os-mode"]);
            var Q = 0 <= T ? T + 1 : null
        } catch (rb) {
            Q = null
        }
        Q = g.call(f, "wsm", {value: Q}).set("dmc", {value: null != (m = null == (n = a.navigator) ? void 0 : n.deviceMemory) ? m : null});
        n = Q.set;
        (c = x(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = "a " + js('role:1 producer:12 loc:"' + c + '"')) : c = "";
        c = n.call(Q, "uule", {value: c});
        n = c.set;
        m = a;
        m = void 0 === m ? _.q : m;
        Q = new pi;
        m.SVGElement && m.document.createElementNS && Q.set(0);
        u = pv();
        u["allow-top-navigation-by-user-activation"] && Q.set(1);
        u["allow-popups-to-escape-sandbox"] && Q.set(2);
        m.crypto && m.crypto.subtle && Q.set(3);
        m.TextDecoder && m.TextEncoder && Q.set(4);
        m = ri(Q);
        e = n.call(c, "bc", {value: m}).set("uach", {value: e ? js(e, 3) : null});
        c = e.set;
        if (null != d ? d : _.Ug(221)) var aa = null; else if (d = null == (aa = a.navigator) ? void 0 : aa.userActivation) {
            aa = 0;
            if (null == d ? 0 : d.hasBeenActive) aa |= 1;
            if (null == d ? 0 : d.isActive) aa |= 2
        } else aa = void 0;
        aa = c.call(e, "uas", {value: aa});
        d = aa.set;
        a:{
            try {
                var ca, ma,
                    Ba = null == (ca = a.performance) ? void 0 : null == (ma = ca.getEntriesByType("navigation")) ? void 0 : ma[0];
                if (null == Ba ? 0 : Ba.type) {
                    var Na;
                    var Ea = null != (Na = lD.get(Ba.type)) ? Na : null;
                    break a
                }
            } catch (rb) {
            }
            var ta, Oa, Ia;
            Ea = null != (Ia = mD.get(null == (ta = a.performance) ? void 0 : null == (Oa = ta.navigation) ? void 0 : Oa.type)) ? Ia : null
        }
        d.call(aa, "nvt", {value: Ea})
    }, function (a, b) {
        var c = a.ga, d = c.I, e = c.N;
        c = c.Ba;
        a = a.ca;
        var f = a.aa;
        a = a.P;
        var g = a.U, h = a.V;
        a = qm("google_preview", d);
        var k = d.document, l = a ? xm(k.URL) : k.URL;
        k = a ? xm(k.referrer) : k.referrer;
        a = !1;
        if (c) c = wm(g.ta()); else {
            var n;
            c = null != (n = wm(h[f[0].getDomId()].ta())) ? n : wm(g.ta())
        }
        if (null != c) {
            var m = l;
            Ih(d) || (k = "", a = !0)
        } else c = l;
        n = ym(d);
        b.set("nhd", {value: n || null}).set("url", {value: c}).set("loc", {value: null !== m && m !== c ? m : null}).set("ref", {value: k});
        if (n) {
            m = b.set;
            var p, r;
            n = Cd(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
            var u;
            p = null == (u = d.location) ? void 0 : u.ancestorOrigins;
            d = hj(d) || "";
            u = (null == p ? void 0 : p[p.length - 1]) || "";
            d = (d = n || d || u) ? a ? ev(d.match(_.dv)[3] || null) : d : null;
            m.call(b, "top", {value: d}).set("etu", {value: e.Hc})
        }
    }, function (a, b) {
        a = a.ga.context.pvsid;
        b.set("rumc", {value: _.H(wx) || _.we(fh).j ? a : null}).set("rume", {value: _.H(Nw) ? 1 : null})
    }, function (a, b) {
        a = a.ga.I;
        var c = b.set;
        var d = Cv(a);
        var e = gy(a, a.google_ad_width, a.google_ad_height);
        var f = d.location.href;
        if (d === d.top) f = !0; else {
            var g = !1, h = d.document;
            h && h.referrer && (f = h.referrer, d.parent === d.top && (g = !0));
            (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 === f.indexOf(d) && (g = !1, f = d);
            f = g
        }
        g = a.top == a ? 0 : Cd(a.top) ? 1 : 2;
        d = 4;
        e || 1 != g ? e || 2 != g ? e && 1 == g ? d = 7 : e && 2 == g && (d = 8) : d = 6 : d = 5;
        f && (d |= 16);
        e = "" + d;
        if (a != a.top) for (f = a; f && f != f.top && Cd(f) && !f.sf_ && !f.$sf && !f.inGptIF && !f.inDapIF; f = f.parent) ;
        c.call(b, "frm", {value: e || null}).set("vis", {value: rD(a.document)})
    }, function (a, b) {
        var c = a.ca.aa;
        a = a.ga.I;
        for (var d = [], e = [], f = _.A(c), g = f.next(); !g.done; g = f.next()) {
            var h = void 0, k = void 0, l = void 0;
            var n = a;
            g = Yh(g.value);
            var m = tv((null == g ? void 0 : g.parentElement) && $h(g.parentElement, n) || null);
            !m || 1 === m[0] && 1 === m[3] ? (m = null != (l = null == g ? void 0 : g.parentElement) ? l : null, l = null != (k = Ph(m)) ? k : new _.Oh(0, 0), nm(l, m, n, 100), k = null != (h = Ph(g)) ? h : new _.Oh(0, 0), nm(k, g, n, 1), -1 === l.height && (k.height = -1), n = l, k = h = k, h = n.width + "x" + n.height, n = k.width + "x" + k.height) : n = h = "-1x-1";
            d.push(h);
            e.push(n)
        }
        null == YH && (f = gy(a, 500, 300), n = a.navigator, h = n.userAgent, k = n.platform, n = n.product, !/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && /^Opera/.test(h) ? h = !1 : /Win/.test(k) && /Trident/.test(h) && 11 <= a.document.documentMode ? h = !0 : (k = (/WebKit\/(\d+)/.exec(h) || [0, 0])[1], g = (/rv:(\d+\.\d+)/.exec(h) || [0, 0])[1], h = !k && "Gecko" === n && 27 <= g && !/ rv: 1\.8([^.] |\.0) /.test(h) || 536 <= k ? !0 : !1), YH = h && !f);
        g = 0 !== (0, _.em)();
        f = Ah(!0, a, g).width;
        h = [];
        n = [];
        k = [];
        null !== a && a != a.top && (l = Ah(!1, a).width, (-12245933 === f || -12245933 === l || l < f) && k.push(8));
        -12245933 !== f && (1.5 * f < a.document.documentElement.scrollWidth ? k.push(10) : g && 1.5 * a.outerWidth < f && k.push(10));
        c = _.A(c);
        for (l = c.next(); !l.done; l = c.next()) {
            g = new pi;
            m = Yh(l.value);
            l = 0;
            var p = !1, r = !1;
            if (m) {
                for (var u = 0, w = m; w && 100 > u; u++, w = w.parentElement) {
                    var E = $h(w, a);
                    if (E) {
                        var N = E, G = N.display, R = N.overflowX;
                        if ("visible" !== N.overflowY && (g.set(2), (N = Ph(w)) && (l = l ? Math.min(l, N.width) : N.width), g.get(9))) break;
                        lm(E) && g.set(9);
                        "none" === G && g.set(7);
                        "IFRAME" === w.nodeName && (E = parseInt(E.width, 10), E < f && (g.set(8), l = l ? Math.min(E, l) : E));
                        r || (r = "scroll" === R || "auto" === R);
                        p || (p = "flex" === G)
                    } else g.set(3)
                }
                r && p && (m = m.getBoundingClientRect().left, (m > f || 0 > m) && g.set(11))
            } else g.set(1);
            m = _.A(k);
            for (p = m.next(); !p.done; p = m.next()) g.set(p.value);
            h.push(ri(g));
            n.push(l)
        }
        b.set("psz", {value: d, options: {sa: "|"}}).set("msz", {
            value: e,
            options: {sa: "|"}
        }).set("fws", {value: h}).set("ohw", {value: n}).set("ea", {value: YH ? null : "0", options: {xa: !0}})
    }, function (a, b) {
        b.set("psts", {value: CF(a.ga.N, a.ca.aa)})
    }, function (a, b) {
        var c = a.ga;
        a = c.X;
        c = c.I;
        var d;
        var e = c.document.domain, f = null != (d = F(a, 5) && ne(c) ? c.document.cookie : null) ? d : "",
            g = c.history.length, h = c.screen, k = c.document.referrer;
        if (Fd()) var l = window.gaGlobal || {}; else {
            var n = Math.round((new Date).getTime() / 1E3), m = c.google_analytics_domain_name;
            e = "undefined" == typeof m ? cy("auto", e) : cy(m, e);
            var p = -1 < f.indexOf("__utma=" + e + "."), r = -1 < f.indexOf("__utmb=" + e);
            (d = (Iv() || window).gaGlobal) || (d = {}, (Iv() || window).gaGlobal = d);
            var u = !1;
            if (p) {
                var w = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
                r ? d.sid = w[3] : d.sid || (d.sid = n + "");
                d.vid = w[0] + "." + w[1];
                d.from_cookie = !0
            } else {
                d.sid || (d.sid = n + "");
                if (!d.vid) {
                    u = !0;
                    r = Math.round(2147483647 * Math.random());
                    p = ay.appName;
                    var E = ay.version, N = ay.language ? ay.language : ay.browserLanguage, G = ay.platform,
                        R = ay.userAgent;
                    try {
                        w = ay.javaEnabled()
                    } catch (T) {
                        w = !1
                    }
                    w = [p, E, N, G, R, w ? 1 : 0].join("");
                    h ? w += h.width + "x" + h.height + h.colorDepth : _.q.java && _.q.java.awt && (h = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                    w = w + f + (k || "");
                    for (k = w.length; 0 < g;) w += g-- ^ k++;
                    d.vid = (r ^ by(w) & 2147483647) + "." + n
                }
                d.from_cookie || (d.from_cookie = !1)
            }
            if (!d.cid) {
                b:for (n = 999, m && (m = 0 == m.indexOf(".") ? m.substr(1) : m, n = m.split(".").length), m = 999, f = f.split(";"), w = 0; w < f.length; w++) if (k = dy.exec(f[w]) || ey.exec(f[w]) || fy.exec(f[w])) {
                    h = k[1] || 0;
                    if (h == n) {
                        l = k[2];
                        break b
                    }
                    h < m && (m = h, l = k[2])
                }
                u && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l, d.from_cookie = !0) : l != d.vid && (d.cid = l)
            }
            d.dh = e;
            d.hid || (d.hid = Math.round(2147483647 * Math.random()));
            l = d
        }
        e = l.sid;
        d = l.hid;
        u = l.from_cookie;
        f = l.cid;
        u && !F(a, 5) || b.set("ga_vid", {value: l.vid}).set("ga_sid", {value: e}).set("ga_hid", {value: d}).set("ga_fc", {value: u}).set("ga_cid", {value: f}).set("ga_wpids", {value: c.google_analytics_uacct})
    }, function (a, b) {
        a = a.ga;
        var c = a.I;
        a = a.context.pvsid;
        b = b.set("js", {value: _.H(ow) ? hy(c) : null});
        var d = b.set;
        if (_.H(ow)) a:{
            var e = c;
            e = void 0 === e ? window : e;
            if (c = hy(e)) {
                var f = null;
                try {
                    "afma-gpt-sdk-a" == c ? f = e._gmptnl.pm("GAM=", a.toString()) || "5" : (f = e.__gmptnl_n || "5", e.webkit.messageHandlers._gmptnl.postMessage("GAM="))
                } catch (g) {
                    a = "3";
                    break a
                }
                a = "string" === typeof f ? f : "3"
            } else a = null
        } else a = null;
        d.call(b, "ms", {value: a})
    }, function (a, b) {
        var c = a.ga.I;
        a = c.navigator;
        c = c.document;
        _.H(Bx) || "runAdAuction" in a && "joinAdInterestGroup" in a && Sf("run-ad-auction", c) && b.set("td", {value: 1})
    }, function (a, b) {
        var c = a.mg.ng;
        Sf("browsing-topics", a.ga.I.document) && (b.set("topics", {value: c instanceof Uint8Array ? xb(c, 3) : c}), !c || c instanceof Uint8Array || b.set("tps", {value: c}))
    }, function (a, b) {
        var c = a.ga, d = c.I;
        c = c.X;
        var e = a.ca.aa, f = a.ig;
        a = f.Vf;
        var g = f.ff;
        f = f.Rf;
        _.H(qx) || b.set("a3p", {value: af(me(c, d), Rg(e[0].getAdUnitPath()), a, g, f)})
    }, function (a, b) {
        var c = a.Sb, d = c.md, e = c.Ac, f = a.ca.aa;
        a = {sa: "~"};
        c = function () {
            return _.H(hw) ? e ? f.map(function (g) {
                return (0, C.K)(e.get(g))
            }) : [] : d
        }();
        b.set("cbidsp", {
            value: jm(c, function (g) {
                return xb(g.D(), 3)
            }, a), options: a
        })
    }, function (a, b) {
        a = a.ca.P.U;
        yl(a.Nc(), ao, 1) && (a = $n(a.Nc(), ao, 1), b.set("cmrv", {value: 1}).set("cmrq", {value: x(a, 1)}).set("cmrc", {
            value: ol(a, 2),
            options: {sa: ">"}
        }).set("cmrids", {value: ol(a, 3), options: {sa: "!"}}).set("cmrf", {value: x(a, 4)}))
    }, function (a, b) {
        var c = [];
        a = _.A(ae($n(a.ca.P.U.Nc(), co, 2), un, 1));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, ol(d, 2).length && c.push(ce(d, 1, 0) + "=" + ol(d, 2).join("|"));
        b.set("pps", {value: c, options: {sa: "~"}})
    }, function (a, b) {
        b.set("scar", {value: a.Tf.qf})
    }, function (a, b) {
        a = a.ga.I.document;
        _.H(vx) && (_.H(ux) || Sf("attribution-reporting", a) && b.set("nt", {value: 1}))
    }]), aI = function (a) {
        this.j = a;
        this.m = new v.Set(Ge(ax));
        a = _.A(F(this.j.ga.X, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []);
        for (var b = a.next(); !b.done; b = a.next()) this.m.add(b.value)
    }, cI = function (a) {
        if (0 === a.j.ca.aa.length) return "";
        for (var b = new v.Map, c = _.A($H), d = c.next(); !d.done; d = c.next()) d = d.value, d(a.j, b);
        c = "https://" + (bI(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
        b = _.A(b);
        for (d = b.next(); !d.done; d = b.next()) {
            var e = _.A(d.value);
            d = e.next().value;
            var f = e.next().value;
            e = f.value;
            f = void 0 === f.options ? {} : f.options;
            (new RegExp("[?&]" + d + "=")).test(c);
            if (!a.m.has(d) && null != e) {
                var g = f;
                f = void 0 === g.sa ? "," : g.sa;
                g = void 0 === g.xa ? !1 : g.xa;
                if (e = "object" !== typeof e ? null == e || !g && 0 === e ? null : encodeURIComponent(e) : Array.isArray(e) && e.length ? encodeURIComponent(e.join(f)) : null) "?" !== c[c.length - 1] && (c += "&"), c += d + "=" + e
            }
        }
        return c
    }, bI = function (a) {
        var b = a.j;
        a = b.ga.X;
        var c, d;
        b = null != (d = null == (c = iE(b.ca.P.U)) ? void 0 : F(c, 9)) ? d : !1;
        c = F(a, 8);
        return b || c || !F(a, 5)
    };
    var gI = function (a, b, c, d) {
        var e = this;
        this.context = a;
        this.N = c;
        this.j = new v.Map;
        this.m = new v.Map;
        this.zb = _.we(fh);
        window.performance && qv(window.performance.now) && (_.hb(window, "DOMContentLoaded", _.dh(a, 334, function () {
            for (var f = _.A(e.j), g = f.next(); !g.done; g = f.next()) {
                var h = _.A(g.value);
                g = h.next().value;
                h = h.next().value;
                dI(e, g, h) && e.j.delete(g)
            }
        })), lF(b, qF, function (f) {
            f = f.detail;
            var g = f.V;
            return void eI(e, (0, C.K)(fI(d, f.Qd)), (0, C.K)(x(g, 20)))
        }), lF(b, rF, function (f) {
            f = f.detail;
            var g = f.V;
            f = (0, C.K)(fI(d, f.Qd));
            g = (0, C.K)(x(g, 20));
            var h = e.m.get(f);
            null != h ? cF(h, g) : eI(e, f, g)
        }))
    }, eI = function (a, b, c) {
        dI(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Km(b, function () {
            return a.j.delete(b)
        }))
    }, dI = function (a, b, c) {
        var d = Yh(b);
        if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
        d = new aF({
            I: window, zb: a.zb, fb: (0, C.ra)(d), Fa: function (e) {
                return void hh(a.context, 336, e)
            }, kg: _.H(wx)
        });
        if (!d.j) return !1;
        cF(d, c);
        a.m.set(b, d);
        yF(a.N, b, function () {
            return void a.m.delete(b)
        });
        return !0
    };
    var hI = function (a) {
        this.m = a;
        this.D = this.j = 0
    };
    hI.prototype.push = function () {
        for (var a = _.A(eb.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(v.globalThis), this.j++)
            } catch (c) {
                this.D++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.m.error($F(String(c)))
            }
        }
        this.m.info(aG(String(this.j), String(this.D)));
        return this.j
    };
    var iI = function (a, b) {
        Z.call(this, a, 931);
        this.kb = W(this);
        this.ab = W(this);
        this.l = Y(this, b)
    };
    _.O(iI, Z);
    iI.prototype.j = function () {
        var a = this.l.value, b = new v.Map;
        this.kb.G(new v.Map);
        if (a) {
            var c;
            a = _.A(null != (c = this.l.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = ae(d, ut, 1);
                c = 1 === ce(c[0], 1, 0) ? As(c[0]) : Bs(c[0], zs);
                d = dj(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.ab.G(b)
    };
    var jI = function (a, b) {
        Z.call(this, a, 981);
        this.o = W(this);
        this.l = W(this);
        this.C = Y(this, b)
    };
    _.O(jI, Z);
    jI.prototype.j = function () {
        var a = new v.Map, b, c = _.A(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = ae(b, ut, 1);
            d = 1 === ce(d[0], 1, 0) ? As(d[0]) : Bs(d[0], zs);
            a.set(d, dj(b, 2))
        }
        this.o.G(a);
        this.l.G(new mt)
    };
    var kI = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 980);
        this.C = b;
        this.l = h;
        this.A = new bz;
        this.o = [];
        this.R = X(this, c);
        this.O = X(this, d);
        this.F = X(this, e);
        if (this.l) for (a = _.A(g), b = a.next(); !b.done; b = a.next()) this.o.push(X(this, b.value)); else this.L = X(this, f)
    };
    _.O(kI, Z);
    kI.prototype.j = function () {
        if ((D = _.t(Object, "entries").call(Object, this.R.value), _.t(D, "find")).call(D, function (c) {
            var d = _.A(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.mc)
        })) {
            var a;
            (null != (a = this.C) ? a : _.we(Mk)).B = !0
        }
        ze(25);
        a = _.A((D = [this.O.value, this.F.value, this.l ? this.o.map(function (c) {
            return c.value
        }) : (0, C.K)(this.L).value], _.t(D, "flat")).call(D));
        for (var b = a.next(); !b.done; b = a.next()) ye(b.value);
        this.A.notify()
    };
    var lI = function (a, b) {
        Z.call(this, a, 892, _.Ee(Tw));
        this.l = W(this);
        this.o = W(this);
        this.gb = W(this);
        this.Sa = W(this);
        this.Gb = W(this);
        this.C = W(this);
        this.F = hz(this, b)
    };
    _.O(lI, Z);
    lI.prototype.j = function () {
        var a = this.F.value;
        if (!a) throw Error("config timeout");
        var b;
        Vy(this.l, null != (b = Qe(a, Ht, 3)) ? b : null);
        var c;
        Vy(this.o, null != (c = Qe(a, Kt, 2)) ? c : null);
        this.gb.G(en(a, 4));
        Vy(this.Sa, ae(a, Ct, 6));
        Vy(this.Gb, ae(a, Xt, 5));
        Vy(this.C, Qe(a, Wt, 7))
    };
    lI.prototype.H = function (a) {
        this.m(a)
    };
    lI.prototype.m = function (a) {
        this.l.Aa(a);
        this.o.Aa(a);
        this.gb.G([]);
        this.Sa.G([]);
        this.Gb.G([]);
        Wy(this.C)
    };
    var mI = [{name: "Interstitial", rd: 1}, {name: "TopAnchor", rd: 2}, {name: "BottomAnchor", rd: 3}],
        nI = function (a, b) {
            Z.call(this, a, 789);
            this.l = b;
            this.A = W(this)
        };
    _.O(nI, Z);
    nI.prototype.j = function () {
        var a = this;
        this.A.G(mI.filter(function (b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).map(function (b) {
            var c = b.name;
            b = b.rd;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            d = new Xt;
            e = new Rt;
            b = _.z(e, 2, b);
            c = _.z(b, 1, "/22639388115/example/" + c.toLowerCase());
            return ah(d, 5, Yt, c)
        }))
    };
    var oI = function (a, b, c, d) {
        Z.call(this, a, 1016);
        this.A = W(this);
        this.o = Y(this, b);
        this.l = Y(this, c);
        this.C = jz(this, [b, d])
    };
    _.O(oI, Z);
    oI.prototype.j = function () {
        if (this.l.value) {
            var a = this.o.value || this.C.value;
            a && pI(this, a) ? this.A.G(a) : (Wy(this.A), qI(this, a))
        } else Wy(this.A)
    };
    oI.prototype.H = function (a) {
        this.m(a)
    };
    oI.prototype.m = function () {
        Wy(this.A)
    };
    var pI = function (a, b) {
        return ae((0, C.K)(a.l.value), It, 1).some(function (c) {
            return bf(c, 1) === b
        })
    }, qI = function (a, b) {
        oi("pp_iris_failure", function (c) {
            K(c, "fnc", b);
            ui(c, a.context)
        }, _.Ee(Uw))
    };
    var rI = function (a, b) {
        Z.call(this, a, 1015);
        this.l = W(this);
        this.o = Y(this, b)
    };
    _.O(rI, Z);
    rI.prototype.j = function () {
        if (this.o.value) {
            var a = ae(this.o.value, It, 1);
            (null == a ? 0 : a.length) ? (a = ae(this.o.value, It, 1)[0], (D = [2, 3], _.t(D, "includes")).call(D, ce(a, 3, 0)) ? this.l.G(bf(a, 1)) : Wy(this.l)) : Wy(this.l)
        } else Wy(this.l)
    };
    rI.prototype.H = function (a) {
        this.m(a)
    };
    rI.prototype.m = function () {
        Wy(this.l)
    };
    var sI = function (a, b, c) {
        Z.call(this, a, 1017);
        this.I = c;
        this.A = gz(this);
        this.l = Y(this, b)
    };
    _.O(sI, Z);
    sI.prototype.j = function () {
        var a = this;
        if (this.l.value) {
            var b = Rx(this.I, this.l.value, function (c) {
                if (!c) {
                    c = Tu(b.j);
                    for (var d = _.A(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.Je(e.value)
                }
                a.A.notify()
            });
            b.start()
        } else this.A.notify()
    };
    sI.prototype.H = function (a) {
        this.m(a)
    };
    sI.prototype.m = function () {
        this.A.notify()
    };
    var tI = function (a, b) {
        Z.call(this, a, 1056);
        this.A = W(this);
        this.l = X(this, b)
    };
    _.O(tI, Z);
    tI.prototype.j = function () {
        var a = Rg((0, C.K)(this.l.value.getAdUnitPath()));
        this.A.G(a)
    };
    tI.prototype.H = function (a) {
        this.m(a)
    };
    tI.prototype.m = function () {
        Wy(this.A)
    };
    var uI = function () {
        Z.apply(this, arguments);
        this.value = this.promise = null;
        this.A = W(this)
    };
    _.O(uI, Z);
    uI.prototype.j = function () {
        var a = this;
        this.promise.then(function () {
            return void Vy(a.A, a.value)
        })
    };
    var Ho = function (a, b, c, d) {
        uI.call(this, a, 1061);
        var e = this;
        this.promise = mF(b, c, function (f) {
            return null !== (e.value = d(f))
        })
    };
    _.O(Ho, uI);
    var vI = function (a, b, c, d) {
        Z.call(this, a, 906, _.Ee(Sw));
        this.l = gz(this);
        if (b === b.top) {
            var e = new of;
            _.Um(this, e);
            var f = new rI(a, c);
            I(e, f);
            d = new Ho(a, d, qF, function (g) {
                return g.detail.V
            });
            I(e, d);
            d = new tI(a, d.A);
            I(e, d);
            a = new oI(a, f.l, c, d.A);
            I(e, a);
            b = new sI(this.context, a.A, b);
            I(e, b);
            Oy(this.B, b.A, !0);
            Bf(e)
        } else this.l.notify()
    };
    _.O(vI, Z);
    vI.prototype.j = function () {
        this.l.notify()
    };
    vI.prototype.H = function (a) {
        this.m(a)
    };
    vI.prototype.m = function () {
        this.l.notify()
    };
    var wI = function (a, b) {
        Z.call(this, a, 891);
        var c = this;
        this.l = W(this);
        this.error = void 0;
        var d = W(this);
        this.o = X(this, d);
        b ? b(function (e, f) {
            if (f) c.error = f, d.G([]); else try {
                if ("string" === typeof e) {
                    var g = JSON.parse(e || "[]");
                    Array.isArray(g) && d.G(g)
                }
            } catch (h) {
            } finally {
                d.yb || (c.error = Error("malformed response"), d.G([]))
            }
        }) : (this.error = Error("missing input"), d.G([]))
    };
    _.O(wI, Z);
    wI.prototype.j = function () {
        if (this.error) throw this.error;
        var a = this.l, b = a.G;
        var c = this.o.value;
        if (!Array.isArray(c)) throw Error("must be an array");
        if (Object.isFrozen(c) || Object.isSealed(c) || !Object.isExtensible(c)) throw Error("arrays passed to jspb constructors must be mutable");
        var d = Hb(c);
        if (0 !== d) throw Error();
        Ib(c, d | 64);
        c = Ac($t, Ob(c));
        b.call(a, c)
    };
    var xI = function (a, b, c) {
        Z.call(this, a, 1093);
        this.o = new az(b);
        this.l = X(this, c)
    };
    _.O(xI, Z);
    xI.prototype.j = function () {
        var a = this.o.value;
        if (a) {
            var b;
            (null == (b = this.l.value["*"]) ? 0 : b.mc) && Array.isArray(a.installedModules) && (b = new Uj("pbjs_modules"), ui(b, this.context), K(b, "pbmods", a.installedModules.join("~")), Wj(b))
        }
    };
    var yI = function (a, b) {
        Z.call(this, a, 966);
        this.I = b;
        this.Pa = W(this)
    };
    _.O(yI, Z);
    yI.prototype.j = function () {
        var a = this, b = Fg(this.I);
        if (b) this.Pa.G(b); else if ((b = Object.getOwnPropertyDescriptor(this.I, "_pbjsGlobals")) && !b.configurable) oi("pdpg_error", function (d) {
            ui(d, a.context)
        }, _.Ee(kw)); else {
            var c = null;
            Object.defineProperty(this.I, "_pbjsGlobals", {
                set: function (d) {
                    c = d;
                    (d = Fg(a.I)) && a.Pa.G(d)
                }, get: function () {
                    return c
                }
            })
        }
    };
    yI.prototype.m = function () {
    };
    var zI = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 1088);
        this.adUnitPath = b;
        this.Ia = c;
        this.googletag = d;
        this.U = e;
        this.o = f;
        this.l = g
    };
    _.O(zI, Z);
    zI.prototype.j = function () {
        var a = this, b = Jm(this.context, this.l, this.o, {Gc: 6, adUnitPath: this.adUnitPath, Ia: this.Ia});
        if (b) {
            var c = (0, C.K)(b.j);
            this.googletag.cmd.push(function () {
                c.addService(a.googletag.pubads())
            });
            jn(document, function () {
                a.googletag.display(c);
                F(a.U, 4) && a.googletag.pubads().refresh([c])
            })
        }
    };
    var AI = function (a, b, c, d, e, f) {
        Z.call(this, a, 1090);
        this.googletag = b;
        this.C = c;
        this.o = d;
        this.l = e;
        this.F = Y(this, f)
    };
    _.O(AI, Z);
    AI.prototype.j = function () {
        var a = this.F.value;
        if (a && pp(a, 1)) {
            var b = new of;
            _.Um(this, b);
            I(b, new zI(this.context, a.getAdUnitPath(), !1, this.googletag, this.o.j, this.C, this.l));
            Bf(b)
        }
    };
    var Pm = function (a, b, c, d) {
        Z.call(this, a, 959);
        this.eb = b;
        this.A = W(this);
        this.l = X(this, b);
        iz(this, c);
        iz(this, d)
    };
    _.O(Pm, Z);
    Pm.prototype.j = function () {
        this.A.G(this.l.value)
    };
    var Om = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.o = b;
        this.N = c;
        this.I = d;
        this.F = e;
        this.l = gz(this);
        iz(this, f);
        this.C = X(this, g)
    };
    _.O(Om, Z);
    Om.prototype.j = function () {
        var a = this, b = new Ix(this.I, {tc: -1, Re: !0});
        _.Um(this, b);
        if (Kx(b)) {
            var c = this.N.H, d = c.status, e = function (f) {
                var g = a.C.value, h, k, l;
                if (l = !(null == (h = a.F) ? 0 : F(h, 9))) {
                    var n = void 0 === n ? !1 : n;
                    l = Ox(f) ? !1 === f.gdprApplies || "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !n || "string" !== typeof f.tcString || !f.tcString.length ? !0 : Mx(f, "1") : !1
                }
                h = _.z(g, 5, l);
                l = !Px(f, ["3", "4"]);
                h = _.z(h, 9, l);
                h = _.z(h, 2, f.tcString);
                l = null != (k = f.addtlConsent) ? k : "";
                k = _.z(h, 4, l);
                _.z(k, 7, f.internalErrorState);
                null != f.gdprApplies && _.z(g, 3, f.gdprApplies);
                _.H(dx) && !Px(f, ["2", "7", "9", "10"]) && _.z(g, 8, !0);
                a.l.notify()
            };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.j.push(e);
                    break;
                case 0:
                    c.data = void 0;
                    c.status = 1;
                    c.j.push(e);
                    this.o.info(IG());
                    b.addEventListener(function (f) {
                        Ox(f) ? ("tcunavailable" === f.tcString ? a.o.info(JG("failed")) : a.o.info(JG("succeeded")), c.data = f, c.status = 2, c.Mc().forEach(function (g) {
                            g(f)
                        }), c.nd()) : (c.data = void 0, c.status = 1)
                    });
                    break;
                default:
                    throw Error("Impossible TCDataCacheStatus: " + d);
            }
        } else this.l.notify()
    };
    var Nm = function (a, b, c, d, e) {
        Z.call(this, a, 875);
        this.C = b;
        this.I = c;
        this.l = gz(this);
        iz(this, d);
        this.o = X(this, e)
    };
    _.O(Nm, Z);
    Nm.prototype.j = function () {
        var a = this, b = _.H(zx) ? new py(this.I) : new ND(this.I);
        _.Um(this, b);
        if (b.l()) {
            var c = _.dh(this.context, 660, function (d) {
                d && "string" === typeof d.uspString && _.z(a.o.value, 1, d.uspString);
                a.l.notify()
            });
            this.C.info(HG());
            b.M(c)
        } else this.l.notify()
    };
    var Lm = function (a, b) {
        Z.call(this, a, 958);
        this.l = b;
        this.eb = W(this)
    };
    _.O(Lm, Z);
    Lm.prototype.j = function () {
        var a = new rz, b, c = null == (b = this.l) ? void 0 : F(b, 9);
        _.z(a, 5, !c);
        this.eb.G(a)
    };
    var Mm = function (a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.I = b;
        this.o = d;
        this.l = X(this, c)
    };
    _.O(Mm, Z);
    Mm.prototype.j = function () {
        var a = this;
        _.kh(this.context, 894, function () {
            return void oi("cmpMet", function (b) {
                ui(b, a.context);
                var c = new Ix(a.I);
                _.Um(a, c);
                var d = _.H(zx) ? new py(a.I) : new ND(a.I);
                _.Um(a, d);
                K(b, "fc", Number(a.l.value));
                K(b, "tcfv1", Number(!!a.I.Fh));
                K(b, "tcfv2", Number(Kx(c)));
                K(b, "usp", Number(d.l()));
                K(b, "ptt", 17)
            }, a.o)
        })
    };
    var BI = function (a, b) {
        Z.call(this, a, 1052);
        this.o = W(this);
        this.l = W(this);
        this.C = Y(this, b)
    };
    _.O(BI, Z);
    BI.prototype.j = function () {
        var a = this.C.value, b = new Ct, c = new v.Map;
        if (a) {
            var d = new v.Set;
            a = _.A(a);
            for (var e = a.next(); !e.done; e = a.next()) {
                var f = e.value;
                if (null != x(f, 1)) {
                    e = new v.Set;
                    c.set(bf(f, 1).toString(), e);
                    f = _.A(f.D());
                    for (var g = f.next(); !g.done; g = f.next()) {
                        g = g.value;
                        var h = (0, C.K)(g.D());
                        e.add(h);
                        d.has(h) || ef(b, 2, zt, g);
                        d.add(h)
                    }
                }
            }
        }
        this.o.G(c);
        this.l.G(b)
    };
    var CI = function (a, b) {
        Z.call(this, a, 1040);
        this.l = W(this);
        this.o = W(this);
        this.C = Y(this, b)
    };
    _.O(CI, Z);
    CI.prototype.j = function () {
        var a = this.C.value;
        a ? (Vy(this.o, a instanceof Ct ? bf(a, 1) : null), a = a.D(), this.l.G(a.map(function (b) {
            var c = b.J();
            b = b.D();
            c = c && (_.t(c, "startsWith").call(c, location.protocol) || _.t(c, "startsWith").call(c, "data:") && 40 >= c.length) ? Gd(null === c ? "null" : void 0 === c ? "undefined" : c) : void 0;
            return {Fc: b, url: c}
        }))) : (Wy(this.o), this.l.G([]))
    };
    var wp = function (a, b, c, d) {
        Z.call(this, a, 813);
        this.C = b;
        this.l = W(this);
        this.F = Y(this, c);
        this.o = Y(this, d)
    };
    _.O(wp, Z);
    wp.prototype.j = function () {
        var a = this, b = this.F.value;
        if (!b || _.H(px)) this.l.G(!1); else {
            b = _.A(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = d.Fc;
                (d = d.url) && _.Um(this, Rf(c, d, this.o.value, function (e, f) {
                    hh(a.context, e, f);
                    var g, h;
                    null == (g = a.C) || null == (h = g.error) || h.call(g, f)
                }))
            }
            this.l.G(!0)
        }
    };
    var DI = function (a, b, c) {
        Z.call(this, a, 1045);
        this.l = c;
        this.o = X(this, b)
    };
    _.O(DI, Z);
    DI.prototype.j = function () {
        var a = this.o.value;
        if (a) {
            var b = this.context, c = this.l;
            if (null != x(a, 1)) {
                var d = new of, e = new up;
                e.G(a);
                a = new CI(b, e);
                I(d, a);
                b = new wp(b, console, a.l, c);
                I(d, b);
                Bf(d)
            }
        }
    };
    var io = function (a, b) {
        Z.call(this, a, 1031);
        this.I = b
    };
    _.O(io, Z);
    io.prototype.j = function () {
        this.I === this.I.top && gj(this.I)
    };
    var go = function (a, b, c) {
        c = void 0 === c ? Dg : c;
        Z.call(this, a, 1063);
        this.I = b;
        this.o = c;
        this.l = W(this)
    };
    _.O(go, Z);
    go.prototype.j = function () {
        var a = this;
        if (_.H(Bw) && Eg(this.I)) {
            var b = null, c = 0, d = _.Ee(Cw), e = _.dh(this.context, this.id, function () {
                var g, h, k, l;
                return _.jb(function (n) {
                    switch (n.j) {
                        case 1:
                            return g = a.o(a.I), h = "0", n.D = 2, kb(n, g, 4);
                        case 4:
                            h = null != (k = n.m) ? k : "0";
                            h.length > d && (hh(a.context, a.id, new cl("ML:" + h.length)), h = "0");
                            mb(n, 3);
                            break;
                        case 2:
                            l = nb(n), hh(a.context, a.id, l);
                        case 3:
                            b = h, c = _.re(a.I) + 3E5, n.j = 0
                    }
                })
            });
            var f = (D = e(), _.t(D, "finally")).call(D, function () {
                f = void 0
            });
            this.l.G(function () {
                var g, h;
                return _.jb(function (k) {
                    if (1 == k.j) {
                        g = _.re(a.I) >= c;
                        h = null === b || "0" === b;
                        if (!g && !h) {
                            k.j = 2;
                            return
                        }
                        f || (f = (D = e(), _.t(D, "finally")).call(D, function () {
                            f = void 0
                        }));
                        return kb(k, f, 2)
                    }
                    return k.return((0, C.K)(b))
                })
            })
        } else this.l.G(function () {
            return v.Promise.resolve("")
        })
    };
    go.prototype.m = function () {
        this.l.G(function () {
            return v.Promise.resolve("")
        })
    };
    var fo = function (a, b) {
        Z.call(this, a, 979);
        this.I = b;
        this.A = W(this)
    };
    _.O(fo, Z);
    fo.prototype.j = function () {
        var a = this, b = "function" !== typeof this.I.document.browsingTopics,
            c = !Sf("browsing-topics", this.I.document);
        b = b || c;
        !_.H(qw) && b ? Wy(this.A) : Ti(this.I).then(function (d) {
            a.A.G(d)
        })
    };
    fo.prototype.m = function () {
        Wy(this.A)
    };
    var ko = function (a) {
        Z.call(this, a, 1083);
        this.A = W(this)
    };
    _.O(ko, Z);
    ko.prototype.j = function () {
        var a = yj();
        a ? Xy(this.A, a) : Wy(this.A)
    };
    var Wm = function (a, b, c, d) {
        Z.call(this, a, 879);
        this.o = b;
        this.l = W(this);
        c && (this.C = X(this, d))
    };
    _.O(Wm, Z);
    Wm.prototype.j = function () {
        var a, b;
        (null != (b = null == (a = this.C) ? void 0 : a.value) ? b : this.o.m()) ? (a = this.o.o("loaded"), Xy(this.l, a)) : Wy(this.l)
    };
    var Vm = function (a, b, c) {
        Z.call(this, a, 896);
        this.l = b;
        this.Cb = W(this);
        c && iz(this, c)
    };
    _.O(Vm, Z);
    Vm.prototype.j = function () {
        this.Cb.G(this.l.m())
    };
    var EI = function (a, b) {
        Z.call(this, a, 1018);
        this.hb = gz(this);
        this.l = Y(this, b)
    };
    _.O(EI, Z);
    EI.prototype.j = function () {
        var a, b, c,
            d = _.A(null != (c = null == (a = this.l.value) ? void 0 : null == (b = Qe(a, ry, 5)) ? void 0 : en(b, 1)) ? c : []);
        for (a = d.next(); !a.done; a = d.next()) ye(a.value);
        this.hb.notify()
    };
    var FI = function (a, b) {
        Z.call(this, a, 1070);
        this.l = W(this);
        this.o = Y(this, b)
    };
    _.O(FI, Z);
    FI.prototype.j = function () {
        var a, b = null == (a = this.o.value) ? void 0 : Qe(a, ry, 5);
        if (b) {
            a = x(b, 3);
            var c = [];
            b = _.A(pc(b, 2, $b));
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = new Pt;
                var f = new Nt;
                e = _.z(f, 1, e);
                d = _.Yg(d, 2, e);
                a && (e = new Lt, e = _.z(e, 1, 1), e = _.z(e, 2, a), _.Yg(d, 3, e));
                c.push(d)
            }
            this.l.G(c)
        } else this.l.G([])
    };
    var vp = function (a, b, c) {
        Z.call(this, a, 706);
        this.I = b;
        this.A = W(this);
        this.l = X(this, c)
    };
    _.O(vp, Z);
    vp.prototype.j = function () {
        Vy(this.A, me(this.l.value, this.I))
    };
    var GI = function (a, b) {
        Z.call(this, a, 1081);
        this.wa = W(this);
        this.l = Y(this, b)
    };
    _.O(GI, Z);
    GI.prototype.j = function () {
        this.l.value ? this.wa.G(this.l.value) : Wy(this.wa)
    };
    var HI = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 1080);
        this.Y = b;
        this.googletag = c;
        this.U = d;
        this.C = e;
        this.l = f;
        this.F = g;
        this.o = W(this)
    };
    _.O(HI, Z);
    HI.prototype.j = function () {
        if (yl(this.l, Tt, 2) && $m((0, C.K)(Qe(this.l, Tt, 2)))) {
            var a;
            kn(this.Y, this.googletag, this.l, null != (a = this.U) ? a : this.C.j, this.F);
            null != x(this.l, 1) ? this.o.G(de(this.l, 1)) : Wy(this.o)
        } else Wy(this.o)
    };
    var II = new v.Map([[1, 5], [2, 2], [3, 3]]), JI = function (a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1079);
        this.googletag = b;
        this.U = c;
        this.L = d;
        this.l = e;
        this.F = f;
        this.C = g;
        this.o = h
    };
    _.O(JI, Z);
    JI.prototype.j = function () {
        var a = this, b = this.C.getAdUnitPath(), c = II.get(ce(this.C, 2, 0));
        if (b && c && (b = Jm(this.context, this.F, this.L, {Gc: c, adUnitPath: b, Ia: !0}))) {
            var d = (0, C.K)(b.j);
            this.o && hn((0, C.K)(gn(this.l, d.getSlotElementId())), this.o);
            this.googletag.cmd.push(function () {
                d.addService(a.googletag.pubads())
            });
            jn(document, function () {
                a.googletag.display(d);
                var e;
                F(null != (e = a.U) ? e : a.l.j, 4) && a.googletag.pubads().refresh([d])
            })
        }
    };
    var KI = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 1082);
        this.googletag = b;
        this.U = c;
        this.R = d;
        this.o = e;
        this.O = f;
        this.F = [];
        this.L = W(this);
        this.C = new GI(this.context, this.L);
        this.l = [];
        this.wa = this.C.wa;
        _.Um(this, this.C);
        a = _.A(g);
        for (b = a.next(); !b.done; b = a.next()) this.l.push(X(this, b.value))
    };
    _.O(KI, Z);
    KI.prototype.j = function () {
        if (_.H(Ww)) {
            var a = LI(this), b = a.Le, c = a.Xf, d;
            Vy(this.L, null == (d = a.tf) ? void 0 : Qe(d, Pt, 4));
            a = new of;
            _.Um(this, a);
            b = _.A(b);
            for (d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                var e = void 0;
                I(a, new JI(this.context, this.googletag, null != (e = this.U) ? e : this.o.j, this.R, this.o, this.O, (0, C.K)(cn(d, Rt, 5, Yt)), Qe(d, Pt, 4)))
            }
            c = _.A(c);
            for (d = c.next(); !d.done; d = c.next()) b = d.value, b = new HI(this.context, document, this.googletag, this.U, this.o, (0, C.K)(cn(b, Vt, 6, Yt)), Qe(b, Pt, 4)), I(a, b), this.F.push(b.o);
            I(a, this.C);
            Bf(a)
        } else Wy(this.wa)
    };
    var LI = function (a) {
        var b = [], c = [];
        a = _.A(_.t(a.l, "flatMap").call(a.l, function (f) {
            return f.value
        }));
        for (var d = a.next(); !d.done; d = a.next()) switch (d = d.value, $i(d, Yt)) {
            case 5:
                b.push(d);
                break;
            case 6:
                c.push(d);
                break;
            case 8:
                var e = d
        }
        return {Le: b, Xf: c, tf: e}
    };
    var ln = new v.Map([[1, 5], [2, 2], [3, 3]]);
    var fq = function (a, b, c, d, e) {
        var f = eb.apply(5, arguments);
        Z.call(this, a, 912);
        this.googletag = b;
        this.U = c;
        this.F = d;
        this.C = e;
        this.l = W(this);
        this.wa = W(this);
        this.o = [];
        f = _.A(f);
        for (var g = f.next(); !g.done; g = f.next()) this.o.push(X(this, g.value))
    };
    _.O(fq, Z);
    fq.prototype.j = function () {
        if (_.H(Ww)) {
            for (var a = [], b = _.A(this.o), c = b.next(); !c.done; c = b.next()) {
                c = _.A(c.value.value);
                for (var d = c.next(); !d.done; d = c.next()) switch (d = d.value, $i(d, Yt)) {
                    case 5:
                        var e = void 0, f = void 0;
                        mn(this.context, this.googletag, (0, C.K)(cn(d, Rt, 5, Yt)), null != (e = Qe(d, Pt, 4)) ? e : null, null != (f = this.U) ? f : hi().j, this.F, this.C);
                        break;
                    case 6:
                        e = (0, C.K)(cn(d, Vt, 6, Yt));
                        yl(e, Tt, 2) && $m((0, C.K)(Qe(e, Tt, 2))) && (f = void 0, kn(document, this.googletag, (0, C.K)(cn(d, Vt, 6, Yt)), null != (f = this.U) ? f : hi().j, Qe(d, Pt, 4)), (d = de(e, 1)) && a.push(d));
                        break;
                    case 8:
                        yl(d, Pt, 4) && this.wa.G((0, C.K)(Qe(d, Pt, 4)))
                }
            }
            this.l.G(a)
        } else this.l.G([]);
        Wy(this.wa)
    };
    fq.prototype.H = function (a) {
        this.m(a)
    };
    fq.prototype.m = function () {
        this.l.G([])
    };
    var MI = function (a, b, c, d) {
        Z.call(this, a, 890);
        this.C = b;
        this.o = c;
        this.l = Y(this, d)
    };
    _.O(MI, Z);
    MI.prototype.j = function () {
        var a = this;
        If(this.C, this.l.value, function (b, c) {
            hh(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var NI = function (a, b, c, d, e, f, g) {
        _.U.call(this);
        this.context = a;
        this.O = b;
        this.da = c;
        this.l = d;
        this.N = e;
        this.ba = f;
        this.ka = g;
        this.ha = new wI(this.context, this.ba);
        this.m = new lI(this.context, this.ha.l);
        this.gb = this.m.gb;
        this.Sa = this.m.Sa;
        this.j = new HH(this.context, this.m.l, window);
        this.H = new iI(this.context, this.j.C);
        this.M = new jI(this.context, this.j.o);
        var h;
        this.o = new nI(this.context, null != (h = window.location.hash) ? h : "");
        this.B = new fq(this.context, Oj(), null, this.O, this.l, this.o.A, this.m.Gb);
        this.R = _.H(Xw);
        this.T = new KI(this.context, Oj(), null, this.O, this.da, this.l, [this.o.A, this.m.Gb]);
        this.F = new yI(this.context, window);
        _.H(rw) || (this.Z = new go(this.context, window), this.ia = new fo(this.context, window), this.qb = this.Z.l, this.Ab = this.ia.A, _.Um(this, this.ia), _.Um(this, this.Z), _.H(jo) && (this.L = new ko(this.context), _.Um(this, this.L), this.vc = this.L.A));
        this.W = new kI(this.context, this.ka, this.j.Ja, this.gb, this.j.l, this.B.l, this.T.F, this.R);
        this.ab = this.H.ab;
        this.Ra = this.j.Ra;
        this.Za = this.j.Za;
        this.Ja = this.j.Ja;
        this.ja = this.j.l;
        this.kb = this.H.kb;
        this.ma = this.B.l;
        this.Pa = this.F.Pa;
        this.la = this.M.o;
        this.Tb = this.M.l;
        this.Wb = this.W.A;
        this.C = new WH(this.context, this.Pa, this.Wb, this.ab, this.Ra, this.kb, this.la, this.Tb, this.Za);
        this.Db = this.C.Db;
        this.Eb = this.C.Eb;
        this.wa = this.R ? this.T.wa : this.B.wa;
        this.hb = new bz;
        this.bc = new up;
        _.Um(this, this.F);
        _.Um(this, this.ha);
        _.Um(this, this.m);
        _.Um(this, this.H);
        _.Um(this, this.M);
        _.Um(this, this.j);
        _.Um(this, this.o);
        _.Um(this, this.B);
        _.Um(this, this.T);
        _.Um(this, this.C);
        _.Um(this, this.W);
        if (!f) {
            this.gb.G([]);
            this.Ja.G({});
            this.ja.G([]);
            Wy(this.ab);
            this.Ra.G(!1);
            this.kb.G(new v.Map);
            Wy(this.la);
            this.Wb.notify();
            Wy(this.ma);
            Wy(this.Tb);
            this.Za.G(!1);
            var k;
            null == (k = this.wa) || Wy(k);
            this.Sa.G([]);
            this.hb.notify();
            this.bc.G([]);
            this.Ab && Wy(this.Ab);
            this.qb && Wy(this.qb)
        }
    };
    _.O(NI, _.U);
    var OI = function (a, b) {
        var c = new of;
        _.Um(a, c);
        I(c, a.F);
        I(c, a.ha);
        I(c, a.m);
        I(c, a.j);
        I(c, a.H);
        I(c, a.W);
        I(c, a.M);
        b = new vI(a.context, window, a.m.o, b);
        a.Yc = b.l;
        I(c, b);
        I(c, a.o);
        a.R ? I(c, a.T) : I(c, a.B);
        _.H(rw) || (I(c, (0, C.K)(a.Z)), I(c, (0, C.K)(a.ia)), _.H(ho) && I(c, new io(a.context, window)), a.L && I(c, a.L));
        _.H(nw) && I(c, new xI(a.context, a.F.Pa, a.j.Ja));
        I(c, a.C);
        var d = Xm(a.context, a.ba, a.Yc);
        b = d.Cb;
        var e = d.ee;
        _.Um(c, d.qa);
        d = new EI(a.context, e);
        a.hb = d.hb;
        I(c, d);
        d = new FI(a.context, e);
        I(c, d);
        a.bc = d.l;
        _.H(px) || Ik() || (b = Qm(a.context, a.l, a.N, void 0, window, b, e), e = b.eb, _.Um(a, b.qa), b = new vp(a.context, window, e), I(c, b), e = new MI(a.context, Oj(), console, b.A), I(c, e), e = new BI(a.context, a.Sa), a.Fd = e.o, I(c, e), _.H(tx) && (b = new DI(a.context, e.l, b.A), I(c, b)));
        I(c, new AI(a.context, Oj(), a.O, a.da, a.l, a.m.C));
        Bf(c);
        return _.t(Object, "assign").call(Object, {}, {
            Yc: a.Yc,
            Wb: a.Wb,
            gb: a.gb,
            Pa: a.Pa,
            Ja: a.Ja,
            ab: a.ab,
            Ra: a.Ra,
            Za: a.Za,
            kb: a.kb,
            Db: a.Db,
            Eb: a.Eb,
            Tb: a.Tb,
            Fd: a.Fd,
            wa: a.wa,
            Sa: a.Sa,
            hb: a.hb,
            bc: a.bc
        }, _.H(rw) ? {} : {qb: a.qb, Ab: a.Ab, vc: a.vc})
    };
    new bz;
    new up;
    new up;
    new up;
    new up;
    new up;
    new up;
    new up;
    new up;
    new up;
    new up;
    new up;
    new bz;
    new up;
    var PI = ["Debug", "Info", "Warning", "Error", "Fatal"], QI = function (a, b, c) {
        this.level = a;
        this.message = b;
        this.j = c;
        this.timestamp = new Date
    };
    ba = QI.prototype;
    ba.getSlot = function () {
        return this.j
    };
    ba.getLevel = function () {
        return this.level
    };
    ba.getTimestamp = function () {
        return this.timestamp
    };
    ba.getMessage = function () {
        return this.message
    };
    ba.toString = function () {
        return this.timestamp.toTimeString() + ": " + PI[this.level] + ": " + this.message
    };
    var RI = {
        20: function (a) {
            return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
        }, 23: function (a) {
            return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
        }, 34: function (a) {
            return "Size mapping is null because invalid mappings were added: " + a[0] + "."
        }, 60: function (a) {
            return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
        }, 66: function (a) {
            return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
        }, 68: function () {
            return "Slots cannot be cleared until service is enabled."
        }, 80: function (a) {
            return "Slot object at position " + a[0] + " is of incorrect type."
        }, 84: function (a) {
            return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
        }, 93: function (a) {
            return "Failed to register listener. Unknown event type: " + a[0] + "."
        }, 96: function (a) {
            return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
        }, 122: function (a) {
            return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
        }, 121: function (a) {
            return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
        }, 105: function (a) {
            return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
        }, 106: function (a) {
            return "Publisher betas " + a[0] + " were declared after enableServices() was called."
        }, 107: function (a) {
            return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
        }, 108: function (a) {
            return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
        }, 123: function (a) {
            return "Refresh was throttled for slot: " + a[0] + "."
        }, 113: function (a) {
            return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
        }, 116: function (a) {
            return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
        }, 114: function () {
            return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
        }, 115: function () {
            return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
        }, 132: function (a) {
            return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
        }, 133: function () {
            return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
        }, 134: function (a) {
            return nn(a[0]) + " " + a[1] + " not requested: Format already created on the page."
        }, 135: function (a) {
            return nn(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
        }, 136: function (a) {
            return nn(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
        }, 137: function (a) {
            return nn(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
        }, 138: function (a) {
            return nn(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
        }, 139: function (a) {
            return nn(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
        }, 140: function (a) {
            return nn(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
        }, 142: function (a) {
            return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
        }, 145: function (a) {
            return nn(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
        }, 143: function () {
            return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
        }, 147: function () {
            return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
        }, 148: function () {
            return "CommerceAdsConfig must contain a valid value for either categories or queries."
        }
    }, SI = {
        26: function (a) {
            return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
        }, 28: function (a) {
            return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
        }, 149: function (a) {
            return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
        }, 92: function (a) {
            return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
        }, 30: function (a) {
            return "Exception in googletag.cmd function: " + a[0] + "."
        }, 125: function (a) {
            return "google-product-ad element is invalid: " + a[0] + "."
        }, 126: function () {
            return "Attempted to collect prebid data but window.pbjs is undefined."
        }, 127: function (a) {
            return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
        }, 144: function () {
            return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
        }
    };
    var TI = function (a) {
        this.context = a;
        this.D = this.J = this.j = 0;
        this.B = window;
        this.m = [];
        this.m.length = 1E3
    }, fH = function (a) {
        return [].concat(_.Jd(a.m.slice(a.j)), _.Jd(a.m.slice(0, a.j))).filter(function (b) {
            return !!b
        })
    }, gH = function (a, b) {
        return fH(a).filter(function (c) {
            return c.getSlot() === b
        })
    }, hH = function (a, b) {
        return fH(a).filter(function (c) {
            return c.getLevel() >= b
        })
    };
    TI.prototype.log = function (a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new QI(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
        this.m[this.j] = c;
        this.j = (this.j + 1) % 1E3;
        g = _.Ee(uw) && 100 > this.J;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(), k = b.getMessageId(), l = RI[k] || SI[k];
        g && f && (b = _.Ee(uw), oi("gpt_eventlog_messages", function (n) {
            ++e.J;
            ui(n, e.context);
            K(n, "level", a);
            K(n, "messageId", k);
            K(n, "args", h.join("|"));
            l || K(n, "noMsg", !0);
            var m = Error(), p;
            var r = null != (p = m.stack) ? p : "";
            m = m.message;
            try {
                -1 == r.indexOf(m) && (r = m + "\n" + r);
                for (var u; r != u;) u = r, r = r.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                var w = r.replace(RegExp("\n *", "g"), "\n")
            } catch (E) {
                w = m
            }
            K(n, "stack", w)
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new cl(b);
            d = this.D < _.Ee(vw) && f && _.q.console;
            if (this.B === top && d || _.t(_.q.navigator.userAgent, "includes").call(_.q.navigator.userAgent, "Lighthouse")) (function (n) {
                var m, p, r, u;
                return void (2 === a ? null == (p = (m = _.q.console).warn) ? void 0 : p.call(m, n) : null == (u = (r = _.q.console).error) ? void 0 : u.call(r, n))
            })(b), this.D++
        }
        return c
    };
    TI.prototype.info = function (a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var M = function (a, b, c) {
        a.log(2, b, c, !1)
    };
    TI.prototype.error = function (a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var UI = function (a, b) {
        Z.call(this, a, 1068);
        this.l = b;
        this.A = W(this)
    };
    _.O(UI, Z);
    UI.prototype.j = function () {
        var a = this, b, c, d, e, f;
        return _.jb(function (g) {
            switch (g.j) {
                case 1:
                    return kb(g, null == (b = a.l) ? void 0 : b.promise, 2);
                case 2:
                    c = g.m;
                    d = a.A;
                    e = d.G;
                    if (!c) {
                        f = "";
                        g.j = 3;
                        break
                    }
                    return kb(g, c(), 4);
                case 4:
                    f = g.m;
                case 3:
                    e.call(d, f), g.j = 0
            }
        })
    };
    UI.prototype.m = function () {
        this.A.G("")
    };
    var VI = function (a, b) {
        Z.call(this, a, 1091);
        this.A = W(this);
        b && (this.l = Y(this, b))
    };
    _.O(VI, Z);
    VI.prototype.j = function () {
        var a;
        null != (a = this.l) && a.value ? Xy(this.A, this.l.value()) : this.A.G("")
    };
    VI.prototype.m = function () {
        this.A.G("")
    };
    var Wn = function () {
        this.m = [];
        this.hostpageLibraryTokens = [];
        this.j = {}
    }, WI = function (a, b) {
        if (!_.t(a.m, "includes").call(a.m, b) && (D = [1, 2, 3], _.t(D, "includes")).call(D, b)) {
            var c = yz[b];
            if (c) {
                var d = b + "_hostpage_library";
                if (c = Xj(document, c)) c.id = d
            }
            a.m.push(b);
            b = new zz(b);
            a.hostpageLibraryTokens.push(b);
            a = Oj();
            a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
            a.hostpageLibraryTokens[b.j] = b.m
        }
    }, XI = function (a, b, c) {
        var d;
        a.j[b] = null != (d = a.j[b]) ? d : new v.Set;
        a.j[b].add(c)
    }, Vn = function (a, b) {
        var c, d;
        a = null != (d = null == (c = a.j[b]) ? void 0 : _.t(c, "values").call(c)) ? d : [];
        return [].concat(_.Jd(a))
    };
    var En = "3rd party ad content";
    var YI = function (a, b) {
        this.serviceName = b;
        this.slot = (0, C.K)(a.j)
    }, ZI = function (a, b) {
        YI.call(this, a, b);
        this.isEmpty = !1;
        this.slotContentChanged = !0;
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
        this.isBackfill = !1;
        this.companyIds = this.yieldGroupIds = null
    };
    _.O(ZI, YI);
    var $I = function () {
        YI.apply(this, arguments)
    };
    _.O($I, YI);
    var aJ = function (a, b, c) {
        YI.call(this, a, b);
        this.inViewPercentage = c
    };
    _.O(aJ, YI);
    var bJ = function () {
        YI.apply(this, arguments)
    };
    _.O(bJ, YI);
    var cJ = function () {
        YI.apply(this, arguments)
    };
    _.O(cJ, YI);
    var dJ = function () {
        YI.apply(this, arguments)
    };
    _.O(dJ, YI);
    var eJ = function () {
        YI.apply(this, arguments)
    };
    _.O(eJ, YI);
    var fJ = function (a, b, c, d) {
        YI.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.O(fJ, YI);
    var gJ = function (a, b, c) {
        YI.call(this, a, b);
        this.payload = c
    };
    _.O(gJ, YI);
    var hJ = function () {
        YI.apply(this, arguments)
    };
    _.O(hJ, YI);
    var Rn = new v.Set, iJ = function (a, b, c) {
        var d = 0, e = function () {
            d = 0
        };
        return function (f) {
            d || (d = _.q.setTimeout(e, b), a.apply(c, arguments))
        }
    }(function () {
        throw new cl("Reached Limit for addEventListener");
    }, 3E5), jJ = function (a, b) {
        _.U.call(this);
        this.m = a;
        this.l = b;
        this.j = [];
        this.B = !1;
        this.C = 0;
        this.M = new v.Map;
        Rn.add(this);
        this.m.info(cG(this.getName()))
    };
    _.O(jJ, _.U);
    var Tn = function (a) {
        a.B || (a.B = !0, ze(6), a.F())
    };
    jJ.prototype.slotAdded = function (a, b) {
        this.j.push(a);
        var c = new cJ(a, this.getName());
        this.l.dispatchEvent("slotAdded", 818, c);
        this.m.info(eG(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        vs(b, 4, a)
    };
    jJ.prototype.destroySlots = function (a) {
        var b = this;
        return a.filter(function (c) {
            return ha(b.j, c)
        })
    };
    jJ.prototype.addEventListener = function (a, b) {
        var c = this;
        if (this.C >= _.Ee(tw) && 0 < _.Ee(tw)) iJ(); else {
            var d;
            null != (d = this.M.get(a)) && d.has(b) || (this.M.has(a) || this.M.set(a, new v.Map), d = function (e) {
                e = e.detail;
                try {
                    b(e)
                } catch (h) {
                    c.m.error(vG(String(h), a));
                    var f, g;
                    null == (f = window.console) || null == (g = f.error) || g.call(f, h)
                }
            }, (0, C.K)(this.M.get(a)).set(b, d), lF(this.l, a, d), this.C++)
        }
    };
    jJ.prototype.removeEventListener = function (a, b) {
        var c, d = null == (c = this.M.get(a)) ? void 0 : c.get(b);
        if (!d || !kF(this.l, a, d)) return !1;
        this.C--;
        return (0, C.K)(this.M.get(a)).delete(b)
    };
    var Jn = function (a) {
        for (var b = _.A(Rn), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var Nn = function (a, b, c, d) {
        jJ.call(this, a, c);
        this.H = b;
        this.ads = new v.Map;
        this.o = this.wb = !1;
        (_.H(Lk) ? d : _.we(Mk)).D = !0
    };
    _.O(Nn, jJ);
    Nn.prototype.slotAdded = function (a, b) {
        var c = this;
        lF(a, oF, function (d) {
            F(d.detail, 11) && (kJ(c, a).Uf = !0)
        });
        jJ.prototype.slotAdded.call(this, a, b)
    };
    Nn.prototype.F = function () {
    };
    Nn.prototype.setRefreshUnfilledSlots = function (a) {
        "boolean" === typeof a && (this.wb = a)
    };
    var bH = function (a, b) {
        b && !a.o && oi("ima_sdk_v", function (c) {
            a.o = !0;
            K(c, "v", b)
        });
        return String(ys())
    }, $G = function (a, b) {
        var c = hi().j, d = hi().m;
        if (a.H.B) {
            var e = {lb: 3};
            a.T && (e.Jb = a.T);
            a.L && (e.Kb = a.L);
            b = null != b ? b : a.j;
            c = Rh(c, d);
            d = e.Jb;
            var f = e.Kb;
            d && "number" !== typeof d || f && "number" !== typeof f || a.H.refresh(c, b, e)
        } else (null == b ? 0 : b[0]) && a.m.error(kG(b[0].getDomId()))
    }, cH = function (a, b) {
        var c;
        return a.H.B && !(null == (c = a.ads.get(b)) || !c.Uf)
    }, aH = function (a, b) {
        return a.j.filter(function (c) {
            return _.t(b, "includes").call(b, c.toString())
        })
    };
    Nn.prototype.getName = function () {
        return "companion_ads"
    };
    var dH = function (a, b, c, d) {
        b = new ZI(b, a.getName());
        null != c && null != d && (b.size = [c, d]);
        a.l.dispatchEvent("slotRenderEnded", 67, b)
    }, kJ = function (a, b) {
        var c = a.ads.get(b);
        c || (c = {}, a.ads.set(b, c), _.Km(b, function () {
            return a.ads.delete(b)
        }));
        return c
    };
    var On = function (a, b) {
        jJ.call(this, a, b)
    };
    _.O(On, jJ);
    On.prototype.getName = function () {
        return "content"
    };
    On.prototype.F = function () {
    };
    var lJ = Jq(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]), mJ = _.pr(function () {
        wv("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
    }), oJ = function (a, b) {
        var c = this;
        this.N = a;
        this.j = new v.Map;
        this.aa = new v.Set;
        (null != b ? b : _.we(Mk)).m = function (d) {
            return nJ(c, d)
        }
    };
    oJ.prototype.defineSlot = function (a, b, c, d, e) {
        a = Ok(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.j;
        a.Ic || b.error(Ij("googletag.defineSlot", [c, d, e]));
        return null
    };
    var Ok = function (a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            fb: f,
            pe: void 0 === g ? !1 : g
        }) : {}
    };
    oJ.prototype.add = function (a, b, c, d, e) {
        var f = this, g = void 0 === e ? {} : e;
        e = g.fb;
        var h = void 0 === g.format ? 0 : g.format, k = void 0 === g.pe ? !1 : g.pe;
        g = void 0 === g.Ia ? !1 : g.Ia;
        try {
            if (!(new RegExp(_.t(String, "raw").call(String, lJ), "u")).test(c)) return b.error(ZF(c)), {Ic: !0}
        } catch (m) {
        }
        var l = hm(h, g);
        if (l) return oi("gpt_pla_ns", function (m) {
            K(m, "iu", c);
            K(m, "f", null != h ? h : "");
            K(m, "nsr", l);
            ui(m, a)
        }), Ql(b, l, h, c), {};
        k && mJ();
        k = this.j.get(c) || Number(k);
        d = pJ(this, a, b, c, k, d, e || "gpt_unit_" + c + "_" + k);
        b = d.Ya;
        var n = d.slotId;
        d = d.Ic;
        if (!n) return {Ic: d};
        this.j.set(c, k + 1);
        this.aa.add(n);
        _.Km(n, function () {
            return void f.aa.delete(n)
        });
        TD(c);
        return {slotId: n, Ya: b}
    };
    var fI = function (a, b) {
        a = _.A(a.aa);
        for (var c = a.next(); !c.done; c = a.next()) if (c = c.value, c.getDomId() === b) return c
    }, Kn = function (a) {
        a = _.A(a);
        for (var b = a.next(); !b.done; b = a.next()) b.value.Ea()
    }, pJ = function (a, b, c, d, e, f, g) {
        var h = fI(a, g);
        if (h) return c.error(YF(g, d, h.getAdUnitPath())), {Ic: !0};
        var k = new wH;
        xH(_.z(k, 1, d), g);
        yH(k, $k(f));
        kE(k);
        var l = new Sd(b, d, e, g);
        lH(l, fl(b, c, l));
        _.Km(l, function () {
            var n = hi(), m = l.getDomId();
            delete n.m[m];
            n.D.delete(l);
            n = l.getAdUnitPath();
            n = Rg(n);
            var p;
            m = (null != (p = sh.get(n)) ? p : 0) - 1;
            0 >= m ? sh.delete(n) : sh.set(n, m);
            c.info(xG(l.toString()), l);
            (p = Bj.get(l)) && Cj.delete(p);
            Bj.delete(l)
        });
        c.info(MF(l.toString()), l);
        lF(l, pF, function (n) {
            n = n.detail.fg;
            c.info(NF(l.getAdUnitPath()), l);
            Dy(_.we(fh), "7", 9, DF(a.N, l), 0, n)
        });
        lF(l, oF, function (n) {
            var m = n.detail;
            c.info(OF(l.getAdUnitPath()), l);
            var p;
            n = _.we(fh);
            var r = x(k, 20);
            m = null != (p = m.getEscapedQemQueryId()) ? p : "";
            n.j && (_.q.google_timing_params = _.q.google_timing_params || {}, _.q.google_timing_params["qqid." + r] = m)
        });
        lF(l, So, function () {
            return void c.info(PF(l.getAdUnitPath()), l)
        });
        lF(l, Uo, function () {
            return void c.info(QF(l.getAdUnitPath()), l)
        });
        return {Ya: k, slotId: l}
    }, nJ = function (a, b) {
        var c = new RegExp("(^|,|/)" + b + "($|,|/)");
        return [].concat(_.Jd(a.aa)).some(function (d) {
            return c.test(Rg(d.getAdUnitPath()))
        })
    }, Xn = function (a) {
        return Vn(_.we(Wn), a).map(function (b) {
            var c;
            return null == (c = gi(b, document)) ? void 0 : c.contentWindow
        }).filter(function (b) {
            return !!b
        })
    };
    var qJ = P(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        rJ = P(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        sJ = P(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        tJ = P(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        uJ = new v.Map([[2, {Pf: "page_level_ads"}]]), vJ = function (a) {
            var b = void 0 === b ? uJ : b;
            this.context = a;
            this.j = b;
            this.m = new v.Map;
            this.loaded = new v.Set
        }, xJ;
    vJ.prototype.load = function (a) {
        var b = _.wJ(this, a), c, d = (null != (c = this.j.get(a.module)) ? c : {}).Pf;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            c = (c = _.Ug(172)) && "pagead2.googlesyndication.com" === ev((c.src || "").match(_.dv)[3] || null) ? this.context.ib ? B(sJ, this.context.ib, d) : B(tJ, d, this.context.Ga) : this.context.ib ? B(qJ, this.context.ib, d) : B(rJ, d, this.context.Ga);
            d = {};
            var e = _.Ee(Yw), f = _.Ee(zw);
            e && (d.cb = e);
            f && (d.mcb = f);
            _.t(Object, "keys").call(Object, d).length ? (c = xr.exec(Za(c).toString()), e = c[3] || "", d = Gd(c[1] + yr("?", c[2] || "", d) + yr("#", e))) : d = c;
            xJ(this, a);
            Xj(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.wJ = function (a, b) {
        b = b.module;
        a.m.has(b) || a.m.set(b, new _.zg);
        return (0, C.K)(a.m.get(b))
    };
    xJ = function (a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = _.dh(a.context, 340, function (e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = (0, C.K)(a.j.get(c));
                f = (void 0 === f.Ye ? [] : f.Ye).map(function (g) {
                    return _.wJ(a, g).promise
                });
                v.Promise.all(f).then(function () {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(Oj(), b, {
            value: function (e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            }, writable: !1, enumerable: !1
        })
    };
    new up;
    new up;
    new up;
    var yJ = function () {
        this.resources = {}
    };
    var Yp = function (a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 682);
        this.N = b;
        this.format = c;
        this.slotId = d;
        this.I = e;
        this.A = gz(this);
        this.l = Y(this, f);
        this.o = X(this, g);
        this.F = X(this, h);
        this.C = Y(this, k)
    };
    _.O(Yp, Z);
    Yp.prototype.j = function () {
        var a = this;
        if ((2 === this.format || 3 === this.format) && this.l.hc() && pp(this.l.value, 12, !1)) {
            var b = (0, C.K)(this.C.value).kf, c = _.To(this.N, this.slotId), d = this.F.value, e = this.o.value;
            _.ji(e, {"max-height": "30vh", overflow: "hidden"});
            if (zJ) zJ.Ag(e); else {
                zJ = new b(this.context, this.format, e, this.I, d, this.N, this.slotId);
                b = {};
                d = _.A(ae(this.l.value, au, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[x(f, 1)] = x(f, 2);
                zJ.Eg(b);
                zJ.Yb();
                xF(this.N, this.slotId, function () {
                    zJ && (zJ.Ea(), zJ = null);
                    c && _.BF(a.N, a.slotId)
                })
            }
            _.Km(this, function () {
                return _.av(e)
            })
        }
        this.A.notify()
    };
    var zJ = null;
    var Zp = function (a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.format = c;
        this.W = d;
        this.l = Y(this, e);
        this.F = X(this, f);
        this.R = X(this, g);
        this.L = Y(this, h);
        this.O = Y(this, k);
        this.C = X(this, l);
        this.o = mF(b, Io, function (n) {
            n = n.detail;
            try {
                var m = JSON.parse(n.data);
                return "sth" === m.googMsgType && "i-adframe-load" === m.msg_type
            } catch (p) {
                return !1
            }
        })
    };
    _.O(Zp, Z);
    Zp.prototype.j = function () {
        var a = this, b, c, d, e, f, g, h, k, l, n, m;
        return _.jb(function (p) {
            if (1 == p.j) {
                b = _.Ee(Lw);
                c = a.l.value;
                if (!c || 5 !== a.format) return p.return();
                Math.random() < _.Ee(Mw) && v.Promise.race([a.o.then(function () {
                    return !1
                }), new v.Promise(function (r) {
                    JF(a, a.id, window, "pagehide", function (u) {
                        u && r(!0)
                    })
                })]).then(function (r) {
                    var u = new Uj("int_pm");
                    K(u, "ts", Date.now());
                    K(u, "flg", b);
                    K(u, "qem", a.C.value);
                    K(u, "ph", Number(r));
                    Wj(u)
                });
                d = a.R.value;
                e = a.F.value;
                f = (0, C.K)(a.O.value);
                g = f.xf;
                h = new _.XD(a.context);
                n = (null == (k = a.l.value) ? 0 : null != x(k, 14)) ? 60 * (0, C.K)(null == (l = a.l.value) ? void 0 : x(l, 14)) : 604800;
                m = new g(window, e, d, h, a.W, Go(ae(c, au, 13)), Zl(a.slotId), function () {
                    return void a.Ea()
                }, n, a.L.value);
                _.Um(a, m);
                switch (b) {
                    case 0:
                        m.W();
                        break;
                    case 1:
                        p.j = 2;
                        return
                }
            } else {
                if (4 != p.j) return kb(p, a.o, 4);
                if (a.J) return p.return();
                m.W(!0)
            }
            p.j = 0
        })
    };
    var AJ = function () {
        this.module = 2
    };
    AJ.prototype.toString = function () {
        return String(this.module)
    };
    _.BJ = new AJ;
    var Up = function (a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.C = b;
        this.format = c;
        this.A = W(this);
        this.l = Y(this, d);
        this.o = Y(this, e);
        f && iz(this, f)
    };
    _.O(Up, Z);
    Up.prototype.j = function () {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.l.value) || !pp(a, 12, !1));
        a = 5 === this.format && this.o.value;
        b || a ? Xy(this.A, this.C.load(_.BJ)) : Wy(this.A)
    };
    var CJ = function (a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.na = c;
        iz(this, d);
        jz(this, [e, f])
    };
    _.O(CJ, Z);
    CJ.prototype.j = function () {
        this.na.dispatchEvent("rewardedSlotClosed", 703, new hJ(this.slotId, "publisher_ads"))
    };
    var DJ = function (a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.na = c;
        iz(this, d);
        this.l = Y(this, e)
    };
    _.O(DJ, Z);
    DJ.prototype.j = function () {
        var a, b = null == (a = this.l.value) ? void 0 : a.payload;
        this.na.dispatchEvent("rewardedSlotGranted", 702, new gJ(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var EJ = {width: "100%", height: "100%", left: "0", top: "0"}, FJ = function (a, b, c, d, e, f) {
        Z.call(this, a, 693);
        this.I = b;
        this.F = f;
        this.A = gz(this);
        this.l = X(this, c);
        this.o = X(this, d);
        iz(this, e);
        this.C = new _.DD(this.I)
    };
    _.O(FJ, Z);
    FJ.prototype.j = function () {
        var a = this;
        if (!this.F.yb) {
            var b = 0 === (0, _.em)() ? "rgba(1,1,1,0.5)" : "white";
            _.ji(this.o.value, _.t(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, EJ));
            _.Km(this, _.MD(this.I.document, this.I));
            Dd(this.l.value).postMessage(JSON.stringify({type: "rewarded", message: "visible"}), "*");
            if (this.I === this.I.top) {
                this.I.location.hash = "goog_rewarded";
                var c = new _.GD(this.C);
                _.HD(c);
                _.Km(this, function () {
                    _.ID(c);
                    "goog_rewarded" === a.I.location.hash && (a.I.location.hash = "")
                })
            }
            this.A.notify()
        }
    };
    var GJ = function (a, b, c, d) {
        Z.call(this, a, 695);
        this.I = b;
        this.l = X(this, c);
        iz(this, d)
    };
    _.O(GJ, Z);
    GJ.prototype.j = function () {
        if (this.I === this.I.top) var a = (0, C.K)(Dd(this.l.value)),
            b = JF(this, 503, this.I, "hashchange", function (c) {
                zr(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var HJ = function (a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.na = c;
        this.A = gz(this);
        this.l = X(this, d)
    };
    _.O(HJ, Z);
    HJ.prototype.j = function () {
        var a = this.l.value, b = new _.zg, c = b.promise, d;
        this.na.dispatchEvent("rewardedSlotReady", 701, new fJ(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        cz(this.A, c)
    };
    var IJ = {width: "100%", height: "100%", left: "0", top: "0"},
        JJ = {width: "60%", height: "60%", transform: "translate(-50%, -50%)", left: "50%", top: "50%"},
        KJ = function (a, b, c, d, e) {
            Z.call(this, a, 691);
            this.C = W(this);
            this.o = gz(this);
            this.F = X(this, c);
            this.l = jz(this, [d, e])
        };
    _.O(KJ, Z);
    KJ.prototype.j = function () {
        "ha_before_make_visible" === this.l.value.message ? this.o.notify() : (_.ji(this.F.value, _.t(Object, "assign").call(Object, {position: "absolute"}, 0 === (0, _.em)() ? JJ : IJ)), this.C.G(this.l.value))
    };
    var $p = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 688);
        if (4 === c) {
            this.qa = new of;
            _.Um(this, this.qa);
            c = Jo(b, "granted", a);
            I(this.qa, c);
            var h = Jo(b, "prefetched", a);
            I(this.qa, h);
            var k = Jo(b, "closed", a);
            I(this.qa, k);
            a = Jo(b, "ha_before_make_visible", a);
            I(this.qa, a);
            var l = new KJ(this.context, b, f, h.A, a.A);
            I(this.qa, l);
            h = new HJ(this.context, b, d, l.C);
            I(this.qa, h);
            g = new FJ(this.context, e, f, g, h.A, l.o);
            I(this.qa, g);
            I(this.qa, new GJ(this.context, e, f, g.A));
            I(this.qa, new DJ(this.context, b, d, h.A, c.A));
            I(this.qa, new CJ(this.context, b, d, h.A, k.A, a.A))
        }
    };
    _.O($p, Z);
    $p.prototype.j = function () {
        var a;
        null == (a = this.qa) || Bf(a)
    };
    var LJ = function (a, b, c) {
        _.U.call(this);
        this.context = a;
        this.B = b;
        this.m = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.lf ? "fluid" : [b.width, b.height];
        this.ic = ei(a);
        this.jc = En
    };
    _.O(LJ, _.U);
    LJ.prototype.render = function () {
        var a = this.B, b = this.m, c = b.slotId, d = b.P.V, e = b.Y, f = b.size, g = b.Ib, h = b.ef, k = b.isBackfill;
        b = b.uc;
        g && Gg(g, _.Zu(e), null != h ? h : "", !1);
        Ro(_.we(fh), "5", (0, C.K)(x(d[c.getDomId()], 20)));
        c.dispatchEvent(So, 801, {Xd: 0 === a.kind ? a.Ma : "", isBackfill: k});
        a = this.H();
        b && a && a.setAttribute("data-google-container-id", b);
        c.dispatchEvent(Uo, 825, {size: f, isEmpty: !1});
        return a
    };
    LJ.prototype.loaded = function (a) {
        var b = this.m, c = b.slotId, d = b.na;
        b = b.P.V;
        c.dispatchEvent(sF, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new bJ(c, "publisher_ads"));
        Ro(_.we(fh), "6", (0, C.K)(x(b[c.getDomId()], 20)))
    };
    var MJ = function (a, b) {
        if (b) return null;
        a = a.B;
        a = 0 === a.kind ? a.Ma : "";
        b = "";
        var c = !0, d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase();
            -1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && Qg(d, 2) : (c && Qg(d, 3), a = _.H(xx) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && Qg(d, 1);
        return a
    };
    LJ.prototype.D = function () {
        _.U.prototype.D.call(this);
        var a;
        null == (a = this.m.Ib) || a.removeAttribute("data-google-query-id")
    };
    LJ.prototype.M = function (a, b) {
        var c = this, d = NJ(this, function () {
            return void c.loaded((0, C.K)(d.j))
        }, a, b);
        _.Km(this, function () {
            100 != d.status && (2 == d.C && (FE(d.D), d.C = 0), window.clearTimeout(d.F), d.F = -1, d.M = 3, d.m && (d.m.Ea(), d.m = null), _.Od(window, "resize", d.ua), _.Od(window, "scroll", d.ua), d.l && d.j && d.l == _.bv(d.j) && d.l.removeChild(d.j), d.j = null, d.l = null, d.status = 100)
        });
        return d
    };
    var NJ = function (a, b, c, d) {
        var e = a.m, f = e.ze, g = e.isBackfill, h = e.yf, k = e.uc, l = e.Lc, n = e.ld,
            m = Array.isArray(a.j) ? new _.Oh(Number(a.j[0]), Number(a.j[1])) : 1;
        return new NE({
            Ld: e.Wd,
            ic: a.ic,
            jc: a.jc,
            content: MJ(a, d),
            size: m,
            cf: !!h,
            oe: b,
            Ae: null != f ? f : void 0,
            permissions: {Jc: Fk(c, 1) ? !!F(c, 1) : !g, Kc: Fk(c, 2) ? !!F(c, 2) : !1},
            kc: !!Oj().fifWin,
            gg: kH ? kH : kH = uk(),
            Ue: yk(),
            hostpageLibraryTokens: _.we(Wn).hostpageLibraryTokens,
            Fa: function (p, r) {
                return void hh(a.context, p, r)
            },
            uniqueId: (0, C.K)(k),
            ye: Vh(),
            Lc: null != l ? l : void 0,
            Pc: null != d ? d : void 0,
            ld: null != n ? n : void 0
        })
    };
    var Lo = function () {
        LJ.apply(this, arguments)
    };
    _.O(Lo, LJ);
    Lo.prototype.H = function () {
        var a = this.m, b = a.P, c = b.U;
        a = b.V[a.slotId.getDomId()];
        b = new zk;
        c = Gk([b, c.Ta(), null == a ? void 0 : a.Ta()]);
        c = LJ.prototype.M.call(this, c);
        return (0, C.K)(c.j)
    };
    Lo.prototype.l = function () {
        return !1
    };
    var OJ = function () {
        LJ.apply(this, arguments)
    };
    _.O(OJ, LJ);
    var PJ = function (a, b) {
        var c = _.Nd(b ? "fencedframe" : "IFRAME");
        b && (c.mode = "opaque-ads");
        c.id = a.ic;
        c.name = a.ic;
        c.title = a.jc;
        Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
        c.allowTransparency = "true";
        c.scrolling = "no";
        c.marginWidth = "0";
        c.marginHeight = "0";
        c.frameBorder = "0";
        c.style.border = "0";
        c.style.verticalAlign = "bottom";
        c.setAttribute("role", "region");
        c.setAttribute("aria-label", "Advertisement");
        c.tabIndex = 0;
        return c
    }, QJ = function (a, b) {
        "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
        var c = _.dh(a.context, 774, function () {
            a.loaded(b);
            _.Od(b, "load", c)
        });
        _.hb(b, "load", c);
        _.Km(a, function () {
            return _.Od(b, "load", c)
        });
        a.m.Wd.appendChild(b)
    };
    var Mo = function () {
        OJ.apply(this, arguments)
    };
    _.O(Mo, OJ);
    Mo.prototype.H = function () {
        var a = this, b = this.m, c = b.ze;
        b = b.Lc;
        var d = PJ(this);
        if (null == c ? 0 : c.length) if (_.Tr) {
            c = _.A(c);
            for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
        } else d.sandbox.add.apply(d.sandbox, _.Jd(c));
        b && (d.allow = b);
        QJ(this, d);
        _.kh(this.context, 653, function () {
            var f = new ng(a.B.Ma, og);
            var g = f.toString().toLowerCase();
            -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? Ko(2) : (Ko(3), f = _.H(xx) ? f : new ng("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>", og));
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ka() && g.open("text/html", "replace");
            bb(g, f);
            var l, n, m;
            if (zr(null != (m = null == (l = d.contentWindow) ? void 0 : null == (n = l.location) ? void 0 : n.href) ? m : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    Mo.prototype.l = function () {
        return !0
    };
    var Oo = function () {
        OJ.apply(this, arguments)
    };
    _.O(Oo, OJ);
    Oo.prototype.H = function () {
        var a = PJ(this, !this.m.qg);
        Ki(a, this.B.Rd);
        QJ(this, a);
        return a
    };
    Oo.prototype.l = function () {
        return !1
    };
    var No = function () {
        OJ.apply(this, arguments)
    };
    _.O(No, OJ);
    No.prototype.H = function () {
        var a = this.B.url, b = this.m, c = b.P, d = c.U;
        b = c.V[b.slotId.getDomId()];
        d = Gk([d.Ta(), null == b ? void 0 : b.Ta()]);
        var e = PJ(this);
        Ki(e, a);
        OJ.prototype.M.call(this, d, e);
        var f = function () {
            e.removeEventListener("load", f);
            RJ(a)
        };
        e.addEventListener("load", f);
        Bv(e, function () {
            return void RJ(a)
        });
        return e
    };
    var RJ = function (a) {
        var b = document.querySelectorAll("script[type=webbundle]");
        if (b.length) {
            a:{
                for (var c = 0; c < b.length; c++) {
                    var d = void 0;
                    if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                        b = b[c];
                        break a
                    }
                }
                b = null
            }
            b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources, a = d.indexOf(a, 0), -1 < a && d.splice(a, 1), 0 === d.length ? document.head.removeChild(b) : (a = _.Nd("SCRIPT"), a.setAttribute("type", "webbundle"), a.textContent = JSON.stringify(c), document.head.removeChild(b), document.head.appendChild(a)))
        }
    };
    No.prototype.l = function () {
        return !1
    };
    var Wp = function (a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, w, E, N, G, R, T, Q, aa, ca, ma) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.N = c;
        this.P = d;
        this.na = e;
        this.I = f;
        this.l = W(this);
        this.C = W(this);
        this.o = gz(this);
        this.L = X(this, g);
        this.oa = X(this, h);
        iz(this, k);
        this.ba = X(this, l);
        this.F = X(this, n);
        this.Z = X(this, m);
        iz(this, G);
        this.O = X(this, p);
        this.R = Y(this, r);
        this.ya = Y(this, u);
        this.W = X(this, w);
        this.ma = Y(this, E);
        this.bb = Y(this, N);
        iz(this, R);
        this.ka = X(this, T);
        iz(this, Q);
        ma && iz(this, ma);
        this.da = Y(this, aa);
        this.ja = Y(this, ca)
    };
    _.O(Wp, Z);
    Wp.prototype.j = function () {
        var a = this, b = this.L.value;
        if (0 === b.kind && null == b.Ma) throw new Ey("invalid html");
        var c;
        b = Po(this.context, b, {
            Y: document,
            slotId: this.slotId,
            N: this.N,
            P: this.P,
            na: this.na,
            size: this.Z.value,
            Ib: this.ba.value,
            Wd: this.F.value,
            ef: this.O.value,
            lf: this.R.value,
            ze: this.ya.value,
            isBackfill: this.W.value,
            yf: this.ma.value,
            uc: this.bb.value,
            Lc: this.ka.value,
            qg: null == (c = this.da.value) ? void 0 : pp(c, 14),
            ld: this.ja.value
        }, {sg: this.oa.value});
        _.Um(this, b);
        var d = b.render();
        JF(this, this.id, this.I, "message", function (e) {
            d.contentWindow === e.source && a.slotId.dispatchEvent(Io, 824, e)
        });
        this.o.notify();
        this.l.G(d);
        this.C.G(b.l())
    };
    var bq = function (a, b, c, d, e) {
        Z.call(this, a, 863);
        this.l = c;
        this.Bb = Number(b);
        this.o = X(this, d);
        this.C = X(this, e);
        this.F = SJ(this)
    };
    _.O(bq, Z);
    var SJ = function (a) {
        return _.jb(function (b) {
            return b.return(new v.Promise(function (c) {
                try {
                    JF(a, a.id, a.l, "message", function (d) {
                        var e;
                        "asmreq" === (null == (e = d.data) ? void 0 : e.type) && ep(oD(d.data.payload), 1) === a.Bb && c(d)
                    })
                } catch (d) {
                }
            }))
        })
    };
    bq.prototype.j = function () {
        var a = this, b, c, d, e, f, g;
        return _.jb(function (h) {
            if (1 == h.j) return b = Qo(a.l), c = a.o.value, d = a.C.value, kb(h, a.F, 2);
            e = h.m;
            var k = a.l, l = Qo(k);
            var n = c.getBoundingClientRect();
            var m = Cd(k) ? Kh(c, k) : {x: 0, y: 0};
            k = m.x;
            m = m.y;
            n = new _.Dv(m, k + n.right, m + n.bottom, k);
            k = new pD;
            k = _.z(k, 1, n.top);
            k = _.z(k, 3, n.bottom);
            k = _.z(k, 2, n.left);
            n = _.z(k, 4, n.right);
            k = new qD;
            k = _.z(k, 1, a.Bb);
            k = _.z(k, 2, !d);
            n = _.Yg(k, 3, n);
            n = _.z(n, 4, b);
            f = _.z(n, 5, l);
            g = {type: "asmres", payload: Yd(f)};
            e.ports[0].postMessage(g);
            h.j = 0
        })
    };
    var Pp = function (a, b, c, d, e, f, g, h, k, l, n, m, p) {
        Z.call(this, a, 699);
        this.Y = b;
        this.slotId = c;
        this.l = d;
        this.Lb = e;
        this.A = gz(this);
        this.L = Y(this, f);
        this.R = X(this, g);
        this.C = X(this, h);
        this.O = X(this, k);
        this.o = Y(this, l);
        this.W = X(this, n);
        this.F = X(this, m);
        p && iz(this, p)
    };
    _.O(Pp, Z);
    Pp.prototype.j = function () {
        var a = this.R.value, b = this.C.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.L.value) {
            var c, d = null != (c = this.o.value) ? c : 0;
            c = this.O.value;
            var e = this.W.value, f = this.F.value, g = !1;
            switch (d) {
                case 1:
                case 2:
                    g = this.context;
                    var h = this.Y, k = this.slotId, l = this.l, n = this.Lb;
                    var m = c.width, p = c.height, r = 0;
                    var u = 0;
                    var w = Bh(l);
                    w = _.A(w);
                    for (var E = w.next(); !E.done; E = w.next()) {
                        var N = E.value;
                        Array.isArray(N) && (E = (0, C.ra)(N[0]), N = (0, C.ra)(N[1]), r < E && (r = E), u < N && (u = N))
                    }
                    u = [r, u];
                    r = u[0] < m;
                    p = u[1] < p;
                    if (r || p) {
                        u = m + "px";
                        w = {"max-height": "none", "max-width": u, padding: "0px", width: u};
                        p && (w.height = "auto");
                        ki(b, a, w);
                        b = {};
                        r && (r = ii(e.width), m > r && (b.width = u, b["max-width"] = u));
                        p && (b.height = "auto", b["max-height"] = "none");
                        c:{
                            for (G in b) if (Object.prototype.hasOwnProperty.call(b, G)) {
                                var G = !1;
                                break c
                            }
                            G = !0
                        }
                        G ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.ji(a, b), b = !0)
                    } else b = !1;
                    b:switch (u = c.width, G = h.defaultView || h.parentWindow || _.q, d) {
                        case 2:
                            a = li(a, G, u, e, n);
                            break b;
                        case 1:
                            if (e = a.parentElement) if (n = Ph(e)) {
                                E = n.width;
                                n = Yh(k, G.document);
                                m = (0, C.K)($h(n, G));
                                p = m.position;
                                N = ii(m.width) || 0;
                                r = $h(e, G);
                                w = "rtl" === r.direction ? "Right" : "Left";
                                n = w.toLowerCase();
                                G = "absolute" === p ? 0 : ii(r["padding" + w]);
                                r = ii(r["border" + w + "Width"]);
                                u = Math.max(Math.round((E - Math.max(N, u)) / 2), 0);
                                E = {};
                                N = 0;
                                var R = tv(m);
                                R && (N = R[4] * ("Right" === w ? -1 : 1), w = R[3] || 1, 1 !== (R[0] || 1) || 1 !== w) && (R[0] = 1, R[3] = 1, E.transform = "matrix(" + R.join(",") + ")");
                                w = 0;
                                switch (p) {
                                    case "fixed":
                                        var T, Q = null != (T = Number(ai(m.getPropertyValue(n)))) ? T : 0, aa;
                                        T = null != (aa = e.getBoundingClientRect().left) ? aa : 0;
                                        w = Q - T;
                                        break;
                                    case "relative":
                                        w = null != (Q = Number(ai(m.getPropertyValue(n)))) ? Q : 0;
                                        break;
                                    case "absolute":
                                        E[n] = "0"
                                }
                                E["margin-" + n] = u - G - r - w - N + "px";
                                _.ji(a, E);
                                a = !0
                            } else a = !1; else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (ni(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, g = this.Y, h = this.slotId, k = this.l, T = this.Lb, l = c.width, aa = c.height, Q = ii(e.height) || 0, aa >= Q || "none" === e.display || "hidden" === e.visibility || !T || -12245933 === T.width || a.getBoundingClientRect().bottom <= T.height ? g = !1 : (T = {height: aa + "px"}, ki(b, a, T), _.ji(a, T), ni(d, g, h, k, 3, l, aa, "gpt_slotred", f), g = !0)
            }
            !g && _.H(gw) && ni(this.context, this.Y, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
        }
        this.A.notify()
    };
    var Tp = function (a, b) {
        Z.call(this, a, 1020);
        this.I = b;
        this.A = W(this)
    };
    _.O(Tp, Z);
    Tp.prototype.j = function () {
        var a = this.I;
        a = _.H(jx) && void 0 !== a.credentialless && (_.H(kx) || a.crossOriginIsolated);
        this.A.G(a)
    };
    var xp = function (a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.C = c;
        this.A = W(this);
        this.l = Y(this, d);
        this.o = Y(this, e)
    };
    _.O(xp, Z);
    xp.prototype.j = function () {
        var a = this.o.value;
        if (null == a) Wy(this.A); else {
            var b = Math.round(.3 * this.C), c;
            2 !== this.format && 3 !== this.format || null == (c = this.l.value) || !pp(c, 12, !1) || 0 >= b || a <= b ? this.A.G(a) : this.A.G(b)
        }
    };
    var Ip = function (a, b, c) {
        Z.call(this, a, 1054);
        this.l = b;
        this.A = gz(this);
        this.o = X(this, c)
    };
    _.O(Ip, Z);
    Ip.prototype.j = function () {
        this.o.value || this.l();
        this.A.notify()
    };
    var Kp = function (a, b, c, d, e, f, g, h, k, l, n, m) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.U = c;
        this.o = d;
        this.Y = f;
        this.N = g;
        this.A = W(this);
        this.F = 2 === e || 3 === e;
        this.l = X(this, h);
        this.O = X(this, k);
        this.L = Y(this, l);
        this.C = Y(this, n);
        m && iz(this, m)
    };
    _.O(Kp, Z);
    Kp.prototype.j = function () {
        var a = Hh(this.U, this.o), b = Xh(this.slotId, this.Y) || km(this.l.value, fi(this.slotId), a);
        this.O.value && !a && (b.style.display = "inline-block");
        this.F ? xF(this.N, this.slotId, function () {
            return void _.av(b)
        }) : _.Km(this, function () {
            return void _.av(b)
        });
        a = TJ(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.A.G(b)
    };
    var TJ = function (a) {
        var b = a.l.value, c, d = null == (c = a.L.value) ? void 0 : c.height;
        if (b && !a.C.value && d) {
            var e;
            c = (null != (e = Gh(a.o, 23)) ? e : F(a.U, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var sp = function (a, b) {
        Z.call(this, a, 859);
        this.I = b;
        this.A = W(this)
    };
    _.O(sp, Z);
    sp.prototype.j = function () {
        this.A.G(!Cd(this.I.top))
    };
    var Np = function (a, b, c) {
        Z.call(this, a, 698);
        this.I = b;
        this.A = W(this);
        this.l = X(this, c)
    };
    _.O(Np, Z);
    Np.prototype.j = function () {
        Vy(this.A, $h(this.l.value, this.I))
    };
    var Sp = function (a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.Y = c;
        this.A = W(this)
    };
    _.O(Sp, Z);
    Sp.prototype.j = function () {
        var a = [], b = this.Y;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (D = c.features(), _.t(D, "includes")).call(D, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.H(dw) || a.push("autoplay");
        a.length ? this.A.G(a.join(";")) : this.A.G("")
    };
    var Xp = function (a, b, c, d, e) {
        Z.call(this, a, 934);
        this.I = b;
        this.slotId = c;
        iz(this, d);
        this.l = X(this, e)
    };
    _.O(Xp, Z);
    Xp.prototype.j = function () {
        var a = this;
        lF(this.slotId, Io, function (b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut, e = c.clearAdsData, f = a.l.value, g = new tu;
                    var h = _.z(g, 1, d ? "1" : "0");
                    var k = _.z(h, 2, 2147483647);
                    var l = _.z(k, 3, "/");
                    var n = _.z(l, 4, a.I.location.hostname);
                    var m = new sz(a.I);
                    vz(m, "__gpi_opt_out", n, f);
                    if (d || e) wz(m, "__gads", f), wz(m, "__gpi", f)
                }
            } catch (p) {
            }
        })
    };
    var Hp = function (a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.P = c;
        this.N = d;
        this.l = W(this);
        this.o = X(this, e);
        this.C = X(this, f)
    };
    _.O(Hp, Z);
    Hp.prototype.j = function () {
        this.C.value ? (Vo(this.slotId, this.N, this.P, this.o.value), this.l.G(!1)) : this.l.G(!0)
    };
    var eq = function (a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.I = b;
        this.F = Y(this, c);
        this.o = X(this, d);
        this.l = X(this, e);
        this.C = X(this, f)
    };
    _.O(eq, Z);
    eq.prototype.j = function () {
        var a = this, b = this.F.value, c, d = null == b ? void 0 : null == (c = x(b, 1)) ? void 0 : c.toUpperCase(), e;
        b = null == b ? void 0 : null == (e = x(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.o.value;
            c = this.l.value;
            var f = this.C.value, g = f.style.height, h = f.style.width, k = f.style.display, l = f.style.position,
                n = Wo(e.id + "_top", d), m = Wo(e.id + "_bottom", b);
            _.ji(m, {position: "relative", top: "calc(100vh - 48px)"});
            f.appendChild(n);
            f.appendChild(m);
            _.ji(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.ji(e, {position: "fixed", top: "0", height: "100vh"});
            var p;
            _.ji(f, {
                position: "relative",
                display: (null == (p = this.I.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            JF(this, 722, this.I, "orientationchange", function () {
                var r;
                (null == (r = a.I.screen.orientation) ? 0 : r.angle) ? _.ji(f, {display: "none"}) : _.ji(f, {display: "block"})
            });
            _.Km(this, function () {
                _.av(n);
                _.av(m);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var aq = function (a, b, c, d, e, f) {
        f = void 0 === f ? Yo : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.Y = d;
        this.na = e;
        this.L = f;
        this.F = !1;
        this.l = null;
        this.C = this.o = -1;
        this.R = _.pr(function () {
            g.na.dispatchEvent("impressionViewable", 715, new $I(g.slotId, "publisher_ads"))
        });
        this.W = qr(function () {
            g.na.dispatchEvent("slotVisibilityChanged", 716, new aJ(g.slotId, "publisher_ads", g.C))
        }, 200);
        this.O = X(this, c);
        var h = new bz;
        mF(this.slotId, sF).then(function () {
            return void h.notify()
        });
        iz(this, h)
    };
    _.O(aq, Z);
    aq.prototype.j = function () {
        var a = this, b = this.L(_.dh(this.context, this.id, function (c) {
            c = _.A(c);
            for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.t(Number, "isFinite").call(Number, a.o) && UJ(a)
        }));
        b.observe(this.O.value);
        JF(this, this.id, this.Y, "visibilitychange", function () {
            UJ(a)
        });
        _.Km(this, function () {
            b.disconnect()
        })
    };
    var UJ = function (a) {
        var b = !tD(a.Y);
        VJ(a, 50 <= a.o && b);
        b = Math.floor(b ? a.o : 0);
        if (0 > b || 100 < b || b === a.C ? 0 : -1 !== a.C || 0 !== b) a.C = b, a.W()
    }, VJ = function (a, b) {
        a.F || (b ? null === a.l && (a.l = setTimeout(function () {
            tD(a.Y) || (a.R(), a.F = !0);
            a.l = null
        }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
    };
    var WJ = P(["https://googleads.g.doubleclick.net/td/kb?kbli=", ""]), Vp = function (a, b, c) {
        Z.call(this, a, 1007);
        this.l = Y(this, b);
        c && iz(this, c)
    };
    _.O(Vp, Z);
    Vp.prototype.j = function () {
        var a = this.l.value;
        if (null != a && a.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
            var b = document.createElement("iframe");
            a = gb(WJ, encodeURIComponent(a.join()));
            b.removeAttribute("srcdoc");
            if (a instanceof gg) throw new Or("TrustedResourceUrl", 2);
            a = _.Ua(a);
            void 0 !== a && (b.src = a);
            for (a = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 < b.sandbox.length;) b.sandbox.remove(b.sandbox.item(0));
            for (var c = 0; c < a.length; c++) b.sandbox.supports && !b.sandbox.supports(a[c]) || b.sandbox.add(a[c]);
            b.id = "koelBirdIGRegisterIframe";
            document.head.appendChild(b)
        }
    };
    var Bp = function (a, b, c) {
        Z.call(this, a, 666);
        this.o = b;
        this.l = W(this);
        this.C = Y(this, c)
    };
    _.O(Bp, Z);
    Bp.prototype.j = function () {
        var a = new Cp;
        this.C.hc() && bE(_.z(a, 2, this.C.value), 1);
        if (this.o) {
            a = [this.o, a];
            var b = new Cp;
            a = _.A(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, null != x(c, 1) && _.z(b, 1, x(c, 1)), null != x(c, 2) && _.z(b, 2, x(c, 2)), null != Je(c, 3) && bE(b, Je(c, 3));
            a = b
        }
        b = this.l;
        a = null != x(a, 2) ? null != Je(a, 3) && 0 !== (0, _.em)() ? (0, C.ra)(x(a, 2)) * (0, C.ra)(Je(a, 3)) : x(a, 2) : null;
        Vy(b, a)
    };
    var Op = function (a, b, c, d, e, f, g) {
        f = void 0 === f ? $o : f;
        Z.call(this, a, 666);
        this.o = f;
        this.A = gz(this);
        iz(this, b);
        g && iz(this, g);
        this.l = X(this, c);
        this.F = Y(this, d);
        this.C = Y(this, e)
    };
    _.O(Op, Z);
    Op.prototype.j = function () {
        var a = this.C.value, b = this.F.value, c = this.l.value;
        null == a || 0 > a || 0 === b || !bi(c) ? this.A.notify() : XJ(this, a, b, c)
    };
    var XJ = function (a, b, c, d) {
        var e = a.o(b, _.dh(a.context, 291, function (f, g) {
            f = _.A(f);
            for (var h = f.next(); !h.done; h = f.next()) if (h = h.value, !(0 >= h.intersectionRatio)) {
                g.unobserve(h.target);
                a.A.notify();
                break
            }
        }));
        null != c && setTimeout(function () {
            a.A.notify();
            e.disconnect()
        }, c);
        e.observe(d);
        _.Km(a, function () {
            e.disconnect()
        })
    };
    var Mp = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.Lb = c;
        this.N = d;
        this.A = gz(this);
        this.o = X(this, e);
        this.l = Y(this, f);
        g && iz(this, g)
    };
    _.O(Mp, Z);
    Mp.prototype.j = function () {
        var a = this, b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.em)() || 0 < c) {
            var d = document;
            b = sD(d);
            if (tD(d) && b && (0 < DF(this.N, this.slotId) || !YJ(this)) && b) {
                var e = JF(this, 324, d, b, function () {
                    tD(d) || (e && e(), a.A.notify())
                });
                if (e) return
            }
        }
        this.A.notify()
    };
    var YJ = function (a) {
        var b = a.o.value;
        try {
            var c, d = null != (c = top) ? c : void 0;
            if (void 0 === d) return !0;
            var e = Am(null == d ? void 0 : d.document, d).y, f = e + a.Lb.height;
            return b.y >= e && b.y <= f
        } catch (g) {
            return !0
        }
    };
    var Jp = function (a, b, c) {
        Z.call(this, a, 1055);
        this.A = gz(this);
        iz(this, c);
        this.l = X(this, b)
    };
    _.O(Jp, Z);
    Jp.prototype.j = function () {
        this.l.value && this.A.notify()
    };
    var Ap = function (a, b, c, d, e) {
        Z.call(this, a, 669);
        this.U = b;
        this.V = c;
        this.A = W(this);
        this.o = Y(this, d);
        this.l = X(this, e)
    };
    _.O(Ap, Z);
    Ap.prototype.j = function () {
        if (Fe(ew)) this.A.G(!0); else {
            var a, b = !(null == (a = this.o.value) || !x(a, 1)) && (F(this.V, 12) || F(this.U, 13)) || this.l.value;
            this.A.G(!!b)
        }
    };
    var Qp = function (a, b, c, d, e, f) {
        Z.call(this, a, 719);
        this.U = b;
        this.o = c;
        this.A = W(this);
        this.l = X(this, d);
        this.C = X(this, e);
        this.F = Y(this, f)
    };
    _.O(Qp, Z);
    Qp.prototype.j = function () {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                this.l.value.Ma ? this.C.value ? ZJ(this) : Wy(this.A) : Wy(this.A);
                break;
            case 1:
                ZJ(this);
                break;
            case 2:
                Wy(this.A);
                break;
            default:
                Va(a)
        }
    };
    var ZJ = function (a) {
        var b = a.F.value, c = new zk;
        b = _.z(c, 3, b);
        F(Gk([b, a.U.Ta(), a.o.Ta()]), 3) ? a.A.G(SE) : Wy(a.A)
    };
    var Dp = function (a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.ba = c;
        this.O = d;
        this.F = e;
        this.Da = W(this);
        this.L = W(this);
        this.Bc = W(this);
        this.l = Fe(ew).split(",");
        this.o = Ge(fw);
        this.R = Y(this, f);
        this.da = Y(this, g);
        this.W = Y(this, h);
        this.C = X(this, k);
        this.Z = X(this, l)
    };
    _.O(Dp, Z);
    Dp.prototype.j = function () {
        if (this.F) $J(this); else {
            var a;
            if (a = this.l.length) {
                b:if (this.l.length) {
                    if (this.o.length && (a = this.adUnitPath.split("/"), !_.t(this.o, "includes").call(this.o, a[a.length - 1]))) {
                        a = !1;
                        break b
                    }
                    a = !0
                } else a = !1;
                var b = a;
                a = b ? aK(this) : null;
                if (b && a) {
                    b = this.Z.value;
                    var c, d, e = null != (d = null == (c = Ph(b.parentElement)) ? void 0 : c.width) ? d : 0;
                    c = "p" === this.l[0];
                    d = Number(this.l[0]);
                    if (c = "f" === this.l[0] ? this.O : d && 0 < d ? d : c ? Math.min(e, this.O) : null) {
                        d = a.width;
                        var f = a.height, g = this.l[1], h = Number(g);
                        d = "ratio" === g && d ? Math.floor(f / d * c) : h && 0 < h ? f * h : f;
                        bK(this, c, d, {
                            kind: 0,
                            Ma: '<html><body style="height:' + (d - 2 + "px;width:" + (c - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (c + "x" + d + "</p></body></html>")
                        }, c <= e ? 1 : 2, b);
                        a = !0
                    } else a = !1
                } else a = !1
            }
            a || $J(this)
        }
    };
    var aK = function (a) {
        a = Bh(a.ba)[0];
        return Array.isArray(a) && a.every(function (b) {
            return "number" === typeof b
        }) ? new _.Oh(a[0], a[1]) : null
    }, bK = function (a, b, c, d, e, f) {
        e = void 0 === e ? a.R.value : e;
        a.L.G(new _.Oh(b, c));
        a.Da.G(d);
        Vy(a.Bc, e);
        f && _.Kv(f, "opacity", .5)
    }, $J = function (a) {
        var b = a.da.value, c = a.W.value;
        if (a.F) bK(a, null != b ? b : 0, null != c ? c : 0, a.C.value); else {
            if (null == b) throw new cl("Missing 'width'.");
            if (null == c) throw new cl("Missing 'height'.");
            bK(a, b, c, a.C.value)
        }
    };
    var yp = function (a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 673);
        this.slotId = b;
        this.Ib = c;
        this.F = d;
        this.C = e;
        this.Y = f;
        this.l = g;
        this.N = h;
        this.o = k;
        this.A = W(this)
    };
    _.O(yp, Z);
    yp.prototype.j = function () {
        var a = this, b, c;
        return _.jb(function (d) {
            if (1 == d.j) {
                if (a.Ib) {
                    cK(a, a.Ib);
                    a.A.G(a.Ib);
                    d.j = 0;
                    return
                }
                if (Fh(a.l)) {
                    a.A.G(dK(a));
                    d.j = 0;
                    return
                }
                return kb(d, mF(a.slotId, nF), 4)
            }
            b = d.m;
            c = b.detail;
            if (a.J) return d.return();
            cK(a, c);
            a.A.G(c);
            d.j = 0
        })
    };
    var dK = function (a) {
        var b = _.Nd("INS");
        b.id = a.F;
        _.ji(b, {display: "none"});
        a.Y.documentElement.appendChild(b);
        var c = function () {
            return void _.av(b)
        };
        2 === a.l || 3 === a.l ? xF(a.N, a.slotId, c) : _.Km(a, c);
        return b
    }, cK = function (a, b) {
        if (2 !== a.l && 3 !== a.l) {
            for (var c = _.A(_.t(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.C && _.av(d);
            a.o || (b.style.display = "")
        }
    };
    var Lp = function (a, b) {
        Z.call(this, a, 676);
        this.A = W(this);
        this.l = X(this, b)
    };
    _.O(Lp, Z);
    Lp.prototype.j = function () {
        var a = Mh(this.l.value);
        this.A.G(a)
    };
    var Rp = function (a, b, c, d, e) {
        Z.call(this, a, 807);
        this.I = b;
        this.A = gz(this);
        this.l = Y(this, c);
        this.o = X(this, d);
        e && iz(this, e)
    };
    _.O(Rp, Z);
    Rp.prototype.j = function () {
        var a = this.l.value;
        if (a && !this.o.value) {
            var b = Cv(this.I);
            fF(new eF(b, a)) || this.T(new cl("Cannot create top window frame"))
        }
        this.A.notify()
    };
    var Ep = function (a, b, c) {
        Z.call(this, a, 881);
        this.Ya = b;
        this.A = W(this);
        this.l = Y(this, c)
    };
    _.O(Ep, Z);
    Ep.prototype.j = function () {
        if (_.H(fx) || !this.l.value) Wy(this.A); else {
            for (var a = this.l.value, b = [], c = _.A((D = zH(this.Ya), _.t(D, "values")).call(D)), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                try {
                    b.push(JSON.parse(d))
                } catch (e) {
                    hh(this.context, 1023, e)
                }
            }
            0 === b.length ? this.A.G(hp({Fe: a, Pd: _.H(gx)})) : this.A.G(hp({Fe: a, Pd: _.H(gx), We: b}))
        }
    };
    Ep.prototype.m = function () {
        Wy(this.A)
    };
    var ip = navigator, jp = /(\$\{GDPR})/gi, kp = /(\$\{GDPR_CONSENT_[0-9]+\})/gi, lp = /(\$\{ADDTL_CONSENT})/gi,
        mp = /(\$\{AD_WIDTH})/gi, np = /(\$\{AD_HEIGHT})/gi;
    var eK = function () {
        var a = this;
        this.promise = new v.Promise(function (b, c) {
            a.reject = c;
            a.resolve = b
        })
    }, fK = function () {
        this.auctionSignals = new eK;
        this.topLevelSellerSignals = new eK;
        this.j = new eK;
        this.perBuyerSignals = new eK;
        this.perBuyerTimeouts = new eK
    }, gK = function (a, b, c) {
        this.m = a;
        this.D = b;
        this.j = c
    };
    var hK = navigator, Fp = function (a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 882);
        this.N = b;
        this.X = c;
        this.da = d;
        this.R = l;
        this.Da = W(this);
        this.l = W(this);
        this.o = W(this);
        this.L = Y(this, e);
        this.O = Y(this, f);
        this.W = X(this, g);
        this.ba = X(this, h);
        this.Z = X(this, k)
    };
    _.O(Fp, Z);
    Fp.prototype.j = function () {
        var a = this, b, c, d, e, f, g, h, k, l, n, m, p, r, u;
        return _.jb(function (w) {
            switch (w.j) {
                case 1:
                    if (iK(a)) return jK(a), w.return();
                    b = (0, C.K)(a.L.value);
                    c = b.getWidth();
                    d = b.getHeight();
                    if (!c || !d) return jK(a), w.return();
                    e = $n(b, fp, 5);
                    a.C = e.getEscapedQemQueryId();
                    a.F = bf(e, 6);
                    f = pp(e, 9);
                    if (g = pp(e, 10)) if (jK(a), pp(e, 17)) return qp(0, 0, e), w.return();
                    oi("pre_run_ad_auction_ping", function (E) {
                        ui(E, a.context);
                        var N;
                        K(E, "winner_qid", null != (N = a.C) ? N : "");
                        var G;
                        K(E, "xfpQid", null != (G = a.F) ? G : "");
                        K(E, "publisher_tag", "gpt")
                    }, 1);
                    h = performance.now();
                    k = de(b, 8) || 1E3;
                    return kb(w, kK(a, (0, C.K)(a.O.value), e, k, h), 2);
                case 2:
                    l = w.m;
                    n = Math.round(performance.now() - h);
                    m = 3 === l;
                    p = 2 === l;
                    r = 1 === l;
                    u = "string" === typeof l;
                    oi("run_ad_auction_stats", function (E) {
                        ui(E, a.context);
                        K(E, "duration_ms", n);
                        K(E, "applied_timeout_ms", k);
                        K(E, "timed_out", p ? 1 : 0);
                        K(E, "error", m ? 1 : 0);
                        K(E, "auction_skipped", r ? 1 : 0);
                        K(E, "auction_winner", u ? 1 : 0);
                        K(E, "thread_release_only", pp(e, 15) ? 1 : 0);
                        var N;
                        K(E, "winner_qid", null != (N = a.C) ? N : "");
                        var G;
                        K(E, "xfpQid", null != (G = a.F) ? G : "");
                        K(E, "publisher_tag", "gpt");
                        _.H(hx) && K(E, "parallel", "1")
                    }, 1);
                    if (!u) return qp(n, p ? k : 0, e), g || jK(a), w.return();
                    if (g) return kb(w, hK.deprecatedURNToURL(l, !0), 7);
                    if (!f) {
                        w.j = 4;
                        break
                    }
                    return kb(w, hK.deprecatedURNToURL(l, !0), 6);
                case 6:
                    return jK(a), w.return();
                case 7:
                    return w.return();
                case 4:
                    return _.H(Cx) ? kb(w, op(l, {
                        gdprApplies: Fk(a.X, 3) ? F(a.X, 3) ? "1" : "0" : null,
                        fe: x(a.X, 2),
                        Sd: x(a.X, 4),
                        Ne: b.getWidth() ? b.getWidth().toString() : null,
                        Ke: b.getHeight() ? b.getHeight().toString() : null
                    }), 9) : kb(w, op(l, {
                        gdprApplies: Fk(a.X, 3) ? F(a.X, 3) ? "1" : "0" : null,
                        fe: x(a.X, 2),
                        Sd: x(a.X, 4)
                    }), 9);
                case 9:
                    a.Z.value.style.display = "", a.Da.G({kind: 2, Rd: l}), a.l.G(new _.Oh(c, d)), a.o.G(!1), w.j = 0
            }
        })
    };
    Fp.prototype.m = function () {
        jK(this)
    };
    var kK = function (a, b, c, d, e) {
        var f = de(c, 14) || -1;
        if (0 < f && a.N.D >= f) return 1;
        f = de(c, 13) || -1;
        if (0 < f && a.N.J >= f) return 1;
        ++a.N.D;
        ++a.N.J;
        b.signal = AbortSignal.timeout(d);
        b = _.H(hx) ? lK(a, b, d, e, (0, C.K)(a.R), pp(c, 15)) : mK(a, b, d, e, pp(c, 15));
        --a.N.D;
        return b
    }, mK = function (a, b, c, d, e) {
        if (e) return rp();
        var f;
        return null == (f = hK.runAdAuction) ? void 0 : f.call(hK, b).then(function (g) {
            nK(a, g, c, d);
            return g
        }).catch(function (g) {
            return g instanceof DOMException && "TimeoutError" === g.name ? 2 : 3
        })
    }, lK = function (a, b, c, d, e, f) {
        if (f) return rp();
        ap(b, e.D);
        setTimeout(function () {
            e.j.abort(new DOMException("runAdAuction", "TimeoutError"))
        }, c);
        return e.m.then(function (g) {
            null !== g && "string" !== typeof g || nK(a, g, c, d);
            return g
        })
    }, nK = function (a, b, c, d) {
        oi("run_ad_auction_complete", function (e) {
            ui(e, a.context);
            K(e, "duration_ms", Math.round(performance.now() - d));
            K(e, "applied_timeout_ms", c);
            K(e, "auction_has_winner", !!b);
            a.C && K(e, "winner_qid", a.C);
            a.F && K(e, "xfpQid", a.F)
        }, 1)
    }, iK = function (a) {
        var b = !!hK.runAdAuction && Sf("run-ad-auction", document);
        return _.H(fx) || !b || !a.L.value || !a.O.value || _.H(hx) && !a.R
    }, jK = function (a) {
        a.o.G(a.da);
        a.Da.G(a.W.value);
        a.l.G(a.ba.value)
    };
    var oK = function (a, b) {
        this.context = a;
        this.N = b
    }, pK = function (a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, w) {
        var E = document, N = window;
        e || f || _.H(Gp) || HF(a.N, d);
        var G = gq(a.context, b, c, d, e, f, g, h, k, l, E, n, m, p, r, u, function () {
            HF(a.N, d);
            GF(a.N, d, G)
        }, w);
        f || _.H(Gp) || GF(a.N, d, G);
        _.Km(d, function () {
            HF(a.N, d)
        });
        N.top !== N && N.addEventListener("pagehide", function (R) {
            R.persisted || HF(a.N, d)
        });
        Bf(G)
    };
    var qK = function (a, b, c) {
        Z.call(this, a, 944);
        this.I = b;
        this.l = new sz(this.I);
        this.o = X(this, c)
    };
    _.O(qK, Z);
    qK.prototype.j = function () {
        var a = this.o.value;
        if (uz(this.l, a)) {
            var b = tz(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new tu;
                b = _.z(c, 1, b);
                b = _.z(b, 2, 2147483647);
                b = _.z(b, 3, "/");
                b = _.z(b, 4, this.I.location.hostname);
                vz(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var rK = function (a, b, c, d) {
        d = void 0 === d ? jq : d;
        Z.call(this, a, 883);
        this.C = b;
        this.F = d;
        this.l = gz(this);
        this.o = X(this, c)
    };
    _.O(rK, Z);
    rK.prototype.j = function () {
        !F(this.o.value, 5) || _.H(Hw) ? this.l.notify() : (_.H(Gw) || cD(this.C), this.F() ? cz(this.l, new v.Promise(function (a) {
            return void dD(a)
        })) : (dD(null), this.l.notify()))
    };
    var sK = function (a, b, c, d, e) {
        Z.call(this, a, 884);
        this.va = b;
        this.l = c;
        this.o = W(this);
        this.F = Y(this, d);
        this.C = X(this, e)
    };
    _.O(sK, Z);
    sK.prototype.j = function () {
        this.l.storage = this.F.value;
        jH(this.l, tz(this.va, "__gads", this.C.value));
        ze(20);
        ze(2);
        this.o.G(_.we(xe).j())
    };
    var tK = function (a, b, c) {
        Z.call(this, a, 873);
        this.I = b;
        this.l = X(this, c)
    };
    _.O(tK, Z);
    tK.prototype.j = function () {
        var a = this.context, b = this.l.value, c = this.I;
        !Oj()._pubconsole_disable_ && (b = pe("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || Rj(a, c))
    };
    var uK = function (a, b, c, d) {
        Z.call(this, a, 1058);
        this.X = b;
        c && (this.l = Y(this, c));
        iz(this, d)
    };
    _.O(uK, Z);
    uK.prototype.j = function () {
        var a;
        null != (a = this.l) && a.value && F(this.X, 5) && (a = this.l.value, a({
            message: "goog:spam:client_age",
            pvsid: this.context.pvsid
        }))
    };
    var vK = function (a, b, c) {
        Z.call(this, a, 798);
        this.A = W(this);
        this.l = Y(this, b);
        this.o = X(this, c)
    };
    _.O(vK, Z);
    vK.prototype.j = function () {
        var a = this, b = new v.Map;
        if (this.l.value) {
            var c = this.l.value, d = c.ga.Ba, e = c.Sb, f = e.md;
            e = e.Ac;
            c = _.A(_.t(c.ca.aa, "entries").call(c.ca.aa));
            for (var g = c.next(); !g.done; g = c.next()) {
                var h = _.A(g.value);
                g = h.next().value;
                h = h.next().value;
                var k = void 0, l = _.H(hw) ? null == (k = e) ? void 0 : k.get(h) : f[g];
                b.set(h, d ? wK(this, h, l) : function () {
                    return a.o.value
                })
            }
        }
        this.A.G(b)
    };
    var wK = function (a, b, c) {
        return Zh(function () {
            var d = _.t(Object, "assign").call(Object, {}, a.l.value);
            d.ca.Bd = !0;
            d.ca.aa = [b];
            d.Sb.md = c ? [c] : [];
            c && (d.Sb.Ac = new v.Map, d.Sb.Ac.set(b, c));
            return om(cI(new aI(d))).url
        })
    };
    var xK = function (a, b, c, d, e, f) {
        f = void 0 === f ? kq : f;
        Z.call(this, a, 886);
        this.aa = b;
        this.N = c;
        this.l = d;
        this.Y = e;
        this.o = f;
        this.A = gz(this)
    };
    _.O(xK, Z);
    xK.prototype.j = function () {
        var a = this, b, c;
        return _.jb(function (d) {
            if (1 == d.j) return 3 !== rD(a.Y) ? (d.j = 2, d = void 0) : d = kb(d, new v.Promise(function (e) {
                return void vD(e, a.Y)
            }), 2), d;
            if (4 != d.j) return b = a.l ? Zo(a.l) : null, null == b || (c = a.aa.some(function (e) {
                return !bi(Yh(e))
            })) ? (a.A.notify(), d.return()) : kb(d, yK(a, b), 4);
            a.A.notify();
            d.j = 0
        })
    };
    var yK = function (a, b) {
        return new v.Promise(function (c) {
            var d = a.o(function (h, k) {
                h.some(function (l) {
                    return 0 < l.intersectionRatio
                }) && (k.disconnect(), c())
            }, b + "%");
            _.Km(a, function () {
                return void d.disconnect()
            });
            for (var e = {}, f = _.A(a.aa), g = f.next(); !g.done; e = {Qb: e.Qb}, g = f.next()) {
                g = g.value;
                e.Qb = Yh(g);
                if (!e.Qb) break;
                d.observe(e.Qb);
                yF(a.N, g, function (h) {
                    return function () {
                        return void d.unobserve(h.Qb)
                    }
                }(e))
            }
        })
    };
    var zK = function (a, b, c, d, e, f, g, h, k, l, n, m, p, r) {
        Z.call(this, a, 866);
        this.F = b;
        this.l = c;
        this.C = d;
        this.nc = e;
        this.Ub = f;
        this.X = g;
        this.Y = h;
        this.A = gz(this);
        this.o = X(this, k);
        this.O = Y(this, l);
        this.R = X(this, n);
        this.W = X(this, m);
        iz(this, p);
        this.L = X(this, r)
    };
    _.O(zK, Z);
    zK.prototype.j = function () {
        var a = this, b, c, d, e, f, g, h, k, l, n, m, p, r;
        return _.jb(function (u) {
            switch (u.j) {
                case 1:
                    b = a.R.value;
                    if (!b) return a.A.notify(), u.return();
                    c = pb(a.W.value, {uuid: a.Ub});
                    d = document.createElement("script");
                    e = {source: b, credentials: a.L.value ? "include" : "omit", resources: [c.toString()]};
                    d.setAttribute("type", "webbundle");
                    Ya(d, new Xa(JSON.stringify(e).replace(/</g, "\\u003C"), Gn));
                    a.Y.head.appendChild(d);
                    a.A.notify();
                    u.D = 2;
                    return kb(u, AK(c), 4);
                case 4:
                    f = u.m;
                    mb(u, 3);
                    break;
                case 2:
                    g = nb(u);
                    if (g instanceof Fy) return a.l(g), u.return();
                    throw g;
                case 3:
                    h = f;
                    k = h.Me;
                    l = h.Nf;
                    if (k.length !== l.length) return a.l(new Ey("Received " + k.length + " ad URLs but " + l.length + " metadatas")), u.return();
                    e.resources = k.filter(function (w) {
                        return w
                    });
                    e.resources.length ? (n = _.Nd("SCRIPT"), n.setAttribute("type", "webbundle"), Ya(n, new Xa(JSON.stringify(e).replace(/</g, "\\u003C"), Gn)), a.Y.head.removeChild(d), a.Y.head.appendChild(n)) : a.Y.head.removeChild(d);
                    for (m = 0; m < k.length; m++) p = k[m], r = l[m], a.F(m, r, {
                        kind: 1,
                        url: p
                    }, a.o.value, a.X, a.O.value);
                    a.C(k.length - 1, a.o.value, a.X);
                    u.j = 0
            }
        })
    };
    var AK = function (a) {
        var b, c, d;
        return _.jb(function (e) {
            if (1 == e.j) return kb(e, fetch(a.toString()).catch(function () {
                throw new Fy("Failed to fetch bundle index.");
            }), 2);
            if (3 != e.j) return b = e.m, kb(e, b.text(), 3);
            c = e.m;
            d = Gu(c);
            return e.return({Me: ol(d, 1), Nf: ol(d, 2)})
        })
    };
    var BK = function (a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.C = b;
        this.Ba = c;
        this.P = d;
        this.o = e;
        this.I = f;
        this.X = g;
        this.l = W(this)
    };
    _.O(BK, Z);
    BK.prototype.j = function () {
        var a = this, b = this.C;
        !this.Ba && 1 < this.C.length && (b = [b[0]]);
        b = b.filter(function (c) {
            if (c.J) return !1;
            var d = a.P.V[c.getDomId()], e;
            if (e = !(Hm(Yl(d)) && (D = Ge(Pw), _.t(D, "includes")).call(D, String(Yl(d))))) Ul(a.I) && 4 === Yl(d) ? (M(a.o, EG("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            return e && !am(a.context, a.o, c, d, a.I, a.X)
        });
        30 < b.length && (M(this.o, AG("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.l.G(b)
    };
    var CK = function (a, b, c) {
        Z.call(this, a, 919);
        this.l = b;
        this.X = c;
        this.A = W(this)
    };
    _.O(CK, Z);
    CK.prototype.j = function () {
        var a, b = !(null == (a = this.l) ? 0 : F(a, 9)) && !!F(this.X, 5);
        this.A.G(b)
    };
    var DK = function (a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.N = b;
        this.P = c;
        this.Y = d;
        this.A = gz(this);
        this.l = X(this, e);
        iz(this, f)
    };
    _.O(DK, Z);
    DK.prototype.j = function () {
        var a = this.P, b = a.U;
        a = a.V;
        for (var c = _.A(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()], f = this.Y;
            Fm(e, b) && !this.N.rb(d) && Gm(d, f, e, b)
        }
        this.A.notify()
    };
    var EK = function (a, b, c, d, e, f) {
        f = void 0 === f ? Mi : f;
        Z.call(this, a, 939);
        this.o = b;
        this.I = c;
        this.X = d;
        this.l = f;
        iz(this, e)
    };
    _.O(EK, Z);
    EK.prototype.j = function () {
        var a = this.l, b = this.I, c = new to;
        var d = new so;
        d = _.y(d, 1, String(this.o), "");
        c = _.Yg(c, 5, d);
        c = _.y(c, 4, 1, 0);
        c = _.y(c, 2, 2, 0);
        c = _.y(c, 3, this.context.ib || this.context.Ga, "");
        c = _.y(c, 6, F(this.X, 5), !1);
        a.call(this, b, c)
    };
    var FK = navigator, GK = function (a, b, c, d) {
        Z.call(this, a, 1089);
        this.l = b;
        this.X = c;
        this.A = W(this);
        this.o = X(this, d)
    };
    _.O(GK, Z);
    GK.prototype.j = function () {
        if (!_.H(fx) && _.H(hx) && "runAdAuction" in navigator && Sf("run-ad-auction", document) && (!F(this.X, 5) || F(this.X, 9) ? 0 : this.l ? !(F(this.l, 8) || _.H(Vw) && F(this.l, 13) || F(this.l, 1) || 1 === ce(this.l, 6, 2) || 1 === x(this.l, 5) || F(this.l, 9)) : 1)) {
            for (var a = {}, b = _.A(this.o.value), c = b.next(); !c.done; c = b.next()) a[c.value.getId()] = HK();
            this.A.G(a)
        } else Wy(this.A)
    };
    var HK = function () {
        var a = new fK, b = new AbortController, c = FK.runAdAuction({
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: "https://pubads.g.doubleclick.net/td/sjs",
            interestGroupBuyers: [],
            auctionSignals: {},
            sellerExperimentGroupId: 0,
            sellerSignals: a.topLevelSellerSignals.promise,
            sellerTimeout: 50,
            signal: b.signal,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            componentAuctions: [{
                seller: "https://pubads.g.doubleclick.net",
                decisionLogicUrl: "https://pubads.g.doubleclick.net/td/sjs",
                trustedScoringSignalsUrl: "https://pubads.g.doubleclick.net/td/sts",
                interestGroupBuyers: ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"],
                sellerExperimentGroupId: 0,
                auctionSignals: a.auctionSignals.promise,
                sellerSignals: a.j.promise,
                sellerTimeout: 50,
                perBuyerExperimentGroupIds: {},
                perBuyerSignals: a.perBuyerSignals.promise,
                perBuyerTimeouts: a.perBuyerTimeouts.promise
            }]
        }).catch(function (d) {
            return d instanceof DOMException && "TimeoutError" === d.name ? 2 : 3
        });
        return new gK(c, a, b)
    };
    var IK = function (a, b, c, d, e) {
        Z.call(this, a, 905);
        this.P = b;
        this.l = c;
        this.A = gz(this);
        this.o = X(this, d);
        iz(this, e)
    };
    _.O(IK, Z);
    IK.prototype.j = function () {
        for (var a = _.A(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.P.V[b.value.getDomId()]) ? void 0 : Yl(c)) {
                case 2:
                case 3:
                case 5:
                    this.l.load(_.BJ);
                    return
            }
        }
        this.A.notify()
    };
    var JK = function (a, b, c, d) {
        Z.call(this, a, 833);
        this.l = b;
        this.I = c;
        this.A = gz(this);
        iz(this, d)
    };
    _.O(JK, Z);
    JK.prototype.j = function () {
        if (!_.H(Zw)) {
            var a = this.l, b = this.I, c = Vh();
            c = {version: kH ? kH : kH = uk(), rc: c, rg: _.H($w)};
            c = UE.Gf(c);
            var d = BE(b);
            c = d ? Hd(c, new v.Map([["n", String(d)]])) : c;
            d = Ge(wk);
            for (var e = new v.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
            c = Hd(c, e);
            var g;
            a.resources[c.toString()] || (null == (g = Oj()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Nd("IFRAME"), a.src = Za(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.A.notify()
    };
    var KK = function (a, b, c, d) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.A = gz(this);
        this.l = X(this, c);
        iz(this, d)
    };
    _.O(KK, Z);
    KK.prototype.j = function () {
        var a = this.context, b = this.requestId, c = this.l.value.length;
        if (a.qc) {
            var d = a.xb;
            a = Zg(a);
            var e = new Sv;
            b = _.y(e, 2, b, 0);
            c = _.y(b, 1, c, 0);
            c = ah(a, 7, bh, c);
            Ld(d, c)
        }
        this.A.notify()
    };
    var LK = function (a, b, c, d) {
        Z.call(this, a, 867);
        this.na = b;
        this.P = c;
        this.A = gz(this);
        this.l = X(this, d)
    };
    _.O(LK, Z);
    LK.prototype.j = function () {
        for (var a = _.A(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.A(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = x(this.P.V[b.getDomId()], 20);
            b.dispatchEvent(pF, 808, {Xe: c, fg: d});
            this.na.dispatchEvent("slotRequested", 705, new dJ(b, "publisher_ads"))
        }
        this.A.notify()
    };
    var MK = function (a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, w, E, N, G, R, T, Q, aa, ca, ma, Ba, Na, Ea, ta, Oa, Ia) {
        Z.call(this, a, 785, _.Ee(cx));
        this.Ba = b;
        this.N = c;
        this.va = d;
        this.P = e;
        this.nc = f;
        this.lb = g;
        this.Kb = h;
        this.Jb = k;
        this.td = l;
        this.Ub = n;
        this.zb = m;
        this.X = p;
        this.isSecureContext = r;
        this.Va = u;
        this.I = w;
        this.l = W(this);
        this.o = W(this);
        this.O = W(this);
        iz(this, Q);
        this.ja = hz(this, E);
        this.F = hz(this, N);
        this.L = X(this, G);
        this.W = X(this, R);
        this.C = hz(this, T);
        iz(this, Q);
        iz(this, aa);
        ca && (this.ma = X(this, ca));
        this.R = new az(ma);
        Ba && (this.ka = Y(this, Ba));
        this.ba = X(this, Na);
        iz(this, Ea);
        this.da = X(this, ta);
        Oa && (this.oa = hz(this, Oa));
        this.Z = Y(this, Ia)
    };
    _.O(MK, Z);
    MK.prototype.j = function () {
        if (this.L.value.length) {
            var a = !_.H(Hw);
            if (a) {
                qg();
                var b = sg[1]
            } else b = "";
            if (a) {
                qg();
                var c = sg[4]
            } else c = "";
            a ? (qg(), a = sg[6]) : a = "";
            var d, e, f,
                g = null != (f = null == (d = this.C) ? void 0 : d.value) ? f : null !== (null == (e = this.C) ? void 0 : e.value) || this.C.yb() ? null : 1;
            this.F.value && (this.N.Hc = this.F.value);
            var h, k, l, n, m, p;
            d = {
                ga: {
                    I: this.I,
                    context: this.context,
                    N: this.N,
                    va: this.va,
                    X: this.X,
                    Ba: this.Ba,
                    td: this.td,
                    isSecureContext: this.isSecureContext,
                    vg: null == (h = this.oa) ? void 0 : h.value,
                    Va: this.Va
                },
                ca: {aa: this.L.value, P: this.P, lb: this.lb, Bd: !1},
                xg: {Kb: this.Kb, Jb: this.Jb},
                Qf: {Oe: b, Hf: c, Yf: a},
                Tf: {qf: null != (n = this.ja.value) ? n : "0"},
                Ie: {nc: this.nc, Ub: this.Ub},
                Sb: {md: this.W.value, Ac: this.Z.value},
                mg: {ng: g},
                ig: {
                    Rf: null != (m = null == (k = this.ma) ? void 0 : k.value) ? m : new v.Map,
                    Vf: this.R.value,
                    ff: this.ba.value
                },
                Wf: {uf: null != (p = null == (l = this.ka) ? void 0 : l.value) ? p : null, nf: this.da.value}
            };
            this.o.G(d);
            h = new aI(d);
            k = om(cI(h));
            l = k.url;
            Dy(this.zb, (9).toString(), 9, k.Vd);
            this.l.G(l);
            this.O.G(bI(h) ? mr("https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : mr("https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.l.G(""), Wy(this.o)
    };
    var NK = function (a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.l = b;
        this.Y = c;
        this.P = d;
        this.I = e;
        this.A = gz(this);
        iz(this, f)
    };
    _.O(NK, Z);
    NK.prototype.j = function () {
        for (var a = _.A(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Yh(b, this.Y);
            if (!Xh(b, this.Y) && c) {
                a:{
                    var d = c;
                    var e = this.P.V[b.getDomId()], f = 0, g = 0;
                    e = _.A(Bh(e));
                    for (var h = e.next(); !h.done; h = e.next()) if (h = h.value, Array.isArray(h)) {
                        var k = _.A(h);
                        h = k.next().value;
                        k = k.next().value;
                        if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), lm($h(d, this.I)) || !d.parentElement || lm($h(d.parentElement, this.I))))) {
                            d = [f, 0];
                            break a
                        }
                    }
                    d = f || g ? [f, g] : null
                }
                g = this.P;
                f = g.U;
                g = g.V[b.getDomId()];
                km(c, fi(b), Hh(f, g), d)
            }
        }
        this.A.notify()
    };
    var OK = function (a, b, c) {
        Z.call(this, a, 1051);
        this.o = b;
        this.l = Y(this, c)
    };
    _.O(OK, Z);
    OK.prototype.j = function () {
        var a = this;
        if (this.l.value) {
            var b = Nf(this.l.value, function (c, d) {
                hh(a.context, c, d);
                var e, f;
                null == (e = a.o) || null == (f = e.error) || f.call(e, d)
            });
            _.H(ox) && _.Um(this, b)
        }
    };
    var PK = function (a, b, c, d, e, f) {
        this.B = a;
        this.l = b;
        this.J = c;
        this.aa = d;
        this.X = e;
        this.H = f;
        this.D = "";
        this.m = -1;
        this.state = 1;
        this.j = ""
    }, RK = function (a, b) {
        if (b) if (1 !== a.state && 2 !== a.state) QK(a, new Ey("state err: (" + ([a.state, a.j.length].join() + ")"))); else {
            a.j && (b = a.j + b);
            var c = 0;
            do {
                var d = b.indexOf("\n", c);
                var e = -1 !== d;
                if (!e) break;
                var f = a;
                c = b.substr(c, d - c);
                if (1 === f.state) f.D = c, ++f.m, f.state = 2; else {
                    try {
                        f.B(f.m, f.D, {kind: 0, Ma: zv(c)}, f.aa, f.X, f.H), f.D = ""
                    } catch (g) {
                    }
                    f.state = 1
                }
                c = d + 1
            } while (e && c < b.length);
            a.j = b.substr(c)
        }
    }, QK = function (a, b) {
        a.state = 4;
        try {
            a.l(b)
        } catch (c) {
        }
    }, SK = function (a) {
        1 !== a.state || a.j ? QK(a, new Ey("state err (" + ([a.state, a.j.length].join() + ")"))) : (a.state = 3, a.J(a.m, a.aa, a.X))
    };
    var TK = function (a, b, c, d, e, f, g, h, k, l, n) {
        Z.call(this, a, 788);
        this.O = b;
        this.L = c;
        this.F = d;
        this.X = e;
        this.A = gz(this);
        this.C = 0;
        this.o = !1;
        this.l = null != n ? n : new XMLHttpRequest;
        this.W = X(this, f);
        this.Z = Y(this, g);
        this.ba = X(this, h);
        iz(this, k);
        this.R = X(this, l)
    };
    _.O(TK, Z);
    TK.prototype.j = function () {
        var a = this, b = this.ba.value;
        if (b) {
            var c = new PK(this.O, this.L, this.F, this.W.value, this.X, this.Z.value);
            this.l.open("GET", b);
            this.l.withCredentials = this.R.value;
            this.l.onreadystatechange = function () {
                UK(a, c, !1)
            };
            this.l.onload = function () {
                UK(a, c, !0)
            };
            this.l.onerror = function () {
                QK(c, new Fy("XHR error"))
            };
            this.l.send()
        }
        this.A.notify()
    };
    var UK = function (a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState) if (300 <= a.l.status) a.o || (QK(b, new Fy("xhr_err-" + a.l.status)), a.o = !0); else {
                var d = a.l.responseText.substr(a.C);
                d && RK(b, d);
                a.C = a.l.responseText.length;
                c && 4 === a.l.readyState && SK(b)
            }
        } catch (e) {
            QK(b, e)
        }
    };
    var VK = function (a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 1078);
        this.C = b;
        this.o = c;
        this.l = d;
        this.X = e;
        this.A = gz(this);
        this.L = X(this, f);
        this.O = Y(this, g);
        this.R = X(this, h);
        iz(this, k);
        this.F = X(this, l)
    };
    _.O(VK, Z);
    VK.prototype.j = function () {
        var a = this.R.value;
        a && WK(this, a);
        this.A.notify()
    };
    var WK = function (a, b) {
        var c, d, e, f, g, h, k, l, n, m, p, r, u, w;
        _.jb(function (E) {
            switch (E.j) {
                case 1:
                    return c = new PK(a.C, a.o, a.l, a.L.value, a.X, a.O.value), e = a.F.value ? "include" : "same-origin", E.D = 2, kb(E, fetch(b, {credentials: e}), 4);
                case 4:
                    d = E.m;
                    mb(E, 3);
                    break;
                case 2:
                    f = nb(E), QK(c, new Fy("fetch error: " + (f instanceof Error ? f.message : void 0)));
                case 3:
                    if (!d) return E.return();
                    if (300 <= d.status) return QK(c, new Fy("fetch_status-" + d.status)), E.return();
                    h = null == (g = d.body) ? void 0 : g.getReader();
                    if (!h) return E.return();
                    k = new TextDecoder;
                    l = !1;
                case 5:
                    if (l) {
                        E.j = 6;
                        break
                    }
                    p = void 0;
                    E.D = 7;
                    return kb(E, h.read(), 9);
                case 9:
                    r = E.m;
                    p = r.value;
                    l = r.done;
                    mb(E, 8);
                    break;
                case 7:
                    m = u = nb(E), l = !0;
                case 8:
                    n && (w = k.decode(n, {stream: !l}), RK(c, w));
                    n = p;
                    E.j = 5;
                    break;
                case 6:
                    m && QK(c, new Fy("fetch read error: " + (m instanceof Error ? m.message : void 0))), SK(c), E.j = 0
            }
        })
    };
    var XK = function (a, b, c, d, e) {
        Z.call(this, a, 918);
        this.P = b;
        this.zb = c;
        this.A = gz(this);
        this.l = X(this, e);
        iz(this, d)
    };
    _.O(XK, Z);
    XK.prototype.j = function () {
        var a = this.l.value;
        a.length && Ro(this.zb, "3", (0, C.K)(x(this.P.V[a[0].getDomId()], 20)));
        this.A.notify()
    };
    var YK = function (a, b) {
        Z.call(this, a, 820);
        this.I = b;
        this.A = W(this)
    };
    _.O(YK, Z);
    YK.prototype.j = function () {
        var a = this, b, c, d, e;
        return _.jb(function (f) {
            if (1 == f.j) return kb(f, Pi(a.I), 2);
            b = f.m;
            c = b.Hc;
            d = b.status;
            c || oi("gpt_etu", function (g) {
                ui(g, a.context);
                K(g, "rsn", d)
            });
            a.A.G(null != (e = c) ? e : "");
            f.j = 0
        })
    };
    var ZK = function (a, b, c, d, e, f) {
        Z.call(this, a, 978);
        this.l = b;
        this.X = c;
        this.I = d;
        this.localStorage = e;
        this.A = W(this);
        f && (this.o = Y(this, f))
    };
    _.O(ZK, Z);
    ZK.prototype.j = function () {
        var a;
        if (_.H(ex) && null != (a = this.o) && a.value) {
            var b, c, d, e, f, g;
            (null == (b = this.l) ? 0 : F(b, 8)) || _.H(Vw) && (null == (c = this.l) ? 0 : F(c, 13)) || (null == (d = this.l) ? 0 : F(d, 1)) || 1 === (null == (e = this.l) ? void 0 : ce(e, 6, 2)) || 1 === (null == (f = this.l) ? void 0 : x(f, 5)) || (null == (g = this.l) ? 0 : F(g, 9)) || !F(this.X, 5) || F(this.X, 9) ? this.A.G(5) : (a = Yi(this.o.value, this.I, new _.XD(this.context), this.localStorage), Xy(this.A, a))
        } else Wy(this.A)
    };
    ZK.prototype.m = function () {
        Wy(this.A)
    };
    var aL = function (a, b, c) {
        Z.call(this, a, 804);
        this.l = c;
        this.F = [];
        this.o = {
            vf: $K(this, function (d) {
                return x(d, 6)
            }), Bg: $K(this, function (d) {
                return x(d, 7)
            }), Bf: $K(this, function (d) {
                return !!F(d, 8)
            }), mf: $K(this, function (d) {
                return x(d, 10)
            }), ce: $K(this, function (d) {
                var e;
                return null != (e = d.getEscapedQemQueryId()) ? e : ""
            }), Pe: $K(this, function (d) {
                return Qe(d, uu, 43)
            }), Af: $K(this, function (d) {
                return !!F(d, 9)
            }), tg: $K(this, function (d) {
                return !!F(d, 12)
            }), pf: $K(this, function (d) {
                return cn(d, eu, 48, Cu)
            }), jf: $K(this, function (d) {
                return cn(d, cu, 39, Cu)
            }), Bc: $K(this, function (d) {
                return x(d, 36)
            }), ug: $K(this, function (d) {
                return F(d, 13)
            }), zf: $K(this, function (d) {
                return F(d, 3)
            }), pg: $K(this, function (d) {
                return x(d, 49)
            }), yg: $K(this, function (d) {
                return x(d, 29)
            }), zg: $K(this, function (d) {
                return x(d, 30)
            }), wf: $K(this, function (d) {
                return Qe(d, wu, 51)
            }), df: $K(this, function (d) {
                return x(d, 61)
            }), Da: W(this), Ge: $K(this, function (d) {
                return Qe(d, zu, 58)
            }), Cg: $K(this, function (d) {
                var e, f;
                return null != (f = null == (e = Qe(d, vu, 56)) ? void 0 : xf(e, 1)) ? f : null
            }), Gb: $K(this, function (d) {
                return ae(d, Xt, 62)
            }), If: $K(this, function (d) {
                return pc(d, 63, $b)
            })
        };
        this.C = X(this, b)
    };
    _.O(aL, Z);
    var $K = function (a, b) {
        var c = W(a);
        a.F.push({A: c, gf: b});
        return c
    };
    aL.prototype.j = function () {
        for (var a = _.A(this.F), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.gf;
            Vy(b.A, c(this.C.value))
        }
        0 === this.l.kind || 1 === this.l.kind && this.l.url ? this.o.Da.G(this.l) : this.o.Da.G({
            kind: 0,
            Ma: x(this.C.value, 4) || ""
        })
    };
    var bL = function (a, b, c) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.l = gz(this);
        this.o = X(this, c)
    };
    _.O(bL, Z);
    bL.prototype.j = function () {
        for (var a = this, b = en(this.o.value, 23, !1), c = _.we(Wn), d = _.A(b), e = d.next(); !e.done; e = d.next()) e = e.value, WI(c, e), XI(c, e, this.slotId);
        this.l.notify();
        b.length && oi("gpt_hp", function (f) {
            ui(f, a.context);
            K(f, "ls", b.join())
        }, _.Ee(sw))
    };
    var cL = function (a, b, c) {
        Z.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.A = W(this);
        this.o = W(this)
    };
    _.O(cL, Z);
    cL.prototype.j = function () {
        var a = JSON.parse(this.l), b = zj(a, nr);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = new Bu(a.slice());
        var c;
        b = _.A(null != (c = en(a, 27)) ? c : []);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, _.we(xe).m(c);
        ze(4);
        this.slotId.dispatchEvent(oF, 800, a);
        this.A.G(a);
        var d;
        Vy(this.o, null != (d = Qe(a, su, 54)) ? d : null)
    };
    var dL = function (a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.N = c;
        this.l = gz(this);
        this.o = X(this, d)
    };
    _.O(dL, Z);
    dL.prototype.j = function () {
        var a = this;
        F(this.o.value, 11) && (_.AF(this.N, this.slotId), xF(this.N, this.slotId, function () {
            _.BF(a.N, a.slotId)
        }));
        this.l.notify()
    };
    var eL = function (a, b, c, d) {
        Z.call(this, a, 821);
        this.X = b;
        this.va = c;
        this.l = gz(this);
        this.o = X(this, d)
    };
    _.O(eL, Z);
    eL.prototype.j = function () {
        if (F(this.X, 5)) for (var a = new v.Set, b = _.A(ae(this.o.value, tu, 14)), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = void 0, e = null != (d = Cs(c, 5)) ? d : 1;
            a.has(e) || (vz(this.va, 2 === e ? "__gpi" : "__gads", c, this.X), a.add(e))
        }
        this.l.notify()
    };/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var fL = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), gL = function () {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = fL[19 == d ? c & 3 | 8 : c]);
        return a.join("")
    };
    var hL = function (a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, w, E, N, G, R, T, Q, aa, ca, ma) {
        Z.call(this, a, 973);
        this.ma = b;
        this.L = c;
        this.O = d;
        this.F = e;
        this.P = f;
        this.N = g;
        this.va = h;
        this.ja = k;
        this.Z = l;
        this.o = n;
        this.oc = m;
        this.R = p;
        this.ka = r;
        this.ub = u;
        this.isSecureContext = w;
        this.Va = E;
        this.I = N;
        this.Y = G;
        this.W = R;
        this.oa = aa;
        this.l = ca;
        this.C = ma;
        this.da = Y(this, R);
        this.ba = X(this, T);
        this.ya = X(this, Q);
        var Ba;
        iz(this, (null != (Ba = this.l) ? Ba : p).Wb)
    };
    _.O(hL, Z);
    hL.prototype.j = function () {
        var a = this, b = new of;
        _.Um(this, b);
        var c = this.ba.value, d = iE(this.P.U);
        if (!_.H(px)) {
            var e = new MI(this.context, Oj(), console, this.W);
            I(b, e)
        }
        I(b, new OK(this.context, console, this.W));
        e = new xK(this.context, this.O, this.N, Qe(this.P.U, Cp, 5), this.Y);
        I(b, e);
        var f = new NK(this.context, this.O, this.Y, this.P, this.I, e.A);
        I(b, f);
        var g = !!F(this.P.U, 6);
        e = new BK(this.context, this.O, g, this.P, this.L, this.I, c);
        I(b, e);
        var h = new GK(this.context, d, c, e.l);
        I(b, h);
        var k = new YK(this.context, this.I);
        I(b, k);
        var l, n = null != (l = this.l) ? l : this.R;
        if (this.C) {
            var m = this.C.qb;
            var p = this.C.Ab;
            var r = this.C.vc
        } else this.l && !_.H(rw) && (m = this.l.qb, p = this.l.Ab, r = this.l.vc);
        l = n.Pa;
        var u = n.Ja, w = n.ab, E = n.Ra, N = n.kb, G = n.Db, R = n.Eb, T = n.Tb, Q = n.Fd, aa = n.wa, ca = n.Sa,
            ma = n.hb;
        n = n.bc;
        _.H(Dw) ? (m = new VI(this.context, m), I(b, m), m = m.A) : (m = new UI(this.context, m), I(b, m), m = m.A);
        u = new KH(this.context, this.L, this.P.V, this.ub, e.l, l, u, w, E, N, T, aa);
        I(b, u);
        I(b, new QH(this.context, l, G, R, u.F, u.L, this.P.V));
        _.H(ex) ? (G = new ZK(this.context, d, c, this.I, this.da.value, p), I(b, G), w = G.A) : (w = new up, Wy(w));
        G = window.isSecureContext && _.H(ix) ? "wbn" : "ldjh";
        var Ba = ++this.N.l;
        R = "wbn" === G ? gL().toLowerCase() : void 0;
        E = this.oc;
        r = new MK(this.context, g, this.N, this.va, this.P, G, E.lb, E.Kb, E.Jb, this.ya.value, R, _.we(fh), c, this.isSecureContext, this.Va, this.I, m, k.A, e.l, u.l, w, f.A, this.oa, Q, l, aa, ca, ma, n, r, u.o);
        I(b, r);
        f = new XK(this.context, this.P, _.we(fh), r.l, e.l);
        I(b, f);
        d = new CK(this.context, d, c);
        I(b, d);
        g = _.dh(this.context, 646, function (Ea, ta, Oa, Ia, rb, Lc) {
            var vc = function () {
                return void iL(a, rb, Ea, ta, Oa, Ia, Lc)
            };
            Ea && _.H(pw) ? setTimeout(_.dh(a.context, 646, vc), 0) : vc()
        });
        k = _.dh(this.context, 647, function (Ea, ta, Oa) {
            var Ia = function () {
                return void jL(a, Ba, Oa, ta, Ea)
            };
            _.H(pw) ? setTimeout(_.dh(a.context, 646, Ia), 0) : Ia()
        });
        var Na;
        "ldjh" === G ? (l = kL(this, 289, "strm_err"), _.H(xw) && window.fetch || _.H(yw) && qv(window.fetch) ? Na = new VK(this.context, g, l, k, c, e.l, h.A, r.l, f.A, d.A) : Na = new TK(this.context, g, l, k, c, e.l, h.A, r.l, f.A, d.A)) : Na = new zK(this.context, g, kL(this, 1042, "Unknown web bundle error."), k, G, (0, C.K)(R), c, this.Y, e.l, h.A, r.l, r.O, f.A, d.A);
        I(b, Na);
        h = new KK(this.context, Ba, e.l, Na.A);
        I(b, h);
        h = new vK(this.context, r.o, r.l);
        I(b, h);
        h = new LK(this.context, this.o.na, this.P, h.A);
        I(b, h);
        h = new JK(this.context, this.ja, this.I, h.A);
        I(b, h);
        h = new IK(this.context, this.P, this.Z, e.l, h.A);
        I(b, h);
        e = new DK(this.context, this.N, this.P, this.Y, e.l, h.A);
        I(b, e);
        e = new EK(this.context, Be(this.I), this.I, c, Na.A);
        I(b, e);
        _.H(qw) && 1 === Ba && (c = new uK(this.context, c, p, Na.A), I(b, c));
        Bf(b)
    };
    var iL = function (a, b, c, d, e, f, g) {
        var h, k, l;
        return _.jb(function (n) {
            h = f[c];
            if (!h) return hh(a.context, 646, Error("missing slot")), n.return();
            0 === c && (k = (0, C.K)(x(a.P.V[h.getDomId()], 20)), Ro(_.we(fh), "4", k));
            return kb(n, lL(a, h, d, e, b, null == (l = g) ? void 0 : l[h.getId()]), 0)
        })
    }, jL = function (a, b, c, d, e) {
        var f, g, h;
        return _.jb(function (k) {
            switch (k.j) {
                case 1:
                    var l = a.context, n = e + 1, m = d.length;
                    if (l.qc) {
                        var p = l.xb;
                        l = Zg(l);
                        var r = new Tv;
                        r = _.y(r, 3, b, 0);
                        n = _.y(r, 1, n, 0);
                        m = _.y(n, 2, m, 0);
                        m = ah(l, 8, bh, m);
                        Ld(p, m)
                    }
                    f = e + 1;
                case 2:
                    if (!(f < d.length)) {
                        k.j = 4;
                        break
                    }
                    if (!d[f]) {
                        k.j = 3;
                        break
                    }
                    p = new Bu;
                    p = _.z(p, 8, !0);
                    g = Yd(p);
                    h = '{"empty":' + g + "}";
                    return kb(k, iL(a, c, f, h, {kind: 0, Ma: ""}, d, null), 3);
                case 3:
                    ++f;
                    k.j = 2;
                    break;
                case 4:
                    EF(a.N, a.F) || a.o.vd.dispatchEvent(tF, 965, a.F), k.j = 0
            }
        })
    }, lL = function (a, b, c, d, e, f) {
        var g, h, k, l, n, m, p, r, u, w, E, N, G, R, T, Q, aa, ca, ma, Ba, Na, Ea, ta, Oa;
        return _.jb(function (Ia) {
            switch (Ia.j) {
                case 1:
                    return g = new of, h = new cL(a.context, c, b), I(g, h), k = new CI(a.context, h.o), I(g, k), l = new eL(a.context, e, a.va, h.A), I(g, l), n = new bL(a.context, b, h.A), I(g, n), m = new dL(a.context, b, a.N, h.A), I(g, m), p = new aL(a.context, h.A, d), I(g, p), r = [l.l.promise, n.l.promise, m.l.promise], Bf(g), kb(Ia, v.Promise.all(r), 2);
                case 2:
                    if (b.J) return Ia.return();
                    u = p;
                    E = w = u.o;
                    N = E.Ge;
                    G = E.Bf;
                    R = E.ce;
                    return kb(Ia, N.promise, 3);
                case 3:
                    return T = Ia.m, Q = !!T, ca = null == (aa = T) ? void 0 : Qe(aa, fp, 5), kb(Ia, G.promise, 4);
                case 4:
                    return ma = Ia.m, Q && oi("gpt_td_init", function (rb) {
                        ui(rb, a.context);
                        var Lc, vc;
                        K(rb, "winner_qid", null != (vc = null == (Lc = ca) ? void 0 : Lc.getEscapedQemQueryId()) ? vc : "");
                        var Ze, $e;
                        K(rb, "xfpQid", null != ($e = null == (Ze = ca) ? void 0 : bf(Ze, 6)) ? $e : "");
                        K(rb, "noFill", ma ? "1" : "0");
                        K(rb, "publisher_tag", "gpt")
                    }, 1), Ba = C, Na = Ba.K, kb(Ia, R.promise, 5);
                case 5:
                    Ea = Na.call(Ba, Ia.m), ta = Yl(a.P.V[b.getDomId()]), ((Oa = qm("google_norender") || 5 === ta && _.H(Qw)) || ma && !Q) && !_.H(Gp) ? Vo(b, a.N, a.P, Ea) : pK(a.ka, a.ma, a.L, b, ma || Oa, Q, a.N, a.P, w, k.l, e, f, a.o.na, a.Z, a.R, a.l), g.Ea(), Ia.j = 0
            }
        })
    }, kL = function (a, b, c) {
        return _.dh(a.context, b, function (d) {
            d = d instanceof Error ? d : Error();
            d.message = d.message || c;
            hh(a.context, b, d);
            EF(a.N, a.F) || a.o.vd.dispatchEvent(tF, 965, a.F)
        })
    };
    var mL = function (a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, w, E, N, G, R, T, Q, aa) {
        Z.call(this, a, 885);
        this.ja = b;
        this.F = c;
        this.P = d;
        this.N = e;
        this.va = f;
        this.oc = g;
        this.ba = h;
        this.R = k;
        this.l = l;
        this.L = n;
        this.o = m;
        this.da = p;
        this.isSecureContext = r;
        this.O = u;
        this.Z = w;
        this.Va = E;
        this.I = N;
        this.Y = G;
        this.C = Q;
        this.W = aa;
        this.ka = X(this, R);
        iz(this, T)
    };
    _.O(mL, Z);
    mL.prototype.j = function () {
        var a = this.ka.value;
        if (a.length) {
            var b = this.N, c = this.l, d = a.length;
            b.m.has(c);
            b.m.set(c, d);
            a = _.A(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0;
                b = c.ub;
                d = c.aa;
                c = new of;
                _.Um(this, c);
                var f = Xm(this.context, this.Z, (null != (e = this.C) ? e : this.o).Yc);
                e = f.Cb;
                var g = f.ee;
                _.Um(c, f.qa);
                e = Qm(this.context, this.F, this.N, iE(this.P.U), this.I, e, g);
                f = e.eb;
                _.Um(c, e.qa);
                e = new tK(this.context, this.I, f);
                I(c, e);
                e = new qK(this.context, this.I, f);
                I(c, e);
                e = new rK(this.context, _.Ug(150), f);
                I(c, e);
                g = new vp(this.context, this.I, f);
                I(c, g);
                var h = new sK(this.context, this.va, this.O, g.A, f);
                I(c, h);
                b = new hL(this.context, this.ja, this.F, d, this.l, this.P, this.N, this.va, this.ba, this.R, this.L, this.oc, this.o, this.da, b, this.isSecureContext, this.Va, this.I, this.Y, g.A, f, h.o, e.l, this.C, this.W);
                I(c, b);
                Bf(c)
            }
        } else this.L.vd.dispatchEvent(tF, 965, this.l)
    };
    var nL = new v.Map, oL = function (a, b, c, d) {
        d = void 0 === d ? nL : d;
        Z.call(this, a, 834);
        this.C = b;
        this.aa = c;
        this.l = d;
        this.o = W(this);
        this.F = v.Promise.all(this.aa.map(this.L, this))
    };
    _.O(oL, Z);
    oL.prototype.j = function () {
        var a = this, b;
        return _.jb(function (c) {
            if (1 == c.j) return kb(c, a.F, 2);
            b = c.m;
            a.o.G(b.filter(function (d) {
                return null != d && !d.J
            }));
            c.j = 0
        })
    };
    oL.prototype.L = function (a) {
        var b = this, c, d;
        return _.jb(function (e) {
            if (1 == e.j) {
                if (a.J) return e.return();
                b.l.has(a) || (b.l.set(a, lq(a)), _.Km(a, function () {
                    return void b.l.delete(a)
                }));
                c = (0, C.K)(b.l.get(a));
                return kb(e, c(), 2)
            }
            d = e.m;
            if (b.J) return e.return();
            if (d) return e.return(a);
            M(b.C, LG(a.getAdUnitPath()));
            return e.return()
        })
    };
    var pL = function (a, b, c, d, e) {
        Z.call(this, a, 847);
        this.N = b;
        this.Ba = c;
        this.o = d;
        this.l = W(this);
        this.C = X(this, e)
    };
    _.O(pL, Z);
    pL.prototype.j = function () {
        var a = this.C.value;
        if (a.length) {
            for (var b = _.A(a), c = b.next(); !c.done; c = b.next()) FF(this.N, c.value);
            this.o ? this.l.G([]) : this.Ba ? (b = Rg(a[0].getAdUnitPath()), a = qL(a, b), this.l.G(a)) : (a = a.map(function (d) {
                return {ub: Rg(d.getAdUnitPath()), aa: [d]}
            }), this.l.G(a))
        } else this.l.G([])
    };
    var qL = function (a, b) {
        var c = [];
        a = xa(a, function (f) {
            return Rg(f.getAdUnitPath())
        });
        a = _.A(_.t(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.A(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({ub: d, aa: e}) : c.push({ub: d, aa: e})
        }
        return c
    };
    var rL = function (a, b, c) {
        Z.call(this, a, 845);
        this.V = b;
        this.l = W(this);
        this.o = W(this);
        this.C = X(this, c)
    };
    _.O(rL, Z);
    rL.prototype.j = function () {
        var a = this, b = function (d) {
            return !!Bh(a.V[d.getDomId()]).length
        }, c = this.C.value;
        this.l.G(c.filter(b));
        this.o.G(c.filter(or(b)))
    };
    var sL = function (a, b, c, d, e) {
        Z.call(this, a, 864);
        this.N = b;
        this.P = c;
        this.Y = d;
        this.l = gz(this);
        this.o = X(this, e)
    };
    _.O(sL, Z);
    sL.prototype.j = function () {
        for (var a = _.A(this.o.value), b = a.next(); !b.done; b = a.next()) if (b = b.value, _.To(this.N, b)) {
            var c = this.P, d = c.U;
            c = c.V[b.getDomId()];
            Fm(c, d) && Gm(b, this.Y, c, d);
            FF(this.N, b);
            var e = void 0, f = void 0;
            null != (e = null != (f = Gh(c, 10)) ? f : F(d, 11)) && e && Gm(b, this.Y, c, d)
        }
        this.l.notify()
    };
    var tL = function (a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, w, E, N) {
        _.U.call(this);
        var G = this;
        this.context = a;
        this.O = b;
        this.B = c;
        this.N = d;
        this.va = e;
        this.na = f;
        this.T = g;
        this.o = h;
        this.L = k;
        this.l = l;
        this.isSecureContext = n;
        this.M = m;
        this.F = p;
        this.Va = r;
        this.Y = u;
        this.I = w;
        this.H = E;
        this.C = N;
        this.j = new v.Map;
        this.m = new jF(a);
        _.Um(this, this.m);
        lF(this.m, tF, function (R) {
            R = R.detail;
            var T = G.j.get(R);
            T && (G.j.delete(R), T.Ea())
        })
    };
    _.O(tL, _.U);
    var uL = function (a, b, c, d) {
        var e = ++a.N.B;
        a.j.has(e);
        var f = new of;
        a.j.set(e, f);
        b = new oL(a.context, a.B, b);
        I(f, b);
        var g = new rL(a.context, d.V, b.o);
        I(f, g);
        b = new pL(a.context, a.N, !!F(d.U, 6), qm("google_nofetch"), g.l);
        I(f, b);
        g = new sL(a.context, a.N, d, document, g.o);
        I(f, g);
        a = new mL(a.context, a.O, a.B, d, a.N, a.va, c, a.T, a.o, e, {
            vd: a.m,
            na: a.na
        }, a.l, a.L, a.isSecureContext, a.M, a.F, a.Va, a.I, a.Y, b.l, g.l, a.H, a.C);
        I(f, a);
        Bf(f)
    };
    var vL = function (a, b, c, d, e, f, g, h, k, l, n, m, p, r) {
        jJ.call(this, c, k);
        this.context = a;
        this.N = d;
        this.H = new v.Set;
        this.o = {};
        this.T = new oK(a, d);
        this.L = new tL(a, b, c, d, new sz(window, _.H(Aw)), this.l, null != m ? m : _.we(yJ), e, this.T, f, g, h, l, n, document, window, p, r);
        _.Um(this, this.L)
    };
    _.O(vL, jJ);
    vL.prototype.getName = function () {
        return "publisher_ads"
    };
    vL.prototype.display = function (a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d) if (_.ka(d) && 1 == d.nodeType) {
            var g = d;
            f = g.id
        } else f = d;
        Tn(this);
        var h = Ok(c, this.context, this.m, a, b, f), k = h.slotId;
        h = h.Ya;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            Mn(this, null != (l = g) ? l : k.getDomId(), c)
        } else M(this.m, Ij("PubAdsService.display", [a, b, d]))
    };
    var Mn = function (a, b, c) {
        var d = wL(b, c);
        c = d.slotId;
        var e = d.Ze;
        d = d.af;
        if (c) {
            if (b = hi(), (d = gn(b, c.getDomId())) && !F(d, 19)) if (e && b.D.set(c, e), Yh(c) || Fh(Yl(d))) {
                if (_.z(d, 19, !0), e = Rh(b.j, b.m), a.B) {
                    Tn(a);
                    a.B && zF(a.N, c);
                    a.m.info(gG());
                    b = e.U;
                    d = e.V;
                    var f = F(b, 6);
                    if (f || !a.N.rb(c)) f && (f = Yh(c)) && c.dispatchEvent(nF, 778, f), F(b, 4) && (d = d[c.getDomId()], Fm(d, b) && !a.N.rb(c) && Gm(c, document, d, b)), xL(a, e, c)
                }
            } else M(a.m, WF(String(x(d, 1)), String(x(d, 2))), c)
        } else d ? a.m.error(XF(d)) : a.m.error(Ij("googletag.display", [String(b)]))
    }, iH = function (a, b, c) {
        var d = void 0 === d ? document : d;
        var e;
        null != (e = c.V[b.getDomId()]) && _.z(e, 19, !0);
        e = {id: Mu(b.getDomId())};
        bb(d, pg(e));
        Yh(b, d) ? (Tn(a), zF(a.N, b), xL(a, c, b)) : oi("gpt_pb_write", function (f) {
            ui(f, a.context)
        })
    };
    vL.prototype.slotAdded = function (a, b) {
        var c = this;
        F(b, 17) || this.B && zF(this.N, a);
        this.l.dispatchEvent(qF, 724, {Qd: a.getDomId(), V: b});
        var d = 0;
        lF(a, Uo, function (e) {
            var f = e.detail;
            e = f.size;
            f = f.isEmpty;
            var g = new ZI(a, "publisher_ads");
            f && (g.isEmpty = !0);
            var h = a.j.getResponseInformation();
            e && h && (g.size = [e.width, e.height], g.sourceAgnosticCreativeId = h.sourceAgnosticCreativeId, g.sourceAgnosticLineItemId = h.sourceAgnosticLineItemId, g.isBackfill = h.isBackfill, g.creativeId = h.creativeId, g.lineItemId = h.lineItemId, g.creativeTemplateId = h.creativeTemplateId, g.advertiserId = h.advertiserId, g.campaignId = h.campaignId, g.yieldGroupIds = h.yieldGroupIds, g.companyIds = h.companyIds);
            _.H(Ew) && (e = new Uj("gpt_sree"), ui(e, c.context), K(e, "sid", c.context.pvsid), K(e, "adk", cq(c.N, a)), K(e, "nf", f), K(e, "rc", DF(c.N, a)), K(e, "sret", ((_.se(_.q) || 0) - d).toFixed(3)), Wj(e));
            c.l.dispatchEvent("slotRenderEnded", 708, g)
        });
        lF(a, oF, function (e) {
            var f, g;
            d = null != (g = null != (f = e.timeStamp) ? f : _.se(_.q)) ? g : 0;
            c.l.dispatchEvent("slotResponseReceived", 709, new eJ(a, c.getName()))
        });
        jJ.prototype.slotAdded.call(this, a, b)
    };
    var xL = function (a, b, c) {
        var d = yL(a, b, c);
        zL(a, d, b, {lb: 1});
        b = c.getAdUnitPath();
        if (c = a.o[b]) {
            c = _.A(c);
            for (d = c.next(); !d.done; d = c.next()) d = d.value, zL(a, d.aa, d.P, d.oc);
            delete a.o[b]
        }
    }, yL = function (a, b, c) {
        var d = b.U;
        b = b.V;
        if (F(d, 4)) return [];
        var e;
        return !F(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : F(e, 17)) ? (a.H.add(c), _.Km(c, function () {
            return void a.H.delete(c)
        }), [c]) : a.j.filter(function (f) {
            if (a.H.has(f)) return !1;
            a.H.add(f);
            _.Km(f, function () {
                return void a.H.delete(f)
            });
            return !0
        })
    }, zL = function (a, b, c, d) {
        a.m.info(nG());
        if (AL(a, b, d, c) && 1 !== d.lb) for (b = _.A(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), a.l.dispatchEvent(rF, 725, {
            Qd: d,
            V: c.V[d]
        })
    }, AL = function (a, b, c, d) {
        b = b.filter(function (e) {
            if (!_.To(a.N, e)) return !1;
            var f = d.V[e.getDomId()];
            5 !== Yl(f) && 4 !== Yl(f) || _.AF(a.N, e);
            return !0
        });
        if (!b.length) return null;
        uL(a.L, b, c, d);
        return b
    };
    vL.prototype.refresh = function (a, b, c) {
        b = BL(this, b);
        if (!b.length) return !1;
        CL(this, a, b, null != c ? c : {lb: 2});
        return !0
    };
    var BL = function (a, b) {
        return b.filter(function (c, d) {
            if (!c.J) return !0;
            M(a.m, qG(String(d)));
            return !1
        })
    }, CL = function (a, b, c, d) {
        var e = c[0], f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
        if (a.B) {
            var h = {};
            e = _.A(c);
            for (f = e.next(); !f.done; h = {Rb: h.Rb}, f = e.next()) h.Rb = f.value, a.H.add(h.Rb), _.Km(h.Rb, function (k) {
                return function () {
                    return void a.H.delete(k.Rb)
                }
            }(h));
            zL(a, c, b, d)
        } else c.length && F(b.U, 6) ? (M(a.m, mG(g), e), e = e.getAdUnitPath(), f = null != (h = a.o[e]) ? h : [], f.push({
            aa: c,
            P: b,
            oc: d
        }), a.o[e] = f) : M(a.m, kG(g), e)
    };
    vL.prototype.F = function () {
        var a = this, b = hi().j;
        if (F(b, 6)) for (var c = _.A(this.j), d = c.next(); !d.done; d = c.next()) this.B && zF(this.N, d.value);
        qH(this, b);
        lF(this.l, "rewardedSlotClosed", function (e) {
            var f = e.detail.slot;
            e = _.t(a.j, "find").call(a.j, function (g) {
                return f === g.j
            });
            DL(a, [e], hi().j, hi().m, a.N)
        });
        Pj()
    };
    vL.prototype.destroySlots = function (a) {
        a = jJ.prototype.destroySlots.call(this, a);
        if (a.length && this.B) {
            var b = hi();
            EL(this, a, b.j, b.m)
        }
        return a
    };
    var rH = function (a, b, c, d) {
        if (!a.B) return M(a.m, lG(), d[0]), !1;
        var e = BL(a, d);
        if (!e.length) return M(a.m, Ij("PubAdsService.clear", [d].filter(function (f) {
            return void 0 !== f
        }))), !1;
        a.m.info(oG());
        EL(a, e, b, c);
        return !0
    }, EL = function (a, b, c, d) {
        for (var e = _.A(b), f = e.next(); !f.done; f = e.next()) wF(a.N, f.value);
        DL(a, b, c, d, a.N)
    };
    vL.prototype.forceExperiment = function (a) {
        a = Number(a);
        0 < a && _.we(xe).m(a)
    };
    var DL = function (a, b, c, d, e) {
        var f = void 0 === f ? window : f;
        b = _.A(b);
        for (var g = b.next(); !g.done; g = b.next()) {
            g = g.value;
            HF(a.T.N, g);
            var h = d[g.getDomId()];
            Fm(h, c) && Gm(g, f.document, h, c);
            FF(e, g)
        }
    }, sH = function (a, b) {
        if (!a.B) return null;
        var c, d;
        return {vid: null != (c = x(b, 22)) ? c : "", cmsid: null != (d = x(b, 23)) ? d : ""}
    }, qH = function (a, b) {
        F(b, 21) && a.B && _.z(b, 29, Av())
    }, wL = function (a, b) {
        var c = "";
        if ("string" === typeof a) c = a, b = fI(b, c); else if (_.ka(a) && 1 == a.nodeType) {
            var d = a;
            c = d.id;
            b = fI(b, c)
        } else b = (D = [].concat(_.Jd(b.aa)), _.t(D, "find")).call(D, function (e) {
            return e.j === a
        });
        return {slotId: b, Ze: d, af: c}
    };
    var FL = P(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]),
        GL = P(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
    var uq = "2023022102";
    (function (a, b) {
        var c = null != a ? a : {Ga: vq(), ib: "", xb: new zq(0), Be: !0, ae: 1};
        try {
            var d = Oj();
            (0, C.re)(!_.we(Sg).j);
            _.t(Object, "assign").call(Object, Tg, d._vars_);
            d._vars_ = Tg;
            if (d.evalScripts) d.evalScripts(); else {
                HE();
                try {
                    Yf()
                } catch (ma) {
                    hh(c, 408, ma)
                }
                Em();
                var e;
                _.H(Lk) && (e = new Mk);
                try {
                    Uf((null != e ? e : _.we(Mk)).H), ze(13), ze(3)
                } catch (ma) {
                    hh(c, 408, ma)
                }
                var f = xq(e), g = null != a ? a : Aq(f), h = null != b ? b : new TI(g);
                ch(g);
                oi("gpt_fifwin", function (ma) {
                    ui(ma, g)
                }, d.fifWin ? .01 : 0);
                var k = new vF, l = new oJ(k, e), n = new vJ(g), m = _.Ug(260), p = new NI(g, l, hi(), h, k, m, e),
                    r = kv();
                _.H(Lk) || (e = _.we(Mk));
                var u;
                _.H(rw) && (u = lo(g));
                var w = new jF(g), E = new jF(g), N = new jF(g), G;
                m && (G = OI(p, w));
                var R;
                _.H(Jw) && (R = _.Ug(221));
                var T;
                _.H(Kw) && (T = new yJ);
                var Q = new vL(g, l, h, k, n, p, r, e, w, m, R, T, G, u);
                _.H(wx) && new gI(g, w, k, l);
                var aa = hi().j;
                eo(g, h, Q, aa, l, E, N, e);
                var ca = _.dh(g, 77, function () {
                    var ma = d.cmd;
                    if (!ma || Array.isArray(ma)) {
                        var Ba = new hI(h);
                        d.cmd = Fj(g, Ba);
                        null != ma && ma.length && Ba.push.apply(Ba, ma)
                    }
                });
                d.fifWin && "complete" !== document.readyState ? _.hb(window, "load", function () {
                    return window.setTimeout(ca, 0)
                }) : ca();
                Hn();
                if (_.H(wx) || _.we(fh).j) tq(), Xj(document, _.H(yx) ? B(FL) : B(GL));
                Fo(g, h);
                Sj(g)
            }
        } catch (ma) {
            hh(c, 106, ma)
        }
    })();
}).call(this, {});
