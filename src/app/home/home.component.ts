import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from "../service/auth.service";
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient , private authService:AuthService,private router: Router) { }

  ngOnInit(): void {


    Auth.currentAuthenticatedUser().then(result=>{

      this.setUser();
      console.log(result)

    }).catch(err =>{
      this.router.navigate(['login']);
    })




}

  setUser(){
    this.authService.setUser();
  }

}
