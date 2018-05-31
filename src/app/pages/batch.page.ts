import {Component} from '@angular/core';

@Component({
  selector: 'app-page-batch',
  templateUrl: './batch.page.html',
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

export class BatchPage {
  isCollapsed = false;
  current = 0;
  size = 'large';
  address_list = [];
  form_data = [];


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


}
