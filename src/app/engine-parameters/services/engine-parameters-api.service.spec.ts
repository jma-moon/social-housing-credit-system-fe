import { TestBed } from '@angular/core/testing';

import { EngineParametersApiService } from './engine-parameters-api.service';

describe('EngineParametersApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EngineParametersApiService = TestBed.get(EngineParametersApiService);
    expect(service).toBeTruthy();
  });
});
