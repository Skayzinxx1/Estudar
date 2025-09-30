function alterarMSG(nome){
  const elemento = document.getElementById("msg")
  elemento.innerHTML = `Boa tarde ${nome}!`
}

let elementoBotao = document.getElementBvId("btnConfirma")

elementoBotao.addEventListener("click", function(){
  const elemento = document.getElementById("msg")
  const nome = document.getElementById("nome").value
  console.log(nome)
  elemento.innerHTML = `Boa tarde ${nome}!`
})