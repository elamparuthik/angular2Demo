import { Component, OnInit, Injectable, Inject } from '@angular/core';

import {Headers, Http, Response,RequestOptions} from '@angular/http';

import { Hero }        from '../model/hero';
import { HeroService } from '../services/hero.service';
// Import RxJs required methods
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

	  private headers = new Headers({'Content-Type': 'application/json'});
  	private myUrl = 'http://server1:8585/mastersV1.2/api/getModelByMake.json';  // URL to web api
    private payLoad = {};
    

  	constructor(private http:Http) {}

  	ngOnInit(): void {
      //alert("dfssdfsdf");
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