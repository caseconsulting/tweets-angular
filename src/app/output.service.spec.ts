import { TestBed, inject } from '@angular/core/testing';

import { OutputService } from './output.service';

describe('OutputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutputService]
    });
  });

  it('should be created', inject([OutputService], (service: OutputService) => {
    expect(service).toBeTruthy();
  }));
});
