import { TestBed } from '@angular/core/testing';

import { TaskstorageService } from './taskstorage.service';

describe('TaskstorageService', () => {
  let service: TaskstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
