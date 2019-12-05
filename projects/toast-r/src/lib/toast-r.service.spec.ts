import { TestBed } from '@angular/core/testing';

import { ToastRService } from './toast-r.service';

describe('ToastRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastRService = TestBed.get(ToastRService);
    expect(service).toBeTruthy();
  });
});
