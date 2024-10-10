"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      content: "",
      list: [],
      top: 0
    };
  },
  onLoad(options) {
    common_vendor.index.setNavigationBarTitle({
      title: options.name
    });
    this._friendAvatar = options.avatar;
    this._selfAvatar = "/static/me.png";
    this.list = [
      {
        content: "对方历史回复消息",
        userType: "friend",
        avatar: this._friendAvatar
      },
      {
        content: "历史消息",
        userType: "self",
        avatar: this._selfAvatar
      }
    ];
  },
  methods: {
    send() {
      this.list.push({
        content: this.content,
        userType: "self",
        avatar: this._selfAvatar
      });
      this.content = "";
      this.scrollToBottom();
      setTimeout(() => {
        this.list.push({
          content: "周末什么安排",
          userType: "friend",
          avatar: this._friendAvatar
        });
        this.scrollToBottom();
      }, 1500);
    },
    chooseImage() {
      common_vendor.index.chooseImage({
        // sourceType: 'album',
        success: (res) => {
          this.list.push({
            content: res.tempFilePaths[0],
            userType: "self",
            messageType: "image",
            avatar: this._selfAvatar
          });
          this.scrollToBottom();
          setTimeout(() => {
            this.list.push({
              content: "你好呀，朋友~",
              userType: "friend",
              avatar: this._friendAvatar
            });
            this.scrollToBottom();
          }, 1500);
        }
      });
    },
    scrollToBottom() {
      this.top = this.list.length * 1e3;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: item.userType === "friend"
      }, item.userType === "friend" ? {
        b: item.avatar
      } : {}, {
        c: item.messageType === "image"
      }, item.messageType === "image" ? {
        d: item.content
      } : {
        e: common_vendor.t(item.content)
      }, {
        f: item.userType === "self"
      }, item.userType === "self" ? {
        g: item.avatar
      } : {}, {
        h: common_vendor.n(item.userType),
        i: index
      });
    }),
    b: $data.top,
    c: common_vendor.o((...args) => _ctx.handleSend && _ctx.handleSend(...args)),
    d: _ctx.chatMsg,
    e: common_vendor.o(($event) => _ctx.chatMsg = $event.detail.value),
    f: common_assets._imports_0$3,
    g: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d6e1659f"]]);
my.createPage(MiniProgramPage);
