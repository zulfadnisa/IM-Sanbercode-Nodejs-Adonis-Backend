console.log("----1-----");
const teriak = () => {
  return "Halo Sanbers!";
};
console.log(teriak());

console.log("----2-----");
function kalikan(num1, num2) {
  return num1 * num2;
}
var hasilKali = kalikan(4, 12);
console.log(hasilKali); // 48

console.log("----3-----");
function introduce(name, age, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, dan saya punya hobby yaitu ${hobby}!`;
}
var perkenalan = introduce("Agus", 30, "Gaming");
console.log(perkenalan); // Menampilkan "Nama saya Agus, umur saya 30 tahun, dan saya punya hobby yaitu Gaming!"
