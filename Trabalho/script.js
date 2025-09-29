function inserirValor() {
  venda = parseInt(prompt("Quantidade de vendas: "))
  preco = 0
 for ( i = 1; i <= venda; i++) {
   total = parseFloat(prompt("Qual o valor?"));
        preco += total
 }
}
function VerStatus() {
  alert("O numero de vendas é " + venda + " E o preco total é igual à: " +preco  )
}
function inserirDespesa() {
   qntdespesa = parseInt(prompt("Quantidade de despesa: "))
  despesatot = 0
  for ( i = 1; i <= qntdespesa; i++) {
   despesatotal = parseFloat(prompt("Qual o valor? "))
    despesatot += despesatotal
  }
}
function VerDespesas() {
   alert("O numero de vendas é " + qntdespesa + " E o preco total é igual à: " +despesatot )
}
function encerrar(){
  alert("Programa encerrado.")
}

function menu() {
 escolha = ""
 while(escolha !== "5") {
let escolha = prompt(
  "1) Inserir Valor de uma Venda \n"+
	"2) Ver status das vendas do dia (numero de vendas e valor total vendido) \n"+
	"3) Inserir Valor de uma Despesa \n"+
	"4) Ver total de despesas do dia \n"+
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
      inserirValor()
      break
    case "2":
      VerStatus()
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