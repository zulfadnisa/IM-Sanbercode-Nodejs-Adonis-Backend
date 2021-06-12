
var loopLib = require('./lib/looplib')
var whileLoop = loopLib.whileLoop
var forLoop = loopLib.forLoop
var persegiPanjang = loopLib.persegiPanjang
var tangga = loopLib.tangga
var catur = loopLib.catur

var args = process.argv.slice(2)
var command = args[0]

switch (command) {
  case "while":
    whileLoop()
    break;
  case "for":
    forLoop();
    break;
  case "persegiPanjang":
    var pjg = args[1]
    var lbr = args[2]
    persegiPanjang(pjg, lbr);
    break;
  case "tangga":
    var sisi = args[1]
    tangga(sisi)
    break;
  case "catur":
    var sisi = args[1]
    catur(sisi)
    break;
  default:
    break;
}