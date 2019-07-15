import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import * as routes from './routes';
import { EmptyComponent } from './empty.component';
import { BadPracticeComponent } from './rxjs/badpractice/bad-practice.component';
import { BestPracticeComponent } from './rxjs/bestpractice/best-practice.component';
import { SubjectExampleComponent } from './rxjs/subject/subject-example.component';
import { SimpleObservableRxjsComponent } from "./rxjs/observable/simple-observable-rxjs.component";
import { BehaviorSubjectExampleComponent } from "./rxjs/behaviorsubject/behavior-subject-example.component";
import { PagingExampleComponent } from './rxjs/paging-example/paging-example.component';
import { CommonFunctionsComponent } from './rxjs/common-functions/common-functions.component';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes.routes) 
  ],
  declarations: 
  [ 
    AppComponent, 
    EmptyComponent,
    BadPracticeComponent,
    BestPracticeComponent,
    SubjectExampleComponent,
    SimpleObservableRxjsComponent,
    BehaviorSubjectExampleComponent,
    PagingExampleComponent,
    CommonFunctionsComponent
  ],
  exports:      
  [     
    EmptyComponent,
    BadPracticeComponent,
    BestPracticeComponent,
    SubjectExampleComponent,
    RouterModule     
  ],
  bootstrap:    
  [ 
    AppComponent 
  ]
})
export class AppModule { }
