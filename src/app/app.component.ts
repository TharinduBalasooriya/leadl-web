import {Component, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {ProjectService} from "./service/project.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Auth} from "aws-amplify";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'LeadL';
  collapsed = false;
  navbar = true;
  loginRoute = "/login";
  signupRoute = "/sign-up"

  checkIfCollapsed(event:boolean){
    this.collapsed = event;
  }

  constructor(private router: Router) {
   this.router.events.subscribe((ev: any)=>{
      if(ev instanceof  NavigationEnd){
       if(this.router.url == this.loginRoute || this.router.url == this.signupRoute){
         this.navbar = false;
       }else{
         this.navbar = true;
       }
      }
   })
  }
  ngOnInit(){}

}
