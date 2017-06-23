import { Component, OnInit } from '@angular/core';
 import { AccountService } from './account.service';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  providers: [AccountService]
})
export class AppComponent {
  selectedHandle: string;



  changed(changedHandle: any){
    if(changedHandle)
    {
      console.warn('Your handle just changed!', changedHandle);
      this.selectedHandle = changedHandle;
      
    }
  }

}
