"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      yyList: [
        {
          url: "/static/avatar/avatar3.png",
          doc: "张伟",
          time: "2024-9-09  17:00 ~ 19:00",
          room: "儿科"
        },
        {
          url: "/static/avatar/avatar1.png",
          doc: "杨涛",
          time: "2024-10-09 17:00 ~ 19:00",
          room: "消化内科"
        }
      ]
    };
  }
};
if (!Array) {
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  const _easycom_iui_card2 = common_vendor.resolveComponent("iui-card");
  (_easycom_iui_button2 + _easycom_iui_card2)();
}
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
const _easycom_iui_card = () => "../../components/iui-design/components/iui-card/iui-card.js";
if (!Math) {
  (_easycom_iui_button + _easycom_iui_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.yyList, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.doc),
        c: common_vendor.t(item.time),
        d: common_vendor.t(item.room),
        e: "6589d806-1-" + i0 + ",6589d806-0",
        f: "6589d806-2-" + i0 + ",6589d806-0",
        g: index
      };
    }),
    b: common_vendor.p({
      status: "success"
    }),
    c: common_vendor.p({
      status: "danger"
    }),
    d: common_vendor.p({
      title: "预约列表"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
