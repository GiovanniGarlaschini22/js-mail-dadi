// GENERAZIONE NUMERO RANDOM PER GIOCATORE E COMPUTER //
const lancioDado = () => Math.floor(Math.random() * 6) + 1;

const giocatore = lanciaDado();
const computer = lanciaDado();

console.log("giocatore ha tirato:", giocatore);
console.log("computer ha tirato:", computer);

// OUTPUT //
if (giocatore > computer) {
  console.log("Giocatore vince!");
} else if (computer > giocatore) {
  console.log("computer vince");
} else {
  console.log("pareggio");
} 