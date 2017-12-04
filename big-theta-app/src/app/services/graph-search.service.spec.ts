import { TestBed, inject } from '@angular/core/testing';

import { GraphSearchService } from './graph-search.service';

describe('GraphSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphSearchService]
    });
  });

  it('should be created', inject([GraphSearchService], (service: GraphSearchService) => {
    expect(service).toBeTruthy();
  }));
});
