import {
  G,
  K,
  Q,
  W,
  cn,
  dn,
  fn,
  hn,
  j,
  kr,
  ln,
  on,
  pn,
  u,
  un
} from "./chunk-6TMCHNMY.js";
import "./chunk-USPGI4ZR.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/react-player/dist/chunk-XVC7DH25.js
var import_react = __toESM(require_react(), 1);
function x() {
  var e = (0, import_react.useRef)(true);
  return e.current ? (e.current = false, true) : e.current;
}
var T = function(e, o) {
  var t = x();
  (0, import_react.useEffect)(function() {
    if (!t) return e();
  }, o);
};
var P = T;
var c = function() {
};
function m(e) {
  for (var o = [], t = 1; t < arguments.length; t++) o[t - 1] = arguments[t];
  e && e.addEventListener && e.addEventListener.apply(e, o);
}
function d(e) {
  for (var o = [], t = 1; t < arguments.length; t++) o[t - 1] = arguments[t];
  e && e.removeEventListener && e.removeEventListener.apply(e, o);
}
var v = typeof window < "u";
var w = ["mousedown", "touchstart"];
var D = function(e, o, t) {
  t === void 0 && (t = w);
  var r = (0, import_react.useRef)(o);
  (0, import_react.useEffect)(function() {
    r.current = o;
  }, [o]), (0, import_react.useEffect)(function() {
    for (var u2 = function(a) {
      var s = e.current;
      s && !s.contains(a.target) && r.current(a);
    }, f = 0, n = t; f < n.length; f++) {
      var p = n[f];
      m(document, p, u2);
    }
    return function() {
      for (var a = 0, s = t; a < s.length; a++) {
        var l = s[a];
        d(document, l, u2);
      }
    };
  }, [t, e]);
};
var F = D;
var b = v ? window : null;
var y = function(e) {
  return !!e.addEventListener;
};
var L = function(e) {
  return !!e.on;
};
var B = function(e, o, t, r) {
  t === void 0 && (t = b), (0, import_react.useEffect)(function() {
    if (o && t) return y(t) ? m(t, e, o, r) : L(t) && t.on(e, o, r), function() {
      y(t) ? d(t, e, o, r) : L(t) && t.off(e, o, r);
    };
  }, [e, o, t, JSON.stringify(r)]);
};
var E = B;
var H = function(e) {
  return typeof e == "function" ? e : typeof e == "string" ? function(o) {
    return o.key === e;
  } : e ? function() {
    return true;
  } : function() {
    return false;
  };
};
var U = function(e, o, t, r) {
  o === void 0 && (o = c), t === void 0 && (t = {}), r === void 0 && (r = [e]);
  var u2 = t.event, f = u2 === void 0 ? "keydown" : u2, n = t.target, p = t.options, a = (0, import_react.useMemo)(function() {
    var s = H(e), l = function(i2) {
      if (s(i2)) return o(i2);
    };
    return l;
  }, r);
  E(f, a, n, p);
};
var A = U;
var C = (0, import_react.createContext)(null);
var de = C.Provider;
var pe = () => {
  let e = (0, import_react.useContext)(C);
  if (typeof e > "u") throw on("useDotLottieContext must be used within a DotLottieProvider");
  return e;
};
var ve = (e, o, t) => {
  let [r, u2] = (0, import_react.useState)(() => t());
  return (0, import_react.useEffect)(() => {
    let f = e(() => {
      let n = o();
      u2(n);
    });
    return () => {
      f();
    };
  }, [e]), r;
};

