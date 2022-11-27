/*
    Estrutura de repetição: for
        - break: para a execução do loop;
        - continue: pula a execução do momento.
*/

console.log("Incrementar o valor de i");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;        
    }    
    console.log(i);
}

console.log("Decrementar o valor de i");

for (let i = 100; i > 0; i--) {
    if (i === 80) {
        break;
    }    
    console.log(i);
}