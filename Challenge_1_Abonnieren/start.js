import { interval } from 'rxjs'

// interval erstellt ein Observable welches jede Sekunde eine Zahl emitted
const source$ = interval(1000);


// Nach 3 Sekunden wollen wir uns wieder von dem Observable unsubscriben
setTimeout(() => {

}, 3000)