"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_is = require("../../helper/is.js");
const prefixCls = "iui-grid-item";
const _sfc_main = {
  __name: "iui-grid-item",
  setup(__props) {
    const grid = common_vendor.inject("iui-grid-props");
    const cls = common_vendor.computed(() => [
      prefixCls,
      {
        [`${prefixCls}-border`]: grid.border,
        [`${prefixCls}-hover`]: components_iuiDesign_helper_is.isBoolean(grid.clickEffect) && grid.clickEffect
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(cls.value),
        b: common_vendor.unref(grid).cols ? 100 / common_vendor.unref(grid).cols + "%" : "100%",
        c: `${common_vendor.unref(grid).colGap / 2}px`,
        d: `${common_vendor.unref(grid).colGap / 2}px`,
        e: `${common_vendor.unref(grid).colGap ? 1 : 0}`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6f21ef0c"]]);
my.createComponent(Component);
