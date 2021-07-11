// 1ci-sual arrayin daxilindeki elementleri kicikden boyuke dogru sirala
let arr = [2,6,32,95,44,62,94];
arr.sort();

arr.sort(function(x,y){
    return x-y
});

console.log(arr);
// 2ci-sual arrayin 3-e qaliqsiz bolunen butun ededlerini consolda goster
let arr = [2,6,32,95,44,62,94];

for(let i = 0;i<arr.length;i++){
    if(arr[i]%3){
        console.log(arr[i],'qaliqla bolunur')
    }else if(arr[i]/3){
        console.log(arr[i],"qaliqsiz")
    }
};


// 3cu-sual 50den kicik olan butun ededler consolda goster

let arr = [2,6,32,95,44,62,94];
let ar1 = [];
let ar2 = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i]<= 50){
        ar1.push(arr[i])
        console.log(arr[i])
    }else{
        ar2.push(arr[i])
        console.log('50den boyukdur')
    }

};
// 4cu-sual arrayin daxilindeki elementlerden 35 ile 70 arasinda olanlari consolda gosterin

let arr = [2,6,32,95,44,62,94];

for(let i = 0;i<arr.length;i++){
    if(arr[i]<100 && 200<arr[i]){
        console.log(arr[i])
    }
};

// 5ci-sual arrayin daxilindeki ilk elementi splice vasitesi ile remove et

let arr = [2,6,32,95,44,62,94];

arr.splice(0,1);
console.log(arr);

// 6ci-sual arrayin ilk elementini remove et ve 2 yeni element elave et

let arr = [2,6,32,95,44,62,94];

arr.splice(0,1,'PHP','Python');
console.log(arr)

// 7ci-sual funksiya yazin arrayin daxilinde tipleri number string object boolean olanlari consolda gostersin
let array = [25, 95, 'test', 'php', true, {}, 129, 'javascript'];


// Return catdigi an islem dayanir ve ondan sonra bir emeliyyat bas vermir

function type(arr, a) {
    let arrayNew = [];
    for (i = 0; i < arr.length; i++) {
        if (a == typeof arr[i]) {
            arrayNew.push(arr[i])
        }
    }
    return arrayNew;
};



let number = type(array, "number");
console.log(number);
let string = type(array, "string");
console.log(string);
let object = type(array, "object");
console.log(object);
let boolean = type(array, "boolean");
console.log(boolean);



