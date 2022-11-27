// callback funtion: É uma função sendo passada como parâmetro para outra função.

function sayMyName(name) {
    console.log("Antes de executar a função de callback.");
    name();
    console.log("Depois de executar a função de callback.");
}

sayMyName(() => console.log("Estou em uma callback."));