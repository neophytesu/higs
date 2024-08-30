"use strict";
const utils_request = require("../utils/request.js");
const rootUrl = "";
const getUser = (phoneNumber) => {
  return utils_request.request(rootUrl + ``, "POST");
};
const getCard = (cardNumber) => {
  return utils_request.request(rootUrl + ``, "GET");
};
const bindCard = (phoneNumber, cardNumber) => {
  return utils_request.request(rootUrl + ``, "POST");
};
const registerCard = (phoneNumber, name, identity) => {
  return utils_request.request(rootUrl + ``, "POST");
};
exports.bindCard = bindCard;
exports.getCard = getCard;
exports.getUser = getUser;
exports.registerCard = registerCard;
