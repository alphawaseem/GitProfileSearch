import { Component } from '@angular/core';
import { GithubServiceInjectable } from './../services/github.service';
@Component({
    moduleId : module.id,
    selector : 'profile',
    templateUrl : 'profile.component.html'
})
export class ProfileComponent{
    user : Object;
    repos : any[];
    constructor(private github:GithubServiceInjectable){
        github.getUser('alphawaseem').subscribe(user => {
            this.user = user;
            console.log(this.user); 
        });
        github.getRepos('alphawaseem').subscribe( repos => {
            this.repos = repos;
            console.log(repos);
        })
    }
}