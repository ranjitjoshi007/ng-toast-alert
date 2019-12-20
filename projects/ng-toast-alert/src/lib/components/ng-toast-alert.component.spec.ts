import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToastAlertComponent } from './ng-toast-alert.component';

describe('NgToastAlertComponent', () => {
  let component: NgToastAlertComponent;
  let fixture: ComponentFixture<NgToastAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgToastAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToastAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
