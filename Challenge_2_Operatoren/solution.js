import { data } from './data.js';
import { from } from 'rxjs'
import { map, filter, take } from 'rxjs/operators'

const searchResult$ = from(data);

// Challenge 2.1
const subscription = searchResult$.pipe(
  // Mit Hilfe des filter Operators können wir Daten anhand einer Bedingung filtern.
  filter(person => person.age > 33),
  // Mit Hilfe des take Operators können wir eine bestimmt Anzahl von emitteten Werten annehmen
  //take(2) 
).subscribe(console.log)

// Challenge 2.2
/*const subscription =  searchResult$.pipe(
  // Mit Hilfe des map Operators können wir ein Subset eines Objektes zurück geben
  map(person => person.name),
  // Mit Hilfe des filter Operators können wir Daten anhand einer Bedingung filtern.
  filter(name => name.includes('au'))
).subscribe(console.log)*/

// setTimeout: https://www.w3schools.com/jsref/met_win_settimeout.asp
setTimeout(() => {
  subscription.unsubscribe();
}, 3000)
