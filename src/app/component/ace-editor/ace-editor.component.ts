import {Input, OnInit} from '@angular/core';
import { Component,ViewChild, AfterViewInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { projectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/service/project.service';

import * as ace from 'ace-builds';

@Component({
  selector: 'app-ace-editor',
  templateUrl: './ace-editor.component.html',
  styleUrls: ['./ace-editor.component.css']
})
export class AceEditorComponent implements AfterViewInit ,OnInit{

  staticWordCompleter:any;
  constructor(private projectService:ProjectService,   private route: ActivatedRoute,private router:Router) {

    Auth.currentAuthenticatedUser().then().catch(err=>{
      this.router.navigate(['login']);
    })
   }

  @ViewChild('editor') editor:any;
  @Input() item = ''
  @Input () logFile :string = ''
  ngOnInit() {

    this.staticWordCompleter = {
      getCompletions: function(editor: any, session: any, pos: any, prefix: any, callback: (arg0: null, arg1: { caption: string; value: string; meta: string; }[]) => void) {
        var wordList = ['foo', 'bar', 'baz', 'Tharindu'];
        callback(
          null,
          wordList.map(function(word) {
            return {
              caption: word,
              value: word,
              meta: 'keyword'
            };
          })
        );
      }
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
      enableSnippets: true
    });
    this.editor.setTheme('dracula')
    this.editor.mode = 'tql';
    this.editor.value = `//Please enter your LDEL Script here`
    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function (editor:any) {

      }

    })

  }


 callmethod(){

    this.projectService.getProjectDetails(this.item).subscribe(projectDetail=>{
      const newProject :projectModel = projectDetail
      newProject.scriptStatus = true
      newProject.script = btoa(this.editor.value)
      this.projectService.updateProject(newProject).subscribe(result=>{
        alert('Saved !!')
      })
    })
  }
}







