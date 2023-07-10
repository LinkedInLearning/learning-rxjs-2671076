import { of, interval } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

const input$ = interval(500).pipe(map((num) => {
  if (num === 4) throw 'error'
  return num;
}));

const errorHandler$ = of(11, 12);

input$.pipe(catchError((error) => errorHandler$)).subscribe(console.log);