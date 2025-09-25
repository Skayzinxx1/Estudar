var produto = [];
let caro = 0;
let indice = 0;

for (let i = 0; i < 5; i++) {
  produto[i] = parseFloat(prompt("Qual o valor do produto " + i + "?"));

  if (produto[i] > caro) {
    caro = produto[i];
    indice = i;
  }
}

console.log("Produto mais caro é o produto " + indice);
console.log("Valor: " + caro);
