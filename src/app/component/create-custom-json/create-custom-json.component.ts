import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CunstomJsonService } from 'src/app/service/cunstom-json.service';
import { customJsonpModel } from 'src/app/models/customJson.model';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-custom-json',
  templateUrl: './create-custom-json.component.html',
  styleUrls: ['./create-custom-json.component.css'],
})
export class CreateCustomJsonComponent implements OnInit {
  constructor(
    private CunstomJsonService: CunstomJsonService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private toastrService: ToastrService,
  ) {}
  fileList1: string[] = [];
  fileList2: string[] = [];

  _id: any;
  customjsonname: string = '';
  Projectid: any;
  Content: string = 'Drag and Drop a JSON Here';
  JsonList: customJsonpModel[] = [];
  JsonType: string = '';

  public showSuccess(): void {

    this.toastrService.success('', 'Success!');


  }

  setFileList(event: FileList) {
    console.log(event);
    event[0]
      .text()
      .then((val) => {
        this.Content = val;
      })
      .catch((err) => {
        this.Content = err;
      });
    this.fileList1 = Array.from(event).map((f) => f.name);
  }

  setFileList2(event: FileList) {
    this.fileList2 = Array.from(event).map((f) => f.name);
  }

  public ngDoCheck(): void {
    console.log('App component ngDoCheck()');
  }

  public fileContent: string = '';
  // When the user drops a text-file on the file-drop component, it will emit the
  // file-content as an event. I render the emitted file-content to the view.
  public renderFileContent(value: string): void {
    this.fileContent = value;
  }

  ngOnInit(): void {
    this.Projectid = this.route.snapshot.paramMap.get('id');
  }

  createJson() {
    this.Projectid = this.route.snapshot.paramMap.get('id');
    const newJson = {
      _id: this._id,
      customJsonName: this.customjsonname,
      projectId: this.Projectid,
      jsonType: this.JsonType,
      content: this.Content,
    };
    console.log(newJson);

    this.CunstomJsonService.createJson(newJson).subscribe((json) =>

      this.location.back()
    );
    this.showSuccess()
  }
}
