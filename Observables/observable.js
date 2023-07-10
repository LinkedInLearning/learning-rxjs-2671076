import { Observable } from 'rxjs';

const source$ = new Observable((observer) => {
  observer.next(11);
  observer.next(12);

  return () => console.log('observer unsubscribed!');
});

const subscription = source$.subscribe({
  next: (num) => console.log(num),
  error: (error) => console.error(error),
  complete: () => console.log("observable completed")
})

setTimeout(() => {
  subscription.unsubscribe();
}, 1000)