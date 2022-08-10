// const hello = function() {
//     console.log("Hello");
// }

// hello();

// Arrow Function

// const hello = () => {
//     console.log("Hello");
// }

// old Destructing

// let number1, number2;

// arr = [100, 200, 250, 300];

// number1 = arr[0];
// number2 = arr[1];

// Destructing

// [number1, number2] = [100, 200, 300, 400];
// const [number1, number2] = arr;


//Obje Destructing

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40
// };

// const { a, c, d } = numbers;

// Function Destructing

// const getLangs = () => ["Python", "Java", "C++"];

// const [lang1, lang2, lang3] = getLangs();

//Obje

// const person = {
//     name: "Muhammed Ali",
//     year: 2001,
//     salary: 3000,
//     showInfos: () => console.log("Bilgiler gösteriliyor...")
// }

// const { name: isim, year: yil, salary: maas, showInfos: bilgileriGoster };
// console.log(isim, yil, maas);
// bilgileriGoster();



//SPREAD OPERATOR

// const langs = ["Python", "Java", "C++", "CSS"];

// console.log(langs[0], langs[1], langs[2]);

// console.log(...langs);

// const langs2 = ["Javascript", "PHP", langs[0], langs[1], langs[2]];
// const langs2 = ["Javascript", "PHP", ...langs];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, ...numbers2] = numbers;

const addNumbers = (a, b, c) => console.log(a + b + c);

const numbers = [100, 200, 300];

addNumbers(...numbers);