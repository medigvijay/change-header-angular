import { TestBed, inject } from '@angular/core/testing';

import { WindowServiceService } from './window-service.service';

describe('WindowServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowServiceService]
    });
  });

  it('should be created', inject([WindowServiceService], (service: WindowServiceService) => {
    expect(service).toBeTruthy();
  }));
});
