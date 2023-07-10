import { of } from 'rxjs'
import { filter } from 'rxjs/operators'

// Mit Hilfe des of-Operators erstellen wir ein Observables, welches die 
// Werte 1, 2, 3, 4 und 5 nacheinander emitted
const source$ = of(1, 2, 3, 4, 5);

// Mit Hilfe der subscribe Funktion abonnieren wir uns auf das Observable
// Der Pipeable-Operator filter wird genutzt um Werte anhand einer Bedingung zu filtern.
// Hierbei gibt der filter Operator nur Werte zurück die größer als 3 sind.
source$.pipe(filter(num => num > 3)).subscribe(console.log)