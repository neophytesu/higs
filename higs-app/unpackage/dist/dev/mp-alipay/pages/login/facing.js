"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      fil: true,
      imgList: [""],
      statusBar: "",
      CustomBar: 0
    };
  },
  onLoad: function() {
    console.log("onLoad");
  },
  methods: {
    back() {
      common_vendor.index.navigateBack();
    },
    takePhoto() {
      console.log("调用takePhoto");
      common_vendor.index.showLoading({
        title: "人脸录入中...",
        // 显示的提示内容  
        mask: true,
        // 是否显示透明蒙层，防止触摸穿透  
        success: function() {
          console.log("加载提示显示成功");
        },
        fail: function(err) {
          console.error("加载提示显示失败：", err);
        },
        complete: function() {
          console.log("加载提示调用结束");
          setTimeout(() => {
            common_vendor.index.hideLoading();
            common_vendor.index.navigateBack();
          }, 3e3);
        }
      });
      const ctx = common_vendor.index.createCameraContext("livePusher", this);
      ctx.takePhoto({
        quality: "high",
        // 照片的质量  
        success: (res) => {
          console.log("拍摄成功");
          const tempFilePath = res.tempImagePath;
          const uploadTask = common_vendor.index.uploadFile({
            url: "",
            // 后端接口地址  
            filePath: tempFilePath,
            // 文件的本地路径  
            name: "file",
            // 后端接收文件的参数名  
            formData: {
              // 其他数据  
            },
            success: (uploadRes) => {
              console.log("uploadFile:success", uploadRes.data);
              common_vendor.index.navigateBack();
            },
            fail: (uploadErr) => {
              console.error("uploadFile:fail", uploadErr);
            }
          });
          uploadTask.onProgressUpdate((res2) => {
            console.log("上传进度", res2.progress);
          });
        },
        fail: () => {
          console.log("拍照失败");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.BackPage && _ctx.BackPage(...args)),
    b: common_vendor.s({
      top: $data.statusBar + "px"
    }),
    c: $data.CustomBar + "px",
    d: common_assets._imports_0,
    e: common_vendor.o((...args) => $options.takePhoto && $options.takePhoto(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
