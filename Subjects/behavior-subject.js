import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(0);

subject.next(11);
subject.next(12);

subject.subscribe(console.log);

subject.next(21);
