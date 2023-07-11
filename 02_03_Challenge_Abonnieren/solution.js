import { interval } from 'rxjs'

// interval erstellt ein Observable welches jede Sekunde eine Zahl emitted
const source$ = interval(1000);

// Mit Hilfe der subscribe Funktion subscriben wir uns auf den Datenstrom
// Damit wir uns wieder unsubscriben können speichern wir den Rückgabewert der subscribe-Funktion
const subscription = source$.subscribe(console.log);

// Nach 3 Sekunden wollen wir uns wieder von dem Observable unsubscriben
// setTimeout: https://www.w3schools.com/jsref/met_win_settimeout.asp
setTimeout(() => {
  subscription.unsubscribe();
}, 3000)