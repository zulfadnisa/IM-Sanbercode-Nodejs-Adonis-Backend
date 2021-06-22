class OlahString {
  static palindrome(kata) {
    var reverse = "";
    for (let i = kata.length - 1; i >= 0; i--) {
      reverse += kata[i];
    }
    if (kata.toLowerCase() === reverse.toLowerCase()) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  }
  static ubahKapital(kata) {
    return console.log(kata.charAt(0).toUpperCase() + kata.slice(1));
  }
}
OlahString.palindrome("katak");

OlahString.palindrome("sanbers");

OlahString.ubahKapital("asep");

OlahString.ubahKapital("abduh");

var data = {
  name: "Bondra",
  nilai: 70,
  kelas: "Adonis",
  isLogin: true,
};

const updateData = (update) => {
  const { name, nilai, kelas, isLogin } = data;
  const copyData = {
    name,
    nilai,
    kelas,
    isLogin,
  };
  for (let key in copyData) {
    for (let prop in update)
      if (prop == key) {
        copyData[key] = update[prop];
      }
  }
  return copyData;
};

// TEST CASES
console.log(updateData({ isLogin: false }));
console.log(updateData({ nilai: 65, kelas: "Laravel" }));

async function editData(update) {
  fspromise
    .readFile("data.json")

    .then((dataJson) => {
      let data = JSON.parse(dataJson);

      let updated = { ...data, ...update };

      return fspromise.writeFile("data.json", JSON.stringify(updated));
    })

    .then(() => console.log("updated"))

    .catch((err) => console.log(err));
}
