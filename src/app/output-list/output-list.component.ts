import { Component, OnInit, DoCheck, Input, KeyValueDiffers } from '@angular/core';
import {Tweet, OutputService} from '../output.service';

@Component({
  selector: 'output-list',
  templateUrl: './output-list.component.html',
  styleUrls: ['./output-list.component.css'],
  providers: [OutputService]

})
export class OutputListComponent implements OnInit, DoCheck {
  @Input() handle: Tweet;
  differ: any;
  errorMessage: string;
  items: Tweet[];

  constructor(private outputService: OutputService, private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create(null);
  }

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
  ngDoCheck() {
    //console.log("Changes just occured in outputlist " +this.handle.text +' '+ this.handle.route);
    var changes = this.differ.diff(this.handle);
    if(changes) {
			console.log('changes detected');
			changes.forEachChangedItem(r => console.log('changed ', r.currentValue));
			changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
			changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
      this.getOutput(this.handle.text, this.handle.route);
		} else {
			console.log('nothing changed');
		}



  }

}
