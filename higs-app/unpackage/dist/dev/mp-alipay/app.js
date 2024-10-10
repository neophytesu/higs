"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/login/login.js";
  "./pages/login/carding.js";
  "./pages/login/card.js";
  "./pages/login/face.js";
  "./pages/login/facing.js";
  "./pages/index/index.js";
  "./pages/index/card.js";
  "./pages/index/register.js";
  "./pages/index/proregister.js";
  "./pages/index/registerFee.js";
  "./pages/home/home.js";
  "./pages/home/index.js";
  "./pages/home/fee.js";
  "./pages/message/message.js";
  "./pages/message/guide.js";
  "./pages/message/ask.js";
  "./pages/message/index.js";
  "./pages/message/test.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
