var pessoas = [];

for (let i = 0; i < 10; i++) {
  pessoas[i] = prompt("Qual o tipo sanguíneo da pessoa " + i + "?");
}

for (let i = 0; i < 10; i++) {
  console.log("Pessoa " + i + ", tipo de sangue: " + pessoas[i]);
}
