"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_base64 = require("../../helper/base64.js");
const iconTemplate = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm4.9 6.3L10 13.2s0 .1-.1.1l-.6.7c-.1.1-.2.1-.3.2-.1 0-.3 0-.4-.1l-.6-.7-.1-.1-2.8-2.4c-.2-.2-.2-.5-.1-.7l.6-.7c.2-.2.5-.2.7-.1l2.5 2.1L13.5 6c.2-.2.5-.2.7-.1l.7.6c.1.3.2.6 0 .8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>`;
const prefixCls = "iui-checkbox";
const _sfc_main = {
  __name: "iui-checkbox",
  props: {
    /**
     * 值
     */
    modelValue: {
      type: Boolean,
      default: false
    },
    /**
     * 颜色
     */
    color: {
      type: String,
      default: "#165DFF"
    },
    /**
     * 标签
     */
    label: {
      type: String
    },
    /**
     * 值
     */
    value: {
      type: [String, Number, Boolean]
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 是否选中
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * 通栏
     */
    justify: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    common_vendor.useCssVars((_ctx) => ({
      "7a013563": icon.value
    }));
    const props = __props;
    const icon = common_vendor.computed(() => {
      const svg = iconTemplate.replace("currentColor", props.color);
      const result = `url(data:image/svg+xml;base64,${components_iuiDesign_helper_base64.Base64.encode(svg)})`;
      return result;
    });
    const group = common_vendor.inject("checkbox-group");
    const cls = common_vendor.computed(() => [
      prefixCls,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-justify`]: (group == null ? void 0 : group.justify) || props.justify
      }
    ]);
    const checked = common_vendor.ref(props.checked || props.modelValue);
    const value = props.value || props.label;
    const emit = __emit;
    const handleClick = () => {
      if (props.disabled)
        return;
      checked.value = !checked.value;
      emit("update:modelValue", checked.value);
      emit("change", checked.value);
      if (group) {
        group.handleCheckboxChange(value);
      }
    };
    if (group) {
      const { checkedValues, isCheckedAll, isReverseChecked } = group;
      common_vendor.watch(
        () => checkedValues.value.length,
        () => {
          checked.value = checkedValues.value.includes(value);
        }
      );
      common_vendor.watch(
        () => isCheckedAll.value,
        (val) => {
          if (val && !checked.value || !val && checked.value)
            group.handleCheckboxChange(value);
        }
      );
      common_vendor.watch(
        () => isReverseChecked.value,
        () => {
          group.handleCheckboxChange(value);
        }
      );
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.n(`${prefixCls}-icon`),
        b: common_vendor.n({
          checked: checked.value
        }),
        c: __props.label
      }, __props.label ? {
        d: common_vendor.t(__props.label),
        e: common_vendor.n(`${prefixCls}-label`)
      } : {}, {
        f: common_vendor.n(cls.value),
        g: common_vendor.o(handleClick),
        h: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-92c3c284"]]);
my.createComponent(Component);
