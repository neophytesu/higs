"use strict";
const common_vendor = require("../../../common/vendor.js");
function getRect(context, selector, needAll = false) {
  return new Promise((resolve, reject) => {
    common_vendor.index.createSelectorQuery().in(context)[needAll ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
      if (rect) {
        resolve(rect);
      } else {
        reject(rect);
      }
    }).exec();
  });
}
exports.getRect = getRect;
