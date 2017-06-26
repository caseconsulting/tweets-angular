import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TwitterObj, OutputService} from '../output.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  @Output() changed = new EventEmitter<TwitterObj>();

  //user input that'll eventually be passed over to API includes user and route
  inputData: TwitterObj;

  constructor() {
    this.inputData = new TwitterObj('no text', 'no route');
  }
  ngOnInit() {}

  Click(input:string, routeName: string) {
    this.inputData.text = input;
    this.inputData.route = routeName;
    this.changed.emit(this.inputData);
  }
}
