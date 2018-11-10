import { TestBed, inject } from '@angular/core/testing';

import { StylistService } from './stylist.service';

describe('StylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StylistService]
    });
  });

  it('should be created', inject([StylistService], (service: StylistService) => {
    expect(service).toBeTruthy();
  }));
});
