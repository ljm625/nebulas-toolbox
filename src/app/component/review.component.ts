import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-review',
  template: `
    <nz-list [nzDataSource]="data" [nzRenderItem]="item" [nzItemLayout]="'horizontal'">
      <ng-template #item let-item>
        <nz-list-item>
          <nz-list-item-meta
            [nzTitle]="nzTitle"
            nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            nzDescription="Ant Design, a design language for background applications, is refined by Ant UED Team">
            <ng-template #nzTitle>
              <a href="https://ng.ant.design">{{item.title}}</a>
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
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  ngOnInit(){
    console.log("lalala");
  }

}
