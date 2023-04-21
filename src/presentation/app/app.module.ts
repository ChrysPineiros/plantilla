import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from 'src/data/data.module';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { Service } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    DxDataGridModule,
    DxButtonModule
  ],
  providers: [
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
