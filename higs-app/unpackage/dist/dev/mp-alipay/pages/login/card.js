"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
const _sfc_main = {
  data() {
    return {
      cardNumber: "",
      cardState: false
    };
  },
  methods: {
    cardRegister() {
      api_login.getCard();
      if (this.cardState) {
        this.bindCard();
        common_vendor.index.navigateBack();
      } else {
        this.showToast2();
      }
    },
    getCard() {
      getUser(this.cardNumber).then((res) => {
        console.log("getCard请求成功");
        this.cardState = res.data.cardState;
      });
    },
    bindCard() {
      api_login.bindCard(this.$store.state.phone, this.cardNumber).then((res) => {
        console.log("bindCard请求成功");
        showToast();
      });
    },
    showToast1() {
      this.$refs.toast - success.show();
    },
    showToast2() {
      this.$refs.toast - error.show();
    },
    toCarding() {
      common_vendor.index.navigateTo({
        url: "/pages/login/carding"
      });
    },
    goBack() {
      common_vendor.index.navigateBack();
    }
  }
};
if (!Array) {
  const _easycom_iui_input2 = common_vendor.resolveComponent("iui-input");
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  const _easycom_iui_toast2 = common_vendor.resolveComponent("iui-toast");
  (_easycom_iui_input2 + _easycom_iui_button2 + _easycom_iui_toast2)();
}
const _easycom_iui_input = () => "../../components/iui-design/components/iui-input/iui-input.js";
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
const _easycom_iui_toast = () => "../../components/iui-design/components/iui-toast/iui-toast.js";
if (!Math) {
  (_easycom_iui_input + _easycom_iui_button + _easycom_iui_toast)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.cardNumber = $event),
    b: common_vendor.p({
      clearable: true,
      label: "就诊卡号",
      type: "number",
      placeholder: "请输入您的就诊卡号",
      modelValue: $data.cardNumber
    }),
    c: common_vendor.o((...args) => $options.toCarding && $options.toCarding(...args)),
    d: common_vendor.o($options.cardRegister),
    e: common_vendor.p({
      type: "primary"
    }),
    f: common_vendor.p({
      type: "success",
      position: "bottom",
      duration: "1000"
    }),
    g: common_vendor.p({
      type: "error",
      position: "bottom",
      duration: "2000"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
