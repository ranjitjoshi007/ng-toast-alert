import { Injectable } from '@angular/core';
import { Transition, SetToastConfig, ConfigOptions } from './structures/toast-structures.service';

@Injectable({
  providedIn: 'root'
})
export class NgToastAlertService {
  constructor(private setToastConditions: SetToastConfig) {
  }
  public toastArray: Array<{ message: string, type: string, transition: string }>
    = new Array<{ message: string, type: string, transition: string }>();

  AddToast(mesage, configOptions: ConfigOptions) {
    this.toastArray.push({ message: mesage, type: configOptions.AlertType, transition: Transition.in });
    console.log(configOptions);
    this.RemoveHide(this.toastArray[this.toastArray.length - 1]);
  }

  RemoveHide(value) {
    setTimeout(() => {
      const index = this.toastArray.indexOf(value);
      this.toastArray[index].transition = Transition.out;
      this.RemoveToast(value);
    }, this.setToastConditions.toastConfig.timeoutMS);
  }

  RemoveToast(value) {
    setTimeout(() => {
      const index = this.toastArray.indexOf(value);
      this.toastArray.splice(index, 1);
    }, 595);
  }

  RemoveCurrentToastManually(index) {
    this.toastArray[index].transition = Transition.out;
    this.RemoveToast(this.toastArray[index]);
  }
}
