import { interval } from 'rxjs'

const source$ = interval(1000);

const subscription = source$.subscribe(console.log);

setTimeout(() => {
  subscription.unsubscribe();
}, 5000)