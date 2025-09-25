let n = prompt("Quantas pessoas?");
let comFebre = 0;

for (let i = 0; i < n; i++) {
    let temp = prompt(`Digite a temperatura da pessoa ${i + 1}:`);
    if (temp > 38) {
        comFebre++;
    }
}

console.log(`Total de pessoas com febre: ${comFebre}`);