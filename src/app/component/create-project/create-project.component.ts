import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { projectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  projectname: string = '';
  expiredate: string = '';
  _id: string = '';
  userid: any = localStorage.getItem('currentUser');
  createdate: Date = new Date();
  scriptstatus:boolean = false;
  script:string = ''

  projectList: projectModel[] = [];

  constructor(private projectService: ProjectService, private router:Router) {
    Auth.currentAuthenticatedUser().then().catch(err=>{
      this.router.navigate(['login']);
    })
  }

  ngOnInit(): void {}

  createProject() {
    const newproject = {
      projectname: this.projectname,
      expiredate: this.expiredate,
      _id: this._id,
      userid: this.userid,
      createdate: this.createdate,
      scriptstatus:this.scriptstatus,
      script:this.script

    };
    this.projectService
      .createProject(newproject)
      .subscribe((project) => this.projectList.push(project));
  }
}
