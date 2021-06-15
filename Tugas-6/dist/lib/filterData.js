"use strict";

var filterData = function filterData(str) {
  var data = [{
    name: "Ahmad",
    "class": "adonis"
  }, {
    name: "Regi",
    "class": "laravel"
  }, {
    name: "Bondra",
    "class": "adonis"
  }, {
    name: "Iqbal",
    "class": "vuejs"
  }, {
    name: "Putri",
    "class": "Laravel"
  }];
  var filtered = data.filter(function (el) {
    if (el["class"] === str) {
      return el;
    }
  });
  return filtered; // console.log(filtered)
}; // filterData('adonis')


module.exports = filterData;