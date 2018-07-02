import {Component} from '@angular/core';
import * as config from '../../config.global';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './welcome.page.html',
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

export class WelcomePage {
}
