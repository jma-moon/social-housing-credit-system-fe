import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropertyPageComponent } from './create-property-page.component';

describe('CreatePropertyPageComponent', () => {
  let component: CreatePropertyPageComponent;
  let fixture: ComponentFixture<CreatePropertyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePropertyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropertyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
