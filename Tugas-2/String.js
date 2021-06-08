// 1
console.log('--------Tugas 1------')
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';

words = [word,second,third,fourth, fifth, sixth,seventh]
console.log(words.join(' '))

//2
console.log('--------Tugas 2------')
var sentence = "I am going to be React Native Developer"; 

var exampleFirstWord = sentence[0] ; 
var secondWord = sentence[2] + sentence[3]  ; 
var thirdWord= sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; 
var fourthWord= sentence[11] + sentence[12]; // lakukan sendiri 
var fifthWord=sentence[14] + sentence[15];; // lakukan sendiri 
var sixthWord=sentence.substr(17,5); // lakukan sendiri 
var seventhWord=sentence.substr(23,6); // lakukan sendiri 
var eighthWord=sentence.substr(30,9); // lakukan sendiri 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

//3
console.log('--------Tugas 3------')
var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2=sentence2.substring(4, 14); // do your own! 
var thirdWord2=sentence2.substring(15, 17); // do your own! 
var fourthWord2=sentence2.substring(18, 20); // do your own! 
var fifthWord2=sentence2.substring(21, 25); // do your own! 

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

//4
console.log('--------Tugas 4------')
var sentence3 = 'wow JavaScript is so cool'; 

var firstWordLength = exampleFirstWord2.length  
var secondWord3=secondWord2.length; // do your own! 
var thirdWord3=thirdWord2.length; // do your own! 
var fourthWord3=fourthWord2.length; // do your own! 
var fifthWord3=fifthWord2.length; // do your own! 
// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord2 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord2 + ', with length: ' +secondWord3); 
console.log('Third Word: ' + thirdWord2 + ', with length: ' +thirdWord3); 
console.log('Fourth Word: ' + fourthWord2 + ', with length: ' +fourthWord3); 
console.log('Fifth Word: ' + fifthWord2 + ', with length: ' +fifthWord3); 