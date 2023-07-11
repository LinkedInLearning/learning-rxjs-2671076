import { of, from } from 'rxjs';
import { mergeMap, concatMap, delay, switchMap, exhaustMap } from 'rxjs/operators';

// Simulation: die Antwort des Requests kommt verzögert
const innerObservable$ = (id) =>
  of(`Response from ${id}`).pipe(delay(Math.random() * 100));

// Das äußere Observable emitted vier aufeinanderfolgende Ids
const outerObservable$ = from(['Id-1', 'Id-2', 'Id-3', 'Id-4']);

// Nutzen der HigherOrderMappingOperatoren um die verschachtelte Subscription aufzulösen
outerObservable$.pipe(
  // switchMap unterbricht die Bearbeitung des inneren Observables sobald das äußere Observable ein Wert emitted
  // switchMap(item => innerObservable$(item))
  // exhaustMap ignoriert Werte des äußeren Observables solange das innere Observable noch aktiv ist
  exhaustMap(item => innerObservable$(item))
).subscribe((val) => console.log(val))
