import { Component, OnInit } from '@angular/core';
import { TwitterObj } from './output.service';
import * as _ from 'lodash';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedInput: TwitterObj;


  //Checks to see that handle isn't undefined
  //assures that undefined parameters
  changed(changedInput: any){
    if(changedInput)
    {
      this.selectedInput = changedInput;
    }
  }

}
