//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; //try taking this out and check if it still works
import { HttpModule, JsonpModule } from '@angular/http'; //Do we need the JsonpModule?
import { RouterModule, Routes } from '@angular/router';

//Our imports
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { OutputComponent } from './output/output.component';
import { OutputListComponent } from './output-list/output-list.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';
import { routing } from './app.routes';





@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    OutputComponent,
    OutputListComponent,
    FooterComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
