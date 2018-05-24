import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-table',
  template: `
    <button nz-button (click)="addRow()" class="editable-add-btn">Add</button>
    <nz-table
      #editRowTable
      nzBordered
      [nzData]="dataSet">
      <thead>
        <tr>
          <th nzWidth="25%">Name</th>
          <th nzWidth="15%">NAS Amount</th>
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
          <td>
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
                <a (click)="saveEdit(data.key)">Save</a>
                <nz-popconfirm [nzTitle]="'Sure to cancel?'" (nzOnConfirm)="cancelEdit(data.key)">
                  <a nz-popconfirm>Cancel</a>
                </nz-popconfirm>
              </ng-container>
            </div>
            <nz-popconfirm [nzTitle]="'Sure to delete?'" (nzOnConfirm)="deleteRow(data.key)">
              <a nz-popconfirm>Delete</a>
            </nz-popconfirm>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `,
  styles  : [
    `
      .editable-row-operations a {
        margin-right: 8px;
      }
    `
  ]
})
export class TableComponent implements OnInit {
  i = 1;
  editCache = {};
  dataSet = [];
  addRow(): void {
    this.i++;
    this.dataSet = [ ...this.dataSet, {
      key    : `${this.i}`,
      name   : `Edward King ${this.i}`,
      amount    : '32',
      address: `London, Park Lane no. ${this.i}`
    } ];
    this.updateEditCache();
  }

  deleteRow(i: string): void {
    const dataSet = this.dataSet.filter(d => d.key !== i);
    this.dataSet = dataSet;
  }

  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  cancelEdit(key: string): void {
    this.editCache[ key ].edit = false;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[ key ].edit = false;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          data: item
        };
      }
    });
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.dataSet.push({
        key    : i.toString(),
        name   : `Edrward ${i}`,
        amount    : 32,
        address: `London Park no. ${i}`,
      });
    }
    this.i = 5;
    this.updateEditCache();
  }
}
