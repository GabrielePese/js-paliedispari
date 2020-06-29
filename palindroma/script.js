// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// //


var parola = prompt("dimmi una parola")
var parolaInvertita = "";


parolaInvertita = invertiParola(parola)

if (parola == parolaInvertita) {
  console.log("la parola è palindroma");
}
else {
  console.log("la parola NON è palindroma");
}

function invertiParola (parola){
  var parolaInvertita = "";
  for (var i = parola.length-1; i >= 0; i--) {
    parolaInvertita += parola[i]
  }

  return parolaInvertita;

}
