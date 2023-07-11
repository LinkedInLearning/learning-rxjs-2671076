import { Observable } from 'rxjs';

// Bei dem Aufruf des Konstruktors des Observables übergeben wir das Observer Objekt
const source$ = new Observable((observer) => {
  // Die next-Funktion emitted einen Wert an alle Observer
  observer.next(11);
  observer.next(12);

  // Jedes Observable sollte eine Funktion zurückgeben die ausgeführt wird sobald
  // wir uns von diesem Observable unsubscriben. Dieses dient als "clean-up"
  return () => console.log('observer unsubscribed!');
});

// Mit Hilfe der subscribe-Funktion können wir uns auf Observables subscriben
// Hierbei übergeben wir das Observer Objekt, welches dann von dem Observable genutzt wird
// dessen Beobachter (Observer) zu notifizieren bei änderungen oder einem Fehlerfall
const subscription = source$.subscribe({
  next: (num) => console.log(num),
  error: (error) => console.error(error),
  complete: () => console.log("observable completed")
})

// Nach einer Sekunden rufen wir die unsubscribe-Funktion auf um uns von dem Observable zu unsubscriben
setTimeout(() => {
  subscription.unsubscribe();
}, 1000)