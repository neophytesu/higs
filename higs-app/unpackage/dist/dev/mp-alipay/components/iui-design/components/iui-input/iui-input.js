"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_rect = require("../../helper/rect.js");
const components_iuiDesign_helper_validator = require("../../helper/validator.js");
const components_iuiDesign_helper_is = require("../../helper/is.js");
if (!Array) {
  const _easycom_iui_icon2 = common_vendor.resolveComponent("iui-icon");
  _easycom_iui_icon2();
}
const _easycom_iui_icon = () => "../iui-icon/iui-icon.js";
if (!Math) {
  _easycom_iui_icon();
}
const prefixCls = "iui-input";
const _sfc_main = {
  __name: "iui-input",
  props: {
    /**
     * 输入框的值
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * 标签
     */
    label: {
      type: String
    },
    /**
     * 图标
     */
    icon: {
      type: String
    },
    /**
     * 占位提示文字
     */
    placeholder: {
      type: String
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 是否只读
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * 清空按钮
     */
    clearable: {
      type: Boolean,
      default: false
    },
    /**
     * 输入类型
     * type: text | number | idcard | digit | safe-password | tel | nickanme
     * idcard 微信、支付宝、百度、QQ小程序、快手小程序、京东小程序
     * safe-password nickname 微信小程序
     */
    type: {
      type: String,
      default: "text"
    },
    /**
     * 最大输入长度
     * 设置为 -1 的时候不限制最大长度
     */
    maxlength: {
      type: Number,
      default: -1
    },
    /**
     * 是否必填
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * 校验规则
     */
    rules: {
      type: Array
    },
    /**
     * 获取焦点
     */
    focus: {
      type: Boolean,
      default: false
    },
    /**
     * 键盘右下角文字
     * 仅在 type="text" 时生效
     * 有效值 "go"-前往 "next"-下一个 "done"-完成 "search"-搜索 "send"-发送
     *
     */
    confirmType: {
      type: String,
      default: "done"
    },
    /**
     * 对齐
     */
    align: {
      type: String,
      default: "left"
    },
    /**
     * 布局方向
     * direction: horizontal | vertical
     */
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  emits: [
    "update:modelValue",
    "input",
    "focus",
    "blur",
    "confirm",
    "keyboardheightchange"
  ],
  setup(__props, { emit: __emit }) {
    common_vendor.useCssVars((_ctx) => ({
      "dfba10b4": __props.align
    }));
    const props = __props;
    const inputValue = common_vendor.ref(props.modelValue);
    const formatValue = common_vendor.computed(
      () => props.type == "number" ? Number(inputValue.value) : inputValue.value
    );
    const cls = common_vendor.computed(() => [
      prefixCls,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-readonly`]: props.readonly,
        [`${prefixCls}-vertical`]: props.direction === "vertical"
      }
    ]);
    const errorHintStyle = common_vendor.ref({});
    const setErrorHintStyle = () => {
      if (props.rules) {
        const instance = common_vendor.getCurrentInstance();
        components_iuiDesign_helper_rect.getRect(instance, ".input").then((res) => {
          errorHintStyle.value = {
            paddingLeft: `${res.left}px`
          };
        });
      }
    };
    let validator = null;
    const initValidator = () => {
      if (!components_iuiDesign_helper_is.isEmpty(props.rules)) {
        const descriptor = {
          inputValue: props.rules
        };
        validator = new components_iuiDesign_helper_validator.Schema(descriptor);
        setErrorHintStyle();
      }
    };
    const formItem = common_vendor.ref(null);
    const errorHint = common_vendor.ref();
    const validate = () => {
      if (!components_iuiDesign_helper_is.isNull(validator)) {
        validator.validate(
          {
            inputValue: formatValue.value
          },
          (errors) => {
            if (errors) {
              errorHint.value = errors[0].message;
              return;
            }
            errorHint.value = null;
          }
        );
      }
    };
    const trigger = common_vendor.computed(() => {
      let temp = [];
      const rules = props.rules;
      if (rules) {
        if (components_iuiDesign_helper_is.isArray(rules)) {
          rules.forEach((rule) => {
            if (components_iuiDesign_helper_is.isArray(rule.trigger))
              temp = temp.concat(rule.trigger);
            if (components_iuiDesign_helper_is.isString(rule.trigger))
              temp = temp.concat([rule.trigger]);
          });
        }
        if (components_iuiDesign_helper_is.isObject(rules)) {
          return rules.trigger;
        }
      }
      return Array.from(new Set(temp));
    });
    common_vendor.onMounted(() => {
      initValidator();
    });
    const emit = __emit;
    const handleClearInput = () => {
      inputValue.value = "";
      emit("update:modelValue", "");
    };
    const handleInput = async (e) => {
      var _a;
      inputValue.value = e.detail.value;
      emit("update:modelValue", formatValue.value);
      emit("input", e);
      await common_vendor.nextTick$1();
      if ((_a = trigger.value) == null ? void 0 : _a.includes("change"))
        validate();
      if (formItem.value) {
        formItem.value.triggerEvent("change");
      }
    };
    const handleBlur = (e) => {
      var _a;
      emit("blur", e);
      if ((_a = trigger.value) == null ? void 0 : _a.includes("blur"))
        validate();
      if (formItem.value) {
        formItem.value.triggerEvent("blur");
      }
    };
    const inForm = common_vendor.inject("inForm");
    if (inForm) {
      formItem.value = common_vendor.inject("formItem");
      if (props.rules) {
        console.error(
          "在表单中使用iui-input，不需要在iui-input上设置rules，应该在iui-form上设置rules"
        );
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.label || _ctx.$slots.prefix
      }, __props.label || _ctx.$slots.prefix ? common_vendor.e({
        b: __props.icon
      }, __props.icon ? {
        c: common_vendor.p({
          name: __props.icon
        }),
        d: common_vendor.n(`${prefixCls}-label-icon`)
      } : {}, {
        e: common_vendor.t(__props.label),
        f: common_vendor.n(`${prefixCls}-label`),
        g: common_vendor.n({
          [`${prefixCls}-label-required`]: __props.required
        }),
        h: common_vendor.n(`${prefixCls}-prefix`)
      }) : {}, {
        i: inputValue.value,
        j: __props.type,
        k: __props.placeholder,
        l: __props.disabled || __props.readonly,
        m: `${prefixCls}-placeholder`,
        n: __props.focus,
        o: __props.maxlength,
        p: common_vendor.unref(inForm) ? "0" : "12px 0",
        q: common_vendor.o(handleInput),
        r: common_vendor.o(($event) => _ctx.$emit("focus", _ctx.$evnet)),
        s: common_vendor.o(($event) => _ctx.$emit("confirm", _ctx.$evnet)),
        t: common_vendor.o(($event) => _ctx.$emit("keyboardheightchange", _ctx.$evnet)),
        v: common_vendor.o(handleBlur),
        w: __props.clearable && inputValue.value
      }, __props.clearable && inputValue.value ? {
        x: common_vendor.p({
          name: "close-circle-fill",
          color: "#c9cdd4"
        }),
        y: common_vendor.n(`${prefixCls}-clear`),
        z: common_vendor.o(handleClearInput)
      } : {}, {
        A: _ctx.$slots.suffix
      }, _ctx.$slots.suffix ? {
        B: common_vendor.n(`${prefixCls}-suffix`)
      } : {}, {
        C: common_vendor.n(__props.direction),
        D: common_vendor.n(cls.value),
        E: common_vendor.unref(inForm) ? "0" : "0 16px",
        F: common_vendor.unref(inForm) ? "auto" : "52px",
        G: errorHint.value
      }, errorHint.value ? {
        H: common_vendor.t(errorHint.value),
        I: common_vendor.r("error", {
          message: errorHint.value
        }),
        J: common_vendor.n(`${prefixCls}-error-hint`),
        K: common_vendor.s(errorHintStyle.value)
      } : {}, {
        L: common_vendor.n(`${prefixCls}-wrapper`),
        M: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b850ec82"]]);
my.createComponent(Component);
