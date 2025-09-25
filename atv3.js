var fita = [];
var complemento = [];

for (var i = 0; i < 10; i++) {
  var base = prompt("Digite a base " + i + " (A, U, C ou G):").toUpperCase();
  fita.push(base);

  if (base === "A") complemento.push("U");
  else if (base === "U") complemento.push("A");
  else if (base === "C") complemento.push("G");
  else if (base === "G") complemento.push("C");
  else complemento.push("?");
}

console.log("Fita original: " + fita.join(" "));
console.log("Fita complementar: " + complemento.join(" "));
