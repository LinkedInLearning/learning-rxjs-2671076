import { of } from 'rxjs'
import { map } from 'rxjs/operators'

const source$ = of(1, 2, 3);

source$.pipe(map(num => num * 2)).subscribe(console.log)