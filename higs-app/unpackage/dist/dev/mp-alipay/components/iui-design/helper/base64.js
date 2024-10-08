"use strict";
var BASE64_MAPPING = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];
var URLSAFE_BASE64_MAPPING = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "_"];
var _toBinary = function(ascii) {
  var binary = [];
  while (ascii > 0) {
    var b = ascii % 2;
    ascii = Math.floor(ascii / 2);
    binary.push(b);
  }
  binary.reverse();
  return binary;
};
var _toDecimal = function(binary) {
  var dec = 0;
  var p = 0;
  for (var i = binary.length - 1; i >= 0; --i) {
    var b = binary[i];
    if (b == 1) {
      dec += Math.pow(2, p);
    }
    ++p;
  }
  return dec;
};
var _toUTF8Binary = function(c, binaryArray) {
  var mustLen = 8 - (c + 1) + (c - 1) * 6;
  var fatLen = binaryArray.length;
  var diff = mustLen - fatLen;
  while (--diff >= 0) {
    binaryArray.unshift(0);
  }
  var binary = [];
  var _c = c;
  while (--_c >= 0) {
    binary.push(1);
  }
  binary.push(0);
  var i = 0, len = 8 - (c + 1);
  for (; i < len; ++i) {
    binary.push(binaryArray[i]);
  }
  for (var j = 0; j < c - 1; ++j) {
    binary.push(1);
    binary.push(0);
    var sum = 6;
    while (--sum >= 0) {
      binary.push(binaryArray[i++]);
    }
  }
  return binary;
};
var _toBinaryArray = function(str) {
  var binaryArray = [];
  for (var i = 0, len = str.length; i < len; ++i) {
    var unicode = str.charCodeAt(i);
    var _tmpBinary = _toBinary(unicode);
    if (unicode < 128) {
      var _tmpdiff = 8 - _tmpBinary.length;
      while (--_tmpdiff >= 0) {
        _tmpBinary.unshift(0);
      }
      binaryArray = binaryArray.concat(_tmpBinary);
    } else if (unicode >= 128 && unicode <= 2047) {
      binaryArray = binaryArray.concat(_toUTF8Binary(2, _tmpBinary));
    } else if (unicode >= 2048 && unicode <= 65535) {
      binaryArray = binaryArray.concat(_toUTF8Binary(3, _tmpBinary));
    } else if (unicode >= 65536 && unicode <= 2097151) {
      binaryArray = binaryArray.concat(_toUTF8Binary(4, _tmpBinary));
    } else if (unicode >= 2097152 && unicode <= 67108863) {
      binaryArray = binaryArray.concat(_toUTF8Binary(5, _tmpBinary));
    } else if (unicode >= 4e6 && unicode <= 2147483647) {
      binaryArray = binaryArray.concat(_toUTF8Binary(6, _tmpBinary));
    }
  }
  return binaryArray;
};
var _encode = function(str, url_safe) {
  var base64_Index = [];
  var binaryArray = _toBinaryArray(str);
  var dictionary = url_safe ? URLSAFE_BASE64_MAPPING : BASE64_MAPPING;
  var extra_Zero_Count = 0;
  for (var i = 0, len = binaryArray.length; i < len; i += 6) {
    var diff = i + 6 - len;
    if (diff == 2) {
      extra_Zero_Count = 2;
    } else if (diff == 4) {
      extra_Zero_Count = 4;
    }
    var _tmpExtra_Zero_Count = extra_Zero_Count;
    while (--_tmpExtra_Zero_Count >= 0) {
      binaryArray.push(0);
    }
    base64_Index.push(_toDecimal(binaryArray.slice(i, i + 6)));
  }
  var base64 = "";
  for (var i = 0, len = base64_Index.length; i < len; ++i) {
    base64 += dictionary[base64_Index[i]];
  }
  for (var i = 0, len = extra_Zero_Count / 2; i < len; ++i) {
    base64 += "=";
  }
  return base64;
};
var Base64 = { encode: function(str) {
  return _encode(str, false);
} };
exports.Base64 = Base64;
