import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './components/profile.component';
import { GithubServiceInjectable } from './services/github.service';
import { NavBarComponent } from './components/navbar/navbar.component';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule , HttpModule],
  declarations: [ AppComponent,ProfileComponent,NavBarComponent ],
  bootstrap:    [ AppComponent ],
  providers : [GithubServiceInjectable]
})
export class AppModule { }
