"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
const _sfc_main = {
  data() {
    return {
      phoneNumber: "",
      // 绑定手机号输入框
      password: "",
      cardTip: false,
      faceTip: false,
      popHeight: 150,
      cardState: false,
      faceState: false
    };
  },
  onshow: function() {
    console.log("111");
    toTabbar();
  },
  methods: {
    // 提交登录的方法
    submitLogin() {
      if (!this.phoneNumber || this.phoneNumber.length !== 11) {
        common_vendor.index.showToast({
          title: "手机号不能为空且必须为11位",
          icon: "none"
        });
        return;
      }
      this.$store.commit("SET_PHONE", this.phoneNumber);
      this.testHandler();
      this.testHandler2();
    },
    getUser() {
      api_login.getUser(this.phoneNumber).then((res) => {
        console.log("请求成功");
        this.cardTip = !res.data.cardState;
        this.faceTip = !res.data.faceState;
        this.cardState = res.data.cardState;
        this.faceState = res.data.faceState;
      }).catch((error) => {
        console.error("请求失败:", error);
      });
    },
    ignoreCard() {
      this.cardTip = 0;
      this.cardState = 1;
      this.toTabbar();
    },
    toCard() {
      common_vendor.index.navigateTo({
        url: "/pages/login/card"
      });
      this.cardTip = 0;
    },
    ignoreFace() {
      this.faceTip = 0;
      this.faceState = 1;
      this.toTabbar();
    },
    toFace() {
      common_vendor.index.navigateTo({
        url: "/pages/login/face"
      });
      this.faceTip = 0;
    },
    toTabbar() {
      if (this.cardState && this.faceState) {
        common_vendor.index.reLaunch({
          url: "/pages/index/index"
        });
      }
    },
    toFacing() {
      common_vendor.index.navigateTo({
        url: "/pages/login/facing"
      });
    },
    testHandler() {
      this.cardTip = this.cardTip ? 0 : 1;
    },
    testHandler2() {
      this.faceTip = this.faceTip ? 0 : 1;
    },
    testHandler3() {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    },
    testHandler4() {
      common_vendor.index.reLaunch({
        url: "/pages/message/test"
      });
    }
  }
};
if (!Array) {
  const _easycom_iui_divider2 = common_vendor.resolveComponent("iui-divider");
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  const _easycom_iui_popup2 = common_vendor.resolveComponent("iui-popup");
  (_easycom_iui_divider2 + _easycom_iui_button2 + _easycom_iui_popup2)();
}
const _easycom_iui_divider = () => "../../components/iui-design/components/iui-divider/iui-divider.js";
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
const _easycom_iui_popup = () => "../../components/iui-design/components/iui-popup/iui-popup.js";
if (!Math) {
  (_easycom_iui_divider + _easycom_iui_button + _easycom_iui_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.phoneNumber,
    b: common_vendor.o(($event) => $data.phoneNumber = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.toFace && $options.toFace(...args)),
    f: common_vendor.o($options.submitLogin),
    g: common_vendor.p({
      type: "primary"
    }),
    h: common_vendor.o($options.ignoreCard),
    i: common_vendor.p({
      shape: "round",
      type: "outline"
    }),
    j: common_vendor.o($options.toCard),
    k: common_vendor.p({
      shape: "round",
      type: "primary"
    }),
    l: common_vendor.o(($event) => $data.cardTip = $event),
    m: common_vendor.p({
      height: "{{popHeight}}",
      modelValue: $data.cardTip
    }),
    n: common_vendor.o($options.ignoreFace),
    o: common_vendor.p({
      shape: "round",
      type: "outline"
    }),
    p: common_vendor.o($options.toFacing),
    q: common_vendor.p({
      shape: "round",
      type: "primary"
    }),
    r: common_vendor.o(($event) => $data.faceTip = $event),
    s: common_vendor.p({
      height: "{{popHeight}}",
      modelValue: $data.faceTip
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
