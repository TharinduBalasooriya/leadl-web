import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ace from 'ace-builds';
import { Auth } from 'aws-amplify';
import { LDALscriptModel } from 'src/app/models/ldalScript.model';
import { LDALScriptService } from 'src/app/service/ldal-script.service';
import { LogserviceService } from 'src/app/service/logservice.service';
import { ProjectService } from 'src/app/service/project.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-ldaleditor',
  templateUrl: './ldaleditor.component.html',
  styleUrls: ['./ldaleditor.component.css'],
})

export class LDALEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor: any;

  staticWordCompleter: any;
  projectId: any;

  scriptName: string = '';
  _id: any = '';
  boundStatus: boolean = true;
  boundedId: string = '';
  content: string = '';
  scriptList: LDALscriptModel[] = [];
  closeResult = '';
  msgTrue = false;
  consoleOpen = false;

  constructor(
    private logService: LogserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private ldalScriptService: LDALScriptService,
    private modalService: NgbModal,
    private location: Location
  ) {
    Auth.currentAuthenticatedUser()
      .then()
      .catch((err) => {
        this.router.navigate(['login']);
      });
  }

  public fileContent: string = '';

  public ngDoCheck(): void {
    console.log('App component ngDoCheck()');
  }



  ngOnInit(): void {

    this._id = this.route.snapshot.paramMap.get('id');
    this.loadScriptData();




    this.staticWordCompleter = {
      getCompletions: function (
        editor: any,
        session: any,
        pos: any,
        prefix: any,
        callback: (
          arg0: null,
          arg1: { caption: string; value: string; meta: string }[]
        ) => void
      ) {
        let wordList = [
          'TRUE',
          'IfNot',
          'RET',
          'ARG',
          'EndFunction',
          'Break',
          'Item',
          'Function',
          'EndFunction',
          'FALSE',
          'Do',
          'While',
          'EndIf',
          'IfNot',
          'If',
         ' Break',
					'Continue',
					'LeftSibling',
				'RightSibling',
					'Parent',
			'FirstChild',
				'Children',
					'ChildCount',
					'GetValue',
					'GetLValue',
				'GetRValue',
				'GetCustomString',
						'GetId',
					'GetType',
					'GetNature',
					'GetWeight',
				'GetMinimumChildWeight',
			'GetMaximumChildWeight',
					'SetValue',
				'SetLValue',
					'SetRValue',
					'SetType',
				'SetNature',
			'SetCustomString',
			'SetMinimumChildWeight',
				'SetMaximumChildWeight',
				'SetWeight',
						'Expand',
					'AddNode',
				'AddNodeWithWeight',
				'ReadFromFile',
			'GetAggregatedValue',
				'GetSubtree',
						'IsType',
					'IsValue',
				'GetChildOfType',
				'IsStringEqualTo',
				'IsStringMemberOf',
				'IsHavingSubstring',
			'IsHavingLeftSubstring',
			'IsHavingRightSubstring',
					'AddPrefix',
					'AddPostFix',
					'TrimLeft',
					'TrimRight',
					'WriteToFile',
				'GetLength',
				'IsIntEqualTo',
				'IsIntMemberOf',
					'IsLessThan',
			'IsLessThanOrEqualTo',
					'IsGreaterThan',
			'IsGreaterThanOrEqualTo',
					'Add',
					'Subtract',
					'ToString',
				'GetItemCount',
						'Seek',
				'SeekToBegin',
				'SeekToEnd',
					'GetCurrentElement',
						'IsNull',
					'IsNotNull',
					'And',
					'Or',

				'(NUMBER)',
				'(STRING)',
				'(SPACES)',
				'(FLOAT)'



        ];
        callback(
          null,
          wordList.map(function (word) {
            return {
              caption: word,
              value: word,
              meta: 'keyword',
            };
          })
        );
      },
    };
  }

  ngAfterViewInit() {
    const langTools = ace.require('ace/ext/language_tools');

    langTools.setCompleters([this.staticWordCompleter]);

    this.editor.getEditor().setShowPrintMargin(false);
    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      fontSize: '15px',
    });
    this.editor.setTheme('dracula');
    this.editor.mode = 'tql';
    this.editor.value = this.content;
    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: function (editor: any) {},
    });
  }

  loadScriptData(): void {
    let _id = this.route.snapshot.paramMap.get('id');
    this.logService.getScriptById(_id).subscribe((scripts) => {
      this._id = scripts._id;
      this.scriptName = scripts.scriptName;
      this.projectId = scripts.projectId;
      this.boundStatus = scripts.boundStatus;
      this.boundedId = scripts.boundedId;
      this.content = scripts.content;
      this.editor.value = atob(this.content);

    });

  }

  Savescript(): void {
    this.loadScriptData();
    const Script = {
      _id: this._id,
      scriptName: this.scriptName,
      projectId: this.projectId,
      boundStatus: this.boundStatus,
      boundedId: this.boundedId,
      logquery:false,
      content: btoa(this.editor.value),

    }



    this.logService.updateLDALscript(Script).subscribe((data) => {
      this.msgTrue = true;
      this.location.back()
    });
  }

  OpenDebugConsole():void{
    if(this.consoleOpen){
      this.consoleOpen = false;
    }else{
      this.consoleOpen = true;
    }


  }



}
