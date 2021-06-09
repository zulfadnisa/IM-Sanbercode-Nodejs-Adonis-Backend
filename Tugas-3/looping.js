console.log('----1-----')
console.log("LOOPING PERTAMA");
var i = 1;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(`${i} - I love coding`);
  }
  i = i + 1;
}
console.log("LOOPING KEDUA");
var i = 20;
while (i > 0) {
  if (i % 2 === 0) {
    console.log(`${i} - I will become a mobile developer`);
  }
  i = i - 1;
}

console.log('----2-----')
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} - Berkualitas`);
  } else {
    if (i % 3 == 0) {
      console.log(`${i} - I love Coding`);
    } else {
      console.log(`${i} - Santai`);
    }
  }
}

console.log('----3-----')
for (let i = 1; i <= 4; i++) {
  var panjang = "";
  for (let j = 1; j <= 8; j++) {
    panjang = panjang + "#";
  }
  console.log(panjang);
}

console.log('----4-----')
tangga = "";
for (let i = 1; i <= 7; i++) {
  tangga = tangga + "#";
  console.log(tangga);
}

console.log('----5-----')
for (let i = 1; i <= 8; i++) {
  var panjang = "";
  for (let j = 1; j <= 8; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        panjang = panjang + " ";
      } else {
        panjang = panjang + "#";
      }
    } else {
      if (j % 2 == 0) {
        panjang = panjang + "#";
      } else {
        panjang = panjang + " ";
      }
    }
  }
  console.log(panjang);
}
