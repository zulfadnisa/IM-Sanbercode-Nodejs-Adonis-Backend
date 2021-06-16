"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(name, password) {
  var path = "./data.json";

  _fs["default"].readFile(__dirname + path, "utf8", function (err, data) {
    if (err) {
      console.log(err.stack);
    } else {
      obj = JSON.parse(data);
      obj.forEach(function (el) {
        if (el.name == name && el.password == password) {
          el.isLogin = true;
        } else {
          console.log('name and password not found.');
        }
      });
      json = JSON.stringify(obj);

      _fs["default"].writeFile(__dirname + path, json, "utf8", function (err) {
        if (err) {
          console.log(err.stack);
        }
      });

      console.log('berhasil login');
    }
  });
};

var _default = login;
exports["default"] = _default;