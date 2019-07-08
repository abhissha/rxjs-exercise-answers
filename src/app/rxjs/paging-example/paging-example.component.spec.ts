import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingExampleComponent } from './paging-example.component';

describe('PagingExampleComponent', () => {
  let component: PagingExampleComponent;
  let fixture: ComponentFixture<PagingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
