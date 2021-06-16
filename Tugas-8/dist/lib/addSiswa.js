"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addSiswa = function addSiswa(student, trainer) {
  var obj = [];
  var path = "./data.json";

  _fs["default"].readFile(__dirname + path, "utf8", function (err, data) {
    if (err) {
      console.log(err.stack);
    } else {
      obj = JSON.parse(data);
      var isStatus = false;
      obj.forEach(function (el) {
        if (el.role == "admin" && el.isLogin === true) {
          isStatus = true;
        }
      });

      if (isStatus) {
        obj.forEach(function (el) {
          if (el.role === "trainer" && el.name == trainer) {
            el.students.push({
              name: student
            });
          } else {
            var newData = {
              name: trainer,
              password: el.password,
              role: "trainer",
              isLogin: false,
              students: [{
                name: student
              }]
            };
            obj.push(newData);
          }
        });
      }

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

var _default = addSiswa;
exports["default"] = _default;