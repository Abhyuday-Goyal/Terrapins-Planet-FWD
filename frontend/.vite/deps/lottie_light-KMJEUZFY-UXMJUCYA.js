import {
  m
} from "./chunk-USPGI4ZR.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/lottie_light-KMJEUZFY.js
var br = m((we, Ye) => {
  typeof navigator < "u" && function(oe, $t) {
    typeof we == "object" && typeof Ye < "u" ? Ye.exports = $t() : typeof define == "function" && define.amd ? define($t) : (oe = typeof globalThis < "u" ? globalThis : oe || self, oe.lottie = $t());
  }(we, function() {
    var oe = "http://www.w3.org/2000/svg", $t = "", fi = false, He = -999999, us = function(e) {
      fi = !!e;
    }, cs = function() {
      return fi;
    }, vs = function(e) {
      $t = e;
    }, dt = function() {
      return $t;
    };
    function Vt(t) {
      return document.createElement(t);
    }
    function X(t, e) {
      var i, s = t.length, n;
      for (i = 0; i < s; i += 1) {
        n = t[i].prototype;
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e.prototype[r] = n[r]);
      }
    }
    function ds(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var ms = function() {
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
    }(), st = /* @__PURE__ */ function() {
      function t(i, s) {
        var n = 0, r = [], o;
        switch (i) {
          case "int16":
          case "uint8c":
            o = 1;
            break;
          default:
            o = 1.1;
            break;
        }
        for (n = 0; n < s; n += 1) r.push(o);
        return r;
      }
      function e(i, s) {
        return i === "float32" ? new Float32Array(s) : i === "int16" ? new Int16Array(s) : i === "uint8c" ? new Uint8ClampedArray(s) : t(i, s);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
    }();
    function $(t) {
      return Array.apply(null, { length: t });
    }
    var pi = true, ui = null, Ze = "", gs = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), kt = Math.pow, di = Math.sqrt, Yt = Math.floor, ys = Math.min;
    var mi = 150, J = Math.PI / 180, Rt = 0.5519;
    function Ue(t, e, i, s) {
      this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1;
    }
    function yi(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function _i(t, e, i, s) {
      this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1;
    }
    function bi(t, e, i) {
      this.type = t, this.firstFrame = e, this.totalFrames = i;
    }
    function Si(t, e) {
      this.type = t, this.target = e;
    }
    function _s(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function bs(t) {
      this.type = "configError", this.nativeError = t;
    }
    var ft = /* @__PURE__ */ function() {
      var t = 0;
      return function() {
        return t += 1, Ze + "__lottie_element_" + t;
      };
    }();
    function Je(t, e, i) {
      var s, n, r, o, u, h, m2, _;
      switch (o = Math.floor(t * 6), u = t * 6 - o, h = i * (1 - e), m2 = i * (1 - u * e), _ = i * (1 - (1 - u) * e), o % 6) {
        case 0:
          s = i, n = _, r = h;
          break;
        case 1:
          s = m2, n = i, r = h;
          break;
        case 2:
          s = h, n = i, r = _;
          break;
        case 3:
          s = h, n = m2, r = i;
          break;
        case 4:
          s = _, n = h, r = i;
          break;
        case 5:
          s = i, n = h, r = m2;
          break;
      }
      return [s, n, r];
    }
    function Qe(t, e, i) {
      var s = Math.max(t, e, i), n = Math.min(t, e, i), r = s - n, o, u = s === 0 ? 0 : r / s, h = s / 255;
      switch (s) {
        case n:
          o = 0;
          break;
        case t:
          o = e - i + r * (e < i ? 6 : 0), o /= 6 * r;
          break;
        case e:
          o = i - t + r * 2, o /= 6 * r;
          break;
        case i:
          o = t - e + r * 4, o /= 6 * r;
          break;
      }
      return [o, u, h];
    }
    function ki(t, e) {
      var i = Qe(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), Je(i[0], i[1], i[2]);
    }
    function Pi(t, e) {
      var i = Qe(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), Je(i[0], i[1], i[2]);
    }
    function Ai(t, e) {
      var i = Qe(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), Je(i[0], i[1], i[2]);
    }
    (function() {
      var t = [], e, i;
      for (e = 0; e < 256; e += 1) i = e.toString(16), t[e] = i.length === 1 ? "0" + i : i;
      return function(s, n, r) {
        return s < 0 && (s = 0), n < 0 && (n = 0), r < 0 && (r = 0), "#" + t[s] + t[n] + t[r];
      };
    })();
    var Ss = function(e) {
      pi = !!e;
    }, ks = function() {
      return pi;
    }, Ps = function(e) {
      ui = e;
    }, Te = function() {
      return ui;
    }, Me = function(e) {
      mi = e;
    }, he = function() {
      return mi;
    }, As = function(e) {
      Ze = e;
    };
    function W(t) {
      return document.createElementNS(oe, t);
    }
    function Ee(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ee = function(i) {
        return typeof i;
      } : Ee = function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, Ee(t);
    }
    var le = /* @__PURE__ */ function() {
      var t = 1, e = [], i, s, n = { onmessage: function() {
      }, postMessage: function(b) {
        i({ data: b });
      } }, r = { postMessage: function(b) {
        n.onmessage({ data: b });
      } };
      function o(p) {
        if (window.Worker && window.Blob && cs()) {
          var b = new Blob(["var _workerSelf = self; self.onmessage = ", p.toString()], { type: "text/javascript" }), P = URL.createObjectURL(b);
          return new Worker(P);
        }
        return i = p, n;
      }
      function u() {
        s || (s = o(function(b) {
          function P() {
            function C(F, v) {
              var k, a, l = F.length, E, w, R, q;
              for (a = 0; a < l; a += 1) if (k = F[a], "ks" in k && !k.completed) {
                if (k.completed = true, k.hasMask) {
                  var D = k.masksProperties;
                  for (w = D.length, E = 0; E < w; E += 1) if (D[E].pt.k.i) g(D[E].pt.k);
                  else for (q = D[E].pt.k.length, R = 0; R < q; R += 1) D[E].pt.k[R].s && g(D[E].pt.k[R].s[0]), D[E].pt.k[R].e && g(D[E].pt.k[R].e[0]);
                }
                k.ty === 0 ? (k.layers = f(k.refId, v), C(k.layers, v)) : k.ty === 4 ? c(k.shapes) : k.ty === 5 && G(k);
              }
            }
            function y(F, v) {
              if (F) {
                var k = 0, a = F.length;
                for (k = 0; k < a; k += 1) F[k].t === 1 && (F[k].data.layers = f(F[k].data.refId, v), C(F[k].data.layers, v));
              }
            }
            function d(F, v) {
              for (var k = 0, a = v.length; k < a; ) {
                if (v[k].id === F) return v[k];
                k += 1;
              }
              return null;
            }
            function f(F, v) {
              var k = d(F, v);
              return k ? k.layers.__used ? JSON.parse(JSON.stringify(k.layers)) : (k.layers.__used = true, k.layers) : null;
            }
            function c(F) {
              var v, k = F.length, a, l;
              for (v = k - 1; v >= 0; v -= 1) if (F[v].ty === "sh") if (F[v].ks.k.i) g(F[v].ks.k);
              else for (l = F[v].ks.k.length, a = 0; a < l; a += 1) F[v].ks.k[a].s && g(F[v].ks.k[a].s[0]), F[v].ks.k[a].e && g(F[v].ks.k[a].e[0]);
              else F[v].ty === "gr" && c(F[v].it);
            }
            function g(F) {
              var v, k = F.i.length;
              for (v = 0; v < k; v += 1) F.i[v][0] += F.v[v][0], F.i[v][1] += F.v[v][1], F.o[v][0] += F.v[v][0], F.o[v][1] += F.v[v][1];
            }
            function A(F, v) {
              var k = v ? v.split(".") : [100, 100, 100];
              return F[0] > k[0] ? true : k[0] > F[0] ? false : F[1] > k[1] ? true : k[1] > F[1] ? false : F[2] > k[2] ? true : k[2] > F[2] ? false : null;
            }
            var T = /* @__PURE__ */ function() {
              var F = [4, 4, 14];
              function v(a) {
                var l = a.t.d;
                a.t.d = { k: [{ s: l, t: 0 }] };
              }
              function k(a) {
                var l, E = a.length;
                for (l = 0; l < E; l += 1) a[l].ty === 5 && v(a[l]);
              }
              return function(a) {
                if (A(F, a.v) && (k(a.layers), a.assets)) {
                  var l, E = a.assets.length;
                  for (l = 0; l < E; l += 1) a.assets[l].layers && k(a.assets[l].layers);
                }
              };
            }(), x = /* @__PURE__ */ function() {
              var F = [4, 7, 99];
              return function(v) {
                if (v.chars && !A(F, v.v)) {
                  var k, a = v.chars.length;
                  for (k = 0; k < a; k += 1) {
                    var l = v.chars[k];
                    l.data && l.data.shapes && (c(l.data.shapes), l.data.ip = 0, l.data.op = 99999, l.data.st = 0, l.data.sr = 1, l.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, v.chars[k].t || (l.data.shapes.push({ ty: "no" }), l.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                  }
                }
              };
            }(), I = /* @__PURE__ */ function() {
              var F = [5, 7, 15];
              function v(a) {
                var l = a.t.p;
                typeof l.a == "number" && (l.a = { a: 0, k: l.a }), typeof l.p == "number" && (l.p = { a: 0, k: l.p }), typeof l.r == "number" && (l.r = { a: 0, k: l.r });
              }
              function k(a) {
                var l, E = a.length;
                for (l = 0; l < E; l += 1) a[l].ty === 5 && v(a[l]);
              }
              return function(a) {
                if (A(F, a.v) && (k(a.layers), a.assets)) {
                  var l, E = a.assets.length;
                  for (l = 0; l < E; l += 1) a.assets[l].layers && k(a.assets[l].layers);
                }
              };
            }(), j = /* @__PURE__ */ function() {
              var F = [4, 1, 9];
              function v(a) {
                var l, E = a.length, w, R;
                for (l = 0; l < E; l += 1) if (a[l].ty === "gr") v(a[l].it);
                else if (a[l].ty === "fl" || a[l].ty === "st") if (a[l].c.k && a[l].c.k[0].i) for (R = a[l].c.k.length, w = 0; w < R; w += 1) a[l].c.k[w].s && (a[l].c.k[w].s[0] /= 255, a[l].c.k[w].s[1] /= 255, a[l].c.k[w].s[2] /= 255, a[l].c.k[w].s[3] /= 255), a[l].c.k[w].e && (a[l].c.k[w].e[0] /= 255, a[l].c.k[w].e[1] /= 255, a[l].c.k[w].e[2] /= 255, a[l].c.k[w].e[3] /= 255);
                else a[l].c.k[0] /= 255, a[l].c.k[1] /= 255, a[l].c.k[2] /= 255, a[l].c.k[3] /= 255;
              }
              function k(a) {
                var l, E = a.length;
                for (l = 0; l < E; l += 1) a[l].ty === 4 && v(a[l].shapes);
              }
              return function(a) {
                if (A(F, a.v) && (k(a.layers), a.assets)) {
                  var l, E = a.assets.length;
                  for (l = 0; l < E; l += 1) a.assets[l].layers && k(a.assets[l].layers);
                }
              };
            }(), N = /* @__PURE__ */ function() {
              var F = [4, 4, 18];
              function v(a) {
                var l, E = a.length, w, R;
                for (l = E - 1; l >= 0; l -= 1) if (a[l].ty === "sh") if (a[l].ks.k.i) a[l].ks.k.c = a[l].closed;
                else for (R = a[l].ks.k.length, w = 0; w < R; w += 1) a[l].ks.k[w].s && (a[l].ks.k[w].s[0].c = a[l].closed), a[l].ks.k[w].e && (a[l].ks.k[w].e[0].c = a[l].closed);
                else a[l].ty === "gr" && v(a[l].it);
              }
              function k(a) {
                var l, E, w = a.length, R, q, D, Y;
                for (E = 0; E < w; E += 1) {
                  if (l = a[E], l.hasMask) {
                    var H = l.masksProperties;
                    for (q = H.length, R = 0; R < q; R += 1) if (H[R].pt.k.i) H[R].pt.k.c = H[R].cl;
                    else for (Y = H[R].pt.k.length, D = 0; D < Y; D += 1) H[R].pt.k[D].s && (H[R].pt.k[D].s[0].c = H[R].cl), H[R].pt.k[D].e && (H[R].pt.k[D].e[0].c = H[R].cl);
                  }
                  l.ty === 4 && v(l.shapes);
                }
              }
              return function(a) {
                if (A(F, a.v) && (k(a.layers), a.assets)) {
                  var l, E = a.assets.length;
                  for (l = 0; l < E; l += 1) a.assets[l].layers && k(a.assets[l].layers);
                }
              };
            }();
            function L(F) {
              F.__complete || (j(F), T(F), x(F), I(F), N(F), C(F.layers, F.assets), y(F.chars, F.assets), F.__complete = true);
            }
            function G(F) {
              F.t.a.length === 0 && "m" in F.t.p;
            }
            var O = {};
            return O.completeData = L, O.checkColors = j, O.checkChars = x, O.checkPathProperties = I, O.checkShapes = N, O.completeLayers = C, O;
          }
          if (r.dataManager || (r.dataManager = P()), r.assetLoader || (r.assetLoader = /* @__PURE__ */ function() {
            function C(d) {
              var f = d.getResponseHeader("content-type");
              return f && d.responseType === "json" && f.indexOf("json") !== -1 || d.response && Ee(d.response) === "object" ? d.response : d.response && typeof d.response == "string" ? JSON.parse(d.response) : d.responseText ? JSON.parse(d.responseText) : null;
            }
            function y(d, f, c, g) {
              var A, T = new XMLHttpRequest();
              try {
                T.responseType = "json";
              } catch {
              }
              T.onreadystatechange = function() {
                if (T.readyState === 4) if (T.status === 200) A = C(T), c(A);
                else try {
                  A = C(T), c(A);
                } catch (x) {
                  g && g(x);
                }
              };
              try {
                T.open(["G", "E", "T"].join(""), d, true);
              } catch {
                T.open(["G", "E", "T"].join(""), f + "/" + d, true);
              }
              T.send();
            }
            return { load: y };
          }()), b.data.type === "loadAnimation") r.assetLoader.load(b.data.path, b.data.fullPath, function(C) {
            r.dataManager.completeData(C), r.postMessage({ id: b.data.id, payload: C, status: "success" });
          }, function() {
            r.postMessage({ id: b.data.id, status: "error" });
          });
          else if (b.data.type === "complete") {
            var S = b.data.animation;
            r.dataManager.completeData(S), r.postMessage({ id: b.data.id, payload: S, status: "success" });
          } else b.data.type === "loadData" && r.assetLoader.load(b.data.path, b.data.fullPath, function(C) {
            r.postMessage({ id: b.data.id, payload: C, status: "success" });
          }, function() {
            r.postMessage({ id: b.data.id, status: "error" });
          });
        }), s.onmessage = function(p) {
          var b = p.data, P = b.id, S = e[P];
          e[P] = null, b.status === "success" ? S.onComplete(b.payload) : S.onError && S.onError();
        });
      }
      function h(p, b) {
        t += 1;
        var P = "processId_" + t;
        return e[P] = { onComplete: p, onError: b }, P;
      }
      function m2(p, b, P) {
        u();
        var S = h(b, P);
        s.postMessage({ type: "loadAnimation", path: p, fullPath: window.location.origin + window.location.pathname, id: S });
      }
      function _(p, b, P) {
        u();
        var S = h(b, P);
        s.postMessage({ type: "loadData", path: p, fullPath: window.location.origin + window.location.pathname, id: S });
      }
      function M(p, b, P) {
        u();
        var S = h(b, P);
        s.postMessage({ type: "complete", animation: p, id: S });
      }
      return { loadAnimation: m2, loadData: _, completeAnimation: M };
    }(), ws = function() {
      var t = function() {
        var y = Vt("canvas");
        y.width = 1, y.height = 1;
        var d = y.getContext("2d");
        return d.fillStyle = "rgba(0,0,0,0)", d.fillRect(0, 0, 1, 1), y;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function s(y, d, f) {
        var c = "";
        if (y.e) c = y.p;
        else if (d) {
          var g = y.p;
          g.indexOf("images/") !== -1 && (g = g.split("/")[1]), c = d + g;
        } else c = f, c += y.u ? y.u : "", c += y.p;
        return c;
      }
      function n(y) {
        var d = 0, f = setInterval((function() {
          var c = y.getBBox();
          (c.width || d > 500) && (this._imageLoaded(), clearInterval(f)), d += 1;
        }).bind(this), 50);
      }
      function r(y) {
        var d = s(y, this.assetsPath, this.path), f = W("image");
        gs ? this.testImageLoaded(f) : f.addEventListener("load", this._imageLoaded, false), f.addEventListener("error", (function() {
          c.img = t, this._imageLoaded();
        }).bind(this), false), f.setAttributeNS("http://www.w3.org/1999/xlink", "href", d), this._elementHelper.append ? this._elementHelper.append(f) : this._elementHelper.appendChild(f);
        var c = { img: f, assetData: y };
        return c;
      }
      function o(y) {
        var d = s(y, this.assetsPath, this.path), f = Vt("img");
        f.crossOrigin = "anonymous", f.addEventListener("load", this._imageLoaded, false), f.addEventListener("error", (function() {
          c.img = t, this._imageLoaded();
        }).bind(this), false), f.src = d;
        var c = { img: f, assetData: y };
        return c;
      }
      function u(y) {
        var d = { assetData: y }, f = s(y, this.assetsPath, this.path);
        return le.loadData(f, (function(c) {
          d.img = c, this._footageLoaded();
        }).bind(this), (function() {
          d.img = {}, this._footageLoaded();
        }).bind(this)), d;
      }
      function h(y, d) {
        this.imagesLoadedCb = d;
        var f, c = y.length;
        for (f = 0; f < c; f += 1) y[f].layers || (!y[f].t || y[f].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(y[f]))) : y[f].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(y[f]))));
      }
      function m2(y) {
        this.path = y || "";
      }
      function _(y) {
        this.assetsPath = y || "";
      }
      function M(y) {
        for (var d = 0, f = this.images.length; d < f; ) {
          if (this.images[d].assetData === y) return this.images[d].img;
          d += 1;
        }
        return null;
      }
      function p() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function b() {
        return this.totalImages === this.loadedAssets;
      }
      function P() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function S(y, d) {
        y === "svg" ? (this._elementHelper = d, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function C() {
        this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = u.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return C.prototype = { loadAssets: h, setAssetsPath: _, setPath: m2, loadedImages: b, loadedFootages: P, destroy: p, getAsset: M, createImgData: o, createImageData: r, imageLoaded: e, footageLoaded: i, setCacheType: S }, C;
    }();
    function Ci() {
    }
    Ci.prototype = { triggerEvent: function(e, i) {
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
    var Cs = /* @__PURE__ */ function() {
      function t(e) {
        for (var i = e.split(`\r
`), s = {}, n, r = 0, o = 0; o < i.length; o += 1) n = i[o].split(":"), n.length === 2 && (s[n[0]] = n[1].trim(), r += 1);
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
    }(), Ts = /* @__PURE__ */ function() {
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
    }(), fe = {}, Ms = function(e, i) {
      fe[e] = i;
    };
    function Es(t) {
      return fe[t];
    }
    function xs() {
      if (fe.canvas) return "canvas";
      for (var t in fe) if (fe[t]) return t;
      return "";
    }
    function pe(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pe = function(i) {
        return typeof i;
      } : pe = function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, pe(t);
    }
    var z = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = ft(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = ks(), this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = Ts(), this.imagePreloader = new ws(), this.audioController = ms(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new Ue("drawnFrame", 0, 0, 0), this.expressionsPlugin = Te();
    };
    X([Ci], z), z.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var i = Es(e);
      this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === true ? this.loop = true : t.loop === false ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : true, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : true, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), le.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, z.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, z.prototype.setupAnimation = function(t) {
      le.completeAnimation(t, this.configAnimation);
    }, z.prototype.setData = function(t, e) {
      e && pe(e) !== "object" && (e = JSON.parse(e));
      var i = { wrapper: t, animationData: e }, s = t.attributes;
      i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : xs() || "canvas";
      var n = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
      n === "false" ? i.loop = false : n === "true" ? i.loop = true : n !== "" && (i.loop = parseInt(n, 10));
      var r = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : s.getNamedItem("bm-autoplay") ? s.getNamedItem("bm-autoplay").value : true;
      i.autoplay = r !== "false", i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "";
      var o = s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "";
      o === "false" && (i.prerender = false), i.path ? this.setParams(i) : this.trigger("destroy");
    }, z.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e = this.animationData.layers, i, s = e.length, n = t.layers, r, o = n.length;
      for (r = 0; r < o; r += 1) for (i = 0; i < s; ) {
        if (e[i].id === n[r].id) {
          e[i] = n[r];
          break;
        }
        i += 1;
      }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (s = t.assets.length, i = 0; i < s; i += 1) this.animationData.assets.push(t.assets[i]);
      this.animationData.__complete = false, le.completeAnimation(this.animationData, this.onSegmentComplete);
    }, z.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = Te();
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
      this.segmentPos += 1, le.loadData(i, this.includeLayers.bind(this), (function() {
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
        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = Cs(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
      } catch (e) {
        this.triggerConfigError(e);
      }
    }, z.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, z.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = true;
        var t = Te();
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
      if (e && (this.segments.length = 0), pe(t[0]) === "object") {
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
          this.triggerEvent(t, new Ue(t, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "drawnFrame":
          this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
          break;
        case "loopComplete":
          this.triggerEvent(t, new _i(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new yi(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new bi(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new Si(t, this));
          break;
        default:
          this.triggerEvent(t);
      }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new Ue(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new _i(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new yi(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new bi(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new Si(t, this));
    }, z.prototype.triggerRenderFrameError = function(t) {
      var e = new _s(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, z.prototype.triggerConfigError = function(t) {
      var e = new bs(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var tt = function() {
      var t = {}, e = [], i = 0, s = 0, n = 0, r = true, o = false;
      function u(v) {
        for (var k = 0, a = v.target; k < s; ) e[k].animation === a && (e.splice(k, 1), k -= 1, s -= 1, a.isPaused || M()), k += 1;
      }
      function h(v, k) {
        if (!v) return null;
        for (var a = 0; a < s; ) {
          if (e[a].elem === v && e[a].elem !== null) return e[a].animation;
          a += 1;
        }
        var l = new z();
        return p(l, v), l.setData(v, k), l;
      }
      function m2() {
        var v, k = e.length, a = [];
        for (v = 0; v < k; v += 1) a.push(e[v].animation);
        return a;
      }
      function _() {
        n += 1, j();
      }
      function M() {
        n -= 1;
      }
      function p(v, k) {
        v.addEventListener("destroy", u), v.addEventListener("_active", _), v.addEventListener("_idle", M), e.push({ elem: k, animation: v }), s += 1;
      }
      function b(v) {
        var k = new z();
        return p(k, null), k.setParams(v), k;
      }
      function P(v, k) {
        var a;
        for (a = 0; a < s; a += 1) e[a].animation.setSpeed(v, k);
      }
      function S(v, k) {
        var a;
        for (a = 0; a < s; a += 1) e[a].animation.setDirection(v, k);
      }
      function C(v) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.play(v);
      }
      function y(v) {
        var k = v - i, a;
        for (a = 0; a < s; a += 1) e[a].animation.advanceTime(k);
        i = v, n && !o ? window.requestAnimationFrame(y) : r = true;
      }
      function d(v) {
        i = v, window.requestAnimationFrame(y);
      }
      function f(v) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.pause(v);
      }
      function c(v, k, a) {
        var l;
        for (l = 0; l < s; l += 1) e[l].animation.goToAndStop(v, k, a);
      }
      function g(v) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.stop(v);
      }
      function A(v) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.togglePause(v);
      }
      function T(v) {
        var k;
        for (k = s - 1; k >= 0; k -= 1) e[k].animation.destroy(v);
      }
      function x(v, k, a) {
        var l = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), E, w = l.length;
        for (E = 0; E < w; E += 1) a && l[E].setAttribute("data-bm-type", a), h(l[E], v);
        if (k && w === 0) {
          a || (a = "svg");
          var R = document.getElementsByTagName("body")[0];
          R.innerText = "";
          var q = Vt("div");
          q.style.width = "100%", q.style.height = "100%", q.setAttribute("data-bm-type", a), R.appendChild(q), h(q, v);
        }
      }
      function I() {
        var v;
        for (v = 0; v < s; v += 1) e[v].animation.resize();
      }
      function j() {
        !o && n && r && (window.requestAnimationFrame(d), r = false);
      }
      function N() {
        o = true;
      }
      function L() {
        o = false, j();
      }
      function G(v, k) {
        var a;
        for (a = 0; a < s; a += 1) e[a].animation.setVolume(v, k);
      }
      function O(v) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.mute(v);
      }
      function F(v) {
        var k;
        for (k = 0; k < s; k += 1) e[k].animation.unmute(v);
      }
      return t.registerAnimation = h, t.loadAnimation = b, t.setSpeed = P, t.setDirection = S, t.play = C, t.pause = f, t.stop = g, t.togglePause = A, t.searchAnimations = x, t.resize = I, t.goToAndStop = c, t.destroy = T, t.freeze = N, t.unfreeze = L, t.setVolume = G, t.mute = O, t.unmute = F, t.getRegisteredAnimations = m2, t;
    }(), ue = function() {
      var t = {};
      t.getBezierEasing = i;
      var e = {};
      function i(d, f, c, g, A) {
        var T = A || ("bez_" + d + "_" + f + "_" + c + "_" + g).replace(/\./g, "p");
        if (e[T]) return e[T];
        var x = new y([d, f, c, g]);
        return e[T] = x, x;
      }
      var s = 4, n = 1e-3, r = 1e-7, o = 10, u = 11, h = 1 / (u - 1), m2 = typeof Float32Array == "function";
      function _(d, f) {
        return 1 - 3 * f + 3 * d;
      }
      function M(d, f) {
        return 3 * f - 6 * d;
      }
      function p(d) {
        return 3 * d;
      }
      function b(d, f, c) {
        return ((_(f, c) * d + M(f, c)) * d + p(f)) * d;
      }
      function P(d, f, c) {
        return 3 * _(f, c) * d * d + 2 * M(f, c) * d + p(f);
      }
      function S(d, f, c, g, A) {
        var T, x, I = 0;
        do
          x = f + (c - f) / 2, T = b(x, g, A) - d, T > 0 ? c = x : f = x;
        while (Math.abs(T) > r && ++I < o);
        return x;
      }
      function C(d, f, c, g) {
        for (var A = 0; A < s; ++A) {
          var T = P(f, c, g);
          if (T === 0) return f;
          var x = b(f, c, g) - d;
          f -= x / T;
        }
        return f;
      }
      function y(d) {
        this._p = d, this._mSampleValues = m2 ? new Float32Array(u) : new Array(u), this._precomputed = false, this.get = this.get.bind(this);
      }
      return y.prototype = { get: function(f) {
        var c = this._p[0], g = this._p[1], A = this._p[2], T = this._p[3];
        return this._precomputed || this._precompute(), c === g && A === T ? f : f === 0 ? 0 : f === 1 ? 1 : b(this._getTForX(f), g, T);
      }, _precompute: function() {
        var f = this._p[0], c = this._p[1], g = this._p[2], A = this._p[3];
        this._precomputed = true, (f !== c || g !== A) && this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var f = this._p[0], c = this._p[2], g = 0; g < u; ++g) this._mSampleValues[g] = b(g * h, f, c);
      }, _getTForX: function(f) {
        for (var c = this._p[0], g = this._p[2], A = this._mSampleValues, T = 0, x = 1, I = u - 1; x !== I && A[x] <= f; ++x) T += h;
        --x;
        var j = (f - A[x]) / (A[x + 1] - A[x]), N = T + j * h, L = P(N, c, g);
        return L >= n ? C(f, N, c, g) : L === 0 ? N : S(f, T, T + h, c, g);
      } }, t;
    }(), Ti = /* @__PURE__ */ function() {
      function t(e) {
        return e.concat($(e.length));
      }
      return { double: t };
    }(), xe = /* @__PURE__ */ function() {
      return function(t, e, i) {
        var s = 0, n = t, r = $(n), o = { newElement: u, release: h };
        function u() {
          var m2;
          return s ? (s -= 1, m2 = r[s]) : m2 = e(), m2;
        }
        function h(m2) {
          s === n && (r = Ti.double(r), n *= 2), i && i(m2), r[s] = m2, s += 1;
        }
        return o;
      };
    }(), Mi = function() {
      function t() {
        return { addedLength: 0, percents: st("float32", he()), lengths: st("float32", he()) };
      }
      return xe(8, t);
    }(), Ei = function() {
      function t() {
        return { lengths: [], totalLength: 0 };
      }
      function e(i) {
        var s, n = i.lengths.length;
        for (s = 0; s < n; s += 1) Mi.release(i.lengths[s]);
        i.lengths.length = 0;
      }
      return xe(8, t, e);
    }();
    function Fs() {
      var t = Math;
      function e(p, b, P, S, C, y) {
        var d = p * S + b * C + P * y - C * S - y * p - P * b;
        return d > -1e-3 && d < 1e-3;
      }
      function i(p, b, P, S, C, y, d, f, c) {
        if (P === 0 && y === 0 && c === 0) return e(p, b, S, C, d, f);
        var g = t.sqrt(t.pow(S - p, 2) + t.pow(C - b, 2) + t.pow(y - P, 2)), A = t.sqrt(t.pow(d - p, 2) + t.pow(f - b, 2) + t.pow(c - P, 2)), T = t.sqrt(t.pow(d - S, 2) + t.pow(f - C, 2) + t.pow(c - y, 2)), x;
        return g > A ? g > T ? x = g - A - T : x = T - A - g : T > A ? x = T - A - g : x = A - g - T, x > -1e-4 && x < 1e-4;
      }
      var s = /* @__PURE__ */ function() {
        return function(p, b, P, S) {
          var C = he(), y, d, f, c, g, A = 0, T, x = [], I = [], j = Mi.newElement();
          for (f = P.length, y = 0; y < C; y += 1) {
            for (g = y / (C - 1), T = 0, d = 0; d < f; d += 1) c = kt(1 - g, 3) * p[d] + 3 * kt(1 - g, 2) * g * P[d] + 3 * (1 - g) * kt(g, 2) * S[d] + kt(g, 3) * b[d], x[d] = c, I[d] !== null && (T += kt(x[d] - I[d], 2)), I[d] = x[d];
            T && (T = di(T), A += T), j.percents[y] = g, j.lengths[y] = A;
          }
          return j.addedLength = A, j;
        };
      }();
      function n(p) {
        var b = Ei.newElement(), P = p.c, S = p.v, C = p.o, y = p.i, d, f = p._length, c = b.lengths, g = 0;
        for (d = 0; d < f - 1; d += 1) c[d] = s(S[d], S[d + 1], C[d], y[d + 1]), g += c[d].addedLength;
        return P && f && (c[d] = s(S[d], S[0], C[d], y[0]), g += c[d].addedLength), b.totalLength = g, b;
      }
      function r(p) {
        this.segmentLength = 0, this.points = new Array(p);
      }
      function o(p, b) {
        this.partialLength = p, this.point = b;
      }
      var u = /* @__PURE__ */ function() {
        var p = {};
        return function(b, P, S, C) {
          var y = (b[0] + "_" + b[1] + "_" + P[0] + "_" + P[1] + "_" + S[0] + "_" + S[1] + "_" + C[0] + "_" + C[1]).replace(/\./g, "p");
          if (!p[y]) {
            var d = he(), f, c, g, A, T, x = 0, I, j, N = null;
            b.length === 2 && (b[0] !== P[0] || b[1] !== P[1]) && e(b[0], b[1], P[0], P[1], b[0] + S[0], b[1] + S[1]) && e(b[0], b[1], P[0], P[1], P[0] + C[0], P[1] + C[1]) && (d = 2);
            var L = new r(d);
            for (g = S.length, f = 0; f < d; f += 1) {
              for (j = $(g), T = f / (d - 1), I = 0, c = 0; c < g; c += 1) A = kt(1 - T, 3) * b[c] + 3 * kt(1 - T, 2) * T * (b[c] + S[c]) + 3 * (1 - T) * kt(T, 2) * (P[c] + C[c]) + kt(T, 3) * P[c], j[c] = A, N !== null && (I += kt(j[c] - N[c], 2));
              I = di(I), x += I, L.points[f] = new o(I, j), N = j;
            }
            L.segmentLength = x, p[y] = L;
          }
          return p[y];
        };
      }();
      function h(p, b) {
        var P = b.percents, S = b.lengths, C = P.length, y = Yt((C - 1) * p), d = p * b.addedLength, f = 0;
        if (y === C - 1 || y === 0 || d === S[y]) return P[y];
        for (var c = S[y] > d ? -1 : 1, g = true; g; ) if (S[y] <= d && S[y + 1] > d ? (f = (d - S[y]) / (S[y + 1] - S[y]), g = false) : y += c, y < 0 || y >= C - 1) {
          if (y === C - 1) return P[y];
          g = false;
        }
        return P[y] + (P[y + 1] - P[y]) * f;
      }
      function m2(p, b, P, S, C, y) {
        var d = h(C, y), f = 1 - d, c = t.round((f * f * f * p[0] + (d * f * f + f * d * f + f * f * d) * P[0] + (d * d * f + f * d * d + d * f * d) * S[0] + d * d * d * b[0]) * 1e3) / 1e3, g = t.round((f * f * f * p[1] + (d * f * f + f * d * f + f * f * d) * P[1] + (d * d * f + f * d * d + d * f * d) * S[1] + d * d * d * b[1]) * 1e3) / 1e3;
        return [c, g];
      }
      var _ = st("float32", 8);
      function M(p, b, P, S, C, y, d) {
        C < 0 ? C = 0 : C > 1 && (C = 1);
        var f = h(C, d);
        y = y > 1 ? 1 : y;
        var c = h(y, d), g, A = p.length, T = 1 - f, x = 1 - c, I = T * T * T, j = f * T * T * 3, N = f * f * T * 3, L = f * f * f, G = T * T * x, O = f * T * x + T * f * x + T * T * c, F = f * f * x + T * f * c + f * T * c, v = f * f * c, k = T * x * x, a = f * x * x + T * c * x + T * x * c, l = f * c * x + T * c * c + f * x * c, E = f * c * c, w = x * x * x, R = c * x * x + x * c * x + x * x * c, q = c * c * x + x * c * c + c * x * c, D = c * c * c;
        for (g = 0; g < A; g += 1) _[g * 4] = t.round((I * p[g] + j * P[g] + N * S[g] + L * b[g]) * 1e3) / 1e3, _[g * 4 + 1] = t.round((G * p[g] + O * P[g] + F * S[g] + v * b[g]) * 1e3) / 1e3, _[g * 4 + 2] = t.round((k * p[g] + a * P[g] + l * S[g] + E * b[g]) * 1e3) / 1e3, _[g * 4 + 3] = t.round((w * p[g] + R * P[g] + q * S[g] + D * b[g]) * 1e3) / 1e3;
        return _;
      }
      return { getSegmentsLength: n, getNewSegment: M, getPointInSegment: m2, buildBezierData: u, pointOnLine2D: e, pointOnLine3D: i };
    }
    var Pt = Fs(), Ht = He, xi = Math.abs;
    function Fi(t, e) {
      var i = this.offsetTime, s;
      this.propType === "multidimensional" && (s = st("float32", this.pv.length));
      for (var n = e.lastIndex, r = n, o = this.keyframes.length - 1, u = true, h, m2, _; u; ) {
        if (h = this.keyframes[r], m2 = this.keyframes[r + 1], r === o - 1 && t >= m2.t - i) {
          h.h && (h = m2), n = 0;
          break;
        }
        if (m2.t - i > t) {
          n = r;
          break;
        }
        r < o - 1 ? r += 1 : (n = 0, u = false);
      }
      _ = this.keyframesMetadata[r] || {};
      var M, p, b, P, S, C, y = m2.t - i, d = h.t - i, f;
      if (h.to) {
        _.bezierData || (_.bezierData = Pt.buildBezierData(h.s, m2.s || h.e, h.to, h.ti));
        var c = _.bezierData;
        if (t >= y || t < d) {
          var g = t >= y ? c.points.length - 1 : 0;
          for (p = c.points[g].point.length, M = 0; M < p; M += 1) s[M] = c.points[g].point[M];
        } else {
          _.__fnct ? C = _.__fnct : (C = ue.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y, h.n).get, _.__fnct = C), b = C((t - d) / (y - d));
          var A = c.segmentLength * b, T, x = e.lastFrame < t && e._lastKeyframeIndex === r ? e._lastAddedLength : 0;
          for (S = e.lastFrame < t && e._lastKeyframeIndex === r ? e._lastPoint : 0, u = true, P = c.points.length; u; ) {
            if (x += c.points[S].partialLength, A === 0 || b === 0 || S === c.points.length - 1) {
              for (p = c.points[S].point.length, M = 0; M < p; M += 1) s[M] = c.points[S].point[M];
              break;
            } else if (A >= x && A < x + c.points[S + 1].partialLength) {
              for (T = (A - x) / c.points[S + 1].partialLength, p = c.points[S].point.length, M = 0; M < p; M += 1) s[M] = c.points[S].point[M] + (c.points[S + 1].point[M] - c.points[S].point[M]) * T;
              break;
            }
            S < P - 1 ? S += 1 : u = false;
          }
          e._lastPoint = S, e._lastAddedLength = x - c.points[S].partialLength, e._lastKeyframeIndex = r;
        }
      } else {
        var I, j, N, L, G;
        if (o = h.s.length, f = m2.s || h.e, this.sh && h.h !== 1) if (t >= y) s[0] = f[0], s[1] = f[1], s[2] = f[2];
        else if (t <= d) s[0] = h.s[0], s[1] = h.s[1], s[2] = h.s[2];
        else {
          var O = Ii(h.s), F = Ii(f), v = (t - d) / (y - d);
          Ls(s, Is(O, F, v));
        }
        else for (r = 0; r < o; r += 1) h.h !== 1 && (t >= y ? b = 1 : t < d ? b = 0 : (h.o.x.constructor === Array ? (_.__fnct || (_.__fnct = []), _.__fnct[r] ? C = _.__fnct[r] : (I = h.o.x[r] === void 0 ? h.o.x[0] : h.o.x[r], j = h.o.y[r] === void 0 ? h.o.y[0] : h.o.y[r], N = h.i.x[r] === void 0 ? h.i.x[0] : h.i.x[r], L = h.i.y[r] === void 0 ? h.i.y[0] : h.i.y[r], C = ue.getBezierEasing(I, j, N, L).get, _.__fnct[r] = C)) : _.__fnct ? C = _.__fnct : (I = h.o.x, j = h.o.y, N = h.i.x, L = h.i.y, C = ue.getBezierEasing(I, j, N, L).get, h.keyframeMetadata = C), b = C((t - d) / (y - d)))), f = m2.s || h.e, G = h.h === 1 ? h.s[r] : h.s[r] + (f[r] - h.s[r]) * b, this.propType === "multidimensional" ? s[r] = G : s = G;
      }
      return e.lastIndex = n, s;
    }
    function Is(t, e, i) {
      var s = [], n = t[0], r = t[1], o = t[2], u = t[3], h = e[0], m2 = e[1], _ = e[2], M = e[3], p, b, P, S, C;
      return b = n * h + r * m2 + o * _ + u * M, b < 0 && (b = -b, h = -h, m2 = -m2, _ = -_, M = -M), 1 - b > 1e-6 ? (p = Math.acos(b), P = Math.sin(p), S = Math.sin((1 - i) * p) / P, C = Math.sin(i * p) / P) : (S = 1 - i, C = i), s[0] = S * n + C * h, s[1] = S * r + C * m2, s[2] = S * o + C * _, s[3] = S * u + C * M, s;
    }
    function Ls(t, e) {
      var i = e[0], s = e[1], n = e[2], r = e[3], o = Math.atan2(2 * s * r - 2 * i * n, 1 - 2 * s * s - 2 * n * n), u = Math.asin(2 * i * s + 2 * n * r), h = Math.atan2(2 * i * r - 2 * s * n, 1 - 2 * i * i - 2 * n * n);
      t[0] = o / J, t[1] = u / J, t[2] = h / J;
    }
    function Ii(t) {
      var e = t[0] * J, i = t[1] * J, s = t[2] * J, n = Math.cos(e / 2), r = Math.cos(i / 2), o = Math.cos(s / 2), u = Math.sin(e / 2), h = Math.sin(i / 2), m2 = Math.sin(s / 2), _ = n * r * o - u * h * m2, M = u * h * o + n * r * m2, p = u * r * o + n * h * m2, b = n * h * o - u * r * m2;
      return [M, p, b, _];
    }
    function Li() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== Ht && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var s = this.interpolateValue(t, this._caching);
        this.pv = s;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function Fe(t) {
      var e;
      if (this.propType === "unidimensional") e = t * this.mult, xi(this.v - e) > 1e-5 && (this.v = e, this._mdf = true);
      else for (var i = 0, s = this.v.length; i < s; ) e = t[i] * this.mult, xi(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = true), i += 1;
    }
    function Ie() {
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
    function Le(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function Vs(t, e, i, s) {
      this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = false, this.elem = t, this.container = s, this.comp = t.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = Ie, this.setVValue = Fe, this.addEffect = Le;
    }
    function Rs(t, e, i, s) {
      this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = false, this.elem = t, this.container = s, this.comp = t.comp, this.k = false, this.kf = false, this.frameId = -1;
      var n, r = e.k.length;
      for (this.v = st("float32", r), this.pv = st("float32", r), this.vel = st("float32", r), n = 0; n < r; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
      this._isFirstFrame = true, this.effectsSequence = [], this.getValue = Ie, this.setVValue = Fe, this.addEffect = Le;
    }
    function Os(t, e, i, s) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: Ht, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = Ht, this.pv = Ht, this._isFirstFrame = true, this.getValue = Ie, this.setVValue = Fe, this.interpolateValue = Fi, this.effectsSequence = [Li.bind(this)], this.addEffect = Le;
    }
    function Bs(t, e, i, s) {
      this.propType = "multidimensional";
      var n, r = e.k.length, o, u, h, m2;
      for (n = 0; n < r - 1; n += 1) e.k[n].to && e.k[n].s && e.k[n + 1] && e.k[n + 1].s && (o = e.k[n].s, u = e.k[n + 1].s, h = e.k[n].to, m2 = e.k[n].ti, (o.length === 2 && !(o[0] === u[0] && o[1] === u[1]) && Pt.pointOnLine2D(o[0], o[1], u[0], u[1], o[0] + h[0], o[1] + h[1]) && Pt.pointOnLine2D(o[0], o[1], u[0], u[1], u[0] + m2[0], u[1] + m2[1]) || o.length === 3 && !(o[0] === u[0] && o[1] === u[1] && o[2] === u[2]) && Pt.pointOnLine3D(o[0], o[1], o[2], u[0], u[1], u[2], o[0] + h[0], o[1] + h[1], o[2] + h[2]) && Pt.pointOnLine3D(o[0], o[1], o[2], u[0], u[1], u[2], u[0] + m2[0], u[1] + m2[1], u[2] + m2[2])) && (e.k[n].to = null, e.k[n].ti = null), o[0] === u[0] && o[1] === u[1] && h[0] === 0 && h[1] === 0 && m2[0] === 0 && m2[1] === 0 && (o.length === 2 || o[2] === u[2] && h[2] === 0 && m2[2] === 0) && (e.k[n].to = null, e.k[n].ti = null));
      this.effectsSequence = [Li.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = Ie, this.setVValue = Fe, this.interpolateValue = Fi, this.frameId = -1;
      var _ = e.k[0].s.length;
      for (this.v = st("float32", _), this.pv = st("float32", _), n = 0; n < _; n += 1) this.v[n] = Ht, this.pv[n] = Ht;
      this._caching = { lastFrame: Ht, lastIndex: 0, value: st("float32", _) }, this.addEffect = Le;
    }
    var V = /* @__PURE__ */ function() {
      function t(i, s, n, r, o) {
        s.sid && (s = i.globalData.slotManager.getProp(s));
        var u;
        if (!s.k.length) u = new Vs(i, s, r, o);
        else if (typeof s.k[0] == "number") u = new Rs(i, s, r, o);
        else switch (n) {
          case 0:
            u = new Os(i, s, r, o);
            break;
          case 1:
            u = new Bs(i, s, r, o);
            break;
        }
        return u.effectsSequence.length && o.addDynamicProperty(u), u;
      }
      var e = { getProp: t };
      return e;
    }();
    function rt() {
    }
    rt.prototype = { addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = true);
    }, iterateDynamicProperties: function() {
      this._mdf = false;
      var e, i = this.dynamicProperties.length;
      for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = true);
    }, initDynamicPropertyContainer: function(e) {
      this.container = e, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
    } };
    var Zt = function() {
      function t() {
        return st("float32", 2);
      }
      return xe(8, t);
    }();
    function Tt() {
      this.c = false, this._length = 0, this._maxLength = 8, this.v = $(this._maxLength), this.o = $(this._maxLength), this.i = $(this._maxLength);
    }
    Tt.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var i = 0; i < e; ) this.v[i] = Zt.newElement(), this.o[i] = Zt.newElement(), this.i[i] = Zt.newElement(), i += 1;
    }, Tt.prototype.setLength = function(t) {
      for (; this._maxLength < t; ) this.doubleArrayLength();
      this._length = t;
    }, Tt.prototype.doubleArrayLength = function() {
      this.v = this.v.concat($(this._maxLength)), this.i = this.i.concat($(this._maxLength)), this.o = this.o.concat($(this._maxLength)), this._maxLength *= 2;
    }, Tt.prototype.setXYAt = function(t, e, i, s, n) {
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
      (!r[s] || r[s] && !n) && (r[s] = Zt.newElement()), r[s][0] = t, r[s][1] = e;
    }, Tt.prototype.setTripleAt = function(t, e, i, s, n, r, o, u) {
      this.setXYAt(t, e, "v", o, u), this.setXYAt(i, s, "o", o, u), this.setXYAt(n, r, "i", o, u);
    }, Tt.prototype.reverse = function() {
      var t = new Tt();
      t.setPathData(this.c, this._length);
      var e = this.v, i = this.o, s = this.i, n = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, false), n = 1);
      var r = this._length - 1, o = this._length, u;
      for (u = n; u < o; u += 1) t.setTripleAt(e[r][0], e[r][1], s[r][0], s[r][1], i[r][0], i[r][1], u, false), r -= 1;
      return t;
    }, Tt.prototype.length = function() {
      return this._length;
    };
    var at = function() {
      function t() {
        return new Tt();
      }
      function e(n) {
        var r = n._length, o;
        for (o = 0; o < r; o += 1) Zt.release(n.v[o]), Zt.release(n.i[o]), Zt.release(n.o[o]), n.v[o] = null, n.i[o] = null, n.o[o] = null;
        n._length = 0, n.c = false;
      }
      function i(n) {
        var r = s.newElement(), o, u = n._length === void 0 ? n.v.length : n._length;
        for (r.setLength(u), r.c = n.c, o = 0; o < u; o += 1) r.setTripleAt(n.v[o][0], n.v[o][1], n.o[o][0], n.o[o][1], n.i[o][0], n.i[o][1], o);
        return r;
      }
      var s = xe(4, t, e);
      return s.clone = i, s;
    }();
    function $e() {
      this._length = 0, this._maxLength = 4, this.shapes = $(this._maxLength);
    }
    $e.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat($(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, $e.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1) at.release(this.shapes[t]);
      this._length = 0;
    };
    var te = function() {
      var t = { newShapeCollection: n, release: r }, e = 0, i = 4, s = $(i);
      function n() {
        var o;
        return e ? (e -= 1, o = s[e]) : o = new $e(), o;
      }
      function r(o) {
        var u, h = o._length;
        for (u = 0; u < h; u += 1) at.release(o.shapes[u]);
        o._length = 0, e === i && (s = Ti.double(s), i *= 2), s[e] = o, e += 1;
      }
      return t;
    }(), Ve = function() {
      var t = -999999;
      function e(y, d, f) {
        var c = f.lastIndex, g, A, T, x, I, j, N, L, G, O = this.keyframes;
        if (y < O[0].t - this.offsetTime) g = O[0].s[0], T = true, c = 0;
        else if (y >= O[O.length - 1].t - this.offsetTime) g = O[O.length - 1].s ? O[O.length - 1].s[0] : O[O.length - 2].e[0], T = true;
        else {
          for (var F = c, v = O.length - 1, k = true, a, l, E; k && (a = O[F], l = O[F + 1], !(l.t - this.offsetTime > y)); ) F < v - 1 ? F += 1 : k = false;
          if (E = this.keyframesMetadata[F] || {}, T = a.h === 1, c = F, !T) {
            if (y >= l.t - this.offsetTime) L = 1;
            else if (y < a.t - this.offsetTime) L = 0;
            else {
              var w;
              E.__fnct ? w = E.__fnct : (w = ue.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y).get, E.__fnct = w), L = w((y - (a.t - this.offsetTime)) / (l.t - this.offsetTime - (a.t - this.offsetTime)));
            }
            A = l.s ? l.s[0] : a.e[0];
          }
          g = a.s[0];
        }
        for (j = d._length, N = g.i[0].length, f.lastIndex = c, x = 0; x < j; x += 1) for (I = 0; I < N; I += 1) G = T ? g.i[x][I] : g.i[x][I] + (A.i[x][I] - g.i[x][I]) * L, d.i[x][I] = G, G = T ? g.o[x][I] : g.o[x][I] + (A.o[x][I] - g.o[x][I]) * L, d.o[x][I] = G, G = T ? g.v[x][I] : g.v[x][I] + (A.v[x][I] - g.v[x][I]) * L, d.v[x][I] = G;
      }
      function i() {
        var y = this.comp.renderedFrame - this.offsetTime, d = this.keyframes[0].t - this.offsetTime, f = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, c = this._caching.lastFrame;
        return c !== t && (c < d && y < d || c > f && y > f) || (this._caching.lastIndex = c < y ? this._caching.lastIndex : 0, this.interpolateShape(y, this.pv, this._caching)), this._caching.lastFrame = y, this.pv;
      }
      function s() {
        this.paths = this.localShapeCollection;
      }
      function n(y, d) {
        if (y._length !== d._length || y.c !== d.c) return false;
        var f, c = y._length;
        for (f = 0; f < c; f += 1) if (y.v[f][0] !== d.v[f][0] || y.v[f][1] !== d.v[f][1] || y.o[f][0] !== d.o[f][0] || y.o[f][1] !== d.o[f][1] || y.i[f][0] !== d.i[f][0] || y.i[f][1] !== d.i[f][1]) return false;
        return true;
      }
      function r(y) {
        n(this.v, y) || (this.v = at.clone(y), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
      }
      function o() {
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
          var d, f = this.effectsSequence.length;
          for (d = 0; d < f; d += 1) y = this.effectsSequence[d](y);
          this.setVValue(y), this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
      }
      function u(y, d, f) {
        this.propType = "shape", this.comp = y.comp, this.container = y, this.elem = y, this.data = d, this.k = false, this.kf = false, this._mdf = false;
        var c = f === 3 ? d.pt.k : d.ks.k;
        this.v = at.clone(c), this.pv = at.clone(this.v), this.localShapeCollection = te.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = [];
      }
      function h(y) {
        this.effectsSequence.push(y), this.container.addDynamicProperty(this);
      }
      u.prototype.interpolateShape = e, u.prototype.getValue = o, u.prototype.setVValue = r, u.prototype.addEffect = h;
      function m2(y, d, f) {
        this.propType = "shape", this.comp = y.comp, this.elem = y, this.container = y, this.offsetTime = y.data.st, this.keyframes = f === 3 ? d.pt.k : d.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
        var c = this.keyframes[0].s[0].i.length;
        this.v = at.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, c), this.pv = at.clone(this.v), this.localShapeCollection = te.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [i.bind(this)];
      }
      m2.prototype.getValue = o, m2.prototype.interpolateShape = e, m2.prototype.setVValue = r, m2.prototype.addEffect = h;
      var _ = function() {
        var y = Rt;
        function d(f, c) {
          this.v = at.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = te.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = c.d, this.elem = f, this.comp = f.comp, this.frameId = -1, this.initDynamicPropertyContainer(f), this.p = V.getProp(f, c.p, 1, 0, this), this.s = V.getProp(f, c.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
        }
        return d.prototype = { reset: s, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var c = this.p.v[0], g = this.p.v[1], A = this.s.v[0] / 2, T = this.s.v[1] / 2, x = this.d !== 3, I = this.v;
          I.v[0][0] = c, I.v[0][1] = g - T, I.v[1][0] = x ? c + A : c - A, I.v[1][1] = g, I.v[2][0] = c, I.v[2][1] = g + T, I.v[3][0] = x ? c - A : c + A, I.v[3][1] = g, I.i[0][0] = x ? c - A * y : c + A * y, I.i[0][1] = g - T, I.i[1][0] = x ? c + A : c - A, I.i[1][1] = g - T * y, I.i[2][0] = x ? c + A * y : c - A * y, I.i[2][1] = g + T, I.i[3][0] = x ? c - A : c + A, I.i[3][1] = g + T * y, I.o[0][0] = x ? c + A * y : c - A * y, I.o[0][1] = g - T, I.o[1][0] = x ? c + A : c - A, I.o[1][1] = g + T * y, I.o[2][0] = x ? c - A * y : c + A * y, I.o[2][1] = g + T, I.o[3][0] = x ? c - A : c + A, I.o[3][1] = g - T * y;
        } }, X([rt], d), d;
      }(), M = function() {
        function y(d, f) {
          this.v = at.newElement(), this.v.setPathData(true, 0), this.elem = d, this.comp = d.comp, this.data = f, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(d), f.sy === 1 ? (this.ir = V.getProp(d, f.ir, 0, 0, this), this.is = V.getProp(d, f.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = V.getProp(d, f.pt, 0, 0, this), this.p = V.getProp(d, f.p, 1, 0, this), this.r = V.getProp(d, f.r, 0, J, this), this.or = V.getProp(d, f.or, 0, 0, this), this.os = V.getProp(d, f.os, 0, 0.01, this), this.localShapeCollection = te.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
        }
        return y.prototype = { reset: s, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var f = Math.floor(this.pt.v) * 2, c = Math.PI * 2 / f, g = true, A = this.or.v, T = this.ir.v, x = this.os.v, I = this.is.v, j = 2 * Math.PI * A / (f * 2), N = 2 * Math.PI * T / (f * 2), L, G, O, F, v = -Math.PI / 2;
          v += this.r.v;
          var k = this.data.d === 3 ? -1 : 1;
          for (this.v._length = 0, L = 0; L < f; L += 1) {
            G = g ? A : T, O = g ? x : I, F = g ? j : N;
            var a = G * Math.cos(v), l = G * Math.sin(v), E = a === 0 && l === 0 ? 0 : l / Math.sqrt(a * a + l * l), w = a === 0 && l === 0 ? 0 : -a / Math.sqrt(a * a + l * l);
            a += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(a, l, a - E * F * O * k, l - w * F * O * k, a + E * F * O * k, l + w * F * O * k, L, true), g = !g, v += c * k;
          }
        }, convertPolygonToPath: function() {
          var f = Math.floor(this.pt.v), c = Math.PI * 2 / f, g = this.or.v, A = this.os.v, T = 2 * Math.PI * g / (f * 4), x, I = -Math.PI * 0.5, j = this.data.d === 3 ? -1 : 1;
          for (I += this.r.v, this.v._length = 0, x = 0; x < f; x += 1) {
            var N = g * Math.cos(I), L = g * Math.sin(I), G = N === 0 && L === 0 ? 0 : L / Math.sqrt(N * N + L * L), O = N === 0 && L === 0 ? 0 : -N / Math.sqrt(N * N + L * L);
            N += +this.p.v[0], L += +this.p.v[1], this.v.setTripleAt(N, L, N - G * T * A * j, L - O * T * A * j, N + G * T * A * j, L + O * T * A * j, x, true), I += c * j;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, X([rt], y), y;
      }(), p = function() {
        function y(d, f) {
          this.v = at.newElement(), this.v.c = true, this.localShapeCollection = te.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = d, this.comp = d.comp, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(d), this.p = V.getProp(d, f.p, 1, 0, this), this.s = V.getProp(d, f.s, 1, 0, this), this.r = V.getProp(d, f.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
        }
        return y.prototype = { convertRectToPath: function() {
          var f = this.p.v[0], c = this.p.v[1], g = this.s.v[0] / 2, A = this.s.v[1] / 2, T = ys(g, A, this.r.v), x = T * (1 - Rt);
          this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(f + g, c - A + T, f + g, c - A + T, f + g, c - A + x, 0, true), this.v.setTripleAt(f + g, c + A - T, f + g, c + A - x, f + g, c + A - T, 1, true), T !== 0 ? (this.v.setTripleAt(f + g - T, c + A, f + g - T, c + A, f + g - x, c + A, 2, true), this.v.setTripleAt(f - g + T, c + A, f - g + x, c + A, f - g + T, c + A, 3, true), this.v.setTripleAt(f - g, c + A - T, f - g, c + A - T, f - g, c + A - x, 4, true), this.v.setTripleAt(f - g, c - A + T, f - g, c - A + x, f - g, c - A + T, 5, true), this.v.setTripleAt(f - g + T, c - A, f - g + T, c - A, f - g + x, c - A, 6, true), this.v.setTripleAt(f + g - T, c - A, f + g - x, c - A, f + g - T, c - A, 7, true)) : (this.v.setTripleAt(f - g, c + A, f - g + x, c + A, f - g, c + A, 2), this.v.setTripleAt(f - g, c - A, f - g, c - A + x, f - g, c - A, 3))) : (this.v.setTripleAt(f + g, c - A + T, f + g, c - A + x, f + g, c - A + T, 0, true), T !== 0 ? (this.v.setTripleAt(f + g - T, c - A, f + g - T, c - A, f + g - x, c - A, 1, true), this.v.setTripleAt(f - g + T, c - A, f - g + x, c - A, f - g + T, c - A, 2, true), this.v.setTripleAt(f - g, c - A + T, f - g, c - A + T, f - g, c - A + x, 3, true), this.v.setTripleAt(f - g, c + A - T, f - g, c + A - x, f - g, c + A - T, 4, true), this.v.setTripleAt(f - g + T, c + A, f - g + T, c + A, f - g + x, c + A, 5, true), this.v.setTripleAt(f + g - T, c + A, f + g - x, c + A, f + g - T, c + A, 6, true), this.v.setTripleAt(f + g, c + A - T, f + g, c + A - T, f + g, c + A - x, 7, true)) : (this.v.setTripleAt(f - g, c - A, f - g + x, c - A, f - g, c - A, 1, true), this.v.setTripleAt(f - g, c + A, f - g, c + A - x, f - g, c + A, 2, true), this.v.setTripleAt(f + g, c + A, f + g - x, c + A, f + g, c + A, 3, true)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: s }, X([rt], y), y;
      }();
      function b(y, d, f) {
        var c;
        if (f === 3 || f === 4) {
          var g = f === 3 ? d.pt : d.ks, A = g.k;
          A.length ? c = new m2(y, d, f) : c = new u(y, d, f);
        } else f === 5 ? c = new p(y, d) : f === 6 ? c = new _(y, d) : f === 7 && (c = new M(y, d));
        return c.k && y.addDynamicProperty(c), c;
      }
      function P() {
        return u;
      }
      function S() {
        return m2;
      }
      var C = {};
      return C.getShapeProp = b, C.getConstructorFunction = P, C.getKeyframedConstructorFunction = S, C;
    }();
    var ot = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, i = Math.tan, s = Math.round;
      function n() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function r(a) {
        if (a === 0) return this;
        var l = t(a), E = e(a);
        return this._t(l, -E, 0, 0, E, l, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function o(a) {
        if (a === 0) return this;
        var l = t(a), E = e(a);
        return this._t(1, 0, 0, 0, 0, l, -E, 0, 0, E, l, 0, 0, 0, 0, 1);
      }
      function u(a) {
        if (a === 0) return this;
        var l = t(a), E = e(a);
        return this._t(l, 0, E, 0, 0, 1, 0, 0, -E, 0, l, 0, 0, 0, 0, 1);
      }
      function h(a) {
        if (a === 0) return this;
        var l = t(a), E = e(a);
        return this._t(l, -E, 0, 0, E, l, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function m2(a, l) {
        return this._t(1, l, a, 1, 0, 0);
      }
      function _(a, l) {
        return this.shear(i(a), i(l));
      }
      function M(a, l) {
        var E = t(l), w = e(l);
        return this._t(E, w, 0, 0, -w, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(a), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(E, -w, 0, 0, w, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function p(a, l, E) {
        return !E && E !== 0 && (E = 1), a === 1 && l === 1 && E === 1 ? this : this._t(a, 0, 0, 0, 0, l, 0, 0, 0, 0, E, 0, 0, 0, 0, 1);
      }
      function b(a, l, E, w, R, q, D, Y, H, et, ut, wt, ct, nt, mt, K) {
        return this.props[0] = a, this.props[1] = l, this.props[2] = E, this.props[3] = w, this.props[4] = R, this.props[5] = q, this.props[6] = D, this.props[7] = Y, this.props[8] = H, this.props[9] = et, this.props[10] = ut, this.props[11] = wt, this.props[12] = ct, this.props[13] = nt, this.props[14] = mt, this.props[15] = K, this;
      }
      function P(a, l, E) {
        return E = E || 0, a !== 0 || l !== 0 || E !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, a, l, E, 1) : this;
      }
      function S(a, l, E, w, R, q, D, Y, H, et, ut, wt, ct, nt, mt, K) {
        var B = this.props;
        if (a === 1 && l === 0 && E === 0 && w === 0 && R === 0 && q === 1 && D === 0 && Y === 0 && H === 0 && et === 0 && ut === 1 && wt === 0) return B[12] = B[12] * a + B[15] * ct, B[13] = B[13] * q + B[15] * nt, B[14] = B[14] * ut + B[15] * mt, B[15] *= K, this._identityCalculated = false, this;
        var xt = B[0], Dt = B[1], Ft = B[2], Ct = B[3], It = B[4], Lt = B[5], vt = B[6], Wt = B[7], Gt = B[8], bt = B[9], Xt = B[10], St = B[11], Qt = B[12], We = B[13], Ge = B[14], Xe = B[15];
        return B[0] = xt * a + Dt * R + Ft * H + Ct * ct, B[1] = xt * l + Dt * q + Ft * et + Ct * nt, B[2] = xt * E + Dt * D + Ft * ut + Ct * mt, B[3] = xt * w + Dt * Y + Ft * wt + Ct * K, B[4] = It * a + Lt * R + vt * H + Wt * ct, B[5] = It * l + Lt * q + vt * et + Wt * nt, B[6] = It * E + Lt * D + vt * ut + Wt * mt, B[7] = It * w + Lt * Y + vt * wt + Wt * K, B[8] = Gt * a + bt * R + Xt * H + St * ct, B[9] = Gt * l + bt * q + Xt * et + St * nt, B[10] = Gt * E + bt * D + Xt * ut + St * mt, B[11] = Gt * w + bt * Y + Xt * wt + St * K, B[12] = Qt * a + We * R + Ge * H + Xe * ct, B[13] = Qt * l + We * q + Ge * et + Xe * nt, B[14] = Qt * E + We * D + Ge * ut + Xe * mt, B[15] = Qt * w + We * Y + Ge * wt + Xe * K, this._identityCalculated = false, this;
      }
      function C(a) {
        var l = a.props;
        return this.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], l[12], l[13], l[14], l[15]);
      }
      function y() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = true), this._identity;
      }
      function d(a) {
        for (var l = 0; l < 16; ) {
          if (a.props[l] !== this.props[l]) return false;
          l += 1;
        }
        return true;
      }
      function f(a) {
        var l;
        for (l = 0; l < 16; l += 1) a.props[l] = this.props[l];
        return a;
      }
      function c(a) {
        var l;
        for (l = 0; l < 16; l += 1) this.props[l] = a[l];
      }
      function g(a, l, E) {
        return { x: a * this.props[0] + l * this.props[4] + E * this.props[8] + this.props[12], y: a * this.props[1] + l * this.props[5] + E * this.props[9] + this.props[13], z: a * this.props[2] + l * this.props[6] + E * this.props[10] + this.props[14] };
      }
      function A(a, l, E) {
        return a * this.props[0] + l * this.props[4] + E * this.props[8] + this.props[12];
      }
      function T(a, l, E) {
        return a * this.props[1] + l * this.props[5] + E * this.props[9] + this.props[13];
      }
      function x(a, l, E) {
        return a * this.props[2] + l * this.props[6] + E * this.props[10] + this.props[14];
      }
      function I() {
        var a = this.props[0] * this.props[5] - this.props[1] * this.props[4], l = this.props[5] / a, E = -this.props[1] / a, w = -this.props[4] / a, R = this.props[0] / a, q = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / a, D = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / a, Y = new ot();
        return Y.props[0] = l, Y.props[1] = E, Y.props[4] = w, Y.props[5] = R, Y.props[12] = q, Y.props[13] = D, Y;
      }
      function j(a) {
        var l = this.getInverseMatrix();
        return l.applyToPointArray(a[0], a[1], a[2] || 0);
      }
      function N(a) {
        var l, E = a.length, w = [];
        for (l = 0; l < E; l += 1) w[l] = j(a[l]);
        return w;
      }
      function L(a, l, E) {
        var w = st("float32", 6);
        if (this.isIdentity()) w[0] = a[0], w[1] = a[1], w[2] = l[0], w[3] = l[1], w[4] = E[0], w[5] = E[1];
        else {
          var R = this.props[0], q = this.props[1], D = this.props[4], Y = this.props[5], H = this.props[12], et = this.props[13];
          w[0] = a[0] * R + a[1] * D + H, w[1] = a[0] * q + a[1] * Y + et, w[2] = l[0] * R + l[1] * D + H, w[3] = l[0] * q + l[1] * Y + et, w[4] = E[0] * R + E[1] * D + H, w[5] = E[0] * q + E[1] * Y + et;
        }
        return w;
      }
      function G(a, l, E) {
        var w;
        return this.isIdentity() ? w = [a, l, E] : w = [a * this.props[0] + l * this.props[4] + E * this.props[8] + this.props[12], a * this.props[1] + l * this.props[5] + E * this.props[9] + this.props[13], a * this.props[2] + l * this.props[6] + E * this.props[10] + this.props[14]], w;
      }
      function O(a, l) {
        if (this.isIdentity()) return a + "," + l;
        var E = this.props;
        return Math.round((a * E[0] + l * E[4] + E[12]) * 100) / 100 + "," + Math.round((a * E[1] + l * E[5] + E[13]) * 100) / 100;
      }
      function F() {
        for (var a = 0, l = this.props, E = "matrix3d(", w = 1e4; a < 16; ) E += s(l[a] * w) / w, E += a === 15 ? ")" : ",", a += 1;
        return E;
      }
      function v(a) {
        var l = 1e4;
        return a < 1e-6 && a > 0 || a > -1e-6 && a < 0 ? s(a * l) / l : a;
      }
      function k() {
        var a = this.props, l = v(a[0]), E = v(a[1]), w = v(a[4]), R = v(a[5]), q = v(a[12]), D = v(a[13]);
        return "matrix(" + l + "," + E + "," + w + "," + R + "," + q + "," + D + ")";
      }
      return function() {
        this.reset = n, this.rotate = r, this.rotateX = o, this.rotateY = u, this.rotateZ = h, this.skew = _, this.skewFromAxis = M, this.shear = m2, this.scale = p, this.setTransform = b, this.translate = P, this.transform = S, this.multiply = C, this.applyToPoint = g, this.applyToX = A, this.applyToY = T, this.applyToZ = x, this.applyToPointArray = G, this.applyToTriplePoints = L, this.applyToPointStringified = O, this.toCSS = F, this.to2dCSS = k, this.clone = f, this.cloneFromProps = c, this.equals = d, this.inversePoints = N, this.inversePoint = j, this.getInverseMatrix = I, this._t = this.transform, this.isIdentity = y, this._identity = true, this._identityCalculated = false, this.props = st("float32", 16), this.reset();
      };
    }();
    function Re(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Re = function(i) {
        return typeof i;
      } : Re = function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, Re(t);
    }
    var Z = {};
    function Ns(t) {
      vs(t);
    }
    function Oi() {
      tt.searchAnimations();
    }
    function zs(t) {
      Ss(t);
    }
    function qs(t) {
      As(t);
    }
    function js(t) {
      return tt.loadAnimation(t);
    }
    function Ds(t) {
      if (typeof t == "string") switch (t) {
        case "high":
          Me(200);
          break;
        default:
        case "medium":
          Me(50);
          break;
        case "low":
          Me(10);
          break;
      }
      else !isNaN(t) && t > 1 && Me(t);
    }
    function Ws() {
      return typeof navigator < "u";
    }
    function Gs(t, e) {
      t === "expressions" && Ps(e);
    }
    function Xs(t) {
      switch (t) {
        case "propertyFactory":
          return V;
        case "shapePropertyFactory":
          return Ve;
        case "matrix":
          return ot;
        default:
          return null;
      }
    }
    Z.play = tt.play, Z.pause = tt.pause, Z.setLocationHref = Ns, Z.togglePause = tt.togglePause, Z.setSpeed = tt.setSpeed, Z.setDirection = tt.setDirection, Z.stop = tt.stop, Z.searchAnimations = Oi, Z.registerAnimation = tt.registerAnimation, Z.loadAnimation = js, Z.setSubframeRendering = zs, Z.resize = tt.resize, Z.goToAndStop = tt.goToAndStop, Z.destroy = tt.destroy, Z.setQuality = Ds, Z.inBrowser = Ws, Z.installPlugin = Gs, Z.freeze = tt.freeze, Z.unfreeze = tt.unfreeze, Z.setVolume = tt.setVolume, Z.mute = tt.mute, Z.unmute = tt.unmute, Z.getRegisteredAnimations = tt.getRegisteredAnimations, Z.useWebWorker = us, Z.setIDPrefix = qs, Z.__getFactory = Xs, Z.version = "5.12.2";
    function Ys() {
      document.readyState === "complete" && (clearInterval(Ks), Oi());
    }
    function Hs(t) {
      for (var e = Bi.split("&"), i = 0; i < e.length; i += 1) {
        var s = e[i].split("=");
        if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1]);
      }
      return null;
    }
    var Bi = "";
    {
      var Ni = document.getElementsByTagName("script"), Zs = Ni.length - 1, zi = Ni[Zs] || { src: "" };
      Bi = zi.src ? zi.src.replace(/^[^\?]+\??/, "") : "", Hs("renderer");
    }
    var Ks = setInterval(Ys, 100);
    try {
      !((typeof we > "u" ? "undefined" : Re(we)) === "object" && typeof Ye < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = Z);
    } catch {
    }
    var Ot = function() {
      var t = {}, e = {};
      t.registerModifier = i, t.getModifier = s;
      function i(n, r) {
        e[n] || (e[n] = r);
      }
      function s(n, r, o) {
        return new e[n](r, o);
      }
      return t;
    }();
    function gt() {
    }
    gt.prototype.initModifierProperties = function() {
    }, gt.prototype.addShapeToModifier = function() {
    }, gt.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = { shape: t.sh, data: t, localShapeCollection: te.newShapeCollection() };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, gt.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = He, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, gt.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, X([rt], gt);
    function _t() {
    }
    X([gt], _t), _t.prototype.initModifierProperties = function(t, e) {
      this.s = V.getProp(t, e.s, 0, 0.01, this), this.e = V.getProp(t, e.e, 0, 0.01, this), this.o = V.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, _t.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, _t.prototype.calculateShapeEdges = function(t, e, i, s, n) {
      var r = [];
      e <= 1 ? r.push({ s: t, e }) : t >= 1 ? r.push({ s: t - 1, e: e - 1 }) : (r.push({ s: t, e: 1 }), r.push({ s: 0, e: e - 1 }));
      var o = [], u, h = r.length, m2;
      for (u = 0; u < h; u += 1) if (m2 = r[u], !(m2.e * n < s || m2.s * n > s + i)) {
        var _, M;
        m2.s * n <= s ? _ = 0 : _ = (m2.s * n - s) / i, m2.e * n >= s + i ? M = 1 : M = (m2.e * n - s) / i, o.push([_, M]);
      }
      return o.length || o.push([0, 0]), o;
    }, _t.prototype.releasePathsData = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) Ei.release(t[e]);
      return t.length = 0, t;
    }, _t.prototype.processShapes = function(t) {
      var e, i;
      if (this._mdf || t) {
        var s = this.o.v % 360 / 360;
        if (s < 0 && (s += 1), this.s.v > 1 ? e = 1 + s : this.s.v < 0 ? e = 0 + s : e = this.s.v + s, this.e.v > 1 ? i = 1 + s : this.e.v < 0 ? i = 0 + s : i = this.e.v + s, e > i) {
          var n = e;
          e = i, i = n;
        }
        e = Math.round(e * 1e4) * 1e-4, i = Math.round(i * 1e4) * 1e-4, this.sValue = e, this.eValue = i;
      } else e = this.sValue, i = this.eValue;
      var r, o, u = this.shapes.length, h, m2, _, M, p, b = 0;
      if (i === e) for (o = 0; o < u; o += 1) this.shapes[o].localShapeCollection.releaseShapes(), this.shapes[o].shape._mdf = true, this.shapes[o].shape.paths = this.shapes[o].localShapeCollection, this._mdf && (this.shapes[o].pathsData.length = 0);
      else if (i === 1 && e === 0 || i === 0 && e === 1) {
        if (this._mdf) for (o = 0; o < u; o += 1) this.shapes[o].pathsData.length = 0, this.shapes[o].shape._mdf = true;
      } else {
        var P = [], S, C;
        for (o = 0; o < u; o += 1) if (S = this.shapes[o], !S.shape._mdf && !this._mdf && !t && this.m !== 2) S.shape.paths = S.localShapeCollection;
        else {
          if (r = S.shape.paths, m2 = r._length, p = 0, !S.shape._mdf && S.pathsData.length) p = S.totalShapeLength;
          else {
            for (_ = this.releasePathsData(S.pathsData), h = 0; h < m2; h += 1) M = Pt.getSegmentsLength(r.shapes[h]), _.push(M), p += M.totalLength;
            S.totalShapeLength = p, S.pathsData = _;
          }
          b += p, S.shape._mdf = true;
        }
        var y = e, d = i, f = 0, c;
        for (o = u - 1; o >= 0; o -= 1) if (S = this.shapes[o], S.shape._mdf) {
          for (C = S.localShapeCollection, C.releaseShapes(), this.m === 2 && u > 1 ? (c = this.calculateShapeEdges(e, i, S.totalShapeLength, f, b), f += S.totalShapeLength) : c = [[y, d]], m2 = c.length, h = 0; h < m2; h += 1) {
            y = c[h][0], d = c[h][1], P.length = 0, d <= 1 ? P.push({ s: S.totalShapeLength * y, e: S.totalShapeLength * d }) : y >= 1 ? P.push({ s: S.totalShapeLength * (y - 1), e: S.totalShapeLength * (d - 1) }) : (P.push({ s: S.totalShapeLength * y, e: S.totalShapeLength }), P.push({ s: 0, e: S.totalShapeLength * (d - 1) }));
            var g = this.addShapes(S, P[0]);
            if (P[0].s !== P[0].e) {
              if (P.length > 1) {
                var A = S.shape.paths.shapes[S.shape.paths._length - 1];
                if (A.c) {
                  var T = g.pop();
                  this.addPaths(g, C), g = this.addShapes(S, P[1], T);
                } else this.addPaths(g, C), g = this.addShapes(S, P[1]);
              }
              this.addPaths(g, C);
            }
          }
          S.shape.paths = C;
        }
      }
    }, _t.prototype.addPaths = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) e.addShape(t[i]);
    }, _t.prototype.addSegment = function(t, e, i, s, n, r, o) {
      n.setXYAt(e[0], e[1], "o", r), n.setXYAt(i[0], i[1], "i", r + 1), o && n.setXYAt(t[0], t[1], "v", r), n.setXYAt(s[0], s[1], "v", r + 1);
    }, _t.prototype.addSegmentFromArray = function(t, e, i, s) {
      e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
    }, _t.prototype.addShapes = function(t, e, i) {
      var s = t.pathsData, n = t.shape.paths.shapes, r, o = t.shape.paths._length, u, h, m2 = 0, _, M, p, b, P = [], S, C = true;
      for (i ? (M = i._length, S = i._length) : (i = at.newElement(), M = 0, S = 0), P.push(i), r = 0; r < o; r += 1) {
        for (p = s[r].lengths, i.c = n[r].c, h = n[r].c ? p.length : p.length + 1, u = 1; u < h; u += 1) if (_ = p[u - 1], m2 + _.addedLength < e.s) m2 += _.addedLength, i.c = false;
        else if (m2 > e.e) {
          i.c = false;
          break;
        } else e.s <= m2 && e.e >= m2 + _.addedLength ? (this.addSegment(n[r].v[u - 1], n[r].o[u - 1], n[r].i[u], n[r].v[u], i, M, C), C = false) : (b = Pt.getNewSegment(n[r].v[u - 1], n[r].v[u], n[r].o[u - 1], n[r].i[u], (e.s - m2) / _.addedLength, (e.e - m2) / _.addedLength, p[u - 1]), this.addSegmentFromArray(b, i, M, C), C = false, i.c = false), m2 += _.addedLength, M += 1;
        if (n[r].c && p.length) {
          if (_ = p[u - 1], m2 <= e.e) {
            var y = p[u - 1].addedLength;
            e.s <= m2 && e.e >= m2 + y ? (this.addSegment(n[r].v[u - 1], n[r].o[u - 1], n[r].i[0], n[r].v[0], i, M, C), C = false) : (b = Pt.getNewSegment(n[r].v[u - 1], n[r].v[0], n[r].o[u - 1], n[r].i[0], (e.s - m2) / y, (e.e - m2) / y, p[u - 1]), this.addSegmentFromArray(b, i, M, C), C = false, i.c = false);
          } else i.c = false;
          m2 += _.addedLength, M += 1;
        }
        if (i._length && (i.setXYAt(i.v[S][0], i.v[S][1], "i", S), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), m2 > e.e) break;
        r < o - 1 && (i = at.newElement(), C = true, P.push(i), M = 0);
      }
      return P;
    };
    function ce() {
    }
    X([gt], ce), ce.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = V.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, ce.prototype.processPath = function(t, e) {
      var i = e / 100, s = [0, 0], n = t._length, r = 0;
      for (r = 0; r < n; r += 1) s[0] += t.v[r][0], s[1] += t.v[r][1];
      s[0] /= n, s[1] /= n;
      var o = at.newElement();
      o.c = t.c;
      var u, h, m2, _, M, p;
      for (r = 0; r < n; r += 1) u = t.v[r][0] + (s[0] - t.v[r][0]) * i, h = t.v[r][1] + (s[1] - t.v[r][1]) * i, m2 = t.o[r][0] + (s[0] - t.o[r][0]) * -i, _ = t.o[r][1] + (s[1] - t.o[r][1]) * -i, M = t.i[r][0] + (s[0] - t.i[r][0]) * -i, p = t.i[r][1] + (s[1] - t.i[r][1]) * -i, o.setTripleAt(u, h, m2, _, M, p, r);
      return o;
    }, ce.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, n, r, o = this.amount.v;
      if (o !== 0) {
        var u, h;
        for (i = 0; i < s; i += 1) {
          if (u = this.shapes[i], h = u.localShapeCollection, !(!u.shape._mdf && !this._mdf && !t)) for (h.releaseShapes(), u.shape._mdf = true, e = u.shape.paths.shapes, r = u.shape.paths._length, n = 0; n < r; n += 1) h.addShape(this.processPath(e[n], o));
          u.shape.paths = u.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    var ti = function() {
      var t = [0, 0];
      function e(h) {
        var m2 = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || m2, this.a && h.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && h.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && h.skewFromAxis(-this.sk.v, this.sa.v), this.r ? h.rotate(-this.r.v) : h.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? h.translate(this.px.v, this.py.v, -this.pz.v) : h.translate(this.px.v, this.py.v, 0) : h.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function i(h) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || h) {
            var m2;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var _, M;
              if (m2 = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (_ = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / m2, 0), M = this.p.getValueAtTime(this.p.keyframes[0].t / m2, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (_ = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / m2, 0), M = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / m2, 0)) : (_ = this.p.pv, M = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / m2, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                _ = [], M = [];
                var p = this.px, b = this.py;
                p._caching.lastFrame + p.offsetTime <= p.keyframes[0].t ? (_[0] = p.getValueAtTime((p.keyframes[0].t + 0.01) / m2, 0), _[1] = b.getValueAtTime((b.keyframes[0].t + 0.01) / m2, 0), M[0] = p.getValueAtTime(p.keyframes[0].t / m2, 0), M[1] = b.getValueAtTime(b.keyframes[0].t / m2, 0)) : p._caching.lastFrame + p.offsetTime >= p.keyframes[p.keyframes.length - 1].t ? (_[0] = p.getValueAtTime(p.keyframes[p.keyframes.length - 1].t / m2, 0), _[1] = b.getValueAtTime(b.keyframes[b.keyframes.length - 1].t / m2, 0), M[0] = p.getValueAtTime((p.keyframes[p.keyframes.length - 1].t - 0.01) / m2, 0), M[1] = b.getValueAtTime((b.keyframes[b.keyframes.length - 1].t - 0.01) / m2, 0)) : (_ = [p.pv, b.pv], M[0] = p.getValueAtTime((p._caching.lastFrame + p.offsetTime - 0.01) / m2, p.offsetTime), M[1] = b.getValueAtTime((b._caching.lastFrame + b.offsetTime - 0.01) / m2, b.offsetTime));
              } else M = t, _ = M;
              this.v.rotate(-Math.atan2(_[1] - M[1], _[0] - M[0]));
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
      function r(h) {
        this._addDynamicProperty(h), this.elem.addDynamicProperty(h), this._isDirty = true;
      }
      function o(h, m2, _) {
        if (this.elem = h, this.frameId = -1, this.propType = "transform", this.data = m2, this.v = new ot(), this.pre = new ot(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(_ || h), m2.p && m2.p.s ? (this.px = V.getProp(h, m2.p.x, 0, 0, this), this.py = V.getProp(h, m2.p.y, 0, 0, this), m2.p.z && (this.pz = V.getProp(h, m2.p.z, 0, 0, this))) : this.p = V.getProp(h, m2.p || { k: [0, 0, 0] }, 1, 0, this), m2.rx) {
          if (this.rx = V.getProp(h, m2.rx, 0, J, this), this.ry = V.getProp(h, m2.ry, 0, J, this), this.rz = V.getProp(h, m2.rz, 0, J, this), m2.or.k[0].ti) {
            var M, p = m2.or.k.length;
            for (M = 0; M < p; M += 1) m2.or.k[M].to = null, m2.or.k[M].ti = null;
          }
          this.or = V.getProp(h, m2.or, 1, J, this), this.or.sh = true;
        } else this.r = V.getProp(h, m2.r || { k: 0 }, 0, J, this);
        m2.sk && (this.sk = V.getProp(h, m2.sk, 0, J, this), this.sa = V.getProp(h, m2.sa, 0, J, this)), this.a = V.getProp(h, m2.a || { k: [0, 0, 0] }, 1, 0, this), this.s = V.getProp(h, m2.s || { k: [100, 100, 100] }, 1, 0.01, this), m2.o ? this.o = V.getProp(h, m2.o, 0, 0.01, h) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
      }
      o.prototype = { applyToMatrix: e, getValue: i, precalculateMatrix: s, autoOrient: n }, X([rt], o), o.prototype.addDynamicProperty = r, o.prototype._addDynamicProperty = rt.prototype.addDynamicProperty;
      function u(h, m2, _) {
        return new o(h, m2, _);
      }
      return { getTransformProperty: u };
    }();
    function At() {
    }
    X([gt], At), At.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = V.getProp(t, e.c, 0, null, this), this.o = V.getProp(t, e.o, 0, null, this), this.tr = ti.getTransformProperty(t, e.tr, this), this.so = V.getProp(t, e.tr.so, 0, 0.01, this), this.eo = V.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new ot(), this.rMatrix = new ot(), this.sMatrix = new ot(), this.tMatrix = new ot(), this.matrix = new ot();
    }, At.prototype.applyTransforms = function(t, e, i, s, n, r) {
      var o = r ? -1 : 1, u = s.s.v[0] + (1 - s.s.v[0]) * (1 - n), h = s.s.v[1] + (1 - s.s.v[1]) * (1 - n);
      t.translate(s.p.v[0] * o * n, s.p.v[1] * o * n, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * o * n), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(r ? 1 / u : u, r ? 1 / h : h), i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
    }, At.prototype.init = function(t, e, i, s) {
      for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0; ) i -= 1, this._elements.unshift(e[i]);
      this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, At.prototype.resetElements = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e]._processed = false, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, At.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, At.prototype.changeGroupRender = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) t[i]._render = e, t[i].ty === "gr" && this.changeGroupRender(t[i].it, e);
    }, At.prototype.processShapes = function(t) {
      var e, i, s, n, r, o = false;
      if (this._mdf || t) {
        var u = Math.ceil(this.c.v);
        if (this._groups.length < u) {
          for (; this._groups.length < u; ) {
            var h = { it: this.cloneElements(this._elements), ty: "gr" };
            h.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), o = true;
        }
        r = 0;
        var m2;
        for (s = 0; s <= this._groups.length - 1; s += 1) {
          if (m2 = r < u, this._groups[s]._render = m2, this.changeGroupRender(this._groups[s].it, m2), !m2) {
            var _ = this.elemsData[s].it, M = _[_.length - 1];
            M.transform.op.v !== 0 ? (M.transform.op._mdf = true, M.transform.op.v = 0) : M.transform.op._mdf = false;
          }
          r += 1;
        }
        this._currentCopies = u;
        var p = this.o.v, b = p % 1, P = p > 0 ? Math.floor(p) : Math.ceil(p), S = this.pMatrix.props, C = this.rMatrix.props, y = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var d = 0;
        if (p > 0) {
          for (; d < P; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), d += 1;
          b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b, false), d += b);
        } else if (p < 0) {
          for (; d > P; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), d -= 1;
          b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b, true), d -= b);
        }
        s = this.data.m === 1 ? 0 : this._currentCopies - 1, n = this.data.m === 1 ? 1 : -1, r = this._currentCopies;
        for (var f, c; r; ) {
          if (e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, c = i.length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), d !== 0) {
            for ((s !== 0 && n === 1 || s !== this._currentCopies - 1 && n === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10], C[11], C[12], C[13], C[14], C[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(S[0], S[1], S[2], S[3], S[4], S[5], S[6], S[7], S[8], S[9], S[10], S[11], S[12], S[13], S[14], S[15]), f = 0; f < c; f += 1) i[f] = this.matrix.props[f];
            this.matrix.reset();
          } else for (this.matrix.reset(), f = 0; f < c; f += 1) i[f] = this.matrix.props[f];
          d += 1, r -= 1, s += n;
        }
      } else for (r = this._currentCopies, s = 0, n = 1; r; ) e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, r -= 1, s += n;
      return o;
    }, At.prototype.addShape = function() {
    };
    function ve() {
    }
    X([gt], ve), ve.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = V.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, ve.prototype.processPath = function(t, e) {
      var i = at.newElement();
      i.c = t.c;
      var s, n = t._length, r, o, u, h, m2, _, M = 0, p, b, P, S, C, y;
      for (s = 0; s < n; s += 1) r = t.v[s], u = t.o[s], o = t.i[s], r[0] === u[0] && r[1] === u[1] && r[0] === o[0] && r[1] === o[1] ? (s === 0 || s === n - 1) && !t.c ? (i.setTripleAt(r[0], r[1], u[0], u[1], o[0], o[1], M), M += 1) : (s === 0 ? h = t.v[n - 1] : h = t.v[s - 1], m2 = Math.sqrt(Math.pow(r[0] - h[0], 2) + Math.pow(r[1] - h[1], 2)), _ = m2 ? Math.min(m2 / 2, e) / m2 : 0, C = r[0] + (h[0] - r[0]) * _, p = C, y = r[1] - (r[1] - h[1]) * _, b = y, P = p - (p - r[0]) * Rt, S = b - (b - r[1]) * Rt, i.setTripleAt(p, b, P, S, C, y, M), M += 1, s === n - 1 ? h = t.v[0] : h = t.v[s + 1], m2 = Math.sqrt(Math.pow(r[0] - h[0], 2) + Math.pow(r[1] - h[1], 2)), _ = m2 ? Math.min(m2 / 2, e) / m2 : 0, P = r[0] + (h[0] - r[0]) * _, p = P, S = r[1] + (h[1] - r[1]) * _, b = S, C = p - (p - r[0]) * Rt, y = b - (b - r[1]) * Rt, i.setTripleAt(p, b, P, S, C, y, M), M += 1) : (i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], M), M += 1);
      return i;
    }, ve.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, n, r, o = this.rd.v;
      if (o !== 0) {
        var u, h;
        for (i = 0; i < s; i += 1) {
          if (u = this.shapes[i], h = u.localShapeCollection, !(!u.shape._mdf && !this._mdf && !t)) for (h.releaseShapes(), u.shape._mdf = true, e = u.shape.paths.shapes, r = u.shape.paths._length, n = 0; n < r; n += 1) h.addShape(this.processPath(e[n], o));
          u.shape.paths = u.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function Be(t, e) {
      return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
    }
    function ei(t) {
      return Math.abs(t) <= 1e-5;
    }
    function qi(t, e, i) {
      return t * (1 - i) + e * i;
    }
    function Bt(t, e, i) {
      return [qi(t[0], e[0], i), qi(t[1], e[1], i)];
    }
    function Us(t, e, i) {
      if (t === 0) return [];
      var s = e * e - 4 * t * i;
      if (s < 0) return [];
      var n = -e / (2 * t);
      if (s === 0) return [n];
      var r = Math.sqrt(s) / (2 * t);
      return [n - r, n + r];
    }
    function ji(t, e, i, s) {
      return [-t + 3 * e - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t];
    }
    function Di(t) {
      return new U(t, t, t, t, false);
    }
    function U(t, e, i, s, n) {
      n && ie(t, e) && (e = Bt(t, s, 1 / 3)), n && ie(i, s) && (i = Bt(t, s, 2 / 3));
      var r = ji(t[0], e[0], i[0], s[0]), o = ji(t[1], e[1], i[1], s[1]);
      this.a = [r[0], o[0]], this.b = [r[1], o[1]], this.c = [r[2], o[2]], this.d = [r[3], o[3]], this.points = [t, e, i, s];
    }
    U.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, U.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, U.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, U.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, U.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (ei(t)) return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (i < 0) return [];
      var s = Math.sqrt(i);
      return ei(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter(function(n) {
        return n > 0 && n < 1;
      });
    }, U.prototype.split = function(t) {
      if (t <= 0) return [Di(this.points[0]), this];
      if (t >= 1) return [this, Di(this.points[this.points.length - 1])];
      var e = Bt(this.points[0], this.points[1], t), i = Bt(this.points[1], this.points[2], t), s = Bt(this.points[2], this.points[3], t), n = Bt(e, i, t), r = Bt(i, s, t), o = Bt(n, r, t);
      return [new U(this.points[0], e, n, o, true), new U(o, r, s, this.points[3], true)];
    };
    function Wi(t, e) {
      var i = t.points[0][e], s = t.points[t.points.length - 1][e];
      if (i > s) {
        var n = s;
        s = i, i = n;
      }
      for (var r = Us(3 * t.a[e], 2 * t.b[e], t.c[e]), o = 0; o < r.length; o += 1) if (r[o] > 0 && r[o] < 1) {
        var u = t.point(r[o])[e];
        u < i ? i = u : u > s && (s = u);
      }
      return { min: i, max: s };
    }
    U.prototype.bounds = function() {
      return { x: Wi(this, 0), y: Wi(this, 1) };
    }, U.prototype.boundingBox = function() {
      var t = this.bounds();
      return { left: t.x.min, right: t.x.max, top: t.y.min, bottom: t.y.max, width: t.x.max - t.x.min, height: t.y.max - t.y.min, cx: (t.x.max + t.x.min) / 2, cy: (t.y.max + t.y.min) / 2 };
    };
    function Ne(t, e, i) {
      var s = t.boundingBox();
      return { cx: s.cx, cy: s.cy, width: s.width, height: s.height, bez: t, t: (e + i) / 2, t1: e, t2: i };
    }
    function Gi(t) {
      var e = t.bez.split(0.5);
      return [Ne(e[0], t.t1, t.t), Ne(e[1], t.t, t.t2)];
    }
    function Js(t, e) {
      return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
    }
    function de(t, e, i, s, n, r) {
      if (Js(t, e)) {
        if (i >= r || t.width <= s && t.height <= s && e.width <= s && e.height <= s) {
          n.push([t.t, e.t]);
          return;
        }
        var o = Gi(t), u = Gi(e);
        de(o[0], u[0], i + 1, s, n, r), de(o[0], u[1], i + 1, s, n, r), de(o[1], u[0], i + 1, s, n, r), de(o[1], u[1], i + 1, s, n, r);
      }
    }
    U.prototype.intersections = function(t, e, i) {
      e === void 0 && (e = 2), i === void 0 && (i = 7);
      var s = [];
      return de(Ne(this, 0, 1), Ne(t, 0, 1), 0, e, s, i), s;
    }, U.shapeSegment = function(t, e) {
      var i = (e + 1) % t.length();
      return new U(t.v[e], t.o[e], t.i[i], t.v[i], true);
    }, U.shapeSegmentInverted = function(t, e) {
      var i = (e + 1) % t.length();
      return new U(t.v[i], t.i[i], t.o[e], t.v[e], true);
    };
    function ii(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function ze(t, e, i, s) {
      var n = [t[0], t[1], 1], r = [e[0], e[1], 1], o = [i[0], i[1], 1], u = [s[0], s[1], 1], h = ii(ii(n, r), ii(o, u));
      return ei(h[2]) ? null : [h[0] / h[2], h[1] / h[2]];
    }
    function ee(t, e, i) {
      return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i];
    }
    function si(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function ie(t, e) {
      return Be(t[0], e[0]) && Be(t[1], e[1]);
    }
    function me() {
    }
    X([gt], me), me.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = V.getProp(t, e.s, 0, null, this), this.frequency = V.getProp(t, e.r, 0, null, this), this.pointsType = V.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function Xi(t, e, i, s, n, r, o) {
      var u = i - Math.PI / 2, h = i + Math.PI / 2, m2 = e[0] + Math.cos(i) * s * n, _ = e[1] - Math.sin(i) * s * n;
      t.setTripleAt(m2, _, m2 + Math.cos(u) * r, _ - Math.sin(u) * r, m2 + Math.cos(h) * o, _ - Math.sin(h) * o, t.length());
    }
    function Qs(t, e) {
      var i = [e[0] - t[0], e[1] - t[1]], s = -Math.PI * 0.5, n = [Math.cos(s) * i[0] - Math.sin(s) * i[1], Math.sin(s) * i[0] + Math.cos(s) * i[1]];
      return n;
    }
    function $s(t, e) {
      var i = e === 0 ? t.length() - 1 : e - 1, s = (e + 1) % t.length(), n = t.v[i], r = t.v[s], o = Qs(n, r);
      return Math.atan2(0, 1) - Math.atan2(o[1], o[0]);
    }
    function Yi(t, e, i, s, n, r, o) {
      var u = $s(e, i), h = e.v[i % e._length], m2 = e.v[i === 0 ? e._length - 1 : i - 1], _ = e.v[(i + 1) % e._length], M = r === 2 ? Math.sqrt(Math.pow(h[0] - m2[0], 2) + Math.pow(h[1] - m2[1], 2)) : 0, p = r === 2 ? Math.sqrt(Math.pow(h[0] - _[0], 2) + Math.pow(h[1] - _[1], 2)) : 0;
      Xi(t, e.v[i % e._length], u, o, s, p / ((n + 1) * 2), M / ((n + 1) * 2));
    }
    function tr(t, e, i, s, n, r) {
      for (var o = 0; o < s; o += 1) {
        var u = (o + 1) / (s + 1), h = n === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, m2 = e.normalAngle(u), _ = e.point(u);
        Xi(t, _, m2, r, i, h / ((s + 1) * 2), h / ((s + 1) * 2)), r = -r;
      }
      return r;
    }
    me.prototype.processPath = function(t, e, i, s) {
      var n = t._length, r = at.newElement();
      if (r.c = t.c, t.c || (n -= 1), n === 0) return r;
      var o = -1, u = U.shapeSegment(t, 0);
      Yi(r, t, 0, e, i, s, o);
      for (var h = 0; h < n; h += 1) o = tr(r, u, e, i, s, -o), h === n - 1 && !t.c ? u = null : u = U.shapeSegment(t, (h + 1) % n), Yi(r, t, h + 1, e, i, s, o);
      return r;
    }, me.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, n, r, o = this.amplitude.v, u = Math.max(0, Math.round(this.frequency.v)), h = this.pointsType.v;
      if (o !== 0) {
        var m2, _;
        for (i = 0; i < s; i += 1) {
          if (m2 = this.shapes[i], _ = m2.localShapeCollection, !(!m2.shape._mdf && !this._mdf && !t)) for (_.releaseShapes(), m2.shape._mdf = true, e = m2.shape.paths.shapes, r = m2.shape.paths._length, n = 0; n < r; n += 1) _.addShape(this.processPath(e[n], o, u, h));
          m2.shape.paths = m2.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function ri(t, e, i) {
      var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [ee(t, s, i), ee(e, s, i)];
    }
    function se(t, e) {
      var i, s, n, r, o, u, h;
      h = ri(t.points[0], t.points[1], e), i = h[0], s = h[1], h = ri(t.points[1], t.points[2], e), n = h[0], r = h[1], h = ri(t.points[2], t.points[3], e), o = h[0], u = h[1];
      var m2 = ze(i, s, n, r);
      m2 === null && (m2 = s);
      var _ = ze(o, u, n, r);
      return _ === null && (_ = o), new U(i, m2, _, u);
    }
    function Hi(t, e, i, s, n) {
      var r = e.points[3], o = i.points[0];
      if (s === 3 || ie(r, o)) return r;
      if (s === 2) {
        var u = -e.tangentAngle(1), h = -i.tangentAngle(0) + Math.PI, m2 = ze(r, ee(r, u + Math.PI / 2, 100), o, ee(o, u + Math.PI / 2, 100)), _ = m2 ? si(m2, r) : si(r, o) / 2, M = ee(r, u, 2 * _ * Rt);
        return t.setXYAt(M[0], M[1], "o", t.length() - 1), M = ee(o, h, 2 * _ * Rt), t.setTripleAt(o[0], o[1], o[0], o[1], M[0], M[1], t.length()), o;
      }
      var p = ie(r, e.points[2]) ? e.points[0] : e.points[2], b = ie(o, i.points[1]) ? i.points[3] : i.points[1], P = ze(p, r, o, b);
      return P && si(P, r) < n ? (t.setTripleAt(P[0], P[1], P[0], P[1], P[0], P[1], t.length()), P) : r;
    }
    function Zi(t, e) {
      var i = t.intersections(e);
      return i.length && Be(i[0][0], 1) && i.shift(), i.length ? i[0] : null;
    }
    function Ki(t, e) {
      var i = t.slice(), s = e.slice(), n = Zi(t[t.length - 1], e[0]);
      return n && (i[t.length - 1] = t[t.length - 1].split(n[0])[0], s[0] = e[0].split(n[1])[1]), t.length > 1 && e.length > 1 && (n = Zi(t[0], e[e.length - 1]), n) ? [[t[0].split(n[0])[0]], [e[e.length - 1].split(n[1])[1]]] : [i, s];
    }
    function er(t) {
      for (var e, i = 1; i < t.length; i += 1) e = Ki(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
      return t.length > 1 && (e = Ki(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function Ui(t, e) {
      var i = t.inflectionPoints(), s, n, r, o;
      if (i.length === 0) return [se(t, e)];
      if (i.length === 1 || Be(i[1], 1)) return r = t.split(i[0]), s = r[0], n = r[1], [se(s, e), se(n, e)];
      r = t.split(i[0]), s = r[0];
      var u = (i[1] - i[0]) / (1 - i[0]);
      return r = r[1].split(u), o = r[0], n = r[1], [se(s, e), se(o, e), se(n, e)];
    }
    function ge() {
    }
    X([gt], ge), ge.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = V.getProp(t, e.a, 0, null, this), this.miterLimit = V.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, ge.prototype.processPath = function(t, e, i, s) {
      var n = at.newElement();
      n.c = t.c;
      var r = t.length();
      t.c || (r -= 1);
      var o, u, h, m2 = [];
      for (o = 0; o < r; o += 1) h = U.shapeSegment(t, o), m2.push(Ui(h, e));
      if (!t.c) for (o = r - 1; o >= 0; o -= 1) h = U.shapeSegmentInverted(t, o), m2.push(Ui(h, e));
      m2 = er(m2);
      var _ = null, M = null;
      for (o = 0; o < m2.length; o += 1) {
        var p = m2[o];
        for (M && (_ = Hi(n, M, p[0], i, s)), M = p[p.length - 1], u = 0; u < p.length; u += 1) h = p[u], _ && ie(h.points[0], _) ? n.setXYAt(h.points[1][0], h.points[1][1], "o", n.length() - 1) : n.setTripleAt(h.points[0][0], h.points[0][1], h.points[1][0], h.points[1][1], h.points[0][0], h.points[0][1], n.length()), n.setTripleAt(h.points[3][0], h.points[3][1], h.points[3][0], h.points[3][1], h.points[2][0], h.points[2][1], n.length()), _ = h.points[3];
      }
      return m2.length && Hi(n, M, m2[0][0], i, s), n;
    }, ge.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, n, r, o = this.amount.v, u = this.miterLimit.v, h = this.lineJoin;
      if (o !== 0) {
        var m2, _;
        for (i = 0; i < s; i += 1) {
          if (m2 = this.shapes[i], _ = m2.localShapeCollection, !(!m2.shape._mdf && !this._mdf && !t)) for (_.releaseShapes(), m2.shape._mdf = true, e = m2.shape.paths.shapes, r = m2.shape.paths._length, n = 0; n < r; n += 1) _.addShape(this.processPath(e[n], o, h, u));
          m2.shape.paths = m2.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function Ji(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", n = e.length, r, o = 0; o < n; o += 1) switch (r = e[o].toLowerCase(), r) {
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
    var Kt = function() {
      var t = 5e3, e = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, i = [];
      i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var s = 127988, n = 917631, r = 917601, o = 917626, u = 65039, h = 8205, m2 = 127462, _ = 127487, M = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function p(v) {
        var k = v.split(","), a, l = k.length, E = [];
        for (a = 0; a < l; a += 1) k[a] !== "sans-serif" && k[a] !== "monospace" && E.push(k[a]);
        return E.join(",");
      }
      function b(v, k) {
        var a = Vt("span");
        a.setAttribute("aria-hidden", true), a.style.fontFamily = k;
        var l = Vt("span");
        l.innerText = "giItT1WQy@!-/#", a.style.position = "absolute", a.style.left = "-10000px", a.style.top = "-10000px", a.style.fontSize = "300px", a.style.fontVariant = "normal", a.style.fontStyle = "normal", a.style.fontWeight = "normal", a.style.letterSpacing = "0", a.appendChild(l), document.body.appendChild(a);
        var E = l.offsetWidth;
        return l.style.fontFamily = p(v) + ", " + k, { node: l, w: E, parent: a };
      }
      function P() {
        var v, k = this.fonts.length, a, l, E = k;
        for (v = 0; v < k; v += 1) this.fonts[v].loaded ? E -= 1 : this.fonts[v].fOrigin === "n" || this.fonts[v].origin === 0 ? this.fonts[v].loaded = true : (a = this.fonts[v].monoCase.node, l = this.fonts[v].monoCase.w, a.offsetWidth !== l ? (E -= 1, this.fonts[v].loaded = true) : (a = this.fonts[v].sansCase.node, l = this.fonts[v].sansCase.w, a.offsetWidth !== l && (E -= 1, this.fonts[v].loaded = true)), this.fonts[v].loaded && (this.fonts[v].sansCase.parent.parentNode.removeChild(this.fonts[v].sansCase.parent), this.fonts[v].monoCase.parent.parentNode.removeChild(this.fonts[v].monoCase.parent)));
        E !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function S(v, k) {
        var a = document.body && k ? "svg" : "canvas", l, E = Ji(v);
        if (a === "svg") {
          var w = W("text");
          w.style.fontSize = "100px", w.setAttribute("font-family", v.fFamily), w.setAttribute("font-style", E.style), w.setAttribute("font-weight", E.weight), w.textContent = "1", v.fClass ? (w.style.fontFamily = "inherit", w.setAttribute("class", v.fClass)) : w.style.fontFamily = v.fFamily, k.appendChild(w), l = w;
        } else {
          var R = new OffscreenCanvas(500, 500).getContext("2d");
          R.font = E.style + " " + E.weight + " 100px " + v.fFamily, l = R;
        }
        function q(D) {
          return a === "svg" ? (l.textContent = D, l.getComputedTextLength()) : l.measureText(D).width;
        }
        return { measureText: q };
      }
      function C(v, k) {
        if (!v) {
          this.isLoaded = true;
          return;
        }
        if (this.chars) {
          this.isLoaded = true, this.fonts = v.list;
          return;
        }
        if (!document.body) {
          this.isLoaded = true, v.list.forEach(function(ut) {
            ut.helper = S(ut), ut.cache = {};
          }), this.fonts = v.list;
          return;
        }
        var a = v.list, l, E = a.length, w = E;
        for (l = 0; l < E; l += 1) {
          var R = true, q, D;
          if (a[l].loaded = false, a[l].monoCase = b(a[l].fFamily, "monospace"), a[l].sansCase = b(a[l].fFamily, "sans-serif"), !a[l].fPath) a[l].loaded = true, w -= 1;
          else if (a[l].fOrigin === "p" || a[l].origin === 3) {
            if (q = document.querySelectorAll('style[f-forigin="p"][f-family="' + a[l].fFamily + '"], style[f-origin="3"][f-family="' + a[l].fFamily + '"]'), q.length > 0 && (R = false), R) {
              var Y = Vt("style");
              Y.setAttribute("f-forigin", a[l].fOrigin), Y.setAttribute("f-origin", a[l].origin), Y.setAttribute("f-family", a[l].fFamily), Y.type = "text/css", Y.innerText = "@font-face {font-family: " + a[l].fFamily + "; font-style: normal; src: url('" + a[l].fPath + "');}", k.appendChild(Y);
            }
          } else if (a[l].fOrigin === "g" || a[l].origin === 1) {
            for (q = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), D = 0; D < q.length; D += 1) q[D].href.indexOf(a[l].fPath) !== -1 && (R = false);
            if (R) {
              var H = Vt("link");
              H.setAttribute("f-forigin", a[l].fOrigin), H.setAttribute("f-origin", a[l].origin), H.type = "text/css", H.rel = "stylesheet", H.href = a[l].fPath, document.body.appendChild(H);
            }
          } else if (a[l].fOrigin === "t" || a[l].origin === 2) {
            for (q = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), D = 0; D < q.length; D += 1) a[l].fPath === q[D].src && (R = false);
            if (R) {
              var et = Vt("link");
              et.setAttribute("f-forigin", a[l].fOrigin), et.setAttribute("f-origin", a[l].origin), et.setAttribute("rel", "stylesheet"), et.setAttribute("href", a[l].fPath), k.appendChild(et);
            }
          }
          a[l].helper = S(a[l], k), a[l].cache = {}, this.fonts.push(a[l]);
        }
        w === 0 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function y(v) {
        if (v) {
          this.chars || (this.chars = []);
          var k, a = v.length, l, E = this.chars.length, w;
          for (k = 0; k < a; k += 1) {
            for (l = 0, w = false; l < E; ) this.chars[l].style === v[k].style && this.chars[l].fFamily === v[k].fFamily && this.chars[l].ch === v[k].ch && (w = true), l += 1;
            w || (this.chars.push(v[k]), E += 1);
          }
        }
      }
      function d(v, k, a) {
        for (var l = 0, E = this.chars.length; l < E; ) {
          if (this.chars[l].ch === v && this.chars[l].style === k && this.chars[l].fFamily === a) return this.chars[l];
          l += 1;
        }
        return (typeof v == "string" && v.charCodeAt(0) !== 13 || !v) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", v, k, a)), e;
      }
      function f(v, k, a) {
        var l = this.getFontByName(k), E = v;
        if (!l.cache[E]) {
          var w = l.helper;
          if (v === " ") {
            var R = w.measureText("|" + v + "|"), q = w.measureText("||");
            l.cache[E] = (R - q) / 100;
          } else l.cache[E] = w.measureText(v) / 100;
        }
        return l.cache[E] * a;
      }
      function c(v) {
        for (var k = 0, a = this.fonts.length; k < a; ) {
          if (this.fonts[k].fName === v) return this.fonts[k];
          k += 1;
        }
        return this.fonts[0];
      }
      function g(v) {
        var k = 0, a = v.charCodeAt(0);
        if (a >= 55296 && a <= 56319) {
          var l = v.charCodeAt(1);
          l >= 56320 && l <= 57343 && (k = (a - 55296) * 1024 + l - 56320 + 65536);
        }
        return k;
      }
      function A(v, k) {
        var a = v.toString(16) + k.toString(16);
        return M.indexOf(a) !== -1;
      }
      function T(v) {
        return v === h;
      }
      function x(v) {
        return v === u;
      }
      function I(v) {
        var k = g(v);
        return k >= m2 && k <= _;
      }
      function j(v) {
        return I(v.substr(0, 2)) && I(v.substr(2, 2));
      }
      function N(v) {
        return i.indexOf(v) !== -1;
      }
      function L(v, k) {
        var a = g(v.substr(k, 2));
        if (a !== s) return false;
        var l = 0;
        for (k += 2; l < 5; ) {
          if (a = g(v.substr(k, 2)), a < r || a > o) return false;
          l += 1, k += 2;
        }
        return g(v.substr(k, 2)) === n;
      }
      function G() {
        this.isLoaded = true;
      }
      var O = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      O.isModifier = A, O.isZeroWidthJoiner = T, O.isFlagEmoji = j, O.isRegionalCode = I, O.isCombinedCharacter = N, O.isRegionalFlag = L, O.isVariationSelector = x, O.BLACK_FLAG_CODE_POINT = s;
      var F = { addChars: y, addFonts: C, getCharData: d, getFontByName: c, measureText: f, checkLoadedFonts: P, setIsLoaded: G };
      return O.prototype = F, O;
    }();
    function Qi(t) {
      this.animationData = t;
    }
    Qi.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    };
    function ir(t) {
      return new Qi(t);
    }
    function qe() {
    }
    qe.prototype = { initRenderable: function() {
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
    var ni = /* @__PURE__ */ function() {
      var t = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" };
      return function(e) {
        return t[e] || "";
      };
    }();
    function sr(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function rr(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function nr(t, e, i) {
      this.p = V.getProp(e, t.v, 1, 0, i);
    }
    function ar(t, e, i) {
      this.p = V.getProp(e, t.v, 1, 0, i);
    }
    function or(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function hr(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function lr(t, e, i) {
      this.p = V.getProp(e, t.v, 0, 0, i);
    }
    function fr() {
      this.p = {};
    }
    function $i(t, e) {
      var i = t.ef || [];
      this.effectElements = [];
      var s, n = i.length, r;
      for (s = 0; s < n; s += 1) r = new ye(i[s], e), this.effectElements.push(r);
    }
    function ye(t, e) {
      this.init(t, e);
    }
    X([rt], ye), ye.prototype.getValue = ye.prototype.iterateDynamicProperties, ye.prototype.init = function(t, e) {
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var i, s = this.data.ef.length, n, r = this.data.ef;
      for (i = 0; i < s; i += 1) {
        switch (n = null, r[i].ty) {
          case 0:
            n = new sr(r[i], e, this);
            break;
          case 1:
            n = new rr(r[i], e, this);
            break;
          case 2:
            n = new nr(r[i], e, this);
            break;
          case 3:
            n = new ar(r[i], e, this);
            break;
          case 4:
          case 7:
            n = new lr(r[i], e, this);
            break;
          case 10:
            n = new or(r[i], e, this);
            break;
          case 11:
            n = new hr(r[i], e, this);
            break;
          case 5:
            n = new $i(r[i], e);
            break;
          default:
            n = new fr(r[i]);
            break;
        }
        n && this.effectElements.push(n);
      }
    };
    function Nt() {
    }
    Nt.prototype = { checkMasks: function() {
      if (!this.data.hasMask) return false;
      for (var e = 0, i = this.data.masksProperties.length; e < i; ) {
        if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== false) return true;
        e += 1;
      }
      return false;
    }, initExpressions: function() {
    }, setBlendMode: function() {
      var e = ni(this.data.bm), i = this.baseElement || this.layerElement;
      i.style["mix-blend-mode"] = e;
    }, initBaseData: function(e, i, s) {
      this.globalData = i, this.comp = s, this.data = e, this.layerId = ft(), this.data.sr || (this.data.sr = 1), this.effectsManager = new $i(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } };
    function zt() {
    }
    zt.prototype = { initFrame: function() {
      this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
    }, prepareProperties: function(e, i) {
      var s, n = this.dynamicProperties.length;
      for (s = 0; s < n; s += 1) (i || this._isParent && this.dynamicProperties[s].propType === "transform") && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = true, this._mdf = true));
    }, addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
    } };
    function qt(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i);
    }
    qt.prototype.prepareFrame = function() {
    }, X([qe, Nt, zt], qt), qt.prototype.getBaseElement = function() {
      return null;
    }, qt.prototype.renderFrame = function() {
    }, qt.prototype.destroy = function() {
    }, qt.prototype.initExpressions = function() {
    }, qt.prototype.getFootageData = function() {
      return this.footageData;
    };
    function pt(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = false, this._canPlay = false;
      var s = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? V.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true }, this.lv = V.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this);
    }
    pt.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder) this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var i = this._volume * this._volumeMultiplier;
      this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i));
    }, X([qe, Nt, zt], pt), pt.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
    }, pt.prototype.show = function() {
    }, pt.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = false;
    }, pt.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = false, this._canPlay = false;
    }, pt.prototype.resume = function() {
      this._canPlay = true;
    }, pt.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, pt.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, pt.prototype.getBaseElement = function() {
      return null;
    }, pt.prototype.destroy = function() {
    }, pt.prototype.sourceRectAtTime = function() {
    }, pt.prototype.initExpressions = function() {
    };
    function ht() {
    }
    ht.prototype.checkLayers = function(t) {
      var e, i = this.layers.length, s;
      for (this.completeLayers = true, e = i - 1; e >= 0; e -= 1) this.elements[e] || (s = this.layers[e], s.ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : false;
      this.checkPendingElements();
    }, ht.prototype.createItem = function(t) {
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
    }, ht.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, ht.prototype.createAudio = function(t) {
      return new pt(t, this.globalData, this);
    }, ht.prototype.createFootage = function(t) {
      return new qt(t, this.globalData, this);
    }, ht.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements();
    }, ht.prototype.includeLayers = function(t) {
      this.completeLayers = false;
      var e, i = t.length, s, n = this.layers.length;
      for (e = 0; e < i; e += 1) for (s = 0; s < n; ) {
        if (this.layers[s].id === t[e].id) {
          this.layers[s] = t[e];
          break;
        }
        s += 1;
      }
    }, ht.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, ht.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, ht.prototype.buildElementParenting = function(t, e, i) {
      for (var s = this.elements, n = this.layers, r = 0, o = n.length; r < o; ) n[r].ind == e && (!s[r] || s[r] === true ? (this.buildItem(r), this.addPendingElement(t)) : (i.push(s[r]), s[r].setAsParent(), n[r].parent !== void 0 ? this.buildElementParenting(t, n[r].parent, i) : t.setHierarchy(i))), r += 1;
    }, ht.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, ht.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) if (t[e].xt) {
        var s = this.createComp(t[e]);
        s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
      }
    }, ht.prototype.getElementById = function(t) {
      var e, i = this.elements.length;
      for (e = 0; e < i; e += 1) if (this.elements[e].data.ind === t) return this.elements[e];
      return null;
    }, ht.prototype.getElementByPath = function(t) {
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
    }, ht.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new Kt(), this.globalData.slotManager = ir(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
    };
    var pr = { TRANSFORM_EFFECT: "transformEFfect" };
    function re() {
    }
    re.prototype = { initTransform: function() {
      var e = new ot();
      this.finalTransform = { mProp: this.data.ks ? ti.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: false, _localMatMdf: false, _opMdf: false, mat: e, localMat: e, localOpacity: 1 }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
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
        var e = this.renderableEffectsManager.getEffects(pr.TRANSFORM_EFFECT);
        if (e.length) {
          this.localTransforms = [], this.finalTransform.localMat = new ot();
          var i = 0, s = e.length;
          for (i = 0; i < s; i += 1) this.localTransforms.push(e[i]);
        }
      }
    }, globalToLocal: function(e) {
      var i = [];
      i.push(this.finalTransform);
      for (var s = true, n = this.comp; s; ) n.finalTransform ? (n.data.hasMask && i.splice(0, 0, n.finalTransform), n = n.comp) : s = false;
      var r, o = i.length, u;
      for (r = 0; r < o; r += 1) u = i[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - u[0], e[1] - u[1], 0];
      return e;
    }, mHelper: new ot() };
    function Ut(t, e, i) {
      this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var s = this.globalData.defs, n, r = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = $(r), this.solidPath = "";
      var o, u = this.masksProperties, h = 0, m2 = [], _, M, p = ft(), b, P, S, C, y = "clipPath", d = "clip-path";
      for (n = 0; n < r; n += 1) if ((u[n].mode !== "a" && u[n].mode !== "n" || u[n].inv || u[n].o.k !== 100 || u[n].o.x) && (y = "mask", d = "mask"), (u[n].mode === "s" || u[n].mode === "i") && h === 0 ? (b = W("rect"), b.setAttribute("fill", "#ffffff"), b.setAttribute("width", this.element.comp.data.w || 0), b.setAttribute("height", this.element.comp.data.h || 0), m2.push(b)) : b = null, o = W("path"), u[n].mode === "n") this.viewData[n] = { op: V.getProp(this.element, u[n].o, 0, 0.01, this.element), prop: Ve.getShapeProp(this.element, u[n], 3), elem: o, lastPath: "" }, s.appendChild(o);
      else {
        h += 1, o.setAttribute("fill", u[n].mode === "s" ? "#000000" : "#ffffff"), o.setAttribute("clip-rule", "nonzero");
        var f;
        if (u[n].x.k !== 0 ? (y = "mask", d = "mask", C = V.getProp(this.element, u[n].x, 0, null, this.element), f = ft(), P = W("filter"), P.setAttribute("id", f), S = W("feMorphology"), S.setAttribute("operator", "erode"), S.setAttribute("in", "SourceGraphic"), S.setAttribute("radius", "0"), P.appendChild(S), s.appendChild(P), o.setAttribute("stroke", u[n].mode === "s" ? "#000000" : "#ffffff")) : (S = null, C = null), this.storedData[n] = { elem: o, x: C, expan: S, lastPath: "", lastOperator: "", filterId: f, lastRadius: 0 }, u[n].mode === "i") {
          M = m2.length;
          var c = W("g");
          for (_ = 0; _ < M; _ += 1) c.appendChild(m2[_]);
          var g = W("mask");
          g.setAttribute("mask-type", "alpha"), g.setAttribute("id", p + "_" + h), g.appendChild(o), s.appendChild(g), c.setAttribute("mask", "url(" + dt() + "#" + p + "_" + h + ")"), m2.length = 0, m2.push(c);
        } else m2.push(o);
        u[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = { elem: o, lastPath: "", op: V.getProp(this.element, u[n].o, 0, 0.01, this.element), prop: Ve.getShapeProp(this.element, u[n], 3), invRect: b }, this.viewData[n].prop.k || this.drawPath(u[n], this.viewData[n].prop.v, this.viewData[n]);
      }
      for (this.maskElement = W(y), r = m2.length, n = 0; n < r; n += 1) this.maskElement.appendChild(m2[n]);
      h > 0 && (this.maskElement.setAttribute("id", p), this.element.maskedElement.setAttribute(d, "url(" + dt() + "#" + p + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    Ut.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, Ut.prototype.renderFrame = function(t) {
      var e = this.element.finalTransform.mat, i, s = this.masksProperties.length;
      for (i = 0; i < s; i += 1) if ((this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), this.masksProperties[i].mode !== "n" && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[i].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || t))) {
        var n = this.storedData[i].expan;
        this.storedData[i].x.v < 0 ? (this.storedData[i].lastOperator !== "erode" && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + dt() + "#" + this.storedData[i].filterId + ")")), n.setAttribute("radius", -this.storedData[i].x.v)) : (this.storedData[i].lastOperator !== "dilate" && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2));
      }
    }, Ut.prototype.getMaskelement = function() {
      return this.maskElement;
    }, Ut.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
    }, Ut.prototype.drawPath = function(t, e, i) {
      var s = " M" + e.v[0][0] + "," + e.v[0][1], n, r;
      for (r = e._length, n = 1; n < r; n += 1) s += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[n][0] + "," + e.i[n][1] + " " + e.v[n][0] + "," + e.v[n][1];
      if (e.c && r > 1 && (s += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
        var o = "";
        i.elem && (e.c && (o = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", o)), i.lastPath = s;
      }
    }, Ut.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var _e = function() {
      var t = {};
      t.createFilter = e, t.createAlphaToLuminanceFilter = i;
      function e(s, n) {
        var r = W("filter");
        return r.setAttribute("id", s), n !== true && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r;
      }
      function i() {
        var s = W("feColorMatrix");
        return s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), s;
      }
      return t;
    }(), ts = function() {
      var t = { maskType: true, svgLumaHidden: true, offscreenCanvas: typeof OffscreenCanvas < "u" };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = false), t;
    }(), je = {}, es = "filter_result_";
    function ai(t) {
      var e, i = "SourceGraphic", s = t.data.ef ? t.data.ef.length : 0, n = ft(), r = _e.createFilter(n, true), o = 0;
      this.filters = [];
      var u;
      for (e = 0; e < s; e += 1) {
        u = null;
        var h = t.data.ef[e].ty;
        if (je[h]) {
          var m2 = je[h].effect;
          u = new m2(r, t.effectsManager.effectElements[e], t, es + o, i), i = es + o, je[h].countsAsEffect && (o += 1);
        }
        u && this.filters.push(u);
      }
      o && (t.globalData.defs.appendChild(r), t.layerElement.setAttribute("filter", "url(" + dt() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    ai.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
    }, ai.prototype.getEffects = function(t) {
      var e, i = this.filters.length, s = [];
      for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
      return s;
    };
    function be() {
    }
    be.prototype = { initRendererElement: function() {
      this.layerElement = W("g");
    }, createContainerElements: function() {
      this.matteElement = W("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
      var e = null;
      if (this.data.td) {
        this.matteMasks = {};
        var i = W("g");
        i.setAttribute("id", this.layerId), i.appendChild(this.layerElement), e = i, this.globalData.defs.appendChild(i);
      } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
        var s = W("clipPath"), n = W("path");
        n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var r = ft();
        if (s.setAttribute("id", r), s.appendChild(n), this.globalData.defs.appendChild(s), this.checkMasks()) {
          var o = W("g");
          o.setAttribute("clip-path", "url(" + dt() + "#" + r + ")"), o.appendChild(this.layerElement), this.transformedElement = o, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else this.layerElement.setAttribute("clip-path", "url(" + dt() + "#" + r + ")");
      }
      this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new Ut(this.data, this, this.globalData), this.renderableEffectsManager = new ai(this), this.searchEffectTransforms();
    }, getMatte: function(e) {
      if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
        var i = this.layerId + "_" + e, s, n, r, o;
        if (e === 1 || e === 3) {
          var u = W("mask");
          u.setAttribute("id", i), u.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), r = W("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), u.appendChild(r), this.globalData.defs.appendChild(u), !ts.maskType && e === 1 && (u.setAttribute("mask-type", "luminance"), s = ft(), n = _e.createFilter(s), this.globalData.defs.appendChild(n), n.appendChild(_e.createAlphaToLuminanceFilter()), o = W("g"), o.appendChild(r), u.appendChild(o), o.setAttribute("filter", "url(" + dt() + "#" + s + ")"));
        } else if (e === 2) {
          var h = W("mask");
          h.setAttribute("id", i), h.setAttribute("mask-type", "alpha");
          var m2 = W("g");
          h.appendChild(m2), s = ft(), n = _e.createFilter(s);
          var _ = W("feComponentTransfer");
          _.setAttribute("in", "SourceGraphic"), n.appendChild(_);
          var M = W("feFuncA");
          M.setAttribute("type", "table"), M.setAttribute("tableValues", "1.0 0.0"), _.appendChild(M), this.globalData.defs.appendChild(n);
          var p = W("rect");
          p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), m2.setAttribute("filter", "url(" + dt() + "#" + s + ")"), m2.appendChild(p), r = W("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), m2.appendChild(r), ts.maskType || (h.setAttribute("mask-type", "luminance"), n.appendChild(_e.createAlphaToLuminanceFilter()), o = W("g"), m2.appendChild(p), o.appendChild(this.layerElement), m2.appendChild(o)), this.globalData.defs.appendChild(h);
        }
        this.matteMasks[e] = i;
      }
      return this.matteMasks[e];
    }, setMatte: function(e) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + dt() + "#" + e + ")");
    } };
    function ne() {
    }
    ne.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = false, this.checkParenting();
    }, setHierarchy: function(e) {
      this.hierarchy = e;
    }, setAsParent: function() {
      this._isParent = true;
    }, checkParenting: function() {
      this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
    } };
    function Se() {
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
      X([qe, ds(t)], Se);
    })();
    function ke(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    X([Nt, re, be, ne, zt, Se], ke), ke.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = W("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, ke.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function ur(t, e) {
      this.elem = t, this.pos = e;
    }
    function is() {
    }
    is.prototype = { addShapeToModifiers: function(e) {
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
      s.push(new ur(e, i));
    }, prepareFrame: function(e) {
      this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
    } };
    var ss = { 1: "butt", 2: "round", 3: "square" }, rs = { 1: "miter", 2: "round", 3: "bevel" };
    function ns(t, e, i) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
      for (var s = 0, n = t.length; s < n; ) {
        if (t[s].mProps.dynamicProperties.length) {
          this._isAnimated = true;
          break;
        }
        s += 1;
      }
    }
    ns.prototype.setAsAnimated = function() {
      this._isAnimated = true;
    };
    function as(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = t.hd === true, this.pElem = W("path"), this.msElem = null;
    }
    as.prototype.reset = function() {
      this.d = "", this._mdf = false;
    };
    function De(t, e, i, s) {
      this.elem = t, this.frameId = -1, this.dataProps = $(e.length), this.renderer = i, this.k = false, this.dashStr = "", this.dashArray = st("float32", e.length ? e.length - 1 : 0), this.dashoffset = st("float32", 1), this.initDynamicPropertyContainer(s);
      var n, r = e.length || 0, o;
      for (n = 0; n < r; n += 1) o = V.getProp(t, e[n].v, 0, 0, this), this.k = o.k || this.k, this.dataProps[n] = { n: e[n].n, p: o };
      this.k || this.getValue(true), this._isAnimated = this.k;
    }
    De.prototype.getValue = function(t) {
      if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, i = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < i; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, X([rt], De);
    function os(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = V.getProp(t, e.o, 0, 0.01, this), this.w = V.getProp(t, e.w, 0, null, this), this.d = new De(t, e.d || {}, "svg", this), this.c = V.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
    }
    X([rt], os);
    function hs(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = V.getProp(t, e.o, 0, 0.01, this), this.c = V.getProp(t, e.c, 1, 255, this), this.style = i;
    }
    X([rt], hs);
    function ls(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i;
    }
    X([rt], ls);
    function Pe(t, e, i) {
      this.data = e, this.c = st("uint8c", e.p * 4);
      var s = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
      this.o = st("float32", s), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = V.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
    }
    Pe.prototype.comparePoints = function(t, e) {
      for (var i = 0, s = this.o.length / 2, n; i < s; ) {
        if (n = Math.abs(t[i * 4] - t[e * 4 + i * 2]), n > 0.01) return false;
        i += 1;
      }
      return true;
    }, Pe.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4) return false;
      if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e; ) {
        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return false;
        t += 1;
      }
      else if (!this.comparePoints(this.data.k.k, this.data.p)) return false;
      return true;
    }, Pe.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
        var e, i = this.data.p * 4, s, n;
        for (e = 0; e < i; e += 1) s = e % 4 === 0 ? 100 : 255, n = Math.round(this.prop.v[e] * s), this.c[e] !== n && (this.c[e] = n, this._cmdf = !t);
        if (this.o.length) for (i = this.prop.v.length, e = this.data.p * 4; e < i; e += 1) s = e % 2 === 0 ? 100 : 1, n = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== n && (this.o[e - this.data.p * 4] = n, this._omdf = !t);
        this._mdf = !t;
      }
    }, X([rt], Pe);
    function ae(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
    }
    ae.prototype.initGradientData = function(t, e, i) {
      this.o = V.getProp(t, e.o, 0, 0.01, this), this.s = V.getProp(t, e.s, 1, null, this), this.e = V.getProp(t, e.e, 1, null, this), this.h = V.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = V.getProp(t, e.a || { k: 0 }, 0, J, this), this.g = new Pe(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
    }, ae.prototype.setGradientData = function(t, e) {
      var i = ft(), s = W(e.t === 1 ? "linearGradient" : "radialGradient");
      s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
      var n = [], r, o, u;
      for (u = e.g.p * 4, o = 0; o < u; o += 4) r = W("stop"), s.appendChild(r), n.push(r);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + dt() + "#" + i + ")"), this.gf = s, this.cst = n;
    }, ae.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var i, s, n, r = W("mask"), o = W("path");
        r.appendChild(o);
        var u = ft(), h = ft();
        r.setAttribute("id", h);
        var m2 = W(t.t === 1 ? "linearGradient" : "radialGradient");
        m2.setAttribute("id", u), m2.setAttribute("spreadMethod", "pad"), m2.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var _ = this.stops;
        for (s = t.g.p * 4; s < n; s += 2) i = W("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), m2.appendChild(i), _.push(i);
        o.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + dt() + "#" + u + ")"), t.ty === "gs" && (o.setAttribute("stroke-linecap", ss[t.lc || 2]), o.setAttribute("stroke-linejoin", rs[t.lj || 2]), t.lj === 1 && o.setAttribute("stroke-miterlimit", t.ml)), this.of = m2, this.ms = r, this.ost = _, this.maskId = h, e.msElem = o;
      }
    }, X([rt], ae);
    function fs(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = V.getProp(t, e.w, 0, null, this), this.d = new De(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
    }
    X([ae, rt], fs);
    function cr() {
      this.it = [], this.prevViewData = [], this.gr = W("g");
    }
    function vr(t, e, i) {
      this.transform = { mProps: t, op: e, container: i }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var ps = function(e, i, s, n) {
      if (i === 0) return "";
      var r = e.o, o = e.i, u = e.v, h, m2 = " M" + n.applyToPointStringified(u[0][0], u[0][1]);
      for (h = 1; h < i; h += 1) m2 += " C" + n.applyToPointStringified(r[h - 1][0], r[h - 1][1]) + " " + n.applyToPointStringified(o[h][0], o[h][1]) + " " + n.applyToPointStringified(u[h][0], u[h][1]);
      return s && i && (m2 += " C" + n.applyToPointStringified(r[h - 1][0], r[h - 1][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]) + " " + n.applyToPointStringified(u[0][0], u[0][1]), m2 += "z"), m2;
    }, dr = function() {
      var t = new ot(), e = new ot(), i = { createRenderFunction: s };
      function s(M) {
        switch (M.ty) {
          case "fl":
            return u;
          case "gf":
            return m2;
          case "gs":
            return h;
          case "st":
            return _;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return o;
          case "tr":
            return n;
          case "no":
            return r;
          default:
            return null;
        }
      }
      function n(M, p, b) {
        (b || p.transform.op._mdf) && p.transform.container.setAttribute("opacity", p.transform.op.v), (b || p.transform.mProps._mdf) && p.transform.container.setAttribute("transform", p.transform.mProps.v.to2dCSS());
      }
      function r() {
      }
      function o(M, p, b) {
        var P, S, C, y, d, f, c = p.styles.length, g = p.lvl, A, T, x, I;
        for (f = 0; f < c; f += 1) {
          if (y = p.sh._mdf || b, p.styles[f].lvl < g) {
            for (T = e.reset(), x = g - p.styles[f].lvl, I = p.transformers.length - 1; !y && x > 0; ) y = p.transformers[I].mProps._mdf || y, x -= 1, I -= 1;
            if (y) for (x = g - p.styles[f].lvl, I = p.transformers.length - 1; x > 0; ) T.multiply(p.transformers[I].mProps.v), x -= 1, I -= 1;
          } else T = t;
          if (A = p.sh.paths, S = A._length, y) {
            for (C = "", P = 0; P < S; P += 1) d = A.shapes[P], d && d._length && (C += ps(d, d._length, d.c, T));
            p.caches[f] = C;
          } else C = p.caches[f];
          p.styles[f].d += M.hd === true ? "" : C, p.styles[f]._mdf = y || p.styles[f]._mdf;
        }
      }
      function u(M, p, b) {
        var P = p.style;
        (p.c._mdf || b) && P.pElem.setAttribute("fill", "rgb(" + Yt(p.c.v[0]) + "," + Yt(p.c.v[1]) + "," + Yt(p.c.v[2]) + ")"), (p.o._mdf || b) && P.pElem.setAttribute("fill-opacity", p.o.v);
      }
      function h(M, p, b) {
        m2(M, p, b), _(M, p, b);
      }
      function m2(M, p, b) {
        var P = p.gf, S = p.g._hasOpacity, C = p.s.v, y = p.e.v;
        if (p.o._mdf || b) {
          var d = M.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          p.style.pElem.setAttribute(d, p.o.v);
        }
        if (p.s._mdf || b) {
          var f = M.t === 1 ? "x1" : "cx", c = f === "x1" ? "y1" : "cy";
          P.setAttribute(f, C[0]), P.setAttribute(c, C[1]), S && !p.g._collapsable && (p.of.setAttribute(f, C[0]), p.of.setAttribute(c, C[1]));
        }
        var g, A, T, x;
        if (p.g._cmdf || b) {
          g = p.cst;
          var I = p.g.c;
          for (T = g.length, A = 0; A < T; A += 1) x = g[A], x.setAttribute("offset", I[A * 4] + "%"), x.setAttribute("stop-color", "rgb(" + I[A * 4 + 1] + "," + I[A * 4 + 2] + "," + I[A * 4 + 3] + ")");
        }
        if (S && (p.g._omdf || b)) {
          var j = p.g.o;
          for (p.g._collapsable ? g = p.cst : g = p.ost, T = g.length, A = 0; A < T; A += 1) x = g[A], p.g._collapsable || x.setAttribute("offset", j[A * 2] + "%"), x.setAttribute("stop-opacity", j[A * 2 + 1]);
        }
        if (M.t === 1) (p.e._mdf || b) && (P.setAttribute("x2", y[0]), P.setAttribute("y2", y[1]), S && !p.g._collapsable && (p.of.setAttribute("x2", y[0]), p.of.setAttribute("y2", y[1])));
        else {
          var N;
          if ((p.s._mdf || p.e._mdf || b) && (N = Math.sqrt(Math.pow(C[0] - y[0], 2) + Math.pow(C[1] - y[1], 2)), P.setAttribute("r", N), S && !p.g._collapsable && p.of.setAttribute("r", N)), p.e._mdf || p.h._mdf || p.a._mdf || b) {
            N || (N = Math.sqrt(Math.pow(C[0] - y[0], 2) + Math.pow(C[1] - y[1], 2)));
            var L = Math.atan2(y[1] - C[1], y[0] - C[0]), G = p.h.v;
            G >= 1 ? G = 0.99 : G <= -1 && (G = -0.99);
            var O = N * G, F = Math.cos(L + p.a.v) * O + C[0], v = Math.sin(L + p.a.v) * O + C[1];
            P.setAttribute("fx", F), P.setAttribute("fy", v), S && !p.g._collapsable && (p.of.setAttribute("fx", F), p.of.setAttribute("fy", v));
          }
        }
      }
      function _(M, p, b) {
        var P = p.style, S = p.d;
        S && (S._mdf || b) && S.dashStr && (P.pElem.setAttribute("stroke-dasharray", S.dashStr), P.pElem.setAttribute("stroke-dashoffset", S.dashoffset[0])), p.c && (p.c._mdf || b) && P.pElem.setAttribute("stroke", "rgb(" + Yt(p.c.v[0]) + "," + Yt(p.c.v[1]) + "," + Yt(p.c.v[2]) + ")"), (p.o._mdf || b) && P.pElem.setAttribute("stroke-opacity", p.o.v), (p.w._mdf || b) && (P.pElem.setAttribute("stroke-width", p.w.v), P.msElem && P.msElem.setAttribute("stroke-width", p.w.v));
      }
      return i;
    }();
    function Q(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
    }
    X([Nt, re, be, is, ne, zt, Se], Q), Q.prototype.initSecondaryElement = function() {
    }, Q.prototype.identityMatrix = new ot(), Q.prototype.buildExpressionInterface = function() {
    }, Q.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
    }, Q.prototype.filterUniqueShapes = function() {
      var t, e = this.shapes.length, i, s, n = this.stylesList.length, r, o = [], u = false;
      for (s = 0; s < n; s += 1) {
        for (r = this.stylesList[s], u = false, o.length = 0, t = 0; t < e; t += 1) i = this.shapes[t], i.styles.indexOf(r) !== -1 && (o.push(i), u = i._isAnimated || u);
        o.length > 1 && u && this.setShapesAsAnimated(o);
      }
    }, Q.prototype.setShapesAsAnimated = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].setAsAnimated();
    }, Q.prototype.createStyleElement = function(t, e) {
      var i, s = new as(t, e), n = s.pElem;
      if (t.ty === "st") i = new os(this, t, s);
      else if (t.ty === "fl") i = new hs(this, t, s);
      else if (t.ty === "gf" || t.ty === "gs") {
        var r = t.ty === "gf" ? ae : fs;
        i = new r(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), n.setAttribute("mask", "url(" + dt() + "#" + i.maskId + ")"));
      } else t.ty === "no" && (i = new ls(this, t, s));
      return (t.ty === "st" || t.ty === "gs") && (n.setAttribute("stroke-linecap", ss[t.lc || 2]), n.setAttribute("stroke-linejoin", rs[t.lj || 2]), n.setAttribute("fill-opacity", "0"), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = ni(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i;
    }, Q.prototype.createGroupElement = function(t) {
      var e = new cr();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = ni(t.bm)), e;
    }, Q.prototype.createTransformElement = function(t, e) {
      var i = ti.getTransformProperty(this, t, this), s = new vr(i, i.o, e);
      return this.addToAnimatedContents(t, s), s;
    }, Q.prototype.createShapeElement = function(t, e, i) {
      var s = 4;
      t.ty === "rc" ? s = 5 : t.ty === "el" ? s = 6 : t.ty === "sr" && (s = 7);
      var n = Ve.getShapeProp(this, t, s, this), r = new ns(e, i, n);
      return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r;
    }, Q.prototype.addToAnimatedContents = function(t, e) {
      for (var i = 0, s = this.animatedContents.length; i < s; ) {
        if (this.animatedContents[i].element === e) return;
        i += 1;
      }
      this.animatedContents.push({ fn: dr.createRenderFunction(t), element: e, data: t });
    }, Q.prototype.setElementStyles = function(t) {
      var e = t.styles, i, s = this.stylesList.length;
      for (i = 0; i < s; i += 1) this.stylesList[i].closed || e.push(this.stylesList[i]);
    }, Q.prototype.reloadShapes = function() {
      this._isFirstFrame = true;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, Q.prototype.searchShapes = function(t, e, i, s, n, r, o) {
      var u = [].concat(r), h, m2 = t.length - 1, _, M, p = [], b = [], P, S, C;
      for (h = m2; h >= 0; h -= 1) {
        if (C = this.searchProcessedElement(t[h]), C ? e[h] = i[C - 1] : t[h]._render = o, t[h].ty === "fl" || t[h].ty === "st" || t[h].ty === "gf" || t[h].ty === "gs" || t[h].ty === "no") C ? e[h].style.closed = false : e[h] = this.createStyleElement(t[h], n), t[h]._render && e[h].style.pElem.parentNode !== s && s.appendChild(e[h].style.pElem), p.push(e[h].style);
        else if (t[h].ty === "gr") {
          if (!C) e[h] = this.createGroupElement(t[h]);
          else for (M = e[h].it.length, _ = 0; _ < M; _ += 1) e[h].prevViewData[_] = e[h].it[_];
          this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, n + 1, u, o), t[h]._render && e[h].gr.parentNode !== s && s.appendChild(e[h].gr);
        } else t[h].ty === "tr" ? (C || (e[h] = this.createTransformElement(t[h], s)), P = e[h].transform, u.push(P)) : t[h].ty === "sh" || t[h].ty === "rc" || t[h].ty === "el" || t[h].ty === "sr" ? (C || (e[h] = this.createShapeElement(t[h], u, n)), this.setElementStyles(e[h])) : t[h].ty === "tm" || t[h].ty === "rd" || t[h].ty === "ms" || t[h].ty === "pb" || t[h].ty === "zz" || t[h].ty === "op" ? (C ? (S = e[h], S.closed = false) : (S = Ot.getModifier(t[h].ty), S.init(this, t[h]), e[h] = S, this.shapeModifiers.push(S)), b.push(S)) : t[h].ty === "rp" && (C ? (S = e[h], S.closed = true) : (S = Ot.getModifier(t[h].ty), e[h] = S, S.init(this, t, h, e), this.shapeModifiers.push(S), o = false), b.push(S));
        this.addProcessedElement(t[h], h + 1);
      }
      for (m2 = p.length, h = 0; h < m2; h += 1) p[h].closed = true;
      for (m2 = b.length, h = 0; h < m2; h += 1) b[h].closed = true;
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
    function oi(t, e, i, s, n, r) {
      this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = n, this.p = r, this._mdf = { o: true, sw: !!e, sc: !!i, fc: !!s, m: true, p: true };
    }
    oi.prototype.update = function(t, e, i, s, n, r) {
      this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false, this._mdf.p = false;
      var o = false;
      return this.o !== t && (this.o = t, this._mdf.o = true, o = true), this.sw !== e && (this.sw = e, this._mdf.sw = true, o = true), this.sc !== i && (this.sc = i, this._mdf.sc = true, o = true), this.fc !== s && (this.fc = s, this._mdf.fc = true, o = true), this.m !== n && (this.m = n, this._mdf.m = true, o = true), r.length && (this.p[0] !== r[0] || this.p[1] !== r[1] || this.p[4] !== r[4] || this.p[5] !== r[5] || this.p[12] !== r[12] || this.p[13] !== r[13]) && (this.p = r, this._mdf.p = true, o = true), o;
    };
    function lt(t, e) {
      this._frameId = He, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: false, strokeColorAnim: false, strokeWidthAnim: false, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: false }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    lt.prototype.defaultBoxWidth = [0, 0], lt.prototype.copyData = function(t, e) {
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }, lt.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
    }, lt.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, lt.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, lt.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, lt.prototype.getValue = function(t) {
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
    }, lt.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e); ) i += 1;
      return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
    }, lt.prototype.buildFinalText = function(t) {
      for (var e = [], i = 0, s = t.length, n, r, o = false, u = false, h = ""; i < s; ) o = u, u = false, n = t.charCodeAt(i), h = t.charAt(i), Kt.isCombinedCharacter(n) ? o = true : n >= 55296 && n <= 56319 ? Kt.isRegionalFlag(t, i) ? h = t.substr(i, 14) : (r = t.charCodeAt(i + 1), r >= 56320 && r <= 57343 && (Kt.isModifier(n, r) ? (h = t.substr(i, 2), o = true) : Kt.isFlagEmoji(t.substr(i, 4)) ? h = t.substr(i, 4) : h = t.substr(i, 2))) : n > 56319 ? (r = t.charCodeAt(i + 1), Kt.isVariationSelector(n) && (o = true)) : Kt.isZeroWidthJoiner(n) && (o = true, u = true), o ? (e[e.length - 1] += h, o = false) : e.push(h), i += h.length;
      return e;
    }, lt.prototype.completeTextData = function(t) {
      t.__complete = true;
      var e = this.elem.globalData.fontManager, i = this.data, s = [], n, r, o, u = 0, h, m2 = i.m.g, _ = 0, M = 0, p = 0, b = [], P = 0, S = 0, C, y, d = e.getFontByName(t.f), f, c = 0, g = Ji(d);
      t.fWeight = g.weight, t.fStyle = g.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
      var A = t.tr / 1e3 * t.finalSize, T;
      if (t.sz) for (var x = true, I = t.sz[0], j = t.sz[1], N, L; x; ) {
        L = this.buildFinalText(t.t), N = 0, P = 0, r = L.length, A = t.tr / 1e3 * t.finalSize;
        var G = -1;
        for (n = 0; n < r; n += 1) T = L[n].charCodeAt(0), o = false, L[n] === " " ? G = n : (T === 13 || T === 3) && (P = 0, o = true, N += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (f = e.getCharData(L[n], d.fStyle, d.fFamily), c = o ? 0 : f.w * t.finalSize / 100) : c = e.measureText(L[n], t.f, t.finalSize), P + c > I && L[n] !== " " ? (G === -1 ? r += 1 : n = G, N += t.finalLineHeight || t.finalSize * 1.2, L.splice(n, G === n ? 1 : 0, "\r"), G = -1, P = 0) : (P += c, P += A);
        N += d.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && j < N ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = L, r = t.finalText.length, x = false);
      }
      P = -A, c = 0;
      var O = 0, F;
      for (n = 0; n < r; n += 1) if (o = false, F = t.finalText[n], T = F.charCodeAt(0), T === 13 || T === 3 ? (O = 0, b.push(P), S = P > S ? P : S, P = -2 * A, h = "", o = true, p += 1) : h = F, e.chars ? (f = e.getCharData(F, d.fStyle, e.getFontByName(t.f).fFamily), c = o ? 0 : f.w * t.finalSize / 100) : c = e.measureText(h, t.f, t.finalSize), F === " " ? O += c + A : (P += c + A + O, O = 0), s.push({ l: c, an: c, add: _, n: o, anIndexes: [], val: h, line: p, animatorJustifyOffset: 0 }), m2 == 2) {
        if (_ += c, h === "" || h === " " || n === r - 1) {
          for ((h === "" || h === " ") && (_ -= c); M <= n; ) s[M].an = _, s[M].ind = u, s[M].extra = c, M += 1;
          u += 1, _ = 0;
        }
      } else if (m2 == 3) {
        if (_ += c, h === "" || n === r - 1) {
          for (h === "" && (_ -= c); M <= n; ) s[M].an = _, s[M].ind = u, s[M].extra = c, M += 1;
          _ = 0, u += 1;
        }
      } else s[u].ind = u, s[u].extra = 0, u += 1;
      if (t.l = s, S = P > S ? P : S, b.push(P), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = S, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0;
      }
      t.lineWidths = b;
      var v = i.a, k, a;
      y = v.length;
      var l, E, w = [];
      for (C = 0; C < y; C += 1) {
        for (k = v[C], k.a.sc && (t.strokeColorAnim = true), k.a.sw && (t.strokeWidthAnim = true), (k.a.fc || k.a.fh || k.a.fs || k.a.fb) && (t.fillColorAnim = true), E = 0, l = k.s.b, n = 0; n < r; n += 1) a = s[n], a.anIndexes[C] = E, (l == 1 && a.val !== "" || l == 2 && a.val !== "" && a.val !== " " || l == 3 && (a.n || a.val == " " || n == r - 1) || l == 4 && (a.n || n == r - 1)) && (k.s.rn === 1 && w.push(E), E += 1);
        i.a[C].s.totalChars = E;
        var R = -1, q;
        if (k.s.rn === 1) for (n = 0; n < r; n += 1) a = s[n], R != a.anIndexes[C] && (R = a.anIndexes[C], q = w.splice(Math.floor(Math.random() * w.length), 1)[0]), a.anIndexes[C] = q;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = d.ascent * t.finalSize / 100;
    }, lt.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var i = this.copyData({}, this.data.d.k[e].s);
      i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this);
    }, lt.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
    }, lt.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, lt.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var mr = function() {
      var t = Math.max, e = Math.min, i = Math.floor;
      function s(r, o) {
        this._currentTextLength = -1, this.k = false, this.data = o, this.elem = r, this.comp = r.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(r), this.s = V.getProp(r, o.s || { k: 0 }, 0, 0, this), "e" in o ? this.e = V.getProp(r, o.e, 0, 0, this) : this.e = { v: 100 }, this.o = V.getProp(r, o.o || { k: 0 }, 0, 0, this), this.xe = V.getProp(r, o.xe || { k: 0 }, 0, 0, this), this.ne = V.getProp(r, o.ne || { k: 0 }, 0, 0, this), this.sm = V.getProp(r, o.sm || { k: 100 }, 0, 0, this), this.a = V.getProp(r, o.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      s.prototype = { getMult: function(o) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var u = 0, h = 0, m2 = 1, _ = 1;
        this.ne.v > 0 ? u = this.ne.v / 100 : h = -this.ne.v / 100, this.xe.v > 0 ? m2 = 1 - this.xe.v / 100 : _ = 1 + this.xe.v / 100;
        var M = ue.getBezierEasing(u, h, m2, _).get, p = 0, b = this.finalS, P = this.finalE, S = this.data.sh;
        if (S === 2) P === b ? p = o >= P ? 1 : 0 : p = t(0, e(0.5 / (P - b) + (o - b) / (P - b), 1)), p = M(p);
        else if (S === 3) P === b ? p = o >= P ? 0 : 1 : p = 1 - t(0, e(0.5 / (P - b) + (o - b) / (P - b), 1)), p = M(p);
        else if (S === 4) P === b ? p = 0 : (p = t(0, e(0.5 / (P - b) + (o - b) / (P - b), 1)), p < 0.5 ? p *= 2 : p = 1 - 2 * (p - 0.5)), p = M(p);
        else if (S === 5) {
          if (P === b) p = 0;
          else {
            var C = P - b;
            o = e(t(0, o + 0.5 - b), P - b);
            var y = -C / 2 + o, d = C / 2;
            p = Math.sqrt(1 - y * y / (d * d));
          }
          p = M(p);
        } else S === 6 ? (P === b ? p = 0 : (o = e(t(0, o + 0.5 - b), P - b), p = (1 + Math.cos(Math.PI + Math.PI * 2 * o / (P - b))) / 2), p = M(p)) : (o >= i(b) && (o - b < 0 ? p = t(0, e(e(P, 1) - (b - o), 1)) : p = t(0, e(P - o, 1))), p = M(p));
        if (this.sm.v !== 100) {
          var f = this.sm.v * 0.01;
          f === 0 && (f = 1e-8);
          var c = 0.5 - f * 0.5;
          p < c ? p = 0 : (p = (p - c) / f, p > 1 && (p = 1));
        }
        return p * this.a.v;
      }, getValue: function(o) {
        this.iterateDynamicProperties(), this._mdf = o || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, o && this.data.r === 2 && (this.e.v = this._currentTextLength);
        var u = this.data.r === 2 ? 1 : 100 / this.data.totalChars, h = this.o.v / u, m2 = this.s.v / u + h, _ = this.e.v / u + h;
        if (m2 > _) {
          var M = m2;
          m2 = _, _ = M;
        }
        this.finalS = m2, this.finalE = _;
      } }, X([rt], s);
      function n(r, o, u) {
        return new s(r, o);
      }
      return { getTextSelectorProp: n };
    }();
    function gr(t, e, i) {
      var s = { propType: false }, n = V.getProp, r = e.a;
      this.a = { r: r.r ? n(t, r.r, 0, J, i) : s, rx: r.rx ? n(t, r.rx, 0, J, i) : s, ry: r.ry ? n(t, r.ry, 0, J, i) : s, sk: r.sk ? n(t, r.sk, 0, J, i) : s, sa: r.sa ? n(t, r.sa, 0, J, i) : s, s: r.s ? n(t, r.s, 1, 0.01, i) : s, a: r.a ? n(t, r.a, 1, 0, i) : s, o: r.o ? n(t, r.o, 0, 0.01, i) : s, p: r.p ? n(t, r.p, 1, 0, i) : s, sw: r.sw ? n(t, r.sw, 0, 0, i) : s, sc: r.sc ? n(t, r.sc, 1, 0, i) : s, fc: r.fc ? n(t, r.fc, 1, 0, i) : s, fh: r.fh ? n(t, r.fh, 0, 0, i) : s, fs: r.fs ? n(t, r.fs, 0, 0.01, i) : s, fb: r.fb ? n(t, r.fb, 0, 0.01, i) : s, t: r.t ? n(t, r.t, 0, 0, i) : s }, this.s = mr.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
    }
    function Jt(t, e, i) {
      this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = $(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(i);
    }
    Jt.prototype.searchProperties = function() {
      var t, e = this._textData.a.length, i, s = V.getProp;
      for (t = 0; t < e; t += 1) i = this._textData.a[t], this._animatorsData[t] = new gr(this._elem, i, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { a: s(this._elem, this._textData.p.a, 0, 0, this), f: s(this._elem, this._textData.p.f, 0, 0, this), l: s(this._elem, this._textData.p.l, 0, 0, this), r: s(this._elem, this._textData.p.r, 0, 0, this), p: s(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this);
    }, Jt.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = false;
        var i = this._moreOptions.alignment.v, s = this._animatorsData, n = this._textData, r = this.mHelper, o = this._renderType, u = this.renderedLetters.length, h, m2, _, M, p = t.l, b, P, S, C, y, d, f, c, g, A, T, x, I, j, N;
        if (this._hasMaskedPath) {
          if (N = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var L = N.v;
            this._pathData.r.v && (L = L.reverse()), b = { tLength: 0, segments: [] }, M = L._length - 1;
            var G;
            for (x = 0, _ = 0; _ < M; _ += 1) G = Pt.buildBezierData(L.v[_], L.v[_ + 1], [L.o[_][0] - L.v[_][0], L.o[_][1] - L.v[_][1]], [L.i[_ + 1][0] - L.v[_ + 1][0], L.i[_ + 1][1] - L.v[_ + 1][1]]), b.tLength += G.segmentLength, b.segments.push(G), x += G.segmentLength;
            _ = M, N.v.c && (G = Pt.buildBezierData(L.v[_], L.v[0], [L.o[_][0] - L.v[_][0], L.o[_][1] - L.v[_][1]], [L.i[0][0] - L.v[0][0], L.i[0][1] - L.v[0][1]]), b.tLength += G.segmentLength, b.segments.push(G), x += G.segmentLength), this._pathData.pi = b;
          }
          if (b = this._pathData.pi, P = this._pathData.f.v, f = 0, d = 1, C = 0, y = true, A = b.segments, P < 0 && N.v.c) for (b.tLength < Math.abs(P) && (P = -Math.abs(P) % b.tLength), f = A.length - 1, g = A[f].points, d = g.length - 1; P < 0; ) P += g[d].partialLength, d -= 1, d < 0 && (f -= 1, g = A[f].points, d = g.length - 1);
          g = A[f].points, c = g[d - 1], S = g[d], T = S.partialLength;
        }
        M = p.length, h = 0, m2 = 0;
        var O = t.finalSize * 1.2 * 0.714, F = true, v, k, a, l, E;
        l = s.length;
        var w, R = -1, q, D, Y, H = P, et = f, ut = d, wt = -1, ct, nt, mt, K, B, xt, Dt, Ft, Ct = "", It = this.defaultPropsArray, Lt;
        if (t.j === 2 || t.j === 1) {
          var vt = 0, Wt = 0, Gt = t.j === 2 ? -0.5 : -1, bt = 0, Xt = true;
          for (_ = 0; _ < M; _ += 1) if (p[_].n) {
            for (vt && (vt += Wt); bt < _; ) p[bt].animatorJustifyOffset = vt, bt += 1;
            vt = 0, Xt = true;
          } else {
            for (a = 0; a < l; a += 1) v = s[a].a, v.t.propType && (Xt && t.j === 2 && (Wt += v.t.v * Gt), k = s[a].s, w = k.getMult(p[_].anIndexes[a], n.a[a].s.totalChars), w.length ? vt += v.t.v * w[0] * Gt : vt += v.t.v * w * Gt);
            Xt = false;
          }
          for (vt && (vt += Wt); bt < _; ) p[bt].animatorJustifyOffset = vt, bt += 1;
        }
        for (_ = 0; _ < M; _ += 1) {
          if (r.reset(), ct = 1, p[_].n) h = 0, m2 += t.yOffset, m2 += F ? 1 : 0, P = H, F = false, this._hasMaskedPath && (f = et, d = ut, g = A[f].points, c = g[d - 1], S = g[d], T = S.partialLength, C = 0), Ct = "", Ft = "", xt = "", Lt = "", It = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (wt !== p[_].line) {
                switch (t.j) {
                  case 1:
                    P += x - t.lineWidths[p[_].line];
                    break;
                  case 2:
                    P += (x - t.lineWidths[p[_].line]) / 2;
                    break;
                }
                wt = p[_].line;
              }
              R !== p[_].ind && (p[R] && (P += p[R].extra), P += p[_].an / 2, R = p[_].ind), P += i[0] * p[_].an * 5e-3;
              var St = 0;
              for (a = 0; a < l; a += 1) v = s[a].a, v.p.propType && (k = s[a].s, w = k.getMult(p[_].anIndexes[a], n.a[a].s.totalChars), w.length ? St += v.p.v[0] * w[0] : St += v.p.v[0] * w), v.a.propType && (k = s[a].s, w = k.getMult(p[_].anIndexes[a], n.a[a].s.totalChars), w.length ? St += v.a.v[0] * w[0] : St += v.a.v[0] * w);
              for (y = true, this._pathData.a.v && (P = p[0].an * 0.5 + (x - this._pathData.f.v - p[0].an * 0.5 - p[p.length - 1].an * 0.5) * R / (M - 1), P += this._pathData.f.v); y; ) C + T >= P + St || !g ? (I = (P + St - C) / S.partialLength, D = c.point[0] + (S.point[0] - c.point[0]) * I, Y = c.point[1] + (S.point[1] - c.point[1]) * I, r.translate(-i[0] * p[_].an * 5e-3, -(i[1] * O) * 0.01), y = false) : g && (C += S.partialLength, d += 1, d >= g.length && (d = 0, f += 1, A[f] ? g = A[f].points : N.v.c ? (d = 0, f = 0, g = A[f].points) : (C -= S.partialLength, g = null)), g && (c = S, S = g[d], T = S.partialLength));
              q = p[_].an / 2 - p[_].add, r.translate(-q, 0, 0);
            } else q = p[_].an / 2 - p[_].add, r.translate(-q, 0, 0), r.translate(-i[0] * p[_].an * 5e-3, -i[1] * O * 0.01, 0);
            for (a = 0; a < l; a += 1) v = s[a].a, v.t.propType && (k = s[a].s, w = k.getMult(p[_].anIndexes[a], n.a[a].s.totalChars), (h !== 0 || t.j !== 0) && (this._hasMaskedPath ? w.length ? P += v.t.v * w[0] : P += v.t.v * w : w.length ? h += v.t.v * w[0] : h += v.t.v * w));
            for (t.strokeWidthAnim && (mt = t.sw || 0), t.strokeColorAnim && (t.sc ? nt = [t.sc[0], t.sc[1], t.sc[2]] : nt = [0, 0, 0]), t.fillColorAnim && t.fc && (K = [t.fc[0], t.fc[1], t.fc[2]]), a = 0; a < l; a += 1) v = s[a].a, v.a.propType && (k = s[a].s, w = k.getMult(p[_].anIndexes[a], n.a[a].s.totalChars), w.length ? r.translate(-v.a.v[0] * w[0], -v.a.v[1] * w[1], v.a.v[2] * w[2]) : r.translate(-v.a.v[0] * w, -v.a.v[1] * w, v.a.v[2] * w));
            for (a = 0; a < l; a += 1) v = s[a].a, v.s.propType && (k = s[a].s, w = k.getMult(p[_].anIndexes[a], n.a[a].s.totalChars), w.length ? r.scale(1 + (v.s.v[0] - 1) * w[0], 1 + (v.s.v[1] - 1) * w[1], 1) : r.scale(1 + (v.s.v[0] - 1) * w, 1 + (v.s.v[1] - 1) * w, 1));
            for (a = 0; a < l; a += 1) {
              if (v = s[a].a, k = s[a].s, w = k.getMult(p[_].anIndexes[a], n.a[a].s.totalChars), v.sk.propType && (w.length ? r.skewFromAxis(-v.sk.v * w[0], v.sa.v * w[1]) : r.skewFromAxis(-v.sk.v * w, v.sa.v * w)), v.r.propType && (w.length ? r.rotateZ(-v.r.v * w[2]) : r.rotateZ(-v.r.v * w)), v.ry.propType && (w.length ? r.rotateY(v.ry.v * w[1]) : r.rotateY(v.ry.v * w)), v.rx.propType && (w.length ? r.rotateX(v.rx.v * w[0]) : r.rotateX(v.rx.v * w)), v.o.propType && (w.length ? ct += (v.o.v * w[0] - ct) * w[0] : ct += (v.o.v * w - ct) * w), t.strokeWidthAnim && v.sw.propType && (w.length ? mt += v.sw.v * w[0] : mt += v.sw.v * w), t.strokeColorAnim && v.sc.propType) for (B = 0; B < 3; B += 1) w.length ? nt[B] += (v.sc.v[B] - nt[B]) * w[0] : nt[B] += (v.sc.v[B] - nt[B]) * w;
              if (t.fillColorAnim && t.fc) {
                if (v.fc.propType) for (B = 0; B < 3; B += 1) w.length ? K[B] += (v.fc.v[B] - K[B]) * w[0] : K[B] += (v.fc.v[B] - K[B]) * w;
                v.fh.propType && (w.length ? K = Ai(K, v.fh.v * w[0]) : K = Ai(K, v.fh.v * w)), v.fs.propType && (w.length ? K = ki(K, v.fs.v * w[0]) : K = ki(K, v.fs.v * w)), v.fb.propType && (w.length ? K = Pi(K, v.fb.v * w[0]) : K = Pi(K, v.fb.v * w));
              }
            }
            for (a = 0; a < l; a += 1) v = s[a].a, v.p.propType && (k = s[a].s, w = k.getMult(p[_].anIndexes[a], n.a[a].s.totalChars), this._hasMaskedPath ? w.length ? r.translate(0, v.p.v[1] * w[0], -v.p.v[2] * w[1]) : r.translate(0, v.p.v[1] * w, -v.p.v[2] * w) : w.length ? r.translate(v.p.v[0] * w[0], v.p.v[1] * w[1], -v.p.v[2] * w[2]) : r.translate(v.p.v[0] * w, v.p.v[1] * w, -v.p.v[2] * w));
            if (t.strokeWidthAnim && (xt = mt < 0 ? 0 : mt), t.strokeColorAnim && (Dt = "rgb(" + Math.round(nt[0] * 255) + "," + Math.round(nt[1] * 255) + "," + Math.round(nt[2] * 255) + ")"), t.fillColorAnim && t.fc && (Ft = "rgb(" + Math.round(K[0] * 255) + "," + Math.round(K[1] * 255) + "," + Math.round(K[2] * 255) + ")"), this._hasMaskedPath) {
              if (r.translate(0, -t.ls), r.translate(0, i[1] * O * 0.01 + m2, 0), this._pathData.p.v) {
                j = (S.point[1] - c.point[1]) / (S.point[0] - c.point[0]);
                var Qt = Math.atan(j) * 180 / Math.PI;
                S.point[0] < c.point[0] && (Qt += 180), r.rotate(-Qt * Math.PI / 180);
              }
              r.translate(D, Y, 0), P -= i[0] * p[_].an * 5e-3, p[_ + 1] && R !== p[_ + 1].ind && (P += p[_].an / 2, P += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (r.translate(h, m2, 0), t.ps && r.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  r.translate(p[_].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[_].line]), 0, 0);
                  break;
                case 2:
                  r.translate(p[_].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[_].line]) / 2, 0, 0);
                  break;
              }
              r.translate(0, -t.ls), r.translate(q, 0, 0), r.translate(i[0] * p[_].an * 5e-3, i[1] * O * 0.01, 0), h += p[_].l + t.tr * 1e-3 * t.finalSize;
            }
            o === "html" ? Ct = r.toCSS() : o === "svg" ? Ct = r.to2dCSS() : It = [r.props[0], r.props[1], r.props[2], r.props[3], r.props[4], r.props[5], r.props[6], r.props[7], r.props[8], r.props[9], r.props[10], r.props[11], r.props[12], r.props[13], r.props[14], r.props[15]], Lt = ct;
          }
          u <= _ ? (E = new oi(Lt, xt, Dt, Ft, Ct, It), this.renderedLetters.push(E), u += 1, this.lettersChangedFlag = true) : (E = this.renderedLetters[_], this.lettersChangedFlag = E.update(Lt, xt, Dt, Ft, Ct, It) || this.lettersChangedFlag);
        }
      }
    }, Jt.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, Jt.prototype.mHelper = new ot(), Jt.prototype.defaultPropsArray = [], X([rt], Jt);
    function yt() {
    }
    yt.prototype.initElement = function(t, e, i) {
      this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new lt(this, t.t, this.dynamicProperties), this.textAnimator = new Jt(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, yt.prototype.prepareFrame = function(t) {
      this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, yt.prototype.createPathShape = function(t, e) {
      var i, s = e.length, n, r = "";
      for (i = 0; i < s; i += 1) e[i].ty === "sh" && (n = e[i].ks.k, r += ps(n, n.i.length, true, t));
      return r;
    }, yt.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, yt.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, yt.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, yt.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, n) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
          break;
      }
      e.translate(s, n, 0);
    }, yt.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
    }, yt.prototype.emptyProp = new oi(), yt.prototype.destroy = function() {
    }, yt.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
    };
    var yr = { shapes: [] };
    function Mt(t, e, i) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
    }
    X([Nt, re, be, ne, zt, Se, yt], Mt), Mt.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = W("text"));
    }, Mt.prototype.buildTextContents = function(t) {
      for (var e = 0, i = t.length, s = [], n = ""; e < i; ) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(n), n = "") : n += t[e], e += 1;
      return s.push(n), s;
    }, Mt.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var i = t.shapes[0];
        if (i.it) {
          var s = i.it[i.it.length - 1];
          s.s && (s.s.k[0] = e, s.s.k[1] = e);
        }
      }
      return t;
    }, Mt.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var t, e, i = this.textProperty.currentData;
      this.renderedLetters = $(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
      var s = this.globalData.fontManager.getFontByName(i.f);
      if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
      else {
        this.layerElement.setAttribute("font-family", s.fFamily);
        var n = i.fWeight, r = i.fStyle;
        this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", n);
      }
      this.layerElement.setAttribute("aria-label", i.t);
      var o = i.l || [], u = !!this.globalData.fontManager.chars;
      e = o.length;
      var h, m2 = this.mHelper, _ = "", M = this.data.singleShape, p = 0, b = 0, P = true, S = i.tr * 1e-3 * i.finalSize;
      if (M && !u && !i.sz) {
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
        C.setAttribute("text-anchor", y), C.setAttribute("letter-spacing", S);
        var d = this.buildTextContents(i.finalText);
        for (e = d.length, b = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1) h = this.textSpans[t].span || W("tspan"), h.textContent = d[t], h.setAttribute("x", 0), h.setAttribute("y", b), h.style.display = "inherit", C.appendChild(h), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = h, b += i.finalLineHeight;
        this.layerElement.appendChild(C);
      } else {
        var f = this.textSpans.length, c;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !u || !M || t === 0) {
            if (h = f > t ? this.textSpans[t].span : W(u ? "g" : "text"), f <= t) {
              if (h.setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = h, u) {
                var g = W("g");
                h.appendChild(g), this.textSpans[t].childSpan = g;
              }
              this.textSpans[t].span = h, this.layerElement.appendChild(h);
            }
            h.style.display = "inherit";
          }
          if (m2.reset(), M && (o[t].n && (p = -S, b += i.yOffset, b += P ? 1 : 0, P = false), this.applyTextPropertiesToMatrix(i, m2, o[t].line, p, b), p += o[t].l || 0, p += S), u) {
            c = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily);
            var A;
            if (c.t === 1) A = new Ae(c.data, this.globalData, this);
            else {
              var T = yr;
              c.data && c.data.shapes && (T = this.buildShapeData(c.data, i.finalSize)), A = new Q(T, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var x = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy();
            }
            this.textSpans[t].glyph = A, A._debug = true, A.prepareFrame(0), A.renderFrame(), this.textSpans[t].childSpan.appendChild(A.layerElement), c.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")");
          } else M && h.setAttribute("transform", "translate(" + m2.props[12] + "," + m2.props[13] + ")"), h.textContent = o[t].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        M && h && h.setAttribute("d", _);
      }
      for (; t < this.textSpans.length; ) this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = true;
    }, Mt.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = false;
        var t = this.layerElement.getBBox();
        this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
      }
      return this.bbox;
    }, Mt.prototype.getValue = function() {
      var t, e = this.textSpans.length, i;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1) i = this.textSpans[t].glyph, i && (i.prepareFrame(this.comp.renderedFrame - this.data.st), i._mdf && (this._mdf = true));
    }, Mt.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = true;
        var t, e, i = this.textAnimator.renderedLetters, s = this.textProperty.currentData.l;
        e = s.length;
        var n, r, o;
        for (t = 0; t < e; t += 1) s[t].n || (n = i[t], r = this.textSpans[t].span, o = this.textSpans[t].glyph, o && o.renderFrame(), n._mdf.m && r.setAttribute("transform", n.m), n._mdf.o && r.setAttribute("opacity", n.o), n._mdf.sw && r.setAttribute("stroke-width", n.sw), n._mdf.sc && r.setAttribute("stroke", n.sc), n._mdf.fc && r.setAttribute("fill", n.fc));
      }
    };
    function hi(t, e, i) {
      this.initElement(t, e, i);
    }
    X([ke], hi), hi.prototype.createContent = function() {
      var t = W("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    };
    function jt(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
    }
    jt.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, jt.prototype.renderFrame = function() {
    }, jt.prototype.getBaseElement = function() {
      return null;
    }, jt.prototype.destroy = function() {
    }, jt.prototype.sourceRectAtTime = function() {
    }, jt.prototype.hide = function() {
    }, X([Nt, re, ne, zt], jt);
    function it() {
    }
    X([ht], it), it.prototype.createNull = function(t) {
      return new jt(t, this.globalData, this);
    }, it.prototype.createShape = function(t) {
      return new Q(t, this.globalData, this);
    }, it.prototype.createText = function(t) {
      return new Mt(t, this.globalData, this);
    }, it.prototype.createImage = function(t) {
      return new ke(t, this.globalData, this);
    }, it.prototype.createSolid = function(t) {
      return new hi(t, this.globalData, this);
    }, it.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var i = W("clipPath"), s = W("rect");
      s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
      var n = ft();
      i.setAttribute("id", n), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + dt() + "#" + n + ")"), e.appendChild(i), this.layers = t.layers, this.elements = $(t.layers.length);
    }, it.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, it.prototype.updateContainerSize = function() {
    }, it.prototype.findIndexByInd = function(t) {
      var e = 0, i = this.layers.length;
      for (e = 0; e < i; e += 1) if (this.layers[e].ind === t) return e;
      return -1;
    }, it.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        e[t] = true;
        var i = this.createItem(this.layers[t]);
        if (e[t] = i, Te() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
          var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (s === -1) return;
          if (!this.elements[s] || this.elements[s] === true) this.buildItem(s), this.addPendingElement(i);
          else {
            var n = e[s], r = n.getMatte(this.layers[t].tt);
            i.setMatte(r);
          }
        }
      }
    }, it.prototype.checkPendingElements = function() {
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
    }, it.prototype.renderFrame = function(t) {
      if (!(this.renderedFrame === t || this.destroyed)) {
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
        var e, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf) for (e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, it.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        for (var s = 0, n; s < e; ) this.elements[s] && this.elements[s] !== true && this.elements[s].getBaseElement() && (n = this.elements[s].getBaseElement()), s += 1;
        n ? this.layerElement.insertBefore(i, n) : this.layerElement.appendChild(i);
      }
    }, it.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, it.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function Et() {
    }
    X([Nt, re, ne, zt, Se], Et), Et.prototype.initElement = function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
    }, Et.prototype.prepareFrame = function(t) {
      if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var i, s = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = true));
      }
    }, Et.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, Et.prototype.setElements = function(t) {
      this.elements = t;
    }, Et.prototype.getElements = function() {
      return this.elements;
    }, Et.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
    }, Et.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function Ae(t, e, i) {
      this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? $(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? V.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    X([it, Et, be], Ae), Ae.prototype.createComp = function(t) {
      return new Ae(t, this.globalData, this);
    };
    function li(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = W("svg");
      var i = "";
      if (e && e.title) {
        var s = W("title"), n = ft();
        s.setAttribute("id", n), s.textContent = e.title, this.svgElement.appendChild(s), i += n;
      }
      if (e && e.description) {
        var r = W("desc"), o = ft();
        r.setAttribute("id", o), r.textContent = e.description, this.svgElement.appendChild(r), i += " " + o;
      }
      i && this.svgElement.setAttribute("aria-labelledby", i);
      var u = W("defs");
      this.svgElement.appendChild(u);
      var h = W("g");
      this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && e.hideOnTransparent === false), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, defs: u, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
    }
    return X([it], li), li.prototype.createComp = function(t) {
      return new Ae(t, this.globalData, this);
    }, Ms("svg", li), Ot.registerModifier("tm", _t), Ot.registerModifier("pb", ce), Ot.registerModifier("rp", At), Ot.registerModifier("rd", ve), Ot.registerModifier("zz", me), Ot.registerModifier("op", ge), Z;
  });
});
var lottie_lightKMJEUZFY = br();
export {
  lottie_lightKMJEUZFY as default
};
/*! Bundled license information:

@dotlottie/common/dist/lottie_light-KMJEUZFY.js:
  (*! Bundled license information:
  
  lottie-web/build/player/lottie_light.js:
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
//# sourceMappingURL=lottie_light-KMJEUZFY-UXMJUCYA.js.map
