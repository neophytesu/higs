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
      //语音地址
      voicePath: "",
      microicon: "audio",
      microstatus: "normal",
      popupstatus: false,
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
      illList: {
        illness: "",
        //当前症状
        present: "",
        //病例史
        medical: "",
        //既往病史
        allergies: "",
        //过敏史
        lifestyle: "",
        //
        marriage: ""
        //婚姻状况			
      },
      RobotMsg: [
        {
          msg: "请描述一下您的病例史。"
        },
        {
          msg: "请告诉我您的既往病史。"
        },
        {
          msg: "您有过敏史吗？"
        },
        {
          msg: "请告诉我您的个人史，比如抽烟、饮酒等。"
        },
        {
          msg: "您的婚姻状况如何？"
        },
        {
          msg: "感谢您的信息，已完成您的信息病例收集"
        }
      ],
      RobotMsgIndex: 0,
      msgList: [{
        botContent: "您好，请描述一下您的症状。",
        userContent: "",
        image: "/static/rb.png",
        hasButton: false,
        buttonAction: this.showMedicalRecord
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
    // 病历单显示
    showMedicalRecord() {
      console.log("病历单弹出");
      setTimeout(() => {
        let obj = {
          botContent: `电子病历:

									主诉症状: ${this.illList.illness}

							
									婚姻状况: ${this.illList.marriage}


									病例史: ${this.illList.present}


									既往病史: ${this.illList.medical}


									过敏史: ${this.illList.allergies}


									生活习惯: ${this.illList.lifestyle}`,
          userContent: "",
          image: this.robotAvatar
          //用户头像
        };
        this.msgList.push(obj);
        this.scrollToBottom();
        console.log("病历单已生成");
      }, 50);
    },
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
          image: this.myAvatar,
          //用户头像
          hasButton: true
        };
        this.msgList.push(obj1);
        switch (this.RobotMsgIndex) {
          case 0:
            this.illList.illness = this.chatMsg;
            break;
          case 1:
            this.illList.present = this.chatMsg;
            break;
          case 2:
            this.illList.medical = this.chatMsg;
            break;
          case 3:
            this.illList.allergies = this.chatMsg;
            break;
          case 4:
            this.illList.lifestyle = this.chatMsg;
            break;
          case 5:
            this.illList.marriage = this.chatMsg;
            break;
        }
        this.chatMsg = "";
        this.scrollToBottom();
        console.log("用户消息已发送");
        setTimeout(() => {
          let obj2 = {
            botContent: this.RobotMsg[this.RobotMsgIndex++].msg,
            userContent: "",
            image: this.robotAvatar
            //用户头像
          };
          this.msgList.push(obj2);
          this.scrollToBottom();
          console.log("AI消息已发送");
        }, 500);
        if (this.RobotMsgIndex == 5) {
          setTimeout(() => {
            let obj2 = {
              botContent: " ",
              image: this.robotAvatar,
              hasButton: true
            };
            this.msgList.push(obj2);
            this.scrollToBottom();
            console.log("病历单已生成");
          }, 2e3);
        }
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
  }
};
if (!Array) {
  const _easycom_iui_button2 = common_vendor.resolveComponent("iui-button");
  const _easycom_iui_popup2 = common_vendor.resolveComponent("iui-popup");
  (_easycom_iui_button2 + _easycom_iui_popup2)();
}
const _easycom_iui_button = () => "../../components/iui-design/components/iui-button/iui-button.js";
const _easycom_iui_popup = () => "../../components/iui-design/components/iui-popup/iui-popup.js";
if (!Math) {
  (_easycom_iui_button + _easycom_iui_popup)();
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
        f: item.hasButton
      }, item.hasButton ? {
        g: common_vendor.o((...args) => $options.showMedicalRecord && $options.showMedicalRecord(...args))
      } : {}, {
        h: common_vendor.t(item.botContent)
      }) : {}, {
        i: index
      });
    }),
    b: $data.scrollTop,
    c: common_vendor.o($options.recordHandler),
    d: common_vendor.p({
      type: "outline",
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
    k: `${_ctx.inputHeight}rpx`,
    l: common_vendor.t(this.illList.marriage),
    m: common_vendor.t(this.illList.illness),
    n: common_vendor.t(this.illList.present),
    o: common_vendor.t(this.illList.medical),
    p: common_vendor.t(this.illList.allergies),
    q: common_vendor.t(this.illList.lifestyle),
    r: common_vendor.o(($event) => $data.popupstatus = $event),
    s: common_vendor.p({
      title: "病历单",
      direction: "top",
      modelValue: $data.popupstatus
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7d76ffc5"]]);
my.createPage(MiniProgramPage);
