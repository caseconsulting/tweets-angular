import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

export class TwitterObj {
  constructor(public text: string, public route: string){}
}

@Injectable()
export class OutputService {

  constructor (private http: Http) {}

  //Note:
  //Backticks registers newline chars in the URL, breaking the call to the API
  //Use traditional string concatenation instead :-)
  getOutput(twitterParameters: TwitterObj) {

    let URL = 'http://localhost:3000/'+
    twitterParameters.route +'/'+ twitterParameters.text;

    console.log('%c  sent username: ' + twitterParameters.text
     + ' to the following route: ' + twitterParameters.route, 'color: #3AB54A');

    return this.http.get(URL)
                    .map((response: Response) => <TwitterObj[]>response.json());
  }

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
