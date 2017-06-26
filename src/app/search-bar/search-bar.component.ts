import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Tweet, OutputService} from '../output.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  @Output() changed = new EventEmitter<Tweet>();

  tweet: Tweet;
  constructor() {
    this.tweet = new Tweet('no text', 'no route');
  }
  ngOnInit() {

  }

  Click(input:string, routeName: string) {

    this.tweet.text = input;
    this.tweet.route = routeName;
    this.changed.emit(this.tweet);



  }





}
