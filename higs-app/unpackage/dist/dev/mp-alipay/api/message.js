"use strict";
const utils_request = require("../utils/request.js");
const rootUrl = "";
const getAI = (message) => {
  return utils_request.request(rootUrl + `124.220.12.57:5005/webhooks/rest/webhook`, "POST");
};
exports.getAI = getAI;
