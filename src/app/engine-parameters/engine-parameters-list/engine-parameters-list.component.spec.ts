import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineParametersListComponent } from './engine-parameters-list.component';

describe('EngineParametersListComponent', () => {
  let component: EngineParametersListComponent;
  let fixture: ComponentFixture<EngineParametersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineParametersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineParametersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
