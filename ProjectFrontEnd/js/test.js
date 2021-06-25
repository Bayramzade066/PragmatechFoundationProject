  
// Incerement
let x = 5;
console.log(x);
x = x + 1; // x+=1 eyni isi gorur
console.log(x);
x += 1;
console.log(x);
x++; // x+=1 eyni isi gorur
console.log(x);
console.log(x++); // birinc x deyerini alir sonra ustune bir artirir
console.log(x + 1); //  x ustune bir gelir sonra artirir

// Function
//ES5
/*
var func = function() {
    // code
}
function myFunc() {
    // code
}
*/
//ES6
//Declare function with parameters
const sum = (a, b) => {
    return a + b;
}

// Call and assign to variable result
let result = sum(5, 6);
console.log(result);
let result1 = sum(150, 65);
console.log(result1);

// Objects

const human = {
    eyes: 2,
    hands: 2,
    legs: 2,
    hairColor: 'black',
    hello: function() {
        return 'Hello World';
    }
}

console.log(typeof human);
console.log(human);
console.log(human.hands);
human.name = 'Yusif';
console.log(human);

// Strings methods

let text = 'Are your ready man ready?';
let test = '25';

console.log(text.length); // datanin uzunlugunu gosterir
console.log(text.indexOf('ready')); // ilk qabaginda harda cixirsa o herfin necenci oldugunu gosterir
console.log(text.lastIndexOf('ready')); // Axirdan basliyir ilk qabaginda cixan yerde olan herfin necenci oldugu gosterir
console.log(typeof test, test, test.length);
test = Number(test);
console.log(typeof test, test, test.length); //Reqemlerin uzunlugu olmadigi ucun teyin olunmur

// Number

let number = 5;
console.log(typeof number, number);
number = String(number);
console.log(typeof number, number);

// Arrays

let arr = [5, 9, 'ad', 23, [23, 'elave deyer'], 'Leyla'];

//Access to array elements
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[5]);
console.log(arr[4][1]); // Array icinde elave arrayi elementlerine access

//Methods
console.log(arr.length); //uzunlug
arr.push('Alma'); //sonuna elave etme
console.log(arr);
arr.pop() // sonuncu elementi silir
console.log(arr);
arr.shift(); // Birinci element silir
console.log(arr);
arr.unshift('Qarpiz'); // Evvele yeni element elave edir
console.log(arr);
arr[0] = 'Yemis'; // Birinci elementi teyin olunan data ile evez edir
arr.unshift('Qarpiz');
console.log(arr);

let arr1 = ['yemis', 'alma', 'gilas', 'heyva'];
console.log(arr1);
arr1.sort(); //  Elifba sirasi ile elementler ilk herflerine gore siralandi
console.log(arr1);

let join = arr1.join('-'); // Teyin olunan simvol ile elementleri birlesdirir
console.log(join);

// Math

let random = Math.random() // 0 ile 1 arasinda
let floor = Math.floor() // Deyerleri yuvarliyir
let rand = Math.floor(Math.random() * 10) // 0 ile 9
console.log(rand);


// Comparison
// = assignment, == equal, === equal with types

console.log(Boolean(5 == 5)); //number == number
console.log(Boolean(5 == '5')); // Deyerler eynidirse, data tipleri nezere alinmir ve tru qaytarir
console.log(Boolean(5 === 5)); // Deyerleri ve tipleri muqaise edir eynidirse true
console.log(Boolean(5 === '5')); //  Deyerler eyni olsada data tipleri ferqlidir ona gore false