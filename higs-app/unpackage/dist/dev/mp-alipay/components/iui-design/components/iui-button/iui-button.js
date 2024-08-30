"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_is = require("../../helper/is.js");
if (!Math) {
  IuiIcon();
}
const IuiIcon = () => "../iui-icon/iui-icon.js";
const __default__ = {
  name: "iui-button"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    // 通用属性
    /**
     * 按钮类型
     * 分为三种：主要按钮、次要按钮、线框按钮
     * type: primary | secondary  | outline
     */
    type: {
      type: String
    },
    /**
     * 按钮形状
     * 分为三种：方形按钮、圆角按钮、圆形按钮
     * shape: square | round | circle
     */
    shape: {
      type: String,
      default: "square"
    },
    /**
     * 加载中
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 按钮大小
     * size: huge | large | medium | small | mini | Number
     * 为Number时，size为按钮高度
     */
    size: {
      type: [String, Number],
      default: "large"
    },
    /**
     * 按钮状态
     * normal | success | danger | warning
     */
    status: {
      type: String,
      default: "normal"
    },
    /**
     * 内联
     */
    inline: {
      type: Boolean,
      default: false
    },
    /**
     * 图标
     * icon
     */
    icon: {
      type: String
    },
    /**
     * 对标微信小程序开放能力
     * openType
     */
    openType: {
      type: String
    }
  },
  emits: [
    "click",
    "getphonenumber",
    "opensetting",
    "launchapp",
    "error"
  ],
  setup(__props, { emit: __emit }) {
    common_vendor.useCssVars((_ctx) => ({
      "733db0a0": inlinePadding.value
    }));
    const props = __props;
    const prefixCls = "iui-button";
    const slots = common_vendor.useSlots();
    const onlyIconBtn = common_vendor.computed(() => {
      return (props.icon || slots.icon) && !slots.default;
    });
    const cls = common_vendor.computed(() => [
      prefixCls,
      `${prefixCls}-${props.type || "secondary"}-${props.status}`,
      `${prefixCls}-shape-${props.shape}`,
      `${prefixCls}-size-${props.size}`,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-inline`]: props.inline,
        [`${prefixCls}-icon-size-${props.size}`]: onlyIconBtn.value
      }
    ]);
    const style = common_vendor.computed(() => {
      if (components_iuiDesign_helper_is.isNumber(props.size)) {
        return {
          height: `${props.size}px`,
          width: onlyIconBtn.value ? `${props.size}px` : "inherit",
          fontSize: `${props.size / 3}px`
        };
      }
    });
    const emits = __emit;
    const handleClick = (e) => {
      if (props.disabled || props.loading) {
        return;
      }
      emits("click", e);
    };
    const getPhoneNumber = (e) => {
      emits("getphonenumber", e);
    };
    const openSetting = (e) => {
      emits("opensetting", e);
    };
    const launchApp = (e) => {
      emits("launchapp", e);
    };
    const openTypeError = (e) => {
      emits("error", e);
    };
    const inlinePadding = common_vendor.computed(() => {
      if (!slots.default) {
        return "8px";
      }
      return "16px";
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.icon || _ctx.$slots.icon || props.loading
      }, props.icon || _ctx.$slots.icon || props.loading ? common_vendor.e({
        b: _ctx.$slots.icon
      }, _ctx.$slots.icon ? {} : props.icon ? {
        d: common_vendor.p({
          name: props.icon,
          size: 18
        })
      } : {}, {
        c: props.icon,
        e: common_vendor.n(`${prefixCls}-icon`),
        f: onlyIconBtn.value ? 0 : "4px"
      }) : {}, {
        g: __props.shape !== "circle"
      }, __props.shape !== "circle" ? {} : {}, {
        h: common_vendor.n(`${prefixCls}-content`),
        i: common_vendor.n(cls.value),
        j: __props.disabled || __props.loading,
        k: __props.openType,
        l: common_vendor.s(style.value),
        m: common_vendor.s(_ctx.__cssVars()),
        n: common_vendor.o(handleClick),
        o: common_vendor.o(getPhoneNumber),
        p: common_vendor.o(openSetting),
        q: common_vendor.o(launchApp),
        r: common_vendor.o(openTypeError)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-684bc346"]]);
my.createComponent(Component);
