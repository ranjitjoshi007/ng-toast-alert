import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastRComponent } from './toast-r.component';

describe('ToastRComponent', () => {
  let component: ToastRComponent;
  let fixture: ComponentFixture<ToastRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
