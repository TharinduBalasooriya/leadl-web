import { Component, OnInit } from '@angular/core';
import {Auth} from 'aws-amplify';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email:string = '';
  password:string = '';
  givenName:string = '';
  familyName:string = '';
  error: string | null = null;
  message: string | null = null;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(){

    try {

      const email = this.email.toString();
      const password = this.password.toString();
      const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/


      if (email.trim().length == 0) {
        this.error = "Please enter an email"
      } else if (password.trim().length == 0) {
        this.error = "Please enter a password"
      }

        else if(password.trim().length > 0){

        if(!strongRegex.test(password)){
          this.error = "Password must contain more than 8 characters, atleast 1 special character, atleast 1 uppercase character, atleast 1 lowercase character,  atleast 1 numeric  character"
        }

      }else {
        this.error = null;
      }
      if (!this.error) {
      const user = Auth.signUp({
        username: this.email,
        password: this.password,
        attributes: {
          email: this.email,
          given_name: this.givenName,
          family_name: this.familyName
        }
      });



      console.log({ user });

      this.message = "Please check your email for confirmation"
      // this.router.navigate(['login']);
    }
      }catch (error) {
      console.log('error signing up:', error);
    }
  }

}
