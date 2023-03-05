import { TestBed } from '@angular/core/testing';

import { KiaProxyService } from './kia-proxy.service';

describe('KiaProxyService', () => {
  let service: KiaProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KiaProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
