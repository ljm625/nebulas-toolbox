import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-review',
  template: `
    <nz-list [nzDataSource]="form_data" [nzRenderItem]="item" [nzItemLayout]="'horizontal'">
      <ng-template #item let-item>
        <nz-list-item>
          <nz-list-item-meta
            [nzTitle]="nzTitle"
            nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            [nzDescription]="nzDescription">
            <ng-template #nzTitle>
              <a >{{item.name}}</a>
            </ng-template>
            <ng-template #nzDescription>
                <p style="display: inline">{{item.address}}
                </p>
                <p style="display: inline; float:right" align="right" *ngIf="equalDistribute">{{totalNAS/(form_data.length)}} NAS</p>
                <p style="display: inline; float:right" align="right" *ngIf="!equalDistribute">{{item.amount}} NAS</p>
            </ng-template>
          </nz-list-item-meta>
        </nz-list-item>
      </ng-template>
    </nz-list>

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

    `
  ]
})
export class ReviewComponent implements OnInit {
  @Input() form_data = [];
  @Input() equalDistribute = false;
  @Input() totalNAS = 0;
  data = [
    {
      name: 'Account 1',
      address: '',
      amount: 500
    },
    {
      name: 'Account 2',
      address: '',
      amount: 500
    },
    {
      name: 'Account 3',
      address: '',
      amount: 500
    },
    {
      name: 'Account 4',
      address: '',
      amount: 500
    }
  ];

  ngOnInit(){
    console.log("lalala");
  }

}
