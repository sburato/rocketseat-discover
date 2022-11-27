/*
    Manipulando String e Números
    Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
        * Método "toFixed(2)" para dados do tipo Number.
*/
let number = 43.5665659;
console.log(Number(number.toFixed(2).replace(".", ",")));