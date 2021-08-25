import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { projectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-display-script',
  templateUrl: './display-script.component.html',
  styleUrls: ['./display-script.component.css']
})
export class DisplayScriptComponent implements OnInit {


  projects:string[] = []
  projectList?:projectModel[];
  projectname: string = '';
  userid: string = '';
  expiredate: string = '';
  createdate: any;
  project?: projectModel;
  projectId: any;
  script:any;

  constructor(private projectService:ProjectService,private route: ActivatedRoute, private router:Router
    ) {
    Auth.currentAuthenticatedUser().then().catch(err=>{
      this.router.navigate(['login']);
    })
   }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');


    this.getSavedScript()
  }

  getSavedScript(){
    this.projectService
      .getProjectDetails(this.projectId)
      .subscribe((projects) => {
        this.projectname = projects.projectname;
        this.expiredate = projects.expiredate;
        this.createdate = projects.createdate;
        this.script=atob(projects.script);
      });
  }

}
