import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSignUpPageComponent } from './person-sign-up-page.component';

describe('PersonSignUpPageComponent', () => {
  let component: PersonSignUpPageComponent;
  let fixture: ComponentFixture<PersonSignUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonSignUpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
