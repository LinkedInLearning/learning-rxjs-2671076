import { withLatestFrom, map } from 'rxjs/operators';
import { interval } from 'rxjs';
//emit every 1s
const source = interval(1000);
//emit every 500ms
const secondSource = interval(500);

const example = source.pipe(
  withLatestFrom(secondSource),
  map(([first, second]) => {
    return `First Source (1000s): ${first} Second Source (500ms): ${second}`;
  })
).subscribe(val => console.log(val));