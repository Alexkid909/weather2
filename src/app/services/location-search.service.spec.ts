import { TestBed, inject } from '@angular/core/testing';

import { LocationSearchService } from './location-search.service';

describe('LocationSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationSearchService]
    });
  });

  it('should be created', inject([LocationSearchService], (service: LocationSearchService) => {
    expect(service).toBeTruthy();
  }));
});
