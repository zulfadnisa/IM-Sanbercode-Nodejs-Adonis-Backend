"use strict";

var convert = function convert() {
  for (var _len = arguments.length, biodata = new Array(_len), _key = 0; _key < _len; _key++) {
    biodata[_key] = arguments[_key];
  }

  var nama = biodata[0],
      domisili = biodata[1],
      umur = biodata[2];
  obj = {
    nama: nama,
    domisili: domisili,
    umur: umur
  }; // console.log(obj)

  return obj;
}; // convert('Bodan','Medan',25)


module.exports = convert;