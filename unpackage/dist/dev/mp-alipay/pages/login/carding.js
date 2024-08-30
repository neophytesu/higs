"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
const _sfc_main = {
  data() {
    return {
      name: "",
      identity: ""
    };
  },
  methods: {
    registerHandler() {
      api_login.registerCard();
      common_vendor.index.navigateBack();
    },
    registerCard() {
      api_login.registerCard(this.$store.state.phone, this.name, this.identity).then((res) => {
        console.log("getCard请求成功");
      }).catch((error) => {
        console.error("getCard请求失败:", error);
      });
    }
  }
};
if (!Array) {
  const _easycom_iui_divider2 = common_vendor.resolveComponent("iui-divider");
  const _easycom_iui_input2 = common_vendor.resolveComponent("iui-input");
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  (_easycom_iui_divider2 + _easycom_iui_input2 + _easycom_iui_button2)();
}
const _easycom_iui_divider = () => "../../components/iui-design/components/iui-divider/iui-divider.js";
const _easycom_iui_input = () => "../../components/iui-design/components/iui-input/iui-input.js";
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
if (!Math) {
  (_easycom_iui_divider + _easycom_iui_input + _easycom_iui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.name = $event),
    b: common_vendor.p({
      label: "姓名",
      placeholder: "请输入您的名称",
      clearable: true,
      modelValue: $data.name
    }),
    c: common_vendor.o(($event) => $data.identity = $event),
    d: common_vendor.p({
      label: "身份证",
      placeholder: "请输入您的身份证",
      clearable: true,
      modelValue: $data.identity
    }),
    e: common_vendor.o($options.registerHandler),
    f: common_vendor.p({
      type: "primary",
      shape: "round"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
