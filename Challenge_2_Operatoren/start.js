import { data } from './data.js';
import { from } from 'rxjs'

// Kreieren eines Observable anhand eines Arrays
const searchResult$ = from(data);

// Mit Hilfe der pipe-Funktionen leiten wir die pipeable-Operatoren ein
searchResult$.pipe(

).subscribe(console.log)

