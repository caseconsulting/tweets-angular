import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
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
