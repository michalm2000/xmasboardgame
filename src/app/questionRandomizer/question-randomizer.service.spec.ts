import { TestBed } from '@angular/core/testing';

import { QuestionRandomizerService } from './question-randomizer.service';

describe('QuestionRandomizerService', () => {
  let service: QuestionRandomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionRandomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
