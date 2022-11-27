/*
    ### Sistema de gastos familiar

    Crie um objeto que possui duas propriedades, ambas do tipo array
        * receitas = [];
        * despesas = [];

    Agora, crie uma função que irá calcular o total de receitas e despesas e irá
    mostrar uma mensagem se a família está com saldo positivo ou negativo,
    seguido do valor do saldo.
*/

let financas = {
    receitas : [],
    despesas : [],
    calcularSaldo: function () {
        let totalDespesas = 0;
        for (const despesa of this.despesas) {
            totalDespesas += despesa;
        }
        
        let totalReceitas = 0;
        for (const receita of this.receitas) {
            totalReceitas += receita;
        }
            
        let saldo = totalReceitas - totalDespesas;

        if (saldo >= 0) {
            console.log(`Seu saldo está positivo (R$ ${ saldo.toFixed(2) }).`);
        } else {
            console.log(`Seu saldo está negativo (R$ ${ saldo.toFixed(2) }).`);
        }
    } 
}

financas.despesas.push(300);
financas.receitas.push(1400);
financas.calcularSaldo();