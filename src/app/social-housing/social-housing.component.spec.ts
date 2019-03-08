import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHousingComponent } from './social-housing.component';

describe('SocialHousingComponent', () => {
  let component: SocialHousingComponent;
  let fixture: ComponentFixture<SocialHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
