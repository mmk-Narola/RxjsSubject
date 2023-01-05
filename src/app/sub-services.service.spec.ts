import { TestBed } from '@angular/core/testing';

import { SubServicesService } from './sub-services.service';

describe('SubServicesService', () => {
  let service: SubServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