// node_modules/@dotlottie/react-player/dist/chunk-O2M23KUL.js
var import_react2 = __toESM(require_react(), 1);
var we = () => {
};
function C2(t) {
  let n = pe(), e = (0, import_react2.useCallback)(() => {
    if (n !== null) return t(n.getState());
  }, [t, n]), c3 = (0, import_react2.useCallback)((s) => n === null ? we : n.state.subscribe(s), [n]);
  return ve(c3, e, () => t(Q));
}
var U2 = (t) => import_react2.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", ...t }, import_react2.default.createElement("path", { d: "M8.33325 11.6667C7.78097 11.6667 7.33325 12.1144 7.33325 12.6667C7.33325 13.2189 7.78097 13.6667 8.33325 13.6667C8.88554 13.6667 9.33325 13.2189 9.33325 12.6667C9.33325 12.1144 8.88554 11.6667 8.33325 11.6667Z", fill: "currentColor" }), import_react2.default.createElement("path", { d: "M7.33325 8C7.33325 7.44771 7.78097 7 8.33325 7C8.88554 7 9.33325 7.44771 9.33325 8C9.33325 8.55228 8.88554 9 8.33325 9C7.78097 9 7.33325 8.55228 7.33325 8Z", fill: "currentColor" }), import_react2.default.createElement("path", { d: "M7.33325 3.33333C7.33325 2.78105 7.78097 2.33333 8.33325 2.33333C8.88554 2.33333 9.33325 2.78105 9.33325 3.33333C9.33325 3.88562 8.88554 4.33333 8.33325 4.33333C7.78097 4.33333 7.33325 3.88562 7.33325 3.33333Z", fill: "currentColor" }));
var $ = (t) => import_react2.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", ...t }, import_react2.default.createElement("path", { d: "M10.8654 2.31311C11.0607 2.11785 11.3772 2.11785 11.5725 2.31311L13.4581 4.19873C13.6534 4.39399 13.6534 4.71058 13.4581 4.90584L11.5725 6.79146C11.3772 6.98672 11.0607 6.98672 10.8654 6.79146C10.6701 6.5962 10.6701 6.27961 10.8654 6.08435L11.6162 5.33354H4V6.66687C4 7.03506 3.70152 7.33354 3.33333 7.33354C2.96514 7.33354 2.66666 7.03506 2.66666 6.66687L2.66666 4.66687C2.66666 4.29868 2.96514 4.0002 3.33333 4.0002H11.8454L10.8654 3.02022C10.6701 2.82496 10.6701 2.50838 10.8654 2.31311Z", fill: "currentColor" }), import_react2.default.createElement("path", { d: "M12.4375 11.9998C12.8057 11.9998 13.1042 11.7013 13.1042 11.3331V9.33313C13.1042 8.96494 12.8057 8.66647 12.4375 8.66647C12.0693 8.66647 11.7708 8.96494 11.7708 9.33313V10.6665H4.15462L4.90543 9.91565C5.10069 9.72039 5.10069 9.40381 4.90543 9.20854C4.71017 9.01328 4.39359 9.01328 4.19832 9.20854L2.31271 11.0942C2.11744 11.2894 2.11744 11.606 2.31271 11.8013L4.19832 13.6869C4.39359 13.8821 4.71017 13.8821 4.90543 13.6869C5.10069 13.4916 5.10069 13.175 4.90543 12.9798L3.92545 11.9998H12.4375Z", fill: "currentColor" }));
var z = (t) => import_react2.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", ...t }, import_react2.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z", fill: "currentColor" }));
var O = (t) => import_react2.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", ...t }, import_react2.default.createElement("path", { d: "M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z", fill: "currentColor" }), import_react2.default.createElement("path", { d: "M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z", fill: "currentColor" }));
var j2 = (t) => import_react2.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", ...t }, import_react2.default.createElement("path", { d: "M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z", fill: "currentColor" }));
var Q2 = (t) => import_react2.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", ...t }, import_react2.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z", fill: "currentColor" }));
var Y = (t) => import_react2.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...t }, import_react2.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z", fill: "currentColor" }));
var ee = (t) => import_react2.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...t }, import_react2.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z", fill: "currentColor" }));
var te = ({ children: t, enableReset: n, expand: e = false, onBack: c3, onExpand: a, onReset: s, title: m2 }) => {
  let d2 = (0, import_react2.useCallback)(() => {
    c3();
  }, [c3]), x2 = (0, import_react2.useCallback)(() => {
    a();
  }, [a]), h = (0, import_react2.useCallback)(() => {
    s();
  }, [s]);
  return import_react2.default.createElement(import_react2.default.Fragment, null, !e && import_react2.default.createElement("button", { className: "popover-item", "aria-label": `Go to ${m2}`, onClick: x2 }, import_react2.default.createElement("span", { style: { flex: 1 } }, m2), import_react2.default.createElement("span", null, import_react2.default.createElement(ee, null))), e && import_react2.default.createElement("div", { className: "popover-submenu" }, import_react2.default.createElement("div", { className: "popover-header" }, import_react2.default.createElement("button", { onClick: d2 }, import_react2.default.createElement(Y, null)), import_react2.default.createElement("div", { className: "popover-header-title", style: { flex: 1 } }, import_react2.default.createElement("span", null, m2), n && import_react2.default.createElement("button", { className: "reset-theme", onClick: h, "aria-label": `Reset ${m2}` }, "Reset"))), t));
};
var ne = (t) => import_react2.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...t }, import_react2.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.5283 5.9372C20.8211 6.23009 20.8211 6.70497 20.5283 6.99786L9.4631 18.063C9.32181 18.2043 9.12997 18.2833 8.93016 18.2826C8.73035 18.2819 8.53907 18.2015 8.39877 18.0593L3.46807 13.0596C3.17722 12.7647 3.18052 12.2898 3.47544 11.999C3.77036 11.7081 4.24522 11.7114 4.53608 12.0063L8.93646 16.4683L19.4676 5.9372C19.7605 5.64431 20.2354 5.64431 20.5283 5.9372Z", fill: "currentColor" }));
var re = ({ onSelectItem: t, selected: n = false, value: e, ...c3 }) => {
  let a = (0, import_react2.useCallback)(() => {
    t == null || t(e);
  }, [t, e]);
  return import_react2.default.createElement("button", { "aria-label": `Select ${e}`, className: `popover-item ${n ? "selected" : ""}`, onClick: a, ...c3 }, import_react2.default.createElement("span", { style: { visibility: n ? "visible" : "hidden" } }, import_react2.default.createElement(ne, null)), import_react2.default.createElement("span", { style: { flex: 1 } }, e));
};
var se = ({ items: t = [], onSelectItem: n, onDismiss: e, ...c$1 }) => {
  let [a, s] = (0, import_react2.useState)(""), m2 = (0, import_react2.useRef)(null);
  F(m2, () => {
    s(""), e();
  }), A("Escape", () => {
    s(""), e();
  });
  let d2 = (0, import_react2.useCallback)(() => {
    s("");
  }, [s]), x2 = (0, import_react2.useCallback)((r) => () => s(r), [s]), h = (0, import_react2.useCallback)((r, v2) => () => n(r, v2), [n]);
  return import_react2.default.createElement("dialog", { ref: m2, style: { padding: a ? "0px" : "8px" }, className: "popover", "aria-label": "Popover Menu", ...c$1 }, import_react2.default.createElement("ul", { "aria-label": "Popover content", className: "popover-content" }, t.map((r) => import_react2.default.createElement("li", { key: r.title, style: { width: "100%" } }, (a === r.title || !a) && import_react2.default.createElement(te, { expand: a === r.title, title: r.title, onExpand: x2(r.title), onBack: d2, enableReset: r.enableReset, onReset: h(r.title, "") }, import_react2.default.createElement("ul", { className: "popover-items", "aria-label": `List of ${r.title}` }, r.items.map((v2) => import_react2.default.createElement("li", { key: v2.value }, import_react2.default.createElement(re, { value: v2.value, selected: v2.selected, onSelectItem: h(r.title, v2.value) })))))))));
};
var ke = ["play", "stop", "loop", "next", "previous", "animations", "themes"];
var S3 = ({ buttons: t = ke, ...n }) => {
  let e = pe(), c3 = C2((o) => o.loop), a = C2((o) => o.currentState), s = C2((o) => o.seeker), m2 = C2((o) => o.currentAnimationId), d2 = C2((o) => o.defaultTheme), x2 = C2((o) => o.direction), h = C2((o) => o.activeStateId), r = (0, import_react2.useMemo)(() => a === K.Playing, [a]), [v2, A2] = (0, import_react2.useState)(false), [b2, ie] = (0, import_react2.useState)([]), [V, le] = (0, import_react2.useState)([]), [B2, ae] = (0, import_react2.useState)([]), H3 = (0, import_react2.useMemo)(() => {
    let o = [], u2 = b2.map((l) => ({ value: l.id, selected: m2 === l.id })), S = V.filter((l) => l.animations.length === 0 || l.animations.includes(m2 || "")).map((l) => ({ value: l.id, selected: d2 === l.id })), w2 = B2.map((l) => ({ value: l, selected: h === l }));
    return Array.isArray(u2) && u2.length !== 0 && o.push({ title: "Animations", items: u2, enableReset: false }), Array.isArray(w2) && w2.length !== 0 && o.push({ title: "States", items: w2, enableReset: true }), Array.isArray(S) && S.length !== 0 && o.push({ title: "Themes", items: S, enableReset: !!d2 }), o;
  }, [b2, V, m2, d2, B2, h]), pe2 = (0, import_react2.useMemo)(() => t.includes("themes") && Array.isArray(V) && V.length ? true : t.includes("animations") && Array.isArray(b2) && b2.length > 1, [H3]), me = (0, import_react2.useCallback)(() => {
    A2(!v2);
  }, [A2]), ue = (0, import_react2.useCallback)(() => {
    A2(false);
  }, [A2]), ce = (0, import_react2.useCallback)(() => {
    e == null || e.toggleLoop();
  }, [e]), ve2 = (0, import_react2.useCallback)(() => {
    e == null || e.freeze();
  }, [e]), fe2 = (0, import_react2.useCallback)(() => {
    e == null || e.unfreeze();
  }, [e]), Ce = (0, import_react2.useCallback)(() => {
    e == null || e.next();
  }, [e]), de2 = (0, import_react2.useCallback)(() => {
    e == null || e.previous();
  }, [e]), he = (0, import_react2.useCallback)(() => {
    e == null || e.togglePlay();
  }, [e]), ge = (0, import_react2.useCallback)((o, u2) => {
    o === "Animations" && (e == null || e.play(u2)), o === "Themes" && (e == null || e.setDefaultTheme(u2)), o === "States" && (u2 ? e == null || e.enterInteractiveMode(u2) : e == null || e.exitInteractiveMode());
  }, [e]), be = (0, import_react2.useCallback)((o) => {
    e == null || e.seek(String(o.currentTarget.value).concat("%"));
  }, [e]);
  function D2() {
    var w2, l, Z2;
    let o = (w2 = e == null ? void 0 : e.getManifest()) == null ? void 0 : w2.animations, u2 = (l = e == null ? void 0 : e.getManifest()) == null ? void 0 : l.themes, S = (Z2 = e == null ? void 0 : e.getManifest()) == null ? void 0 : Z2.states;
    o && ie(o), u2 && le(u2), S && ae(S);
  }
  return (0, import_react2.useEffect)(() => {
    if (!(typeof e > "u")) return e == null || e.addEventListener("DOMLoaded", D2), () => {
      e == null || e.removeEventListener("DOMLoaded", D2);
    };
  }, [e]), import_react2.default.createElement("div", { "aria-label": "lottie-animation-controls", className: "toolbar", ...n }, t.includes("previous") && b2.length > 1 && import_react2.default.createElement("button", { onClick: de2, "aria-label": "play-previous" }, import_react2.default.createElement(Q2, null)), t.includes("play") && import_react2.default.createElement("button", { onClick: he, "aria-label": "play-pause" }, r ? import_react2.default.createElement(O, null) : import_react2.default.createElement(j2, null)), t.includes("next") && b2.length > 1 && import_react2.default.createElement("button", { onClick: Ce, "aria-label": "play-next" }, import_react2.default.createElement(z, null)), import_react2.default.createElement("input", { style: { width: "100%", "--seeker": s }, className: `seeker ${x2 === 1 ? "" : "to-left"}`, type: "range", min: 0, step: 0, max: 100, value: s || 0, onInput: be, onMouseDown: ve2, onMouseUp: fe2, "aria-valuemin": 1, "aria-valuemax": 100, role: "slider", "aria-valuenow": s, "aria-label": "lottie-seek-input" }), t.includes("loop") && import_react2.default.createElement("button", { onClick: ce, className: c3 ? "active" : "", "aria-label": "loop-toggle" }, import_react2.default.createElement($, null)), pe2 && import_react2.default.createElement("div", { style: { position: "relative" } }, import_react2.default.createElement(se, { items: H3, open: v2, onDismiss: ue, onSelectItem: ge }), import_react2.default.createElement("button", { className: `${v2 ? "popover-active" : ""}`, "aria-label": "open-popover", onClick: me }, import_react2.default.createElement(U2, null))));
};

