"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad: function() {
    console.log("onLoad");
  },
  methods: {
    takePhoto() {
      console.log("调用takePhoto");
      const ctx = common_vendor.index.createCameraContext("camera", this);
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
            name: "",
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
    a: common_vendor.o((...args) => $options.takePhoto && $options.takePhoto(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
