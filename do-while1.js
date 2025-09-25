let i = 0;
let alunos = [];
let soma = 0;

do {
    let matricula = prompt(`Digite a matrícula do aluno ${i + 1}:`);
    let nota = prompt(`Digite a nota do aluno ${i + 1}:`);
    alunos.push({matricula, nota});
    soma += nota;
    i++;
} while (i < 5);

let media = soma / 5;
console.log(`Média: ${media}`);
console.log("Alunos com nota acima da média:");

i = 0;
do {    
    if (alunos[i].nota > media) {
        console.log(alunos[i].matricula);
    }
    i++;
} while (i < 5);
