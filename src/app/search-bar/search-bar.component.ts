import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() changed = new EventEmitter<string>();


  ngOnInit() {

  }

  Click(input:string) {
  this.changed.emit(input);
  //console.log('Username sent: '+input);


  }





}
