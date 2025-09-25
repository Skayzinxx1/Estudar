let n = parseInt(prompt("Quantas pessoas?"));
let i = 0;
let comFebre = 0;

while (i < n) {
    let temp = prompt(`Digite a temperatura da pessoa ${i + 1}:`);
    if (temp > 38) {
        comFebre++;
    }
    i++;
}

console.log(`Total de pessoas com febre: ${comFebre}`);