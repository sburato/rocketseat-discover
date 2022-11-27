// throw
// try...catch

function sayMyName(name) {
    if (name === "") {
        throw new Error("O nome é de preenchimento obrigatório.");
    } 
    console.log("Código após o erro.");
}

try {
    sayMyName("");
} catch (e) {
    console.log(e);    
}

console.log("Após a função de erro ser chamada.");