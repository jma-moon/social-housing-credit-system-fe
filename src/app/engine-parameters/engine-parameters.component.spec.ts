import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineParametersComponent } from './engine-parameters.component';

describe('EngineParametersComponent', () => {
  let component: EngineParametersComponent;
  let fixture: ComponentFixture<EngineParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
