// import bootcamp 
import Bootcamp from './lib/bootcamp'

const args = process.argv.slice(2)
const command = args[0]
let input = args[1]

switch (command) {
  case "register":
    Bootcamp.register(input)
    break;
  case "login":
    Bootcamp.login(input)
    break;
  case "addSiswa":
    Bootcamp.addSiswa(input)
    break;

  default:
    break;
}