// declaração de variável
var name;

// Atribuição de valores
name = "Mayk";

// Que tipo de dado foi colocado na variável
console.log(typeof name);

let age = 20;
let isHumam = true;

// Agrupamento de declarações
let age1, isHumam1;
age1 = 10;
isHumam1 = false;

// Passando múltiplos argumentos
console.log(name, age, isHumam);

// Escrita de textos mais variáveis
console.log("O " + name + " tem " + age + " anos");

// Interpolação de valores com template literals
console.log(`O ${name} tem ${age} anos`);

// Object
const person = {
    name: "john",
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`);

// Array
const animais = [
    "Leão",
    "Macaco",
    {
        name: "cat",
        age: 3
    }
];

console.log(animais[0]);
console.log(animais[2].name);
console.log(animais.length);