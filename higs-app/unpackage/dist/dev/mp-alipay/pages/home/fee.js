"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      record: 0,
      feeList: []
    };
  },
  onLoad(options) {
    this.record = options.record;
    console.log(this.record);
    for (let i = 0; i < this.record; i++) {
      const way = "挂号缴费";
      const date = this.getRandomDate("2020-1-1", "2024-10-1");
      const time = this.getRandomTime("8:00", "22:00");
      const num = 10;
      const datetime = this.formatDateTime(date, time);
      const newFeeItem = {
        way,
        date,
        // 注意：这里保留原始日期格式  
        time,
        num: num.toFixed(2),
        // 转换为两位小数格式的字符串  
        datetime
        // 使用格式化后的日期和时间  
      };
      this.feeList.push(newFeeItem);
    }
  },
  methods: {
    parseDateString(dateString) {
      const [year, month, day] = dateString.split("-").map((part) => parseInt(part, 10));
      const realMonth = month - 1;
      return new Date(year, realMonth, day);
    },
    getRandomDate(startDateString, endDateString) {
      const startDate = this.parseDateString(startDateString);
      const endDate = this.parseDateString(endDateString);
      const start = startDate.getTime();
      const end = endDate.getTime();
      const randomTime = Math.floor(Math.random() * (end - start)) + start;
      const randomDate = new Date(randomTime);
      const formattedDate = randomDate.getFullYear() + "-" + String(randomDate.getMonth() + 1).padStart(2, "0") + "-" + String(randomDate.getDate()).padStart(2, "0");
      return formattedDate;
    },
    parseTimeString(timeString) {
      const [hours, minutes] = timeString.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;
      return totalMinutes;
    },
    formatMinutesToTime(totalMinutes) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");
    },
    getRandomTime(startTimeString, endTimeString) {
      const startTime = this.parseTimeString(startTimeString);
      const endTime = this.parseTimeString(endTimeString);
      const randomMinutes = Math.floor(Math.random() * (endTime - startTime)) + startTime;
      return this.formatMinutesToTime(randomMinutes);
    },
    formatDateTime(dateString, timeString) {
      const [year, month, day] = dateString.split("-").map((part) => {
        return parseInt(part, 10) < 10 ? "0" + parseInt(part, 10) : part;
      });
      const [hours, minutes] = timeString.split(":");
      const formattedDate = `${year}年${month}月${day}日`;
      const formattedTime = `${hours}:${minutes}`;
      return `${formattedDate} ${formattedTime}`;
    }
  }
};
if (!Array) {
  const _easycom_iui_cell2 = common_vendor.resolveComponent("iui-cell");
  const _easycom_iui_list2 = common_vendor.resolveComponent("iui-list");
  (_easycom_iui_cell2 + _easycom_iui_list2)();
}
const _easycom_iui_cell = () => "../../components/iui-design/components/iui-cell/iui-cell.js";
const _easycom_iui_list = () => "../../components/iui-design/components/iui-list/iui-list.js";
if (!Math) {
  (_easycom_iui_cell + _easycom_iui_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.feeList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.num),
        b: "5eb3e5a6-1-" + i0 + "," + ("5eb3e5a6-0-" + i0),
        c: common_vendor.p({
          clsss: "cell",
          label: item.way,
          desc: item.datetime
        }),
        d: index,
        e: "5eb3e5a6-0-" + i0
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
