import { Component, OnInit, DoCheck, Input, KeyValueDiffers } from '@angular/core';
import {TwitterObj, OutputService} from '../output.service';

@Component({
  selector: 'output-list',
  templateUrl: './output-list.component.html',
  styleUrls: ['./output-list.component.css'],
  providers: [OutputService]

})
export class OutputListComponent implements OnInit, DoCheck {
  @Input() inputParams: TwitterObj;
  differ: any;
  errorMessage: string;
  items: TwitterObj[];

  constructor(
    private outputService: OutputService, private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create(null);
  }

  getOutput(twitterParameters: TwitterObj){

    this.outputService.getOutput(twitterParameters)
    .subscribe(
      items => this.items = items,
      error => this.errorMessage = <any>error
    );
  }
  ngOnInit() {
    this.getOutput(this.inputParams);
  }

  //This snippet of code is a blessing
  ngDoCheck() {
    var changes = this.differ.diff(this.inputParams);

    if(changes) {
      changes.forEachChangedItem(r => console.log('%c changed '+ r.currentValue, 'color: #38515A'));
      changes.forEachAddedItem(r => console.log('%c added ' + r.currentValue, 'color: #38515A'));
      changes.forEachRemovedItem(r => console.log('%c removed ' + r.currentValue, 'color: #38515A'));
      this.getOutput(this.inputParams);
    }
  }

}
