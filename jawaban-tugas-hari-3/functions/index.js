// lib
var teriak = require('./lib/teriak')
var kalikan = require('./lib/kalikan')
var kenalan = require('./lib/kenalan')

// arguments node
var args = process.argv.slice(2)
console.log("🚀 ~ file: index.js ~ line 8 ~ args", args)
var command = args[0]

switch (command) {
  case "teriak":
    console.log(teriak())
    break;
  case "kalikan":
    var num1 = args[1]
    var num2 = args[2]
    console.log(kalikan(num1, num2))
    break;
  case "kenalan":
    var name = args[1]
    var age = args[2]
    var address = args[3]
    var hobby = args[4]
    console.log(kenalan(name, age, address, hobby))
    break;
  default:
    console.log("sintaks error")
    break;
}


