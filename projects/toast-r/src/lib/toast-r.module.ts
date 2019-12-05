import { NgModule } from '@angular/core';
import { ToastRComponent } from './components/toast-r.component';
import { ToastRService, SetToastConfig } from './toast-r.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToastRComponent],
  imports: [CommonModule],
  exports: [ToastRComponent],
  providers: [ToastRService,
    { provide: SetToastConfig, useValue: SetToastConfig }]
})
export class ToastRModule { }
