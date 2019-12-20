import { TestBed } from '@angular/core/testing';

import { NgToastAlertService } from './ng-toast-alert.service';

describe('NgToastAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgToastAlertService = TestBed.get(NgToastAlertService);
    expect(service).toBeTruthy();
  });
});
