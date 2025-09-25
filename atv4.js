var materias = [];

for (var i = 0; i < 8; i++) {
  var nome = prompt("Digite o nome da matéria " + (i + 1) + ":");
  var nota = parseFloat(prompt("Digite a nota da matéria " + (i + 1) + ":"));
  var frequencia = parseFloat(prompt("Digite a frequência (%) da matéria " + (i + 1) + ":"));
  
  materias.push({ nome: nome, nota: nota, frequencia: frequencia });
}

var somaFreq = 0;
for (var i = 0; i < materias.length; i++) {
  somaFreq += materias[i].frequencia;
}
var mediaFreq = somaFreq / materias.length;
console.log("Média de frequência das disciplinas: " + mediaFreq.toFixed(2) + "%");

var acimaMedia = 0;
for (var i = 0; i < materias.length; i++) {
  if (materias[i].nota > 60) {
    acimaMedia++;
  }
}
console.log("Quantidade de notas acima de 60%: " + acimaMedia);
