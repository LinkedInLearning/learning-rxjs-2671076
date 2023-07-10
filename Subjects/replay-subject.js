import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(100);

subject.next(11);
subject.next(12);

subject.subscribe(console.log);

subject.next(21);
