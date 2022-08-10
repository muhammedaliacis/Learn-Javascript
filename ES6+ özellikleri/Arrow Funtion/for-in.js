//FOR IN AND FOR OF

const person = {
    name: "Muhammed Ali",
    age: 25,
    salary: 3000
};

const langs = ["Python", "C", "Java", "CSS"];

const name = "Muhammed";

//FOR IN
//Object
for (let prop in person) {
    console.log(prop, person[prop]);
}

//Array
for (let index in langs) {
    console.log(index, langs[index]);
}

//String

for (let index in name) {
    console.log(index, name[index]);
}

//FOR OF

//Array
for (let value of langs) {
    console.log(value);
}

//String

for (let character of langs) {
    console.log(character);
}