"use strict";
const opt = Object.prototype.toString;
function isArray(obj) {
  return opt.call(obj) === "[object Array]";
}
function isString(obj) {
  return opt.call(obj) === "[object String]";
}
function isNumber(obj) {
  return opt.call(obj) === "[object Number]";
}
function isBoolean(obj) {
  return opt.call(obj) === "[object Boolean]";
}
function isNull(obj) {
  return opt.call(obj) === "[object Null]";
}
function isUndefined(obj) {
  return obj === void 0;
}
function isObject(obj) {
  return opt.call(obj) === "[object Object]";
}
function isEmpty(obj) {
  if (isNull(obj) || isUndefined(obj))
    return true;
  if (isString(obj) || isArray(obj))
    return obj.length === 0;
  if (isObject(obj))
    return Object.keys(obj).length === 0;
  return false;
}
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isEmpty = isEmpty;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
