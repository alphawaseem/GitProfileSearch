import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubServiceInjectable{
    constructor(private http:Http){
        // console.log('github service started');
    }
    getUser(user:string){
        return this.http.get(`https://api.github.com/users/${user}`)
        .map(result => result.json());
    }

    getRepos(user:string){
        return this.http.get(`https://api.github.com/users/${user}/repos`)
        .map(result=>result.json());
    }
}