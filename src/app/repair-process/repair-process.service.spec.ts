import { TestBed } from '@angular/core/testing';

import { RepairProcessService } from './repair-process.service';

describe('RepairProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairProcessService = TestBed.get(RepairProcessService);
    expect(service).toBeTruthy();
  });
});
