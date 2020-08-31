import { TestBed } from '@angular/core/testing';

import { PkSubscribeService } from './pk-subscribe.service';

describe('PkSubscribeService', () => {
  let service: PkSubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkSubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
