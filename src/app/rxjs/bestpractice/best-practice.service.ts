import  { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subject, of } from 'rxjs';
import { publish, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BestPracticeService {

  constructor(private http: HttpClient) {
  }

  // public startTimer(): Observable<number> {
  //   return timer$;
  // }

  public startTimer(): Observable<number> {
    return of(2);
  }

  public stopTimer(): void {
  }
}