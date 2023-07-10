import { withLatestFrom, map } from 'rxjs/operators';
import { interval } from 'rxjs';

// Werte werden Sekündlich emitted
const source$ = interval(1000);
// Werte werden alle 500ms emitted
const secondSource$ = interval(500);

source$.pipe(
  // Mit Hilfe des withLatestFrom-Operator kombinieren wir die Werte des
  // Haupt-Observables source$ mit dem Wert welches zu dem aktuellen Zeitpunkt von dem Observables 
  // secondSource$ emitted wurde
  withLatestFrom(secondSource$),
  // Mit Hilfe des map-Operators führen wir beide Werte, beider Observables zusammen
  map(([first, second]) => {
    return `First Source (1000s): ${first} Second Source (500ms): ${second}`;
  })
).subscribe(val => console.log(val));