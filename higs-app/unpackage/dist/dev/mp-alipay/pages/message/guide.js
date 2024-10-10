"use strict";
const common_vendor = require("../../common/vendor.js");
const api_message = require("../../api/message.js");
const common_assets = require("../../common/assets.js");
const recorderManager = common_vendor.index.getRecorderManager();
const innerAudioContext = common_vendor.index.createInnerAudioContext();
innerAudioContext.autoplay = true;
const _sfc_main = {
  data() {
    return {
      obj: {
        "sender": "1",
        "message": "我要导诊"
      },
      //语音地址
      voicePath: "",
      microicon: "audio",
      microstatus: "normal",
      //头像
      myAvatar: "/static/me.png",
      robotAvatar: "/static/rb.png",
      //键盘高度
      keyboardHeight: 0,
      //底部消息发送高度
      bottomHeight: 0,
      //滚动距离
      scrollTop: 0,
      userId: "",
      //发送的消息
      chatMsg: "",
      RobotMsg: [],
      RobotMsgIndex: 0,
      msgList: [{
        botContent: "您好，请描述一下您的症状。",
        userContent: "",
        image: "/static/rb.png",
        url: ""
      }]
    };
  },
  updated() {
    this.scrollToBottom();
  },
  onLoad() {
    common_vendor.index.onKeyboardHeightChange((res) => {
      this.keyboardHeight = this.rpxTopx(res.height);
      if (this.keyboardHeight < 0)
        this.keyboardHeight = 0;
    });
    let self = this;
    recorderManager.onStop(function(res) {
      console.log("recorder stop" + JSON.stringify(res));
      self.voicePath = res.tempFilePath;
    });
  },
  onUnload() {
  },
  methods: {
    startRecord() {
      console.log("开始录音");
      recorderManager.start();
    },
    endRecord() {
      console.log("录音结束");
      recorderManager.stop();
    },
    playVoice() {
      console.log("播放录音");
      if (this.voicePath) {
        innerAudioContext.src = this.voicePath;
        innerAudioContext.play();
      }
    },
    recordHandler() {
      if (this.microicon == "audio") {
        this.microicon = "close";
        this.microstatus = "danger";
        this.startRecord();
      } else {
        this.microicon = "audio";
        this.microstatus = "normal";
        this.endRecord();
      }
    },
    goback() {
    },
    focus() {
      this.scrollToBottom();
    },
    blur() {
      this.scrollToBottom();
    },
    // 滚动至聊天底部
    scrollToBottom(e) {
      setTimeout(() => {
        this.scrollTop = this.msgList.length * 1e3;
      }, 15);
    },
    updated() {
      this.scrollToBottom();
    },
    // 发送消息
    handleSend() {
      if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
        let obj1 = {
          botContent: "",
          userContent: this.chatMsg,
          image: "/static/me.png"
          //用户头像
        };
        this.msgList.push(obj1);
        this.chatMsg = "";
        this.scrollToBottom();
        console.log("用户消息已发送");
        setTimeout(() => {
          let obj2 = {
            botContent: "根据您的症状，建议您挂号内科",
            //返回的数据
            userContent: "",
            image: "/static/rb.png",
            //ai头像
            url: ""
          };
          this.msgList.push(obj2);
          this.chatMsg = "";
          this.scrollToBottom();
          console.log("机器人消息已发送");
        }, 1e3);
        setTimeout(() => {
          let obj2 = {
            botContent: "点击前往挂号",
            //返回的数据
            userContent: "",
            image: "/static/rb.png",
            //ai头像
            url: "/pages/index/proregister"
          };
          this.msgList.push(obj2);
          this.chatMsg = "";
          this.scrollToBottom();
          console.log("机器人消息已发送");
        }, 1500);
      } else {
        this.$modal.showToast("不能发送空白消息");
      }
    },
    //AI接口
    getAI() {
      api_message.getAI(this.chatMsg).then((res) => {
        console.log("请求成功");
        this.RobotMsg = "";
      }).catch((error) => {
        console.error("请求失败:", error);
      });
    }
    // test
    // getAII() {
    // 	uni.request({
    // 		url: '124.220.12.57:5005/webhooks/rest/webhook', // 必填，开发者服务器接口地址  
    // 		method: 'POST', // HTTP 请求方法，默认为 GET  
    // 		data: {
    // 			"sender": "1",
    // 			"message": "我要导诊",
    // 		},
    // 		header: {
    // 			'Content-Type': 'application/json' // 显式设置 Content-Type  
    // 		},
    // 		success: (res) => {
    // 			// 请求成功时执行  
    // 			console.log('请求成功:', res.data);
    // 		},
    // 		fail: (err) => {
    // 			// 请求失败时执行  
    // 			console.error('请求失败:', err);
    // 		},
    // 		complete: () => {
    // 			console.log('请求完成');
    // 		}
    // 	});
    // }
  }
};
if (!Array) {
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  _easycom_iui_button2();
}
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
if (!Math) {
  _easycom_iui_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.msgList, (item, index, i0) => {
      return common_vendor.e({
        a: item.userContent != ""
      }, item.userContent != "" ? {
        b: common_vendor.t(item.userContent),
        c: item.image
      } : {}, {
        d: item.botContent != ""
      }, item.botContent != "" ? common_vendor.e({
        e: item.image,
        f: item.url === ""
      }, item.url === "" ? {
        g: common_vendor.t(item.botContent)
      } : {
        h: common_vendor.t(item.botContent),
        i: item.url
      }) : {}, {
        j: index
      });
    }),
    b: $data.scrollTop,
    c: common_vendor.o($options.recordHandler),
    d: common_vendor.p({
      status: $data.microstatus,
      icon: $data.microicon,
      shape: "circle"
    }),
    e: common_vendor.o((...args) => $options.handleSend && $options.handleSend(...args)),
    f: $data.chatMsg,
    g: common_vendor.o(($event) => $data.chatMsg = $event.detail.value),
    h: common_assets._imports_0$3,
    i: common_vendor.o((...args) => _ctx.chooseImage && _ctx.chooseImage(...args)),
    j: common_vendor.o((...args) => $options.handleSend && $options.handleSend(...args)),
    k: `${_ctx.inputHeight}rpx`
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8160f9bd"]]);
my.createPage(MiniProgramPage);
