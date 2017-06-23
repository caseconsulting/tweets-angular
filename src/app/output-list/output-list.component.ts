import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Tweet, OutputService} from '../output.service';
import { Account, AccountService } from '../account.service';

@Component({
  selector: 'output-list',
  templateUrl: './output-list.component.html',
  styleUrls: ['./output-list.component.css'],
  providers: [OutputService]

})
export class OutputListComponent implements OnInit, OnChanges {
@Input() handle: string;


  errorMessage: string;
  tweets: Tweet[];
  constructor(private outputService: OutputService, private accountService: AccountService) { }

  getOutput(handle: string, type: string){
    this.outputService.getOutput(handle, type)
    .subscribe(
      tweets => this.tweets = tweets,
      //
      error => this.errorMessage = <any>error
    );
  }
  ngOnInit() {
    this.getOutput(this.handle, 'tweets');

  }
  ngOnChanges() {
    this.getOutput(this.handle, 'tweets');
    console.log("Changes just occured in outputlist")

  }

}
