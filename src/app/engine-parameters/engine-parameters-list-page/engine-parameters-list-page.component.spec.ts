import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineParametersListPageComponent } from './engine-parameters-list-page.component';

describe('EngineParametersListPageComponent', () => {
  let component: EngineParametersListPageComponent;
  let fixture: ComponentFixture<EngineParametersListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineParametersListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineParametersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
