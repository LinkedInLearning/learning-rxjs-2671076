import { Subject } from 'rxjs';

const subject = new Subject();

subject.next(11);

subject.subscribe(console.log);

subject.next(21);
