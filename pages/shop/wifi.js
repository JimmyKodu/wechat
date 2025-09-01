(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/shop/wifi"], { "54a5": function (n, e, t) { "use strict";
      t.d(e, "b", (function () { return o })), t.d(e, "c", (function () { return r })), t.d(e, "a", (
    function () { return i })); var i = { uIcon: function () { return Promise.all([t.e("common/vendor"), t.e(
              "uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,
            "fa8a")) }, "u-Text": function () { return Promise.all([t.e("common/vendor"), t.e(
                "uni_modules/uview-ui/components/u--text/u--text")]).then(t.bind(null, "5f06")) },
          uButton: function () { return Promise.all([t.e("common/vendor"), t.e(
                "uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null, "1750")) } },
        o = function () { var n = this.$createElement;
          this._self._c },
        r = [] }, "6b52": function (n, e, t) { "use strict";
      t.r(e); var i = t("54a5"),
        o = t("9dac"); for (var r in o)["default"].indexOf(r) < 0 && function (n) { t.d(e, n, (
      function () { return o[n] })) }(r);
      t("b81c"); var u = t("828b"),
        c = Object(u["a"])(o["default"], i["b"], i["c"], !1, null, "4ba68ef4", null, !1, i["a"], void 0);
      e["default"] = c.exports }, 7256: function (n, e, t) {}, "7c5c": function (n, e, t) { "use strict";
      (function (n, i) { var o = t("47a9");
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var r = o(t("7eb4")),
          u = o(t("ee10")),
          c = getApp(),
          s = { data: function () { return { applet: {}, wifi: {}, is_connected: !1, loading: !1 } }, props: {},
            onLoad: function (e) { var t = this; return (0, u.default)(r.default.mark((function e() { var
                i; return r.default.wrap((function (e) { while (1) switch (e.prev = e.next) {
                    case 0:
                      return i = t, e.next = 3, i.$onLaunched;
                    case 3:
                      i.applet = n.getStorageSync("applet"), i.getWifi();
                    case 5:
                    case "end":
                      return e.stop() } }), e) })))() }, methods: { getWifi: function () { var n = this;
                c._get("setting/wifi", {}, (function (e) { n.wifi = e.data, i.startWifi({ success: function (
                      e) { "startWifi:ok" == e.errMsg ? i.getConnectedWifi({ success: function (
                        e) { if ("getConnectedWifi:ok" == e.errMsg && e.wifi.SSID == n.wifi
                            .ss_id) return n.is_connected = !0, !0 } }) : c.showError(
                        "WIFI模块启动失败") } }) })) }, connected: function () { var n = this; if ("" == n.wifi
                  .ss_id || "" == n.wifi.ss_key) return c.showError("商家未配置WIFI链接信息"), !1;
                n.loading = !0, i.startWifi({ success: function (e) { "startWifi:ok" == e.errMsg ? i
                      .connectWifi({ SSID: n.wifi.ss_id, password: n.wifi.ss_key, success: function (
                        e) { "connectWifi:ok" == e.errMsg ? (n.is_connected = !0, n.loading = !1, c
                            .showSuccess("WIFI链接成功", (function () { c.goTo("index/index") }))) : (
                            n.loading = !1, c.showError("WIFI链接失败")) }, fail: function (e) { n
                            .loading = !1, "connectWifi:fail:wifi is disable" == e.errMsg ? c
                            .showError("请先开启手机WIFI模块") : c.showError("WIFI链接失败") } }) : (n.loading = !1,
                        c.showError("WIFI模块启动失败")) } }) } } };
        e.default = s }).call(this, t("df3c")["default"], t("3223")["default"]) }, "9dac": function (n, e,
    t) { "use strict";
      t.r(e); var i = t("7c5c"),
        o = t.n(i); for (var r in i)["default"].indexOf(r) < 0 && function (n) { t.d(e, n, (
      function () { return i[n] })) }(r);
      e["default"] = o.a }, b81c: function (n, e, t) { "use strict"; var i = t("7256"),
        o = t.n(i);
      o.a }, e4e4: function (n, e, t) { "use strict";
      (function (n, e) { var i = t("47a9");
        t("8ae9");
        i(t("3240")); var o = i(t("6b52"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(o.default) }).call(this, t("3223")["default"], t("df3c")[
        "createPage"]) } },
  [
    ["e4e4", "common/runtime", "common/vendor"]
  ]
]);
