import  { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subject } from 'rxjs';
import { publish, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BadPracticeService {
  
  private unsubcribe$: Subject<void> = new Subject();
  private timer$: Observable<number> = timer(0, 1000);

  constructor(private http: HttpClient) {
  }

  public startTimer(): Observable<number> {
    return this.timer$;
  }

  // public startTimer(): Observable<number> {
  //   return this.timer$
  //     .pipe(
  //       takeUntil(this.unsubcribe$)
  //     );
  // }

  public stopTimer(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }
}