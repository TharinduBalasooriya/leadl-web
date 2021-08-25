import { Component, OnInit } from '@angular/core';
import { LogModel } from '../../models/log.model';
import { ContentModel } from '../../models/content.model';
import { LogserviceService } from '../../service/logservice.service';
import { Auth } from 'aws-amplify';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/service/project.service';
import { projectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-loglist',
  templateUrl: './loglist.component.html',
  styleUrls: ['./loglist.component.css'],
})
export class LoglistComponent implements OnInit {
  projectId: any;
  closeResult = '';
  logsByProject: LogModel[] = [];
  projects: string[] = [];
  logContent?: ContentModel;
  clickedId: string = '';
  projectname: string = '';
  userid: string = '';
  expiredate: string = '';
  createdate: any;
  project?: projectModel;

  constructor(
    private logService: LogserviceService,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: NgbModal,
    private projectService: ProjectService,
    private router:Router
  ) {
    Auth.currentAuthenticatedUser().then().catch(err=>{
      this.router.navigate(['login']);
    })
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.getAllLogs();
    this.getaProjectById();
  }

  getAllLogs(): void {
    //projectName:String = ''
    let projectId = this.route.snapshot.paramMap.get('id');

    console.log(projectId);

    this.logService.getLogsByProject(projectId).subscribe((retrivedLogs) => {
      this.logsByProject = retrivedLogs;
      console.log(this.logsByProject);
    });
  }

  getProjects(): void {
    Auth.currentUserInfo().then((result) => {
      let data = result;

      this.logService
        .getProjects()
        .subscribe((project) => (this.projects = project));
    });
  }

  getLogList(): void {}

  activate(id: string) {
    this.logService.activateLogFile(id).subscribe((result) => {
      alert(result);
    });
  }
  open(content: any, id: string) {
    this.clickedId = id;
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getaProjectById(): void {
    this.projectService
      .getProjectDetails(this.projectId)
      .subscribe((projects) => {
        this.projectname = projects.projectname;
        this.expiredate = projects.expiredate;
        this.createdate = projects.createdate;
        console.log(projects);
      });
  }
}
