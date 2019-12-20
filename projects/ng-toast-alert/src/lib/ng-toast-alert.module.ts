import { NgModule } from '@angular/core';
import { NgToastAlertComponent } from './components/ng-toast-alert.component';
import { CommonModule } from '@angular/common';
import { SetToastConfig, ToastStructuresService } from './structures/toast-structures.service';
import { NgToastAlertService } from './ng-toast-alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NgToastAlertComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [NgToastAlertComponent],
  providers: [NgToastAlertService, ToastStructuresService, { provide: SetToastConfig, useValue: SetToastConfig }]
})
export class NgToastAlertModule { }
