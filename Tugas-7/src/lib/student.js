import Kelas from './kelas'
class Student {
    constructor(name){
        this._name = name
        this._scores = []
        this._finalScore = 0
    }
    get name(){
        return this._name
    }
    get finalScore(){
        return this._finalScore
    }
    set name(input){
        this._name = input
    }
    createScore(score){
        this._scores.push(score)
        const sum = this._scores.reduce((a, b) => a + b, 0);
        const avg = (sum / this._scores.length) || 0;
        this._finalScore = avg
    }
    
}
export default Student