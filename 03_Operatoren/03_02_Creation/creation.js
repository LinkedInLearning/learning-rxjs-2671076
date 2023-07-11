import { interval } from 'rxjs'

// Mit Hilfe des interval-Operators erstellen wir ein Observables welches 
// periodisch anhand einer definierten Zeit Werte emitted (in diesem Fall 1000ms)
const input$ = interval(1000);

// Mit Hilfe des of-Operators erstellen wir ein Observables, welches die 
// Werte 11, 21, 8 und 23 nacheinander emitted
// const input$ = of(11, 21, 8, 23);

// Mit Hilfe der subscribe Funktion abonnieren wir uns auf das Observable
input$.subscribe(console.log);