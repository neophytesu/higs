"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_rect = require("../../helper/rect.js");
if (!Array) {
  const _easycom_iui_icon2 = common_vendor.resolveComponent("iui-icon");
  const _easycom_iui_badge2 = common_vendor.resolveComponent("iui-badge");
  (_easycom_iui_icon2 + _easycom_iui_badge2)();
}
const _easycom_iui_icon = () => "../iui-icon/iui-icon.js";
const _easycom_iui_badge = () => "../iui-badge/iui-badge.js";
if (!Math) {
  (_easycom_iui_icon + _easycom_iui_badge)();
}
const prefixCls = "iui-tabs";
const _sfc_main = {
  __name: "iui-tabs",
  props: {
    /**
     * 当前索引
     */
    modelValue: {
      type: Number,
      default: 0
    },
    /**
     * tab列表
     */
    list: {
      type: Array,
      default: () => []
    },
    /**
     * 类型
     * type: line | dot | tag | card
     * line: 下划线模式
     * dot: 圆点模式 毛毛虫
     * tag: 标签模型
     * card: 卡片模式
     */
    type: {
      type: String,
      default: "line"
    },
    /**
     * 线条样式
     * lineWidth: 默认 24 | 自定义数值 | auto 根据tab内容自适应
     */
    lineWidth: {
      type: [String, Number],
      default: 20
    },
    /**
     * 下划线高度
     *
     */
    lineHeight: {
      type: Number
    },
    /**
     * 是否显示分割线
     */
    split: {
      type: Boolean,
      default: false
    },
    /**
     * 动画持续时间
     */
    duration: {
      type: Number,
      default: 240
    },
    /**
     * 激活状态颜色
     */
    activeColor: {
      type: String,
      default: "var(--iui-primary-6)"
    },
    /**
     * tab宽度
     * 自定义tab宽度后，tab宽度将不再自适应
     */
    tabWidth: {
      type: Number
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    common_vendor.useCssVars((_ctx) => ({
      "47e56711": __props.activeColor,
      "27a71300": duration
    }));
    const props = __props;
    const cls = common_vendor.computed(() => [prefixCls, `${prefixCls}-type-${props.type}`]);
    const changing = common_vendor.ref(false);
    const duration = props.duration + "ms";
    const instance = common_vendor.getCurrentInstance();
    const current = common_vendor.ref(props.modelValue);
    const containerWidth = common_vendor.ref(0);
    const scrollLeft = common_vendor.ref(0);
    const currentTabOffset = common_vendor.ref(0);
    const currentTabWidth = common_vendor.ref(props.lineWidth);
    const sliderStyle = common_vendor.computed(() => {
      return {
        width: `${currentTabWidth.value}px`,
        transform: `translateX(${currentTabOffset.value}px)`
      };
    });
    const isType = (type) => props.type === type;
    const setSliderPosition = (idx) => {
      if (isType("dot")) {
        changing.value = true;
        setTimeout(() => {
          changing.value = false;
        }, props.duration);
      }
      const tab = tabsOffsetList.value[idx];
      scrollLeft.value = tab.offset - containerWidth.value / 2;
      if (props.lineWidth === "auto" && isType("line")) {
        components_iuiDesign_helper_rect.getRect(instance, `#tab-${idx} > .cell`).then((res) => {
          currentTabWidth.value = res.width;
          currentTabOffset.value = tab.offset - currentTabWidth.value / 2;
        });
      } else if (isType("tag")) {
        components_iuiDesign_helper_rect.getRect(instance, `#tab-${idx} > .cell`).then((res) => {
          currentTabWidth.value = res.width + 32;
          currentTabOffset.value = tab.offset - currentTabWidth.value / 2;
        });
      } else if (isType("card")) {
        currentTabOffset.value = tab.offset - tab.width / 2;
        currentTabWidth.value = tab.width;
      } else {
        if (props.tabWidth) {
          currentTabOffset.value = tab.offset - props.tabWidth / 2;
        } else {
          currentTabOffset.value = tab.offset - currentTabWidth.value / 2;
        }
      }
    };
    const tabsOffsetList = common_vendor.ref([]);
    const getTabsWidth = () => {
      const temp = [];
      components_iuiDesign_helper_rect.getRect(instance, ".iui-tabs-wrapper").then((res) => {
        containerWidth.value = res.width;
        components_iuiDesign_helper_rect.getRect(instance, ".iui-tabs-cell", true).then((res2) => {
          let offset = 0;
          res2.forEach((tab) => {
            temp.push({
              width: parseInt(tab.width),
              offset: parseInt(offset + tab.width / 2)
            });
            offset += tab.width;
          });
          tabsOffsetList.value = temp;
          setSliderPosition(props.modelValue);
        });
      });
    };
    common_vendor.onMounted(() => {
      getTabsWidth();
    });
    const emit = __emit;
    const handleTabClick = (idx, tab) => {
      if (idx === current.value)
        return;
      emit("update:modelValue", idx);
      emit("change", idx, tab);
      current.value = idx;
      setSliderPosition(idx);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (tab, idx, i0) => {
          return common_vendor.e({
            a: tab.icon
          }, tab.icon ? {
            b: "e0b5f28d-0-" + i0,
            c: common_vendor.p({
              name: tab.icon
            })
          } : {}, {
            d: common_vendor.t(tab.title),
            e: tab.badge
          }, tab.badge ? {
            f: "e0b5f28d-1-" + i0,
            g: common_vendor.p({
              ...tab.badge
            })
          } : {}, {
            h: `tab-${idx}`,
            i: common_vendor.n({
              [`${prefixCls}-cell-active`]: current.value === idx
            }),
            j: common_vendor.o(($event) => handleTabClick(idx, tab)),
            k: idx
          });
        }),
        b: common_vendor.n(`${prefixCls}-cell`),
        c: __props.tabWidth ? `${__props.tabWidth}px` : "100%",
        d: __props.tabWidth ? "flex-start" : "center",
        e: common_vendor.n(`${prefixCls}-content`),
        f: __props.tabWidth ? "flex-start" : "space-between",
        g: common_vendor.n({
          "tabs-dot-move": changing.value
        }),
        h: duration,
        i: __props.lineHeight ? `${__props.lineHeight > 10 ? 10 : __props.lineHeight}px` : "2px",
        j: __props.lineHeight ? `${__props.lineHeight / 2}px` : "",
        k: common_vendor.n(`${prefixCls}-slider`),
        l: common_vendor.s(sliderStyle.value),
        m: common_vendor.s({
          transitionDuration: duration
        }),
        n: common_vendor.n(cls.value),
        o: common_vendor.n(`${prefixCls}-wrapper`),
        p: common_vendor.n({
          [`${prefixCls}-split`]: props.split && !isType("card")
        }),
        q: scrollLeft.value,
        r: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e0b5f28d"]]);
my.createComponent(Component);
