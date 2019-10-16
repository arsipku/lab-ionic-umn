import { TestBed } from '@angular/core/testing';

import { PlaceDetailServiceService } from './place-detail-service.service';

describe('PlaceDetailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceDetailServiceService = TestBed.get(PlaceDetailServiceService);
    expect(service).toBeTruthy();
  });
});
