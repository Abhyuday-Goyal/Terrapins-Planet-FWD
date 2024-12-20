import {
  m
} from "./chunk-USPGI4ZR.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/lottie_light_html-SLCECTRT.js
var Lr = m((Re, ni) => {
  typeof navigator < "u" && function(ye, le) {
    typeof Re == "object" && typeof ni < "u" ? ni.exports = le() : typeof define == "function" && define.amd ? define(le) : (ye = typeof globalThis < "u" ? globalThis : ye || self, ye.lottie = le());
  }(Re, function() {
    var ye = "http://www.w3.org/2000/svg", le = "", Ci = false, ai = -999999, As = function(e) {
      Ci = !!e;
    }, Cs = function() {
      return Ci;
    }, xs = function(e) {
      le = e;
    }, bt = function() {
      return le;
    };
    function at(t) {
      return document.createElement(t);
    }
    function H(t, e) {
      var i, s = t.length, r;
      for (i = 0; i < s; i += 1) {
        r = t[i].prototype;
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e.prototype[n] = r[n]);
      }
    }
    function Ms(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var Ts = function() {
      function t(e) {
        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = false;
      }
      return t.prototype = { addAudio: function(i) {
        this.audios.push(i);
      }, pause: function() {
        var i, s = this.audios.length;
        for (i = 0; i < s; i += 1) this.audios[i].pause();
      }, resume: function() {
        var i, s = this.audios.length;
        for (i = 0; i < s; i += 1) this.audios[i].resume();
      }, setRate: function(i) {
        var s, r = this.audios.length;
        for (s = 0; s < r; s += 1) this.audios[s].setRate(i);
      }, createAudio: function(i) {
        return this.audioFactory ? this.audioFactory(i) : window.Howl ? new window.Howl({ src: [i] }) : { isPlaying: false, play: function() {
          this.isPlaying = true;
        }, seek: function() {
          this.isPlaying = false;
        }, playing: function() {
        }, rate: function() {
        }, setVolume: function() {
        } };
      }, setAudioFactory: function(i) {
        this.audioFactory = i;
      }, setVolume: function(i) {
        this._volume = i, this._updateVolume();
      }, mute: function() {
        this._isMuted = true, this._updateVolume();
      }, unmute: function() {
        this._isMuted = false, this._updateVolume();
      }, getVolume: function() {
        return this._volume;
      }, _updateVolume: function() {
        var i, s = this.audios.length;
        for (i = 0; i < s; i += 1) this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
      } }, function() {
        return new t();
      };
    }(), ht = /* @__PURE__ */ function() {
      function t(i, s) {
        var r = 0, n = [], a;
        switch (i) {
          case "int16":
          case "uint8c":
            a = 1;
            break;
          default:
            a = 1.1;
            break;
        }
        for (r = 0; r < s; r += 1) n.push(a);
        return n;
      }
      function e(i, s) {
        return i === "float32" ? new Float32Array(s) : i === "int16" ? new Int16Array(s) : i === "uint8c" ? new Uint8ClampedArray(s) : t(i, s);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
    }();
    function $(t) {
      return Array.apply(null, { length: t });
    }
    var xi = true, Mi = null, hi = "", Fs = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), ct = Math.pow, Oe = Math.sqrt, ee = Math.floor, De = Math.max, be = Math.min;
    var Ii = 150, U = Math.PI / 180, Wt = 0.5519;
    function Gt(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
    }
    function li(t, e, i, s) {
      this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1;
    }
    function Vi(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function Bi(t, e, i, s) {
      this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1;
    }
    function Ri(t, e, i) {
      this.type = t, this.firstFrame = e, this.totalFrames = i;
    }
    function zi(t, e) {
      this.type = t, this.target = e;
    }
    function Is(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function Ls(t) {
      this.type = "configError", this.nativeError = t;
    }
    var dt = /* @__PURE__ */ function() {
      var t = 0;
      return function() {
        return t += 1, hi + "__lottie_element_" + t;
      };
    }();
    function fi(t, e, i) {
      var s, r, n, a, u, h, d, g;
      switch (a = Math.floor(t * 6), u = t * 6 - a, h = i * (1 - e), d = i * (1 - u * e), g = i * (1 - (1 - u) * e), a % 6) {
        case 0:
          s = i, r = g, n = h;
          break;
        case 1:
          s = d, r = i, n = h;
          break;
        case 2:
          s = h, r = i, n = g;
          break;
        case 3:
          s = h, r = d, n = i;
          break;
        case 4:
          s = g, r = h, n = i;
          break;
        case 5:
          s = i, r = h, n = d;
          break;
      }
      return [s, r, n];
    }
    function pi(t, e, i) {
      var s = Math.max(t, e, i), r = Math.min(t, e, i), n = s - r, a, u = s === 0 ? 0 : n / s, h = s / 255;
      switch (s) {
        case r:
          a = 0;
          break;
        case t:
          a = e - i + n * (e < i ? 6 : 0), a /= 6 * n;
          break;
        case e:
          a = i - t + n * 2, a /= 6 * n;
          break;
        case i:
          a = t - e + n * 4, a /= 6 * n;
          break;
      }
      return [a, u, h];
    }
    function Oi(t, e) {
      var i = pi(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), fi(i[0], i[1], i[2]);
    }
    function Di(t, e) {
      var i = pi(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), fi(i[0], i[1], i[2]);
    }
    function Ni(t, e) {
      var i = pi(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), fi(i[0], i[1], i[2]);
    }
    (function() {
      var t = [], e, i;
      for (e = 0; e < 256; e += 1) i = e.toString(16), t[e] = i.length === 1 ? "0" + i : i;
      return function(s, r, n) {
        return s < 0 && (s = 0), r < 0 && (r = 0), n < 0 && (n = 0), "#" + t[s] + t[r] + t[n];
      };
    })();
    var Vs = function(e) {
      xi = !!e;
    }, Bs = function() {
      return xi;
    }, Rs = function(e) {
      Mi = e;
    }, Ne = function() {
      return Mi;
    }, qe = function(e) {
      Ii = e;
    }, _e = function() {
      return Ii;
    }, zs = function(e) {
      hi = e;
    };
    function O(t) {
      return document.createElementNS(ye, t);
    }
    function je(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? je = function(i) {
        return typeof i;
      } : je = function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, je(t);
    }
    var we = /* @__PURE__ */ function() {
      var t = 1, e = [], i, s, r = { onmessage: function() {
      }, postMessage: function(_) {
        i({ data: _ });
      } }, n = { postMessage: function(_) {
        r.onmessage({ data: _ });
      } };
      function a(l) {
        if (window.Worker && window.Blob && Cs()) {
          var _ = new Blob(["var _workerSelf = self; self.onmessage = ", l.toString()], { type: "text/javascript" }), k = URL.createObjectURL(_);
          return new Worker(k);
        }
        return i = l, r;
      }
      function u() {
        s || (s = a(function(_) {
          function k() {
            function C(F, m2) {
              var S, o, f = F.length, M, A, B, q;
              for (o = 0; o < f; o += 1) if (S = F[o], "ks" in S && !S.completed) {
                if (S.completed = true, S.hasMask) {
                  var W = S.masksProperties;
                  for (A = W.length, M = 0; M < A; M += 1) if (W[M].pt.k.i) b(W[M].pt.k);
                  else for (q = W[M].pt.k.length, B = 0; B < q; B += 1) W[M].pt.k[B].s && b(W[M].pt.k[B].s[0]), W[M].pt.k[B].e && b(W[M].pt.k[B].e[0]);
                }
                S.ty === 0 ? (S.layers = p(S.refId, m2), C(S.layers, m2)) : S.ty === 4 ? c(S.shapes) : S.ty === 5 && G(S);
              }
            }
            function y(F, m2) {
              if (F) {
                var S = 0, o = F.length;
                for (S = 0; S < o; S += 1) F[S].t === 1 && (F[S].data.layers = p(F[S].data.refId, m2), C(F[S].data.layers, m2));
              }
            }
            function v(F, m2) {
              for (var S = 0, o = m2.length; S < o; ) {
                if (m2[S].id === F) return m2[S];
                S += 1;
              }
              return null;
            }
            function p(F, m2) {
              var S = v(F, m2);
              return S ? S.layers.__used ? JSON.parse(JSON.stringify(S.layers)) : (S.layers.__used = true, S.layers) : null;
            }
            function c(F) {
              var m2, S = F.length, o, f;
              for (m2 = S - 1; m2 >= 0; m2 -= 1) if (F[m2].ty === "sh") if (F[m2].ks.k.i) b(F[m2].ks.k);
              else for (f = F[m2].ks.k.length, o = 0; o < f; o += 1) F[m2].ks.k[o].s && b(F[m2].ks.k[o].s[0]), F[m2].ks.k[o].e && b(F[m2].ks.k[o].e[0]);
              else F[m2].ty === "gr" && c(F[m2].it);
            }
            function b(F) {
              var m2, S = F.i.length;
              for (m2 = 0; m2 < S; m2 += 1) F.i[m2][0] += F.v[m2][0], F.i[m2][1] += F.v[m2][1], F.o[m2][0] += F.v[m2][0], F.o[m2][1] += F.v[m2][1];
            }
            function P(F, m2) {
              var S = m2 ? m2.split(".") : [100, 100, 100];
              return F[0] > S[0] ? true : S[0] > F[0] ? false : F[1] > S[1] ? true : S[1] > F[1] ? false : F[2] > S[2] ? true : S[2] > F[2] ? false : null;
            }
            var x = /* @__PURE__ */ function() {
              var F = [4, 4, 14];
              function m2(o) {
                var f = o.t.d;
                o.t.d = { k: [{ s: f, t: 0 }] };
              }
              function S(o) {
                var f, M = o.length;
                for (f = 0; f < M; f += 1) o[f].ty === 5 && m2(o[f]);
              }
              return function(o) {
                if (P(F, o.v) && (S(o.layers), o.assets)) {
                  var f, M = o.assets.length;
                  for (f = 0; f < M; f += 1) o.assets[f].layers && S(o.assets[f].layers);
                }
              };
            }(), T = /* @__PURE__ */ function() {
              var F = [4, 7, 99];
              return function(m2) {
                if (m2.chars && !P(F, m2.v)) {
                  var S, o = m2.chars.length;
                  for (S = 0; S < o; S += 1) {
                    var f = m2.chars[S];
                    f.data && f.data.shapes && (c(f.data.shapes), f.data.ip = 0, f.data.op = 99999, f.data.st = 0, f.data.sr = 1, f.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, m2.chars[S].t || (f.data.shapes.push({ ty: "no" }), f.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                  }
                }
              };
            }(), I = /* @__PURE__ */ function() {
              var F = [5, 7, 15];
              function m2(o) {
                var f = o.t.p;
                typeof f.a == "number" && (f.a = { a: 0, k: f.a }), typeof f.p == "number" && (f.p = { a: 0, k: f.p }), typeof f.r == "number" && (f.r = { a: 0, k: f.r });
              }
              function S(o) {
                var f, M = o.length;
                for (f = 0; f < M; f += 1) o[f].ty === 5 && m2(o[f]);
              }
              return function(o) {
                if (P(F, o.v) && (S(o.layers), o.assets)) {
                  var f, M = o.assets.length;
                  for (f = 0; f < M; f += 1) o.assets[f].layers && S(o.assets[f].layers);
                }
              };
            }(), j = /* @__PURE__ */ function() {
              var F = [4, 1, 9];
              function m2(o) {
                var f, M = o.length, A, B;
                for (f = 0; f < M; f += 1) if (o[f].ty === "gr") m2(o[f].it);
                else if (o[f].ty === "fl" || o[f].ty === "st") if (o[f].c.k && o[f].c.k[0].i) for (B = o[f].c.k.length, A = 0; A < B; A += 1) o[f].c.k[A].s && (o[f].c.k[A].s[0] /= 255, o[f].c.k[A].s[1] /= 255, o[f].c.k[A].s[2] /= 255, o[f].c.k[A].s[3] /= 255), o[f].c.k[A].e && (o[f].c.k[A].e[0] /= 255, o[f].c.k[A].e[1] /= 255, o[f].c.k[A].e[2] /= 255, o[f].c.k[A].e[3] /= 255);
                else o[f].c.k[0] /= 255, o[f].c.k[1] /= 255, o[f].c.k[2] /= 255, o[f].c.k[3] /= 255;
              }
              function S(o) {
                var f, M = o.length;
                for (f = 0; f < M; f += 1) o[f].ty === 4 && m2(o[f].shapes);
              }
              return function(o) {
                if (P(F, o.v) && (S(o.layers), o.assets)) {
                  var f, M = o.assets.length;
                  for (f = 0; f < M; f += 1) o.assets[f].layers && S(o.assets[f].layers);
                }
              };
            }(), D = /* @__PURE__ */ function() {
              var F = [4, 4, 18];
              function m2(o) {
                var f, M = o.length, A, B;
                for (f = M - 1; f >= 0; f -= 1) if (o[f].ty === "sh") if (o[f].ks.k.i) o[f].ks.k.c = o[f].closed;
                else for (B = o[f].ks.k.length, A = 0; A < B; A += 1) o[f].ks.k[A].s && (o[f].ks.k[A].s[0].c = o[f].closed), o[f].ks.k[A].e && (o[f].ks.k[A].e[0].c = o[f].closed);
                else o[f].ty === "gr" && m2(o[f].it);
              }
              function S(o) {
                var f, M, A = o.length, B, q, W, X;
                for (M = 0; M < A; M += 1) {
                  if (f = o[M], f.hasMask) {
                    var Y = f.masksProperties;
                    for (q = Y.length, B = 0; B < q; B += 1) if (Y[B].pt.k.i) Y[B].pt.k.c = Y[B].cl;
                    else for (X = Y[B].pt.k.length, W = 0; W < X; W += 1) Y[B].pt.k[W].s && (Y[B].pt.k[W].s[0].c = Y[B].cl), Y[B].pt.k[W].e && (Y[B].pt.k[W].e[0].c = Y[B].cl);
                  }
                  f.ty === 4 && m2(f.shapes);
                }
              }
              return function(o) {
                if (P(F, o.v) && (S(o.layers), o.assets)) {
                  var f, M = o.assets.length;
                  for (f = 0; f < M; f += 1) o.assets[f].layers && S(o.assets[f].layers);
                }
              };
            }();
            function L(F) {
              F.__complete || (j(F), x(F), T(F), I(F), D(F), C(F.layers, F.assets), y(F.chars, F.assets), F.__complete = true);
            }
            function G(F) {
              F.t.a.length === 0 && "m" in F.t.p;
            }
            var R = {};
            return R.completeData = L, R.checkColors = j, R.checkChars = T, R.checkPathProperties = I, R.checkShapes = D, R.completeLayers = C, R;
          }
          if (n.dataManager || (n.dataManager = k()), n.assetLoader || (n.assetLoader = /* @__PURE__ */ function() {
            function C(v) {
              var p = v.getResponseHeader("content-type");
              return p && v.responseType === "json" && p.indexOf("json") !== -1 || v.response && je(v.response) === "object" ? v.response : v.response && typeof v.response == "string" ? JSON.parse(v.response) : v.responseText ? JSON.parse(v.responseText) : null;
            }
            function y(v, p, c, b) {
              var P, x = new XMLHttpRequest();
              try {
                x.responseType = "json";
              } catch {
              }
              x.onreadystatechange = function() {
                if (x.readyState === 4) if (x.status === 200) P = C(x), c(P);
                else try {
                  P = C(x), c(P);
                } catch (T) {
                  b && b(T);
                }
              };
              try {
                x.open(["G", "E", "T"].join(""), v, true);
              } catch {
                x.open(["G", "E", "T"].join(""), p + "/" + v, true);
              }
              x.send();
            }
            return { load: y };
          }()), _.data.type === "loadAnimation") n.assetLoader.load(_.data.path, _.data.fullPath, function(C) {
            n.dataManager.completeData(C), n.postMessage({ id: _.data.id, payload: C, status: "success" });
          }, function() {
            n.postMessage({ id: _.data.id, status: "error" });
          });
          else if (_.data.type === "complete") {
            var w = _.data.animation;
            n.dataManager.completeData(w), n.postMessage({ id: _.data.id, payload: w, status: "success" });
          } else _.data.type === "loadData" && n.assetLoader.load(_.data.path, _.data.fullPath, function(C) {
            n.postMessage({ id: _.data.id, payload: C, status: "success" });
          }, function() {
            n.postMessage({ id: _.data.id, status: "error" });
          });
        }), s.onmessage = function(l) {
          var _ = l.data, k = _.id, w = e[k];
          e[k] = null, _.status === "success" ? w.onComplete(_.payload) : w.onError && w.onError();
        });
      }
      function h(l, _) {
        t += 1;
        var k = "processId_" + t;
        return e[k] = { onComplete: l, onError: _ }, k;
      }
      function d(l, _, k) {
        u();
        var w = h(_, k);
        s.postMessage({ type: "loadAnimation", path: l, fullPath: window.location.origin + window.location.pathname, id: w });
      }
      function g(l, _, k) {
        u();
        var w = h(_, k);
        s.postMessage({ type: "loadData", path: l, fullPath: window.location.origin + window.location.pathname, id: w });
      }
      function E(l, _, k) {
        u();
        var w = h(_, k);
        s.postMessage({ type: "complete", animation: l, id: w });
      }
      return { loadAnimation: d, loadData: g, completeAnimation: E };
    }(), Os = function() {
      var t = function() {
        var y = at("canvas");
        y.width = 1, y.height = 1;
        var v = y.getContext("2d");
        return v.fillStyle = "rgba(0,0,0,0)", v.fillRect(0, 0, 1, 1), y;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function s(y, v, p) {
        var c = "";
        if (y.e) c = y.p;
        else if (v) {
          var b = y.p;
          b.indexOf("images/") !== -1 && (b = b.split("/")[1]), c = v + b;
        } else c = p, c += y.u ? y.u : "", c += y.p;
        return c;
      }
      function r(y) {
        var v = 0, p = setInterval((function() {
          var c = y.getBBox();
          (c.width || v > 500) && (this._imageLoaded(), clearInterval(p)), v += 1;
        }).bind(this), 50);
      }
      function n(y) {
        var v = s(y, this.assetsPath, this.path), p = O("image");
        Fs ? this.testImageLoaded(p) : p.addEventListener("load", this._imageLoaded, false), p.addEventListener("error", (function() {
          c.img = t, this._imageLoaded();
        }).bind(this), false), p.setAttributeNS("http://www.w3.org/1999/xlink", "href", v), this._elementHelper.append ? this._elementHelper.append(p) : this._elementHelper.appendChild(p);
        var c = { img: p, assetData: y };
        return c;
      }
      function a(y) {
        var v = s(y, this.assetsPath, this.path), p = at("img");
        p.crossOrigin = "anonymous", p.addEventListener("load", this._imageLoaded, false), p.addEventListener("error", (function() {
          c.img = t, this._imageLoaded();
        }).bind(this), false), p.src = v;
        var c = { img: p, assetData: y };
        return c;
      }
      function u(y) {
        var v = { assetData: y }, p = s(y, this.assetsPath, this.path);
        return we.loadData(p, (function(c) {
          v.img = c, this._footageLoaded();
        }).bind(this), (function() {
          v.img = {}, this._footageLoaded();
        }).bind(this)), v;
      }
      function h(y, v) {
        this.imagesLoadedCb = v;
        var p, c = y.length;
        for (p = 0; p < c; p += 1) y[p].layers || (!y[p].t || y[p].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(y[p]))) : y[p].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(y[p]))));
      }
      function d(y) {
        this.path = y || "";
      }
      function g(y) {
        this.assetsPath = y || "";
      }
      function E(y) {
        for (var v = 0, p = this.images.length; v < p; ) {
          if (this.images[v].assetData === y) return this.images[v].img;
          v += 1;
        }
        return null;
      }
      function l() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function _() {
        return this.totalImages === this.loadedAssets;
      }
      function k() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function w(y, v) {
        y === "svg" ? (this._elementHelper = v, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function C() {
        this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = r.bind(this), this.createFootageData = u.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return C.prototype = { loadAssets: h, setAssetsPath: g, setPath: d, loadedImages: _, loadedFootages: k, destroy: l, getAsset: E, createImgData: a, createImageData: n, imageLoaded: e, footageLoaded: i, setCacheType: w }, C;
    }();
    function ji() {
    }
    ji.prototype = { triggerEvent: function(e, i) {
      if (this._cbs[e]) for (var s = this._cbs[e], r = 0; r < s.length; r += 1) s[r](i);
    }, addEventListener: function(e, i) {
      return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(i), (function() {
        this.removeEventListener(e, i);
      }).bind(this);
    }, removeEventListener: function(e, i) {
      if (!i) this._cbs[e] = null;
      else if (this._cbs[e]) {
        for (var s = 0, r = this._cbs[e].length; s < r; ) this._cbs[e][s] === i && (this._cbs[e].splice(s, 1), s -= 1, r -= 1), s += 1;
        this._cbs[e].length || (this._cbs[e] = null);
      }
    } };
    var Ds = /* @__PURE__ */ function() {
      function t(e) {
        for (var i = e.split(`\r
`), s = {}, r, n = 0, a = 0; a < i.length; a += 1) r = i[a].split(":"), r.length === 2 && (s[r[0]] = r[1].trim(), n += 1);
        if (n === 0) throw new Error();
        return s;
      }
      return function(e) {
        for (var i = [], s = 0; s < e.length; s += 1) {
          var r = e[s], n = { time: r.tm, duration: r.dr };
          try {
            n.payload = JSON.parse(e[s].cm);
          } catch {
            try {
              n.payload = t(e[s].cm);
            } catch {
              n.payload = { name: e[s].cm };
            }
          }
          i.push(n);
        }
        return i;
      };
    }(), Ns = /* @__PURE__ */ function() {
      function t(e) {
        this.compositions.push(e);
      }
      return function() {
        function e(i) {
          for (var s = 0, r = this.compositions.length; s < r; ) {
            if (this.compositions[s].data && this.compositions[s].data.nm === i) return this.compositions[s].prepareFrame && this.compositions[s].data.xt && this.compositions[s].prepareFrame(this.currentFrame), this.compositions[s].compInterface;
            s += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    }(), Se = {}, qs = function(e, i) {
      Se[e] = i;
    };
    function js(t) {
      return Se[t];
    }
    function Ws() {
      if (Se.canvas) return "canvas";
      for (var t in Se) if (Se[t]) return t;
      return "";
    }
    function ke(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ke = function(i) {
        return typeof i;
      } : ke = function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, ke(t);
    }
    var N = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = dt(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = Bs(), this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = Ns(), this.imagePreloader = new Os(), this.audioController = Ts(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new li("drawnFrame", 0, 0, 0), this.expressionsPlugin = Ne();
    };
    H([ji], N), N.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var i = js(e);
      this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === true ? this.loop = true : t.loop === false ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : true, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : true, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), we.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, N.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, N.prototype.setupAnimation = function(t) {
      we.completeAnimation(t, this.configAnimation);
    }, N.prototype.setData = function(t, e) {
      e && ke(e) !== "object" && (e = JSON.parse(e));
      var i = { wrapper: t, animationData: e }, s = t.attributes;
      i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : Ws() || "canvas";
      var r = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
      r === "false" ? i.loop = false : r === "true" ? i.loop = true : r !== "" && (i.loop = parseInt(r, 10));
      var n = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : s.getNamedItem("bm-autoplay") ? s.getNamedItem("bm-autoplay").value : true;
      i.autoplay = n !== "false", i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "";
      var a = s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "";
      a === "false" && (i.prerender = false), i.path ? this.setParams(i) : this.trigger("destroy");
    }, N.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e = this.animationData.layers, i, s = e.length, r = t.layers, n, a = r.length;
      for (n = 0; n < a; n += 1) for (i = 0; i < s; ) {
        if (e[i].id === r[n].id) {
          e[i] = r[n];
          break;
        }
        i += 1;
      }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (s = t.assets.length, i = 0; i < s; i += 1) this.animationData.assets.push(t.assets[i]);
      this.animationData.__complete = false, we.completeAnimation(this.animationData, this.onSegmentComplete);
    }, N.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = Ne();
      e && e.initExpressions(this), this.loadNextSegment();
    }, N.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || t.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, we.loadData(i, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, N.prototype.loadSegments = function() {
      var t = this.animationData.segments;
      t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, N.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, N.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, N.prototype.configAnimation = function(t) {
      if (this.renderer) try {
        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = Ds(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
      } catch (e) {
        this.triggerConfigError(e);
      }
    }, N.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, N.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = true;
        var t = Ne();
        t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, N.prototype.resize = function(t, e) {
      var i = typeof t == "number" ? t : void 0, s = typeof e == "number" ? e : void 0;
      this.renderer.updateContainerSize(i, s);
    }, N.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, N.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, N.prototype.renderFrame = function() {
      if (!(this.isLoaded === false || !this.renderer)) try {
        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
      } catch (t) {
        this.triggerRenderFrameError(t);
      }
    }, N.prototype.play = function(t) {
      t && this.name !== t || this.isPaused === true && (this.isPaused = false, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = false, this.trigger("_active")));
    }, N.prototype.pause = function(t) {
      t && this.name !== t || this.isPaused === false && (this.isPaused = true, this.trigger("_pause"), this._idle = true, this.trigger("_idle"), this.audioController.pause());
    }, N.prototype.togglePause = function(t) {
      t && this.name !== t || (this.isPaused === true ? this.play() : this.pause());
    }, N.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
    }, N.prototype.getMarkerData = function(t) {
      for (var e, i = 0; i < this.markers.length; i += 1) if (e = this.markers[i], e.payload && e.payload.name === t) return e;
      return null;
    }, N.prototype.goToAndStop = function(t, e, i) {
      if (!(i && this.name !== i)) {
        var s = Number(t);
        if (isNaN(s)) {
          var r = this.getMarkerData(t);
          r && this.goToAndStop(r.time, true);
        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, N.prototype.goToAndPlay = function(t, e, i) {
      if (!(i && this.name !== i)) {
        var s = Number(t);
        if (isNaN(s)) {
          var r = this.getMarkerData(t);
          r && (r.duration ? this.playSegments([r.time, r.time + r.duration], true) : this.goToAndStop(r.time, true));
        } else this.goToAndStop(s, e, i);
        this.play();
      }
    }, N.prototype.advanceTime = function(t) {
      if (!(this.isPaused === true || this.isLoaded === false)) {
        var e = this.currentRawFrame + t * this.frameModifier, i = false;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = true, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== true) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true) : (i = true, e = 0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, N.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, N.prototype.setSegment = function(t, e) {
      var i = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, i !== -1 && this.goToAndStop(i, true);
    }, N.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), ke(t[0]) === "object") {
        var i, s = t.length;
        for (i = 0; i < s; i += 1) this.segments.push(t[i]);
      } else this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, N.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, N.prototype.checkSegments = function(t) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), true) : false;
    }, N.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, N.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, N.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, N.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, N.prototype.setLoop = function(t) {
      this.loop = t;
    }, N.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, N.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, N.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, N.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, N.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, N.prototype.getPath = function() {
      return this.path;
    }, N.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e) e = t.p;
      else if (this.assetsPath) {
        var i = t.p;
        i.indexOf("images/") !== -1 && (i = i.split("/")[1]), e = this.assetsPath + i;
      } else e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, N.prototype.getAssetData = function(t) {
      for (var e = 0, i = this.assets.length; e < i; ) {
        if (t === this.assets[e].id) return this.assets[e];
        e += 1;
      }
      return null;
    }, N.prototype.hide = function() {
      this.renderer.hide();
    }, N.prototype.show = function() {
      this.renderer.show();
    }, N.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, N.prototype.updateDocumentData = function(t, e, i) {
      try {
        var s = this.renderer.getElementByPath(t);
        s.updateDocumentData(e, i);
      } catch {
      }
    }, N.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t]) switch (t) {
        case "enterFrame":
          this.triggerEvent(t, new li(t, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "drawnFrame":
          this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
          break;
        case "loopComplete":
          this.triggerEvent(t, new Bi(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new Vi(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new Ri(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new zi(t, this));
          break;
        default:
          this.triggerEvent(t);
      }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new li(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new Bi(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new Vi(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new Ri(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new zi(t, this));
    }, N.prototype.triggerRenderFrameError = function(t) {
      var e = new Is(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, N.prototype.triggerConfigError = function(t) {
      var e = new Ls(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var et = function() {
      var t = {}, e = [], i = 0, s = 0, r = 0, n = true, a = false;
      function u(m2) {
        for (var S = 0, o = m2.target; S < s; ) e[S].animation === o && (e.splice(S, 1), S -= 1, s -= 1, o.isPaused || E()), S += 1;
      }
      function h(m2, S) {
        if (!m2) return null;
        for (var o = 0; o < s; ) {
          if (e[o].elem === m2 && e[o].elem !== null) return e[o].animation;
          o += 1;
        }
        var f = new N();
        return l(f, m2), f.setData(m2, S), f;
      }
      function d() {
        var m2, S = e.length, o = [];
        for (m2 = 0; m2 < S; m2 += 1) o.push(e[m2].animation);
        return o;
      }
      function g() {
        r += 1, j();
      }
      function E() {
        r -= 1;
      }
      function l(m2, S) {
        m2.addEventListener("destroy", u), m2.addEventListener("_active", g), m2.addEventListener("_idle", E), e.push({ elem: S, animation: m2 }), s += 1;
      }
      function _(m2) {
        var S = new N();
        return l(S, null), S.setParams(m2), S;
      }
      function k(m2, S) {
        var o;
        for (o = 0; o < s; o += 1) e[o].animation.setSpeed(m2, S);
      }
      function w(m2, S) {
        var o;
        for (o = 0; o < s; o += 1) e[o].animation.setDirection(m2, S);
      }
      function C(m2) {
        var S;
        for (S = 0; S < s; S += 1) e[S].animation.play(m2);
      }
      function y(m2) {
        var S = m2 - i, o;
        for (o = 0; o < s; o += 1) e[o].animation.advanceTime(S);
        i = m2, r && !a ? window.requestAnimationFrame(y) : n = true;
      }
      function v(m2) {
        i = m2, window.requestAnimationFrame(y);
      }
      function p(m2) {
        var S;
        for (S = 0; S < s; S += 1) e[S].animation.pause(m2);
      }
      function c(m2, S, o) {
        var f;
        for (f = 0; f < s; f += 1) e[f].animation.goToAndStop(m2, S, o);
      }
      function b(m2) {
        var S;
        for (S = 0; S < s; S += 1) e[S].animation.stop(m2);
      }
      function P(m2) {
        var S;
        for (S = 0; S < s; S += 1) e[S].animation.togglePause(m2);
      }
      function x(m2) {
        var S;
        for (S = s - 1; S >= 0; S -= 1) e[S].animation.destroy(m2);
      }
      function T(m2, S, o) {
        var f = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), M, A = f.length;
        for (M = 0; M < A; M += 1) o && f[M].setAttribute("data-bm-type", o), h(f[M], m2);
        if (S && A === 0) {
          o || (o = "svg");
          var B = document.getElementsByTagName("body")[0];
          B.innerText = "";
          var q = at("div");
          q.style.width = "100%", q.style.height = "100%", q.setAttribute("data-bm-type", o), B.appendChild(q), h(q, m2);
        }
      }
      function I() {
        var m2;
        for (m2 = 0; m2 < s; m2 += 1) e[m2].animation.resize();
      }
      function j() {
        !a && r && n && (window.requestAnimationFrame(v), n = false);
      }
      function D() {
        a = true;
      }
      function L() {
        a = false, j();
      }
      function G(m2, S) {
        var o;
        for (o = 0; o < s; o += 1) e[o].animation.setVolume(m2, S);
      }
      function R(m2) {
        var S;
        for (S = 0; S < s; S += 1) e[S].animation.mute(m2);
      }
      function F(m2) {
        var S;
        for (S = 0; S < s; S += 1) e[S].animation.unmute(m2);
      }
      return t.registerAnimation = h, t.loadAnimation = _, t.setSpeed = k, t.setDirection = w, t.play = C, t.pause = p, t.stop = b, t.togglePause = P, t.searchAnimations = T, t.resize = I, t.goToAndStop = c, t.destroy = x, t.freeze = D, t.unfreeze = L, t.setVolume = G, t.mute = R, t.unmute = F, t.getRegisteredAnimations = d, t;
    }(), Pe = function() {
      var t = {};
      t.getBezierEasing = i;
      var e = {};
      function i(v, p, c, b, P) {
        var x = P || ("bez_" + v + "_" + p + "_" + c + "_" + b).replace(/\./g, "p");
        if (e[x]) return e[x];
        var T = new y([v, p, c, b]);
        return e[x] = T, T;
      }
      var s = 4, r = 1e-3, n = 1e-7, a = 10, u = 11, h = 1 / (u - 1), d = typeof Float32Array == "function";
      function g(v, p) {
        return 1 - 3 * p + 3 * v;
      }
      function E(v, p) {
        return 3 * p - 6 * v;
      }
      function l(v) {
        return 3 * v;
      }
      function _(v, p, c) {
        return ((g(p, c) * v + E(p, c)) * v + l(p)) * v;
      }
      function k(v, p, c) {
        return 3 * g(p, c) * v * v + 2 * E(p, c) * v + l(p);
      }
      function w(v, p, c, b, P) {
        var x, T, I = 0;
        do
          T = p + (c - p) / 2, x = _(T, b, P) - v, x > 0 ? c = T : p = T;
        while (Math.abs(x) > n && ++I < a);
        return T;
      }
      function C(v, p, c, b) {
        for (var P = 0; P < s; ++P) {
          var x = k(p, c, b);
          if (x === 0) return p;
          var T = _(p, c, b) - v;
          p -= T / x;
        }
        return p;
      }
      function y(v) {
        this._p = v, this._mSampleValues = d ? new Float32Array(u) : new Array(u), this._precomputed = false, this.get = this.get.bind(this);
      }
      return y.prototype = { get: function(p) {
        var c = this._p[0], b = this._p[1], P = this._p[2], x = this._p[3];
        return this._precomputed || this._precompute(), c === b && P === x ? p : p === 0 ? 0 : p === 1 ? 1 : _(this._getTForX(p), b, x);
      }, _precompute: function() {
        var p = this._p[0], c = this._p[1], b = this._p[2], P = this._p[3];
        this._precomputed = true, (p !== c || b !== P) && this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var p = this._p[0], c = this._p[2], b = 0; b < u; ++b) this._mSampleValues[b] = _(b * h, p, c);
      }, _getTForX: function(p) {
        for (var c = this._p[0], b = this._p[2], P = this._mSampleValues, x = 0, T = 1, I = u - 1; T !== I && P[T] <= p; ++T) x += h;
        --T;
        var j = (p - P[T]) / (P[T + 1] - P[T]), D = x + j * h, L = k(D, c, b);
        return L >= r ? C(p, D, c, b) : L === 0 ? D : w(p, x, x + h, c, b);
      } }, t;
    }(), Wi = /* @__PURE__ */ function() {
      function t(e) {
        return e.concat($(e.length));
      }
      return { double: t };
    }(), We = /* @__PURE__ */ function() {
      return function(t, e, i) {
        var s = 0, r = t, n = $(r), a = { newElement: u, release: h };
        function u() {
          var d;
          return s ? (s -= 1, d = n[s]) : d = e(), d;
        }
        function h(d) {
          s === r && (n = Wi.double(n), r *= 2), i && i(d), n[s] = d, s += 1;
        }
        return a;
      };
    }(), Gi = function() {
      function t() {
        return { addedLength: 0, percents: ht("float32", _e()), lengths: ht("float32", _e()) };
      }
      return We(8, t);
    }(), Hi = function() {
      function t() {
        return { lengths: [], totalLength: 0 };
      }
      function e(i) {
        var s, r = i.lengths.length;
        for (s = 0; s < r; s += 1) Gi.release(i.lengths[s]);
        i.lengths.length = 0;
      }
      return We(8, t, e);
    }();
    function Gs() {
      var t = Math;
      function e(l, _, k, w, C, y) {
        var v = l * w + _ * C + k * y - C * w - y * l - k * _;
        return v > -1e-3 && v < 1e-3;
      }
      function i(l, _, k, w, C, y, v, p, c) {
        if (k === 0 && y === 0 && c === 0) return e(l, _, w, C, v, p);
        var b = t.sqrt(t.pow(w - l, 2) + t.pow(C - _, 2) + t.pow(y - k, 2)), P = t.sqrt(t.pow(v - l, 2) + t.pow(p - _, 2) + t.pow(c - k, 2)), x = t.sqrt(t.pow(v - w, 2) + t.pow(p - C, 2) + t.pow(c - y, 2)), T;
        return b > P ? b > x ? T = b - P - x : T = x - P - b : x > P ? T = x - P - b : T = P - b - x, T > -1e-4 && T < 1e-4;
      }
      var s = /* @__PURE__ */ function() {
        return function(l, _, k, w) {
          var C = _e(), y, v, p, c, b, P = 0, x, T = [], I = [], j = Gi.newElement();
          for (p = k.length, y = 0; y < C; y += 1) {
            for (b = y / (C - 1), x = 0, v = 0; v < p; v += 1) c = ct(1 - b, 3) * l[v] + 3 * ct(1 - b, 2) * b * k[v] + 3 * (1 - b) * ct(b, 2) * w[v] + ct(b, 3) * _[v], T[v] = c, I[v] !== null && (x += ct(T[v] - I[v], 2)), I[v] = T[v];
            x && (x = Oe(x), P += x), j.percents[y] = b, j.lengths[y] = P;
          }
          return j.addedLength = P, j;
        };
      }();
      function r(l) {
        var _ = Hi.newElement(), k = l.c, w = l.v, C = l.o, y = l.i, v, p = l._length, c = _.lengths, b = 0;
        for (v = 0; v < p - 1; v += 1) c[v] = s(w[v], w[v + 1], C[v], y[v + 1]), b += c[v].addedLength;
        return k && p && (c[v] = s(w[v], w[0], C[v], y[0]), b += c[v].addedLength), _.totalLength = b, _;
      }
      function n(l) {
        this.segmentLength = 0, this.points = new Array(l);
      }
      function a(l, _) {
        this.partialLength = l, this.point = _;
      }
      var u = /* @__PURE__ */ function() {
        var l = {};
        return function(_, k, w, C) {
          var y = (_[0] + "_" + _[1] + "_" + k[0] + "_" + k[1] + "_" + w[0] + "_" + w[1] + "_" + C[0] + "_" + C[1]).replace(/\./g, "p");
          if (!l[y]) {
            var v = _e(), p, c, b, P, x, T = 0, I, j, D = null;
            _.length === 2 && (_[0] !== k[0] || _[1] !== k[1]) && e(_[0], _[1], k[0], k[1], _[0] + w[0], _[1] + w[1]) && e(_[0], _[1], k[0], k[1], k[0] + C[0], k[1] + C[1]) && (v = 2);
            var L = new n(v);
            for (b = w.length, p = 0; p < v; p += 1) {
              for (j = $(b), x = p / (v - 1), I = 0, c = 0; c < b; c += 1) P = ct(1 - x, 3) * _[c] + 3 * ct(1 - x, 2) * x * (_[c] + w[c]) + 3 * (1 - x) * ct(x, 2) * (k[c] + C[c]) + ct(x, 3) * k[c], j[c] = P, D !== null && (I += ct(j[c] - D[c], 2));
              I = Oe(I), T += I, L.points[p] = new a(I, j), D = j;
            }
            L.segmentLength = T, l[y] = L;
          }
          return l[y];
        };
      }();
      function h(l, _) {
        var k = _.percents, w = _.lengths, C = k.length, y = ee((C - 1) * l), v = l * _.addedLength, p = 0;
        if (y === C - 1 || y === 0 || v === w[y]) return k[y];
        for (var c = w[y] > v ? -1 : 1, b = true; b; ) if (w[y] <= v && w[y + 1] > v ? (p = (v - w[y]) / (w[y + 1] - w[y]), b = false) : y += c, y < 0 || y >= C - 1) {
          if (y === C - 1) return k[y];
          b = false;
        }
        return k[y] + (k[y + 1] - k[y]) * p;
      }
      function d(l, _, k, w, C, y) {
        var v = h(C, y), p = 1 - v, c = t.round((p * p * p * l[0] + (v * p * p + p * v * p + p * p * v) * k[0] + (v * v * p + p * v * v + v * p * v) * w[0] + v * v * v * _[0]) * 1e3) / 1e3, b = t.round((p * p * p * l[1] + (v * p * p + p * v * p + p * p * v) * k[1] + (v * v * p + p * v * v + v * p * v) * w[1] + v * v * v * _[1]) * 1e3) / 1e3;
        return [c, b];
      }
      var g = ht("float32", 8);
      function E(l, _, k, w, C, y, v) {
        C < 0 ? C = 0 : C > 1 && (C = 1);
        var p = h(C, v);
        y = y > 1 ? 1 : y;
        var c = h(y, v), b, P = l.length, x = 1 - p, T = 1 - c, I = x * x * x, j = p * x * x * 3, D = p * p * x * 3, L = p * p * p, G = x * x * T, R = p * x * T + x * p * T + x * x * c, F = p * p * T + x * p * c + p * x * c, m2 = p * p * c, S = x * T * T, o = p * T * T + x * c * T + x * T * c, f = p * c * T + x * c * c + p * T * c, M = p * c * c, A = T * T * T, B = c * T * T + T * c * T + T * T * c, q = c * c * T + T * c * c + c * T * c, W = c * c * c;
        for (b = 0; b < P; b += 1) g[b * 4] = t.round((I * l[b] + j * k[b] + D * w[b] + L * _[b]) * 1e3) / 1e3, g[b * 4 + 1] = t.round((G * l[b] + R * k[b] + F * w[b] + m2 * _[b]) * 1e3) / 1e3, g[b * 4 + 2] = t.round((S * l[b] + o * k[b] + f * w[b] + M * _[b]) * 1e3) / 1e3, g[b * 4 + 3] = t.round((A * l[b] + B * k[b] + q * w[b] + W * _[b]) * 1e3) / 1e3;
        return g;
      }
      return { getSegmentsLength: r, getNewSegment: E, getPointInSegment: d, buildBezierData: u, pointOnLine2D: e, pointOnLine3D: i };
    }
    var Mt = Gs(), ie = ai, Xi = Math.abs;
    function Yi(t, e) {
      var i = this.offsetTime, s;
      this.propType === "multidimensional" && (s = ht("float32", this.pv.length));
      for (var r = e.lastIndex, n = r, a = this.keyframes.length - 1, u = true, h, d, g; u; ) {
        if (h = this.keyframes[n], d = this.keyframes[n + 1], n === a - 1 && t >= d.t - i) {
          h.h && (h = d), r = 0;
          break;
        }
        if (d.t - i > t) {
          r = n;
          break;
        }
        n < a - 1 ? n += 1 : (r = 0, u = false);
      }
      g = this.keyframesMetadata[n] || {};
      var E, l, _, k, w, C, y = d.t - i, v = h.t - i, p;
      if (h.to) {
        g.bezierData || (g.bezierData = Mt.buildBezierData(h.s, d.s || h.e, h.to, h.ti));
        var c = g.bezierData;
        if (t >= y || t < v) {
          var b = t >= y ? c.points.length - 1 : 0;
          for (l = c.points[b].point.length, E = 0; E < l; E += 1) s[E] = c.points[b].point[E];
        } else {
          g.__fnct ? C = g.__fnct : (C = Pe.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y, h.n).get, g.__fnct = C), _ = C((t - v) / (y - v));
          var P = c.segmentLength * _, x, T = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastAddedLength : 0;
          for (w = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastPoint : 0, u = true, k = c.points.length; u; ) {
            if (T += c.points[w].partialLength, P === 0 || _ === 0 || w === c.points.length - 1) {
              for (l = c.points[w].point.length, E = 0; E < l; E += 1) s[E] = c.points[w].point[E];
              break;
            } else if (P >= T && P < T + c.points[w + 1].partialLength) {
              for (x = (P - T) / c.points[w + 1].partialLength, l = c.points[w].point.length, E = 0; E < l; E += 1) s[E] = c.points[w].point[E] + (c.points[w + 1].point[E] - c.points[w].point[E]) * x;
              break;
            }
            w < k - 1 ? w += 1 : u = false;
          }
          e._lastPoint = w, e._lastAddedLength = T - c.points[w].partialLength, e._lastKeyframeIndex = n;
        }
      } else {
        var I, j, D, L, G;
        if (a = h.s.length, p = d.s || h.e, this.sh && h.h !== 1) if (t >= y) s[0] = p[0], s[1] = p[1], s[2] = p[2];
        else if (t <= v) s[0] = h.s[0], s[1] = h.s[1], s[2] = h.s[2];
        else {
          var R = Zi(h.s), F = Zi(p), m2 = (t - v) / (y - v);
          Xs(s, Hs(R, F, m2));
        }
        else for (n = 0; n < a; n += 1) h.h !== 1 && (t >= y ? _ = 1 : t < v ? _ = 0 : (h.o.x.constructor === Array ? (g.__fnct || (g.__fnct = []), g.__fnct[n] ? C = g.__fnct[n] : (I = h.o.x[n] === void 0 ? h.o.x[0] : h.o.x[n], j = h.o.y[n] === void 0 ? h.o.y[0] : h.o.y[n], D = h.i.x[n] === void 0 ? h.i.x[0] : h.i.x[n], L = h.i.y[n] === void 0 ? h.i.y[0] : h.i.y[n], C = Pe.getBezierEasing(I, j, D, L).get, g.__fnct[n] = C)) : g.__fnct ? C = g.__fnct : (I = h.o.x, j = h.o.y, D = h.i.x, L = h.i.y, C = Pe.getBezierEasing(I, j, D, L).get, h.keyframeMetadata = C), _ = C((t - v) / (y - v)))), p = d.s || h.e, G = h.h === 1 ? h.s[n] : h.s[n] + (p[n] - h.s[n]) * _, this.propType === "multidimensional" ? s[n] = G : s = G;
      }
      return e.lastIndex = r, s;
    }
    function Hs(t, e, i) {
      var s = [], r = t[0], n = t[1], a = t[2], u = t[3], h = e[0], d = e[1], g = e[2], E = e[3], l, _, k, w, C;
      return _ = r * h + n * d + a * g + u * E, _ < 0 && (_ = -_, h = -h, d = -d, g = -g, E = -E), 1 - _ > 1e-6 ? (l = Math.acos(_), k = Math.sin(l), w = Math.sin((1 - i) * l) / k, C = Math.sin(i * l) / k) : (w = 1 - i, C = i), s[0] = w * r + C * h, s[1] = w * n + C * d, s[2] = w * a + C * g, s[3] = w * u + C * E, s;
    }
    function Xs(t, e) {
      var i = e[0], s = e[1], r = e[2], n = e[3], a = Math.atan2(2 * s * n - 2 * i * r, 1 - 2 * s * s - 2 * r * r), u = Math.asin(2 * i * s + 2 * r * n), h = Math.atan2(2 * i * n - 2 * s * r, 1 - 2 * i * i - 2 * r * r);
      t[0] = a / U, t[1] = u / U, t[2] = h / U;
    }
    function Zi(t) {
      var e = t[0] * U, i = t[1] * U, s = t[2] * U, r = Math.cos(e / 2), n = Math.cos(i / 2), a = Math.cos(s / 2), u = Math.sin(e / 2), h = Math.sin(i / 2), d = Math.sin(s / 2), g = r * n * a - u * h * d, E = u * h * a + r * n * d, l = u * n * a + r * h * d, _ = r * h * a - u * n * d;
      return [E, l, _, g];
    }
    function Ki() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== ie && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var s = this.interpolateValue(t, this._caching);
        this.pv = s;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function Ge(t) {
      var e;
      if (this.propType === "unidimensional") e = t * this.mult, Xi(this.v - e) > 1e-5 && (this.v = e, this._mdf = true);
      else for (var i = 0, s = this.v.length; i < s; ) e = t[i] * this.mult, Xi(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = true), i += 1;
    }
    function He() {
      if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
        if (this.lock) {
          this.setVValue(this.pv);
          return;
        }
        this.lock = true, this._mdf = this._isFirstFrame;
        var t, e = this.effectsSequence.length, i = this.kf ? this.pv : this.data.k;
        for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
        this.setVValue(i), this._isFirstFrame = false, this.lock = false, this.frameId = this.elem.globalData.frameId;
      }
    }
    function Xe(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function Ys(t, e, i, s) {
      this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = false, this.elem = t, this.container = s, this.comp = t.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = He, this.setVValue = Ge, this.addEffect = Xe;
    }
    function Zs(t, e, i, s) {
      this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = false, this.elem = t, this.container = s, this.comp = t.comp, this.k = false, this.kf = false, this.frameId = -1;
      var r, n = e.k.length;
      for (this.v = ht("float32", n), this.pv = ht("float32", n), this.vel = ht("float32", n), r = 0; r < n; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
      this._isFirstFrame = true, this.effectsSequence = [], this.getValue = He, this.setVValue = Ge, this.addEffect = Xe;
    }
    function Ks(t, e, i, s) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: ie, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = ie, this.pv = ie, this._isFirstFrame = true, this.getValue = He, this.setVValue = Ge, this.interpolateValue = Yi, this.effectsSequence = [Ki.bind(this)], this.addEffect = Xe;
    }
    function Us(t, e, i, s) {
      this.propType = "multidimensional";
      var r, n = e.k.length, a, u, h, d;
      for (r = 0; r < n - 1; r += 1) e.k[r].to && e.k[r].s && e.k[r + 1] && e.k[r + 1].s && (a = e.k[r].s, u = e.k[r + 1].s, h = e.k[r].to, d = e.k[r].ti, (a.length === 2 && !(a[0] === u[0] && a[1] === u[1]) && Mt.pointOnLine2D(a[0], a[1], u[0], u[1], a[0] + h[0], a[1] + h[1]) && Mt.pointOnLine2D(a[0], a[1], u[0], u[1], u[0] + d[0], u[1] + d[1]) || a.length === 3 && !(a[0] === u[0] && a[1] === u[1] && a[2] === u[2]) && Mt.pointOnLine3D(a[0], a[1], a[2], u[0], u[1], u[2], a[0] + h[0], a[1] + h[1], a[2] + h[2]) && Mt.pointOnLine3D(a[0], a[1], a[2], u[0], u[1], u[2], u[0] + d[0], u[1] + d[1], u[2] + d[2])) && (e.k[r].to = null, e.k[r].ti = null), a[0] === u[0] && a[1] === u[1] && h[0] === 0 && h[1] === 0 && d[0] === 0 && d[1] === 0 && (a.length === 2 || a[2] === u[2] && h[2] === 0 && d[2] === 0) && (e.k[r].to = null, e.k[r].ti = null));
      this.effectsSequence = [Ki.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = He, this.setVValue = Ge, this.interpolateValue = Yi, this.frameId = -1;
      var g = e.k[0].s.length;
      for (this.v = ht("float32", g), this.pv = ht("float32", g), r = 0; r < g; r += 1) this.v[r] = ie, this.pv[r] = ie;
      this._caching = { lastFrame: ie, lastIndex: 0, value: ht("float32", g) }, this.addEffect = Xe;
    }
    var V = /* @__PURE__ */ function() {
      function t(i, s, r, n, a) {
        s.sid && (s = i.globalData.slotManager.getProp(s));
        var u;
        if (!s.k.length) u = new Ys(i, s, n, a);
        else if (typeof s.k[0] == "number") u = new Zs(i, s, n, a);
        else switch (r) {
          case 0:
            u = new Ks(i, s, n, a);
            break;
          case 1:
            u = new Us(i, s, n, a);
            break;
        }
        return u.effectsSequence.length && a.addDynamicProperty(u), u;
      }
      var e = { getProp: t };
      return e;
    }();
    function ot() {
    }
    ot.prototype = { addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = true);
    }, iterateDynamicProperties: function() {
      this._mdf = false;
      var e, i = this.dynamicProperties.length;
      for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = true);
    }, initDynamicPropertyContainer: function(e) {
      this.container = e, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
    } };
    var se = function() {
      function t() {
        return ht("float32", 2);
      }
      return We(8, t);
    }();
    function zt() {
      this.c = false, this._length = 0, this._maxLength = 8, this.v = $(this._maxLength), this.o = $(this._maxLength), this.i = $(this._maxLength);
    }
    zt.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var i = 0; i < e; ) this.v[i] = se.newElement(), this.o[i] = se.newElement(), this.i[i] = se.newElement(), i += 1;
    }, zt.prototype.setLength = function(t) {
      for (; this._maxLength < t; ) this.doubleArrayLength();
      this._length = t;
    }, zt.prototype.doubleArrayLength = function() {
      this.v = this.v.concat($(this._maxLength)), this.i = this.i.concat($(this._maxLength)), this.o = this.o.concat($(this._maxLength)), this._maxLength *= 2;
    }, zt.prototype.setXYAt = function(t, e, i, s, r) {
      var n;
      switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
        case "v":
          n = this.v;
          break;
        case "i":
          n = this.i;
          break;
        case "o":
          n = this.o;
          break;
        default:
          n = [];
          break;
      }
      (!n[s] || n[s] && !r) && (n[s] = se.newElement()), n[s][0] = t, n[s][1] = e;
    }, zt.prototype.setTripleAt = function(t, e, i, s, r, n, a, u) {
      this.setXYAt(t, e, "v", a, u), this.setXYAt(i, s, "o", a, u), this.setXYAt(r, n, "i", a, u);
    }, zt.prototype.reverse = function() {
      var t = new zt();
      t.setPathData(this.c, this._length);
      var e = this.v, i = this.o, s = this.i, r = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, false), r = 1);
      var n = this._length - 1, a = this._length, u;
      for (u = r; u < a; u += 1) t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], u, false), n -= 1;
      return t;
    }, zt.prototype.length = function() {
      return this._length;
    };
    var ft = function() {
      function t() {
        return new zt();
      }
      function e(r) {
        var n = r._length, a;
        for (a = 0; a < n; a += 1) se.release(r.v[a]), se.release(r.i[a]), se.release(r.o[a]), r.v[a] = null, r.i[a] = null, r.o[a] = null;
        r._length = 0, r.c = false;
      }
      function i(r) {
        var n = s.newElement(), a, u = r._length === void 0 ? r.v.length : r._length;
        for (n.setLength(u), n.c = r.c, a = 0; a < u; a += 1) n.setTripleAt(r.v[a][0], r.v[a][1], r.o[a][0], r.o[a][1], r.i[a][0], r.i[a][1], a);
        return n;
      }
      var s = We(4, t, e);
      return s.clone = i, s;
    }();
    function ui() {
      this._length = 0, this._maxLength = 4, this.shapes = $(this._maxLength);
    }
    ui.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat($(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ui.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1) ft.release(this.shapes[t]);
      this._length = 0;
    };
    var fe = function() {
      var t = { newShapeCollection: r, release: n }, e = 0, i = 4, s = $(i);
      function r() {
        var a;
        return e ? (e -= 1, a = s[e]) : a = new ui(), a;
      }
      function n(a) {
        var u, h = a._length;
        for (u = 0; u < h; u += 1) ft.release(a.shapes[u]);
        a._length = 0, e === i && (s = Wi.double(s), i *= 2), s[e] = a, e += 1;
      }
      return t;
    }(), Ye = function() {
      var t = -999999;
      function e(y, v, p) {
        var c = p.lastIndex, b, P, x, T, I, j, D, L, G, R = this.keyframes;
        if (y < R[0].t - this.offsetTime) b = R[0].s[0], x = true, c = 0;
        else if (y >= R[R.length - 1].t - this.offsetTime) b = R[R.length - 1].s ? R[R.length - 1].s[0] : R[R.length - 2].e[0], x = true;
        else {
          for (var F = c, m2 = R.length - 1, S = true, o, f, M; S && (o = R[F], f = R[F + 1], !(f.t - this.offsetTime > y)); ) F < m2 - 1 ? F += 1 : S = false;
          if (M = this.keyframesMetadata[F] || {}, x = o.h === 1, c = F, !x) {
            if (y >= f.t - this.offsetTime) L = 1;
            else if (y < o.t - this.offsetTime) L = 0;
            else {
              var A;
              M.__fnct ? A = M.__fnct : (A = Pe.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y).get, M.__fnct = A), L = A((y - (o.t - this.offsetTime)) / (f.t - this.offsetTime - (o.t - this.offsetTime)));
            }
            P = f.s ? f.s[0] : o.e[0];
          }
          b = o.s[0];
        }
        for (j = v._length, D = b.i[0].length, p.lastIndex = c, T = 0; T < j; T += 1) for (I = 0; I < D; I += 1) G = x ? b.i[T][I] : b.i[T][I] + (P.i[T][I] - b.i[T][I]) * L, v.i[T][I] = G, G = x ? b.o[T][I] : b.o[T][I] + (P.o[T][I] - b.o[T][I]) * L, v.o[T][I] = G, G = x ? b.v[T][I] : b.v[T][I] + (P.v[T][I] - b.v[T][I]) * L, v.v[T][I] = G;
      }
      function i() {
        var y = this.comp.renderedFrame - this.offsetTime, v = this.keyframes[0].t - this.offsetTime, p = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, c = this._caching.lastFrame;
        return c !== t && (c < v && y < v || c > p && y > p) || (this._caching.lastIndex = c < y ? this._caching.lastIndex : 0, this.interpolateShape(y, this.pv, this._caching)), this._caching.lastFrame = y, this.pv;
      }
      function s() {
        this.paths = this.localShapeCollection;
      }
      function r(y, v) {
        if (y._length !== v._length || y.c !== v.c) return false;
        var p, c = y._length;
        for (p = 0; p < c; p += 1) if (y.v[p][0] !== v.v[p][0] || y.v[p][1] !== v.v[p][1] || y.o[p][0] !== v.o[p][0] || y.o[p][1] !== v.o[p][1] || y.i[p][0] !== v.i[p][0] || y.i[p][1] !== v.i[p][1]) return false;
        return true;
      }
      function n(y) {
        r(this.v, y) || (this.v = ft.clone(y), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
      }
      function a() {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (!this.effectsSequence.length) {
            this._mdf = false;
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = true, this._mdf = false;
          var y;
          this.kf ? y = this.pv : this.data.ks ? y = this.data.ks.k : y = this.data.pt.k;
          var v, p = this.effectsSequence.length;
          for (v = 0; v < p; v += 1) y = this.effectsSequence[v](y);
          this.setVValue(y), this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
      }
      function u(y, v, p) {
        this.propType = "shape", this.comp = y.comp, this.container = y, this.elem = y, this.data = v, this.k = false, this.kf = false, this._mdf = false;
        var c = p === 3 ? v.pt.k : v.ks.k;
        this.v = ft.clone(c), this.pv = ft.clone(this.v), this.localShapeCollection = fe.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = [];
      }
      function h(y) {
        this.effectsSequence.push(y), this.container.addDynamicProperty(this);
      }
      u.prototype.interpolateShape = e, u.prototype.getValue = a, u.prototype.setVValue = n, u.prototype.addEffect = h;
      function d(y, v, p) {
        this.propType = "shape", this.comp = y.comp, this.elem = y, this.container = y, this.offsetTime = y.data.st, this.keyframes = p === 3 ? v.pt.k : v.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
        var c = this.keyframes[0].s[0].i.length;
        this.v = ft.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, c), this.pv = ft.clone(this.v), this.localShapeCollection = fe.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [i.bind(this)];
      }
      d.prototype.getValue = a, d.prototype.interpolateShape = e, d.prototype.setVValue = n, d.prototype.addEffect = h;
      var g = function() {
        var y = Wt;
        function v(p, c) {
          this.v = ft.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = fe.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = c.d, this.elem = p, this.comp = p.comp, this.frameId = -1, this.initDynamicPropertyContainer(p), this.p = V.getProp(p, c.p, 1, 0, this), this.s = V.getProp(p, c.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
        }
        return v.prototype = { reset: s, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var c = this.p.v[0], b = this.p.v[1], P = this.s.v[0] / 2, x = this.s.v[1] / 2, T = this.d !== 3, I = this.v;
          I.v[0][0] = c, I.v[0][1] = b - x, I.v[1][0] = T ? c + P : c - P, I.v[1][1] = b, I.v[2][0] = c, I.v[2][1] = b + x, I.v[3][0] = T ? c - P : c + P, I.v[3][1] = b, I.i[0][0] = T ? c - P * y : c + P * y, I.i[0][1] = b - x, I.i[1][0] = T ? c + P : c - P, I.i[1][1] = b - x * y, I.i[2][0] = T ? c + P * y : c - P * y, I.i[2][1] = b + x, I.i[3][0] = T ? c - P : c + P, I.i[3][1] = b + x * y, I.o[0][0] = T ? c + P * y : c - P * y, I.o[0][1] = b - x, I.o[1][0] = T ? c + P : c - P, I.o[1][1] = b + x * y, I.o[2][0] = T ? c - P * y : c + P * y, I.o[2][1] = b + x, I.o[3][0] = T ? c - P : c + P, I.o[3][1] = b - x * y;
        } }, H([ot], v), v;
      }(), E = function() {
        function y(v, p) {
          this.v = ft.newElement(), this.v.setPathData(true, 0), this.elem = v, this.comp = v.comp, this.data = p, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(v), p.sy === 1 ? (this.ir = V.getProp(v, p.ir, 0, 0, this), this.is = V.getProp(v, p.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = V.getProp(v, p.pt, 0, 0, this), this.p = V.getProp(v, p.p, 1, 0, this), this.r = V.getProp(v, p.r, 0, U, this), this.or = V.getProp(v, p.or, 0, 0, this), this.os = V.getProp(v, p.os, 0, 0.01, this), this.localShapeCollection = fe.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
        }
        return y.prototype = { reset: s, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var p = Math.floor(this.pt.v) * 2, c = Math.PI * 2 / p, b = true, P = this.or.v, x = this.ir.v, T = this.os.v, I = this.is.v, j = 2 * Math.PI * P / (p * 2), D = 2 * Math.PI * x / (p * 2), L, G, R, F, m2 = -Math.PI / 2;
          m2 += this.r.v;
          var S = this.data.d === 3 ? -1 : 1;
          for (this.v._length = 0, L = 0; L < p; L += 1) {
            G = b ? P : x, R = b ? T : I, F = b ? j : D;
            var o = G * Math.cos(m2), f = G * Math.sin(m2), M = o === 0 && f === 0 ? 0 : f / Math.sqrt(o * o + f * f), A = o === 0 && f === 0 ? 0 : -o / Math.sqrt(o * o + f * f);
            o += +this.p.v[0], f += +this.p.v[1], this.v.setTripleAt(o, f, o - M * F * R * S, f - A * F * R * S, o + M * F * R * S, f + A * F * R * S, L, true), b = !b, m2 += c * S;
          }
        }, convertPolygonToPath: function() {
          var p = Math.floor(this.pt.v), c = Math.PI * 2 / p, b = this.or.v, P = this.os.v, x = 2 * Math.PI * b / (p * 4), T, I = -Math.PI * 0.5, j = this.data.d === 3 ? -1 : 1;
          for (I += this.r.v, this.v._length = 0, T = 0; T < p; T += 1) {
            var D = b * Math.cos(I), L = b * Math.sin(I), G = D === 0 && L === 0 ? 0 : L / Math.sqrt(D * D + L * L), R = D === 0 && L === 0 ? 0 : -D / Math.sqrt(D * D + L * L);
            D += +this.p.v[0], L += +this.p.v[1], this.v.setTripleAt(D, L, D - G * x * P * j, L - R * x * P * j, D + G * x * P * j, L + R * x * P * j, T, true), I += c * j;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, H([ot], y), y;
      }(), l = function() {
        function y(v, p) {
          this.v = ft.newElement(), this.v.c = true, this.localShapeCollection = fe.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = v, this.comp = v.comp, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(v), this.p = V.getProp(v, p.p, 1, 0, this), this.s = V.getProp(v, p.s, 1, 0, this), this.r = V.getProp(v, p.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
        }
        return y.prototype = { convertRectToPath: function() {
          var p = this.p.v[0], c = this.p.v[1], b = this.s.v[0] / 2, P = this.s.v[1] / 2, x = be(b, P, this.r.v), T = x * (1 - Wt);
          this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(p + b, c - P + x, p + b, c - P + x, p + b, c - P + T, 0, true), this.v.setTripleAt(p + b, c + P - x, p + b, c + P - T, p + b, c + P - x, 1, true), x !== 0 ? (this.v.setTripleAt(p + b - x, c + P, p + b - x, c + P, p + b - T, c + P, 2, true), this.v.setTripleAt(p - b + x, c + P, p - b + T, c + P, p - b + x, c + P, 3, true), this.v.setTripleAt(p - b, c + P - x, p - b, c + P - x, p - b, c + P - T, 4, true), this.v.setTripleAt(p - b, c - P + x, p - b, c - P + T, p - b, c - P + x, 5, true), this.v.setTripleAt(p - b + x, c - P, p - b + x, c - P, p - b + T, c - P, 6, true), this.v.setTripleAt(p + b - x, c - P, p + b - T, c - P, p + b - x, c - P, 7, true)) : (this.v.setTripleAt(p - b, c + P, p - b + T, c + P, p - b, c + P, 2), this.v.setTripleAt(p - b, c - P, p - b, c - P + T, p - b, c - P, 3))) : (this.v.setTripleAt(p + b, c - P + x, p + b, c - P + T, p + b, c - P + x, 0, true), x !== 0 ? (this.v.setTripleAt(p + b - x, c - P, p + b - x, c - P, p + b - T, c - P, 1, true), this.v.setTripleAt(p - b + x, c - P, p - b + T, c - P, p - b + x, c - P, 2, true), this.v.setTripleAt(p - b, c - P + x, p - b, c - P + x, p - b, c - P + T, 3, true), this.v.setTripleAt(p - b, c + P - x, p - b, c + P - T, p - b, c + P - x, 4, true), this.v.setTripleAt(p - b + x, c + P, p - b + x, c + P, p - b + T, c + P, 5, true), this.v.setTripleAt(p + b - x, c + P, p + b - T, c + P, p + b - x, c + P, 6, true), this.v.setTripleAt(p + b, c + P - x, p + b, c + P - x, p + b, c + P - T, 7, true)) : (this.v.setTripleAt(p - b, c - P, p - b + T, c - P, p - b, c - P, 1, true), this.v.setTripleAt(p - b, c + P, p - b, c + P - T, p - b, c + P, 2, true), this.v.setTripleAt(p + b, c + P, p + b - T, c + P, p + b, c + P, 3, true)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: s }, H([ot], y), y;
      }();
      function _(y, v, p) {
        var c;
        if (p === 3 || p === 4) {
          var b = p === 3 ? v.pt : v.ks, P = b.k;
          P.length ? c = new d(y, v, p) : c = new u(y, v, p);
        } else p === 5 ? c = new l(y, v) : p === 6 ? c = new g(y, v) : p === 7 && (c = new E(y, v));
        return c.k && y.addDynamicProperty(c), c;
      }
      function k() {
        return u;
      }
      function w() {
        return d;
      }
      var C = {};
      return C.getShapeProp = _, C.getConstructorFunction = k, C.getKeyframedConstructorFunction = w, C;
    }();
    var st = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, i = Math.tan, s = Math.round;
      function r() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function n(o) {
        if (o === 0) return this;
        var f = t(o), M = e(o);
        return this._t(f, -M, 0, 0, M, f, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function a(o) {
        if (o === 0) return this;
        var f = t(o), M = e(o);
        return this._t(1, 0, 0, 0, 0, f, -M, 0, 0, M, f, 0, 0, 0, 0, 1);
      }
      function u(o) {
        if (o === 0) return this;
        var f = t(o), M = e(o);
        return this._t(f, 0, M, 0, 0, 1, 0, 0, -M, 0, f, 0, 0, 0, 0, 1);
      }
      function h(o) {
        if (o === 0) return this;
        var f = t(o), M = e(o);
        return this._t(f, -M, 0, 0, M, f, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function d(o, f) {
        return this._t(1, f, o, 1, 0, 0);
      }
      function g(o, f) {
        return this.shear(i(o), i(f));
      }
      function E(o, f) {
        var M = t(f), A = e(f);
        return this._t(M, A, 0, 0, -A, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(o), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(M, -A, 0, 0, A, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function l(o, f, M) {
        return !M && M !== 0 && (M = 1), o === 1 && f === 1 && M === 1 ? this : this._t(o, 0, 0, 0, 0, f, 0, 0, 0, 0, M, 0, 0, 0, 0, 1);
      }
      function _(o, f, M, A, B, q, W, X, Y, it, mt, Bt, gt, lt, kt, K) {
        return this.props[0] = o, this.props[1] = f, this.props[2] = M, this.props[3] = A, this.props[4] = B, this.props[5] = q, this.props[6] = W, this.props[7] = X, this.props[8] = Y, this.props[9] = it, this.props[10] = mt, this.props[11] = Bt, this.props[12] = gt, this.props[13] = lt, this.props[14] = kt, this.props[15] = K, this;
      }
      function k(o, f, M) {
        return M = M || 0, o !== 0 || f !== 0 || M !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, o, f, M, 1) : this;
      }
      function w(o, f, M, A, B, q, W, X, Y, it, mt, Bt, gt, lt, kt, K) {
        var z = this.props;
        if (o === 1 && f === 0 && M === 0 && A === 0 && B === 0 && q === 1 && W === 0 && X === 0 && Y === 0 && it === 0 && mt === 1 && Bt === 0) return z[12] = z[12] * o + z[15] * gt, z[13] = z[13] * q + z[15] * lt, z[14] = z[14] * mt + z[15] * kt, z[15] *= K, this._identityCalculated = false, this;
        var Dt = z[0], Jt = z[1], Nt = z[2], Rt = z[3], qt = z[4], jt = z[5], yt = z[6], Qt = z[7], $t = z[8], Ct = z[9], te = z[10], xt = z[11], oe = z[12], ii = z[13], si = z[14], ri = z[15];
        return z[0] = Dt * o + Jt * B + Nt * Y + Rt * gt, z[1] = Dt * f + Jt * q + Nt * it + Rt * lt, z[2] = Dt * M + Jt * W + Nt * mt + Rt * kt, z[3] = Dt * A + Jt * X + Nt * Bt + Rt * K, z[4] = qt * o + jt * B + yt * Y + Qt * gt, z[5] = qt * f + jt * q + yt * it + Qt * lt, z[6] = qt * M + jt * W + yt * mt + Qt * kt, z[7] = qt * A + jt * X + yt * Bt + Qt * K, z[8] = $t * o + Ct * B + te * Y + xt * gt, z[9] = $t * f + Ct * q + te * it + xt * lt, z[10] = $t * M + Ct * W + te * mt + xt * kt, z[11] = $t * A + Ct * X + te * Bt + xt * K, z[12] = oe * o + ii * B + si * Y + ri * gt, z[13] = oe * f + ii * q + si * it + ri * lt, z[14] = oe * M + ii * W + si * mt + ri * kt, z[15] = oe * A + ii * X + si * Bt + ri * K, this._identityCalculated = false, this;
      }
      function C(o) {
        var f = o.props;
        return this.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]);
      }
      function y() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = true), this._identity;
      }
      function v(o) {
        for (var f = 0; f < 16; ) {
          if (o.props[f] !== this.props[f]) return false;
          f += 1;
        }
        return true;
      }
      function p(o) {
        var f;
        for (f = 0; f < 16; f += 1) o.props[f] = this.props[f];
        return o;
      }
      function c(o) {
        var f;
        for (f = 0; f < 16; f += 1) this.props[f] = o[f];
      }
      function b(o, f, M) {
        return { x: o * this.props[0] + f * this.props[4] + M * this.props[8] + this.props[12], y: o * this.props[1] + f * this.props[5] + M * this.props[9] + this.props[13], z: o * this.props[2] + f * this.props[6] + M * this.props[10] + this.props[14] };
      }
      function P(o, f, M) {
        return o * this.props[0] + f * this.props[4] + M * this.props[8] + this.props[12];
      }
      function x(o, f, M) {
        return o * this.props[1] + f * this.props[5] + M * this.props[9] + this.props[13];
      }
      function T(o, f, M) {
        return o * this.props[2] + f * this.props[6] + M * this.props[10] + this.props[14];
      }
      function I() {
        var o = this.props[0] * this.props[5] - this.props[1] * this.props[4], f = this.props[5] / o, M = -this.props[1] / o, A = -this.props[4] / o, B = this.props[0] / o, q = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / o, W = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / o, X = new st();
        return X.props[0] = f, X.props[1] = M, X.props[4] = A, X.props[5] = B, X.props[12] = q, X.props[13] = W, X;
      }
      function j(o) {
        var f = this.getInverseMatrix();
        return f.applyToPointArray(o[0], o[1], o[2] || 0);
      }
      function D(o) {
        var f, M = o.length, A = [];
        for (f = 0; f < M; f += 1) A[f] = j(o[f]);
        return A;
      }
      function L(o, f, M) {
        var A = ht("float32", 6);
        if (this.isIdentity()) A[0] = o[0], A[1] = o[1], A[2] = f[0], A[3] = f[1], A[4] = M[0], A[5] = M[1];
        else {
          var B = this.props[0], q = this.props[1], W = this.props[4], X = this.props[5], Y = this.props[12], it = this.props[13];
          A[0] = o[0] * B + o[1] * W + Y, A[1] = o[0] * q + o[1] * X + it, A[2] = f[0] * B + f[1] * W + Y, A[3] = f[0] * q + f[1] * X + it, A[4] = M[0] * B + M[1] * W + Y, A[5] = M[0] * q + M[1] * X + it;
        }
        return A;
      }
      function G(o, f, M) {
        var A;
        return this.isIdentity() ? A = [o, f, M] : A = [o * this.props[0] + f * this.props[4] + M * this.props[8] + this.props[12], o * this.props[1] + f * this.props[5] + M * this.props[9] + this.props[13], o * this.props[2] + f * this.props[6] + M * this.props[10] + this.props[14]], A;
      }
      function R(o, f) {
        if (this.isIdentity()) return o + "," + f;
        var M = this.props;
        return Math.round((o * M[0] + f * M[4] + M[12]) * 100) / 100 + "," + Math.round((o * M[1] + f * M[5] + M[13]) * 100) / 100;
      }
      function F() {
        for (var o = 0, f = this.props, M = "matrix3d(", A = 1e4; o < 16; ) M += s(f[o] * A) / A, M += o === 15 ? ")" : ",", o += 1;
        return M;
      }
      function m2(o) {
        var f = 1e4;
        return o < 1e-6 && o > 0 || o > -1e-6 && o < 0 ? s(o * f) / f : o;
      }
      function S() {
        var o = this.props, f = m2(o[0]), M = m2(o[1]), A = m2(o[4]), B = m2(o[5]), q = m2(o[12]), W = m2(o[13]);
        return "matrix(" + f + "," + M + "," + A + "," + B + "," + q + "," + W + ")";
      }
      return function() {
        this.reset = r, this.rotate = n, this.rotateX = a, this.rotateY = u, this.rotateZ = h, this.skew = g, this.skewFromAxis = E, this.shear = d, this.scale = l, this.setTransform = _, this.translate = k, this.transform = w, this.multiply = C, this.applyToPoint = b, this.applyToX = P, this.applyToY = x, this.applyToZ = T, this.applyToPointArray = G, this.applyToTriplePoints = L, this.applyToPointStringified = R, this.toCSS = F, this.to2dCSS = S, this.clone = p, this.cloneFromProps = c, this.equals = v, this.inversePoints = D, this.inversePoint = j, this.getInverseMatrix = I, this._t = this.transform, this.isIdentity = y, this._identity = true, this._identityCalculated = false, this.props = ht("float32", 16), this.reset();
      };
    }();
    function Ze(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ze = function(i) {
        return typeof i;
      } : Ze = function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, Ze(t);
    }
    var Z = {};
    function Js(t) {
      xs(t);
    }
    function Qi() {
      et.searchAnimations();
    }
    function Qs(t) {
      Vs(t);
    }
    function $s(t) {
      zs(t);
    }
    function tr(t) {
      return et.loadAnimation(t);
    }
    function er(t) {
      if (typeof t == "string") switch (t) {
        case "high":
          qe(200);
          break;
        default:
        case "medium":
          qe(50);
          break;
        case "low":
          qe(10);
          break;
      }
      else !isNaN(t) && t > 1 && qe(t);
    }
    function ir() {
      return typeof navigator < "u";
    }
    function sr(t, e) {
      t === "expressions" && Rs(e);
    }
    function rr(t) {
      switch (t) {
        case "propertyFactory":
          return V;
        case "shapePropertyFactory":
          return Ye;
        case "matrix":
          return st;
        default:
          return null;
      }
    }
    Z.play = et.play, Z.pause = et.pause, Z.setLocationHref = Js, Z.togglePause = et.togglePause, Z.setSpeed = et.setSpeed, Z.setDirection = et.setDirection, Z.stop = et.stop, Z.searchAnimations = Qi, Z.registerAnimation = et.registerAnimation, Z.loadAnimation = tr, Z.setSubframeRendering = Qs, Z.resize = et.resize, Z.goToAndStop = et.goToAndStop, Z.destroy = et.destroy, Z.setQuality = er, Z.inBrowser = ir, Z.installPlugin = sr, Z.freeze = et.freeze, Z.unfreeze = et.unfreeze, Z.setVolume = et.setVolume, Z.mute = et.mute, Z.unmute = et.unmute, Z.getRegisteredAnimations = et.getRegisteredAnimations, Z.useWebWorker = As, Z.setIDPrefix = $s, Z.__getFactory = rr, Z.version = "5.12.2";
    function nr() {
      document.readyState === "complete" && (clearInterval(or), Qi());
    }
    function ar(t) {
      for (var e = $i.split("&"), i = 0; i < e.length; i += 1) {
        var s = e[i].split("=");
        if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1]);
      }
      return null;
    }
    var $i = "";
    {
      var ts = document.getElementsByTagName("script"), hr = ts.length - 1, es = ts[hr] || { src: "" };
      $i = es.src ? es.src.replace(/^[^\?]+\??/, "") : "", ar("renderer");
    }
    var or = setInterval(nr, 100);
    try {
      !((typeof Re > "u" ? "undefined" : Ze(Re)) === "object" && typeof ni < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = Z);
    } catch {
    }
    var Ht = function() {
      var t = {}, e = {};
      t.registerModifier = i, t.getModifier = s;
      function i(r, n) {
        e[r] || (e[r] = n);
      }
      function s(r, n, a) {
        return new e[r](n, a);
      }
      return t;
    }();
    function Pt() {
    }
    Pt.prototype.initModifierProperties = function() {
    }, Pt.prototype.addShapeToModifier = function() {
    }, Pt.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = { shape: t.sh, data: t, localShapeCollection: fe.newShapeCollection() };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, Pt.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = ai, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, Pt.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, H([ot], Pt);
    function Et() {
    }
    H([Pt], Et), Et.prototype.initModifierProperties = function(t, e) {
      this.s = V.getProp(t, e.s, 0, 0.01, this), this.e = V.getProp(t, e.e, 0, 0.01, this), this.o = V.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, Et.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, Et.prototype.calculateShapeEdges = function(t, e, i, s, r) {
      var n = [];
      e <= 1 ? n.push({ s: t, e }) : t >= 1 ? n.push({ s: t - 1, e: e - 1 }) : (n.push({ s: t, e: 1 }), n.push({ s: 0, e: e - 1 }));
      var a = [], u, h = n.length, d;
      for (u = 0; u < h; u += 1) if (d = n[u], !(d.e * r < s || d.s * r > s + i)) {
        var g, E;
        d.s * r <= s ? g = 0 : g = (d.s * r - s) / i, d.e * r >= s + i ? E = 1 : E = (d.e * r - s) / i, a.push([g, E]);
      }
      return a.length || a.push([0, 0]), a;
    }, Et.prototype.releasePathsData = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) Hi.release(t[e]);
      return t.length = 0, t;
    }, Et.prototype.processShapes = function(t) {
      var e, i;
      if (this._mdf || t) {
        var s = this.o.v % 360 / 360;
        if (s < 0 && (s += 1), this.s.v > 1 ? e = 1 + s : this.s.v < 0 ? e = 0 + s : e = this.s.v + s, this.e.v > 1 ? i = 1 + s : this.e.v < 0 ? i = 0 + s : i = this.e.v + s, e > i) {
          var r = e;
          e = i, i = r;
        }
        e = Math.round(e * 1e4) * 1e-4, i = Math.round(i * 1e4) * 1e-4, this.sValue = e, this.eValue = i;
      } else e = this.sValue, i = this.eValue;
      var n, a, u = this.shapes.length, h, d, g, E, l, _ = 0;
      if (i === e) for (a = 0; a < u; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = true, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
      else if (i === 1 && e === 0 || i === 0 && e === 1) {
        if (this._mdf) for (a = 0; a < u; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = true;
      } else {
        var k = [], w, C;
        for (a = 0; a < u; a += 1) if (w = this.shapes[a], !w.shape._mdf && !this._mdf && !t && this.m !== 2) w.shape.paths = w.localShapeCollection;
        else {
          if (n = w.shape.paths, d = n._length, l = 0, !w.shape._mdf && w.pathsData.length) l = w.totalShapeLength;
          else {
            for (g = this.releasePathsData(w.pathsData), h = 0; h < d; h += 1) E = Mt.getSegmentsLength(n.shapes[h]), g.push(E), l += E.totalLength;
            w.totalShapeLength = l, w.pathsData = g;
          }
          _ += l, w.shape._mdf = true;
        }
        var y = e, v = i, p = 0, c;
        for (a = u - 1; a >= 0; a -= 1) if (w = this.shapes[a], w.shape._mdf) {
          for (C = w.localShapeCollection, C.releaseShapes(), this.m === 2 && u > 1 ? (c = this.calculateShapeEdges(e, i, w.totalShapeLength, p, _), p += w.totalShapeLength) : c = [[y, v]], d = c.length, h = 0; h < d; h += 1) {
            y = c[h][0], v = c[h][1], k.length = 0, v <= 1 ? k.push({ s: w.totalShapeLength * y, e: w.totalShapeLength * v }) : y >= 1 ? k.push({ s: w.totalShapeLength * (y - 1), e: w.totalShapeLength * (v - 1) }) : (k.push({ s: w.totalShapeLength * y, e: w.totalShapeLength }), k.push({ s: 0, e: w.totalShapeLength * (v - 1) }));
            var b = this.addShapes(w, k[0]);
            if (k[0].s !== k[0].e) {
              if (k.length > 1) {
                var P = w.shape.paths.shapes[w.shape.paths._length - 1];
                if (P.c) {
                  var x = b.pop();
                  this.addPaths(b, C), b = this.addShapes(w, k[1], x);
                } else this.addPaths(b, C), b = this.addShapes(w, k[1]);
              }
              this.addPaths(b, C);
            }
          }
          w.shape.paths = C;
        }
      }
    }, Et.prototype.addPaths = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) e.addShape(t[i]);
    }, Et.prototype.addSegment = function(t, e, i, s, r, n, a) {
      r.setXYAt(e[0], e[1], "o", n), r.setXYAt(i[0], i[1], "i", n + 1), a && r.setXYAt(t[0], t[1], "v", n), r.setXYAt(s[0], s[1], "v", n + 1);
    }, Et.prototype.addSegmentFromArray = function(t, e, i, s) {
      e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
    }, Et.prototype.addShapes = function(t, e, i) {
      var s = t.pathsData, r = t.shape.paths.shapes, n, a = t.shape.paths._length, u, h, d = 0, g, E, l, _, k = [], w, C = true;
      for (i ? (E = i._length, w = i._length) : (i = ft.newElement(), E = 0, w = 0), k.push(i), n = 0; n < a; n += 1) {
        for (l = s[n].lengths, i.c = r[n].c, h = r[n].c ? l.length : l.length + 1, u = 1; u < h; u += 1) if (g = l[u - 1], d + g.addedLength < e.s) d += g.addedLength, i.c = false;
        else if (d > e.e) {
          i.c = false;
          break;
        } else e.s <= d && e.e >= d + g.addedLength ? (this.addSegment(r[n].v[u - 1], r[n].o[u - 1], r[n].i[u], r[n].v[u], i, E, C), C = false) : (_ = Mt.getNewSegment(r[n].v[u - 1], r[n].v[u], r[n].o[u - 1], r[n].i[u], (e.s - d) / g.addedLength, (e.e - d) / g.addedLength, l[u - 1]), this.addSegmentFromArray(_, i, E, C), C = false, i.c = false), d += g.addedLength, E += 1;
        if (r[n].c && l.length) {
          if (g = l[u - 1], d <= e.e) {
            var y = l[u - 1].addedLength;
            e.s <= d && e.e >= d + y ? (this.addSegment(r[n].v[u - 1], r[n].o[u - 1], r[n].i[0], r[n].v[0], i, E, C), C = false) : (_ = Mt.getNewSegment(r[n].v[u - 1], r[n].v[0], r[n].o[u - 1], r[n].i[0], (e.s - d) / y, (e.e - d) / y, l[u - 1]), this.addSegmentFromArray(_, i, E, C), C = false, i.c = false);
          } else i.c = false;
          d += g.addedLength, E += 1;
        }
        if (i._length && (i.setXYAt(i.v[w][0], i.v[w][1], "i", w), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
        n < a - 1 && (i = ft.newElement(), C = true, k.push(i), E = 0);
      }
      return k;
    };
    function Ee() {
    }
    H([Pt], Ee), Ee.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = V.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, Ee.prototype.processPath = function(t, e) {
      var i = e / 100, s = [0, 0], r = t._length, n = 0;
      for (n = 0; n < r; n += 1) s[0] += t.v[n][0], s[1] += t.v[n][1];
      s[0] /= r, s[1] /= r;
      var a = ft.newElement();
      a.c = t.c;
      var u, h, d, g, E, l;
      for (n = 0; n < r; n += 1) u = t.v[n][0] + (s[0] - t.v[n][0]) * i, h = t.v[n][1] + (s[1] - t.v[n][1]) * i, d = t.o[n][0] + (s[0] - t.o[n][0]) * -i, g = t.o[n][1] + (s[1] - t.o[n][1]) * -i, E = t.i[n][0] + (s[0] - t.i[n][0]) * -i, l = t.i[n][1] + (s[1] - t.i[n][1]) * -i, a.setTripleAt(u, h, d, g, E, l, n);
      return a;
    }, Ee.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, r, n, a = this.amount.v;
      if (a !== 0) {
        var u, h;
        for (i = 0; i < s; i += 1) {
          if (u = this.shapes[i], h = u.localShapeCollection, !(!u.shape._mdf && !this._mdf && !t)) for (h.releaseShapes(), u.shape._mdf = true, e = u.shape.paths.shapes, n = u.shape.paths._length, r = 0; r < n; r += 1) h.addShape(this.processPath(e[r], a));
          u.shape.paths = u.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    var ci = function() {
      var t = [0, 0];
      function e(h) {
        var d = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || d, this.a && h.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && h.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && h.skewFromAxis(-this.sk.v, this.sa.v), this.r ? h.rotate(-this.r.v) : h.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? h.translate(this.px.v, this.py.v, -this.pz.v) : h.translate(this.px.v, this.py.v, 0) : h.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function i(h) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || h) {
            var d;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var g, E;
              if (d = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (g = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / d, 0), E = this.p.getValueAtTime(this.p.keyframes[0].t / d, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (g = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / d, 0), E = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / d, 0)) : (g = this.p.pv, E = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / d, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                g = [], E = [];
                var l = this.px, _ = this.py;
                l._caching.lastFrame + l.offsetTime <= l.keyframes[0].t ? (g[0] = l.getValueAtTime((l.keyframes[0].t + 0.01) / d, 0), g[1] = _.getValueAtTime((_.keyframes[0].t + 0.01) / d, 0), E[0] = l.getValueAtTime(l.keyframes[0].t / d, 0), E[1] = _.getValueAtTime(_.keyframes[0].t / d, 0)) : l._caching.lastFrame + l.offsetTime >= l.keyframes[l.keyframes.length - 1].t ? (g[0] = l.getValueAtTime(l.keyframes[l.keyframes.length - 1].t / d, 0), g[1] = _.getValueAtTime(_.keyframes[_.keyframes.length - 1].t / d, 0), E[0] = l.getValueAtTime((l.keyframes[l.keyframes.length - 1].t - 0.01) / d, 0), E[1] = _.getValueAtTime((_.keyframes[_.keyframes.length - 1].t - 0.01) / d, 0)) : (g = [l.pv, _.pv], E[0] = l.getValueAtTime((l._caching.lastFrame + l.offsetTime - 0.01) / d, l.offsetTime), E[1] = _.getValueAtTime((_._caching.lastFrame + _.offsetTime - 0.01) / d, _.offsetTime));
              } else E = t, g = E;
              this.v.rotate(-Math.atan2(g[1] - E[1], g[0] - E[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }
      function s() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
        else return;
        if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
        else return;
        if (this.sk) if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
        else return;
        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
      }
      function r() {
      }
      function n(h) {
        this._addDynamicProperty(h), this.elem.addDynamicProperty(h), this._isDirty = true;
      }
      function a(h, d, g) {
        if (this.elem = h, this.frameId = -1, this.propType = "transform", this.data = d, this.v = new st(), this.pre = new st(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(g || h), d.p && d.p.s ? (this.px = V.getProp(h, d.p.x, 0, 0, this), this.py = V.getProp(h, d.p.y, 0, 0, this), d.p.z && (this.pz = V.getProp(h, d.p.z, 0, 0, this))) : this.p = V.getProp(h, d.p || { k: [0, 0, 0] }, 1, 0, this), d.rx) {
          if (this.rx = V.getProp(h, d.rx, 0, U, this), this.ry = V.getProp(h, d.ry, 0, U, this), this.rz = V.getProp(h, d.rz, 0, U, this), d.or.k[0].ti) {
            var E, l = d.or.k.length;
            for (E = 0; E < l; E += 1) d.or.k[E].to = null, d.or.k[E].ti = null;
          }
          this.or = V.getProp(h, d.or, 1, U, this), this.or.sh = true;
        } else this.r = V.getProp(h, d.r || { k: 0 }, 0, U, this);
        d.sk && (this.sk = V.getProp(h, d.sk, 0, U, this), this.sa = V.getProp(h, d.sa, 0, U, this)), this.a = V.getProp(h, d.a || { k: [0, 0, 0] }, 1, 0, this), this.s = V.getProp(h, d.s || { k: [100, 100, 100] }, 1, 0.01, this), d.o ? this.o = V.getProp(h, d.o, 0, 0.01, h) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
      }
      a.prototype = { applyToMatrix: e, getValue: i, precalculateMatrix: s, autoOrient: r }, H([ot], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = ot.prototype.addDynamicProperty;
      function u(h, d, g) {
        return new a(h, d, g);
      }
      return { getTransformProperty: u };
    }();
    function Tt() {
    }
    H([Pt], Tt), Tt.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = V.getProp(t, e.c, 0, null, this), this.o = V.getProp(t, e.o, 0, null, this), this.tr = ci.getTransformProperty(t, e.tr, this), this.so = V.getProp(t, e.tr.so, 0, 0.01, this), this.eo = V.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new st(), this.rMatrix = new st(), this.sMatrix = new st(), this.tMatrix = new st(), this.matrix = new st();
    }, Tt.prototype.applyTransforms = function(t, e, i, s, r, n) {
      var a = n ? -1 : 1, u = s.s.v[0] + (1 - s.s.v[0]) * (1 - r), h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
      t.translate(s.p.v[0] * a * r, s.p.v[1] * a * r, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * a * r), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(n ? 1 / u : u, n ? 1 / h : h), i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
    }, Tt.prototype.init = function(t, e, i, s) {
      for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0; ) i -= 1, this._elements.unshift(e[i]);
      this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, Tt.prototype.resetElements = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e]._processed = false, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, Tt.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, Tt.prototype.changeGroupRender = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) t[i]._render = e, t[i].ty === "gr" && this.changeGroupRender(t[i].it, e);
    }, Tt.prototype.processShapes = function(t) {
      var e, i, s, r, n, a = false;
      if (this._mdf || t) {
        var u = Math.ceil(this.c.v);
        if (this._groups.length < u) {
          for (; this._groups.length < u; ) {
            var h = { it: this.cloneElements(this._elements), ty: "gr" };
            h.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), a = true;
        }
        n = 0;
        var d;
        for (s = 0; s <= this._groups.length - 1; s += 1) {
          if (d = n < u, this._groups[s]._render = d, this.changeGroupRender(this._groups[s].it, d), !d) {
            var g = this.elemsData[s].it, E = g[g.length - 1];
            E.transform.op.v !== 0 ? (E.transform.op._mdf = true, E.transform.op.v = 0) : E.transform.op._mdf = false;
          }
          n += 1;
        }
        this._currentCopies = u;
        var l = this.o.v, _ = l % 1, k = l > 0 ? Math.floor(l) : Math.ceil(l), w = this.pMatrix.props, C = this.rMatrix.props, y = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var v = 0;
        if (l > 0) {
          for (; v < k; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), v += 1;
          _ && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, _, false), v += _);
        } else if (l < 0) {
          for (; v > k; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), v -= 1;
          _ && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -_, true), v -= _);
        }
        s = this.data.m === 1 ? 0 : this._currentCopies - 1, r = this.data.m === 1 ? 1 : -1, n = this._currentCopies;
        for (var p, c; n; ) {
          if (e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, c = i.length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), v !== 0) {
            for ((s !== 0 && r === 1 || s !== this._currentCopies - 1 && r === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10], C[11], C[12], C[13], C[14], C[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(w[0], w[1], w[2], w[3], w[4], w[5], w[6], w[7], w[8], w[9], w[10], w[11], w[12], w[13], w[14], w[15]), p = 0; p < c; p += 1) i[p] = this.matrix.props[p];
            this.matrix.reset();
          } else for (this.matrix.reset(), p = 0; p < c; p += 1) i[p] = this.matrix.props[p];
          v += 1, n -= 1, s += r;
        }
      } else for (n = this._currentCopies, s = 0, r = 1; n; ) e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, n -= 1, s += r;
      return a;
    }, Tt.prototype.addShape = function() {
    };
    function Ae() {
    }
    H([Pt], Ae), Ae.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = V.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, Ae.prototype.processPath = function(t, e) {
      var i = ft.newElement();
      i.c = t.c;
      var s, r = t._length, n, a, u, h, d, g, E = 0, l, _, k, w, C, y;
      for (s = 0; s < r; s += 1) n = t.v[s], u = t.o[s], a = t.i[s], n[0] === u[0] && n[1] === u[1] && n[0] === a[0] && n[1] === a[1] ? (s === 0 || s === r - 1) && !t.c ? (i.setTripleAt(n[0], n[1], u[0], u[1], a[0], a[1], E), E += 1) : (s === 0 ? h = t.v[r - 1] : h = t.v[s - 1], d = Math.sqrt(Math.pow(n[0] - h[0], 2) + Math.pow(n[1] - h[1], 2)), g = d ? Math.min(d / 2, e) / d : 0, C = n[0] + (h[0] - n[0]) * g, l = C, y = n[1] - (n[1] - h[1]) * g, _ = y, k = l - (l - n[0]) * Wt, w = _ - (_ - n[1]) * Wt, i.setTripleAt(l, _, k, w, C, y, E), E += 1, s === r - 1 ? h = t.v[0] : h = t.v[s + 1], d = Math.sqrt(Math.pow(n[0] - h[0], 2) + Math.pow(n[1] - h[1], 2)), g = d ? Math.min(d / 2, e) / d : 0, k = n[0] + (h[0] - n[0]) * g, l = k, w = n[1] + (h[1] - n[1]) * g, _ = w, C = l - (l - n[0]) * Wt, y = _ - (_ - n[1]) * Wt, i.setTripleAt(l, _, k, w, C, y, E), E += 1) : (i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], E), E += 1);
      return i;
    }, Ae.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, r, n, a = this.rd.v;
      if (a !== 0) {
        var u, h;
        for (i = 0; i < s; i += 1) {
          if (u = this.shapes[i], h = u.localShapeCollection, !(!u.shape._mdf && !this._mdf && !t)) for (h.releaseShapes(), u.shape._mdf = true, e = u.shape.paths.shapes, n = u.shape.paths._length, r = 0; r < n; r += 1) h.addShape(this.processPath(e[r], a));
          u.shape.paths = u.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function Ue(t, e) {
      return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
    }
    function di(t) {
      return Math.abs(t) <= 1e-5;
    }
    function is(t, e, i) {
      return t * (1 - i) + e * i;
    }
    function Xt(t, e, i) {
      return [is(t[0], e[0], i), is(t[1], e[1], i)];
    }
    function lr(t, e, i) {
      if (t === 0) return [];
      var s = e * e - 4 * t * i;
      if (s < 0) return [];
      var r = -e / (2 * t);
      if (s === 0) return [r];
      var n = Math.sqrt(s) / (2 * t);
      return [r - n, r + n];
    }
    function ss(t, e, i, s) {
      return [-t + 3 * e - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t];
    }
    function rs(t) {
      return new tt(t, t, t, t, false);
    }
    function tt(t, e, i, s, r) {
      r && ue(t, e) && (e = Xt(t, s, 1 / 3)), r && ue(i, s) && (i = Xt(t, s, 2 / 3));
      var n = ss(t[0], e[0], i[0], s[0]), a = ss(t[1], e[1], i[1], s[1]);
      this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [t, e, i, s];
    }
    tt.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, tt.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, tt.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, tt.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, tt.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (di(t)) return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (i < 0) return [];
      var s = Math.sqrt(i);
      return di(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter(function(r) {
        return r > 0 && r < 1;
      });
    }, tt.prototype.split = function(t) {
      if (t <= 0) return [rs(this.points[0]), this];
      if (t >= 1) return [this, rs(this.points[this.points.length - 1])];
      var e = Xt(this.points[0], this.points[1], t), i = Xt(this.points[1], this.points[2], t), s = Xt(this.points[2], this.points[3], t), r = Xt(e, i, t), n = Xt(i, s, t), a = Xt(r, n, t);
      return [new tt(this.points[0], e, r, a, true), new tt(a, n, s, this.points[3], true)];
    };
    function ns(t, e) {
      var i = t.points[0][e], s = t.points[t.points.length - 1][e];
      if (i > s) {
        var r = s;
        s = i, i = r;
      }
      for (var n = lr(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < n.length; a += 1) if (n[a] > 0 && n[a] < 1) {
        var u = t.point(n[a])[e];
        u < i ? i = u : u > s && (s = u);
      }
      return { min: i, max: s };
    }
    tt.prototype.bounds = function() {
      return { x: ns(this, 0), y: ns(this, 1) };
    }, tt.prototype.boundingBox = function() {
      var t = this.bounds();
      return { left: t.x.min, right: t.x.max, top: t.y.min, bottom: t.y.max, width: t.x.max - t.x.min, height: t.y.max - t.y.min, cx: (t.x.max + t.x.min) / 2, cy: (t.y.max + t.y.min) / 2 };
    };
    function Je(t, e, i) {
      var s = t.boundingBox();
      return { cx: s.cx, cy: s.cy, width: s.width, height: s.height, bez: t, t: (e + i) / 2, t1: e, t2: i };
    }
    function as(t) {
      var e = t.bez.split(0.5);
      return [Je(e[0], t.t1, t.t), Je(e[1], t.t, t.t2)];
    }
    function fr(t, e) {
      return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
    }
    function Ce(t, e, i, s, r, n) {
      if (fr(t, e)) {
        if (i >= n || t.width <= s && t.height <= s && e.width <= s && e.height <= s) {
          r.push([t.t, e.t]);
          return;
        }
        var a = as(t), u = as(e);
        Ce(a[0], u[0], i + 1, s, r, n), Ce(a[0], u[1], i + 1, s, r, n), Ce(a[1], u[0], i + 1, s, r, n), Ce(a[1], u[1], i + 1, s, r, n);
      }
    }
    tt.prototype.intersections = function(t, e, i) {
      e === void 0 && (e = 2), i === void 0 && (i = 7);
      var s = [];
      return Ce(Je(this, 0, 1), Je(t, 0, 1), 0, e, s, i), s;
    }, tt.shapeSegment = function(t, e) {
      var i = (e + 1) % t.length();
      return new tt(t.v[e], t.o[e], t.i[i], t.v[i], true);
    }, tt.shapeSegmentInverted = function(t, e) {
      var i = (e + 1) % t.length();
      return new tt(t.v[i], t.i[i], t.o[e], t.v[e], true);
    };
    function vi(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function Qe(t, e, i, s) {
      var r = [t[0], t[1], 1], n = [e[0], e[1], 1], a = [i[0], i[1], 1], u = [s[0], s[1], 1], h = vi(vi(r, n), vi(a, u));
      return di(h[2]) ? null : [h[0] / h[2], h[1] / h[2]];
    }
    function pe(t, e, i) {
      return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i];
    }
    function mi(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function ue(t, e) {
      return Ue(t[0], e[0]) && Ue(t[1], e[1]);
    }
    function xe() {
    }
    H([Pt], xe), xe.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = V.getProp(t, e.s, 0, null, this), this.frequency = V.getProp(t, e.r, 0, null, this), this.pointsType = V.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function hs(t, e, i, s, r, n, a) {
      var u = i - Math.PI / 2, h = i + Math.PI / 2, d = e[0] + Math.cos(i) * s * r, g = e[1] - Math.sin(i) * s * r;
      t.setTripleAt(d, g, d + Math.cos(u) * n, g - Math.sin(u) * n, d + Math.cos(h) * a, g - Math.sin(h) * a, t.length());
    }
    function pr(t, e) {
      var i = [e[0] - t[0], e[1] - t[1]], s = -Math.PI * 0.5, r = [Math.cos(s) * i[0] - Math.sin(s) * i[1], Math.sin(s) * i[0] + Math.cos(s) * i[1]];
      return r;
    }
    function ur(t, e) {
      var i = e === 0 ? t.length() - 1 : e - 1, s = (e + 1) % t.length(), r = t.v[i], n = t.v[s], a = pr(r, n);
      return Math.atan2(0, 1) - Math.atan2(a[1], a[0]);
    }
    function os(t, e, i, s, r, n, a) {
      var u = ur(e, i), h = e.v[i % e._length], d = e.v[i === 0 ? e._length - 1 : i - 1], g = e.v[(i + 1) % e._length], E = n === 2 ? Math.sqrt(Math.pow(h[0] - d[0], 2) + Math.pow(h[1] - d[1], 2)) : 0, l = n === 2 ? Math.sqrt(Math.pow(h[0] - g[0], 2) + Math.pow(h[1] - g[1], 2)) : 0;
      hs(t, e.v[i % e._length], u, a, s, l / ((r + 1) * 2), E / ((r + 1) * 2));
    }
    function cr(t, e, i, s, r, n) {
      for (var a = 0; a < s; a += 1) {
        var u = (a + 1) / (s + 1), h = r === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, d = e.normalAngle(u), g = e.point(u);
        hs(t, g, d, n, i, h / ((s + 1) * 2), h / ((s + 1) * 2)), n = -n;
      }
      return n;
    }
    xe.prototype.processPath = function(t, e, i, s) {
      var r = t._length, n = ft.newElement();
      if (n.c = t.c, t.c || (r -= 1), r === 0) return n;
      var a = -1, u = tt.shapeSegment(t, 0);
      os(n, t, 0, e, i, s, a);
      for (var h = 0; h < r; h += 1) a = cr(n, u, e, i, s, -a), h === r - 1 && !t.c ? u = null : u = tt.shapeSegment(t, (h + 1) % r), os(n, t, h + 1, e, i, s, a);
      return n;
    }, xe.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, r, n, a = this.amplitude.v, u = Math.max(0, Math.round(this.frequency.v)), h = this.pointsType.v;
      if (a !== 0) {
        var d, g;
        for (i = 0; i < s; i += 1) {
          if (d = this.shapes[i], g = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for (g.releaseShapes(), d.shape._mdf = true, e = d.shape.paths.shapes, n = d.shape.paths._length, r = 0; r < n; r += 1) g.addShape(this.processPath(e[r], a, u, h));
          d.shape.paths = d.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function gi(t, e, i) {
      var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [pe(t, s, i), pe(e, s, i)];
    }
    function ce(t, e) {
      var i, s, r, n, a, u, h;
      h = gi(t.points[0], t.points[1], e), i = h[0], s = h[1], h = gi(t.points[1], t.points[2], e), r = h[0], n = h[1], h = gi(t.points[2], t.points[3], e), a = h[0], u = h[1];
      var d = Qe(i, s, r, n);
      d === null && (d = s);
      var g = Qe(a, u, r, n);
      return g === null && (g = a), new tt(i, d, g, u);
    }
    function ls(t, e, i, s, r) {
      var n = e.points[3], a = i.points[0];
      if (s === 3 || ue(n, a)) return n;
      if (s === 2) {
        var u = -e.tangentAngle(1), h = -i.tangentAngle(0) + Math.PI, d = Qe(n, pe(n, u + Math.PI / 2, 100), a, pe(a, u + Math.PI / 2, 100)), g = d ? mi(d, n) : mi(n, a) / 2, E = pe(n, u, 2 * g * Wt);
        return t.setXYAt(E[0], E[1], "o", t.length() - 1), E = pe(a, h, 2 * g * Wt), t.setTripleAt(a[0], a[1], a[0], a[1], E[0], E[1], t.length()), a;
      }
      var l = ue(n, e.points[2]) ? e.points[0] : e.points[2], _ = ue(a, i.points[1]) ? i.points[3] : i.points[1], k = Qe(l, n, a, _);
      return k && mi(k, n) < r ? (t.setTripleAt(k[0], k[1], k[0], k[1], k[0], k[1], t.length()), k) : n;
    }
    function fs(t, e) {
      var i = t.intersections(e);
      return i.length && Ue(i[0][0], 1) && i.shift(), i.length ? i[0] : null;
    }
    function ps(t, e) {
      var i = t.slice(), s = e.slice(), r = fs(t[t.length - 1], e[0]);
      return r && (i[t.length - 1] = t[t.length - 1].split(r[0])[0], s[0] = e[0].split(r[1])[1]), t.length > 1 && e.length > 1 && (r = fs(t[0], e[e.length - 1]), r) ? [[t[0].split(r[0])[0]], [e[e.length - 1].split(r[1])[1]]] : [i, s];
    }
    function dr(t) {
      for (var e, i = 1; i < t.length; i += 1) e = ps(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
      return t.length > 1 && (e = ps(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function us(t, e) {
      var i = t.inflectionPoints(), s, r, n, a;
      if (i.length === 0) return [ce(t, e)];
      if (i.length === 1 || Ue(i[1], 1)) return n = t.split(i[0]), s = n[0], r = n[1], [ce(s, e), ce(r, e)];
      n = t.split(i[0]), s = n[0];
      var u = (i[1] - i[0]) / (1 - i[0]);
      return n = n[1].split(u), a = n[0], r = n[1], [ce(s, e), ce(a, e), ce(r, e)];
    }
    function Me() {
    }
    H([Pt], Me), Me.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = V.getProp(t, e.a, 0, null, this), this.miterLimit = V.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, Me.prototype.processPath = function(t, e, i, s) {
      var r = ft.newElement();
      r.c = t.c;
      var n = t.length();
      t.c || (n -= 1);
      var a, u, h, d = [];
      for (a = 0; a < n; a += 1) h = tt.shapeSegment(t, a), d.push(us(h, e));
      if (!t.c) for (a = n - 1; a >= 0; a -= 1) h = tt.shapeSegmentInverted(t, a), d.push(us(h, e));
      d = dr(d);
      var g = null, E = null;
      for (a = 0; a < d.length; a += 1) {
        var l = d[a];
        for (E && (g = ls(r, E, l[0], i, s)), E = l[l.length - 1], u = 0; u < l.length; u += 1) h = l[u], g && ue(h.points[0], g) ? r.setXYAt(h.points[1][0], h.points[1][1], "o", r.length() - 1) : r.setTripleAt(h.points[0][0], h.points[0][1], h.points[1][0], h.points[1][1], h.points[0][0], h.points[0][1], r.length()), r.setTripleAt(h.points[3][0], h.points[3][1], h.points[3][0], h.points[3][1], h.points[2][0], h.points[2][1], r.length()), g = h.points[3];
      }
      return d.length && ls(r, E, d[0][0], i, s), r;
    }, Me.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, r, n, a = this.amount.v, u = this.miterLimit.v, h = this.lineJoin;
      if (a !== 0) {
        var d, g;
        for (i = 0; i < s; i += 1) {
          if (d = this.shapes[i], g = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for (g.releaseShapes(), d.shape._mdf = true, e = d.shape.paths.shapes, n = d.shape.paths._length, r = 0; r < n; r += 1) g.addShape(this.processPath(e[r], a, h, u));
          d.shape.paths = d.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function cs(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", r = e.length, n, a = 0; a < r; a += 1) switch (n = e[a].toLowerCase(), n) {
        case "italic":
          s = "italic";
          break;
        case "bold":
          i = "700";
          break;
        case "black":
          i = "900";
          break;
        case "medium":
          i = "500";
          break;
        case "regular":
        case "normal":
          i = "400";
          break;
        case "light":
        case "thin":
          i = "200";
          break;
      }
      return { style: s, weight: t.fWeight || i };
    }
    var re = function() {
      var t = 5e3, e = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, i = [];
      i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var s = 127988, r = 917631, n = 917601, a = 917626, u = 65039, h = 8205, d = 127462, g = 127487, E = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function l(m2) {
        var S = m2.split(","), o, f = S.length, M = [];
        for (o = 0; o < f; o += 1) S[o] !== "sans-serif" && S[o] !== "monospace" && M.push(S[o]);
        return M.join(",");
      }
      function _(m2, S) {
        var o = at("span");
        o.setAttribute("aria-hidden", true), o.style.fontFamily = S;
        var f = at("span");
        f.innerText = "giItT1WQy@!-/#", o.style.position = "absolute", o.style.left = "-10000px", o.style.top = "-10000px", o.style.fontSize = "300px", o.style.fontVariant = "normal", o.style.fontStyle = "normal", o.style.fontWeight = "normal", o.style.letterSpacing = "0", o.appendChild(f), document.body.appendChild(o);
        var M = f.offsetWidth;
        return f.style.fontFamily = l(m2) + ", " + S, { node: f, w: M, parent: o };
      }
      function k() {
        var m2, S = this.fonts.length, o, f, M = S;
        for (m2 = 0; m2 < S; m2 += 1) this.fonts[m2].loaded ? M -= 1 : this.fonts[m2].fOrigin === "n" || this.fonts[m2].origin === 0 ? this.fonts[m2].loaded = true : (o = this.fonts[m2].monoCase.node, f = this.fonts[m2].monoCase.w, o.offsetWidth !== f ? (M -= 1, this.fonts[m2].loaded = true) : (o = this.fonts[m2].sansCase.node, f = this.fonts[m2].sansCase.w, o.offsetWidth !== f && (M -= 1, this.fonts[m2].loaded = true)), this.fonts[m2].loaded && (this.fonts[m2].sansCase.parent.parentNode.removeChild(this.fonts[m2].sansCase.parent), this.fonts[m2].monoCase.parent.parentNode.removeChild(this.fonts[m2].monoCase.parent)));
        M !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function w(m2, S) {
        var o = document.body && S ? "svg" : "canvas", f, M = cs(m2);
        if (o === "svg") {
          var A = O("text");
          A.style.fontSize = "100px", A.setAttribute("font-family", m2.fFamily), A.setAttribute("font-style", M.style), A.setAttribute("font-weight", M.weight), A.textContent = "1", m2.fClass ? (A.style.fontFamily = "inherit", A.setAttribute("class", m2.fClass)) : A.style.fontFamily = m2.fFamily, S.appendChild(A), f = A;
        } else {
          var B = new OffscreenCanvas(500, 500).getContext("2d");
          B.font = M.style + " " + M.weight + " 100px " + m2.fFamily, f = B;
        }
        function q(W) {
          return o === "svg" ? (f.textContent = W, f.getComputedTextLength()) : f.measureText(W).width;
        }
        return { measureText: q };
      }
      function C(m2, S) {
        if (!m2) {
          this.isLoaded = true;
          return;
        }
        if (this.chars) {
          this.isLoaded = true, this.fonts = m2.list;
          return;
        }
        if (!document.body) {
          this.isLoaded = true, m2.list.forEach(function(mt) {
            mt.helper = w(mt), mt.cache = {};
          }), this.fonts = m2.list;
          return;
        }
        var o = m2.list, f, M = o.length, A = M;
        for (f = 0; f < M; f += 1) {
          var B = true, q, W;
          if (o[f].loaded = false, o[f].monoCase = _(o[f].fFamily, "monospace"), o[f].sansCase = _(o[f].fFamily, "sans-serif"), !o[f].fPath) o[f].loaded = true, A -= 1;
          else if (o[f].fOrigin === "p" || o[f].origin === 3) {
            if (q = document.querySelectorAll('style[f-forigin="p"][f-family="' + o[f].fFamily + '"], style[f-origin="3"][f-family="' + o[f].fFamily + '"]'), q.length > 0 && (B = false), B) {
              var X = at("style");
              X.setAttribute("f-forigin", o[f].fOrigin), X.setAttribute("f-origin", o[f].origin), X.setAttribute("f-family", o[f].fFamily), X.type = "text/css", X.innerText = "@font-face {font-family: " + o[f].fFamily + "; font-style: normal; src: url('" + o[f].fPath + "');}", S.appendChild(X);
            }
          } else if (o[f].fOrigin === "g" || o[f].origin === 1) {
            for (q = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), W = 0; W < q.length; W += 1) q[W].href.indexOf(o[f].fPath) !== -1 && (B = false);
            if (B) {
              var Y = at("link");
              Y.setAttribute("f-forigin", o[f].fOrigin), Y.setAttribute("f-origin", o[f].origin), Y.type = "text/css", Y.rel = "stylesheet", Y.href = o[f].fPath, document.body.appendChild(Y);
            }
          } else if (o[f].fOrigin === "t" || o[f].origin === 2) {
            for (q = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), W = 0; W < q.length; W += 1) o[f].fPath === q[W].src && (B = false);
            if (B) {
              var it = at("link");
              it.setAttribute("f-forigin", o[f].fOrigin), it.setAttribute("f-origin", o[f].origin), it.setAttribute("rel", "stylesheet"), it.setAttribute("href", o[f].fPath), S.appendChild(it);
            }
          }
          o[f].helper = w(o[f], S), o[f].cache = {}, this.fonts.push(o[f]);
        }
        A === 0 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function y(m2) {
        if (m2) {
          this.chars || (this.chars = []);
          var S, o = m2.length, f, M = this.chars.length, A;
          for (S = 0; S < o; S += 1) {
            for (f = 0, A = false; f < M; ) this.chars[f].style === m2[S].style && this.chars[f].fFamily === m2[S].fFamily && this.chars[f].ch === m2[S].ch && (A = true), f += 1;
            A || (this.chars.push(m2[S]), M += 1);
          }
        }
      }
      function v(m2, S, o) {
        for (var f = 0, M = this.chars.length; f < M; ) {
          if (this.chars[f].ch === m2 && this.chars[f].style === S && this.chars[f].fFamily === o) return this.chars[f];
          f += 1;
        }
        return (typeof m2 == "string" && m2.charCodeAt(0) !== 13 || !m2) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", m2, S, o)), e;
      }
      function p(m2, S, o) {
        var f = this.getFontByName(S), M = m2;
        if (!f.cache[M]) {
          var A = f.helper;
          if (m2 === " ") {
            var B = A.measureText("|" + m2 + "|"), q = A.measureText("||");
            f.cache[M] = (B - q) / 100;
          } else f.cache[M] = A.measureText(m2) / 100;
        }
        return f.cache[M] * o;
      }
      function c(m2) {
        for (var S = 0, o = this.fonts.length; S < o; ) {
          if (this.fonts[S].fName === m2) return this.fonts[S];
          S += 1;
        }
        return this.fonts[0];
      }
      function b(m2) {
        var S = 0, o = m2.charCodeAt(0);
        if (o >= 55296 && o <= 56319) {
          var f = m2.charCodeAt(1);
          f >= 56320 && f <= 57343 && (S = (o - 55296) * 1024 + f - 56320 + 65536);
        }
        return S;
      }
      function P(m2, S) {
        var o = m2.toString(16) + S.toString(16);
        return E.indexOf(o) !== -1;
      }
      function x(m2) {
        return m2 === h;
      }
      function T(m2) {
        return m2 === u;
      }
      function I(m2) {
        var S = b(m2);
        return S >= d && S <= g;
      }
      function j(m2) {
        return I(m2.substr(0, 2)) && I(m2.substr(2, 2));
      }
      function D(m2) {
        return i.indexOf(m2) !== -1;
      }
      function L(m2, S) {
        var o = b(m2.substr(S, 2));
        if (o !== s) return false;
        var f = 0;
        for (S += 2; f < 5; ) {
          if (o = b(m2.substr(S, 2)), o < n || o > a) return false;
          f += 1, S += 2;
        }
        return b(m2.substr(S, 2)) === r;
      }
      function G() {
        this.isLoaded = true;
      }
      var R = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      R.isModifier = P, R.isZeroWidthJoiner = x, R.isFlagEmoji = j, R.isRegionalCode = I, R.isCombinedCharacter = D, R.isRegionalFlag = L, R.isVariationSelector = T, R.BLACK_FLAG_CODE_POINT = s;
      var F = { addChars: y, addFonts: C, getCharData: v, getFontByName: c, measureText: p, checkLoadedFonts: k, setIsLoaded: G };
      return R.prototype = F, R;
    }();
    function ds(t) {
      this.animationData = t;
    }
    ds.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    };
    function vr(t) {
      return new ds(t);
    }
    function de() {
    }
    de.prototype = { initRenderable: function() {
      this.isInRange = false, this.hidden = false, this.isTransparent = false, this.renderableComponents = [];
    }, addRenderableComponent: function(e) {
      this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e);
    }, removeRenderableComponent: function(e) {
      this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1);
    }, prepareRenderableFrame: function(e) {
      this.checkLayerLimits(e);
    }, checkTransparency: function() {
      this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = true, this.hide()) : this.isTransparent && (this.isTransparent = false, this.show());
    }, checkLayerLimits: function(e) {
      this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== true && (this.globalData._mdf = true, this._mdf = true, this.isInRange = true, this.show()) : this.isInRange !== false && (this.globalData._mdf = true, this.isInRange = false, this.hide());
    }, renderRenderable: function() {
      var e, i = this.renderableComponents.length;
      for (e = 0; e < i; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
    }, sourceRectAtTime: function() {
      return { top: 0, left: 0, width: 100, height: 100 };
    }, getLayerSize: function() {
      return this.data.ty === 5 ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
    } };
    var yi = /* @__PURE__ */ function() {
      var t = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" };
      return function(e) {
        return t[e] || "";
      };
    }();
    function mr(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function gr(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function yr(t, e, i) {
      this.p = V.getProp(e, t.v, 1, 0, i);
    }
    function br(t, e, i) {
      this.p = V.getProp(e, t.v, 1, 0, i);
    }
    function _r(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function wr(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function Sr(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function kr() {
      this.p = {};
    }
    function vs(t, e) {
      var i = t.ef || [];
      this.effectElements = [];
      var s, r = i.length, n;
      for (s = 0; s < r; s += 1) n = new Te(i[s], e), this.effectElements.push(n);
    }
    function Te(t, e) {
      this.init(t, e);
    }
    H([ot], Te), Te.prototype.getValue = Te.prototype.iterateDynamicProperties, Te.prototype.init = function(t, e) {
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var i, s = this.data.ef.length, r, n = this.data.ef;
      for (i = 0; i < s; i += 1) {
        switch (r = null, n[i].ty) {
          case 0:
            r = new mr(n[i], e, this);
            break;
          case 1:
            r = new gr(n[i], e, this);
            break;
          case 2:
            r = new yr(n[i], e, this);
            break;
          case 3:
            r = new br(n[i], e, this);
            break;
          case 4:
          case 7:
            r = new Sr(n[i], e, this);
            break;
          case 10:
            r = new _r(n[i], e, this);
            break;
          case 11:
            r = new wr(n[i], e, this);
            break;
          case 5:
            r = new vs(n[i], e);
            break;
          default:
            r = new kr(n[i]);
            break;
        }
        r && this.effectElements.push(r);
      }
    };
    function _t() {
    }
    _t.prototype = { checkMasks: function() {
      if (!this.data.hasMask) return false;
      for (var e = 0, i = this.data.masksProperties.length; e < i; ) {
        if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== false) return true;
        e += 1;
      }
      return false;
    }, initExpressions: function() {
    }, setBlendMode: function() {
      var e = yi(this.data.bm), i = this.baseElement || this.layerElement;
      i.style["mix-blend-mode"] = e;
    }, initBaseData: function(e, i, s) {
      this.globalData = i, this.comp = s, this.data = e, this.layerId = dt(), this.data.sr || (this.data.sr = 1), this.effectsManager = new vs(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } };
    function wt() {
    }
    wt.prototype = { initFrame: function() {
      this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
    }, prepareProperties: function(e, i) {
      var s, r = this.dynamicProperties.length;
      for (s = 0; s < r; s += 1) (i || this._isParent && this.dynamicProperties[s].propType === "transform") && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = true, this._mdf = true));
    }, addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
    } };
    function Yt(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i);
    }
    Yt.prototype.prepareFrame = function() {
    }, H([de, _t, wt], Yt), Yt.prototype.getBaseElement = function() {
      return null;
    }, Yt.prototype.renderFrame = function() {
    }, Yt.prototype.destroy = function() {
    }, Yt.prototype.initExpressions = function() {
    }, Yt.prototype.getFootageData = function() {
      return this.footageData;
    };
    function vt(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = false, this._canPlay = false;
      var s = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? V.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true }, this.lv = V.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this);
    }
    vt.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder) this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var i = this._volume * this._volumeMultiplier;
      this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i));
    }, H([de, _t, wt], vt), vt.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
    }, vt.prototype.show = function() {
    }, vt.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = false;
    }, vt.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = false, this._canPlay = false;
    }, vt.prototype.resume = function() {
      this._canPlay = true;
    }, vt.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, vt.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, vt.prototype.getBaseElement = function() {
      return null;
    }, vt.prototype.destroy = function() {
    }, vt.prototype.sourceRectAtTime = function() {
    }, vt.prototype.initExpressions = function() {
    };
    function rt() {
    }
    rt.prototype.checkLayers = function(t) {
      var e, i = this.layers.length, s;
      for (this.completeLayers = true, e = i - 1; e >= 0; e -= 1) this.elements[e] || (s = this.layers[e], s.ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : false;
      this.checkPendingElements();
    }, rt.prototype.createItem = function(t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t);
      }
    }, rt.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, rt.prototype.createAudio = function(t) {
      return new vt(t, this.globalData, this);
    }, rt.prototype.createFootage = function(t) {
      return new Yt(t, this.globalData, this);
    }, rt.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements();
    }, rt.prototype.includeLayers = function(t) {
      this.completeLayers = false;
      var e, i = t.length, s, r = this.layers.length;
      for (e = 0; e < i; e += 1) for (s = 0; s < r; ) {
        if (this.layers[s].id === t[e].id) {
          this.layers[s] = t[e];
          break;
        }
        s += 1;
      }
    }, rt.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, rt.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, rt.prototype.buildElementParenting = function(t, e, i) {
      for (var s = this.elements, r = this.layers, n = 0, a = r.length; n < a; ) r[n].ind == e && (!s[n] || s[n] === true ? (this.buildItem(n), this.addPendingElement(t)) : (i.push(s[n]), s[n].setAsParent(), r[n].parent !== void 0 ? this.buildElementParenting(t, r[n].parent, i) : t.setHierarchy(i))), n += 1;
    }, rt.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, rt.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) if (t[e].xt) {
        var s = this.createComp(t[e]);
        s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
      }
    }, rt.prototype.getElementById = function(t) {
      var e, i = this.elements.length;
      for (e = 0; e < i; e += 1) if (this.elements[e].data.ind === t) return this.elements[e];
      return null;
    }, rt.prototype.getElementByPath = function(t) {
      var e = t.shift(), i;
      if (typeof e == "number") i = this.elements[e];
      else {
        var s, r = this.elements.length;
        for (s = 0; s < r; s += 1) if (this.elements[s].data.nm === e) {
          i = this.elements[s];
          break;
        }
      }
      return t.length === 0 ? i : i.getElementByPath(t);
    }, rt.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new re(), this.globalData.slotManager = vr(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
    };
    var Pr = { TRANSFORM_EFFECT: "transformEFfect" };
    function Ft() {
    }
    Ft.prototype = { initTransform: function() {
      var e = new st();
      this.finalTransform = { mProp: this.data.ks ? ci.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: false, _localMatMdf: false, _opMdf: false, mat: e, localMat: e, localOpacity: 1 }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
    }, renderTransform: function() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var e, i = this.finalTransform.mat, s = 0, r = this.hierarchy.length;
        if (!this.finalTransform._matMdf) for (; s < r; ) {
          if (this.hierarchy[s].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = true;
            break;
          }
          s += 1;
        }
        if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e), s = 0; s < r; s += 1) i.multiply(this.hierarchy[s].finalTransform.mProp.v);
      }
      this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
    }, renderLocalTransform: function() {
      if (this.localTransforms) {
        var e = 0, i = this.localTransforms.length;
        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; e < i; ) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = true), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = true), e += 1;
        if (this.finalTransform._localMatMdf) {
          var s = this.finalTransform.localMat;
          for (this.localTransforms[0].matrix.clone(s), e = 1; e < i; e += 1) {
            var r = this.localTransforms[e].matrix;
            s.multiply(r);
          }
          s.multiply(this.finalTransform.mat);
        }
        if (this.finalTransform._opMdf) {
          var n = this.finalTransform.localOpacity;
          for (e = 0; e < i; e += 1) n *= this.localTransforms[e].opacity * 0.01;
          this.finalTransform.localOpacity = n;
        }
      }
    }, searchEffectTransforms: function() {
      if (this.renderableEffectsManager) {
        var e = this.renderableEffectsManager.getEffects(Pr.TRANSFORM_EFFECT);
        if (e.length) {
          this.localTransforms = [], this.finalTransform.localMat = new st();
          var i = 0, s = e.length;
          for (i = 0; i < s; i += 1) this.localTransforms.push(e[i]);
        }
      }
    }, globalToLocal: function(e) {
      var i = [];
      i.push(this.finalTransform);
      for (var s = true, r = this.comp; s; ) r.finalTransform ? (r.data.hasMask && i.splice(0, 0, r.finalTransform), r = r.comp) : s = false;
      var n, a = i.length, u;
      for (n = 0; n < a; n += 1) u = i[n].mat.applyToPointArray(0, 0, 0), e = [e[0] - u[0], e[1] - u[1], 0];
      return e;
    }, mHelper: new st() };
    function Zt(t, e, i) {
      this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var s = this.globalData.defs, r, n = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = $(n), this.solidPath = "";
      var a, u = this.masksProperties, h = 0, d = [], g, E, l = dt(), _, k, w, C, y = "clipPath", v = "clip-path";
      for (r = 0; r < n; r += 1) if ((u[r].mode !== "a" && u[r].mode !== "n" || u[r].inv || u[r].o.k !== 100 || u[r].o.x) && (y = "mask", v = "mask"), (u[r].mode === "s" || u[r].mode === "i") && h === 0 ? (_ = O("rect"), _.setAttribute("fill", "#ffffff"), _.setAttribute("width", this.element.comp.data.w || 0), _.setAttribute("height", this.element.comp.data.h || 0), d.push(_)) : _ = null, a = O("path"), u[r].mode === "n") this.viewData[r] = { op: V.getProp(this.element, u[r].o, 0, 0.01, this.element), prop: Ye.getShapeProp(this.element, u[r], 3), elem: a, lastPath: "" }, s.appendChild(a);
      else {
        h += 1, a.setAttribute("fill", u[r].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero");
        var p;
        if (u[r].x.k !== 0 ? (y = "mask", v = "mask", C = V.getProp(this.element, u[r].x, 0, null, this.element), p = dt(), k = O("filter"), k.setAttribute("id", p), w = O("feMorphology"), w.setAttribute("operator", "erode"), w.setAttribute("in", "SourceGraphic"), w.setAttribute("radius", "0"), k.appendChild(w), s.appendChild(k), a.setAttribute("stroke", u[r].mode === "s" ? "#000000" : "#ffffff")) : (w = null, C = null), this.storedData[r] = { elem: a, x: C, expan: w, lastPath: "", lastOperator: "", filterId: p, lastRadius: 0 }, u[r].mode === "i") {
          E = d.length;
          var c = O("g");
          for (g = 0; g < E; g += 1) c.appendChild(d[g]);
          var b = O("mask");
          b.setAttribute("mask-type", "alpha"), b.setAttribute("id", l + "_" + h), b.appendChild(a), s.appendChild(b), c.setAttribute("mask", "url(" + bt() + "#" + l + "_" + h + ")"), d.length = 0, d.push(c);
        } else d.push(a);
        u[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = { elem: a, lastPath: "", op: V.getProp(this.element, u[r].o, 0, 0.01, this.element), prop: Ye.getShapeProp(this.element, u[r], 3), invRect: _ }, this.viewData[r].prop.k || this.drawPath(u[r], this.viewData[r].prop.v, this.viewData[r]);
      }
      for (this.maskElement = O(y), n = d.length, r = 0; r < n; r += 1) this.maskElement.appendChild(d[r]);
      h > 0 && (this.maskElement.setAttribute("id", l), this.element.maskedElement.setAttribute(v, "url(" + bt() + "#" + l + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    Zt.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, Zt.prototype.renderFrame = function(t) {
      var e = this.element.finalTransform.mat, i, s = this.masksProperties.length;
      for (i = 0; i < s; i += 1) if ((this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), this.masksProperties[i].mode !== "n" && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[i].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || t))) {
        var r = this.storedData[i].expan;
        this.storedData[i].x.v < 0 ? (this.storedData[i].lastOperator !== "erode" && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + bt() + "#" + this.storedData[i].filterId + ")")), r.setAttribute("radius", -this.storedData[i].x.v)) : (this.storedData[i].lastOperator !== "dilate" && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2));
      }
    }, Zt.prototype.getMaskelement = function() {
      return this.maskElement;
    }, Zt.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
    }, Zt.prototype.drawPath = function(t, e, i) {
      var s = " M" + e.v[0][0] + "," + e.v[0][1], r, n;
      for (n = e._length, r = 1; r < n; r += 1) s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
      if (e.c && n > 1 && (s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
        var a = "";
        i.elem && (e.c && (a = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", a)), i.lastPath = s;
      }
    }, Zt.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var Fe = function() {
      var t = {};
      t.createFilter = e, t.createAlphaToLuminanceFilter = i;
      function e(s, r) {
        var n = O("filter");
        return n.setAttribute("id", s), r !== true && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n;
      }
      function i() {
        var s = O("feColorMatrix");
        return s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), s;
      }
      return t;
    }(), ms = function() {
      var t = { maskType: true, svgLumaHidden: true, offscreenCanvas: typeof OffscreenCanvas < "u" };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = false), t;
    }(), $e = {}, gs = "filter_result_";
    function bi(t) {
      var e, i = "SourceGraphic", s = t.data.ef ? t.data.ef.length : 0, r = dt(), n = Fe.createFilter(r, true), a = 0;
      this.filters = [];
      var u;
      for (e = 0; e < s; e += 1) {
        u = null;
        var h = t.data.ef[e].ty;
        if ($e[h]) {
          var d = $e[h].effect;
          u = new d(n, t.effectsManager.effectElements[e], t, gs + a, i), i = gs + a, $e[h].countsAsEffect && (a += 1);
        }
        u && this.filters.push(u);
      }
      a && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + bt() + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    bi.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
    }, bi.prototype.getEffects = function(t) {
      var e, i = this.filters.length, s = [];
      for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
      return s;
    };
    function ve() {
    }
    ve.prototype = { initRendererElement: function() {
      this.layerElement = O("g");
    }, createContainerElements: function() {
      this.matteElement = O("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
      var e = null;
      if (this.data.td) {
        this.matteMasks = {};
        var i = O("g");
        i.setAttribute("id", this.layerId), i.appendChild(this.layerElement), e = i, this.globalData.defs.appendChild(i);
      } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
        var s = O("clipPath"), r = O("path");
        r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var n = dt();
        if (s.setAttribute("id", n), s.appendChild(r), this.globalData.defs.appendChild(s), this.checkMasks()) {
          var a = O("g");
          a.setAttribute("clip-path", "url(" + bt() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else this.layerElement.setAttribute("clip-path", "url(" + bt() + "#" + n + ")");
      }
      this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new Zt(this.data, this, this.globalData), this.renderableEffectsManager = new bi(this), this.searchEffectTransforms();
    }, getMatte: function(e) {
      if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
        var i = this.layerId + "_" + e, s, r, n, a;
        if (e === 1 || e === 3) {
          var u = O("mask");
          u.setAttribute("id", i), u.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), n = O("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), u.appendChild(n), this.globalData.defs.appendChild(u), !ms.maskType && e === 1 && (u.setAttribute("mask-type", "luminance"), s = dt(), r = Fe.createFilter(s), this.globalData.defs.appendChild(r), r.appendChild(Fe.createAlphaToLuminanceFilter()), a = O("g"), a.appendChild(n), u.appendChild(a), a.setAttribute("filter", "url(" + bt() + "#" + s + ")"));
        } else if (e === 2) {
          var h = O("mask");
          h.setAttribute("id", i), h.setAttribute("mask-type", "alpha");
          var d = O("g");
          h.appendChild(d), s = dt(), r = Fe.createFilter(s);
          var g = O("feComponentTransfer");
          g.setAttribute("in", "SourceGraphic"), r.appendChild(g);
          var E = O("feFuncA");
          E.setAttribute("type", "table"), E.setAttribute("tableValues", "1.0 0.0"), g.appendChild(E), this.globalData.defs.appendChild(r);
          var l = O("rect");
          l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), d.setAttribute("filter", "url(" + bt() + "#" + s + ")"), d.appendChild(l), n = O("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), d.appendChild(n), ms.maskType || (h.setAttribute("mask-type", "luminance"), r.appendChild(Fe.createAlphaToLuminanceFilter()), a = O("g"), d.appendChild(l), a.appendChild(this.layerElement), d.appendChild(a)), this.globalData.defs.appendChild(h);
        }
        this.matteMasks[e] = i;
      }
      return this.matteMasks[e];
    }, setMatte: function(e) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + bt() + "#" + e + ")");
    } };
    function At() {
    }
    At.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = false, this.checkParenting();
    }, setHierarchy: function(e) {
      this.hierarchy = e;
    }, setAsParent: function() {
      this._isParent = true;
    }, checkParenting: function() {
      this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
    } };
    function ne() {
    }
    (function() {
      var t = { initElement: function(i, s, r) {
        this.initFrame(), this.initBaseData(i, s, r), this.initTransform(i, s, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
      }, hide: function() {
        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
          var i = this.baseElement || this.layerElement;
          i.style.display = "none", this.hidden = true;
        }
      }, show: function() {
        if (this.isInRange && !this.isTransparent) {
          if (!this.data.hd) {
            var i = this.baseElement || this.layerElement;
            i.style.display = "block";
          }
          this.hidden = false, this._isFirstFrame = true;
        }
      }, renderFrame: function() {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
      }, renderInnerContent: function() {
      }, prepareFrame: function(i) {
        this._mdf = false, this.prepareRenderableFrame(i), this.prepareProperties(i, this.isInRange), this.checkTransparency();
      }, destroy: function() {
        this.innerElem = null, this.destroyBaseElement();
      } };
      H([de, Ms(t)], ne);
    })();
    function me(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    H([_t, Ft, ve, At, wt, ne], me), me.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = O("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, me.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function Er(t, e) {
      this.elem = t, this.pos = e;
    }
    function ys() {
    }
    ys.prototype = { addShapeToModifiers: function(e) {
      var i, s = this.shapeModifiers.length;
      for (i = 0; i < s; i += 1) this.shapeModifiers[i].addShape(e);
    }, isShapeInAnimatedModifiers: function(e) {
      for (var i = 0, s = this.shapeModifiers.length; i < s; ) if (this.shapeModifiers[i].isAnimatedWithShape(e)) return true;
      return false;
    }, renderModifiers: function() {
      if (this.shapeModifiers.length) {
        var e, i = this.shapes.length;
        for (e = 0; e < i; e += 1) this.shapes[e].sh.reset();
        i = this.shapeModifiers.length;
        var s;
        for (e = i - 1; e >= 0 && (s = this.shapeModifiers[e].processShapes(this._isFirstFrame), !s); e -= 1) ;
      }
    }, searchProcessedElement: function(e) {
      for (var i = this.processedElements, s = 0, r = i.length; s < r; ) {
        if (i[s].elem === e) return i[s].pos;
        s += 1;
      }
      return 0;
    }, addProcessedElement: function(e, i) {
      for (var s = this.processedElements, r = s.length; r; ) if (r -= 1, s[r].elem === e) {
        s[r].pos = i;
        return;
      }
      s.push(new Er(e, i));
    }, prepareFrame: function(e) {
      this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
    } };
    var _i = { 1: "butt", 2: "round", 3: "square" }, wi = { 1: "miter", 2: "round", 3: "bevel" };
    function bs(t, e, i) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
      for (var s = 0, r = t.length; s < r; ) {
        if (t[s].mProps.dynamicProperties.length) {
          this._isAnimated = true;
          break;
        }
        s += 1;
      }
    }
    bs.prototype.setAsAnimated = function() {
      this._isAnimated = true;
    };
    function _s(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = t.hd === true, this.pElem = O("path"), this.msElem = null;
    }
    _s.prototype.reset = function() {
      this.d = "", this._mdf = false;
    };
    function ti(t, e, i, s) {
      this.elem = t, this.frameId = -1, this.dataProps = $(e.length), this.renderer = i, this.k = false, this.dashStr = "", this.dashArray = ht("float32", e.length ? e.length - 1 : 0), this.dashoffset = ht("float32", 1), this.initDynamicPropertyContainer(s);
      var r, n = e.length || 0, a;
      for (r = 0; r < n; r += 1) a = V.getProp(t, e[r].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[r] = { n: e[r].n, p: a };
      this.k || this.getValue(true), this._isAnimated = this.k;
    }
    ti.prototype.getValue = function(t) {
      if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, i = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < i; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, H([ot], ti);
    function ws(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = V.getProp(t, e.o, 0, 0.01, this), this.w = V.getProp(t, e.w, 0, null, this), this.d = new ti(t, e.d || {}, "svg", this), this.c = V.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
    }
    H([ot], ws);
    function Ss(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = V.getProp(t, e.o, 0, 0.01, this), this.c = V.getProp(t, e.c, 1, 255, this), this.style = i;
    }
    H([ot], Ss);
    function ks(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i;
    }
    H([ot], ks);
    function Ie(t, e, i) {
      this.data = e, this.c = ht("uint8c", e.p * 4);
      var s = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
      this.o = ht("float32", s), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = V.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
    }
    Ie.prototype.comparePoints = function(t, e) {
      for (var i = 0, s = this.o.length / 2, r; i < s; ) {
        if (r = Math.abs(t[i * 4] - t[e * 4 + i * 2]), r > 0.01) return false;
        i += 1;
      }
      return true;
    }, Ie.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4) return false;
      if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e; ) {
        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return false;
        t += 1;
      }
      else if (!this.comparePoints(this.data.k.k, this.data.p)) return false;
      return true;
    }, Ie.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
        var e, i = this.data.p * 4, s, r;
        for (e = 0; e < i; e += 1) s = e % 4 === 0 ? 100 : 255, r = Math.round(this.prop.v[e] * s), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
        if (this.o.length) for (i = this.prop.v.length, e = this.data.p * 4; e < i; e += 1) s = e % 2 === 0 ? 100 : 1, r = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== r && (this.o[e - this.data.p * 4] = r, this._omdf = !t);
        this._mdf = !t;
      }
    }, H([ot], Ie);
    function ge(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
    }
    ge.prototype.initGradientData = function(t, e, i) {
      this.o = V.getProp(t, e.o, 0, 0.01, this), this.s = V.getProp(t, e.s, 1, null, this), this.e = V.getProp(t, e.e, 1, null, this), this.h = V.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = V.getProp(t, e.a || { k: 0 }, 0, U, this), this.g = new Ie(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
    }, ge.prototype.setGradientData = function(t, e) {
      var i = dt(), s = O(e.t === 1 ? "linearGradient" : "radialGradient");
      s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
      var r = [], n, a, u;
      for (u = e.g.p * 4, a = 0; a < u; a += 4) n = O("stop"), s.appendChild(n), r.push(n);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + bt() + "#" + i + ")"), this.gf = s, this.cst = r;
    }, ge.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var i, s, r, n = O("mask"), a = O("path");
        n.appendChild(a);
        var u = dt(), h = dt();
        n.setAttribute("id", h);
        var d = O(t.t === 1 ? "linearGradient" : "radialGradient");
        d.setAttribute("id", u), d.setAttribute("spreadMethod", "pad"), d.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var g = this.stops;
        for (s = t.g.p * 4; s < r; s += 2) i = O("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), d.appendChild(i), g.push(i);
        a.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + bt() + "#" + u + ")"), t.ty === "gs" && (a.setAttribute("stroke-linecap", _i[t.lc || 2]), a.setAttribute("stroke-linejoin", wi[t.lj || 2]), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), this.of = d, this.ms = n, this.ost = g, this.maskId = h, e.msElem = a;
      }
    }, H([ot], ge);
    function Ps(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = V.getProp(t, e.w, 0, null, this), this.d = new ti(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
    }
    H([ge, ot], Ps);
    function Ar() {
      this.it = [], this.prevViewData = [], this.gr = O("g");
    }
    function Cr(t, e, i) {
      this.transform = { mProps: t, op: e, container: i }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var Es = function(e, i, s, r) {
      if (i === 0) return "";
      var n = e.o, a = e.i, u = e.v, h, d = " M" + r.applyToPointStringified(u[0][0], u[0][1]);
      for (h = 1; h < i; h += 1) d += " C" + r.applyToPointStringified(n[h - 1][0], n[h - 1][1]) + " " + r.applyToPointStringified(a[h][0], a[h][1]) + " " + r.applyToPointStringified(u[h][0], u[h][1]);
      return s && i && (d += " C" + r.applyToPointStringified(n[h - 1][0], n[h - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(u[0][0], u[0][1]), d += "z"), d;
    }, xr = function() {
      var t = new st(), e = new st(), i = { createRenderFunction: s };
      function s(E) {
        switch (E.ty) {
          case "fl":
            return u;
          case "gf":
            return d;
          case "gs":
            return h;
          case "st":
            return g;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return a;
          case "tr":
            return r;
          case "no":
            return n;
          default:
            return null;
        }
      }
      function r(E, l, _) {
        (_ || l.transform.op._mdf) && l.transform.container.setAttribute("opacity", l.transform.op.v), (_ || l.transform.mProps._mdf) && l.transform.container.setAttribute("transform", l.transform.mProps.v.to2dCSS());
      }
      function n() {
      }
      function a(E, l, _) {
        var k, w, C, y, v, p, c = l.styles.length, b = l.lvl, P, x, T, I;
        for (p = 0; p < c; p += 1) {
          if (y = l.sh._mdf || _, l.styles[p].lvl < b) {
            for (x = e.reset(), T = b - l.styles[p].lvl, I = l.transformers.length - 1; !y && T > 0; ) y = l.transformers[I].mProps._mdf || y, T -= 1, I -= 1;
            if (y) for (T = b - l.styles[p].lvl, I = l.transformers.length - 1; T > 0; ) x.multiply(l.transformers[I].mProps.v), T -= 1, I -= 1;
          } else x = t;
          if (P = l.sh.paths, w = P._length, y) {
            for (C = "", k = 0; k < w; k += 1) v = P.shapes[k], v && v._length && (C += Es(v, v._length, v.c, x));
            l.caches[p] = C;
          } else C = l.caches[p];
          l.styles[p].d += E.hd === true ? "" : C, l.styles[p]._mdf = y || l.styles[p]._mdf;
        }
      }
      function u(E, l, _) {
        var k = l.style;
        (l.c._mdf || _) && k.pElem.setAttribute("fill", "rgb(" + ee(l.c.v[0]) + "," + ee(l.c.v[1]) + "," + ee(l.c.v[2]) + ")"), (l.o._mdf || _) && k.pElem.setAttribute("fill-opacity", l.o.v);
      }
      function h(E, l, _) {
        d(E, l, _), g(E, l, _);
      }
      function d(E, l, _) {
        var k = l.gf, w = l.g._hasOpacity, C = l.s.v, y = l.e.v;
        if (l.o._mdf || _) {
          var v = E.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          l.style.pElem.setAttribute(v, l.o.v);
        }
        if (l.s._mdf || _) {
          var p = E.t === 1 ? "x1" : "cx", c = p === "x1" ? "y1" : "cy";
          k.setAttribute(p, C[0]), k.setAttribute(c, C[1]), w && !l.g._collapsable && (l.of.setAttribute(p, C[0]), l.of.setAttribute(c, C[1]));
        }
        var b, P, x, T;
        if (l.g._cmdf || _) {
          b = l.cst;
          var I = l.g.c;
          for (x = b.length, P = 0; P < x; P += 1) T = b[P], T.setAttribute("offset", I[P * 4] + "%"), T.setAttribute("stop-color", "rgb(" + I[P * 4 + 1] + "," + I[P * 4 + 2] + "," + I[P * 4 + 3] + ")");
        }
        if (w && (l.g._omdf || _)) {
          var j = l.g.o;
          for (l.g._collapsable ? b = l.cst : b = l.ost, x = b.length, P = 0; P < x; P += 1) T = b[P], l.g._collapsable || T.setAttribute("offset", j[P * 2] + "%"), T.setAttribute("stop-opacity", j[P * 2 + 1]);
        }
        if (E.t === 1) (l.e._mdf || _) && (k.setAttribute("x2", y[0]), k.setAttribute("y2", y[1]), w && !l.g._collapsable && (l.of.setAttribute("x2", y[0]), l.of.setAttribute("y2", y[1])));
        else {
          var D;
          if ((l.s._mdf || l.e._mdf || _) && (D = Math.sqrt(Math.pow(C[0] - y[0], 2) + Math.pow(C[1] - y[1], 2)), k.setAttribute("r", D), w && !l.g._collapsable && l.of.setAttribute("r", D)), l.e._mdf || l.h._mdf || l.a._mdf || _) {
            D || (D = Math.sqrt(Math.pow(C[0] - y[0], 2) + Math.pow(C[1] - y[1], 2)));
            var L = Math.atan2(y[1] - C[1], y[0] - C[0]), G = l.h.v;
            G >= 1 ? G = 0.99 : G <= -1 && (G = -0.99);
            var R = D * G, F = Math.cos(L + l.a.v) * R + C[0], m2 = Math.sin(L + l.a.v) * R + C[1];
            k.setAttribute("fx", F), k.setAttribute("fy", m2), w && !l.g._collapsable && (l.of.setAttribute("fx", F), l.of.setAttribute("fy", m2));
          }
        }
      }
      function g(E, l, _) {
        var k = l.style, w = l.d;
        w && (w._mdf || _) && w.dashStr && (k.pElem.setAttribute("stroke-dasharray", w.dashStr), k.pElem.setAttribute("stroke-dashoffset", w.dashoffset[0])), l.c && (l.c._mdf || _) && k.pElem.setAttribute("stroke", "rgb(" + ee(l.c.v[0]) + "," + ee(l.c.v[1]) + "," + ee(l.c.v[2]) + ")"), (l.o._mdf || _) && k.pElem.setAttribute("stroke-opacity", l.o.v), (l.w._mdf || _) && (k.pElem.setAttribute("stroke-width", l.w.v), k.msElem && k.msElem.setAttribute("stroke-width", l.w.v));
      }
      return i;
    }();
    function Q(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
    }
    H([_t, Ft, ve, ys, At, wt, ne], Q), Q.prototype.initSecondaryElement = function() {
    }, Q.prototype.identityMatrix = new st(), Q.prototype.buildExpressionInterface = function() {
    }, Q.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
    }, Q.prototype.filterUniqueShapes = function() {
      var t, e = this.shapes.length, i, s, r = this.stylesList.length, n, a = [], u = false;
      for (s = 0; s < r; s += 1) {
        for (n = this.stylesList[s], u = false, a.length = 0, t = 0; t < e; t += 1) i = this.shapes[t], i.styles.indexOf(n) !== -1 && (a.push(i), u = i._isAnimated || u);
        a.length > 1 && u && this.setShapesAsAnimated(a);
      }
    }, Q.prototype.setShapesAsAnimated = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].setAsAnimated();
    }, Q.prototype.createStyleElement = function(t, e) {
      var i, s = new _s(t, e), r = s.pElem;
      if (t.ty === "st") i = new ws(this, t, s);
      else if (t.ty === "fl") i = new Ss(this, t, s);
      else if (t.ty === "gf" || t.ty === "gs") {
        var n = t.ty === "gf" ? ge : Ps;
        i = new n(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), r.setAttribute("mask", "url(" + bt() + "#" + i.maskId + ")"));
      } else t.ty === "no" && (i = new ks(this, t, s));
      return (t.ty === "st" || t.ty === "gs") && (r.setAttribute("stroke-linecap", _i[t.lc || 2]), r.setAttribute("stroke-linejoin", wi[t.lj || 2]), r.setAttribute("fill-opacity", "0"), t.lj === 1 && r.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = yi(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i;
    }, Q.prototype.createGroupElement = function(t) {
      var e = new Ar();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = yi(t.bm)), e;
    }, Q.prototype.createTransformElement = function(t, e) {
      var i = ci.getTransformProperty(this, t, this), s = new Cr(i, i.o, e);
      return this.addToAnimatedContents(t, s), s;
    }, Q.prototype.createShapeElement = function(t, e, i) {
      var s = 4;
      t.ty === "rc" ? s = 5 : t.ty === "el" ? s = 6 : t.ty === "sr" && (s = 7);
      var r = Ye.getShapeProp(this, t, s, this), n = new bs(e, i, r);
      return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n;
    }, Q.prototype.addToAnimatedContents = function(t, e) {
      for (var i = 0, s = this.animatedContents.length; i < s; ) {
        if (this.animatedContents[i].element === e) return;
        i += 1;
      }
      this.animatedContents.push({ fn: xr.createRenderFunction(t), element: e, data: t });
    }, Q.prototype.setElementStyles = function(t) {
      var e = t.styles, i, s = this.stylesList.length;
      for (i = 0; i < s; i += 1) this.stylesList[i].closed || e.push(this.stylesList[i]);
    }, Q.prototype.reloadShapes = function() {
      this._isFirstFrame = true;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, Q.prototype.searchShapes = function(t, e, i, s, r, n, a) {
      var u = [].concat(n), h, d = t.length - 1, g, E, l = [], _ = [], k, w, C;
      for (h = d; h >= 0; h -= 1) {
        if (C = this.searchProcessedElement(t[h]), C ? e[h] = i[C - 1] : t[h]._render = a, t[h].ty === "fl" || t[h].ty === "st" || t[h].ty === "gf" || t[h].ty === "gs" || t[h].ty === "no") C ? e[h].style.closed = false : e[h] = this.createStyleElement(t[h], r), t[h]._render && e[h].style.pElem.parentNode !== s && s.appendChild(e[h].style.pElem), l.push(e[h].style);
        else if (t[h].ty === "gr") {
          if (!C) e[h] = this.createGroupElement(t[h]);
          else for (E = e[h].it.length, g = 0; g < E; g += 1) e[h].prevViewData[g] = e[h].it[g];
          this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, r + 1, u, a), t[h]._render && e[h].gr.parentNode !== s && s.appendChild(e[h].gr);
        } else t[h].ty === "tr" ? (C || (e[h] = this.createTransformElement(t[h], s)), k = e[h].transform, u.push(k)) : t[h].ty === "sh" || t[h].ty === "rc" || t[h].ty === "el" || t[h].ty === "sr" ? (C || (e[h] = this.createShapeElement(t[h], u, r)), this.setElementStyles(e[h])) : t[h].ty === "tm" || t[h].ty === "rd" || t[h].ty === "ms" || t[h].ty === "pb" || t[h].ty === "zz" || t[h].ty === "op" ? (C ? (w = e[h], w.closed = false) : (w = Ht.getModifier(t[h].ty), w.init(this, t[h]), e[h] = w, this.shapeModifiers.push(w)), _.push(w)) : t[h].ty === "rp" && (C ? (w = e[h], w.closed = true) : (w = Ht.getModifier(t[h].ty), e[h] = w, w.init(this, t, h, e), this.shapeModifiers.push(w), a = false), _.push(w));
        this.addProcessedElement(t[h], h + 1);
      }
      for (d = l.length, h = 0; h < d; h += 1) l[h].closed = true;
      for (d = _.length, h = 0; h < d; h += 1) _[h].closed = true;
    }, Q.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, Q.prototype.renderShape = function() {
      var t, e = this.animatedContents.length, i;
      for (t = 0; t < e; t += 1) i = this.animatedContents[t], (this._isFirstFrame || i.element._isAnimated) && i.data !== true && i.fn(i.data, i.element, this._isFirstFrame);
    }, Q.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    };
    function Si(t, e, i, s, r, n) {
      this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = r, this.p = n, this._mdf = { o: true, sw: !!e, sc: !!i, fc: !!s, m: true, p: true };
    }
    Si.prototype.update = function(t, e, i, s, r, n) {
      this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false, this._mdf.p = false;
      var a = false;
      return this.o !== t && (this.o = t, this._mdf.o = true, a = true), this.sw !== e && (this.sw = e, this._mdf.sw = true, a = true), this.sc !== i && (this.sc = i, this._mdf.sc = true, a = true), this.fc !== s && (this.fc = s, this._mdf.fc = true, a = true), this.m !== r && (this.m = r, this._mdf.m = true, a = true), n.length && (this.p[0] !== n[0] || this.p[1] !== n[1] || this.p[4] !== n[4] || this.p[5] !== n[5] || this.p[12] !== n[12] || this.p[13] !== n[13]) && (this.p = n, this._mdf.p = true, a = true), a;
    };
    function ut(t, e) {
      this._frameId = ai, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: false, strokeColorAnim: false, strokeWidthAnim: false, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: false }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    ut.prototype.defaultBoxWidth = [0, 0], ut.prototype.copyData = function(t, e) {
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }, ut.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
    }, ut.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, ut.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, ut.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, ut.prototype.getValue = function(t) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, i = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = true, this._mdf = false;
        var s, r = this.effectsSequence.length, n = t || this.data.d.k[this.keysIndex].s;
        for (s = 0; s < r; s += 1) i !== this.keysIndex ? n = this.effectsSequence[s](n, n.t) : n = this.effectsSequence[s](this.currentData, n.t);
        e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = false, this.frameId = this.elem.globalData.frameId;
      }
    }, ut.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e); ) i += 1;
      return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
    }, ut.prototype.buildFinalText = function(t) {
      for (var e = [], i = 0, s = t.length, r, n, a = false, u = false, h = ""; i < s; ) a = u, u = false, r = t.charCodeAt(i), h = t.charAt(i), re.isCombinedCharacter(r) ? a = true : r >= 55296 && r <= 56319 ? re.isRegionalFlag(t, i) ? h = t.substr(i, 14) : (n = t.charCodeAt(i + 1), n >= 56320 && n <= 57343 && (re.isModifier(r, n) ? (h = t.substr(i, 2), a = true) : re.isFlagEmoji(t.substr(i, 4)) ? h = t.substr(i, 4) : h = t.substr(i, 2))) : r > 56319 ? (n = t.charCodeAt(i + 1), re.isVariationSelector(r) && (a = true)) : re.isZeroWidthJoiner(r) && (a = true, u = true), a ? (e[e.length - 1] += h, a = false) : e.push(h), i += h.length;
      return e;
    }, ut.prototype.completeTextData = function(t) {
      t.__complete = true;
      var e = this.elem.globalData.fontManager, i = this.data, s = [], r, n, a, u = 0, h, d = i.m.g, g = 0, E = 0, l = 0, _ = [], k = 0, w = 0, C, y, v = e.getFontByName(t.f), p, c = 0, b = cs(v);
      t.fWeight = b.weight, t.fStyle = b.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), n = t.finalText.length, t.finalLineHeight = t.lh;
      var P = t.tr / 1e3 * t.finalSize, x;
      if (t.sz) for (var T = true, I = t.sz[0], j = t.sz[1], D, L; T; ) {
        L = this.buildFinalText(t.t), D = 0, k = 0, n = L.length, P = t.tr / 1e3 * t.finalSize;
        var G = -1;
        for (r = 0; r < n; r += 1) x = L[r].charCodeAt(0), a = false, L[r] === " " ? G = r : (x === 13 || x === 3) && (k = 0, a = true, D += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (p = e.getCharData(L[r], v.fStyle, v.fFamily), c = a ? 0 : p.w * t.finalSize / 100) : c = e.measureText(L[r], t.f, t.finalSize), k + c > I && L[r] !== " " ? (G === -1 ? n += 1 : r = G, D += t.finalLineHeight || t.finalSize * 1.2, L.splice(r, G === r ? 1 : 0, "\r"), G = -1, k = 0) : (k += c, k += P);
        D += v.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && j < D ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = L, n = t.finalText.length, T = false);
      }
      k = -P, c = 0;
      var R = 0, F;
      for (r = 0; r < n; r += 1) if (a = false, F = t.finalText[r], x = F.charCodeAt(0), x === 13 || x === 3 ? (R = 0, _.push(k), w = k > w ? k : w, k = -2 * P, h = "", a = true, l += 1) : h = F, e.chars ? (p = e.getCharData(F, v.fStyle, e.getFontByName(t.f).fFamily), c = a ? 0 : p.w * t.finalSize / 100) : c = e.measureText(h, t.f, t.finalSize), F === " " ? R += c + P : (k += c + P + R, R = 0), s.push({ l: c, an: c, add: g, n: a, anIndexes: [], val: h, line: l, animatorJustifyOffset: 0 }), d == 2) {
        if (g += c, h === "" || h === " " || r === n - 1) {
          for ((h === "" || h === " ") && (g -= c); E <= r; ) s[E].an = g, s[E].ind = u, s[E].extra = c, E += 1;
          u += 1, g = 0;
        }
      } else if (d == 3) {
        if (g += c, h === "" || r === n - 1) {
          for (h === "" && (g -= c); E <= r; ) s[E].an = g, s[E].ind = u, s[E].extra = c, E += 1;
          g = 0, u += 1;
        }
      } else s[u].ind = u, s[u].extra = 0, u += 1;
      if (t.l = s, w = k > w ? k : w, _.push(k), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = w, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0;
      }
      t.lineWidths = _;
      var m2 = i.a, S, o;
      y = m2.length;
      var f, M, A = [];
      for (C = 0; C < y; C += 1) {
        for (S = m2[C], S.a.sc && (t.strokeColorAnim = true), S.a.sw && (t.strokeWidthAnim = true), (S.a.fc || S.a.fh || S.a.fs || S.a.fb) && (t.fillColorAnim = true), M = 0, f = S.s.b, r = 0; r < n; r += 1) o = s[r], o.anIndexes[C] = M, (f == 1 && o.val !== "" || f == 2 && o.val !== "" && o.val !== " " || f == 3 && (o.n || o.val == " " || r == n - 1) || f == 4 && (o.n || r == n - 1)) && (S.s.rn === 1 && A.push(M), M += 1);
        i.a[C].s.totalChars = M;
        var B = -1, q;
        if (S.s.rn === 1) for (r = 0; r < n; r += 1) o = s[r], B != o.anIndexes[C] && (B = o.anIndexes[C], q = A.splice(Math.floor(Math.random() * A.length), 1)[0]), o.anIndexes[C] = q;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = v.ascent * t.finalSize / 100;
    }, ut.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var i = this.copyData({}, this.data.d.k[e].s);
      i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this);
    }, ut.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
    }, ut.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, ut.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var Mr = function() {
      var t = Math.max, e = Math.min, i = Math.floor;
      function s(n, a) {
        this._currentTextLength = -1, this.k = false, this.data = a, this.elem = n, this.comp = n.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(n), this.s = V.getProp(n, a.s || { k: 0 }, 0, 0, this), "e" in a ? this.e = V.getProp(n, a.e, 0, 0, this) : this.e = { v: 100 }, this.o = V.getProp(n, a.o || { k: 0 }, 0, 0, this), this.xe = V.getProp(n, a.xe || { k: 0 }, 0, 0, this), this.ne = V.getProp(n, a.ne || { k: 0 }, 0, 0, this), this.sm = V.getProp(n, a.sm || { k: 100 }, 0, 0, this), this.a = V.getProp(n, a.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      s.prototype = { getMult: function(a) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var u = 0, h = 0, d = 1, g = 1;
        this.ne.v > 0 ? u = this.ne.v / 100 : h = -this.ne.v / 100, this.xe.v > 0 ? d = 1 - this.xe.v / 100 : g = 1 + this.xe.v / 100;
        var E = Pe.getBezierEasing(u, h, d, g).get, l = 0, _ = this.finalS, k = this.finalE, w = this.data.sh;
        if (w === 2) k === _ ? l = a >= k ? 1 : 0 : l = t(0, e(0.5 / (k - _) + (a - _) / (k - _), 1)), l = E(l);
        else if (w === 3) k === _ ? l = a >= k ? 0 : 1 : l = 1 - t(0, e(0.5 / (k - _) + (a - _) / (k - _), 1)), l = E(l);
        else if (w === 4) k === _ ? l = 0 : (l = t(0, e(0.5 / (k - _) + (a - _) / (k - _), 1)), l < 0.5 ? l *= 2 : l = 1 - 2 * (l - 0.5)), l = E(l);
        else if (w === 5) {
          if (k === _) l = 0;
          else {
            var C = k - _;
            a = e(t(0, a + 0.5 - _), k - _);
            var y = -C / 2 + a, v = C / 2;
            l = Math.sqrt(1 - y * y / (v * v));
          }
          l = E(l);
        } else w === 6 ? (k === _ ? l = 0 : (a = e(t(0, a + 0.5 - _), k - _), l = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (k - _))) / 2), l = E(l)) : (a >= i(_) && (a - _ < 0 ? l = t(0, e(e(k, 1) - (_ - a), 1)) : l = t(0, e(k - a, 1))), l = E(l));
        if (this.sm.v !== 100) {
          var p = this.sm.v * 0.01;
          p === 0 && (p = 1e-8);
          var c = 0.5 - p * 0.5;
          l < c ? l = 0 : (l = (l - c) / p, l > 1 && (l = 1));
        }
        return l * this.a.v;
      }, getValue: function(a) {
        this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
        var u = this.data.r === 2 ? 1 : 100 / this.data.totalChars, h = this.o.v / u, d = this.s.v / u + h, g = this.e.v / u + h;
        if (d > g) {
          var E = d;
          d = g, g = E;
        }
        this.finalS = d, this.finalE = g;
      } }, H([ot], s);
      function r(n, a, u) {
        return new s(n, a);
      }
      return { getTextSelectorProp: r };
    }();
    function Tr(t, e, i) {
      var s = { propType: false }, r = V.getProp, n = e.a;
      this.a = { r: n.r ? r(t, n.r, 0, U, i) : s, rx: n.rx ? r(t, n.rx, 0, U, i) : s, ry: n.ry ? r(t, n.ry, 0, U, i) : s, sk: n.sk ? r(t, n.sk, 0, U, i) : s, sa: n.sa ? r(t, n.sa, 0, U, i) : s, s: n.s ? r(t, n.s, 1, 0.01, i) : s, a: n.a ? r(t, n.a, 1, 0, i) : s, o: n.o ? r(t, n.o, 0, 0.01, i) : s, p: n.p ? r(t, n.p, 1, 0, i) : s, sw: n.sw ? r(t, n.sw, 0, 0, i) : s, sc: n.sc ? r(t, n.sc, 1, 0, i) : s, fc: n.fc ? r(t, n.fc, 1, 0, i) : s, fh: n.fh ? r(t, n.fh, 0, 0, i) : s, fs: n.fs ? r(t, n.fs, 0, 0.01, i) : s, fb: n.fb ? r(t, n.fb, 0, 0.01, i) : s, t: n.t ? r(t, n.t, 0, 0, i) : s }, this.s = Mr.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
    }
    function ae(t, e, i) {
      this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = $(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(i);
    }
    ae.prototype.searchProperties = function() {
      var t, e = this._textData.a.length, i, s = V.getProp;
      for (t = 0; t < e; t += 1) i = this._textData.a[t], this._animatorsData[t] = new Tr(this._elem, i, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { a: s(this._elem, this._textData.p.a, 0, 0, this), f: s(this._elem, this._textData.p.f, 0, 0, this), l: s(this._elem, this._textData.p.l, 0, 0, this), r: s(this._elem, this._textData.p.r, 0, 0, this), p: s(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this);
    }, ae.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = false;
        var i = this._moreOptions.alignment.v, s = this._animatorsData, r = this._textData, n = this.mHelper, a = this._renderType, u = this.renderedLetters.length, h, d, g, E, l = t.l, _, k, w, C, y, v, p, c, b, P, x, T, I, j, D;
        if (this._hasMaskedPath) {
          if (D = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var L = D.v;
            this._pathData.r.v && (L = L.reverse()), _ = { tLength: 0, segments: [] }, E = L._length - 1;
            var G;
            for (T = 0, g = 0; g < E; g += 1) G = Mt.buildBezierData(L.v[g], L.v[g + 1], [L.o[g][0] - L.v[g][0], L.o[g][1] - L.v[g][1]], [L.i[g + 1][0] - L.v[g + 1][0], L.i[g + 1][1] - L.v[g + 1][1]]), _.tLength += G.segmentLength, _.segments.push(G), T += G.segmentLength;
            g = E, D.v.c && (G = Mt.buildBezierData(L.v[g], L.v[0], [L.o[g][0] - L.v[g][0], L.o[g][1] - L.v[g][1]], [L.i[0][0] - L.v[0][0], L.i[0][1] - L.v[0][1]]), _.tLength += G.segmentLength, _.segments.push(G), T += G.segmentLength), this._pathData.pi = _;
          }
          if (_ = this._pathData.pi, k = this._pathData.f.v, p = 0, v = 1, C = 0, y = true, P = _.segments, k < 0 && D.v.c) for (_.tLength < Math.abs(k) && (k = -Math.abs(k) % _.tLength), p = P.length - 1, b = P[p].points, v = b.length - 1; k < 0; ) k += b[v].partialLength, v -= 1, v < 0 && (p -= 1, b = P[p].points, v = b.length - 1);
          b = P[p].points, c = b[v - 1], w = b[v], x = w.partialLength;
        }
        E = l.length, h = 0, d = 0;
        var R = t.finalSize * 1.2 * 0.714, F = true, m2, S, o, f, M;
        f = s.length;
        var A, B = -1, q, W, X, Y = k, it = p, mt = v, Bt = -1, gt, lt, kt, K, z, Dt, Jt, Nt, Rt = "", qt = this.defaultPropsArray, jt;
        if (t.j === 2 || t.j === 1) {
          var yt = 0, Qt = 0, $t = t.j === 2 ? -0.5 : -1, Ct = 0, te = true;
          for (g = 0; g < E; g += 1) if (l[g].n) {
            for (yt && (yt += Qt); Ct < g; ) l[Ct].animatorJustifyOffset = yt, Ct += 1;
            yt = 0, te = true;
          } else {
            for (o = 0; o < f; o += 1) m2 = s[o].a, m2.t.propType && (te && t.j === 2 && (Qt += m2.t.v * $t), S = s[o].s, A = S.getMult(l[g].anIndexes[o], r.a[o].s.totalChars), A.length ? yt += m2.t.v * A[0] * $t : yt += m2.t.v * A * $t);
            te = false;
          }
          for (yt && (yt += Qt); Ct < g; ) l[Ct].animatorJustifyOffset = yt, Ct += 1;
        }
        for (g = 0; g < E; g += 1) {
          if (n.reset(), gt = 1, l[g].n) h = 0, d += t.yOffset, d += F ? 1 : 0, k = Y, F = false, this._hasMaskedPath && (p = it, v = mt, b = P[p].points, c = b[v - 1], w = b[v], x = w.partialLength, C = 0), Rt = "", Nt = "", Dt = "", jt = "", qt = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (Bt !== l[g].line) {
                switch (t.j) {
                  case 1:
                    k += T - t.lineWidths[l[g].line];
                    break;
                  case 2:
                    k += (T - t.lineWidths[l[g].line]) / 2;
                    break;
                }
                Bt = l[g].line;
              }
              B !== l[g].ind && (l[B] && (k += l[B].extra), k += l[g].an / 2, B = l[g].ind), k += i[0] * l[g].an * 5e-3;
              var xt = 0;
              for (o = 0; o < f; o += 1) m2 = s[o].a, m2.p.propType && (S = s[o].s, A = S.getMult(l[g].anIndexes[o], r.a[o].s.totalChars), A.length ? xt += m2.p.v[0] * A[0] : xt += m2.p.v[0] * A), m2.a.propType && (S = s[o].s, A = S.getMult(l[g].anIndexes[o], r.a[o].s.totalChars), A.length ? xt += m2.a.v[0] * A[0] : xt += m2.a.v[0] * A);
              for (y = true, this._pathData.a.v && (k = l[0].an * 0.5 + (T - this._pathData.f.v - l[0].an * 0.5 - l[l.length - 1].an * 0.5) * B / (E - 1), k += this._pathData.f.v); y; ) C + x >= k + xt || !b ? (I = (k + xt - C) / w.partialLength, W = c.point[0] + (w.point[0] - c.point[0]) * I, X = c.point[1] + (w.point[1] - c.point[1]) * I, n.translate(-i[0] * l[g].an * 5e-3, -(i[1] * R) * 0.01), y = false) : b && (C += w.partialLength, v += 1, v >= b.length && (v = 0, p += 1, P[p] ? b = P[p].points : D.v.c ? (v = 0, p = 0, b = P[p].points) : (C -= w.partialLength, b = null)), b && (c = w, w = b[v], x = w.partialLength));
              q = l[g].an / 2 - l[g].add, n.translate(-q, 0, 0);
            } else q = l[g].an / 2 - l[g].add, n.translate(-q, 0, 0), n.translate(-i[0] * l[g].an * 5e-3, -i[1] * R * 0.01, 0);
            for (o = 0; o < f; o += 1) m2 = s[o].a, m2.t.propType && (S = s[o].s, A = S.getMult(l[g].anIndexes[o], r.a[o].s.totalChars), (h !== 0 || t.j !== 0) && (this._hasMaskedPath ? A.length ? k += m2.t.v * A[0] : k += m2.t.v * A : A.length ? h += m2.t.v * A[0] : h += m2.t.v * A));
            for (t.strokeWidthAnim && (kt = t.sw || 0), t.strokeColorAnim && (t.sc ? lt = [t.sc[0], t.sc[1], t.sc[2]] : lt = [0, 0, 0]), t.fillColorAnim && t.fc && (K = [t.fc[0], t.fc[1], t.fc[2]]), o = 0; o < f; o += 1) m2 = s[o].a, m2.a.propType && (S = s[o].s, A = S.getMult(l[g].anIndexes[o], r.a[o].s.totalChars), A.length ? n.translate(-m2.a.v[0] * A[0], -m2.a.v[1] * A[1], m2.a.v[2] * A[2]) : n.translate(-m2.a.v[0] * A, -m2.a.v[1] * A, m2.a.v[2] * A));
            for (o = 0; o < f; o += 1) m2 = s[o].a, m2.s.propType && (S = s[o].s, A = S.getMult(l[g].anIndexes[o], r.a[o].s.totalChars), A.length ? n.scale(1 + (m2.s.v[0] - 1) * A[0], 1 + (m2.s.v[1] - 1) * A[1], 1) : n.scale(1 + (m2.s.v[0] - 1) * A, 1 + (m2.s.v[1] - 1) * A, 1));
            for (o = 0; o < f; o += 1) {
              if (m2 = s[o].a, S = s[o].s, A = S.getMult(l[g].anIndexes[o], r.a[o].s.totalChars), m2.sk.propType && (A.length ? n.skewFromAxis(-m2.sk.v * A[0], m2.sa.v * A[1]) : n.skewFromAxis(-m2.sk.v * A, m2.sa.v * A)), m2.r.propType && (A.length ? n.rotateZ(-m2.r.v * A[2]) : n.rotateZ(-m2.r.v * A)), m2.ry.propType && (A.length ? n.rotateY(m2.ry.v * A[1]) : n.rotateY(m2.ry.v * A)), m2.rx.propType && (A.length ? n.rotateX(m2.rx.v * A[0]) : n.rotateX(m2.rx.v * A)), m2.o.propType && (A.length ? gt += (m2.o.v * A[0] - gt) * A[0] : gt += (m2.o.v * A - gt) * A), t.strokeWidthAnim && m2.sw.propType && (A.length ? kt += m2.sw.v * A[0] : kt += m2.sw.v * A), t.strokeColorAnim && m2.sc.propType) for (z = 0; z < 3; z += 1) A.length ? lt[z] += (m2.sc.v[z] - lt[z]) * A[0] : lt[z] += (m2.sc.v[z] - lt[z]) * A;
              if (t.fillColorAnim && t.fc) {
                if (m2.fc.propType) for (z = 0; z < 3; z += 1) A.length ? K[z] += (m2.fc.v[z] - K[z]) * A[0] : K[z] += (m2.fc.v[z] - K[z]) * A;
                m2.fh.propType && (A.length ? K = Ni(K, m2.fh.v * A[0]) : K = Ni(K, m2.fh.v * A)), m2.fs.propType && (A.length ? K = Oi(K, m2.fs.v * A[0]) : K = Oi(K, m2.fs.v * A)), m2.fb.propType && (A.length ? K = Di(K, m2.fb.v * A[0]) : K = Di(K, m2.fb.v * A));
              }
            }
            for (o = 0; o < f; o += 1) m2 = s[o].a, m2.p.propType && (S = s[o].s, A = S.getMult(l[g].anIndexes[o], r.a[o].s.totalChars), this._hasMaskedPath ? A.length ? n.translate(0, m2.p.v[1] * A[0], -m2.p.v[2] * A[1]) : n.translate(0, m2.p.v[1] * A, -m2.p.v[2] * A) : A.length ? n.translate(m2.p.v[0] * A[0], m2.p.v[1] * A[1], -m2.p.v[2] * A[2]) : n.translate(m2.p.v[0] * A, m2.p.v[1] * A, -m2.p.v[2] * A));
            if (t.strokeWidthAnim && (Dt = kt < 0 ? 0 : kt), t.strokeColorAnim && (Jt = "rgb(" + Math.round(lt[0] * 255) + "," + Math.round(lt[1] * 255) + "," + Math.round(lt[2] * 255) + ")"), t.fillColorAnim && t.fc && (Nt = "rgb(" + Math.round(K[0] * 255) + "," + Math.round(K[1] * 255) + "," + Math.round(K[2] * 255) + ")"), this._hasMaskedPath) {
              if (n.translate(0, -t.ls), n.translate(0, i[1] * R * 0.01 + d, 0), this._pathData.p.v) {
                j = (w.point[1] - c.point[1]) / (w.point[0] - c.point[0]);
                var oe = Math.atan(j) * 180 / Math.PI;
                w.point[0] < c.point[0] && (oe += 180), n.rotate(-oe * Math.PI / 180);
              }
              n.translate(W, X, 0), k -= i[0] * l[g].an * 5e-3, l[g + 1] && B !== l[g + 1].ind && (k += l[g].an / 2, k += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (n.translate(h, d, 0), t.ps && n.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  n.translate(l[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[l[g].line]), 0, 0);
                  break;
                case 2:
                  n.translate(l[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[l[g].line]) / 2, 0, 0);
                  break;
              }
              n.translate(0, -t.ls), n.translate(q, 0, 0), n.translate(i[0] * l[g].an * 5e-3, i[1] * R * 0.01, 0), h += l[g].l + t.tr * 1e-3 * t.finalSize;
            }
            a === "html" ? Rt = n.toCSS() : a === "svg" ? Rt = n.to2dCSS() : qt = [n.props[0], n.props[1], n.props[2], n.props[3], n.props[4], n.props[5], n.props[6], n.props[7], n.props[8], n.props[9], n.props[10], n.props[11], n.props[12], n.props[13], n.props[14], n.props[15]], jt = gt;
          }
          u <= g ? (M = new Si(jt, Dt, Jt, Nt, Rt, qt), this.renderedLetters.push(M), u += 1, this.lettersChangedFlag = true) : (M = this.renderedLetters[g], this.lettersChangedFlag = M.update(jt, Dt, Jt, Nt, Rt, qt) || this.lettersChangedFlag);
        }
      }
    }, ae.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, ae.prototype.mHelper = new st(), ae.prototype.defaultPropsArray = [], H([ot], ae);
    function St() {
    }
    St.prototype.initElement = function(t, e, i) {
      this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new ut(this, t.t, this.dynamicProperties), this.textAnimator = new ae(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, St.prototype.prepareFrame = function(t) {
      this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, St.prototype.createPathShape = function(t, e) {
      var i, s = e.length, r, n = "";
      for (i = 0; i < s; i += 1) e[i].ty === "sh" && (r = e[i].ks.k, n += Es(r, r.i.length, true, t));
      return n;
    }, St.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, St.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, St.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, St.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, r) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
          break;
      }
      e.translate(s, r, 0);
    }, St.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
    }, St.prototype.emptyProp = new Si(), St.prototype.destroy = function() {
    }, St.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
    };
    var Fr = { shapes: [] };
    function It(t, e, i) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
    }
    H([_t, Ft, ve, At, wt, ne, St], It), It.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = O("text"));
    }, It.prototype.buildTextContents = function(t) {
      for (var e = 0, i = t.length, s = [], r = ""; e < i; ) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(r), r = "") : r += t[e], e += 1;
      return s.push(r), s;
    }, It.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var i = t.shapes[0];
        if (i.it) {
          var s = i.it[i.it.length - 1];
          s.s && (s.s.k[0] = e, s.s.k[1] = e);
        }
      }
      return t;
    }, It.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var t, e, i = this.textProperty.currentData;
      this.renderedLetters = $(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
      var s = this.globalData.fontManager.getFontByName(i.f);
      if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
      else {
        this.layerElement.setAttribute("font-family", s.fFamily);
        var r = i.fWeight, n = i.fStyle;
        this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", r);
      }
      this.layerElement.setAttribute("aria-label", i.t);
      var a = i.l || [], u = !!this.globalData.fontManager.chars;
      e = a.length;
      var h, d = this.mHelper, g = "", E = this.data.singleShape, l = 0, _ = 0, k = true, w = i.tr * 1e-3 * i.finalSize;
      if (E && !u && !i.sz) {
        var C = this.textContainer, y = "start";
        switch (i.j) {
          case 1:
            y = "end";
            break;
          case 2:
            y = "middle";
            break;
          default:
            y = "start";
            break;
        }
        C.setAttribute("text-anchor", y), C.setAttribute("letter-spacing", w);
        var v = this.buildTextContents(i.finalText);
        for (e = v.length, _ = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1) h = this.textSpans[t].span || O("tspan"), h.textContent = v[t], h.setAttribute("x", 0), h.setAttribute("y", _), h.style.display = "inherit", C.appendChild(h), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = h, _ += i.finalLineHeight;
        this.layerElement.appendChild(C);
      } else {
        var p = this.textSpans.length, c;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !u || !E || t === 0) {
            if (h = p > t ? this.textSpans[t].span : O(u ? "g" : "text"), p <= t) {
              if (h.setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = h, u) {
                var b = O("g");
                h.appendChild(b), this.textSpans[t].childSpan = b;
              }
              this.textSpans[t].span = h, this.layerElement.appendChild(h);
            }
            h.style.display = "inherit";
          }
          if (d.reset(), E && (a[t].n && (l = -w, _ += i.yOffset, _ += k ? 1 : 0, k = false), this.applyTextPropertiesToMatrix(i, d, a[t].line, l, _), l += a[t].l || 0, l += w), u) {
            c = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily);
            var P;
            if (c.t === 1) P = new he(c.data, this.globalData, this);
            else {
              var x = Fr;
              c.data && c.data.shapes && (x = this.buildShapeData(c.data, i.finalSize)), P = new Q(x, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var T = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(T.layerElement), T.destroy();
            }
            this.textSpans[t].glyph = P, P._debug = true, P.prepareFrame(0), P.renderFrame(), this.textSpans[t].childSpan.appendChild(P.layerElement), c.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")");
          } else E && h.setAttribute("transform", "translate(" + d.props[12] + "," + d.props[13] + ")"), h.textContent = a[t].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        E && h && h.setAttribute("d", g);
      }
      for (; t < this.textSpans.length; ) this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = true;
    }, It.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = false;
        var t = this.layerElement.getBBox();
        this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
      }
      return this.bbox;
    }, It.prototype.getValue = function() {
      var t, e = this.textSpans.length, i;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1) i = this.textSpans[t].glyph, i && (i.prepareFrame(this.comp.renderedFrame - this.data.st), i._mdf && (this._mdf = true));
    }, It.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = true;
        var t, e, i = this.textAnimator.renderedLetters, s = this.textProperty.currentData.l;
        e = s.length;
        var r, n, a;
        for (t = 0; t < e; t += 1) s[t].n || (r = i[t], n = this.textSpans[t].span, a = this.textSpans[t].glyph, a && a.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc));
      }
    };
    function ei(t, e, i) {
      this.initElement(t, e, i);
    }
    H([me], ei), ei.prototype.createContent = function() {
      var t = O("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    };
    function Kt(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
    }
    Kt.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, Kt.prototype.renderFrame = function() {
    }, Kt.prototype.getBaseElement = function() {
      return null;
    }, Kt.prototype.destroy = function() {
    }, Kt.prototype.sourceRectAtTime = function() {
    }, Kt.prototype.hide = function() {
    }, H([_t, Ft, At, wt], Kt);
    function nt() {
    }
    H([rt], nt), nt.prototype.createNull = function(t) {
      return new Kt(t, this.globalData, this);
    }, nt.prototype.createShape = function(t) {
      return new Q(t, this.globalData, this);
    }, nt.prototype.createText = function(t) {
      return new It(t, this.globalData, this);
    }, nt.prototype.createImage = function(t) {
      return new me(t, this.globalData, this);
    }, nt.prototype.createSolid = function(t) {
      return new ei(t, this.globalData, this);
    }, nt.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var i = O("clipPath"), s = O("rect");
      s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
      var r = dt();
      i.setAttribute("id", r), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + bt() + "#" + r + ")"), e.appendChild(i), this.layers = t.layers, this.elements = $(t.layers.length);
    }, nt.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, nt.prototype.updateContainerSize = function() {
    }, nt.prototype.findIndexByInd = function(t) {
      var e = 0, i = this.layers.length;
      for (e = 0; e < i; e += 1) if (this.layers[e].ind === t) return e;
      return -1;
    }, nt.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        e[t] = true;
        var i = this.createItem(this.layers[t]);
        if (e[t] = i, Ne() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
          var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (s === -1) return;
          if (!this.elements[s] || this.elements[s] === true) this.buildItem(s), this.addPendingElement(i);
          else {
            var r = e[s], n = r.getMatte(this.layers[t].tt);
            i.setMatte(n);
          }
        }
      }
    }, nt.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt) for (var e = 0, i = this.elements.length; e < i; ) {
          if (this.elements[e] === t) {
            var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, r = this.elements[s], n = r.getMatte(this.layers[e].tt);
            t.setMatte(n);
            break;
          }
          e += 1;
        }
      }
    }, nt.prototype.renderFrame = function(t) {
      if (!(this.renderedFrame === t || this.destroyed)) {
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
        var e, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf) for (e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, nt.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        for (var s = 0, r; s < e; ) this.elements[s] && this.elements[s] !== true && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
        r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i);
      }
    }, nt.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, nt.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function Lt() {
    }
    H([_t, Ft, At, wt, ne], Lt), Lt.prototype.initElement = function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
    }, Lt.prototype.prepareFrame = function(t) {
      if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var i, s = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = true));
      }
    }, Lt.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, Lt.prototype.setElements = function(t) {
      this.elements = t;
    }, Lt.prototype.getElements = function() {
      return this.elements;
    }, Lt.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
    }, Lt.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function he(t, e, i) {
      this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? $(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? V.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    H([nt, Lt, ve], he), he.prototype.createComp = function(t) {
      return new he(t, this.globalData, this);
    };
    function Le(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = O("svg");
      var i = "";
      if (e && e.title) {
        var s = O("title"), r = dt();
        s.setAttribute("id", r), s.textContent = e.title, this.svgElement.appendChild(s), i += r;
      }
      if (e && e.description) {
        var n = O("desc"), a = dt();
        n.setAttribute("id", a), n.textContent = e.description, this.svgElement.appendChild(n), i += " " + a;
      }
      i && this.svgElement.setAttribute("aria-labelledby", i);
      var u = O("defs");
      this.svgElement.appendChild(u);
      var h = O("g");
      this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && e.hideOnTransparent === false), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, defs: u, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
    }
    H([nt], Le), Le.prototype.createComp = function(t) {
      return new he(t, this.globalData, this);
    };
    var ki = {};
    function Pi(t) {
      var e, i = t.data.ef ? t.data.ef.length : 0;
      this.filters = [];
      var s;
      for (e = 0; e < i; e += 1) {
        s = null;
        var r = t.data.ef[e].ty;
        if (ki[r]) {
          var n = ki[r].effect;
          s = new n(t.effectsManager.effectElements[e], t);
        }
        s && this.filters.push(s);
      }
      this.filters.length && t.addRenderableComponent(this);
    }
    Pi.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
    }, Pi.prototype.getEffects = function(t) {
      var e, i = this.filters.length, s = [];
      for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
      return s;
    };
    function Vt() {
    }
    Vt.prototype = { checkBlendMode: function() {
    }, initRendererElement: function() {
      this.baseElement = at(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = O("svg"), this.layerElement = O("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, Gt(this.baseElement);
    }, createContainerElements: function() {
      this.renderableEffectsManager = new Pi(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      var e = this.transformedElement ? this.transformedElement.style : {};
      if (this.finalTransform._matMdf) {
        var i = this.finalTransform.mat.toCSS();
        e.transform = i, e.webkitTransform = i;
      }
      this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
    }, destroy: function() {
      this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
    }, createRenderableComponents: function() {
      this.maskManager = new Zt(this.data, this, this.globalData);
    }, addEffects: function() {
    }, setMatte: function() {
    } }, Vt.prototype.getBaseElement = ve.prototype.getBaseElement, Vt.prototype.destroyBaseElement = Vt.prototype.destroy, Vt.prototype.buildElementParenting = rt.prototype.buildElementParenting;
    function Ve(t, e, i) {
      this.initElement(t, e, i);
    }
    H([_t, Ft, Vt, At, wt, ne], Ve), Ve.prototype.createContent = function() {
      var t;
      this.data.hasMask ? (t = O("rect"), t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t = at("div"), t.style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
    };
    function pt(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = O("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
    }
    H([_t, Ft, Ve, Q, Vt, At, wt, de], pt), pt.prototype._renderShapeFrame = pt.prototype.renderInnerContent, pt.prototype.createContent = function() {
      var t;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
      else {
        t = O("svg");
        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true), this.filterUniqueShapes(), this.shapeCont = t;
    }, pt.prototype.getTransformedPoint = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
      return e;
    }, pt.prototype.calculateShapeBoundingBox = function(t, e) {
      var i = t.sh.v, s = t.transformers, r, n = i._length, a, u, h, d;
      if (!(n <= 1)) {
        for (r = 0; r < n - 1; r += 1) a = this.getTransformedPoint(s, i.v[r]), u = this.getTransformedPoint(s, i.o[r]), h = this.getTransformedPoint(s, i.i[r + 1]), d = this.getTransformedPoint(s, i.v[r + 1]), this.checkBounds(a, u, h, d, e);
        i.c && (a = this.getTransformedPoint(s, i.v[r]), u = this.getTransformedPoint(s, i.o[r]), h = this.getTransformedPoint(s, i.i[0]), d = this.getTransformedPoint(s, i.v[0]), this.checkBounds(a, u, h, d, e));
      }
    }, pt.prototype.checkBounds = function(t, e, i, s, r) {
      this.getBoundsOfCurve(t, e, i, s);
      var n = this.shapeBoundingBox;
      r.x = be(n.left, r.x), r.xMax = De(n.right, r.xMax), r.y = be(n.top, r.y), r.yMax = De(n.bottom, r.yMax);
    }, pt.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, pt.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, pt.prototype.getBoundsOfCurve = function(t, e, i, s) {
      for (var r = [[t[0], s[0]], [t[1], s[1]]], n, a, u, h, d, g, E, l = 0; l < 2; ++l) a = 6 * t[l] - 12 * e[l] + 6 * i[l], n = -3 * t[l] + 9 * e[l] - 9 * i[l] + 3 * s[l], u = 3 * e[l] - 3 * t[l], a |= 0, n |= 0, u |= 0, n === 0 && a === 0 || (n === 0 ? (h = -u / a, h > 0 && h < 1 && r[l].push(this.calculateF(h, t, e, i, s, l))) : (d = a * a - 4 * u * n, d >= 0 && (g = (-a + Oe(d)) / (2 * n), g > 0 && g < 1 && r[l].push(this.calculateF(g, t, e, i, s, l)), E = (-a - Oe(d)) / (2 * n), E > 0 && E < 1 && r[l].push(this.calculateF(E, t, e, i, s, l)))));
      this.shapeBoundingBox.left = be.apply(null, r[0]), this.shapeBoundingBox.top = be.apply(null, r[1]), this.shapeBoundingBox.right = De.apply(null, r[0]), this.shapeBoundingBox.bottom = De.apply(null, r[1]);
    }, pt.prototype.calculateF = function(t, e, i, s, r, n) {
      return ct(1 - t, 3) * e[n] + 3 * ct(1 - t, 2) * t * i[n] + 3 * (1 - t) * ct(t, 2) * s[n] + ct(t, 3) * r[n];
    }, pt.prototype.calculateBoundingBox = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e);
    }, pt.prototype.expandStrokeBoundingBox = function(t, e) {
      var i = 0;
      if (t.keyframes) {
        for (var s = 0; s < t.keyframes.length; s += 1) {
          var r = t.keyframes[s].s;
          r > i && (i = r);
        }
        i *= t.mult;
      } else i = t.v * t.mult;
      e.x -= i, e.xMax += i, e.y -= i, e.yMax += i;
    }, pt.prototype.currentBoxContains = function(t) {
      return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
    }, pt.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var t = this.tempBoundingBox, e = 999999;
        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
        var i = false;
        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = true), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = true), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
          this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var s = this.shapeCont.style, r = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          s.transform = r, s.webkitTransform = r;
        }
      }
    };
    function Be(t, e, i) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = false, this.initElement(t, e, i);
    }
    H([_t, Ft, Vt, At, wt, ne, St], Be), Be.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var t = O("g");
        this.maskedElement.appendChild(t), this.innerElem = t;
      } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, Be.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = $(t.l ? t.l.length : 0);
      var e = this.innerElem.style, i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
      e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var s = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars) if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
      else {
        e.fontFamily = s.fFamily;
        var r = t.fWeight, n = t.fStyle;
        e.fontStyle = n, e.fontWeight = r;
      }
      var a, u, h = t.l;
      u = h.length;
      var d, g, E, l = this.mHelper, _, k = "", w = 0;
      for (a = 0; a < u; a += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[w] ? d = this.textPaths[w] : (d = O("path"), d.setAttribute("stroke-linecap", _i[1]), d.setAttribute("stroke-linejoin", wi[2]), d.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[w] ? (g = this.textSpans[w], E = g.children[0]) : (g = at("div"), g.style.lineHeight = 0, E = O("svg"), E.appendChild(d), Gt(g)))) : this.isMasked ? d = this.textPaths[w] ? this.textPaths[w] : O("text") : this.textSpans[w] ? (g = this.textSpans[w], d = this.textPaths[w]) : (g = at("span"), Gt(g), d = at("span"), Gt(d), g.appendChild(d)), this.globalData.fontManager.chars) {
          var C = this.globalData.fontManager.getCharData(t.finalText[a], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), y;
          if (C ? y = C.data : y = null, l.reset(), y && y.shapes && y.shapes.length && (_ = y.shapes[0].it, l.scale(t.finalSize / 100, t.finalSize / 100), k = this.createPathShape(l, _), d.setAttribute("d", k)), this.isMasked) this.innerElem.appendChild(d);
          else {
            if (this.innerElem.appendChild(g), y && y.shapes) {
              document.body.appendChild(E);
              var v = E.getBBox();
              E.setAttribute("width", v.width + 2), E.setAttribute("height", v.height + 2), E.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
              var p = E.style, c = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
              p.transform = c, p.webkitTransform = c, h[a].yOffset = v.y - 1;
            } else E.setAttribute("width", 1), E.setAttribute("height", 1);
            g.appendChild(E);
          }
        } else if (d.textContent = h[a].val, d.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(d);
        else {
          this.innerElem.appendChild(g);
          var b = d.style, P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
          b.transform = P, b.webkitTransform = P;
        }
        this.isMasked ? this.textSpans[w] = d : this.textSpans[w] = g, this.textSpans[w].style.display = "block", this.textPaths[w] = d, w += 1;
      }
      for (; w < this.textSpans.length; ) this.textSpans[w].style.display = "none", w += 1;
    }, Be.prototype.renderInnerContent = function() {
      this.validateText();
      var t;
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
          var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          t.transform = e, t.webkitTransform = e;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
        var i, s, r = 0, n = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l;
        s = a.length;
        var u, h, d;
        for (i = 0; i < s; i += 1) a[i].n ? r += 1 : (h = this.textSpans[i], d = this.textPaths[i], u = n[r], r += 1, u._mdf.m && (this.isMasked ? h.setAttribute("transform", u.m) : (h.style.webkitTransform = u.m, h.style.transform = u.m)), h.style.opacity = u.o, u.sw && u._mdf.sw && d.setAttribute("stroke-width", u.sw), u.sc && u._mdf.sc && d.setAttribute("stroke", u.sc), u.fc && u._mdf.fc && (d.setAttribute("fill", u.fc), d.style.color = u.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var g = this.innerElem.getBBox();
          this.currentBBox.w !== g.width && (this.currentBBox.w = g.width, this.svgElement.setAttribute("width", g.width)), this.currentBBox.h !== g.height && (this.currentBBox.h = g.height, this.svgElement.setAttribute("height", g.height));
          var E = 1;
          if (this.currentBBox.w !== g.width + E * 2 || this.currentBBox.h !== g.height + E * 2 || this.currentBBox.x !== g.x - E || this.currentBBox.y !== g.y - E) {
            this.currentBBox.w = g.width + E * 2, this.currentBBox.h = g.height + E * 2, this.currentBBox.x = g.x - E, this.currentBBox.y = g.y - E, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
            var l = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            t.transform = l, t.webkitTransform = l;
          }
        }
      }
    };
    function Ot(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
      var s = V.getProp;
      if (this.pe = s(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = s(this, t.ks.p.x, 1, 0, this), this.py = s(this, t.ks.p.y, 1, 0, this), this.pz = s(this, t.ks.p.z, 1, 0, this)) : this.p = s(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = s(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var r, n = t.ks.or.k.length;
        for (r = 0; r < n; r += 1) t.ks.or.k[r].to = null, t.ks.or.k[r].ti = null;
      }
      this.or = s(this, t.ks.or, 1, U, this), this.or.sh = true, this.rx = s(this, t.ks.rx, 0, U, this), this.ry = s(this, t.ks.ry, 0, U, this), this.rz = s(this, t.ks.rz, 0, U, this), this.mat = new st(), this._prevMat = new st(), this._isFirstFrame = true, this.finalTransform = { mProp: this };
    }
    H([_t, wt, At], Ot), Ot.prototype.setup = function() {
      var t, e = this.comp.threeDElements.length, i, s, r;
      for (t = 0; t < e; t += 1) if (i = this.comp.threeDElements[t], i.type === "3d") {
        s = i.perspectiveElem.style, r = i.container.style;
        var n = this.pe.v + "px", a = "0px 0px 0px", u = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        s.perspective = n, s.webkitPerspective = n, r.transformOrigin = a, r.mozTransformOrigin = a, r.webkitTransformOrigin = a, s.transform = u, s.webkitTransform = u;
      }
    }, Ot.prototype.createElements = function() {
    }, Ot.prototype.hide = function() {
    }, Ot.prototype.renderFrame = function() {
      var t = this._isFirstFrame, e, i;
      if (this.hierarchy) for (i = this.hierarchy.length, e = 0; e < i; e += 1) t = this.hierarchy[e].finalTransform.mProp._mdf || t;
      if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy) for (i = this.hierarchy.length - 1, e = i; e >= 0; e -= 1) {
          var s = this.hierarchy[e].finalTransform.mProp;
          this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]), this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]), this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v), this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]), this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
        }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var r;
          this.p ? r = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : r = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var n = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)), a = [r[0] / n, r[1] / n, r[2] / n], u = Math.sqrt(a[2] * a[2] + a[0] * a[0]), h = Math.atan2(a[1], u), d = Math.atan2(a[0], -a[2]);
          this.mat.rotateY(d).rotateX(-h);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var g = !this._prevMat.equals(this.mat);
        if ((g || this.pe._mdf) && this.comp.threeDElements) {
          i = this.comp.threeDElements.length;
          var E, l, _;
          for (e = 0; e < i; e += 1) if (E = this.comp.threeDElements[e], E.type === "3d") {
            if (g) {
              var k = this.mat.toCSS();
              _ = E.container.style, _.transform = k, _.webkitTransform = k;
            }
            this.pe._mdf && (l = E.perspectiveElem.style, l.perspective = this.pe.v + "px", l.webkitPerspective = this.pe.v + "px");
          }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = false;
    }, Ot.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, Ot.prototype.destroy = function() {
    }, Ot.prototype.getBaseElement = function() {
      return null;
    };
    function Ei(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i);
    }
    H([_t, Ft, Vt, Ve, At, wt, de], Ei), Ei.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
      this.data.hasMask ? (this.imageElem = O("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    };
    function J(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && e.hideOnTransparent === false), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
    }
    H([rt], J), J.prototype.buildItem = Le.prototype.buildItem, J.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        t.checkParenting();
      }
    }, J.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        var s = this.layers[e];
        if (!s.ddd || !this.supports3d) if (this.threeDElements) this.addTo3dContainer(i, e);
        else {
          for (var r = 0, n, a, u; r < e; ) this.elements[r] && this.elements[r] !== true && this.elements[r].getBaseElement && (a = this.elements[r], u = this.layers[r].ddd ? this.getThreeDContainerByPos(r) : a.getBaseElement(), n = u || n), r += 1;
          n ? (!s.ddd || !this.supports3d) && this.layerElement.insertBefore(i, n) : (!s.ddd || !this.supports3d) && this.layerElement.appendChild(i);
        }
        else this.addTo3dContainer(i, e);
      }
    }, J.prototype.createShape = function(t) {
      return this.supports3d ? new pt(t, this.globalData, this) : new Q(t, this.globalData, this);
    }, J.prototype.createText = function(t) {
      return this.supports3d ? new Be(t, this.globalData, this) : new It(t, this.globalData, this);
    }, J.prototype.createCamera = function(t) {
      return this.camera = new Ot(t, this.globalData, this), this.camera;
    }, J.prototype.createImage = function(t) {
      return this.supports3d ? new Ei(t, this.globalData, this) : new me(t, this.globalData, this);
    }, J.prototype.createSolid = function(t) {
      return this.supports3d ? new Ve(t, this.globalData, this) : new ei(t, this.globalData, this);
    }, J.prototype.createNull = Le.prototype.createNull, J.prototype.getThreeDContainerByPos = function(t) {
      for (var e = 0, i = this.threeDElements.length; e < i; ) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
        e += 1;
      }
      return null;
    }, J.prototype.createThreeDContainer = function(t, e) {
      var i = at("div"), s, r;
      Gt(i);
      var n = at("div");
      if (Gt(n), e === "3d") {
        s = i.style, s.width = this.globalData.compSize.w + "px", s.height = this.globalData.compSize.h + "px";
        var a = "50% 50%";
        s.webkitTransformOrigin = a, s.mozTransformOrigin = a, s.transformOrigin = a, r = n.style;
        var u = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        r.transform = u, r.webkitTransform = u;
      }
      i.appendChild(n);
      var h = { container: n, perspectiveElem: i, startPos: t, endPos: t, type: e };
      return this.threeDElements.push(h), h;
    }, J.prototype.build3dContainers = function() {
      var t, e = this.layers.length, i, s = "";
      for (t = 0; t < e; t += 1) this.layers[t].ddd && this.layers[t].ty !== 3 ? (s !== "3d" && (s = "3d", i = this.createThreeDContainer(t, "3d")), i.endPos = Math.max(i.endPos, t)) : (s !== "2d" && (s = "2d", i = this.createThreeDContainer(t, "2d")), i.endPos = Math.max(i.endPos, t));
      for (e = this.threeDElements.length, t = e - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
    }, J.prototype.addTo3dContainer = function(t, e) {
      for (var i = 0, s = this.threeDElements.length; i < s; ) {
        if (e <= this.threeDElements[i].endPos) {
          for (var r = this.threeDElements[i].startPos, n; r < e; ) this.elements[r] && this.elements[r].getBaseElement && (n = this.elements[r].getBaseElement()), r += 1;
          n ? this.threeDElements[i].container.insertBefore(t, n) : this.threeDElements[i].container.appendChild(t);
          break;
        }
        i += 1;
      }
    }, J.prototype.configAnimation = function(t) {
      var e = at("div"), i = this.animationItem.wrapper, s = e.style;
      s.width = t.w + "px", s.height = t.h + "px", this.resizerElem = e, Gt(e), s.transformStyle = "flat", s.mozTransformStyle = "flat", s.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), s.overflow = "hidden";
      var r = O("svg");
      r.setAttribute("width", "1"), r.setAttribute("height", "1"), Gt(r), this.resizerElem.appendChild(r);
      var n = O("defs");
      r.appendChild(n), this.data = t, this.setupGlobalData(t, r), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, J.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, J.prototype.updateContainerSize = function() {
      var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, i = t / e, s = this.globalData.compSize.w / this.globalData.compSize.h, r, n, a, u;
      s > i ? (r = t / this.globalData.compSize.w, n = t / this.globalData.compSize.w, a = 0, u = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (r = e / this.globalData.compSize.h, n = e / this.globalData.compSize.h, a = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, u = 0);
      var h = this.resizerElem.style;
      h.webkitTransform = "matrix3d(" + r + ",0,0,0,0," + n + ",0,0,0,0,1,0," + a + "," + u + ",0,1)", h.transform = h.webkitTransform;
    }, J.prototype.renderFrame = Le.prototype.renderFrame, J.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, J.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, J.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera) this.camera.setup();
      else {
        var t = this.globalData.compSize.w, e = this.globalData.compSize.h, i, s = this.threeDElements.length;
        for (i = 0; i < s; i += 1) {
          var r = this.threeDElements[i].perspectiveElem.style;
          r.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", r.perspective = r.webkitPerspective;
        }
      }
    }, J.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length, s = at("div");
      for (e = 0; e < i; e += 1) if (t[e].xt) {
        var r = this.createComp(t[e], s, this.globalData.comp, null);
        r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
      }
    };
    function Ut(t, e, i) {
      this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? $(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? V.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    H([J, Lt, Vt], Ut), Ut.prototype._createBaseContainerElements = Ut.prototype.createContainerElements, Ut.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, Ut.prototype.addTo3dContainer = function(t, e) {
      for (var i = 0, s; i < e; ) this.elements[i] && this.elements[i].getBaseElement && (s = this.elements[i].getBaseElement()), i += 1;
      s ? this.layerElement.insertBefore(t, s) : this.layerElement.appendChild(t);
    }, Ut.prototype.createComp = function(t) {
      return this.supports3d ? new Ut(t, this.globalData, this) : new he(t, this.globalData, this);
    };
    function Ai(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && e.hideOnTransparent === false), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" }, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
    }
    return H([J], Ai), Ai.prototype.createComp = function(t) {
      return this.supports3d ? new Ut(t, this.globalData, this) : new he(t, this.globalData, this);
    }, qs("html", Ai), Ht.registerModifier("tm", Et), Ht.registerModifier("pb", Ee), Ht.registerModifier("rp", Tt), Ht.registerModifier("rd", Ae), Ht.registerModifier("zz", xe), Ht.registerModifier("op", Me), Z;
  });
});
var lottie_light_htmlSLCECTRT = Lr();
export {
  lottie_light_htmlSLCECTRT as default
};
/*! Bundled license information:

@dotlottie/common/dist/lottie_light_html-SLCECTRT.js:
  (*! Bundled license information:
  
  lottie-web/build/player/lottie_light_html.js:
    (*!
     Transformation Matrix v2.0
     (c) Epistemex 2014-2015
     www.epistemex.com
     By Ken Fyrstenberg
     Contributions by leeoniya.
     License: MIT, header required.
     *)
  *)
*/
//# sourceMappingURL=lottie_light_html-SLCECTRT-MSMQKYD7.js.map
