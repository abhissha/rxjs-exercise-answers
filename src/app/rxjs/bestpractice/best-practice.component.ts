import { Component, OnInit, OnDestroy } from '@angular/core';
import { BestPracticeService } from './best-practice.service';

import { Observable, Subscription, timer } from 'rxjs';

import { } from 'rxjs/operators';

@Component({
  selector: 'best-practice',
  templateUrl: './best-practice.component.html',
  styles: ['']
})
//export class BadPracticeComponent implements OnInit  {
export class BestPracticeComponent implements OnInit, OnDestroy  {
  name = 'Best Practice'  
  secondElapsed: string;

  constructor(private bestPracticeService: BestPracticeService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
