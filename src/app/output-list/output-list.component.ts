import { Component, OnInit } from '@angular/core';
import {Tweet, OutputService} from '../output.service';

@Component({
  selector: 'output-list',
  templateUrl: './output-list.component.html',
  styleUrls: ['./output-list.component.css'],
  providers: [OutputService]
})
export class OutputListComponent implements OnInit {

  errorMessage: string;
  tweets: Tweet[];
  constructor(private outputService: OutputService) { }


  getOutput(){
    this.outputService.getOutput()
    .subscribe(
      tweets => this.tweets = tweets,
      //
      error => this.errorMessage = <any>error
    );
  }
  ngOnInit() { this.getOutput();
  }

}
