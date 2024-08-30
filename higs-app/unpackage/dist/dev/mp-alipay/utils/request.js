"use strict";
const common_vendor = require("../common/vendor.js");
const url_all = {
  "DEV": "http://localhost:8080",
  // 开发
  "PRO": "http://111.111.111.111:8080"
  // 生产
};
let BASEURL = url_all["DEV"];
const request = (path, method, data = {}, loading = true) => {
  const token = common_vendor.index.getStorageSync("token");
  if (loading) {
    common_vendor.index.showLoading({
      title: "加载中",
      mask: true
    });
  }
  if (token != "") {
    return tokenRequest(path, method, data, loading, token);
  } else {
    return noTokenRequest(path, method, data);
  }
};
function noTokenRequest(path, method, data, loading) {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASEURL + path,
      method,
      data,
      success(response) {
        console.log(response.data);
        resolve(response.data);
      },
      fail(err) {
        common_vendor.index.showToast({
          icon: "none",
          title: "服务响应失败"
        });
        console.error(err);
        reject(err);
      },
      complete() {
        common_vendor.index.hideLoading();
      }
    });
  });
}
function tokenRequest(path, method, data, loading, token) {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASEURL + path,
      method,
      data,
      header: {
        "token": token
      },
      success(response) {
        console.log("%c响应拦截：", " background:green", response);
        if (response.data.code === 40101)
          ;
        console.log(response.data);
        resolve(response.data);
      },
      fail(err) {
        common_vendor.index.showToast({
          icon: "none",
          title: "服务响应失败"
        });
        console.error(err);
        reject(err);
      },
      complete() {
        common_vendor.index.hideLoading();
      }
    });
  });
}
exports.request = request;
