import { Component } from '@angular/core';
import { GithubServiceInjectable } from './../services/github.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
    moduleId : module.id,
    selector : 'profile',
    templateUrl : 'profile.component.html'
})
export class ProfileComponent{
    user : Object;
    repos : any[];
    constructor(private github:GithubServiceInjectable){
    }

    searchUser(username:string){
        this.github.getUser(username).subscribe(user => {
            this.user = user;
        });
        this.github.getRepos(username).subscribe( repos => {
            this.repos = repos;
        })
    }
}