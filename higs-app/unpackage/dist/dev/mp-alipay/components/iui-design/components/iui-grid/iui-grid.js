"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_iuiDesign_helper_is = require("../../helper/is.js");
if (!Math) {
  (iuiGridItem + iuiGridRow)();
}
const iuiGridRow = () => "../iui-grid-row/iui-grid-row.js";
const iuiGridItem = () => "../iui-grid-item/iui-grid-item.js";
const prefixCls = "iui-grid";
const _sfc_main = {
  __name: "iui-grid",
  props: {
    /**
     * 数据
     * data: 图标 icon 标题 title 描述 desc
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 数据展示方向
     * direction: vertical | horizontal
     */
    direction: {
      type: String,
      default: "vertical"
    },
    /**
     * 图标大小
     * iconSize: 24 | 24px | 80%
     */
    iconSize: {
      type: [String, Number],
      default: 36
    },
    /**
     * 宫格背景颜色
     * 作用于 iui-grid-item
     */
    bgColor: {
      type: String
    },
    /**
     * 每行的列数
     */
    cols: {
      type: Number,
      default: 3
    },
    /**
     * 行间距
     * margin-top 和 margin-bottom 各一半
     */
    rowGap: {
      type: Number,
      default: 0
    },
    /**
     * 列间距
     */
    colGap: {
      type: Number,
      default: 0
    },
    /**
     * 边框
     */
    border: {
      type: Boolean,
      default: false
    },
    /**
     * 对齐
     * align: start | center | end
     */
    align: {
      type: String,
      default: "center"
    },
    /**
     * 滑动
     */
    scroll: {
      type: Boolean,
      default: false
    },
    /**
     * 点击效果
     * hover: true | false
     */
    clickEffect: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    common_vendor.useCssVars((_ctx) => ({
      "1e9ae4b7": common_vendor.unref(borderWidth)
    }));
    const props = __props;
    const cls = common_vendor.computed(() => [prefixCls, `cols-${props.cols}`], {
      [`${prefixCls}-border`]: props.border
    });
    common_vendor.provide("iui-grid-props", props);
    const rows = props.scroll ? 1 : Math.ceil(props.data.length / props.cols);
    const rowData = (rowIdx) => {
      if (props.scroll)
        return props.data;
      return props.data.slice((rowIdx - 1) * props.cols, rowIdx * props.cols);
    };
    const getIconSize = common_vendor.computed(() => {
      if (components_iuiDesign_helper_is.isNumber(props.iconSize)) {
        return `${props.iconSize}px`;
      }
      return props.iconSize;
    });
    const getAlign = common_vendor.computed(() => {
      return props.align === "center" ? "center" : "flex-" + props.align;
    });
    const iconStyle = common_vendor.computed(() => {
      return {
        width: getIconSize.value,
        height: getIconSize.value,
        marginBottom: props.direction === "vertical" ? "10px" : 0
      };
    });
    const getDirection = common_vendor.computed(() => {
      return props.direction === "vertical" ? "column" : "row";
    });
    const contentStyle = common_vendor.computed(() => {
      return {
        marginLeft: props.direction === "vertical" ? 0 : "10px",
        textAlign: props.direction === "vertical" ? "center" : "left"
      };
    });
    const borderWidth = props.colGap ? "1px" : 0;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(components_iuiDesign_helper_is.isEmpty)(__props.data)
      }, common_vendor.unref(components_iuiDesign_helper_is.isEmpty)(__props.data) ? {} : {
        b: common_vendor.f(common_vendor.unref(rows), (rowIdx, k0, i0) => {
          return {
            a: common_vendor.f(rowData(rowIdx), (item, index, i1) => {
              return {
                a: common_vendor.t(item.title),
                b: common_vendor.t(item.desc),
                c: `row-${rowIdx}-${index}`,
                d: common_vendor.o(($event) => _ctx.$emit("click", item, rowIdx, index)),
                e: "56a17cf6-1-" + i0 + "-" + i1 + "," + ("56a17cf6-0-" + i0)
              };
            }),
            b: `row-${rowIdx}`,
            c: "56a17cf6-0-" + i0
          };
        }),
        c: common_vendor.s(iconStyle.value),
        d: common_vendor.s(contentStyle.value),
        e: common_vendor.n(`${prefixCls}-row-item ${common_vendor.unref(components_iuiDesign_helper_is.isBoolean)(__props.clickEffect) && __props.clickEffect ? `${prefixCls}-hover` : __props.clickEffect}`),
        f: getDirection.value,
        g: getAlign.value,
        h: getAlign.value,
        i: __props.bgColor,
        j: common_vendor.n(cls.value)
      }, {
        k: common_vendor.n(cls.value),
        l: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-56a17cf6"]]);
my.createComponent(Component);
