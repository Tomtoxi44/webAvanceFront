import { TestBed } from '@angular/core/testing';

import { ApiEcommerceService } from './api-ecommerce.service';

describe('ApiEcommerceService', () => {
  let service: ApiEcommerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEcommerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
