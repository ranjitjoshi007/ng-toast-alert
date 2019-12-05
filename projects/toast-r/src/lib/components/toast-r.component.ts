import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ToastRService, SetToastConfig, aligntype } from '../toast-r.service';

@Component({
  selector: 'lib-toast-r',
  templateUrl: './toast-r.component.html',
  styleUrls: ['./toast-r.component.css'],
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
export class ToastRComponent implements OnInit, OnChanges {


  constructor(public tService: ToastRService, public config: SetToastConfig) {
    if (!(config.toastConfig)) {
      config.toastConfig = { timeoutMS: 3000, align: aligntype.topRight };
    }
  }
  ngOnInit() {

  }
  ngOnChanges() {
    console.log(this.tService);
  }
}
