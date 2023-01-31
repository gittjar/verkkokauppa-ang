import { TestBed } from '@angular/core/testing';

import { MaterialstoreService } from './materialstore.service';

describe('MaterialstoreService', () => {
  let service: MaterialstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
