"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      elemeRecord: 8,
      //电子病历
      mevisRecord: 14,
      //就诊记录
      regisRecord: 18,
      //挂号记录
      feeRecord: 84,
      //缴费记录
      isLoggedIn: true,
      userInfo: {}
    };
  },
  computed: {},
  created() {
  },
  methods: {
    onLoginClick() {
    },
    onShareClick($event, args) {
      console.log($event);
      console.log("onShareClick");
      common_vendor.index.share({
        provider: "weixin",
        scene: "WXSceneSession",
        type: 0,
        href: "http://uniapp.dcloud.io/",
        title: "分享的标题",
        summary: "分享的内容",
        imageUrl: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
        success: function(res) {
          console.log("success:" + JSON.stringify(res));
          hm;
        },
        fail: function(err) {
          console.log("fail:" + JSON.stringify(err));
        }
      });
    },
    toFee() {
      const record = this.feeRecord;
      common_vendor.index.navigateTo({
        url: `/pages/home/fee?record=${record}`
      });
    }
  }
};
if (!Array) {
  const _easycom_iui_cell2 = common_vendor.resolveComponent("iui-cell");
  const _easycom_iui_list2 = common_vendor.resolveComponent("iui-list");
  (_easycom_iui_cell2 + _easycom_iui_list2)();
}
const _easycom_iui_cell = () => "../../components/iui-design/components/iui-cell/iui-cell.js";
const _easycom_iui_list = () => "../../components/iui-design/components/iui-list/iui-list.js";
if (!Math) {
  (_easycom_iui_cell + _easycom_iui_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isLoggedIn
  }, $data.isLoggedIn ? {
    b: common_assets._imports_0$1
  } : {
    c: common_vendor.o((...args) => $options.onLoginClick && $options.onLoginClick(...args))
  }, {
    d: common_vendor.t(this.elemeRecord),
    e: common_vendor.t(this.mevisRecord),
    f: common_vendor.t(this.regisRecord),
    g: common_vendor.t(this.feeRecord),
    h: common_vendor.o((...args) => $options.toFee && $options.toFee(...args)),
    i: common_vendor.p({
      label: "个人信息"
    }),
    j: common_vendor.p({
      label: "意见反馈"
    }),
    k: common_vendor.p({
      label: "分享链接"
    }),
    l: common_vendor.p({
      label: "关于我们"
    }),
    m: common_vendor.p({
      arrow: true
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-07e72d3c"]]);
my.createPage(MiniProgramPage);
