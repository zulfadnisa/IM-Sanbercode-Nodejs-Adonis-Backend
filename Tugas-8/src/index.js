import register from "./lib/register";
import readData from "./lib/readData";
import login from "./lib/login";
import addSiswa from './lib/addSiswa'

var args = process.argv.slice(2);
console.log("input", args);
const command = args[0];

switch (command) {
  case "register":
    register(args[1], args[2], args[3]);
    break;
  case "readData":
    readData();
    break;
  case "login":
    login(args[1], args[2]);
    break;
  case "addSiswa":
    addSiswa(args[1], args[2]);
    break;
  default:
    console.log("sintaks error");
    break;
}
