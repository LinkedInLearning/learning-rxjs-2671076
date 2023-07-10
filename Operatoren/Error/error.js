import { of, interval } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

// Wir kreieren ein Observable, welches all 500 Millisekunden Werte emitted
// Simulation eines Fehlers sobald ein Element der Zahl 4 entspricht
const input$ = interval(500).pipe(map((num) => {
  if (num === 4) throw 'error'
  return num;
}));

// Wir kreieren ein Observable, welches zurückgegeben werden soll, sobald ein Fehler auftritt
const errorHandler$ = of(11, 12);

// Wir subsriben uns auf das Observable und nutzen den ctachError-Operator um den
// aufkommende Error abzufangen und dann das errorHandler$-Observable weiterzugeben.
input$.pipe(catchError((error) => errorHandler$)).subscribe(console.log);