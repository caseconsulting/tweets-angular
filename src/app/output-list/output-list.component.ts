import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Tweet, OutputService} from '../output.service';

@Component({
  selector: 'output-list',
  templateUrl: './output-list.component.html',
  styleUrls: ['./output-list.component.css'],
  providers: [OutputService]

})
export class OutputListComponent implements OnInit, OnChanges {
@Input() handle: Tweet;


  errorMessage: string;
  items: Tweet[];
  constructor(private outputService: OutputService) { }

  getOutput(handle: string, type: string){
    console.log('calling get output')
    this.outputService.getOutput(handle, type)
    .subscribe(
      items => this.items = items,
      error => this.errorMessage = <any>error
    );
    console.log(this.items);
  }
  ngOnInit() {
    this.getOutput(this.handle.text, this.handle.route);
    this.items = [];

  }
  ngOnChanges() {
    this.getOutput(this.handle.text, this.handle.route);
    console.log("Changes just occured in outputlist")

  }
  
}
