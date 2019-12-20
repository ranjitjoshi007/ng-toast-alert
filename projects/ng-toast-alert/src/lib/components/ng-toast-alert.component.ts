import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgToastAlertService } from '../ng-toast-alert.service';
import { SetToastConfig, AlignType } from '../structures/toast-structures.service';
@Component({
  selector: 'lib-ng-toast-alert',
  templateUrl: './ng-toast-alert.component.html',
  styleUrls: ['./ng-toast-alert.component.css'],
  animations: [
    trigger('FadeAnimation', [
      transition('void => in', [
        style({ opacity: 0, left: 0 }),
        animate(600, style({ opacity: 1 }))
      ]),
      transition('in => out', [
        animate(600, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NgToastAlertComponent implements OnInit {

  constructor(public toastService: NgToastAlertService, public config: SetToastConfig) {
    if (!(config.toastConfig)) {
      config.toastConfig = { timeoutMS: 3000, align: AlignType.topRight };
    }
  }
  ngOnInit() {
  }
  RemoveCurrentToast(index) {
    console.log(index);
    this.toastService.RemoveCurrentToastManually(index);
  }
}
