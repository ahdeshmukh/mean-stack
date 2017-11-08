import { TestBed, inject } from '@angular/core/testing';

import { AdHttpService } from './ad-http.service';

describe('AdHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdHttpService]
    });
  });

  it('should be created', inject([AdHttpService], (service: AdHttpService) => {
    expect(service).toBeTruthy();
  }));
});
