function alterarMSG(numero){
  const elemento = document.getElementById("msg");
  elemento.innerHTML = `Os numero sao: ${numero}.`;
}

let elementoBotao = document.getElementById("btnConfirma");

elementoBotao.addEventListener("click", function(){
  const resposta  = document.getElementById("numero").value;
  if (resposta === "S") {
    let numero = [];

    for ( i = 1; i <= 100; i++) {
      numero.push(i);
      console.log(numero); 
      alterarMSG(numero);  
    }
   
}})
