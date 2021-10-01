import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogModel } from 'src/app/models/log.model';
import { LDALDebugModel } from 'src/app/models/result.model';
import { customJsonpModel } from 'src/app/models/customJson.model';
import { LDALRequst } from 'src/app/models/request.model';
import { LogserviceService } from 'src/app/service/logservice.service';
import { CunstomJsonService } from 'src/app/service/cunstom-json.service';

@Component({
  selector: 'app-watcher-pane',
  templateUrl: './watcher-pane.component.html',
  styleUrls: ['./watcher-pane.component.css'],
})
export class WatcherPaneComponent implements OnInit {
  varaibles: LDALDebugModel[] = [];
  baseGraphs: LogModel[] = [];
  customJSONList: customJsonpModel[] = [];
  @Input() projectId: any;
  selectedBaseGraphId?: string;
  selectedBaseGraphName?: string;
  selectedVariable?: LDALDebugModel;
  logTypeGraph: boolean = false;

  baseGraphContent?: string ;
  @Input() query?: string ;
  customJSONType?:string;
  debugStarted: boolean = false;
  request?: LDALRequst;
  constructor(
    private logService: LogserviceService,
    private route: ActivatedRoute,
    private customJSONService : CunstomJsonService
  ) {}

  ngOnInit(): void {
    // this.projectId = this.route.snapshot.paramMap.get('id');
    console.log('TADA ID' + this.projectId);
    this.getBaseGraphs();
    this.getCustomJSONS();
  }

  getCustomJSONS():void{

    this.customJSONService.getCustomJsons(this.projectId)
    .subscribe((result) => {
      //this.jsonsByProject = retrivedLogs;
      this.customJSONList = result;
    });
  }

  // getCustomJsons(): void {

  // }
  onSelectCustomJSON(selected:customJsonpModel):void{
    console.log(selected)
    this.selectedBaseGraphName = selected.customJsonName;
    this.baseGraphContent = selected.content;
    this.customJSONType = selected.jsonType;

  }

  getBaseGraphs(): void {
    this.logService
      .getLogsByProject(this.projectId)
      .subscribe((retrivedLogs) => {
        this.baseGraphs = retrivedLogs;
        console.log('GotGraphs');
      });
  }

  onSelectGraph(baseId: any, baseName: any, logType: any): void {
    this.selectedBaseGraphId = baseId;
    this.selectedBaseGraphName = baseName;
    this.getGraph();
  }

  getGraph() {
    this.logService
      .executeLdelScript(this.selectedBaseGraphId)
      .subscribe((value) => {
        this.baseGraphContent = value.result;
      });
  }

  onDebug() {
    console.log('OnDebugCalled');
    if (!this.debugStarted) {
      this.debugStarted = true;

      this.getLDALDebugResult();
    } else {
      //Write Function to collapse debug console
      this.debugStarted = false;
    }
  }
  getLDALDebugResult() {


    if(this.baseGraphContent ){
        this.logService
      .debugLdalScript({
        //@ts-ignore
        tree: this.baseGraphContent,
        //@ts-ignore
        query: this.query,
        type:this.customJSONType
      })
      .subscribe((values) => {
        this.varaibles = values.variables;
        console.log('called');
      });

    }

  }

  onClickvaraible(variableIndex: any) {
    this.selectedVariable = this.varaibles[variableIndex];
    console.log(this.selectedVariable);
  }
}
