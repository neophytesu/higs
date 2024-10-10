"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_is = require("../../helper/is.js");
if (!Array) {
  const _easycom_iui_icon2 = common_vendor.resolveComponent("iui-icon");
  _easycom_iui_icon2();
}
const _easycom_iui_icon = () => "../iui-icon/iui-icon.js";
if (!Math) {
  _easycom_iui_icon();
}
const prefixCls = "iui-badge";
const _sfc_main = {
  __name: "iui-badge",
  props: {
    /**
     * 内容
     */
    text: {
      type: String,
      default: ""
    },
    /**
     * 颜色
     */
    color: {
      type: String,
      default: "#F53F3F"
    },
    /**
     * 显示为点
     */
    dot: {
      type: Boolean,
      default: false
    },
    /**
     * 显示位置 仅当slot有内容时有效
     * position: center ｜ tl | tr | bl | br ｜ [x, y]
     */
    position: {
      type: [String, Array],
      default: "tr"
    },
    /**
     * 最大值
     * max: 99 超出最大值显示为 99+
     */
    max: {
      type: Number,
      default: 99
    },
    /**
     * 图标
     */
    icon: {
      type: String
    }
  },
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "c42c2cb2": getPadding.value,
      "3098b103": common_vendor.unref(positionX),
      "3098b104": common_vendor.unref(positionY)
    }));
    const props = __props;
    const slots = common_vendor.useSlots();
    const cls = common_vendor.computed(() => [
      prefixCls,
      {
        [`${prefixCls}-${props.position}`]: !components_iuiDesign_helper_is.isArray(props.position) && slots.default,
        [`${prefixCls}-custom-position`]: components_iuiDesign_helper_is.isArray(props.position)
      }
    ]);
    const getBadgeText = () => {
      const { text, max } = props;
      if (components_iuiDesign_helper_is.isEmpty(text)) {
        return "";
      }
      if (text > max) {
        return `${max}+`;
      }
      return text;
    };
    const positionX = components_iuiDesign_helper_is.isArray(props.position) ? `${props.position[0]}px` : 0;
    const positionY = components_iuiDesign_helper_is.isArray(props.position) ? `${props.position[1]}px` : 0;
    const getPadding = common_vendor.computed(() => {
      if (props.dot) {
        return 0;
      }
      if (props.icon) {
        return "0 3px";
      }
      return "0 6px";
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.dot
      }, __props.dot ? {
        b: common_vendor.n(`${prefixCls}-dot`)
      } : common_vendor.e({
        c: __props.icon
      }, __props.icon ? common_vendor.e({
        d: __props.icon
      }, __props.icon ? {
        e: common_vendor.p({
          name: __props.icon
        })
      } : {}, {
        f: common_vendor.n(`${prefixCls}-icon`),
        g: __props.text ? "14px" : "12px",
        h: __props.text ? "2px" : 0
      }) : {}, {
        i: common_vendor.t(getBadgeText()),
        j: common_vendor.n(`${prefixCls}-text`)
      }), {
        k: common_vendor.n(cls.value),
        l: __props.color,
        m: common_vendor.n(`${prefixCls}-wrapper`),
        n: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07c775da"]]);
my.createComponent(Component);
