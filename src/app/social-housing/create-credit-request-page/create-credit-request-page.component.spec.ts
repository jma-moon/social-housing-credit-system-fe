import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCreditRequestPageComponent } from './create-credit-request-page.component';

describe('CreateCreditRequestPageComponent', () => {
  let component: CreateCreditRequestPageComponent;
  let fixture: ComponentFixture<CreateCreditRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCreditRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCreditRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
