// Operadores de comparação

// Irá comparar valores e retornar um valor booleano  com resposta a comparação

let one = 1;
let two = 2;

// == >> igual a << o compilador irá comparar o valor da expressão
console.log("igual a");
console.log(two == 1);
console.log(one == "1");

// != >> diferente de << o compilador irá comparar o valor da expressão
console.log("diferente de");
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

// === >> estritamente igual a << o compilador irá comparar o valor e o tipo da expressão
console.log("estritamente igual a");
console.log(one === "1");
console.log(one === 1);

// !== >> estritamente diferente de << o compilador irá comparar o valor e o tipo da expressão
console.log("estritamente diferente de");
console.log(two !== "2");
console.log(two !== 2);

// > >> Maior que <<
console.log("Maior que");
console.log(one > two);

// > >> Maior igual a <<
console.log("Maior igual a");
console.log(one >= 1);
console.log(two >= 1);

// > >> Menor que <<
console.log("Menor que");
console.log(one < two);

// > >> Menor igual a <<
console.log("Menor igual a");
console.log(one <= two);
console.log(one <= 1);
console.log(one <= 0);