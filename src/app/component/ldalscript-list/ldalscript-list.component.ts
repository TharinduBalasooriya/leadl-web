import { Component, OnInit } from '@angular/core';

import { projectModel } from 'src/app/models/project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/service/project.service';
import { LDALScriptService } from 'src/app/service/ldal-script.service';
import { Auth } from 'aws-amplify';
import { LDALscriptModel } from 'src/app/models/ldalScript.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ldalscript-list',
  templateUrl: './ldalscript-list.component.html',
  styleUrls: ['./ldalscript-list.component.css'],
})
export class LDALscriptListComponent implements OnInit {
  projectId: any;
  _id: any;
  scriptName: string = '';

  boundStatus: boolean = false;
  boundedId: string = '';
  content: string = '';
  scriptsByProject: LDALscriptModel[] = [];
  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;
  scriptList: LDALscriptModel[] = [];
  parentMessage = '';

  closeResult = '';
  constructor(
    private ldalScriptService: LDALScriptService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    //@ts-ignore
    private toastrService: ToastrService,
    private router: Router
  ) {
    Auth.currentAuthenticatedUser()
      .then()
      .catch((err) => {
        this.router.navigate(['login']);
      });
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.getAllScripts();
  }

  getAllScripts(): void {
    //projectName:String = ''
    let projectId = this.route.snapshot.paramMap.get('id');

    console.log(projectId);

    this.ldalScriptService
      .getLDALScripts(projectId)
      .subscribe((retrivedLogs) => {
        this.scriptsByProject = retrivedLogs;

      });
  }

  //activates the menu with the coordinates
  //@ts-ignore
  onrightClick(event,scriptId) {
    this.contextmenuX = event.clientX;
    this.contextmenuY = event.clientY;
    this.contextmenu = true;
    this.parentMessage = scriptId;
    this.getAllScripts()
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

  public showSuccess(): void {

    this.toastrService.success('', 'Success!');


  }
  showError(){
    this.toastrService.error('Error', 'Name Required', {
   timeOut: 3000,
 });
}

  createScript() {
    const newScript = {
      _id: this._id,
      scriptName: this.scriptName,
      projectId: this.projectId,
      boundStatus: false,
      logquery:false,
      boundedId: this.boundedId,
      content: this.content,
    };

    this.ldalScriptService.createScript(newScript).subscribe((script) => {
      this.scriptList.push(script);
      this.showSuccess();
      this.getAllScripts();

    });

  }


}
