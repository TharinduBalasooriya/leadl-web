import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LDALscriptModel } from 'src/app/models/ldalScript.model';
import { LogModel } from 'src/app/models/log.model';
import { customJsonpModel } from 'src/app/models/customJson.model';
import { LDALScriptService } from 'src/app/service/ldal-script.service';
import { LogserviceService } from 'src/app/service/logservice.service';
import { CunstomJsonService } from 'src/app/service/cunstom-json.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css'],
})
export class ContextmenuComponent implements OnInit {
  projectId: any;
  closeResult = '';
  logsByProject: LogModel[] = [];
  projects: string[] = [];
  jsonsByProject: customJsonpModel[] = [];

  _id: any;
  scriptName: string = '';
  boundStatus: boolean = false;
  boundedId: string = '';
  scriptcontent: string = '';
  logQuery: boolean = false;
  scriptList: LDALscriptModel[] = [];
  msgTrue = false;

  scriptsByProject: LDALscriptModel[] = [];
  //@ts-ignore
  @Input() childMessage: string;
  @Input() x = -1;
  @Input() y = -10;

  constructor(
    private modalService: NgbModal,
    private logService: LogserviceService,
    private route: ActivatedRoute,
    private ldalScriptService: LDALScriptService,
    private cunstomJsonService: CunstomJsonService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.loadScriptData();
    this.getAllLogs();
    this.onSelectItem(this.boundedId);

    this.onSelectScripName(this.scriptName);
    this.getCustomJsons();
  }

  getAllLogs(): void {
    //projectName:String = ''
    let projectId = this.route.snapshot.paramMap.get('id');
    this.logService.getLogsByProject(projectId).subscribe((retrivedLogs) => {
      this.logsByProject = retrivedLogs;
    });
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

  onSelectLogItem(itemId: any): any {
    this.boundedId = itemId;
    this.logQuery = true;
  }

  onSelectItem(itemId: any): any {
    this.boundedId = itemId;
    this.logQuery = false;
  }

  onSelectScripName(name: any): any {
    this.scriptName = name;
  }

  getAllScripts(): void {
    //projectName:String = ''
    let projectId = this.route.snapshot.paramMap.get('id');
    this.ldalScriptService
      .getLDALScripts(projectId)
      .subscribe((retrivedLogs) => {
        this.scriptsByProject = retrivedLogs;
      });
  }

  loadScriptData(): void {
    this.logService.getScriptById(this.childMessage).subscribe((scripts) => {
      this._id = scripts._id;
      this.scriptName = scripts.scriptName;
      this.projectId = scripts.projectId;
      this.boundStatus = scripts.boundStatus;
      this.boundedId = scripts.boundedId;
      this.scriptcontent = scripts.content;
    });
  }

  public showSuccess(): void {
    this.toastrService.info('', 'Success');
  }
  HandleBindJson(): void {
    const Script = {
      _id: this._id,
      scriptName: this.scriptName,
      projectId: this.projectId,
      boundStatus: true,
      logquery: this.logQuery,
      boundedId: this.boundedId,
      content: this.scriptcontent,
    };
    if (this.scriptName.length > 0) {
      this.logService.updateLDALscript(Script).subscribe((data) => {
        this.msgTrue = true;
        //window.location.reload();

        this.showSuccess();
        //this.getAllScripts();
      });
    }
  }

  HandleUnBindJson(): void {
    this.loadScriptData();
    const Script = {
      _id: this.childMessage,
      scriptName: this.scriptName,
      projectId: this.projectId,
      boundStatus: false,
      boundedId: '',
      logquery: this.logQuery,
      content: this.scriptcontent,
    };

    console.log(Script);

    if (this.scriptName.length > 0) {
      this.logService.updateLDALscript(Script).subscribe((data) => {
        this.msgTrue = true;
        //window.location.reload();

        this.showSuccess();
        //this.getAllScripts();
      });
    }
  }

  getCustomJsons(): void {
    let projectId = this.route.snapshot.paramMap.get('id');
    this.cunstomJsonService
      .getCustomJsons(projectId)
      .subscribe((retrivedLogs) => {
        this.jsonsByProject = retrivedLogs;
        console.log(retrivedLogs);
      });
  }
}
