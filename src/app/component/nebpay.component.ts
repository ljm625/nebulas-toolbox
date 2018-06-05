import {Component, Input, OnInit} from '@angular/core';

import * as NebPay from 'nebpay.js';
import * as config from '../../config.global';

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
      <p>Function: {{set_function()}}</p>
    </div>
    <div nz-row nzType="flex" nzJustify="center" style="margin-bottom: 10px">
      <p>Args: {{setArgs()}}</p>
    </div>

    <div nz-row nzType="flex" nzJustify="center" style="margin-bottom: 10px">

      <button nz-button class="big-button" nzType="primary" nzSize="large" nzShape="circle" (click)="sendTX()"><i
        class="anticon anticon-check"></i>
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
  @Input() dest = config.batch_distribute_address;
  @Input() data = [];
  @Input() totalNAS = 0;
  @Input() equal = true;
  nebPay = new NebPay();
  function_name = '';
  args = [];

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


  set_function() {
    if (this.equal) {
      this.function_name = "distribute_equal";
    }
    else {
      this.function_name = "custom_distribute";
    }
    return this.function_name;
  }

  ngOnInit() {
    console.log('lalala');
  }

  sendTX() {
    console.log("Start send transaction");
    const to = this.dest;   // Dapp的合约地址
    const value = this.totalNAS;
    const callFunction = this.function_name; // 调用的函数名称
    const callArgs = JSON.stringify(this.args);
    this.nebPay.call(to, value, callFunction, callArgs);
  }

  setArgs() {
    this.args = [];
    if (this.equal) {
      let address = [];
      for (let val of this.data) {
        address = [...address, val.address];
      }
      this.args[0] = address;
    } else {
      let address = [];
      let amount = [];
      for (let val of this.data) {
        address = [...address, val.address];
        amount = [...amount, val.amount];
      }
      this.args[0] = address;
      this.args[1] = amount;
    }
    return JSON.stringify(this.args);
  }

}
