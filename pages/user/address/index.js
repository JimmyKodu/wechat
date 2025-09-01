(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user/address/index"], { "0815": function (t, e, n) { "use strict";
      n.r(e); var u = n("23ab"),
        i = n.n(u); for (var o in u)["default"].indexOf(o) < 0 && function (t) { n.d(e, t, (
      function () { return u[t] })) }(o);
      e["default"] = i.a }, "0efa": function (t, e, n) { "use strict";
      n.r(e); var u = n("b00b"),
        i = n("0815"); for (var o in i)["default"].indexOf(o) < 0 && function (t) { n.d(e, t, (
      function () { return i[t] })) }(o); var a = n("828b"),
        s = Object(a["a"])(i["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], void 0);
      e["default"] = s.exports }, "23ab": function (t, e, n) { "use strict";
      (function (t) { Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var n = getApp(),
          u = { data: function () { return { applet: {}, list: [], default_id: null, options: null } },
            props: {}, onLoad: function (t) { this.options = t, this.applet = n.getApplet() },
            onShow: function () { this.getList() }, methods: { getList: function () { var t = this;
                n._get("user.address/lists", {}, (function (e) { t.list = e.data.list, t.default_id = e.data
                    .default_id })) }, setDefault: function (e) { var u = this; return u.default_id = e.detail
                  .value, n._post_form("user.address/setDefault", { id: e.detail.value }, (function (
                  e) { "flow" === u.options.from && t.navigateBack() })), !1 }, remove: function (e) { var u =
                  this;
                t.showModal({ title: "提示", content: "您确定要移除当前收货地址吗?", success: function (t) { t.confirm && n
                      ._post_form("user.address/delete", { id: e }, (function (t) { u.getList() })) } }) },
              goTo: function (t) { n.goTo(t) } } };
        e.default = u }).call(this, n("df3c")["default"]) }, "4fda": function (t, e, n) { "use strict";
      (function (t, e) { var u = n("47a9");
        n("8ae9");
        u(n("3240")); var i = u(n("0efa"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default) }).call(this, n("3223")["default"], n("df3c")[
        "createPage"]) }, b00b: function (t, e, n) { "use strict";
      n.d(e, "b", (function () { return i })), n.d(e, "c", (function () { return o })), n.d(e, "a", (
    function () { return u })); var u = { uButton: function () { return Promise.all([n.e("common/vendor"), n.e(
              "uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null, "1750")) } },
        i = function () { var t = this.$createElement,
            e = (this._self._c, this.list.length);
          this.$mp.data = Object.assign({}, { $root: { g0: e } }) },
        o = [] } },
  [
    ["4fda", "common/runtime", "common/vendor"]
  ]
]);
