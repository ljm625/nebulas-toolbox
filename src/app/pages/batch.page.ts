import { Component } from '@angular/core';

@Component({
  selector: 'app-page-batch',
  templateUrl: './batch.page.html',
  styles  : [
    `
      :host ::ng-deep .logo {
        height: 32px;
        background: rgba(255,255,255,.2);
        margin: 16px;
      }
    `
  ]
})
export class BatchPage {
  isCollapsed = false;
}
