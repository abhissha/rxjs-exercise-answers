import { Component, OnInit, OnDestroy } from '@angular/core';
import { BadPracticeService } from './bad-practice.service';

import { Observable, Subscription, timer } from 'rxjs';

import { } from 'rxjs/operators';

@Component({
  selector: 'bad-pratice',
  templateUrl: './bad-practice.component.html',
  styles: ['']
})
//export class BadPracticeComponent implements OnInit  {
export class BadPracticeComponent implements OnInit, OnDestroy  {
  name = 'Bad Practice'  
  secondElapsed: string;

  constructor(private badPracticeService: BadPracticeService) {
  }

  ngOnInit(): void {
    this.badPracticeService.startTimer()
      .subscribe({
        next: secondElapsed => {
          this.secondElapsed = secondElapsed.toString();
          console.log(secondElapsed)
          },
        error: err => { console.log(err) },
        complete: () => { console.log('done') }        
      });   
  }

  ngOnDestroy(): void {
    this.badPracticeService.stopTimer();
  }

}
