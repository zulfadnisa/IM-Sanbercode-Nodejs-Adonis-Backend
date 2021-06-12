//1
function range(startNum, finishNum) {
  arrRange = [];
  if (startNum > finishNum) {
    var temp = startNum;
    var isLarger = true;
    startNum = finishNum;
    finishNum = temp;
  }
  for (let i = startNum; i <= finishNum; i++) {
    if (!isLarger) {
      arrRange.push(i);
    } else {
      arrRange.unshift(i);
    }
  }
  return arrRange;
}
console.log(range(1, 10));
console.log(range(54, 50));
console.log(range(1));
console.log(range());

//2
function rangeWithStep(startNum, finishNum, step = 1) {
  arrRange = [];
  if (startNum > finishNum) {
    var temp = startNum;
    var isLarger = true;
    startNum = finishNum;
    finishNum = temp;
  }
  var i = startNum;
  while (i <= finishNum) {
    if (!isLarger) {
      arrRange.push(i);
    } else {
      arrRange.unshift(i);
    }
    if (step !== 0) {
      i += step;
    } else {
      i++;
    }
  }
  return arrRange;
}
console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(5, 2, 1));

//3
const sum = (start, finish, step) => {
  if (finish === undefined) {
    finish = start;
  }
  return rangeWithStep(start, finish, step).reduce((a, b) => a + b);
};
console.log(sum(1, 10, 0));
console.log(sum(5, 50, 2));
console.log(sum(1));

//4
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
function dataHandling(arr) {
  arr.forEach((el) => {
    console.log(`\nNomor ID: ${el[0]}`);
    console.log(`Nama Lengkap: ${el[1]}`);
    console.log(`TTL: ${el[2]} ${el[3]}`);
    console.log(`Hobi: ${el[4]}`);
  });
}
dataHandling(input);

//5
let balikKata = (...kata) => {
  var result = "";
  for (let j = kata.length - 1; j >= 0; j--) {
    var reverse = "";
    var el = kata[j];
    for (let i = el.length - 1; i >= 0; i--) {
      reverse += el[i];
    }
    result = result + reverse + " ";
  }
  return result;
};
// let balikKata = (kata) => {
//     var reverse = "";
//       for (let i = kata.length - 1; i >= 0; i--) {
//         if (kata[i]!==','){
//           reverse += kata[i];
//         }else{
//             reverse = reverse + ' '
//         }
//       }
//       return reverse}
console.log(balikKata("SanberCode"));
console.log(balikKata("racecar"));
console.log(balikKata("kasur", "rusak"));
console.log(balikKata("haji", "ijah"));
console.log(balikKata("I", "am", "Sanbers"));
