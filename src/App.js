const tipos = ["A⁺", "B⁺", "AB⁺", "O⁺", "A⁻", "B⁻", "AB⁻", "O⁻"];
var escolhedorDeSangue = Math.floor(Math.random() * tipos.length);
for (var c = 0; c < tipos.length; c++) {
  if (escolhedorDeSangue == c) {
    var tipoEscolhidoI = tipos[c];
  }
}



//tipoEscolhidoI = "AB⁻";
console.log("App diz: " + tipoEscolhidoI)



var tipoEscpt1 = tipoEscolhidoI[0];
var tipoEscpt2 = tipoEscolhidoI[1];
var talvezABI = tipoEscpt1 + tipoEscpt2;

export { tipoEscolhidoI, talvezABI, tipos };
