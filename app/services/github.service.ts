import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubServiceInjectable{
    constructor(private http:Http){
        // console.log('github service started');
    }
    getUser(){
        return this.http.get('https://api.github.com/users/alphawaseem')
        .map(result => result.json());
    }
}