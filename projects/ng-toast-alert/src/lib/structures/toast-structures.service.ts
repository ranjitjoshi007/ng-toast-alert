import { Injectable } from '@angular/core';
export enum AlertType {
    success = 'success',
    danger = 'danger'
}

export enum Transition {
    in = 'in',
    out = 'out'
}
export interface ToastConfig {
    timeoutMS: number;
    align?: AlignType;
}

export enum AlignType {
  topLeft = 'topLeft',
  topRight = 'topRight',
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomRight'
}

export class SetToastConfig {
  toastConfig: ToastConfig = { timeoutMS: 3000, align: AlignType.topRight };
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
export interface ConfigOptions {
  AlertType?: 'success' | 'danger';
}
@Injectable({
  providedIn: 'root'
})
export class ToastStructuresService {

  constructor() { }
}
