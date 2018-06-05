import {Component} from '@angular/core';
import * as config from '../../config.global';

@Component({
  selector: 'app-page-smart',
  templateUrl: './smart.page.html',
  styles: [
    `
      :host ::ng-deep .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
      }
    `
  ]
})

export class SmartPage {
  isCollapsed = false;
  current = 0;
  size = 'large';
  address_list = [];
  form_data = [];
  totalNas = 0;
  contract_address = config.batch_distribute_address;



  nextStep() {
    if (this.current < 2) {
      this.current = this.current + 1;

    }
  }

  prevStep() {
    if (this.current > 0) {
      this.current = this.current - 1;

    }
  }

  getFormData($event) {
    console.log($event);
    this.form_data = $event;
  }

  getTotal($event) {
    this.totalNas = $event;
  }

}
