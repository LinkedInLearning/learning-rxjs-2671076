import { of } from 'rxjs'
import { filter } from 'rxjs/operators'

const source$ = of(1, 2, 3, 4, 5);

source$.pipe(filter(num => num > 3)).subscribe(console.log)