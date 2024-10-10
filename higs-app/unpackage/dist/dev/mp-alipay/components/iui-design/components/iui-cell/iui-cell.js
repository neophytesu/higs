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
const prefixCls = "iui-cell";
const _sfc_main = {
  __name: "iui-cell",
  props: {
    /**
     * 单元格高度
     */
    height: {
      type: Number,
      default: 54
    },
    /**
     * 单元格左侧标题
     */
    label: {
      type: String
    },
    /**
     * 描述文案
     */
    desc: {
      type: String
    },
    /**
     * 额外文案
     */
    extra: {
      type: String
    },
    /**
     * 图标
     * Label 左侧图标
     */
    icon: {
      type: String
    },
    /**
     * 是否显示箭头
     */
    arrow: {
      type: Boolean,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const { provides } = common_vendor.getCurrentInstance();
    const cls = common_vendor.computed(() => [prefixCls]);
    const getCellHeight = () => {
      let height = props.height;
      if (props.title && props.desc) {
        height += 20;
      }
      return `${height}px`;
    };
    const showArrow = common_vendor.computed(() => {
      const listProps = { arrow: false };
      if (provides["list-props"]) {
        listProps.arrow = provides["list-props"].arrow;
      }
      if (!components_iuiDesign_helper_is.isUndefined(props.arrow)) {
        return props.arrow;
      }
      return listProps.arrow;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.label || __props.icon || _ctx.$slots.icon
      }, __props.label || __props.icon || _ctx.$slots.icon ? common_vendor.e({
        b: _ctx.$slots.icon || __props.icon
      }, _ctx.$slots.icon || __props.icon ? common_vendor.e({
        c: _ctx.$slots.icon
      }, _ctx.$slots.icon ? {} : {
        d: common_vendor.p({
          name: __props.icon,
          size: 20
        })
      }, {
        e: common_vendor.n(`${prefixCls}-icon`)
      }) : {}, {
        f: common_vendor.t(__props.label),
        g: common_vendor.n(`${prefixCls}-label`),
        h: common_vendor.t(__props.desc),
        i: common_vendor.n(`${prefixCls}-desc`),
        j: common_vendor.n(`${prefixCls}-title`)
      }) : {}, {
        k: __props.extra || _ctx.$slots.extra || showArrow.value
      }, __props.extra || _ctx.$slots.extra || showArrow.value ? common_vendor.e({
        l: common_vendor.t(__props.extra),
        m: common_vendor.n(`${prefixCls}-extra-content`),
        n: _ctx.$slots.extra
      }, _ctx.$slots.extra ? {} : {}, {
        o: showArrow.value
      }, showArrow.value ? {
        p: common_vendor.p({
          name: "right"
        })
      } : {}, {
        q: common_vendor.n(`${prefixCls}-extra-arrow`),
        r: common_vendor.n(`${prefixCls}-extra`)
      }) : {}, {
        s: common_vendor.n(cls.value),
        t: getCellHeight(),
        v: common_vendor.n(`${prefixCls}-wrapper`)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5b8b077c"]]);
my.createComponent(Component);
