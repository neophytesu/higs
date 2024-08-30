"use strict";
const common_vendor = require("../../../../common/vendor.js");
const prefixCls = "iui-divider";
const _sfc_main = {
  __name: "iui-divider",
  props: {
    /**
     * 方向
     * direction: horizontal | vertical
     */
    direction: {
      type: String,
      default: "horizontal"
    },
    /**
     * 分割线文字位置
     * orientation: start | center | end
     */
    align: {
      type: String,
      default: "center"
    },
    /**
     * 分割线样式类型
     * type: solid | dashed | dotted
     */
    type: {
      type: String,
      default: "solid"
    },
    /**
     * 分割线宽度/高度
     * size: number
     *
     */
    size: {
      type: Number,
      default: 1
    },
    /**
     * 分割线宽度/高度
     * margin
     * 分割线上下 margin (垂直方向时为左右 margin)
     */
    margin: {
      type: [Number, String],
      default: 20
    },
    /**
     * 文字背景
     */
    textBg: {
      type: String,
      default: "var(--iui-bg)"
    }
  },
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "6782195e": margin.value,
      "9246c09e": size.value,
      "9245622c": __props.type,
      "73af4a02": __props.textBg
    }));
    const props = __props;
    const cls = common_vendor.computed(() => [
      prefixCls,
      [
        `${prefixCls}-${props.direction}`,
        `${prefixCls}-align-${props.align}`,
        `${prefixCls}-${props.type}`
      ]
    ]);
    const margin = common_vendor.computed(() => {
      if (props.direction === "horizontal") {
        return `${props.margin}px 0`;
      } else {
        return `0 ${props.margin}px`;
      }
    });
    const size = common_vendor.computed(() => `${props.size}px`);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.direction === "horizontal"
      }, __props.direction === "horizontal" ? {
        b: common_vendor.n(`${prefixCls}-text`)
      } : {}, {
        c: common_vendor.n(cls.value),
        d: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a6e2148"]]);
my.createComponent(Component);
