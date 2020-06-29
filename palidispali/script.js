// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
//

document.getElementById("btn").addEventListener("click", function(){
  var scelta = document.getElementById("select").value;
  console.log(scelta);
});

function numeroRandom (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

}
var numero = parseInt(prompt("inserisci numero 1-5"));

console.log(numero);


var random = Math.floor(Math.random() * (5 - 1 +1)) + 1
console.log(random);

var somma = numero + random
console.log(somma);

if (somma%2 == 0) {
  console.log("La somma è pari");
}
else {
  console.log("La somma è DISPARI");
}

if (numero > random) {
  console.log("L'utente ha vinto");
}
else if (random > numero) {
  console.log("Il pc ha vinto");
}
else {
  console.log("hanno pareggiato");
}
