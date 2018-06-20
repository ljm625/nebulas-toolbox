import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-component-table',
  template: `
    <nz-table
      #editRowTable
      nzBordered
      [nzData]="dataSet">
      <thead>
      <tr>
        <th nzWidth="25%">Name</th>
        <th nzWidth="15%" *ngIf="!equalDistribute">NAS Amount</th>
        <th nzWidth="40%">Address</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let data of editRowTable.data">
        <td>
          <div class="editable-cell">
            <div class="editable-cell-text-wrapper">
              <ng-container *ngIf="!editCache[data.key].edit">
                {{data.name}}
              </ng-container>
              <ng-container *ngIf="editCache[data.key].edit">
                <input type="text" nz-input [(ngModel)]="editCache[data.key].data.name">
              </ng-container>
            </div>
          </div>
        </td>
        <td *ngIf="!equalDistribute">
          <ng-container *ngIf="!editCache[data.key].edit">
            {{data.amount}}
          </ng-container>
          <ng-container *ngIf="editCache[data.key].edit">
            <input type="text" nz-input [(ngModel)]="editCache[data.key].data.amount">
          </ng-container>
        </td>
        <td>
          <ng-container *ngIf="!editCache[data.key].edit">
            {{data.address}}
          </ng-container>
          <ng-container *ngIf="editCache[data.key].edit">
            <input type="text" nz-input [(ngModel)]="editCache[data.key].data.address">
          </ng-container>
        </td>
        <td>
          <div class="editable-row-operations">
            <ng-container *ngIf="!editCache[data.key].edit">
              <a (click)="startEdit(data.key)">Edit</a>
            </ng-container>
            <ng-container *ngIf="editCache[data.key].edit">
              <a (click)="saveEdit(data.key);emitTotal();" >Save</a>
              <nz-popconfirm [nzTitle]="'Sure to cancel?'" (nzOnConfirm)="cancelEdit(data.key)">
                <a nz-popconfirm>Cancel</a>
              </nz-popconfirm>
            </ng-container>
          </div>
          <nz-popconfirm [nzTitle]="'Sure to delete?'" (nzOnConfirm)="deleteRow(data.key);emitTotal();">
            <a nz-popconfirm>Delete</a>
          </nz-popconfirm>
        </td>
      </tr>
      </tbody>
    </nz-table>
    <div nz-row nzType="flex" nzJustify="end" style="margin-bottom: 10px">
      <button nz-button (click)="addRow()" class="editable-add-btn" style="display:inline; margin-right: 10px">Add
      </button>
      <input *ngIf="equalDistribute" type="text" nz-input placeholder="Enter Total NAS Amount" (keyup)="emitTotal()"
             [(ngModel)]="totalNAS" style="width:200px;display:inline;">
    </div>

  `,
  styles: [
      `
      .editable-row-operations a {
        margin-right: 8px;
      }

      .anticon-close-circle {
        cursor: pointer;
        color: #ccc;
        transition: color 0.3s;
        font-size: 12px;
      }

      .anticon-close-circle:hover {
        color: #999;
      }

      .anticon-close-circle:active {
        color: #666;
      }

    `
  ]
})
export class TableComponent implements OnInit {
  i = 1;
  editCache = {};
  dataSet = [];
  totalNAS;
  @Input() equalDistribute = true;
  @Output() dataEmit = new EventEmitter();
  @Output() totalEmit = new EventEmitter();


  emitTotal() {
    if(!this.equalDistribute){
      let total = 0;
      for (let val of this.dataSet) {
        total += parseInt(val.amount);
      }
      console.log("total: "+total);
      this.totalEmit.emit(total);
    }
    else{
      this.totalEmit.emit(this.totalNAS);
    }
  }

  addRow(): void {
    this.i++;
    this.dataSet = [...this.dataSet, {
      key: `${this.i}`,
      name: `Account ${this.i}`,
      amount: '0',
      address: `Input NAS address here`
    }];
    this.updateEditCache();
    this.startEdit(this.i.toString());
    this.dataEmit.emit(this.dataSet);
  }

  deleteRow(i: string): void {
    const dataSet = this.dataSet.filter(d => d.key !== i);
    this.dataSet = dataSet;
    this.dataEmit.emit(this.dataSet);
  }

  startEdit(key: string): void {
    this.editCache[key].edit = true;
  }

  cancelEdit(key: string): void {
    this.editCache[key].edit = false;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    this.dataSet[index] = this.editCache[key].data;
    this.editCache[key].edit = false;
    this.dataEmit.emit(this.dataSet);
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[item.key]) {
        this.editCache[item.key] = {
          edit: false,
          data: item
        };
      }
    });
  }

  ngOnInit(): void {
    // for (let i = 0; i < 5; i++) {
    //   this.dataSet.push({
    //     key: i.toString(),
    //     name: `Edrward ${i}`,
    //     amount: 32,
    //     address: `London Park no. ${i}`,
    //   });
    // }
    this.i = 0;
    this.updateEditCache();
  }
}
