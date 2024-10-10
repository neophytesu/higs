"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.ref();
const _sfc_main = {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    // lower(){
    // 	console.log("lower")
    // 	this.checked = true;
    // },
    toRegister() {
      console.log("toRegister");
      if (!this.checked) {
        console.log("checked = false");
        common_vendor.index.showToast({
          title: "请确认并同意",
          position: "bottom",
          icon: "none"
        });
      } else {
        console.log("checked = true");
        common_vendor.index.redirectTo({
          url: "/pages/index/register"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_iui_checkbox2 = common_vendor.resolveComponent("iui-checkbox");
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  const _easycom_iui_toast2 = common_vendor.resolveComponent("iui-toast");
  (_easycom_iui_checkbox2 + _easycom_iui_button2 + _easycom_iui_toast2)();
}
const _easycom_iui_checkbox = () => "../../components/iui-design/components/iui-checkbox/iui-checkbox.js";
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
const _easycom_iui_toast = () => "../../components/iui-design/components/iui-toast/iui-toast.js";
if (!Math) {
  (_easycom_iui_checkbox + _easycom_iui_button + _easycom_iui_toast)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.scrollTop,
    b: common_vendor.o((...args) => _ctx.upper && _ctx.upper(...args)),
    c: common_vendor.o((...args) => _ctx.lower && _ctx.lower(...args)),
    d: common_vendor.o(($event) => this.checked = $event),
    e: common_vendor.p({
      color: "#00B42A",
      label: "我已阅读并同意网站/手机预约途径规则",
      modelValue: this.checked
    }),
    f: common_vendor.o($options.toRegister),
    g: common_vendor.p({
      shape: "round",
      type: "primary"
    }),
    h: common_vendor.p({
      position: "bottom"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
