// RICHIESTA EMAIL ALL'UTENTE //
const emailOk = ["giovanni@gmail.com", "peppino@libero.it", "paperino@outlook.com"]
const emailUser = prompt("Inserire Indirizzo Email");
if (emailUser) {
  console.log("Indirizzo Email inserito:", emailUser);
} else {
  console.log("Nessun Indirizzo Email inserito");
}
// CONTROLLO //
let accessoConsentito = false;

for (let i = 0; i < emailOk.lenght; i++) {
    if (emailOk[i] === emailUser) {
        accessoConsentito = true;
    }
}
// OUTPUT //
if (accessoConsentito) {
    console.log("Accesso consentito");
  } else {
    console.log("Accesso negato");
}