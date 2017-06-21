import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SearchBarComponent } from './search-bar/search-bar.component';

import { OutputComponent } from './output/output.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    OutputComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
