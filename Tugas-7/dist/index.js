"use strict";

var _bootcamp = _interopRequireDefault(require("./lib/bootcamp"));

var _student = _interopRequireDefault(require("./lib/student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// var args = process.argv.slice(2);
// console.log("🚀 ~ file: index.js ~ line 8 ~ args", args);
var sanber = new _bootcamp["default"]("sanbercode");
console.log('-----RELEASE 0 ---------');
sanber.createClass("Laravel", "beginner", "abduh");
sanber.createClass("React", "beginner", "abdul");
console.log(sanber.classes);
var names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"];
names.map(function (nama, index) {
  var kelas = sanber.classes[index % 2].name;
  sanber.register(kelas, nama);
});
console.log('-----RELEASE 1---------');
sanber.classes.forEach(function (kelas) {
  console.log(kelas);
  sanber.runBatch(kelas.name, 4);
});
console.log('-----RELEASE 2 & 3 ---------');

for (var grad in sanber.graduated) {
  console.log(grad);
  console.log(sanber.graduated[grad]);
}