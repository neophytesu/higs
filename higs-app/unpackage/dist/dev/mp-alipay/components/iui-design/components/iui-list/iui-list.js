"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_is = require("../../helper/is.js");
if (!Array) {
  const _easycom_iui_cell2 = common_vendor.resolveComponent("iui-cell");
  _easycom_iui_cell2();
}
const _easycom_iui_cell = () => "../iui-cell/iui-cell.js";
if (!Math) {
  _easycom_iui_cell();
}
const prefixCls = "iui-list";
const _sfc_main = {
  __name: "iui-list",
  props: {
    /**
     * 数据
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 是否显示分割线
     */
    split: {
      type: Boolean,
      default: true
    },
    /**
     * 是否显示箭头
     */
    arrow: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.provide("list-props", props);
    const cls = common_vendor.computed(() => [
      prefixCls,
      {
        [`${prefixCls}-split`]: props.split
      }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(components_iuiDesign_helper_is.isEmpty)(__props.data)
      }, !common_vendor.unref(components_iuiDesign_helper_is.isEmpty)(__props.data) ? {
        b: common_vendor.f(__props.data, (cell, idx, i0) => {
          return common_vendor.e(_ctx.$slots.cell ? {
            a: "cell-" + i0,
            b: common_vendor.r("cell", {
              data: cell
            }, i0)
          } : {
            c: "a68582be-0-" + i0,
            d: common_vendor.p({
              ...cell
            })
          }, {
            e: idx
          });
        }),
        c: _ctx.$slots.cell
      } : {}, {
        d: common_vendor.n(cls.value)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a68582be"]]);
my.createComponent(Component);
