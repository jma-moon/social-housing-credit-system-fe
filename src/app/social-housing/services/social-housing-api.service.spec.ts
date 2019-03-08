import { TestBed } from '@angular/core/testing';

import { SocialHousingApiService } from './social-housing-api.service';

describe('SocialHousingApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialHousingApiService = TestBed.get(SocialHousingApiService);
    expect(service).toBeTruthy();
  });
});
