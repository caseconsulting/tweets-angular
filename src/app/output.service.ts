import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


export class Tweet {

  constructor(public text: string, public route: string){
    }
}

@Injectable()
export class OutputService {
  //express app
  //private jsonUrl = 'http://localhost:3000/tweets/';  // URL to web API


  constructor (private http: Http) {}

  getOutput(handle: string, type: string) {
    let jsonUrl = `http://localhost:3000/${type}/${handle}`;
    console.log(`Calling ${jsonUrl}`);
    return this.http.get(jsonUrl)
                    .map((response: Response) => <Tweet[]>response.json())
                    .do(mapReturn => {
                      console.log('mapReturn ',mapReturn);
                    });
                    //.catch(this.handleError);
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
