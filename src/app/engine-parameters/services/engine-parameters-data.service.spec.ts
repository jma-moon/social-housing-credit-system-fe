import { TestBed } from '@angular/core/testing';

import { EngineParametersDataService } from './engine-parameters-data.service';

describe('EngineParametersDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EngineParametersDataService = TestBed.get(EngineParametersDataService);
    expect(service).toBeTruthy();
  });
});
