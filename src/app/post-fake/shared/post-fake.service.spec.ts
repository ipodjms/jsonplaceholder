import { TestBed } from '@angular/core/testing';

import { PostFakeService } from './post-fake.service';

describe('PostFakeService', () => {
  let service: PostFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
