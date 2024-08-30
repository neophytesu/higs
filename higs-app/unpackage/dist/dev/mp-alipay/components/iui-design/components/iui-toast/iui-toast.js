"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_is = require("../../helper/is.js");
if (!Array) {
  const _easycom_iui_icon2 = common_vendor.resolveComponent("iui-icon");
  const _easycom_iui_spin2 = common_vendor.resolveComponent("iui-spin");
  const _easycom_iui_translation2 = common_vendor.resolveComponent("iui-translation");
  (_easycom_iui_icon2 + _easycom_iui_spin2 + _easycom_iui_translation2)();
}
const _easycom_iui_icon = () => "../iui-icon/iui-icon.js";
const _easycom_iui_spin = () => "../iui-spin/iui-spin.js";
const _easycom_iui_translation = () => "../iui-translation/iui-translation.js";
if (!Math) {
  (_easycom_iui_icon + _easycom_iui_spin + _easycom_iui_translation)();
}
const prefixCls = "iui-toast";
const _sfc_main = {
  __name: "iui-toast",
  props: {
    /**
     * 消息文本
     */
    message: {
      type: String,
      default: ""
    },
    /**
     * 持续时间
     */
    duration: {
      type: Number,
      default: 3e3
    },
    /**
     * 位置
     * position: top | center | bottom
     */
    position: {
      type: String,
      default: "center"
    },
    /**
     * 图标
     */
    icon: {
      type: String
    },
    /**
     * 类型
     * type: success | error | warning
     */
    type: {
      type: String
    },
    /**
     * 方向
     */
    direction: {
      type: String,
      default: "vertical"
    },
    /**
     * 遮罩
     * 阻止用户操作
     */
    mask: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const toast = common_vendor.ref({});
    const cls = common_vendor.computed(() => [
      prefixCls,
      `${prefixCls}-${toast.value.position}`,
      `${prefixCls}-${toast.value.direction}`
    ]);
    const anim = common_vendor.ref();
    const innerVisible = common_vendor.ref(false);
    const toastPosition = common_vendor.computed(() => {
      if (toast.value.position === "center")
        return "center";
      return toast.value.position === "top" ? "flex-start" : "flex-end";
    });
    const toastIcon = common_vendor.computed(() => {
      if (toast.value.icon)
        return toast.value.icon;
      if (toast.value.type) {
        switch (toast.value.type) {
          case "success":
            return "check-circle";
          case "error":
            return "close-circle";
          case "warning":
            return "warning-circle";
        }
      }
      return "";
    });
    let timeout = null;
    const hide = () => {
      timeout = setTimeout(async () => {
        var _a;
        await ((_a = anim.value) == null ? void 0 : _a.leave());
        innerVisible.value = false;
      }, toast.value.duration);
    };
    const show = async (params) => {
      var _a;
      clearTimeout(timeout);
      components_iuiDesign_helper_is.isString(params) && (params = { message: params });
      toast.value = {
        ...props,
        ...params
      };
      innerVisible.value = true;
      await ((_a = anim.value) == null ? void 0 : _a.enter());
      if (!toast.value.loading) {
        hide();
      }
    };
    const showLoading = (params) => {
      components_iuiDesign_helper_is.isString(params) && (params = { message: params });
      show({
        ...params,
        loading: true,
        mask: true
      });
    };
    const hideLoading = async () => {
      var _a;
      await ((_a = anim.value) == null ? void 0 : _a.leave());
      innerVisible.value = false;
    };
    __expose({
      show,
      showLoading,
      hideLoading
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: toast.value.type || toast.value.icon || toast.value.loading
      }, toast.value.type || toast.value.icon || toast.value.loading ? common_vendor.e({
        b: !toast.value.loading
      }, !toast.value.loading ? {
        c: common_vendor.p({
          size: "24",
          name: toastIcon.value
        })
      } : {
        d: common_vendor.p({
          color: "white"
        })
      }) : {}, {
        e: common_vendor.t(toast.value.message),
        f: toastIcon.value || toast.value.loading ? "12px 16px 16px" : "12px 16px",
        g: toastPosition.value,
        h: common_vendor.n(`${prefixCls}-content`),
        i: () => ({
          r: anim,
          k: "anim"
        }),
        j: common_vendor.p({
          enter: "fadeIn",
          leave: "fadeOut"
        }),
        k: common_vendor.n(cls.value),
        l: innerVisible.value,
        m: toast.value.mask ? "auto" : "none"
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a418ecb5"]]);
my.createComponent(Component);
