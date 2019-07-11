import { Routes } from '@angular/router';
import { EmptyComponent } from './empty.component';
import { BadPracticeComponent } from './rxjs/badpractice/bad-practice.component';
import { BestPracticeComponent } from './rxjs/bestpractice/best-practice.component';
import { SubjectExampleComponent } from './rxjs/subject/subject-example.component';
import { SimpleObservableRxjsComponent } from "./rxjs/observable/simple-observable-rxjs.component";
import { BehaviorSubjectExampleComponent } from "./rxjs/behaviorsubject/behavior-subject-example.component";
import { PagingExampleComponent } from "./rxjs/paging-example/paging-example.component";
import { CommonFunctionsComponent } from "./rxjs/common-functions/common-functions.component";


export const routes: Routes = [
  { path: 'simpleobservable', component: SimpleObservableRxjsComponent },
  { path: 'subject', component: SubjectExampleComponent },
  { path: 'behaviorsubject', component: BehaviorSubjectExampleComponent},
  { path: 'paging', component: PagingExampleComponent},
  { path: 'badpractice', component: BadPracticeComponent },
  { path: 'bestpractice', component: BestPracticeComponent },  
  { path: 'empty', component: EmptyComponent },
  { path: 'commonfunctions/:id', component: CommonFunctionsComponent }
]
