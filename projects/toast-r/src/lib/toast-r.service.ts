import { Injectable } from '@angular/core';
export enum aligntype {
  topLeft = 'topLeft',
  topRight = 'topRight',
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomRight'
}

export interface ToastConfig {
  timeoutMS: number;
  align?: aligntype;
}

export class SetToastConfig {
  toastConfig: ToastConfig = { timeoutMS: 3000, align: aligntype.topRight };
  constructor(providers?: ToastConfig) {
    if (providers) {
      for (const key in providers) {
        if (this.toastConfig.hasOwnProperty(key)) {
          this.toastConfig[key] = providers[key];
        }
      }
    }

  }
}

@Injectable({
  providedIn: 'root'
})
export class ToastRService {
  constructor(private toastcon: SetToastConfig) {
  }
  public toastArray: Array<{ message: string, type: string, transition: string }>
    = new Array<{ message: string, type: string, transition: string }>();
  AddToast(mesage, custtype: string) {
    console.log(this.toastArray);
    this.toastArray.push({ message: mesage, type: custtype, transition: 'in' });
    this.RemoveHide(this.toastArray.length - 1, this.toastArray[this.toastArray.length - 1]);
  }
  RemoveHide(id, value) {
    setTimeout(() => {
      const index = this.toastArray.indexOf(value);
      this.toastArray[index].transition = 'out';
      this.RemoveToast(value);
    }, this.toastcon.toastConfig.timeoutMS);
  }
  RemoveToast(value) {
    setTimeout(() => {
      const index = this.toastArray.indexOf(value);
      this.toastArray.splice(index, 1);
    }, 595);
  }
}
