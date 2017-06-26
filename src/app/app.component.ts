import { Component, OnInit } from '@angular/core';
import { Tweet } from './output.service';
import * as _ from 'lodash';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedHandle: Tweet;



  changed(changedHandle: any){
    if(changedHandle)
    {
      console.warn('Your handle just exists!', changedHandle);
      this.selectedHandle = changedHandle;
    }
  }

}
