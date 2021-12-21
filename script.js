console.log('JS ok');

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

1- Chiedere all'utente i km percorsi
2- chiedere l'età dell'utente
3- Calcolo prezzo biglietto
   3a- Se utente :
      - minore di 18 anni (20%)
      - maggiore di 65 anni (40%)
4- Scrivo il prezzo approssimato a 2 cifre dopo la virgola

*/

// #1 
const userKm = parseInt(prompt('Quanti Km hai percorso?').trim());
// #2
const userAge = parseInt(prompt('Quanti anni hai?').trim());

if (isNaN(userKm) || isNaN(userAge)) {
   alert('Inserisci un numero valido')
}

console.log(`"userKm :" ${userKm}`);
console.log(`"userAge :" ${userAge}`);

// #3
let priceTicketFull = userKm * 0.21;
console.log(`"Ticket Full :" ${priceTicketFull}`);

// #4
const priceTicketUnder = (priceTicketFull * 20) / 100;
const priceTicketOver = (priceTicketFull * 40) / 100;

if (userAge < 18) {
   priceTicketKids = (priceTicketFull - priceTicketUnder).toFixed(2)
   console.log(`Ticket Kids : ${priceTicketKids}`);
   document.getElementById('prezzo-biglietto').innerText = `Il prezzo del tuo biglietto, con tariffa under 18 è di : ${priceTicketKids}€`
} else if (userAge > 65) {
   priceTicketSenior = priceTicketFull - priceTicketOver
   document.getElementById('prezzo-biglietto').innerText = `Il prezzo del tuo biglietto, con tariffa over 65 è di : ${priceTicketSenior}€`
   console.log(`Ticket Senior : ${priceTicketSenior}`).toFixed(2)
} else {
   document.getElementById('prezzo-biglietto').innerText = `Il prezzo del tuo biglietto è di : ${priceTicketFull}€`
   console.log(`Ticket Adult : ${priceTicketFull}`).toFixed(2)
}
