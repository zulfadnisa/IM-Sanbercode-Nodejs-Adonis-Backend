"use strict";

var sapa = require("./lib/sapa");

var convert = require("./lib/convert");

var checkScore = require("./lib/checkScore");

var filterData = require("./lib/filterData");

var args = process.argv.slice(2);
console.log("🚀 ~ file: index.js ~ line 8 ~ args", args);
var command = args[0];

switch (command) {
  case "sapa":
    var name = args[1];
    console.log(sapa(name));
    break;

  case "convert":
    var nama = args[1];
    var domisili = args[2];
    var umur = args[3];
    console.log(convert(nama, domisili, umur));
    break;

  case "checkScore":
    var str = args[1];
    console.log(checkScore(str));
    break;

  case "filterData":
    var filter = args[1];
    console.log(filterData(filter));
    break;

  default:
    console.log("sintaks error");
    break;
}