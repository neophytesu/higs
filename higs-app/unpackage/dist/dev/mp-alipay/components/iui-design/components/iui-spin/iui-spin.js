"use strict";
const common_vendor = require("../../../../common/vendor.js");
const prefixCls = "iui-spin";
const _sfc_main = {
  __name: "iui-spin",
  props: {
    // 通用属性
    /**
     * 图标大小
     */
    size: {
      type: Number,
      default: 16
    },
    /**
     * 图标颜色
     */
    color: {
      type: String,
      default: "#3C7EFF"
    },
    /**
     * 描述文案
     */
    tip: {
      type: String
    },
    // 在容器中使用
    /**
     * 是否加载中
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * 遮罩颜色
     */
    maskColor: {
      type: String,
      default: "var(--iui-bg-opacity)"
    },
    /**
     * 全屏
     * 解决在容器中使用时，loading 时，容器滚动问题
     */
    fullScreen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "1c20265d": __props.color,
      "6d720af9": showLoading.value,
      "a3a4d45e": __props.maskColor,
      "0a5eca40": iconSize.value
    }));
    const props = __props;
    const cls = common_vendor.computed(() => [
      prefixCls,
      {
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-tip`]: props.tip
      }
    ]);
    const iconSize = common_vendor.computed(() => `${props.size}px`);
    const slots = common_vendor.useSlots();
    const showLoading = common_vendor.computed(() => {
      if (slots.default && !props.loading) {
        return "none";
      }
      return "flex";
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !_ctx.$slots.default || __props.loading
      }, !_ctx.$slots.default || __props.loading ? common_vendor.e({
        b: __props.tip
      }, __props.tip ? {
        c: common_vendor.t(__props.tip)
      } : {}, {
        d: __props.fullScreen ? "100vh" : "100%",
        e: common_vendor.o(() => {
        })
      }) : {}, {
        f: common_vendor.n(cls.value),
        g: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b34f7f42"]]);
my.createComponent(Component);
