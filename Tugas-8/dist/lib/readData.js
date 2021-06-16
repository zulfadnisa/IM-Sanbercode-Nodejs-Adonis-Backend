"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var readData = function readData() {
  var path = "./data.json";

  _fs["default"].readFile(__dirname + path, "utf8", function (err, data) {
    if (err) {
      console.log(err.stack);
    } else {
      obj = JSON.parse(data);
      console.log(obj);
    }
  });
};

var _default = readData;
exports["default"] = _default;