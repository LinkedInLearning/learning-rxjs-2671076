import { of, from } from 'rxjs';
import { mergeMap, concatMap, delay } from 'rxjs/operators';

// Simulation: die Antwort des Requests kommt verzögert
const innerObservable$ = (id) =>
  of(`Response from ${id}`).pipe(delay(Math.random() * 10));

// Das äußere Observable emitted vier aufeinanderfolgende Ids
const outerObservable$ = from(['Id-1', 'Id-2', 'Id-3', 'Id-4']);

// Nutzen der HigherOrderMappingOperatoren um die verschachtelte Subscription aufzulösen
outerObservable$.pipe(
  // mergeMap ignoriert die Reihenfolge des äußeren Observables
  // mergeMap(item => innerObservable$(item))
  // concatMap hält die Reihenfolge des äußeren Observables weiterhin ein
  concatMap(item => innerObservable$(item))
).subscribe((val) => console.log(val))
