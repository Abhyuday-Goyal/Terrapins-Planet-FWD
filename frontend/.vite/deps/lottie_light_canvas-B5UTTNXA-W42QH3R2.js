import {
  m
} from "./chunk-USPGI4ZR.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/lottie_light_canvas-B5UTTNXA.js
var zr = m((Oe, ni) => {
  typeof navigator < "u" && function(ye, he) {
    typeof Oe == "object" && typeof ni < "u" ? ni.exports = he() : typeof define == "function" && define.amd ? define(he) : (ye = typeof globalThis < "u" ? globalThis : ye || self, ye.lottie = he());
  }(Oe, function() {
    var ye = "http://www.w3.org/2000/svg", he = "", Ti = false, ai = -999999, Es = function(e) {
      Ti = !!e;
    }, Fs = function() {
      return Ti;
    }, Ls = function(e) {
      he = e;
    }, bt = function() {
      return he;
    };
    function _t(t) {
      return document.createElement(t);
    }
    function Y(t, e) {
      var i, s = t.length, n;
      for (i = 0; i < s; i += 1) {
        n = t[i].prototype;
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e.prototype[r] = n[r]);
      }
    }
    function Is(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var Vs = function() {
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
        var s, n = this.audios.length;
        for (s = 0; s < n; s += 1) this.audios[s].setRate(i);
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
    }(), nt = /* @__PURE__ */ function() {
      function t(i, s) {
        var n = 0, r = [], a;
        switch (i) {
          case "int16":
          case "uint8c":
            a = 1;
            break;
          default:
            a = 1.1;
            break;
        }
        for (n = 0; n < s; n += 1) r.push(a);
        return r;
      }
      function e(i, s) {
        return i === "float32" ? new Float32Array(s) : i === "int16" ? new Int16Array(s) : i === "uint8c" ? new Uint8ClampedArray(s) : t(i, s);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
    }();
    function Q(t) {
      return Array.apply(null, { length: t });
    }
    var Mi = true, Ei = null, oi = "", Rs = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), Mt = Math.pow, Ii = Math.sqrt, pt = Math.floor, Os = Math.min;
    var Vi = 150, tt = Math.PI / 180, Yt = 0.5519;
    function li(t, e, i, s) {
      this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1;
    }
    function Oi(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function Di(t, e, i, s) {
      this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1;
    }
    function Bi(t, e, i) {
      this.type = t, this.firstFrame = e, this.totalFrames = i;
    }
    function zi(t, e) {
      this.type = t, this.target = e;
    }
    function Ds(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function Bs(t) {
      this.type = "configError", this.nativeError = t;
    }
    var vt = /* @__PURE__ */ function() {
      var t = 0;
      return function() {
        return t += 1, oi + "__lottie_element_" + t;
      };
    }();
    function fi(t, e, i) {
      var s, n, r, a, l, o, c, d;
      switch (a = Math.floor(t * 6), l = t * 6 - a, o = i * (1 - e), c = i * (1 - l * e), d = i * (1 - (1 - l) * e), a % 6) {
        case 0:
          s = i, n = d, r = o;
          break;
        case 1:
          s = c, n = i, r = o;
          break;
        case 2:
          s = o, n = i, r = d;
          break;
        case 3:
          s = o, n = c, r = i;
          break;
        case 4:
          s = d, n = o, r = i;
          break;
        case 5:
          s = i, n = o, r = c;
          break;
      }
      return [s, n, r];
    }
    function pi(t, e, i) {
      var s = Math.max(t, e, i), n = Math.min(t, e, i), r = s - n, a, l = s === 0 ? 0 : r / s, o = s / 255;
      switch (s) {
        case n:
          a = 0;
          break;
        case t:
          a = e - i + r * (e < i ? 6 : 0), a /= 6 * r;
          break;
        case e:
          a = i - t + r * 2, a /= 6 * r;
          break;
        case i:
          a = t - e + r * 4, a /= 6 * r;
          break;
      }
      return [a, l, o];
    }
    function Ni(t, e) {
      var i = pi(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), fi(i[0], i[1], i[2]);
    }
    function qi(t, e) {
      var i = pi(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), fi(i[0], i[1], i[2]);
    }
    function Wi(t, e) {
      var i = pi(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), fi(i[0], i[1], i[2]);
    }
    (function() {
      var t = [], e, i;
      for (e = 0; e < 256; e += 1) i = e.toString(16), t[e] = i.length === 1 ? "0" + i : i;
      return function(s, n, r) {
        return s < 0 && (s = 0), n < 0 && (n = 0), r < 0 && (r = 0), "#" + t[s] + t[n] + t[r];
      };
    })();
    var zs = function(e) {
      Mi = !!e;
    }, Ns = function() {
      return Mi;
    }, qs = function(e) {
      Ei = e;
    }, Be = function() {
      return Ei;
    }, ze = function(e) {
      Vi = e;
    }, be = function() {
      return Vi;
    }, Ws = function(e) {
      oi = e;
    };
    function q(t) {
      return document.createElementNS(ye, t);
    }
    function Ne(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ne = function(i) {
        return typeof i;
      } : Ne = function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, Ne(t);
    }
    var _e = /* @__PURE__ */ function() {
      var t = 1, e = [], i, s, n = { onmessage: function() {
      }, postMessage: function(C) {
        i({ data: C });
      } }, r = { postMessage: function(C) {
        n.onmessage({ data: C });
      } };
      function a(f) {
        if (window.Worker && window.Blob && Fs()) {
          var C = new Blob(["var _workerSelf = self; self.onmessage = ", f.toString()], { type: "text/javascript" }), S = URL.createObjectURL(C);
          return new Worker(S);
        }
        return i = f, n;
      }
      function l() {
        s || (s = a(function(C) {
          function S() {
            function A(F, m2) {
              var k, h, p = F.length, E, w, R, N;
              for (h = 0; h < p; h += 1) if (k = F[h], "ks" in k && !k.completed) {
                if (k.completed = true, k.hasMask) {
                  var j = k.masksProperties;
                  for (w = j.length, E = 0; E < w; E += 1) if (j[E].pt.k.i) _(j[E].pt.k);
                  else for (N = j[E].pt.k.length, R = 0; R < N; R += 1) j[E].pt.k[R].s && _(j[E].pt.k[R].s[0]), j[E].pt.k[R].e && _(j[E].pt.k[R].e[0]);
                }
                k.ty === 0 ? (k.layers = u(k.refId, m2), A(k.layers, m2)) : k.ty === 4 ? v(k.shapes) : k.ty === 5 && G(k);
              }
            }
            function b(F, m2) {
              if (F) {
                var k = 0, h = F.length;
                for (k = 0; k < h; k += 1) F[k].t === 1 && (F[k].data.layers = u(F[k].data.refId, m2), A(F[k].data.layers, m2));
              }
            }
            function g(F, m2) {
              for (var k = 0, h = m2.length; k < h; ) {
                if (m2[k].id === F) return m2[k];
                k += 1;
              }
              return null;
            }
            function u(F, m2) {
              var k = g(F, m2);
              return k ? k.layers.__used ? JSON.parse(JSON.stringify(k.layers)) : (k.layers.__used = true, k.layers) : null;
            }
            function v(F) {
              var m2, k = F.length, h, p;
              for (m2 = k - 1; m2 >= 0; m2 -= 1) if (F[m2].ty === "sh") if (F[m2].ks.k.i) _(F[m2].ks.k);
              else for (p = F[m2].ks.k.length, h = 0; h < p; h += 1) F[m2].ks.k[h].s && _(F[m2].ks.k[h].s[0]), F[m2].ks.k[h].e && _(F[m2].ks.k[h].e[0]);
              else F[m2].ty === "gr" && v(F[m2].it);
            }
            function _(F) {
              var m2, k = F.i.length;
              for (m2 = 0; m2 < k; m2 += 1) F.i[m2][0] += F.v[m2][0], F.i[m2][1] += F.v[m2][1], F.o[m2][0] += F.v[m2][0], F.o[m2][1] += F.v[m2][1];
            }
            function P(F, m2) {
              var k = m2 ? m2.split(".") : [100, 100, 100];
              return F[0] > k[0] ? true : k[0] > F[0] ? false : F[1] > k[1] ? true : k[1] > F[1] ? false : F[2] > k[2] ? true : k[2] > F[2] ? false : null;
            }
            var T = /* @__PURE__ */ function() {
              var F = [4, 4, 14];
              function m2(h) {
                var p = h.t.d;
                h.t.d = { k: [{ s: p, t: 0 }] };
              }
              function k(h) {
                var p, E = h.length;
                for (p = 0; p < E; p += 1) h[p].ty === 5 && m2(h[p]);
              }
              return function(h) {
                if (P(F, h.v) && (k(h.layers), h.assets)) {
                  var p, E = h.assets.length;
                  for (p = 0; p < E; p += 1) h.assets[p].layers && k(h.assets[p].layers);
                }
              };
            }(), M = /* @__PURE__ */ function() {
              var F = [4, 7, 99];
              return function(m2) {
                if (m2.chars && !P(F, m2.v)) {
                  var k, h = m2.chars.length;
                  for (k = 0; k < h; k += 1) {
                    var p = m2.chars[k];
                    p.data && p.data.shapes && (v(p.data.shapes), p.data.ip = 0, p.data.op = 99999, p.data.st = 0, p.data.sr = 1, p.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, m2.chars[k].t || (p.data.shapes.push({ ty: "no" }), p.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                  }
                }
              };
            }(), L = /* @__PURE__ */ function() {
              var F = [5, 7, 15];
              function m2(h) {
                var p = h.t.p;
                typeof p.a == "number" && (p.a = { a: 0, k: p.a }), typeof p.p == "number" && (p.p = { a: 0, k: p.p }), typeof p.r == "number" && (p.r = { a: 0, k: p.r });
              }
              function k(h) {
                var p, E = h.length;
                for (p = 0; p < E; p += 1) h[p].ty === 5 && m2(h[p]);
              }
              return function(h) {
                if (P(F, h.v) && (k(h.layers), h.assets)) {
                  var p, E = h.assets.length;
                  for (p = 0; p < E; p += 1) h.assets[p].layers && k(h.assets[p].layers);
                }
              };
            }(), W = /* @__PURE__ */ function() {
              var F = [4, 1, 9];
              function m2(h) {
                var p, E = h.length, w, R;
                for (p = 0; p < E; p += 1) if (h[p].ty === "gr") m2(h[p].it);
                else if (h[p].ty === "fl" || h[p].ty === "st") if (h[p].c.k && h[p].c.k[0].i) for (R = h[p].c.k.length, w = 0; w < R; w += 1) h[p].c.k[w].s && (h[p].c.k[w].s[0] /= 255, h[p].c.k[w].s[1] /= 255, h[p].c.k[w].s[2] /= 255, h[p].c.k[w].s[3] /= 255), h[p].c.k[w].e && (h[p].c.k[w].e[0] /= 255, h[p].c.k[w].e[1] /= 255, h[p].c.k[w].e[2] /= 255, h[p].c.k[w].e[3] /= 255);
                else h[p].c.k[0] /= 255, h[p].c.k[1] /= 255, h[p].c.k[2] /= 255, h[p].c.k[3] /= 255;
              }
              function k(h) {
                var p, E = h.length;
                for (p = 0; p < E; p += 1) h[p].ty === 4 && m2(h[p].shapes);
              }
              return function(h) {
                if (P(F, h.v) && (k(h.layers), h.assets)) {
                  var p, E = h.assets.length;
                  for (p = 0; p < E; p += 1) h.assets[p].layers && k(h.assets[p].layers);
                }
              };
            }(), B = /* @__PURE__ */ function() {
              var F = [4, 4, 18];
              function m2(h) {
                var p, E = h.length, w, R;
                for (p = E - 1; p >= 0; p -= 1) if (h[p].ty === "sh") if (h[p].ks.k.i) h[p].ks.k.c = h[p].closed;
                else for (R = h[p].ks.k.length, w = 0; w < R; w += 1) h[p].ks.k[w].s && (h[p].ks.k[w].s[0].c = h[p].closed), h[p].ks.k[w].e && (h[p].ks.k[w].e[0].c = h[p].closed);
                else h[p].ty === "gr" && m2(h[p].it);
              }
              function k(h) {
                var p, E, w = h.length, R, N, j, X;
                for (E = 0; E < w; E += 1) {
                  if (p = h[E], p.hasMask) {
                    var H = p.masksProperties;
                    for (N = H.length, R = 0; R < N; R += 1) if (H[R].pt.k.i) H[R].pt.k.c = H[R].cl;
                    else for (X = H[R].pt.k.length, j = 0; j < X; j += 1) H[R].pt.k[j].s && (H[R].pt.k[j].s[0].c = H[R].cl), H[R].pt.k[j].e && (H[R].pt.k[j].e[0].c = H[R].cl);
                  }
                  p.ty === 4 && m2(p.shapes);
                }
              }
              return function(h) {
                if (P(F, h.v) && (k(h.layers), h.assets)) {
                  var p, E = h.assets.length;
                  for (p = 0; p < E; p += 1) h.assets[p].layers && k(h.assets[p].layers);
                }
              };
            }();
            function V(F) {
              F.__complete || (W(F), T(F), M(F), L(F), B(F), A(F.layers, F.assets), b(F.chars, F.assets), F.__complete = true);
            }
            function G(F) {
              F.t.a.length === 0 && "m" in F.t.p;
            }
            var O = {};
            return O.completeData = V, O.checkColors = W, O.checkChars = M, O.checkPathProperties = L, O.checkShapes = B, O.completeLayers = A, O;
          }
          if (r.dataManager || (r.dataManager = S()), r.assetLoader || (r.assetLoader = /* @__PURE__ */ function() {
            function A(g) {
              var u = g.getResponseHeader("content-type");
              return u && g.responseType === "json" && u.indexOf("json") !== -1 || g.response && Ne(g.response) === "object" ? g.response : g.response && typeof g.response == "string" ? JSON.parse(g.response) : g.responseText ? JSON.parse(g.responseText) : null;
            }
            function b(g, u, v, _) {
              var P, T = new XMLHttpRequest();
              try {
                T.responseType = "json";
              } catch {
              }
              T.onreadystatechange = function() {
                if (T.readyState === 4) if (T.status === 200) P = A(T), v(P);
                else try {
                  P = A(T), v(P);
                } catch (M) {
                  _ && _(M);
                }
              };
              try {
                T.open(["G", "E", "T"].join(""), g, true);
              } catch {
                T.open(["G", "E", "T"].join(""), u + "/" + g, true);
              }
              T.send();
            }
            return { load: b };
          }()), C.data.type === "loadAnimation") r.assetLoader.load(C.data.path, C.data.fullPath, function(A) {
            r.dataManager.completeData(A), r.postMessage({ id: C.data.id, payload: A, status: "success" });
          }, function() {
            r.postMessage({ id: C.data.id, status: "error" });
          });
          else if (C.data.type === "complete") {
            var y = C.data.animation;
            r.dataManager.completeData(y), r.postMessage({ id: C.data.id, payload: y, status: "success" });
          } else C.data.type === "loadData" && r.assetLoader.load(C.data.path, C.data.fullPath, function(A) {
            r.postMessage({ id: C.data.id, payload: A, status: "success" });
          }, function() {
            r.postMessage({ id: C.data.id, status: "error" });
          });
        }), s.onmessage = function(f) {
          var C = f.data, S = C.id, y = e[S];
          e[S] = null, C.status === "success" ? y.onComplete(C.payload) : y.onError && y.onError();
        });
      }
      function o(f, C) {
        t += 1;
        var S = "processId_" + t;
        return e[S] = { onComplete: f, onError: C }, S;
      }
      function c(f, C, S) {
        l();
        var y = o(C, S);
        s.postMessage({ type: "loadAnimation", path: f, fullPath: window.location.origin + window.location.pathname, id: y });
      }
      function d(f, C, S) {
        l();
        var y = o(C, S);
        s.postMessage({ type: "loadData", path: f, fullPath: window.location.origin + window.location.pathname, id: y });
      }
      function x(f, C, S) {
        l();
        var y = o(C, S);
        s.postMessage({ type: "complete", animation: f, id: y });
      }
      return { loadAnimation: c, loadData: d, completeAnimation: x };
    }(), js = function() {
      var t = function() {
        var b = _t("canvas");
        b.width = 1, b.height = 1;
        var g = b.getContext("2d");
        return g.fillStyle = "rgba(0,0,0,0)", g.fillRect(0, 0, 1, 1), b;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function s(b, g, u) {
        var v = "";
        if (b.e) v = b.p;
        else if (g) {
          var _ = b.p;
          _.indexOf("images/") !== -1 && (_ = _.split("/")[1]), v = g + _;
        } else v = u, v += b.u ? b.u : "", v += b.p;
        return v;
      }
      function n(b) {
        var g = 0, u = setInterval((function() {
          var v = b.getBBox();
          (v.width || g > 500) && (this._imageLoaded(), clearInterval(u)), g += 1;
        }).bind(this), 50);
      }
      function r(b) {
        var g = s(b, this.assetsPath, this.path), u = q("image");
        Rs ? this.testImageLoaded(u) : u.addEventListener("load", this._imageLoaded, false), u.addEventListener("error", (function() {
          v.img = t, this._imageLoaded();
        }).bind(this), false), u.setAttributeNS("http://www.w3.org/1999/xlink", "href", g), this._elementHelper.append ? this._elementHelper.append(u) : this._elementHelper.appendChild(u);
        var v = { img: u, assetData: b };
        return v;
      }
      function a(b) {
        var g = s(b, this.assetsPath, this.path), u = _t("img");
        u.crossOrigin = "anonymous", u.addEventListener("load", this._imageLoaded, false), u.addEventListener("error", (function() {
          v.img = t, this._imageLoaded();
        }).bind(this), false), u.src = g;
        var v = { img: u, assetData: b };
        return v;
      }
      function l(b) {
        var g = { assetData: b }, u = s(b, this.assetsPath, this.path);
        return _e.loadData(u, (function(v) {
          g.img = v, this._footageLoaded();
        }).bind(this), (function() {
          g.img = {}, this._footageLoaded();
        }).bind(this)), g;
      }
      function o(b, g) {
        this.imagesLoadedCb = g;
        var u, v = b.length;
        for (u = 0; u < v; u += 1) b[u].layers || (!b[u].t || b[u].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(b[u]))) : b[u].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(b[u]))));
      }
      function c(b) {
        this.path = b || "";
      }
      function d(b) {
        this.assetsPath = b || "";
      }
      function x(b) {
        for (var g = 0, u = this.images.length; g < u; ) {
          if (this.images[g].assetData === b) return this.images[g].img;
          g += 1;
        }
        return null;
      }
      function f() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function C() {
        return this.totalImages === this.loadedAssets;
      }
      function S() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function y(b, g) {
        b === "svg" ? (this._elementHelper = g, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function A() {
        this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return A.prototype = { loadAssets: o, setAssetsPath: d, setPath: c, loadedImages: C, loadedFootages: S, destroy: f, getAsset: x, createImgData: a, createImageData: r, imageLoaded: e, footageLoaded: i, setCacheType: y }, A;
    }();
    function Gi() {
    }
    Gi.prototype = { triggerEvent: function(e, i) {
      if (this._cbs[e]) for (var s = this._cbs[e], n = 0; n < s.length; n += 1) s[n](i);
    }, addEventListener: function(e, i) {
      return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(i), (function() {
        this.removeEventListener(e, i);
      }).bind(this);
    }, removeEventListener: function(e, i) {
      if (!i) this._cbs[e] = null;
      else if (this._cbs[e]) {
        for (var s = 0, n = this._cbs[e].length; s < n; ) this._cbs[e][s] === i && (this._cbs[e].splice(s, 1), s -= 1, n -= 1), s += 1;
        this._cbs[e].length || (this._cbs[e] = null);
      }
    } };
    var Gs = /* @__PURE__ */ function() {
      function t(e) {
        for (var i = e.split(`\r
`), s = {}, n, r = 0, a = 0; a < i.length; a += 1) n = i[a].split(":"), n.length === 2 && (s[n[0]] = n[1].trim(), r += 1);
        if (r === 0) throw new Error();
        return s;
      }
      return function(e) {
        for (var i = [], s = 0; s < e.length; s += 1) {
          var n = e[s], r = { time: n.tm, duration: n.dr };
          try {
            r.payload = JSON.parse(e[s].cm);
          } catch {
            try {
              r.payload = t(e[s].cm);
            } catch {
              r.payload = { name: e[s].cm };
            }
          }
          i.push(r);
        }
        return i;
      };
    }(), Ys = /* @__PURE__ */ function() {
      function t(e) {
        this.compositions.push(e);
      }
      return function() {
        function e(i) {
          for (var s = 0, n = this.compositions.length; s < n; ) {
            if (this.compositions[s].data && this.compositions[s].data.nm === i) return this.compositions[s].prepareFrame && this.compositions[s].data.xt && this.compositions[s].prepareFrame(this.currentFrame), this.compositions[s].compInterface;
            s += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    }(), Ce = {}, Xs = function(e, i) {
      Ce[e] = i;
    };
    function Hs(t) {
      return Ce[t];
    }
    function Js() {
      if (Ce.canvas) return "canvas";
      for (var t in Ce) if (Ce[t]) return t;
      return "";
    }
    function Se(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Se = function(i) {
        return typeof i;
      } : Se = function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, Se(t);
    }
    var z = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = vt(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = Ns(), this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = Ys(), this.imagePreloader = new js(), this.audioController = Vs(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new li("drawnFrame", 0, 0, 0), this.expressionsPlugin = Be();
    };
    Y([Gi], z), z.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var i = Hs(e);
      this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === true ? this.loop = true : t.loop === false ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : true, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : true, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), _e.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, z.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, z.prototype.setupAnimation = function(t) {
      _e.completeAnimation(t, this.configAnimation);
    }, z.prototype.setData = function(t, e) {
      e && Se(e) !== "object" && (e = JSON.parse(e));
      var i = { wrapper: t, animationData: e }, s = t.attributes;
      i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : Js() || "canvas";
      var n = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
      n === "false" ? i.loop = false : n === "true" ? i.loop = true : n !== "" && (i.loop = parseInt(n, 10));
      var r = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : s.getNamedItem("bm-autoplay") ? s.getNamedItem("bm-autoplay").value : true;
      i.autoplay = r !== "false", i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "";
      var a = s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "";
      a === "false" && (i.prerender = false), i.path ? this.setParams(i) : this.trigger("destroy");
    }, z.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e = this.animationData.layers, i, s = e.length, n = t.layers, r, a = n.length;
      for (r = 0; r < a; r += 1) for (i = 0; i < s; ) {
        if (e[i].id === n[r].id) {
          e[i] = n[r];
          break;
        }
        i += 1;
      }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (s = t.assets.length, i = 0; i < s; i += 1) this.animationData.assets.push(t.assets[i]);
      this.animationData.__complete = false, _e.completeAnimation(this.animationData, this.onSegmentComplete);
    }, z.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = Be();
      e && e.initExpressions(this), this.loadNextSegment();
    }, z.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || t.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, _e.loadData(i, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, z.prototype.loadSegments = function() {
      var t = this.animationData.segments;
      t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, z.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, z.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, z.prototype.configAnimation = function(t) {
      if (this.renderer) try {
        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = Gs(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
      } catch (e) {
        this.triggerConfigError(e);
      }
    }, z.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, z.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = true;
        var t = Be();
        t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, z.prototype.resize = function(t, e) {
      var i = typeof t == "number" ? t : void 0, s = typeof e == "number" ? e : void 0;
      this.renderer.updateContainerSize(i, s);
    }, z.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, z.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, z.prototype.renderFrame = function() {
      if (!(this.isLoaded === false || !this.renderer)) try {
        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
      } catch (t) {
        this.triggerRenderFrameError(t);
      }
    }, z.prototype.play = function(t) {
      t && this.name !== t || this.isPaused === true && (this.isPaused = false, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = false, this.trigger("_active")));
    }, z.prototype.pause = function(t) {
      t && this.name !== t || this.isPaused === false && (this.isPaused = true, this.trigger("_pause"), this._idle = true, this.trigger("_idle"), this.audioController.pause());
    }, z.prototype.togglePause = function(t) {
      t && this.name !== t || (this.isPaused === true ? this.play() : this.pause());
    }, z.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
    }, z.prototype.getMarkerData = function(t) {
      for (var e, i = 0; i < this.markers.length; i += 1) if (e = this.markers[i], e.payload && e.payload.name === t) return e;
      return null;
    }, z.prototype.goToAndStop = function(t, e, i) {
      if (!(i && this.name !== i)) {
        var s = Number(t);
        if (isNaN(s)) {
          var n = this.getMarkerData(t);
          n && this.goToAndStop(n.time, true);
        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, z.prototype.goToAndPlay = function(t, e, i) {
      if (!(i && this.name !== i)) {
        var s = Number(t);
        if (isNaN(s)) {
          var n = this.getMarkerData(t);
          n && (n.duration ? this.playSegments([n.time, n.time + n.duration], true) : this.goToAndStop(n.time, true));
        } else this.goToAndStop(s, e, i);
        this.play();
      }
    }, z.prototype.advanceTime = function(t) {
      if (!(this.isPaused === true || this.isLoaded === false)) {
        var e = this.currentRawFrame + t * this.frameModifier, i = false;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = true, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== true) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true) : (i = true, e = 0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, z.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, z.prototype.setSegment = function(t, e) {
      var i = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, i !== -1 && this.goToAndStop(i, true);
    }, z.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), Se(t[0]) === "object") {
        var i, s = t.length;
        for (i = 0; i < s; i += 1) this.segments.push(t[i]);
      } else this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, z.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, z.prototype.checkSegments = function(t) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), true) : false;
    }, z.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, z.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, z.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, z.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, z.prototype.setLoop = function(t) {
      this.loop = t;
    }, z.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, z.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, z.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, z.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, z.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, z.prototype.getPath = function() {
      return this.path;
    }, z.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e) e = t.p;
      else if (this.assetsPath) {
        var i = t.p;
        i.indexOf("images/") !== -1 && (i = i.split("/")[1]), e = this.assetsPath + i;
      } else e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, z.prototype.getAssetData = function(t) {
      for (var e = 0, i = this.assets.length; e < i; ) {
        if (t === this.assets[e].id) return this.assets[e];
        e += 1;
      }
      return null;
    }, z.prototype.hide = function() {
      this.renderer.hide();
    }, z.prototype.show = function() {
      this.renderer.show();
    }, z.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, z.prototype.updateDocumentData = function(t, e, i) {
      try {
        var s = this.renderer.getElementByPath(t);
        s.updateDocumentData(e, i);
      } catch {
      }
    }, z.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t]) switch (t) {
        case "enterFrame":
          this.triggerEvent(t, new li(t, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "drawnFrame":
          this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
          break;
        case "loopComplete":
          this.triggerEvent(t, new Di(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new Oi(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new Bi(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new zi(t, this));
          break;
        default:
          this.triggerEvent(t);
      }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new li(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new Di(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new Oi(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new Bi(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new zi(t, this));
    }, z.prototype.triggerRenderFrameError = function(t) {
      var e = new Ds(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, z.prototype.triggerConfigError = function(t) {
      var e = new Bs(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var st = function() {
      var t = {}, e = [], i = 0, s = 0, n = 0, r = true, a = false;
      function l(m2) {
        for (var k = 0, h = m2.target; k < s; ) e[k].animation === h && (e.splice(k, 1), k -= 1, s -= 1, h.isPaused || x()), k += 1;
      }
      function o(m2, k) {
        if (!m2) return null;
        for (var h = 0; h < s; ) {
          if (e[h].elem === m2 && e[h].elem !== null) return e[h].animation;
          h += 1;
        }
        var p = new z();
        return f(p, m2), p.setData(m2, k), p;
      }
      function c() {
        var m2, k = e.length, h = [];
        for (m2 = 0; m2 < k; m2 += 1) h.push(e[m2].animation);
        return h;
      }
      function d() {
        n += 1, W();
      }
      function x() {
        n -= 1;
      }
      function f(m2, k) {
        m2.addEventListener("destroy", l), m2.addEventListener("_active", d), m2.addEventListener("_idle", x), e.push({ elem: k, animation: m2 }), s += 1;
      }
      function C(m2) {
        var k = new z();
        return f(k, null), k.setParams(m2), k;
      }
      function S(m2, k) {
        var h;
        for (h = 0; h < s; h += 1) e[h].animation.setSpeed(m2, k);
      }
      function y(m2, k) {
        var h;
        for (h = 0; h < s; h += 1) e[h].animation.setDirection(m2, k);
      }
      function A(m2) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.play(m2);
      }
      function b(m2) {
        var k = m2 - i, h;
        for (h = 0; h < s; h += 1) e[h].animation.advanceTime(k);
        i = m2, n && !a ? window.requestAnimationFrame(b) : r = true;
      }
      function g(m2) {
        i = m2, window.requestAnimationFrame(b);
      }
      function u(m2) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.pause(m2);
      }
      function v(m2, k, h) {
        var p;
        for (p = 0; p < s; p += 1) e[p].animation.goToAndStop(m2, k, h);
      }
      function _(m2) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.stop(m2);
      }
      function P(m2) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.togglePause(m2);
      }
      function T(m2) {
        var k;
        for (k = s - 1; k >= 0; k -= 1) e[k].animation.destroy(m2);
      }
      function M(m2, k, h) {
        var p = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), E, w = p.length;
        for (E = 0; E < w; E += 1) h && p[E].setAttribute("data-bm-type", h), o(p[E], m2);
        if (k && w === 0) {
          h || (h = "svg");
          var R = document.getElementsByTagName("body")[0];
          R.innerText = "";
          var N = _t("div");
          N.style.width = "100%", N.style.height = "100%", N.setAttribute("data-bm-type", h), R.appendChild(N), o(N, m2);
        }
      }
      function L() {
        var m2;
        for (m2 = 0; m2 < s; m2 += 1) e[m2].animation.resize();
      }
      function W() {
        !a && n && r && (window.requestAnimationFrame(g), r = false);
      }
      function B() {
        a = true;
      }
      function V() {
        a = false, W();
      }
      function G(m2, k) {
        var h;
        for (h = 0; h < s; h += 1) e[h].animation.setVolume(m2, k);
      }
      function O(m2) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.mute(m2);
      }
      function F(m2) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.unmute(m2);
      }
      return t.registerAnimation = o, t.loadAnimation = C, t.setSpeed = S, t.setDirection = y, t.play = A, t.pause = u, t.stop = _, t.togglePause = P, t.searchAnimations = M, t.resize = L, t.goToAndStop = v, t.destroy = T, t.freeze = B, t.unfreeze = V, t.setVolume = G, t.mute = O, t.unmute = F, t.getRegisteredAnimations = c, t;
    }(), ke = function() {
      var t = {};
      t.getBezierEasing = i;
      var e = {};
      function i(g, u, v, _, P) {
        var T = P || ("bez_" + g + "_" + u + "_" + v + "_" + _).replace(/\./g, "p");
        if (e[T]) return e[T];
        var M = new b([g, u, v, _]);
        return e[T] = M, M;
      }
      var s = 4, n = 1e-3, r = 1e-7, a = 10, l = 11, o = 1 / (l - 1), c = typeof Float32Array == "function";
      function d(g, u) {
        return 1 - 3 * u + 3 * g;
      }
      function x(g, u) {
        return 3 * u - 6 * g;
      }
      function f(g) {
        return 3 * g;
      }
      function C(g, u, v) {
        return ((d(u, v) * g + x(u, v)) * g + f(u)) * g;
      }
      function S(g, u, v) {
        return 3 * d(u, v) * g * g + 2 * x(u, v) * g + f(u);
      }
      function y(g, u, v, _, P) {
        var T, M, L = 0;
        do
          M = u + (v - u) / 2, T = C(M, _, P) - g, T > 0 ? v = M : u = M;
        while (Math.abs(T) > r && ++L < a);
        return M;
      }
      function A(g, u, v, _) {
        for (var P = 0; P < s; ++P) {
          var T = S(u, v, _);
          if (T === 0) return u;
          var M = C(u, v, _) - g;
          u -= M / T;
        }
        return u;
      }
      function b(g) {
        this._p = g, this._mSampleValues = c ? new Float32Array(l) : new Array(l), this._precomputed = false, this.get = this.get.bind(this);
      }
      return b.prototype = { get: function(u) {
        var v = this._p[0], _ = this._p[1], P = this._p[2], T = this._p[3];
        return this._precomputed || this._precompute(), v === _ && P === T ? u : u === 0 ? 0 : u === 1 ? 1 : C(this._getTForX(u), _, T);
      }, _precompute: function() {
        var u = this._p[0], v = this._p[1], _ = this._p[2], P = this._p[3];
        this._precomputed = true, (u !== v || _ !== P) && this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var u = this._p[0], v = this._p[2], _ = 0; _ < l; ++_) this._mSampleValues[_] = C(_ * o, u, v);
      }, _getTForX: function(u) {
        for (var v = this._p[0], _ = this._p[2], P = this._mSampleValues, T = 0, M = 1, L = l - 1; M !== L && P[M] <= u; ++M) T += o;
        --M;
        var W = (u - P[M]) / (P[M + 1] - P[M]), B = T + W * o, V = S(B, v, _);
        return V >= n ? A(u, B, v, _) : V === 0 ? B : y(u, T, T + o, v, _);
      } }, t;
    }(), Yi = /* @__PURE__ */ function() {
      function t(e) {
        return e.concat(Q(e.length));
      }
      return { double: t };
    }(), qe = /* @__PURE__ */ function() {
      return function(t, e, i) {
        var s = 0, n = t, r = Q(n), a = { newElement: l, release: o };
        function l() {
          var c;
          return s ? (s -= 1, c = r[s]) : c = e(), c;
        }
        function o(c) {
          s === n && (r = Yi.double(r), n *= 2), i && i(c), r[s] = c, s += 1;
        }
        return a;
      };
    }(), Xi = function() {
      function t() {
        return { addedLength: 0, percents: nt("float32", be()), lengths: nt("float32", be()) };
      }
      return qe(8, t);
    }(), Hi = function() {
      function t() {
        return { lengths: [], totalLength: 0 };
      }
      function e(i) {
        var s, n = i.lengths.length;
        for (s = 0; s < n; s += 1) Xi.release(i.lengths[s]);
        i.lengths.length = 0;
      }
      return qe(8, t, e);
    }();
    function Ks() {
      var t = Math;
      function e(f, C, S, y, A, b) {
        var g = f * y + C * A + S * b - A * y - b * f - S * C;
        return g > -1e-3 && g < 1e-3;
      }
      function i(f, C, S, y, A, b, g, u, v) {
        if (S === 0 && b === 0 && v === 0) return e(f, C, y, A, g, u);
        var _ = t.sqrt(t.pow(y - f, 2) + t.pow(A - C, 2) + t.pow(b - S, 2)), P = t.sqrt(t.pow(g - f, 2) + t.pow(u - C, 2) + t.pow(v - S, 2)), T = t.sqrt(t.pow(g - y, 2) + t.pow(u - A, 2) + t.pow(v - b, 2)), M;
        return _ > P ? _ > T ? M = _ - P - T : M = T - P - _ : T > P ? M = T - P - _ : M = P - _ - T, M > -1e-4 && M < 1e-4;
      }
      var s = /* @__PURE__ */ function() {
        return function(f, C, S, y) {
          var A = be(), b, g, u, v, _, P = 0, T, M = [], L = [], W = Xi.newElement();
          for (u = S.length, b = 0; b < A; b += 1) {
            for (_ = b / (A - 1), T = 0, g = 0; g < u; g += 1) v = Mt(1 - _, 3) * f[g] + 3 * Mt(1 - _, 2) * _ * S[g] + 3 * (1 - _) * Mt(_, 2) * y[g] + Mt(_, 3) * C[g], M[g] = v, L[g] !== null && (T += Mt(M[g] - L[g], 2)), L[g] = M[g];
            T && (T = Ii(T), P += T), W.percents[b] = _, W.lengths[b] = P;
          }
          return W.addedLength = P, W;
        };
      }();
      function n(f) {
        var C = Hi.newElement(), S = f.c, y = f.v, A = f.o, b = f.i, g, u = f._length, v = C.lengths, _ = 0;
        for (g = 0; g < u - 1; g += 1) v[g] = s(y[g], y[g + 1], A[g], b[g + 1]), _ += v[g].addedLength;
        return S && u && (v[g] = s(y[g], y[0], A[g], b[0]), _ += v[g].addedLength), C.totalLength = _, C;
      }
      function r(f) {
        this.segmentLength = 0, this.points = new Array(f);
      }
      function a(f, C) {
        this.partialLength = f, this.point = C;
      }
      var l = /* @__PURE__ */ function() {
        var f = {};
        return function(C, S, y, A) {
          var b = (C[0] + "_" + C[1] + "_" + S[0] + "_" + S[1] + "_" + y[0] + "_" + y[1] + "_" + A[0] + "_" + A[1]).replace(/\./g, "p");
          if (!f[b]) {
            var g = be(), u, v, _, P, T, M = 0, L, W, B = null;
            C.length === 2 && (C[0] !== S[0] || C[1] !== S[1]) && e(C[0], C[1], S[0], S[1], C[0] + y[0], C[1] + y[1]) && e(C[0], C[1], S[0], S[1], S[0] + A[0], S[1] + A[1]) && (g = 2);
            var V = new r(g);
            for (_ = y.length, u = 0; u < g; u += 1) {
              for (W = Q(_), T = u / (g - 1), L = 0, v = 0; v < _; v += 1) P = Mt(1 - T, 3) * C[v] + 3 * Mt(1 - T, 2) * T * (C[v] + y[v]) + 3 * (1 - T) * Mt(T, 2) * (S[v] + A[v]) + Mt(T, 3) * S[v], W[v] = P, B !== null && (L += Mt(W[v] - B[v], 2));
              L = Ii(L), M += L, V.points[u] = new a(L, W), B = W;
            }
            V.segmentLength = M, f[b] = V;
          }
          return f[b];
        };
      }();
      function o(f, C) {
        var S = C.percents, y = C.lengths, A = S.length, b = pt((A - 1) * f), g = f * C.addedLength, u = 0;
        if (b === A - 1 || b === 0 || g === y[b]) return S[b];
        for (var v = y[b] > g ? -1 : 1, _ = true; _; ) if (y[b] <= g && y[b + 1] > g ? (u = (g - y[b]) / (y[b + 1] - y[b]), _ = false) : b += v, b < 0 || b >= A - 1) {
          if (b === A - 1) return S[b];
          _ = false;
        }
        return S[b] + (S[b + 1] - S[b]) * u;
      }
      function c(f, C, S, y, A, b) {
        var g = o(A, b), u = 1 - g, v = t.round((u * u * u * f[0] + (g * u * u + u * g * u + u * u * g) * S[0] + (g * g * u + u * g * g + g * u * g) * y[0] + g * g * g * C[0]) * 1e3) / 1e3, _ = t.round((u * u * u * f[1] + (g * u * u + u * g * u + u * u * g) * S[1] + (g * g * u + u * g * g + g * u * g) * y[1] + g * g * g * C[1]) * 1e3) / 1e3;
        return [v, _];
      }
      var d = nt("float32", 8);
      function x(f, C, S, y, A, b, g) {
        A < 0 ? A = 0 : A > 1 && (A = 1);
        var u = o(A, g);
        b = b > 1 ? 1 : b;
        var v = o(b, g), _, P = f.length, T = 1 - u, M = 1 - v, L = T * T * T, W = u * T * T * 3, B = u * u * T * 3, V = u * u * u, G = T * T * M, O = u * T * M + T * u * M + T * T * v, F = u * u * M + T * u * v + u * T * v, m2 = u * u * v, k = T * M * M, h = u * M * M + T * v * M + T * M * v, p = u * v * M + T * v * v + u * M * v, E = u * v * v, w = M * M * M, R = v * M * M + M * v * M + M * M * v, N = v * v * M + M * v * v + v * M * v, j = v * v * v;
        for (_ = 0; _ < P; _ += 1) d[_ * 4] = t.round((L * f[_] + W * S[_] + B * y[_] + V * C[_]) * 1e3) / 1e3, d[_ * 4 + 1] = t.round((G * f[_] + O * S[_] + F * y[_] + m2 * C[_]) * 1e3) / 1e3, d[_ * 4 + 2] = t.round((k * f[_] + h * S[_] + p * y[_] + E * C[_]) * 1e3) / 1e3, d[_ * 4 + 3] = t.round((w * f[_] + R * S[_] + N * y[_] + j * C[_]) * 1e3) / 1e3;
        return d;
      }
      return { getSegmentsLength: n, getNewSegment: x, getPointInSegment: c, buildBezierData: l, pointOnLine2D: e, pointOnLine3D: i };
    }
    var Et = Ks(), ee = ai, Ji = Math.abs;
    function Ki(t, e) {
      var i = this.offsetTime, s;
      this.propType === "multidimensional" && (s = nt("float32", this.pv.length));
      for (var n = e.lastIndex, r = n, a = this.keyframes.length - 1, l = true, o, c, d; l; ) {
        if (o = this.keyframes[r], c = this.keyframes[r + 1], r === a - 1 && t >= c.t - i) {
          o.h && (o = c), n = 0;
          break;
        }
        if (c.t - i > t) {
          n = r;
          break;
        }
        r < a - 1 ? r += 1 : (n = 0, l = false);
      }
      d = this.keyframesMetadata[r] || {};
      var x, f, C, S, y, A, b = c.t - i, g = o.t - i, u;
      if (o.to) {
        d.bezierData || (d.bezierData = Et.buildBezierData(o.s, c.s || o.e, o.to, o.ti));
        var v = d.bezierData;
        if (t >= b || t < g) {
          var _ = t >= b ? v.points.length - 1 : 0;
          for (f = v.points[_].point.length, x = 0; x < f; x += 1) s[x] = v.points[_].point[x];
        } else {
          d.__fnct ? A = d.__fnct : (A = ke.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, d.__fnct = A), C = A((t - g) / (b - g));
          var P = v.segmentLength * C, T, M = e.lastFrame < t && e._lastKeyframeIndex === r ? e._lastAddedLength : 0;
          for (y = e.lastFrame < t && e._lastKeyframeIndex === r ? e._lastPoint : 0, l = true, S = v.points.length; l; ) {
            if (M += v.points[y].partialLength, P === 0 || C === 0 || y === v.points.length - 1) {
              for (f = v.points[y].point.length, x = 0; x < f; x += 1) s[x] = v.points[y].point[x];
              break;
            } else if (P >= M && P < M + v.points[y + 1].partialLength) {
              for (T = (P - M) / v.points[y + 1].partialLength, f = v.points[y].point.length, x = 0; x < f; x += 1) s[x] = v.points[y].point[x] + (v.points[y + 1].point[x] - v.points[y].point[x]) * T;
              break;
            }
            y < S - 1 ? y += 1 : l = false;
          }
          e._lastPoint = y, e._lastAddedLength = M - v.points[y].partialLength, e._lastKeyframeIndex = r;
        }
      } else {
        var L, W, B, V, G;
        if (a = o.s.length, u = c.s || o.e, this.sh && o.h !== 1) if (t >= b) s[0] = u[0], s[1] = u[1], s[2] = u[2];
        else if (t <= g) s[0] = o.s[0], s[1] = o.s[1], s[2] = o.s[2];
        else {
          var O = Zi(o.s), F = Zi(u), m2 = (t - g) / (b - g);
          Us(s, Zs(O, F, m2));
        }
        else for (r = 0; r < a; r += 1) o.h !== 1 && (t >= b ? C = 1 : t < g ? C = 0 : (o.o.x.constructor === Array ? (d.__fnct || (d.__fnct = []), d.__fnct[r] ? A = d.__fnct[r] : (L = o.o.x[r] === void 0 ? o.o.x[0] : o.o.x[r], W = o.o.y[r] === void 0 ? o.o.y[0] : o.o.y[r], B = o.i.x[r] === void 0 ? o.i.x[0] : o.i.x[r], V = o.i.y[r] === void 0 ? o.i.y[0] : o.i.y[r], A = ke.getBezierEasing(L, W, B, V).get, d.__fnct[r] = A)) : d.__fnct ? A = d.__fnct : (L = o.o.x, W = o.o.y, B = o.i.x, V = o.i.y, A = ke.getBezierEasing(L, W, B, V).get, o.keyframeMetadata = A), C = A((t - g) / (b - g)))), u = c.s || o.e, G = o.h === 1 ? o.s[r] : o.s[r] + (u[r] - o.s[r]) * C, this.propType === "multidimensional" ? s[r] = G : s = G;
      }
      return e.lastIndex = n, s;
    }
    function Zs(t, e, i) {
      var s = [], n = t[0], r = t[1], a = t[2], l = t[3], o = e[0], c = e[1], d = e[2], x = e[3], f, C, S, y, A;
      return C = n * o + r * c + a * d + l * x, C < 0 && (C = -C, o = -o, c = -c, d = -d, x = -x), 1 - C > 1e-6 ? (f = Math.acos(C), S = Math.sin(f), y = Math.sin((1 - i) * f) / S, A = Math.sin(i * f) / S) : (y = 1 - i, A = i), s[0] = y * n + A * o, s[1] = y * r + A * c, s[2] = y * a + A * d, s[3] = y * l + A * x, s;
    }
    function Us(t, e) {
      var i = e[0], s = e[1], n = e[2], r = e[3], a = Math.atan2(2 * s * r - 2 * i * n, 1 - 2 * s * s - 2 * n * n), l = Math.asin(2 * i * s + 2 * n * r), o = Math.atan2(2 * i * r - 2 * s * n, 1 - 2 * i * i - 2 * n * n);
      t[0] = a / tt, t[1] = l / tt, t[2] = o / tt;
    }
    function Zi(t) {
      var e = t[0] * tt, i = t[1] * tt, s = t[2] * tt, n = Math.cos(e / 2), r = Math.cos(i / 2), a = Math.cos(s / 2), l = Math.sin(e / 2), o = Math.sin(i / 2), c = Math.sin(s / 2), d = n * r * a - l * o * c, x = l * o * a + n * r * c, f = l * r * a + n * o * c, C = n * o * a - l * r * c;
      return [x, f, C, d];
    }
    function Ui() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== ee && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var s = this.interpolateValue(t, this._caching);
        this.pv = s;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function We(t) {
      var e;
      if (this.propType === "unidimensional") e = t * this.mult, Ji(this.v - e) > 1e-5 && (this.v = e, this._mdf = true);
      else for (var i = 0, s = this.v.length; i < s; ) e = t[i] * this.mult, Ji(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = true), i += 1;
    }
    function je() {
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
    function Ge(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function Qs(t, e, i, s) {
      this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = false, this.elem = t, this.container = s, this.comp = t.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = je, this.setVValue = We, this.addEffect = Ge;
    }
    function $s(t, e, i, s) {
      this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = false, this.elem = t, this.container = s, this.comp = t.comp, this.k = false, this.kf = false, this.frameId = -1;
      var n, r = e.k.length;
      for (this.v = nt("float32", r), this.pv = nt("float32", r), this.vel = nt("float32", r), n = 0; n < r; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
      this._isFirstFrame = true, this.effectsSequence = [], this.getValue = je, this.setVValue = We, this.addEffect = Ge;
    }
    function tr(t, e, i, s) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: ee, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = ee, this.pv = ee, this._isFirstFrame = true, this.getValue = je, this.setVValue = We, this.interpolateValue = Ki, this.effectsSequence = [Ui.bind(this)], this.addEffect = Ge;
    }
    function er(t, e, i, s) {
      this.propType = "multidimensional";
      var n, r = e.k.length, a, l, o, c;
      for (n = 0; n < r - 1; n += 1) e.k[n].to && e.k[n].s && e.k[n + 1] && e.k[n + 1].s && (a = e.k[n].s, l = e.k[n + 1].s, o = e.k[n].to, c = e.k[n].ti, (a.length === 2 && !(a[0] === l[0] && a[1] === l[1]) && Et.pointOnLine2D(a[0], a[1], l[0], l[1], a[0] + o[0], a[1] + o[1]) && Et.pointOnLine2D(a[0], a[1], l[0], l[1], l[0] + c[0], l[1] + c[1]) || a.length === 3 && !(a[0] === l[0] && a[1] === l[1] && a[2] === l[2]) && Et.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && Et.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], l[0] + c[0], l[1] + c[1], l[2] + c[2])) && (e.k[n].to = null, e.k[n].ti = null), a[0] === l[0] && a[1] === l[1] && o[0] === 0 && o[1] === 0 && c[0] === 0 && c[1] === 0 && (a.length === 2 || a[2] === l[2] && o[2] === 0 && c[2] === 0) && (e.k[n].to = null, e.k[n].ti = null));
      this.effectsSequence = [Ui.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = je, this.setVValue = We, this.interpolateValue = Ki, this.frameId = -1;
      var d = e.k[0].s.length;
      for (this.v = nt("float32", d), this.pv = nt("float32", d), n = 0; n < d; n += 1) this.v[n] = ee, this.pv[n] = ee;
      this._caching = { lastFrame: ee, lastIndex: 0, value: nt("float32", d) }, this.addEffect = Ge;
    }
    var I = /* @__PURE__ */ function() {
      function t(i, s, n, r, a) {
        s.sid && (s = i.globalData.slotManager.getProp(s));
        var l;
        if (!s.k.length) l = new Qs(i, s, r, a);
        else if (typeof s.k[0] == "number") l = new $s(i, s, r, a);
        else switch (n) {
          case 0:
            l = new tr(i, s, r, a);
            break;
          case 1:
            l = new er(i, s, r, a);
            break;
        }
        return l.effectsSequence.length && a.addDynamicProperty(l), l;
      }
      var e = { getProp: t };
      return e;
    }();
    function ht() {
    }
    ht.prototype = { addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = true);
    }, iterateDynamicProperties: function() {
      this._mdf = false;
      var e, i = this.dynamicProperties.length;
      for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = true);
    }, initDynamicPropertyContainer: function(e) {
      this.container = e, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
    } };
    var ie = function() {
      function t() {
        return nt("float32", 2);
      }
      return qe(8, t);
    }();
    function zt() {
      this.c = false, this._length = 0, this._maxLength = 8, this.v = Q(this._maxLength), this.o = Q(this._maxLength), this.i = Q(this._maxLength);
    }
    zt.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var i = 0; i < e; ) this.v[i] = ie.newElement(), this.o[i] = ie.newElement(), this.i[i] = ie.newElement(), i += 1;
    }, zt.prototype.setLength = function(t) {
      for (; this._maxLength < t; ) this.doubleArrayLength();
      this._length = t;
    }, zt.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(Q(this._maxLength)), this.i = this.i.concat(Q(this._maxLength)), this.o = this.o.concat(Q(this._maxLength)), this._maxLength *= 2;
    }, zt.prototype.setXYAt = function(t, e, i, s, n) {
      var r;
      switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
        case "v":
          r = this.v;
          break;
        case "i":
          r = this.i;
          break;
        case "o":
          r = this.o;
          break;
        default:
          r = [];
          break;
      }
      (!r[s] || r[s] && !n) && (r[s] = ie.newElement()), r[s][0] = t, r[s][1] = e;
    }, zt.prototype.setTripleAt = function(t, e, i, s, n, r, a, l) {
      this.setXYAt(t, e, "v", a, l), this.setXYAt(i, s, "o", a, l), this.setXYAt(n, r, "i", a, l);
    }, zt.prototype.reverse = function() {
      var t = new zt();
      t.setPathData(this.c, this._length);
      var e = this.v, i = this.o, s = this.i, n = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, false), n = 1);
      var r = this._length - 1, a = this._length, l;
      for (l = n; l < a; l += 1) t.setTripleAt(e[r][0], e[r][1], s[r][0], s[r][1], i[r][0], i[r][1], l, false), r -= 1;
      return t;
    }, zt.prototype.length = function() {
      return this._length;
    };
    var ut = function() {
      function t() {
        return new zt();
      }
      function e(n) {
        var r = n._length, a;
        for (a = 0; a < r; a += 1) ie.release(n.v[a]), ie.release(n.i[a]), ie.release(n.o[a]), n.v[a] = null, n.i[a] = null, n.o[a] = null;
        n._length = 0, n.c = false;
      }
      function i(n) {
        var r = s.newElement(), a, l = n._length === void 0 ? n.v.length : n._length;
        for (r.setLength(l), r.c = n.c, a = 0; a < l; a += 1) r.setTripleAt(n.v[a][0], n.v[a][1], n.o[a][0], n.o[a][1], n.i[a][0], n.i[a][1], a);
        return r;
      }
      var s = qe(4, t, e);
      return s.clone = i, s;
    }();
    function ui() {
      this._length = 0, this._maxLength = 4, this.shapes = Q(this._maxLength);
    }
    ui.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(Q(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ui.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1) ut.release(this.shapes[t]);
      this._length = 0;
    };
    var le = function() {
      var t = { newShapeCollection: n, release: r }, e = 0, i = 4, s = Q(i);
      function n() {
        var a;
        return e ? (e -= 1, a = s[e]) : a = new ui(), a;
      }
      function r(a) {
        var l, o = a._length;
        for (l = 0; l < o; l += 1) ut.release(a.shapes[l]);
        a._length = 0, e === i && (s = Yi.double(s), i *= 2), s[e] = a, e += 1;
      }
      return t;
    }(), fe = function() {
      var t = -999999;
      function e(b, g, u) {
        var v = u.lastIndex, _, P, T, M, L, W, B, V, G, O = this.keyframes;
        if (b < O[0].t - this.offsetTime) _ = O[0].s[0], T = true, v = 0;
        else if (b >= O[O.length - 1].t - this.offsetTime) _ = O[O.length - 1].s ? O[O.length - 1].s[0] : O[O.length - 2].e[0], T = true;
        else {
          for (var F = v, m2 = O.length - 1, k = true, h, p, E; k && (h = O[F], p = O[F + 1], !(p.t - this.offsetTime > b)); ) F < m2 - 1 ? F += 1 : k = false;
          if (E = this.keyframesMetadata[F] || {}, T = h.h === 1, v = F, !T) {
            if (b >= p.t - this.offsetTime) V = 1;
            else if (b < h.t - this.offsetTime) V = 0;
            else {
              var w;
              E.__fnct ? w = E.__fnct : (w = ke.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y).get, E.__fnct = w), V = w((b - (h.t - this.offsetTime)) / (p.t - this.offsetTime - (h.t - this.offsetTime)));
            }
            P = p.s ? p.s[0] : h.e[0];
          }
          _ = h.s[0];
        }
        for (W = g._length, B = _.i[0].length, u.lastIndex = v, M = 0; M < W; M += 1) for (L = 0; L < B; L += 1) G = T ? _.i[M][L] : _.i[M][L] + (P.i[M][L] - _.i[M][L]) * V, g.i[M][L] = G, G = T ? _.o[M][L] : _.o[M][L] + (P.o[M][L] - _.o[M][L]) * V, g.o[M][L] = G, G = T ? _.v[M][L] : _.v[M][L] + (P.v[M][L] - _.v[M][L]) * V, g.v[M][L] = G;
      }
      function i() {
        var b = this.comp.renderedFrame - this.offsetTime, g = this.keyframes[0].t - this.offsetTime, u = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, v = this._caching.lastFrame;
        return v !== t && (v < g && b < g || v > u && b > u) || (this._caching.lastIndex = v < b ? this._caching.lastIndex : 0, this.interpolateShape(b, this.pv, this._caching)), this._caching.lastFrame = b, this.pv;
      }
      function s() {
        this.paths = this.localShapeCollection;
      }
      function n(b, g) {
        if (b._length !== g._length || b.c !== g.c) return false;
        var u, v = b._length;
        for (u = 0; u < v; u += 1) if (b.v[u][0] !== g.v[u][0] || b.v[u][1] !== g.v[u][1] || b.o[u][0] !== g.o[u][0] || b.o[u][1] !== g.o[u][1] || b.i[u][0] !== g.i[u][0] || b.i[u][1] !== g.i[u][1]) return false;
        return true;
      }
      function r(b) {
        n(this.v, b) || (this.v = ut.clone(b), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
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
          var b;
          this.kf ? b = this.pv : this.data.ks ? b = this.data.ks.k : b = this.data.pt.k;
          var g, u = this.effectsSequence.length;
          for (g = 0; g < u; g += 1) b = this.effectsSequence[g](b);
          this.setVValue(b), this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
      }
      function l(b, g, u) {
        this.propType = "shape", this.comp = b.comp, this.container = b, this.elem = b, this.data = g, this.k = false, this.kf = false, this._mdf = false;
        var v = u === 3 ? g.pt.k : g.ks.k;
        this.v = ut.clone(v), this.pv = ut.clone(this.v), this.localShapeCollection = le.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = [];
      }
      function o(b) {
        this.effectsSequence.push(b), this.container.addDynamicProperty(this);
      }
      l.prototype.interpolateShape = e, l.prototype.getValue = a, l.prototype.setVValue = r, l.prototype.addEffect = o;
      function c(b, g, u) {
        this.propType = "shape", this.comp = b.comp, this.elem = b, this.container = b, this.offsetTime = b.data.st, this.keyframes = u === 3 ? g.pt.k : g.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
        var v = this.keyframes[0].s[0].i.length;
        this.v = ut.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, v), this.pv = ut.clone(this.v), this.localShapeCollection = le.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [i.bind(this)];
      }
      c.prototype.getValue = a, c.prototype.interpolateShape = e, c.prototype.setVValue = r, c.prototype.addEffect = o;
      var d = function() {
        var b = Yt;
        function g(u, v) {
          this.v = ut.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = le.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = v.d, this.elem = u, this.comp = u.comp, this.frameId = -1, this.initDynamicPropertyContainer(u), this.p = I.getProp(u, v.p, 1, 0, this), this.s = I.getProp(u, v.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
        }
        return g.prototype = { reset: s, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var v = this.p.v[0], _ = this.p.v[1], P = this.s.v[0] / 2, T = this.s.v[1] / 2, M = this.d !== 3, L = this.v;
          L.v[0][0] = v, L.v[0][1] = _ - T, L.v[1][0] = M ? v + P : v - P, L.v[1][1] = _, L.v[2][0] = v, L.v[2][1] = _ + T, L.v[3][0] = M ? v - P : v + P, L.v[3][1] = _, L.i[0][0] = M ? v - P * b : v + P * b, L.i[0][1] = _ - T, L.i[1][0] = M ? v + P : v - P, L.i[1][1] = _ - T * b, L.i[2][0] = M ? v + P * b : v - P * b, L.i[2][1] = _ + T, L.i[3][0] = M ? v - P : v + P, L.i[3][1] = _ + T * b, L.o[0][0] = M ? v + P * b : v - P * b, L.o[0][1] = _ - T, L.o[1][0] = M ? v + P : v - P, L.o[1][1] = _ + T * b, L.o[2][0] = M ? v - P * b : v + P * b, L.o[2][1] = _ + T, L.o[3][0] = M ? v - P : v + P, L.o[3][1] = _ - T * b;
        } }, Y([ht], g), g;
      }(), x = function() {
        function b(g, u) {
          this.v = ut.newElement(), this.v.setPathData(true, 0), this.elem = g, this.comp = g.comp, this.data = u, this.frameId = -1, this.d = u.d, this.initDynamicPropertyContainer(g), u.sy === 1 ? (this.ir = I.getProp(g, u.ir, 0, 0, this), this.is = I.getProp(g, u.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = I.getProp(g, u.pt, 0, 0, this), this.p = I.getProp(g, u.p, 1, 0, this), this.r = I.getProp(g, u.r, 0, tt, this), this.or = I.getProp(g, u.or, 0, 0, this), this.os = I.getProp(g, u.os, 0, 0.01, this), this.localShapeCollection = le.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
        }
        return b.prototype = { reset: s, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var u = Math.floor(this.pt.v) * 2, v = Math.PI * 2 / u, _ = true, P = this.or.v, T = this.ir.v, M = this.os.v, L = this.is.v, W = 2 * Math.PI * P / (u * 2), B = 2 * Math.PI * T / (u * 2), V, G, O, F, m2 = -Math.PI / 2;
          m2 += this.r.v;
          var k = this.data.d === 3 ? -1 : 1;
          for (this.v._length = 0, V = 0; V < u; V += 1) {
            G = _ ? P : T, O = _ ? M : L, F = _ ? W : B;
            var h = G * Math.cos(m2), p = G * Math.sin(m2), E = h === 0 && p === 0 ? 0 : p / Math.sqrt(h * h + p * p), w = h === 0 && p === 0 ? 0 : -h / Math.sqrt(h * h + p * p);
            h += +this.p.v[0], p += +this.p.v[1], this.v.setTripleAt(h, p, h - E * F * O * k, p - w * F * O * k, h + E * F * O * k, p + w * F * O * k, V, true), _ = !_, m2 += v * k;
          }
        }, convertPolygonToPath: function() {
          var u = Math.floor(this.pt.v), v = Math.PI * 2 / u, _ = this.or.v, P = this.os.v, T = 2 * Math.PI * _ / (u * 4), M, L = -Math.PI * 0.5, W = this.data.d === 3 ? -1 : 1;
          for (L += this.r.v, this.v._length = 0, M = 0; M < u; M += 1) {
            var B = _ * Math.cos(L), V = _ * Math.sin(L), G = B === 0 && V === 0 ? 0 : V / Math.sqrt(B * B + V * V), O = B === 0 && V === 0 ? 0 : -B / Math.sqrt(B * B + V * V);
            B += +this.p.v[0], V += +this.p.v[1], this.v.setTripleAt(B, V, B - G * T * P * W, V - O * T * P * W, B + G * T * P * W, V + O * T * P * W, M, true), L += v * W;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, Y([ht], b), b;
      }(), f = function() {
        function b(g, u) {
          this.v = ut.newElement(), this.v.c = true, this.localShapeCollection = le.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = g, this.comp = g.comp, this.frameId = -1, this.d = u.d, this.initDynamicPropertyContainer(g), this.p = I.getProp(g, u.p, 1, 0, this), this.s = I.getProp(g, u.s, 1, 0, this), this.r = I.getProp(g, u.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
        }
        return b.prototype = { convertRectToPath: function() {
          var u = this.p.v[0], v = this.p.v[1], _ = this.s.v[0] / 2, P = this.s.v[1] / 2, T = Os(_, P, this.r.v), M = T * (1 - Yt);
          this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(u + _, v - P + T, u + _, v - P + T, u + _, v - P + M, 0, true), this.v.setTripleAt(u + _, v + P - T, u + _, v + P - M, u + _, v + P - T, 1, true), T !== 0 ? (this.v.setTripleAt(u + _ - T, v + P, u + _ - T, v + P, u + _ - M, v + P, 2, true), this.v.setTripleAt(u - _ + T, v + P, u - _ + M, v + P, u - _ + T, v + P, 3, true), this.v.setTripleAt(u - _, v + P - T, u - _, v + P - T, u - _, v + P - M, 4, true), this.v.setTripleAt(u - _, v - P + T, u - _, v - P + M, u - _, v - P + T, 5, true), this.v.setTripleAt(u - _ + T, v - P, u - _ + T, v - P, u - _ + M, v - P, 6, true), this.v.setTripleAt(u + _ - T, v - P, u + _ - M, v - P, u + _ - T, v - P, 7, true)) : (this.v.setTripleAt(u - _, v + P, u - _ + M, v + P, u - _, v + P, 2), this.v.setTripleAt(u - _, v - P, u - _, v - P + M, u - _, v - P, 3))) : (this.v.setTripleAt(u + _, v - P + T, u + _, v - P + M, u + _, v - P + T, 0, true), T !== 0 ? (this.v.setTripleAt(u + _ - T, v - P, u + _ - T, v - P, u + _ - M, v - P, 1, true), this.v.setTripleAt(u - _ + T, v - P, u - _ + M, v - P, u - _ + T, v - P, 2, true), this.v.setTripleAt(u - _, v - P + T, u - _, v - P + T, u - _, v - P + M, 3, true), this.v.setTripleAt(u - _, v + P - T, u - _, v + P - M, u - _, v + P - T, 4, true), this.v.setTripleAt(u - _ + T, v + P, u - _ + T, v + P, u - _ + M, v + P, 5, true), this.v.setTripleAt(u + _ - T, v + P, u + _ - M, v + P, u + _ - T, v + P, 6, true), this.v.setTripleAt(u + _, v + P - T, u + _, v + P - T, u + _, v + P - M, 7, true)) : (this.v.setTripleAt(u - _, v - P, u - _ + M, v - P, u - _, v - P, 1, true), this.v.setTripleAt(u - _, v + P, u - _, v + P - M, u - _, v + P, 2, true), this.v.setTripleAt(u + _, v + P, u + _ - M, v + P, u + _, v + P, 3, true)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: s }, Y([ht], b), b;
      }();
      function C(b, g, u) {
        var v;
        if (u === 3 || u === 4) {
          var _ = u === 3 ? g.pt : g.ks, P = _.k;
          P.length ? v = new c(b, g, u) : v = new l(b, g, u);
        } else u === 5 ? v = new f(b, g) : u === 6 ? v = new d(b, g) : u === 7 && (v = new x(b, g));
        return v.k && b.addDynamicProperty(v), v;
      }
      function S() {
        return l;
      }
      function y() {
        return c;
      }
      var A = {};
      return A.getShapeProp = C, A.getConstructorFunction = S, A.getKeyframedConstructorFunction = y, A;
    }();
    var et = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, i = Math.tan, s = Math.round;
      function n() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function r(h) {
        if (h === 0) return this;
        var p = t(h), E = e(h);
        return this._t(p, -E, 0, 0, E, p, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function a(h) {
        if (h === 0) return this;
        var p = t(h), E = e(h);
        return this._t(1, 0, 0, 0, 0, p, -E, 0, 0, E, p, 0, 0, 0, 0, 1);
      }
      function l(h) {
        if (h === 0) return this;
        var p = t(h), E = e(h);
        return this._t(p, 0, E, 0, 0, 1, 0, 0, -E, 0, p, 0, 0, 0, 0, 1);
      }
      function o(h) {
        if (h === 0) return this;
        var p = t(h), E = e(h);
        return this._t(p, -E, 0, 0, E, p, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function c(h, p) {
        return this._t(1, p, h, 1, 0, 0);
      }
      function d(h, p) {
        return this.shear(i(h), i(p));
      }
      function x(h, p) {
        var E = t(p), w = e(p);
        return this._t(E, w, 0, 0, -w, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(h), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(E, -w, 0, 0, w, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function f(h, p, E) {
        return !E && E !== 0 && (E = 1), h === 1 && p === 1 && E === 1 ? this : this._t(h, 0, 0, 0, 0, p, 0, 0, 0, 0, E, 0, 0, 0, 0, 1);
      }
      function C(h, p, E, w, R, N, j, X, H, rt, mt, Dt, gt, ft, St, Z) {
        return this.props[0] = h, this.props[1] = p, this.props[2] = E, this.props[3] = w, this.props[4] = R, this.props[5] = N, this.props[6] = j, this.props[7] = X, this.props[8] = H, this.props[9] = rt, this.props[10] = mt, this.props[11] = Dt, this.props[12] = gt, this.props[13] = ft, this.props[14] = St, this.props[15] = Z, this;
      }
      function S(h, p, E) {
        return E = E || 0, h !== 0 || p !== 0 || E !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, h, p, E, 1) : this;
      }
      function y(h, p, E, w, R, N, j, X, H, rt, mt, Dt, gt, ft, St, Z) {
        var D = this.props;
        if (h === 1 && p === 0 && E === 0 && w === 0 && R === 0 && N === 1 && j === 0 && X === 0 && H === 0 && rt === 0 && mt === 1 && Dt === 0) return D[12] = D[12] * h + D[15] * gt, D[13] = D[13] * N + D[15] * ft, D[14] = D[14] * mt + D[15] * St, D[15] *= Z, this._identityCalculated = false, this;
        var qt = D[0], Ut = D[1], Wt = D[2], Bt = D[3], jt = D[4], Gt = D[5], yt = D[6], Qt = D[7], $t = D[8], At = D[9], te = D[10], Tt = D[11], oe = D[12], ii = D[13], si = D[14], ri = D[15];
        return D[0] = qt * h + Ut * R + Wt * H + Bt * gt, D[1] = qt * p + Ut * N + Wt * rt + Bt * ft, D[2] = qt * E + Ut * j + Wt * mt + Bt * St, D[3] = qt * w + Ut * X + Wt * Dt + Bt * Z, D[4] = jt * h + Gt * R + yt * H + Qt * gt, D[5] = jt * p + Gt * N + yt * rt + Qt * ft, D[6] = jt * E + Gt * j + yt * mt + Qt * St, D[7] = jt * w + Gt * X + yt * Dt + Qt * Z, D[8] = $t * h + At * R + te * H + Tt * gt, D[9] = $t * p + At * N + te * rt + Tt * ft, D[10] = $t * E + At * j + te * mt + Tt * St, D[11] = $t * w + At * X + te * Dt + Tt * Z, D[12] = oe * h + ii * R + si * H + ri * gt, D[13] = oe * p + ii * N + si * rt + ri * ft, D[14] = oe * E + ii * j + si * mt + ri * St, D[15] = oe * w + ii * X + si * Dt + ri * Z, this._identityCalculated = false, this;
      }
      function A(h) {
        var p = h.props;
        return this.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]);
      }
      function b() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = true), this._identity;
      }
      function g(h) {
        for (var p = 0; p < 16; ) {
          if (h.props[p] !== this.props[p]) return false;
          p += 1;
        }
        return true;
      }
      function u(h) {
        var p;
        for (p = 0; p < 16; p += 1) h.props[p] = this.props[p];
        return h;
      }
      function v(h) {
        var p;
        for (p = 0; p < 16; p += 1) this.props[p] = h[p];
      }
      function _(h, p, E) {
        return { x: h * this.props[0] + p * this.props[4] + E * this.props[8] + this.props[12], y: h * this.props[1] + p * this.props[5] + E * this.props[9] + this.props[13], z: h * this.props[2] + p * this.props[6] + E * this.props[10] + this.props[14] };
      }
      function P(h, p, E) {
        return h * this.props[0] + p * this.props[4] + E * this.props[8] + this.props[12];
      }
      function T(h, p, E) {
        return h * this.props[1] + p * this.props[5] + E * this.props[9] + this.props[13];
      }
      function M(h, p, E) {
        return h * this.props[2] + p * this.props[6] + E * this.props[10] + this.props[14];
      }
      function L() {
        var h = this.props[0] * this.props[5] - this.props[1] * this.props[4], p = this.props[5] / h, E = -this.props[1] / h, w = -this.props[4] / h, R = this.props[0] / h, N = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / h, j = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / h, X = new et();
        return X.props[0] = p, X.props[1] = E, X.props[4] = w, X.props[5] = R, X.props[12] = N, X.props[13] = j, X;
      }
      function W(h) {
        var p = this.getInverseMatrix();
        return p.applyToPointArray(h[0], h[1], h[2] || 0);
      }
      function B(h) {
        var p, E = h.length, w = [];
        for (p = 0; p < E; p += 1) w[p] = W(h[p]);
        return w;
      }
      function V(h, p, E) {
        var w = nt("float32", 6);
        if (this.isIdentity()) w[0] = h[0], w[1] = h[1], w[2] = p[0], w[3] = p[1], w[4] = E[0], w[5] = E[1];
        else {
          var R = this.props[0], N = this.props[1], j = this.props[4], X = this.props[5], H = this.props[12], rt = this.props[13];
          w[0] = h[0] * R + h[1] * j + H, w[1] = h[0] * N + h[1] * X + rt, w[2] = p[0] * R + p[1] * j + H, w[3] = p[0] * N + p[1] * X + rt, w[4] = E[0] * R + E[1] * j + H, w[5] = E[0] * N + E[1] * X + rt;
        }
        return w;
      }
      function G(h, p, E) {
        var w;
        return this.isIdentity() ? w = [h, p, E] : w = [h * this.props[0] + p * this.props[4] + E * this.props[8] + this.props[12], h * this.props[1] + p * this.props[5] + E * this.props[9] + this.props[13], h * this.props[2] + p * this.props[6] + E * this.props[10] + this.props[14]], w;
      }
      function O(h, p) {
        if (this.isIdentity()) return h + "," + p;
        var E = this.props;
        return Math.round((h * E[0] + p * E[4] + E[12]) * 100) / 100 + "," + Math.round((h * E[1] + p * E[5] + E[13]) * 100) / 100;
      }
      function F() {
        for (var h = 0, p = this.props, E = "matrix3d(", w = 1e4; h < 16; ) E += s(p[h] * w) / w, E += h === 15 ? ")" : ",", h += 1;
        return E;
      }
      function m2(h) {
        var p = 1e4;
        return h < 1e-6 && h > 0 || h > -1e-6 && h < 0 ? s(h * p) / p : h;
      }
      function k() {
        var h = this.props, p = m2(h[0]), E = m2(h[1]), w = m2(h[4]), R = m2(h[5]), N = m2(h[12]), j = m2(h[13]);
        return "matrix(" + p + "," + E + "," + w + "," + R + "," + N + "," + j + ")";
      }
      return function() {
        this.reset = n, this.rotate = r, this.rotateX = a, this.rotateY = l, this.rotateZ = o, this.skew = d, this.skewFromAxis = x, this.shear = c, this.scale = f, this.setTransform = C, this.translate = S, this.transform = y, this.multiply = A, this.applyToPoint = _, this.applyToX = P, this.applyToY = T, this.applyToZ = M, this.applyToPointArray = G, this.applyToTriplePoints = V, this.applyToPointStringified = O, this.toCSS = F, this.to2dCSS = k, this.clone = u, this.cloneFromProps = v, this.equals = g, this.inversePoints = B, this.inversePoint = W, this.getInverseMatrix = L, this._t = this.transform, this.isIdentity = b, this._identity = true, this._identityCalculated = false, this.props = nt("float32", 16), this.reset();
      };
    }();
    function Ye(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ye = function(i) {
        return typeof i;
      } : Ye = function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, Ye(t);
    }
    var K = {};
    function ir(t) {
      Ls(t);
    }
    function ts() {
      st.searchAnimations();
    }
    function sr(t) {
      zs(t);
    }
    function rr(t) {
      Ws(t);
    }
    function nr(t) {
      return st.loadAnimation(t);
    }
    function ar(t) {
      if (typeof t == "string") switch (t) {
        case "high":
          ze(200);
          break;
        default:
        case "medium":
          ze(50);
          break;
        case "low":
          ze(10);
          break;
      }
      else !isNaN(t) && t > 1 && ze(t);
    }
    function or() {
      return typeof navigator < "u";
    }
    function hr(t, e) {
      t === "expressions" && qs(e);
    }
    function lr(t) {
      switch (t) {
        case "propertyFactory":
          return I;
        case "shapePropertyFactory":
          return fe;
        case "matrix":
          return et;
        default:
          return null;
      }
    }
    K.play = st.play, K.pause = st.pause, K.setLocationHref = ir, K.togglePause = st.togglePause, K.setSpeed = st.setSpeed, K.setDirection = st.setDirection, K.stop = st.stop, K.searchAnimations = ts, K.registerAnimation = st.registerAnimation, K.loadAnimation = nr, K.setSubframeRendering = sr, K.resize = st.resize, K.goToAndStop = st.goToAndStop, K.destroy = st.destroy, K.setQuality = ar, K.inBrowser = or, K.installPlugin = hr, K.freeze = st.freeze, K.unfreeze = st.unfreeze, K.setVolume = st.setVolume, K.mute = st.mute, K.unmute = st.unmute, K.getRegisteredAnimations = st.getRegisteredAnimations, K.useWebWorker = Es, K.setIDPrefix = rr, K.__getFactory = lr, K.version = "5.12.2";
    function fr() {
      document.readyState === "complete" && (clearInterval(cr), ts());
    }
    function pr(t) {
      for (var e = es.split("&"), i = 0; i < e.length; i += 1) {
        var s = e[i].split("=");
        if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1]);
      }
      return null;
    }
    var es = "";
    {
      var is = document.getElementsByTagName("script"), ur = is.length - 1, ss = is[ur] || { src: "" };
      es = ss.src ? ss.src.replace(/^[^\?]+\??/, "") : "", pr("renderer");
    }
    var cr = setInterval(fr, 100);
    try {
      !((typeof Oe > "u" ? "undefined" : Ye(Oe)) === "object" && typeof ni < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = K);
    } catch {
    }
    var Ft = function() {
      var t = {}, e = {};
      t.registerModifier = i, t.getModifier = s;
      function i(n, r) {
        e[n] || (e[n] = r);
      }
      function s(n, r, a) {
        return new e[n](r, a);
      }
      return t;
    }();
    function kt() {
    }
    kt.prototype.initModifierProperties = function() {
    }, kt.prototype.addShapeToModifier = function() {
    }, kt.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = { shape: t.sh, data: t, localShapeCollection: le.newShapeCollection() };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, kt.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = ai, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, kt.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, Y([ht], kt);
    function wt() {
    }
    Y([kt], wt), wt.prototype.initModifierProperties = function(t, e) {
      this.s = I.getProp(t, e.s, 0, 0.01, this), this.e = I.getProp(t, e.e, 0, 0.01, this), this.o = I.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, wt.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, wt.prototype.calculateShapeEdges = function(t, e, i, s, n) {
      var r = [];
      e <= 1 ? r.push({ s: t, e }) : t >= 1 ? r.push({ s: t - 1, e: e - 1 }) : (r.push({ s: t, e: 1 }), r.push({ s: 0, e: e - 1 }));
      var a = [], l, o = r.length, c;
      for (l = 0; l < o; l += 1) if (c = r[l], !(c.e * n < s || c.s * n > s + i)) {
        var d, x;
        c.s * n <= s ? d = 0 : d = (c.s * n - s) / i, c.e * n >= s + i ? x = 1 : x = (c.e * n - s) / i, a.push([d, x]);
      }
      return a.length || a.push([0, 0]), a;
    }, wt.prototype.releasePathsData = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) Hi.release(t[e]);
      return t.length = 0, t;
    }, wt.prototype.processShapes = function(t) {
      var e, i;
      if (this._mdf || t) {
        var s = this.o.v % 360 / 360;
        if (s < 0 && (s += 1), this.s.v > 1 ? e = 1 + s : this.s.v < 0 ? e = 0 + s : e = this.s.v + s, this.e.v > 1 ? i = 1 + s : this.e.v < 0 ? i = 0 + s : i = this.e.v + s, e > i) {
          var n = e;
          e = i, i = n;
        }
        e = Math.round(e * 1e4) * 1e-4, i = Math.round(i * 1e4) * 1e-4, this.sValue = e, this.eValue = i;
      } else e = this.sValue, i = this.eValue;
      var r, a, l = this.shapes.length, o, c, d, x, f, C = 0;
      if (i === e) for (a = 0; a < l; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = true, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
      else if (i === 1 && e === 0 || i === 0 && e === 1) {
        if (this._mdf) for (a = 0; a < l; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = true;
      } else {
        var S = [], y, A;
        for (a = 0; a < l; a += 1) if (y = this.shapes[a], !y.shape._mdf && !this._mdf && !t && this.m !== 2) y.shape.paths = y.localShapeCollection;
        else {
          if (r = y.shape.paths, c = r._length, f = 0, !y.shape._mdf && y.pathsData.length) f = y.totalShapeLength;
          else {
            for (d = this.releasePathsData(y.pathsData), o = 0; o < c; o += 1) x = Et.getSegmentsLength(r.shapes[o]), d.push(x), f += x.totalLength;
            y.totalShapeLength = f, y.pathsData = d;
          }
          C += f, y.shape._mdf = true;
        }
        var b = e, g = i, u = 0, v;
        for (a = l - 1; a >= 0; a -= 1) if (y = this.shapes[a], y.shape._mdf) {
          for (A = y.localShapeCollection, A.releaseShapes(), this.m === 2 && l > 1 ? (v = this.calculateShapeEdges(e, i, y.totalShapeLength, u, C), u += y.totalShapeLength) : v = [[b, g]], c = v.length, o = 0; o < c; o += 1) {
            b = v[o][0], g = v[o][1], S.length = 0, g <= 1 ? S.push({ s: y.totalShapeLength * b, e: y.totalShapeLength * g }) : b >= 1 ? S.push({ s: y.totalShapeLength * (b - 1), e: y.totalShapeLength * (g - 1) }) : (S.push({ s: y.totalShapeLength * b, e: y.totalShapeLength }), S.push({ s: 0, e: y.totalShapeLength * (g - 1) }));
            var _ = this.addShapes(y, S[0]);
            if (S[0].s !== S[0].e) {
              if (S.length > 1) {
                var P = y.shape.paths.shapes[y.shape.paths._length - 1];
                if (P.c) {
                  var T = _.pop();
                  this.addPaths(_, A), _ = this.addShapes(y, S[1], T);
                } else this.addPaths(_, A), _ = this.addShapes(y, S[1]);
              }
              this.addPaths(_, A);
            }
          }
          y.shape.paths = A;
        }
      }
    }, wt.prototype.addPaths = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) e.addShape(t[i]);
    }, wt.prototype.addSegment = function(t, e, i, s, n, r, a) {
      n.setXYAt(e[0], e[1], "o", r), n.setXYAt(i[0], i[1], "i", r + 1), a && n.setXYAt(t[0], t[1], "v", r), n.setXYAt(s[0], s[1], "v", r + 1);
    }, wt.prototype.addSegmentFromArray = function(t, e, i, s) {
      e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
    }, wt.prototype.addShapes = function(t, e, i) {
      var s = t.pathsData, n = t.shape.paths.shapes, r, a = t.shape.paths._length, l, o, c = 0, d, x, f, C, S = [], y, A = true;
      for (i ? (x = i._length, y = i._length) : (i = ut.newElement(), x = 0, y = 0), S.push(i), r = 0; r < a; r += 1) {
        for (f = s[r].lengths, i.c = n[r].c, o = n[r].c ? f.length : f.length + 1, l = 1; l < o; l += 1) if (d = f[l - 1], c + d.addedLength < e.s) c += d.addedLength, i.c = false;
        else if (c > e.e) {
          i.c = false;
          break;
        } else e.s <= c && e.e >= c + d.addedLength ? (this.addSegment(n[r].v[l - 1], n[r].o[l - 1], n[r].i[l], n[r].v[l], i, x, A), A = false) : (C = Et.getNewSegment(n[r].v[l - 1], n[r].v[l], n[r].o[l - 1], n[r].i[l], (e.s - c) / d.addedLength, (e.e - c) / d.addedLength, f[l - 1]), this.addSegmentFromArray(C, i, x, A), A = false, i.c = false), c += d.addedLength, x += 1;
        if (n[r].c && f.length) {
          if (d = f[l - 1], c <= e.e) {
            var b = f[l - 1].addedLength;
            e.s <= c && e.e >= c + b ? (this.addSegment(n[r].v[l - 1], n[r].o[l - 1], n[r].i[0], n[r].v[0], i, x, A), A = false) : (C = Et.getNewSegment(n[r].v[l - 1], n[r].v[0], n[r].o[l - 1], n[r].i[0], (e.s - c) / b, (e.e - c) / b, f[l - 1]), this.addSegmentFromArray(C, i, x, A), A = false, i.c = false);
          } else i.c = false;
          c += d.addedLength, x += 1;
        }
        if (i._length && (i.setXYAt(i.v[y][0], i.v[y][1], "i", y), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), c > e.e) break;
        r < a - 1 && (i = ut.newElement(), A = true, S.push(i), x = 0);
      }
      return S;
    };
    function xe() {
    }
    Y([kt], xe), xe.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = I.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, xe.prototype.processPath = function(t, e) {
      var i = e / 100, s = [0, 0], n = t._length, r = 0;
      for (r = 0; r < n; r += 1) s[0] += t.v[r][0], s[1] += t.v[r][1];
      s[0] /= n, s[1] /= n;
      var a = ut.newElement();
      a.c = t.c;
      var l, o, c, d, x, f;
      for (r = 0; r < n; r += 1) l = t.v[r][0] + (s[0] - t.v[r][0]) * i, o = t.v[r][1] + (s[1] - t.v[r][1]) * i, c = t.o[r][0] + (s[0] - t.o[r][0]) * -i, d = t.o[r][1] + (s[1] - t.o[r][1]) * -i, x = t.i[r][0] + (s[0] - t.i[r][0]) * -i, f = t.i[r][1] + (s[1] - t.i[r][1]) * -i, a.setTripleAt(l, o, c, d, x, f, r);
      return a;
    }, xe.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, n, r, a = this.amount.v;
      if (a !== 0) {
        var l, o;
        for (i = 0; i < s; i += 1) {
          if (l = this.shapes[i], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), l.shape._mdf = true, e = l.shape.paths.shapes, r = l.shape.paths._length, n = 0; n < r; n += 1) o.addShape(this.processPath(e[n], a));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    var He = function() {
      var t = [0, 0];
      function e(o) {
        var c = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || c, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function i(o) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || o) {
            var c;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var d, x;
              if (c = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (d = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / c, 0), x = this.p.getValueAtTime(this.p.keyframes[0].t / c, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (d = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / c, 0), x = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / c, 0)) : (d = this.p.pv, x = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / c, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                d = [], x = [];
                var f = this.px, C = this.py;
                f._caching.lastFrame + f.offsetTime <= f.keyframes[0].t ? (d[0] = f.getValueAtTime((f.keyframes[0].t + 0.01) / c, 0), d[1] = C.getValueAtTime((C.keyframes[0].t + 0.01) / c, 0), x[0] = f.getValueAtTime(f.keyframes[0].t / c, 0), x[1] = C.getValueAtTime(C.keyframes[0].t / c, 0)) : f._caching.lastFrame + f.offsetTime >= f.keyframes[f.keyframes.length - 1].t ? (d[0] = f.getValueAtTime(f.keyframes[f.keyframes.length - 1].t / c, 0), d[1] = C.getValueAtTime(C.keyframes[C.keyframes.length - 1].t / c, 0), x[0] = f.getValueAtTime((f.keyframes[f.keyframes.length - 1].t - 0.01) / c, 0), x[1] = C.getValueAtTime((C.keyframes[C.keyframes.length - 1].t - 0.01) / c, 0)) : (d = [f.pv, C.pv], x[0] = f.getValueAtTime((f._caching.lastFrame + f.offsetTime - 0.01) / c, f.offsetTime), x[1] = C.getValueAtTime((C._caching.lastFrame + C.offsetTime - 0.01) / c, C.offsetTime));
              } else x = t, d = x;
              this.v.rotate(-Math.atan2(d[1] - x[1], d[0] - x[0]));
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
      function n() {
      }
      function r(o) {
        this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = true;
      }
      function a(o, c, d) {
        if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = c, this.v = new et(), this.pre = new et(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(d || o), c.p && c.p.s ? (this.px = I.getProp(o, c.p.x, 0, 0, this), this.py = I.getProp(o, c.p.y, 0, 0, this), c.p.z && (this.pz = I.getProp(o, c.p.z, 0, 0, this))) : this.p = I.getProp(o, c.p || { k: [0, 0, 0] }, 1, 0, this), c.rx) {
          if (this.rx = I.getProp(o, c.rx, 0, tt, this), this.ry = I.getProp(o, c.ry, 0, tt, this), this.rz = I.getProp(o, c.rz, 0, tt, this), c.or.k[0].ti) {
            var x, f = c.or.k.length;
            for (x = 0; x < f; x += 1) c.or.k[x].to = null, c.or.k[x].ti = null;
          }
          this.or = I.getProp(o, c.or, 1, tt, this), this.or.sh = true;
        } else this.r = I.getProp(o, c.r || { k: 0 }, 0, tt, this);
        c.sk && (this.sk = I.getProp(o, c.sk, 0, tt, this), this.sa = I.getProp(o, c.sa, 0, tt, this)), this.a = I.getProp(o, c.a || { k: [0, 0, 0] }, 1, 0, this), this.s = I.getProp(o, c.s || { k: [100, 100, 100] }, 1, 0.01, this), c.o ? this.o = I.getProp(o, c.o, 0, 0.01, o) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
      }
      a.prototype = { applyToMatrix: e, getValue: i, precalculateMatrix: s, autoOrient: n }, Y([ht], a), a.prototype.addDynamicProperty = r, a.prototype._addDynamicProperty = ht.prototype.addDynamicProperty;
      function l(o, c, d) {
        return new a(o, c, d);
      }
      return { getTransformProperty: l };
    }();
    function Lt() {
    }
    Y([kt], Lt), Lt.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = I.getProp(t, e.c, 0, null, this), this.o = I.getProp(t, e.o, 0, null, this), this.tr = He.getTransformProperty(t, e.tr, this), this.so = I.getProp(t, e.tr.so, 0, 0.01, this), this.eo = I.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new et(), this.rMatrix = new et(), this.sMatrix = new et(), this.tMatrix = new et(), this.matrix = new et();
    }, Lt.prototype.applyTransforms = function(t, e, i, s, n, r) {
      var a = r ? -1 : 1, l = s.s.v[0] + (1 - s.s.v[0]) * (1 - n), o = s.s.v[1] + (1 - s.s.v[1]) * (1 - n);
      t.translate(s.p.v[0] * a * n, s.p.v[1] * a * n, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * a * n), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(r ? 1 / l : l, r ? 1 / o : o), i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
    }, Lt.prototype.init = function(t, e, i, s) {
      for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0; ) i -= 1, this._elements.unshift(e[i]);
      this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, Lt.prototype.resetElements = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e]._processed = false, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, Lt.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, Lt.prototype.changeGroupRender = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) t[i]._render = e, t[i].ty === "gr" && this.changeGroupRender(t[i].it, e);
    }, Lt.prototype.processShapes = function(t) {
      var e, i, s, n, r, a = false;
      if (this._mdf || t) {
        var l = Math.ceil(this.c.v);
        if (this._groups.length < l) {
          for (; this._groups.length < l; ) {
            var o = { it: this.cloneElements(this._elements), ty: "gr" };
            o.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), a = true;
        }
        r = 0;
        var c;
        for (s = 0; s <= this._groups.length - 1; s += 1) {
          if (c = r < l, this._groups[s]._render = c, this.changeGroupRender(this._groups[s].it, c), !c) {
            var d = this.elemsData[s].it, x = d[d.length - 1];
            x.transform.op.v !== 0 ? (x.transform.op._mdf = true, x.transform.op.v = 0) : x.transform.op._mdf = false;
          }
          r += 1;
        }
        this._currentCopies = l;
        var f = this.o.v, C = f % 1, S = f > 0 ? Math.floor(f) : Math.ceil(f), y = this.pMatrix.props, A = this.rMatrix.props, b = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var g = 0;
        if (f > 0) {
          for (; g < S; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), g += 1;
          C && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, C, false), g += C);
        } else if (f < 0) {
          for (; g > S; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), g -= 1;
          C && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -C, true), g -= C);
        }
        s = this.data.m === 1 ? 0 : this._currentCopies - 1, n = this.data.m === 1 ? 1 : -1, r = this._currentCopies;
        for (var u, v; r; ) {
          if (e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, v = i.length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), g !== 0) {
            for ((s !== 0 && n === 1 || s !== this._currentCopies - 1 && n === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15]), this.matrix.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), u = 0; u < v; u += 1) i[u] = this.matrix.props[u];
            this.matrix.reset();
          } else for (this.matrix.reset(), u = 0; u < v; u += 1) i[u] = this.matrix.props[u];
          g += 1, r -= 1, s += n;
        }
      } else for (r = this._currentCopies, s = 0, n = 1; r; ) e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, r -= 1, s += n;
      return a;
    }, Lt.prototype.addShape = function() {
    };
    function Pe() {
    }
    Y([kt], Pe), Pe.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = I.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, Pe.prototype.processPath = function(t, e) {
      var i = ut.newElement();
      i.c = t.c;
      var s, n = t._length, r, a, l, o, c, d, x = 0, f, C, S, y, A, b;
      for (s = 0; s < n; s += 1) r = t.v[s], l = t.o[s], a = t.i[s], r[0] === l[0] && r[1] === l[1] && r[0] === a[0] && r[1] === a[1] ? (s === 0 || s === n - 1) && !t.c ? (i.setTripleAt(r[0], r[1], l[0], l[1], a[0], a[1], x), x += 1) : (s === 0 ? o = t.v[n - 1] : o = t.v[s - 1], c = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)), d = c ? Math.min(c / 2, e) / c : 0, A = r[0] + (o[0] - r[0]) * d, f = A, b = r[1] - (r[1] - o[1]) * d, C = b, S = f - (f - r[0]) * Yt, y = C - (C - r[1]) * Yt, i.setTripleAt(f, C, S, y, A, b, x), x += 1, s === n - 1 ? o = t.v[0] : o = t.v[s + 1], c = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)), d = c ? Math.min(c / 2, e) / c : 0, S = r[0] + (o[0] - r[0]) * d, f = S, y = r[1] + (o[1] - r[1]) * d, C = y, A = f - (f - r[0]) * Yt, b = C - (C - r[1]) * Yt, i.setTripleAt(f, C, S, y, A, b, x), x += 1) : (i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], x), x += 1);
      return i;
    }, Pe.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, n, r, a = this.rd.v;
      if (a !== 0) {
        var l, o;
        for (i = 0; i < s; i += 1) {
          if (l = this.shapes[i], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), l.shape._mdf = true, e = l.shape.paths.shapes, r = l.shape.paths._length, n = 0; n < r; n += 1) o.addShape(this.processPath(e[n], a));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function Je(t, e) {
      return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
    }
    function ci(t) {
      return Math.abs(t) <= 1e-5;
    }
    function rs(t, e, i) {
      return t * (1 - i) + e * i;
    }
    function Xt(t, e, i) {
      return [rs(t[0], e[0], i), rs(t[1], e[1], i)];
    }
    function vr(t, e, i) {
      if (t === 0) return [];
      var s = e * e - 4 * t * i;
      if (s < 0) return [];
      var n = -e / (2 * t);
      if (s === 0) return [n];
      var r = Math.sqrt(s) / (2 * t);
      return [n - r, n + r];
    }
    function ns(t, e, i, s) {
      return [-t + 3 * e - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t];
    }
    function as(t) {
      return new it(t, t, t, t, false);
    }
    function it(t, e, i, s, n) {
      n && ue(t, e) && (e = Xt(t, s, 1 / 3)), n && ue(i, s) && (i = Xt(t, s, 2 / 3));
      var r = ns(t[0], e[0], i[0], s[0]), a = ns(t[1], e[1], i[1], s[1]);
      this.a = [r[0], a[0]], this.b = [r[1], a[1]], this.c = [r[2], a[2]], this.d = [r[3], a[3]], this.points = [t, e, i, s];
    }
    it.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, it.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, it.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, it.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, it.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (ci(t)) return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (i < 0) return [];
      var s = Math.sqrt(i);
      return ci(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter(function(n) {
        return n > 0 && n < 1;
      });
    }, it.prototype.split = function(t) {
      if (t <= 0) return [as(this.points[0]), this];
      if (t >= 1) return [this, as(this.points[this.points.length - 1])];
      var e = Xt(this.points[0], this.points[1], t), i = Xt(this.points[1], this.points[2], t), s = Xt(this.points[2], this.points[3], t), n = Xt(e, i, t), r = Xt(i, s, t), a = Xt(n, r, t);
      return [new it(this.points[0], e, n, a, true), new it(a, r, s, this.points[3], true)];
    };
    function os(t, e) {
      var i = t.points[0][e], s = t.points[t.points.length - 1][e];
      if (i > s) {
        var n = s;
        s = i, i = n;
      }
      for (var r = vr(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < r.length; a += 1) if (r[a] > 0 && r[a] < 1) {
        var l = t.point(r[a])[e];
        l < i ? i = l : l > s && (s = l);
      }
      return { min: i, max: s };
    }
    it.prototype.bounds = function() {
      return { x: os(this, 0), y: os(this, 1) };
    }, it.prototype.boundingBox = function() {
      var t = this.bounds();
      return { left: t.x.min, right: t.x.max, top: t.y.min, bottom: t.y.max, width: t.x.max - t.x.min, height: t.y.max - t.y.min, cx: (t.x.max + t.x.min) / 2, cy: (t.y.max + t.y.min) / 2 };
    };
    function Ke(t, e, i) {
      var s = t.boundingBox();
      return { cx: s.cx, cy: s.cy, width: s.width, height: s.height, bez: t, t: (e + i) / 2, t1: e, t2: i };
    }
    function hs(t) {
      var e = t.bez.split(0.5);
      return [Ke(e[0], t.t1, t.t), Ke(e[1], t.t, t.t2)];
    }
    function dr(t, e) {
      return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
    }
    function we(t, e, i, s, n, r) {
      if (dr(t, e)) {
        if (i >= r || t.width <= s && t.height <= s && e.width <= s && e.height <= s) {
          n.push([t.t, e.t]);
          return;
        }
        var a = hs(t), l = hs(e);
        we(a[0], l[0], i + 1, s, n, r), we(a[0], l[1], i + 1, s, n, r), we(a[1], l[0], i + 1, s, n, r), we(a[1], l[1], i + 1, s, n, r);
      }
    }
    it.prototype.intersections = function(t, e, i) {
      e === void 0 && (e = 2), i === void 0 && (i = 7);
      var s = [];
      return we(Ke(this, 0, 1), Ke(t, 0, 1), 0, e, s, i), s;
    }, it.shapeSegment = function(t, e) {
      var i = (e + 1) % t.length();
      return new it(t.v[e], t.o[e], t.i[i], t.v[i], true);
    }, it.shapeSegmentInverted = function(t, e) {
      var i = (e + 1) % t.length();
      return new it(t.v[i], t.i[i], t.o[e], t.v[e], true);
    };
    function vi(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function Ze(t, e, i, s) {
      var n = [t[0], t[1], 1], r = [e[0], e[1], 1], a = [i[0], i[1], 1], l = [s[0], s[1], 1], o = vi(vi(n, r), vi(a, l));
      return ci(o[2]) ? null : [o[0] / o[2], o[1] / o[2]];
    }
    function pe(t, e, i) {
      return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i];
    }
    function di(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function ue(t, e) {
      return Je(t[0], e[0]) && Je(t[1], e[1]);
    }
    function Ae() {
    }
    Y([kt], Ae), Ae.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = I.getProp(t, e.s, 0, null, this), this.frequency = I.getProp(t, e.r, 0, null, this), this.pointsType = I.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function ls(t, e, i, s, n, r, a) {
      var l = i - Math.PI / 2, o = i + Math.PI / 2, c = e[0] + Math.cos(i) * s * n, d = e[1] - Math.sin(i) * s * n;
      t.setTripleAt(c, d, c + Math.cos(l) * r, d - Math.sin(l) * r, c + Math.cos(o) * a, d - Math.sin(o) * a, t.length());
    }
    function mr(t, e) {
      var i = [e[0] - t[0], e[1] - t[1]], s = -Math.PI * 0.5, n = [Math.cos(s) * i[0] - Math.sin(s) * i[1], Math.sin(s) * i[0] + Math.cos(s) * i[1]];
      return n;
    }
    function gr(t, e) {
      var i = e === 0 ? t.length() - 1 : e - 1, s = (e + 1) % t.length(), n = t.v[i], r = t.v[s], a = mr(n, r);
      return Math.atan2(0, 1) - Math.atan2(a[1], a[0]);
    }
    function fs(t, e, i, s, n, r, a) {
      var l = gr(e, i), o = e.v[i % e._length], c = e.v[i === 0 ? e._length - 1 : i - 1], d = e.v[(i + 1) % e._length], x = r === 2 ? Math.sqrt(Math.pow(o[0] - c[0], 2) + Math.pow(o[1] - c[1], 2)) : 0, f = r === 2 ? Math.sqrt(Math.pow(o[0] - d[0], 2) + Math.pow(o[1] - d[1], 2)) : 0;
      ls(t, e.v[i % e._length], l, a, s, f / ((n + 1) * 2), x / ((n + 1) * 2));
    }
    function yr(t, e, i, s, n, r) {
      for (var a = 0; a < s; a += 1) {
        var l = (a + 1) / (s + 1), o = n === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, c = e.normalAngle(l), d = e.point(l);
        ls(t, d, c, r, i, o / ((s + 1) * 2), o / ((s + 1) * 2)), r = -r;
      }
      return r;
    }
    Ae.prototype.processPath = function(t, e, i, s) {
      var n = t._length, r = ut.newElement();
      if (r.c = t.c, t.c || (n -= 1), n === 0) return r;
      var a = -1, l = it.shapeSegment(t, 0);
      fs(r, t, 0, e, i, s, a);
      for (var o = 0; o < n; o += 1) a = yr(r, l, e, i, s, -a), o === n - 1 && !t.c ? l = null : l = it.shapeSegment(t, (o + 1) % n), fs(r, t, o + 1, e, i, s, a);
      return r;
    }, Ae.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, n, r, a = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
      if (a !== 0) {
        var c, d;
        for (i = 0; i < s; i += 1) {
          if (c = this.shapes[i], d = c.localShapeCollection, !(!c.shape._mdf && !this._mdf && !t)) for (d.releaseShapes(), c.shape._mdf = true, e = c.shape.paths.shapes, r = c.shape.paths._length, n = 0; n < r; n += 1) d.addShape(this.processPath(e[n], a, l, o));
          c.shape.paths = c.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function mi(t, e, i) {
      var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [pe(t, s, i), pe(e, s, i)];
    }
    function ce(t, e) {
      var i, s, n, r, a, l, o;
      o = mi(t.points[0], t.points[1], e), i = o[0], s = o[1], o = mi(t.points[1], t.points[2], e), n = o[0], r = o[1], o = mi(t.points[2], t.points[3], e), a = o[0], l = o[1];
      var c = Ze(i, s, n, r);
      c === null && (c = s);
      var d = Ze(a, l, n, r);
      return d === null && (d = a), new it(i, c, d, l);
    }
    function ps(t, e, i, s, n) {
      var r = e.points[3], a = i.points[0];
      if (s === 3 || ue(r, a)) return r;
      if (s === 2) {
        var l = -e.tangentAngle(1), o = -i.tangentAngle(0) + Math.PI, c = Ze(r, pe(r, l + Math.PI / 2, 100), a, pe(a, l + Math.PI / 2, 100)), d = c ? di(c, r) : di(r, a) / 2, x = pe(r, l, 2 * d * Yt);
        return t.setXYAt(x[0], x[1], "o", t.length() - 1), x = pe(a, o, 2 * d * Yt), t.setTripleAt(a[0], a[1], a[0], a[1], x[0], x[1], t.length()), a;
      }
      var f = ue(r, e.points[2]) ? e.points[0] : e.points[2], C = ue(a, i.points[1]) ? i.points[3] : i.points[1], S = Ze(f, r, a, C);
      return S && di(S, r) < n ? (t.setTripleAt(S[0], S[1], S[0], S[1], S[0], S[1], t.length()), S) : r;
    }
    function us(t, e) {
      var i = t.intersections(e);
      return i.length && Je(i[0][0], 1) && i.shift(), i.length ? i[0] : null;
    }
    function cs(t, e) {
      var i = t.slice(), s = e.slice(), n = us(t[t.length - 1], e[0]);
      return n && (i[t.length - 1] = t[t.length - 1].split(n[0])[0], s[0] = e[0].split(n[1])[1]), t.length > 1 && e.length > 1 && (n = us(t[0], e[e.length - 1]), n) ? [[t[0].split(n[0])[0]], [e[e.length - 1].split(n[1])[1]]] : [i, s];
    }
    function br(t) {
      for (var e, i = 1; i < t.length; i += 1) e = cs(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
      return t.length > 1 && (e = cs(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function vs(t, e) {
      var i = t.inflectionPoints(), s, n, r, a;
      if (i.length === 0) return [ce(t, e)];
      if (i.length === 1 || Je(i[1], 1)) return r = t.split(i[0]), s = r[0], n = r[1], [ce(s, e), ce(n, e)];
      r = t.split(i[0]), s = r[0];
      var l = (i[1] - i[0]) / (1 - i[0]);
      return r = r[1].split(l), a = r[0], n = r[1], [ce(s, e), ce(a, e), ce(n, e)];
    }
    function Te() {
    }
    Y([kt], Te), Te.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = I.getProp(t, e.a, 0, null, this), this.miterLimit = I.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, Te.prototype.processPath = function(t, e, i, s) {
      var n = ut.newElement();
      n.c = t.c;
      var r = t.length();
      t.c || (r -= 1);
      var a, l, o, c = [];
      for (a = 0; a < r; a += 1) o = it.shapeSegment(t, a), c.push(vs(o, e));
      if (!t.c) for (a = r - 1; a >= 0; a -= 1) o = it.shapeSegmentInverted(t, a), c.push(vs(o, e));
      c = br(c);
      var d = null, x = null;
      for (a = 0; a < c.length; a += 1) {
        var f = c[a];
        for (x && (d = ps(n, x, f[0], i, s)), x = f[f.length - 1], l = 0; l < f.length; l += 1) o = f[l], d && ue(o.points[0], d) ? n.setXYAt(o.points[1][0], o.points[1][1], "o", n.length() - 1) : n.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], n.length()), n.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], n.length()), d = o.points[3];
      }
      return c.length && ps(n, x, c[0][0], i, s), n;
    }, Te.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, n, r, a = this.amount.v, l = this.miterLimit.v, o = this.lineJoin;
      if (a !== 0) {
        var c, d;
        for (i = 0; i < s; i += 1) {
          if (c = this.shapes[i], d = c.localShapeCollection, !(!c.shape._mdf && !this._mdf && !t)) for (d.releaseShapes(), c.shape._mdf = true, e = c.shape.paths.shapes, r = c.shape.paths._length, n = 0; n < r; n += 1) d.addShape(this.processPath(e[n], a, o, l));
          c.shape.paths = c.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function ds(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", n = e.length, r, a = 0; a < n; a += 1) switch (r = e[a].toLowerCase(), r) {
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
    var se = function() {
      var t = 5e3, e = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, i = [];
      i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var s = 127988, n = 917631, r = 917601, a = 917626, l = 65039, o = 8205, c = 127462, d = 127487, x = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function f(m2) {
        var k = m2.split(","), h, p = k.length, E = [];
        for (h = 0; h < p; h += 1) k[h] !== "sans-serif" && k[h] !== "monospace" && E.push(k[h]);
        return E.join(",");
      }
      function C(m2, k) {
        var h = _t("span");
        h.setAttribute("aria-hidden", true), h.style.fontFamily = k;
        var p = _t("span");
        p.innerText = "giItT1WQy@!-/#", h.style.position = "absolute", h.style.left = "-10000px", h.style.top = "-10000px", h.style.fontSize = "300px", h.style.fontVariant = "normal", h.style.fontStyle = "normal", h.style.fontWeight = "normal", h.style.letterSpacing = "0", h.appendChild(p), document.body.appendChild(h);
        var E = p.offsetWidth;
        return p.style.fontFamily = f(m2) + ", " + k, { node: p, w: E, parent: h };
      }
      function S() {
        var m2, k = this.fonts.length, h, p, E = k;
        for (m2 = 0; m2 < k; m2 += 1) this.fonts[m2].loaded ? E -= 1 : this.fonts[m2].fOrigin === "n" || this.fonts[m2].origin === 0 ? this.fonts[m2].loaded = true : (h = this.fonts[m2].monoCase.node, p = this.fonts[m2].monoCase.w, h.offsetWidth !== p ? (E -= 1, this.fonts[m2].loaded = true) : (h = this.fonts[m2].sansCase.node, p = this.fonts[m2].sansCase.w, h.offsetWidth !== p && (E -= 1, this.fonts[m2].loaded = true)), this.fonts[m2].loaded && (this.fonts[m2].sansCase.parent.parentNode.removeChild(this.fonts[m2].sansCase.parent), this.fonts[m2].monoCase.parent.parentNode.removeChild(this.fonts[m2].monoCase.parent)));
        E !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function y(m2, k) {
        var h = document.body && k ? "svg" : "canvas", p, E = ds(m2);
        if (h === "svg") {
          var w = q("text");
          w.style.fontSize = "100px", w.setAttribute("font-family", m2.fFamily), w.setAttribute("font-style", E.style), w.setAttribute("font-weight", E.weight), w.textContent = "1", m2.fClass ? (w.style.fontFamily = "inherit", w.setAttribute("class", m2.fClass)) : w.style.fontFamily = m2.fFamily, k.appendChild(w), p = w;
        } else {
          var R = new OffscreenCanvas(500, 500).getContext("2d");
          R.font = E.style + " " + E.weight + " 100px " + m2.fFamily, p = R;
        }
        function N(j) {
          return h === "svg" ? (p.textContent = j, p.getComputedTextLength()) : p.measureText(j).width;
        }
        return { measureText: N };
      }
      function A(m2, k) {
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
            mt.helper = y(mt), mt.cache = {};
          }), this.fonts = m2.list;
          return;
        }
        var h = m2.list, p, E = h.length, w = E;
        for (p = 0; p < E; p += 1) {
          var R = true, N, j;
          if (h[p].loaded = false, h[p].monoCase = C(h[p].fFamily, "monospace"), h[p].sansCase = C(h[p].fFamily, "sans-serif"), !h[p].fPath) h[p].loaded = true, w -= 1;
          else if (h[p].fOrigin === "p" || h[p].origin === 3) {
            if (N = document.querySelectorAll('style[f-forigin="p"][f-family="' + h[p].fFamily + '"], style[f-origin="3"][f-family="' + h[p].fFamily + '"]'), N.length > 0 && (R = false), R) {
              var X = _t("style");
              X.setAttribute("f-forigin", h[p].fOrigin), X.setAttribute("f-origin", h[p].origin), X.setAttribute("f-family", h[p].fFamily), X.type = "text/css", X.innerText = "@font-face {font-family: " + h[p].fFamily + "; font-style: normal; src: url('" + h[p].fPath + "');}", k.appendChild(X);
            }
          } else if (h[p].fOrigin === "g" || h[p].origin === 1) {
            for (N = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), j = 0; j < N.length; j += 1) N[j].href.indexOf(h[p].fPath) !== -1 && (R = false);
            if (R) {
              var H = _t("link");
              H.setAttribute("f-forigin", h[p].fOrigin), H.setAttribute("f-origin", h[p].origin), H.type = "text/css", H.rel = "stylesheet", H.href = h[p].fPath, document.body.appendChild(H);
            }
          } else if (h[p].fOrigin === "t" || h[p].origin === 2) {
            for (N = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), j = 0; j < N.length; j += 1) h[p].fPath === N[j].src && (R = false);
            if (R) {
              var rt = _t("link");
              rt.setAttribute("f-forigin", h[p].fOrigin), rt.setAttribute("f-origin", h[p].origin), rt.setAttribute("rel", "stylesheet"), rt.setAttribute("href", h[p].fPath), k.appendChild(rt);
            }
          }
          h[p].helper = y(h[p], k), h[p].cache = {}, this.fonts.push(h[p]);
        }
        w === 0 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function b(m2) {
        if (m2) {
          this.chars || (this.chars = []);
          var k, h = m2.length, p, E = this.chars.length, w;
          for (k = 0; k < h; k += 1) {
            for (p = 0, w = false; p < E; ) this.chars[p].style === m2[k].style && this.chars[p].fFamily === m2[k].fFamily && this.chars[p].ch === m2[k].ch && (w = true), p += 1;
            w || (this.chars.push(m2[k]), E += 1);
          }
        }
      }
      function g(m2, k, h) {
        for (var p = 0, E = this.chars.length; p < E; ) {
          if (this.chars[p].ch === m2 && this.chars[p].style === k && this.chars[p].fFamily === h) return this.chars[p];
          p += 1;
        }
        return (typeof m2 == "string" && m2.charCodeAt(0) !== 13 || !m2) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", m2, k, h)), e;
      }
      function u(m2, k, h) {
        var p = this.getFontByName(k), E = m2;
        if (!p.cache[E]) {
          var w = p.helper;
          if (m2 === " ") {
            var R = w.measureText("|" + m2 + "|"), N = w.measureText("||");
            p.cache[E] = (R - N) / 100;
          } else p.cache[E] = w.measureText(m2) / 100;
        }
        return p.cache[E] * h;
      }
      function v(m2) {
        for (var k = 0, h = this.fonts.length; k < h; ) {
          if (this.fonts[k].fName === m2) return this.fonts[k];
          k += 1;
        }
        return this.fonts[0];
      }
      function _(m2) {
        var k = 0, h = m2.charCodeAt(0);
        if (h >= 55296 && h <= 56319) {
          var p = m2.charCodeAt(1);
          p >= 56320 && p <= 57343 && (k = (h - 55296) * 1024 + p - 56320 + 65536);
        }
        return k;
      }
      function P(m2, k) {
        var h = m2.toString(16) + k.toString(16);
        return x.indexOf(h) !== -1;
      }
      function T(m2) {
        return m2 === o;
      }
      function M(m2) {
        return m2 === l;
      }
      function L(m2) {
        var k = _(m2);
        return k >= c && k <= d;
      }
      function W(m2) {
        return L(m2.substr(0, 2)) && L(m2.substr(2, 2));
      }
      function B(m2) {
        return i.indexOf(m2) !== -1;
      }
      function V(m2, k) {
        var h = _(m2.substr(k, 2));
        if (h !== s) return false;
        var p = 0;
        for (k += 2; p < 5; ) {
          if (h = _(m2.substr(k, 2)), h < r || h > a) return false;
          p += 1, k += 2;
        }
        return _(m2.substr(k, 2)) === n;
      }
      function G() {
        this.isLoaded = true;
      }
      var O = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      O.isModifier = P, O.isZeroWidthJoiner = T, O.isFlagEmoji = W, O.isRegionalCode = L, O.isCombinedCharacter = B, O.isRegionalFlag = V, O.isVariationSelector = M, O.BLACK_FLAG_CODE_POINT = s;
      var F = { addChars: b, addFonts: A, getCharData: g, getFontByName: v, measureText: u, checkLoadedFonts: S, setIsLoaded: G };
      return O.prototype = F, O;
    }();
    function ms(t) {
      this.animationData = t;
    }
    ms.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    };
    function _r(t) {
      return new ms(t);
    }
    function Ht() {
    }
    Ht.prototype = { initRenderable: function() {
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
    var Ue = /* @__PURE__ */ function() {
      var t = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" };
      return function(e) {
        return t[e] || "";
      };
    }();
    function Cr(t, e, i) {
      this.p = I.getProp(e, t.v, 0, 0, i);
    }
    function Sr(t, e, i) {
      this.p = I.getProp(e, t.v, 0, 0, i);
    }
    function kr(t, e, i) {
      this.p = I.getProp(e, t.v, 1, 0, i);
    }
    function xr(t, e, i) {
      this.p = I.getProp(e, t.v, 1, 0, i);
    }
    function Pr(t, e, i) {
      this.p = I.getProp(e, t.v, 0, 0, i);
    }
    function wr(t, e, i) {
      this.p = I.getProp(e, t.v, 0, 0, i);
    }
    function Ar(t, e, i) {
      this.p = I.getProp(e, t.v, 0, 0, i);
    }
    function Tr() {
      this.p = {};
    }
    function gs(t, e) {
      var i = t.ef || [];
      this.effectElements = [];
      var s, n = i.length, r;
      for (s = 0; s < n; s += 1) r = new Me(i[s], e), this.effectElements.push(r);
    }
    function Me(t, e) {
      this.init(t, e);
    }
    Y([ht], Me), Me.prototype.getValue = Me.prototype.iterateDynamicProperties, Me.prototype.init = function(t, e) {
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var i, s = this.data.ef.length, n, r = this.data.ef;
      for (i = 0; i < s; i += 1) {
        switch (n = null, r[i].ty) {
          case 0:
            n = new Cr(r[i], e, this);
            break;
          case 1:
            n = new Sr(r[i], e, this);
            break;
          case 2:
            n = new kr(r[i], e, this);
            break;
          case 3:
            n = new xr(r[i], e, this);
            break;
          case 4:
          case 7:
            n = new Ar(r[i], e, this);
            break;
          case 10:
            n = new Pr(r[i], e, this);
            break;
          case 11:
            n = new wr(r[i], e, this);
            break;
          case 5:
            n = new gs(r[i], e);
            break;
          default:
            n = new Tr(r[i]);
            break;
        }
        n && this.effectElements.push(n);
      }
    };
    function xt() {
    }
    xt.prototype = { checkMasks: function() {
      if (!this.data.hasMask) return false;
      for (var e = 0, i = this.data.masksProperties.length; e < i; ) {
        if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== false) return true;
        e += 1;
      }
      return false;
    }, initExpressions: function() {
    }, setBlendMode: function() {
      var e = Ue(this.data.bm), i = this.baseElement || this.layerElement;
      i.style["mix-blend-mode"] = e;
    }, initBaseData: function(e, i, s) {
      this.globalData = i, this.comp = s, this.data = e, this.layerId = vt(), this.data.sr || (this.data.sr = 1), this.effectsManager = new gs(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } };
    function Pt() {
    }
    Pt.prototype = { initFrame: function() {
      this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
    }, prepareProperties: function(e, i) {
      var s, n = this.dynamicProperties.length;
      for (s = 0; s < n; s += 1) (i || this._isParent && this.dynamicProperties[s].propType === "transform") && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = true, this._mdf = true));
    }, addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
    } };
    function Jt(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i);
    }
    Jt.prototype.prepareFrame = function() {
    }, Y([Ht, xt, Pt], Jt), Jt.prototype.getBaseElement = function() {
      return null;
    }, Jt.prototype.renderFrame = function() {
    }, Jt.prototype.destroy = function() {
    }, Jt.prototype.initExpressions = function() {
    }, Jt.prototype.getFootageData = function() {
      return this.footageData;
    };
    function dt(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = false, this._canPlay = false;
      var s = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? I.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true }, this.lv = I.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this);
    }
    dt.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder) this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var i = this._volume * this._volumeMultiplier;
      this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i));
    }, Y([Ht, xt, Pt], dt), dt.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
    }, dt.prototype.show = function() {
    }, dt.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = false;
    }, dt.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = false, this._canPlay = false;
    }, dt.prototype.resume = function() {
      this._canPlay = true;
    }, dt.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, dt.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, dt.prototype.getBaseElement = function() {
      return null;
    }, dt.prototype.destroy = function() {
    }, dt.prototype.sourceRectAtTime = function() {
    }, dt.prototype.initExpressions = function() {
    };
    function lt() {
    }
    lt.prototype.checkLayers = function(t) {
      var e, i = this.layers.length, s;
      for (this.completeLayers = true, e = i - 1; e >= 0; e -= 1) this.elements[e] || (s = this.layers[e], s.ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : false;
      this.checkPendingElements();
    }, lt.prototype.createItem = function(t) {
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
    }, lt.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, lt.prototype.createAudio = function(t) {
      return new dt(t, this.globalData, this);
    }, lt.prototype.createFootage = function(t) {
      return new Jt(t, this.globalData, this);
    }, lt.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements();
    }, lt.prototype.includeLayers = function(t) {
      this.completeLayers = false;
      var e, i = t.length, s, n = this.layers.length;
      for (e = 0; e < i; e += 1) for (s = 0; s < n; ) {
        if (this.layers[s].id === t[e].id) {
          this.layers[s] = t[e];
          break;
        }
        s += 1;
      }
    }, lt.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, lt.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, lt.prototype.buildElementParenting = function(t, e, i) {
      for (var s = this.elements, n = this.layers, r = 0, a = n.length; r < a; ) n[r].ind == e && (!s[r] || s[r] === true ? (this.buildItem(r), this.addPendingElement(t)) : (i.push(s[r]), s[r].setAsParent(), n[r].parent !== void 0 ? this.buildElementParenting(t, n[r].parent, i) : t.setHierarchy(i))), r += 1;
    }, lt.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, lt.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) if (t[e].xt) {
        var s = this.createComp(t[e]);
        s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
      }
    }, lt.prototype.getElementById = function(t) {
      var e, i = this.elements.length;
      for (e = 0; e < i; e += 1) if (this.elements[e].data.ind === t) return this.elements[e];
      return null;
    }, lt.prototype.getElementByPath = function(t) {
      var e = t.shift(), i;
      if (typeof e == "number") i = this.elements[e];
      else {
        var s, n = this.elements.length;
        for (s = 0; s < n; s += 1) if (this.elements[s].data.nm === e) {
          i = this.elements[s];
          break;
        }
      }
      return t.length === 0 ? i : i.getElementByPath(t);
    }, lt.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new se(), this.globalData.slotManager = _r(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
    };
    var ys = { TRANSFORM_EFFECT: "transformEFfect" };
    function It() {
    }
    It.prototype = { initTransform: function() {
      var e = new et();
      this.finalTransform = { mProp: this.data.ks ? He.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: false, _localMatMdf: false, _opMdf: false, mat: e, localMat: e, localOpacity: 1 }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
    }, renderTransform: function() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var e, i = this.finalTransform.mat, s = 0, n = this.hierarchy.length;
        if (!this.finalTransform._matMdf) for (; s < n; ) {
          if (this.hierarchy[s].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = true;
            break;
          }
          s += 1;
        }
        if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e), s = 0; s < n; s += 1) i.multiply(this.hierarchy[s].finalTransform.mProp.v);
      }
      this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
    }, renderLocalTransform: function() {
      if (this.localTransforms) {
        var e = 0, i = this.localTransforms.length;
        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; e < i; ) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = true), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = true), e += 1;
        if (this.finalTransform._localMatMdf) {
          var s = this.finalTransform.localMat;
          for (this.localTransforms[0].matrix.clone(s), e = 1; e < i; e += 1) {
            var n = this.localTransforms[e].matrix;
            s.multiply(n);
          }
          s.multiply(this.finalTransform.mat);
        }
        if (this.finalTransform._opMdf) {
          var r = this.finalTransform.localOpacity;
          for (e = 0; e < i; e += 1) r *= this.localTransforms[e].opacity * 0.01;
          this.finalTransform.localOpacity = r;
        }
      }
    }, searchEffectTransforms: function() {
      if (this.renderableEffectsManager) {
        var e = this.renderableEffectsManager.getEffects(ys.TRANSFORM_EFFECT);
        if (e.length) {
          this.localTransforms = [], this.finalTransform.localMat = new et();
          var i = 0, s = e.length;
          for (i = 0; i < s; i += 1) this.localTransforms.push(e[i]);
        }
      }
    }, globalToLocal: function(e) {
      var i = [];
      i.push(this.finalTransform);
      for (var s = true, n = this.comp; s; ) n.finalTransform ? (n.data.hasMask && i.splice(0, 0, n.finalTransform), n = n.comp) : s = false;
      var r, a = i.length, l;
      for (r = 0; r < a; r += 1) l = i[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - l[0], e[1] - l[1], 0];
      return e;
    }, mHelper: new et() };
    function Kt(t, e, i) {
      this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var s = this.globalData.defs, n, r = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = Q(r), this.solidPath = "";
      var a, l = this.masksProperties, o = 0, c = [], d, x, f = vt(), C, S, y, A, b = "clipPath", g = "clip-path";
      for (n = 0; n < r; n += 1) if ((l[n].mode !== "a" && l[n].mode !== "n" || l[n].inv || l[n].o.k !== 100 || l[n].o.x) && (b = "mask", g = "mask"), (l[n].mode === "s" || l[n].mode === "i") && o === 0 ? (C = q("rect"), C.setAttribute("fill", "#ffffff"), C.setAttribute("width", this.element.comp.data.w || 0), C.setAttribute("height", this.element.comp.data.h || 0), c.push(C)) : C = null, a = q("path"), l[n].mode === "n") this.viewData[n] = { op: I.getProp(this.element, l[n].o, 0, 0.01, this.element), prop: fe.getShapeProp(this.element, l[n], 3), elem: a, lastPath: "" }, s.appendChild(a);
      else {
        o += 1, a.setAttribute("fill", l[n].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero");
        var u;
        if (l[n].x.k !== 0 ? (b = "mask", g = "mask", A = I.getProp(this.element, l[n].x, 0, null, this.element), u = vt(), S = q("filter"), S.setAttribute("id", u), y = q("feMorphology"), y.setAttribute("operator", "erode"), y.setAttribute("in", "SourceGraphic"), y.setAttribute("radius", "0"), S.appendChild(y), s.appendChild(S), a.setAttribute("stroke", l[n].mode === "s" ? "#000000" : "#ffffff")) : (y = null, A = null), this.storedData[n] = { elem: a, x: A, expan: y, lastPath: "", lastOperator: "", filterId: u, lastRadius: 0 }, l[n].mode === "i") {
          x = c.length;
          var v = q("g");
          for (d = 0; d < x; d += 1) v.appendChild(c[d]);
          var _ = q("mask");
          _.setAttribute("mask-type", "alpha"), _.setAttribute("id", f + "_" + o), _.appendChild(a), s.appendChild(_), v.setAttribute("mask", "url(" + bt() + "#" + f + "_" + o + ")"), c.length = 0, c.push(v);
        } else c.push(a);
        l[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = { elem: a, lastPath: "", op: I.getProp(this.element, l[n].o, 0, 0.01, this.element), prop: fe.getShapeProp(this.element, l[n], 3), invRect: C }, this.viewData[n].prop.k || this.drawPath(l[n], this.viewData[n].prop.v, this.viewData[n]);
      }
      for (this.maskElement = q(b), r = c.length, n = 0; n < r; n += 1) this.maskElement.appendChild(c[n]);
      o > 0 && (this.maskElement.setAttribute("id", f), this.element.maskedElement.setAttribute(g, "url(" + bt() + "#" + f + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    Kt.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, Kt.prototype.renderFrame = function(t) {
      var e = this.element.finalTransform.mat, i, s = this.masksProperties.length;
      for (i = 0; i < s; i += 1) if ((this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), this.masksProperties[i].mode !== "n" && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[i].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || t))) {
        var n = this.storedData[i].expan;
        this.storedData[i].x.v < 0 ? (this.storedData[i].lastOperator !== "erode" && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + bt() + "#" + this.storedData[i].filterId + ")")), n.setAttribute("radius", -this.storedData[i].x.v)) : (this.storedData[i].lastOperator !== "dilate" && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2));
      }
    }, Kt.prototype.getMaskelement = function() {
      return this.maskElement;
    }, Kt.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
    }, Kt.prototype.drawPath = function(t, e, i) {
      var s = " M" + e.v[0][0] + "," + e.v[0][1], n, r;
      for (r = e._length, n = 1; n < r; n += 1) s += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[n][0] + "," + e.i[n][1] + " " + e.v[n][0] + "," + e.v[n][1];
      if (e.c && r > 1 && (s += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
        var a = "";
        i.elem && (e.c && (a = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", a)), i.lastPath = s;
      }
    }, Kt.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var Ee = function() {
      var t = {};
      t.createFilter = e, t.createAlphaToLuminanceFilter = i;
      function e(s, n) {
        var r = q("filter");
        return r.setAttribute("id", s), n !== true && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r;
      }
      function i() {
        var s = q("feColorMatrix");
        return s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), s;
      }
      return t;
    }(), Qe = function() {
      var t = { maskType: true, svgLumaHidden: true, offscreenCanvas: typeof OffscreenCanvas < "u" };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = false), t;
    }(), $e = {}, bs = "filter_result_";
    function gi(t) {
      var e, i = "SourceGraphic", s = t.data.ef ? t.data.ef.length : 0, n = vt(), r = Ee.createFilter(n, true), a = 0;
      this.filters = [];
      var l;
      for (e = 0; e < s; e += 1) {
        l = null;
        var o = t.data.ef[e].ty;
        if ($e[o]) {
          var c = $e[o].effect;
          l = new c(r, t.effectsManager.effectElements[e], t, bs + a, i), i = bs + a, $e[o].countsAsEffect && (a += 1);
        }
        l && this.filters.push(l);
      }
      a && (t.globalData.defs.appendChild(r), t.layerElement.setAttribute("filter", "url(" + bt() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    gi.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
    }, gi.prototype.getEffects = function(t) {
      var e, i = this.filters.length, s = [];
      for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
      return s;
    };
    function Fe() {
    }
    Fe.prototype = { initRendererElement: function() {
      this.layerElement = q("g");
    }, createContainerElements: function() {
      this.matteElement = q("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
      var e = null;
      if (this.data.td) {
        this.matteMasks = {};
        var i = q("g");
        i.setAttribute("id", this.layerId), i.appendChild(this.layerElement), e = i, this.globalData.defs.appendChild(i);
      } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
        var s = q("clipPath"), n = q("path");
        n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var r = vt();
        if (s.setAttribute("id", r), s.appendChild(n), this.globalData.defs.appendChild(s), this.checkMasks()) {
          var a = q("g");
          a.setAttribute("clip-path", "url(" + bt() + "#" + r + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else this.layerElement.setAttribute("clip-path", "url(" + bt() + "#" + r + ")");
      }
      this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new Kt(this.data, this, this.globalData), this.renderableEffectsManager = new gi(this), this.searchEffectTransforms();
    }, getMatte: function(e) {
      if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
        var i = this.layerId + "_" + e, s, n, r, a;
        if (e === 1 || e === 3) {
          var l = q("mask");
          l.setAttribute("id", i), l.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), r = q("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(r), this.globalData.defs.appendChild(l), !Qe.maskType && e === 1 && (l.setAttribute("mask-type", "luminance"), s = vt(), n = Ee.createFilter(s), this.globalData.defs.appendChild(n), n.appendChild(Ee.createAlphaToLuminanceFilter()), a = q("g"), a.appendChild(r), l.appendChild(a), a.setAttribute("filter", "url(" + bt() + "#" + s + ")"));
        } else if (e === 2) {
          var o = q("mask");
          o.setAttribute("id", i), o.setAttribute("mask-type", "alpha");
          var c = q("g");
          o.appendChild(c), s = vt(), n = Ee.createFilter(s);
          var d = q("feComponentTransfer");
          d.setAttribute("in", "SourceGraphic"), n.appendChild(d);
          var x = q("feFuncA");
          x.setAttribute("type", "table"), x.setAttribute("tableValues", "1.0 0.0"), d.appendChild(x), this.globalData.defs.appendChild(n);
          var f = q("rect");
          f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), c.setAttribute("filter", "url(" + bt() + "#" + s + ")"), c.appendChild(f), r = q("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), c.appendChild(r), Qe.maskType || (o.setAttribute("mask-type", "luminance"), n.appendChild(Ee.createAlphaToLuminanceFilter()), a = q("g"), c.appendChild(f), a.appendChild(this.layerElement), c.appendChild(a)), this.globalData.defs.appendChild(o);
        }
        this.matteMasks[e] = i;
      }
      return this.matteMasks[e];
    }, setMatte: function(e) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + bt() + "#" + e + ")");
    } };
    function Vt() {
    }
    Vt.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = false, this.checkParenting();
    }, setHierarchy: function(e) {
      this.hierarchy = e;
    }, setAsParent: function() {
      this._isParent = true;
    }, checkParenting: function() {
      this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
    } };
    function ve() {
    }
    (function() {
      var t = { initElement: function(i, s, n) {
        this.initFrame(), this.initBaseData(i, s, n), this.initTransform(i, s, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
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
      Y([Ht, Is(t)], ve);
    })();
    function re(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    Y([xt, It, Fe, Vt, Pt, ve], re), re.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = q("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, re.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function Mr(t, e) {
      this.elem = t, this.pos = e;
    }
    function yi() {
    }
    yi.prototype = { addShapeToModifiers: function(e) {
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
      for (var i = this.processedElements, s = 0, n = i.length; s < n; ) {
        if (i[s].elem === e) return i[s].pos;
        s += 1;
      }
      return 0;
    }, addProcessedElement: function(e, i) {
      for (var s = this.processedElements, n = s.length; n; ) if (n -= 1, s[n].elem === e) {
        s[n].pos = i;
        return;
      }
      s.push(new Mr(e, i));
    }, prepareFrame: function(e) {
      this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
    } };
    var bi = { 1: "butt", 2: "round", 3: "square" }, _i = { 1: "miter", 2: "round", 3: "bevel" };
    function Ci(t, e, i) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
      for (var s = 0, n = t.length; s < n; ) {
        if (t[s].mProps.dynamicProperties.length) {
          this._isAnimated = true;
          break;
        }
        s += 1;
      }
    }
    Ci.prototype.setAsAnimated = function() {
      this._isAnimated = true;
    };
    function _s(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = t.hd === true, this.pElem = q("path"), this.msElem = null;
    }
    _s.prototype.reset = function() {
      this.d = "", this._mdf = false;
    };
    function Le(t, e, i, s) {
      this.elem = t, this.frameId = -1, this.dataProps = Q(e.length), this.renderer = i, this.k = false, this.dashStr = "", this.dashArray = nt("float32", e.length ? e.length - 1 : 0), this.dashoffset = nt("float32", 1), this.initDynamicPropertyContainer(s);
      var n, r = e.length || 0, a;
      for (n = 0; n < r; n += 1) a = I.getProp(t, e[n].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[n] = { n: e[n].n, p: a };
      this.k || this.getValue(true), this._isAnimated = this.k;
    }
    Le.prototype.getValue = function(t) {
      if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, i = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < i; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, Y([ht], Le);
    function Cs(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = I.getProp(t, e.o, 0, 0.01, this), this.w = I.getProp(t, e.w, 0, null, this), this.d = new Le(t, e.d || {}, "svg", this), this.c = I.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
    }
    Y([ht], Cs);
    function Ss(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = I.getProp(t, e.o, 0, 0.01, this), this.c = I.getProp(t, e.c, 1, 255, this), this.style = i;
    }
    Y([ht], Ss);
    function ks(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i;
    }
    Y([ht], ks);
    function de(t, e, i) {
      this.data = e, this.c = nt("uint8c", e.p * 4);
      var s = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
      this.o = nt("float32", s), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = I.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
    }
    de.prototype.comparePoints = function(t, e) {
      for (var i = 0, s = this.o.length / 2, n; i < s; ) {
        if (n = Math.abs(t[i * 4] - t[e * 4 + i * 2]), n > 0.01) return false;
        i += 1;
      }
      return true;
    }, de.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4) return false;
      if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e; ) {
        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return false;
        t += 1;
      }
      else if (!this.comparePoints(this.data.k.k, this.data.p)) return false;
      return true;
    }, de.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
        var e, i = this.data.p * 4, s, n;
        for (e = 0; e < i; e += 1) s = e % 4 === 0 ? 100 : 255, n = Math.round(this.prop.v[e] * s), this.c[e] !== n && (this.c[e] = n, this._cmdf = !t);
        if (this.o.length) for (i = this.prop.v.length, e = this.data.p * 4; e < i; e += 1) s = e % 2 === 0 ? 100 : 1, n = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== n && (this.o[e - this.data.p * 4] = n, this._omdf = !t);
        this._mdf = !t;
      }
    }, Y([ht], de);
    function me(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
    }
    me.prototype.initGradientData = function(t, e, i) {
      this.o = I.getProp(t, e.o, 0, 0.01, this), this.s = I.getProp(t, e.s, 1, null, this), this.e = I.getProp(t, e.e, 1, null, this), this.h = I.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = I.getProp(t, e.a || { k: 0 }, 0, tt, this), this.g = new de(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
    }, me.prototype.setGradientData = function(t, e) {
      var i = vt(), s = q(e.t === 1 ? "linearGradient" : "radialGradient");
      s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
      var n = [], r, a, l;
      for (l = e.g.p * 4, a = 0; a < l; a += 4) r = q("stop"), s.appendChild(r), n.push(r);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + bt() + "#" + i + ")"), this.gf = s, this.cst = n;
    }, me.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var i, s, n, r = q("mask"), a = q("path");
        r.appendChild(a);
        var l = vt(), o = vt();
        r.setAttribute("id", o);
        var c = q(t.t === 1 ? "linearGradient" : "radialGradient");
        c.setAttribute("id", l), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var d = this.stops;
        for (s = t.g.p * 4; s < n; s += 2) i = q("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(i), d.push(i);
        a.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + bt() + "#" + l + ")"), t.ty === "gs" && (a.setAttribute("stroke-linecap", bi[t.lc || 2]), a.setAttribute("stroke-linejoin", _i[t.lj || 2]), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), this.of = c, this.ms = r, this.ost = d, this.maskId = o, e.msElem = a;
      }
    }, Y([ht], me);
    function xs(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = I.getProp(t, e.w, 0, null, this), this.d = new Le(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
    }
    Y([me, ht], xs);
    function Er() {
      this.it = [], this.prevViewData = [], this.gr = q("g");
    }
    function Fr(t, e, i) {
      this.transform = { mProps: t, op: e, container: i }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var Ps = function(e, i, s, n) {
      if (i === 0) return "";
      var r = e.o, a = e.i, l = e.v, o, c = " M" + n.applyToPointStringified(l[0][0], l[0][1]);
      for (o = 1; o < i; o += 1) c += " C" + n.applyToPointStringified(r[o - 1][0], r[o - 1][1]) + " " + n.applyToPointStringified(a[o][0], a[o][1]) + " " + n.applyToPointStringified(l[o][0], l[o][1]);
      return s && i && (c += " C" + n.applyToPointStringified(r[o - 1][0], r[o - 1][1]) + " " + n.applyToPointStringified(a[0][0], a[0][1]) + " " + n.applyToPointStringified(l[0][0], l[0][1]), c += "z"), c;
    }, Lr = function() {
      var t = new et(), e = new et(), i = { createRenderFunction: s };
      function s(x) {
        switch (x.ty) {
          case "fl":
            return l;
          case "gf":
            return c;
          case "gs":
            return o;
          case "st":
            return d;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return a;
          case "tr":
            return n;
          case "no":
            return r;
          default:
            return null;
        }
      }
      function n(x, f, C) {
        (C || f.transform.op._mdf) && f.transform.container.setAttribute("opacity", f.transform.op.v), (C || f.transform.mProps._mdf) && f.transform.container.setAttribute("transform", f.transform.mProps.v.to2dCSS());
      }
      function r() {
      }
      function a(x, f, C) {
        var S, y, A, b, g, u, v = f.styles.length, _ = f.lvl, P, T, M, L;
        for (u = 0; u < v; u += 1) {
          if (b = f.sh._mdf || C, f.styles[u].lvl < _) {
            for (T = e.reset(), M = _ - f.styles[u].lvl, L = f.transformers.length - 1; !b && M > 0; ) b = f.transformers[L].mProps._mdf || b, M -= 1, L -= 1;
            if (b) for (M = _ - f.styles[u].lvl, L = f.transformers.length - 1; M > 0; ) T.multiply(f.transformers[L].mProps.v), M -= 1, L -= 1;
          } else T = t;
          if (P = f.sh.paths, y = P._length, b) {
            for (A = "", S = 0; S < y; S += 1) g = P.shapes[S], g && g._length && (A += Ps(g, g._length, g.c, T));
            f.caches[u] = A;
          } else A = f.caches[u];
          f.styles[u].d += x.hd === true ? "" : A, f.styles[u]._mdf = b || f.styles[u]._mdf;
        }
      }
      function l(x, f, C) {
        var S = f.style;
        (f.c._mdf || C) && S.pElem.setAttribute("fill", "rgb(" + pt(f.c.v[0]) + "," + pt(f.c.v[1]) + "," + pt(f.c.v[2]) + ")"), (f.o._mdf || C) && S.pElem.setAttribute("fill-opacity", f.o.v);
      }
      function o(x, f, C) {
        c(x, f, C), d(x, f, C);
      }
      function c(x, f, C) {
        var S = f.gf, y = f.g._hasOpacity, A = f.s.v, b = f.e.v;
        if (f.o._mdf || C) {
          var g = x.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          f.style.pElem.setAttribute(g, f.o.v);
        }
        if (f.s._mdf || C) {
          var u = x.t === 1 ? "x1" : "cx", v = u === "x1" ? "y1" : "cy";
          S.setAttribute(u, A[0]), S.setAttribute(v, A[1]), y && !f.g._collapsable && (f.of.setAttribute(u, A[0]), f.of.setAttribute(v, A[1]));
        }
        var _, P, T, M;
        if (f.g._cmdf || C) {
          _ = f.cst;
          var L = f.g.c;
          for (T = _.length, P = 0; P < T; P += 1) M = _[P], M.setAttribute("offset", L[P * 4] + "%"), M.setAttribute("stop-color", "rgb(" + L[P * 4 + 1] + "," + L[P * 4 + 2] + "," + L[P * 4 + 3] + ")");
        }
        if (y && (f.g._omdf || C)) {
          var W = f.g.o;
          for (f.g._collapsable ? _ = f.cst : _ = f.ost, T = _.length, P = 0; P < T; P += 1) M = _[P], f.g._collapsable || M.setAttribute("offset", W[P * 2] + "%"), M.setAttribute("stop-opacity", W[P * 2 + 1]);
        }
        if (x.t === 1) (f.e._mdf || C) && (S.setAttribute("x2", b[0]), S.setAttribute("y2", b[1]), y && !f.g._collapsable && (f.of.setAttribute("x2", b[0]), f.of.setAttribute("y2", b[1])));
        else {
          var B;
          if ((f.s._mdf || f.e._mdf || C) && (B = Math.sqrt(Math.pow(A[0] - b[0], 2) + Math.pow(A[1] - b[1], 2)), S.setAttribute("r", B), y && !f.g._collapsable && f.of.setAttribute("r", B)), f.e._mdf || f.h._mdf || f.a._mdf || C) {
            B || (B = Math.sqrt(Math.pow(A[0] - b[0], 2) + Math.pow(A[1] - b[1], 2)));
            var V = Math.atan2(b[1] - A[1], b[0] - A[0]), G = f.h.v;
            G >= 1 ? G = 0.99 : G <= -1 && (G = -0.99);
            var O = B * G, F = Math.cos(V + f.a.v) * O + A[0], m2 = Math.sin(V + f.a.v) * O + A[1];
            S.setAttribute("fx", F), S.setAttribute("fy", m2), y && !f.g._collapsable && (f.of.setAttribute("fx", F), f.of.setAttribute("fy", m2));
          }
        }
      }
      function d(x, f, C) {
        var S = f.style, y = f.d;
        y && (y._mdf || C) && y.dashStr && (S.pElem.setAttribute("stroke-dasharray", y.dashStr), S.pElem.setAttribute("stroke-dashoffset", y.dashoffset[0])), f.c && (f.c._mdf || C) && S.pElem.setAttribute("stroke", "rgb(" + pt(f.c.v[0]) + "," + pt(f.c.v[1]) + "," + pt(f.c.v[2]) + ")"), (f.o._mdf || C) && S.pElem.setAttribute("stroke-opacity", f.o.v), (f.w._mdf || C) && (S.pElem.setAttribute("stroke-width", f.w.v), S.msElem && S.msElem.setAttribute("stroke-width", f.w.v));
      }
      return i;
    }();
    function $(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
    }
    Y([xt, It, Fe, yi, Vt, Pt, ve], $), $.prototype.initSecondaryElement = function() {
    }, $.prototype.identityMatrix = new et(), $.prototype.buildExpressionInterface = function() {
    }, $.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
    }, $.prototype.filterUniqueShapes = function() {
      var t, e = this.shapes.length, i, s, n = this.stylesList.length, r, a = [], l = false;
      for (s = 0; s < n; s += 1) {
        for (r = this.stylesList[s], l = false, a.length = 0, t = 0; t < e; t += 1) i = this.shapes[t], i.styles.indexOf(r) !== -1 && (a.push(i), l = i._isAnimated || l);
        a.length > 1 && l && this.setShapesAsAnimated(a);
      }
    }, $.prototype.setShapesAsAnimated = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].setAsAnimated();
    }, $.prototype.createStyleElement = function(t, e) {
      var i, s = new _s(t, e), n = s.pElem;
      if (t.ty === "st") i = new Cs(this, t, s);
      else if (t.ty === "fl") i = new Ss(this, t, s);
      else if (t.ty === "gf" || t.ty === "gs") {
        var r = t.ty === "gf" ? me : xs;
        i = new r(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), n.setAttribute("mask", "url(" + bt() + "#" + i.maskId + ")"));
      } else t.ty === "no" && (i = new ks(this, t, s));
      return (t.ty === "st" || t.ty === "gs") && (n.setAttribute("stroke-linecap", bi[t.lc || 2]), n.setAttribute("stroke-linejoin", _i[t.lj || 2]), n.setAttribute("fill-opacity", "0"), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = Ue(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i;
    }, $.prototype.createGroupElement = function(t) {
      var e = new Er();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = Ue(t.bm)), e;
    }, $.prototype.createTransformElement = function(t, e) {
      var i = He.getTransformProperty(this, t, this), s = new Fr(i, i.o, e);
      return this.addToAnimatedContents(t, s), s;
    }, $.prototype.createShapeElement = function(t, e, i) {
      var s = 4;
      t.ty === "rc" ? s = 5 : t.ty === "el" ? s = 6 : t.ty === "sr" && (s = 7);
      var n = fe.getShapeProp(this, t, s, this), r = new Ci(e, i, n);
      return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r;
    }, $.prototype.addToAnimatedContents = function(t, e) {
      for (var i = 0, s = this.animatedContents.length; i < s; ) {
        if (this.animatedContents[i].element === e) return;
        i += 1;
      }
      this.animatedContents.push({ fn: Lr.createRenderFunction(t), element: e, data: t });
    }, $.prototype.setElementStyles = function(t) {
      var e = t.styles, i, s = this.stylesList.length;
      for (i = 0; i < s; i += 1) this.stylesList[i].closed || e.push(this.stylesList[i]);
    }, $.prototype.reloadShapes = function() {
      this._isFirstFrame = true;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, $.prototype.searchShapes = function(t, e, i, s, n, r, a) {
      var l = [].concat(r), o, c = t.length - 1, d, x, f = [], C = [], S, y, A;
      for (o = c; o >= 0; o -= 1) {
        if (A = this.searchProcessedElement(t[o]), A ? e[o] = i[A - 1] : t[o]._render = a, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") A ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], n), t[o]._render && e[o].style.pElem.parentNode !== s && s.appendChild(e[o].style.pElem), f.push(e[o].style);
        else if (t[o].ty === "gr") {
          if (!A) e[o] = this.createGroupElement(t[o]);
          else for (x = e[o].it.length, d = 0; d < x; d += 1) e[o].prevViewData[d] = e[o].it[d];
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, l, a), t[o]._render && e[o].gr.parentNode !== s && s.appendChild(e[o].gr);
        } else t[o].ty === "tr" ? (A || (e[o] = this.createTransformElement(t[o], s)), S = e[o].transform, l.push(S)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (A || (e[o] = this.createShapeElement(t[o], l, n)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (A ? (y = e[o], y.closed = false) : (y = Ft.getModifier(t[o].ty), y.init(this, t[o]), e[o] = y, this.shapeModifiers.push(y)), C.push(y)) : t[o].ty === "rp" && (A ? (y = e[o], y.closed = true) : (y = Ft.getModifier(t[o].ty), e[o] = y, y.init(this, t, o, e), this.shapeModifiers.push(y), a = false), C.push(y));
        this.addProcessedElement(t[o], o + 1);
      }
      for (c = f.length, o = 0; o < c; o += 1) f[o].closed = true;
      for (c = C.length, o = 0; o < c; o += 1) C[o].closed = true;
    }, $.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, $.prototype.renderShape = function() {
      var t, e = this.animatedContents.length, i;
      for (t = 0; t < e; t += 1) i = this.animatedContents[t], (this._isFirstFrame || i.element._isAnimated) && i.data !== true && i.fn(i.data, i.element, this._isFirstFrame);
    }, $.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    };
    function Si(t, e, i, s, n, r) {
      this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = n, this.p = r, this._mdf = { o: true, sw: !!e, sc: !!i, fc: !!s, m: true, p: true };
    }
    Si.prototype.update = function(t, e, i, s, n, r) {
      this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false, this._mdf.p = false;
      var a = false;
      return this.o !== t && (this.o = t, this._mdf.o = true, a = true), this.sw !== e && (this.sw = e, this._mdf.sw = true, a = true), this.sc !== i && (this.sc = i, this._mdf.sc = true, a = true), this.fc !== s && (this.fc = s, this._mdf.fc = true, a = true), this.m !== n && (this.m = n, this._mdf.m = true, a = true), r.length && (this.p[0] !== r[0] || this.p[1] !== r[1] || this.p[4] !== r[4] || this.p[5] !== r[5] || this.p[12] !== r[12] || this.p[13] !== r[13]) && (this.p = r, this._mdf.p = true, a = true), a;
    };
    function ct(t, e) {
      this._frameId = ai, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: false, strokeColorAnim: false, strokeWidthAnim: false, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: false }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    ct.prototype.defaultBoxWidth = [0, 0], ct.prototype.copyData = function(t, e) {
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }, ct.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
    }, ct.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, ct.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, ct.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, ct.prototype.getValue = function(t) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, i = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = true, this._mdf = false;
        var s, n = this.effectsSequence.length, r = t || this.data.d.k[this.keysIndex].s;
        for (s = 0; s < n; s += 1) i !== this.keysIndex ? r = this.effectsSequence[s](r, r.t) : r = this.effectsSequence[s](this.currentData, r.t);
        e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = false, this.frameId = this.elem.globalData.frameId;
      }
    }, ct.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e); ) i += 1;
      return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
    }, ct.prototype.buildFinalText = function(t) {
      for (var e = [], i = 0, s = t.length, n, r, a = false, l = false, o = ""; i < s; ) a = l, l = false, n = t.charCodeAt(i), o = t.charAt(i), se.isCombinedCharacter(n) ? a = true : n >= 55296 && n <= 56319 ? se.isRegionalFlag(t, i) ? o = t.substr(i, 14) : (r = t.charCodeAt(i + 1), r >= 56320 && r <= 57343 && (se.isModifier(n, r) ? (o = t.substr(i, 2), a = true) : se.isFlagEmoji(t.substr(i, 4)) ? o = t.substr(i, 4) : o = t.substr(i, 2))) : n > 56319 ? (r = t.charCodeAt(i + 1), se.isVariationSelector(n) && (a = true)) : se.isZeroWidthJoiner(n) && (a = true, l = true), a ? (e[e.length - 1] += o, a = false) : e.push(o), i += o.length;
      return e;
    }, ct.prototype.completeTextData = function(t) {
      t.__complete = true;
      var e = this.elem.globalData.fontManager, i = this.data, s = [], n, r, a, l = 0, o, c = i.m.g, d = 0, x = 0, f = 0, C = [], S = 0, y = 0, A, b, g = e.getFontByName(t.f), u, v = 0, _ = ds(g);
      t.fWeight = _.weight, t.fStyle = _.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
      var P = t.tr / 1e3 * t.finalSize, T;
      if (t.sz) for (var M = true, L = t.sz[0], W = t.sz[1], B, V; M; ) {
        V = this.buildFinalText(t.t), B = 0, S = 0, r = V.length, P = t.tr / 1e3 * t.finalSize;
        var G = -1;
        for (n = 0; n < r; n += 1) T = V[n].charCodeAt(0), a = false, V[n] === " " ? G = n : (T === 13 || T === 3) && (S = 0, a = true, B += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (u = e.getCharData(V[n], g.fStyle, g.fFamily), v = a ? 0 : u.w * t.finalSize / 100) : v = e.measureText(V[n], t.f, t.finalSize), S + v > L && V[n] !== " " ? (G === -1 ? r += 1 : n = G, B += t.finalLineHeight || t.finalSize * 1.2, V.splice(n, G === n ? 1 : 0, "\r"), G = -1, S = 0) : (S += v, S += P);
        B += g.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && W < B ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = V, r = t.finalText.length, M = false);
      }
      S = -P, v = 0;
      var O = 0, F;
      for (n = 0; n < r; n += 1) if (a = false, F = t.finalText[n], T = F.charCodeAt(0), T === 13 || T === 3 ? (O = 0, C.push(S), y = S > y ? S : y, S = -2 * P, o = "", a = true, f += 1) : o = F, e.chars ? (u = e.getCharData(F, g.fStyle, e.getFontByName(t.f).fFamily), v = a ? 0 : u.w * t.finalSize / 100) : v = e.measureText(o, t.f, t.finalSize), F === " " ? O += v + P : (S += v + P + O, O = 0), s.push({ l: v, an: v, add: d, n: a, anIndexes: [], val: o, line: f, animatorJustifyOffset: 0 }), c == 2) {
        if (d += v, o === "" || o === " " || n === r - 1) {
          for ((o === "" || o === " ") && (d -= v); x <= n; ) s[x].an = d, s[x].ind = l, s[x].extra = v, x += 1;
          l += 1, d = 0;
        }
      } else if (c == 3) {
        if (d += v, o === "" || n === r - 1) {
          for (o === "" && (d -= v); x <= n; ) s[x].an = d, s[x].ind = l, s[x].extra = v, x += 1;
          d = 0, l += 1;
        }
      } else s[l].ind = l, s[l].extra = 0, l += 1;
      if (t.l = s, y = S > y ? S : y, C.push(S), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = y, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0;
      }
      t.lineWidths = C;
      var m2 = i.a, k, h;
      b = m2.length;
      var p, E, w = [];
      for (A = 0; A < b; A += 1) {
        for (k = m2[A], k.a.sc && (t.strokeColorAnim = true), k.a.sw && (t.strokeWidthAnim = true), (k.a.fc || k.a.fh || k.a.fs || k.a.fb) && (t.fillColorAnim = true), E = 0, p = k.s.b, n = 0; n < r; n += 1) h = s[n], h.anIndexes[A] = E, (p == 1 && h.val !== "" || p == 2 && h.val !== "" && h.val !== " " || p == 3 && (h.n || h.val == " " || n == r - 1) || p == 4 && (h.n || n == r - 1)) && (k.s.rn === 1 && w.push(E), E += 1);
        i.a[A].s.totalChars = E;
        var R = -1, N;
        if (k.s.rn === 1) for (n = 0; n < r; n += 1) h = s[n], R != h.anIndexes[A] && (R = h.anIndexes[A], N = w.splice(Math.floor(Math.random() * w.length), 1)[0]), h.anIndexes[A] = N;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = g.ascent * t.finalSize / 100;
    }, ct.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var i = this.copyData({}, this.data.d.k[e].s);
      i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this);
    }, ct.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
    }, ct.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, ct.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var Ir = function() {
      var t = Math.max, e = Math.min, i = Math.floor;
      function s(r, a) {
        this._currentTextLength = -1, this.k = false, this.data = a, this.elem = r, this.comp = r.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(r), this.s = I.getProp(r, a.s || { k: 0 }, 0, 0, this), "e" in a ? this.e = I.getProp(r, a.e, 0, 0, this) : this.e = { v: 100 }, this.o = I.getProp(r, a.o || { k: 0 }, 0, 0, this), this.xe = I.getProp(r, a.xe || { k: 0 }, 0, 0, this), this.ne = I.getProp(r, a.ne || { k: 0 }, 0, 0, this), this.sm = I.getProp(r, a.sm || { k: 100 }, 0, 0, this), this.a = I.getProp(r, a.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      s.prototype = { getMult: function(a) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var l = 0, o = 0, c = 1, d = 1;
        this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? c = 1 - this.xe.v / 100 : d = 1 + this.xe.v / 100;
        var x = ke.getBezierEasing(l, o, c, d).get, f = 0, C = this.finalS, S = this.finalE, y = this.data.sh;
        if (y === 2) S === C ? f = a >= S ? 1 : 0 : f = t(0, e(0.5 / (S - C) + (a - C) / (S - C), 1)), f = x(f);
        else if (y === 3) S === C ? f = a >= S ? 0 : 1 : f = 1 - t(0, e(0.5 / (S - C) + (a - C) / (S - C), 1)), f = x(f);
        else if (y === 4) S === C ? f = 0 : (f = t(0, e(0.5 / (S - C) + (a - C) / (S - C), 1)), f < 0.5 ? f *= 2 : f = 1 - 2 * (f - 0.5)), f = x(f);
        else if (y === 5) {
          if (S === C) f = 0;
          else {
            var A = S - C;
            a = e(t(0, a + 0.5 - C), S - C);
            var b = -A / 2 + a, g = A / 2;
            f = Math.sqrt(1 - b * b / (g * g));
          }
          f = x(f);
        } else y === 6 ? (S === C ? f = 0 : (a = e(t(0, a + 0.5 - C), S - C), f = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (S - C))) / 2), f = x(f)) : (a >= i(C) && (a - C < 0 ? f = t(0, e(e(S, 1) - (C - a), 1)) : f = t(0, e(S - a, 1))), f = x(f));
        if (this.sm.v !== 100) {
          var u = this.sm.v * 0.01;
          u === 0 && (u = 1e-8);
          var v = 0.5 - u * 0.5;
          f < v ? f = 0 : (f = (f - v) / u, f > 1 && (f = 1));
        }
        return f * this.a.v;
      }, getValue: function(a) {
        this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
        var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars, o = this.o.v / l, c = this.s.v / l + o, d = this.e.v / l + o;
        if (c > d) {
          var x = c;
          c = d, d = x;
        }
        this.finalS = c, this.finalE = d;
      } }, Y([ht], s);
      function n(r, a, l) {
        return new s(r, a);
      }
      return { getTextSelectorProp: n };
    }();
    function Vr(t, e, i) {
      var s = { propType: false }, n = I.getProp, r = e.a;
      this.a = { r: r.r ? n(t, r.r, 0, tt, i) : s, rx: r.rx ? n(t, r.rx, 0, tt, i) : s, ry: r.ry ? n(t, r.ry, 0, tt, i) : s, sk: r.sk ? n(t, r.sk, 0, tt, i) : s, sa: r.sa ? n(t, r.sa, 0, tt, i) : s, s: r.s ? n(t, r.s, 1, 0.01, i) : s, a: r.a ? n(t, r.a, 1, 0, i) : s, o: r.o ? n(t, r.o, 0, 0.01, i) : s, p: r.p ? n(t, r.p, 1, 0, i) : s, sw: r.sw ? n(t, r.sw, 0, 0, i) : s, sc: r.sc ? n(t, r.sc, 1, 0, i) : s, fc: r.fc ? n(t, r.fc, 1, 0, i) : s, fh: r.fh ? n(t, r.fh, 0, 0, i) : s, fs: r.fs ? n(t, r.fs, 0, 0.01, i) : s, fb: r.fb ? n(t, r.fb, 0, 0.01, i) : s, t: r.t ? n(t, r.t, 0, 0, i) : s }, this.s = Ir.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
    }
    function ne(t, e, i) {
      this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = Q(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(i);
    }
    ne.prototype.searchProperties = function() {
      var t, e = this._textData.a.length, i, s = I.getProp;
      for (t = 0; t < e; t += 1) i = this._textData.a[t], this._animatorsData[t] = new Vr(this._elem, i, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { a: s(this._elem, this._textData.p.a, 0, 0, this), f: s(this._elem, this._textData.p.f, 0, 0, this), l: s(this._elem, this._textData.p.l, 0, 0, this), r: s(this._elem, this._textData.p.r, 0, 0, this), p: s(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this);
    }, ne.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = false;
        var i = this._moreOptions.alignment.v, s = this._animatorsData, n = this._textData, r = this.mHelper, a = this._renderType, l = this.renderedLetters.length, o, c, d, x, f = t.l, C, S, y, A, b, g, u, v, _, P, T, M, L, W, B;
        if (this._hasMaskedPath) {
          if (B = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var V = B.v;
            this._pathData.r.v && (V = V.reverse()), C = { tLength: 0, segments: [] }, x = V._length - 1;
            var G;
            for (M = 0, d = 0; d < x; d += 1) G = Et.buildBezierData(V.v[d], V.v[d + 1], [V.o[d][0] - V.v[d][0], V.o[d][1] - V.v[d][1]], [V.i[d + 1][0] - V.v[d + 1][0], V.i[d + 1][1] - V.v[d + 1][1]]), C.tLength += G.segmentLength, C.segments.push(G), M += G.segmentLength;
            d = x, B.v.c && (G = Et.buildBezierData(V.v[d], V.v[0], [V.o[d][0] - V.v[d][0], V.o[d][1] - V.v[d][1]], [V.i[0][0] - V.v[0][0], V.i[0][1] - V.v[0][1]]), C.tLength += G.segmentLength, C.segments.push(G), M += G.segmentLength), this._pathData.pi = C;
          }
          if (C = this._pathData.pi, S = this._pathData.f.v, u = 0, g = 1, A = 0, b = true, P = C.segments, S < 0 && B.v.c) for (C.tLength < Math.abs(S) && (S = -Math.abs(S) % C.tLength), u = P.length - 1, _ = P[u].points, g = _.length - 1; S < 0; ) S += _[g].partialLength, g -= 1, g < 0 && (u -= 1, _ = P[u].points, g = _.length - 1);
          _ = P[u].points, v = _[g - 1], y = _[g], T = y.partialLength;
        }
        x = f.length, o = 0, c = 0;
        var O = t.finalSize * 1.2 * 0.714, F = true, m2, k, h, p, E;
        p = s.length;
        var w, R = -1, N, j, X, H = S, rt = u, mt = g, Dt = -1, gt, ft, St, Z, D, qt, Ut, Wt, Bt = "", jt = this.defaultPropsArray, Gt;
        if (t.j === 2 || t.j === 1) {
          var yt = 0, Qt = 0, $t = t.j === 2 ? -0.5 : -1, At = 0, te = true;
          for (d = 0; d < x; d += 1) if (f[d].n) {
            for (yt && (yt += Qt); At < d; ) f[At].animatorJustifyOffset = yt, At += 1;
            yt = 0, te = true;
          } else {
            for (h = 0; h < p; h += 1) m2 = s[h].a, m2.t.propType && (te && t.j === 2 && (Qt += m2.t.v * $t), k = s[h].s, w = k.getMult(f[d].anIndexes[h], n.a[h].s.totalChars), w.length ? yt += m2.t.v * w[0] * $t : yt += m2.t.v * w * $t);
            te = false;
          }
          for (yt && (yt += Qt); At < d; ) f[At].animatorJustifyOffset = yt, At += 1;
        }
        for (d = 0; d < x; d += 1) {
          if (r.reset(), gt = 1, f[d].n) o = 0, c += t.yOffset, c += F ? 1 : 0, S = H, F = false, this._hasMaskedPath && (u = rt, g = mt, _ = P[u].points, v = _[g - 1], y = _[g], T = y.partialLength, A = 0), Bt = "", Wt = "", qt = "", Gt = "", jt = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (Dt !== f[d].line) {
                switch (t.j) {
                  case 1:
                    S += M - t.lineWidths[f[d].line];
                    break;
                  case 2:
                    S += (M - t.lineWidths[f[d].line]) / 2;
                    break;
                }
                Dt = f[d].line;
              }
              R !== f[d].ind && (f[R] && (S += f[R].extra), S += f[d].an / 2, R = f[d].ind), S += i[0] * f[d].an * 5e-3;
              var Tt = 0;
              for (h = 0; h < p; h += 1) m2 = s[h].a, m2.p.propType && (k = s[h].s, w = k.getMult(f[d].anIndexes[h], n.a[h].s.totalChars), w.length ? Tt += m2.p.v[0] * w[0] : Tt += m2.p.v[0] * w), m2.a.propType && (k = s[h].s, w = k.getMult(f[d].anIndexes[h], n.a[h].s.totalChars), w.length ? Tt += m2.a.v[0] * w[0] : Tt += m2.a.v[0] * w);
              for (b = true, this._pathData.a.v && (S = f[0].an * 0.5 + (M - this._pathData.f.v - f[0].an * 0.5 - f[f.length - 1].an * 0.5) * R / (x - 1), S += this._pathData.f.v); b; ) A + T >= S + Tt || !_ ? (L = (S + Tt - A) / y.partialLength, j = v.point[0] + (y.point[0] - v.point[0]) * L, X = v.point[1] + (y.point[1] - v.point[1]) * L, r.translate(-i[0] * f[d].an * 5e-3, -(i[1] * O) * 0.01), b = false) : _ && (A += y.partialLength, g += 1, g >= _.length && (g = 0, u += 1, P[u] ? _ = P[u].points : B.v.c ? (g = 0, u = 0, _ = P[u].points) : (A -= y.partialLength, _ = null)), _ && (v = y, y = _[g], T = y.partialLength));
              N = f[d].an / 2 - f[d].add, r.translate(-N, 0, 0);
            } else N = f[d].an / 2 - f[d].add, r.translate(-N, 0, 0), r.translate(-i[0] * f[d].an * 5e-3, -i[1] * O * 0.01, 0);
            for (h = 0; h < p; h += 1) m2 = s[h].a, m2.t.propType && (k = s[h].s, w = k.getMult(f[d].anIndexes[h], n.a[h].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? w.length ? S += m2.t.v * w[0] : S += m2.t.v * w : w.length ? o += m2.t.v * w[0] : o += m2.t.v * w));
            for (t.strokeWidthAnim && (St = t.sw || 0), t.strokeColorAnim && (t.sc ? ft = [t.sc[0], t.sc[1], t.sc[2]] : ft = [0, 0, 0]), t.fillColorAnim && t.fc && (Z = [t.fc[0], t.fc[1], t.fc[2]]), h = 0; h < p; h += 1) m2 = s[h].a, m2.a.propType && (k = s[h].s, w = k.getMult(f[d].anIndexes[h], n.a[h].s.totalChars), w.length ? r.translate(-m2.a.v[0] * w[0], -m2.a.v[1] * w[1], m2.a.v[2] * w[2]) : r.translate(-m2.a.v[0] * w, -m2.a.v[1] * w, m2.a.v[2] * w));
            for (h = 0; h < p; h += 1) m2 = s[h].a, m2.s.propType && (k = s[h].s, w = k.getMult(f[d].anIndexes[h], n.a[h].s.totalChars), w.length ? r.scale(1 + (m2.s.v[0] - 1) * w[0], 1 + (m2.s.v[1] - 1) * w[1], 1) : r.scale(1 + (m2.s.v[0] - 1) * w, 1 + (m2.s.v[1] - 1) * w, 1));
            for (h = 0; h < p; h += 1) {
              if (m2 = s[h].a, k = s[h].s, w = k.getMult(f[d].anIndexes[h], n.a[h].s.totalChars), m2.sk.propType && (w.length ? r.skewFromAxis(-m2.sk.v * w[0], m2.sa.v * w[1]) : r.skewFromAxis(-m2.sk.v * w, m2.sa.v * w)), m2.r.propType && (w.length ? r.rotateZ(-m2.r.v * w[2]) : r.rotateZ(-m2.r.v * w)), m2.ry.propType && (w.length ? r.rotateY(m2.ry.v * w[1]) : r.rotateY(m2.ry.v * w)), m2.rx.propType && (w.length ? r.rotateX(m2.rx.v * w[0]) : r.rotateX(m2.rx.v * w)), m2.o.propType && (w.length ? gt += (m2.o.v * w[0] - gt) * w[0] : gt += (m2.o.v * w - gt) * w), t.strokeWidthAnim && m2.sw.propType && (w.length ? St += m2.sw.v * w[0] : St += m2.sw.v * w), t.strokeColorAnim && m2.sc.propType) for (D = 0; D < 3; D += 1) w.length ? ft[D] += (m2.sc.v[D] - ft[D]) * w[0] : ft[D] += (m2.sc.v[D] - ft[D]) * w;
              if (t.fillColorAnim && t.fc) {
                if (m2.fc.propType) for (D = 0; D < 3; D += 1) w.length ? Z[D] += (m2.fc.v[D] - Z[D]) * w[0] : Z[D] += (m2.fc.v[D] - Z[D]) * w;
                m2.fh.propType && (w.length ? Z = Wi(Z, m2.fh.v * w[0]) : Z = Wi(Z, m2.fh.v * w)), m2.fs.propType && (w.length ? Z = Ni(Z, m2.fs.v * w[0]) : Z = Ni(Z, m2.fs.v * w)), m2.fb.propType && (w.length ? Z = qi(Z, m2.fb.v * w[0]) : Z = qi(Z, m2.fb.v * w));
              }
            }
            for (h = 0; h < p; h += 1) m2 = s[h].a, m2.p.propType && (k = s[h].s, w = k.getMult(f[d].anIndexes[h], n.a[h].s.totalChars), this._hasMaskedPath ? w.length ? r.translate(0, m2.p.v[1] * w[0], -m2.p.v[2] * w[1]) : r.translate(0, m2.p.v[1] * w, -m2.p.v[2] * w) : w.length ? r.translate(m2.p.v[0] * w[0], m2.p.v[1] * w[1], -m2.p.v[2] * w[2]) : r.translate(m2.p.v[0] * w, m2.p.v[1] * w, -m2.p.v[2] * w));
            if (t.strokeWidthAnim && (qt = St < 0 ? 0 : St), t.strokeColorAnim && (Ut = "rgb(" + Math.round(ft[0] * 255) + "," + Math.round(ft[1] * 255) + "," + Math.round(ft[2] * 255) + ")"), t.fillColorAnim && t.fc && (Wt = "rgb(" + Math.round(Z[0] * 255) + "," + Math.round(Z[1] * 255) + "," + Math.round(Z[2] * 255) + ")"), this._hasMaskedPath) {
              if (r.translate(0, -t.ls), r.translate(0, i[1] * O * 0.01 + c, 0), this._pathData.p.v) {
                W = (y.point[1] - v.point[1]) / (y.point[0] - v.point[0]);
                var oe = Math.atan(W) * 180 / Math.PI;
                y.point[0] < v.point[0] && (oe += 180), r.rotate(-oe * Math.PI / 180);
              }
              r.translate(j, X, 0), S -= i[0] * f[d].an * 5e-3, f[d + 1] && R !== f[d + 1].ind && (S += f[d].an / 2, S += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (r.translate(o, c, 0), t.ps && r.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  r.translate(f[d].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[d].line]), 0, 0);
                  break;
                case 2:
                  r.translate(f[d].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[d].line]) / 2, 0, 0);
                  break;
              }
              r.translate(0, -t.ls), r.translate(N, 0, 0), r.translate(i[0] * f[d].an * 5e-3, i[1] * O * 0.01, 0), o += f[d].l + t.tr * 1e-3 * t.finalSize;
            }
            a === "html" ? Bt = r.toCSS() : a === "svg" ? Bt = r.to2dCSS() : jt = [r.props[0], r.props[1], r.props[2], r.props[3], r.props[4], r.props[5], r.props[6], r.props[7], r.props[8], r.props[9], r.props[10], r.props[11], r.props[12], r.props[13], r.props[14], r.props[15]], Gt = gt;
          }
          l <= d ? (E = new Si(Gt, qt, Ut, Wt, Bt, jt), this.renderedLetters.push(E), l += 1, this.lettersChangedFlag = true) : (E = this.renderedLetters[d], this.lettersChangedFlag = E.update(Gt, qt, Ut, Wt, Bt, jt) || this.lettersChangedFlag);
        }
      }
    }, ne.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, ne.prototype.mHelper = new et(), ne.prototype.defaultPropsArray = [], Y([ht], ne);
    function Ct() {
    }
    Ct.prototype.initElement = function(t, e, i) {
      this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new ct(this, t.t, this.dynamicProperties), this.textAnimator = new ne(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, Ct.prototype.prepareFrame = function(t) {
      this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, Ct.prototype.createPathShape = function(t, e) {
      var i, s = e.length, n, r = "";
      for (i = 0; i < s; i += 1) e[i].ty === "sh" && (n = e[i].ks.k, r += Ps(n, n.i.length, true, t));
      return r;
    }, Ct.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, Ct.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, Ct.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, Ct.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, n) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
          break;
      }
      e.translate(s, n, 0);
    }, Ct.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
    }, Ct.prototype.emptyProp = new Si(), Ct.prototype.destroy = function() {
    }, Ct.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
    };
    var Rr = { shapes: [] };
    function Nt(t, e, i) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
    }
    Y([xt, It, Fe, Vt, Pt, ve, Ct], Nt), Nt.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = q("text"));
    }, Nt.prototype.buildTextContents = function(t) {
      for (var e = 0, i = t.length, s = [], n = ""; e < i; ) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(n), n = "") : n += t[e], e += 1;
      return s.push(n), s;
    }, Nt.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var i = t.shapes[0];
        if (i.it) {
          var s = i.it[i.it.length - 1];
          s.s && (s.s.k[0] = e, s.s.k[1] = e);
        }
      }
      return t;
    }, Nt.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var t, e, i = this.textProperty.currentData;
      this.renderedLetters = Q(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
      var s = this.globalData.fontManager.getFontByName(i.f);
      if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
      else {
        this.layerElement.setAttribute("font-family", s.fFamily);
        var n = i.fWeight, r = i.fStyle;
        this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", n);
      }
      this.layerElement.setAttribute("aria-label", i.t);
      var a = i.l || [], l = !!this.globalData.fontManager.chars;
      e = a.length;
      var o, c = this.mHelper, d = "", x = this.data.singleShape, f = 0, C = 0, S = true, y = i.tr * 1e-3 * i.finalSize;
      if (x && !l && !i.sz) {
        var A = this.textContainer, b = "start";
        switch (i.j) {
          case 1:
            b = "end";
            break;
          case 2:
            b = "middle";
            break;
          default:
            b = "start";
            break;
        }
        A.setAttribute("text-anchor", b), A.setAttribute("letter-spacing", y);
        var g = this.buildTextContents(i.finalText);
        for (e = g.length, C = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1) o = this.textSpans[t].span || q("tspan"), o.textContent = g[t], o.setAttribute("x", 0), o.setAttribute("y", C), o.style.display = "inherit", A.appendChild(o), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = o, C += i.finalLineHeight;
        this.layerElement.appendChild(A);
      } else {
        var u = this.textSpans.length, v;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !l || !x || t === 0) {
            if (o = u > t ? this.textSpans[t].span : q(l ? "g" : "text"), u <= t) {
              if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, l) {
                var _ = q("g");
                o.appendChild(_), this.textSpans[t].childSpan = _;
              }
              this.textSpans[t].span = o, this.layerElement.appendChild(o);
            }
            o.style.display = "inherit";
          }
          if (c.reset(), x && (a[t].n && (f = -y, C += i.yOffset, C += S ? 1 : 0, S = false), this.applyTextPropertiesToMatrix(i, c, a[t].line, f, C), f += a[t].l || 0, f += y), l) {
            v = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily);
            var P;
            if (v.t === 1) P = new Ie(v.data, this.globalData, this);
            else {
              var T = Rr;
              v.data && v.data.shapes && (T = this.buildShapeData(v.data, i.finalSize)), P = new $(T, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var M = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(M.layerElement), M.destroy();
            }
            this.textSpans[t].glyph = P, P._debug = true, P.prepareFrame(0), P.renderFrame(), this.textSpans[t].childSpan.appendChild(P.layerElement), v.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")");
          } else x && o.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), o.textContent = a[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        x && o && o.setAttribute("d", d);
      }
      for (; t < this.textSpans.length; ) this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = true;
    }, Nt.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = false;
        var t = this.layerElement.getBBox();
        this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
      }
      return this.bbox;
    }, Nt.prototype.getValue = function() {
      var t, e = this.textSpans.length, i;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1) i = this.textSpans[t].glyph, i && (i.prepareFrame(this.comp.renderedFrame - this.data.st), i._mdf && (this._mdf = true));
    }, Nt.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = true;
        var t, e, i = this.textAnimator.renderedLetters, s = this.textProperty.currentData.l;
        e = s.length;
        var n, r, a;
        for (t = 0; t < e; t += 1) s[t].n || (n = i[t], r = this.textSpans[t].span, a = this.textSpans[t].glyph, a && a.renderFrame(), n._mdf.m && r.setAttribute("transform", n.m), n._mdf.o && r.setAttribute("opacity", n.o), n._mdf.sw && r.setAttribute("stroke-width", n.sw), n._mdf.sc && r.setAttribute("stroke", n.sc), n._mdf.fc && r.setAttribute("fill", n.fc));
      }
    };
    function ki(t, e, i) {
      this.initElement(t, e, i);
    }
    Y([re], ki), ki.prototype.createContent = function() {
      var t = q("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    };
    function Zt(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
    }
    Zt.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, Zt.prototype.renderFrame = function() {
    }, Zt.prototype.getBaseElement = function() {
      return null;
    }, Zt.prototype.destroy = function() {
    }, Zt.prototype.sourceRectAtTime = function() {
    }, Zt.prototype.hide = function() {
    }, Y([xt, It, Vt, Pt], Zt);
    function at() {
    }
    Y([lt], at), at.prototype.createNull = function(t) {
      return new Zt(t, this.globalData, this);
    }, at.prototype.createShape = function(t) {
      return new $(t, this.globalData, this);
    }, at.prototype.createText = function(t) {
      return new Nt(t, this.globalData, this);
    }, at.prototype.createImage = function(t) {
      return new re(t, this.globalData, this);
    }, at.prototype.createSolid = function(t) {
      return new ki(t, this.globalData, this);
    }, at.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var i = q("clipPath"), s = q("rect");
      s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
      var n = vt();
      i.setAttribute("id", n), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + bt() + "#" + n + ")"), e.appendChild(i), this.layers = t.layers, this.elements = Q(t.layers.length);
    }, at.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, at.prototype.updateContainerSize = function() {
    }, at.prototype.findIndexByInd = function(t) {
      var e = 0, i = this.layers.length;
      for (e = 0; e < i; e += 1) if (this.layers[e].ind === t) return e;
      return -1;
    }, at.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        e[t] = true;
        var i = this.createItem(this.layers[t]);
        if (e[t] = i, Be() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
          var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (s === -1) return;
          if (!this.elements[s] || this.elements[s] === true) this.buildItem(s), this.addPendingElement(i);
          else {
            var n = e[s], r = n.getMatte(this.layers[t].tt);
            i.setMatte(r);
          }
        }
      }
    }, at.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt) for (var e = 0, i = this.elements.length; e < i; ) {
          if (this.elements[e] === t) {
            var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, n = this.elements[s], r = n.getMatte(this.layers[e].tt);
            t.setMatte(r);
            break;
          }
          e += 1;
        }
      }
    }, at.prototype.renderFrame = function(t) {
      if (!(this.renderedFrame === t || this.destroyed)) {
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
        var e, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf) for (e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, at.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        for (var s = 0, n; s < e; ) this.elements[s] && this.elements[s] !== true && this.elements[s].getBaseElement() && (n = this.elements[s].getBaseElement()), s += 1;
        n ? this.layerElement.insertBefore(i, n) : this.layerElement.appendChild(i);
      }
    }, at.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, at.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function Rt() {
    }
    Y([xt, It, Vt, Pt, ve], Rt), Rt.prototype.initElement = function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
    }, Rt.prototype.prepareFrame = function(t) {
      if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var i, s = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = true));
      }
    }, Rt.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, Rt.prototype.setElements = function(t) {
      this.elements = t;
    }, Rt.prototype.getElements = function() {
      return this.elements;
    }, Rt.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
    }, Rt.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function Ie(t, e, i) {
      this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? Q(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? I.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    Y([at, Rt, Fe], Ie), Ie.prototype.createComp = function(t) {
      return new Ie(t, this.globalData, this);
    };
    function xi(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = q("svg");
      var i = "";
      if (e && e.title) {
        var s = q("title"), n = vt();
        s.setAttribute("id", n), s.textContent = e.title, this.svgElement.appendChild(s), i += n;
      }
      if (e && e.description) {
        var r = q("desc"), a = vt();
        r.setAttribute("id", a), r.textContent = e.description, this.svgElement.appendChild(r), i += " " + a;
      }
      i && this.svgElement.setAttribute("aria-labelledby", i);
      var l = q("defs");
      this.svgElement.appendChild(l);
      var o = q("g");
      this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && e.hideOnTransparent === false), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, defs: l, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
    }
    Y([at], xi), xi.prototype.createComp = function(t) {
      return new Ie(t, this.globalData, this);
    };
    function ws() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    ws.prototype = { addTransformSequence: function(e) {
      var i, s = e.length, n = "_";
      for (i = 0; i < s; i += 1) n += e[i].transform.key + "_";
      var r = this.sequences[n];
      return r || (r = { transforms: [].concat(e), finalTransform: new et(), _mdf: false }, this.sequences[n] = r, this.sequenceList.push(r)), r;
    }, processSequence: function(e, i) {
      for (var s = 0, n = e.transforms.length, r = i; s < n && !i; ) {
        if (e.transforms[s].transform.mProps._mdf) {
          r = true;
          break;
        }
        s += 1;
      }
      if (r) for (e.finalTransform.reset(), s = n - 1; s >= 0; s -= 1) e.finalTransform.multiply(e.transforms[s].transform.mProps.v);
      e._mdf = r;
    }, processSequences: function(e) {
      var i, s = this.sequenceList.length;
      for (i = 0; i < s; i += 1) this.processSequence(this.sequenceList[i], e);
    }, getNewKey: function() {
      return this.transform_key_count += 1, "_" + this.transform_key_count;
    } };
    var As = function() {
      var e = "__lottie_element_luma_buffer", i = null, s = null, n = null;
      function r() {
        var o = q("svg"), c = q("filter"), d = q("feColorMatrix");
        return c.setAttribute("id", e), d.setAttribute("type", "matrix"), d.setAttribute("color-interpolation-filters", "sRGB"), d.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), c.appendChild(d), o.appendChild(c), o.setAttribute("id", e + "_svg"), Qe.svgLumaHidden && (o.style.display = "none"), o;
      }
      function a() {
        i || (n = r(), document.body.appendChild(n), i = _t("canvas"), s = i.getContext("2d"), s.filter = "url(#" + e + ")", s.fillStyle = "rgba(0,0,0,0)", s.fillRect(0, 0, 1, 1));
      }
      function l(o) {
        return i || a(), i.width = o.width, i.height = o.height, s.filter = "url(#" + e + ")", i;
      }
      return { load: a, get: l };
    };
    function Or(t, e) {
      if (Qe.offscreenCanvas) return new OffscreenCanvas(t, e);
      var i = _t("canvas");
      return i.width = t, i.height = e, i;
    }
    var ti = function() {
      return { loadLumaCanvas: As.load, getLumaCanvas: As.get, createCanvas: Or };
    }(), Pi = {};
    function wi(t) {
      var e, i = t.data.ef ? t.data.ef.length : 0;
      this.filters = [];
      var s;
      for (e = 0; e < i; e += 1) {
        s = null;
        var n = t.data.ef[e].ty;
        if (Pi[n]) {
          var r = Pi[n].effect;
          s = new r(t.effectsManager.effectElements[e], t);
        }
        s && this.filters.push(s);
      }
      this.filters.length && t.addRenderableComponent(this);
    }
    wi.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
    }, wi.prototype.getEffects = function(t) {
      var e, i = this.filters.length, s = [];
      for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
      return s;
    };
    function ei(t, e) {
      this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = Q(this.masksProperties.length);
      var i, s = this.masksProperties.length, n = false;
      for (i = 0; i < s; i += 1) this.masksProperties[i].mode !== "n" && (n = true), this.viewData[i] = fe.getShapeProp(this.element, this.masksProperties[i], 3);
      this.hasMasks = n, n && this.element.addRenderableComponent(this);
    }
    ei.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var t = this.element.finalTransform.mat, e = this.element.canvasContext, i, s = this.masksProperties.length, n, r, a;
        for (e.beginPath(), i = 0; i < s; i += 1) if (this.masksProperties[i].mode !== "n") {
          this.masksProperties[i].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), a = this.viewData[i].v, n = t.applyToPointArray(a.v[0][0], a.v[0][1], 0), e.moveTo(n[0], n[1]);
          var l, o = a._length;
          for (l = 1; l < o; l += 1) r = t.applyToTriplePoints(a.o[l - 1], a.i[l], a.v[l]), e.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
          r = t.applyToTriplePoints(a.o[l - 1], a.i[0], a.v[0]), e.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
        }
        this.element.globalData.renderer.save(true), e.clip();
      }
    }, ei.prototype.getMaskProperty = Kt.prototype.getMaskProperty, ei.prototype.destroy = function() {
      this.element = null;
    };
    function Ot() {
    }
    var Dr = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
    Ot.prototype = { createElements: function() {
    }, initRendererElement: function() {
    }, createContainerElements: function() {
      if (this.data.tt >= 1) {
        this.buffers = [];
        var e = this.globalData.canvasContext, i = ti.createCanvas(e.canvas.width, e.canvas.height);
        this.buffers.push(i);
        var s = ti.createCanvas(e.canvas.width, e.canvas.height);
        this.buffers.push(s), this.data.tt >= 3 && !document._isProxy && ti.loadLumaCanvas();
      }
      this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new wi(this), this.searchEffectTransforms();
    }, createContent: function() {
    }, setBlendMode: function() {
      var e = this.globalData;
      if (e.blendMode !== this.data.bm) {
        e.blendMode = this.data.bm;
        var i = Ue(this.data.bm);
        e.canvasContext.globalCompositeOperation = i;
      }
    }, createRenderableComponents: function() {
      this.maskManager = new ei(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(ys.TRANSFORM_EFFECT);
    }, hideElement: function() {
      !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = true);
    }, showElement: function() {
      this.isInRange && !this.isTransparent && (this.hidden = false, this._isFirstFrame = true, this.maskManager._isFirstFrame = true);
    }, clearCanvas: function(e) {
      e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
    }, prepareLayer: function() {
      if (this.data.tt >= 1) {
        var e = this.buffers[0], i = e.getContext("2d");
        this.clearCanvas(i), i.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
      }
    }, exitLayer: function() {
      if (this.data.tt >= 1) {
        var e = this.buffers[1], i = e.getContext("2d");
        this.clearCanvas(i), i.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
        var s = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
        if (s.renderFrame(true), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
          var n = ti.getLumaCanvas(this.canvasContext.canvas), r = n.getContext("2d");
          r.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(n, 0, 0);
        }
        this.canvasContext.globalCompositeOperation = Dr[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
      }
    }, renderFrame: function(e) {
      if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
        this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
        var i = this.data.ty === 0;
        this.prepareLayer(), this.globalData.renderer.save(i), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(i), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(true), this._isFirstFrame && (this._isFirstFrame = false);
      }
    }, destroy: function() {
      this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
    }, mHelper: new et() }, Ot.prototype.hide = Ot.prototype.hideElement, Ot.prototype.show = Ot.prototype.showElement;
    function Ts(t, e, i, s) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var n = 4;
      e.ty === "rc" ? n = 5 : e.ty === "el" ? n = 6 : e.ty === "sr" && (n = 7), this.sh = fe.getShapeProp(t, e, n, t);
      var r, a = i.length, l;
      for (r = 0; r < a; r += 1) i[r].closed || (l = { transforms: s.addTransformSequence(i[r].transforms), trNodes: [] }, this.styledShapes.push(l), i[r].elements.push(l));
    }
    Ts.prototype.setAsAnimated = Ci.prototype.setAsAnimated;
    function U(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ws(), this.initElement(t, e, i);
    }
    Y([xt, It, Ot, yi, Vt, Pt, Ht], U), U.prototype.initElement = ve.prototype.initElement, U.prototype.transformHelper = { opacity: 1, _opMdf: false }, U.prototype.dashResetter = [], U.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
    }, U.prototype.createStyleElement = function(t, e) {
      var i = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: t.hd === true }, s = {};
      if (t.ty === "fl" || t.ty === "st" ? (s.c = I.getProp(this, t.c, 1, 255, this), s.c.k || (i.co = "rgb(" + pt(s.c.v[0]) + "," + pt(s.c.v[1]) + "," + pt(s.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (s.s = I.getProp(this, t.s, 1, null, this), s.e = I.getProp(this, t.e, 1, null, this), s.h = I.getProp(this, t.h || { k: 0 }, 0, 0.01, this), s.a = I.getProp(this, t.a || { k: 0 }, 0, tt, this), s.g = new de(this, t.g, this)), s.o = I.getProp(this, t.o, 0, 0.01, this), t.ty === "st" || t.ty === "gs") {
        if (i.lc = bi[t.lc || 2], i.lj = _i[t.lj || 2], t.lj == 1 && (i.ml = t.ml), s.w = I.getProp(this, t.w, 0, null, this), s.w.k || (i.wi = s.w.v), t.d) {
          var n = new Le(this, t.d, "canvas", this);
          s.d = n, s.d.k || (i.da = s.d.dashArray, i.do = s.d.dashoffset[0]);
        }
      } else i.r = t.r === 2 ? "evenodd" : "nonzero";
      return this.stylesList.push(i), s.style = i, s;
    }, U.prototype.createGroupElement = function() {
      var t = { it: [], prevViewData: [] };
      return t;
    }, U.prototype.createTransformElement = function(t) {
      var e = { transform: { opacity: 1, _opMdf: false, key: this.transformsManager.getNewKey(), op: I.getProp(this, t.o, 0, 0.01, this), mProps: He.getTransformProperty(this, t, this) } };
      return e;
    }, U.prototype.createShapeElement = function(t) {
      var e = new Ts(this, t, this.stylesList, this.transformsManager);
      return this.shapes.push(e), this.addShapeToModifiers(e), e;
    }, U.prototype.reloadShapes = function() {
      this._isFirstFrame = true;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, U.prototype.addTransformToStyleList = function(t) {
      var e, i = this.stylesList.length;
      for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
    }, U.prototype.removeTransformFromStyleList = function() {
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop();
    }, U.prototype.closeStyles = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].closed = true;
    }, U.prototype.searchShapes = function(t, e, i, s, n) {
      var r, a = t.length - 1, l, o, c = [], d = [], x, f, C, S = [].concat(n);
      for (r = a; r >= 0; r -= 1) {
        if (x = this.searchProcessedElement(t[r]), x ? e[r] = i[x - 1] : t[r]._shouldRender = s, t[r].ty === "fl" || t[r].ty === "st" || t[r].ty === "gf" || t[r].ty === "gs") x ? e[r].style.closed = false : e[r] = this.createStyleElement(t[r], S), c.push(e[r].style);
        else if (t[r].ty === "gr") {
          if (!x) e[r] = this.createGroupElement(t[r]);
          else for (o = e[r].it.length, l = 0; l < o; l += 1) e[r].prevViewData[l] = e[r].it[l];
          this.searchShapes(t[r].it, e[r].it, e[r].prevViewData, s, S);
        } else t[r].ty === "tr" ? (x || (C = this.createTransformElement(t[r]), e[r] = C), S.push(e[r]), this.addTransformToStyleList(e[r])) : t[r].ty === "sh" || t[r].ty === "rc" || t[r].ty === "el" || t[r].ty === "sr" ? x || (e[r] = this.createShapeElement(t[r])) : t[r].ty === "tm" || t[r].ty === "rd" || t[r].ty === "pb" || t[r].ty === "zz" || t[r].ty === "op" ? (x ? (f = e[r], f.closed = false) : (f = Ft.getModifier(t[r].ty), f.init(this, t[r]), e[r] = f, this.shapeModifiers.push(f)), d.push(f)) : t[r].ty === "rp" && (x ? (f = e[r], f.closed = true) : (f = Ft.getModifier(t[r].ty), e[r] = f, f.init(this, t, r, e), this.shapeModifiers.push(f), s = false), d.push(f));
        this.addProcessedElement(t[r], r + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(c), a = d.length, r = 0; r < a; r += 1) d[r].closed = true;
    }, U.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = false, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
    }, U.prototype.renderShapeTransform = function(t, e) {
      (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = true);
    }, U.prototype.drawLayer = function() {
      var t, e = this.stylesList.length, i, s, n, r, a, l, o = this.globalData.renderer, c = this.globalData.canvasContext, d, x;
      for (t = 0; t < e; t += 1) if (x = this.stylesList[t], d = x.type, !((d === "st" || d === "gs") && x.wi === 0 || !x.data._shouldRender || x.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
        for (o.save(), a = x.elements, d === "st" || d === "gs" ? (o.ctxStrokeStyle(d === "st" ? x.co : x.grd), o.ctxLineWidth(x.wi), o.ctxLineCap(x.lc), o.ctxLineJoin(x.lj), o.ctxMiterLimit(x.ml || 0)) : o.ctxFillStyle(d === "fl" ? x.co : x.grd), o.ctxOpacity(x.coOp), d !== "st" && d !== "gs" && c.beginPath(), o.ctxTransform(x.preTransforms.finalTransform.props), s = a.length, i = 0; i < s; i += 1) {
          for ((d === "st" || d === "gs") && (c.beginPath(), x.da && (c.setLineDash(x.da), c.lineDashOffset = x.do)), l = a[i].trNodes, r = l.length, n = 0; n < r; n += 1) l[n].t === "m" ? c.moveTo(l[n].p[0], l[n].p[1]) : l[n].t === "c" ? c.bezierCurveTo(l[n].pts[0], l[n].pts[1], l[n].pts[2], l[n].pts[3], l[n].pts[4], l[n].pts[5]) : c.closePath();
          (d === "st" || d === "gs") && (o.ctxStroke(), x.da && c.setLineDash(this.dashResetter));
        }
        d !== "st" && d !== "gs" && this.globalData.renderer.ctxFill(x.r), o.restore();
      }
    }, U.prototype.renderShape = function(t, e, i, s) {
      var n, r = e.length - 1, a;
      for (a = t, n = r; n >= 0; n -= 1) e[n].ty === "tr" ? (a = i[n].transform, this.renderShapeTransform(t, a)) : e[n].ty === "sh" || e[n].ty === "el" || e[n].ty === "rc" || e[n].ty === "sr" ? this.renderPath(e[n], i[n]) : e[n].ty === "fl" ? this.renderFill(e[n], i[n], a) : e[n].ty === "st" ? this.renderStroke(e[n], i[n], a) : e[n].ty === "gf" || e[n].ty === "gs" ? this.renderGradientFill(e[n], i[n], a) : e[n].ty === "gr" ? this.renderShape(a, e[n].it, i[n].it) : e[n].ty;
      s && this.drawLayer();
    }, U.prototype.renderStyledShape = function(t, e) {
      if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
        var i = t.trNodes, s = e.paths, n, r, a, l = s._length;
        i.length = 0;
        var o = t.transforms.finalTransform;
        for (a = 0; a < l; a += 1) {
          var c = s.shapes[a];
          if (c && c.v) {
            for (r = c._length, n = 1; n < r; n += 1) n === 1 && i.push({ t: "m", p: o.applyToPointArray(c.v[0][0], c.v[0][1], 0) }), i.push({ t: "c", pts: o.applyToTriplePoints(c.o[n - 1], c.i[n], c.v[n]) });
            r === 1 && i.push({ t: "m", p: o.applyToPointArray(c.v[0][0], c.v[0][1], 0) }), c.c && r && (i.push({ t: "c", pts: o.applyToTriplePoints(c.o[n - 1], c.i[0], c.v[0]) }), i.push({ t: "z" }));
          }
        }
        t.trNodes = i;
      }
    }, U.prototype.renderPath = function(t, e) {
      if (t.hd !== true && t._shouldRender) {
        var i, s = e.styledShapes.length;
        for (i = 0; i < s; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh);
      }
    }, U.prototype.renderFill = function(t, e, i) {
      var s = e.style;
      (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + pt(e.c.v[0]) + "," + pt(e.c.v[1]) + "," + pt(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity);
    }, U.prototype.renderGradientFill = function(t, e, i) {
      var s = e.style, n;
      if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
        var r = this.globalData.canvasContext, a = e.s.v, l = e.e.v;
        if (t.t === 1) n = r.createLinearGradient(a[0], a[1], l[0], l[1]);
        else {
          var o = Math.sqrt(Math.pow(a[0] - l[0], 2) + Math.pow(a[1] - l[1], 2)), c = Math.atan2(l[1] - a[1], l[0] - a[0]), d = e.h.v;
          d >= 1 ? d = 0.99 : d <= -1 && (d = -0.99);
          var x = o * d, f = Math.cos(c + e.a.v) * x + a[0], C = Math.sin(c + e.a.v) * x + a[1];
          n = r.createRadialGradient(f, C, 0, a[0], a[1], o);
        }
        var S, y = t.g.p, A = e.g.c, b = 1;
        for (S = 0; S < y; S += 1) e.g._hasOpacity && e.g._collapsable && (b = e.g.o[S * 2 + 1]), n.addColorStop(A[S * 4] / 100, "rgba(" + A[S * 4 + 1] + "," + A[S * 4 + 2] + "," + A[S * 4 + 3] + "," + b + ")");
        s.grd = n;
      }
      s.coOp = e.o.v * i.opacity;
    }, U.prototype.renderStroke = function(t, e, i) {
      var s = e.style, n = e.d;
      n && (n._mdf || this._isFirstFrame) && (s.da = n.dashArray, s.do = n.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + pt(e.c.v[0]) + "," + pt(e.c.v[1]) + "," + pt(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (s.wi = e.w.v);
    }, U.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    };
    function Ve(t, e, i) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = false, this.strokeColorAnim = false, this.strokeWidthAnim = false, this.stroke = false, this.fill = false, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, i);
    }
    Y([xt, It, Ot, Vt, Pt, Ht, Ct], Ve), Ve.prototype.tHelper = _t("canvas").getContext("2d"), Ve.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = Q(t.l ? t.l.length : 0);
      var e = false;
      t.fc ? (e = true, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var i = false;
      t.sc && (i = true, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var s = this.globalData.fontManager.getFontByName(t.f), n, r, a = t.l, l = this.mHelper;
      this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, r = t.finalText.length;
      var o, c, d, x, f, C, S, y, A, b, g = this.data.singleShape, u = t.tr * 1e-3 * t.finalSize, v = 0, _ = 0, P = true, T = 0;
      for (n = 0; n < r; n += 1) {
        o = this.globalData.fontManager.getCharData(t.finalText[n], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), c = o && o.data || {}, l.reset(), g && a[n].n && (v = -u, _ += t.yOffset, _ += P ? 1 : 0, P = false), f = c.shapes ? c.shapes[0].it : [], S = f.length, l.scale(t.finalSize / 100, t.finalSize / 100), g && this.applyTextPropertiesToMatrix(t, l, a[n].line, v, _), A = Q(S - 1);
        var M = 0;
        for (C = 0; C < S; C += 1) if (f[C].ty === "sh") {
          for (x = f[C].ks.k.i.length, y = f[C].ks.k, b = [], d = 1; d < x; d += 1) d === 1 && b.push(l.applyToX(y.v[0][0], y.v[0][1], 0), l.applyToY(y.v[0][0], y.v[0][1], 0)), b.push(l.applyToX(y.o[d - 1][0], y.o[d - 1][1], 0), l.applyToY(y.o[d - 1][0], y.o[d - 1][1], 0), l.applyToX(y.i[d][0], y.i[d][1], 0), l.applyToY(y.i[d][0], y.i[d][1], 0), l.applyToX(y.v[d][0], y.v[d][1], 0), l.applyToY(y.v[d][0], y.v[d][1], 0));
          b.push(l.applyToX(y.o[d - 1][0], y.o[d - 1][1], 0), l.applyToY(y.o[d - 1][0], y.o[d - 1][1], 0), l.applyToX(y.i[0][0], y.i[0][1], 0), l.applyToY(y.i[0][0], y.i[0][1], 0), l.applyToX(y.v[0][0], y.v[0][1], 0), l.applyToY(y.v[0][0], y.v[0][1], 0)), A[M] = b, M += 1;
        }
        g && (v += a[n].l, v += u), this.textSpans[T] ? this.textSpans[T].elem = A : this.textSpans[T] = { elem: A }, T += 1;
      }
    }, Ve.prototype.renderInnerContent = function() {
      this.validateText();
      var t = this.canvasContext;
      t.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var e, i, s, n, r, a, l = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
      i = o.length;
      var c, d = null, x = null, f = null, C, S, y = this.globalData.renderer;
      for (e = 0; e < i; e += 1) if (!o[e].n) {
        if (c = l[e], c && (y.save(), y.ctxTransform(c.p), y.ctxOpacity(c.o)), this.fill) {
          for (c && c.fc ? d !== c.fc && (y.ctxFillStyle(c.fc), d = c.fc) : d !== this.values.fill && (d = this.values.fill, y.ctxFillStyle(this.values.fill)), C = this.textSpans[e].elem, n = C.length, this.globalData.canvasContext.beginPath(), s = 0; s < n; s += 1) for (S = C[s], a = S.length, this.globalData.canvasContext.moveTo(S[0], S[1]), r = 2; r < a; r += 6) this.globalData.canvasContext.bezierCurveTo(S[r], S[r + 1], S[r + 2], S[r + 3], S[r + 4], S[r + 5]);
          this.globalData.canvasContext.closePath(), y.ctxFill();
        }
        if (this.stroke) {
          for (c && c.sw ? f !== c.sw && (f = c.sw, y.ctxLineWidth(c.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, y.ctxLineWidth(this.values.sWidth)), c && c.sc ? x !== c.sc && (x = c.sc, y.ctxStrokeStyle(c.sc)) : x !== this.values.stroke && (x = this.values.stroke, y.ctxStrokeStyle(this.values.stroke)), C = this.textSpans[e].elem, n = C.length, this.globalData.canvasContext.beginPath(), s = 0; s < n; s += 1) for (S = C[s], a = S.length, this.globalData.canvasContext.moveTo(S[0], S[1]), r = 2; r < a; r += 6) this.globalData.canvasContext.bezierCurveTo(S[r], S[r + 1], S[r + 2], S[r + 3], S[r + 4], S[r + 5]);
          this.globalData.canvasContext.closePath(), y.ctxStroke();
        }
        c && this.globalData.renderer.restore();
      }
    };
    function ae(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i);
    }
    Y([xt, It, Ot, Vt, Pt, Ht], ae), ae.prototype.initElement = $.prototype.initElement, ae.prototype.prepareFrame = re.prototype.prepareFrame, ae.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var t = _t("canvas");
        t.width = this.assetData.w, t.height = this.assetData.h;
        var e = t.getContext("2d"), i = this.img.width, s = this.img.height, n = i / s, r = this.assetData.w / this.assetData.h, a, l, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        n > r && o === "xMidYMid slice" || n < r && o !== "xMidYMid slice" ? (l = s, a = l * r) : (a = i, l = a / r), e.drawImage(this.img, (i - a) / 2, (s - l) / 2, a, l, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
      }
    }, ae.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, ae.prototype.destroy = function() {
      this.img = null;
    };
    function Re(t, e, i) {
      this.initElement(t, e, i);
    }
    Y([xt, It, Ot, Vt, Pt, Ht], Re), Re.prototype.initElement = $.prototype.initElement, Re.prototype.prepareFrame = re.prototype.prepareFrame, Re.prototype.renderInnerContent = function() {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
    };
    function J() {
    }
    Y([lt], J), J.prototype.createShape = function(t) {
      return new U(t, this.globalData, this);
    }, J.prototype.createText = function(t) {
      return new Ve(t, this.globalData, this);
    }, J.prototype.createImage = function(t) {
      return new ae(t, this.globalData, this);
    }, J.prototype.createSolid = function(t) {
      return new Re(t, this.globalData, this);
    }, J.prototype.createNull = xi.prototype.createNull, J.prototype.ctxTransform = function(t) {
      t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
    }, J.prototype.ctxOpacity = function(t) {
      this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
    }, J.prototype.ctxFillStyle = function(t) {
      this.canvasContext.fillStyle = t;
    }, J.prototype.ctxStrokeStyle = function(t) {
      this.canvasContext.strokeStyle = t;
    }, J.prototype.ctxLineWidth = function(t) {
      this.canvasContext.lineWidth = t;
    }, J.prototype.ctxLineCap = function(t) {
      this.canvasContext.lineCap = t;
    }, J.prototype.ctxLineJoin = function(t) {
      this.canvasContext.lineJoin = t;
    }, J.prototype.ctxMiterLimit = function(t) {
      this.canvasContext.miterLimit = t;
    }, J.prototype.ctxFill = function(t) {
      this.canvasContext.fill(t);
    }, J.prototype.ctxFillRect = function(t, e, i, s) {
      this.canvasContext.fillRect(t, e, i, s);
    }, J.prototype.ctxStroke = function() {
      this.canvasContext.stroke();
    }, J.prototype.reset = function() {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      this.contextData.reset();
    }, J.prototype.save = function() {
      this.canvasContext.save();
    }, J.prototype.restore = function(t) {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t);
    }, J.prototype.configAnimation = function(t) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = _t("canvas");
        var e = this.animationItem.container.style;
        e.width = "100%", e.height = "100%";
        var i = "0px 0px 0px";
        e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = false, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = Q(t.layers.length), this.updateContainerSize();
    }, J.prototype.updateContainerSize = function(t, e) {
      this.reset();
      var i, s;
      t ? (i = t, s = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = s) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, s = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, s = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = s * this.renderConfig.dpr);
      var n, r;
      if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
        var a = this.renderConfig.preserveAspectRatio.split(" "), l = a[1] || "meet", o = a[0] || "xMidYMid", c = o.substr(0, 4), d = o.substr(4);
        n = i / s, r = this.transformCanvas.w / this.transformCanvas.h, r > n && l === "meet" || r < n && l === "slice" ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr)), c === "xMid" && (r < n && l === "meet" || r > n && l === "slice") ? this.transformCanvas.tx = (i - this.transformCanvas.w * (s / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : c === "xMax" && (r < n && l === "meet" || r > n && l === "slice") ? this.transformCanvas.tx = (i - this.transformCanvas.w * (s / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, d === "YMid" && (r > n && l === "meet" || r < n && l === "slice") ? this.transformCanvas.ty = (s - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : d === "YMax" && (r > n && l === "meet" || r < n && l === "slice") ? this.transformCanvas.ty = (s - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
      } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, true);
    }, J.prototype.destroy = function() {
      this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
      var t, e = this.layers ? this.layers.length : 0;
      for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = true;
    }, J.prototype.renderFrame = function(t, e) {
      if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === true && !e || this.destroyed || t === -1)) {
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
        var i, s = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
        if (this.globalData._mdf) {
          for (this.renderConfig.clearCanvas === true ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
          this.renderConfig.clearCanvas !== true && this.restore();
        }
      }
    }, J.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        var i = this.createItem(this.layers[t], this, this.globalData);
        e[t] = i, i.initExpressions();
      }
    }, J.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        t.checkParenting();
      }
    }, J.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, J.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    };
    function Ms() {
      this.opacity = -1, this.transform = nt("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
    }
    function ot() {
      this.stack = [], this.cArrPos = 0, this.cTr = new et();
      var t, e = 15;
      for (t = 0; t < e; t += 1) {
        var i = new Ms();
        this.stack[t] = i;
      }
      this._length = e, this.nativeContext = null, this.transformMat = new et(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
    }
    ot.prototype.duplicate = function() {
      var t = this._length * 2, e = 0;
      for (e = this._length; e < t; e += 1) this.stack[e] = new Ms();
      this._length = t;
    }, ot.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
    }, ot.prototype.restore = function(t) {
      this.cArrPos -= 1;
      var e = this.stack[this.cArrPos], i = e.transform, s, n = this.cTr.props;
      for (s = 0; s < 16; s += 1) n[s] = i[s];
      if (t) {
        this.nativeContext.restore();
        var r = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = r.fillStyle, this.appliedStrokeStyle = r.strokeStyle, this.appliedLineWidth = r.lineWidth, this.appliedLineCap = r.lineCap, this.appliedLineJoin = r.lineJoin, this.appliedMiterLimit = r.miterLimit;
      }
      this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit;
    }, ot.prototype.save = function(t) {
      t && this.nativeContext.save();
      var e = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var i = this.stack[this.cArrPos], s;
      for (s = 0; s < 16; s += 1) i.transform[s] = e[s];
      this.cArrPos += 1;
      var n = this.stack[this.cArrPos];
      n.opacity = i.opacity, n.fillStyle = i.fillStyle, n.strokeStyle = i.strokeStyle, n.lineWidth = i.lineWidth, n.lineCap = i.lineCap, n.lineJoin = i.lineJoin, n.miterLimit = i.miterLimit;
    }, ot.prototype.setOpacity = function(t) {
      this.stack[this.cArrPos].opacity = t;
    }, ot.prototype.setContext = function(t) {
      this.nativeContext = t;
    }, ot.prototype.fillStyle = function(t) {
      this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t);
    }, ot.prototype.strokeStyle = function(t) {
      this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t);
    }, ot.prototype.lineWidth = function(t) {
      this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t);
    }, ot.prototype.lineCap = function(t) {
      this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t);
    }, ot.prototype.lineJoin = function(t) {
      this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t);
    }, ot.prototype.miterLimit = function(t) {
      this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t);
    }, ot.prototype.transform = function(t) {
      this.transformMat.cloneFromProps(t);
      var e = this.cTr;
      this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
      var i = e.props;
      this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]);
    }, ot.prototype.opacity = function(t) {
      var e = this.stack[this.cArrPos].opacity;
      e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e);
    }, ot.prototype.fill = function(t) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t);
    }, ot.prototype.fillRect = function(t, e, i, s) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, i, s);
    }, ot.prototype.stroke = function() {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
    };
    function ge(t, e, i) {
      this.completeLayers = false, this.layers = t.layers, this.pendingElements = [], this.elements = Q(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? I.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    Y([J, Rt, Ot], ge), ge.prototype.renderInnerContent = function() {
      var t = this.canvasContext;
      t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
      var e, i = this.layers.length;
      for (e = i - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
    }, ge.prototype.destroy = function() {
      var t, e = this.layers.length;
      for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.layers = null, this.elements = null;
    }, ge.prototype.createComp = function(t) {
      return new ge(t, this.globalData, this);
    };
    function Ai(t, e) {
      this.animationItem = t, this.renderConfig = { clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : true, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || false, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", className: e && e.className || "", id: e && e.id || "", runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: false, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new ot(), this.elements = [], this.pendingElements = [], this.transformMat = new et(), this.completeLayers = false, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
    }
    return Y([J], Ai), Ai.prototype.createComp = function(t) {
      return new ge(t, this.globalData, this);
    }, Xs("canvas", Ai), Ft.registerModifier("tm", wt), Ft.registerModifier("pb", xe), Ft.registerModifier("rp", Lt), Ft.registerModifier("rd", Pe), Ft.registerModifier("zz", Ae), Ft.registerModifier("op", Te), K;
  });
});
var lottie_light_canvasB5UTTNXA = zr();
export {
  lottie_light_canvasB5UTTNXA as default
};
/*! Bundled license information:

@dotlottie/common/dist/lottie_light_canvas-B5UTTNXA.js:
  (*! Bundled license information:
  
  lottie-web/build/player/lottie_light_canvas.js:
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
//# sourceMappingURL=lottie_light_canvas-B5UTTNXA-W42QH3R2.js.map
