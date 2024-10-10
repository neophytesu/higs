"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      room: "",
      doctor: "",
      time: "",
      date: "",
      index: 0
    };
  },
  onLoad(options) {
    this.room = options.room;
    this.doctor = options.doctor;
    this.time = options.time;
    this.date = options.date;
    this.index = options.index;
    console.log(this.room, this.doctor, this.time, this.date);
  },
  methods: {
    ...common_vendor.mapMutations(["SET_REGISTER"]),
    back() {
      const refister = { index: this.index, isFee: false };
      this.SET_REGISTER(refister);
      common_vendor.index.navigateBack();
    },
    go() {
      const refister = { index: this.index, isFee: true };
      this.SET_REGISTER(refister);
      common_vendor.index.navigateBack();
    }
  }
};
if (!Array) {
  const _easycom_iui_cell2 = common_vendor.resolveComponent("iui-cell");
  const _easycom_iui_list2 = common_vendor.resolveComponent("iui-list");
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  (_easycom_iui_cell2 + _easycom_iui_list2 + _easycom_iui_button2)();
}
const _easycom_iui_cell = () => "../../components/iui-design/components/iui-cell/iui-cell.js";
const _easycom_iui_list = () => "../../components/iui-design/components/iui-list/iui-list.js";
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
if (!Math) {
  (_easycom_iui_cell + _easycom_iui_list + _easycom_iui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      label: "医生",
      extra: $data.doctor
    }),
    b: common_vendor.p({
      label: "科室",
      extra: $data.room
    }),
    c: common_vendor.p({
      label: "日期",
      extra: $data.date
    }),
    d: common_vendor.p({
      label: "时间",
      extra: $data.time
    }),
    e: common_vendor.p({
      label: "姓名",
      extra: "xxs"
    }),
    f: common_vendor.p({
      label: "年龄",
      extra: "18"
    }),
    g: common_vendor.p({
      label: "手机号",
      extra: "150******13"
    }),
    h: common_vendor.p({
      label: "就诊卡号",
      extra: "14*****58"
    }),
    i: common_vendor.o($options.back),
    j: common_vendor.p({
      calss: "btn",
      type: "outline",
      shape: "round"
    }),
    k: common_vendor.o($options.go),
    l: common_vendor.p({
      calss: "btn",
      type: "primary",
      shape: "round"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
