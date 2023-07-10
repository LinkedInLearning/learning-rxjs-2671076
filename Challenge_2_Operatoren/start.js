import { data } from './data.js';
import { from } from 'rxjs'
import { filter, map } from 'rxjs/operators'

const searchResult$ = from(data);

const subscription = searchResult$.pipe(
  map(person => person.name),
  filter(name => name.includes('au'))
).subscribe(console.log);

setTimeout(() => {
  subscription.unsubscribe();
}, 3000)
