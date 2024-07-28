import { TestBed } from '@angular/core/testing';

import { OAuthServiceService } from './oauth-service.service';

describe('OAuthServiceService', () => {
  let service: OAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
