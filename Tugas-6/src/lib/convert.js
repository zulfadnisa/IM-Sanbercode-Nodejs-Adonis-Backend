const convert = (...biodata)=>{
    const [nama,domisili,umur] = biodata
    var obj = {
        nama,
        domisili,
        umur
    }
    // console.log(obj)
    return obj
}
// convert('Bodan','Medan',25)

module.exports = convert