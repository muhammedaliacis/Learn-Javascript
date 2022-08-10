const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Muhammed");
myset.add(true);
myset.add([1, 2, 3]);
myset.add({ a: 10, b: 20 });

const myset2 = new Set([100, 3.14, "muhammed"]);



console.log(myset2);

//size
console.log(myset2.size);

//delete
myset.delete("Muhammed");
console.log(myset);

//Has Method

console.log(myset.has("Muhammed"));
console.log(myset.has(3.14));

//Foreach

myset.forEach(function(value) {
    console.log(value);
})

//For of

for (let value of myset) {
    console.log(value);
}

//Set create array

const array = Array.from(myset);
console.log(array)