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


@NgModule({
  declarations: [
    AppComponent,
    AppDashboard,
    TableComponent,
    ReviewComponent,
    BatchPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
