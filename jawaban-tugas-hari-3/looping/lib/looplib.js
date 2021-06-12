function whileLoop() {
  var i = 2
  console.log("LOOPING PERTAMA")
  while (i <= 20) {
    output = i + " - I Love Coding"
    console.log(output)
    i += 2
  }
  var j = 20
  console.log("LOOPING KEDUA")
  while (j >= 2) {
    output = j + " - I will become a mobile developer"
    console.log(output)
    j -= 2
  }
}

function forLoop() {
  for (var i = 1; i <= 20; i++) {
    var output = ""
    if (i % 2 == 1) {
      if (i % 3 == 0) {
        output = i + " - I Love Coding"
      } else {
        output = i + " - Santai"
      }
    } else {
      output = i + " - Berkualitas"
    }
    console.log(output)
  }
}

function persegiPanjang(pjg, lbr) {
  for (var i = 0; i < lbr; i++) {
    var baris = ""
    for (var j = 0; j < pjg; j++) {
      baris += "#"
    }
    console.log(baris)
  }
}

function tangga(sisi) {
  for (var i = 0; i < sisi; i++) {
    var baris = ""
    for (var j = 0; j < i + 1; j++) {
      baris += "#"
    }
    console.log(baris)
  }
}

function catur(sisi) {
  for (var i = 0; i < sisi; i++) {
    var baris = ""
    for (var j = 0; j < sisi; j++) {
      // kalau baris nya genap
      if (i % 2 == 0) {
        // kalau kolom genap
        if (j % 2 == 0) {
          baris += " "
        } else {
          baris += "#"
        }

      } else { // kalau barisnya ganjil
        if (j % 2 == 0) {
          baris += "#"
        } else {
          baris += " "
        }
      }
    }
    console.log(baris)
  }
}

module.exports = {
  whileLoop: whileLoop,
  forLoop: forLoop,
  persegiPanjang: persegiPanjang,
  tangga: tangga,
  catur: catur
}