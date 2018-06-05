import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <nz-layout>
      <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzCollapsedWidth]="0" [nzBreakpoint]="'lg'">
        <div class="logo">
        </div>
        <ul nz-menu [nzTheme]="'dark'" [nzMode]="isCollapsed?'vertical':'inline'">
          <li nz-menu-item><span><i class="anticon anticon-user"></i><span class="nav-text" routerLink="/batch" routerLinkActive="active">NAS Batch distribute</span></span>
          </li>
          <li nz-menu-item><span><i class="anticon anticon-video-camera"></i><span class="nav-text" routerLink="/smart" routerLinkActive="active">NAS Smart distribute</span></span>
          </li>
          <li nz-menu-item><span><i class="anticon anticon-upload"></i><span
            class="nav-text">Nebulas Smart Wallet</span></span></li>
          <li nz-menu-item><span><i class="anticon anticon-user"></i><span class="nav-text">nav 4</span></span></li>
        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header style="background: #fff; padding:0;">
          <p style="margin-left: 20px;font-size: xx-large">NAS Toolbox</p>
        </nz-header>
        <nz-content style="margin:24px 16px 0;">
          <div style="padding:24px; background: #fff; min-height: 720px;">
            <router-outlet></router-outlet>
          </div>
        </nz-content>
        <nz-footer style="text-align: center;">Nebulas Toolbox by Ljm625</nz-footer>
      </nz-layout>
    </nz-layout>
  `,
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
export class AppDashboard {
  isCollapsed = false;
}
