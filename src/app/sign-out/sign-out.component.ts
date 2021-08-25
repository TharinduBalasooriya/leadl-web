import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css'],
})
export class SignOutComponent implements OnInit {
  constructor(private router: Router) {}

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
}
