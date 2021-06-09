console.log('CONDITIONAL')
//IF ELSE
console.log("--------IF ELSE------");
const prompt = require("prompt-sync")();

//input
var name = prompt("Siapa namamu?");
if (name.trim() === "") {
  console.log("Nama harus diisi!");
  var name = prompt("Siapa namamu?");
}
var peran = prompt(
  `Halo ${name.trim()}, Pilih Peranmu untuk memulai game! (penyihir, guard, dan werewolf)`
);
if (peran.trim() === "") {
  console.log("Peran harus diisi!");
  var peran = prompt(
    `Halo ${name.trim()}, Pilih Peranmu untuk memulai game! (penyihir, guard, dan werewolf)`
  );
} else if (
  peran.trim().toLowerCase() !== "penyihir" &&
  peran.trim().toLowerCase() !== "guard" &&
  peran.trim().toLowerCase() !== "werewolf"
) {
  console.log("Salah input peran!");
  var peran = prompt(
    `Halo ${name}, Pilih Peranmu untuk memulai game! (penyihir, guard, dan werewolf)`
  );
}
//output setelah input nama dan peran
console.log(`\nSelamat datang di Dunia Werewolf, ${name.trim()}`);
if (peran.trim().toLowerCase() === "penyihir") {
  console.log(
    `Halo Penyihir ${name.trim()}, kamu dapat melihat siapa yang menjadi werewolf!`
  );
} else if (peran.trim().toLowerCase() === "guard") {
  console.log(
    `Halo Guard ${name.trim()}, kamu akan membantu melindungi temanmu dari serangan werewolf.`
  );
} else if (peran.trim().toLowerCase() === "werewolf") {
  console.log(
    `Halo Werewolf ${name.trim()}, Kamu akan memakan mangsa setiap malam!`
  );
}

// Switch Case
console.log("--------SWITCH CASE------");
var hari = 21;
var bulan = 1;
var tahun = 1945;
switch (bulan) {
  case 1: {
    bulan = "Januari";
    break;
  }
  case 2: {
    bulan = "Februari";
    break;
  }
  case 3: {
    bulan = "Maret";
    break;
  }
  case 4: {
    bulan = "April";
    break;
  }
  case 5: {
    bulan = "Mei";
    break;
  }
  case 6: {
    bulan = "Juni";
    break;
  }
  case 7: {
    bulan = "Juli";
    break;
  }
  case 8: {
    bulan = "Agustus";
    break;
  }
  case 9: {
    bulan = "September";
    break;
  }
  case 10: {
    bulan = "Oktober";
    break;
  }
  case 11: {
    bulan = "November";
    break;
  }
  case 12: {
    bulan = "Desember";
    break;
  }
  default: {
    ("salah input");
  }
}
if (hari > 0 && hari <= 31) {
  if (tahun >= 1900 && tahun <= 2200) {
    console.log(hari + " " + bulan + " " + tahun);
  } else {
    console.log("Tahun harus dari 1900-2200");
  }
} else {
  console.log("salah input hari");
}
