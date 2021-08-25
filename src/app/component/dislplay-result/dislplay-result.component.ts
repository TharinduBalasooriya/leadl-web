import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { LogserviceService } from 'src/app/service/logservice.service';

@Component({
  selector: 'app-dislplay-result',
  templateUrl: './dislplay-result.component.html',
  styleUrls: ['./dislplay-result.component.css']
})
export class DislplayResultComponent implements OnInit {


  fileId:any = this.route.snapshot.paramMap.get('id');
  fileString:string = ''
  projectId: any;
  constructor(private route: ActivatedRoute , private logService:LogserviceService, private router:Router) {
    Auth.currentAuthenticatedUser().then().catch(err=>{
      this.router.navigate(['login']);
    })
   }

  ngOnInit(): void {
    this.readContent();
  }


  readContent() : void {

    const fileId=  this.route.snapshot.paramMap.get('id');
    console.log(fileId)


    this.logService.executeLdelScript(fileId).subscribe(value=>{

      this.fileString = value.result;

    })

  }
}
