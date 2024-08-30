"use strict";
const common_vendor = require("../../common/vendor.js");
const phone = () => "./phone.js";
const _sfc_main = {
  // 注册子组件  
  components: {
    phone
  },
  data() {
    return {};
  },
  methods: {
    t1() {
    }
  }
};
if (!Array) {
  const _component_phone = common_vendor.resolveComponent("phone");
  _component_phone();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createPage(MiniProgramPage);
