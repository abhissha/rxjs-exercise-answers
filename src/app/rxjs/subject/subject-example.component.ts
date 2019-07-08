import { Component } from '@angular/core';

import { Subject } from 'rxjs';

import { } from 'rxjs/operators';

@Component({
  selector: 'subject-example',
  template: `
  <div class="card">
    <div class="card-header">
      Subject
    </div>
    <div class="card-body">
      <h5 class="card-title">Subject Demo</h5>
      <p class="card-text">when button clicked, subject will emit values</p>
      <button class="btn btn-primary" (click)="startSubject()">Start</button>
    </div>
  </div>`,
  styles: ['']
})
export class SubjectExampleComponent  {

  startSubject(): void {
    /* create an instance of Subject. */
    const s = new Subject<number>();

    /* Subscribe to subject. */
    /* create observer 1 */
    s.subscribe(
      next => console.log('observer1: ', next),
      error => console.warn(error),
      () => console.log('observer1 complete')
    );

    /* create observer 2 */
    s.subscribe(
      next => console.log('observer2: ', next),
      error => console.warn(error),
      () => console.log('observer2 complete')
    );

    /* Emit some values. */
    s.next(1);
    s.next(2);

    /* Subscribe late to subject. */
    s.subscribe(
      next => console.log('observer3:', next),
      error => console.warn(error),
      () => console.log('observers3 complete')
    );

    /* Late subscription will now receive Notification. */
    s.next(3);
    s.complete();
  }
}
