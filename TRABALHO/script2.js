
function alterarMSG(nome){
  const elemento = document.getElementById("msg");
  elemento.innerHTML = `Boa tarde ${nome}!`;
}

let elementoBotao = document.getElementById("btnConfirma");

elementoBotao.addEventListener("click", function(){
  const nome = document.getElementById("nome").value;
  console.log(nome);
  alterarMSG(nome);  
});