import { TestBed } from '@angular/core/testing';

import { SingerManagerService } from './singer-manager.service';

describe('SingerManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingerManagerService = TestBed.get(SingerManagerService);
    expect(service).toBeTruthy();
  });
});
