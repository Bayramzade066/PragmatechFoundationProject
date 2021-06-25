// 1ci-sual var let const arasindaki ferqler

// var ile let arasindaki ferq

var a = 10;

var a = 20;

console.log(a);

// -------------

let b = 20;
// let b = 30; yanlis


console.log(b);

// let ile const arasindaki ferqler

let c = 30;
c = 40;

console.log(c);

// ---------------

const d = 100;

d = 110;

// const d = 150;

console.log(d);

// 2ci-sual javascript consolunda istifade olunan kodlar

console.log();


console.warn("Bu Tehlukelidir !");


console.error("bu Sehife islemir.");


console.table([{'ad':'Mehemmed','soyad':'Bayramzade'}])


console.group('grup adi')
    console.log('grupun 1cisi');
    console.log('grupun 2cisi');
    console.warn('grupun 3cusu tehlukeli tipi var');
    console.groupEnd('grup adi');


console.time('kod yazma muddetim')
// kodlarinizi bu qisme yazirsiniz
console.timeEnd('kod yazma muddetim')


console.clear();

// 3cu-sual data tipleri

// primitive novleri

var a = true;
// var b = false;
// boolean

console.log(typeof a);

var c = null;
// null

var a;

console.log(a);
// undifined


// reference data novleri

var numbers = [1,2,3];
console.log(numbers);
console.log(numbers[0]);


var person = {
    name:"Mehemmed"
}
console.log(person);
console.log(typeof person);


var date = new Date();
console.log(date);



var salam = function(){
    console.log("Salam");
}
console.log(salam);
// 4-cu sual logical operatorlar

// 1ci or veya
alert( true || true );


let saat = 9;

if (saat < 10 || saat > 18) {
  alert( 'Ofis baglidir' );
}

// 2ci and ve

alert( true && true );   // true
alert( false && true );  // false

let saat = 12;
let deqiqe = 30;

if (saat == 12 && deqiqe == 30) {
  alert( 'Saat 12:30' );
}

// ! deyil 

alert( !true ); // false

alert( !!"Boş olmayan karakter dizisi" ); // true




// 5ci-sual arithmetic operatorlar 

let value;

const value1 = 10;
const value2 = 4;

value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;

value = value1 % value2;
console.log(value);

value = Math.PI;
value = Math.E;

value = Math.round(3.6);


console.log(value);














