/*
    Manipulando Arrays
    Contar elementos de um array
*/
let myArray = ["a", { type: "array" }, () => console.log("Alo")];
console.log(myArray.length);
console.log(myArray[1].type);
myArray[2]();