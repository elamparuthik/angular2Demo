import { Component, OnInit } from '@angular/core';

import {Headers, Http, Response,RequestOptions} from '@angular/http';

import { Hero }        from '../model/hero';
import { HeroService } from '../services/hero.service';
// Import RxJs required methods
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css' ]
  
})

export class AboutComponent implements OnInit {

	  private headers = new Headers({'Content-Type': 'application/json'});
  	private myUrl = 'http://server1:8585/mastersV1.2/api/getModelByMake.json';  // URL to web api
    private payLoad = {};
    

  	constructor(private http:Http) {}

  	ngOnInit(): void {
        this.http.post(this.myUrl, this.payLoad, {headers: this.headers})
        .toPromise()
        .then((res:Response) =>{
           console.log("res::" + JSON.stringify(res.json()));
        }).catch(this.handleError);
    }

    private handleError(error: any){
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}