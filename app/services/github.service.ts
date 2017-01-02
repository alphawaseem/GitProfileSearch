import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubServiceInjectable{
    client_id : string;
    client_secret : string;
    constructor(private http:Http){
        this.client_id = '14e024d6540547e19f02';
        this.client_secret='b0908c99baa3c0cad639fdda9c709cf95d5a3dd4';

    }
    getUser(user:string){
        return this.http.get(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        .map(result => result.json());
    }

    getRepos(user:string){
        return this.http.get(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        .map(result=>result.json());
    }
}