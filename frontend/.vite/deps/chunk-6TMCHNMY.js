import {
  __publicField
} from "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/chunk-DCAKKOYV.js
var Vt = {};
var ge = function(t, e2, r3, a2, n) {
  var i = new Worker(Vt[e2] || (Vt[e2] = URL.createObjectURL(new Blob([t + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
  return i.onmessage = function(s2) {
    var u3 = s2.data, l2 = u3.$e$;
    if (l2) {
      var o = new Error(l2[0]);
      o.code = l2[1], o.stack = l2[2], n(o, null);
    } else n(null, u3);
  }, i.postMessage(r3, a2), i;
};
var O = Uint8Array;
var H = Uint16Array;
var Ct = Int32Array;
var At = new O([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var bt = new O([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var qt = new O([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var Rt = function(t, e2) {
  for (var r3 = new H(31), a2 = 0; a2 < 31; ++a2) r3[a2] = e2 += 1 << t[a2 - 1];
  for (var n = new Ct(r3[30]), a2 = 1; a2 < 30; ++a2) for (var i = r3[a2]; i < r3[a2 + 1]; ++i) n[i] = i - r3[a2] << 5 | a2;
  return { b: r3, r: n };
};
var $t = Rt(At, 2);
var It = $t.b;
var _e = $t.r;
It[28] = 258, _e[258] = 28;
var Jt = Rt(bt, 0);
var Ht = Jt.b;
var ut = new H(32768);
for (_ = 0; _ < 32768; ++_) R = (_ & 43690) >> 1 | (_ & 21845) << 1, R = (R & 52428) >> 2 | (R & 13107) << 2, R = (R & 61680) >> 4 | (R & 3855) << 4, ut[_] = ((R & 65280) >> 8 | (R & 255) << 8) >> 1;
var R;
var _;
var K = function(t, e2, r3) {
  for (var a2 = t.length, n = 0, i = new H(e2); n < a2; ++n) t[n] && ++i[t[n] - 1];
  var s2 = new H(e2);
  for (n = 1; n < e2; ++n) s2[n] = s2[n - 1] + i[n - 1] << 1;
  var u3;
  if (r3) {
    u3 = new H(1 << e2);
    var l2 = 15 - e2;
    for (n = 0; n < a2; ++n) if (t[n]) for (var o = n << 4 | t[n], c2 = e2 - t[n], f2 = s2[t[n] - 1]++ << c2, h2 = f2 | (1 << c2) - 1; f2 <= h2; ++f2) u3[ut[f2] >> l2] = o;
  } else for (u3 = new H(a2), n = 0; n < a2; ++n) t[n] && (u3[n] = ut[s2[t[n] - 1]++] >> 15 - t[n]);
  return u3;
};
var tt = new O(288);
for (_ = 0; _ < 144; ++_) tt[_] = 8;
var _;
for (_ = 144; _ < 256; ++_) tt[_] = 9;
var _;
for (_ = 256; _ < 280; ++_) tt[_] = 7;
var _;
for (_ = 280; _ < 288; ++_) tt[_] = 8;
var _;
var Wt = new O(32);
for (_ = 0; _ < 32; ++_) Wt[_] = 5;
var _;
var Gt = K(tt, 9, 1);
var Zt = K(Wt, 5, 1);
var st = function(t) {
  for (var e2 = t[0], r3 = 1; r3 < t.length; ++r3) t[r3] > e2 && (e2 = t[r3]);
  return e2;
};
var N = function(t, e2, r3) {
  var a2 = e2 / 8 | 0;
  return (t[a2] | t[a2 + 1] << 8) >> (e2 & 7) & r3;
};
var ot = function(t, e2) {
  var r3 = e2 / 8 | 0;
  return (t[r3] | t[r3 + 1] << 8 | t[r3 + 2] << 16) >> (e2 & 7);
};
var Kt = function(t) {
  return (t + 7) / 8 | 0;
};
var lt = function(t, e2, r3) {
  return (e2 == null || e2 < 0) && (e2 = 0), (r3 == null || r3 > t.length) && (r3 = t.length), new O(t.subarray(e2, r3));
};
var Yt = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
var E = function(t, e2, r3) {
  var a2 = new Error(e2 || Yt[t]);
  if (a2.code = t, Error.captureStackTrace && Error.captureStackTrace(a2, E), !r3) throw a2;
  return a2;
};
var Xt = function(t, e2, r3, a2) {
  var n = t.length, i = a2 ? a2.length : 0;
  if (!n || e2.f && !e2.l) return r3 || new O(0);
  var s2 = !r3, u3 = s2 || e2.i != 2, l2 = e2.i;
  s2 && (r3 = new O(n * 3));
  var o = function(Ut) {
    var Ft = r3.length;
    if (Ut > Ft) {
      var Bt = new O(Math.max(Ft * 2, Ut));
      Bt.set(r3), r3 = Bt;
    }
  }, c2 = e2.f || 0, f2 = e2.p || 0, h2 = e2.b || 0, p2 = e2.l, m3 = e2.d, d2 = e2.m, y2 = e2.n, v2 = n * 8;
  do {
    if (!p2) {
      c2 = N(t, f2, 1);
      var A = N(t, f2 + 1, 3);
      if (f2 += 3, A) if (A == 1) p2 = Gt, m3 = Zt, d2 = 9, y2 = 5;
      else if (A == 2) {
        var C = N(t, f2, 31) + 257, D = N(t, f2 + 10, 15) + 4, V = C + N(t, f2 + 5, 31) + 1;
        f2 += 14;
        for (var x2 = new O(V), q = new O(19), b2 = 0; b2 < D; ++b2) q[qt[b2]] = N(t, f2 + b2 * 3, 7);
        f2 += D * 3;
        for (var L = st(q), mt = (1 << L) - 1, nt = K(q, L, 1), b2 = 0; b2 < V; ) {
          var U2 = nt[N(t, f2, mt)];
          f2 += U2 & 15;
          var g2 = U2 >> 4;
          if (g2 < 16) x2[b2++] = g2;
          else {
            var T2 = 0, at = 0;
            for (g2 == 16 ? (at = 3 + N(t, f2, 3), f2 += 2, T2 = x2[b2 - 1]) : g2 == 17 ? (at = 3 + N(t, f2, 7), f2 += 3) : g2 == 18 && (at = 11 + N(t, f2, 127), f2 += 7); at--; ) x2[b2++] = T2;
          }
        }
        var Tt = x2.subarray(0, C), $ = x2.subarray(C);
        d2 = st(Tt), y2 = st($), p2 = K(Tt, d2, 1), m3 = K($, y2, 1);
      } else E(1);
      else {
        var g2 = Kt(f2) + 4, M = t[g2 - 4] | t[g2 - 3] << 8, S2 = g2 + M;
        if (S2 > n) {
          l2 && E(0);
          break;
        }
        u3 && o(h2 + M), r3.set(t.subarray(g2, S2), h2), e2.b = h2 += M, e2.p = f2 = S2 * 8, e2.f = c2;
        continue;
      }
      if (f2 > v2) {
        l2 && E(0);
        break;
      }
    }
    u3 && o(h2 + 131072);
    for (var me = (1 << d2) - 1, ve = (1 << y2) - 1, vt = f2; ; vt = f2) {
      var T2 = p2[ot(t, f2) & me], Z = T2 >> 4;
      if (f2 += T2 & 15, f2 > v2) {
        l2 && E(0);
        break;
      }
      if (T2 || E(2), Z < 256) r3[h2++] = Z;
      else if (Z == 256) {
        vt = f2, p2 = null;
        break;
      } else {
        var Nt = Z - 254;
        if (Z > 264) {
          var b2 = Z - 257, Q2 = At[b2];
          Nt = N(t, f2, (1 << Q2) - 1) + It[b2], f2 += Q2;
        }
        var yt = m3[ot(t, f2) & ve], gt = yt >> 4;
        yt || E(3), f2 += yt & 15;
        var $ = Ht[gt];
        if (gt > 3) {
          var Q2 = bt[gt];
          $ += ot(t, f2) & (1 << Q2) - 1, f2 += Q2;
        }
        if (f2 > v2) {
          l2 && E(0);
          break;
        }
        u3 && o(h2 + 131072);
        var jt = h2 + Nt;
        if (h2 < $) {
          var Lt = i - $, ye = Math.min($, jt);
          for (Lt + h2 < 0 && E(3); h2 < ye; ++h2) r3[h2] = a2[Lt + h2];
        }
        for (; h2 < jt; ++h2) r3[h2] = r3[h2 - $];
      }
    }
    e2.l = p2, e2.p = vt, e2.b = h2, e2.f = c2, p2 && (c2 = 1, e2.m = d2, e2.d = m3, e2.n = y2);
  } while (!c2);
  return h2 != r3.length && s2 ? lt(r3, 0, h2) : r3.subarray(0, h2);
};
var we = new O(0);
var Ae = function(t, e2) {
  var r3 = {};
  for (var a2 in t) r3[a2] = t[a2];
  for (var a2 in e2) r3[a2] = e2[a2];
  return r3;
};
var Pt = function(t, e2, r3) {
  for (var a2 = t(), n = t.toString(), i = n.slice(n.indexOf("[") + 1, n.lastIndexOf("]")).replace(/\s+/g, "").split(","), s2 = 0; s2 < a2.length; ++s2) {
    var u3 = a2[s2], l2 = i[s2];
    if (typeof u3 == "function") {
      e2 += ";" + l2 + "=";
      var o = u3.toString();
      if (u3.prototype) if (o.indexOf("[native code]") != -1) {
        var c2 = o.indexOf(" ", 8) + 1;
        e2 += o.slice(c2, o.indexOf("(", c2));
      } else {
        e2 += o;
        for (var f2 in u3.prototype) e2 += ";" + l2 + ".prototype." + f2 + "=" + u3.prototype[f2].toString();
      }
      else e2 += o;
    } else r3[l2] = u3;
  }
  return e2;
};
var it = [];
var be = function(t) {
  var e2 = [];
  for (var r3 in t) t[r3].buffer && e2.push((t[r3] = new t[r3].constructor(t[r3])).buffer);
  return e2;
};
var Ie = function(t, e2, r3, a2) {
  if (!it[r3]) {
    for (var n = "", i = {}, s2 = t.length - 1, u3 = 0; u3 < s2; ++u3) n = Pt(t[u3], n, i);
    it[r3] = { c: Pt(t[s2], n, i), e: i };
  }
  var l2 = Ae({}, it[r3].e);
  return ge(it[r3].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e2.toString() + "}", r3, l2, be(l2), a2);
};
var xe = function() {
  return [O, H, Ct, At, bt, qt, It, Ht, Gt, Zt, ut, Yt, K, st, N, ot, Kt, lt, E, Xt, xt, Qt, te];
};
var Qt = function(t) {
  return postMessage(t, [t.buffer]);
};
var te = function(t) {
  return t && { out: t.size && new O(t.size), dictionary: t.dictionary };
};
var Ee = function(t, e2, r3, a2, n, i) {
  var s2 = Ie(r3, a2, n, function(u3, l2) {
    s2.terminate(), i(u3, l2);
  });
  return s2.postMessage([t, e2], e2.consume ? [t.buffer] : []), function() {
    s2.terminate();
  };
};
var P = function(t, e2) {
  return t[e2] | t[e2 + 1] << 8;
};
var F = function(t, e2) {
  return (t[e2] | t[e2 + 1] << 8 | t[e2 + 2] << 16 | t[e2 + 3] << 24) >>> 0;
};
var _t = function(t, e2) {
  return F(t, e2) + F(t, e2 + 4) * 4294967296;
};
function Oe(t, e2, r3) {
  return r3 || (r3 = e2, e2 = {}), typeof r3 != "function" && E(7), Ee(t, e2, [xe], function(a2) {
    return Qt(xt(a2.data[0], te(a2.data[1])));
  }, 1, r3);
}
function xt(t, e2) {
  return Xt(t, { i: 2 }, e2 && e2.out, e2 && e2.dictionary);
}
var wt = typeof TextDecoder < "u" && new TextDecoder();
var ze = 0;
try {
  wt.decode(we, { stream: true }), ze = 1;
} catch {
}
var Se = function(t) {
  for (var e2 = "", r3 = 0; ; ) {
    var a2 = t[r3++], n = (a2 > 127) + (a2 > 223) + (a2 > 239);
    if (r3 + n > t.length) return { s: e2, r: lt(t, r3 - 1) };
    n ? n == 3 ? (a2 = ((a2 & 15) << 18 | (t[r3++] & 63) << 12 | (t[r3++] & 63) << 6 | t[r3++] & 63) - 65536, e2 += String.fromCharCode(55296 | a2 >> 10, 56320 | a2 & 1023)) : n & 1 ? e2 += String.fromCharCode((a2 & 31) << 6 | t[r3++] & 63) : e2 += String.fromCharCode((a2 & 15) << 12 | (t[r3++] & 63) << 6 | t[r3++] & 63) : e2 += String.fromCharCode(a2);
  }
};
function W(t, e2) {
  if (e2) {
    for (var r3 = "", a2 = 0; a2 < t.length; a2 += 16384) r3 += String.fromCharCode.apply(null, t.subarray(a2, a2 + 16384));
    return r3;
  } else {
    if (wt) return wt.decode(t);
    var n = Se(t), i = n.s, r3 = n.r;
    return r3.length && E(8), i;
  }
}
var Me = function(t, e2) {
  return e2 + 30 + P(t, e2 + 26) + P(t, e2 + 28);
};
var De = function(t, e2, r3) {
  var a2 = P(t, e2 + 28), n = W(t.subarray(e2 + 46, e2 + 46 + a2), !(P(t, e2 + 8) & 2048)), i = e2 + 46 + a2, s2 = F(t, e2 + 20), u3 = r3 && s2 == 4294967295 ? Te(t, i) : [s2, F(t, e2 + 24), F(t, e2 + 42)], l2 = u3[0], o = u3[1], c2 = u3[2];
  return [P(t, e2 + 10), l2, o, n, i + P(t, e2 + 30) + P(t, e2 + 32), c2];
};
var Te = function(t, e2) {
  for (; P(t, e2) != 1; e2 += 4 + P(t, e2 + 2)) ;
  return [_t(t, e2 + 12), _t(t, e2 + 4), _t(t, e2 + 20)];
};
var kt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(t) {
  t();
};
function ee(t, e2, r3) {
  r3 || (r3 = e2, e2 = {}), typeof r3 != "function" && E(7);
  var a2 = [], n = function() {
    for (var y2 = 0; y2 < a2.length; ++y2) a2[y2]();
  }, i = {}, s2 = function(y2, v2) {
    kt(function() {
      r3(y2, v2);
    });
  };
  kt(function() {
    s2 = r3;
  });
  for (var u3 = t.length - 22; F(t, u3) != 101010256; --u3) if (!u3 || t.length - u3 > 65558) return s2(E(13, 0, 1), null), n;
  var l2 = P(t, u3 + 8);
  if (l2) {
    var o = l2, c2 = F(t, u3 + 16), f2 = c2 == 4294967295 || o == 65535;
    if (f2) {
      var h2 = F(t, u3 - 12);
      f2 = F(t, h2) == 101075792, f2 && (o = l2 = F(t, h2 + 32), c2 = F(t, h2 + 48));
    }
    for (var p2 = e2 && e2.filter, m3 = function(y2) {
      var v2 = De(t, c2, f2), A = v2[0], g2 = v2[1], M = v2[2], S2 = v2[3], C = v2[4], D = v2[5], V = Me(t, D);
      c2 = C;
      var x2 = function(b2, L) {
        b2 ? (n(), s2(b2, null)) : (L && (i[S2] = L), --l2 || s2(null, i));
      };
      if (!p2 || p2({ name: S2, size: g2, originalSize: M, compression: A })) if (!A) x2(null, lt(t, V, V + g2));
      else if (A == 8) {
        var q = t.subarray(V, V + g2);
        if (g2 < 32e4) try {
          x2(null, xt(q, { out: new O(M) }));
        } catch (b2) {
          x2(b2, null);
        }
        else a2.push(Oe(q, { size: M }, x2));
      } else x2(E(14, "unknown compression type " + A, 1), null);
      else x2(null, null);
    }, d2 = 0; d2 < o; ++d2) m3(d2);
  } else s2(null, {});
  return n;
}
function re(t) {
  return (Array.isArray(t) ? t : t.issues).reduce((e2, r3) => {
    if (r3.path) {
      let a2 = r3.path.map(({ key: n }) => n).join(".");
      e2.nested[a2] = [...e2.nested[a2] || [], r3.message];
    } else e2.root = [...e2.root || [], r3.message];
    return e2;
  }, { nested: {} });
}
var Ne = class extends Error {
  constructor(t) {
    super(t[0].message);
    __publicField(this, "issues");
    this.name = "ValiError", this.issues = t;
  }
};
function je(t, e2) {
  return { reason: t == null ? void 0 : t.reason, validation: e2.validation, origin: (t == null ? void 0 : t.origin) || "value", message: e2.message, input: e2.input, abortEarly: t == null ? void 0 : t.abortEarly, abortPipeEarly: t == null ? void 0 : t.abortPipeEarly };
}
function Le(t, e2) {
  return { reason: e2, origin: t == null ? void 0 : t.origin, abortEarly: t == null ? void 0 : t.abortEarly, abortPipeEarly: t == null ? void 0 : t.abortPipeEarly };
}
function J(t, e2, r3, a2) {
  if (!e2 || !e2.length) return { output: t };
  let n, i, s2 = t;
  for (let u3 of e2) {
    let l2 = u3(s2);
    if (l2.issue) {
      n = n || Le(r3, a2);
      let o = je(n, l2.issue);
      if (i ? i.push(o) : i = [o], n.abortEarly || n.abortPipeEarly) break;
    } else s2 = l2.output;
  }
  return i ? { issues: i } : { output: s2 };
}
function B(t, e2) {
  return !t || typeof t == "string" ? [t, e2] : [void 0, t];
}
function k(t, e2, r3, a2, n, i) {
  return { issues: [{ reason: e2, validation: r3, origin: (t == null ? void 0 : t.origin) || "value", message: a2, input: n, issues: i, abortEarly: t == null ? void 0 : t.abortEarly, abortPipeEarly: t == null ? void 0 : t.abortPipeEarly }] };
}
function ne(t = []) {
  return { schema: "any", async: false, _parse(e2, r3) {
    return J(e2, t, r3, "any");
  } };
}
function Y(t, e2, r3) {
  let [a2, n] = B(e2, r3);
  return { schema: "array", array: { item: t }, async: false, _parse(i, s2) {
    if (!Array.isArray(i)) return k(s2, "type", "array", a2 || "Invalid type", i);
    let u3, l2 = [];
    for (let o = 0; o < i.length; o++) {
      let c2 = i[o], f2 = t._parse(c2, s2);
      if (f2.issues) {
        let h2 = { schema: "array", input: i, key: o, value: c2 };
        for (let p2 of f2.issues) p2.path ? p2.path.unshift(h2) : p2.path = [h2], u3 == null || u3.push(p2);
        if (u3 || (u3 = f2.issues), s2 != null && s2.abortEarly) break;
      } else l2.push(f2.output);
    }
    return u3 ? { issues: u3 } : J(l2, n, s2, "array");
  } };
}
function ct(t, e2) {
  let [r3, a2] = B(t, e2);
  return { schema: "boolean", async: false, _parse(n, i) {
    return typeof n != "boolean" ? k(i, "type", "boolean", r3 || "Invalid type", n) : J(n, a2, i, "boolean");
  } };
}
function Et(t, e2) {
  return { schema: "literal", literal: t, async: false, _parse(r3, a2) {
    return r3 !== t ? k(a2, "type", "literal", e2 || "Invalid type", r3) : { output: r3 };
  } };
}
function ae(t, e2) {
  return { schema: "native_enum", nativeEnum: t, async: false, _parse(r3, a2) {
    return Object.values(t).includes(r3) ? { output: r3 } : k(a2, "type", "native_enum", e2 || "Invalid type", r3);
  } };
}
function j(t, e2) {
  let [r3, a2] = B(t, e2);
  return { schema: "number", async: false, _parse(n, i) {
    return typeof n != "number" ? k(i, "type", "number", r3 || "Invalid type", n) : J(n, a2, i, "number");
  } };
}
function z(t, e2, r3) {
  let [a2, n] = B(e2, r3), i;
  return { schema: "object", object: t, async: false, _parse(s2, u3) {
    if (!s2 || typeof s2 != "object") return k(u3, "type", "object", a2 || "Invalid type", s2);
    i = i || Object.entries(t);
    let l2, o = {};
    for (let [c2, f2] of i) {
      let h2 = s2[c2], p2 = f2._parse(h2, u3);
      if (p2.issues) {
        let m3 = { schema: "object", input: s2, key: c2, value: h2 };
        for (let d2 of p2.issues) d2.path ? d2.path.unshift(m3) : d2.path = [m3], l2 == null || l2.push(d2);
        if (l2 || (l2 = p2.issues), u3 != null && u3.abortEarly) break;
      } else o[c2] = p2.output;
    }
    return l2 ? { issues: l2 } : J(o, n, u3, "object");
  } };
}
function w(t) {
  return { schema: "optional", wrapped: t, async: false, _parse(e2, r3) {
    return e2 === void 0 ? { output: e2 } : t._parse(e2, r3);
  } };
}
function I(t, e2) {
  let [r3, a2] = B(t, e2);
  return { schema: "string", async: false, _parse(n, i) {
    return typeof n != "string" ? k(i, "type", "string", r3 || "Invalid type", n) : J(n, a2, i, "string");
  } };
}
function Ue(t, e2, r3, a2) {
  if (typeof e2 == "object" && !Array.isArray(e2)) {
    let [s2, u3] = B(r3, a2);
    return [t, e2, s2, u3];
  }
  let [n, i] = B(e2, r3);
  return [I(), t, n, i];
}
var Fe = ["__proto__", "prototype", "constructor"];
function Ot(t, e2, r3, a2) {
  let [n, i, s2, u3] = Ue(t, e2, r3, a2);
  return { schema: "record", record: { key: n, value: i }, async: false, _parse(l2, o) {
    if (!l2 || typeof l2 != "object") return k(o, "type", "record", s2 || "Invalid type", l2);
    let c2, f2 = {};
    for (let [h2, p2] of Object.entries(l2)) if (!Fe.includes(h2)) {
      let m3, d2 = n._parse(h2, { origin: "key", abortEarly: o == null ? void 0 : o.abortEarly, abortPipeEarly: o == null ? void 0 : o.abortPipeEarly });
      if (d2.issues) {
        m3 = { schema: "record", input: l2, key: h2, value: p2 };
        for (let v2 of d2.issues) v2.path = [m3], c2 == null || c2.push(v2);
        if (c2 || (c2 = d2.issues), o != null && o.abortEarly) break;
      }
      let y2 = i._parse(p2, o);
      if (y2.issues) {
        m3 = m3 || { schema: "record", input: l2, key: h2, value: p2 };
        for (let v2 of y2.issues) v2.path ? v2.path.unshift(m3) : v2.path = [m3], c2 == null || c2.push(v2);
        if (c2 || (c2 = y2.issues), o != null && o.abortEarly) break;
      }
      !d2.issues && !y2.issues && (f2[d2.output] = y2.output);
    }
    return c2 ? { issues: c2 } : J(f2, u3, o, "record");
  } };
}
function Be(t, e2, r3) {
  if (typeof t == "object" && !Array.isArray(t)) {
    let [i, s2] = B(e2, r3);
    return [t, i, s2];
  }
  let [a2, n] = B(t, e2);
  return [void 0, a2, n];
}
function zt(t, e2, r3, a2) {
  let [n, i, s2] = Be(e2, r3, a2);
  return { schema: "tuple", tuple: { items: t, rest: n }, async: false, _parse(u3, l2) {
    if (!Array.isArray(u3) || !n && t.length !== u3.length || n && t.length > u3.length) return k(l2, "type", "tuple", i || "Invalid type", u3);
    let o, c2 = [];
    for (let f2 = 0; f2 < t.length; f2++) {
      let h2 = u3[f2], p2 = t[f2]._parse(h2, l2);
      if (p2.issues) {
        let m3 = { schema: "tuple", input: u3, key: f2, value: h2 };
        for (let d2 of p2.issues) d2.path ? d2.path.unshift(m3) : d2.path = [m3], o == null || o.push(d2);
        if (o || (o = p2.issues), l2 != null && l2.abortEarly) break;
      } else c2[f2] = p2.output;
    }
    if (n) for (let f2 = t.length; f2 < u3.length; f2++) {
      let h2 = u3[f2], p2 = n._parse(h2, l2);
      if (p2.issues) {
        let m3 = { schema: "tuple", input: u3, key: f2, value: h2 };
        for (let d2 of p2.issues) d2.path ? d2.path.unshift(m3) : d2.path = [m3], o == null || o.push(d2);
        if (o || (o = p2.issues), l2 != null && l2.abortEarly) break;
      } else c2[f2] = p2.output;
    }
    return o ? { issues: o } : J(c2, s2, l2, "tuple");
  } };
}
function ft(t, e2) {
  return { schema: "union", union: t, async: false, _parse(r3, a2) {
    let n, i;
    for (let s2 of t) {
      let u3 = s2._parse(r3, a2);
      if (u3.issues) if (n) for (let l2 of u3.issues) n.push(l2);
      else n = u3.issues;
      else {
        i = [u3.output];
        break;
      }
    }
    return i ? { output: i[0] } : k(a2, "type", "union", e2 || "Invalid type", r3, n);
  } };
}
function X(t, e2, r3) {
  let [a2, n] = B(e2, r3);
  return z(t.reduce((i, s2) => ({ ...i, ...s2.object }), {}), a2, n);
}
function ie(t, e2, r3, a2) {
  let [n, i] = B(r3, a2);
  return z(Object.entries(t.object).reduce((s2, [u3, l2]) => e2.includes(u3) ? s2 : { ...s2, [u3]: l2 }, {}), n, i);
}
function se(t, e2, r3) {
  let a2 = t._parse(e2, r3);
  return a2.issues ? { success: false, error: new Ne(a2.issues), issues: a2.issues } : { success: true, data: a2.output, output: a2.output };
}
function ht(t, e2) {
  return (r3) => r3 > t ? { issue: { validation: "max_value", message: e2 || "Invalid value", input: r3 } } : { output: r3 };
}
function dt(t, e2) {
  return (r3) => r3 < t ? { issue: { validation: "min_value", message: e2 || "Invalid value", input: r3 } } : { output: r3 };
}
var Ve = Object.create;
var St = Object.defineProperty;
var Pe = Object.getOwnPropertyDescriptor;
var fe = Object.getOwnPropertyNames;
var ke = Object.getPrototypeOf;
var Ce = Object.prototype.hasOwnProperty;
var qe = (t, e2, r3) => e2 in t ? St(t, e2, { enumerable: true, configurable: true, writable: true, value: r3 }) : t[e2] = r3;
var et = (t, e2) => function() {
  return e2 || (0, t[fe(t)[0]])((e2 = { exports: {} }).exports, e2), e2.exports;
};
var Re = (t, e2, r3, a2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let n of fe(e2)) !Ce.call(t, n) && n !== r3 && St(t, n, { get: () => e2[n], enumerable: !(a2 = Pe(e2, n)) || a2.enumerable });
  return t;
};
var $e = (t, e2, r3) => (r3 = t != null ? Ve(ke(t)) : {}, Re(e2 || !t || !t.__esModule ? St(r3, "default", { value: t, enumerable: true }) : r3, t));
var Je = (t, e2, r3) => (qe(t, typeof e2 != "symbol" ? e2 + "" : e2, r3), r3);
var He = et({ "../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t) {
  Object.defineProperty(t, "__esModule", { value: true }), t.copy = void 0;
  var e2 = (r3, a2, n = 0, i = 0, s2 = r3.width - n, u3 = r3.height - i, l2 = 0, o = 0) => {
    if (n = n | 0, i = i | 0, s2 = s2 | 0, u3 = u3 | 0, l2 = l2 | 0, o = o | 0, s2 <= 0 || u3 <= 0) return;
    let c2 = new Uint32Array(r3.data.buffer), f2 = new Uint32Array(a2.data.buffer);
    for (let h2 = 0; h2 < u3; h2++) {
      let p2 = i + h2;
      if (p2 < 0 || p2 >= r3.height) continue;
      let m3 = o + h2;
      if (!(m3 < 0 || m3 >= a2.height)) for (let d2 = 0; d2 < s2; d2++) {
        let y2 = n + d2;
        if (y2 < 0 || y2 >= r3.width) continue;
        let v2 = l2 + d2;
        if (v2 < 0 || v2 >= a2.width) continue;
        let A = p2 * r3.width + y2, g2 = m3 * a2.width + v2;
        f2[g2] = c2[A];
      }
    }
  };
  t.copy = e2;
} });
var We = et({ "../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t) {
  Object.defineProperty(t, "__esModule", { value: true }), t.CreateImageFactory = (e2 = [0, 0, 0, 0], r3 = 4) => {
    if (r3 = Math.floor(r3), isNaN(r3) || r3 < 1) throw TypeError("channels should be a positive non-zero number");
    if (!("length" in e2) || e2.length < r3) throw TypeError(`fill should be iterable with at least ${r3} members`);
    e2 = new Uint8ClampedArray(e2).slice(0, r3);
    let a2 = e2.every((i) => i === 0);
    return (i, s2, u3) => {
      if (i === void 0 || s2 === void 0) throw TypeError("Not enough arguments");
      if (i = Math.floor(i), s2 = Math.floor(s2), isNaN(i) || i < 1 || isNaN(s2) || s2 < 1) throw TypeError("Index or size is negative or greater than the allowed amount");
      let l2 = i * s2 * r3;
      if (u3 === void 0 && (u3 = new Uint8ClampedArray(l2)), u3 instanceof Uint8ClampedArray) {
        if (u3.length !== l2) throw TypeError("Index or size is negative or greater than the allowed amount");
        if (!a2) for (let o = 0; o < s2; o++) for (let c2 = 0; c2 < i; c2++) {
          let f2 = (o * i + c2) * r3;
          for (let h2 = 0; h2 < r3; h2++) u3[f2 + h2] = e2[h2];
        }
        return { get width() {
          return i;
        }, get height() {
          return s2;
        }, get data() {
          return u3;
        } };
      }
      throw TypeError("Expected data to be Uint8ClampedArray or undefined");
    };
  }, t.createImage = t.CreateImageFactory();
} });
var Ge = et({ "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t) {
  Object.defineProperty(t, "__esModule", { value: true }), t.filters = void 0;
  var e2 = 14, r3 = (i, s2) => {
    if (i <= -s2 || i >= s2 || i == 0) return 0;
    let u3 = i * Math.PI;
    return Math.sin(u3) / u3 * Math.sin(u3 / s2) / (u3 / s2);
  }, a2 = (i) => Math.round(i * ((1 << e2) - 1)), n = (i, s2, u3, l2, o) => {
    let c2 = o ? 2 : 3, f2 = 1 / u3, h2 = Math.min(1, u3), p2 = c2 / h2, m3 = Math.floor((p2 + 1) * 2), d2 = new Int16Array((m3 + 2) * s2), y2 = 0;
    for (let v2 = 0; v2 < s2; v2++) {
      let A = (v2 + 0.5) * f2 + l2, g2 = Math.max(0, Math.floor(A - p2)), M = Math.min(i - 1, Math.ceil(A + p2)), S2 = M - g2 + 1, C = new Float32Array(S2), D = new Int16Array(S2), V = 0, x2 = 0;
      for (let U2 = g2; U2 <= M; U2++) {
        let T2 = r3((U2 + 0.5 - A) * h2, c2);
        V += T2, C[x2] = T2, x2++;
      }
      let q = 0;
      for (let U2 = 0; U2 < C.length; U2++) {
        let T2 = C[U2] / V;
        q += T2, D[U2] = a2(T2);
      }
      D[s2 >> 1] += a2(1 - q);
      let b2 = 0;
      for (; b2 < D.length && D[b2] === 0; ) b2++;
      let L = D.length - 1;
      for (; L > 0 && D[L] === 0; ) L--;
      let mt = g2 + b2, nt = L - b2 + 1;
      d2[y2++] = mt, d2[y2++] = nt, d2.set(D.subarray(b2, L + 1), y2), y2 += nt;
    }
    return d2;
  };
  t.filters = n;
} });
var Ze = et({ "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t) {
  Object.defineProperty(t, "__esModule", { value: true }), t.convolve = void 0;
  var e2 = 14, r3 = (a2, n, i, s2, u3, l2) => {
    let o = 0, c2 = 0;
    for (let f2 = 0; f2 < s2; f2++) {
      let h2 = 0;
      for (let p2 = 0; p2 < u3; p2++) {
        let m3 = l2[h2++], d2 = o + m3 * 4 | 0, y2 = 0, v2 = 0, A = 0, g2 = 0;
        for (let M = l2[h2++]; M > 0; M--) {
          let S2 = l2[h2++];
          y2 = y2 + S2 * a2[d2] | 0, v2 = v2 + S2 * a2[d2 + 1] | 0, A = A + S2 * a2[d2 + 2] | 0, g2 = g2 + S2 * a2[d2 + 3] | 0, d2 = d2 + 4 | 0;
        }
        n[c2] = y2 + 8192 >> e2, n[c2 + 1] = v2 + 8192 >> e2, n[c2 + 2] = A + 8192 >> e2, n[c2 + 3] = g2 + 8192 >> e2, c2 = c2 + s2 * 4 | 0;
      }
      c2 = (f2 + 1) * 4 | 0, o = (f2 + 1) * i * 4 | 0;
    }
  };
  t.convolve = r3;
} });
var Ke = et({ "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t) {
  Object.defineProperty(t, "__esModule", { value: true }), t.lanczos2 = t.lanczos = void 0;
  var e2 = He(), r3 = We(), a2 = Ge(), n = Ze(), i = (l2, o, c2 = false) => {
    let f2 = o.width / l2.width, h2 = o.height / l2.height, p2 = a2.filters(l2.width, o.width, f2, 0, c2), m3 = a2.filters(l2.height, o.height, h2, 0, c2), d2 = new Uint8ClampedArray(o.width * l2.height * 4);
    n.convolve(l2.data, d2, l2.width, l2.height, o.width, p2), n.convolve(d2, o.data, l2.height, o.width, o.height, m3);
  }, s2 = (l2, o, c2 = 0, f2 = 0, h2 = l2.width - c2, p2 = l2.height - f2, m3 = 0, d2 = 0, y2 = o.width - m3, v2 = o.height - d2) => {
    if (c2 = c2 | 0, f2 = f2 | 0, h2 = h2 | 0, p2 = p2 | 0, m3 = m3 | 0, d2 = d2 | 0, y2 = y2 | 0, v2 = v2 | 0, h2 <= 0 || p2 <= 0 || y2 <= 0 || v2 <= 0) return;
    if (c2 === 0 && f2 === 0 && h2 === l2.width && p2 === l2.height && m3 === 0 && d2 === 0 && y2 === o.width && v2 === o.height) {
      i(l2, o);
      return;
    }
    let A = r3.createImage(h2, p2), g2 = r3.createImage(y2, v2);
    e2.copy(l2, A, c2, f2), i(A, g2), e2.copy(g2, o, 0, 0, g2.width, g2.height, m3, d2);
  };
  t.lanczos = s2;
  var u3 = (l2, o, c2 = 0, f2 = 0, h2 = l2.width - c2, p2 = l2.height - f2, m3 = 0, d2 = 0, y2 = o.width - m3, v2 = o.height - d2) => {
    if (c2 = c2 | 0, f2 = f2 | 0, h2 = h2 | 0, p2 = p2 | 0, m3 = m3 | 0, d2 = d2 | 0, y2 = y2 | 0, v2 = v2 | 0, h2 <= 0 || p2 <= 0 || y2 <= 0 || v2 <= 0) return;
    if (c2 === 0 && f2 === 0 && h2 === l2.width && p2 === l2.height && m3 === 0 && d2 === 0 && y2 === o.width && v2 === o.height) {
      i(l2, o, true);
      return;
    }
    let A = r3.createImage(h2, p2), g2 = r3.createImage(y2, v2);
    e2.copy(l2, A, c2, f2), i(A, g2, true), e2.copy(g2, o, 0, 0, g2.width, g2.height, m3, d2);
  };
  t.lanczos2 = u3;
} });
var he = ((t) => (t.Bounce = "bounce", t.Normal = "normal", t))(he || {});
var Ye = ae(he);
var de = z({ autoplay: w(ct()), defaultTheme: w(I()), direction: w(ft([Et(1), Et(-1)])), hover: w(ct()), id: I(), intermission: w(j()), loop: w(ft([ct(), j()])), playMode: w(Ye), speed: w(j()), themeColor: w(I()) });
var Xe = z({ animations: Y(I()), id: I() });
var Qe = z({ activeAnimationId: w(I()), animations: Y(de), author: w(I()), custom: w(Ot(I(), ne())), description: w(I()), generator: w(I()), keywords: w(I()), revision: w(j()), themes: w(Y(Xe)), states: w(Y(I())), version: w(I()) });
var tr = ie(de, ["id"]);
var G = z({ state: I() });
var er = G;
var rr = X([G, z({ ms: j() })]);
var nr = X([G, z({ count: j() })]);
var ar = G;
var ir = G;
var sr = G;
var or = X([G, z({ threshold: w(Y(j([dt(0), ht(1)]))) })]);
var ur = z({ onAfter: w(rr), onClick: w(er), onComplete: w(sr), onEnter: w(nr), onMouseEnter: w(ar), onMouseLeave: w(ir), onShow: w(or) });
var lr = X([tr, z({ playOnScroll: w(zt([j([dt(0), ht(1)]), j([dt(0), ht(1)])])), segments: w(ft([zt([j(), j()]), I()])) })]);
X([ur, z({ animationId: w(I()), playbackSettings: lr })]);
var dr = { jpeg: "image/jpeg", png: "image/png", gif: "image/gif", bmp: "image/bmp", svg: "image/svg+xml", webp: "image/webp", mpeg: "audio/mpeg", mp3: "audio/mp3" };
var oe = { jpeg: [255, 216, 255], png: [137, 80, 78, 71, 13, 10, 26, 10], gif: [71, 73, 70], bmp: [66, 77], webp: [82, 73, 70, 70, 87, 69, 66, 80], svg: [60, 63, 120], mp3: [73, 68, 51, 3, 0, 0, 0, 0], mpeg: [73, 68, 51, 3, 0, 0, 0, 0] };
var pr = (t) => {
  let e2 = null, r3 = [];
  if (!t) return null;
  let a2 = t.substring(t.indexOf(",") + 1);
  typeof window > "u" ? e2 = Buffer.from(a2, "base64").toString("binary") : e2 = atob(a2);
  let n = new Uint8Array(e2.length);
  for (let i = 0; i < e2.length; i += 1) n[i] = e2.charCodeAt(i);
  r3 = Array.from(n.subarray(0, 8));
  for (let i in oe) {
    let s2 = oe[i];
    if (s2 && r3.every((u3, l2) => u3 === s2[l2])) return dr[i];
  }
  return null;
};
var Mt = class extends Error {
  constructor(t, e2) {
    super(t), Je(this, "code"), this.name = "[dotlottie-js]", this.code = e2;
  }
};
function pe(t) {
  let e2;
  if (typeof window > "u") e2 = Buffer.from(t).toString("base64");
  else {
    let a2 = Array.prototype.map.call(t, (n) => String.fromCharCode(n)).join("");
    e2 = window.btoa(a2);
  }
  return `data:${pr(e2)};base64,${e2}`;
}
function ue(t) {
  return "w" in t && "h" in t && !("xt" in t) && "p" in t;
}
function pt(t) {
  return !("h" in t) && !("w" in t) && "p" in t && "e" in t && "u" in t && "id" in t;
}
async function rt(t, e2 = () => true) {
  if (!(t instanceof Uint8Array)) throw new Mt("DotLottie not found", "INVALID_DOTLOTTIE");
  return await new Promise((a2, n) => {
    ee(t, { filter: e2 }, (i, s2) => {
      i && n(i), a2(s2);
    });
  });
}
async function Dt(t, e2, r3) {
  if (!(t instanceof Uint8Array)) throw new Mt("DotLottie not found", "INVALID_DOTLOTTIE");
  return (await rt(t, (n) => n.name === e2 && (!r3 || r3(n))))[e2];
}
async function mr(t) {
  let e2 = "manifest.json", a2 = (await rt(t, (n) => n.name === e2))[e2];
  if (!(typeof a2 > "u")) return JSON.parse(W(a2, false));
}
async function vr(t) {
  if (!(t instanceof Uint8Array)) return { success: false, error: "DotLottie not found" };
  let e2 = await mr(t);
  if (typeof e2 > "u") return { success: false, error: "Invalid .lottie file, manifest.json is missing" };
  let r3 = se(Qe, e2);
  return r3.success ? { success: true } : { success: false, error: `Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(re(r3.error).nested, null, 2)}` };
}
async function Yr(t) {
  let e2 = new Uint8Array(t), r3 = await vr(e2);
  if (r3.error) throw new Mt(r3.error, "INVALID_DOTLOTTIE");
  return e2;
}
async function yr(t, e2) {
  let r3 = await rt(t, (n) => {
    let i = n.name.replace("audio/", "");
    return n.name.startsWith("audio/") && (!e2 || e2({ ...n, name: i }));
  }), a2 = {};
  for (let n in r3) {
    let i = r3[n];
    if (i instanceof Uint8Array) {
      let s2 = n.replace("audio/", "");
      a2[s2] = pe(i);
    }
  }
  return a2;
}
async function gr(t, e2) {
  var n;
  let r3 = /* @__PURE__ */ new Map();
  for (let [i, s2] of Object.entries(e2)) for (let u3 of s2.assets || []) if (pt(u3)) {
    let l2 = u3.p;
    r3.has(l2) || r3.set(l2, /* @__PURE__ */ new Set()), (n = r3.get(l2)) == null || n.add(i);
  }
  let a2 = await yr(t, (i) => r3.has(i.name));
  for (let [i, s2] of r3) {
    let u3 = a2[i];
    if (u3) for (let l2 of s2) {
      let o = e2[l2];
      for (let c2 of (o == null ? void 0 : o.assets) || []) pt(c2) && c2.p === i && (c2.p = u3, c2.u = "", c2.e = 1);
    }
  }
}
async function _r(t, e2) {
  let r3 = await rt(t, (n) => {
    let i = n.name.replace("images/", "");
    return n.name.startsWith("images/") && (!e2 || e2({ ...n, name: i }));
  }), a2 = {};
  for (let n in r3) {
    let i = r3[n];
    if (i instanceof Uint8Array) {
      let s2 = n.replace("images/", "");
      a2[s2] = pe(i);
    }
  }
  return a2;
}
async function wr(t, e2) {
  var n;
  let r3 = /* @__PURE__ */ new Map();
  for (let [i, s2] of Object.entries(e2)) for (let u3 of s2.assets || []) if (ue(u3)) {
    let l2 = u3.p;
    r3.has(l2) || r3.set(l2, /* @__PURE__ */ new Set()), (n = r3.get(l2)) == null || n.add(i);
  }
  let a2 = await _r(t, (i) => r3.has(i.name));
  for (let [i, s2] of r3) {
    let u3 = a2[i];
    if (u3) for (let l2 of s2) {
      let o = e2[l2];
      for (let c2 of (o == null ? void 0 : o.assets) || []) ue(c2) && c2.p === i && (c2.p = u3, c2.u = "", c2.e = 1);
    }
  }
}
async function Xr(t, e2, { inlineAssets: r3 } = {}, a2) {
  let n = `animations/${e2}.json`, i = await Dt(t, n, a2);
  if (typeof i > "u") return;
  let s2 = JSON.parse(W(i, false));
  if (!r3) return s2;
  let u3 = { [e2]: s2 };
  return await wr(t, u3), await gr(t, u3), s2;
}
async function Qr(t, e2, r3) {
  let a2 = `themes/${e2}.json`, n = await Dt(t, a2, r3);
  if (!(typeof n > "u")) return JSON.parse(W(n, false));
}
async function tn(t, e2) {
  let r3 = {}, a2 = await rt(t, (n) => {
    let i = n.name.replace("states/", "").replace(".json", "");
    return n.name.startsWith("states/") && (!e2 || e2({ ...n, name: i }));
  });
  for (let n in a2) {
    let i = a2[n];
    if (i instanceof Uint8Array) {
      let s2 = n.replace("states/", "").replace(".json", "");
      r3[s2] = W(i, false);
    }
  }
  return r3;
}
async function en(t, e2, r3) {
  let a2 = `states/${e2}.json`, n = await Dt(t, a2, r3);
  return typeof n > "u" ? void 0 : JSON.parse(W(n, false));
}
$e(Ke());
function on(t, e2 = "dotLottie-common") {
  return new Error(`[${e2}]: ${t}`);
}
function un(t, e2 = "dotLottie-common", ...r3) {
  console.error(`[${e2}]:`, t, ...r3);
}
function ln(t, e2 = "dotLottie-common", ...r3) {
  console.warn(`[${e2}]:`, t, ...r3);
}
function cn(t = "") {
  let e2 = t.trim(), r3 = e2.lastIndexOf("/"), a2 = e2.substring(r3 + 1), n = a2.indexOf(".");
  return n !== -1 ? a2.substring(0, n) : a2;
}
function kr(t) {
  return ["v", "ip", "op", "layers", "fr", "w", "h"].every((r3) => Object.prototype.hasOwnProperty.call(t, r3));
}
function fn(t) {
  let e2 = t.assets;
  return e2 ? e2.some((r3) => pt(r3)) : false;
}
function hn(t) {
  try {
    let e2 = JSON.parse(t);
    return kr(e2);
  } catch {
    return false;
  }
}
function dn(t, e2) {
  let r3 = Object.keys(t).find((a2) => t[a2] === e2);
  if (r3 === void 0) throw new Error("Value not found in the object.");
  return r3;
}
function pn(t) {
  return JSON.parse(JSON.stringify(t));
}

// node_modules/@dotlottie/common/dist/chunk-74T7T5LL.js
var m = class {
  constructor() {
    __publicField(this, "_dotLottie");
    __publicField(this, "_animationsMap", /* @__PURE__ */ new Map());
    __publicField(this, "_themeMap", /* @__PURE__ */ new Map());
    __publicField(this, "_stateMachinesMap", /* @__PURE__ */ new Map());
    __publicField(this, "_manifest");
  }
  get dotLottie() {
    return this._dotLottie;
  }
  get animationsMap() {
    return this._animationsMap;
  }
  get themeMap() {
    return this._themeMap;
  }
  get stateMachinesMap() {
    return this._stateMachinesMap;
  }
  get manifest() {
    return this._manifest;
  }
  async loadFromUrl(i) {
    let t = await fetch(i, { method: "GET", mode: "cors" });
    if (!t.ok) throw new Error(`Failed to load dotLottie from ${i} with status ${t.status}`);
    let a2 = t.headers.get("content-type");
    if (a2 != null && a2.includes("application/json")) {
      let e2 = await t.json();
      if (!kr(e2)) throw new Error(`Invalid lottie JSON at ${i}`);
      let n = cn(i);
      this._animationsMap.set(n, e2);
      let p2 = { activeAnimationId: n, animations: [{ id: n }] };
      this._manifest = p2;
    } else {
      this._dotLottie = await Yr(await t.arrayBuffer());
      let e2 = await mr(this._dotLottie);
      if (!e2) throw new Error("Manifest not found");
      this._manifest = e2;
    }
  }
  loadFromLottieJSON(i) {
    if (!kr(i)) throw new Error("Invalid lottie JSON");
    let t = "my-animation";
    this._animationsMap.set(t, i);
    let a2 = { activeAnimationId: t, animations: [{ id: t }] };
    this._manifest = a2;
  }
  async loadFromArrayBuffer(i) {
    this._dotLottie = await Yr(i);
    let t = await mr(this._dotLottie);
    if (!t) throw new Error("Manifest not found");
    this._manifest = t;
  }
  async getAnimation(i) {
    if (this._animationsMap.get(i)) return this._animationsMap.get(i);
    if (!this._dotLottie) return;
    let t = await Xr(this._dotLottie, i, { inlineAssets: true });
    return t && this._animationsMap.set(i, t), t;
  }
  async getTheme(i) {
    if (this._themeMap.get(i)) return this._themeMap.get(i);
    if (!this._dotLottie) return;
    let t = await Qr(this._dotLottie, i);
    return t && this._themeMap.set(i, t), t;
  }
  async getStateMachines() {
    if (!this._dotLottie) return;
    let i = await tn(this._dotLottie);
    for (let t in i) if (t) {
      let a2 = i[t];
      if (a2) {
        let e2 = JSON.parse(a2);
        if (e2) {
          let n = e2.descriptor.id;
          this._stateMachinesMap.get(n) || this._stateMachinesMap.set(n, e2);
        }
      }
    }
    return Array.from(this._stateMachinesMap.values());
  }
  async getStateMachine(i) {
    if (this._stateMachinesMap.get(i)) return this._stateMachinesMap.get(i);
    if (!this._dotLottie) return;
    let t = await en(this._dotLottie, i);
    return t && this._stateMachinesMap.set(t.descriptor.id, t), t;
  }
};

// node_modules/@dotlottie/common/dist/chunk-BHJSY5WG.js
function a() {
  throw new Error("Cycle detected");
}
function d() {
  if (e > 1) e--;
  else {
    for (var t, i = false; h !== void 0; ) {
      var o = h;
      for (h = void 0, c++; o !== void 0; ) {
        var n = o.o;
        if (o.o = void 0, o.f &= -3, !(8 & o.f) && S(o)) try {
          o.c();
        } catch (_2) {
          i || (t = _2, i = true);
        }
        o = n;
      }
    }
    if (c = 0, e--, i) throw t;
  }
}
var r = void 0;
var h = void 0;
var e = 0;
var c = 0;
var u = 0;
function l(t) {
  if (r !== void 0) {
    var i = t.n;
    if (i === void 0 || i.t !== r) return i = { i: 0, S: t, p: r.s, n: void 0, t: r, e: void 0, x: void 0, r: i }, r.s !== void 0 && (r.s.n = i), r.s = i, t.n = i, 32 & r.f && t.S(i), i;
    if (i.i === -1) return i.i = 0, i.n !== void 0 && (i.n.p = i.p, i.p !== void 0 && (i.p.n = i.n), i.p = r.s, i.n = void 0, r.s.n = i, r.s = i), i;
  }
}
function s(t) {
  this.v = t, this.i = 0, this.n = void 0, this.t = void 0;
}
s.prototype.h = function() {
  return true;
};
s.prototype.S = function(t) {
  this.t !== t && t.e === void 0 && (t.x = this.t, this.t !== void 0 && (this.t.e = t), this.t = t);
};
s.prototype.U = function(t) {
  if (this.t !== void 0) {
    var i = t.e, o = t.x;
    i !== void 0 && (i.x = o, t.e = void 0), o !== void 0 && (o.e = i, t.x = void 0), t === this.t && (this.t = o);
  }
};
s.prototype.subscribe = function(t) {
  var i = this;
  return m2(function() {
    var o = i.value, n = 32 & this.f;
    this.f &= -33;
    try {
      t(o);
    } finally {
      this.f |= n;
    }
  });
};
s.prototype.valueOf = function() {
  return this.value;
};
s.prototype.toString = function() {
  return this.value + "";
};
s.prototype.toJSON = function() {
  return this.value;
};
s.prototype.peek = function() {
  return this.v;
};
Object.defineProperty(s.prototype, "value", { get: function() {
  var t = l(this);
  return t !== void 0 && (t.i = this.i), this.v;
}, set: function(t) {
  if (r instanceof f && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    c > 100 && a(), this.v = t, this.i++, u++, e++;
    try {
      for (var i = this.t; i !== void 0; i = i.x) i.t.N();
    } finally {
      d();
    }
  }
} });
function y(t) {
  return new s(t);
}
function S(t) {
  for (var i = t.s; i !== void 0; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return true;
  return false;
}
function w2(t) {
  for (var i = t.s; i !== void 0; i = i.n) {
    var o = i.S.n;
    if (o !== void 0 && (i.r = o), i.S.n = i, i.i = -1, i.n === void 0) {
      t.s = i;
      break;
    }
  }
}
function b(t) {
  for (var i = t.s, o = void 0; i !== void 0; ) {
    var n = i.p;
    i.i === -1 ? (i.S.U(i), n !== void 0 && (n.n = i.n), i.n !== void 0 && (i.n.p = n)) : o = i, i.S.n = i.r, i.r !== void 0 && (i.r = void 0), i = n;
  }
  t.s = o;
}
function f(t) {
  s.call(this, void 0), this.x = t, this.s = void 0, this.g = u - 1, this.f = 4;
}
(f.prototype = new s()).h = function() {
  if (this.f &= -3, 1 & this.f) return false;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === u)) return true;
  if (this.g = u, this.f |= 1, this.i > 0 && !S(this)) return this.f &= -2, true;
  var t = r;
  try {
    w2(this), r = this;
    var i = this.x();
    (16 & this.f || this.v !== i || this.i === 0) && (this.v = i, this.f &= -17, this.i++);
  } catch (o) {
    this.v = o, this.f |= 16, this.i++;
  }
  return r = t, b(this), this.f &= -2, true;
};
f.prototype.S = function(t) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var i = this.s; i !== void 0; i = i.n) i.S.S(i);
  }
  s.prototype.S.call(this, t);
};
f.prototype.U = function(t) {
  if (this.t !== void 0 && (s.prototype.U.call(this, t), this.t === void 0)) {
    this.f &= -33;
    for (var i = this.s; i !== void 0; i = i.n) i.S.U(i);
  }
};
f.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var t = this.t; t !== void 0; t = t.x) t.t.N();
  }
};
f.prototype.peek = function() {
  if (this.h() || a(), 16 & this.f) throw this.v;
  return this.v;
};
Object.defineProperty(f.prototype, "value", { get: function() {
  1 & this.f && a();
  var t = l(this);
  if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function x(t) {
  var i = t.u;
  if (t.u = void 0, typeof i == "function") {
    e++;
    var o = r;
    r = void 0;
    try {
      i();
    } catch (n) {
      throw t.f &= -2, t.f |= 8, p(t), n;
    } finally {
      r = o, d();
    }
  }
}
function p(t) {
  for (var i = t.s; i !== void 0; i = i.n) i.S.U(i);
  t.x = void 0, t.s = void 0, x(t);
}
function T(t) {
  if (r !== this) throw new Error("Out-of-order effect");
  b(this), r = t, this.f &= -2, 8 & this.f && p(this), d();
}
function v(t) {
  this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
v.prototype.c = function() {
  var t = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    t();
  }
};
v.prototype.S = function() {
  1 & this.f && a(), this.f |= 1, this.f &= -9, x(this), w2(this), e++;
  var t = r;
  return r = this, T.bind(this, t);
};
v.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = h, h = this);
};
v.prototype.d = function() {
  this.f |= 8, 1 & this.f || p(this);
};
function m2(t) {
  var i = new v(t);
  try {
    i.c();
  } catch (o) {
    throw i.d(), o;
  }
  return i.d.bind(i);
}
var g = class {
  constructor(i) {
    __publicField(this, "_state");
    __publicField(this, "_prevState");
    this._prevState = i, this._state = y(i);
  }
  setState(i) {
    this._prevState = this._state.value, this._state.value = i;
  }
  subscribe(i) {
    return this._state.subscribe((o) => i(o, this._prevState));
  }
};

// node_modules/@dotlottie/common/dist/chunk-GSRQSB3U.js
async function r2(t, o) {
  let [{ DotLottieStateMachineManager: a2 }] = await Promise.all([import("./dotlottie-state-machine-manager-2E7RUGJG-RGCKWMI7.js")]);
  if (!t.length) throw on("No state machines available inside this .lottie!");
  return new a2(t, o);
}

// node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js
var U = { name: "@dotlottie/common", version: "0.7.11", type: "module", description: "", author: "Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>", license: "MIT", engines: { node: ">18.0.0" }, module: "dist/index.js", main: "dist/index.js", types: "dist/index.d.ts", files: ["dist"], keywords: [], scripts: { build: "tsup", dev: "tsup --watch", lint: "eslint .", "type-check": "tsc --noEmit" }, dependencies: { "@dotlottie/dotlottie-js": "^0.7.0", "@preact/signals-core": "^1.2.3", howler: "^2.2.3", "lottie-web": "^5.12.2", xstate: "^4.38.1" }, devDependencies: { "@lottiefiles/lottie-types": "^1.2.0", "@types/howler": "^2.2.8", tsup: "^7.2.0", typescript: "^4.7.4" }, publishConfig: { access: "public" } };
var W2 = ((l2) => (l2.Complete = "complete", l2.DataFail = "data_fail", l2.DataReady = "data_ready", l2.Error = "error", l2.Frame = "frame", l2.Freeze = "freeze", l2.LoopComplete = "loopComplete", l2.Pause = "pause", l2.Play = "play", l2.Ready = "ready", l2.Stop = "stop", l2.VisibilityChange = "visibilityChange", l2))(W2 || {});
var K2 = ((d2) => (d2.Completed = "completed", d2.Error = "error", d2.Fetching = "fetching", d2.Frozen = "frozen", d2.Initial = "initial", d2.Loading = "loading", d2.Paused = "paused", d2.Playing = "playing", d2.Ready = "ready", d2.Stopped = "stopped", d2))(K2 || {});
var G2 = ((e2) => (e2.Bounce = "bounce", e2.Normal = "normal", e2))(G2 || {});
var u2 = { autoplay: false, direction: 1, hover: false, intermission: 0, loop: false, playMode: "normal", speed: 1, defaultTheme: "" };
var Q = { activeStateId: "", autoplay: false, currentState: "initial", frame: 0, seeker: 0, direction: 1, hover: false, loop: false, playMode: "normal", speed: 1, background: "transparent", intermission: 0, currentAnimationId: void 0, visibilityPercentage: 0 };
var j2 = class {
  constructor(t, e2, i) {
    __publicField(this, "_lottie");
    __publicField(this, "_src");
    __publicField(this, "_animationConfig");
    __publicField(this, "_prevUserPlaybackOptions", {});
    __publicField(this, "_userPlaybackOptions");
    __publicField(this, "_hover", false);
    __publicField(this, "_loop", false);
    __publicField(this, "_counter", 0);
    __publicField(this, "_intermission", 0);
    __publicField(this, "_counterInterval", null);
    __publicField(this, "_container", null);
    __publicField(this, "_name");
    __publicField(this, "_mode", "normal");
    __publicField(this, "_background", "transparent");
    __publicField(this, "_animation");
    __publicField(this, "_defaultTheme");
    __publicField(this, "_activeAnimationId");
    __publicField(this, "_currentAnimationId");
    __publicField(this, "_testId");
    __publicField(this, "_listeners", /* @__PURE__ */ new Map());
    __publicField(this, "_currentState", "initial");
    __publicField(this, "_stateBeforeFreeze", "initial");
    __publicField(this, "state", new g(Q));
    __publicField(this, "_light", false);
    __publicField(this, "_worker", false);
    __publicField(this, "_dotLottieLoader", new m());
    __publicField(this, "_activeStateId");
    __publicField(this, "_inInteractiveMode", false);
    __publicField(this, "_scrollTicking", false);
    __publicField(this, "_scrollCallback");
    __publicField(this, "_onShowIntersectionObserver");
    __publicField(this, "_visibilityPercentage", 0);
    __publicField(this, "_audios", []);
    __publicField(this, "_stateMachineManager");
    typeof t == "string" ? this._src = t : this._src = pn(t), i != null && i.testId && (this._testId = i.testId), this._defaultTheme = (i == null ? void 0 : i.defaultTheme) || "", this._userPlaybackOptions = this._validatePlaybackOptions(i || {}), typeof (i == null ? void 0 : i.activeAnimationId) == "string" && (this._activeAnimationId = i.activeAnimationId), this._container = e2 || null, typeof (i == null ? void 0 : i.background) == "string" && this.setBackground(i.background), typeof (i == null ? void 0 : i.activeStateId) < "u" && (this._activeStateId = i.activeStateId);
    let { rendererSettings: n, ...o } = i || {};
    this._animationConfig = { loop: false, autoplay: false, renderer: "svg", rendererSettings: { clearCanvas: true, progressiveLoad: true, hideOnTransparent: true, filterSize: { width: "200%", height: "200%", x: "-50%", y: "-50%" }, ...n }, ...o }, i != null && i.light && (this._light = i.light), i != null && i.worker && (this._worker = i.worker), this._listenToHover(), this._listenToVisibilityChange();
  }
  _listenToHover() {
    var i, n, o, a2;
    let t = () => {
      this._hover && this.currentState !== "playing" && this.play();
    }, e2 = () => {
      this._hover && this.currentState === "playing" && this.stop();
    };
    (i = this._container) == null || i.removeEventListener("mouseenter", t), (n = this._container) == null || n.removeEventListener("mouseleave", e2), (o = this._container) == null || o.addEventListener("mouseleave", e2), (a2 = this._container) == null || a2.addEventListener("mouseenter", t);
  }
  _onVisibilityChange() {
    !this._lottie || typeof document > "u" || (document.hidden && this.currentState === "playing" ? this.freeze() : this.currentState === "frozen" && this.unfreeze());
  }
  _listenToVisibilityChange() {
    typeof document < "u" && typeof document.hidden < "u" && document.addEventListener("visibilitychange", () => this._onVisibilityChange());
  }
  _getOption(t) {
    var i;
    if (typeof this._userPlaybackOptions[t] < "u") return this._userPlaybackOptions[t];
    let e2 = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations.find((n) => n.id === this._currentAnimationId);
    return e2 && typeof e2[t] < "u" ? e2[t] : u2[t];
  }
  _getPlaybackOptions() {
    let t = {};
    for (let e2 in u2) typeof u2[e2] < "u" && (t[e2] = this._getOption(e2));
    return t;
  }
  _setPlayerState(t) {
    var i, n, o;
    let e2 = t(this._getPlaybackOptions());
    try {
      tr._parse(e2);
    } catch {
      ln(`Invalid PlaybackOptions, ${JSON.stringify(e2, null, 2)}`);
      return;
    }
    typeof e2.defaultTheme < "u" && (this._defaultTheme = e2.defaultTheme), typeof e2.playMode < "u" && (this._mode = e2.playMode), typeof e2.intermission < "u" && (this._intermission = e2.intermission), typeof e2.hover < "u" && (this._hover = e2.hover), typeof e2.loop < "u" && (this.clearCountTimer(), this._loop = e2.loop, this._counter = 0, (i = this._lottie) == null || i.setLoop(typeof e2.loop == "number" ? true : e2.loop)), typeof e2.speed < "u" && ((n = this._lottie) == null || n.setSpeed(e2.speed)), typeof e2.autoplay < "u" && this._lottie && (this._lottie.autoplay = e2.autoplay), typeof e2.direction < "u" && ((o = this._lottie) == null || o.setDirection(e2.direction));
  }
  _getOptionsFromAnimation(t) {
    let { id: e2, ...i } = t;
    return { ...u2, ...i };
  }
  _updateTestData() {
    !this._testId || !this._lottie || (window.dotLottiePlayer || (window.dotLottiePlayer = { [this._testId]: {} }), window.dotLottiePlayer[this._testId] = { direction: this._lottie.playDirection, currentState: this._currentState, loop: this.loop, mode: this._mode, speed: this._lottie.playSpeed });
  }
  setContainer(t) {
    t !== this._container && (this._container = t, this.setBackground(this._background), this._listenToHover());
  }
  get currentState() {
    return this._currentState;
  }
  clearCountTimer() {
    this._counterInterval && clearInterval(this._counterInterval);
  }
  setCurrentState(t) {
    this._currentState = t, this._notify(), this._updateTestData();
  }
  static isPathJSON(t) {
    var e2;
    return ((e2 = t.split(".").pop()) == null ? void 0 : e2.toLowerCase()) === "json";
  }
  get src() {
    return this._src;
  }
  updateSrc(t) {
    this._src !== t && (typeof t == "string" ? this._src = t : this._src = pn(t), this._activeAnimationId = void 0, this._currentAnimationId = void 0, this.load());
  }
  get intermission() {
    return this._intermission;
  }
  get hover() {
    return this._hover;
  }
  setHover(t) {
    typeof t == "boolean" && (this._hover = t, this._userPlaybackOptions.hover = t, this._notify());
  }
  setIntermission(t) {
    this._intermission = t, this._userPlaybackOptions.intermission = t, this._notify();
  }
  get mode() {
    return this._mode;
  }
  get animations() {
    return this._dotLottieLoader.animationsMap;
  }
  get themes() {
    return this._dotLottieLoader.themeMap;
  }
  setMode(t) {
    typeof t == "string" && (this._mode = t, this._userPlaybackOptions.playMode = t, this._setPlayerState(() => ({ playMode: t })), this._notify(), this._updateTestData());
  }
  get container() {
    if (this._container) return this._container;
  }
  goToAndPlay(t, e2, i) {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("goToAndPlay() Can't use whilst loading.");
      return;
    }
    this._lottie.goToAndPlay(t, e2, i), this.setCurrentState("playing");
  }
  goToAndStop(t, e2, i) {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("goToAndStop() Can't use whilst loading.");
      return;
    }
    this._lottie.goToAndStop(t, e2, i), this.setCurrentState("stopped");
  }
  seek(t) {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("seek() Can't use whilst loading.");
      return;
    }
    let e2 = t;
    typeof e2 == "number" && (e2 = Math.round(e2));
    let i = /^(\d+)(%?)$/u.exec(e2.toString());
    if (!i) return;
    let n = i[2] === "%" ? this.totalFrames * Number(i[1]) / 100 : i[1];
    n !== void 0 && (this._lottie.goToAndPlay(n, true), this.currentState === "playing" ? this.play() : this.currentState === "frozen" ? this.freeze() : this.pause());
  }
  _areNumbersInRange(t, e2) {
    return t >= 0 && t <= 1 && e2 >= 0 && e2 <= 1;
  }
  _updatePosition(t, e2, i$1) {
    let [n, o] = t != null ? t : [0, this.totalFrames - 1], [a2, h2] = e2 != null ? e2 : [0, 1];
    if (!this._areNumbersInRange(a2, h2)) {
      un("threshold values must be between 0 and 1");
      return;
    }
    if (this.container) {
      let { height: f2, top: p2 } = this.container.getBoundingClientRect(), d2 = window.innerHeight - p2, m3 = window.innerHeight + f2, l2 = d2 / m3, _2 = n + Math.round((l2 - a2) / (h2 - a2) * (o - n));
      i$1 && i$1(l2), this.goToAndStop(_2, true), (_2 >= o || l2 >= h2) && this._handleAnimationComplete();
    }
    this._scrollTicking = false;
  }
  _requestTick(t, e2, i) {
    this._scrollTicking || (requestAnimationFrame(() => this._updatePosition(t, e2, i)), this._scrollTicking = true);
  }
  playOnScroll(t) {
    this.stop(), this._scrollCallback && this.stopPlayOnScroll(), this._scrollCallback = () => this._requestTick(t == null ? void 0 : t.segments, t == null ? void 0 : t.threshold, t == null ? void 0 : t.positionCallback), window.addEventListener("scroll", this._scrollCallback);
  }
  stopPlayOnScroll() {
    this._scrollCallback && (window.removeEventListener("scroll", this._scrollCallback), this._scrollCallback = void 0);
  }
  stopPlayOnShow() {
    this._onShowIntersectionObserver && (this._onShowIntersectionObserver.disconnect(), this._onShowIntersectionObserver = void 0);
  }
  addIntersectionObserver(t) {
    if (!this.container) throw on("Can't play on show, player container element not available.");
    let e2 = { root: null, rootMargin: "0px", threshold: t != null && t.threshold ? t.threshold : [0, 1] }, i = (n) => {
      n.forEach((o) => {
        var a2, h2;
        this._visibilityPercentage = o.intersectionRatio * 100, o.isIntersecting ? (t != null && t.callbackOnIntersect && t.callbackOnIntersect(this._visibilityPercentage), (a2 = this._container) == null || a2.dispatchEvent(new Event("visibilityChange"))) : t != null && t.callbackOnIntersect && (t.callbackOnIntersect(0), (h2 = this._container) == null || h2.dispatchEvent(new Event("visibilityChange")));
      });
    };
    this._onShowIntersectionObserver = new IntersectionObserver(i, e2), this._onShowIntersectionObserver.observe(this.container);
  }
  playOnShow(t) {
    var e2;
    if (this.stop(), !this.container) throw on("Can't play on show, player container element not available.");
    this._onShowIntersectionObserver && this.stopPlayOnShow(), this.addIntersectionObserver({ threshold: (e2 = t == null ? void 0 : t.threshold) != null ? e2 : [], callbackOnIntersect: (i) => {
      i === 0 ? this.pause() : this.play();
    } });
  }
  _validatePlaybackOptions(t) {
    if (!t) return {};
    let e2 = {};
    for (let [i, n] of Object.entries(t)) switch (i) {
      case "autoplay":
        typeof n == "boolean" && (e2.autoplay = n);
        break;
      case "direction":
        typeof n == "number" && [1, -1].includes(n) && (e2.direction = n);
        break;
      case "loop":
        (typeof n == "boolean" || typeof n == "number") && (e2.loop = n);
        break;
      case "playMode":
        typeof n == "string" && ["normal", "bounce"].includes(n) && (e2.playMode = n);
        break;
      case "speed":
        typeof n == "number" && (e2.speed = n);
        break;
      case "themeColor":
        typeof n == "string" && (e2.themeColor = n);
        break;
      case "hover":
        typeof n == "boolean" && (e2.hover = n);
        break;
      case "intermission":
        typeof n == "number" && (e2.intermission = n);
        break;
      case "defaultTheme":
        typeof n == "string" && (e2.defaultTheme = n);
        break;
    }
    return this._requireValidPlaybackOptions(e2), e2;
  }
  _requireAnimationsInTheManifest() {
    var t;
    if (!((t = this._dotLottieLoader.manifest) != null && t.animations.length)) throw on("No animations found in manifest.");
  }
  _requireAnimationsToBeLoaded() {
    if (this._dotLottieLoader.animationsMap.size === 0) throw on("No animations have been loaded.");
  }
  async play(t, e2) {
    var i, n;
    if (["initial", "loading"].includes(this._currentState)) {
      ln("Player unable to play whilst loading.");
      return;
    }
    if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), this._lottie && !t) {
      this._lottie.playDirection === -1 && this._lottie.currentFrame === 0 ? this._lottie.goToAndPlay(this._lottie.totalFrames, true) : this._lottie.play(), this.setCurrentState("playing");
      return;
    }
    if (typeof t == "number") {
      let o = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations[t];
      if (!o) throw on("animation not found.");
      typeof e2 == "function" ? await this.render({ id: o.id, ...e2(this._getPlaybackOptions(), this._getOptionsFromAnimation(o)) }) : await this.render({ id: o.id });
    }
    if (typeof t == "string") {
      let o = (n = this._dotLottieLoader.manifest) == null ? void 0 : n.animations.find((a2) => a2.id === t);
      if (!o) throw on("animation not found.");
      typeof e2 == "function" ? await this.render({ id: o.id, ...e2(this._getPlaybackOptions(), this._getOptionsFromAnimation(o)) }) : await this.render({ id: o.id });
    }
  }
  playSegments(t, e2) {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("playSegments() Can't use whilst loading.");
      return;
    }
    this._lottie.playSegments(t, e2), this.setCurrentState("playing");
  }
  resetSegments(t) {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("resetSegments() Can't use whilst loading.");
      return;
    }
    this._lottie.resetSegments(t);
  }
  togglePlay() {
    this.currentState === "playing" ? this.pause() : this.play();
  }
  _getAnimationByIdOrIndex(t) {
    var e2, i;
    if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), typeof t == "number") {
      let n = (e2 = this._dotLottieLoader.manifest) == null ? void 0 : e2.animations[t];
      if (!n) throw on("animation not found.");
      return n;
    }
    if (typeof t == "string") {
      let n = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations.find((o) => o.id === t);
      if (!n) throw on("animation not found.");
      return n;
    }
    throw on("first param must be a number or string");
  }
  get activeAnimationId() {
    return this._getActiveAnimationId();
  }
  get currentAnimationId() {
    return this._currentAnimationId;
  }
  get activeStateId() {
    return this._activeStateId;
  }
  async _startInteractivity(t) {
    if (!this._inInteractiveMode) {
      un("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");
      return;
    }
    if (this._dotLottieLoader.stateMachinesMap.size === 0 && await this._dotLottieLoader.getStateMachines(), this._dotLottieLoader.stateMachinesMap.size === 0) throw on("No interactivity states are available.");
    if (t === "undefined") throw on("stateId is not specified.");
    this._stateMachineManager || (this._stateMachineManager = await r2(Array.from(this._dotLottieLoader.stateMachinesMap.values()), this)), this._stateMachineManager.start(t);
  }
  enterInteractiveMode(t) {
    var e2;
    if (t) this._inInteractiveMode || (this._prevUserPlaybackOptions = { ...this._userPlaybackOptions }), this._inInteractiveMode && ((e2 = this._stateMachineManager) == null || e2.stop()), this._activeStateId = t, this._inInteractiveMode = true, this._startInteractivity(t);
    else throw on("stateId must be a non-empty string.");
  }
  exitInteractiveMode() {
    var t;
    this._inInteractiveMode && (this._inInteractiveMode = false, this._activeStateId = "", (t = this._stateMachineManager) == null || t.stop(), this._userPlaybackOptions = {}, this._userPlaybackOptions = { ...this._prevUserPlaybackOptions }, this._prevUserPlaybackOptions = {}, this.reset());
  }
  reset() {
    var i;
    let t = this._getActiveAnimationId(), e2 = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations.find((n) => n.id === t);
    if (this._inInteractiveMode && this.exitInteractiveMode(), !e2) throw on("animation not found.");
    this.play(t);
  }
  previous(t) {
    if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw on("manifest not found.");
    if (this._inInteractiveMode) {
      ln("previous() is not supported in interactive mode.");
      return;
    }
    let e2 = this._dotLottieLoader.manifest.animations.findIndex((n) => n.id === this._currentAnimationId);
    if (e2 === -1) throw on("animation not found.");
    let i = this._dotLottieLoader.manifest.animations[(e2 - 1 + this._dotLottieLoader.manifest.animations.length) % this._dotLottieLoader.manifest.animations.length];
    if (!i || !i.id) throw on("animation not found.");
    typeof t == "function" ? this.render({ id: i.id, ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i)) }) : this.render({ id: i.id });
  }
  next(t) {
    if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw on("manifest not found.");
    if (this._inInteractiveMode) {
      ln("next() is not supported in interactive mode.");
      return;
    }
    let e2 = this._dotLottieLoader.manifest.animations.findIndex((n) => n.id === this._currentAnimationId);
    if (e2 === -1) throw on("animation not found.");
    let i = this._dotLottieLoader.manifest.animations[(e2 + 1) % this._dotLottieLoader.manifest.animations.length];
    if (!i || !i.id) throw on("animation not found.");
    typeof t == "function" ? this.render({ id: i.id, ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i)) }) : this.render({ id: i.id });
  }
  getManifest() {
    return this._dotLottieLoader.manifest;
  }
  resize() {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("resize() Can't use whilst loading.");
      return;
    }
    this._lottie.resize();
  }
  stop() {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("stop() Can't use whilst loading.");
      return;
    }
    this.clearCountTimer(), this._counter = 0, this._setPlayerState(() => ({ direction: this._getOption("direction") })), this._lottie.stop(), this.setCurrentState("stopped");
  }
  pause() {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("pause() Can't use whilst loading.");
      return;
    }
    this.clearCountTimer(), this._lottie.pause(), this.setCurrentState("paused");
  }
  freeze() {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("freeze() Can't use whilst loading.");
      return;
    }
    this.currentState !== "frozen" && (this._stateBeforeFreeze = this.currentState), this._lottie.pause(), this.setCurrentState("frozen");
  }
  unfreeze() {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("unfreeze() Can't use whilst loading.");
      return;
    }
    this._stateBeforeFreeze === "playing" ? this.play() : this.pause();
  }
  destroy() {
    var t, e2;
    (t = this._container) != null && t.__lottie && (this._container.__lottie.destroy(), this._container.__lottie = null), this._audios.length && (this._audios.forEach((i) => {
      i.unload();
    }), this._audios = []), this.clearCountTimer(), typeof document < "u" && document.removeEventListener("visibilitychange", () => this._onVisibilityChange()), this._counter = 0, (e2 = this._lottie) == null || e2.destroy(), this._lottie = void 0;
  }
  getAnimationInstance() {
    return this._lottie;
  }
  static getLottieWebVersion() {
    return `${U.dependencies["lottie-web"]}`;
  }
  addEventListener(t, e2) {
    var i$1, n, o;
    this._listeners.has(t) || this._listeners.set(t, /* @__PURE__ */ new Set()), (i$1 = this._listeners.get(t)) == null || i$1.add(e2);
    try {
      t === "complete" ? (n = this._container) == null || n.addEventListener(t, e2) : (o = this._lottie) == null || o.addEventListener(t, e2);
    } catch (a2) {
      un(`addEventListener ${a2}`);
    }
  }
  getState() {
    var t, e2, i, n, o, a2, h2;
    return { autoplay: (e2 = (t = this._lottie) == null ? void 0 : t.autoplay) != null ? e2 : false, currentState: this._currentState, frame: this._frame, visibilityPercentage: this._visibilityPercentage, seeker: this._seeker, direction: (n = (i = this._lottie) == null ? void 0 : i.playDirection) != null ? n : 1, hover: this._hover, loop: this._loop || false, playMode: this._mode, speed: (a2 = (o = this._lottie) == null ? void 0 : o.playSpeed) != null ? a2 : 1, background: this._background, intermission: this._intermission, defaultTheme: this._defaultTheme, currentAnimationId: this._currentAnimationId, activeStateId: (h2 = this._activeStateId) != null ? h2 : "" };
  }
  _notify() {
    this.state.setState(this.getState());
  }
  get totalFrames() {
    var t;
    return ((t = this._lottie) == null ? void 0 : t.totalFrames) || 0;
  }
  get direction() {
    return this._lottie ? this._lottie.playDirection : 1;
  }
  setDirection(t) {
    this._requireValidDirection(t), this._setPlayerState(() => ({ direction: t })), this._userPlaybackOptions.direction = t;
  }
  get speed() {
    var t;
    return ((t = this._lottie) == null ? void 0 : t.playSpeed) || 1;
  }
  setSpeed(t) {
    this._requireValidSpeed(t), this._setPlayerState(() => ({ speed: t })), this._userPlaybackOptions.speed = t;
  }
  get autoplay() {
    var t, e2;
    return (e2 = (t = this._lottie) == null ? void 0 : t.autoplay) != null ? e2 : false;
  }
  setAutoplay(t) {
    if (this._requireValidAutoplay(t), !this._lottie || ["loading"].includes(this._currentState)) {
      ln("setAutoplay() Can't use whilst loading.");
      return;
    }
    this._setPlayerState(() => ({ autoplay: t })), this._userPlaybackOptions.autoplay = t;
  }
  toggleAutoplay() {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("toggleAutoplay() Can't use whilst loading.");
      return;
    }
    this.setAutoplay(!this._lottie.autoplay);
  }
  get defaultTheme() {
    return this._defaultTheme;
  }
  setDefaultTheme(t) {
    this._setPlayerState(() => ({ defaultTheme: t })), this._userPlaybackOptions.defaultTheme = t, this._animation && this.render();
  }
  get loop() {
    return this._loop;
  }
  setLoop(t) {
    this._requireValidLoop(t), this._setPlayerState(() => ({ loop: t })), this._userPlaybackOptions.loop = t;
  }
  toggleLoop() {
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("toggleLoop() Can't use whilst loading.");
      return;
    }
    this.setLoop(!this._loop);
  }
  get background() {
    return this._background;
  }
  setBackground(t) {
    this._requireValidBackground(t), this._background = t, this._container && (this._container.style.backgroundColor = t);
  }
  get _frame() {
    return this._lottie ? this.currentState === "completed" ? this.direction === -1 ? 0 : this._lottie.totalFrames : this._lottie.currentFrame : 0;
  }
  get _seeker() {
    return this._lottie ? this._frame / this._lottie.totalFrames * 100 : 0;
  }
  async revertToManifestValues(t) {
    var n;
    let e2;
    !Array.isArray(t) || t.length === 0 ? e2 = ["autoplay", "defaultTheme", "direction", "hover", "intermission", "loop", "playMode", "speed", "activeAnimationId"] : e2 = t;
    let i = false;
    if (e2.includes("activeAnimationId")) {
      let o = (n = this._dotLottieLoader.manifest) == null ? void 0 : n.activeAnimationId, a2 = this._getAnimationByIdOrIndex(o || 0);
      this._activeAnimationId = o, await this._setCurrentAnimation(a2.id), i = true;
    }
    e2.forEach((o) => {
      switch (o) {
        case "autoplay":
          delete this._userPlaybackOptions.autoplay, this.setAutoplay(this._getOption("autoplay"));
          break;
        case "defaultTheme":
          delete this._userPlaybackOptions.defaultTheme, this.setDefaultTheme(this._getOption("defaultTheme"));
          break;
        case "direction":
          delete this._userPlaybackOptions.direction, this.setDirection(this._getOption("direction"));
          break;
        case "hover":
          delete this._userPlaybackOptions.hover, this.setHover(this._getOption("hover"));
          break;
        case "intermission":
          delete this._userPlaybackOptions.intermission, this.setIntermission(this._getOption("intermission"));
          break;
        case "loop":
          delete this._userPlaybackOptions.loop, this.setLoop(this._getOption("loop"));
          break;
        case "playMode":
          delete this._userPlaybackOptions.playMode, this.setMode(this._getOption("playMode")), this.setDirection(this._getOption("direction"));
          break;
        case "speed":
          delete this._userPlaybackOptions.speed, this.setSpeed(this._getOption("speed"));
          break;
      }
    }), i && this.render();
  }
  removeEventListener(t, e2) {
    var i$1, n, o;
    try {
      t === "complete" ? (i$1 = this._container) == null || i$1.removeEventListener(t, e2) : (n = this._lottie) == null || n.removeEventListener(t, e2), (o = this._listeners.get(t)) == null || o.delete(e2);
    } catch (a2) {
      un("removeEventListener", a2);
    }
  }
  _handleAnimationComplete() {
    var e2;
    typeof this._loop == "number" && this.stop();
    let t = this.direction === -1 ? 0 : this.totalFrames - 1;
    this.goToAndStop(t, true), this._counter = 0, this.clearCountTimer(), this.setCurrentState("completed"), (e2 = this._container) == null || e2.dispatchEvent(new Event("complete"));
  }
  addEventListeners() {
    var t;
    if (!this._lottie || ["loading"].includes(this._currentState)) {
      ln("addEventListeners() Can't use whilst loading.");
      return;
    }
    this._lottie.addEventListener("enterFrame", () => {
      var i;
      if (!this._lottie) {
        ln("enterFrame event : Lottie is undefined.");
        return;
      }
      Math.floor(this._lottie.currentFrame) === 0 && this.direction === -1 && ((i = this._container) == null || i.dispatchEvent(new Event("complete")), this.loop || this.setCurrentState("completed")), this._notify();
    }), this._lottie.addEventListener("loopComplete", () => {
      var n;
      if (!this._lottie) {
        ln("loopComplete event : Lottie is undefined.");
        return;
      }
      (n = this._container) == null || n.dispatchEvent(new Event("loopComplete")), this.intermission > 0 && this.pause();
      let e2 = this._lottie.playDirection;
      if (typeof this._loop == "number" && this._loop > 0 && (this._counter += this._mode === "bounce" ? 0.5 : 1, this._counter >= this._loop)) {
        this._handleAnimationComplete();
        return;
      }
      this._mode === "bounce" && typeof e2 == "number" && (e2 = Number(e2) * -1);
      let i = e2 === -1 ? this._lottie.totalFrames - 1 : 0;
      this.intermission ? (this.goToAndPlay(i, true), this.pause(), this._counterInterval = window.setTimeout(() => {
        this._lottie && (this._setPlayerState(() => ({ direction: e2 })), this.goToAndPlay(i, true));
      }, this._intermission)) : (this._setPlayerState(() => ({ direction: e2 })), this.goToAndPlay(e2 === -1 ? this.totalFrames - 1 : 0, true));
    }), this._lottie.addEventListener("complete", () => {
      if (this._lottie && this._loop === false && this._mode === "bounce") {
        if (this._counter += 0.5, this._counter >= 1) {
          this._handleAnimationComplete();
          return;
        }
        this._counterInterval = window.setTimeout(() => {
          if (!this._lottie) return;
          let e2 = this._lottie.playDirection;
          this._mode === "bounce" && typeof e2 == "number" && (e2 = Number(e2) * -1);
          let i = e2 === -1 ? this.totalFrames - 1 : 0;
          this._setPlayerState(() => ({ direction: e2 })), this.goToAndPlay(i, true);
        }, this._intermission);
      } else this._handleAnimationComplete();
    });
    for (let [e2, i] of this._listeners) if (e2 === "complete") for (let n of i) (t = this._container) == null || t.addEventListener(e2, n);
    else for (let n of i) this._lottie.addEventListener(e2, n);
  }
  async _setCurrentAnimation(t) {
    this._currentState = "loading";
    let e2 = await this._dotLottieLoader.getAnimation(t);
    this._currentAnimationId = t, this._animation = e2, this._currentState = "ready";
  }
  async _getAudioFactory() {
    if (this._animation && fn(this._animation)) {
      let { DotLottieAudio: t } = await import("./dotlottie-audio-P3HPZ7WS.js");
      return (i) => {
        let n = new t({ src: [i] });
        return this._audios.push(n), n;
      };
    }
    return null;
  }
  async render(t) {
    var b2, g2, v2, P2, S2, L, k2, w3, I2, O2, C, M, T2, A, D, E2, F2, x2;
    if (t != null && t.id) await this._setCurrentAnimation(t.id);
    else if (!this._animation) throw on("no animation selected");
    let e2 = (b2 = u2.loop) != null ? b2 : false, i = (g2 = u2.autoplay) != null ? g2 : false, n = (v2 = u2.playMode) != null ? v2 : "normal", o = (P2 = u2.intermission) != null ? P2 : 0, a2 = (S2 = u2.hover) != null ? S2 : false, h$1 = (L = u2.direction) != null ? L : 1, f2 = (k2 = u2.speed) != null ? k2 : 1, p$1 = (w3 = u2.defaultTheme) != null ? w3 : "";
    e2 = (I2 = t == null ? void 0 : t.loop) != null ? I2 : this._getOption("loop"), i = (O2 = t == null ? void 0 : t.autoplay) != null ? O2 : this._getOption("autoplay"), n = (C = t == null ? void 0 : t.playMode) != null ? C : this._getOption("playMode"), o = (M = t == null ? void 0 : t.intermission) != null ? M : this._getOption("intermission"), a2 = (T2 = t == null ? void 0 : t.hover) != null ? T2 : this._getOption("hover"), h$1 = (A = t == null ? void 0 : t.direction) != null ? A : this._getOption("direction"), f2 = (D = t == null ? void 0 : t.speed) != null ? D : this._getOption("speed"), p$1 = (E2 = t == null ? void 0 : t.defaultTheme) != null ? E2 : this._getOption("defaultTheme");
    let d2 = { ...this._animationConfig, autoplay: a2 ? false : i, loop: typeof e2 == "number" ? true : e2, renderer: this._worker ? "svg" : (F2 = this._animationConfig.renderer) != null ? F2 : "svg" }, [m3, l2, _2] = await Promise.all([this._dotLottieLoader.getTheme(p$1), this._getLottiePlayerInstance(), this._getAudioFactory()]);
    if (m3 && this._animation ? (this._animation = pn(this._animation), this._animation.slots = m3) : this._animation = await this._dotLottieLoader.getAnimation((x2 = this._currentAnimationId) != null ? x2 : ""), this._activeStateId && !this._inInteractiveMode) {
      this.enterInteractiveMode(this._activeStateId);
      return;
    }
    this.destroy(), this._setPlayerState(() => ({ defaultTheme: p$1, playMode: n, intermission: o, hover: a2, loop: e2 })), _2 ? this._lottie = l2.loadAnimation({ ...d2, container: this._container, animationData: this._animation, audioFactory: _2 }) : this._lottie = l2.loadAnimation({ ...d2, container: this._container, animationData: this._animation }), typeof this._lottie.resetSegments > "u" && (this._lottie.resetSegments = () => {
      var V;
      (V = this._lottie) == null || V.playSegments([0, this._lottie.totalFrames], true);
    }), this.addEventListeners(), this._container && (this._container.__lottie = this._lottie), this._setPlayerState(() => ({ direction: h$1, speed: f2 })), i && !a2 && (e2 === false && h$1 === -1 ? this.play() : this.setCurrentState("playing")), this._updateTestData();
  }
  async _getLottiePlayerInstance() {
    var i;
    let t = (i = this._animationConfig.renderer) != null ? i : "svg", e2;
    if (this._worker) return t !== "svg" && ln("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."), e2 = await import("./lottie_worker-Q23FJ6ZR-RGUI4VYF.js"), e2.default;
    switch (t) {
      case "svg": {
        this._light ? e2 = await import("./lottie_light-KMJEUZFY-UXMJUCYA.js") : e2 = await import("./lottie_svg-MJGYILXD-AK7I6TDB.js");
        break;
      }
      case "canvas": {
        this._light ? e2 = await import("./lottie_light_canvas-B5UTTNXA-W42QH3R2.js") : e2 = await import("./lottie_canvas-CDSUBMCL-GOPO4M26.js");
        break;
      }
      case "html": {
        this._light ? e2 = await import("./lottie_light_html-SLCECTRT-MSMQKYD7.js") : e2 = await import("./lottie_html-X3TYKVQI-O5COVFN4.js");
        break;
      }
      default:
        throw new Error(`Invalid renderer: ${t}`);
    }
    return e2.default;
  }
  _getActiveAnimationId() {
    var e2, i, n, o;
    let t = this._dotLottieLoader.manifest;
    return (o = (n = (e2 = this._activeAnimationId) != null ? e2 : t == null ? void 0 : t.activeAnimationId) != null ? n : (i = t == null ? void 0 : t.animations[0]) == null ? void 0 : i.id) != null ? o : void 0;
  }
  async load(t) {
    if (this._currentState === "loading") {
      ln("Loading in progress..");
      return;
    }
    try {
      if (this.setCurrentState("loading"), typeof this._src == "string") if (hn(this._src)) {
        let i = JSON.parse(this._src);
        this._dotLottieLoader.loadFromLottieJSON(i);
      } else {
        let i = new URL(this._src, window.location.href);
        await this._dotLottieLoader.loadFromUrl(i.toString());
      }
      else if (typeof this._src == "object" && kr(this._src)) this._dotLottieLoader.loadFromLottieJSON(this._src);
      else throw on("Invalid src provided");
      if (!this._dotLottieLoader.manifest) throw on("No manifest found");
      let e2 = this._getActiveAnimationId();
      if (!e2) throw on("No active animation found");
      await this._setCurrentAnimation(e2), await this.render(t);
    } catch (e2) {
      this.setCurrentState("error"), e2 instanceof Error && un(`Error loading animation: ${e2.message}`);
    }
  }
  setErrorState(t) {
    this.setCurrentState("error"), un(t);
  }
  _requireValidDirection(t) {
    if (t !== -1 && t !== 1) throw on("Direction can only be -1 (backwards) or 1 (forwards)");
  }
  _requireValidIntermission(t) {
    if (t < 0 || !Number.isInteger(t)) throw on("intermission must be a positive number");
  }
  _requireValidLoop(t) {
    if (typeof t == "number" && (!Number.isInteger(t) || t < 0)) throw on("loop must be a positive number or boolean");
  }
  _requireValidSpeed(t) {
    if (typeof t != "number") throw on("speed must be a number");
  }
  _requireValidBackground(t) {
    if (typeof t != "string") throw on("background must be a string");
  }
  _requireValidAutoplay(t) {
    if (typeof t != "boolean") throw on("autoplay must be a boolean");
  }
  _requireValidPlaybackOptions(t) {
    t.direction && this._requireValidDirection(t.direction), t.intermission && this._requireValidIntermission(t.intermission), t.loop && this._requireValidLoop(t.loop), t.speed && this._requireValidSpeed(t.speed);
  }
};

export {
  on,
  un,
  ln,
  cn,
  kr,
  fn,
  hn,
  dn,
  pn,
  W2 as W,
  K2 as K,
  G2 as G,
  u2 as u,
  Q,
  j2 as j
};
//# sourceMappingURL=chunk-6TMCHNMY.js.map
