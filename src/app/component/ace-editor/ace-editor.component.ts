import { Input } from '@angular/core';
import { Component,ViewChild, AfterViewInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { projectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-ace-editor',
  templateUrl: './ace-editor.component.html',
  styleUrls: ['./ace-editor.component.css']
})
export class AceEditorComponent implements AfterViewInit {
  constructor(private projectService:ProjectService,   private route: ActivatedRoute,private router:Router) {
    Auth.currentAuthenticatedUser().then().catch(err=>{
      this.router.navigate(['login']);
    })
   }

  @ViewChild('editor') editor:any;
  @Input() item = ''
  @Input () logFile :string = ''
  ngAfterViewInit() {

    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });
    this.editor.setTheme('vibrant_ink')
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
      newProject.scriptstatus = true
      newProject.script = btoa(this.editor.value)
      this.projectService.updateProject(newProject).subscribe(result=>{
        alert('Saved !!')
      })
    })
  }
}







