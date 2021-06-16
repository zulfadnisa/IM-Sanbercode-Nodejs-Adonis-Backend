"use strict";

var _register = _interopRequireDefault(require("./lib/register"));

var _readData = _interopRequireDefault(require("./lib/readData"));

var _login = _interopRequireDefault(require("./lib/login"));

var _addSiswa = _interopRequireDefault(require("./lib/addSiswa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var args = process.argv.slice(2);
console.log("input", args);
var command = args[0];

switch (command) {
  case "register":
    (0, _register["default"])(args[1], args[2], args[3]);
    break;

  case "readData":
    (0, _readData["default"])();
    break;

  case "login":
    (0, _login["default"])(args[1], args[2]);
    break;

  case "addSiswa":
    (0, _addSiswa["default"])(args[1], args[2]);
    break;

  default:
    console.log("sintaks error");
    break;
}