"use strict";
const common_vendor = require("../../../../common/vendor.js");
const prefixCls = "iui-card";
const _sfc_main = {
  __name: "iui-card",
  props: {
    /**
     * 是否显示边框
     */
    border: {
      type: Boolean,
      default: true
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 额外操作
     * 一般用于右上角的操作
     */
    extra: {
      type: String
    },
    /**
     * 头部自定义样式
     */
    headerStyle: {
      type: Object,
      default: () => ({})
    },
    /**
     * 内容自定义样式
     */
    bodyStyle: {
      type: Object,
      default: () => ({})
    },
    /**
     * 底部自定义样式
     */
    footerStyle: {
      type: Object,
      default: () => ({})
    },
    /**
     * 卡片阴影
     */
    shadow: {
      type: Boolean,
      default: false
    }
  },
  emits: ["extraClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const cls = common_vendor.computed(() => [
      prefixCls,
      {
        [`${prefixCls}-border`]: props.border,
        [`${prefixCls}-shadow`]: props.shadow
      }
    ]);
    const emits = __emit;
    const handleExtraClick = () => {
      emits("extraClick");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.$slots.header || _ctx.$slots.title || _ctx.$slots.extra || __props.title || __props.extra
      }, _ctx.$slots.header || _ctx.$slots.title || _ctx.$slots.extra || __props.title || __props.extra ? common_vendor.e({
        b: _ctx.$slots.header
      }, _ctx.$slots.header ? {} : common_vendor.e({
        c: _ctx.$slots.title || __props.title
      }, _ctx.$slots.title || __props.title ? common_vendor.e({
        d: _ctx.$slots.title
      }, _ctx.$slots.title ? {} : {
        e: common_vendor.t(__props.title)
      }, {
        f: common_vendor.n(`${prefixCls}-header-title`)
      }) : {}, {
        g: _ctx.$slots.extra || __props.extra
      }, _ctx.$slots.extra || __props.extra ? common_vendor.e({
        h: _ctx.$slots.extra
      }, _ctx.$slots.extra ? {} : {
        i: common_vendor.t(__props.extra),
        j: common_vendor.o(handleExtraClick)
      }, {
        k: common_vendor.n(`${prefixCls}-header-extra`)
      }) : {}), {
        l: common_vendor.n(`${prefixCls}-header`),
        m: common_vendor.s(__props.headerStyle)
      }) : {}, {
        n: common_vendor.n(`${prefixCls}-body`),
        o: common_vendor.s(__props.bodyStyle),
        p: _ctx.$slots.footer
      }, _ctx.$slots.footer ? {
        q: common_vendor.n(`${prefixCls}-footer`),
        r: common_vendor.s(__props.footerStyle)
      } : {}, {
        s: common_vendor.n(cls.value),
        t: __props.border ? "1px" : "0"
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-74f57800"]]);
my.createComponent(Component);
