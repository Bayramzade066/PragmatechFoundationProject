// 1ci sual --let ile const arasindaki ferq

let arr = [ 1,2,3 ];

arr += ',4';

console.log(typeof arr, arr);

// -------------------------

const arr = [ 1,2,3 ];

arr += ',4';

console.log(arr);

// 2ci sual 

let array = [ 1,5,9,'new york',true,'Javascript',8,['false','exit'] ];
// ------------
console.log( array[3] );
// ------------
console.log(array[array.length -1]);
console.log(array.slice(-1) );
// consolun en sonun gostermek ucun hansi koddan istifade olundugu qeyd olunacaq ex:console.log(array.length -1);

// ------------
console.log( array.length );
// ------------
console.log( array[7][0] );
// -------------
array.push('London');
console.log( array );
// ------------------
array.pop();
console.log( array );
// ---------------------
array.splice(2,1, 'Moscow','Ankara');
console.log(array);
// ---------------------
array.splice(2,0, 'Bmw','Audi');
array.splice(4,1);
console.log(array);
// --------------
let array1 = [36,5,89,7,2,1]
array1.sort();

// biz bunu bele sorting etdikde qarisiqliq yaranir cunki ilk reqemlere gore siralayir.
array1.sort(function(x,y){
    return x-y
});
console.log(array1);
// bele olduqda bir cixma isi gorur ve - cavab alirsa digerini boyuk bilerek onnan evvele yerlesdirir bunun eksin ederekde boyukden balacaya dogru siraliya bilerik
// sual-3 
let str = "Alma,Armud,Heyva,Nar,Mandarin"
console.log(str.slice(5,10));
console.log(str.slice(-12));

// sual-4
function randomeded (x,y){
    return Math.floor(Math.random()* (x-y) + y)
};
console.log(randomeded(50,200));
// ---------------------
function square(x){
    return x*x
};
// -------------
function cube(x){
    return x*x*x
};
// ---------------
let b = square(7);
console.log(b);
// ---------------
let a = cube(5);
console.log(a);

