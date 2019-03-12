import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCreditRequestFormComponent } from './create-credit-request-form.component';

describe('CreateCreditRequestFormComponent', () => {
  let component: CreateCreditRequestFormComponent;
  let fixture: ComponentFixture<CreateCreditRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCreditRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCreditRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
