function graduate(arr) {
  var className = [];
  var obj = {};
  arr.forEach((el) => {
    var grade;
    if (el.score > 85) {
      grade = "mastered";
    } else if (el.score >= 60 && el.score <= 85) {
      grade = "completed";
    } else {
      grade = "participated";
    }
    objgraduate = {
      name: el.name,
      score: el.score,
      grade: grade,
    };
    if (className.includes(el.class)) {
      for (let prop in obj) {
        if (prop === el.class) {
          obj[el.class].push(objgraduate);
        }
      }
    } else {
      className.push(el.class);
      obj[el.class] = [];
      obj[el.class].push(objgraduate);
    }
  });
  return obj;
}

var arr = [
  { name: "Ahmad", score: 80, class: "Laravel" },
  { name: "Regi", score: 86, class: "Vuejs" },
  { name: "Robert", score: 59, class: "Laravel" },
  { name: "Bondra", score: 81, class: "Reactjs" },
];

console.log(graduate(arr));

function hitungVokal(str) {
  var jumlah = 0;
  vocal = ["a", "i", "u", "e", "o"];
  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < 5; i++) {
      if (str[j].toLowerCase().includes(vocal[i])) {
        jumlah += 1;
      }
    }
  }
  return jumlah;
}
console.log(hitungVokal("Adonis"));

console.log(hitungVokal("Error"));

console.log(hitungVokal("Eureka"));

console.log(hitungVokal("Rsch"));

function kelompokAngka(arr) {
  group = [[], [], []];
  arr.forEach((el) => {
    if (el % 3 === 0) {
      group[2].push(el);
    } else if (el % 2 === 0) {
      group[1].push(el);
    } else {
      group[0].push(el);
    }
  });
  return group;
}

console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7]));
console.log(kelompokAngka([13, 27, 11, 15]));
console.log(kelompokAngka([]));

function tandaiA(str) {
  var newStr = "";
  for (let prop of str) {
    if (prop === "a") {
      newStr += "x";
    } else {
      newStr += prop;
    }
  }
  return newStr;
}

console.log(tandaiA("abrakadabra"));
console.log(tandaiA("garuda"));
console.log(tandaiA("kucing"));
