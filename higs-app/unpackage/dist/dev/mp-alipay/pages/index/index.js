"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //定义一个存放宫格数据的空数组
      gridList: [
        [
          {
            title: "智能导诊",
            desc: "Description1",
            icon: "robot",
            color: "#165DFF",
            event: "toGuide"
          },
          {
            title: "科室导航",
            desc: "Description2",
            icon: "location",
            color: "#F53F3F"
          },
          {
            title: "医院介绍",
            desc: "Description3",
            icon: "info-circle",
            color: "#00B42A"
          }
        ],
        [
          {
            title: "科室预约",
            desc: "Description4",
            icon: "border",
            color: "#165DFF",
            event: "toRegister"
          },
          {
            title: "医疗知识",
            desc: "Description5",
            icon: "key",
            color: "#F53F3F"
          },
          {
            title: "使用指南",
            desc: "Description6",
            icon: "compass",
            color: "#00B42A"
          }
        ]
      ],
      yyList: [
        {
          url: "/static/avatar/avatar3.png",
          doc: "张伟",
          time: "2024-9-09  17:00 ~ 19:00",
          room: "儿科 2-201"
        },
        {
          url: "/static/avatar/avatar1.png",
          doc: "杨涛",
          time: "2024-10-09 17:00 ~ 19:00",
          room: "消化内科 3-105"
        }
      ]
    };
  },
  methods: {
    toAsk() {
      common_vendor.index.navigateTo({
        url: `/pages/message/ask`
      });
    },
    to(event) {
      console.log("toing");
      if (this[event]) {
        this[event]();
      } else {
        console.error(`Method '${event}' does not exist.`);
      }
    },
    toGuide() {
      common_vendor.index.navigateTo({
        url: `/pages/message/guide`
      });
    },
    toRegister() {
      common_vendor.index.navigateTo({
        url: `/pages/index/register`
      });
    }
  },
  // 页面一进来就加载
  onLoad() {
  }
};
if (!Array) {
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  const _easycom_iui_search2 = common_vendor.resolveComponent("iui-search");
  const _easycom_iui_icon2 = common_vendor.resolveComponent("iui-icon");
  const _easycom_iui_grid_item2 = common_vendor.resolveComponent("iui-grid-item");
  const _easycom_iui_grid_row2 = common_vendor.resolveComponent("iui-grid-row");
  const _easycom_iui_grid2 = common_vendor.resolveComponent("iui-grid");
  const _easycom_iui_card2 = common_vendor.resolveComponent("iui-card");
  const _easycom_iui_collapse2 = common_vendor.resolveComponent("iui-collapse");
  const _easycom_iui_divider2 = common_vendor.resolveComponent("iui-divider");
  (_easycom_iui_button2 + _easycom_iui_search2 + _easycom_iui_icon2 + _easycom_iui_grid_item2 + _easycom_iui_grid_row2 + _easycom_iui_grid2 + _easycom_iui_card2 + _easycom_iui_collapse2 + _easycom_iui_divider2)();
}
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
const _easycom_iui_search = () => "../../components/iui-design/components/iui-search/iui-search.js";
const _easycom_iui_icon = () => "../../components/iui-design/components/iui-icon/iui-icon.js";
const _easycom_iui_grid_item = () => "../../components/iui-design/components/iui-grid-item/iui-grid-item.js";
const _easycom_iui_grid_row = () => "../../components/iui-design/components/iui-grid-row/iui-grid-row.js";
const _easycom_iui_grid = () => "../../components/iui-design/components/iui-grid/iui-grid.js";
const _easycom_iui_card = () => "../../components/iui-design/components/iui-card/iui-card.js";
const _easycom_iui_collapse = () => "../../components/iui-design/components/iui-collapse/iui-collapse.js";
const _easycom_iui_divider = () => "../../components/iui-design/components/iui-divider/iui-divider.js";
if (!Math) {
  (_easycom_iui_button + _easycom_iui_search + _easycom_iui_icon + _easycom_iui_grid_item + _easycom_iui_grid_row + _easycom_iui_grid + _easycom_iui_card + _easycom_iui_collapse + _easycom_iui_divider)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "primary"
    }),
    b: common_vendor.o(($event) => _ctx.inputValue = $event),
    c: common_vendor.p({
      modelValue: _ctx.inputValue
    }),
    d: common_vendor.f($data.gridList, (row, rowIndex, i0) => {
      return {
        a: common_vendor.f(row, (grid, gridIndex, i1) => {
          return {
            a: "897e0296-5-" + i0 + "-" + i1 + "," + ("897e0296-4-" + i0 + "-" + i1),
            b: common_vendor.p({
              color: grid.color,
              name: grid.icon,
              size: "25"
            }),
            c: common_vendor.t(grid.title),
            d: common_vendor.o(($event) => $options.to(grid.event)),
            e: `${rowIndex}-${gridIndex}`,
            f: "897e0296-4-" + i0 + "-" + i1 + "," + ("897e0296-3-" + i0)
          };
        }),
        b: rowIndex,
        c: "897e0296-3-" + i0 + ",897e0296-2"
      };
    }),
    e: common_vendor.p({
      rowGap: "8"
    }),
    f: common_vendor.f($data.yyList, (item, index, i0) => {
      return {
        a: "897e0296-8-" + i0 + "," + ("897e0296-7-" + i0),
        b: "897e0296-9-" + i0 + "," + ("897e0296-7-" + i0),
        c: common_vendor.t(item.doc),
        d: common_vendor.t(item.time),
        e: common_vendor.t(item.room),
        f: item.url,
        g: "897e0296-7-" + i0 + ",897e0296-6",
        h: index
      };
    }),
    g: common_vendor.o($options.toAsk),
    h: common_vendor.p({
      status: "success"
    }),
    i: common_vendor.p({
      status: "danger"
    }),
    j: common_vendor.p({
      label: "预约列表"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
