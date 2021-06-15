const checkScore = (str)=>{
    const arr = str.split(',')
    obj = {}
    arr.forEach((el)=>{
        const arrObj = el.split(':')
        const [key,value] = arrObj;
        obj[key] = value
    })
    // console.log(obj)
    return obj
}
// checkScore('name:Ahmad,class:Adonis,score:89')
// node dist checkScore name:Ahmad,class:Adonis,score:89

// Output

// { "name": "Ahmad", "class": "Adonis", "score": 89 }
module.exports = checkScore