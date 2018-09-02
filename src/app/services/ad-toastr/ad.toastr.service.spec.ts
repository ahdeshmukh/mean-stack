import { TestBed, inject } from '@angular/core/testing';

import { AdToastrService } from './ad.toastr.service';

describe('Ad.ToastrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdToastrService]
    });
  });

  it('should be created', inject([AdToastrService], (service: AdToastrService) => {
    expect(service).toBeTruthy();
  }));
});
