import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

export class Account{
    handle: string;

}

@Injectable()
    export class AccountService  {

    private account: BehaviorSubject<Account>;

   constructor() {
       this.account = <BehaviorSubject<Account>>new BehaviorSubject({});
   }
   getAccount(){
       return this.account.asObservable();
   }

   setAccount(username: string){
       this.account.next({handle: username})
   }
}

//https://stackoverflow.com/questions/42598780/using-service-to-share-data-between-components
