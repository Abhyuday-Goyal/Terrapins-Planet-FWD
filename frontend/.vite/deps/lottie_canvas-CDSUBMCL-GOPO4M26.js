import {
  m
} from "./chunk-USPGI4ZR.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/lottie_canvas-CDSUBMCL.js
var mt = m((exports, module) => {
  typeof navigator < "u" && function(t, e) {
    typeof exports == "object" && typeof module < "u" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self, t.lottie = e());
  }(exports, function() {
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = false, initialDefaultFrame = -999999, setWebWorker = function(e) {
      _useWebWorker = !!e;
    }, getWebWorker = function() {
      return _useWebWorker;
    }, setLocationHref = function(e) {
      locationHref = e;
    }, getLocationHref = function() {
      return locationHref;
    };
    function createTag(t) {
      return document.createElement(t);
    }
    function extendPrototype(t, e) {
      var r, i = t.length, s;
      for (r = 0; r < i; r += 1) {
        s = t[r].prototype;
        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e.prototype[n] = s[n]);
      }
    }
    function getDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e);
    }
    function createProxyFunction(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var audioControllerFactory = function() {
      function t(e) {
        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = false;
      }
      return t.prototype = { addAudio: function(r) {
        this.audios.push(r);
      }, pause: function() {
        var r, i = this.audios.length;
        for (r = 0; r < i; r += 1) this.audios[r].pause();
      }, resume: function() {
        var r, i = this.audios.length;
        for (r = 0; r < i; r += 1) this.audios[r].resume();
      }, setRate: function(r) {
        var i, s = this.audios.length;
        for (i = 0; i < s; i += 1) this.audios[i].setRate(r);
      }, createAudio: function(r) {
        return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({ src: [r] }) : { isPlaying: false, play: function() {
          this.isPlaying = true;
        }, seek: function() {
          this.isPlaying = false;
        }, playing: function() {
        }, rate: function() {
        }, setVolume: function() {
        } };
      }, setAudioFactory: function(r) {
        this.audioFactory = r;
      }, setVolume: function(r) {
        this._volume = r, this._updateVolume();
      }, mute: function() {
        this._isMuted = true, this._updateVolume();
      }, unmute: function() {
        this._isMuted = false, this._updateVolume();
      }, getVolume: function() {
        return this._volume;
      }, _updateVolume: function() {
        var r, i = this.audios.length;
        for (r = 0; r < i; r += 1) this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1));
      } }, function() {
        return new t();
      };
    }(), createTypedArray = /* @__PURE__ */ function() {
      function t(r, i) {
        var s = 0, n = [], a;
        switch (r) {
          case "int16":
          case "uint8c":
            a = 1;
            break;
          default:
            a = 1.1;
            break;
        }
        for (s = 0; s < i; s += 1) n.push(a);
        return n;
      }
      function e(r, i) {
        return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : t(r, i);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
    }();
    function createSizedArray(t) {
      return Array.apply(null, { length: t });
    }
    function _typeof$6(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(r) {
        return typeof r;
      } : _typeof$6 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$6(t);
    }
    var subframeEnabled = true, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMin = Math.min, BMMath = {};
    (function() {
      var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], e, r = t.length;
      for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]];
    })();
    BMMath.random = Math.random, BMMath.abs = function(t) {
      var e = _typeof$6(t);
      if (e === "object" && t.length) {
        var r = createSizedArray(t.length), i, s = t.length;
        for (i = 0; i < s; i += 1) r[i] = Math.abs(t[i]);
        return r;
      }
      return Math.abs(t);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function BMEnterFrameEvent(t, e, r, i) {
      this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
    }
    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(t, e, r, i) {
      this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(t, e, r) {
      this.type = t, this.firstFrame = e, this.totalFrames = r;
    }
    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e;
    }
    function BMRenderFrameErrorEvent(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function BMConfigErrorEvent(t) {
      this.type = "configError", this.nativeError = t;
    }
    var createElementID = /* @__PURE__ */ function() {
      var t = 0;
      return function() {
        return t += 1, idPrefix$1 + "__lottie_element_" + t;
      };
    }();
    function HSVtoRGB(t, e, r) {
      var i, s, n, a, l, o, u, g;
      switch (a = Math.floor(t * 6), l = t * 6 - a, o = r * (1 - e), u = r * (1 - l * e), g = r * (1 - (1 - l) * e), a % 6) {
        case 0:
          i = r, s = g, n = o;
          break;
        case 1:
          i = u, s = r, n = o;
          break;
        case 2:
          i = o, s = r, n = g;
          break;
        case 3:
          i = o, s = u, n = r;
          break;
        case 4:
          i = g, s = o, n = r;
          break;
        case 5:
          i = r, s = o, n = u;
          break;
      }
      return [i, s, n];
    }
    function RGBtoHSV(t, e, r) {
      var i = Math.max(t, e, r), s = Math.min(t, e, r), n = i - s, a, l = i === 0 ? 0 : n / i, o = i / 255;
      switch (i) {
        case s:
          a = 0;
          break;
        case t:
          a = e - r + n * (e < r ? 6 : 0), a /= 6 * n;
          break;
        case e:
          a = r - t + n * 2, a /= 6 * n;
          break;
        case r:
          a = t - e + n * 4, a /= 6 * n;
          break;
      }
      return [a, l, o];
    }
    function addSaturationToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addBrightnessToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addHueToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
    }
    (function() {
      var t = [], e, r;
      for (e = 0; e < 256; e += 1) r = e.toString(16), t[e] = r.length === 1 ? "0" + r : r;
      return function(i, s, n) {
        return i < 0 && (i = 0), s < 0 && (s = 0), n < 0 && (n = 0), "#" + t[i] + t[s] + t[n];
      };
    })();
    var setSubframeEnabled = function(e) {
      subframeEnabled = !!e;
    }, getSubframeEnabled = function() {
      return subframeEnabled;
    }, setExpressionsPlugin = function(e) {
      expressionsPlugin = e;
    }, getExpressionsPlugin = function() {
      return expressionsPlugin;
    }, setExpressionInterfaces = function(e) {
      expressionsInterfaces = e;
    }, getExpressionInterfaces = function() {
      return expressionsInterfaces;
    }, setDefaultCurveSegments = function(e) {
      defaultCurveSegments = e;
    }, getDefaultCurveSegments = function() {
      return defaultCurveSegments;
    }, setIdPrefix = function(e) {
      idPrefix$1 = e;
    };
    function createNS(t) {
      return document.createElementNS(svgNS, t);
    }
    function _typeof$5(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(r) {
        return typeof r;
      } : _typeof$5 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$5(t);
    }
    var dataManager = /* @__PURE__ */ function() {
      var t = 1, e = [], r, i, s = { onmessage: function() {
      }, postMessage: function(P) {
        r({ data: P });
      } }, n = { postMessage: function(P) {
        s.onmessage({ data: P });
      } };
      function a(p) {
        if (window.Worker && window.Blob && getWebWorker()) {
          var P = new Blob(["var _workerSelf = self; self.onmessage = ", p.toString()], { type: "text/javascript" }), y = URL.createObjectURL(P);
          return new Worker(y);
        }
        return r = p, s;
      }
      function l() {
        i || (i = a(function(P) {
          function y() {
            function _(w, x) {
              var A, v, b = w.length, M, I, R, z;
              for (v = 0; v < b; v += 1) if (A = w[v], "ks" in A && !A.completed) {
                if (A.completed = true, A.hasMask) {
                  var N = A.masksProperties;
                  for (I = N.length, M = 0; M < I; M += 1) if (N[M].pt.k.i) S(N[M].pt.k);
                  else for (z = N[M].pt.k.length, R = 0; R < z; R += 1) N[M].pt.k[R].s && S(N[M].pt.k[R].s[0]), N[M].pt.k[R].e && S(N[M].pt.k[R].e[0]);
                }
                A.ty === 0 ? (A.layers = h(A.refId, x), _(A.layers, x)) : A.ty === 4 ? m2(A.shapes) : A.ty === 5 && D(A);
              }
            }
            function f(w, x) {
              if (w) {
                var A = 0, v = w.length;
                for (A = 0; A < v; A += 1) w[A].t === 1 && (w[A].data.layers = h(w[A].data.refId, x), _(w[A].data.layers, x));
              }
            }
            function c(w, x) {
              for (var A = 0, v = x.length; A < v; ) {
                if (x[A].id === w) return x[A];
                A += 1;
              }
              return null;
            }
            function h(w, x) {
              var A = c(w, x);
              return A ? A.layers.__used ? JSON.parse(JSON.stringify(A.layers)) : (A.layers.__used = true, A.layers) : null;
            }
            function m2(w) {
              var x, A = w.length, v, b;
              for (x = A - 1; x >= 0; x -= 1) if (w[x].ty === "sh") if (w[x].ks.k.i) S(w[x].ks.k);
              else for (b = w[x].ks.k.length, v = 0; v < b; v += 1) w[x].ks.k[v].s && S(w[x].ks.k[v].s[0]), w[x].ks.k[v].e && S(w[x].ks.k[v].e[0]);
              else w[x].ty === "gr" && m2(w[x].it);
            }
            function S(w) {
              var x, A = w.i.length;
              for (x = 0; x < A; x += 1) w.i[x][0] += w.v[x][0], w.i[x][1] += w.v[x][1], w.o[x][0] += w.v[x][0], w.o[x][1] += w.v[x][1];
            }
            function E(w, x) {
              var A = x ? x.split(".") : [100, 100, 100];
              return w[0] > A[0] ? true : A[0] > w[0] ? false : w[1] > A[1] ? true : A[1] > w[1] ? false : w[2] > A[2] ? true : A[2] > w[2] ? false : null;
            }
            var T = /* @__PURE__ */ function() {
              var w = [4, 4, 14];
              function x(v) {
                var b = v.t.d;
                v.t.d = { k: [{ s: b, t: 0 }] };
              }
              function A(v) {
                var b, M = v.length;
                for (b = 0; b < M; b += 1) v[b].ty === 5 && x(v[b]);
              }
              return function(v) {
                if (E(w, v.v) && (A(v.layers), v.assets)) {
                  var b, M = v.assets.length;
                  for (b = 0; b < M; b += 1) v.assets[b].layers && A(v.assets[b].layers);
                }
              };
            }(), k = /* @__PURE__ */ function() {
              var w = [4, 7, 99];
              return function(x) {
                if (x.chars && !E(w, x.v)) {
                  var A, v = x.chars.length;
                  for (A = 0; A < v; A += 1) {
                    var b = x.chars[A];
                    b.data && b.data.shapes && (m2(b.data.shapes), b.data.ip = 0, b.data.op = 99999, b.data.st = 0, b.data.sr = 1, b.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, x.chars[A].t || (b.data.shapes.push({ ty: "no" }), b.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                  }
                }
              };
            }(), F = /* @__PURE__ */ function() {
              var w = [5, 7, 15];
              function x(v) {
                var b = v.t.p;
                typeof b.a == "number" && (b.a = { a: 0, k: b.a }), typeof b.p == "number" && (b.p = { a: 0, k: b.p }), typeof b.r == "number" && (b.r = { a: 0, k: b.r });
              }
              function A(v) {
                var b, M = v.length;
                for (b = 0; b < M; b += 1) v[b].ty === 5 && x(v[b]);
              }
              return function(v) {
                if (E(w, v.v) && (A(v.layers), v.assets)) {
                  var b, M = v.assets.length;
                  for (b = 0; b < M; b += 1) v.assets[b].layers && A(v.assets[b].layers);
                }
              };
            }(), O = /* @__PURE__ */ function() {
              var w = [4, 1, 9];
              function x(v) {
                var b, M = v.length, I, R;
                for (b = 0; b < M; b += 1) if (v[b].ty === "gr") x(v[b].it);
                else if (v[b].ty === "fl" || v[b].ty === "st") if (v[b].c.k && v[b].c.k[0].i) for (R = v[b].c.k.length, I = 0; I < R; I += 1) v[b].c.k[I].s && (v[b].c.k[I].s[0] /= 255, v[b].c.k[I].s[1] /= 255, v[b].c.k[I].s[2] /= 255, v[b].c.k[I].s[3] /= 255), v[b].c.k[I].e && (v[b].c.k[I].e[0] /= 255, v[b].c.k[I].e[1] /= 255, v[b].c.k[I].e[2] /= 255, v[b].c.k[I].e[3] /= 255);
                else v[b].c.k[0] /= 255, v[b].c.k[1] /= 255, v[b].c.k[2] /= 255, v[b].c.k[3] /= 255;
              }
              function A(v) {
                var b, M = v.length;
                for (b = 0; b < M; b += 1) v[b].ty === 4 && x(v[b].shapes);
              }
              return function(v) {
                if (E(w, v.v) && (A(v.layers), v.assets)) {
                  var b, M = v.assets.length;
                  for (b = 0; b < M; b += 1) v.assets[b].layers && A(v.assets[b].layers);
                }
              };
            }(), V = /* @__PURE__ */ function() {
              var w = [4, 4, 18];
              function x(v) {
                var b, M = v.length, I, R;
                for (b = M - 1; b >= 0; b -= 1) if (v[b].ty === "sh") if (v[b].ks.k.i) v[b].ks.k.c = v[b].closed;
                else for (R = v[b].ks.k.length, I = 0; I < R; I += 1) v[b].ks.k[I].s && (v[b].ks.k[I].s[0].c = v[b].closed), v[b].ks.k[I].e && (v[b].ks.k[I].e[0].c = v[b].closed);
                else v[b].ty === "gr" && x(v[b].it);
              }
              function A(v) {
                var b, M, I = v.length, R, z, N, W;
                for (M = 0; M < I; M += 1) {
                  if (b = v[M], b.hasMask) {
                    var j = b.masksProperties;
                    for (z = j.length, R = 0; R < z; R += 1) if (j[R].pt.k.i) j[R].pt.k.c = j[R].cl;
                    else for (W = j[R].pt.k.length, N = 0; N < W; N += 1) j[R].pt.k[N].s && (j[R].pt.k[N].s[0].c = j[R].cl), j[R].pt.k[N].e && (j[R].pt.k[N].e[0].c = j[R].cl);
                  }
                  b.ty === 4 && x(b.shapes);
                }
              }
              return function(v) {
                if (E(w, v.v) && (A(v.layers), v.assets)) {
                  var b, M = v.assets.length;
                  for (b = 0; b < M; b += 1) v.assets[b].layers && A(v.assets[b].layers);
                }
              };
            }();
            function L(w) {
              w.__complete || (O(w), T(w), k(w), F(w), V(w), _(w.layers, w.assets), f(w.chars, w.assets), w.__complete = true);
            }
            function D(w) {
              w.t.a.length === 0 && "m" in w.t.p;
            }
            var B = {};
            return B.completeData = L, B.checkColors = O, B.checkChars = k, B.checkPathProperties = F, B.checkShapes = V, B.completeLayers = _, B;
          }
          if (n.dataManager || (n.dataManager = y()), n.assetLoader || (n.assetLoader = /* @__PURE__ */ function() {
            function _(c) {
              var h = c.getResponseHeader("content-type");
              return h && c.responseType === "json" && h.indexOf("json") !== -1 || c.response && _typeof$5(c.response) === "object" ? c.response : c.response && typeof c.response == "string" ? JSON.parse(c.response) : c.responseText ? JSON.parse(c.responseText) : null;
            }
            function f(c, h, m2, S) {
              var E, T = new XMLHttpRequest();
              try {
                T.responseType = "json";
              } catch {
              }
              T.onreadystatechange = function() {
                if (T.readyState === 4) if (T.status === 200) E = _(T), m2(E);
                else try {
                  E = _(T), m2(E);
                } catch (k) {
                  S && S(k);
                }
              };
              try {
                T.open(["G", "E", "T"].join(""), c, true);
              } catch {
                T.open(["G", "E", "T"].join(""), h + "/" + c, true);
              }
              T.send();
            }
            return { load: f };
          }()), P.data.type === "loadAnimation") n.assetLoader.load(P.data.path, P.data.fullPath, function(_) {
            n.dataManager.completeData(_), n.postMessage({ id: P.data.id, payload: _, status: "success" });
          }, function() {
            n.postMessage({ id: P.data.id, status: "error" });
          });
          else if (P.data.type === "complete") {
            var d = P.data.animation;
            n.dataManager.completeData(d), n.postMessage({ id: P.data.id, payload: d, status: "success" });
          } else P.data.type === "loadData" && n.assetLoader.load(P.data.path, P.data.fullPath, function(_) {
            n.postMessage({ id: P.data.id, payload: _, status: "success" });
          }, function() {
            n.postMessage({ id: P.data.id, status: "error" });
          });
        }), i.onmessage = function(p) {
          var P = p.data, y = P.id, d = e[y];
          e[y] = null, P.status === "success" ? d.onComplete(P.payload) : d.onError && d.onError();
        });
      }
      function o(p, P) {
        t += 1;
        var y = "processId_" + t;
        return e[y] = { onComplete: p, onError: P }, y;
      }
      function u(p, P, y) {
        l();
        var d = o(P, y);
        i.postMessage({ type: "loadAnimation", path: p, fullPath: window.location.origin + window.location.pathname, id: d });
      }
      function g(p, P, y) {
        l();
        var d = o(P, y);
        i.postMessage({ type: "loadData", path: p, fullPath: window.location.origin + window.location.pathname, id: d });
      }
      function C(p, P, y) {
        l();
        var d = o(P, y);
        i.postMessage({ type: "complete", animation: p, id: d });
      }
      return { loadAnimation: u, loadData: g, completeAnimation: C };
    }(), ImagePreloader = function() {
      var t = function() {
        var f = createTag("canvas");
        f.width = 1, f.height = 1;
        var c = f.getContext("2d");
        return c.fillStyle = "rgba(0,0,0,0)", c.fillRect(0, 0, 1, 1), f;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i(f, c, h) {
        var m2 = "";
        if (f.e) m2 = f.p;
        else if (c) {
          var S = f.p;
          S.indexOf("images/") !== -1 && (S = S.split("/")[1]), m2 = c + S;
        } else m2 = h, m2 += f.u ? f.u : "", m2 += f.p;
        return m2;
      }
      function s(f) {
        var c = 0, h = setInterval((function() {
          var m2 = f.getBBox();
          (m2.width || c > 500) && (this._imageLoaded(), clearInterval(h)), c += 1;
        }).bind(this), 50);
      }
      function n(f) {
        var c = i(f, this.assetsPath, this.path), h = createNS("image");
        isSafari ? this.testImageLoaded(h) : h.addEventListener("load", this._imageLoaded, false), h.addEventListener("error", (function() {
          m2.img = t, this._imageLoaded();
        }).bind(this), false), h.setAttributeNS("http://www.w3.org/1999/xlink", "href", c), this._elementHelper.append ? this._elementHelper.append(h) : this._elementHelper.appendChild(h);
        var m2 = { img: h, assetData: f };
        return m2;
      }
      function a(f) {
        var c = i(f, this.assetsPath, this.path), h = createTag("img");
        h.crossOrigin = "anonymous", h.addEventListener("load", this._imageLoaded, false), h.addEventListener("error", (function() {
          m2.img = t, this._imageLoaded();
        }).bind(this), false), h.src = c;
        var m2 = { img: h, assetData: f };
        return m2;
      }
      function l(f) {
        var c = { assetData: f }, h = i(f, this.assetsPath, this.path);
        return dataManager.loadData(h, (function(m2) {
          c.img = m2, this._footageLoaded();
        }).bind(this), (function() {
          c.img = {}, this._footageLoaded();
        }).bind(this)), c;
      }
      function o(f, c) {
        this.imagesLoadedCb = c;
        var h, m2 = f.length;
        for (h = 0; h < m2; h += 1) f[h].layers || (!f[h].t || f[h].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(f[h]))) : f[h].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(f[h]))));
      }
      function u(f) {
        this.path = f || "";
      }
      function g(f) {
        this.assetsPath = f || "";
      }
      function C(f) {
        for (var c = 0, h = this.images.length; c < h; ) {
          if (this.images[c].assetData === f) return this.images[c].img;
          c += 1;
        }
        return null;
      }
      function p() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function P() {
        return this.totalImages === this.loadedAssets;
      }
      function y() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function d(f, c) {
        f === "svg" ? (this._elementHelper = c, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function _() {
        this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return _.prototype = { loadAssets: o, setAssetsPath: g, setPath: u, loadedImages: P, loadedFootages: y, destroy: p, getAsset: C, createImgData: a, createImageData: n, imageLoaded: e, footageLoaded: r, setCacheType: d }, _;
    }();
    function BaseEvent() {
    }
    BaseEvent.prototype = { triggerEvent: function(e, r) {
      if (this._cbs[e]) for (var i = this._cbs[e], s = 0; s < i.length; s += 1) i[s](r);
    }, addEventListener: function(e, r) {
      return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(r), (function() {
        this.removeEventListener(e, r);
      }).bind(this);
    }, removeEventListener: function(e, r) {
      if (!r) this._cbs[e] = null;
      else if (this._cbs[e]) {
        for (var i = 0, s = this._cbs[e].length; i < s; ) this._cbs[e][i] === r && (this._cbs[e].splice(i, 1), i -= 1, s -= 1), i += 1;
        this._cbs[e].length || (this._cbs[e] = null);
      }
    } };
    var markerParser = /* @__PURE__ */ function() {
      function t(e) {
        for (var r = e.split(`\r
`), i = {}, s, n = 0, a = 0; a < r.length; a += 1) s = r[a].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), n += 1);
        if (n === 0) throw new Error();
        return i;
      }
      return function(e) {
        for (var r = [], i = 0; i < e.length; i += 1) {
          var s = e[i], n = { time: s.tm, duration: s.dr };
          try {
            n.payload = JSON.parse(e[i].cm);
          } catch {
            try {
              n.payload = t(e[i].cm);
            } catch {
              n.payload = { name: e[i].cm };
            }
          }
          r.push(n);
        }
        return r;
      };
    }(), ProjectInterface = /* @__PURE__ */ function() {
      function t(e) {
        this.compositions.push(e);
      }
      return function() {
        function e(r) {
          for (var i = 0, s = this.compositions.length; i < s; ) {
            if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
            i += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    }(), renderers = {}, registerRenderer = function(e, r) {
      renderers[e] = r;
    };
    function getRenderer(t) {
      return renderers[t];
    }
    function getRegisteredRenderer() {
      if (renderers.canvas) return "canvas";
      for (var t in renderers) if (renderers[t]) return t;
      return "";
    }
    function _typeof$4(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(r) {
        return typeof r;
      } : _typeof$4 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$4(t);
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var r = getRenderer(e);
      this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === true ? this.loop = true : t.loop === false ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : true, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : true, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, AnimationItem.prototype.setupAnimation = function(t) {
      dataManager.completeAnimation(t, this.configAnimation);
    }, AnimationItem.prototype.setData = function(t, e) {
      e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
      var r = { wrapper: t, animationData: e }, i = t.attributes;
      r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
      var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
      s === "false" ? r.loop = false : s === "true" ? r.loop = true : s !== "" && (r.loop = parseInt(s, 10));
      var n = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : true;
      r.autoplay = n !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
      var a = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
      a === "false" && (r.prerender = false), r.path ? this.setParams(r) : this.trigger("destroy");
    }, AnimationItem.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e = this.animationData.layers, r, i = e.length, s = t.layers, n, a = s.length;
      for (n = 0; n < a; n += 1) for (r = 0; r < i; ) {
        if (e[r].id === s[n].id) {
          e[r] = s[n];
          break;
        }
        r += 1;
      }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (i = t.assets.length, r = 0; r < i; r += 1) this.animationData.assets.push(t.assets[r]);
      this.animationData.__complete = false, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    }, AnimationItem.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = getExpressionsPlugin();
      e && e.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || t.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      var t = this.animationData.segments;
      t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(t) {
      if (this.renderer) try {
        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
      } catch (e) {
        this.triggerConfigError(e);
      }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = true;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, AnimationItem.prototype.resize = function(t, e) {
      var r = typeof t == "number" ? t : void 0, i = typeof e == "number" ? e : void 0;
      this.renderer.updateContainerSize(r, i);
    }, AnimationItem.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, AnimationItem.prototype.renderFrame = function() {
      if (!(this.isLoaded === false || !this.renderer)) try {
        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
      } catch (t) {
        this.triggerRenderFrameError(t);
      }
    }, AnimationItem.prototype.play = function(t) {
      t && this.name !== t || this.isPaused === true && (this.isPaused = false, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = false, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(t) {
      t && this.name !== t || this.isPaused === false && (this.isPaused = true, this.trigger("_pause"), this._idle = true, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(t) {
      t && this.name !== t || (this.isPaused === true ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(t) {
      for (var e, r = 0; r < this.markers.length; r += 1) if (e = this.markers[r], e.payload && e.payload.name === t) return e;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
      if (!(r && this.name !== r)) {
        var i = Number(t);
        if (isNaN(i)) {
          var s = this.getMarkerData(t);
          s && this.goToAndStop(s.time, true);
        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
      if (!(r && this.name !== r)) {
        var i = Number(t);
        if (isNaN(i)) {
          var s = this.getMarkerData(t);
          s && (s.duration ? this.playSegments([s.time, s.time + s.duration], true) : this.goToAndStop(s.time, true));
        } else this.goToAndStop(i, e, r);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(t) {
      if (!(this.isPaused === true || this.isLoaded === false)) {
        var e = this.currentRawFrame + t * this.frameModifier, r = false;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = true, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== true) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true) : (r = true, e = 0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(t, e) {
      var r = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, true);
    }, AnimationItem.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
        var r, i = t.length;
        for (r = 0; r < i; r += 1) this.segments.push(t[r]);
      } else this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(t) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), true) : false;
    }, AnimationItem.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setLoop = function(t) {
      this.loop = t;
    }, AnimationItem.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e) e = t.p;
      else if (this.assetsPath) {
        var r = t.p;
        r.indexOf("images/") !== -1 && (r = r.split("/")[1]), e = this.assetsPath + r;
      } else e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, AnimationItem.prototype.getAssetData = function(t) {
      for (var e = 0, r = this.assets.length; e < r; ) {
        if (t === this.assets[e].id) return this.assets[e];
        e += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
      try {
        var i = this.renderer.getElementByPath(t);
        i.updateDocumentData(e, r);
      } catch {
      }
    }, AnimationItem.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t]) switch (t) {
        case "enterFrame":
          this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "drawnFrame":
          this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
          break;
        case "loopComplete":
          this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new BMDestroyEvent(t, this));
          break;
        default:
          this.triggerEvent(t);
      }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
      var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, AnimationItem.prototype.triggerConfigError = function(t) {
      var e = new BMConfigErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var animationManager = function() {
      var t = {}, e = [], r = 0, i = 0, s = 0, n = true, a = false;
      function l(x) {
        for (var A = 0, v = x.target; A < i; ) e[A].animation === v && (e.splice(A, 1), A -= 1, i -= 1, v.isPaused || C()), A += 1;
      }
      function o(x, A) {
        if (!x) return null;
        for (var v = 0; v < i; ) {
          if (e[v].elem === x && e[v].elem !== null) return e[v].animation;
          v += 1;
        }
        var b = new AnimationItem();
        return p(b, x), b.setData(x, A), b;
      }
      function u() {
        var x, A = e.length, v = [];
        for (x = 0; x < A; x += 1) v.push(e[x].animation);
        return v;
      }
      function g() {
        s += 1, O();
      }
      function C() {
        s -= 1;
      }
      function p(x, A) {
        x.addEventListener("destroy", l), x.addEventListener("_active", g), x.addEventListener("_idle", C), e.push({ elem: A, animation: x }), i += 1;
      }
      function P(x) {
        var A = new AnimationItem();
        return p(A, null), A.setParams(x), A;
      }
      function y(x, A) {
        var v;
        for (v = 0; v < i; v += 1) e[v].animation.setSpeed(x, A);
      }
      function d(x, A) {
        var v;
        for (v = 0; v < i; v += 1) e[v].animation.setDirection(x, A);
      }
      function _(x) {
        var A;
        for (A = 0; A < i; A += 1) e[A].animation.play(x);
      }
      function f(x) {
        var A = x - r, v;
        for (v = 0; v < i; v += 1) e[v].animation.advanceTime(A);
        r = x, s && !a ? window.requestAnimationFrame(f) : n = true;
      }
      function c(x) {
        r = x, window.requestAnimationFrame(f);
      }
      function h(x) {
        var A;
        for (A = 0; A < i; A += 1) e[A].animation.pause(x);
      }
      function m2(x, A, v) {
        var b;
        for (b = 0; b < i; b += 1) e[b].animation.goToAndStop(x, A, v);
      }
      function S(x) {
        var A;
        for (A = 0; A < i; A += 1) e[A].animation.stop(x);
      }
      function E(x) {
        var A;
        for (A = 0; A < i; A += 1) e[A].animation.togglePause(x);
      }
      function T(x) {
        var A;
        for (A = i - 1; A >= 0; A -= 1) e[A].animation.destroy(x);
      }
      function k(x, A, v) {
        var b = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), M, I = b.length;
        for (M = 0; M < I; M += 1) v && b[M].setAttribute("data-bm-type", v), o(b[M], x);
        if (A && I === 0) {
          v || (v = "svg");
          var R = document.getElementsByTagName("body")[0];
          R.innerText = "";
          var z = createTag("div");
          z.style.width = "100%", z.style.height = "100%", z.setAttribute("data-bm-type", v), R.appendChild(z), o(z, x);
        }
      }
      function F() {
        var x;
        for (x = 0; x < i; x += 1) e[x].animation.resize();
      }
      function O() {
        !a && s && n && (window.requestAnimationFrame(c), n = false);
      }
      function V() {
        a = true;
      }
      function L() {
        a = false, O();
      }
      function D(x, A) {
        var v;
        for (v = 0; v < i; v += 1) e[v].animation.setVolume(x, A);
      }
      function B(x) {
        var A;
        for (A = 0; A < i; A += 1) e[A].animation.mute(x);
      }
      function w(x) {
        var A;
        for (A = 0; A < i; A += 1) e[A].animation.unmute(x);
      }
      return t.registerAnimation = o, t.loadAnimation = P, t.setSpeed = y, t.setDirection = d, t.play = _, t.pause = h, t.stop = S, t.togglePause = E, t.searchAnimations = k, t.resize = F, t.goToAndStop = m2, t.destroy = T, t.freeze = V, t.unfreeze = L, t.setVolume = D, t.mute = B, t.unmute = w, t.getRegisteredAnimations = u, t;
    }(), BezierFactory = function() {
      var t = {};
      t.getBezierEasing = r;
      var e = {};
      function r(c, h, m2, S, E) {
        var T = E || ("bez_" + c + "_" + h + "_" + m2 + "_" + S).replace(/\./g, "p");
        if (e[T]) return e[T];
        var k = new f([c, h, m2, S]);
        return e[T] = k, k;
      }
      var i = 4, s = 1e-3, n = 1e-7, a = 10, l = 11, o = 1 / (l - 1), u = typeof Float32Array == "function";
      function g(c, h) {
        return 1 - 3 * h + 3 * c;
      }
      function C(c, h) {
        return 3 * h - 6 * c;
      }
      function p(c) {
        return 3 * c;
      }
      function P(c, h, m2) {
        return ((g(h, m2) * c + C(h, m2)) * c + p(h)) * c;
      }
      function y(c, h, m2) {
        return 3 * g(h, m2) * c * c + 2 * C(h, m2) * c + p(h);
      }
      function d(c, h, m2, S, E) {
        var T, k, F = 0;
        do
          k = h + (m2 - h) / 2, T = P(k, S, E) - c, T > 0 ? m2 = k : h = k;
        while (Math.abs(T) > n && ++F < a);
        return k;
      }
      function _(c, h, m2, S) {
        for (var E = 0; E < i; ++E) {
          var T = y(h, m2, S);
          if (T === 0) return h;
          var k = P(h, m2, S) - c;
          h -= k / T;
        }
        return h;
      }
      function f(c) {
        this._p = c, this._mSampleValues = u ? new Float32Array(l) : new Array(l), this._precomputed = false, this.get = this.get.bind(this);
      }
      return f.prototype = { get: function(h) {
        var m2 = this._p[0], S = this._p[1], E = this._p[2], T = this._p[3];
        return this._precomputed || this._precompute(), m2 === S && E === T ? h : h === 0 ? 0 : h === 1 ? 1 : P(this._getTForX(h), S, T);
      }, _precompute: function() {
        var h = this._p[0], m2 = this._p[1], S = this._p[2], E = this._p[3];
        this._precomputed = true, (h !== m2 || S !== E) && this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var h = this._p[0], m2 = this._p[2], S = 0; S < l; ++S) this._mSampleValues[S] = P(S * o, h, m2);
      }, _getTForX: function(h) {
        for (var m2 = this._p[0], S = this._p[2], E = this._mSampleValues, T = 0, k = 1, F = l - 1; k !== F && E[k] <= h; ++k) T += o;
        --k;
        var O = (h - E[k]) / (E[k + 1] - E[k]), V = T + O * o, L = y(V, m2, S);
        return L >= s ? _(h, V, m2, S) : L === 0 ? V : d(h, T, T + o, m2, S);
      } }, t;
    }(), pooling = /* @__PURE__ */ function() {
      function t(e) {
        return e.concat(createSizedArray(e.length));
      }
      return { double: t };
    }(), poolFactory = /* @__PURE__ */ function() {
      return function(t, e, r) {
        var i = 0, s = t, n = createSizedArray(s), a = { newElement: l, release: o };
        function l() {
          var u;
          return i ? (i -= 1, u = n[i]) : u = e(), u;
        }
        function o(u) {
          i === s && (n = pooling.double(n), s *= 2), r && r(u), n[i] = u, i += 1;
        }
        return a;
      };
    }(), bezierLengthPool = function() {
      function t() {
        return { addedLength: 0, percents: createTypedArray("float32", getDefaultCurveSegments()), lengths: createTypedArray("float32", getDefaultCurveSegments()) };
      }
      return poolFactory(8, t);
    }(), segmentsLengthPool = function() {
      function t() {
        return { lengths: [], totalLength: 0 };
      }
      function e(r) {
        var i, s = r.lengths.length;
        for (i = 0; i < s; i += 1) bezierLengthPool.release(r.lengths[i]);
        r.lengths.length = 0;
      }
      return poolFactory(8, t, e);
    }();
    function bezFunction() {
      var t = Math;
      function e(p, P, y, d, _, f) {
        var c = p * d + P * _ + y * f - _ * d - f * p - y * P;
        return c > -1e-3 && c < 1e-3;
      }
      function r(p, P, y, d, _, f, c, h, m2) {
        if (y === 0 && f === 0 && m2 === 0) return e(p, P, d, _, c, h);
        var S = t.sqrt(t.pow(d - p, 2) + t.pow(_ - P, 2) + t.pow(f - y, 2)), E = t.sqrt(t.pow(c - p, 2) + t.pow(h - P, 2) + t.pow(m2 - y, 2)), T = t.sqrt(t.pow(c - d, 2) + t.pow(h - _, 2) + t.pow(m2 - f, 2)), k;
        return S > E ? S > T ? k = S - E - T : k = T - E - S : T > E ? k = T - E - S : k = E - S - T, k > -1e-4 && k < 1e-4;
      }
      var i = /* @__PURE__ */ function() {
        return function(p, P, y, d) {
          var _ = getDefaultCurveSegments(), f, c, h, m2, S, E = 0, T, k = [], F = [], O = bezierLengthPool.newElement();
          for (h = y.length, f = 0; f < _; f += 1) {
            for (S = f / (_ - 1), T = 0, c = 0; c < h; c += 1) m2 = bmPow(1 - S, 3) * p[c] + 3 * bmPow(1 - S, 2) * S * y[c] + 3 * (1 - S) * bmPow(S, 2) * d[c] + bmPow(S, 3) * P[c], k[c] = m2, F[c] !== null && (T += bmPow(k[c] - F[c], 2)), F[c] = k[c];
            T && (T = bmSqrt(T), E += T), O.percents[f] = S, O.lengths[f] = E;
          }
          return O.addedLength = E, O;
        };
      }();
      function s(p) {
        var P = segmentsLengthPool.newElement(), y = p.c, d = p.v, _ = p.o, f = p.i, c, h = p._length, m2 = P.lengths, S = 0;
        for (c = 0; c < h - 1; c += 1) m2[c] = i(d[c], d[c + 1], _[c], f[c + 1]), S += m2[c].addedLength;
        return y && h && (m2[c] = i(d[c], d[0], _[c], f[0]), S += m2[c].addedLength), P.totalLength = S, P;
      }
      function n(p) {
        this.segmentLength = 0, this.points = new Array(p);
      }
      function a(p, P) {
        this.partialLength = p, this.point = P;
      }
      var l = /* @__PURE__ */ function() {
        var p = {};
        return function(P, y, d, _) {
          var f = (P[0] + "_" + P[1] + "_" + y[0] + "_" + y[1] + "_" + d[0] + "_" + d[1] + "_" + _[0] + "_" + _[1]).replace(/\./g, "p");
          if (!p[f]) {
            var c = getDefaultCurveSegments(), h, m2, S, E, T, k = 0, F, O, V = null;
            P.length === 2 && (P[0] !== y[0] || P[1] !== y[1]) && e(P[0], P[1], y[0], y[1], P[0] + d[0], P[1] + d[1]) && e(P[0], P[1], y[0], y[1], y[0] + _[0], y[1] + _[1]) && (c = 2);
            var L = new n(c);
            for (S = d.length, h = 0; h < c; h += 1) {
              for (O = createSizedArray(S), T = h / (c - 1), F = 0, m2 = 0; m2 < S; m2 += 1) E = bmPow(1 - T, 3) * P[m2] + 3 * bmPow(1 - T, 2) * T * (P[m2] + d[m2]) + 3 * (1 - T) * bmPow(T, 2) * (y[m2] + _[m2]) + bmPow(T, 3) * y[m2], O[m2] = E, V !== null && (F += bmPow(O[m2] - V[m2], 2));
              F = bmSqrt(F), k += F, L.points[h] = new a(F, O), V = O;
            }
            L.segmentLength = k, p[f] = L;
          }
          return p[f];
        };
      }();
      function o(p, P) {
        var y = P.percents, d = P.lengths, _ = y.length, f = bmFloor((_ - 1) * p), c = p * P.addedLength, h = 0;
        if (f === _ - 1 || f === 0 || c === d[f]) return y[f];
        for (var m2 = d[f] > c ? -1 : 1, S = true; S; ) if (d[f] <= c && d[f + 1] > c ? (h = (c - d[f]) / (d[f + 1] - d[f]), S = false) : f += m2, f < 0 || f >= _ - 1) {
          if (f === _ - 1) return y[f];
          S = false;
        }
        return y[f] + (y[f + 1] - y[f]) * h;
      }
      function u(p, P, y, d, _, f) {
        var c = o(_, f), h = 1 - c, m2 = t.round((h * h * h * p[0] + (c * h * h + h * c * h + h * h * c) * y[0] + (c * c * h + h * c * c + c * h * c) * d[0] + c * c * c * P[0]) * 1e3) / 1e3, S = t.round((h * h * h * p[1] + (c * h * h + h * c * h + h * h * c) * y[1] + (c * c * h + h * c * c + c * h * c) * d[1] + c * c * c * P[1]) * 1e3) / 1e3;
        return [m2, S];
      }
      var g = createTypedArray("float32", 8);
      function C(p, P, y, d, _, f, c) {
        _ < 0 ? _ = 0 : _ > 1 && (_ = 1);
        var h = o(_, c);
        f = f > 1 ? 1 : f;
        var m2 = o(f, c), S, E = p.length, T = 1 - h, k = 1 - m2, F = T * T * T, O = h * T * T * 3, V = h * h * T * 3, L = h * h * h, D = T * T * k, B = h * T * k + T * h * k + T * T * m2, w = h * h * k + T * h * m2 + h * T * m2, x = h * h * m2, A = T * k * k, v = h * k * k + T * m2 * k + T * k * m2, b = h * m2 * k + T * m2 * m2 + h * k * m2, M = h * m2 * m2, I = k * k * k, R = m2 * k * k + k * m2 * k + k * k * m2, z = m2 * m2 * k + k * m2 * m2 + m2 * k * m2, N = m2 * m2 * m2;
        for (S = 0; S < E; S += 1) g[S * 4] = t.round((F * p[S] + O * y[S] + V * d[S] + L * P[S]) * 1e3) / 1e3, g[S * 4 + 1] = t.round((D * p[S] + B * y[S] + w * d[S] + x * P[S]) * 1e3) / 1e3, g[S * 4 + 2] = t.round((A * p[S] + v * y[S] + b * d[S] + M * P[S]) * 1e3) / 1e3, g[S * 4 + 3] = t.round((I * p[S] + R * y[S] + z * d[S] + N * P[S]) * 1e3) / 1e3;
        return g;
      }
      return { getSegmentsLength: s, getNewSegment: C, getPointInSegment: u, buildBezierData: l, pointOnLine2D: e, pointOnLine3D: r };
    }
    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
    function interpolateValue(t, e) {
      var r = this.offsetTime, i;
      this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
      for (var s = e.lastIndex, n = s, a = this.keyframes.length - 1, l = true, o, u, g; l; ) {
        if (o = this.keyframes[n], u = this.keyframes[n + 1], n === a - 1 && t >= u.t - r) {
          o.h && (o = u), s = 0;
          break;
        }
        if (u.t - r > t) {
          s = n;
          break;
        }
        n < a - 1 ? n += 1 : (s = 0, l = false);
      }
      g = this.keyframesMetadata[n] || {};
      var C, p, P, y, d, _, f = u.t - r, c = o.t - r, h;
      if (o.to) {
        g.bezierData || (g.bezierData = bez.buildBezierData(o.s, u.s || o.e, o.to, o.ti));
        var m2 = g.bezierData;
        if (t >= f || t < c) {
          var S = t >= f ? m2.points.length - 1 : 0;
          for (p = m2.points[S].point.length, C = 0; C < p; C += 1) i[C] = m2.points[S].point[C];
        } else {
          g.__fnct ? _ = g.__fnct : (_ = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, g.__fnct = _), P = _((t - c) / (f - c));
          var E = m2.segmentLength * P, T, k = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastAddedLength : 0;
          for (d = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastPoint : 0, l = true, y = m2.points.length; l; ) {
            if (k += m2.points[d].partialLength, E === 0 || P === 0 || d === m2.points.length - 1) {
              for (p = m2.points[d].point.length, C = 0; C < p; C += 1) i[C] = m2.points[d].point[C];
              break;
            } else if (E >= k && E < k + m2.points[d + 1].partialLength) {
              for (T = (E - k) / m2.points[d + 1].partialLength, p = m2.points[d].point.length, C = 0; C < p; C += 1) i[C] = m2.points[d].point[C] + (m2.points[d + 1].point[C] - m2.points[d].point[C]) * T;
              break;
            }
            d < y - 1 ? d += 1 : l = false;
          }
          e._lastPoint = d, e._lastAddedLength = k - m2.points[d].partialLength, e._lastKeyframeIndex = n;
        }
      } else {
        var F, O, V, L, D;
        if (a = o.s.length, h = u.s || o.e, this.sh && o.h !== 1) if (t >= f) i[0] = h[0], i[1] = h[1], i[2] = h[2];
        else if (t <= c) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
        else {
          var B = createQuaternion(o.s), w = createQuaternion(h), x = (t - c) / (f - c);
          quaternionToEuler(i, slerp(B, w, x));
        }
        else for (n = 0; n < a; n += 1) o.h !== 1 && (t >= f ? P = 1 : t < c ? P = 0 : (o.o.x.constructor === Array ? (g.__fnct || (g.__fnct = []), g.__fnct[n] ? _ = g.__fnct[n] : (F = o.o.x[n] === void 0 ? o.o.x[0] : o.o.x[n], O = o.o.y[n] === void 0 ? o.o.y[0] : o.o.y[n], V = o.i.x[n] === void 0 ? o.i.x[0] : o.i.x[n], L = o.i.y[n] === void 0 ? o.i.y[0] : o.i.y[n], _ = BezierFactory.getBezierEasing(F, O, V, L).get, g.__fnct[n] = _)) : g.__fnct ? _ = g.__fnct : (F = o.o.x, O = o.o.y, V = o.i.x, L = o.i.y, _ = BezierFactory.getBezierEasing(F, O, V, L).get, o.keyframeMetadata = _), P = _((t - c) / (f - c)))), h = u.s || o.e, D = o.h === 1 ? o.s[n] : o.s[n] + (h[n] - o.s[n]) * P, this.propType === "multidimensional" ? i[n] = D : i = D;
      }
      return e.lastIndex = s, i;
    }
    function slerp(t, e, r) {
      var i = [], s = t[0], n = t[1], a = t[2], l = t[3], o = e[0], u = e[1], g = e[2], C = e[3], p, P, y, d, _;
      return P = s * o + n * u + a * g + l * C, P < 0 && (P = -P, o = -o, u = -u, g = -g, C = -C), 1 - P > 1e-6 ? (p = Math.acos(P), y = Math.sin(p), d = Math.sin((1 - r) * p) / y, _ = Math.sin(r * p) / y) : (d = 1 - r, _ = r), i[0] = d * s + _ * o, i[1] = d * n + _ * u, i[2] = d * a + _ * g, i[3] = d * l + _ * C, i;
    }
    function quaternionToEuler(t, e) {
      var r = e[0], i = e[1], s = e[2], n = e[3], a = Math.atan2(2 * i * n - 2 * r * s, 1 - 2 * i * i - 2 * s * s), l = Math.asin(2 * r * i + 2 * s * n), o = Math.atan2(2 * r * n - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
      t[0] = a / degToRads, t[1] = l / degToRads, t[2] = o / degToRads;
    }
    function createQuaternion(t) {
      var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, s = Math.cos(e / 2), n = Math.cos(r / 2), a = Math.cos(i / 2), l = Math.sin(e / 2), o = Math.sin(r / 2), u = Math.sin(i / 2), g = s * n * a - l * o * u, C = l * o * a + s * n * u, p = l * n * a + s * o * u, P = s * o * a - l * n * u;
      return [C, p, P, g];
    }
    function getValueAtCurrentTime() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var i = this.interpolateValue(t, this._caching);
        this.pv = i;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function setVValue(t) {
      var e;
      if (this.propType === "unidimensional") e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = true);
      else for (var r = 0, i = this.v.length; r < i; ) e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = true), r += 1;
    }
    function processEffectsSequence() {
      if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
        if (this.lock) {
          this.setVValue(this.pv);
          return;
        }
        this.lock = true, this._mdf = this._isFirstFrame;
        var t, e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
        for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
        this.setVValue(r), this._isFirstFrame = false, this.lock = false, this.frameId = this.elem.globalData.frameId;
      }
    }
    function addEffect(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function ValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = false, this.elem = t, this.container = i, this.comp = t.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function MultiDimensionalProperty(t, e, r, i) {
      this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = false, this.elem = t, this.container = i, this.comp = t.comp, this.k = false, this.kf = false, this.frameId = -1;
      var s, n = e.k.length;
      for (this.v = createTypedArray("float32", n), this.pv = createTypedArray("float32", n), this.vel = createTypedArray("float32", n), s = 0; s < n; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
      this._isFirstFrame = true, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function KeyframedValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = true, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
    }
    function KeyframedMultidimensionalProperty(t, e, r, i) {
      this.propType = "multidimensional";
      var s, n = e.k.length, a, l, o, u;
      for (s = 0; s < n - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, l = e.k[s + 1].s, o = e.k[s].to, u = e.k[s].ti, (a.length === 2 && !(a[0] === l[0] && a[1] === l[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], l[0] + u[0], l[1] + u[1]) || a.length === 3 && !(a[0] === l[0] && a[1] === l[1] && a[2] === l[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], l[0] + u[0], l[1] + u[1], l[2] + u[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === l[0] && a[1] === l[1] && o[0] === 0 && o[1] === 0 && u[0] === 0 && u[1] === 0 && (a.length === 2 || a[2] === l[2] && o[2] === 0 && u[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var g = e.k[0].s.length;
      for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), s = 0; s < g; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
      this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", g) }, this.addEffect = addEffect;
    }
    var PropertyFactory = /* @__PURE__ */ function() {
      function t(r, i, s, n, a) {
        i.sid && (i = r.globalData.slotManager.getProp(i));
        var l;
        if (!i.k.length) l = new ValueProperty(r, i, n, a);
        else if (typeof i.k[0] == "number") l = new MultiDimensionalProperty(r, i, n, a);
        else switch (s) {
          case 0:
            l = new KeyframedValueProperty(r, i, n, a);
            break;
          case 1:
            l = new KeyframedMultidimensionalProperty(r, i, n, a);
            break;
        }
        return l.effectsSequence.length && a.addDynamicProperty(l), l;
      }
      var e = { getProp: t };
      return e;
    }();
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = { addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = true);
    }, iterateDynamicProperties: function() {
      this._mdf = false;
      var e, r = this.dynamicProperties.length;
      for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = true);
    }, initDynamicPropertyContainer: function(e) {
      this.container = e, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
    } };
    var pointPool = function() {
      function t() {
        return createTypedArray("float32", 2);
      }
      return poolFactory(8, t);
    }();
    function ShapePath() {
      this.c = false, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var r = 0; r < e; ) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
    }, ShapePath.prototype.setLength = function(t) {
      for (; this._maxLength < t; ) this.doubleArrayLength();
      this._length = t;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
      var n;
      switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
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
      (!n[i] || n[i] && !s) && (n[i] = pointPool.newElement()), n[i][0] = t, n[i][1] = e;
    }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, n, a, l) {
      this.setXYAt(t, e, "v", a, l), this.setXYAt(r, i, "o", a, l), this.setXYAt(s, n, "i", a, l);
    }, ShapePath.prototype.reverse = function() {
      var t = new ShapePath();
      t.setPathData(this.c, this._length);
      var e = this.v, r = this.o, i = this.i, s = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, false), s = 1);
      var n = this._length - 1, a = this._length, l;
      for (l = s; l < a; l += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], l, false), n -= 1;
      return t;
    }, ShapePath.prototype.length = function() {
      return this._length;
    };
    var shapePool = function() {
      function t() {
        return new ShapePath();
      }
      function e(s) {
        var n = s._length, a;
        for (a = 0; a < n; a += 1) pointPool.release(s.v[a]), pointPool.release(s.i[a]), pointPool.release(s.o[a]), s.v[a] = null, s.i[a] = null, s.o[a] = null;
        s._length = 0, s.c = false;
      }
      function r(s) {
        var n = i.newElement(), a, l = s._length === void 0 ? s.v.length : s._length;
        for (n.setLength(l), n.c = s.c, a = 0; a < l; a += 1) n.setTripleAt(s.v[a][0], s.v[a][1], s.o[a][0], s.o[a][1], s.i[a][0], s.i[a][1], a);
        return n;
      }
      var i = poolFactory(4, t, e);
      return i.clone = r, i;
    }();
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
      this._length = 0;
    };
    var shapeCollectionPool = function() {
      var t = { newShapeCollection: s, release: n }, e = 0, r = 4, i = createSizedArray(r);
      function s() {
        var a;
        return e ? (e -= 1, a = i[e]) : a = new ShapeCollection(), a;
      }
      function n(a) {
        var l, o = a._length;
        for (l = 0; l < o; l += 1) shapePool.release(a.shapes[l]);
        a._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = a, e += 1;
      }
      return t;
    }(), ShapePropertyFactory = function() {
      var t = -999999;
      function e(f, c, h) {
        var m2 = h.lastIndex, S, E, T, k, F, O, V, L, D, B = this.keyframes;
        if (f < B[0].t - this.offsetTime) S = B[0].s[0], T = true, m2 = 0;
        else if (f >= B[B.length - 1].t - this.offsetTime) S = B[B.length - 1].s ? B[B.length - 1].s[0] : B[B.length - 2].e[0], T = true;
        else {
          for (var w = m2, x = B.length - 1, A = true, v, b, M; A && (v = B[w], b = B[w + 1], !(b.t - this.offsetTime > f)); ) w < x - 1 ? w += 1 : A = false;
          if (M = this.keyframesMetadata[w] || {}, T = v.h === 1, m2 = w, !T) {
            if (f >= b.t - this.offsetTime) L = 1;
            else if (f < v.t - this.offsetTime) L = 0;
            else {
              var I;
              M.__fnct ? I = M.__fnct : (I = BezierFactory.getBezierEasing(v.o.x, v.o.y, v.i.x, v.i.y).get, M.__fnct = I), L = I((f - (v.t - this.offsetTime)) / (b.t - this.offsetTime - (v.t - this.offsetTime)));
            }
            E = b.s ? b.s[0] : v.e[0];
          }
          S = v.s[0];
        }
        for (O = c._length, V = S.i[0].length, h.lastIndex = m2, k = 0; k < O; k += 1) for (F = 0; F < V; F += 1) D = T ? S.i[k][F] : S.i[k][F] + (E.i[k][F] - S.i[k][F]) * L, c.i[k][F] = D, D = T ? S.o[k][F] : S.o[k][F] + (E.o[k][F] - S.o[k][F]) * L, c.o[k][F] = D, D = T ? S.v[k][F] : S.v[k][F] + (E.v[k][F] - S.v[k][F]) * L, c.v[k][F] = D;
      }
      function r() {
        var f = this.comp.renderedFrame - this.offsetTime, c = this.keyframes[0].t - this.offsetTime, h = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, m2 = this._caching.lastFrame;
        return m2 !== t && (m2 < c && f < c || m2 > h && f > h) || (this._caching.lastIndex = m2 < f ? this._caching.lastIndex : 0, this.interpolateShape(f, this.pv, this._caching)), this._caching.lastFrame = f, this.pv;
      }
      function i() {
        this.paths = this.localShapeCollection;
      }
      function s(f, c) {
        if (f._length !== c._length || f.c !== c.c) return false;
        var h, m2 = f._length;
        for (h = 0; h < m2; h += 1) if (f.v[h][0] !== c.v[h][0] || f.v[h][1] !== c.v[h][1] || f.o[h][0] !== c.o[h][0] || f.o[h][1] !== c.o[h][1] || f.i[h][0] !== c.i[h][0] || f.i[h][1] !== c.i[h][1]) return false;
        return true;
      }
      function n(f) {
        s(this.v, f) || (this.v = shapePool.clone(f), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
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
          var f;
          this.kf ? f = this.pv : this.data.ks ? f = this.data.ks.k : f = this.data.pt.k;
          var c, h = this.effectsSequence.length;
          for (c = 0; c < h; c += 1) f = this.effectsSequence[c](f);
          this.setVValue(f), this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
      }
      function l(f, c, h) {
        this.propType = "shape", this.comp = f.comp, this.container = f, this.elem = f, this.data = c, this.k = false, this.kf = false, this._mdf = false;
        var m2 = h === 3 ? c.pt.k : c.ks.k;
        this.v = shapePool.clone(m2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
      }
      function o(f) {
        this.effectsSequence.push(f), this.container.addDynamicProperty(this);
      }
      l.prototype.interpolateShape = e, l.prototype.getValue = a, l.prototype.setVValue = n, l.prototype.addEffect = o;
      function u(f, c, h) {
        this.propType = "shape", this.comp = f.comp, this.elem = f, this.container = f, this.offsetTime = f.data.st, this.keyframes = h === 3 ? c.pt.k : c.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
        var m2 = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, m2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [r.bind(this)];
      }
      u.prototype.getValue = a, u.prototype.interpolateShape = e, u.prototype.setVValue = n, u.prototype.addEffect = o;
      var g = function() {
        var f = roundCorner;
        function c(h, m2) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = m2.d, this.elem = h, this.comp = h.comp, this.frameId = -1, this.initDynamicPropertyContainer(h), this.p = PropertyFactory.getProp(h, m2.p, 1, 0, this), this.s = PropertyFactory.getProp(h, m2.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
        }
        return c.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var m2 = this.p.v[0], S = this.p.v[1], E = this.s.v[0] / 2, T = this.s.v[1] / 2, k = this.d !== 3, F = this.v;
          F.v[0][0] = m2, F.v[0][1] = S - T, F.v[1][0] = k ? m2 + E : m2 - E, F.v[1][1] = S, F.v[2][0] = m2, F.v[2][1] = S + T, F.v[3][0] = k ? m2 - E : m2 + E, F.v[3][1] = S, F.i[0][0] = k ? m2 - E * f : m2 + E * f, F.i[0][1] = S - T, F.i[1][0] = k ? m2 + E : m2 - E, F.i[1][1] = S - T * f, F.i[2][0] = k ? m2 + E * f : m2 - E * f, F.i[2][1] = S + T, F.i[3][0] = k ? m2 - E : m2 + E, F.i[3][1] = S + T * f, F.o[0][0] = k ? m2 + E * f : m2 - E * f, F.o[0][1] = S - T, F.o[1][0] = k ? m2 + E : m2 - E, F.o[1][1] = S + T * f, F.o[2][0] = k ? m2 - E * f : m2 + E * f, F.o[2][1] = S + T, F.o[3][0] = k ? m2 - E : m2 + E, F.o[3][1] = S - T * f;
        } }, extendPrototype([DynamicPropertyContainer], c), c;
      }(), C = function() {
        function f(c, h) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 0), this.elem = c, this.comp = c.comp, this.data = h, this.frameId = -1, this.d = h.d, this.initDynamicPropertyContainer(c), h.sy === 1 ? (this.ir = PropertyFactory.getProp(c, h.ir, 0, 0, this), this.is = PropertyFactory.getProp(c, h.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(c, h.pt, 0, 0, this), this.p = PropertyFactory.getProp(c, h.p, 1, 0, this), this.r = PropertyFactory.getProp(c, h.r, 0, degToRads, this), this.or = PropertyFactory.getProp(c, h.or, 0, 0, this), this.os = PropertyFactory.getProp(c, h.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
        }
        return f.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var h = Math.floor(this.pt.v) * 2, m2 = Math.PI * 2 / h, S = true, E = this.or.v, T = this.ir.v, k = this.os.v, F = this.is.v, O = 2 * Math.PI * E / (h * 2), V = 2 * Math.PI * T / (h * 2), L, D, B, w, x = -Math.PI / 2;
          x += this.r.v;
          var A = this.data.d === 3 ? -1 : 1;
          for (this.v._length = 0, L = 0; L < h; L += 1) {
            D = S ? E : T, B = S ? k : F, w = S ? O : V;
            var v = D * Math.cos(x), b = D * Math.sin(x), M = v === 0 && b === 0 ? 0 : b / Math.sqrt(v * v + b * b), I = v === 0 && b === 0 ? 0 : -v / Math.sqrt(v * v + b * b);
            v += +this.p.v[0], b += +this.p.v[1], this.v.setTripleAt(v, b, v - M * w * B * A, b - I * w * B * A, v + M * w * B * A, b + I * w * B * A, L, true), S = !S, x += m2 * A;
          }
        }, convertPolygonToPath: function() {
          var h = Math.floor(this.pt.v), m2 = Math.PI * 2 / h, S = this.or.v, E = this.os.v, T = 2 * Math.PI * S / (h * 4), k, F = -Math.PI * 0.5, O = this.data.d === 3 ? -1 : 1;
          for (F += this.r.v, this.v._length = 0, k = 0; k < h; k += 1) {
            var V = S * Math.cos(F), L = S * Math.sin(F), D = V === 0 && L === 0 ? 0 : L / Math.sqrt(V * V + L * L), B = V === 0 && L === 0 ? 0 : -V / Math.sqrt(V * V + L * L);
            V += +this.p.v[0], L += +this.p.v[1], this.v.setTripleAt(V, L, V - D * T * E * O, L - B * T * E * O, V + D * T * E * O, L + B * T * E * O, k, true), F += m2 * O;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, extendPrototype([DynamicPropertyContainer], f), f;
      }(), p = function() {
        function f(c, h) {
          this.v = shapePool.newElement(), this.v.c = true, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = c, this.comp = c.comp, this.frameId = -1, this.d = h.d, this.initDynamicPropertyContainer(c), this.p = PropertyFactory.getProp(c, h.p, 1, 0, this), this.s = PropertyFactory.getProp(c, h.s, 1, 0, this), this.r = PropertyFactory.getProp(c, h.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
        }
        return f.prototype = { convertRectToPath: function() {
          var h = this.p.v[0], m2 = this.p.v[1], S = this.s.v[0] / 2, E = this.s.v[1] / 2, T = bmMin(S, E, this.r.v), k = T * (1 - roundCorner);
          this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + S, m2 - E + T, h + S, m2 - E + T, h + S, m2 - E + k, 0, true), this.v.setTripleAt(h + S, m2 + E - T, h + S, m2 + E - k, h + S, m2 + E - T, 1, true), T !== 0 ? (this.v.setTripleAt(h + S - T, m2 + E, h + S - T, m2 + E, h + S - k, m2 + E, 2, true), this.v.setTripleAt(h - S + T, m2 + E, h - S + k, m2 + E, h - S + T, m2 + E, 3, true), this.v.setTripleAt(h - S, m2 + E - T, h - S, m2 + E - T, h - S, m2 + E - k, 4, true), this.v.setTripleAt(h - S, m2 - E + T, h - S, m2 - E + k, h - S, m2 - E + T, 5, true), this.v.setTripleAt(h - S + T, m2 - E, h - S + T, m2 - E, h - S + k, m2 - E, 6, true), this.v.setTripleAt(h + S - T, m2 - E, h + S - k, m2 - E, h + S - T, m2 - E, 7, true)) : (this.v.setTripleAt(h - S, m2 + E, h - S + k, m2 + E, h - S, m2 + E, 2), this.v.setTripleAt(h - S, m2 - E, h - S, m2 - E + k, h - S, m2 - E, 3))) : (this.v.setTripleAt(h + S, m2 - E + T, h + S, m2 - E + k, h + S, m2 - E + T, 0, true), T !== 0 ? (this.v.setTripleAt(h + S - T, m2 - E, h + S - T, m2 - E, h + S - k, m2 - E, 1, true), this.v.setTripleAt(h - S + T, m2 - E, h - S + k, m2 - E, h - S + T, m2 - E, 2, true), this.v.setTripleAt(h - S, m2 - E + T, h - S, m2 - E + T, h - S, m2 - E + k, 3, true), this.v.setTripleAt(h - S, m2 + E - T, h - S, m2 + E - k, h - S, m2 + E - T, 4, true), this.v.setTripleAt(h - S + T, m2 + E, h - S + T, m2 + E, h - S + k, m2 + E, 5, true), this.v.setTripleAt(h + S - T, m2 + E, h + S - k, m2 + E, h + S - T, m2 + E, 6, true), this.v.setTripleAt(h + S, m2 + E - T, h + S, m2 + E - T, h + S, m2 + E - k, 7, true)) : (this.v.setTripleAt(h - S, m2 - E, h - S + k, m2 - E, h - S, m2 - E, 1, true), this.v.setTripleAt(h - S, m2 + E, h - S, m2 + E - k, h - S, m2 + E, 2, true), this.v.setTripleAt(h + S, m2 + E, h + S - k, m2 + E, h + S, m2 + E, 3, true)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: i }, extendPrototype([DynamicPropertyContainer], f), f;
      }();
      function P(f, c, h) {
        var m2;
        if (h === 3 || h === 4) {
          var S = h === 3 ? c.pt : c.ks, E = S.k;
          E.length ? m2 = new u(f, c, h) : m2 = new l(f, c, h);
        } else h === 5 ? m2 = new p(f, c) : h === 6 ? m2 = new g(f, c) : h === 7 && (m2 = new C(f, c));
        return m2.k && f.addDynamicProperty(m2), m2;
      }
      function y() {
        return l;
      }
      function d() {
        return u;
      }
      var _ = {};
      return _.getShapeProp = P, _.getConstructorFunction = y, _.getKeyframedConstructorFunction = d, _;
    }();
    var Matrix = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;
      function s() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function n(v) {
        if (v === 0) return this;
        var b = t(v), M = e(v);
        return this._t(b, -M, 0, 0, M, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function a(v) {
        if (v === 0) return this;
        var b = t(v), M = e(v);
        return this._t(1, 0, 0, 0, 0, b, -M, 0, 0, M, b, 0, 0, 0, 0, 1);
      }
      function l(v) {
        if (v === 0) return this;
        var b = t(v), M = e(v);
        return this._t(b, 0, M, 0, 0, 1, 0, 0, -M, 0, b, 0, 0, 0, 0, 1);
      }
      function o(v) {
        if (v === 0) return this;
        var b = t(v), M = e(v);
        return this._t(b, -M, 0, 0, M, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function u(v, b) {
        return this._t(1, b, v, 1, 0, 0);
      }
      function g(v, b) {
        return this.shear(r(v), r(b));
      }
      function C(v, b) {
        var M = t(b), I = e(b);
        return this._t(M, I, 0, 0, -I, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(v), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(M, -I, 0, 0, I, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function p(v, b, M) {
        return !M && M !== 0 && (M = 1), v === 1 && b === 1 && M === 1 ? this : this._t(v, 0, 0, 0, 0, b, 0, 0, 0, 0, M, 0, 0, 0, 0, 1);
      }
      function P(v, b, M, I, R, z, N, W, j, H, Y, Q, X, $, K, q) {
        return this.props[0] = v, this.props[1] = b, this.props[2] = M, this.props[3] = I, this.props[4] = R, this.props[5] = z, this.props[6] = N, this.props[7] = W, this.props[8] = j, this.props[9] = H, this.props[10] = Y, this.props[11] = Q, this.props[12] = X, this.props[13] = $, this.props[14] = K, this.props[15] = q, this;
      }
      function y(v, b, M) {
        return M = M || 0, v !== 0 || b !== 0 || M !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, v, b, M, 1) : this;
      }
      function d(v, b, M, I, R, z, N, W, j, H, Y, Q, X, $, K, q) {
        var G = this.props;
        if (v === 1 && b === 0 && M === 0 && I === 0 && R === 0 && z === 1 && N === 0 && W === 0 && j === 0 && H === 0 && Y === 1 && Q === 0) return G[12] = G[12] * v + G[15] * X, G[13] = G[13] * z + G[15] * $, G[14] = G[14] * Y + G[15] * K, G[15] *= q, this._identityCalculated = false, this;
        var et = G[0], nt = G[1], rt = G[2], tt = G[3], it = G[4], st = G[5], Z = G[6], at = G[7], ot = G[8], J = G[9], ht = G[10], U = G[11], lt = G[12], ft = G[13], pt = G[14], ct = G[15];
        return G[0] = et * v + nt * R + rt * j + tt * X, G[1] = et * b + nt * z + rt * H + tt * $, G[2] = et * M + nt * N + rt * Y + tt * K, G[3] = et * I + nt * W + rt * Q + tt * q, G[4] = it * v + st * R + Z * j + at * X, G[5] = it * b + st * z + Z * H + at * $, G[6] = it * M + st * N + Z * Y + at * K, G[7] = it * I + st * W + Z * Q + at * q, G[8] = ot * v + J * R + ht * j + U * X, G[9] = ot * b + J * z + ht * H + U * $, G[10] = ot * M + J * N + ht * Y + U * K, G[11] = ot * I + J * W + ht * Q + U * q, G[12] = lt * v + ft * R + pt * j + ct * X, G[13] = lt * b + ft * z + pt * H + ct * $, G[14] = lt * M + ft * N + pt * Y + ct * K, G[15] = lt * I + ft * W + pt * Q + ct * q, this._identityCalculated = false, this;
      }
      function _(v) {
        var b = v.props;
        return this.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]);
      }
      function f() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = true), this._identity;
      }
      function c(v) {
        for (var b = 0; b < 16; ) {
          if (v.props[b] !== this.props[b]) return false;
          b += 1;
        }
        return true;
      }
      function h(v) {
        var b;
        for (b = 0; b < 16; b += 1) v.props[b] = this.props[b];
        return v;
      }
      function m2(v) {
        var b;
        for (b = 0; b < 16; b += 1) this.props[b] = v[b];
      }
      function S(v, b, M) {
        return { x: v * this.props[0] + b * this.props[4] + M * this.props[8] + this.props[12], y: v * this.props[1] + b * this.props[5] + M * this.props[9] + this.props[13], z: v * this.props[2] + b * this.props[6] + M * this.props[10] + this.props[14] };
      }
      function E(v, b, M) {
        return v * this.props[0] + b * this.props[4] + M * this.props[8] + this.props[12];
      }
      function T(v, b, M) {
        return v * this.props[1] + b * this.props[5] + M * this.props[9] + this.props[13];
      }
      function k(v, b, M) {
        return v * this.props[2] + b * this.props[6] + M * this.props[10] + this.props[14];
      }
      function F() {
        var v = this.props[0] * this.props[5] - this.props[1] * this.props[4], b = this.props[5] / v, M = -this.props[1] / v, I = -this.props[4] / v, R = this.props[0] / v, z = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / v, N = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / v, W = new Matrix();
        return W.props[0] = b, W.props[1] = M, W.props[4] = I, W.props[5] = R, W.props[12] = z, W.props[13] = N, W;
      }
      function O(v) {
        var b = this.getInverseMatrix();
        return b.applyToPointArray(v[0], v[1], v[2] || 0);
      }
      function V(v) {
        var b, M = v.length, I = [];
        for (b = 0; b < M; b += 1) I[b] = O(v[b]);
        return I;
      }
      function L(v, b, M) {
        var I = createTypedArray("float32", 6);
        if (this.isIdentity()) I[0] = v[0], I[1] = v[1], I[2] = b[0], I[3] = b[1], I[4] = M[0], I[5] = M[1];
        else {
          var R = this.props[0], z = this.props[1], N = this.props[4], W = this.props[5], j = this.props[12], H = this.props[13];
          I[0] = v[0] * R + v[1] * N + j, I[1] = v[0] * z + v[1] * W + H, I[2] = b[0] * R + b[1] * N + j, I[3] = b[0] * z + b[1] * W + H, I[4] = M[0] * R + M[1] * N + j, I[5] = M[0] * z + M[1] * W + H;
        }
        return I;
      }
      function D(v, b, M) {
        var I;
        return this.isIdentity() ? I = [v, b, M] : I = [v * this.props[0] + b * this.props[4] + M * this.props[8] + this.props[12], v * this.props[1] + b * this.props[5] + M * this.props[9] + this.props[13], v * this.props[2] + b * this.props[6] + M * this.props[10] + this.props[14]], I;
      }
      function B(v, b) {
        if (this.isIdentity()) return v + "," + b;
        var M = this.props;
        return Math.round((v * M[0] + b * M[4] + M[12]) * 100) / 100 + "," + Math.round((v * M[1] + b * M[5] + M[13]) * 100) / 100;
      }
      function w() {
        for (var v = 0, b = this.props, M = "matrix3d(", I = 1e4; v < 16; ) M += i(b[v] * I) / I, M += v === 15 ? ")" : ",", v += 1;
        return M;
      }
      function x(v) {
        var b = 1e4;
        return v < 1e-6 && v > 0 || v > -1e-6 && v < 0 ? i(v * b) / b : v;
      }
      function A() {
        var v = this.props, b = x(v[0]), M = x(v[1]), I = x(v[4]), R = x(v[5]), z = x(v[12]), N = x(v[13]);
        return "matrix(" + b + "," + M + "," + I + "," + R + "," + z + "," + N + ")";
      }
      return function() {
        this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = l, this.rotateZ = o, this.skew = g, this.skewFromAxis = C, this.shear = u, this.scale = p, this.setTransform = P, this.translate = y, this.transform = d, this.multiply = _, this.applyToPoint = S, this.applyToX = E, this.applyToY = T, this.applyToZ = k, this.applyToPointArray = D, this.applyToTriplePoints = L, this.applyToPointStringified = B, this.toCSS = w, this.to2dCSS = A, this.clone = h, this.cloneFromProps = m2, this.equals = c, this.inversePoints = V, this.inversePoint = O, this.getInverseMatrix = F, this._t = this.transform, this.isIdentity = f, this._identity = true, this._identityCalculated = false, this.props = createTypedArray("float32", 16), this.reset();
      };
    }();
    function _typeof$3(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(r) {
        return typeof r;
      } : _typeof$3 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$3(t);
    }
    var lottie = {};
    function setLocation(t) {
      setLocationHref(t);
    }
    function searchAnimations() {
      animationManager.searchAnimations();
    }
    function setSubframeRendering(t) {
      setSubframeEnabled(t);
    }
    function setPrefix(t) {
      setIdPrefix(t);
    }
    function loadAnimation(t) {
      return animationManager.loadAnimation(t);
    }
    function setQuality(t) {
      if (typeof t == "string") switch (t) {
        case "high":
          setDefaultCurveSegments(200);
          break;
        default:
        case "medium":
          setDefaultCurveSegments(50);
          break;
        case "low":
          setDefaultCurveSegments(10);
          break;
      }
      else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
    }
    function inBrowser() {
      return typeof navigator < "u";
    }
    function installPlugin(t, e) {
      t === "expressions" && setExpressionsPlugin(e);
    }
    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
    function checkReady() {
      document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(t) {
      for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
        var i = e[r].split("=");
        if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
      }
      return null;
    }
    var queryString = "";
    {
      var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
      queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      !((typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = lottie);
    } catch (t) {
    }
    var ShapeModifiers = function() {
      var t = {}, e = {};
      t.registerModifier = r, t.getModifier = i;
      function r(s, n) {
        e[s] || (e[s] = n);
      }
      function i(s, n, a) {
        return new e[s](n, a);
      }
      return t;
    }();
    function ShapeModifier() {
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier);
    function TrimModifier() {
    }
    extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
      this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
      var n = [];
      e <= 1 ? n.push({ s: t, e }) : t >= 1 ? n.push({ s: t - 1, e: e - 1 }) : (n.push({ s: t, e: 1 }), n.push({ s: 0, e: e - 1 }));
      var a = [], l, o = n.length, u;
      for (l = 0; l < o; l += 1) if (u = n[l], !(u.e * s < i || u.s * s > i + r)) {
        var g, C;
        u.s * s <= i ? g = 0 : g = (u.s * s - i) / r, u.e * s >= i + r ? C = 1 : C = (u.e * s - i) / r, a.push([g, C]);
      }
      return a.length || a.push([0, 0]), a;
    }, TrimModifier.prototype.releasePathsData = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
      return t.length = 0, t;
    }, TrimModifier.prototype.processShapes = function(t) {
      var e, r;
      if (this._mdf || t) {
        var i = this.o.v % 360 / 360;
        if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, e > r) {
          var s = e;
          e = r, r = s;
        }
        e = Math.round(e * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = e, this.eValue = r;
      } else e = this.sValue, r = this.eValue;
      var n, a, l = this.shapes.length, o, u, g, C, p, P = 0;
      if (r === e) for (a = 0; a < l; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = true, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
      else if (r === 1 && e === 0 || r === 0 && e === 1) {
        if (this._mdf) for (a = 0; a < l; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = true;
      } else {
        var y = [], d, _;
        for (a = 0; a < l; a += 1) if (d = this.shapes[a], !d.shape._mdf && !this._mdf && !t && this.m !== 2) d.shape.paths = d.localShapeCollection;
        else {
          if (n = d.shape.paths, u = n._length, p = 0, !d.shape._mdf && d.pathsData.length) p = d.totalShapeLength;
          else {
            for (g = this.releasePathsData(d.pathsData), o = 0; o < u; o += 1) C = bez.getSegmentsLength(n.shapes[o]), g.push(C), p += C.totalLength;
            d.totalShapeLength = p, d.pathsData = g;
          }
          P += p, d.shape._mdf = true;
        }
        var f = e, c = r, h = 0, m2;
        for (a = l - 1; a >= 0; a -= 1) if (d = this.shapes[a], d.shape._mdf) {
          for (_ = d.localShapeCollection, _.releaseShapes(), this.m === 2 && l > 1 ? (m2 = this.calculateShapeEdges(e, r, d.totalShapeLength, h, P), h += d.totalShapeLength) : m2 = [[f, c]], u = m2.length, o = 0; o < u; o += 1) {
            f = m2[o][0], c = m2[o][1], y.length = 0, c <= 1 ? y.push({ s: d.totalShapeLength * f, e: d.totalShapeLength * c }) : f >= 1 ? y.push({ s: d.totalShapeLength * (f - 1), e: d.totalShapeLength * (c - 1) }) : (y.push({ s: d.totalShapeLength * f, e: d.totalShapeLength }), y.push({ s: 0, e: d.totalShapeLength * (c - 1) }));
            var S = this.addShapes(d, y[0]);
            if (y[0].s !== y[0].e) {
              if (y.length > 1) {
                var E = d.shape.paths.shapes[d.shape.paths._length - 1];
                if (E.c) {
                  var T = S.pop();
                  this.addPaths(S, _), S = this.addShapes(d, y[1], T);
                } else this.addPaths(S, _), S = this.addShapes(d, y[1]);
              }
              this.addPaths(S, _);
            }
          }
          d.shape.paths = _;
        }
      }
    }, TrimModifier.prototype.addPaths = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1) e.addShape(t[r]);
    }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, n, a) {
      s.setXYAt(e[0], e[1], "o", n), s.setXYAt(r[0], r[1], "i", n + 1), a && s.setXYAt(t[0], t[1], "v", n), s.setXYAt(i[0], i[1], "v", n + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
      e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
    }, TrimModifier.prototype.addShapes = function(t, e, r) {
      var i = t.pathsData, s = t.shape.paths.shapes, n, a = t.shape.paths._length, l, o, u = 0, g, C, p, P, y = [], d, _ = true;
      for (r ? (C = r._length, d = r._length) : (r = shapePool.newElement(), C = 0, d = 0), y.push(r), n = 0; n < a; n += 1) {
        for (p = i[n].lengths, r.c = s[n].c, o = s[n].c ? p.length : p.length + 1, l = 1; l < o; l += 1) if (g = p[l - 1], u + g.addedLength < e.s) u += g.addedLength, r.c = false;
        else if (u > e.e) {
          r.c = false;
          break;
        } else e.s <= u && e.e >= u + g.addedLength ? (this.addSegment(s[n].v[l - 1], s[n].o[l - 1], s[n].i[l], s[n].v[l], r, C, _), _ = false) : (P = bez.getNewSegment(s[n].v[l - 1], s[n].v[l], s[n].o[l - 1], s[n].i[l], (e.s - u) / g.addedLength, (e.e - u) / g.addedLength, p[l - 1]), this.addSegmentFromArray(P, r, C, _), _ = false, r.c = false), u += g.addedLength, C += 1;
        if (s[n].c && p.length) {
          if (g = p[l - 1], u <= e.e) {
            var f = p[l - 1].addedLength;
            e.s <= u && e.e >= u + f ? (this.addSegment(s[n].v[l - 1], s[n].o[l - 1], s[n].i[0], s[n].v[0], r, C, _), _ = false) : (P = bez.getNewSegment(s[n].v[l - 1], s[n].v[0], s[n].o[l - 1], s[n].i[0], (e.s - u) / f, (e.e - u) / f, p[l - 1]), this.addSegmentFromArray(P, r, C, _), _ = false, r.c = false);
          } else r.c = false;
          u += g.addedLength, C += 1;
        }
        if (r._length && (r.setXYAt(r.v[d][0], r.v[d][1], "i", d), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), u > e.e) break;
        n < a - 1 && (r = shapePool.newElement(), _ = true, y.push(r), C = 0);
      }
      return y;
    };
    function PuckerAndBloatModifier() {
    }
    extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
      var r = e / 100, i = [0, 0], s = t._length, n = 0;
      for (n = 0; n < s; n += 1) i[0] += t.v[n][0], i[1] += t.v[n][1];
      i[0] /= s, i[1] /= s;
      var a = shapePool.newElement();
      a.c = t.c;
      var l, o, u, g, C, p;
      for (n = 0; n < s; n += 1) l = t.v[n][0] + (i[0] - t.v[n][0]) * r, o = t.v[n][1] + (i[1] - t.v[n][1]) * r, u = t.o[n][0] + (i[0] - t.o[n][0]) * -r, g = t.o[n][1] + (i[1] - t.o[n][1]) * -r, C = t.i[n][0] + (i[0] - t.i[n][0]) * -r, p = t.i[n][1] + (i[1] - t.i[n][1]) * -r, a.setTripleAt(l, o, u, g, C, p, n);
      return a;
    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.amount.v;
      if (a !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), l.shape._mdf = true, e = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(e[s], a));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    var TransformPropertyFactory = function() {
      var t = [0, 0];
      function e(o) {
        var u = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || u, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function r(o) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || o) {
            var u;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var g, C;
              if (u = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (g = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / u, 0), C = this.p.getValueAtTime(this.p.keyframes[0].t / u, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (g = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / u, 0), C = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / u, 0)) : (g = this.p.pv, C = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / u, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                g = [], C = [];
                var p = this.px, P = this.py;
                p._caching.lastFrame + p.offsetTime <= p.keyframes[0].t ? (g[0] = p.getValueAtTime((p.keyframes[0].t + 0.01) / u, 0), g[1] = P.getValueAtTime((P.keyframes[0].t + 0.01) / u, 0), C[0] = p.getValueAtTime(p.keyframes[0].t / u, 0), C[1] = P.getValueAtTime(P.keyframes[0].t / u, 0)) : p._caching.lastFrame + p.offsetTime >= p.keyframes[p.keyframes.length - 1].t ? (g[0] = p.getValueAtTime(p.keyframes[p.keyframes.length - 1].t / u, 0), g[1] = P.getValueAtTime(P.keyframes[P.keyframes.length - 1].t / u, 0), C[0] = p.getValueAtTime((p.keyframes[p.keyframes.length - 1].t - 0.01) / u, 0), C[1] = P.getValueAtTime((P.keyframes[P.keyframes.length - 1].t - 0.01) / u, 0)) : (g = [p.pv, P.pv], C[0] = p.getValueAtTime((p._caching.lastFrame + p.offsetTime - 0.01) / u, p.offsetTime), C[1] = P.getValueAtTime((P._caching.lastFrame + P.offsetTime - 0.01) / u, P.offsetTime));
              } else C = t, g = C;
              this.v.rotate(-Math.atan2(g[1] - C[1], g[0] - C[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }
      function i() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
        else return;
        if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
        else return;
        if (this.sk) if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
        else return;
        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
      }
      function s() {
      }
      function n(o) {
        this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = true;
      }
      function a(o, u, g) {
        if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = u, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(g || o), u.p && u.p.s ? (this.px = PropertyFactory.getProp(o, u.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, u.p.y, 0, 0, this), u.p.z && (this.pz = PropertyFactory.getProp(o, u.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, u.p || { k: [0, 0, 0] }, 1, 0, this), u.rx) {
          if (this.rx = PropertyFactory.getProp(o, u.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, u.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, u.rz, 0, degToRads, this), u.or.k[0].ti) {
            var C, p = u.or.k.length;
            for (C = 0; C < p; C += 1) u.or.k[C].to = null, u.or.k[C].ti = null;
          }
          this.or = PropertyFactory.getProp(o, u.or, 1, degToRads, this), this.or.sh = true;
        } else this.r = PropertyFactory.getProp(o, u.r || { k: 0 }, 0, degToRads, this);
        u.sk && (this.sk = PropertyFactory.getProp(o, u.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, u.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, u.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(o, u.s || { k: [100, 100, 100] }, 1, 0.01, this), u.o ? this.o = PropertyFactory.getProp(o, u.o, 0, 0.01, o) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
      }
      a.prototype = { applyToMatrix: e, getValue: r, precalculateMatrix: i, autoOrient: s }, extendPrototype([DynamicPropertyContainer], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
      function l(o, u, g) {
        return new a(o, u, g);
      }
      return { getTransformProperty: l };
    }();
    function RepeaterModifier() {
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, n) {
      var a = n ? -1 : 1, l = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
      t.translate(i.p.v[0] * a * s, i.p.v[1] * a * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * a * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(n ? 1 / l : l, n ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
    }, RepeaterModifier.prototype.init = function(t, e, r, i) {
      for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0; ) r -= 1, this._elements.unshift(e[r]);
      this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, RepeaterModifier.prototype.resetElements = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) t[e]._processed = false, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, RepeaterModifier.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1) t[r]._render = e, t[r].ty === "gr" && this.changeGroupRender(t[r].it, e);
    }, RepeaterModifier.prototype.processShapes = function(t) {
      var e, r, i, s, n, a = false;
      if (this._mdf || t) {
        var l = Math.ceil(this.c.v);
        if (this._groups.length < l) {
          for (; this._groups.length < l; ) {
            var o = { it: this.cloneElements(this._elements), ty: "gr" };
            o.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), a = true;
        }
        n = 0;
        var u;
        for (i = 0; i <= this._groups.length - 1; i += 1) {
          if (u = n < l, this._groups[i]._render = u, this.changeGroupRender(this._groups[i].it, u), !u) {
            var g = this.elemsData[i].it, C = g[g.length - 1];
            C.transform.op.v !== 0 ? (C.transform.op._mdf = true, C.transform.op.v = 0) : C.transform.op._mdf = false;
          }
          n += 1;
        }
        this._currentCopies = l;
        var p = this.o.v, P = p % 1, y = p > 0 ? Math.floor(p) : Math.ceil(p), d = this.pMatrix.props, _ = this.rMatrix.props, f = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var c = 0;
        if (p > 0) {
          for (; c < y; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), c += 1;
          P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, P, false), c += P);
        } else if (p < 0) {
          for (; c > y; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), c -= 1;
          P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -P, true), c -= P);
        }
        i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, n = this._currentCopies;
        for (var h, m2; n; ) {
          if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, m2 = r.length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), c !== 0) {
            for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(_[0], _[1], _[2], _[3], _[4], _[5], _[6], _[7], _[8], _[9], _[10], _[11], _[12], _[13], _[14], _[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), h = 0; h < m2; h += 1) r[h] = this.matrix.props[h];
            this.matrix.reset();
          } else for (this.matrix.reset(), h = 0; h < m2; h += 1) r[h] = this.matrix.props[h];
          c += 1, n -= 1, i += s;
        }
      } else for (n = this._currentCopies, i = 0, s = 1; n; ) e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, n -= 1, i += s;
      return a;
    }, RepeaterModifier.prototype.addShape = function() {
    };
    function RoundCornersModifier() {
    }
    extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
      var r = shapePool.newElement();
      r.c = t.c;
      var i, s = t._length, n, a, l, o, u, g, C = 0, p, P, y, d, _, f;
      for (i = 0; i < s; i += 1) n = t.v[i], l = t.o[i], a = t.i[i], n[0] === l[0] && n[1] === l[1] && n[0] === a[0] && n[1] === a[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(n[0], n[1], l[0], l[1], a[0], a[1], C), C += 1) : (i === 0 ? o = t.v[s - 1] : o = t.v[i - 1], u = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), g = u ? Math.min(u / 2, e) / u : 0, _ = n[0] + (o[0] - n[0]) * g, p = _, f = n[1] - (n[1] - o[1]) * g, P = f, y = p - (p - n[0]) * roundCorner, d = P - (P - n[1]) * roundCorner, r.setTripleAt(p, P, y, d, _, f, C), C += 1, i === s - 1 ? o = t.v[0] : o = t.v[i + 1], u = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), g = u ? Math.min(u / 2, e) / u : 0, y = n[0] + (o[0] - n[0]) * g, p = y, d = n[1] + (o[1] - n[1]) * g, P = d, _ = p - (p - n[0]) * roundCorner, f = P - (P - n[1]) * roundCorner, r.setTripleAt(p, P, y, d, _, f, C), C += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], C), C += 1);
      return r;
    }, RoundCornersModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.rd.v;
      if (a !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), l.shape._mdf = true, e = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(e[s], a));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function floatEqual(t, e) {
      return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
    }
    function floatZero(t) {
      return Math.abs(t) <= 1e-5;
    }
    function lerp(t, e, r) {
      return t * (1 - r) + e * r;
    }
    function lerpPoint(t, e, r) {
      return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
    }
    function quadRoots(t, e, r) {
      if (t === 0) return [];
      var i = e * e - 4 * t * r;
      if (i < 0) return [];
      var s = -e / (2 * t);
      if (i === 0) return [s];
      var n = Math.sqrt(i) / (2 * t);
      return [s - n, s + n];
    }
    function polynomialCoefficients(t, e, r, i) {
      return [-t + 3 * e - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t];
    }
    function singlePoint(t) {
      return new PolynomialBezier(t, t, t, t, false);
    }
    function PolynomialBezier(t, e, r, i, s) {
      s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
      var n = polynomialCoefficients(t[0], e[0], r[0], i[0]), a = polynomialCoefficients(t[1], e[1], r[1], i[1]);
      this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [t, e, r, i];
    }
    PolynomialBezier.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, PolynomialBezier.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, PolynomialBezier.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, PolynomialBezier.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(t)) return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (r < 0) return [];
      var i = Math.sqrt(r);
      return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(s) {
        return s > 0 && s < 1;
      });
    }, PolynomialBezier.prototype.split = function(t) {
      if (t <= 0) return [singlePoint(this.points[0]), this];
      if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
      var e = lerpPoint(this.points[0], this.points[1], t), r = lerpPoint(this.points[1], this.points[2], t), i = lerpPoint(this.points[2], this.points[3], t), s = lerpPoint(e, r, t), n = lerpPoint(r, i, t), a = lerpPoint(s, n, t);
      return [new PolynomialBezier(this.points[0], e, s, a, true), new PolynomialBezier(a, n, i, this.points[3], true)];
    };
    function extrema(t, e) {
      var r = t.points[0][e], i = t.points[t.points.length - 1][e];
      if (r > i) {
        var s = i;
        i = r, r = s;
      }
      for (var n = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < n.length; a += 1) if (n[a] > 0 && n[a] < 1) {
        var l = t.point(n[a])[e];
        l < r ? r = l : l > i && (i = l);
      }
      return { min: r, max: i };
    }
    PolynomialBezier.prototype.bounds = function() {
      return { x: extrema(this, 0), y: extrema(this, 1) };
    }, PolynomialBezier.prototype.boundingBox = function() {
      var t = this.bounds();
      return { left: t.x.min, right: t.x.max, top: t.y.min, bottom: t.y.max, width: t.x.max - t.x.min, height: t.y.max - t.y.min, cx: (t.x.max + t.x.min) / 2, cy: (t.y.max + t.y.min) / 2 };
    };
    function intersectData(t, e, r) {
      var i = t.boundingBox();
      return { cx: i.cx, cy: i.cy, width: i.width, height: i.height, bez: t, t: (e + r) / 2, t1: e, t2: r };
    }
    function splitData(t) {
      var e = t.bez.split(0.5);
      return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
    }
    function boxIntersect(t, e) {
      return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
    }
    function intersectsImpl(t, e, r, i, s, n) {
      if (boxIntersect(t, e)) {
        if (r >= n || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
          s.push([t.t, e.t]);
          return;
        }
        var a = splitData(t), l = splitData(e);
        intersectsImpl(a[0], l[0], r + 1, i, s, n), intersectsImpl(a[0], l[1], r + 1, i, s, n), intersectsImpl(a[1], l[0], r + 1, i, s, n), intersectsImpl(a[1], l[1], r + 1, i, s, n);
      }
    }
    PolynomialBezier.prototype.intersections = function(t, e, r) {
      e === void 0 && (e = 2), r === void 0 && (r = 7);
      var i = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i;
    }, PolynomialBezier.shapeSegment = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], true);
    }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], true);
    };
    function crossProduct(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function lineIntersection(t, e, r, i) {
      var s = [t[0], t[1], 1], n = [e[0], e[1], 1], a = [r[0], r[1], 1], l = [i[0], i[1], 1], o = crossProduct(crossProduct(s, n), crossProduct(a, l));
      return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]];
    }
    function polarOffset(t, e, r) {
      return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
    }
    function pointDistance(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function pointEqual(t, e) {
      return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
    }
    function ZigZagModifier() {
    }
    extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function setPoint(t, e, r, i, s, n, a) {
      var l = r - Math.PI / 2, o = r + Math.PI / 2, u = e[0] + Math.cos(r) * i * s, g = e[1] - Math.sin(r) * i * s;
      t.setTripleAt(u, g, u + Math.cos(l) * n, g - Math.sin(l) * n, u + Math.cos(o) * a, g - Math.sin(o) * a, t.length());
    }
    function getPerpendicularVector(t, e) {
      var r = [e[0] - t[0], e[1] - t[1]], i = -Math.PI * 0.5, s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
      return s;
    }
    function getProjectingAngle(t, e) {
      var r = e === 0 ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), s = t.v[r], n = t.v[i], a = getPerpendicularVector(s, n);
      return Math.atan2(0, 1) - Math.atan2(a[1], a[0]);
    }
    function zigZagCorner(t, e, r, i, s, n, a) {
      var l = getProjectingAngle(e, r), o = e.v[r % e._length], u = e.v[r === 0 ? e._length - 1 : r - 1], g = e.v[(r + 1) % e._length], C = n === 2 ? Math.sqrt(Math.pow(o[0] - u[0], 2) + Math.pow(o[1] - u[1], 2)) : 0, p = n === 2 ? Math.sqrt(Math.pow(o[0] - g[0], 2) + Math.pow(o[1] - g[1], 2)) : 0;
      setPoint(t, e.v[r % e._length], l, a, i, p / ((s + 1) * 2), C / ((s + 1) * 2));
    }
    function zigZagSegment(t, e, r, i, s, n) {
      for (var a = 0; a < i; a += 1) {
        var l = (a + 1) / (i + 1), o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, u = e.normalAngle(l), g = e.point(l);
        setPoint(t, g, u, n, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), n = -n;
      }
      return n;
    }
    ZigZagModifier.prototype.processPath = function(t, e, r, i) {
      var s = t._length, n = shapePool.newElement();
      if (n.c = t.c, t.c || (s -= 1), s === 0) return n;
      var a = -1, l = PolynomialBezier.shapeSegment(t, 0);
      zigZagCorner(n, t, 0, e, r, i, a);
      for (var o = 0; o < s; o += 1) a = zigZagSegment(n, l, e, r, i, -a), o === s - 1 && !t.c ? l = null : l = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(n, t, o + 1, e, r, i, a);
      return n;
    }, ZigZagModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
      if (a !== 0) {
        var u, g;
        for (r = 0; r < i; r += 1) {
          if (u = this.shapes[r], g = u.localShapeCollection, !(!u.shape._mdf && !this._mdf && !t)) for (g.releaseShapes(), u.shape._mdf = true, e = u.shape.paths.shapes, n = u.shape.paths._length, s = 0; s < n; s += 1) g.addShape(this.processPath(e[s], a, l, o));
          u.shape.paths = u.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function linearOffset(t, e, r) {
      var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [polarOffset(t, i, r), polarOffset(e, i, r)];
    }
    function offsetSegment(t, e) {
      var r, i, s, n, a, l, o;
      o = linearOffset(t.points[0], t.points[1], e), r = o[0], i = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], n = o[1], o = linearOffset(t.points[2], t.points[3], e), a = o[0], l = o[1];
      var u = lineIntersection(r, i, s, n);
      u === null && (u = i);
      var g = lineIntersection(a, l, s, n);
      return g === null && (g = a), new PolynomialBezier(r, u, g, l);
    }
    function joinLines(t, e, r, i, s) {
      var n = e.points[3], a = r.points[0];
      if (i === 3 || pointEqual(n, a)) return n;
      if (i === 2) {
        var l = -e.tangentAngle(1), o = -r.tangentAngle(0) + Math.PI, u = lineIntersection(n, polarOffset(n, l + Math.PI / 2, 100), a, polarOffset(a, l + Math.PI / 2, 100)), g = u ? pointDistance(u, n) : pointDistance(n, a) / 2, C = polarOffset(n, l, 2 * g * roundCorner);
        return t.setXYAt(C[0], C[1], "o", t.length() - 1), C = polarOffset(a, o, 2 * g * roundCorner), t.setTripleAt(a[0], a[1], a[0], a[1], C[0], C[1], t.length()), a;
      }
      var p = pointEqual(n, e.points[2]) ? e.points[0] : e.points[2], P = pointEqual(a, r.points[1]) ? r.points[3] : r.points[1], y = lineIntersection(p, n, a, P);
      return y && pointDistance(y, n) < s ? (t.setTripleAt(y[0], y[1], y[0], y[1], y[0], y[1], t.length()), y) : n;
    }
    function getIntersection(t, e) {
      var r = t.intersections(e);
      return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null;
    }
    function pruneSegmentIntersection(t, e) {
      var r = t.slice(), i = e.slice(), s = getIntersection(t[t.length - 1], e[0]);
      return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]), s) ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]] : [r, i];
    }
    function pruneIntersections(t) {
      for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
      return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function offsetSegmentSplit(t, e) {
      var r = t.inflectionPoints(), i, s, n, a;
      if (r.length === 0) return [offsetSegment(t, e)];
      if (r.length === 1 || floatEqual(r[1], 1)) return n = t.split(r[0]), i = n[0], s = n[1], [offsetSegment(i, e), offsetSegment(s, e)];
      n = t.split(r[0]), i = n[0];
      var l = (r[1] - r[0]) / (1 - r[0]);
      return n = n[1].split(l), a = n[0], s = n[1], [offsetSegment(i, e), offsetSegment(a, e), offsetSegment(s, e)];
    }
    function OffsetPathModifier() {
    }
    extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
      var s = shapePool.newElement();
      s.c = t.c;
      var n = t.length();
      t.c || (n -= 1);
      var a, l, o, u = [];
      for (a = 0; a < n; a += 1) o = PolynomialBezier.shapeSegment(t, a), u.push(offsetSegmentSplit(o, e));
      if (!t.c) for (a = n - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), u.push(offsetSegmentSplit(o, e));
      u = pruneIntersections(u);
      var g = null, C = null;
      for (a = 0; a < u.length; a += 1) {
        var p = u[a];
        for (C && (g = joinLines(s, C, p[0], r, i)), C = p[p.length - 1], l = 0; l < p.length; l += 1) o = p[l], g && pointEqual(o.points[0], g) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), g = o.points[3];
      }
      return u.length && joinLines(s, C, u[0][0], r, i), s;
    }, OffsetPathModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.amount.v, l = this.miterLimit.v, o = this.lineJoin;
      if (a !== 0) {
        var u, g;
        for (r = 0; r < i; r += 1) {
          if (u = this.shapes[r], g = u.localShapeCollection, !(!u.shape._mdf && !this._mdf && !t)) for (g.releaseShapes(), u.shape._mdf = true, e = u.shape.paths.shapes, n = u.shape.paths._length, s = 0; s < n; s += 1) g.addShape(this.processPath(e[s], a, o, l));
          u.shape.paths = u.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function getFontProperties(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, n, a = 0; a < s; a += 1) switch (n = e[a].toLowerCase(), n) {
        case "italic":
          i = "italic";
          break;
        case "bold":
          r = "700";
          break;
        case "black":
          r = "900";
          break;
        case "medium":
          r = "500";
          break;
        case "regular":
        case "normal":
          r = "400";
          break;
        case "light":
        case "thin":
          r = "200";
          break;
      }
      return { style: i, weight: t.fWeight || r };
    }
    var FontManager = function() {
      var t = 5e3, e = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, r = [];
      r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var i = 127988, s = 917631, n = 917601, a = 917626, l = 65039, o = 8205, u = 127462, g = 127487, C = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function p(x) {
        var A = x.split(","), v, b = A.length, M = [];
        for (v = 0; v < b; v += 1) A[v] !== "sans-serif" && A[v] !== "monospace" && M.push(A[v]);
        return M.join(",");
      }
      function P(x, A) {
        var v = createTag("span");
        v.setAttribute("aria-hidden", true), v.style.fontFamily = A;
        var b = createTag("span");
        b.innerText = "giItT1WQy@!-/#", v.style.position = "absolute", v.style.left = "-10000px", v.style.top = "-10000px", v.style.fontSize = "300px", v.style.fontVariant = "normal", v.style.fontStyle = "normal", v.style.fontWeight = "normal", v.style.letterSpacing = "0", v.appendChild(b), document.body.appendChild(v);
        var M = b.offsetWidth;
        return b.style.fontFamily = p(x) + ", " + A, { node: b, w: M, parent: v };
      }
      function y() {
        var x, A = this.fonts.length, v, b, M = A;
        for (x = 0; x < A; x += 1) this.fonts[x].loaded ? M -= 1 : this.fonts[x].fOrigin === "n" || this.fonts[x].origin === 0 ? this.fonts[x].loaded = true : (v = this.fonts[x].monoCase.node, b = this.fonts[x].monoCase.w, v.offsetWidth !== b ? (M -= 1, this.fonts[x].loaded = true) : (v = this.fonts[x].sansCase.node, b = this.fonts[x].sansCase.w, v.offsetWidth !== b && (M -= 1, this.fonts[x].loaded = true)), this.fonts[x].loaded && (this.fonts[x].sansCase.parent.parentNode.removeChild(this.fonts[x].sansCase.parent), this.fonts[x].monoCase.parent.parentNode.removeChild(this.fonts[x].monoCase.parent)));
        M !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function d(x, A) {
        var v = document.body && A ? "svg" : "canvas", b, M = getFontProperties(x);
        if (v === "svg") {
          var I = createNS("text");
          I.style.fontSize = "100px", I.setAttribute("font-family", x.fFamily), I.setAttribute("font-style", M.style), I.setAttribute("font-weight", M.weight), I.textContent = "1", x.fClass ? (I.style.fontFamily = "inherit", I.setAttribute("class", x.fClass)) : I.style.fontFamily = x.fFamily, A.appendChild(I), b = I;
        } else {
          var R = new OffscreenCanvas(500, 500).getContext("2d");
          R.font = M.style + " " + M.weight + " 100px " + x.fFamily, b = R;
        }
        function z(N) {
          return v === "svg" ? (b.textContent = N, b.getComputedTextLength()) : b.measureText(N).width;
        }
        return { measureText: z };
      }
      function _(x, A) {
        if (!x) {
          this.isLoaded = true;
          return;
        }
        if (this.chars) {
          this.isLoaded = true, this.fonts = x.list;
          return;
        }
        if (!document.body) {
          this.isLoaded = true, x.list.forEach(function(Y) {
            Y.helper = d(Y), Y.cache = {};
          }), this.fonts = x.list;
          return;
        }
        var v = x.list, b, M = v.length, I = M;
        for (b = 0; b < M; b += 1) {
          var R = true, z, N;
          if (v[b].loaded = false, v[b].monoCase = P(v[b].fFamily, "monospace"), v[b].sansCase = P(v[b].fFamily, "sans-serif"), !v[b].fPath) v[b].loaded = true, I -= 1;
          else if (v[b].fOrigin === "p" || v[b].origin === 3) {
            if (z = document.querySelectorAll('style[f-forigin="p"][f-family="' + v[b].fFamily + '"], style[f-origin="3"][f-family="' + v[b].fFamily + '"]'), z.length > 0 && (R = false), R) {
              var W = createTag("style");
              W.setAttribute("f-forigin", v[b].fOrigin), W.setAttribute("f-origin", v[b].origin), W.setAttribute("f-family", v[b].fFamily), W.type = "text/css", W.innerText = "@font-face {font-family: " + v[b].fFamily + "; font-style: normal; src: url('" + v[b].fPath + "');}", A.appendChild(W);
            }
          } else if (v[b].fOrigin === "g" || v[b].origin === 1) {
            for (z = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), N = 0; N < z.length; N += 1) z[N].href.indexOf(v[b].fPath) !== -1 && (R = false);
            if (R) {
              var j = createTag("link");
              j.setAttribute("f-forigin", v[b].fOrigin), j.setAttribute("f-origin", v[b].origin), j.type = "text/css", j.rel = "stylesheet", j.href = v[b].fPath, document.body.appendChild(j);
            }
          } else if (v[b].fOrigin === "t" || v[b].origin === 2) {
            for (z = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), N = 0; N < z.length; N += 1) v[b].fPath === z[N].src && (R = false);
            if (R) {
              var H = createTag("link");
              H.setAttribute("f-forigin", v[b].fOrigin), H.setAttribute("f-origin", v[b].origin), H.setAttribute("rel", "stylesheet"), H.setAttribute("href", v[b].fPath), A.appendChild(H);
            }
          }
          v[b].helper = d(v[b], A), v[b].cache = {}, this.fonts.push(v[b]);
        }
        I === 0 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function f(x) {
        if (x) {
          this.chars || (this.chars = []);
          var A, v = x.length, b, M = this.chars.length, I;
          for (A = 0; A < v; A += 1) {
            for (b = 0, I = false; b < M; ) this.chars[b].style === x[A].style && this.chars[b].fFamily === x[A].fFamily && this.chars[b].ch === x[A].ch && (I = true), b += 1;
            I || (this.chars.push(x[A]), M += 1);
          }
        }
      }
      function c(x, A, v) {
        for (var b = 0, M = this.chars.length; b < M; ) {
          if (this.chars[b].ch === x && this.chars[b].style === A && this.chars[b].fFamily === v) return this.chars[b];
          b += 1;
        }
        return (typeof x == "string" && x.charCodeAt(0) !== 13 || !x) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", x, A, v)), e;
      }
      function h(x, A, v) {
        var b = this.getFontByName(A), M = x;
        if (!b.cache[M]) {
          var I = b.helper;
          if (x === " ") {
            var R = I.measureText("|" + x + "|"), z = I.measureText("||");
            b.cache[M] = (R - z) / 100;
          } else b.cache[M] = I.measureText(x) / 100;
        }
        return b.cache[M] * v;
      }
      function m2(x) {
        for (var A = 0, v = this.fonts.length; A < v; ) {
          if (this.fonts[A].fName === x) return this.fonts[A];
          A += 1;
        }
        return this.fonts[0];
      }
      function S(x) {
        var A = 0, v = x.charCodeAt(0);
        if (v >= 55296 && v <= 56319) {
          var b = x.charCodeAt(1);
          b >= 56320 && b <= 57343 && (A = (v - 55296) * 1024 + b - 56320 + 65536);
        }
        return A;
      }
      function E(x, A) {
        var v = x.toString(16) + A.toString(16);
        return C.indexOf(v) !== -1;
      }
      function T(x) {
        return x === o;
      }
      function k(x) {
        return x === l;
      }
      function F(x) {
        var A = S(x);
        return A >= u && A <= g;
      }
      function O(x) {
        return F(x.substr(0, 2)) && F(x.substr(2, 2));
      }
      function V(x) {
        return r.indexOf(x) !== -1;
      }
      function L(x, A) {
        var v = S(x.substr(A, 2));
        if (v !== i) return false;
        var b = 0;
        for (A += 2; b < 5; ) {
          if (v = S(x.substr(A, 2)), v < n || v > a) return false;
          b += 1, A += 2;
        }
        return S(x.substr(A, 2)) === s;
      }
      function D() {
        this.isLoaded = true;
      }
      var B = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      B.isModifier = E, B.isZeroWidthJoiner = T, B.isFlagEmoji = O, B.isRegionalCode = F, B.isCombinedCharacter = V, B.isRegionalFlag = L, B.isVariationSelector = k, B.BLACK_FLAG_CODE_POINT = i;
      var w = { addChars: f, addFonts: _, getCharData: c, getFontByName: m2, measureText: h, checkLoadedFonts: y, setIsLoaded: D };
      return B.prototype = w, B;
    }();
    function SlotManager(t) {
      this.animationData = t;
    }
    SlotManager.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    };
    function slotFactory(t) {
      return new SlotManager(t);
    }
    function RenderableElement() {
    }
    RenderableElement.prototype = { initRenderable: function() {
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
      var e, r = this.renderableComponents.length;
      for (e = 0; e < r; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
    }, sourceRectAtTime: function() {
      return { top: 0, left: 0, width: 100, height: 100 };
    }, getLayerSize: function() {
      return this.data.ty === 5 ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
    } };
    var getBlendMode = /* @__PURE__ */ function() {
      var t = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" };
      return function(e) {
        return t[e] || "";
      };
    }();
    function SliderEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function AngleEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function ColorEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function PointEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function LayerIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function MaskIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function CheckboxEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(t, e) {
      var r = t.ef || [];
      this.effectElements = [];
      var i, s = r.length, n;
      for (i = 0; i < s; i += 1) n = new GroupEffect(r[i], e), this.effectElements.push(n);
    }
    function GroupEffect(t, e) {
      this.init(t, e);
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var r, i = this.data.ef.length, s, n = this.data.ef;
      for (r = 0; r < i; r += 1) {
        switch (s = null, n[r].ty) {
          case 0:
            s = new SliderEffect(n[r], e, this);
            break;
          case 1:
            s = new AngleEffect(n[r], e, this);
            break;
          case 2:
            s = new ColorEffect(n[r], e, this);
            break;
          case 3:
            s = new PointEffect(n[r], e, this);
            break;
          case 4:
          case 7:
            s = new CheckboxEffect(n[r], e, this);
            break;
          case 10:
            s = new LayerIndexEffect(n[r], e, this);
            break;
          case 11:
            s = new MaskIndexEffect(n[r], e, this);
            break;
          case 5:
            s = new EffectsManager(n[r], e);
            break;
          default:
            s = new NoValueEffect(n[r]);
            break;
        }
        s && this.effectElements.push(s);
      }
    };
    function BaseElement() {
    }
    BaseElement.prototype = { checkMasks: function() {
      if (!this.data.hasMask) return false;
      for (var e = 0, r = this.data.masksProperties.length; e < r; ) {
        if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== false) return true;
        e += 1;
      }
      return false;
    }, initExpressions: function() {
      var e = getExpressionInterfaces();
      if (e) {
        var r = e("layer"), i = e("effects"), s = e("shape"), n = e("text"), a = e("comp");
        this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
        var l = i.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface);
      }
    }, setBlendMode: function() {
      var e = getBlendMode(this.data.bm), r = this.baseElement || this.layerElement;
      r.style["mix-blend-mode"] = e;
    }, initBaseData: function(e, r, i) {
      this.globalData = r, this.comp = i, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } };
    function FrameElement() {
    }
    FrameElement.prototype = { initFrame: function() {
      this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
    }, prepareProperties: function(e, r) {
      var i, s = this.dynamicProperties.length;
      for (i = 0; i < s; i += 1) (r || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = true, this._mdf = true));
    }, addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
    } };
    function FootageElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r);
    }
    FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      var t = getExpressionInterfaces();
      if (t) {
        var e = t("footage");
        this.layerInterface = e(this);
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    };
    function AudioElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = false, this._canPlay = false;
      var i = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this);
    }
    AudioElement.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder) this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var r = this._volume * this._volumeMultiplier;
      this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r));
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = false;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = false, this._canPlay = false;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = true;
    }, AudioElement.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, AudioElement.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    };
    function BaseRenderer() {
    }
    BaseRenderer.prototype.checkLayers = function(t) {
      var e, r = this.layers.length, i;
      for (this.completeLayers = true, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : false;
      this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(t) {
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
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(t) {
      return new AudioElement(t, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(t) {
      return new FootageElement(t, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(t) {
      this.completeLayers = false;
      var e, r = t.length, i, s = this.layers.length;
      for (e = 0; e < r; e += 1) for (i = 0; i < s; ) {
        if (this.layers[i].id === t[e].id) {
          this.layers[i] = t[e];
          break;
        }
        i += 1;
      }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
      for (var i = this.elements, s = this.layers, n = 0, a = s.length; n < a; ) s[n].ind == e && (!i[n] || i[n] === true ? (this.buildItem(n), this.addPendingElement(t)) : (r.push(i[n]), i[n].setAsParent(), s[n].parent !== void 0 ? this.buildElementParenting(t, s[n].parent, r) : t.setHierarchy(r))), n += 1;
    }, BaseRenderer.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) if (t[e].xt) {
        var i = this.createComp(t[e]);
        i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
      }
    }, BaseRenderer.prototype.getElementById = function(t) {
      var e, r = this.elements.length;
      for (e = 0; e < r; e += 1) if (this.elements[e].data.ind === t) return this.elements[e];
      return null;
    }, BaseRenderer.prototype.getElementByPath = function(t) {
      var e = t.shift(), r;
      if (typeof e == "number") r = this.elements[e];
      else {
        var i, s = this.elements.length;
        for (i = 0; i < s; i += 1) if (this.elements[i].data.nm === e) {
          r = this.elements[i];
          break;
        }
      }
      return t.length === 0 ? r : r.getElementByPath(t);
    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
    };
    var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
    function TransformElement() {
    }
    TransformElement.prototype = { initTransform: function() {
      var e = new Matrix();
      this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: false, _localMatMdf: false, _opMdf: false, mat: e, localMat: e, localOpacity: 1 }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
    }, renderTransform: function() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var e, r = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
        if (!this.finalTransform._matMdf) for (; i < s; ) {
          if (this.hierarchy[i].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = true;
            break;
          }
          i += 1;
        }
        if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; i < s; i += 1) r.multiply(this.hierarchy[i].finalTransform.mProp.v);
      }
      this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
    }, renderLocalTransform: function() {
      if (this.localTransforms) {
        var e = 0, r = this.localTransforms.length;
        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; e < r; ) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = true), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = true), e += 1;
        if (this.finalTransform._localMatMdf) {
          var i = this.finalTransform.localMat;
          for (this.localTransforms[0].matrix.clone(i), e = 1; e < r; e += 1) {
            var s = this.localTransforms[e].matrix;
            i.multiply(s);
          }
          i.multiply(this.finalTransform.mat);
        }
        if (this.finalTransform._opMdf) {
          var n = this.finalTransform.localOpacity;
          for (e = 0; e < r; e += 1) n *= this.localTransforms[e].opacity * 0.01;
          this.finalTransform.localOpacity = n;
        }
      }
    }, searchEffectTransforms: function() {
      if (this.renderableEffectsManager) {
        var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
        if (e.length) {
          this.localTransforms = [], this.finalTransform.localMat = new Matrix();
          var r = 0, i = e.length;
          for (r = 0; r < i; r += 1) this.localTransforms.push(e[r]);
        }
      }
    }, globalToLocal: function(e) {
      var r = [];
      r.push(this.finalTransform);
      for (var i = true, s = this.comp; i; ) s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), s = s.comp) : i = false;
      var n, a = r.length, l;
      for (n = 0; n < a; n += 1) l = r[n].mat.applyToPointArray(0, 0, 0), e = [e[0] - l[0], e[1] - l[1], 0];
      return e;
    }, mHelper: new Matrix() };
    function MaskElement(t, e, r) {
      this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var i = this.globalData.defs, s, n = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(n), this.solidPath = "";
      var a, l = this.masksProperties, o = 0, u = [], g, C, p = createElementID(), P, y, d, _, f = "clipPath", c = "clip-path";
      for (s = 0; s < n; s += 1) if ((l[s].mode !== "a" && l[s].mode !== "n" || l[s].inv || l[s].o.k !== 100 || l[s].o.x) && (f = "mask", c = "mask"), (l[s].mode === "s" || l[s].mode === "i") && o === 0 ? (P = createNS("rect"), P.setAttribute("fill", "#ffffff"), P.setAttribute("width", this.element.comp.data.w || 0), P.setAttribute("height", this.element.comp.data.h || 0), u.push(P)) : P = null, a = createNS("path"), l[s].mode === "n") this.viewData[s] = { op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3), elem: a, lastPath: "" }, i.appendChild(a);
      else {
        o += 1, a.setAttribute("fill", l[s].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero");
        var h;
        if (l[s].x.k !== 0 ? (f = "mask", c = "mask", _ = PropertyFactory.getProp(this.element, l[s].x, 0, null, this.element), h = createElementID(), y = createNS("filter"), y.setAttribute("id", h), d = createNS("feMorphology"), d.setAttribute("operator", "erode"), d.setAttribute("in", "SourceGraphic"), d.setAttribute("radius", "0"), y.appendChild(d), i.appendChild(y), a.setAttribute("stroke", l[s].mode === "s" ? "#000000" : "#ffffff")) : (d = null, _ = null), this.storedData[s] = { elem: a, x: _, expan: d, lastPath: "", lastOperator: "", filterId: h, lastRadius: 0 }, l[s].mode === "i") {
          C = u.length;
          var m2 = createNS("g");
          for (g = 0; g < C; g += 1) m2.appendChild(u[g]);
          var S = createNS("mask");
          S.setAttribute("mask-type", "alpha"), S.setAttribute("id", p + "_" + o), S.appendChild(a), i.appendChild(S), m2.setAttribute("mask", "url(" + getLocationHref() + "#" + p + "_" + o + ")"), u.length = 0, u.push(m2);
        } else u.push(a);
        l[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = { elem: a, lastPath: "", op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3), invRect: P }, this.viewData[s].prop.k || this.drawPath(l[s], this.viewData[s].prop.v, this.viewData[s]);
      }
      for (this.maskElement = createNS(f), n = u.length, s = 0; s < n; s += 1) this.maskElement.appendChild(u[s]);
      o > 0 && (this.maskElement.setAttribute("id", p), this.element.maskedElement.setAttribute(c, "url(" + getLocationHref() + "#" + p + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    MaskElement.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, MaskElement.prototype.renderFrame = function(t) {
      var e = this.element.finalTransform.mat, r, i = this.masksProperties.length;
      for (r = 0; r < i; r += 1) if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
        var s = this.storedData[r].expan;
        this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2));
      }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
    }, MaskElement.prototype.drawPath = function(t, e, r) {
      var i = " M" + e.v[0][0] + "," + e.v[0][1], s, n;
      for (n = e._length, s = 1; s < n; s += 1) i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
      if (e.c && n > 1 && (i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== i) {
        var a = "";
        r.elem && (e.c && (a = t.inv ? this.solidPath + i : i), r.elem.setAttribute("d", a)), r.lastPath = i;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var filtersFactory = function() {
      var t = {};
      t.createFilter = e, t.createAlphaToLuminanceFilter = r;
      function e(i, s) {
        var n = createNS("filter");
        return n.setAttribute("id", i), s !== true && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n;
      }
      function r() {
        var i = createNS("feColorMatrix");
        return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i;
      }
      return t;
    }(), featureSupport = function() {
      var t = { maskType: true, svgLumaHidden: true, offscreenCanvas: typeof OffscreenCanvas < "u" };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = false), t;
    }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
    function SVGEffects(t) {
      var e, r = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), n = filtersFactory.createFilter(s, true), a = 0;
      this.filters = [];
      var l;
      for (e = 0; e < i; e += 1) {
        l = null;
        var o = t.data.ef[e].ty;
        if (registeredEffects$1[o]) {
          var u = registeredEffects$1[o].effect;
          l = new u(n, t.effectsManager.effectElements[e], t, idPrefix + a, r), r = idPrefix + a, registeredEffects$1[o].countsAsEffect && (a += 1);
        }
        l && this.filters.push(l);
      }
      a && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    SVGEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
    }, SVGEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    };
    function SVGBaseElement() {
    }
    SVGBaseElement.prototype = { initRendererElement: function() {
      this.layerElement = createNS("g");
    }, createContainerElements: function() {
      this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
      var e = null;
      if (this.data.td) {
        this.matteMasks = {};
        var r = createNS("g");
        r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), e = r, this.globalData.defs.appendChild(r);
      } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
        var i = createNS("clipPath"), s = createNS("path");
        s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var n = createElementID();
        if (i.setAttribute("id", n), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
          var a = createNS("g");
          a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")");
      }
      this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
    }, getMatte: function(e) {
      if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
        var r = this.layerId + "_" + e, i, s, n, a;
        if (e === 1 || e === 3) {
          var l = createNS("mask");
          l.setAttribute("id", r), l.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), this.globalData.defs.appendChild(l), !featureSupport.maskType && e === 1 && (l.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(n), l.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"));
        } else if (e === 2) {
          var o = createNS("mask");
          o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
          var u = createNS("g");
          o.appendChild(u), i = createElementID(), s = filtersFactory.createFilter(i);
          var g = createNS("feComponentTransfer");
          g.setAttribute("in", "SourceGraphic"), s.appendChild(g);
          var C = createNS("feFuncA");
          C.setAttribute("type", "table"), C.setAttribute("tableValues", "1.0 0.0"), g.appendChild(C), this.globalData.defs.appendChild(s);
          var p = createNS("rect");
          p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), u.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), u.appendChild(p), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), u.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), u.appendChild(p), a.appendChild(this.layerElement), u.appendChild(a)), this.globalData.defs.appendChild(o);
        }
        this.matteMasks[e] = r;
      }
      return this.matteMasks[e];
    }, setMatte: function(e) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")");
    } };
    function HierarchyElement() {
    }
    HierarchyElement.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = false, this.checkParenting();
    }, setHierarchy: function(e) {
      this.hierarchy = e;
    }, setAsParent: function() {
      this._isParent = true;
    }, checkParenting: function() {
      this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
    } };
    function RenderableDOMElement() {
    }
    (function() {
      var t = { initElement: function(r, i, s) {
        this.initFrame(), this.initBaseData(r, i, s), this.initTransform(r, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
      }, hide: function() {
        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
          var r = this.baseElement || this.layerElement;
          r.style.display = "none", this.hidden = true;
        }
      }, show: function() {
        if (this.isInRange && !this.isTransparent) {
          if (!this.data.hd) {
            var r = this.baseElement || this.layerElement;
            r.style.display = "block";
          }
          this.hidden = false, this._isFirstFrame = true;
        }
      }, renderFrame: function() {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
      }, renderInnerContent: function() {
      }, prepareFrame: function(r) {
        this._mdf = false, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency();
      }, destroy: function() {
        this.innerElem = null, this.destroyBaseElement();
      } };
      extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement);
    })();
    function IImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function ProcessedElement(t, e) {
      this.elem = t, this.pos = e;
    }
    function IShapeElement() {
    }
    IShapeElement.prototype = { addShapeToModifiers: function(e) {
      var r, i = this.shapeModifiers.length;
      for (r = 0; r < i; r += 1) this.shapeModifiers[r].addShape(e);
    }, isShapeInAnimatedModifiers: function(e) {
      for (var r = 0, i = this.shapeModifiers.length; r < i; ) if (this.shapeModifiers[r].isAnimatedWithShape(e)) return true;
      return false;
    }, renderModifiers: function() {
      if (this.shapeModifiers.length) {
        var e, r = this.shapes.length;
        for (e = 0; e < r; e += 1) this.shapes[e].sh.reset();
        r = this.shapeModifiers.length;
        var i;
        for (e = r - 1; e >= 0 && (i = this.shapeModifiers[e].processShapes(this._isFirstFrame), !i); e -= 1) ;
      }
    }, searchProcessedElement: function(e) {
      for (var r = this.processedElements, i = 0, s = r.length; i < s; ) {
        if (r[i].elem === e) return r[i].pos;
        i += 1;
      }
      return 0;
    }, addProcessedElement: function(e, r) {
      for (var i = this.processedElements, s = i.length; s; ) if (s -= 1, i[s].elem === e) {
        i[s].pos = r;
        return;
      }
      i.push(new ProcessedElement(e, r));
    }, prepareFrame: function(e) {
      this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
    } };
    var lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
    function SVGShapeData(t, e, r) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
      for (var i = 0, s = t.length; i < s; ) {
        if (t[i].mProps.dynamicProperties.length) {
          this._isAnimated = true;
          break;
        }
        i += 1;
      }
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = true;
    };
    function SVGStyleData(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = t.hd === true, this.pElem = createNS("path"), this.msElem = null;
    }
    SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = false;
    };
    function DashProperty(t, e, r, i) {
      this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = false, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
      var s, n = e.length || 0, a;
      for (s = 0; s < n; s += 1) a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = { n: e[s].n, p: a };
      this.k || this.getValue(true), this._isAnimated = this.k;
    }
    DashProperty.prototype.getValue = function(t) {
      if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, r = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < r; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty);
    function SVGStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
    function SVGFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
    function SVGNoStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
    function GradientProperty(t, e, r) {
      this.data = e, this.c = createTypedArray("uint8c", e.p * 4);
      var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
      this.o = createTypedArray("float32", i), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
    }
    GradientProperty.prototype.comparePoints = function(t, e) {
      for (var r = 0, i = this.o.length / 2, s; r < i; ) {
        if (s = Math.abs(t[r * 4] - t[e * 4 + r * 2]), s > 0.01) return false;
        r += 1;
      }
      return true;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4) return false;
      if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e; ) {
        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return false;
        t += 1;
      }
      else if (!this.comparePoints(this.data.k.k, this.data.p)) return false;
      return true;
    }, GradientProperty.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
        var e, r = this.data.p * 4, i, s;
        for (e = 0; e < r; e += 1) i = e % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
        if (this.o.length) for (r = this.prop.v.length, e = this.data.p * 4; e < r; e += 1) i = e % 2 === 0 ? 100 : 1, s = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== s && (this.o[e - this.data.p * 4] = s, this._omdf = !t);
        this._mdf = !t;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
    function SVGGradientFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
    }
    SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
      this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
      var r = createElementID(), i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
      i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
      var s = [], n, a, l;
      for (l = e.g.p * 4, a = 0; a < l; a += 4) n = createNS("stop"), i.appendChild(n), s.push(n);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var r, i, s, n = createNS("mask"), a = createNS("path");
        n.appendChild(a);
        var l = createElementID(), o = createElementID();
        n.setAttribute("id", o);
        var u = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        u.setAttribute("id", l), u.setAttribute("spreadMethod", "pad"), u.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var g = this.stops;
        for (i = t.g.p * 4; i < s; i += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), u.appendChild(r), g.push(r);
        a.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), t.ty === "gs" && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), this.of = u, this.ms = n, this.ost = g, this.maskId = o, e.msElem = a;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
    function SVGGradientStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function SVGTransformData(t, e, r) {
      this.transform = { mProps: t, op: e, container: r }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var buildShapeString = function(e, r, i, s) {
      if (r === 0) return "";
      var n = e.o, a = e.i, l = e.v, o, u = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
      for (o = 1; o < r; o += 1) u += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[o][0], a[o][1]) + " " + s.applyToPointStringified(l[o][0], l[o][1]);
      return i && r && (u += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]), u += "z"), u;
    }, SVGElementsRenderer = function() {
      var t = new Matrix(), e = new Matrix(), r = { createRenderFunction: i };
      function i(C) {
        switch (C.ty) {
          case "fl":
            return l;
          case "gf":
            return u;
          case "gs":
            return o;
          case "st":
            return g;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return a;
          case "tr":
            return s;
          case "no":
            return n;
          default:
            return null;
        }
      }
      function s(C, p, P) {
        (P || p.transform.op._mdf) && p.transform.container.setAttribute("opacity", p.transform.op.v), (P || p.transform.mProps._mdf) && p.transform.container.setAttribute("transform", p.transform.mProps.v.to2dCSS());
      }
      function n() {
      }
      function a(C, p, P) {
        var y, d, _, f, c, h, m2 = p.styles.length, S = p.lvl, E, T, k, F;
        for (h = 0; h < m2; h += 1) {
          if (f = p.sh._mdf || P, p.styles[h].lvl < S) {
            for (T = e.reset(), k = S - p.styles[h].lvl, F = p.transformers.length - 1; !f && k > 0; ) f = p.transformers[F].mProps._mdf || f, k -= 1, F -= 1;
            if (f) for (k = S - p.styles[h].lvl, F = p.transformers.length - 1; k > 0; ) T.multiply(p.transformers[F].mProps.v), k -= 1, F -= 1;
          } else T = t;
          if (E = p.sh.paths, d = E._length, f) {
            for (_ = "", y = 0; y < d; y += 1) c = E.shapes[y], c && c._length && (_ += buildShapeString(c, c._length, c.c, T));
            p.caches[h] = _;
          } else _ = p.caches[h];
          p.styles[h].d += C.hd === true ? "" : _, p.styles[h]._mdf = f || p.styles[h]._mdf;
        }
      }
      function l(C, p, P) {
        var y = p.style;
        (p.c._mdf || P) && y.pElem.setAttribute("fill", "rgb(" + bmFloor(p.c.v[0]) + "," + bmFloor(p.c.v[1]) + "," + bmFloor(p.c.v[2]) + ")"), (p.o._mdf || P) && y.pElem.setAttribute("fill-opacity", p.o.v);
      }
      function o(C, p, P) {
        u(C, p, P), g(C, p, P);
      }
      function u(C, p, P) {
        var y = p.gf, d = p.g._hasOpacity, _ = p.s.v, f = p.e.v;
        if (p.o._mdf || P) {
          var c = C.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          p.style.pElem.setAttribute(c, p.o.v);
        }
        if (p.s._mdf || P) {
          var h = C.t === 1 ? "x1" : "cx", m2 = h === "x1" ? "y1" : "cy";
          y.setAttribute(h, _[0]), y.setAttribute(m2, _[1]), d && !p.g._collapsable && (p.of.setAttribute(h, _[0]), p.of.setAttribute(m2, _[1]));
        }
        var S, E, T, k;
        if (p.g._cmdf || P) {
          S = p.cst;
          var F = p.g.c;
          for (T = S.length, E = 0; E < T; E += 1) k = S[E], k.setAttribute("offset", F[E * 4] + "%"), k.setAttribute("stop-color", "rgb(" + F[E * 4 + 1] + "," + F[E * 4 + 2] + "," + F[E * 4 + 3] + ")");
        }
        if (d && (p.g._omdf || P)) {
          var O = p.g.o;
          for (p.g._collapsable ? S = p.cst : S = p.ost, T = S.length, E = 0; E < T; E += 1) k = S[E], p.g._collapsable || k.setAttribute("offset", O[E * 2] + "%"), k.setAttribute("stop-opacity", O[E * 2 + 1]);
        }
        if (C.t === 1) (p.e._mdf || P) && (y.setAttribute("x2", f[0]), y.setAttribute("y2", f[1]), d && !p.g._collapsable && (p.of.setAttribute("x2", f[0]), p.of.setAttribute("y2", f[1])));
        else {
          var V;
          if ((p.s._mdf || p.e._mdf || P) && (V = Math.sqrt(Math.pow(_[0] - f[0], 2) + Math.pow(_[1] - f[1], 2)), y.setAttribute("r", V), d && !p.g._collapsable && p.of.setAttribute("r", V)), p.e._mdf || p.h._mdf || p.a._mdf || P) {
            V || (V = Math.sqrt(Math.pow(_[0] - f[0], 2) + Math.pow(_[1] - f[1], 2)));
            var L = Math.atan2(f[1] - _[1], f[0] - _[0]), D = p.h.v;
            D >= 1 ? D = 0.99 : D <= -1 && (D = -0.99);
            var B = V * D, w = Math.cos(L + p.a.v) * B + _[0], x = Math.sin(L + p.a.v) * B + _[1];
            y.setAttribute("fx", w), y.setAttribute("fy", x), d && !p.g._collapsable && (p.of.setAttribute("fx", w), p.of.setAttribute("fy", x));
          }
        }
      }
      function g(C, p, P) {
        var y = p.style, d = p.d;
        d && (d._mdf || P) && d.dashStr && (y.pElem.setAttribute("stroke-dasharray", d.dashStr), y.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), p.c && (p.c._mdf || P) && y.pElem.setAttribute("stroke", "rgb(" + bmFloor(p.c.v[0]) + "," + bmFloor(p.c.v[1]) + "," + bmFloor(p.c.v[2]) + ")"), (p.o._mdf || P) && y.pElem.setAttribute("stroke-opacity", p.o.v), (p.w._mdf || P) && (y.pElem.setAttribute("stroke-width", p.w.v), y.msElem && y.msElem.setAttribute("stroke-width", p.w.v));
      }
      return r;
    }();
    function SVGShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var t, e = this.shapes.length, r, i, s = this.stylesList.length, n, a = [], l = false;
      for (i = 0; i < s; i += 1) {
        for (n = this.stylesList[i], l = false, a.length = 0, t = 0; t < e; t += 1) r = this.shapes[t], r.styles.indexOf(n) !== -1 && (a.push(r), l = r._isAnimated || l);
        a.length > 1 && l && this.setShapesAsAnimated(a);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) t[e].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
      var r, i = new SVGStyleData(t, e), s = i.pElem;
      if (t.ty === "st") r = new SVGStrokeStyleData(this, t, i);
      else if (t.ty === "fl") r = new SVGFillStyleData(this, t, i);
      else if (t.ty === "gf" || t.ty === "gs") {
        var n = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
        r = new n(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"));
      } else t.ty === "no" && (r = new SVGNoStyleData(this, t, i));
      return (t.ty === "st" || t.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
    }, SVGShapeElement.prototype.createGroupElement = function(t) {
      var e = new ShapeGroupData();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
      var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
      return this.addToAnimatedContents(t, i), i;
    }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
      var i = 4;
      t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
      var s = ShapePropertyFactory.getShapeProp(this, t, i, this), n = new SVGShapeData(e, r, s);
      return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
      for (var r = 0, i = this.animatedContents.length; r < i; ) {
        if (this.animatedContents[r].element === e) return;
        r += 1;
      }
      this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t });
    }, SVGShapeElement.prototype.setElementStyles = function(t) {
      var e = t.styles, r, i = this.stylesList.length;
      for (r = 0; r < i; r += 1) this.stylesList[r].closed || e.push(this.stylesList[r]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = true;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, n, a) {
      var l = [].concat(n), o, u = t.length - 1, g, C, p = [], P = [], y, d, _;
      for (o = u; o >= 0; o -= 1) {
        if (_ = this.searchProcessedElement(t[o]), _ ? e[o] = r[_ - 1] : t[o]._render = a, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") _ ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), p.push(e[o].style);
        else if (t[o].ty === "gr") {
          if (!_) e[o] = this.createGroupElement(t[o]);
          else for (C = e[o].it.length, g = 0; g < C; g += 1) e[o].prevViewData[g] = e[o].it[g];
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, l, a), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
        } else t[o].ty === "tr" ? (_ || (e[o] = this.createTransformElement(t[o], i)), y = e[o].transform, l.push(y)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (_ || (e[o] = this.createShapeElement(t[o], l, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (_ ? (d = e[o], d.closed = false) : (d = ShapeModifiers.getModifier(t[o].ty), d.init(this, t[o]), e[o] = d, this.shapeModifiers.push(d)), P.push(d)) : t[o].ty === "rp" && (_ ? (d = e[o], d.closed = true) : (d = ShapeModifiers.getModifier(t[o].ty), e[o] = d, d.init(this, t, o, e), this.shapeModifiers.push(d), a = false), P.push(d));
        this.addProcessedElement(t[o], o + 1);
      }
      for (u = p.length, o = 0; o < u; o += 1) p[o].closed = true;
      for (u = P.length, o = 0; o < u; o += 1) P[o].closed = true;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var t, e = this.animatedContents.length, r;
      for (t = 0; t < e; t += 1) r = this.animatedContents[t], (this._isFirstFrame || r.element._isAnimated) && r.data !== true && r.fn(r.data, r.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    };
    function LetterProps(t, e, r, i, s, n) {
      this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = n, this._mdf = { o: true, sw: !!e, sc: !!r, fc: !!i, m: true, p: true };
    }
    LetterProps.prototype.update = function(t, e, r, i, s, n) {
      this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false, this._mdf.p = false;
      var a = false;
      return this.o !== t && (this.o = t, this._mdf.o = true, a = true), this.sw !== e && (this.sw = e, this._mdf.sw = true, a = true), this.sc !== r && (this.sc = r, this._mdf.sc = true, a = true), this.fc !== i && (this.fc = i, this._mdf.fc = true, a = true), this.m !== s && (this.m = s, this._mdf.m = true, a = true), n.length && (this.p[0] !== n[0] || this.p[1] !== n[1] || this.p[4] !== n[4] || this.p[5] !== n[5] || this.p[12] !== n[12] || this.p[13] !== n[13]) && (this.p = n, this._mdf.p = true, a = true), a;
    };
    function TextProperty(t, e) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: false, strokeColorAnim: false, strokeWidthAnim: false, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: false }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t;
    }, TextProperty.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(t) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, r = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = true, this._mdf = false;
        var i, s = this.effectsSequence.length, n = t || this.data.d.k[this.keysIndex].s;
        for (i = 0; i < s; i += 1) r !== this.keysIndex ? n = this.effectsSequence[i](n, n.t) : n = this.effectsSequence[i](this.currentData, n.t);
        e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = false, this.frameId = this.elem.globalData.frameId;
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e); ) r += 1;
      return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(t) {
      for (var e = [], r = 0, i = t.length, s, n, a = false, l = false, o = ""; r < i; ) a = l, l = false, s = t.charCodeAt(r), o = t.charAt(r), FontManager.isCombinedCharacter(s) ? a = true : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? o = t.substr(r, 14) : (n = t.charCodeAt(r + 1), n >= 56320 && n <= 57343 && (FontManager.isModifier(s, n) ? (o = t.substr(r, 2), a = true) : FontManager.isFlagEmoji(t.substr(r, 4)) ? o = t.substr(r, 4) : o = t.substr(r, 2))) : s > 56319 ? (n = t.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (a = true)) : FontManager.isZeroWidthJoiner(s) && (a = true, l = true), a ? (e[e.length - 1] += o, a = false) : e.push(o), r += o.length;
      return e;
    }, TextProperty.prototype.completeTextData = function(t) {
      t.__complete = true;
      var e = this.elem.globalData.fontManager, r = this.data, i = [], s, n, a, l = 0, o, u = r.m.g, g = 0, C = 0, p = 0, P = [], y = 0, d = 0, _, f, c = e.getFontByName(t.f), h, m2 = 0, S = getFontProperties(c);
      t.fWeight = S.weight, t.fStyle = S.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), n = t.finalText.length, t.finalLineHeight = t.lh;
      var E = t.tr / 1e3 * t.finalSize, T;
      if (t.sz) for (var k = true, F = t.sz[0], O = t.sz[1], V, L; k; ) {
        L = this.buildFinalText(t.t), V = 0, y = 0, n = L.length, E = t.tr / 1e3 * t.finalSize;
        var D = -1;
        for (s = 0; s < n; s += 1) T = L[s].charCodeAt(0), a = false, L[s] === " " ? D = s : (T === 13 || T === 3) && (y = 0, a = true, V += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (h = e.getCharData(L[s], c.fStyle, c.fFamily), m2 = a ? 0 : h.w * t.finalSize / 100) : m2 = e.measureText(L[s], t.f, t.finalSize), y + m2 > F && L[s] !== " " ? (D === -1 ? n += 1 : s = D, V += t.finalLineHeight || t.finalSize * 1.2, L.splice(s, D === s ? 1 : 0, "\r"), D = -1, y = 0) : (y += m2, y += E);
        V += c.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && O < V ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = L, n = t.finalText.length, k = false);
      }
      y = -E, m2 = 0;
      var B = 0, w;
      for (s = 0; s < n; s += 1) if (a = false, w = t.finalText[s], T = w.charCodeAt(0), T === 13 || T === 3 ? (B = 0, P.push(y), d = y > d ? y : d, y = -2 * E, o = "", a = true, p += 1) : o = w, e.chars ? (h = e.getCharData(w, c.fStyle, e.getFontByName(t.f).fFamily), m2 = a ? 0 : h.w * t.finalSize / 100) : m2 = e.measureText(o, t.f, t.finalSize), w === " " ? B += m2 + E : (y += m2 + E + B, B = 0), i.push({ l: m2, an: m2, add: g, n: a, anIndexes: [], val: o, line: p, animatorJustifyOffset: 0 }), u == 2) {
        if (g += m2, o === "" || o === " " || s === n - 1) {
          for ((o === "" || o === " ") && (g -= m2); C <= s; ) i[C].an = g, i[C].ind = l, i[C].extra = m2, C += 1;
          l += 1, g = 0;
        }
      } else if (u == 3) {
        if (g += m2, o === "" || s === n - 1) {
          for (o === "" && (g -= m2); C <= s; ) i[C].an = g, i[C].ind = l, i[C].extra = m2, C += 1;
          g = 0, l += 1;
        }
      } else i[l].ind = l, i[l].extra = 0, l += 1;
      if (t.l = i, d = y > d ? y : d, P.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = d, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0;
      }
      t.lineWidths = P;
      var x = r.a, A, v;
      f = x.length;
      var b, M, I = [];
      for (_ = 0; _ < f; _ += 1) {
        for (A = x[_], A.a.sc && (t.strokeColorAnim = true), A.a.sw && (t.strokeWidthAnim = true), (A.a.fc || A.a.fh || A.a.fs || A.a.fb) && (t.fillColorAnim = true), M = 0, b = A.s.b, s = 0; s < n; s += 1) v = i[s], v.anIndexes[_] = M, (b == 1 && v.val !== "" || b == 2 && v.val !== "" && v.val !== " " || b == 3 && (v.n || v.val == " " || s == n - 1) || b == 4 && (v.n || s == n - 1)) && (A.s.rn === 1 && I.push(M), M += 1);
        r.a[_].s.totalChars = M;
        var R = -1, z;
        if (A.s.rn === 1) for (s = 0; s < n; s += 1) v = i[s], R != v.anIndexes[_] && (R = v.anIndexes[_], z = I.splice(Math.floor(Math.random() * I.length), 1)[0]), v.anIndexes[_] = z;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = c.ascent * t.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var r = this.copyData({}, this.data.d.k[e].s);
      r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
    }, TextProperty.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
      var t = Math.max, e = Math.min, r = Math.floor;
      function i(n, a) {
        this._currentTextLength = -1, this.k = false, this.data = a, this.elem = n, this.comp = n.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(n), this.s = PropertyFactory.getProp(n, a.s || { k: 0 }, 0, 0, this), "e" in a ? this.e = PropertyFactory.getProp(n, a.e, 0, 0, this) : this.e = { v: 100 }, this.o = PropertyFactory.getProp(n, a.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(n, a.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(n, a.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(n, a.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(n, a.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      i.prototype = { getMult: function(a) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var l = 0, o = 0, u = 1, g = 1;
        this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? u = 1 - this.xe.v / 100 : g = 1 + this.xe.v / 100;
        var C = BezierFactory.getBezierEasing(l, o, u, g).get, p = 0, P = this.finalS, y = this.finalE, d = this.data.sh;
        if (d === 2) y === P ? p = a >= y ? 1 : 0 : p = t(0, e(0.5 / (y - P) + (a - P) / (y - P), 1)), p = C(p);
        else if (d === 3) y === P ? p = a >= y ? 0 : 1 : p = 1 - t(0, e(0.5 / (y - P) + (a - P) / (y - P), 1)), p = C(p);
        else if (d === 4) y === P ? p = 0 : (p = t(0, e(0.5 / (y - P) + (a - P) / (y - P), 1)), p < 0.5 ? p *= 2 : p = 1 - 2 * (p - 0.5)), p = C(p);
        else if (d === 5) {
          if (y === P) p = 0;
          else {
            var _ = y - P;
            a = e(t(0, a + 0.5 - P), y - P);
            var f = -_ / 2 + a, c = _ / 2;
            p = Math.sqrt(1 - f * f / (c * c));
          }
          p = C(p);
        } else d === 6 ? (y === P ? p = 0 : (a = e(t(0, a + 0.5 - P), y - P), p = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (y - P))) / 2), p = C(p)) : (a >= r(P) && (a - P < 0 ? p = t(0, e(e(y, 1) - (P - a), 1)) : p = t(0, e(y - a, 1))), p = C(p));
        if (this.sm.v !== 100) {
          var h = this.sm.v * 0.01;
          h === 0 && (h = 1e-8);
          var m2 = 0.5 - h * 0.5;
          p < m2 ? p = 0 : (p = (p - m2) / h, p > 1 && (p = 1));
        }
        return p * this.a.v;
      }, getValue: function(a) {
        this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
        var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars, o = this.o.v / l, u = this.s.v / l + o, g = this.e.v / l + o;
        if (u > g) {
          var C = u;
          u = g, g = C;
        }
        this.finalS = u, this.finalE = g;
      } }, extendPrototype([DynamicPropertyContainer], i);
      function s(n, a, l) {
        return new i(n, a);
      }
      return { getTextSelectorProp: s };
    }();
    function TextAnimatorDataProperty(t, e, r) {
      var i = { propType: false }, s = PropertyFactory.getProp, n = e.a;
      this.a = { r: n.r ? s(t, n.r, 0, degToRads, r) : i, rx: n.rx ? s(t, n.rx, 0, degToRads, r) : i, ry: n.ry ? s(t, n.ry, 0, degToRads, r) : i, sk: n.sk ? s(t, n.sk, 0, degToRads, r) : i, sa: n.sa ? s(t, n.sa, 0, degToRads, r) : i, s: n.s ? s(t, n.s, 1, 0.01, r) : i, a: n.a ? s(t, n.a, 1, 0, r) : i, o: n.o ? s(t, n.o, 0, 0.01, r) : i, p: n.p ? s(t, n.p, 1, 0, r) : i, sw: n.sw ? s(t, n.sw, 0, 0, r) : i, sc: n.sc ? s(t, n.sc, 1, 0, r) : i, fc: n.fc ? s(t, n.fc, 1, 0, r) : i, fh: n.fh ? s(t, n.fh, 0, 0, r) : i, fs: n.fs ? s(t, n.fs, 0, 0.01, r) : i, fb: n.fb ? s(t, n.fb, 0, 0.01, r) : i, t: n.t ? s(t, n.t, 0, 0, r) : i }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
    }
    function TextAnimatorProperty(t, e, r) {
      this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(r);
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var t, e = this._textData.a.length, r, i = PropertyFactory.getProp;
      for (t = 0; t < e; t += 1) r = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, r, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { a: i(this._elem, this._textData.p.a, 0, 0, this), f: i(this._elem, this._textData.p.f, 0, 0, this), l: i(this._elem, this._textData.p.l, 0, 0, this), r: i(this._elem, this._textData.p.r, 0, 0, this), p: i(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = false;
        var r = this._moreOptions.alignment.v, i = this._animatorsData, s = this._textData, n = this.mHelper, a = this._renderType, l = this.renderedLetters.length, o, u, g, C, p = t.l, P, y, d, _, f, c, h, m2, S, E, T, k, F, O, V;
        if (this._hasMaskedPath) {
          if (V = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var L = V.v;
            this._pathData.r.v && (L = L.reverse()), P = { tLength: 0, segments: [] }, C = L._length - 1;
            var D;
            for (k = 0, g = 0; g < C; g += 1) D = bez.buildBezierData(L.v[g], L.v[g + 1], [L.o[g][0] - L.v[g][0], L.o[g][1] - L.v[g][1]], [L.i[g + 1][0] - L.v[g + 1][0], L.i[g + 1][1] - L.v[g + 1][1]]), P.tLength += D.segmentLength, P.segments.push(D), k += D.segmentLength;
            g = C, V.v.c && (D = bez.buildBezierData(L.v[g], L.v[0], [L.o[g][0] - L.v[g][0], L.o[g][1] - L.v[g][1]], [L.i[0][0] - L.v[0][0], L.i[0][1] - L.v[0][1]]), P.tLength += D.segmentLength, P.segments.push(D), k += D.segmentLength), this._pathData.pi = P;
          }
          if (P = this._pathData.pi, y = this._pathData.f.v, h = 0, c = 1, _ = 0, f = true, E = P.segments, y < 0 && V.v.c) for (P.tLength < Math.abs(y) && (y = -Math.abs(y) % P.tLength), h = E.length - 1, S = E[h].points, c = S.length - 1; y < 0; ) y += S[c].partialLength, c -= 1, c < 0 && (h -= 1, S = E[h].points, c = S.length - 1);
          S = E[h].points, m2 = S[c - 1], d = S[c], T = d.partialLength;
        }
        C = p.length, o = 0, u = 0;
        var B = t.finalSize * 1.2 * 0.714, w = true, x, A, v, b, M;
        b = i.length;
        var I, R = -1, z, N, W, j = y, H = h, Y = c, Q = -1, X, $, K, q, G, et, nt, rt, tt = "", it = this.defaultPropsArray, st;
        if (t.j === 2 || t.j === 1) {
          var Z = 0, at = 0, ot = t.j === 2 ? -0.5 : -1, J = 0, ht = true;
          for (g = 0; g < C; g += 1) if (p[g].n) {
            for (Z && (Z += at); J < g; ) p[J].animatorJustifyOffset = Z, J += 1;
            Z = 0, ht = true;
          } else {
            for (v = 0; v < b; v += 1) x = i[v].a, x.t.propType && (ht && t.j === 2 && (at += x.t.v * ot), A = i[v].s, I = A.getMult(p[g].anIndexes[v], s.a[v].s.totalChars), I.length ? Z += x.t.v * I[0] * ot : Z += x.t.v * I * ot);
            ht = false;
          }
          for (Z && (Z += at); J < g; ) p[J].animatorJustifyOffset = Z, J += 1;
        }
        for (g = 0; g < C; g += 1) {
          if (n.reset(), X = 1, p[g].n) o = 0, u += t.yOffset, u += w ? 1 : 0, y = j, w = false, this._hasMaskedPath && (h = H, c = Y, S = E[h].points, m2 = S[c - 1], d = S[c], T = d.partialLength, _ = 0), tt = "", rt = "", et = "", st = "", it = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (Q !== p[g].line) {
                switch (t.j) {
                  case 1:
                    y += k - t.lineWidths[p[g].line];
                    break;
                  case 2:
                    y += (k - t.lineWidths[p[g].line]) / 2;
                    break;
                }
                Q = p[g].line;
              }
              R !== p[g].ind && (p[R] && (y += p[R].extra), y += p[g].an / 2, R = p[g].ind), y += r[0] * p[g].an * 5e-3;
              var U = 0;
              for (v = 0; v < b; v += 1) x = i[v].a, x.p.propType && (A = i[v].s, I = A.getMult(p[g].anIndexes[v], s.a[v].s.totalChars), I.length ? U += x.p.v[0] * I[0] : U += x.p.v[0] * I), x.a.propType && (A = i[v].s, I = A.getMult(p[g].anIndexes[v], s.a[v].s.totalChars), I.length ? U += x.a.v[0] * I[0] : U += x.a.v[0] * I);
              for (f = true, this._pathData.a.v && (y = p[0].an * 0.5 + (k - this._pathData.f.v - p[0].an * 0.5 - p[p.length - 1].an * 0.5) * R / (C - 1), y += this._pathData.f.v); f; ) _ + T >= y + U || !S ? (F = (y + U - _) / d.partialLength, N = m2.point[0] + (d.point[0] - m2.point[0]) * F, W = m2.point[1] + (d.point[1] - m2.point[1]) * F, n.translate(-r[0] * p[g].an * 5e-3, -(r[1] * B) * 0.01), f = false) : S && (_ += d.partialLength, c += 1, c >= S.length && (c = 0, h += 1, E[h] ? S = E[h].points : V.v.c ? (c = 0, h = 0, S = E[h].points) : (_ -= d.partialLength, S = null)), S && (m2 = d, d = S[c], T = d.partialLength));
              z = p[g].an / 2 - p[g].add, n.translate(-z, 0, 0);
            } else z = p[g].an / 2 - p[g].add, n.translate(-z, 0, 0), n.translate(-r[0] * p[g].an * 5e-3, -r[1] * B * 0.01, 0);
            for (v = 0; v < b; v += 1) x = i[v].a, x.t.propType && (A = i[v].s, I = A.getMult(p[g].anIndexes[v], s.a[v].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? I.length ? y += x.t.v * I[0] : y += x.t.v * I : I.length ? o += x.t.v * I[0] : o += x.t.v * I));
            for (t.strokeWidthAnim && (K = t.sw || 0), t.strokeColorAnim && (t.sc ? $ = [t.sc[0], t.sc[1], t.sc[2]] : $ = [0, 0, 0]), t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]), v = 0; v < b; v += 1) x = i[v].a, x.a.propType && (A = i[v].s, I = A.getMult(p[g].anIndexes[v], s.a[v].s.totalChars), I.length ? n.translate(-x.a.v[0] * I[0], -x.a.v[1] * I[1], x.a.v[2] * I[2]) : n.translate(-x.a.v[0] * I, -x.a.v[1] * I, x.a.v[2] * I));
            for (v = 0; v < b; v += 1) x = i[v].a, x.s.propType && (A = i[v].s, I = A.getMult(p[g].anIndexes[v], s.a[v].s.totalChars), I.length ? n.scale(1 + (x.s.v[0] - 1) * I[0], 1 + (x.s.v[1] - 1) * I[1], 1) : n.scale(1 + (x.s.v[0] - 1) * I, 1 + (x.s.v[1] - 1) * I, 1));
            for (v = 0; v < b; v += 1) {
              if (x = i[v].a, A = i[v].s, I = A.getMult(p[g].anIndexes[v], s.a[v].s.totalChars), x.sk.propType && (I.length ? n.skewFromAxis(-x.sk.v * I[0], x.sa.v * I[1]) : n.skewFromAxis(-x.sk.v * I, x.sa.v * I)), x.r.propType && (I.length ? n.rotateZ(-x.r.v * I[2]) : n.rotateZ(-x.r.v * I)), x.ry.propType && (I.length ? n.rotateY(x.ry.v * I[1]) : n.rotateY(x.ry.v * I)), x.rx.propType && (I.length ? n.rotateX(x.rx.v * I[0]) : n.rotateX(x.rx.v * I)), x.o.propType && (I.length ? X += (x.o.v * I[0] - X) * I[0] : X += (x.o.v * I - X) * I), t.strokeWidthAnim && x.sw.propType && (I.length ? K += x.sw.v * I[0] : K += x.sw.v * I), t.strokeColorAnim && x.sc.propType) for (G = 0; G < 3; G += 1) I.length ? $[G] += (x.sc.v[G] - $[G]) * I[0] : $[G] += (x.sc.v[G] - $[G]) * I;
              if (t.fillColorAnim && t.fc) {
                if (x.fc.propType) for (G = 0; G < 3; G += 1) I.length ? q[G] += (x.fc.v[G] - q[G]) * I[0] : q[G] += (x.fc.v[G] - q[G]) * I;
                x.fh.propType && (I.length ? q = addHueToRGB(q, x.fh.v * I[0]) : q = addHueToRGB(q, x.fh.v * I)), x.fs.propType && (I.length ? q = addSaturationToRGB(q, x.fs.v * I[0]) : q = addSaturationToRGB(q, x.fs.v * I)), x.fb.propType && (I.length ? q = addBrightnessToRGB(q, x.fb.v * I[0]) : q = addBrightnessToRGB(q, x.fb.v * I));
              }
            }
            for (v = 0; v < b; v += 1) x = i[v].a, x.p.propType && (A = i[v].s, I = A.getMult(p[g].anIndexes[v], s.a[v].s.totalChars), this._hasMaskedPath ? I.length ? n.translate(0, x.p.v[1] * I[0], -x.p.v[2] * I[1]) : n.translate(0, x.p.v[1] * I, -x.p.v[2] * I) : I.length ? n.translate(x.p.v[0] * I[0], x.p.v[1] * I[1], -x.p.v[2] * I[2]) : n.translate(x.p.v[0] * I, x.p.v[1] * I, -x.p.v[2] * I));
            if (t.strokeWidthAnim && (et = K < 0 ? 0 : K), t.strokeColorAnim && (nt = "rgb(" + Math.round($[0] * 255) + "," + Math.round($[1] * 255) + "," + Math.round($[2] * 255) + ")"), t.fillColorAnim && t.fc && (rt = "rgb(" + Math.round(q[0] * 255) + "," + Math.round(q[1] * 255) + "," + Math.round(q[2] * 255) + ")"), this._hasMaskedPath) {
              if (n.translate(0, -t.ls), n.translate(0, r[1] * B * 0.01 + u, 0), this._pathData.p.v) {
                O = (d.point[1] - m2.point[1]) / (d.point[0] - m2.point[0]);
                var lt = Math.atan(O) * 180 / Math.PI;
                d.point[0] < m2.point[0] && (lt += 180), n.rotate(-lt * Math.PI / 180);
              }
              n.translate(N, W, 0), y -= r[0] * p[g].an * 5e-3, p[g + 1] && R !== p[g + 1].ind && (y += p[g].an / 2, y += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (n.translate(o, u, 0), t.ps && n.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  n.translate(p[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[g].line]), 0, 0);
                  break;
                case 2:
                  n.translate(p[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[g].line]) / 2, 0, 0);
                  break;
              }
              n.translate(0, -t.ls), n.translate(z, 0, 0), n.translate(r[0] * p[g].an * 5e-3, r[1] * B * 0.01, 0), o += p[g].l + t.tr * 1e-3 * t.finalSize;
            }
            a === "html" ? tt = n.toCSS() : a === "svg" ? tt = n.to2dCSS() : it = [n.props[0], n.props[1], n.props[2], n.props[3], n.props[4], n.props[5], n.props[6], n.props[7], n.props[8], n.props[9], n.props[10], n.props[11], n.props[12], n.props[13], n.props[14], n.props[15]], st = X;
          }
          l <= g ? (M = new LetterProps(st, et, nt, rt, tt, it), this.renderedLetters.push(M), l += 1, this.lettersChangedFlag = true) : (M = this.renderedLetters[g], this.lettersChangedFlag = M.update(st, et, nt, rt, tt, it) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
    function ITextElement() {
    }
    ITextElement.prototype.initElement = function(t, e, r) {
      this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(t) {
      this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, ITextElement.prototype.createPathShape = function(t, e) {
      var r, i = e.length, s, n = "";
      for (r = 0; r < i; r += 1) e[r].ty === "sh" && (s = e[r].ks.k, n += buildShapeString(s, s.i.length, true, t));
      return n;
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, ITextElement.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, ITextElement.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
          break;
      }
      e.translate(i, s, 0);
    }, ITextElement.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    }, ITextElement.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
    };
    var emptyShapeData = { shapes: [] };
    function SVGTextLottieElement(t, e, r) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
      for (var e = 0, r = t.length, i = [], s = ""; e < r; ) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
      return i.push(s), i;
    }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var r = t.shapes[0];
        if (r.it) {
          var i = r.it[r.it.length - 1];
          i.s && (i.s.k[0] = e, i.s.k[1] = e);
        }
      }
      return t;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var t, e, r = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
      var i = this.globalData.fontManager.getFontByName(r.f);
      if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
      else {
        this.layerElement.setAttribute("font-family", i.fFamily);
        var s = r.fWeight, n = r.fStyle;
        this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", s);
      }
      this.layerElement.setAttribute("aria-label", r.t);
      var a = r.l || [], l = !!this.globalData.fontManager.chars;
      e = a.length;
      var o, u = this.mHelper, g = "", C = this.data.singleShape, p = 0, P = 0, y = true, d = r.tr * 1e-3 * r.finalSize;
      if (C && !l && !r.sz) {
        var _ = this.textContainer, f = "start";
        switch (r.j) {
          case 1:
            f = "end";
            break;
          case 2:
            f = "middle";
            break;
          default:
            f = "start";
            break;
        }
        _.setAttribute("text-anchor", f), _.setAttribute("letter-spacing", d);
        var c = this.buildTextContents(r.finalText);
        for (e = c.length, P = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1) o = this.textSpans[t].span || createNS("tspan"), o.textContent = c[t], o.setAttribute("x", 0), o.setAttribute("y", P), o.style.display = "inherit", _.appendChild(o), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = o, P += r.finalLineHeight;
        this.layerElement.appendChild(_);
      } else {
        var h = this.textSpans.length, m2;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !l || !C || t === 0) {
            if (o = h > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), h <= t) {
              if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, l) {
                var S = createNS("g");
                o.appendChild(S), this.textSpans[t].childSpan = S;
              }
              this.textSpans[t].span = o, this.layerElement.appendChild(o);
            }
            o.style.display = "inherit";
          }
          if (u.reset(), C && (a[t].n && (p = -d, P += r.yOffset, P += y ? 1 : 0, y = false), this.applyTextPropertiesToMatrix(r, u, a[t].line, p, P), p += a[t].l || 0, p += d), l) {
            m2 = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
            var E;
            if (m2.t === 1) E = new SVGCompElement(m2.data, this.globalData, this);
            else {
              var T = emptyShapeData;
              m2.data && m2.data.shapes && (T = this.buildShapeData(m2.data, r.finalSize)), E = new SVGShapeElement(T, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var k = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(k.layerElement), k.destroy();
            }
            this.textSpans[t].glyph = E, E._debug = true, E.prepareFrame(0), E.renderFrame(), this.textSpans[t].childSpan.appendChild(E.layerElement), m2.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")");
          } else C && o.setAttribute("transform", "translate(" + u.props[12] + "," + u.props[13] + ")"), o.textContent = a[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        C && o && o.setAttribute("d", g);
      }
      for (; t < this.textSpans.length; ) this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = true;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = false;
        var t = this.layerElement.getBBox();
        this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.getValue = function() {
      var t, e = this.textSpans.length, r;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1) r = this.textSpans[t].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = true));
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = true;
        var t, e, r = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
        e = i.length;
        var s, n, a;
        for (t = 0; t < e; t += 1) i[t].n || (s = r[t], n = this.textSpans[t].span, a = this.textSpans[t].glyph, a && a.renderFrame(), s._mdf.m && n.setAttribute("transform", s.m), s._mdf.o && n.setAttribute("opacity", s.o), s._mdf.sw && n.setAttribute("stroke-width", s.sw), s._mdf.sc && n.setAttribute("stroke", s.sc), s._mdf.fc && n.setAttribute("fill", s.fc));
      }
    };
    function ISolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var t = createNS("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    };
    function NullElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
    }
    NullElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
    function SVGRendererBase() {
    }
    extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
      return new NullElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createShape = function(t) {
      return new SVGShapeElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createText = function(t) {
      return new SVGTextLottieElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createImage = function(t) {
      return new IImageElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createSolid = function(t) {
      return new ISolidElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var r = createNS("clipPath"), i = createNS("rect");
      i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
      var s = createElementID();
      r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
    }, SVGRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, SVGRendererBase.prototype.updateContainerSize = function() {
    }, SVGRendererBase.prototype.findIndexByInd = function(t) {
      var e = 0, r = this.layers.length;
      for (e = 0; e < r; e += 1) if (this.layers[e].ind === t) return e;
      return -1;
    }, SVGRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        e[t] = true;
        var r = this.createItem(this.layers[t]);
        if (e[t] = r, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
          var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (i === -1) return;
          if (!this.elements[i] || this.elements[i] === true) this.buildItem(i), this.addPendingElement(r);
          else {
            var s = e[i], n = s.getMatte(this.layers[t].tt);
            r.setMatte(n);
          }
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt) for (var e = 0, r = this.elements.length; e < r; ) {
          if (this.elements[e] === t) {
            var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, s = this.elements[i], n = s.getMatte(this.layers[e].tt);
            t.setMatte(n);
            break;
          }
          e += 1;
        }
      }
    }, SVGRendererBase.prototype.renderFrame = function(t) {
      if (!(this.renderedFrame === t || this.destroyed)) {
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
        var e, r = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf) for (e = 0; e < r; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
      var r = t.getBaseElement();
      if (r) {
        for (var i = 0, s; i < e; ) this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
        s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r);
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function ICompElement() {
    }
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(t) {
      if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var r, i = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = true));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, ICompElement.prototype.setElements = function(t) {
      this.elements = t;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function SVGCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    };
    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var r = "";
      if (e && e.title) {
        var i = createNS("title"), s = createElementID();
        i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s;
      }
      if (e && e.description) {
        var n = createNS("desc"), a = createElementID();
        n.setAttribute("id", a), n.textContent = e.description, this.svgElement.appendChild(n), r += " " + a;
      }
      r && this.svgElement.setAttribute("aria-labelledby", r);
      var l = createNS("defs");
      this.svgElement.appendChild(l);
      var o = createNS("g");
      this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && e.hideOnTransparent === false), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, defs: l, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
    }
    extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    };
    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    ShapeTransformManager.prototype = { addTransformSequence: function(e) {
      var r, i = e.length, s = "_";
      for (r = 0; r < i; r += 1) s += e[r].transform.key + "_";
      var n = this.sequences[s];
      return n || (n = { transforms: [].concat(e), finalTransform: new Matrix(), _mdf: false }, this.sequences[s] = n, this.sequenceList.push(n)), n;
    }, processSequence: function(e, r) {
      for (var i = 0, s = e.transforms.length, n = r; i < s && !r; ) {
        if (e.transforms[i].transform.mProps._mdf) {
          n = true;
          break;
        }
        i += 1;
      }
      if (n) for (e.finalTransform.reset(), i = s - 1; i >= 0; i -= 1) e.finalTransform.multiply(e.transforms[i].transform.mProps.v);
      e._mdf = n;
    }, processSequences: function(e) {
      var r, i = this.sequenceList.length;
      for (r = 0; r < i; r += 1) this.processSequence(this.sequenceList[r], e);
    }, getNewKey: function() {
      return this.transform_key_count += 1, "_" + this.transform_key_count;
    } };
    var lumaLoader = function() {
      var e = "__lottie_element_luma_buffer", r = null, i = null, s = null;
      function n() {
        var o = createNS("svg"), u = createNS("filter"), g = createNS("feColorMatrix");
        return u.setAttribute("id", e), g.setAttribute("type", "matrix"), g.setAttribute("color-interpolation-filters", "sRGB"), g.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), u.appendChild(g), o.appendChild(u), o.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o;
      }
      function a() {
        r || (s = n(), document.body.appendChild(s), r = createTag("canvas"), i = r.getContext("2d"), i.filter = "url(#" + e + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1));
      }
      function l(o) {
        return r || a(), r.width = o.width, r.height = o.height, i.filter = "url(#" + e + ")", r;
      }
      return { load: a, get: l };
    };
    function createCanvas(t, e) {
      if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
      var r = createTag("canvas");
      return r.width = t, r.height = e, r;
    }
    var assetLoader = function() {
      return { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas };
    }(), registeredEffects = {};
    function CVEffects(t) {
      var e, r = t.data.ef ? t.data.ef.length : 0;
      this.filters = [];
      var i;
      for (e = 0; e < r; e += 1) {
        i = null;
        var s = t.data.ef[e].ty;
        if (registeredEffects[s]) {
          var n = registeredEffects[s].effect;
          i = new n(t.effectsManager.effectElements[e], t);
        }
        i && this.filters.push(i);
      }
      this.filters.length && t.addRenderableComponent(this);
    }
    CVEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
    }, CVEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    };
    function registerEffect(t, e) {
      registeredEffects[t] = { effect: e };
    }
    function CVMaskElement(t, e) {
      this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var r, i = this.masksProperties.length, s = false;
      for (r = 0; r < i; r += 1) this.masksProperties[r].mode !== "n" && (s = true), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
      this.hasMasks = s, s && this.element.addRenderableComponent(this);
    }
    CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var t = this.element.finalTransform.mat, e = this.element.canvasContext, r, i = this.masksProperties.length, s, n, a;
        for (e.beginPath(), r = 0; r < i; r += 1) if (this.masksProperties[r].mode !== "n") {
          this.masksProperties[r].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), a = this.viewData[r].v, s = t.applyToPointArray(a.v[0][0], a.v[0][1], 0), e.moveTo(s[0], s[1]);
          var l, o = a._length;
          for (l = 1; l < o; l += 1) n = t.applyToTriplePoints(a.o[l - 1], a.i[l], a.v[l]), e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
          n = t.applyToTriplePoints(a.o[l - 1], a.i[0], a.v[0]), e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
        }
        this.element.globalData.renderer.save(true), e.clip();
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null;
    };
    function CVBaseElement() {
    }
    var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
    CVBaseElement.prototype = { createElements: function() {
    }, initRendererElement: function() {
    }, createContainerElements: function() {
      if (this.data.tt >= 1) {
        this.buffers = [];
        var e = this.globalData.canvasContext, r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
        this.buffers.push(r);
        var i = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
        this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
      }
      this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
    }, createContent: function() {
    }, setBlendMode: function() {
      var e = this.globalData;
      if (e.blendMode !== this.data.bm) {
        e.blendMode = this.data.bm;
        var r = getBlendMode(this.data.bm);
        e.canvasContext.globalCompositeOperation = r;
      }
    }, createRenderableComponents: function() {
      this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
    }, hideElement: function() {
      !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = true);
    }, showElement: function() {
      this.isInRange && !this.isTransparent && (this.hidden = false, this._isFirstFrame = true, this.maskManager._isFirstFrame = true);
    }, clearCanvas: function(e) {
      e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
    }, prepareLayer: function() {
      if (this.data.tt >= 1) {
        var e = this.buffers[0], r = e.getContext("2d");
        this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
      }
    }, exitLayer: function() {
      if (this.data.tt >= 1) {
        var e = this.buffers[1], r = e.getContext("2d");
        this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
        var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
        if (i.renderFrame(true), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
          var s = assetLoader.getLumaCanvas(this.canvasContext.canvas), n = s.getContext("2d");
          n.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0);
        }
        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
      }
    }, renderFrame: function(e) {
      if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
        this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
        var r = this.data.ty === 0;
        this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(true), this._isFirstFrame && (this._isFirstFrame = false);
      }
    }, destroy: function() {
      this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
    }, mHelper: new Matrix() }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
    function CVShapeData(t, e, r, i) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var s = 4;
      e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
      var n, a = r.length, l;
      for (n = 0; n < a; n += 1) r[n].closed || (l = { transforms: i.addTransformSequence(r[n].transforms), trNodes: [] }, this.styledShapes.push(l), r[n].elements.push(l));
    }
    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
    function CVShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: false }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
      var r = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: t.hd === true }, i = {};
      if (t.ty === "fl" || t.ty === "st" ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this), i.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), t.ty === "st" || t.ty === "gs") {
        if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
          var s = new DashProperty(this, t.d, "canvas", this);
          i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]);
        }
      } else r.r = t.r === 2 ? "evenodd" : "nonzero";
      return this.stylesList.push(r), i.style = r, i;
    }, CVShapeElement.prototype.createGroupElement = function() {
      var t = { it: [], prevViewData: [] };
      return t;
    }, CVShapeElement.prototype.createTransformElement = function(t) {
      var e = { transform: { opacity: 1, _opMdf: false, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, 0.01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } };
      return e;
    }, CVShapeElement.prototype.createShapeElement = function(t) {
      var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
      return this.shapes.push(e), this.addShapeToModifiers(e), e;
    }, CVShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = true;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
      var e, r = this.stylesList.length;
      for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) t[e].closed = true;
    }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
      var n, a = t.length - 1, l, o, u = [], g = [], C, p, P, y = [].concat(s);
      for (n = a; n >= 0; n -= 1) {
        if (C = this.searchProcessedElement(t[n]), C ? e[n] = r[C - 1] : t[n]._shouldRender = i, t[n].ty === "fl" || t[n].ty === "st" || t[n].ty === "gf" || t[n].ty === "gs") C ? e[n].style.closed = false : e[n] = this.createStyleElement(t[n], y), u.push(e[n].style);
        else if (t[n].ty === "gr") {
          if (!C) e[n] = this.createGroupElement(t[n]);
          else for (o = e[n].it.length, l = 0; l < o; l += 1) e[n].prevViewData[l] = e[n].it[l];
          this.searchShapes(t[n].it, e[n].it, e[n].prevViewData, i, y);
        } else t[n].ty === "tr" ? (C || (P = this.createTransformElement(t[n]), e[n] = P), y.push(e[n]), this.addTransformToStyleList(e[n])) : t[n].ty === "sh" || t[n].ty === "rc" || t[n].ty === "el" || t[n].ty === "sr" ? C || (e[n] = this.createShapeElement(t[n])) : t[n].ty === "tm" || t[n].ty === "rd" || t[n].ty === "pb" || t[n].ty === "zz" || t[n].ty === "op" ? (C ? (p = e[n], p.closed = false) : (p = ShapeModifiers.getModifier(t[n].ty), p.init(this, t[n]), e[n] = p, this.shapeModifiers.push(p)), g.push(p)) : t[n].ty === "rp" && (C ? (p = e[n], p.closed = true) : (p = ShapeModifiers.getModifier(t[n].ty), e[n] = p, p.init(this, t, n, e), this.shapeModifiers.push(p), i = false), g.push(p));
        this.addProcessedElement(t[n], n + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(u), a = g.length, n = 0; n < a; n += 1) g[n].closed = true;
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = false, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
      (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = true);
    }, CVShapeElement.prototype.drawLayer = function() {
      var t, e = this.stylesList.length, r, i, s, n, a, l, o = this.globalData.renderer, u = this.globalData.canvasContext, g, C;
      for (t = 0; t < e; t += 1) if (C = this.stylesList[t], g = C.type, !((g === "st" || g === "gs") && C.wi === 0 || !C.data._shouldRender || C.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
        for (o.save(), a = C.elements, g === "st" || g === "gs" ? (o.ctxStrokeStyle(g === "st" ? C.co : C.grd), o.ctxLineWidth(C.wi), o.ctxLineCap(C.lc), o.ctxLineJoin(C.lj), o.ctxMiterLimit(C.ml || 0)) : o.ctxFillStyle(g === "fl" ? C.co : C.grd), o.ctxOpacity(C.coOp), g !== "st" && g !== "gs" && u.beginPath(), o.ctxTransform(C.preTransforms.finalTransform.props), i = a.length, r = 0; r < i; r += 1) {
          for ((g === "st" || g === "gs") && (u.beginPath(), C.da && (u.setLineDash(C.da), u.lineDashOffset = C.do)), l = a[r].trNodes, n = l.length, s = 0; s < n; s += 1) l[s].t === "m" ? u.moveTo(l[s].p[0], l[s].p[1]) : l[s].t === "c" ? u.bezierCurveTo(l[s].pts[0], l[s].pts[1], l[s].pts[2], l[s].pts[3], l[s].pts[4], l[s].pts[5]) : u.closePath();
          (g === "st" || g === "gs") && (o.ctxStroke(), C.da && u.setLineDash(this.dashResetter));
        }
        g !== "st" && g !== "gs" && this.globalData.renderer.ctxFill(C.r), o.restore();
      }
    }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
      var s, n = e.length - 1, a;
      for (a = t, s = n; s >= 0; s -= 1) e[s].ty === "tr" ? (a = r[s].transform, this.renderShapeTransform(t, a)) : e[s].ty === "sh" || e[s].ty === "el" || e[s].ty === "rc" || e[s].ty === "sr" ? this.renderPath(e[s], r[s]) : e[s].ty === "fl" ? this.renderFill(e[s], r[s], a) : e[s].ty === "st" ? this.renderStroke(e[s], r[s], a) : e[s].ty === "gf" || e[s].ty === "gs" ? this.renderGradientFill(e[s], r[s], a) : e[s].ty === "gr" ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty;
      i && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
      if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
        var r = t.trNodes, i = e.paths, s, n, a, l = i._length;
        r.length = 0;
        var o = t.transforms.finalTransform;
        for (a = 0; a < l; a += 1) {
          var u = i.shapes[a];
          if (u && u.v) {
            for (n = u._length, s = 1; s < n; s += 1) s === 1 && r.push({ t: "m", p: o.applyToPointArray(u.v[0][0], u.v[0][1], 0) }), r.push({ t: "c", pts: o.applyToTriplePoints(u.o[s - 1], u.i[s], u.v[s]) });
            n === 1 && r.push({ t: "m", p: o.applyToPointArray(u.v[0][0], u.v[0][1], 0) }), u.c && n && (r.push({ t: "c", pts: o.applyToTriplePoints(u.o[s - 1], u.i[0], u.v[0]) }), r.push({ t: "z" }));
          }
        }
        t.trNodes = r;
      }
    }, CVShapeElement.prototype.renderPath = function(t, e) {
      if (t.hd !== true && t._shouldRender) {
        var r, i = e.styledShapes.length;
        for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh);
      }
    }, CVShapeElement.prototype.renderFill = function(t, e, r) {
      var i = e.style;
      (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
      var i = e.style, s;
      if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
        var n = this.globalData.canvasContext, a = e.s.v, l = e.e.v;
        if (t.t === 1) s = n.createLinearGradient(a[0], a[1], l[0], l[1]);
        else {
          var o = Math.sqrt(Math.pow(a[0] - l[0], 2) + Math.pow(a[1] - l[1], 2)), u = Math.atan2(l[1] - a[1], l[0] - a[0]), g = e.h.v;
          g >= 1 ? g = 0.99 : g <= -1 && (g = -0.99);
          var C = o * g, p = Math.cos(u + e.a.v) * C + a[0], P = Math.sin(u + e.a.v) * C + a[1];
          s = n.createRadialGradient(p, P, 0, a[0], a[1], o);
        }
        var y, d = t.g.p, _ = e.g.c, f = 1;
        for (y = 0; y < d; y += 1) e.g._hasOpacity && e.g._collapsable && (f = e.g.o[y * 2 + 1]), s.addColorStop(_[y * 4] / 100, "rgba(" + _[y * 4 + 1] + "," + _[y * 4 + 2] + "," + _[y * 4 + 3] + "," + f + ")");
        i.grd = s;
      }
      i.coOp = e.o.v * r.opacity;
    }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
      var i = e.style, s = e.d;
      s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    };
    function CVTextElement(t, e, r) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = false, this.strokeColorAnim = false, this.strokeWidthAnim = false, this.stroke = false, this.fill = false, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = false;
      t.fc ? (e = true, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var r = false;
      t.sc && (r = true, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var i = this.globalData.fontManager.getFontByName(t.f), s, n, a = t.l, l = this.mHelper;
      this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
      var o, u, g, C, p, P, y, d, _, f, c = this.data.singleShape, h = t.tr * 1e-3 * t.finalSize, m2 = 0, S = 0, E = true, T = 0;
      for (s = 0; s < n; s += 1) {
        o = this.globalData.fontManager.getCharData(t.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), u = o && o.data || {}, l.reset(), c && a[s].n && (m2 = -h, S += t.yOffset, S += E ? 1 : 0, E = false), p = u.shapes ? u.shapes[0].it : [], y = p.length, l.scale(t.finalSize / 100, t.finalSize / 100), c && this.applyTextPropertiesToMatrix(t, l, a[s].line, m2, S), _ = createSizedArray(y - 1);
        var k = 0;
        for (P = 0; P < y; P += 1) if (p[P].ty === "sh") {
          for (C = p[P].ks.k.i.length, d = p[P].ks.k, f = [], g = 1; g < C; g += 1) g === 1 && f.push(l.applyToX(d.v[0][0], d.v[0][1], 0), l.applyToY(d.v[0][0], d.v[0][1], 0)), f.push(l.applyToX(d.o[g - 1][0], d.o[g - 1][1], 0), l.applyToY(d.o[g - 1][0], d.o[g - 1][1], 0), l.applyToX(d.i[g][0], d.i[g][1], 0), l.applyToY(d.i[g][0], d.i[g][1], 0), l.applyToX(d.v[g][0], d.v[g][1], 0), l.applyToY(d.v[g][0], d.v[g][1], 0));
          f.push(l.applyToX(d.o[g - 1][0], d.o[g - 1][1], 0), l.applyToY(d.o[g - 1][0], d.o[g - 1][1], 0), l.applyToX(d.i[0][0], d.i[0][1], 0), l.applyToY(d.i[0][0], d.i[0][1], 0), l.applyToX(d.v[0][0], d.v[0][1], 0), l.applyToY(d.v[0][0], d.v[0][1], 0)), _[k] = f, k += 1;
        }
        c && (m2 += a[s].l, m2 += h), this.textSpans[T] ? this.textSpans[T].elem = _ : this.textSpans[T] = { elem: _ }, T += 1;
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var t = this.canvasContext;
      t.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var e, r, i, s, n, a, l = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
      r = o.length;
      var u, g = null, C = null, p = null, P, y, d = this.globalData.renderer;
      for (e = 0; e < r; e += 1) if (!o[e].n) {
        if (u = l[e], u && (d.save(), d.ctxTransform(u.p), d.ctxOpacity(u.o)), this.fill) {
          for (u && u.fc ? g !== u.fc && (d.ctxFillStyle(u.fc), g = u.fc) : g !== this.values.fill && (g = this.values.fill, d.ctxFillStyle(this.values.fill)), P = this.textSpans[e].elem, s = P.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (y = P[i], a = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(y[n], y[n + 1], y[n + 2], y[n + 3], y[n + 4], y[n + 5]);
          this.globalData.canvasContext.closePath(), d.ctxFill();
        }
        if (this.stroke) {
          for (u && u.sw ? p !== u.sw && (p = u.sw, d.ctxLineWidth(u.sw)) : p !== this.values.sWidth && (p = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), u && u.sc ? C !== u.sc && (C = u.sc, d.ctxStrokeStyle(u.sc)) : C !== this.values.stroke && (C = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), P = this.textSpans[e].elem, s = P.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (y = P[i], a = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(y[n], y[n + 1], y[n + 2], y[n + 3], y[n + 4], y[n + 5]);
          this.globalData.canvasContext.closePath(), d.ctxStroke();
        }
        u && this.globalData.renderer.restore();
      }
    };
    function CVImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var t = createTag("canvas");
        t.width = this.assetData.w, t.height = this.assetData.h;
        var e = t.getContext("2d"), r = this.img.width, i = this.img.height, s = r / i, n = this.assetData.w / this.assetData.h, a, l, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        s > n && o === "xMidYMid slice" || s < n && o !== "xMidYMid slice" ? (l = i, a = l * n) : (a = r, l = a / n), e.drawImage(this.img, (r - a) / 2, (i - l) / 2, a, l, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
      this.img = null;
    };
    function CVSolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
    };
    function CanvasRendererBase() {
    }
    extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
      return new CVShapeElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createText = function(t) {
      return new CVTextElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createImage = function(t) {
      return new CVImageElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createSolid = function(t) {
      return new CVSolidElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
      t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
    }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
      this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
    }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
      this.canvasContext.fillStyle = t;
    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
      this.canvasContext.strokeStyle = t;
    }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
      this.canvasContext.lineWidth = t;
    }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
      this.canvasContext.lineCap = t;
    }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
      this.canvasContext.lineJoin = t;
    }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
      this.canvasContext.miterLimit = t;
    }, CanvasRendererBase.prototype.ctxFill = function(t) {
      this.canvasContext.fill(t);
    }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, i) {
      this.canvasContext.fillRect(t, e, r, i);
    }, CanvasRendererBase.prototype.ctxStroke = function() {
      this.canvasContext.stroke();
    }, CanvasRendererBase.prototype.reset = function() {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      this.contextData.reset();
    }, CanvasRendererBase.prototype.save = function() {
      this.canvasContext.save();
    }, CanvasRendererBase.prototype.restore = function(t) {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t);
    }, CanvasRendererBase.prototype.configAnimation = function(t) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var e = this.animationItem.container.style;
        e.width = "100%", e.height = "100%";
        var r = "0px 0px 0px";
        e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = false, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
    }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
      this.reset();
      var r, i;
      t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr);
      var s, n;
      if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
        var a = this.renderConfig.preserveAspectRatio.split(" "), l = a[1] || "meet", o = a[0] || "xMidYMid", u = o.substr(0, 4), g = o.substr(4);
        s = r / i, n = this.transformCanvas.w / this.transformCanvas.h, n > s && l === "meet" || n < s && l === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), u === "xMid" && (n < s && l === "meet" || n > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : u === "xMax" && (n < s && l === "meet" || n > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, g === "YMid" && (n > s && l === "meet" || n < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : g === "YMax" && (n > s && l === "meet" || n < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
      } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, true);
    }, CanvasRendererBase.prototype.destroy = function() {
      this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
      var t, e = this.layers ? this.layers.length : 0;
      for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = true;
    }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
      if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === true && !e || this.destroyed || t === -1)) {
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
        var r, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
        if (this.globalData._mdf) {
          for (this.renderConfig.clearCanvas === true ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
          this.renderConfig.clearCanvas !== true && this.restore();
        }
      }
    }, CanvasRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        var r = this.createItem(this.layers[t], this, this.globalData);
        e[t] = r, r.initExpressions();
      }
    }, CanvasRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        t.checkParenting();
      }
    }, CanvasRendererBase.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, CanvasRendererBase.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    };
    function CanvasContext() {
      this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
    }
    function CVContextData() {
      this.stack = [], this.cArrPos = 0, this.cTr = new Matrix();
      var t, e = 15;
      for (t = 0; t < e; t += 1) {
        var r = new CanvasContext();
        this.stack[t] = r;
      }
      this._length = e, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
    }
    CVContextData.prototype.duplicate = function() {
      var t = this._length * 2, e = 0;
      for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext();
      this._length = t;
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
    }, CVContextData.prototype.restore = function(t) {
      this.cArrPos -= 1;
      var e = this.stack[this.cArrPos], r = e.transform, i, s = this.cTr.props;
      for (i = 0; i < 16; i += 1) s[i] = r[i];
      if (t) {
        this.nativeContext.restore();
        var n = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = n.fillStyle, this.appliedStrokeStyle = n.strokeStyle, this.appliedLineWidth = n.lineWidth, this.appliedLineCap = n.lineCap, this.appliedLineJoin = n.lineJoin, this.appliedMiterLimit = n.miterLimit;
      }
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit;
    }, CVContextData.prototype.save = function(t) {
      t && this.nativeContext.save();
      var e = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var r = this.stack[this.cArrPos], i;
      for (i = 0; i < 16; i += 1) r.transform[i] = e[i];
      this.cArrPos += 1;
      var s = this.stack[this.cArrPos];
      s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit;
    }, CVContextData.prototype.setOpacity = function(t) {
      this.stack[this.cArrPos].opacity = t;
    }, CVContextData.prototype.setContext = function(t) {
      this.nativeContext = t;
    }, CVContextData.prototype.fillStyle = function(t) {
      this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t);
    }, CVContextData.prototype.strokeStyle = function(t) {
      this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t);
    }, CVContextData.prototype.lineWidth = function(t) {
      this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t);
    }, CVContextData.prototype.lineCap = function(t) {
      this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t);
    }, CVContextData.prototype.lineJoin = function(t) {
      this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t);
    }, CVContextData.prototype.miterLimit = function(t) {
      this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t);
    }, CVContextData.prototype.transform = function(t) {
      this.transformMat.cloneFromProps(t);
      var e = this.cTr;
      this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
      var r = e.props;
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
    }, CVContextData.prototype.opacity = function(t) {
      var e = this.stack[this.cArrPos].opacity;
      e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e);
    }, CVContextData.prototype.fill = function(t) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t);
    }, CVContextData.prototype.fillRect = function(t, e, r, i) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, i);
    }, CVContextData.prototype.stroke = function() {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
    };
    function CVCompElement(t, e, r) {
      this.completeLayers = false, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var t = this.canvasContext;
      t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
      var e, r = this.layers.length;
      for (e = r - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
      var t, e = this.layers.length;
      for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.layers = null, this.elements = null;
    }, CVCompElement.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    };
    function CanvasRenderer(t, e) {
      this.animationItem = t, this.renderConfig = { clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : true, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || false, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", className: e && e.className || "", id: e && e.id || "", runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: false, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = false, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
    }
    extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    }, registerRenderer("canvas", CanvasRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier);
    var CompExpressionInterface = /* @__PURE__ */ function() {
      return function(t) {
        function e(r) {
          for (var i = 0, s = t.layers.length; i < s; ) {
            if (t.layers[i].nm === r || t.layers[i].ind === r) return t.elements[i].layerInterface;
            i += 1;
          }
          return null;
        }
        return Object.defineProperty(e, "_name", { value: t.data.nm }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
      };
    }();
    function _typeof$2(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(r) {
        return typeof r;
      } : _typeof$2 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$2(t);
    }
    function seedRandom(t, e) {
      var r = this, i = 256, s = 6, n = 52, a = "random", l = e.pow(i, s), o = e.pow(2, n), u = o * 2, g = i - 1, C;
      function p(h, m2, S) {
        var E = [];
        m2 = m2 === true ? { entropy: true } : m2 || {};
        var T = _(d(m2.entropy ? [h, c(t)] : h === null ? f() : h, 3), E), k = new P(E), F = function() {
          for (var V = k.g(s), L = l, D = 0; V < o; ) V = (V + D) * i, L *= i, D = k.g(1);
          for (; V >= u; ) V /= 2, L /= 2, D >>>= 1;
          return (V + D) / L;
        };
        return F.int32 = function() {
          return k.g(4) | 0;
        }, F.quick = function() {
          return k.g(4) / 4294967296;
        }, F.double = F, _(c(k.S), t), (m2.pass || S || function(O, V, L, D) {
          return D && (D.S && y(D, k), O.state = function() {
            return y(k, {});
          }), L ? (e[a] = O, V) : O;
        })(F, T, "global" in m2 ? m2.global : this == e, m2.state);
      }
      e["seed" + a] = p;
      function P(h) {
        var m2, S = h.length, E = this, T = 0, k = E.i = E.j = 0, F = E.S = [];
        for (S || (h = [S++]); T < i; ) F[T] = T++;
        for (T = 0; T < i; T++) F[T] = F[k = g & k + h[T % S] + (m2 = F[T])], F[k] = m2;
        E.g = function(O) {
          for (var V, L = 0, D = E.i, B = E.j, w = E.S; O--; ) V = w[D = g & D + 1], L = L * i + w[g & (w[D] = w[B = g & B + V]) + (w[B] = V)];
          return E.i = D, E.j = B, L;
        };
      }
      function y(h, m2) {
        return m2.i = h.i, m2.j = h.j, m2.S = h.S.slice(), m2;
      }
      function d(h, m2) {
        var S = [], E = _typeof$2(h), T;
        if (m2 && E == "object") for (T in h) try {
          S.push(d(h[T], m2 - 1));
        } catch {
        }
        return S.length ? S : E == "string" ? h : h + "\0";
      }
      function _(h, m2) {
        for (var S = h + "", E, T = 0; T < S.length; ) m2[g & T] = g & (E ^= m2[g & T] * 19) + S.charCodeAt(T++);
        return c(m2);
      }
      function f() {
        try {
          if (C) ;
          var h = new Uint8Array(i);
          return (r.crypto || r.msCrypto).getRandomValues(h), c(h);
        } catch {
          var m2 = r.navigator, S = m2 && m2.plugins;
          return [+/* @__PURE__ */ new Date(), r, S, r.screen, c(t)];
        }
      }
      function c(h) {
        return String.fromCharCode.apply(0, h);
      }
      _(e.random(), t);
    }
    function initialize$2(t) {
      seedRandom([], t);
    }
    var propTypes = { SHAPE: "shape" };
    function _typeof$1(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(r) {
        return typeof r;
      } : _typeof$1 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$1(t);
    }
    var ExpressionManager = function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
      initialize$2(BMMath);
      function resetFrame() {
        _lottieGlobal = {};
      }
      function $bm_isInstanceOfArray(t) {
        return t.constructor === Array || t.constructor === Float32Array;
      }
      function isNumerable(t, e) {
        return t === "number" || e instanceof Number || t === "boolean" || t === "string";
      }
      function $bm_neg(t) {
        var e = _typeof$1(t);
        if (e === "number" || t instanceof Number || e === "boolean") return -t;
        if ($bm_isInstanceOfArray(t)) {
          var r, i = t.length, s = [];
          for (r = 0; r < i; r += 1) s[r] = -t[r];
          return s;
        }
        return t.propType ? t.v : -t;
      }
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e) || r === "string" || i === "string") return t + e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] += e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t + e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, n = t.length, a = e.length, l = []; s < n || s < a; ) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] + e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return l;
        }
        return 0;
      }
      var add = sum;
      function sub(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e)) return r === "string" && (t = parseInt(t, 10)), i === "string" && (e = parseInt(e, 10)), t - e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] -= e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t - e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, n = t.length, a = e.length, l = []; s < n || s < a; ) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] - e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return l;
        }
        return 0;
      }
      function mul(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e), s;
        if (isNumerable(r, t) && isNumerable(i, e)) return t * e;
        var n, a;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
          for (a = t.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = t[n] * e;
          return s;
        }
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
          for (a = e.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = t * e[n];
          return s;
        }
        return 0;
      }
      function div(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e), s;
        if (isNumerable(r, t) && isNumerable(i, e)) return t / e;
        var n, a;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
          for (a = t.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = t[n] / e;
          return s;
        }
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
          for (a = e.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = t / e[n];
          return s;
        }
        return 0;
      }
      function mod(t, e) {
        return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(t, e, r) {
        if (e > r) {
          var i = r;
          r = e, e = i;
        }
        return Math.min(Math.max(t, e), r);
      }
      function radiansToDegrees(t) {
        return t / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(t) {
        return t * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(t, e) {
        if (typeof t == "number" || t instanceof Number) return e = e || 0, Math.abs(t - e);
        e || (e = helperLengthArray);
        var r, i = Math.min(t.length, e.length), s = 0;
        for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
        return Math.sqrt(s);
      }
      function normalize(t) {
        return div(t, length(t));
      }
      function rgbToHsl(t) {
        var e = t[0], r = t[1], i = t[2], s = Math.max(e, r, i), n = Math.min(e, r, i), a, l, o = (s + n) / 2;
        if (s === n) a = 0, l = 0;
        else {
          var u = s - n;
          switch (l = o > 0.5 ? u / (2 - s - n) : u / (s + n), s) {
            case e:
              a = (r - i) / u + (r < i ? 6 : 0);
              break;
            case r:
              a = (i - e) / u + 2;
              break;
            case i:
              a = (e - r) / u + 4;
              break;
          }
          a /= 6;
        }
        return [a, l, o, t[3]];
      }
      function hue2rgb(t, e, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
      }
      function hslToRgb(t) {
        var e = t[0], r = t[1], i = t[2], s, n, a;
        if (r === 0) s = i, a = i, n = i;
        else {
          var l = i < 0.5 ? i * (1 + r) : i + r - i * r, o = 2 * i - l;
          s = hue2rgb(o, l, e + 1 / 3), n = hue2rgb(o, l, e), a = hue2rgb(o, l, e - 1 / 3);
        }
        return [s, n, a, t[3]];
      }
      function linear(t, e, r, i, s) {
        if ((i === void 0 || s === void 0) && (i = e, s = r, e = 0, r = 1), r < e) {
          var n = r;
          r = e, e = n;
        }
        if (t <= e) return i;
        if (t >= r) return s;
        var a = r === e ? 0 : (t - e) / (r - e);
        if (!i.length) return i + (s - i) * a;
        var l, o = i.length, u = createTypedArray("float32", o);
        for (l = 0; l < o; l += 1) u[l] = i[l] + (s[l] - i[l]) * a;
        return u;
      }
      function random(t, e) {
        if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
          var r, i = e.length;
          t || (t = createTypedArray("float32", i));
          var s = createTypedArray("float32", i), n = BMMath.random();
          for (r = 0; r < i; r += 1) s[r] = t[r] + n * (e[r] - t[r]);
          return s;
        }
        t === void 0 && (t = 0);
        var a = BMMath.random();
        return t + a * (e - t);
      }
      function createPath(t, e, r, i) {
        var s, n = t.length, a = shapePool.newElement();
        a.setPathData(!!i, n);
        var l = [0, 0], o, u;
        for (s = 0; s < n; s += 1) o = e && e[s] ? e[s] : l, u = r && r[s] ? r[s] : l, a.setTripleAt(t[s][0], t[s][1], u[0] + t[s][0], u[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, true);
        return a;
      }
      function initiateExpression(elem, data, property) {
        function noOp(t) {
          return t;
        }
        if (!elem.globalData.renderConfig.runExpressions) return noOp;
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() {
          return thisProperty.v;
        } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== true, wiggle = (function t(e, r) {
          var i, s, n = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", n);
          e = 5;
          var l = Math.floor(time * e);
          for (i = 0, s = 0; i < l; ) {
            for (s = 0; s < n; s += 1) a[s] += -r + r * 2 * BMMath.random();
            i += 1;
          }
          var o = time * e, u = o - Math.floor(o), g = createTypedArray("float32", n);
          if (n > 1) {
            for (s = 0; s < n; s += 1) g[s] = this.pv[s] + a[s] + (-r + r * 2 * BMMath.random()) * u;
            return g;
          }
          return this.pv + a[0] + (-r + r * 2 * BMMath.random()) * u;
        }).bind(this);
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
        function loopInDuration(t, e) {
          return loopIn(t, e, true);
        }
        function loopOutDuration(t, e) {
          return loopOut(t, e, true);
        }
        this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
        function lookAt(t, e) {
          var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads, s = -Math.atan2(r[1], r[2]) / degToRads;
          return [s, i, 0];
        }
        function easeOut(t, e, r, i, s) {
          return applyEase(easeOutBez, t, e, r, i, s);
        }
        function easeIn(t, e, r, i, s) {
          return applyEase(easeInBez, t, e, r, i, s);
        }
        function ease(t, e, r, i, s) {
          return applyEase(easeInOutBez, t, e, r, i, s);
        }
        function applyEase(t, e, r, i, s, n) {
          s === void 0 ? (s = r, n = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
          var a = t(e);
          if ($bm_isInstanceOfArray(s)) {
            var l, o = s.length, u = createTypedArray("float32", o);
            for (l = 0; l < o; l += 1) u[l] = (n[l] - s[l]) * a + s[l];
            return u;
          }
          return (n - s) * a + s;
        }
        function nearestKey(t) {
          var e, r = data.k.length, i, s;
          if (!data.k.length || typeof data.k[0] == "number") i = 0, s = 0;
          else if (i = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) i = 1, s = data.k[0].t;
          else {
            for (e = 0; e < r - 1; e += 1) if (t === data.k[e].t) {
              i = e + 1, s = data.k[e].t;
              break;
            } else if (t > data.k[e].t && t < data.k[e + 1].t) {
              t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
              break;
            }
            i === -1 && (i = e + 1, s = data.k[e].t);
          }
          var n = {};
          return n.index = i, n.time = s / elem.comp.globalData.frameRate, n;
        }
        function key(t) {
          var e, r, i;
          if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
          t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] };
          var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
          for (i = s.length, r = 0; r < i; r += 1) e[r] = s[r], e.value[r] = s[r];
          return e;
        }
        function framesToTime(t, e) {
          return e || (e = elem.comp.globalData.frameRate), t / e;
        }
        function timeToFrames(t, e) {
          return !t && t !== 0 && (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
        }
        function seedRandom(t) {
          BMMath.seedrandom(randSeed + t);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : "";
        }
        function substr(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : "";
        }
        function posterizeTime(t) {
          time = t === 0 ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
        }
        var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;
        function executeExpression(t) {
          return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt);
        }
        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob;
    }(), Expressions = function() {
      var t = {};
      t.initExpressions = e, t.resetFrame = ExpressionManager.resetFrame;
      function e(r) {
        var i = 0, s = [];
        function n() {
          i += 1;
        }
        function a() {
          i -= 1, i === 0 && o();
        }
        function l(u) {
          s.indexOf(u) === -1 && s.push(u);
        }
        function o() {
          var u, g = s.length;
          for (u = 0; u < g; u += 1) s[u].release();
          s.length = 0;
        }
        r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = n, r.renderer.globalData.popExpression = a, r.renderer.globalData.registerExpressionProperty = l;
      }
      return t;
    }(), MaskManagerInterface = function() {
      function t(r, i) {
        this._mask = r, this._data = i;
      }
      Object.defineProperty(t.prototype, "maskPath", { get: function() {
        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
      } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() {
        return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100;
      } });
      var e = function(i) {
        var s = createSizedArray(i.viewData.length), n, a = i.viewData.length;
        for (n = 0; n < a; n += 1) s[n] = new t(i.viewData[n], i.masksProperties[n]);
        var l = function(u) {
          for (n = 0; n < a; ) {
            if (i.masksProperties[n].nm === u) return s[n];
            n += 1;
          }
          return null;
        };
        return l;
      };
      return e;
    }(), ExpressionPropertyInterface = /* @__PURE__ */ function() {
      var t = { pv: 0, v: 0, mult: 1 }, e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
      function r(a, l, o) {
        Object.defineProperty(a, "velocity", { get: function() {
          return l.getVelocityAtTime(l.comp.currentFrame);
        } }), a.numKeys = l.keyframes ? l.keyframes.length : 0, a.key = function(u) {
          if (!a.numKeys) return 0;
          var g = "";
          "s" in l.keyframes[u - 1] ? g = l.keyframes[u - 1].s : "e" in l.keyframes[u - 2] ? g = l.keyframes[u - 2].e : g = l.keyframes[u - 2].s;
          var C = o === "unidimensional" ? new Number(g) : Object.assign({}, g);
          return C.time = l.keyframes[u - 1].t / l.elem.comp.globalData.frameRate, C.value = o === "unidimensional" ? g[0] : g, C;
        }, a.valueAtTime = l.getValueAtTime, a.speedAtTime = l.getSpeedAtTime, a.velocityAtTime = l.getVelocityAtTime, a.propertyGroup = l.propertyGroup;
      }
      function i(a) {
        (!a || !("pv" in a)) && (a = t);
        var l = 1 / a.mult, o = a.pv * l, u = new Number(o);
        return u.value = o, r(u, a, "unidimensional"), function() {
          return a.k && a.getValue(), o = a.v * l, u.value !== o && (u = new Number(o), u.value = o, r(u, a, "unidimensional")), u;
        };
      }
      function s(a) {
        (!a || !("pv" in a)) && (a = e);
        var l = 1 / a.mult, o = a.data && a.data.l || a.pv.length, u = createTypedArray("float32", o), g = createTypedArray("float32", o);
        return u.value = g, r(u, a, "multidimensional"), function() {
          a.k && a.getValue();
          for (var C = 0; C < o; C += 1) g[C] = a.v[C] * l, u[C] = g[C];
          return u;
        };
      }
      function n() {
        return t;
      }
      return function(a) {
        return a ? a.propType === "unidimensional" ? i(a) : s(a) : n;
      };
    }(), TransformExpressionInterface = /* @__PURE__ */ function() {
      return function(t) {
        function e(a) {
          switch (a) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
              return e.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
              return e.rotation;
            case "ADBE Rotate X":
              return e.xRotation;
            case "ADBE Rotate Y":
              return e.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
              return e.position;
            case "ADBE Position_0":
              return e.xPosition;
            case "ADBE Position_1":
              return e.yPosition;
            case "ADBE Position_2":
              return e.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
              return e.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
              return e.opacity;
            default:
              return null;
          }
        }
        Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) });
        var r, i, s, n;
        return t.p ? n = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", { get: function() {
          return t.p ? n() : [r(), i(), s ? s() : 0];
        } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e;
      };
    }(), LayerExpressionInterface = /* @__PURE__ */ function() {
      function t(u) {
        var g = new Matrix();
        if (u !== void 0) {
          var C = this._elem.finalTransform.mProp.getValueAtTime(u);
          C.clone(g);
        } else {
          var p = this._elem.finalTransform.mProp;
          p.applyToMatrix(g);
        }
        return g;
      }
      function e(u, g) {
        var C = this.getMatrix(g);
        return C.props[12] = 0, C.props[13] = 0, C.props[14] = 0, this.applyPoint(C, u);
      }
      function r(u, g) {
        var C = this.getMatrix(g);
        return this.applyPoint(C, u);
      }
      function i(u, g) {
        var C = this.getMatrix(g);
        return C.props[12] = 0, C.props[13] = 0, C.props[14] = 0, this.invertPoint(C, u);
      }
      function s(u, g) {
        var C = this.getMatrix(g);
        return this.invertPoint(C, u);
      }
      function n(u, g) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var C, p = this._elem.hierarchy.length;
          for (C = 0; C < p; C += 1) this._elem.hierarchy[C].finalTransform.mProp.applyToMatrix(u);
        }
        return u.applyToPointArray(g[0], g[1], g[2] || 0);
      }
      function a(u, g) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var C, p = this._elem.hierarchy.length;
          for (C = 0; C < p; C += 1) this._elem.hierarchy[C].finalTransform.mProp.applyToMatrix(u);
        }
        return u.inversePoint(g);
      }
      function l(u) {
        var g = new Matrix();
        if (g.reset(), this._elem.finalTransform.mProp.applyToMatrix(g), this._elem.hierarchy && this._elem.hierarchy.length) {
          var C, p = this._elem.hierarchy.length;
          for (C = 0; C < p; C += 1) this._elem.hierarchy[C].finalTransform.mProp.applyToMatrix(g);
          return g.inversePoint(u);
        }
        return g.inversePoint(u);
      }
      function o() {
        return [1, 1, 1, 1];
      }
      return function(u) {
        var g;
        function C(d) {
          P.mask = new MaskManagerInterface(d, u);
        }
        function p(d) {
          P.effect = d;
        }
        function P(d) {
          switch (d) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return P.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return g;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return P.effect;
            case "ADBE Text Properties":
              return P.textInterface;
            default:
              return null;
          }
        }
        P.getMatrix = t, P.invertPoint = a, P.applyPoint = n, P.toWorld = r, P.toWorldVec = e, P.fromWorld = s, P.fromWorldVec = i, P.toComp = r, P.fromComp = l, P.sampleImage = o, P.sourceRectAtTime = u.sourceRectAtTime.bind(u), P._elem = u, g = TransformExpressionInterface(u.finalTransform.mProp);
        var y = getDescriptor(g, "anchorPoint");
        return Object.defineProperties(P, { hasParent: { get: function() {
          return u.hierarchy.length;
        } }, parent: { get: function() {
          return u.hierarchy[0].layerInterface;
        } }, rotation: getDescriptor(g, "rotation"), scale: getDescriptor(g, "scale"), position: getDescriptor(g, "position"), opacity: getDescriptor(g, "opacity"), anchorPoint: y, anchor_point: y, transform: { get: function() {
          return g;
        } }, active: { get: function() {
          return u.isInRange;
        } } }), P.startTime = u.data.st, P.index = u.data.ind, P.source = u.data.refId, P.height = u.data.ty === 0 ? u.data.h : 100, P.width = u.data.ty === 0 ? u.data.w : 100, P.inPoint = u.data.ip / u.comp.globalData.frameRate, P.outPoint = u.data.op / u.comp.globalData.frameRate, P._name = u.data.nm, P.registerMaskInterface = C, P.registerEffectsInterface = p, P;
      };
    }(), propertyGroupFactory = /* @__PURE__ */ function() {
      return function(t, e) {
        return function(r) {
          return r = r === void 0 ? 1 : r, r <= 0 ? t : e(r - 1);
        };
      };
    }(), PropertyInterface = /* @__PURE__ */ function() {
      return function(t, e) {
        var r = { _name: t };
        function i(s) {
          return s = s === void 0 ? 1 : s, s <= 0 ? r : e(s - 1);
        }
        return i;
      };
    }(), EffectsExpressionInterface = /* @__PURE__ */ function() {
      var t = { createEffectsInterface: e };
      function e(s, n) {
        if (s.effectsManager) {
          var a = [], l = s.data.ef, o, u = s.effectsManager.effectElements.length;
          for (o = 0; o < u; o += 1) a.push(r(l[o], s.effectsManager.effectElements[o], n, s));
          var g = s.data.ef || [], C = function(P) {
            for (o = 0, u = g.length; o < u; ) {
              if (P === g[o].nm || P === g[o].mn || P === g[o].ix) return a[o];
              o += 1;
            }
            return null;
          };
          return Object.defineProperty(C, "numProperties", { get: function() {
            return g.length;
          } }), C;
        }
        return null;
      }
      function r(s, n, a, l) {
        function o(P) {
          for (var y = s.ef, d = 0, _ = y.length; d < _; ) {
            if (P === y[d].nm || P === y[d].mn || P === y[d].ix) return y[d].ty === 5 ? g[d] : g[d]();
            d += 1;
          }
          throw new Error();
        }
        var u = propertyGroupFactory(o, a), g = [], C, p = s.ef.length;
        for (C = 0; C < p; C += 1) s.ef[C].ty === 5 ? g.push(r(s.ef[C], n.effectElements[C], n.effectElements[C].propertyGroup, l)) : g.push(i(n.effectElements[C], s.ef[C].ty, l, u));
        return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", { get: function() {
          return g[0]();
        } }), Object.defineProperties(o, { numProperties: { get: function() {
          return s.np;
        } }, _name: { value: s.nm }, propertyGroup: { value: u } }), o.enabled = s.en !== 0, o.active = o.enabled, o;
      }
      function i(s, n, a, l) {
        var o = ExpressionPropertyInterface(s.p);
        function u() {
          return n === 10 ? a.comp.compInterface(s.p.v) : o();
        }
        return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", l)), u;
      }
      return t;
    }(), ShapePathInterface = /* @__PURE__ */ function() {
      return function(e, r, i) {
        var s = r.sh;
        function n(l) {
          return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? n.path : null;
        }
        var a = propertyGroupFactory(n, i);
        return s.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, { path: { get: function() {
          return s.k && s.getValue(), s;
        } }, shape: { get: function() {
          return s.k && s.getValue(), s;
        } }, _name: { value: e.nm }, ix: { value: e.ix }, propertyIndex: { value: e.ix }, mn: { value: e.mn }, propertyGroup: { value: i } }), n;
      };
    }(), ShapeExpressionInterface = /* @__PURE__ */ function() {
      function t(y, d, _) {
        var f = [], c, h = y ? y.length : 0;
        for (c = 0; c < h; c += 1) y[c].ty === "gr" ? f.push(r(y[c], d[c], _)) : y[c].ty === "fl" ? f.push(i(y[c], d[c], _)) : y[c].ty === "st" ? f.push(a(y[c], d[c], _)) : y[c].ty === "tm" ? f.push(l(y[c], d[c], _)) : y[c].ty === "tr" || (y[c].ty === "el" ? f.push(u(y[c], d[c], _)) : y[c].ty === "sr" ? f.push(g(y[c], d[c], _)) : y[c].ty === "sh" ? f.push(ShapePathInterface(y[c], d[c], _)) : y[c].ty === "rc" ? f.push(C(y[c], d[c], _)) : y[c].ty === "rd" ? f.push(p(y[c], d[c], _)) : y[c].ty === "rp" ? f.push(P(y[c], d[c], _)) : y[c].ty === "gf" ? f.push(s(y[c], d[c], _)) : f.push(n(y[c], d[c])));
        return f;
      }
      function e(y, d, _) {
        var f, c = function(S) {
          for (var E = 0, T = f.length; E < T; ) {
            if (f[E]._name === S || f[E].mn === S || f[E].propertyIndex === S || f[E].ix === S || f[E].ind === S) return f[E];
            E += 1;
          }
          return typeof S == "number" ? f[S - 1] : null;
        };
        c.propertyGroup = propertyGroupFactory(c, _), f = t(y.it, d.it, c.propertyGroup), c.numProperties = f.length;
        var h = o(y.it[y.it.length - 1], d.it[d.it.length - 1], c.propertyGroup);
        return c.transform = h, c.propertyIndex = y.cix, c._name = y.nm, c;
      }
      function r(y, d, _) {
        var f = function(S) {
          switch (S) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return f.content;
            default:
              return f.transform;
          }
        };
        f.propertyGroup = propertyGroupFactory(f, _);
        var c = e(y, d, f.propertyGroup), h = o(y.it[y.it.length - 1], d.it[d.it.length - 1], f.propertyGroup);
        return f.content = c, f.transform = h, Object.defineProperty(f, "_name", { get: function() {
          return y.nm;
        } }), f.numProperties = y.np, f.propertyIndex = y.ix, f.nm = y.nm, f.mn = y.mn, f;
      }
      function i(y, d, _) {
        function f(c) {
          return c === "Color" || c === "color" ? f.color : c === "Opacity" || c === "opacity" ? f.opacity : null;
        }
        return Object.defineProperties(f, { color: { get: ExpressionPropertyInterface(d.c) }, opacity: { get: ExpressionPropertyInterface(d.o) }, _name: { value: y.nm }, mn: { value: y.mn } }), d.c.setGroupProperty(PropertyInterface("Color", _)), d.o.setGroupProperty(PropertyInterface("Opacity", _)), f;
      }
      function s(y, d, _) {
        function f(c) {
          return c === "Start Point" || c === "start point" ? f.startPoint : c === "End Point" || c === "end point" ? f.endPoint : c === "Opacity" || c === "opacity" ? f.opacity : null;
        }
        return Object.defineProperties(f, { startPoint: { get: ExpressionPropertyInterface(d.s) }, endPoint: { get: ExpressionPropertyInterface(d.e) }, opacity: { get: ExpressionPropertyInterface(d.o) }, type: { get: function() {
          return "a";
        } }, _name: { value: y.nm }, mn: { value: y.mn } }), d.s.setGroupProperty(PropertyInterface("Start Point", _)), d.e.setGroupProperty(PropertyInterface("End Point", _)), d.o.setGroupProperty(PropertyInterface("Opacity", _)), f;
      }
      function n() {
        function y() {
          return null;
        }
        return y;
      }
      function a(y, d, _) {
        var f = propertyGroupFactory(T, _), c = propertyGroupFactory(E, f);
        function h(k) {
          Object.defineProperty(E, y.d[k].nm, { get: ExpressionPropertyInterface(d.d.dataProps[k].p) });
        }
        var m2, S = y.d ? y.d.length : 0, E = {};
        for (m2 = 0; m2 < S; m2 += 1) h(m2), d.d.dataProps[m2].p.setGroupProperty(c);
        function T(k) {
          return k === "Color" || k === "color" ? T.color : k === "Opacity" || k === "opacity" ? T.opacity : k === "Stroke Width" || k === "stroke width" ? T.strokeWidth : null;
        }
        return Object.defineProperties(T, { color: { get: ExpressionPropertyInterface(d.c) }, opacity: { get: ExpressionPropertyInterface(d.o) }, strokeWidth: { get: ExpressionPropertyInterface(d.w) }, dash: { get: function() {
          return E;
        } }, _name: { value: y.nm }, mn: { value: y.mn } }), d.c.setGroupProperty(PropertyInterface("Color", f)), d.o.setGroupProperty(PropertyInterface("Opacity", f)), d.w.setGroupProperty(PropertyInterface("Stroke Width", f)), T;
      }
      function l(y, d, _) {
        function f(h) {
          return h === y.e.ix || h === "End" || h === "end" ? f.end : h === y.s.ix ? f.start : h === y.o.ix ? f.offset : null;
        }
        var c = propertyGroupFactory(f, _);
        return f.propertyIndex = y.ix, d.s.setGroupProperty(PropertyInterface("Start", c)), d.e.setGroupProperty(PropertyInterface("End", c)), d.o.setGroupProperty(PropertyInterface("Offset", c)), f.propertyIndex = y.ix, f.propertyGroup = _, Object.defineProperties(f, { start: { get: ExpressionPropertyInterface(d.s) }, end: { get: ExpressionPropertyInterface(d.e) }, offset: { get: ExpressionPropertyInterface(d.o) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function o(y, d, _) {
        function f(h) {
          return y.a.ix === h || h === "Anchor Point" ? f.anchorPoint : y.o.ix === h || h === "Opacity" ? f.opacity : y.p.ix === h || h === "Position" ? f.position : y.r.ix === h || h === "Rotation" || h === "ADBE Vector Rotation" ? f.rotation : y.s.ix === h || h === "Scale" ? f.scale : y.sk && y.sk.ix === h || h === "Skew" ? f.skew : y.sa && y.sa.ix === h || h === "Skew Axis" ? f.skewAxis : null;
        }
        var c = propertyGroupFactory(f, _);
        return d.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", c)), d.transform.mProps.p.setGroupProperty(PropertyInterface("Position", c)), d.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", c)), d.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", c)), d.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", c)), d.transform.mProps.sk && (d.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", c)), d.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", c))), d.transform.op.setGroupProperty(PropertyInterface("Opacity", c)), Object.defineProperties(f, { opacity: { get: ExpressionPropertyInterface(d.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(d.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(d.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(d.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(d.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(d.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(d.transform.mProps.sa) }, _name: { value: y.nm } }), f.ty = "tr", f.mn = y.mn, f.propertyGroup = _, f;
      }
      function u(y, d, _) {
        function f(m2) {
          return y.p.ix === m2 ? f.position : y.s.ix === m2 ? f.size : null;
        }
        var c = propertyGroupFactory(f, _);
        f.propertyIndex = y.ix;
        var h = d.sh.ty === "tm" ? d.sh.prop : d.sh;
        return h.s.setGroupProperty(PropertyInterface("Size", c)), h.p.setGroupProperty(PropertyInterface("Position", c)), Object.defineProperties(f, { size: { get: ExpressionPropertyInterface(h.s) }, position: { get: ExpressionPropertyInterface(h.p) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function g(y, d, _) {
        function f(m2) {
          return y.p.ix === m2 ? f.position : y.r.ix === m2 ? f.rotation : y.pt.ix === m2 ? f.points : y.or.ix === m2 || m2 === "ADBE Vector Star Outer Radius" ? f.outerRadius : y.os.ix === m2 ? f.outerRoundness : y.ir && (y.ir.ix === m2 || m2 === "ADBE Vector Star Inner Radius") ? f.innerRadius : y.is && y.is.ix === m2 ? f.innerRoundness : null;
        }
        var c = propertyGroupFactory(f, _), h = d.sh.ty === "tm" ? d.sh.prop : d.sh;
        return f.propertyIndex = y.ix, h.or.setGroupProperty(PropertyInterface("Outer Radius", c)), h.os.setGroupProperty(PropertyInterface("Outer Roundness", c)), h.pt.setGroupProperty(PropertyInterface("Points", c)), h.p.setGroupProperty(PropertyInterface("Position", c)), h.r.setGroupProperty(PropertyInterface("Rotation", c)), y.ir && (h.ir.setGroupProperty(PropertyInterface("Inner Radius", c)), h.is.setGroupProperty(PropertyInterface("Inner Roundness", c))), Object.defineProperties(f, { position: { get: ExpressionPropertyInterface(h.p) }, rotation: { get: ExpressionPropertyInterface(h.r) }, points: { get: ExpressionPropertyInterface(h.pt) }, outerRadius: { get: ExpressionPropertyInterface(h.or) }, outerRoundness: { get: ExpressionPropertyInterface(h.os) }, innerRadius: { get: ExpressionPropertyInterface(h.ir) }, innerRoundness: { get: ExpressionPropertyInterface(h.is) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function C(y, d, _) {
        function f(m2) {
          return y.p.ix === m2 ? f.position : y.r.ix === m2 ? f.roundness : y.s.ix === m2 || m2 === "Size" || m2 === "ADBE Vector Rect Size" ? f.size : null;
        }
        var c = propertyGroupFactory(f, _), h = d.sh.ty === "tm" ? d.sh.prop : d.sh;
        return f.propertyIndex = y.ix, h.p.setGroupProperty(PropertyInterface("Position", c)), h.s.setGroupProperty(PropertyInterface("Size", c)), h.r.setGroupProperty(PropertyInterface("Rotation", c)), Object.defineProperties(f, { position: { get: ExpressionPropertyInterface(h.p) }, roundness: { get: ExpressionPropertyInterface(h.r) }, size: { get: ExpressionPropertyInterface(h.s) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function p(y, d, _) {
        function f(m2) {
          return y.r.ix === m2 || m2 === "Round Corners 1" ? f.radius : null;
        }
        var c = propertyGroupFactory(f, _), h = d;
        return f.propertyIndex = y.ix, h.rd.setGroupProperty(PropertyInterface("Radius", c)), Object.defineProperties(f, { radius: { get: ExpressionPropertyInterface(h.rd) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function P(y, d, _) {
        function f(m2) {
          return y.c.ix === m2 || m2 === "Copies" ? f.copies : y.o.ix === m2 || m2 === "Offset" ? f.offset : null;
        }
        var c = propertyGroupFactory(f, _), h = d;
        return f.propertyIndex = y.ix, h.c.setGroupProperty(PropertyInterface("Copies", c)), h.o.setGroupProperty(PropertyInterface("Offset", c)), Object.defineProperties(f, { copies: { get: ExpressionPropertyInterface(h.c) }, offset: { get: ExpressionPropertyInterface(h.o) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      return function(y, d, _) {
        var f;
        function c(m2) {
          if (typeof m2 == "number") return m2 = m2 === void 0 ? 1 : m2, m2 === 0 ? _ : f[m2 - 1];
          for (var S = 0, E = f.length; S < E; ) {
            if (f[S]._name === m2) return f[S];
            S += 1;
          }
          return null;
        }
        function h() {
          return _;
        }
        return c.propertyGroup = propertyGroupFactory(c, h), f = t(y, d, c.propertyGroup), c.numProperties = f.length, c._name = "Contents", c;
      };
    }(), TextExpressionInterface = /* @__PURE__ */ function() {
      return function(t) {
        var e;
        function r(i) {
          switch (i) {
            case "ADBE Text Document":
              return r.sourceText;
            default:
              return null;
          }
        }
        return Object.defineProperty(r, "sourceText", { get: function() {
          t.textProperty.getValue();
          var s = t.textProperty.currentData.t;
          return (!e || s !== e.value) && (e = new String(s), e.value = s || new String(s), Object.defineProperty(e, "style", { get: function() {
            return { fillColor: t.textProperty.currentData.fc };
          } })), e;
        } }), r;
      };
    }();
    function _typeof(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(r) {
        return typeof r;
      } : _typeof = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof(t);
    }
    var FootageInterface = /* @__PURE__ */ function() {
      var t = function(i) {
        var s = "", n = i.getFootageData();
        function a() {
          return s = "", n = i.getFootageData(), l;
        }
        function l(o) {
          if (n[o]) return s = o, n = n[o], _typeof(n) === "object" ? l : n;
          var u = o.indexOf(s);
          if (u !== -1) {
            var g = parseInt(o.substr(u + s.length), 10);
            return n = n[g], _typeof(n) === "object" ? l : n;
          }
          return "";
        }
        return a;
      }, e = function(i) {
        function s(n) {
          return n === "Outline" ? s.outlineInterface() : null;
        }
        return s._name = "Outline", s.outlineInterface = t(i), s;
      };
      return function(r) {
        function i(s) {
          return s === "Data" ? i.dataInterface : null;
        }
        return i._name = "Data", i.dataInterface = e(r), i;
      };
    }(), interfaces = { layer: LayerExpressionInterface, effects: EffectsExpressionInterface, comp: CompExpressionInterface, shape: ShapeExpressionInterface, text: TextExpressionInterface, footage: FootageInterface };
    function getInterface(t) {
      return interfaces[t] || null;
    }
    var expressionHelpers = /* @__PURE__ */ function() {
      function t(a, l, o) {
        l.x && (o.k = true, o.x = true, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(a, l, o).bind(o)));
      }
      function e(a) {
        return a *= this.elem.globalData.frameRate, a -= this.offsetTime, a !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < a ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(a, this._cachingAtTime), this._cachingAtTime.lastFrame = a), this._cachingAtTime.value;
      }
      function r(a) {
        var l = -0.01, o = this.getValueAtTime(a), u = this.getValueAtTime(a + l), g = 0;
        if (o.length) {
          var C;
          for (C = 0; C < o.length; C += 1) g += Math.pow(u[C] - o[C], 2);
          g = Math.sqrt(g) * 100;
        } else g = 0;
        return g;
      }
      function i(a) {
        if (this.vel !== void 0) return this.vel;
        var l = -1e-3, o = this.getValueAtTime(a), u = this.getValueAtTime(a + l), g;
        if (o.length) {
          g = createTypedArray("float32", o.length);
          var C;
          for (C = 0; C < o.length; C += 1) g[C] = (u[C] - o[C]) / l;
        } else g = (u - o) / l;
        return g;
      }
      function s() {
        return this.pv;
      }
      function n(a) {
        this.propertyGroup = a;
      }
      return { searchExpressions: t, getSpeedAtTime: r, getVelocityAtTime: i, getValueAtTime: e, getStaticValueAtTime: s, setGroupProperty: n };
    }();
    function addPropertyDecorator() {
      function t(p, P, y) {
        if (!this.k || !this.keyframes) return this.pv;
        p = p ? p.toLowerCase() : "";
        var d = this.comp.renderedFrame, _ = this.keyframes, f = _[_.length - 1].t;
        if (d <= f) return this.pv;
        var c, h;
        y ? (P ? c = Math.abs(f - this.elem.comp.globalData.frameRate * P) : c = Math.max(0, f - this.elem.data.ip), h = f - c) : ((!P || P > _.length - 1) && (P = _.length - 1), h = _[_.length - 1 - P].t, c = f - h);
        var m2, S, E;
        if (p === "pingpong") {
          var T = Math.floor((d - h) / c);
          if (T % 2 !== 0) return this.getValueAtTime((c - (d - h) % c + h) / this.comp.globalData.frameRate, 0);
        } else if (p === "offset") {
          var k = this.getValueAtTime(h / this.comp.globalData.frameRate, 0), F = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), O = this.getValueAtTime(((d - h) % c + h) / this.comp.globalData.frameRate, 0), V = Math.floor((d - h) / c);
          if (this.pv.length) {
            for (E = new Array(k.length), S = E.length, m2 = 0; m2 < S; m2 += 1) E[m2] = (F[m2] - k[m2]) * V + O[m2];
            return E;
          }
          return (F - k) * V + O;
        } else if (p === "continue") {
          var L = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), D = this.getValueAtTime((f - 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (E = new Array(L.length), S = E.length, m2 = 0; m2 < S; m2 += 1) E[m2] = L[m2] + (L[m2] - D[m2]) * ((d - f) / this.comp.globalData.frameRate) / 5e-4;
            return E;
          }
          return L + (L - D) * ((d - f) / 1e-3);
        }
        return this.getValueAtTime(((d - h) % c + h) / this.comp.globalData.frameRate, 0);
      }
      function e(p, P, y) {
        if (!this.k) return this.pv;
        p = p ? p.toLowerCase() : "";
        var d = this.comp.renderedFrame, _ = this.keyframes, f = _[0].t;
        if (d >= f) return this.pv;
        var c, h;
        y ? (P ? c = Math.abs(this.elem.comp.globalData.frameRate * P) : c = Math.max(0, this.elem.data.op - f), h = f + c) : ((!P || P > _.length - 1) && (P = _.length - 1), h = _[P].t, c = h - f);
        var m2, S, E;
        if (p === "pingpong") {
          var T = Math.floor((f - d) / c);
          if (T % 2 === 0) return this.getValueAtTime(((f - d) % c + f) / this.comp.globalData.frameRate, 0);
        } else if (p === "offset") {
          var k = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), F = this.getValueAtTime(h / this.comp.globalData.frameRate, 0), O = this.getValueAtTime((c - (f - d) % c + f) / this.comp.globalData.frameRate, 0), V = Math.floor((f - d) / c) + 1;
          if (this.pv.length) {
            for (E = new Array(k.length), S = E.length, m2 = 0; m2 < S; m2 += 1) E[m2] = O[m2] - (F[m2] - k[m2]) * V;
            return E;
          }
          return O - (F - k) * V;
        } else if (p === "continue") {
          var L = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), D = this.getValueAtTime((f + 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (E = new Array(L.length), S = E.length, m2 = 0; m2 < S; m2 += 1) E[m2] = L[m2] + (L[m2] - D[m2]) * (f - d) / 1e-3;
            return E;
          }
          return L + (L - D) * (f - d) / 1e-3;
        }
        return this.getValueAtTime((c - ((f - d) % c + f)) / this.comp.globalData.frameRate, 0);
      }
      function r(p, P) {
        if (!this.k) return this.pv;
        if (p = (p || 0.4) * 0.5, P = Math.floor(P || 5), P <= 1) return this.pv;
        var y = this.comp.renderedFrame / this.comp.globalData.frameRate, d = y - p, _ = y + p, f = P > 1 ? (_ - d) / (P - 1) : 1, c = 0, h = 0, m2;
        this.pv.length ? m2 = createTypedArray("float32", this.pv.length) : m2 = 0;
        for (var S; c < P; ) {
          if (S = this.getValueAtTime(d + c * f), this.pv.length) for (h = 0; h < this.pv.length; h += 1) m2[h] += S[h];
          else m2 += S;
          c += 1;
        }
        if (this.pv.length) for (h = 0; h < this.pv.length; h += 1) m2[h] /= P;
        else m2 /= P;
        return m2;
      }
      function i(p) {
        this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
        var P = this._transformCachingAtTime.v;
        if (P.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var y = this.a.getValueAtTime(p);
          P.translate(-y[0] * this.a.mult, -y[1] * this.a.mult, y[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var d = this.s.getValueAtTime(p);
          P.scale(d[0] * this.s.mult, d[1] * this.s.mult, d[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var _ = this.sk.getValueAtTime(p), f = this.sa.getValueAtTime(p);
          P.skewFromAxis(-_ * this.sk.mult, f * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var c = this.r.getValueAtTime(p);
          P.rotate(-c * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var h = this.rz.getValueAtTime(p), m2 = this.ry.getValueAtTime(p), S = this.rx.getValueAtTime(p), E = this.or.getValueAtTime(p);
          P.rotateZ(-h * this.rz.mult).rotateY(m2 * this.ry.mult).rotateX(S * this.rx.mult).rotateZ(-E[2] * this.or.mult).rotateY(E[1] * this.or.mult).rotateX(E[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var T = this.px.getValueAtTime(p), k = this.py.getValueAtTime(p);
          if (this.data.p.z) {
            var F = this.pz.getValueAtTime(p);
            P.translate(T * this.px.mult, k * this.py.mult, -F * this.pz.mult);
          } else P.translate(T * this.px.mult, k * this.py.mult, 0);
        } else {
          var O = this.p.getValueAtTime(p);
          P.translate(O[0] * this.p.mult, O[1] * this.p.mult, -O[2] * this.p.mult);
        }
        return P;
      }
      function s() {
        return this.v.clone(new Matrix());
      }
      var n = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(p, P, y) {
        var d = n(p, P, y);
        return d.dynamicProperties.length ? d.getValueAtTime = i.bind(d) : d.getValueAtTime = s.bind(d), d.setGroupProperty = expressionHelpers.setGroupProperty, d;
      };
      var a = PropertyFactory.getProp;
      PropertyFactory.getProp = function(p, P, y, d, _) {
        var f = a(p, P, y, d, _);
        f.kf ? f.getValueAtTime = expressionHelpers.getValueAtTime.bind(f) : f.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(f), f.setGroupProperty = expressionHelpers.setGroupProperty, f.loopOut = t, f.loopIn = e, f.smooth = r, f.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(f), f.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(f), f.numKeys = P.a === 1 ? P.k.length : 0, f.propertyIndex = P.ix;
        var c = 0;
        return y !== 0 && (c = createTypedArray("float32", P.a === 1 ? P.k[0].s.length : P.k.length)), f._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: c }, expressionHelpers.searchExpressions(p, P, f), f.k && _.addDynamicProperty(f), f;
      };
      function l(p) {
        return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), p *= this.elem.globalData.frameRate, p -= this.offsetTime, p !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < p ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = p, this.interpolateShape(p, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }
      var o = ShapePropertyFactory.getConstructorFunction(), u = ShapePropertyFactory.getKeyframedConstructorFunction();
      function g() {
      }
      g.prototype = { vertices: function(P, y) {
        this.k && this.getValue();
        var d = this.v;
        y !== void 0 && (d = this.getValueAtTime(y, 0));
        var _, f = d._length, c = d[P], h = d.v, m2 = createSizedArray(f);
        for (_ = 0; _ < f; _ += 1) P === "i" || P === "o" ? m2[_] = [c[_][0] - h[_][0], c[_][1] - h[_][1]] : m2[_] = [c[_][0], c[_][1]];
        return m2;
      }, points: function(P) {
        return this.vertices("v", P);
      }, inTangents: function(P) {
        return this.vertices("i", P);
      }, outTangents: function(P) {
        return this.vertices("o", P);
      }, isClosed: function() {
        return this.v.c;
      }, pointOnPath: function(P, y) {
        var d = this.v;
        y !== void 0 && (d = this.getValueAtTime(y, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
        for (var _ = this._segmentsLength, f = _.lengths, c = _.totalLength * P, h = 0, m2 = f.length, S = 0, E; h < m2; ) {
          if (S + f[h].addedLength > c) {
            var T = h, k = d.c && h === m2 - 1 ? 0 : h + 1, F = (c - S) / f[h].addedLength;
            E = bez.getPointInSegment(d.v[T], d.v[k], d.o[T], d.i[k], F, f[h]);
            break;
          } else S += f[h].addedLength;
          h += 1;
        }
        return E || (E = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]), E;
      }, vectorOnPath: function(P, y, d) {
        P == 1 ? P = this.v.c : P == 0 && (P = 0.999);
        var _ = this.pointOnPath(P, y), f = this.pointOnPath(P + 1e-3, y), c = f[0] - _[0], h = f[1] - _[1], m2 = Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2));
        if (m2 === 0) return [0, 0];
        var S = d === "tangent" ? [c / m2, h / m2] : [-h / m2, c / m2];
        return S;
      }, tangentOnPath: function(P, y) {
        return this.vectorOnPath(P, y, "tangent");
      }, normalOnPath: function(P, y) {
        return this.vectorOnPath(P, y, "normal");
      }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([g], o), extendPrototype([g], u), u.prototype.getValueAtTime = l, u.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var C = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(p, P, y, d, _) {
        var f = C(p, P, y, d, _);
        return f.propertyIndex = P.ix, f.lock = false, y === 3 ? expressionHelpers.searchExpressions(p, P.pt, f) : y === 4 && expressionHelpers.searchExpressions(p, P.ks, f), f.k && p.addDynamicProperty(f), f;
      };
    }
    function initialize$1() {
      addPropertyDecorator();
    }
    function addDecorator() {
      function t() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), true) : null;
      }
      TextProperty.prototype.getExpressionValue = function(e, r) {
        var i = this.calculateExpression(r);
        if (e.t !== i) {
          var s = {};
          return this.copyData(s, e), s.t = i.toString(), s.__complete = false, s;
        }
        return e;
      }, TextProperty.prototype.searchProperty = function() {
        var e = this.searchKeyframes(), r = this.searchExpressions();
        return this.kf = e || r, this.kf;
      }, TextProperty.prototype.searchExpressions = t;
    }
    function initialize() {
      addDecorator();
    }
    function TransformEffect() {
    }
    TransformEffect.prototype.init = function(t) {
      this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix(), this.opacity = -1, this._mdf = false, this._opMdf = false;
    }, TransformEffect.prototype.renderFrame = function(t) {
      if (this._opMdf = false, this._mdf = false, t || this.effectsManager._mdf) {
        var e = this.effectsManager.effectElements, r = e[0].p.v, i = e[1].p.v, s = e[2].p.v === 1, n = e[3].p.v, a = s ? n : e[4].p.v, l = e[5].p.v, o = e[6].p.v, u = e[7].p.v;
        this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(a * 0.01, n * 0.01, 1), this.matrix.rotate(-u * degToRads), this.matrix.skewFromAxis(-l * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = true, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = true);
      }
    };
    function CVTransformEffect(t) {
      this.init(t);
    }
    return extendPrototype([TransformEffect], CVTransformEffect), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(35, CVTransformEffect), lottie;
  });
});
var lottie_canvasCDSUBMCL = mt();
export {
  lottie_canvasCDSUBMCL as default
};
/*! Bundled license information:

@dotlottie/common/dist/lottie_canvas-CDSUBMCL.js:
  (*! Bundled license information:
  
  lottie-web/build/player/lottie_canvas.js:
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
//# sourceMappingURL=lottie_canvas-CDSUBMCL-GOPO4M26.js.map
