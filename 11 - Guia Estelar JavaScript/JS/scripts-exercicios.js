//  1. Declare uma variável de nome weight
let weight;

//  2. Que tipo de dado é a variável acima?
console.log(typeof(weight));

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
let name = "Silvano";
let age = 38;
let stars = 1.0;
let isSubscribed = false;

/*
    4. A variável student abaixo é de que tipo de dado?
    
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weigth> kg.

        Atenção: substitua <name> <age> <weight> pelos valores de cada propriedade do objeto
 */
let student = {};

student = {
    name: "Silvano",
    age: 38,
    weight: 80.0,
    isSubscribed: false,    
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

/*
    5. Declare uma variável do tipo Array, de nome students e atribuia a ela
    nenhum valor, ou seja, somente o Array vazio
*/
let students = [];

/*
    6. Reatribua valor para a variável do exercício 5, colocando dentro dela o 
    objeto student do exercício 4. (Não copiar e colar o objeto, mas usar o 
    objeto criado e inserir ele no Array)
*/
students = [student];

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0]);

/*
    8. Crie um novo student e coloque na posição 1 do Array de students
*/
const studentNatalia = {
    name: "Natalia",
    age: 37,
    weight: 60.0,
    isSubscribed: false,        
}

students[1] = studentNatalia;

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
    Após a sua resposta, rode o código e veja se você acertou.

    console.log(a);
    var a = 1;

    R: undefined. Porque a declaração de variável com "var" criar um hoisting, ou seja,
    como se tivesse sido declarada antes do console.log. No entanto, se 
    a mesma variável fosse declarada utilizando o "let", o sistema iria apresentar
    uma mensagem de erro, pois a mesma não existe até o momento. 
*/
console.log(a);
var a = 1;


