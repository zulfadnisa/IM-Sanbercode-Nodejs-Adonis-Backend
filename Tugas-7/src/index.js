import Bootcamp from './lib/bootcamp'
import Student from './lib/student'

// var args = process.argv.slice(2);
// console.log("🚀 ~ file: index.js ~ line 8 ~ args", args);
const sanber = new Bootcamp("sanbercode")

console.log('-----RELEASE 0 ---------')
sanber.createClass("Laravel", "beginner", "abduh")
sanber.createClass("React", "beginner", "abdul")
console.log(sanber.classes)

let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
names.map((nama, index) => {
  let kelas = sanber.classes[index % 2].name
  sanber.register(kelas, nama)
})

console.log('-----RELEASE 1---------')
sanber.classes.forEach(kelas => {
  console.log(kelas)
  sanber.runBatch(kelas.name,4)
});
console.log('-----RELEASE 2 & 3 ---------')
for(let grad in sanber.graduated){
    console.log(grad)
    console.log(sanber.graduated[grad])
}
