let alunos = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let matricula = prompt(`Digite a matrícula do aluno ${i + 1}:`);
    let nota = prompt(`Digite a nota do aluno ${i + 1}:`);
    alunos.push({matricula, nota});
    soma += nota;
}

let media = soma / 5;
console.log(`Média: ${media}`);
console.log("Alunos com nota acima da média:");

for (let i = 0; i < 5; i++) {
    if (alunos[i].nota > media) {
        console.log(alunos[i].matricula);
    }
}
