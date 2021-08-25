import { Component, OnInit } from '@angular/core';
import { LogserviceService } from '../../service/logservice.service';
import { LogModel } from '../../models/log.model';
import { Auth } from 'aws-amplify';
import { ContentModel } from '../../models/content.model';
import { ProjectService } from '../../service/project.service';
import { projectModel } from 'src/app/models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  logs: LogModel[] = [];
  distinctLogs: LogModel[] = [];
  projects: string[] = [];
  projectList?: projectModel[];
  logContent?: ContentModel;
  constructor(
    private logService: LogserviceService,
    private projectService: ProjectService,
    private router:Router
  ) {}

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then(() => {

      this.getProjectsV2();
    }).catch(err=>{
      console.log(err)
      this.router.navigate(['login']);
    });
  }

  getLogs(): void {
    Auth.currentUserInfo().then((result) => {
      let data = result;
      this.logService
        .getAllLogs(data.attributes.given_name)
        .subscribe((logs) => (this.logs = logs));
    });
  }

  getProjects(): void {
    this.logService
      .getProjects()
      .subscribe((project) => (this.projects = project));
  }

  getProjectsV2(): void {


    Auth.currentSession().then(result=>{
      let token =  result.getAccessToken().getJwtToken()
      this.projectService.getProjects().subscribe((project)=>{
        this.projectList = project
      })

    })

  }


}
