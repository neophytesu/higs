"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
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
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      label: "头像",
      extra: "头像"
    }),
    b: common_vendor.p({
      label: "用户名",
      extra: "150****7013"
    }),
    c: common_vendor.p({
      label: "密码",
      extra: "10****25"
    }),
    d: common_vendor.p({
      label: "录入人脸",
      extra: "未录入"
    }),
    e: common_vendor.p({
      arrow: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
