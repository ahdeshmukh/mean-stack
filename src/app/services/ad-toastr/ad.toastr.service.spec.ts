import { TestBed, inject } from '@angular/core/testing';

import { Ad.ToastrService } from './ad.toastr.service';

describe('Ad.ToastrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ad.ToastrService]
    });
  });

  it('should be created', inject([Ad.ToastrService], (service: Ad.ToastrService) => {
    expect(service).toBeTruthy();
  }));
});
