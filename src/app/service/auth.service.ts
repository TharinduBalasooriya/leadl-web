import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Hub } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  curretnUser ?:string
  // async getUserName() {
  //
  //   // Auth.currentUserInfo().then(result=>{
  //   //   let data = result;
  //   //   this.curretnUser = data.attributes.given_name
  //   //   console.log(this.curretnUser)
  //   //   return this.curretnUser
  //   // })
  //   return Auth.currentSession();
  //
  //
  // }

  setUser(){
    Auth.currentUserInfo().then(result=>{
      localStorage.setItem('currentUser',result.username);
    })
  }

  //  getToken():string|any{
  //   Auth.currentSession().then(result=>{
  //     let accessToken = result.getAccessToken().getJwtToken()
  //     return new Promise
  //   })
  //}
}
