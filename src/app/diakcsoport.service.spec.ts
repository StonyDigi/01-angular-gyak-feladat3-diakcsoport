import { TestBed } from '@angular/core/testing';

import { DiakcsoportService } from './diakcsoport.service';

describe('DiakcsoportService', () => {
  let service: DiakcsoportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiakcsoportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
