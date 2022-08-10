// MAPS - Key - Value

let myMap = new Map(); // Create


const key1 = "Muhammed";
const key2 = { a: 10, b: 20 };
const key3 = () => 2;

//set

myMap.set(key1, "String value");
myMap.set(key2, "Object value");
myMap.set(key3, "Function value");

//get

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

// Map Size

console.log(myMap.size);

const cities = new Map();

cities.set("Ankara", 5);
cities.set("Izmir", 4);
cities.set("Istanbul", 15);

// For Each

cities.forEach(function(value, key) {
    console.log(key, value);
})

// For of

for (let [key, value] of cities) { //Destructing
    console.log([key, value]);
}

// Map Keys

for (let key of cities.keys()) {
    console.log(key);
}

//Map Values

for (let value of cities.values()) {
    console.log(value);
}

//Array Create Map

const array = [
    ["key1", "value1"],
    ["key2", "value2"]
];

const lastMap = new Map(array);

console.log(lastMap);

//Map Create Array

const arrayy = Array.from(cities);

console.log(arrayy);