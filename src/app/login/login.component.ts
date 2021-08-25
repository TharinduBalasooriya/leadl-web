import { Component, OnInit, Input, inject, Inject, ViewEncapsulation } from '@angular/core';
import { Auth } from 'aws-amplify';
import {Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  async loginWithCognito() {
    try {
      const email = this.email.toString();
      const password = this.password.toString();

      if (email.trim().length == 0) {
        this.error = "Please enter an email"
      } else if (password.trim().length == 0) {
        this.error = "Please enter a password"
      }else {
        this.error = null;

      }



      if (!this.error) {




        var user = await Auth.signIn(this.email.toString(), this.password.toString());
        console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);
        var tokens = user.signInUserSession;




        if (tokens != null) {
          console.log('User authenticated');
          Auth.currentSession().then(result => {
            console.log(result)
          })

          this.router.navigate(['home']);


        }

      }

    }  catch(error) {
      this.error = "Your Authentication information is incorrect.please try again"
      console.log(error);

    }

  }



}
