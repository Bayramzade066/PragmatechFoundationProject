// const arr = ["java","Python","javascript"];

// let index = 0

// while(index < languages.length){
//     console.log(languages[index]);
//     index++;
// };

// for(let index = 0;index < languages.length +1;index++){
//     console.log(languages[index])
// }

// arr.forEach(function(lang){
//     console.log(lang)
// };

// const user = {
//     name: "Mehemmed",
//     age: 20
// }

// for(let key in user){
//     console.log(key,user[key])
// };

// let saat = new Date();
// console.log(saat)
// if (saat <  || saat > 1) {
//   alert( 'Ofis baglidir' );
// }

// let array = [25, 95, 'test', 'php', true, {}, 129, 'javascript'];


// // Return catdigi an islem dayanir ve ondan sonra bir emeliyyat bas vermir
// function type(arr, a) {
//     let arr3 = [];
//     for (i = 0; i < arr.length; i++) {
//         if (a == typeof arr[i]) {
//             arr3.push(arr[i]);
//         }
//     }
//     return arr3;
// };

// let number = type(array, "number");
// console.log(number + " - bunun tipi numberdi");
// let string = type(array,"string");
// console.log(string + " - bunun tipi string-dir");
// let boolean = type(array,'boolean');
// console.log(boolean + " - bunun tipi hec ozude bilmir nedi")

// let obj = {a:1, b:2, c:3};

// for(let i in obj){
//     console.log(i);
// };

// const array = [1,5,7,"element"];

// for(let v of array){
//     console.log(v);
// };

// let arr = [25,5,80,11,32,7,9,90]

// for(i = 0;i<arr.length;i++){
//     if(arr[i] = 90){
//         console.log(arr[i]);
//     }
// };

// battle oyunu gemi partlatma


// let location1 = Math.floor(Math.random() * 7);
// let location2 = location1 + 1;
// let location3 = location2 + 1;

// let guess; // texmin
// let guesses = 0; // texminlerin toplami
// let hits = 0; //hedefe olan atislar
// let isSunk = false; // Oyunun baslangicinda gemi batmiyib
// while (isSunk == false) { // Ne geder ki isSunk == false kodu tekrarla
//     guess = prompt('Ates etmek ucun 0 ile 10 arasinda bir reqem daxil et: ');
//     if (guess < 0 || guess > 10) {
//         alert('Ay insan deyilmedi 0 ile 10 arasi reqem daxil et.');
//     } else {
//         guesses++; // guesses = guesses + 1
//         // Eger bizim texminimiz yuxarda teyin etdiyimiz geminin location beraberdirse bu sert isleyecek
//         if (guess == location1 || guess == location2 || guess == location3) {
//             hits++; //Hedefe deyen atislarin sayi
//             // Geminin uzunlugu 3 oludugu ucun bunu 5 setrde teyin etdik ve biz 3 defe hedefe vursaq gemi batir
//             if (hits == 3) {
//                 // isSunk true olaraq deyisende bizim acdigimiz while avtomatik olaraq dayanir ve oyun bitir
//                 isSunk = true;
//                 alert('Halaldir bize usaqlar !!!');
//                 let resultText = 'Texminlerin sayi ' + guesses + ' degig atislarin sayi ' + hits / guesses;
//                 alert(resultText);
//             }
//         } else {
//             alert('Sansivi bir daha dene');
//         }
//     }
// }
// let statearr = [];
// for (var i = 0; i < examStateArr.length; i++) {
//     let examstate = document.getElementById(examStateArr[i]);
// }s


// let main = document.querySelector('#main');

// let children = document.querySelector('#main').children;

// let ustqonsu = children[1].previousElementSibling;
// let altqonsu = children[1].nextElementSibling;
// let ilkovlad = document.querySelector('#main').firstElementChild;
// let sonovlad = document.querySelector('#main').lastElementChild;


// let div = document.createElement('div');
// document.querySelector('#main').appendChild(div);
// div.classList.add('murad4');
// div.innerText = 'yaxside day el cek';
// div.setAttribute('style', 'padding:40px');
// for(i = 0;i < children.length;i++){
//     children[i].innerText= 'hedene he';
//     children[i].setAttribute('style','border: 1px solid black');
// }

// let str ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vel"
// let count=0
// function strfunction (x){
//     for(let i=0;i<str.length;i++){
//       if(x==str[i]){
//           count+=1;
//       }
//     }
//     console.log(count);

// }
// strfunction("a");

// function yuvarlaqlasdir(a){
//     a_str = a.toString();
//     b = ''
//     for(i=0;i<a_str.length; i++){
//         if(a_str[i] == '.1' || a_str[i] == '.2' || a_str[i] == '.3' || a_str[i] == '.4'){
//             break
//         }else{
//             a_str[i] == 
//         }
//         b = b.concat(a_str[i])
//         b = parseInt(b)
//     }
// }
// let arr = [];
// for(i =10; i<= 99; i++){
//     console.log("" + i)
// }
let text = "";
const fruits = ["apple","orange","cherry","banana"];
fruits.forEach(arrfunc);

document.querySelector('#demo').innerHTML = text;


function arrfunc(x,y){
    text += y + ":" + x + "<br>";
    
}
