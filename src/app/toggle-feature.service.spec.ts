import { TestBed, inject } from '@angular/core/testing';

import { ToggleFeatureService } from './toggle-feature.service';

describe('ToggleFeatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleFeatureService]
    });
  });

  it('should be created', inject([ToggleFeatureService], (service: ToggleFeatureService) => {
    expect(service).toBeTruthy();
  }));
});
