(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/cropper/cropper"], { "451f": function (t, e, i) { "use strict"; var r = i("a194"),
        o = i.n(r);
      o.a }, "599b": function (t, e, i) { "use strict";
      i.r(e); var r = i("94af"),
        o = i.n(r); for (var n in r)["default"].indexOf(n) < 0 && function (t) { i.d(e, t, (
      function () { return r[t] })) }(n);
      e["default"] = o.a }, "83c6": function (t, e, i) { "use strict";
      (function (t, e) { var r = i("47a9");
        i("8ae9");
        r(i("3240")); var o = r(i("e3f5"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(o.default) }).call(this, i("3223")["default"], i("df3c")[
        "createPage"]) }, "94af": function (t, e, i) { "use strict";
      (function (t) { var r = i("47a9");
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var o = r(i("f082")),
          n = { props: { boundStyle: { type: Object, default: function () { return { lineWidth: 4,
                    borderColor: "rgb(245, 245, 245)", mask: "rgba(0, 0, 0, 0.35)" } } } },
        data: function () { return { bottomNavHeight: 50, originWidth: 200, width: 0, height: 0,
                cropperOpt: { id: "cropper", targetId: "targetCropper", pixelRatio: 1, width: 0, height: 0,
                  scale: 2.5, zoom: 8, cut: { x: (this.width - this.originWidth) / 2, y: (this.height - this
                      .originWidth) / 2, width: this.originWidth, height: this.originWidth },
                  boundStyle: { lineWidth: t.upx2px(this.boundStyle.lineWidth), mask: this.boundStyle.mask,
                    color: this.boundStyle.borderColor } }, destWidth: 200, rectWidth: 200, destHeight: 200,
                rectHeight: 200, fileType: "jpg", src: "" } }, onLoad: function (e) { var i = this;
              t.setNavigationBarTitle({ title: this.$t("cropper.cropper.title") }); var r = t
                .getSystemInfoSync(); if (this.width = r.windowWidth, this.height = r.windowHeight - this
                .bottomNavHeight, this.cropperOpt.width = this.width, this.cropperOpt.height = this.height,
                this.cropperOpt.pixelRatio = r.pixelRatio, e.destWidth && (this.destWidth = e.destWidth), e
                .destHeight && (this.destHeight = e.destHeight), e.rectWidth) { var n = Number(e.rectWidth),
                  c = Number(e.rectHeight);
                this.cropperOpt.cut = { x: (this.width - n) / 2, y: (this.height - c) / 2, width: n,
                  height: c } } this.rectWidth = e.rectWidth, this.rectHeight = e.rectHeight, e.fileType && (
                this.fileType = e.fileType), this.cropper = new o.default(this.cropperOpt).on("ready", (
                function (t) {})).on("beforeImageLoad", (function (t) {})).on("imageLoad", (function (
                t) {})).on("beforeDraw", (function (t, e) {})), t
            .setNavigationBarColor({ frontColor: "#ffffff", backgroundColor: "#000000" }), t
            .chooseImage({ count: 1, sizeType: ["compressed"], sourceType: ["album", "camera"],
                success: function (t) { i.src = t.tempFilePaths[0], i.cropper.pushOrign(i.src) } }) },
            methods: { touchStart: function (t) { this.cropper.touchStart(t) }, touchMove: function (t) { this
                  .cropper.touchMove(t) }, touchEnd: function (t) { this.cropper.touchEnd(t) },
              getCropperImage: function () { var e = this,
                    i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (!this.src)
                  return this.$u.toast(this.$t("cropper.cropper.toast")); var r = { destHeight: Number(this
                      .destHeight), destWidth: Number(this.destWidth), fileType: this.fileType };
                  this.cropper.getCropperImage(r, (function (r, o) { o ? t.showModal({ title: e.$t(
                        "app.friendly_reminder"), content: o.message }) : i ? t
                  .previewImage({ current: "", urls: [r] }) : (t.$emit("cropper", r), t.navigateBack()) })) },
              uploadTap: function () { var e = this,
                  i = this;
                t.chooseImage({ count: 1, sizeType: ["original", "compressed"], sourceType: ["album",
                    "camera"], success: function (t) { i.src = t.tempFilePaths[0], i.cropper.pushOrign(e
                      .src) } }) } } };
        e.default = n }).call(this, i("df3c")["default"]) }, a194: function (t, e, i) {}, e3f5: function (t, e,
    i) { "use strict";
      i.r(e); var r = i("ef8b"),
        o = i("599b"); for (var n in o)["default"].indexOf(n) < 0 && function (t) { i.d(e, t, (
      function () { return o[t] })) }(n);
      i("451f"); var c = i("828b"),
        h = Object(c["a"])(o["default"], r["b"], r["c"], !1, null, "1444f94e", null, !1, r["a"], void 0);
      e["default"] = h.exports }, ef8b: function (t, e, i) { "use strict";
      i.d(e, "b", (function () { return r })), i.d(e, "c", (function () { return o })), i.d(e, "a", (
      function () {})); var r = function () { var t = this.$createElement,
            e = (this._self._c, this.$t("common.re_elect")),
            i = this.$t("common.重选");
          this.$mp.data = Object.assign({}, { $root: { m0: e, m1: i } }) },
        o = [] } },
  [
    ["83c6", "common/runtime", "common/vendor"]
  ]
]);
