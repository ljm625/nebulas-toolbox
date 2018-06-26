import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppDashboard} from './dashboard.component';
import {TableComponent} from './component/table.component';
import {BatchPage} from './pages/batch.page';
import {ReviewComponent} from './component/review.component';
import {NebpayComponent} from "./component/nebpay.component";
import {SmartPage} from "./pages/smart.page";
import { RouterModule, Routes } from '@angular/router';
import {WelcomePage} from "./pages/welcome.page";


const appRoutes: Routes = [
  { path: 'batch', component: BatchPage },
  { path: 'smart',      component: SmartPage },
  { path: '',
    redirectTo: '/batch',
    pathMatch: 'full'
  },

];


@NgModule({
  declarations: [
    AppComponent,
    AppDashboard,
    TableComponent,
    ReviewComponent,
    BatchPage,
    SmartPage,
    WelcomePage,
    NebpayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
