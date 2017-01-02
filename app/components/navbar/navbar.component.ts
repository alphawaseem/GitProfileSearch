import {Component} from '@angular/core';

class NavItem{
    constructor(public name:string,public url:string){}
}

@Component({
    moduleId : module.id,
    selector : 'nav-bar',
    templateUrl : 'navbar.component.html'
})
export class NavBarComponent {
    projectName : string;
    
    constructor(){
        this.projectName = "GitHubProfile";
    }

}