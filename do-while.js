let n = parseInt(prompt("Quantas pessoas?"));
let i = 0;
let comFebre = 0;

do {
    let temp = prompt(`Digite a temperatura da pessoa ${i + 1}:`);
    if (temp > 38) {
        comFebre++;
    }
    i++;
} while (i < n);

console.log(`Total de pessoas com febre: ${comFebre}`);