"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_iui_tabs2 = common_vendor.resolveComponent("iui-tabs");
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  const _easycom_iui_card2 = common_vendor.resolveComponent("iui-card");
  (_easycom_iui_tabs2 + _easycom_iui_button2 + _easycom_iui_card2)();
}
const _easycom_iui_tabs = () => "../../components/iui-design/components/iui-tabs/iui-tabs.js";
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
const _easycom_iui_card = () => "../../components/iui-design/components/iui-card/iui-card.js";
if (!Math) {
  (_easycom_iui_tabs + _easycom_iui_button + _easycom_iui_card)();
}
const __default__ = {
  data() {
    return {
      dateList: [],
      dateList2: [],
      tabIndex: 0,
      cardList: [
        {
          title: "科室：2-201",
          doctor: "张伟",
          time: "14:00 ~ 16:00",
          status: "预约",
          use: false
        },
        {
          title: "科室：2-301",
          doctor: "吴乐山",
          time: "8:00 ~ 10:00",
          status: "预约",
          use: false
        },
        {
          title: "科室：2-203",
          doctor: "徐福泽",
          time: "18:00 ~ 20:00",
          status: "预约",
          use: false
        }
      ],
      departmentList: [
        {
          title: "内科"
        },
        {
          title: "外科"
        },
        {
          title: "中医科"
        },
        {
          title: "男科"
        },
        {
          title: "儿科"
        },
        {
          title: "传染科"
        },
        {
          title: "其它科室"
        }
      ],
      subList: [
        [
          {
            title: "呼吸内科"
          },
          {
            title: "消化内科"
          },
          {
            title: "神经内科"
          },
          {
            title: "心血管内科"
          },
          {
            title: "肾内科"
          },
          {
            title: "血液内科"
          },
          {
            title: "免疫科"
          },
          {
            title: "内分泌科"
          }
        ],
        [
          {
            title: "1"
          },
          {
            title: "消化内科"
          },
          {
            title: "神经内科"
          },
          {
            title: "心血管内科"
          },
          {
            title: "肾内科"
          },
          {
            title: "血液内科"
          },
          {
            title: "免疫科"
          },
          {
            title: "内分泌科"
          }
        ]
      ]
      // subTabIndex : 0,
      // subTab : subList[subTabIndex],
    };
  },
  onLoad() {
    console.log("onload");
    this.initDateList();
    this.initDateList2();
  },
  onShow() {
    console.log("im back");
    const register = this.$store.getters.getRegister;
    console.log(register);
    if (register.isFee) {
      const index = register.index;
      this.cardList[index].status = "已预约";
      this.cardList[index].use = true;
    }
  },
  computed: {
    ...common_vendor.mapGetters(["getRegister"])
  },
  methods: {
    initDateList() {
      console.log(this.dateList);
      const currentDate = /* @__PURE__ */ new Date();
      const dayOfWeek = currentDate.getDay();
      currentDate.getFullYear();
      String(currentDate.getMonth() + 1).padStart(2, "0");
      String(currentDate.getDate()).padStart(2, "0");
      const weekDays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      this.dateList.length = 0;
      for (let i = 0; i < 7; i++) {
        const index = (dayOfWeek + i) % 7;
        const date_obj = { title: weekDays[index] };
        this.dateList.push(date_obj);
      }
      console.log(this.dateList);
    },
    initDateList2() {
      const currentDate = /* @__PURE__ */ new Date();
      for (let i = 0; i < 7; i++) {
        const futureDate = new Date(currentDate);
        futureDate.setDate(currentDate.getDate() + i);
        const formattedDate = futureDate.toISOString().split("T")[0];
        const dateObj = { date: formattedDate };
        this.dateList2.push(dateObj);
      }
    },
    getSubtabs(index) {
      console.log(subTabIndex);
    },
    registerHandler(index) {
      const match = this.cardList[index].title.match(/：([\d-]+)/);
      const p1 = match ? match[1] : null;
      const p2 = this.cardList[index].doctor;
      const p3 = this.cardList[index].time;
      const idx = this.tabIndex;
      const p4 = this.dateList2[idx].date;
      const p5 = index;
      console.log(p1);
      console.log(p2);
      console.log(p3);
      console.log(p4);
      common_vendor.index.navigateTo({
        url: `/pages/index/registerFee?room=${p1}&doctor=${p2}&time=${p3}&date=${p4}&index=${p5}`
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "register",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: () => ({
          r: datetab
        }),
        b: common_vendor.o(($event) => _ctx.tabIndex = $event),
        c: common_vendor.p({
          type: "tag",
          list: _ctx.dateList,
          modelValue: _ctx.tabIndex
        }),
        d: common_vendor.o(($event) => _ctx.getSubtabs(_ctx.index)),
        e: common_vendor.p({
          modelValue: _ctx.subTabIndex,
          lineWidth: "auto",
          list: _ctx.departmentList
        }),
        f: common_vendor.f(_ctx.cardList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.status),
            b: common_vendor.o(($event) => _ctx.registerHandler(index)),
            c: "79f59390-3-" + i0 + "," + ("79f59390-2-" + i0),
            d: common_vendor.p({
              disabled: item.use
            }),
            e: common_vendor.t(item.doctor),
            f: common_vendor.t(item.time),
            g: "79f59390-2-" + i0,
            h: common_vendor.p({
              title: item.title,
              shadow: "true"
            }),
            i: index
          };
        })
      };
    };
  }
});
my.createPage(_sfc_main);
