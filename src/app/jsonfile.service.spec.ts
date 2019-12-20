import { TestBed } from '@angular/core/testing';

import { JsonfileService } from './jsonfile.service';

describe('JsonfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonfileService = TestBed.get(JsonfileService);
    expect(service).toBeTruthy();
  });
});
