(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/main"], { "0359": function (t, e, o) { "use strict"; var n = o("945a"),
        a = o.n(n);
      a.a }, "11cc": function (t, e, o) { "use strict";
      o.r(e); var n = o("8636"),
        a = o.n(n); for (var r in n)["default"].indexOf(r) < 0 && function (t) { o.d(e, t, (
      function () { return n[t] })) }(r);
      e["default"] = a.a }, 8636: function (t, e, o) { "use strict";
      (function (t) { var n = o("47a9");
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var a = n(o("3b2d")),
          r = n(o("f07b")),
          i = ["index/index", "shop/index", "order/index", "user/index"],
          c = { globalData: {}, onLaunch: function (e) { t.setStorageSync("opt", JSON.stringify(e)), this
                .getAppletBase(), t.setStorageSync("system", t.getSystemInfoSync()) },
            methods: { getQrcode: function (e) { var o = arguments.length > 1 && void 0 !== arguments[1] &&
                    arguments[1],
                    n = this; if (o) { var a = e.split("/scene/");
                    e = a[1] } if (e = e.split("-"), "sn" == e[0]) return n.scanQrcode(e[1]), !0; if (
                    "applet" == e[0]) return !0; if ("shop" == e[0]) return n.goTo("shop/index"), !0; if (
                    "table" == e[0]) return t.setStorageSync("table_id", e[1]), n.goTo("shop/index"), !0; if (
                    "paybill" == e[0]) return n.goTo("order/pay_bill"), !0; if ("wifi" == e[0]) return n.goTo(
                    "shop/wifi"), !0; if ("url" == e[0]) { for (var r = e[1], i = 2; i < e.length; i++) r +=
                      "/" + e[i]; return n.goTo(r), !0 } }, scanQrcode: function (t) { var e = this,
                  o = "";
                e._get("qrcode/detail", { id: t }, (function (t) { var n = t.data;
                  10 == n.type.value && (o = "applet"), 20 == n.type.value && (o = "shop"), 30 == n.type
                    .value && (o = "table-" + n.table_id), 40 == n.type.value && (o = "wifi"), 50 == n
                    .type.value && (o = "paybill"), 60 == n.type.value && (o = "url-" + n.url), e
                    .getQrcode(o) })) }, getUserId: function () { var t = this.getUser(); return t.user_id ||
                  "" }, getUser: function () { return t.getStorageSync("user") || "" },
          getApplet: function () { var e, o = this; if (e = t.getStorageSync("applet")) return e;
                o.getAppletBase((function () { o.getApplet() })) }, getAppletBase: function (e) { var o = this;
                o._get("applet/base", { opt: t.getStorageSync("opt") }, (function (n) { var a = n.data;
                  a.domain = r.default.domain, a.version = a.version, t.setStorageSync("applet",
                  a); for (var i = 0; i < a.tabbar.list.length; i++) t.setTabBarItem({ index: i, text: a
                      .tabbar.list[i].text, iconPath: a.tabbar.list[i].iconPath, selectedIconPath: a
                      .tabbar.list[i].selectedIconPath });
                  t.setTabBarStyle({ color: a.tabbar.style.color, selectedColor: a.tabbar.style
                      .selectedColor, backgroundColor: a.tabbar.style.backgroundColor,
                    borderStyle: a.tabbar.style.borderStyle }), o.autoLogin((function (t) { o
                      .$isResolve() })), o.updateApp(), e && e(a) }), !1, !1) }, autoLogin: function (e) { var
                  o = this;
                t.login({ success: function (n) { o._post_form("user/autoLogin", { code: n.code }, (function (
                      o) { t.setStorageSync("user", o.data), e && e(o.data) }), !1, !1) } }) },
              getPhoneNumber: function (e, o) { var n, a, r = this;
                  n = e.detail.iv, a = e.detail.encryptedData, t.login({ success: function (e) { r._post_form(
                        "user/getPhoneNumber", { code: e.code, iv: n, encryptedData: a }, (function (
                        e) { t.setStorageSync("user", e.data), o && o(e.msg) }), !1, (function () {})) } }) },
              setTitle: function (e) { var o, n = this;
                (o = t.getStorageSync("applet")) ? (t.setNavigationBarTitle({ title: o.navbar.params.title }),
                  t.setNavigationBarColor({ frontColor: "black" == o.navbar.style.titleTextColor ?
                      "#000000" : "#ffffff", backgroundColor: o.navbar.style.titleBackgroundColor }), e && e(
                    o)) : n.getAppletBase((function () { n.setTitle() })) }, checkIsLogin: function () { var t =
                  this.getUser(); return t.is_login || !1 }, doLogin: function () { var e = this,
                  o = getCurrentPages(),
                  n = o[o.length - 1],
                  a = n.route; "pages/login/index" != a && t.setStorageSync("currentPage", a), t
              .showModal({ title: "友情提示", content: "您还没有登录", confirmText: "去登录", confirmColor: "#19be6b",
                  success: function (t) { t.confirm && e.goTo("login/index") } }) },
          getTabBarLinks: function () { return i }, goTo: function (e) { if (!e || 0 == e.length) return !1; var
                    o = this.getTabBarLinks();
                  o.indexOf(e) > -1 ? t.switchTab({ url: "/pages/" + e }) : t.navigateTo({ url: "/pages/" +
                    e }) }, getParamet: function (t) { return t = t || {}, t.mp = "weixin", t.user_id = this
                  .getUserId(), t }, _get: function (e, o, n, i, c, u) { var s = this;
                t.showLoading({ title: "正在加载中", mask: !0 }), o = s.getParamet(o); var l = function () { t
                    .request({ url: r.default.domain + r.default.api_url + e,
                      header: { "content-type": "application/json" }, data: o, success: function (
                      t) { return 200 !== t.statusCode || "object" !== (0, a.default)(t.data) ? (s
                            .showError("网络请求出错! " + e), !1) : -1 === t.data.code ? (s.doLogin(), !1) :
                          0 === t.data.code ? (s.showError(t.data.msg, (function () { i && i(t) })), !
                          1) : void(n && n(t.data)) }, fail: function (t) { s.showError(t.errMsg, (
                          function () { i && i(t) })) }, complete: function (e) { t.hideLoading(), c && c(
                          e) } }) };
                u ? s.doLogin(l) : l() }, _post_form: function (e, o, n, i, c) { t.showLoading({ title: "正在加载中",
                  mask: !0 }); var u = this;
                o = u.getParamet(o), t.request({ url: r.default.domain + r.default.api_url + e,
                  header: { "content-type": "application/x-www-form-urlencoded" }, method: "POST",
                  data: o, success: function (t) { return 200 !== t.statusCode || "object" !== (0, a
                      .default)(t.data) ? (u.showError("网络请求出错! " + e), !1) : -1 === t.data.code ? (u
                      .doLogin(), !1) : 0 === t.data.code ? (u.showError(t.data.msg, (function () { i
                        && i(t) })), !1) : void(n && n(t.data)) }, fail: function (t) { u.showError(t
                      .errMsg, (function () { i && i(t) })) }, complete: function (e) { t.hideLoading(),
                      c && c(e) } }) }, _upload_file: function (e, o, n, a, i) { var c = this;
                o = c.getParamet(o), t.uploadFile({ url: r.default.domain + "/addons/upload/upload/image",
                  filePath: e, name: "iFile", formData: o, success: function (t) { return 200 !== t
                      .statusCode ? (c.showError("网络请求出错! " + url), !1) : -1 === t.data.code ? (c
                        .doLogin((function () { c._upload_file(url, o, n, a) })), !1) : 0 === t.data
                      .code ? (c.showError(t.data.msg, (function () { a && a(t) })), !1) : void(n && n(
                        JSON.parse(t.data))) }, fail: function (t) { c.showError(t.errMsg, (
                  function () { a && a(t) })) }, complete: function (t) { i && i(t) } }) },
              showSuccess: function (e, o) { t.showToast({ title: e, icon: "success", mask: !0, duration: 3e3,
                    success: function () { o && setTimeout((function () { o() }), 1500) } }) },
              showError: function (e, o) { t.showModal({ title: "友情提示", content: e, showCancel: !1,
                    success: function (t) { o && o() } }) }, updateApp: function () { if (!t.canIUse(
                    "getUpdateManager")) return !1; var e = t.getUpdateManager();
                e.onCheckForUpdate((function (t) {})), e.onUpdateReady((function () { t
                .showModal({ title: "更新提示", content: "新版本已经准备好，即将重启应用", showCancel: !1,
                    success: function (t) { t.confirm && e.applyUpdate() } }) })), e.onUpdateFailed((
                  function () { t.showModal({ title: "更新提示", content: "新版本下载失败", showCancel: !1 }) })) } } };
        e.default = c }).call(this, o("df3c")["default"]) }, "885b": function (t, e, o) { "use strict";
      o.r(e); var n = o("11cc"); for (var a in n)["default"].indexOf(a) < 0 && function (t) { o.d(e, t, (
          function () { return n[t] })) }(a);
      o("0359"); var r = o("828b"),
        i = Object(r["a"])(n["default"], void 0, void 0, !1, null, null, null, !1, void 0, void 0);
      e["default"] = i.exports }, "945a": function (t, e, o) {}, e3ec: function (t, e, o) { "use strict";
      (function (t, e, n) { var a = o("47a9"),
          r = a(o("7ca3"));
        o("8ae9"); var i = a(o("3240")),
          c = a(o("885b")),
          u = a(o("da01")),
          s = a(o("9125")),
          l = a(o("4d79"));

        function d(t, e) { var o = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object
              .getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), o
              .push.apply(o, n) } return o } t.__webpack_require_UNI_MP_PLUGIN__ = o, i.default.use(u
        .default); var f = o("7760");
        i.default.mixin(f), i.default.use(l.default); var p = { locale: e.getLocale(), messages: s.default },
          g = new l.default(p);
        i.default.config.productionTip = !1, i.default.prototype.$onLaunched = new Promise((function (t) { i
              .default.prototype.$isResolve = t })), i.default.mixin({ methods: { setData: function (t, e) { var
                  o = this;
                Object.keys(t).forEach((function (e) { var n, a, r = t[e];
                    e = e.replace(/\]/g, "").replace(/\[/g, "."); var i = e.lastIndexOf("."); - 1 != i ?
                      (a = e.slice(i + 1), n = function (t, e, o) { return e = e.split("."), e.forEach((
                          function (e) { if (null === t[e] || void 0 === t[e]) { t[e] = /^[0-9]+$/
                                .test(o) ? [] : {}, t = t[e] } else t = t[e] })), t }(o, e.slice(0,
                        i), a)) : (a = e, n = o), n.$data && void 0 === n.$data[a] ? (Object
                        .defineProperty(n, a, { get: function () { return n.$data[a] }, set: function (
                              t) { n.$data[a] = t, o.$forceUpdate() }, enumerable: !0, configurable: !
                            0 }), n[a] = r) : o.$set(n, a, r) })),
                  function (t) { return "function" == typeof t || !1 }(e) && this.$nextTick(e) } } }), c.default
          .mpType = "app"; var h = new i.default(function (t) { for (var e = 1; e < arguments.length; e++) { var
              o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? d(Object(o), !0).forEach((function (e) {
              (0, r.default)(t, e, o[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(
              t, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach((function (e) { Object
                .defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e)) })) } return t }({ i18n: g }, c
          .default));
        n(h).$mount() }).call(this, o("3223")["default"], o("df3c")["default"], o("df3c")["createApp"]) } },
  [
    ["e3ec", "common/runtime", "common/vendor"]
  ]
]);
