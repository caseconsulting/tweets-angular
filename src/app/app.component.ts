import { Component, OnInit } from '@angular/core';
import { Tweet } from './output.service';
import * as _ from 'lodash';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedHandle: Tweet;


  //Checks to see that handle isn't undefined
  //assures that undefined parameters 
  changed(changedHandle: any){
    if(changedHandle)
    {
      this.selectedHandle = changedHandle;
    }
  }

}
