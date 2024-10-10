"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_rect = require("../../helper/rect.js");
if (!Array) {
  const _easycom_iui_icon2 = common_vendor.resolveComponent("iui-icon");
  const _easycom_iui_cell2 = common_vendor.resolveComponent("iui-cell");
  (_easycom_iui_icon2 + _easycom_iui_cell2)();
}
const _easycom_iui_icon = () => "../iui-icon/iui-icon.js";
const _easycom_iui_cell = () => "../iui-cell/iui-cell.js";
if (!Math) {
  (_easycom_iui_icon + _easycom_iui_cell)();
}
const prefixCls = "iui-collapse";
const _sfc_main = {
  __name: "iui-collapse",
  props: {
    /**
     * 唯一标识
     * 用于手风琴模式
     */
    name: {
      type: [String, Number]
    },
    /**
     * 标签
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * 是否展开
     */
    expand: {
      type: Boolean,
      default: false
    },
    /**
     * 自定义内容样式
     */
    contentStyle: {
      type: Object,
      default: () => ({})
    },
    /**
     * 左侧图标
     */
    icon: {
      type: String
    },
    /**
     * 右侧额外信息
     */
    extra: {
      type: String
    }
  },
  emits: ["update:expand", "change"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const cls = common_vendor.computed(() => [prefixCls]);
    const expand = common_vendor.ref(props.expand);
    const contentHeight = common_vendor.ref(0);
    const emit = __emit;
    const instance = common_vendor.getCurrentInstance();
    const uid = props.name || instance.uid;
    const group = instance.provides["collapse-group"];
    const isSplit = (_a = group == null ? void 0 : group.props) == null ? void 0 : _a.split;
    if (group && group.props.accordion) {
      common_vendor.watch(
        () => {
          var _a2;
          return (_a2 = group == null ? void 0 : group.exposed) == null ? void 0 : _a2.activeKey.value;
        },
        (val) => {
          if (val === uid) {
            expand.value = true;
          } else {
            expand.value = false;
          }
        }
      );
    }
    const handleClick = () => {
      if (group) {
        const { setActiveKey } = group == null ? void 0 : group.exposed;
        setActiveKey(uid);
      }
      expand.value = !expand.value;
      emit("update:expand", expand.value);
      emit("change", expand.value);
    };
    const setDefaultActiveKey = () => {
      if (group) {
        const { activeKey } = group == null ? void 0 : group.exposed;
        if (activeKey.value === uid) {
          expand.value = true;
        }
      }
    };
    common_vendor.onMounted(() => {
      components_iuiDesign_helper_rect.getRect(instance, `.${prefixCls}-content-container`).then((res) => {
        contentHeight.value = res.height;
      });
      setDefaultActiveKey();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "down"
        }),
        b: common_vendor.n(`${prefixCls}-action-icon`),
        c: common_vendor.n({
          rotate: expand.value
        }),
        d: common_vendor.p({
          label: __props.label,
          icon: __props.icon,
          extra: __props.extra
        }),
        e: common_vendor.o(handleClick),
        f: common_vendor.n(`${prefixCls}-content-container`),
        g: common_vendor.s(__props.contentStyle),
        h: common_vendor.s({
          borderTop: common_vendor.unref(group) && common_vendor.unref(isSplit) ? "none" : "1rpx solid var(--iui-gray-2)"
        }),
        i: common_vendor.n(`${prefixCls}-content`),
        j: expand.value ? `${contentHeight.value}px` : 0,
        k: common_vendor.n(cls.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a5b2d47e"]]);
my.createComponent(Component);
