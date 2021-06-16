import Kelas from "./kelas";
import Student from "./student";

class Bootcamp {
  constructor(name) {
    this._name = name;
    this._classes = [];
    this._graduated = {}
  }
  get name() {
    return this._name;
  }
  set name(input) {
    this._name = input;
  }
  get classes() {
    return this._classes;
  }
  get graduated() {
    return this._graduated;
  }
  createClass(kelas, level, instructor) {
    const newClass = new Kelas(kelas, level, instructor);
    this._classes.push(newClass);
  }
  register(kelas, newStudent) {
    this._classes.find((el) => {
      if (el._name === kelas) {
        var newStud = new Student(newStudent);
        el.createStudent(newStud);
      }
    });
  }
  runBatch(kelas, week) {
    this._classes.find((el) => {
      if (el._name == kelas) {
        el._students.map((student,index) => {
          for (let i = 0; i < week; i++) {
            var score =  Math.floor(Math.random() * (10 - 5 + 1) ) + 5;
            student.createScore(score*10)
          }
          el.updateStudent(index,student)
        });
        this._graduated[`graduated from ${kelas}`] = el.graduate(el._students)
      }
    });
  }
}

export default Bootcamp;
