"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_iui_icon2 = common_vendor.resolveComponent("iui-icon");
  _easycom_iui_icon2();
}
const _easycom_iui_icon = () => "../iui-icon/iui-icon.js";
if (!Math) {
  _easycom_iui_icon();
}
const prefixCls = "iui-search";
const _sfc_main = {
  __name: "iui-search",
  props: {
    /**
     * 输入值
     */
    modelValue: {
      type: String,
      default: ""
    },
    /**
     * 占位符
     */
    placeholder: {
      type: String,
      default: "请输入要查询的内容"
    },
    /**
     * 图标
     * Boolean: 是否显示图标
     * String: 图标名称
     */
    icon: {
      type: [String, Boolean],
      default: "search"
    },
    /**
     * 背景颜色
     */
    bgColor: {
      type: String,
      default: "var(--iui-bg)"
    },
    /**
     * 取消文字颜色
     */
    color: {
      type: String,
      default: "#165DFF"
    },
    /**
     * 是否显示取消按钮
     */
    cancel: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "search"],
  setup(__props, { emit: __emit }) {
    common_vendor.useCssVars((_ctx) => ({
      "c0f12eb8": props.bgColor,
      "48e25c67": __props.color
    }));
    const props = __props;
    const innerValue = common_vendor.ref("");
    const cls = common_vendor.computed(() => [prefixCls]);
    const emit = __emit;
    const isFocus = common_vendor.ref(false);
    const onBlur = () => {
      setTimeout(() => {
        isFocus.value = false;
      }, 50);
    };
    const handleSearch = () => {
      emit("search", innerValue.value);
    };
    const handleInput = (e) => {
      innerValue.value = e.detail.value;
      emit("update:modelValue", e.detail.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.$slots.prefix
      }, _ctx.$slots.prefix ? {
        b: common_vendor.n(`${prefixCls}-prefix`)
      } : {}, {
        c: __props.icon
      }, __props.icon ? {
        d: common_vendor.p({
          name: __props.icon
        }),
        e: common_vendor.n(`${prefixCls}-icon`)
      } : {}, {
        f: common_vendor.n(`${prefixCls}-input`),
        g: __props.placeholder,
        h: `${prefixCls}-placeholder`,
        i: common_vendor.o(($event) => isFocus.value = true),
        j: common_vendor.o(onBlur),
        k: common_vendor.o(handleInput),
        l: common_vendor.o(handleSearch),
        m: common_vendor.n(`${prefixCls}-input-wrap`),
        n: isFocus.value || _ctx.$slots.suffix
      }, isFocus.value || _ctx.$slots.suffix ? common_vendor.e({
        o: !_ctx.$slots.suffix && __props.cancel
      }, !_ctx.$slots.suffix && __props.cancel ? {
        p: common_vendor.o(onBlur)
      } : {}, {
        q: _ctx.$slots.suffix
      }, _ctx.$slots.suffix ? {} : {}, {
        r: common_vendor.n(`${prefixCls}-suffix`)
      }) : {}, {
        s: common_vendor.n(`${prefixCls}-container`),
        t: common_vendor.n(cls.value),
        v: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-64909d17"]]);
my.createComponent(Component);
