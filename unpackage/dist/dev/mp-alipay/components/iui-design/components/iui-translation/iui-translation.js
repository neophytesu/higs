"use strict";
const common_vendor = require("../../../../common/vendor.js");
const prefixCls = '"iui-translation"';
const _sfc_main = {
  __name: "iui-translation",
  props: {
    /**
     * 进入动画
     */
    enter: {
      type: String,
      default: "fadeIn"
    },
    /**
     * 离开动画
     */
    leave: {
      type: String,
      default: "fadeOut"
    },
    /**
     * 动画持续时间
     */
    duration: {
      type: Number,
      default: 300
    },
    /**
     * 动画状态
     * status : pending | enter | leave | end
     */
    status: {
      type: String,
      default: "pending"
    },
    /**
     * 动画函数
     */
    timing: {
      type: String,
      default: "ease"
    }
  },
  emits: ["enter", "leave", "end"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const innerStatus = common_vendor.ref(props.status);
    const isAnimating = common_vendor.ref(false);
    const handleEnter = () => {
      emit("enter");
    };
    const handleLeave = async () => {
      return new Promise((resolve) => {
        emit("leave");
        setTimeout(() => {
          innerStatus.value = "end";
          resolve();
        }, props.duration);
      });
    };
    const handleEnd = () => {
      emit("end");
    };
    const animStatus = common_vendor.computed(() => {
      if (innerStatus.value === "enter") {
        return `${props.enter} ${props.duration}ms ${props.timing}`;
      }
      if (innerStatus.value === "leave") {
        return `${props.leave} ${props.duration}ms ${props.timing} forwards`;
      }
    });
    const enter = async () => {
      if (isAnimating.value)
        return;
      return new Promise((resolve) => {
        isAnimating.value = true;
        innerStatus.value = "enter";
        handleEnter();
        setTimeout(() => {
          isAnimating.value = false;
          resolve();
        }, props.duration);
      });
    };
    const leave = async () => {
      if (isAnimating.value)
        return;
      isAnimating.value = true;
      innerStatus.value = "leave";
      await handleLeave();
      isAnimating.value = false;
      handleEnd();
    };
    __expose({
      enter,
      leave,
      isAnimating: isAnimating.value
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: animStatus.value
      }, animStatus.value ? {} : {}, {
        b: common_vendor.n(prefixCls),
        c: `${animStatus.value}`
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b1dd0357"]]);
my.createComponent(Component);
