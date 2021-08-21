import { TestBed } from '@angular/core/testing';

import { PhotoDetailResolver } from './photo-detail.resolver';

describe('PhotoDetailResolver', () => {
  let resolver: PhotoDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhotoDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
