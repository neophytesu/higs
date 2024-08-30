"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_iui_translation2 = common_vendor.resolveComponent("iui-translation");
  _easycom_iui_translation2();
}
const _easycom_iui_translation = () => "../iui-translation/iui-translation.js";
if (!Math) {
  _easycom_iui_translation();
}
const prefixCls = "iui-popup";
const _sfc_main = {
  __name: "iui-popup",
  props: {
    /**
     * 可见
     */
    modelValue: {
      type: Boolean,
      default: false
    },
    /**
     * 方向
     */
    direction: {
      type: String,
      default: "bottom"
    },
    /**
     * 是否显示遮罩层
     */
    mask: {
      type: Boolean,
      default: true
    },
    /**
     * 点击遮罩层是否关闭
     */
    maskClosable: {
      type: Boolean,
      default: true
    },
    /**
     * 标题
     */
    title: {
      type: String
    },
    /**
     * 可滑动
     */
    slide: {
      type: Boolean,
      default: false
    },
    /**
     * 弹出层高度
     * 只有在 direction 为 top 或 bottom 时生效
     */
    height: {
      type: Number,
      default: 330
    },
    /**
     * 弹出层宽度
     * 只有在 direction 为 left 或 right 时生效
     */
    width: {
      type: Number,
      default: 290
    },
    /**
     * 容器样式
     */
    containerStyle: {
      type: Object
    },
    /**
     * 内容样式
     */
    contentStyle: {
      type: Object
    }
  },
  emits: ["update:modelValue", "close", "open"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const innerVisible = common_vendor.ref(props.modelValue);
    const cls = common_vendor.computed(() => [prefixCls]);
    const emit = __emit;
    const startPoint = common_vendor.ref();
    const endPoint = common_vendor.ref();
    const handleClose = () => {
      innerVisible.value = false;
      emit("update:modelValue", false);
      emit("close");
      if (popupConfig.value.slide) {
        startPoint.value = null;
        endPoint.value = null;
      }
    };
    const popupConfig = common_vendor.ref({
      mask: props.mask,
      maskClosable: props.maskClosable,
      direction: props.direction,
      visible: innerVisible.value,
      slide: props.slide,
      height: props.height,
      width: props.width,
      title: props.title,
      onClose: handleClose
    });
    const direction = common_vendor.computed(() => {
      return popupConfig.value.direction;
    });
    const isVertical = common_vendor.computed(() => {
      return direction.value === "top" || direction.value === "bottom";
    });
    const isHorizontal = common_vendor.computed(() => {
      return direction.value === "left" || direction.value === "right";
    });
    const containerTranslation = common_vendor.ref();
    const maskTranslation = common_vendor.ref();
    const handleClickMask = () => {
      if (props.maskClosable) {
        close();
      }
    };
    const maskOpacity = common_vendor.computed(() => {
      if (popupConfig.value.slide) {
        if (isVertical.value) {
          return (popupConfig.value.height - transY.value) / popupConfig.value.height;
        } else {
          return (popupConfig.value.width - transX.value) / popupConfig.value.width;
        }
      }
      return 1;
    });
    const close = async () => {
      var _a;
      if (!innerVisible.value)
        return;
      Promise.all([
        (_a = maskTranslation.value) == null ? void 0 : _a.leave(),
        containerTranslation.value.leave()
      ]).then(() => {
        handleClose();
      });
    };
    common_vendor.onMounted(() => {
      common_vendor.watch(
        () => props.modelValue,
        (val) => {
          if (val) {
            open();
          } else {
            close();
          }
        },
        {
          immediate: true
        }
      );
    });
    const open = (params) => {
      var _a;
      popupConfig.value = Object.assign(popupConfig.value, params);
      if (props.mask) {
        (_a = maskTranslation.value) == null ? void 0 : _a.enter();
      }
      containerTranslation.value.enter().then(() => {
        innerVisible.value = true;
        emit("update:modelValue", true);
        emit("open");
      });
    };
    const transY = common_vendor.computed(() => {
      var _a, _b, _c, _d;
      if (direction.value === "bottom") {
        const distance = ((_a = endPoint.value) == null ? void 0 : _a.y) - ((_b = startPoint.value) == null ? void 0 : _b.y);
        return distance > 0 ? distance : 0;
      }
      if (direction.value === "top") {
        const distance = ((_c = startPoint.value) == null ? void 0 : _c.y) - ((_d = endPoint.value) == null ? void 0 : _d.y);
        return distance > 0 ? -distance : 0;
      }
      return 0;
    });
    const transX = common_vendor.computed(() => {
      var _a, _b, _c, _d;
      if (direction.value === "left") {
        const distance = ((_a = startPoint.value) == null ? void 0 : _a.x) - ((_b = endPoint.value) == null ? void 0 : _b.x);
        return distance > 0 ? -distance : 0;
      }
      if (direction.value === "right") {
        const distance = ((_c = endPoint.value) == null ? void 0 : _c.x) - ((_d = startPoint.value) == null ? void 0 : _d.x);
        return distance > 0 ? distance : 0;
      }
      return 0;
    });
    const handleTouchStart = (e) => {
      startPoint.value = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      };
    };
    const handleTouchEnd = () => {
      if (!endPoint.value || !startPoint.value)
        return;
      switch (direction.value) {
        case "bottom":
          if (endPoint.value.y - startPoint.value.y > 100) {
            close();
          } else {
            endPoint.value = null;
          }
          break;
        case "top":
          if (startPoint.value.y - endPoint.value.y > 100) {
            close();
          } else {
            endPoint.value = null;
          }
          break;
        case "left":
          if (startPoint.value.x - endPoint.value.x > 100) {
            close();
          } else {
            endPoint.value = null;
          }
          break;
        case "right":
          if (endPoint.value.x - startPoint.value.x > 100) {
            close();
          } else {
            endPoint.value = null;
          }
          break;
      }
    };
    let pause = false;
    const handleTouchMove = (e) => {
      if (pause)
        return;
      endPoint.value = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      };
      pause = true;
      setTimeout(() => {
        pause = false;
      }, 50);
    };
    const animation = {
      bottom: {
        enter: "slideInUp",
        leave: "slideOutDown"
      },
      top: {
        enter: "slideInDown",
        leave: "slideOutUp"
      },
      left: {
        enter: "slideInLeft",
        leave: "slideOutLeft"
      },
      right: {
        enter: "slideInRight",
        leave: "slideOutRight"
      }
    };
    __expose({
      open,
      close
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: popupConfig.value.mask
      }, popupConfig.value.mask ? {
        b: common_vendor.n(`${prefixCls}-mask`),
        c: maskOpacity.value,
        d: common_vendor.o(handleClickMask),
        e: common_vendor.o(() => {
        }),
        f: () => ({
          r: maskTranslation,
          k: "maskTranslation"
        })
      } : {}, {
        g: popupConfig.value.slide
      }, popupConfig.value.slide ? {
        h: common_vendor.n(`${prefixCls}-handle`),
        i: common_vendor.o(($event) => popupConfig.value.slide ? handleTouchStart($event) : null),
        j: common_vendor.o(($event) => popupConfig.value.slide ? handleTouchEnd() : null),
        k: common_vendor.o(($event) => popupConfig.value.slide ? handleTouchMove($event) : null),
        l: isVertical.value ? popupConfig.value.title ? "48px" : "24px" : "100%",
        m: isHorizontal.value ? "48px" : "100%",
        n: direction.value === "bottom" ? "0" : "auto",
        o: direction.value === "top" ? "0" : "auto",
        p: direction.value === "right" ? "0" : "auto",
        q: direction.value === "left" ? "0" : "auto"
      } : {}, {
        r: popupConfig.value.title && !_ctx.$slots.title
      }, popupConfig.value.title && !_ctx.$slots.title ? {
        s: common_vendor.t(popupConfig.value.title)
      } : {}, {
        t: common_vendor.n(`${prefixCls}-title`),
        v: common_vendor.s(__props.contentStyle),
        w: common_vendor.n(`${prefixCls}-container-content`),
        x: `translate(${transX.value || 0}px,${transY.value || 0}px)`,
        y: isVertical.value ? `${popupConfig.value.height}px` : "100%",
        z: isHorizontal.value ? `${popupConfig.value.width}px` : "100%",
        A: common_vendor.s(__props.containerStyle),
        B: () => ({
          r: containerTranslation,
          k: "containerTranslation"
        }),
        C: common_vendor.p({
          enter: animation[direction.value].enter,
          leave: animation[direction.value].leave
        }),
        D: common_vendor.n(`${prefixCls}-container`),
        E: common_vendor.n(`${prefixCls}-container-${direction.value}`),
        F: common_vendor.n(cls.value),
        G: innerVisible.value
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3b6ca99e"]]);
my.createComponent(Component);
