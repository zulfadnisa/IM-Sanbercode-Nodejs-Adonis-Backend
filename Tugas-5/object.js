//1
console.log('---1-----')
function arrayToObject(arr) {
  obj = {};
  var now = new Date();
  var thisYear = now.getFullYear();
  arr.forEach((el) => {
    let name = [el[0], el[1]];
    var age = thisYear - el[3];
    if (el[3] > thisYear || el[3] === undefined) {
      age = "Invalid Birth Year";
    }
    obj[name.join(" ")] = {
      firstName: el[0],
      lastName: el[1],
      gender: el[2],
      age: age,
    };
  });
  for (let prop in obj) {
    console.log(`${prop} : `);
    console.log(obj[prop]);
  }
}
var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
arrayToObject(people);
arrayToObject(people2);
arrayToObject([]);

//2
console.log('---2-----')
list = {
  "Sepatu Stacattu": 1500000,
  "Baju Zoro": 500000,
  "Baju H&N": 250000,
  "Sweater Uniklooh": 175000,
  "Casing Handphone": 50000,
};
function shoppingTime(memberId, money) {
  var listPurchased = [];
  var changeMoney = money;
  if (memberId !== "" && memberId !== undefined) {
    if (money >= 50000) {
      for (let prop in list) {
        if (changeMoney >= list[prop]) {
          changeMoney = changeMoney - list[prop];
          listPurchased.push(prop);
        }
      }
      return {
        memberId: memberId,
        money: money,
        listPurchased: listPurchased,
        changeMoney: changeMoney,
      };
    } else {
      return "Mohon maaf, uang tidak cukup";
    }
  } else {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
}
console.log(shoppingTime("1820RzKrnWn08", 2475000));
console.log(shoppingTime("82Ku8Ma742", 170000));
console.log(shoppingTime("", 2475000));
console.log(shoppingTime("234JdhweRxa53", 15000));
console.log(shoppingTime());

//3
console.log('---3-----')
function naikAngkot(arrPenumpang) {
  var arrOfObj = [];
  rute = ["A", "B", "C", "D", "E", "F"];
  arrPenumpang.forEach((el) => {
    var harga = 0;
    var isRun = false;
    for (let i = 0; i < rute.length; i++) {
      if (rute[i] === el[1]) {
        isRun = true;
      } else if (rute[i] === el[2]) {
        isRun = false;
      }
      if (isRun) {
        harga = harga + 2000;
      }
    }
    (obj = {
      penumpang: el[0],
      naikDari: el[1],
      tujuan: el[2],
      bayar: harga,
    }),
      arrOfObj.push(obj);
  });
  return arrOfObj;
}

console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
console.log(naikAngkot([]));

//4
console.log('---4-----')
function nilaiTertinggi(siswa) {
  var className = [];
  var obj = {};
  siswa.forEach((el) => {
    if (className.includes(el.class)) {
      for (let prop in obj) {
        if (parseInt(el.score) > parseInt(obj[prop].score)) {
          obj[el.class] = { name: el.name, score: el.score };
        }
      }
    } else {
      className.push(el.class);
      obj[el.class] = { name: el.name, score: el.score };
    }
  });
  return obj;
}

console.log(
  nilaiTertinggi([
    {
      name: "Asep",
      score: 90,
      class: "adonis",
    },
    {
      name: "Ahmad",
      score: 85,
      class: "vuejs",
    },
    {
      name: "Regi",
      score: 74,
      class: "adonis",
    },
    {
      name: "Afrida",
      score: 78,
      class: "reactjs",
    },
  ])
);

console.log(
    nilaiTertinggi([
    {
      name: "Putri",
      score: 76,
      class: "laravel",
    },
    {
      name: "Iqbal",
      score: 92,
      class: "adonis",
    },
    {
      name: "Tyar",
      score: 71,
      class: "laravel",
    },
    {
      name: "Hilmy",
      score: 80,
      class: "vuejs",
    },
    {
        name: "Bondra",
        score: 100,
        class: "adonis",
      },
  ])
);
