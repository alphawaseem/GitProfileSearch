import { Component } from '@angular/core';
import { GithubServiceInjectable } from './../services/github.service';
@Component({
    moduleId : module.id,
    selector : 'profile',
    templateUrl : 'profile.component.html'
})
export class ProfileComponent{
    user : Object;
    constructor(private github:GithubServiceInjectable){
        github.getUser().subscribe(user => {
            this.user = user;
            console.log(this.user);
            
        });
    }
}