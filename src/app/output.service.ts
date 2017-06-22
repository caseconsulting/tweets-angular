import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


export class Tweet {
  constructor(public text: string){}
}

@Injectable()
export class OutputService {
  private jsonUrl = '../assets/tweetsTest.json';  // URL to web API


  constructor (private http: Http) {}

  getOutput() {
    return this.http.get(this.jsonUrl)
                    .map((response: Response) => <Tweet[]>response.json().data)
                    .do(mapReturn => {
                      console.log('mapReturn ',mapReturn);
                    })
                    .catch(this.handleError);
  }
  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
