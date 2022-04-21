import { TestBed } from '@angular/core/testing';

import { MemberstorageService } from './memberstorage.service';

describe('MemberstorageService', () => {
  let service: MemberstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
