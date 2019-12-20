import { TestBed } from '@angular/core/testing';

import { ToastStructuresService } from './toast-structures.service';

describe('ToastStructuresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastStructuresService = TestBed.get(ToastStructuresService);
    expect(service).toBeTruthy();
  });
});
