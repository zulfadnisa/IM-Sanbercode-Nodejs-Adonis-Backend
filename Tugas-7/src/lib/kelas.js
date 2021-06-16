import Student from './student'

class Kelas {
    constructor(nama,level, instructor){
        this._name = nama
        this._students = []
        this._level = level
        this._instructor = instructor 
        this.mastered = []
        this.completed = []
        this.participant = []
    }
    get name(){
        return this._name
    }
    get level(){
        return this._level
    }
    get instructor(){
        return this._instructor
    }
    set name(input){
        this._name = input
    }
    set level(input){
        this._level = input
    }
    set instructor(input){
        this._instructor = input
    }
    createStudent(student){
        this._students.push(student)
    }
    updateStudent(index,student){
        this._students[index] = student 
    }
    graduate(students){
        students.map((el)=>{
            if(el._finalScore>85){
                this.mastered.push(el)
            }else if(el._finalScore<=60 &&el._finalScore>=85){
                this.completed.push(el)
            }else{
                this.participant.push(el)
            }
        })
        return {
            participant: this.participant,
            completed: this.completed,
            mastered: this.mastered
        }
    }
}

module.exports = Kelas