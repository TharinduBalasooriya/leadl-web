import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { ThemeserviceService} from "../service/themeservice.service";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css'],
})
export class SignOutComponent implements OnInit {
  constructor(private router: Router,private themeservice:ThemeserviceService ) {}

  ngOnInit(): void {}


  async signOut() {
    try {
      localStorage.clear();
      await Auth.signOut();
      this.router.navigate(['login']);
    } catch (error) {
      console.log('error signing out: ', error);
    }

  }

  getCurrrentUser() {
    Auth.currentUserInfo().then((result) => {
      console.log(result);
    });
  }
  get light() {
    return this.themeservice.theme === 'light';
  }

  set light(enabled: boolean) {
    // @ts-ignore
    this.themeservice.theme = enabled ? 'light' : null;
  }
}
