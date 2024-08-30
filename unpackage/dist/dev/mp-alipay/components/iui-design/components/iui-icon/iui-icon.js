"use strict";
const common_vendor = require("../../../../common/vendor.js");
const prefixCls = "iui-icon";
const _sfc_main = {
  __name: "iui-icon",
  props: {
    /**
     * 图标名称
     * 对应iconfont图标名称
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * 图标颜色
     */
    color: {
      type: String,
      default: "inherit"
    },
    /**
     * 图标大小
     */
    size: {
      type: Number
    },
    /**
     * 自动旋转
     * 一般用于加载图标
     */
    spin: {
      type: Boolean,
      default: false
    },
    /**
     * 自定义旋转角度
     * 用于微调图标角度
     */
    rotate: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const cls = common_vendor.computed(() => [
      prefixCls,
      {
        [`${prefixCls}-${props.name}`]: props.name
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(cls.value),
        b: __props.color,
        c: __props.size ? `${__props.size}px` : "inherit",
        d: __props.size ? `${__props.size}px` : "inherit",
        e: common_vendor.n(`${prefixCls}-wrapper`),
        f: common_vendor.n({
          [`${prefixCls}-spin`]: __props.spin || __props.name === "loading"
        }),
        g: `rotate(${__props.rotate}deg)`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-84219a7d"]]);
my.createComponent(Component);
