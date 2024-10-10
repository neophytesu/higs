"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  components: {
    // swipeAction
  },
  data() {
    return {
      options: [{
        text: "取消",
        style: {
          backgroundColor: "#007aff"
        }
      }, {
        text: "确认",
        style: {
          backgroundColor: "#dd524d"
        }
      }],
      // robots: [
      // 	{
      // 		avatar: '/static/rb.png',
      // 		name: 'AI - 导诊',
      // 		read: 0,
      // 		time: '',
      // 		msg: '根据您的描述给出科室建议'
      // 	},
      // 	{
      // 		avatar: '/static/rb.png',
      // 		name: 'AI - 预问诊',
      // 		read: 0,
      // 		time: '',
      // 		msg: '根据您的描述生成病历单'
      // 	},
      // ],
      users: [
        {
          avatar: "/static/avatar/avatar1.png",
          name: "消化内科 - 杨涛",
          read: 1,
          time: "20:59",
          msg: "*有一条新消息"
        },
        {
          avatar: "/static/avatar/avatar2.png",
          name: "门诊药房 - 夜海安",
          read: 0,
          time: "23:51",
          msg: "嗯"
        },
        {
          avatar: "/static/avatar/avatar3.png",
          name: "儿科 - 张伟",
          read: 0,
          time: "14:09",
          msg: "[图片]"
        },
        {
          avatar: "/static/avatar/avatar4.png",
          name: "检验室 - 罗汉斯",
          read: 1,
          time: "8:25",
          msg: "没有消息就是最好的消息"
        },
        {
          avatar: "/static/avatar/avatar5.png",
          name: "病友",
          read: 1,
          time: "16:46",
          msg: "嘻嘻"
        }
      ]
    };
  },
  methods: {
    onClick(e) {
      console.log("点击了" + (e.position === "left" ? "左侧" : "右侧") + e.content.text + "按钮");
    },
    swipeChange(e, index) {
      console.log("当前状态：" + e + "，下标：" + index);
    },
    connect(item) {
      common_vendor.index.navigateTo({
        url: `/pages/message/index?name=${item.name}&avatar=${item.avatar}`
      });
    },
    toGuide() {
      common_vendor.index.navigateTo({
        url: `/pages/message/guide`
      });
    },
    toAsk() {
      common_vendor.index.navigateTo({
        url: `/pages/message/ask`
      });
    },
    connectAI(item) {
      if (item.mame == "AI - 导诊") {
        common_vendor.index.navigateTo({
          url: `/pages/message/guide`
        });
      } else {
        common_vendor.index.navigateTo({
          url: `/pages/message/guide`
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({}, {
    a: common_assets._imports_0$2,
    b: common_vendor.o((...args) => $options.toGuide && $options.toGuide(...args))
  }, {}, {
    c: common_assets._imports_0$2,
    d: common_vendor.o((...args) => $options.toAsk && $options.toAsk(...args)),
    e: common_vendor.f($data.users, (item, index, i0) => {
      return common_vendor.e({
        a: item.read
      }, item.read ? {} : {}, {
        b: item.avatar,
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.time),
        e: common_vendor.t(item.msg),
        f: index,
        g: common_vendor.o(($event) => $options.connect(item))
      });
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
