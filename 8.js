let somaCount = 0;
let subtracaoCount = 0;
let multiplicacaoCount = 0;
let divisaoCount = 0;

while (true) {
    
    console.log("Escolha uma opção:\n a) SOMA\n b) SUBTRAÇÃO\n c) MULTIPLICAÇÃO\n d) DIVISÃO\n e) sair");
    let opcao = prompt("Escolha uma opção (a, b, c, d, e):");
    
    if (opcao === "e") {
        console.log("Operações realizadas:");
        console.log("SOMA: " + somaCount);
        console.log("SUBTRAÇÃO: " + subtracaoCount);
        console.log("MULTIPLICAÇÃO: " + multiplicacaoCount);
        console.log("DIVISÃO: " + divisaoCount);
        break;
    }
    
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));

    if (opcao === "a") {
        let resultado = num1 + num2;
        console.log("Resultado da soma: " + resultado);
        somaCount++;
    } else if (opcao === "b") {
        let resultado = num1 - num2;
        console.log("Resultado da subtração: " + resultado);
        subtracaoCount++;
    } else if (opcao === "c") {
        let resultado = num1 * num2;
        console.log("Resultado da multiplicação: " + resultado);
        multiplicacaoCount++;
    } else if (opcao === "d") {
        if (num2 === 0) {
            console.log("Erro: Não é possível dividir por zero.");
        } else {
            let resultado = num1 / num2;
            console.log("Resultado da divisão: " + resultado);
            divisaoCount++;
        }
    } else {
        console.log("Opção inválida, tente novamente.");
    }
}