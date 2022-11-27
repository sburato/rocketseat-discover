/*
    ### Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema númerico para o sistema 
    de notas em caracteres tipo ABC

    * de 90 para cima   - A
    * entre 80 - 89     - B
    * entre 70 - 79     - C
    * entre 60 - 69     - D
    * menor que 60      - F
*/

function getNota(nota) {
    if (nota >= 90 && nota <= 100) {
        return "A";
    } else if (nota >= 80 && nota < 90) {
        return "B";    
    } else if (nota >= 70 && nota < 80) {
        return "C";    
    } else if (nota >= 60 && nota < 70) {
        return "D";    
    } else if (nota >= 0 && nota < 60) {
        return "F";    
    } else {
        throw new Error("A nota informada é inválida.");
    }
}

console.log(getNota(90));
console.log(getNota(89));
console.log(getNota(79));
console.log(getNota(69));
console.log(getNota(59));