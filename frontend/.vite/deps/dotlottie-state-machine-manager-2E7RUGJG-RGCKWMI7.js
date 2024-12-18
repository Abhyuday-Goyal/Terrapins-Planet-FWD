import {
  dn,
  on,
  u,
  un
} from "./chunk-6TMCHNMY.js";
import "./chunk-USPGI4ZR.js";
import {
  __publicField
} from "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/dotlottie-state-machine-manager-2E7RUGJG.js
var v = function() {
  return v = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, v.apply(this, arguments);
};
function ct(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function b(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return { next: function() {
    return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
  } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function _(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function L(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++) (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var N;
(function(e) {
  e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure", e.Choose = "xstate.choose";
})(N || (N = {}));
var K;
(function(e) {
  e.Parent = "#_parent", e.Internal = "#_internal";
})(K || (K = {}));
var At = N.Start;
var lt = N.Stop;
var et = N.Raise;
var it = N.Send;
var Ft = N.Cancel;
var Ee = N.NullEvent;
var ne = N.Assign;
N.After;
N.DoneState;
var Vt = N.Log;
var _e = N.Init;
var Pt = N.Invoke;
N.ErrorExecution;
var ie = N.ErrorPlatform;
var oe = N.ErrorCustom;
var Lt = N.Update;
var Te = N.Choose;
var Oe = N.Pure;
var zt = ".";
var ae = {};
var Jt = "xstate.guard";
var Ae = "";
var Gt;
function It(e, t, r) {
  r === void 0 && (r = zt);
  var n = dt(e, r), o = dt(t, r);
  return T(o) ? T(n) ? o === n : false : T(n) ? n in o : Object.keys(n).every(function(i) {
    return i in o ? It(n[i], o[i]) : false;
  });
}
function qt(e) {
  try {
    return T(e) || typeof e == "number" ? "".concat(e) : e.type;
  } catch {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function Yt(e, t) {
  try {
    return H(e) ? e : e.toString().split(t);
  } catch {
    throw new Error("'".concat(e, "' is not a valid state path."));
  }
}
function dr(e) {
  return typeof e == "object" && "value" in e && "context" in e && "event" in e && "_event" in e;
}
function dt(e, t) {
  if (dr(e)) return e.value;
  if (H(e)) return Nt(e);
  if (typeof e != "string") return e;
  var r = Yt(e, t);
  return Nt(r);
}
function Nt(e) {
  if (e.length === 1) return e[0];
  for (var t = {}, r = t, n = 0; n < e.length - 1; n++) n === e.length - 2 ? r[e[n]] = e[n + 1] : (r[e[n]] = {}, r = r[e[n]]);
  return t;
}
function ht(e, t) {
  for (var r = {}, n = Object.keys(e), o = 0; o < n.length; o++) {
    var i = n[o];
    r[i] = t(e[i], i, e, o);
  }
  return r;
}
function se(e, t, r) {
  var n, o, i = {};
  try {
    for (var a = b(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var u2 = s.value, f = e[u2];
      r(f) && (i[u2] = t(f, u2, e));
    }
  } catch (l) {
    n = { error: l };
  } finally {
    try {
      s && !s.done && (o = a.return) && o.call(a);
    } finally {
      if (n) throw n.error;
    }
  }
  return i;
}
var Pe = function(e) {
  return function(t) {
    var r, n, o = t;
    try {
      for (var i = b(e), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        o = o[s];
      }
    } catch (u2) {
      r = { error: u2 };
    } finally {
      try {
        a && !a.done && (n = i.return) && n.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
    return o;
  };
};
function Le(e, t) {
  return function(r) {
    var n, o, i = r;
    try {
      for (var a = b(e), s = a.next(); !s.done; s = a.next()) {
        var u2 = s.value;
        i = i[t][u2];
      }
    } catch (f) {
      n = { error: f };
    } finally {
      try {
        s && !s.done && (o = a.return) && o.call(a);
      } finally {
        if (n) throw n.error;
      }
    }
    return i;
  };
}
function jt(e) {
  if (!e) return [[]];
  if (T(e)) return [[e]];
  var t = M(Object.keys(e).map(function(r) {
    var n = e[r];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[r]] : jt(e[r]).map(function(o) {
      return [r].concat(o);
    });
  }));
  return t;
}
function M(e) {
  var t;
  return (t = []).concat.apply(t, L([], _(e), false));
}
function Ne(e) {
  return H(e) ? e : [e];
}
function z(e) {
  return e === void 0 ? [] : Ne(e);
}
function ot(e, t, r) {
  var n, o;
  if (A(e)) return e(t, r.data);
  var i = {};
  try {
    for (var a = b(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var u2 = s.value, f = e[u2];
      A(f) ? i[u2] = f(t, r.data) : i[u2] = f;
    }
  } catch (l) {
    n = { error: l };
  } finally {
    try {
      s && !s.done && (o = a.return) && o.call(a);
    } finally {
      if (n) throw n.error;
    }
  }
  return i;
}
function Ie(e) {
  return /^(done|error)\./.test(e);
}
function ue(e) {
  return !!(e instanceof Promise || e !== null && (A(e) || typeof e == "object") && A(e.then));
}
function je(e) {
  return e !== null && typeof e == "object" && "transition" in e && typeof e.transition == "function";
}
function De(e, t) {
  var r, n, o = _([[], []], 2), i = o[0], a = o[1];
  try {
    for (var s = b(e), u2 = s.next(); !u2.done; u2 = s.next()) {
      var f = u2.value;
      t(f) ? i.push(f) : a.push(f);
    }
  } catch (l) {
    r = { error: l };
  } finally {
    try {
      u2 && !u2.done && (n = s.return) && n.call(s);
    } finally {
      if (r) throw r.error;
    }
  }
  return [i, a];
}
function Me(e, t) {
  return ht(e.states, function(r, n) {
    if (r) {
      var o = (T(t) ? void 0 : t[n]) || (r ? r.current : void 0);
      if (o) return { current: o, states: Me(r, o) };
    }
  });
}
function Re(e, t) {
  return { current: t, states: Me(e, t) };
}
function fe(e, t, r, n) {
  var o = e && r.reduce(function(i, a) {
    var s, u2, f = a.assignment, l = { state: n, action: a, _event: t }, d = {};
    if (A(f)) d = f(i, t.data, l);
    else try {
      for (var c = b(Object.keys(f)), h = c.next(); !h.done; h = c.next()) {
        var y = h.value, p = f[y];
        d[y] = A(p) ? p(i, t.data, l) : p;
      }
    } catch (S) {
      s = { error: S };
    } finally {
      try {
        h && !h.done && (u2 = c.return) && u2.call(c);
      } finally {
        if (s) throw s.error;
      }
    }
    return Object.assign({}, i, d);
  }, e);
  return o;
}
var k = function() {
};
function H(e) {
  return Array.isArray(e);
}
function A(e) {
  return typeof e == "function";
}
function T(e) {
  return typeof e == "string";
}
function Bt(e, t) {
  if (e) return T(e) ? { type: Jt, name: e, predicate: t ? t[e] : void 0 } : A(e) ? { type: Jt, name: e.name, predicate: e } : e;
}
function Ce(e) {
  try {
    return "subscribe" in e && A(e.subscribe);
  } catch {
    return false;
  }
}
var B = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
Gt = {}, Gt[B] = function() {
  return this;
}, Gt[Symbol.observable] = function() {
  return this;
}, Gt;
function Q(e) {
  return !!e && "__xstatenode" in e;
}
function ke(e) {
  return !!e && typeof e.send == "function";
}
function vt(e, t) {
  return T(e) || typeof e == "number" ? v({ type: e }, t) : e;
}
function $(e, t) {
  if (!T(e) && "$$type" in e && e.$$type === "scxml") return e;
  var r = vt(e);
  return v({ name: r.type, data: r, $$type: "scxml", type: "external" }, t);
}
function at(e, t) {
  var r = Ne(t).map(function(n) {
    return typeof n > "u" || typeof n == "string" || Q(n) ? { target: n, event: e } : v(v({}, n), { event: e });
  });
  return r;
}
function Ue(e) {
  if (!(e === void 0 || e === Ae)) return z(e);
}
function Qt(e, t, r, n, o) {
  var i = e.options.guards, a = { state: o, cond: t, _event: n };
  if (t.type === Jt) return ((i == null ? void 0 : i[t.name]) || t.predicate)(r, n.data, a);
  var s = i == null ? void 0 : i[t.type];
  if (!s) throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
  return s(r, n.data, a);
}
function Wt(e) {
  return typeof e == "string" ? { type: e } : e;
}
function pt(e, t, r) {
  var n = function() {
  }, o = typeof e == "object", i = o ? e : null;
  return { next: ((o ? e.next : e) || n).bind(i), error: ((o ? e.error : t) || n).bind(i), complete: ((o ? e.complete : r) || n).bind(i) };
}
function Dt(e, t) {
  return "".concat(e, ":invocation[").concat(t, "]");
}
function Mt(e) {
  return (e.type === et || e.type === it && e.to === K.Internal) && typeof e.delay != "number";
}
var Z = $({ type: _e });
function Kt(e, t) {
  return t && t[e] || void 0;
}
function mt(e, t) {
  var r;
  if (T(e) || typeof e == "number") {
    var n = Kt(e, t);
    A(n) ? r = { type: e, exec: n } : n ? r = n : r = { type: e, exec: void 0 };
  } else if (A(e)) r = { type: e.name || e.toString(), exec: e };
  else {
    var n = Kt(e.type, t);
    if (A(n)) r = v(v({}, e), { exec: n });
    else if (n) {
      var o = n.type || e.type;
      r = v(v(v({}, n), e), { type: o });
    } else r = e;
  }
  return r;
}
var W = function(e, t) {
  if (!e) return [];
  var r = H(e) ? e : [e];
  return r.map(function(n) {
    return mt(n, t);
  });
};
function Ht(e) {
  var t = mt(e);
  return v(v({ id: T(e) ? e : t.id }, t), { type: t.type });
}
function Xe(e, t) {
  return { type: et, event: typeof e == "function" ? e : vt(e), delay: t ? t.delay : void 0, id: t == null ? void 0 : t.id };
}
function hr(e, t, r, n) {
  var o = { _event: r }, i = $(A(e.event) ? e.event(t, r.data, o) : e.event), a;
  if (T(e.delay)) {
    var s = n && n[e.delay];
    a = A(s) ? s(t, r.data, o) : s;
  } else a = A(e.delay) ? e.delay(t, r.data, o) : e.delay;
  return v(v({}, e), { type: et, _event: i, delay: a });
}
function Fe(e, t) {
  return { to: t ? t.to : void 0, type: it, event: A(e) ? e : vt(e), delay: t ? t.delay : void 0, id: t && t.id !== void 0 ? t.id : A(e) ? e.name : qt(e) };
}
function vr(e, t, r, n) {
  var o = { _event: r }, i = $(A(e.event) ? e.event(t, r.data, o) : e.event), a;
  if (T(e.delay)) {
    var s = n && n[e.delay];
    a = A(s) ? s(t, r.data, o) : s;
  } else a = A(e.delay) ? e.delay(t, r.data, o) : e.delay;
  var u2 = A(e.to) ? e.to(t, r.data, o) : e.to;
  return v(v({}, e), { to: u2, _event: i, event: i.data, delay: a });
}
var pr = function(e, t, r) {
  return v(v({}, e), { value: T(e.expr) ? e.expr : e.expr(t, r.data, { _event: r }) });
};
var Ve = function(e) {
  return { type: Ft, sendId: e };
};
function ze(e) {
  var t = Ht(e);
  return { type: N.Start, activity: t, exec: void 0 };
}
function Je(e) {
  var t = A(e) ? e : Ht(e);
  return { type: N.Stop, activity: t, exec: void 0 };
}
function yr(e, t, r) {
  var n = A(e.activity) ? e.activity(t, r.data) : e.activity, o = typeof n == "string" ? { id: n } : n, i = { type: N.Stop, activity: o };
  return i;
}
function Ge(e, t) {
  var r = t ? "#".concat(t) : "";
  return "".concat(N.After, "(").concat(e, ")").concat(r);
}
function Rt(e, t) {
  var r = "".concat(N.DoneState, ".").concat(e), n = { type: r, data: t };
  return n.toString = function() {
    return r;
  }, n;
}
function gt(e, t) {
  var r = "".concat(N.DoneInvoke, ".").concat(e), n = { type: r, data: t };
  return n.toString = function() {
    return r;
  }, n;
}
function st(e, t) {
  var r = "".concat(N.ErrorPlatform, ".").concat(e), n = { type: r, data: t };
  return n.toString = function() {
    return r;
  }, n;
}
var mr = function(e) {
  var t, r, n = [];
  try {
    for (var o = b(e), i = o.next(); !i.done; i = o.next()) for (var a = i.value, s = 0; s < a.actions.length; ) {
      if (a.actions[s].type === ne) {
        n.push(a.actions[s]), a.actions.splice(s, 1);
        continue;
      }
      s++;
    }
  } catch (u2) {
    t = { error: u2 };
  } finally {
    try {
      i && !i.done && (r = o.return) && r.call(o);
    } finally {
      if (t) throw t.error;
    }
  }
  return n;
};
function yt(e, t, r, n, o, i, a) {
  a === void 0 && (a = false);
  var s = a ? [] : mr(o), u2 = s.length ? fe(r, n, s, t) : r, f = a ? [r] : void 0, l = [];
  function d(y, p) {
    var S;
    switch (p.type) {
      case et: {
        var m = hr(p, u2, n, e.options.delays);
        return i && typeof m.delay == "number" && i(m, u2, n), m;
      }
      case it:
        var g = vr(p, u2, n, e.options.delays);
        return i && g.to !== K.Internal && (y === "entry" ? l.push(g) : i(g, u2, n)), g;
      case Vt: {
        var x = pr(p, u2, n);
        return i == null || i(x, u2, n), x;
      }
      case Te: {
        var R = p, I = (S = R.conds.find(function(nt) {
          var tt = Bt(nt.cond, e.options.guards);
          return !tt || Qt(e, tt, u2, n, i ? void 0 : t);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!I) return [];
        var P = _(yt(e, t, u2, n, [{ type: y, actions: W(z(I), e.options.actions) }], i, a), 2), D = P[0], O = P[1];
        return u2 = O, f == null || f.push(u2), D;
      }
      case Oe: {
        var I = p.get(u2, n.data);
        if (!I) return [];
        var U = _(yt(e, t, u2, n, [{ type: y, actions: W(z(I), e.options.actions) }], i, a), 2), E = U[0], C = U[1];
        return u2 = C, f == null || f.push(u2), E;
      }
      case lt: {
        var x = yr(p, u2, n);
        return i == null || i(x, r, n), x;
      }
      case ne: {
        u2 = fe(u2, n, [p], i ? void 0 : t), f == null || f.push(u2);
        break;
      }
      default:
        var F = mt(p, e.options.actions), V = F.exec;
        if (i) i(F, u2, n);
        else if (V && f) {
          var Ot = f.length - 1, ee = v(v({}, F), { exec: function(nt) {
            for (var tt = [], G = 1; G < arguments.length; G++) tt[G - 1] = arguments[G];
            V.apply(void 0, L([f[Ot]], _(tt), false));
          } });
          F = ee;
        }
        return F;
    }
  }
  function c(y) {
    var p, S, m = [];
    try {
      for (var g = b(y.actions), w = g.next(); !w.done; w = g.next()) {
        var x = w.value, R = d(y.type, x);
        R && (m = m.concat(R));
      }
    } catch (I) {
      p = { error: I };
    } finally {
      try {
        w && !w.done && (S = g.return) && S.call(g);
      } finally {
        if (p) throw p.error;
      }
    }
    return l.forEach(function(I) {
      i(I, u2, n);
    }), l.length = 0, m;
  }
  var h = M(o.map(c));
  return [h, u2];
}
var rt = function(e, t) {
  var r = t(e);
  return r;
};
function Ye(e) {
  var t;
  return t = { id: e, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: e };
  } }, t[B] = function() {
    return this;
  }, t;
}
function Be(e, t, r, n) {
  var o, i = Wt(e.src), a = (o = t == null ? void 0 : t.options.services) === null || o === void 0 ? void 0 : o[i.type], s = e.data ? ot(e.data, r, n) : void 0, u2 = a ? ce(a, e.id, s) : Ye(e.id);
  return u2.meta = e, u2;
}
function ce(e, t, r) {
  var n = Ye(t);
  if (n.deferred = true, Q(e)) {
    var o = n.state = rt(void 0, function() {
      return (r ? e.withContext(r) : e).initialState;
    });
    n.getSnapshot = function() {
      return o;
    };
  }
  return n;
}
function gr(e) {
  try {
    return typeof e.send == "function";
  } catch {
    return false;
  }
}
function Qe(e) {
  return gr(e) && "id" in e;
}
function We(e) {
  var t;
  return v((t = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, t[B] = function() {
    return this;
  }, t), e);
}
var Ct = function(e) {
  return e.type === "atomic" || e.type === "final";
};
function de(e) {
  return Object.keys(e.states).map(function(t) {
    return e.states[t];
  });
}
function St(e) {
  return de(e).filter(function(t) {
    return t.type !== "history";
  });
}
function he(e) {
  var t = [e];
  return Ct(e) ? t : t.concat(M(St(e).map(he)));
}
function wt(e, t) {
  var r, n, o, i, a, s, u2, f, l = new Set(e), d = le(l), c = new Set(t);
  try {
    for (var h = b(c), y = h.next(); !y.done; y = h.next()) for (var p = y.value, S = p.parent; S && !c.has(S); ) c.add(S), S = S.parent;
  } catch (O) {
    r = { error: O };
  } finally {
    try {
      y && !y.done && (n = h.return) && n.call(h);
    } finally {
      if (r) throw r.error;
    }
  }
  var m = le(c);
  try {
    for (var g = b(c), w = g.next(); !w.done; w = g.next()) {
      var p = w.value;
      if (p.type === "compound" && (!m.get(p) || !m.get(p).length)) d.get(p) ? d.get(p).forEach(function(U) {
        return c.add(U);
      }) : p.initialStateNodes.forEach(function(U) {
        return c.add(U);
      });
      else if (p.type === "parallel") try {
        for (var x = (a = void 0, b(St(p))), R = x.next(); !R.done; R = x.next()) {
          var I = R.value;
          c.has(I) || (c.add(I), d.get(I) ? d.get(I).forEach(function(U) {
            return c.add(U);
          }) : I.initialStateNodes.forEach(function(U) {
            return c.add(U);
          }));
        }
      } catch (U) {
        a = { error: U };
      } finally {
        try {
          R && !R.done && (s = x.return) && s.call(x);
        } finally {
          if (a) throw a.error;
        }
      }
    }
  } catch (O) {
    o = { error: O };
  } finally {
    try {
      w && !w.done && (i = g.return) && i.call(g);
    } finally {
      if (o) throw o.error;
    }
  }
  try {
    for (var P = b(c), D = P.next(); !D.done; D = P.next()) for (var p = D.value, S = p.parent; S && !c.has(S); ) c.add(S), S = S.parent;
  } catch (O) {
    u2 = { error: O };
  } finally {
    try {
      D && !D.done && (f = P.return) && f.call(P);
    } finally {
      if (u2) throw u2.error;
    }
  }
  return c;
}
function Ke(e, t) {
  var r = t.get(e);
  if (!r) return {};
  if (e.type === "compound") {
    var n = r[0];
    if (n) {
      if (Ct(n)) return n.key;
    } else return {};
  }
  var o = {};
  return r.forEach(function(i) {
    o[i.key] = Ke(i, t);
  }), o;
}
function le(e) {
  var t, r, n = /* @__PURE__ */ new Map();
  try {
    for (var o = b(e), i = o.next(); !i.done; i = o.next()) {
      var a = i.value;
      n.has(a) || n.set(a, []), a.parent && (n.has(a.parent) || n.set(a.parent, []), n.get(a.parent).push(a));
    }
  } catch (s) {
    t = { error: s };
  } finally {
    try {
      i && !i.done && (r = o.return) && r.call(o);
    } finally {
      if (t) throw t.error;
    }
  }
  return n;
}
function He(e, t) {
  var r = wt([e], t);
  return Ke(e, le(r));
}
function xt(e, t) {
  return Array.isArray(e) ? e.some(function(r) {
    return r === t;
  }) : e instanceof Set ? e.has(t) : false;
}
function Ze(e) {
  return L([], _(new Set(M(L([], _(e.map(function(t) {
    return t.ownEvents;
  })), false)))), false);
}
function kt(e, t) {
  return t.type === "compound" ? St(t).some(function(r) {
    return r.type === "final" && xt(e, r);
  }) : t.type === "parallel" ? St(t).every(function(r) {
    return kt(e, r);
  }) : false;
}
function tr(e) {
  return e === void 0 && (e = []), e.reduce(function(t, r) {
    return r.meta !== void 0 && (t[r.id] = r.meta), t;
  }, {});
}
function ve(e) {
  return new Set(M(e.map(function(t) {
    return t.tags;
  })));
}
function pe(e, t) {
  if (e === t) return true;
  if (e === void 0 || t === void 0) return false;
  if (T(e) || T(t)) return e === t;
  var r = Object.keys(e), n = Object.keys(t);
  return r.length === n.length && r.every(function(o) {
    return pe(e[o], t[o]);
  });
}
function er(e) {
  return typeof e != "object" || e === null ? false : "value" in e && "_event" in e;
}
function rr(e, t) {
  var r = e.exec, n = v(v({}, e), { exec: r !== void 0 ? function() {
    return r(t.context, t.event, { action: e, state: t, _event: t._event });
  } : void 0 });
  return n;
}
var J = function() {
  function e(t) {
    var r = this, n;
    this.actions = [], this.activities = ae, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || ae, this.meta = tr(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (n = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Ze(r.configuration);
    } });
  }
  return e.from = function(t, r) {
    if (t instanceof e) return t.context !== r ? new e({ value: t.value, context: r, _event: t._event, _sessionid: null, historyValue: t.historyValue, history: t.history, actions: [], activities: t.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : t;
    var n = Z;
    return new e({ value: t, context: r, _event: n, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, e.create = function(t) {
    return new e(t);
  }, e.inert = function(t, r) {
    if (t instanceof e) {
      if (!t.actions.length) return t;
      var n = Z;
      return new e({ value: t.value, context: r, _event: n, _sessionid: null, historyValue: t.historyValue, history: t.history, activities: t.activities, configuration: t.configuration, transitions: [], children: {} });
    }
    return e.from(t, r);
  }, e.prototype.toStrings = function(t, r) {
    var n = this;
    if (t === void 0 && (t = this.value), r === void 0 && (r = "."), T(t)) return [t];
    var o = Object.keys(t);
    return o.concat.apply(o, L([], _(o.map(function(i) {
      return n.toStrings(t[i], r).map(function(a) {
        return i + r + a;
      });
    })), false));
  }, e.prototype.toJSON = function() {
    var t = this;
    t.configuration, t.transitions;
    var r = t.tags;
    t.machine;
    var n = ct(t, ["configuration", "transitions", "tags", "machine"]);
    return v(v({}, n), { tags: Array.from(r) });
  }, e.prototype.matches = function(t) {
    return It(t, this.value);
  }, e.prototype.hasTag = function(t) {
    return this.tags.has(t);
  }, e.prototype.can = function(t) {
    var r;
    k(!!this.machine);
    var n = (r = this.machine) === null || r === void 0 ? void 0 : r.getTransitionData(this, t);
    return !!(n != null && n.transitions.length) && n.transitions.some(function(o) {
      return o.target !== void 0 || o.actions.length;
    });
  }, e;
}();
var Sr = { deferEvents: false };
var ye = function() {
  function e(t) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = v(v({}, Sr), t);
  }
  return e.prototype.initialize = function(t) {
    if (this.initialized = true, t) {
      if (!this.options.deferEvents) {
        this.schedule(t);
        return;
      }
      this.process(t);
    }
    this.flushEvents();
  }, e.prototype.schedule = function(t) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(t);
      return;
    }
    if (this.queue.length !== 0) throw new Error("Event queue should be empty when it is not processing events");
    this.process(t), this.flushEvents();
  }, e.prototype.clear = function() {
    this.queue = [];
  }, e.prototype.flushEvents = function() {
    for (var t = this.queue.shift(); t; ) this.process(t), t = this.queue.shift();
  }, e.prototype.process = function(t) {
    this.processingEvent = true;
    try {
      t();
    } catch (r) {
      throw this.clear(), r;
    } finally {
      this.processingEvent = false;
    }
  }, e;
}();
var me = /* @__PURE__ */ new Map();
var wr = 0;
var bt = { bookId: function() {
  return "x:".concat(wr++);
}, register: function(e, t) {
  return me.set(e, t), e;
}, get: function(e) {
  return me.get(e);
}, free: function(e) {
  me.delete(e);
} };
function Zt() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
}
function xr() {
  var e = Zt();
  if (e && "__xstate__" in e) return e.__xstate__;
}
function nr(e) {
  if (Zt()) {
    var t = xr();
    t && t.register(e);
  }
}
function ir(e, t) {
  t === void 0 && (t = {});
  var r = e.initialState, n = /* @__PURE__ */ new Set(), o = [], i = false, a = function() {
    if (!i) {
      for (i = true; o.length > 0; ) {
        var f = o.shift();
        r = e.transition(r, f, u2), n.forEach(function(l) {
          return l.next(r);
        });
      }
      i = false;
    }
  }, s = We({ id: t.id, send: function(f) {
    o.push(f), a();
  }, getSnapshot: function() {
    return r;
  }, subscribe: function(f, l, d) {
    var c = pt(f, l, d);
    return n.add(c), c.next(r), { unsubscribe: function() {
      n.delete(c);
    } };
  } }), u2 = { parent: t.parent, self: s, id: t.id || "anonymous", observers: n };
  return r = e.start ? e.start(u2) : r, s;
}
var br = { sync: false, autoForward: false };
var X;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(X || (X = {}));
var or = function() {
  function e(t, r) {
    r === void 0 && (r = e.defaultOptions);
    var n = this;
    this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = X.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(l, d) {
      if (H(l)) return n.batch(l), n.state;
      var c = $(vt(l, d));
      if (n.status === X.Stopped) return n.state;
      if (n.status !== X.Running && !n.options.deferEvents) throw new Error('Event "'.concat(c.name, '" was sent to uninitialized service "').concat(n.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(c.data)));
      return n.scheduler.schedule(function() {
        n.forward(c);
        var h = n._nextState(c);
        n.update(h, c);
      }), n._state;
    }, this.sendTo = function(l, d, c) {
      var h = n.parent && (d === K.Parent || n.parent.id === d), y = h ? n.parent : T(d) ? d === K.Internal ? n : n.children.get(d) || bt.get(d) : ke(d) ? d : void 0;
      if (!y) {
        if (!h) throw new Error("Unable to send event to child '".concat(d, "' from service '").concat(n.id, "'."));
        return;
      }
      if ("machine" in y) {
        if (n.status !== X.Stopped || n.parent !== y || n.state.done) {
          var p = v(v({}, l), { name: l.name === oe ? "".concat(st(n.id)) : l.name, origin: n.sessionId });
          !c && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([y, p]) : y.send(p);
        }
      } else !c && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([y, l.data]) : y.send(l.data);
    }, this._exec = function(l, d, c, h) {
      h === void 0 && (h = n.machine.options.actions);
      var y = l.exec || Kt(l.type, h), p = A(y) ? y : y ? y.exec : l.exec;
      if (p) try {
        return p(d, c.data, n.machine.config.predictableActionArguments ? { action: l, _event: c } : { action: l, state: n.state, _event: c });
      } catch (V) {
        throw n.parent && n.parent.send({ type: "xstate.error", data: V }), V;
      }
      switch (l.type) {
        case et: {
          var S = l;
          n.defer(S);
          break;
        }
        case it:
          var m = l;
          if (typeof m.delay == "number") {
            n.defer(m);
            return;
          } else m.to ? n.sendTo(m._event, m.to, c === Z) : n.send(m._event);
          break;
        case Ft:
          n.cancel(l.sendId);
          break;
        case At: {
          if (n.status !== X.Running) return;
          var g = l.activity;
          if (!n.machine.config.predictableActionArguments && !n.state.activities[g.id || g.type]) break;
          if (g.type === N.Invoke) {
            var w = Wt(g.src), x = n.machine.options.services ? n.machine.options.services[w.type] : void 0, R = g.id, I = g.data;
            var P = "autoForward" in g ? g.autoForward : !!g.forward;
            if (!x) {
              return;
            }
            var D = I ? ot(I, d, c) : void 0;
            if (typeof x == "string") return;
            var O = A(x) ? x(d, c.data, { data: D, src: w, meta: g.meta }) : x;
            if (!O) return;
            var U = void 0;
            Q(O) && (O = D ? O.withContext(D) : O, U = { autoForward: P }), n.spawn(O, R, U);
          } else n.spawnActivity(g);
          break;
        }
        case lt: {
          n.stopChild(l.activity.id);
          break;
        }
        case Vt:
          var E = l, C = E.label, F = E.value;
          C ? n.logger(C, F) : n.logger(F);
          break;
      }
    };
    var o = v(v({}, e.defaultOptions), r), i = o.clock, a = o.logger, s = o.parent, u2 = o.id, f = u2 !== void 0 ? u2 : t.id;
    this.id = f, this.logger = a, this.clock = i, this.parent = s, this.options = o, this.scheduler = new ye({ deferEvents: this.options.deferEvents }), this.sessionId = bt.bookId();
  }
  return Object.defineProperty(e.prototype, "initialState", { get: function() {
    var t = this;
    return this._initialState ? this._initialState : rt(this, function() {
      return t._initialState = t.machine.initialState, t._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "state", { get: function() {
    return this._state;
  }, enumerable: false, configurable: true }), e.prototype.execute = function(t, r) {
    var n, o;
    try {
      for (var i = b(t.actions), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        this.exec(s, t, r);
      }
    } catch (u2) {
      n = { error: u2 };
    } finally {
      try {
        a && !a.done && (o = i.return) && o.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
  }, e.prototype.update = function(t, r) {
    var n, o, i, a, s, u2, f, l, d = this;
    if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || r === Z) && this.options.execute) this.execute(this.state);
    else for (var c = void 0; c = this._outgoingQueue.shift(); ) c[0].send(c[1]);
    if (this.children.forEach(function(O) {
      d.state.children[O.id] = O;
    }), this.devTools && this.devTools.send(r.data, t), t.event) try {
      for (var h = b(this.eventListeners), y = h.next(); !y.done; y = h.next()) {
        var p = y.value;
        p(t.event);
      }
    } catch (O) {
      n = { error: O };
    } finally {
      try {
        y && !y.done && (o = h.return) && o.call(h);
      } finally {
        if (n) throw n.error;
      }
    }
    try {
      for (var S = b(this.listeners), m = S.next(); !m.done; m = S.next()) {
        var p = m.value;
        p(t, t.event);
      }
    } catch (O) {
      i = { error: O };
    } finally {
      try {
        m && !m.done && (a = S.return) && a.call(S);
      } finally {
        if (i) throw i.error;
      }
    }
    try {
      for (var g = b(this.contextListeners), w = g.next(); !w.done; w = g.next()) {
        var x = w.value;
        x(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (O) {
      s = { error: O };
    } finally {
      try {
        w && !w.done && (u2 = g.return) && u2.call(g);
      } finally {
        if (s) throw s.error;
      }
    }
    if (this.state.done) {
      var R = t.configuration.find(function(O) {
        return O.type === "final" && O.parent === d.machine;
      }), I = R && R.doneData ? ot(R.doneData, t.context, r) : void 0;
      this._doneEvent = gt(this.id, I);
      try {
        for (var P = b(this.doneListeners), D = P.next(); !D.done; D = P.next()) {
          var p = D.value;
          p(this._doneEvent);
        }
      } catch (O) {
        f = { error: O };
      } finally {
        try {
          D && !D.done && (l = P.return) && l.call(P);
        } finally {
          if (f) throw f.error;
        }
      }
      this._stop(), this._stopChildren(), bt.free(this.sessionId);
    }
  }, e.prototype.onTransition = function(t) {
    return this.listeners.add(t), this.status === X.Running && t(this.state, this.state.event), this;
  }, e.prototype.subscribe = function(t, r, n) {
    var o = this, i = pt(t, r, n);
    this.listeners.add(i.next), this.status !== X.NotStarted && i.next(this.state);
    var a = function() {
      o.doneListeners.delete(a), o.stopListeners.delete(a), i.complete();
    };
    return this.status === X.Stopped ? i.complete() : (this.onDone(a), this.onStop(a)), { unsubscribe: function() {
      o.listeners.delete(i.next), o.doneListeners.delete(a), o.stopListeners.delete(a);
    } };
  }, e.prototype.onEvent = function(t) {
    return this.eventListeners.add(t), this;
  }, e.prototype.onSend = function(t) {
    return this.sendListeners.add(t), this;
  }, e.prototype.onChange = function(t) {
    return this.contextListeners.add(t), this;
  }, e.prototype.onStop = function(t) {
    return this.stopListeners.add(t), this;
  }, e.prototype.onDone = function(t) {
    return this.status === X.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
  }, e.prototype.off = function(t) {
    return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
  }, e.prototype.start = function(t) {
    var r = this;
    if (this.status === X.Running) return this;
    this.machine._init(), bt.register(this.sessionId, this), this.initialized = true, this.status = X.Running;
    var n = t === void 0 ? this.initialState : rt(this, function() {
      return er(t) ? r.machine.resolveState(t) : r.machine.resolveState(J.from(t, r.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      r.update(n, Z);
    }), this;
  }, e.prototype._stopChildren = function() {
    this.children.forEach(function(t) {
      A(t.stop) && t.stop();
    }), this.children.clear();
  }, e.prototype._stop = function() {
    var t, r, n, o, i, a, s, u2, f, l;
    try {
      for (var d = b(this.listeners), c = d.next(); !c.done; c = d.next()) {
        var h = c.value;
        this.listeners.delete(h);
      }
    } catch (P) {
      t = { error: P };
    } finally {
      try {
        c && !c.done && (r = d.return) && r.call(d);
      } finally {
        if (t) throw t.error;
      }
    }
    try {
      for (var y = b(this.stopListeners), p = y.next(); !p.done; p = y.next()) {
        var h = p.value;
        h(), this.stopListeners.delete(h);
      }
    } catch (P) {
      n = { error: P };
    } finally {
      try {
        p && !p.done && (o = y.return) && o.call(y);
      } finally {
        if (n) throw n.error;
      }
    }
    try {
      for (var S = b(this.contextListeners), m = S.next(); !m.done; m = S.next()) {
        var h = m.value;
        this.contextListeners.delete(h);
      }
    } catch (P) {
      i = { error: P };
    } finally {
      try {
        m && !m.done && (a = S.return) && a.call(S);
      } finally {
        if (i) throw i.error;
      }
    }
    try {
      for (var g = b(this.doneListeners), w = g.next(); !w.done; w = g.next()) {
        var h = w.value;
        this.doneListeners.delete(h);
      }
    } catch (P) {
      s = { error: P };
    } finally {
      try {
        w && !w.done && (u2 = g.return) && u2.call(g);
      } finally {
        if (s) throw s.error;
      }
    }
    if (!this.initialized) return this;
    this.initialized = false, this.status = X.Stopped, this._initialState = void 0;
    try {
      for (var x = b(Object.keys(this.delayedEventsMap)), R = x.next(); !R.done; R = x.next()) {
        var I = R.value;
        this.clock.clearTimeout(this.delayedEventsMap[I]);
      }
    } catch (P) {
      f = { error: P };
    } finally {
      try {
        R && !R.done && (l = x.return) && l.call(x);
      } finally {
        if (f) throw f.error;
      }
    }
    this.scheduler.clear(), this.scheduler = new ye({ deferEvents: this.options.deferEvents });
  }, e.prototype.stop = function() {
    var t = this, r = this.scheduler;
    return this._stop(), r.schedule(function() {
      var n = $({ type: "xstate.stop" }), o = rt(t, function() {
        var i = M(L([], _(t.state.configuration), false).sort(function(l, d) {
          return d.order - l.order;
        }).map(function(l) {
          return W(l.onExit, t.machine.options.actions);
        })), a = _(yt(t.machine, t.state, t.state.context, n, [{ type: "exit", actions: i }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), s = a[0], u2 = a[1], f = new J({ value: t.state.value, context: u2, _event: n, _sessionid: t.sessionId, historyValue: void 0, history: t.state, actions: s.filter(function(l) {
          return !Mt(l);
        }), activities: {}, events: [], configuration: [], transitions: [], children: {}, done: t.state.done, tags: t.state.tags, machine: t.machine });
        return f.changed = true, f;
      });
      t.update(o, n), t._stopChildren(), bt.free(t.sessionId);
    }), this;
  }, e.prototype.batch = function(t) {
    var r = this;
    if (this.status === X.NotStarted && this.options.deferEvents) ;
    else if (this.status !== X.Running) throw new Error("".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    if (t.length) {
      var n = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var o, i, a = r.state, s = false, u2 = [], f = function(h) {
          var y = $(h);
          r.forward(y), a = rt(r, function() {
            return r.machine.transition(a, y, void 0, n || void 0);
          }), u2.push.apply(u2, L([], _(r.machine.config.predictableActionArguments ? a.actions : a.actions.map(function(p) {
            return rr(p, a);
          })), false)), s = s || !!a.changed;
        };
        try {
          for (var l = b(t), d = l.next(); !d.done; d = l.next()) {
            var c = d.value;
            f(c);
          }
        } catch (h) {
          o = { error: h };
        } finally {
          try {
            d && !d.done && (i = l.return) && i.call(l);
          } finally {
            if (o) throw o.error;
          }
        }
        a.changed = s, a.actions = u2, r.update(a, $(t[t.length - 1]));
      });
    }
  }, e.prototype.sender = function(t) {
    return this.send.bind(this, t);
  }, e.prototype._nextState = function(t, r) {
    var n = this;
    r === void 0 && (r = !!this.machine.config.predictableActionArguments && this._exec);
    var o = $(t);
    if (o.name.indexOf(ie) === 0 && !this.state.nextEvents.some(function(a) {
      return a.indexOf(ie) === 0;
    })) throw o.data.data;
    var i = rt(this, function() {
      return n.machine.transition(n.state, o, void 0, r || void 0);
    });
    return i;
  }, e.prototype.nextState = function(t) {
    return this._nextState(t, false);
  }, e.prototype.forward = function(t) {
    var r, n;
    try {
      for (var o = b(this.forwardTo), i = o.next(); !i.done; i = o.next()) {
        var a = i.value, s = this.children.get(a);
        if (!s) throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
        s.send(t);
      }
    } catch (u2) {
      r = { error: u2 };
    } finally {
      try {
        i && !i.done && (n = o.return) && n.call(o);
      } finally {
        if (r) throw r.error;
      }
    }
  }, e.prototype.defer = function(t) {
    var r = this, n = this.clock.setTimeout(function() {
      "to" in t && t.to ? r.sendTo(t._event, t.to, true) : r.send(t._event);
    }, t.delay);
    t.id && (this.delayedEventsMap[t.id] = n);
  }, e.prototype.cancel = function(t) {
    this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
  }, e.prototype.exec = function(t, r, n) {
    n === void 0 && (n = this.machine.options.actions), this._exec(t, r.context, r._event, n);
  }, e.prototype.removeChild = function(t) {
    var r;
    this.children.delete(t), this.forwardTo.delete(t), (r = this.state) === null || r === void 0 || delete r.children[t];
  }, e.prototype.stopChild = function(t) {
    var r = this.children.get(t);
    r && (this.removeChild(t), A(r.stop) && r.stop());
  }, e.prototype.spawn = function(t, r, n) {
    if (this.status !== X.Running) return ce(t, r);
    if (ue(t)) return this.spawnPromise(Promise.resolve(t), r);
    if (A(t)) return this.spawnCallback(t, r);
    if (Qe(t)) return this.spawnActor(t, r);
    if (Ce(t)) return this.spawnObservable(t, r);
    if (Q(t)) return this.spawnMachine(t, v(v({}, n), { id: r }));
    if (je(t)) return this.spawnBehavior(t, r);
    throw new Error('Unable to spawn entity "'.concat(r, '" of type "').concat(typeof t, '".'));
  }, e.prototype.spawnMachine = function(t, r) {
    var n = this;
    r === void 0 && (r = {});
    var o = new e(t, v(v({}, this.options), { parent: this, id: r.id || t.id })), i = v(v({}, br), r);
    i.sync && o.onTransition(function(s) {
      n.send(Lt, { state: s, id: o.id });
    });
    var a = o;
    return this.children.set(o.id, a), i.autoForward && this.forwardTo.add(o.id), o.onDone(function(s) {
      n.removeChild(o.id), n.send($(s, { origin: o.id }));
    }).start(), a;
  }, e.prototype.spawnBehavior = function(t, r) {
    var n = ir(t, { id: r, parent: this });
    return this.children.set(r, n), n;
  }, e.prototype.spawnPromise = function(t, r) {
    var n, o = this, i = false, a;
    t.then(function(u2) {
      i || (a = u2, o.removeChild(r), o.send($(gt(r, u2), { origin: r })));
    }, function(u2) {
      if (!i) {
        o.removeChild(r);
        var f = st(r, u2);
        try {
          o.send($(f, { origin: r }));
        } catch (l) {
          o.devTools && o.devTools.send(f, o.state), o.machine.strict && o.stop();
        }
      }
    });
    var s = (n = { id: r, send: function() {
    }, subscribe: function(u2, f, l) {
      var d = pt(u2, f, l), c = false;
      return t.then(function(h) {
        c || (d.next(h), !c && d.complete());
      }, function(h) {
        c || d.error(h);
      }), { unsubscribe: function() {
        return c = true;
      } };
    }, stop: function() {
      i = true;
    }, toJSON: function() {
      return { id: r };
    }, getSnapshot: function() {
      return a;
    } }, n[B] = function() {
      return this;
    }, n);
    return this.children.set(r, s), s;
  }, e.prototype.spawnCallback = function(t, r) {
    var n, o = this, i = false, a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), u2, f = function(c) {
      u2 = c, s.forEach(function(h) {
        return h(c);
      }), !i && o.send($(c, { origin: r }));
    }, l;
    try {
      l = t(f, function(c) {
        a.add(c);
      });
    } catch (c) {
      this.send(st(r, c));
    }
    if (ue(l)) return this.spawnPromise(l, r);
    var d = (n = { id: r, send: function(c) {
      return a.forEach(function(h) {
        return h(c);
      });
    }, subscribe: function(c) {
      var h = pt(c);
      return s.add(h.next), { unsubscribe: function() {
        s.delete(h.next);
      } };
    }, stop: function() {
      i = true, A(l) && l();
    }, toJSON: function() {
      return { id: r };
    }, getSnapshot: function() {
      return u2;
    } }, n[B] = function() {
      return this;
    }, n);
    return this.children.set(r, d), d;
  }, e.prototype.spawnObservable = function(t, r) {
    var n, o = this, i, a = t.subscribe(function(u2) {
      i = u2, o.send($(u2, { origin: r }));
    }, function(u2) {
      o.removeChild(r), o.send($(st(r, u2), { origin: r }));
    }, function() {
      o.removeChild(r), o.send($(gt(r), { origin: r }));
    }), s = (n = { id: r, send: function() {
    }, subscribe: function(u2, f, l) {
      return t.subscribe(u2, f, l);
    }, stop: function() {
      return a.unsubscribe();
    }, getSnapshot: function() {
      return i;
    }, toJSON: function() {
      return { id: r };
    } }, n[B] = function() {
      return this;
    }, n);
    return this.children.set(r, s), s;
  }, e.prototype.spawnActor = function(t, r) {
    return this.children.set(r, t), t;
  }, e.prototype.spawnActivity = function(t) {
    var r = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
    if (!r) {
      return;
    }
    var n = r(this.state.context, t);
    this.spawnEffect(t.id, n);
  }, e.prototype.spawnEffect = function(t, r) {
    var n;
    this.children.set(t, (n = { id: t, send: function() {
    }, subscribe: function() {
      return { unsubscribe: function() {
      } };
    }, stop: r || void 0, getSnapshot: function() {
    }, toJSON: function() {
      return { id: t };
    } }, n[B] = function() {
      return this;
    }, n));
  }, e.prototype.attachDev = function() {
    var t = Zt();
    if (this.options.devTools && t) {
      if (t.__REDUX_DEVTOOLS_EXTENSION__) {
        var r = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(v(v({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, r), { features: v({ jump: false, skip: false }, r ? r.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      nr(this);
    }
  }, e.prototype.toJSON = function() {
    return { id: this.id };
  }, e.prototype[B] = function() {
    return this;
  }, e.prototype.getSnapshot = function() {
    return this.status === X.NotStarted ? this.initialState : this._state;
  }, e.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(t, r) {
    return setTimeout(t, r);
  }, clearTimeout: function(t) {
    return clearTimeout(t);
  } }, logger: console.log.bind(console), devTools: false }, e.interpret = te, e;
}();
function te(e, t) {
  var r = new or(e, t);
  return r;
}
function Er(e) {
  if (typeof e == "string") {
    var t = { type: e };
    return t.toString = function() {
      return e;
    }, t;
  }
  return e;
}
function Ut(e) {
  return v(v({ type: Pt }, e), { toJSON: function() {
    e.onDone, e.onError;
    var t = ct(e, ["onDone", "onError"]);
    return v(v({}, t), { type: Pt, src: Er(e.src) });
  } });
}
var Tt = "";
var ge = "#";
var $t = "*";
var Et = {};
var _t = function(e) {
  return e[0] === ge;
};
var _r = function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
};
var ar = function() {
  function e(t, r, n, o) {
    n === void 0 && (n = "context" in t ? t.context : void 0);
    var i = this, a;
    this.config = t, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(_r(), r), this.parent = o == null ? void 0 : o.parent, this.key = this.config.key || (o == null ? void 0 : o.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : zt), this.id = this.config.id || L([this.machine.key], _(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (a = this.config.schema) !== null && a !== void 0 ? a : {}, this.description = this.config.description, this.initial = this.config.initial, this.states = this.config.states ? ht(this.config.states, function(f, l) {
      var d, c = new e(f, {}, void 0, { parent: i, key: l });
      return Object.assign(i.idMap, v((d = {}, d[c.id] = c, d), c.idMap)), c;
    }) : Et;
    var s = 0;
    function u2(f) {
      var l, d;
      f.order = s++;
      try {
        for (var c = b(de(f)), h = c.next(); !h.done; h = c.next()) {
          var y = h.value;
          u2(y);
        }
      } catch (p) {
        l = { error: p };
      } finally {
        try {
          h && !h.done && (d = c.return) && d.call(c);
        } finally {
          if (l) throw l.error;
        }
      }
    }
    u2(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(f) {
      var l = f.event;
      return l === Tt;
    }) : Tt in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = z(this.config.entry || this.config.onEntry).map(function(f) {
      return mt(f);
    }), this.onExit = z(this.config.exit || this.config.onExit).map(function(f) {
      return mt(f);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = z(this.config.invoke).map(function(f, l) {
      var d, c;
      if (Q(f)) {
        var h = Dt(i.id, l);
        return i.machine.options.services = v((d = {}, d[h] = f, d), i.machine.options.services), Ut({ src: h, id: h });
      } else if (T(f.src)) {
        var h = f.id || Dt(i.id, l);
        return Ut(v(v({}, f), { id: h, src: f.src }));
      } else if (Q(f.src) || A(f.src)) {
        var h = f.id || Dt(i.id, l);
        return i.machine.options.services = v((c = {}, c[h] = f.src, c), i.machine.options.services), Ut(v(v({ id: h }, f), { src: h }));
      } else {
        var y = f.src;
        return Ut(v(v({ id: Dt(i.id, l) }, f), { src: y }));
      }
    }), this.activities = z(this.config.activities).concat(this.invoke).map(function(f) {
      return Ht(f);
    }), this.transition = this.transition.bind(this), this.tags = z(this.config.tags);
  }
  return e.prototype._init = function() {
    this.__cache.transitions || he(this).forEach(function(t) {
      return t.on;
    });
  }, e.prototype.withConfig = function(t, r) {
    var n = this.options, o = n.actions, i = n.activities, a = n.guards, s = n.services, u2 = n.delays;
    return new e(this.config, { actions: v(v({}, o), t.actions), activities: v(v({}, i), t.activities), guards: v(v({}, a), t.guards), services: v(v({}, s), t.services), delays: v(v({}, u2), t.delays) }, r != null ? r : this.context);
  }, e.prototype.withContext = function(t) {
    return new e(this.config, this.options, t);
  }, Object.defineProperty(e.prototype, "context", { get: function() {
    return A(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: ht(this.states, function(t) {
      return t.definition;
    }), on: this.on, transitions: this.transitions, entry: this.onEntry, exit: this.onExit, activities: this.activities || [], meta: this.meta, order: this.order || -1, data: this.doneData, invoke: this.invoke, description: this.description, tags: this.tags };
  }, enumerable: false, configurable: true }), e.prototype.toJSON = function() {
    return this.definition;
  }, Object.defineProperty(e.prototype, "on", { get: function() {
    if (this.__cache.on) return this.__cache.on;
    var t = this.transitions;
    return this.__cache.on = t.reduce(function(r, n) {
      return r[n.eventType] = r[n.eventType] || [], r[n.eventType].push(n), r;
    }, {});
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "after", { get: function() {
    return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "transitions", { get: function() {
    return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
  }, enumerable: false, configurable: true }), e.prototype.getCandidates = function(t) {
    if (this.__cache.candidates[t]) return this.__cache.candidates[t];
    var r = t === Tt, n = this.transitions.filter(function(o) {
      var i = o.eventType === t;
      return r ? i : i || o.eventType === $t;
    });
    return this.__cache.candidates[t] = n, n;
  }, e.prototype.getDelayedTransitions = function() {
    var t = this, r = this.config.after;
    if (!r) return [];
    var n = function(i, a) {
      var s = A(i) ? "".concat(t.id, ":delay[").concat(a, "]") : i, u2 = Ge(s, t.id);
      return t.onEntry.push(Fe(u2, { delay: i })), t.onExit.push(Ve(u2)), u2;
    }, o = H(r) ? r.map(function(i, a) {
      var s = n(i.delay, a);
      return v(v({}, i), { event: s });
    }) : M(Object.keys(r).map(function(i, a) {
      var s = r[i], u2 = T(s) ? { target: s } : s, f = isNaN(+i) ? i : +i, l = n(f, a);
      return z(u2).map(function(d) {
        return v(v({}, d), { event: l, delay: f });
      });
    }));
    return o.map(function(i) {
      var a = i.delay;
      return v(v({}, t.formatTransition(i)), { delay: a });
    });
  }, e.prototype.getStateNodes = function(t) {
    var r, n = this;
    if (!t) return [];
    var o = t instanceof J ? t.value : dt(t, this.delimiter);
    if (T(o)) {
      var i = this.getStateNode(o).initial;
      return i !== void 0 ? this.getStateNodes((r = {}, r[o] = i, r)) : [this, this.states[o]];
    }
    var a = Object.keys(o), s = [this];
    return s.push.apply(s, L([], _(M(a.map(function(u2) {
      return n.getStateNode(u2).getStateNodes(o[u2]);
    }))), false)), s;
  }, e.prototype.handles = function(t) {
    var r = qt(t);
    return this.events.includes(r);
  }, e.prototype.resolveState = function(t) {
    var r = t instanceof J ? t : J.create(t), n = Array.from(wt([], this.getStateNodes(r.value)));
    return new J(v(v({}, r), { value: this.resolve(r.value), configuration: n, done: kt(n, this), tags: ve(n), machine: this.machine }));
  }, e.prototype.transitionLeafNode = function(t, r, n) {
    var o = this.getStateNode(t), i = o.next(r, n);
    return !i || !i.transitions.length ? this.next(r, n) : i;
  }, e.prototype.transitionCompoundNode = function(t, r, n) {
    var o = Object.keys(t), i = this.getStateNode(o[0]), a = i._transition(t[o[0]], r, n);
    return !a || !a.transitions.length ? this.next(r, n) : a;
  }, e.prototype.transitionParallelNode = function(t, r, n) {
    var o, i, a = {};
    try {
      for (var s = b(Object.keys(t)), u2 = s.next(); !u2.done; u2 = s.next()) {
        var f = u2.value, l = t[f];
        if (l) {
          var d = this.getStateNode(f), c = d._transition(l, r, n);
          c && (a[f] = c);
        }
      }
    } catch (m) {
      o = { error: m };
    } finally {
      try {
        u2 && !u2.done && (i = s.return) && i.call(s);
      } finally {
        if (o) throw o.error;
      }
    }
    var h = Object.keys(a).map(function(m) {
      return a[m];
    }), y = M(h.map(function(m) {
      return m.transitions;
    })), p = h.some(function(m) {
      return m.transitions.length > 0;
    });
    if (!p) return this.next(r, n);
    var S = M(Object.keys(a).map(function(m) {
      return a[m].configuration;
    }));
    return { transitions: y, exitSet: M(h.map(function(m) {
      return m.exitSet;
    })), configuration: S, source: r, actions: M(Object.keys(a).map(function(m) {
      return a[m].actions;
    })) };
  }, e.prototype._transition = function(t, r, n) {
    return T(t) ? this.transitionLeafNode(t, r, n) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, r, n) : this.transitionParallelNode(t, r, n);
  }, e.prototype.getTransitionData = function(t, r) {
    return this._transition(t.value, t, $(r));
  }, e.prototype.next = function(t, r) {
    var n, o, i = this, a = r.name, s = [], u2 = [], f;
    try {
      for (var l = b(this.getCandidates(a)), d = l.next(); !d.done; d = l.next()) {
        var c = d.value, h = c.cond, y = c.in, p = t.context, S = y ? T(y) && _t(y) ? t.matches(dt(this.getStateNodeById(y).path, this.delimiter)) : It(dt(y, this.delimiter), Pe(this.path.slice(0, -2))(t.value)) : true, m = false;
        try {
          m = !h || Qt(this.machine, h, p, r, t);
        } catch (x) {
          throw new Error("Unable to evaluate guard '".concat(h.name || h.type, "' in transition for event '").concat(a, "' in state node '").concat(this.id, `':
`).concat(x.message));
        }
        if (m && S) {
          c.target !== void 0 && (u2 = c.target), s.push.apply(s, L([], _(c.actions), false)), f = c;
          break;
        }
      }
    } catch (x) {
      n = { error: x };
    } finally {
      try {
        d && !d.done && (o = l.return) && o.call(l);
      } finally {
        if (n) throw n.error;
      }
    }
    if (f) {
      if (!u2.length) return { transitions: [f], exitSet: [], configuration: t.value ? [this] : [], source: t, actions: s };
      var g = M(u2.map(function(x) {
        return i.getRelativeStateNodes(x, t.historyValue);
      })), w = !!f.internal;
      return { transitions: [f], exitSet: w ? [] : M(u2.map(function(x) {
        return i.getPotentiallyReenteringNodes(x);
      })), configuration: g, source: t, actions: s };
    }
  }, e.prototype.getPotentiallyReenteringNodes = function(t) {
    if (this.order < t.order) return [this];
    for (var r = [], n = this, o = t; n && n !== o; ) r.push(n), n = n.parent;
    return n !== o ? [] : (r.push(o), r);
  }, e.prototype.getActions = function(t, r, n, o, i, a, s) {
    var u2, f, l, d, c = this, h = a ? wt([], this.getStateNodes(a.value)) : [], y = /* @__PURE__ */ new Set();
    try {
      for (var p = b(Array.from(t).sort(function(E, C) {
        return E.order - C.order;
      })), S = p.next(); !S.done; S = p.next()) {
        var m = S.value;
        (!xt(h, m) || xt(n.exitSet, m) || m.parent && y.has(m.parent)) && y.add(m);
      }
    } catch (E) {
      u2 = { error: E };
    } finally {
      try {
        S && !S.done && (f = p.return) && f.call(p);
      } finally {
        if (u2) throw u2.error;
      }
    }
    try {
      for (var g = b(h), w = g.next(); !w.done; w = g.next()) {
        var m = w.value;
        (!xt(t, m) || xt(n.exitSet, m.parent)) && n.exitSet.push(m);
      }
    } catch (E) {
      l = { error: E };
    } finally {
      try {
        w && !w.done && (d = g.return) && d.call(g);
      } finally {
        if (l) throw l.error;
      }
    }
    n.exitSet.sort(function(E, C) {
      return C.order - E.order;
    });
    var x = Array.from(y).sort(function(E, C) {
      return E.order - C.order;
    }), R = new Set(n.exitSet), I = M(x.map(function(E) {
      var C = [];
      if (E.type !== "final") return C;
      var F = E.parent;
      if (!F.parent) return C;
      C.push(Rt(E.id, E.doneData), Rt(F.id, E.doneData ? ot(E.doneData, o, i) : void 0));
      var V = F.parent;
      return V.type === "parallel" && St(V).every(function(Ot) {
        return kt(n.configuration, Ot);
      }) && C.push(Rt(V.id)), C;
    })), P = x.map(function(E) {
      var C = E.onEntry, F = E.activities.map(function(V) {
        return ze(V);
      });
      return { type: "entry", actions: W(s ? L(L([], _(C), false), _(F), false) : L(L([], _(F), false), _(C), false), c.machine.options.actions) };
    }).concat({ type: "state_done", actions: I.map(function(E) {
      return Xe(E);
    }) }), D = Array.from(R).map(function(E) {
      return { type: "exit", actions: W(L(L([], _(E.onExit), false), _(E.activities.map(function(C) {
        return Je(C);
      })), false), c.machine.options.actions) };
    }), O = D.concat({ type: "transition", actions: W(n.actions, this.machine.options.actions) }).concat(P);
    if (r) {
      var U = W(M(L([], _(t), false).sort(function(E, C) {
        return C.order - E.order;
      }).map(function(E) {
        return E.onExit;
      })), this.machine.options.actions).filter(function(E) {
        return !Mt(E);
      });
      return O.concat({ type: "stop", actions: U });
    }
    return O;
  }, e.prototype.transition = function(t, r, n, o) {
    t === void 0 && (t = this.initialState);
    var i = $(r), a;
    if (t instanceof J) a = n === void 0 ? t : this.resolveState(J.from(t, n));
    else {
      var s = T(t) ? this.resolve(Nt(this.getResolvedPath(t))) : this.resolve(t), u2 = n != null ? n : this.machine.context;
      a = this.resolveState(J.from(s, u2));
    }
    if (this.strict && !this.events.includes(i.name) && !Ie(i.name)) throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(i.name, "'"));
    var f = this._transition(a.value, a, i) || { transitions: [], configuration: [], exitSet: [], source: a, actions: [] }, l = wt([], this.getStateNodes(a.value)), d = f.configuration.length ? wt(l, f.configuration) : l;
    return f.configuration = L([], _(d), false), this.resolveTransition(f, a, a.context, o, i);
  }, e.prototype.resolveRaisedTransition = function(t, r, n, o) {
    var i, a = t.actions;
    return t = this.transition(t, r, void 0, o), t._event = n, t.event = n.data, (i = t.actions).unshift.apply(i, L([], _(a), false)), t;
  }, e.prototype.resolveTransition = function(t, r, n, o, i) {
    var a, s, u2, f, l = this;
    i === void 0 && (i = Z);
    var d = t.configuration, c = !r || t.transitions.length > 0, h = c ? t.configuration : r ? r.configuration : [], y = kt(h, this), p = c ? He(this.machine, d) : void 0, S = r ? r.historyValue ? r.historyValue : t.source ? this.machine.historyValue(r.value) : void 0 : void 0, m = this.getActions(new Set(h), y, t, n, i, r, o), g = r ? v({}, r.activities) : {};
    try {
      for (var w = b(m), x = w.next(); !x.done; x = w.next()) {
        var R = x.value;
        try {
          for (var I = (u2 = void 0, b(R.actions)), P = I.next(); !P.done; P = I.next()) {
            var D = P.value;
            D.type === At ? g[D.activity.id || D.activity.type] = D : D.type === lt && (g[D.activity.id || D.activity.type] = false);
          }
        } catch (Y) {
          u2 = { error: Y };
        } finally {
          try {
            P && !P.done && (f = I.return) && f.call(I);
          } finally {
            if (u2) throw u2.error;
          }
        }
      }
    } catch (Y) {
      a = { error: Y };
    } finally {
      try {
        x && !x.done && (s = w.return) && s.call(w);
      } finally {
        if (a) throw a.error;
      }
    }
    var O = _(yt(this, r, n, i, m, o, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), U = O[0], E = O[1], C = _(De(U, Mt), 2), F = C[0], V = C[1], Ot = U.filter(function(Y) {
      var ft;
      return Y.type === At && ((ft = Y.activity) === null || ft === void 0 ? void 0 : ft.type) === Pt;
    }), ee = Ot.reduce(function(Y, ft) {
      return Y[ft.activity.id] = Be(ft.activity, l.machine, E, i), Y;
    }, r ? v({}, r.children) : {}), nt = new J({ value: p || r.value, context: E, _event: i, _sessionid: r ? r._sessionid : null, historyValue: p ? S ? Re(S, p) : void 0 : r ? r.historyValue : void 0, history: !p || t.source ? r : void 0, actions: p ? V : [], activities: p ? g : r ? r.activities : {}, events: [], configuration: h, transitions: t.transitions, children: ee, done: y, tags: ve(h), machine: this }), tt = n !== E;
    nt.changed = i.name === Lt || tt;
    var G = nt.history;
    G && delete G.history;
    var we = !y && (this._transient || d.some(function(Y) {
      return Y._transient;
    }));
    if (!c && (!we || i.name === Tt)) return nt;
    var q = nt;
    if (!y) for (we && (q = this.resolveRaisedTransition(q, { type: Ee }, i, o)); F.length; ) {
      var cr = F.shift();
      q = this.resolveRaisedTransition(q, cr._event, i, o);
    }
    var lr = q.changed || (G ? !!q.actions.length || tt || typeof G.value != typeof q.value || !pe(q.value, G.value) : void 0);
    return q.changed = lr, q.history = G, q;
  }, e.prototype.getStateNode = function(t) {
    if (_t(t)) return this.machine.getStateNodeById(t);
    if (!this.states) throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
    var r = this.states[t];
    if (!r) throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
    return r;
  }, e.prototype.getStateNodeById = function(t) {
    var r = _t(t) ? t.slice(ge.length) : t;
    if (r === this.id) return this;
    var n = this.machine.idMap[r];
    if (!n) throw new Error("Child state node '#".concat(r, "' does not exist on machine '").concat(this.id, "'"));
    return n;
  }, e.prototype.getStateNodeByPath = function(t) {
    if (typeof t == "string" && _t(t)) try {
      return this.getStateNodeById(t.slice(1));
    } catch {
    }
    for (var r = Yt(t, this.delimiter).slice(), n = this; r.length; ) {
      var o = r.shift();
      if (!o.length) break;
      n = n.getStateNode(o);
    }
    return n;
  }, e.prototype.resolve = function(t) {
    var r, n = this;
    if (!t) return this.initialStateValue || Et;
    switch (this.type) {
      case "parallel":
        return ht(this.initialStateValue, function(i, a) {
          return i ? n.getStateNode(a).resolve(t[a] || i) : Et;
        });
      case "compound":
        if (T(t)) {
          var o = this.getStateNode(t);
          return o.type === "parallel" || o.type === "compound" ? (r = {}, r[t] = o.initialStateValue, r) : t;
        }
        return Object.keys(t).length ? ht(t, function(i, a) {
          return i ? n.getStateNode(a).resolve(i) : Et;
        }) : this.initialStateValue || {};
      default:
        return t || Et;
    }
  }, e.prototype.getResolvedPath = function(t) {
    if (_t(t)) {
      var r = this.machine.idMap[t.slice(ge.length)];
      if (!r) throw new Error("Unable to find state node '".concat(t, "'"));
      return r.path;
    }
    return Yt(t, this.delimiter);
  }, Object.defineProperty(e.prototype, "initialStateValue", { get: function() {
    var t;
    if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
    var r;
    if (this.type === "parallel") r = se(this.states, function(n) {
      return n.initialStateValue || Et;
    }, function(n) {
      return n.type !== "history";
    });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial]) throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      r = Ct(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
    } else r = {};
    return this.__cache.initialStateValue = r, this.__cache.initialStateValue;
  }, enumerable: false, configurable: true }), e.prototype.getInitialState = function(t, r) {
    this._init();
    var n = this.getStateNodes(t);
    return this.resolveTransition({ configuration: n, exitSet: [], transitions: [], source: void 0, actions: [] }, void 0, r != null ? r : this.machine.context, void 0);
  }, Object.defineProperty(e.prototype, "initialState", { get: function() {
    var t = this.initialStateValue;
    if (!t) throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
    return this.getInitialState(t);
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "target", { get: function() {
    var t;
    if (this.type === "history") {
      var r = this.config;
      T(r.target) ? t = _t(r.target) ? Nt(this.machine.getStateNodeById(r.target).path.slice(this.path.length - 1)) : r.target : t = r.target;
    }
    return t;
  }, enumerable: false, configurable: true }), e.prototype.getRelativeStateNodes = function(t, r, n) {
    return n === void 0 && (n = true), n ? t.type === "history" ? t.resolveHistory(r) : t.initialStateNodes : [t];
  }, Object.defineProperty(e.prototype, "initialStateNodes", { get: function() {
    var t = this;
    if (Ct(this)) return [this];
    if (this.type === "compound" && !this.initial) return [this];
    var r = jt(this.initialStateValue);
    return M(r.map(function(n) {
      return t.getFromRelativePath(n);
    }));
  }, enumerable: false, configurable: true }), e.prototype.getFromRelativePath = function(t) {
    if (!t.length) return [this];
    var r = _(t), n = r[0], o = r.slice(1);
    if (!this.states) throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
    var i = this.getStateNode(n);
    if (i.type === "history") return i.resolveHistory();
    if (!this.states[n]) throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
    return this.states[n].getFromRelativePath(o);
  }, e.prototype.historyValue = function(t) {
    if (Object.keys(this.states).length) return { current: t || this.initialStateValue, states: se(this.states, function(r, n) {
      if (!t) return r.historyValue();
      var o = T(t) ? void 0 : t[n];
      return r.historyValue(o || r.initialStateValue);
    }, function(r) {
      return !r.history;
    }) };
  }, e.prototype.resolveHistory = function(t) {
    var r = this;
    if (this.type !== "history") return [this];
    var n = this.parent;
    if (!t) {
      var o = this.target;
      return o ? M(jt(o).map(function(a) {
        return n.getFromRelativePath(a);
      })) : n.initialStateNodes;
    }
    var i = Le(n.path, "states")(t).current;
    return T(i) ? [n.getStateNode(i)] : M(jt(i).map(function(a) {
      return r.history === "deep" ? n.getFromRelativePath(a) : [n.states[a[0]]];
    }));
  }, Object.defineProperty(e.prototype, "stateIds", { get: function() {
    var t = this, r = M(Object.keys(this.states).map(function(n) {
      return t.states[n].stateIds;
    }));
    return [this.id].concat(r);
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "events", { get: function() {
    var t, r, n, o;
    if (this.__cache.events) return this.__cache.events;
    var i = this.states, a = new Set(this.ownEvents);
    if (i) try {
      for (var s = b(Object.keys(i)), u2 = s.next(); !u2.done; u2 = s.next()) {
        var f = u2.value, l = i[f];
        if (l.states) try {
          for (var d = (n = void 0, b(l.events)), c = d.next(); !c.done; c = d.next()) {
            var h = c.value;
            a.add("".concat(h));
          }
        } catch (y) {
          n = { error: y };
        } finally {
          try {
            c && !c.done && (o = d.return) && o.call(d);
          } finally {
            if (n) throw n.error;
          }
        }
      }
    } catch (y) {
      t = { error: y };
    } finally {
      try {
        u2 && !u2.done && (r = s.return) && r.call(s);
      } finally {
        if (t) throw t.error;
      }
    }
    return this.__cache.events = Array.from(a);
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "ownEvents", { get: function() {
    var t = new Set(this.transitions.filter(function(r) {
      return !(!r.target && !r.actions.length && r.internal);
    }).map(function(r) {
      return r.eventType;
    }));
    return Array.from(t);
  }, enumerable: false, configurable: true }), e.prototype.resolveTarget = function(t) {
    var r = this;
    if (t !== void 0) return t.map(function(n) {
      if (!T(n)) return n;
      var o = n[0] === r.delimiter;
      if (o && !r.parent) return r.getStateNodeByPath(n.slice(1));
      var i = o ? r.key + n : n;
      if (r.parent) try {
        var a = r.parent.getStateNodeByPath(i);
        return a;
      } catch (s) {
        throw new Error("Invalid transition definition for state node '".concat(r.id, `':
`).concat(s.message));
      }
      else return r.getStateNodeByPath(i);
    });
  }, e.prototype.formatTransition = function(t) {
    var r = this, n = Ue(t.target), o = "internal" in t ? t.internal : n ? n.some(function(u2) {
      return T(u2) && u2[0] === r.delimiter;
    }) : true, i = this.machine.options.guards, a = this.resolveTarget(n), s = v(v({}, t), { actions: W(z(t.actions)), cond: Bt(t.cond, i), target: a, source: this, internal: o, eventType: t.event, toJSON: function() {
      return v(v({}, s), { target: s.target ? s.target.map(function(u2) {
        return "#".concat(u2.id);
      }) : void 0, source: "#".concat(r.id) });
    } });
    return s;
  }, e.prototype.formatTransitions = function() {
    var t, r, n = this, o;
    if (!this.config.on) o = [];
    else if (Array.isArray(this.config.on)) o = this.config.on;
    else {
      var i = this.config.on, a = $t, s = i[a], u2 = s === void 0 ? [] : s, f = ct(i, [typeof a == "symbol" ? a : a + ""]);
      o = M(Object.keys(f).map(function(g) {
        var w = at(g, f[g]);
        return w;
      }).concat(at($t, u2)));
    }
    var l = this.config.always ? at("", this.config.always) : [], d = this.config.onDone ? at(String(Rt(this.id)), this.config.onDone) : [];
    var c = M(this.invoke.map(function(g) {
      var w = [];
      return g.onDone && w.push.apply(w, L([], _(at(String(gt(g.id)), g.onDone)), false)), g.onError && w.push.apply(w, L([], _(at(String(st(g.id)), g.onError)), false)), w;
    })), h = this.after, y = M(L(L(L(L([], _(d), false), _(c), false), _(o), false), _(l), false).map(function(g) {
      return z(g).map(function(w) {
        return n.formatTransition(w);
      });
    }));
    try {
      for (var p = b(h), S = p.next(); !S.done; S = p.next()) {
        var m = S.value;
        y.push(m);
      }
    } catch (g) {
      t = { error: g };
    } finally {
      try {
        S && !S.done && (r = p.return) && r.call(p);
      } finally {
        if (t) throw t.error;
      }
    }
    return y;
  }, e;
}();
function Se(e, t) {
  return new ar(e, t);
}
var ut = { click: "onClick", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", complete: "onComplete", after: "onAfter", enter: "onEnter", show: "onShow" };
Object.values(ut);
var ur = Object.keys(ut);
var fr = class {
  constructor(t, r) {
    __publicField(this, "activeStateId", "");
    __publicField(this, "_service");
    __publicField(this, "_domListeners", /* @__PURE__ */ new Map());
    __publicField(this, "_domElement");
    __publicField(this, "_playerListeners", /* @__PURE__ */ new Map());
    __publicField(this, "_player");
    __publicField(this, "_machineSchemas", /* @__PURE__ */ new Map());
    __publicField(this, "_onShowPrevValue", 0);
    this._player = r, this._machineSchemas = this._transformToXStateSchema(t), this._domElement = r.container;
  }
  start(t) {
    this.stop();
    let r = this._machineSchemas.get(t);
    if (typeof r > "u") throw on(`invalid state machine id ${t}`);
    this._service = te(Se(r)), this._addEventListeners(), this._service.start();
  }
  stop() {
    var t;
    this._removeEventListeners(), (t = this._service) == null || t.stop(), this._player.stop();
  }
  _removeEventListeners() {
    var t;
    this._requiresDomElement();
    for (let [r, n] of this._domListeners) r === "visibilityChange" && this._player.stopPlayOnShow(), (t = this._domElement) == null || t.removeEventListener(r, n), this._domListeners.delete(r);
    for (let [r, n] of this._playerListeners) this._player.removeEventListener(r, n), this._playerListeners.delete(r);
  }
  _addEventListeners() {
    this._requiresDomElement();
    let t = (n) => {
      this._service.send({ type: n });
    }, r = (n) => {
      function o() {
        t(n);
      }
      return o;
    };
    this._service.subscribe((n) => {
      var o;
      if (typeof n.changed > "u" || n.changed) {
        this._removeEventListeners();
        for (let i of n.nextEvents) if (ur.filter((a) => a !== "complete" && a !== "show").includes(i)) {
          let a = r(i);
          this._domListeners.set(i, a), (o = this._domElement) == null || o.addEventListener(i, a, { once: true });
        } else if (i === "complete") {
          let a = r(i);
          this._player.addEventListener(i, a), this._playerListeners.set(i, a);
        } else if (i === "show") {
          let a = r(i);
          this._player.addIntersectionObserver({ callbackOnIntersect: (s) => {
            s > 0 && (s !== 100 && this._onShowPrevValue !== s && a(), this._onShowPrevValue = s);
          }, threshold: [] }), this._domListeners.set("visibilityChange", a);
        }
      }
    });
  }
  subscribe(t) {
    throw on(t.toString());
  }
  _transformToXStateSchema(t) {
    var n, o$1, i$1;
    let r = /* @__PURE__ */ new Map();
    for (let a of t) {
      let s = {}, u2 = {};
      if (u2.id = a.descriptor.id, typeof a.descriptor.initial < "u" && (u2.initial = a.descriptor.initial), typeof a < "u") {
        let f = a.states;
        for (let l in f) if (typeof f[l] < "u" && f[l]) {
          let d$1 = f[l], c = d$1.playbackSettings, h = Object.keys(d$1).filter((S) => S.startsWith("on")), y = {}, p = {};
          for (let S of h) if (typeof d$1[S] < "u") {
            let m = d$1[S];
            if (S === ut.after) {
              let g = m;
              p[g.ms] = { target: (n = m == null ? void 0 : m.state) != null ? n : "" };
            } else S === ut.enter ? y[dn(ut, S)] = { target: (o$1 = m == null ? void 0 : m.state) != null ? o$1 : "" } : y[dn(ut, S)] = { target: (i$1 = m == null ? void 0 : m.state) != null ? i$1 : "" };
          }
          s[l] = { entry: () => {
            !this._player.getAnimationInstance() || d$1.animationId && d$1.animationId !== this._player.currentAnimationId ? this._player.play(d$1.animationId, () => ({ ...u, ...c })).then(() => {
              this._updatePlaybackSettings(c);
            }).catch((m) => {
              un(`State machine error: ${m.message}`);
            }) : this._updatePlaybackSettings(c);
          }, exit: () => {
            typeof c.segments < "u" && this._player.resetSegments(false), typeof c.playOnScroll < "u" && this._player.stopPlayOnScroll();
          }, on: y, after: p, meta: c };
        }
      }
      u2.states = s, r.set(u2.id, u2);
    }
    return r;
  }
  _handlePlaySegments(t) {
    if (typeof t.segments == "string") this._player.goToAndPlay(t.segments, true);
    else {
      let [r, n] = t.segments, o = r;
      r !== 0 && r === n && (o = r - 1), r === 0 && r === n ? this._player.goToAndPlay(r, true) : this._player.playSegments([o, n], true);
    }
  }
  _handlePlayOnScroll(t) {
    let r = t.playOnScroll;
    if (t.segments && typeof t.segments != "string") {
      let n = t.segments;
      this._player.playOnScroll({ threshold: r, segments: n });
    } else this._player.playOnScroll({ threshold: r });
  }
  _updatePlaybackSettings(t) {
    if (!this._player.getAnimationInstance()) throw new Error("Unable to update playbackSettings. Animations is not rendered yet.");
    typeof t.autoplay < "u" && (this._player.setAutoplay(t.autoplay), t.autoplay ? this._player.play() : this._player.pause()), typeof t.direction < "u" && this._player.setDirection(t.direction), typeof t.intermission < "u" && this._player.setIntermission(t.intermission), typeof t.loop < "u" && this._player.setLoop(t.loop), typeof t.playMode < "u" && this._player.setMode(t.playMode), typeof t.speed < "u" && this._player.setSpeed(t.speed), typeof t.defaultTheme < "u" && this._player.setDefaultTheme(t.defaultTheme), typeof t.playOnScroll < "u" && this._handlePlayOnScroll(t), t.segments && this._handlePlaySegments(t), t.autoplay || this._player.pause();
  }
  _requiresDomElement() {
    if (!this._domElement) throw on("Requires a DOM element to attach events.");
  }
};
export {
  fr as DotLottieStateMachineManager
};
/*! Bundled license information:

@dotlottie/common/dist/dotlottie-state-machine-manager-2E7RUGJG.js:
  (*! Bundled license information:
  
  xstate/es/_virtual/_tslib.js:
    (*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** *)
  *)
*/
//# sourceMappingURL=dotlottie-state-machine-manager-2E7RUGJG-RGCKWMI7.js.map
