function dadosdoLivro() {
  
    livros =prompt("Quantos livros deseja cadastrar?")
  for (i=1 ; i==livros; i++) {
    livro = [
  nome = prompt("Digite o nome do livro: "),
  autor = prompt("Insira o autor: "),
  ano = prompt("Digite o ano em que foi lançado: "),
  avalicacao = prompt("Digite a avaliacao de 1 a 5 do livro: ") 
 ]
}
}
function verLivros() {
  if (livros === 0) {
    alert("Nenhum livro cadastrado.")
  } else {
     nomes = ""
    for (let i = 1; i < livros; i++) {
      nomes += livros[i][0] + "\n"
    }
    alert("Nomes dos livros cadastrados:\n" + nomes)
  }
}
function inserirDespesa() {
   
  
}
function VerDespesas() {
  
}
function encerrar(){
  
}

function menu() {
 escolha = ""
 while(escolha !== "5") {
let escolha = prompt(
  "1) Inserir dados do livro (Nome Livro, Autor, ano publicação, avaliação) \n"+
	"2) Imprimir Nomes de todos os livros cadastrados \n"+
	"3) Imprimir Todos os dados de um livro específico \n"+
	"4) Imprimir todos os dados dos livros de um autor específico \n"+
	"5) Encerrar \n")
  if (escolha === "5") {
      encerrar()
      break
    }
  
  processo(escolha)
}
}

function processo(tudo) {
  switch(tudo){
     case "1":
      dadosdoLivro()
      break
    case "2":
      verLivros()
      break
    case "3":
      inserirDespesa()
      break
    case "4":
      VerDespesas()
      break
    case "5":
      encerrar()
      break
      default:
      console.log("Opção inválida!")
  }
  
}

menu()