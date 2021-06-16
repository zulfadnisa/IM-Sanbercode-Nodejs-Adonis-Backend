"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var register = function register(name, password, role) {
  var dataRegister = {
    name: name,
    password: password,
    role: role,
    isLogin: false
  };
  var obj = [];
  var path = "./data.json";

  _fs["default"].readFile(__dirname + path, "utf8", function (err, data) {
    if (err) {
      console.log(err.stack);
    } else {
      obj = JSON.parse(data);
      obj.push(dataRegister); //add some data

      json = JSON.stringify(obj); //convert it back to json

      _fs["default"].writeFile(__dirname + path, json, "utf8", function (err) {
        if (err) {
          console.log(err.stack);
        }
      });

      console.log("berhasil register");
    }
  });
};

var _default = register;
exports["default"] = _default;