// node_modules/@dotlottie/react-player/dist/chunk-ZAFYX2AB.js
var import_react3 = __toESM(require_react(), 1);
var Z = typeof window > "u" ? import_react3.useEffect : import_react3.useLayoutEffect;
var H2 = (e, o, d2) => {
  let [a] = (0, import_react3.useState)(() => new j(e, o.current, d2)), u2 = (0, import_react3.useRef)(false);
  return Z(() => {
    async function m2() {
      !u2.current && o.current && (u2.current = true, a.setContainer(o.current), await a.load());
    }
    return m2(), () => {
      u2.current && a.destroy();
    };
  }, [a]), a;
};
function L2(e, o) {
  let d$1 = (0, import_react3.useCallback)(() => o(e.getState()), [o, e]), a = (0, import_react3.useCallback)((m2) => e.state.subscribe(m2), [e]);
  return ve(a, d$1, () => o(Q));
}
var N = { animation: { position: "relative", width: "100%", height: "100%" }, animationWithControls: { position: "relative" } };
var fe = import_react3.default.forwardRef(({ onEvent: e$1, activeAnimationId: o, autoplay: d2, background: a$1 = "transparent", direction: u2, intermission: m2, loop: D2, playMode: P2, hover: f, speed: g, renderer: U3 = "svg", rendererSettings: $2 = {}, src: S, className: j3 = "", testId: p, children: b2, defaultTheme: y2, light: v2 = false, worker: z2 = false, activeStateId: C3, lottieRef: B2, ...I }, W2) => {
  let R = (0, import_react3.useRef)(null), i2 = H2(S, R, { renderer: U3, activeAnimationId: o, rendererSettings: { clearCanvas: true, progressiveLoad: false, hideOnTransparent: true, ...$2 }, hover: f, loop: D2, direction: u2, speed: g, intermission: m2, background: a$1, playMode: P2, autoplay: f ? false : d2, testId: p, defaultTheme: y2, light: v2, worker: z2, activeStateId: C3 }), t = (0, import_react3.useRef)(i2);
  t.current = i2, import_react3.default.useImperativeHandle(W2, () => i2, [i2]), import_react3.default.useImperativeHandle(B2, () => i2, [i2]);
  let T2 = L2(i2, (n) => n.currentState), k = L2(i2, (n) => n.frame), q = L2(i2, (n) => n.seeker), G2 = L2(i2, (n) => n.currentAnimationId);
  return P(() => {
    typeof D2 > "u" ? t.current.revertToManifestValues(["loop"]) : t.current.setLoop(D2);
  }, [D2]), P(() => {
    [K.Initial, K.Loading].includes(T2) || (typeof d2 > "u" ? t.current.revertToManifestValues(["autoplay"]) : t.current.setAutoplay(d2));
  }, [d2]), P(() => {
    typeof u2 > "u" ? t.current.revertToManifestValues(["direction"]) : t.current.setDirection(u2);
  }, [u2]), P(() => {
    typeof g > "u" ? t.current.revertToManifestValues(["speed"]) : t.current.setSpeed(g);
  }, [g]), P(() => {
    typeof P2 > "u" ? t.current.revertToManifestValues(["playMode"]) : t.current.setMode(P2);
  }, [P2]), P(() => {
    typeof f > "u" ? t.current.revertToManifestValues(["hover"]) : t.current.setHover(f);
  }, [f]), P(() => {
    typeof a$1 > "u" ? t.current.setBackground("transparent") : t.current.setBackground(a$1);
  }, [a$1]), P(() => {
    typeof m2 > "u" ? t.current.revertToManifestValues(["intermission"]) : t.current.setIntermission(m2);
  }, [m2]), P(() => {
    typeof y2 > "u" || !y2 ? t.current.revertToManifestValues(["defaultTheme"]) : t.current.setDefaultTheme(y2);
  }, [y2]), P(() => {
    o && t.current.play(o);
  }, [o]), P(() => (typeof C3 < "u" && t.current.enterInteractiveMode(C3), () => {
    t.current.exitInteractiveMode();
  }), [C3]), P(() => {
    typeof S < "u" && t.current.updateSrc(S);
  }, [S]), (0, import_react3.useEffect)(() => {
    let n = () => {
      e$1 == null || e$1(W.Ready);
    }, w2 = () => {
      e$1 == null || e$1(W.DataReady);
    }, x2 = () => {
      e$1 == null || e$1(W.DataFail);
    }, V = () => {
      t.current.currentState !== K.Playing && (e$1 == null || e$1(W.Complete));
    }, h = () => {
      e$1 == null || e$1(W.LoopComplete);
    };
    return t.current.addEventListener("DOMLoaded", n), t.current.addEventListener("data_ready", w2), t.current.addEventListener("data_failed", x2), t.current.addEventListener("complete", V), t.current.addEventListener("loopComplete", h), () => {
      t.current.removeEventListener("DOMLoaded", n), t.current.removeEventListener("data_ready", w2), t.current.removeEventListener("data_failed", x2), t.current.removeEventListener("complete", V), t.current.removeEventListener("loopComplete", h);
    };
  }, []), (0, import_react3.useEffect)(() => {
    switch (T2) {
      case K.Stopped:
        e$1 == null || e$1(W.Stop);
        break;
      case K.Paused:
        e$1 == null || e$1(W.Pause);
        break;
      case K.Playing:
        e$1 == null || e$1(W.Play);
        break;
      case K.Frozen:
        e$1 == null || e$1(W.Freeze);
        break;
      case K.Error:
        e$1 == null || e$1(W.Error);
        break;
    }
  }, [T2]), (0, import_react3.useEffect)(() => {
    e$1 == null || e$1(W.Frame, { frame: k, seeker: q });
  }, [k]), import_react3.default.createElement(de, { value: i2 }, import_react3.default.createElement("div", { className: `dotlottie-container main ${b2 ? "controls" : ""} ${j3}`, lang: "en", ...p && { "data-testid": p }, ...I }, import_react3.default.createElement("div", { ref: R, "data-name": `${G2}`, role: "figure", className: `animation ${b2 ? "controls" : ""}`, style: b2 ? N.animationWithControls : N.animation, ...p && { "data-testid": "animation" } }, T2 === K.Error && import_react3.default.createElement("div", { ...p && { "data-testid": "error" }, className: "error" }, "⚠️")), b2));
});
export {
  S3 as Controls,
  u as DEFAULT_OPTIONS,
  Q as DEFAULT_STATE,
  j as DotLottieCommonPlayer,
  fe as DotLottiePlayer,
  de as DotLottieProvider,
  G as PlayMode,
  W as PlayerEvents,
  K as PlayerState,
  on as createError,
  pn as deepCloneLottieJson,
  cn as getFilename,
  dn as getKeyByValue,
  kr as isValidLottieJSON,
  hn as isValidLottieString,
  un as logError,
  ln as logWarning,
  fn as lottieContainsAudio,
  pe as useDotLottieContext,
  C2 as useDotLottieState
};
//# sourceMappingURL=@dotlottie_react-player.js.map
