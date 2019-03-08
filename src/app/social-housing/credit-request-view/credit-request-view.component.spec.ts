import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRequestViewComponent } from './credit-request-view.component';

describe('CreditRequestViewComponent', () => {
  let component: CreditRequestViewComponent;
  let fixture: ComponentFixture<CreditRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
