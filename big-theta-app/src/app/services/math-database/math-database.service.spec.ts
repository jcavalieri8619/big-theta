import { TestBed, inject } from '@angular/core/testing';

import { MathDatabaseService } from './math-database.service';

describe('MathDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathDatabaseService]
    });
  });

  it('should be created', inject([MathDatabaseService], (service: MathDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
