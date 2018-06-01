import {Component, Input, OnInit} from '@angular/core';

import * as NebPay from 'nebpay.js';
@Component({
  selector: 'app-component-nebpay',
  template: `
    <div nz-row nzType="flex" nzJustify="center" style="font-size: xx-large">
      <p style="margin-bottom: 0.2em">Transaction Summary</p>
    </div>
    <div nz-row nzType="flex" nzJustify="center" style="margin-bottom: 10px;font-size: large">
      <p style="margin-bottom: 0.2em">Total Amount: <b>{{totalNAS}} NAS</b></p>
    </div>
    <div nz-row nzType="flex" nzJustify="center" style="margin-bottom: 10px;font-size: large">
      <p style="margin-bottom: 0.2em">To: <b>{{dest}}</b></p>
    </div>
    <div nz-row nzType="flex" nzJustify="center" style="margin-bottom: 10px">
      <p>Data: djiwjdworijskxjiwjrodjck</p>
    </div>

    <div nz-row nzType="flex" nzJustify="center" style="margin-bottom: 10px">

      <button nz-button class="big-button" nzType="primary" nzSize="large" nzShape="circle"><i class="anticon anticon-check"></i>
      </button>
    </div>
  `,
  styles: [
      `
      :host ::ng-deep .demo-infinite-container {
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        overflow: auto;
        padding: 8px 24px;
        height: 300px;
      }

      :host ::ng-deep .demo-loading {
        position: absolute;
        bottom: -40px;
        left: 50%;
      }

      .big-button {
        width: 100px;
        height: 100px;
        font-size: -webkit-xxx-large;
      }
    `
  ]
})
export class NebpayComponent implements OnInit {
  @Input() dest = "";
  @Input() data = [];
  @Input() totalNAS = 0;


  // data = [
  //   {
  //     name: 'Account 1',
  //     address: '',
  //     amount: 500
  //   },
  //   {
  //     name: 'Account 2',
  //     address: '',
  //     amount: 500
  //   },
  //   {
  //     name: 'Account 3',
  //     address: '',
  //     amount: 500
  //   },
  //   {
  //     name: 'Account 4',
  //     address: '',
  //     amount: 500
  //   }
  // ];

  ngOnInit() {
    console.log("lalala");
    var np = new NebPay();
    np.pay("ssss");
  }

}
