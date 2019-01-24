import { TestBed } from '@angular/core/testing';

import { ServerResolveService } from './server-resolve.service';

describe('ServerResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerResolveService = TestBed.get(ServerResolveService);
    expect(service).toBeTruthy();
  });
});
