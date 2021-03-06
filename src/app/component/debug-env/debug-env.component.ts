import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { LogModel } from 'src/app/models/log.model';
import { projectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/service/project.service';
import * as ace from 'ace-builds';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-debug-env',
  templateUrl: './debug-env.component.html',
  styleUrls: ['./debug-env.component.css'],
})
export class DebugEnvComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor: any;

  staticWordCompleter: any;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
  ) {
    Auth.currentAuthenticatedUser()
      .then()
      .catch((err) => {
        this.router.navigate(['login']);
      });
  }

  public fileContent: string = '';

  projectId: any = '';
  script: string =
    "// Variable definitions\n\n$TEST_SUITE = $(STRING)\n$TEST = $(STRING)\n\n\n// Line template definitions\n\n$$TEST_START = ['Test Case '-[', $TEST_SUITE, ' ', $TEST, ']' started.']\n$$TEST_PASSED = ['Test Case '-[', $TEST_SUITE, ' ', $TEST, ']' passed (', $TIME_INTERVAL, ' seconds).']\n$$TEST_FAILED = ['Test Case '-[', $TEST_SUITE, ' ', $TEST, ']' failed (', $TIME_INTERVAL, ' seconds).']\n$$NONEMPTY_LINE = [$(STRING)]\n\n\n// Block template definitions\n\n$$$TEST_EXECUTION_SUCCESS = [$$TEST_START, $$NONEMPTY_LINE_SEQUENCE, $$TEST_PASSED]";
  logFile: string = 'Drag and drop a log file here';
  resultPending: any = false;
  resultString: string = '';

  fileList1: string[] = [];
  fileList2: string[] = [];
  textVal: string = '';

  setFileList(event: FileList) {
    console.log(event);
    event[0]
      .text()
      .then((val) => {
        this.textVal = val;
        this.logFile = val;
      })
      .catch((err) => {
        this.textVal = err;
      });
    this.fileList1 = Array.from(event).map((f) => f.name);
  }

  setFileList2(event: FileList) {
    this.fileList2 = Array.from(event).map((f) => f.name);
  }

  public ngDoCheck(): void {
    console.log('App component ngDoCheck()');
  }

  // When the user drops a text-file on the file-drop component, it will emit the
  // file-content as an event. I render the emitted file-content to the view.
  public renderFileContent(value: string): void {
    this.fileContent = value;
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
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

    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
    });
    this.editor.setTheme('dracula');
    this.editor.mode = 'tql';
    this.editor.value = this.script;
    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: function (editor: any) {},
    });
  }

  
  public showSuccess(): void {

    this.toastrService.success('', 'Success!');


  }
  onExecute() {
    this.resultPending = true;
    const newDebgProject = {
      project_id: this.route.snapshot.paramMap.get('id'),
      ldel_script: btoa(this.editor.value),
      log_file: btoa(this.logFile),
    };
    setTimeout(() => {
      this.resultPending = false;
    }, 2000);
    this.projectService
      .createDebugProject(newDebgProject)
      .subscribe((resut1) => {
        this.projectService
          .executeDebugProject(newDebgProject.project_id)
          .subscribe((result) => {
            this.resultString = result.response;
          });
      });

      

    this.projectService
      .getProjectDetails(this.route.snapshot.paramMap.get('id'))
      .subscribe((projectDetail) => {
        const newProject: projectModel = projectDetail;
        newProject.scriptStatus = true;
        newProject.script = btoa(this.editor.value);
        this.projectService.updateProject(newProject).subscribe((result) => {
          this.showSuccess();
        });
      });
  }
}








