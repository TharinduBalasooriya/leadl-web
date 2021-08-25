import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss']
})
export class AlarmsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then(()=>{

    }).catch(err=>{
      console.log(err)
      this.router.navigate(['login']);
    })
  }

}
