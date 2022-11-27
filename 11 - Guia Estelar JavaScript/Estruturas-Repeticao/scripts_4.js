// for...in (pega os atributos do objeto)

let person = {
    name: "Jhon",
    age: 30,
    weight: 88.6
}

for (const property in person) {
    console.log(property + " = " + person[property]);
}