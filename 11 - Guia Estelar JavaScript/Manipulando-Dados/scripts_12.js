// Manipulando Arrays

let techs = ["html", "css", "js"];

// Adicionar um item no fim
techs.push("node.js");

// Adicionar um item no início
techs.unshift("sql");

// Remover do fim
techs.pop();

// Remover do início
techs.shift();

// Pegar somente alguns elementos do array (Não transforma o array)
console.log(techs.slice(1, techs.length));

// Remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1);

// Encontrar a posição de um elemento no array
const index = techs.indexOf("js");
techs.splice(index, 1);

console.log(techs);