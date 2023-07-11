import { of } from 'rxjs'
import { map } from 'rxjs/operators'

// Mit Hilfe des of-Operators erstellen wir ein Observables, welches die 
// Werte 1, 2 und 3 nacheinander emitted
const source$ = of(1, 2, 3);

// Mit Hilfe der subscribe Funktion abonnieren wir uns auf das Observable
// Der Transformations-Operator map wird genutzt um Werte anhand einer Funktion 
// zu transformieren. Im diesem Fall multiplizieren wir jede emittede Zahl mit 2
source$.pipe(map(num => num * 2)).subscribe(console.log)