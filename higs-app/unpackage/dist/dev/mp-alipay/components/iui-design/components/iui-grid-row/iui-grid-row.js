"use strict";
const common_vendor = require("../../../../common/vendor.js");
const prefixCls = "iui-grid-row";
const _sfc_main = {
  __name: "iui-grid-row",
  props: {
    /**
     * 滑动
     * 优先级高于父级props
     */
    scroll: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "93202b64": common_vendor.unref(borderWidth)
    }));
    const props = __props;
    const grid = common_vendor.inject("iui-grid-props");
    const isScroll = props.scroll ? props.scroll : grid.scroll;
    const borderWidth = grid.rowGap ? "1px" : 0;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(prefixCls),
        b: common_vendor.s({
          overflowX: common_vendor.unref(isScroll) ? "auto" : "hidden",
          marginTop: `${common_vendor.unref(grid).rowGap / 2}px`,
          marginBottom: `${common_vendor.unref(grid).rowGap / 2}px`
        }),
        c: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5dc9365c"]]);
my.createComponent(Component);
