var filmes = [];

for (var i = 0; i < 6; i++) {
  var nome = prompt("Digite o nome do filme " + (i + 1) + ":");
  var nota = parseFloat(prompt("Digite a nota do filme " + (i + 1) + ":"));
  filmes.push({ nome: nome, nota: nota });
}

var opcao;

do {
  opcao = prompt(
    "Menu:\n" +
    "a) Imprimir dados de 1 filme\n" +
    "b) Avaliar um filme cadastrado\n" +
    "c) Alterar dados de um filme cadastrado\n" +
    "d) Finalizar"
  );

  if (opcao === "a") {
    var indice = parseInt(prompt("Digite o índice do filme (0 a 5):"));
    if (filmes[indice]) {
      console.log("Filme: " + filmes[indice].nome + ", Nota: " + filmes[indice].nota);
    } else {
      console.log("Índice inválido!");
    }
    
  } else if (opcao === "b") {
    var indice = parseInt(prompt("Digite o índice do filme (0 a 5):"));
    if (filmes[indice]) {
      var novaNota = parseFloat(prompt("Digite a nova nota:"));
      filmes[indice].nota = (filmes[indice].nota + novaNota) / 2;
      console.log("Nota atualizada!");
    } else {
      console.log("Índice inválido!");
    }

  } else if (opcao === "c") {
    var indice = parseInt(prompt("Digite o índice do filme (0 a 5):"));
    if (filmes[indice]) {
      filmes[indice].nome = prompt("Novo nome do filme:");
      filmes[indice].nota = parseFloat(prompt("Nova nota do filme:"));
      console.log("Dados alterados com sucesso!");
    } else {
      console.log("Índice inválido!");
    }

  } else if (opcao === "d") {
    console.log("\n--- Lista de filmes cadastrados ---");
    for (var i = 0; i < filmes.length; i++) {
      console.log(i + ": " + filmes[i].nome + " - Nota: " + filmes[i].nota);
    }
    console.log("Programa finalizado!");
  } else {
    console.log("Opção inválida!");
  }

} while (opcao !== "d");
