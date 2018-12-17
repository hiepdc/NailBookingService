import { TestBed, inject } from '@angular/core/testing';

import { ServiceItemService } from './service-item.service';

describe('ServiceItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceItemService]
    });
  });

  it('should be created', inject([ServiceItemService], (service: ServiceItemService) => {
    expect(service).toBeTruthy();
  }));
});
