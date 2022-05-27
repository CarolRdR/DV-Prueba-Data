import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDateModule } from './form-date/form-date.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Md5 } from 'ts-md5';
import { DataModule } from './data/data.module';
import '@popperjs/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormDateModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    DataModule,
  ],
  providers: [DatePipe, Md5],
  bootstrap: [AppComponent],
})
export class AppModule {}
