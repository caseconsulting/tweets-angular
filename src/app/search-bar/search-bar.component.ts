import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Account, AccountService } from '../account.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() changed = new EventEmitter<string>();

  private account: Account;
  constructor(private accountService:AccountService) { }

  ngOnInit() {

  }

  Click(input:string) {
  this.setAccount(input);
  this.changed.emit(input);
  //console.log('Username sent: '+input);


  }

  setAccount(handle: string){
    this.accountService.setAccount(handle);
}



}
