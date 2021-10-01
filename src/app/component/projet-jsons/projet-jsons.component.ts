import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogModel } from 'src/app/models/log.model';
import { customJsonpModel } from 'src/app/models/customJson.model';
import { LogserviceService } from 'src/app/service/logservice.service';
import { ProjectService } from 'src/app/service/project.service';
import { CunstomJsonService} from 'src/app/service/cunstom-json.service';

@Component({
  selector: 'app-projet-jsons',
  templateUrl: './projet-jsons.component.html',
  styleUrls: ['./projet-jsons.component.css']
})
export class ProjetJsonsComponent implements OnInit {
  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;
  closeResult = '';
  content = '';
  projectId:any = '' ;
  scriptstatus = false;

  logsByProject: LogModel[] = [];
  jsonsByProject : customJsonpModel [] = []
  constructor(
    private modalService: NgbModal,
    private logService: LogserviceService,
    private projectService: ProjectService,
    private customJsonService :CunstomJsonService,
    private route: ActivatedRoute,
    private router:Router
  ) {

  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.getLogJsons();
    this.getCustomJsons();
  }


  //activates the menu with the coordinates
  //@ts-ignore
  onrightClick(event) {
    this.contextmenuX = event.clientX;
    this.contextmenuY = event.clientY;
    this.contextmenu = true;

  }
  //disables the menu
  disableContextMenu() {
    this.contextmenu = false;
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
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

  /**
   * TODO:Rename Varaibles
   */
  getLogJsons(): void {
    let projectId = this.route.snapshot.paramMap.get('id');
    this.projectService
      .getProjectDetails(this.projectId)
      .subscribe((projects) => {
        console.log(projects.scriptStatus)
        if( projects.scriptStatus  == true){
          this.logService.getLogsByProject(projectId).subscribe((retrivedLogs) => {
            this.logsByProject = retrivedLogs;
          });
        }
      });


  }

getCustomJsons(): void {
  let projectId = this.route.snapshot.paramMap.get('id');
  this.customJsonService
  .getCustomJsons(projectId)
  .subscribe((retrivedLogs) => {
    this.jsonsByProject = retrivedLogs;

  });
}







}
