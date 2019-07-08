import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { of, fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'simple-observable-rxjs',
  template: `
  <div class="card">
  <div class="card-header">
    1. Display Numbers 1, 2, 3, 4 & 5 on Console
  </div>
  <div class="card-body">
    <h5 class="card-title">Hint</h5>
    <p class="card-text">Use one of the creation operator in rxjs to create the observables</p>
  </div>
</div>
<div class="card">
  <div class="card-header">
    2. Display co-ordinate of button click
  </div>
  <div class="card-body">
    <h5 class="card-title">Hint</h5>
    <p class="card-text">Use one of the creation operator in rxjs to create the observables</p>
    <button type="button" class="btn btn-primary" id="btnClick" #btnClick>Display Coordinates </button>
  </div>
</div>
<div class="card">
  <div class="card-header">
    3. Display each character typed in input
  </div>
  <div class="card-body">
    <h5 class="card-title">Hint</h5>
    <p class="card-text">Use one of the creation operator in rxjs to create the observables</p>
    Type Something: <input id="txtInput" #txtInput>
  </div>
</div>
  `,
  styles: ['']
})
export class SimpleObservableRxjsComponent implements AfterViewInit {
  
  @ViewChild("btnClick") btnClick: ElementRef;
  @ViewChild("txtInput") txtInput: ElementRef;
  
  $btnClick: Observable<any>;
  $inputChange: Observable<any>;

  constructor(){
    of(1,2,3,4,5)
    .subscribe(x => console.log(x));
  }

  ngAfterViewInit() {
    this.$btnClick = fromEvent(this.btnClick.nativeElement, 'click');
    this.$btnClick.subscribe(x => console.log(x));

    this.$inputChange = fromEvent(this.txtInput.nativeElement, 'keyup');
    this.$inputChange.subscribe(e => console.log(e.target.value));
  }
}
