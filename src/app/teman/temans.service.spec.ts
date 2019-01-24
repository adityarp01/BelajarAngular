import { TestBed } from '@angular/core/testing';

import { TemansService } from './temans.service';

describe('TemansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemansService = TestBed.get(TemansService);
    expect(service).toBeTruthy();
  });
});
