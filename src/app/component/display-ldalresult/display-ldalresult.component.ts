import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { LogserviceService } from 'src/app/service/logservice.service';

@Component({
  selector: 'app-display-ldalresult',
  templateUrl: './display-ldalresult.component.html',
  styleUrls: ['./display-ldalresult.component.css']
})
export class DisplayLDALresultComponent implements OnInit {

 
  scriptId:any = this.route.snapshot.paramMap.get('id');
  fileString:string = ''
  projectId: any;
  constructor(private route: ActivatedRoute , private logService:LogserviceService, private router:Router) {
    // Auth.currentAuthenticatedUser().then().catch(err=>{
    //   this.router.navigate(['login']);
    // })
   }

  ngOnInit(): void {
    this.readContent();
  }


  readContent() : void {

    const scriptId=  this.route.snapshot.paramMap.get('id');
    console.log(scriptId)


    this.logService.executeLdalScript(scriptId).subscribe(value=>{

      this.fileString = value.Result;

    })

  }

}
